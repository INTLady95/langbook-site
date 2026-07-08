/* MIRAVERBA — course progress + forgiving daily streak.
   The course is a FINITE 30-lesson journey, so we don't draw a year-long
   calendar — we draw the COURSE itself: 30 cells that fill in as the learner
   completes lessons, plus a 🔥 streak that forgives up to 2 missed days and
   always greets a returning learner warmly (never punishes).
   - records every calendar day any page is opened  → streak
   - reads completed lessons from the course's own progress store → 30-day map
   Drop-in: <script src="streak.js"></script> (or ../streak.js from /courses). */
(function (global) {
  'use strict';
  var VKEY = 'zerkalo-streak-v1';          // {visits:{'YYYY-MM-DD':true}}
  var CKEY = 'langbook-a1-progress';        // course store (shared with en-a1.html): {days:{n:true},xpTotal,exams}
  var DAY = 86400000;
  var FORGIVE = 2;                          // missed days we forgive before a streak breaks
  var TOTAL_DAYS = 30;

  function load(k, def) { try { return JSON.parse(localStorage.getItem(k)) || def; } catch (e) { return def; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function keyOf(d) { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function visits() { return (load(VKEY, { visits: {} }).visits) || {}; }
  function record() { var s = load(VKEY, { visits: {} }), k = keyOf(); if (!s.visits) s.visits = {}; if (!s.visits[k]) { s.visits[k] = true; save(VKEY, s); } return s.visits; }
  function total() { return Object.keys(visits()).length; }

  // streak = active days in the current run, forgiving gaps of up to FORGIVE missed days
  function current() {
    var keys = Object.keys(visits()).sort(); if (!keys.length) return 0;
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var last = new Date(keys[keys.length - 1] + 'T00:00:00');
    if (Math.round((today - last) / DAY) > FORGIVE + 1) return 0;   // last activity too long ago → broken
    var run = 1;
    for (var i = keys.length - 1; i > 0; i--) {
      var a = new Date(keys[i] + 'T00:00:00'), b = new Date(keys[i - 1] + 'T00:00:00');
      if (Math.round((a - b) / DAY) <= FORGIVE + 1) run++; else break;
    }
    return run;
  }
  function best() {
    var keys = Object.keys(visits()).sort(), bestRun = 0, run = 0, prev = null;
    for (var i = 0; i < keys.length; i++) {
      var cur = new Date(keys[i] + 'T00:00:00');
      if (prev && Math.round((cur - prev) / DAY) <= FORGIVE + 1) run++; else run = 1;
      if (run > bestRun) bestRun = run;
      prev = cur;
    }
    return bestRun;
  }
  // did the learner just return after a forgiven gap (missed 1–2 days)?
  function returnedAfterGap() {
    var keys = Object.keys(visits()).sort(); if (keys.length < 2) return 0;
    var t = new Date(keys[keys.length - 1] + 'T00:00:00'), p = new Date(keys[keys.length - 2] + 'T00:00:00');
    var g = Math.round((t - p) / DAY);
    return (g > 1 && g <= FORGIVE + 1) ? (g - 1) : 0;   // number of forgiven days
  }
  function plural(n, one, few, many) {
    var m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
    return many;
  }

  // ---- streak rewards: keeping a streak unlocks exam hints ----
  var HINT_TIERS = [{ days: 7, hints: 2 }, { days: 3, hints: 1 }];   // highest first
  function examHints(streak) {
    streak = (streak == null) ? current() : streak;
    for (var i = 0; i < HINT_TIERS.length; i++) if (streak >= HINT_TIERS[i].days) return HINT_TIERS[i].hints;
    return 0;
  }
  function nextHintTier(streak) {                                     // next not-yet-reached tier, or null if maxed
    streak = (streak == null) ? current() : streak;
    var asc = [{ days: 3, hints: 1 }, { days: 7, hints: 2 }];
    for (var i = 0; i < asc.length; i++) if (streak < asc[i].days) return { days: asc[i].days, hints: asc[i].hints, remaining: asc[i].days - streak };
    return null;
  }
  /* i18n: T()/lbPlural() come from i18n.js when the page includes it. */
  var T = window.T || function(k, ru){ return ru; };
  function nDays(n){ return window.lbPlural ? lbPlural(n, 'str.day', 'день', 'дня', 'дней') : plural(n, 'день', 'дня', 'дней'); }
  function nHints(n){ return window.lbPlural ? lbPlural(n, 'str.hint', 'подсказка', 'подсказки', 'подсказок') : plural(n, 'подсказка', 'подсказки', 'подсказок'); }
  function rewardHTML(streak) {
    var hints = examHints(streak), nt = nextHintTier(streak), main;
    if (hints > 0) {
      main = '🎟️ <b>' + hints + ' ' + nHints(hints) + '</b>' + T('str.rw.have',' на экзамене — твоя награда за серию')
        + (nt ? T('str.rw.more1','. Ещё ') + nt.remaining + ' ' + nDays(nt.remaining) + T('str.rw.more2',' — и будет ') + nt.hints + '.' : ' 🎉');
    } else {
      main = '🎟️ ' + T('str.rw.need1','Ещё ') + '<b>' + nt.remaining + ' ' + nDays(nt.remaining) + '</b>' + T('str.rw.need2',' серии — и на экзамене откроется подсказка 💡');
    }
    return '<div class="rw-main">' + main + '</div><div class="rw-ladder">' + T('str.rw.ladder','🔥 серия 3 дня → 1 подсказка · 7 дней → 2 подсказки на экзамене') + '</div>';
  }

  // completed lessons of the A1 course
  function courseProg() {
    var p = load(CKEY, {}), days = p.days || {}, done = 0, next = null;
    for (var i = 1; i <= TOTAL_DAYS; i++) { if (days[i]) done++; else if (next === null) next = i; }
    return { days: days, done: done, next: next, all: done >= TOTAL_DAYS, xp: p.xpTotal || 0 };
  }

  // the honest next step: finish current day, or take the pending weekly exam, or done
  function nextStep(cp) {
    if (cp.all) return { txt: T('str.done','Курс пройден 🏆 Забрать грамоту →'), href: 'certificate.html?course=en-a1' };
    if (cp.done === 0) return { txt: T('str.start','Начать курс →'), href: 'courses/en-a1.html?day=1' };
    var exams = (load(CKEY, {}).exams) || {};
    var wk = cp.next <= 7 ? 1 : cp.next <= 14 ? 2 : cp.next <= 21 ? 3 : 4;
    if (wk > 1 && !exams[wk - 1]) return { txt: T('str.exam','Сдать экзамен Недели ') + String(wk - 1).padStart(2, '0') + ' →', href: 'courses/en-a1.html' };
    return { txt: T('str.cont','Продолжить с Дня ') + cp.next + ' →', href: 'courses/en-a1.html?day=' + cp.next };
  }

  function cells(cp) {
    var h = '', doneIdx = 0;
    for (var i = 1; i <= TOTAL_DAYS; i++) {
      var done = !!cp.days[i];
      var cls = done ? 'on' : (i === cp.next ? 'next' : 'off');
      var st = done ? (' style="animation-delay:' + (doneIdx++ * 45) + 'ms"') : '';   // gentle cascade as days fill in
      h += '<i class="cell ' + cls + '"' + st + ' title="' + T('str.cellDay','День ') + i + (done ? T('str.cellDone',' · пройден ✓') : '') + '">' + i + '</i>';
    }
    return h;
  }

  var CSS = '' +
    '.streak-card{max-width:680px;margin:36px auto 0;background:var(--card,#f8f2e6);border:1px solid var(--line-strong,rgba(42,36,30,.34));border-radius:20px;padding:20px 22px;box-shadow:var(--shadow),0 0 50px -36px var(--accent);text-align:left}' +
    '.sc-top{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;margin-bottom:15px}' +
    '.sc-flame{display:flex;align-items:center;gap:12px}' +
    '.sc-flame .fl{font-size:36px;line-height:1;filter:drop-shadow(0 4px 10px rgba(176,129,58,.45))}' +
    '.sc-flame.cold .fl{filter:grayscale(1);opacity:.5}' +
    '.sc-n b{font-family:var(--display);font-size:34px;font-weight:700;color:var(--accent);line-height:.95;display:block}' +
    '.sc-n span{font-family:var(--label);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint)}' +
    '.sc-course{text-align:right;font-family:var(--label)}' +
    '.sc-course .nm{font-family:var(--display);font-size:21px;font-weight:600;color:var(--ink);line-height:1}' +
    '.sc-course .cnt{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-faint);margin-top:3px}' +
    '.cmap{display:grid;grid-template-columns:repeat(10,1fr);gap:7px;margin:2px 0 4px}' +
    '@media(max-width:560px){.cmap{grid-template-columns:repeat(6,1fr)}}' +
    '.cmap .cell{aspect-ratio:1;border-radius:9px;border:1px solid var(--line,rgba(42,36,30,.16));background:var(--card-2,#efe6d2);display:flex;align-items:center;justify-content:center;font-family:var(--label);font-size:11px;font-weight:700;color:var(--ink-faint);font-style:normal}' +
    '.cmap .cell.on{position:relative;background:linear-gradient(140deg,#1f7a4a,#2f9e5f 55%,#74d29c);border-color:transparent;color:#f4fff8;box-shadow:0 4px 13px -3px rgba(34,120,70,.6);animation:cellPop .45s cubic-bezier(.2,.9,.3,1.3) both}' +
    '.cmap .cell.on::after{content:"✓";position:absolute;top:3px;right:5px;font-size:9px;line-height:1;color:rgba(255,255,255,.92)}' +
    '@keyframes cellPop{0%{transform:scale(.55);opacity:0}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}' +
    '@media(prefers-reduced-motion:reduce){.cmap .cell.on{animation:none}}' +
    '.cmap .cell.next{border-color:var(--accent);color:var(--accent);box-shadow:0 0 0 1.5px var(--accent) inset}' +
    '.sc-legend{display:flex;gap:15px;flex-wrap:wrap;margin:11px 0 2px;font-family:var(--label);font-size:11px;color:var(--ink-soft)}' +
    '.sc-legend span{display:inline-flex;align-items:center;gap:6px}' +
    '.sc-legend i{width:13px;height:13px;border-radius:5px;border:1px solid var(--line,rgba(42,36,30,.16));background:var(--card-2,#efe6d2);flex:0 0 auto}' +
    '.sc-legend i.on{background:linear-gradient(140deg,#1f7a4a,#2f9e5f,#74d29c);border-color:transparent}' +
    '.sc-legend i.next{background:transparent;border-color:var(--accent);box-shadow:0 0 0 1.5px var(--accent) inset}' +
    '.sc-bar{display:flex;align-items:center;gap:12px;margin:14px 0 4px}' +
    '.sc-bar .track{flex:1;height:8px;background:var(--card-2,#efe6d2);border:1px solid var(--line,rgba(42,36,30,.16));border-radius:40px;overflow:hidden}' +
    '.sc-bar .track i{display:block;height:100%;width:0;background:var(--gold-grad,linear-gradient(135deg,#8a6a37,#b08a44,#d8b25a));border-radius:40px;transition:width .6s cubic-bezier(.6,0,.2,1)}' +
    '.sc-bar .pct{font-family:var(--display);font-weight:700;font-size:16px;color:var(--accent);min-width:42px;text-align:right}' +
    '.sc-cta{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:14px}' +
    '.sc-cta a{font-family:var(--label);font-weight:700;font-size:14px;text-decoration:none;border-radius:30px;padding:12px 24px;background:var(--gold-grad,linear-gradient(135deg,#8a6a37,#b08a44,#d8b25a));color:#1a1206;box-shadow:0 12px 26px -14px var(--accent);transition:transform .15s}' +
    '.sc-cta a:hover{transform:translateY(-2px)}' +
    '.sc-reward{margin-top:13px;padding:12px 14px;border:1px dashed var(--gold-line,rgba(138,106,55,.4));border-radius:13px;background:var(--tint,rgba(138,106,55,.05))}' +
    '.sc-reward .rw-main{font-family:var(--label);font-size:13px;color:var(--ink);line-height:1.45}' +
    '.sc-reward .rw-main b{color:var(--accent)}' +
    '.sc-reward .rw-ladder{font-family:var(--label);font-size:11px;color:var(--ink-faint);margin-top:5px;letter-spacing:.02em}' +
    '.sc-foot{font-family:var(--label);font-size:12.5px;color:var(--ink-faint);font-style:italic}';

  function injectCSS() {
    if (document.getElementById('streak-css')) return;
    var st = document.createElement('style'); st.id = 'streak-css'; st.textContent = CSS;
    document.head.appendChild(st);
  }

  function mountCard() {
    var mount = document.getElementById('streak-mount');
    /* карточки «продолжить» (если есть) идут первыми — огонёк после них */
    var anchorAfter = mount ? null : (document.getElementById('continueStrip') || document.querySelector('.masthead'));
    if (!mount && !anchorAfter) return;                       // course pages: record only, no card
    injectCSS();
    var cur = current(), cp = courseProg(), backDays = returnedAfterGap();
    var pct = Math.round(cp.done / TOTAL_DAYS * 100);
    var ns = nextStep(cp);
    var cta = '<a href="' + ns.href + '">' + ns.txt + '</a>';
    var foot = cp.all ? T('str.foot.all','Ты прошёл(ла) весь A1 — это огромная работа 🏆')
      : backDays ? (T('str.foot.back1','С возвращением! 💛 Серия цела — ') + backDays + ' ' + nDays(backDays) + T('str.foot.back2',' прощаются.'))
      : cur > 1 ? T('str.foot.grow','Серия растёт — так держать 💛')
      : cp.done > 0 ? T('str.foot.start','Сделай сегодня день — и серия начнётся 🔥')
      : T('str.foot.first','Один день — один урок. Начни сегодня 💛');

    var card = document.createElement('section');
    card.className = 'streak-card reveal'; card.style.animationDelay = '.3s';
    card.innerHTML =
      '<div class="sc-top">' +
        '<div class="sc-flame' + (cur === 0 ? ' cold' : '') + '"><span class="fl">🔥</span>' +
          '<div class="sc-n"><b>' + cur + '</b><span>' + nDays(cur) + T('str.inStreak',' в серии') + '</span></div></div>' +
        '<div class="sc-course"><div class="nm">English A1</div><div class="cnt">' + cp.done + ' / ' + TOTAL_DAYS + ' ' + T('str.lessons','уроков') + '</div></div>' +
      '</div>' +
      '<div class="cmap">' + cells(cp) + '</div>' +
      '<div class="sc-legend"><span><i class="on"></i>' + T('str.legend.done','пройдено') + '</span><span><i class="next"></i>' + T('str.legend.next','дальше') + '</span><span><i></i>' + T('str.legend.ahead','впереди') + '</span></div>' +
      '<div class="sc-bar"><span class="track"><i style="width:' + pct + '%"></i></span><span class="pct">' + pct + '%</span></div>' +
      '<div class="sc-reward">' + rewardHTML(cur) + '</div>' +
      '<div class="sc-cta">' + cta + '<span class="sc-foot">' + foot + '</span></div>';
    if (mount) mount.appendChild(card);
    else {
      /* new-visitor priority (Tanya, 2026-07-07): a brand-new guest should meet
         the PRODUCT first — their empty streak card moves to the bottom;
         a returning learner gets it right under the hero, as before. */
      var isNew = cp.done === 0 && total() <= 1;
      var foot = document.querySelector('footer.foot');
      if (isNew && foot) foot.parentNode.insertBefore(card, foot);
      else anchorAfter.parentNode.insertBefore(card, anchorAfter.nextSibling);
    }
  }

  function init() { record(); mountCard(); }

  global.Streak = { record: record, visits: visits, current: current, best: best, total: total, courseProg: courseProg, examHints: examHints, nextHintTier: nextHintTier, keyOf: keyOf };

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})(window);
