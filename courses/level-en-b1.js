/* English B1 — level config + 30-day plan (COURSE) + weekly exams (EXAMS).
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'B1',
  course:'en-b1',
  pkey:'langbook-b1-progress',
  preview:true,
  finalNote:'Это твоя победа 💛 Полный уровень English B1 — позади. Дальше открывается B2. Горжусь тобой!'
};

const COURSE = [
  {wn:"01", wt:"Прошлое во всех слоях — нарративные и перфектные времена", days:[
    {n:1,t:"Прошлое до прошлого",p:"Past Perfect: had + 3-я форма (had done)."},
    {n:2,t:"Что было раньше",p:"Контраст Past Perfect / Past Simple; before / after / by the…"},
    {n:3,t:"Рассказ во времени",p:"Нарративные времена вместе: Past Simple + Past Continuous +…"},
    {n:4,t:"Делаю уже сколько-то",p:"Present Perfect Continuous: have/has been + -ing…"},
    {n:5,t:"Процесс или результат",p:"PPC."},
    {n:6,t:"Раньше я",p:"would для повторявшихся действий в прошлом; used to (глубже)."},
    {n:7,t:"Повторение №1",p:"повторение + тест."}
  ]},
  {wn:"02", wt:"Если бы… и «был сделан» — гипотезы и пассив", days:[
    {n:8,t:"Если бы сейчас",p:"Second conditional: if + Past Simple, … would + базовая…"},
    {n:9,t:"Если бы тогда",p:"Third conditional: if + had done, … would have + 3-я форма…"},
    {n:10,t:"Жаль, что…",p:"wish + Past (о настоящем), wish + Past Perfect (о прошлом)…"},
    {n:11,t:"Это делают",p:"Пассив: am/is/are + 3-я форма; was/were + 3-я форма."},
    {n:12,t:"Будет сделано",p:"Пассив: has been done / will be done / can be done + агент by."},
    {n:13,t:"Лучше бы",p:"had better (+ базовая); would rather (+ базовая) … than."},
    {n:14,t:"Повторение №2",p:"повторение + тест."}
  ]},
  {wn:"03", wt:"Чужая речь, дедукция и «который» — reported speech, modals, relatives", days:[
    {n:15,t:"Он сказал, что…",p:"Reported statements: сдвиг времён (is→was, did→had done)…"},
    {n:16,t:"Он спросил, где…",p:"Reported questions: порядок как в утверждении, без вспомог.…"},
    {n:17,t:"Он попросил",p:"told/asked + кого + to do; reporting verbs suggest /…"},
    {n:18,t:"Наверное",p:"Modals of deduction: must / might / could / can't + be…"},
    {n:19,t:"Который",p:"Defining relatives: who / which / that / whose / where…"},
    {n:20,t:"…, что важно",p:"Non-defining relatives: запятые; who/which (не that); which…"},
    {n:21,t:"Повторение №3",p:"повторение + тест."}
  ]},
  {wn:"04", wt:"Оттенки и связность — финиш B1", days:[
    {n:22,t:"Ведь правда?",p:"Question tags: + утверждение → − хвост (…, isn't it?)…"},
    {n:23,t:"Завтра в это время",p:"Future Continuous: will be + -ing + обзор будущего."},
    {n:24,t:"Делать или делание",p:"Глагольные модели: stop to do ≠ stop doing…"},
    {n:25,t:"Так… что",p:"so + прил., such + (a) сущ. … that; too / enough."},
    {n:26,t:"Чем больше",p:"the more… the more; much / far / a bit + сравнительная степень."},
    {n:27,t:"Включи это",p:"Phrasal verbs: разделяемые vs неразделяемые; позиция местоимения."},
    {n:28,t:"Я привык",p:"be / get used to + -ing / сущ. (привыкание)."},
    {n:29,t:"Несмотря на",p:"Связки: although / however; despite / in spite of; because of…"},
    {n:30,t:"Моя история, версия B1",p:"финальный проект."}
  ]}
];

/* ===== weekly checkpoint exams (content) ===== */
const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя B1 позади — и какая мощная! Мы прошли все слои прошлого: Past Perfect (had + 3-я форма) — событие раньше другого прошлого, его контраст с Past Simple (before / after / by the time), нарративные времена вместе, Present Perfect Continuous (have been + -ing) и его разницу с Present Perfect, а ещё used to и would. На этот раз заданий больше: заглянем и в вопрос Had you…?, и в разницу for / since, и в то, как would рисует повторявшееся прошлое, и в глаголы-состояния без -ing. Проверим всё спокойно. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Past Perfect: <b>had + 3-я форма</b> — то, что случилось раньше другого прошлого",
      "Контраст: had done (раньше) ↔ did (потом); before / after / by the time / already",
      "Нарратив: фон <b>was/were + -ing</b> · факт <b>did</b> · предыстория <b>had done</b>",
      "Present Perfect Continuous: <b>have/has been + -ing</b> — длительность вплоть до сейчас",
      "PPC <b>been doing</b> (процесс) ↔ Present Perfect <b>done</b> (результат / сколько раз)",
      "<b>used to</b> + базовая (привычка/состояние) · <b>would</b> — только повторявшиеся действия",
      "Вопрос и отрицание пред-прошлого: <b>Had you…?</b> · <b>hadn't done</b>",
      "Время процесса: <b>for</b> + отрезок · <b>since</b> + точка отсчёта; глаголы-состояния (know, have, like) — <b>без -ing</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "When I got to the station, the train ___ already ___ . <i style=\"opacity:.6\">(leave)</i>",
        "opts": [
          "had / left",
          "has / left",
          "had / leave",
          "did / leave"
        ],
        "answer": "had / left",
        "why": "Поезд ушёл РАНЬШЕ, чем я пришёл, — для более раннего события в прошлом нужен Past Perfect: had + 3-я форма (leave → left). 💛",
        "hint": "Два прошлых события: одно случилось раньше другого. Для самого раннего бери had + третью форму глагола leave, а не Past Simple. 🚂"
      },
      {
        "type": "choice",
        "q": "By the time we arrived, the film ___ .",
        "opts": [
          "had started",
          "started",
          "has started",
          "was starting"
        ],
        "answer": "had started",
        "why": "«By the time we arrived» задаёт точку в прошлом; фильм начался ещё раньше → Past Perfect: had started.",
        "hint": "«К тому моменту, как мы пришли» — а действие случилось до этого момента. Самое раннее событие просит had + 3-я форма. 🎬"
      },
      {
        "type": "choice",
        "q": "I ___ dinner when the lights suddenly ___ out. <i style=\"opacity:.6\">(cook / go)</i>",
        "opts": [
          "was cooking / went",
          "cooked / went",
          "was cooking / were going",
          "had cooked / went"
        ],
        "answer": "was cooking / went",
        "why": "Длинный фон — Past Continuous (was cooking), короткое событие, которое его прервало, — Past Simple (went out).",
        "hint": "Готовка тянулась (фон), а свет погас вдруг (короткое действие). Фон — was + -ing, короткое — простая вторая форма. 💡"
      },
      {
        "type": "choice",
        "q": "Her eyes are red because she ___ . <i style=\"opacity:.6\">(cry)</i>",
        "opts": [
          "has been crying",
          "has cried",
          "is crying",
          "had been crying"
        ],
        "answer": "has been crying",
        "why": "Виден свежий след процесса, который только что шёл, → Present Perfect Continuous: has been + crying.",
        "hint": "Действие длилось вплоть до сейчас и оставило результат (красные глаза) — это have/has been + -ing. 😢"
      },
      {
        "type": "choice",
        "q": "I ___ this book twice — it's brilliant. <i style=\"opacity:.6\">(read)</i>",
        "opts": [
          "have read",
          "have been reading",
          "have been read",
          "am reading"
        ],
        "answer": "have read",
        "why": "«Twice» (сколько раз) — это результат, а не процесс, → Present Perfect: have read. Continuous тут не нужен.",
        "hint": "Когда важно СКОЛЬКО раз или что готово, бери have + 3-я форма (результат), а не been + -ing (процесс). 📖"
      },
      {
        "type": "choice",
        "q": "I ___ have long hair, but now it's short. <i style=\"opacity:.6\">(привычка-состояние)</i>",
        "opts": [
          "used to",
          "would",
          "was used to",
          "use to"
        ],
        "answer": "used to",
        "why": "Это состояние (иметь длинные волосы), а не повторявшееся действие. Для состояний в прошлом — used to; «would» тут нельзя.",
        "hint": "«Иметь длинные волосы» — это состояние, а не действие, которое повторяли. Для состояний в прошлом подходит только одна из форм. 💇"
      },
      {
        "type": "gap",
        "q": "She told me she ___ already eaten. <i style=\"opacity:.6\">(have)</i>",
        "accept": [
          "had"
        ],
        "model": "had",
        "why": "Раньше другого прошлого → Past Perfect: had + eaten. Сокращённое 'd = had.",
        "hint": "«Уже поела» — раньше момента рассказа. Поставь have в форму прошедшего: получится had + eaten. 🍽️"
      },
      {
        "type": "gap",
        "q": "It ___ been raining since this morning. <i style=\"opacity:.6\">(have / has)</i>",
        "accept": [
          "has"
        ],
        "model": "has",
        "why": "It → has. Дождь длится вплоть до сейчас, since this morning → Present Perfect Continuous: has been raining.",
        "hint": "Подлежащее «it» берёт ту же форму вспомогательного, что he/she; а длительность до сейчас — это has been + -ing. 🌧️"
      },
      {
        "type": "gap",
        "q": "I ___ to smoke, but I gave up years ago. <i style=\"opacity:.6\">(привычка в прошлом)</i>",
        "accept": [
          "used"
        ],
        "model": "used",
        "why": "Привычка в прошлом, которой больше нет → used to + базовая форма (used to smoke).",
        "hint": "«Раньше курил, а теперь нет» — это конструкция из двух слов про прошлую привычку; первое слово похоже на use с окончанием. 🚭"
      },
      {
        "type": "trRE",
        "ru": "Когда мы пришли, фильм уже начался.",
        "accept": [
          "when we arrived the film had already started",
          "when we came the film had already started",
          "the film had already started when we arrived",
          "when we arrived the film had already begun",
          "when we got there the film had already started"
        ],
        "model": "When we arrived, the film had already started.",
        "hint": "Русское «начался» стоит в одном прошедшем, но в английском это событие раньше прихода — нужен had + 3-я форма. «Уже» = already между had и глаголом. 🎬"
      },
      {
        "type": "trRE",
        "ru": "Я учу английский уже три года.",
        "accept": [
          "i have been learning english for three years",
          "ive been learning english for three years",
          "i have been studying english for three years",
          "ive been studying english for three years",
          "i have been learning english for 3 years"
        ],
        "model": "I have been learning English for three years.",
        "hint": "Русское настоящее «учу… уже три года» в английском — это процесс, тянущийся до сейчас: have been + -ing. «Уже три года» = for three years. 📚"
      },
      {
        "type": "trER",
        "en": "I had never seen such a beautiful sunset before.",
        "accept": [
          "я никогда не видел такого красивого заката раньше",
          "я никогда не видела такого красивого заката раньше",
          "раньше я никогда не видел такого красивого заката",
          "раньше я никогда не видела такого красивого заката",
          "я никогда раньше не видел такого красивого заката",
          "я никогда раньше не видела такого красивого заката"
        ],
        "model": "Я никогда раньше не видел такого красивого заката.",
        "hint": "had never seen — это «никогда раньше не видел» (до некого момента в прошлом). Переведи обычным русским прошедшим, добавив «раньше / до этого». 🌅"
      },
      {
        "type": "order",
        "answer": "she had left before i arrived",
        "accept": [
          "she had left before i arrived",
          "she had already left before i arrived"
        ],
        "hintRu": "Скажи по-английски: «Она ушла до того, как я пришёл.»",
        "hint": "Самое раннее действие (ушла) — had + 3-я форма, потом before, потом второе действие в Past Simple (arrived). 🚪"
      },
      {
        "type": "match",
        "q": "Соедини глагол с его третьей формой (V3).",
        "pairs": [
          [
            "break",
            "broken"
          ],
          [
            "speak",
            "spoken"
          ],
          [
            "drive",
            "driven"
          ],
          [
            "take",
            "taken"
          ],
          [
            "fly",
            "flown"
          ]
        ],
        "hint": "Соедини каждый глагол с его ТРЕТЬЕЙ формой (V3) — той, что идёт после had / have. break → …, fly → … 🙂"
      },
      {
        "type": "describe",
        "img": "img/b1/day-03.jpg",
        "prompt": "Представь, что это случилось вчера. Расскажи маленькую историю по картинке в прошедших временах: что происходило (was/were + -ing), что случилось (Past Simple) и что произошло ещё раньше (had + 3-я форма). 3–4 предложения.",
        "keywords": [
          "was",
          "were",
          "when",
          "while",
          "had",
          "suddenly",
          "then",
          "after",
          "before",
          "walking",
          "looking",
          "happened",
          "saw",
          "arrived",
          "started",
          "because"
        ],
        "minWords": 14,
        "model": "Yesterday it was raining and a man was walking home. He had forgotten his umbrella, so he got wet. When he finally arrived, he was very cold and tired.",
        "hint": "Смешай три слоя: фон (was/were + -ing), главное событие (Past Simple) и предысторию (had + 3-я форма). Свяжи их словами when / because / so. 🙂"
      },
      {
        "type": "choice",
        "q": "I was reading in bed ___ I heard a strange noise downstairs. <i style=\"opacity:.6\">(фон + короткое событие)</i>",
        "opts": [
          "when",
          "while",
          "during",
          "because"
        ],
        "answer": "when",
        "why": "Длинный фон — was reading, а короткое событие, которое его прерывает, вводится словом when. «while» ставят перед длинным действием, «during» — только перед существительным.",
        "hint": "Короткое событие в рассказе цепляют коротким союзом, а «while» приберегают для длинного, тянущегося действия. 🌙"
      },
      {
        "type": "choice",
        "q": "I ___ Daniel since we were at school together. <i style=\"opacity:.6\">(know)</i>",
        "opts": [
          "have known",
          "have been knowing",
          "knew",
          "know"
        ],
        "answer": "have known",
        "why": "know — глагол состояния, у него нет формы с -ing, поэтому «been knowing» невозможно. «since» тянет ниточку до сейчас → Present Perfect: have known.",
        "hint": "«Знаю с тех пор, как…» — это ниточка из прошлого в сейчас. А глагол know не любит -ing, так что процессная форма отпадает. 🙂"
      },
      {
        "type": "choice",
        "q": "When I was little, my grandmother ___ tell me a story every night. <i style=\"opacity:.6\">(повторялось много раз)</i>",
        "opts": [
          "would",
          "used",
          "will",
          "did use"
        ],
        "answer": "would",
        "why": "Повторявшееся действие в прошлом можно передать через would + базовая: would tell. «used» и «did use» без «to» — сломанные формы, а «will» тянет в настоящее/будущее.",
        "hint": "Действие повторялось из вечера в вечер в прошлом. Для таких повторов есть короткое слово, которое рисует привычную картину. 🌟"
      },
      {
        "type": "choice",
        "q": "___ you ever ___ sushi before you moved to Japan? <i style=\"opacity:.6\">(try)</i>",
        "opts": [
          "Had / tried",
          "Did / tried",
          "Have / tried",
          "Had / try"
        ],
        "answer": "Had / tried",
        "why": "Опыт ДО момента переезда (before you moved) → вопрос в Past Perfect: Had you tried…? После had — третья форма (tried). «Did you tried» и «Had you try» сломаны, а Present Perfect не дружит с завершённым «before you moved».",
        "hint": "«Пробовал ли ты… до того, как переехал» — опыт раньше прошлого момента. Вопрос строим через had + подлежащее + третья форма. 🍣"
      },
      {
        "type": "gap",
        "q": "We have been waiting for the bus ___ half past two. <i style=\"opacity:.6\">(момент отсчёта)</i>",
        "accept": [
          "since"
        ],
        "model": "since",
        "why": "«Half past two» — это точка на часах, момент начала. Точку отсчёта вводит since; for нужно для отрезка (for twenty minutes).",
        "hint": "Полтретьего — это не отрезок, а точка, с которой всё началось. Для точки отсчёта есть особый предлог. 🚌"
      },
      {
        "type": "trRE",
        "ru": "Я закончил работу до того, как он позвонил.",
        "accept": [
          "i had finished work before he called",
          "i had finished my work before he called",
          "i had finished the work before he called",
          "id finished work before he called",
          "id finished my work before he called",
          "i had finished work before he phoned",
          "i had finished work before he rang"
        ],
        "model": "I had finished my work before he called.",
        "hint": "Два прошлых события: работа закончилась РАНЬШЕ звонка. Более раннее — had + третья форма, потом before и второй глагол в простом прошедшем. ☎️"
      },
      {
        "type": "trER",
        "en": "There used to be an old cinema on this street.",
        "accept": [
          "раньше на этой улице был старый кинотеатр",
          "на этой улице раньше был старый кинотеатр",
          "когда-то на этой улице был старый кинотеатр",
          "раньше на этой улице был старенький кинотеатр"
        ],
        "model": "Раньше на этой улице был старый кинотеатр.",
        "hint": "used to be — про то, что было в прошлом, а сейчас этого нет. Передай обычным «раньше был…». 🎦"
      },
      {
        "type": "order",
        "answer": "she has been working here since june",
        "accept": [
          "she has been working here since june"
        ],
        "hintRu": "Скажи по-английски: «Она работает здесь с июня.»",
        "hint": "Действие тянется до сейчас → has been + -ing. «С июня» (точка отсчёта) вводится словом since. 🙂"
      },
      {
        "type": "match",
        "q": "Соедини глагол с его формой прошедшего времени (Past Simple, V2).",
        "pairs": [
          [
            "begin",
            "began"
          ],
          [
            "drink",
            "drank"
          ],
          [
            "ring",
            "rang"
          ],
          [
            "swim",
            "swam"
          ],
          [
            "catch",
            "caught"
          ]
        ],
        "hint": "Соедини каждый глагол со ВТОРОЙ формой (Past Simple) — той, что рассказывает о событии: begin → …, swim → … 🙂"
      },
      {
        "type": "describe",
        "img": "img/b1/day-06.jpg",
        "prompt": "Расскажи по картинке, как всё было раньше и что изменилось: используй used to и would (раньше я …, каждый день мы …). 3–4 предложения.",
        "keywords": [
          "used",
          "to",
          "would",
          "but",
          "now",
          "every",
          "when",
          "was",
          "were",
          "didn't",
          "before",
          "younger",
          "child",
          "children"
        ],
        "minWords": 14,
        "model": "When I was younger, I used to spend every summer in the countryside. We would get up early and play outside all day. I didn't use to worry about anything, but now life feels busier.",
        "hint": "Смешай две краски прошлого: used to — про состояния и привычки, would — про повторявшиеся действия. Заверши контрастом «but now…». 🙂"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Неделя гипотез и пассива — самая «русская» по ловушкам. Проверим: second conditional (if + Past, … would), third conditional (if + had done, … would have done), wish / if only, пассив в настоящем и прошлом (is/was done), пассив с has been / will be / can be done, а также had better и would rather. Пассив теперь пройдём во всех временах — has been done, will be done, must be done, — а в главной части условия попробуем would, could и might. Главное — одно русское «бы» превращается в would только в главной части. 80% — и откроется Неделя 3. 💛",
    "review": [
      "Second conditional: <b>if + Past Simple, … would + базовая</b> (нереальное настоящее)",
      "Third conditional: <b>if + had done, … would have + 3-я форма</b> (нереальное прошлое)",
      "Одно русское «бы» → <b>would только в главной</b> части, не после if",
      "wish + Past (о настоящем) · wish + Past Perfect (о прошлом)",
      "Пассив: <b>am/is/are + 3-я форма</b> · <b>was/were + 3-я форма</b>; не ронять <b>be</b>",
      "Пассив дальше: <b>has been done / will be done / can be done</b>; агент через <b>by</b>",
      "<b>had better</b> + базовая (без to) · <b>would rather</b> + базовая … than",
      "В главной части условия — <b>would / could / might</b>: уверенность и оттенки возможности"
    ],
    "q": [
      {
        "type": "choice",
        "q": "If I ___ rich, I ___ travel the world.",
        "opts": [
          "were / would",
          "was / will",
          "am / would",
          "were / will"
        ],
        "answer": "were / would",
        "why": "Нереальное настоящее: if + Past (were), … would + базовая (travel). После if — would не ставим.",
        "hint": "Это мечта о настоящем (я не богат). После if — прошедшее (were для всех лиц), а would живёт только во второй части. 🌍"
      },
      {
        "type": "choice",
        "q": "If she ___ harder, she ___ the exam. <i style=\"opacity:.6\">(study / pass)</i>",
        "opts": [
          "had studied / would have passed",
          "studied / would pass",
          "had studied / would passed",
          "would have studied / had passed"
        ],
        "answer": "had studied / would have passed",
        "why": "Нереальное прошлое: if + had + 3-я форма (had studied), … would have + 3-я форма (would have passed).",
        "hint": "Сожаление о прошлом (она не училась и не сдала). Формула: if + had done, … would have + 3-я форма. 📝"
      },
      {
        "type": "choice",
        "q": "I wish I ___ harder for the test. <i style=\"opacity:.6\">(о прошлом)</i>",
        "opts": [
          "had studied",
          "studied",
          "would study",
          "study"
        ],
        "answer": "had studied",
        "why": "Сожаление о ПРОШЛОМ → wish + Past Perfect: I wish I had studied.",
        "hint": "«Жаль, что я не…» о прошлом — после wish ставим had + 3-я форма, как в третьем conditional. 😔"
      },
      {
        "type": "gap",
        "q": "I wish I ___ taller. <i style=\"opacity:.6\">(be — о настоящем)</i>",
        "accept": [
          "were",
          "was"
        ],
        "model": "were",
        "why": "Сожаление о настоящем → wish + Past Simple; от be берём were для всех лиц (was — разговорно).",
        "hint": "«Жаль, что я невысокий» — это про сейчас, поэтому после wish идёт прошедшее. От глагола be в этом обороте лучше брать were. 📏"
      },
      {
        "type": "choice",
        "q": "English ___ in many countries.",
        "opts": [
          "is spoken",
          "speaks",
          "is speaking",
          "spoken"
        ],
        "answer": "is spoken",
        "why": "На английском говорят (кто — неважно) → пассив: is + 3-я форма (spoken). Не ронять be.",
        "hint": "«На языке говорят» — действие совершают над языком. Пассив = форма be (is) + третья форма глагола. 🗣️"
      },
      {
        "type": "choice",
        "q": "This house ___ in 1995. <i style=\"opacity:.6\">(build)</i>",
        "opts": [
          "was built",
          "was build",
          "built",
          "is built"
        ],
        "answer": "was built",
        "why": "Дом построили в прошлом → was + 3-я форма: was built (build → built).",
        "hint": "Дом не строит сам себя — это пассив в прошлом: was + третья форма глагола build. 🏠"
      },
      {
        "type": "choice",
        "q": "Don't worry — this problem ___ easily. <i style=\"opacity:.6\">(can / solve)</i>",
        "opts": [
          "can be solved",
          "can be solve",
          "can solved",
          "can solving"
        ],
        "answer": "can be solved",
        "why": "Модальный пассив: can + be + 3-я форма (solved).",
        "hint": "После модального can в пассиве всегда идёт be, а потом третья форма: can be + solved. 🧩"
      },
      {
        "type": "gap",
        "q": "The letter ___ written by Tom. <i style=\"opacity:.6\">(be — прошлое)</i>",
        "accept": [
          "was"
        ],
        "model": "was",
        "why": "Письмо написали → пассив прошлого: was + written. Агент — by Tom.",
        "hint": "Над письмом совершили действие — это пассив. Подставь форму be в прошедшем для «the letter». ✉️"
      },
      {
        "type": "gap",
        "q": "If you had asked me, I ___ have helped you. <i style=\"opacity:.6\">(нереальное прошлое)</i>",
        "accept": [
          "would"
        ],
        "model": "would",
        "why": "Главная часть третьего conditional: would have + 3-я форма (would have helped).",
        "hint": "В главной части после «если бы ты спросил» нужно would have + 3-я форма; вставь именно would. 🤝"
      },
      {
        "type": "trRE",
        "ru": "Если бы у меня было время, я бы тебе помог.",
        "accept": [
          "if i had time i would help you",
          "if i had time id help you",
          "if i had the time i would help you",
          "i would help you if i had time",
          "id help you if i had time"
        ],
        "model": "If I had time, I would help you.",
        "hint": "Русское «бы» стоит дважды, но в английском would — только во второй части. После if — простое прошедшее had. ⏳"
      },
      {
        "type": "trRE",
        "ru": "Этот мост построили в прошлом году.",
        "accept": [
          "this bridge was built last year",
          "the bridge was built last year",
          "this bridge was built a year ago"
        ],
        "model": "This bridge was built last year.",
        "hint": "Русское «построили» (кто — неважно) — это пассив: was + третья форма глагола build. Не теряй be. 🌉"
      },
      {
        "type": "trER",
        "en": "You'd better not be late.",
        "accept": [
          "тебе лучше не опаздывать",
          "лучше не опаздывай",
          "тебе лучше не опоздать",
          "вам лучше не опаздывать",
          "тебе бы лучше не опаздывать"
        ],
        "model": "Тебе лучше не опаздывать.",
        "hint": "had better ('d better) — это настойчивый совет «лучше бы…». Отрицание not идёт сразу после better. ⏰"
      },
      {
        "type": "order",
        "answer": "i would rather walk than take the bus",
        "accept": [
          "i would rather walk than take the bus",
          "id rather walk than take the bus"
        ],
        "hintRu": "Скажи по-английски: «Я лучше пойду пешком, чем поеду на автобусе.»",
        "hint": "would rather + базовая форма (walk), а сравнение присоединяем словом than + базовая (take). Без to! 🚶"
      },
      {
        "type": "match",
        "q": "Соедини глагол с его третьей формой (V3) для пассива.",
        "pairs": [
          [
            "write",
            "written"
          ],
          [
            "build",
            "built"
          ],
          [
            "make",
            "made"
          ],
          [
            "steal",
            "stolen"
          ],
          [
            "catch",
            "caught"
          ]
        ],
        "hint": "Соедини глагол с его третьей формой (V3) — именно она стоит в пассиве после be: is/was + … 🙂"
      },
      {
        "type": "describe",
        "img": "img/b1/day-11.jpg",
        "prompt": "Опиши, что показано на картинке, с помощью пассива: что обычно делается или было сделано здесь (is made / is sold / was built / are grown). 2–3 предложения.",
        "keywords": [
          "is",
          "are",
          "was",
          "were",
          "made",
          "built",
          "sold",
          "grown",
          "used",
          "produced",
          "prepared",
          "served",
          "by",
          "this",
          "place"
        ],
        "minWords": 10,
        "model": "In this place a lot of bread is made every day. The bread is sold to many shops, and everything is prepared by hand.",
        "hint": "Сделай акцент не на том, КТО делает, а на том, что делается: подбери be (is/are/was) + третью форму глагола. 🙂"
      },
      {
        "type": "choice",
        "q": "Look! The road ___ — it's smooth and clean now. <i style=\"opacity:.6\">(repair)</i>",
        "opts": [
          "has been repaired",
          "has repaired",
          "is repairing",
          "repaired"
        ],
        "answer": "has been repaired",
        "why": "Дорога сама себя не чинит — нужен пассив, а свежий результат «сейчас» просит Present Perfect: has been + repaired. «has repaired» и «repaired» делают дорогу деятелем — так нельзя.",
        "hint": "Над дорогой совершили действие, и результат виден сейчас. Пассив в перфекте: has been + третья форма. 🛣️"
      },
      {
        "type": "choice",
        "q": "Don't worry — your car ___ by tomorrow morning. <i style=\"opacity:.6\">(fix)</i>",
        "opts": [
          "will be fixed",
          "will fix",
          "will be fixing",
          "is fixed"
        ],
        "answer": "will be fixed",
        "why": "Машину починят (кто — неважно) в будущем → пассив будущего: will be + fixed. «will fix» делает машину деятелем, «is fixed» — это уже сейчас, а не к завтрашнему утру.",
        "hint": "Действие над машиной случится в будущем. Пассив будущего собирается так: will be + третья форма. 🚗"
      },
      {
        "type": "choice",
        "q": "If I had more time, I ___ help you with the garden. <i style=\"opacity:.6\">(было бы возможно)</i>",
        "opts": [
          "could",
          "can",
          "could have",
          "will"
        ],
        "answer": "could",
        "why": "Нереальное настоящее (if + had): в главной части — would / could / might. «could help» = «смог бы помочь». «could have» — это про прошлое, «can/will» ломают второй тип.",
        "hint": "Это мечта о настоящем. В главной части живут would / could / might; выбери оттенок «смог бы». 🌱"
      },
      {
        "type": "choice",
        "q": "We ___ leave now, or we'll miss the last train. <i style=\"opacity:.6\">(лучше сделать — настойчивый совет)</i>",
        "opts": [
          "had better",
          "had better to",
          "would rather to",
          "better had"
        ],
        "answer": "had better",
        "why": "Настойчивый совет → had better + базовая (без to): had better leave. «had better to» и «would rather to» лишние с to, а «better had» — перевёрнутый порядок.",
        "hint": "Совет с ноткой «иначе будет плохо» — это два слова, после которых глагол идёт без to. ⏱️"
      },
      {
        "type": "gap",
        "q": "This ancient vase must ___ handled very carefully. <i style=\"opacity:.6\">(be — модальный пассив)</i>",
        "accept": [
          "be"
        ],
        "model": "be",
        "why": "Модальный пассив: must + be + третья форма (handled). После модального всегда be, а не been.",
        "hint": "После модального глагола в пассиве стоит маленькое be, и только потом третья форма. 🏺"
      },
      {
        "type": "trRE",
        "ru": "Жаль, что я не позвонил ей вчера.",
        "accept": [
          "i wish i had called her yesterday",
          "i wish id called her yesterday",
          "i wish i had phoned her yesterday",
          "i wish id phoned her yesterday",
          "if only i had called her yesterday",
          "if only id called her yesterday"
        ],
        "model": "I wish I had called her yesterday.",
        "hint": "Сожаление о прошлом → wish + had + третья форма. И помни: русское «не позвонил» превращается в английское утвердительное had called. 📞"
      },
      {
        "type": "trER",
        "en": "The bridge will be finished by next summer.",
        "accept": [
          "мост достроят к следующему лету",
          "мост закончат к следующему лету",
          "мост завершат к следующему лету",
          "мост будет достроен к следующему лету",
          "мост будет закончен к следующему лету",
          "строительство моста закончат к следующему лету"
        ],
        "model": "Мост достроят к следующему лету.",
        "hint": "will be finished — пассив будущего: мост закончат/достроят (кто — неважно). Передай безличным «достроят / будет закончен». 🌉"
      },
      {
        "type": "order",
        "answer": "if i had a car i would drive to work",
        "accept": [
          "if i had a car i would drive to work",
          "if i had a car id drive to work"
        ],
        "hintRu": "Скажи по-английски: «Если бы у меня была машина, я бы ездил на работу.»",
        "hint": "Нереальное настоящее: после if — простое прошедшее (had a car), а would живёт только во второй части. 🚙"
      },
      {
        "type": "match",
        "q": "Соедини смысл с его грамматической формулой.",
        "pairs": [
          [
            "Нереальное настоящее",
            "if + Past, would"
          ],
          [
            "Нереальное прошлое",
            "if + had done, would have"
          ],
          [
            "Жаль о настоящем",
            "wish + Past"
          ],
          [
            "Жаль о прошлом",
            "wish + Past Perfect"
          ],
          [
            "Настойчивый совет",
            "had better + база"
          ]
        ],
        "hint": "Соедини русский смысл с английской формулой. Смотри на время: «сейчас» — Past, «о прошлом» — had done / Past Perfect. 🙂"
      },
      {
        "type": "describe",
        "img": "img/b1/day-08.jpg",
        "prompt": "Представь, что ты выиграл(а) большой приз. Расскажи по картинке, что бы ты сделал(а): используй second conditional (if I …, I would / could / might …). 2–3 предложения.",
        "keywords": [
          "if",
          "would",
          "could",
          "might",
          "won",
          "had",
          "were",
          "travel",
          "buy",
          "give",
          "help",
          "house",
          "world",
          "money"
        ],
        "minWords": 12,
        "model": "If I won a lot of money, I would travel around the world. I would buy a small house by the sea, and I might give some money to people who need it.",
        "hint": "Мечтай смело: после if — простое прошедшее (If I won…), а результат — would / could / might + базовая. 🙂"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Неделя чужой речи, дедукции и «который». Проверим: reported speech — сдвиг времён (is → was, will → would, have done → had done), say vs tell; reported questions (порядок как в утверждении, без вспомогательных, if / whether); told/asked + кого + to do и глаголы речи advise / suggest / promise / warn / remind; modals дедукции (must / might / could / can't be); defining и non-defining relative clauses (запятые, that vs which, which о всей мысли). 80% — и впереди финальная Неделя 4. 💛",
    "review": [
      "Reported speech: <b>сдвиг времён</b> is→was, do/does→did, did/have done→had done",
      "<b>tell + кому</b> (told me) · <b>say</b> без адресата (said that…)",
      "Reported questions: порядок как в утверждении, <b>без</b> do/does/did; <b>if / whether</b>",
      "Команды: <b>told / asked + кого + to do</b>",
      "Дедукция: <b>must</b> (наверняка) · <b>might / could</b> (возможно) · <b>can't</b> (точно нет) + be",
      "Defining relatives: <b>who / which / that / whose / where</b> — без запятых",
      "Non-defining: <b>запятые</b>; <b>which</b> (не that); which может про всё предложение",
      "Глаголы речи: <b>advise / suggest / promise / warn / remind</b> — у каждого своя модель"
    ],
    "q": [
      {
        "type": "choice",
        "q": "He said he ___ tired. <i style=\"opacity:.6\">(прямая речь: «I am tired»)</i>",
        "opts": [
          "was",
          "is",
          "has been",
          "will be"
        ],
        "answer": "was",
        "why": "Сдвиг времён: прямое is → was. Русское «устал» время не двигает, английское — двигает.",
        "hint": "Слова «He said» в прошлом тянут за собой и второй глагол: настоящее is превращается в прошедшее. 🙂"
      },
      {
        "type": "choice",
        "q": "She ___ me that she was busy.",
        "opts": [
          "told",
          "said",
          "says",
          "spoke"
        ],
        "answer": "told",
        "why": "Есть адресат (me) → tell: told me. Say без адресата (said that…). Русское «сказала мне» — ловушка.",
        "hint": "После глагола сразу стоит «me» (кому) — для этого нужен глагол tell, а не say. 🗣️"
      },
      {
        "type": "choice",
        "q": "She asked me where I ___ . <i style=\"opacity:.6\">(прямой вопрос: «Where do you live?»)</i>",
        "opts": [
          "lived",
          "do I live",
          "did I live",
          "live"
        ],
        "answer": "lived",
        "why": "В reported question порядок как в утверждении, без do/did: where I lived.",
        "hint": "В косвенном вопросе никаких do/does/did — слова идут как в обычном предложении, а время сдвигается. 🏡"
      },
      {
        "type": "choice",
        "q": "He asked me ___ I was coming to the party.",
        "opts": [
          "if",
          "that",
          "do",
          "what"
        ],
        "answer": "if",
        "why": "Косвенный да/нет-вопрос вводится через if или whether.",
        "hint": "Прямой вопрос был без вопросительного слова («Are you coming?»). Такой да/нет-вопрос в косвенной речи цепляют словом if. 🙂"
      },
      {
        "type": "choice",
        "q": "The teacher told us ___ quiet.",
        "opts": [
          "to be",
          "be",
          "being",
          "that be"
        ],
        "answer": "to be",
        "why": "Команда в косвенной речи: told + кого + to + базовая (to be quiet).",
        "hint": "После told us для приказа/просьбы идёт частица to + глагол: told us to … 🤫"
      },
      {
        "type": "choice",
        "q": "She isn't answering her phone. She ___ busy. <i style=\"opacity:.6\">(логичный вывод)</i>",
        "opts": [
          "must be",
          "can be",
          "should be",
          "would be"
        ],
        "answer": "must be",
        "why": "Уверенный логический вывод «наверняка» → must be. Здесь must = «наверняка», а не «должна».",
        "hint": "Ты почти уверен по фактам — нужен модальный «наверняка». Помни: тут must — это вывод, а не обязанность. 📵"
      },
      {
        "type": "choice",
        "q": "He ___ at home — his car isn't here. <i style=\"opacity:.6\">(точно нет)</i>",
        "opts": [
          "can't be",
          "mustn't be",
          "mightn't be",
          "shouldn't be"
        ],
        "answer": "can't be",
        "why": "Уверенность, что это НЕ так → can't be. Для отрицательной дедукции mustn't не используют.",
        "hint": "Ты уверен, что его там НЕТ. Для такого «точно не может быть» бери can't be, а не mustn't. 🚗"
      },
      {
        "type": "gap",
        "q": "That's the woman ___ helped me at the station. <i style=\"opacity:.6\">(человек, важная инфо)</i>",
        "accept": [
          "who",
          "that"
        ],
        "model": "who",
        "why": "О человеке, важная информация, без запятых → who (или that). Один русский «который» = who для людей.",
        "hint": "Речь о человеке и информация важная (определяет, о какой женщине речь). Для людей бери who (можно that), запятых нет. 🙂"
      },
      {
        "type": "choice",
        "q": "My car, ___ is over twenty years old, still works perfectly.",
        "opts": [
          "which",
          "that",
          "who",
          "what"
        ],
        "answer": "which",
        "why": "Non-defining (в запятых) о вещи → which; that здесь нельзя.",
        "hint": "Часть в запятых — это дополнительная, необязательная информация о машине. В таких вставках про вещь используют which, а не that. 🚙"
      },
      {
        "type": "gap",
        "q": "He said he ___ finished his work. <i style=\"opacity:.6\">(прямая речь: «I have finished»)</i>",
        "accept": [
          "had"
        ],
        "model": "had",
        "why": "Сдвиг: have/has done → had done. «I have finished» → he had finished.",
        "hint": "Present Perfect (have finished) в косвенной речи сдвигается на шаг назад — превращается в had + 3-я форма. ✅"
      },
      {
        "type": "trRE",
        "ru": "Он сказал, что устал.",
        "accept": [
          "he said he was tired",
          "he said that he was tired",
          "he told me he was tired",
          "he told me that he was tired"
        ],
        "model": "He said (that) he was tired.",
        "hint": "Русское «устал» остаётся настоящим-результатом, но в английском после «He said» настоящее сдвигается в прошедшее: is/am → was. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Она попросила меня закрыть окно.",
        "accept": [
          "she asked me to close the window",
          "she asked me to shut the window"
        ],
        "model": "She asked me to close the window.",
        "hint": "«Попросила меня сделать» = asked me + to + глагол. После asked me ставим to close. 🪟"
      },
      {
        "type": "trER",
        "en": "You've been working all day. You must be exhausted.",
        "accept": [
          "ты работал весь день наверное ты вымотался",
          "ты работал весь день ты наверное очень устал",
          "ты работала весь день ты наверное вымоталась",
          "ты работал весь день должно быть ты устал",
          "ты работала весь день должно быть ты устала",
          "ты весь день работал ты наверное устал",
          "ты весь день работала ты наверное устала"
        ],
        "model": "Ты работал весь день. Ты, наверное, вымотался.",
        "hint": "must be здесь — это уверенное предположение «наверное / должно быть», а не «должен». Передай его словами «наверное / должно быть». 😮‍💨"
      },
      {
        "type": "order",
        "answer": "she asked me where i lived",
        "accept": [
          "she asked me where i lived",
          "she asked where i lived"
        ],
        "hintRu": "Скажи по-английски: «Она спросила, где я живу.»",
        "hint": "В косвенном вопросе слова идут как в утверждении: where + I + lived, без do/did. Время сдвигается в прошедшее. 🙂"
      },
      {
        "type": "match",
        "q": "Соедини, для чего нужно каждое относительное слово.",
        "pairs": [
          [
            "👤 человек",
            "who"
          ],
          [
            "📦 вещь",
            "which"
          ],
          [
            "📍 место",
            "where"
          ],
          [
            "🔑 чей",
            "whose"
          ],
          [
            "⏰ время",
            "when"
          ]
        ],
        "hint": "Соедини, ДЛЯ ЧЕГО нужно каждое относительное слово: человек, вещь, место, принадлежность, время. 🙂"
      },
      {
        "type": "describe",
        "img": "img/b1/day-18.jpg",
        "prompt": "Посмотри на человека на картинке и сделай выводы: используй must / might / could / can't be (он, наверное, …; возможно, …; точно не …). 2–3 предложения.",
        "keywords": [
          "must",
          "might",
          "could",
          "can't",
          "be",
          "looks",
          "probably",
          "maybe",
          "tired",
          "happy",
          "busy",
          "hungry",
          "working",
          "he",
          "she"
        ],
        "minWords": 10,
        "model": "He must be very tired because he is sitting with his eyes closed. He might be a student, but he can't be at work, because he is at home.",
        "hint": "Делай логические выводы по уликам на картинке: уверен — must be, не уверен — might / could be, уверен, что нет — can't be. 🙂"
      },
      {
        "type": "choice",
        "q": "The doctor advised me ___ more water every day.",
        "opts": [
          "to drink",
          "drink",
          "drinking",
          "that drink"
        ],
        "answer": "to drink",
        "why": "advise + кого + to + базовая: advised me to drink. С дополнением (me) идёт инфинитив с to, а не голый глагол и не -ing.",
        "hint": "После «advised me» для совета-действия нужна частица to и глагол: advised me to … 💧"
      },
      {
        "type": "choice",
        "q": "He passed all his exams, ___ made his parents very proud.",
        "opts": [
          "which",
          "that",
          "what",
          "who"
        ],
        "answer": "which",
        "why": "Здесь which в запятой относится ко всей мысли (он сдал экзамены) — это комментарий. that после запятой в неограничительном обороте запрещён, «what» и «who» тут не подходят.",
        "hint": "Запятая + отсылка ко всей мысли «он сдал экзамены». Комментарий ко всему предложению вводят одним словом — и это не that. 🙂"
      },
      {
        "type": "gap",
        "q": "Прямая речь: «I will call you.» → He said he ___ call me. <i style=\"opacity:.6\">(will → ?)</i>",
        "accept": [
          "would"
        ],
        "model": "would",
        "why": "В пересказе время сдвигается на шаг назад: will → would. «He said he would call me.»",
        "hint": "После «He said» будущее тоже отступает на шаг: will превращается в свою прошедшую пару. 🗣️"
      },
      {
        "type": "gap",
        "q": "That's the man ___ dog barks all night. <i style=\"opacity:.6\">(принадлежность)</i>",
        "accept": [
          "whose"
        ],
        "model": "whose",
        "why": "Собака принадлежит мужчине (его собака) → относительное слово принадлежности whose: the man whose dog…",
        "hint": "Собака — ЕГО, речь о принадлежности. Для «чей / которого» есть отдельное относительное слово. 🐕"
      },
      {
        "type": "trRE",
        "ru": "Он спросил, во сколько начинается фильм.",
        "accept": [
          "he asked what time the film started",
          "he asked what time the film began",
          "he asked me what time the film started",
          "he asked me what time the film began",
          "he asked what time the movie started",
          "he asked at what time the film started"
        ],
        "model": "He asked what time the film started.",
        "hint": "Косвенный вопрос: порядок как в утверждении (the film started), без do/does. И время сдвигается на шаг назад: starts → started. 🎬"
      },
      {
        "type": "trER",
        "en": "My brother, who lives in Canada, is a doctor.",
        "accept": [
          "мой брат который живёт в канаде врач",
          "мой брат который живёт в канаде доктор",
          "мой брат работает врачом он живёт в канаде",
          "мой брат врач а живёт он в канаде",
          "мой брат который живёт в канаде работает врачом"
        ],
        "model": "Мой брат, который живёт в Канаде, — врач.",
        "hint": "Часть в запятых — добавочная информация о брате (who lives in Canada). Переведи спокойным «который живёт в Канаде». 🍁"
      },
      {
        "type": "order",
        "answer": "she said she had lost her keys",
        "accept": [
          "she said she had lost her keys",
          "she told me she had lost her keys"
        ],
        "hintRu": "Скажи по-английски: «Она сказала, что потеряла ключи.»",
        "hint": "Пересказ без адресата → say. А «потеряла» из «I have lost» сдвигается на шаг назад в had lost. 🔑"
      },
      {
        "type": "match",
        "q": "Соедини глагол речи с тем, что он вводит.",
        "pairs": [
          [
            "advise",
            "дать совет"
          ],
          [
            "suggest",
            "предложить идею"
          ],
          [
            "promise",
            "дать обещание"
          ],
          [
            "warn",
            "предупредить об опасности"
          ],
          [
            "remind",
            "напомнить о деле"
          ]
        ],
        "hint": "Соедини каждый глагол речи с его смыслом: одно про совет, другое про идею, третье про обещание… 🙂"
      },
      {
        "type": "describe",
        "img": "img/b1/day-19.jpg",
        "prompt": "Опиши, кто и что на картинке, с помощью относительных придаточных: the person who…, the thing which…, the place where… 3–4 предложения.",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "person",
          "man",
          "woman",
          "thing",
          "place",
          "building",
          "is",
          "are"
        ],
        "minWords": 14,
        "model": "This is the woman who works in the café near my house. The building which you can see behind her is very old. It's a place where people often meet their friends.",
        "hint": "Собери описания через относительные слова: о человеке — who, о вещи — which/that, о месте — where. 🙂"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен B1",
    "intro": "Это финал B1 — ты дошёл! 🏆 Последний экзамен по Неделе 4 и по всему уровню: question tags, Future Continuous, глагольные модели (stop to do ≠ stop doing, remember / forget, decide to), so / such и too / enough, продвинутые сравнения (the more… the more, much / far + сравнительная), phrasal verbs, be / get used to и связки (although / despite / because of). А ещё пробежимся по всему B1: Past Perfect, Present Perfect Continuous, conditionals и wish, пассив во всех временах, reported speech, дедукция must / might / can't, defining и non-defining relatives, used to и had better. Наберёшь 80% — и впереди сертификат B1 и большая дорога к B2! 💛",
    "review": [
      "Question tags: + утверждение → − хвост (…, <b>isn't it?</b>); «I am…, <b>aren't I?</b>»",
      "Future Continuous: <b>will be + -ing</b> (действие в процессе в будущем)",
      "Модели: <b>stop to do ≠ stop doing</b>; remember / forget / try + -ing / to",
      "<b>so</b> + прил. … that · <b>such</b> + (a) сущ. … that · <b>too</b> / прил.+<b>enough</b>",
      "Сравнения: <b>the more… the more</b>; <b>much / far / a bit</b> + сравнительная",
      "Phrasal verbs: turn <b>it</b> on (местоимение в середину); be / get <b>used to + -ing</b>",
      "Связки: although / however; <b>despite / in spite of</b> + сущ.; <b>because of</b> + сущ.",
      "Весь B1 разом: <b>Past Perfect · PPC · conditionals · wish · пассив · reported speech · relatives · дедукция</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "You're coming to the party, ___?",
        "opts": [
          "aren't you",
          "are you",
          "isn't it",
          "don't you"
        ],
        "answer": "aren't you",
        "why": "Утверждение положительное → хвост отрицательный, тот же вспомогательный: are → aren't you.",
        "hint": "Начало положительное и с are («You're» = you are), значит хвостик отрицательный с тем же глаголом. 🎉"
      },
      {
        "type": "choice",
        "q": "I'm late, ___?",
        "opts": [
          "aren't I",
          "amn't I",
          "am I",
          "isn't it"
        ],
        "answer": "aren't I",
        "why": "Особый случай: «I am…» в хвосте даёт aren't I (формы amn't в английском нет).",
        "hint": "У «I am» нестандартный хвост — английский избегает «amn't» и берёт форму с aren't. 🙂"
      },
      {
        "type": "choice",
        "q": "This time tomorrow I ___ on a beach. <i style=\"opacity:.6\">(lie)</i>",
        "opts": [
          "will be lying",
          "will lie",
          "am lying",
          "will lay"
        ],
        "answer": "will be lying",
        "why": "Действие В ПРОЦЕССЕ в конкретный момент будущего → will be + -ing (will be lying).",
        "hint": "«Завтра в это же время» — момент в будущем, и действие будет идти. Это will be + -ing. 🏖️"
      },
      {
        "type": "choice",
        "q": "Please remember ___ the door when you leave.",
        "opts": [
          "to lock",
          "locking",
          "lock",
          "locked"
        ],
        "answer": "to lock",
        "why": "remember to do — не забыть СДЕЛАТЬ (дело впереди). remember doing — помнить, что уже сделал.",
        "hint": "Это напоминание о деле, которое надо сделать при выходе. remember + to + глагол смотрит в будущее. 🔐"
      },
      {
        "type": "choice",
        "q": "It was ___ a good film that I watched it twice.",
        "opts": [
          "such",
          "so",
          "very",
          "too"
        ],
        "answer": "such",
        "why": "such + (a) + (прил.) + существительное: such a good film. (so — только перед прилагательным.)",
        "hint": "Дальше идёт «a good film» — существительное с артиклем. Перед такой группой ставят such, а не so. 🎬"
      },
      {
        "type": "choice",
        "q": "This coffee is ___ hot to drink.",
        "opts": [
          "too",
          "enough",
          "so",
          "very"
        ],
        "answer": "too",
        "why": "too + прилагательное = «слишком» (с плохим результатом): too hot to drink.",
        "hint": "Кофе настолько горячий, что пить нельзя — это «слишком». Перед прилагательным с таким смыслом ставят too. ☕"
      },
      {
        "type": "choice",
        "q": "He isn't old ___ to drive.",
        "opts": [
          "enough",
          "too",
          "so",
          "much"
        ],
        "answer": "enough",
        "why": "enough после прилагательного: old enough. Русское «достаточно взрослый» — ловушка в порядке слов.",
        "hint": "Слово «достаточно» в английском встаёт ПОСЛЕ прилагательного: old + … + to drive. 🚗"
      },
      {
        "type": "choice",
        "q": "The more you practise, the ___ you get.",
        "opts": [
          "better",
          "best",
          "more better",
          "gooder"
        ],
        "answer": "better",
        "why": "Конструкция the more… the more…: вторая часть тоже сравнительная — the better (от good).",
        "hint": "«Чем больше…, тем …»: во второй части тоже сравнительная степень. От good сравнительная — особая форма. 📈"
      },
      {
        "type": "choice",
        "q": "I don't know this word. I'll look ___ in the dictionary.",
        "opts": [
          "it up",
          "up it",
          "it",
          "up"
        ],
        "answer": "it up",
        "why": "Разделяемый phrasal verb: местоимение идёт В СЕРЕДИНУ — look it up (не look up it).",
        "hint": "С местоимением «it» разделяемый фразовый глагол разрывается: местоимение встаёт между look и up. 📖"
      },
      {
        "type": "choice",
        "q": "I've lived here for years, so I'm used to ___ early. <i style=\"opacity:.6\">(get up)</i>",
        "opts": [
          "getting up",
          "get up",
          "got up",
          "to get up"
        ],
        "answer": "getting up",
        "why": "be used to + -ing = «привык к» (привычка сейчас). Не путать с used to do (прошлая привычка).",
        "hint": "«Привык вставать рано» — be used to + …-ing. Здесь to — это предлог, после него глагол с -ing. ⏰"
      },
      {
        "type": "choice",
        "q": "___ the rain, we went for a walk.",
        "opts": [
          "Despite",
          "Although",
          "However",
          "Because"
        ],
        "answer": "Despite",
        "why": "despite + существительное (the rain). Although нужно целое предложение (although it rained).",
        "hint": "Дальше идёт существительное «the rain», а не целое предложение. Перед существительным ставим despite / in spite of. 🌧️"
      },
      {
        "type": "choice",
        "q": "The flight was delayed ___ the bad weather.",
        "opts": [
          "because of",
          "because",
          "although",
          "despite"
        ],
        "answer": "because of",
        "why": "because of + существительное (the bad weather). because нужно целое предложение.",
        "hint": "После пропуска — существительное «the bad weather», поэтому причину вводим через because of (из двух слов). ✈️"
      },
      {
        "type": "gap",
        "q": "When I arrived, everyone ___ already left. <i style=\"opacity:.6\">(have → ?)</i>",
        "accept": [
          "had"
        ],
        "model": "had",
        "why": "Событие раньше прихода → Past Perfect: had + left.",
        "hint": "Все ушли РАНЬШЕ, чем я пришёл, — для более раннего прошлого нужен had + 3-я форма. 🚪"
      },
      {
        "type": "gap",
        "q": "She ___ been studying English for three hours. <i style=\"opacity:.6\">(have / has)</i>",
        "accept": [
          "has"
        ],
        "model": "has",
        "why": "She → has. Длительность вплоть до сейчас → has been + -ing.",
        "hint": "Подлежащее «she» берёт has; процесс, идущий до сейчас, — это has been + studying. 📚"
      },
      {
        "type": "trRE",
        "ru": "Если бы я был тобой, я бы извинился.",
        "accept": [
          "if i were you i would apologise",
          "if i were you i would apologize",
          "if i were you id apologise",
          "if i were you id apologize",
          "if i were you i would say sorry"
        ],
        "model": "If I were you, I would apologise.",
        "hint": "Совет-гипотеза: «если бы я был тобой» = If I were you (were для всех лиц), а «я бы извинился» = I would + базовая. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Эту песню написали сто лет назад.",
        "accept": [
          "this song was written a hundred years ago",
          "this song was written 100 years ago",
          "the song was written a hundred years ago",
          "this song was written one hundred years ago"
        ],
        "model": "This song was written a hundred years ago.",
        "hint": "Русское «написали» (кто — неважно) — это пассив прошлого: was + третья форма write (written). 🎵"
      },
      {
        "type": "trER",
        "en": "She said she had finished her homework.",
        "accept": [
          "она сказала что сделала домашнюю работу",
          "она сказала что закончила домашнюю работу",
          "она сказала что доделала домашнюю работу",
          "она сказала что сделала домашку",
          "она сказала что выполнила домашнюю работу",
          "она сказала что сделала уроки",
          "она сказала что закончила уроки"
        ],
        "model": "Она сказала, что закончила домашнюю работу.",
        "hint": "had finished — это сдвинутый Present Perfect; на русском просто «закончила / сделала». Передай обычным прошедшим. 📕"
      },
      {
        "type": "order",
        "answer": "this time tomorrow we will be flying to paris",
        "accept": [
          "this time tomorrow we will be flying to paris",
          "this time tomorrow well be flying to paris"
        ],
        "hintRu": "Скажи по-английски: «Завтра в это время мы будем лететь в Париж.»",
        "hint": "Момент в будущем + действие в процессе: this time tomorrow + we will be + flying. ✈️"
      },
      {
        "type": "match",
        "q": "Соедини фразовый глагол с его значением.",
        "pairs": [
          [
            "turn on",
            "включить"
          ],
          [
            "look for",
            "искать"
          ],
          [
            "give up",
            "сдаться"
          ],
          [
            "put off",
            "отложить"
          ],
          [
            "find out",
            "узнать"
          ]
        ],
        "hint": "Соедини фразовый глагол с его русским значением — помни, что смысл часто не равен сумме слов. 🙂"
      },
      {
        "type": "describe",
        "img": "img/b1/day-23.jpg",
        "prompt": "Представь, что будет завтра в это же время. Опиши по картинке планы через Future Continuous (this time tomorrow … will be …-ing). 2–3 предложения.",
        "keywords": [
          "will",
          "be",
          "working",
          "travelling",
          "flying",
          "relaxing",
          "this",
          "time",
          "tomorrow",
          "doing",
          "sitting",
          "meeting",
          "going"
        ],
        "minWords": 10,
        "model": "This time tomorrow I will be travelling to the mountains. My friends will be waiting for me there, and we will be hiking all day.",
        "hint": "Опиши будущее в процессе: подлежащее + will be + глагол с -ing. Начни с «This time tomorrow…». 🙂"
      },
      {
        "type": "choice",
        "q": "That ___ be John at the door — he's on holiday in Spain right now. <i style=\"opacity:.6\">(точно не он)</i>",
        "opts": [
          "can't",
          "must",
          "might",
          "should"
        ],
        "answer": "can't",
        "why": "Ты уверен, что это НЕ Джон (он в Испании) → can't be. Для отрицательной дедукции берут can't; must/might/should тут допускают «может быть, он», а улики это исключают.",
        "hint": "Джон далеко, значит это точно не он. Уверенное «не может быть» передают через can't be. 🚪"
      },
      {
        "type": "choice",
        "q": "If you ___ me earlier, I could have helped you. <i style=\"opacity:.6\">(нереальное прошлое)</i>",
        "opts": [
          "had asked",
          "asked",
          "would ask",
          "have asked"
        ],
        "answer": "had asked",
        "why": "Нереальное прошлое: if + had + третья форма (had asked), а в главной — could have helped. «asked» — это второй тип, «would ask» в if-части не ставят.",
        "hint": "Главная часть «could have helped» смотрит в прошлое, значит и после if нужен слой ещё раньше: had + третья форма. 🤝"
      },
      {
        "type": "gap",
        "q": "I wasn't sure ___ the shop was still open, so I phoned first. <i style=\"opacity:.6\">(да/нет-вопрос)</i>",
        "accept": [
          "whether",
          "if"
        ],
        "model": "whether",
        "why": "Встроенный да/нет-вопрос вводят через whether или if: not sure whether the shop was open. «that» здесь не подходит.",
        "hint": "Внутри спрятан вопрос «открыт ли магазин?». Такой да/нет-вопрос присоединяют словом whether или его коротким двойником. 🏪"
      },
      {
        "type": "gap",
        "q": "These documents must ___ signed before Friday. <i style=\"opacity:.6\">(be — модальный пассив)</i>",
        "accept": [
          "be"
        ],
        "model": "be",
        "why": "Модальный пассив: must + be + третья форма (signed). После модального стоит be, а не been.",
        "hint": "После модального в пассиве идёт маленькое be, а следом — третья форма глагола. ✍️"
      },
      {
        "type": "gap",
        "q": "Tom fixed the car himself, ___ he? <i style=\"opacity:.6\">(хвостик-вопрос)</i>",
        "accept": [
          "didn't"
        ],
        "model": "didn't",
        "why": "Утверждение в Past Simple (fixed) → хвостик отрицательный со вспомогательным did: didn't he? Плюс спереди — минус в хвосте.",
        "hint": "Начало положительное и в простом прошедшем — значит хвостик отрицательный и зовёт вспомогательный did. 🔧"
      },
      {
        "type": "trRE",
        "ru": "Жаль, что мы не купили билеты заранее.",
        "accept": [
          "i wish we had bought the tickets in advance",
          "i wish wed bought the tickets in advance",
          "i wish we had bought tickets in advance",
          "if only we had bought the tickets in advance",
          "i wish we had booked the tickets in advance",
          "i wish wed booked the tickets in advance"
        ],
        "model": "I wish we had bought the tickets in advance.",
        "hint": "Сожаление о прошлом → wish + had + третья форма. Русское «не купили» станет английским утвердительным had bought. 🎟️"
      },
      {
        "type": "trRE",
        "ru": "Учитель велел нам не шуметь.",
        "accept": [
          "the teacher told us not to make noise",
          "the teacher told us not to be noisy",
          "the teacher asked us not to make noise",
          "the teacher told us to be quiet",
          "the teacher told us not to make a noise",
          "the teacher asked us to be quiet"
        ],
        "model": "The teacher told us not to make noise.",
        "hint": "Команда в косвенной речи: told + кого + to do. Отрицание «не шуметь» — это not to перед глаголом. 🤫"
      },
      {
        "type": "trER",
        "en": "My best friend, who I've known for years, is moving abroad.",
        "accept": [
          "мой лучший друг которого я знаю много лет уезжает за границу",
          "моя лучшая подруга которую я знаю много лет уезжает за границу",
          "мой лучший друг с которым я знаком много лет уезжает за границу",
          "мой лучший друг которого я знаю уже много лет уезжает за границу",
          "моя лучшая подруга которую я знаю уже много лет уезжает за границу"
        ],
        "model": "Мой лучший друг, которого я знаю много лет, уезжает за границу.",
        "hint": "Часть в запятых (who I've known for years) — добавочная: «которого я знаю много лет». А is moving здесь — про ближайшее будущее. ✈️"
      },
      {
        "type": "trER",
        "en": "I didn't use to like coffee, but now I love it.",
        "accept": [
          "раньше я не любил кофе а теперь обожаю его",
          "раньше я не любила кофе а теперь обожаю его",
          "раньше мне не нравился кофе но теперь я его люблю",
          "раньше я не любил кофе но сейчас люблю",
          "раньше я не любила кофе но сейчас люблю",
          "раньше мне не нравился кофе а сейчас нравится"
        ],
        "model": "Раньше я не любил кофе, а теперь обожаю его.",
        "hint": "didn't use to — про прошлую привычку, которой больше нет. Передай через «раньше не…, а теперь…». ☕"
      },
      {
        "type": "order",
        "answer": "you had better see a doctor soon",
        "accept": [
          "you had better see a doctor soon",
          "youd better see a doctor soon"
        ],
        "hintRu": "Скажи по-английски: «Тебе лучше поскорее сходить к врачу.»",
        "hint": "Настойчивый совет → had better + базовая форма, без to: had better see. ⚕️"
      },
      {
        "type": "order",
        "answer": "it was getting dark when we finally arrived home",
        "accept": [
          "it was getting dark when we finally arrived home"
        ],
        "hintRu": "Скажи по-английски: «Уже темнело, когда мы наконец добрались домой.»",
        "hint": "Длинный фон — was getting dark (Past Continuous), а короткое событие — arrived, и связывает их when. 🌆"
      },
      {
        "type": "match",
        "q": "Соедини прилагательное с его сравнительной степенью.",
        "pairs": [
          [
            "good",
            "better"
          ],
          [
            "bad",
            "worse"
          ],
          [
            "far",
            "further"
          ],
          [
            "little",
            "less"
          ],
          [
            "many",
            "more"
          ]
        ],
        "hint": "Соедини прилагательное с его сравнительной формой — здесь все степени особые, не на -er: good → …, bad → … 🙂"
      },
      {
        "type": "describe",
        "img": "img/b1/day-29.jpg",
        "prompt": "Опиши ситуацию на картинке и свяжи мысли: используй although или however, оборот because of и хотя бы одно сравнение (…er than / more … than). 3–4 предложения.",
        "keywords": [
          "although",
          "however",
          "because",
          "of",
          "despite",
          "more",
          "than",
          "better",
          "worse",
          "but",
          "so",
          "much"
        ],
        "minWords": 16,
        "model": "Although the weather was bad, the market was still busy. Because of the rain, most people stayed under the roof. The fruit here looks fresher than in the supermarket, however the prices are a bit higher.",
        "hint": "Свяжи предложения: контраст — although / however, причина — because of + существительное, и добавь одно сравнение с than. 🙂"
      }
    ]
  }
};;

/* ===== helpers ===== */
