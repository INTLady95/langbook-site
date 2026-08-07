/* MIRAVERBA — приложение поверх сайта.
   Подключается последним на КАЖДОЙ странице (после theme.js) и делает четыре вещи:

     1. Ставит service worker → сайт открывается без интернета.
     2. Предлагает установить себя на телефон/компьютер (на iPhone — объясняет,
        как это сделать руками: там браузер не умеет предлагать сам).
     3. Даёт скачать курс целиком «в дорогу» и показывает, что уже скачано.
     4. Замечает новую версию сайта и предлагает обновиться, а не молча
        подсовывает половину старого, половину нового.

   Всё видимое собрано в одном окне: ☰ → «Приложение».
   Ничего не ломается, если service worker недоступен (file://, старый браузер,
   приватное окно) — просто окно покажет честное «здесь офлайн не работает».
*/
(function () {
  'use strict';

  var T = window.T || function (k, ru) { return ru; };
  var ROOT = /\/(courses|lessons|lab)\//.test(location.pathname || '') ? '../' : '';
  var OFFLINE_KEY = 'langbook-offline';   // {courseId: {t:'Polski C2', n:34, b:2100000, at:'2026-08-07'}}
  var SUPPORTED = 'serviceWorker' in navigator && /^https?:$/.test(location.protocol);

  var reg = null;        // регистрация service worker
  var waiting = null;    // новая версия, ждущая разрешения встать
  var deferredPrompt = null;
  var reloading = false;

  /* ---------- мелкие помощники ---------- */

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  /* Дробную часть отдаём локали: по-русски и по-испански это «2,7», по-английски «2.7». */
  function mb(bytes) {
    if (!bytes) return '';
    var lang = 'ru';
    try { lang = localStorage.getItem('langbook-ui-lang') || 'ru'; } catch (e) {}
    if (bytes < 1048576) return Math.max(1, Math.round(bytes / 1024)) + ' ' + T('app.kb', 'КБ');
    var n = bytes / 1048576;
    var s;
    try { s = n.toLocaleString(lang, { maximumFractionDigits: 1 }); } catch (e) { s = n.toFixed(1); }
    return s + ' ' + T('app.mb', 'МБ');
  }
  function loadOffline() {
    try { return JSON.parse(localStorage.getItem(OFFLINE_KEY) || '{}'); } catch (e) { return {}; }
  }
  function saveOffline(o) {
    try { localStorage.setItem(OFFLINE_KEY, JSON.stringify(o)); } catch (e) {}
  }
  function isStandalone() {
    return (window.matchMedia && matchMedia('(display-mode: standalone)').matches) ||
           navigator.standalone === true;
  }
  function isIOS() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent) ||
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPad с iPadOS
  }

  /* ---------- цвет системной шапки под текущую тему ---------- */

  var THEME_COLOR = { light: '#f7f2e7', dark: '#161311', petrol: '#0f1b1f', ultraneon: '#0a0710' };
  function paintThemeColor() {
    var id = document.documentElement.getAttribute('data-theme') || 'light';
    var m = document.querySelector('meta[name="theme-color"]');
    if (!m) { m = el('meta'); m.name = 'theme-color'; document.head.appendChild(m); }
    m.setAttribute('content', THEME_COLOR[id] || THEME_COLOR.light);
  }

  /* ---------- какие файлы составляют текущий курс ---------- */

  /* Список собирается из самой страницы, а не из захардкоженной таблицы:
     тогда он верен для любого курса — и для тех, где данные лежат в days.js,
     и для тех, где в days-pl-c2.js. Картинки берём из самих данных курса.
     Считается один раз: данные курса весят до 2 МБ, и перебирать их
     на каждую перерисовку окна — заметная задержка на телефоне. */
  var assetsCache;
  function courseAssets() {
    if (assetsCache !== undefined) return assetsCache;
    assetsCache = buildAssets();
    return assetsCache;
  }
  function buildAssets() {
    if (!window.LEVEL || !LEVEL.course) return null;
    var urls = [location.origin + location.pathname];
    function add(u) {
      if (!u) return;
      var a;
      try { a = new URL(u, location.href); } catch (e) { return; }
      if (a.origin !== location.origin) return;   // шрифты Google кэшируются сами
      var s = a.origin + a.pathname + a.search;
      if (urls.indexOf(s) === -1) urls.push(s);
    }
    var i, nodes = document.querySelectorAll('script[src],link[rel="stylesheet"][href]');
    for (i = 0; i < nodes.length; i++) add(nodes[i].getAttribute('src') || nodes[i].getAttribute('href'));

    /* Картинки уроков и экзаменов лежат в данных как "img/a2/day-01.jpg".
       DAYS и EXAMS объявлены в файлах курса через const — такие переменные
       НЕ попадают в window, поэтому берём их по имени через typeof.
       Через window.DAYS список картинок всегда оказывался бы пустым. */
    try {
      var days  = (typeof DAYS  !== 'undefined') ? DAYS  : (window.DAYS  || {});
      var exams = (typeof EXAMS !== 'undefined') ? EXAMS : (window.EXAMS || []);
      var blob = JSON.stringify(days) + JSON.stringify(exams);
      var found = blob.match(/img\/[A-Za-z0-9._\/-]+\.(?:jpg|jpeg|png|webp|svg)/g) || [];
      for (i = 0; i < found.length; i++) add(found[i]);
    } catch (e) {}

    return { id: LEVEL.course, title: courseTitle(), urls: urls };
  }
  function courseTitle() {
    var t = (document.title || '').split('·')[0].trim();
    return t || (window.LEVEL && LEVEL.course) || '';
  }

  /* ---------- окно «Приложение» ---------- */

  var sheet = null, scrim = null;

  function openSheet() { buildSheet(); renderSheet(); scrim.classList.add('on'); sheet.classList.add('on'); }
  function closeSheet() { if (sheet) { sheet.classList.remove('on'); scrim.classList.remove('on'); } }

  function buildSheet() {
    if (sheet) return;
    scrim = el('div', 'mv-scrim');
    scrim.addEventListener('click', closeSheet);
    sheet = el('section', 'mv-sheet');
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-label', T('app.title', 'Приложение'));
    document.body.appendChild(scrim);
    document.body.appendChild(sheet);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSheet(); });
  }

  function renderSheet() {
    var h = '<div class="mv-grip"></div>'
      + '<div class="mv-head">'
      +   '<img src="' + ROOT + 'assets/icon-192.png" alt="">'
      +   '<div><h3>' + esc(T('app.title', 'Приложение')) + '</h3>'
      +   '<p>' + esc(T('app.sub', 'MIRAVERBA на телефоне и без интернета')) + '</p></div>'
      +   '<button class="mv-x" aria-label="' + esc(T('app.close', 'Закрыть')) + '">✕</button>'
      + '</div>';

    /* — установка — */
    h += '<div class="mv-sec">';
    if (isStandalone()) {
      h += '<p class="mv-p mv-ok">✓ ' + esc(T('app.installed', 'Установлено. Ты открыл(а) MIRAVERBA как приложение.')) + '</p>';
    } else if (deferredPrompt) {
      h += '<h4>' + esc(T('app.install.h', 'Установить')) + '</h4>'
        +  '<p class="mv-p">' + esc(T('app.install.p', 'Иконка появится рядом с остальными приложениями. Откроется без адресной строки и будет работать без интернета.')) + '</p>'
        +  '<button class="mv-btn" data-act="install"><span>📲</span><span>' + esc(T('app.install.btn', 'Установить приложение')) + '</span></button>';
    } else if (isIOS()) {
      h += '<h4>' + esc(T('app.install.h', 'Установить')) + '</h4>'
        +  '<p class="mv-p">' + esc(T('app.ios.p', 'На iPhone и iPad это делается вручную — в Safari:')) + '</p>'
        +  '<ol class="mv-steps">'
        +    '<li>' + esc(T('app.ios.1', 'нажми «Поделиться» — квадрат со стрелкой вверх;')) + '</li>'
        +    '<li>' + esc(T('app.ios.2', 'выбери «На экран „Домой“»;')) + '</li>'
        +    '<li>' + esc(T('app.ios.3', 'нажми «Добавить».')) + '</li>'
        +  '</ol>';
    } else {
      h += '<h4>' + esc(T('app.install.h', 'Установить')) + '</h4>'
        +  '<p class="mv-p">' + esc(T('app.install.later', 'Браузер предложит установку сам, когда убедится, что ты здесь не случайно. Загляни сюда через пару уроков — кнопка появится.')) + '</p>';
    }
    h += '</div>';

    /* — офлайн — */
    h += '<div class="mv-sec"><h4>' + esc(T('app.offline.h', 'Без интернета')) + '</h4>';
    if (!SUPPORTED) {
      h += '<p class="mv-p">' + esc(T('app.offline.no', 'В этом браузере офлайн недоступен: он не поддерживает нужную технологию либо страница открыта не по https. Учиться это не мешает — нужен интернет.')) + '</p>';
    } else {
      h += '<p class="mv-p">' + esc(T('app.offline.p', 'Страницы, которые ты открывал(а), сохраняются сами. Курс можно скачать целиком заранее — например, перед самолётом.')) + '</p>';

      var c = courseAssets();
      if (c) {
        var saved = loadOffline()[c.id];
        h += '<div id="mvCourseBox">' + courseBoxHtml(c, saved) + '</div>';
      }

      var off = loadOffline(), ids = Object.keys(off);
      if (ids.length) {
        h += '<h4 style="margin-top:15px">' + esc(T('app.saved.h', 'Скачано')) + '</h4>';
        for (var i = 0; i < ids.length; i++) {
          var r = off[ids[i]];
          h += '<div class="mv-row" data-course="' + esc(ids[i]) + '">'
            +    '<span class="mv-nm">' + esc(r.t || ids[i]) + '</span>'
            +    '<span class="mv-sz">' + esc(mb(r.b)) + '</span>'
            +    '<button data-act="drop" data-id="' + esc(ids[i]) + '" title="' + esc(T('app.drop', 'Удалить с устройства')) + '">🗑</button>'
            +  '</div>';
        }
      }
      h += '<p class="mv-note" id="mvQuota"></p>';
    }
    h += '</div>';

    /* — обновление и уборка — */
    h += '<div class="mv-sec"><h4>' + esc(T('app.upd.h', 'Версия')) + '</h4>';
    if (waiting) {
      h += '<p class="mv-p"><b>' + esc(T('app.upd.ready', 'Готово обновление сайта.')) + '</b> ' + esc(T('app.upd.readyP', 'Прогресс и ключи не тронутся — они хранятся отдельно.')) + '</p>'
        +  '<button class="mv-btn" data-act="update"><span>↻</span><span>' + esc(T('app.upd.btn', 'Обновить сейчас')) + '</span></button>';
    } else {
      h += '<p class="mv-p">' + esc(T('app.upd.latest', 'У тебя последняя версия.')) + '</p>'
        +  '<button class="mv-btn ghost" data-act="check"><span>↻</span><span>' + esc(T('app.upd.check', 'Проверить обновления')) + '</span></button>';
    }
    if (SUPPORTED) {
      h += '<button class="mv-btn ghost danger" data-act="clear"><span>🧹</span><span>' + esc(T('app.clear', 'Очистить сохранённое')) + '</span></button>'
        +  '<p class="mv-note">' + esc(T('app.clear.note', 'Удалит только сохранённые файлы сайта. Прогресс уроков, ключи и заметки останутся.')) + '</p>';
    }
    h += '</div>';

    sheet.innerHTML = h;
    showQuota();
    if (courseAssets()) refreshCourseBox();
  }

  function courseBoxHtml(c, saved) {
    if (saved) {
      return '<p class="mv-p mv-ok">✓ <b>' + esc(T('app.course.done', 'Курс сохранён на устройстве')) + '</b>'
        + (saved.b ? ' · ' + esc(mb(saved.b)) : '') + '</p>'
        + '<button class="mv-btn ghost danger" data-act="drop" data-id="' + esc(c.id) + '">'
        + '<span>🗑</span><span>' + esc(T('app.course.drop', 'Удалить курс с устройства')) + '</span></button>';
    }
    return '<button class="mv-btn" data-act="download"><span>⤓</span><span>' + esc(T('app.course.get', 'Скачать этот курс в дорогу')) + '</span></button>'
      + '<div class="mv-bar" id="mvBar" style="display:none"><i></i></div>'
      + '<p class="mv-note" id="mvBarNote" style="display:none"></p>';
  }

  function refreshCourseBox() {
    /* Сверяемся с реальностью: запись в localStorage могла пережить очистку
       кэша браузером, и обещать «скачано», когда файлов уже нет, — обман. */
    var c = courseAssets();
    if (!c || !SUPPORTED || !navigator.serviceWorker.controller) return;
    post({ type: 'COURSE_STATUS', id: c.id, urls: c.urls });
  }

  function showQuota() {
    var n = sheet && sheet.querySelector('#mvQuota');
    if (!n || !navigator.storage || !navigator.storage.estimate) return;
    navigator.storage.estimate().then(function (e) {
      if (!e || !e.usage) return;
      n.textContent = T('app.quota', 'Занято на устройстве:') + ' ' + mb(e.usage);
    }).catch(function () {});
  }

  /* ---------- действия в окне ---------- */

  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    if (e.target.closest('.mv-x')) { closeSheet(); return; }
    var b = e.target.closest('[data-act]');
    if (!b || !sheet || !sheet.contains(b)) return;
    var act = b.getAttribute('data-act');

    if (act === 'install' && deferredPrompt) {
      var p = deferredPrompt; deferredPrompt = null;
      p.prompt();
      p.userChoice.then(function () { renderSheet(); }).catch(function () {});
      return;
    }
    if (act === 'download') { startDownload(b); return; }
    if (act === 'drop') { dropCourse(b.getAttribute('data-id')); return; }
    if (act === 'update') { applyUpdate(); return; }
    if (act === 'check') {
      b.disabled = true;
      b.textContent = T('app.upd.checking', 'Проверяю…');
      (reg ? reg.update() : Promise.resolve()).then(function () {
        setTimeout(function () { renderSheet(); }, 800);
      }).catch(function () { renderSheet(); });
      return;
    }
    if (act === 'clear') {
      if (!confirm(T('app.clear.ask', 'Удалить все сохранённые файлы сайта? Прогресс уроков останется.'))) return;
      post({ type: 'CLEAR_ALL' });
      saveOffline({});
      b.disabled = true;
      b.textContent = T('app.clear.done', 'Очищено');
    }
  });

  function startDownload(btn) {
    var c = courseAssets();
    if (!c) return;
    if (!SUPPORTED || !navigator.serviceWorker.controller) {
      alert(T('app.course.notReady', 'Сохранение ещё готовится — обнови страницу и попробуй снова.'));
      return;
    }
    /* Просим браузер не выкидывать скачанное при нехватке места. */
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
    btn.disabled = true;
    btn.textContent = T('app.course.working', 'Скачиваю…');
    var bar = sheet.querySelector('#mvBar'), note = sheet.querySelector('#mvBarNote');
    if (bar) bar.style.display = '';
    if (note) note.style.display = '';
    post({ type: 'CACHE_COURSE', id: c.id, urls: c.urls });
  }

  function dropCourse(id) {
    var c = courseAssets();
    var urls = (c && c.id === id) ? c.urls : null;
    if (!urls) {
      /* Курс другой страницы: точного списка нет — чистим всё скачанное,
         честно предупредив. Так не остаётся «призраков» в списке. */
      if (!confirm(T('app.drop.other', 'Удалить сохранённые курсы с устройства? Прогресс останется.'))) return;
      post({ type: 'CLEAR_ALL' });
      saveOffline({});
      renderSheet();
      return;
    }
    post({ type: 'DROP_COURSE', id: id, urls: urls });
    var off = loadOffline(); delete off[id]; saveOffline(off);
    renderSheet();
    syncChip();
  }

  function post(msg) {
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage(msg);
    }
  }

  /* ---------- ответы service worker ---------- */

  if (SUPPORTED) {
    navigator.serviceWorker.addEventListener('message', function (e) {
      var m = e.data || {};

      if (m.type === 'COURSE_PROGRESS' && sheet) {
        var bar = sheet.querySelector('#mvBar i'), note = sheet.querySelector('#mvBarNote');
        if (bar) bar.style.width = Math.round(m.done / m.total * 100) + '%';
        if (note) note.textContent = m.done + ' / ' + m.total + ' ' + T('app.files', 'файлов');
      }

      if (m.type === 'COURSE_DONE') {
        var c = courseAssets();
        var off = loadOffline();
        off[m.id] = { t: (c && c.id === m.id) ? c.title : m.id, n: (c ? c.urls.length : 0), b: m.bytes || 0, at: new Date().toISOString().slice(0, 10) };
        saveOffline(off);
        if (sheet) renderSheet();
        syncChip();
        if (!m.ok) {
          alert(T('app.course.partial', 'Часть файлов не скачалась — проверь интернет и нажми ещё раз. Скачанное уже сохранено.'));
        }
      }

      if (m.type === 'COURSE_STATUS') {
        /* Файлов нет, а запись есть → запись врёт, убираем. */
        var o = loadOffline();
        if (m.have < m.total && o[m.id]) { delete o[m.id]; saveOffline(o); if (sheet) renderSheet(); }
        syncChip(m.have >= m.total);
      }
    });
  }

  /* ---------- чип «скачать в дорогу» на странице курса ---------- */

  var chip = null;
  function buildChip() {
    if (chip || !courseAssets() || !SUPPORTED) return;
    var stats = document.querySelector('.hero .stats') || document.querySelector('.hero');
    if (!stats) return;
    chip = el('button', 'mv-chip');
    chip.innerHTML = '⤓ <span>' + esc(T('app.chip', 'Скачать курс в дорогу')) + '</span>';
    chip.addEventListener('click', openSheet);
    var box = el('div', '');
    box.style.textAlign = 'center';
    box.appendChild(chip);
    stats.parentNode.insertBefore(box, stats.nextSibling);
    syncChip();
  }
  function syncChip(known) {
    if (!chip) return;
    var c = courseAssets();
    var has = known != null ? known : !!(c && loadOffline()[c.id]);
    chip.classList.toggle('done', has);
    chip.querySelector('span').textContent = has
      ? T('app.chip.done', 'Курс доступен без интернета')
      : T('app.chip', 'Скачать курс в дорогу');
  }

  /* ---------- полоски снизу ---------- */

  function toast(html, actionLabel, onAction) {
    var t = el('div', 'mv-toast');
    t.innerHTML = '<span>' + html + '</span>';
    if (actionLabel) {
      var b = el('button', null, esc(actionLabel));
      b.addEventListener('click', function () { hide(); onAction && onAction(); });
      t.appendChild(b);
    }
    var x = el('button', 'mv-toast-x', '✕');
    x.setAttribute('aria-label', T('app.close', 'Закрыть'));
    x.addEventListener('click', hide);
    t.appendChild(x);
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('on'); });
    function hide() { t.classList.remove('on'); setTimeout(function () { t.remove(); }, 350); }
    return { hide: hide };
  }

  /* ---------- пункт в меню ☰ ---------- */

  function addMenuItem() {
    var nav = document.querySelector('#lbDrawer .lb-d-nav');
    if (!nav || nav.querySelector('#mvOpen')) return;
    var b = el('button', 'lb-d-link');
    b.id = 'mvOpen';
    b.innerHTML = '📲 <span>' + esc(T('app.menu', 'Приложение')) + '</span>';
    b.addEventListener('click', function () {
      var scrimEl = document.getElementById('lbScrim');
      var d = document.getElementById('lbDrawer');
      if (d) d.classList.remove('open');
      if (scrimEl) scrimEl.classList.remove('on');
      openSheet();
    });
    var settings = nav.querySelector('#lbSettingsOpen');
    nav.insertBefore(b, settings || null);
  }

  /* ---------- обновление ---------- */

  function applyUpdate() {
    if (!waiting) { location.reload(); return; }
    waiting.postMessage({ type: 'SKIP_WAITING' });
  }

  /* ---------- запуск ---------- */

  function boot() {
    if (isStandalone()) document.documentElement.classList.add('mv-standalone');
    paintThemeColor();
    new MutationObserver(paintThemeColor).observe(document.documentElement, {
      attributes: true, attributeFilter: ['data-theme']
    });
    addMenuItem();
    buildChip();
    /* Чром сайта строится своим скриптом; если он опоздал — пробуем ещё раз. */
    setTimeout(addMenuItem, 400);
    setTimeout(function () { buildChip(); refreshCourseBox(); }, 600);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    if (sheet && sheet.classList.contains('on')) renderSheet();
  });
  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    if (sheet && sheet.classList.contains('on')) renderSheet();
  });

  window.addEventListener('offline', function () {
    toast('<b>' + esc(T('app.net.off', 'Интернет пропал.')) + '</b> ' + esc(T('app.net.offP', 'Скачанное открывается как обычно.')));
  });

  if (SUPPORTED) {
    navigator.serviceWorker.register(ROOT + 'sw.js').then(function (r) {
      reg = r;
      if (r.waiting && navigator.serviceWorker.controller) { waiting = r.waiting; announceUpdate(); }
      r.addEventListener('updatefound', function () {
        var nw = r.installing;
        if (!nw) return;
        nw.addEventListener('statechange', function () {
          /* controller есть → это не первая установка, а именно обновление. */
          if (nw.state === 'installed' && navigator.serviceWorker.controller) {
            waiting = nw;
            announceUpdate();
            if (sheet && sheet.classList.contains('on')) renderSheet();
          }
        });
      });
    }).catch(function (err) { console.warn('[app] service worker не встал:', err); });

    /* Перезагружаемся ТОЛЬКО после обновления, которое человек подтвердил.
       При самом первом заходе service worker тоже берёт страницу под себя
       (clients.claim в sw.js) — и это событие ничем не отличается от обновления.
       Без проверки hadController первый визит на сайт заканчивался
       необъяснимой перезагрузкой прямо под руками у читателя. */
    var hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (!hadController) { warm(); return; }   // первый заход — не перезагрузка, а догон
      if (reloading) return;
      reloading = true;
      location.reload();
    });
    if (hadController) warm();
  }

  /* Кладём в кэш то, что эта страница уже загрузила: саму страницу, её скрипты
     и стили, шрифты. На первом заходе иначе не сохранилось бы ничего —
     service worker включается позже, чем страница успевает загрузиться. */
  var warmed = false;
  function warm() {
    if (warmed) return;
    warmed = true;
    var urls = [location.origin + location.pathname];
    var nodes = document.querySelectorAll('script[src],link[rel="stylesheet"][href]');
    for (var i = 0; i < nodes.length; i++) {
      var raw = nodes[i].getAttribute('src') || nodes[i].getAttribute('href');
      try {
        var a = new URL(raw, location.href);
        /* Свои файлы — все; чужие — только шрифты. Счётчику посещений
           в кэше делать нечего, он должен ходить в сеть по-настоящему. */
        if (a.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(a.hostname)) {
          if (urls.indexOf(a.href) === -1) urls.push(a.href);
        }
      } catch (e) {}
    }
    post({ type: 'WARM', urls: urls });
  }

  function announceUpdate() {
    toast('<b>' + esc(T('app.upd.toast', 'Есть новая версия.')) + '</b>',
          T('app.upd.btnShort', 'Обновить'), applyUpdate);
  }

  /* Наружу — чтобы кнопку «Приложение» можно было позвать откуда угодно. */
  window.MVApp = { open: openSheet };
})();
