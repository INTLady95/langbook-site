/* Spanish C2 — level config + 30-day plan (COURSE). EXAMS filled by next agent.
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'C2',
  course:'es-c2',
  pkey:'langbook-es-c2-progress',
  preview:false,
  finalNote:'Это твоя победа 💛 Полный уровень Español C2 — позади. Горжусь тобой!',
  speech:'es-ES',
  langPo:'по-испански',
  langNa:'испанский',
  langAdj:'испанское',
  phIn:'en español…'
};

const COURSE = [
  {wn:'01', wt:'Неделя 1 — Между строк: прагматика, импликатура и ирония / Entre líneas: pragmática, implicatura e ironía', days:[
    {n:1,t:'Смысл поверх слов',p:'El sentido más allá de las palabras'},
    {n:2,t:'Ровно наоборот',p:'Ironía, antífrasis y lítotes'},
    {n:3,t:'Ни много ни мало',p:'Atenuación e intensificación'},
    {n:4,t:'Сохранить лицо',p:'Cortesía, imagen y descortesía fingida'},
    {n:5,t:'Судя по всему',p:'Modalización y evidencialidad'},
    {n:6,t:'Слова-паузы и частицы',p:'Muletillas y partículas del habla'},
    {n:7,t:'Повторение №1',p:'Repaso 1'}
  ]},
  {wn:'02', wt:'Неделя 2 — Слово в точку: фразеология, регистр и точность / La palabra justa: fraseología, registro y precisión', days:[
    {n:8,t:'Идиома, что не переводится',p:'Frases hechas y locuciones'},
    {n:9,t:'Как говорит пословица',p:'Refranes, dichos y culturemas'},
    {n:10,t:'Точное прилагательное',p:'Colocaciones intensivas y restrictivas'},
    {n:11,t:'От высокого до сленга',p:'Registro, jerga y lo tabú'},
    {n:12,t:'В официальных терминах',p:'Cultismos, latinismos y lengua formal'},
    {n:13,t:'Слово с нужным оттенком',p:'Connotación, matiz y neología'},
    {n:14,t:'Повторение №2',p:'Repaso 2'}
  ]},
  {wn:'03', wt:'Неделя 3 — Испанский мира: варианты и сложный синтаксис / El español del mundo: variedades y sintaxis compleja', days:[
    {n:15,t:'Испанский не один',p:'El español no es uno solo'},
    {n:16,t:'«Vos tenés», che',p:'El voseo y la gramática diatópica'},
    {n:17,t:'Здесь говорят иначе',p:'Léxico y pragmática de América'},
    {n:18,t:'Порядок слов лепит смысл',p:'El orden de palabras y la sintaxis compleja'},
    {n:19,t:'Сшить текст',p:'Cohesión, elipsis y puntuación fina'},
    {n:20,t:'Формы иных времён',p:'El subjuntivo literario y arcaizante'},
    {n:21,t:'Повторение №3',p:'Repaso 3'}
  ]},
  {wn:'04', wt:'Неделя 4 — Голос автора: стиль, ирония, культура и расфоссилизация / La voz de autor: estilo, ironía, cultura y desfosilización', days:[
    {n:22,t:'Двойное дно',p:'Humor, juego de palabras y doble sentido'},
    {n:23,t:'У каждого текста свой голос',p:'Estilo por géneros y figuras retóricas'},
    {n:24,t:'Что знает каждый носитель',p:'Referentes culturales y sobreentendidos'},
    {n:25,t:'Расфоссилизация I: упрямая грамматика',p:'Errores fósiles de gramática'},
    {n:26,t:'Расфоссилизация II: русский под поверхностью',p:'Interferencia léxica y sintáctica'},
    {n:27,t:'Ритм, тон и дистанция',p:'Prosodia, entonación y pragmática'},
    {n:28,t:'Точно и изящно',p:'De la corrección a la elegancia'},
    {n:29,t:'Собрать всё в голос',p:'Integración y mediación'},
    {n:30,t:'Мой испанский, мой голос',p:'Mi columna: voz propia'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя C2 за плечами — и она была про то, что живёт <b>поверх слов</b>. 25 заданий по всему пройденному: импликатура и косвенные акты, ирония, антифразис и литота, атенуация и интенсификация, вежливость и сохранение лица, эвиденциальность и condicional de rumor, а ещё устные частицы. Не спеши. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Импликатура и косвенный акт: форма — одна, интенция — другая (<b>Hace frío aquí</b> = «закрой окно»)",
      "Пресуппозиция в триггерах: <b>ya no</b>, <b>volver a</b>, <b>hasta</b> (Ya no fumo → раньше курил)",
      "Ирония = антифразис; литота хвалит через «не»: <b>no está nada mal</b> = отлично",
      "Атенуация: <b>igual</b> (Исп. = «может быть»), a lo mejor, en plan · интенсификация: -ísimo, de narices",
      "Сохранить лицо: преамбул <b>es que…</b>, непрямой отказ (me lo pensaré ≈ «нет»)",
      "Эвиденциальность: <b>por lo visto</b>, al parecer · пресса: <b>habría dimitido</b> = «якобы подал»",
      "Устные частицы работают, а не переводятся: <b>oye</b>, mira, pues, o sea, ¿vale?"
    ],
    "q": [
      {
        "type": "choice",
        "q": "В гостях, при открытом окне, кто-то роняет: «Hace frío aquí». Что он на самом деле хочет сказать?",
        "opts": [
          "Закрой, пожалуйста, окно",
          "Он спрашивает про температуру",
          "Он заболел",
          "Ему нравится холод"
        ],
        "answer": "Закрой, пожалуйста, окно",
        "why": "Косвенный акт: буквально про погоду, а по сути — просьба закрыть окно. Форма — одна, интенция — другая.",
        "hint": "Смотри не на слова, а на ситуацию: открытое окно, кто-то мёрзнет — чего он хочет от тебя? 🪟"
      },
      {
        "type": "choice",
        "q": "«Ya no fumo.» Что фраза подаёт как уже известное (пресуппозиция)?",
        "opts": [
          "Раньше он курил",
          "Он никогда не курил",
          "Скоро закурит",
          "Он ненавидит табак"
        ],
        "answer": "Раньше он курил",
        "why": "Триггер ya no тащит за собой прошлое: раньше курил, теперь нет. Отрицание пресуппозицию не трогает.",
        "hint": "«Уже не» = «уже не делаю»: чтобы перестать, надо было сначала это делать. Что было до? 🚬"
      },
      {
        "type": "choice",
        "q": "Ты опоздал на полчаса, а друг бросает: «¡Qué puntual!». Что он делает?",
        "opts": [
          "Упрекает с иронией",
          "Искренне хвалит",
          "Не заметил опоздания",
          "Спрашивает время"
        ],
        "answer": "Упрекает с иронией",
        "why": "Антифразис: слова хвалят, ситуация опровергает. Опоздавшему «qué puntual» — это укол, а не похвала.",
        "hint": "Полчаса опоздания и «пунктуальность» — слова расходятся с реальностью. Что за похвалой? 🙃"
      },
      {
        "type": "choice",
        "q": "Пробуешь блюдо и говоришь: «No está nada mal». Что ты передаёшь?",
        "opts": [
          "Что очень вкусно",
          "Что так себе, ничего особенного",
          "Что невкусно",
          "Что ещё не пробовал"
        ],
        "answer": "Что очень вкусно",
        "why": "Литота: отрицаешь слабое (nada mal), а звучит сильное — «очень хорошо». Русское ухо слышит сдержанность, испанское — комплимент.",
        "hint": "Двойное преуменьшение усиливает, а не занижает: «совсем не плохо» — это плюс или минус? 😋"
      },
      {
        "type": "choice",
        "q": "В Испании «Igual llego tarde» значит:",
        "opts": [
          "Может быть, я опоздаю",
          "Опоздаю точно так же, как ты",
          "Приду ровно вовремя",
          "Никогда не опаздываю"
        ],
        "answer": "Может быть, я опоздаю",
        "why": "В Испании igual в этой позиции — смягчитель «может быть», а не «одинаково». Для «одинаково» было бы igualmente.",
        "hint": "Здесь igual — не про сравнение, а про вероятность. Ищи оттенок «может, пожалуй» ⏰"
      },
      {
        "type": "choice",
        "q": "«Hace un frío de narices» означает, что холод:",
        "opts": [
          "очень сильный",
          "совсем слабый",
          "приятный",
          "только в носу"
        ],
        "answer": "очень сильный",
        "why": "de narices — разговорный усилитель: «страшно, ужасно». Un frío de narices = собачий холод.",
        "hint": "de narices тут не про нос, а усиливает степень. Холод слабый или сильный? 🥶"
      },
      {
        "type": "choice",
        "q": "Ты настаиваешь, а тебе отвечают: «Me lo pensaré». Скорее всего это:",
        "opts": [
          "вежливое «нет»",
          "твёрдое «да»",
          "приказ",
          "вопрос"
        ],
        "answer": "вежливое «нет»",
        "why": "Непрямой отказ: форма — отсрочка, смысл часто «нет». Не всякое «подумаю» — согласие.",
        "hint": "Прямое «нет» бьёт по лицу, поэтому его прячут в «подумаю». Согласие это или мягкий уход? 🚪"
      },
      {
        "type": "choice",
        "q": "«Por lo visto, ya se han ido.» Оборотом «por lo visto» ты помечаешь, что:",
        "opts": [
          "знаешь это с чужих слов, не сам видел",
          "видел это своими глазами",
          "это очевидно и точно",
          "ты об этом спрашиваешь"
        ],
        "answer": "знаешь это с чужих слов, не сам видел",
        "why": "por lo visto помечает чужой источник: «судя по всему / говорят», а не «явно». Ты не ручаешься за факт.",
        "hint": "Оборот ставит подпись «знаю не сам». Это про твою уверенность или про чужие слова? 🔎"
      },
      {
        "type": "choice",
        "q": "Заголовок: «El ministro habría dimitido». Как перевести «habría dimitido»?",
        "opts": [
          "якобы / предположительно подал в отставку",
          "подал бы в отставку, если бы…",
          "подаст в отставку завтра",
          "был обязан подать в отставку"
        ],
        "answer": "якобы / предположительно подал в отставку",
        "why": "Condicional de rumor подаёт непроверенный факт: «якобы подал». Это не «бы» (условие) и не будущее.",
        "hint": "В прессе условная форма снимает ответственность за факт. При чём тут «бы»? Или это «по некоторым данным»? 📰"
      },
      {
        "type": "choice",
        "q": "«Oye, ¿me echas una mano?» Слово «oye» здесь:",
        "opts": [
          "открывает реплику и зовёт внимание",
          "это приказ «слушай!»",
          "значит «прощай»",
          "спрашивает, который час"
        ],
        "answer": "открывает реплику и зовёт внимание",
        "why": "oye — маркер устной речи: открывает реплику и зовёт внимание, а не приказывает «слушай».",
        "hint": "Это не глагол-приказ, а словечко-зачин. Что оно делает в начале фразы? 🔌"
      },
      {
        "type": "gap",
        "q": "No estoy seguro de que ___ razón. <i style='opacity:.6'>он прав; глагол tener в нужном наклонении</i>",
        "accept": [
          "tenga"
        ],
        "model": "tenga",
        "why": "Отрицание уверенности требует субхунтива: no estoy seguro de que tenga. Indicativo tiene противоречил бы заявленному сомнению.",
        "hint": "Сомнение и отрицание уверенности включают особое наклонение — не индикатив 🎚️"
      },
      {
        "type": "gap",
        "q": "El examen no estuvo ___ mal; de hecho, me salió muy bien. <i style='opacity:.6'>усиление отрицания → похвала</i>",
        "accept": [
          "nada"
        ],
        "model": "nada",
        "why": "Литота no… nada mal = «очень даже хорошо». Слово nada усиливает отрицание, а смысл выходит в плюс.",
        "hint": "Чтобы «не плохо» превратилось в похвалу, нужно словечко усиления отрицания 🙂"
      },
      {
        "type": "gap",
        "q": "— ¿Vienes a la reunión? — Uf, es ___ hoy no me da la vida. <i style='opacity:.6'>преамбул-причина перед отказом</i>",
        "accept": [
          "que"
        ],
        "model": "que",
        "why": "Преамбул «es que…» вводит причину-оправдание перед отказом, смягчая удар по лицу.",
        "hint": "«Дело в том, что…»: после es идёт коротенькое связующее слово 🛡️"
      },
      {
        "type": "gap",
        "q": "— ¿Y tú qué opinas? — ___, no sé, déjame pensarlo. <i style='opacity:.6'>ну-раздумье перед ответом</i>",
        "accept": [
          "pues"
        ],
        "model": "pues",
        "why": "Русское «ну» перед раздумчивым ответом — это pues (тянет паузу), а не механическое bueno.",
        "hint": "Маркер-раздумье, что даёт секунду перед ответом; по функции — русское «ну…» 🧭"
      },
      {
        "type": "trRE",
        "ru": "Я больше не курю.",
        "accept": [
          "ya no fumo",
          "yo ya no fumo",
          "ya no fumo mas",
          "ya no fumo más"
        ],
        "model": "Ya no fumo.",
        "why": "«Больше не» = ya no — триггер пресуппозиции: подаёт как факт, что раньше ты курил.",
        "hint": "«Уже не» по-испански — два коротких слова перед глаголом; они и намекают на прошлое 🚬"
      },
      {
        "type": "trRE",
        "ru": "Судя по всему, они уже уехали.",
        "accept": [
          "por lo visto ya se han ido",
          "al parecer ya se han ido",
          "por lo visto ya se fueron",
          "al parecer ya se fueron",
          "según parece ya se han ido",
          "segun parece ya se han ido"
        ],
        "model": "Por lo visto, ya se han ido.",
        "why": "«Судя по всему» лексикализуется оборотом por lo visto / al parecer — пометкой «знаю не сам».",
        "hint": "Начни с оборота-пометки источника «судя по всему», а не с частицы 🔎"
      },
      {
        "type": "trRE",
        "ru": "Может, я опоздаю.",
        "accept": [
          "igual llego tarde",
          "a lo mejor llego tarde",
          "quizá llegue tarde",
          "quiza llegue tarde",
          "tal vez llegue tarde",
          "igual me retraso"
        ],
        "model": "Igual llego tarde.",
        "why": "«Может» смягчаем разговорным igual / a lo mejor (+ indicativo) или quizá (+ subjuntivo). В Испании igual = «может быть».",
        "hint": "Возьми разговорный смягчитель «может, пожалуй» — igual или a lo mejor 🔉"
      },
      {
        "type": "trER",
        "en": "No es tonto, ni mucho menos.",
        "accept": [
          "он далеко не глуп",
          "он вовсе не глуп",
          "он совсем не глуп",
          "далеко не глуп",
          "он далеко не глупый",
          "он отнюдь не глуп",
          "он далеко не дурак"
        ],
        "model": "Он далеко не глуп.",
        "why": "Литота ni mucho menos усиливает отрицание: «совсем не глуп» = «весьма умён». Не занижай оценку.",
        "hint": "«ni mucho menos» = «отнюдь нет»: фраза с нажимом отрицает глупость. Значит человек какой? 🧠"
      },
      {
        "type": "trER",
        "en": "¡Anda ya, no puede ser!",
        "accept": [
          "да брось не может быть",
          "да ладно не может быть",
          "да ну не может быть",
          "брось не может быть",
          "да брось да не может быть",
          "да ну брось не может быть"
        ],
        "model": "Да брось, не может быть!",
        "why": "anda ya — маркер недоверия «да брось, да ну». Переводим функцию, а не слово.",
        "hint": "«anda ya» — это не «иди уже», а недоверие. Как это по-русски в живой речи? 🙃"
      },
      {
        "type": "order",
        "answer": "me temo que no puede ser",
        "accept": [
          "me temo que no puede ser",
          "me temo que no"
        ],
        "hintRu": "Собери мягкий отказ: «Боюсь, не получится.»",
        "why": "Непрямой отказ через me temo que… звучит деликатнее голого «No» и бережёт лицо обоих.",
        "hint": "Смягчённый отказ: «me temo que…» + «не получится» 🚪"
      },
      {
        "type": "order",
        "answer": "tampoco es que sea para tanto",
        "accept": [
          "tampoco es que sea para tanto"
        ],
        "hintRu": "Сбавь пафос: «Да не то чтобы прям так уж.»",
        "why": "«Tampoco es que…» гасит нажим, а дальше идёт субхунтив (sea) + para tanto.",
        "hint": "Атенуатор «tampoco es que…» + субхунтив sea + para tanto 🔉"
      },
      {
        "type": "match",
        "q": "Соедини фразу с её настоящим смыслом (импликатура).",
        "pairs": [
          [
            "Hace frío aquí",
            "закрой окно"
          ],
          [
            "¿Tienes hora?",
            "скажи, который час"
          ],
          [
            "Ya no fumo",
            "раньше курил"
          ],
          [
            "Hasta María vino",
            "её не ждали"
          ],
          [
            "¿Me pasas la sal?",
            "передай соль"
          ]
        ],
        "why": "Косвенный акт и пресуппозиция: читаешь интенцию, а не форму.",
        "hint": "Читай не буквальный смысл, а интенцию: чего человек хочет на самом деле? 🎯"
      },
      {
        "type": "match",
        "q": "Соедини выражение с его смыслом.",
        "pairs": [
          [
            "No está nada mal",
            "очень хорошо"
          ],
          [
            "¡Anda ya!",
            "да брось, не верю"
          ],
          [
            "¡Menudo genio!",
            "тоже мне гений"
          ],
          [
            "No es precisamente barato",
            "дороговато"
          ],
          [
            "Ya, ya…",
            "ну-ну, конечно"
          ]
        ],
        "why": "Литота хвалит через «не», а маркеры (anda ya, menudo, ya ya) включают иронию.",
        "hint": "Литоты хвалят через отрицание, маркеры задают иронию — вспомни их работу 🚩"
      },
      {
        "type": "describe",
        "prompt": "Попроси коллегу задержаться на работе до десяти — мягко, с заходом. Пусти в ход преамбул (es que…), пресеквенцию (¿tienes un momento?) и косвенную просьбу (¿te importaría…?). 2–3 предложения.",
        "keywords": [
          "es que",
          "oye",
          "tienes un momento",
          "te importaría",
          "te importaria",
          "podrías",
          "podrias",
          "perdona",
          "quedarte",
          "hasta las diez",
          "no te importaría",
          "no te importaria"
        ],
        "minWords": 14,
        "model": "Oye, ¿tienes un momento? Es que se nos ha juntado el trabajo… ¿Te importaría quedarte hasta las diez? Te lo agradecería un montón.",
        "why": "Крупная просьба требует всех трёх сглаживателей: es que + пресеквенция + косвенный вопрос. Голый императив давит на лицо.",
        "hint": "Не руби «quédate»: сначала подготовь почву (¿tienes un momento?), назови причину (es que…), заверни просьбу в вопрос 🛡️"
      },
      {
        "type": "describe",
        "prompt": "Перескажи слух, за который ты не ручаешься: что фирма закрывает офис. Пометь источник (por lo visto, al parecer, dicen que, según parece). 2–3 предложения.",
        "keywords": [
          "por lo visto",
          "al parecer",
          "dicen que",
          "según parece",
          "segun parece",
          "se ve que",
          "supuestamente",
          "no me consta"
        ],
        "minWords": 12,
        "model": "Por lo visto, van a cerrar la oficina. Al parecer, ya lo han decidido, aunque a mí no me consta. Dicen que nos avisarán la semana que viene.",
        "why": "Эвиденциальность лексикализуется оборотом-пометкой «знаю не сам»: por lo visto, al parecer. Так снимаешь с себя ответственность за точность.",
        "hint": "Начинай предложения с пометки источника (por lo visto, al parecer): это чужие слова, не твой факт 🔎"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя была про <b>точное слово</b>. 25 заданий: идиомы и локуции, пословицы и культуремы, устойчивые коллокации и сравнения, регистр со сленгом и tacos, латинизмы с канцеляритом, коннотация и такт. Помни главное правило недели: бери оборот целиком и выбирай этаж под ситуацию. Наберёшь 80% — откроется Неделя 3. 💛",
    "review": [
      "Идиома некомпозициональна: <b>tirar la toalla</b> = сдаться; ложная прозрачность: <b>echar una mano</b> = помочь",
      "Пословицы берут целиком и по функции: <b>En casa del herrero, cuchillo de palo</b> ≈ сапожник без сапог",
      "Коллокации фиксированы: <b>error garrafal</b>, silencio sepulcral, <b>entablar</b> una discusión",
      "Регистр-этаж: currar (разг.) · trabajar (нейтр.) · <b>de puta madre</b> = «отлично», но вульгарно",
      "Латинизмы застыли: <b>motu proprio</b> (не propio), grosso modo (без «a»)",
      "Коннотация и такт: <b>esbelta</b> (похвала) ≠ escuálida · person-first: persona mayor",
      "Русская ловушка: клише и оттенки не калькируются (con relación a, не «en conexión con»)"
    ],
    "q": [
      {
        "type": "choice",
        "q": "«Tirar la toalla» значит:",
        "opts": [
          "сдаться, опустить руки",
          "вытереться полотенцем",
          "постирать бельё",
          "выиграть бой"
        ],
        "answer": "сдаться, опустить руки",
        "why": "Идиома некомпозициональна: образ пришёл с ринга, а значит «сдаться». Полотенце тут ни при чём.",
        "hint": "Смысл идиомы — не сумма слов. Вспомни боксёрский образ 🥊"
      },
      {
        "type": "choice",
        "q": "«¿Me echas una mano?» на самом деле означает:",
        "opts": [
          "Поможешь мне?",
          "Подашь мне руку?",
          "Поздороваешься со мной?",
          "Отпустишь меня?"
        ],
        "answer": "Поможешь мне?",
        "why": "Ложная прозрачность: echar una mano — «помочь». «Подать руку» — это dar la mano, другой жест.",
        "hint": "Фраза выглядит «переводимой» — это и есть ловушка. Речь о помощи или о жесте? 🤝"
      },
      {
        "type": "choice",
        "q": "«En casa del herrero, cuchillo de palo» — про того, кто:",
        "opts": [
          "не применяет к себе то, в чём мастер",
          "делает деревянные ножи",
          "очень беден",
          "прекрасно готовит"
        ],
        "answer": "не применяет к себе то, в чём мастер",
        "why": "Пословица про несоответствие: умеет для других, а себе не сделал — русский аналог «сапожник без сапог».",
        "hint": "Читай функцию, а не картинку про кузнеца и ножи 🔨"
      },
      {
        "type": "choice",
        "q": "Дострой пословицу: «Más vale pájaro en mano…»",
        "opts": [
          "que ciento volando",
          "que nunca",
          "que dos en el árbol",
          "y no te fíes"
        ],
        "answer": "que ciento volando",
        "why": "Носитель достраивает хвост сам: …que ciento volando («лучше синица в руках»). «Que nunca» — из другой пословицы.",
        "hint": "Знать пословицу надо целиком. Синица в руках против кого в небе? 🐦"
      },
      {
        "type": "choice",
        "q": "«Cometió un error ___.» Какой усилитель фиксирован именно за «error»?",
        "opts": [
          "garrafal",
          "incondicional",
          "canino",
          "aplastante"
        ],
        "answer": "garrafal",
        "why": "error garrafal — фиксированная коллокация. Incondicional идёт с apoyo, canino — с hambre, aplastante — с victoria.",
        "hint": "Каждый усилитель закреплён за своим словом. Ошибка бывает какой? 🎯"
      },
      {
        "type": "choice",
        "q": "«___ una discusión» (завязать спор). Глагол-опора:",
        "opts": [
          "entablar",
          "zanjar",
          "surtir",
          "albergar"
        ],
        "answer": "entablar",
        "why": "Спор завязывают — entablar. Zanjar его, наоборот, улаживают; surtir идёт с efecto, albergar — с dudas.",
        "hint": "Нужен глагол «завязать», а не «закрыть». Универсальное hacer тут бедно 🤝"
      },
      {
        "type": "choice",
        "q": "Слово «currar» принадлежит регистру:",
        "opts": [
          "разговорному",
          "официальному",
          "книжному",
          "юридическому"
        ],
        "answer": "разговорному",
        "why": "Currar — разговорный этаж («вкалывать»). В резюме и докладе нужен нейтральный trabajar.",
        "hint": "За пивом уместно, в резюме — нет. Какой это этаж? 🏢"
      },
      {
        "type": "choice",
        "q": "«Lo pasamos de puta madre» означает:",
        "opts": [
          "отлично, здорово",
          "ужасно, отвратительно",
          "так себе, обычно",
          "это тяжкое оскорбление"
        ],
        "answer": "отлично, здорово",
        "why": "Taco de puta madre работает как усилитель-похвала «класс», хотя форма вульгарна. Русским матом его не мерь.",
        "hint": "Форма грубая, а функция — усилить. Плюс это или минус? 😄"
      },
      {
        "type": "choice",
        "q": "Как правильно записать латинизм «по собственной воле»?",
        "opts": [
          "motu proprio",
          "motu propio",
          "de motu proprio",
          "a motu proprio"
        ],
        "answer": "motu proprio",
        "why": "Латинская форма застыла: proprio (не испанское propio) и без предлога — motu proprio.",
        "hint": "Не подгоняй под родное propio и не добавляй предлог. Форма застыла целиком 🏛️"
      },
      {
        "type": "choice",
        "q": "Чтобы похвалить стройную фигуру, скажешь, что человек:",
        "opts": [
          "esbelta",
          "escuálida",
          "corpulenta",
          "rellenita"
        ],
        "answer": "esbelta",
        "why": "esbelta — похвала «стройная, статная». Escuálida — «измождённая» (негатив), corpulenta — «дородная», rellenita — «полноватая».",
        "hint": "Нужен оттенок с плюсом, а не «болезненно тощая». Выбирай коннотацию 🙂"
      },
      {
        "type": "gap",
        "q": "No lo pienses más: hay que ir al ___. <i style='opacity:.6'>сразу к делу</i>",
        "accept": [
          "grano"
        ],
        "model": "grano",
        "why": "ir al grano — «сразу к делу» (в отличие от irse por las ramas). Локуцию учат целиком.",
        "hint": "Идиома «сразу к делу»: al + одно слово (не про ветки, а про зерно) 🎯"
      },
      {
        "type": "gap",
        "q": "El equipo logró una victoria ___. <i style='opacity:.6'>сокрушительная</i>",
        "accept": [
          "aplastante"
        ],
        "model": "aplastante",
        "why": "victoria aplastante — фиксированная коллокация «сокрушительная победа». Синоним туда не встаёт.",
        "hint": "Усилитель, закреплённый именно за «победой»: буквально «раздавливающая» 🏆"
      },
      {
        "type": "gap",
        "q": "___ modo, la idea es buena, aunque faltan detalles. <i style='opacity:.6'>в общих чертах; латинизм</i>",
        "accept": [
          "grosso"
        ],
        "model": "grosso",
        "why": "grosso modo — «в общих чертах», без предлога «a». Латинизм несёт форму целиком.",
        "hint": "Латинизм «в общих чертах»: одно слово + modo, и никакого «a» впереди 🏛️"
      },
      {
        "type": "gap",
        "q": "No me lo cuentes entero, no me ___ el final. <i style='opacity:.6'>не спойли; ассимилированный неологизм</i>",
        "accept": [
          "destripes"
        ],
        "model": "destripes",
        "why": "«Спойлить» по-испански — destripar (исп. альтернатива англицизму spóiler): no me destripes el final.",
        "hint": "Испанская замена англицизму «спойлить»: глагол про «раскрыть/выпотрошить» финал 🙊"
      },
      {
        "type": "trRE",
        "ru": "В конце концов он сдался.",
        "accept": [
          "al final tiró la toalla",
          "al final tiro la toalla",
          "tiró la toalla",
          "tiro la toalla",
          "al final se rindió",
          "al final se rindio",
          "finalmente tiró la toalla",
          "finalmente tiro la toalla"
        ],
        "model": "Al final tiró la toalla.",
        "why": "«Сдался» удачно ложится на идиому tirar la toalla; se rindió тоже верно, но образ идиомы живее.",
        "hint": "Есть готовая идиома «опустить руки» с боксёрского ринга — про полотенце 🥊"
      },
      {
        "type": "trRE",
        "ru": "Лучше синица в руках, чем журавль в небе.",
        "accept": [
          "más vale pájaro en mano que ciento volando",
          "mas vale pajaro en mano que ciento volando",
          "más vale pájaro en mano",
          "mas vale pajaro en mano"
        ],
        "model": "Más vale pájaro en mano que ciento volando.",
        "why": "Русскую пословицу не переводят по словам — берут готовую испанскую целиком: pájaro en mano / ciento volando.",
        "hint": "Не переводи «синицу» и «журавля» дословно — вспомни готовую испанскую пословицу 🐦"
      },
      {
        "type": "trRE",
        "ru": "Она очень чувствительная.",
        "accept": [
          "es muy sensible",
          "ella es muy sensible",
          "es muy sensible ella"
        ],
        "model": "Es muy sensible.",
        "why": "Ложный друг: sensible = «чувствительный», а не «разумный» (то — sensato / razonable).",
        "hint": "«Чувствительная» — это sensible; не спутай с «разумной». Ложный друг рядом 🎭"
      },
      {
        "type": "trER",
        "en": "Metió la pata delante de todos.",
        "accept": [
          "он сплоховал при всех",
          "сплоховал при всех",
          "он оплошал при всех",
          "он опростоволосился при всех",
          "он ляпнул лишнее при всех",
          "она сплоховала при всех"
        ],
        "model": "Он сплоховал при всех.",
        "why": "meter la pata — «сплоховать, ляпнуть лишнее», а не «сунуть лапу». Идиома читается целиком.",
        "hint": "Идиома не про «лапу». Речь про промах на людях 🙈"
      },
      {
        "type": "trER",
        "en": "La reunión se aplazó sine die.",
        "accept": [
          "встречу отложили на неопределённый срок",
          "встречу отложили на неопределенный срок",
          "заседание отложили на неопределённый срок",
          "заседание отложили на неопределенный срок",
          "встречу перенесли на неопределённый срок",
          "встречу перенесли на неопределенный срок",
          "встречу отложили бессрочно"
        ],
        "model": "Встречу отложили на неопределённый срок.",
        "why": "sine die — латинизм «на неопределённый срок». Форма не меняется и не переводится по частям.",
        "hint": "Латинизм sine die — это «без даты», на сколько именно? 📅"
      },
      {
        "type": "order",
        "answer": "es más terco que una mula",
        "accept": [
          "es más terco que una mula",
          "es mas terco que una mula"
        ],
        "hintRu": "Собери устойчивое сравнение: «Он упрямее осла.» (исп. образ — мул)",
        "why": "Símil берут готовым: второй член закреплён — más terco que una mula (не «burro»).",
        "hint": "Готовое сравнение: más + прилагательное + que + животное (мул, не осёл) 🐴"
      },
      {
        "type": "order",
        "answer": "en aras de la claridad",
        "accept": [
          "en aras de la claridad"
        ],
        "hintRu": "Собери канцелярское клише: «ради ясности».",
        "why": "en aras de — готовое клише высокого регистра «ради, во имя». Берут целиком, не сочиняют.",
        "hint": "Официальный оборот «ради…»: en + одно слово + de + существительное 🏛️"
      },
      {
        "type": "match",
        "q": "Соедини идиому с её смыслом.",
        "pairs": [
          [
            "tirar la toalla",
            "сдаться"
          ],
          [
            "meter la pata",
            "сплоховать"
          ],
          [
            "estar en las nubes",
            "витать в облаках"
          ],
          [
            "echar una mano",
            "помочь"
          ],
          [
            "ir al grano",
            "сразу к делу"
          ]
        ],
        "why": "Идиома некомпозициональна — держи смысл целого, а не деталей.",
        "hint": "Смысл идиомы — не сумма слов; вспомни образ целиком 🧩"
      },
      {
        "type": "match",
        "q": "Соедини слово с его регистром или смыслом.",
        "pairs": [
          [
            "currar",
            "вкалывать (разг.)"
          ],
          [
            "fallecer",
            "скончаться (офиц.)"
          ],
          [
            "de puta madre",
            "отлично (груб.)"
          ],
          [
            "majo",
            "славный (Исп.)"
          ],
          [
            "chungo",
            "паршивый (разг.)"
          ]
        ],
        "why": "У каждого слова свой этаж: свойское, официальное, грубое. Выбор регистра — выбор такта.",
        "hint": "Каждое слово несёт свой этаж: разговорный, официальный или грубый 🏢"
      },
      {
        "type": "describe",
        "prompt": "Перепиши одну и ту же мысль на трёх этажах регистра — «мой дед умер»: разговорно, нейтрально и официально. Дай три версии в одном ответе.",
        "keywords": [
          "palmó",
          "palmo",
          "la palmó",
          "estiró la pata",
          "murió",
          "murio",
          "falleció",
          "fallecio",
          "pasó a mejor vida",
          "paso a mejor vida"
        ],
        "minWords": 12,
        "model": "Coloquial: mi abuelo casi la palma el año pasado. Neutral: mi abuelo murió el año pasado. Formal: mi abuelo falleció el año pasado.",
        "why": "Один смысл живёт на разных этажах: palmarla (разг.) — morir (нейтр.) — fallecer (офиц.). Регистр выбираешь под ситуацию.",
        "hint": "Три версии по регистру: свойское (palmarla), нейтральное (morir), официальное (fallecer) 🎚️"
      },
      {
        "type": "describe",
        "prompt": "Тактично опиши пожилого человека и его внешность, без резких ярлыков: используй person-first (persona mayor) и мягкие оттенки (esbelto/delgado, rellenito), а не viejo/escuálido/gordo. 2–3 предложения.",
        "keywords": [
          "persona mayor",
          "personas mayores",
          "mayor",
          "anciano",
          "anciana",
          "esbelta",
          "esbelto",
          "delgado",
          "delgada",
          "rellenito",
          "rellenita",
          "corpulento"
        ],
        "minWords": 12,
        "model": "Es una persona mayor muy activa. Está algo rellenita, pero se mueve con energía. Tiene una figura esbelta y una sonrisa amable.",
        "why": "На C2 точность — это ещё и такт: person-first (persona mayor) и мягкий оттенок (esbelto, rellenito), а не viejo/escuálido/gordo.",
        "hint": "Ставь человека вперёд (persona mayor) и бери тёплый оттенок: esbelto, а не escuálido 🙂"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя — про <b>испанский всего мира</b> и сложный синтаксис. 25 заданий: варианты и произношение (seseo, ustedes), voseo и грамматика зон, лексика Америки и мины вроде coger, порядок слов (pobre hombre), связность и тонкая пунктуация, литературный субхунтив. Цель C2: понимать все варианты, а говорить связно в одном. Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Варианты — норма, не ошибка: <b>seseo</b>, придыхание -s, yeísmo · в Америке всегда <b>ustedes</b>",
      "Voseo — своё «ты»: <b>vos tenés</b>, sos, vení (не «vos tienes») · vos = близкое, usted = дистанция",
      "Америка: perfecto ↔ <b>indefinido</b> (¿ya comiste?), <b>recién</b> llegué = «только что»",
      "Лексика зон: coche/<b>carro</b>, móvil/<b>celular</b> · мина <b>coger</b> (Ам. табу) → tomar/agarrar · ahorita ≠ «сейчас же»",
      "Порядок слов лепит смысл: <b>un pobre hombre</b> (бедняга) ≠ un hombre pobre (небогатый)",
      "Связность и пунктуация: замена/эллипсис, <b>lo cual</b> ко всей мысли, перед изъяснит. que запятой нет",
      "Высокий субхунтив узнают: <b>sea cual fuere</b>, лит. -ra = había (el rey que fundara)"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Seseo (произношение c/z как [s], например «синко» вместо «θинко») — это:",
        "opts": [
          "нормальный вариант огромных территорий",
          "дефект произношения",
          "признак только новичков",
          "ошибка, которую надо исправлять"
        ],
        "answer": "нормальный вариант огромных территорий",
        "why": "Seseo — норма всей Америки и юга Испании: вариант, а не порча. Иерархии вариантов нет.",
        "hint": "Так говорят сотни миллионов. Это ошибка или региональная норма? 🌎"
      },
      {
        "type": "choice",
        "q": "В Латинской Америке к группе друзей обращаются через:",
        "opts": [
          "ustedes",
          "vosotros",
          "vos",
          "tú"
        ],
        "answer": "ustedes",
        "why": "В Америке vosotros нет: множественное «вы» (и к друзьям, и к начальству) — всегда ustedes.",
        "hint": "Форма на -éis там не звучит. Что покрывает и близость, и вежливость? 👥"
      },
      {
        "type": "choice",
        "q": "Какая форма voseo верна?",
        "opts": [
          "vos tenés",
          "vos tienes",
          "vos tenéis",
          "tú tenés"
        ],
        "answer": "vos tenés",
        "why": "Vos требует своей парадигмы: tenés, sos, querés. Дифтонговое tienes принадлежит tú — смешивать нельзя.",
        "hint": "У vos своя ударная концовка, без дифтонга ie. Не смешивай парадигмы 🇦🇷"
      },
      {
        "type": "choice",
        "q": "Как звучит по-американски вопрос «ты уже поел (только что)?»",
        "opts": [
          "¿Ya comiste?",
          "¿Ya has comido?",
          "¿Ya comías?",
          "¿Ya comerás?"
        ],
        "answer": "¿Ya comiste?",
        "why": "Америка для свежего «сегодня/только что» берёт indefinido: ¿ya comiste?, там где Испания скажет ¿ya has comido?.",
        "hint": "Оба времени верны, но американский вес — на indefinido. Какая форма прошедшего? 🍽️"
      },
      {
        "type": "choice",
        "q": "В Америке «Recién llegué» значит:",
        "opts": [
          "я только что пришёл",
          "я пришёл давно",
          "я новоприбывший",
          "я скоро приду"
        ],
        "answer": "я только что пришёл",
        "why": "Перед личной формой глагола американское recién = «только что». Значение «свеже-» (recién hecho) — только с причастием.",
        "hint": "recién стоит перед глаголом, а не причастием. Это про «недавно» или «миг назад»? ⏱️"
      },
      {
        "type": "choice",
        "q": "Какой глагол лучше НЕ говорить в Мексике из-за табу?",
        "opts": [
          "coger",
          "tomar",
          "agarrar",
          "subir"
        ],
        "answer": "coger",
        "why": "В Мексике, Аргентине и ряде стран coger — грубое сексуальное табу. «Сесть на автобус» там — tomar / agarrar.",
        "hint": "Одно нейтральное в Испании слово за океаном стало табу. Какое обходят? 🚌"
      },
      {
        "type": "choice",
        "q": "В Мексике «Ahorita voy» обычно значит:",
        "opts": [
          "пойду чуть погодя, не сию секунду",
          "иду прямо сейчас, немедленно",
          "не собираюсь идти",
          "ходил недавно"
        ],
        "answer": "пойду чуть погодя, не сию секунду",
        "why": "Диминутив ahorita смягчает срок: часто «попозже», а не «немедленно». Ждёшь мгновения — попадаешь впросак.",
        "hint": "Уменьшительное смягчает не только тон, но и срок. «Сейчас же» или «попозже»? ⏳"
      },
      {
        "type": "choice",
        "q": "«Un pobre hombre» значит:",
        "opts": [
          "бедняга, которого жаль",
          "человек без денег",
          "слабый человек",
          "человек маленького роста"
        ],
        "answer": "бедняга, которого жаль",
        "why": "Перед существительным pobre оценочно — «несчастный». «Без денег» — только в постпозиции: un hombre pobre.",
        "hint": "Позиция решает: перед словом — оценка, после — классификация. Где здесь pobre? 🎯"
      },
      {
        "type": "choice",
        "q": "«Llegó tarde, ___ molestó a todos.» (что рассердило всех — ко всей мысли)",
        "opts": [
          "lo cual",
          "que",
          "cual",
          "el cual"
        ],
        "answer": "lo cual",
        "why": "Отсылка к целой предыдущей мысли — это lo cual (или lo que). Голое que требует существительного-антецедента.",
        "hint": "Связка отсылает не к слову, а ко всей ситуации. Какое относительное это умеет? 🔗"
      },
      {
        "type": "choice",
        "q": "В высоком стиле «el rey que fundara la ciudad», форма «fundara» равна:",
        "opts": [
          "había fundado",
          "fundaría",
          "fundó ayer",
          "funde"
        ],
        "answer": "había fundado",
        "why": "Литературная -ra в относительном придаточном о прошлом = pluscuamperfecto: había fundado. Это не «основал бы».",
        "hint": "Это не условное «бы» и не субхунтив-желание, а книжное «сделал раньше». Какое время? 📜"
      },
      {
        "type": "gap",
        "q": "Compré un libro y ___ leí en un día. <i style='opacity:.6'>замени повтор местоимением</i>",
        "accept": [
          "lo"
        ],
        "model": "lo",
        "why": "Связность держится на замене: местоимение lo вместо повтора el libro. Повтор существительного звучит по-детски.",
        "hint": "Вместо второго «книгу» — короткое местоимение прямого дополнения 🔁"
      },
      {
        "type": "gap",
        "q": "Sea cual ___ el motivo, no es excusa. <i style='opacity:.6'>застывший футур субхунтива от ser</i>",
        "accept": [
          "fuere"
        ],
        "model": "fuere",
        "why": "В застывшем обороте живёт futuro de subjuntivo: sea cual fuere. В быту его не сочиняют — берут только в готовых формулах.",
        "hint": "Пословично-книжная форма на -re от ser; живёт лишь в застывших оборотах ⚖️"
      },
      {
        "type": "gap",
        "q": "En México, «телефон» es el ___. <i style='opacity:.6'>американское слово</i>",
        "accept": [
          "celular"
        ],
        "model": "celular",
        "why": "Телефон: móvil (Испания) против celular (вся Америка). Понимать надо оба ряда.",
        "hint": "Не móvil, а американский эквивалент — от слова «сотовый» 📱"
      },
      {
        "type": "gap",
        "q": "El autor ___ novelas leo es peruano. <i style='opacity:.6'>чей; согласуй с novelas</i>",
        "accept": [
          "cuyas"
        ],
        "model": "cuyas",
        "why": "Cuyo берёт род и число не от владельца (autor), а от обладаемого — novelas (ж. р. мн. ч.) → cuyas.",
        "hint": "«Чей» согласуется не с автором, а с тем, чем он обладает — с романами 📚"
      },
      {
        "type": "trRE",
        "ru": "Это мой давний друг.",
        "accept": [
          "es un viejo amigo",
          "es un viejo amigo mío",
          "es un viejo amigo mio",
          "es un antiguo amigo",
          "es un viejo amigo mío.",
          "es un antiguo amigo mío"
        ],
        "model": "Es un viejo amigo.",
        "why": "Позиция решает смысл: viejo перед словом — «давний», а amigo viejo был бы «пожилой».",
        "hint": "«Давний» — прилагательное ставь перед словом, чтобы не вышло «пожилой» 👥"
      },
      {
        "type": "trRE",
        "ru": "Мне нужна машина.",
        "accept": [
          "necesito un carro",
          "necesito un auto",
          "necesito un coche",
          "me hace falta un carro",
          "me hace falta un auto"
        ],
        "model": "Necesito un carro.",
        "why": "Машина: coche (Испания) / carro (бóльшая часть Америки) / auto (Южный конус). Все верны — держись одного ряда.",
        "hint": "Возьми слово одного региона (например, американское) и не мешай варианты 🚗"
      },
      {
        "type": "trRE",
        "ru": "Хотя план дорог, он осуществим.",
        "accept": [
          "si bien el plan es caro es viable",
          "aunque el plan es caro es viable",
          "aunque el plan sea caro es viable",
          "si bien el plan es caro, es viable",
          "aunque el plan sea caro, es viable"
        ],
        "model": "Si bien el plan es caro, es viable.",
        "why": "Уступку высокого регистра вводит si bien = «хотя, пусть и» (= aunque). Для письма звучит элегантнее.",
        "hint": "Уступку «хотя…» можно ввести книжным коннектором si bien или обычным aunque ✍️"
      },
      {
        "type": "trER",
        "en": "¿De dónde sos vos?",
        "accept": [
          "ты откуда",
          "откуда ты",
          "а ты откуда",
          "ты сам откуда",
          "ты откуда родом"
        ],
        "model": "Ты откуда?",
        "why": "Voseo: sos = eres, vos = близкое «ты» (не вежливое «вы»). Это дружеский вопрос «ты откуда?».",
        "hint": "sos vos — это близкое «ты», а не «вы». Спрашивают про место 🇦🇷"
      },
      {
        "type": "trER",
        "en": "Hemos de resolverlo hoy.",
        "accept": [
          "нам предстоит решить это сегодня",
          "нам следует решить это сегодня",
          "мы должны решить это сегодня",
          "нам надо решить это сегодня",
          "нам предстоит это решить сегодня",
          "нам нужно решить это сегодня"
        ],
        "model": "Нам предстоит решить это сегодня.",
        "why": "haber de + инфинитив — книжное долженствование-предстоящее «надлежит, предстоит», а не perfect (hemos resuelto).",
        "hint": "«hemos de + инфинитив» — не «мы решили», а «нам предстоит/следует» 📌"
      },
      {
        "type": "order",
        "answer": "llegó tarde lo cual molestó a todos",
        "accept": [
          "llegó tarde lo cual molestó a todos",
          "llego tarde lo cual molesto a todos"
        ],
        "hintRu": "Собери: «Он пришёл поздно, что рассердило всех.»",
        "why": "Ко всей мысли отсылает lo cual (не que): llegó tarde, lo cual molestó a todos.",
        "hint": "Отсылка ко всей ситуации — через lo cual, а не голое que 🔗"
      },
      {
        "type": "order",
        "answer": "vos siempre tenés razón",
        "accept": [
          "vos siempre tenés razón",
          "vos siempre tenes razon",
          "siempre tenés razón vos"
        ],
        "hintRu": "Собери на риоплатском (voseo): «Ты всегда прав.»",
        "why": "Voseo держит всю парадигму: vos + tenés (не tienes). Выбрал обращение — держи весь набор форм.",
        "hint": "Форма vos требует tenés, а не tienes; собери по одной системе 🇦🇷"
      },
      {
        "type": "match",
        "q": "Соедини пиренейское слово с американским эквивалентом.",
        "pairs": [
          [
            "coche",
            "carro"
          ],
          [
            "móvil",
            "celular"
          ],
          [
            "ordenador",
            "computadora"
          ],
          [
            "zumo",
            "jugo"
          ],
          [
            "patata",
            "papa"
          ]
        ],
        "why": "Одна вещь — два имени по берегам океана. Рецепция — знать оба ряда.",
        "hint": "Одна вещь — разные слова; вспомни американский ряд 🌎"
      },
      {
        "type": "match",
        "q": "Соедини выражение с его значением.",
        "pairs": [
          [
            "un pobre hombre",
            "бедняга"
          ],
          [
            "un hombre pobre",
            "небогатый"
          ],
          [
            "sea cual fuere",
            "каким бы ни был"
          ],
          [
            "el rey que fundara",
            "король, что основал (раньше)"
          ],
          [
            "lo cual",
            "что (ко всей мысли)"
          ]
        ],
        "why": "Позиция и форма лепят смысл: оценка/классификация, застывший футур субхунтива, лит. -ra, отсылка ко всей мысли.",
        "hint": "Где оценка, где классификация, где высокий стиль — держи смысл конструкции 🎯"
      },
      {
        "type": "describe",
        "prompt": "Кратко расскажи о себе так, как сказал бы человек из Латинской Америки: используй ustedes, carro, celular и не мешай варианты (без vosotros/móvil). 2–3 предложения.",
        "keywords": [
          "carro",
          "celular",
          "computadora",
          "ustedes",
          "acá",
          "aca",
          "platicar",
          "jugo",
          "papa",
          "manejar"
        ],
        "minWords": 12,
        "model": "Acá todos tienen carro y celular. Cuando salgo con amigos, les pregunto a ustedes qué quieren hacer. Me gusta manejar y platicar en un café.",
        "why": "Продукция C2 — держать один вариант связно: американский набор (carro, celular, ustedes), без пиренейской примеси.",
        "hint": "Выбери один ряд (американский) и держись его: carro, celular, ustedes — без coche/móvil/vosotros 🌎"
      },
      {
        "type": "describe",
        "prompt": "Опиши одним связным периодом человека и его книгу: пусти в ход cuyo/lo cual, замену местоимением и тонкую пунктуацию (двоеточие или точка с запятой). 2–3 предложения.",
        "keywords": [
          "cuyo",
          "cuyas",
          "cuya",
          "lo cual",
          "por la cual",
          "es decir",
          "sin embargo",
          "en cambio"
        ],
        "minWords": 12,
        "model": "Conocí a un autor cuyas novelas leo desde niño. Llegó tarde a la charla, lo cual molestó a algunos; a mí, en cambio, me dio igual: al fin lo escuchaba en directo.",
        "why": "Сложный период C2 сцепляется чисто: cuyo (согласован с обладаемым), lo cual (ко всей мысли), замена и пунктуация вместо повтора.",
        "hint": "Свяжи мысль без повтора: cuyo + lo cual + местоимение, а знаки (двоеточие, точка с запятой) держат логику ✍️"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен C2",
    "intro": "Это финал уровня C2! 33 задания по всему пройденному: прагматика и импликатура, ирония и литота, фразеология и регистр, латинизмы и коннотация, варианты испанского и voseo, лексика Америки, сложный синтаксис и литературный субхунтив, юмор и тропы, культуремы, расфоссилизация грамматики и лексики, ритм и дистанция, а ещё интеграция и свой авторский голос. Соберись — и вперёд к грамоте C2! 🏆",
    "review": [
      "Прагматика: импликатура, косвенный акт, ирония/литота, атенуация, эвиденциальность (habría dimitido)",
      "Слово в точку: идиомы (tirar la toalla), рефраны, коллокации (error garrafal), регистр, латинизмы (motu proprio)",
      "Испанский мира: seseo/ustedes, <b>voseo</b> (vos tenés), лексика Америки (carro/celular), мина coger",
      "Синтаксис: <b>un pobre hombre</b> ≠ hombre pobre · lo cual · cuyo · sea cual fuere · связность и пунктуация",
      "Голос автора: юмор и тропы, культуремы (la sobremesa, quijotesco), глаголы речи",
      "Расфоссилизация: es/está aburrido, генерич. артикль, creo que + indicativo, por/para, régimen (soñar con)",
      "Ложные друзья (realizar, actualmente, sensible), плеоназм, dequeísmo/laísmo, ритм и дистанция, свой голос"
    ],
    "q": [
      {
        "type": "choice",
        "q": "«¿Tienes fuego?» между людьми обычно:",
        "opts": [
          "просьба дать прикурить",
          "вопрос «да/нет» про наличие огня",
          "предупреждение о пожаре",
          "приглашение закурить вместе"
        ],
        "answer": "просьба дать прикурить",
        "why": "Косвенный акт: форма — вопрос, интенция — просьба. Ответить «Sí» и не подать огонь — прочитать форму и не заметить смысл.",
        "hint": "Никто не ждёт ответа «да, есть». Что человек хочет, чтобы ты сделал? 🔥"
      },
      {
        "type": "choice",
        "q": "«No está nada mal» на самом деле значит:",
        "opts": [
          "очень хорошо, отлично",
          "так себе, сойдёт",
          "совсем плохо",
          "никак не оценить"
        ],
        "answer": "очень хорошо, отлично",
        "why": "Литота отрицает слабое и усиливает: nada mal — это похвала, а не равнодушие.",
        "hint": "Двойное преуменьшение = усиление. Плюс это или минус? 😋"
      },
      {
        "type": "choice",
        "q": "В Испании «Igual viene» значит:",
        "opts": [
          "может быть, придёт",
          "придёт точно так же",
          "придёт обязательно",
          "не придёт"
        ],
        "answer": "может быть, придёт",
        "why": "В Испании igual — смягчитель «может быть». «Одинаково» было бы igualmente.",
        "hint": "igual тут не про сравнение, а про вероятность 🎚️"
      },
      {
        "type": "choice",
        "q": "На настойчивое предложение отвечают: «Me lo pensaré». Чаще всего это:",
        "opts": [
          "вежливый отказ",
          "твёрдое согласие",
          "приказ",
          "просьба о помощи"
        ],
        "answer": "вежливый отказ",
        "why": "Непрямой отказ носит форму отсрочки: «подумаю» нередко значит «нет».",
        "hint": "«Нет» бьёт по лицу, поэтому его прячут в «подумаю» 🚪"
      },
      {
        "type": "choice",
        "q": "Заголовок «El presidente habría mentido» переводится:",
        "opts": [
          "президент, предположительно/якобы, солгал",
          "президент солгал бы",
          "президент солжёт",
          "президенту пришлось солгать"
        ],
        "answer": "президент, предположительно/якобы, солгал",
        "why": "Condicional de rumor подаёт непроверенный факт «якобы солгал», а не условие «бы».",
        "hint": "Условная форма в прессе снимает ответственность за факт, а не вводит «бы» 📰"
      },
      {
        "type": "choice",
        "q": "«O sea, que no vienes.» Что делает здесь «o sea»?",
        "opts": [
          "переформулирует, подводит вывод",
          "прощается",
          "спрашивает время",
          "отдаёт приказ"
        ],
        "answer": "переформулирует, подводит вывод",
        "why": "o sea — маркер устной речи: уточняет и переформулирует («то есть»). В эссе его место занимают связки (por lo tanto).",
        "hint": "Это устный клей «то есть». Что он делает с уже сказанным? 🔌"
      },
      {
        "type": "choice",
        "q": "«¿Me echas una mano?» значит:",
        "opts": [
          "Поможешь мне?",
          "Подашь мне руку?",
          "Помашешь мне?",
          "Отпустишь меня?"
        ],
        "answer": "Поможешь мне?",
        "why": "Ложная прозрачность: echar una mano — «помочь», а dar la mano — «подать руку».",
        "hint": "Фраза «подозрительно легко» переводится — это и есть ловушка 🤝"
      },
      {
        "type": "choice",
        "q": "«En casa del herrero, cuchillo de palo» по-русски ближе всего к:",
        "opts": [
          "сапожник без сапог",
          "куй железо, пока горячо",
          "не всё то золото, что блестит",
          "семь раз отмерь"
        ],
        "answer": "сапожник без сапог",
        "why": "Совпадает функция (мастер без своего же), а образ другой. Русскую пословицу берут по функции, не по словам.",
        "hint": "Смысл — «умеет для других, а себе не сделал». Какой русский аналог? 🔨"
      },
      {
        "type": "choice",
        "q": "«Cometió un error ___.» Фиксированный усилитель:",
        "opts": [
          "garrafal",
          "incondicional",
          "canino",
          "sepulcral"
        ],
        "answer": "garrafal",
        "why": "error garrafal — устойчивая пара. Incondicional идёт с apoyo, canino — с hambre, sepulcral — с silencio.",
        "hint": "Каждый усилитель закреплён за своим словом. Ошибка бывает какой? 🎯"
      },
      {
        "type": "choice",
        "q": "«Lo pasamos de puta madre» означает:",
        "opts": [
          "отлично провели время",
          "ужасно провели время",
          "обидели кого-то",
          "поругались"
        ],
        "answer": "отлично провели время",
        "why": "Taco de puta madre — усилитель-похвала «класс», а не адресное оскорбление. Русским матом его не мерь.",
        "hint": "Форма грубая, функция — усилить в плюс 😄"
      },
      {
        "type": "choice",
        "q": "Верная форма латинизма «по собственной воле»:",
        "opts": [
          "motu proprio",
          "motu propio",
          "de motu propio",
          "a motu proprio"
        ],
        "answer": "motu proprio",
        "why": "Латинская форма застыла: proprio (не propio) и без предлога.",
        "hint": "Не подгоняй под propio и не добавляй предлог 🏛️"
      },
      {
        "type": "choice",
        "q": "Чтобы похвалить стройную фигуру, скажешь «una figura ___»:",
        "opts": [
          "esbelta",
          "escuálida",
          "corpulenta",
          "raquítica"
        ],
        "answer": "esbelta",
        "why": "esbelta — похвала «стройная, статная». Escuálida и raquítica — негатив, corpulenta — «дородная».",
        "hint": "Нужен оттенок с плюсом, а не «болезненно тощая» 🙂"
      },
      {
        "type": "choice",
        "q": "«¿Ustedes quieren café?» от друзей в Мексике — это:",
        "opts": [
          "норма, ustedes покрывает и «ты во множественном»",
          "ошибка, надо vosotros",
          "слишком официально для друзей",
          "воссео"
        ],
        "answer": "норма, ustedes покрывает и «ты во множественном»",
        "why": "В Америке vosotros нет: ustedes — и близость, и вежливость. Поправлять на vosotros значит навязывать чужой вариант.",
        "hint": "За океаном одна форма на всё множественное «вы». Это ошибка или норма? 👥"
      },
      {
        "type": "choice",
        "q": "Какая форма voseo верна?",
        "opts": [
          "vos tenés",
          "vos tienes",
          "tú tenés",
          "vos tenéis"
        ],
        "answer": "vos tenés",
        "why": "Vos требует своей ударной парадигмы: tenés, sos, querés. Дифтонговое tienes — от tú.",
        "hint": "У vos своя концовка без дифтонга ie 🇦🇷"
      },
      {
        "type": "gap",
        "q": "En México, para no decir un tabú: no digas «coger el bus», di «___ el bus». <i style='opacity:.6'>нейтральный глагол</i>",
        "accept": [
          "tomar",
          "agarrar"
        ],
        "model": "tomar",
        "why": "В Америке coger — грубое табу. «Сесть на автобус» несут нейтральные tomar / agarrar.",
        "hint": "Нейтральная замена для «сесть на»: не coger, а глагол «брать/садиться» 🚌"
      },
      {
        "type": "gap",
        "q": "El autor ___ novelas leo es peruano. <i style='opacity:.6'>чей; согласуй с novelas</i>",
        "accept": [
          "cuyas"
        ],
        "model": "cuyas",
        "why": "Cuyo согласуется с обладаемым (novelas, ж. р. мн. ч.), а не с владельцем (autor) → cuyas.",
        "hint": "«Чей» берёт род и число от того, чем обладают, — от романов 📚"
      },
      {
        "type": "gap",
        "q": "Sea cual ___ el resultado, seguiremos. <i style='opacity:.6'>застывший футур субхунтива от ser</i>",
        "accept": [
          "fuere"
        ],
        "model": "fuere",
        "why": "В застывшем обороте живёт futuro de subjuntivo: sea cual fuere. В быту его не сочиняют.",
        "hint": "Книжная форма на -re от ser в готовом обороте «каким бы ни был» ⚖️"
      },
      {
        "type": "gap",
        "q": "Me gusta ___ café por la mañana. <i style='opacity:.6'>генерический артикль — не опускай</i>",
        "accept": [
          "el"
        ],
        "model": "el",
        "why": "Русский роняет артикль — испанский требует генерический el: me gusta el café. Автопилот его теряет.",
        "hint": "«Люблю кофе вообще» — перед café нужен обязательный артикль ☕"
      },
      {
        "type": "gap",
        "q": "Me acuerdo ___ que se lo prometí. <i style='opacity:.6'>обязательный предлог при acordarse</i>",
        "accept": [
          "de"
        ],
        "model": "de",
        "why": "acordarse управляет de: me acuerdo de que… Пропуск de — это queísmo (ошибка).",
        "hint": "Глагол acordarse требует предлога перед que — короткое словечко 🔗"
      },
      {
        "type": "trRE",
        "ru": "Я мечтаю о путешествии.",
        "accept": [
          "sueño con un viaje",
          "sueno con un viaje",
          "yo sueño con un viaje",
          "yo sueno con un viaje",
          "sueño con viajar",
          "sueno con viajar"
        ],
        "model": "Sueño con un viaje.",
        "why": "Управление в комплекте с глаголом: soñar con (не de). Предлог не переводится один в один.",
        "hint": "«Мечтать о» по-испански идёт с предлогом con, а не de 🌍"
      },
      {
        "type": "trRE",
        "ru": "Хотя это дорого, оно того стоит.",
        "accept": [
          "si bien es caro vale la pena",
          "aunque es caro vale la pena",
          "aunque sea caro vale la pena",
          "si bien es caro, vale la pena",
          "aunque es caro, vale la pena"
        ],
        "model": "Si bien es caro, vale la pena.",
        "why": "Уступку высокого регистра вводит si bien = «хотя, пусть и» (= aunque).",
        "hint": "Уступку «хотя…» можно ввести книжным si bien или обычным aunque ✍️"
      },
      {
        "type": "trRE",
        "ru": "На эти длинные выходные мы уезжаем за город.",
        "accept": [
          "este puente nos vamos fuera",
          "este puente nos vamos al campo",
          "el puente nos vamos fuera",
          "este puente nos marchamos fuera",
          "este puente salimos fuera",
          "este puente nos vamos de la ciudad"
        ],
        "model": "Este puente nos vamos fuera.",
        "why": "Культурема el puente — «мостик» длинных выходных (праздник + прихваченный день). Переведёшь как «мост» — потеряешь смысл.",
        "hint": "«Длинные выходные» по-испански — одно слово-культурема (не «мост») 📅"
      },
      {
        "type": "trRE",
        "ru": "Он свой парень, надёжный.",
        "accept": [
          "es un tío legal",
          "es un tio legal",
          "es un tío legal de fiar",
          "es un tio legal de fiar",
          "es de fiar",
          "es un tío de fiar",
          "es un tipo legal"
        ],
        "model": "Es un tío legal, de fiar.",
        "why": "Медиация передаёт смысл в нужном регистре: «свой, надёжный» — это es un tío legal, de fiar, а не «es una persona humana».",
        "hint": "Передай не слова, а регистр: разговорное «свой парень» — tío legal, de fiar 🤝"
      },
      {
        "type": "trER",
        "en": "Traduttore, traditore.",
        "accept": [
          "переводчик предатель",
          "переводчик это предатель",
          "перевести значит предать",
          "переводить значит предавать",
          "переводчик всегда предатель"
        ],
        "model": "Переводчик — предатель.",
        "why": "Парономазия (похоже звучащие слова) — приём, а не опечатка: traduttore/traditore. Смысл: перевод неизбежно искажает.",
        "hint": "Это игра почти-омонимов, а не ошибка. Кем оказывается переводчик? 🎭"
      },
      {
        "type": "trER",
        "en": "Se bebió una copa.",
        "accept": [
          "он выпил бокал",
          "выпил бокал",
          "он выпил рюмку",
          "он выпил бокал вина",
          "выпил бокальчик",
          "она выпила бокал"
        ],
        "model": "Он выпил бокал.",
        "why": "Метонимия: copa стоит за напитком в ней, а не за стеклом. Замена по смежности.",
        "hint": "«copa» здесь — не стекло, а его содержимое. Что именно выпили? 🍷"
      },
      {
        "type": "trER",
        "en": "Mi español ahora es mío.",
        "accept": [
          "мой испанский теперь мой",
          "мой испанский теперь только мой",
          "теперь мой испанский мой",
          "мой испанский стал моим",
          "мой испанский теперь по-настоящему мой"
        ],
        "model": "Мой испанский теперь мой.",
        "why": "Итог пути: C2 — это когда перестаёшь переводить и говоришь своим голосом; язык стал твоим.",
        "hint": "Финальная мысль курса: язык больше не «переведённый», а какой? 💛"
      },
      {
        "type": "order",
        "answer": "venga lo que viniere",
        "accept": [
          "venga lo que viniere"
        ],
        "hintRu": "Собери застывший оборот: «Будь что будет.»",
        "why": "Пословичный оборот хранит futuro de subjuntivo (viniere). Его узнают, а не сочиняют заново.",
        "hint": "Готовый оборот «будь что будет» с редкой формой на -re ⚖️"
      },
      {
        "type": "order",
        "answer": "ni te llamo ni te escribo ni te busco",
        "accept": [
          "ni te llamo ni te escribo ni te busco"
        ],
        "hintRu": "Собери параллелизм: «Ни звоню, ни пишу, ни ищу.»",
        "why": "Paralelismo — повтор синтаксической схемы (ni te… ni te…): не бедность, а нажим и ритм.",
        "hint": "Повтори схему «ni te + глагол» три раза — это фигура ритма 🥁"
      },
      {
        "type": "order",
        "answer": "no te digo que esté mal del todo",
        "accept": [
          "no te digo que esté mal del todo",
          "no te digo que este mal del todo"
        ],
        "hintRu": "Собери мягкую уступку: «Не скажу, что совсем плохо…»",
        "why": "Интеграция: атенуация (no… del todo) + субхунтив (esté) держат оценку мягкой. Плоское «está mal» не выдаёт мастера.",
        "hint": "Смягчи оценку: «no te digo que…» + субхунтив esté + del todo 🎚️"
      },
      {
        "type": "match",
        "q": "Соедини выражение с его смыслом.",
        "pairs": [
          [
            "Hace frío aquí",
            "закрой окно (намёк)"
          ],
          [
            "No está nada mal",
            "очень хорошо"
          ],
          [
            "tirar la toalla",
            "сдаться"
          ],
          [
            "por lo visto",
            "судя по всему"
          ],
          [
            "de puta madre",
            "отлично (груб.)"
          ]
        ],
        "why": "Прагматика недель 1–2 в одном месте: намёк, литота, идиома, пометка источника, усилитель-taco.",
        "hint": "Вспомни, что делает каждое: намёк, литота, идиома, пометка источника, усилитель 🎯"
      },
      {
        "type": "match",
        "q": "Соедини слово или форму с его значением.",
        "pairs": [
          [
            "carro",
            "машина (Ам.)"
          ],
          [
            "vos tenés",
            "у тебя есть (voseo)"
          ],
          [
            "la sobremesa",
            "долгий разговор за столом"
          ],
          [
            "actualmente",
            "сейчас, в наше время"
          ],
          [
            "un pobre hombre",
            "бедняга"
          ]
        ],
        "why": "Недели 3–4: вариант, voseo, культурема, ложный друг (actualmente ≠ «актуально») и позиция прилагательного.",
        "hint": "Здесь варианты, культуремы и ложные друзья — держись смысла, а не созвучия 🌎"
      },
      {
        "type": "describe",
        "prompt": "Напиши вежливую просьбу коллеге прислать отчёт к пяти: с преамбулой и мягкой дистанцией (oye, perdona que te moleste, ¿podrías…?, si no te importa). 2–3 предложения.",
        "keywords": [
          "oye",
          "perdona",
          "que te moleste",
          "podrías",
          "podrias",
          "si no te importa",
          "te importaría",
          "te importaria",
          "gracias",
          "antes de las cinco",
          "el informe",
          "te agradecería"
        ],
        "minWords": 14,
        "model": "Oye, perdona que te moleste. ¿Podrías mandarme el informe antes de las cinco, si no te importa? Te lo agradezco un montón.",
        "why": "Дистанцию калибруют преамбулой: короткая подводка превращает приказ в уважительную просьбу — смысл тот же, тон другой.",
        "hint": "Не руби «manda el informe»: добавь подводку (perdona que te moleste) и заверни в вопрос (¿podrías…?) 🕊️"
      },
      {
        "type": "describe",
        "prompt": "Заверши курс своим голосом: напиши мини-колонку на 3–4 предложения о том, что тебе даёт испанский. Заяви тезис, добавь лёгкую иронию и одну идиому к месту, держи один регистр.",
        "keywords": [
          "creo que",
          "estoy convencido",
          "al parecer",
          "dar en el clavo",
          "di en el clavo",
          "la verdad",
          "en el fondo",
          "por así decirlo",
          "por asi decirlo",
          "matiz",
          "dicho esto",
          "tirar la toalla"
        ],
        "minWords": 20,
        "model": "Estoy convencido de que aprender un idioma no va de acumular palabras, sino de encontrar una voz. Al parecer, ahora todos presumen de bilingües en las redes; yo, en cambio, prefiero equivocarme hablando. Nunca tiré la toalla, y ahí, creo, di en el clavo. Dicho esto, aún me queda camino: mejor así.",
        "why": "C2 — не «слов больше», а точнее попадание: тезис + ирония + идиома к месту + ровный регистр складываются в свой голос.",
        "hint": "Заяви тезис, добавь щепотку иронии и одну идиому к месту (dar en el clavo) — и держи один тон 💛"
      }
    ]
  }
};
