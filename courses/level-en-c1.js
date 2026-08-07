/* English C1 — level config + 30-day plan (COURSE) + weekly exams (EXAMS).
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'C1',
  course:'en-c1',
  pkey:'langbook-c1-progress',
  preview:true,
  finalNote:'Это твоя победа 💛 Полный уровень English C1 — позади. Дальше открывается C2. Горжусь тобой!'
};

const COURSE = [
  {wn:"01", wt:"Эмфаза, фокус и инверсия", days:[
    {n:1,t:"Никогда я не видел…",p:"инверсия после отрицательных наречий в начале…"},
    {n:2,t:"Не успел, как…",p:"корреляты + инверсия + past perfect: No sooner had I… than……"},
    {n:3,t:"Только тогда…",p:"only-фронтинг и ограничительные обороты."},
    {n:4,t:"Знай я тогда…",p:"инверсия в условных без if: Had I known… / Were I to… /…"},
    {n:5,t:"Именно Анна…",p:"расщеплённое предложение It-cleft: It was Anna who/that……"},
    {n:6,t:"Что мне нужно…",p:"псевдо-cleft: What I need is…; All I want is…; The reason…"},
    {n:7,t:"🔄 Повторение №1",p:"повторение + тест."}
  ]},
  {wn:"02", wt:"Нереальные миры: условные, сослагательное, модальность", days:[
    {n:8,t:"Если бы тогда — то сейчас",p:"смешанные условные: прошлое условие → настоящий результат."},
    {n:9,t:"Жаль, что…",p:"нереальное прошлое: wish/if only + past (perfect); would…"},
    {n:10,t:"Настаиваю, чтобы…",p:"сослагательное наклонение: I suggest (that) he be…; it's…"},
    {n:11,t:"Должно быть, он…",p:"модальные дедукции о прошлом: must / can't / couldn't have…"},
    {n:12,t:"Похоже, склонен…",p:"смягчение и приблизительность: tends to, would seem to, may…"},
    {n:13,t:"Он сказал, что придёт",p:"будущее в прошедшем + полное согласование времён: was going…"},
    {n:14,t:"🔄 Повторение №2",p:"повторение + тест."}
  ]},
  {wn:"03", wt:"Сжатие и связность: продвинутые клаузы и когезия", days:[
    {n:15,t:"Закончив работу…",p:"причастные обороты: Having finished…, Walking home…, Filmed…"},
    {n:16,t:"Хоть и устал…",p:"безглагольные и сжатые обороты: Though tired…; Once finished……"},
    {n:17,t:"Многие из которых…",p:"квантор/предлог + of which/whom: many of whom…, the cause of…"},
    {n:18,t:"Считается, что…",p:"безличный пассив и report-структуры: It is said that…; He is…"},
    {n:19,t:"Опредметить мысль",p:"номинализация и академический регистр: глагол →…"},
    {n:20,t:"И я тоже",p:"эллипсис и субституция: So do I / Neither do I; do so; the…"},
    {n:21,t:"🔄 Повторение №3",p:"повторение + тест."}
  ]},
  {wn:"04", wt:"Регистр, нюанс и точность", days:[
    {n:22,t:"Несмотря на это",p:"формальные коннекторы и когезия: notwithstanding, albeit…"},
    {n:23,t:"Как бы я ни…",p:"продвинутая уступка: much as I…, however hard…, whatever /…"},
    {n:24,t:"Я ведь говорил",p:"фокусные наречия и эмфатическое do: even / only / just /…"},
    {n:25,t:"Абсолютно вымотан",p:"градуируемые и неградуируемые прилагательные +…"},
    {n:26,t:"Слова дружат",p:"коллокация, колигация и зависимые предлоги: heavy rain, take…"},
    {n:27,t:"Не моя чашка чая",p:"идиомы и продвинутые фразовые глаголы: figurative idioms +…"},
    {n:28,t:"Выяснить или установить",p:"переключение регистра: формальный ↔ неформальный; латинизм vs…"},
    {n:29,t:"Признаться, …",p:"вводные/оценочные наречия и шлифовка связности: admittedly…"},
    {n:30,t:"🏆 Моя позиция",p:"финальный проект."}
  ]}
];

/* ===== weekly checkpoint exams (content) ===== */
const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Привет, это Мира 💛 Первая неделя C1 — про вес и фокус, про то, что делает речь «взрослой». Этот расширенный экзамен из 25 заданий проверит инверсию после отрицательных наречий (Never/Seldom/Rarely have I…, Little did I know, Not once did…), пары No sooner… than / Hardly… when / Not only… but also, ограничительный фронтинг (Only then, Not until, Under no circumstances, In no way), условную инверсию без if (Had I known…, Were I you…, Should you need…) и расщепления — It-cleft (It was Anna who…) и wh-/all-cleft (What I need is…, All I want is…). Набери 80% — и Неделя 2 откроется.",
    "review": [
      "Инверсия после отрицания: <b>Never / Seldom / Rarely have I…</b> (вспомогательный ПЕРЕД подлежащим)",
      "do-support при фронтинге: <b>Seldom does he… · Not once did he… · Little did I know…</b>",
      "<b>No sooner had I… than…</b> · <b>Hardly had I… when…</b> — не путай than и when!",
      "<b>Not only did he…, but he also…</b>",
      "Ограничительный фронтинг: <b>Only then / Not until / Under no circumstances / In no way</b> + инверсия",
      "Условие без if: <b>Had I known… · Were I you… · Should you need…</b>",
      "It-cleft: <b>It was Anna who/that…</b> (выделяем подлежащее, дополнение, обстоятельство)",
      "Wh-/all-cleft: <b>What I need is… · All I want is… · The reason why…</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Never ___ such a breathtaking sunset.",
        "opts": [
          "have I seen",
          "I have seen",
          "saw I",
          "I saw"
        ],
        "answer": "have I seen",
        "why": "После выноса отрицательного Never в начало нужна инверсия — вспомогательный have встаёт ПЕРЕД подлежащим, как в вопросе: Never have I seen… 💛",
        "hint": "Отрицательное наречие открыло предложение — теперь порядок «вопросный»: сначала маленький вспомогательный глагол, потом «I». 🌅"
      },
      {
        "type": "choice",
        "q": "No sooner ___ asleep than the alarm went off.",
        "opts": [
          "had I fallen",
          "I had fallen",
          "did I fall",
          "I fell"
        ],
        "answer": "had I fallen",
        "why": "No sooner в начале требует инверсии с past perfect: had I fallen… than… Ловушка — пара именно than, а не when.",
        "hint": "После No sooner нужна форма «давнопрошедшего» с перестановкой: had + «I» + 3-я форма. 😴"
      },
      {
        "type": "choice",
        "q": "Hardly had the meeting begun ___ the fire alarm rang.",
        "opts": [
          "when",
          "than",
          "then",
          "that"
        ],
        "answer": "when",
        "why": "Hardly/Scarcely дружит с when, а No sooner — с than. Это классическая ловушка на коррелятах.",
        "hint": "У Hardly свой постоянный «партнёр» — не than. Вспомни пару Hardly … ___. ⏱️"
      },
      {
        "type": "choice",
        "q": "Not only ___ the deadline, but she also won the award.",
        "opts": [
          "did she meet",
          "she met",
          "she did meet",
          "met she"
        ],
        "answer": "did she meet",
        "why": "Not only в начале клаузы → инверсия: did she meet. Вторая часть обычно подхватывает but (she) also.",
        "hint": "Раз Not only открыло предложение, ставь вспомогательный did перед «she», а смысловой глагол — в начальной форме. 🏆"
      },
      {
        "type": "gap",
        "q": "___ I known about the strike, I would have left earlier. <i style='opacity:.6'>(if I had known → инверсия)</i>",
        "accept": [
          "had",
          "had i"
        ],
        "model": "Had",
        "why": "Условие без if строится инверсией: Had I known = If I had known. Вспомогательный had выходит на первое место.",
        "hint": "Убери if и подними вспомогательный глагол в начало: ___ I known… 🔑"
      },
      {
        "type": "choice",
        "q": "___ you need any assistance, please let me know.",
        "opts": [
          "Should",
          "Would",
          "Had",
          "Were"
        ],
        "answer": "Should",
        "why": "Should you need… = If you should/happen to need… — формальная условная инверсия о будущем.",
        "hint": "Это вежливое «если вдруг понадобится»: условие без if начинается с модального, который намекает на возможность. 🙂"
      },
      {
        "type": "gap",
        "q": "Only then ___ I realise how serious it was. <i style='opacity:.6'>(do/did)</i>",
        "accept": [
          "did",
          "did i"
        ],
        "model": "did",
        "why": "После Only then в начале главная клауза инвертируется: did I realise. Без вспомогательного никак.",
        "hint": "Ограничительный оборот Only then тянет за собой «вопросный» порядок — нужен вспомогательный прошедшего перед «I». 💡"
      },
      {
        "type": "choice",
        "q": "Not until midnight ___ the whole story.",
        "opts": [
          "did we learn",
          "we learned",
          "we did learn",
          "learned we"
        ],
        "answer": "did we learn",
        "why": "Not until + обстоятельство времени в начале → инверсия ГЛАВНОЙ клаузы: did we learn.",
        "hint": "«Не раньше полуночи …» — отрицательный оборот впереди, значит главная часть переворачивается: did + we + глагол. 🌙"
      },
      {
        "type": "choice",
        "q": "Under no circumstances ___ share this password.",
        "opts": [
          "should you",
          "you should",
          "you do",
          "do you should"
        ],
        "answer": "should you",
        "why": "Отрицательное наречие Under no circumstances в начале → инверсия: should you.",
        "hint": "Строгое «ни при каких обстоятельствах» открывает фразу — дальше модальный глагол встаёт ПЕРЕД «you». 🔒"
      },
      {
        "type": "trRE",
        "ru": "Именно Анна разбила вазу.",
        "accept": [
          "it was anna who broke the vase",
          "it was anna that broke the vase"
        ],
        "model": "It was Anna who broke the vase.",
        "hint": "Это It-cleft: «Именно…» = It was + кто + who + остальное. Выделяем подлежащее. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Что мне сейчас действительно нужно — так это отдых.",
        "accept": [
          "what i really need now is a rest",
          "what i really need now is some rest",
          "what i really need is a rest",
          "what i really need is some rest",
          "what i need now is a rest",
          "what i need is a rest",
          "what i really need is rest"
        ],
        "model": "What I really need now is a rest.",
        "hint": "Псевдо-cleft начинается с What I…: What I need is… Глагол-связка is держит конструкцию. ✨"
      },
      {
        "type": "trER",
        "en": "It was in Paris that they first met.",
        "accept": [
          "именно в париже они впервые встретились",
          "именно в париже они впервые познакомились",
          "это в париже они впервые встретились",
          "именно в париже они познакомились",
          "именно в париже они и познакомились",
          "именно в париже они встретились впервые"
        ],
        "model": "Именно в Париже они впервые познакомились.",
        "hint": "It was … that… выделяет обстоятельство — по-русски это передаётся словом «именно». 🇫🇷"
      },
      {
        "type": "order",
        "answer": "all i want is the truth",
        "accept": [
          "all i want is the truth"
        ],
        "hintRu": "Скажи по-английски: «Всё, чего я хочу, — это правда».",
        "hint": "all-cleft: All + I want + связка is + остальное. «Всё, чего хочу» = All I want. 🙂"
      },
      {
        "type": "match",
        "pairs": [
          [
            "No sooner …",
            "than"
          ],
          [
            "Hardly …",
            "when"
          ],
          [
            "Not only …",
            "but also"
          ],
          [
            "It was Anna …",
            "who"
          ],
          [
            "What I need …",
            "is"
          ]
        ],
        "hint": "Соедини начало конструкции с её обязательным «партнёром»: у каждого фронтинга и cleft есть своё слово-связка. 🔗"
      },
      {
        "type": "choice",
        "q": "Seldom ___ a politician admit a mistake so openly.",
        "opts": [
          "does",
          "do",
          "is",
          "has"
        ],
        "answer": "does",
        "why": "Наречие Seldom впереди включает инверсию с do-support; подлежащее «a politician» единственного числа — значит does: Seldom does a politician admit…",
        "hint": "Отрицательное наречие открыло фразу, глагол в present simple, подлежащее единственное — какой вспомогательный встанет перед ним? 🙂"
      },
      {
        "type": "choice",
        "q": "___ that the decision would change everything.",
        "opts": [
          "Little did I know",
          "Little I knew",
          "Little know I",
          "Little did I knew"
        ],
        "answer": "Little did I know",
        "why": "«Little did I know» — застывшая инверсия: отрицательное Little тянет do-support (did) и базовую форму know.",
        "hint": "«Я и не подозревал…» — идиома с инверсией: наречие + вспомогательный прошедшего + подлежащее + начальная форма глагола. 🙂"
      },
      {
        "type": "choice",
        "q": "___ I in your position, I would decline the offer politely.",
        "opts": [
          "Were",
          "Was",
          "Had",
          "Should"
        ],
        "answer": "Were",
        "why": "Нереальное настоящее без if строится через were для всех лиц: Were I in your position = If I were… Форма was здесь не годится.",
        "hint": "Условие без if про «на твоём месте» — подними в начало форму сослагательного «быть», одинаковую для всех лиц. 🙂"
      },
      {
        "type": "gap",
        "q": "Not once ___ he apologise, even after the truth finally came out. <i style='opacity:.6'>(do/does/did)</i>",
        "accept": [
          "did",
          "did he"
        ],
        "model": "did",
        "why": "Not once — отрицательный оборот впереди → инверсия с do-support; повествование в прошлом (came out) требует did.",
        "hint": "«Ни разу…» открыло фразу, а рассказ идёт в прошедшем — какой вспомогательный встанет перед he? 🙂"
      },
      {
        "type": "gap",
        "q": "___ I admire most about her is her honesty. <i style='opacity:.6'>(What / That / Which)</i>",
        "accept": [
          "what"
        ],
        "model": "What",
        "why": "Wh-cleft начинается с What: What I admire most… is… — This/That/Which так предложение не открывают.",
        "hint": "Псевдо-расщепление выносит в фокус «то, что…» одним словом на Wh-. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Только сейчас я понимаю, как ты был прав.",
        "accept": [
          "only now do i realise how right you were",
          "only now do i realize how right you were",
          "only now do i understand how right you were",
          "only now do i see how right you were",
          "only now do i realise just how right you were"
        ],
        "model": "Only now do I realise how right you were.",
        "why": "Ограничительное «только сейчас» впереди → инверсия с do: Only now do I realise…",
        "hint": "«Только сейчас…» — ограничительный фронтинг, и в главной части нужен «вопросный» порядок с do. 🙂"
      },
      {
        "type": "trER",
        "en": "No sooner had she hung up than the phone rang again.",
        "accept": [
          "не успела она положить трубку, как телефон снова зазвонил",
          "не успела она положить трубку, как телефон зазвонил снова",
          "едва она положила трубку, как телефон снова зазвонил",
          "стоило ей положить трубку, как телефон опять зазвонил",
          "не успела она повесить трубку, как телефон снова зазвонил",
          "как только она положила трубку, телефон зазвонил снова"
        ],
        "model": "Не успела она положить трубку, как телефон снова зазвонил.",
        "why": "No sooner… than… = «не успел(а)…, как…»; инверсия had she hung up передаёт мгновенную смену событий.",
        "hint": "Пара No sooner … than по-русски звучит как «не успела…, как…». 🙂"
      },
      {
        "type": "order",
        "answer": "it was her patience that saved the project",
        "accept": [
          "it was her patience that saved the project"
        ],
        "hintRu": "Скажи по-английски: «Именно её терпение спасло проект».",
        "why": "It-cleft выделяет подлежащее: It was + фокус (her patience) + that + остальное.",
        "hint": "«Именно…» = It was … that… — в прожекторе оказывается «её терпение». 🙂"
      },
      {
        "type": "match",
        "pairs": [
          [
            "Little did I know",
            "я и не подозревал"
          ],
          [
            "Had I known",
            "знай я тогда"
          ],
          [
            "Only then",
            "лишь тогда"
          ],
          [
            "It was John who",
            "именно Джон"
          ],
          [
            "What I need",
            "то, что мне нужно"
          ]
        ],
        "why": "Каждая фирменная конструкция недели несёт свой смысл: инверсия, условие без if, ограничительный фронтинг и два расщепления.",
        "hint": "Соедини каждую конструкцию Недели 1 с её русским смыслом. 🔗"
      },
      {
        "type": "describe",
        "img": "img/c1/day-03.jpg",
        "prompt": "Опиши сцену (3–4 предложения) и включи минимум одну условную инверсию (Had he…, Were it…, Should they…) ИЛИ ограничительный фронтинг (Only then…, Not until…, In no way…).",
        "keywords": [
          "had",
          "were",
          "should",
          "only then",
          "not until",
          "in no way",
          "never",
          "seldom",
          "rarely",
          "little did",
          "did i",
          "would have",
          "man",
          "woman",
          "people",
          "light",
          "room",
          "street"
        ],
        "minWords": 20,
        "model": "Only then did the full scene come into focus. Had the light been softer, the room would have felt warmer. In no way does the photograph feel staged.",
        "why": "Условная инверсия и ограничительный фронтинг поднимают вес фразы — ровно то, чему учит Неделя 1.",
        "hint": "Подними вес фразы: начни с Only then did…, In no way…, или с условия без if — Had it…, Were it… ✨"
      },
      {
        "type": "describe",
        "img": "img/c1/day-05.jpg",
        "prompt": "Опиши сцену на картинке (3–4 предложения) и обязательно вставь хотя бы одну инверсию (Never have I…, Only then did…, Hardly had…) ИЛИ расщепление (It was … who…, What … is…).",
        "keywords": [
          "never",
          "only then",
          "hardly",
          "no sooner",
          "not only",
          "it was",
          "what",
          "who",
          "had i",
          "did i",
          "woman",
          "man",
          "people",
          "room",
          "standing",
          "light"
        ],
        "minWords": 20,
        "model": "It was the woman in red who caught everyone's attention. Never have I seen a room so full of energy. Only then did the others notice the time.",
        "hint": "Не описывай «плоско» — подними вес: начни предложение с It was … who…, Never have I…, или Only then did… ✨"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Это Мира. Неделя нереальных миров — самая «философская» на C1, и этот расширенный экзамен из 25 заданий пройдётся по ней целиком. Проверим смешанные условные (If I had studied, I'd be…), нереальное прошлое (wish + past perfect, would rather + past, it's high time + past), сослагательное наклонение после suggest/insist/demand/essential (… that he be / go / be published), прошлые модальные дедукции (must / can't / may have done), смягчение (tends to, may well, is likely to, ought to have) и будущее-в-прошедшем со сдвигом времён (was going to, would). Дыши ровно — и вперёд.",
    "review": [
      "Смешанные условные: <b>If I had studied, I would be…</b> (прошлое → настоящее) и наоборот",
      "Нереальное прошлое: <b>I wish I had…</b> · <b>I'd rather you came</b> · <b>it's high time we left</b>",
      "Сослагательное: <b>I suggest that he be… · demand that it be published · essential that he go</b> — базовая форма!",
      "Прошлые дедукции: <b>must have done</b> (уверен) · <b>can't have done</b> (невозможно) · <b>may have done</b> (возможно)",
      "Смягчение: <b>tends to · may well · is likely to · ought to have done</b>",
      "Будущее в прошедшем + backshift: <b>was going to · would · was to</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "If I ___ harder at university, I'd have a much better job now.",
        "opts": [
          "had worked",
          "worked",
          "would work",
          "work"
        ],
        "answer": "had worked",
        "why": "Смешанное условие: условие в прошлом (had worked) → результат в настоящем (I'd have). Прошлая часть строится как past perfect.",
        "hint": "Учёба в прошлом, а результат «сейчас» — значит условие ставим в «давнопрошедшее»: had + 3-я форма. 🎓"
      },
      {
        "type": "choice",
        "q": "If she weren't so disorganised, she ___ that contract last month.",
        "opts": [
          "would have won",
          "would win",
          "won",
          "had won"
        ],
        "answer": "would have won",
        "why": "Смешанное наоборот: постоянное условие в настоящем (weren't) → результат в прошлом (would have won).",
        "hint": "Черта характера «вообще» (weren't), а итог — в прошлом месяце: главную часть ставь в would have + 3-я форма. 📄"
      },
      {
        "type": "gap",
        "q": "I wish I ___ harder for the exam — I failed it. <i style='opacity:.6'>(study)</i>",
        "accept": [
          "had studied",
          "i had studied"
        ],
        "model": "had studied",
        "why": "Сожаление о прошлом → wish + past perfect: I wish I had studied. Past perfect показывает «нереальное прошлое».",
        "hint": "Жаль о том, что уже случилось, — после wish бери had + 3-ю форму. 📚"
      },
      {
        "type": "choice",
        "q": "I'd rather you ___ smoke in the house.",
        "opts": [
          "didn't",
          "don't",
          "wouldn't",
          "not"
        ],
        "answer": "didn't",
        "why": "would rather + подлежащее + ПРОШЕДШАЯ форма для предпочтения о чужом действии в настоящем: I'd rather you didn't. Ловушка — прошедшее при настоящем смысле.",
        "hint": "После «I'd rather you …» о чужом действии глагол стоит в прошедшей форме, хотя смысл — про сейчас. 🚭"
      },
      {
        "type": "choice",
        "q": "It's high time the council ___ something about the potholes.",
        "opts": [
          "did",
          "does",
          "do",
          "has done"
        ],
        "answer": "did",
        "why": "it's (high) time + ПРОШЕДШАЯ форма = «давно пора»: It's high time they did… Смысл настоящий, форма прошедшая.",
        "hint": "После «it's high time» нужна прошедшая форма глагола, хотя речь о том, что пора делать сейчас. 🛣️"
      },
      {
        "type": "gap",
        "q": "The board recommended that the director ___ down immediately. <i style='opacity:.6'>(step)</i>",
        "accept": [
          "step",
          "should step"
        ],
        "model": "step",
        "why": "Сослагательное после recommend/insist/suggest: базовая форма step — без -s и для he/she тоже.",
        "hint": "После recommend that … глагол идёт в «голой» начальной форме, даже с he/she: никакого -s. 🪑"
      },
      {
        "type": "choice",
        "q": "The pavement is soaking wet. It ___ rained during the night.",
        "opts": [
          "must have",
          "must",
          "should have",
          "can have"
        ],
        "answer": "must have",
        "why": "Почти уверенная догадка о прошлом → must have + 3-я форма: It must have rained.",
        "hint": "Ты уверен почти на 100% о том, что было ночью, — это «должно быть»: must have + 3-я форма. 🌧️"
      },
      {
        "type": "choice",
        "q": "She ___ heard you — she'd taken her hearing aid out.",
        "opts": [
          "can't have",
          "mustn't have",
          "couldn't",
          "didn't have to"
        ],
        "answer": "can't have",
        "why": "Невозможность в прошлом → can't have / couldn't have done: She can't have heard you.",
        "hint": "Ты уверен, что это было НЕвозможно, — бери can't have + 3-я форма. 🙉"
      },
      {
        "type": "trRE",
        "ru": "Возможно, они пропустили поезд.",
        "accept": [
          "they may have missed the train",
          "they might have missed the train",
          "they could have missed the train",
          "perhaps they missed the train",
          "maybe they missed the train"
        ],
        "model": "They may have missed the train.",
        "hint": "«Возможно» о прошлом — это may/might have + 3-я форма. 🚆"
      },
      {
        "type": "gap",
        "q": "She promised she ___ help us the following day. <i style='opacity:.6'>(will → косвенная речь)</i>",
        "accept": [
          "would",
          "she would"
        ],
        "model": "would",
        "why": "В косвенной речи will сдвигается в would (правило согласования времён): She promised she would help.",
        "hint": "Прямое «I will help» в пересказе из прошлого превращается в форму на -ould. 🗓️"
      },
      {
        "type": "choice",
        "q": "We ___ travel to Japan, but the trip fell through.",
        "opts": [
          "were going to",
          "are going to",
          "will",
          "would have"
        ],
        "answer": "were going to",
        "why": "was/were going to = план в прошлом, который часто НЕ сбылся: We were going to travel…",
        "hint": "Был план в прошлом, который не осуществился, — это «собирались»: were going to + глагол. ✈️"
      },
      {
        "type": "trER",
        "en": "If I had saved more money, I would be retired by now.",
        "accept": [
          "если бы я тогда откладывал больше денег, я бы уже был на пенсии",
          "если бы я откладывал больше денег, я бы уже был на пенсии",
          "если бы я накопил больше денег, я бы уже был на пенсии",
          "если бы я копил больше денег, я бы сейчас был на пенсии",
          "если бы я больше откладывал, я бы уже был на пенсии",
          "если бы я отложил больше денег, я был бы уже на пенсии"
        ],
        "model": "Если бы я тогда откладывал больше денег, я бы уже был на пенсии.",
        "hint": "Смешанное условие: условие в прошлом (had saved) → результат сейчас (would be). 💰"
      },
      {
        "type": "order",
        "answer": "i insist that he apologise",
        "accept": [
          "i insist that he apologise"
        ],
        "hintRu": "Скажи по-английски: «Я настаиваю, чтобы он извинился».",
        "hint": "После insist that глагол идёт в базовой форме (apologise) — без -s для he. 🙂"
      },
      {
        "type": "match",
        "pairs": [
          [
            "tends to",
            "обычно склонен"
          ],
          [
            "may well",
            "вполне может"
          ],
          [
            "is likely to",
            "скорее всего"
          ],
          [
            "ought to have",
            "зря не сделал"
          ],
          [
            "might as well",
            "можно и …"
          ]
        ],
        "hint": "Соедини «смягчающую» конструкцию с её русским смыслом — это всё про вероятность и осторожность. 🌫️"
      },
      {
        "type": "choice",
        "q": "Prices ___ rise again before the end of the year.",
        "opts": [
          "may well",
          "can well",
          "may good",
          "well may"
        ],
        "answer": "may well",
        "why": "may well = «вполне может»: осторожная оценка высокой вероятности. Форма «can well» в этом значении не употребляется.",
        "hint": "«Вполне может подняться» — устойчивое сочетание модального may с усилителем. 🙂"
      },
      {
        "type": "choice",
        "q": "You ___ have told me the meeting was cancelled; instead I waited an hour for nothing.",
        "opts": [
          "ought to",
          "ought",
          "should to",
          "must"
        ],
        "answer": "ought to",
        "why": "ought to have done = «следовало бы» с упрёком о прошлом; контекст «зря прождал час» исключает вывод must have (наверняка сделал).",
        "hint": "Мягкий упрёк о прошлом «тебе следовало бы…» — модальный оборот, за которым идёт частица to. 🙂"
      },
      {
        "type": "choice",
        "q": "The regulations demand that every visitor ___ accompanied by a member of staff at all times.",
        "opts": [
          "be",
          "to be",
          "being",
          "been"
        ],
        "answer": "be",
        "why": "Сослагательное после demand that… — базовая форма be для всех лиц: demand that every visitor be accompanied.",
        "hint": "После demand that… глагол идёт в «голой» начальной форме — здесь это форма «быть» без изменений. 🙂"
      },
      {
        "type": "gap",
        "q": "If I ___ born in Canada, I'd be a fluent French speaker by now. <i style='opacity:.6'>(be → нереальное прошлое)</i>",
        "accept": [
          "had been",
          "i had been"
        ],
        "model": "had been",
        "why": "Смешанное условие: нереальное прошлое (had been born) → результат в настоящем (I'd be … by now).",
        "hint": "Место рождения — в прошлом, а свободный французский — про «сейчас»: условие ставим в «давнопрошедшее». 🙂"
      },
      {
        "type": "trRE",
        "ru": "Тебе давно пора найти нормальную работу.",
        "accept": [
          "its high time you found a proper job",
          "it is high time you found a proper job",
          "its high time you found a decent job",
          "its about time you found a proper job",
          "its high time you got a proper job",
          "its high time you found a real job",
          "it is high time you found a decent job"
        ],
        "model": "It's high time you found a proper job.",
        "why": "it's high time + прошедшая форма = «давно пора»: смысл настоящий, глагол в past (found).",
        "hint": "«Давно пора…» строится через it's high time и глагол в прошедшей форме. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Комитет потребовал, чтобы отчёт опубликовали немедленно.",
        "accept": [
          "the committee demanded that the report be published immediately",
          "the committee demanded that the report should be published immediately",
          "the committee demanded that the report be published at once",
          "the committee insisted that the report be published immediately",
          "the committee demanded the report be published immediately",
          "the committee required that the report be published immediately"
        ],
        "model": "The committee demanded that the report be published immediately.",
        "why": "Сослагательное после demand/insist: базовая форма be published, без is/was.",
        "hint": "После «потребовал, чтобы…» англичанин ставит глагол в базовую форму: … that the report be published. 🙂"
      },
      {
        "type": "trER",
        "en": "She can't have forgotten; I reminded her twice this morning.",
        "accept": [
          "не может быть, что она забыла — я дважды напомнил ей сегодня утром",
          "она не могла забыть, я же дважды напомнил ей утром",
          "не может быть, чтобы она забыла: я напоминал ей дважды утром",
          "она никак не могла забыть — я дважды ей напомнил утром",
          "не может быть, что она забыла, ведь я дважды напомнил ей утром",
          "она не могла забыть — я же напомнил ей дважды сегодня утром"
        ],
        "model": "Не может быть, что она забыла: я дважды напомнил ей сегодня утром.",
        "why": "can't have done = уверенность в невозможности прошлого: «не может быть, что…».",
        "hint": "«Не может быть, что…» о прошлом — это can't have + 3-я форма. 🙂"
      },
      {
        "type": "order",
        "answer": "she is likely to be promoted soon",
        "accept": [
          "she is likely to be promoted soon"
        ],
        "hintRu": "Скажи по-английски: «Скорее всего, её скоро повысят».",
        "why": "be likely to = осторожное «скорее всего»: She is likely to be promoted soon.",
        "hint": "«Скорее всего…» без приговора — конструкция be likely to + инфинитив. 🙂"
      },
      {
        "type": "match",
        "pairs": [
          [
            "must have left",
            "наверняка ушёл"
          ],
          [
            "can't have known",
            "никак не мог знать"
          ],
          [
            "was going to",
            "собирался"
          ],
          [
            "I'd rather you…",
            "предпочёл бы, чтобы ты"
          ],
          [
            "it's high time",
            "давно пора"
          ]
        ],
        "why": "Каждый оборот Недели 2 несёт свой оттенок: уверенный вывод, невозможность, несбывшийся план, предпочтение, «пора».",
        "hint": "Соедини модальную конструкцию нереальных миров с её русским смыслом. 🔗"
      },
      {
        "type": "describe",
        "img": "img/c1/day-08.jpg",
        "prompt": "Представь, как сложилась бы жизнь человека на снимке при других решениях (3–4 предложения): задействуй смешанное условное (If he had…, he would be…) И смягчение (tends to…, is likely to…, may well…).",
        "keywords": [
          "if",
          "had",
          "would be",
          "would have",
          "tends to",
          "is likely to",
          "may well",
          "might",
          "must have",
          "probably",
          "seems",
          "by now",
          "man",
          "woman",
          "people"
        ],
        "minWords": 20,
        "model": "If he had taken that job abroad, he would be living a very different life by now. He tends to avoid risks, so this quiet outcome is likely. He may well be happier this way, though.",
        "why": "Смешанное условное связывает прошлое с настоящим, а смягчение убирает приговор — сердцевина Недели 2.",
        "hint": "Свяжи прошлое и настоящее: If he had…, he would be… — и добавь осторожное tends to… или may well… ✨"
      },
      {
        "type": "describe",
        "img": "img/c1/day-11.jpg",
        "prompt": "Этого момента ты не видел(а). Выскажи 3–4 догадки о том, что ПРОИЗОШЛО, используя модальные дедукции о прошлом: must have…, may/might have…, can't have…",
        "keywords": [
          "must have",
          "might have",
          "may have",
          "can't have",
          "could have",
          "cant have",
          "probably",
          "forgotten",
          "missed",
          "been",
          "running",
          "tired",
          "late",
          "happened"
        ],
        "minWords": 20,
        "model": "He must have run all the way here — he's completely out of breath. He might have missed his train. He can't have slept well, judging by his face.",
        "hint": "Не описывай факт — строй догадку: It must have…, They might have…, She can't have… 🔍"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Мира снова рядом 💛 Третья неделя — про сжатие и связность, и этот расширенный экзамен из 25 заданий охватит её целиком. Проверим причастные обороты (Having finished…, Walking home…, Filmed in 1990…), сжатые и безглагольные клаузы (Though tired…, Once signed…, With prices rising…), сложные относительные (many of whom…, two of which…, to whom…), безличный и личный пассив-report (It is said that…, The CEO is said to be…), номинализацию (the failure of…, a sharp rise in…, a marked improvement) и эллипсис с субституцией (So do I / Neither do I, the latter, ones). Соберись — Неделя 4 уже близко.",
    "review": [
      "Причастные: <b>Having finished… · Walking home… · Filmed in 1990…</b>",
      "Сжатые/безглагольные: <b>Though tired… · Once signed… · With prices rising…</b>",
      "Относительные: <b>many of whom · two of which · the cause of which · to whom</b>",
      "Пассив-report: <b>It is said that… · The CEO is said to be… · is thought to have done</b>",
      "Номинализация: глагол → существительное — <b>the failure of… · a sharp rise in… · a marked improvement</b>",
      "Эллипсис/субституция: <b>So do I · Neither do I · the latter · ones · do so</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "___ the report, she finally went home.",
        "opts": [
          "Having finished",
          "Finishing",
          "Finished",
          "Have finished"
        ],
        "answer": "Having finished",
        "why": "Перфектное причастие Having + 3-я форма = действие завершено ДО следующего: Having finished…, she went home.",
        "hint": "Сначала закончила, потом ушла — для «завершённого раньше» бери Having + 3-ю форму. 📑"
      },
      {
        "type": "choice",
        "q": "___ in 1890, the bridge still carries traffic today.",
        "opts": [
          "Built",
          "Building",
          "Having built",
          "To build"
        ],
        "answer": "Built",
        "why": "Пассивное причастие Built (= Having been built) для сжатой пассивной клаузы: мост построили, он пассивный участник.",
        "hint": "Мост не строит сам себя — нужна пассивная, «страдательная» форма причастия (3-я форма без вспомогательного). 🌉"
      },
      {
        "type": "choice",
        "q": "___ the deadline approaching, the team worked through the night.",
        "opts": [
          "With",
          "For",
          "By",
          "Since"
        ],
        "answer": "With",
        "why": "with + сущ. + -ing = сопутствующее обстоятельство/причина: With the deadline approaching…",
        "hint": "Оборот «по мере того как …» с существительным и -ing начинается с маленького предлога-спутника. ⏳"
      },
      {
        "type": "gap",
        "q": "___ exhausted, he refused to stop. <i style='opacity:.6'>(хоть и измотан — though/although)</i>",
        "accept": [
          "though",
          "although",
          "even though"
        ],
        "model": "Though",
        "why": "Безглагольная уступка: Though + прилагательное (= Though he was exhausted). Глагол-связку можно опустить.",
        "hint": "«Хоть и …» перед одним прилагательным без глагола — это сжатая уступка с союзом though. 😮‍💨"
      },
      {
        "type": "choice",
        "q": "He invited forty guests, ___ were celebrities.",
        "opts": [
          "many of whom",
          "many of which",
          "many of them",
          "of whom many"
        ],
        "answer": "many of whom",
        "why": "квантор + of whom для людей в неограничительной клаузе: …, many of whom were… Ловушка: many of them потребовало бы нового предложения.",
        "hint": "Речь о людях внутри одной фразы — нужен квантор + of + «который» для людей. 👥"
      },
      {
        "type": "choice",
        "q": "The manager ___ I reported has just retired.",
        "opts": [
          "to whom",
          "who to",
          "to who",
          "whom to"
        ],
        "answer": "to whom",
        "why": "Формальный стиль выносит предлог вперёд: the manager to whom I reported (= who I reported to).",
        "hint": "В формальном относительном обороте предлог встаёт ПЕРЕД «whom»: to whom… 🧑‍💼"
      },
      {
        "type": "gap",
        "q": "It is widely ___ that the climate is changing. <i style='opacity:.6'>(say)</i>",
        "accept": [
          "said",
          "believed",
          "thought"
        ],
        "model": "said",
        "why": "Безличный пассив-report: It is said/believed/thought that… Глагол say идёт в 3-й форме said.",
        "hint": "«Считается / говорят, что …» по-английски — It is + 3-я форма глагола say. 🌍"
      },
      {
        "type": "choice",
        "q": "— I love long mountain walks. — ___",
        "opts": [
          "So do I",
          "So I do",
          "Neither do I",
          "So am I"
        ],
        "answer": "So do I",
        "why": "Согласие с утверждением (+): So + вспомогательный + подлежащее. Глагол love → вспомогательный do.",
        "hint": "«И я тоже» к утверждению строится как So + вспомогательный + I, и порядок «вопросный». 🏔️"
      },
      {
        "type": "choice",
        "q": "— I don't trust online reviews. — ___",
        "opts": [
          "Neither do I",
          "So do I",
          "Neither I do",
          "Me neither do"
        ],
        "answer": "Neither do I",
        "why": "Согласие с отрицанием (–): Neither/Nor + вспомогательный + подлежащее: Neither do I.",
        "hint": "«И я тоже» к отрицанию начинается с Neither, дальше «вопросный» порядок: вспомогательный + I. 🙂"
      },
      {
        "type": "gap",
        "q": "I don't like these mugs — do you have any nicer ___? <i style='opacity:.6'>(замена множ. числа)</i>",
        "accept": [
          "ones"
        ],
        "model": "ones",
        "why": "ones заменяет множественное исчисляемое (mugs), чтобы не повторять существительное: nicer ones.",
        "hint": "Чтобы не повторять «mugs», поставь слово-заместитель для множественного числа. ☕"
      },
      {
        "type": "trRE",
        "ru": "Считается, что он покинул страну много лет назад.",
        "accept": [
          "he is thought to have left the country many years ago",
          "he is believed to have left the country many years ago",
          "he is thought to have left the country years ago",
          "it is thought that he left the country many years ago",
          "it is believed that he left the country many years ago",
          "it is believed that he left the country years ago"
        ],
        "model": "He is thought to have left the country many years ago.",
        "hint": "Личный пассив-report: He is thought to… А раз действие было РАНЬШЕ — перфектный инфинитив to have left. 🛂"
      },
      {
        "type": "trER",
        "en": "The failure of the negotiations shocked the markets.",
        "accept": [
          "провал переговоров потряс рынки",
          "провал переговоров шокировал рынки",
          "неудача переговоров потрясла рынки",
          "неудача переговоров шокировала рынки",
          "срыв переговоров потряс рынки",
          "провал переговоров шокировал рынок"
        ],
        "model": "Провал переговоров потряс рынки.",
        "hint": "Номинализация: глагол fail превратился в существительное failure (the failure of…). Переведи именно существительным «провал/неудача». 📉"
      },
      {
        "type": "order",
        "answer": "having read the letter she began to cry",
        "accept": [
          "having read the letter she began to cry",
          "she began to cry having read the letter"
        ],
        "hintRu": "Скажи по-английски: «Прочитав письмо, она заплакала».",
        "hint": "Перфектное причастие Having read… открывает предложение, затем главная клауза. 💌"
      },
      {
        "type": "match",
        "pairs": [
          [
            "So do I",
            "согласие (+)"
          ],
          [
            "Neither do I",
            "согласие (–)"
          ],
          [
            "the former",
            "первый из двух"
          ],
          [
            "the latter",
            "второй из двух"
          ],
          [
            "do so",
            "сделать это"
          ]
        ],
        "hint": "Соедини средство эллипсиса/субституции с его смыслом — это всё «как не повторяться». 🔁"
      },
      {
        "type": "choice",
        "q": "The report highlights a sharp ___ in youth unemployment over the past decade.",
        "opts": [
          "rise",
          "raise",
          "rising",
          "arise"
        ],
        "answer": "rise",
        "why": "Номинализация: a (sharp) rise in… — существительное rise, а не глагол. «a raise in unemployment» — калька, так не говорят.",
        "hint": "«Резкий рост чего-то» упаковывается в существительное: a sharp ___ in… 🙂"
      },
      {
        "type": "choice",
        "q": "The CEO ___ to be considering an early retirement.",
        "opts": [
          "is said",
          "is saying",
          "says",
          "said"
        ],
        "answer": "is said",
        "why": "Личный пассив-report: The CEO is said to be considering… — подлежащее поднято вперёд, глагол в пассиве is said.",
        "hint": "«Говорят, что директор…» можно собрать личным пассивом: The CEO ___ to be… 🙂"
      },
      {
        "type": "choice",
        "q": "___ signed by both parties, the contract becomes legally binding.",
        "opts": [
          "Once",
          "Despite",
          "However",
          "Unless"
        ],
        "answer": "Once",
        "why": "Сжатая клауза Once signed = Once it is signed. Despite потребовал бы -ing (being signed), а Unless дало бы обратный смысл.",
        "hint": "«Как только подписан…» — союз + третья форма без подлежащего и be. 🙂"
      },
      {
        "type": "gap",
        "q": "There has been a marked ___ in living standards since the reforms. <i style='opacity:.6'>(improve → существительное)</i>",
        "accept": [
          "improvement"
        ],
        "model": "improvement",
        "why": "Номинализация глагола improve → существительное improvement: a marked improvement in…",
        "hint": "Сверни действие «улучшать» в предмет — существительное после «a marked ___ in». 🙂"
      },
      {
        "type": "trRE",
        "ru": "Прочитав отчёт, она сразу же позвонила юристу.",
        "accept": [
          "having read the report she immediately called the lawyer",
          "having read the report she called the lawyer immediately",
          "having read the report she immediately phoned the lawyer",
          "having read the report she rang the lawyer straight away",
          "after reading the report she immediately called the lawyer",
          "having read the report she at once called the lawyer"
        ],
        "model": "Having read the report, she immediately called the lawyer.",
        "why": "Перфектное причастие Having read… = «прочитав» (действие завершено до главного).",
        "hint": "«Прочитав…» — сначала одно, потом другое: открой фразу формой Having + 3-я форма. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Он написал три романа, два из которых стали бестселлерами.",
        "accept": [
          "he wrote three novels two of which became bestsellers",
          "he wrote three novels two of which were bestsellers",
          "he has written three novels two of which became bestsellers",
          "he wrote three novels two of which have become bestsellers",
          "he wrote three novels two of which turned into bestsellers",
          "he wrote three novels two of which went on to become bestsellers"
        ],
        "model": "He wrote three novels, two of which became bestsellers.",
        "why": "Квантор + of which в неограничительной клаузе: …, two of which became… — русское «два из которых».",
        "hint": "«…, два из которых…» по-английски строится как two of which. 🙂"
      },
      {
        "type": "trER",
        "en": "With the children asleep, the house felt unusually quiet.",
        "accept": [
          "когда дети уснули, в доме было непривычно тихо",
          "когда дети заснули, в доме стало непривычно тихо",
          "дети спали, и в доме было непривычно тихо",
          "поскольку дети спали, в доме стояла непривычная тишина",
          "дети уснули, и в доме сделалось необычно тихо",
          "с уснувшими детьми в доме было непривычно тихо"
        ],
        "model": "Когда дети уснули, в доме было непривычно тихо.",
        "why": "Оборот With + существительное + состояние (With the children asleep) = фон с другим подлежащим.",
        "hint": "Конструкция With + сущ. + состояние передаёт сопутствующий фон: «когда/поскольку дети спали…». 🙂"
      },
      {
        "type": "order",
        "answer": "the painting is believed to be a forgery",
        "accept": [
          "the painting is believed to be a forgery"
        ],
        "hintRu": "Скажи по-английски: «Считается, что картина — подделка».",
        "why": "Личный пассив-report: The painting is believed to be a forgery.",
        "hint": "«Считается, что картина — подделка» собирается личным пассивом: … is believed to be… 🙂"
      },
      {
        "type": "match",
        "pairs": [
          [
            "Having finished…",
            "закончив (раньше)"
          ],
          [
            "Walking home…",
            "идя (одновременно)"
          ],
          [
            "many of whom",
            "многие из которых"
          ],
          [
            "It is thought that…",
            "полагают, что"
          ],
          [
            "a rise in prices",
            "рост цен"
          ]
        ],
        "why": "Средства сжатия и связности Недели 3: два вида причастия, относительная клауза, безличный пассив и номинализация.",
        "hint": "Соедини инструмент сжатия или связности с его смыслом. 🔗"
      },
      {
        "type": "describe",
        "img": "img/c1/day-19.jpg",
        "prompt": "Опиши сцену как аналитический абзац (3–4 предложения): используй хотя бы одну номинализацию (the growth of…, a lack of…, the rise in…) И сжатую или причастную клаузу (Standing…, Though small…, With people gathering…).",
        "keywords": [
          "the growth",
          "a lack",
          "the rise",
          "the failure",
          "standing",
          "holding",
          "though",
          "with",
          "having",
          "it is said",
          "it is believed",
          "increase",
          "decline",
          "people",
          "crowd",
          "city"
        ],
        "minWords": 20,
        "model": "Standing at the centre, the building dominates the square. The growth of the city is visible in every direction. With people gathering below, it is said that the area never truly sleeps.",
        "why": "Номинализация и сжатые клаузы делают абзац плотным и связным — главный навык Недели 3.",
        "hint": "Опредметь мысль (the growth of…, a rise in…) и сожми клаузу (Standing…, With… -ing). ✨"
      },
      {
        "type": "describe",
        "img": "img/c1/day-18.jpg",
        "prompt": "Опиши сцену как новостную подпись (3–4 предложения): используй хотя бы один причастный оборот (Standing there…, Holding…) И безличный пассив (It is said that… / He is believed to…).",
        "keywords": [
          "it is said",
          "it is believed",
          "is thought",
          "is believed",
          "standing",
          "holding",
          "having",
          "seen",
          "reported",
          "appears",
          "said",
          "crowd",
          "man",
          "woman"
        ],
        "minWords": 20,
        "model": "Standing at the podium, the speaker addresses a large crowd. It is said that the announcement will change everything. The man beside her is believed to be an adviser.",
        "hint": "Сожми и обезличь: начни с причастия (Standing…, Holding…) и добавь It is said that… или He is believed to be… 📰"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен C1",
    "intro": "Это финал C1 — и я так тобой горжусь 💛 Последний экзамен из 33 заданий охватит Неделю 4 (формальные коннекторы notwithstanding/albeit/thereby/hence, продвинутую уступку much as/however hard, фокус и эмфатическое do, градуируемость absolutely vs very, коллокации и зависимые предлоги, идиомы и фразовые глаголы, переключение регистра, вводные наречия admittedly/arguably) и пройдётся по всему уровню: инверсия и условная инверсия, смешанные условные, сослагательное, прошлые модальные, причастные и относительные обороты, cleft. Сдашь — и ты официально на пороге C2. Вперёд, к вершине! 🏆",
    "review": [
      "Формальные коннекторы: <b>notwithstanding · albeit · thereby · whereby · hence</b>",
      "Уступка: <b>much as I… · however hard… · no matter what… · for all his…</b>",
      "Фокус и эмфаза: <b>merely / just / even</b> · эмфатическое <b>I do believe…</b>",
      "Градуируемость: <b>absolutely/utterly + extreme</b> (stunning) · <b>very + gradable</b> (interesting)",
      "Коллокации/предлоги: <b>make a decision · heavy rain · depend on · consist of</b>",
      "Коллокации-усилители: <b>bitterly cold · highly likely · utterly exhausted · deeply rooted</b>",
      "Регистр: <b>ascertain ↔ find out · assist ↔ help</b> · идиомы и фразовые глаголы",
      "Вводные наречия: <b>admittedly · arguably · presumably · understandably</b>",
      "Свод уровня: инверсия и <b>условная инверсия (Had we…)</b>, смешанные условные, <b>сослагательное (that he be…)</b>, прошлые модальные (<b>must have…</b>), причастные и относительные обороты (<b>two of which…</b>), It-cleft"
    ],
    "q": [
      {
        "type": "choice",
        "q": "He accepted the offer, ___ with some hesitation.",
        "opts": [
          "albeit",
          "although",
          "despite",
          "whereas"
        ],
        "answer": "albeit",
        "why": "albeit = «хотя и», формальный союз перед фразой, а не перед целой клаузой: albeit with hesitation. Ловушка: although требует подлежащее + глагол.",
        "hint": "Перед короткой фразой без своего подлежащего нужен компактный формальный союз «хотя и». 🙂"
      },
      {
        "type": "choice",
        "q": "___ the heavy losses, the firm refused to close.",
        "opts": [
          "Notwithstanding",
          "Nevertheless",
          "However",
          "Although"
        ],
        "answer": "Notwithstanding",
        "why": "notwithstanding = «несмотря на» (предлог) + существительное. Ловушка: however/nevertheless — союзные наречия, а не предлоги, и не ставятся прямо перед существительным.",
        "hint": "Перед существительным «потери» нужен формальный предлог со значением «несмотря на». 💼"
      },
      {
        "type": "choice",
        "q": "I'm not criticising you — I'm ___ pointing out a fact.",
        "opts": [
          "merely",
          "hardly",
          "barely",
          "scarcely"
        ],
        "answer": "merely",
        "why": "merely = «всего лишь, просто» (фокусное наречие). Ловушка: hardly/barely/scarcely = «едва», противоположный смысл.",
        "hint": "Смысл «всего лишь, не более того» — выбери фокусное наречие, а не «едва». 🙂"
      },
      {
        "type": "choice",
        "q": "___ hard she tried, the lid wouldn't come off.",
        "opts": [
          "However",
          "Whatever",
          "No matter",
          "Although"
        ],
        "answer": "However",
        "why": "However + прилагательное/наречие + подлежащее + глагол = «как бы ни»: However hard she tried…",
        "hint": "«Как бы … ни» перед наречием hard строится одним словом на How-. 🫙"
      },
      {
        "type": "choice",
        "q": "I ___ appreciate everything you've done for me.",
        "opts": [
          "do",
          "am",
          "very",
          "really am"
        ],
        "answer": "do",
        "why": "Эмфатическое do + базовая форма усиливает утверждение: I do appreciate it.",
        "hint": "Чтобы подчеркнуть «я правда ценю», вставь перед глаголом маленький усилитель-вспомогательный. 💛"
      },
      {
        "type": "choice",
        "q": "The view from the summit was ___ breathtaking.",
        "opts": [
          "absolutely",
          "very",
          "more",
          "rather"
        ],
        "answer": "absolutely",
        "why": "breathtaking — неградуируемое (крайнее) прилагательное → absolutely/utterly, а не very.",
        "hint": "Прилагательное и так «предельное» (захватывает дух) — с такими дружит усилитель «абсолютно», а не «очень». ⛰️"
      },
      {
        "type": "choice",
        "q": "The lecture was ___ interesting, though a little long.",
        "opts": [
          "very",
          "absolutely",
          "utterly",
          "completely"
        ],
        "answer": "very",
        "why": "interesting — градуируемое прилагательное → very. С градуируемыми «крайние» усилители (utterly/absolutely) не сочетаются.",
        "hint": "«Интересный» бывает разной степени — значит обычное «очень», а не «абсолютно». 🎓"
      },
      {
        "type": "gap",
        "q": "We need to ___ a decision before Friday. <i style='opacity:.6'>(make / do)</i>",
        "accept": [
          "make"
        ],
        "model": "make",
        "why": "Устойчивая коллокация: make a decision (а не do). Слова «дружат» именно так.",
        "hint": "Решение по-английски не «делают» через do — у него свой глагол-партнёр. ✅"
      },
      {
        "type": "choice",
        "q": "The outcome depends ___ how hard we all work.",
        "opts": [
          "on",
          "of",
          "from",
          "in"
        ],
        "answer": "on",
        "why": "Зависимый предлог: depend on. Ловушка: русское «зависит ОТ» тянет к from/of, но в английском — on.",
        "hint": "У глагола depend свой обязательный предлог, и это не «from». 🔗"
      },
      {
        "type": "choice",
        "q": "Could you ___ whether the documents have arrived?",
        "opts": [
          "ascertain",
          "assist",
          "perceive",
          "consist"
        ],
        "answer": "ascertain",
        "why": "ascertain = «выяснить, установить» — формальный синоним find out. Это про переключение регистра.",
        "hint": "Нужен формальный, «латинский» синоним к find out — официальное «установить/выяснить». 📋"
      },
      {
        "type": "choice",
        "q": "___, this is the finest novel she has ever written.",
        "opts": [
          "Arguably",
          "Hardly",
          "Merely",
          "Utterly"
        ],
        "answer": "Arguably",
        "why": "arguably = «пожалуй, можно утверждать» — осторожная вводная оценка.",
        "hint": "Нужно вводное наречие «пожалуй / можно поспорить, но» — мягкая оценка, а не «едва». 📖"
      },
      {
        "type": "trER",
        "en": "Admittedly, we underestimated the risks.",
        "accept": [
          "надо признать, мы недооценили риски",
          "признаться, мы недооценили риски",
          "надо признать, что мы недооценили риски",
          "надо признать — мы недооценили риски",
          "признаю, мы недооценили риски",
          "следует признать, мы недооценили риски"
        ],
        "model": "Надо признать, мы недооценили риски.",
        "hint": "admittedly — это вводное «надо признать / признаться». ⚖️"
      },
      {
        "type": "trRE",
        "ru": "Классическая музыка — не совсем моё.",
        "accept": [
          "classical music isnt really my cup of tea",
          "classical music is not really my cup of tea",
          "classical music isnt my cup of tea",
          "classical music is not my cup of tea",
          "classical music really isnt my cup of tea"
        ],
        "model": "Classical music isn't really my cup of tea.",
        "hint": "«Не моё» по-английски — идиома про чашку чая: not my cup of tea. ☕"
      },
      {
        "type": "order",
        "answer": "the meeting was put off until next week",
        "accept": [
          "the meeting was put off until next week"
        ],
        "hintRu": "Скажи по-английски: «Встречу отложили до следующей недели».",
        "hint": "Фразовый глагол put off = «отложить»; здесь он в пассиве: was put off. 📅"
      },
      {
        "type": "match",
        "pairs": [
          [
            "albeit",
            "хотя и"
          ],
          [
            "notwithstanding",
            "несмотря на"
          ],
          [
            "hence",
            "следовательно"
          ],
          [
            "arguably",
            "пожалуй"
          ],
          [
            "admittedly",
            "надо признать"
          ]
        ],
        "hint": "Соедини формальный коннектор или вводное наречие с его русским значением. 🔗"
      },
      {
        "type": "gap",
        "q": "Not only ___ he miss the deadline, but he also lost the file. <i style='opacity:.6'>(do/did — инверсия)</i>",
        "accept": [
          "did",
          "did he"
        ],
        "model": "did",
        "why": "Свод Недели 1: Not only в начале → инверсия did he miss. Вспомогательный встаёт перед подлежащим.",
        "hint": "Not only открыло фразу — дальше «вопросный» порядок: вспомогательный прошедшего перед «he». 🔁"
      },
      {
        "type": "choice",
        "q": "If she had caught the earlier train, she ___ here by now.",
        "opts": [
          "would be",
          "had been",
          "will be",
          "is"
        ],
        "answer": "would be",
        "why": "Свод Недели 2 (смешанное условие): условие в прошлом (had caught) → результат сейчас (would be here).",
        "hint": "Поезд был в прошлом, а «была бы здесь» — про сейчас: главную часть ставь в would be. 🚆"
      },
      {
        "type": "trRE",
        "ru": "Именно тогда я понял правду.",
        "accept": [
          "it was then that i realised the truth",
          "it was then that i realized the truth",
          "it was then that i understood the truth",
          "it was then i realised the truth"
        ],
        "model": "It was then that I realised the truth.",
        "hint": "It-cleft выделяет обстоятельство времени: It was then that… «Именно тогда». 💡"
      },
      {
        "type": "choice",
        "q": "___ checked everything twice, she finally submitted the form.",
        "opts": [
          "Having",
          "Have",
          "Had",
          "Has"
        ],
        "answer": "Having",
        "why": "Свод Недели 3: перфектное причастие Having checked… = сжатая клауза «проверив».",
        "hint": "«Проверив» = действие раньше главного — открой фразу формой Having + 3-я форма. 📝"
      },
      {
        "type": "choice",
        "q": "___ I admire her talent, I cannot condone her methods.",
        "opts": [
          "Much as",
          "As much",
          "So much",
          "However"
        ],
        "answer": "Much as",
        "why": "Much as I admire… = продвинутая уступка «как я ни…»: фронтинг с as. Формы «As much / So much / However» так конструкцию не откроют.",
        "hint": "«Как бы я ни восхищался…» — уступка с фронтингом, начинается с наречия + as. 🙂"
      },
      {
        "type": "choice",
        "q": "The handwriting was ___ impossible to read.",
        "opts": [
          "utterly",
          "very",
          "highly",
          "more"
        ],
        "answer": "utterly",
        "why": "impossible — неградуируемое (предельное) прилагательное → utterly / absolutely, а не very.",
        "hint": "«Невозможно» — предел, а не степень: с такими прилагательными дружит «абсолютно / совершенно». 🙂"
      },
      {
        "type": "gap",
        "q": "The match was abandoned because of ___ rain and waterlogged pitches. <i style='opacity:.6'>(strong / heavy)</i>",
        "accept": [
          "heavy"
        ],
        "model": "heavy",
        "why": "Коллокация: heavy rain, а не «strong rain». Слова дружат именно так.",
        "hint": "Сильный дождь по-английски не «strong» — у rain свой прилагательный-партнёр. 🙂"
      },
      {
        "type": "gap",
        "q": "At the time I said nothing, but I ___ notice the tension in the room. <i style='opacity:.6'>(do / did — эмфаза)</i>",
        "accept": [
          "did"
        ],
        "model": "did",
        "why": "Эмфатическое did + базовая форма подчёркивает контраст в прошлом: I did notice… (рассказ идёт в прошедшем — said).",
        "hint": "«Я всё же заметил…» — усилительный вспомогательный перед глаголом; рассказ в прошедшем. 🙂"
      },
      {
        "type": "gap",
        "q": "The doctor insisted that he ___ in bed for at least a week. <i style='opacity:.6'>(stay — сослагательное)</i>",
        "accept": [
          "stay",
          "should stay"
        ],
        "model": "stay",
        "why": "Свод Недели 2: сослагательное после insist that… — базовая форма stay (или should stay), без stays/stayed.",
        "hint": "После «insisted that…» глагол идёт в начальной форме: … that he ___ in bed. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Как бы усердно он ни старался, результат не улучшался.",
        "accept": [
          "however hard he tried the result did not improve",
          "however hard he tried the result wouldnt improve",
          "however hard he tried the result would not improve",
          "no matter how hard he tried the result did not improve",
          "however hard he tried the results did not improve",
          "however hard he tried nothing seemed to improve"
        ],
        "model": "However hard he tried, the result would not improve.",
        "why": "However + наречие + подлежащее + глагол = «как бы … ни»: However hard he tried…",
        "hint": "«Как бы усердно он ни…» строится одним словом на How- перед наречием hard. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Он, должно быть, совсем забыл о встрече.",
        "accept": [
          "he must have completely forgotten about the meeting",
          "he must have completely forgotten the meeting",
          "he must have forgotten all about the meeting",
          "he must have totally forgotten about the meeting",
          "he mustve completely forgotten about the meeting",
          "he must have forgotten about the meeting entirely"
        ],
        "model": "He must have completely forgotten about the meeting.",
        "why": "Свод Недели 2: уверенная дедукция о прошлом — must have + 3-я форма (forgotten).",
        "hint": "«Должно быть, забыл» о прошлом — это must have + 3-я форма. 🙂"
      },
      {
        "type": "trER",
        "en": "The company automated its billing, thereby cutting costs dramatically.",
        "accept": [
          "компания автоматизировала выставление счетов, тем самым резко сократив издержки",
          "компания автоматизировала биллинг, тем самым существенно снизив расходы",
          "компания автоматизировала выставление счетов и тем самым резко сократила издержки",
          "автоматизировав выставление счетов, компания резко сократила издержки",
          "компания автоматизировала расчёты, благодаря чему резко снизила расходы",
          "компания автоматизировала выставление счетов, тем самым сильно сократив издержки"
        ],
        "model": "Компания автоматизировала выставление счетов, тем самым резко сократив издержки.",
        "why": "thereby + -ing = «тем самым делая что-то»: формальный коннектор следствия.",
        "hint": "thereby + -ing по-русски звучит как «тем самым…». 🙂"
      },
      {
        "type": "trER",
        "en": "Please do not hesitate to contact us should you require further assistance.",
        "accept": [
          "если вам понадобится дополнительная помощь, не стесняйтесь обращаться к нам",
          "если вам потребуется дополнительная помощь, пожалуйста, обращайтесь",
          "при необходимости дополнительной помощи не стесняйтесь связаться с нами",
          "если понадобится помощь, пожалуйста, свяжитесь с нами",
          "не стесняйтесь обращаться к нам, если вам потребуется дополнительная помощь",
          "если вам нужна будет помощь, пожалуйста, обращайтесь к нам"
        ],
        "model": "Если вам понадобится дополнительная помощь, не стесняйтесь обращаться к нам.",
        "why": "Формальный регистр: do not hesitate, require (вместо need), should you require — условная инверсия.",
        "hint": "Официальная фраза с require и «should you…» переводится обычным «если вам понадобится…». 🙂"
      },
      {
        "type": "order",
        "answer": "the committee will look into the matter next week",
        "accept": [
          "the committee will look into the matter next week"
        ],
        "hintRu": "Скажи по-английски: «Комитет рассмотрит этот вопрос на следующей неделе».",
        "why": "Фразовый глагол look into = «рассмотреть, изучить»: will look into the matter.",
        "hint": "«Рассмотреть вопрос» — фразовый глагол look into + the matter. 🙂"
      },
      {
        "type": "order",
        "answer": "he has two sisters both of whom are doctors",
        "accept": [
          "he has two sisters both of whom are doctors"
        ],
        "hintRu": "Скажи по-английски: «У него две сестры, обе из которых — врачи».",
        "why": "Свод Недели 3: квантор + of whom для людей — both of whom are doctors.",
        "hint": "«…, обе из которых — врачи» строится как both of whom are doctors. 🙂"
      },
      {
        "type": "match",
        "pairs": [
          [
            "bitterly",
            "cold"
          ],
          [
            "highly",
            "likely"
          ],
          [
            "utterly",
            "exhausted"
          ],
          [
            "deeply",
            "rooted"
          ],
          [
            "blissfully",
            "unaware"
          ]
        ],
        "why": "Интенсификаторы дружат с конкретными прилагательными: bitterly cold, highly likely, utterly exhausted, deeply rooted, blissfully unaware.",
        "hint": "Соедини усилитель с прилагательным, с которым он образует устойчивую пару. 🔗"
      },
      {
        "type": "describe",
        "img": "img/c1/day-25.jpg",
        "prompt": "Опиши сцену и вырази позицию (3–4 предложения) в строгом C1-регистре: задействуй продвинутую уступку (Much as…, However…, For all…) И формальный коннектор (thereby, hence, albeit) ИЛИ вводное наречие (arguably, presumably).",
        "keywords": [
          "much as",
          "however",
          "for all",
          "thereby",
          "hence",
          "albeit",
          "arguably",
          "presumably",
          "admittedly",
          "notwithstanding",
          "indeed",
          "appears",
          "seems",
          "scene",
          "man",
          "woman"
        ],
        "minWords": 20,
        "model": "Arguably, this is the most deliberate composition in the set. Much as the scene looks casual, every detail seems placed with care. The light falls gently, thereby softening an otherwise stark room.",
        "why": "Уступка, формальный коннектор и вводное наречие вместе держат зрелый C1-регистр — вершина курса.",
        "hint": "Подними регистр и заяви позицию: Arguably…, Much as…, и свяжи мысль через thereby / hence. 🎩"
      },
      {
        "type": "describe",
        "img": "img/c1/day-27.jpg",
        "prompt": "Опиши сцену в C1-регистре (3–4 предложения): вставь вводное наречие (admittedly, arguably, presumably) И идиому ИЛИ формальный коннектор (albeit, thereby).",
        "keywords": [
          "admittedly",
          "arguably",
          "presumably",
          "albeit",
          "thereby",
          "cup of tea",
          "indeed",
          "appears",
          "seems",
          "clearly",
          "notwithstanding",
          "hence"
        ],
        "minWords": 20,
        "model": "Arguably, this is the most relaxed scene in the whole set. The man seems perfectly content, albeit a little tired. Admittedly, a quiet corner like this is exactly my cup of tea.",
        "hint": "Подними регистр: начни с Arguably/Admittedly…, добавь albeit… и хотя бы одну идиому. 🎩"
      }
    ]
  }
};;

/* ===== helpers ===== */
