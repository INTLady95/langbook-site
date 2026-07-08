/* English A2 — level config + 30-day plan (COURSE) + weekly exams (EXAMS).
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'A2',
  course:'en-a2',
  pkey:'langbook-a2-progress',
  preview:true,
  finalNote:'Это твоя победа 💛 Полный уровень English A2 — позади. Дальше открывается B1. Горжусь тобой!'
};

const COURSE = [
  {wn:'01', wt:'Прошлое целиком', days:[
    {n:1,t:'Что было',p:'неправильные глаголы (go→went).'},
    {n:2,t:'Did-вопросы',p:"did/didn't, Wh- в прошлом."},
    {n:3,t:'Я делал тогда',p:'Past Continuous (was/were + -ing).'},
    {n:4,t:'Когда и пока',p:'Past Simple vs Continuous, when/while.'},
    {n:5,t:'Рассказ',p:'связки then/after/before, ago.'},
    {n:6,t:'Мои выходные',p:'закрепление прошлого, last/ago.'},
    {n:7,t:'Повторение №1',p:'закрепляем неделю 1 + тест.'}
  ]},
  {wn:'02', wt:'Present Perfect', days:[
    {n:8,t:'Я уже это делал',p:'Present Perfect: have/has + 3-я форма.'},
    {n:9,t:'Был и уехал',p:'been vs gone, третьи формы.'},
    {n:10,t:'Только что',p:'just / already / yet.'},
    {n:11,t:'С каких пор',p:'for / since, How long?'},
    {n:12,t:'Уже или вчера',p:'Present Perfect vs Past Simple.'},
    {n:13,t:'Что я повидал',p:'опыт: ever/never, How long.'},
    {n:14,t:'Повторение №2',p:'закрепляем неделю 2 + тест.'}
  ]},
  {wn:'03', wt:'Будущее и сравнение', days:[
    {n:15,t:'Я собираюсь',p:'be going to (планы, прогнозы).'},
    {n:16,t:'Решено!',p:'will, will vs going to.'},
    {n:17,t:'Завтра в пять',p:'Present Continuous для будущего.'},
    {n:18,t:'Больше и лучше',p:'comparatives, than.'},
    {n:19,t:'Самый-самый',p:'superlatives, the best.'},
    {n:20,t:'Так же, как',p:'as…as, наречия (well).'},
    {n:21,t:'Повторение №3',p:'закрепляем неделю 3 + тест.'}
  ]},
  {wn:'04', wt:'Модальные и условия', days:[
    {n:22,t:'Надо',p:"have to, must, mustn't."},
    {n:23,t:'Советую',p:'should, might.'},
    {n:24,t:'Сколько',p:'much/many, a little/a few, too/enough.'},
    {n:25,t:'Люблю делать',p:'gerund vs infinitive.'},
    {n:26,t:'Если…',p:'first conditional.'},
    {n:27,t:'Раньше я',p:'used to.'},
    {n:28,t:'Который',p:'who/which/where, some-/any-/no-.'},
    {n:29,t:'Поэтому',p:'because/so/but/although, phrasal verbs.'},
    {n:30,t:'Моя история',p:'финальный проект + итог A2.'}
  ]}
];

/* ===== weekly checkpoint exams (content) ===== */
const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя A2 позади — мы закрыли прошедшее время целиком. Проверим всё: неправильные глаголы, did-вопросы и короткие ответы, Past Continuous и его контраст с Past Simple, связки рассказа (then, because, so) и предлоги времени in / on / at. Заданий стало больше — двадцать пять. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Неправильные глаголы: go→went · take→took · make→made · give→gave",
      "Вопрос/отрицание: <b>did / didn't</b> + базовая форма · Yes, I did",
      "Past Continuous: <b>was/were + -ing</b> (I was reading)",
      "Past Simple ↔ Continuous: факт vs фон (when / while)",
      "Связки: then · after · before · because · so",
      "Предлоги времени: <b>in</b> (год, месяц) · <b>on</b> (день) · <b>at</b> (часы)",
      "<b>ago</b> стоит после срока; last night / last year — без предлога"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Yesterday I ___ to work. <i style=\"opacity:.6\">(go)</i>",
        "opts": [
          "go",
          "went",
          "goed",
          "gone"
        ],
        "answer": "went",
        "why": "go → went. Это неправильный глагол — форму просто запоминаем, без -ed. 💛",
        "hint": "Слово «Yesterday» зовёт в прошлое — вспомни вторую (неправильную) форму глагола go, а не аккуратное go+ed. 🙂"
      },
      {
        "type": "choice",
        "q": "___ you call me yesterday?",
        "opts": [
          "Did",
          "Do",
          "Was",
          "Were"
        ],
        "answer": "Did",
        "why": "Вопрос о прошлом → Did + базовая форма: Did you call? (а не Did you called).",
        "hint": "Это вопрос в прошлом со смысловым глаголом call, поэтому впереди нужен вспомогательный глагол прошедшего времени, а сам call останется в начальной форме. ✨"
      },
      {
        "type": "choice",
        "q": "I was reading when the phone ___ . <i style=\"opacity:.6\">(короткое действие)</i>",
        "opts": [
          "rang",
          "was ringing",
          "rings",
          "ringed"
        ],
        "answer": "rang",
        "why": "Длинное шло (was reading), короткое прервало → Past Simple: ring → rang.",
        "hint": "Короткое действие, которое врывается после «when» в длинное чтение, ставим в Past Simple — простой второй формой глагола. 📞"
      },
      {
        "type": "choice",
        "q": "They ___ playing football at six o’clock yesterday.",
        "opts": [
          "was",
          "were",
          "are",
          "do"
        ],
        "answer": "were",
        "why": "they → were. Фон в прошлом строим как were + -ing.",
        "hint": "Тут Past Continuous (форма be + playing): подбери форму глагола be в прошлом именно для «they». ⚽"
      },
      {
        "type": "choice",
        "q": "She ___ go to school yesterday.",
        "opts": [
          "didn't",
          "doesn't",
          "wasn't",
          "don't"
        ],
        "answer": "didn't",
        "why": "Отрицание в прошлом → didn't + базовая форма (go, не went).",
        "hint": "Отрицание в прошлом со смысловым глаголом go строится через вспомогательный did + not. 🙂"
      },
      {
        "type": "choice",
        "q": "I met him two years ___ .",
        "opts": [
          "ago",
          "before",
          "for",
          "past"
        ],
        "answer": "ago",
        "why": "Сначала срок, потом ago: two years ago. Ловушка — ago стоит ПОСЛЕ срока.",
        "hint": "«…назад» по-английски стоит ПОСЛЕ отрезка времени — вспомни именно тот предлог, что идёт в конце. ⏳"
      },
      {
        "type": "gap",
        "q": "We ___ a great holiday last summer. <i style=\"opacity:.6\">(have)</i>",
        "accept": [
          "had",
          "we had"
        ],
        "model": "had",
        "hint": "«Last summer» — это прошлое, так что поставь have во вторую, неправильную форму. ☀️"
      },
      {
        "type": "gap",
        "q": "At eight o’clock last night I ___ having dinner. <i style=\"opacity:.6\">(be)</i>",
        "accept": [
          "was",
          "i was"
        ],
        "model": "was",
        "hint": "Здесь Past Continuous (be + having): для «I» нужна форма глагола be в прошлом. 🍽️"
      },
      {
        "type": "gap",
        "q": "First I got up, ___ I had breakfast. <i style=\"opacity:.6\">(потом)</i>",
        "accept": [
          "then",
          "and then"
        ],
        "model": "then",
        "hint": "Нужно маленькое слово-связка последовательности: «сначала…, ___ …». 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я видел её вчера.",
        "accept": [
          "i saw her yesterday",
          "yesterday i saw her"
        ],
        "model": "I saw her yesterday.",
        "hint": "Past Simple: подлежащее + вторая форма глагола see + кого + время «вчера» в самом конце. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Что ты делал в прошлые выходные?",
        "accept": [
          "what did you do last weekend",
          "what did you do at the weekend",
          "what did you do on the weekend"
        ],
        "model": "What did you do last weekend?",
        "hint": "Специальный вопрос в прошлом: вопросительное слово + вспомогательный did + ты + смысловой глагол в начальной форме, а время в конце. ✨"
      },
      {
        "type": "trER",
        "en": "I was sleeping when you called.",
        "accept": [
          "я спал когда ты позвонил",
          "я спала когда ты позвонил",
          "я спал когда ты позвонила",
          "я спала когда ты позвонила",
          "я спал когда ты мне позвонил",
          "я спала когда ты мне позвонила",
          "я спал когда мне позвонили"
        ],
        "model": "Я спал, когда ты позвонил.",
        "hint": "Обрати внимание: первое действие тянулось (was + -ing), а второе после «when» — короткое; передай это двумя глаголами в русском прошедшем. 😴"
      },
      {
        "type": "order",
        "answer": "while i was cooking the phone rang",
        "accept": [
          "while i was cooking the phone rang",
          "the phone rang while i was cooking"
        ],
        "hintRu": "Скажи по-английски: «Пока я готовил, зазвонил телефон.»",
        "hint": "«Пока…» = while + длинное действие в Past Continuous, а потом короткое — в Past Simple. 📞"
      },
      {
        "type": "match",
        "pairs": [
          [
            "🏃",
            "ran"
          ],
          [
            "🍽️",
            "ate"
          ],
          [
            "📖",
            "read"
          ],
          [
            "✍️",
            "wrote"
          ],
          [
            "😴",
            "slept"
          ]
        ],
        "hint": "Соедини каждую картинку со ВТОРОЙ формой неправильного глагола (run→…, eat→…, sleep→…). 🙂"
      },
      {
        "type": "describe",
        "img": "img/a2/day-04.jpg",
        "prompt": "Это было вчера. Что делала женщина? Опиши картинку в прошедшем времени (Past Continuous: was + -ing), 2–3 предложения.",
        "keywords": [
          "was",
          "cooking",
          "woman",
          "kitchen",
          "making",
          "soup",
          "stirring",
          "smiling",
          "wearing",
          "vegetables",
          "pot",
          "food",
          "dinner",
          "beans"
        ],
        "minWords": 10,
        "model": "Yesterday a woman was cooking in the kitchen. She was making soup and stirring the pot, and she was smiling while she prepared dinner.",
        "hint": "Опиши момент в прошлом по формуле «She was + …-ing» и добавь, где она была и что готовила. 🙂"
      },
      {
        "type": "choice",
        "q": "We moved to a new flat ___ 2019.",
        "opts": [
          "in",
          "on",
          "at",
          "ago"
        ],
        "answer": "in",
        "why": "Год — большой отрезок времени, перед ним in: in 2019. 💛",
        "hint": "Перед годом ставим предлог для больших отрезков времени — тот же, что перед месяцем или сезоном. 📅"
      },
      {
        "type": "choice",
        "q": "The accident happened ___ Monday.",
        "opts": [
          "on",
          "in",
          "at",
          "for"
        ],
        "answer": "on",
        "why": "Дни недели и даты идут с on: on Monday, on 5 May.",
        "hint": "Перед конкретным днём недели нужен предлог, который отвечает на «в какой день». 🗓️"
      },
      {
        "type": "choice",
        "q": "She ___ a lot of photos on holiday. <i style=\"opacity:.6\">(take)</i>",
        "opts": [
          "took",
          "taked",
          "takes",
          "taken"
        ],
        "answer": "took",
        "why": "take — неправильный глагол: в прошлом take → took, без -ed. 📸",
        "hint": "«On holiday» — это уже прошлое; у глагола take особая вторая форма, а не take+ed. 🙂"
      },
      {
        "type": "choice",
        "q": "— Did you enjoy the party? — Yes, I ___ .",
        "opts": [
          "did",
          "was",
          "have",
          "do"
        ],
        "answer": "did",
        "why": "Короткий ответ повторяет вспомогательный из вопроса: Did you…? → Yes, I did.",
        "hint": "В коротком ответе просто повтори тот же вспомогательный глагол, что стоял в вопросе. 🙂"
      },
      {
        "type": "gap",
        "q": "The film started ___ eight o'clock. <i style=\"opacity:.6\">(предлог)</i>",
        "accept": [
          "at"
        ],
        "model": "at",
        "why": "Точное время на часах идёт с at: at eight o'clock. ⏰",
        "hint": "Перед точным временем на часах ставится короткий предлог — тот же, что в «at the weekend». 🕗"
      },
      {
        "type": "trRE",
        "ru": "Мы поехали в Париж прошлым летом.",
        "accept": [
          "we went to paris last summer",
          "last summer we went to paris"
        ],
        "model": "We went to Paris last summer.",
        "why": "go → went (неправильный), а «прошлым летом» — last summer, без предлога перед last. 🚆",
        "hint": "«Поехали» — вторая форма go, а «прошлым летом» по-английски идёт без предлога перед словом last. ☀️"
      },
      {
        "type": "trER",
        "en": "Did you sleep well last night?",
        "accept": [
          "ты хорошо спал прошлой ночью",
          "ты хорошо спала прошлой ночью",
          "ты хорошо спал вчера ночью",
          "ты хорошо спала вчера ночью",
          "хорошо ли ты спал прошлой ночью",
          "хорошо ли ты спала прошлой ночью",
          "ты хорошо выспался прошлой ночью",
          "ты хорошо спал этой ночью",
          "ты хорошо спала этой ночью"
        ],
        "model": "Ты хорошо спал прошлой ночью?",
        "why": "Did you…? — вопрос в прошлом; на русском это простое прошедшее: «Ты хорошо спал…». 😴",
        "hint": "Did you… — вопрос о прошлом; переведи глагол sleep простым прошедшим и добавь «прошлой ночью». 🌙"
      },
      {
        "type": "order",
        "answer": "i was late because i missed the bus",
        "accept": [
          "i was late because i missed the bus",
          "because i missed the bus i was late"
        ],
        "hintRu": "Скажи по-английски: «Я опоздал, потому что пропустил автобус.»",
        "why": "«Потому что» = because — союз причины; оба глагола в прошедшем: was, missed. 🚌",
        "hint": "Причину присоединяет союз «потому что» из одного слова; оба глагола — в прошедшем времени. 🙂"
      },
      {
        "type": "match",
        "q": "Соедини глагол и его форму прошедшего времени.",
        "pairs": [
          [
            "take",
            "took"
          ],
          [
            "make",
            "made"
          ],
          [
            "give",
            "gave"
          ],
          [
            "come",
            "came"
          ],
          [
            "drink",
            "drank"
          ]
        ],
        "why": "Неправильные глаголы: их вторую форму просто запоминают — take→took, make→made, give→gave, come→came, drink→drank.",
        "hint": "Слева — начальная форма, справа — её вторая (прошедшая); вспомни, как каждый глагол звучит «во вчера». 🙂"
      },
      {
        "type": "describe",
        "img": "img/a2/day-06.jpg",
        "prompt": "Это было в прошлые выходные. Что делали люди в парке? Опиши 2–3 предложения в прошедшем времени (Past Continuous: were + -ing).",
        "keywords": [
          "park",
          "people",
          "tree",
          "tent",
          "tents",
          "standing",
          "talking",
          "were",
          "was",
          "balloons",
          "event",
          "festival",
          "summer",
          "outside",
          "crowd",
          "walking",
          "grass"
        ],
        "minWords": 10,
        "model": "Last weekend a lot of people were standing in the park near a big tree. They were talking and smiling under the red tents, and some children were holding balloons.",
        "why": "Момент в прошлом — Past Continuous: people were + …-ing. 🌳",
        "hint": "Опиши, что происходило в тот момент, по формуле «they were + …-ing», и добавь, где это было. 🙂"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Неделя Present Perfect — самая важная на A2. Проверим всё: форму have/has + 3-я форма, ever/never, just / already / yet, for / since и How long, been vs gone, сколько раз (twice, three times) и главный контраст — Present Perfect vs Past Simple (есть точное «когда» → уходим в Past). Заданий теперь двадцать пять. 80% — и Неделя 3 откроется.",
    "review": [
      "Present Perfect: <b>have/has + 3-я форма</b>",
      "be→been · go→gone · do→done · make→made · take→taken · break→broken",
      "Опыт: <b>Have you ever…?</b> · never · once / twice / three times",
      "<b>just / already</b> — в середине · <b>yet</b> — в конце",
      "<b>for</b> + период · <b>since</b> + точка · How long?",
      "been (был и вернулся) ↔ gone (ушёл и там)",
      "Есть дата или «вчера» → <b>Past Simple</b>, не Perfect"
    ],
    "q": [
      {
        "type": "choice",
        "q": "I ___ this film already. (see)",
        "opts": [
          "have seen",
          "has seen",
          "have saw",
          "have see"
        ],
        "answer": "have seen",
        "why": "have + 3-я форма: see → seen. «already» спокойно живёт рядом.",
        "hint": "Это Present Perfect: с «I» бери вспомогательный для I/you/we/they и поставь третью форму глагола (see → saw → ...), а не Past Simple 🙂"
      },
      {
        "type": "gap",
        "q": "She ___ finished her work. <i style=\"opacity:.6\">(have / has)</i>",
        "accept": [
          "has",
          "she has"
        ],
        "model": "has",
        "hint": "Подумай, какую форму вспомогательного глагола берут she/he/it — там появляется маленькое окончание 😉"
      },
      {
        "type": "choice",
        "q": "___ you ever ___ to Spain?",
        "opts": [
          "Have / been",
          "Did / been",
          "Have / be",
          "Are / been"
        ],
        "answer": "Have / been",
        "why": "Опыт всей жизни → Have you ever been…?",
        "hint": "Это вопрос про опыт «когда-нибудь» — нужен вспомогательный Present Perfect, а у глагола go в таком значении особая третья форма ✈️"
      },
      {
        "type": "match",
        "q": "Соедини картинку и 3-ю форму глагола (то, что уже сделали).",
        "pairs": [
          [
            "🍽️",
            "eaten"
          ],
          [
            "💤",
            "slept"
          ],
          [
            "✍️",
            "written"
          ],
          [
            "🏃",
            "run"
          ],
          [
            "👁️",
            "seen"
          ]
        ],
        "hint": "Все слова — это третьи формы глаголов (V3); представь, какое действие показывает каждый смайлик, и подбери пару 🙂"
      },
      {
        "type": "choice",
        "q": "I have ___ been to Asia. (ни разу)",
        "opts": [
          "never",
          "ever",
          "yet",
          "already"
        ],
        "answer": "never",
        "why": "«ни разу» в утверждении → never (не ever).",
        "hint": "«Ни разу» — это слово с отрицательным смыслом опыта, которое ставится прямо перед третьей формой глагола 🙂"
      },
      {
        "type": "gap",
        "q": "I have ___ my keys — I can't find them! <i style=\"opacity:.6\">(lose)</i>",
        "accept": [
          "lost"
        ],
        "model": "lost",
        "hint": "После «I have» всегда идёт третья форма; вспомни ряд lose → ... → ... у этого неправильного глагола 🔑"
      },
      {
        "type": "choice",
        "q": "Have you finished ___ ?",
        "opts": [
          "yet",
          "ever",
          "for",
          "since"
        ],
        "answer": "yet",
        "why": "Вопрос «уже готово?» → yet в самом конце.",
        "hint": "В вопросах «закончил ли уже к этому моменту» в конце ставят особое словечко — выбери именно его 🙂"
      },
      {
        "type": "trER",
        "en": "She has just arrived.",
        "accept": [
          "она только что приехала",
          "она только что пришла",
          "она только что прибыла",
          "она только что приехала сюда",
          "она только что доехала"
        ],
        "model": "Она только что приехала.",
        "hint": "«just» в Present Perfect = действие случилось совсем недавно; сам Present Perfect на русском передают прошедшим временем. ⏱️"
      },
      {
        "type": "choice",
        "q": "I've lived here ___ 2015.",
        "opts": [
          "since",
          "for",
          "from",
          "ago"
        ],
        "answer": "since",
        "why": "Точка во времени (год) → since.",
        "hint": "После года стоит вопрос «с какого момента?» — выбери предлог для точки отсчёта во времени 🙂"
      },
      {
        "type": "gap",
        "q": "I've known him ___ five years. <i style=\"opacity:.6\">(период)</i>",
        "accept": [
          "for"
        ],
        "model": "for",
        "hint": "«Five years» — это длина периода, поэтому нужен предлог, который указывает на продолжительность, а не на момент 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я знаю её с 2010 года.",
        "accept": [
          "i have known her since 2010",
          "ive known her since 2010",
          "i have known her since the year 2010",
          "i have known her since two thousand ten",
          "i have known her since two thousand and ten"
        ],
        "model": "I have known her since 2010.",
        "hint": "«Знаю с...» по-английски — это Present Perfect (have + V3), а «с 2010 года» просит предлог для точки во времени 🙂"
      },
      {
        "type": "order",
        "answer": "she has just gone home",
        "accept": [
          "she has just gone home"
        ],
        "hintRu": "Собери: «Она только что ушла домой».",
        "hint": "Порядок такой: кто + вспомогательный + «только что» + третья форма + куда; словечко «только что» прячется между вспомогательным и глаголом 🙂"
      },
      {
        "type": "choice",
        "q": "— Have you eaten? — No, I ___ .",
        "opts": [
          "haven't",
          "didn't",
          "don't",
          "amn't"
        ],
        "answer": "haven't",
        "why": "Краткий ответ повторяет have → No, I haven’t.",
        "hint": "В коротком ответе мы просто повторяем тот же вспомогательный глагол, что был в вопросе, но в отрицании 🙂"
      },
      {
        "type": "trRE",
        "ru": "Ты уже сделал домашнюю работу?",
        "accept": [
          "have you done your homework yet",
          "have you done your homework",
          "have you finished your homework yet",
          "have you already done your homework",
          "have you done the homework yet",
          "have you finished your homework"
        ],
        "model": "Have you done your homework yet?",
        "hint": "Это вопрос в Present Perfect: начни с вспомогательного + you + третья форма, а «уже» в вопросе превращается в словечко в самом конце 🙂"
      },
      {
        "type": "describe",
        "img": "img/a2/day-09.jpg",
        "prompt": "Человек в аэропорту с чемоданом ✈️ Что он уже сделал и где побывал? Опиши 2–3 предложениями в Present Perfect (He has just…, He has been to…).",
        "keywords": [
          "airport",
          "suitcase",
          "bag",
          "travel",
          "trip",
          "flight",
          "holiday",
          "has",
          "have",
          "been",
          "just",
          "arrived",
          "packed"
        ],
        "minWords": 8,
        "model": "He has just arrived at the airport with his suitcase. He has been to many countries this year.",
        "hint": "Опиши 2–3 предложения в Present Perfect по схеме He has just… и He has been to…, используя слова про аэропорт и поездку ✈️"
      },
      {
        "type": "choice",
        "q": "I ___ this film last night. <i style=\"opacity:.6\">(see)</i>",
        "opts": [
          "saw",
          "have seen",
          "seen",
          "was seeing"
        ],
        "answer": "saw",
        "why": "Есть точное время в прошлом (last night) → Past Simple: see → saw. С last night Present Perfect не ставят. 💛",
        "hint": "Есть конкретное «когда» (вчера вечером) — это сигнал простого прошедшего, а не Present Perfect. 🎬"
      },
      {
        "type": "choice",
        "q": "___ you ever eaten sushi?",
        "opts": [
          "Have",
          "Did",
          "Do",
          "Are"
        ],
        "answer": "Have",
        "why": "Опыт за всю жизнь + eaten (3-я форма) → Have you ever eaten…? С Did была бы форма eat. 🍣",
        "hint": "После пропуска стоит eaten (третья форма) — значит нужен вспомогательный Present Perfect, а не did. 🙂"
      },
      {
        "type": "choice",
        "q": "I have seen this play ___ . <i style=\"opacity:.6\">(три раза)</i>",
        "opts": [
          "three times",
          "three time",
          "third",
          "times three"
        ],
        "answer": "three times",
        "why": "«Сколько раз» = число + times: three times (time во множественном — times). 🔢",
        "hint": "«Столько-то раз» по-английски — это число плюс слово «раз» во множественном числе. 🙂"
      },
      {
        "type": "choice",
        "q": "Mum isn't home — she ___ to the shops.",
        "opts": [
          "has gone",
          "has been",
          "have gone",
          "is gone"
        ],
        "answer": "has gone",
        "why": "«Её нет дома» → ушла и ещё там: has gone. has been значило бы «сходила и вернулась». 🛍️",
        "hint": "Её сейчас нет дома — значит человек ушёл и пока не вернулся; для этого своя третья форма глагола go. 🙂"
      },
      {
        "type": "gap",
        "q": "Look! Someone ___ broken the window. <i style=\"opacity:.6\">(have / has)</i>",
        "accept": [
          "has"
        ],
        "model": "has",
        "why": "someone = he/she/it → has; свежая новость про результат сейчас — это Present Perfect. 🪟",
        "hint": "«Someone» ведёт себя как he/she/it — подбери для него нужную форму вспомогательного глагола. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я живу здесь три года.",
        "accept": [
          "i have lived here for three years",
          "ive lived here for three years",
          "i have lived here for 3 years",
          "ive lived here for 3 years",
          "i have been living here for three years",
          "ive been living here for three years"
        ],
        "model": "I have lived here for three years.",
        "why": "Действие началось в прошлом и длится сейчас → Present Perfect: have lived… for (период). По-русски «живу», по-английски have lived. 🏠",
        "hint": "По-русски «живу» в настоящем, но раз это тянется с прошлого до сейчас — нужен Present Perfect и предлог длительности. 🙂"
      },
      {
        "type": "trER",
        "en": "I have already read this book.",
        "accept": [
          "я уже прочитал эту книгу",
          "я уже прочитала эту книгу",
          "я уже читал эту книгу",
          "я уже читала эту книгу",
          "эту книгу я уже прочитал",
          "эту книгу я уже прочитала",
          "я уже прочёл эту книгу"
        ],
        "model": "Я уже прочитал эту книгу.",
        "why": "already = «уже»; Present Perfect на русском передаём прошедшим: «Я уже прочитал». 📖",
        "hint": "«already» — это «уже»; сам Present Perfect переведи русским прошедшим временем. 🙂"
      },
      {
        "type": "order",
        "answer": "have you seen this film yet",
        "accept": [
          "have you seen this film yet"
        ],
        "hintRu": "Собери вопрос: «Ты уже видел этот фильм?»",
        "why": "Вопрос в Present Perfect: Have + you + 3-я форма (seen), а yet — в самом конце. 🎬",
        "hint": "Вспомогательный + ты + третья форма, а словечко «уже» в вопросе встаёт в самый конец. 🙂"
      },
      {
        "type": "match",
        "q": "Соедини глагол и его третью форму (V3).",
        "pairs": [
          [
            "go",
            "gone"
          ],
          [
            "do",
            "done"
          ],
          [
            "make",
            "made"
          ],
          [
            "take",
            "taken"
          ],
          [
            "break",
            "broken"
          ]
        ],
        "why": "Третьи формы неправильных глаголов: go→gone, do→done, make→made, take→taken, break→broken.",
        "hint": "Справа — третьи формы (V3), те, что идут после have/has; вспомни ряд каждого неправильного глагола. 🙂"
      },
      {
        "type": "describe",
        "img": "img/a2/day-13.jpg",
        "prompt": "Эти люди в горах на природе ⛺ Что они уже сделали и где побывали? Опиши 2–3 предложения в Present Perfect (They have been…, They have put up…).",
        "keywords": [
          "camping",
          "tent",
          "mountains",
          "mountain",
          "trees",
          "forest",
          "nature",
          "people",
          "been",
          "have",
          "has",
          "put",
          "travel",
          "holiday",
          "river",
          "outdoors",
          "camp",
          "climbed"
        ],
        "minWords": 8,
        "model": "These people have gone camping in the mountains. They have put up an orange tent near the trees, and they have been here for a few days.",
        "why": "Опыт и результат сейчас — это Present Perfect: They have been…, They have put up…",
        "hint": "Опиши, что они уже сделали, по схеме They have + третья форма (been, put up), и добавь про палатку и горы. ⛺"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Будущее и сравнение — это была Неделя 3. Проверим всё: going to vs will, Present Continuous для договорённостей, сравнительную (-er / more … than) и превосходную (the -est / the most / the best), наречия (quickly, well) и оборот as … as. Заданий стало двадцать пять. Нужно 80%, чтобы открыть Неделю 4.",
    "review": [
      "<b>be going to</b> — план / прогноз по фактам",
      "<b>will</b> — решение сейчас, обещание, I think it will…",
      "Present Continuous для будущего: I'm meeting… tomorrow",
      "Сравнение: -er / more … <b>than</b> (не then!)",
      "Превосходная: <b>the</b> -est / the most / the best",
      "Наречие: quick → quickly · good → <b>well</b> · (not) as … as"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Look at those big black clouds! It ___ rain.",
        "opts": [
          "is going to",
          "will",
          "goes to",
          "rains"
        ],
        "answer": "is going to",
        "why": "Тучи прямо перед глазами — это факт. Прогноз по факту мы строим через be going to. 💛",
        "hint": "Тучи уже на небе — есть видимый признак, и для такого прогноза по «уликам» мы берём конструкцию плана/предсказания, а не спонтанное решение. ☁️"
      },
      {
        "type": "choice",
        "q": "The phone is ringing. — I ___ get it!",
        "opts": [
          "will",
          "am going to",
          "go to",
          "get"
        ],
        "answer": "will",
        "why": "Решение рождается прямо сейчас, плана заранее не было — значит will.",
        "hint": "Решение приходит прямо сейчас, в момент звонка — для такого мгновенного порыва нужна форма быстрого решения. 📞"
      },
      {
        "type": "gap",
        "q": "I ___ meeting Tom at six tomorrow. <i style=\"opacity:.6\">(be — договорённость)</i>",
        "accept": [
          "am",
          "i am",
          "i'm",
          "im"
        ],
        "model": "am",
        "hint": "Это договорённость на завтра, значит Present Continuous; подумай, какая форма глагола be дружит с «I». 🙂"
      },
      {
        "type": "match",
        "q": "Соедини каждую картинку с её английским словом.",
        "pairs": [
          [
            "🗺️",
            "map"
          ],
          [
            "✈️",
            "plane"
          ],
          [
            "🏔️",
            "mountain"
          ],
          [
            "🏙️",
            "city"
          ],
          [
            "🏃",
            "runner"
          ]
        ],
        "hint": "Просто посмотри на каждую картинку и подбери слово по смыслу — что именно на ней нарисовано. 🗺️"
      },
      {
        "type": "choice",
        "q": "This box is ___ than that one.",
        "opts": [
          "heavier",
          "more heavy",
          "heaviest",
          "heavy"
        ],
        "answer": "heavier",
        "why": "Короткое прилагательное heavy → heavier, и не забудь than.",
        "hint": "Прилагательное короткое и кончается на -y, а перед сравнением вспомни, во что превращается это -y. 📦"
      },
      {
        "type": "trER",
        "en": "Winter is colder than autumn.",
        "accept": [
          "зима холоднее осени",
          "зима холоднее чем осень",
          "зима холоднее, чем осень",
          "зимой холоднее чем осенью",
          "зима более холодная чем осень"
        ],
        "model": "Зима холоднее осени.",
        "hint": "Тут сравнительная форма прилагательного и словечко than — переведи это как «...нее» и связку «чем». ❄️"
      },
      {
        "type": "choice",
        "q": "Today is ___ day of my life!",
        "opts": [
          "the best",
          "the better",
          "best",
          "more good"
        ],
        "answer": "the best",
        "why": "Превосходная форма от good особая: the best.",
        "hint": "Это превосходная степень, день самый-самый; вспомни особую форму от good и не забудь маленькое the. ✨"
      },
      {
        "type": "trRE",
        "ru": "Я собираюсь купить машину.",
        "accept": [
          "i am going to buy a car",
          "i'm going to buy a car",
          "im going to buy a car",
          "i am going to buy a car too",
          "i'm going to buy a car soon"
        ],
        "model": "I'm going to buy a car.",
        "hint": "«Собираюсь» — это заранее обдуманный план, значит конструкция намерения плюс глагол в начальной форме. 🚗"
      },
      {
        "type": "choice",
        "q": "Anna is ___ student in our class.",
        "opts": [
          "the smartest",
          "the most smart",
          "smartest",
          "more smart"
        ],
        "answer": "the smartest",
        "why": "Короткое прилагательное smart → the smartest. The здесь обязательно!",
        "hint": "Самая умная в классе — превосходная степень короткого прилагательного: окончание -est и артикль the впереди. 🤓"
      },
      {
        "type": "order",
        "answer": "she is going to call you tonight",
        "accept": [
          "she is going to call you tonight",
          "tonight she is going to call you"
        ],
        "hintRu": "Скажи по-английски: «Она собирается позвонить тебе сегодня вечером».",
        "hint": "Сначала кто (она), потом конструкция намерения, затем сам глагол и кому звонит — и время в конец. 🌙"
      },
      {
        "type": "choice",
        "q": "He speaks English very ___ .",
        "opts": [
          "good",
          "well",
          "best",
          "better"
        ],
        "answer": "well",
        "why": "Вопрос «как он говорит?» — это про действие, поэтому наречие well.",
        "hint": "Здесь мы описываем, КАК он говорит, то есть нужно наречие, а не прилагательное. 🗣️"
      },
      {
        "type": "gap",
        "q": "big → ___ <i style=\"opacity:.6\">(сравнительная форма)</i>",
        "accept": [
          "bigger"
        ],
        "model": "bigger",
        "hint": "Короткое слово с одной гласной между согласными — перед -er последнюю букву придётся удвоить. 🔠"
      },
      {
        "type": "trRE",
        "ru": "Я тебе помогу, обещаю.",
        "accept": [
          "i will help you i promise",
          "i'll help you i promise",
          "i promise i will help you",
          "i promise i'll help you",
          "i will help you, i promise",
          "i'll help you, i promise"
        ],
        "model": "I'll help you, I promise.",
        "hint": "Тут обещание, которое рождается в момент речи, — для таких слов берём форму обещания/решения. 🤝"
      },
      {
        "type": "choice",
        "q": "My car isn’t ___ fast ___ yours.",
        "opts": [
          "as / as",
          "so / that",
          "more / than",
          "as / than"
        ],
        "answer": "as / as",
        "why": "«Не такой быстрый, как…» по-английски — это (not) as … as.",
        "hint": "Это сравнение «такой же быстрый, как» — слева и справа от прилагательного ставится одно и то же словечко. 🚙"
      },
      {
        "type": "describe",
        "img": "img/a2/day-18.jpg",
        "prompt": "Опиши картинку (1–2 предложения): что ты видишь? Какое здание самое высокое? Используй сравнения: taller, the tallest.",
        "minWords": 8,
        "keywords": [
          "city",
          "buildings",
          "building",
          "tall",
          "taller",
          "tallest",
          "high",
          "higher",
          "skyline",
          "biggest",
          "towers",
          "tower",
          "modern",
          "sky"
        ],
        "model": "This is a big modern city. The buildings are very tall, and the tower in the middle is the tallest.",
        "hint": "Назови, что на картинке (город, здания), и сравни их: одно выше другого, а какое-то — самое высокое. 🏙️"
      },
      {
        "type": "choice",
        "q": "This book is ___ than that one. <i style=\"opacity:.6\">(interesting)</i>",
        "opts": [
          "more interesting",
          "interestinger",
          "most interesting",
          "more interestinger"
        ],
        "answer": "more interesting",
        "why": "Длинное прилагательное сравнивается через more: more interesting than. Не «interestinger». 📚",
        "hint": "Слово длинное — перед ним ставим отдельное слово «более», а не окончание -er. 🙂"
      },
      {
        "type": "choice",
        "q": "It was ___ film I have ever seen. <i style=\"opacity:.6\">(boring)</i>",
        "opts": [
          "the most boring",
          "the boringest",
          "most boring",
          "more boring"
        ],
        "answer": "the most boring",
        "why": "Превосходная длинного слова: the most boring; плюс конструкция the … I have ever seen. 🎬",
        "hint": "Самое-самое из длинного прилагательного — the most + слово; и не забудь артикль the. 🙂"
      },
      {
        "type": "choice",
        "q": "She runs very ___ . <i style=\"opacity:.6\">(quick)</i>",
        "opts": [
          "quickly",
          "quick",
          "quicker",
          "more quick"
        ],
        "answer": "quickly",
        "why": "Как она бежит? → наречие: quick → quickly (прибавляем -ly). 🏃",
        "hint": "Вопрос «как она бежит?» просит наречие — к короткому прилагательному добавь окончание -ly. 🙂"
      },
      {
        "type": "gap",
        "q": "My brother is older ___ me. <i style=\"opacity:.6\">(чем)</i>",
        "accept": [
          "than"
        ],
        "model": "than",
        "why": "«Чем» в сравнении — than (с буквой a), не then (потом). 👥",
        "hint": "После сравнительной формы идёт словечко «чем» — с буквой a, не путай с «потом». 🙂"
      },
      {
        "type": "gap",
        "q": "This is the ___ pizza I've ever eaten! <i style=\"opacity:.6\">(good)</i>",
        "accept": [
          "best"
        ],
        "model": "best",
        "why": "Превосходная от good — особая: the best. Формы «goodest» не существует. 🍕",
        "hint": "Самая-самая от good — это не goodest, а особое короткое слово. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я встречаюсь с Томом завтра.",
        "accept": [
          "im meeting tom tomorrow",
          "i am meeting tom tomorrow",
          "tomorrow im meeting tom",
          "tomorrow i am meeting tom",
          "im seeing tom tomorrow",
          "i am seeing tom tomorrow",
          "im going to meet tom tomorrow",
          "i am going to meet tom tomorrow"
        ],
        "model": "I'm meeting Tom tomorrow.",
        "why": "Договорённость на завтра → Present Continuous: I'm meeting Tom tomorrow. По-русски «встречаюсь». 🤝",
        "hint": "Это уже назначенная встреча на завтра — по-английски её передают формой be + глагол с -ing. 🙂"
      },
      {
        "type": "trER",
        "en": "I think it will be sunny tomorrow.",
        "accept": [
          "я думаю завтра будет солнечно",
          "я думаю что завтра будет солнечно",
          "думаю завтра будет солнечно",
          "думаю что завтра будет солнечно",
          "я думаю завтра будет солнечная погода",
          "я думаю завтра будет ясно",
          "по-моему завтра будет солнечно"
        ],
        "model": "Я думаю, завтра будет солнечно.",
        "why": "will для прогноза-мнения: I think it will… По-русски — будущее «будет». ☀️",
        "hint": "«I think it will…» — прогноз-мнение; переведи будущим временем «будет». 🙂"
      },
      {
        "type": "order",
        "answer": "are you going to wash the car",
        "accept": [
          "are you going to wash the car"
        ],
        "hintRu": "Собери вопрос: «Ты собираешься мыть машину?»",
        "why": "Вопрос с be going to: Are + you + going to + базовая форма (wash) + …? 🚗",
        "hint": "Вопрос о планах: форма be впереди + you + going to + чистый глагол. 🙂"
      },
      {
        "type": "match",
        "q": "Соедини прилагательное и наречие.",
        "pairs": [
          [
            "quick",
            "quickly"
          ],
          [
            "slow",
            "slowly"
          ],
          [
            "easy",
            "easily"
          ],
          [
            "good",
            "well"
          ],
          [
            "happy",
            "happily"
          ]
        ],
        "why": "Наречие от прилагательного: +ly (quick→quickly, slow→slowly), easy→easily, happy→happily, а good→well — особое.",
        "hint": "Наречие обычно = прилагательное + ly; но у good форма особая — вспомни её. 🙂"
      },
      {
        "type": "describe",
        "img": "img/a2/day-20.jpg",
        "prompt": "Это беговая дорожка стадиона 🏃 Скоро забег. Опиши 2–3 предложения: кто победит и кто бежит быстрее? Используй will / going to и сравнение (faster, the fastest).",
        "keywords": [
          "track",
          "run",
          "running",
          "race",
          "fast",
          "faster",
          "fastest",
          "runner",
          "runners",
          "win",
          "will",
          "going",
          "lanes",
          "quick",
          "quickly",
          "stadium",
          "sport",
          "start"
        ],
        "minWords": 8,
        "model": "This is a running track with numbered lanes. The runners are going to race here, and the fastest runner will win. I think lane six will run faster than the others.",
        "why": "Прогноз о забеге — will / going to; сравнение скорости — faster / the fastest.",
        "hint": "Скажи, что будет (will / going to), и сравни бегунов: кто быстрее и кто самый быстрый. 🏃"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен A2",
    "intro": "Это финал A2! Последний экзамен — по Неделе 4 и по всему уровню сразу: have to / must / mustn't, should / might, quantifiers, gerund vs infinitive, first conditional, used to, who / which, some- / any- / no-. И, конечно, всё пройденное раньше — прошедшие времена, Present Perfect, будущее и сравнение. Тридцать три задания. Соберись — и вперёд к сертификату A2! 🏆",
    "review": [
      "<b>have to / must</b> (надо) · <b>mustn't</b> (нельзя) ≠ don't have to",
      "<b>should</b> (совет) · <b>might</b> (возможно)",
      "much/many · a little/a few · too / (not) enough",
      "want <b>to do</b> · enjoy <b>doing</b>",
      "First conditional: if + present, … will · <b>used to</b> + базовая",
      "who / which / where · some- / any- / <b>no</b>-thing",
      "И весь уровень: Past, Present Perfect, future, сравнение"
    ],
    "q": [
      {
        "type": "choice",
        "q": "I ___ wear a uniform at work. (обязан)",
        "opts": [
          "have to",
          "must to",
          "should to",
          "am to"
        ],
        "answer": "have to",
        "why": "Обязанность, правило на работе → have to + базовая форма. «must to» в английском не бывает 💛",
        "hint": "Для обязанности нужна форма из двух слов — и помни, что «must» с «to» никогда не дружит 🙂"
      },
      {
        "type": "choice",
        "q": "You ___ smoke here — it's a hospital. (нельзя)",
        "opts": [
          "mustn't",
          "don't have to",
          "shouldn't to",
          "not must"
        ],
        "answer": "mustn't",
        "why": "Строгий запрет → mustn’t. А «don’t have to» — это «не обязан», совсем другой смысл.",
        "hint": "Тут строгий запрет «нельзя», ищи модальный глагол с отрицанием -n't; а вот «don't have to» означало бы «не обязан» — это другое."
      },
      {
        "type": "gap",
        "q": "I really enjoy ___ to music in the evening. <i style=\"opacity:.6\">(listen)</i>",
        "model": "listening",
        "accept": [
          "listening"
        ],
        "hint": "После глагола enjoy второй глагол всегда надевает окончание -ing 🎶"
      },
      {
        "type": "choice",
        "q": "You look tired. You ___ go to bed earlier. (совет)",
        "opts": [
          "should",
          "must to",
          "will to",
          "have"
        ],
        "answer": "should",
        "why": "Дружеский совет → should + базовая форма. Мягко и по-человечески 🙂",
        "hint": "Для дружеского совета бери лёгкий модальный глагол, после которого идёт чистый глагол без «to»."
      },
      {
        "type": "order",
        "hintRu": "Скажи по-английски: «Я остался дома, потому что устал».",
        "answer": "i stayed home because i was tired",
        "accept": [
          "i stayed home because i was tired",
          "because i was tired i stayed home"
        ],
        "hint": "Оба действия в прошедшем времени, а причину присоедини союзом из двух слов — он стоит перед самой причиной 😊"
      },
      {
        "type": "choice",
        "q": "How ___ money do you have? (несчётное)",
        "opts": [
          "much",
          "many",
          "a few",
          "little"
        ],
        "answer": "much",
        "why": "money нельзя сосчитать → How much. «many» — для того, что считается (apples, people).",
        "hint": "Деньги — несчётное, поэтому выбирай слово, которое спрашивает о количестве у того, что нельзя сосчитать."
      },
      {
        "type": "gap",
        "q": "He isn't tall ___ to reach the top shelf. <i style=\"opacity:.6\">(достаточно)</i>",
        "model": "enough",
        "accept": [
          "enough"
        ],
        "hint": "Это слово «достаточно» в английском встаёт сразу ПОСЛЕ прилагательного, а не перед ним."
      },
      {
        "type": "choice",
        "q": "There are only ___ people here today. (немного, счётное)",
        "opts": [
          "a few",
          "a little",
          "much",
          "any"
        ],
        "answer": "a few",
        "why": "people можно сосчитать → a few. «a little» бережём для несчётного: a little water.",
        "hint": "People можно посчитать, значит нужно слово для «немного» со счётными существительными."
      },
      {
        "type": "trRE",
        "ru": "Если завтра пойдёт дождь, я останусь дома.",
        "model": "If it rains tomorrow, I will stay home.",
        "accept": [
          "if it rains tomorrow i will stay home",
          "if it rains tomorrow i will stay at home",
          "if it rains tomorrow ill stay home",
          "if it rains tomorrow ill stay at home",
          "if it rains i will stay home",
          "if it rains i will stay at home",
          "if it rains ill stay home",
          "tomorrow if it rains i will stay home"
        ],
        "hint": "Это первый кондишн: после «если» ставь Present Simple, а в главной части — будущее с одним вспомогательным глаголом 🌧️"
      },
      {
        "type": "choice",
        "q": "I'm not sure, but it ___ rain later. (возможно)",
        "opts": [
          "might",
          "will",
          "must",
          "can"
        ],
        "answer": "might",
        "why": "Неуверенность, «возможно» → might + базовая форма. «will» — это уверенность, а ты ведь не уверен(а).",
        "hint": "Тут не уверенность, а возможность «может быть» — выбери модальный глагол неуверенного предположения."
      },
      {
        "type": "match",
        "pairs": [
          [
            "🏊",
            "swimming"
          ],
          [
            "🍳",
            "cooking"
          ],
          [
            "📖",
            "reading"
          ],
          [
            "🎧",
            "listening"
          ],
          [
            "🏃",
            "running"
          ]
        ],
        "hint": "Все слова-действия оканчиваются на -ing; просто соедини каждую картинку с её занятием 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я хочу выучить английский язык.",
        "model": "I want to learn English.",
        "accept": [
          "i want to learn english",
          "i want to study english",
          "i want to learn the english language",
          "i want to learn english language",
          "i wanna learn english"
        ],
        "hint": "После глагола «хочу» в английском идёт частица to и сам глагол в начальной форме."
      },
      {
        "type": "gap",
        "q": "Last summer we ___ to Spain for two weeks. <i style=\"opacity:.6\">(go)</i>",
        "model": "went",
        "accept": [
          "went"
        ],
        "hint": "Прошлым летом — это Past Simple, а глагол go неправильный, вспомни его особую вторую форму ✈️"
      },
      {
        "type": "choice",
        "q": "A doctor is a person ___ helps sick people.",
        "opts": [
          "who",
          "which",
          "where",
          "what"
        ],
        "answer": "who",
        "why": "Речь о человеке → who. «which» — для вещей, «where» — для мест.",
        "hint": "Доктор — это человек, а для людей выбираем особое относительное слово (не «which»)."
      },
      {
        "type": "trER",
        "en": "I used to live in a small village.",
        "model": "Раньше я жил в маленькой деревне.",
        "accept": [
          "раньше я жил в маленькой деревне",
          "раньше я жила в маленькой деревне",
          "я раньше жил в маленькой деревне",
          "я раньше жила в маленькой деревне",
          "раньше я жил в небольшой деревне",
          "раньше я жила в небольшой деревне",
          "раньше я жил в маленьком селе",
          "раньше я жил в маленькой деревушке"
        ],
        "hint": "«used to» рассказывает о привычке в прошлом, которой сейчас уже нет — передай это ощущением «когда-то, а теперь не так»."
      },
      {
        "type": "order",
        "hintRu": "Скажи по-английски: «Пожалуйста, выключи свет».",
        "answer": "please turn off the lights",
        "accept": [
          "please turn off the lights",
          "turn off the lights please",
          "please turn the lights off",
          "turn the lights off please"
        ],
        "hint": "Начни с вежливого слова, а «выключи» — это глагол с маленькой частицей-направлением (фразовый глагол) 💡"
      },
      {
        "type": "gap",
        "q": "I have already ___ this film twice. <i style=\"opacity:.6\">(see)</i>",
        "model": "seen",
        "accept": [
          "seen"
        ],
        "hint": "Со словом already это Present Perfect, значит нужна третья форма глагола see."
      },
      {
        "type": "trRE",
        "ru": "Эта книга интереснее, чем та.",
        "model": "This book is more interesting than that one.",
        "accept": [
          "this book is more interesting than that one",
          "this book is more interesting than that",
          "this book is more interesting than that book",
          "this book is more interesting than the other one"
        ],
        "hint": "Прилагательное длинное, поэтому сравнивай через слово «более» по-английски плюс союз сравнения после него."
      },
      {
        "type": "trER",
        "en": "I'm going to call you tomorrow.",
        "model": "Я позвоню тебе завтра.",
        "accept": [
          "я позвоню тебе завтра",
          "я тебе позвоню завтра",
          "завтра я позвоню тебе",
          "завтра я тебе позвоню",
          "я тебе завтра позвоню",
          "я собираюсь позвонить тебе завтра",
          "я позвоню вам завтра",
          "завтра я вам позвоню"
        ],
        "hint": "Конструкция «be going to» — это план или намерение, переведи её будущим временем 🙂"
      },
      {
        "type": "describe",
        "img": "img/a2/day-04.jpg",
        "prompt": "Опиши картинку: кто это, где она находится и что делает? Напиши 2–3 предложения. Используй Present Continuous (she is …-ing).",
        "minWords": 10,
        "keywords": [
          "woman",
          "cooking",
          "kitchen",
          "soup",
          "food",
          "vegetables",
          "pot",
          "spoon",
          "smiling",
          "happy",
          "stirring",
          "making",
          "tomatoes",
          "beans"
        ],
        "model": "This is a woman in her kitchen. She is cooking soup and stirring it with a spoon. She looks happy while she is making dinner.",
        "hint": "Опиши «прямо сейчас»: подлежащее + is + глагол с -ing, и добавь, кто это и где она находится ✨"
      },
      {
        "type": "choice",
        "q": "The bag looks heavy. — Don't worry, I ___ carry it for you.",
        "opts": [
          "will",
          "am going to",
          "was going to",
          "going to"
        ],
        "answer": "will",
        "why": "Спонтанное предложение помочь → will: I'll carry it. going to — это про заранее готовый план. 💪",
        "hint": "Ты решаешь помочь прямо сейчас, увидев тяжёлую сумку — форма мгновенного решения. 🙂"
      },
      {
        "type": "choice",
        "q": "I ___ my old car last week. <i style=\"opacity:.6\">(sell)</i>",
        "opts": [
          "sold",
          "have sold",
          "selled",
          "sell"
        ],
        "answer": "sold",
        "why": "Есть «когда» (last week) → Past Simple: sell → sold. С last week Present Perfect нельзя. 🚗",
        "hint": "«Last week» — конкретное время в прошлом, значит простое прошедшее, а не Present Perfect. 🙂"
      },
      {
        "type": "choice",
        "q": "I have known Anna ___ we were at school together.",
        "opts": [
          "since",
          "for",
          "from",
          "during"
        ],
        "answer": "since",
        "why": "since + точка отсчёта (даже целое предложение «когда мы были в школе»). for — для длины периода. 🧒",
        "hint": "После пропуска — момент начала, а не длина; выбери предлог точки отсчёта. 🙂"
      },
      {
        "type": "choice",
        "q": "Where's Dad? — He ___ to the shop.",
        "opts": [
          "has gone",
          "has been",
          "have gone",
          "is gone"
        ],
        "answer": "has gone",
        "why": "«Где папа?» — его нет → has gone (ушёл и там). has been значило бы «сходил и вернулся». 🏪",
        "hint": "Раз спрашивают «где он?», значит человек ушёл и ещё не вернулся — своя третья форма для go. 🙂"
      },
      {
        "type": "choice",
        "q": "My sister sings really ___ .",
        "opts": [
          "well",
          "good",
          "best",
          "gooder"
        ],
        "answer": "well",
        "why": "Как она поёт? → наречие well, не good. 🎤",
        "hint": "Описываем, КАК она поёт — нужно наречие, особая форма от good. 🙂"
      },
      {
        "type": "choice",
        "q": "The Nile is ___ river in the world.",
        "opts": [
          "the longest",
          "the most long",
          "longest",
          "the longer"
        ],
        "answer": "the longest",
        "why": "Самая длинная река → превосходная короткого слова: the longest. 🏞️",
        "hint": "Самая-самая из короткого прилагательного — окончание -est и артикль the. 🙂"
      },
      {
        "type": "choice",
        "q": "___ you finish your report yesterday?",
        "opts": [
          "Did",
          "Have",
          "Do",
          "Were"
        ],
        "answer": "Did",
        "why": "Вопрос о вчера со смысловым глаголом → Did you finish…? (yesterday = прошлое). 📝",
        "hint": "«Yesterday» + обычный глагол в вопросе — впереди нужен вспомогательный глагол прошедшего времени. 🙂"
      },
      {
        "type": "gap",
        "q": "See you ___ Monday! <i style=\"opacity:.6\">(предлог)</i>",
        "accept": [
          "on"
        ],
        "model": "on",
        "why": "Дни недели идут с on: on Monday. 🗓️",
        "hint": "Перед днём недели ставим предлог, отвечающий на «в какой день». 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я готовил ужин, когда ты пришёл.",
        "accept": [
          "i was cooking dinner when you arrived",
          "i was cooking dinner when you came",
          "i was making dinner when you arrived",
          "i was making dinner when you came",
          "i was cooking dinner when you got home",
          "i was preparing dinner when you arrived"
        ],
        "model": "I was cooking dinner when you arrived.",
        "why": "Длинное действие шло (was cooking), короткое прервало (arrived) → Past Continuous + when + Past Simple. 🍲",
        "hint": "Первое действие тянулось — was + -ing; второе, после «когда», короткое — простое прошедшее. 🙂"
      },
      {
        "type": "trER",
        "en": "Have you ever been to London?",
        "accept": [
          "ты когда-нибудь был в лондоне",
          "ты когда-нибудь была в лондоне",
          "ты бывал в лондоне",
          "ты бывала в лондоне",
          "ты когда-нибудь бывал в лондоне",
          "ты когда-нибудь бывала в лондоне",
          "бывал ли ты в лондоне",
          "ты был когда-нибудь в лондоне"
        ],
        "model": "Ты когда-нибудь был в Лондоне?",
        "why": "Have you ever been…? — вопрос об опыте за всю жизнь; по-русски «Ты когда-нибудь был…». ✈️",
        "hint": "«ever» = «когда-нибудь», а been to — «был в»; получается вопрос об опыте всей жизни. 🙂"
      },
      {
        "type": "order",
        "answer": "we are meeting our friends on saturday",
        "accept": [
          "we are meeting our friends on saturday",
          "on saturday we are meeting our friends"
        ],
        "hintRu": "Собери: «Мы встречаемся с друзьями в субботу.»",
        "why": "Договорённость → Present Continuous для будущего: We are meeting … on Saturday. 🗓️",
        "hint": "Запланированная встреча — форма be + глагол с -ing, а «в субботу» = on Saturday. 🙂"
      },
      {
        "type": "match",
        "q": "Соедини связку и её значение.",
        "pairs": [
          [
            "then",
            "потом"
          ],
          [
            "after",
            "после"
          ],
          [
            "before",
            "перед"
          ],
          [
            "because",
            "потому что"
          ],
          [
            "so",
            "поэтому"
          ]
        ],
        "why": "Связки рассказа: then (потом), after (после), before (перед), because (потому что), so (поэтому).",
        "hint": "Каждая английская связка — это одно русское слово по смыслу; вспомни рассказ по порядку. 🙂"
      },
      {
        "type": "describe",
        "img": "img/a2/day-24.jpg",
        "prompt": "Это рынок 🥔 Сколько тут овощей? Опиши 2–3 предложения словами количества: a lot of, too many, a few, some.",
        "keywords": [
          "potatoes",
          "vegetables",
          "market",
          "basket",
          "baskets",
          "many",
          "much",
          "lot",
          "few",
          "some",
          "food",
          "fresh",
          "orange",
          "sweet",
          "enough",
          "too",
          "buy"
        ],
        "minWords": 8,
        "model": "There are a lot of sweet potatoes at the market. There are too many to count, and only a few baskets are left. I would like to buy some.",
        "why": "Считаем количество: a lot of / too many для счётного, a few — немного, some — сколько-то. 🥔",
        "hint": "Опиши количество овощей словами a lot of, too many, a few, some — их тут много! 🙂"
      }
    ]
  }
};;

/* ===== helpers ===== */
