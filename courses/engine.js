/* MIRROR course engine — shared renderer/logic for all level viewers.
   Per-level specifics come from window.LEVEL (set in level-en-*.js):
     { code, pkey, preview, finalNote }
   Course data comes from COURSE + EXAMS (level file) and DAYS (days-*.js). */
const LEVEL = window.LEVEL;
/* target-language strings — English defaults; other languages set these in level-*.js */
const SPEECH_LANG = LEVEL.speech || 'en-US';
const LANG_PO  = LEVEL.langPo  || 'по-английски';   // «Звучит по-английски», плейсхолдеры
const LANG_NA  = LEVEL.langNa  || 'английский';     // «Переведи на английский»
const LANG_ADJ = LEVEL.langAdj || 'английское';     // «английское слово»
const PH_IN    = LEVEL.phIn    || 'in English…';
/* i18n: T() comes from i18n.js (loaded before engine.js on every course page).
   Guard keeps the engine safe if it's ever loaded standalone (e.g. tests). */
var T = window.T || function(k, ru){ return ru; };
const $ = s => document.querySelector(s);
function escA(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/"/g,'&quot;'); }
function strip(s){ return String(s==null?'':s).replace(/<[^>]+>/g,''); }
let voices=[];
function loadVoices(){ voices = window.speechSynthesis ? speechSynthesis.getVoices() : []; }
if('speechSynthesis' in window){ loadVoices(); speechSynthesis.onvoiceschanged=loadVoices; }
let speakGen=0;
function newSpeakGen(){ speakGen++; return speakGen; }
function genActive(g){ return g===speakGen; }
function speakOne(text,opts){ opts=opts||{};
  if(!('speechSynthesis' in window)){ if(opts.after) opts.after(); return; }
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(strip(text));
  u.lang=opts.lang||SPEECH_LANG; u.rate=opts.rate||1;
  const code=u.lang.slice(0,2).toLowerCase();
  const v=voices.find(v=>v.lang&&v.lang.toLowerCase().startsWith(code)); if(v)u.voice=v;
  if(opts.after) u.onend=opts.after;
  speechSynthesis.speak(u);
}
/* one-off (word, line, example) — stops any running sequence */
function speak(text,opts){ speakGen++; speakOne(text,opts); }
/* play a list of phrases in order at a given rate; a newer playback cancels this one */
function playSeq(items,render,rate){ var gen=newSpeakGen();
  (function step(i){ if(!genActive(gen)) return; if(i>=items.length){ if(render)render(-1); return; }
    if(render)render(i); speakOne(items[i],{rate:rate,after:function(){ if(genActive(gen)) step(i+1); }}); })(0);
}
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
function norm(s){ return (s||'').toLowerCase().replace(/[.,!?'"’`]/g,'').replace(/\s+/g,' ').trim(); }

/* ===== render building blocks ===== */
function guide(text,audio,small){ return `<div class="guide ${small?'small':''}"><div class="avatar">М</div><div class="g-body"><div class="g-name"><b>${T('eng.guideName','Мира')}</b>${small?'':T('eng.guideTagline','твой личный проводник')}</div><p>${text}</p>${audio?`<button class="listen" data-ru="${escA(audio)}">🔊 ${T('eng.listenVoice','Прослушать голосом')}</button>`:''}</div></div>`; }
function howto(text){ return `<div class="howto"><span class="ic">📋</span><span class="tx">${text}</span></div>`; }
function hintChip(h){ return h?`<span class="hint" tabindex="0">💡<span class="hint-pop"><b>${T('eng.hintLabel','Подсказка.')}</b> ${h}</span></span>`:''; }
function widget(t,hint){ hint=hint||'';
  if(t.type==='choice') return `<div class="w-choice" data-cp data-explain="${escA(t.explain||'')}">${hintChip(hint)}${t.q?`<div class="q">${t.q}</div>`:''}<div class="opts">${t.opts.map((o,i)=>`<button class="opt"${i===t.answer?' data-ok':''}>${o}</button>`).join('')}</div><div class="fb"></div></div>`;
  if(t.type==='build') return `${t.q?`<div class="q">${t.q}</div>`:''}<div class="w-build" data-cp data-answer="${escA(t.answer)}">${hintChip(hint)}<div class="build-answer" data-ph="${T('eng.tapWordsOrder','Нажимай слова по порядку…')}"></div><div class="build-tiles"></div><div class="fb"></div></div>`;
  if(t.type==='type') return `${t.q?`<div class="q">${t.q}</div>`:''}<div class="w-type" data-cp data-accept="${escA((t.accept||[]).join('|'))}">${hintChip(hint)}<div class="fillrow"><input type="text" autocomplete="off" spellcheck="false" placeholder="${escA(t.placeholder||'…')}"><button class="btn check">${T('eng.checkBtn','Проверить')}</button></div><div class="fb"></div></div>`;
  if(t.type==='speak') return `<div class="w-speak" data-cp data-want="${escA(t.want||'')}">${hintChip(hint)}<div class="speak-row"><button class="mic">🎤</button><div><div class="say-target">“${t.target}”</div><div class="say-sub">${t.sub||''} · <button class="play" data-say="${escA(strip(t.target))}">🔊</button> ${T('eng.sample','образец')}</div></div><button class="btn ghost self">${T('eng.iSaidIt','Я сказал(а) ✓')}</button></div><div class="fb"></div></div>`;
  return '';
}
function tasks(list,defHint){ return (list||[]).map((t,i)=>{ const h=t.hint||defHint||''; return `<div${i>0?' style="margin-top:22px"':''}>${t.howto?howto(t.howto):''}${widget(t,h)}</div>`; }).join(''); }
function ruleTable(tb){ if(!tb||!tb.rows) return ''; return `<table class="schema"><tbody>${tb.rows.map((r,i)=>`<tr class="${i===tb.star?'star':''}"><td class="k">${r[0]}</td><td class="v">${r[1]}</td></tr>`).join('')}</tbody></table>`; }
function ruleExamples(ex){ if(!ex||!ex.length) return ''; return `<div class="examples">${ex.map(e=>`<div class="ex-line"><span class="ru">${e.ru}</span><span class="arr">→</span><span class="en">${e.en}</span>${e.gloss?`<span class="gloss">${e.gloss}</span>`:''}<button class="play" data-say="${escA(e.say||strip(e.en))}">🔊</button></div>`).join('')}</div>`; }
function ruleMistakes(ms){ if(!ms||!ms.length) return ''; return `<div class="mistakes"><div class="m-head">⚠️ ${T('eng.mistakesHead','Частые ошибки — так НЕ надо')}</div>${ms.map(m=>`<div class="m-row"><div class="wrong">❌ <s>${m.wrong}</s></div><div class="right">✅ ${m.right}</div>${m.why?`<div class="why">${T('eng.whyPrefix','Почему: ')}${m.why}</div>`:''}</div>`).join('')}</div>`; }
function renderRule(r){ return `<div class="block"><div class="rule"><div class="r-eyebrow">${r.eyebrow||''}</div>${r.title?`<h3>${r.title}</h3>`:''}${(r.paras||[]).map(p=>`<p>${p}</p>`).join('')}${r.audio?`<button class="listen" data-ru="${escA(r.audio)}">🔊 ${T('eng.listenExplain','Прослушать объяснение')}</button>`:''}${r.mnemonic?`<div class="mnemo">💡 <b>${T('eng.mnemonicLabel','Образ для запоминания:')}</b> ${r.mnemonic}</div>`:''}${ruleTable(r.table)}${ruleExamples(r.examples)}${ruleMistakes(r.mistakes)}</div>${(r.tasks&&r.tasks.length)?`<div class="task">${tasks(r.tasks,r.mnemonic)}</div>`:''}</div>`; }
function renderReading(R){ const body=(R.sentences||[]).map((s,i)=>{ const ws=String(s).split(/\s+/).map(tok=>`<span class="wm" data-w="${escA(tok.toLowerCase().replace(/[^a-z']/g,''))}">${tok}</span>`).join(' '); return `<span class="ws" data-i="${i}">${ws}</span>`; }).join(' ');
  return `<div class="block">${R.intro?guide(R.intro,'',true):''}<div class="w-reading reading" data-cp><div class="r-eyebrow">📖 ${T('eng.readingHeader','Текст для чтения · слушай · читай · читай вслух')}</div>${R.title?`<h3 style="font-family:var(--display);font-weight:600;font-size:26px;margin:0 0 8px">${R.title}</h3>`:''}<div class="read-tools"><button class="btn ghost r-play">▶ ${T('eng.readingPlay','Прослушать')}</button><button class="btn ghost r-slow">🐢 ${T('eng.slower','Медленнее')}</button><button class="btn ghost r-tr">${T('eng.showTranslation','Показать перевод')}</button></div><div class="passage">${body}</div><div class="read-translation">${R.translation||''}</div><div class="read-tools" style="margin-top:18px"><button class="btn r-rec">🎤 ${T('eng.readAloud','Прочитать вслух')}</button><button class="btn ghost r-myplay" style="display:none">▶ ${T('eng.myRecording','Моя запись')}</button><button class="btn ghost r-self">${T('eng.readDoneBtn','Прочитал(а) ✓')}</button></div><div class="rec-status"></div><div class="acc-meter" style="display:none"></div></div></div>`; }
function renderFeedback(n){ return `<div class="block"><div class="fbk" data-day="${n}"><div class="fbk-q">${T('eng.fbkQ','Как тебе сегодняшний урок?')}</div><div class="fbk-faces"><button class="fbk-face" data-v="up">👍 ${T('eng.fbkUp','Понравилось')}</button><button class="fbk-face" data-v="meh">😐 ${T('eng.fbkMeh','Так себе')}</button><button class="fbk-face" data-v="down">👎 ${T('eng.fbkDown','Не зашло')}</button></div><textarea class="fbk-comment" placeholder="${escA(T('eng.fbkPh','Что улучшить? Оставь комментарий — это поможет сделать курс лучше (по желанию)…'))}"></textarea><button class="btn fbk-send">${T('eng.fbkSend','Отправить отзыв')}</button><div class="fbk-thanks" style="display:none">${T('eng.fbkThanks','Спасибо! Твой отзыв сохранён 💛')}</div></div></div>`; }

function renderEssay(E){ return `<div class="block">${E.intro?guide(E.intro,'',true):''}<div class="task">${howto('✍️ <b>'+T('eng.essayLabel','Мини-эссе.')+'</b> '+(E.prompt||'')+(E.hint?' <span style="color:var(--ink-3)">('+E.hint+')</span>':''))}<div class="w-write" data-cp><textarea class="write-area" placeholder="${escA(T('eng.essayPh1','Напиши здесь свои предложения '))}${LANG_PO}…"></textarea><div class="write-tools"><button class="btn write-done">${T('eng.doneBtn','Готово ✓')}</button><button class="btn ghost write-ex">${T('eng.showExample','Показать пример')}</button></div><div class="write-example"><div class="we-label">${T('eng.exampleAnswerLabel','Пример ответа')}</div>${E.example||''}</div><div class="fb"></div></div></div></div>`; }
function renderPicture(P){ var visual = P.img
    ? `<figure class="picture-frame"><img class="picture-photo" src="${P.img}" alt="${escA(T('eng.pictureAlt','Картинка для описания'))}" loading="lazy">${P.credit?`<figcaption>${P.credit}</figcaption>`:''}</figure>`
    : `<div class="picture-card">${P.emoji||'🖼'}</div>`;
  return `<div class="block">${P.intro?guide(P.intro,'',true):''}<div class="task">${howto('🖼 <b>'+T('eng.describePicLabel','Опиши картинку.')+'</b> '+(P.prompt||'')+(P.hint?' <span style="color:var(--ink-3)">('+P.hint+')</span>':''))}${visual}<div class="w-write" data-cp><textarea class="write-area" placeholder="${escA(T('eng.describePicPh1','Опиши картинку '))}${LANG_PO}…"></textarea><div class="write-tools"><button class="btn write-done">${T('eng.doneBtn','Готово ✓')}</button><button class="btn ghost write-ex">${T('eng.showExample','Показать пример')}</button></div><div class="write-example"><div class="we-label">${T('eng.possibleAnswerLabel','Возможный ответ')}</div>${P.example||''}</div><div class="fb"></div></div></div></div>`; }
function renderDay(d){
  let h=`<div class="dayhead"><div class="eyebrow">${T('eng.week','Неделя')} ${d.week} · ${T('eng.day','День')} ${String(d.day).padStart(2,'0')}</div><h1>${d.themeRu}</h1><div class="echo">${d.themeEn}</div></div>`;
  h+=guide(d.intro,d.introAudio,false);
  if(d.goals&&d.goals.length) h+=`<div class="plan"><h4>${T('eng.goalsHeader','Что ты будешь уметь к концу дня')}</h4><ul>${d.goals.map(g=>`<li>${g}</li>`).join('')}</ul></div>`;
  if(d.review) h+=`<div class="block">${guide(d.review.intro,d.review.introAudio,true)}<div class="task"><div class="howto"><span class="ic">🔁</span><span class="tx"><b>${T('eng.reviewBoldLabel','Сначала вспомним вчерашнее.')}</b> ${T('eng.reviewSub','Маленькая разминка — и идём дальше.')}</span></div>${tasks(d.review.tasks)}</div></div>`;
  (d.rules||[]).forEach(r=>{ h+=renderRule(r); });
  if(d.reading) h+=renderReading(d.reading);
  if(d.dialogue) h+=`<div class="block">${d.dialogue.intro?guide(d.dialogue.intro,'',true):''}<div class="rule" style="padding-bottom:22px"><div class="r-eyebrow">${T('eng.dialogueHeader','Диалог · слушай, читай, говори')}</div><div class="tap-hint">${T('eng.tapHint','💡 Тапни по строке — перевод. Нажми на <span class="gw">слово</span> — узнаешь его.')}</div><div class="dlg-tools"><button class="btn ghost dlg-play">▶ ${T('eng.playDialogue','Прослушать диалог')}</button><button class="btn ghost dlg-slow">🐢 ${T('eng.slowerAlt','Помедленнее')}</button></div><div class="dlg" id="dlg"></div></div></div>`;
  if(d.scene) h+=`<div class="block">${d.scene.intro?guide(d.scene.intro,'',true):''}<div class="rule" style="padding-bottom:22px"><div class="r-eyebrow">🎬 ${T('eng.sceneHeader','Смотри сценку · живое общение')}</div><div class="w-scene" data-cp><div class="scene" id="scene"></div><div style="text-align:center;margin-top:16px"><button class="btn scene-play">▶ ${T('eng.watchScene','Смотреть сценку')}</button></div></div></div></div>`;
  if(d.vocab) h+=`<div class="block">${d.vocab.intro?guide(d.vocab.intro,'',true):''}<div class="rule" style="padding-bottom:22px"><div class="r-eyebrow">${T('eng.vocabHeader','Словарь дня · нажми карточку')}</div><div class="vgrid" id="vocab"></div></div></div>`;
  if(d.picture) h+=renderPicture(d.picture);
  if(d.drag) h+=`<div class="block">${d.drag.intro?guide(d.drag.intro,'',true):''}<div class="task">${howto(d.drag.howto||'<b>'+T('eng.dragLabel','Что делать:')+'</b> '+T('eng.dragBody1','перетащи ')+LANG_ADJ+T('eng.dragBody2',' слово в рамку с правильным переводом — или просто нажми на слово, а потом на рамку.'))}<div class="w-drag" data-cp><div class="dd" id="dragdrop"></div><div class="fb"></div></div></div></div>`;
  if(d.essay) h+=renderEssay(d.essay);
  if(d.quiz) h+=`<div class="block">${d.quiz.intro?guide(d.quiz.intro,'',true):''}<div class="task">${howto('<b>'+T('eng.dragLabel','Что делать:')+'</b> '+T('eng.quizBody','ответь на вопросы. После каждого я объясню, почему так.'))}${tasks((d.quiz.items||[]).map(it=>({type:'choice',q:it.q,opts:it.opts,answer:it.answer,explain:it.explain})))}</div></div>`;
  {const learned=(d.learned&&d.learned.length)?d.learned:(d.goals||[]); // Golden Standard Тани: финал дня — в прошедшем времени (поле learned)
  if(learned.length) h+=`<div class="block"><div class="plan recap"><h4>✅ ${T('eng.goalsRecapHeader','Чему ты научился(ась) сегодня')}</h4><ul>${learned.map(g=>`<li>${g}</li>`).join('')}</ul></div></div>`;}
  h+=renderFeedback(d.day);
  return h;
}

/* ===== map ===== */
/* ---- progress (which weekly exams are passed; gates the next week) ---- */
const PKEY=LEVEL.pkey;
const PASS_PCT=80;   // checkpoint pass mark (80% — standard e-learning mastery threshold)
const HINT_AFTER=3;  // after this many COMPLETE failed attempts, reveal rule-hints (not answers) on wrong items
function loadProg(){ try{ return JSON.parse(localStorage.getItem(PKEY))||{exams:{}}; }catch(e){ return {exams:{}}; } }
function saveProg(p){ try{ localStorage.setItem(PKEY,JSON.stringify(p)); }catch(e){} }
function dayDone(n){ const p=loadProg(); return !!(p.days&&p.days[n]); }
function markDayDone(n){ const p=loadProg(); p.days=p.days||{}; if(!p.days[n]){ p.days[n]=true; p.xpTotal=(p.xpTotal||0)+(xp||0); if(p.dayState) delete p.dayState[n]; saveProg(p); } } // persist completion + total XP (once); drop the in-day bookmark
/* in-day bookmark: which checkpoints of the open day are done + session xp/streak,
   so closing the tab mid-lesson no longer loses progress (schema is sync-ready) */
function saveDayState(){
  if(!currentDay) return;
  const p=loadProg(); p.v=p.v||1; p.dayState=p.dayState||{};
  if(p.days&&p.days[currentDay.day]){ // day already completed → no bookmark needed
    delete p.dayState[currentDay.day];
    p.best=Math.max(p.best||0,best); p.lastSeen=Date.now(); saveProg(p); return;
  }
  const els=$('#dayContent').querySelectorAll('[data-cp]'); const idx=[];
  els.forEach((el,i)=>{ if(el.dataset.cpDone) idx.push(i); });
  p.dayState[currentDay.day]={cp:idx,xp:xp,streak:streak,best:best};
  p.best=Math.max(p.best||0,best); p.lastSeen=Date.now(); saveProg(p);
}
function restoreDayState(n){
  if(dayDone(n)) return; // a finished day reopens fresh (for practice)
  const st=(loadProg().dayState||{})[n]; if(!st||!st.cp||!st.cp.length) return;
  const els=$('#dayContent').querySelectorAll('[data-cp]');
  st.cp.forEach(i=>{ const el=els[i]; if(el&&!el.dataset.cpDone){ el.dataset.cpDone='1'; prog.done.add(el); } });
  xp=st.xp||0; streak=st.streak||0; best=st.best||0;
  updateHud(); updateProg();
}
function examPassed(w){ const p=loadProg(); return !!(p.exams&&p.exams[w]); }
function passExam(w){ const p=loadProg(); p.exams=p.exams||{}; p.exams[w]=true; saveProg(p); }
function getAttempts(w){ const p=loadProg(); return (p.attempts&&p.attempts[w])||0; }
function bumpAttempt(w){ const p=loadProg(); p.attempts=p.attempts||{}; p.attempts[w]=(p.attempts[w]||0)+1; saveProg(p); return p.attempts[w]; }
function resetAttempts(w){ const p=loadProg(); if(p.attempts&&p.attempts[w]){ p.attempts[w]=0; saveProg(p); } }
function weekUnlocked(w){ return w===1 || examPassed(w-1) || (LEVEL.preview && COURSE[w-1] && COURSE[w-1].days.some(d=>!!DAYS[d.n])); /* preview levels: a built week is browsable before the exam */ }
function showLockTip(w){ rewardPop(T('eng.lockTip1','🔒 Сначала сдай экзамен за Неделю ')+String(w-1).padStart(2,'0')+T('eng.lockTip2',' на ')+PASS_PCT+'%'); }

/* a11y: give icon-only buttons (🔊 🐢 🎤) an accessible name, wherever they render
   (day templates, days.js content, and the exam). Runs once + on any re-render. */
(function(){
  const NAMES={'🔊':T('eng.ariaSpeak','Озвучить'),'🐢':T('eng.ariaSpeakSlow','Озвучить медленно'),'🎤':T('eng.ariaRecord','Записать произношение')};
  function run(){ document.querySelectorAll('button:not([aria-label])').forEach(b=>{ const n=NAMES[(b.textContent||'').trim()]; if(n) b.setAttribute('aria-label',n); }); }
  let pend=false; const sched=()=>{ if(pend) return; pend=true; requestAnimationFrame(()=>{ pend=false; run(); }); };
  if(document.readyState!=='loading') run(); else document.addEventListener('DOMContentLoaded',run);
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
})();

function renderMap(){
  let html='';
  COURSE.forEach((w,i)=>{
    const wk=i+1, unlocked=weekUnlocked(wk), passed=examPassed(wk), ex=EXAMS[wk];
    html+=`<div class="week${unlocked?'':' locked'}"><div class="week-head"><span class="wn">${T('eng.week','Неделя')} ${w.wn}</span><span class="wt">${w.wt}</span>${unlocked?(passed?'<span class="wlock done">✓ '+T('eng.weekPassed','неделя сдана')+'</span>':''):`<span class="wlock">${T('eng.examGate1','🔒 сдай экзамен за Неделю ')}${String(wk-1).padStart(2,'0')}</span>`}</div><div class="days">`;
    html+=w.days.map(d=>{
      const live=!!DAYS[d.n];
      if(!unlocked) return `<div class="day locked" data-locked="${wk}"><div class="dn">${String(d.n).padStart(2,'0')}<small>${T('eng.dayShort','день')}</small></div><div class="di"><div class="dt">${d.t}</div><div class="dp">${d.p}</div></div><span class="badge">🔒</span></div>`;
      const done=live&&dayDone(d.n);
      const paid=live&&window.PAYWALL&&PAYWALL.enabled&&!licenseOk()&&d.n>PAYWALL.freeDays;
      if(paid) return `<div class="day paid" data-buy="1"><div class="dn">${String(d.n).padStart(2,'0')}<small>${T('eng.dayShort','день')}</small></div><div class="di"><div class="dt">${d.t}</div><div class="dp">${d.p}</div></div><span class="badge">🔒 ${T('eng.paidBadge','полная версия')}</span></div>`;
      return `<${live?'a':'div'} class="day ${live?'live':'soon'}${done?' done':''}"${live?' data-day="'+d.n+'" href="#"':''}><div class="dn">${String(d.n).padStart(2,'0')}<small>${T('eng.dayShort','день')}</small></div><div class="di"><div class="dt">${d.t}</div><div class="dp">${d.p}</div></div><span class="badge">${done?'✓ '+T('eng.done','пройдено'):(live?T('eng.start','начать'):T('eng.soon','скоро'))}</span></${live?'a':'div'}>`;
    }).join('');
    if(ex){
      const st = !unlocked ? 'locked' : (passed ? 'passed' : 'ready');
      const badge = st==='passed'?'✓ '+T('eng.examPassedBadge','сдано'):(st==='ready'?T('eng.submitExam','сдать'):'🔒');
      const icon = ex.final?'🏆':'🎓';
      const small = ex.final?T('eng.finalShort','финал'):T('eng.testShort','тест');
      const cardTitle = ex.final?T('eng.finalExamTitle','Финальный экзамен'):T('eng.weekExamTitle','Экзамен недели');
      const note = ex.final?T('eng.passNoteFinal1','Сдай на 80%+ → сертификат ')+LEVEL.code:T('eng.passNoteWeek1','Сдай на 80%+ → откроется Неделя ')+String(wk+1).padStart(2,'0');
      const tag = st==='locked'?'div':'a';
      const exPaid=window.PAYWALL&&PAYWALL.enabled&&!licenseOk(); // все экзамены — в полной версии (проба = 3 урока)
      if(exPaid){ html+=`<div class="day checkpoint paid" data-buy="1"><div class="dn">${icon}<small>${small}</small></div><div class="di"><div class="dt">${cardTitle}</div><div class="dp">${T('eng.paidNote','Доступно в полной версии курса')}</div></div><span class="badge">🔒 ${T('eng.paidBadge','полная версия')}</span></div>`; }
      else html+=`<${tag} class="day checkpoint ${st}"${st==='locked'?' data-locked="'+wk+'"':' data-exam="'+wk+'" href="#"'}><div class="dn">${icon}<small>${small}</small></div><div class="di"><div class="dt">${cardTitle}</div><div class="dp">${note}</div></div><span class="badge">${badge}</span></${tag}>`;
    }
    html+=`</div></div>`;
  });
  $('#weeks').innerHTML=html;
  $('#weeks').querySelectorAll('.day.live').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();openDay(+el.dataset.day);}));
  $('#weeks').querySelectorAll('[data-buy]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();goBuy();}));
  $('#weeks').querySelectorAll('.day.checkpoint[data-exam]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();openExam(+el.dataset.exam);}));
  $('#weeks').querySelectorAll('[data-locked]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();showLockTip(+el.dataset.locked);}));
}

/* ---- exam view: review first, then questions, 100% to unlock ---- */
function renderExam(ex){
  const hints=(window.Streak?Streak.examHints():0);   // streak reward: 3-day streak → 1 hint, 7-day → 2
  let h=`<div class="ex-bar"><button class="btn ghost ex-back" type="button">${T('eng.backToLessons','←&nbsp;К&nbsp;урокам')}</button><span class="ex-bar-t">${ex.final?T('eng.finalExamTitle','Финальный экзамен'):T('eng.examWeekPrefix','Экзамен · Неделя ')+String(ex.week).padStart(2,'0')}</span></div>`;
  h+=`<div class="dayhead exam-head"><div class="eyebrow">${ex.final?T('eng.finalExamTitle','Финальный экзамен'):T('eng.checkpointWeekPrefix','Чекпоинт · Неделя ')+String(ex.week).padStart(2,'0')}</div><h1>${ex.title}</h1><div class="echo">${ex.final?'Final test':'Weekly checkpoint'}</div></div>`;
  h+=guide(ex.intro,'',false);
  const examHowto = hints>0
    ? T('eng.examHowtoHints','<b>Экзамен.</b> Честная проверка того, что уже в голове. За твою серию доступны <b>подсказки</b> 💡 — на трудном вопросе нажми «Подсказка», и я уберу один неверный ответ. Для зачёта нужно <b>80%</b>. Не вышло с первого раза — спокойно пробуй ещё. 💪')
    : T('eng.examHowtoNoHints','<b>Экзамен.</b> Здесь честная проверка того, что уже в голове. Ответь на все вопросы и нажми «Проверить». Для зачёта нужно <b>80%</b>. <i>Подними серию до 3 дней — и на экзамене появятся подсказки 💡</i>');
  h+=`<div class="block"><div class="task">${howto(examHowto)}${hints>0?`<div class="exam-hintbar">🎟️ ${T('eng.hintsBarPrefix','Подсказки за серию: ')}<b id="hintsLeft">${hints}</b> <span>${T('eng.hintsBarSuffix','— открой на сложном вопросе')}</span></div>`:''}<div class="exam">`;
  ex.q.forEach((q,i)=>{ h+=renderExq(q,i,hints); });
  h+=`</div><div class="exresult"></div><div style="text-align:center;margin-top:18px"><button class="btn exam-check">${T('eng.checkExamBtn','Проверить экзамен ✓')}</button></div></div></div>`;
  return h;
}
const EXQ_STEM={choice:T('eng.stemChoice','Выбери верный вариант'),gap:T('eng.stemGap','Впиши пропущенное слово'),trRE:T('eng.stemTrRE1','Переведи на ')+LANG_NA,trER:T('eng.stemTrER','Переведи на русский'),order:T('eng.stemOrder','Собери предложение из слов'),match:T('eng.stemMatch','Соедини пары'),describe:T('eng.stemDescribe','Опиши картинку')};
function exqPrompt(q,t){
  if(t==='trRE') return '«'+q.ru+'»';
  if(t==='trER') return '“'+q.en+'”';
  if(t==='order') return q.hintRu||'';
  if(t==='match') return q.q||T('eng.matchFallback','Соедини каждую картинку с её словом.');
  if(t==='describe') return q.prompt||'';
  return q.q; // choice / gap
}
function exqBody(q,t){
  if(t==='choice') return `<div class="exq-opts">${q.opts.map(o=>`<button type="button" class="opt" data-v="${escA(o)}">${o}</button>`).join('')}</div>`;
  if(t==='gap'||t==='trRE'||t==='trER'){ const ph=t==='trER'?T('eng.phRussian','по-русски…'):(t==='gap'?T('eng.phFillWord','впиши слово…'):PH_IN); return `<input class="exq-in" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${escA(ph)}">`; }
  if(t==='order') return `<div class="exq-aline empty" data-ph="${T('eng.tapWordsOrder','Нажимай слова по порядку…')}"></div><div class="exq-tiles"></div>`;
  if(t==='match') return `<div class="exq-mwrap"><div class="exq-mpool"></div><div class="exq-mslots"></div></div>`;
  if(t==='describe'){ const fig=q.img?`<figure class="exq-figure"><img src="${q.img}" alt="${escA(T('eng.pictureAlt','Картинка для описания'))}" loading="lazy"></figure>`:''; return `${fig}<textarea class="exq-ta" placeholder="${q.img?escA(T('eng.describePicPh1','Опиши картинку ')+LANG_PO+'…'):escA(T('eng.writeAnswerPh1','Напиши ответ ')+LANG_PO+'…')}"></textarea><div class="exq-wc"></div>`; }
  return '';
}
function renderExq(q,i,hints){ const t=q.type||'choice';
  const hint = (t==='choice'&&hints>0)?`<button type="button" class="exq-hint" title="${escA(T('eng.removeWrongTitle','Убрать один неверный ответ'))}">💡 ${T('eng.hintBtn','Подсказка')}</button>`:'';
  const dataAns = t==='choice'?` data-answer="${escA(q.answer)}"`:'';
  const dataMin = t==='describe'?` data-min="${q.minWords||0}"`:'';
  return `<div class="exq" data-type="${t}" data-i="${i}"${dataAns}${dataMin}><div class="exq-stem">${EXQ_STEM[t]||''}</div><div class="exq-q"><span class="exq-n">${i+1}</span><span class="exq-t">${exqPrompt(q,t)}</span>${hint}</div>${exqBody(q,t)}</div>`;
}
function openExam(w){
  if(window.PAYWALL&&PAYWALL.enabled&&!licenseOk()){ goBuy(); return; } // экзамены только в полной версии
  const ex=EXAMS[w]; if(!ex) return; mapScroll=window.pageYOffset||0;
  if(window.speechSynthesis) speechSynthesis.cancel();
  $('#dayContent').innerHTML=renderExam(ex);
  $('#viewMap').classList.remove('on'); $('#viewDay').classList.add('on');
  $('#toMap').style.display='inline'; $('#finish').classList.remove('show');
  const dp=document.querySelector('.dayprog'); if(dp) dp.style.display='none';
  window.scrollTo(0,0);
  wireExam($('#dayContent'),w);
}
function wireExam(root,w){
  const res=root.querySelector('.exresult'), btn=root.querySelector('.exam-check');
  root.querySelectorAll('.exq .opt').forEach(o=>o.addEventListener('click',()=>{
    if(o.classList.contains('opt-out')) return;                         // a hinted-away option is not selectable
    const q=o.closest('.exq'); q.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel','wrong','correct')); q.classList.remove('q-wrong','q-right'); o.classList.add('sel');
    if(res.classList.contains('show')){ res.className='exresult'; res.innerHTML=''; btn.textContent=T('eng.checkExamBtn','Проверить экзамен ✓'); } // changing an answer = fresh attempt
  }));
  // mixed-format widgets: text inputs, sentence builders, picture-match, describe
  const clearRes=()=>{ if(res.classList.contains('show')){ res.className='exresult'; res.innerHTML=''; btn.textContent=T('eng.checkExamBtn','Проверить экзамен ✓'); } };
  const exr=EXAMS[w];
  root.querySelectorAll('.exq-in').forEach(inp=>inp.addEventListener('input',()=>{ inp.classList.remove('ok','no'); inp.closest('.exq').classList.remove('q-right','q-wrong'); clearRes(); }));
  root.querySelectorAll('.exq[data-type="order"]').forEach(q=>wireExqOrder(q,exr.q[+q.dataset.i],clearRes));
  root.querySelectorAll('.exq[data-type="match"]').forEach(q=>wireExqMatch(q,exr.q[+q.dataset.i],clearRes));
  root.querySelectorAll('.exq[data-type="describe"]').forEach(q=>{ const ta=q.querySelector('.exq-ta'),wc=q.querySelector('.exq-wc'),min=+q.dataset.min||0;
    const upd=()=>{ const n=norm(ta.value).split(' ').filter(Boolean).length; wc.textContent=T('eng.wordsCountPrefix','слов: ')+n+(min?(T('eng.wordsNeedPrefix',' · нужно ≥ ')+min):''); wc.style.color=n>=min?'var(--good)':'var(--ink-3)'; q.classList.remove('q-right','q-wrong'); clearRes(); };
    ta.addEventListener('input',upd); upd(); });
  // streak-reward hints: spend one to remove a wrong option (50/50)
  let hintsLeft=(window.Streak?Streak.examHints():0);
  const hintsLeftEl=root.querySelector('#hintsLeft');
  root.querySelectorAll('.exq-hint').forEach(hb=>hb.addEventListener('click',()=>{
    const q=hb.closest('.exq'); if(q.dataset.hinted || hintsLeft<=0) return;
    const ans=norm(q.dataset.answer);
    const wrongs=[...q.querySelectorAll('.opt')].filter(o=>norm(o.dataset.v)!==ans && !o.classList.contains('opt-out') && !o.classList.contains('sel'));
    if(!wrongs.length) return;
    const victim=wrongs[Math.floor(Math.random()*wrongs.length)];
    victim.classList.add('opt-out'); victim.disabled=true;
    q.dataset.hinted='1'; hb.disabled=true; hb.classList.add('used'); hb.textContent='💡 '+T('eng.hintOpened','Открыто');
    hintsLeft--; if(hintsLeftEl) hintsLeftEl.textContent=hintsLeft;
    if(hintsLeft<=0) root.querySelectorAll('.exq-hint:not(.used)').forEach(b=>b.disabled=true);
  }));
  btn.addEventListener('click',()=>gradeExam(root,w));
  const bk=root.querySelector('.ex-back'); if(bk) bk.addEventListener('click',backToMap);
}
function resetExam(root){
  root.querySelectorAll('.exq').forEach(q=>{ const wasWrong=q.classList.contains('q-wrong'); q.classList.remove('q-wrong','q-right');
    q.querySelectorAll('.opt').forEach(o=>{ o.classList.remove('wrong','correct'); if(wasWrong) o.classList.remove('sel'); });
    q.querySelectorAll('.exq-in').forEach(inp=>inp.classList.remove('ok','no')); q.querySelectorAll('.exq-hintbox').forEach(b=>b.remove()); }); // un-highlight; empty the wrong ones so they get re-chosen
  const res=root.querySelector('.exresult'); res.className='exresult'; res.innerHTML='';
  root.querySelector('.exam-check').textContent=T('eng.checkExamBtn','Проверить экзамен ✓');
  const firstEmpty=[...root.querySelectorAll('.exq')].find(q=>!q.querySelector('.opt.sel'));
  (firstEmpty||root.querySelector('.exam')).scrollIntoView({behavior:'smooth',block:'center'});
}
function gradeExam(root,w){
  const ex=EXAMS[w], qs=[...root.querySelectorAll('.exq')];
  let earned=0, unanswered=0, rights=0; const total=qs.length;
  qs.forEach(qEl=>{
    const item=ex.q[+qEl.dataset.i], t=item.type||'choice';
    qEl.classList.remove('q-wrong','q-right'); qEl.querySelectorAll('.opt').forEach(x=>x.classList.remove('wrong','correct')); qEl.querySelectorAll('.exq-in').forEach(x=>x.classList.remove('ok','no')); qEl.querySelectorAll('.exq-hintbox').forEach(b=>b.remove());
    let score=0, answered=true;
    if(t==='choice'){ const sel=qEl.querySelector('.opt.sel'); if(!sel){ answered=false; } else { score=norm(sel.dataset.v)===norm(item.answer)?1:0; sel.classList.add(score?'correct':'wrong'); } }
    else if(t==='gap'||t==='trRE'||t==='trER'){ const inp=qEl.querySelector('.exq-in'); if(!exNorm(inp.value)){ answered=false; } else { score=matchText(inp.value,item.accept,item.model); inp.classList.add(score>=0.6?'ok':'no'); } }
    else if(t==='order'){ const made=[...qEl.querySelectorAll('.exq-atile')].map(a=>a.textContent).join(' '); if(!exNorm(made)){ answered=false; } else { const nv=exNorm(made); score=(nv===exNorm(item.answer)||(item.accept&&item.accept.some(a=>nv===exNorm(a))))?1:0; } }
    else if(t==='match'){ const done=qEl.querySelectorAll('.exq-mslot.done').length; if(!done){ answered=false; } else { score=done/item.pairs.length; } }
    else if(t==='describe'){ const ta=qEl.querySelector('.exq-ta'); if(!exNorm(ta.value).split(' ').filter(Boolean).length){ answered=false; } else { score=scoreOpen(ta.value,item); } }
    if(!answered){ unanswered++; qEl.classList.add('q-wrong'); }
    else { earned+=score; if(score>=0.6){ rights++; qEl.classList.add('q-right'); } else qEl.classList.add('q-wrong'); }
  });
  const pct=Math.round(earned/total*100), res=root.querySelector('.exresult');
  const passed = unanswered===0 && pct>=PASS_PCT;
  if(passed){
    passExam(w); resetAttempts(w);
    res.className='exresult show pass';
    res.innerHTML = ex.final
      ? `<div class="ex-seal">🏆</div><h3>${pct}${T('eng.finalPassHead1','% — ты прошёл(ла) весь ')}${LEVEL.code}!</h3><p>${LEVEL.finalNote}</p><button class="btn ex-done">${T('eng.backToProgram','← К программе курса')}</button>`
      : `<div class="ex-seal">🔓</div><h3>${T('eng.passedPct1','Сдано на ')}${pct}${T('eng.passedPct2','%! 🎉')}</h3><p>${T('eng.checkpointPassed1','Чекпоинт взят — <b>')}${T('eng.week','Неделя')} ${String(w+1).padStart(2,'0')}${T('eng.checkpointPassed2','</b> открыта. Ты на огне 🔥 Погнали дальше!')}</p><button class="btn ex-done">${T('eng.openNextWeek','Открыть следующую неделю →')}</button>`;
    celebrate(ex.final?'trophy':'fireworks');
    rewardPop(T('eng.rewardPassedPrefix','✅ Сдано на ')+pct+'%!');
  } else {
    let att=getAttempts(w); if(unanswered===0){ att=bumpAttempt(w); }   // only complete attempts count
    const showHints = att>=HINT_AFTER;
    if(showHints) revealHints(root,ex);
    res.className='exresult show fail';
    const wrong=total-rights-unanswered;
    const head = pct+(pct>=60?T('eng.failHead60','% — почти у цели! 🙌'):(pct>=35?T('eng.failHead35','% — уже неплохо! 💪'):T('eng.failHead0','% — хорошее начало 🌱')));
    const hintNote = showHints ? `<p style="margin-top:6px">${T('eng.hintNoteText','💡 Я подсветила <b>подсказки</b> на трудных местах — это правила-наводки, не готовые ответы. Посмотри и попробуй снова. Устала? Загляни завтра — со свежей головой зайдёт легче 💛')}</p>` : '';
    res.innerHTML=`<h3>${head}</h3><p>${T('eng.passRequirement1','Для зачёта нужно ')}<b>${PASS_PCT}${T('eng.passRequirement2','%')}</b>${T('eng.passRequirement3','. ')}${unanswered?(T('eng.unansweredNote1','Сначала ответь на все вопросы (осталось: ')+'<b>'+unanswered+'</b>'+T('eng.unansweredNote2','). ')):''}${wrong?(T('eng.wrongNote1','Красным помечено, где не так — поправить осталось ')+'<b>'+wrong+'</b>'+T('eng.wrongNote2','. ')):''}${T('eng.noStressNote','Без стресса: пробуй сколько нужно, я рядом 💛')}</p>${hintNote}<button class="btn ghost ex-retry">🔄 ${T('eng.chooseAgainBtn','Выбрать заново')}</button>`;
  }
  const done=res.querySelector('.ex-done'); if(done) done.addEventListener('click',()=>{ renderMap(); backToMap(); });
  const rb=res.querySelector('.ex-retry'); if(rb) rb.addEventListener('click',()=>resetExam(root));
  root.querySelector('.exam-check').textContent = passed ? T('eng.passedBtn','Сдано ✓') : T('eng.checkAgainBtn','Проверить ещё раз');
  res.scrollIntoView({behavior:'smooth',block:'center'});
}
/* after HINT_AFTER complete fails: light a rule-hint (NOT the answer) under each wrong item */
function revealHints(root,ex){
  root.querySelectorAll('.exq.q-wrong').forEach(qEl=>{
    if(qEl.querySelector('.exq-hintbox')) return;
    const item=ex.q[+qEl.dataset.i];
    const txt=(item&&item.hint)||T('eng.hintFallback','Загляни в правило этой недели выше — ответ где-то рядом.');
    const box=document.createElement('div'); box.className='exq-hintbox';
    box.innerHTML='💡 <b>'+T('eng.hintColonLabel','Подсказка:')+'</b> '+txt;
    qEl.appendChild(box);
  });
}
/* ---- mixed-exam widget wiring + tolerant text grading ---- */
function wireExqOrder(qEl,item,onChange){
  const line=qEl.querySelector('.exq-aline'), box=qEl.querySelector('.exq-tiles'); let chosen=[];
  const sync=()=>{ line.classList.toggle('empty',chosen.length===0); if(onChange)onChange(); };
  shuffle(item.answer.split(' ')).forEach(word=>{ const t=document.createElement('button'); t.type='button'; t.className='exq-tile'; t.textContent=word;
    t.addEventListener('click',()=>{ t.classList.add('used');
      const a=document.createElement('button'); a.type='button'; a.className='exq-atile'; a.textContent=word;
      a.addEventListener('click',()=>{ t.classList.remove('used'); a.remove(); chosen=chosen.filter(c=>c.tile!==t); sync(); });
      line.appendChild(a); chosen.push({tile:t}); sync(); });
    box.appendChild(t); });
}
function wireExqMatch(qEl,item,onChange){
  const pool=qEl.querySelector('.exq-mpool'), slots=qEl.querySelector('.exq-mslots'); let sel=null,dragEl=null;
  shuffle(item.pairs.slice()).forEach(p=>{ const tl=document.createElement('div'); tl.className='exq-mtile'; tl.textContent=p[0]; tl.draggable=true; tl.dataset.w=p[1];
    tl.addEventListener('click',()=>{ if(tl.classList.contains('placed'))return; if(sel===tl){sel=null;tl.classList.remove('sel');return;} if(sel)sel.classList.remove('sel'); sel=tl; tl.classList.add('sel'); });
    tl.addEventListener('dragstart',()=>{dragEl=tl;}); pool.appendChild(tl); });
  shuffle(item.pairs.slice()).forEach(p=>{ const s=document.createElement('div'); s.className='exq-mslot'; s.dataset.w=p[1]; s.innerHTML='<span class="mw">'+p[1]+'</span><span class="mdrop">·</span>';
    const place=tile=>{ if(!tile||s.classList.contains('done'))return;
      if(tile.dataset.w===s.dataset.w){ s.classList.add('done'); s.querySelector('.mdrop').textContent=tile.textContent; tile.classList.add('placed'); tile.classList.remove('sel'); if(sel===tile)sel=null; if(onChange)onChange(); }
      else { s.classList.add('shake'); setTimeout(()=>s.classList.remove('shake'),400); } };
    s.addEventListener('click',()=>{ if(sel) place(sel); });
    s.addEventListener('dragover',e=>{ if(!s.classList.contains('done')){e.preventDefault();s.classList.add('over');} });
    s.addEventListener('dragleave',()=>s.classList.remove('over'));
    s.addEventListener('drop',e=>{e.preventDefault();s.classList.remove('over');place(dragEl);dragEl=null;});
    slots.appendChild(s); });
}
function exNorm(s){ return (s||'').toLowerCase().replace(/[.,!?;:'"’`«»()]/g,'').replace(/ё/g,'е').replace(/\s+/g,' ').trim(); }
const EXAM_STOP=new Set('a an the to of is are am be do does did and or i you he she it we they this that my your his her в на и не я ты он она оно мы вы они что это так как бы у меня его её'.split(' '));
function exTokens(s){ return exNorm(s).split(' ').filter(w=>w.length>1 && !EXAM_STOP.has(w)); }
function exOverlap(ans,model){ const a=exTokens(ans), m=exTokens(model); if(!m.length||!a.length)return 0; const set=new Set(a); let hit=0; m.forEach(w=>{ if(set.has(w))hit++; }); return hit/m.length; }
function matchText(ans,accept,model){ const nv=exNorm(ans); if(!nv)return 0;
  if((accept||[]).some(a=>{ const na=exNorm(a); return na && (nv===na || nv.startsWith(na+' ') || na.startsWith(nv)&&na.length>=6&&nv.length>=na.length-2); })) return 1;
  const ov=exOverlap(ans,model||''); if(ov>=0.7)return 0.85; if(ov>=0.5)return 0.6; if(ov>=0.34)return 0.34; return 0; }
function scoreOpen(ans,item){ const n=exNorm(ans).split(' ').filter(Boolean).length; if(!n)return 0;
  const kw=(item.keywords||[]).filter(k=>exNorm(ans).includes(exNorm(k))).length;
  if(n>=(item.minWords||0)) return kw>0?1:0.75;
  return Math.min(0.6, n/(item.minWords||1)*0.6); }
function dayName(n){ for(const w of COURSE) for(const d of w.days) if(d.n===n) return d.t; return ''; }

/* ===== open / progress / rewards ===== */
const prog={done:new Set(),total:0};
let currentDay=null, xp=0, streak=0, best=0, mapScroll=0;
const PRAISE=[T('eng.praise1','Молодец! 🌟'),T('eng.praise2','Так держать! 💪'),T('eng.praise3','Отлично! ✨'),T('eng.praise4','Супер! 🎉'),T('eng.praise5','Красота! 👏'),T('eng.praise6','Умница! 💛'),T('eng.praise7','Браво! 🙌')];
function openDay(n){
  if(window.PAYWALL&&PAYWALL.enabled&&!licenseOk()&&n>PAYWALL.freeDays){ goBuy(); return; }
  const d=DAYS[n]; if(!d) return; mapScroll=window.pageYOffset||0; currentDay=d;
  try{ const p=loadProg(); p.last={n:n,t:d.t}; saveProg(p); }catch(e){} // где остановились — для карточек «продолжить» на главной
  const dp0=document.querySelector('.dayprog'); if(dp0) dp0.style.display='';
  $('#dayContent').innerHTML=renderDay(d);
  $('#viewMap').classList.remove('on'); $('#viewDay').classList.add('on');
  $('#toMap').style.display='inline'; $('#finish').classList.remove('show');
  $('#progLab').textContent=T('eng.progLab1','День ')+n+T('eng.progLab2',' · прогресс');
  const nxt=dayName(n+1);
  const WINS=[
    T('eng.win1a','🎉 День ')+n+T('eng.win1b',' пройден!'),
    T('eng.win2a','🌟 Готово! День ')+n+T('eng.win2b',' за плечами'),
    T('eng.win3a','🔥 День ')+n+T('eng.win3b',' — есть!'),
    T('eng.win4a','💛 Ты сделал(а) День ')+n+T('eng.win4b','!'),
    T('eng.win5a','✨ День ')+n+T('eng.win5b',' покорён!'),
    T('eng.win6a','🏆 День ')+n+T('eng.win6b',' завершён!'),
    T('eng.win7a','🎊 Бум! День ')+n+T('eng.win7b',' пройден!'),
    T('eng.win8a','👏 День ')+n+T('eng.win8b',' — отлично!')
  ];
  $('#finishH2').textContent=WINS[(n-1)%WINS.length];
  $('#finishP').textContent = (n<30&&nxt) ? (T('eng.finishNext1','Поздравляю — ещё один шаг сделан. Завтра День ')+(n+1)+T('eng.finishNext2',' — «')+nxt+T('eng.finishNext3','». Я снова рядом.')) : T('eng.finishDone1','Поздравляю — ты прошёл(ла) весь уровень ')+LEVEL.code+T('eng.finishDone2','! Это огромная работа. 🏆');
  window.scrollTo(0,0);
  xp=0; streak=0; best=0; updateHud();
  prog.done.clear(); prog.total=$('#dayContent').querySelectorAll('[data-cp]').length; updateProg();
  buildDialogue(); buildVocab(); wireDay($('#dayContent')); wireScene($('#dayContent')); wireDrag($('#dayContent')); wireReading($('#dayContent')); wireWrite($('#dayContent')); wireFeedback($('#dayContent'));
  restoreDayState(n); // bring back the in-day bookmark (progress bar, xp, streak)
}
function backToMap(){ if(window.speechSynthesis) speechSynthesis.cancel(); renderMap(); $('#viewDay').classList.remove('on'); $('#viewMap').classList.add('on'); $('#toMap').style.display='none';
  window.scrollTo(0,mapScroll); requestAnimationFrame(()=>window.scrollTo(0,mapScroll)); } // return to exactly where the map was left
function tick(el,correct){ if(correct===undefined) correct=true;
  if(el&&!el.dataset.cpDone){ el.dataset.cpDone='1'; prog.done.add(el); updateProg(); }
  if(!correct){ streak=0; updateHud(); saveDayState(); return; }
  let pts=10,bonus=0; xp+=pts; streak++; if(streak>best)best=streak;
  let msg=PRAISE[Math.floor(Math.random()*PRAISE.length)];
  if(streak%3===0){ bonus=5; xp+=bonus; msg=T('eng.streakBonus1','🔥 Серия из ')+streak+T('eng.streakBonus2','! +')+bonus+T('eng.streakBonus3',' бонус'); }
  updateHud(); rewardPop('+'+(pts+bonus)+' XP · '+msg); saveDayState();
}
function updateHud(){ const x=$('#xpNum'); if(x)x.textContent=xp; const s=$('#streakNum'); if(s)s.textContent=streak; const sb=$('#streakBox'); if(sb)sb.style.opacity=streak>0?'1':'.35'; }
let rewT; function rewardPop(t){ const p=$('#rewardPop'); if(!p)return; p.textContent=t; p.classList.remove('show'); void p.offsetWidth; p.classList.add('show'); clearTimeout(rewT); rewT=setTimeout(()=>p.classList.remove('show'),1500); }
/* ===== celebrations — a different one every lesson ===== */
const CELEBR=['confetti','fireworks','balloons','emoji','trophy','stars','hearts','rays'];
function celebrate(kind){
  let ov=document.getElementById('celebrate'); if(ov) ov.remove();
  ov=document.createElement('div'); ov.id='celebrate'; ov.className='celebrate'; document.body.appendChild(ov);
  const R=(a,b)=>a+Math.random()*(b-a);
  const COLORS=['#ffd24a','#ff6cf2','#54ecff','#5bffb0','#ff7a96','#ad8cff','#ffb14a'];
  const add=(html,cls,style)=>{ const s=document.createElement('span'); s.className=cls; if(html)s.innerHTML=html; for(const k in style){ if(k.indexOf('--')===0) s.style.setProperty(k,style[k]); else s.style[k]=style[k]; } ov.appendChild(s); return s; };
  const FX={
    confetti(){ for(let i=0;i<90;i++) add('','c-piece',{left:R(0,100)+'vw',top:'-12px',background:COLORS[i%COLORS.length],'--dx':R(-30,30)+'vw','--rot':R(180,900)+'deg',animationDelay:R(0,.5)+'s',animationDuration:R(1.9,3.1)+'s',width:R(7,12)+'px',height:R(10,16)+'px'}); },
    fireworks(){ for(let b=0;b<5;b++){ const cx=R(15,85),cy=R(14,52),col=COLORS[b%COLORS.length]; for(let i=0;i<26;i++){ const a=(Math.PI*2*i)/26,d=R(8,16); add('','f-spark',{left:cx+'vw',top:cy+'vh',background:col,'--fx':Math.cos(a)*d+'vw','--fy':Math.sin(a)*d+'vh',animationDelay:(b*.35)+'s'}); } } },
    balloons(){ for(let i=0;i<16;i++) add('🎈','c-emoji',{left:R(2,94)+'vw',bottom:'-60px',fontSize:R(28,46)+'px',animationDelay:R(0,1)+'s',animationDuration:R(3,5)+'s',filter:'hue-rotate('+R(0,360)+'deg)'}); },
    emoji(){ const E=['🎉','🌟','💛','✨','🏆','🎊']; for(let i=0;i<58;i++) add(E[i%E.length],'c-emoji fall',{left:R(0,98)+'vw',top:'-44px',fontSize:R(20,38)+'px','--dx':R(-12,12)+'vw',animationDelay:R(0,.8)+'s',animationDuration:R(2,3.4)+'s'}); },
    trophy(){ add('🏆','c-trophy',{}); for(let i=0;i<22;i++){ const a=(Math.PI*2*i)/22; add('✨','c-ray',{'--rx':Math.cos(a)*40+'vmin','--ry':Math.sin(a)*40+'vmin',animationDelay:R(0,.4)+'s',fontSize:R(16,30)+'px'}); } FX.confetti(); },
    stars(){ for(let i=0;i<38;i++) add('⭐','c-emoji shoot',{left:R(-10,40)+'vw',top:R(2,78)+'vh',fontSize:R(16,30)+'px','--sx':R(40,95)+'vw',animationDelay:R(0,.8)+'s'}); },
    hearts(){ const E=['💛','💖','💗','✨']; for(let i=0;i<28;i++) add(E[i%E.length],'c-emoji',{left:R(2,95)+'vw',bottom:'-50px',fontSize:R(20,40)+'px',animationDelay:R(0,1.2)+'s',animationDuration:R(3,4.6)+'s'}); },
    rays(){ add('','c-conic',{}); add('🎉','c-trophy',{}); for(let i=0;i<54;i++) add('','c-piece',{left:R(0,100)+'vw',top:'-12px',background:COLORS[i%COLORS.length],'--dx':R(-20,20)+'vw','--rot':R(180,720)+'deg',animationDelay:R(0,.4)+'s',animationDuration:R(1.6,2.6)+'s'}); }
  };
  (FX[kind]||FX.confetti)();
  setTimeout(()=>{ if(ov&&ov.parentNode) ov.remove(); }, 3800);
}
function celebrateForDay(){ const n=currentDay?currentDay.day:1; const k=(n>=30)?'trophy':CELEBR[(n-1)%CELEBR.length]; celebrate(k); }

function updateProg(){ const p=prog.total?Math.round(prog.done.size/prog.total*100):0; $('#dFill').style.width=p+'%'; $('#dPct').textContent=p+'%';
  if(p===100 && !$('#finish').classList.contains('show')){ $('#finish').classList.add('show'); if(currentDay) markDayDone(currentDay.day); celebrateForDay(); } }
function fb(el,good,msg){ el.innerHTML=msg; el.className='fb show '+(good?'good':'bad'); }

/* ===== dialogue ===== */
function wrapWords(line){ let en=line.en; (line.words||[]).forEach(p=>{ en=en.replace(p[0],`<span class="gw" data-tr="${escA(p[1])}" data-say="${escA(strip(p[0]))}">${p[0]}</span>`); }); return en; }
function buildDialogue(){ const box=$('#dlg'); if(!box||!currentDay.dialogue) return; const data=currentDay.dialogue.lines;
  box.innerHTML=data.map((l,i)=>`<div class="dline ${l.side}" data-i="${i}"><div class="who">${l.who}</div><div class="d-body"><div class="d-en">${wrapWords(l)}</div><div class="d-ru">${l.ru}</div></div><div class="d-ctrl"><button class="play d-say">🔊</button><button class="play slow d-slow">🐢</button></div></div>`).join('');
  box.querySelectorAll('.dline').forEach(line=>{ const i=+line.dataset.i;
    line.addEventListener('click',()=>line.classList.toggle('open'));
    line.querySelector('.d-say').addEventListener('click',e=>{e.stopPropagation();speak(data[i].en,{rate:.5});});
    line.querySelector('.d-slow').addEventListener('click',e=>{e.stopPropagation();speak(data[i].en,{rate:.25});});
    line.querySelectorAll('.gw').forEach(g=>g.addEventListener('click',e=>{e.stopPropagation();showTip(g);speak(g.dataset.say,{rate:.85});}));
  });
}
let tipT; function showTip(el){ const tip=$('#tip'); const r=el.getBoundingClientRect(); tip.textContent=el.dataset.tr; tip.style.left=(r.left+r.width/2)+'px'; tip.style.top=r.top+'px'; tip.classList.add('show'); clearTimeout(tipT); tipT=setTimeout(()=>tip.classList.remove('show'),1700); }

/* ===== vocab ===== */
function buildVocab(){ const box=$('#vocab'); if(!box||!currentDay.vocab) return; const items=currentDay.vocab.items;
  box.innerHTML=items.map((v,i)=>`<div class="vcard" data-i="${i}"><div class="inner"><div class="vface front"><div class="v-en">${v.en}</div><span class="vhint">${T('eng.translationHint','перевод →')}</span><button class="vspk">🔊</button></div><div class="vface back"><div class="v-ru">${v.ru}</div><div class="v-ex">${v.ex||''}</div></div></div></div>`).join('');
  box.querySelectorAll('.vcard').forEach(card=>{ const v=items[+card.dataset.i];
    card.addEventListener('click',()=>card.classList.toggle('flip'));
    card.querySelector('.vspk').addEventListener('click',e=>{e.stopPropagation();speak(strip(v.en).replace(/[…’']/g,''),{rate:.9});});
  });
}

/* ===== scene ===== */
function toonHTML(c){ return '<div class="toon '+c+'"><div class="sbub"></div><div class="figure"><div class="arm l"></div><div class="arm r"></div><div class="head"><i class="eye l"></i><i class="eye r"></i><i class="mouth"></i></div><div class="body"></div><div class="leg l"></div><div class="leg r"></div></div></div>'; }
function wireScene(root){ const w=root.querySelector('.w-scene'); if(!w||!currentDay.scene) return; const SCENE=currentDay.scene.lines;
  const host=w.querySelector('.scene'); const btn=w.querySelector('.scene-play');
  host.innerHTML='<div class="scene-stage"><div class="sky-sun"></div><div class="cloud c1"></div><div class="cloud c2"></div><div class="ground-path"></div>'+toonHTML('a')+toonHTML('b')+'</div>';
  const ss=host.querySelector('.scene-stage'); const tA=ss.querySelector('.toon.a'),tB=ss.querySelector('.toon.b'); const bA=tA.querySelector('.sbub'),bB=tB.querySelector('.sbub'); let playing=false, sgen=0;
  function say(i){ if(!genActive(sgen)){ playing=false; btn.disabled=false; btn.textContent='▶ '+T('eng.watchAgain','Смотреть ещё раз'); return; }
    if(i>=SCENE.length){ playing=false; btn.disabled=false; btn.textContent='▶ '+T('eng.watchAgain','Смотреть ещё раз'); tA.classList.add('hi'); tB.classList.add('hi'); setTimeout(()=>{tA.classList.remove('hi');tB.classList.remove('hi');},600); tick(w,true); return; }
    const l=SCENE[i],isA=l.who==='A',bub=isA?bA:bB,other=isA?bB:bA; other.classList.remove('show'); bub.innerHTML='<span class="sb-en">'+l.en+'</span><span class="sb-ru">'+l.ru+'</span>'; bub.classList.add('show'); speakOne(l.en,{rate:1,after:()=>{ if(genActive(sgen)) setTimeout(()=>say(i+1),520); }}); }
  btn.addEventListener('click',()=>{ if(playing)return; playing=true; sgen=newSpeakGen();
    [tA,tB].forEach(t=>{t.style.transition='none';t.classList.remove('in');}); ss.classList.remove('walking'); bA.classList.remove('show'); bB.classList.remove('show'); void ss.offsetWidth; [tA,tB].forEach(t=>{t.style.transition='';});
    btn.disabled=true; btn.textContent=T('eng.scenePlaying','Идёт сценка…'); ss.classList.add('walking'); tA.classList.add('in'); tB.classList.add('in'); setTimeout(()=>{ ss.classList.remove('walking'); say(0); },1900);
  });
}

/* ===== drag & drop ===== */
function wireDrag(root){ const w=root.querySelector('.w-drag'); if(!w||!currentDay.drag) return; const PAIRS=currentDay.drag.pairs;
  const box=w.querySelector('.dd'); const f=w.querySelector('.fb');
  const items=shuffle(PAIRS.map(p=>p[0])); const slots=shuffle(PAIRS.slice());
  box.innerHTML='<div class="dd-pool">'+items.map(en=>'<div class="dd-item" draggable="true" data-en="'+escA(en)+'">'+en+'</div>').join('')+'</div><div class="dd-slots">'+slots.map(p=>'<div class="dd-slot" data-en="'+escA(p[0])+'"><span class="dd-ru">'+p[1]+'</span><span class="dd-drop">'+T('eng.dropHere','сюда')+'</span></div>').join('')+'</div>';
  let matched=0,dragEl=null,selEl=null;
  function tryPlace(slot,item){ if(slot.classList.contains('done')||!item||item.classList.contains('placed'))return;
    if(item.dataset.en===slot.dataset.en){ slot.classList.add('done'); slot.querySelector('.dd-drop').textContent='✓ '+item.dataset.en; item.classList.add('placed'); item.classList.remove('sel'); if(selEl===item)selEl=null; item.setAttribute('draggable','false'); matched++;
      if(matched===PAIRS.length){ fb(f,true,T('eng.dragAllMatched','<b>Все пары собраны!</b> Отличная память. 🧠')); tick(w,true); } else tick(null,true);
    } else { slot.classList.add('shake'); setTimeout(()=>slot.classList.remove('shake'),420); fb(f,false,T('eng.dragWrongPair','<b>Не та пара.</b> Попробуй другое слово — промах не страшен.')); } }
  box.querySelectorAll('.dd-item').forEach(it=>{ it.addEventListener('dragstart',e=>{dragEl=it;it.classList.add('dragging');if(e.dataTransfer)e.dataTransfer.setData('text',it.dataset.en);}); it.addEventListener('dragend',()=>it.classList.remove('dragging'));
    it.addEventListener('click',()=>{ if(it.classList.contains('placed'))return; if(selEl===it){ selEl=null; it.classList.remove('sel'); return; } if(selEl)selEl.classList.remove('sel'); selEl=it; it.classList.add('sel'); }); });
  box.querySelectorAll('.dd-slot').forEach(slot=>{ slot.addEventListener('dragover',e=>{if(slot.classList.contains('done'))return;e.preventDefault();slot.classList.add('over');}); slot.addEventListener('dragleave',()=>slot.classList.remove('over'));
    slot.addEventListener('click',()=>{ if(selEl) tryPlace(slot,selEl); });
    slot.addEventListener('drop',e=>{ e.preventDefault(); slot.classList.remove('over'); tryPlace(slot,dragEl); dragEl=null; });
  });
}

/* ===== wiring of choice/build/type/speak + audio ===== */
function wireDay(root){
  root.querySelectorAll('.play[data-say]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();speak(b.dataset.say,{rate:.9});}));
  root.querySelectorAll('.listen[data-ru]').forEach(b=>b.addEventListener('click',()=>speak(b.dataset.ru,{lang:'ru-RU',rate:.98})));
  const dp=root.querySelector('.dlg-play'),ds=root.querySelector('.dlg-slow');
  function playAll(rate){ if(!currentDay.dialogue)return; const lines=root.querySelectorAll('.dline'); playSeq(currentDay.dialogue.lines.map(l=>l.en),function(idx){lines.forEach(function(x){x.classList.remove('open');});if(idx>=0&&lines[idx])lines[idx].classList.add('open');},rate); }
  if(dp)dp.addEventListener('click',()=>playAll(.5)); if(ds)ds.addEventListener('click',()=>playAll(.25));
  root.querySelectorAll('.w-choice').forEach(w=>{ const f=w.querySelector('.fb'); const ex=w.dataset.explain||''; let tries=0;
    const NUDGE=[T('eng.nudge1','Не то — но не страшно 🙂 Подумай ещё разок и выбери другой вариант.'),T('eng.nudge2','Почти! Загляни в подсказку 💡 или в правило выше — и пробуй снова.'),T('eng.nudge3','Ты на верном пути 💪 Вариантов всё меньше — выбери другой.'),T('eng.nudge4','Не сдавайся ✨ Ещё попытка — и получится!')];
    w.querySelectorAll('.opt').forEach(opt=>opt.addEventListener('click',()=>{ if(w.dataset.done||opt.classList.contains('tried'))return;
      const ok=opt.hasAttribute('data-ok');
      if(ok){ w.querySelectorAll('.opt').forEach(o=>o.classList.add('locked')); opt.classList.remove('locked'); opt.classList.add('correct'); fb(f,true,'<b>'+T('eng.correctLabel','Верно!')+'</b>'+(ex?' '+ex:' '+T('eng.correctFallback','Так и есть.'))); w.dataset.done='1'; tick(w,true); return; }
      opt.classList.add('wrong','tried');                    // mark this wrong, but NEVER reveal the answer — only nudge
      fb(f,false,NUDGE[Math.min(tries,NUDGE.length-1)]);
      tries++;
    }));
  });
  root.querySelectorAll('.w-build').forEach(w=>{ const answer=w.dataset.answer.split(' '); const slot=w.querySelector('.build-answer'),tilesBox=w.querySelector('.build-tiles'),f=w.querySelector('.fb'); let chosen=[];
    shuffle(answer).forEach(word=>{ const t=document.createElement('button'); t.className='tile'; t.textContent=word;
      t.addEventListener('click',()=>{ if(w.dataset.done)return; t.classList.add('used'); chosen.push({word,tile:t});
        const a=document.createElement('button'); a.className='atile'; a.textContent=word; a.addEventListener('click',()=>{ if(w.dataset.done)return; t.classList.remove('used'); a.remove(); chosen=chosen.filter(c=>c.tile!==t); check(); }); slot.appendChild(a); check(); });
      tilesBox.appendChild(t); });
    function check(){ const made=chosen.map(c=>c.word).join(' '); if(chosen.length<answer.length){ slot.classList.remove('ok','no'); f.className='fb'; return; }
      if(made===w.dataset.answer){ slot.classList.add('ok'); slot.classList.remove('no'); fb(f,true,T('eng.buildCorrect','<b>Отлично!</b> Фраза собрана верно.')); w.dataset.done='1'; tick(w,true); }
      else{ slot.classList.add('no'); fb(f,false,T('eng.buildWrong','<b>Пока не так.</b> Нажми на слова в строке, чтобы убрать, и попробуй порядок ещё раз.')); } }
  });
  root.querySelectorAll('.w-type').forEach(w=>{ const input=w.querySelector('input'),f=w.querySelector('.fb'),accept=w.dataset.accept.split('|');
    const go=()=>{ if(w.dataset.done)return; const v=norm(input.value); const ok=v.length>1&&accept.some(a=>{const na=norm(a);return na&&(v===na||v.startsWith(na+' '));});
      input.classList.add(ok?'ok':'no'); input.classList.remove(ok?'no':'ok');
      if(ok){ fb(f,true,T('eng.typeCorrect1','<b>Супер!</b> Звучит ')+LANG_PO+T('eng.typeCorrect2','. 👏')); w.dataset.done='1'; tick(w,true); } else fb(f,false,T('eng.typeWrong','<b>Чуть-чуть не так.</b> Загляни в правило выше и попробуй ещё раз.')); };
    w.querySelector('.check').addEventListener('click',go); input.addEventListener('keydown',e=>{if(e.key==='Enter')go();});
  });
  root.querySelectorAll('.w-speak').forEach(w=>{ const mic=w.querySelector('.mic'),self=w.querySelector('.self'),f=w.querySelector('.fb'),want=(w.dataset.want||'').toLowerCase(); const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    mic.addEventListener('click',()=>{ if(w.dataset.done)return; if(!SR){ fb(f,true,T('eng.speechUnavailable','Распознавание недоступно в этом браузере — просто скажи фразу вслух и нажми «Я сказал(а)».')); return; }
      const r=new SR(); r.lang=SPEECH_LANG; r.interimResults=false; mic.classList.add('rec'); fb(f,true,T('eng.listeningPrompt','Слушаю… говори чётко и не спеша.')); r.start();
      r.onresult=ev=>{ const said=ev.results[0][0].transcript.toLowerCase(); mic.classList.remove('rec'); if(!want||said.includes(want)||said.length>2){ fb(f,true,'<b>'+T('eng.heardLabel','Услышала:')+'</b> «'+said+T('eng.heardGoodSuffix','». Отлично сказано! 🎤')); w.dataset.done='1'; tick(w,true); } else fb(f,false,'<b>'+T('eng.heardLabel','Услышала:')+'</b> «'+said+T('eng.heardTryAgainSuffix','». Почти — попробуй ещё раз, чуть чётче.')); };
      r.onerror=()=>{ mic.classList.remove('rec'); fb(f,true,T('eng.noSoundCaught','Не поймала звук — скажи вслух и нажми «Я сказал(а)».')); };
    });
    self.addEventListener('click',()=>{ if(w.dataset.done)return; fb(f,true,T('eng.speakSelfDone','<b>Засчитано!</b> Проговаривай вслух почаще — так речь закрепляется быстрее всего.')); w.dataset.done='1'; tick(w,true); });
  });
}

/* ===== reading: listen + read-aloud (record → transcribe → check) ===== */
function wireReading(root){ const w=root.querySelector('.w-reading'); if(!w||!currentDay.reading) return; const R=currentDay.reading;
  const sents=w.querySelectorAll('.ws');
  function playAll(rate){ playSeq(R.sentences,function(idx){ sents.forEach(function(s){s.classList.remove('cur');}); if(idx>=0&&sents[idx])sents[idx].classList.add('cur'); },rate); }
  w.querySelector('.r-play').addEventListener('click',()=>playAll(.5));
  w.querySelector('.r-slow').addEventListener('click',()=>playAll(.25));
  const trBtn=w.querySelector('.r-tr'),trBox=w.querySelector('.read-translation');
  trBtn.addEventListener('click',()=>{ const on=trBox.classList.toggle('show'); trBtn.textContent=on?T('eng.hideTranslation','Скрыть перевод'):T('eng.showTranslation','Показать перевод'); });
  const recBtn=w.querySelector('.r-rec'),status=w.querySelector('.rec-status'),acc=w.querySelector('.acc-meter'),myplay=w.querySelector('.r-myplay'),self=w.querySelector('.r-self');
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  let recog=null,mediaRec=null,chunks=[],myURL=null,recording=false,lastT='';
  function compare(transcript){ const said=(transcript||'').toLowerCase().replace(/[^a-z' ]/g,' ').split(/\s+/).filter(Boolean); const cnt={}; said.forEach(x=>cnt[x]=(cnt[x]||0)+1); let hit=0,total=0;
    w.querySelectorAll('.wm').forEach(span=>{ const word=span.dataset.w; if(!word)return; total++; if(cnt[word]>0){ span.classList.add('hit');span.classList.remove('miss');cnt[word]--;hit++; } else { span.classList.add('miss');span.classList.remove('hit'); } });
    const pct=total?Math.round(hit/total*100):0; acc.style.display='block'; acc.innerHTML=T('eng.readAccuracyPrefix','Прочитано правильно: ')+'<b>'+pct+'%</b> · '+(pct>=80?T('eng.readGood','Отлично! 🎉'):pct>=50?T('eng.readOk','Хорошо! Ещё разок — и идеально 💪'):T('eng.readTryAgain','Попробуй ещё раз, медленнее и чётче 🙂')); tick(w,true); }
  function stopRec(){ recording=false; recBtn.classList.remove('on'); recBtn.textContent='🎤 '+T('eng.readAloud','Прочитать вслух'); if(mediaRec&&mediaRec.state!=='inactive')mediaRec.stop(); if(recog){ try{recog.stop();}catch(e){} setTimeout(()=>compare(lastT),350); } }
  recBtn.addEventListener('click',async()=>{ if(recording){ stopRec(); return; } recording=true; recBtn.classList.add('on'); recBtn.textContent=T('eng.recordingStop','⏹ Стоп · идёт запись'); status.textContent=T('eng.listeningReadPrompt','Слушаю… читай текст вслух, не спеша.'); acc.style.display='none';
    try{ const stream=await navigator.mediaDevices.getUserMedia({audio:true}); chunks=[]; mediaRec=new MediaRecorder(stream); mediaRec.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);}; mediaRec.onstop=()=>{ try{myURL=URL.createObjectURL(new Blob(chunks,{type:(chunks[0]&&chunks[0].type)||'audio/webm'})); myplay.style.display='inline-flex';}catch(e){} stream.getTracks().forEach(t=>t.stop()); }; mediaRec.start(); }catch(e){ status.textContent=T('eng.noMicAccess','Нет доступа к микрофону — разреши его в браузере, или нажми «Прочитал(а) ✓».'); }
    if(SR){ recog=new SR(); recog.lang=SPEECH_LANG; recog.continuous=true; recog.interimResults=true; lastT=''; recog.onresult=ev=>{ let t=''; for(let i=0;i<ev.results.length;i++)t+=ev.results[i][0].transcript+' '; lastT=t; status.textContent=T('eng.hearingPrefix','Слышу: …')+t.trim().slice(-90); }; recog.onerror=()=>{}; try{recog.start();}catch(e){} }
    else if(!('MediaRecorder' in window)){ status.textContent=T('eng.noRecordingSupport','Этот браузер не поддерживает запись/распознавание. Открой в Chrome, или нажми «Прочитал(а) ✓».'); }
    else { status.textContent=T('eng.noSpeechRecognition','Распознавание текста недоступно в этом браузере (нужен Chrome). Голос запишется — а правильность оцени сам(а) и нажми «Прочитал(а) ✓».'); }
  });
  myplay.addEventListener('click',()=>{ if(myURL) new Audio(myURL).play(); });
  self.addEventListener('click',()=>{ if(recording)stopRec(); status.textContent=T('eng.readSelfDone','Засчитано! Перечитывай вслух почаще — это лучший способ заговорить. 👍'); tick(w,true); });
}

/* ===== per-lesson feedback (like / comment, saved locally) ===== */
function wireFeedback(root){ const w=root.querySelector('.fbk'); if(!w) return; const day=w.dataset.day; const KEY='langbook-feedback-day'+day;
  let saved={}; try{ saved=JSON.parse(localStorage.getItem(KEY))||{}; }catch(e){}
  const faces=w.querySelectorAll('.fbk-face'),comment=w.querySelector('.fbk-comment'),send=w.querySelector('.fbk-send'),thanks=w.querySelector('.fbk-thanks');
  let rating=saved.rating||null; if(saved.comment)comment.value=saved.comment;
  faces.forEach(f=>{ if(f.dataset.v===rating)f.classList.add('sel'); f.addEventListener('click',()=>{ rating=f.dataset.v; faces.forEach(x=>x.classList.toggle('sel',x===f)); }); });
  send.addEventListener('click',()=>{ try{ localStorage.setItem(KEY,JSON.stringify({rating:rating,comment:comment.value,day:day,t:Date.now()})); }catch(e){} thanks.style.display='block'; setTimeout(()=>{thanks.style.display='none';},2600); });
}

/* ===== free writing (mini-essay / picture description) ===== */
function wireWrite(root){ root.querySelectorAll('.w-write').forEach(w=>{
  const area=w.querySelector('.write-area'),f=w.querySelector('.fb'),exBox=w.querySelector('.write-example'),exBtn=w.querySelector('.write-ex'),doneBtn=w.querySelector('.write-done');
  if(exBtn)exBtn.addEventListener('click',()=>{ const on=exBox.classList.toggle('show'); exBtn.textContent=on?T('eng.hideExample','Скрыть пример'):T('eng.showExample','Показать пример'); });
  if(doneBtn)doneBtn.addEventListener('click',()=>{ if(w.dataset.done)return; const t=(area.value||'').trim();
    if(t.length<6){ fb(f,false,T('eng.writeMinWords','Напиши хотя бы пару слов своими руками — и нажми «Готово».')); return; }
    fb(f,true,T('eng.writeDoneFeedback','<b>Отлично!</b> Ты построил(а) фразы сам(а) — это лучший шаг к речи. Нажми «Показать пример», чтобы сравнить.')); w.dataset.done='1'; tick(w,true);
  });
}); }

document.getElementById('toMap').addEventListener('click',e=>{e.preventDefault();backToMap();});
document.getElementById('finishBack').addEventListener('click',backToMap);
document.getElementById('dpBack').addEventListener('click',backToMap);
renderMap();
(function(){ var qd=+(new URLSearchParams(location.search).get('day')||0); if(!qd||!DAYS[qd]) return; var wk=1; COURSE.forEach((w,i)=>{ if(w.days.some(d=>d.n===qd)) wk=i+1; }); if(weekUnlocked(wk)) openDay(qd); })(); // «Продолжить с Дня N» (respects week locks)
