/* ЗЕРКАЛО · MIRROR — English B1 content (days 1–30, level B1).
   Same "Day" schema as A1/A2 (see docs/CONTENT-MODEL.md). Global object name `DAYS`
   so the B1 renderer (en-b1.html) reuses the shared engine unchanged.
   Built from COURSE-PLAN-B1.md by parallel authoring agents, then assembled + validated. */
const DAYS = {
  "1": {
    "day": 1,
    "week": "01",
    "level": "B1",
    "themeRu": "Прошлое до прошлого",
    "themeEn": "Past Perfect",
    "intro": "Привет! Это первая страница уровня <b>B1</b> — и открываем мы её тонкой, но очень полезной вещью. На A2 ты уже умеешь рассказывать о прошлом: <b>I went, I saw, I cooked</b>. А теперь представь, что у прошлого есть своё прошлое: два события случились вчера, но одно — <b>раньше</b> другого. По-русски мы обходимся одним прошедшим («когда я пришёл, он <u>ушёл</u>»), и слушатель сам достраивает, кто был первым. По-английски у более раннего события есть отдельная форма — <b>Past Perfect</b>: <b>had + третья форма</b> (had done, had left, had gone). Это как стрелка, что отматывает время ещё на шаг назад. Давай разложим её по полочкам.",
    "introAudio": "Привет! Это первая страница уровня B1, и открываем мы её тонкой, но очень полезной вещью. На A2 ты уже умеешь рассказывать о прошлом: I went, I saw, I cooked. А теперь представь, что у прошлого есть своё прошлое: два события случились вчера, но одно раньше другого. По-русски мы обходимся одним прошедшим — когда я пришёл, он ушёл, и слушатель сам достраивает, кто был первым. По-английски у более раннего события есть отдельная форма — Past Perfect: had плюс третья форма. had done, had left, had gone. Это как стрелка, что отматывает время ещё на шаг назад. Давай разложим её по полочкам.",
    "goals": [
      "понимать идею «прошлое до прошлого»: одно событие случилось раньше другого в прошлом",
      "строить форму Past Perfect: had + третья форма глагола (had done, had left, had seen)",
      "ставить более раннее событие в Past Perfect там, где по-русски всё в одном прошедшем",
      "слышать и говорить редукцию had → 'd: I'd finished, she'd gone"
    ],
    "learned": [
      "Понял(а) идею «прошлое до прошлого»: одно событие случилось раньше другого в прошлом",
      "Построил(а) форму Past Perfect: had + третья форма глагола (had done, had left, had seen)",
      "Поставил(а) более раннее событие в Past Perfect там, где по-русски всё в одном прошедшем",
      "Услышал(а) и произнёс(ла) редукцию had → 'd: I'd finished, she'd gone"
    ],
    "review": {
      "intro": "Сначала — короткая разминка по самому хрупкому из A2. Present Perfect (have + 3-я форма) и сами третьи формы нам сегодня нужны вдвойне: Past Perfect берёт ту же третью форму, только с had. Прогреем её.",
      "introAudio": "Сначала короткая разминка по самому хрупкому из A2. Present Perfect, то есть have плюс третья форма, и сами третьи формы нам сегодня нужны вдвойне: Past Perfect берёт ту же третью форму, только с had. Прогреем её.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни Present Perfect — опыт «у меня уже есть».",
          "q": "«Я уже видел этот фильм» (важен опыт, не когда) —",
          "opts": [
            "I already saw this film",
            "I have already seen this film",
            "I had already seen this film"
          ],
          "answer": 1,
          "explain": "Опыт к настоящему моменту → Present Perfect: have + <b>seen</b>. (had seen — это уже сегодняшнее, отложим на минуту.)"
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши третью форму (past participle). Она же пойдёт в Past Perfect.",
          "q": "Третья форма глагола leave (покидать, уходить)?",
          "accept": [
            "left"
          ],
          "placeholder": "leave → ..."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу в Present Perfect.",
          "q": "Собери: «Она закончила работу» (результат сейчас)",
          "want": "She has finished her work",
          "answer": "She has finished her work"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · форма",
        "title": "Шаг назад во времени — <em>had + 3-я форма</em>",
        "paras": [
          "Past Perfect показывает событие, которое произошло <b>раньше</b> другого прошлого. Форма одна на всех — никаких has/have по лицам: <b>had + третья форма</b> (та самая, что и в Present Perfect). I <b>had finished</b>, she <b>had gone</b>, they <b>had left</b>.",
          "Сравни два этажа времени. Present Perfect (have done) смотрит из <u>сейчас</u> назад. Past Perfect (had done) смотрит из <u>прошлого момента</u> ещё дальше назад — это «пред-прошлое».",
          "В разговоре had почти всегда сжимается до <b>'d</b>: <b>I'd finished</b>, <b>she'd gone</b>. На письме можно и полностью, и сокращённо."
        ],
        "audio": "Past Perfect показывает событие, которое произошло раньше другого прошлого. Форма одна на всех: had плюс третья форма. I had finished, she had gone, they had left. Present Perfect, have done, смотрит из сейчас назад. Past Perfect, had done, смотрит из прошлого момента ещё дальше назад. В разговоре had сжимается до 'd: I'd finished, she'd gone.",
        "table": {
          "rows": [
            [
              "I / you / we / they / he / she / it",
              "had + 3-я форма (одна форма на всех)"
            ],
            [
              "Present Perfect: have/has done",
              "из «сейчас» назад"
            ],
            [
              "Past Perfect: had done",
              "из прошлого момента ещё дальше назад"
            ],
            [
              "сокращённо в речи",
              "I'd · you'd · she'd · they'd"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Поезд уже ушёл (к тому моменту, как я пришёл).",
            "en": "The train <b>had</b> already <b>left</b>.",
            "gloss": "leave → left",
            "say": "The train had already left."
          },
          {
            "ru": "Я закончил работу до обеда.",
            "en": "I <b>had finished</b> the work before lunch.",
            "gloss": "finish → finished",
            "say": "I had finished the work before lunch."
          },
          {
            "ru": "Они уже уехали, когда мы позвонили.",
            "en": "They <b>had</b> already <b>gone</b> when we called.",
            "gloss": "go → gone",
            "say": "They had already gone when we called."
          }
        ],
        "mistakes": [
          {
            "wrong": "I had finish the work",
            "right": "I had <b>finished</b> the work",
            "why": "после had — третья форма, а не базовая: finish → finished"
          },
          {
            "wrong": "She has gone before I arrived",
            "right": "She <b>had</b> gone before I arrived",
            "why": "оба события в прошлом → раннее в Past Perfect (had), не has"
          }
        ],
        "mnemonic": "⏪ had + 3-я форма = шаг назад от прошлого: одна форма на всех лиц.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму более раннего события.",
            "q": "«Поезд уже ушёл, когда я добежал до станции». Какая форма для «ушёл»?",
            "opts": [
              "the train left",
              "the train had left",
              "the train has left"
            ],
            "answer": 1,
            "explain": "Уход поезда — раньше, чем я добежал → Past Perfect: <b>had left</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> вспомни форму Past Perfect.",
            "q": "Past Perfect строится как —",
            "opts": [
              "have/has + 3-я форма",
              "had + 3-я форма",
              "was/were + -ing"
            ],
            "answer": 1,
            "explain": "Только <b>had</b> + третья форма, одна форма на всех лиц."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери Past Perfect с already.",
            "q": "Собери: «Она уже ушла» (к тому моменту)",
            "want": "She had already left",
            "answer": "She had already left"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши форму. finish → ? Можно сокращённо I'd.",
            "q": "Я уже закончил.",
            "accept": [
              "i had already finished",
              "i'd already finished"
            ],
            "placeholder": "I had already ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · когда применять",
        "title": "Кто был первым — <em>before, after, by the time, when</em>",
        "paras": [
          "Past Perfect нужен, когда в одной мысли два прошлых события и важно показать, что одно было <b>раньше</b>. Раннее — в Past Perfect (had done), позднее — в Past Simple (did).",
          "Сигналы-подсказки: <b>by the time</b> (к тому времени, как), <b>before</b> / <b>after</b>, <b>already</b>, <b>just</b>, <b>when</b>. Особенно любит Past Perfect оборот <b>by the time</b>: «By the time we arrived, the film <b>had started</b>».",
          "Логика простая: сначала ставишь «точку отсчёта» в прошлом (I arrived, we called), а Past Perfect добавляет то, что случилось <u>до</u> этой точки."
        ],
        "audio": "Past Perfect нужен, когда в одной мысли два прошлых события и важно показать, что одно было раньше. Раннее — в Past Perfect, had done; позднее — в Past Simple, did. Сигналы: by the time, before, after, already, just, when. By the time we arrived, the film had started. Сначала ставишь точку отсчёта в прошлом, а Past Perfect добавляет то, что было до неё.",
        "table": {
          "rows": [
            [
              "By the time I came, she had left.",
              "К моему приходу она уже ушла."
            ],
            [
              "He had eaten before we arrived.",
              "Он поел до нашего прихода."
            ],
            [
              "When the show started, we had found seats.",
              "К началу мы уже нашли места."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "К тому времени, как мы приехали, фильм уже начался.",
            "en": "By the time we arrived, the film <b>had started</b>.",
            "gloss": "start → started (раньше нашего приезда)",
            "say": "By the time we arrived, the film had started."
          },
          {
            "ru": "Я узнал город, потому что бывал здесь раньше.",
            "en": "I recognised the city because I <b>had been</b> there before.",
            "gloss": "be → been",
            "say": "I recognised the city because I had been there before."
          },
          {
            "ru": "Она не была голодна — она только что поела.",
            "en": "She wasn't hungry — she <b>had</b> just <b>eaten</b>.",
            "gloss": "eat → eaten",
            "say": "She wasn't hungry, she had just eaten."
          }
        ],
        "mistakes": [
          {
            "wrong": "By the time we arrived, the film started",
            "right": "By the time we arrived, the film <b>had started</b>",
            "why": "фильм начался ДО нашего приезда → раннее событие в Past Perfect"
          }
        ],
        "mnemonic": "🎯 Точка в прошлом + что было ДО неё (had done). «By the time…» почти всегда зовёт had.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму для более раннего события.",
            "q": "When I got home, my brother ___ dinner.",
            "opts": [
              "already cooked",
              "had already cooked",
              "has already cooked"
            ],
            "answer": 1,
            "explain": "Брат приготовил ужин ДО моего прихода → <b>had already cooked</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение с by the time.",
            "q": "Собери: «К тому времени, как он позвонил, я уже ушёл»",
            "want": "By the time he called I had already left",
            "answer": "By the time he called I had already left"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. recognise = узнать; be → been.",
            "q": "Я узнал место, потому что бывал там раньше.",
            "accept": [
              "i recognised the place because i had been there before",
              "i recognized the place because i had been there before",
              "i recognised the place because i'd been there before",
              "i recognized the place because i'd been there before"
            ],
            "placeholder": "I recognised the place because I had ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Одно русское прошедшее → два английских этажа",
        "paras": [
          "Вот где русский мешает сильнее всего. По-русски «Когда я пришёл, он ушёл» — оба глагола в одном прошедшем времени, и порядок мы понимаем из контекста. По-английски нужно <u>решить</u>, что было раньше, и одеть это в Past Perfect.",
          "<b>When I arrived, he left.</b> = я пришёл, а потом (при мне) он ушёл — две точки подряд. <b>When I arrived, he <u>had</u> left.</b> = к моему приходу его уже не было, он ушёл <u>раньше</u>. Разные ситуации — одна русская фраза!",
          "Поэтому, переводя с русского, всегда спрашивай себя: эти два прошлых события шли по очереди — или одно случилось ДО другого? Если «до» — раннее идёт в had + 3-я форма."
        ],
        "audio": "Вот где русский мешает сильнее всего. По-русски «Когда я пришёл, он ушёл» — оба глагола в одном прошедшем, порядок понимаем из контекста. По-английски нужно решить, что было раньше. When I arrived, he left — я пришёл, а потом при мне он ушёл. When I arrived, he had left — к моему приходу его уже не было, он ушёл раньше. Одна русская фраза, две разные ситуации. Спрашивай себя: события шли по очереди или одно до другого?",
        "table": {
          "rows": [
            [
              "When I arrived, he left.",
              "Я пришёл — и потом он ушёл (по очереди)"
            ],
            [
              "When I arrived, he had left.",
              "К моему приходу он уже ушёл (раньше)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Когда я открыл дверь, гости уже ушли.",
            "en": "When I opened the door, the guests <b>had</b> already <b>gone</b>.",
            "gloss": "ушли РАНЬШЕ → had gone",
            "say": "When I opened the door, the guests had already gone."
          },
          {
            "ru": "Когда я открыл дверь, гости ушли (на моих глазах).",
            "en": "When I opened the door, the guests <b>left</b>.",
            "gloss": "по очереди → Past Simple",
            "say": "When I opened the door, the guests left."
          }
        ],
        "mistakes": [
          {
            "wrong": "When I came home, everybody went to bed",
            "right": "When I came home, everybody <b>had</b> gone to bed",
            "why": "все легли ДО моего прихода → раннее событие = had gone"
          },
          {
            "wrong": "I knew the answer because I read about it",
            "right": "I knew the answer because I <b>had</b> read about it",
            "why": "прочитал РАНЬШЕ, чем узнал → Past Perfect"
          }
        ],
        "mnemonic": "🪜 Одно русское «прошло» — два английских этажа: спроси «по очереди или ДО?».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> к моему приходу его уже не было.",
            "q": "«Когда я пришёл, он уже ушёл (раньше)» —",
            "opts": [
              "When I arrived, he left",
              "When I arrived, he had left",
              "When I arrived, he has left"
            ],
            "answer": 1,
            "explain": "Раньше моего прихода → <b>had left</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери: к приходу гости уже разошлись.",
            "q": "Собери: «Когда я вернулся, все уже разошлись»",
            "want": "When I came back everyone had already gone",
            "answer": "When I came back everyone had already gone"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух с лёгким 'd. eat → eaten.",
            "target": "She wasn't hungry because she had eaten.",
            "sub": "Она не была голодна, потому что уже поела.",
            "want": "had"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · вопрос и отрицание",
        "title": "<em>hadn't done</em> и вопрос <em>Had you…?</em>",
        "paras": [
          "Отрицание — добавляем not к had: <b>hadn't</b> (had not). <b>I hadn't seen</b> her before that day. = До того дня я её не видел.",
          "Вопрос — выносим had вперёд: <b>Had you finished</b> before they came in? Короткие ответы повторяют had: <b>Yes, I had. / No, I hadn't.</b> — точь-в-точь как have/has, только в прошлом.",
          "В беглой речи had в вопросе тоже редуцируется и звучит слабо — ловишь не «хэд», а быстрый /(h)əd/. А в утверждении это вообще 'd: <b>I'd never been there before.</b>"
        ],
        "audio": "Отрицание: добавляем not к had — hadn't. I hadn't seen her before that day. Вопрос: had вперёд — Had you finished before they came in? Короткие ответы: Yes, I had. No, I hadn't. В беглой речи had звучит слабо, а в утверждении сжимается до 'd: I'd never been there before.",
        "table": {
          "rows": [
            [
              "Had you finished?",
              "Ты (к тому моменту) закончил?"
            ],
            [
              "Yes, I had. / No, I hadn't.",
              "Да / Нет (короткий ответ)"
            ],
            [
              "I hadn't seen it before.",
              "Раньше я этого не видел."
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я раньше никогда не пробовал суши.",
            "en": "I <b>had never tried</b> sushi before.",
            "gloss": "try → tried",
            "say": "I had never tried sushi before."
          },
          {
            "ru": "Ты уже слышал новость до встречи?",
            "en": "<b>Had</b> you <b>heard</b> the news before the meeting?",
            "gloss": "hear → heard",
            "say": "Had you heard the news before the meeting?"
          },
          {
            "ru": "Она не сдала экзамен, потому что не подготовилась.",
            "en": "She didn't pass because she <b>hadn't prepared</b>.",
            "gloss": "prepare → prepared",
            "say": "She didn't pass because she hadn't prepared."
          }
        ],
        "mistakes": [
          {
            "wrong": "I didn't had seen it",
            "right": "I <b>hadn't</b> seen it",
            "why": "отрицание Past Perfect — hadn't + 3-я форма, без did"
          },
          {
            "wrong": "Did you had finished?",
            "right": "<b>Had</b> you finished?",
            "why": "вопрос — выносим had вперёд, did не нужен"
          }
        ],
        "mnemonic": "❓ Вопрос: Had you done…? Отрицание: hadn't done. Did тут лишний.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери отрицание Past Perfect.",
            "q": "«До того дня я её не видел» —",
            "opts": [
              "I didn't saw her before that day",
              "I hadn't seen her before that day",
              "I haven't seen her before that day"
            ],
            "answer": 1,
            "explain": "Отрицание пред-прошлого: <b>hadn't</b> + seen."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши вопрос Past Perfect. hear → heard.",
            "q": "Ты слышал новость до встречи?",
            "accept": [
              "had you heard the news before the meeting"
            ],
            "placeholder": "Had you ... before the meeting?"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух с never. try → tried.",
            "target": "I had never tried sushi before.",
            "sub": "Я раньше никогда не пробовал суши.",
            "want": "had"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Маша опаздывает на встречу друзей. Слушай, как Past Perfect показывает, что случилось ДО её прихода. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "Sorry I'm late! Has the meeting started?",
          "ru": "Простите за опоздание! Встреча началась?",
          "words": [
            [
              "late",
              "поздно / опоздавший"
            ],
            [
              "started",
              "началась (start)"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "By the time you called, it had already finished.",
          "ru": "К тому моменту, как ты позвонила, она уже закончилась.",
          "words": [
            [
              "by the time",
              "к тому времени, как"
            ],
            [
              "had finished",
              "уже закончилась (раньше)"
            ]
          ]
        },
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "Oh no. Had everyone gone home?",
          "ru": "О нет. Все уже разошлись по домам?",
          "words": [
            [
              "gone",
              "ушли (go, 3-я форма)"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Most of them. But I had saved you some notes.",
          "ru": "Почти все. Но я сохранил для тебя записи.",
          "words": [
            [
              "saved",
              "сохранил (save)"
            ],
            [
              "notes",
              "записи, заметки"
            ]
          ]
        },
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "You're a lifesaver. I'd never missed a meeting before!",
          "ru": "Ты спаситель. Я раньше никогда не пропускала встречи!",
          "words": [
            [
              "lifesaver",
              "спаситель (букв. «спасатель»)"
            ],
            [
              "missed",
              "пропустил(а) (miss)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова и третьи формы дня — то, из чего строится Past Perfect. Повтори вслух пары «глагол → 3-я форма».",
      "items": [
        {
          "en": "had left",
          "ru": "уже ушёл (leave → left)",
          "ex": "The bus had left."
        },
        {
          "en": "had gone",
          "ru": "уже уехал/ушёл (go → gone)",
          "ex": "They had gone home."
        },
        {
          "en": "had finished",
          "ru": "уже закончил (finish)",
          "ex": "I had finished by six."
        },
        {
          "en": "had eaten",
          "ru": "уже поел (eat → eaten)",
          "ex": "She had eaten before us."
        },
        {
          "en": "had seen",
          "ru": "уже видел (see → seen)",
          "ex": "I had seen it before."
        },
        {
          "en": "had been",
          "ru": "уже бывал (be → been)",
          "ex": "We had been there once."
        },
        {
          "en": "by the time",
          "ru": "к тому времени, как",
          "ex": "By the time I came, it was over."
        },
        {
          "en": "already",
          "ru": "уже",
          "ex": "He had already left."
        },
        {
          "en": "before",
          "ru": "до того, как; раньше",
          "ex": "She had met him before."
        },
        {
          "en": "just",
          "ru": "только что",
          "ex": "The film had just started."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай маленькую историю. Заметь, как каждое «had + 3-я форма» отматывает время на шаг назад от главных событий.",
      "title": "An empty house",
      "sentences": [
        "When Anna got home, the house was strangely quiet.",
        "Her family had gone out without telling her.",
        "She realised she had forgotten her phone at work.",
        "By the time she found it, the shops had closed.",
        "She hadn't eaten since the morning.",
        "Luckily, her brother had left some soup on the stove.",
        "He had also written a short note on the table.",
        "By midnight everyone had come back, tired but happy."
      ],
      "translation": "Когда Анна пришла домой, в доме стояла странная тишина. Её родные ушли, не предупредив её. Она поняла, что забыла телефон на работе. К тому времени, как она его нашла, магазины уже закрылись. Она ничего не ела с самого утра. К счастью, брат оставил на плите немного супа. Ещё он написал короткую записку на столе. К полуночи все вернулись — усталые, но довольные."
    },
    "drag": {
      "intro": "Соедини английскую форму (had + 3-я форма) с её переводом.",
      "pairs": [
        [
          "had left",
          "уже ушёл"
        ],
        [
          "had gone",
          "уже уехал"
        ],
        [
          "had eaten",
          "уже поел"
        ],
        [
          "had seen",
          "уже видел"
        ],
        [
          "had forgotten",
          "уже забыл"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка первого дня B1. Пять вопросов — и «прошлое до прошлого» твоё.",
      "items": [
        {
          "q": "«Поезд уже ушёл, когда я приехал» —",
          "opts": [
            "The train left when I arrived",
            "The train had left when I arrived",
            "The train has left when I arrived"
          ],
          "answer": 1,
          "explain": "Поезд ушёл РАНЬШЕ приезда → <b>had left</b>."
        },
        {
          "q": "Past Perfect строится как —",
          "opts": [
            "have/has + 3-я форма",
            "had + 3-я форма",
            "did + базовая форма"
          ],
          "answer": 1,
          "explain": "Только <b>had</b> + третья форма, одна на всех лиц."
        },
        {
          "q": "By the time we got there, the concert ___.",
          "opts": [
            "had started",
            "started",
            "starts"
          ],
          "answer": 0,
          "explain": "Концерт начался до нашего прихода → <b>had started</b>."
        },
        {
          "q": "Отрицание: «До того дня я её не видел» —",
          "opts": [
            "I didn't saw her before that day",
            "I hadn't seen her before that day"
          ],
          "answer": 1,
          "explain": "Отрицание пред-прошлого: <b>hadn't</b> + seen, без did."
        },
        {
          "q": "Что значит «When I called, she had already gone»?",
          "opts": [
            "Когда я позвонил, она ушла при мне",
            "К моему звонку она уже ушла (раньше)"
          ],
          "answer": 1,
          "explain": "had gone = ушла ДО звонка."
        }
      ]
    },
    "essay": {
      "intro": "Твоя очередь рассказать историю с «пред-прошлым».",
      "prompt": "Напиши 4–5 предложений о моменте, когда ты куда-то пришёл(пришла), а что-то уже случилось до этого. Используй Past Perfect: had done, had gone, had already…",
      "hint": "Структуры: When I arrived, … had already … ; By the time I …, … had … ; I was tired because I had … ; I hadn't … before.",
      "example": "When I got to the station, the train had already left. I felt annoyed because I had run all the way there. By the time the next train came, I had calmed down. I realised I had forgotten my umbrella at home. Luckily, it hadn't started to rain yet."
    },
    "picture": {
      "intro": "Опиши сцену: человек приходит, а что-то уже произошло до его прихода.",
      "emoji": "🚉🕐😟",
      "prompt": "Опиши по картинке, что человек обнаружил и что случилось РАНЬШЕ. Используй had left / had gone / had already…",
      "hint": "Используй: When he arrived, the train had already left; everyone had gone.",
      "example": "When he arrived at the station, the train had already left. The platform was empty because everyone had gone. He realised he had come too late.",
      "img": "img/b1/day-01.jpg",
      "credit": "Фото: sjpowermac · CC0 · <a href=\"https://www.flickr.com/photos/41890311@N06/32302451667\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "2": {
    "day": 2,
    "week": "01",
    "level": "B1",
    "themeRu": "Что было раньше",
    "themeEn": "Past Perfect vs Past Simple",
    "intro": "Вчера ты научился(ась) отматывать время назад — <b>Past Perfect</b> (had + 3-я форма), «прошлое до прошлого». А сегодня — обратный урок: как <u>не злоупотреблять</u> этой стрелкой. Секрет дня короткий: <b>had нужен не всегда</b>. Когда события идут по порядку, как случились, хватает обычного <b>Past Simple</b>. Past Perfect включается только там, где ты прыгаешь назад, нарушая хронологию. И есть ловушка: <b>before</b> и <b>after</b> сами показывают, что было раньше, поэтому рядом с ними часто хватает простого прошедшего. Разберёмся, где had обязателен, а где — лишний.",
    "introAudio": "Вчера ты научился отматывать время назад — Past Perfect, had плюс третья форма, «прошлое до прошлого». А сегодня обратный урок: как не злоупотреблять этой стрелкой. Секрет дня короткий: had нужен не всегда. Когда события идут по порядку, как случились, хватает обычного Past Simple. Past Perfect включается только там, где ты прыгаешь назад, нарушая хронологию. И есть ловушка: before и after сами показывают, что было раньше, поэтому рядом с ними часто хватает простого прошедшего. Разберёмся, где had обязателен, а где лишний.",
    "goals": [
      "чувствовать разницу: события по порядку (Past Simple) vs прыжок назад (Past Perfect)",
      "правильно использовать before / after / by the time / already для порядка событий",
      "понимать, что after he finished и after he had finished — оба верны",
      "перестать ставить had туда, где порядок и так ясен"
    ],
    "learned": [
      "Почувствовал(а) разницу: события по порядку (Past Simple) vs прыжок назад (Past Perfect)",
      "Правильно использовал(а) before / after / by the time / already для порядка событий",
      "Понял(а), что after he finished и after he had finished — оба верны",
      "Перестал(а) ставить had туда, где порядок и так ясен"
    ],
    "review": {
      "intro": "Сначала закрепим вчерашнюю форму Past Perfect и вспомним обычный Past Simple — сегодня они работают в паре, и важно держать обе формы наготове.",
      "introAudio": "Сначала закрепим вчерашнюю форму Past Perfect и вспомним обычный Past Simple — сегодня они работают в паре, и важно держать обе формы наготове.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни вчерашнее: раннее событие в Past Perfect.",
          "q": "«К нашему приходу фильм уже начался» —",
          "opts": [
            "the film started",
            "the film had started",
            "the film has started"
          ],
          "answer": 1,
          "explain": "Начался РАНЬШЕ прихода → Past Perfect: <b>had started</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери обычный Past Simple — простой факт в прошлом.",
          "q": "Собери: «Вчера я позвонил другу»",
          "want": "Yesterday I called my friend",
          "answer": "Yesterday I called my friend"
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши Past Perfect. leave → left.",
          "q": "Они уже ушли, когда я пришёл.",
          "accept": [
            "they had already left when i arrived",
            "they had already left when i came"
          ],
          "placeholder": "They had already ... when I ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · главный контраст",
        "title": "По порядку — <em>Past Simple</em>; прыжок назад — <em>Past Perfect</em>",
        "paras": [
          "Если события идут <b>в том же порядке, в каком случились</b>, английский спокойно использует цепочку Past Simple: «I got up, made coffee and left». Никакого had — и так ясно, что было сначала.",
          "Past Perfect нужен, только когда ты <b>нарушаешь хронологию</b>: называешь позднее событие, а потом «отматываешь» к более раннему. «I was late because the bus <b>had left</b>». Сначала «опоздал» (позднее), потом объяснение из прошлого (раньше) — вот тут had.",
          "Проверка простая: события идут по очереди? → Past Simple. Ты перепрыгнул к тому, что было <u>до</u>? → had + 3-я форма."
        ],
        "audio": "Если события идут в том же порядке, в каком случились, английский использует цепочку Past Simple: I got up, made coffee and left. Никакого had. Past Perfect нужен только когда ты нарушаешь хронологию: называешь позднее событие, а потом отматываешь к более раннему. I was late because the bus had left. Проверка: события по очереди — Past Simple; перепрыгнул к тому, что было до — had плюс третья форма.",
        "table": {
          "rows": [
            [
              "I opened the door and went in.",
              "по порядку → Past Simple, оба"
            ],
            [
              "When I opened the door, they had gone.",
              "прыжок назад → had gone (раньше)"
            ],
            [
              "She cooked, ate and washed up.",
              "цепочка по очереди → Past Simple"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я встал, сварил кофе и ушёл. (по порядку)",
            "en": "I <b>got up</b>, <b>made</b> coffee and <b>left</b>.",
            "gloss": "цепочка Past Simple",
            "say": "I got up, made coffee and left."
          },
          {
            "ru": "Я опоздал, потому что автобус уже ушёл. (прыжок назад)",
            "en": "I was late because the bus <b>had left</b>.",
            "gloss": "раннее объяснение → Past Perfect",
            "say": "I was late because the bus had left."
          },
          {
            "ru": "Она поблагодарила меня за подарок, который я купил.",
            "en": "She thanked me for the present I <b>had bought</b>.",
            "gloss": "купил РАНЬШЕ → had bought",
            "say": "She thanked me for the present I had bought."
          }
        ],
        "mistakes": [
          {
            "wrong": "I had got up, had made coffee and had left",
            "right": "I <b>got up</b>, made coffee and <b>left</b>",
            "why": "события по порядку → простой Past Simple, had не нужен"
          }
        ],
        "mnemonic": "🧭 По очереди → Past Simple. Перепрыгнул назад → had + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> цепочка по порядку или прыжок назад?",
            "q": "«Я опоздал, потому что автобус уже ушёл» —",
            "opts": [
              "I was late because the bus left",
              "I was late because the bus had left"
            ],
            "answer": 1,
            "explain": "Уход автобуса — причина из более раннего прошлого → <b>had left</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> здесь события идут по порядку.",
            "q": "Выбери естественный вариант: «Я открыл дверь и вошёл».",
            "opts": [
              "I had opened the door and had gone in",
              "I opened the door and went in"
            ],
            "answer": 1,
            "explain": "По очереди → простой Past Simple, без had."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери прыжок назад с because.",
            "q": "Собери: «Она устала, потому что плохо спала»",
            "want": "She was tired because she had slept badly",
            "answer": "She was tired because she had slept badly"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · слова порядка",
        "title": "<em>before · after · by the time · already</em>",
        "paras": [
          "Эти слова сами расставляют события во времени. <b>by the time</b> (к тому времени, как) — почти всегда тянет за собой Past Perfect: «By the time the police arrived, the thief <b>had escaped</b>».",
          "<b>before</b> и <b>after</b> уже показывают, что раньше, а что позже, поэтому Past Perfect с ними <u>не обязателен</u>. «After he <b>finished</b> dinner, he went out» и «After he <b>had finished</b> dinner, he went out» — оба правильны и означают одно и то же.",
          "<b>already</b> (уже) и <b>just</b> (только что) обычно стоят между had и 3-й формой и усиливают «раньше»: had <b>already</b> left, had <b>just</b> arrived."
        ],
        "audio": "Эти слова сами расставляют события во времени. by the time, к тому времени как, почти всегда тянет Past Perfect: By the time the police arrived, the thief had escaped. before и after уже показывают, что раньше, а что позже, поэтому Past Perfect с ними не обязателен. After he finished dinner и After he had finished dinner — оба правильны. already и just стоят между had и третьей формой: had already left, had just arrived.",
        "table": {
          "rows": [
            [
              "by the time …",
              "→ часто Past Perfect: had done"
            ],
            [
              "after he finished / had finished",
              "оба верны — порядок и так ясен"
            ],
            [
              "before I left / had left",
              "оба верны"
            ],
            [
              "had already / just done",
              "усиление «раньше»"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "К приезду полиции вор уже сбежал.",
            "en": "By the time the police arrived, the thief <b>had escaped</b>.",
            "gloss": "by the time → Past Perfect",
            "say": "By the time the police arrived, the thief had escaped."
          },
          {
            "ru": "После того как он поужинал, он вышел погулять.",
            "en": "After he <b>finished</b> dinner, he went for a walk.",
            "gloss": "after → можно и без had",
            "say": "After he finished dinner, he went for a walk."
          },
          {
            "ru": "Я ушёл до того, как начался дождь.",
            "en": "I left before it <b>started</b> to rain.",
            "gloss": "before → порядок ясен",
            "say": "I left before it started to rain."
          }
        ],
        "mistakes": [
          {
            "wrong": "By the time we arrived, the film started",
            "right": "By the time we arrived, the film <b>had started</b>",
            "why": "с by the time раннее событие обычно в Past Perfect"
          },
          {
            "wrong": "After he had finished, he had gone out",
            "right": "After he had finished, he <b>went</b> out",
            "why": "позднее событие — простой Past Simple; два had подряд не нужны"
          }
        ],
        "mnemonic": "🔗 by the time → had done. after/before → можно и без had (порядок уже задан).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> by the time любит Past Perfect.",
            "q": "By the time the guests arrived, I ___ everything.",
            "opts": [
              "prepared",
              "had prepared",
              "prepare"
            ],
            "answer": 1,
            "explain": "С by the time раннее событие → <b>had prepared</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> какой вариант НЕ ошибка?",
            "q": "«После того как он закончил, он ушёл» —",
            "opts": [
              "After he finished, he left",
              "After he finished, he had left"
            ],
            "answer": 0,
            "explain": "Позднее событие — простой Past Simple: he <b>left</b>. (Past Perfect здесь ставят на раннее, не на позднее.)"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери с already внутри.",
            "q": "Собери: «К полудню я уже закончил работу»",
            "want": "By noon I had already finished the work",
            "answer": "By noon I had already finished the work"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Не лепи <em>had</em> повсюду — вид ≠ время",
        "paras": [
          "Главная ошибка после вчерашнего дня — ставить had в <u>каждое</u> прошедшее, как только в предложении два глагола. Это лишнее. Past Perfect нужен только для <b>более раннего</b> события при нарушенном порядке.",
          "Русская «совершённость» (выпил, ушёл, сделал) сбивает: кажется, что «законченное» действие требует had. Но в английском <b>вид</b> (закончено/нет) и <b>время</b> (когда) — разные вещи. «Я выпил кофе и ушёл» — оба действия закончены, но идут по очереди → просто Past Simple: I drank my coffee and left.",
          "Запомни: had — это не «галочка завершённости», а <b>стрелка назад</b>. Нет прыжка назад — нет had."
        ],
        "audio": "Главная ошибка после вчерашнего — ставить had в каждое прошедшее, как только в предложении два глагола. Это лишнее. Past Perfect нужен только для более раннего события при нарушенном порядке. Русская совершённость, выпил, ушёл, сделал, сбивает: кажется, что законченное действие требует had. Но в английском вид и время — разные вещи. Я выпил кофе и ушёл — оба закончены, но по очереди, значит просто Past Simple. had — это не галочка завершённости, а стрелка назад.",
        "table": {
          "rows": [
            [
              "I drank my coffee and left.",
              "по очереди → Past Simple (хоть и «выпил»)"
            ],
            [
              "I left because I had drunk my coffee.",
              "объяснение из раньше → had drunk"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я доделал отчёт и отправил его.",
            "en": "I <b>finished</b> the report and <b>sent</b> it.",
            "gloss": "по очереди → Past Simple, оба",
            "say": "I finished the report and sent it."
          },
          {
            "ru": "Я не мог войти, потому что потерял ключи.",
            "en": "I couldn't get in because I <b>had lost</b> my keys.",
            "gloss": "потерял РАНЬШЕ → had lost",
            "say": "I couldn't get in because I had lost my keys."
          }
        ],
        "mistakes": [
          {
            "wrong": "I had drunk my coffee and had left",
            "right": "I <b>drank</b> my coffee and <b>left</b>",
            "why": "по очереди → Past Simple; «законченность» не требует had"
          },
          {
            "wrong": "Yesterday I had met my friend and we had talked",
            "right": "Yesterday I <b>met</b> my friend and we <b>talked</b>",
            "why": "простая хроника прошлого → Past Simple"
          }
        ],
        "mnemonic": "⚠️ had ≠ «завершено». had = «стрелка назад». Нет прыжка — нет had.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> события идут по очереди.",
            "q": "«Я доел ужин и помыл посуду» —",
            "opts": [
              "I had finished dinner and had washed up",
              "I finished dinner and washed up"
            ],
            "answer": 1,
            "explain": "По очереди → простой Past Simple, без had."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> здесь нужен прыжок назад.",
            "q": "«Я не смог войти, потому что потерял ключи» <i style=\"opacity:.6\">(сначала потерял — потом не смог войти)</i> —",
            "opts": [
              "I couldn't get in because I lost my keys",
              "I couldn't get in because I had lost my keys"
            ],
            "answer": 1,
            "explain": "Ключи потеряны РАНЬШЕ → <b>had lost</b> (причина из более раннего прошлого)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> простая цепочка по порядку — без had.",
            "q": "Собери: «Вчера я встретил Тома и мы поговорили»",
            "want": "Yesterday I met Tom and we talked",
            "answer": "Yesterday I met Tom and we talked"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · собираем вместе",
        "title": "Один абзац — два времени в работе",
        "paras": [
          "В живом рассказе оба времени идут рядом. <b>Past Simple</b> ведёт сюжет вперёд (главная линия), а <b>Past Perfect</b> подкидывает предысторию (что было до).",
          "«We <b>got</b> to the airport, but our flight <b>had been</b> cancelled. Nobody <b>had told</b> us, so we <b>waited</b> for hours.» Линия сюжета — got, waited; предыстория — had been cancelled, had told.",
          "Приём для письма: сначала пиши главные события в Past Simple, а потом, где нужно объяснить «почему» или «что было раньше», добавляй had + 3-я форма."
        ],
        "audio": "В живом рассказе оба времени идут рядом. Past Simple ведёт сюжет вперёд, а Past Perfect подкидывает предысторию. We got to the airport, but our flight had been cancelled. Nobody had told us, so we waited for hours. Линия сюжета: got, waited. Предыстория: had been cancelled, had told. Сначала пиши главные события в Past Simple, потом, где нужно объяснить почему, добавляй had плюс третья форма.",
        "examples": [
          {
            "ru": "Мы приехали в аэропорт, но рейс отменили.",
            "en": "We <b>got</b> to the airport, but our flight <b>had been</b> cancelled.",
            "gloss": "сюжет (got) + предыстория (had been)",
            "say": "We got to the airport, but our flight had been cancelled."
          },
          {
            "ru": "Никто нас не предупредил, поэтому мы прождали несколько часов.",
            "en": "Nobody <b>had told</b> us, so we <b>waited</b> for hours.",
            "gloss": "had told (раньше) + waited (сюжет)",
            "say": "Nobody had told us, so we waited for hours."
          }
        ],
        "mistakes": [
          {
            "wrong": "We had got to the airport, but our flight was cancelled before",
            "right": "We <b>got</b> to the airport, but our flight <b>had been</b> cancelled",
            "why": "сюжет — Past Simple (got); предысторию — Past Perfect (had been cancelled)"
          }
        ],
        "mnemonic": "📚 Сюжет вперёд = Past Simple. Предыстория «до» = had + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> какое слово — предыстория (раньше)?",
            "q": "We arrived late and the meeting ___ already ___.",
            "opts": [
              "did … start",
              "had … started"
            ],
            "answer": 1,
            "explain": "Встреча началась ДО нашего приезда → предыстория <b>had already started</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши оба времени. cancel → cancelled.",
            "q": "Мы приехали в аэропорт, но рейс отменили (раньше).",
            "accept": [
              "we got to the airport but our flight had been cancelled",
              "we arrived at the airport but our flight had been cancelled"
            ],
            "placeholder": "We got to the airport, but our flight had ..."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси, выделив had told голосом.",
            "target": "Nobody had told us, so we waited for hours.",
            "sub": "Никто нас не предупредил, поэтому мы прождали часами.",
            "want": "had"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Лена объясняет другу, почему пропустила вечеринку. Лови, где Past Simple ведёт рассказ, а где Past Perfect объясняет предысторию.",
      "lines": [
        {
          "who": "A",
          "en": "Why didn't you come to the party last night?",
          "ru": "Почему ты не пришла на вечеринку вчера?"
        },
        {
          "who": "B",
          "en": "I tried, but by the time I left work, it had already finished.",
          "ru": "Я пыталась, но к тому времени, как я ушла с работы, она уже закончилась."
        },
        {
          "who": "A",
          "en": "Oh no. Did you finish the project at least?",
          "ru": "О нет. Ты хотя бы доделала проект?"
        },
        {
          "who": "B",
          "en": "Yes. I stayed late because my computer had crashed earlier.",
          "ru": "Да. Я задержалась, потому что раньше у меня завис компьютер."
        },
        {
          "who": "A",
          "en": "After you fixed it, did everything go fine?",
          "ru": "После того как ты его починила, всё пошло нормально?"
        },
        {
          "who": "B",
          "en": "Almost. By midnight I had sent everything and gone home.",
          "ru": "Почти. К полуночи я всё отправила и поехала домой."
        }
      ]
    },
    "vocab": {
      "intro": "Слова порядка и пары «факт vs предыстория». Повтори вслух, отмечая, что было раньше.",
      "items": [
        {
          "en": "by the time",
          "ru": "к тому времени, как",
          "ex": "By the time I came, it had ended."
        },
        {
          "en": "before",
          "ru": "до того, как",
          "ex": "I left before it rained."
        },
        {
          "en": "after",
          "ru": "после того, как",
          "ex": "After he ate, he slept."
        },
        {
          "en": "already",
          "ru": "уже",
          "ex": "They had already gone."
        },
        {
          "en": "as soon as",
          "ru": "как только",
          "ex": "I called as soon as I arrived."
        },
        {
          "en": "had escaped",
          "ru": "уже сбежал (escape)",
          "ex": "The thief had escaped."
        },
        {
          "en": "had cancelled",
          "ru": "отменил (cancel)",
          "ex": "They had cancelled the flight."
        },
        {
          "en": "had lost",
          "ru": "потерял (lose → lost)",
          "ex": "I had lost my keys."
        },
        {
          "en": "crash",
          "ru": "зависнуть / разбиться",
          "ex": "My laptop had crashed."
        },
        {
          "en": "in the end",
          "ru": "в итоге, в конце концов",
          "ex": "In the end I went home."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай. Подмечай, где автор ведёт сюжет (Past Simple), а где объясняет, что случилось раньше (Past Perfect).",
      "title": "A bad start",
      "sentences": [
        "On Monday morning, Daniel woke up late.",
        "His alarm hadn't rung because the power had gone off in the night.",
        "He rushed to the station, but the train had already left.",
        "By the time the next one came, he had missed the first meeting.",
        "When he reached the office, his boss looked annoyed.",
        "Daniel apologised and explained what had happened.",
        "After he told the story, everyone laughed.",
        "In the end, the day went much better than it had started."
      ],
      "translation": "В понедельник утром Даниэль проснулся поздно. Будильник не прозвонил, потому что ночью отключили электричество. Он помчался на станцию, но поезд уже ушёл. К приходу следующего он уже пропустил первую встречу. Когда он добрался до офиса, начальник выглядел недовольным. Даниэль извинился и объяснил, что случилось. После того как он рассказал эту историю, все засмеялись. В итоге день прошёл куда лучше, чем начался."
    },
    "drag": {
      "intro": "Реши, что это — линия сюжета (Past Simple) или предыстория (Past Perfect). Соедини форму с ярлыком.",
      "pairs": [
        [
          "I arrived",
          "сюжет (Past Simple)"
        ],
        [
          "it had started",
          "предыстория (Past Perfect)"
        ],
        [
          "we waited",
          "сюжет (Past Simple)"
        ],
        [
          "they had gone",
          "предыстория (Past Perfect)"
        ],
        [
          "she called",
          "сюжет (Past Simple)"
        ]
      ]
    },
    "quiz": {
      "intro": "Проверка дня: где had обязателен, а где лишний? Пять вопросов.",
      "items": [
        {
          "q": "«Я открыл коробку и достал телефон» (по порядку) —",
          "opts": [
            "I had opened the box and had taken out the phone",
            "I opened the box and took out the phone"
          ],
          "answer": 1,
          "explain": "По очереди → простой Past Simple, без had."
        },
        {
          "q": "By the time we got there, the shop ___.",
          "opts": [
            "closed",
            "had closed",
            "closes"
          ],
          "answer": 1,
          "explain": "С by the time раннее событие → <b>had closed</b>."
        },
        {
          "q": "Какой вариант НЕ ошибка?",
          "opts": [
            "After he had finished, he had left",
            "After he had finished, he left"
          ],
          "answer": 1,
          "explain": "Позднее событие — простой Past Simple: he <b>left</b>."
        },
        {
          "q": "«Я опоздал, потому что забыл паспорт дома» <i style=\"opacity:.6\">(сначала забыл — потом опоздал)</i> —",
          "opts": [
            "I was late because I forgot my passport",
            "I was late because I had forgotten my passport"
          ],
          "answer": 1,
          "explain": "Забыл РАНЬШЕ → причина из более раннего прошлого: <b>had forgotten</b>."
        },
        {
          "q": "had в Past Perfect показывает —",
          "opts": [
            "что действие просто завершено",
            "что событие было РАНЬШЕ другого прошлого"
          ],
          "answer": 1,
          "explain": "had — это «стрелка назад», а не галочка завершённости."
        }
      ]
    },
    "essay": {
      "intro": "Расскажи историю «неудачного утра» или «опоздания» — с двумя временами.",
      "prompt": "Напиши 5–6 предложений о дне, когда что-то пошло не так. Веди сюжет в Past Simple, а причины «из раньше» давай в Past Perfect. Используй before / after / by the time.",
      "hint": "Структуры: I woke up late because … had … ; By the time I …, … had … ; After I …, … ; In the end … .",
      "example": "Last Friday I woke up late because my alarm hadn't gone off. I rushed out, but the bus had already left. By the time I reached the office, the meeting had started. My boss wasn't angry because I had warned her the night before. After I explained everything, we just laughed. In the end, the day turned out fine."
    },
    "picture": {
      "intro": "Опиши сцену опоздания: что человек делает сейчас (сюжет) и что случилось раньше (предыстория).",
      "emoji": "⏰🏃💼",
      "prompt": "Опиши по картинке: человек спешит, но что-то уже произошло раньше. Используй Past Simple для действий и had + 3-я форма для предыстории.",
      "hint": "Используй: He ran to the station, but the train had already left; he had forgotten his ticket.",
      "example": "The man ran to the station, but the train had already left. He was upset because he had woken up late. By the time the next train came, he had missed his meeting.",
      "img": "img/b1/day-02.jpg",
      "credit": "Фото: JOHN K THORNE · CC0 · <a href=\"https://www.flickr.com/photos/89918055@N05/54205862059\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "3": {
    "day": 3,
    "week": "01",
    "level": "B1",
    "themeRu": "Рассказ во времени",
    "themeEn": "Narrative tenses",
    "intro": "Открой любую хорошую историю — и в ней сразу <b>три слоя</b> прошлого. Представь кадр из фильма. <b>Фон</b>: шёл дождь, люди спешили — это <b>Past Continuous</b> (was/were + -ing). <b>Событие</b>: вдруг зазвонил телефон — это <b>Past Simple</b>. А <b>предыстория</b>, то, что случилось ещё раньше: этого звонка я <u>уже</u> ждал — это <b>Past Perfect</b> (had done). По-русски все три слоя нередко звучат одним прошедшим, и вот тут ловушка: сваливать их в одно нельзя. Сегодня учимся раскладывать историю на эти три слоя.",
    "introAudio": "Открой любую хорошую историю — и в ней сразу три слоя прошлого. Представь кадр из фильма. Фон: шёл дождь, люди спешили — это Past Continuous, was или were плюс -ing. Событие: вдруг зазвонил телефон — это Past Simple. А предыстория, то, что случилось ещё раньше: этого звонка я уже ждал — это Past Perfect, had done. По-русски все три слоя нередко звучат одним прошедшим, и вот тут ловушка: сваливать их в одно нельзя. Сегодня учимся раскладывать историю на эти три слоя.",
    "goals": [
      "различать три слоя рассказа: фон (was doing) / событие (did) / предыстория (had done)",
      "ставить Past Continuous для длящегося фона и прерванного действия",
      "соединять when и while с правильными временами",
      "написать связный абзац-историю, используя все три прошедших времени"
    ],
    "learned": [
      "Научился(лась) различать три слоя рассказа: фон (was doing) / событие (did) / предыстория (had done)",
      "Поставил(а) Past Continuous для длящегося фона и прерванного действия",
      "Соединил(а) when и while с правильными временами",
      "Написал(а) связный абзац-историю, используя все три прошедших времени"
    ],
    "review": {
      "intro": "Сегодня в дело идёт и вчерашняя пара (Past Perfect vs Past Simple), и Past Continuous из A2. Прогреем обе вещи — они станут двумя из трёх слоёв рассказа.",
      "introAudio": "Сегодня в дело идёт и вчерашняя пара, Past Perfect против Past Simple, и Past Continuous из A2. Прогреем обе вещи — они станут двумя из трёх слоёв рассказа.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни Past Continuous из A2 — длящееся действие в прошлом.",
          "q": "«В восемь вечера я ужинал» (процесс шёл) —",
          "opts": [
            "At 8 p.m. I had dinner",
            "At 8 p.m. I was having dinner",
            "At 8 p.m. I have dinner"
          ],
          "answer": 1,
          "explain": "Длящийся процесс в момент в прошлом → Past Continuous: <b>was having</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вчерашнее: раннее событие в Past Perfect.",
          "q": "«Я устал, потому что плохо спал ночью» —",
          "opts": [
            "I was tired because I have slept badly",
            "I was tired because I had slept badly"
          ],
          "answer": 1,
          "explain": "Плохой сон — причина из более раннего прошлого → <b>had slept</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери Past Continuous + Past Simple (фон + событие).",
          "q": "Собери: «Я готовил, когда зазвонил телефон»",
          "want": "I was cooking when the phone rang",
          "answer": "I was cooking when the phone rang"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · три слоя",
        "title": "Фон · событие · предыстория",
        "paras": [
          "У хорошего рассказа три слоя времени. <b>Фон</b> — что уже шло вокруг — это <b>Past Continuous</b> (was/were + -ing): «It <b>was raining</b>». <b>Событие</b> — что вдруг случилось и двигает сюжет — это <b>Past Simple</b> (did): «the lights <b>went</b> out». <b>Предыстория</b> — что произошло ещё <u>раньше</u> — это <b>Past Perfect</b> (had done): «because a storm <b>had damaged</b> the line».",
          "Вот они вместе: «It <b>was raining</b> and I <b>was walking</b> home when the lights suddenly <b>went</b> out — a storm <b>had damaged</b> the power line earlier.» Фон, фон, событие, предыстория.",
          "Каждый слой отвечает на свой вопрос: фон — «что происходило?», событие — «что случилось?», предыстория — «что было до этого?». Раскладывай по вопросам — и время найдётся само."
        ],
        "audio": "У хорошего рассказа три слоя времени. Фон, что уже шло вокруг — Past Continuous, was или were плюс -ing: It was raining. Событие, что вдруг случилось — Past Simple: the lights went out. Предыстория, что было ещё раньше — Past Perfect, had done: because a storm had damaged the line. Каждый слой отвечает на свой вопрос: что происходило, что случилось, что было до этого.",
        "table": {
          "rows": [
            [
              "ФОН · что шло вокруг",
              "Past Continuous — was/were + -ing"
            ],
            [
              "СОБЫТИЕ · что вдруг случилось",
              "Past Simple — did"
            ],
            [
              "ПРЕДЫСТОРИЯ · что было раньше",
              "Past Perfect — had done"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Шёл дождь, когда я вышел из дома.",
            "en": "It <b>was raining</b> when I <b>left</b> the house.",
            "gloss": "фон (was raining) + событие (left)",
            "say": "It was raining when I left the house."
          },
          {
            "ru": "Я не был голоден, потому что уже поел.",
            "en": "I <b>wasn't</b> hungry because I <b>had</b> already <b>eaten</b>.",
            "gloss": "событие (wasn't) + предыстория (had eaten)",
            "say": "I wasn't hungry because I had already eaten."
          },
          {
            "ru": "Дети играли в саду, когда начался дождь.",
            "en": "The children <b>were playing</b> in the garden when it <b>started</b> to rain.",
            "gloss": "фон (were playing) + событие (started)",
            "say": "The children were playing in the garden when it started to rain."
          }
        ],
        "mistakes": [
          {
            "wrong": "It rained and I walked home when the lights went out",
            "right": "It <b>was raining</b> and I <b>was walking</b> home when the lights went out",
            "why": "длящийся фон → Past Continuous, а не Past Simple"
          }
        ],
        "mnemonic": "🎬 Фон (was doing) · событие (did) · предыстория (had done) — три слоя одной сцены.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> определи слой — это фон.",
            "q": "«Шёл снег, и было холодно» (фон сцены) —",
            "opts": [
              "It snowed and it was cold",
              "It was snowing and it was cold"
            ],
            "answer": 1,
            "explain": "Длящийся фон → Past Continuous: <b>was snowing</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> какой слой у выделенного «уже поел»?",
            "q": "I wasn't hungry because I ___ already ___.",
            "opts": [
              "did … eat",
              "had … eaten"
            ],
            "answer": 1,
            "explain": "Предыстория (раньше) → Past Perfect: <b>had eaten</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фон + событие.",
            "q": "Собери: «Дети спали, когда мы вернулись»",
            "want": "The children were sleeping when we came back",
            "answer": "The children were sleeping when we came back"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · when и while",
        "title": "Длинное и короткое — <em>while was doing, when did</em>",
        "paras": [
          "Часто два действия пересекаются: одно длинное (фон), другое короткое (вторглось). Длинное — Past Continuous, короткое — Past Simple: «I <b>was reading</b> when the phone <b>rang</b>».",
          "Удобный ориентир по союзам: <b>while</b> обычно стоит перед длинным действием (<b>while</b> I was reading), а <b>when</b> — перед коротким (<b>when</b> the phone rang). Оба соединяют один и тот же момент.",
          "Если же оба действия длились параллельно — оба в Past Continuous: «<b>While</b> I <b>was cooking</b>, she <b>was setting</b> the table»."
        ],
        "audio": "Часто два действия пересекаются: одно длинное, фон, другое короткое, вторглось. Длинное — Past Continuous, короткое — Past Simple: I was reading when the phone rang. while обычно перед длинным действием, when перед коротким. Если оба длились параллельно — оба в Past Continuous: While I was cooking, she was setting the table.",
        "table": {
          "rows": [
            [
              "while + длинное действие",
              "while I was reading"
            ],
            [
              "when + короткое событие",
              "when the phone rang"
            ],
            [
              "оба длинные = оба -ing",
              "While she was cooking, I was reading"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я принимал душ, когда кто-то постучал в дверь.",
            "en": "I <b>was taking</b> a shower when someone <b>knocked</b> on the door.",
            "gloss": "длинное (was taking) + короткое (knocked)",
            "say": "I was taking a shower when someone knocked on the door."
          },
          {
            "ru": "Пока я готовила, дети смотрели мультики.",
            "en": "<b>While</b> I <b>was cooking</b>, the kids <b>were watching</b> cartoons.",
            "gloss": "оба длинные → оба -ing",
            "say": "While I was cooking, the kids were watching cartoons."
          },
          {
            "ru": "Когда я её встретил, она ждала автобус.",
            "en": "When I <b>met</b> her, she <b>was waiting</b> for the bus.",
            "gloss": "короткое (met) + фон (was waiting)",
            "say": "When I met her, she was waiting for the bus."
          }
        ],
        "mistakes": [
          {
            "wrong": "While I read, the phone was ringing",
            "right": "While I <b>was reading</b>, the phone <b>rang</b>",
            "why": "длинное действие → Past Continuous; короткое вторжение → Past Simple"
          }
        ],
        "mnemonic": "⏳ Длинное = was doing (while). Короткое = did (when). Оба длятся → оба -ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> длинное + короткое.",
            "q": "I ___ dinner when the lights ___.",
            "opts": [
              "cooked … were going out",
              "was cooking … went out"
            ],
            "answer": 1,
            "explain": "Длинное действие — <b>was cooking</b>; короткое вторжение — <b>went out</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери: оба действия параллельны.",
            "q": "Собери: «Пока я читал, она слушала музыку»",
            "want": "While I was reading she was listening to music",
            "answer": "While I was reading she was listening to music"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. take a shower; knock = постучать.",
            "q": "Я принимал душ, когда кто-то постучал.",
            "accept": [
              "i was taking a shower when someone knocked",
              "i was having a shower when someone knocked"
            ],
            "placeholder": "I was taking a shower when ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Три английских слоя — на один русский",
        "paras": [
          "Вот главная трудность. По-русски сцена «Я шёл домой, начался дождь, а зонт я забыл» — все три глагола в одном прошедшем времени. По-английски это <u>три разных времени</u>, и сваливать их в одно (обычно в Past Simple) — типичная ошибка.",
          "Разложим: «Я <b>шёл</b> домой» — фон, длилось → I <b>was walking</b> home. «<b>начался</b> дождь» — событие, вторглось → it <b>started</b> to rain. «зонт я <b>забыл</b>» — это случилось <u>раньше</u> → I <b>had forgotten</b> my umbrella.",
          "Приём: прежде чем переводить, мысленно повесь на каждый русский глагол ярлык — «фон / событие / раньше». Ярлык подскажет время. Не давай всем трём стать просто Past Simple."
        ],
        "audio": "Вот главная трудность. По-русски сцена «Я шёл домой, начался дождь, а зонт я забыл» — все три глагола в одном прошедшем. По-английски это три разных времени, и сваливать их в одно, обычно в Past Simple, типичная ошибка. Я шёл домой — фон, длилось: I was walking home. Начался дождь — событие: it started to rain. Зонт я забыл — это случилось раньше: I had forgotten my umbrella. Перед переводом повесь на каждый глагол ярлык: фон, событие, раньше.",
        "table": {
          "rows": [
            [
              "«шёл домой» — длилось",
              "ФОН → I was walking home"
            ],
            [
              "«начался дождь» — вдруг",
              "СОБЫТИЕ → it started to rain"
            ],
            [
              "«забыл зонт» — раньше",
              "ПРЕДЫСТОРИЯ → I had forgotten my umbrella"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я шёл домой, когда начался дождь, а зонт я забыл.",
            "en": "I <b>was walking</b> home when it <b>started</b> to rain, and I <b>had forgotten</b> my umbrella.",
            "gloss": "три слоя в одном предложении",
            "say": "I was walking home when it started to rain, and I had forgotten my umbrella."
          },
          {
            "ru": "Она читала книгу, которую купила накануне.",
            "en": "She <b>was reading</b> a book that she <b>had bought</b> the day before.",
            "gloss": "фон (was reading) + предыстория (had bought)",
            "say": "She was reading a book that she had bought the day before."
          }
        ],
        "mistakes": [
          {
            "wrong": "I walked home, it started to rain and I forgot my umbrella",
            "right": "I <b>was walking</b> home when it started to rain, and I <b>had forgotten</b> my umbrella",
            "why": "три слоя нельзя сваливать в один Past Simple: фон / событие / раньше"
          }
        ],
        "mnemonic": "🏷️ Повесь ярлык на каждый русский глагол: фон → -ing, событие → did, раньше → had done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери вариант с тремя верными слоями.",
            "q": "«Я смотрел фильм, когда отключили свет, а я не сохранил работу» —",
            "opts": [
              "I watched a film when they cut the power and I didn't save my work",
              "I was watching a film when they cut the power, and I hadn't saved my work"
            ],
            "answer": 1,
            "explain": "Фон (was watching) + событие (cut) + предыстория (hadn't saved)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери три слоя.",
            "q": "Собери: «Она читала книгу, которую купила накануне»",
            "want": "She was reading a book that she had bought the day before",
            "answer": "She was reading a book that she had bought the day before"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси, держа три слоя.",
            "target": "I was walking home when it started to rain.",
            "sub": "Я шёл домой, когда начался дождь.",
            "want": "walking"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · собираем историю",
        "title": "От первой строки до развязки",
        "paras": [
          "Соберём абзац по схеме. Начни со <b>сцены</b> (фон, Past Continuous), добавь <b>предысторию</b> (Past Perfect), запусти <b>цепочку событий</b> (Past Simple) и закончи развязкой.",
          "«It <b>was getting</b> dark and the streets <b>were</b> empty. I <b>had stayed</b> at the office too long. Suddenly I <b>heard</b> footsteps behind me. I <b>turned</b> around — but it <b>was</b> only a cat.»",
          "Схема, которую держи в голове: <u>картинка → что было до → что вдруг произошло → чем кончилось</u>. Это рабочий каркас любого устного или письменного рассказа на B1."
        ],
        "audio": "Соберём абзац по схеме. Начни со сцены, фон, Past Continuous, добавь предысторию, Past Perfect, запусти цепочку событий, Past Simple, и закончи развязкой. It was getting dark and the streets were empty. I had stayed at the office too long. Suddenly I heard footsteps behind me. I turned around, but it was only a cat. Схема: картинка, что было до, что вдруг произошло, чем кончилось.",
        "examples": [
          {
            "ru": "Темнело, и улицы были пустыми.",
            "en": "It <b>was getting</b> dark and the streets <b>were</b> empty.",
            "gloss": "сцена (фон)",
            "say": "It was getting dark and the streets were empty."
          },
          {
            "ru": "Я слишком задержался в офисе.",
            "en": "I <b>had stayed</b> at the office too long.",
            "gloss": "предыстория (раньше)",
            "say": "I had stayed at the office too long."
          },
          {
            "ru": "Вдруг я услышал шаги за спиной и обернулся.",
            "en": "Suddenly I <b>heard</b> footsteps and <b>turned</b> around.",
            "gloss": "цепочка событий",
            "say": "Suddenly I heard footsteps and turned around."
          }
        ],
        "mistakes": [
          {
            "wrong": "It got dark, I stayed too long, I heard steps and was turning around",
            "right": "It <b>was getting</b> dark … I <b>had stayed</b> too long … I <b>heard</b> steps and <b>turned</b> around",
            "why": "каждый слой — своё время: фон -ing, предыстория had done, события did"
          }
        ],
        "mnemonic": "🧩 Картинка (was doing) → что было до (had done) → что случилось (did) → развязка.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери начало-сцену (фон).",
            "q": "Лучшее начало истории —",
            "opts": [
              "The sun went down and the wind blew",
              "The sun was going down and the wind was blowing"
            ],
            "answer": 1,
            "explain": "Сцена-фон → Past Continuous: <b>was going down / was blowing</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши предложение-событие. hear → heard.",
            "q": "Вдруг я услышал шаги и обернулся.",
            "accept": [
              "suddenly i heard footsteps and turned around",
              "suddenly i heard steps and turned around",
              "suddenly i heard footsteps and i turned around",
              "suddenly i heard steps and i turned around"
            ],
            "placeholder": "Suddenly I heard ... and turned around."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси развязку.",
            "target": "I turned around, but it was only a cat.",
            "sub": "Я обернулся — но это была всего лишь кошка.",
            "want": "turned"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Сэм рассказывает Кейт, как застрял в лифте. Слушай три слоя сразу — фон, событие, предыстория. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Kate",
          "name": "Кейт",
          "side": "left",
          "en": "You look exhausted. What happened last night?",
          "ru": "Ты выглядишь измотанным. Что случилось вчера вечером?",
          "words": [
            [
              "exhausted",
              "измотанный, без сил"
            ]
          ]
        },
        {
          "who": "Sam",
          "name": "Сэм",
          "side": "right",
          "en": "I was leaving the office when the lift suddenly stopped.",
          "ru": "Я выходил из офиса, когда лифт вдруг остановился.",
          "words": [
            [
              "was leaving",
              "выходил (фон)"
            ],
            [
              "lift",
              "лифт (брит.)"
            ],
            [
              "stopped",
              "остановился (событие)"
            ]
          ]
        },
        {
          "who": "Kate",
          "name": "Кейт",
          "side": "left",
          "en": "Oh no! Had anyone warned you it was broken?",
          "ru": "О нет! Тебя кто-нибудь предупреждал, что он сломан?",
          "words": [
            [
              "had warned",
              "предупреждал (раньше)"
            ],
            [
              "broken",
              "сломанный"
            ]
          ]
        },
        {
          "who": "Sam",
          "name": "Сэм",
          "side": "right",
          "en": "No. While I was waiting, I realised I had left my phone upstairs.",
          "ru": "Нет. Пока я ждал, я понял, что оставил телефон наверху.",
          "words": [
            [
              "while",
              "пока, в то время как"
            ],
            [
              "had left",
              "оставил (раньше)"
            ]
          ]
        },
        {
          "who": "Kate",
          "name": "Кейт",
          "side": "left",
          "en": "So how did you get out in the end?",
          "ru": "И как ты в итоге выбрался?",
          "words": [
            [
              "get out",
              "выбраться"
            ],
            [
              "in the end",
              "в итоге"
            ]
          ]
        },
        {
          "who": "Sam",
          "name": "Сэм",
          "side": "right",
          "en": "A guard heard me shouting and opened the doors.",
          "ru": "Охранник услышал, как я кричу, и открыл двери.",
          "words": [
            [
              "guard",
              "охранник"
            ],
            [
              "shouting",
              "кричу (shout)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова для рассказа и три слоя глаголов. Повтори вслух, отмечая слой: фон / событие / раньше.",
      "items": [
        {
          "en": "was raining",
          "ru": "шёл дождь (фон)",
          "ex": "It was raining all evening."
        },
        {
          "en": "suddenly",
          "ru": "вдруг, внезапно",
          "ex": "Suddenly the door opened."
        },
        {
          "en": "while",
          "ru": "пока, в то время как",
          "ex": "While I was cooking, he was reading."
        },
        {
          "en": "had forgotten",
          "ru": "забыл (раньше) (forget)",
          "ex": "I had forgotten my keys."
        },
        {
          "en": "footsteps",
          "ru": "шаги (звук)",
          "ex": "I heard footsteps."
        },
        {
          "en": "knock",
          "ru": "стучать; стук",
          "ex": "Someone knocked twice."
        },
        {
          "en": "in the end",
          "ru": "в итоге, в конце концов",
          "ex": "In the end, all was fine."
        },
        {
          "en": "realise",
          "ru": "осознать, понять",
          "ex": "I realised I was lost."
        },
        {
          "en": "get dark",
          "ru": "темнеть",
          "ex": "It was getting dark."
        },
        {
          "en": "turn around",
          "ru": "обернуться",
          "ex": "I turned around slowly."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай рассказ. Найди в нём все три слоя: фон (was doing), события (did), предыстория (had done).",
      "title": "The night the lights went out",
      "sentences": [
        "It was a cold winter evening and the wind was howling outside.",
        "I was sitting by the window, reading a book I had borrowed from a friend.",
        "I had locked all the doors because the news had warned about a storm.",
        "Suddenly, the lights went out and the whole street fell silent.",
        "While I was looking for a candle, I heard a quiet knock at the door.",
        "My heart was racing, but it was only my neighbour.",
        "She had noticed my window and wanted to check that I was fine.",
        "We laughed, lit some candles, and waited for the power to come back."
      ],
      "translation": "Был холодный зимний вечер, и снаружи выл ветер. Я сидел у окна и читал книгу, которую взял у друга. Я запер все двери, потому что в новостях предупредили о буре. Вдруг погас свет, и вся улица затихла. Пока я искал свечу, я услышал тихий стук в дверь. Сердце колотилось, но это была всего лишь соседка. Она заметила моё окно и хотела убедиться, что со мной всё в порядке. Мы посмеялись, зажгли свечи и стали ждать, пока вернётся электричество."
    },
    "drag": {
      "intro": "Определи слой каждой формы. Соедини глагол с его ролью в рассказе.",
      "pairs": [
        [
          "was sitting",
          "фон (Past Continuous)"
        ],
        [
          "went out",
          "событие (Past Simple)"
        ],
        [
          "had locked",
          "предыстория (Past Perfect)"
        ],
        [
          "was howling",
          "фон (Past Continuous)"
        ],
        [
          "heard",
          "событие (Past Simple)"
        ]
      ]
    },
    "quiz": {
      "intro": "Проверка дня: разложи рассказ по трём слоям. Пять вопросов.",
      "items": [
        {
          "q": "Фон сцены «шёл снег» —",
          "opts": [
            "it snowed",
            "it was snowing",
            "it had snowed"
          ],
          "answer": 1,
          "explain": "Длящийся фон → Past Continuous: <b>was snowing</b>."
        },
        {
          "q": "«Я готовил, когда зазвонил телефон» —",
          "opts": [
            "I cooked when the phone was ringing",
            "I was cooking when the phone rang"
          ],
          "answer": 1,
          "explain": "Длинное действие (was cooking) + короткое событие (rang)."
        },
        {
          "q": "«Я не был голоден, потому что уже поел» — какой слой у «поел»?",
          "opts": [
            "did eat (событие)",
            "had eaten (предыстория)"
          ],
          "answer": 1,
          "explain": "Случилось раньше → Past Perfect: <b>had eaten</b>."
        },
        {
          "q": "Какой союз обычно стоит перед длинным действием?",
          "opts": [
            "when",
            "while"
          ],
          "answer": 1,
          "explain": "<b>while</b> + длинное (was doing); <b>when</b> + короткое (did)."
        },
        {
          "q": "Главная ошибка русскоязычных в рассказе —",
          "opts": [
            "сваливать все три слоя в один Past Simple",
            "слишком часто использовать Past Continuous"
          ],
          "answer": 0,
          "explain": "Три английских слоя нельзя сводить к одному русскому прошедшему."
        }
      ]
    },
    "essay": {
      "intro": "Расскажи свою маленькую историю — с фоном, событием и предысторией.",
      "prompt": "Напиши 5–6 предложений о случае, который тебя удивил или напугал. Используй все три слоя: фон (was doing), события (did) и хотя бы одну предысторию (had done).",
      "hint": "Каркас: It was … and … was … (фон) → I had … (раньше) → Suddenly … (событие) → In the end … (развязка).",
      "example": "It was late and I was walking home alone. The streets were quiet because everyone had gone to bed. Suddenly, I heard fast footsteps behind me. My heart was racing, and I turned around quickly. It was my brother, who had decided to surprise me. In the end, we laughed all the way home."
    },
    "picture": {
      "intro": "Опиши сцену как кадр из истории: что происходило вокруг и что вдруг случилось.",
      "emoji": "🌧️🚶🌩️",
      "prompt": "Опиши по картинке маленькую историю. Дай фон (was doing), событие (did) и предысторию (had done).",
      "hint": "Используй: It was raining and she was walking home when …; she had forgotten her umbrella.",
      "example": "It was raining hard and the woman was walking home. She had forgotten her umbrella at the office. Suddenly, a car drove past and splashed her. In the end, she just laughed and kept walking.",
      "img": "img/b1/day-03.jpg",
      "credit": "Фото: gnuckx · CC0 · <a href=\"https://www.flickr.com/photos/34409164@N06/4739845353\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "4": {
    "day": 4,
    "week": "01",
    "level": "B1",
    "themeRu": "Делаю уже сколько-то",
    "themeEn": "Present Perfect Continuous",
    "intro": "Как долго ты уже читаешь эту книгу английского? Вопрос простой, а грамматика за ним — новая. Когда действие началось в прошлом, тянется до сих пор и важна именно <u>длительность</u>, в дело идёт <b>Present Perfect Continuous</b>: <b>have/has been + -ing</b>. «I <b>have been learning</b> English for two years» — учу два года и не бросаю. И тут русский подставляет ловушку: мы говорим в <u>настоящем</u> — «я живу здесь пять лет» — и тянемся сказать «I live here for five years». А по-английски это «I <b>have been living</b> here for five years». Сегодня разберём форму, слова for/since и эту ловушку.",
    "introAudio": "Как долго ты уже читаешь эту книгу английского? Вопрос простой, а грамматика за ним новая. Когда действие началось в прошлом, тянется до сих пор и важна именно длительность, в дело идёт Present Perfect Continuous: have или has been плюс -ing. I have been learning English for two years — учу два года и не бросаю. И тут русский подставляет ловушку: мы говорим в настоящем — я живу здесь пять лет — и тянемся сказать I live here for five years. А по-английски это I have been living here for five years. Сегодня разберём форму, слова for и since и эту ловушку.",
    "goals": [
      "строить Present Perfect Continuous: have/has been + глагол с -ing",
      "говорить о длительности действия вплоть до настоящего: I've been working since 9",
      "правильно ставить for (период) и since (точку отсчёта)",
      "не переводить «я делаю это N лет» русским настоящим временем"
    ],
    "learned": [
      "Построил(а) Present Perfect Continuous: have/has been + глагол с -ing",
      "Заговорил(а) о длительности действия вплоть до настоящего: I've been working since 9",
      "Правильно поставил(а) for (период) и since (точку отсчёта)",
      "Перестал(а) переводить «я делаю это N лет» русским настоящим временем"
    ],
    "review": {
      "intro": "Новое время вырастает прямо из Present Perfect, поэтому сначала прогреем его (have + 3-я форма) и слова for/since — сегодня они переезжают в новую конструкцию почти без изменений.",
      "introAudio": "Новое время вырастает прямо из Present Perfect, поэтому сначала прогреем его, have плюс третья форма, и слова for и since — сегодня они переезжают в новую конструкцию почти без изменений.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни Present Perfect — результат к настоящему.",
          "q": "«Я уже прочитал три книги в этом месяце» —",
          "opts": [
            "I read three books this month",
            "I have read three books this month",
            "I had read three books this month"
          ],
          "answer": 1,
          "explain": "Результат к настоящему моменту → Present Perfect: <b>have read</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> for или since? Подумай: период или точка?",
          "q": "I have known her ___ 2019.",
          "opts": [
            "for",
            "since"
          ],
          "answer": 1,
          "explain": "2019 — точка отсчёта → <b>since</b>. (for — для периода: for three years.)"
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери Present Perfect с for.",
          "q": "Собери: «Мы живём здесь три года»",
          "want": "We have lived here for three years",
          "answer": "We have lived here for three years"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · форма",
        "title": "<em>have/has been + -ing</em> — «делаю уже сколько-то»",
        "paras": [
          "Present Perfect Continuous собирается из трёх кубиков: <b>have/has</b> + <b>been</b> + глагол с <b>-ing</b>. been здесь не меняется никогда — меняется только have/has по лицу: I/you/we/they <b>have been</b>, he/she/it <b>has been</b>.",
          "Смысл: действие <b>началось в прошлом и тянется до сейчас</b>, и нам важна его длительность или то, что оно недавнее. «I <b>have been waiting</b> for an hour» — жду уже час (и всё ещё жду).",
          "В речи всё сжимается: <b>I've been</b>, <b>she's been</b>, а само been звучит слабо — /bɪn/, почти «бин». Слушай: «I've been working» → «айв-бин-уёкин»."
        ],
        "audio": "Present Perfect Continuous собирается из трёх кубиков: have или has, плюс been, плюс глагол с -ing. been не меняется никогда, меняется только have или has по лицу. Смысл: действие началось в прошлом и тянется до сейчас, важна длительность. I have been waiting for an hour — жду уже час и всё ещё жду. В речи: I've been, she's been, а been звучит слабо, почти бин.",
        "table": {
          "rows": [
            [
              "I / you / we / they",
              "have been + -ing (I have been working)"
            ],
            [
              "he / she / it",
              "has been + -ing (she has been working)"
            ],
            [
              "сокращённо",
              "I've been · he's been · they've been"
            ],
            [
              "been — не меняется",
              "всегда been, меняется только have/has"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я учу английский уже два года.",
            "en": "I <b>have been learning</b> English for two years.",
            "gloss": "have been + learning",
            "say": "I have been learning English for two years."
          },
          {
            "ru": "Она работает с самого утра.",
            "en": "She <b>has been working</b> since this morning.",
            "gloss": "has been + working",
            "say": "She has been working since this morning."
          },
          {
            "ru": "Мы ждём уже целый час.",
            "en": "We <b>have been waiting</b> for an hour.",
            "gloss": "have been + waiting",
            "say": "We have been waiting for an hour."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have been work for two hours",
            "right": "I have been <b>working</b> for two hours",
            "why": "после been — глагол с -ing: working"
          },
          {
            "wrong": "She have been working",
            "right": "She <b>has</b> been working",
            "why": "he/she/it → has been"
          }
        ],
        "mnemonic": "🔧 Три кубика: have/has + been + -ing. been не трогаем.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму.",
            "q": "«Я жду уже час» —",
            "opts": [
              "I have been wait for an hour",
              "I have been waiting for an hour",
              "I am waiting for an hour"
            ],
            "answer": 1,
            "explain": "have been + <b>waiting</b> (-ing)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> have или has?",
            "q": "She ___ been studying all day.",
            "opts": [
              "have",
              "has"
            ],
            "answer": 1,
            "explain": "he/she/it → <b>has</b> been."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери форму с been + -ing.",
            "q": "Собери: «Они играют уже два часа»",
            "want": "They have been playing for two hours",
            "answer": "They have been playing for two hours"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · for и since",
        "title": "<em>for</em> = период · <em>since</em> = точка отсчёта",
        "paras": [
          "С этим временем почти всегда идут <b>for</b> или <b>since</b> — они и отвечают на «как долго». <b>for</b> — это <u>отрезок</u>: for two hours, for a week, for ages. <b>since</b> — это <u>момент начала</u>: since Monday, since 2019, since I was a child.",
          "Проверка проста: можешь подставить «в течение» — это <b>for</b> (for three days = в течение трёх дней). Можешь подставить «с (такого-то момента)» — это <b>since</b> (since morning = с утра).",
          "Частый вопрос про длительность: <b>How long have you been…?</b> — «Как долго ты уже…?». «How long have you been waiting?» — «Сколько ты уже ждёшь?»."
        ],
        "audio": "С этим временем почти всегда идут for или since. for — это отрезок: for two hours, for a week. since — это момент начала: since Monday, since 2019. Подставляется «в течение» — for. Подставляется «с такого-то момента» — since. Вопрос про длительность: How long have you been waiting? Сколько ты уже ждёшь?",
        "table": {
          "rows": [
            [
              "for + период",
              "for two hours, for a week, for ages"
            ],
            [
              "since + момент",
              "since Monday, since 9 a.m., since 2019"
            ],
            [
              "How long have you been …?",
              "Как долго ты уже …?"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я живу здесь с 2019 года.",
            "en": "I <b>have been living</b> here <b>since</b> 2019.",
            "gloss": "since + точка",
            "say": "I have been living here since 2019."
          },
          {
            "ru": "Он бегает уже двадцать минут.",
            "en": "He <b>has been running</b> <b>for</b> twenty minutes.",
            "gloss": "for + период",
            "say": "He has been running for twenty minutes."
          },
          {
            "ru": "Как долго ты уже учишь испанский?",
            "en": "<b>How long have</b> you <b>been learning</b> Spanish?",
            "gloss": "вопрос о длительности",
            "say": "How long have you been learning Spanish?"
          }
        ],
        "mistakes": [
          {
            "wrong": "I have been working since three hours",
            "right": "I have been working <b>for</b> three hours",
            "why": "три часа — это отрезок → for, а не since"
          },
          {
            "wrong": "I have been here for Monday",
            "right": "I have been here <b>since</b> Monday",
            "why": "Monday — точка отсчёта → since"
          }
        ],
        "mnemonic": "📏 for = «в течение» (отрезок). since = «с» (точка старта).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> отрезок или точка?",
            "q": "We have been talking ___ two hours.",
            "opts": [
              "since",
              "for"
            ],
            "answer": 1,
            "explain": "Два часа — отрезок → <b>for</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> отрезок или точка?",
            "q": "She has been waiting ___ 9 o'clock.",
            "opts": [
              "for",
              "since"
            ],
            "answer": 1,
            "explain": "9 часов — момент начала → <b>since</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вопрос о длительности.",
            "q": "Собери: «Как долго ты уже здесь работаешь?»",
            "want": "How long have you been working here",
            "answer": "How long have you been working here"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Не русское настоящее: <em>I have been living</em>, не <em>I live</em>",
        "paras": [
          "Вот главная ошибка. По-русски длящееся «до сих пор» действие мы выражаем <b>настоящим</b> временем: «Я <u>живу</u> здесь пять лет», «Я <u>жду</u> уже час», «Я <u>учу</u> английский два года». Глаголы — в настоящем. И рука тянется написать «I live here for five years».",
          "Но в английском есть правило: если есть <b>срок до настоящего</b> (for/since), нельзя использовать Present Simple — нужно Present Perfect: для длящихся действий <b>have/has been + -ing</b>, а для состояний (be, know, have) — просто <b>have/has + 3-я форма</b>, без -ing (как в примере We have been friends since school). «I <b>have been living</b> here for five years.» «I <b>have been waiting</b> for an hour.»",
          "Запомни сигнал: как только видишь «делаю что-то <u>уже</u> сколько-то» (for/since), английский переключается с настоящего на have/has been + -ing (для состояний — просто have/has + 3-я форма). Русское настоящее тут — ложный друг."
        ],
        "audio": "Вот главная ошибка. По-русски длящееся до сих пор действие мы выражаем настоящим временем: я живу здесь пять лет, я жду уже час, я учу английский два года. И рука тянется написать I live here for five years. Но в английском правило: если есть срок до настоящего, for или since, нельзя Present Simple, нужно Present Perfect: для длящихся действий have been плюс -ing, а для состояний, be, know, have, просто have плюс третья форма, без -ing, как в We have been friends since school. I have been living here for five years. Как видишь делаю что-то уже сколько-то, переключайся с настоящего на Present Perfect.",
        "table": {
          "rows": [
            [
              "❌ I live here for 5 years",
              "✅ I have been living here for 5 years"
            ],
            [
              "❌ I wait for an hour",
              "✅ I have been waiting for an hour"
            ],
            [
              "❌ I work here since May",
              "✅ I have been working here since May"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я живу в этом городе уже десять лет.",
            "en": "I <b>have been living</b> in this city for ten years.",
            "gloss": "не «I live … for ten years»",
            "say": "I have been living in this city for ten years."
          },
          {
            "ru": "Мы дружим со школы.",
            "en": "We <b>have been friends</b> since school.",
            "gloss": "состояние → Present Perfect (be), без -ing",
            "say": "We have been friends since school."
          },
          {
            "ru": "Он ждёт ответа уже неделю.",
            "en": "He <b>has been waiting</b> for an answer for a week.",
            "gloss": "не «He waits … for a week»",
            "say": "He has been waiting for an answer for a week."
          }
        ],
        "mistakes": [
          {
            "wrong": "I live here for five years",
            "right": "I <b>have been living</b> here for five years",
            "why": "срок до настоящего (for) → have been + -ing, не Present Simple"
          },
          {
            "wrong": "I study English since 2020",
            "right": "I <b>have been studying</b> English since 2020",
            "why": "since 2020 → длительность до сейчас → have been studying"
          }
        ],
        "mnemonic": "🪤 «Делаю уже N лет» по-русски настоящее → по-английски have/has been + -ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> русское настоящее — ложный друг.",
            "q": "«Я живу здесь пять лет» (и сейчас живу) —",
            "opts": [
              "I live here for five years",
              "I have been living here for five years"
            ],
            "answer": 1,
            "explain": "Срок до настоящего → <b>have been living</b>, не Present Simple."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «учу уже три года» —",
            "q": "«Она учит французский уже три года» —",
            "opts": [
              "She learns French for three years",
              "She has been learning French for three years"
            ],
            "answer": 1,
            "explain": "Длительность до сейчас → <b>has been learning</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. wait → waiting.",
            "q": "Я жду тебя уже двадцать минут.",
            "accept": [
              "i have been waiting for you for twenty minutes",
              "i've been waiting for you for twenty minutes"
            ],
            "placeholder": "I have been waiting for you for ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · вопрос и отрицание",
        "title": "<em>Have you been…?</em> и <em>haven't been…</em>",
        "paras": [
          "Вопрос строим переносом have/has вперёд: <b>Have you been waiting</b> long? <b>Has she been crying?</b> Заметь логичную связку с предыдущим: на «How long…?» отвечают именно этим временем.",
          "Отрицание — not к have/has: <b>haven't been / hasn't been</b> + -ing. «I <b>haven't been sleeping</b> well lately» — я в последнее время плохо сплю.",
          "Ещё одно частое применение — объяснить <b>видимый сейчас результат</b> недавнего процесса: «You're out of breath — <b>have</b> you <b>been running</b>?», «Her eyes are red; she <b>has been crying</b>». Действие только что шло и оставило след."
        ],
        "audio": "Вопрос строим переносом have или has вперёд: Have you been waiting long? Has she been crying? На вопрос How long отвечают именно этим временем. Отрицание: not к have или has — haven't been, hasn't been, плюс -ing. I haven't been sleeping well lately. Ещё применение — объяснить видимый сейчас результат недавнего процесса: You're out of breath — have you been running? Her eyes are red, she has been crying.",
        "table": {
          "rows": [
            [
              "Have you been waiting long?",
              "Ты давно ждёшь?"
            ],
            [
              "Yes, I have. / No, I haven't.",
              "Да / Нет (короткий ответ)"
            ],
            [
              "I haven't been sleeping well.",
              "Я плохо сплю (в последнее время)."
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Ты давно ждёшь?",
            "en": "<b>Have</b> you <b>been waiting</b> long?",
            "gloss": "вопрос: have вперёд",
            "say": "Have you been waiting long?"
          },
          {
            "ru": "Ты запыхался — ты бежал?",
            "en": "You're out of breath — <b>have</b> you <b>been running</b>?",
            "gloss": "видимый результат недавнего процесса",
            "say": "You're out of breath. Have you been running?"
          },
          {
            "ru": "Я в последнее время плохо сплю.",
            "en": "I <b>haven't been sleeping</b> well lately.",
            "gloss": "отрицание: haven't been + -ing",
            "say": "I haven't been sleeping well lately."
          }
        ],
        "mistakes": [
          {
            "wrong": "Do you have been waiting long?",
            "right": "<b>Have</b> you been waiting long?",
            "why": "вопрос — выносим have вперёд, без do"
          },
          {
            "wrong": "I don't have been sleeping well",
            "right": "I <b>haven't</b> been sleeping well",
            "why": "отрицание — haven't been + -ing, не «don't have»"
          }
        ],
        "mnemonic": "👀 Видишь свежий след действия? → have/has been + -ing: «Have you been running?»",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вопрос.",
            "q": "«Ты давно ждёшь?» —",
            "opts": [
              "Do you have been waiting long?",
              "Have you been waiting long?",
              "Are you waiting long?"
            ],
            "answer": 1,
            "explain": "Вопрос: <b>Have you been waiting…?</b>"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> объясни видимый результат.",
            "q": "Her eyes are red. She ___.",
            "opts": [
              "cries",
              "has been crying",
              "had cried"
            ],
            "answer": 1,
            "explain": "Свежий след недавнего процесса → <b>has been crying</b>."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вопрос, been звучит слабо.",
            "target": "Have you been waiting long?",
            "sub": "Ты давно ждёшь?",
            "want": "been"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Нина встречает запыхавшегося Олега. Слушай, как Present Perfect Continuous объясняет «как долго» и «почему такой вид».",
      "lines": [
        {
          "who": "A",
          "en": "There you are! I've been waiting for twenty minutes.",
          "ru": "Вот ты где! Я жду уже двадцать минут."
        },
        {
          "who": "B",
          "en": "Sorry! I've been running — the bus didn't come.",
          "ru": "Прости! Я бежал — автобус не пришёл."
        },
        {
          "who": "A",
          "en": "You look exhausted. How long have you been training for the race?",
          "ru": "Ты выглядишь измотанным. Как долго ты готовишься к забегу?"
        },
        {
          "who": "B",
          "en": "Since March. I've been getting up at six every day.",
          "ru": "С марта. Я встаю в шесть каждый день."
        },
        {
          "who": "A",
          "en": "No wonder you're tired! Have you been sleeping enough?",
          "ru": "Неудивительно, что ты устал! Ты высыпаешься?"
        },
        {
          "who": "B",
          "en": "Not really. But I've been feeling great anyway.",
          "ru": "Не очень. Но всё равно чувствую себя отлично."
        }
      ]
    },
    "vocab": {
      "intro": "Слова длительности и частые формы have been + -ing. Повтори вслух, добавляя for или since.",
      "items": [
        {
          "en": "have been waiting",
          "ru": "жду уже (некоторое время)",
          "ex": "I've been waiting for ages."
        },
        {
          "en": "have been working",
          "ru": "работаю уже (сколько-то)",
          "ex": "She's been working all day."
        },
        {
          "en": "have been living",
          "ru": "живу уже (сколько-то)",
          "ex": "We've been living here for years."
        },
        {
          "en": "for",
          "ru": "в течение (период)",
          "ex": "for two hours, for a week"
        },
        {
          "en": "since",
          "ru": "с (момента начала)",
          "ex": "since Monday, since 2019"
        },
        {
          "en": "How long…?",
          "ru": "Как долго…?",
          "ex": "How long have you been here?"
        },
        {
          "en": "lately",
          "ru": "в последнее время",
          "ex": "I've been busy lately."
        },
        {
          "en": "all day",
          "ru": "весь день",
          "ex": "It's been raining all day."
        },
        {
          "en": "out of breath",
          "ru": "запыхавшийся",
          "ex": "He was out of breath."
        },
        {
          "en": "for ages",
          "ru": "целую вечность",
          "ex": "I've been waiting for ages."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай. Заметь, как have/has been + -ing подчёркивает длительность «до сих пор».",
      "title": "A long project",
      "sentences": [
        "I have been working on the same project since January.",
        "We have been meeting every Monday to discuss new ideas.",
        "Lately, the team has been staying late almost every evening.",
        "I haven't been sleeping very well because of the deadlines.",
        "My colleague has been helping me with the difficult parts.",
        "How long have you been doing this kind of work?",
        "For me, it has been six exhausting but exciting months.",
        "We have been waiting for this launch for a very long time."
      ],
      "translation": "Я работаю над одним и тем же проектом с января. Мы встречаемся каждый понедельник, чтобы обсудить новые идеи. В последнее время команда задерживается допоздна почти каждый вечер. Я плохо сплю из-за дедлайнов. Мой коллега помогает мне со сложными частями. Как долго ты занимаешься такой работой? Для меня это были шесть изматывающих, но захватывающих месяцев. Мы очень долго ждали этого запуска."
    },
    "drag": {
      "intro": "Соедини начало фразы с правильным «хвостом» — for (период) или since (точка).",
      "pairs": [
        [
          "I've been studying English for",
          "three years"
        ],
        [
          "She's been working here since",
          "2020"
        ],
        [
          "We've been waiting for",
          "an hour"
        ],
        [
          "They've been living here since",
          "March"
        ],
        [
          "It's been raining for",
          "two days"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка дня. Пять вопросов — и Present Perfect Continuous твой.",
      "items": [
        {
          "q": "«Я жду уже час» —",
          "opts": [
            "I wait for an hour",
            "I have been waiting for an hour",
            "I am waiting for an hour"
          ],
          "answer": 1,
          "explain": "Длительность до сейчас → <b>have been waiting</b>."
        },
        {
          "q": "We have been talking ___ two hours.",
          "opts": [
            "since",
            "for"
          ],
          "answer": 1,
          "explain": "Два часа — отрезок → <b>for</b>."
        },
        {
          "q": "«Я живу здесь пять лет» (и сейчас живу) —",
          "opts": [
            "I live here for five years",
            "I have been living here for five years"
          ],
          "answer": 1,
          "explain": "Русское настоящее — ложный друг; нужно <b>have been living</b>."
        },
        {
          "q": "Her eyes are red. She ___.",
          "opts": [
            "has been crying",
            "cries",
            "had cried"
          ],
          "answer": 0,
          "explain": "Свежий след недавнего процесса → <b>has been crying</b>."
        },
        {
          "q": "После been ставим —",
          "opts": [
            "3-ю форму (done)",
            "глагол с -ing (doing)"
          ],
          "answer": 1,
          "explain": "Present Perfect Continuous: have/has been + <b>-ing</b>."
        }
      ]
    },
    "essay": {
      "intro": "Расскажи, чем ты занимаешься «уже какое-то время».",
      "prompt": "Напиши 4–5 предложений о том, что ты делаешь уже долго и продолжаешь. Используй have/has been + -ing с for и since.",
      "hint": "Структуры: I have been … for/since … ; Lately I've been … ; I haven't been … ; How long have you been …?",
      "example": "I have been learning English since last year. Lately, I've been studying almost every evening after work. I have been using an app for about six months. I haven't been practising speaking enough, though. But I've been feeling more confident week by week."
    },
    "picture": {
      "intro": "Опиши, чем человек занят уже какое-то время и почему у него такой вид.",
      "emoji": "🏃💦⏱️",
      "prompt": "Опиши по картинке: что человек делает уже долго (have/has been + -ing) и как долго (for/since).",
      "hint": "Используй: He has been running for an hour; he's out of breath; he has been training since spring.",
      "example": "The man has been running for almost an hour. He is out of breath because he has been training hard since spring. He has been getting up early every day to prepare for the race.",
      "img": "img/b1/day-04.jpg",
      "credit": "Фото: satguru · CC0 · <a href=\"https://www.flickr.com/photos/48600096354@N01/9733797464\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "5": {
    "day": 5,
    "week": "01",
    "level": "B1",
    "themeRu": "Процесс или результат",
    "themeEn": "PPC vs Present Perfect",
    "intro": "Форму ты уже собрал(а) вчера — have been doing. Сегодня — та самая тонкость, ради которой она и придумана: когда сказать <b>I've been reading</b> (процесс), а когда <b>I've read</b> (результат). Русское «я читал эту книгу» прячет оба смысла в одном слове, а английский их разводит по разным полкам. Разберём по шагам: процесс отвечает на «<b>как долго</b>, чем был занят», результат — на «<b>сделано, сколько</b>». Открываем страницу.",
    "introAudio": "Форму ты уже собрал вчера — have been doing. Сегодня та самая тонкость, ради которой она и придумана: когда сказать I've been reading, это процесс, а когда I've read, это результат. Русское «я читал эту книгу» прячет оба смысла в одном слове, а английский их разводит по разным полкам. Разберём по шагам: процесс отвечает на вопрос как долго, чем был занят, результат — на вопрос сделано, сколько. Открываем страницу.",
    "goals": [
      "чувствовать разницу: been doing — это процесс, done — это результат",
      "выбирать верно: <b>I've been reading it</b> (ещё читаю) vs <b>I've read it</b> (прочитал)",
      "объяснять своё состояние недавней активностью: You look tired — I've been working",
      "не ставить continuous со статичными глаголами: не «been knowing», а <b>have known</b>"
    ],
    "learned": [
      "Почувствовал(а) разницу: been doing — это процесс, done — это результат",
      "Научился(лась) верно выбирать: <b>I've been reading it</b> (ещё читаю) vs <b>I've read it</b> (прочитал)",
      "Объяснил(а) своё состояние недавней активностью: You look tired — I've been working",
      "Перестал(а) ставить continuous со статичными глаголами: не «been knowing», а <b>have known</b>"
    ],
    "review": {
      "intro": "Сначала разомнём вчерашнее — форму Present Perfect Continuous (have/has been + -ing) и слова-спутники for/since. Они держат весь сегодняшний день.",
      "introAudio": "Сначала разомнём вчерашнее — форму Present Perfect Continuous, have или has been плюс -ing, и слова-спутники for и since. Они держат весь сегодняшний день.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери форму для процесса, который длится до сейчас.",
          "q": "«Я жду уже два часа (и всё ещё жду)» —",
          "opts": [
            "I wait for two hours",
            "I have been waiting for two hours",
            "I am waiting since two hours"
          ],
          "answer": 1,
          "explain": "Длительность до сейчас → Present Perfect Continuous: <b>have been waiting</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери for или since. for + отрезок, since + точка.",
          "q": "I have been learning English ___ five years.",
          "opts": [
            "since",
            "for",
            "during"
          ],
          "answer": 1,
          "explain": "five years — это отрезок времени → <b>for</b>. (since — для точки: since 2019.)"
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши предложение в PPC. since + точка отсчёта.",
          "q": "Дождь идёт с самого утра.",
          "accept": [
            "it has been raining since morning",
            "it's been raining since morning",
            "it has been raining since the morning",
            "it has been raining since this morning"
          ],
          "placeholder": "It has been raining since ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · процесс vs результат",
        "title": "Два вопроса: «<em>чем занимался</em>» и «<em>что сделано</em>»",
        "paras": [
          "Present Perfect Continuous (<b>have been doing</b>) отвечает на вопрос «<b>чем ты занимался / как долго</b> это длится». В центре — сам процесс, действие, которое тянулось вплоть до сейчас. Закончено оно или нет — здесь неважно.",
          "Present Perfect simple (<b>have done</b>) отвечает на вопрос «<b>что сделано / сколько</b>». В центре — результат: дело закрыто, есть итог или количество.",
          "Сравни: <b>I've been writing emails all morning</b> (процесс — чем был занят всё утро) и <b>I've written ten emails</b> (результат — сколько готово). Одно действие — два разных фокуса."
        ],
        "audio": "Present Perfect Continuous, have been doing, отвечает на вопрос чем ты занимался и как долго это длится. В центре сам процесс, действие, которое тянулось вплоть до сейчас. Present Perfect simple, have done, отвечает на вопрос что сделано и сколько. В центре результат. Сравни: I've been writing emails all morning, это процесс, и I've written ten emails, это результат. Одно действие — два фокуса.",
        "table": {
          "rows": [
            [
              "have been doing",
              "процесс: чем занимался, как долго"
            ],
            [
              "have done",
              "результат: что сделано, сколько"
            ],
            [
              "How long have you been working?",
              "вопрос про длительность → процесс"
            ],
            [
              "How much have you done?",
              "вопрос про итог → результат"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я весь день красил забор.",
            "en": "I've <b>been painting</b> the fence all day.",
            "gloss": "процесс — чем занят весь день",
            "say": "I have been painting the fence all day."
          },
          {
            "ru": "Я покрасил три комнаты.",
            "en": "I've <b>painted</b> three rooms.",
            "gloss": "результат — сколько готово",
            "say": "I have painted three rooms."
          },
          {
            "ru": "Как долго ты учишь итальянский?",
            "en": "How long have you <b>been learning</b> Italian?",
            "gloss": "как долго → процесс",
            "say": "How long have you been learning Italian?"
          },
          {
            "ru": "Сколько слов ты выучил?",
            "en": "How many words have you <b>learned</b>?",
            "gloss": "сколько → результат",
            "say": "How many words have you learned?"
          }
        ],
        "mistakes": [
          {
            "wrong": "I have written all morning",
            "right": "I have <b>been writing</b> all morning",
            "why": "«всё утро» — это длительность, процесс → been writing"
          },
          {
            "wrong": "How long have you done this?",
            "right": "How long have you <b>been doing</b> this?",
            "why": "«как долго» спрашивает про процесс → been doing"
          }
        ],
        "mnemonic": "⏳ Чем занимался / как долго → been doing. Что сделано / сколько → done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> в фокусе процесс или результат? «всё утро» — процесс.",
            "q": "«Я весь день готовил (и ещё готовлю)» —",
            "opts": [
              "I have cooked all day",
              "I have been cooking all day",
              "I cook all day"
            ],
            "answer": 1,
            "explain": "«весь день» + действие тянется → процесс → <b>have been cooking</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> здесь спрашивают про итог — сколько готово.",
            "q": "«Сколько страниц ты написал?» —",
            "opts": [
              "How many pages have you been writing?",
              "How many pages have you written?"
            ],
            "answer": 1,
            "explain": "«сколько» → результат, количество → <b>have you written</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вопрос про длительность (процесс).",
            "q": "Собери: «Как долго ты ждёшь?»",
            "want": "How long have you been waiting",
            "answer": "How long have you been waiting"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · русская ловушка",
        "title": "<em>I've been reading it</em> vs <em>I've read it</em>",
        "paras": [
          "Главная ловушка дня. Русское «я читал эту книгу» — одно. А английский слышит здесь два разных смысла, и форма решает, какой именно.",
          "<b>I've been reading this book</b> = я (ещё) читаю её, процесс не закончен, я где-то в середине. Фокус — на самом занятии.",
          "<b>I've read this book</b> = я прочитал её, дело закрыто, могу пересказать сюжет. Фокус — на результате. Если книга дочитана — только эта форма."
        ],
        "audio": "Главная ловушка дня. Русское «я читал эту книгу» одно, а английский слышит два разных смысла. I've been reading this book — я ещё читаю её, процесс не закончен, я где-то в середине. I've read this book — я прочитал её, дело закрыто, могу пересказать сюжет. Если книга дочитана, только вторая форма.",
        "table": {
          "rows": [
            [
              "I've been reading it",
              "процесс: ещё читаю, не закончил"
            ],
            [
              "I've read it",
              "результат: прочитал, закончил"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я читаю этот роман (ещё не дочитал).",
            "en": "I've <b>been reading</b> this novel.",
            "gloss": "процесс, не закончен",
            "say": "I have been reading this novel."
          },
          {
            "ru": "Я прочитал этот роман — отличная концовка.",
            "en": "I've <b>read</b> this novel — great ending.",
            "gloss": "результат, дочитал",
            "say": "I have read this novel — great ending."
          },
          {
            "ru": "Я весь месяц учу новую программу.",
            "en": "I've <b>been learning</b> the new software all month.",
            "gloss": "процесс",
            "say": "I have been learning the new software all month."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have been reading this book — now I know the ending",
            "right": "I have <b>read</b> this book — now I know the ending",
            "why": "знаю концовку = дочитал → результат, have read"
          },
          {
            "wrong": "I've read this report all week (and I'm still reading)",
            "right": "I've <b>been reading</b> this report all week",
            "why": "ещё читаю, процесс → been reading"
          }
        ],
        "mnemonic": "📖 Ещё в процессе → been reading. Дочитал → read.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> книга дочитана или ещё в работе?",
            "q": "«Я прочитал её — могу рассказать, чем всё кончилось» —",
            "opts": [
              "I have been reading it",
              "I have read it"
            ],
            "answer": 1,
            "explain": "знаю финал = дочитал → результат → <b>have read</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> процесс ещё идёт.",
            "q": "«Я читаю эту книгу уже неделю (ещё не дочитал)» —",
            "opts": [
              "I've read this book for a week",
              "I've been reading this book for a week"
            ],
            "answer": 1,
            "explain": "ещё читаю, длительность → процесс → <b>been reading</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши процесс. learn → been learning.",
            "q": "Я учу испанский уже два года.",
            "accept": [
              "i have been learning spanish for two years",
              "i've been learning spanish for two years",
              "i have been studying spanish for two years"
            ],
            "placeholder": "I have been learning Spanish ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · видны следы",
        "title": "<em>Why are you…? — I've been …ing</em>",
        "paras": [
          "Очень частое употребление been doing — объяснить нынешнее состояние недавним занятием. Видны «следы»: ты устал, вспотел, руки грязные — потому что чем-то занимался.",
          "<b>You look tired.</b> — <b>Yes, I've been working all day.</b> Активность, может, только что закончилась, но её результат виден прямо сейчас.",
          "Вопрос часто начинается с <b>Why</b> или <b>What have you been doing?</b>: <b>Why are your shoes wet?</b> — <b>I've been walking in the rain.</b>"
        ],
        "audio": "Очень частое употребление been doing — объяснить нынешнее состояние недавним занятием. Видны следы: ты устал, вспотел, руки грязные. You look tired — Yes, I've been working all day. Активность, может, только что закончилась, но её результат виден сейчас. Вопрос часто с Why или What have you been doing? Why are your shoes wet? — I've been walking in the rain.",
        "table": {
          "rows": [
            [
              "You look exhausted.",
              "I've been studying all night."
            ],
            [
              "Your hands are dirty.",
              "I've been fixing the car."
            ],
            [
              "What have you been doing?",
              "Чем ты занимался?"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Ты выглядишь измотанным! — Я весь день разбирал коробки.",
            "en": "You look exhausted! — I've <b>been moving</b> boxes all day.",
            "gloss": "следы → been moving",
            "say": "You look exhausted! I have been moving boxes all day."
          },
          {
            "ru": "Почему ты весь мокрый? — Я бегал.",
            "en": "Why are you all wet? — I've <b>been running</b>.",
            "gloss": "виден результат → been running",
            "say": "Why are you all wet? I have been running."
          },
          {
            "ru": "У меня болят глаза — я весь день смотрел в экран.",
            "en": "My eyes hurt — I've <b>been staring</b> at a screen all day.",
            "say": "My eyes hurt. I have been staring at a screen all day."
          }
        ],
        "mistakes": [
          {
            "wrong": "Why are you so tired? — I worked all day",
            "right": "I've <b>been working</b> all day",
            "why": "недавняя активность с видимым результатом → been working"
          }
        ],
        "mnemonic": "💦 Видны следы недавнего занятия → I've been …ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> объясни состояние недавней активностью.",
            "q": "«Почему у тебя грязные руки? — Я чинил велосипед» —",
            "opts": [
              "I fixed the bike",
              "I have been fixing the bike",
              "I fix the bike"
            ],
            "answer": 1,
            "explain": "руки грязные сейчас = след недавнего занятия → <b>have been fixing</b>."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух, объясняя усталость.",
            "target": "You look tired. I've been working all day.",
            "sub": "Ты выглядишь усталым. Я работал весь день.",
            "want": "been working"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · вторая ловушка",
        "title": "<em>know, have, like</em> — без continuous",
        "paras": [
          "Вторая ловушка. Некоторые глаголы описывают не действие, а <b>состояние</b>: know (знать), have (в смысле «иметь»), like, love, want, need, believe, understand. Они почти никогда не идут в continuous.",
          "Даже когда речь о длительности «сколько уже», с ними берут <b>Present Perfect simple</b>, а не Continuous: <b>I have known her for ten years</b> — не «have been knowing».",
          "Сравни с глаголом-действием: <b>I have been learning Spanish for a year</b> (learn — действие, можно been learning). А know — состояние, поэтому только <b>have known</b>."
        ],
        "audio": "Вторая ловушка. Некоторые глаголы описывают не действие, а состояние: know, have в смысле иметь, like, love, want, need, believe, understand. Они почти никогда не идут в continuous. Даже когда речь про длительность, с ними берут Present Perfect simple: I have known her for ten years, не have been knowing. Сравни: I have been learning Spanish for a year — learn это действие. А know это состояние, поэтому только have known.",
        "table": {
          "rows": [
            [
              "I have known him for years.",
              "know — состояние → simple"
            ],
            [
              "I have had this car since 2020.",
              "have = иметь → simple"
            ],
            [
              "✗ I have been knowing",
              "так нельзя"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я знаю её с детства.",
            "en": "I've <b>known</b> her since childhood.",
            "gloss": "know → состояние, simple",
            "say": "I have known her since childhood."
          },
          {
            "ru": "У меня этот телефон уже три года.",
            "en": "I've <b>had</b> this phone for three years.",
            "gloss": "have = иметь → simple",
            "say": "I have had this phone for three years."
          },
          {
            "ru": "Я давно хочу собаку.",
            "en": "I've <b>wanted</b> a dog for a long time.",
            "gloss": "want → состояние, simple",
            "say": "I have wanted a dog for a long time."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have been knowing her for years",
            "right": "I have <b>known</b> her for years",
            "why": "know — состояние, без continuous"
          },
          {
            "wrong": "I have been having this car since 2020",
            "right": "I have <b>had</b> this car since 2020",
            "why": "have = иметь → состояние, simple"
          }
        ],
        "mnemonic": "🧠 Состояние (know, have, like) → have done, не been doing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> know — состояние, без continuous.",
            "q": "«Я знаю его десять лет» —",
            "opts": [
              "I have been knowing him for ten years",
              "I have known him for ten years",
              "I am knowing him for ten years"
            ],
            "answer": 1,
            "explain": "know — состояние → Present Perfect simple → <b>have known</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> здесь действие — можно continuous.",
            "q": "«Я работаю здесь уже год» —",
            "opts": [
              "I work here for a year",
              "I have been working here for a year",
              "I am working here for a year"
            ],
            "answer": 1,
            "explain": "work — действие, длится → <b>have been working</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши с глаголом-состоянием. have = иметь.",
            "q": "У меня эта машина уже пять лет.",
            "accept": [
              "i have had this car for five years",
              "i've had this car for five years"
            ],
            "placeholder": "I have had this car ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня встречает уставшего Тома. Слушай, как он объясняет своё состояние через «been doing», и где звучит результат.",
      "lines": [
        {
          "who": "A",
          "en": "You look exhausted! What have you been doing?",
          "ru": "Ты выглядишь измотанным! Чем ты занимался?"
        },
        {
          "who": "B",
          "en": "I've been moving boxes all day. We've finally bought a new flat.",
          "ru": "Я весь день таскал коробки. Мы наконец купили новую квартиру."
        },
        {
          "who": "A",
          "en": "Congratulations! How long have you been looking for one?",
          "ru": "Поздравляю! Как долго вы её искали?"
        },
        {
          "who": "B",
          "en": "For almost a year. I've seen about thirty flats!",
          "ru": "Почти год. Я посмотрел около тридцати квартир!"
        },
        {
          "who": "A",
          "en": "Thirty? You must be relieved it's over.",
          "ru": "Тридцать? Ты, наверное, рад, что всё позади."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — про процесс, усталость и результат. Повтори вслух с примерами.",
      "items": [
        {
          "en": "exhausted",
          "ru": "измотанный, без сил",
          "ex": "I'm exhausted after a long shift."
        },
        {
          "en": "all morning",
          "ru": "всё утро",
          "ex": "I've been cooking all morning."
        },
        {
          "en": "lately",
          "ru": "в последнее время",
          "ex": "I've been sleeping badly lately."
        },
        {
          "en": "so far",
          "ru": "пока что, на данный момент",
          "ex": "I've read three chapters so far."
        },
        {
          "en": "to make progress",
          "ru": "продвигаться, делать успехи",
          "ex": "I've been making good progress."
        },
        {
          "en": "to fix",
          "ru": "чинить, налаживать",
          "ex": "He's been fixing the roof."
        },
        {
          "en": "soaked",
          "ru": "промокший насквозь",
          "ex": "You're soaked! Have you been walking in the rain?"
        },
        {
          "en": "How long…?",
          "ru": "как долго…?",
          "ex": "How long have you been waiting?"
        },
        {
          "en": "result",
          "ru": "результат, итог",
          "ex": "What's the result of all this work?"
        },
        {
          "en": "to look + прил.",
          "ru": "выглядеть (каким-то)",
          "ex": "You look worried."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек рассказывает про насыщенную неделю. Замечай, где процесс (been doing), а где результат (done).",
      "title": "A busy week",
      "sentences": [
        "It has been a busy week.",
        "I've been working on a big report.",
        "So far I've written twenty pages.",
        "I've been sleeping badly because of the stress.",
        "But the good news is, I've finished the hardest part.",
        "I've also been learning to cook in the evenings.",
        "I haven't made anything special yet.",
        "Still, I've made some real progress!"
      ],
      "translation": "Неделя была насыщенной. Я работал над большим отчётом. Пока что я написал двадцать страниц. Я плохо спал из-за стресса. Но хорошая новость: я закончил самую трудную часть. А ещё по вечерам я учусь готовить. Ничего особенного я пока не приготовил. И всё же я по-настоящему продвинулся!"
    },
    "drag": {
      "intro": "Соедини форму с её смыслом — процесс это или результат, действие или состояние.",
      "pairs": [
        [
          "been reading",
          "ещё читаю (процесс)"
        ],
        [
          "have read",
          "прочитал (результат)"
        ],
        [
          "have known",
          "знаю уже (состояние)"
        ],
        [
          "been working",
          "работал всё это время"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — пять вопросов на «процесс или результат». Поехали!",
      "items": [
        {
          "q": "«Я весь день красил кухню (и ещё крашу)» —",
          "opts": [
            "I have painted the kitchen all day",
            "I have been painting the kitchen all day",
            "I paint the kitchen all day"
          ],
          "answer": 1,
          "explain": "процесс, длится весь день → <b>have been painting</b>."
        },
        {
          "q": "«Я прочитал эту статью — могу пересказать» —",
          "opts": [
            "I have been reading this article",
            "I have read this article",
            "I am reading this article"
          ],
          "answer": 1,
          "explain": "дочитал, есть результат → <b>have read</b>."
        },
        {
          "q": "«Я знаю её десять лет» —",
          "opts": [
            "I have been knowing her for ten years",
            "I have known her for ten years",
            "I am knowing her for ten years"
          ],
          "answer": 1,
          "explain": "know — состояние, без continuous → <b>have known</b>."
        },
        {
          "q": "«Почему у тебя грязные руки? — Я чинил велосипед» —",
          "opts": [
            "I fixed the bike",
            "I have been fixing the bike",
            "I am fix the bike"
          ],
          "answer": 1,
          "explain": "видимый след недавней активности → <b>have been fixing</b>."
        },
        {
          "q": "«Сколько книг ты прочитал в этом году?» —",
          "opts": [
            "How many books have you been reading this year?",
            "How many books have you read this year?"
          ],
          "answer": 1,
          "explain": "«сколько» → результат, количество → <b>have you read</b>."
        }
      ]
    },
    "picture": {
      "intro": "Опиши, чем человек занимался — почему он такой запыхавшийся.",
      "emoji": "🏃‍♂️💦😮‍💨",
      "prompt": "Опиши, чем человек был занят. Используй I've been …ing и одно предложение с результатом (I've done…).",
      "hint": "Используй: He has been running for an hour; He has run five kilometres; He looks exhausted.",
      "example": "He looks exhausted and he's soaked. He has been running for an hour. So far he has run about five kilometres.",
      "img": "img/b1/day-05.jpg",
      "credit": "Фото: photobankmd · CC0 · <a href=\"https://www.flickr.com/photos/137066529@N04/36218260284\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Расскажи, чем ты был(а) занят(а) в последнее время — и что уже сделал(а).",
      "prompt": "Напиши 3–5 предложений про последнюю неделю. Используй PPC для процесса (I've been …ing) и Present Perfect для результата (I've done…).",
      "hint": "Структуры: Lately I've been …ing ; So far I've …ed / done… ; I haven't … yet ; I've made some progress.",
      "example": "Lately I've been working on a new project at the office. So far I've finished the first part. I've also been learning to drive, but I haven't passed the test yet. Still, I've made good progress."
    }
  },
  "6": {
    "day": 6,
    "week": "01",
    "level": "B1",
    "themeRu": "Раньше я",
    "themeEn": "used to & would",
    "intro": "Есть у меня любимая, чуть ностальгическая глава — вот она. Сегодня вспоминаем, как всё было <b>раньше</b>: где ты жил(а), чем занимался(ась) каждое лето, чего давно нет. Для этого у английского два инструмента — <b>used to</b> (привычки и состояния прошлого) и <b>would</b> (повторявшиеся действия, будто рассказ у камина). Они похожи, но не взаимозаменяемы: <b>would</b> любит действия и не выносит состояний. Покажу, где русское «раньше я жил» сворачивает не туда. Поехали.",
    "introAudio": "Есть у меня любимая, чуть ностальгическая глава — вот она. Сегодня вспоминаем, как всё было раньше: где ты жил, чем занимался каждое лето, чего давно нет. Для этого у английского два инструмента — used to, это привычки и состояния прошлого, и would, это повторявшиеся действия, будто рассказ у камина. Они похожи, но не взаимозаменяемы: would любит действия и не выносит состояний. Покажу, где русское «раньше я жил» сворачивает не туда. Поехали.",
    "goals": [
      "рассказывать о прошлых привычках и состояниях через <b>used to</b> + базовая форма",
      "оживлять рассказ повторявшимися действиями через <b>would</b>",
      "не путать: <b>would</b> — только для действий, состояния — только <b>used to</b>",
      "строить вопрос и отрицание: <b>Did you use to…? / I didn't use to…</b>"
    ],
    "learned": [
      "Рассказал(а) о прошлых привычках и состояниях через <b>used to</b> + базовая форма",
      "Оживил(а) рассказ повторявшимися действиями через <b>would</b>",
      "Перестал(а) путать: <b>would</b> — только для действий, состояния — только <b>used to</b>",
      "Построил(а) вопрос и отрицание: <b>Did you use to…? / I didn't use to…</b>"
    ],
    "review": {
      "intro": "Разомнём вчерашнее — «процесс или результат» (been doing vs done) — и заодно Past Simple, он нам сегодня нужен на каждом шагу.",
      "introAudio": "Разомнём вчерашнее — процесс или результат, been doing против done, — и заодно Past Simple, он нам сегодня нужен на каждом шагу.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> процесс это или результат? «весь день» — процесс.",
          "q": "«Я весь день писал отчёт (и ещё пишу)» —",
          "opts": [
            "I have written the report all day",
            "I have been writing the report all day",
            "I write the report all day"
          ],
          "answer": 1,
          "explain": "длится весь день, процесс → <b>have been writing</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни 3-ю форму / Past Simple неправильного глагола.",
          "q": "«Прошлым летом мы поехали в Италию» —",
          "opts": [
            "Last summer we go to Italy",
            "Last summer we went to Italy",
            "Last summer we have gone to Italy"
          ],
          "answer": 1,
          "explain": "конкретное «прошлым летом» → Past Simple: go → <b>went</b>."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши в Past Simple. have → had.",
          "q": "Вчера у нас была долгая встреча.",
          "accept": [
            "yesterday we had a long meeting",
            "we had a long meeting yesterday"
          ],
          "placeholder": "Yesterday we had ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · привычки прошлого",
        "title": "<em>used to</em> — как было раньше, но больше нет",
        "paras": [
          "<b>used to + базовая форма</b> описывает то, что было правдой в прошлом, а сейчас уже нет: привычку или состояние. <b>I used to smoke</b> = раньше я курил (а теперь нет). <b>There used to be a cinema here</b> = здесь когда-то был кинотеатр.",
          "Главное в used to — контраст «тогда ↔ теперь». Оно само сообщает: это в прошлом и закончилось. Подходит и для действий-привычек (used to go), и для состояний (used to be, used to have, used to know).",
          "Форма всегда одна: после used to — <b>базовый глагол без окончаний</b>: used to <b>live</b>, used to <b>play</b>, used to <b>have</b>."
        ],
        "audio": "used to плюс базовая форма описывает то, что было правдой в прошлом, а сейчас уже нет: привычку или состояние. I used to smoke — раньше я курил, теперь нет. There used to be a cinema here — здесь когда-то был кинотеатр. Главное в used to — контраст тогда и теперь. Подходит и для действий, и для состояний. После used to всегда базовый глагол без окончаний.",
        "table": {
          "rows": [
            [
              "I used to live in Kyiv.",
              "Раньше я жил в Киеве (теперь нет)."
            ],
            [
              "She used to have long hair.",
              "У неё были длинные волосы."
            ],
            [
              "There used to be a shop here.",
              "Здесь был магазин."
            ],
            [
              "Did you use to play sports?",
              "Ты раньше занимался спортом?"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Раньше я жил у моря.",
            "en": "I <b>used to live</b> by the sea.",
            "gloss": "used to + базовая",
            "say": "I used to live by the sea."
          },
          {
            "ru": "В детстве я боялся темноты.",
            "en": "I <b>used to be</b> afraid of the dark.",
            "gloss": "состояние → used to be",
            "say": "I used to be afraid of the dark."
          },
          {
            "ru": "Здесь когда-то был парк.",
            "en": "There <b>used to be</b> a park here.",
            "gloss": "used to be",
            "say": "There used to be a park here."
          }
        ],
        "mistakes": [
          {
            "wrong": "I used to lived there",
            "right": "I used to <b>live</b> there",
            "why": "после used to — базовая форма без -ed"
          },
          {
            "wrong": "I am used to smoke",
            "right": "I <b>used to</b> smoke",
            "why": "прошлая привычка — used to, без am (это другая конструкция)"
          }
        ],
        "mnemonic": "🕰️ used to + базовая = было раньше, теперь нет (и привычки, и состояния).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> после used to — базовая форма.",
            "q": "«Раньше я играл на гитаре» —",
            "opts": [
              "I used to played the guitar",
              "I used to play the guitar",
              "I am used to play the guitar"
            ],
            "answer": 1,
            "explain": "used to + базовая → <b>used to play</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение про состояние в прошлом.",
            "q": "Собери: «Здесь когда-то был магазин»",
            "want": "There used to be a shop here",
            "answer": "There used to be a shop here"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши про прошлую привычку. live → live (базовая).",
            "q": "Раньше я жил в маленьком городе.",
            "accept": [
              "i used to live in a small town",
              "i used to live in a small city"
            ],
            "placeholder": "I used to live ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · повторявшиеся действия",
        "title": "<em>would</em> — что повторялось снова и снова",
        "paras": [
          "<b>would + базовая форма</b> рассказывает о повторявшихся действиях прошлого — как в тёплых воспоминаниях. <b>Every summer we would go to the lake.</b> = Каждое лето мы (бывало) ездили на озеро.",
          "would звучит чуть литературнее и любит «маркеры регулярности»: every day, on Sundays, in those days, when I was a child. Часто рядом стоит used to, а потом рассказ продолжается через would: задаёшь сцену через used to и оживляешь её через would.",
          "Это не «бы»! Здесь <b>would</b> — не условное, а «бывало, делал». Один и тот же would в разных ролях — смотри по смыслу."
        ],
        "audio": "would плюс базовая форма рассказывает о повторявшихся действиях прошлого, как в тёплых воспоминаниях. Every summer we would go to the lake — каждое лето мы, бывало, ездили на озеро. would любит маркеры регулярности: every day, on Sundays, when I was a child. Часто рядом стоит used to: задаёшь сцену через used to и оживляешь её через would. Это не бы — здесь would значит бывало, делал.",
        "table": {
          "rows": [
            [
              "Every morning he would walk the dog.",
              "Каждое утро он выгуливал собаку."
            ],
            [
              "On Sundays we would visit grandma.",
              "По воскресеньям мы навещали бабушку."
            ],
            [
              "She would always sing in the kitchen.",
              "Она вечно пела на кухне."
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Каждое лето мы ездили к морю.",
            "en": "Every summer we <b>would go</b> to the seaside.",
            "gloss": "повтор → would go",
            "say": "Every summer we would go to the seaside."
          },
          {
            "ru": "По вечерам отец читал нам сказки.",
            "en": "In the evenings my father <b>would read</b> us stories.",
            "gloss": "регулярное действие",
            "say": "In the evenings my father would read us stories."
          },
          {
            "ru": "Она всегда приносила нам конфеты.",
            "en": "She <b>would always bring</b> us sweets.",
            "gloss": "always + would",
            "say": "She would always bring us sweets."
          }
        ],
        "mistakes": [
          {
            "wrong": "Every summer we would going there",
            "right": "Every summer we <b>would go</b> there",
            "why": "после would — базовая форма (go), без -ing"
          }
        ],
        "mnemonic": "🔁 would + базовая = «бывало, делал» (повтор). Любит every day, on Sundays.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> повторявшееся действие, после would — базовая.",
            "q": "«Каждое воскресенье мы навещали бабушку» —",
            "opts": [
              "Every Sunday we would visiting grandma",
              "Every Sunday we would visit grandma",
              "Every Sunday we will visit grandma"
            ],
            "answer": 1,
            "explain": "повтор в прошлом → would + базовая → <b>would visit</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери воспоминание с would.",
            "q": "Собери: «Каждое лето мы ездили на озеро»",
            "want": "Every summer we would go to the lake",
            "answer": "Every summer we would go to the lake"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши с would. read → read (базовая).",
            "q": "По вечерам мама читала мне.",
            "accept": [
              "in the evenings my mother would read to me",
              "in the evenings my mum would read to me",
              "my mother would read to me in the evenings",
              "my mum would read to me in the evenings"
            ],
            "placeholder": "In the evenings my mother would read ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "<em>would</em> не любит состояний",
        "paras": [
          "Вот сердце сегодняшнего дня. <b>would</b> годится только для <b>действий</b>. Для <b>состояний</b> — жить, быть, иметь, знать, любить, верить — would не работает: бери <b>used to</b>.",
          "Русское «раньше я жил там» так и тянет сказать «I would live there» — и это ошибка. Жить — это состояние, не повторяющееся действие. Правильно: <b>I used to live there.</b>",
          "Простое правило выбора: <b>used to</b> подходит всегда (и для действий, и для состояний). <b>would</b> — только когда действие можно «повторить» (ходил, ездил, звонил, играл). Сомневаешься — бери used to."
        ],
        "audio": "Сердце сегодняшнего дня. would годится только для действий. Для состояний — жить, быть, иметь, знать, любить, верить — would не работает, бери used to. Русское раньше я жил там тянет сказать I would live there, и это ошибка. Жить — это состояние. Правильно: I used to live there. Простое правило: used to подходит всегда, would только когда действие можно повторить. Сомневаешься — бери used to.",
        "table": {
          "rows": [
            [
              "действие (ходил, ездил)",
              "would ИЛИ used to — оба годятся"
            ],
            [
              "состояние (жил, знал, имел)",
              "только used to"
            ],
            [
              "✗ I would live there",
              "✓ I used to live there"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Раньше я жил в Москве.",
            "en": "I <b>used to live</b> in Moscow.",
            "gloss": "жить — состояние → used to",
            "say": "I used to live in Moscow."
          },
          {
            "ru": "У меня раньше была собака.",
            "en": "I <b>used to have</b> a dog.",
            "gloss": "иметь — состояние → used to",
            "say": "I used to have a dog."
          },
          {
            "ru": "Каждое утро я бегал в парке.",
            "en": "Every morning I <b>would run</b> in the park.",
            "gloss": "бегать — действие → would можно",
            "say": "Every morning I would run in the park."
          }
        ],
        "mistakes": [
          {
            "wrong": "I would live there as a child",
            "right": "I <b>used to live</b> there as a child",
            "why": "жить — состояние, would нельзя → used to"
          },
          {
            "wrong": "We would have a big house",
            "right": "We <b>used to have</b> a big house",
            "why": "иметь — состояние → used to, не would"
          }
        ],
        "mnemonic": "🚧 would — только действия. Состояния (live, be, have, know) → used to.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «жить» — состояние, выбери правильный инструмент.",
            "q": "«Раньше я жил у бабушки» —",
            "opts": [
              "I would live at my grandma's",
              "I used to live at my grandma's"
            ],
            "answer": 1,
            "explain": "жить — состояние → только <b>used to live</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> здесь действие повторялось — годятся оба, но выбери корректный.",
            "q": "«Каждое лето мы ходили в горы» —",
            "opts": [
              "Every summer we would go hiking",
              "Every summer we would knowing the mountains"
            ],
            "answer": 0,
            "explain": "ходить в походы — действие, повтор → <b>would go</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> «иметь» — состояние. Используй used to.",
            "q": "У меня раньше была старая машина.",
            "accept": [
              "i used to have an old car",
              "i used to have an old car."
            ],
            "placeholder": "I used to have ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · вопрос и отрицание",
        "title": "<em>Did you use to…? / I didn't use to…</em>",
        "paras": [
          "Вопрос и отрицание делаем через привычного помощника <b>did</b>. И тут хитрость написания: после did буква d у use исчезает — <b>use to</b>, а не «used to»: <b>Did you use to…?</b>, <b>I didn't use to…</b>",
          "<b>Did you use to play an instrument?</b> = Ты раньше играл на инструменте? <b>I didn't use to like coffee.</b> = Раньше я не любил кофе.",
          "И не путай с одноразовым прошлым: «вчера я сходил» — это Past Simple (I went), а не used to. used to — про то, что было <b>регулярно</b> и закончилось."
        ],
        "audio": "Вопрос и отрицание делаем через помощника did. Хитрость написания: после did буква d у use исчезает — use to, а не used to. Did you use to play an instrument? I didn't use to like coffee — раньше я не любил кофе. И не путай с одноразовым прошлым: вчера я сходил — это Past Simple, I went, а не used to. used to про то, что было регулярно и закончилось.",
        "table": {
          "rows": [
            [
              "Did you use to…?",
              "Ты раньше…? (use, без d)"
            ],
            [
              "I didn't use to…",
              "Раньше я не… (use, без d)"
            ],
            [
              "✓ утверждение: used to",
              "✓ did → use to"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Ты раньше носил очки?",
            "en": "<b>Did</b> you <b>use to</b> wear glasses?",
            "gloss": "вопрос: use to (без d)",
            "say": "Did you use to wear glasses?"
          },
          {
            "ru": "Раньше я не любил кофе.",
            "en": "I <b>didn't use to</b> like coffee.",
            "gloss": "отрицание: use to",
            "say": "I didn't use to like coffee."
          },
          {
            "ru": "Раньше она не вставала так рано.",
            "en": "She <b>didn't use to</b> get up so early.",
            "say": "She didn't use to get up so early."
          }
        ],
        "mistakes": [
          {
            "wrong": "Did you used to live here?",
            "right": "Did you <b>use to</b> live here?",
            "why": "после did → use (без d)"
          },
          {
            "wrong": "I didn't used to smoke",
            "right": "I <b>didn't use to</b> smoke",
            "why": "после didn't → use (без d)"
          }
        ],
        "mnemonic": "❓ С did буква d уходит: Did you use to…? / I didn't use to…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> после did — use (без d).",
            "q": "«Ты раньше жил здесь?» —",
            "opts": [
              "Did you used to live here?",
              "Did you use to live here?",
              "Do you use to live here?"
            ],
            "answer": 1,
            "explain": "вопрос через did → <b>use to</b> (без d)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери отрицание.",
            "q": "Собери: «Раньше я не любил кофе»",
            "want": "I didn't use to like coffee",
            "answer": "I didn't use to like coffee"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши вопрос. wear glasses = носить очки.",
            "q": "Ты раньше носил очки?",
            "accept": [
              "did you use to wear glasses",
              "did you use to wear glasses?"
            ],
            "placeholder": "Did you use to ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Два старых друга встретились через много лет и вспоминают, как было раньше. Нажми на реплику, чтобы услышать. Замечай used to и would.",
      "lines": [
        {
          "who": "Anna",
          "name": "Anna",
          "side": "left",
          "en": "Do you remember our old neighbourhood? There used to be a tiny cinema on the corner.",
          "ru": "Помнишь наш старый район? На углу был крошечный кинотеатр.",
          "words": [
            [
              "neighbourhood",
              "район"
            ],
            [
              "used to be",
              "когда-то был"
            ]
          ]
        },
        {
          "who": "Mark",
          "name": "Mark",
          "side": "right",
          "en": "Of course! Every Friday we would buy tickets and share a huge box of popcorn.",
          "ru": "Конечно! Каждую пятницу мы покупали билеты и делили огромную коробку попкорна.",
          "words": [
            [
              "would buy",
              "покупали (бывало)"
            ],
            [
              "share",
              "делить"
            ]
          ]
        },
        {
          "who": "Anna",
          "name": "Anna",
          "side": "left",
          "en": "I used to be so shy back then. I didn't use to talk much.",
          "ru": "Я была такой застенчивой тогда. Я мало разговаривала.",
          "words": [
            [
              "shy",
              "застенчивый"
            ],
            [
              "back then",
              "тогда, в те времена"
            ]
          ]
        },
        {
          "who": "Mark",
          "name": "Mark",
          "side": "right",
          "en": "Really? Now you never stop! Time changes people, doesn't it?",
          "ru": "Правда? Теперь ты не замолкаешь! Время меняет людей, да?",
          "words": [
            [
              "never stop",
              "не замолкаешь"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — про воспоминания и «как было раньше». Повтори вслух.",
      "items": [
        {
          "en": "as a child",
          "ru": "в детстве",
          "ex": "As a child, I used to be afraid of dogs."
        },
        {
          "en": "back then",
          "ru": "тогда, в те времена",
          "ex": "Back then we didn't have phones."
        },
        {
          "en": "these days",
          "ru": "в наши дни, сейчас",
          "ex": "These days everyone is online."
        },
        {
          "en": "no longer",
          "ru": "больше не",
          "ex": "He no longer lives here."
        },
        {
          "en": "to grow up",
          "ru": "расти, взрослеть",
          "ex": "I grew up in a small village."
        },
        {
          "en": "neighbourhood",
          "ru": "район, окрестности",
          "ex": "Our neighbourhood used to be quiet."
        },
        {
          "en": "memory",
          "ru": "воспоминание; память",
          "ex": "I have happy memories of those summers."
        },
        {
          "en": "habit",
          "ru": "привычка",
          "ex": "Reading at night is an old habit of mine."
        },
        {
          "en": "to remind",
          "ru": "напоминать",
          "ex": "This song reminds me of school."
        },
        {
          "en": "shy",
          "ru": "застенчивый, робкий",
          "ex": "I used to be shy at parties."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай небольшое воспоминание о детстве. Замечай used to (привычки и состояния) и would (повторявшиеся действия).",
      "title": "When I was a child",
      "sentences": [
        "When I was a child, we used to live in a small village.",
        "Our house used to have a big garden.",
        "Every summer my grandfather would grow tomatoes.",
        "On warm evenings we would sit outside and watch the stars.",
        "I used to be afraid of the dark, but my brother would tell me funny stories.",
        "There used to be a river near our home.",
        "We would swim there almost every day.",
        "Those days are gone, but the memories are still bright."
      ],
      "translation": "Когда я был ребёнком, мы жили в маленькой деревне. У нашего дома был большой сад. Каждое лето мой дедушка выращивал помидоры. Тёплыми вечерами мы сидели на улице и смотрели на звёзды. Я боялся темноты, но брат рассказывал мне смешные истории. Рядом с домом была речка. Мы купались там почти каждый день. Те дни прошли, но воспоминания всё ещё яркие."
    },
    "drag": {
      "intro": "Соедини конструкцию с тем, для чего она годится.",
      "pairs": [
        [
          "used to live",
          "состояние в прошлом (можно)"
        ],
        [
          "would visit",
          "повторявшееся действие (можно)"
        ],
        [
          "would live ✗",
          "ошибка: would + состояние"
        ],
        [
          "didn't use to",
          "отрицание (use без d)"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — пять вопросов про «раньше я». Поехали!",
      "items": [
        {
          "q": "«Раньше я жил в большом городе» —",
          "opts": [
            "I would live in a big city",
            "I used to live in a big city",
            "I am used to live in a big city"
          ],
          "answer": 1,
          "explain": "жить — состояние → <b>used to live</b>, would нельзя."
        },
        {
          "q": "«Каждое лето мы ездили к морю» (повтор) —",
          "opts": [
            "Every summer we would go to the sea",
            "Every summer we would going to the sea",
            "Every summer we would knew the sea"
          ],
          "answer": 0,
          "explain": "повтор → would + базовая → <b>would go</b>."
        },
        {
          "q": "«Ты раньше играл на пианино?» —",
          "opts": [
            "Did you used to play the piano?",
            "Did you use to play the piano?",
            "Do you use to play the piano?"
          ],
          "answer": 1,
          "explain": "после did → <b>use to</b> (без d)."
        },
        {
          "q": "«У меня раньше были длинные волосы» —",
          "opts": [
            "I would have long hair",
            "I used to have long hair"
          ],
          "answer": 1,
          "explain": "иметь — состояние → <b>used to have</b>, не would."
        },
        {
          "q": "«Раньше я не любил овощи» —",
          "opts": [
            "I didn't used to like vegetables",
            "I didn't use to like vegetables",
            "I wouldn't like vegetables"
          ],
          "answer": 1,
          "explain": "отрицание через didn't → <b>use to</b> (без d)."
        }
      ]
    },
    "picture": {
      "intro": "Опиши по старой фотографии, как было раньше.",
      "emoji": "📷🏡🌳",
      "prompt": "Опиши, как было раньше. Используй used to (состояния и привычки) и would (повторявшиеся действия).",
      "hint": "Используй: We used to live here; There used to be a garden; Every summer we would play outside.",
      "example": "We used to live in this old house. There used to be a big tree in the garden. Every summer the children would play outside until dark.",
      "img": "img/b1/day-06.jpg",
      "credit": "Фото: whatsthatpicture · Public Domain · <a href=\"https://www.flickr.com/photos/24469639@N00/8322349305\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Расскажи о своём детстве — каким ты был(а) и что делал(а) регулярно.",
      "prompt": "Напиши 4–6 предложений про своё детство. Используй used to для привычек и состояний и would для повторявшихся действий.",
      "hint": "Структуры: As a child I used to… ; I used to be… ; Every weekend we would… ; There used to be…",
      "example": "As a child, I used to live in a small town by a lake. I used to be quite shy and quiet. Every weekend my family would visit my grandparents. My grandmother would always bake an apple pie. There used to be a forest behind their house, and we would spend hours there. Those were happy days."
    }
  },
  "7": {
    "day": 7,
    "week": "01",
    "level": "B1",
    "themeRu": "Повторение №1",
    "themeEn": "Review 1",
    "intro": "Первая неделя B1 позади — и это уже целая глава за плечами. Сегодня новой грамматики не будет: мы <b>собираем всё вместе</b> и проверяем, что держится крепко. За неделю ты обжил(а) целый «прошлый этаж» английского: <b>Past Perfect</b> (had done — что случилось раньше), <b>рассказ в три слоя</b> (was doing / did / had done), <b>PPC против Present Perfect</b> (процесс или результат) и <b>used to / would</b> (как было когда-то). Впереди много практики, небольшая история и тест. Это твой день уверенности — начнём.",
    "introAudio": "Первая неделя B1 позади — и это уже целая глава за плечами. Сегодня новой грамматики не будет: мы собираем всё вместе и проверяем, что держится крепко. За неделю ты обжил целый прошлый этаж английского: Past Perfect, had done, что случилось раньше; рассказ в три слоя, was doing, did, had done; PPC против Present Perfect, процесс или результат; и used to и would, как было когда-то. Впереди много практики, небольшая история и тест. Это твой день уверенности — начнём.",
    "goals": [
      "уверенно ставить <b>had + 3-ю форму</b> для самого раннего события",
      "рассказывать историю в трёх слоях: фон, событие, предыстория",
      "выбирать <b>been doing</b> (процесс) или <b>done</b> (результат) без раздумий",
      "вспоминать прошлое через <b>used to</b> и <b>would</b> и не путать их"
    ],
    "learned": [
      "Уверенно поставил(а) <b>had + 3-ю форму</b> для самого раннего события",
      "Рассказал(а) историю в трёх слоях: фон, событие, предыстория",
      "Выбрал(а) <b>been doing</b> (процесс) или <b>done</b> (результат) без раздумий",
      "Вспомнил(а) прошлое через <b>used to</b> и <b>would</b> и не спутал(а) их"
    ],
    "review": {
      "intro": "Сегодня повторение — это основа дня, поэтому начнём сразу с большой разминки по всей неделе. Не спеши: каждое задание возвращает один из узлов недели. Always-on: следи за 3-й формой и артиклями a/the.",
      "introAudio": "Сегодня повторение — это основа дня, поэтому начнём сразу с большой разминки по всей неделе. Не спеши: каждое задание возвращает один из узлов недели. Следи за третьей формой и артиклями a и the.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> что случилось РАНЬШЕ — то в Past Perfect (had + 3-я форма).",
          "q": "«Когда я пришёл, поезд уже ушёл» —",
          "opts": [
            "When I arrived, the train already left",
            "When I arrived, the train had already left",
            "When I had arrived, the train left"
          ],
          "answer": 1,
          "explain": "поезд ушёл РАНЬШЕ моего прихода → раннее событие в Past Perfect: <b>had already left</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> фон (что шло) — Past Continuous, факт-событие — Past Simple.",
          "q": "«Я готовил ужин, когда зазвонил телефон» —",
          "opts": [
            "I cooked dinner when the phone was ringing",
            "I was cooking dinner when the phone rang",
            "I have cooked dinner when the phone rang"
          ],
          "answer": 1,
          "explain": "фон → was cooking; короткое событие → <b>rang</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> процесс или результат? «всю ночь» — процесс.",
          "q": "«Ты выглядишь уставшим. — Я учился всю ночь» —",
          "opts": [
            "I have studied all night",
            "I have been studying all night",
            "I study all night"
          ],
          "answer": 1,
          "explain": "видимый след + длительность → процесс → <b>have been studying</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> «жить» — состояние. would или used to?",
          "q": "«Раньше мы жили у моря» —",
          "opts": [
            "We would live by the sea",
            "We used to live by the sea"
          ],
          "answer": 1,
          "explain": "жить — состояние → только <b>used to live</b> (would нельзя)."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери предложение с Past Perfect (раннее событие).",
          "q": "Собери: «Она уже ушла, когда я позвонил»",
          "want": "She had already left when I called",
          "answer": "She had already left when I called"
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши прошлую привычку через used to. play → play (базовая).",
          "q": "В детстве я играл в футбол каждый день.",
          "accept": [
            "as a child i used to play football every day",
            "i used to play football every day",
            "as a child i used to play football every day.",
            "when i was a child i used to play football every day",
            "when i was a child i used to play football every day."
          ],
          "placeholder": "As a child I used to play ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Сборка 1 · Past Perfect",
        "title": "<em>had + 3-я форма</em> — что было раньше",
        "paras": [
          "Первый узел недели. Когда в прошлом было <b>два</b> события, то, что случилось <b>раньше</b>, ставим в Past Perfect: <b>had + 3-я форма</b>. Второе, более позднее, — в обычном Past Simple.",
          "<b>When I arrived, the train had already left.</b> Сначала ушёл поезд (had left), потом пришёл я (arrived). Past Perfect — это «прошлое до прошлого».",
          "Ловушка: не вешай had на всё подряд. Если <b>before / after</b> уже задают порядок, ранний had не обязателен: <b>After he finished, he went home</b> — тоже верно."
        ],
        "audio": "Первый узел недели. Когда в прошлом было два события, то, что случилось раньше, ставим в Past Perfect: had плюс третья форма. Второе, более позднее, — в обычном Past Simple. When I arrived, the train had already left. Сначала ушёл поезд, потом пришёл я. Ловушка: не вешай had на всё подряд. Если before или after уже задают порядок, ранний had не обязателен.",
        "table": {
          "rows": [
            [
              "раннее событие",
              "had + 3-я форма (had left)"
            ],
            [
              "позднее событие",
              "Past Simple (arrived)"
            ],
            [
              "after/before",
              "порядок уже ясен — had не обязателен"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Когда мы добрались до кино, фильм уже начался.",
            "en": "When we got to the cinema, the film <b>had</b> already <b>started</b>.",
            "gloss": "началось раньше → had started",
            "say": "When we got to the cinema, the film had already started."
          },
          {
            "ru": "Я не смог войти, потому что забыл ключи.",
            "en": "I couldn't get in because I <b>had forgotten</b> my keys.",
            "gloss": "забыл раньше → had forgotten",
            "say": "I couldn't get in because I had forgotten my keys."
          }
        ],
        "mistakes": [
          {
            "wrong": "When I arrived, the train already left",
            "right": "When I arrived, the train <b>had</b> already <b>left</b>",
            "why": "раннее событие → Past Perfect: had left"
          }
        ],
        "mnemonic": "⏪ Самое раннее событие → had + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> что случилось первым — в Past Perfect.",
            "q": "«Дом был пуст: все уже уехали» —",
            "opts": [
              "The house was empty: everyone already left",
              "The house was empty: everyone had already left"
            ],
            "answer": 1,
            "explain": "уехали раньше → <b>had already left</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши с Past Perfect. eat → eaten.",
            "q": "Я не был голоден, потому что уже поел.",
            "accept": [
              "i wasn't hungry because i had already eaten",
              "i was not hungry because i had already eaten"
            ],
            "placeholder": "I wasn't hungry because I had ..."
          }
        ]
      },
      {
        "eyebrow": "Сборка 2 · нарратив",
        "title": "История в три слоя: <em>was doing · did · had done</em>",
        "paras": [
          "Второй узел. Живой рассказ держится на трёх слоях времени. <b>Фон</b> (что уже шло) — Past Continuous: <b>was doing</b>. <b>Событие</b> (что произошло) — Past Simple: <b>did</b>. <b>Предыстория</b> (что случилось ещё раньше) — Past Perfect: <b>had done</b>.",
          "<b>I was walking home when I met an old friend. I hadn't seen him for years.</b> Шёл (фон) → встретил (событие) → не видел до этого (предыстория). Один русский «шёл» — три английских слоя."
        ],
        "audio": "Второй узел. Живой рассказ держится на трёх слоях. Фон, что уже шло, — Past Continuous, was doing. Событие, что произошло, — Past Simple, did. Предыстория, что случилось ещё раньше, — Past Perfect, had done. I was walking home when I met an old friend. I hadn't seen him for years. Шёл, встретил, не видел до этого — три слоя.",
        "table": {
          "rows": [
            [
              "фон (что шло)",
              "Past Continuous — was doing"
            ],
            [
              "событие (что случилось)",
              "Past Simple — did"
            ],
            [
              "предыстория (ещё раньше)",
              "Past Perfect — had done"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я смотрел фильм, когда отключился свет.",
            "en": "I <b>was watching</b> a film when the lights <b>went</b> out.",
            "gloss": "фон + событие",
            "say": "I was watching a film when the lights went out."
          },
          {
            "ru": "Она устала: она работала весь день и ещё не пообедала.",
            "en": "She was tired: she <b>had worked</b> all day and <b>hadn't had</b> lunch.",
            "gloss": "предыстория → had done",
            "say": "She was tired: she had worked all day and hadn't had lunch."
          }
        ],
        "mistakes": [
          {
            "wrong": "I walked home when I was meeting a friend",
            "right": "I <b>was walking</b> home when I <b>met</b> a friend",
            "why": "длинный фон → was walking; короткое событие → met"
          }
        ],
        "mnemonic": "🎬 Фон was doing · событие did · предыстория had done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> длинный фон vs короткое событие.",
            "q": "«Они ужинали, когда я пришёл» —",
            "opts": [
              "They had dinner when I was arriving",
              "They were having dinner when I arrived",
              "They have dinner when I arrived"
            ],
            "answer": 1,
            "explain": "фон → were having; событие → <b>arrived</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение с фоном и событием.",
            "q": "Собери: «Я готовил, когда зазвонил телефон»",
            "want": "I was cooking when the phone rang",
            "answer": "I was cooking when the phone rang"
          }
        ]
      },
      {
        "eyebrow": "Сборка 3 · процесс vs результат",
        "title": "<em>been doing</em> vs <em>done</em>",
        "paras": [
          "Третий узел — главная тонкость недели. <b>have been doing</b> = процесс, чем занимался, как долго (закончено или нет — неважно). <b>have done</b> = результат, что сделано, сколько.",
          "<b>I've been reading this book</b> (ещё читаю) ≠ <b>I've read this book</b> (прочитал). И помни вторую ловушку: глаголы-состояния (know, have, like) <b>не идут</b> в continuous — <b>I have known her for years</b>, не «been knowing»."
        ],
        "audio": "Третий узел — главная тонкость недели. have been doing — это процесс, чем занимался, как долго. have done — это результат, что сделано, сколько. I've been reading this book, ещё читаю, не равно I've read this book, прочитал. И помни: глаголы-состояния, know, have, like, не идут в continuous. I have known her for years, не been knowing.",
        "table": {
          "rows": [
            [
              "have been doing",
              "процесс / как долго"
            ],
            [
              "have done",
              "результат / сколько"
            ],
            [
              "know, have, like",
              "только simple (have known)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я весь день убирался (и ещё убираюсь).",
            "en": "I've <b>been cleaning</b> all day.",
            "gloss": "процесс",
            "say": "I have been cleaning all day."
          },
          {
            "ru": "Я убрал всю квартиру.",
            "en": "I've <b>cleaned</b> the whole flat.",
            "gloss": "результат",
            "say": "I have cleaned the whole flat."
          },
          {
            "ru": "Я знаю его с университета.",
            "en": "I've <b>known</b> him since university.",
            "gloss": "состояние → simple",
            "say": "I have known him since university."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have been knowing her for years",
            "right": "I have <b>known</b> her for years",
            "why": "know — состояние, без continuous"
          }
        ],
        "mnemonic": "⏳ Процесс → been doing · результат → done · состояние → simple.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> дочитал или ещё читаю?",
            "q": "«Я прочитал эту книгу — отличный финал» —",
            "opts": [
              "I've been reading this book",
              "I've read this book"
            ],
            "answer": 1,
            "explain": "знаю финал = дочитал → результат → <b>have read</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши процесс. wait → been waiting.",
            "q": "Я жду здесь уже час.",
            "accept": [
              "i have been waiting here for an hour",
              "i've been waiting here for an hour"
            ],
            "placeholder": "I have been waiting here ..."
          }
        ]
      },
      {
        "eyebrow": "Сборка 4 · как было раньше",
        "title": "<em>used to</em> и <em>would</em>",
        "paras": [
          "Четвёртый узел. <b>used to + базовая</b> — привычки и состояния прошлого, которых больше нет (used to live, used to be). <b>would + базовая</b> — повторявшиеся действия в рассказе (every summer we would go).",
          "Ключевая ловушка: <b>would не годится для состояний</b>. «Раньше я жил там» — это <b>I used to live there</b>, а не «would live». Сомневаешься — бери used to: оно работает всегда."
        ],
        "audio": "Четвёртый узел. used to плюс базовая — привычки и состояния прошлого, которых больше нет: used to live, used to be. would плюс базовая — повторявшиеся действия в рассказе: every summer we would go. Ключевая ловушка: would не годится для состояний. Раньше я жил там — это I used to live there, а не would live. Сомневаешься — бери used to.",
        "table": {
          "rows": [
            [
              "used to + базовая",
              "привычки И состояния (всегда ок)"
            ],
            [
              "would + базовая",
              "только повторявшиеся действия"
            ],
            [
              "✗ would live / would be",
              "состояния → used to"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Раньше я был очень застенчивым.",
            "en": "I <b>used to be</b> very shy.",
            "gloss": "состояние → used to",
            "say": "I used to be very shy."
          },
          {
            "ru": "Каждые выходные мы навещали бабушку.",
            "en": "Every weekend we <b>would visit</b> grandma.",
            "gloss": "действие, повтор → would",
            "say": "Every weekend we would visit grandma."
          }
        ],
        "mistakes": [
          {
            "wrong": "I would have a bike when I was young",
            "right": "I <b>used to have</b> a bike when I was young",
            "why": "иметь — состояние → used to, не would"
          }
        ],
        "mnemonic": "🕰️ used to — всё прошлое; would — только повторявшиеся действия.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> состояние или действие?",
            "q": "«Раньше у неё были длинные волосы» —",
            "opts": [
              "She would have long hair",
              "She used to have long hair"
            ],
            "answer": 1,
            "explain": "иметь — состояние → <b>used to have</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери воспоминание с would.",
            "q": "Собери: «Каждое лето мы ходили в горы»",
            "want": "Every summer we would go to the mountains",
            "answer": "Every summer we would go to the mountains"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Маленькая история — слушай, как в ней работают все времена недели: фон, событие, предыстория и немного ностальгии.",
      "lines": [
        {
          "who": "A",
          "en": "I was waiting at the station when I saw a familiar face.",
          "ru": "Я ждал на вокзале, когда увидел знакомое лицо."
        },
        {
          "who": "B",
          "en": "Who was it?",
          "ru": "Кто это был?"
        },
        {
          "who": "A",
          "en": "An old school friend! I hadn't seen him for ten years.",
          "ru": "Старый школьный друг! Я не видел его десять лет."
        },
        {
          "who": "B",
          "en": "Wow! Did you recognise him at once?",
          "ru": "Ого! Ты сразу его узнал?"
        },
        {
          "who": "A",
          "en": "Almost. We used to sit together in class and would share our lunch every day.",
          "ru": "Почти. Мы сидели вместе в классе и каждый день делились обедом."
        },
        {
          "who": "B",
          "en": "Lovely. Have you been keeping in touch since then?",
          "ru": "Прелесть. Вы поддерживали связь с тех пор?"
        },
        {
          "who": "A",
          "en": "Not really, but we've already arranged to meet next week.",
          "ru": "Не особо, но мы уже договорились встретиться на следующей неделе."
        }
      ]
    },
    "dialogue": {
      "intro": "Короткое интервью «о прошлом и настоящем». Нажми на реплику, чтобы услышать. Замечай все времена недели сразу.",
      "lines": [
        {
          "who": "Host",
          "name": "Host",
          "side": "left",
          "en": "You've been living in this town for years. How has it changed?",
          "ru": "Вы живёте в этом городе много лет. Как он изменился?",
          "words": [
            [
              "been living",
              "живёте (процесс)"
            ]
          ]
        },
        {
          "who": "Guest",
          "name": "Guest",
          "side": "right",
          "en": "A lot. There used to be a market here, but it closed before I moved.",
          "ru": "Сильно. Здесь был рынок, но он закрылся ещё до моего переезда.",
          "words": [
            [
              "used to be",
              "когда-то был"
            ],
            [
              "before I moved",
              "до моего переезда"
            ]
          ]
        },
        {
          "who": "Host",
          "name": "Host",
          "side": "left",
          "en": "And what have you been doing lately?",
          "ru": "А чем вы занимались в последнее время?",
          "words": [
            [
              "lately",
              "в последнее время"
            ]
          ]
        },
        {
          "who": "Guest",
          "name": "Guest",
          "side": "right",
          "en": "I've been writing a book about the old days. I've already finished three chapters.",
          "ru": "Я пишу книгу о былых временах. Я уже закончил три главы.",
          "words": [
            [
              "the old days",
              "былые времена"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова и связки, которые держат рассказ о прошлом. Повтори вслух.",
      "items": [
        {
          "en": "already",
          "ru": "уже",
          "ex": "The film had already started."
        },
        {
          "en": "by the time",
          "ru": "к тому времени как",
          "ex": "By the time we arrived, it had stopped."
        },
        {
          "en": "familiar",
          "ru": "знакомый",
          "ex": "I saw a familiar face."
        },
        {
          "en": "to recognise",
          "ru": "узнавать (в лицо)",
          "ex": "I didn't recognise him at first."
        },
        {
          "en": "to keep in touch",
          "ru": "поддерживать связь",
          "ex": "We've kept in touch for years."
        },
        {
          "en": "to arrange",
          "ru": "договариваться, устраивать",
          "ex": "We've arranged to meet on Friday."
        },
        {
          "en": "the old days",
          "ru": "былые времена",
          "ex": "I miss the old days."
        },
        {
          "en": "to change",
          "ru": "меняться, изменять",
          "ex": "The town has changed a lot."
        },
        {
          "en": "since then",
          "ru": "с тех пор",
          "ex": "I haven't seen her since then."
        },
        {
          "en": "to miss",
          "ru": "скучать (по чему-то)",
          "ex": "I miss my old school."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай рассказ, где встречаются все времена недели. Постарайся заметить каждое.",
      "title": "An old photograph",
      "sentences": [
        "Yesterday I found an old photograph in a box.",
        "It showed the small house where we used to live.",
        "When I was a child, we would spend every summer there.",
        "I was looking at the photo when my sister called.",
        "She hadn't seen it for years, so I sent it to her.",
        "We've been talking about those days all evening.",
        "I've already promised to visit the old place next month.",
        "Some memories never really leave us."
      ],
      "translation": "Вчера я нашёл в коробке старую фотографию. На ней был маленький дом, где мы раньше жили. В детстве мы проводили там каждое лето. Я смотрел на фото, когда позвонила сестра. Она не видела его много лет, поэтому я отправил его ей. Мы весь вечер говорим о тех днях. Я уже пообещал съездить в старое место в следующем месяце. Некоторые воспоминания никогда по-настоящему нас не покидают."
    },
    "drag": {
      "intro": "Соедини форму с её ролью в рассказе о прошлом.",
      "pairs": [
        [
          "had left",
          "событие раньше другого (предыстория)"
        ],
        [
          "was cooking",
          "фон, что уже шло"
        ],
        [
          "have been working",
          "процесс до сейчас"
        ],
        [
          "used to live",
          "состояние в прошлом, теперь нет"
        ]
      ]
    },
    "quiz": {
      "intro": "Большой тест недели — шесть вопросов по всей неделе 1. Покажи, что всё на месте!",
      "items": [
        {
          "q": "«Когда мы пришли, концерт уже закончился» —",
          "opts": [
            "When we came, the concert already ended",
            "When we came, the concert had already ended",
            "When we had come, the concert ended"
          ],
          "answer": 1,
          "explain": "закончился раньше → Past Perfect: <b>had already ended</b>."
        },
        {
          "q": "«Я читал, когда погас свет» —",
          "opts": [
            "I read when the light went out",
            "I was reading when the light went out",
            "I have read when the light went out"
          ],
          "answer": 1,
          "explain": "фон → was reading; событие → <b>went out</b>."
        },
        {
          "q": "«Я весь день красил забор (и ещё крашу)» —",
          "opts": [
            "I have painted the fence all day",
            "I have been painting the fence all day"
          ],
          "answer": 1,
          "explain": "процесс, длительность → <b>have been painting</b>."
        },
        {
          "q": "«Я знаю её с детства» —",
          "opts": [
            "I have been knowing her since childhood",
            "I have known her since childhood"
          ],
          "answer": 1,
          "explain": "know — состояние, без continuous → <b>have known</b>."
        },
        {
          "q": "«Раньше мы жили в деревне» —",
          "opts": [
            "We would live in a village",
            "We used to live in a village"
          ],
          "answer": 1,
          "explain": "жить — состояние → <b>used to live</b>."
        },
        {
          "q": "«Каждое утро дедушка выгуливал собаку» —",
          "opts": [
            "Every morning grandpa would walk the dog",
            "Every morning grandpa would walking the dog",
            "Every morning grandpa used to walking the dog"
          ],
          "answer": 0,
          "explain": "повтор + базовая форма → <b>would walk</b>."
        }
      ]
    },
    "picture": {
      "intro": "Опиши сцену из прошлого — что происходило и что было раньше.",
      "emoji": "🚉👥🕰️",
      "prompt": "Опиши маленькую историю по картинке. Используй фон (was doing), событие (did) и предысторию (had done).",
      "hint": "Используй: I was waiting when…; I saw…; I hadn't seen him for years; We used to…",
      "example": "I was waiting at the station when I saw an old friend. I hadn't seen him for years. We used to study together, and every weekend we would meet in this café.",
      "img": "img/b1/day-07.jpg",
      "credit": "Фото: jody.claborn · Public Domain · <a href=\"https://www.flickr.com/photos/130478877@N02/23062208029\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Финал недели — собери всё в одной маленькой истории из своей жизни.",
      "prompt": "Напиши 5–7 предложений: расскажи о встрече или моменте из прошлого. Используй Past Perfect, фон + событие, PPC и used to/would хотя бы по разу.",
      "hint": "Структуры: I was …ing when… ; I hadn't … for years ; We used to… ; Every… we would… ; Since then I've been…",
      "example": "Last month I was walking through my old neighbourhood when I met a childhood friend. I hadn't seen her since school. We used to live on the same street, and every afternoon we would play in the park. We had both changed a lot. Since then we've been texting every day, and we've already planned a trip together."
    }
  },
  "8": {
    "day": 8,
    "week": "02",
    "level": "B1",
    "themeRu": "Если бы сейчас",
    "themeEn": "Second conditional",
    "intro": "Со второй недели B1 начинается полоса фантазий — целая неделя про «если бы». Сегодня учимся говорить о том, чего на самом деле нет: <b>«Если бы у меня было больше времени, я бы выучил испанский»</b>. Это <b>second conditional</b> — воображаемое настоящее: ситуация, которая сейчас неправда, но мы её рисуем. У английского здесь аккуратная логика, и как только ты её увидишь, длинное русское «бы» перестанет тебя путать. Идём шаг за шагом.",
    "introAudio": "Со второй недели B1 начинается полоса фантазий — целая неделя про «если бы». Сегодня учимся говорить о том, чего на самом деле нет: «Если бы у меня было больше времени, я бы выучил испанский». Это second conditional — воображаемое настоящее: ситуация, которая сейчас неправда, но мы её рисуем. У английского здесь аккуратная логика, и как только ты её увидишь, длинное русское «бы» перестанет тебя путать. Идём шаг за шагом.",
    "goals": [
      "понять идею second conditional: воображаемое, нереальное настоящее",
      "строить формулу <b>if + Past Simple, … would + базовая</b>",
      "перестать дублировать «бы»: <b>would</b> стоит только в главной части",
      "уверенно говорить <b>If I were you, I would…</b> — давать совет"
    ],
    "learned": [
      "Понял(а) идею second conditional: воображаемое, нереальное настоящее",
      "Построил(а) формулу <b>if + Past Simple, … would + базовая</b>",
      "Перестал(а) дублировать «бы»: <b>would</b> стоит только в главной части",
      "Уверенно сказал(а) <b>If I were you, I would…</b> — дал(а) совет"
    ],
    "review": {
      "intro": "Сначала тёплая разминка. Возвращаем <b>Present Perfect</b> (наш always-on фундамент) и <b>first conditional</b> из A2 — реальное условие будущего. Это важно: сегодня мы поставим рядом реальное «если» и нереальное, и разница станет видна сразу.",
      "introAudio": "Сначала тёплая разминка. Возвращаем Present Perfect, наш always-on фундамент, и first conditional из A2 — реальное условие будущего. Это важно: сегодня мы поставим рядом реальное «если» и нереальное, и разница станет видна сразу.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери форму Present Perfect — опыт, важен результат, а не дата.",
          "q": "«Я уже закончил отчёт» —",
          "opts": [
            "I already finished the report",
            "I have already finished the report",
            "I am already finished the report"
          ],
          "answer": 1,
          "explain": "Present Perfect: have + 3-я форма, <b>have finished</b>; already стоит в середине."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> это first conditional — реальное условие будущего. Что идёт после if?",
          "q": "If it ___ tomorrow, we will stay at home.",
          "opts": [
            "will rain",
            "rains",
            "would rain"
          ],
          "answer": 1,
          "explain": "В first conditional после if — настоящее: <b>rains</b>, а will — только в главной части."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери реальное условие будущего (first conditional).",
          "q": "Собери: «Если ты позвонишь мне, я помогу»",
          "want": "If you call me I will help",
          "answer": "If you call me I will help"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · новый двигатель",
        "title": "Воображаемое сейчас — <em>second conditional</em>",
        "paras": [
          "Second conditional описывает <b>нереальное настоящее</b>: ситуацию, которой сейчас нет, но мы её представляем. «Если бы я был богатым…» — но я не богат. «Если бы у меня было время…» — но времени нет. Это фантазия, мечта, совет, гипотеза.",
          "Формула строгая и красивая: <b>if + Past Simple, … would + базовая форма</b>. После if мы ставим прошедшее время — но это не про прошлое! Это сигнал «не по-настоящему». А в главной части — <b>would</b> + глагол без окончаний.",
          "<b>If I had more time, I would learn Spanish.</b> = Если бы у меня было больше времени, я бы выучил испанский. Прошедшее <b>had</b> здесь означает не «вчера», а «представь, что сейчас так»."
        ],
        "audio": "Second conditional описывает нереальное настоящее: ситуацию, которой сейчас нет, но мы её представляем. Если бы я был богатым — но я не богат. Формула: if плюс Past Simple, запятая, would плюс базовая форма глагола. После if мы ставим прошедшее время, но это не про прошлое — это сигнал «не по-настоящему». If I had more time, I would learn Spanish.",
        "table": {
          "rows": [
            [
              "if-часть (условие)",
              "Past Simple — if I had, if she knew"
            ],
            [
              "главная часть (результат)",
              "would + базовая — I would buy, she would go"
            ],
            [
              "смысл",
              "нереальное / воображаемое настоящее"
            ],
            [
              "сокращённо",
              "I'd, she'd, we'd (would)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Если бы я знал её номер, я бы позвонил.",
            "en": "If I <b>knew</b> her number, I <b>would call</b> her.",
            "gloss": "knew (Past) + would call",
            "say": "If I knew her number, I would call her."
          },
          {
            "ru": "Если бы она училась усерднее, она бы сдала экзамен.",
            "en": "If she <b>studied</b> harder, she <b>would pass</b> the exam.",
            "gloss": "studied + would pass",
            "say": "If she studied harder, she would pass the exam."
          },
          {
            "ru": "Мы бы купили дом, если бы могли себе его позволить.",
            "en": "We <b>would buy</b> a house if we <b>could afford</b> it.",
            "gloss": "главная часть может идти первой",
            "say": "We would buy a house if we could afford it."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I have more time, I would travel.",
            "right": "If I <b>had</b> more time, I would travel.",
            "why": "нереальное настоящее → после if нужен Past Simple (had), а не have"
          },
          {
            "wrong": "If I knew, I will tell you.",
            "right": "If I knew, I <b>would</b> tell you.",
            "why": "к нереальному условию идёт would, а не will"
          }
        ],
        "mnemonic": "💭 if + прошедшее = «понарошку сейчас». Главная часть → would.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму после if для нереального настоящего.",
            "q": "If I ___ rich, I would travel the world.",
            "opts": [
              "am",
              "were",
              "will be"
            ],
            "answer": 1,
            "explain": "Нереальное настоящее: после if — прошедшее. С be обычно <b>were</b> для всех лиц."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери second conditional. Помни: would только во второй части.",
            "q": "Собери: «Если бы я знал ответ, я бы тебе сказал»",
            "want": "If I knew the answer I would tell you",
            "answer": "If I knew the answer I would tell you"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. afford = позволить себе по деньгам.",
            "q": "Если бы мы могли себе это позволить, мы бы это купили.",
            "accept": [
              "if we could afford it we would buy it",
              "if we could afford it, we would buy it"
            ],
            "placeholder": "If we could afford it, we ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · русская ловушка",
        "title": "Одно «бы» по-русски — но <em>would</em> только в главной",
        "paras": [
          "Вот главная ошибка русскоязычных. По-русски «бы» стоит в обеих частях: «Если бы я <b>имел</b> деньги, я <b>бы</b> путешествовал». Кажется логичным сказать дважды would: «If I <b>would have</b> money, I would travel». Это типичная ошибка — так говорить нельзя.",
          "Запомни границу: <b>would живёт ТОЛЬКО в главной части</b> (там, где результат). После <b>if</b> — простое прошедшее, без would: <b>if I had</b>, <b>if she knew</b>, <b>if they came</b>.",
          "Русское «бы» — это один сигнал гипотезы на всё предложение. В английском он делится: после if это форма прошедшего, а would — отдельно в результате. Не дублируй."
        ],
        "audio": "Вот главная ошибка русскоязычных. По-русски «бы» стоит в обеих частях: если бы я имел деньги, я бы путешествовал. Кажется логичным сказать дважды would. Так нельзя. Запомни: would живёт только в главной части, там, где результат. После if — простое прошедшее, без would: if I had, if she knew, if they came.",
        "table": {
          "rows": [
            [
              "❌ If I would have money…",
              "would после if — ошибка"
            ],
            [
              "✅ If I had money, I would…",
              "if + Past, would в результате"
            ],
            [
              "русское «бы» ×2",
              "английское would ×1 (только результат)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Если бы я знал, я бы тебе помог.",
            "en": "If I <b>knew</b>, I <b>would help</b> you.",
            "gloss": "if knew (не «would know»)",
            "say": "If I knew, I would help you."
          },
          {
            "ru": "Если бы они приезжали пораньше, мы бы ужинали вместе.",
            "en": "If they <b>came</b> earlier, we <b>would have</b> dinner together.",
            "gloss": "if came + would have",
            "say": "If they came earlier, we would have dinner together."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I would have money, I would buy a car.",
            "right": "If I <b>had</b> money, I would buy a car.",
            "why": "после if никогда нет would — только Past Simple (had)"
          },
          {
            "wrong": "If she would know the truth, she would be angry.",
            "right": "If she <b>knew</b> the truth, she would be angry.",
            "why": "одно «бы» по-русски ≠ два would; if → knew"
          }
        ],
        "mnemonic": "🚧 would не переходит границу if. После if — только прошедшее.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди ПРАВИЛЬНое предложение без лишнего would.",
            "q": "Где нет русской ловушки?",
            "opts": [
              "If I would have a car, I would drive to work.",
              "If I had a car, I would drive to work.",
              "If I would had a car, I would drive to work."
            ],
            "answer": 1,
            "explain": "После if — только <b>had</b>. would остаётся в главной части."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> исправь и впиши верный вариант. После if — прошедшее.",
            "q": "Исправь: «If I would speak French, I would live in Paris.»",
            "accept": [
              "if i spoke french i would live in paris",
              "if i spoke french, i would live in paris",
              "if i spoke french i'd live in paris",
              "if i spoke french, i'd live in paris"
            ],
            "placeholder": "If I ... French, I would live in Paris."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух, услышь сокращение I'd /aɪd/.",
            "target": "If I had time, I'd call you.",
            "sub": "Если бы у меня было время, я бы тебе позвонил.",
            "want": "if i had"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · совет",
        "title": "<em>If I were you</em> — на твоём месте я бы…",
        "paras": [
          "Самый частый и полезный second conditional — это совет: <b>If I were you, I would…</b> = «На твоём месте я бы…». Это мягкий, вежливый способ подсказать, что делать.",
          "Обрати внимание: <b>were</b>, а не was. В нереальных условиях с глаголом be грамматика учебников ставит <b>were для всех лиц</b>: if I <b>were</b>, if he <b>were</b>, if she <b>were</b>. «If I was…» звучит в разговоре, но <b>were</b> — правильная, экзаменационная форма, особенно в обороте про совет.",
          "<b>If I were you, I wouldn't worry.</b> = На твоём месте я бы не волновался. Это звучит куда естественнее английского, чем дословное «in your place»."
        ],
        "audio": "Самый частый и полезный second conditional — это совет: If I were you, I would… На твоём месте я бы… Обрати внимание: were, а не was. В нереальных условиях с глаголом be ставим were для всех лиц: if I were, if he were. If I were you, I wouldn't worry. На твоём месте я бы не волновался.",
        "table": {
          "rows": [
            [
              "If I were you, …",
              "На твоём месте я бы…"
            ],
            [
              "I would / I wouldn't",
              "я бы / я бы не"
            ],
            [
              "were — для всех лиц",
              "if I were, if he were, if she were"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "На твоём месте я бы поговорил с ней честно.",
            "en": "If I <b>were</b> you, I <b>would talk</b> to her honestly.",
            "gloss": "were + would talk",
            "say": "If I were you, I would talk to her honestly."
          },
          {
            "ru": "На твоём месте я бы не сдавался так быстро.",
            "en": "If I were you, I <b>wouldn't give up</b> so fast.",
            "gloss": "wouldn't = would not",
            "say": "If I were you, I wouldn't give up so fast."
          },
          {
            "ru": "Если бы он был честнее, люди бы ему доверяли.",
            "en": "If he <b>were</b> more honest, people <b>would trust</b> him.",
            "say": "If he were more honest, people would trust him."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I was you, I would wait.",
            "right": "If I <b>were</b> you, I would wait.",
            "why": "в обороте-совете правильнее were для всех лиц"
          },
          {
            "wrong": "In your place I would talk to him.",
            "right": "<b>If I were you</b>, I would talk to him.",
            "why": "англичане говорят «if I were you», а не «in your place»"
          }
        ],
        "mnemonic": "🪞 Совет = «If I were you, I would…» — твоё зеркало решений.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери экзаменационно верную форму be.",
            "q": "If I ___ you, I would take the job.",
            "opts": [
              "was",
              "were",
              "am"
            ],
            "answer": 1,
            "explain": "В нереальном условии-совете — <b>were</b> для всех лиц."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери совет.",
            "q": "Собери: «На твоём месте я бы не волновался»",
            "want": "If I were you I wouldn't worry",
            "answer": "If I were you I wouldn't worry"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши совет другу.",
            "q": "На твоём месте я бы поговорил с боссом.",
            "accept": [
              "if i were you i would talk to the boss",
              "if i were you, i would talk to the boss",
              "if i were you i'd talk to the boss"
            ],
            "placeholder": "If I were you, I ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · оттенки результата",
        "title": "В главной части: <em>would / could / might</em>",
        "paras": [
          "В результате не обязан стоять именно would. Можно добавить оттенок. <b>would</b> — «точно бы» (я бы сделал). <b>could</b> — «мог бы / была бы возможность». <b>might</b> — «возможно, бы» (не наверняка).",
          "<b>If I had a car, I would drive.</b> (точно). <b>If I had a car, I could drive you home.</b> (была бы возможность). <b>If I had a car, I might go to the coast.</b> (может быть).",
          "Все три — базовая форма глагола после would/could/might, без to и без окончаний: would <b>drive</b>, could <b>drive</b>, might <b>go</b>. А условие после if остаётся прежним — Past Simple."
        ],
        "audio": "В результате не обязан стоять именно would. would — точно бы. could — мог бы, была бы возможность. might — возможно бы, не наверняка. If I had a car, I would drive. If I had a car, I could drive you home. If I had a car, I might go to the coast. После would, could, might — базовая форма без to.",
        "table": {
          "rows": [
            [
              "would + базовая",
              "точно бы (I would go)"
            ],
            [
              "could + базовая",
              "мог бы / была бы возможность (I could go)"
            ],
            [
              "might + базовая",
              "возможно, бы (I might go)"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Если бы у меня было больше денег, я бы мог путешествовать чаще.",
            "en": "If I had more money, I <b>could travel</b> more often.",
            "gloss": "could = была бы возможность",
            "say": "If I had more money, I could travel more often."
          },
          {
            "ru": "Если бы погода была лучше, мы бы, может, пошли на пляж.",
            "en": "If the weather were better, we <b>might go</b> to the beach.",
            "gloss": "might = возможно",
            "say": "If the weather were better, we might go to the beach."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I had time, I could to help.",
            "right": "If I had time, I <b>could help</b>.",
            "why": "после could — базовая форма без to"
          },
          {
            "wrong": "If I had time, I might helped.",
            "right": "If I had time, I <b>might help</b>.",
            "why": "после might — базовая форма, не прошедшее"
          }
        ],
        "mnemonic": "🎚️ would (точно) · could (возможность) · might (может быть) + базовая.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери оттенок «была бы возможность».",
            "q": "If I had a car, I ___ drive you to the airport.",
            "opts": [
              "could",
              "can",
              "could to"
            ],
            "answer": 0,
            "explain": "«была бы возможность» → <b>could</b> + базовая форма (drive), без to."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение с might.",
            "q": "Собери: «Если бы было теплее, мы бы, может, поплавали»",
            "want": "If it were warmer we might swim",
            "answer": "If it were warmer we might swim"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Живой диалог: две подруги мечтают вслух за чашкой кофе. Тапни строку для перевода, нажми на подсвеченное слово. Слушай, как second conditional звучит в реальной речи.",
      "lines": [
        {
          "who": "A",
          "name": "Lena",
          "side": "left",
          "en": "What would you do if you won the lottery?",
          "ru": "Что бы ты сделала, если бы выиграла в лотерею?",
          "words": [
            [
              "What would you do",
              "что бы ты сделала"
            ],
            [
              "won the lottery",
              "выиграла в лотерею"
            ]
          ]
        },
        {
          "who": "M",
          "name": "Mara",
          "side": "right",
          "en": "If I had that much money, I would quit my job and travel.",
          "ru": "Если бы у меня было столько денег, я бы бросила работу и путешествовала.",
          "words": [
            [
              "If I had",
              "если бы у меня было"
            ],
            [
              "I would quit",
              "я бы бросила"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Lena",
          "side": "left",
          "en": "Really? I wouldn't quit. I'd just buy a small house by the sea.",
          "ru": "Правда? Я бы не бросала. Я бы просто купила домик у моря.",
          "words": [
            [
              "I wouldn't quit",
              "я бы не бросала"
            ],
            [
              "I'd just buy",
              "я бы просто купила"
            ]
          ]
        },
        {
          "who": "M",
          "name": "Mara",
          "side": "right",
          "en": "If I were you, I would invest some of it too.",
          "ru": "На твоём месте я бы часть ещё и вложила.",
          "words": [
            [
              "If I were you",
              "на твоём месте"
            ],
            [
              "invest",
              "вкладывать"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Lena",
          "side": "left",
          "en": "Good idea. We could be rich and clever at the same time!",
          "ru": "Хорошая мысль. Мы могли бы быть богатыми и умными одновременно!",
          "words": [
            [
              "We could be",
              "мы могли бы быть"
            ],
            [
              "at the same time",
              "одновременно"
            ]
          ]
        }
      ]
    },
    "scene": {
      "intro": "Короткая сценка: коллега жалуется, а друг даёт совет через «If I were you…».",
      "lines": [
        {
          "who": "A",
          "en": "I'm so tired of this job, but I'm scared to leave.",
          "ru": "Я так устал от этой работы, но боюсь уйти."
        },
        {
          "who": "B",
          "en": "If I were you, I would look for something new first.",
          "ru": "На твоём месте я бы сначала поискал что-то новое."
        },
        {
          "who": "A",
          "en": "If I had more confidence, I would apply for better jobs.",
          "ru": "Если бы у меня было больше уверенности, я бы подавался на работу получше."
        },
        {
          "who": "B",
          "en": "You could start today. I would help you with the CV.",
          "ru": "Ты мог бы начать сегодня. Я бы помог тебе с резюме."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — лексика мечты, выбора и гипотезы (B1). Повтори вслух с примерами.",
      "items": [
        {
          "en": "imagine",
          "ru": "представлять, воображать",
          "ex": "Imagine you had a free year."
        },
        {
          "en": "win the lottery",
          "ru": "выиграть в лотерею",
          "ex": "If I won the lottery, I'd be calm."
        },
        {
          "en": "afford",
          "ru": "позволить себе (по деньгам)",
          "ex": "We couldn't afford a new car."
        },
        {
          "en": "quit (a job)",
          "ru": "бросить, уволиться",
          "ex": "She would quit if she could."
        },
        {
          "en": "abroad",
          "ru": "за границей / за границу",
          "ex": "If I were free, I'd live abroad."
        },
        {
          "en": "invest",
          "ru": "вкладывать (деньги)",
          "ex": "I would invest in my education."
        },
        {
          "en": "advice",
          "ru": "совет (неисчисляемое)",
          "ex": "Can I give you some advice?"
        },
        {
          "en": "confidence",
          "ru": "уверенность (в себе)",
          "ex": "With more confidence, I'd speak up."
        },
        {
          "en": "retire",
          "ru": "выйти на пенсию",
          "ex": "If I were rich, I'd retire early."
        },
        {
          "en": "daydream",
          "ru": "мечтать наяву",
          "ex": "I often daydream about travelling."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек фантазирует о выигрыше. Все условия — нереальные (second conditional).",
      "title": "If I won the lottery",
      "sentences": [
        "Sometimes I imagine what I would do if I won the lottery.",
        "First, I wouldn't quit my job immediately.",
        "If I had so much money, I would feel a bit lost.",
        "I would buy a small flat and travel for a year.",
        "If I were braver, I would even live abroad.",
        "I would invest some money so it didn't disappear.",
        "And if a friend needed help, I would always be there.",
        "But honestly, if I were truly happy now, money wouldn't change much."
      ],
      "translation": "Иногда я представляю, что бы я сделал, если бы выиграл в лотерею. Во-первых, я бы не бросил работу сразу. Если бы у меня было столько денег, я бы чувствовал себя немного потерянным. Я бы купил небольшую квартиру и год путешествовал. Если бы я был смелее, я бы даже жил за границей. Часть денег я бы вложил, чтобы они не исчезли. И если бы другу нужна была помощь, я бы всегда был рядом. Но честно: если бы я был по-настоящему счастлив сейчас, деньги мало что изменили бы."
    },
    "drag": {
      "intro": "Соедини половинки нереальных условий. После if — прошедшее, в результате — would.",
      "howto": "Перетащи английское начало к подходящему продолжению.",
      "pairs": [
        [
          "If I had more time,",
          "I would learn the guitar."
        ],
        [
          "If I were you,",
          "I wouldn't worry so much."
        ],
        [
          "If she knew the truth,",
          "she would be upset."
        ],
        [
          "If we could afford it,",
          "we would buy a house."
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по второму условному. Пять вопросов — и нереальное настоящее у тебя в кармане.",
      "items": [
        {
          "q": "«Если бы у меня было больше времени, я бы тебе помог» —",
          "opts": [
            "If I would have more time, I would help you.",
            "If I had more time, I would help you.",
            "If I have more time, I will help you."
          ],
          "answer": 1,
          "explain": "Нереальное настоящее: if + Past (had), would — в главной части."
        },
        {
          "q": "Выбери форму be: If I ___ you, I'd take the offer.",
          "opts": [
            "was",
            "were",
            "am"
          ],
          "answer": 1,
          "explain": "Совет-условие: <b>were</b> для всех лиц."
        },
        {
          "q": "Что идёт после if в нереальном условии?",
          "opts": [
            "would + базовая",
            "Past Simple",
            "will + базовая"
          ],
          "answer": 1,
          "explain": "После if — <b>Past Simple</b>; would живёт только в результате."
        },
        {
          "q": "«Если бы у меня была машина, я бы мог тебя подвезти» — оттенок «была бы возможность»:",
          "opts": [
            "I could drive you.",
            "I can drive you.",
            "I could to drive you."
          ],
          "answer": 0,
          "explain": "<b>could</b> + базовая форма без to."
        },
        {
          "q": "Где русская ловушка (лишнее would)?",
          "opts": [
            "If she studied more, she would pass.",
            "If she would study more, she would pass.",
            "If she knew this, she would be glad."
          ],
          "answer": 1,
          "explain": "После if нельзя would — только Past Simple (studied)."
        }
      ]
    },
    "picture": {
      "intro": "Опиши, о чём мечтает человек на картинке. Используй нереальные условия.",
      "emoji": "💭🏝️💰",
      "prompt": "Человек смотрит в окно и мечтает. Опиши 3–4 фразами: что бы он сделал, если бы… Используй If I had…, I would…",
      "hint": "Структуры: If I had more money, I would… ; If I were free, I would… ; I could…",
      "example": "She is daydreaming by the window. If she had more free time, she would travel the world. If she were braver, she would move abroad. She could start a new life.",
      "img": "img/b1/day-08.jpg",
      "credit": "Фото: Amsterdam free photos &amp; pictures of the Dutch city · CC0 · <a href=\"https://www.flickr.com/photos/104736837@N03/10891994476\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Теперь твоя очередь помечтать на английском.",
      "prompt": "Напиши 4–6 предложений: что бы ты сделал(а), если бы выиграл(а) в лотерею или имел(а) свободный год? Используй second conditional: If I had…, I would… ; If I were…",
      "hint": "Структуры: If I won the lottery, I would… ; If I had a free year, I would… ; If I were braver, I could… (после if — прошедшее, would — только в результате).",
      "example": "If I won the lottery, I wouldn't quit my job at once. First, I would invest some of the money. Then, if I had a free year, I would travel across Asia. If I were braver, I would even live abroad for a while. And if a friend needed help, I would always be there."
    }
  },
  "9": {
    "day": 9,
    "week": "02",
    "level": "B1",
    "themeRu": "Если бы тогда",
    "themeEn": "Third conditional",
    "intro": "Вчера мы мечтали о нереальном <b>настоящем</b>. Сегодня поворачиваем камеру в прошлое: говорим о том, чего тогда не случилось, но представляем, что было бы. <b>«Если бы я знал, я бы пришёл раньше»</b> — но я не знал и не пришёл. Это <b>third conditional</b> — язык сожалений, упрёков и тихого «эх, надо было». Формула длиннее вчерашней, но логика та же, просто сдвинутая на шаг в прошлое. Разберём спокойно.",
    "introAudio": "Вчера мы мечтали о нереальном настоящем. Сегодня поворачиваем камеру в прошлое: говорим о том, чего тогда не случилось, но представляем, что было бы. Если бы я знал, я бы пришёл раньше — но я не знал и не пришёл. Это third conditional — язык сожалений, упрёков и тихого «эх, надо было». Формула длиннее вчерашней, но логика та же, просто сдвинутая на шаг в прошлое. Разберём спокойно.",
    "goals": [
      "понять идею third conditional: нереальное прошлое, сожаление о том, чего не было",
      "строить формулу <b>if + had + 3-я форма, … would have + 3-я форма</b>",
      "не говорить «If I would have known» — после if только <b>had done</b>",
      "произносить <b>would've</b> /wʊdəv/ и слышать, что это не «would of»"
    ],
    "learned": [
      "Понял(а) идею third conditional: нереальное прошлое, сожаление о том, чего не было",
      "Построил(а) формулу <b>if + had + 3-я форма, … would have + 3-я форма</b>",
      "Перестал(а) говорить «If I would have known» — после if только <b>had done</b>",
      "Произнёс(ла) <b>would've</b> /wʊdəv/ и услышал(а), что это не «would of»"
    ],
    "review": {
      "intro": "Разминка перед прошлым. Возвращаем вчерашний <b>second conditional</b> (нереальное настоящее) и always-on <b>3-ю форму</b> — сегодня она работает дважды: и в условии, и в результате.",
      "introAudio": "Разминка перед прошлым. Возвращаем вчерашний second conditional, нереальное настоящее, и always-on третью форму — сегодня она работает дважды: и в условии, и в результате.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни вчерашнее — нереальное настоящее. Что после if?",
          "q": "If I ___ rich, I would help everyone. (сейчас, нереально)",
          "opts": [
            "were",
            "would be",
            "am"
          ],
          "answer": 0,
          "explain": "Second conditional: после if — прошедшее, с be → <b>were</b>; would — только в результате."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> always-on 3-я форма. Выбери правильное past participle.",
          "q": "3-я форма (past participle) глагола write —",
          "opts": [
            "wrote",
            "written",
            "writed"
          ],
          "answer": 1,
          "explain": "write → wrote (Past) → <b>written</b> (3-я форма). Сегодня нужна именно третья."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери нереальное настоящее (повторяем вчера).",
          "q": "Собери: «На твоём месте я бы подождал»",
          "want": "If I were you I would wait",
          "answer": "If I were you I would wait"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · новый двигатель",
        "title": "Нереальное прошлое — <em>third conditional</em>",
        "paras": [
          "Third conditional — про прошлое, которое не сбылось. Событие уже закончилось, изменить ничего нельзя, но мы представляем другой вариант: «если бы тогда было иначе, результат был бы другим».",
          "Формула: <b>if + had + 3-я форма, … would have + 3-я форма</b>. В условии — Past Perfect (had done), в результате — would have done. Третья форма стоит дважды, поэтому always-on повторение неправильных глаголов сегодня и пригодилось.",
          "<b>If I had known, I would have come earlier.</b> = Если бы я знал, я бы пришёл раньше. Реальность была обратной: я не знал → и не пришёл. Third conditional всегда подразумевает, что на самом деле всё было наоборот."
        ],
        "audio": "Third conditional — про прошлое, которое не сбылось. Событие закончилось, изменить нельзя, но мы представляем другой вариант. Формула: if плюс had плюс третья форма, запятая, would have плюс третья форма. If I had known, I would have come earlier. Если бы я знал, я бы пришёл раньше. На самом деле я не знал и не пришёл.",
        "table": {
          "rows": [
            [
              "if-часть (условие)",
              "had + 3-я форма — if I had known"
            ],
            [
              "главная часть (результат)",
              "would have + 3-я форма — I would have come"
            ],
            [
              "смысл",
              "нереальное прошлое (на самом деле было наоборот)"
            ],
            [
              "сокращённо",
              "if I'd known, I would've come"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Если бы она училась усерднее, она бы сдала экзамен.",
            "en": "If she <b>had studied</b> harder, she <b>would have passed</b> the exam.",
            "gloss": "had studied + would have passed",
            "say": "If she had studied harder, she would have passed the exam."
          },
          {
            "ru": "Если бы мы вышли раньше, мы бы не опоздали на поезд.",
            "en": "If we <b>had left</b> earlier, we <b>wouldn't have missed</b> the train.",
            "gloss": "wouldn't have = would not have",
            "say": "If we had left earlier, we wouldn't have missed the train."
          },
          {
            "ru": "Если бы ты мне сказал, я бы помог.",
            "en": "If you <b>had told</b> me, I <b>would have helped</b>.",
            "gloss": "tell → told → told (3-я форма)",
            "say": "If you had told me, I would have helped."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I had know, I would have come.",
            "right": "If I had <b>known</b>, I would have come.",
            "why": "после had — 3-я форма (known), а не базовая know"
          },
          {
            "wrong": "If she studied harder, she would have passed.",
            "right": "If she <b>had studied</b> harder, she would have passed.",
            "why": "нереальное прошлое → в условии Past Perfect (had studied), не простое прошедшее"
          }
        ],
        "mnemonic": "⏪ Прошлое-«понарошку»: if + had done, would have done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму условия в нереальном прошлом.",
            "q": "If I ___ about the meeting, I would have been there.",
            "opts": [
              "had known",
              "would have known",
              "knew"
            ],
            "answer": 0,
            "explain": "В условии третьего типа — Past Perfect: <b>had known</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери третий условный. Три формы: had + 3-я, would have + 3-я.",
            "q": "Собери: «Если бы мы вышли раньше, мы бы успели на поезд»",
            "want": "If we had left earlier we would have caught the train",
            "answer": "If we had left earlier we would have caught the train"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. tell → told → told.",
            "q": "Если бы ты мне сказал, я бы помог.",
            "accept": [
              "if you had told me i would have helped",
              "if you had told me, i would have helped",
              "if you'd told me i would have helped",
              "if you'd told me, i would've helped"
            ],
            "placeholder": "If you had told me, I ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · русская ловушка",
        "title": "<em>If I would have known</em> — так нельзя",
        "paras": [
          "Это самая частая и самая въедливая ошибка русскоязычных в третьем условном. По-русски «бы» снова стоит в обеих частях: «Если бы я <b>знал</b>, я <b>бы</b> пришёл». И рука тянется написать «If I <b>would have</b> known…». Нет.",
          "Правило железное: <b>would have ТОЛЬКО в главной части</b>. После <b>if</b> — Past Perfect (had + 3-я форма), без would: <b>if I had known</b>, <b>if she had come</b>, <b>if they had asked</b>.",
          "Русское «бы» — один сигнал на всё нереальное предложение, и не важно, прошлое это или настоящее. В английском он не дублируется: had — в условии, would have — в результате. Запомни картинку: would have не пересекает слово if."
        ],
        "audio": "Это самая частая ошибка русскоязычных в третьем условном. По-русски «бы» стоит в обеих частях, и рука тянется написать If I would have known. Нельзя. Правило: would have только в главной части. После if — Past Perfect, had плюс третья форма, без would: if I had known, if she had come.",
        "table": {
          "rows": [
            [
              "❌ If I would have known…",
              "would после if — ошибка"
            ],
            [
              "✅ If I had known, I would have…",
              "if + had done, would have в результате"
            ],
            [
              "русское «бы» ×2",
              "would have ×1 (только результат)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Если бы я знал твой адрес, я бы написал тебе.",
            "en": "If I <b>had known</b> your address, I <b>would have written</b> to you.",
            "gloss": "if had known (не «would have known»)",
            "say": "If I had known your address, I would have written to you."
          },
          {
            "ru": "Если бы они спросили, мы бы объяснили.",
            "en": "If they <b>had asked</b>, we <b>would have explained</b>.",
            "gloss": "if had asked + would have explained",
            "say": "If they had asked, we would have explained."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I would have known, I would have called.",
            "right": "If I <b>had known</b>, I would have called.",
            "why": "после if не бывает would — только Past Perfect (had known)"
          },
          {
            "wrong": "If she would have come, it would have been fun.",
            "right": "If she <b>had come</b>, it would have been fun.",
            "why": "одно «бы» по-русски ≠ два would have; if → had come"
          }
        ],
        "mnemonic": "🚧 would have не переходит границу if. После if — had + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди ПРАВИЛЬНое предложение без лишнего would.",
            "q": "Где нет русской ловушки?",
            "opts": [
              "If I would have known, I would have helped.",
              "If I had known, I would have helped.",
              "If I would had known, I would have helped."
            ],
            "answer": 1,
            "explain": "После if — только <b>had known</b>. would have остаётся в главной части."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> исправь и впиши верный вариант. После if — had + 3-я форма.",
            "q": "Исправь: «If they would have asked, I would have said yes.»",
            "accept": [
              "if they had asked i would have said yes",
              "if they had asked, i would have said yes",
              "if they'd asked i would have said yes"
            ],
            "placeholder": "If they ... asked, I would have said yes."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери, что верно после if.",
            "q": "После if в нереальном прошлом стоит…",
            "opts": [
              "would have + 3-я форма",
              "had + 3-я форма",
              "will have + 3-я форма"
            ],
            "answer": 1,
            "explain": "Условие нереального прошлого — Past Perfect: <b>had + 3-я форма</b>."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · произношение",
        "title": "<em>'d</em> = had, и <em>would've</em> ≠ «would of»",
        "paras": [
          "В живой речи третий условный сильно сокращается, и важно это слышать. <b>'d</b> может быть и had, и would: <b>If I'd known</b> = If I had known; <b>I'd have come</b> = I would have come. Контекст подскажет, что есть что.",
          "Главная звуковая ловушка: <b>would have</b> в речи звучит как <b>would've</b> /wʊdəv/ — и на слух это очень похоже на «would of». Но <b>of</b> здесь нет и быть не может: это всегда <b>have</b>. Пиши would have / would've, а не «would of».",
          "Слушай редукцию: <b>I would've /aɪ wʊdəv/, she would've /ʃi wʊdəv/, wouldn't have /wʊdənt əv/</b>. На письме — полная форма have, в речи — лёгкое «эв»."
        ],
        "audio": "В живой речи третий условный сильно сокращается. 'd может быть и had, и would: If I'd known — if I had known. I'd have come — I would have come. Главная ловушка: would have звучит как would've, вудэв, похоже на would of. Но of здесь нет, это всегда have. Слушай: I would've, she would've, wouldn't have.",
        "table": {
          "rows": [
            [
              "If I'd known…",
              "'d = had (условие)"
            ],
            [
              "I'd have come.",
              "'d = would (результат)"
            ],
            [
              "would've /wʊdəv/",
              "= would HAVE (не «would of»!)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Если бы я знал, я бы пришёл.",
            "en": "If I'd known, I'd have come.",
            "gloss": "первое 'd = had, второе 'd = would",
            "say": "If I'd known, I'd have come."
          },
          {
            "ru": "Ты бы мне помог.",
            "en": "You would've helped me.",
            "gloss": "would've = would have",
            "say": "You would've helped me."
          }
        ],
        "mistakes": [
          {
            "wrong": "I would of come.",
            "right": "I would <b>have</b> come.",
            "why": "would've — это would HAVE; «would of» не существует"
          }
        ],
        "mnemonic": "🔊 would've = would HAVE. Слышишь «эв» — пиши have.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери правильное письменное написание.",
            "q": "Как пишется would've полностью?",
            "opts": [
              "would of",
              "would have",
              "would has"
            ],
            "answer": 1,
            "explain": "would've = <b>would have</b>; «would of» — ошибка."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух, не теряя have — звучит как «вудэв».",
            "target": "If I had known, I would have come.",
            "sub": "Если бы я знал, я бы пришёл.",
            "want": "would have"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · оттенки и контраст",
        "title": "<em>could have / might have</em> и разница со вторым",
        "paras": [
          "Как и вчера, в результате можно поменять оттенок. <b>would have done</b> — точно бы сделал. <b>could have done</b> — мог бы сделать (была бы возможность). <b>might have done</b> — возможно, бы сделал (не наверняка).",
          "<b>If you had called, I could have helped.</b> = Если бы ты позвонил, я мог бы помочь. <b>If we'd left earlier, we might have caught the train.</b> = Может, и успели бы.",
          "Не путай второй и третий условный. <b>Second</b> — про сейчас: «If I had time, I would help» (времени нет сейчас). <b>Third</b> — про прошлое: «If I had had time, I would have helped» (тогда не было). Услышал would <b>have</b> + 3-я форма — речь о прошлом."
        ],
        "audio": "В результате можно поменять оттенок. would have done — точно бы сделал. could have done — мог бы. might have done — возможно бы. If you had called, I could have helped. Не путай второй и третий условный. Second — про сейчас: If I had time, I would help. Third — про прошлое: If I had had time, I would have helped.",
        "table": {
          "rows": [
            [
              "would have + 3-я форма",
              "точно бы сделал"
            ],
            [
              "could have + 3-я форма",
              "мог бы (была возможность)"
            ],
            [
              "might have + 3-я форма",
              "возможно, бы сделал"
            ],
            [
              "2nd vs 3rd",
              "had → сейчас · had had → тогда"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Если бы ты позвонил, я мог бы помочь.",
            "en": "If you had called, I <b>could have helped</b>.",
            "gloss": "could have = была возможность",
            "say": "If you had called, I could have helped."
          },
          {
            "ru": "Если бы мы вышли раньше, мы, может, и успели бы.",
            "en": "If we had left earlier, we <b>might have made</b> it.",
            "gloss": "might have = возможно",
            "say": "If we had left earlier, we might have made it."
          }
        ],
        "mistakes": [
          {
            "wrong": "If you had called, I could helped.",
            "right": "If you had called, I <b>could have helped</b>.",
            "why": "в нереальном прошлом нужен have: could HAVE + 3-я форма"
          }
        ],
        "mnemonic": "🎚️ could have / might have + 3-я форма — оттенки прошлого «бы».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери оттенок «была бы возможность» в прошлом.",
            "q": "If you had asked me, I ___ you the answer.",
            "opts": [
              "could have given",
              "could give",
              "can have given"
            ],
            "answer": 0,
            "explain": "Прошлое + «была возможность» → <b>could have given</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение с might have.",
            "q": "Собери: «Если бы мы вышли раньше, мы, может, успели бы»",
            "want": "If we had left earlier we might have made it",
            "answer": "If we had left earlier we might have made it"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Живой диалог: двое разбирают вчерашний неудачный вечер. Тапни строку для перевода. Здесь третий условный звучит как настоящие сожаления.",
      "lines": [
        {
          "who": "A",
          "name": "Ivan",
          "side": "left",
          "en": "We missed the concert. If we had left earlier, we wouldn't have been late.",
          "ru": "Мы пропустили концерт. Если бы мы вышли раньше, мы бы не опоздали.",
          "words": [
            [
              "missed",
              "пропустили"
            ],
            [
              "wouldn't have been late",
              "не опоздали бы"
            ]
          ]
        },
        {
          "who": "K",
          "name": "Kate",
          "side": "right",
          "en": "I know. And if you'd told me about the traffic, I would have driven another way.",
          "ru": "Знаю. И если бы ты сказал мне про пробки, я бы поехала другой дорогой.",
          "words": [
            [
              "if you'd told me",
              "если бы ты сказал мне"
            ],
            [
              "another way",
              "другой дорогой"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Ivan",
          "side": "left",
          "en": "If I had checked the map, I could have warned you.",
          "ru": "Если бы я посмотрел карту, я мог бы тебя предупредить.",
          "words": [
            [
              "had checked",
              "посмотрел бы"
            ],
            [
              "could have warned",
              "мог бы предупредить"
            ]
          ]
        },
        {
          "who": "K",
          "name": "Kate",
          "side": "right",
          "en": "Well, if we hadn't argued about it, the evening might have been nicer.",
          "ru": "Ну, если бы мы из-за этого не поспорили, вечер мог бы быть приятнее.",
          "words": [
            [
              "hadn't argued",
              "не поспорили бы"
            ],
            [
              "might have been",
              "мог бы быть"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Ivan",
          "side": "left",
          "en": "True. Next time we just leave on time, okay?",
          "ru": "Верно. В следующий раз просто выходим вовремя, хорошо?",
          "words": [
            [
              "on time",
              "вовремя"
            ],
            [
              "Next time",
              "в следующий раз"
            ]
          ]
        }
      ]
    },
    "scene": {
      "intro": "Короткая сценка: студент сожалеет о результате экзамена, друг отвечает.",
      "lines": [
        {
          "who": "A",
          "en": "I failed the test. If I had studied more, I would have passed.",
          "ru": "Я провалил тест. Если бы я больше готовился, я бы сдал."
        },
        {
          "who": "B",
          "en": "If you had asked me, I could have helped you prepare.",
          "ru": "Если бы ты попросил, я мог бы помочь тебе подготовиться."
        },
        {
          "who": "A",
          "en": "I know. If I hadn't been so lazy, things would have been different.",
          "ru": "Знаю. Если бы я не был таким ленивым, всё было бы иначе."
        },
        {
          "who": "B",
          "en": "Don't worry. You can take it again next month.",
          "ru": "Не переживай. Ты можешь пересдать в следующем месяце."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — лексика сожаления и последствий (B1). Повтори вслух с примерами.",
      "items": [
        {
          "en": "regret",
          "ru": "сожалеть / сожаление",
          "ex": "I regret not calling her."
        },
        {
          "en": "miss (the train)",
          "ru": "пропустить, опоздать (на)",
          "ex": "We missed the last train."
        },
        {
          "en": "warn",
          "ru": "предупредить",
          "ex": "Why didn't you warn me?"
        },
        {
          "en": "realise",
          "ru": "осознать, понять",
          "ex": "I didn't realise it was late."
        },
        {
          "en": "on time",
          "ru": "вовремя",
          "ex": "If we'd left on time, we wouldn't have missed it."
        },
        {
          "en": "mistake",
          "ru": "ошибка",
          "ex": "It was a small mistake."
        },
        {
          "en": "chance",
          "ru": "шанс, возможность",
          "ex": "I had a chance and missed it."
        },
        {
          "en": "avoid",
          "ru": "избежать",
          "ex": "We could have avoided the traffic."
        },
        {
          "en": "argue",
          "ru": "спорить, ссориться",
          "ex": "They argued all evening."
        },
        {
          "en": "turn out",
          "ru": "оказаться (в итоге)",
          "ex": "It turned out fine in the end."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек вспоминает один вечер и что было бы иначе. Везде третий условный — нереальное прошлое.",
      "title": "A different evening",
      "sentences": [
        "Last Friday everything went wrong.",
        "If I had charged my phone, I wouldn't have got lost.",
        "If the bus had come on time, I would have arrived for dinner.",
        "My friends had already left when I finally got there.",
        "If I had called them, they might have waited.",
        "I could have avoided all of it with a little planning.",
        "Still, I met a kind stranger who showed me the way home.",
        "So maybe, if the evening had been perfect, I wouldn't have met her."
      ],
      "translation": "В прошлую пятницу всё пошло не так. Если бы я зарядил телефон, я бы не заблудился. Если бы автобус пришёл вовремя, я бы успел к ужину. Друзья уже ушли, когда я наконец добрался. Если бы я им позвонил, они, может, и подождали бы. Я мог бы всего этого избежать, чуть лучше всё спланировав. И всё же я встретил добрую незнакомку, которая показала мне дорогу домой. Так что, может, если бы вечер был идеальным, я бы её не встретил."
    },
    "drag": {
      "intro": "Соедини половинки нереального прошлого. После if — had + 3-я форма, в результате — would have + 3-я форма.",
      "howto": "Перетащи английское начало к подходящему продолжению.",
      "pairs": [
        [
          "If I had known,",
          "I would have come earlier."
        ],
        [
          "If we had left on time,",
          "we wouldn't have missed the bus."
        ],
        [
          "If you had asked me,",
          "I could have helped."
        ],
        [
          "If she had studied,",
          "she would have passed."
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по третьему условному. Пять вопросов — и нереальное прошлое в кармане.",
      "items": [
        {
          "q": "«Если бы я знал, я бы пришёл раньше» —",
          "opts": [
            "If I would have known, I would have come earlier.",
            "If I had known, I would have come earlier.",
            "If I knew, I would come earlier."
          ],
          "answer": 1,
          "explain": "Нереальное прошлое: if + had done, would have done. После if нет would."
        },
        {
          "q": "Что стоит после if в третьем условном?",
          "opts": [
            "had + 3-я форма",
            "would have + 3-я форма",
            "Past Simple"
          ],
          "answer": 0,
          "explain": "Условие нереального прошлого — Past Perfect: <b>had + 3-я форма</b>."
        },
        {
          "q": "Как пишется would've полностью?",
          "opts": [
            "would of",
            "would have",
            "would has"
          ],
          "answer": 1,
          "explain": "would've = <b>would have</b>; «would of» — ошибка."
        },
        {
          "q": "«Если бы ты позвонил, я мог бы помочь» — оттенок «была возможность»:",
          "opts": [
            "I could have helped.",
            "I could helped.",
            "I can have helped."
          ],
          "answer": 0,
          "explain": "Прошлое + возможность → <b>could have + 3-я форма</b>."
        },
        {
          "q": "Где русская ловушка (лишнее would после if)?",
          "opts": [
            "If they had asked, we would have explained.",
            "If they would have asked, we would have explained.",
            "If she had come, it would have been fun."
          ],
          "answer": 1,
          "explain": "После if нельзя would — только had + 3-я форма (had asked)."
        }
      ]
    },
    "picture": {
      "intro": "Опиши, что пошло не так, по картинке, и что было бы иначе.",
      "emoji": "🚆😞⏰",
      "prompt": "Человек опоздал на поезд. Опиши 3–4 фразами, что было бы, если бы… Используй If … had …, … would have …",
      "hint": "Структуры: If he had left earlier, he would have caught the train. If he had checked the time, he wouldn't have missed it. He could have…",
      "example": "He missed his train and looks upset. If he had left home earlier, he would have caught it. If he had checked the timetable, he wouldn't have run. He could have avoided all this stress.",
      "img": "img/b1/day-09.jpg",
      "credit": "Фото: Queensland State Archives · Public Domain · <a href=\"https://www.flickr.com/photos/60455048@N02/38326667034\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Теперь твоя очередь — оглянись на один день, который пошёл не так.",
      "prompt": "Напиши 4–6 предложений о дне или решении, которое ты бы изменил(а). Что было бы иначе? Используй third conditional: If I had …, I would have …",
      "hint": "Структуры: If I had studied more, I would have passed. If I hadn't been late, I would have… I could have… (после if — had + 3-я форма; would have — только в результате).",
      "example": "A few years ago I refused a job abroad. If I had said yes, my life would have been very different. If I had been braver, I would have learned a new language and met new people. I could have grown a lot. Still, if I hadn't stayed here, I wouldn't have met my best friends. So maybe it turned out fine."
    }
  },
  "10": {
    "day": 10,
    "week": "02",
    "level": "B1",
    "themeRu": "Жаль, что…",
    "themeEn": "wish & if only",
    "intro": "Два дня ты строил(а) условия «если бы». Сегодня та же магия «понарошку» разворачивается к чувству — к <b>сожалению</b>. <b>«Жаль, что я не знаю»</b>, <b>«Вот бы у меня было больше времени»</b>, <b>«Лучше бы я этого не говорил»</b> — всё это по-английски идёт через <b>wish</b> и <b>if only</b>. Тут один аккуратный фокус: после wish английский сдвигает время на шаг назад, и русское настоящее «жаль, что не знаю» превращается в прошедшее <b>I wish I knew</b>. Покажу, как это устроено и почему логично.",
    "introAudio": "Два дня ты строил условия «если бы». Сегодня та же магия «понарошку» разворачивается к чувству — к сожалению. Жаль, что я не знаю. Вот бы у меня было больше времени. Лучше бы я этого не говорил. Всё это по-английски идёт через wish и if only. Тут один аккуратный фокус: после wish английский сдвигает время на шаг назад, и русское настоящее «жаль, что не знаю» превращается в прошедшее I wish I knew. Покажу, как это устроено и почему логично.",
    "goals": [
      "выражать сожаление о настоящем: <b>I wish I knew / had / could</b>",
      "выражать сожаление о прошлом: <b>I wish I had done</b>",
      "просить о смене чужого поведения: <b>I wish you would…</b>",
      "не калькировать русское настоящее: «жаль, что не знаю» → <b>I wish I knew</b>"
    ],
    "learned": [
      "Выразил(а) сожаление о настоящем: <b>I wish I knew / had / could</b>",
      "Выразил(а) сожаление о прошлом: <b>I wish I had done</b>",
      "Попросил(а) о смене чужого поведения: <b>I wish you would…</b>",
      "Перестал(а) калькировать русское настоящее: «жаль, что не знаю» → <b>I wish I knew</b>"
    ],
    "review": {
      "intro": "Разминка перед сожалениями. Возвращаем оба вчерашних условных — <b>second</b> (нереальное настоящее) и <b>third</b> (нереальное прошлое) — и always-on <b>неправильные глаголы</b>. Сегодня тот же сдвиг времён работает уже после wish.",
      "introAudio": "Разминка перед сожалениями. Возвращаем оба вчерашних условных — second, нереальное настоящее, и third, нереальное прошлое, и always-on неправильные глаголы. Сегодня тот же сдвиг времён работает уже после wish.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> второй условный (сейчас, нереально). Что после if?",
          "q": "If I ___ more money, I would travel more.",
          "opts": [
            "had",
            "would have",
            "have"
          ],
          "answer": 0,
          "explain": "Second conditional: if + Past Simple (<b>had</b>); would — только в результате."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> третий условный (прошлое, нереально). Что после if?",
          "q": "If she ___ harder, she would have passed.",
          "opts": [
            "studied",
            "had studied",
            "would study"
          ],
          "answer": 1,
          "explain": "Third conditional: if + had + 3-я форма (<b>had studied</b>)."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> always-on. Впиши 3-ю форму (past participle) глагола.",
          "q": "3-я форма глагола take —",
          "accept": [
            "taken"
          ],
          "placeholder": "take → took → ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · сожаление о сейчас",
        "title": "<em>I wish</em> + прошедшее — жаль, что сейчас не так",
        "paras": [
          "<b>wish</b> буквально значит «желать», но чаще всего им выражают сожаление: «жаль, что…», «вот бы…». Когда жаль о <b>настоящем</b> (что-то сейчас не так, как хотелось бы), используем <b>wish + Past Simple</b>.",
          "Логика та же, что во втором условном: прошедшее время = сигнал «понарошку, на самом деле наоборот». <b>I wish I knew</b> = жаль, что я не знаю (а хотелось бы знать сейчас). <b>I wish I had a car</b> = жаль, что у меня нет машины.",
          "С глаголом be в книжном английском ставят <b>were</b> для всех лиц: <b>I wish I were taller.</b> = жаль, что я невысокий. А «не могу» → <b>I wish I could</b>: <b>I wish I could come.</b> = жаль, что не могу прийти."
        ],
        "audio": "wish буквально значит «желать», но чаще им выражают сожаление: жаль, что… вот бы… Когда жаль о настоящем, используем wish плюс Past Simple. Логика как во втором условном: прошедшее время — сигнал «понарошку, на самом деле наоборот». I wish I knew — жаль, что я не знаю. I wish I had a car — жаль, что у меня нет машины. С be ставим were: I wish I were taller.",
        "table": {
          "rows": [
            [
              "I wish I knew…",
              "жаль, что я не знаю"
            ],
            [
              "I wish I had…",
              "жаль, что у меня нет"
            ],
            [
              "I wish I were…",
              "жаль, что я не… (be → were)"
            ],
            [
              "I wish I could…",
              "жаль, что я не могу"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Жаль, что я не знаю её имени.",
            "en": "I <b>wish</b> I <b>knew</b> her name.",
            "gloss": "знаю (сейчас) → knew",
            "say": "I wish I knew her name."
          },
          {
            "ru": "Жаль, что у меня нет больше времени.",
            "en": "I wish I <b>had</b> more time.",
            "gloss": "нет → had (понарошку)",
            "say": "I wish I had more time."
          },
          {
            "ru": "Жаль, что я не выше ростом.",
            "en": "I wish I <b>were</b> taller.",
            "gloss": "be → were для всех лиц",
            "say": "I wish I were taller."
          },
          {
            "ru": "Жаль, что я не могу тебе помочь.",
            "en": "I wish I <b>could</b> help you.",
            "gloss": "не могу → could",
            "say": "I wish I could help you."
          }
        ],
        "mistakes": [
          {
            "wrong": "I wish I have a car.",
            "right": "I wish I <b>had</b> a car.",
            "why": "после wish о настоящем — прошедшее: had, не have"
          },
          {
            "wrong": "I wish I can swim.",
            "right": "I wish I <b>could</b> swim.",
            "why": "can сдвигается в could"
          }
        ],
        "mnemonic": "🌙 wish о сейчас = шаг назад: I wish I knew / had / were / could.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сожаление о настоящем — шаг назад во времени.",
            "q": "«Жаль, что я не знаю ответа» —",
            "opts": [
              "I wish I know the answer.",
              "I wish I knew the answer.",
              "I wish I will know the answer."
            ],
            "answer": 1,
            "explain": "wish о настоящем → прошедшее: <b>knew</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму be после wish.",
            "q": "I wish I ___ more patient.",
            "opts": [
              "am",
              "were",
              "will be"
            ],
            "answer": 1,
            "explain": "С be после wish — <b>were</b> для всех лиц."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши сожаление. «не могу» → could.",
            "q": "Жаль, что я не могу прийти сегодня.",
            "accept": [
              "i wish i could come today",
              "i wish i could come tonight"
            ],
            "placeholder": "I wish I could ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · русская ловушка",
        "title": "Русское настоящее — английское прошедшее",
        "paras": [
          "Вот корень всех ошибок. По-русски сожаление о настоящем стоит в <b>настоящем</b>: «жаль, что я не <b>знаю</b>», «жаль, что у меня <b>нет</b> времени». И рука пишет «I wish I <b>know</b>», «I wish I <b>have</b>». По-английски так нельзя.",
          "После wish английский всегда делает <b>шаг назад во времени</b>: сожаление о настоящем → прошедшее. «не знаю (сейчас)» → <b>I wish I knew</b>. «нет (сейчас)» → <b>I wish I had</b>. Сдвиг обязателен, даже если по-русски глагол в настоящем.",
          "Усиленная версия — <b>if only</b> («если бы только», «вот бы»). Она звучит эмоциональнее: <b>If only I knew!</b> = Вот бы я знал! Грамматика та же — прошедшее после if only."
        ],
        "audio": "Вот корень всех ошибок. По-русски сожаление о настоящем стоит в настоящем: жаль, что я не знаю. И рука пишет I wish I know. Нельзя. После wish английский всегда делает шаг назад во времени: не знаю сейчас — I wish I knew. Нет сейчас — I wish I had. Усиленная версия — if only: If only I knew! Грамматика та же, прошедшее.",
        "table": {
          "rows": [
            [
              "рус. «жаль, что не знаю» (наст.)",
              "англ. I wish I knew (прош.)"
            ],
            [
              "❌ I wish I have / know",
              "✅ I wish I had / knew"
            ],
            [
              "If only I knew!",
              "Вот бы я знал! (эмоц.)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Жаль, что я не говорю по-французски.",
            "en": "I wish I <b>spoke</b> French.",
            "gloss": "говорю → spoke",
            "say": "I wish I spoke French."
          },
          {
            "ru": "Вот бы он жил поближе!",
            "en": "<b>If only</b> he <b>lived</b> nearby!",
            "gloss": "if only + прошедшее",
            "say": "If only he lived nearby!"
          }
        ],
        "mistakes": [
          {
            "wrong": "I wish I know the truth.",
            "right": "I wish I <b>knew</b> the truth.",
            "why": "русское настоящее «не знаю» → английское прошедшее knew"
          },
          {
            "wrong": "I wish I have more friends.",
            "right": "I wish I <b>had</b> more friends.",
            "why": "после wish о настоящем — had, а не have"
          }
        ],
        "mnemonic": "↩️ После wish — всегда шаг назад. Рус. наст. → англ. прош.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> русское «не говорю» → какое английское время?",
            "q": "«Жаль, что я не говорю по-испански» —",
            "opts": [
              "I wish I speak Spanish.",
              "I wish I spoke Spanish.",
              "I wish I will speak Spanish."
            ],
            "answer": 1,
            "explain": "Шаг назад: говорю (сейчас) → <b>spoke</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери эмоциональное сожаление с if only.",
            "q": "Собери: «Вот бы он жил поближе!»",
            "want": "If only he lived nearby",
            "answer": "If only he lived nearby"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> исправь и впиши. После wish — прошедшее.",
            "q": "Исправь: «I wish I have more time.»",
            "accept": [
              "i wish i had more time"
            ],
            "placeholder": "I wish I ... more time."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · сожаление о прошлом",
        "title": "<em>I wish</em> + Past Perfect — жаль о том, что было",
        "paras": [
          "Когда жалеешь о <b>прошлом</b> (что-то случилось или не случилось тогда), делаем ещё один шаг назад: <b>wish + had + 3-я форма</b> (Past Perfect). Это «эхо» третьего условного.",
          "<b>I wish I had studied harder.</b> = Жаль, что я не учился усерднее (тогда). <b>I wish I hadn't said that.</b> = Лучше бы я этого не говорил. На самом деле — я не учился / я сказал; wish переворачивает реальность.",
          "Сравни два уровня. Настоящее: <b>I wish I knew</b> (не знаю сейчас). Прошлое: <b>I wish I had known</b> (не знал тогда). Один лишний had — и сожаление уходит в прошлое."
        ],
        "audio": "Когда жалеешь о прошлом, делаем ещё один шаг назад: wish плюс had плюс третья форма, Past Perfect. Это эхо третьего условного. I wish I had studied harder — жаль, что я не учился усерднее. I wish I hadn't said that — лучше бы я этого не говорил. Сравни: I wish I knew, не знаю сейчас, и I wish I had known, не знал тогда.",
        "table": {
          "rows": [
            [
              "I wish I had studied.",
              "жаль, что не учился (тогда)"
            ],
            [
              "I wish I hadn't said that.",
              "лучше бы не говорил"
            ],
            [
              "сейчас: I wish I knew",
              "прошлое: I wish I had known"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Жаль, что я не выучил язык в детстве.",
            "en": "I wish I <b>had learned</b> the language as a child.",
            "gloss": "had + learned (прошлое)",
            "say": "I wish I had learned the language as a child."
          },
          {
            "ru": "Лучше бы я не покупал эту машину.",
            "en": "I wish I <b>hadn't bought</b> this car.",
            "gloss": "hadn't = had not",
            "say": "I wish I hadn't bought this car."
          },
          {
            "ru": "Вот бы я тебя послушал!",
            "en": "<b>If only</b> I <b>had listened</b> to you!",
            "gloss": "if only + Past Perfect",
            "say": "If only I had listened to you!"
          }
        ],
        "mistakes": [
          {
            "wrong": "I wish I studied harder at school.",
            "right": "I wish I <b>had studied</b> harder at school.",
            "why": "сожаление о прошлом → had + 3-я форма (Past Perfect)"
          },
          {
            "wrong": "I wish I didn't say that.",
            "right": "I wish I <b>hadn't said</b> that.",
            "why": "прошлое: hadn't + 3-я форма (said)"
          }
        ],
        "mnemonic": "⏪ Сожаление о прошлом = лишний had: I wish I had done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сожаление о ПРОШЛОМ — на шаг глубже.",
            "q": "«Жаль, что я не учился усерднее (в школе)» —",
            "opts": [
              "I wish I studied harder.",
              "I wish I had studied harder.",
              "I wish I would study harder."
            ],
            "answer": 1,
            "explain": "О прошлом → <b>had studied</b> (Past Perfect)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери сожаление о прошлом.",
            "q": "Собери: «Лучше бы я этого не говорил»",
            "want": "I wish I hadn't said that",
            "answer": "I wish I hadn't said that"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши сожаление о прошлом. listen → listened.",
            "q": "Вот бы я тебя послушал!",
            "accept": [
              "if only i had listened to you",
              "i wish i had listened to you"
            ],
            "placeholder": "If only I had ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · чужое поведение",
        "title": "<em>I wish you would…</em> — хочу, чтобы ты изменил(а)",
        "paras": [
          "Есть третий вид wish — про <b>раздражающее поведение других</b>, которое хочется изменить. Тут используем <b>wish + would + базовая форма</b>: <b>I wish you would listen.</b> = Хоть бы ты слушал! <b>I wish it would stop raining.</b> = Да когда же кончится этот дождь.",
          "Оттенок — лёгкое недовольство и желание, чтобы кто-то/что-то начал(о) вести себя иначе. Поэтому это про действия и привычки, а не про неизменные факты.",
          "Важный нюанс: <b>про себя</b> would так не используют. Нельзя «I wish I would be taller» — для собственного состояния это <b>I wish I were taller</b> (правило 1). would — про чужие действия или внешние события."
        ],
        "audio": "Есть третий вид wish — про раздражающее поведение других, которое хочется изменить. Тут используем wish плюс would плюс базовая форма: I wish you would listen — хоть бы ты слушал. I wish it would stop raining. Оттенок — лёгкое недовольство. Важно: про себя would так не используют. Не I wish I would be taller, а I wish I were taller.",
        "table": {
          "rows": [
            [
              "I wish you would listen.",
              "хоть бы ты слушал (упрёк)"
            ],
            [
              "I wish it would stop.",
              "да когда же это кончится"
            ],
            [
              "❌ I wish I would be…",
              "✅ I wish I were… (про себя — were)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Хоть бы ты перестал перебивать.",
            "en": "I wish you <b>would stop</b> interrupting.",
            "gloss": "would + базовая (чужое действие)",
            "say": "I wish you would stop interrupting."
          },
          {
            "ru": "Хоть бы соседи вели себя потише.",
            "en": "I wish the neighbours <b>would be</b> quieter.",
            "gloss": "про других — would",
            "say": "I wish the neighbours would be quieter."
          }
        ],
        "mistakes": [
          {
            "wrong": "I wish I would be more confident.",
            "right": "I wish I <b>were</b> more confident.",
            "why": "про собственное состояние — were, а не would"
          },
          {
            "wrong": "I wish you would to call more.",
            "right": "I wish you <b>would call</b> more.",
            "why": "после would — базовая форма без to"
          }
        ],
        "mnemonic": "🙄 wish + would — про чужое поведение. Про себя — were.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> упрёк о чужом поведении.",
            "q": "«Хоть бы ты слушал меня!» —",
            "opts": [
              "I wish you listened to me.",
              "I wish you would listen to me.",
              "I wish you will listen to me."
            ],
            "answer": 1,
            "explain": "Желание сменить чужое поведение → <b>wish you would</b> + базовая."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> про СЕБЯ — would или were?",
            "q": "«Жаль, что я не увереннее в себе» —",
            "opts": [
              "I wish I would be more confident.",
              "I wish I were more confident."
            ],
            "answer": 1,
            "explain": "Про собственное состояние — <b>were</b>, не would."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси с лёгким недовольством.",
            "target": "I wish you would listen to me.",
            "sub": "Хоть бы ты меня слушал.",
            "want": "would listen"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Живой диалог: двое говорят о том, чего им не хватает и о чём жалеют. Тапни строку для перевода. Слушай wish во всех трёх вариантах.",
      "lines": [
        {
          "who": "A",
          "name": "Sofia",
          "side": "left",
          "en": "I wish I spoke better English.",
          "ru": "Жаль, что я плохо говорю по-английски.",
          "words": [
            [
              "I wish I spoke",
              "жаль, что я не говорю"
            ]
          ]
        },
        {
          "who": "D",
          "name": "Dan",
          "side": "right",
          "en": "Me too. I wish I had studied more at school.",
          "ru": "Я тоже. Жаль, что я не учился больше в школе.",
          "words": [
            [
              "I wish I had studied",
              "жаль, что не учился"
            ],
            [
              "at school",
              "в школе"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Sofia",
          "side": "left",
          "en": "If only we had more time to practise now!",
          "ru": "Вот бы у нас было сейчас больше времени попрактиковаться!",
          "words": [
            [
              "If only",
              "вот бы / если бы только"
            ],
            [
              "to practise",
              "практиковаться"
            ]
          ]
        },
        {
          "who": "D",
          "name": "Dan",
          "side": "right",
          "en": "And I wish this app would stop crashing every five minutes.",
          "ru": "И хоть бы это приложение перестало вылетать каждые пять минут.",
          "words": [
            [
              "I wish this app would stop",
              "хоть бы приложение перестало"
            ],
            [
              "crashing",
              "вылетать (о программе)"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Sofia",
          "side": "left",
          "en": "Let's just keep talking. We learn faster than we think.",
          "ru": "Давай просто продолжим говорить. Мы учимся быстрее, чем думаем.",
          "words": [
            [
              "keep talking",
              "продолжать говорить"
            ],
            [
              "faster than we think",
              "быстрее, чем думаем"
            ]
          ]
        }
      ]
    },
    "scene": {
      "intro": "Короткая сценка: после ссоры один жалеет о словах, другой — о поведении.",
      "lines": [
        {
          "who": "A",
          "en": "I wish I hadn't shouted at you yesterday.",
          "ru": "Жаль, что я накричал на тебя вчера."
        },
        {
          "who": "B",
          "en": "It's okay. But I wish you would tell me when you're stressed.",
          "ru": "Всё нормально. Но хоть бы ты говорил мне, когда нервничаешь."
        },
        {
          "who": "A",
          "en": "You're right. I wish I were better at talking about feelings.",
          "ru": "Ты прав. Жаль, что я плохо умею говорить о чувствах."
        },
        {
          "who": "B",
          "en": "We can learn together. No more silent evenings, okay?",
          "ru": "Мы можем научиться вместе. Хватит молчаливых вечеров, договорились?"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — лексика сожаления, желаний и чувств (B1). Повтори вслух с примерами.",
      "items": [
        {
          "en": "wish",
          "ru": "желать; «жаль, что…»",
          "ex": "I wish I had a garden."
        },
        {
          "en": "if only",
          "ru": "вот бы; если бы только",
          "ex": "If only it were Friday!"
        },
        {
          "en": "regret",
          "ru": "сожалеть; сожаление",
          "ex": "My only regret is leaving."
        },
        {
          "en": "miss (someone)",
          "ru": "скучать (по кому-то)",
          "ex": "I miss my old friends."
        },
        {
          "en": "fluent",
          "ru": "свободно владеющий (о языке)",
          "ex": "I wish I were fluent in German."
        },
        {
          "en": "opportunity",
          "ru": "возможность, шанс",
          "ex": "I wish I had taken the opportunity."
        },
        {
          "en": "behave",
          "ru": "вести себя",
          "ex": "I wish they would behave."
        },
        {
          "en": "annoying",
          "ru": "раздражающий",
          "ex": "That noise is so annoying."
        },
        {
          "en": "nearby",
          "ru": "поблизости, рядом",
          "ex": "If only she lived nearby."
        },
        {
          "en": "patient",
          "ru": "терпеливый",
          "ex": "I wish I were more patient."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек делится своими «вот бы». Здесь wish и о настоящем, и о прошлом, и про чужое поведение.",
      "title": "Things I wish",
      "sentences": [
        "There are a few things I wish were different.",
        "I wish I lived closer to the sea.",
        "I wish I spoke at least one language fluently.",
        "Looking back, I wish I had travelled more when I was young.",
        "I also wish I hadn't wasted so much time worrying.",
        "And honestly, I wish people would listen more and judge less.",
        "But if only is a tricky friend — it can keep you in the past.",
        "So I try to wish less and do more."
      ],
      "translation": "Есть несколько вещей, которые я бы хотел изменить. Жаль, что я не живу ближе к морю. Жаль, что я не владею хотя бы одним языком свободно. Оглядываясь назад, я жалею, что мало путешествовал в молодости. А ещё жаль, что я потратил столько времени на тревоги. И, честно, хоть бы люди больше слушали и меньше судили. Но «вот бы» — коварный друг: оно может держать тебя в прошлом. Поэтому я стараюсь меньше желать и больше делать."
    },
    "drag": {
      "intro": "Соедини сожаление с его смыслом. Следи: о настоящем — прошедшее, о прошлом — had + 3-я форма.",
      "howto": "Перетащи английскую фразу к русскому переводу.",
      "pairs": [
        [
          "I wish I knew.",
          "Жаль, что я не знаю."
        ],
        [
          "I wish I had known.",
          "Жаль, что я не знал (тогда)."
        ],
        [
          "I wish I were taller.",
          "Жаль, что я невысокий."
        ],
        [
          "I wish you would listen.",
          "Хоть бы ты слушал."
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по wish и if only. Пять вопросов — и сожаление по-английски звучит правильно.",
      "items": [
        {
          "q": "«Жаль, что я не знаю её имени» —",
          "opts": [
            "I wish I know her name.",
            "I wish I knew her name.",
            "I wish I will know her name."
          ],
          "answer": 1,
          "explain": "wish о настоящем → шаг назад: <b>knew</b>."
        },
        {
          "q": "«Жаль, что я не учился усерднее (в прошлом)» —",
          "opts": [
            "I wish I studied harder.",
            "I wish I had studied harder.",
            "I wish I would study harder."
          ],
          "answer": 1,
          "explain": "О прошлом → <b>had studied</b> (Past Perfect)."
        },
        {
          "q": "«Жаль, что я невысокий» — какая форма be?",
          "opts": [
            "I wish I am taller.",
            "I wish I were taller.",
            "I wish I would be taller."
          ],
          "answer": 1,
          "explain": "С be после wish — <b>were</b>; про себя would не используем."
        },
        {
          "q": "«Хоть бы ты перестал опаздывать» —",
          "opts": [
            "I wish you stopped being late.",
            "I wish you would stop being late.",
            "I wish you will stop being late."
          ],
          "answer": 1,
          "explain": "Чужое поведение → <b>wish you would</b> + базовая."
        },
        {
          "q": "Где русская ловушка (настоящее вместо прошедшего)?",
          "opts": [
            "I wish I had more money.",
            "I wish I have more money.",
            "I wish I could swim."
          ],
          "answer": 1,
          "explain": "После wish о настоящем — <b>had</b>, не have."
        }
      ]
    },
    "picture": {
      "intro": "Опиши по картинке, о чём мечтает или жалеет человек.",
      "emoji": "🌧️🪟😔",
      "prompt": "Человек смотрит на дождь за окном. Опиши 3–4 фразами его «вот бы». Используй I wish… и If only…",
      "hint": "Структуры: I wish it weren't raining. I wish I were on a beach. If only the sun would come out. I wish I had…",
      "example": "She is watching the rain and looking sad. I think she wishes it weren't raining today. If only the sun would come out, she could go for a walk. She probably wishes she had made plans indoors.",
      "img": "img/b1/day-10.jpg",
      "credit": "Фото: Amsterdam free photos &amp; pictures of the Dutch city · CC0 · <a href=\"https://www.flickr.com/photos/104736837@N03/11904260455\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Теперь твоя очередь поделиться своими «вот бы».",
      "prompt": "Напиши 4–6 предложений о том, чего ты желаешь или о чём жалеешь. Используй все три вида: I wish + Past (сейчас), I wish + Past Perfect (прошлое), I wish + would (про других).",
      "hint": "Структуры: I wish I lived… ; I wish I were… ; I wish I had learned… ; I wish people would… ; If only…",
      "example": "There are a few things I wish were different. I wish I lived in a warmer country, and I wish I were more confident when I speak English. Looking back, I wish I had started learning languages earlier. I also wish I hadn't been so shy at university. And honestly, I wish people would be kinder to beginners. But wishing is not enough, so I practise a little every day."
    }
  },
  "11": {
    "day": 11,
    "week": "02",
    "level": "B1",
    "themeRu": "Это делают",
    "themeEn": "Passive: present & past",
    "intro": "До сих пор ты всегда называл(а) деятеля: <b>«я строю», «они продают»</b>. Но часто деятель неизвестен или попросту неважен — важно само действие и то, над чем оно совершается. <b>«Здесь говорят по-английски», «Этот мост построили в 1900 году», «Дом строится»</b> — кто именно, неважно. Для этого у английского есть <b>пассив (passive)</b>. По-русски мы прячем деятеля через «-ся» или безличное «они»; по-английски — через формулу <b>be + 3-я форма</b>. И наша always-on третья форма сегодня работает в полную силу.",
    "introAudio": "До сих пор ты всегда называл деятеля: я строю, они продают. Но часто деятель неизвестен или попросту неважен — важно само действие и то, над чем оно совершается. Здесь говорят по-английски. Этот мост построили в 1900 году. Дом строится. Кто именно, неважно. Для этого у английского есть пассив, passive. По-русски мы прячем деятеля через «-ся» или безличное «они»; по-английски — через формулу be плюс третья форма. И наша always-on третья форма сегодня работает в полную силу.",
    "goals": [
      "понять идею пассива: в центре — действие и объект, а не деятель",
      "строить настоящий пассив: <b>am/is/are + 3-я форма</b>",
      "строить прошедший пассив: <b>was/were + 3-я форма</b>",
      "не ронять <b>be</b>: рус. «строят / строится» → <b>is built</b>"
    ],
    "learned": [
      "Понял(а) идею пассива: в центре — действие и объект, а не деятель",
      "Построил(а) настоящий пассив: <b>am/is/are + 3-я форма</b>",
      "Построил(а) прошедший пассив: <b>was/were + 3-я форма</b>",
      "Перестал(а) ронять <b>be</b>: рус. «строят / строится» → <b>is built</b>"
    ],
    "review": {
      "intro": "Разминка, и сегодня она прямо ведёт к теме. Возвращаем always-on <b>3-ю форму</b> (именно она несёт пассив!) и <b>артикли a/the/∅</b> — в пассивных предложениях артикль перед объектом особенно важен.",
      "introAudio": "Разминка, и сегодня она прямо ведёт к теме. Возвращаем always-on третью форму, именно она несёт пассив, и артикли a, the или ноль артикля — в пассивных предложениях артикль перед объектом особенно важен.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> always-on. Выбери 3-ю форму (past participle) — она сегодня и есть «двигатель» пассива.",
          "q": "3-я форма глагола build —",
          "opts": [
            "builded",
            "built",
            "build"
          ],
          "answer": 1,
          "explain": "build → built → <b>built</b>. Эта форма понесёт пассив: is built, was built."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> always-on артикли. Один конкретный, известный мост.",
          "q": "___ bridge in our town was built 100 years ago.",
          "opts": [
            "A",
            "The",
            "—"
          ],
          "answer": 1,
          "explain": "Конкретный, единственный мост в нашем городе → <b>The</b> bridge."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> always-on. Впиши 3-ю форму глагола. write → wrote → ?",
          "q": "3-я форма (past participle) глагола write —",
          "accept": [
            "written"
          ],
          "placeholder": "write → wrote → ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · новый двигатель",
        "title": "Когда деятель неважен — <em>am/is/are + 3-я форма</em>",
        "paras": [
          "Пассив нужен, когда нам важно не <b>кто</b> делает, а <b>что</b> происходит и <b>с чем</b>. Объект действия выходит вперёд и становится подлежащим: не «Они говорят по-английски здесь», а «Английский — на нём говорят здесь».",
          "Формула настоящего пассива: <b>am / is / are + 3-я форма</b> глагола. <b>English is spoken here.</b> = Здесь говорят по-английски. <b>The rooms are cleaned every day.</b> = Комнаты убирают каждый день. Деятель спрятан — он неизвестен или неважен.",
          "Третья форма (past participle) обязательна и должна быть правильной: speak → <b>spoken</b>, make → <b>made</b>, build → <b>built</b>. У правильных глаголов она совпадает с -ed: clean → cleaned."
        ],
        "audio": "Пассив нужен, когда важно не кто делает, а что происходит и с чем. Объект выходит вперёд и становится подлежащим. Формула настоящего пассива: am, is или are плюс третья форма глагола. English is spoken here — здесь говорят по-английски. The rooms are cleaned every day. Деятель спрятан. Третья форма обязательна: speak — spoken, make — made, build — built.",
        "table": {
          "rows": [
            [
              "It / English / the room",
              "is + 3-я форма (is spoken, is cleaned)"
            ],
            [
              "they / rooms / cars",
              "are + 3-я форма (are made, are sold)"
            ],
            [
              "I / you",
              "am / are + 3-я форма (I am paid)"
            ],
            [
              "ключ",
              "be в нужной форме + 3-я форма"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "На английском говорят во многих странах.",
            "en": "English <b>is spoken</b> in many countries.",
            "gloss": "is + spoken",
            "say": "English is spoken in many countries."
          },
          {
            "ru": "Эти машины делают в Германии.",
            "en": "These cars <b>are made</b> in Germany.",
            "gloss": "are + made",
            "say": "These cars are made in Germany."
          },
          {
            "ru": "Кофе выращивают в Бразилии.",
            "en": "Coffee <b>is grown</b> in Brazil.",
            "gloss": "grow → grown",
            "say": "Coffee is grown in Brazil."
          }
        ],
        "mistakes": [
          {
            "wrong": "English is speak here.",
            "right": "English is <b>spoken</b> here.",
            "why": "после be нужна 3-я форма: speak → spoken"
          },
          {
            "wrong": "These cars are make in Germany.",
            "right": "These cars are <b>made</b> in Germany.",
            "why": "make → made (3-я форма)"
          }
        ],
        "mnemonic": "🏭 Пассив сейчас = am/is/are + 3-я форма. Деятель спрятан.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери настоящий пассив.",
            "q": "«Эту комнату убирают каждый день» —",
            "opts": [
              "This room cleans every day.",
              "This room is cleaned every day.",
              "This room is clean every day."
            ],
            "answer": 1,
            "explain": "be + 3-я форма: <b>is cleaned</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> is или are?",
            "q": "These phones ___ produced in China.",
            "opts": [
              "is",
              "are",
              "am"
            ],
            "answer": 1,
            "explain": "Подлежащее во мн.ч. (these phones) → <b>are</b> produced."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери настоящий пассив.",
            "q": "Собери: «Здесь говорят по-английски»",
            "want": "English is spoken here",
            "answer": "English is spoken here"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · прошлый пассив",
        "title": "В прошлом — <em>was/were + 3-я форма</em>",
        "paras": [
          "Чтобы сказать то же самое о прошлом, меняем только be: <b>was</b> (для ед.ч.) и <b>were</b> (для мн.ч.) + та же 3-я форма. Сам «двигатель» — третья форма — не меняется.",
          "<b>This bridge was built in 1900.</b> = Этот мост построили в 1900 году. <b>The letters were sent yesterday.</b> = Письма отправили вчера. <b>My car was stolen last night.</b> = Мою машину угнали ночью.",
          "Сравни два времени на одном глаголе: <b>The house is cleaned</b> every week (сейчас, регулярно) — <b>The house was cleaned</b> yesterday (прошлое). Меняется только be, форма clean → cleaned остаётся."
        ],
        "audio": "Чтобы сказать то же о прошлом, меняем только be: was для единственного числа, were для множественного, плюс та же третья форма. This bridge was built in 1900 — этот мост построили в 1900 году. The letters were sent yesterday — письма отправили вчера. Меняется только be, третья форма остаётся.",
        "table": {
          "rows": [
            [
              "it / the bridge / my car",
              "was + 3-я форма (was built, was stolen)"
            ],
            [
              "they / letters / houses",
              "were + 3-я форма (were sent, were built)"
            ],
            [
              "сейчас vs тогда",
              "is cleaned → was cleaned"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Этот замок построили в 15 веке.",
            "en": "This castle <b>was built</b> in the 15th century.",
            "gloss": "was + built",
            "say": "This castle was built in the 15th century."
          },
          {
            "ru": "Письма отправили вчера.",
            "en": "The letters <b>were sent</b> yesterday.",
            "gloss": "send → sent → sent",
            "say": "The letters were sent yesterday."
          },
          {
            "ru": "Мою машину угнали ночью.",
            "en": "My car <b>was stolen</b> last night.",
            "gloss": "steal → stolen",
            "say": "My car was stolen last night."
          }
        ],
        "mistakes": [
          {
            "wrong": "This bridge was build in 1900.",
            "right": "This bridge was <b>built</b> in 1900.",
            "why": "нужна 3-я форма: build → built (а не базовая build)"
          },
          {
            "wrong": "The letters was sent yesterday.",
            "right": "The letters <b>were</b> sent yesterday.",
            "why": "подлежащее во мн.ч. → were"
          }
        ],
        "mnemonic": "🏛️ Пассив в прошлом = was/were + 3-я форма. Меняется только be.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери прошлый пассив.",
            "q": "«Этот музей открыли в 1850 году» —",
            "opts": [
              "This museum was open in 1850.",
              "This museum was opened in 1850.",
              "This museum is opened in 1850."
            ],
            "answer": 1,
            "explain": "Прошлый пассив: <b>was opened</b> (was + 3-я форма)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> was или were?",
            "q": "The houses ___ destroyed in the storm.",
            "opts": [
              "was",
              "were",
              "is"
            ],
            "answer": 1,
            "explain": "Мн.ч. (houses) → <b>were</b> destroyed."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши прошлый пассив. build → built.",
            "q": "Этот мост построили сто лет назад.",
            "accept": [
              "this bridge was built 100 years ago",
              "this bridge was built a hundred years ago",
              "the bridge was built 100 years ago",
              "the bridge was built a hundred years ago",
              "this bridge was built one hundred years ago",
              "the bridge was built one hundred years ago"
            ],
            "placeholder": "This bridge ... 100 years ago."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "«Строят / строится» — не роняй <em>be</em>",
        "paras": [
          "Главная ошибка русскоязычных в пассиве — потерять <b>be</b>. По-русски пассив прячется в двух обличьях: <b>«дом строят»</b> (3-е лицо мн.ч., деятеля нет) и <b>«дом строится»</b> (возвратное «-ся»). Оба — это английское <b>is built</b>.",
          "Без be фраза разваливается. «English spoken here» можно увидеть на вывеске, но в нормальном предложении нужно <b>English is spoken here</b>. «The house built» звучит как незаконченная мысль — нужно <b>is built</b> или <b>was built</b>.",
          "Запомни перевод-мостик: русское «-ся / делают / делается» → английское <b>be + 3-я форма</b>. Сначала ставь be, потом третью форму — и никогда не роняй be."
        ],
        "audio": "Главная ошибка русскоязычных в пассиве — потерять be. По-русски пассив прячется в двух обличьях: дом строят, третье лицо множественного, и дом строится, возвратное -ся. Оба — это английское is built. Без be фраза разваливается. English is spoken here, а не English spoken here. Русское -ся, делают, делается — это английское be плюс третья форма. Сначала be, потом третья форма.",
        "table": {
          "rows": [
            [
              "рус. «дом строят»",
              "англ. the house is built"
            ],
            [
              "рус. «дом строится»",
              "англ. the house is built"
            ],
            [
              "❌ English spoken here",
              "✅ English is spoken here"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Здесь продают билеты.",
            "en": "Tickets <b>are sold</b> here.",
            "gloss": "продают → are sold",
            "say": "Tickets are sold here."
          },
          {
            "ru": "Этот вопрос часто обсуждается.",
            "en": "This question <b>is</b> often <b>discussed</b>.",
            "gloss": "-ся → is discussed",
            "say": "This question is often discussed."
          }
        ],
        "mistakes": [
          {
            "wrong": "The house build very fast here.",
            "right": "The house <b>is built</b> very fast here.",
            "why": "«строится» → is built; нельзя ронять be"
          },
          {
            "wrong": "Here speak English.",
            "right": "English <b>is spoken</b> here.",
            "why": "«говорят» → is spoken; объект вперёд, be + 3-я форма"
          }
        ],
        "mnemonic": "🧱 «-ся / делают» = be + 3-я форма. be не выбрасывай!",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди ПРАВИЛЬный пассив (be на месте).",
            "q": "«Здесь говорят по-французски» —",
            "opts": [
              "French speaks here.",
              "Here speak French.",
              "French is spoken here."
            ],
            "answer": 2,
            "explain": "be + 3-я форма: <b>is spoken</b>. be ронять нельзя."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> переведи «-ся». sell → sold. Не потеряй be.",
            "q": "Здесь продают билеты.",
            "accept": [
              "tickets are sold here",
              "the tickets are sold here"
            ],
            "placeholder": "Tickets ... here."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух, не теряя is.",
            "target": "English is spoken all over the world.",
            "sub": "На английском говорят по всему миру.",
            "want": "is spoken"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · кто сделал",
        "title": "Если деятель важен — <em>by</em>",
        "paras": [
          "Иногда деятель всё-таки важен — тогда его добавляют в конце через <b>by</b> (кем): <b>The book was written by Tolstoy.</b> = Книгу написал Толстой. <b>This song is loved by millions.</b> = Эту песню любят миллионы.",
          "Сравни актив и пассив: <b>Tolstoy wrote the book</b> (фокус на Толстом) ↔ <b>The book was written by Tolstoy</b> (фокус на книге). Смысл один, акцент разный. Пассив выбирают, когда в центре — объект или результат.",
          "Если деятель неизвестен или неважен, <b>by</b> просто не нужен: <b>My bike was stolen</b> (кем — неизвестно). Не добавляй «by someone» без надобности — это лишнее."
        ],
        "audio": "Иногда деятель всё-таки важен — тогда его добавляют в конце через by, кем. The book was written by Tolstoy — книгу написал Толстой. Сравни актив и пассив: Tolstoy wrote the book, фокус на Толстом, и The book was written by Tolstoy, фокус на книге. Если деятель неизвестен, by просто не нужен: My bike was stolen.",
        "table": {
          "rows": [
            [
              "актив: Tolstoy wrote it",
              "фокус на деятеле"
            ],
            [
              "пассив: It was written by Tolstoy",
              "фокус на объекте + by (кем)"
            ],
            [
              "деятель неизвестен",
              "by не нужен: My bike was stolen"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Америку открыл Колумб.",
            "en": "America <b>was discovered by</b> Columbus.",
            "gloss": "by Columbus — кем",
            "say": "America was discovered by Columbus."
          },
          {
            "ru": "Этот дом спроектировал известный архитектор.",
            "en": "This house <b>was designed by</b> a famous architect.",
            "gloss": "design → designed + by",
            "say": "This house was designed by a famous architect."
          }
        ],
        "mistakes": [
          {
            "wrong": "The book was written from Tolstoy.",
            "right": "The book was written <b>by</b> Tolstoy.",
            "why": "деятель вводится через by, а не from"
          }
        ],
        "mnemonic": "✍️ Кто сделал → by. Неважно кто → by не нужен.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери предлог для деятеля.",
            "q": "This bridge was designed ___ a famous engineer.",
            "opts": [
              "from",
              "by",
              "with"
            ],
            "answer": 1,
            "explain": "Деятель в пассиве → <b>by</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> переделай в пассив с by.",
            "q": "Собери: «Эту картину написал Пикассо»",
            "want": "This picture was painted by Picasso",
            "answer": "This picture was painted by Picasso"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Живой диалог: гид показывает туристу старый город. Тапни строку для перевода. Слушай пассив настоящего и прошлого в живой речи.",
      "lines": [
        {
          "who": "A",
          "name": "Guide",
          "side": "left",
          "en": "This church was built more than five hundred years ago.",
          "ru": "Эту церковь построили более пятисот лет назад.",
          "words": [
            [
              "was built",
              "построили / была построена"
            ],
            [
              "five hundred years ago",
              "пятьсот лет назад"
            ]
          ]
        },
        {
          "who": "T",
          "name": "Tourist",
          "side": "right",
          "en": "Amazing. And is it still used today?",
          "ru": "Удивительно. А её до сих пор используют?",
          "words": [
            [
              "is it used",
              "её используют?"
            ],
            [
              "still",
              "всё ещё"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Guide",
          "side": "left",
          "en": "Yes. Concerts are held here every summer.",
          "ru": "Да. Каждое лето здесь проводят концерты.",
          "words": [
            [
              "are held",
              "проводят / проводятся"
            ],
            [
              "every summer",
              "каждое лето"
            ]
          ]
        },
        {
          "who": "T",
          "name": "Tourist",
          "side": "right",
          "en": "Who painted these beautiful walls?",
          "ru": "Кто расписал эти красивые стены?",
          "words": [
            [
              "Who painted",
              "кто расписал"
            ],
            [
              "walls",
              "стены"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Guide",
          "side": "left",
          "en": "They were painted by local artists in the 1700s.",
          "ru": "Их расписали местные художники в 1700-х годах.",
          "words": [
            [
              "were painted by",
              "были расписаны (кем)"
            ],
            [
              "local artists",
              "местные художники"
            ]
          ]
        }
      ]
    },
    "scene": {
      "intro": "Короткая сценка: человек звонит в сервис — что-то сломалось и должно быть починено.",
      "lines": [
        {
          "who": "A",
          "en": "Hi, my laptop is broken. Can it be checked today?",
          "ru": "Здравствуйте, мой ноутбук сломан. Его можно проверить сегодня?"
        },
        {
          "who": "B",
          "en": "Sure. All laptops are checked within two hours.",
          "ru": "Конечно. Все ноутбуки проверяют в течение двух часов."
        },
        {
          "who": "A",
          "en": "Great. Last time my phone was repaired here very fast.",
          "ru": "Отлично. В прошлый раз мой телефон починили здесь очень быстро."
        },
        {
          "who": "B",
          "en": "Yes, most repairs are done the same day.",
          "ru": "Да, большинство ремонтов делают в тот же день."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — глаголы и их 3-и формы для пассива (B1). Повтори вслух с примерами.",
      "items": [
        {
          "en": "built (build)",
          "ru": "построен",
          "ex": "The school was built in 1990."
        },
        {
          "en": "made (make)",
          "ru": "сделан",
          "ex": "These shoes are made in Italy."
        },
        {
          "en": "written (write)",
          "ru": "написан",
          "ex": "The report is written in English."
        },
        {
          "en": "invented (invent)",
          "ru": "изобретён",
          "ex": "The phone was invented long ago."
        },
        {
          "en": "discovered (discover)",
          "ru": "открыт, обнаружен",
          "ex": "Gold was discovered here."
        },
        {
          "en": "produced (produce)",
          "ru": "произведён",
          "ex": "Cars are produced in this factory."
        },
        {
          "en": "delivered (deliver)",
          "ru": "доставлен",
          "ex": "The parcel was delivered today."
        },
        {
          "en": "repaired (repair)",
          "ru": "отремонтирован",
          "ex": "My bike is being repaired."
        },
        {
          "en": "grown (grow)",
          "ru": "выращен",
          "ex": "Rice is grown in Asia."
        },
        {
          "en": "spoken (speak)",
          "ru": "на нём говорят",
          "ex": "Spanish is spoken in Mexico."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай, как делают шоколад. Это процесс — поэтому почти каждое предложение в пассиве настоящего времени.",
      "title": "How chocolate is made",
      "sentences": [
        "Chocolate is loved all over the world.",
        "It is made from cacao beans.",
        "The beans are grown in hot countries near the equator.",
        "First, they are dried in the sun for several days.",
        "Then the beans are sent to factories abroad.",
        "There they are roasted and ground into a thick paste.",
        "Sugar and milk are added to make it sweet.",
        "Finally, the chocolate is packed and sold in shops everywhere."
      ],
      "translation": "Шоколад любят по всему миру. Его делают из какао-бобов. Бобы выращивают в жарких странах у экватора. Сначала их несколько дней сушат на солнце. Затем бобы отправляют на фабрики за границу. Там их обжаривают и перемалывают в густую пасту. Чтобы сделать её сладкой, добавляют сахар и молоко. Наконец, шоколад упаковывают и продают в магазинах повсюду."
    },
    "drag": {
      "intro": "Соедини пассивную фразу с её смыслом. Следи за be: настоящее — is/are, прошлое — was/were.",
      "howto": "Перетащи английскую фразу к русскому переводу.",
      "pairs": [
        [
          "English is spoken here.",
          "Здесь говорят по-английски."
        ],
        [
          "The bridge was built in 1900.",
          "Мост построили в 1900 году."
        ],
        [
          "These cars are made in Japan.",
          "Эти машины делают в Японии."
        ],
        [
          "My car was stolen.",
          "Мою машину угнали."
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по пассиву. Пять вопросов — и «это делают / это было сделано» звучит правильно.",
      "items": [
        {
          "q": "«Здесь говорят по-английски» —",
          "opts": [
            "Here speak English.",
            "English is spoken here.",
            "English speaks here."
          ],
          "answer": 1,
          "explain": "be + 3-я форма: <b>is spoken</b>; be ронять нельзя."
        },
        {
          "q": "«Этот мост построили в 1900 году» —",
          "opts": [
            "This bridge built in 1900.",
            "This bridge was built in 1900.",
            "This bridge is build in 1900."
          ],
          "answer": 1,
          "explain": "Прошлый пассив: <b>was built</b> (was + 3-я форма)."
        },
        {
          "q": "Выбери be: These phones ___ made in Korea.",
          "opts": [
            "is",
            "are",
            "was"
          ],
          "answer": 1,
          "explain": "Мн.ч. в настоящем → <b>are</b> made."
        },
        {
          "q": "«Книгу написал Толстой» (фокус на книге) —",
          "opts": [
            "The book was written by Tolstoy.",
            "The book was written from Tolstoy.",
            "The book wrote by Tolstoy."
          ],
          "answer": 0,
          "explain": "Пассив + деятель через <b>by</b>: was written by Tolstoy."
        },
        {
          "q": "Где русская ловушка (потеряли be)?",
          "opts": [
            "Tickets are sold here.",
            "Tickets sold here.",
            "The room is cleaned daily."
          ],
          "answer": 1,
          "explain": "В полном предложении нужно <b>are sold</b>; без be — ошибка."
        }
      ]
    },
    "picture": {
      "intro": "Опиши по картинке, что и как делают — через пассив.",
      "emoji": "🏗️🧱👷",
      "prompt": "На картинке — стройка. Опиши 3–4 фразами через пассив: что строится, что было сделано. Используй is built / are made / was built.",
      "hint": "Структуры: A new house is being built. The walls are made of brick. The old building was knocked down last year.",
      "example": "A new house is built on this street. The walls are made of brick and the windows are added now. The old building was knocked down last year. When it is finished, the flats will be sold quickly.",
      "img": "img/b1/day-11.jpg",
      "credit": "Фото: Amsterdam free photos &amp; pictures of the Dutch city · CC0 · <a href=\"https://www.flickr.com/photos/104736837@N03/12101321055\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Теперь твоя очередь описать процесс или факты через пассив.",
      "prompt": "Напиши 4–6 предложений о том, как что-то делают, или о фактах твоего города/страны. Используй пассив: is/are + 3-я форма и was/were + 3-я форма.",
      "hint": "Структуры: … is made in… ; … are grown in… ; … was built in… ; … is known for… ; … was founded by…",
      "example": "My city is known for its old churches. The biggest one was built more than three hundred years ago. Today thousands of tourists are welcomed here every year. In the old part of town, bread is still made by hand, and small souvenirs are sold in tiny shops. Many of the streets were rebuilt after the war."
    }
  },
  "12": {
    "day": 12,
    "week": "02",
    "level": "B1",
    "themeRu": "Будет сделано",
    "themeEn": "Passive: perfect, future, modal",
    "intro": "Вчера ты собрал(а) пассив в настоящем и прошлом: <b>is built</b>, <b>was built</b>. Сегодня растягиваем его на все остальные времена и добавляем модальные. Идея одна и та же — <b>be + 3-я форма</b>, — меняется лишь первая часть. «Дом уже построили» → <b>The house has been built</b>. «Дом построят» → <b>The house will be built</b>. «Это можно сделать» → <b>It can be done</b>. Та третья форма, что ты повторяешь каждое утро, держит на себе весь пассив. Поехали.",
    "introAudio": "Вчера ты собрал пассив в настоящем и прошлом: is built, was built. Сегодня растягиваем его на все остальные времена и добавляем модальные. Идея одна и та же — be плюс третья форма, — меняется лишь первая часть. Дом уже построили — The house has been built. Дом построят — The house will be built. Это можно сделать — It can be done. Та третья форма, что ты повторяешь каждое утро, держит на себе весь пассив. Поехали.",
    "goals": [
      "строить пассив в Present Perfect: <b>has/have been done</b> — «уже сделано, готово»",
      "говорить о будущем в пассиве: <b>will be done</b> — «будет сделано»",
      "ставить пассив после модальных: <b>can / must / should be done</b>",
      "не путать <b>by</b> (кем) и <b>with</b> (чем) при указании деятеля"
    ],
    "learned": [
      "Построил(а) пассив в Present Perfect: <b>has/have been done</b> — «уже сделано, готово»",
      "Заговорил(а) о будущем в пассиве: <b>will be done</b> — «будет сделано»",
      "Поставил(а) пассив после модальных: <b>can / must / should be done</b>",
      "Перестал(а) путать <b>by</b> (кем) и <b>with</b> (чем) при указании деятеля"
    ],
    "review": {
      "intro": "Сначала вспомним вчерашний пассив — настоящее и прошлое. Формула <b>be + 3-я форма</b> сегодня вырастет во все времена, поэтому держим её крепко. Заодно повторяем 3-ю форму — наш «всегда-на-связи» материал.",
      "introAudio": "Сначала вспомним вчерашний пассив, настоящее и прошлое. Формула be плюс третья форма сегодня вырастет во все времена, поэтому держим её крепко. Заодно повторяем третью форму.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери пассив в прошлом. Есть конкретный год — это прошлое.",
          "q": "«Этот мост построили в 1990» —",
          "opts": [
            "This bridge is built in 1990",
            "This bridge was built in 1990",
            "This bridge build in 1990"
          ],
          "answer": 1,
          "explain": "Конкретный момент в прошлом → <b>was + built</b>."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши пассив в настоящем. speak → spoken.",
          "q": "Здесь говорят по-английски.",
          "accept": [
            "english is spoken here"
          ],
          "placeholder": "English is ... here"
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери пассив в прошлом (мн. число). write → written.",
          "q": "Собери: «Эти письма написали вчера»",
          "want": "These letters were written yesterday",
          "answer": "These letters were written yesterday"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · уже сделано",
        "title": "<em>has been done</em> — пассив в Present Perfect",
        "paras": [
          "Ты уже знаешь Present Perfect (<b>has/have done</b>) и знаешь пассив (<b>be done</b>). Соединяем их: <b>has/have been + 3-я форма</b>. Получается «уже сделано, и результат важен сейчас».",
          "<b>The report has been finished.</b> = Отчёт уже закончен (готов прямо сейчас). <b>The keys have been found.</b> = Ключи нашлись. Заметь маленькое слово <b>been</b> — это пассивный мостик, без него фраза рассыпается.",
          "Кто именно это сделал — часто неважно или неизвестно, поэтому пассив так удобен в деловой речи: важен результат, а не исполнитель."
        ],
        "audio": "Ты уже знаешь Present Perfect, has или have плюс done, и знаешь пассив, be плюс done. Соединяем их: has или have been плюс третья форма. The report has been finished — отчёт уже закончен. The keys have been found — ключи нашлись. Слово been это пассивный мостик, без него фраза рассыпается.",
        "table": {
          "rows": [
            [
              "I / you / we / they",
              "have been + 3-я форма"
            ],
            [
              "he / she / it",
              "has been + 3-я форма"
            ],
            [
              "вопрос",
              "Has it been done?"
            ],
            [
              "отрицание",
              "It hasn't been done yet."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Письмо уже отправили.",
            "en": "The email <b>has been sent</b>.",
            "gloss": "has been + sent",
            "say": "The email has been sent."
          },
          {
            "ru": "Все билеты уже проданы.",
            "en": "All the tickets <b>have been sold</b>.",
            "gloss": "have been + sold",
            "say": "All the tickets have been sold."
          },
          {
            "ru": "Работа ещё не сделана.",
            "en": "The work <b>hasn't been done</b> yet.",
            "gloss": "отрицание",
            "say": "The work hasn't been done yet."
          }
        ],
        "mistakes": [
          {
            "wrong": "The email has sent",
            "right": "The email has <b>been</b> sent",
            "why": "без been нет пассива — иначе вышло бы «письмо отправило (само)»"
          },
          {
            "wrong": "The keys have been found by I",
            "right": "…found by <b>me</b>",
            "why": "после by — объектное местоимение: me, him, us"
          }
        ],
        "mnemonic": "📨 has/have + BEEN + 3-я форма — «уже сделано».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери have/has been + 3-я форма. documents — мн. число.",
            "q": "«Документы уже подписали» —",
            "opts": [
              "The documents has been signed",
              "The documents have been signed",
              "The documents have signed"
            ],
            "answer": 1,
            "explain": "Множественное → <b>have been signed</b> (третий вариант — активный, без been)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери пассив Present Perfect. send → sent.",
            "q": "Собери: «Письмо уже отправили»",
            "want": "The email has been sent",
            "answer": "The email has been sent"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пассив. cook → cooked.",
            "q": "Ужин уже приготовили.",
            "accept": [
              "dinner has been cooked",
              "the dinner has been cooked"
            ],
            "placeholder": "Dinner has been ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · будет сделано",
        "title": "<em>will be done</em> — пассив в будущем",
        "paras": [
          "Будущее в пассиве — это <b>will be + 3-я форма</b>. «Сделают / будет сделано»: <b>The work will be done tomorrow.</b>",
          "Здесь частая русская привычка: мы говорим «сделают», «объявят» безличным «они». По-английски в таких случаях естественнее пассив. «Тебе перезвонят» → <b>You will be called back.</b>",
          "Так же работает <b>be going to</b>: <b>The house is going to be sold.</b> = Дом собираются продать. Снова видим <b>be + 3-я форма</b>."
        ],
        "audio": "Будущее в пассиве это will be плюс третья форма. The work will be done tomorrow. Мы по-русски говорим сделают, объявят, безличным они. По-английски естественнее пассив. Тебе перезвонят — You will be called back. Так же работает be going to: The house is going to be sold.",
        "table": {
          "rows": [
            [
              "will + be + 3-я форма",
              "It will be done."
            ],
            [
              "вопрос",
              "Will it be done?"
            ],
            [
              "отрицание",
              "It won't be done."
            ],
            [
              "be going to",
              "It is going to be built."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Результаты объявят завтра.",
            "en": "The results <b>will be announced</b> tomorrow.",
            "gloss": "will be + announced",
            "say": "The results will be announced tomorrow."
          },
          {
            "ru": "Эту проблему скоро решат.",
            "en": "The problem <b>will be solved</b> soon.",
            "gloss": "will be + solved",
            "say": "The problem will be solved soon."
          },
          {
            "ru": "Новый мост построят к 2030 году.",
            "en": "A new bridge <b>will be built</b> by 2030.",
            "gloss": "will be + built",
            "say": "A new bridge will be built by 2030."
          }
        ],
        "mistakes": [
          {
            "wrong": "The work will done tomorrow",
            "right": "The work will <b>be</b> done tomorrow",
            "why": "будущий пассив — will BE done; без be не работает"
          },
          {
            "wrong": "The results will be announce",
            "right": "…will be <b>announced</b>",
            "why": "нужна 3-я форма, а не базовая"
          }
        ],
        "mnemonic": "🔮 will + BE + 3-я форма — «будет сделано».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери будущий пассив.",
            "q": "«Письма отправят завтра» —",
            "opts": [
              "The letters will sent tomorrow",
              "The letters will be sent tomorrow",
              "The letters will be send tomorrow"
            ],
            "answer": 1,
            "explain": "will + be + 3-я форма: <b>will be sent</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пассив в будущем. call back → called back.",
            "q": "Тебе перезвонят.",
            "accept": [
              "you will be called back",
              "you'll be called back"
            ],
            "placeholder": "You will be ..."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери будущий пассив. sell → sold.",
            "q": "Собери: «Дом продадут в следующем году»",
            "want": "The house will be sold next year",
            "answer": "The house will be sold next year"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "<em>can be done</em>, а не «can be do»",
        "paras": [
          "После модальных (can, must, should, have to) пассив строится так: <b>модальный + be + 3-я форма</b>. <b>It can be done.</b> = Это можно сделать. <b>It must be finished today.</b> = Это нужно закончить сегодня.",
          "Вот главная ловушка дня. Русскоязычные говорят «It can be <b>do</b>» — теряют 3-ю форму. После be всегда идёт <b>3-я форма</b> (done, made, fixed), а не базовая (do, make, fix).",
          "Сравни активный и пассивный залог: <b>We can do it</b> (мы можем это сделать) → <b>It can be done</b> (это может быть сделано). Деятель уходит, появляется <b>be done</b>."
        ],
        "audio": "После модальных can, must, should, have to пассив такой: модальный плюс be плюс третья форма. It can be done — это можно сделать. It must be finished today. Главная ловушка дня: русскоязычные говорят It can be do, теряют третью форму. После be всегда третья форма: done, made, fixed, а не do, make, fix.",
        "table": {
          "rows": [
            [
              "can be + 3-я форма",
              "It can be done. (можно)"
            ],
            [
              "can't be + 3-я форма",
              "It can't be changed. (нельзя)"
            ],
            [
              "must be + 3-я форма",
              "It must be done. (нужно)"
            ],
            [
              "should be + 3-я форма",
              "It should be checked. (стоит)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Это можно сделать за час.",
            "en": "It <b>can be done</b> in an hour.",
            "gloss": "can be + done",
            "say": "It can be done in an hour."
          },
          {
            "ru": "Машину нужно починить.",
            "en": "The car <b>must be fixed</b>.",
            "gloss": "must be + fixed",
            "say": "The car must be fixed."
          },
          {
            "ru": "Эту ошибку легко исправить.",
            "en": "This mistake <b>can be corrected</b> easily.",
            "gloss": "can be + corrected",
            "say": "This mistake can be corrected easily."
          }
        ],
        "mistakes": [
          {
            "wrong": "It can be do",
            "right": "It can be <b>done</b>",
            "why": "после be — 3-я форма (done), а не базовая (do)"
          },
          {
            "wrong": "The problem must be solve",
            "right": "…must be <b>solved</b>",
            "why": "модальный + be + 3-я форма: solved"
          }
        ],
        "mnemonic": "🔧 модальный + BE + 3-я форма: can be DONE, must be FIXED.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный модальный пассив.",
            "q": "«Это можно исправить» —",
            "opts": [
              "It can be fix",
              "It can be fixed",
              "It can fixed"
            ],
            "answer": 1,
            "explain": "can be + 3-я форма: <b>fixed</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери отрицательный модальный пассив.",
            "q": "«Это нельзя изменить» —",
            "opts": [
              "It can't be change",
              "It can't be changed",
              "It doesn't can be changed"
            ],
            "answer": 1,
            "explain": "can't be + 3-я форма: <b>changed</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пассив с must. finish → finished.",
            "q": "Эту работу нужно закончить сегодня.",
            "accept": [
              "the work must be finished today",
              "this work must be finished today"
            ],
            "placeholder": "The work must be ..."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери модальный пассив. solve → solved.",
            "q": "Собери: «Проблему можно решить»",
            "want": "The problem can be solved",
            "answer": "The problem can be solved"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · кем и чем",
        "title": "<em>by</em> (кем) vs <em>with</em> (чем)",
        "paras": [
          "Если хочешь назвать деятеля — того, кто сделал, — добавляй <b>by</b>: «кем сделано». <b>The book was written by Orwell.</b> = Книга написана Оруэллом.",
          "А <b>with</b> — это инструмент или материал: «чем сделано». <b>The letter was written with a pen.</b> = Письмо написали ручкой. Деятель → <b>by</b>, инструмент → <b>with</b>.",
          "Часто деятеля вообще не называют — если он неизвестен или неважен: <b>My bike was stolen.</b> (кем — неважно). by добавляют, только когда это действительно интересно: <b>…stolen by a neighbour.</b>"
        ],
        "audio": "Если хочешь назвать деятеля, того, кто сделал, добавляй by: кем сделано. The book was written by Orwell. А with это инструмент или материал: чем сделано. The letter was written with a pen. Деятель by, инструмент with. Часто деятеля вообще не называют: My bike was stolen, кем неважно.",
        "table": {
          "rows": [
            [
              "by + деятель",
              "painted by Picasso (кем)"
            ],
            [
              "with + инструмент",
              "cut with a knife (чем)"
            ],
            [
              "без агента",
              "The shop was robbed. (неважно кем)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Эту картину написал Моне.",
            "en": "This painting was made <b>by</b> Monet.",
            "gloss": "деятель → by",
            "say": "This painting was made by Monet."
          },
          {
            "ru": "Хлеб режут ножом.",
            "en": "Bread is cut <b>with</b> a knife.",
            "gloss": "инструмент → with",
            "say": "Bread is cut with a knife."
          },
          {
            "ru": "Окно разбили мячом.",
            "en": "The window was broken <b>with</b> a ball.",
            "gloss": "чем → with",
            "say": "The window was broken with a ball."
          }
        ],
        "mistakes": [
          {
            "wrong": "The cake was made with my mother",
            "right": "…made <b>by</b> my mother",
            "why": "мама — деятель → by (with здесь прозвучит как «вместе с мамой»)"
          },
          {
            "wrong": "It was cut by a knife",
            "right": "It was cut <b>with</b> a knife",
            "why": "нож — инструмент → with"
          }
        ],
        "mnemonic": "👤 кем → BY · 🔪 чем → WITH.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> деятель или инструмент? Толстой — деятель.",
            "q": "«Этот роман написал Толстой» —",
            "opts": [
              "This novel was written with Tolstoy",
              "This novel was written by Tolstoy"
            ],
            "answer": 1,
            "explain": "деятель → <b>by</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> нож — это инструмент.",
            "q": "«Сыр режут ножом» —",
            "opts": [
              "Cheese is cut by a knife",
              "Cheese is cut with a knife"
            ],
            "answer": 1,
            "explain": "инструмент → <b>with</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пассив с by. Леннон — деятель.",
            "q": "Эту песню написал Леннон.",
            "accept": [
              "this song was written by lennon",
              "the song was written by lennon"
            ],
            "placeholder": "This song was written ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Дана и её коллега Сэм обсуждают проект перед встречей. Послушай пассив во всех временах — он звучит совершенно естественно в деловой речи.",
      "lines": [
        {
          "who": "Dana",
          "name": "Дана",
          "side": "left",
          "en": "Has the report been finished?",
          "ru": "Отчёт уже готов?",
          "words": [
            [
              "has been finished",
              "закончен (Present Perfect пассив)"
            ]
          ]
        },
        {
          "who": "Sam",
          "name": "Сэм",
          "side": "right",
          "en": "Almost. It will be sent by this evening.",
          "ru": "Почти. Его отправят к вечеру.",
          "words": [
            [
              "will be sent",
              "отправят (будущий пассив)"
            ],
            [
              "by this evening",
              "к вечеру"
            ]
          ]
        },
        {
          "who": "Dana",
          "name": "Дана",
          "side": "left",
          "en": "Good. Can the figures be checked once more?",
          "ru": "Хорошо. Цифры можно ещё раз проверить?",
          "words": [
            [
              "can be checked",
              "можно проверить (модальный пассив)"
            ],
            [
              "figures",
              "цифры, данные"
            ]
          ]
        },
        {
          "who": "Sam",
          "name": "Сэм",
          "side": "right",
          "en": "Sure. They've already been checked twice.",
          "ru": "Конечно. Их уже дважды проверили.",
          "words": [
            [
              "been checked",
              "проверены"
            ],
            [
              "twice",
              "дважды"
            ]
          ]
        },
        {
          "who": "Dana",
          "name": "Дана",
          "side": "left",
          "en": "Perfect. Then it must be approved by the manager.",
          "ru": "Отлично. Тогда его должен утвердить менеджер.",
          "words": [
            [
              "must be approved",
              "должен быть утверждён"
            ],
            [
              "by the manager",
              "менеджером"
            ]
          ]
        }
      ]
    },
    "scene": {
      "intro": "Короткая сценка: пропал велосипед. Слушай пассив с деятелем by и без него.",
      "lines": [
        {
          "who": "A",
          "en": "My bike has been stolen!",
          "ru": "Мой велосипед украли!"
        },
        {
          "who": "B",
          "en": "Oh no. Was it locked?",
          "ru": "О нет. Он был заперт?"
        },
        {
          "who": "A",
          "en": "Yes, but the lock was cut with something sharp.",
          "ru": "Да, но замок чем-то острым перерезали."
        },
        {
          "who": "B",
          "en": "It should be reported to the police.",
          "ru": "Об этом нужно сообщить в полицию."
        },
        {
          "who": "A",
          "en": "You're right. It will be reported today.",
          "ru": "Ты прав. Сегодня же сообщу."
        }
      ]
    },
    "vocab": {
      "intro": "Слова и формы дня — пассив во всех временах плюс полезные глаголы. Повтори вслух.",
      "items": [
        {
          "en": "has been sent",
          "ru": "уже отправлен(о)",
          "ex": "The parcel has been sent."
        },
        {
          "en": "will be built",
          "ru": "будет построен",
          "ex": "A school will be built here."
        },
        {
          "en": "can be done",
          "ru": "можно сделать",
          "ex": "It can be done quickly."
        },
        {
          "en": "must be finished",
          "ru": "нужно закончить",
          "ex": "It must be finished today."
        },
        {
          "en": "announced",
          "ru": "объявлен (announce)",
          "ex": "The winner was announced."
        },
        {
          "en": "approved",
          "ru": "утверждён (approve)",
          "ex": "The plan was approved."
        },
        {
          "en": "delivered",
          "ru": "доставлен (deliver)",
          "ex": "The pizza was delivered late."
        },
        {
          "en": "repaired",
          "ru": "отремонтирован (repair)",
          "ex": "The road was repaired."
        },
        {
          "en": "by",
          "ru": "кем (деятель)",
          "ex": "painted by an artist"
        },
        {
          "en": "with",
          "ru": "чем (инструмент)",
          "ex": "cut with scissors"
        },
        {
          "en": "figures",
          "ru": "цифры, данные",
          "ex": "The figures were checked."
        },
        {
          "en": "deadline",
          "ru": "срок, дедлайн",
          "ex": "The deadline has been moved."
        }
      ]
    },
    "reading": {
      "intro": "Короткая заметка о том, как в городе строят новую библиотеку. Найди все формы пассива.",
      "title": "A new library",
      "sentences": [
        "A new library will be built in the centre of our town.",
        "The site has already been chosen.",
        "The old shop was knocked down last year.",
        "The work must be finished by next summer.",
        "Local artists will be asked to paint the walls.",
        "Thousands of books will be moved there from the old building.",
        "When the library is opened, it can be used by everyone for free."
      ],
      "translation": "В центре нашего города построят новую библиотеку. Участок уже выбрали. Старый магазин снесли в прошлом году. Работу нужно закончить к следующему лету. Местных художников попросят расписать стены. Туда из старого здания перевезут тысячи книг. Когда библиотеку откроют, ею сможет бесплатно пользоваться каждый."
    },
    "drag": {
      "intro": "Соедини форму пассива с её переводом.",
      "pairs": [
        [
          "has been sent",
          "уже отправлен"
        ],
        [
          "will be built",
          "будет построен"
        ],
        [
          "can be done",
          "можно сделать"
        ],
        [
          "must be fixed",
          "нужно починить"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по пассиву во всех временах. Пять вопросов — и день закрыт.",
      "items": [
        {
          "q": "«Отчёт уже закончили» —",
          "opts": [
            "The report has finished",
            "The report has been finished",
            "The report is finish"
          ],
          "answer": 1,
          "explain": "Present Perfect пассив: <b>has been finished</b>."
        },
        {
          "q": "«Дом построят в следующем году» —",
          "opts": [
            "The house will built next year",
            "The house will be built next year",
            "The house will be build next year"
          ],
          "answer": 1,
          "explain": "будущий пассив: <b>will be built</b>."
        },
        {
          "q": "«Это можно сделать» —",
          "opts": [
            "It can be do",
            "It can be done",
            "It can done"
          ],
          "answer": 1,
          "explain": "модальный пассив: can be + 3-я форма = <b>done</b>."
        },
        {
          "q": "«Картину написал Дали» (деятель) —",
          "opts": [
            "The picture was painted with Dali",
            "The picture was painted by Dali"
          ],
          "answer": 1,
          "explain": "деятель → <b>by</b>."
        },
        {
          "q": "«Хлеб режут ножом» —",
          "opts": [
            "Bread is cut by a knife",
            "Bread is cut with a knife"
          ],
          "answer": 1,
          "explain": "инструмент → <b>with</b>."
        }
      ]
    },
    "picture": {
      "intro": "Опиши стройку по картинке. Используй пассив во всех временах.",
      "emoji": "🏗️📋✅",
      "prompt": "Опиши, что здесь строят и в каком состоянии проект. Используй: A new ... will be built; The plan has been approved; The work must be finished by ...",
      "hint": "Структуры: A new ... will be built; It has already been approved; It must be finished by ...; It will be used by ...",
      "example": "A new shopping centre will be built here. The plan has already been approved by the city. The old houses were knocked down last month. The work must be finished by next year, and then it will be used by thousands of people.",
      "img": "img/b1/day-12.jpg",
      "credit": "Фото: Greenville, SC Daily Photo · CC0 · <a href=\"https://www.flickr.com/photos/120143184@N05/47943213753\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Расскажи о чём-то, что планируют или уже сделали — на работе, в твоём городе или дома.",
      "prompt": "Напиши 4–6 предложений про какой-то проект (ремонт, стройку, мероприятие). Используй пассив: will be done, has been done, can / must be done.",
      "hint": "Структуры: It will be done by …; It has already been finished; It can be done quickly; It must be checked by …",
      "example": "Our office is going to be redecorated next month. The walls will be painted white and new desks will be bought. The old furniture has already been removed. Everything must be finished before Monday, so it will probably be done in a hurry."
    }
  },
  "13": {
    "day": 13,
    "week": "02",
    "level": "B1",
    "themeRu": "Лучше бы",
    "themeEn": "had better & would rather",
    "intro": "Два оборота сегодня звучат очень по-английски и делают речь взрослой: <b>had better</b> и <b>would rather</b>. Первый — настойчивый совет, почти предупреждение: «лучше сделай это, а то будут проблемы». Второй — про личное предпочтение: «я бы лучше…». По-русски оба прячутся за одно слово «лучше», но в английском это разные вещи. И ловушка у них общая: после обоих <b>нет to</b>. Разложим по полочкам.",
    "introAudio": "Два оборота сегодня звучат очень по-английски и делают речь взрослой: had better и would rather. Первый — настойчивый совет, почти предупреждение: лучше сделай это, а то будут проблемы. Второй — про личное предпочтение: я бы лучше. По-русски оба прячутся за одно слово «лучше», но в английском это разные вещи. И ловушка у них общая: после обоих нет to. Разложим по полочкам.",
    "goals": [
      "давать настойчивый совет через <b>had better</b> (= 'd better) + базовая форма",
      "говорить о предпочтении через <b>would rather</b> … <b>than</b> …",
      "строить отрицание: <b>had better not</b>, <b>would rather not</b>",
      "не вставлять <b>to</b> после had better / would rather"
    ],
    "learned": [
      "Дал(а) настойчивый совет через <b>had better</b> (= 'd better) + базовая форма",
      "Выразил(а) предпочтение через <b>would rather</b> … <b>than</b> …",
      "Построил(а) отрицание: <b>had better not</b>, <b>would rather not</b>",
      "Перестал(а) вставлять <b>to</b> после had better / would rather"
    ],
    "review": {
      "intro": "Сначала закрепим пассив со вчера и позавчера, потом вспомним советы из A2 — <b>should</b> и <b>must</b>. Сегодняшний <b>had better</b> как раз станет рядом с ними, но прозвучит сильнее.",
      "introAudio": "Сначала закрепим пассив со вчера и позавчера, потом вспомним советы из A2: should и must. Сегодняшний had better как раз станет рядом с ними, но прозвучит сильнее.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери модальный пассив. do → done.",
          "q": "«Это нужно сделать сегодня» —",
          "opts": [
            "It must do today",
            "It must be done today",
            "It must be do today"
          ],
          "answer": 1,
          "explain": "модальный + be + 3-я форма: <b>must be done</b>."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши будущий пассив. call back → called back.",
          "q": "Тебе перезвонят.",
          "accept": [
            "you will be called back",
            "you'll be called back"
          ],
          "placeholder": "You will be ..."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери мягкий совет (should). Без to!",
          "q": "«Тебе стоит больше отдыхать» —",
          "opts": [
            "You should rest more",
            "You must rest more",
            "You should to rest more"
          ],
          "answer": 0,
          "explain": "should — мягкий совет «стоит»; после него базовая форма без to."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · настойчивый совет",
        "title": "<em>had better</em> — «лучше сделай это»",
        "paras": [
          "<b>had better</b> — это сильный совет или предупреждение в конкретной ситуации: сделай так, иначе будут неприятности. <b>You'd better take an umbrella.</b> = Лучше возьми зонт (а то промокнешь).",
          "Форма странная только на вид: <b>had better + базовая форма</b> глагола (без to). Несмотря на слово <b>had</b>, смысл — про сейчас и будущее, не про прошлое. Почти всегда сокращают: <b>I'd / you'd / he'd better</b>.",
          "Это сильнее, чем <b>should</b>. should — просто хороший совет («стоит»), had better — «лучше сделай, а то…». Поэтому его не используют по мелочи."
        ],
        "audio": "had better это сильный совет или предупреждение в конкретной ситуации: сделай так, иначе будут неприятности. You'd better take an umbrella — лучше возьми зонт. Форма: had better плюс базовая форма без to. Несмотря на слово had, смысл про сейчас и будущее. Почти всегда сокращают: I'd, you'd, he'd better. Это сильнее, чем should.",
        "table": {
          "rows": [
            [
              "'d better + база",
              "You'd better hurry."
            ],
            [
              "полная форма",
              "You had better hurry."
            ],
            [
              "сила",
              "сильнее, чем should"
            ],
            [
              "о времени",
              "про сейчас / будущее, не прошлое"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Лучше поторопись, мы опаздываем.",
            "en": "You<b>'d better hurry</b>, we're late.",
            "gloss": "'d better + база",
            "say": "You'd better hurry, we're late."
          },
          {
            "ru": "Тебе лучше показаться врачу.",
            "en": "You<b>'d better see</b> a doctor.",
            "gloss": "совет-предупреждение",
            "say": "You'd better see a doctor."
          },
          {
            "ru": "Нам лучше выйти сейчас.",
            "en": "We<b>'d better leave</b> now.",
            "gloss": "we'd better + leave",
            "say": "We'd better leave now."
          }
        ],
        "mistakes": [
          {
            "wrong": "You had better to hurry",
            "right": "You'd better <b>hurry</b>",
            "why": "после had better — базовая форма без to"
          },
          {
            "wrong": "You better hurry",
            "right": "You<b>'d</b> better hurry",
            "why": "в правильной речи нужен 'd (had), не просто «you better»"
          }
        ],
        "mnemonic": "⏰ 'd better + база (без to) — «лучше сделай, а то…».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму. Без to, без -ing.",
            "q": "«Тебе лучше поторопиться» —",
            "opts": [
              "You'd better to hurry",
              "You'd better hurry",
              "You'd better hurrying"
            ],
            "answer": 1,
            "explain": "had better + базовая форма без to: <b>hurry</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери совет с had better.",
            "q": "Собери: «Нам лучше выйти сейчас»",
            "want": "We'd better leave now",
            "answer": "We'd better leave now"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши совет. see a doctor = показаться врачу.",
            "q": "Тебе лучше показаться врачу.",
            "accept": [
              "you'd better see a doctor",
              "you had better see a doctor"
            ],
            "placeholder": "You'd better ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · отрицание",
        "title": "<em>had better not</em> — «лучше не…»",
        "paras": [
          "Отрицание необычное: <b>not</b> идёт сразу после better — <b>had better not + база</b>. <b>You'd better not be late.</b> = Лучше не опаздывай.",
          "Не «don't» и не «not to» — именно <b>'d better not</b>. Это частая ошибка: русскоязычные тянут привычное «don't».",
          "Зато <b>had better not</b> звучит на каждом шагу: «лучше не делай этого», «лучше им не говори». Запомни порядок: better → not → глагол."
        ],
        "audio": "Отрицание необычное: not идёт сразу после better. had better not плюс база. You'd better not be late — лучше не опаздывай. Не don't и не not to, именно 'd better not. Порядок: better, not, глагол.",
        "table": {
          "rows": [
            [
              "had better not + база",
              "You'd better not lie."
            ],
            [
              "❌ don't",
              "не «you'd better don't»"
            ],
            [
              "❌ not to",
              "не «you'd better not to»"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Лучше не опаздывай.",
            "en": "You<b>'d better not be</b> late.",
            "gloss": "'d better not + база",
            "say": "You'd better not be late."
          },
          {
            "ru": "Лучше им не говори.",
            "en": "You<b>'d better not tell</b> them.",
            "gloss": "better not + tell",
            "say": "You'd better not tell them."
          },
          {
            "ru": "Нам лучше не рисковать.",
            "en": "We<b>'d better not take</b> the risk.",
            "gloss": "better not + take",
            "say": "We'd better not take the risk."
          }
        ],
        "mistakes": [
          {
            "wrong": "You'd better don't be late",
            "right": "You'd better <b>not be</b> late",
            "why": "отрицание — better NOT + база, без don't"
          },
          {
            "wrong": "You'd better not to tell them",
            "right": "You'd better <b>not tell</b> them",
            "why": "никакого to после not"
          }
        ],
        "mnemonic": "🚫 'd better NOT + база: «лучше не…».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное отрицание.",
            "q": "«Лучше не опаздывай» —",
            "opts": [
              "You'd better don't be late",
              "You'd better not be late",
              "You'd better not to be late"
            ],
            "answer": 1,
            "explain": "better + not + база: <b>not be</b> late."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери отрицательный совет.",
            "q": "Собери: «Лучше им не говори»",
            "want": "You'd better not tell them",
            "answer": "You'd better not tell them"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши отрицание с had better.",
            "q": "Нам лучше не ждать.",
            "accept": [
              "we'd better not wait",
              "we had better not wait"
            ],
            "placeholder": "We'd better not ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · предпочтение",
        "title": "<em>would rather</em> — «я бы лучше…»",
        "paras": [
          "<b>would rather</b> — про личное предпочтение здесь и сейчас: что ты выберешь. Тоже <b>+ базовая форма без to</b>: <b>I'd rather stay home.</b> = Я бы лучше остался дома.",
          "Чтобы сравнить два варианта, добавляем <b>than</b>: <b>I'd rather walk than take a taxi.</b> = Я бы лучше прошёлся пешком, чем взял такси. После than — снова базовая форма.",
          "Сокращают так же: <b>I'd / you'd / she'd rather</b>. На вопрос «Tea or coffee?» очень по-английски ответить <b>I'd rather have tea.</b>"
        ],
        "audio": "would rather про личное предпочтение здесь и сейчас: что ты выберешь. Тоже плюс базовая форма без to. I'd rather stay home — я бы лучше остался дома. Чтобы сравнить два варианта, добавляем than: I'd rather walk than take a taxi. После than снова базовая форма.",
        "table": {
          "rows": [
            [
              "'d rather + база",
              "I'd rather stay."
            ],
            [
              "… than + база",
              "walk than drive"
            ],
            [
              "вопрос",
              "Would you rather stay or go?"
            ],
            [
              "короткий ответ",
              "I'd rather not."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я бы лучше остался дома сегодня.",
            "en": "I<b>'d rather stay</b> home tonight.",
            "gloss": "'d rather + база",
            "say": "I'd rather stay home tonight."
          },
          {
            "ru": "Я бы лучше прошёлся пешком, чем ехал на такси.",
            "en": "I'd rather <b>walk than take</b> a taxi.",
            "gloss": "… than + база",
            "say": "I'd rather walk than take a taxi."
          },
          {
            "ru": "Ты бы предпочёл чай или кофе?",
            "en": "<b>Would you rather</b> have tea or coffee?",
            "gloss": "вопрос",
            "say": "Would you rather have tea or coffee?"
          }
        ],
        "mistakes": [
          {
            "wrong": "I'd rather to stay home",
            "right": "I'd rather <b>stay</b> home",
            "why": "после would rather — базовая форма без to"
          },
          {
            "wrong": "I'd rather walk that take a taxi",
            "right": "…walk <b>than</b> take a taxi",
            "why": "для сравнения — than, а не that"
          }
        ],
        "mnemonic": "💚 'd rather + база … THAN + база — «лучше …, чем …».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму. Без to.",
            "q": "«Я бы лучше остался дома» —",
            "opts": [
              "I'd rather to stay home",
              "I'd rather stay home",
              "I'd rather staying home"
            ],
            "answer": 1,
            "explain": "would rather + базовая форма без to: <b>stay</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предпочтение с than.",
            "q": "Собери: «Я бы лучше прошёлся пешком, чем ехал на такси»",
            "want": "I'd rather walk than take a taxi",
            "answer": "I'd rather walk than take a taxi"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши предпочтение. have tea = выпить чаю.",
            "q": "Я бы лучше выпил чаю.",
            "accept": [
              "i'd rather have tea",
              "i would rather have tea"
            ],
            "placeholder": "I'd rather ..."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери отрицание с rather.",
            "q": "«Я бы лучше не ходил» —",
            "opts": [
              "I'd rather don't go",
              "I'd rather not go",
              "I'd rather not to go"
            ],
            "answer": 1,
            "explain": "rather + not + база: <b>not go</b>."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "<em>'d better</em> ≠ <em>'d rather</em> — и одно «лучше»",
        "paras": [
          "Обрати внимание: <b>'d</b> прячет два разных слова. В <b>'d better</b> это <b>had</b> (совет: «лучше сделай»). В <b>'d rather</b> это <b>would</b> (предпочтение: «я бы лучше»). По-русски и там, и там «лучше», но по-английски это разные конструкции.",
          "Русское «лучше бы ты позвонил» — это совет → <b>You'd better call her.</b> А «я бы лучше позвонил (а не остался)» — это предпочтение → <b>I'd rather call her.</b> Спутаешь — изменится смысл.",
          "И главное общее правило обоих: <b>никакого to</b> после них. Ни «'d better <s>to</s> go», ни «'d rather <s>to</s> go». Только базовая форма."
        ],
        "audio": "Обрати внимание: 'd прячет два разных слова. В 'd better это had, совет: лучше сделай. В 'd rather это would, предпочтение: я бы лучше. По-русски и там, и там лучше, но по-английски это разные конструкции. И главное общее правило: никакого to после них.",
        "table": {
          "rows": [
            [
              "'d better = had better",
              "совет / предупреждение"
            ],
            [
              "'d rather = would rather",
              "личное предпочтение"
            ],
            [
              "общее",
              "+ база, без to"
            ],
            [
              "«лучше бы ты…»",
              "→ you'd better"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Лучше бы ты позвонил ей (совет).",
            "en": "You<b>'d better call</b> her.",
            "gloss": "совет → 'd better",
            "say": "You'd better call her."
          },
          {
            "ru": "Я бы лучше ей позвонил (предпочтение).",
            "en": "I<b>'d rather call</b> her.",
            "gloss": "предпочтение → 'd rather",
            "say": "I'd rather call her."
          },
          {
            "ru": "Лучше не опаздывай — и я бы тоже не хотел опаздывать.",
            "en": "You<b>'d better not</b> be late, and I<b>'d rather not</b> be late either.",
            "gloss": "better not / rather not",
            "say": "You'd better not be late, and I'd rather not be late either."
          }
        ],
        "mistakes": [
          {
            "wrong": "I'd better stay home (имея в виду «я предпочитаю»)",
            "right": "I'd <b>rather</b> stay home",
            "why": "предпочтение → would rather, а не had better"
          },
          {
            "wrong": "You'd rather see a doctor (имея в виду совет)",
            "right": "You'd <b>better</b> see a doctor",
            "why": "совет-предупреждение → had better"
          }
        ],
        "mnemonic": "🔀 совет → 'd BETTER · предпочтение → 'd RATHER · оба без to.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это совет-предупреждение.",
            "q": "«Лучше бы ты ей позвонил, а то она волнуется» —",
            "opts": [
              "You'd rather call her",
              "You'd better call her"
            ],
            "answer": 1,
            "explain": "совет → <b>'d better</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это твоё личное предпочтение.",
            "q": "«Я бы лучше остался, чем пошёл» —",
            "opts": [
              "I'd better stay than go",
              "I'd rather stay than go"
            ],
            "answer": 1,
            "explain": "предпочтение → <b>'d rather … than</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши совет-отрицание.",
            "q": "Тебе лучше не опаздывать.",
            "accept": [
              "you'd better not be late",
              "you had better not be late"
            ],
            "placeholder": "You'd better not ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Майя и Лео решают, как провести вечер. Слушай had better (настойчивый совет) и would rather (предпочтение) рядом.",
      "lines": [
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "It's getting late. We'd better decide soon.",
          "ru": "Уже поздно. Нам лучше скорее решить.",
          "words": [
            [
              "'d better",
              "лучше (совет)"
            ],
            [
              "decide",
              "решить"
            ]
          ]
        },
        {
          "who": "Leo",
          "name": "Лео",
          "side": "right",
          "en": "True. I'd rather stay in than go out tonight.",
          "ru": "Верно. Я бы лучше остался дома, чем куда-то пошёл.",
          "words": [
            [
              "'d rather … than",
              "лучше …, чем"
            ],
            [
              "stay in",
              "остаться дома"
            ]
          ]
        },
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "Same here. But we'd better not order pizza again.",
          "ru": "И я. Но лучше не заказывать снова пиццу.",
          "words": [
            [
              "'d better not",
              "лучше не"
            ],
            [
              "order",
              "заказывать"
            ]
          ]
        },
        {
          "who": "Leo",
          "name": "Лео",
          "side": "right",
          "en": "Agreed. I'd rather cook something simple.",
          "ru": "Согласен. Я бы лучше приготовил что-то простое.",
          "words": [
            [
              "'d rather",
              "я бы лучше"
            ],
            [
              "simple",
              "простой"
            ]
          ]
        },
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "Then you'd better start now — I'm starving!",
          "ru": "Тогда тебе лучше начать сейчас — я умираю с голоду!",
          "words": [
            [
              "'d better",
              "лучше (настоятельно)"
            ],
            [
              "starving",
              "ужасно голодный"
            ]
          ]
        }
      ]
    },
    "scene": {
      "intro": "Короткая сценка перед поездкой. Найди совет и предпочтение.",
      "lines": [
        {
          "who": "A",
          "en": "The train leaves at six. We'd better hurry.",
          "ru": "Поезд в шесть. Нам лучше поторопиться."
        },
        {
          "who": "B",
          "en": "Honestly, I'd rather take the next one.",
          "ru": "Честно, я бы лучше сел на следующий."
        },
        {
          "who": "A",
          "en": "We'd better not miss this one. It's the last fast train.",
          "ru": "Лучше не пропустить этот. Это последний скорый."
        },
        {
          "who": "B",
          "en": "Fine. I'd rather be early than stressed.",
          "ru": "Ладно. Лучше приехать раньше, чем нервничать."
        },
        {
          "who": "A",
          "en": "Good choice. Let's go.",
          "ru": "Хороший выбор. Пошли."
        }
      ]
    },
    "vocab": {
      "intro": "Слова и обороты дня — советы и предпочтения. Повтори вслух.",
      "items": [
        {
          "en": "'d better",
          "ru": "лучше (настойчивый совет)",
          "ex": "You'd better hurry."
        },
        {
          "en": "'d better not",
          "ru": "лучше не",
          "ex": "You'd better not lie."
        },
        {
          "en": "would rather",
          "ru": "я бы лучше (предпочтение)",
          "ex": "I'd rather walk."
        },
        {
          "en": "… than …",
          "ru": "…, чем …",
          "ex": "tea rather than coffee"
        },
        {
          "en": "prefer",
          "ru": "предпочитать",
          "ex": "I prefer tea to coffee."
        },
        {
          "en": "hurry",
          "ru": "торопиться",
          "ex": "You'd better hurry."
        },
        {
          "en": "warning",
          "ru": "предупреждение",
          "ex": "a friendly warning"
        },
        {
          "en": "advice",
          "ru": "совет",
          "ex": "That's good advice."
        },
        {
          "en": "stay in",
          "ru": "остаться дома",
          "ex": "I'd rather stay in."
        },
        {
          "en": "go out",
          "ru": "пойти куда-то, гулять",
          "ex": "Let's go out tonight."
        },
        {
          "en": "miss (the train)",
          "ru": "пропустить, опоздать на",
          "ex": "Don't miss the bus."
        },
        {
          "en": "on time",
          "ru": "вовремя",
          "ex": "We'd better be on time."
        }
      ]
    },
    "reading": {
      "intro": "Короткое письмо-совет другу перед собеседованием. Найди had better и would rather.",
      "title": "Before the interview",
      "sentences": [
        "You'd better get there early — first impressions matter.",
        "I'd rather arrive too soon than be even a minute late.",
        "You'd better not wear jeans; a suit looks more serious.",
        "If they ask hard questions, you'd better stay calm.",
        "Personally, I'd rather be honest than invent answers.",
        "You'd better switch off your phone before you go in.",
        "Good luck — I'd rather see you relaxed than nervous!"
      ],
      "translation": "Тебе лучше прийти туда заранее — первое впечатление важно. Я бы лучше пришёл слишком рано, чем опоздал хоть на минуту. Лучше не надевай джинсы; костюм смотрится серьёзнее. Если будут трудные вопросы, тебе лучше сохранять спокойствие. Лично я бы лучше был честным, чем выдумывал ответы. Тебе лучше выключить телефон, прежде чем войдёшь. Удачи — я бы лучше видел тебя спокойным, чем нервным!"
    },
    "drag": {
      "intro": "Соедини английскую фразу с её переводом.",
      "pairs": [
        [
          "You'd better hurry",
          "Тебе лучше поторопиться"
        ],
        [
          "You'd better not be late",
          "Тебе лучше не опаздывать"
        ],
        [
          "I'd rather stay home",
          "Я бы лучше остался дома"
        ],
        [
          "I'd rather walk than drive",
          "Я бы лучше пошёл, чем поехал"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по had better и would rather. Пять вопросов — и день твой.",
      "items": [
        {
          "q": "«Тебе лучше поторопиться» —",
          "opts": [
            "You'd better to hurry",
            "You'd better hurry",
            "You'd better hurrying"
          ],
          "answer": 1,
          "explain": "had better + базовая форма без to: <b>hurry</b>."
        },
        {
          "q": "«Лучше не опаздывай» —",
          "opts": [
            "You'd better don't be late",
            "You'd better not be late"
          ],
          "answer": 1,
          "explain": "отрицание: better + not + база."
        },
        {
          "q": "«Я бы лучше остался дома, чем пошёл гулять» —",
          "opts": [
            "I'd rather stay home than go out",
            "I'd rather stay home that go out",
            "I'd rather to stay home than go out"
          ],
          "answer": 0,
          "explain": "would rather + база … <b>than</b> + база."
        },
        {
          "q": "Слово 'd в «I'd rather» — это…",
          "opts": [
            "had",
            "would",
            "did"
          ],
          "answer": 1,
          "explain": "would rather → 'd = <b>would</b> (а в 'd better это had)."
        },
        {
          "q": "«Лучше бы ты ей позвонил, а то она волнуется» —",
          "opts": [
            "You'd rather call her",
            "You'd better call her"
          ],
          "answer": 1,
          "explain": "это совет-предупреждение → <b>'d better</b>."
        }
      ]
    },
    "picture": {
      "intro": "Дай человеку на картинке настойчивый совет.",
      "emoji": "🌧️☂️🏃",
      "prompt": "Дай совет по картинке. Используй You'd better … и You'd better not …",
      "hint": "Структуры: You'd better take an umbrella; You'd better hurry; You'd better not forget your keys.",
      "example": "It's raining hard, so you'd better take an umbrella. You'd better hurry, or you'll miss the bus. And you'd better not forget your keys again!",
      "img": "img/b1/day-13.jpg",
      "credit": "Фото: no sabemos cómo llamarnos · CC0 · <a href=\"https://www.flickr.com/photos/27440475@N03/28524261720\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Представь, что друг переезжает в новый город. Дай ему советы и скажи, что бы ты сам(а) предпочёл(ла).",
      "prompt": "Напиши 4–6 предложений с советами и предпочтениями. Используй had better (совет) и would rather (предпочтение).",
      "hint": "Структуры: You'd better …; You'd better not …; I'd rather … than …",
      "example": "You'd better find a flat near the centre — it saves a lot of time. You'd better not sign anything before you see the place. Personally, I'd rather pay a bit more than live far from work. You'd better learn the bus routes early. And honestly, I'd rather have a small clean flat than a big messy one."
    }
  },
  "14": {
    "day": 14,
    "week": "02",
    "level": "B1",
    "themeRu": "Повторение №2",
    "themeEn": "Review 2",
    "intro": "Вот и конец второй недели — а неделя была серьёзная: гипотезы («если бы…»), сожаления («жаль, что…») и весь пассив («это делают / сделают / можно сделать»). Сегодня ничего нового — собираем всё вместе и проверяем себя. Это тот день, после которого «бы» и «был сделан» перестают путаться. Два маяка недели: <b>would только в главной части</b> условия и <b>be в пассиве не теряем</b>. Начнём — спокойно и с удовольствием.",
    "introAudio": "Вот и конец второй недели — а неделя была серьёзная: гипотезы (если бы), сожаления (жаль, что) и весь пассив (это делают, сделают, можно сделать). Сегодня ничего нового — собираем всё вместе и проверяем себя. Это тот день, после которого «бы» и «был сделан» перестают путаться. Два маяка недели: would только в главной части условия, и be в пассиве не теряем. Начнём — спокойно и с удовольствием.",
    "goals": [
      "уверенно выбирать second или third conditional — и ставить <b>would только в главную часть</b>",
      "выражать сожаление через <b>wish + Past / Past Perfect</b>",
      "строить пассив во всех временах: is/was done · has been done · will be done · can be done",
      "не путать <b>had better</b> (совет) и <b>would rather</b> (предпочтение)"
    ],
    "learned": [
      "Уверенно выбрал(а) second или third conditional — и поставил(а) <b>would только в главную часть</b>",
      "Выразил(а) сожаление через <b>wish + Past / Past Perfect</b>",
      "Построил(а) пассив во всех временах: is/was done · has been done · will be done · can be done",
      "Перестал(а) путать <b>had better</b> (совет) и <b>would rather</b> (предпочтение)"
    ],
    "review": {
      "intro": "Большая утренняя разминка по всей неделе 2. Идём по темам: условные, wish, пассив, had better — плюс наши «всегда-на-связи» 3-я форма и предлоги. Не спеши: это репетиция перед тестом.",
      "introAudio": "Большая утренняя разминка по всей неделе 2. Идём по темам: условные, wish, пассив, had better, плюс наши всегда-на-связи третья форма и предлоги. Не спеши: это репетиция перед тестом.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> Second conditional. would — только в главной части!",
          "q": "«Если бы у меня были деньги, я бы купил машину» —",
          "opts": [
            "If I have money, I would buy a car",
            "If I had money, I would buy a car",
            "If I would have money, I would buy a car"
          ],
          "answer": 1,
          "explain": "после if — Past Simple (had), would — только в главной части."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> Third conditional — нереальное прошлое.",
          "q": "«Если бы я знал, я бы пришёл» —",
          "opts": [
            "If I knew, I would come",
            "If I had known, I would have come",
            "If I would have known, I would have come"
          ],
          "answer": 1,
          "explain": "Third: if + had known, would have + come. Никакого «if I would»."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> wish о настоящем → Past Simple. know → knew.",
          "q": "Жаль, что я не знаю её имени.",
          "accept": [
            "i wish i knew her name"
          ],
          "placeholder": "I wish I ... her name"
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> пассив в прошлом. build → built.",
          "q": "Собери: «Этот мост построили в 1920»",
          "want": "This bridge was built in 1920",
          "answer": "This bridge was built in 1920"
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> модальный пассив — не теряй be и 3-ю форму.",
          "q": "«Это можно сделать» —",
          "opts": [
            "It can be do",
            "It can be done",
            "It can done"
          ],
          "answer": 1,
          "explain": "can be + 3-я форма: <b>done</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> предлог деятеля (always-on). Леннон — кто написал.",
          "q": "«Песню написал Леннон» — The song was ___.",
          "opts": [
            "written with Lennon",
            "written by Lennon"
          ],
          "answer": 1,
          "explain": "деятель → <b>by</b> (with — это «чем», инструмент)."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Сборка 1 · условные",
        "title": "Second или Third — и где «бы»",
        "paras": [
          "Главная ловушка недели: русское «бы» одно, а в английском <b>would стоит только в главной части</b>, не в if. После if — простое время (Past Simple или Past Perfect), а would — во второй половине.",
          "<b>Нереальное настоящее</b> (Second): <b>If I had time, I would help.</b> = Если бы у меня было время, я бы помог. <b>Нереальное прошлое</b> (Third): <b>If I had had time, I would have helped.</b> = Если бы тогда было время, я бы помог.",
          "Проверка: видишь «would have» сразу после if — это ошибка. «If I would have known» ❌ → <b>If I had known</b> ✅."
        ],
        "audio": "Главная ловушка недели: русское бы одно, а в английском would стоит только в главной части, не в if. После if простое время, Past Simple или Past Perfect, а would во второй половине. Видишь would have сразу после if — это ошибка. If I would have known — нет, If I had known — да.",
        "table": {
          "rows": [
            [
              "Second (сейчас)",
              "If + Past, would + база"
            ],
            [
              "Third (тогда)",
              "If + had done, would have done"
            ],
            [
              "правило",
              "would — только в главной"
            ],
            [
              "❌ запрет",
              "не «if I would…»"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Если бы я был богат, я бы путешествовал.",
            "en": "If I <b>were</b> rich, I <b>would travel</b>.",
            "gloss": "Second",
            "say": "If I were rich, I would travel."
          },
          {
            "ru": "Если бы я знал, я бы тебе сказал.",
            "en": "If I <b>had known</b>, I <b>would have told</b> you.",
            "gloss": "Third",
            "say": "If I had known, I would have told you."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I would be rich, I would travel",
            "right": "If I <b>were</b> rich, I would travel",
            "why": "would нельзя в if — только в главной"
          },
          {
            "wrong": "If I would have known…",
            "right": "If I <b>had</b> known…",
            "why": "Third: после if — had + 3-я форма"
          }
        ],
        "mnemonic": "🪞 Одно «бы» = одно would, и только в главной части.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> Second conditional, совет «на твоём месте».",
            "q": "«Если бы я был тобой, я бы подождал» —",
            "opts": [
              "If I would be you, I would wait",
              "If I were you, I would wait",
              "If I am you, I will wait"
            ],
            "answer": 1,
            "explain": "If I were you, I would … — would только в главной."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> Third conditional — про прошлое.",
            "q": "«Если бы автобус не опоздал, мы бы успели» —",
            "opts": [
              "If the bus hadn't been late, we would have made it",
              "If the bus wouldn't be late, we would make it"
            ],
            "answer": 0,
            "explain": "Third: if + had(n't) been, would have made."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери Second conditional.",
            "q": "Собери: «Если бы у меня была карта, я бы не заблудился»",
            "want": "If I had a map I wouldn't get lost",
            "answer": "If I had a map I wouldn't get lost"
          }
        ]
      },
      {
        "eyebrow": "Сборка 2 · сожаления",
        "title": "<em>wish</em> — «жаль, что…»",
        "paras": [
          "<b>wish + Past Simple</b> — сожаление о настоящем: <b>I wish I knew.</b> = Жаль, что я не знаю (хотел бы знать). Русское настоящее «не знаю» по-английски уходит в Past.",
          "<b>wish + Past Perfect</b> — сожаление о прошлом: <b>I wish I had studied.</b> = Жаль, что я не учился. А <b>wish + would</b> — раздражение от чужого поведения: <b>I wish he would stop.</b>",
          "Заметь: в русском «жаль, что НЕ…», а в английском после wish — утверждение без второго «не»: <b>I wish I had a car</b> (сам факт «у меня нет» уже внутри)."
        ],
        "audio": "wish плюс Past Simple — сожаление о настоящем: I wish I knew, жаль, что я не знаю. Русское настоящее не знаю по-английски уходит в Past. wish плюс Past Perfect — сожаление о прошлом: I wish I had studied. wish плюс would — раздражение от чужого поведения: I wish he would stop.",
        "table": {
          "rows": [
            [
              "wish + Past",
              "о настоящем: I wish I knew."
            ],
            [
              "wish + Past Perfect",
              "о прошлом: I wish I had gone."
            ],
            [
              "wish + would",
              "о чужой привычке: I wish he would call."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Жаль, что я не говорю по-французски.",
            "en": "I <b>wish</b> I <b>spoke</b> French.",
            "gloss": "wish + Past",
            "say": "I wish I spoke French."
          },
          {
            "ru": "Жаль, что я не сказал ей правду.",
            "en": "I wish I <b>had told</b> her the truth.",
            "gloss": "wish + Past Perfect",
            "say": "I wish I had told her the truth."
          }
        ],
        "mistakes": [
          {
            "wrong": "I wish I know the answer",
            "right": "I wish I <b>knew</b> the answer",
            "why": "о настоящем — wish + Past (knew)"
          },
          {
            "wrong": "I wish I have studied more",
            "right": "I wish I <b>had</b> studied more",
            "why": "о прошлом — wish + Past Perfect"
          }
        ],
        "mnemonic": "💭 wish + Past (сейчас) · wish + had done (тогда).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сожаление о настоящем → Past.",
            "q": "«Жаль, что у меня нет машины» —",
            "opts": [
              "I wish I have a car",
              "I wish I had a car"
            ],
            "answer": 1,
            "explain": "о настоящем — wish + Past: <b>had</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> сожаление о прошлом → wish + Past Perfect.",
            "q": "Жаль, что я не остался дольше.",
            "accept": [
              "i wish i had stayed longer",
              "i wish i'd stayed longer"
            ],
            "placeholder": "I wish I had ..."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> раздражение от чужого поведения → wish + would.",
            "q": "«Жаль, что он не перезванивает» —",
            "opts": [
              "I wish he calls back",
              "I wish he would call back"
            ],
            "answer": 1,
            "explain": "о чужой привычке/поведении — wish + <b>would</b>."
          }
        ]
      },
      {
        "eyebrow": "Сборка 3 · пассив",
        "title": "<em>be</em> в пассиве — во всех временах",
        "paras": [
          "Пассив — это всегда <b>форма be + 3-я форма</b>. Меняется только be: <b>is done</b> (сейчас), <b>was done</b> (прошлое), <b>has been done</b> (уже готово), <b>will be done</b> (будущее), <b>can be done</b> (можно).",
          "Вторая ловушка недели: <b>не теряй be</b> и не забывай 3-ю форму. «English <s>is speak</s>» ❌ → <b>English is spoken</b>. «It can be <s>do</s>» ❌ → <b>It can be done</b>.",
          "Деятель — через <b>by</b> (кем), инструмент — через <b>with</b> (чем). Часто деятеля вообще не называют."
        ],
        "audio": "Пассив это всегда форма be плюс третья форма. Меняется только be: is done сейчас, was done прошлое, has been done уже готово, will be done будущее, can be done можно. Не теряй be и не забывай третью форму. English is spoken, не is speak. It can be done, не can be do. Деятель через by, инструмент через with.",
        "table": {
          "rows": [
            [
              "настоящее",
              "is / are done"
            ],
            [
              "прошлое",
              "was / were done"
            ],
            [
              "перфект",
              "has / have been done"
            ],
            [
              "будущее / модальный",
              "will be done / can be done"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Здесь говорят по-английски.",
            "en": "English <b>is spoken</b> here.",
            "gloss": "present passive",
            "say": "English is spoken here."
          },
          {
            "ru": "Отчёт уже отправили.",
            "en": "The report <b>has been sent</b>.",
            "gloss": "perfect passive",
            "say": "The report has been sent."
          },
          {
            "ru": "Это можно сделать сегодня.",
            "en": "It <b>can be done</b> today.",
            "gloss": "modal passive",
            "say": "It can be done today."
          }
        ],
        "mistakes": [
          {
            "wrong": "English is speak here",
            "right": "English is <b>spoken</b> here",
            "why": "пассив — be + 3-я форма (spoken)"
          },
          {
            "wrong": "It will done tomorrow",
            "right": "It will <b>be</b> done tomorrow",
            "why": "не теряй be: will BE done"
          }
        ],
        "mnemonic": "🔁 be + 3-я форма всегда; меняется только be.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> будущий пассив.",
            "q": "«Дом построят в следующем году» —",
            "opts": [
              "The house will built next year",
              "The house will be built next year",
              "The house will be build next year"
            ],
            "answer": 1,
            "explain": "will + be + 3-я форма: <b>will be built</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> пассив Present Perfect. send → sent.",
            "q": "Письмо уже отправили.",
            "accept": [
              "the letter has been sent",
              "the email has been sent"
            ],
            "placeholder": "The letter has been ..."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> пассив с деятелем by. write → written.",
            "q": "Собери: «Эту песню написал Леннон»",
            "want": "This song was written by Lennon",
            "answer": "This song was written by Lennon"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> модальный пассив.",
            "q": "«Это нужно проверить» —",
            "opts": [
              "It must be check",
              "It must be checked",
              "It must checked"
            ],
            "answer": 1,
            "explain": "must be + 3-я форма: <b>checked</b>."
          }
        ]
      },
      {
        "eyebrow": "Сборка 4 · совет и выбор",
        "title": "<em>'d better</em> (совет) vs <em>'d rather</em> (выбор)",
        "paras": [
          "<b>'d better</b> = had better — настойчивый совет: «лучше сделай, а то…». <b>'d rather</b> = would rather — предпочтение: «я бы лучше…». Оба — <b>+ база без to</b>.",
          "Отрицания: <b>had better not</b>, <b>would rather not</b> — not идёт сразу после better/rather, без don't и без to.",
          "<b>You'd better hurry.</b> (совет) · <b>I'd rather walk than drive.</b> (выбор)."
        ],
        "audio": "'d better это had better, настойчивый совет: лучше сделай, а то. 'd rather это would rather, предпочтение: я бы лучше. Оба плюс база без to. Отрицания: had better not, would rather not, not сразу после better или rather. You'd better hurry — совет. I'd rather walk than drive — выбор.",
        "table": {
          "rows": [
            [
              "'d better + база",
              "совет: You'd better go."
            ],
            [
              "'d rather + база … than",
              "выбор: I'd rather stay than go."
            ],
            [
              "оба",
              "без to"
            ],
            [
              "отрицание",
              "better not / rather not"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Тебе лучше поторопиться.",
            "en": "You<b>'d better hurry</b>.",
            "gloss": "совет",
            "say": "You'd better hurry."
          },
          {
            "ru": "Я бы лучше остался, чем ушёл.",
            "en": "I<b>'d rather stay than go</b>.",
            "gloss": "выбор",
            "say": "I'd rather stay than go."
          }
        ],
        "mistakes": [
          {
            "wrong": "You'd better to hurry",
            "right": "You'd better <b>hurry</b>",
            "why": "без to"
          },
          {
            "wrong": "I'd rather staying home",
            "right": "I'd rather <b>stay</b> home",
            "why": "базовая форма, не -ing"
          }
        ],
        "mnemonic": "🔀 совет → 'd better · выбор → 'd rather · оба без to.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> отрицательный совет.",
            "q": "«Тебе лучше не опаздывать» —",
            "opts": [
              "You'd better not be late",
              "You'd better don't be late"
            ],
            "answer": 0,
            "explain": "better + not + база, без don't."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> предпочтение, без to.",
            "q": "«Я бы лучше остался дома» —",
            "opts": [
              "I'd rather to stay home",
              "I'd rather stay home"
            ],
            "answer": 1,
            "explain": "would rather + базовая форма без to."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери совет.",
            "q": "Собери: «Нам лучше выйти сейчас»",
            "want": "We'd better leave now",
            "answer": "We'd better leave now"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Сценка-повторение: двое друзей строят планы на поездку. Поймай условные, wish, пассив и had better в живой речи.",
      "lines": [
        {
          "who": "A",
          "en": "The tickets have already been booked.",
          "ru": "Билеты уже забронированы."
        },
        {
          "who": "B",
          "en": "Great. If I were you, I'd pack tonight.",
          "ru": "Отлично. На твоём месте я бы собрался уже сегодня."
        },
        {
          "who": "A",
          "en": "You're right. I'd rather pack early than rush.",
          "ru": "Ты прав. Я бы лучше собрался заранее, чем потом спешить."
        },
        {
          "who": "B",
          "en": "And you'd better not forget your passport!",
          "ru": "И лучше не забудь паспорт!"
        },
        {
          "who": "A",
          "en": "Ha! I wish I had a better memory.",
          "ru": "Ха! Жаль, что у меня плохая память."
        },
        {
          "who": "B",
          "en": "If you had written a list, it would have been easier.",
          "ru": "Если бы ты написал список, было бы проще."
        }
      ]
    },
    "dialogue": {
      "intro": "Длинный диалог-повторение в турагентстве. Все темы недели 2 в одном разговоре — слушай и замечай.",
      "lines": [
        {
          "who": "Nick",
          "name": "Ник",
          "side": "left",
          "en": "I wish I had booked earlier. Are there any seats left?",
          "ru": "Жаль, что я не забронировал раньше. Места ещё есть?",
          "words": [
            [
              "wish I had booked",
              "жаль, что не забронировал"
            ],
            [
              "seats left",
              "оставшиеся места"
            ]
          ]
        },
        {
          "who": "Agent",
          "name": "Агент",
          "side": "right",
          "en": "A few. The last rooms will be sold by tonight, though.",
          "ru": "Немного. Правда, последние номера раскупят к вечеру.",
          "words": [
            [
              "will be sold",
              "будут проданы"
            ],
            [
              "though",
              "впрочем, хотя"
            ]
          ]
        },
        {
          "who": "Nick",
          "name": "Ник",
          "side": "left",
          "en": "Then I'd better decide now. If I waited, I'd lose the deal.",
          "ru": "Тогда мне лучше решить сейчас. Если бы я подождал, я бы упустил предложение.",
          "words": [
            [
              "'d better decide",
              "лучше решить"
            ],
            [
              "I'd lose",
              "я бы упустил"
            ]
          ]
        },
        {
          "who": "Agent",
          "name": "Агент",
          "side": "right",
          "en": "Wise. Everything can be arranged in five minutes.",
          "ru": "Мудро. Всё можно устроить за пять минут.",
          "words": [
            [
              "can be arranged",
              "можно устроить"
            ]
          ]
        },
        {
          "who": "Nick",
          "name": "Ник",
          "side": "left",
          "en": "Perfect. I'd rather pay a bit more than miss this trip.",
          "ru": "Отлично. Я бы лучше заплатил чуть больше, чем пропустил эту поездку.",
          "words": [
            [
              "'d rather … than",
              "лучше …, чем"
            ],
            [
              "miss this trip",
              "пропустить поездку"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Ключевые обороты недели 2 — собраны вместе. Повтори вслух и проверь, что узнаёшь каждый.",
      "items": [
        {
          "en": "if I were you",
          "ru": "на твоём месте (Second cond.)",
          "ex": "If I were you, I'd wait."
        },
        {
          "en": "would have done",
          "ru": "сделал бы (Third cond.)",
          "ex": "I would have come earlier."
        },
        {
          "en": "I wish I knew",
          "ru": "жаль, что не знаю",
          "ex": "I wish I knew the answer."
        },
        {
          "en": "has been done",
          "ru": "уже сделано",
          "ex": "It has been done."
        },
        {
          "en": "will be sold",
          "ru": "будет продан",
          "ex": "The rooms will be sold fast."
        },
        {
          "en": "can be arranged",
          "ru": "можно устроить",
          "ex": "It can be arranged today."
        },
        {
          "en": "by",
          "ru": "кем (деятель)",
          "ex": "written by an author"
        },
        {
          "en": "with",
          "ru": "чем (инструмент)",
          "ex": "cut with a knife"
        },
        {
          "en": "'d better",
          "ru": "лучше (совет)",
          "ex": "You'd better hurry."
        },
        {
          "en": "'d rather … than",
          "ru": "лучше …, чем",
          "ex": "I'd rather walk than drive."
        },
        {
          "en": "book (a room)",
          "ru": "забронировать",
          "ex": "I booked a room online."
        },
        {
          "en": "deal",
          "ru": "сделка, выгодное предложение",
          "ex": "That's a good deal."
        }
      ]
    },
    "reading": {
      "intro": "Итог недели 2 в одном тексте — рассказ о неудачной и удачной поездке. Найди условные, wish, пассив и had better.",
      "title": "Two trips",
      "sentences": [
        "Last year our flight was cancelled at the last minute.",
        "If we had checked the email, we would have known earlier.",
        "I wish we had bought travel insurance.",
        "This year everything has been planned carefully.",
        "The hotel has already been booked and paid for.",
        "If anything goes wrong, it can be changed for free.",
        "Honestly, I'd rather plan too much than panic again.",
        "And we'd better leave for the airport very early!"
      ],
      "translation": "В прошлом году наш рейс отменили в последнюю минуту. Если бы мы проверили почту, мы бы узнали раньше. Жаль, что мы не купили страховку. В этом году всё тщательно спланировано. Отель уже забронирован и оплачен. Если что-то пойдёт не так, это можно бесплатно поменять. Честно, я бы лучше перестарался с планированием, чем снова паниковал. И нам лучше выехать в аэропорт очень рано!"
    },
    "drag": {
      "intro": "Соедини английскую фразу недели 2 с её переводом.",
      "pairs": [
        [
          "If I were you, I'd wait",
          "На твоём месте я бы подождал"
        ],
        [
          "I wish I had known",
          "Жаль, что я не знал"
        ],
        [
          "It will be done tomorrow",
          "Это сделают завтра"
        ],
        [
          "You'd better hurry",
          "Тебе лучше поторопиться"
        ]
      ]
    },
    "quiz": {
      "intro": "Тест по всей неделе 2 — шесть вопросов на условные, wish, пассив и советы. Покажи, что «бы» и «был сделан» больше не путаются!",
      "items": [
        {
          "q": "«Если бы у меня было время, я бы помог» —",
          "opts": [
            "If I have time, I would help",
            "If I had time, I would help",
            "If I would have time, I would help"
          ],
          "answer": 1,
          "explain": "Second: if + Past, would — только в главной."
        },
        {
          "q": "«Если бы я знал, я бы пришёл» —",
          "opts": [
            "If I knew, I would have come",
            "If I had known, I would have come",
            "If I would know, I would come"
          ],
          "answer": 1,
          "explain": "Third: if + had known, would have + come."
        },
        {
          "q": "«Жаль, что я не говорю по-испански» —",
          "opts": [
            "I wish I speak Spanish",
            "I wish I spoke Spanish",
            "I wish I have spoken Spanish"
          ],
          "answer": 1,
          "explain": "о настоящем — wish + Past: <b>spoke</b>."
        },
        {
          "q": "«Отчёт уже отправили» —",
          "opts": [
            "The report has sent",
            "The report has been sent",
            "The report is send"
          ],
          "answer": 1,
          "explain": "Present Perfect пассив: <b>has been sent</b>."
        },
        {
          "q": "«Это нельзя изменить» —",
          "opts": [
            "It can't be change",
            "It can't be changed",
            "It doesn't can be changed"
          ],
          "answer": 1,
          "explain": "модальный пассив: can't be + 3-я форма."
        },
        {
          "q": "«Я бы лучше прошёлся пешком, чем ехал» —",
          "opts": [
            "I'd better walk than drive",
            "I'd rather walk than drive",
            "I'd rather walk that drive"
          ],
          "answer": 1,
          "explain": "предпочтение → would rather … <b>than</b> …"
        }
      ]
    },
    "picture": {
      "intro": "Опиши планирование поездки по картинке — собери всю неделю 2.",
      "emoji": "🗺️✈️🧳",
      "prompt": "Опиши, как готовятся к поездке. Используй пассив и условные: The tickets have been booked; If I were you…; You'd better…",
      "hint": "Структуры: The hotel has been booked; If I were you, I'd …; You'd better not forget …; I'd rather … than …",
      "example": "Everything has been planned for the trip. The flights have been booked and the hotel has been paid for. If I were you, I'd pack a day early. You'd better not forget your passport. Honestly, I'd rather be ready too soon than miss the plane.",
      "img": "img/b1/day-14.jpg",
      "credit": "Фото: ShaluSharmaBihar · Public Domain · <a href=\"https://www.flickr.com/photos/98302443@N00/28017440976\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Финал недели 2 — расскажи о решении, которое ты принял(а), и о том, что бы сделал(а) иначе.",
      "prompt": "Напиши 5–7 предложений, используя темы недели: условные (if I had…), wish, пассив, had better / would rather.",
      "hint": "Структуры: If I had …, I would have …; I wish I had …; It was decided / has been done; You'd better …; I'd rather … than …",
      "example": "Last month I had to choose between two jobs. I wish I had asked more questions at the interview. If I had known about the long hours, I would have thought twice. In the end the offer was accepted and the contract has already been signed. Now I'd rather make the best of it than complain. And next time I'd better do my research first."
    }
  },
  "15": {
    "day": 15,
    "week": "03",
    "level": "B1",
    "themeRu": "Он сказал, что…",
    "themeEn": "Reported speech: statements",
    "intro": "Привет! Начинается новая неделя — и с ней новое умение: <b>чужая речь</b>. Каждый день мы пересказываем чьи-то слова: «Он сказал, что устал», «Она написала, что приедет». При пересказе в английском есть то, чего нет в русском, — <b>сдвиг времени</b>. Сегодня разберёмся, почему «I am tired» в пересказе становится «He said he <b>was</b> tired», и когда нужен <b>say</b>, а когда <b>tell</b>. Шаг за шагом.",
    "introAudio": "Привет! Начинается новая неделя — и с ней новое умение: чужая речь. Каждый день мы пересказываем чьи-то слова: Он сказал, что устал. Она написала, что приедет. При пересказе в английском есть то, чего нет в русском — сдвиг времени. Сегодня разберёмся, почему I am tired в пересказе становится He said he was tired, и когда нужен say, а когда tell. Шаг за шагом.",
    "goals": [
      "пересказывать чужие слова: He said (that) he was busy",
      "делать сдвиг времён: is → was, like → liked, will → would, did → had done",
      "не путать say и tell: tell + кому, say без адресата",
      "видеть русскую ловушку: «He said he is tired» → was tired"
    ],
    "learned": [
      "Пересказал(а) чужие слова: He said (that) he was busy",
      "Сделал(а) сдвиг времён: is → was, like → liked, will → would, did → had done",
      "Перестал(а) путать say и tell: tell + кому, say без адресата",
      "Увидел(а) русскую ловушку: «He said he is tired» → was tired"
    ],
    "review": {
      "intro": "Перед новым — короткая разминка. Сначала наш always-on герой Present Perfect, потом мини-тренировка «поставь в прошедшее» — она прямо готовит к сегодняшнему сдвигу времён.",
      "introAudio": "Перед новым — короткая разминка. Сначала наш always-on герой Present Perfect, потом мини-тренировка поставь в прошедшее — она готовит к сегодняшнему сдвигу времён.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери Present Perfect (have/has + 3-я форма).",
          "q": "«Я уже закончил отчёт» —",
          "opts": [
            "I already finish the report",
            "I have already finished the report",
            "I am already finished the report"
          ],
          "answer": 1,
          "explain": "have + already + 3-я форма: <b>have finished</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> поставь глагол в прошедшее — это и есть будущий «сдвиг».",
          "q": "Прошедшее от «she works» —",
          "opts": [
            "she worked",
            "she has worked",
            "she working"
          ],
          "answer": 0,
          "explain": "Present Simple → Past Simple: works → <b>worked</b>."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> сдвинь present perfect ещё на шаг назад — в past perfect.",
          "q": "Сдвинь назад: «they have finished» →",
          "accept": [
            "they had finished"
          ],
          "placeholder": "they had ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · чужая речь",
        "title": "Пересказ сдвигает время на шаг назад",
        "paras": [
          "Когда ты пересказываешь чьи-то слова, в английском глагол «отступает» на шаг в прошлое. Логика простая: человек говорил это РАНЬШЕ, поэтому и время сдвигается назад. По-русски мы так не делаем — и в этом вся ловушка.",
          "Прямая речь: <b>«I am tired,»</b> he said. Пересказ: <b>He said (that) he was tired.</b> Настоящее <b>am / is / are → was / were</b>. Present Simple <b>like → liked</b>, <b>works → worked</b>.",
          "Слово <b>that</b> («что») можно оставить или убрать — смысл не меняется: He said that he was tired = He said he was tired."
        ],
        "audio": "Когда ты пересказываешь чьи-то слова, глагол отступает на шаг в прошлое. Прямая речь: I am tired, he said. Пересказ: He said he was tired. am, is, are превращаются в was, were. like в liked. Слово that можно оставить или убрать.",
        "table": {
          "rows": [
            [
              "am / is / are → was / were",
              "He is busy → He said he was busy"
            ],
            [
              "like / works → liked / worked",
              "I like tea → He said he liked tea"
            ],
            [
              "that можно убрать",
              "He said (that) he knew."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он сказал, что устал.",
            "en": "He said (that) he <b>was</b> tired.",
            "gloss": "is → was",
            "say": "He said he was tired."
          },
          {
            "ru": "Она сказала, что любит чай.",
            "en": "She said she <b>liked</b> tea.",
            "gloss": "like → liked",
            "say": "She said she liked tea."
          },
          {
            "ru": "Они сказали, что живут здесь.",
            "en": "They said they <b>lived</b> here.",
            "gloss": "live → lived",
            "say": "They said they lived here."
          }
        ],
        "mistakes": [
          {
            "wrong": "He said he is tired",
            "right": "He said he <b>was</b> tired",
            "why": "при пересказе время сдвигается: is → was"
          },
          {
            "wrong": "She said she like tea",
            "right": "She said she <b>liked</b> tea",
            "why": "Present → Past: like → liked"
          }
        ],
        "mnemonic": "↩️ Пересказ = шаг назад во времени: is → was, like → liked.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сдвинь время на шаг назад.",
            "q": "«Он сказал, что голоден» (he is hungry) —",
            "opts": [
              "He said he is hungry",
              "He said he was hungry",
              "He say he was hungry"
            ],
            "answer": 1,
            "explain": "is → <b>was</b>: He said he was hungry."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери пересказ (knows → knew).",
            "q": "Собери: «Она сказала, что знает ответ»",
            "want": "She said she knew the answer",
            "answer": "She said she knew the answer"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> перескажи. live → lived.",
            "q": "«I live in Moscow,» he said.",
            "accept": [
              "he said he lived in moscow",
              "he said that he lived in moscow"
            ],
            "placeholder": "He said he ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · дальше назад",
        "title": "Past → Past Perfect, <em>will → would</em>, <em>can → could</em>",
        "paras": [
          "Если человек говорил уже о прошлом, время уходит ещё на шаг назад — в <b>Past Perfect</b>: <b>did → had done</b>, <b>have done → had done</b>. «I saw it» → He said he <b>had seen</b> it.",
          "Модальные и будущее тоже сдвигаются: <b>will → would</b>, <b>can → could</b>, <b>may → might</b>, <b>must (обязанность) → had to</b>. «I will call» → He said he <b>would</b> call.",
          "Здесь снова работает твоя любимая <b>3-я форма</b> (had + done) — та самая, что держит Present Perfect и пассив. Повторяем её каждый день не зря."
        ],
        "audio": "Если человек говорил уже о прошлом, время уходит ещё на шаг назад, в Past Perfect. did превращается в had done. I saw it становится He said he had seen it. Модальные сдвигаются: will в would, can в could, may в might.",
        "table": {
          "rows": [
            [
              "did → had done",
              "I saw → he had seen"
            ],
            [
              "have done → had done",
              "I've finished → he had finished"
            ],
            [
              "will → would · can → could",
              "I'll go → he would go"
            ],
            [
              "may → might · must → had to",
              "I must go → he had to go"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Он сказал, что потерял ключи.",
            "en": "He said he <b>had lost</b> his keys.",
            "gloss": "lost → had lost",
            "say": "He said he had lost his keys."
          },
          {
            "ru": "Она сказала, что позвонит.",
            "en": "She said she <b>would</b> call.",
            "gloss": "will → would",
            "say": "She said she would call."
          },
          {
            "ru": "Он сказал, что не может прийти.",
            "en": "He said he <b>couldn't</b> come.",
            "gloss": "can't → couldn't",
            "say": "He said he couldn't come."
          }
        ],
        "mistakes": [
          {
            "wrong": "He said he will help",
            "right": "He said he <b>would</b> help",
            "why": "will → would при пересказе"
          },
          {
            "wrong": "She said she saw it",
            "right": "She said she <b>had seen</b> it",
            "why": "прошлое в пересказе → Past Perfect: had seen"
          }
        ],
        "mnemonic": "⏪ Уже о прошлом? Ещё шаг назад: did → had done; will → would.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сдвинь will.",
            "q": "«Он сказал, что закончит к пятнице» (I will finish) —",
            "opts": [
              "He said he will finish by Friday",
              "He said he would finish by Friday"
            ],
            "answer": 1,
            "explain": "will → <b>would</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> прошлое в пересказе уходит в Past Perfect.",
            "q": "«Она сказала, что видела фильм» (I saw the film) —",
            "opts": [
              "She said she saw the film",
              "She said she had seen the film",
              "She said she has seen the film"
            ],
            "answer": 1,
            "explain": "saw → <b>had seen</b> (Past Perfect)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> перескажи. can → could.",
            "q": "«I can swim,» she said.",
            "accept": [
              "she said she could swim",
              "she said that she could swim"
            ],
            "placeholder": "She said she ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · say vs tell",
        "title": "<em>tell</em> + кому, <em>say</em> без адресата",
        "paras": [
          "Главная путаница русскоязычных: say и tell оба = «сказать / рассказать», но ведут себя по-разному. <b>tell</b> всегда требует, КОМУ говорят: <b>tell me</b>, tell him, tell us. <b>say</b> адресата прямо не берёт — после say человека нет (или нужен предлог to).",
          "✅ He <b>told me</b> (that) he was late. ✅ He <b>said</b> (that) he was late. ✅ He <b>said to me</b>… ❌ He <b>said me</b>… ❌ He <b>told</b> that he was late (без «кому»).",
          "Запомни связку: <b>tell + somebody</b>, <b>say + something</b>. Ещё tell живёт в устойчивых: tell a story, tell the truth, tell a lie, tell the time."
        ],
        "audio": "say и tell оба значат сказать, но ведут себя по-разному. tell всегда требует кому: tell me, tell him. say адресата прямо не берёт. He told me he was late. He said he was late. Но нельзя He said me. Запомни: tell плюс кому, say плюс что.",
        "table": {
          "rows": [
            [
              "tell + кому",
              "He told <b>me</b> the news."
            ],
            [
              "say (+ to кому)",
              "He said (to me) hello."
            ],
            [
              "❌ say me · ❌ tell (без кого)",
              "так нельзя"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он сказал мне, что опоздает.",
            "en": "He <b>told me</b> he would be late.",
            "gloss": "tell + me",
            "say": "He told me he would be late."
          },
          {
            "ru": "Она сказала, что согласна.",
            "en": "She <b>said</b> she agreed.",
            "gloss": "say без адресата",
            "say": "She said she agreed."
          },
          {
            "ru": "Скажи мне правду.",
            "en": "<b>Tell me</b> the truth.",
            "gloss": "tell the truth",
            "say": "Tell me the truth."
          }
        ],
        "mistakes": [
          {
            "wrong": "He said me he was busy",
            "right": "He <b>told</b> me he was busy",
            "why": "есть «кому» (me) → tell"
          },
          {
            "wrong": "She told that she was happy",
            "right": "She <b>said</b> that she was happy",
            "why": "нет «кому» → say"
          }
        ],
        "mnemonic": "🗣️ tell + КОМУ, say + ЧТО. «say me» — нельзя.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> есть «мне» → выбери tell.",
            "q": "«Он сказал мне, что устал» —",
            "opts": [
              "He said me he was tired",
              "He told me he was tired",
              "He told to me he was tired"
            ],
            "answer": 1,
            "explain": "tell + me; «told to me» тоже не нужно."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> адресата нет → выбери say.",
            "q": "«Она сказала, что придёт» —",
            "opts": [
              "She told that she would come",
              "She said she would come"
            ],
            "answer": 1,
            "explain": "нет «кому» → say."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши устойчивое выражение.",
            "q": "Скажи мне правду.",
            "accept": [
              "tell me the truth"
            ],
            "placeholder": "... the truth"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу с tell.",
            "q": "Собери: «Он рассказал нам историю»",
            "want": "He told us a story",
            "answer": "He told us a story"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · местоимения и время",
        "title": "Сдвигаются и местоимения, и «здесь / сейчас»",
        "paras": [
          "Когда пересказываешь, меняется ещё и точка зрения. <b>I → he / she</b>, <b>my → his / her</b>, <b>we → they</b>. «I love <b>my</b> job,» Tom said → Tom said he loved <b>his</b> job.",
          "Слова «здесь и сейчас» тоже уезжают: <b>now → then</b>, <b>today → that day</b>, <b>tomorrow → the next day</b>, <b>yesterday → the day before</b>, <b>this → that</b>, <b>here → there</b>, <b>ago → before</b>.",
          "🇷🇺 <b>Русская ловушка целиком:</b> по-русски «Он сказал, что устал» оставляет настоящее — мы НЕ сдвигаем время. В английском сдвиг обязателен: He said he <b>was</b> tired. Держи это в голове весь день."
        ],
        "audio": "Когда пересказываешь, меняются и местоимения: I в he, my в his, we в they. Слова здесь и сейчас тоже уезжают: now в then, today в that day, tomorrow в the next day. И помни главную ловушку: русский не сдвигает время, а английский обязан. He said he was tired.",
        "table": {
          "rows": [
            [
              "I / my → he / his",
              "«I lost my key» → he had lost his key"
            ],
            [
              "now → then · here → there",
              "сейчас → тогда"
            ],
            [
              "tomorrow → the next day",
              "завтра → на следующий день"
            ],
            [
              "yesterday → the day before",
              "вчера → накануне"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "«Я занят сегодня», — сказал он.",
            "en": "He said he was busy <b>that day</b>.",
            "gloss": "today → that day",
            "say": "He said he was busy that day."
          },
          {
            "ru": "«Я позвоню тебе завтра», — сказала она.",
            "en": "She said she would call me <b>the next day</b>.",
            "gloss": "tomorrow → the next day",
            "say": "She said she would call me the next day."
          },
          {
            "ru": "Том сказал, что любит свою работу.",
            "en": "Tom said he <b>loved his</b> job.",
            "gloss": "I / my → he / his",
            "say": "Tom said he loved his job."
          }
        ],
        "mistakes": [
          {
            "wrong": "He said he is tired",
            "right": "He said he <b>was</b> tired",
            "why": "русский не сдвигает время, а английский обязан"
          },
          {
            "wrong": "She said she will call me tomorrow",
            "right": "She said she <b>would</b> call me <b>the next day</b>",
            "why": "will → would, tomorrow → the next day"
          }
        ],
        "mnemonic": "🧭 Сдвигается всё: I→he, now→then, tomorrow→the next day.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сдвинь и время, и местоимения.",
            "q": "«Том сказал, что любит свою работу» —",
            "opts": [
              "Tom said he loves his job",
              "Tom said he loved his job",
              "Tom said I loved my job"
            ],
            "answer": 1,
            "explain": "loves → loved; my → his."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери, во что превращается «now».",
            "q": "«now» в пересказе превращается в —",
            "opts": [
              "then",
              "here",
              "tomorrow"
            ],
            "answer": 0,
            "explain": "now → <b>then</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> перескажи. today → that day.",
            "q": "«I am busy today,» he said.",
            "accept": [
              "he said he was busy that day",
              "he said that he was busy that day"
            ],
            "placeholder": "He said he was busy ..."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух пересказ.",
            "target": "He said he was tired.",
            "sub": "Он сказал, что устал.",
            "want": "was"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Аня пересказывает Тому, что сказали друзья. Замечай сдвиг времён (had moved, was looking, would leave) и tell / say.",
      "lines": [
        {
          "who": "Anya",
          "name": "Аня",
          "side": "left",
          "en": "Sam called me. He said he had moved to a new flat.",
          "ru": "Сэм мне звонил. Он сказал, что переехал в новую квартиру.",
          "words": [
            [
              "moved",
              "переехал"
            ],
            [
              "flat",
              "квартира"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Nice! And what did Lena tell you?",
          "ru": "Здорово! А что тебе сказала Лена?",
          "words": [
            [
              "tell",
              "сказать (кому-то)"
            ]
          ]
        },
        {
          "who": "Anya",
          "name": "Аня",
          "side": "left",
          "en": "She told me she was looking for a new job.",
          "ru": "Она сказала мне, что ищет новую работу.",
          "words": [
            [
              "looking for",
              "ищет"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Did she say she would leave the company?",
          "ru": "Она сказала, что уйдёт из компании?",
          "words": [
            [
              "leave",
              "уйти, покинуть"
            ]
          ]
        },
        {
          "who": "Anya",
          "name": "Аня",
          "side": "left",
          "en": "Yes. She said she had already found something better.",
          "ru": "Да. Она сказала, что уже нашла кое-что получше.",
          "words": [
            [
              "found",
              "нашла"
            ],
            [
              "better",
              "получше"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "You always tell me the best news!",
          "ru": "Ты всегда рассказываешь мне самые лучшие новости!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — глаголы пересказа и слова-сдвиги. Повтори вслух.",
      "items": [
        {
          "en": "to report",
          "ru": "сообщать, передавать (чужие слова)",
          "ex": "She reported that the meeting was over."
        },
        {
          "en": "to mention",
          "ru": "упомянуть",
          "ex": "He mentioned that he was tired."
        },
        {
          "en": "to admit",
          "ru": "признать(ся)",
          "ex": "She admitted she had made a mistake."
        },
        {
          "en": "to explain",
          "ru": "объяснить",
          "ex": "He explained that the train was late."
        },
        {
          "en": "to add",
          "ru": "добавить (к сказанному)",
          "ex": "She added that she would help."
        },
        {
          "en": "to promise",
          "ru": "пообещать",
          "ex": "He promised he would call."
        },
        {
          "en": "a conversation",
          "ru": "разговор, беседа",
          "ex": "We had a long conversation."
        },
        {
          "en": "earlier",
          "ru": "раньше, ранее",
          "ex": "He had called earlier."
        },
        {
          "en": "the day before",
          "ru": "накануне",
          "ex": "She had arrived the day before."
        },
        {
          "en": "exhausted",
          "ru": "измотанный, без сил",
          "ex": "He said he was exhausted."
        }
      ]
    },
    "reading": {
      "intro": "Короткий рассказ-пересказ. Все чужие слова идут со сдвигом времён.",
      "title": "The phone call",
      "sentences": [
        "Yesterday my brother called me from London.",
        "He said he had found a new job.",
        "He told me that the work was interesting.",
        "He explained that he would start on Monday.",
        "He also said he liked his new flat.",
        "I asked about money, and he admitted it was not easy.",
        "He promised he would visit us in the summer.",
        "He said he missed home a lot."
      ],
      "translation": "Вчера мне позвонил брат из Лондона. Он сказал, что нашёл новую работу. Он сказал мне, что работа интересная. Он объяснил, что начнёт в понедельник. Ещё он сказал, что ему нравится новая квартира. Я спросил про деньги, и он признал, что это непросто. Он пообещал, что навестит нас летом. Он сказал, что очень скучает по дому."
    },
    "drag": {
      "intro": "Соедини английский «сдвиг» с тем, что он значит.",
      "pairs": [
        [
          "tell + me",
          "сказать мне (кому)"
        ],
        [
          "say",
          "сказать (без «кому»)"
        ],
        [
          "is → was",
          "сдвиг настоящего"
        ],
        [
          "will → would",
          "сдвиг будущего"
        ],
        [
          "did → had done",
          "сдвиг прошлого"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по чужой речи. Пять вопросов — и первый день недели закрыт.",
      "items": [
        {
          "q": "«Он сказал, что устал» —",
          "opts": [
            "He said he is tired",
            "He said he was tired",
            "He told he was tired"
          ],
          "answer": 1,
          "explain": "сдвиг is → was; нет «кому» → said."
        },
        {
          "q": "«Она сказала мне, что позвонит» —",
          "opts": [
            "She said me she would call",
            "She told me she would call",
            "She told me she will call"
          ],
          "answer": 1,
          "explain": "tell + me; will → would."
        },
        {
          "q": "«I saw it,» he said. Перескажи:",
          "opts": [
            "He said he saw it",
            "He said he had seen it",
            "He said he has seen it"
          ],
          "answer": 1,
          "explain": "прошлое → Past Perfect: had seen."
        },
        {
          "q": "«tomorrow» в пересказе становится —",
          "opts": [
            "the next day",
            "that day",
            "the day before"
          ],
          "answer": 0,
          "explain": "tomorrow → the next day."
        },
        {
          "q": "Где ошибка? «He said me he was busy»",
          "opts": [
            "нужно told me",
            "нужно say to him",
            "всё верно"
          ],
          "answer": 0,
          "explain": "есть «кому» → tell: He told me…"
        }
      ]
    },
    "picture": {
      "intro": "Опиши, что говорят люди на картинке, через пересказ.",
      "emoji": "🗣️💬📞",
      "prompt": "Опиши по картинке, что сказал человек. Используй He said (that)… / She told me…",
      "hint": "Структуры: He said he was happy. She told me she would come. They said they had finished.",
      "example": "The man is on the phone. He said he was busy. He told his friend that he would call back later. He also said he had good news.",
      "img": "img/b1/day-15.jpg",
      "credit": "Фото: The White House · Public Domain · <a href=\"https://www.flickr.com/photos/148748355@N05/34252546901\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Перескажи реальный разговор.",
      "prompt": "Вспомни недавний разговор и перескажи его в 4–6 предложениях. Используй say / tell и сдвиг времён: He said (that)…, She told me…, He would…, She had…",
      "hint": "Структуры: My friend said (that) she was tired. She told me she had found a new job. She said she would call me the next day.",
      "example": "Last week my friend called me. She said she was very busy at work. She told me that she had started a new project. She also said she would take a holiday in July. She promised she would visit me soon."
    }
  },
  "16": {
    "day": 16,
    "week": "03",
    "level": "B1",
    "themeRu": "Он спросил, где…",
    "themeEn": "Reported questions",
    "intro": "Пересказывать утверждения ты уже научился(ась) вчера: He said he was tired. Сегодня очередь <b>вопросов</b> в пересказе: «Он спросил, где я живу», «Она спросила, готов ли я». Тут русскоязычных ждёт ловушка: в пересказе вопрос теряет вопросительную форму — <b>порядок слов как в утверждении</b>, и никаких do / does / did. Заодно выучим <b>if / whether</b> для вопросов «да / нет». Поехали.",
    "introAudio": "Пересказывать утверждения ты уже научился вчера: He said he was tired. Сегодня очередь вопросов в пересказе: Он спросил, где я живу. Она спросила, готов ли я. Тут русскоязычных ждёт ловушка: в пересказе вопрос теряет вопросительную форму — порядок слов как в утверждении, и никаких do, does, did. Заодно выучим if и whether для вопросов да или нет. Поехали.",
    "goals": [
      "пересказывать вопросы: He asked where I lived",
      "ставить порядок слов как в утверждении, без do / did",
      "пересказывать вопросы «да / нет» через if или whether",
      "видеть ловушку: «He asked where do I live» → where I lived"
    ],
    "learned": [
      "Пересказал(а) вопросы: He asked where I lived",
      "Поставил(а) порядок слов как в утверждении, без do / did",
      "Пересказал(а) вопросы «да / нет» через if или whether",
      "Увидел(а) ловушку: «He asked where do I live» → where I lived"
    ],
    "review": {
      "intro": "Сначала вернёмся к вчерашнему — пересказ утверждений и сдвиг времён. И заодно вспомним, как строится прямой вопрос: сегодня мы будем его «выпрямлять».",
      "introAudio": "Сначала вернёмся к вчерашнему — пересказ утверждений и сдвиг времён. И заодно вспомним, как строится прямой вопрос: сегодня мы будем его выпрямлять.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни сдвиг времени (день 15).",
          "q": "«Он сказал, что занят» —",
          "opts": [
            "He said he is busy",
            "He said he was busy",
            "He told he was busy"
          ],
          "answer": 1,
          "explain": "is → was; нет «кому» → said."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни прямой вопрос с do.",
          "q": "Как спросить «Где ты живёшь?»",
          "opts": [
            "Where you live?",
            "Where do you live?",
            "Where live you?"
          ],
          "answer": 1,
          "explain": "прямой вопрос: <b>Where do you live?</b> (сегодня do при пересказе исчезнет)."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> перескажи утверждение (день 15).",
          "q": "«I am ready,» he said.",
          "accept": [
            "he said he was ready",
            "he said that he was ready"
          ],
          "placeholder": "He said he ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · вопрос в пересказе",
        "title": "«Где я живу»: порядок как в утверждении",
        "paras": [
          "Прямой вопрос: <b>Where do you live?</b> Здесь есть «помощник» do и особый порядок. Но как только вопрос становится частью пересказа, он «выпрямляется»: <b>He asked where I lived.</b>",
          "Два правила сразу: (1) <b>убираем do / does / did</b>; (2) <b>порядок как в утверждении</b> — сначала подлежащее, потом глагол. И не забудь сдвиг времени: live → lived.",
          "Вопросительное слово (where, what, when, why, how) остаётся на месте и соединяет две части: He asked <b>where</b> I lived. She wanted to know <b>why</b> I was late."
        ],
        "audio": "Прямой вопрос Where do you live? при пересказе выпрямляется в He asked where I lived. Два правила: убираем do, does, did, и ставим порядок как в утверждении — сначала подлежащее, потом глагол. И сдвиг времени: live в lived.",
        "table": {
          "rows": [
            [
              "Where do you live? →",
              "He asked where I lived."
            ],
            [
              "убрать do / does / did",
              "What does he want? → … what he wanted"
            ],
            [
              "порядок: кто + глагол",
              "не «where do I live», а «where I lived»"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Он спросил, где я живу.",
            "en": "He asked <b>where I lived</b>.",
            "gloss": "do убрали, live → lived",
            "say": "He asked where I lived."
          },
          {
            "ru": "Она спросила, что я хочу.",
            "en": "She asked <b>what I wanted</b>.",
            "gloss": "what + I + wanted",
            "say": "She asked what I wanted."
          },
          {
            "ru": "Он спросил, почему я опоздал.",
            "en": "He asked <b>why I was late</b>.",
            "gloss": "why + I + was",
            "say": "He asked why I was late."
          }
        ],
        "mistakes": [
          {
            "wrong": "He asked where do I live",
            "right": "He asked where <b>I lived</b>",
            "why": "в пересказе нет do и порядок как в утверждении"
          },
          {
            "wrong": "She asked what did I want",
            "right": "She asked what <b>I wanted</b>",
            "why": "убираем did, глагол сам в прошлом: wanted"
          }
        ],
        "mnemonic": "➡️ Пересказанный вопрос — без do и в порядке утверждения.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> убери do, поставь порядок утверждения.",
            "q": "«Он спросил, где я работаю» —",
            "opts": [
              "He asked where do I work",
              "He asked where I worked",
              "He asked where worked I"
            ],
            "answer": 1,
            "explain": "без do, work → worked."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери пересказ вопроса.",
            "q": "Собери: «Она спросила, что я хочу»",
            "want": "She asked what I wanted",
            "answer": "She asked what I wanted"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> перескажи. are → was.",
            "q": "«Where are you from?» she asked.",
            "accept": [
              "she asked where i was from",
              "she asked where i came from"
            ],
            "placeholder": "She asked where I ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · да/нет → if / whether",
        "title": "Вопрос без вопросительного слова: <em>if</em> / <em>whether</em>",
        "paras": [
          "Если в прямом вопросе нет слова where / what / why (это вопрос «да или нет»), при пересказе его соединяют словом <b>if</b> или <b>whether</b> («ли»). <b>Are you tired?</b> → He asked <b>if</b> I was tired.",
          "Дальше всё то же: убираем do / did, ставим порядок утверждения, сдвигаем время. <b>Do you like it?</b> → She asked <b>whether</b> I liked it.",
          "if и whether здесь взаимозаменяемы. whether чуть формальнее и любит «… or not»: He asked whether I was coming <b>or not</b>."
        ],
        "audio": "Если в вопросе нет слова where, what, why — это вопрос да или нет — при пересказе соединяем его словом if или whether, по-русски ли. Are you tired? становится He asked if I was tired. Дальше всё то же: убираем do, порядок утверждения, сдвиг времени.",
        "table": {
          "rows": [
            [
              "Are you ready? →",
              "He asked if I was ready."
            ],
            [
              "Do you like it? →",
              "She asked whether I liked it."
            ],
            [
              "if = whether = «ли»",
              "оба подходят"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он спросил, устал ли я.",
            "en": "He asked <b>if</b> I was tired.",
            "gloss": "Are you tired? → if I was",
            "say": "He asked if I was tired."
          },
          {
            "ru": "Она спросила, нравится ли мне это.",
            "en": "She asked <b>whether</b> I liked it.",
            "gloss": "Do you like it? → whether I liked it",
            "say": "She asked whether I liked it."
          },
          {
            "ru": "Я спросил, придёт ли он.",
            "en": "I asked <b>if he would come</b>.",
            "gloss": "Will you come? → if he would come",
            "say": "I asked if he would come."
          }
        ],
        "mistakes": [
          {
            "wrong": "He asked am I tired",
            "right": "He asked <b>if I was</b> tired",
            "why": "вопрос «да / нет» → if + порядок утверждения"
          },
          {
            "wrong": "She asked do I like it",
            "right": "She asked <b>if I liked</b> it",
            "why": "убираем do, добавляем if, like → liked"
          }
        ],
        "mnemonic": "❓ Нет where / what? Соединяй через if / whether («ли»).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> вопрос «да / нет» → if.",
            "q": "«Он спросил, готов ли я» —",
            "opts": [
              "He asked am I ready",
              "He asked if I was ready",
              "He asked do I ready"
            ],
            "answer": 1,
            "explain": "if + I + was (порядок утверждения)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> убери do, добавь if, сдвинь время.",
            "q": "«Do you speak French?» → She asked …",
            "opts": [
              "if I spoke French",
              "do I speak French",
              "if I speak French"
            ],
            "answer": 0,
            "explain": "if I spoke French (do убрали, speak → spoke)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> перескажи. are → was.",
            "q": "«Are you hungry?» he asked.",
            "accept": [
              "he asked if i was hungry",
              "he asked whether i was hungry"
            ],
            "placeholder": "He asked if I ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · кто спрашивает",
        "title": "<em>ask</em> (+ кого), <em>want to know</em>, <em>wonder</em>",
        "paras": [
          "Для пересказа вопросов главный глагол — <b>ask</b>. Он, в отличие от tell, может идти и с человеком, и без: <b>He asked me</b> where I lived. = He asked where I lived. Оба верны.",
          "Синонимы добавляют оттенок: <b>want to know</b> (хотел узнать), <b>wonder</b> (интересоваться, гадать). She <b>wanted to know</b> if I was free. I <b>wondered</b> where he was.",
          "Важно: <b>say</b> для вопросов не используют. Не «He said where I lived» — только <b>ask</b>."
        ],
        "audio": "Вопросы пересказывает глагол ask. В отличие от tell, он может идти и с человеком, и без: He asked me where I lived, или просто He asked where I lived. Синонимы: want to know, хотел узнать, и wonder, интересоваться. А say для вопросов не используют.",
        "table": {
          "rows": [
            [
              "ask (+ me)",
              "He asked (me) what I wanted."
            ],
            [
              "want to know",
              "She wanted to know if I was free."
            ],
            [
              "wonder",
              "I wondered where he was."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он спросил меня, который час.",
            "en": "He <b>asked me</b> what time it was.",
            "gloss": "ask + me",
            "say": "He asked me what time it was."
          },
          {
            "ru": "Она хотела узнать, где я был.",
            "en": "She <b>wanted to know</b> where I had been.",
            "gloss": "want to know",
            "say": "She wanted to know where I had been."
          },
          {
            "ru": "Интересно, придёт ли он.",
            "en": "I <b>wonder if</b> he will come.",
            "gloss": "wonder if",
            "say": "I wonder if he will come."
          }
        ],
        "mistakes": [
          {
            "wrong": "He said me where I lived",
            "right": "He <b>asked</b> me where I lived",
            "why": "вопросы — через ask, не say / tell"
          },
          {
            "wrong": "She asked to me if I was free",
            "right": "She asked <b>me</b> if I was free",
            "why": "ask + кого без предлога: asked me"
          }
        ],
        "mnemonic": "🔎 Вопросы пересказывает ask (+ кого), а не say.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> вопрос → ask, порядок утверждения.",
            "q": "«Он спросил меня, где я был» —",
            "opts": [
              "He said me where I was",
              "He asked me where I had been",
              "He asked me where was I"
            ],
            "answer": 1,
            "explain": "ask + me; was → had been; порядок утверждения."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пересказ с «want to know».",
            "q": "Она хотела узнать, свободен ли я.",
            "accept": [
              "she wanted to know if i was free",
              "she wanted to know whether i was free"
            ],
            "placeholder": "She wanted to know if I ..."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вопрос в пересказе.",
            "q": "Собери: «Он спросил, который час»",
            "want": "He asked what time it was",
            "answer": "He asked what time it was"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "«где do I live» — так нельзя",
        "paras": [
          "🇷🇺 Главная ошибка идёт из русского. Мы говорим «Он спросил, где я живу» — и порядок, и «живу» как в прямом вопросе. Поэтому рука сама пишет <b>He asked where do I live</b>. Стоп: do здесь не нужно, и глагол — в прошлом.",
          "Второе: русское <b>«ли»</b> (устал ЛИ я) в английском становится <b>if / whether</b>, а не превращается в прямой вопрос «am I». «Он спросил, устал ли я» → He asked <b>if I was</b> tired.",
          "Собери всё вместе: (1) ask, (2) вопросительное слово или if / whether, (3) порядок утверждения, (4) без do / did, (5) сдвиг времени."
        ],
        "audio": "Главная ошибка из русского: мы говорим он спросил, где я живу — и пишем He asked where do I live. Стоп: do не нужно, глагол в прошлом. И русское ли становится if или whether, а не прямым вопросом am I. He asked if I was tired.",
        "table": {
          "rows": [
            [
              "❌ where do I live",
              "✅ where I lived"
            ],
            [
              "❌ asked am I tired",
              "✅ asked if I was tired"
            ],
            [
              "«ли» → if / whether",
              "устал ли → if … was tired"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Он спросил, где я живу.",
            "en": "He asked where <b>I lived</b>.",
            "gloss": "не «where do I live»",
            "say": "He asked where I lived."
          },
          {
            "ru": "Она спросила, говорю ли я по-английски.",
            "en": "She asked <b>if I spoke</b> English.",
            "gloss": "«ли» → if",
            "say": "She asked if I spoke English."
          },
          {
            "ru": "Я спросил, который час.",
            "en": "I asked what <b>time it was</b>.",
            "gloss": "порядок утверждения",
            "say": "I asked what time it was."
          }
        ],
        "mistakes": [
          {
            "wrong": "He asked where do I live",
            "right": "He asked where <b>I lived</b>",
            "why": "русский прямой порядок → в англ. порядок утверждения, без do"
          },
          {
            "wrong": "She asked do I speak English",
            "right": "She asked <b>if I spoke</b> English",
            "why": "«ли» → if; убрать do"
          }
        ],
        "mnemonic": "🇷🇺→🇬🇧 «ли» = if / whether; «где живу» = where I lived (без do).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери правильный пересказ.",
            "q": "Где верно?",
            "opts": [
              "He asked where do I live",
              "He asked where I lived"
            ],
            "answer": 1,
            "explain": "без do, порядок утверждения."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «ли» → if.",
            "q": "«Она спросила, нравится ли мне музыка» —",
            "opts": [
              "She asked do I like music",
              "She asked if I liked music",
              "She asked like I music"
            ],
            "answer": 1,
            "explain": "if + I + liked."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> перескажи. убери do, want → wanted.",
            "q": "«What do you want?» he asked.",
            "accept": [
              "he asked what i wanted",
              "he asked me what i wanted"
            ],
            "placeholder": "He asked what I ..."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух пересказ.",
            "target": "He asked where I lived.",
            "sub": "Он спросил, где я живу.",
            "want": "lived"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня вышла с собеседования и пересказывает Тому, о чём её спрашивали. Слушай порядок слов и if / whether.",
      "lines": [
        {
          "who": "A",
          "en": "How was the interview? What did they ask you?",
          "ru": "Как прошло собеседование? О чём тебя спрашивали?"
        },
        {
          "who": "B",
          "en": "They asked where I had worked before.",
          "ru": "Они спросили, где я раньше работала."
        },
        {
          "who": "A",
          "en": "Did they ask why you left your old job?",
          "ru": "Они спросили, почему ты ушла с прошлой работы?"
        },
        {
          "who": "B",
          "en": "Yes. And they asked if I could start in May.",
          "ru": "Да. И спросили, могу ли я начать в мае."
        },
        {
          "who": "A",
          "en": "Did they ask how much you wanted?",
          "ru": "А спросили, сколько ты хочешь?"
        },
        {
          "who": "B",
          "en": "No, but they wanted to know whether I was ready to travel.",
          "ru": "Нет, но они хотели узнать, готова ли я ездить в командировки."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — про вопросы и расспросы. Повтори вслух.",
      "items": [
        {
          "en": "to ask",
          "ru": "спрашивать",
          "ex": "He asked me a question."
        },
        {
          "en": "to wonder",
          "ru": "гадать, интересоваться",
          "ex": "I wonder if it is true."
        },
        {
          "en": "to reply",
          "ru": "отвечать (на вопрос/письмо)",
          "ex": "She replied that she was busy."
        },
        {
          "en": "whether",
          "ru": "ли (чуть формальнее, чем if)",
          "ex": "I'm not sure whether it is open."
        },
        {
          "en": "an interview",
          "ru": "собеседование, интервью",
          "ex": "I had a job interview."
        },
        {
          "en": "to find out",
          "ru": "выяснить, узнать",
          "ex": "I want to find out if it's free."
        },
        {
          "en": "curious",
          "ru": "любопытный",
          "ex": "She was curious about my plans."
        },
        {
          "en": "a question",
          "ru": "вопрос",
          "ex": "It was a difficult question."
        },
        {
          "en": "polite",
          "ru": "вежливый",
          "ex": "It was a polite question."
        },
        {
          "en": "to answer",
          "ru": "отвечать",
          "ex": "He didn't answer my question."
        }
      ]
    },
    "reading": {
      "intro": "Рассказ-пересказ: соседка задавала много вопросов. Замечай порядок слов и if / whether.",
      "title": "The new neighbour",
      "sentences": [
        "Yesterday I met my new neighbour.",
        "She asked me where I worked.",
        "She wanted to know if I had any children.",
        "She asked how long I had lived in the building.",
        "Then she asked whether I liked the area.",
        "She also wondered if the shops were far.",
        "I asked her where she came from.",
        "It was a friendly conversation, but she asked a lot of questions!"
      ],
      "translation": "Вчера я встретил новую соседку. Она спросила меня, где я работаю. Она хотела узнать, есть ли у меня дети. Она спросила, как долго я живу в доме. Потом она спросила, нравится ли мне район. Ещё ей было интересно, далеко ли магазины. Я спросил её, откуда она. Это был приятный разговор, но вопросов она задала много!"
    },
    "drag": {
      "intro": "Соедини английское слово с его значением.",
      "pairs": [
        [
          "ask",
          "спрашивать"
        ],
        [
          "if / whether",
          "ли"
        ],
        [
          "wonder",
          "гадать, интересоваться"
        ],
        [
          "where I lived",
          "где я живу (пересказ)"
        ],
        [
          "find out",
          "выяснить"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по пересказу вопросов. Пять вопросов — и день закрыт.",
      "items": [
        {
          "q": "«Он спросил, где я живу» —",
          "opts": [
            "He asked where do I live",
            "He asked where I lived",
            "He asked where lived I"
          ],
          "answer": 1,
          "explain": "без do, порядок утверждения, live → lived."
        },
        {
          "q": "«Are you ready?» → He asked …",
          "opts": [
            "am I ready",
            "if I was ready",
            "do I ready"
          ],
          "answer": 1,
          "explain": "вопрос «да / нет» → if + порядок утверждения."
        },
        {
          "q": "«What does she want?» → He asked …",
          "opts": [
            "what does she want",
            "what she wanted",
            "what did she want"
          ],
          "answer": 1,
          "explain": "убрать does, want → wanted."
        },
        {
          "q": "Русское «ли» в английском —",
          "opts": [
            "if / whether",
            "that",
            "do"
          ],
          "answer": 0,
          "explain": "«ли» = if / whether."
        },
        {
          "q": "Какой глагол пересказывает вопросы?",
          "opts": [
            "say",
            "tell",
            "ask"
          ],
          "answer": 2,
          "explain": "вопросы — через ask."
        }
      ]
    },
    "picture": {
      "intro": "Опиши, о чём спрашивают люди на картинке, через пересказ.",
      "emoji": "❓🗨️🧐",
      "prompt": "Опиши по картинке, о чём спросили человека. Используй He asked where… / She asked if…",
      "hint": "Структуры: She asked where I lived. He asked if I was busy. They wanted to know what I wanted.",
      "example": "It looks like an interview. The woman asked the man where he had worked before. She wanted to know if he could start soon. He asked her what the salary was.",
      "img": "img/b1/day-16.jpg",
      "credit": "Фото: Amsterdam free photos &amp; pictures of the Dutch city · CC0 · <a href=\"https://www.flickr.com/photos/104736837@N03/25663480310\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Перескажи вопросы из реального разговора.",
      "prompt": "Вспомни, как тебя о чём-то расспрашивали (собеседование, врач, новый знакомый). Перескажи 4–6 вопросов: He asked where…, She wanted to know if…",
      "hint": "Структуры: He asked me where I lived. She wanted to know if I had a car. They asked whether I could speak English.",
      "example": "Last month I had a job interview. They asked me where I had studied. They wanted to know if I could work at weekends. The manager asked why I wanted the job. She also asked whether I had any questions. I asked when they would call me back."
    }
  },
  "17": {
    "day": 17,
    "week": "03",
    "level": "B1",
    "themeRu": "Он попросил",
    "themeEn": "Reported commands & verbs",
    "intro": "Утверждения и вопросы в пересказе ты уже освоил(а) — остаётся третий кусок чужой речи: <b>просьбы и команды</b>. «Он попросил меня подождать», «Врач велел мне отдыхать». Формула короткая и складная: <b>tell / ask + кого + to do</b>. А ещё познакомимся с «умными» глаголами пересказа — <b>suggest</b> и <b>recommend</b>, у которых своя капризная грамматика. Поехали.",
    "introAudio": "Утверждения и вопросы в пересказе ты уже освоил — остаётся третий кусок чужой речи: просьбы и команды. Он попросил меня подождать. Врач велел мне отдыхать. Формула короткая и складная: tell или ask, плюс кого, плюс to do. А ещё познакомимся с умными глаголами пересказа — suggest и recommend, у которых своя капризная грамматика. Поехали.",
    "goals": [
      "пересказывать просьбы и команды: He asked me to wait",
      "строить tell / ask + кого + to do (и not to do для запрета)",
      "пользоваться suggest / recommend: suggest doing / recommend that you do",
      "видеть ловушки: «said me to go» → told me to go; «suggest me to» → suggest doing"
    ],
    "learned": [
      "Пересказал(а) просьбы и команды: He asked me to wait",
      "Построил(а) tell / ask + кого + to do (и not to do для запрета)",
      "Воспользовался(лась) suggest / recommend: suggest doing / recommend that you do",
      "Увидел(а) ловушки: «said me to go» → told me to go; «suggest me to» → suggest doing"
    ],
    "review": {
      "intro": "Сначала вчерашнее — пересказ вопросов. И ещё освежим из A2 разницу «глагол + -ing» и «глагол + to»: она сегодня нам очень пригодится в правилах про suggest.",
      "introAudio": "Сначала вчерашнее — пересказ вопросов. И ещё освежим из A2 разницу глагол плюс -ing и глагол плюс to: она сегодня нам очень пригодится.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни пересказ вопроса (день 16).",
          "q": "«Он спросил, где я живу» —",
          "opts": [
            "He asked where do I live",
            "He asked where I lived"
          ],
          "answer": 1,
          "explain": "без do, порядок утверждения, live → lived."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни «want + to» (A2).",
          "q": "«Я хочу пойти домой» —",
          "opts": [
            "I want going home",
            "I want to go home",
            "I want go home"
          ],
          "answer": 1,
          "explain": "want + <b>to go</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни «enjoy + -ing» (A2).",
          "q": "«Я люблю читать» —",
          "opts": [
            "I enjoy to read",
            "I enjoy reading",
            "I enjoy read"
          ],
          "answer": 1,
          "explain": "enjoy + <b>reading</b> (после enjoy — герундий)."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · просьбы и команды",
        "title": "<em>tell / ask + кого + to do</em>",
        "paras": [
          "Команды и просьбы пересказываются совсем просто — без сдвига времён, через инфинитив с <b>to</b>. Команда (приказ): <b>tell</b> someone <b>to do</b>. Просьба (вежливо): <b>ask</b> someone <b>to do</b>.",
          "Прямая речь: <b>«Wait here,»</b> he said. Пересказ: <b>He told me to wait here.</b> Прямая: <b>«Please help me.»</b> → <b>She asked me to help her.</b>",
          "Запрет («не делай») — просто <b>not to</b> перед глаголом: «Don't be late!» → He told me <b>not to be</b> late."
        ],
        "audio": "Команды и просьбы пересказываются просто, через инфинитив с to. Команда: tell someone to do. Просьба: ask someone to do. Wait here становится He told me to wait here. Запрет, не делай — это not to: He told me not to be late.",
        "table": {
          "rows": [
            [
              "команда → tell + кого + to do",
              "«Sit down» → He told me to sit down"
            ],
            [
              "просьба → ask + кого + to do",
              "«Please wait» → She asked me to wait"
            ],
            [
              "запрет → not to do",
              "«Don't move» → He told me not to move"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Он попросил меня подождать.",
            "en": "He <b>asked me to wait</b>.",
            "gloss": "ask + me + to wait",
            "say": "He asked me to wait."
          },
          {
            "ru": "Учитель велел нам открыть книги.",
            "en": "The teacher <b>told us to open</b> our books.",
            "gloss": "tell + us + to open",
            "say": "The teacher told us to open our books."
          },
          {
            "ru": "Она попросила меня не опаздывать.",
            "en": "She <b>asked me not to be</b> late.",
            "gloss": "not to be",
            "say": "She asked me not to be late."
          }
        ],
        "mistakes": [
          {
            "wrong": "He told me that I wait",
            "right": "He told me <b>to wait</b>",
            "why": "команда → to + глагол, без «that»"
          },
          {
            "wrong": "She asked me to don't go",
            "right": "She asked me <b>not to go</b>",
            "why": "запрет → not to go (не «to don't»)"
          }
        ],
        "mnemonic": "🫡 Команда/просьба: tell/ask + КОГО + to do (запрет: not to do).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> команда → tell + me + to do.",
            "q": "«Он велел мне сесть» —",
            "opts": [
              "He told me sit down",
              "He told me to sit down",
              "He said me to sit down"
            ],
            "answer": 1,
            "explain": "tell + me + <b>to sit</b> down."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери просьбу.",
            "q": "Собери: «Она попросила меня помочь»",
            "want": "She asked me to help",
            "answer": "She asked me to help"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши запрет: not to.",
            "q": "Он попросил меня не опаздывать.",
            "accept": [
              "he asked me not to be late"
            ],
            "placeholder": "He asked me not to ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · русская ловушка №1",
        "title": "«said me to go» — так нельзя",
        "paras": [
          "🇷🇺 Русское «сказал мне сделать» толкает на ошибку <b>He said me to go</b>. Но say не берёт человека напрямую и не любит конструкцию «+ кого + to do». Для команд и просьб с человеком нужны <b>tell</b> или <b>ask</b>.",
          "✅ He <b>told me to go</b>. ✅ He <b>asked me to go</b>. ❌ He said me to go. Глагол say сюда не подходит — у него нет «кого».",
          "Память: <b>tell / ask + кого + to do</b>. Если в русском есть «велел / попросил кого-то» — это tell или ask, никогда не say."
        ],
        "audio": "Русское сказал мне сделать толкает на ошибку He said me to go. Но say не берёт человека напрямую. Для команд и просьб с человеком нужны tell или ask. He told me to go. He asked me to go. Но не He said me to go.",
        "table": {
          "rows": [
            [
              "✅ told me to go",
              "приказ"
            ],
            [
              "✅ asked me to go",
              "просьба"
            ],
            [
              "❌ said me to go",
              "так нельзя"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Он сказал мне идти.",
            "en": "He <b>told me to go</b>.",
            "gloss": "tell, не say",
            "say": "He told me to go."
          },
          {
            "ru": "Она попросила меня остаться.",
            "en": "She <b>asked me to stay</b>.",
            "gloss": "ask + me + to stay",
            "say": "She asked me to stay."
          },
          {
            "ru": "Босс велел нам подождать.",
            "en": "The boss <b>told us to wait</b>.",
            "gloss": "tell + us + to wait",
            "say": "The boss told us to wait."
          }
        ],
        "mistakes": [
          {
            "wrong": "He said me to call back",
            "right": "He <b>told me to call</b> back",
            "why": "say не берёт «кого» + to do → tell / ask"
          },
          {
            "wrong": "She said me to wait",
            "right": "She <b>asked me to wait</b>",
            "why": "просьба → ask me to wait"
          }
        ],
        "mnemonic": "🚫 «say me to» — нельзя. Только tell / ask + кого + to do.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> с человеком → tell, не say.",
            "q": "«Он сказал мне перезвонить» —",
            "opts": [
              "He said me to call back",
              "He told me to call back",
              "He said to me call back"
            ],
            "answer": 1,
            "explain": "tell + me + to call back."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> велел кому-то → tell.",
            "q": "«Врач велел мне отдыхать» —",
            "opts": [
              "The doctor said me to rest",
              "The doctor told me to rest"
            ],
            "answer": 1,
            "explain": "told me to rest."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> просьба → ask + me + to do.",
            "q": "Она попросила меня остаться.",
            "accept": [
              "she asked me to stay"
            ],
            "placeholder": "She asked me to ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · suggest / recommend",
        "title": "<em>suggest</em> / <em>recommend</em> — особая грамматика",
        "paras": [
          "Глаголы <b>suggest</b> (предложить) и <b>recommend</b> (порекомендовать) НЕ строятся как ask: после них нельзя «+ кого + to do». У них две правильные дороги.",
          "Дорога 1 — <b>-ing</b>: He <b>suggested going</b> to the cinema. I <b>recommend trying</b> this dish. Дорога 2 — <b>that + (should)</b>: He suggested <b>that we (should) go</b>. I recommend <b>that you book</b> early.",
          "Сравни с <b>advise</b>: оно умеет и «+ кого + to»: He <b>advised me to rest</b>. С advise можно, с suggest — нет."
        ],
        "audio": "Глаголы suggest и recommend не строятся как ask: после них нельзя плюс кого плюс to do. У них две дороги. Первая, с -ing: He suggested going to the cinema. Вторая, that плюс should: He suggested that we go. А вот advise умеет плюс кого плюс to: He advised me to rest.",
        "table": {
          "rows": [
            [
              "suggest + -ing",
              "He suggested going out."
            ],
            [
              "suggest (that) + should",
              "He suggested (that) we go out."
            ],
            [
              "recommend + -ing / that",
              "I recommend booking early."
            ],
            [
              "advise + кого + to",
              "He advised me to rest."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он предложил пойти в кино.",
            "en": "He <b>suggested going</b> to the cinema.",
            "gloss": "suggest + -ing",
            "say": "He suggested going to the cinema."
          },
          {
            "ru": "Я рекомендую забронировать заранее.",
            "en": "I <b>recommend booking</b> early.",
            "gloss": "recommend + -ing",
            "say": "I recommend booking early."
          },
          {
            "ru": "Она предложила, чтобы мы подождали.",
            "en": "She <b>suggested that we wait</b>.",
            "gloss": "suggest that + should",
            "say": "She suggested that we wait."
          }
        ],
        "mistakes": [
          {
            "wrong": "He suggested me to go",
            "right": "He <b>suggested going</b>",
            "why": "suggest не берёт «+ кого + to»: только -ing или that"
          },
          {
            "wrong": "I recommend you to try it",
            "right": "I <b>recommend trying</b> it",
            "why": "recommend + -ing (или that you try)"
          }
        ],
        "mnemonic": "💡 suggest / recommend + -ing (или that…), НЕ «+ кого + to».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> suggest → -ing.",
            "q": "«Он предложил пойти гулять» —",
            "opts": [
              "He suggested me to go for a walk",
              "He suggested going for a walk",
              "He suggested to go for a walk"
            ],
            "answer": 1,
            "explain": "suggest + <b>going</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> recommend → -ing.",
            "q": "«Я рекомендую попробовать это» —",
            "opts": [
              "I recommend you to try it",
              "I recommend trying it"
            ],
            "answer": 1,
            "explain": "recommend + <b>trying</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши через suggest (-ing или that).",
            "q": "Она предложила подождать.",
            "accept": [
              "she suggested waiting",
              "she suggested that we wait",
              "she suggested we wait",
              "she suggested that we should wait",
              "she suggested we should wait"
            ],
            "placeholder": "She suggested ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · палитра глаголов",
        "title": "<em>offer, promise, advise, remind, warn</em>",
        "paras": [
          "Чужую речь можно пересказывать ярче, чем сухим «said». Каждый глагол несёт свой смысл и свою модель. С инфинитивом <b>to</b>: <b>offer to do</b> (предложить сделать), <b>promise to do</b> (пообещать), <b>refuse to do</b> (отказаться).",
          "С человеком + <b>to do</b>: <b>advise sb to do</b>, <b>remind sb to do</b> (напомнить), <b>warn sb (not) to do</b> (предупредить). He <b>reminded me to call</b> the office. She <b>warned us not to be</b> late.",
          "🇷🇺 Держи в голове обе сегодняшние ловушки: <b>told / asked me to do</b> (не «said me to»), и <b>suggest doing</b> (не «suggest me to»). Это два самых частых русских спотыкания."
        ],
        "audio": "Чужую речь можно пересказывать ярче, чем said. С инфинитивом to: offer to do, promise to do, refuse to do. С человеком плюс to do: advise, remind, warn. He reminded me to call the office. И помни две ловушки: told me to do, не said me to; и suggest doing, не suggest me to.",
        "table": {
          "rows": [
            [
              "offer / promise / refuse + to do",
              "He offered to help."
            ],
            [
              "advise / remind / warn + кого + to do",
              "She reminded me to call."
            ],
            [
              "❌ said me to · ❌ suggest me to",
              "так нельзя"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Он предложил помочь.",
            "en": "He <b>offered to help</b>.",
            "gloss": "offer + to help",
            "say": "He offered to help."
          },
          {
            "ru": "Она пообещала позвонить.",
            "en": "She <b>promised to call</b>.",
            "gloss": "promise + to call",
            "say": "She promised to call."
          },
          {
            "ru": "Он напомнил мне взять зонт.",
            "en": "He <b>reminded me to take</b> an umbrella.",
            "gloss": "remind + me + to take",
            "say": "He reminded me to take an umbrella."
          }
        ],
        "mistakes": [
          {
            "wrong": "He said me to go and suggested me to wait",
            "right": "He <b>told me to go</b> and <b>suggested waiting</b>",
            "why": "две ловушки сразу: told me to + suggest + -ing"
          },
          {
            "wrong": "She promised that call me",
            "right": "She <b>promised to call</b> me",
            "why": "promise + to do"
          }
        ],
        "mnemonic": "🎨 Палитра: offer / promise to do · remind / warn кого to do.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> remind + me + to do.",
            "q": "«Он напомнил мне позвонить» —",
            "opts": [
              "He reminded me to call",
              "He reminded me call",
              "He reminded me calling"
            ],
            "answer": 0,
            "explain": "remind + me + <b>to call</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> refuse + to do.",
            "q": "«Она отказалась помогать» —",
            "opts": [
              "She refused to help",
              "She refused helping",
              "She refused that she help"
            ],
            "answer": 0,
            "explain": "refuse + <b>to help</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу с offer.",
            "q": "Собери: «Он предложил помочь»",
            "want": "He offered to help",
            "answer": "He offered to help"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух команду в пересказе.",
            "target": "He told me to wait.",
            "sub": "Он велел мне подождать.",
            "want": "told"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Аня пересказывает Тому советы и просьбы от врача. Замечай tell / ask + to do, advise, suggest, remind.",
      "lines": [
        {
          "who": "Anya",
          "name": "Аня",
          "side": "left",
          "en": "The doctor told me to rest for a week.",
          "ru": "Врач велел мне отдыхать неделю.",
          "words": [
            [
              "rest",
              "отдыхать"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Good. Did he tell you to take any medicine?",
          "ru": "Хорошо. А лекарства принимать сказал?",
          "words": [
            [
              "medicine",
              "лекарство"
            ]
          ]
        },
        {
          "who": "Anya",
          "name": "Аня",
          "side": "left",
          "en": "Yes, and he advised me to drink more water.",
          "ru": "Да, и посоветовал больше пить воды.",
          "words": [
            [
              "advised",
              "посоветовал"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "My friend suggested seeing another doctor too.",
          "ru": "Мой друг ещё предложил сходить к другому врачу.",
          "words": [
            [
              "suggested",
              "предложил"
            ]
          ]
        },
        {
          "who": "Anya",
          "name": "Аня",
          "side": "left",
          "en": "The doctor also reminded me not to skip meals.",
          "ru": "Ещё врач напомнил мне не пропускать приёмы пищи.",
          "words": [
            [
              "skip",
              "пропускать"
            ],
            [
              "meals",
              "приёмы пищи"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "I'd recommend taking a few days off.",
          "ru": "Я бы порекомендовал взять пару выходных.",
          "words": [
            [
              "days off",
              "выходные"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — глаголы просьбы, совета и приказа. Повтори вслух.",
      "items": [
        {
          "en": "to order",
          "ru": "приказывать, велеть",
          "ex": "He ordered them to leave."
        },
        {
          "en": "to advise",
          "ru": "советовать",
          "ex": "She advised me to wait."
        },
        {
          "en": "to remind",
          "ru": "напоминать",
          "ex": "Remind me to call him."
        },
        {
          "en": "to warn",
          "ru": "предупреждать",
          "ex": "He warned us not to be late."
        },
        {
          "en": "to offer",
          "ru": "предлагать (сделать)",
          "ex": "She offered to help."
        },
        {
          "en": "to refuse",
          "ru": "отказываться",
          "ex": "He refused to answer."
        },
        {
          "en": "to recommend",
          "ru": "рекомендовать",
          "ex": "I recommend trying it."
        },
        {
          "en": "to suggest",
          "ru": "предлагать (идею)",
          "ex": "He suggested going home."
        },
        {
          "en": "a request",
          "ru": "просьба",
          "ex": "It was a polite request."
        },
        {
          "en": "an order",
          "ru": "приказ",
          "ex": "It was a clear order."
        }
      ]
    },
    "reading": {
      "intro": "Рассказ-пересказ просьб и советов в первый рабочий день. Замечай tell / ask + to do и suggest.",
      "title": "The first day at work",
      "sentences": [
        "On my first day, my manager told me to arrive early.",
        "She asked me to read the safety rules.",
        "A colleague advised me to take notes.",
        "He reminded me not to be late for the meeting.",
        "My boss suggested working in pairs.",
        "She recommended asking questions when something was unclear.",
        "At lunch, a co-worker offered to show me the building.",
        "By the evening, everyone had asked me to join them for coffee."
      ],
      "translation": "В мой первый день менеджер велела мне приходить пораньше. Она попросила меня прочитать правила безопасности. Коллега посоветовал делать заметки. Он напомнил мне не опаздывать на собрание. Начальница предложила работать в парах. Она порекомендовала задавать вопросы, когда что-то непонятно. В обед коллега предложил показать мне здание. К вечеру все уже позвали меня на кофе."
    },
    "drag": {
      "intro": "Соедини конструкцию с её смыслом.",
      "pairs": [
        [
          "tell / ask + кого + to do",
          "команда / просьба"
        ],
        [
          "suggest + -ing",
          "предложить (идею)"
        ],
        [
          "offer + to do",
          "предложить сделать"
        ],
        [
          "not to do",
          "запрет"
        ],
        [
          "advise sb to do",
          "посоветовать кому-то"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по командам и глаголам пересказа. Пять вопросов — и день закрыт.",
      "items": [
        {
          "q": "«Он велел мне подождать» —",
          "opts": [
            "He said me to wait",
            "He told me to wait",
            "He suggested me to wait"
          ],
          "answer": 1,
          "explain": "tell + me + to wait; не «said me»."
        },
        {
          "q": "«Она предложила пойти в кино» —",
          "opts": [
            "She suggested to go to the cinema",
            "She suggested going to the cinema",
            "She suggested me to go to the cinema"
          ],
          "answer": 1,
          "explain": "suggest + -ing: going."
        },
        {
          "q": "«Он попросил меня не курить» —",
          "opts": [
            "He asked me to not smoke",
            "He asked me not to smoke",
            "He asked me don't smoke"
          ],
          "answer": 1,
          "explain": "запрет: not to smoke."
        },
        {
          "q": "«Я рекомендую забронировать заранее» —",
          "opts": [
            "I recommend to book early",
            "I recommend booking early",
            "I recommend you to book early"
          ],
          "answer": 1,
          "explain": "recommend + -ing: booking."
        },
        {
          "q": "Какой глагол НЕ берёт «+ кого + to do»?",
          "opts": [
            "ask",
            "tell",
            "suggest"
          ],
          "answer": 2,
          "explain": "suggest → -ing или that, не «+ кого + to»."
        }
      ]
    },
    "picture": {
      "intro": "Опиши, о чём попросили человека на картинке, через пересказ.",
      "emoji": "🙏📋👉",
      "prompt": "Опиши по картинке, что человеку велели или предложили. Используй told / asked + to do, suggested + -ing.",
      "hint": "Структуры: The boss told her to wait. He asked me to sign the form. She suggested taking a break.",
      "example": "The manager is talking to a new employee. He told her to fill in the form. He asked her to wait a few minutes. He also suggested reading the rules first, and reminded her not to forget her badge.",
      "img": "img/b1/day-17.jpg",
      "credit": "Фото: U.S. Dept. of Housing and Urban Development (HUD) · Public Domain · <a href=\"https://www.flickr.com/photos/41555360@N03/43437673730\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Перескажи советы и просьбы.",
      "prompt": "Вспомни день, когда тебе давали советы или о чём-то просили (врач, начальник, друг). Перескажи 4–6 фраз: He told me to…, She asked me to…, He suggested …ing.",
      "hint": "Структуры: The doctor told me to rest. My friend advised me to wait. He suggested going to the gym. She asked me not to worry.",
      "example": "Last week I felt ill, so I went to the doctor. She told me to stay at home for a few days. She advised me to drink more water and asked me not to work too much. A friend suggested taking some vitamins. He also offered to bring me some food. I promised to call him if I felt worse."
    }
  },
  "18": {
    "day": 18,
    "week": "03",
    "level": "B1",
    "themeRu": "Наверное",
    "themeEn": "Modals of deduction (present)",
    "intro": "В окне горит свет — «наверное, он дома». Не берёт трубку — «может, занят». Сегодня учимся вот так <b>догадываться по-английски</b>. За логические выводы отвечают особые модальные: <b>must</b>, <b>might</b>, <b>could</b>, <b>can't</b>. Главная ловушка: здесь <b>must</b> значит не «должен», а «наверняка». И ещё: по-английски нельзя сказать «He can be home» — сегодня поговорим почему. Поехали.",
    "introAudio": "В окне горит свет — наверное, он дома. Не берёт трубку — может, занят. Сегодня учимся вот так догадываться по-английски. За логические выводы отвечают особые модальные: must, might, could, can't. Главная ловушка: здесь must значит не должен, а наверняка. И ещё: по-английски нельзя сказать He can be home — сегодня поговорим почему. Поехали.",
    "goals": [
      "делать логические выводы: He must be tired, She might be busy",
      "различать степень уверенности: must (точно) / might-could (может быть) / can't (точно нет)",
      "понимать, что здесь must = «наверняка», а не «должен»",
      "видеть ловушку: «He can be home» → He must / might be home"
    ],
    "learned": [
      "Сделал(а) логические выводы: He must be tired, She might be busy",
      "Различил(а) степень уверенности: must (точно) / might-could (может быть) / can't (точно нет)",
      "Понял(а), что здесь must = «наверняка», а не «должен»",
      "Увидел(а) ловушку: «He can be home» → He must / might be home"
    ],
    "review": {
      "intro": "Сегодня всё про модальные, поэтому сначала освежим, как они работали на A2: must и should без to, might для возможности. Это фундамент — на нём построим «дедукцию».",
      "introAudio": "Сегодня всё про модальные, поэтому сначала освежим, как они работали на A2: must и should без to, might для возможности. Это фундамент, на нём построим дедукцию.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни must = обязанность (A2), без to.",
          "q": "«Тебе нужно носить шлем» (это правило) —",
          "opts": [
            "You must wear a helmet",
            "You can wear a helmet",
            "You must to wear a helmet"
          ],
          "answer": 0,
          "explain": "must + базовый глагол без to: <b>must wear</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни should = совет (A2).",
          "q": "«Тебе следует отдохнуть» —",
          "opts": [
            "You should to rest",
            "You should rest",
            "You shoulds rest"
          ],
          "answer": 1,
          "explain": "should + базовый глагол: <b>should rest</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни might = возможность (A2).",
          "q": "«Возможно, пойдёт дождь» —",
          "opts": [
            "It might rain",
            "It might to rain",
            "It mights rain"
          ],
          "answer": 0,
          "explain": "might + базовый глагол: <b>might rain</b>."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · уверенный вывод",
        "title": "<em>must be</em> — «наверняка», логический вывод",
        "paras": [
          "Когда ты почти уверен, потому что есть доказательство, используй <b>must</b>. Свет горит, машина у дома → <b>He must be at home.</b> = Он наверняка дома. Это не приказ — это твой логический вывод.",
          "Форма: <b>must + be</b> (или + другой глагол): She <b>must be</b> tired. You <b>must know</b> him. Для действия прямо сейчас — <b>must be + -ing</b>: He <b>must be working</b> (наверняка работает).",
          "🇷🇺 Ловушка: тот же must на A2 значил «должен» (обязанность). Здесь смысл другой — <b>«наверняка»</b>. Понять помогает контекст: «You must be tired» — это не «ты обязан устать», а «ты, наверное, устал»."
        ],
        "audio": "Когда ты почти уверен, потому что есть доказательство, используй must. Свет горит, машина у дома: He must be at home — он наверняка дома. Форма: must плюс be. She must be tired. Для действия сейчас: must be plus -ing, He must be working. И помни: здесь must значит наверняка, а не должен.",
        "table": {
          "rows": [
            [
              "must be",
              "наверняка есть / является"
            ],
            [
              "must be + -ing",
              "наверняка делает прямо сейчас"
            ],
            [
              "доказательство → вывод",
              "Light is on → He must be home."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он наверняка дома — свет горит.",
            "en": "He <b>must be</b> at home — the light is on.",
            "gloss": "must = наверняка",
            "say": "He must be at home. The light is on."
          },
          {
            "ru": "Ты, наверное, устал.",
            "en": "You <b>must be</b> tired.",
            "gloss": "вывод, не обязанность",
            "say": "You must be tired."
          },
          {
            "ru": "Она наверняка сейчас работает.",
            "en": "She <b>must be working</b> now.",
            "gloss": "must be + -ing",
            "say": "She must be working now."
          }
        ],
        "mistakes": [
          {
            "wrong": "He must to be home",
            "right": "He <b>must be</b> home",
            "why": "после must — голый инфинитив, без to"
          },
          {
            "wrong": "You must be tired = ты обязан устать",
            "right": "You must be tired = ты <b>наверняка</b> устал",
            "why": "must здесь = вывод «наверняка», а не «должен»"
          }
        ],
        "mnemonic": "🔌 Есть доказательство → must be («наверняка»).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> уверенный вывод → must be.",
            "q": "«Свет горит — он наверняка дома» —",
            "opts": [
              "He can be home",
              "He must be home",
              "He must to be home"
            ],
            "answer": 1,
            "explain": "вывод «наверняка» → must be (без to)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери правильный смысл.",
            "q": "«You must be hungry» значит —",
            "opts": [
              "Ты обязан проголодаться",
              "Ты, наверное, голоден"
            ],
            "answer": 1,
            "explain": "must в выводе = «наверняка»."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши вывод. must + be.",
            "q": "Она наверняка устала.",
            "accept": [
              "she must be tired"
            ],
            "placeholder": "She must be ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · может быть",
        "title": "<em>might / could / may be</em> — «возможно»",
        "paras": [
          "Когда уверенности нет, а есть лишь версия, используй <b>might</b>, <b>could</b> или <b>may</b> + be. Она не берёт трубку → <b>She might be</b> busy. = Может, она занята. Все три здесь почти синонимы.",
          "Это слабее, чем must. Шкала: <b>must</b> (почти точно) → <b>might / could / may</b> (вполне возможно). Действие сейчас — снова + -ing: He <b>might be sleeping</b>.",
          "Не путай с наречием <b>maybe</b> (может быть): оно стоит отдельно в начале — Maybe she is busy. А модальный вывод встроен в глагол: She <b>might be</b> busy."
        ],
        "audio": "Когда уверенности нет, а есть лишь версия, используй might, could или may плюс be. She might be busy — может, она занята. Это слабее, чем must. Шкала: must почти точно, might, could, may — вполне возможно. Действие сейчас: He might be sleeping.",
        "table": {
          "rows": [
            [
              "might / could / may be",
              "возможно, есть"
            ],
            [
              "might be + -ing",
              "возможно, делает сейчас"
            ],
            [
              "слабее, чем must",
              "must > might / could / may"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Может, она занята.",
            "en": "She <b>might be</b> busy.",
            "gloss": "might = возможно",
            "say": "She might be busy."
          },
          {
            "ru": "Возможно, они дома.",
            "en": "They <b>could be</b> at home.",
            "gloss": "could = возможно",
            "say": "They could be at home."
          },
          {
            "ru": "Может, он сейчас спит.",
            "en": "He <b>may be sleeping</b>.",
            "gloss": "may be + -ing",
            "say": "He may be sleeping."
          }
        ],
        "mistakes": [
          {
            "wrong": "She maybe is busy",
            "right": "She <b>might be</b> busy",
            "why": "модальный вывод — might be; maybe — это отдельное наречие"
          },
          {
            "wrong": "He might to be late",
            "right": "He <b>might be</b> late",
            "why": "после might — без to"
          }
        ],
        "mnemonic": "🤔 Не уверен → might / could / may be («возможно»).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> версия, не уверенность → might.",
            "q": "«Может, он занят» —",
            "opts": [
              "He must be busy",
              "He might be busy",
              "He can be busy"
            ],
            "answer": 1,
            "explain": "версия → might be."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери, что слабее по уверенности.",
            "q": "Что выражает меньшую уверенность?",
            "opts": [
              "must be",
              "might be"
            ],
            "answer": 1,
            "explain": "might be слабее: «возможно», а must be — «наверняка»."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши версию (might / could / may).",
            "q": "Возможно, они дома.",
            "accept": [
              "they might be at home",
              "they could be at home",
              "they may be at home",
              "they might be home",
              "they could be home",
              "they may be home"
            ],
            "placeholder": "They might be ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · точно нет",
        "title": "<em>can't be</em> — «не может быть»",
        "paras": [
          "Для уверенного отрицательного вывода («это точно НЕ так») используй <b>can't</b> (= cannot). «Она только что поела — она <b>can't be</b> hungry.» = Не может быть, что она голодна.",
          "Важно: отрицание к must в этом значении — НЕ mustn't, а именно <b>can't</b>. mustn't значит «нельзя» (запрет), это другое. Догадка «точно нет» = <b>can't be</b>.",
          "Полная шкала уверенности: <b>must be</b> (точно да) — <b>might / could be</b> (может быть) — <b>can't be</b> (точно нет). Три ступеньки одной лестницы."
        ],
        "audio": "Для уверенного отрицательного вывода, это точно не так, используй can't. She has just eaten — she can't be hungry. Важно: отрицание к must здесь не mustn't, а именно can't. mustn't значит нельзя, запрет, это другое. Шкала: must be, might be, can't be.",
        "table": {
          "rows": [
            [
              "must be",
              "точно да ✅"
            ],
            [
              "might / could be",
              "может быть 🤔"
            ],
            [
              "can't be",
              "точно нет ❌"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Она только что поела — не может быть, что голодна.",
            "en": "She's just eaten — she <b>can't be</b> hungry.",
            "gloss": "can't = точно нет",
            "say": "She's just eaten. She can't be hungry."
          },
          {
            "ru": "Это не может быть правдой.",
            "en": "That <b>can't be</b> true.",
            "gloss": "can't be true",
            "say": "That can't be true."
          },
          {
            "ru": "Его точно нет дома — машина уехала.",
            "en": "He <b>can't be</b> at home — the car has gone.",
            "gloss": "can't be",
            "say": "He can't be at home. The car has gone."
          }
        ],
        "mistakes": [
          {
            "wrong": "She mustn't be hungry",
            "right": "She <b>can't be</b> hungry",
            "why": "«точно нет» — can't be, а не mustn't (это запрет)"
          },
          {
            "wrong": "That cannot to be true",
            "right": "That <b>can't be</b> true",
            "why": "после can't — без to"
          }
        ],
        "mnemonic": "🚷 Точно НЕ так → can't be (не mustn't!).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> уверенное «нет» → can't be.",
            "q": "«Не может быть, что это правда» —",
            "opts": [
              "That mustn't be true",
              "That can't be true",
              "That can't to be true"
            ],
            "answer": 1,
            "explain": "can't be true (без to)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди отрицание вывода must be.",
            "q": "Отрицание вывода «must be» —",
            "opts": [
              "mustn't be",
              "can't be",
              "don't must be"
            ],
            "answer": 1,
            "explain": "«точно нет» → can't be."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши вывод «точно нет».",
            "q": "Его точно нет на работе.",
            "accept": [
              "he can't be at work",
              "he cannot be at work"
            ],
            "placeholder": "He can't be ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "«He can be home» — почему нельзя",
        "paras": [
          "🇷🇺 Русское «он может быть дома» так и просится перевестись как <b>He can be home</b>. Но для догадки <b>can</b> в плюсе по-английски не используют. Нужны <b>must be</b> (наверняка) или <b>might / could be</b> (возможно).",
          "can в плюсе означает «способен / бывает вообще»: Water <b>can be</b> dangerous (вода вообще бывает опасной), а не «вот сейчас, наверное». Поэтому конкретная догадка → must / might / could be.",
          "Итог дня — лестница: <b>must be</b> (точно да) · <b>might / could / may be</b> (может быть) · <b>can't be</b> (точно нет). И помни: <b>must</b> тут = «наверняка», не «должен»."
        ],
        "audio": "Русское он может быть дома просится перевестись как He can be home. Но для догадки can в плюсе не используют. Нужны must be, наверняка, или might, could be, возможно. can в плюсе означает бывает вообще: Water can be dangerous. Итог: must be, might be, can't be.",
        "table": {
          "rows": [
            [
              "❌ He can be home (догадка)",
              "✅ He must / might be home"
            ],
            [
              "✅ Water can be dangerous",
              "общее свойство — тут can можно"
            ],
            [
              "must = наверняка ≠ должен",
              "контекст решает"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он, наверное, дома (вывод).",
            "en": "He <b>must be</b> at home.",
            "gloss": "не «can be»",
            "say": "He must be at home."
          },
          {
            "ru": "Может, он дома.",
            "en": "He <b>might be</b> at home.",
            "gloss": "возможно",
            "say": "He might be at home."
          },
          {
            "ru": "Вода вообще бывает опасной.",
            "en": "Water <b>can be</b> dangerous.",
            "gloss": "общее свойство — can ок",
            "say": "Water can be dangerous."
          }
        ],
        "mistakes": [
          {
            "wrong": "He can be at home now",
            "right": "He <b>must / might be</b> at home now",
            "why": "конкретная догадка → must / might, не can"
          },
          {
            "wrong": "He must be at work = он обязан",
            "right": "He must be at work = он <b>наверняка</b> на работе",
            "why": "must в выводе = «наверняка»"
          }
        ],
        "mnemonic": "🪜 Лестница: must be · might / could be · can't be. (can be ≠ догадка)",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> догадка → must / might, не can.",
            "q": "«Наверное, он дома» (вывод) —",
            "opts": [
              "He can be at home",
              "He must be at home",
              "He has be at home"
            ],
            "answer": 1,
            "explain": "конкретная догадка → must be."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди, где can be уместно.",
            "q": "Где «can be» правильно?",
            "opts": [
              "He can be home now (догадка)",
              "Water can be dangerous (свойство)"
            ],
            "answer": 1,
            "explain": "can be = общее свойство; для догадки нужно must / might be."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши версию (might / could / may).",
            "q": "Может, она занята.",
            "accept": [
              "she might be busy",
              "she could be busy",
              "she may be busy"
            ],
            "placeholder": "She might be ..."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух вывод.",
            "target": "He must be tired.",
            "sub": "Он, наверное, устал.",
            "want": "must"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Том и Аня гадают, где их друг Сэм — его нет на встрече. Слушай must / might / could / can't.",
      "lines": [
        {
          "who": "A",
          "en": "Sam isn't here yet. Where can he be?",
          "ru": "Сэма всё ещё нет. Где же он может быть?"
        },
        {
          "who": "B",
          "en": "He must be stuck in traffic. It's rush hour.",
          "ru": "Наверняка застрял в пробке. Час пик."
        },
        {
          "who": "A",
          "en": "He might be at the office. He often works late.",
          "ru": "Может, он в офисе. Он часто работает допоздна."
        },
        {
          "who": "B",
          "en": "He can't be at home — I just called and nobody answered.",
          "ru": "Дома его точно нет — я только что звонил, никто не ответил."
        },
        {
          "who": "A",
          "en": "Look, his phone is off. He could be on the train.",
          "ru": "Смотри, телефон выключен. Может, он в поезде."
        },
        {
          "who": "B",
          "en": "You're right. He must be on his way.",
          "ru": "Точно. Наверняка уже едет."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — модальные дедукции и слова уверенности. Повтори вслух.",
      "items": [
        {
          "en": "must be",
          "ru": "наверняка (уверенный вывод)",
          "ex": "He must be tired."
        },
        {
          "en": "might be",
          "ru": "возможно, может быть",
          "ex": "She might be late."
        },
        {
          "en": "could be",
          "ru": "возможно, может быть",
          "ex": "They could be wrong."
        },
        {
          "en": "can't be",
          "ru": "не может быть (точно нет)",
          "ex": "It can't be true."
        },
        {
          "en": "a guess",
          "ru": "догадка",
          "ex": "It's just a guess."
        },
        {
          "en": "obvious",
          "ru": "очевидный",
          "ex": "The answer is obvious."
        },
        {
          "en": "probably",
          "ru": "вероятно, наверное",
          "ex": "She is probably at work."
        },
        {
          "en": "evidence",
          "ru": "доказательство",
          "ex": "There is no evidence."
        },
        {
          "en": "to be sure",
          "ru": "быть уверенным",
          "ex": "I'm not sure about that."
        },
        {
          "en": "likely",
          "ru": "вероятный, скорее всего",
          "ex": "Rain is likely today."
        }
      ]
    },
    "reading": {
      "intro": "Рассказ-догадка: тихое утро в офисе. Замечай must / might / could / can't.",
      "title": "Where is everyone?",
      "sentences": [
        "The office is very quiet this morning.",
        "The lights are off, so most people must be away.",
        "Anna's coat is here, so she can't be far.",
        "She might be in a meeting on the second floor.",
        "Tom's computer is on — he could be getting coffee.",
        "The boss isn't answering, so she must be busy.",
        "It's only nine o'clock, so they can't be at lunch yet.",
        "Everyone must be having a slow morning!"
      ],
      "translation": "В офисе сегодня очень тихо. Свет выключен, значит большинства людей наверняка нет. Пальто Анны здесь, значит она не могла уйти далеко. Возможно, она на собрании на втором этаже. Компьютер Тома включён — может, он пошёл за кофе. Начальница не отвечает, значит наверняка занята. Сейчас только девять, так что на обеде они быть точно не могут. У всех, видимо, неспешное утро!"
    },
    "drag": {
      "intro": "Соедини модальный вывод с его уверенностью.",
      "pairs": [
        [
          "must be",
          "наверняка (точно да)"
        ],
        [
          "might / could be",
          "может быть"
        ],
        [
          "can't be",
          "точно нет"
        ],
        [
          "must = наверняка",
          "не «должен»"
        ],
        [
          "must be (без to)",
          "после must нет to"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по дедукции. Пять вопросов — и неделя почти позади.",
      "items": [
        {
          "q": "«Он наверняка дома» (свет горит) —",
          "opts": [
            "He can be home",
            "He must be home",
            "He should be home"
          ],
          "answer": 1,
          "explain": "уверенный вывод → must be."
        },
        {
          "q": "«Может, она занята» —",
          "opts": [
            "She must be busy",
            "She might be busy",
            "She can't be busy"
          ],
          "answer": 1,
          "explain": "версия → might be."
        },
        {
          "q": "«Не может быть, что это правда» —",
          "opts": [
            "That mustn't be true",
            "That can't be true",
            "That can be true"
          ],
          "answer": 1,
          "explain": "уверенное «нет» → can't be."
        },
        {
          "q": "«You must be tired» здесь значит —",
          "opts": [
            "Ты обязан устать",
            "Ты, наверное, устал"
          ],
          "answer": 1,
          "explain": "must = «наверняка», логический вывод."
        },
        {
          "q": "Что НЕ годится для догадки «он, наверное, дома»?",
          "opts": [
            "must be",
            "might be",
            "can be"
          ],
          "answer": 2,
          "explain": "can be — не для конкретной догадки; нужно must / might be."
        }
      ]
    },
    "picture": {
      "intro": "Догадайся по картинке, что происходит, и опиши выводами.",
      "emoji": "🕵️🤔💡",
      "prompt": "Опиши по картинке свои догадки. Используй must be / might be / can't be.",
      "hint": "Структуры: He must be tired. She might be waiting for someone. They can't be cold — it's summer.",
      "example": "The man is sitting alone at a station. He must be waiting for a train. He keeps looking at his watch, so the train might be late. He has a big suitcase, so he could be going on holiday. He can't be local — he is looking at a map.",
      "img": "img/b1/day-18.jpg",
      "credit": "Фото: BU Rennes 2 · CC0 · <a href=\"https://www.flickr.com/photos/59505333@N03/17794651543\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Сделай выводы о людях по фактам.",
      "prompt": "Опиши 4–6 догадок о знакомом человеке или о ситуации. Используй must be, might / could be, can't be.",
      "hint": "Структуры: My neighbour must be rich — he has three cars. He might be a doctor. He can't be at home now — his car is gone.",
      "example": "My new neighbour is a bit of a mystery. He must be quite rich, because he drives an expensive car. He might be a businessman, or he could work from home. He is never out in the morning, so he can't work in a normal office. He is always friendly, so he must be a nice person."
    }
  },
  "19": {
    "day": 19,
    "week": "03",
    "level": "B1",
    "themeRu": "Который",
    "themeEn": "Defining relative clauses",
    "intro": "Есть слово, которого в русском всего одно, а в английском — целая семья. Это <b>«который»</b>. По-русски ты говоришь «человек, <b>который</b> живёт рядом», «книга, <b>которую</b> я читаю», «друг, <b>чья</b> машина сломалась» — и всюду это одно изменяемое слово. В английском у каждого случая своя короткая бирка: <b>who</b> для людей, <b>which</b> для вещей, <b>that</b> для обоих, <b>whose</b> для принадлежности, <b>where</b> для места. Сегодня учимся клеить такие «определяющие» придаточные — те, что несут важную, опознающую информацию и пишутся <b>без запятых</b>. Поехали.",
    "introAudio": "Есть слово, которого в русском всего одно, а в английском — целая семья. Это «который». По-русски ты говоришь: человек, который живёт рядом; книга, которую я читаю; друг, чья машина сломалась — и всюду это одно изменяемое слово. В английском у каждого случая своя короткая бирка: who для людей, which для вещей, that для обоих, whose для принадлежности, where для места. Сегодня учимся клеить такие определяющие придаточные — те, что несут важную опознающую информацию и пишутся без запятых. Поехали.",
    "goals": [
      "связывать два предложения в одно через who, which, that — без лишних слов",
      "выбирать нужную «бирку»: who для людей, which для вещей, that для обоих",
      "ставить whose для принадлежности («человек, чья…») и where для места",
      "не дублировать подлежащее: the man who lives here, а не «who he lives»"
    ],
    "learned": [
      "Связал(а) два предложения в одно через who, which, that — без лишних слов",
      "Выбрал(а) нужную «бирку»: who для людей, which для вещей, that для обоих",
      "Поставил(а) whose для принадлежности («человек, чья…») и where для места",
      "Перестал(а) дублировать подлежащее: the man who lives here, а не «who he lives»"
    ],
    "review": {
      "intro": "Утренняя разминка. Сначала вспомним базовое who/which из A2 и наши вечные артикли a/the — на них сегодня всё держится.",
      "introAudio": "Утренняя разминка. Сначала вспомним базовое who и which из A2 и наши вечные артикли a и the — на них сегодня всё держится.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери бирку. Речь о вещах (ключи).",
          "q": "The keys ___ open this door are gold.",
          "opts": [
            "who",
            "which",
            "whose"
          ],
          "answer": 1,
          "explain": "Ключи — это вещи, значит <b>which</b> (или that), не who."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни артикли. Второе упоминание — какой артикль?",
          "q": "I read a great article. ___ article was about AI.",
          "opts": [
            "A",
            "The",
            "— (без артикля)"
          ],
          "answer": 1,
          "explain": "Второе упоминание уже известного → <b>The</b> article."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери определяющее придаточное (мостик к теме дня).",
          "q": "Собери: «человек, который здесь работает»",
          "want": "the man who works here",
          "answer": "the man who works here"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · who / which / that",
        "title": "Одно «который» — три бирки: <em>who, which, that</em>",
        "paras": [
          "Определяющее придаточное (defining) — это «хвост», который ОПОЗНАЁТ предмет: без него непонятно, о ком речь. «Человек, <b>который</b> звонил» — какой именно человек? Тот, что звонил. Такой хвост важен, поэтому запятых вокруг него <b>нет</b>.",
          "Выбор бирки по смыслу: <b>who</b> — про людей, <b>which</b> — про вещи и животных, <b>that</b> — универсальная, годится и для людей, и для вещей (особенно в разговорной речи). «The colleague <b>who</b> / <b>that</b> sits next to me», «the app <b>which</b> / <b>that</b> tracks my money».",
          "Бирка стоит сразу после существительного и сама работает подлежащим придаточного — поэтому второе «он/она/оно» уже не нужно (об этом подробно в правиле 4)."
        ],
        "audio": "Определяющее придаточное опознаёт предмет: без него непонятно, о ком речь. Человек, который звонил — какой именно? Тот, что звонил. Запятых вокруг такого хвоста нет. Выбор бирки: who про людей, which про вещи, that годится для обоих. The colleague who sits next to me. The app which tracks my money.",
        "table": {
          "rows": [
            [
              "who",
              "для людей: the man who called"
            ],
            [
              "which",
              "для вещей: the book which sells well"
            ],
            [
              "that",
              "и люди, и вещи (часто в речи)"
            ],
            [
              "без запятых",
              "важная, опознающая инфо"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Это коллега, которая сидит рядом со мной.",
            "en": "This is the colleague <b>who</b> sits next to me.",
            "gloss": "who — про людей",
            "say": "This is the colleague who sits next to me."
          },
          {
            "ru": "Мне нравятся фильмы, которые заставляют думать.",
            "en": "I like films <b>that</b> make me think.",
            "gloss": "that — про вещи",
            "say": "I like films that make me think."
          },
          {
            "ru": "Поезд, который опаздывает, идёт в Лидс.",
            "en": "The train <b>which</b> is late goes to Leeds.",
            "gloss": "which — вещь",
            "say": "The train which is late goes to Leeds."
          }
        ],
        "mistakes": [
          {
            "wrong": "the man which called me",
            "right": "the man <b>who</b> called me",
            "why": "who — для людей, не which"
          },
          {
            "wrong": "the book who I read",
            "right": "the book <b>which / that</b> I read",
            "why": "which/that — для вещей, не who"
          }
        ],
        "mnemonic": "🏷️ who = люди · which = вещи · that = оба. Defining — без запятых.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери бирку для человека.",
            "q": "The girl ___ is singing is my sister.",
            "opts": [
              "which",
              "who",
              "whose"
            ],
            "answer": 1,
            "explain": "Девушка — человек → <b>who</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери бирку для вещи (ключи).",
            "q": "I lost the keys ___ open the garage.",
            "opts": [
              "who",
              "that",
              "whose"
            ],
            "answer": 1,
            "explain": "Вещи → <b>that</b> (или which)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери придаточное.",
            "q": "Собери: «люди, которые здесь работают»",
            "want": "people who work here",
            "answer": "people who work here"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. Фильм — вещь.",
            "q": "фильм, который мне понравился",
            "accept": [
              "the film that i liked",
              "the film which i liked",
              "the film i liked"
            ],
            "placeholder": "the film ... I liked"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · whose",
        "title": "<em>whose</em> — «чей / которого» (принадлежность)",
        "paras": [
          "Когда в русском «который» превращается в «<b>чей</b>», «<b>у которого</b>», «<b>которого</b> машина» — по-английски это <b>whose</b>. Оно показывает принадлежность и заменяет «его/её»: <b>the woman whose car</b> = женщина, чья машина (= её машина).",
          "После whose сразу идёт существительное, без артикля: <b>whose</b> brother, <b>whose</b> phone, <b>whose</b> idea. Работает и с людьми, и (реже) с организациями: «a company whose products I trust».",
          "Не путай со звучащим так же <b>who's</b> = who is. <b>Whose</b> — про принадлежность, <b>who's</b> — это «кто есть»."
        ],
        "audio": "Когда русский который превращается в чей, у которого, которого машина — по-английски это whose. Оно показывает принадлежность: the woman whose car — женщина, чья машина. После whose сразу существительное, без артикля: whose brother, whose phone. Не путай с who's, который значит who is.",
        "table": {
          "rows": [
            [
              "whose",
              "чей / у которого / которого"
            ],
            [
              "the man whose dog barks",
              "человек, чья собака лает"
            ],
            [
              "whose + существительное",
              "whose phone, whose idea"
            ],
            [
              "whose ≠ who's",
              "whose = принадлежность · who's = who is"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Это сосед, чья собака всё время лает.",
            "en": "He's the neighbour <b>whose</b> dog barks all the time.",
            "gloss": "whose dog = его собака",
            "say": "He's the neighbour whose dog barks all the time."
          },
          {
            "ru": "Я знаю девушку, у которой брат — пилот.",
            "en": "I know a girl <b>whose</b> brother is a pilot.",
            "gloss": "whose brother",
            "say": "I know a girl whose brother is a pilot."
          },
          {
            "ru": "Это писательница, книги которой я люблю.",
            "en": "She's a writer <b>whose</b> books I love.",
            "gloss": "whose books",
            "say": "She's a writer whose books I love."
          }
        ],
        "mistakes": [
          {
            "wrong": "the man who his dog barks",
            "right": "the man <b>whose</b> dog barks",
            "why": "принадлежность → whose, без «his»"
          },
          {
            "wrong": "a girl who's brother is a pilot",
            "right": "a girl <b>whose</b> brother is a pilot",
            "why": "whose (принадлежность), не who's (= who is)"
          }
        ],
        "mnemonic": "🔑 Принадлежность («чей») → whose + существительное. whose ≠ who's.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери бирку принадлежности.",
            "q": "I met a man ___ son plays for the team.",
            "opts": [
              "who",
              "whose",
              "which"
            ],
            "answer": 1,
            "explain": "«чей сын» → <b>whose</b> son."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери придаточное с whose.",
            "q": "Собери: «женщина, чья машина сломалась»",
            "want": "the woman whose car broke down",
            "answer": "the woman whose car broke down"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод с whose.",
            "q": "писательница, книги которой я люблю",
            "accept": [
              "a writer whose books i love",
              "the writer whose books i love"
            ],
            "placeholder": "a writer whose ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · where / when",
        "title": "<em>where</em> для места, <em>when</em> для времени",
        "paras": [
          "Если «который» относится к МЕСТУ, англичанин часто берёт <b>where</b>: «the town <b>where</b> I grew up» = город, в котором я вырос. Where уже включает в себя «в/на» — второй предлог не нужен.",
          "Для ВРЕМЕНИ есть <b>when</b>: «the day <b>when</b> we met» = день, когда мы познакомились. В разговорной речи when тут часто опускают: «the day we met».",
          "Тонкость: where заменяет «in/at which». Сравни: «the house <b>where</b> I live» = «the house <b>in which</b> I live» = «the house <b>that</b> I live <b>in</b>». Все три верны, но where — самый естественный."
        ],
        "audio": "Если который относится к месту, бери where: the town where I grew up — город, в котором я вырос. Where уже включает в и на, второй предлог не нужен. Для времени есть when: the day when we met. Where заменяет in which: the house where I live.",
        "table": {
          "rows": [
            [
              "where",
              "место: the city where I live"
            ],
            [
              "when",
              "время: the year when I was born"
            ],
            [
              "where = in/at which",
              "the office where I work"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Это кафе, где мы впервые встретились.",
            "en": "This is the café <b>where</b> we first met.",
            "gloss": "where — место",
            "say": "This is the café where we first met."
          },
          {
            "ru": "Я помню день, когда всё изменилось.",
            "en": "I remember the day <b>when</b> everything changed.",
            "gloss": "when — время",
            "say": "I remember the day when everything changed."
          },
          {
            "ru": "Это деревня, в которой вырос мой отец.",
            "en": "That's the village <b>where</b> my father grew up.",
            "gloss": "where = в которой",
            "say": "That's the village where my father grew up."
          }
        ],
        "mistakes": [
          {
            "wrong": "the city where I live in",
            "right": "the city <b>where</b> I live",
            "why": "where уже значит «в», лишний in не нужен"
          },
          {
            "wrong": "the town which I was born",
            "right": "the town <b>where</b> I was born",
            "why": "место → where (или which … in)"
          }
        ],
        "mnemonic": "📍 Место → where (без второго «в»). Время → when.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери бирку для места.",
            "q": "Brighton is the town ___ I was born.",
            "opts": [
              "which",
              "where",
              "whose"
            ],
            "answer": 1,
            "explain": "Место → <b>where</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери бирку для времени.",
            "q": "I'll never forget the moment ___ I saw the sea.",
            "opts": [
              "where",
              "when",
              "who"
            ],
            "answer": 1,
            "explain": "Момент — это время → <b>when</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери придаточное с where.",
            "q": "Собери: «дом, в котором я вырос»",
            "want": "the house where I grew up",
            "answer": "the house where I grew up"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "Не дублируй подлежащее: <em>who lives</em>, а не «who he lives»",
        "paras": [
          "Главная ошибка русскоязычных: бирка who/which/that <b>сама</b> работает подлежащим, поэтому второе «он/она/это» лишнее. «Человек, который <b>живёт</b> здесь» → the man <b>who lives</b> here, НЕ «who <b>he</b> lives». В русском мы тоже не говорим «который он живёт» — но по инерции часто добавляем местоимение в английском.",
          "Зеркальный случай: когда бирка — это <b>дополнение</b> (а не подлежащее), её можно вообще <b>опустить</b>. «The film <b>(that)</b> I watched», «the man <b>(who)</b> I met». Если после бирки сразу идёт новое подлежащее (I, he, she) — бирку можно убрать.",
          "И помни: <b>that</b> в defining-придаточных — нормально и для людей, и для вещей. А вот запятых здесь нет: они появятся завтра, в non-defining."
        ],
        "audio": "Главная ошибка русскоязычных: бирка who, which, that сама работает подлежащим, поэтому второе он или она лишнее. Человек, который живёт здесь — the man who lives here, не who he lives. Зеркальный случай: когда бирка это дополнение, её можно опустить. The film I watched. The man I met. И помни: that годится и для людей, и для вещей, а запятых в defining нет.",
        "table": {
          "rows": [
            [
              "who lives ✓",
              "who he lives ✗ — без второго «он»"
            ],
            [
              "the book (that) I read",
              "бирку-дополнение можно опустить"
            ],
            [
              "defining = без запятых",
              "запятые — завтра, в non-defining"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я знаю человека, который чинит компьютеры.",
            "en": "I know a guy <b>who fixes</b> computers.",
            "gloss": "who = подлежащее, без «he»",
            "say": "I know a guy who fixes computers."
          },
          {
            "ru": "Дом, который мы купили, старый.",
            "en": "The house <b>we bought</b> is old.",
            "gloss": "бирку-дополнение опустили",
            "say": "The house we bought is old."
          },
          {
            "ru": "Это та песня, которую все любят.",
            "en": "That's the song <b>everyone</b> loves.",
            "gloss": "that можно опустить",
            "say": "That's the song everyone loves."
          }
        ],
        "mistakes": [
          {
            "wrong": "the man who he lives here",
            "right": "the man <b>who lives</b> here",
            "why": "who само подлежащее — «he» лишнее"
          },
          {
            "wrong": "the girl which she works with me",
            "right": "the girl <b>who works</b> with me",
            "why": "люди → who; и без «she»"
          },
          {
            "wrong": "the thing what I need",
            "right": "the thing <b>that / which</b> I need",
            "why": "не «what»: which/that"
          }
        ],
        "mnemonic": "🚫 Бирка = подлежащее. who lives — без второго «he». Дополнение можно опустить.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери предложение без лишнего местоимения.",
            "q": "Какой вариант верный?",
            "opts": [
              "The woman who she helped me",
              "The woman who helped me"
            ],
            "answer": 1,
            "explain": "who уже подлежащее — второе «she» лишнее."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> где бирку можно опустить (она — дополнение)?",
            "q": "В каком предложении бирку можно убрать?",
            "opts": [
              "the man who lives here",
              "the book that I bought"
            ],
            "answer": 1,
            "explain": "«that I bought» — бирка-дополнение, её можно опустить: the book I bought."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери без второго местоимения.",
            "q": "Собери: «люди, которые здесь работают»",
            "want": "the people who work here",
            "answer": "the people who work here"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. «которую он купил» — дополнение.",
            "q": "Машина, которую он купил, красная.",
            "accept": [
              "the car he bought is red",
              "the car that he bought is red",
              "the car which he bought is red"
            ],
            "placeholder": "the car ... is red"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Аня показывает Тому фото с вечеринки и объясняет, кто есть кто. Лови defining relative clauses в каждой реплике.",
      "lines": [
        {
          "who": "Anya",
          "name": "Аня",
          "side": "left",
          "en": "That's the friend who got me this job.",
          "ru": "Это подруга, которая устроила меня на эту работу.",
          "words": [
            [
              "got me this job",
              "устроила меня на работу"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "And the man whose tie is bright orange?",
          "ru": "А мужчина, чей галстук ярко-оранжевый?",
          "words": [
            [
              "tie",
              "галстук"
            ],
            [
              "bright",
              "яркий"
            ]
          ]
        },
        {
          "who": "Anya",
          "name": "Аня",
          "side": "left",
          "en": "That's my boss — the one who hates small talk.",
          "ru": "Это мой начальник — тот, который терпеть не может болтовню.",
          "words": [
            [
              "small talk",
              "светская болтовня"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Is this the café where you met him?",
          "ru": "Это то кафе, где ты с ним познакомилась?",
          "words": [
            [
              "met",
              "познакомилась"
            ]
          ]
        },
        {
          "who": "Anya",
          "name": "Аня",
          "side": "left",
          "en": "Yes! It's the place that changed everything.",
          "ru": "Да! Это место, которое всё изменило.",
          "words": [
            [
              "changed",
              "изменило"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова, которые часто живут внутри придаточных с «который». Повтори вслух.",
      "items": [
        {
          "en": "colleague",
          "ru": "коллега",
          "ex": "The colleague who sits next to me is kind."
        },
        {
          "en": "neighbour",
          "ru": "сосед",
          "ex": "My neighbour, whose dog barks, is nice."
        },
        {
          "en": "landlord",
          "ru": "хозяин квартиры, арендодатель",
          "ex": "The landlord who owns the flat called."
        },
        {
          "en": "relative",
          "ru": "родственник",
          "ex": "a relative whose name I forgot"
        },
        {
          "en": "whose",
          "ru": "чей / которого",
          "ex": "a man whose car I borrowed"
        },
        {
          "en": "the place where…",
          "ru": "место, где…",
          "ex": "the place where we met"
        },
        {
          "en": "in charge",
          "ru": "главный, ответственный",
          "ex": "the person who is in charge"
        },
        {
          "en": "get promoted",
          "ru": "получить повышение",
          "ex": "the woman who got promoted"
        },
        {
          "en": "owner",
          "ru": "владелец, хозяин",
          "ex": "the café whose owner I know"
        },
        {
          "en": "recommend",
          "ru": "рекомендовать",
          "ex": "a film which I recommend"
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай короткий текст. Мысленно подчёркивай каждое who / which / that / whose / where.",
      "title": "The people on my street",
      "sentences": [
        "I live in a small street where everyone knows everyone.",
        "The woman who lives at number 5 is a nurse.",
        "Next door there's a man whose garden is always perfect.",
        "The shop that sells the best coffee is on the corner.",
        "The boy who delivers our newspapers is only twelve.",
        "There's a café where the owner remembers your name.",
        "The friend who introduced me to this street still lives here.",
        "It's a place that feels like home."
      ],
      "translation": "Я живу на маленькой улице, где все друг друга знают. Женщина, которая живёт в доме номер 5, — медсестра. По соседству живёт мужчина, чей сад всегда идеален. Магазин, в котором продают лучший кофе, на углу. Мальчику, который разносит нам газеты, всего двенадцать. Есть кафе, где хозяин помнит твоё имя. Подруга, которая познакомила меня с этой улицей, до сих пор здесь живёт. Это место, которое ощущается как дом."
    },
    "drag": {
      "intro": "Соедини английскую «бирку» с её русским значением/случаем.",
      "pairs": [
        [
          "who",
          "для людей"
        ],
        [
          "which",
          "для вещей"
        ],
        [
          "whose",
          "чей / которого"
        ],
        [
          "where",
          "место — где"
        ],
        [
          "when",
          "время — когда"
        ]
      ]
    },
    "quiz": {
      "intro": "Проверь себя: шесть вопросов на defining relative clauses.",
      "items": [
        {
          "q": "«Человек, который мне помог» —",
          "opts": [
            "the man which helped me",
            "the man who helped me",
            "the man who he helped me"
          ],
          "answer": 1,
          "explain": "Человек → who, и без второго «he»."
        },
        {
          "q": "«Книга, которую я читаю» —",
          "opts": [
            "the book who I'm reading",
            "the book which I'm reading",
            "the book where I'm reading"
          ],
          "answer": 1,
          "explain": "Вещь → which (или that)."
        },
        {
          "q": "«Женщина, чья машина сломалась» —",
          "opts": [
            "the woman who's car broke down",
            "the woman whose car broke down",
            "the woman which car broke down"
          ],
          "answer": 1,
          "explain": "Принадлежность → whose."
        },
        {
          "q": "«Город, в котором я родился» —",
          "opts": [
            "the city which I was born",
            "the city where I was born",
            "the city when I was born"
          ],
          "answer": 1,
          "explain": "Место → where."
        },
        {
          "q": "В каком предложении бирку можно опустить?",
          "opts": [
            "the man who lives here",
            "the song that I love"
          ],
          "answer": 1,
          "explain": "«that I love» — дополнение, можно убрать: the song I love."
        },
        {
          "q": "В defining relative clause запятые…",
          "opts": [
            "обязательны",
            "не нужны"
          ],
          "answer": 1,
          "explain": "Defining несёт важную инфо → без запятых."
        }
      ]
    },
    "picture": {
      "intro": "Опиши людей и места на картинке, используя «который».",
      "emoji": "🏙️👩‍⚕️🧑‍🍳",
      "prompt": "Опиши 3–4 людей или места на картинке через who / which / where: «The woman who…», «the shop where…».",
      "hint": "Структуры: The man who… ; the place where… ; the woman whose…",
      "example": "This is the woman who runs the café. The shop which sells flowers is on the left. That's the street where I live. The man whose dog is barking lives upstairs.",
      "img": "img/b1/day-19.jpg",
      "credit": "Фото: Amsterdam free photos &amp; pictures of the Dutch city · CC0 · <a href=\"https://www.flickr.com/photos/104736837@N03/26099754801\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Короткое письмо: расскажи о людях, которые тебе важны.",
      "prompt": "Напиши 4–6 предложений о трёх людях, которые важны для тебя. Используй who, whose, where (без запятых — это defining).",
      "hint": "Структуры: My best friend is the one who… ; I have a colleague whose… ; This is the town where…",
      "example": "There are a few people who really matter to me. My best friend is the one who always tells me the truth. I also have a colleague whose calm attitude helps me at work. And the person who taught me the most is my old teacher. The town where I grew up still feels like home because of them."
    }
  },
  "20": {
    "day": 20,
    "week": "03",
    "level": "B1",
    "themeRu": "…, что важно",
    "themeEn": "Non-defining relative clauses",
    "intro": "«Который» <b>без</b> запятых ты клеил(а) вчера — defining, опознающая информация. Сегодня — его вежливый брат: <b>non-defining</b> относительные придаточные. Это <b>добавочная</b> информация, которую можно убрать, и предложение не сломается. Такую вставку с двух сторон обнимают <b>запятые</b>, как скобки: «Мой брат, <b>который живёт в Берлине</b>, программист». Уберёшь — «Мой брат программист», смысл цел. Здесь два сюрприза для русскоязычных: <b>that</b> нельзя — где был бы that, берём <b>who/which</b> (whose/where — как всегда), и есть особый <b>which</b>, который комментирует всё предложение целиком. Разберёмся.",
    "introAudio": "Который без запятых ты клеил вчера — defining, опознающая информация. Сегодня его вежливый брат: non-defining относительные придаточные. Это добавочная информация, которую можно убрать, и предложение не сломается. Такую вставку с двух сторон обнимают запятые, как скобки: Мой брат, который живёт в Берлине, программист. Уберёшь — Мой брат программист, смысл цел. Здесь два сюрприза: that нельзя, где был бы that, берём who или which, whose и where как всегда, и есть особый which, который комментирует всё предложение целиком.",
    "goals": [
      "отличать добавочную информацию (в запятых) от опознающей (без запятых)",
      "ставить запятые-«скобки» вокруг non-defining придаточного",
      "помнить: в non-defining that запрещён, вместо него who/which",
      "использовать which-комментарий ко всему предложению: …, which was great"
    ],
    "learned": [
      "Научился(лась) отличать добавочную информацию (в запятых) от опознающей (без запятых)",
      "Поставил(а) запятые-«скобки» вокруг non-defining придаточного",
      "Запомнил(а): в non-defining that запрещён, вместо него who/which",
      "Использовал(а) which-комментарий ко всему предложению: …, which was great"
    ],
    "review": {
      "intro": "Сначала закрепим вчерашнее: defining «который» БЕЗ запятых, плюс наши вечные предлоги.",
      "introAudio": "Сначала закрепим вчерашнее: defining который без запятых, плюс наши вечные предлоги.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни whose из вчерашнего дня.",
          "q": "«Сосед, чья собака лает» —",
          "opts": [
            "the neighbour who's dog barks",
            "the neighbour whose dog barks",
            "the neighbour which dog barks"
          ],
          "answer": 1,
          "explain": "Принадлежность → <b>whose</b> (не who's, не which)."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери defining (без запятых).",
          "q": "Собери: «город, в котором я живу»",
          "want": "the city where I live",
          "answer": "the city where I live"
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> предлог. depend ___ ?",
          "q": "It depends ___ the weather.",
          "opts": [
            "of",
            "on",
            "from"
          ],
          "answer": 1,
          "explain": "Устойчиво: depend <b>on</b>."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · добавочная информация",
        "title": "Запятые-скобки: <em>…, who…, …</em>",
        "paras": [
          "Non-defining придаточное даёт <b>не обязательную</b>, добавочную информацию: предмет уже известен, мы просто кое-что про него докидываем. «My sister, <b>who lives in Rome</b>, is a doctor» — сестра у меня одна, «who lives in Rome» лишь добавляет факт.",
          "Тест простой: если кусок можно <b>выбросить</b>, а предложение останется осмысленным и предмет понятным — это non-defining, и его обнимают <b>запятые</b> с двух сторон (или одна запятая, если придаточное в конце).",
          "Запятые работают как скобки: «Tom (he's my boss) called» → «Tom, <b>who is my boss</b>, called». Открыл скобку — закрой."
        ],
        "audio": "Non-defining придаточное даёт добавочную, не обязательную информацию: предмет уже известен, мы просто докидываем факт. My sister, who lives in Rome, is a doctor — сестра одна, who lives in Rome лишь добавляет деталь. Тест: если кусок можно выбросить, а предложение остаётся понятным — это non-defining, и его обнимают запятые с двух сторон.",
        "table": {
          "rows": [
            [
              "defining",
              "опознаёт · без запятых · who/which/that"
            ],
            [
              "non-defining",
              "добавляет · в запятых · who/which"
            ],
            [
              "тест",
              "можно убрать? → нужны запятые"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Моя сестра, которая живёт в Риме, — врач.",
            "en": "My sister, <b>who lives in Rome</b>, is a doctor.",
            "gloss": "добавочно → запятые",
            "say": "My sister, who lives in Rome, is a doctor."
          },
          {
            "ru": "Этот ноутбук, который я купил в прошлом году, всё ещё быстрый.",
            "en": "This laptop, <b>which I bought last year</b>, is still fast.",
            "gloss": "which + запятые",
            "say": "This laptop, which I bought last year, is still fast."
          },
          {
            "ru": "Мой начальник, который ненавидит опоздания, был в ярости.",
            "en": "My boss, <b>who hates lateness</b>, was furious.",
            "gloss": "имя/единственный → запятые",
            "say": "My boss, who hates lateness, was furious."
          }
        ],
        "mistakes": [
          {
            "wrong": "My sister who lives in Rome is a doctor (если сестра одна)",
            "right": "My sister<b>,</b> who lives in Rome<b>,</b> is a doctor",
            "why": "добавочная инфо → нужны запятые"
          },
          {
            "wrong": "Tom, who is my boss called me",
            "right": "Tom, who is my boss<b>,</b> called me",
            "why": "закрой вторую скобку-запятую"
          }
        ],
        "mnemonic": "() Запятые — это скобки. Открыл — закрой. Можно убрать → запятые.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> где информация добавочная (в запятых)?",
            "q": "В каком предложении нужна добавочная инфо в запятых?",
            "opts": [
              "The students who failed must retake the exam",
              "Mr Lee, who teaches maths, is retiring"
            ],
            "answer": 1,
            "explain": "Mr Lee уже опознан именем → факт добавочный → запятые."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери бирку для вещи в запятых.",
            "q": "My car, ___ is ten years old, still runs well.",
            "opts": [
              "that",
              "which",
              "who"
            ],
            "answer": 1,
            "explain": "Вещь + non-defining → <b>which</b> (не that)."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух, чувствуя паузы-запятые.",
            "target": "My sister, who lives in Rome, is a doctor.",
            "sub": "Моя сестра, которая живёт в Риме, — врач.",
            "want": "who"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · вместо that — who / which",
        "title": "В non-defining <em>that</em> запрещён — и бирку не выбросить",
        "paras": [
          "Главный сюрприз: в добавочных придаточных <b>that не используется</b>. Вместо that в non-defining ставим <b>who</b> (люди) / <b>which</b> (вещи); whose и where работают как обычно — они и так не that. «My phone, <b>which</b> cost a fortune, broke» — нельзя «my phone, that cost…».",
          "И второе: бирку здесь <b>нельзя опустить</b>. В defining «the film I saw» — ок; в non-defining «This film, <b>which</b> I saw yesterday, …» — which обязателен.",
          "Запомни контраст: defining любит <b>that</b> и разрешает опускать бирку; non-defining требует <b>who/which</b> в запятых и ничего не опускает."
        ],
        "audio": "Главный сюрприз: в добавочных придаточных that не используется. Вместо that в non-defining ставим who для людей и which для вещей; whose и where работают как обычно, они и так не that. My phone, which cost a fortune, broke — нельзя that. И бирку здесь нельзя опустить: which обязателен. Defining любит that и разрешает опускать бирку; non-defining требует who или which в запятых.",
        "table": {
          "rows": [
            [
              "non-defining",
              "who / which вместо that"
            ],
            [
              "бирку опустить?",
              "нельзя (в defining — можно)"
            ],
            [
              "My dad, who…, …",
              "✓ who · ✗ that"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Мой телефон, который стоил кучу денег, сломался.",
            "en": "My phone, <b>which</b> cost a fortune, broke.",
            "gloss": "which, не that",
            "say": "My phone, which cost a fortune, broke."
          },
          {
            "ru": "Анна, которая сидит рядом со мной, — из Праги.",
            "en": "Anna, <b>who</b> sits next to me, is from Prague.",
            "gloss": "who, и не опустить",
            "say": "Anna, who sits next to me, is from Prague."
          },
          {
            "ru": "Этот отчёт, который занял неделю, наконец готов.",
            "en": "This report, <b>which</b> took a week, is finally done.",
            "gloss": "which",
            "say": "This report, which took a week, is finally done."
          }
        ],
        "mistakes": [
          {
            "wrong": "My phone, that cost a fortune, broke",
            "right": "My phone, <b>which</b> cost a fortune, broke",
            "why": "в non-defining that запрещён → which"
          },
          {
            "wrong": "Anna, sits next to me, is from Prague",
            "right": "Anna, <b>who</b> sits next to me, is from Prague",
            "why": "бирку нельзя опустить → who"
          }
        ],
        "mnemonic": "🚫 «, that» не бывает. Вместо that — who / which.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери бирку (вещь, в запятых).",
            "q": "My laptop, ___ I bought online, is great.",
            "opts": [
              "that",
              "which",
              "— (ничего)"
            ],
            "answer": 1,
            "explain": "non-defining + вещь → <b>which</b>, и опустить нельзя."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди НЕВЕРНОЕ предложение.",
            "q": "Какое предложение НЕправильное?",
            "opts": [
              "My boss, who is kind, helped me",
              "My boss, that is kind, helped me"
            ],
            "answer": 1,
            "explain": "В non-defining that запрещён → нужно who."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод с which.",
            "q": "Эта книга, которую все хвалят, скучная.",
            "accept": [
              "this book, which everyone praises, is boring",
              "this book which everyone praises is boring"
            ],
            "placeholder": "This book, which ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · which про всё предложение",
        "title": "<em>…, which</em> — комментарий ко всей мысли",
        "paras": [
          "Особый приём: <b>which</b> может относиться не к одному слову, а ко <b>всему предложению</b> целиком — как русское «<b>что</b>» в «он опоздал, <b>что</b> всех разозлило». «He was late, <b>which</b> annoyed everyone.»",
          "Перед таким which <b>всегда</b> стоит запятая, и заменить его на that или what <b>нельзя</b>: «…, <b>which</b> was great», не «…, what was great».",
          "Это очень «по-английски» — добавить оценку в конце: «I passed, <b>which</b> surprised me», «She paid, <b>which</b> was kind»."
        ],
        "audio": "Особый приём: which может относиться не к одному слову, а ко всему предложению, как русское что в он опоздал, что всех разозлило. He was late, which annoyed everyone. Перед таким which всегда запятая, и заменить его на that или what нельзя. I passed, which surprised me. She paid, which was kind.",
        "table": {
          "rows": [
            [
              "He was late, which…",
              "which = «что» про всю мысль"
            ],
            [
              "перед which",
              "всегда запятая"
            ],
            [
              "не that, не what",
              "только which"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он опоздал, что всех разозлило.",
            "en": "He was late, <b>which</b> annoyed everyone.",
            "gloss": "which = «что»",
            "say": "He was late, which annoyed everyone."
          },
          {
            "ru": "Она мне помогла, что было очень мило.",
            "en": "She helped me, <b>which</b> was very kind.",
            "gloss": "оценка в конце",
            "say": "She helped me, which was very kind."
          },
          {
            "ru": "Я сдал экзамен, чего никто не ожидал.",
            "en": "I passed the exam, <b>which</b> nobody expected.",
            "gloss": "which про всю мысль",
            "say": "I passed the exam, which nobody expected."
          }
        ],
        "mistakes": [
          {
            "wrong": "He was late, what annoyed everyone",
            "right": "He was late, <b>which</b> annoyed everyone",
            "why": "комментарий ко всей мысли → which, не what"
          },
          {
            "wrong": "She helped me that was kind",
            "right": "She helped me<b>,</b> which was kind",
            "why": "нужна запятая + which"
          }
        ],
        "mnemonic": "💬 «…, что» про всю мысль → …, which. Не what, не that.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери бирку-комментарий ко всей мысли.",
            "q": "It started raining, ___ ruined the picnic.",
            "opts": [
              "what",
              "which",
              "that"
            ],
            "answer": 1,
            "explain": "Комментарий ко всему предложению → <b>which</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение с which-комментарием.",
            "q": "Собери: «Она опоздала, что меня разозлило»",
            "want": "She was late which annoyed me",
            "answer": "She was late which annoyed me"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод с which.",
            "q": "Он мне не позвонил, что меня удивило.",
            "accept": [
              "he didn't call me, which surprised me",
              "he didn't call me which surprised me",
              "he did not call me, which surprised me",
              "he did not call me which surprised me",
              "he didn't ring me, which surprised me",
              "he didn't ring me which surprised me",
              "he didn't phone me, which surprised me",
              "he didn't phone me which surprised me"
            ],
            "placeholder": "He didn't call me, which ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "Запятая меняет смысл — а в русском они везде",
        "paras": [
          "В русском «который» <b>всегда</b> в запятых — поэтому рука сама ставит их и в английском. Но в английском запятая <b>меняет смысл</b>. Сравни: «My brother <b>who lives in Berlin</b> is a coder» (без запятых = у меня несколько братьев, речь про берлинского) и «My brother, <b>who lives in Berlin</b>, is a coder» (в запятых = брат один, факт добавочный).",
          "Правило-переключатель: <b>опознаёт</b> (без него непонятно, о ком речь) → <b>без запятых</b>, можно that. <b>Добавляет</b> (и так понятно) → <b>в запятых</b>, who/which вместо that.",
          "Имена собственные и единственные в своём роде вещи почти всегда non-defining: «London, which is huge, …», «My mother, who is 60, …» — они уже опознаны, поэтому запятые."
        ],
        "audio": "В русском который всегда в запятых, поэтому рука сама ставит их и в английском. Но в английском запятая меняет смысл. My brother who lives in Berlin is a coder — без запятых, значит братьев несколько. My brother, who lives in Berlin, is a coder — в запятых, брат один. Опознаёт — без запятых, можно that. Добавляет — в запятых, who или which вместо that. Имена и единственные вещи почти всегда в запятых.",
        "table": {
          "rows": [
            [
              "My brother who… (без зпт)",
              "братьев несколько — опознаём"
            ],
            [
              "My brother, who…, (зпт)",
              "брат один — добавляем"
            ],
            [
              "London, which…",
              "имена → всегда в запятых"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Студенты, которые не сдали, пересдают. (только те, кто не сдал)",
            "en": "The students <b>who failed</b> must resit.",
            "gloss": "defining — без запятых",
            "say": "The students who failed must resit."
          },
          {
            "ru": "Мои студенты, которые все молодцы, сдали. (все они)",
            "en": "My students, <b>who all did well</b>, passed.",
            "gloss": "non-defining — запятые",
            "say": "My students, who all did well, passed."
          },
          {
            "ru": "Москва, в которой я вырос, огромна.",
            "en": "Moscow, <b>where I grew up</b>, is huge.",
            "gloss": "имя → запятые",
            "say": "Moscow, where I grew up, is huge."
          }
        ],
        "mistakes": [
          {
            "wrong": "London, that is the capital, is big",
            "right": "London, <b>which</b> is the capital, is big",
            "why": "имя → non-defining → which (не that), в запятых"
          },
          {
            "wrong": "The man, who stole my bag, ran (если нужно опознать вора)",
            "right": "The man <b>who stole my bag</b> ran",
            "why": "опознаёт → defining → без запятых"
          }
        ],
        "mnemonic": "🔀 Опознаёт → без запятых (+that). Добавляет → в запятых (who/which вместо that).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> отец один → нужны запятые.",
            "q": "«Мой отец, которому 70, всё ещё работает» (отец один) —",
            "opts": [
              "My father who is 70 still works",
              "My father, who is 70, still works"
            ],
            "answer": 1,
            "explain": "Отец один → добавочная инфо → запятые."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> имя города + non-defining.",
            "q": "Paris, ___ is in France, is romantic.",
            "opts": [
              "that",
              "which",
              "where"
            ],
            "answer": 1,
            "explain": "Имя → non-defining → <b>which</b> (не that)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери defining (без запятых).",
            "q": "Собери: «люди, которые жаловались, ушли»",
            "want": "the people who complained left",
            "answer": "the people who complained left"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод в запятых (мама одна).",
            "q": "Моя мама, которой 60, обожает танцевать.",
            "accept": [
              "my mum, who is 60, loves dancing",
              "my mom, who is 60, loves dancing",
              "my mother, who is 60, loves dancing",
              "my mum, who is 60, loves to dance",
              "my mom, who is 60, loves to dance",
              "my mother, who is 60, loves to dance"
            ],
            "placeholder": "My mum, who is 60, ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня знакомит Тома со своей семьёй на фото — много добавочной информации в запятых.",
      "lines": [
        {
          "who": "A",
          "en": "This is my mum, who taught me to cook.",
          "ru": "Это моя мама, которая научила меня готовить."
        },
        {
          "who": "B",
          "en": "And the house, which looks huge, is yours?",
          "ru": "А дом, который выглядит огромным, твой?"
        },
        {
          "who": "A",
          "en": "Yes — the garden, which my dad loves, is his hobby.",
          "ru": "Да — сад, который обожает мой папа, его хобби."
        },
        {
          "who": "B",
          "en": "Your dog ran into the lake, which is hilarious.",
          "ru": "Твоя собака забежала в озеро, что просто умора."
        },
        {
          "who": "A",
          "en": "That photo, which I almost deleted, is my favourite.",
          "ru": "Это фото, которое я чуть не удалила, моё любимое."
        }
      ]
    },
    "vocab": {
      "intro": "Слова и связки, которые часто живут в добавочных придаточных. Повтори вслух.",
      "items": [
        {
          "en": "furious",
          "ru": "в ярости",
          "ex": "My boss, who hates lateness, was furious."
        },
        {
          "en": "cost a fortune",
          "ru": "стоить целое состояние",
          "ex": "My phone, which cost a fortune, broke."
        },
        {
          "en": "retire",
          "ru": "уйти на пенсию",
          "ex": "Mr Lee, who is 65, is retiring."
        },
        {
          "en": "praise",
          "ru": "хвалить",
          "ex": "the book, which everyone praises"
        },
        {
          "en": "annoy",
          "ru": "раздражать, злить",
          "ex": "He was late, which annoyed me."
        },
        {
          "en": "surprise",
          "ru": "удивлять",
          "ex": "I passed, which surprised everyone."
        },
        {
          "en": "capital",
          "ru": "столица",
          "ex": "Paris, which is the capital, is busy."
        },
        {
          "en": "abroad",
          "ru": "за границей",
          "ex": "My brother, who lives abroad, called."
        },
        {
          "en": "hilarious",
          "ru": "уморительный, очень смешной",
          "ex": "the video, which is hilarious"
        },
        {
          "en": "delete",
          "ru": "удалять",
          "ex": "the photo, which I almost deleted"
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай. Обрати внимание на запятые: каждое придаточное здесь — добавочное.",
      "title": "My noisy family",
      "sentences": [
        "My family, who all talk at once, are wonderful but loud.",
        "My dad, who retired last year, now grows tomatoes.",
        "My mum, whose cooking is famous, feeds the whole street.",
        "Our dog, which is afraid of cats, hides under the table.",
        "My brother moved to Canada, which broke my mum's heart.",
        "He calls every Sunday, which makes her happy again.",
        "Our house, where I grew up, is always full of people.",
        "Our noisy house, which I only appreciated later, is real wealth."
      ],
      "translation": "Моя семья, которая говорит вся разом, чудесная, но шумная. Мой папа, который вышел на пенсию в прошлом году, теперь выращивает помидоры. Моя мама, чья готовка знаменита, кормит всю улицу. Наша собака, которая боится кошек, прячется под столом. Мой брат переехал в Канаду, что разбило маме сердце. Он звонит каждое воскресенье, что снова делает её счастливой. Наш дом, в котором я вырос, всегда полон людей. Наш шумный дом, который я оценил лишь позже, и есть настоящее богатство."
    },
    "drag": {
      "intro": "Соедини половинки. Все придаточные — добавочные (в запятых).",
      "pairs": [
        [
          "My dad, who retired,",
          "now grows tomatoes"
        ],
        [
          "This phone, which cost a lot,",
          "broke yesterday"
        ],
        [
          "He was late,",
          "which annoyed us"
        ],
        [
          "Anna, whose car broke down,",
          "took the bus"
        ],
        [
          "London, where I live,",
          "is expensive"
        ]
      ]
    },
    "quiz": {
      "intro": "Шесть вопросов на non-defining. Помни про запятые и про запрет на that.",
      "items": [
        {
          "q": "В non-defining можно использовать…",
          "opts": [
            "that",
            "who / which",
            "what"
          ],
          "answer": 1,
          "explain": "Только who/which; that здесь запрещён."
        },
        {
          "q": "«Мой телефон, который стоил кучу денег, сломался» —",
          "opts": [
            "My phone that cost a fortune broke",
            "My phone, which cost a fortune, broke",
            "My phone which cost a fortune broke"
          ],
          "answer": 1,
          "explain": "Добавочно → which в запятых."
        },
        {
          "q": "«Он опоздал, что всех разозлило» —",
          "opts": [
            "He was late, what annoyed everyone",
            "He was late, which annoyed everyone",
            "He was late that annoyed everyone"
          ],
          "answer": 1,
          "explain": "Комментарий ко всей мысли → which."
        },
        {
          "q": "Запятые в относительном придаточном значат, что информация…",
          "opts": [
            "опознаёт (без неё непонятно)",
            "добавочная (можно убрать)"
          ],
          "answer": 1,
          "explain": "Запятые = non-defining = можно убрать."
        },
        {
          "q": "Верное предложение про единственную сестру:",
          "opts": [
            "My sister who lives in Rome is a doctor",
            "My sister, who lives in Rome, is a doctor"
          ],
          "answer": 1,
          "explain": "Сестра одна → добавочно → запятые."
        },
        {
          "q": "Перед which-комментарием ко всей мысли стоит…",
          "opts": [
            "ничего",
            "запятая"
          ],
          "answer": 1,
          "explain": "Перед таким which всегда запятая."
        }
      ]
    },
    "picture": {
      "intro": "Опиши картинку, добавляя факты в запятых.",
      "emoji": "👨‍👩‍👧‍👦🏡🐕",
      "prompt": "Опиши семью или дом на картинке, добавляя по факту в запятых: «My dad, who…, …». Минимум 3 предложения.",
      "hint": "Структуры: …, who …, … ; …, which …, … ; …, which made me happy.",
      "example": "This is my family, who I love a lot. The house, which is over 100 years old, belongs to my grandparents. Our dog, which never stops barking, is in the garden. We took this photo last summer, which was the best holiday ever.",
      "img": "img/b1/day-20.jpg",
      "credit": "Фото: danor shtruzman · Public Domain · <a href=\"https://www.flickr.com/photos/7706627@N07/35211435431\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Расскажи о человеке и месте, добавляя детали в запятых.",
      "prompt": "Напиши 4–6 предложений об одном человеке и одном месте, которые тебе дороги. Используй non-defining (в запятых) с who/which/where.",
      "hint": "Структуры: My …, who …, is … ; …, which …, … ; …, which made me …",
      "example": "My grandmother, who is almost ninety, still tells the best stories. She lives in a small village, where I spent every summer as a child. The house, which has a huge old garden, always smells of fresh bread. Last year she taught me her recipe, which I will never forget."
    }
  },
  "21": {
    "day": 21,
    "week": "03",
    "level": "B1",
    "themeRu": "Повторение №3",
    "themeEn": "Review 3",
    "intro": "Третья неделя закрыта — а была она серьёзная. Ты научился(ась) пересказывать чужие слова (<b>reported speech</b>), строить логические догадки (<b>must / might / can't be</b>) и аккуратно клеить «который» — с запятыми и без. Сегодня день сборки: меньше новых правил, больше «достань из памяти и примени». Пройдём всё ещё раз короткими подходами, поймаем главные русские ловушки недели и закроем её мини-тестом. Начинаем повторение.",
    "introAudio": "Третья неделя закрыта — а была она серьёзная. Ты научился пересказывать чужие слова, reported speech, строить логические догадки must, might, can't be, и аккуратно клеить который — с запятыми и без. Сегодня день сборки: меньше новых правил, больше доставай из памяти и применяй. Пройдём всё ещё раз короткими подходами, поймаем главные русские ловушки недели и закроем её мини-тестом. Начинаем повторение.",
    "goals": [
      "пересказывать чужие слова со сдвигом времён: «He said he was tired»",
      "строить reported questions с прямым порядком слов и if/whether",
      "выражать догадку через must / might / can't be",
      "уверенно ставить who / which / whose / where и решать, нужны ли запятые"
    ],
    "learned": [
      "Пересказал(а) чужие слова со сдвигом времён: «He said he was tired»",
      "Построил(а) reported questions с прямым порядком слов и if/whether",
      "Выразил(а) догадку через must / might / can't be",
      "Уверенно поставил(а) who / which / whose / where и решил(а), нужны ли запятые"
    ],
    "review": {
      "intro": "Большая разминка по всей неделе 3. Не подглядывай — доставай из памяти. Это сегодня — главная часть дня.",
      "introAudio": "Большая разминка по всей неделе 3. Не подглядывай — доставай из памяти. Это сегодня главная часть дня.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> чужая речь — не забудь сдвиг времён.",
          "q": "«Он сказал, что устал» →",
          "opts": [
            "He said he is tired",
            "He said he was tired",
            "He said he tired"
          ],
          "answer": 1,
          "explain": "Сдвиг времён: is → <b>was</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> косвенный вопрос — прямой порядок, без do/did.",
          "q": "«Он спросил, где я живу» →",
          "opts": [
            "He asked where do I live",
            "He asked where I lived",
            "He asked where did I live"
          ],
          "answer": 1,
          "explain": "Прямой порядок + сдвиг: where <b>I lived</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> уверенная догадка по фактам.",
          "q": "«Свет горит — он наверняка дома» →",
          "opts": [
            "He can be home",
            "He must be home",
            "He should be home"
          ],
          "answer": 1,
          "explain": "Наверняка → <b>must be</b> (не can, не should)."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вечный предлог (always-on).",
          "q": "It depends ___ you.",
          "opts": [
            "of",
            "on",
            "from"
          ],
          "answer": 1,
          "explain": "depend <b>on</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери defining «который» без второго местоимения.",
          "q": "Собери: «человек, который мне звонил»",
          "want": "the man who called me",
          "answer": "the man who called me"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Повторение 1 · чужая речь",
        "title": "«Он сказал, что…»: сдвиг времён + <em>say/tell</em>",
        "paras": [
          "Когда пересказываешь чужие слова, время делает <b>шаг назад</b>: present → past, past → past perfect. «I am tired» → He said he <b>was</b> tired. «I saw it» → He said he <b>had seen</b> it. В русском время не сдвигается — это и есть ловушка.",
          "<b>say</b> — без адресата (say that…), <b>tell</b> — с адресатом (tell <b>me</b> that…). «He <b>told me</b> he was late», но «He <b>said</b> he was late»."
        ],
        "audio": "Когда пересказываешь чужие слова, время делает шаг назад: present в past, past в past perfect. I am tired — He said he was tired. say без адресата, tell с адресатом: He told me he was late, но He said he was late.",
        "table": {
          "rows": [
            [
              "am/is/are → was/were",
              "present → past"
            ],
            [
              "did / have done → had done",
              "past → past perfect"
            ],
            [
              "say (что) · tell (кому)",
              "He told me…"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он сказал, что занят.",
            "en": "He said he <b>was</b> busy.",
            "gloss": "is → was",
            "say": "He said he was busy."
          },
          {
            "ru": "Она сказала мне, что потеряла ключи.",
            "en": "She <b>told me</b> she <b>had lost</b> her keys.",
            "gloss": "tell + me; lost → had lost",
            "say": "She told me she had lost her keys."
          }
        ],
        "mistakes": [
          {
            "wrong": "He said he is tired",
            "right": "He said he <b>was</b> tired",
            "why": "сдвиг времён: is → was"
          },
          {
            "wrong": "He said me that he was late",
            "right": "He <b>told</b> me… / He <b>said</b> that…",
            "why": "tell + кому; say без адресата"
          }
        ],
        "mnemonic": "🗣️ Шаг назад во времени. say (что) · tell (кому).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сделай сдвиг времён.",
            "q": "«Она сказала, что любит музыку» →",
            "opts": [
              "She said she loves music",
              "She said she loved music",
              "She said me she loves music"
            ],
            "answer": 1,
            "explain": "loves → <b>loved</b> (сдвиг)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> say или tell?",
            "q": "He ___ me he was leaving.",
            "opts": [
              "said",
              "told",
              "says"
            ],
            "answer": 1,
            "explain": "Есть адресат (me) → <b>told</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пересказ (past → past perfect).",
            "q": "Он сказал, что видел этот фильм.",
            "accept": [
              "he said he had seen the film",
              "he said he had seen this film",
              "he said he had seen the movie",
              "he said he had seen this movie"
            ],
            "placeholder": "He said he had ..."
          }
        ]
      },
      {
        "eyebrow": "Повторение 2 · косвенный вопрос",
        "title": "«Он спросил, где…»: прямой порядок + <em>if/whether</em>",
        "paras": [
          "В косвенном вопросе порядок слов как в <b>утверждении</b>, без do/did: «Where <b>do you live</b>?» → He asked where <b>I lived</b>. Вспомогательный did исчезает, время сдвигается.",
          "Если вопрос без вопросительного слова (yes/no), добавляем <b>if</b> или <b>whether</b>: «Are you ready?» → She asked <b>if I was</b> ready."
        ],
        "audio": "В косвенном вопросе порядок слов как в утверждении, без do и did. Where do you live — He asked where I lived. Если вопрос без вопросительного слова, добавляем if или whether: Are you ready — She asked if I was ready.",
        "table": {
          "rows": [
            [
              "Where do you live? →",
              "…where I lived (без do)"
            ],
            [
              "Are you ok? →",
              "…if I was ok"
            ],
            [
              "прямой порядок",
              "подлежащее перед глаголом"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он спросил, что я делаю.",
            "en": "He asked what I <b>was doing</b>.",
            "gloss": "прямой порядок",
            "say": "He asked what I was doing."
          },
          {
            "ru": "Она спросила, есть ли у меня время.",
            "en": "She asked <b>if</b> I <b>had</b> time.",
            "gloss": "if + прямой порядок",
            "say": "She asked if I had time."
          }
        ],
        "mistakes": [
          {
            "wrong": "He asked where do I live",
            "right": "He asked where <b>I lived</b>",
            "why": "прямой порядок, без do; live → lived"
          },
          {
            "wrong": "She asked am I ready",
            "right": "She asked <b>if I was</b> ready",
            "why": "yes/no-вопрос → if/whether + прямой порядок"
          }
        ],
        "mnemonic": "❓ Косвенный вопрос = порядок утверждения. yes/no → if/whether.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> прямой порядок, без did.",
            "q": "«Он спросил, во сколько начинается фильм» →",
            "opts": [
              "He asked what time does the film start",
              "He asked what time the film started",
              "He asked what time did the film start"
            ],
            "answer": 1,
            "explain": "Без do/did, со сдвигом: the film <b>started</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> yes/no-вопрос → if.",
            "q": "«Она спросила, говорю ли я по-французски» →",
            "opts": [
              "She asked do I speak French",
              "She asked if I spoke French",
              "She asked I speak French"
            ],
            "answer": 1,
            "explain": "yes/no → <b>if</b> + прямой порядок + сдвиг."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери косвенный вопрос.",
            "q": "Собери: «Он спросил, где я живу»",
            "want": "He asked where I lived",
            "answer": "He asked where I lived"
          }
        ]
      },
      {
        "eyebrow": "Повторение 3 · догадки",
        "title": "<em>must / might / can't</em> be — логический вывод",
        "paras": [
          "Для уверенной догадки бери <b>must</b> = «наверняка»: «The lights are on — he <b>must be</b> home». Здесь must — не «должен», а «по логике, точно».",
          "Сомневаешься — <b>might/could</b> («возможно»): «She <b>might be</b> asleep». Уверен, что НЕТ, — <b>can't</b> («не может быть»): «That <b>can't be</b> true». Запомни: отрицание догадки — <b>can't</b>, не «mustn't»."
        ],
        "audio": "Для уверенной догадки бери must, наверняка: The lights are on — he must be home. must здесь не должен, а по логике точно. Сомневаешься — might или could, возможно. Уверен, что нет — can't, не может быть: That can't be true. Отрицание догадки это can't, не mustn't.",
        "table": {
          "rows": [
            [
              "must be",
              "наверняка (логично)"
            ],
            [
              "might / could be",
              "возможно"
            ],
            [
              "can't be",
              "точно нет"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он не отвечает — наверняка спит.",
            "en": "He's not answering — he <b>must be</b> asleep.",
            "gloss": "must = наверняка",
            "say": "He's not answering — he must be asleep."
          },
          {
            "ru": "Это не может быть правдой.",
            "en": "That <b>can't be</b> true.",
            "gloss": "can't = точно нет",
            "say": "That can't be true."
          }
        ],
        "mistakes": [
          {
            "wrong": "He can be home (= наверняка)",
            "right": "He <b>must be</b> home",
            "why": "уверенная догадка → must, не can"
          },
          {
            "wrong": "That mustn't be true",
            "right": "That <b>can't be</b> true",
            "why": "«не может быть» → can't be"
          }
        ],
        "mnemonic": "🔎 must = наверняка · might = возможно · can't = точно нет.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> по фактам — уверенная догадка.",
            "q": "«Чемоданы у двери — он точно уезжает» →",
            "opts": [
              "He might be leaving",
              "He must be leaving",
              "He can't be leaving"
            ],
            "answer": 1,
            "explain": "Факты явные → <b>must be</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> уверен, что НЕТ.",
            "q": "«Это не может быть Том, он в Париже» →",
            "opts": [
              "It mustn't be Tom",
              "It can't be Tom",
              "It might not be Tom"
            ],
            "answer": 1,
            "explain": "«не может быть» → <b>can't be</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши уверенную догадку.",
            "q": "Она наверняка устала.",
            "accept": [
              "she must be tired"
            ],
            "placeholder": "She must ..."
          }
        ]
      },
      {
        "eyebrow": "Повторение 4 · который",
        "title": "<em>who / which / whose / where</em> и вопрос запятых",
        "paras": [
          "Один русский «который» → who (люди), which (вещи), that (оба, только в defining), whose (чей), where (место). Бирка сама — подлежащее: «the man <b>who lives</b> here», без второго «he».",
          "Запятые — это смысл. <b>Опознаёт</b> (без неё непонятно, кто) → без запятых, можно that. <b>Добавляет</b> (и так ясно) → в запятых, только who/which, и that нельзя."
        ],
        "audio": "Один русский который — who для людей, which для вещей, that для обоих только в defining, whose это чей, where это место. Бирка сама подлежащее: the man who lives here, без второго he. Запятые это смысл: опознаёт — без запятых, можно that; добавляет — в запятых, только who или which, и that нельзя.",
        "table": {
          "rows": [
            [
              "who / which / that",
              "люди / вещи / оба (defining)"
            ],
            [
              "whose / where",
              "чей / место"
            ],
            [
              "запятые",
              "добавочно → who/which, без that"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Девушка, которая мне звонила, — врач.",
            "en": "The woman <b>who</b> called me is a doctor.",
            "gloss": "defining, без запятых",
            "say": "The woman who called me is a doctor."
          },
          {
            "ru": "Мой брат, который живёт в Берлине, программист.",
            "en": "My brother, <b>who</b> lives in Berlin, is a coder.",
            "gloss": "non-defining, в запятых",
            "say": "My brother, who lives in Berlin, is a coder."
          }
        ],
        "mistakes": [
          {
            "wrong": "the man who he lives here",
            "right": "the man <b>who lives</b> here",
            "why": "who = подлежащее, без «he»"
          },
          {
            "wrong": "My dad, that is 70, still works",
            "right": "My dad, <b>who</b> is 70, still works",
            "why": "non-defining → who, не that"
          }
        ],
        "mnemonic": "🏷️ Опознаёт → без запятых (+that). Добавляет → в запятых (who/which).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> вещь → which/that.",
            "q": "«Книга, которую я читаю» —",
            "opts": [
              "the book who I'm reading",
              "the book that I'm reading",
              "the book where I'm reading"
            ],
            "answer": 1,
            "explain": "Вещь → that (или which)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> добавочная инфо → запятые + which.",
            "q": "«Мой телефон, который стоил дорого, сломался» —",
            "opts": [
              "My phone that cost a lot broke",
              "My phone, which cost a lot, broke"
            ],
            "answer": 1,
            "explain": "Добавочно → which в запятых."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери придаточное с where.",
            "q": "Собери: «город, в котором я родился»",
            "want": "the city where I was born",
            "answer": "the city where I was born"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Том пересказывает Ане офисные новости — тут вся неделя 3: чужая речь, догадки и «который». Лови формы.",
      "lines": [
        {
          "who": "Tom",
          "name": "Том",
          "side": "left",
          "en": "Sara told me she had got the promotion.",
          "ru": "Сара сказала мне, что получила повышение.",
          "words": [
            [
              "promotion",
              "повышение"
            ]
          ]
        },
        {
          "who": "Anya",
          "name": "Аня",
          "side": "right",
          "en": "The manager who interviewed her must be impressed.",
          "ru": "Менеджер, который её собеседовал, наверняка впечатлён.",
          "words": [
            [
              "impressed",
              "впечатлён"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "left",
          "en": "She asked if I wanted to celebrate tonight.",
          "ru": "Она спросила, хочу ли я отметить сегодня вечером.",
          "words": [
            [
              "celebrate",
              "отметить"
            ]
          ]
        },
        {
          "who": "Anya",
          "name": "Аня",
          "side": "right",
          "en": "Tonight? That can't be right — she's in Berlin.",
          "ru": "Сегодня? Не может быть — она же в Берлине.",
          "words": [
            [
              "right",
              "верно"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "left",
          "en": "The Berlin trip, which she cancelled, is off.",
          "ru": "Поездка в Берлин, которую она отменила, не состоится.",
          "words": [
            [
              "cancelled",
              "отменила"
            ],
            [
              "off",
              "отменён"
            ]
          ]
        },
        {
          "who": "Anya",
          "name": "Аня",
          "side": "right",
          "en": "Then she might be free. Tell her we're in!",
          "ru": "Тогда она, возможно, свободна. Скажи ей, что мы в деле!",
          "words": [
            [
              "free",
              "свободна"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Ключевые слова и связки недели 3. Повтори вслух.",
      "items": [
        {
          "en": "said (that)",
          "ru": "сказал, что (без адресата)",
          "ex": "He said he was tired."
        },
        {
          "en": "told (someone)",
          "ru": "сказал (кому-то)",
          "ex": "She told me the news."
        },
        {
          "en": "asked if",
          "ru": "спросил, ли",
          "ex": "He asked if I was ready."
        },
        {
          "en": "must be",
          "ru": "наверняка (догадка)",
          "ex": "She must be at work."
        },
        {
          "en": "might be",
          "ru": "возможно",
          "ex": "He might be late."
        },
        {
          "en": "can't be",
          "ru": "не может быть",
          "ex": "That can't be true."
        },
        {
          "en": "whose",
          "ru": "чей / которого",
          "ex": "the man whose car broke down"
        },
        {
          "en": "where",
          "ru": "где / в котором",
          "ex": "the town where I live"
        },
        {
          "en": "suggest",
          "ru": "предлагать",
          "ex": "She suggested going out."
        },
        {
          "en": "deny",
          "ru": "отрицать",
          "ex": "He denied taking it."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай. Здесь собрана вся неделя: чужая речь, догадки и относительные придаточные.",
      "title": "Office news",
      "sentences": [
        "Maria told me she had quit her job.",
        "I asked her why she had decided so suddenly.",
        "She said the boss, who never listened, had upset her.",
        "Her colleague, whose desk was next to hers, agreed.",
        "Everyone thinks she must have a new offer.",
        "It can't be easy to leave a place where you've worked for years.",
        "She asked if I would keep it a secret.",
        "I said I would, which made her smile."
      ],
      "translation": "Мария сказала мне, что уволилась. Я спросил, почему она решила так внезапно. Она сказала, что начальник, который никогда не слушал, её довёл. Её коллега, чей стол был рядом с её столом, согласилась. Все думают, что у неё, наверное, новое предложение. Нелегко уходить с места, где проработал годами. Она спросила, сохраню ли я это в секрете. Я сказал, что да, что заставило её улыбнуться."
    },
    "drag": {
      "intro": "Соедини русскую ловушку недели с её английским исправлением.",
      "pairs": [
        [
          "He said he was tired",
          "Он сказал, что устал (сдвиг времён)"
        ],
        [
          "He asked where I lived",
          "Он спросил, где я живу (прямой порядок)"
        ],
        [
          "It must be true",
          "Это наверняка правда (must = догадка)"
        ],
        [
          "It can't be true",
          "Этого не может быть (can't)"
        ],
        [
          "the man who lives here",
          "человек, который живёт здесь (без «he»)"
        ]
      ]
    },
    "quiz": {
      "intro": "Мини-тест недели 3. Шесть вопросов на чужую речь, догадки и «который».",
      "items": [
        {
          "q": "«Он сказал, что занят» →",
          "opts": [
            "He said he is busy",
            "He said he was busy",
            "He said me he was busy"
          ],
          "answer": 1,
          "explain": "Сдвиг: is → was; и say без адресата."
        },
        {
          "q": "«Она спросила, где я работаю» →",
          "opts": [
            "She asked where do I work",
            "She asked where I worked",
            "She asked where did I work"
          ],
          "answer": 1,
          "explain": "Прямой порядок, без do, со сдвигом."
        },
        {
          "q": "«Он попросил меня подождать» →",
          "opts": [
            "He said me to wait",
            "He asked me to wait",
            "He asked me wait"
          ],
          "answer": 1,
          "explain": "ask/tell + кого + to do."
        },
        {
          "q": "«Свет горит — он наверняка дома» →",
          "opts": [
            "He can be home",
            "He must be home",
            "He should be home"
          ],
          "answer": 1,
          "explain": "Уверенная догадка → must be."
        },
        {
          "q": "«Это не может быть правдой» →",
          "opts": [
            "It mustn't be true",
            "It can't be true",
            "It might not be true"
          ],
          "answer": 1,
          "explain": "«не может быть» → can't be."
        },
        {
          "q": "«Мой брат, который живёт в Риме, врач» (брат один) →",
          "opts": [
            "My brother who lives in Rome is a doctor",
            "My brother, who lives in Rome, is a doctor",
            "My brother, that lives in Rome, is a doctor"
          ],
          "answer": 1,
          "explain": "Брат один → запятые + who (не that)."
        }
      ]
    },
    "picture": {
      "intro": "Опиши сцену, пересказывая, что люди говорят и думают.",
      "emoji": "💬🕵️🗣️",
      "prompt": "Опиши картинку, используя чужую речь и догадки: «He said…», «She must be…», «the woman who…». Минимум 3 предложения.",
      "hint": "Структуры: He told her that… ; She must be… ; the man who…",
      "example": "The man on the left told his friend that he had lost his phone. His friend, who looks worried, said he would help. They must be late for something, because they keep checking the time. The woman who is watching them is probably their boss.",
      "img": "img/b1/day-21.jpg",
      "credit": "Фото: blizzy63 · Public Domain · <a href=\"https://www.flickr.com/photos/45379817@N08/7518893500\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Перескажи небольшую историю — слух, новость или сплетню.",
      "prompt": "Напиши 5–7 предложений: перескажи, что кто-то тебе сказал или спросил. Используй чужую речь (said/told/asked), одну догадку (must/might be) и одно «который» (who/which).",
      "hint": "Структуры: My friend told me that… ; She asked if… ; He must be… ; the person who…",
      "example": "Last week my friend Dana told me that she had met someone special. She said his name was Mark and that he worked as a vet. I asked her where they had met, and she said it was at a party which a colleague had organised. She must be really happy, because she couldn't stop smiling. The man who introduced them is now planning their first trip together."
    }
  },
  "22": {
    "day": 22,
    "week": "04",
    "level": "B1",
    "themeRu": "Ведь правда?",
    "themeEn": "Question tags",
    "intro": "«Ты ведь идёшь с нами, правда?» Вот этот хвостик в конце фразы — сегодняшняя тема: <b>хвостики-вопросы</b> (question tags). По-русски хвостик не меняется — всегда «да?» или «правда?». А в английском он живой: подбирает <b>вспомогательный глагол</b> и переворачивает <b>полярность</b>. Утверждение плюс — хвостик минус. Звучит хитро, но логика железная, и сегодня ты её освоишь.",
    "introAudio": "Ты ведь идёшь с нами, правда? Вот этот хвостик в конце фразы — сегодняшняя тема: хвостики-вопросы. По-русски хвостик не меняется — всегда «да?» или «правда?». А в английском он живой: подбирает вспомогательный глагол и переворачивает полярность. Утверждение плюс — хвостик минус. Звучит хитро, но логика железная, и сегодня ты её освоишь.",
    "goals": [
      "понимать логику хвостика: плюс-утверждение → минус-хвостик, и наоборот",
      "правильно подбирать вспомогательный глагол в хвостике (is → isn't, have → haven't, like → don't you)",
      "не попасть в русскую ловушку неизменного «да?» и запомнить особый случай <b>I am…, aren't I?</b>",
      "использовать интонацию: падение = подтверждаю, подъём = реально переспрашиваю"
    ],
    "learned": [
      "Понял(а) логику хвостика: плюс-утверждение → минус-хвостик, и наоборот",
      "Правильно подобрал(а) вспомогательный глагол в хвостике (is → isn't, have → haven't, like → don't you)",
      "Не попал(а) в русскую ловушку неизменного «да?» и запомнил(а) особый случай <b>I am…, aren't I?</b>",
      "Использовал(а) интонацию: падение = подтверждаю, подъём = реально переспрашиваю"
    ],
    "review": {
      "intro": "Утро начинаем с always-on повторения. Хвостики целиком держатся на вспомогательных глаголах, поэтому сначала освежим их — и заодно Present Perfect, нашу постоянную боль.",
      "introAudio": "Утро начинаем с повторения. Хвостики целиком держатся на вспомогательных глаголах, поэтому сначала освежим их и заодно Present Perfect.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> найди вспомогательный глагол.",
          "q": "Какой вспомогательный «спрятан» в «She has finished»?",
          "opts": [
            "does",
            "has",
            "is"
          ],
          "answer": 1,
          "explain": "have/has — вспомогательный Present Perfect; именно он уйдёт в хвостик."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> Present Perfect, всегда-on.",
          "q": "«Я ещё не видел это» —",
          "opts": [
            "I don't see it yet",
            "I haven't seen it yet",
            "I didn't see it yet"
          ],
          "answer": 1,
          "explain": "Present Perfect отрицание: haven't + 3-я форма (seen)."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери Present Perfect с already.",
          "q": "Собери: «Они уже ушли»",
          "want": "They have already gone",
          "answer": "They have already gone"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · логика хвостика",
        "title": "Плюс спереди — минус в хвосте",
        "paras": [
          "Хвостик-вопрос — это мини-вопрос в конце фразы: «..., isn't it?», «..., don't you?». Его правило простое и зеркальное: если основная фраза <b>утвердительная</b> (плюс), хвостик <b>отрицательный</b> (минус). И наоборот.",
          "В хвостик уходит тот же <b>вспомогательный глагол</b>, что стоит (или прячется) в основной фразе, плюс местоимение: <b>It is cold, isn't it?</b> — здесь is → isn't, it → it.",
          "Если в основной фразе отрицание, хвостик становится положительным: <b>You don't smoke, do you?</b> — рус. «Ты ведь не куришь, да?»."
        ],
        "audio": "Хвостик-вопрос — это мини-вопрос в конце фразы. Правило зеркальное: утвердительная фраза — отрицательный хвостик, и наоборот. It is cold, isn't it? You don't smoke, do you?",
        "table": {
          "rows": [
            [
              "+ утверждение → − хвост",
              "It is warm, isn't it? <button class=\"play\" data-say=\"It is warm, isn't it?\">🔊</button>"
            ],
            [
              "− отрицание → + хвост",
              "You aren't tired, are you?"
            ],
            [
              "хвост = вспомог. + местоимение",
              "She can swim, can't she?"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Сегодня холодно, правда?",
            "en": "It <b>is</b> cold, <b>isn't it</b>?",
            "gloss": "+ → −",
            "say": "It is cold, isn't it?"
          },
          {
            "ru": "Ты ведь не куришь, да?",
            "en": "You <b>don't</b> smoke, <b>do you</b>?",
            "gloss": "− → +",
            "say": "You don't smoke, do you?"
          },
          {
            "ru": "Она умеет плавать, не так ли?",
            "en": "She <b>can</b> swim, <b>can't she</b>?",
            "say": "She can swim, can't she?"
          }
        ],
        "mistakes": [
          {
            "wrong": "It is cold, is it?",
            "right": "It is cold, <b>isn't it</b>?",
            "why": "плюс спереди → минус в хвосте; полярность переворачивается"
          },
          {
            "wrong": "You like tea, like you?",
            "right": "You like tea, <b>don't you</b>?",
            "why": "в хвостик идёт вспомогательный (do), а не смысловой глагол"
          }
        ],
        "mnemonic": "🔁 Перевёртыш: + впереди → − в хвосте, − впереди → + в хвосте.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> переверни полярность.",
            "q": "«Сегодня тепло, правда?» —",
            "opts": [
              "It is warm, is it?",
              "It is warm, isn't it?",
              "It is warm, doesn't it?"
            ],
            "answer": 1,
            "explain": "+ впереди → − хвост: isn't it."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> отрицание спереди → плюс в хвосте.",
            "q": "«Ты ведь не голоден, да?» —",
            "opts": [
              "You aren't hungry, are you?",
              "You aren't hungry, aren't you?",
              "You aren't hungry, do you?"
            ],
            "answer": 0,
            "explain": "− спереди → + хвост: are you?"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу с хвостиком.",
            "q": "Собери: «Она умеет плавать, не так ли?»",
            "want": "She can swim, can't she",
            "answer": "She can swim, can't she"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · какой глагол в хвостике",
        "title": "be → isn't, have → haven't, а простые времена зовут <em>do/did</em>",
        "paras": [
          "Какой вспомогательный взять? Тот же, что в основной фразе. Если там <b>be</b> (am/is/are/was/were) — он и идёт в хвостик: <b>He was late, wasn't he?</b>",
          "Если там Present Perfect или другой перфект — берём <b>have/has</b>: <b>You've finished, haven't you?</b> Если модальный (can, will, should) — берём его же: <b>They will come, won't they?</b>",
          "А вот в Present/Past Simple вспомогательного на поверхности нет — он «прячется». Тогда хвостик строим через <b>do/does/did</b>: <b>You live here, don't you?</b> · <b>She called, didn't she?</b>"
        ],
        "audio": "Какой вспомогательный взять? Тот же, что в фразе. be — wasn't he, перфект — haven't you, модальный — won't they. А в Present и Past Simple вспомогательный прячется, поэтому хвостик через do, does или did: You live here, don't you? She called, didn't she?",
        "table": {
          "rows": [
            [
              "be (is/are/was)",
              "It's ready, isn't it?"
            ],
            [
              "have/has (perfect)",
              "You've seen it, haven't you?"
            ],
            [
              "модальный (can/will/should)",
              "He can drive, can't he?"
            ],
            [
              "Present/Past Simple → do/did",
              "You know him, don't you?"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Он опоздал, да?",
            "en": "He <b>was</b> late, <b>wasn't he</b>?",
            "say": "He was late, wasn't he?"
          },
          {
            "ru": "Ты уже закончил, не так ли?",
            "en": "You've <b>finished</b>, <b>haven't you</b>?",
            "gloss": "perfect → haven't",
            "say": "You've finished, haven't you?"
          },
          {
            "ru": "Они придут, правда?",
            "en": "They <b>will</b> come, <b>won't they</b>?",
            "gloss": "will → won't",
            "say": "They will come, won't they?"
          },
          {
            "ru": "Ты ведь знаешь его, да?",
            "en": "You <b>know</b> him, <b>don't you</b>?",
            "gloss": "Present Simple → don't",
            "say": "You know him, don't you?"
          }
        ],
        "mistakes": [
          {
            "wrong": "You speak French, haven't you?",
            "right": "You speak French, <b>don't you</b>?",
            "why": "Present Simple без be/перфекта → хвостик через do, не have"
          },
          {
            "wrong": "He can swim, doesn't he?",
            "right": "He can swim, <b>can't he</b>?",
            "why": "модальный (can) сам идёт в хвостик, do не нужен"
          }
        ],
        "mnemonic": "🧲 Хвостик «притягивает» вспомогательный из фразы: be→be, have→have, can→can; нет вспомог. → do/did.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> перфект → have/has.",
            "q": "«Ты уже видел это, да?» —",
            "opts": [
              "You've seen it, didn't you?",
              "You've seen it, haven't you?",
              "You've seen it, don't you?"
            ],
            "answer": 1,
            "explain": "Present Perfect → haven't you."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> Present Simple → do/does.",
            "q": "«Он водит машину, не так ли?» —",
            "opts": [
              "He drives, doesn't he?",
              "He drives, isn't he?",
              "He drives, hasn't he?"
            ],
            "answer": 0,
            "explain": "Present Simple, he → doesn't he."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> модальный will → won't.",
            "q": "Они придут, правда? (will)",
            "accept": [
              "they will come, won't they",
              "they'll come, won't they"
            ],
            "placeholder": "They will come, ..."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери хвостик через do.",
            "q": "Собери: «Ты живёшь здесь, да?»",
            "want": "You live here, don't you",
            "answer": "You live here, don't you"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Не «да?» на всё: <em>aren't I?</em>, <em>will you?</em>, <em>shall we?</em>",
        "paras": [
          "Главная ловушка: по-русски хвостик <b>не меняется</b> — «..., да?», «..., правда?», «..., не так ли?» одинаковы всегда. Поэтому хочется сказать английский хвостик одним шаблоном. Но в английском он каждый раз пересчитывается под глагол и полярность — это и тренируем.",
          "Особый случай: <b>I am</b> в хвостике превращается не в «amn't», а в <b>aren't I?</b> — <b>I'm late, aren't I?</b> Так сложилось исторически, просто запомни.",
          "Команды и предложения тоже имеют свои хвостики: к приказу — <b>will you?</b> (<b>Close the door, will you?</b>), к «давай» (Let's) — <b>shall we?</b> (<b>Let's go, shall we?</b>)."
        ],
        "audio": "Главная ловушка: по-русски хвостик не меняется, а в английском он каждый раз пересчитывается. Особый случай: I am в хвостике — aren't I, не amn't. К приказу — will you. К Let's — shall we.",
        "table": {
          "rows": [
            [
              "I am …",
              "I'm next, aren't I?"
            ],
            [
              "Повеление (Close the door)",
              "…, will you?"
            ],
            [
              "Let's …",
              "…, shall we?"
            ],
            [
              "There is/are …",
              "There's a problem, isn't there?"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я ведь следующий, да?",
            "en": "I'm next, <b>aren't I</b>?",
            "gloss": "I am → aren't I",
            "say": "I'm next, aren't I?"
          },
          {
            "ru": "Закрой дверь, ладно?",
            "en": "Close the door, <b>will you</b>?",
            "gloss": "приказ → will you",
            "say": "Close the door, will you?"
          },
          {
            "ru": "Давай начнём, а?",
            "en": "Let's start, <b>shall we</b>?",
            "gloss": "Let's → shall we",
            "say": "Let's start, shall we?"
          },
          {
            "ru": "Тут есть проблема, не так ли?",
            "en": "There's a problem, <b>isn't there</b>?",
            "gloss": "there → there",
            "say": "There's a problem, isn't there?"
          }
        ],
        "mistakes": [
          {
            "wrong": "I'm right, amn't I?",
            "right": "I'm right, <b>aren't I</b>?",
            "why": "у «I am» особый хвостик — aren't I, не «amn't»"
          },
          {
            "wrong": "Let's go, will we?",
            "right": "Let's go, <b>shall we</b>?",
            "why": "к Let's — всегда shall we"
          },
          {
            "wrong": "He is busy, no?",
            "right": "He is busy, <b>isn't he</b>?",
            "why": "англ. не лепит универсальное «no?/да?» — нужен глагол + полярность"
          }
        ],
        "mnemonic": "⭐ Три особых хвостика: I am → aren't I · приказ → will you · Let's → shall we.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> особый хвостик к I am.",
            "q": "«Я ведь следующий, да?» —",
            "opts": [
              "I'm next, amn't I?",
              "I'm next, aren't I?",
              "I'm next, isn't it?"
            ],
            "answer": 1,
            "explain": "I am → aren't I."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> хвостик к Let's.",
            "q": "«Давай выпьем кофе, а?» —",
            "opts": [
              "Let's have coffee, will we?",
              "Let's have coffee, shall we?",
              "Let's have coffee, don't we?"
            ],
            "answer": 1,
            "explain": "Let's → shall we."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> приказ → will you.",
            "q": "Собери: «Закрой окно, ладно?»",
            "want": "Close the window, will you",
            "answer": "Close the window, will you"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · интонация и ответ",
        "title": "Падение = подтверждаю, подъём = переспрашиваю",
        "paras": [
          "Хвостик может значить две разные вещи — и решает это <b>интонация</b>. Голос вниз (падение) на хвостике = «я уверен, просто хочу согласия»: <b>It's a lovely day, isn't it?</b> (↓) Голос вверх (подъём) = «я не уверен, реально спрашиваю»: <b>You locked the door, didn't you?</b> (↑)",
          "Отвечают на хвостик по факту, а не по форме хвостика. На <b>You're coming, aren't you?</b> если идёшь — <b>Yes, I am.</b>; если нет — <b>No, I'm not.</b>",
          "Маленький разговорный приём: согласись и добавь свой хвостик-эхо — «— Nice weather, isn't it? — Yes, it is, isn't it!» Это звучит очень по-английски."
        ],
        "audio": "Хвостик решает интонация. Падение — я уверен, жду согласия. Подъём — я не уверен, реально спрашиваю. Отвечают по факту: You're coming, aren't you? — Yes, I am. Или No, I'm not.",
        "table": {
          "rows": [
            [
              "Падение ↓",
              "уверен, жду согласия"
            ],
            [
              "Подъём ↑",
              "не уверен, реально спрашиваю"
            ],
            [
              "Ответ — по факту",
              "Yes, I am. / No, I'm not."
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Чудесный день, правда? (уверен)",
            "en": "Lovely day, <b>isn't it</b>? ↓",
            "say": "Lovely day, isn't it?"
          },
          {
            "ru": "Ты ведь запер дверь? (не уверен)",
            "en": "You locked the door, <b>didn't you</b>? ↑",
            "say": "You locked the door, didn't you?"
          },
          {
            "ru": "— Ты идёшь, да? — Да, иду.",
            "en": "— You're coming, aren't you? — <b>Yes, I am.</b>",
            "say": "Yes, I am."
          }
        ],
        "mistakes": [
          {
            "wrong": "— You're coming, aren't you? — Yes, I aren't.",
            "right": "— …? — <b>Yes, I am.</b>",
            "why": "отвечаем по факту нормальной формой, а не словом из хвостика"
          }
        ],
        "mnemonic": "🎵 ↓ падение — «согласись со мной»; ↑ подъём — «правда же это так?».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери интонацию.",
            "q": "Ты уверен, что день чудесный, и ждёшь согласия. Интонация хвостика —",
            "opts": [
              "подъём ↑",
              "падение ↓"
            ],
            "answer": 1,
            "explain": "уверен и жду согласия → падение ↓."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси с падающей интонацией.",
            "target": "It's a lovely day, isn't it?",
            "sub": "Чудесный день, правда?",
            "want": "isn't"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> ответь по факту (ты идёшь).",
            "q": "Ответь: «You're coming, aren't you?» — да, идёшь.",
            "accept": [
              "yes, i am",
              "yes i am"
            ],
            "placeholder": "Yes, I ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Аня и Том болтают в офисе. Замечай, как меняется хвостик под каждый глагол.",
      "lines": [
        {
          "who": "Anna",
          "name": "Аня",
          "side": "left",
          "en": "You've been to that new café, haven't you?",
          "ru": "Ты ведь была в том новом кафе, да?",
          "words": [
            [
              "been",
              "была (perfect)"
            ],
            [
              "haven't you",
              "да? (хвостик к perfect)"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Yes, I have. The coffee is great, isn't it?",
          "ru": "Да. Кофе там отличный, правда?",
          "words": [
            [
              "isn't it",
              "правда? (к it is)"
            ]
          ]
        },
        {
          "who": "Anna",
          "name": "Аня",
          "side": "left",
          "en": "It is. But it's a bit expensive, isn't it?",
          "ru": "Да. Но дороговато, не так ли?",
          "words": [
            [
              "a bit",
              "немного"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "True. Let's go together on Friday, shall we?",
          "ru": "Верно. Давай сходим вместе в пятницу, а?",
          "words": [
            [
              "shall we",
              "давай? (к Let's)"
            ]
          ]
        },
        {
          "who": "Anna",
          "name": "Аня",
          "side": "left",
          "en": "Good idea. I'm not working on Friday, am I?",
          "ru": "Хорошая мысль. Я ведь в пятницу не работаю, да?",
          "words": [
            [
              "am I",
              "да? (хвостик к I'm not)"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "No, you're off. It'll be fun, won't it?",
          "ru": "Нет, у тебя выходной. Будет весело, правда?",
          "words": [
            [
              "off",
              "выходной"
            ],
            [
              "won't it",
              "правда? (к will)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Кирпичики хвостиков — частые вспомогательные в связке с местоимением. Повтори вслух.",
      "items": [
        {
          "en": "isn't it?",
          "ru": "не так ли? / правда? (к it is)",
          "ex": "It's cold, isn't it?"
        },
        {
          "en": "don't you?",
          "ru": "да? (к Present Simple, you)",
          "ex": "You like jazz, don't you?"
        },
        {
          "en": "haven't you?",
          "ru": "да? (к Present Perfect)",
          "ex": "You've met her, haven't you?"
        },
        {
          "en": "aren't I?",
          "ru": "да? (особый хвостик к I am)",
          "ex": "I'm right, aren't I?"
        },
        {
          "en": "won't they?",
          "ru": "правда? (к will)",
          "ex": "They'll help, won't they?"
        },
        {
          "en": "shall we?",
          "ru": "а? / да? (к Let's)",
          "ex": "Let's start, shall we?"
        },
        {
          "en": "will you?",
          "ru": "ладно? (к приказу)",
          "ex": "Pass the salt, will you?"
        },
        {
          "en": "wasn't he?",
          "ru": "да? (к was)",
          "ex": "He was tired, wasn't he?"
        },
        {
          "en": "a tag question",
          "ru": "хвостик-вопрос",
          "ex": "Add a tag question at the end."
        },
        {
          "en": "to confirm",
          "ru": "подтвердить",
          "ex": "I just want to confirm."
        }
      ]
    },
    "reading": {
      "intro": "Короткий монолог про британский small talk. Считай хвостики — их тут много.",
      "title": "Small talk",
      "sentences": [
        "The British love tag questions, don't they?",
        "They start a chat with the weather, don't they?",
        "\"Lovely morning, isn't it?\" someone says.",
        "You don't even have to answer fully, do you?",
        "A simple \"It is, isn't it?\" is enough.",
        "Tags make small talk warm and easy, don't they?",
        "They invite the other person in, don't they?",
        "Now you can use them too, can't you?"
      ],
      "translation": "Британцы обожают хвостики-вопросы, правда? Они начинают разговор с погоды, не так ли? «Чудесное утро, да?» — говорит кто-то. Тебе даже не нужно отвечать полно, верно? Простого «Да, правда?» достаточно. Хвостики делают small talk тёплым и лёгким, не так ли? Они приглашают собеседника в разговор, да? Теперь и ты так можешь, правда?"
    },
    "drag": {
      "intro": "Соедини хвостик с тем, к чему он цепляется.",
      "pairs": [
        [
          "isn't it?",
          "не так ли? (к it is)"
        ],
        [
          "don't you?",
          "да? (Present Simple)"
        ],
        [
          "aren't I?",
          "да? (к I am)"
        ],
        [
          "shall we?",
          "а? (к Let's)"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по хвостикам — шесть вопросов.",
      "items": [
        {
          "q": "«Сегодня жарко, правда?» —",
          "opts": [
            "It's hot, is it?",
            "It's hot, isn't it?",
            "It's hot, doesn't it?"
          ],
          "answer": 1,
          "explain": "+ впереди → − хвост: isn't it."
        },
        {
          "q": "«Ты ведь не куришь, да?» —",
          "opts": [
            "You don't smoke, do you?",
            "You don't smoke, don't you?",
            "You don't smoke, are you?"
          ],
          "answer": 0,
          "explain": "− впереди → + хвост: do you."
        },
        {
          "q": "«Я ведь следующий, да?» —",
          "opts": [
            "I'm next, amn't I?",
            "I'm next, aren't I?",
            "I'm next, isn't it?"
          ],
          "answer": 1,
          "explain": "I am → aren't I."
        },
        {
          "q": "«Давай поедем поездом, а?» —",
          "opts": [
            "Let's take the train, will we?",
            "Let's take the train, shall we?",
            "Let's take the train, don't we?"
          ],
          "answer": 1,
          "explain": "Let's → shall we."
        },
        {
          "q": "«Они уже приехали, не так ли?» (Present Perfect) —",
          "opts": [
            "They've arrived, didn't they?",
            "They've arrived, haven't they?",
            "They've arrived, don't they?"
          ],
          "answer": 1,
          "explain": "перфект → haven't they."
        },
        {
          "q": "Падающая интонация на хвостике значит, что говорящий —",
          "opts": [
            "реально не уверен и спрашивает",
            "уверен и ждёт согласия"
          ],
          "answer": 1,
          "explain": "падение ↓ = уверенность, жду согласия."
        }
      ]
    },
    "picture": {
      "intro": "Опиши сценку small talk: двое говорят о погоде.",
      "emoji": "☕🌧️🗣️",
      "prompt": "Опиши сценку small talk по картинке. Добавь 2–3 хвостика-вопроса.",
      "hint": "Используй: Lovely day, isn't it? · It's raining, isn't it? · You've got an umbrella, haven't you?",
      "example": "Two people are waiting for a bus. \"Terrible weather, isn't it?\" says one. \"It is, isn't it? And it's cold too, isn't it?\" They don't know each other, but tags make it easy to talk, don't they?",
      "img": "img/b1/day-22.jpg",
      "credit": "Фото: Tim Evanson · Public Domain · <a href=\"https://www.flickr.com/photos/23165290@N00/17135781680\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Потренируй хвостики в письме.",
      "prompt": "Напиши короткий диалог-small talk (4–6 реплик) с хотя бы тремя разными хвостиками-вопросами.",
      "hint": "Меняй вспомогательный: is → isn't it?, Present Perfect → haven't you?, will → won't it?, Let's → shall we?",
      "example": "— You're new here, aren't you? — Yes, I am. It's a friendly office, isn't it? — It is. Everyone has been very kind, haven't they? — They have. Let's get a coffee later, shall we? — Good idea, let's!"
    }
  },
  "23": {
    "day": 23,
    "week": "04",
    "level": "B1",
    "themeRu": "Завтра в это время",
    "themeEn": "Future Continuous",
    "intro": "Представь: завтра в это же время ты будешь сидеть на этом же уроке. Не «начнёшь» и не «закончишь», а будешь <b>в процессе</b>. Для такого «в процессе в будущем» у английского есть отдельная форма — <b>Future Continuous</b>: <b>will be + -ing</b>. Сегодня освоим её и заодно наведём порядок во всех способах говорить о будущем: will, going to, present continuous и наш новый will be doing.",
    "introAudio": "Представь: завтра в это же время ты будешь сидеть на этом же уроке. Не начнёшь и не закончишь, а будешь в процессе. Для такого в процессе в будущем у английского есть отдельная форма — Future Continuous: will be плюс -ing. Сегодня освоим её и заодно наведём порядок во всех способах говорить о будущем: will, going to, present continuous и наш новый will be doing.",
    "goals": [
      "строить Future Continuous: <b>will be + -ing</b>",
      "говорить о действии в процессе в конкретный момент будущего: This time tomorrow I'll be flying",
      "не путать «будущее в процессе» с простым будущим (русская ловушка)",
      "выбирать между will / going to / present continuous / future continuous"
    ],
    "learned": [
      "Построил(а) Future Continuous: <b>will be + -ing</b>",
      "Заговорил(а) о действии в процессе в конкретный момент будущего: This time tomorrow I'll be flying",
      "Перестал(а) путать «будущее в процессе» с простым будущим (русская ловушка)",
      "Выбрал(а) между will / going to / present continuous / future continuous"
    ],
    "review": {
      "intro": "Always-on: три способа будущего из A2. Они — фундамент сегодняшнего четвёртого способа.",
      "introAudio": "Повторим три способа будущего из A2. Они — фундамент сегодняшнего четвёртого способа.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> решение в момент речи → will.",
          "q": "Телефон звонит. «Я отвечу.» —",
          "opts": [
            "I answer it",
            "I'll answer it",
            "I'm answering it"
          ],
          "answer": 1,
          "explain": "спонтанное решение прямо сейчас → will."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> план/намерение → going to.",
          "q": "«Я собираюсь купить машину.» —",
          "opts": [
            "I'll buy a car",
            "I'm going to buy a car",
            "I buy a car"
          ],
          "answer": 1,
          "explain": "заранее обдуманный план → be going to."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> договорённость → present continuous.",
          "q": "Собери: «Я встречаюсь с Томом в 6.»",
          "want": "I am meeting Tom at six",
          "answer": "I am meeting Tom at six"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · новая форма",
        "title": "<em>will be + -ing</em> — в процессе в будущем",
        "paras": [
          "Future Continuous показывает действие, которое будет <b>в процессе</b> в определённый момент будущего. Не его начало и не конец — а сам ход, как кадр из будущего.",
          "Форма одинаковая для всех лиц: <b>will be + глагол-ing</b>. <b>This time tomorrow I'll be flying to Rome.</b> = Завтра в это время я буду лететь в Рим.",
          "Маркеры-подсказки: <b>this time tomorrow</b>, <b>at 8 o'clock tonight</b>, <b>all day</b>, <b>while you are…</b> — они указывают на момент или отрезок, внутри которого действие уже идёт."
        ],
        "audio": "Future Continuous показывает действие в процессе в определённый момент будущего. Форма для всех лиц одна: will be плюс глагол с -ing. This time tomorrow I'll be flying to Rome. Маркеры: this time tomorrow, at eight tonight, all day, while you are.",
        "table": {
          "rows": [
            [
              "I / you / we / they",
              "will be working <button class=\"play\" data-say=\"I will be working\">🔊</button>"
            ],
            [
              "he / she / it",
              "will be working"
            ],
            [
              "сокращённо",
              "I'll be working · she'll be working"
            ],
            [
              "маркеры",
              "this time tomorrow · at 8 tonight · all day"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Завтра в это время я буду лететь в Рим.",
            "en": "This time tomorrow I<b>'ll be flying</b> to Rome.",
            "gloss": "will be + flying",
            "say": "This time tomorrow I'll be flying to Rome."
          },
          {
            "ru": "В 8 вечера мы будем ужинать.",
            "en": "At 8 tonight we<b>'ll be having</b> dinner.",
            "say": "At eight tonight we'll be having dinner."
          },
          {
            "ru": "Не звони в 10 — я буду спать.",
            "en": "Don't call at ten — I<b>'ll be sleeping</b>.",
            "say": "Don't call at ten, I'll be sleeping."
          }
        ],
        "mistakes": [
          {
            "wrong": "This time tomorrow I will fly to Rome",
            "right": "…I<b>'ll be flying</b> to Rome",
            "why": "нужен процесс в конкретный момент → will be + -ing"
          },
          {
            "wrong": "I will being working",
            "right": "I will <b>be</b> working",
            "why": "после will всегда be + -ing, не «being»"
          }
        ],
        "mnemonic": "🎬 Кадр из будущего: will be + -ing. This time tomorrow I'll be …ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> процесс в момент → will be -ing.",
            "q": "«Завтра в это время я буду работать.» —",
            "opts": [
              "This time tomorrow I will work",
              "This time tomorrow I'll be working",
              "This time tomorrow I work"
            ],
            "answer": 1,
            "explain": "процесс в момент будущего → will be working."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери Future Continuous.",
            "q": "Собери: «В 9 вечера мы будем смотреть фильм.»",
            "want": "At nine we'll be watching a film",
            "answer": "At nine we'll be watching a film"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> drive → driving.",
            "q": "Не звони в 7 — я буду за рулём.",
            "accept": [
              "don't call at seven, i'll be driving",
              "don't call at seven i'll be driving",
              "don't call at 7, i'll be driving",
              "don't call at 7 i'll be driving",
              "don't call at seven, i will be driving",
              "don't call at seven i will be driving",
              "don't call at 7, i will be driving",
              "don't call at 7 i will be driving"
            ],
            "placeholder": "Don't call at seven, I'll be ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · процесс vs факт",
        "title": "<em>will be doing</em> (в процессе) ≠ <em>will do</em> (факт/итог)",
        "paras": [
          "Сравни два кадра. <b>will do</b> — действие как целый факт или итог: <b>At 8 I'll cook dinner</b> (в 8 начну/приготовлю). <b>will be doing</b> — действие в разгаре: <b>At 8 I'll be cooking dinner</b> (в 8 буду уже стоять у плиты).",
          "Поэтому Future Continuous часто рисует <b>фон</b>, на котором случится другое событие: <b>When you arrive, I'll be cooking.</b> = Когда придёшь, я буду готовить (уже в процессе).",
          "Ещё одна функция — вежливый вопрос о чужих планах: <b>Will you be using the car tonight?</b> звучит мягче, чем <b>Will you use…?</b> — ты не давишь, а интересуешься ходом дел."
        ],
        "audio": "will do — действие как факт или итог. will be doing — действие в разгаре. Future Continuous часто рисует фон: When you arrive, I'll be cooking. И ещё это вежливый вопрос о планах: Will you be using the car tonight?",
        "table": {
          "rows": [
            [
              "will do — факт/итог",
              "At 8 I'll cook dinner."
            ],
            [
              "will be doing — в процессе",
              "At 8 I'll be cooking dinner."
            ],
            [
              "фон для события",
              "When you arrive, I'll be cooking."
            ],
            [
              "вежливый вопрос",
              "Will you be using the car?"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Когда ты придёшь, я буду готовить.",
            "en": "When you arrive, I<b>'ll be cooking</b>.",
            "gloss": "фон в процессе",
            "say": "When you arrive, I'll be cooking."
          },
          {
            "ru": "Не беспокойся, я буду ждать у выхода.",
            "en": "Don't worry, I<b>'ll be waiting</b> at the exit.",
            "say": "I'll be waiting at the exit."
          },
          {
            "ru": "Ты будешь пользоваться машиной вечером?",
            "en": "<b>Will you be using</b> the car tonight?",
            "gloss": "вежливо о планах",
            "say": "Will you be using the car tonight?"
          }
        ],
        "mistakes": [
          {
            "wrong": "When you arrive, I will cook",
            "right": "When you arrive, I<b>'ll be cooking</b>",
            "why": "нужен фон в процессе → will be cooking"
          }
        ],
        "mnemonic": "🍳 Итог — will do; в разгаре — will be doing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> процесс-фон.",
            "q": "Когда ты придёшь, я уже буду в процессе готовки —",
            "opts": [
              "When you arrive, I'll cook",
              "When you arrive, I'll be cooking"
            ],
            "answer": 1,
            "explain": "фон в процессе → will be cooking."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> вежливый вопрос о планах.",
            "q": "Вежливо спросить о вечерних планах с машиной —",
            "opts": [
              "Will you use the car tonight?",
              "Will you be using the car tonight?"
            ],
            "answer": 1,
            "explain": "мягче и о ходе дел → Will you be using…?"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери Future Continuous.",
            "q": "Собери: «Я буду ждать у выхода.»",
            "want": "I'll be waiting at the exit",
            "answer": "I'll be waiting at the exit"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Русское «буду работать» — это не всегда <em>will work</em>",
        "paras": [
          "По-русски «завтра в это время я буду работать» и «завтра я поработаю» звучат почти одинаково — оба про будущее. Но в английском они разные: процесс в конкретный момент — <b>I'll be working</b>, а простой факт/намерение — <b>I'll work</b> / <b>I'm going to work</b>.",
          "Русскоязычные часто берут либо настоящее («This time tomorrow I work»), либо простое будущее («I will work»). Оба теряют идею «уже в процессе». Маркер «this time tomorrow / at 8 / while» — почти всегда сигнал к <b>will be + -ing</b>.",
          "Проверь себя вопросом: «можно ли вставить ‘в этот момент уже идёт’?» Если да — Future Continuous."
        ],
        "audio": "По-русски «буду работать» и «поработаю» звучат похоже, но в английском это разное. Процесс в момент — I'll be working. Факт — I'll work. Русскоязычные часто берут настоящее или простое будущее и теряют идею «уже в процессе». Маркер this time tomorrow — сигнал к will be плюс -ing.",
        "table": {
          "rows": [
            [
              "рус. «буду работать» (в процессе)",
              "I'll be working"
            ],
            [
              "рус. «поработаю» (факт)",
              "I'll work / I'm going to work"
            ],
            [
              "ошибка: настоящее",
              "❌ This time tomorrow I work"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Завтра в это время я буду сдавать экзамен.",
            "en": "This time tomorrow I<b>'ll be taking</b> an exam.",
            "gloss": "процесс → will be -ing",
            "say": "This time tomorrow I'll be taking an exam."
          },
          {
            "ru": "Завтра я сдам экзамен (факт).",
            "en": "Tomorrow I<b>'ll take</b> an exam.",
            "gloss": "факт → will + base",
            "say": "Tomorrow I'll take an exam."
          }
        ],
        "mistakes": [
          {
            "wrong": "This time tomorrow I will work",
            "right": "This time tomorrow I<b>'ll be working</b>",
            "why": "‘this time tomorrow’ → процесс → will be working"
          },
          {
            "wrong": "This time tomorrow I work",
            "right": "This time tomorrow I<b>'ll be working</b>",
            "why": "не настоящее: будущее в процессе → will be + -ing"
          }
        ],
        "mnemonic": "⚠️ ‘this time tomorrow’ + действие → will be + -ing, не настоящее и не просто will.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму процесса.",
            "q": "«Завтра в это время я буду ехать на поезде.» —",
            "opts": [
              "This time tomorrow I travel by train",
              "This time tomorrow I will travel by train",
              "This time tomorrow I'll be travelling by train"
            ],
            "answer": 2,
            "explain": "процесс в момент → will be travelling."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> sleep → sleeping.",
            "q": "Завтра в это время я буду спать.",
            "accept": [
              "this time tomorrow i'll be sleeping",
              "this time tomorrow i will be sleeping"
            ],
            "placeholder": "This time tomorrow I'll be ..."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери Future Continuous.",
            "q": "Собери: «В 10 утра я буду сдавать экзамен.»",
            "want": "At ten I'll be taking an exam",
            "answer": "At ten I'll be taking an exam"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · карта будущего",
        "title": "will · going to · present continuous · will be doing",
        "paras": [
          "Соберём всё будущее на одной карте. <b>will</b> — решение в момент речи и прогноз: <b>I'll help you. It'll rain.</b> <b>going to</b> — намерение/план и видимое доказательство: <b>I'm going to study law. Look — it's going to rain.</b>",
          "<b>Present Continuous</b> — конкретная договорённость с местом/временем: <b>I'm meeting Tom at six.</b> <b>Future Continuous</b> — действие в процессе в момент будущего: <b>At six I'll be travelling.</b>",
          "Один смысл — разные «упаковки». Спрашивай себя: это решение сейчас (will), план (going to), договорённость (am meeting) или процесс (will be doing)?"
        ],
        "audio": "Карта будущего. will — решение сейчас и прогноз. going to — намерение и видимые признаки. Present Continuous — договорённость с временем. Future Continuous — процесс в момент будущего.",
        "table": {
          "rows": [
            [
              "will + base",
              "решение сейчас / прогноз: I'll help"
            ],
            [
              "be going to + base",
              "намерение / признаки: I'm going to study"
            ],
            [
              "am/is/are + -ing",
              "договорённость: I'm meeting Tom at 6"
            ],
            [
              "will be + -ing",
              "процесс в момент: I'll be travelling at 6"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Я помогу тебе (решил сейчас).",
            "en": "I<b>'ll help</b> you.",
            "gloss": "will",
            "say": "I'll help you."
          },
          {
            "ru": "Я собираюсь учить право (план).",
            "en": "I<b>'m going to</b> study law.",
            "gloss": "going to",
            "say": "I'm going to study law."
          },
          {
            "ru": "Я встречаюсь с Томом в 6 (договорённость).",
            "en": "I<b>'m meeting</b> Tom at six.",
            "gloss": "present continuous",
            "say": "I'm meeting Tom at six."
          },
          {
            "ru": "В 6 я буду в дороге (процесс).",
            "en": "At six I<b>'ll be travelling</b>.",
            "gloss": "future continuous",
            "say": "At six I'll be travelling."
          }
        ],
        "mistakes": [
          {
            "wrong": "Look at those clouds — it will rain",
            "right": "Look at those clouds — it<b>'s going to</b> rain",
            "why": "есть видимый признак → going to"
          },
          {
            "wrong": "I will meet Tom at six (договорённость)",
            "right": "I<b>'m meeting</b> Tom at six",
            "why": "договорённость с временем → present continuous"
          }
        ],
        "mnemonic": "🗺️ will=решил сейчас · going to=план · am …ing=договорённость · will be …ing=в процессе.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> есть видимый признак → going to.",
            "q": "Видишь тучи: «Сейчас пойдёт дождь.» —",
            "opts": [
              "It will rain",
              "It's going to rain",
              "It rains"
            ],
            "answer": 1,
            "explain": "видимое доказательство → going to."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> договорённость → present continuous.",
            "q": "«Я ужинаю с Аней завтра.» (договорённость) —",
            "opts": [
              "I'll have dinner with Anna tomorrow",
              "I'm having dinner with Anna tomorrow"
            ],
            "answer": 1,
            "explain": "конкретная договорённость → am having."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> процесс в момент → will be -ing.",
            "q": "«В полночь мы будем праздновать.» —",
            "opts": [
              "At midnight we'll celebrate",
              "At midnight we'll be celebrating"
            ],
            "answer": 1,
            "explain": "в процессе в момент → will be celebrating."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси Future Continuous.",
            "target": "This time tomorrow I'll be flying to Rome.",
            "sub": "Завтра в это время я буду лететь в Рим.",
            "want": "flying"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том сверяют завтрашние планы. Слушай, как разные «будущие» работают вместе.",
      "lines": [
        {
          "who": "A",
          "en": "What will you be doing this time tomorrow?",
          "ru": "Что ты будешь делать завтра в это время?"
        },
        {
          "who": "B",
          "en": "I'll be flying to Berlin. My plane leaves at noon.",
          "ru": "Я буду лететь в Берлин. Самолёт в полдень."
        },
        {
          "who": "A",
          "en": "Nice! I'm meeting a client at noon, so I'll be working.",
          "ru": "Здорово! А я встречаюсь с клиентом в полдень, так что буду работать."
        },
        {
          "who": "B",
          "en": "Don't worry, I'll call you in the evening.",
          "ru": "Не волнуйся, я позвоню тебе вечером."
        },
        {
          "who": "A",
          "en": "Make it late — at eight I'll still be travelling home.",
          "ru": "Только попозже — в восемь я ещё буду ехать домой."
        },
        {
          "who": "B",
          "en": "Okay, I'll text first. Look, it's going to rain — let's go.",
          "ru": "Хорошо, сначала напишу. Смотри, сейчас дождь пойдёт — пошли."
        }
      ]
    },
    "vocab": {
      "intro": "Слова и формы дня — Future Continuous и его маркеры. Повтори вслух.",
      "items": [
        {
          "en": "this time tomorrow",
          "ru": "завтра в это (же) время",
          "ex": "This time tomorrow I'll be flying."
        },
        {
          "en": "I'll be working",
          "ru": "я буду работать (в процессе)",
          "ex": "At nine I'll be working."
        },
        {
          "en": "will be waiting",
          "ru": "буду ждать",
          "ex": "I'll be waiting at the exit."
        },
        {
          "en": "all day",
          "ru": "весь день",
          "ex": "I'll be studying all day."
        },
        {
          "en": "to take an exam",
          "ru": "сдавать экзамен",
          "ex": "I'll be taking an exam at ten."
        },
        {
          "en": "a flight",
          "ru": "рейс, полёт",
          "ex": "My flight is at noon."
        },
        {
          "en": "to celebrate",
          "ru": "праздновать",
          "ex": "We'll be celebrating at midnight."
        },
        {
          "en": "meanwhile",
          "ru": "тем временем",
          "ex": "Meanwhile, I'll be working."
        },
        {
          "en": "a deadline",
          "ru": "срок сдачи, дедлайн",
          "ex": "The deadline is tomorrow."
        },
        {
          "en": "Will you be using…?",
          "ru": "Ты будешь пользоваться…? (вежливо)",
          "ex": "Will you be using the car?"
        }
      ]
    },
    "reading": {
      "intro": "Девушка представляет завтрашний день по часам. Почти везде будущее в процессе.",
      "title": "This time tomorrow",
      "sentences": [
        "This time tomorrow my life will look different.",
        "At eight I'll be packing my last bag.",
        "At ten I'll be sitting on the train to the coast.",
        "By noon I'll be walking along the beach.",
        "My friends will be working, but I'll be relaxing.",
        "In the evening I'll be watching the sunset.",
        "This time tomorrow I won't be checking my email!",
        "I can't wait — it's going to be wonderful."
      ],
      "translation": "Завтра в это время моя жизнь будет выглядеть иначе. В восемь я буду собирать последнюю сумку. В десять я буду сидеть в поезде к морю. К полудню я буду гулять по пляжу. Мои друзья будут работать, а я буду отдыхать. Вечером я буду смотреть закат. Завтра в это время я не буду проверять почту! Жду не дождусь — это будет чудесно."
    },
    "drag": {
      "intro": "Соедини английскую форму с её смыслом.",
      "pairs": [
        [
          "I'll be working",
          "буду работать (в процессе)"
        ],
        [
          "I'll work",
          "поработаю (факт)"
        ],
        [
          "I'm meeting Tom at 6",
          "договорённость на 6"
        ],
        [
          "It's going to rain",
          "сейчас пойдёт (есть признаки)"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по будущему — шесть вопросов.",
      "items": [
        {
          "q": "«Завтра в это время я буду лежать на пляже.» —",
          "opts": [
            "This time tomorrow I lie on the beach",
            "This time tomorrow I'll lie on the beach",
            "This time tomorrow I'll be lying on the beach"
          ],
          "answer": 2,
          "explain": "процесс в момент → will be lying."
        },
        {
          "q": "Какую форму даёт Future Continuous?",
          "opts": [
            "will + base",
            "will be + -ing",
            "am/is/are + -ing"
          ],
          "answer": 1,
          "explain": "will be + глагол с -ing."
        },
        {
          "q": "Видишь признаки дождя — «Сейчас пойдёт дождь.»",
          "opts": [
            "It will rain",
            "It's going to rain"
          ],
          "answer": 1,
          "explain": "видимое доказательство → going to."
        },
        {
          "q": "Вежливый вопрос о вечерних планах —",
          "opts": [
            "Will you use the car tonight?",
            "Will you be using the car tonight?"
          ],
          "answer": 1,
          "explain": "мягче → Will you be using…?"
        },
        {
          "q": "«Когда ты придёшь, я буду готовить (уже в процессе).»",
          "opts": [
            "When you come, I'll cook",
            "When you come, I'll be cooking"
          ],
          "answer": 1,
          "explain": "фон в процессе → will be cooking."
        },
        {
          "q": "Договорённость с конкретным временем лучше сказать через —",
          "opts": [
            "present continuous (I'm meeting…)",
            "will (I'll meet…)"
          ],
          "answer": 0,
          "explain": "договорённость → present continuous."
        }
      ]
    },
    "picture": {
      "intro": "Опиши, что человек будет делать завтра в это время (по часам).",
      "emoji": "✈️🏖️🕒",
      "prompt": "Опиши по картинке, что человек будет делать завтра в это время. Используй will be + -ing.",
      "hint": "Структуры: This time tomorrow I'll be flying… ; At noon I'll be walking… ; In the evening I'll be watching…",
      "example": "This time tomorrow I'll be sitting on a plane. At noon I'll be landing in a warm country. In the afternoon I'll be swimming in the sea, and my friends will be working at their desks!",
      "img": "img/b1/day-23.jpg",
      "credit": "Фото: abel.maestro · Public Domain · <a href=\"https://www.flickr.com/photos/98156561@N02/35975880265\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Спланируй завтрашний день в процессе.",
      "prompt": "Напиши 4–6 предложений о том, что ты будешь делать завтра в это время и в течение дня. Используй Future Continuous (will be + -ing) хотя бы 4 раза.",
      "hint": "Маркеры: this time tomorrow, at 8, at noon, in the evening. Структура: At 8 I'll be… ; This time tomorrow I'll be…",
      "example": "This time tomorrow I'll be sitting in a café with my laptop. At ten I'll be writing reports, and at one I'll be having lunch with a colleague. In the evening I'll be studying English, as usual. My weekend self will be relaxing, but tomorrow I'll still be working!"
    }
  },
  "24": {
    "day": 24,
    "week": "04",
    "level": "B1",
    "themeRu": "Делать или делание",
    "themeEn": "Gerund & infinitive patterns",
    "intro": "После глагола ставить <b>-ing</b> или <b>to do</b>? По-русски вопроса нет — везде просто инфинитив («люблю читать», «хочу читать»), а в английском тут развилка, на которой спотыкаются почти все. После одних глаголов идёт <b>-ing</b> (герундий, «делание»), после других — <b>to do</b> (инфинитив, «делать»), а у некоторых от выбора <b>меняется смысл</b>. Эту развилку осваиваем отдельно. Разберём по полочкам — и ты перестанешь гадать.",
    "introAudio": "После глагола ставить -ing или to do? По-русски вопроса нет — везде просто инфинитив, люблю читать, хочу читать, а в английском тут развилка, на которой спотыкаются почти все. После одних глаголов идёт -ing, герундий, «делание», после других — to do, инфинитив, «делать», а у некоторых от выбора меняется смысл. Эту развилку осваиваем отдельно. Разберём по полочкам — и ты перестанешь гадать.",
    "goals": [
      "знать глаголы, после которых идёт <b>-ing</b> (enjoy, finish, avoid…)",
      "знать глаголы, после которых идёт <b>to do</b> (want, decide, hope…)",
      "различать пары со сменой смысла: stop to do ≠ stop doing, remember/forget/try",
      "не ставить русский инфинитив везде: enjoy <b>doing</b>, want <b>to do</b>, good at <b>doing</b>"
    ],
    "learned": [
      "Узнал(а) глаголы, после которых идёт <b>-ing</b> (enjoy, finish, avoid…)",
      "Узнал(а) глаголы, после которых идёт <b>to do</b> (want, decide, hope…)",
      "Различил(а) пары со сменой смысла: stop to do ≠ stop doing, remember/forget/try",
      "Перестал(а) ставить русский инфинитив везде: enjoy <b>doing</b>, want <b>to do</b>, good at <b>doing</b>"
    ],
    "review": {
      "intro": "Always-on: вспомним базу A2 — герундий после предлога и простые модели. Это опора для сегодняшних тонкостей.",
      "introAudio": "Повторим базу A2: герундий после предлога и простые модели. Это опора для сегодняшних тонкостей.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> после предлога — всегда -ing.",
          "q": "«Я хорош в плавании.» —",
          "opts": [
            "I'm good at swim",
            "I'm good at to swim",
            "I'm good at swimming"
          ],
          "answer": 2,
          "explain": "после предлога at — только -ing: swimming."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> want + to do.",
          "q": "«Я хочу пойти домой.» —",
          "opts": [
            "I want go home",
            "I want to go home",
            "I want going home"
          ],
          "answer": 1,
          "explain": "want всегда с to do."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> предлог for + -ing.",
          "q": "Собери: «Спасибо, что помог.»",
          "want": "Thank you for helping",
          "answer": "Thank you for helping"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · после глагола -ing",
        "title": "Глаголы, зовущие <em>-ing</em>: enjoy, finish, avoid…",
        "paras": [
          "Целая группа глаголов требует после себя <b>-ing</b>, а не to. Запомни ядро: <b>enjoy, finish, mind, avoid, keep, practise, suggest, imagine, can't stand, give up</b>.",
          "<b>I enjoy reading.</b> = Мне нравится читать. <b>She finished working.</b> = Она закончила работать. <b>Do you mind waiting?</b> = Не против подождать?",
          "Подсказка: многие из них про процесс, продолжение или прекращение деятельности — там и живёт «делание» (-ing)."
        ],
        "audio": "Группа глаголов требует после себя -ing: enjoy, finish, mind, avoid, keep, practise, suggest, give up. I enjoy reading. She finished working. Do you mind waiting? Многие из них про процесс — там и живёт делание.",
        "table": {
          "rows": [
            [
              "enjoy / love doing",
              "enjoy reading <button class=\"play\" data-say=\"I enjoy reading\">🔊</button>"
            ],
            [
              "finish / give up doing",
              "finish working"
            ],
            [
              "mind / avoid doing",
              "avoid driving at night"
            ],
            [
              "keep / practise doing",
              "keep trying"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Мне нравится готовить.",
            "en": "I <b>enjoy cooking</b>.",
            "gloss": "enjoy + -ing",
            "say": "I enjoy cooking."
          },
          {
            "ru": "Ты не против подождать?",
            "en": "Do you <b>mind waiting</b>?",
            "gloss": "mind + -ing",
            "say": "Do you mind waiting?"
          },
          {
            "ru": "Он бросил курить.",
            "en": "He <b>gave up smoking</b>.",
            "gloss": "give up + -ing",
            "say": "He gave up smoking."
          },
          {
            "ru": "Продолжай пытаться.",
            "en": "<b>Keep trying</b>.",
            "gloss": "keep + -ing",
            "say": "Keep trying."
          }
        ],
        "mistakes": [
          {
            "wrong": "I enjoy to read",
            "right": "I enjoy <b>reading</b>",
            "why": "после enjoy всегда -ing, не to"
          },
          {
            "wrong": "She finished to work",
            "right": "She finished <b>working</b>",
            "why": "finish + -ing"
          }
        ],
        "mnemonic": "🔁 enjoy · finish · mind · avoid · keep · suggest → всегда + -ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> enjoy + -ing.",
            "q": "«Я обожаю путешествовать.» —",
            "opts": [
              "I enjoy to travel",
              "I enjoy travelling",
              "I enjoy travel"
            ],
            "answer": 1,
            "explain": "enjoy + -ing: travelling."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> avoid + -ing.",
            "q": "«Избегай есть поздно.» —",
            "opts": [
              "Avoid to eat late",
              "Avoid eating late",
              "Avoid eat late"
            ],
            "answer": 1,
            "explain": "avoid + -ing: eating."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> finish + -ing.",
            "q": "Собери: «Он закончил готовить.»",
            "want": "He finished cooking",
            "answer": "He finished cooking"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> mind + -ing.",
            "q": "Ты не против подождать?",
            "accept": [
              "do you mind waiting",
              "do you mind waiting?"
            ],
            "placeholder": "Do you mind ...?"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · после глагола to",
        "title": "Глаголы, зовущие <em>to do</em>: want, decide, hope…",
        "paras": [
          "Другая группа требует <b>to + инфинитив</b>. Ядро: <b>want, would like, decide, hope, plan, agree, promise, offer, refuse, learn, need, manage</b>.",
          "<b>I want to go.</b> = Хочу пойти. <b>She decided to stay.</b> = Она решила остаться. <b>They agreed to help.</b> = Они согласились помочь.",
          "Подсказка: многие из них про намерение, решение или планирование — взгляд вперёд, к ещё не сделанному действию. Туда тянется to."
        ],
        "audio": "Другая группа требует to плюс инфинитив: want, would like, decide, hope, plan, agree, promise, refuse, learn, need, manage. I want to go. She decided to stay. They agreed to help. Эти глаголы про намерение и взгляд вперёд.",
        "table": {
          "rows": [
            [
              "want / would like to do",
              "I want to go"
            ],
            [
              "decide / plan to do",
              "decide to stay"
            ],
            [
              "hope / promise to do",
              "hope to see you"
            ],
            [
              "agree / refuse / learn to do",
              "agree to help"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я решил остаться.",
            "en": "I <b>decided to stay</b>.",
            "gloss": "decide + to",
            "say": "I decided to stay."
          },
          {
            "ru": "Она надеется тебя увидеть.",
            "en": "She <b>hopes to see</b> you.",
            "gloss": "hope + to",
            "say": "She hopes to see you."
          },
          {
            "ru": "Они согласились помочь.",
            "en": "They <b>agreed to help</b>.",
            "gloss": "agree + to",
            "say": "They agreed to help."
          },
          {
            "ru": "Я учусь водить.",
            "en": "I'm <b>learning to drive</b>.",
            "gloss": "learn + to",
            "say": "I'm learning to drive."
          }
        ],
        "mistakes": [
          {
            "wrong": "I want going home",
            "right": "I want <b>to go</b> home",
            "why": "после want — to do, не -ing"
          },
          {
            "wrong": "She decided staying",
            "right": "She decided <b>to stay</b>",
            "why": "decide + to do"
          }
        ],
        "mnemonic": "➡️ want · decide · hope · plan · agree · promise → всегда + to do.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> want + to do.",
            "q": "«Я хочу научиться плавать.» —",
            "opts": [
              "I want to learn to swim",
              "I want learning to swim",
              "I want learn swimming"
            ],
            "answer": 0,
            "explain": "want to learn to swim."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> promise + to do.",
            "q": "«Он пообещал позвонить.» —",
            "opts": [
              "He promised calling",
              "He promised to call",
              "He promised call"
            ],
            "answer": 1,
            "explain": "promise + to call."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> plan + to do.",
            "q": "Собери: «Мы планируем уехать рано.»",
            "want": "We plan to leave early",
            "answer": "We plan to leave early"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> refuse + to do.",
            "q": "Она отказалась отвечать.",
            "accept": [
              "she refused to answer"
            ],
            "placeholder": "She refused to ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · смысл меняется",
        "title": "<em>stop to do</em> ≠ <em>stop doing</em>; remember / forget / try",
        "paras": [
          "У нескольких глаголов выбор -ing или to <b>меняет смысл</b>. <b>stop doing</b> — прекратить занятие: <b>He stopped smoking</b> (бросил курить). <b>stop to do</b> — остановиться, ЧТОБЫ сделать: <b>He stopped to smoke</b> (остановился покурить).",
          "<b>remember/forget + to do</b> — про обязанность впереди: <b>Remember to lock the door</b> (не забудь запереть). <b>remember/forget + doing</b> — про воспоминание: <b>I remember locking the door</b> (помню, что запер).",
          "<b>try to do</b> — стараться, прилагать усилие: <b>I tried to open it</b> (пытался). <b>try doing</b> — попробовать как эксперимент: <b>Try opening the window</b> (попробуй-ка открыть окно — вдруг поможет)."
        ],
        "audio": "У нескольких глаголов выбор меняет смысл. stop doing — бросить занятие. stop to do — остановиться, чтобы сделать. remember to do — не забудь сделать. remember doing — помню, что сделал. try to do — стараться. try doing — попробовать как эксперимент.",
        "table": {
          "rows": [
            [
              "stop doing",
              "бросить занятие: stopped smoking"
            ],
            [
              "stop to do",
              "остановиться, чтобы: stopped to smoke"
            ],
            [
              "remember to do / doing",
              "не забыть / вспоминать"
            ],
            [
              "try to do / doing",
              "стараться / эксперимент"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Он бросил курить.",
            "en": "He <b>stopped smoking</b>.",
            "gloss": "прекратил занятие",
            "say": "He stopped smoking."
          },
          {
            "ru": "Он остановился, чтобы покурить.",
            "en": "He <b>stopped to smoke</b>.",
            "gloss": "остановился ради",
            "say": "He stopped to smoke."
          },
          {
            "ru": "Не забудь позвонить ей.",
            "en": "<b>Remember to call</b> her.",
            "gloss": "обязанность впереди",
            "say": "Remember to call her."
          },
          {
            "ru": "Я помню, что звонил ей.",
            "en": "I <b>remember calling</b> her.",
            "gloss": "воспоминание",
            "say": "I remember calling her."
          }
        ],
        "mistakes": [
          {
            "wrong": "I stopped to smoke (= бросил курить)",
            "right": "I stopped <b>smoking</b>",
            "why": "бросить занятие → stop + -ing; stop to smoke = остановился покурить"
          },
          {
            "wrong": "Remember locking the door! (= не забудь запереть)",
            "right": "Remember <b>to lock</b> the door!",
            "why": "обязанность впереди → remember + to do"
          }
        ],
        "mnemonic": "🔀 -ing = уже идёт/случилось; to = впереди/ради цели.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> обязанность впереди → to do.",
            "q": "«Не забудь купить хлеб.» —",
            "opts": [
              "Remember buying bread",
              "Remember to buy bread"
            ],
            "answer": 1,
            "explain": "обязанность впереди → remember to buy."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> бросить занятие → -ing.",
            "q": "«Он бросил есть мясо.» —",
            "opts": [
              "He stopped to eat meat",
              "He stopped eating meat"
            ],
            "answer": 1,
            "explain": "бросить занятие → stop eating."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> эксперимент → try + -ing.",
            "q": "«Попробуй перезагрузить компьютер (как эксперимент).» —",
            "opts": [
              "Try to restart the computer",
              "Try restarting the computer"
            ],
            "answer": 1,
            "explain": "эксперимент «вдруг поможет» → try restarting."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> воспоминание → remember + -ing.",
            "q": "Собери: «Я помню, что запер дверь.»",
            "want": "I remember locking the door",
            "answer": "I remember locking the door"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "Русский инфинитив на всё — а английский выбирает",
        "paras": [
          "Главная ловушка: по-русски один инфинитив обслуживает всё — «люблю <b>читать</b>», «хочу <b>читать</b>», «бросил <b>читать</b>». Поэтому тянет везде сказать to do. Но в английском после enjoy/finish/avoid нужен -ing: <b>enjoy reading</b>, не «enjoy to read»; а после want/decide — to do: <b>want to read</b>, не «want reading».",
          "Железное правило-якорь: <b>после любого предлога</b> (at, of, about, in, after, before, without, for) — только <b>-ing</b>. <b>good at swimming</b>, <b>interested in learning</b>, <b>before leaving</b>, <b>thanks for coming</b>.",
          "Если сомневаешься — проверь: стоит ли перед глаголом предлог? Тогда -ing. Это глагол из группы намерения (want/plan/hope)? Тогда to. Из группы процесса (enjoy/finish/keep)? Тогда -ing."
        ],
        "audio": "Главная ловушка: по-русски один инфинитив на всё, поэтому тянет везде сказать to do. Но после enjoy и finish нужен -ing, а после want и decide — to. И железное правило: после любого предлога — только -ing. good at swimming, interested in learning, before leaving, thanks for coming.",
        "table": {
          "rows": [
            [
              "предлог + -ing",
              "good at swimming · interested in learning"
            ],
            [
              "enjoy/finish/avoid + -ing",
              "enjoy reading"
            ],
            [
              "want/decide/hope + to",
              "want to read"
            ],
            [
              "рус. инфинитив ≠ всегда to",
              "❌ enjoy to read"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я хорош в готовке.",
            "en": "I'm <b>good at cooking</b>.",
            "gloss": "предлог at + -ing",
            "say": "I'm good at cooking."
          },
          {
            "ru": "Она увлечена изучением языков.",
            "en": "She's <b>interested in learning</b> languages.",
            "gloss": "in + -ing",
            "say": "She's interested in learning languages."
          },
          {
            "ru": "Перед уходом выключи свет.",
            "en": "<b>Before leaving</b>, turn off the light.",
            "gloss": "before + -ing",
            "say": "Before leaving, turn off the light."
          },
          {
            "ru": "Спасибо, что пришёл.",
            "en": "Thanks <b>for coming</b>.",
            "gloss": "for + -ing",
            "say": "Thanks for coming."
          }
        ],
        "mistakes": [
          {
            "wrong": "I enjoy to read",
            "right": "I enjoy <b>reading</b>",
            "why": "enjoy + -ing (рус. инфинитив сбивает)"
          },
          {
            "wrong": "I'm good at to cook",
            "right": "I'm good at <b>cooking</b>",
            "why": "после предлога at — только -ing"
          },
          {
            "wrong": "I want reading",
            "right": "I want <b>to read</b>",
            "why": "want + to do"
          }
        ],
        "mnemonic": "🧭 Предлог → -ing всегда. enjoy/finish → -ing. want/plan → to.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> предлог about → -ing.",
            "q": "«Я думаю о переезде.» (think about) —",
            "opts": [
              "I'm thinking about move",
              "I'm thinking about to move",
              "I'm thinking about moving"
            ],
            "answer": 2,
            "explain": "после предлога about — только -ing: moving."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> enjoy → -ing, want → to.",
            "q": "«Мне нравится учиться, и я хочу поступить в университет.» —",
            "opts": [
              "I enjoy to study and I want going to university",
              "I enjoy studying and I want to go to university",
              "I enjoy study and I want go to university"
            ],
            "answer": 1,
            "explain": "enjoy studying + want to go."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> предлог for + -ing.",
            "q": "Спасибо, что подождал. (thanks for, wait)",
            "accept": [
              "thanks for waiting",
              "thank you for waiting"
            ],
            "placeholder": "Thanks for ..."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси, поймав обе модели.",
            "target": "I enjoy learning English, and I want to speak it well.",
            "sub": "Мне нравится учить английский, и я хочу хорошо на нём говорить.",
            "want": "learning"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Аня и Том обсуждают планы на отпуск. Лови развилку -ing / to.",
      "lines": [
        {
          "who": "Anna",
          "name": "Аня",
          "side": "left",
          "en": "I've decided to take a real holiday this year.",
          "ru": "Я решила взять настоящий отпуск в этом году.",
          "words": [
            [
              "decided to",
              "решила (decide + to)"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Good! You should stop working so hard.",
          "ru": "Хорошо! Тебе пора перестать столько работать.",
          "words": [
            [
              "stop working",
              "перестать работать (stop + -ing)"
            ]
          ]
        },
        {
          "who": "Anna",
          "name": "Аня",
          "side": "left",
          "en": "I know. I enjoy travelling, but I always avoid planning.",
          "ru": "Знаю. Я люблю путешествовать, но вечно избегаю планировать.",
          "words": [
            [
              "enjoy travelling",
              "люблю путешествовать"
            ],
            [
              "avoid planning",
              "избегаю планировать"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Try using an app. Remember to book early, though.",
          "ru": "Попробуй приложение. Только не забудь забронировать заранее.",
          "words": [
            [
              "try using",
              "попробуй (эксперимент)"
            ],
            [
              "remember to book",
              "не забудь забронировать"
            ]
          ]
        },
        {
          "who": "Anna",
          "name": "Аня",
          "side": "left",
          "en": "Good point. I forgot to book last year and paid double!",
          "ru": "Точно. В прошлом году я забыла забронировать и заплатила вдвое!",
          "words": [
            [
              "forgot to book",
              "забыла забронировать"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Exactly. So this time, plan to relax — properly.",
          "ru": "Вот именно. Так что в этот раз планируй отдыхать — по-настоящему.",
          "words": [
            [
              "plan to relax",
              "планируй отдыхать"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Модели дня — глагол + -ing или to. Повтори вслух как формулы.",
      "items": [
        {
          "en": "enjoy doing",
          "ru": "любить/наслаждаться (делать)",
          "ex": "I enjoy reading."
        },
        {
          "en": "avoid doing",
          "ru": "избегать (делать)",
          "ex": "Avoid eating late."
        },
        {
          "en": "decide to do",
          "ru": "решить (сделать)",
          "ex": "She decided to stay."
        },
        {
          "en": "promise to do",
          "ru": "обещать (сделать)",
          "ex": "He promised to call."
        },
        {
          "en": "stop doing",
          "ru": "перестать (делать)",
          "ex": "He stopped smoking."
        },
        {
          "en": "stop to do",
          "ru": "остановиться, чтобы (сделать)",
          "ex": "He stopped to rest."
        },
        {
          "en": "remember to do",
          "ru": "не забыть (сделать)",
          "ex": "Remember to lock up."
        },
        {
          "en": "remember doing",
          "ru": "помнить, что (сделал)",
          "ex": "I remember meeting her."
        },
        {
          "en": "be good at doing",
          "ru": "быть хорошим в (чём-то)",
          "ex": "She's good at drawing."
        },
        {
          "en": "give up doing",
          "ru": "бросить (занятие)",
          "ex": "I gave up drinking coffee."
        },
        {
          "en": "manage to do",
          "ru": "суметь, удаться (сделать)",
          "ex": "I managed to fix it."
        },
        {
          "en": "suggest doing",
          "ru": "предложить (сделать)",
          "ex": "He suggested leaving."
        }
      ]
    },
    "reading": {
      "intro": "Короткий текст о том, как трудоголик учится отдыхать. Замечай -ing и to.",
      "title": "Learning to relax",
      "sentences": [
        "Max enjoys working, but he forgets to rest.",
        "Last year he decided to change.",
        "He stopped checking his email at night.",
        "He started going for long walks.",
        "At first he found it hard to relax.",
        "But he kept trying, and it worked.",
        "Now he remembers to take breaks.",
        "He still loves working — but he loves living too."
      ],
      "translation": "Макс любит работать, но забывает отдыхать. В прошлом году он решил измениться. Он перестал проверять почту по ночам. Он начал ходить на долгие прогулки. Сначала ему было трудно расслабиться. Но он продолжал стараться, и это сработало. Теперь он не забывает делать перерывы. Он всё ещё любит работать — но любит и жить."
    },
    "drag": {
      "intro": "Соедини модель с её смыслом.",
      "pairs": [
        [
          "enjoy doing",
          "любить делать (-ing)"
        ],
        [
          "want to do",
          "хотеть сделать (to)"
        ],
        [
          "stop doing",
          "бросить занятие"
        ],
        [
          "stop to do",
          "остановиться, чтобы сделать"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по моделям — шесть вопросов.",
      "items": [
        {
          "q": "«Мне нравится готовить.» —",
          "opts": [
            "I enjoy to cook",
            "I enjoy cooking",
            "I enjoy cook"
          ],
          "answer": 1,
          "explain": "enjoy + -ing: cooking."
        },
        {
          "q": "«Я хочу поступить в университет.» —",
          "opts": [
            "I want going to university",
            "I want to go to university",
            "I want go to university"
          ],
          "answer": 1,
          "explain": "want + to go."
        },
        {
          "q": "«Не забудь запереть дверь.» —",
          "opts": [
            "Remember locking the door",
            "Remember to lock the door"
          ],
          "answer": 1,
          "explain": "обязанность впереди → remember to lock."
        },
        {
          "q": "«Он бросил пить кофе.» —",
          "opts": [
            "He stopped to drink coffee",
            "He stopped drinking coffee"
          ],
          "answer": 1,
          "explain": "бросить занятие → stop drinking."
        },
        {
          "q": "После предлога (good at) идёт —",
          "opts": [
            "to do",
            "-ing",
            "base form"
          ],
          "answer": 1,
          "explain": "после любого предлога — только -ing."
        },
        {
          "q": "«Попробуй открыть окно (как эксперимент).» —",
          "opts": [
            "Try to open the window",
            "Try opening the window"
          ],
          "answer": 1,
          "explain": "эксперимент → try opening."
        }
      ]
    },
    "picture": {
      "intro": "Опиши, что человек любит делать, бросил делать и решил сделать.",
      "emoji": "📚🏃✈️",
      "prompt": "Опиши по картинке: что человек любит делать, что бросил и что решил сделать. Используй enjoy/stop/decide + правильную форму.",
      "hint": "Структуры: She enjoys… ; She stopped… ; She decided to… ; She's good at…",
      "example": "She enjoys reading and travelling. Last month she decided to learn Spanish. She stopped watching TV every night and started going to a language class. She's good at learning — she just needs to remember to practise!",
      "img": "img/b1/day-24.jpg",
      "credit": "Фото: Image Catalog · CC0 · <a href=\"https://www.flickr.com/photos/132795455@N08/18501292075\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Расскажи о своих привычках через эти модели.",
      "prompt": "Напиши 4–6 предложений о том, что ты любишь делать, что бросил(а) или хочешь начать. Используй минимум по одному: enjoy/avoid + -ing, want/decide + to, и одну пару stop doing / stop to do.",
      "hint": "Структуры: I enjoy… ; I've decided to… ; I stopped… ; I want to… ; I'm good at…",
      "example": "I enjoy learning new things, so this year I decided to start a course. I've stopped spending evenings on my phone, and now I keep practising English instead. I'm not very good at speaking yet, but I want to improve. I must remember to study a little every day!"
    }
  },
  "25": {
    "day": 25,
    "week": "04",
    "level": "B1",
    "themeRu": "Так… что",
    "themeEn": "so & such; too & enough",
    "intro": "«Такой большой, что…», «слишком жарко», «достаточно взрослый» — сегодня учимся усиливать и оценивать. За это в английском отвечают четыре слова: <b>so</b>, <b>such</b>, <b>too</b> и <b>enough</b>. Похожие на вид, они ставятся по разным правилам, и русский тут здорово путает. Разложим по полочкам, чтобы у тебя не вышло «so a big house» или «enough big».",
    "introAudio": "Такой большой, что…, слишком жарко, достаточно взрослый — сегодня учимся усиливать и оценивать. За это в английском отвечают четыре слова: so, such, too и enough. Похожие на вид, они ставятся по разным правилам, и русский тут здорово путает. Разложим по полочкам, чтобы у тебя не вышло so a big house или enough big.",
    "goals": [
      "различать <b>so</b> + прилагательное и <b>such</b> + (a) существительное",
      "строить результат: so/such … <b>that</b> …",
      "использовать <b>too</b> (слишком, с минусом) и <b>enough</b> (достаточно) с правильным порядком слов",
      "не путать too и very, и ставить enough после прилагательного: big enough, не «enough big»"
    ],
    "learned": [
      "Различил(а) <b>so</b> + прилагательное и <b>such</b> + (a) существительное",
      "Построил(а) результат: so/such … <b>that</b> …",
      "Использовал(а) <b>too</b> (слишком, с минусом) и <b>enough</b> (достаточно) с правильным порядком слов",
      "Перестал(а) путать too и very и поставил(а) enough после прилагательного: big enough, не «enough big»"
    ],
    "review": {
      "intro": "Always-on: вспомним сравнение из A2 и базовое too/enough — на них вырастает сегодняшняя тема.",
      "introAudio": "Повторим сравнение из A2 и базовое too и enough — на них вырастает сегодняшняя тема.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> сравнительная степень длинного прилагательного.",
          "q": "«Эта машина дороже.» —",
          "opts": [
            "This car is more expensive",
            "This car is expensiver",
            "This car is most expensive"
          ],
          "answer": 0,
          "explain": "длинное прилагательное → more expensive."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> «слишком» → too.",
          "q": "«Эта сумка слишком тяжёлая.» —",
          "opts": [
            "This bag is too heavy",
            "This bag is enough heavy",
            "This bag is heavy too"
          ],
          "answer": 0,
          "explain": "«слишком» (перебор) → too heavy."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> прилагательное + enough.",
          "q": "Собери: «Ты достаточно взрослый.»",
          "want": "You are old enough",
          "answer": "You are old enough"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · so и such",
        "title": "<em>so</em> + прилагательное, <em>such</em> + (a) существительное",
        "paras": [
          "Оба слова усиливают, но цепляются к разному. <b>so</b> ставится перед <b>прилагательным или наречием</b> (без существительного): <b>so big, so quickly, so tired</b>. <b>such</b> ставится перед <b>существительным</b> (часто с прилагательным): <b>such a big house, such nice people</b>.",
          "Ключевой момент с артиклем: <b>such a/an</b> + прилагательное + существительное в единственном числе: <b>such a good idea</b>. Во множественном или с неисчисляемым — без артикля: <b>such good ideas, such bad weather</b>.",
          "Проверка: есть существительное сразу после? → such. Только прилагательное/наречие? → so."
        ],
        "audio": "Оба слова усиливают, но цепляются к разному. so — перед прилагательным или наречием без существительного: so big, so tired. such — перед существительным: such a big house, such nice people. С единственным числом — such a, с множественным и неисчисляемым — без a.",
        "table": {
          "rows": [
            [
              "so + прил./нареч.",
              "so big · so quickly <button class=\"play\" data-say=\"so big\">🔊</button>"
            ],
            [
              "such a/an + (прил.) сущ. (ед.)",
              "such a big house"
            ],
            [
              "such + (прил.) сущ. (мн./неисч.)",
              "such nice people · such bad weather"
            ],
            [
              "проверка",
              "есть сущ.? → such; нет → so"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Дом такой большой.",
            "en": "The house is <b>so big</b>.",
            "gloss": "so + прил.",
            "say": "The house is so big."
          },
          {
            "ru": "Это такой большой дом.",
            "en": "It's <b>such a big house</b>.",
            "gloss": "such a + сущ.",
            "say": "It's such a big house."
          },
          {
            "ru": "Они такие приятные люди.",
            "en": "They're <b>such nice people</b>.",
            "gloss": "such + мн.ч., без a",
            "say": "They're such nice people."
          },
          {
            "ru": "Сегодня такая плохая погода.",
            "en": "It's <b>such bad weather</b> today.",
            "gloss": "such + неисч., без a",
            "say": "It's such bad weather today."
          }
        ],
        "mistakes": [
          {
            "wrong": "It's so a big house",
            "right": "It's <b>such a big house</b>",
            "why": "перед существительным — such (a), не so"
          },
          {
            "wrong": "such big",
            "right": "<b>so big</b> (или such a big house)",
            "why": "перед голым прилагательным — so; such требует существительного"
          }
        ],
        "mnemonic": "🔑 Голое прилагательное → so. Существительное рядом → such (a).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> есть сущ. (idea) → such a.",
            "q": "«Это такая хорошая идея!» —",
            "opts": [
              "It's so a good idea!",
              "It's such a good idea!",
              "It's such good idea!"
            ],
            "answer": 1,
            "explain": "сущ. в ед.ч. → such a good idea."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> голое прилагательное → so.",
            "q": "«Ты такой добрый.» —",
            "opts": [
              "You are so kind",
              "You are such kind",
              "You are such a kind"
            ],
            "answer": 0,
            "explain": "kind — голое прилагательное → so kind."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> мн. число → such без a.",
            "q": "«Это были такие длинные дни.» —",
            "opts": [
              "They were so long days",
              "They were such a long days",
              "They were such long days"
            ],
            "answer": 2,
            "explain": "мн. число → such long days, без a."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> such a + прил. + сущ.",
            "q": "Собери: «Это такой вкусный торт.»",
            "want": "It's such a tasty cake",
            "answer": "It's such a tasty cake"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · результат",
        "title": "<em>so/such … that</em> — настолько…, что…",
        "paras": [
          "Часто за so/such идёт <b>результат</b> через <b>that</b>: «настолько…, что произошло вот это». <b>The house was so big that we got lost.</b> = Дом был такой большой, что мы заблудились.",
          "Схема та же: <b>so + прилагательное + that</b>, <b>such a + существительное + that</b>. <b>It was such a good film that I watched it twice.</b>",
          "В разговоре <b>that</b> часто опускают: <b>I was so tired (that) I fell asleep.</b> Смысл «такой…, что» сохраняется."
        ],
        "audio": "Часто за so и such идёт результат через that: настолько…, что. The house was so big that we got lost. It was such a good film that I watched it twice. В разговоре that часто опускают.",
        "table": {
          "rows": [
            [
              "so + прил. + that",
              "so tired that I slept"
            ],
            [
              "such a + сущ. + that",
              "such a big house that we got lost"
            ],
            [
              "that можно опустить",
              "so tired I fell asleep"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я так устал, что заснул.",
            "en": "I was <b>so tired that</b> I fell asleep.",
            "gloss": "so + прил. + that",
            "say": "I was so tired that I fell asleep."
          },
          {
            "ru": "Это был такой хороший фильм, что я посмотрел дважды.",
            "en": "It was <b>such a good film that</b> I watched it twice.",
            "gloss": "such a + сущ. + that",
            "say": "It was such a good film that I watched it twice."
          },
          {
            "ru": "Было так холодно, что замёрзла река.",
            "en": "It was <b>so cold that</b> the river froze.",
            "say": "It was so cold that the river froze."
          }
        ],
        "mistakes": [
          {
            "wrong": "It was so a good film that…",
            "right": "It was <b>such a</b> good film that…",
            "why": "перед существительным — such a, даже в конструкции с that"
          },
          {
            "wrong": "such big that we got lost",
            "right": "<b>so big that</b> we got lost",
            "why": "big — голое прилагательное → so … that"
          }
        ],
        "mnemonic": "🎯 so + прил. + that · such a + сущ. + that = «настолько…, что».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> голое прилагательное → so … that.",
            "q": "«Было так жарко, что мы остались дома.» —",
            "opts": [
              "It was such hot that we stayed home",
              "It was so hot that we stayed home"
            ],
            "answer": 1,
            "explain": "hot — прилагательное → so hot that."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сущ. → such a … that.",
            "q": "«Это была такая длинная книга, что я не дочитал.» —",
            "opts": [
              "It was so a long book that I didn't finish",
              "It was such a long book that I didn't finish"
            ],
            "answer": 1,
            "explain": "сущ. book → such a long book that."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> so + прил. + that.",
            "q": "Собери: «Я был так занят, что забыл поесть.»",
            "want": "I was so busy that I forgot to eat",
            "answer": "I was so busy that I forgot to eat"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> such a … that.",
            "q": "Это был такой хороший день, что мы не хотели уходить.",
            "accept": [
              "it was such a good day that we didn't want to leave",
              "it was such a good day that we didn't want to go"
            ],
            "placeholder": "It was such a good day that ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · too и enough",
        "title": "<em>too</em> (слишком, минус) и <em>enough</em> (достаточно)",
        "paras": [
          "<b>too</b> = «слишком», с оттенком «это проблема, перебор»: <b>too hot</b> (слишком жарко — плохо), <b>too expensive</b> (слишком дорого — не куплю). Ставится <b>перед</b> прилагательным/наречием.",
          "<b>enough</b> = «достаточно». С прилагательным/наречием оно идёт <b>после</b>: <b>old enough, fast enough</b>. А вот с существительным — <b>перед</b>: <b>enough money, enough time</b>.",
          "Часто за ними идёт <b>to do</b>: <b>too tired to walk</b> (слишком устал, чтобы идти), <b>old enough to drive</b> (достаточно взрослый, чтобы водить)."
        ],
        "audio": "too — слишком, с оттенком перебор, это проблема. Ставится перед прилагательным: too hot, too expensive. enough — достаточно. С прилагательным идёт после: old enough, fast enough. С существительным — перед: enough money. Часто за ними идёт to do: too tired to walk, old enough to drive.",
        "table": {
          "rows": [
            [
              "too + прил.",
              "too hot · too expensive"
            ],
            [
              "прил. + enough",
              "old enough · fast enough"
            ],
            [
              "enough + сущ.",
              "enough money · enough time"
            ],
            [
              "+ to do",
              "too tired to walk · old enough to drive"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Кофе слишком горячий.",
            "en": "The coffee is <b>too hot</b>.",
            "gloss": "too + прил.",
            "say": "The coffee is too hot."
          },
          {
            "ru": "Ты достаточно взрослый, чтобы водить.",
            "en": "You're <b>old enough to drive</b>.",
            "gloss": "прил. + enough + to",
            "say": "You're old enough to drive."
          },
          {
            "ru": "У нас недостаточно времени.",
            "en": "We don't have <b>enough time</b>.",
            "gloss": "enough + сущ.",
            "say": "We don't have enough time."
          },
          {
            "ru": "Я слишком устал, чтобы готовить.",
            "en": "I'm <b>too tired to cook</b>.",
            "gloss": "too + прил. + to",
            "say": "I'm too tired to cook."
          }
        ],
        "mistakes": [
          {
            "wrong": "You are enough old",
            "right": "You are <b>old enough</b>",
            "why": "enough идёт ПОСЛЕ прилагательного"
          },
          {
            "wrong": "It's too much expensive",
            "right": "It's <b>too expensive</b>",
            "why": "too само значит «слишком», «much» лишнее"
          }
        ],
        "mnemonic": "📏 too + прил. (минус) · прил. + enough · enough + сущ.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «слишком» → too + прил.",
            "q": "«Этот чай слишком сладкий.» —",
            "opts": [
              "This tea is enough sweet",
              "This tea is too sweet",
              "This tea is sweet too"
            ],
            "answer": 1,
            "explain": "«слишком» → too sweet."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> enough после прилагательного.",
            "q": "«Ты достаточно высокий.» —",
            "opts": [
              "You are enough tall",
              "You are tall enough",
              "You are too tall"
            ],
            "answer": 1,
            "explain": "enough идёт после: tall enough."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> enough перед существительным.",
            "q": "«У меня недостаточно денег.» —",
            "opts": [
              "I don't have money enough",
              "I don't have enough money"
            ],
            "answer": 1,
            "explain": "с существительным enough идёт перед: enough money."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> too + прил. + to do.",
            "q": "Собери: «Я слишком занят, чтобы помочь.»",
            "want": "I'm too busy to help",
            "answer": "I'm too busy to help"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "too ≠ very · <em>such a</em> big · <em>big enough</em>",
        "paras": [
          "Три классические ошибки русскоязычных. Первая: <b>too ≠ very</b>. <b>very</b> — просто «очень» (нейтрально, часто похвала), <b>too</b> — «слишком», всегда с минусом. «Очень вкусно» = <b>very tasty</b> (хорошо!), а <b>too tasty</b> прозвучит странно, будто это плохо.",
          "Вторая: «so a big house» — нельзя. Перед существительным с артиклем — <b>such a</b>: <b>such a big house</b>. so живёт только при голом прилагательном (so big).",
          "Третья: порядок с enough. По-русски «достаточно большой», и хочется сказать «enough big». Но в английском <b>enough</b> идёт ПОСЛЕ прилагательного: <b>big enough</b>."
        ],
        "audio": "Три классические ошибки. Первая: too не равно very. very — просто очень, нейтрально. too — слишком, всегда с минусом. Вторая: нельзя so a big house, перед существительным — such a. Третья: enough идёт после прилагательного: big enough, не enough big.",
        "table": {
          "rows": [
            [
              "very (нейтр.) ≠ too (минус)",
              "very good ✓ · too good — странно"
            ],
            [
              "перед сущ. → such a",
              "such a big house, не «so a»"
            ],
            [
              "прил. + enough",
              "big enough, не «enough big»"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Фильм очень хороший (похвала).",
            "en": "The film is <b>very good</b>.",
            "gloss": "very = нейтр. «очень»",
            "say": "The film is very good."
          },
          {
            "ru": "Кофе слишком крепкий (перебор).",
            "en": "The coffee is <b>too strong</b>.",
            "gloss": "too = минус",
            "say": "The coffee is too strong."
          },
          {
            "ru": "Это такой красивый город.",
            "en": "It's <b>such a beautiful city</b>.",
            "gloss": "such a + сущ.",
            "say": "It's such a beautiful city."
          },
          {
            "ru": "Комната достаточно большая.",
            "en": "The room is <b>big enough</b>.",
            "gloss": "прил. + enough",
            "say": "The room is big enough."
          }
        ],
        "mistakes": [
          {
            "wrong": "The food is too delicious (как похвала)",
            "right": "The food is <b>very</b> delicious / very good",
            "why": "похвала → very; too = «слишком», звучит как проблема"
          },
          {
            "wrong": "It's so a nice day",
            "right": "It's <b>such a nice day</b>",
            "why": "перед сущ. — such a, не so a"
          },
          {
            "wrong": "The box is enough big",
            "right": "The box is <b>big enough</b>",
            "why": "enough — после прилагательного"
          }
        ],
        "mnemonic": "⚠️ very=похвала, too=перебор · such a + сущ · прилагательное + enough.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> похвала → very.",
            "q": "Похвала: «Это место очень красивое.» —",
            "opts": [
              "This place is too beautiful",
              "This place is very beautiful"
            ],
            "answer": 1,
            "explain": "похвала (нейтрально) → very beautiful."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> перед сущ. → such a.",
            "q": "«Сегодня такой прекрасный день!» —",
            "opts": [
              "It's so a wonderful day!",
              "It's such a wonderful day!"
            ],
            "answer": 1,
            "explain": "перед сущ. day → such a wonderful day."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> enough после прилагательного.",
            "q": "«Эта коробка достаточно большая.» —",
            "opts": [
              "This box is enough big",
              "This box is big enough"
            ],
            "answer": 1,
            "explain": "enough после прилагательного: big enough."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> too + прил.",
            "q": "Кофе слишком крепкий. (strong)",
            "accept": [
              "the coffee is too strong",
              "coffee is too strong"
            ],
            "placeholder": "The coffee is too ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том выбирают квартиру. Слушай so / such / too / enough в деле.",
      "lines": [
        {
          "who": "A",
          "en": "Look at this flat — it's such a bright place!",
          "ru": "Смотри на эту квартиру — такое светлое место!"
        },
        {
          "who": "B",
          "en": "It is bright. But isn't it too small for us?",
          "ru": "Светлое, да. Но не слишком ли оно маленькое для нас?"
        },
        {
          "who": "A",
          "en": "It's small, but it's big enough for two.",
          "ru": "Маленькое, но достаточно большое для двоих."
        },
        {
          "who": "B",
          "en": "The rent is so high, though. I'm not sure.",
          "ru": "Только аренда такая высокая. Не уверен."
        },
        {
          "who": "A",
          "en": "It's not too expensive if we share it.",
          "ru": "Не слишком дорого, если поделим."
        },
        {
          "who": "B",
          "en": "True. It's such a good location that we should take it.",
          "ru": "Верно. Такое удачное расположение, что надо брать."
        }
      ]
    },
    "vocab": {
      "intro": "Конструкции дня — so, such, too, enough и их частые спутники. Повтори вслух.",
      "items": [
        {
          "en": "so + adjective",
          "ru": "такой / настолько (+ прил.)",
          "ex": "It's so cold."
        },
        {
          "en": "such a + noun",
          "ru": "такой (+ сущ.)",
          "ex": "such a long day"
        },
        {
          "en": "so … that",
          "ru": "настолько…, что",
          "ex": "so tired that I slept"
        },
        {
          "en": "such a … that",
          "ru": "такой…, что",
          "ex": "such a big house that we got lost"
        },
        {
          "en": "too",
          "ru": "слишком (с минусом)",
          "ex": "too expensive"
        },
        {
          "en": "enough",
          "ru": "достаточно",
          "ex": "old enough"
        },
        {
          "en": "very",
          "ru": "очень (нейтрально)",
          "ex": "very good"
        },
        {
          "en": "too … to do",
          "ru": "слишком…, чтобы",
          "ex": "too tired to walk"
        },
        {
          "en": "enough to do",
          "ru": "достаточно, чтобы",
          "ex": "old enough to vote"
        },
        {
          "en": "bright",
          "ru": "светлый, яркий",
          "ex": "such a bright room"
        },
        {
          "en": "the rent",
          "ru": "арендная плата",
          "ex": "The rent is too high."
        },
        {
          "en": "a location",
          "ru": "расположение, место",
          "ex": "such a good location"
        }
      ]
    },
    "reading": {
      "intro": "Девушка ищет идеальную квартиру. Почти каждое предложение — про so, such, too или enough.",
      "title": "Too much, not enough",
      "sentences": [
        "Finding a flat in this city is such a nightmare.",
        "The first one was so small that my bed didn't fit.",
        "The second was nice but too expensive for me.",
        "The third didn't have enough light.",
        "The fourth was such a long way from work.",
        "Then I found one that was just right.",
        "It's not too big and not too small.",
        "It's bright enough and cheap enough — finally!"
      ],
      "translation": "Найти квартиру в этом городе — такой кошмар. Первая была такой маленькой, что моя кровать не влезла. Вторая была хорошей, но слишком дорогой для меня. В третьей было недостаточно света. Четвёртая была так далеко от работы. Потом я нашла как раз ту самую. Она не слишком большая и не слишком маленькая. Достаточно светлая и достаточно дешёвая — наконец-то!"
    },
    "drag": {
      "intro": "Соедини конструкцию с её правилом.",
      "pairs": [
        [
          "so big",
          "so + голое прилагательное"
        ],
        [
          "such a big house",
          "such a + существительное"
        ],
        [
          "too hot",
          "слишком (с минусом)"
        ],
        [
          "old enough",
          "прилагательное + enough"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — шесть вопросов, и неделя 4 движется дальше.",
      "items": [
        {
          "q": "«Это такая хорошая идея!» —",
          "opts": [
            "It's so a good idea!",
            "It's such a good idea!",
            "It's such good idea!"
          ],
          "answer": 1,
          "explain": "сущ. в ед.ч. → such a good idea."
        },
        {
          "q": "«Дом такой большой.» —",
          "opts": [
            "The house is so big",
            "The house is such big",
            "The house is such a big"
          ],
          "answer": 0,
          "explain": "голое прилагательное → so big."
        },
        {
          "q": "«Этот чай слишком горячий.» —",
          "opts": [
            "This tea is enough hot",
            "This tea is too hot",
            "This tea is hot too"
          ],
          "answer": 1,
          "explain": "«слишком» → too hot."
        },
        {
          "q": "«Ты достаточно взрослый, чтобы водить.» —",
          "opts": [
            "You're enough old to drive",
            "You're old enough to drive"
          ],
          "answer": 1,
          "explain": "enough после прилагательного: old enough to drive."
        },
        {
          "q": "«Было так холодно, что замёрзла река.» —",
          "opts": [
            "It was such cold that the river froze",
            "It was so cold that the river froze"
          ],
          "answer": 1,
          "explain": "cold — прилагательное → so cold that."
        },
        {
          "q": "Похвала «очень вкусно» — какое слово?",
          "opts": [
            "too tasty",
            "very tasty"
          ],
          "answer": 1,
          "explain": "похвала (нейтрально) → very, не too."
        }
      ]
    },
    "picture": {
      "intro": "Опиши квартиру или комнату по картинке, оценивая её.",
      "emoji": "🏠📏💸",
      "prompt": "Опиши квартиру/комнату по картинке, оценивая её: so / such / too / enough.",
      "hint": "Структуры: It's such a bright room. · It's so small. · It's too expensive. · It's big enough for two.",
      "example": "It's such a cosy flat! The living room is so bright that you don't need lamps in the day. The kitchen is a bit too small, but it's big enough for one person. The rent isn't too high, so I think it's good enough for me.",
      "img": "img/b1/day-25.jpg",
      "credit": "Фото: whatsthatpicture · Public Domain · <a href=\"https://www.flickr.com/photos/24469639@N00/8322349305\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Опиши что-то, используя все четыре слова.",
      "prompt": "Напиши 4–6 предложений с описанием места, вещи или дня. Используй so, such, too и enough хотя бы по разу, и одну конструкцию с … that ….",
      "hint": "Структуры: It's such a… ; It's so… that… ; It's too… to… ; It's … enough to…",
      "example": "Yesterday was such a busy day that I had no time for lunch. The morning meeting was so long that everyone got tired. In the afternoon the office was too hot to think, and we didn't have enough fans. But by evening things were calm enough for me to finish my work. What a day!"
    }
  },
  "26": {
    "day": 26,
    "week": "04",
    "level": "B1",
    "themeRu": "Чем больше",
    "themeEn": "Comparatives advanced",
    "intro": "Сравнивать ты уже умеешь: <b>bigger</b>, <b>more interesting</b>, <b>the best</b> — это база A2. Сегодня поднимаем сравнение на уровень B1, а B1 — это <b>оттенки</b>: не просто «лучше», а «<b>намного</b> лучше», «<b>чуть-чуть</b> дешевле», плюс красивая связка «<b>чем больше — тем лучше</b>». Заодно обезвредим две классические русские ловушки: <b>very better</b> и <b>more cheaper</b>. Поехали.",
    "introAudio": "Сравнивать ты уже умеешь: bigger, more interesting, the best — это база A2. Сегодня поднимаем сравнение на уровень B1, а B1 — это оттенки: не просто «лучше», а «намного лучше», «чуть-чуть дешевле», плюс красивая связка «чем больше — тем лучше». Заодно обезвредим две классические русские ловушки: very better и more cheaper. Поехали.",
    "goals": [
      "усиливать сравнение: much / far / a bit / a little + сравнительная степень",
      "строить «чем…, тем…» по-английски: the more… the better",
      "перестать говорить «very better» и «more cheaper» — это русские ловушки",
      "описывать постепенные изменения: it is getting colder and colder"
    ],
    "learned": [
      "Усилил(а) сравнение: much / far / a bit / a little + сравнительная степень",
      "Построил(а) «чем…, тем…» по-английски: the more… the better",
      "Перестал(а) говорить «very better» и «more cheaper» — это русские ловушки",
      "Описал(а) постепенные изменения: it is getting colder and colder"
    ],
    "review": {
      "intro": "Сначала разомнём сравнение из A2: сравнительная и превосходная степень. На этом фундаменте мы и построим сегодняшние оттенки.",
      "introAudio": "Сначала разомнём сравнение из A2: сравнительная и превосходная степень. На этом фундаменте мы и построим сегодняшние оттенки.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери сравнительную степень (короткое прилагательное + -er than).",
          "q": "«Москва больше Санкт-Петербурга» —",
          "opts": [
            "Moscow is more big than St Petersburg",
            "Moscow is bigger than St Petersburg",
            "Moscow is the biggest than St Petersburg"
          ],
          "answer": 1,
          "explain": "Короткое прилагательное: big → <b>bigger</b> + than. Не «more big»."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери превосходную степень. Не забудь the.",
          "q": "Собери: «Это самый интересный фильм»",
          "want": "It is the most interesting film",
          "answer": "It is the most interesting film"
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши перевод. good → the best.",
          "q": "Это лучший день.",
          "accept": [
            "it is the best day",
            "this is the best day",
            "it's the best day"
          ],
          "placeholder": "It is the ... day"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · насколько больше",
        "title": "<em>much / far / a bit</em> + сравнительная степень",
        "paras": [
          "Чтобы сказать <b>насколько</b> больше или меньше, перед сравнительной степенью ставят усилитель. «Намного» — это <b>much</b>, <b>far</b> или <b>a lot</b>. «Чуть-чуть, немного» — это <b>a bit</b>, <b>a little</b> или <b>slightly</b>.",
          "<b>much better</b> (намного лучше), <b>far more expensive</b> (намного дороже), <b>a bit colder</b> (чуть холоднее), <b>slightly older</b> (немного старше).",
          "Главная ловушка: слово <b>very</b> со сравнительной степенью НЕ работает. «Очень лучше» нельзя сказать как «very better» — только <b>much better</b>. Запомни: very дружит с обычным прилагательным (very good), а much/far — со сравнительным (much better)."
        ],
        "audio": "Чтобы сказать насколько больше или меньше, перед сравнительной степенью ставят усилитель. Намного — это much, far или a lot. Чуть-чуть — a bit, a little или slightly. Much better, far more expensive, a bit colder. Главная ловушка: very со сравнительной степенью не работает. Очень лучше — это не very better, а much better.",
        "table": {
          "rows": [
            [
              "much / far / a lot + сравнит.",
              "намного: much better, far cheaper"
            ],
            [
              "a bit / a little / slightly + сравнит.",
              "чуть-чуть: a bit colder, slightly older"
            ],
            [
              "very + обычное прилаг.",
              "very good (но НЕ very better)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Этот телефон намного лучше.",
            "en": "This phone is <b>much better</b>.",
            "gloss": "much + better",
            "say": "This phone is much better."
          },
          {
            "ru": "Жизнь в центре намного дороже.",
            "en": "Life in the centre is <b>far more expensive</b>.",
            "gloss": "far + more expensive",
            "say": "Life in the centre is far more expensive."
          },
          {
            "ru": "Сегодня чуть холоднее, чем вчера.",
            "en": "It is <b>a bit colder</b> than yesterday.",
            "gloss": "a bit + colder",
            "say": "It is a bit colder than yesterday."
          }
        ],
        "mistakes": [
          {
            "wrong": "This phone is very better",
            "right": "This phone is <b>much better</b>",
            "why": "very не сочетается со сравнительной степенью — нужно much/far"
          },
          {
            "wrong": "It is more cold today",
            "right": "It is <b>a bit colder</b> today",
            "why": "cold — короткое: colder, а усилитель ставим отдельно"
          }
        ],
        "mnemonic": "📏 Насколько лучше? much / far (намного), a bit / slightly (чуть-чуть). Но never «very better».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный усилитель.",
            "q": "«Эта машина намного дороже» —",
            "opts": [
              "This car is very more expensive",
              "This car is much more expensive",
              "This car is more expensiver"
            ],
            "answer": 1,
            "explain": "Намного → <b>much</b> (или far) more expensive. Не «very»."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу про погоду.",
            "q": "Собери: «Сегодня чуть холоднее»",
            "want": "Today is a bit colder",
            "answer": "Today is a bit colder"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. good → better, усиль через much или far.",
            "q": "Этот телефон намного лучше.",
            "accept": [
              "this phone is much better",
              "this phone is far better"
            ],
            "placeholder": "This phone is ... better"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · одна степень, не две",
        "title": "Никаких <em>more cheaper</em>",
        "paras": [
          "Сравнительная степень делается ОДНИМ способом, а не двумя сразу. Короткое прилагательное берёт <b>-er</b>: cheap → <b>cheaper</b>, old → <b>older</b>. Длинное берёт <b>more</b>: expensive → <b>more expensive</b>, difficult → <b>more difficult</b>.",
          "Нельзя совмещать оба: <b>more cheaper</b>, <b>more better</b>, <b>more expensiver</b> — всё это ошибки. Это прямой след русского «более дешевле»: по-русски иногда удваивают, по-английски — никогда.",
          "Запомни исключения, у которых форма своя: good → <b>better</b>, bad → <b>worse</b>, far → <b>further/farther</b>. И снова: просто better, без «more»."
        ],
        "audio": "Сравнительная степень делается одним способом, а не двумя. Короткое прилагательное берёт -er: cheaper, older. Длинное берёт more: more expensive, more difficult. Нельзя совмещать: more cheaper, more better — это ошибки, след русского «более дешевле». Исключения: good — better, bad — worse. И снова: просто better, без more.",
        "table": {
          "rows": [
            [
              "короткое → -er",
              "cheaper, older, bigger (НЕ more cheaper)"
            ],
            [
              "длинное → more",
              "more expensive, more difficult"
            ],
            [
              "исключения",
              "good → better · bad → worse"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Этот вариант дешевле.",
            "en": "This option is <b>cheaper</b>.",
            "gloss": "cheap → cheaper, без more",
            "say": "This option is cheaper."
          },
          {
            "ru": "Эта задача сложнее.",
            "en": "This task is <b>more difficult</b>.",
            "gloss": "длинное → more difficult",
            "say": "This task is more difficult."
          },
          {
            "ru": "Её работа лучше.",
            "en": "Her work is <b>better</b>.",
            "gloss": "good → better, без more",
            "say": "Her work is better."
          }
        ],
        "mistakes": [
          {
            "wrong": "This option is more cheaper",
            "right": "This option is <b>cheaper</b>",
            "why": "либо -er, либо more — не оба сразу"
          },
          {
            "wrong": "Her work is more better",
            "right": "Her work is <b>better</b>",
            "why": "better — уже сравнительная степень, more лишнее"
          }
        ],
        "mnemonic": "⚠️ Одна степень за раз: cheaper ИЛИ more expensive. Never more cheaper, never more better.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди верную форму короткого прилагательного.",
            "q": "«Этот вариант дешевле» —",
            "opts": [
              "This option is more cheaper",
              "This option is cheaper",
              "This option is more cheap"
            ],
            "answer": 1,
            "explain": "cheap короткое → <b>cheaper</b>, без more."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери сравнительную форму прилагательного good.",
            "q": "«Её работа лучше» —",
            "opts": [
              "Her work is more better",
              "Her work is better",
              "Her work is gooder"
            ],
            "answer": 1,
            "explain": "good → <b>better</b>, без more и без «gooder»."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу с длинным прилагательным.",
            "q": "Собери: «Эта задача сложнее»",
            "want": "This task is more difficult",
            "answer": "This task is more difficult"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · чем… тем…",
        "title": "<em>the more you practise, the better you get</em>",
        "paras": [
          "Русское «чем больше — тем лучше» по-английски строится зеркально: <b>the + сравнительная …, the + сравнительная …</b>. Сравнительное слово выносится вперёд каждой половины, и перед ним обязательно <b>the</b> — в обеих частях.",
          "<b>The more</b> you practise, <b>the better</b> you get. = Чем больше практикуешься, тем лучше получается. <b>The harder</b> you work, <b>the more</b> you earn. = Чем усерднее работаешь, тем больше зарабатываешь.",
          "Главная ловушка: без <b>the</b> конструкция рассыпается. «More you read, more you know» — ошибка. Нужно <b>The more you read, the more you know.</b> Есть и короткий разговорный вариант: <b>The more, the better.</b> (Чем больше, тем лучше.)"
        ],
        "audio": "Русское «чем больше — тем лучше» строится зеркально: the плюс сравнительная, the плюс сравнительная. Сравнительное слово выносится вперёд, и перед ним обязательно the в обеих частях. The more you practise, the better you get. The harder you work, the more you earn. Ловушка: без the конструкция рассыпается. Не «more you read, more you know», а The more you read, the more you know.",
        "table": {
          "rows": [
            [
              "The more you practise,",
              "the better you get. (Чем больше… тем…)"
            ],
            [
              "The harder you work,",
              "the more you earn."
            ],
            [
              "The older I get,",
              "the less I worry."
            ],
            [
              "The more, the better.",
              "Чем больше, тем лучше. (идиома)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Чем больше практикуешься, тем лучше получается.",
            "en": "<b>The more</b> you practise, <b>the better</b> you get.",
            "gloss": "the + comparative ×2",
            "say": "The more you practise, the better you get."
          },
          {
            "ru": "Чем усерднее работаешь, тем больше зарабатываешь.",
            "en": "<b>The harder</b> you work, <b>the more</b> you earn.",
            "say": "The harder you work, the more you earn."
          },
          {
            "ru": "Чем старше я становлюсь, тем меньше волнуюсь.",
            "en": "<b>The older</b> I get, <b>the less</b> I worry.",
            "say": "The older I get, the less I worry."
          }
        ],
        "mistakes": [
          {
            "wrong": "More you read, more you know",
            "right": "<b>The</b> more you read, <b>the</b> more you know",
            "why": "в обеих частях нужен the перед сравнительным словом"
          },
          {
            "wrong": "The more you practise, the more better you get",
            "right": "The more you practise, <b>the better</b> you get",
            "why": "better — уже сравнительная, the more better — двойная степень"
          }
        ],
        "mnemonic": "🔁 Чем… тем… = the + сравнит., the + сравнит. Два the — обязательно.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери конструкцию с двумя the.",
            "q": "«Чем больше читаешь, тем больше знаешь» —",
            "opts": [
              "More you read, more you know",
              "The more you read, the more you know",
              "The more you read, the more better you know"
            ],
            "answer": 1,
            "explain": "Нужны два the: <b>The more… the more…</b>"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери «чем усерднее — тем больше». Два the обязательны.",
            "q": "Собери: «Чем усерднее работаешь, тем больше зарабатываешь»",
            "want": "The harder you work the more you earn",
            "answer": "The harder you work the more you earn"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. less = меньше.",
            "q": "Чем старше я становлюсь, тем меньше волнуюсь.",
            "accept": [
              "the older i get the less i worry"
            ],
            "placeholder": "The older I get, the less ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · всё больше и больше",
        "title": "<em>more and more; even better</em>",
        "paras": [
          "Чтобы показать постепенное изменение («всё холоднее и холоднее»), сравнительную степень удваивают через <b>and</b>: <b>colder and colder</b>, <b>better and better</b>. С длинными прилагательными — <b>more and more</b> + слово: <b>more and more difficult</b>, <b>more and more people</b>.",
          "Слово <b>even</b> перед сравнительной степенью значит «ещё»: <b>even better</b> (ещё лучше), <b>even more expensive</b> (ещё дороже). Это удобный способ усилить сравнение в разговоре.",
          "Сравни: <b>It is getting colder and colder.</b> (Становится всё холоднее.) <b>This one is even better.</b> (Этот ещё лучше.) Оба оборота звучат естественно и очень по-B1."
        ],
        "audio": "Чтобы показать постепенное изменение, сравнительную степень удваивают через and: colder and colder, better and better. С длинными — more and more: more and more difficult, more and more people. Слово even перед сравнительной значит «ещё»: even better, even more expensive. It is getting colder and colder. This one is even better.",
        "table": {
          "rows": [
            [
              "-er and -er",
              "colder and colder (всё холоднее)"
            ],
            [
              "more and more + слово",
              "more and more people (всё больше людей)"
            ],
            [
              "even + сравнит.",
              "even better (ещё лучше)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Становится всё холоднее и холоднее.",
            "en": "It is getting <b>colder and colder</b>.",
            "gloss": "-er and -er",
            "say": "It is getting colder and colder."
          },
          {
            "ru": "Всё больше и больше людей учат английский.",
            "en": "<b>More and more</b> people learn English.",
            "gloss": "more and more + слово",
            "say": "More and more people learn English."
          },
          {
            "ru": "Этот вариант ещё лучше.",
            "en": "This option is <b>even better</b>.",
            "gloss": "even + сравнит.",
            "say": "This option is even better."
          }
        ],
        "mistakes": [
          {
            "wrong": "It is getting cold and cold",
            "right": "It is getting <b>colder and colder</b>",
            "why": "удваиваем именно сравнительную форму, а не обычную"
          },
          {
            "wrong": "This one is more better",
            "right": "This one is <b>even better</b>",
            "why": "«ещё лучше» = even better, не «more better»"
          }
        ],
        "mnemonic": "📈 Постепенно: colder and colder / more and more. Ещё сильнее: even better.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери удвоение сравнительной степени.",
            "q": "«Становится всё теплее» —",
            "opts": [
              "It is getting warm and warm",
              "It is getting warmer and warmer",
              "It is getting more warm and warm"
            ],
            "answer": 1,
            "explain": "Удваиваем сравнительную: <b>warmer and warmer</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу о растущем числе людей.",
            "q": "Собери: «Всё больше и больше людей»",
            "want": "More and more people",
            "answer": "More and more people"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. «ещё лучше» через even.",
            "q": "Эта книга даже лучше.",
            "accept": [
              "this book is even better"
            ],
            "placeholder": "This book is even ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Аня и Том выбирают, в какой город переехать. Слушай, как работают «намного», «чуть-чуть» и «чем… тем…». Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "This city is much bigger, but it's also far more expensive.",
          "ru": "Этот город намного больше, но и намного дороже.",
          "words": [
            [
              "much bigger",
              "намного больше"
            ],
            [
              "far more expensive",
              "намного дороже"
            ]
          ]
        },
        {
          "who": "B",
          "name": "Том",
          "side": "right",
          "en": "True. The bigger the city, the higher the rent.",
          "ru": "Верно. Чем больше город, тем выше аренда.",
          "words": [
            [
              "the bigger… the higher",
              "чем больше… тем выше"
            ],
            [
              "rent",
              "аренда"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "The other town is a bit smaller and slightly cheaper.",
          "ru": "Другой городок чуть меньше и немного дешевле.",
          "words": [
            [
              "a bit smaller",
              "чуть меньше"
            ],
            [
              "slightly cheaper",
              "немного дешевле"
            ]
          ]
        },
        {
          "who": "B",
          "name": "Том",
          "side": "right",
          "en": "And life there is getting better and better, they say.",
          "ru": "И жизнь там, говорят, становится всё лучше и лучше.",
          "words": [
            [
              "better and better",
              "всё лучше и лучше"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "Then it's an easy choice — the more I think, the more I like it.",
          "ru": "Тогда выбор простой — чем больше думаю, тем больше нравится.",
          "words": [
            [
              "the more… the more",
              "чем больше… тем больше"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова и обороты дня — усилители сравнения и лексика про изменения. Повтори вслух.",
      "items": [
        {
          "en": "far",
          "ru": "намного (усилитель)",
          "ex": "This is far more interesting."
        },
        {
          "en": "slightly",
          "ru": "слегка, немного",
          "ex": "It is slightly colder today."
        },
        {
          "en": "gradually",
          "ru": "постепенно",
          "ex": "It is gradually getting better."
        },
        {
          "en": "to improve",
          "ru": "улучшаться, становиться лучше",
          "ex": "Your English is improving fast."
        },
        {
          "en": "the gap",
          "ru": "разрыв, разница",
          "ex": "The gap between them is getting wider."
        },
        {
          "en": "effort",
          "ru": "усилие",
          "ex": "The more effort you make, the better the result."
        },
        {
          "en": "to earn",
          "ru": "зарабатывать",
          "ex": "The harder you work, the more you earn."
        },
        {
          "en": "to worry",
          "ru": "волноваться, переживать",
          "ex": "The older I get, the less I worry."
        },
        {
          "en": "crowded",
          "ru": "переполненный (людьми)",
          "ex": "The city is getting more and more crowded."
        },
        {
          "en": "twice as much",
          "ru": "вдвое больше",
          "ex": "It costs twice as much."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай короткий текст про обучение. Везде усиленное сравнение и «чем… тем…».",
      "title": "The more, the better",
      "sentences": [
        "Learning a language is a long road, but it gets easier and easier.",
        "At first, every lesson feels much harder than the last one.",
        "Then something changes: the more you practise, the more natural it feels.",
        "The harder you work in the first months, the faster you improve later.",
        "A big city offers far more chances to speak than a small town.",
        "But even a little practice every day is much better than one long lesson a week.",
        "The older I get, the more I believe in small, steady steps.",
        "And the more mistakes you make, the more you actually learn."
      ],
      "translation": "Изучение языка — долгая дорога, но идти становится всё легче и легче. Поначалу каждый урок кажется намного труднее предыдущего. Потом что-то меняется: чем больше практикуешься, тем естественнее всё ощущается. Чем усерднее работаешь в первые месяцы, тем быстрее прогрессируешь потом. Большой город даёт намного больше возможностей говорить, чем маленький городок. Но даже немного практики каждый день намного лучше одного длинного урока раз в неделю. Чем старше я становлюсь, тем больше верю в маленькие, размеренные шаги. И чем больше ошибок ты делаешь, тем больше на самом деле учишься."
    },
    "drag": {
      "intro": "Соедини английский оборот сравнения с переводом.",
      "pairs": [
        [
          "much better",
          "намного лучше"
        ],
        [
          "a bit colder",
          "чуть холоднее"
        ],
        [
          "far more expensive",
          "намного дороже"
        ],
        [
          "the more, the better",
          "чем больше, тем лучше"
        ],
        [
          "worse and worse",
          "всё хуже и хуже"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по продвинутому сравнению. Пять вопросов — и день закрыт.",
      "items": [
        {
          "q": "«Намного лучше» —",
          "opts": [
            "very better",
            "much better",
            "more better"
          ],
          "answer": 1,
          "explain": "Намного → <b>much</b> (или far) better. Не very, не more."
        },
        {
          "q": "«Этот вариант дешевле» —",
          "opts": [
            "more cheaper",
            "cheaper",
            "the cheapest"
          ],
          "answer": 1,
          "explain": "cheap короткое → <b>cheaper</b>, без more."
        },
        {
          "q": "«Чем больше практикуешься, тем лучше» —",
          "opts": [
            "More you practise, better you get",
            "The more you practise, the better you get",
            "The more you practise, the more better you get"
          ],
          "answer": 1,
          "explain": "Два the: <b>The more… the better…</b>"
        },
        {
          "q": "«Становится всё теплее» —",
          "opts": [
            "warmer and warmer",
            "more warm and warm",
            "warm and warmer"
          ],
          "answer": 0,
          "explain": "Удваиваем сравнительную: <b>warmer and warmer</b>."
        },
        {
          "q": "«Этот телефон даже лучше» —",
          "opts": [
            "This phone is even better",
            "This phone is even gooder",
            "This phone is more better"
          ],
          "answer": 0,
          "explain": "«Ещё лучше» = <b>even better</b>."
        }
      ]
    },
    "picture": {
      "intro": "Сравни два места на картинке — большой город и тихий городок. Используй продвинутое сравнение.",
      "emoji": "🏙️⚖️🏡",
      "prompt": "Сравни большой город и маленький городок. Используй much / far / a bit и «the more…, the…».",
      "hint": "Структуры: The city is far bigger…; The town is a bit quieter…; The more I think, the more I like…",
      "example": "The city is far bigger and much more crowded. The town is a bit quieter and slightly cheaper. The more I think about it, the more I like the small town.",
      "img": "img/b1/day-26.jpg",
      "credit": "Фото: snelson951 · CC0 · <a href=\"https://www.flickr.com/photos/106274066@N07/54223379342\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Теперь твоя очередь — сравни две вещи в своей жизни.",
      "prompt": "Напиши 4–6 предложений, сравнивая два города, две работы или два хобби. Используй much/far/a bit + сравнит. и хотя бы одно «the more…, the…».",
      "hint": "Структуры: A is much bigger than B; A is a bit more expensive; The more I…, the more I…; It is getting better and better.",
      "example": "My new job is much more interesting than my old one, but it is also far more difficult. The office is a bit further from home, so I get up slightly earlier. Still, the more I learn here, the more confident I feel. Honestly, my life is getting better and better."
    }
  },
  "27": {
    "day": 27,
    "week": "04",
    "level": "B1",
    "themeRu": "Включи это",
    "themeEn": "Phrasal verbs",
    "intro": "Живой английский отличает от «учебного» одна вещь — <b>фразовые глаголы</b>. Это глагол плюс маленькое словечко (<b>turn on</b>, <b>give up</b>, <b>look after</b>), и вместе они значат вовсе не то, что по отдельности. В русском такого нет, поэтому смысл нельзя сложить из слов — его надо узнать. А ещё разберёмся с главной ловушкой: почему «turn on it» — ошибка, а верно <b>turn it on</b>. Поехали.",
    "introAudio": "Живой английский отличает от учебного одна вещь — фразовые глаголы. Это глагол плюс маленькое словечко — turn on, give up, look after, и вместе они значат вовсе не то, что по отдельности. В русском такого нет, поэтому смысл нельзя сложить из слов — его надо узнать. А ещё разберёмся с главной ловушкой: почему turn on it — ошибка, а верно turn it on. Поехали.",
    "goals": [
      "понять, что у фразового глагола смысл ≠ сумма слов (give up = сдаться)",
      "различать разделяемые и неразделяемые фразовые глаголы",
      "правильно ставить местоимение: turn it on, throw it away",
      "узнать 12 частых фразовых глаголов и уверенно их использовать"
    ],
    "learned": [
      "Понял(а), что у фразового глагола смысл ≠ сумма слов (give up = сдаться)",
      "Различил(а) разделяемые и неразделяемые фразовые глаголы",
      "Правильно поставил(а) местоимение: turn it on, throw it away",
      "Узнал(а) 12 частых фразовых глаголов и уверенно их использовал(а)"
    ],
    "review": {
      "intro": "Сначала вспомним предлоги (наш always-on) и фразовые глаголы из A2 — get up, look for. Они подведут нас к новой теме.",
      "introAudio": "Сначала вспомним предлоги, наш always-on, и фразовые глаголы из A2 — get up, look for. Они подведут нас к новой теме.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни фразовый глагол look for (искать).",
          "q": "«Я ищу свои ключи» —",
          "opts": [
            "I look my keys",
            "I am looking for my keys",
            "I look for at my keys"
          ],
          "answer": 1,
          "explain": "look <b>for</b> = искать. «Look at» — это «смотреть на», другой глагол."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу с get up (вставать).",
          "q": "Собери: «Я встаю в семь»",
          "want": "I get up at seven",
          "answer": "I get up at seven"
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни предлог при depend (зависеть).",
          "q": "«Это зависит от тебя» —",
          "opts": [
            "It depends of you",
            "It depends on you",
            "It depends from you"
          ],
          "answer": 1,
          "explain": "depend <b>on</b> — устойчивый предлог. Не «of», не «from»."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · что это вообще",
        "title": "Глагол + словечко = новый смысл",
        "paras": [
          "Фразовый глагол — это глагол плюс маленькая частица (on, off, up, away, after…). Вместе они дают НОВЫЙ смысл, который часто не выводится из слов. <b>turn</b> — поворачивать, <b>on</b> — на; но <b>turn on</b> — это «включить». <b>give</b> — давать, <b>up</b> — вверх; а <b>give up</b> — «сдаться, бросить».",
          "Именно поэтому русскоязычным сложно: в русском фразовых глаголов нет, и хочется перевести по словам. Но смысл <b>look after</b> («присматривать за») не равен «смотреть после». Каждый фразовый глагол учим как отдельное слово.",
          "Хорошая новость: их немного по-настоящему частых, и они повсюду. <b>look for</b> (искать), <b>find out</b> (выяснить), <b>pick up</b> (забрать), <b>put on</b> (надеть) — без них живой английский не звучит."
        ],
        "audio": "Фразовый глагол — это глагол плюс маленькая частица: on, off, up, away. Вместе они дают новый смысл, который часто не выводится из слов. Turn — поворачивать, on — на, но turn on — включить. Give up — сдаться, бросить. В русском фразовых глаголов нет, поэтому каждый учим как отдельное слово. Look after — присматривать за, это не «смотреть после».",
        "table": {
          "rows": [
            [
              "turn on",
              "включить (не «поворачивать на»)"
            ],
            [
              "give up",
              "сдаться, бросить"
            ],
            [
              "look after",
              "присматривать за"
            ],
            [
              "find out",
              "выяснить, узнать"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Не сдавайся!",
            "en": "Don't <b>give up</b>!",
            "gloss": "give up = сдаться",
            "say": "Don't give up!"
          },
          {
            "ru": "Она присматривает за младшей сестрой.",
            "en": "She <b>looks after</b> her little sister.",
            "gloss": "look after = присматривать",
            "say": "She looks after her little sister."
          },
          {
            "ru": "Я выясню время.",
            "en": "I'll <b>find out</b> the time.",
            "gloss": "find out = выяснить",
            "say": "I'll find out the time."
          }
        ],
        "mistakes": [
          {
            "wrong": "give up = дать вверх",
            "right": "<b>give up</b> = сдаться, бросить",
            "why": "смысл фразового глагола не складывается из слов"
          },
          {
            "wrong": "I look after my keys (искать)",
            "right": "I <b>look for</b> my keys",
            "why": "look after = присматривать, look for = искать — разные глаголы"
          }
        ],
        "mnemonic": "🧩 Фразовый глагол = новое слово. Смысл не складывается: give up = сдаться, не «дать вверх».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери значение фразового глагола give up.",
            "q": "Что значит «give up»?",
            "opts": [
              "поднять вверх",
              "сдаться, бросить",
              "раздать"
            ],
            "answer": 1,
            "explain": "give up = <b>сдаться, бросить</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «присматривать за детьми» — какой глагол?",
            "q": "«Присматривать за детьми» —",
            "opts": [
              "look after the children",
              "look for the children",
              "look at the children"
            ],
            "answer": 0,
            "explain": "look <b>after</b> = присматривать. look for = искать, look at = смотреть на."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. turn on = включить.",
            "q": "Включи свет.",
            "accept": [
              "turn on the light",
              "turn the light on",
              "turn on the lights",
              "turn the lights on"
            ],
            "placeholder": "Turn on the ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · разделяемые",
        "title": "С существительным — два порядка: <em>turn on the TV = turn the TV on</em>",
        "paras": [
          "Многие фразовые глаголы <b>разделяемые</b>: между глаголом и частицей можно вставить дополнение. Когда дополнение — существительное, работают ОБА порядка: <b>turn on the radio</b> = <b>turn the radio on</b>. Оба верны, выбирай любой.",
          "Так же ведут себя <b>turn off</b> (выключить), <b>put on</b> (надеть), <b>take off</b> (снять), <b>pick up</b> (поднять/забрать), <b>throw away</b> (выбросить), <b>fill in</b> (заполнить).",
          "<b>Take off your coat</b> = <b>Take your coat off.</b> (Сними пальто.) Пока дополнение — существительное, никакой ловушки нет. Ловушка появится в следующем правиле, когда дополнением станет местоимение."
        ],
        "audio": "Многие фразовые глаголы разделяемые: между глаголом и частицей можно вставить дополнение. Когда дополнение — существительное, работают оба порядка: turn on the radio равно turn the radio on. Так же: turn off, put on, take off, pick up, throw away, fill in. Take off your coat равно take your coat off.",
        "table": {
          "rows": [
            [
              "turn on the TV",
              "= turn the TV on (оба верны)"
            ],
            [
              "put on your coat",
              "= put your coat on"
            ],
            [
              "throw away the box",
              "= throw the box away"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Выключи телевизор.",
            "en": "<b>Turn off</b> the TV. / <b>Turn</b> the TV <b>off</b>.",
            "gloss": "оба порядка верны",
            "say": "Turn off the TV."
          },
          {
            "ru": "Надень куртку.",
            "en": "<b>Put on</b> your jacket. / <b>Put</b> your jacket <b>on</b>.",
            "say": "Put on your jacket."
          },
          {
            "ru": "Выброси эту старую коробку.",
            "en": "<b>Throw away</b> that old box.",
            "gloss": "throw away = выбросить",
            "say": "Throw away that old box."
          }
        ],
        "mistakes": [
          {
            "wrong": "Turn the on TV",
            "right": "<b>Turn on the TV</b> / Turn the TV on",
            "why": "частицу нельзя вставлять внутрь именной группы (между артиклем и существительным) — только перед всем дополнением или после него: Turn on the TV / Turn the TV on"
          }
        ],
        "mnemonic": "🔀 Существительное — оба порядка: turn on the light = turn the light on.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> оба варианта про существительное.",
            "q": "Какие варианты верны: «Turn off the TV» и «Turn the TV off»?",
            "opts": [
              "только первый",
              "оба верны",
              "только второй"
            ],
            "answer": 1,
            "explain": "С существительным разделяемый глагол даёт <b>оба</b> порядка."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери (частица перед существительным).",
            "q": "Собери: «Выключи телевизор»",
            "want": "Turn off the TV",
            "answer": "Turn off the TV"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод (любой из двух порядков). take off = снять.",
            "q": "Сними куртку.",
            "accept": [
              "take off your jacket",
              "take your jacket off",
              "take off the jacket",
              "take the jacket off"
            ],
            "placeholder": "Take off your ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Местоимение всегда в середине: <em>turn it on</em>",
        "paras": [
          "Вот ГЛАВНАЯ ловушка дня. Когда дополнение — это местоимение (<b>it, them, him, her, me</b>), у разделяемого глагола работает только ОДИН порядок: местоимение встаёт МЕЖДУ глаголом и частицей. <b>turn it on</b> — да; <b>turn on it</b> — нет.",
          "По-русски мы говорим «включи <b>его</b>» и тянемся сказать «turn on it» — это калька, и она звучит неправильно для англичанина. Правильно: <b>Turn it on. Throw it away. Put them on. Pick me up.</b>",
          "Запомни правило-картинку: существительное гуляет свободно (turn on the light / turn the light on), а местоимение «прячется внутрь» — <b>turn it on</b>, и только так."
        ],
        "audio": "Главная ловушка дня. Когда дополнение — это местоимение: it, them, him, her, me, у разделяемого глагола работает только один порядок: местоимение встаёт между глаголом и частицей. Turn it on — да; turn on it — нет. По-русски мы говорим «включи его» и тянемся сказать turn on it — это калька. Правильно: Turn it on. Throw it away. Put them on.",
        "table": {
          "rows": [
            [
              "turn it on ✓",
              "включи его (свет)"
            ],
            [
              "turn on it ✗",
              "так нельзя!"
            ],
            [
              "throw it away ✓",
              "выброси это"
            ],
            [
              "put them on ✓",
              "надень их"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Включи его (свет).",
            "en": "<b>Turn it on.</b>",
            "gloss": "местоимение в середине",
            "say": "Turn it on."
          },
          {
            "ru": "Выброси это.",
            "en": "<b>Throw it away.</b>",
            "gloss": "не «throw away it»",
            "say": "Throw it away."
          },
          {
            "ru": "Надень их (про обувь).",
            "en": "<b>Put them on.</b>",
            "say": "Put them on."
          }
        ],
        "mistakes": [
          {
            "wrong": "Turn on it",
            "right": "<b>Turn it on</b>",
            "why": "местоимение всегда между глаголом и частицей"
          },
          {
            "wrong": "Throw away it",
            "right": "<b>Throw it away</b>",
            "why": "it прячется внутрь: throw it away"
          }
        ],
        "mnemonic": "📍 Местоимение — внутрь: turn IT on, throw IT away. Так нельзя: turn on it.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> местоимение it — куда его ставить?",
            "q": "«Включи его (свет)» —",
            "opts": [
              "Turn on it",
              "Turn it on",
              "Turn on him"
            ],
            "answer": 1,
            "explain": "Местоимение в середину: <b>Turn it on</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный порядок с it.",
            "q": "«Выброси это» —",
            "opts": [
              "Throw away it",
              "Throw it away",
              "Throw away them"
            ],
            "answer": 1,
            "explain": "<b>Throw it away</b> — местоимение между throw и away."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери с местоимением them.",
            "q": "Собери: «Надень их»",
            "want": "Put them on",
            "answer": "Put them on"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · неразделяемые",
        "title": "Эти не разделяются: <em>look after them</em>",
        "paras": [
          "Часть фразовых глаголов — <b>неразделяемые</b>: глагол и частица всегда стоят вместе, дополнение идёт ПОСЛЕ них — даже если это местоимение. Это, по сути, глаголы с устойчивым предлогом: <b>look after</b> (присматривать), <b>look for</b> (искать), <b>get on</b> (садиться в транспорт / ладить), <b>depend on</b> (зависеть).",
          "Здесь местоимение ведёт себя наоборот: <b>look after them</b> (а не «look them after»), <b>look for it</b>, <b>get on it</b>, <b>depend on you</b>.",
          "Как не запутаться? Разделяемые — это чаще действие с предметом (turn it on, throw it away). Неразделяемые держатся за свой предлог как единое целое (look after them). На B1 их просто запоминают пачкой; интуиция придёт с практикой."
        ],
        "audio": "Часть фразовых глаголов неразделяемые: глагол и частица всегда вместе, дополнение идёт после них, даже если это местоимение. Это глаголы с устойчивым предлогом: look after, look for, get on, depend on. Местоимение здесь наоборот: look after them, а не look them after. Look for it, depend on you.",
        "table": {
          "rows": [
            [
              "look after them ✓",
              "присмотри за ними (не «look them after»)"
            ],
            [
              "look for it ✓",
              "ищи это"
            ],
            [
              "depend on you ✓",
              "зависит от тебя"
            ],
            [
              "get on it ✓",
              "садись в него (автобус)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Присмотри за ними, пожалуйста.",
            "en": "Please <b>look after them</b>.",
            "gloss": "неразделяемый: them после",
            "say": "Please look after them."
          },
          {
            "ru": "Я ищу это везде.",
            "en": "I'm <b>looking for it</b> everywhere.",
            "say": "I am looking for it everywhere."
          },
          {
            "ru": "Всё зависит от тебя.",
            "en": "It all <b>depends on you</b>.",
            "gloss": "depend on you",
            "say": "It all depends on you."
          }
        ],
        "mistakes": [
          {
            "wrong": "Look them after",
            "right": "<b>Look after them</b>",
            "why": "неразделяемый глагол: местоимение идёт после частицы"
          },
          {
            "wrong": "It depends of you",
            "right": "It <b>depends on you</b>",
            "why": "depend on — устойчивый предлог, и он неразделяемый"
          }
        ],
        "mnemonic": "🔗 Неразделяемые держатся вместе: look after them, depend on you. Местоимение — после.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> look after — неразделяемый.",
            "q": "«Присмотри за ними» —",
            "opts": [
              "Look them after",
              "Look after them",
              "Look after they"
            ],
            "answer": 1,
            "explain": "Неразделяемый: местоимение после частицы — <b>look after them</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> вспомни предлог при depend.",
            "q": "«Это зависит от тебя» —",
            "opts": [
              "It depends of you",
              "It depends on you",
              "It depends you"
            ],
            "answer": 1,
            "explain": "depend <b>on</b> you — неразделяемый, предлог on."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери с look for + them.",
            "q": "Собери: «Я ищу их»",
            "want": "I am looking for them",
            "answer": "I am looking for them"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Утро у Тома идёт не по плану. Слушай фразовые глаголы в живой речи — особенно с местоимениями. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "Your alarm is ringing. Turn it off!",
          "ru": "Твой будильник звонит. Выключи его!",
          "words": [
            [
              "turn it off",
              "выключи его"
            ]
          ]
        },
        {
          "who": "B",
          "name": "Том",
          "side": "right",
          "en": "Done. Have you seen my keys? I'm looking for them.",
          "ru": "Готово. Ты не видела мои ключи? Я их ищу.",
          "words": [
            [
              "looking for them",
              "ищу их"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "You picked them up last night and threw them on the sofa.",
          "ru": "Ты забрал их вчера вечером и бросил на диван.",
          "words": [
            [
              "picked them up",
              "забрал их"
            ]
          ]
        },
        {
          "who": "B",
          "name": "Том",
          "side": "right",
          "en": "Got them! Can you look after the dog while I'm out?",
          "ru": "Нашёл! Можешь присмотреть за собакой, пока меня нет?",
          "words": [
            [
              "look after the dog",
              "присмотреть за собакой"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "Sure. Put on your coat — it depends on you whether you're late!",
          "ru": "Конечно. Надень пальто — опоздаешь ты или нет, зависит от тебя!",
          "words": [
            [
              "put on your coat",
              "надень пальто"
            ],
            [
              "depends on you",
              "зависит от тебя"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Двенадцать самых частых фразовых глаголов. Повтори каждый вслух с примером.",
      "items": [
        {
          "en": "turn on",
          "ru": "включить",
          "ex": "Turn on the lights, please."
        },
        {
          "en": "turn off",
          "ru": "выключить",
          "ex": "Turn off your phone in the cinema."
        },
        {
          "en": "give up",
          "ru": "сдаться, бросить",
          "ex": "Don't give up so easily."
        },
        {
          "en": "look after",
          "ru": "присматривать за",
          "ex": "She looks after her little brother."
        },
        {
          "en": "look for",
          "ru": "искать",
          "ex": "I'm looking for my glasses."
        },
        {
          "en": "pick up",
          "ru": "забрать, поднять",
          "ex": "Can you pick me up at six?"
        },
        {
          "en": "throw away",
          "ru": "выбрасывать",
          "ex": "Don't throw it away — I need it."
        },
        {
          "en": "put on",
          "ru": "надевать",
          "ex": "Put on your coat, it's cold."
        },
        {
          "en": "take off",
          "ru": "снимать",
          "ex": "Take off your shoes at the door."
        },
        {
          "en": "get on",
          "ru": "садиться (в транспорт); ладить",
          "ex": "We got on the bus together."
        },
        {
          "en": "find out",
          "ru": "выяснить, узнать",
          "ex": "I'll find out when the shop opens."
        },
        {
          "en": "fill in",
          "ru": "заполнять (бланк)",
          "ex": "Please fill in this form."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай рассказ про суматошное утро. Везде фразовые глаголы — следи за местоимениями.",
      "title": "A busy morning",
      "sentences": [
        "My alarm went off at six, but I didn't get up at once.",
        "I turned it off and lay there for ten more minutes.",
        "Then I got up, put on my clothes and turned on the kettle.",
        "I couldn't find my keys, so I looked for them everywhere.",
        "In the end I found out that my brother had picked them up by mistake.",
        "I asked him to drop me off at the station on his way to work.",
        "On the train I filled in a form for my new job.",
        "I won't give up — this year everything is going to get better."
      ],
      "translation": "Будильник зазвонил в шесть, но я не встал сразу. Я выключил его и полежал ещё десять минут. Потом я встал, оделся и включил чайник. Я не мог найти ключи, поэтому искал их везде. В итоге выяснилось, что брат забрал их по ошибке. Я попросил его подбросить меня до станции по дороге на работу. В поезде я заполнил бланк для новой работы. Я не сдамся — в этом году всё станет лучше."
    },
    "drag": {
      "intro": "Соедини фразовый глагол с его значением.",
      "pairs": [
        [
          "turn off",
          "выключить"
        ],
        [
          "give up",
          "сдаться, бросить"
        ],
        [
          "look after",
          "присматривать за"
        ],
        [
          "throw away",
          "выбрасывать"
        ],
        [
          "pick up",
          "забрать, поднять"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по фразовым глаголам. Пять вопросов — и тема твоя.",
      "items": [
        {
          "q": "«Включи его (телевизор)» —",
          "opts": [
            "Turn on it",
            "Turn it on",
            "Turn on him"
          ],
          "answer": 1,
          "explain": "Местоимение в середину: <b>Turn it on</b>."
        },
        {
          "q": "«Присмотри за ними» —",
          "opts": [
            "Look them after",
            "Look after them",
            "Look for them"
          ],
          "answer": 1,
          "explain": "look after — неразделяемый: <b>look after them</b>."
        },
        {
          "q": "Что значит «give up»?",
          "opts": [
            "поднять вверх",
            "сдаться, бросить",
            "встать"
          ],
          "answer": 1,
          "explain": "give up = <b>сдаться, бросить</b>."
        },
        {
          "q": "«Я ищу свой телефон» —",
          "opts": [
            "I look my phone",
            "I'm looking for my phone",
            "I look for at my phone"
          ],
          "answer": 1,
          "explain": "look <b>for</b> = искать."
        },
        {
          "q": "«Выброси это» —",
          "opts": [
            "Throw away it",
            "Throw it away",
            "Throw it out away"
          ],
          "answer": 1,
          "explain": "Местоимение внутрь: <b>Throw it away</b>."
        }
      ]
    },
    "picture": {
      "intro": "Опиши утро человека по картинке. Используй фразовые глаголы — и не забывай про местоимения.",
      "emoji": "⏰🔌🔑",
      "prompt": "Опиши утро по картинке. Используй turn off, get up, put on, look for, pick up.",
      "hint": "Структуры: The alarm went off; I turned it off; I got up and put on my coat; I looked for my keys.",
      "example": "The alarm went off and she turned it off. Then she got up and put on her coat. She couldn't find her keys, so she looked for them. Finally she picked up her bag and left.",
      "img": "img/b1/day-27.jpg",
      "credit": "Фото: ericisinschool · Public Domain · <a href=\"https://www.flickr.com/photos/203048287@N03/54648926208\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Расскажи о своём обычном утре — но обязательно через фразовые глаголы.",
      "prompt": "Напиши 4–6 предложений про своё утро. Используй минимум четыре фразовых глагола (turn on/off, get up, put on, look for, pick up, find out) и хотя бы раз — местоимение (turn it off / put them on).",
      "hint": "Структуры: I get up at…; I turn on the…; My alarm rings and I turn it off; I look for my…; I pick up my bag.",
      "example": "My alarm goes off at seven and I always turn it off too quickly. Then I get up and put on something warm. While the kettle is boiling, I look for my keys and my phone. Some mornings I can't find them, but I never give up — I just search until I pick them up."
    }
  },
  "28": {
    "day": 28,
    "week": "04",
    "level": "B1",
    "themeRu": "Я привык",
    "themeEn": "be used to & get used to",
    "intro": "Сегодня — про <b>привыкание</b>. По-английски «я привык вставать рано» и «раньше я вставал рано» — две <b>разные</b> конструкции, хотя по-русски обе про привычку. Разберём <b>be used to</b> (я уже привык) и <b>get used to</b> (я привыкаю) и отделим их от знакомого <b>used to</b> из дня 6 (раньше делал, а сейчас нет). И сразу обезвредим ловушку: «I'm used to <b>get</b> up» — ошибка, нужно «used to <b>getting</b> up». Поехали.",
    "introAudio": "Сегодня про привыкание. По-английски «я привык вставать рано» и «раньше я вставал рано» — две разные конструкции, хотя по-русски обе про привычку. Разберём be used to — я уже привык, и get used to — я привыкаю, и отделим их от знакомого used to из дня 6: раньше делал, а сейчас нет. И сразу обезвредим ловушку: I'm used to get up — ошибка, нужно used to getting up. Поехали.",
    "goals": [
      "говорить «я привык (к чему-то)»: be used to + -ing / существительное",
      "говорить «я привыкаю»: get used to + -ing / существительное",
      "не путать be used to doing (привычен сейчас) и used to do (раньше делал)",
      "помнить, что to здесь — предлог, поэтому после него -ing, а не инфинитив"
    ],
    "learned": [
      "Сказал(а) «я привык (к чему-то)»: be used to + -ing / существительное",
      "Сказал(а) «я привыкаю»: get used to + -ing / существительное",
      "Перестал(а) путать be used to doing (привычен сейчас) и used to do (раньше делал)",
      "Запомнил(а), что to здесь — предлог, поэтому после него -ing, а не инфинитив"
    ],
    "review": {
      "intro": "Сначала вспомним used to из дня 6 (привычка в прошлом) и правило «после предлога — глагол с -ing». Именно на их стыке и живёт сегодняшняя тема.",
      "introAudio": "Сначала вспомним used to из дня 6, привычка в прошлом, и правило «после предлога — глагол с -ing». Именно на их стыке и живёт сегодняшняя тема.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни used to — привычка в прошлом, которой больше нет.",
          "q": "«Раньше я жил в Москве (сейчас нет)» —",
          "opts": [
            "I use to live in Moscow",
            "I used to live in Moscow",
            "I am used to live in Moscow"
          ],
          "answer": 1,
          "explain": "Привычка в прошлом: <b>used to</b> + голый инфинитив (live)."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> после предлога глагол получает -ing.",
          "q": "«Спасибо за помощь» — Thanks for ___",
          "opts": [
            "help",
            "helping",
            "to help"
          ],
          "answer": 1,
          "explain": "После предлога for — герундий: <b>helping</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу. good at + -ing.",
          "q": "Собери: «Я хорошо готовлю»",
          "want": "I am good at cooking",
          "answer": "I am good at cooking"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · я уже привык",
        "title": "<em>be used to</em> + -ing / сущ. — «мне привычно»",
        "paras": [
          "<b>be used to</b> значит «я привык, для меня это привычно, нормально». Это про состояние СЕЙЧАС: <b>I'm used to it.</b> (Я к этому привык.) После to идёт либо существительное, либо глагол с <b>-ing</b>: <b>I'm used to the noise.</b> / <b>I'm used to getting up early.</b>",
          "Почему -ing, а не инфинитив? Потому что <b>to</b> здесь — это <b>предлог</b> (как в good at, interested in), а не частица инфинитива. После предлога глагол всегда получает -ing. Отсюда главная ловушка дня.",
          "Русскоязычные говорят «I'm used to <b>get</b> up early» — и это ошибка. Правильно <b>I'm used to getting up early.</b> Запомни связку: <b>used to + -ing</b>."
        ],
        "audio": "be used to значит «я привык, для меня это привычно». Это про состояние сейчас: I'm used to it. После to идёт существительное или глагол с -ing: I'm used to the noise, I'm used to getting up early. Почему -ing? Потому что to здесь предлог, а не частица инфинитива. Русскоязычные говорят I'm used to get up early — это ошибка. Правильно: I'm used to getting up early.",
        "table": {
          "rows": [
            [
              "I'm used to + сущ.",
              "I'm used to the noise. (привык к шуму)"
            ],
            [
              "I'm used to + -ing",
              "I'm used to getting up early."
            ],
            [
              "to = предлог",
              "поэтому глагол с -ing, не инфинитив"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я привык вставать рано.",
            "en": "I'm <b>used to getting up</b> early.",
            "gloss": "used to + -ing",
            "say": "I am used to getting up early."
          },
          {
            "ru": "Я привык к шуму.",
            "en": "I'm <b>used to the noise</b>.",
            "gloss": "used to + существительное",
            "say": "I am used to the noise."
          },
          {
            "ru": "Она привыкла работать допоздна.",
            "en": "She's <b>used to working</b> late.",
            "say": "She is used to working late."
          }
        ],
        "mistakes": [
          {
            "wrong": "I'm used to get up early",
            "right": "I'm <b>used to getting up</b> early",
            "why": "to здесь предлог → после него -ing, не инфинитив"
          },
          {
            "wrong": "I'm used to the get up early",
            "right": "I'm used to <b>getting up</b> early",
            "why": "после used to сразу -ing или существительное"
          }
        ],
        "mnemonic": "🧷 be used to + -ing: «мне привычно». I'm used to gettING up early.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> после used to — форма с -ing.",
            "q": "«Я привык вставать рано» —",
            "opts": [
              "I'm used to get up early",
              "I'm used to getting up early",
              "I used to getting up early"
            ],
            "answer": 1,
            "explain": "be used to + <b>-ing</b>: getting up early."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. После used to — существительное.",
            "q": "Я привык к шуму.",
            "accept": [
              "i am used to the noise",
              "i'm used to the noise"
            ],
            "placeholder": "I am used to the ..."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу. work → working.",
            "q": "Собери: «Она привыкла работать допоздна»",
            "want": "She is used to working late",
            "answer": "She is used to working late"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · я привыкаю",
        "title": "<em>get used to</em> — процесс привыкания",
        "paras": [
          "Если <b>be</b> used to — это «уже привык» (состояние), то <b>get</b> used to — это «привыкаю, постепенно привыкаю» (процесс). Меняется только глагол: be → get. После to всё так же идёт -ing или существительное.",
          "<b>I'm getting used to the weather.</b> = Я (постепенно) привыкаю к погоде. <b>You'll get used to it.</b> = Ты привыкнешь к этому. <b>It took me a month to get used to the new job.</b> = Мне понадобился месяц, чтобы привыкнуть к новой работе.",
          "Удобно, что get used to гнётся во всех временах: <b>I got used to it</b> (привык — прошлое), <b>I'm getting used to it</b> (привыкаю — сейчас), <b>I'll get used to it</b> (привыкну — будущее)."
        ],
        "audio": "Если be used to — это «уже привык», состояние, то get used to — это «привыкаю», процесс. Меняется только глагол: be на get. После to всё так же -ing или существительное. I'm getting used to the weather — привыкаю к погоде. You'll get used to it — ты привыкнешь. И get used to гнётся во всех временах: I got used to it, I'm getting used to it, I'll get used to it.",
        "table": {
          "rows": [
            [
              "get used to (процесс)",
              "привыкаю / привыкнуть"
            ],
            [
              "I'm getting used to it",
              "сейчас привыкаю"
            ],
            [
              "I got used to it",
              "привык (прошлое)"
            ],
            [
              "You'll get used to it",
              "ты привыкнешь"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я привыкаю к новой работе.",
            "en": "I'm <b>getting used to</b> my new job.",
            "gloss": "get used to + сущ.",
            "say": "I am getting used to my new job."
          },
          {
            "ru": "Ты привыкнешь к этому.",
            "en": "You'll <b>get used to it</b>.",
            "say": "You will get used to it."
          },
          {
            "ru": "Я постепенно привыкаю вставать рано.",
            "en": "I'm slowly <b>getting used to getting up</b> early.",
            "gloss": "get used to + -ing",
            "say": "I am slowly getting used to getting up early."
          }
        ],
        "mistakes": [
          {
            "wrong": "I'm getting used to get my new job",
            "right": "I'm getting used to <b>my new job</b>",
            "why": "после used to — существительное или -ing, не инфинитив"
          },
          {
            "wrong": "You get used to it (про будущее)",
            "right": "You'll <b>get used to it</b>",
            "why": "«привыкнешь» — будущее: will get used to"
          }
        ],
        "mnemonic": "🔄 get used to = процесс: привыкаю. be = уже привык, get = ещё привыкаю.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> процесс привыкания — getting used to.",
            "q": "«Я привыкаю к новой работе» —",
            "opts": [
              "I'm getting used to my new job",
              "I'm getting used to get my new job",
              "I get used to my new job"
            ],
            "answer": 0,
            "explain": "Процесс сейчас: <b>I'm getting used to</b> + существительное."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. «привыкнешь» — будущее.",
            "q": "Ты привыкнешь к этому.",
            "accept": [
              "you'll get used to it",
              "you will get used to it"
            ],
            "placeholder": "You'll get used to ..."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу про процесс. weather — погода.",
            "q": "Собери: «Я привыкаю к погоде»",
            "want": "I am getting used to the weather",
            "answer": "I am getting used to the weather"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "<em>used to do</em> ≠ <em>be used to doing</em>",
        "paras": [
          "Вот сердце темы. Две очень похожие конструкции значат РАЗНОЕ — не перепутай.",
          "<b>used to do</b> (день 6) = «раньше делал, а сейчас нет». Привычка в ПРОШЛОМ. После used to — голый инфинитив: <b>I used to smoke.</b> (Раньше курил, бросил.)",
          "<b>be used to doing</b> = «привык делать, мне это привычно СЕЙЧАС». После used to — герундий: <b>I'm used to working a lot.</b> (Я привык много работать.) Разница в одном: есть ли <b>be/get</b> перед used to, и какая форма глагола после — инфинитив или -ing."
        ],
        "audio": "Вот сердце темы. Две похожие конструкции значат разное. used to do, день шесть, — раньше делал, а сейчас нет, привычка в прошлом. После used to голый инфинитив: I used to smoke. А be used to doing — привык делать, мне это привычно сейчас. После used to герундий: I'm used to working a lot. Разница: есть ли be или get перед used to, и какая форма после — инфинитив или -ing.",
        "table": {
          "rows": [
            [
              "I used to smoke.",
              "Раньше курил (сейчас нет) — прошлое"
            ],
            [
              "I'm used to smoking.",
              "Привык курить (мне привычно сейчас)"
            ],
            [
              "used to + инфинитив",
              "привычка в прошлом"
            ],
            [
              "be used to + -ing",
              "привычен сейчас"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Раньше я курил (бросил).",
            "en": "I <b>used to smoke</b>.",
            "gloss": "used to + инфинитив = прошлое",
            "say": "I used to smoke."
          },
          {
            "ru": "Сейчас я привык много работать.",
            "en": "I'm <b>used to working</b> a lot.",
            "gloss": "be used to + -ing = сейчас",
            "say": "I am used to working a lot."
          },
          {
            "ru": "Раньше она жила в деревне.",
            "en": "She <b>used to live</b> in the village.",
            "say": "She used to live in the village."
          }
        ],
        "mistakes": [
          {
            "wrong": "I'm used to smoke (про прошлую привычку)",
            "right": "I <b>used to smoke</b>",
            "why": "«раньше курил» — это used to + инфинитив, без be"
          },
          {
            "wrong": "I used to working a lot (про сейчас)",
            "right": "I'm <b>used to working</b> a lot",
            "why": "«привык сейчас» — be used to + -ing"
          }
        ],
        "mnemonic": "⚖️ used to DO = раньше делал. be used to DOING = привык сейчас.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «раньше делал, сейчас нет» — какая форма?",
            "q": "«Раньше я курил (бросил)» —",
            "opts": [
              "I'm used to smoking",
              "I used to smoke",
              "I get used to smoking"
            ],
            "answer": 1,
            "explain": "Привычка в прошлом: <b>used to smoke</b> (без be, инфинитив)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «привык сейчас» — какая форма?",
            "q": "«Сейчас я привык много работать» —",
            "opts": [
              "I used to work a lot",
              "I'm used to working a lot",
              "I use to working a lot"
            ],
            "answer": 1,
            "explain": "Привычен сейчас: <b>be used to working</b> (с be, -ing)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери про прошлую привычку. live — голый инфинитив.",
            "q": "Собери: «Раньше она жила в деревне»",
            "want": "She used to live in the village",
            "answer": "She used to live in the village"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · to это предлог",
        "title": "Почему после <em>used to</em> идёт -ing",
        "paras": [
          "Главная причина путаницы — слово <b>to</b>. Оно выглядит как частица инфинитива (to go, to work), но в <b>be/get used to</b> это <b>предлог</b>. А после предлога английский глагол всегда получает <b>-ing</b>.",
          "Ты уже видел(а) такие предлоги-ловушки: <b>good at cooking</b>, <b>interested in learning</b>, <b>look forward to seeing</b> you. Последний особенно коварен — там тоже to-предлог: <b>look forward to meeting</b> you, а не «to meet».",
          "Проверь себя так: после <b>used to</b> можно поставить существительное? <b>I'm used to the cold.</b> — да, можно. Значит, и глагол идёт в форме существительного, то есть с -ing: <b>I'm used to getting up early.</b>"
        ],
        "audio": "Главная причина путаницы — слово to. Оно выглядит как частица инфинитива, но в be used to это предлог. А после предлога английский глагол всегда получает -ing. Ты уже видел такие: good at cooking, interested in learning, look forward to seeing you. Проверь себя: после used to можно поставить существительное? I'm used to the cold — да. Значит, и глагол идёт с -ing: I'm used to getting up early.",
        "table": {
          "rows": [
            [
              "good at cooking",
              "хорошо готовит (at — предлог)"
            ],
            [
              "interested in learning",
              "интересуется учёбой (in — предлог)"
            ],
            [
              "look forward to seeing",
              "жду встречи (to — предлог!)"
            ],
            [
              "used to getting up",
              "привык вставать (to — предлог!)"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Я хорошо умею решать задачи.",
            "en": "I'm <b>good at solving</b> problems.",
            "gloss": "at + -ing",
            "say": "I am good at solving problems."
          },
          {
            "ru": "Жду не дождусь встречи с тобой.",
            "en": "I <b>look forward to seeing</b> you.",
            "gloss": "to (предлог) + -ing",
            "say": "I look forward to seeing you."
          },
          {
            "ru": "Я не привык так рано вставать.",
            "en": "I'm <b>not used to getting up</b> so early.",
            "say": "I am not used to getting up so early."
          }
        ],
        "mistakes": [
          {
            "wrong": "I look forward to meet you",
            "right": "I look forward to <b>meeting</b> you",
            "why": "to здесь предлог → meeting, не «to meet»"
          },
          {
            "wrong": "I'm not used to get up so early",
            "right": "I'm not used to <b>getting up</b> so early",
            "why": "после used to (предлог to) — герундий"
          }
        ],
        "mnemonic": "🔑 to-предлог требует -ing: used to gettING, look forward to seeING.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> после be used to — какая форма глагола?",
            "q": "После «used to» (в значении «привык») глагол идёт —",
            "opts": [
              "в голом инфинитиве (get)",
              "с -ing (getting)",
              "с to + инфинитив (to get)"
            ],
            "answer": 1,
            "explain": "to — предлог → глагол с <b>-ing</b>: getting."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> look forward to — тоже предлог to.",
            "q": "«Жду не дождусь встречи с тобой» —",
            "opts": [
              "I look forward to meet you",
              "I look forward to meeting you",
              "I look forward to met you"
            ],
            "answer": 1,
            "explain": "to-предлог → <b>meeting</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод с отрицанием. not used to + -ing.",
            "q": "Я не привык так рано вставать.",
            "accept": [
              "i'm not used to getting up so early",
              "i am not used to getting up so early"
            ],
            "placeholder": "I'm not used to ... up so early"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Том переехал в другую страну и рассказывает Ане, к чему уже привык, а к чему ещё привыкает. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "How's life abroad? Are you used to it now?",
          "ru": "Как жизнь за границей? Уже привыкла?",
          "words": [
            [
              "used to it",
              "привыкла к этому"
            ],
            [
              "abroad",
              "за границей"
            ]
          ]
        },
        {
          "who": "B",
          "name": "Том",
          "side": "right",
          "en": "Mostly. I'm used to speaking English all day now.",
          "ru": "В основном. Я уже привык говорить по-английски весь день.",
          "words": [
            [
              "used to speaking",
              "привык говорить"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "Back home you used to switch to Russian every five minutes!",
          "ru": "Дома ты раньше переключался на русский каждые пять минут!",
          "words": [
            [
              "used to switch",
              "раньше переключался"
            ]
          ]
        },
        {
          "who": "B",
          "name": "Том",
          "side": "right",
          "en": "I know. But I'm still getting used to the rainy weather.",
          "ru": "Знаю. Но к дождливой погоде я всё ещё привыкаю.",
          "words": [
            [
              "getting used to",
              "привыкаю к"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "Don't worry — you'll get used to it sooner than you think.",
          "ru": "Не переживай — ты привыкнешь быстрее, чем думаешь.",
          "words": [
            [
              "get used to it",
              "привыкнешь к этому"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова и обороты дня — про привыкание и новую жизнь. Повтори вслух.",
      "items": [
        {
          "en": "be used to",
          "ru": "быть привыкшим (к)",
          "ex": "I'm used to the cold now."
        },
        {
          "en": "get used to",
          "ru": "привыкать (к)",
          "ex": "You'll get used to it."
        },
        {
          "en": "used to (+ inf.)",
          "ru": "раньше (привычка в прошлом)",
          "ex": "I used to smoke, but I quit."
        },
        {
          "en": "a routine",
          "ru": "распорядок, заведённый порядок",
          "ex": "It's just my new routine."
        },
        {
          "en": "the noise",
          "ru": "шум",
          "ex": "I'm used to the noise of the city."
        },
        {
          "en": "abroad",
          "ru": "за границей, за границу",
          "ex": "Living abroad takes time to get used to."
        },
        {
          "en": "the climate",
          "ru": "климат",
          "ex": "She can't get used to the hot climate."
        },
        {
          "en": "gradually",
          "ru": "постепенно",
          "ex": "Gradually, everything felt normal."
        },
        {
          "en": "look forward to",
          "ru": "с нетерпением ждать",
          "ex": "I look forward to seeing you."
        },
        {
          "en": "strange",
          "ru": "странный, непривычный",
          "ex": "At first everything felt strange."
        },
        {
          "en": "to quit",
          "ru": "бросить, прекратить",
          "ex": "He quit his job last year."
        },
        {
          "en": "on time",
          "ru": "вовремя",
          "ex": "I'm used to arriving on time."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай рассказ человека, который переехал за границу. Следи за be used to, get used to и used to.",
      "title": "Moving abroad",
      "sentences": [
        "When I moved to a new country, everything felt strange at first.",
        "I wasn't used to the food, the weather or the language.",
        "Back home I used to have dinner at six, but here people eat much later.",
        "Little by little, I got used to the new routine.",
        "Now I'm used to speaking English every day, and I rarely think about it.",
        "I'm even getting used to the rainy weather, which surprises my friends.",
        "The hardest thing to get used to was being far from my family.",
        "But you get used to almost anything if you give it time."
      ],
      "translation": "Когда я переехал в новую страну, поначалу всё казалось странным. Я не привык ни к еде, ни к погоде, ни к языку. Дома я раньше ужинал в шесть, а здесь едят гораздо позже. Понемногу я привык к новому распорядку. Теперь я привык говорить по-английски каждый день и почти об этом не думаю. Я даже привыкаю к дождливой погоде, что удивляет моих друзей. Сложнее всего было привыкнуть к тому, что я далеко от семьи. Но привыкаешь почти ко всему, если дать себе время."
    },
    "drag": {
      "intro": "Соедини английский оборот с переводом. Следи за оттенком: уже привык / привыкаю / раньше делал.",
      "pairs": [
        [
          "be used to",
          "быть привыкшим"
        ],
        [
          "get used to",
          "привыкать"
        ],
        [
          "used to",
          "раньше (в прошлом)"
        ],
        [
          "a routine",
          "распорядок"
        ],
        [
          "abroad",
          "за границей"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по привыканию. Пять вопросов — и день закрыт.",
      "items": [
        {
          "q": "«Я привык рано вставать» —",
          "opts": [
            "I'm used to get up early",
            "I'm used to getting up early",
            "I used to getting up early"
          ],
          "answer": 1,
          "explain": "be used to + <b>-ing</b>: getting up early."
        },
        {
          "q": "«Раньше я жил в Москве (сейчас нет)» —",
          "opts": [
            "I'm used to living in Moscow",
            "I used to live in Moscow",
            "I get used to live in Moscow"
          ],
          "answer": 1,
          "explain": "Привычка в прошлом: <b>used to live</b> (инфинитив, без be)."
        },
        {
          "q": "«Ты привыкнешь к этому» —",
          "opts": [
            "You used to it",
            "You'll get used to it",
            "You're used to get it"
          ],
          "answer": 1,
          "explain": "Процесс в будущем: <b>get used to it</b>."
        },
        {
          "q": "После «be used to» идёт —",
          "opts": [
            "глагол с -ing",
            "инфинитив с to",
            "голый инфинитив"
          ],
          "answer": 0,
          "explain": "to — предлог → глагол с <b>-ing</b>."
        },
        {
          "q": "«Я привыкаю к новой работе» —",
          "opts": [
            "I get used to my new job",
            "I'm getting used to my new job",
            "I used to my new job"
          ],
          "answer": 1,
          "explain": "Процесс сейчас: <b>I'm getting used to</b>."
        }
      ]
    },
    "picture": {
      "intro": "Опиши по картинке человека, который переехал и привыкает к новой жизни. Используй обороты дня.",
      "emoji": "🌧️✈️🏠",
      "prompt": "Опиши, к чему человек уже привык, а к чему ещё привыкает. Используй be used to, get used to и used to.",
      "hint": "Структуры: She's used to…; She's getting used to…; She used to… but now…",
      "example": "She moved abroad last year. She used to live with her family, but now she lives alone. She's already used to speaking English, but she's still getting used to the rainy weather.",
      "img": "img/b1/day-28.jpg",
      "credit": "Фото: moonjazz · Public Domain · <a href=\"https://www.flickr.com/photos/8398907@N02/14763206447\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Расскажи о привыкании в своей жизни — к новому городу, работе, расписанию.",
      "prompt": "Напиши 4–6 предложений про что-то, к чему ты привык(ла) или привыкаешь. Используй be used to, get used to и хотя бы раз used to (раньше).",
      "hint": "Структуры: I used to… but now…; I'm used to + -ing; I'm still getting used to…; It took me … to get used to…",
      "example": "I used to work from an office, but now I work from home. At first it felt strange and lonely. Little by little, I got used to the quiet. Now I'm used to making my own schedule, and I'm even getting used to having lunch alone. Honestly, I wouldn't go back."
    }
  },
  "29": {
    "day": 29,
    "week": "04",
    "level": "B1",
    "themeRu": "Несмотря на",
    "themeEn": "Linkers",
    "intro": "Слова-связки поднимают речь до настоящего B1: ими ты сшиваешь мысли с оттенком «вопреки» и «по причине». Разберём четыре пары: <b>although</b> и <b>however</b> (хотя / однако), <b>despite</b> и <b>in spite of</b> (несмотря на), <b>because</b> против <b>because of / due to</b> (потому что / из-за). Различие простое, но коварное: <b>although</b> ведёт за собой целое предложение, а <b>despite</b> — только существительное. И сразу обезвредим классическую ошибку: <b>despite of</b> — так нельзя. Поехали.",
    "introAudio": "Слова-связки поднимают речь до настоящего B1: ими ты сшиваешь мысли с оттенком «вопреки» и «по причине». Разберём четыре пары: although и however — хотя и однако, despite и in spite of — несмотря на, и because против because of и due to — потому что и из-за. Различие простое, но коварное: although ведёт за собой целое предложение, а despite — только существительное. И сразу обезвредим классическую ошибку: despite of — так нельзя. Поехали.",
    "goals": [
      "соединять контраст: although / though / even though + целое предложение",
      "ставить despite и in spite of перед существительным или -ing (без of после despite)",
      "связывать два предложения наречием however (однако) с правильной пунктуацией",
      "различать because + предложение и because of / due to + существительное"
    ],
    "learned": [
      "Соединил(а) контраст: although / though / even though + целое предложение",
      "Поставил(а) despite и in spite of перед существительным или -ing (без of после despite)",
      "Связал(а) два предложения наречием however (однако) с правильной пунктуацией",
      "Различил(а) because + предложение и because of / due to + существительное"
    ],
    "review": {
      "intro": "Сначала вспомним связки although / because / so из A2 и наш always-on: артикли и устойчивые предлоги. Сегодняшняя тема растёт прямо из них.",
      "introAudio": "Сначала вспомним связки although, because, so из A2 и наш always-on: артикли и устойчивые предлоги. Сегодняшняя тема растёт прямо из них.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни although из A2 — «хотя», ведёт предложение.",
          "q": "«Хотя шёл дождь, мы пошли гулять» —",
          "opts": [
            "Although it was raining, we went for a walk",
            "Although the rain, we went for a walk",
            "Despite it was raining, we went for a walk"
          ],
          "answer": 0,
          "explain": "<b>although</b> + предложение (it was raining). После него идёт подлежащее и глагол."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> always-on — устойчивый предлог. good AT.",
          "q": "«Она хорошо рисует» — She is good ___ drawing.",
          "opts": [
            "in",
            "at",
            "on"
          ],
          "answer": 1,
          "explain": "good <b>at</b> + -ing — устойчивая связка. Запомни и in spite <b>of</b> на сегодня."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу. Следи за артиклем the перед уникальным sun.",
          "q": "Собери: «Солнце светило весь день»",
          "want": "The sun was shining all day",
          "answer": "The sun was shining all day"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · хотя + предложение",
        "title": "<em>although / though / even though</em> — контраст с целым предложением",
        "paras": [
          "<b>although</b> значит «хотя» и вводит контраст: ожидаешь одно, а получается другое. Главное — после него идёт <b>целое предложение</b> (подлежащее + глагол): <b>Although it was raining, we went out.</b> = Хотя шёл дождь, мы вышли.",
          "У although есть два брата. <b>though</b> — то же самое, но разговорнее, и его можно поставить даже в конец: <b>It was raining. We went out, though.</b> <b>even though</b> — усиленное «хотя даже»: <b>Even though I was tired, I finished it.</b>",
          "Запомни форму: <b>although</b> + подлежащее + глагол. Нельзя сказать «although the rain» — после него нужно предложение. Для существительного есть despite, его возьмём дальше."
        ],
        "audio": "although значит «хотя» и вводит контраст: ожидаешь одно, а получается другое. После него идёт целое предложение: Although it was raining, we went out. У although есть братья: though — то же, но разговорнее, и его можно поставить в конец: We went out, though. И even though — усиленное «хотя даже»: Even though I was tired, I finished it. Запомни: although плюс подлежащее плюс глагол. Нельзя сказать although the rain.",
        "table": {
          "rows": [
            [
              "although + предложение",
              "Although it was late, we stayed."
            ],
            [
              "even though (усиление)",
              "Even though I was tired, I went."
            ],
            [
              "though (разг., можно в конец)",
              "It was cold. We swam, though."
            ],
            [
              "❗ не «although + сущ.»",
              "для существительного — despite"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Хотя было поздно, мы остались.",
            "en": "<b>Although</b> it was late, we stayed.",
            "gloss": "although + предложение",
            "say": "Although it was late, we stayed."
          },
          {
            "ru": "Хотя я устал, я закончил работу.",
            "en": "<b>Even though</b> I was tired, I finished the work.",
            "gloss": "even though = усиленное хотя",
            "say": "Even though I was tired, I finished the work."
          },
          {
            "ru": "Было холодно. Мы всё же искупались.",
            "en": "It was cold. We swam, <b>though</b>.",
            "gloss": "though в конце = «всё же»",
            "say": "It was cold. We swam, though."
          }
        ],
        "mistakes": [
          {
            "wrong": "Although the rain, we went out",
            "right": "<b>Although it was raining</b>, we went out",
            "why": "после although нужно предложение, не существительное"
          },
          {
            "wrong": "Although it was late, but we stayed",
            "right": "<b>Although</b> it was late, we stayed",
            "why": "с although не ставят второе but — одного союза хватает"
          }
        ],
        "mnemonic": "🔗 although + ПРЕДЛОЖЕНИЕ (подлежащее + глагол). Для сущ. — despite.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> после although — предложение с глаголом.",
            "q": "«Хотя он был болен, он пришёл на работу» —",
            "opts": [
              "Although his illness, he came to work",
              "Although he was ill, he came to work",
              "Although ill, but he came to work"
            ],
            "answer": 1,
            "explain": "<b>although</b> + предложение: he was ill. И без второго but."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери. even though ведёт предложение.",
            "q": "Собери: «Хотя я устал, я закончил работу»",
            "want": "Even though I was tired I finished the work",
            "answer": "Even though I was tired I finished the work"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. although + предложение.",
            "q": "Хотя было поздно, мы остались.",
            "accept": [
              "although it was late we stayed",
              "although it was late, we stayed"
            ],
            "placeholder": "Although it was late, ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · несмотря на + существительное",
        "title": "<em>despite / in spite of</em> — контраст без глагола",
        "paras": [
          "<b>despite</b> и <b>in spite of</b> — это «несмотря на». Значат то же, что although, но после них идёт <b>существительное</b> или глагол с <b>-ing</b>, а не целое предложение: <b>Despite the rain, we went out.</b> / <b>In spite of being tired, I finished.</b>",
          "Вот главная ловушка дня. После <b>despite</b> НЕТ слова of: пишем <b>despite the rain</b>, а не «despite of the rain». А вот в обороте <b>in spite of</b> — of есть, это часть оборота. Не смешивай их.",
          "Если очень хочется поставить после despite целое предложение, добавь мостик <b>the fact that</b>: <b>Despite the fact that it was raining, we went out.</b> Тогда despite снова дружит с предложением."
        ],
        "audio": "despite и in spite of — это «несмотря на». Значат то же, что although, но после них идёт существительное или глагол с -ing, а не целое предложение: Despite the rain, we went out. In spite of being tired, I finished. Главная ловушка дня: после despite нет слова of. Пишем despite the rain, а не despite of the rain. А в обороте in spite of — of есть, это часть оборота. Если хочется поставить целое предложение, добавь мостик the fact that: Despite the fact that it was raining, we went out.",
        "table": {
          "rows": [
            [
              "despite + сущ. (без of!)",
              "Despite the rain, we went out."
            ],
            [
              "in spite of + сущ. (of есть)",
              "In spite of the rain, we went out."
            ],
            [
              "despite / in spite of + -ing",
              "Despite being tired, I finished."
            ],
            [
              "despite the fact that + предложение",
              "Despite the fact that it rained…"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Несмотря на дождь, мы вышли.",
            "en": "<b>Despite</b> the rain, we went out.",
            "gloss": "despite + сущ., без of",
            "say": "Despite the rain, we went out."
          },
          {
            "ru": "Несмотря на усталость, я закончил.",
            "en": "<b>In spite of</b> being tired, I finished.",
            "gloss": "in spite of + -ing",
            "say": "In spite of being tired, I finished."
          },
          {
            "ru": "Несмотря на то что было поздно, мы остались.",
            "en": "<b>Despite the fact that</b> it was late, we stayed.",
            "gloss": "мостик the fact that + предложение",
            "say": "Despite the fact that it was late, we stayed."
          }
        ],
        "mistakes": [
          {
            "wrong": "Despite of the rain, we went out",
            "right": "<b>Despite</b> the rain, we went out",
            "why": "после despite НЕТ of — это и есть русская ловушка"
          },
          {
            "wrong": "In spite the rain, we went out",
            "right": "<b>In spite of</b> the rain, we went out",
            "why": "в обороте in spite OF — of обязательно"
          }
        ],
        "mnemonic": "🚫 despite + сущ. (БЕЗ of). in spite OF + сущ. (с of). Не путай!",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> вспомни — после despite нет of.",
            "q": "Какой вариант верный?",
            "opts": [
              "Despite of the noise, I slept well",
              "Despite the noise, I slept well",
              "Despite the noise, but I slept well"
            ],
            "answer": 1,
            "explain": "<b>despite</b> + существительное, без of и без but."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> здесь оборот in spite of — нужен of.",
            "q": "«Несмотря на цену, она купила это» —",
            "opts": [
              "In spite the price, she bought it",
              "In spite of the price, she bought it",
              "In spite of she bought it"
            ],
            "answer": 1,
            "explain": "<b>in spite of</b> + существительное (the price). of — часть оборота."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери. despite + -ing.",
            "q": "Собери: «Несмотря на усталость, я закончил»",
            "want": "Despite being tired I finished",
            "answer": "Despite being tired I finished"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · однако",
        "title": "<em>however</em> — наречие между двумя предложениями",
        "paras": [
          "<b>however</b> значит «однако» и тоже даёт контраст, но ведёт себя иначе: это <b>наречие</b>, а не союз. Оно связывает <b>два отдельных предложения</b> и обычно отделяется запятой (или стоит после точки с запятой): <b>It was raining. However, we went out.</b>",
          "Сравни с although. <b>although</b> сшивает контраст внутри ОДНОГО предложения: «Although it was raining, we went out». А <b>however</b> стоит между ДВУМЯ предложениями: «It was raining. However, we went out». Смысл один — конструкция разная.",
          "however любит начало второго предложения, но может встать и в середину, в запятых: <b>We went out, however, despite the rain.</b> Его старший, более формальный собрат — <b>nevertheless</b> (тем не менее)."
        ],
        "audio": "however значит «однако» и тоже даёт контраст, но это наречие, а не союз. Оно связывает два отдельных предложения и отделяется запятой: It was raining. However, we went out. Сравни с although: although сшивает контраст внутри одного предложения, а however стоит между двумя. Смысл один — конструкция разная. Более формальный собрат however — nevertheless, тем не менее.",
        "table": {
          "rows": [
            [
              "however = наречие",
              "между двумя предложениями"
            ],
            [
              "…. However, …",
              "It was hard. However, we did it."
            ],
            [
              "…; however, …",
              "It was hard; however, we did it."
            ],
            [
              "nevertheless (формально)",
              "тем не менее"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Было трудно. Однако мы справились.",
            "en": "It was hard. <b>However</b>, we did it.",
            "gloss": "however между предложениями",
            "say": "It was hard. However, we did it."
          },
          {
            "ru": "Билеты были дорогими; тем не менее мы их купили.",
            "en": "The tickets were expensive; <b>nevertheless</b>, we bought them.",
            "gloss": "nevertheless = тем не менее",
            "say": "The tickets were expensive; nevertheless, we bought them."
          },
          {
            "ru": "Хотя было трудно, мы справились.",
            "en": "<b>Although</b> it was hard, we did it.",
            "gloss": "сравни: although — внутри одного предложения",
            "say": "Although it was hard, we did it."
          }
        ],
        "mistakes": [
          {
            "wrong": "However it was raining, we went out",
            "right": "<b>Although</b> it was raining, we went out",
            "why": "however не сшивает контраст внутри предложения — это работа although"
          },
          {
            "wrong": "It was raining, however we went out",
            "right": "It was raining. <b>However,</b> we went out",
            "why": "however вводит новое предложение и отделяется запятой"
          }
        ],
        "mnemonic": "✂️ however — наречие: точка/точка-с-запятой + However, … (между двумя предложениями).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> however стоит между двумя предложениями.",
            "q": "Какой вариант верный?",
            "opts": [
              "However it was late, we stayed",
              "It was late. However, we stayed",
              "However we stayed it was late"
            ],
            "answer": 1,
            "explain": "<b>However</b> вводит второе предложение после точки и запятой."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> внутри одного предложения нужен союз, не however.",
            "q": "«Хотя цена была высокой, мы заплатили» —",
            "opts": [
              "However the price was high, we paid",
              "Although the price was high, we paid",
              "Despite the price was high, we paid"
            ],
            "answer": 1,
            "explain": "Внутри одного предложения — <b>although</b> + предложение. (despite + сущ., however — между предложениями.)"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши вторую часть. Начни с However и запятой.",
            "q": "It was hard. ___ we did it. (Однако мы справились.)",
            "accept": [
              "however we did it",
              "however, we did it"
            ],
            "placeholder": "However, ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · из-за чего",
        "title": "<em>because</em> + предложение vs <em>because of / due to</em> + сущ.",
        "paras": [
          "Теперь про причину. <b>because</b> значит «потому что» и ведёт за собой <b>целое предложение</b>: <b>We stayed in because it was raining.</b> = Мы остались дома, потому что шёл дождь.",
          "А <b>because of</b> — «из-за» — ведёт за собой только <b>существительное</b>: <b>We stayed in because of the rain.</b> Та же логика, что и у пары although/despite: предложение или существительное. <b>due to</b> — это «по причине», более формальный вариант because of: <b>The flight was delayed due to fog.</b>",
          "Ловушка зеркальная вчерашней: нельзя «because the rain» (нет глагола) и нельзя «because of it was raining» (тут целое предложение). Правило простое — есть глагол, бери <b>because</b>; есть только существительное, бери <b>because of</b> или <b>due to</b>."
        ],
        "audio": "Теперь про причину. because значит «потому что» и ведёт за собой целое предложение: We stayed in because it was raining. А because of — «из-за» — ведёт за собой только существительное: We stayed in because of the rain. due to — «по причине», более формальный вариант because of: The flight was delayed due to fog. Ловушка: нельзя because the rain без глагола и нельзя because of it was raining с целым предложением. Есть глагол — бери because; есть только существительное — because of или due to.",
        "table": {
          "rows": [
            [
              "because + предложение",
              "…because it was raining."
            ],
            [
              "because of + сущ.",
              "…because of the rain."
            ],
            [
              "due to + сущ. (формально)",
              "delayed due to fog"
            ],
            [
              "❗ не «because of + предложение»",
              "есть глагол → because"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Мы остались дома, потому что шёл дождь.",
            "en": "We stayed in <b>because</b> it was raining.",
            "gloss": "because + предложение",
            "say": "We stayed in because it was raining."
          },
          {
            "ru": "Мы остались дома из-за дождя.",
            "en": "We stayed in <b>because of</b> the rain.",
            "gloss": "because of + существительное",
            "say": "We stayed in because of the rain."
          },
          {
            "ru": "Рейс задержали из-за тумана.",
            "en": "The flight was delayed <b>due to</b> fog.",
            "gloss": "due to = формальное «из-за»",
            "say": "The flight was delayed due to fog."
          }
        ],
        "mistakes": [
          {
            "wrong": "We stayed in because the rain",
            "right": "We stayed in <b>because of</b> the rain",
            "why": "перед существительным — because of, а не because"
          },
          {
            "wrong": "We stayed in because of it was raining",
            "right": "We stayed in <b>because</b> it was raining",
            "why": "перед целым предложением — because, без of"
          }
        ],
        "mnemonic": "🎯 because + предложение. because of / due to + существительное.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> дальше идёт существительное (the storm).",
            "q": "«Матч отменили из-за бури» —",
            "opts": [
              "The match was cancelled because the storm",
              "The match was cancelled because of the storm",
              "The match was cancelled because of it was a storm"
            ],
            "answer": 1,
            "explain": "Перед существительным — <b>because of</b> (или due to)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> дальше идёт предложение с глаголом.",
            "q": "«Я опоздал, потому что проспал» —",
            "opts": [
              "I was late because of I overslept",
              "I was late because I overslept",
              "I was late because of oversleeping I did"
            ],
            "answer": 1,
            "explain": "Перед предложением (I overslept) — <b>because</b>, без of."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. due to + существительное.",
            "q": "Рейс задержали из-за тумана.",
            "accept": [
              "the flight was delayed due to fog",
              "the flight was delayed due to the fog"
            ],
            "placeholder": "The flight was delayed due to ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Аня и Том планируют поход, хотя прогноз обещает дождь. Слушай, как они спорят связками. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "The forecast says rain, but I still want to go hiking.",
          "ru": "Прогноз обещает дождь, но я всё равно хочу в поход.",
          "words": [
            [
              "forecast",
              "прогноз погоды"
            ],
            [
              "go hiking",
              "идти в поход"
            ]
          ]
        },
        {
          "who": "B",
          "name": "Том",
          "side": "right",
          "en": "Despite the rain? Even though we'll get soaked?",
          "ru": "Несмотря на дождь? Хотя мы промокнем?",
          "words": [
            [
              "despite the rain",
              "несмотря на дождь"
            ],
            [
              "soaked",
              "промокший насквозь"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "Although it's wet, the trail is beautiful in autumn.",
          "ru": "Хотя сыро, тропа осенью прекрасна.",
          "words": [
            [
              "although",
              "хотя"
            ],
            [
              "the trail",
              "тропа, маршрут"
            ]
          ]
        },
        {
          "who": "B",
          "name": "Том",
          "side": "right",
          "en": "True. However, we should take the bus because of the mud.",
          "ru": "Верно. Однако стоит поехать на автобусе из-за грязи.",
          "words": [
            [
              "however",
              "однако"
            ],
            [
              "because of the mud",
              "из-за грязи"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "Deal. In spite of the weather, this will be a great day!",
          "ru": "Договорились. Несмотря на погоду, день будет отличный!",
          "words": [
            [
              "in spite of",
              "несмотря на"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — связки контраста и причины плюс полезные B1-слова вокруг них. Повтори вслух.",
      "items": [
        {
          "en": "although",
          "ru": "хотя (+ предложение)",
          "ex": "Although it rained, we had fun."
        },
        {
          "en": "even though",
          "ru": "хотя даже (усиление)",
          "ex": "Even though I was tired, I kept going."
        },
        {
          "en": "though",
          "ru": "хотя; всё же (разг.)",
          "ex": "It was cold. We swam, though."
        },
        {
          "en": "despite",
          "ru": "несмотря на (+ сущ., без of)",
          "ex": "Despite the cost, it was worth it."
        },
        {
          "en": "in spite of",
          "ru": "несмотря на (+ сущ., с of)",
          "ex": "In spite of the noise, I focused."
        },
        {
          "en": "however",
          "ru": "однако (наречие)",
          "ex": "It was risky. However, it worked."
        },
        {
          "en": "nevertheless",
          "ru": "тем не менее (формально)",
          "ex": "He was new; nevertheless, he did well."
        },
        {
          "en": "because of",
          "ru": "из-за (+ сущ.)",
          "ex": "We were late because of traffic."
        },
        {
          "en": "due to",
          "ru": "по причине, из-за (формально)",
          "ex": "The delay was due to heavy snow."
        },
        {
          "en": "a forecast",
          "ru": "прогноз погоды",
          "ex": "The forecast warned of storms."
        },
        {
          "en": "a reason",
          "ru": "причина",
          "ex": "Give me one good reason."
        },
        {
          "en": "unexpected",
          "ru": "неожиданный",
          "ex": "Despite the unexpected rain, we stayed."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай рассказ о неудачном на вид дне, который спасли. Следи за связками контраста и причины.",
      "title": "A day that went wrong",
      "sentences": [
        "We had planned a picnic by the lake for weeks.",
        "However, on the morning of the trip the sky turned grey.",
        "Although it started to rain, we decided to go anyway.",
        "Despite the bad weather, the road was empty and calm.",
        "We were nearly late because of a long traffic jam in town.",
        "In spite of everything, we reached the lake by noon.",
        "The picnic was cancelled due to the rain, so we ate in the car.",
        "Even though the day didn't go as planned, we laughed the whole time.",
        "Nevertheless, we agreed to check the forecast next time!"
      ],
      "translation": "Мы неделями планировали пикник у озера. Однако в утро поездки небо стало серым. Хотя начался дождь, мы всё равно решили поехать. Несмотря на плохую погоду, дорога была пустой и спокойной. Мы чуть не опоздали из-за длинной пробки в городе. Несмотря ни на что, к полудню мы добрались до озера. Пикник отменили из-за дождя, так что мы ели в машине. Хотя день пошёл не по плану, мы смеялись всё время. Тем не менее в следующий раз договорились проверять прогноз!"
    },
    "drag": {
      "intro": "Соедини связку с тем, что идёт после неё: предложение или существительное. Это главное различие дня.",
      "pairs": [
        [
          "although + …",
          "целое предложение"
        ],
        [
          "despite + …",
          "существительное (без of)"
        ],
        [
          "in spite of + …",
          "существительное (с of)"
        ],
        [
          "however",
          "наречие между предложениями"
        ],
        [
          "because of + …",
          "из-за + существительное"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по связкам. Пять вопросов — и день закрыт.",
      "items": [
        {
          "q": "Какой вариант верный?",
          "opts": [
            "Despite of the rain, we went out",
            "Despite the rain, we went out",
            "Despite it was raining, we went out"
          ],
          "answer": 1,
          "explain": "После <b>despite</b> нет of и нет целого предложения — только существительное."
        },
        {
          "q": "«Хотя было поздно, мы остались» —",
          "opts": [
            "Despite it was late, we stayed",
            "Although it was late, we stayed",
            "However it was late, we stayed"
          ],
          "answer": 1,
          "explain": "Перед предложением — <b>although</b>. (despite + сущ., however — между предложениями.)"
        },
        {
          "q": "«Мы опоздали из-за пробки» —",
          "opts": [
            "We were late because the traffic",
            "We were late because of the traffic",
            "We were late because of it was traffic"
          ],
          "answer": 1,
          "explain": "Перед существительным — <b>because of</b>."
        },
        {
          "q": "Где however стоит правильно?",
          "opts": [
            "However it was hard, we did it",
            "It was hard. However, we did it",
            "It was hard however we did it"
          ],
          "answer": 1,
          "explain": "<b>However</b> — наречие: вводит второе предложение и отделяется запятой."
        },
        {
          "q": "«Несмотря на усталость, я закончил» —",
          "opts": [
            "In spite of being tired, I finished",
            "In spite being tired, I finished",
            "Although being tired, I finished"
          ],
          "answer": 0,
          "explain": "<b>in spite of</b> + -ing (being tired). of обязательно, и это не предложение."
        }
      ]
    },
    "picture": {
      "intro": "Опиши по картинке людей, у которых что-то идёт не по плану, но они не сдаются. Используй связки дня.",
      "emoji": "🌧️⛺😄",
      "prompt": "Опиши сцену: что мешает людям и почему они всё равно довольны. Используй although, despite, however и because of.",
      "hint": "Структуры: Although it's raining…; Despite the bad weather…; However, they…; …because of the…",
      "example": "Although it's raining hard, the campers look happy. Despite the cold, they are sitting outside under a tent. They can't light a fire because of the wet wood. However, they are laughing and sharing hot tea. In spite of everything, it looks like a great trip.",
      "img": "img/b1/day-29.jpg",
      "credit": "Фото: Coconino NF Photography · Public Domain · <a href=\"https://www.flickr.com/photos/42034606@N05/36633028470\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Расскажи о случае, когда всё шло против тебя, но ты добился своего. Связки сделают рассказ по-настоящему B1.",
      "prompt": "Напиши 5–7 предложений о дне или цели, которая удалась вопреки трудностям. Используй хотя бы по разу although, despite / in spite of, however и because of / due to.",
      "hint": "Структуры: Although it was difficult…; Despite the…; However, I…; …because of…; In spite of everything…",
      "example": "Last year I decided to run my first half-marathon. Although I had never run more than five kilometres, I started training every morning. Despite the cold winter weather, I rarely missed a session. However, a month before the race I hurt my knee because of bad shoes. In spite of the pain, I kept training gently. On race day it rained, but I finished in two hours. Even though it was the hardest thing I had ever done, I felt incredibly proud."
    }
  },
  "30": {
    "day": 30,
    "week": "04",
    "level": "B1",
    "themeRu": "Моя история, версия B1",
    "themeEn": "Your story, B1",
    "intro": "Вот и <b>последняя страница уровня B1</b> — поздравляю. Сегодня мы ничего нового не учим; вместо этого ты собираешь всё, чему научился(ась), в одну связную историю о себе. В этом и есть граница между A2 и B1: A2 говорит простыми временами, а B1 <b>рассказывает</b> — с предысторией (три прошедших), с гипотезами (<b>if I had…</b>), с пассивом, с чужой речью (<b>she said that…</b>) и с оценкой через связки. Я проведу тебя по четырём «кирпичикам» проекта, а в конце ты напишешь свой текст. Давай вспомним, какой путь ты прошёл(прошла). Поехали.",
    "introAudio": "Вот и последняя страница уровня B1 — поздравляю. Сегодня мы ничего нового не учим; вместо этого ты собираешь всё, чему научился, в одну связную историю о себе. В этом и есть граница между A2 и B1: A2 говорит простыми временами, а B1 рассказывает — с предысторией из трёх прошедших, с гипотезами if I had, с пассивом, с чужой речью she said that, и с оценкой через связки. Я проведу тебя по четырём кирпичикам проекта, а в конце ты напишешь свой текст. Давай вспомним, какой путь ты прошёл. Поехали.",
    "goals": [
      "собрать связный рассказ о себе на трёх прошедших временах (нарратив)",
      "добавить гипотезу с if и сожаление с wish",
      "вплести пассив и чужую речь (she said that…)",
      "связать всё оценкой через although / however / because of и написать финальный текст"
    ],
    "learned": [
      "Собрал(а) связный рассказ о себе на трёх прошедших временах (нарратив)",
      "Добавил(а) гипотезу с if и сожаление с wish",
      "Вплёл(а) пассив и чужую речь (she said that…)",
      "Связал(а) всё оценкой через although / however / because of и написал(а) финальный текст"
    ],
    "review": {
      "intro": "Сегодня повторение — это и есть главная часть дня. Прогоним весь арсенал B1 короткими задачами: три прошедших, длительность, гипотезы, пассив, чужая речь и связки. Это и кирпичики твоего будущего рассказа.",
      "introAudio": "Сегодня повторение — это и есть главная часть дня. Прогоним весь арсенал B1 короткими задачами: три прошедших, длительность, гипотезы, пассив, чужая речь и связки. Это и кирпичики твоего будущего рассказа.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> событие раньше другого прошлого — Past Perfect (had + 3-я форма).",
          "q": "«Когда я пришёл, поезд уже ушёл» —",
          "opts": [
            "When I arrived, the train already left",
            "When I arrived, the train had already left",
            "When I had arrived, the train left"
          ],
          "answer": 1,
          "explain": "Раннее событие — <b>had left</b> (Past Perfect); позднее — arrived (Past Simple)."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> длительность до сейчас — Present Perfect Continuous.",
          "q": "«Я учу английский уже два года» —",
          "opts": [
            "I learn English for two years",
            "I have been learning English for two years",
            "I am learning English for two years"
          ],
          "answer": 1,
          "explain": "Длительность вплоть до сейчас: <b>have been learning</b> + for two years."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> нереальное прошлое — third conditional. Одно «бы», would только в главной.",
          "q": "«Если бы я знал, я бы помог» —",
          "opts": [
            "If I would know, I would help",
            "If I had known, I would have helped",
            "If I knew, I would helped"
          ],
          "answer": 1,
          "explain": "Third conditional: <b>if I had known, I would have helped</b>. would только в главной части."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> пассив — be + 3-я форма. Не роняй be.",
          "q": "«На этом заводе делают машины» —",
          "opts": [
            "Cars make at this factory",
            "Cars are made at this factory",
            "Cars are make at this factory"
          ],
          "answer": 1,
          "explain": "Пассив: <b>are made</b> (be + 3-я форма). «Cars are make» — потерян переход в 3-ю форму."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> чужая речь — сдвиг времён + tell кому.",
          "q": "«Она сказала мне, что устала» —",
          "opts": [
            "She said me she is tired",
            "She told me she was tired",
            "She told to me she is tired"
          ],
          "answer": 1,
          "explain": "<b>told me</b> (tell + кому) + сдвиг is→<b>was</b>. Русский время не сдвигает — английский сдвигает."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> вчерашняя связка — despite + существительное (без of).",
          "q": "Собери: «Несмотря на дождь, я закончил»",
          "want": "Despite the rain I finished",
          "answer": "Despite the rain I finished"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Кирпичик 1 · нарратив",
        "title": "Слой за слоем: три прошедших в рассказе",
        "paras": [
          "Хорошая B1-история стоит на трёх прошедших временах сразу. <b>Past Simple</b> — факты-события одно за другим (I moved, I started). <b>Past Continuous</b> — фон, длящаяся обстановка (it was raining, people were talking). <b>Past Perfect</b> — предыстория, то, что случилось ещё раньше (I had never studied before).",
          "Русскому здесь тяжело: у нас одно прошедшее на все три слоя, и хочется свалить всё в Past Simple. Не своди — наоборот, расслаивай: что было <b>фоном</b>, что — <b>фактом</b>, а что — <b>раньше</b>.",
          "Собери мини-сцену: <b>While I was walking home, I met an old friend I hadn't seen for years.</b> = Пока я шёл домой (фон), я встретил друга (факт), которого не видел много лет (предыстория). Вот так выглядит B1-нарратив."
        ],
        "audio": "Хорошая B1-история стоит на трёх прошедших сразу. Past Simple — факты-события одно за другим. Past Continuous — фон, длящаяся обстановка. Past Perfect — предыстория, то, что случилось ещё раньше. Русскому тяжело: у нас одно прошедшее на все три слоя. Не своди всё в одно — расслаивай. Пример: While I was walking home, I met an old friend I hadn't seen for years. Пока я шёл домой — фон, я встретил друга — факт, которого не видел годами — предыстория.",
        "table": {
          "rows": [
            [
              "Past Continuous — фон",
              "While I was walking…"
            ],
            [
              "Past Simple — факт",
              "…I met an old friend…"
            ],
            [
              "Past Perfect — предыстория",
              "…I hadn't seen for years."
            ],
            [
              "Present Perfect — итог сейчас",
              "Since then, I have changed a lot."
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Пока я шёл домой, я встретил друга, которого не видел годами.",
            "en": "While I <b>was walking</b> home, I <b>met</b> a friend I <b>hadn't seen</b> for years.",
            "gloss": "фон + факт + предыстория",
            "say": "While I was walking home, I met a friend I hadn't seen for years."
          },
          {
            "ru": "Когда начался урок, я понял, что забыл тетрадь.",
            "en": "When the lesson <b>started</b>, I <b>realised</b> I <b>had forgotten</b> my notebook.",
            "gloss": "факт + предыстория",
            "say": "When the lesson started, I realised I had forgotten my notebook."
          },
          {
            "ru": "С тех пор я сильно изменился.",
            "en": "Since then, I <b>have changed</b> a lot.",
            "gloss": "итог к настоящему",
            "say": "Since then, I have changed a lot."
          }
        ],
        "mistakes": [
          {
            "wrong": "While I walked home, I was meeting a friend",
            "right": "While I <b>was walking</b> home, I <b>met</b> a friend",
            "why": "фон — was walking, короткий факт — met (а не наоборот)"
          },
          {
            "wrong": "I met a friend I didn't see for years",
            "right": "I met a friend I <b>hadn't seen</b> for years",
            "why": "более ранний слой — Past Perfect: hadn't seen"
          }
        ],
        "mnemonic": "🎬 Фон was doing · факт did · предыстория had done — три слоя одной истории.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> длящийся фон — Past Continuous; короткий факт — Past Simple.",
            "q": "«Пока я готовил ужин, зазвонил телефон» —",
            "opts": [
              "While I cooked dinner, the phone was ringing",
              "While I was cooking dinner, the phone rang",
              "While I was cooking dinner, the phone was ringing"
            ],
            "answer": 1,
            "explain": "Фон — <b>was cooking</b>, короткое событие на его фоне — <b>rang</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери. Предыстория — had + 3-я форма.",
            "q": "Собери: «Когда я приехал, фильм уже начался»",
            "want": "When I arrived the film had already started",
            "answer": "When I arrived the film had already started"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. Past Perfect для более раннего слоя.",
            "q": "Я встретил друга, которого не видел годами.",
            "accept": [
              "i met a friend i hadn't seen for years",
              "i met a friend i had not seen for years"
            ],
            "placeholder": "I met a friend I hadn't seen ..."
          }
        ]
      },
      {
        "eyebrow": "Кирпичик 2 · гипотезы и сожаления",
        "title": "Что было бы и о чём жалею: <em>if</em> и <em>wish</em>",
        "paras": [
          "B1-рассказ умеет отступать в воображаемое. <b>Second conditional</b> — нереальное настоящее: <b>if + Past Simple, … would + базовая</b>. «If I had more time, I would travel.» <b>Third conditional</b> — нереальное прошлое: <b>if + had done, … would have + 3-я форма</b>. «If I hadn't started, I would never have learned.»",
          "Главная русская ловушка тут — одно «бы». По-русски «бы» стоит в обеих частях, и тянет поставить <b>would</b> и в if. Нельзя: <b>would живёт только в главной части</b>, а в if — прошедшее (had / had done).",
          "<b>wish</b> добавляет сожаление. О настоящем — <b>wish + Past</b>: «I wish I knew» (жаль, что не знаю). О прошлом — <b>wish + Past Perfect</b>: «I wish I had started earlier» (жаль, что не начал раньше). Эти штрихи и придают истории глубину."
        ],
        "audio": "B1-рассказ умеет отступать в воображаемое. Second conditional — нереальное настоящее: if плюс Past Simple, would плюс базовая. If I had more time, I would travel. Third conditional — нереальное прошлое: if плюс had done, would have плюс третья форма. If I hadn't started, I would never have learned. Главная ловушка — одно «бы»: по-русски бы в обеих частях, но would живёт только в главной, в if — прошедшее. И wish добавляет сожаление: о настоящем wish плюс Past, о прошлом wish плюс Past Perfect. I wish I had started earlier.",
        "table": {
          "rows": [
            [
              "Second conditional",
              "If I had time, I would travel."
            ],
            [
              "Third conditional",
              "If I had known, I would have come."
            ],
            [
              "wish + Past (о настоящем)",
              "I wish I knew the answer."
            ],
            [
              "wish + Past Perfect (о прошлом)",
              "I wish I had started earlier."
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Если бы у меня было больше времени, я бы путешествовал.",
            "en": "If I <b>had</b> more time, I <b>would travel</b>.",
            "gloss": "2nd: if + Past, would + базовая",
            "say": "If I had more time, I would travel."
          },
          {
            "ru": "Если бы я не начал, я бы так и не выучил язык.",
            "en": "If I <b>hadn't started</b>, I <b>would never have learned</b> the language.",
            "gloss": "3rd: if + had done, would have + 3-я форма",
            "say": "If I hadn't started, I would never have learned the language."
          },
          {
            "ru": "Жаль, что я не начал раньше.",
            "en": "I <b>wish</b> I <b>had started</b> earlier.",
            "gloss": "wish + Past Perfect = о прошлом",
            "say": "I wish I had started earlier."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I would have time, I would travel",
            "right": "If I <b>had</b> time, I would travel",
            "why": "would только в главной; в if — прошедшее (одно «бы» не значит два would)"
          },
          {
            "wrong": "I wish I have started earlier",
            "right": "I wish I <b>had started</b> earlier",
            "why": "сожаление о прошлом — wish + Past Perfect"
          }
        ],
        "mnemonic": "🌀 Одно «бы» ≠ два would. would — только в главной части; if — прошедшее.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> нереальное настоящее — second conditional.",
            "q": "«Если бы я был богат, я бы помогал другим» —",
            "opts": [
              "If I would be rich, I would help others",
              "If I were rich, I would help others",
              "If I am rich, I will help others"
            ],
            "answer": 1,
            "explain": "Second conditional: <b>if I were rich, I would help</b>. would только в главной."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сожаление о прошлом — wish + Past Perfect.",
            "q": "«Жаль, что я не учился усерднее» —",
            "opts": [
              "I wish I studied harder",
              "I wish I had studied harder",
              "I wish I have studied harder"
            ],
            "answer": 1,
            "explain": "О прошлом: <b>wish + had studied</b> (Past Perfect)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери third conditional. would have + 3-я форма.",
            "q": "Собери: «Если бы я знал, я бы пришёл»",
            "want": "If I had known I would have come",
            "answer": "If I had known I would have come"
          }
        ]
      },
      {
        "eyebrow": "Кирпичик 3 · пассив и чужая речь",
        "title": "Когда важно не «кто»: пассив и <em>she said that…</em>",
        "paras": [
          "Иногда в истории важно действие, а не деятель. Тогда — <b>пассив</b>: <b>be + 3-я форма</b>. «I was given a chance.» (Мне дали шанс.) «The work was finished on time.» Держи <b>be</b> на месте и не роняй переход в 3-ю форму: не «was finish», а <b>was finished</b>.",
          "А чтобы пересказать чужие слова, нужна <b>чужая речь</b> со сдвигом времён: is → was, will → would, do → did. «She said that she <b>was</b> proud of me.» Помни про <b>say</b> и <b>tell</b>: <b>tell</b> требует адресата (tell me), <b>say</b> — нет (say that…).",
          "Русский здесь сопротивляется дважды: пассив он часто делает через «-ся» или «3-е лицо мн.ч.» («дом строится / строят»), а время в косвенной речи не сдвигает («Он сказал, что устал» сохраняет настоящее). В английском — be + 3-я форма и обязательный сдвиг."
        ],
        "audio": "Иногда в истории важно действие, а не деятель. Тогда пассив: be плюс третья форма. I was given a chance — мне дали шанс. Держи be на месте: не was finish, а was finished. А чтобы пересказать чужие слова, нужна чужая речь со сдвигом времён: is становится was, will становится would. She said that she was proud of me. Помни про say и tell: tell требует адресата, say — нет. Русский сопротивляется: пассив делает через -ся, а время в косвенной речи не сдвигает. В английском — be плюс третья форма и обязательный сдвиг.",
        "table": {
          "rows": [
            [
              "Пассив present",
              "Cars are made here."
            ],
            [
              "Пассив past",
              "I was given a chance."
            ],
            [
              "Reported: сдвиг времён",
              "is → was, will → would"
            ],
            [
              "say (без адресата) / tell (+ кому)",
              "She said that… / She told me that…"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Мне дали второй шанс.",
            "en": "I <b>was given</b> a second chance.",
            "gloss": "пассив: was + given",
            "say": "I was given a second chance."
          },
          {
            "ru": "Работу закончили вовремя.",
            "en": "The work <b>was finished</b> on time.",
            "gloss": "пассив: was + finished",
            "say": "The work was finished on time."
          },
          {
            "ru": "Учитель сказал мне, что я делаю успехи.",
            "en": "The teacher <b>told me</b> that I <b>was making</b> progress.",
            "gloss": "told me + сдвиг am→was",
            "say": "The teacher told me that I was making progress."
          }
        ],
        "mistakes": [
          {
            "wrong": "The work was finish on time",
            "right": "The work <b>was finished</b> on time",
            "why": "пассив — be + 3-я форма (finished), не базовая"
          },
          {
            "wrong": "She said me that she is tired",
            "right": "She <b>told me</b> that she <b>was</b> tired",
            "why": "tell + кому (told me) и сдвиг времени is→was"
          }
        ],
        "mnemonic": "🪞 Пассив = be + 3-я форма. Чужая речь = сдвиг времён + tell кому / say без кого.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> пассив — be + 3-я форма.",
            "q": "«Этот мост построили в 1900 году» —",
            "opts": [
              "This bridge built in 1900",
              "This bridge was built in 1900",
              "This bridge was build in 1900"
            ],
            "answer": 1,
            "explain": "Пассив past: <b>was built</b> (be + 3-я форма)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> чужая речь — сдвиг времён и нужный глагол.",
            "q": "«Он сказал мне, что позвонит» —",
            "opts": [
              "He said me that he will call",
              "He told me that he would call",
              "He told me that he will call"
            ],
            "answer": 1,
            "explain": "<b>told me</b> + сдвиг will→<b>would</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. Пассив: be + given.",
            "q": "Мне дали второй шанс.",
            "accept": [
              "i was given a second chance",
              "i was given a second chance."
            ],
            "placeholder": "I was given a ..."
          }
        ]
      },
      {
        "eyebrow": "Кирпичик 4 · оценка со связками",
        "title": "Свяжи и оцени: <em>although / however / because of</em>",
        "paras": [
          "Последний кирпичик — то, что превращает набор фактов в <b>связный</b> рассказ с твоим отношением. Вчерашние связки: <b>although</b> + предложение, <b>despite / in spite of</b> + существительное, <b>however</b> между двумя предложениями, <b>because of / due to</b> + существительное.",
          "Ими ты показываешь контраст и причину в своей истории: «<b>Although</b> it was hard, I didn't give up.» «I almost quit <b>because of</b> the stress.» «<b>However</b>, everything changed when…»",
          "И хорошая концовка часто звучит как итог-оценка: «<b>In spite of</b> all the difficulties, I'm proud of how far I've come.» Это уже зрелый B1 — мнение, оформленное связками и временами."
        ],
        "audio": "Последний кирпичик — то, что превращает набор фактов в связный рассказ с твоим отношением. Вчерашние связки: although плюс предложение, despite или in spite of плюс существительное, however между двумя предложениями, because of или due to плюс существительное. Ими ты показываешь контраст и причину. Although it was hard, I didn't give up. I almost quit because of the stress. However, everything changed when… И хорошая концовка — итог-оценка: In spite of all the difficulties, I'm proud of how far I've come.",
        "table": {
          "rows": [
            [
              "although + предложение",
              "Although it was hard, I stayed."
            ],
            [
              "despite + сущ. (без of)",
              "Despite the stress, I went on."
            ],
            [
              "however (между предложениями)",
              "…. However, things changed."
            ],
            [
              "because of / due to + сущ.",
              "I nearly quit because of fear."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Хотя было трудно, я не сдался.",
            "en": "<b>Although</b> it was hard, I didn't give up.",
            "gloss": "although + предложение",
            "say": "Although it was hard, I didn't give up."
          },
          {
            "ru": "Я чуть не бросил из-за стресса.",
            "en": "I almost quit <b>because of</b> the stress.",
            "gloss": "because of + существительное",
            "say": "I almost quit because of the stress."
          },
          {
            "ru": "Несмотря на все трудности, я горжусь тем, как далеко зашёл.",
            "en": "<b>In spite of</b> all the difficulties, I'm proud of how far I've come.",
            "gloss": "in spite of + сущ. — концовка-оценка",
            "say": "In spite of all the difficulties, I'm proud of how far I've come."
          }
        ],
        "mistakes": [
          {
            "wrong": "Despite of the stress, I went on",
            "right": "<b>Despite</b> the stress, I went on",
            "why": "после despite нет of (вчерашняя ловушка)"
          },
          {
            "wrong": "However it was hard, I stayed",
            "right": "<b>Although</b> it was hard, I stayed",
            "why": "внутри одного предложения — although, не however"
          }
        ],
        "mnemonic": "🧵 Связки сшивают историю: although + предложение · despite + сущ. · however между предложениями.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> внутри одного предложения — although.",
            "q": "«Хотя я часто ошибался, я продолжал» —",
            "opts": [
              "However I made many mistakes, I continued",
              "Although I made many mistakes, I continued",
              "Despite I made many mistakes, I continued"
            ],
            "answer": 1,
            "explain": "<b>Although</b> + предложение. (despite + сущ., however — между предложениями.)"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> перед существительным — because of.",
            "q": "«Я почти сдался из-за страха» —",
            "opts": [
              "I almost gave up because the fear",
              "I almost gave up because of the fear",
              "I almost gave up because of I was afraid"
            ],
            "answer": 1,
            "explain": "Перед существительным — <b>because of</b> (the fear)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери концовку-оценку. despite + сущ.",
            "q": "Собери: «Несмотря на трудности, я горжусь собой»",
            "want": "Despite the difficulties I am proud of myself",
            "answer": "Despite the difficulties I am proud of myself"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Аня и Том дошли до конца уровня B1 и делятся своими историями. Слушай, как весь арсенал звучит в живой речи. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "Can you believe it? We've been studying English for a whole year.",
          "ru": "Представляешь? Мы учим английский уже целый год.",
          "words": [
            [
              "we've been studying",
              "мы учим (длительность)"
            ],
            [
              "a whole year",
              "целый год"
            ]
          ]
        },
        {
          "who": "B",
          "name": "Том",
          "side": "right",
          "en": "I know! If I hadn't started, I would never have spoken to you in English.",
          "ru": "И не говори! Если бы я не начал, я бы никогда не заговорил с тобой по-английски.",
          "words": [
            [
              "if I hadn't started",
              "если бы я не начал"
            ],
            [
              "would never have spoken",
              "никогда бы не заговорил"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "My teacher told me that I had improved a lot. I was so proud.",
          "ru": "Учитель сказал мне, что я сильно вырос. Я так гордилась.",
          "words": [
            [
              "told me that",
              "сказал мне, что"
            ],
            [
              "had improved",
              "вырос (раньше)"
            ]
          ]
        },
        {
          "who": "B",
          "name": "Том",
          "side": "right",
          "en": "Although it was tough, it was worth it. I wish I had started earlier, though.",
          "ru": "Хотя было тяжело, оно того стоило. Жаль только, что не начал раньше.",
          "words": [
            [
              "although it was tough",
              "хотя было тяжело"
            ],
            [
              "I wish I had started",
              "жаль, что не начал"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Аня",
          "side": "left",
          "en": "Despite all the hard days, I'd do it all again. On to B2!",
          "ru": "Несмотря на все трудные дни, я бы прошла всё заново. Вперёд к B2!",
          "words": [
            [
              "despite all the hard days",
              "несмотря на все трудные дни"
            ],
            [
              "on to B2",
              "вперёд к B2"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова и обороты для рассказа о пути и достижениях — пригодятся в твоём финальном тексте. Повтори вслух.",
      "items": [
        {
          "en": "to look back",
          "ru": "оглядываться назад",
          "ex": "When I look back, I've come a long way."
        },
        {
          "en": "a journey",
          "ru": "путь, путешествие",
          "ex": "Learning a language is a long journey."
        },
        {
          "en": "to make progress",
          "ru": "делать успехи",
          "ex": "I've made real progress this year."
        },
        {
          "en": "to be proud of",
          "ru": "гордиться (чем-то)",
          "ex": "I'm proud of how far I've come."
        },
        {
          "en": "an achievement",
          "ru": "достижение",
          "ex": "Finishing B1 is a big achievement."
        },
        {
          "en": "to turn out",
          "ru": "обернуться, получиться",
          "ex": "It turned out better than I expected."
        },
        {
          "en": "at first",
          "ru": "поначалу, сначала",
          "ex": "At first, everything felt impossible."
        },
        {
          "en": "eventually",
          "ru": "в конце концов",
          "ex": "Eventually, it started to make sense."
        },
        {
          "en": "to give up",
          "ru": "сдаваться, бросать",
          "ex": "I almost gave up many times."
        },
        {
          "en": "confident",
          "ru": "уверенный (в себе)",
          "ex": "Now I feel much more confident."
        },
        {
          "en": "a challenge",
          "ru": "вызов, трудная задача",
          "ex": "Every lesson was a small challenge."
        },
        {
          "en": "to be worth it",
          "ru": "стоить того",
          "ex": "It was hard, but it was worth it."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай образцовый B1-рассказ. Это модель для твоего проекта: найди в нём три прошедших, гипотезу, пассив, чужую речь и связки.",
      "title": "My English journey",
      "sentences": [
        "Two years ago, I decided to learn English properly.",
        "Before that, I had only studied a little at school, and I had forgotten almost everything.",
        "At first it was hard, because I was working full-time and studying late at night.",
        "While I was struggling with grammar, a colleague told me that I was already improving.",
        "I was given the chance to join an online class, and that changed everything.",
        "If I hadn't taken that class, I would never have found the confidence to speak.",
        "Although I still make mistakes, I can now tell a whole story in the past.",
        "Despite the difficult moments, I almost never thought about giving up.",
        "Sometimes I wish I had started earlier, but I'm proud of how far I've come.",
        "Looking back, the journey was hard; however, it was completely worth it."
      ],
      "translation": "Два года назад я решил выучить английский как следует. До этого я лишь немного занимался в школе и почти всё забыл. Поначалу было трудно, потому что я работал полный день и занимался поздно ночью. Пока я мучился с грамматикой, коллега сказал мне, что я уже расту. Мне дали шанс попасть в онлайн-класс, и это всё изменило. Если бы я не пошёл на тот курс, я бы так и не набрался смелости заговорить. Хотя я всё ещё делаю ошибки, теперь я могу рассказать целую историю в прошлом. Несмотря на трудные моменты, я почти не думал бросить. Иногда жаль, что не начал раньше, но я горжусь тем, как далеко зашёл. Оглядываясь назад: путь был тяжёлым; однако он полностью того стоил."
    },
    "drag": {
      "intro": "Соедини конструкцию B1 с тем, что она делает в рассказе. Это карта всего арсенала уровня.",
      "pairs": [
        [
          "had + 3-я форма",
          "предыстория (раньше другого прошлого)"
        ],
        [
          "have been + -ing",
          "длительность вплоть до сейчас"
        ],
        [
          "if + had done, would have…",
          "нереальное прошлое"
        ],
        [
          "be + 3-я форма",
          "пассив (действие важнее деятеля)"
        ],
        [
          "said / told + сдвиг времён",
          "чужая речь"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка всего уровня B1. Пять вопросов — и ты у финиша!",
      "items": [
        {
          "q": "«Когда я пришёл, они уже ушли» —",
          "opts": [
            "When I arrived, they already left",
            "When I arrived, they had already left",
            "When I had arrived, they were leaving"
          ],
          "answer": 1,
          "explain": "Раннее событие — <b>had left</b> (Past Perfect)."
        },
        {
          "q": "«Если бы я знал, я бы помог» —",
          "opts": [
            "If I would know, I would help",
            "If I had known, I would have helped",
            "If I knew, I will help"
          ],
          "answer": 1,
          "explain": "Third conditional: <b>if I had known, I would have helped</b>."
        },
        {
          "q": "«Этот дом построили сто лет назад» —",
          "opts": [
            "This house built a hundred years ago",
            "This house was built a hundred years ago",
            "This house was build a hundred years ago"
          ],
          "answer": 1,
          "explain": "Пассив: <b>was built</b> (be + 3-я форма)."
        },
        {
          "q": "«Она сказала мне, что устала» —",
          "opts": [
            "She said me that she is tired",
            "She told me that she was tired",
            "She told me that she is tired"
          ],
          "answer": 1,
          "explain": "<b>told me</b> + сдвиг is→<b>was</b>."
        },
        {
          "q": "«Несмотря на дождь, мы пошли» —",
          "opts": [
            "Despite of the rain, we went",
            "Despite the rain, we went",
            "Although the rain, we went"
          ],
          "answer": 1,
          "explain": "<b>despite</b> + существительное, без of."
        }
      ]
    },
    "picture": {
      "intro": "Опиши по картинке человека на вершине своего пути — он оглядывается на пройденную дорогу. Используй весь арсенал B1.",
      "emoji": "🏔️🎯🎓",
      "prompt": "Опиши путь этого человека: что было трудно, что бы случилось без усилий, чем он гордится. Используй три прошедших, if, пассив и связки.",
      "hint": "Структуры: She had never…; While she was…; If she hadn't…, she would never have…; Although it was hard…; She is proud of…",
      "example": "She is standing on top of a mountain, looking back at the long path. A year ago she had never climbed anything. While she was training, many people told her it was impossible. If she hadn't kept going, she would never have reached the top. Although the climb was exhausting, she didn't give up. Despite the cold and the fear, she made it. Now she is proud of how far she has come.",
      "img": "img/b1/day-30.jpg",
      "credit": "Фото: Joshua Tree National Park · Public Domain · <a href=\"https://www.flickr.com/photos/115357548@N08/38295653594\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Это он — финальный проект уровня B1. Расскажи свою историю: путь, который ты прошёл (в учёбе, работе или жизни). Собери в нём все кирпичики, которые мы сегодня повторили.",
      "prompt": "Напиши 7–10 предложений о важном пути или достижении в твоей жизни. Обязательно используй: (1) три прошедших времени в рассказе, (2) гипотезу с if или сожаление с wish, (3) пассив, (4) чужую речь (someone said/told me that…), (5) хотя бы две связки — although / however / despite / because of.",
      "hint": "План: начало (Past Simple) → предыстория (had done) → фон (was doing) → поворот → гипотеза (if I hadn't…, I would never have…) → чужая речь (my … told me that…) → пассив (I was given… / it was…) → оценка со связками (Although…, …; However, …; In spite of…). Заверши гордой концовкой.",
      "example": "Three years ago, I decided to change my career. Before that, I had spent ten years in a job I didn't enjoy. While I was looking for a new path, I started studying coding at night. At first it was overwhelming, and I almost gave up because of the pressure. However, my mentor told me that I had real talent, and that kept me going. Eventually I was offered an internship at a small company. If I hadn't taken that risk, I would never have found work I love. Although the journey was long and tiring, it was completely worth it. I sometimes wish I had started sooner, but in spite of everything, I'm proud of how far I've come."
    }
  }
};
