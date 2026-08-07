/* MIRAVERBA — service worker.
   Делает из сайта приложение: страницы открываются без интернета,
   а курс можно скачать целиком заранее.

   ЧТО ВАЖНО ЗНАТЬ, ЕСЛИ ПРАВИШЬ ЭТОТ ФАЙЛ
   ────────────────────────────────────────
   1. Подняла VERSION — старые кэши оболочки стираются, приложение
      обновляется у всех. Делай это при каждом заметном изменении сайта.
   2. Кэш СКАЧАННЫХ КУРСОВ (CACHE_COURSE) версией НЕ стирается — иначе
      каждый деплой выкидывал бы у человека 2 МБ, которые он скачал
      в дорогу. Свежесть там держится иначе: при сети данные курса
      тихо обновляются в фоне (stale-while-revalidate).
   3. Ничего кросс-доменного, кроме шрифтов Google, не кэшируем —
      счётчик посещений должен ходить в сеть по-настоящему.
*/

const VERSION = 'v3';

const SHELL   = 'mv-shell-'   + VERSION;  // оболочка: страницы и общие скрипты
const RUNTIME = 'mv-runtime-' + VERSION;  // всё остальное, что человек открыл сам
const FONTS   = 'mv-fonts';               // шрифты Google (ссылки вечные)
const COURSE  = 'mv-course';              // курсы, скачанные кнопкой «в дорогу»

/* Переживают смену версии — их чистит только человек кнопкой «очистить». */
const KEEP = [FONTS, COURSE];

/* Оболочка. Данные курсов сюда НЕ входят: они весят 24 МБ, и качать их
   при установке никто не просил. Курс попадает в кэш, когда его открыли
   или скачали кнопкой. */
const SHELL_URLS = [
  'index.html',
  'placement.html',
  'buy.html',
  'certificate.html',
  'privacy.html',
  'terms.html',
  'offline.html',
  'theme.css',
  'theme.js',
  'i18n.js',
  'streak.js',
  'app.js',
  'app.css',
  'manifest.webmanifest',
  'assets/icon-192.png',
  'assets/icon-512.png',
  'assets/apple-touch-icon.png',
  'courses/engine.js',
  'courses/engine.css',
  'courses/paywall.js',
  'courses/i18n-courses.js',
];

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

/* Ключ кэша для страницы — только путь, без «?day=5» и «?unlock=1»:
   иначе один и тот же урок лёг бы в кэш тридцатью копиями. */
function pageKey(url) {
  return new Request(url.origin + url.pathname, { headers: { Accept: 'text/html' } });
}

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const cache = await caches.open(SHELL);
    /* По одному, а не addAll: addAll падает целиком, если хоть один файл
       не отдался, и тогда приложение не устанавливается вообще. */
    await Promise.all(SHELL_URLS.map(async u => {
      try { await cache.add(new Request(u, { cache: 'reload' })); }
      catch (err) { console.warn('[sw] не удалось положить в кэш', u, err); }
    }));
    /* Не активируемся молча: страница сама решит, когда переключиться,
       и покажет человеку «доступно обновление». */
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map(n => {
      if (!n.startsWith('mv-')) return null;          // чужие кэши не трогаем
      if (n === SHELL || n === RUNTIME) return null;
      if (KEEP.includes(n)) return null;
      return caches.delete(n);
    }));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (_) { return; }

  // ---- шрифты Google: сначала кэш, обновление в фоне ----
  if (FONT_HOSTS.includes(url.hostname)) {
    e.respondWith(staleWhileRevalidate(req, FONTS));
    return;
  }

  // ---- остальное чужое (счётчик и пр.) — всегда в сеть ----
  if (url.origin !== self.location.origin) return;

  // ---- переход на страницу: сеть, при неудаче — кэш, потом «нет сети» ----
  if (req.mode === 'navigate') {
    e.respondWith(pageFirst(req, url));
    return;
  }

  // ---- файлы курса и всё прочее ----
  e.respondWith(assetFirst(req));
});

async function pageFirst(req, url) {
  const key = pageKey(url);
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok) {
      const copy = fresh.clone();
      caches.open(RUNTIME).then(c => c.put(key, copy)).catch(() => {});
    }
    return fresh;
  } catch (_) {
    const hit = (await caches.match(key)) || (await caches.match(key, { cacheName: SHELL }));
    if (hit) return hit;
    const offline = await caches.match('offline.html');
    return offline || new Response(
      '<meta charset="utf-8"><p style="font:16px/1.6 system-ui;padding:40px">Нет сети, а эта страница ещё не сохранена.</p>',
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }
}

/* Скачанный курс и оболочка отдаются из кэша сразу — это и есть «мгновенно
   и без интернета». Параллельно, если сеть есть, копия обновляется. */
async function assetFirst(req) {
  const hit = await caches.match(req, { ignoreSearch: false });
  if (hit) {
    fetch(req).then(fresh => {
      if (!fresh || !fresh.ok) return;
      cacheNameFor(req).then(name => caches.open(name).then(c => c.put(req, fresh)));
    }).catch(() => {});
    return hit;
  }
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok && fresh.type === 'basic') {
      const copy = fresh.clone();
      caches.open(RUNTIME).then(c => c.put(req, copy)).catch(() => {});
    }
    return fresh;
  } catch (err) {
    /* Сети нет и точной копии нет. Скорее всего сменилась версия в адресе
       (engine.js?v=7 → ?v=8), и лежит предыдущая. Отдать её лучше, чем
       уронить страницу: иначе одно обновление сайта ломало бы офлайн
       у всех, кто не успел зайти при интернете. */
    const old = await caches.match(req, { ignoreSearch: true });
    if (old) return old;
    return new Response('', { status: 504, statusText: 'offline' });
  }
}

/* Куда класть обновлённую копию: если файл лежит в скачанном курсе —
   туда же, чтобы обновление не выпало из офлайн-набора. */
async function cacheNameFor(req) {
  const inCourse = await caches.open(COURSE).then(c => c.match(req));
  return inCourse ? COURSE : RUNTIME;
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  const net = fetch(req).then(res => {
    if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()).catch(() => {});
    return res;
  }).catch(() => null);
  return hit || (await net) || new Response('', { status: 504 });
}

/* ---------- разговор со страницей ---------- */

self.addEventListener('message', e => {
  const msg = e.data || {};
  const reply = m => { try { e.source && e.source.postMessage(m); } catch (_) {} };

  if (msg.type === 'SKIP_WAITING') { self.skipWaiting(); return; }

  if (msg.type === 'CACHE_COURSE') {
    e.waitUntil(downloadCourse(msg.id, msg.urls || [], reply));
    return;
  }

  if (msg.type === 'DROP_COURSE') {
    e.waitUntil((async () => {
      const cache = await caches.open(COURSE);
      await Promise.all((msg.urls || []).map(u => cache.delete(u)));
      reply({ type: 'COURSE_DROPPED', id: msg.id });
    })());
    return;
  }

  if (msg.type === 'COURSE_STATUS') {
    e.waitUntil((async () => {
      const cache = await caches.open(COURSE);
      const urls = msg.urls || [];
      let have = 0;
      for (const u of urls) if (await cache.match(u)) have++;
      reply({ type: 'COURSE_STATUS', id: msg.id, have, total: urls.length });
    })());
    return;
  }

  /* Первый заход: страница успела загрузиться ДО того, как service worker
     взял её под себя, поэтому ни один её файл в кэш не попал. Страница
     присылает список того, что загрузила, и мы догоняем — иначе человек,
     открывший курс и сразу потерявший сеть, не увидел бы ничего. */
  if (msg.type === 'WARM') {
    e.waitUntil((async () => {
      const urls = msg.urls || [];
      for (const u of urls) {
        try {
          const isFont = FONT_HOSTS.some(h => u.includes('//' + h));
          const cache = await caches.open(isFont ? FONTS : RUNTIME);
          if (await cache.match(u)) continue;
          /* Без cache:'reload' — файлы только что скачаны, пусть браузер
             возьмёт их из своего кэша, а не тянет мобильный интернет заново. */
          const res = await fetch(u);
          if (res && (res.ok || res.type === 'opaque')) await cache.put(u, res.clone());
        } catch (_) { /* не догнали — не беда, догоним на следующем заходе */ }
      }
    })());
    return;
  }

  if (msg.type === 'CLEAR_ALL') {
    e.waitUntil((async () => {
      const names = await caches.keys();
      await Promise.all(names.filter(n => n.startsWith('mv-')).map(n => caches.delete(n)));
      reply({ type: 'CLEARED' });
    })());
  }
});

async function downloadCourse(id, urls, reply) {
  const cache = await caches.open(COURSE);
  let done = 0;
  let bytes = 0;
  const failed = [];
  /* По три штуки за раз: и не душит мобильный интернет, и не тянется вечно. */
  const queue = urls.slice();
  async function worker() {
    while (queue.length) {
      const u = queue.shift();
      try {
        const res = await fetch(u, { cache: 'reload' });
        if (res && res.ok) {
          await cache.put(u, res.clone());
          /* Вес берём из заголовка — иначе пришлось бы читать тело второй раз
             и держать в памяти телефона все 2 МБ разом. */
          const len = parseInt(res.headers.get('content-length') || '0', 10);
          if (len > 0) bytes += len;
        } else failed.push(u);
      } catch (_) { failed.push(u); }
      done++;
      reply({ type: 'COURSE_PROGRESS', id, done, total: urls.length });
    }
  }
  await Promise.all([worker(), worker(), worker()]);
  reply({ type: 'COURSE_DONE', id, ok: failed.length === 0, failed, bytes });
}
