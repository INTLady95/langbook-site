/* Spanish C1 — level config + 30-day plan (COURSE). EXAMS filled by next agent.
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'C1',
  course:'es-c1',
  pkey:'langbook-es-c1-progress',
  preview:false,
  finalNote:'Это твоя победа 💛 Полный уровень Español C1 — позади. Горжусь тобой!',
  speech:'es-ES',
  langPo:'по-испански',
  langNa:'испанский',
  langAdj:'испанское',
  phIn:'en español…'
};

const COURSE = [
  {wn:'01', wt:'Неделя 1 — Выделять и подчёркивать: relieve, foco y los valores de «se»', days:[
    {n:1,t:'То, что мне нужно, — это…',p:'Construcciones de relieve I'},
    {n:2,t:'Именно он это сделал',p:'Copulativas enfáticas: fue X quien'},
    {n:3,t:'Сколько же всего!',p:'Exclamativas y ponderativas'},
    {n:4,t:'Порядок слов и акцент',p:'Orden de palabras, dislocación y clíticos'},
    {n:5,t:'У меня разбилось',p:'El se involuntario o accidental'},
    {n:6,t:'Все лица одного «se»',p:'Los valores de se'},
    {n:7,t:'🔄 Повторение №1',p:'Repaso 1: relieve, foco y se'}
  ]},
  {wn:'02', wt:'Неделя 2 — Безличные формы глагола: gerundio, participio, infinitivo', days:[
    {n:8,t:'Делая, зная, понимая',p:'El gerundio adverbial'},
    {n:9,t:'Закончив — ушли?',p:'El gerundio absoluto y sus límites'},
    {n:10,t:'Сказав это…',p:'El participio absoluto'},
    {n:11,t:'При, для, по — с инфинитивом',p:'El infinitivo: compuesto y preposicional'},
    {n:12,t:'Выходит примерно так',p:'Perífrasis con matiz'},
    {n:13,t:'Сжать фразу',p:'Condensar con formas no personales'},
    {n:14,t:'Повторение №2',p:'Repaso 2: formas no personales'}
  ]},
  {wn:'03', wt:'Неделя 3 — Гипотеза и уступка тонко: condicionales, concesivas y subjuntivo fino', days:[
    {n:15,t:'Знай я раньше',p:'Condicionales avanzadas'},
    {n:16,t:'При условии, разве что',p:'Nexos condicionales finos'},
    {n:17,t:'Хоть и, несмотря на',p:'Concesivas cultas'},
    {n:18,t:'Что бы ни случилось',p:'La concesión reduplicada'},
    {n:19,t:'То, что ты пришёл…',p:'El subjuntivo fino I'},
    {n:20,t:'Оттенок меняет наклонение',p:'El subjuntivo fino II'},
    {n:21,t:'Повторение №3',p:'Repaso 3: hipótesis y concesión'}
  ]},
  {wn:'04', wt:'Неделя 4 — Дискурс, регистр и точное слово: hablar como un nativo culto', days:[
    {n:22,t:'То есть, иначе говоря',p:'Los marcadores de reformulación'},
    {n:23,t:'Более того, в сущности',p:'Marcar y concluir'},
    {n:24,t:'Смягчить и выбрать регистр',p:'Cortesía y atenuación'},
    {n:25,t:'Глаголы со своим предлогом',p:'El régimen preposicional'},
    {n:26,t:'Попасть в точку',p:'Colocaciones y locuciones'},
    {n:27,t:'Из одного слова — семья',p:'La formación de palabras'},
    {n:28,t:'Почти то, да не то',p:'Falsos amigos y precisión léxica'},
    {n:29,t:'Всё вместе: голос образованного носителя',p:'Integración del discurso C1'},
    {n:30,t:'Моя позиция по-испански',p:'Mi ensayo en español'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя C1 за плечами — и это уже совсем другой испанский. 25 заданий по всему, что мы разобрали: как выделять главное (lo que… es и fue X quien), как восхищаться (¡lo… que!, ¡la de… que!), как переставлять слова с клитик-повтором (A María la vi) и как снимать с себя вину через se (se me cayó). Не торопись — вслушивайся в оттенок. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Relieve: <b>Lo que</b> necesito <b>es</b> tiempo · ser смотрит на фокус: Lo que quiero <b>son</b> vacaciones",
      "<b>Fue X quien</b> (люди) · <b>cuando</b> (время) · <b>donde</b> (место) · <b>como</b> (образ) · ser копирует время: fue/es",
      "Ponderativas: ¡<b>Lo</b> difícil <b>que</b> es! · ¡<b>La de</b> veces <b>que</b>…! · mira que + индикатив · ¡vaya lío!",
      "Вынес дополнение — верни клитик: <b>A María la</b> vi · тема вперёд, рема в конец · Ni un euro tengo",
      "Случайность без вины: <b>se me</b> cayó · глагол смотрит на вещь: se me <b>rompió</b> / <b>rompieron</b>",
      "Значения <b>se</b>: рефлексив, взаимное, se lo (=le), pasiva refleja (se venden), impersonal (se vive)",
      "Повтори всё вместе: relieve, foco, ponderativas, dislocación и все лица se"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Lo que me molesta ___ las mentiras. <i style='opacity:.6'>враньё раздражает</i>",
        "opts": ["son", "es", "está", "están"],
        "answer": "son",
        "why": "Прожектор светит на фокус справа — «las mentiras» (мн.), и ser равняется на него: son. «Lo que» тебя не обманет.",
        "hint": "Связка смотрит не на «lo que», а на то, что справа: там одна вещь или много? 🙂"
      },
      {
        "type": "choice",
        "q": "___ ella quien llamó, no yo. <i style='opacity:.6'>именно она</i>",
        "opts": ["Fue", "Es", "Estuvo", "Fueron"],
        "answer": "Fue",
        "why": "Смысловой глагол в прошлом (llamó) — и связка в прошлом, единственное под «ella»: Fue. Estar тут не связка.",
        "hint": "Связка копирует время смыслового глагола и число фокуса: llamó — прошедшее, ella — одна 🙂"
      },
      {
        "type": "choice",
        "q": "Fue entonces ___ lo entendí todo. <i style='opacity:.6'>именно тогда</i>",
        "opts": ["cuando", "donde", "quien", "como"],
        "answer": "cuando",
        "why": "Фокус «entonces» — это время, а времени соответствует cuando (не donde/quien/como).",
        "hint": "Относительное слово выбирают по фокусу: здесь в центре момент времени ⏱️"
      },
      {
        "type": "choice",
        "q": "¡___ difícil que es este examen! <i style='opacity:.6'>до чего же трудный</i>",
        "opts": ["Lo", "Qué", "Cuánto", "Cómo"],
        "answer": "Lo",
        "why": "Степень признака строится через «lo + прилагательное + que»: ¡Lo difícil que es! «Qué… que / cuánto / cómo» тут не по норме.",
        "hint": "Формула степени зажимает прилагательное между словечком в начале и «que» перед глаголом 🙂"
      },
      {
        "type": "choice",
        "q": "¡___ de veces que te lo he dicho! <i style='opacity:.6'>сколько же раз</i>",
        "opts": ["La", "Las", "Lo", "Cuánta"],
        "answer": "La",
        "why": "Формула застыла в единственном: всегда «la de + сущ. + que», даже перед множественным (veces).",
        "hint": "Эта восклицательная формула не меняется по числу — открывается всегда одинаково 🙂"
      },
      {
        "type": "choice",
        "q": "A María ___ vi ayer en el mercado. <i style='opacity:.6'>Марию я видел</i>",
        "opts": ["la", "le", "lo", "se"],
        "answer": "la",
        "why": "Вынесенное прямое дополнение «a María» (жен.) требует клитик-повтор la: A María la vi.",
        "hint": "Дополнение вынесено вперёд — верни местоимение, согласованное с ним по роду (María — женщина) 🙂"
      },
      {
        "type": "choice",
        "q": "Se me ___ las llaves del coche. <i style='opacity:.6'>у меня сломались</i>",
        "opts": ["rompieron", "rompió", "rompí", "rompiste"],
        "answer": "rompieron",
        "why": "Подлежащее — «las llaves» (мн.), глагол согласуется с вещью: rompieron. «me» на число не влияет.",
        "hint": "В этой схеме глагол смотрит не на тебя, а на саму вещь — а ключей тут несколько 🔑"
      },
      {
        "type": "choice",
        "q": "___ me olvidó la cita. <i style='opacity:.6'>я забыл про встречу (само)</i>",
        "opts": ["Se", "Me", "A", "Le"],
        "answer": "Se",
        "why": "Схема случайности начинается с se: Se me olvidó… Порядок жёсткий — сначала se, потом me.",
        "hint": "У этой безвинной конструкции железный порядок: одно местоимение всегда идёт первым 🙂"
      },
      {
        "type": "choice",
        "q": "En esta agencia ___ pisos de lujo. <i style='opacity:.6'>продаются</i>",
        "opts": ["se venden", "se vende", "venden", "se venda"],
        "answer": "se venden",
        "why": "Pasiva refleja: «pisos» — подлежащее во множественном, глагол согласуется: se venden.",
        "hint": "Здесь «квартиры» — подлежащее: раз их много, и глагол во множественном; и не потеряй само se 🏢"
      },
      {
        "type": "choice",
        "q": "El libro ya ___ di a Juan. <i style='opacity:.6'>я ему его отдал</i>",
        "opts": ["se lo", "le lo", "lo le", "se le"],
        "answer": "se lo",
        "why": "«le» перед «lo» превращается в se: se lo di. Сочетания «le lo» в испанском нет.",
        "hint": "Когда «ему» встречает «его», первое местоимение меняет облик — «le lo» язык не выговаривает 🙂"
      },
      {
        "type": "gap",
        "q": "Lo que pasa ___ que no llego a tiempo. <i style='opacity:.6'>дело в том, что…</i>",
        "accept": ["es"],
        "model": "es",
        "why": "Даже перед «que» связка обязательна: lo que pasa es que… Без ser прожектор гаснет.",
        "hint": "Между «pasa» и «que» нужна связка ser в единственном — фокус тут целое предложение 🙂"
      },
      {
        "type": "gap",
        "q": "El coche ___ vendí sin pensarlo. <i style='opacity:.6'>машину я продал</i>",
        "accept": ["lo"],
        "model": "lo",
        "why": "«El coche» вынесено вперёд как тема — глаголу нужен клитик-повтор lo.",
        "hint": "Дополнение стоит впереди — верни местоимение по роду слова coche (м. р.) 🚗"
      },
      {
        "type": "gap",
        "q": "A María se ___ cayó el móvil. <i style='opacity:.6'>у Марии упал телефон</i>",
        "accept": ["le"],
        "model": "le",
        "why": "«У Марии» — это se + le: se le cayó. После se идёт местоимение лица (le для él/ella).",
        "hint": "«У неё» в схеме случайности — это se, а потом местоимение третьего лица 🙂"
      },
      {
        "type": "gap",
        "q": "___ ellos quienes lo hicieron. <i style='opacity:.6'>именно они это сделали</i>",
        "accept": ["fueron"],
        "model": "Fueron",
        "why": "Фокус во множественном (ellos) — связка тоже: Fueron ellos quienes…",
        "hint": "Число связка берёт с фокуса, а он тут во множественном 🙂"
      },
      {
        "type": "trRE",
        "ru": "То, что мне нужно, — это время.",
        "accept": ["lo que necesito es tiempo", "lo que yo necesito es tiempo", "lo que necesito es el tiempo"],
        "model": "Lo que necesito es tiempo.",
        "why": "Relieve: lo que + глагол + ser + фокус. Фокус «tiempo» в единственном → es.",
        "hint": "Подними «время» на сцену: lo que necesito + связка + сам фокус 🙂"
      },
      {
        "type": "trRE",
        "ru": "Именно она позвонила.",
        "accept": ["fue ella quien llamó", "fue ella quien llamo", "fue ella la que llamó", "fue ella la que llamo"],
        "model": "Fue ella quien llamó.",
        "why": "Copulativa enfática: fue + фокус-человек + quien/la que + глагол. Прошлое → fue.",
        "hint": "«Именно» не переводим словом — его несёт конструкция fue… quien 🙂"
      },
      {
        "type": "trRE",
        "ru": "У меня разбился стакан.",
        "accept": ["se me rompió el vaso", "se me rompio el vaso", "se me ha roto el vaso"],
        "model": "Se me rompió el vaso.",
        "why": "«У меня само» — se me; глагол согласуется с вещью (один vaso → rompió).",
        "hint": "Не бери вину: se, потом me, а глагол пусть смотрит на сам стакан 🥛"
      },
      {
        "type": "trER",
        "en": "¡Lo bien que canta!",
        "accept": ["как же хорошо она поёт", "как хорошо она поёт", "как же хорошо он поёт", "как хорошо он поёт", "как же она хорошо поёт", "до чего хорошо она поёт"],
        "model": "Как же хорошо она поёт!",
        "why": "«Lo + наречие + que» — восклицание о степени: до чего же хорошо (поёт).",
        "hint": "Это восторг о том, насколько хорошо, — начни с «как же…» 🙂"
      },
      {
        "type": "trER",
        "en": "Se venden pisos.",
        "accept": ["продаются квартиры", "квартиры продаются", "продаются квартиры.", "продаётся жильё"],
        "model": "Продаются квартиры.",
        "why": "Pasiva refleja: «se venden» + мн. подлежащее — по-русски «продаются».",
        "hint": "Это объявление: жильё выставлено на продажу 🏢"
      },
      {
        "type": "order",
        "answer": "fue entonces cuando lo entendí",
        "accept": ["fue entonces cuando lo entendí", "fue entonces cuando lo entendi"],
        "hintRu": "Собери: «Именно тогда я всё понял.»",
        "why": "Связка в прошлом (fue) + фокус-время (entonces) + cuando + остаток.",
        "hint": "Начни со связки, затем фокус-время, затем cuando и глагол ⏱️"
      },
      {
        "type": "order",
        "answer": "se me olvidó el paraguas",
        "accept": ["se me olvidó el paraguas", "se me olvido el paraguas", "el paraguas se me olvidó", "el paraguas se me olvido"],
        "hintRu": "Собери: «Я забыл зонт.» (само забылось)",
        "why": "Se involuntario: se + me + глагол под вещь + сама вещь.",
        "hint": "Схема случайности: se, потом me, глагол под вещь и сам зонт ☂️"
      },
      {
        "type": "match",
        "q": "Соедини восклицание с переводом.",
        "pairs": [
          ["¡Lo caro que es!", "до чего же дорого"],
          ["¡La de veces que llamé!", "сколько же раз я звонил"],
          ["¡Vaya casualidad!", "надо же, какое совпадение"],
          ["Mira que eres testarudo", "ну до чего ты упрямый"],
          ["¡Cómo llueve!", "ну и льёт"]
        ],
        "why": "«lo… que» — про степень, «la de… que» — про количество, «vaya» — про досаду, «mira que» — упрёк.",
        "hint": "Опирайся на конструкцию: степень, количество, восклицание-досада или упрёк 🙂"
      },
      {
        "type": "match",
        "q": "Соедини фразу с её значением.",
        "pairs": [
          ["Se lava las manos", "моет себе руки"],
          ["Se abrazan al verse", "обнимаются (друг друга)"],
          ["Se venden pisos", "продаются квартиры"],
          ["Aquí se vive bien", "здесь хорошо живётся"],
          ["Se lo dije a él", "я ему это сказал"]
        ],
        "why": "Различай лица se: на себя, друг друга, пассив (согласуется), безличное (ед.), se вместо «ему».",
        "hint": "Каждое se — своя роль: рефлексив, взаимное, пассив, безличное или «ему» 🙂"
      },
      {
        "type": "describe",
        "prompt": "Напиши 1–2 предложения о том, что для тебя по-настоящему важно, и выдели это конструкцией relieve (lo que… es / lo que me importa es…).",
        "keywords": ["lo que", "lo que me importa", "lo que necesito", "lo que quiero", "lo que cuenta", "es", "son"],
        "minWords": 8,
        "model": "Lo que de verdad me importa es la honestidad. Lo que necesito ahora son unas vacaciones.",
        "why": "Хороший ответ выделяет главное через «lo que… es/son» и согласует ser с фокусом по числу.",
        "hint": "Подними один элемент на сцену: lo que… + ser + фокус; если фокус во множественном — ставь son 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи в 1–2 предложениях о какой-нибудь оплошности, случившейся «не по твоей вине». Используй схему se + me (se me cayó, se me olvidó, se me rompió…).",
        "keywords": ["se me", "se me cayó", "se me cayo", "se me olvidó", "se me olvido", "se me rompió", "se me rompio", "se nos"],
        "minWords": 8,
        "model": "Esta mañana se me cayó el móvil y se me rompió la pantalla. Además, se me olvidó la cita con el médico.",
        "why": "Хороший ответ снимает вину схемой se + me и согласует глагол с вещью (cayó/rompió/olvidaron).",
        "hint": "Не бери вину на себя: se, потом me, а глагол пусть смотрит на саму вещь 🙂"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя — про безличные формы глагола, самое элегантное оружие C1. 25 заданий: герундий образа действия и уступки (aun sabiéndolo), его пределы (не «упал, сломав»), причастный оборот (Terminada la reunión), инфинитив составной, с артиклем и с предлогом (de haberlo sabido, el fumar, al llegar) и перифразы с полутоном (viene a ser, llegó a…). Наберёшь 80% — открою Неделю 3. 💛",
    "review": [
      "Герундий = «как»: lo dijo <b>sonriendo</b> · уступка <b>aun</b> sabiéndolo (без ударения!) ≠ aún «ещё»",
      "Абсолютный герундий: <b>Llegando yo</b>, empezó · но не «потом»: se cayó <b>y</b> se rompió, не rompiéndose",
      "Причастный оборот: <b>Terminada</b> la reunión (согласуется!) · Dicho esto · patatas <b>fritas</b>, но he <b>freído</b>",
      "Инфинитив: <b>de haberlo sabido</b> (прошлое-условие) · <b>el</b> fumar (м. р.) · <b>al</b> llegar (когда)",
      "Перифразы: <b>viene a</b> costar (≈примерно) · <b>llegó a</b> ser · <b>no llegué a</b> verlo · <b>dar por</b> hecho",
      "Сжать придаточное: cuando terminó → <b>Terminada</b>; si lo hubiera sabido → <b>De haberlo sabido</b>",
      "Собери всё: герундий, причастие, инфинитив и перифразы вместе"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Se aprende ___. <i style='opacity:.6'>учишься, разговаривая</i>",
        "opts": ["hablando", "a hablando", "con hablando", "hablar"],
        "answer": "hablando",
        "why": "Способ действия — чистый герундий, без предлога: hablando. «a/con + герундий» не бывает.",
        "hint": "«Как именно?» отвечает одной -ndo-формой — без всяких предлогов перед ней 🙂"
      },
      {
        "type": "choice",
        "q": "___ sabiéndolo, no dijo nada. <i style='opacity:.6'>даже зная это</i>",
        "opts": ["Aun", "Aún", "Aunque", "Aun que"],
        "answer": "Aun",
        "why": "«Даже» + герундий — это aun без ударения. «Aún» значит «ещё» (todavía), «aunque» просит личный глагол.",
        "hint": "Здесь смысл «даже», а не «ещё» — от этого зависит, ставить ли чёрточку над словом ✍️"
      },
      {
        "type": "choice",
        "q": "Se cayó ___ la pierna. <i style='opacity:.6'>упал и сломал ногу</i>",
        "opts": ["y se rompió", "rompiéndose", "rompiendo", "y rompiéndose"],
        "answer": "y se rompió",
        "why": "Перелом — следствие, идёт «потом»; герундий последующего действия запрещён — соединяй «y».",
        "hint": "Одно действие стало причиной другого «а потом» — а герундий такого не умеет; нужен союз 🙂"
      },
      {
        "type": "choice",
        "q": "Una caja ___ documentos importantes. <i style='opacity:.6'>коробка, в которой лежат…</i>",
        "opts": ["que contiene", "conteniendo", "conteniente", "contener"],
        "answer": "que contiene",
        "why": "Признак предмета — относительное «que contiene», а не герундий-определение (его в испанском нет).",
        "hint": "Чтобы навесить признак на предмет, испанский берёт относительное словечко, а не -ndo-форму 🙂"
      },
      {
        "type": "choice",
        "q": "___ la reunión, todos se marcharon. <i style='opacity:.6'>когда собрание закончилось</i>",
        "opts": ["Terminada", "Terminando", "Terminado", "Terminar"],
        "answer": "Terminada",
        "why": "«reunión» женского рода — причастие согласуется: Terminada. Герундий «terminando» не значит «после того как».",
        "hint": "Оборот «после того как закончилось» — это причастие, и оно подстраивается под род слова reunión 🙂"
      },
      {
        "type": "choice",
        "q": "Me encantan las patatas ___. <i style='opacity:.6'>жареная картошка</i>",
        "opts": ["fritas", "freídas", "friendo", "freídos"],
        "answer": "fritas",
        "why": "Как определение работает только неправильная форма: patatas fritas. «Freído» оставь для «he freído».",
        "hint": "У этого глагола две формы причастия: как прилагательное к существительному — короткая 🍟"
      },
      {
        "type": "choice",
        "q": "___ sabido, no habría venido. <i style='opacity:.6'>знал бы я это</i>",
        "opts": ["De haberlo", "De había", "Si haberlo", "De habiendo"],
        "answer": "De haberlo",
        "why": "Книжное прошлое-условие — de + составной инфинитив: de haberlo sabido. После «de» — инфинитив, не личная форма.",
        "hint": "Сжатое «если бы (в прошлом)» строится на инфинитиве haber с местоимением-хвостиком 🙂"
      },
      {
        "type": "choice",
        "q": "___ fumar perjudica la salud. <i style='opacity:.6'>курение вредит</i>",
        "opts": ["El", "La", "Lo", "Un"],
        "answer": "El",
        "why": "Субстантивированный инфинитив всегда мужского рода: el fumar.",
        "hint": "Инфинитив-существительное берёт всегда один и тот же артикль по роду — мужской 🙂"
      },
      {
        "type": "choice",
        "q": "Con esfuerzo, llegó ___ ser director. <i style='opacity:.6'>дослужился до директора</i>",
        "opts": ["a", "—", "de", "por"],
        "answer": "a",
        "why": "Кульминацию даёт «llegar a + инфинитив»: llegó a ser. Без «a» это просто «пришёл».",
        "hint": "«Дойти до вершины» — это llegar плюс маленький предлог перед вторым глаголом 🙂"
      },
      {
        "type": "choice",
        "q": "Doy por ___ que vendrás. <i style='opacity:.6'>считаю само собой разумеющимся</i>",
        "opts": ["hecho", "hacer", "haciendo", "hechos"],
        "answer": "hecho",
        "why": "«dar por» берёт причастие: dar por hecho. Инфинитив/герундий тут не идут.",
        "hint": "После «dar por» идёт причастие — застывшая форма на -do, «hecho» 🙂"
      },
      {
        "type": "gap",
        "q": "Lo dijo ___ y luego se marchó. <i style='opacity:.6'>сказал это, улыбаясь</i>",
        "accept": ["sonriendo"],
        "model": "sonriendo",
        "why": "Образ действия — герундий: sonriendo (без предлога).",
        "hint": "«Как он это сказал?» — ответь одной -ndo-формой от «улыбаться» 🙂"
      },
      {
        "type": "gap",
        "q": "___ llegar a casa, me di cuenta de todo. <i style='opacity:.6'>когда я пришёл</i>",
        "accept": ["al"],
        "model": "Al",
        "why": "«Когда/при» + инфинитив — это al: al llegar.",
        "hint": "Сожми «когда пришёл» в два слова: маленький предлог-артикль + инфинитив 🙂"
      },
      {
        "type": "gap",
        "q": "No llegué ___ verlo antes de que se fuera. <i style='opacity:.6'>так и не увидел</i>",
        "accept": ["a"],
        "model": "a",
        "why": "«Так и не» — no llegar a + инфинитив; предлог «a» обязателен.",
        "hint": "«Так и не успел» держится на том же предлоге, что и «дойти до» 🙂"
      },
      {
        "type": "gap",
        "q": "___ esto, se marchó sin mirar atrás. <i style='opacity:.6'>сказав это</i>",
        "accept": ["dicho"],
        "model": "Dicho",
        "why": "Застывшая формула-причастие: Dicho esto…",
        "hint": "Начни оборот причастием от «decir» — короткой формой, что открывает фразу «___ это» 🙂"
      },
      {
        "type": "trRE",
        "ru": "Даже зная это, он промолчал.",
        "accept": ["aun sabiéndolo, calló", "aun sabiendolo callo", "aun sabiéndolo calló", "aun sabiendolo, calló", "aun sabiéndolo se calló", "aun sabiendolo se callo"],
        "model": "Aun sabiéndolo, calló.",
        "why": "Уступка герундием: aun (без ударения) + герундий с клитиком.",
        "hint": "«Даже» — это aun без ударения, дальше герундий с приклеенным «-lo» 🙂"
      },
      {
        "type": "trRE",
        "ru": "Знал бы я это, я бы не пришёл.",
        "accept": ["de haberlo sabido, no habría venido", "de haberlo sabido no habria venido", "de haberlo sabido no habría venido", "de haberlo sabido, no habría venido"],
        "model": "De haberlo sabido, no habría venido.",
        "why": "Прошлое-условие: de + haber + participio; следствие — habría + participio.",
        "hint": "Сожми «если бы знал» в de + haberlo sabido, а «не пришёл бы» — в habría venido 🙂"
      },
      {
        "type": "trRE",
        "ru": "Когда собрание закончилось, мы вышли.",
        "accept": ["terminada la reunión, salimos", "terminada la reunion salimos", "terminada la reunión salimos", "acabada la reunión, salimos", "acabada la reunion salimos", "una vez terminada la reunión, salimos"],
        "model": "Terminada la reunión, salimos.",
        "why": "Причастный оборот: причастие согласуется с la reunión (жен.) → terminada.",
        "hint": "Замени «когда закончилось» причастием, согласованным с reunión по роду 🙂"
      },
      {
        "type": "trER",
        "en": "Estando así las cosas, me fui.",
        "accept": ["раз дела обстояли так, я ушёл", "раз дела обстояли так я ушел", "поскольку дела обстояли так, я ушёл", "при таком раскладе я ушёл", "раз всё было так, я ушёл", "раз дела шли так, я ушёл"],
        "model": "Раз дела обстояли так, я ушёл.",
        "why": "Абсолютный герундий «estando así las cosas» несёт причину — «раз/поскольку так».",
        "hint": "Герундий тут значит причину: «раз/поскольку дела обстояли так…» 🙂"
      },
      {
        "type": "trER",
        "en": "Viene a ser lo mismo.",
        "accept": ["по сути, это одно и то же", "по сути это одно и то же", "это по сути одно и то же", "выходит одно и то же", "это почти одно и то же", "это сводится к тому же"],
        "model": "По сути, это одно и то же.",
        "why": "Перифраза «venir a + инфинитив» смягчает: «по сути / примерно» одно и то же.",
        "hint": "«Viene a ser» — это мягкое «по сути / выходит» одно и то же 🙂"
      },
      {
        "type": "order",
        "answer": "estando enfermo no fue",
        "accept": ["estando enfermo no fue", "estando enfermo, no fue"],
        "hintRu": "Собери: «Будучи болен, он не пошёл.» (причина)",
        "why": "Причину сожми в герундий estando + прилагательное, затем главное действие.",
        "hint": "Причину передай герундием от «estar» + прилагательное, дальше — главное 🙂"
      },
      {
        "type": "order",
        "answer": "al terminar salió",
        "accept": ["al terminar salió", "al terminar salio"],
        "hintRu": "Собери: «Закончив, он вышел.» (сначала закончил)",
        "why": "«Потом» не для герундия: последовательность — al + инфинитив.",
        "hint": "Чтобы показать «сначала — потом», бери al + инфинитив, а не герундий 🙂"
      },
      {
        "type": "match",
        "q": "Соедини форму с её значением.",
        "pairs": [
          ["al llegar", "когда/при приходе"],
          ["de haberlo sabido", "если бы знал (в прошлом)"],
          ["el fumar", "курение"],
          ["por llegar tarde", "из-за опоздания"],
          ["sin despedirse", "не попрощавшись"]
        ],
        "why": "Предлог/артикль перед инфинитивом задаёт смысл: время, условие, существительное, причина, образ.",
        "hint": "Смотри на предлог или артикль перед инфинитивом — он и задаёт смысл 🙂"
      },
      {
        "type": "match",
        "q": "Соедини перифразу с её оттенком.",
        "pairs": [
          ["viene a costar 20 euros", "стоит примерно 20 евро"],
          ["llegó a ser director", "дослужился до директора"],
          ["no llegué a verlo", "так и не увидел его"],
          ["doy por hecho", "считаю само собой разумеющимся"],
          ["acabó por aceptar", "в итоге согласился"]
        ],
        "why": "Каждая перифраза добавляет свой оттенок: приблизительность, кульминация, «так и не», итог.",
        "hint": "У каждой перифразы свой полутон: примерно, вершина, «так и не», вывод 🙂"
      },
      {
        "type": "describe",
        "prompt": "Опиши в 1–2 предложениях, как ты чему-то учишься или что-то делаешь, используя герундий образа действия (…hablando, practicando, escuchando…).",
        "keywords": ["hablando", "practicando", "escuchando", "haciendo", "leyendo", "estudiando", "repitiendo", "viendo"],
        "minWords": 8,
        "model": "Aprendo idiomas escuchando música y hablando con nativos. Practicando cada día, mejoro rápido.",
        "why": "Хороший ответ показывает способ через -ndo-форму, без предлога перед ней.",
        "hint": "Отвечай на «как именно?» -ndo-формами; можно и в начале как условие (practicando, mejoras) 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи в 1–2 предложениях о последовательности событий, сжав её безличными формами: причастным оборотом (Terminada…, Dicho esto…) или al/después de + инфинитив.",
        "keywords": ["terminada", "acabada", "dicho esto", "al terminar", "al llegar", "después de", "despues de", "una vez", "hecho esto"],
        "minWords": 8,
        "model": "Terminada la jornada, recogí mis cosas. Una vez cerrada la oficina y tras despedirme de todos, volví a casa.",
        "why": "Хороший ответ заменяет придаточное причастным оборотом (согласованным) или al/después de + инфинитив.",
        "hint": "Сожми «когда закончилось…» в причастие (согласуй по роду!) или возьми al/después de + инфинитив 🙂"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя — про тонкие оттенки: гипотезу и уступку так, как их строит образованный носитель. 25 заданий: условие без «si» (de seguir así, como no vengas), тонкие союзы (siempre y cuando, a no ser que), книжные и удвоенные уступки (si bien, por más que, pase lo que pase) и тонкий субхунтив, что сдвигает смысл (el hecho de que, no es que, comprendo que estés). Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Условие без si: <b>de</b> seguir así · <b>como</b> no vengas (+субхунтив, угроза) · Estudiando, apruebas · Hazlo y verás",
      "Тонкие союзы: <b>siempre y cuando</b>, <b>a condición de que</b>, <b>con tal de que</b>, <b>a no ser que</b> — всегда субхунтив",
      "Книжная уступка: <b>si bien</b> (+индикатив) · <b>pese a</b> / a pesar de · <b>por más que</b> (+субхунтив) · y eso que",
      "Удвоение: <b>pase lo que pase</b>, digas lo que digas, sea como sea · por muy listo que seas",
      "Факт под оценку: <b>el hecho de que</b> + субхунтив · Que digas eso me duele · <b>no es que</b> + субхунтив",
      "Наклонение сдвигает смысл: comprendo que <b>estés</b> (сочувствую) vs <b>estás</b> (констатирую)",
      "Собери гипотезы и уступки вместе; тонкий субхунтив выбирай по функции"
    ],
    "q": [
      {
        "type": "choice",
        "q": "___ seguir así, vas a fracasar. <i style='opacity:.6'>если так продолжишь</i>",
        "opts": ["De", "Si de", "Como", "Por"],
        "answer": "De",
        "why": "Условие без «si» — de + инфинитив: De seguir así… «Si de» невозможно, «por seguir» = причина.",
        "hint": "Книжное «если» здесь прячется в предлоге перед инфинитивом seguir 🙂"
      },
      {
        "type": "choice",
        "q": "Como no ___ a la reunión, me enfadaré. <i style='opacity:.6'>если не придёшь (угроза)</i>",
        "opts": ["vengas", "vienes", "vendrás", "venir"],
        "answer": "vengas",
        "why": "«Como» как угроза требует субхунтив: como no vengas. С индикативом это звучало бы как причина.",
        "hint": "После предупреждающего «como» глагол уходит в субхунтив — иначе выйдет причина, не угроза ⚠️"
      },
      {
        "type": "choice",
        "q": "Te lo presto siempre y cuando me lo ___. <i style='opacity:.6'>при условии, что вернёшь</i>",
        "opts": ["devuelvas", "devuelves", "devolverás", "devolver"],
        "answer": "devuelvas",
        "why": "«Siempre y cuando» — условный союз, всегда с субхунтивом: devuelvas.",
        "hint": "Этот союз условия неизменно тянет за собой субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "No iré, a no ser que me lo ___ tú. <i style='opacity:.6'>разве что попросишь</i>",
        "opts": ["pidas", "pides", "pedirás", "pedir"],
        "answer": "pidas",
        "why": "«A no ser que» (исключение) → субхунтив: pidas.",
        "hint": "«Разве что» отсекает исключение — и глагол при нём уходит в субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "Si bien ___ caro, merece la pena. <i style='opacity:.6'>хотя это дорого</i>",
        "opts": ["es", "sea", "fuera", "siendo"],
        "answer": "es",
        "why": "«Si bien» указывает на реальный факт → индикатив: es. Это книжное «хотя», но с изъявительным.",
        "hint": "«Si bien» подаёт реальный факт, а не гипотезу — значит обычное изъявительное 🙂"
      },
      {
        "type": "choice",
        "q": "Por más que ___, no cambiaré de idea. <i style='opacity:.6'>как ни настаивай</i>",
        "opts": ["insistas", "insistes", "insistirás", "insistir"],
        "answer": "insistas",
        "why": "«Por más que» в значении «как ни» → субхунтив: insistas.",
        "hint": "«Как ни…» с допущением тянет субхунтив — ты ведь ещё не признаёшь факт 🙂"
      },
      {
        "type": "choice",
        "q": "___ lo que pase, no te voy a dejar. <i style='opacity:.6'>что бы ни случилось</i>",
        "opts": ["Pase", "Pasa", "Pasará", "Pasando"],
        "answer": "Pase",
        "why": "Удвоенная уступка застыла в субхунтиве: pase lo que pase. Индикатив «pasa lo que pasa» = покорный факт.",
        "hint": "Идиома удваивает один глагол в субхунтиве — «что бы ни» тут не отрицание, а конструкция 🙂"
      },
      {
        "type": "choice",
        "q": "Por muy ___ que seas, aquí no basta. <i style='opacity:.6'>как бы умён ты ни был</i>",
        "opts": ["listo", "listo que", "que listo", "muy listo"],
        "answer": "listo",
        "why": "Прилагательное идёт сразу за «muy»: por muy listo que seas. «Por muy que» само не стоит.",
        "hint": "Схема жёсткая: por muy + прилагательное + que + субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "El hecho de que ___ no cambia nada. <i style='opacity:.6'>то, что идёт дождь</i>",
        "opts": ["llueva", "llueve", "lloverá", "lloviendo"],
        "answer": "llueva",
        "why": "«El hecho de que» подаёт факт для оценки → субхунтив: llueva. Индикатив — это калька с русского «то, что».",
        "hint": "Когда факт вынесен как тема для оценки, а не как новость, испанский берёт субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "Comprendo que ___ cansado; descansa un poco. <i style='opacity:.6'>понимаю и сочувствую</i>",
        "opts": ["estés", "estás", "estarás", "estando"],
        "answer": "estés",
        "why": "Чтобы выразить принятие и сочувствие — субхунтив: comprendo que estés. Индикатив estás лишь холодно фиксирует факт.",
        "hint": "Ты не просто отмечаешь факт, а принимаешь и сочувствуешь — и это переключает глагол в субхунтив 💛"
      },
      {
        "type": "gap",
        "q": "Hazlo ___ verás. <i style='opacity:.6'>сделай — и увидишь (условие)</i>",
        "accept": ["y"],
        "model": "y",
        "why": "Замаскированное условие: императив + y + результат. «Y» тут шарнир («если сделаешь, увидишь»).",
        "hint": "Между приказом и обещанным результатом стоит крошечный союз-шарнир 🙂"
      },
      {
        "type": "gap",
        "q": "De no ___ por ti, me habría perdido. <i style='opacity:.6'>если бы не ты</i>",
        "accept": ["ser"],
        "model": "ser",
        "why": "«Если бы не…» — de no ser por…; после «de no» идёт инфинитив ser.",
        "hint": "Спасительное условие «если бы не ты» строится на инфинитиве ser с предлогом por 🙂"
      },
      {
        "type": "gap",
        "q": "Cueste lo que ___, lo terminaré. <i style='opacity:.6'>чего бы это ни стоило</i>",
        "accept": ["cueste"],
        "model": "cueste",
        "why": "Удвоение застыло в субхунтиве: cueste lo que cueste.",
        "hint": "Тот же глагол повторяется во второй половине — и оба раза в субхунтиве 🙂"
      },
      {
        "type": "gap",
        "q": "No es que no ___, es que no puedo. <i style='opacity:.6'>дело не в том, что не хочу</i>",
        "accept": ["quiera"],
        "model": "quiera",
        "why": "«No es que» отрицает трактовку → субхунтив quiera. Истинная причина после «es que» — индикатив (puedo).",
        "hint": "Отвергнутая причина уходит в субхунтив, а настоящая — после «es que» — в индикатив 🙂"
      },
      {
        "type": "trRE",
        "ru": "Знай я это раньше, я бы пришёл.",
        "accept": ["de haberlo sabido, habría venido", "de haberlo sabido habria venido", "de haberlo sabido habría venido", "de haberlo sabido, habría ido", "de haberlo sabido, hubiera venido", "de haberlo sabido hubiera venido"],
        "model": "De haberlo sabido, habría venido.",
        "why": "Книжное прошлое-условие: de + haber + participio; следствие — habría/hubiera venido.",
        "hint": "Сожми «знай я это» в de haberlo sabido, а «я бы пришёл» — в habría venido 🙂"
      },
      {
        "type": "trRE",
        "ru": "Несмотря на дождь, мы вышли.",
        "accept": ["a pesar de la lluvia, salimos", "a pesar de la lluvia salimos", "pese a la lluvia, salimos", "pese a la lluvia salimos"],
        "model": "A pesar de la lluvia, salimos.",
        "why": "«Несмотря на» + существительное — a pesar de / pese a la lluvia.",
        "hint": "«Несмотря на» перед существительным — это a pesar de (или pese a) + сам дождь ☔"
      },
      {
        "type": "trRE",
        "ru": "Что бы ни случилось, я тебя не оставлю.",
        "accept": ["pase lo que pase, no te dejaré", "pase lo que pase no te dejare", "pase lo que pase no te dejaré", "pase lo que pase, no te voy a dejar", "pase lo que pase no te abandonaré", "pase lo que pase, no te dejaré solo"],
        "model": "Pase lo que pase, no te dejaré.",
        "why": "Редуплицированная уступка: оба глагола в субхунтиве — pase… pase.",
        "hint": "Удвой глагол в субхунтиве вокруг «lo que» — «что бы ни» тут конструкция, не «no» 🙂"
      },
      {
        "type": "trER",
        "en": "De no ser por ti, me pierdo.",
        "accept": ["если бы не ты, я бы потерялся", "если бы не ты я бы потерялся", "если бы не ты, я бы пропал", "если бы не ты, я бы потерялась", "без тебя я бы потерялся", "если бы не ты, я потерялся бы"],
        "model": "Если бы не ты, я бы потерялся.",
        "why": "«De no ser por ti» = «если бы не ты» (спасительное условие).",
        "hint": "«De no ser por…» — это «если бы не…»; кто-то тебя выручает 🙂"
      },
      {
        "type": "trER",
        "en": "Siento que no vengas.",
        "accept": ["жаль, что ты не придёшь", "жаль что ты не придешь", "мне жаль, что ты не придёшь", "жаль, что ты не приедешь", "сожалею, что ты не придёшь", "жаль, что тебя не будет"],
        "model": "Жаль, что ты не придёшь.",
        "why": "С субхунтивом (vengas) «sentir» значит «сожалеть»: жаль, что не придёшь (а не «чувствую, что…»).",
        "hint": "Субхунтив vengas переключает sentir на «сожалею» — начни с «жаль, что…» 🙂"
      },
      {
        "type": "order",
        "answer": "pase lo que pase estoy contigo",
        "accept": ["pase lo que pase estoy contigo", "pase lo que pase, estoy contigo"],
        "hintRu": "Собери: «Что бы ни случилось, я с тобой.»",
        "why": "Удвой pase… pase в субхунтиве, затем главное «estoy contigo».",
        "hint": "Удвой глагол в субхунтиве вокруг «lo que», потом — главное 🙂"
      },
      {
        "type": "order",
        "answer": "que digas eso me duele",
        "accept": ["que digas eso me duele", "me duele que digas eso"],
        "hintRu": "Собери: «То, что ты такое говоришь, мне больно.»",
        "why": "Вынесенный факт-подлежащее: que + субхунтив (digas) + реакция (me duele).",
        "hint": "Вынеси факт через que + субхунтив, потом реакцию (me duele) 🙂"
      },
      {
        "type": "match",
        "q": "Соедини нексус с его смыслом.",
        "pairs": [
          ["de seguir así", "если так продолжишь"],
          ["como no vengas", "если не придёшь (угроза)"],
          ["siempre y cuando", "при условии, что"],
          ["a no ser que", "разве что"],
          ["de no ser por ti", "если бы не ты"]
        ],
        "why": "Каждый нексус несёт свой оттенок условия: нейтральное, угроза, оговорка, исключение, спасение.",
        "hint": "Различай оттенки условия: книжное «если», угроза, оговорка, исключение, спасение 🙂"
      },
      {
        "type": "match",
        "q": "Соедини уступку с переводом.",
        "pairs": [
          ["si bien es caro", "хотя это и дорого"],
          ["por más que insistas", "как ни настаивай"],
          ["y eso que estudió", "а ведь он занимался"],
          ["pase lo que pase", "что бы ни случилось"],
          ["sea como sea", "как бы то ни было"]
        ],
        "why": "Различай книжное «si bien», эмфатическое «por más que», разговорное «y eso que» и удвоение.",
        "hint": "Держись оттенка: книжное, эмфатическое, разговорное или удвоение 🙂"
      },
      {
        "type": "describe",
        "prompt": "Дай кому-нибудь совет с условием в 1–2 предложениях, но без обычного «si». Возьми de + инфинитив, como + субхунтив или siempre y cuando + субхунтив.",
        "keywords": ["de seguir", "de no", "como no", "siempre y cuando", "a condición de que", "con tal de que", "a no ser que"],
        "minWords": 8,
        "model": "De seguir con ese ritmo, te agotarás. Te ayudo siempre y cuando me avises con tiempo.",
        "why": "Хороший ответ ставит условие без «si» и держит субхунтив после условных союзов.",
        "hint": "Спрячь «если» в de + инфинитив или в союз с субхунтивом — не соскользни на обычное «si» 🙂"
      },
      {
        "type": "describe",
        "prompt": "Прокомментируй какой-нибудь факт в 1–2 предложениях, подав его для оценки: el hecho de que…, no es que…, comprendo que… + субхунтив.",
        "keywords": ["el hecho de que", "no es que", "comprendo que", "no porque", "siento que", "me molesta", "me alegra"],
        "minWords": 8,
        "model": "El hecho de que llueva no cambia mis planes. No es que no quiera salir, es que estoy agotado.",
        "why": "Хороший ответ выносит факт под оценку и держит субхунтив (llueva, quiera), а истинную причину — в индикативе.",
        "hint": "Подай факт как тему для оценки — и глагол в нём уйдёт в субхунтив 🙂"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен C1",
    "intro": "Это финал C1! 33 задания по всему уровню: relieve и copulativas enfáticas, ponderativas, dislocación и все лица se; безличные формы (герундий, причастный оборот, инфинитив) и перифразы; условие и уступка тонко, тонкий субхунтив; и вся Неделя 4 — маркеры дискурса, регистр и вежливость, régimen preposicional, коллокации, словообразование, ложные друзья и голос образованного носителя. Соберись — и вперёд к грамоте C1! 🏆",
    "review": [
      "Relieve: lo que… es/son · <b>fue X quien/cuando/donde</b> · ponderativas ¡lo… que! / ¡la de… que!",
      "Dislocación: A María <b>la</b> vi · se involuntario <b>se me</b> cayó · valores de se (venden / vive / se lo)",
      "Герундий: образ и <b>aun</b> sabiéndolo · но не «потом» (y se rompió) · причастный оборот <b>Terminada</b> la reunión",
      "Инфинитив: <b>de haberlo sabido</b> · <b>el</b> fumar · <b>al</b> llegar · перифразы viene a / llegó a / dar por",
      "Условие без si: <b>de</b> seguir · <b>como</b> no vengas · siempre y cuando / a no ser que + субхунтив",
      "Уступка: <b>si bien</b> (+инд.) · por más que (+субх.) · <b>pase lo que pase</b> · el hecho de que + субхунтив",
      "Маркеры: <b>es decir</b> / o sea · mejor dicho · por cierto · en definitiva · en primer lugar",
      "Регистр и вежливость: culto/coloquial · <b>¿podría…?</b> · un tanto · режим: depende <b>de</b>, influir <b>en</b>",
      "Коллокации <b>tomar una decisión</b>, cometer un error · словообразование (-azo) · ложные друзья (éxito, saber/conocer)"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Lo que de verdad me importa ___ los detalles. <i style='opacity:.6'>важны детали</i>",
        "opts": ["son", "es", "está", "importan"],
        "answer": "son",
        "why": "Фокус «los detalles» (мн.) — ser равняется на фокус: son. «importa» уже стоит, дважды глагол не нужен.",
        "hint": "Смотри на фокус справа: деталей много — и ser во множественном 🙂"
      },
      {
        "type": "choice",
        "q": "___ aquí donde nos conocimos. <i style='opacity:.6'>именно здесь</i>",
        "opts": ["Fue", "Es", "Estuvo", "Fueron"],
        "answer": "Fue",
        "why": "Смысловой глагол в прошлом (conocimos) → связка в прошлом: Fue. Место → donde.",
        "hint": "Связка копирует время глагола conocimos — а он в прошлом 🙂"
      },
      {
        "type": "choice",
        "q": "¡___ gente que había en la plaza! <i style='opacity:.6'>сколько же народу</i>",
        "opts": ["La de", "Lo de", "Cuánta de", "Las de"],
        "answer": "La de",
        "why": "Количество с восторгом — «la de + сущ. + que»: ¡La de gente que había! Формула застыла в единственном.",
        "hint": "Восторг о количестве несёт застывшая формула, всегда в одном и том же числе 🙂"
      },
      {
        "type": "choice",
        "q": "___ Juan lo conozco desde niño. <i style='opacity:.6'>Ивана-то я знаю</i>",
        "opts": ["A", "—", "Con", "De"],
        "answer": "A",
        "why": "Дополнение-человек берёт личное «a» и вынесено с клитиком: A Juan lo conozco.",
        "hint": "Перед человеком-дополнением ставят особый маленький предлог, а глагол дублирует клитиком 🙂"
      },
      {
        "type": "choice",
        "q": "Se me ___ los platos al fregar. <i style='opacity:.6'>у меня разбились тарелки</i>",
        "opts": ["rompieron", "rompió", "rompí", "he roto"],
        "answer": "rompieron",
        "why": "Глагол согласуется с вещью «los platos» (мн.): rompieron. «rompí / he roto» вернули бы тебя в виновники.",
        "hint": "Глагол смотрит на саму вещь, а тарелок несколько 🍽️"
      },
      {
        "type": "choice",
        "q": "Aquí se ___ muy bien. <i style='opacity:.6'>здесь хорошо живётся (безлично)</i>",
        "opts": ["vive", "viven", "vivimos", "vivió"],
        "answer": "vive",
        "why": "Безличное «se» всегда в единственном: se vive bien (без подлежащего).",
        "hint": "Безличное «se» не имеет подлежащего — значит глагол застыл в единственном числе 🙂"
      },
      {
        "type": "choice",
        "q": "___ sabiéndolo, siguió adelante. <i style='opacity:.6'>даже зная это</i>",
        "opts": ["Aun", "Aún", "Aunque", "Incluso que"],
        "answer": "Aun",
        "why": "«Даже» + герундий — aun без ударения (≠ aún «ещё»; aunque просит личный глагол).",
        "hint": "«Даже», а не «ещё» — и чёрточки над словом быть не должно ✍️"
      },
      {
        "type": "choice",
        "q": "Necesito el documento ___, no el borrador. <i style='opacity:.6'>распечатанный</i>",
        "opts": ["impreso", "imprimido", "imprimiendo", "impresa"],
        "answer": "impreso",
        "why": "Как определение — неправильная форма: documento impreso. «Imprimido» оставь для «he imprimido».",
        "hint": "К существительному «documento» цепляется короткая, неправильная форма причастия 🖨️"
      },
      {
        "type": "choice",
        "q": "___ entrar en la sala, todos se levantaron. <i style='opacity:.6'>когда он вошёл</i>",
        "opts": ["Al", "En", "A", "Por"],
        "answer": "Al",
        "why": "«Когда/при» + инфинитив — al: al entrar. «En/A/Por + инфинитив» тут не дают «когда».",
        "hint": "«Когда/при» сжимается в al + инфинитив, а не в «en» 🙂"
      },
      {
        "type": "choice",
        "q": "Con los años llegó ___ dirigir la empresa. <i style='opacity:.6'>дослужился до…</i>",
        "opts": ["a", "—", "de", "en"],
        "answer": "a",
        "why": "Кульминация — llegar a + инфинитив: llegó a dirigir. Без «a» — просто «пришёл».",
        "hint": "«Дойти до вершины» держится на предлоге перед вторым глаголом 🙂"
      },
      {
        "type": "choice",
        "q": "___ no me llames antes del viernes, cancelo la reserva. <i style='opacity:.6'>если не позвонишь (угроза)</i>",
        "opts": ["Como", "Si", "De", "Cuando"],
        "answer": "Como",
        "why": "Угроза-условие с субхунтивом (llames) вводится через «como». После «si» настоящего субхунтива не бывает.",
        "hint": "С субхунтивом угрозу вводит «como», а не «si» ⚠️"
      },
      {
        "type": "choice",
        "q": "Por más que lo ___, no lo conseguirás. <i style='opacity:.6'>как ни старайся</i>",
        "opts": ["intentes", "intentas", "intentarás", "intentar"],
        "answer": "intentes",
        "why": "«Por más que» (как ни) → субхунтив: intentes.",
        "hint": "«Как ни…» с допущением тянет субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "El hecho de que lo ___ no te da la razón. <i style='opacity:.6'>то, что ты это знаешь</i>",
        "opts": ["sepas", "sabes", "sabrás", "sabiendo"],
        "answer": "sepas",
        "why": "«El hecho de que» подаёт факт для оценки → субхунтив: sepas.",
        "hint": "Факт вынесен как тема для оценки — значит субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "Me alegro de que ___ aquí. <i style='opacity:.6'>рад, что ты здесь</i>",
        "opts": ["estés", "estás", "estarás", "estabas"],
        "answer": "estés",
        "why": "Эмоция-реакция «alegrarse de que» всегда с субхунтивом: estés. Русское «рад, что…» изъявительно — это калька.",
        "hint": "Радость — реакция-эмоция, а она тянет субхунтив, даже если по-русски звучит как факт 💛"
      },
      {
        "type": "gap",
        "q": "¡___ difícil que resulta explicarlo! <i style='opacity:.6'>до чего же трудно</i>",
        "accept": ["lo"],
        "model": "Lo",
        "why": "Степень признака — lo + прилагательное + que: ¡Lo difícil que…!",
        "hint": "Открой восклицание о степени тем словечком, что зажимает прилагательное вместе с «que» 🙂"
      },
      {
        "type": "gap",
        "q": "El recado ya ___ lo di a tu madre. <i style='opacity:.6'>я ей его передал</i>",
        "accept": ["se"],
        "model": "se",
        "why": "«le» перед «lo» превращается в se: se lo di.",
        "hint": "«Ей» перед «его» меняет облик — язык не терпит «le lo» 🙂"
      },
      {
        "type": "gap",
        "q": "No llegué ___ conocerlo en persona. <i style='opacity:.6'>так и не познакомился</i>",
        "accept": ["a"],
        "model": "a",
        "why": "«Так и не» — no llegar a + инфинитив.",
        "hint": "«Так и не» держится на том же предлоге, что и «дойти до» 🙂"
      },
      {
        "type": "gap",
        "q": "Llegué tarde, es ___, perdí el tren. <i style='opacity:.6'>то есть</i>",
        "accept": ["decir"],
        "model": "decir",
        "why": "Маркер переформулировки «es decir» вводит пересказ между запятыми.",
        "hint": "Нейтральное «то есть» — это es + застывший инфинитив от «говорить» 🙂"
      },
      {
        "type": "gap",
        "q": "Sin querer, me dio un ___ en las costillas. <i style='opacity:.6'>удар локтем</i>",
        "accept": ["codazo"],
        "model": "codazo",
        "why": "«Удар локтем» — codo + -azo = codazo. Голое «codo» — просто локоть.",
        "hint": "Возьми «локоть» и добавь суффикс удара -azo — получится одно слово 💥"
      },
      {
        "type": "trRE",
        "ru": "Он упал и сломал ногу.",
        "accept": ["se cayó y se rompió la pierna", "se cayo y se rompio la pierna", "se cayó y se rompió una pierna", "se cayo y se rompio una pierna"],
        "model": "Se cayó y se rompió la pierna.",
        "why": "Следствие идёт «потом» — соединяем «y», а не герундием (не «rompiéndose»).",
        "hint": "«Сломав» — это следствие «потом»; соедини два глагола через «y», без герундия 🙂"
      },
      {
        "type": "trRE",
        "ru": "Если бы не ты, я бы потерялся.",
        "accept": ["de no ser por ti, me pierdo", "de no ser por ti me pierdo", "si no fuera por ti, me perdería", "si no fuera por ti me perderia", "si no fuera por ti, me pierdo", "de no haber sido por ti, me pierdo"],
        "model": "De no ser por ti, me pierdo.",
        "why": "Спасительное условие: de no ser por… (или si no fuera por…).",
        "hint": "«Если бы не ты» — de no ser por ti (или si no fuera por ti) 🙂"
      },
      {
        "type": "trRE",
        "ru": "Что бы ты ни говорил, я не передумаю.",
        "accept": ["digas lo que digas, no cambiaré de idea", "digas lo que digas no cambiare de idea", "digas lo que digas no cambiaré de idea", "digas lo que digas, no cambio de idea", "digas lo que digas no cambio de idea", "digas lo que digas, no cambiaré de opinión"],
        "model": "Digas lo que digas, no cambiaré de idea.",
        "why": "Редуплицированная уступка: digas… digas (оба в субхунтиве).",
        "hint": "Удвой глагол в субхунтиве вокруг «lo que», потом — «no cambiaré de idea» 🙂"
      },
      {
        "type": "trRE",
        "ru": "Не могли бы вы говорить помедленнее?",
        "accept": ["¿podría hablar más despacio?", "podría hablar más despacio", "podria hablar mas despacio", "¿podría hablar más despacio", "¿podria hablar mas despacio?", "podría hablar más despacio?", "¿podría usted hablar más despacio?"],
        "model": "¿Podría hablar más despacio?",
        "why": "Вежливую просьбу несёт condicional: ¿podría…? — без частицы для «не могли бы».",
        "hint": "«Не могли бы вы» передаёт не частица, а condicional глагола poder 🙂"
      },
      {
        "type": "trER",
        "en": "No sabiendo qué hacer, se quedó quieto.",
        "accept": ["не зная, что делать, он застыл", "не зная что делать он застыл", "не зная, что делать, он замер", "не зная, что делать, он не двигался", "не зная что делать, он застыл", "не зная, что делать, она застыла"],
        "model": "Не зная, что делать, он застыл.",
        "why": "Герундий сжимает причину: «no sabiendo…» = «поскольку/не зная…».",
        "hint": "Герундий тут — причина: начни с «не зная, что делать…» 🙂"
      },
      {
        "type": "trER",
        "en": "Por cierto, ¿has visto a Ana?",
        "accept": ["кстати, ты видел ану", "кстати ты видел ану", "кстати, ты видела ану", "кстати, ты не видел ану", "между прочим, ты видел ану", "кстати, вы видели ану"],
        "model": "Кстати, ты видел Ану?",
        "why": "«Por cierto» — отступление «кстати» (не путать с «por supuesto» = конечно).",
        "hint": "«Por cierto» вводит отступление — по-русски «кстати» 🙂"
      },
      {
        "type": "trER",
        "en": "En cierto modo, tienes razón.",
        "accept": ["в каком-то смысле ты прав", "в каком то смысле ты прав", "в каком-то смысле ты права", "в некотором смысле ты прав", "в известной мере ты прав", "отчасти ты прав"],
        "model": "В каком-то смысле ты прав.",
        "why": "«En cierto modo» смягчает согласие: «в какой-то мере / отчасти».",
        "hint": "«En cierto modo» — смягчитель: «в каком-то смысле / отчасти» 🙂"
      },
      {
        "type": "order",
        "answer": "se me cayó el vaso",
        "accept": ["se me cayó el vaso", "se me cayo el vaso", "el vaso se me cayó", "el vaso se me cayo"],
        "hintRu": "Собери: «У меня упал стакан.» (случайно)",
        "why": "Se involuntario: se + me + глагол под вещь + сама вещь.",
        "hint": "Схема без вины: se, потом me, глагол под вещь, сам стакан 🥛"
      },
      {
        "type": "order",
        "answer": "terminada la faena se fueron",
        "accept": ["terminada la faena se fueron"],
        "hintRu": "Собери: «Когда работа была закончена, они ушли.»",
        "why": "Причастный оборот: причастие согласуется с la faena (жен.) → terminada.",
        "hint": "Сожми «когда закончилось» в причастие, согласованное с la faena, потом — главное 🙂"
      },
      {
        "type": "order",
        "answer": "sea como sea lo lograremos",
        "accept": ["sea como sea lo lograremos", "sea como sea, lo lograremos"],
        "hintRu": "Собери: «Как бы то ни было, мы справимся.»",
        "why": "Удвоение ser вокруг «como» в субхунтиве: sea como sea.",
        "hint": "Удвой ser вокруг «como», потом — уверенное главное 🙂"
      },
      {
        "type": "match",
        "q": "Соедини маркер с его ролью.",
        "pairs": [
          ["es decir", "то есть (пояснение)"],
          ["mejor dicho", "точнее (поправка)"],
          ["por cierto", "кстати (отступление)"],
          ["en definitiva", "в итоге (вывод)"],
          ["en primer lugar", "во-первых (порядок)"]
        ],
        "why": "Каждый маркер ведёт свою работу: пояснить, поправить, отвлечься, подытожить, упорядочить.",
        "hint": "Каждый маркер делает своё: пояснение, поправка, отступление, вывод, порядок 🙂"
      },
      {
        "type": "match",
        "q": "Соедини выражение с переводом.",
        "pairs": [
          ["depende de ti", "зависит от тебя"],
          ["se casó con ella", "он женился на ней"],
          ["tomar una decisión", "принять решение"],
          ["cometer un error", "совершить ошибку"],
          ["tener éxito", "добиться успеха"]
        ],
        "why": "Учи управление и коллокацию целиком: depender de, casarse con, tomar una decisión, cometer un error; éxito = успех.",
        "hint": "Предлог и глагол-пару не переводи по словам — учи выражение целиком 🙂"
      },
      {
        "type": "describe",
        "prompt": "Вырази в 2–3 предложениях вежливое, смягчённое мнение по любому вопросу. Возьми condicional (podría, sería mejor), атенуатор (un tanto, en cierto modo) и маркер (es decir, sin embargo).",
        "keywords": ["podría", "podria", "sería mejor", "seria mejor", "en cierto modo", "un tanto", "quizá", "sin embargo", "es decir", "a mi juicio", "conviene"],
        "minWords": 10,
        "model": "En cierto modo, quizá sería mejor replantear el proyecto. No es que esté mal, es decir, funciona; sin embargo, conviene matizar algún punto.",
        "why": "Хороший ответ смягчает мнение condicional/атенуатором и связывает мысль маркером, держа ровный регистр.",
        "hint": "Смягчай формой (podría, sería), а не частицами; добавь атенуатор и маркер — и держи один регистр 🙂"
      },
      {
        "type": "describe",
        "prompt": "Напиши в 2–3 предложениях мини-тезис для эссе C1 по любой теме: заяви позицию (a mi juicio…), выдели главное через relieve (lo que… es) и дай оценку в субхунтиве (es esencial que…).",
        "keywords": ["a mi juicio", "lo que", "es esencial que", "es importante que", "en definitiva", "si bien", "conviene", "cabe señalar"],
        "minWords": 10,
        "model": "A mi juicio, lo que de verdad importa es la educación. Si bien la tecnología ayuda, es esencial que se use con criterio; en definitiva, la herramienta no sustituye al juicio propio.",
        "why": "Хороший ответ строит каркас эссе: тезис → relieve → оценка в субхунтиве → вывод, в culto-регистре без калек.",
        "hint": "Собери четыре жеста C1: заяви позицию, выдели главное (lo que… es), оцени в субхунтиве и подведи итог 🙂"
      }
    ]
  }
};
