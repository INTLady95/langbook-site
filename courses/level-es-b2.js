/* Spanish B2 — level config + 30-day plan (COURSE). EXAMS filled by next agent.
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'B2',
  course:'es-b2',
  pkey:'langbook-es-b2-progress',
  preview:false,
  finalNote:'Это твоя победа 💛 Полный уровень Español B2 — позади. Горжусь тобой!',
  speech:'es-ES',
  langPo:'по-испански',
  langNa:'испанский',
  langAdj:'испанское',
  phIn:'en español…'
};

const COURSE = [
  {wn:'01', wt:'Неделя 1 — Субхунтив взрослеет: перфект, имперфект, плюсквамперфект', days:[
    {n:1,t:'Проси, требуй, добивайся',p:'Verbos de influencia'},
    {n:2,t:'Надеюсь, ты уже доехал',p:'El pretérito perfecto de subjuntivo'},
    {n:3,t:'Как звучит «бы»',p:'El imperfecto de subjuntivo (formas)'},
    {n:4,t:'Хотел, чтобы ты пришёл',p:'El imperfecto de subjuntivo (usos)'},
    {n:5,t:'Жаль, что не случилось раньше',p:'El pluscuamperfecto de subjuntivo'},
    {n:6,t:'Хоть бы… как будто…',p:'Ojalá y como si'},
    {n:7,t:'🔄 Повторение №1',p:'Repaso 1'}
  ]},
  {wn:'02', wt:'Неделя 2 — Если бы: нереальные условия и гипотеза', days:[
    {n:8,t:'Наверное, уже ушёл',p:'El futuro compuesto'},
    {n:9,t:'Я бы так не сказал',p:'El condicional compuesto'},
    {n:10,t:'Если бы у меня было время',p:'Condicional irreal de presente'},
    {n:11,t:'Если бы я знал раньше',p:'Condicional irreal de pasado'},
    {n:12,t:'Если бы тогда — то сейчас',p:'Condicionales mixtas'},
    {n:13,t:'При условии, что… разве что…',p:'Otras conjunciones condicionales'},
    {n:14,t:'Повторение №2',p:'Repaso 2'}
  ]},
  {wn:'03', wt:'Неделя 3 — Субхунтив в тени главного: придаточные и косвенная речь', days:[
    {n:15,t:'Ищу того, кто бы…',p:'Relativas con subjuntivo'},
    {n:16,t:'Когда придёшь, позвони',p:'Conjunciones temporales'},
    {n:17,t:'Хотя и даже если',p:'Concesivas: aunque'},
    {n:18,t:'Чтобы никто не заметил',p:'Finales y sin que'},
    {n:19,t:'Он сказал, чтобы я пришёл',p:'El estilo indirecto en pasado'},
    {n:20,t:'Спросил, приду ли я',p:'Preguntas indirectas y verbos introductores'},
    {n:21,t:'Повторение №3',p:'Repaso 3: subjuntivo y estilo indirecto'}
  ]},
  {wn:'04', wt:'Неделя 4 — Пассив, оттенки ser/estar и искусство аргумента', days:[
    {n:22,t:'Было построено, продаётся, готово',p:'La voz pasiva y sus equivalentes'},
    {n:23,t:'Умный или готовый',p:'Ser y estar: adjetivos que cambian'},
    {n:24,t:'С одной стороны, с другой',p:'Conectores argumentativos'},
    {n:25,t:'Поэтому, так что, настолько что',p:'Causa, consecuencia y finalidad'},
    {n:26,t:'Уже год как…',p:'Perífrasis verbales avanzadas'},
    {n:27,t:'То, что важно',p:'El neutro «lo»'},
    {n:28,t:'Точное слово и регистр',p:'Léxico, registro y formación de palabras'},
    {n:29,t:'Всё вместе: аргумент, гипотеза, пересказ',p:'Argumentar, hipotetizar, referir'},
    {n:30,t:'Мой аргумент по-испански',p:'Mi opinión en español'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя B2 позади — и она была плотной. 25 заданий на всё, что мы собрали: глаголы влияния с que + субхунтив, перфект субхунтива (haya llegado), имперфект (hablara, tuviera) и плюсквамперфект (hubiera sabido), а ещё ojalá и como si. Не спеши, вспоминай правило и разбирай по косточкам. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Влияние: <b>pedir/exigir/aconsejar/prohibir que</b> + субхунтив · один субъект → инфинитив (quiero <b>descansar</b>)",
      "Перфект субхунтива: <b>haya/hayas/haya…</b> + participio — espero que <b>hayas llegado</b>",
      "Имперфект субхунтива: основа от ellos-прошедшего — hablaron → <b>hablara</b>; tuvieron → <b>tuviera</b>; <b>-ra = -se</b>",
      "Согласование: прошлое сверху → <b>imperfecto subj.</b> снизу (quería que <b>vinieras</b>)",
      "Плюсквамперфект субхунтива: <b>hubiera/hubiese</b> + participio — ojalá lo <b>hubiera sabido</b>",
      "<b>Ojalá</b>: возможное venga / несбыточное viniera · <b>como si</b> + прошлый субхунтив всегда"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Te pido que ___ más temprano. <i style='opacity:.6'>чтобы ты пришёл</i>",
        "opts": ["vengas", "vienes", "venir", "vendrás"],
        "answer": "vengas",
        "why": "Просьба к другому лицу: pedir que + субхунтив. «Я прошу — ты приходишь», два лица → vengas.",
        "hint": "После «прошу, чтобы ты…» с новым лицом глагол уходит в субхунтив, а не в обычное настоящее 🙂"
      },
      {
        "type": "choice",
        "q": "Quiero ___ un rato. <i style='opacity:.6'>(я хочу отдохнуть сам)</i>",
        "opts": ["descansar", "descanse", "que descanse", "descanses"],
        "answer": "descansar",
        "why": "Один и тот же субъект (я хочу — я отдыхаю) → инфинитив без que: quiero descansar.",
        "hint": "Когда хочешь чего-то для себя самого, второго лица нет — и que с субхунтивом не нужны 🙂"
      },
      {
        "type": "choice",
        "q": "Espero que ___ bien. <i style='opacity:.6'>что ты уже доехал</i>",
        "opts": ["hayas llegado", "has llegado", "habías llegado", "llegabas"],
        "answer": "hayas llegado",
        "why": "После espero que — субхунтив; действие уже совершено → перфект субхунтива: hayas llegado.",
        "hint": "Надежда об уже случившемся: бери haber в субхунтиве (hayas) + причастие, а не изъявительное has 🙂"
      },
      {
        "type": "choice",
        "q": "Ojalá ___ más tiempo. <i style='opacity:.6'>вот бы у меня было — tener</i>",
        "opts": ["tuviera", "tendría", "tenía", "tendré"],
        "answer": "tuviera",
        "why": "«Вот бы» о нереальном → имперфект субхунтива; основа от tuvieron → tuviera.",
        "hint": "Мечта о несбыточном зовёт имперфект субхунтива; основу бери от tuvieron, не выдумывай tendría 🙂"
      },
      {
        "type": "choice",
        "q": "Ojalá me ___ más; nunca me hace caso. <i style='opacity:.6'>вот бы ты меня слушал</i>",
        "opts": ["escucharas", "escucharás", "escuchabas", "escucharías"],
        "answer": "escucharas",
        "why": "ojalá о нереальном → имперфект субхунтива escucharas; escucharás с ударением — это будущее.",
        "hint": "Следи за ударением: escucharas (бы) ≠ escucharás (будущее) — здесь мечта, значит субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "Quería que ___ más temprano. <i style='opacity:.6'>чтобы ты пришёл (тогда)</i>",
        "opts": ["vinieras", "vengas", "vienes", "vendrías"],
        "answer": "vinieras",
        "why": "Главный глагол в прошлом (quería) → придаточное в имперфект субхунтива: vinieras, не vengas.",
        "hint": "Верх фразы в прошлом — низ съезжает в имперфект субхунтива; форма на -ras 🙂"
      },
      {
        "type": "choice",
        "q": "No creía que ___ verdad. <i style='opacity:.6'>что это правда</i>",
        "opts": ["fuera", "era", "sería", "fue"],
        "answer": "fuera",
        "why": "Сомнение в прошлом: no creer в imperfecto → придаточное в имперфект субхунтива: fuera.",
        "hint": "«Не верил, что…» в прошлом требует имперфект субхунтива от ser; era — это факт, а тут сомнение 🙂"
      },
      {
        "type": "choice",
        "q": "Me alegré de que ___ venido. <i style='opacity:.6'>что ты пришёл (раньше)</i>",
        "opts": ["hubieras", "habías", "hayas", "habrías"],
        "answer": "hubieras",
        "why": "Радость в прошлом о ещё более раннем действии → плюсквамперфект субхунтива: hubieras venido.",
        "hint": "Событие раньше прошлого момента радости зовёт форму hubiera, не перфект hayas 🙂"
      },
      {
        "type": "choice",
        "q": "Habla como si lo ___ todo. <i style='opacity:.6'>будто он всё знает</i>",
        "opts": ["supiera", "sabe", "sepa", "sabría"],
        "answer": "supiera",
        "why": "como si всегда зовёт прошлый субхунтив: como si lo supiera todo — даже о настоящем.",
        "hint": "После «как будто» испанский всегда ставит имперфект субхунтива — не изъявительное sabe 🙂"
      },
      {
        "type": "choice",
        "q": "Ojalá ___ mañana; todavía es posible. <i style='opacity:.6'>хоть бы он пришёл</i>",
        "opts": ["venga", "viniera", "viene", "vendrá"],
        "answer": "venga",
        "why": "ojalá о возможном (todavía es posible) → настоящий субхунтив: ojalá venga.",
        "hint": "Желание ещё сбыточно — ojalá берёт настоящий субхунтив; viniera звучало бы как несбыточное 🙂"
      },
      {
        "type": "gap",
        "q": "El profesor exige que ___ el trabajo mañana. <i style='opacity:.6'>мы сдаём — entregar</i>",
        "accept": ["entreguemos"],
        "model": "entreguemos",
        "why": "exigir que + субхунтив; «мы» от entregar (на -gar → -gu-): entreguemos.",
        "hint": "После «требует, чтобы мы…» — субхунтив; у -gar перед -e появляется u 🙂"
      },
      {
        "type": "gap",
        "q": "No creo que ___ terminado ya. <i style='opacity:.6'>они</i>",
        "accept": ["hayan"],
        "model": "hayan",
        "why": "no creer que + субхунтив; «они» от haber → hayan + terminado.",
        "hint": "После «не думаю, что…» — субхунтив; поставь haber в форму для ellos 🙂"
      },
      {
        "type": "gap",
        "q": "Ojalá ___ cerca. <i style='opacity:.6'>вот бы мы жили — vivir, «бы»</i>",
        "accept": ["viviéramos", "vivieramos", "viviésemos", "viviesemos"],
        "model": "viviéramos",
        "why": "Имперфект субхунтива «мы» от vivir: viviéramos (или viviésemos).",
        "hint": "«Вот бы мы…» — имперфект субхунтива; возьми основу как в форме ellos-прошедшего и добавь окончание для «мы», не забыв ударение 🙂"
      },
      {
        "type": "gap",
        "q": "Ojalá lo ___ sabido antes. <i style='opacity:.6'>я — «бы», о прошлом</i>",
        "accept": ["hubiera", "hubiese"],
        "model": "hubiera",
        "why": "Сожаление о прошлом: ojalá + плюсквамперфект субхунтива → hubiera (или hubiese) sabido.",
        "hint": "«Вот бы я знал раньше» о непоправимом — haber в форме hubiera + причастие 🙂"
      },
      {
        "type": "trRE",
        "ru": "Советую тебе отдохнуть.",
        "accept": ["te aconsejo que descanses", "yo te aconsejo que descanses", "aconsejo que descanses"],
        "model": "Te aconsejo que descanses.",
        "why": "aconsejar que + субхунтив при разных лицах: te aconsejo que descanses.",
        "hint": "«Советую тебе…» — новое лицо, значит que + субхунтив; descansar в форме для «ты» 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я обрадовался, что ты пришёл.",
        "accept": ["me alegré de que hubieras venido", "me alegre de que hubieras venido", "me alegré de que hubieses venido", "me alegre de que hubieses venido"],
        "model": "Me alegré de que hubieras venido.",
        "why": "Радость в прошлом о более раннем действии → me alegré de que + hubieras venido.",
        "hint": "«Обрадовался» в прошлом + «ты пришёл» ещё раньше → alegrarse de que + форма hubiera 🙂"
      },
      {
        "type": "trRE",
        "ru": "Он ведёт себя, будто ничего не случилось.",
        "accept": ["actúa como si no hubiera pasado nada", "actua como si no hubiera pasado nada", "actúa como si no hubiese pasado nada", "actua como si no hubiese pasado nada", "se comporta como si no hubiera pasado nada", "se comporta como si no hubiese pasado nada"],
        "model": "Actúa como si no hubiera pasado nada.",
        "why": "«Будто ничего не случилось» — предшествование → como si + плюсквамперфект субхунтива.",
        "hint": "«Как будто» + уже (не) случившееся → como si + hubiera pasado 🙂"
      },
      {
        "type": "trER",
        "en": "No creía que fuera verdad.",
        "accept": ["я не верил что это правда", "я не верила что это правда", "не верил что это правда", "не верила что это правда", "я не верил что это была правда"],
        "model": "Я не верил, что это правда.",
        "why": "no creía que fuera — сомнение в прошлом; по-русски «я не верил, что это правда».",
        "hint": "no creía — «не верил»; fuera здесь передаёт «что это (было) правдой» 🙂"
      },
      {
        "type": "trER",
        "en": "Espero que hayas aprobado el examen.",
        "accept": ["надеюсь ты сдал экзамен", "надеюсь что ты сдал экзамен", "надеюсь ты сдала экзамен", "надеюсь что ты сдала экзамен", "надеюсь ты уже сдал экзамен"],
        "model": "Надеюсь, ты сдал экзамен.",
        "why": "hayas aprobado — перфект субхунтива о совершённом: «надеюсь, ты (уже) сдал экзамен».",
        "hint": "aprobar el examen — «сдать экзамен»; hayas aprobado передаёт уже совершённое действие 🙂"
      },
      {
        "type": "order",
        "answer": "quería que vinieras más temprano",
        "accept": ["quería que vinieras más temprano", "queria que vinieras mas temprano"],
        "hintRu": "Собери: «Я хотел, чтобы ты пришёл пораньше.»",
        "why": "Прошлое сверху (quería) → имперфект субхунтива снизу (vinieras).",
        "hint": "Схема: quería que + глагол на -ras + «пораньше»; наклонение согласуй с прошлым 🙂"
      },
      {
        "type": "order",
        "answer": "ojalá tuviera más tiempo",
        "accept": ["ojalá tuviera más tiempo", "ojalá tuviese más tiempo", "ojala tuviera mas tiempo", "ojala tuviese mas tiempo"],
        "hintRu": "Собери: «Вот бы у меня было больше времени.»",
        "why": "«Вот бы» о нереальном → ojalá + имперфект субхунтива: ojalá tuviera más tiempo.",
        "hint": "Начни с ojalá, затем глагол-мечта в имперфекте субхунтива, потом «больше времени» 🙂"
      },
      {
        "type": "match",
        "q": "Соедини форму субхунтива с тем, что она выражает.",
        "pairs": [
          ["venga", "настоящее / будущее"],
          ["haya venido", "совершённое к настоящему"],
          ["viniera", "«бы» о прошлом"],
          ["hubiera venido", "«бы» о давнем прошлом"],
          ["como si fuera", "как будто сейчас"]
        ],
        "why": "Настоящее/будущее → venga / haya venido; прошлое → viniera / hubiera venido; como si — всегда прошлый субхунтив.",
        "hint": "Спроси себя: действие сейчас или уже совершилось? реально или «бы»? — и хвост подскажет форму 🙂"
      },
      {
        "type": "match",
        "q": "Соедини испанский глагол-триггер с переводом.",
        "pairs": [
          ["exigir", "требовать"],
          ["aconsejar", "советовать"],
          ["prohibir", "запрещать"],
          ["rogar", "умолять"],
          ["alegrarse de", "радоваться"]
        ],
        "why": "Все эти глаголы запускают субхунтив в придаточном при смене лица.",
        "hint": "Опирайся на знакомые корни: prohibir — «прохибиция», rogar — «умолять» 🙂"
      },
      {
        "type": "describe",
        "prompt": "Напиши 2–3 предложения-пожелания на «бы» (ты — старший другу): используй ojalá с настоящим и с прошлым субхунтивом.",
        "keywords": ["ojalá", "ojala", "tuviera", "tuviese", "viniera", "hubiera", "venga", "fuera", "supiera", "llegaras"],
        "minWords": 8,
        "model": "Ojalá venga pronto. Ojalá tuviera más tiempo para verte. Y ojalá no hubiera pasado nada malo.",
        "why": "ojalá + настоящий субхунтив — о возможном; ojalá + прошлый — о несбыточном или сожалении.",
        "hint": "Смешай возможное (ojalá venga) и несбыточное (ojalá tuviera / hubiera): степень реальности решает форму 🙂"
      },
      {
        "type": "describe",
        "prompt": "Напиши 2–3 предложения: попроси кого-то о чём-то и вырази чувство о том, что уже случилось. Используй pedir/aconsejar que… и espero/me alegro de que + haya…",
        "keywords": ["te pido que", "te aconsejo que", "espero que", "me alegro de que", "hayas", "haya", "vengas", "descanses", "llegado", "terminado"],
        "minWords": 8,
        "model": "Te pido que descanses. Te aconsejo que no trabajes tanto. Me alegro de que hayas terminado el proyecto.",
        "why": "Влияние и оценка запускают субхунтив; о совершённом — перфект (hayas terminado).",
        "hint": "Сначала просьба (te pido que + субхунтив), потом чувство об уже сделанном (me alegro de que hayas…) 🙂"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя — про гипотезу и «если бы». 25 заданий: будущее совершённое (habré hecho) и его догадка, условное совершённое (habría hecho), нереальные условия настоящего и прошлого, смешанные и союзы-условия (a menos que, con tal de que). Спокойно взвешивай время каждой формы. Наберёшь 80% — и Неделя 3 твоя. 💛",
    "review": [
      "Futuro compuesto: <b>habré/habrás…</b> + participio — para las cinco <b>habré terminado</b>; догадка: ya <b>habrá salido</b>",
      "Condicional compuesto: <b>habría</b> + participio — yo <b>habría hecho</b> lo mismo; <b>serían</b> las tres (догадка)",
      "Нереальное настоящее: <b>si + imperfecto subj. → condicional</b> — si tuviera, <b>iría</b> · после si «бы» нет",
      "Нереальное прошлое: <b>si + pluscuamperf. subj. → condicional compuesto</b> — si hubiera sabido, <b>habría venido</b>",
      "Смешанные: si <b>hubiera estudiado</b>, ahora <b>sería</b> médico · <b>de haberlo sabido</b>…",
      "Союзы-условия + субхунтив: <b>a menos que, con tal de que, en caso de que, siempre que</b> (условие)"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Para las cinco ya ___. <i style='opacity:.6'>я закончу к пяти — terminar</i>",
        "opts": ["habré terminado", "habría terminado", "he terminado", "habré terminando"],
        "answer": "habré terminado",
        "why": "Завершённость к сроку → futuro compuesto: para las cinco habré terminado.",
        "hint": "«Уже сделаю к сроку» — будущее совершённое: habré + причастие на -ado/-ido 🙂"
      },
      {
        "type": "choice",
        "q": "No contesta: ya ___. <i style='opacity:.6'>наверное, уже уснул — dormirse</i>",
        "opts": ["se habrá dormido", "se ha dormido", "se durmió", "se habría dormido"],
        "answer": "se habrá dormido",
        "why": "Догадка о недавнем прошлом прячется в futuro compuesto: ya se habrá dormido = «наверное, уснул».",
        "hint": "«Наверное, уже…» — вероятность зашита в само время habrá + причастие, слово «наверное» не нужно 🙂"
      },
      {
        "type": "choice",
        "q": "Yo ___ lo mismo en tu situación. <i style='opacity:.6'>я бы поступил так же (тогда)</i>",
        "opts": ["habría hecho", "haría", "he hecho", "habré hecho"],
        "answer": "habría hecho",
        "why": "Гипотеза о прошлом → condicional compuesto: yo habría hecho lo mismo.",
        "hint": "«Поступил бы» о прошлой ситуации — это составное условное habría + причастие, а не простое haría 🙂"
      },
      {
        "type": "choice",
        "q": "Si ___ tiempo, iría al gimnasio. <i style='opacity:.6'>если бы было время</i>",
        "opts": ["tuviera", "tengo", "tendría", "tendré"],
        "answer": "tuviera",
        "why": "Нереальное условие настоящего: si + имперфект субхунтива → tuviera; «бы» только в ответе (iría).",
        "hint": "После si «бы» не ставят: условие берёт имперфект субхунтива, а condicional (tendría) идёт в другую часть 🙂"
      },
      {
        "type": "choice",
        "q": "Si ___ tú, hablaría con él. <i style='opacity:.6'>на твоём месте</i>",
        "opts": ["fuera", "sería", "soy", "era"],
        "answer": "fuera",
        "why": "«Будь я тобой» — нереальное условие: si fuera tú, hablaría con él.",
        "hint": "«На твоём месте» = si + имперфект субхунтива от ser; sería пойдёт в ответ, не после si 🙂"
      },
      {
        "type": "choice",
        "q": "Si me lo ___, te habría ayudado. <i style='opacity:.6'>если бы ты сказал</i>",
        "opts": ["hubieras dicho", "habrías dicho", "habías dicho", "dirías"],
        "answer": "hubieras dicho",
        "why": "Нереальное прошлое: si + плюсквамперфект субхунтива (hubieras dicho) → condicional compuesto (habría ayudado).",
        "hint": "Условие в прошлом, которого не было, — si + форма hubiera; habría идёт в ответ 🙂"
      },
      {
        "type": "choice",
        "q": "Si hubiera estudiado medicina, ahora ___ médico. <i style='opacity:.6'>сейчас был бы</i>",
        "opts": ["sería", "habría sido", "es", "fuera"],
        "answer": "sería",
        "why": "Смешанное условие: причина в прошлом, следствие сейчас → простое condicional: ahora sería médico.",
        "hint": "Следствие относится к «сейчас», поэтому простое condicional (sería), а не составное habría sido 🙂"
      },
      {
        "type": "choice",
        "q": "Iré a la fiesta ___ llueva. <i style='opacity:.6'>если только не пойдёт дождь</i>",
        "opts": ["a menos que", "a pesar de que", "porque", "aunque"],
        "answer": "a menos que",
        "why": "«Если только не» = a menos que + субхунтив (llueva).",
        "hint": "«Разве что / если только не» вводит исключение-условие; после него субхунтив llueva 🙂"
      },
      {
        "type": "choice",
        "q": "Te dejo el coche, siempre que lo ___ con cuidado. <i style='opacity:.6'>при условии, что будешь ехать осторожно</i>",
        "opts": ["conduzcas", "conduces", "conducirás", "conducías"],
        "answer": "conduzcas",
        "why": "Здесь siempre que = условие «при условии, что» → субхунтив: conduzcas.",
        "hint": "Это условие «лишь бы», а не привычка, поэтому субхунтив conduzcas 🙂"
      },
      {
        "type": "choice",
        "q": "Te ayudo ___ me escuches. <i style='opacity:.6'>лишь бы ты меня слушал</i>",
        "opts": ["con tal de que", "con tal de", "aunque", "ya que"],
        "answer": "con tal de que",
        "why": "«Лишь бы / при условии, что» при разных лицах → con tal de que + субхунтив (escuches).",
        "hint": "Разные лица (я помогаю — ты слушаешь) требуют con tal de QUE + субхунтив, не голого con tal de 🙂"
      },
      {
        "type": "gap",
        "q": "Cuando llegues, ya ___ cenado. <i style='opacity:.6'>я уже поужинаю — haber</i>",
        "accept": ["habré"],
        "model": "habré",
        "why": "Готово к моменту в будущем → futuro compuesto: ya habré cenado cuando llegues.",
        "hint": "К моменту твоего прихода ужин будет готов — haber в будущем (yo) + cenado 🙂"
      },
      {
        "type": "gap",
        "q": "Yo que tú, no ___ dicho eso. <i style='opacity:.6'>я бы не сказал — haber</i>",
        "accept": ["habría"],
        "model": "habría",
        "why": "Упрёк задним числом: yo que tú + condicional compuesto → no habría dicho.",
        "hint": "«На твоём месте я бы (не) …» о прошлом — haber в условном (habría) + причастие 🙂"
      },
      {
        "type": "gap",
        "q": "Si ___ salido antes, no habríamos perdido el tren. <i style='opacity:.6'>мы — «бы», о прошлом</i>",
        "accept": ["hubiéramos", "hubieramos", "hubiésemos", "hubiesemos"],
        "model": "hubiéramos",
        "why": "Нереальное прошлое: si + hubiéramos + причастие → habríamos perdido.",
        "hint": "«Если бы мы вышли…» о прошлом → haber в форме hubiéramos + salido 🙂"
      },
      {
        "type": "gap",
        "q": "En caso de que ___, coge el paraguas. <i style='opacity:.6'>если пойдёт дождь — llover</i>",
        "accept": ["llueva"],
        "model": "llueva",
        "why": "en caso de que + субхунтив: en caso de que llueva.",
        "hint": "«На случай, если…» всегда зовёт субхунтив; llover в форме для «оно» → llueva 🙂"
      },
      {
        "type": "trRE",
        "ru": "К понедельнику я всё подготовлю.",
        "accept": ["para el lunes lo habré preparado todo", "para el lunes lo habre preparado todo", "para el lunes ya lo habré preparado todo", "para el lunes ya lo habre preparado todo", "para el lunes lo habré preparado", "para el lunes lo habre preparado"],
        "model": "Para el lunes lo habré preparado todo.",
        "why": "«К понедельнику подготовлю» = завершено к сроку → habré preparado.",
        "hint": "Срок «к понедельнику» + результат готов → futuro compuesto: habré + preparado 🙂"
      },
      {
        "type": "trRE",
        "ru": "Если бы я знал ответ, я бы тебе его сказал.",
        "accept": ["si supiera la respuesta te la diría", "si supiera la respuesta te la diria", "si yo supiera la respuesta te la diría", "si supiera la respuesta te lo diría", "si supiera la respuesta te lo diria"],
        "model": "Si supiera la respuesta, te la diría.",
        "why": "Нереальное настоящее: si supiera → te la diría.",
        "hint": "«Знал бы — сказал бы»: si + имперфект субхунтива, ответ в condicional 🙂"
      },
      {
        "type": "trRE",
        "ru": "Если бы ты меня послушал, сейчас у тебя не было бы этих проблем.",
        "accept": ["si me hubieras hecho caso ahora no tendrías estos problemas", "si me hubieras hecho caso ahora no tendrias estos problemas", "si me hubieses hecho caso ahora no tendrías estos problemas", "si me hubieses hecho caso ahora no tendrias estos problemas"],
        "model": "Si me hubieras hecho caso, ahora no tendrías estos problemas.",
        "why": "Прошлое-условие → hubieras hecho; следствие «сейчас» → tendrías (простое condicional).",
        "hint": "hacer caso — «слушаться»; условие в прошлом (hubieras), а следствие в «сейчас» — tendrías 🙂"
      },
      {
        "type": "trER",
        "en": "Serían las tres cuando volvió.",
        "accept": ["было наверное часа три когда он вернулся", "было наверное около трёх когда он вернулся", "наверное было три часа когда он вернулся", "было наверное часа три когда она вернулась", "было около трёх когда он вернулся"],
        "model": "Было, наверное, часа три, когда он вернулся.",
        "why": "condicional как догадка о прошлом: serían las tres = «было, наверное, часа три».",
        "hint": "serían здесь не «были бы», а догадка: «наверное, было около трёх» 🙂"
      },
      {
        "type": "trER",
        "en": "Si hubieras venido, la habrías visto.",
        "accept": ["если бы ты пришёл ты бы её увидел", "если бы ты пришла ты бы её увидела", "если бы ты пришёл то увидел бы её", "пришёл бы ты и увидел бы её", "если бы ты пришёл ты бы увидел её"],
        "model": "Если бы ты пришёл, ты бы её увидел.",
        "why": "Нереальное прошлое: hubieras venido → la habrías visto; по-русски двойное «бы».",
        "hint": "Обе части с «бы»: «пришёл бы — увидел бы» 🙂"
      },
      {
        "type": "order",
        "answer": "si fuera rico viajaría por todo el mundo",
        "accept": ["si fuera rico viajaría por todo el mundo", "si fuera rico viajaria por todo el mundo"],
        "hintRu": "Собери: «Если бы я был богат, я бы объездил весь мир.»",
        "why": "si + имперфект субхунтива (fuera) → condicional (viajaría).",
        "hint": "Условие si fuera rico, а «бы» — в ответе viajaría; порядок как в подсказке 🙂"
      },
      {
        "type": "order",
        "answer": "de haberlo sabido no habría venido",
        "accept": ["de haberlo sabido no habría venido", "de haberlo sabido no habria venido"],
        "hintRu": "Собери: «Знай я это, я бы не пришёл.»",
        "why": "Условие без si через инфинитив: de + haber + причастие → de haberlo sabido, no habría venido.",
        "hint": "«Знай я тогда…» можно сказать без si: de haberlo sabido + условное составное 🙂"
      },
      {
        "type": "match",
        "q": "Соедини условие с его типом.",
        "pairs": [
          ["si llueve, me quedo", "реальное условие"],
          ["si tuviera tiempo, iría", "нереальное о настоящем"],
          ["si hubiera sabido, habría venido", "нереальное о прошлом"],
          ["si hubiera estudiado, ahora sería médico", "смешанное"],
          ["a menos que llueva", "условие-исключение"]
        ],
        "why": "Тип виден по временам: presente → реальное; imperf subj → настоящее нереальное; pluscuamperf → прошлое; mixto — прошлое + сейчас.",
        "hint": "Смотри на глаголы: есть ли «бы» и о каком времени речь — это и есть тип условия 🙂"
      },
      {
        "type": "match",
        "q": "Соедини форму или союз с тем, что он выражает.",
        "pairs": [
          ["habré terminado", "будущее совершённое"],
          ["habría terminado", "условное совершённое («бы»)"],
          ["a menos que", "если только не"],
          ["con tal de que", "при условии, что"],
          ["de haberlo sabido", "условие без si"]
        ],
        "why": "habré — уверенное будущее; habría — гипотеза «бы»; союзы a menos que / con tal de que зовут субхунтив; de + инфинитив заменяет si.",
        "hint": "Различай близнецов habré/habría и вспомни, что значит каждый союз 🙂"
      },
      {
        "type": "describe",
        "prompt": "Напиши 2–3 предложения-мечты: что бы ты сделал(а), если бы всё было иначе сейчас. Используй si + imperfecto de subjuntivo → condicional.",
        "keywords": ["si tuviera", "si fuera", "si pudiera", "iría", "viajaría", "haría", "sería", "hablaría", "si supiera"],
        "minWords": 8,
        "model": "Si tuviera más tiempo, aprendería a bailar. Si fuera rico, viajaría por todo el mundo. Y si pudiera, viviría junto al mar.",
        "why": "Нереальное условие настоящего: si + имперфект субхунтива, а «бы» — в condicional.",
        "hint": "После si — имперфект субхунтива (tuviera, fuera), в ответе — condicional (iría, sería) 🙂"
      },
      {
        "type": "describe",
        "prompt": "Напиши 2–3 предложения о прошлом, которого не было, и одну догадку. Используй si hubiera… habría… и futuro/condicional compuesto для вероятности.",
        "keywords": ["si hubiera", "habría", "hubiera sabido", "habría venido", "habrá", "habría sido", "de haberlo sabido", "ahora"],
        "minWords": 8,
        "model": "Si hubiera estudiado más, habría aprobado el examen. De haberlo sabido, no habría venido. Ahora ya no contesta: habrá salido.",
        "why": "Прошлое нереальное — si hubiera / habría; вероятность прячется в habrá / habría.",
        "hint": "Смешивай: si hubiera… habría… для сожалений и habrá/habría для догадки о прошлом 🙂"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя — субхунтив в придаточных и чужая речь. 25 заданий: relativas (busco que tenga), temporales (cuando llegue), concesivas (aunque llueva), цели (para que sepas) и косвенная речь в прошлом (me dijo que viniera). Здесь наклонение решает смысл — вчитывайся. Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Relativas: известный предмет → <b>indicativo</b> (que tiene) · искомый / нет такого → <b>subjuntivo</b> (que tenga · no hay nadie que sepa)",
      "Temporales о будущем → субхунтив: <b>cuando llegue</b>, hasta que vuelva · <b>antes de que</b> всегда субхунтив · привычка → indicativo",
      "Concesivas: <b>aunque llueve</b> (факт) ↔ <b>aunque llueva</b> (даже если) · por mucho que <b>insistas</b>",
      "Finales: <b>para que</b> + субхунтив (разные лица) · <b>sin que</b> + субхунтив · para + инфинитив (один субъект)",
      "Косвенная речь в прошлом: presente → <b>imperfecto</b>, приказ → <b>imperf. subj.</b> (me dijo que <b>viniera</b>) · hoy → aquel día",
      "Косвенный вопрос: <b>si</b> = «ли» · информация → indicativo · влияние → subjuntivo (sugirió que <b>viniera</b>)"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Busco un piso que ___ terraza. <i style='opacity:.6'>ищу любую квартиру с террасой</i>",
        "opts": ["tenga", "tiene", "tendría", "tuviera"],
        "answer": "tenga",
        "why": "Предмет ещё ищешь, конкретного нет → относительное с субхунтивом: que tenga.",
        "hint": "Ищешь «любой подходящий», а не известный — antecedente неопределён, значит субхунтив tenga 🙂"
      },
      {
        "type": "choice",
        "q": "No hay nadie que lo ___. <i style='opacity:.6'>кто бы это знал</i>",
        "opts": ["sepa", "sabe", "sabría", "supiera"],
        "answer": "sepa",
        "why": "Отрицание существования (no hay nadie) → субхунтив: no hay nadie que lo sepa.",
        "hint": "«Нет никого, кто бы…» отрицает существование — это всегда субхунтив sepa, не sabe 🙂"
      },
      {
        "type": "choice",
        "q": "Cuando ___, llámame. <i style='opacity:.6'>когда приедешь (в будущем)</i>",
        "opts": ["llegues", "llegas", "llegarás", "llegaste"],
        "answer": "llegues",
        "why": "cuando о будущем → субхунтив: cuando llegues, llámame.",
        "hint": "«Когда придёшь» о будущем по-испански — субхунтив llegues, не будущее llegarás 🙂"
      },
      {
        "type": "choice",
        "q": "Cuando ___ a casa, siempre ceno. <i style='opacity:.6'>каждый день, когда прихожу</i>",
        "opts": ["llego", "llegue", "llegara", "llegaré"],
        "answer": "llego",
        "why": "Привычка / повтор → индикатив: cuando llego a casa, siempre ceno.",
        "hint": "«Всякий раз, когда прихожу» — это привычка, значит изъявительное llego, а не субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "Aunque ___ cansado, sigue trabajando. <i style='opacity:.6'>хотя он устал — это факт</i>",
        "opts": ["está", "esté", "estaría", "estuviera"],
        "answer": "está",
        "why": "aunque о реальном факте → индикатив: aunque está cansado, sigue trabajando.",
        "hint": "Усталость — реальный факт, значит уступка через индикатив está, не субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "Aunque ___ mañana, saldré igualmente. <i style='opacity:.6'>даже если пойдёт дождь</i>",
        "opts": ["llueva", "llueve", "lloverá", "llovería"],
        "answer": "llueva",
        "why": "«Даже если» о гипотезе → субхунтив: aunque llueva, saldré.",
        "hint": "«Даже если» о ещё не случившемся — субхунтив llueva, а не будущее lloverá 🙂"
      },
      {
        "type": "choice",
        "q": "Te lo digo para que lo ___. <i style='opacity:.6'>чтобы ты знал</i>",
        "opts": ["sepas", "sabes", "saber", "sabrás"],
        "answer": "sepas",
        "why": "para que при разных лицах → субхунтив: para que lo sepas.",
        "hint": "«Чтобы ты знал» — новое лицо, значит para QUE + субхунтив sepas, не инфинитив 🙂"
      },
      {
        "type": "choice",
        "q": "Me dijo que ___ en un banco. <i style='opacity:.6'>что работает (пересказ в прошлом)</i>",
        "opts": ["trabajaba", "trabaja", "trabajará", "trabaje"],
        "answer": "trabajaba",
        "why": "Косвенная речь в прошлом: presente → imperfecto: dijo que trabajaba.",
        "hint": "«Сказал, что работает» — при dijo настоящее съезжает в имперфект trabajaba 🙂"
      },
      {
        "type": "choice",
        "q": "Me preguntó ___ vendría. <i style='opacity:.6'>спросил, приду ли я</i>",
        "opts": ["si", "que", "cuando", "como"],
        "answer": "si",
        "why": "Косвенный вопрос типа «ли» → si: me preguntó si vendría.",
        "hint": "«Спросил, приду ЛИ я» — русское «ли» по-испански si, а не que 🙂"
      },
      {
        "type": "choice",
        "q": "Me ___ que fuéramos juntos. <i style='opacity:.6'>предложил, чтобы мы пошли вместе</i>",
        "opts": ["sugirió", "informó", "explicó", "comentó"],
        "answer": "sugirió",
        "why": "«Предложил, чтобы» — глагол влияния → субхунтив (fuéramos); из вариантов это sugirió.",
        "hint": "После fuéramos (субхунтив) нужен глагол влияния — «предложил», а не «сообщил / объяснил» 🙂"
      },
      {
        "type": "gap",
        "q": "Tengo un compañero que ___ ese programa. <i style='opacity:.6'>который знает — saber, реально существует</i>",
        "accept": ["sabe"],
        "model": "sabe",
        "why": "Antecedente известен и реален (tengo un compañero) → индикатив: que sabe.",
        "hint": "Коллега конкретный и существует — тут наклонение изъявительное sabe, не субхунтив 🙂"
      },
      {
        "type": "gap",
        "q": "Espera hasta que ___. <i style='opacity:.6'>пока я не вернусь — volver</i>",
        "accept": ["vuelva"],
        "model": "vuelva",
        "why": "hasta que о будущем → субхунтив: espera hasta que vuelva.",
        "hint": "«Подожди, пока я не вернусь» о будущем — субхунтив от volver для «я» → vuelva 🙂"
      },
      {
        "type": "gap",
        "q": "Salió ___ nadie lo notara. <i style='opacity:.6'>так, что никто не заметил</i>",
        "accept": ["sin que"],
        "model": "sin que",
        "why": "«Незаметно для других» → sin que + субхунтив: salió sin que nadie lo notara.",
        "hint": "«Так, что никто не…» при разных лицах — это sin que + субхунтив 🙂"
      },
      {
        "type": "gap",
        "q": "Me informó que ___ a las ocho. <i style='opacity:.6'>что придёт — venir, передаёт факт</i>",
        "accept": ["venía", "venia", "vendría", "vendria"],
        "model": "venía",
        "why": "Глагол информации (informar) → индикатив; в прошлом presente → imperfecto: venía.",
        "hint": "informar «сообщает факт» → индикатив, не субхунтив; в прошлом это имперфект venía 🙂"
      },
      {
        "type": "trRE",
        "ru": "Сколько ни настаивай, я не передумаю.",
        "accept": ["por mucho que insistas no cambiaré de idea", "por mucho que insistas no cambiare de idea", "por mucho que insistas no cambiaré de opinión", "por mucho que insistas no cambiare de opinion", "por más que insistas no cambiaré de idea", "por mas que insistas no cambiare de idea"],
        "model": "Por mucho que insistas, no cambiaré de idea.",
        "why": "«Сколько ни…» → por mucho que + субхунтив (insistas).",
        "hint": "«Сколько ни настаивай» вводит уступку через субхунтив insistas 🙂"
      },
      {
        "type": "trRE",
        "ru": "Говорю тихо, чтобы малыш спал.",
        "accept": ["hablo bajo para que el niño duerma", "hablo bajo para que el nino duerma", "hablo en voz baja para que el niño duerma", "hablo en voz baja para que el nino duerma", "hablo bajo para que el bebé duerma", "hablo bajo para que el bebe duerma"],
        "model": "Hablo bajo para que el niño duerma.",
        "why": "Цель при разных лицах → para que + субхунтив duerma.",
        "hint": "«Чтобы малыш спал» — para que + субхунтив от dormir → duerma 🙂"
      },
      {
        "type": "trRE",
        "ru": "Она хотела знать, где я живу.",
        "accept": ["quería saber dónde vivía", "queria saber donde vivia", "quería saber dónde vivía yo", "queria saber donde vivia yo"],
        "model": "Quería saber dónde vivía.",
        "why": "Косвенный вопрос с dónde — прямой порядок, глагол в имперфект: quería saber dónde vivía.",
        "hint": "После dónde порядок прямой (dónde vivía), а время съезжает в имперфект 🙂"
      },
      {
        "type": "trER",
        "en": "No hay ninguna ley que lo permita.",
        "accept": ["нет такого закона который бы это разрешал", "нет ни одного закона который бы это разрешал", "нет закона который бы это разрешал", "не существует закона который бы это разрешал", "нет никакого закона который бы это разрешал"],
        "model": "Нет такого закона, который бы это разрешал.",
        "why": "no hay ninguna ley que permita — отрицание существования → субхунтив; по-русски «который бы разрешал».",
        "hint": "permita здесь «разрешал бы»; вся фраза отрицает, что такой закон существует 🙂"
      },
      {
        "type": "trER",
        "en": "Dijo que lo haría al día siguiente.",
        "accept": ["он сказал что сделает это на следующий день", "она сказала что сделает это на следующий день", "он сказал что сделает это назавтра", "сказал что сделает это на следующий день", "он сказал что он сделает это на следующий день"],
        "model": "Он сказал, что сделает это на следующий день.",
        "why": "В косвенной речи прошлого futuro → condicional (haría), а mañana → al día siguiente.",
        "hint": "haría здесь «сделает» из прошлого; al día siguiente — сдвинутое «завтра» 🙂"
      },
      {
        "type": "order",
        "answer": "vete antes de que venga",
        "accept": ["vete antes de que venga"],
        "hintRu": "Собери: «Уходи, пока он не пришёл.»",
        "why": "antes de que всегда зовёт субхунтив: vete antes de que venga.",
        "hint": "После antes de que — всегда субхунтив; «уходи» — команда vete 🙂"
      },
      {
        "type": "order",
        "answer": "me pidió que viniera más temprano",
        "accept": ["me pidió que viniera más temprano", "me pidio que viniera mas temprano"],
        "hintRu": "Собери: «Он попросил меня прийти пораньше.»",
        "why": "Пересказ приказа в прошлом → imperfecto de subjuntivo: me pidió que viniera.",
        "hint": "«Велел / попросил прийти» — это не инфинитив: pedir que + viniera 🙂"
      },
      {
        "type": "match",
        "q": "Соедини начало фразы с наклонением придаточного.",
        "pairs": [
          ["Tengo un amigo que…", "habla ruso (индикатив)"],
          ["Busco a alguien que…", "hable ruso (субхунтив)"],
          ["Cuando llegue,…", "о будущем — субхунтив"],
          ["Cuando llego,…", "привычка — индикатив"],
          ["Antes de que…", "всегда субхунтив"]
        ],
        "why": "Известное / реальное и привычка → индикатив; искомое, будущее после cuando и antes de que → субхунтив.",
        "hint": "Спроси: предмет известен? речь о привычке или о будущем? — и выбери наклонение 🙂"
      },
      {
        "type": "match",
        "q": "Соедини прямую речь с её пересказом в прошлом.",
        "pairs": [
          ["«trabajo aquí»", "dijo que trabajaba aquí"],
          ["«ven pronto»", "me pidió que viniera pronto"],
          ["«lo haré mañana»", "dijo que lo haría al día siguiente"],
          ["«¿vienes?»", "me preguntó si venía"],
          ["«he terminado»", "dijo que había terminado"]
        ],
        "why": "Presente → imperfecto, приказ → imperf. subj., futuro → condicional, вопрос → si, perfecto → pluscuamperfecto.",
        "hint": "Каждое время съезжает на шаг назад, а приказ уходит в субхунтив 🙂"
      },
      {
        "type": "describe",
        "prompt": "Напиши 2–3 предложения о планах: чего ты ищешь и что сделаешь, когда что-то случится. Используй busco algo / a alguien que…, cuando… и aunque…",
        "keywords": ["busco", "que tenga", "que sepa", "que guste", "cuando", "aunque", "llegue", "encuentre", "pueda", "sea"],
        "minWords": 8,
        "model": "Busco un trabajo que me guste y que esté cerca de casa. Cuando lo encuentre, te lo diré. Aunque sea difícil, no me rendiré.",
        "why": "Искомое → que + субхунтив; cuando о будущем → субхунтив; aunque о гипотезе → субхунтив.",
        "hint": "Соедини три конструкции: busco… que tenga, cuando llegue, aunque sea 🙂"
      },
      {
        "type": "describe",
        "prompt": "Перескажи 2–3 чужих реплики в прошлом (кто что сказал, о чём попросил, что спросил). Используй dijo que…, me pidió que… и me preguntó si…",
        "keywords": ["dijo que", "me pidió que", "me pidio que", "me preguntó si", "me pregunto si", "viniera", "estaba", "haría", "esperara", "podía"],
        "minWords": 8,
        "model": "Me dijo que estaba cansado y que se iría pronto. Me pidió que lo esperara. Luego me preguntó si podía ayudarlo.",
        "why": "Пересказ в прошлом: факт → индикатив со сдвигом; просьба → субхунтив; вопрос → si.",
        "hint": "Три ходовых глагола: dijo que (факт), me pidió que + субхунтив, me preguntó si 🙂"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен B2",
    "intro": "Это финал B2 — большой и честный. 33 задания по всему уровню: субхунтив во всех временах, условные всех типов, составные времена, пассив и ser/estar, коннекторы аргумента, перифразы и нейтральное lo, косвенная речь. Собери всё, что накопил(а) за месяц, и вперёд — к грамоте B2. 🏆",
    "review": [
      "Субхунтив: влияние / оценка / сомнение / желание · четыре времени <b>venga · haya venido · viniera · hubiera venido</b>",
      "Условия: реальное (si llueve, me quedo) · нереальные <b>si tuviera → iría</b>, <b>si hubiera → habría</b>, смешанные",
      "Составные времена: <b>habré</b> hecho (будущее / догадка) · <b>habría</b> hecho («бы» / догадка о прошлом)",
      "Relativas, temporales, concesivas, finales: наклонение решает <b>смысл</b>, а не союз",
      "Косвенная речь: сдвиг времён · <b>dijo que venía</b> / que <b>viniera</b> · si = «ли»",
      "Пассив: <b>fue construido</b> · <b>se venden</b> pisos · <b>está construida</b> (результат)",
      "Ser / estar: <b>es listo</b> / <b>está listo</b> · <b>está rico</b> (вкусно) ≠ es rico (богат)",
      "Коннекторы: por un lado… sin embargo… por lo tanto… <b>de ahí que</b> + субхунтив",
      "Перифразы <b>llevo… estudiando</b>, se echó a llorar · нейтральное <b>lo</b>: lo importante, lo que"
    ],
    "q": [
      {
        "type": "choice",
        "q": "El médico me exige que ___ de fumar. <i style='opacity:.6'>чтобы я бросил — dejar</i>",
        "opts": ["deje", "dejo", "dejar", "dejaré"],
        "answer": "deje",
        "why": "exigir que + субхунтив при разных лицах: me exige que deje de fumar.",
        "hint": "«Требует, чтобы я…» — новое лицо, значит que + субхунтив deje, не инфинитив 🙂"
      },
      {
        "type": "choice",
        "q": "Ojalá me ___ más; nunca me hace caso. <i style='opacity:.6'>вот бы ты меня слушал</i>",
        "opts": ["escucharas", "escucharás", "escuchabas", "escucharías"],
        "answer": "escucharas",
        "why": "ojalá о нереальном → имперфект субхунтива escucharas; escucharás с ударением — будущее.",
        "hint": "Мечта о несбыточном зовёт имперфект субхунтива; следи за ударением: escucharas ≠ escucharás 🙂"
      },
      {
        "type": "choice",
        "q": "Me alegré de que ___ venido a la fiesta. <i style='opacity:.6'>что ты пришёл (раньше)</i>",
        "opts": ["hubieras", "habías", "hayas", "habrías"],
        "answer": "hubieras",
        "why": "Радость в прошлом о более раннем действии → плюсквамперфект субхунтива: hubieras venido.",
        "hint": "Событие раньше прошлого момента радости → форма hubiera, не перфект hayas 🙂"
      },
      {
        "type": "choice",
        "q": "Para el viernes ya ___ el informe. <i style='opacity:.6'>я сдам к пятнице — entregar</i>",
        "opts": ["habré entregado", "habría entregado", "he entregado", "habré entregando"],
        "answer": "habré entregado",
        "why": "Готово к сроку → futuro compuesto: para el viernes habré entregado.",
        "hint": "«Уже сдам к пятнице» — будущее совершённое habré + entregado, а не «бы» (habría) 🙂"
      },
      {
        "type": "choice",
        "q": "Si ___ más joven, empezaría de cero. <i style='opacity:.6'>если бы я был помоложе</i>",
        "opts": ["fuera", "sería", "soy", "era"],
        "answer": "fuera",
        "why": "Нереальное условие настоящего: si + имперфект субхунтива (fuera) → condicional (empezaría).",
        "hint": "После si «бы» не ставят; условие — имперфект субхунтива fuera, а sería идёт в ответ 🙂"
      },
      {
        "type": "choice",
        "q": "Si hubiéramos aceptado aquella oferta, ahora ___ ricos. <i style='opacity:.6'>сейчас были бы</i>",
        "opts": ["seríamos", "habríamos sido", "somos", "fuéramos"],
        "answer": "seríamos",
        "why": "Смешанное условие: прошлое-условие → следствие «сейчас» → простое condicional seríamos.",
        "hint": "Следствие про «сейчас» → простое condicional (seríamos), не составное habríamos sido 🙂"
      },
      {
        "type": "choice",
        "q": "Necesito a alguien que ___ ruso. <i style='opacity:.6'>кто говорил бы (ищу любого)</i>",
        "opts": ["hable", "habla", "hablaría", "hablara"],
        "answer": "hable",
        "why": "Ищешь любого подходящего (antecedente неопределён) → субхунтив: alguien que hable ruso.",
        "hint": "Нужен «любой, кто бы…», а не конкретный человек — значит субхунтив hable 🙂"
      },
      {
        "type": "choice",
        "q": "Aunque ___ caro, lo compro siempre. <i style='opacity:.6'>хотя это дорого — так и есть</i>",
        "opts": ["es", "sea", "fuera", "será"],
        "answer": "es",
        "why": "aunque о реальном факте → индикатив: aunque es caro, lo compro.",
        "hint": "Цена реальна и известна — уступка через индикатив es, а не субхунтив sea 🙂"
      },
      {
        "type": "choice",
        "q": "En esta zona ___ pisos nuevos. <i style='opacity:.6'>продаются квартиры</i>",
        "opts": ["se venden", "se vende", "están vendidos", "fueron vendidos"],
        "answer": "se venden",
        "why": "Pasiva refleja согласуется с подлежащим: pisos (мн.) → se venden.",
        "hint": "«Продаются квартиры» — pasiva refleja; подлежащее pisos во множественном → se venden 🙂"
      },
      {
        "type": "choice",
        "q": "No te comas ese plátano, todavía ___ verde. <i style='opacity:.6'>ещё не созрел</i>",
        "opts": ["está", "es", "será", "sea"],
        "answer": "está",
        "why": "estar verde = «недозрелый» (состояние); ser verde было бы о цвете-свойстве.",
        "hint": "«Ещё зелёный = не созрел» — это временное состояние, значит estar, не ser 🙂"
      },
      {
        "type": "choice",
        "q": "Hay pocos datos; de ahí que ___ dudas. <i style='opacity:.6'>вот почему и есть сомнения — haber</i>",
        "opts": ["haya", "hay", "habría", "había"],
        "answer": "haya",
        "why": "de ahí que всегда тянет субхунтив: de ahí que haya dudas.",
        "hint": "Связка de ahí que зовёт субхунтив; форма от haber → haya, не hay 🙂"
      },
      {
        "type": "choice",
        "q": "Es ___ caro que no lo compro. <i style='opacity:.6'>настолько дорого, что…</i>",
        "opts": ["tan", "tanto", "muy", "tantos"],
        "answer": "tan",
        "why": "Перед прилагательным — tan… que: es tan caro que no lo compro.",
        "hint": "Перед прилагательным «настолько» — это tan, а tanto идёт с существительным 🙂"
      },
      {
        "type": "choice",
        "q": "___ dos años estudiando español. <i style='opacity:.6'>уже два года учу</i>",
        "opts": ["Llevo", "Hace", "Estoy", "Vengo"],
        "answer": "Llevo",
        "why": "Длительность до сих пор → llevar + время + gerundio: llevo dos años estudiando.",
        "hint": "«Уже два года делаю» — конструкция llevar + gerundio; llevo здесь не «ношу» 🙂"
      },
      {
        "type": "choice",
        "q": "___ importante es no rendirse. <i style='opacity:.6'>главное — не сдаваться</i>",
        "opts": ["Lo", "El", "La", "Un"],
        "answer": "Lo",
        "why": "Абстракция «то, что важно» → lo + прилагательное: lo importante.",
        "hint": "«Главное / важное» как абстракция — это нейтральное lo + прилагательное, не артикль el 🙂"
      },
      {
        "type": "gap",
        "q": "Espero que ___ aprobado el examen. <i style='opacity:.6'>ты — haber в субхунтиве</i>",
        "accept": ["hayas"],
        "model": "hayas",
        "why": "espero que + перфект субхунтива: hayas + aprobado.",
        "hint": "«Надеюсь, ты сдал» о совершённом — haber в субхунтиве для «ты» → hayas 🙂"
      },
      {
        "type": "gap",
        "q": "Gastas como si ___ millonario. <i style='opacity:.6'>как будто ты миллионер — ser</i>",
        "accept": ["fueras", "fueses"],
        "model": "fueras",
        "why": "como si всегда + прошлый субхунтив: como si fueras millonario.",
        "hint": "После «как будто» — имперфект субхунтива от ser → fueras (или fueses) 🙂"
      },
      {
        "type": "gap",
        "q": "No aceptaré ___ me paguen más. <i style='opacity:.6'>разве что (если только не)</i>",
        "accept": ["a no ser que", "a menos que"],
        "model": "a no ser que",
        "why": "«Разве что / если только не» + субхунтив (paguen): a no ser que me paguen más.",
        "hint": "«Разве что» вводит исключение-условие с субхунтивом paguen 🙂"
      },
      {
        "type": "gap",
        "q": "Cuando ___, te llamaré. <i style='opacity:.6'>когда закончу — terminar, о будущем</i>",
        "accept": ["termine"],
        "model": "termine",
        "why": "cuando о будущем → субхунтив: cuando termine, te llamaré.",
        "hint": "«Когда закончу» о будущем — субхунтив termine, не будущее terminaré 🙂"
      },
      {
        "type": "gap",
        "q": "Habrá que ___ todo el trabajo otra vez. <i style='opacity:.6'>сделать заново = re + hacer</i>",
        "accept": ["rehacer"],
        "model": "rehacer",
        "why": "Приставка re- = «заново»: rehacer — «переделать».",
        "hint": "«Переделать» строится приставкой re- от hacer 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я бы поступил так же.",
        "accept": ["yo habría hecho lo mismo", "yo habria hecho lo mismo", "habría hecho lo mismo", "habria hecho lo mismo"],
        "model": "Yo habría hecho lo mismo.",
        "why": "Гипотеза о прошлом → condicional compuesto: habría hecho lo mismo.",
        "hint": "«Поступил бы» о прошлой ситуации — habría + hecho, не простое haría 🙂"
      },
      {
        "type": "trRE",
        "ru": "Даю тебе ключ, чтобы ты вошёл.",
        "accept": ["te doy la llave para que entres", "te doy la llave para que puedas entrar"],
        "model": "Te doy la llave para que entres.",
        "why": "Цель при разных лицах → para que + субхунтив: para que entres.",
        "hint": "«Чтобы ты вошёл» — новое лицо, значит para que + субхунтив entres 🙂"
      },
      {
        "type": "trRE",
        "ru": "Какой вкусный кофе!",
        "accept": ["¡qué rico está el café!", "qué rico está el café", "que rico esta el cafe", "¡que rico esta el cafe", "¡qué rico está el café", "qué rico está el café!"],
        "model": "¡Qué rico está el café!",
        "why": "Вкус в моменте → estar: ¡qué rico está el café! (ser rico означало бы «богатый»).",
        "hint": "«Как вкусно (сейчас)» — это estar; ser rico поменяло бы смысл на «богатый» 🙂"
      },
      {
        "type": "trRE",
        "ru": "Если бы у меня было больше времени, я бы читал больше.",
        "accept": ["si tuviera más tiempo leería más", "si tuviera mas tiempo leeria mas", "si tuviese más tiempo leería más", "si tuviese mas tiempo leeria mas", "si yo tuviera más tiempo leería más"],
        "model": "Si tuviera más tiempo, leería más.",
        "why": "Нереальное настоящее: si tuviera → leería más.",
        "hint": "«Было бы время — читал бы»: si + имперфект субхунтива, ответ в condicional 🙂"
      },
      {
        "type": "trER",
        "en": "Si hubieras venido, la habrías visto.",
        "accept": ["если бы ты пришёл ты бы её увидел", "если бы ты пришла ты бы её увидела", "если бы ты пришёл то увидел бы её", "пришёл бы ты и увидел бы её", "если бы ты пришёл ты бы увидел её"],
        "model": "Если бы ты пришёл, ты бы её увидел.",
        "why": "Нереальное прошлое: hubieras venido → la habrías visto; по-русски двойное «бы».",
        "hint": "Обе части с «бы»: «пришёл бы — увидел бы» 🙂"
      },
      {
        "type": "trER",
        "en": "Dijo que me llamaría al día siguiente.",
        "accept": ["он сказал что позвонит мне на следующий день", "она сказала что позвонит мне на следующий день", "он сказал что позвонит мне назавтра", "сказал что позвонит мне на следующий день", "он сказал что мне позвонит на следующий день"],
        "model": "Он сказал, что позвонит мне на следующий день.",
        "why": "Косвенная речь в прошлом: futuro → condicional (llamaría), mañana → al día siguiente.",
        "hint": "llamaría здесь «позвонит» из прошлого; al día siguiente — сдвинутое «завтра» 🙂"
      },
      {
        "type": "trER",
        "en": "La casa es bonita; sin embargo, está lejos del centro.",
        "accept": ["дом красивый однако он далеко от центра", "дом красивый но он далеко от центра", "дом красивый тем не менее он далеко от центра", "дом красивый однако далеко от центра", "дом красивый однако находится далеко от центра"],
        "model": "Дом красивый, однако он далеко от центра.",
        "why": "sin embargo — контраст «однако», а не следствие.",
        "hint": "sin embargo вводит возражение — по-русски «однако / тем не менее» 🙂"
      },
      {
        "type": "order",
        "answer": "quería que vinieras más temprano",
        "accept": ["quería que vinieras más temprano", "queria que vinieras mas temprano"],
        "hintRu": "Собери: «Я хотел, чтобы ты пришёл пораньше.»",
        "why": "Прошлое сверху (quería) → имперфект субхунтива снизу (vinieras).",
        "hint": "quería que + глагол на -ras + «пораньше»; согласуй наклонение с прошлым 🙂"
      },
      {
        "type": "order",
        "answer": "me preguntó si podía ayudarlo",
        "accept": ["me preguntó si podía ayudarlo", "me pregunto si podia ayudarlo"],
        "hintRu": "Собери: «Он спросил, могу ли я ему помочь.» (в прошлом)",
        "why": "Косвенный вопрос «ли» → si; время съезжает в имперфект: me preguntó si podía.",
        "hint": "«Спросил, могу ли я…» — si + прямой порядок, глагол в имперфект podía 🙂"
      },
      {
        "type": "order",
        "answer": "hablo alto con el fin de que me oigan",
        "accept": ["hablo alto con el fin de que me oigan"],
        "hintRu": "Собери: «Говорю громко, чтобы меня слышали.»",
        "why": "Финальный союз con el fin de que + субхунтив (oigan).",
        "hint": "con el fin de que всегда с субхунтивом; «чтобы меня слышали» → me oigan 🙂"
      },
      {
        "type": "match",
        "q": "Соедини форму субхунтива с тем, что она выражает.",
        "pairs": [
          ["venga", "настоящее / будущее"],
          ["haya venido", "совершённое к настоящему"],
          ["viniera", "«бы» о прошлом"],
          ["hubiera venido", "«бы» о давнем прошлом"],
          ["como si viniera", "как будто сейчас"]
        ],
        "why": "Настоящее/будущее → venga / haya venido; прошлое → viniera / hubiera venido; como si — всегда прошлый субхунтив.",
        "hint": "Спроси: сейчас или уже совершилось? реально или «бы»? — форма подскажет 🙂"
      },
      {
        "type": "match",
        "q": "Соедини условие с его типом.",
        "pairs": [
          ["si llueve, me quedo", "реальное условие"],
          ["si tuviera tiempo, iría", "нереальное о настоящем"],
          ["si hubiera sabido, habría venido", "нереальное о прошлом"],
          ["si hubiera estudiado, ahora sería médico", "смешанное"],
          ["a menos que llueva", "условие-исключение"]
        ],
        "why": "Тип виден по временам: presente → реальное; imperf subj → настоящее нереальное; pluscuamperf → прошлое; mixto — прошлое + сейчас.",
        "hint": "Смотри, есть ли «бы» и о каком времени речь 🙂"
      },
      {
        "type": "describe",
        "prompt": "Изложи короткий аргумент (3–4 предложения): выскажи мнение, приведи гипотезу через si… и передай чужие слова. Используй коннекторы (por un lado, sin embargo, de ahí que…), si tuviera / hubiera… и dijo que… / me pidió que…",
        "keywords": ["por un lado", "por otro", "sin embargo", "de ahí que", "de ahi que", "si tuviera", "si hubiera", "dijo que", "me pidió que", "me pidio que", "por lo tanto", "no creo que"],
        "minWords": 12,
        "model": "Por un lado, aprender idiomas abre puertas; por otro, exige constancia. Si tuviera más tiempo, estudiaría cada día; de ahí que recomiende empezar ya. Un profesor me dijo que lo esencial era practicar, y me pidió que no fallara ni un día.",
        "why": "Хороший аргумент связывает факты (индикатив), гипотезу (si + субхунтив / condicional) и пересказ (косвенная речь).",
        "hint": "Собери три слоя: коннектор + гипотеза si… + чужие слова dijo que… / me pidió que… 🙂"
      },
      {
        "type": "describe",
        "prompt": "Напиши мини-эссе (3–4 предложения) с твоим мнением по любой теме: тезис, довод и вывод. Используй sostengo que…, de ahí que + субхунтив и en definitiva.",
        "keywords": ["sostengo que", "creo que", "por un lado", "por otro", "de ahí que", "de ahi que", "en definitiva", "si tuviera", "por lo tanto", "según", "segun"],
        "minWords": 12,
        "model": "Sostengo que leer cada día cambia la forma de pensar. Por un lado, amplía el vocabulario; por otro, entrena la paciencia. Hay quien lo abandona pronto; de ahí que convenga empezar poco a poco. En definitiva, si tuviera que dar un consejo, diría que la constancia importa más que el talento.",
        "why": "Аргументативное эссе: тезис (sostengo que + индикатив), доводы через коннекторы, оценка через de ahí que + субхунтив, вывод en definitiva.",
        "hint": "Тезис → доводы (por un lado… por otro) → вывод (en definitiva); оценку вводи через de ahí que + субхунтив 🙂"
      }
    ]
  }
};

/* ===== helpers ===== */
