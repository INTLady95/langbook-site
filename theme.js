/* MIRAVERBA — global site chrome. Loads on every page. Builds:
   1) a top site-bar (☰ menu · brand→home · theme switch),
   2) a left sidebar drawer (nav + theme + notes),
   3) floating sticky notes you can drop anywhere and that persist.
   Theme + notes are saved in localStorage and follow you across pages. */
(function(){
  /* i18n: T() comes from i18n.js when the page includes it; otherwise the
     Russian defaults below are used as-is. */
  var T = window.T || function(k, ru){ return ru; };
  /* Brand identity — the ONE place the site name lives. Rename the product
     by editing this object; every page's chrome updates with it. */
  var BRAND = { name:'MIRAVERBA', logo:'🪞', version:'v1' };
  function tagline(){ return T('chrome.tagline','авторская академия языков'); }
  var KEY = 'langbook-theme';
  var NKEY = 'langbook-notes';
  var THEMES = [
    { id:'light',     label:function(){return T('chrome.theme.light','Светлая');},       icon:'☀️' },
    { id:'dark',      label:function(){return T('chrome.theme.dark','Тёмная');},         icon:'🌙' },
    { id:'petrol',    label:function(){return T('chrome.theme.petrol','Петроль');},      icon:'💠' },
    { id:'ultraneon', label:function(){return T('chrome.theme.ultraneon','Ультранеон');},icon:'🔮' }
  ];
  /* interface language switcher (RU/EN/ES) — standalone: works even on
     pages without i18n.js (it only writes the key and reloads). */
  var LKEY = 'langbook-ui-lang';
  var uiLang = 'ru';
  try { uiLang = localStorage.getItem(LKEY) || 'ru'; } catch(e){}
  if (uiLang !== 'en' && uiLang !== 'es') uiLang = 'ru';
  var UILANGS = ['ru','en','es'];
  function setUiLang(l){
    if (l === uiLang || UILANGS.indexOf(l) === -1) return;
    try { localStorage.setItem(LKEY, l); } catch(e){}
    location.reload();
  }
  var current = null;
  try { current = localStorage.getItem(KEY); } catch(e){}
  if (current === 'neon') current = 'petrol';   // the neon theme became Petrol Deep
  if (!current){
    /* no explicit choice yet → follow the OS light/dark preference */
    try { current = (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'; }
    catch(e){ current = 'light'; }
  }

  // apply ASAP to <html> to minimise flash
  document.documentElement.setAttribute('data-theme', current);

  function apply(id){
    current = id;
    try { localStorage.setItem(KEY, id); } catch(e){}
    document.documentElement.setAttribute('data-theme', id);
    if (document.body) document.body.setAttribute('data-theme', id);
    var btns = document.querySelectorAll('#siteBar .sb-theme button[data-theme], #lbDrawer .lb-d-theme button[data-theme]');
    for (var i=0;i<btns.length;i++) btns[i].classList.toggle('on', btns[i].getAttribute('data-theme')===id);
  }

  // home/hub lives at the repo root; sub-folders (courses/, lessons/, lab/) go up one level
  function homeHref(){
    var p = location.pathname || '';
    return /\/(courses|lessons|lab)\//.test(p) ? '../index.html' : 'index.html';
  }

  /* ---------- neon cosmos (auroras + comet behind, film grain above) ----------
     Present on every page but drawn only when the ultraneon theme is active
     (theme.css shows/hides it), so switching themes never rebuilds the DOM. */
  function buildCosmos(){
    if (document.getElementById('lbCosmos')) return;
    var c = document.createElement('div');
    c.className = 'lb-cosmos'; c.id = 'lbCosmos'; c.setAttribute('aria-hidden','true');
    c.innerHTML = '<div class="lb-aurora a1"></div><div class="lb-aurora a2"></div><div class="lb-aurora a3"></div><div class="lb-comet"></div>';
    document.body.insertBefore(c, document.body.firstChild);
    var g = document.createElement('div');
    g.className = 'lb-grain'; g.id = 'lbGrain'; g.setAttribute('aria-hidden','true');
    document.body.appendChild(g);
  }

  /* ---------- the dream card ----------
     The saved goal («Зачем тебе язык?», localStorage 'langbook-goal') lives
     on EVERY page as a translucent gold-shimmering card (Tanya, 2026-07-08):
     draggable anywhere, resizable, ✕ hides it until a new dream is saved
     (or via the profile). Position/size persist in 'langbook-dream-card'. */
  var DCKEY = 'langbook-dream-card';
  function dreamText(){
    var g = {};
    try { g = JSON.parse(localStorage.getItem('langbook-goal')) || {}; } catch(e){}
    /* chip labels — keep in sync with GOALS in index.html (same i18n keys) */
    var GOAL_LABELS = {
      work:  T('goal.c.work','💼 Работа и карьера'),
      travel:T('goal.c.travel','✈️ Путешествия'),
      move:  T('goal.c.move','🌍 Переезд'),
      study: T('goal.c.study','🎓 Учёба / экзамен'),
      talk:  T('goal.c.talk','💬 Общение с людьми'),
      media: T('goal.c.media','🎬 Фильмы, книги, игры'),
      self:  T('goal.c.self','❤️ Для себя') };
    var keys = g.keys || (g.key ? [g.key] : []);
    var chips = keys.map(function(k){ return GOAL_LABELS[k]; }).filter(Boolean).join(' · ');
    return (g.text || '').replace(/\s+/g,' ').trim() || chips || '';
  }
  function loadDC(){ try { return JSON.parse(localStorage.getItem(DCKEY)) || {}; } catch(e){ return {}; } }
  function saveDC(p){ try { localStorage.setItem(DCKEY, JSON.stringify(p)); } catch(e){} }
  function buildDream(){
    if (document.getElementById('lbDream')) return;
    var dream = dreamText();
    if (!dream) return;
    var st = loadDC();
    if (st.hidden) return;
    var SUPPORT = [
      T('dream.s1','Помни, ради чего ты здесь. Сегодняшние ~20 минут — ещё один шаг 💛'),
      T('dream.s2','Каждый день понемногу — и мечта становится планом ✨'),
      T('dream.s3','Ты уже идёшь к этому. Продолжай — я рядом 💛'),
      T('dream.s4','Большие мечты любят маленькие ежедневные шаги ✨'),
      T('dream.s5','Один урок сегодня — и ты ближе, чем вчера 💛')
    ];
    var sup = SUPPORT[Math.floor(Date.now()/86400000) % SUPPORT.length];
    var el = document.createElement('div');
    el.className = 'lb-dream'; el.id = 'lbDream'; el.setAttribute('role','status');
    el.innerHTML = '<button class="lb-dream-x" aria-label="' + T('chrome.close','Закрыть') + '">✕</button>'
                 + '<div class="lb-dream-b"><button class="lb-dim" aria-label="' + T('dream.dim','Приглушить') + '" title="' + T('dream.dim','Приглушить') + '">🔅</button>'
                 +   '<button class="lb-bri" aria-label="' + T('dream.bri','Ярче') + '" title="' + T('dream.bri','Ярче') + '">🔆</button></div>'
                 + '<div class="lb-dream-k">✨ ' + T('dream.k','Твоя мечта') + '</div>'
                 + '<div class="lb-dream-t"></div><div class="lb-dream-s"></div>'
                 + '<div class="lb-dream-h">' + T('dream.hint','⠿ перетащи меня · потяни за уголок — размер · 🔅🔆 — яркость') + '</div>';
    var tEl = el.querySelector('.lb-dream-t');
    tEl.textContent = dream;  /* user text — textContent, never HTML */
    el.querySelector('.lb-dream-s').textContent = sup;
    /* мягкость по умолчанию + регулятор яркости (сохраняется) */
    var op = (typeof st.op === 'number' && st.op >= .45 && st.op <= 1) ? st.op : .82;
    function setOp(v){
      op = Math.max(.45, Math.min(1, v));
      el.style.opacity = op;
      var p = loadDC(); p.op = op; saveDC(p);
    }
    el.style.opacity = op;
    el.querySelector('.lb-dim').addEventListener('click', function(e){ e.stopPropagation(); setOp(op - .12); });
    el.querySelector('.lb-bri').addEventListener('click', function(e){ e.stopPropagation(); setOp(op + .12); });
    var defW = Math.min(560, Math.round(window.innerWidth * 0.92));
    var w = st.w || defW;
    el.style.width = w + 'px';
    if (st.h) el.style.height = st.h + 'px';
    el.style.left = (st.x != null ? Math.min(Math.max(0, st.x), window.innerWidth - 60) : Math.max(8, Math.round((window.innerWidth - w) / 2))) + 'px';
    el.style.top  = (st.y != null ? Math.min(Math.max(0, st.y), window.innerHeight - 40) : 14) + 'px';
    document.body.appendChild(el);
    el.querySelector('.lb-dream-x').addEventListener('click', function(e){
      e.stopPropagation();
      var p = loadDC(); p.hidden = true; saveDC(p);
      el.classList.add('bye');
      setTimeout(function(){ el.remove(); }, 500);
    });
    /* drag by the card itself (like the sticky notes) */
    var dragging = false, ox = 0, oy = 0;
    el.addEventListener('pointerdown', function(e){
      if (e.target.closest && e.target.closest('.lb-dream-x, .lb-dream-b')) return;
      /* нижний правый угол оставляем нативному resize */
      var r = el.getBoundingClientRect();
      if (e.clientX > r.right - 22 && e.clientY > r.bottom - 22) return;
      dragging = true; el.classList.add('drag');
      ox = e.clientX - el.offsetLeft; oy = e.clientY - el.offsetTop;
      try { el.setPointerCapture(e.pointerId); } catch(_){}
    });
    el.addEventListener('pointermove', function(e){
      if (!dragging) return;
      el.style.left = Math.max(0, Math.min(window.innerWidth - 60,  e.clientX - ox)) + 'px';
      el.style.top  = Math.max(0, Math.min(window.innerHeight - 40, e.clientY - oy)) + 'px';
    });
    el.addEventListener('pointerup', function(){
      if (!dragging) return;
      dragging = false; el.classList.remove('drag');
      var p = loadDC(); p.x = el.offsetLeft; p.y = el.offsetTop; saveDC(p);
    });
    /* persist size (drag the bottom-right corner, like the notes) */
    if (window.ResizeObserver){
      var rt; var ro = new ResizeObserver(function(){
        clearTimeout(rt);
        rt = setTimeout(function(){
          var p = loadDC(); p.w = el.offsetWidth; p.h = el.offsetHeight; saveDC(p);
        }, 250);
      });
      ro.observe(el);
    }
  }

  /* ---------- presentation-style live effects ----------
     Golden starfield + glowing scroll-to-top + golden minimap, lifted from
     tatsiana_presentation.html; shown on every theme. */
  function buildFx(){
    if (document.getElementById('lbStars')) return;
    /* starfield */
    var host = document.createElement('div');
    host.className = 'lb-stars'; host.id = 'lbStars'; host.setAttribute('aria-hidden','true');
    var count = Math.min(130, Math.max(60, Math.round(window.innerWidth / 11)));
    for (var i = 0; i < count; i++){
      var s = document.createElement('span');
      var size = (Math.random() * 1.6 + 0.8).toFixed(1);
      s.style.width = size + 'px'; s.style.height = size + 'px';
      s.style.left = (Math.random() * 100).toFixed(2) + '%';
      s.style.top  = (Math.random() * 100).toFixed(2) + '%';
      s.style.setProperty('--tw', (5 + Math.random() * 7).toFixed(1) + 's');
      s.style.setProperty('--td', (Math.random() * 8).toFixed(1) + 's');
      host.appendChild(s);
    }
    document.body.insertBefore(host, document.body.firstChild);
    /* scroll-to-top (bottom-LEFT: bottom-right belongs to the notes button) */
    var st = document.createElement('button');
    st.className = 'lb-scrolltop'; st.id = 'lbScrollTop'; st.type = 'button';
    st.textContent = '↑';
    st.title = T('chrome.toTop','Наверх'); st.setAttribute('aria-label', T('chrome.toTop','Наверх'));
    document.body.appendChild(st);
    function tog(){ st.classList.toggle('visible', (window.pageYOffset || 0) > 400); }
    window.addEventListener('scroll', tog, { passive:true }); tog();
    st.addEventListener('click', function(){
      try { window.scrollTo({ top:0, behavior:'smooth' }); } catch(e){ window.scrollTo(0,0); }
    });
    buildMinimap();
  }
  function buildMinimap(){
    if (document.getElementById('lbMm')) return;
    var targets = [].slice.call(document.querySelectorAll('.masthead, .sec, #weeks .week'));
    if (targets.length < 3) return;
    var mm = document.createElement('nav');
    mm.className = 'lb-mm'; mm.id = 'lbMm';
    mm.setAttribute('aria-label', T('chrome.mm','Карта страницы'));
    var track = document.createElement('div'); track.className = 'lb-mm-track';
    for (var i = 0; i < targets.length; i++){
      (function(t, i){
        var seg = document.createElement('button');
        seg.type = 'button'; seg.className = 'lb-mm-seg'; seg.style.setProperty('--i', i);
        var lab = t.querySelector('h2, .wt, .brand');
        seg.title = ((lab && lab.textContent) || '').trim().slice(0, 40);
        seg.addEventListener('click', function(){ t.scrollIntoView({ behavior:'smooth', block:'start' }); });
        track.appendChild(seg);
      })(targets[i], i);
    }
    mm.appendChild(track);
    document.body.appendChild(mm);
    function upd(){
      var y = (window.pageYOffset || 0) + window.innerHeight * 0.35, on = 0;
      for (var i = 0; i < targets.length; i++) if (targets[i].offsetTop <= y) on = i;
      for (var j = 0; j < track.children.length; j++) track.children[j].classList.toggle('on', j === on);
    }
    window.addEventListener('scroll', upd, { passive:true }); upd();
  }

  /* ---------- profile (right drawer) ----------
     Everything the learner owns, in one place, no server: name + avatar
     (the certificate picks the name up), the dream, progress across all
     12 courses, access keys, language & theme. */
  var PROF_KEY = 'langbook-profile';
  var AVATARS = ['🦊','🦉','🐱','🐺','🦋','🌸','⭐','🐹'];
  function loadProf(){ try { return JSON.parse(localStorage.getItem(PROF_KEY)) || {}; } catch(e){ return {}; } }
  function saveProf(p){ try { localStorage.setItem(PROF_KEY, JSON.stringify(p)); } catch(e){} }
  /* does a stored key open this course? (mirror of paywall.js keyCovers —
     paywall.js isn't loaded on every page, so the profile carries its own) */
  function keyCoversLb(key, course){
    key = String(key || '').trim().toUpperCase();
    if (key.length < 8) return false;
    if (/^ALL-/.test(key)) return true;
    var m = key.match(/^(EN|ES)(A1|A2|B1|B2|C1|C2|ALL)-/);
    if (!m) return false;
    if (m[1].toLowerCase() !== course.slice(0, 2)) return false;
    return m[2] === 'ALL' || m[2].toLowerCase() === course.slice(3);
  }
  function courseRows(){
    var keys = '';
    try { keys = localStorage.getItem('langbook-license') || ''; } catch(e){}
    var keyList = keys.split(/[\s,;]+/).filter(Boolean);
    var out = [], langs = ['en','es'], lvls = ['a1','a2','b1','b2','c1','c2'];
    for (var i = 0; i < langs.length; i++) for (var j = 0; j < lvls.length; j++){
      var id = langs[i] + '-' + lvls[j];
      var pkey = langs[i] === 'en' ? 'langbook-' + lvls[j] + '-progress' : 'langbook-' + id + '-progress';
      var p = {}; try { p = JSON.parse(localStorage.getItem(pkey)) || {}; } catch(e){}
      var days = p.days || {}, done = 0, exams = p.exams || {}, anyExam = false, k;
      for (var d = 1; d <= 30; d++) if (days[d]) done++;
      for (k in exams) if (exams[k]) anyExam = true;
      var owned = keyList.some(function(x){ return keyCoversLb(x, id); });
      var next = null;
      for (var d2 = 1; d2 <= 30; d2++) if (!days[d2]){ next = d2; break; }
      out.push({ id:id, title:(langs[i]==='en'?'English ':'Español ') + lvls[j].toUpperCase(),
                 flag:(langs[i]==='en'?'🇬🇧':'🇪🇸'), next:next,
                 done:done, full:done >= 30 && !!exams[4],
                 mine: owned || done > 0 || anyExam });
    }
    return out;
  }
  function rootPrefix(){ return /\/(courses|lessons|lab)\//.test(location.pathname||'') ? '../' : ''; }
  function buildProfile(){
    var old = document.getElementById('lbProf');
    if (old) old.parentNode.removeChild(old);   // rebuild fresh each open
    var prof = loadProf(), root = rootPrefix();
    var d = document.createElement('aside');
    d.className = 'lb-prof'; d.id = 'lbProf';
    var dream = dreamText();
    var keys = ''; try { keys = localStorage.getItem('langbook-license') || ''; } catch(e){}
    var keyList = keys.split(/[\s,;]+/).filter(Boolean);
    /* only MY courses (bought or started) — the full 12 belong to the catalog */
    var mine = courseRows().filter(function(c){ return c.mine; });
    /* строка = информация (язык · уровень · полоска · %); прыгает только
       кнопка → ровно в день, где человек остановился (Таня, 2026-07-08) */
    var rows = mine.map(function(c){
      var pct = Math.round(c.done / 30 * 100);
      var href = c.full ? root + 'certificate.html?course=' + c.id
                        : root + 'courses/' + c.id + '.html' + (c.next ? '?day=' + c.next : '');
      var tip = c.full ? T('str.done','Курс пройден 🏆 Забрать грамоту →')
                       : T('str.cont','Продолжить с Дня ') + (c.next || 1) + ' →';
      return '<div class="row"><span class="fl">' + c.flag + '</span><span class="nm">' + c.title + '</span>'
           + '<span class="bar"><i style="width:' + pct + '%"></i></span>'
           + '<span class="n' + (c.full ? ' done' : '') + '">' + (c.full ? '💯' : pct + '%') + '</span>'
           + '<a class="go" href="' + href + '" title="' + tip + '" aria-label="' + tip + '">' + (c.full ? '🏆' : '→') + '</a></div>';
    }).join('');
    if (!rows) rows = '<div class="lb-p-dream" style="border-style:solid"><i>' + T('prof.noCourses','Своих курсов пока нет — а первая неделя каждого открыта бесплатно. ') + '</i><a href="' + root + 'index.html#courses">' + T('prof.pickCourse','Выбрать курс →') + '</a></div>';
    d.innerHTML = ''
      + '<div class="lb-d-head"><span class="lb-d-logo">' + T('prof.title','Профиль') + '</span><button class="lb-d-close" id="lbProfClose" aria-label="' + T('chrome.close','Закрыть') + '">✕</button></div>'
      + '<div class="lb-p-head" style="border-bottom:0;padding-bottom:4px">'
      +   '<span class="lb-p-ava" id="lbProfAva">' + (prof.avatar || '🦊') + '</span>'
      +   '<input class="lb-p-name" id="lbProfName" maxlength="60" placeholder="' + T('prof.namePh','Как тебя зовут?') + '" aria-label="' + T('prof.name','Имя') + '">'
      + '</div>'
      + '<div class="lb-p-avas" id="lbProfAvas">' + AVATARS.map(function(a){ return '<button type="button" data-a="' + a + '"' + (a === (prof.avatar || '🦊') ? ' class="on"' : '') + '>' + a + '</button>'; }).join('') + '</div>'
      + '<div class="lb-d-sec">' + T('prof.dream','Моя мечта') + '</div>'
      + '<div class="lb-p-dream">' + (dream ? '' : '<i>' + T('prof.noDream','Пока не записана. ') + '</i>')
      +   (dream ? (loadDC().hidden ? ' <a href="#" id="lbProfDreamShow">' + T('prof.showDream','Вернуть карточку мечты →') + '</a>' : '')
                 : '<a href="' + root + 'index.html#goal">' + T('prof.setDream','Записать мечту →') + '</a>') + '</div>'
      + '<div class="lb-d-sec">' + T('prof.progress','Мои курсы') + '</div>'
      + '<div class="lb-prog">' + rows + '</div>'
      + '<div class="lb-d-sec">' + T('prof.keys','Ключи доступа') + '</div>'
      + '<div class="lb-keys">' + (keyList.length
            ? keyList.map(function(k){ return '<code>' + k.replace(/[<>&]/g,'') + '</code>'; }).join(' ')
            : T('prof.noKeys','Пока нет. Первая неделя каждого курса открыта бесплатно.'))
      +   ' <a href="' + root + 'buy.html">' + T('prof.addKey','Добавить →') + '</a></div>'
      + '<div class="lb-d-foot">' + tagline() + '<br><span>' + BRAND.name + ' · ' + BRAND.version + '</span></div>';
    document.body.appendChild(d);
    var safeDream = d.querySelector('.lb-p-dream');
    if (dream){ var em = document.createElement('em'); em.textContent = '«' + dream + '»'; safeDream.insertBefore(em, safeDream.firstChild); }
    var nameInp = d.querySelector('#lbProfName');
    nameInp.value = prof.name || '';
    nameInp.addEventListener('input', function(){ var p = loadProf(); p.name = nameInp.value; saveProf(p); });
    d.querySelectorAll('#lbProfAvas button').forEach(function(b){
      b.addEventListener('click', function(){
        var p = loadProf(); p.avatar = b.dataset.a; saveProf(p);
        d.querySelector('#lbProfAva').textContent = b.dataset.a;
        d.querySelectorAll('#lbProfAvas button').forEach(function(x){ x.classList.toggle('on', x === b); });
      });
    });
    d.querySelector('#lbProfClose').addEventListener('click', closeProfile);
    var ds = d.querySelector('#lbProfDreamShow');
    if (ds) ds.addEventListener('click', function(e){
      e.preventDefault();
      var pd = loadDC(); delete pd.hidden; saveDC(pd);
      buildDream(); closeProfile();
    });
    d.querySelectorAll('button[data-uilang]').forEach(function(b){ b.addEventListener('click', function(){ setUiLang(b.getAttribute('data-uilang')); }); });
    d.querySelectorAll('button[data-theme]').forEach(function(b){ b.addEventListener('click', function(){ apply(b.getAttribute('data-theme')); }); });
    return d;
  }
  function openProfile(){
    var d = buildProfile(), s = document.getElementById('lbScrim');
    if (s){ s.classList.add('show'); s.addEventListener('click', closeProfile); }
    requestAnimationFrame(function(){ d.classList.add('open'); });
  }
  function closeProfile(){
    var d = document.getElementById('lbProf'), s = document.getElementById('lbScrim');
    if (d) d.classList.remove('open');
    if (s && !document.querySelector('.lb-drawer.open')) s.classList.remove('show');
  }

  /* ---------- top site bar ---------- */
  function build(){
    document.body.setAttribute('data-theme', current);
    buildCosmos();
    buildDream();
    buildFx();
    if (document.getElementById('siteBar')) return;
    var home = homeHref();
    var bar = document.createElement('header');
    bar.className = 'site-bar';
    bar.id = 'siteBar';
    var html = ''
      + '<button class="sb-burger" id="lbBurger" title="'+T('chrome.menu','Меню')+'" aria-label="'+T('chrome.menuOpen','Открыть меню')+'">☰</button>'
      + '<a class="sb-brand" href="'+home+'" title="'+T('chrome.homeTitle','На главную')+'"><span class="sb-logo">'+BRAND.logo+'</span>'
      +   '<span class="sb-name">'+BRAND.name+'</span></a>'
      + '<nav class="sb-nav"><a class="sb-link" href="'+home+'">🏠 <span>'+T('chrome.home','Главная')+'</span></a></nav>'
      + '<div class="sb-lang" role="group" aria-label="'+T('chrome.langGroup','Язык сайта')+'">';
    for (var g=0;g<UILANGS.length;g++){
      html += '<button data-uilang="'+UILANGS[g]+'">'+UILANGS[g].toUpperCase()+'</button>';
    }
    html += '</div>'
      + '<div class="sb-theme" role="group" aria-label="'+T('chrome.themeGroup','Тема сайта')+'"><span class="sb-theme-lbl">'+T('chrome.themeLbl','Тема')+'</span>';
    for (var i=0;i<THEMES.length;i++){
      var t = THEMES[i];
      html += '<button data-theme="'+t.id+'" title="'+t.label()+'" aria-label="'+t.label()+'">'+t.icon+'</button>';
    }
    html += '</div>'
      + '<button class="sb-profile" id="lbProfileBtn" title="'+T('prof.title','Профиль')+'" aria-label="'+T('prof.title','Профиль')+'">'+((loadProf().avatar)||'👤')+'</button>';
    bar.innerHTML = html;
    document.body.insertBefore(bar, document.body.firstChild);

    var btns = bar.querySelectorAll('.sb-theme button');
    for (var j=0;j<btns.length;j++){
      (function(b){
        b.classList.toggle('on', b.getAttribute('data-theme')===current);
        b.addEventListener('click', function(){ apply(b.getAttribute('data-theme')); });
      })(btns[j]);
    }
    var lbtns = bar.querySelectorAll('.sb-lang button');
    for (var m=0;m<lbtns.length;m++){
      (function(b){
        b.classList.toggle('on', b.getAttribute('data-uilang')===uiLang);
        b.addEventListener('click', function(){ setUiLang(b.getAttribute('data-uilang')); });
      })(lbtns[m]);
    }
    buildSidebar(home);
    buildMira();
    if (notesEnabled()) buildNotes();
    var burger = document.getElementById('lbBurger');
    if (burger) burger.addEventListener('click', openDrawer);
    var profBtn = document.getElementById('lbProfileBtn');
    if (profBtn) profBtn.addEventListener('click', openProfile);
  }

  // notes belong where you study — only on course/lesson pages, not the hub
  function notesEnabled(){ return /\/(courses|lessons)\//.test(location.pathname || ''); }

  /* ---------- left sidebar (slide-in drawer) ---------- */
  function buildSidebar(home){
    if (document.getElementById('lbDrawer')) return;
    var root = home.replace('index.html','');
    var scrim = document.createElement('div'); scrim.className = 'lb-scrim'; scrim.id = 'lbScrim';
    var d = document.createElement('aside'); d.className = 'lb-drawer'; d.id = 'lbDrawer';
    var th = '';
    for (var i=0;i<THEMES.length;i++){ var t=THEMES[i]; th += '<button data-theme="'+t.id+'" title="'+t.label()+'">'+t.icon+'</button>'; }
    var lh = '';
    for (var g=0;g<UILANGS.length;g++){ lh += '<button data-uilang="'+UILANGS[g]+'">'+UILANGS[g].toUpperCase()+'</button>'; }
    d.innerHTML = ''
      + '<div class="lb-d-head"><span class="lb-d-logo">'+BRAND.logo+' '+BRAND.name+'</span><button class="lb-d-close" id="lbClose" aria-label="'+T('chrome.close','Закрыть')+'">✕</button></div>'
      + '<nav class="lb-d-nav">'
      +   '<a class="lb-d-link" href="'+home+'">🏠 <span>'+T('chrome.home','Главная')+'</span></a>'
      +   '<a class="lb-d-link" href="'+home+'">📚 <span>'+T('chrome.allCourses','Все курсы')+'</span></a>'
      +   '<a class="lb-d-link" href="'+root+'buy.html">💳 <span>'+T('foot.buy','Купить курс')+'</span></a>'
      +   '<a class="lb-d-link" href="'+root+'certificate.html">📜 <span>'+T('foot.cert','Грамота')+'</span></a>'
      +   '<button class="lb-d-link" id="lbSettingsOpen">⚙️ <span>'+T('chrome.settings','Настройки')+'</span></button>'
      +   '<a class="lb-d-link" href="mailto:hello@example.com?subject='+encodeURIComponent(T('chrome.contactSubj','Вопрос про MIRAVERBA'))+'">✉️ <span>'+T('chrome.contact','Связь со мной')+'</span></a>'
      +   (notesEnabled() ? '<button class="lb-d-link" id="lbNotesOpen">📝 <span>'+T('chrome.newNote','Новая заметка')+'</span></button>' : '')
      + '</nav>'
      + '<div class="lb-d-sec">'+T('chrome.langGroup','Язык сайта')+'</div>'
      + '<div class="lb-d-lang lb-d-theme">'+lh+'</div>'
      + '<div class="lb-d-sec">'+T('chrome.themeGroup','Тема сайта')+'</div>'
      + '<div class="lb-d-theme">'+th+'</div>'
      + '<div class="lb-d-foot">'+tagline()+'<br><span>'+BRAND.name+' · '+BRAND.version+'</span></div>';
    document.body.appendChild(scrim);
    document.body.appendChild(d);

    scrim.addEventListener('click', closeDrawer);
    document.getElementById('lbClose').addEventListener('click', closeDrawer);
    var notesOpen=document.getElementById('lbNotesOpen'); if(notesOpen) notesOpen.addEventListener('click', function(){ closeDrawer(); addNote(); });
    var settingsOpen=document.getElementById('lbSettingsOpen'); if(settingsOpen) settingsOpen.addEventListener('click', function(){ closeDrawer(); openProfile(); });
    var tb = d.querySelectorAll('.lb-d-theme button[data-theme]');
    for (var k=0;k<tb.length;k++){
      (function(b){
        b.classList.toggle('on', b.getAttribute('data-theme')===current);
        b.addEventListener('click', function(){ apply(b.getAttribute('data-theme')); });
      })(tb[k]);
    }
    var lb2 = d.querySelectorAll('.lb-d-lang button[data-uilang]');
    for (var q=0;q<lb2.length;q++){
      (function(b){
        b.classList.toggle('on', b.getAttribute('data-uilang')===uiLang);
        b.addEventListener('click', function(){ setUiLang(b.getAttribute('data-uilang')); });
      })(lb2[q]);
    }
    document.addEventListener('keydown', function(e){ if (e.key==='Escape'){ closeDrawer(); closeProfile(); } });
  }
  function openDrawer(){ var d=document.getElementById('lbDrawer'), s=document.getElementById('lbScrim'); if(d)d.classList.add('open'); if(s)s.classList.add('show'); }
  function closeDrawer(){ var d=document.getElementById('lbDrawer'), s=document.getElementById('lbScrim'); if(d)d.classList.remove('open'); if(s)s.classList.remove('show'); }

  /* ---------- Мира · помощница (rule-based FAQ chat, every page) ----------
     Small floating button above the notes button; opens a compact glass
     panel. No real AI — ~20 keyword rules answer the common questions with
     a link where relevant. History persists in localStorage (last ~20). */
  var MIRA_KEY = 'langbook-mira';
  function loadMira(){ try { return JSON.parse(localStorage.getItem(MIRA_KEY)) || []; } catch(e){ return []; } }
  function saveMira(arr){ try { localStorage.setItem(MIRA_KEY, JSON.stringify(arr.slice(-20))); } catch(e){} }
  function miraRules(root){
    var mail = 'mailto:hello@example.com?subject=' + encodeURIComponent(T('chrome.contactSubj','Вопрос про MIRAVERBA'));
    return [
      { re:/куп|цен|price|стоит|сколько/i, a:function(){ return T('mira.a.price','Цена запуска — $79 за курс (один уровень), вся серия A1→C2 — $369, одним платежом навсегда. <a href="'+root+'buy.html">Подробнее →</a>'); } },
      { re:/ключ|key|не работает|не открыв/i, a:function(){ return T('mira.a.key','Ключ выглядит как код курса, например ENA1-XXXX-XXXX. Вставь его на странице покупки — курс откроется в этом браузере. <a href="'+root+'buy.html#key">Ввести ключ →</a>'); } },
      { re:/язык сайта|язык интерфейса|interface lang|сменить язык|переключ.*язык/i, a:function(){ return T('mira.a.lang','Переключатель RU/EN/ES — вверху страницы, в шапке сайта.'); } },
      { re:/\bтем[ауы]\b|тёмн|светл|petrol|петрол|ultraneon|ультранеон|оформлен/i, a:function(){ return T('mira.a.theme','Тема сайта — кнопки ☀️🌙💠🔮 в шапке (или в меню ☰). Есть светлая, тёмная, «Петроль» и «Ультранеон».'); } },
      { re:/грамот|сертификат|certificate|diploma/i, a:function(){ return T('mira.a.cert','Грамота собирается на отдельной странице — впиши имя, выбери курс и стиль. <a href="'+root+'certificate.html">Собрать грамоту →</a>'); } },
      { re:/продолж|где я|мой прогресс.*курс|вернуться/i, a:function(){ return T('mira.a.continue','Карточки «Продолжить» — на главной странице, сверху. А ещё весь список твоих курсов — в профиле 👤.'); } },
      { re:/бесплат|попробовать|free|trial/i, a:function(){ return T('mira.a.free','Первые 3 урока каждого курса — бесплатно, без ключа и без карты. Можно просто начать учиться.'); } },
      { re:/возврат|вернуть деньги|refund|отмен.*покупк/i, a:function(){ return T('mira.a.refund','Возвратов нет — но зато первые 3 урока каждого курса бесплатны, так что попробовать можно заранее.'); } },
      { re:/экзамен|итогов.*тест|final exam/i, a:function(){ return T('mira.a.exam','Экзамены — часть полной версии курса, по одному на каждую неделю. В бесплатных 3 уроках их нет.'); } },
      { re:/уровень|placement|с чего начать|какой курс.*мне|тест на уровень/i, a:function(){ return T('mira.a.level','Не уверен(а), с какого уровня начать? Есть бесплатный тест. <a href="'+root+'placement.html">Пройти тест уровня →</a>'); } },
      { re:/мечта|goal|зачем.*учу|моя цель/i, a:function(){ return T('mira.a.goal','Твоя мечта — карточка на главной (раздел «Зачем тебе язык?») и в профиле 👤. Она держится перед глазами, пока ты учишься.'); } },
      { re:/заметк|note/i, a:function(){ return T('mira.a.notes','На уроках есть кнопка 📝 — заметки можно оставлять прямо на странице, они сохраняются в этом браузере.'); } },
      { re:/связ|почта|email|e-mail|жалоб|написать|поддержк/i, a:function(){ return T('mira.a.contact','Пиши мне письмом — отвечу лично. <a href="'+mail+'">'+T('mira.a.contact.link','Написать ✉️')+'</a>'); } },
      { re:/прогресс.*(устройств|телефон|компьютер)|друг(ой|ом) (устройств|браузер)|синхрониз/i, a:function(){ return T('mira.a.device','Прогресс хранится прямо в этом браузере (localStorage) — на другом устройстве или в другом браузере он, увы, не появится сам.'); } },
      { re:/испан|espanol|español|es-/i, a:function(){ return T('mira.a.spanish','Испанский тоже есть — весь A1→C2. Загляни в каталог курсов на главной странице.'); } },
      { re:/сколько уроков|сколько дней|30 дней|структур.*курс/i, a:function(){ return T('mira.a.structure','В каждом курсе — 30 дней-уроков (~20 минут в день) и 4 экзамена, по одному на неделю.'); } },
      { re:/привет|здравств|хай\b|hello|hi\b/i, a:function(){ return T('mira.a.hi','Привет! 💛 Спрашивай — постараюсь помочь.'); } },
      { re:/спасибо|благодар|thanks/i, a:function(){ return T('mira.a.thanks','Пожалуйста! Рада была помочь 💛'); } },
      { re:/кто ты|ты кто|мира\?/i, a:function(){ return T('mira.a.who','Я Мира — веду тебя по урокам и отвечаю на простые вопросы о сайте.'); } }
    ];
  }
  function miraAnswer(text, root){
    var rules = miraRules(root);
    for (var i=0;i<rules.length;i++){ if (rules[i].re.test(text)) return rules[i].a(); }
    var mail = 'mailto:hello@example.com?subject=' + encodeURIComponent(T('chrome.contactSubj','Вопрос про MIRAVERBA'));
    return T('mira.a.fallback','Я пока умею отвечать на простые вопросы о сайте. Напиши мне письмом ✉️ — отвечу лично') + ' <a href="'+mail+'">' + T('mira.a.contact.link','Написать ✉️') + '</a>';
  }
  function miraAddMsg(who, html){
    var arr = loadMira();
    arr.push({ who: who, html: html, t: Date.now() });
    saveMira(arr);
    return arr;
  }
  function miraRenderMsg(list, who, html){
    var m = document.createElement('div');
    m.className = 'lb-mira-msg ' + (who === 'me' ? 'me' : 'mira');
    m.innerHTML = html; // trusted: either our own rule text or escaped user text
    list.appendChild(m);
    list.scrollTop = list.scrollHeight;
  }
  function escapeHtml(s){ return String(s).replace(/[&<>]/g, function(c){ return c==='&'?'&amp;':c==='<'?'&lt;':'&gt;'; }); }
  function buildMira(){
    if (document.getElementById('lbMiraBtn')) return;
    var root = rootPrefix();
    var btn = document.createElement('button');
    btn.className = 'lb-mirabtn'; btn.id = 'lbMiraBtn'; btn.type = 'button';
    btn.title = T('mira.title','Мира · помощница'); btn.setAttribute('aria-label', T('mira.title','Мира · помощница'));
    btn.innerHTML = '🪞';
    document.body.appendChild(btn);

    var panel = null;
    function openPanel(){
      if (panel) return;
      panel = document.createElement('div');
      panel.className = 'lb-mira-panel'; panel.id = 'lbMiraPanel';
      panel.innerHTML = ''
        + '<div class="lb-mira-head"><span>🪞 '+T('mira.header','Мира · помощница')+'</span><button class="lb-mira-x" aria-label="'+T('chrome.close','Закрыть')+'">✕</button></div>'
        + '<div class="lb-mira-list" id="lbMiraList"></div>'
        + '<div class="lb-mira-row"><input type="text" class="lb-mira-in" id="lbMiraIn" placeholder="'+T('mira.ph','Спроси что-нибудь…')+'" aria-label="'+T('mira.ph','Спроси что-нибудь…')+'" autocomplete="off"><button class="lb-mira-send" id="lbMiraSend" aria-label="'+T('mira.send','Отправить')+'">➤</button></div>';
      document.body.appendChild(panel);
      var list = panel.querySelector('#lbMiraList');
      var hist = loadMira();
      if (!hist.length){
        hist = miraAddMsg('mira', T('mira.greet','Привет! Я Мира 🪞 Спроси меня о ценах, ключах доступа, уровнях, грамоте — постараюсь помочь.'));
      }
      for (var i=0;i<hist.length;i++) miraRenderMsg(list, hist[i].who, hist[i].html);
      panel.querySelector('.lb-mira-x').addEventListener('click', closePanel);
      var input = panel.querySelector('#lbMiraIn');
      function send(){
        var v = input.value.trim();
        if (!v) return;
        miraAddMsg('me', escapeHtml(v));
        miraRenderMsg(list, 'me', escapeHtml(v));
        input.value = '';
        var ans = miraAnswer(v, root);
        setTimeout(function(){
          miraAddMsg('mira', ans);
          miraRenderMsg(list, 'mira', ans);
        }, 260);
      }
      panel.querySelector('#lbMiraSend').addEventListener('click', send);
      input.addEventListener('keydown', function(e){ if (e.key === 'Enter') send(); });
      requestAnimationFrame(function(){ panel.classList.add('open'); input.focus(); });
    }
    function closePanel(){
      if (!panel) return;
      panel.classList.remove('open');
      var p = panel;
      setTimeout(function(){ if (p && p.parentNode) p.parentNode.removeChild(p); }, 220);
      panel = null;
    }
    btn.addEventListener('click', function(){ if (panel) closePanel(); else openPanel(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && panel) closePanel(); });
    document.addEventListener('click', function(e){
      if (!panel) return;
      if (e.target.closest && (e.target.closest('#lbMiraPanel') || e.target.closest('#lbMiraBtn'))) return;
      closePanel();
    });
  }

  /* ---------- floating sticky notes ---------- */
  function loadNotes(){ try { return JSON.parse(localStorage.getItem(NKEY)) || []; } catch(e){ return []; } }
  function saveNotes(arr){ try { localStorage.setItem(NKEY, JSON.stringify(arr)); } catch(e){} }

  function buildNotes(){
    if (document.getElementById('lbNoteBtn')) return;
    // "clear all" button (sits above the add button, shown only when notes exist)
    var clr = document.createElement('button');
    clr.className = 'lb-noteclear'; clr.id = 'lbNoteClear';
    clr.title = T('chrome.delAllNotes','Удалить все заметки'); clr.setAttribute('aria-label', T('chrome.delAllNotes','Удалить все заметки'));
    clr.innerHTML = '✕';
    clr.addEventListener('click', clearAllNotes);
    document.body.appendChild(clr);
    // add-note button
    var b = document.createElement('button');
    b.className = 'lb-notebtn'; b.id = 'lbNoteBtn';
    b.title = T('chrome.addNote','Добавить заметку'); b.setAttribute('aria-label', T('chrome.addNote','Добавить заметку'));
    b.innerHTML = '📝';
    b.addEventListener('click', function(){ addNote(); });
    document.body.appendChild(b);
    var notes = loadNotes();
    for (var i=0;i<notes.length;i++) renderNote(notes[i], false);
    updateNoteClear();
  }
  function updateNoteClear(){
    var clr = document.getElementById('lbNoteClear'); if (!clr) return;
    clr.style.display = document.querySelectorAll('.lb-note').length ? 'grid' : 'none';
  }
  function clearAllNotes(){
    if (!document.querySelectorAll('.lb-note').length) return;
    if (!window.confirm(T('chrome.delConfirm','Удалить все заметки? Отменить будет нельзя.'))) return;
    saveNotes([]);
    document.querySelectorAll('.lb-note').forEach(function(n){ n.remove(); });
    updateNoteClear();
  }

  function addNote(){
    var notes = loadNotes();
    var off = notes.length * 24;
    var n = {
      id: 'n' + Date.now() + '-' + Math.floor(Math.random()*1000),
      text: '',
      x: Math.max(20, Math.round((window.innerWidth - 300) / 2) + (off % 160)),
      y: 110 + (off % 200)
    };
    notes.push(n); saveNotes(notes); renderNote(n, true); updateNoteClear();
  }

  function renderNote(n, focus){
    var el = document.createElement('div');
    el.className = 'lb-note'; el.setAttribute('data-id', n.id);
    el.style.left = (n.x || 40) + 'px';
    el.style.top  = (n.y || 110) + 'px';
    if (n.w) el.style.width  = n.w + 'px';
    if (n.h) el.style.height = n.h + 'px';
    el.innerHTML = '<div class="lb-note-bar"><span class="lb-note-grip">⠿ ' + T('chrome.noteGrip','заметка') + '</span><button class="lb-note-del" title="' + T('chrome.del','Удалить') + '">🗑</button></div>'
                 + '<textarea class="lb-note-ta" placeholder="' + T('chrome.notePh','Пиши здесь, что хочешь запомнить…') + '"></textarea>';
    var ta = el.querySelector('.lb-note-ta');
    ta.value = n.text || '';
    ta.addEventListener('input', function(){
      var arr = loadNotes();
      for (var i=0;i<arr.length;i++){ if (arr[i].id===n.id){ arr[i].text = ta.value; break; } }
      saveNotes(arr);
    });
    el.querySelector('.lb-note-del').addEventListener('click', function(){
      saveNotes(loadNotes().filter(function(x){ return x.id!==n.id; }));
      el.remove(); updateNoteClear();
    });
    // drag by the title bar
    var bar = el.querySelector('.lb-note-bar'), dragging=false, ox=0, oy=0;
    bar.addEventListener('pointerdown', function(e){
      if (e.target.classList.contains('lb-note-del')) return;
      dragging = true; el.classList.add('drag');
      ox = e.clientX - el.offsetLeft; oy = e.clientY - el.offsetTop;
      try { bar.setPointerCapture(e.pointerId); } catch(_){}
    });
    bar.addEventListener('pointermove', function(e){
      if (!dragging) return;
      var x = Math.max(0, Math.min(window.innerWidth - 60,  e.clientX - ox));
      var y = Math.max(0, Math.min(window.innerHeight - 40, e.clientY - oy));
      el.style.left = x + 'px'; el.style.top = y + 'px';
    });
    bar.addEventListener('pointerup', function(){
      if (!dragging) return;
      dragging = false; el.classList.remove('drag');
      var arr = loadNotes();
      for (var i=0;i<arr.length;i++){ if (arr[i].id===n.id){ arr[i].x = el.offsetLeft; arr[i].y = el.offsetTop; break; } }
      saveNotes(arr);
    });
    // persist size whenever the note is resized (drag the bottom-right corner)
    if (window.ResizeObserver){
      var rt; var ro = new ResizeObserver(function(){
        clearTimeout(rt);
        rt = setTimeout(function(){
          var arr = loadNotes();
          for (var i=0;i<arr.length;i++){ if (arr[i].id===n.id){ arr[i].w = el.offsetWidth; arr[i].h = el.offsetHeight; break; } }
          saveNotes(arr);
        }, 250);
      });
      ro.observe(el);
    }
    document.body.appendChild(el);
    if (focus) ta.focus();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
