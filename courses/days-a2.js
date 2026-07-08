/* ЗЕРКАЛО · MIRROR — English A2 content (days 1–30, level A2, continues after A1).
   Same "Day" schema as A1 (see docs/CONTENT-MODEL.md). Global object name `DAYS`
   so the A2 renderer (en-a2.html) reuses the A1 engine unchanged.
   Built from COURSE-PLAN-A2.md. Days 1 & 8 are the hand-authored pattern-lock
   exemplars; the rest follow the same schema, Мира voice, and per-day Russian-trap flags. */
const DAYS = {
  "1": {
    "day": 1,
    "week": "01",
    "level": "A2",
    "themeRu": "Что было",
    "themeEn": "Irregular past",
    "intro": "Привет! Я Мира, и вместе мы открываем первую страницу уровня <b>A2</b>. Весь A1 позади — ты прошёл(ла) его, и это дорогого стоит. Начнём мягко. На A1 ты уже говорил(а) о вчерашнем дне с обычными глаголами: work стал worked, play — played. Но самые частые глаголы в прошлом живут по своим правилам: go превращается в <b>went</b>, see — в <b>saw</b>. Их немного, и мы возьмём их по шагам. Готов(а)? Поехали.",
    "introAudio": "Привет! Я Мира, и вместе мы открываем первую страницу уровня A2. Весь A1 позади — ты прошёл его, и это дорогого стоит. Начнём мягко. На A1 ты уже говорил о вчерашнем дне с обычными глаголами: work стал worked, play — played. Но самые частые глаголы в прошлом живут по своим правилам: go превращается в went, see — в saw. Их немного, и мы возьмём их по шагам. Поехали.",
    "goals": [
      "понять, что такое неправильные глаголы и почему go→went, а не «goed»",
      "к концу дня рассказать о вчерашнем дне: I went, I had, I saw, I ate",
      "запомнить 10 самых частых неправильных глаголов в прошедшем времени",
      "услышать три варианта окончания <b>-ed</b>: /t/, /d/, /ɪd/"
    ],
    "learned": [
      "Понял(а), что такое неправильные глаголы и почему go→went, а не «goed»",
      "К концу дня рассказал(а) о вчерашнем дне: I went, I had, I saw, I ate",
      "Запомнил(а) 10 самых частых неправильных глаголов в прошедшем времени",
      "Услышал(а) три варианта окончания <b>-ed</b>: /t/, /d/, /ɪd/"
    ],
    "review": {
      "intro": "Перед новым — лёгкая разминка из A1. Вспомним прошедшее время правильных глаголов и was/were. Это фундамент, на котором мы строим сегодня.",
      "introAudio": "Перед новым — лёгкая разминка из A1. Вспомним прошедшее время правильных глаголов и was, were. Это фундамент, на котором мы строим сегодня.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери правильный вариант. Глагол правильный (work).",
          "q": "Как сказать «Я работал вчера»?",
          "opts": [
            "I work yesterday",
            "I worked yesterday",
            "I am work yesterday"
          ],
          "answer": 1,
          "explain": "Правильный глагол в прошлом: work + -ed = <b>worked</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу. Вспомни was/were из A1.",
          "q": "Собери: «Это было легко»",
          "want": "It was easy",
          "answer": "It was easy"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · неправильные глаголы",
        "title": "Прошлое не по правилам — <em>go → went</em>",
        "paras": [
          "В прошедшем времени большинство глаголов получают окончание <b>-ed</b>: work → worked, play → played. Это ты уже умеешь с A1.",
          "Но самые частые глаголы — «неправильные»: они меняют форму целиком. <b>go → went</b> (идти → пошёл), <b>have → had</b> (иметь → был/имел), <b>see → saw</b> (видеть → увидел), <b>eat → ate</b> (есть → съел).",
          "Правила тут нет — эти формы просто запоминают, как слова. Хорошая новость: их немного, и встречаются они на каждом шагу, поэтому запомнятся быстро."
        ],
        "audio": "В прошедшем времени большинство глаголов получают окончание -ed: work стал worked, play стал played. Но самые частые глаголы неправильные: они меняют форму целиком. go превращается в went, have в had, see в saw, eat в ate. Правила тут нет — эти формы просто запоминают, как слова.",
        "table": {
          "rows": [
            [
              "go → went <button class=\"play\" data-say=\"went\">🔊</button>",
              "идти → пошёл"
            ],
            [
              "have → had",
              "иметь → был / имел"
            ],
            [
              "see → saw",
              "видеть → увидел"
            ],
            [
              "eat → ate",
              "есть → съел"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я пошёл на работу.",
            "en": "I <b>went</b> to work.",
            "gloss": "go → went",
            "say": "I went to work."
          },
          {
            "ru": "Я позавтракал.",
            "en": "I <b>had</b> breakfast.",
            "gloss": "have → had",
            "say": "I had breakfast."
          },
          {
            "ru": "Я увидел друга.",
            "en": "I <b>saw</b> a friend.",
            "gloss": "see → saw",
            "say": "I saw a friend."
          },
          {
            "ru": "Я съел яблоко.",
            "en": "I <b>ate</b> an apple.",
            "gloss": "eat → ate",
            "say": "I ate an apple."
          }
        ],
        "mistakes": [
          {
            "wrong": "I goed to work",
            "right": "I <b>went</b> to work",
            "why": "go — неправильный: не «goed», а went"
          },
          {
            "wrong": "I eated an apple",
            "right": "I <b>ate</b> an apple",
            "why": "eat → ate, без -ed"
          }
        ],
        "mnemonic": "🔁 Самые частые глаголы — самые «неправильные»: go→went, have→had, see→saw, eat→ate.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму прошедшего.",
            "q": "Как сказать «Я пошёл домой»?",
            "opts": [
              "I goed home",
              "I went home",
              "I go home"
            ],
            "answer": 1,
            "explain": "go в прошлом — <b>went</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение из слов.",
            "q": "Собери: «Я увидел кота»",
            "want": "I saw a cat",
            "answer": "I saw a cat"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. have breakfast = завтракать.",
            "q": "Я позавтракал.",
            "accept": [
              "i had breakfast"
            ],
            "placeholder": "I ... breakfast"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · ещё частые",
        "title": "Дальше: <em>do → did, make → made, take → took</em>",
        "paras": [
          "Вот ещё пятёрка очень частых неправильных глаголов: <b>do → did</b> (делать), <b>make → made</b> (делать/готовить), <b>take → took</b> (брать), <b>come → came</b> (приходить), <b>get → got</b> (получать/становиться).",
          "Заметь: <b>do</b> в прошлом — <b>did</b>. Это слово вернётся завтра как «помощник» для вопросов. Сегодня просто запомни: «я делал» = I did.",
          "Учи их парами вслух: do–did, make–made, take–took. Пара звучит — пара запоминается."
        ],
        "audio": "Вот ещё пятёрка очень частых неправильных глаголов. do превращается в did, make в made, take в took, come в came, get в got. Учи их парами вслух: do did, make made, take took.",
        "table": {
          "rows": [
            [
              "do → did",
              "делать → делал"
            ],
            [
              "make → made",
              "делать/готовить → сделал"
            ],
            [
              "take → took",
              "брать → взял"
            ],
            [
              "come → came",
              "приходить → пришёл"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я сделал ошибку.",
            "en": "I <b>made</b> a mistake.",
            "gloss": "make → made",
            "say": "I made a mistake."
          },
          {
            "ru": "Он взял такси.",
            "en": "He <b>took</b> a taxi.",
            "gloss": "take → took",
            "say": "He took a taxi."
          },
          {
            "ru": "Она пришла домой.",
            "en": "She <b>came</b> home.",
            "gloss": "come → came",
            "say": "She came home."
          },
          {
            "ru": "Я сделал домашнее задание.",
            "en": "I <b>did</b> my homework.",
            "gloss": "do → did",
            "say": "I did my homework."
          }
        ],
        "mistakes": [
          {
            "wrong": "I maked dinner",
            "right": "I <b>made</b> dinner",
            "why": "make → made, не «maked»"
          },
          {
            "wrong": "He taked a taxi",
            "right": "He <b>took</b> a taxi",
            "why": "take → took"
          }
        ],
        "mnemonic": "✋ do–did, make–made, take–took, come–came — учи парами вслух.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму.",
            "q": "«Он взял мою ручку» —",
            "opts": [
              "He taked my pen",
              "He took my pen",
              "He take my pen"
            ],
            "answer": 1,
            "explain": "take → <b>took</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Я сделал кофе»",
            "want": "I made coffee",
            "answer": "I made coffee"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши форму прошедшего. come → ?",
            "q": "Она пришла.",
            "accept": [
              "she came"
            ],
            "placeholder": "She ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · произношение -ed",
        "title": "Окончание <em>-ed</em> звучит тремя способами",
        "paras": [
          "У правильных глаголов окончание -ed на письме одно, а в речи звучит по-разному. Это не нужно зубрить — достаточно услышать и повторить за мной.",
          "После глухого звука — <b>/t/</b>: worked, liked, stopped (как «т»). После звонкого — <b>/d/</b>: played, lived, opened (как «д»). После t/d добавляется целый слог <b>/ɪd/</b>: wanted, needed, started («-ид»).",
          "Главное: -ed становится лишним слогом ТОЛЬКО после t или d. worked — это один слог, не «уор-кед». А wanted — два: «уон-тид»."
        ],
        "audio": "Уоркт. Плэйд. Уонтид. Лайкт. Ливд. Стартид. Лишний слог только после t или d: wanted, needed.",
        "table": {
          "rows": [
            [
              "/t/",
              "worked, liked, stopped"
            ],
            [
              "/d/",
              "played, lived, opened"
            ],
            [
              "/ɪd/ (лишний слог)",
              "wanted, needed, started"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Я работал.",
            "en": "I worked.",
            "gloss": "-ed = /t/",
            "say": "I worked."
          },
          {
            "ru": "Я играл.",
            "en": "I played.",
            "gloss": "-ed = /d/",
            "say": "I played."
          },
          {
            "ru": "Я хотел кофе.",
            "en": "I wanted coffee.",
            "gloss": "-ed = /ɪd/, лишний слог",
            "say": "I wanted coffee."
          }
        ],
        "mistakes": [
          {
            "wrong": "wor-ked (два слога)",
            "right": "worked (один слог, /t/)",
            "why": "лишний слог только после t/d: wanted, needed"
          }
        ],
        "mnemonic": "🔊 Лишний слог -ed — только после t/d: wanted, needed.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди слово, где -ed = лишний слог /ɪd/.",
            "q": "В каком слове -ed читается как отдельный слог?",
            "opts": [
              "worked",
              "wanted",
              "played"
            ],
            "answer": 1,
            "explain": "want кончается на t → wan-ted, появляется лишний слог."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух. -ted = «тид».",
            "target": "I wanted coffee.",
            "sub": "Я хотел кофе.",
            "want": "wanted"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · маленький рассказ",
        "title": "Собираем прошлое: <em>yesterday, then, and</em>",
        "paras": [
          "Теперь соберём вчерашний день. Бери знакомые связки из A1: <b>then</b> (потом) и <b>and</b> (и) — они ставят действия в очередь.",
          "<b>Yesterday I got up. Then I had breakfast and went to work.</b> = Вчера я встал. Потом позавтракал и пошёл на работу.",
          "Слово <b>yesterday</b> (вчера) сразу показывает: всё это в прошлом. Его удобно ставить в начало предложения."
        ],
        "audio": "Йестердэй ай гот ап. Зэн ай хэд брэкфаст энд уэнт ту уорк.",
        "examples": [
          {
            "ru": "Вчера я встал рано.",
            "en": "<b>Yesterday</b> I <b>got</b> up early.",
            "gloss": "get → got",
            "say": "Yesterday I got up early."
          },
          {
            "ru": "Я позавтракал и пошёл на работу.",
            "en": "I <b>had</b> breakfast and <b>went</b> to work.",
            "say": "I had breakfast and went to work."
          },
          {
            "ru": "Вечером я увидел друга.",
            "en": "In the evening I <b>saw</b> a friend.",
            "say": "In the evening I saw a friend."
          }
        ],
        "mistakes": [
          {
            "wrong": "Yesterday I go to work",
            "right": "Yesterday I <b>went</b> to work",
            "why": "есть «yesterday» → глагол в прошлом: went"
          }
        ],
        "mnemonic": "📖 yesterday + прошедшая форма: Yesterday I went, had, saw.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму после yesterday.",
            "q": "Yesterday I ___ to the cinema.",
            "opts": [
              "go",
              "went",
              "goed"
            ],
            "answer": 1,
            "explain": "yesterday → прошлое → <b>went</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение в правильном порядке.",
            "q": "Собери: «Вчера я встал рано»",
            "want": "Yesterday I got up early",
            "answer": "Yesterday I got up early"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> напиши предложение в прошедшем времени.",
            "q": "Я позавтракал и пошёл на работу.",
            "accept": [
              "i had breakfast and went to work"
            ],
            "placeholder": "I had breakfast ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня встречает Тома утром и рассказывает про вчера. Слушай — здесь все сегодняшние глаголы в прошлом.",
      "lines": [
        {
          "who": "A",
          "en": "Good morning! I had a great day yesterday.",
          "ru": "Доброе утро! Вчера у меня был отличный день."
        },
        {
          "who": "B",
          "en": "Really? What did you do?",
          "ru": "Правда? А что ты делала?"
        },
        {
          "who": "A",
          "en": "I went to the park and saw my friends.",
          "ru": "Я ходила в парк и увидела друзей."
        },
        {
          "who": "B",
          "en": "Nice! I made dinner and watched a film.",
          "ru": "Здорово! А я приготовил ужин и посмотрел фильм."
        },
        {
          "who": "A",
          "en": "We had a good day!",
          "ru": "У нас обоих был хороший день!"
        }
      ]
    },
    "vocab": {
      "intro": "Главные слова дня — неправильные глаголы в прошедшем времени. Повтори пары вслух.",
      "items": [
        {
          "en": "went",
          "ru": "пошёл (go)",
          "ex": "I went home."
        },
        {
          "en": "had",
          "ru": "имел / был (have)",
          "ex": "I had lunch."
        },
        {
          "en": "saw",
          "ru": "увидел (see)",
          "ex": "I saw a bird."
        },
        {
          "en": "ate",
          "ru": "съел (eat)",
          "ex": "I ate pizza."
        },
        {
          "en": "got up",
          "ru": "встал (get up)",
          "ex": "I got up at seven."
        },
        {
          "en": "made",
          "ru": "сделал (make)",
          "ex": "I made tea."
        },
        {
          "en": "took",
          "ru": "взял (take)",
          "ex": "I took a bus."
        },
        {
          "en": "came",
          "ru": "пришёл (come)",
          "ex": "She came late."
        },
        {
          "en": "did",
          "ru": "сделал (do)",
          "ex": "I did my work."
        },
        {
          "en": "yesterday",
          "ru": "вчера",
          "ex": "Yesterday was Monday."
        }
      ]
    },
    "drag": {
      "intro": "Соедини английскую форму прошедшего времени с её переводом.",
      "pairs": [
        [
          "went",
          "пошёл"
        ],
        [
          "saw",
          "увидел"
        ],
        [
          "had",
          "был / имел"
        ],
        [
          "took",
          "взял"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса, и первый день A2 закрыт. Отличный старт!",
      "items": [
        {
          "q": "«Я пошёл на работу» —",
          "opts": [
            "I goed to work",
            "I went to work",
            "I go to work"
          ],
          "answer": 1,
          "explain": "go → <b>went</b>."
        },
        {
          "q": "В каком слове -ed = лишний слог?",
          "opts": [
            "liked",
            "needed",
            "played"
          ],
          "answer": 1,
          "explain": "need кончается на d → nee-ded."
        },
        {
          "q": "Что значит «I had breakfast»?",
          "opts": [
            "Я готовлю завтрак",
            "Я позавтракал",
            "Я хочу завтрак"
          ],
          "answer": 1,
          "explain": "had — прошедшее от have: «у меня был завтрак» = я позавтракал."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай короткий рассказ про вчерашний день. Все глаголы — в прошлом.",
      "title": "Yesterday",
      "sentences": [
        "Yesterday was a busy day.",
        "I got up at seven.",
        "I had coffee and toast.",
        "Then I went to work by bus.",
        "At work I made a lot of calls.",
        "I saw my friend Tom at lunch.",
        "We ate pizza together.",
        "After work I took a long walk.",
        "In the evening I watched a film.",
        "I went to bed late."
      ],
      "translation": "Вчера был насыщенный день. Я встал в семь. Я выпил кофе с тостом. Потом я поехал на работу на автобусе. На работе я сделал много звонков. В обед я увидел друга Тома. Мы вместе съели пиццу. После работы я долго гулял. Вечером я посмотрел фильм. Я лёг спать поздно."
    },
    "essay": {
      "intro": "Теперь твоя очередь — расскажи про свой вчерашний день!",
      "prompt": "Напиши 3–5 предложений о том, что ты делал(а) вчера. Используй прошедшее: I got up, I had, I went, I saw.",
      "hint": "Структуры: Yesterday I got up at… ; I had breakfast ; I went to… ; I saw… (форма прошедшего одна для I и he/she).",
      "example": "Yesterday I got up at eight. I had breakfast and went to work. I saw my friends. In the evening I watched a film."
    },
    "picture": {
      "intro": "Опиши, что человек делал вчера утром, по картинке.",
      "emoji": "🌅☕🚌",
      "prompt": "Опиши вчерашнее утро по картинке. Используй I got up / I had / I went.",
      "hint": "Используй: I got up early; I had breakfast; I went to work.",
      "example": "I got up early. I had breakfast. I went to work.",
      "img": "img/a2/day-01.jpg",
      "credit": "Фото: cogdogblog · CC0 · <a href=\"https://www.flickr.com/photos/37996646802@N01/4169563191\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "2": {
    "day": 2,
    "week": "01",
    "level": "A2",
    "themeRu": "Did-вопросы",
    "themeEn": "Past questions & negatives",
    "intro": "Вчера ты научился(ась) рассказывать о прошлом: I <b>went</b>, I <b>saw</b>, I <b>had</b>. Сегодня перевернём этот навык другой стороной — научимся <b>спрашивать</b> о прошлом и говорить, что чего-то не было. Весь секрет в одном маленьком помощнике — <b>did</b>. И тут прячется наша главная ловушка: после <b>did</b> глагол возвращается в простую форму. Звучит непривычно, но к концу главы будет легко.",
    "introAudio": "Вчера ты научился рассказывать о прошлом: I went, I saw, I had. Сегодня перевернём этот навык другой стороной — научимся спрашивать о прошлом и говорить, что чего-то не было. Весь секрет в одном маленьком помощнике — did. И тут прячется наша главная ловушка: после did глагол возвращается в простую форму. Звучит непривычно, но к концу дня будет легко.",
    "goals": [
      "задавать вопросы про прошлое с помощью did: Did you go? Did she call?",
      "к концу дня говорить, чего НЕ было: I didn't go, she didn't call",
      "строить Wh-вопросы в прошлом: What did you do? Where did you go?",
      "понять главную ловушку: после did глагол в БАЗОВОЙ форме (did go, не «did went»)"
    ],
    "learned": [
      "Научился(лась) задавать вопросы про прошлое с помощью did: Did you go? Did she call?",
      "К концу дня научился(лась) говорить, чего НЕ было: I didn't go, she didn't call",
      "Построил(а) Wh-вопросы в прошлом: What did you do? Where did you go?",
      "Понял(а) главную ловушку: после did глагол в БАЗОВОЙ форме (did go, не «did went»)"
    ],
    "review": {
      "intro": "Сначала — лёгкая разминка. Вспомним вчерашние неправильные глаголы: go→went, see→saw, have→had, do→did. Сегодня они нам очень пригодятся.",
      "introAudio": "Сначала — лёгкая разминка. Вспомним вчерашние неправильные глаголы: go стал went, see стал saw, have стал had, do стал did. Сегодня они нам очень пригодятся.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери правильную форму прошедшего.",
          "q": "Как сказать «Я видел её вчера»?",
          "opts": [
            "I see her yesterday",
            "I saw her yesterday",
            "I seen her yesterday"
          ],
          "answer": 1,
          "explain": "see в прошлом — <b>saw</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу. do → did.",
          "q": "Собери: «Я сделал это»",
          "want": "I did it",
          "answer": "I did it"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · вопрос с did",
        "title": "Спрашиваем про прошлое — <em>Did you…?</em>",
        "paras": [
          "Чтобы спросить про прошлое, в начало ставим маленького помощника <b>did</b>. А сам глагол — в простой, словарной форме: <b>Did you go?</b> = Ты ходил? <b>Did she call?</b> = Она звонила?",
          "В русском вспомогательного слова нет — мы просто меняем интонацию: «Ты ходил?». В английском так нельзя, нужен <b>did</b> впереди. Он один берёт на себя всё прошлое.",
          "Схема короткая: <b>Did</b> + кто + <b>базовый глагол</b>? Did you <b>see</b> it? Did he <b>have</b> lunch? Did they <b>come</b>?"
        ],
        "audio": "Чтобы спросить про прошлое, в начало ставим помощника did. А сам глагол — в простой, словарной форме: Did you go? — ты ходил? Did she call? — она звонила? В русском такого слова нет, мы просто меняем интонацию. В английском нужен did впереди. Схема: did плюс кто плюс базовый глагол.",
        "table": {
          "rows": [
            [
              "Did you go?",
              "Ты ходил?"
            ],
            [
              "Did she call?",
              "Она звонила?"
            ],
            [
              "Did they come?",
              "Они пришли?"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Ты ходил в школу?",
            "en": "<b>Did</b> you <b>go</b> to school?",
            "gloss": "did + go",
            "say": "Did you go to school?"
          },
          {
            "ru": "Она видела это?",
            "en": "<b>Did</b> she <b>see</b> it?",
            "gloss": "did + see",
            "say": "Did she see it?"
          },
          {
            "ru": "Они позавтракали?",
            "en": "<b>Did</b> they <b>have</b> breakfast?",
            "gloss": "did + have",
            "say": "Did they have breakfast?"
          },
          {
            "ru": "Ты сделал домашку?",
            "en": "<b>Did</b> you <b>do</b> your homework?",
            "gloss": "did + do",
            "say": "Did you do your homework?"
          }
        ],
        "mistakes": [
          {
            "wrong": "You went to school?",
            "right": "<b>Did</b> you go to school?",
            "why": "в вопросе про прошлое нужен помощник did впереди"
          }
        ],
        "mnemonic": "❓ Вопрос про прошлое = Did впереди + простой глагол.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вопрос.",
            "q": "Как спросить «Ты видел фильм?»",
            "opts": [
              "You saw the film?",
              "Did you see the film?",
              "Did you saw the film?"
            ],
            "answer": 1,
            "explain": "Did + базовая форма <b>see</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вопрос.",
            "q": "Собери: «Она пришла?»",
            "want": "Did she come",
            "answer": "Did she come"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши вопрос. go → базовая форма после did.",
            "q": "Ты ходил в парк?",
            "accept": [
              "did you go to the park"
            ],
            "placeholder": "Did you ... to the park?"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · ловушка",
        "title": "Главная ловушка: <em>Did you go?</em>, не «Did you went?»",
        "paras": [
          "Вот где почти все спотыкаются. Раз речь о прошлом, хочется сказать <b>Did you went?</b> — ведь «went» уже прошлое. Но так нельзя: прошлое уже взял на себя <b>did</b>.",
          "Правило железное: после <b>did</b> глагол всегда в БАЗОВОЙ форме. <b>did go</b>, <b>did see</b>, <b>did have</b> — НЕ «did went», не «did saw». Прошедшее показывает только did, один раз.",
          "Думай так: <b>did</b> — это «батарейка прошлого». Она уже стоит, второй раз заряжать глагол не надо. Did you <b>go</b>? — и всё ясно."
        ],
        "audio": "Вот где почти все спотыкаются. Раз речь о прошлом, хочется сказать Did you went — ведь went уже прошлое. Но так нельзя: прошлое уже взял на себя did. После did глагол всегда в базовой форме: did go, did see, did have. did — это батарейка прошлого, второй раз заряжать глагол не надо.",
        "table": {
          "rows": [
            [
              "✅ Did you go?",
              "after did — базовая форма"
            ],
            [
              "❌ Did you went?",
              "два прошедших — нельзя"
            ],
            [
              "✅ Did she see it?",
              "did + see, не «saw»"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Ты ходил домой?",
            "en": "Did you <b>go</b> home?",
            "gloss": "did + go (не «went»)",
            "say": "Did you go home?"
          },
          {
            "ru": "Он взял такси?",
            "en": "Did he <b>take</b> a taxi?",
            "gloss": "did + take (не «took»)",
            "say": "Did he take a taxi?"
          },
          {
            "ru": "Они это видели?",
            "en": "Did they <b>see</b> it?",
            "gloss": "did + see (не «saw»)",
            "say": "Did they see it?"
          },
          {
            "ru": "Ты позавтракал?",
            "en": "Did you <b>have</b> breakfast?",
            "gloss": "did + have (не «had»)",
            "say": "Did you have breakfast?"
          }
        ],
        "mistakes": [
          {
            "wrong": "Did you went home?",
            "right": "Did you <b>go</b> home?",
            "why": "после did — базовая форма go, прошлое уже в did"
          },
          {
            "wrong": "Did she saw it?",
            "right": "Did she <b>see</b> it?",
            "why": "did + see, не «saw»"
          }
        ],
        "mnemonic": "🔋 did = батарейка прошлого: глагол после неё простой (did go).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вариант.",
            "q": "Что верно?",
            "opts": [
              "Did you went home?",
              "Did you go home?",
              "Did you goes home?"
            ],
            "answer": 1,
            "explain": "после did — базовая форма <b>go</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вопрос.",
            "q": "«Он видел тебя?» —",
            "opts": [
              "Did he see you?",
              "Did he saw you?"
            ],
            "answer": 0,
            "explain": "did + базовая форма <b>see</b>, без «saw»."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вопрос. После did глагол простой.",
            "q": "Собери: «Ты взял мою ручку?»",
            "want": "Did you take my pen",
            "answer": "Did you take my pen"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · отрицание",
        "title": "Чего НЕ было — <em>didn't</em> + базовый глагол",
        "paras": [
          "Чтобы сказать, что действия НЕ было, берём <b>didn't</b> (это did + not) и снова базовый глагол: <b>I didn't go.</b> = Я не ходил. <b>She didn't call.</b> = Она не звонила.",
          "Та же ловушка, что и в вопросе: после <b>didn't</b> глагол простой. <b>I didn't see</b> (не «didn't saw»), <b>he didn't have</b> (не «didn't had»). Прошлое снова держит did.",
          "Коротко в речи: <b>didn't</b> — для всех лиц одинаково. I didn't, you didn't, he didn't, we didn't. Удобно — одна форма на всех."
        ],
        "audio": "Чтобы сказать, что действия не было, берём didn't — это did плюс not — и снова базовый глагол: I didn't go — я не ходил. She didn't call — она не звонила. После didn't глагол простой: I didn't see, не didn't saw. didn't одинаков для всех лиц: I didn't, you didn't, he didn't.",
        "table": {
          "rows": [
            [
              "I didn't go.",
              "Я не ходил."
            ],
            [
              "She didn't call.",
              "Она не звонила."
            ],
            [
              "We didn't see it.",
              "Мы это не видели."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я не ходил на работу.",
            "en": "I <b>didn't go</b> to work.",
            "gloss": "didn't + go",
            "say": "I didn't go to work."
          },
          {
            "ru": "Она не видела меня.",
            "en": "She <b>didn't see</b> me.",
            "gloss": "didn't + see",
            "say": "She didn't see me."
          },
          {
            "ru": "Мы не завтракали.",
            "en": "We <b>didn't have</b> breakfast.",
            "gloss": "didn't + have",
            "say": "We didn't have breakfast."
          },
          {
            "ru": "Он не сделал это.",
            "en": "He <b>didn't do</b> it.",
            "gloss": "didn't + do",
            "say": "He didn't do it."
          }
        ],
        "mistakes": [
          {
            "wrong": "I didn't went",
            "right": "I <b>didn't go</b>",
            "why": "после didn't — базовая форма go"
          },
          {
            "wrong": "I not went to work",
            "right": "I <b>didn't go</b> to work",
            "why": "отрицание прошлого — didn't + базовый глагол, а не «not»"
          }
        ],
        "mnemonic": "🚫 Не было → didn't + простой глагол (I didn't go).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное отрицание.",
            "q": "«Я не видел его» —",
            "opts": [
              "I didn't saw him",
              "I didn't see him",
              "I not saw him"
            ],
            "answer": 1,
            "explain": "didn't + базовая форма <b>see</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери отрицание.",
            "q": "Собери: «Она не пришла»",
            "want": "She didn't come",
            "answer": "She didn't come"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши отрицание. do → базовая форма после didn't.",
            "q": "Я не сделал домашку.",
            "accept": [
              "i didn't do my homework",
              "i did not do my homework"
            ],
            "placeholder": "I didn't ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · Wh-вопросы",
        "title": "<em>What did you do?</em> и ответ Yes, I did",
        "paras": [
          "Хочешь спросить не «да/нет», а «что/где/когда»? Ставь вопросительное слово ПЕРЕД did: <b>What did you do?</b> = Что ты делал? <b>Where did you go?</b> = Куда ты ходил? <b>When did she call?</b> = Когда она звонила?",
          "Схема: <b>Wh-слово + did + кто + базовый глагол</b>. Глагол снова простой: What did you <b>do</b>? Where did you <b>go</b>?",
          "Короткие ответы повторяют только did: <b>Yes, I did. / No, I didn't.</b> — без основного глагола, точно как вчера с have было «Yes, I have»."
        ],
        "audio": "Хочешь спросить не да или нет, а что, где, когда? Ставь вопросительное слово перед did: What did you do? — что ты делал? Where did you go? — куда ты ходил? Схема: Wh-слово плюс did плюс кто плюс базовый глагол. Короткие ответы повторяют только did: Yes, I did. No, I didn't.",
        "table": {
          "rows": [
            [
              "What did you do?",
              "Что ты делал?"
            ],
            [
              "Where did you go?",
              "Куда ты ходил?"
            ],
            [
              "Yes, I did. / No, I didn't.",
              "Да / Нет (короткий ответ)"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Что ты делал вчера?",
            "en": "<b>What did</b> you <b>do</b> yesterday?",
            "gloss": "what + did + do",
            "say": "What did you do yesterday?"
          },
          {
            "ru": "Куда ты ходил?",
            "en": "<b>Where did</b> you <b>go</b>?",
            "gloss": "where + did + go",
            "say": "Where did you go?"
          },
          {
            "ru": "Когда она пришла?",
            "en": "<b>When did</b> she <b>come</b>?",
            "gloss": "when + did + come",
            "say": "When did she come?"
          },
          {
            "ru": "— Ты ходил в кино? — Да.",
            "en": "— Did you go to the cinema? — Yes, I <b>did</b>.",
            "say": "Yes, I did."
          }
        ],
        "mistakes": [
          {
            "wrong": "What you did yesterday?",
            "right": "What <b>did you do</b> yesterday?",
            "why": "нужен did, а глагол do — базовый"
          },
          {
            "wrong": "Yes, I went.",
            "right": "Yes, I <b>did</b>.",
            "why": "короткий ответ повторяет did, не основной глагол"
          }
        ],
        "mnemonic": "🗺️ Wh-слово + did + базовый глагол: What did you do?",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный Wh-вопрос.",
            "q": "Как спросить «Куда ты ходил?»",
            "opts": [
              "Where you went?",
              "Where did you go?",
              "Where did you went?"
            ],
            "answer": 1,
            "explain": "where + did + базовая форма <b>go</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери короткий ответ.",
            "q": "— Did she call? — ___",
            "opts": [
              "Yes, she called.",
              "Yes, she did.",
              "Yes, she has."
            ],
            "answer": 1,
            "explain": "короткий ответ повторяет <b>did</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вопрос. После did глагол простой.",
            "q": "Собери: «Что ты ел?»",
            "want": "What did you eat",
            "answer": "What did you eat"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Том расспрашивает Аню про вчерашний вечер. Слушай вопросы с did и короткие ответы.",
      "lines": [
        {
          "who": "A",
          "en": "Did you go out yesterday?",
          "ru": "Ты вчера куда-нибудь выходила?"
        },
        {
          "who": "B",
          "en": "No, I didn't. I stayed at home.",
          "ru": "Нет. Я осталась дома."
        },
        {
          "who": "A",
          "en": "What did you do?",
          "ru": "А что ты делала?"
        },
        {
          "who": "B",
          "en": "I watched a film. Did you see Tom?",
          "ru": "Смотрела фильм. А ты видел Тома?"
        },
        {
          "who": "A",
          "en": "Yes, I did! We had coffee together.",
          "ru": "Да! Мы вместе выпили кофе."
        }
      ]
    },
    "vocab": {
      "intro": "Главные слова дня — помощник did и вопросительные слова. Повтори вслух.",
      "items": [
        {
          "en": "Did you…?",
          "ru": "Ты …? (вопрос о прошлом)",
          "ex": "Did you call me?"
        },
        {
          "en": "didn't",
          "ru": "не (did not)",
          "ex": "I didn't know."
        },
        {
          "en": "What did you do?",
          "ru": "Что ты делал?",
          "ex": "What did you do today?"
        },
        {
          "en": "Where did you go?",
          "ru": "Куда ты ходил?",
          "ex": "Where did you go?"
        },
        {
          "en": "When",
          "ru": "когда",
          "ex": "When did she come?"
        },
        {
          "en": "go out",
          "ru": "выходить (гулять)",
          "ex": "Did you go out?"
        },
        {
          "en": "stay",
          "ru": "оставаться",
          "ex": "I stayed at home."
        },
        {
          "en": "Yes, I did.",
          "ru": "Да (короткий ответ)",
          "ex": "— Did you eat? — Yes, I did."
        },
        {
          "en": "No, I didn't.",
          "ru": "Нет (короткий ответ)",
          "ex": "No, I didn't."
        }
      ]
    },
    "drag": {
      "intro": "Соедини английскую фразу с переводом.",
      "pairs": [
        [
          "Did you go?",
          "Ты ходил?"
        ],
        [
          "I didn't see",
          "Я не видел"
        ],
        [
          "What did you do?",
          "Что ты делал?"
        ],
        [
          "Yes, I did.",
          "Да (ответ)"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса, и второй день закрыт. Помни: после did глагол простой!",
      "items": [
        {
          "q": "Как спросить «Ты видел это?»",
          "opts": [
            "Did you saw it?",
            "Did you see it?",
            "You saw it?"
          ],
          "answer": 1,
          "explain": "did + базовая форма <b>see</b>."
        },
        {
          "q": "«Я не ходил на работу» —",
          "opts": [
            "I didn't went to work",
            "I didn't go to work",
            "I not go to work"
          ],
          "answer": 1,
          "explain": "didn't + базовая форма <b>go</b>."
        },
        {
          "q": "— Did she call you? — ___",
          "opts": [
            "Yes, she called.",
            "Yes, she did.",
            "Yes, she has."
          ],
          "answer": 1,
          "explain": "короткий ответ повторяет <b>did</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай короткий рассказ. Найди вопросы с did и отрицания с didn't.",
      "title": "A busy weekend?",
      "sentences": [
        "Did you have a good weekend?",
        "I asked my friend Kate.",
        "She didn't go out on Saturday.",
        "She stayed at home and read a book.",
        "But on Sunday she went to the park.",
        "What did she do there?",
        "She met her friends and had a picnic.",
        "Did they play games? Yes, they did.",
        "Kate didn't come home early.",
        "She had a great day!"
      ],
      "translation": "«Хорошо провела выходные?» — спросил я подругу Кейт. В субботу она никуда не выходила. Она осталась дома и читала книгу. Но в воскресенье она пошла в парк. Что она там делала? Она встретилась с друзьями и устроила пикник. Они играли в игры? Да. Кейт вернулась домой не рано. У неё был отличный день!"
    },
    "essay": {
      "intro": "Теперь спроси и расскажи сам(а). Представь, что расспрашиваешь друга про вчера.",
      "prompt": "Напиши 3–5 предложений: два вопроса про прошлое (Did you…? / What did you…?) и пару ответов (I didn't… / Yes, I did).",
      "hint": "Структуры: Did you…? ; What did you do? ; I didn't… ; Yes, I did. (после did — базовый глагол).",
      "example": "Did you go out yesterday? What did you do? I didn't go to work. I stayed at home. Did you see your friends? Yes, I did."
    },
    "picture": {
      "intro": "По картинке задай вопросы про вчерашний день человека.",
      "emoji": "🤔❓🗓️",
      "prompt": "Задай вопросы про вчерашний день по картинке. Используй Did you…? и What did you do?",
      "hint": "Используй: Did you go out? What did you do? Did you see friends?",
      "example": "Did you go out yesterday? What did you do? Did you see your friends?",
      "img": "img/a2/day-02.jpg",
      "credit": "Фото: sjpowermac · CC0 · <a href=\"https://www.flickr.com/photos/41890311@N06/42227441352\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "3": {
    "day": 3,
    "week": "01",
    "level": "A2",
    "themeRu": "Я делал тогда",
    "themeEn": "Past Continuous",
    "intro": "Представь: восемь вечера, ты сидишь с книгой, лампа горит — ты <b>читаешь</b>. Не «прочитал», а именно был в процессе. Для такого кадра в английском есть отдельное время, которого в русском нет, — <b>Past Continuous</b>. Оно показывает действие в разгаре в какой-то момент прошлого. Формула простая: <b>was</b> или <b>were</b> плюс глагол с <b>-ing</b>. Покажу — и ты сразу почувствуешь разницу с обычным прошлым.",
    "introAudio": "Представь: восемь вечера, ты сидишь с книгой, лампа горит — ты читаешь. Не «прочитал», а именно был в процессе. Для такого кадра в английском есть отдельное время, которого в русском нет, — Past Continuous. Оно показывает действие в разгаре в какой-то момент прошлого. Формула простая: was или were плюс глагол с -ing. Покажу — и ты сразу почувствуешь разницу с обычным прошлым.",
    "goals": [
      "понять идею Past Continuous: действие шло, было в процессе в момент прошлого",
      "строить фразу <b>was/were + глагол с -ing</b>: I was reading",
      "выбирать was (для I, he, she, it) и were (для you, we, they)",
      "к концу дня описать, что ты делал(а) в восемь вечера: At 8 pm I was…"
    ],
    "learned": [
      "Понял(а) идею Past Continuous: действие шло, было в процессе в момент прошлого",
      "Построил(а) фразу <b>was/were + глагол с -ing</b>: I was reading",
      "Научился(лась) выбирать was (для I, he, she, it) и were (для you, we, they)",
      "К концу дня описал(а), что делал(а) в восемь вечера: At 8 pm I was…"
    ],
    "review": {
      "intro": "Сначала вспомним вчерашнее: вопросы и отрицания с did. Помни ловушку — после did глагол простой.",
      "introAudio": "Сначала вспомним вчерашнее: вопросы и отрицания с did. Помни ловушку — после did глагол простой.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери верный вопрос про прошлое.",
          "q": "Как спросить «Ты ходил в кино?»",
          "opts": [
            "Did you went to the cinema?",
            "Did you go to the cinema?",
            "You went to the cinema?"
          ],
          "answer": 1,
          "explain": "did + базовая форма <b>go</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери отрицание. didn't + базовый глагол.",
          "q": "Собери: «Я не видел его»",
          "want": "I didn't see him",
          "answer": "I didn't see him"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · идея",
        "title": "Действие в процессе — <em>was/were + -ing</em>",
        "paras": [
          "Past Continuous показывает действие, которое ШЛО в какой-то момент прошлого. Не «сделал», а «делал, был в процессе»: <b>I was reading.</b> = Я читал (сидел и читал).",
          "Формула: <b>was</b> или <b>were</b> + глагол с окончанием <b>-ing</b>. read → read<b>ing</b>, work → work<b>ing</b>, sleep → sleep<b>ing</b>.",
          "Часто рядом стоит точный момент: <b>at 8 pm</b> (в 8 вечера), <b>then</b> (тогда). <b>At 8 pm I was watching TV.</b> = В восемь вечера я смотрел телевизор — в тот момент шёл процесс."
        ],
        "audio": "Past Continuous показывает действие, которое шло в какой-то момент прошлого. Не сделал, а делал, был в процессе: I was reading — я читал, сидел и читал. Формула: was или were плюс глагол с окончанием -ing. read становится reading, work — working, sleep — sleeping. Часто рядом точный момент: at 8 pm, в восемь вечера. At 8 pm I was watching TV.",
        "table": {
          "rows": [
            [
              "I was reading.",
              "Я читал (процесс)."
            ],
            [
              "She was sleeping.",
              "Она спала."
            ],
            [
              "They were working.",
              "Они работали."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я читал в восемь вечера.",
            "en": "I <b>was reading</b> at 8 pm.",
            "gloss": "was + reading",
            "say": "I was reading at eight pm."
          },
          {
            "ru": "Она спала.",
            "en": "She <b>was sleeping</b>.",
            "gloss": "was + sleeping",
            "say": "She was sleeping."
          },
          {
            "ru": "Они работали.",
            "en": "They <b>were working</b>.",
            "gloss": "were + working",
            "say": "They were working."
          },
          {
            "ru": "Мы ждали автобус.",
            "en": "We <b>were waiting</b> for the bus.",
            "gloss": "were + waiting",
            "say": "We were waiting for the bus."
          }
        ],
        "mistakes": [
          {
            "wrong": "I was read at 8 pm",
            "right": "I was <b>reading</b> at 8 pm",
            "why": "нужен глагол с -ing: reading"
          }
        ],
        "mnemonic": "⏳ Процесс в прошлом = was/were + глагол с -ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму процесса.",
            "q": "Как сказать «Я смотрел телевизор» (был в процессе)?",
            "opts": [
              "I watched TV",
              "I was watching TV",
              "I was watch TV"
            ],
            "answer": 1,
            "explain": "was + <b>watching</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу процесса.",
            "q": "Собери: «Она спала»",
            "want": "She was sleeping",
            "answer": "She was sleeping"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши фразу. were + work + -ing.",
            "q": "Они работали.",
            "accept": [
              "they were working"
            ],
            "placeholder": "They were ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · was vs were",
        "title": "<em>was</em> для I/he/she/it, <em>were</em> для you/we/they",
        "paras": [
          "Выбор между was и were — как с прошлым от be на A1, ничего нового. <b>was</b> — для одного: I, he, she, it. <b>were</b> — для многих и для you: you, we, they.",
          "<b>I was</b> cooking. <b>He was</b> driving. — один человек. <b>We were</b> talking. <b>They were</b> playing. <b>You were</b> sleeping. — несколько (и всегда you).",
          "Глагол с -ing при этом не меняется — меняется только was/were. I was working / they were working — одно и то же working."
        ],
        "audio": "Выбор между was и were — как с прошлым от be на A1. was — для одного: I, he, she, it. were — для многих и для you: you, we, they. I was cooking, he was driving — один человек. We were talking, they were playing, you were sleeping — несколько и всегда you. Глагол с -ing при этом не меняется.",
        "table": {
          "rows": [
            [
              "I / he / she / it",
              "was + -ing (I was cooking)"
            ],
            [
              "you / we / they",
              "were + -ing (we were cooking)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я готовил ужин.",
            "en": "I <b>was</b> cooking dinner.",
            "gloss": "I + was",
            "say": "I was cooking dinner."
          },
          {
            "ru": "Он вёл машину.",
            "en": "He <b>was</b> driving.",
            "gloss": "he + was",
            "say": "He was driving."
          },
          {
            "ru": "Мы разговаривали.",
            "en": "We <b>were</b> talking.",
            "gloss": "we + were",
            "say": "We were talking."
          },
          {
            "ru": "Они играли в футбол.",
            "en": "They <b>were</b> playing football.",
            "gloss": "they + were",
            "say": "They were playing football."
          },
          {
            "ru": "Ты спал.",
            "en": "You <b>were</b> sleeping.",
            "gloss": "you + were",
            "say": "You were sleeping."
          }
        ],
        "mistakes": [
          {
            "wrong": "We was talking",
            "right": "We <b>were</b> talking",
            "why": "we → were, не was"
          },
          {
            "wrong": "They was playing",
            "right": "They <b>were</b> playing",
            "why": "they → were"
          }
        ],
        "mnemonic": "👤 was = один (I/he/she/it). 👥 were = you/we/they.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери was или were.",
            "q": "They ___ watching TV.",
            "opts": [
              "was",
              "were",
              "is"
            ],
            "answer": 1,
            "explain": "they → <b>were</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери was или were.",
            "q": "She ___ reading.",
            "opts": [
              "were",
              "was",
              "are"
            ],
            "answer": 1,
            "explain": "she → <b>was</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу. we → were.",
            "q": "Собери: «Мы ждали тебя»",
            "want": "We were waiting for you",
            "answer": "We were waiting for you"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Не «I read», а <em>I was reading</em>",
        "paras": [
          "Вот ловушка: в русском «я читал» — это и «прочитал», и «сидел читал». Одна форма. Поэтому хочется сказать просто <b>I read</b>. Но если важно, что процесс ШЁЛ в тот момент, нужен Past Continuous: <b>I was reading.</b>",
          "Сравни: <b>I read a book yesterday</b> — факт, просто прочитал (Past Simple). <b>At 8 pm I was reading</b> — в тот момент процесс шёл (Past Continuous).",
          "Подсказка: если можешь добавить «в тот момент», «как раз тогда» — бери was/were + -ing. Это как фотография момента: что было видно на «фото»?"
        ],
        "audio": "Вот ловушка: в русском «я читал» — это и прочитал, и сидел читал. Одна форма. Поэтому хочется сказать просто I read. Но если важно, что процесс шёл в тот момент, нужен Past Continuous: I was reading. Сравни: I read a book yesterday — просто факт. At 8 pm I was reading — в тот момент процесс шёл. Если можешь добавить как раз тогда — бери was или were плюс -ing.",
        "table": {
          "rows": [
            [
              "I was reading at 8 pm.",
              "Процесс шёл в тот момент."
            ],
            [
              "I read a book yesterday.",
              "Просто факт (Past Simple)."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "В девять я ужинал (процесс).",
            "en": "At nine I <b>was having</b> dinner.",
            "gloss": "процесс → was having",
            "say": "At nine I was having dinner."
          },
          {
            "ru": "Когда ты позвонил, я спал.",
            "en": "When you called, I <b>was sleeping</b>.",
            "gloss": "процесс → was sleeping",
            "say": "When you called, I was sleeping."
          },
          {
            "ru": "Всю ночь шёл дождь.",
            "en": "It <b>was raining</b> all night.",
            "gloss": "процесс → was raining",
            "say": "It was raining all night."
          },
          {
            "ru": "Вчера я прочитал эту книгу (факт).",
            "en": "I <b>read</b> this book yesterday.",
            "gloss": "факт → Past Simple",
            "say": "I read this book yesterday."
          }
        ],
        "mistakes": [
          {
            "wrong": "At 8 pm I read a book",
            "right": "At 8 pm I <b>was reading</b> a book",
            "why": "важен процесс в момент → was reading"
          },
          {
            "wrong": "When you called, I slept",
            "right": "When you called, I <b>was sleeping</b>",
            "why": "процесс шёл в тот момент → was sleeping"
          }
        ],
        "mnemonic": "📸 «Фото момента» = was/were + -ing (что шло именно тогда).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму процесса в момент.",
            "q": "«В восемь я смотрел телевизор» (процесс) —",
            "opts": [
              "At 8 I watched TV",
              "At 8 I was watching TV",
              "At 8 I am watching TV"
            ],
            "answer": 1,
            "explain": "процесс в момент → was watching."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши фразу процесса. sleep → sleeping.",
            "q": "Когда ты позвонил, я спал.",
            "accept": [
              "when you called i was sleeping",
              "i was sleeping when you called"
            ],
            "placeholder": "When you called, I ..."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух. was reading = читал.",
            "target": "At 8 pm I was reading.",
            "sub": "В восемь вечера я читал.",
            "want": "reading"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · вопрос и «не»",
        "title": "Вопрос и «не»: <em>Were you…?</em> / <em>wasn't</em>",
        "paras": [
          "Вопрос строим переносом was/were вперёд — как с be: <b>Were you sleeping?</b> = Ты спал? <b>What were you doing?</b> = Что ты делал?",
          "Отрицание — добавляем not: <b>wasn't</b> (was not) и <b>weren't</b> (were not). <b>I wasn't sleeping.</b> = Я не спал. <b>They weren't working.</b>",
          "Никакого did тут не нужно! За вопрос и отрицание отвечает само was/were. Это другое время — у него свои правила."
        ],
        "audio": "Вопрос строим переносом was или were вперёд, как с be: Were you sleeping? — ты спал? What were you doing? — что ты делал? Отрицание — добавляем not: wasn't и weren't. I wasn't sleeping — я не спал. Никакого did тут не нужно: за вопрос и отрицание отвечает само was или were.",
        "table": {
          "rows": [
            [
              "Were you sleeping?",
              "Ты спал?"
            ],
            [
              "What were you doing?",
              "Что ты делал?"
            ],
            [
              "I wasn't sleeping.",
              "Я не спал."
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Ты спал в полночь?",
            "en": "<b>Were</b> you <b>sleeping</b> at midnight?",
            "gloss": "were + sleeping",
            "say": "Were you sleeping at midnight?"
          },
          {
            "ru": "Что ты делал в шесть?",
            "en": "What <b>were</b> you <b>doing</b> at six?",
            "gloss": "were + doing",
            "say": "What were you doing at six?"
          },
          {
            "ru": "Я не работал, я отдыхал.",
            "en": "I <b>wasn't working</b>, I was resting.",
            "gloss": "wasn't + working",
            "say": "I wasn't working, I was resting."
          },
          {
            "ru": "Они не слушали.",
            "en": "They <b>weren't listening</b>.",
            "gloss": "weren't + listening",
            "say": "They weren't listening."
          }
        ],
        "mistakes": [
          {
            "wrong": "Did you sleeping?",
            "right": "<b>Were</b> you sleeping?",
            "why": "Past Continuous: вопрос через were, не did"
          },
          {
            "wrong": "I didn't sleeping",
            "right": "I <b>wasn't</b> sleeping",
            "why": "отрицание через wasn't, не didn't"
          }
        ],
        "mnemonic": "🙅 В Past Continuous вопрос и «не» — через was/were, не did.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вопрос.",
            "q": "Как спросить «Что ты делал?» (процесс)",
            "opts": [
              "What did you doing?",
              "What were you doing?",
              "What you were doing?"
            ],
            "answer": 1,
            "explain": "were + <b>doing</b> для you."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное отрицание.",
            "q": "«Я не спал» —",
            "opts": [
              "I didn't sleeping",
              "I wasn't sleeping",
              "I not was sleeping"
            ],
            "answer": 1,
            "explain": "wasn't + <b>sleeping</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери отрицание. they → weren't.",
            "q": "Собери: «Они не работали»",
            "want": "They weren't working",
            "answer": "They weren't working"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня звонила Тому вчера вечером, но он не ответил. Узнаём, что он делал. Слушай Past Continuous.",
      "lines": [
        {
          "who": "A",
          "en": "I called you at 9 pm. You didn't answer.",
          "ru": "Я звонила тебе в девять. Ты не ответил."
        },
        {
          "who": "B",
          "en": "Sorry! I was taking a shower.",
          "ru": "Извини! Я как раз был в душе."
        },
        {
          "who": "A",
          "en": "And at 10? I called again.",
          "ru": "А в десять? Я звонила снова."
        },
        {
          "who": "B",
          "en": "At 10 I was cooking dinner.",
          "ru": "В десять я готовил ужин."
        },
        {
          "who": "A",
          "en": "Ah, you were busy all evening!",
          "ru": "А, ты был занят весь вечер!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — формы процесса в прошлом и слова-моменты. Повтори вслух.",
      "items": [
        {
          "en": "was reading",
          "ru": "читал (процесс)",
          "ex": "I was reading at 8."
        },
        {
          "en": "were working",
          "ru": "работали",
          "ex": "They were working."
        },
        {
          "en": "was sleeping",
          "ru": "спал",
          "ex": "She was sleeping."
        },
        {
          "en": "was cooking",
          "ru": "готовил",
          "ex": "He was cooking dinner."
        },
        {
          "en": "was waiting",
          "ru": "ждал",
          "ex": "I was waiting for you."
        },
        {
          "en": "at 8 pm",
          "ru": "в 8 вечера",
          "ex": "At 8 pm I was reading."
        },
        {
          "en": "then",
          "ru": "тогда / в тот момент",
          "ex": "What were you doing then?"
        },
        {
          "en": "wasn't",
          "ru": "не был / не делал (was not)",
          "ex": "I wasn't sleeping."
        },
        {
          "en": "all evening",
          "ru": "весь вечер",
          "ex": "I was working all evening."
        }
      ]
    },
    "drag": {
      "intro": "Соедини английскую фразу с переводом.",
      "pairs": [
        [
          "I was reading",
          "Я читал"
        ],
        [
          "they were working",
          "они работали"
        ],
        [
          "she was sleeping",
          "она спала"
        ],
        [
          "Were you cooking?",
          "Ты готовил?"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса по Past Continuous. Помни: was/were + -ing.",
      "items": [
        {
          "q": "Как сказать «Я смотрел телевизор» (процесс)?",
          "opts": [
            "I watched TV",
            "I was watching TV",
            "I was watch TV"
          ],
          "answer": 1,
          "explain": "was + <b>watching</b>."
        },
        {
          "q": "They ___ playing football.",
          "opts": [
            "was",
            "were",
            "did"
          ],
          "answer": 1,
          "explain": "they → <b>were</b>."
        },
        {
          "q": "Как спросить «Что ты делал?»",
          "opts": [
            "What did you doing?",
            "What were you doing?",
            "What was you doing?"
          ],
          "answer": 1,
          "explain": "were + <b>doing</b> для you."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: вечер дома, и каждый чем-то занят. Везде Past Continuous.",
      "title": "At nine o'clock",
      "sentences": [
        "Last night was quiet in our house.",
        "At nine o'clock everyone was busy.",
        "My mum was reading a book.",
        "My dad was watching the news.",
        "My sister was talking on the phone.",
        "I was doing my homework.",
        "The cat was sleeping on the sofa.",
        "Outside it was raining hard.",
        "We weren't talking to each other.",
        "It was a calm evening at home."
      ],
      "translation": "Прошлой ночью у нас дома было тихо. В девять часов все были заняты. Мама читала книгу. Папа смотрел новости. Сестра разговаривала по телефону. Я делал домашнее задание. Кот спал на диване. На улице сильно шёл дождь. Мы не разговаривали друг с другом. Это был спокойный вечер дома."
    },
    "essay": {
      "intro": "Вспомни вчерашний вечер. Что ты делал(а) в разные моменты? Опиши процесс.",
      "prompt": "Напиши 3–5 предложений: что ты делал(а) в разные моменты вчера вечером. Используй was/were + -ing и время (at 8 pm, then).",
      "hint": "Структуры: At 8 pm I was… ; Then I was… ; My family was… (was — для одного, were — для нескольких).",
      "example": "At seven I was having dinner. At eight I was watching TV. Then I was reading a book. My brother was playing games."
    },
    "picture": {
      "intro": "Опиши по картинке, что люди делали в восемь вечера.",
      "emoji": "🕗📖🛋️",
      "prompt": "Опиши, что люди делали в восемь вечера. Используй was/were + -ing.",
      "hint": "Используй: She was reading; they were watching TV; he was sleeping.",
      "example": "At eight pm she was reading. They were watching TV. The cat was sleeping.",
      "img": "img/a2/day-03.jpg",
      "credit": "Фото: freestocks.org · CC0 · <a href=\"https://www.flickr.com/photos/135396164@N05/26421751605\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "4": {
    "day": 4,
    "week": "01",
    "level": "A2",
    "themeRu": "Когда и пока",
    "themeEn": "Past Simple vs Past Continuous",
    "intro": "Процесс — <b>was/were + -ing</b> — ты уже освоил(а). Сегодня соединим его с обычным прошлым, и получится живой рассказ. Смысл такой: длинное действие тянулось фоном (<b>I was cooking</b>), и вдруг его прервало короткое (<b>he called</b>). Одно предложение — два времени, и каждое на своём месте. Покажу, как их не перепутать.",
    "introAudio": "Процесс — was или were плюс -ing — ты уже освоил. Сегодня соединим его с обычным прошлым, и получится живой рассказ. Смысл такой: длинное действие тянулось фоном — I was cooking, и вдруг его прервало короткое — he called. Одно предложение — два времени, и каждое на своём месте. Покажу, как их не перепутать.",
    "goals": [
      "соединять в одном предложении фон (was doing) и короткое событие (did)",
      "использовать <b>when</b> с коротким действием и <b>while</b> с длинным",
      "понять, когда брать was doing, а когда did",
      "к концу дня рассказать: I was cooking when he called"
    ],
    "learned": [
      "Соединил(а) в одном предложении фон (was doing) и короткое событие (did)",
      "Использовал(а) <b>when</b> с коротким действием и <b>while</b> с длинным",
      "Понял(а), когда брать was doing, а когда did",
      "К концу дня рассказал(а): I was cooking when he called"
    ],
    "review": {
      "intro": "Разминка: вспомним Past Continuous — was/were + -ing. Сегодня он встретится с обычным прошлым.",
      "introAudio": "Разминка: вспомним Past Continuous — was или were плюс -ing. Сегодня он встретится с обычным прошлым.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери форму процесса.",
          "q": "Как сказать «Я спал» (был в процессе)?",
          "opts": [
            "I slept",
            "I was sleeping",
            "I was sleep"
          ],
          "answer": 1,
          "explain": "was + <b>sleeping</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу. they → were.",
          "q": "Собери: «Они работали»",
          "want": "They were working",
          "answer": "They were working"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · фон и событие",
        "title": "Длинное шло, короткое прервало — <em>was doing + did</em>",
        "paras": [
          "Представь сцену: ты долго что-то делал (фон, процесс), и вдруг случилось короткое событие. Длинное — это <b>was/were + -ing</b>, короткое — обычное прошлое (Past Simple).",
          "<b>I was cooking when he called.</b> = Я готовил (долго, фоном), когда он позвонил (раз — короткое). Готовка шла, звонок её прервал.",
          "Длинное действие как дорога, короткое — как светофор поперёк. <b>I was walking</b> (дорога) <b>when it started to rain</b> (вдруг)."
        ],
        "audio": "Представь сцену: ты долго что-то делал — это фон, процесс. И вдруг случилось короткое событие. Длинное — это was или were плюс -ing, короткое — обычное прошлое. I was cooking when he called: я готовил, долго, фоном, когда он позвонил, раз, короткое. Готовка шла, звонок её прервал.",
        "table": {
          "rows": [
            [
              "I was cooking",
              "длинное, фон (was + -ing)"
            ],
            [
              "when he called",
              "короткое, событие (Past Simple)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я готовил, когда он позвонил.",
            "en": "I <b>was cooking</b> when he <b>called</b>.",
            "gloss": "фон + событие",
            "say": "I was cooking when he called."
          },
          {
            "ru": "Она читала, когда я вошёл.",
            "en": "She <b>was reading</b> when I <b>came</b> in.",
            "gloss": "фон + событие",
            "say": "She was reading when I came in."
          },
          {
            "ru": "Мы шли, когда начался дождь.",
            "en": "We <b>were walking</b> when it <b>started</b> to rain.",
            "gloss": "фон + событие",
            "say": "We were walking when it started to rain."
          },
          {
            "ru": "Я спал, когда ты позвонил.",
            "en": "I <b>was sleeping</b> when you <b>called</b>.",
            "gloss": "фон + событие",
            "say": "I was sleeping when you called."
          }
        ],
        "mistakes": [
          {
            "wrong": "I cooked when he was calling",
            "right": "I <b>was cooking</b> when he <b>called</b>",
            "why": "длинное — was cooking, короткое — called, не наоборот"
          }
        ],
        "mnemonic": "🛣️ Длинное (was -ing) — дорога, короткое (did) — светофор поперёк.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное предложение.",
            "q": "«Я спал, когда ты позвонил» —",
            "opts": [
              "I slept when you were calling",
              "I was sleeping when you called",
              "I was sleeping when you were calling"
            ],
            "answer": 1,
            "explain": "фон was sleeping + короткое called."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Она читала, когда я вошёл»",
            "want": "She was reading when I came in",
            "answer": "She was reading when I came in"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. Фон — was cooking, короткое — called.",
            "q": "Я готовил, когда он позвонил.",
            "accept": [
              "i was cooking when he called"
            ],
            "placeholder": "I was cooking when he ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · when vs while",
        "title": "<em>when</em> + короткое, <em>while</em> + длинное",
        "paras": [
          "Два слова-помощника. <b>when</b> (когда) обычно ставят перед коротким действием: …when he <b>called</b>. <b>while</b> (пока, в то время как) — перед длинным: <b>while</b> I <b>was cooking</b>…",
          "Можно начать с любого: <b>While I was cooking, he called.</b> или <b>I was cooking when he called.</b> Смысл один. Если предложение начинается с while-части, после неё ставим запятую.",
          "Подсказка: <b>while</b> почти всегда тянет за собой <b>-ing</b> (while I was reading), а <b>when</b> — короткий факт (when he came)."
        ],
        "audio": "Два слова-помощника. when, когда, обычно ставят перед коротким действием: when he called. while, пока, в то время как — перед длинным: while I was cooking. Можно начать с любого: While I was cooking, he called. Или: I was cooking when he called. Смысл один. while почти всегда тянет за собой -ing, а when — короткий факт.",
        "table": {
          "rows": [
            [
              "while + was/were + -ing",
              "while I was cooking"
            ],
            [
              "when + Past Simple",
              "when he called"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Пока я готовил, он позвонил.",
            "en": "<b>While</b> I was cooking, he <b>called</b>.",
            "gloss": "while + длинное",
            "say": "While I was cooking, he called."
          },
          {
            "ru": "Когда он пришёл, я спал.",
            "en": "<b>When</b> he <b>came</b>, I was sleeping.",
            "gloss": "when + короткое",
            "say": "When he came, I was sleeping."
          },
          {
            "ru": "Пока она читала, я готовил ужин.",
            "en": "<b>While</b> she was reading, I <b>made</b> dinner.",
            "gloss": "while + длинное",
            "say": "While she was reading, I made dinner."
          },
          {
            "ru": "Я упал, когда бежал.",
            "en": "I <b>fell</b> <b>while</b> I was running.",
            "gloss": "while + длинное",
            "say": "I fell while I was running."
          }
        ],
        "mistakes": [
          {
            "wrong": "While he called, I was cooking",
            "right": "<b>When</b> he called, I was cooking",
            "why": "короткое «позвонил» → when, не while"
          },
          {
            "wrong": "When I was cooking, when he called",
            "right": "<b>While</b> I was cooking, he called",
            "why": "длинное → while; не два when"
          }
        ],
        "mnemonic": "🔗 while + длинное (-ing), when + короткое (did).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери слово перед длинным действием.",
            "q": "Выбери слово: «___ I was cooking, he called.»",
            "opts": [
              "When",
              "While",
              "And"
            ],
            "answer": 1,
            "explain": "длинное was cooking → <b>while</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери слово перед коротким действием.",
            "q": "Выбери слово: «I was sleeping ___ he came.»",
            "opts": [
              "while",
              "when",
              "so"
            ],
            "answer": 1,
            "explain": "короткое came → <b>when</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. while + длинное.",
            "q": "Собери: «Пока я читал, он пришёл»",
            "want": "While I was reading he came",
            "answer": "While I was reading he came"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Фон или факт? <em>was doing</em> vs <em>did</em>",
        "paras": [
          "Главная сложность: в русском мы выбираем «делал / сделал» по виду глагола, и это не всегда совпадает с английским. Английский смотрит на другое: это ПРОЦЕСС в момент или просто ФАКТ?",
          "Процесс, фон, «в тот момент шло» → <b>was/were + -ing</b>: <b>I was reading all evening.</b> Один законченный факт, «взял и сделал» → <b>Past Simple</b>: <b>I read this book.</b>",
          "Проверка: можешь подставить «как раз тогда, в процессе»? → was doing. Это просто событие в списке «что случилось»? → did. Не переводи по русскому виду — спрашивай «процесс или факт?»."
        ],
        "audio": "Главная сложность: в русском мы выбираем делал или сделал по виду глагола, и это не всегда совпадает с английским. Английский смотрит на другое: это процесс в момент или просто факт? Процесс, фон, в тот момент шло — was или were плюс -ing: I was reading all evening. Один законченный факт, взял и сделал — Past Simple: I read this book. Проверка: можешь подставить как раз тогда, в процессе? Значит was doing.",
        "table": {
          "rows": [
            [
              "I was reading all evening.",
              "процесс, фон → was -ing"
            ],
            [
              "I read the book in two days.",
              "факт, результат → Past Simple"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Когда я вошёл, она плакала (процесс).",
            "en": "When I came in, she <b>was crying</b>.",
            "gloss": "процесс → was crying",
            "say": "When I came in, she was crying."
          },
          {
            "ru": "Она заплакала и ушла (факт за фактом).",
            "en": "She <b>cried</b> and <b>left</b>.",
            "gloss": "факты → Past Simple",
            "say": "She cried and left."
          },
          {
            "ru": "Весь день шёл снег (процесс).",
            "en": "It <b>was snowing</b> all day.",
            "gloss": "процесс → was snowing",
            "say": "It was snowing all day."
          },
          {
            "ru": "Вчера я посмотрел три фильма (факт).",
            "en": "Yesterday I <b>watched</b> three films.",
            "gloss": "факт → Past Simple",
            "say": "Yesterday I watched three films."
          }
        ],
        "mistakes": [
          {
            "wrong": "When I came in, she cried (хотя был процесс)",
            "right": "When I came in, she <b>was crying</b>",
            "why": "процесс в момент → was crying"
          },
          {
            "wrong": "I was watching three films yesterday",
            "right": "I <b>watched</b> three films yesterday",
            "why": "законченный факт, результат → Past Simple"
          }
        ],
        "mnemonic": "🎬 Процесс/фон → was -ing. Факт/результат → did.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> процесс в момент.",
            "q": "«Когда я позвонил, она готовила» —",
            "opts": [
              "When I called, she cooked",
              "When I called, she was cooking",
              "When I was calling, she cooked"
            ],
            "answer": 1,
            "explain": "процесс в момент → was cooking."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> законченный факт.",
            "q": "«Вчера я прочитал книгу» (факт) —",
            "opts": [
              "Yesterday I was reading a book",
              "Yesterday I read a book"
            ],
            "answer": 1,
            "explain": "законченный факт → Past Simple read."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши процесс. rain → raining.",
            "q": "Весь вечер шёл дождь.",
            "accept": [
              "it was raining all evening"
            ],
            "placeholder": "It was ... all evening"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · собираем",
        "title": "Собираем рассказ: <em>I was …ing when …</em>",
        "paras": [
          "Теперь склеим всё в живую историю. Берём фон (что шло) + событие, которое его прервало: <b>I was having dinner when the phone rang.</b> = Я ужинал, когда зазвонил телефон.",
          "Можно цепочку: <b>While I was walking home, I saw an old friend, so we had a coffee.</b> Фон → событие → результат. Так строятся настоящие рассказы.",
          "Запомни два «двигателя»: длинное — was/were + -ing, короткое — простое прошлое. Поставил каждое на место — и тебя понимают точно."
        ],
        "audio": "Теперь склеим всё в живую историю. Берём фон, что шло, плюс событие, которое его прервало: I was having dinner when the phone rang — я ужинал, когда зазвонил телефон. Можно цепочку: While I was walking home, I saw an old friend, so we had a coffee. Фон, событие, результат. Длинное — was или were плюс -ing, короткое — простое прошлое.",
        "table": {
          "rows": [
            [
              "I was having dinner",
              "фон (was -ing)"
            ],
            [
              "when the phone rang",
              "событие (Past Simple)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я ужинал, когда зазвонил телефон.",
            "en": "I <b>was having</b> dinner when the phone <b>rang</b>.",
            "gloss": "фон + событие",
            "say": "I was having dinner when the phone rang."
          },
          {
            "ru": "Пока я шёл домой, я встретил друга.",
            "en": "While I <b>was walking</b> home, I <b>met</b> a friend.",
            "gloss": "фон + событие",
            "say": "While I was walking home, I met a friend."
          },
          {
            "ru": "Они смотрели фильм, когда я пришёл.",
            "en": "They <b>were watching</b> a film when I <b>arrived</b>.",
            "gloss": "фон + событие",
            "say": "They were watching a film when I arrived."
          },
          {
            "ru": "Шёл дождь, когда мы вышли.",
            "en": "It <b>was raining</b> when we <b>went</b> out.",
            "gloss": "фон + событие",
            "say": "It was raining when we went out."
          }
        ],
        "mistakes": [
          {
            "wrong": "I had dinner when the phone was ringing",
            "right": "I <b>was having</b> dinner when the phone <b>rang</b>",
            "why": "фон — was having, короткое — rang"
          }
        ],
        "mnemonic": "📖 Рассказ: длинное (was -ing) + when + короткое (did).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное предложение.",
            "q": "«Они смотрели фильм, когда я пришёл» —",
            "opts": [
              "They watched a film when I was arriving",
              "They were watching a film when I arrived",
              "They were watching a film when I was arriving"
            ],
            "answer": 1,
            "explain": "фон was watching + короткое arrived."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Я ужинал, когда зазвонил телефон»",
            "want": "I was having dinner when the phone rang",
            "answer": "I was having dinner when the phone rang"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. Фон — was raining, короткое — went out.",
            "q": "Шёл дождь, когда мы вышли.",
            "accept": [
              "it was raining when we went out"
            ],
            "placeholder": "It was raining when we ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня рассказывает Тому смешную историю про вчера. Слушай, как фон и событие идут вместе.",
      "lines": [
        {
          "who": "A",
          "en": "Something funny happened yesterday.",
          "ru": "Вчера случилось кое-что смешное."
        },
        {
          "who": "B",
          "en": "Really? Tell me!",
          "ru": "Правда? Рассказывай!"
        },
        {
          "who": "A",
          "en": "I was cooking dinner when my cat jumped on the table.",
          "ru": "Я готовила ужин, когда мой кот прыгнул на стол."
        },
        {
          "who": "B",
          "en": "Oh no! What did you do?",
          "ru": "О нет! И что ты сделала?"
        },
        {
          "who": "A",
          "en": "I was laughing while the cat was eating my fish!",
          "ru": "Я смеялась, пока кот ел мою рыбу!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — связки времени и глаголы-события. Повтори вслух.",
      "items": [
        {
          "en": "when",
          "ru": "когда (+ короткое)",
          "ex": "When he called, I was busy."
        },
        {
          "en": "while",
          "ru": "пока, в то время как (+ длинное)",
          "ex": "While I was cooking…"
        },
        {
          "en": "was cooking",
          "ru": "готовил (фон)",
          "ex": "I was cooking when he called."
        },
        {
          "en": "called",
          "ru": "позвонил (короткое)",
          "ex": "He called at six."
        },
        {
          "en": "happened",
          "ru": "случилось",
          "ex": "Something happened."
        },
        {
          "en": "rang",
          "ru": "зазвонил (ring)",
          "ex": "The phone rang."
        },
        {
          "en": "arrived",
          "ru": "пришёл, приехал",
          "ex": "I arrived late."
        },
        {
          "en": "met",
          "ru": "встретил (meet)",
          "ex": "I met a friend."
        },
        {
          "en": "suddenly",
          "ru": "вдруг",
          "ex": "Suddenly it started to rain."
        }
      ]
    },
    "drag": {
      "intro": "Соедини английскую фразу с переводом.",
      "pairs": [
        [
          "I was cooking",
          "я готовил (фон)"
        ],
        [
          "he called",
          "он позвонил (событие)"
        ],
        [
          "while",
          "пока"
        ],
        [
          "when",
          "когда"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса. Помни: фон — was -ing, событие — did.",
      "items": [
        {
          "q": "«Я спал, когда ты позвонил» —",
          "opts": [
            "I slept when you called",
            "I was sleeping when you called",
            "I was sleeping when you were calling"
          ],
          "answer": 1,
          "explain": "фон was sleeping + короткое called."
        },
        {
          "q": "Выбери слово: «___ I was reading, he came in.»",
          "opts": [
            "When",
            "While",
            "So"
          ],
          "answer": 1,
          "explain": "длинное was reading → <b>while</b>."
        },
        {
          "q": "«Вчера я прочитал книгу» (факт) —",
          "opts": [
            "Yesterday I was reading a book",
            "Yesterday I read a book"
          ],
          "answer": 1,
          "explain": "законченный факт → Past Simple."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: фон и события вместе. Найди was -ing и Past Simple.",
      "title": "A strange morning",
      "sentences": [
        "Yesterday morning started normally.",
        "I was having breakfast when I heard a noise.",
        "While I was looking out of the window, I saw a fox.",
        "It was walking slowly across the garden.",
        "I picked up my phone and took a photo.",
        "The fox stopped when it saw me.",
        "Then it ran away into the trees.",
        "I was still watching when my coffee got cold.",
        "I told my friends about the fox later.",
        "It was a strange but nice morning."
      ],
      "translation": "Вчера утро началось как обычно. Я завтракал, когда услышал шум. Пока я смотрел в окно, я увидел лису. Она медленно шла через сад. Я взял телефон и сделал фото. Лиса остановилась, когда увидела меня. Потом она убежала в деревья. Я всё ещё смотрел, когда мой кофе остыл. Позже я рассказал друзьям про лису. Это было странное, но приятное утро."
    },
    "essay": {
      "intro": "Расскажи маленькую историю: что-то шло, и вдруг случилось событие.",
      "prompt": "Напиши 3–5 предложений: опиши момент, когда длинное действие прервалось коротким. Используй was/were + -ing и when/while.",
      "hint": "Структуры: I was …ing when… ; While I was…, … ; Then… (длинное — was -ing, короткое — Past Simple).",
      "example": "Yesterday I was walking home when it started to rain. I didn't have an umbrella. While I was running, I saw a café. So I went in and had a hot tea."
    },
    "picture": {
      "intro": "Опиши по картинке, что человек делал, когда случилось событие.",
      "emoji": "🍳📞🐱",
      "prompt": "Опиши момент по картинке. Используй was -ing + when.",
      "hint": "Используй: She was cooking when the cat jumped; he was reading when the phone rang.",
      "example": "She was cooking dinner when the cat jumped on the table. She was laughing when the cat ate the fish.",
      "img": "img/a2/day-04.jpg",
      "credit": "Фото: Wonderlane · CC0 · <a href=\"https://www.flickr.com/photos/71401718@N00/6231890399\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "5": {
    "day": 5,
    "week": "01",
    "level": "A2",
    "themeRu": "Рассказ",
    "themeEn": "Telling a story",
    "intro": "Отдельные факты о прошлом у тебя уже есть — сегодня сошьём их в настоящий рассказ. Нитки для этого — связки: <b>then</b> (потом), <b>after</b> (после), <b>before</b> (до), <b>so</b> (поэтому), <b>because</b> (потому что). И ещё одно нужное слово — <b>ago</b> (назад): <b>two days ago</b> — два дня назад; с ним есть маленькая хитрость, покажу. С этими словами твои истории зазвучат гладко.",
    "introAudio": "Отдельные факты о прошлом у тебя уже есть — сегодня сошьём их в настоящий рассказ. Нитки для этого — связки: then, потом; after, после; before, до; so, поэтому; because, потому что. И ещё одно нужное слово — ago, назад: two days ago — два дня назад; с ним есть маленькая хитрость, покажу. С этими словами твои истории зазвучат гладко.",
    "goals": [
      "связывать события по порядку: then, after, before",
      "показывать причину и результат: so и because",
      "говорить, как давно: two days ago, a week ago",
      "к концу дня рассказать связную историю из 4–5 предложений"
    ],
    "learned": [
      "Связал(а) события по порядку: then, after, before",
      "Показал(а) причину и результат: so и because",
      "Сказал(а), как давно: two days ago, a week ago",
      "К концу дня рассказал(а) связную историю из 4–5 предложений"
    ],
    "review": {
      "intro": "Разминка: вспомним вчерашнее — фон (was -ing) и событие (did), слова when и while.",
      "introAudio": "Разминка: вспомним вчерашнее — фон, was -ing, и событие, did, слова when и while.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери верное предложение.",
          "q": "«Я готовил, когда он позвонил» —",
          "opts": [
            "I cooked when he was calling",
            "I was cooking when he called",
            "I was cooking when he was calling"
          ],
          "answer": 1,
          "explain": "фон was cooking + короткое called."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери предложение. while + длинное.",
          "q": "Собери: «Пока я читал, он пришёл»",
          "want": "While I was reading he came",
          "answer": "While I was reading he came"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · по порядку",
        "title": "По порядку — <em>then, after, before</em>",
        "paras": [
          "Чтобы события шли по очереди, бери связки. <b>then</b> (потом) — следующее действие: I got up. <b>Then</b> I had breakfast. <b>after</b> (после) и <b>before</b> (до, перед) показывают порядок двух событий.",
          "<b>After breakfast, I went to work.</b> = После завтрака я пошёл на работу. <b>Before the film, we had dinner.</b> = Перед фильмом мы поужинали.",
          "Важно: после <b>then</b> идёт полное предложение с глаголом: <b>Then I went home.</b> Нельзя просто «Then home» — нужен глагол went."
        ],
        "audio": "Чтобы события шли по очереди, бери связки. then, потом — следующее действие: I got up. Then I had breakfast. after, после, и before, до, перед, показывают порядок двух событий. After breakfast I went to work. Before the film we had dinner. Важно: после then идёт полное предложение с глаголом: Then I went home. Нельзя просто Then home — нужен глагол.",
        "table": {
          "rows": [
            [
              "then",
              "потом (следующее действие)"
            ],
            [
              "after",
              "после"
            ],
            [
              "before",
              "до, перед"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я встал. Потом я позавтракал.",
            "en": "I got up. <b>Then</b> I had breakfast.",
            "gloss": "then + полное предложение",
            "say": "I got up. Then I had breakfast."
          },
          {
            "ru": "После завтрака я пошёл на работу.",
            "en": "<b>After</b> breakfast, I went to work.",
            "gloss": "after",
            "say": "After breakfast, I went to work."
          },
          {
            "ru": "Перед сном я читал книгу.",
            "en": "<b>Before</b> bed, I read a book.",
            "gloss": "before",
            "say": "Before bed, I read a book."
          },
          {
            "ru": "Мы поели, потом пошли гулять.",
            "en": "We ate, <b>then</b> we went for a walk.",
            "gloss": "then + глагол",
            "say": "We ate, then we went for a walk."
          }
        ],
        "mistakes": [
          {
            "wrong": "Then home",
            "right": "<b>Then</b> I <b>went</b> home",
            "why": "после then нужно полное предложение с глаголом"
          }
        ],
        "mnemonic": "➡️ then = потом + полное предложение (Then I went…).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери связку для следующего действия.",
            "q": "Выбери связку: «I got up. ___ I had coffee.»",
            "opts": [
              "Before",
              "Then",
              "Because"
            ],
            "answer": 1,
            "explain": "следующее действие → <b>then</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «После работы я пошёл домой»",
            "want": "After work I went home",
            "answer": "After work I went home"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. После then нужен глагол.",
            "q": "Потом я посмотрел фильм.",
            "accept": [
              "then i watched a film",
              "then i watched a movie"
            ],
            "placeholder": "Then I ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · причина и результат",
        "title": "Почему и поэтому — <em>because</em> и <em>so</em>",
        "paras": [
          "Чтобы объяснить причину, бери <b>because</b> (потому что): причина идёт ПОСЛЕ него. <b>I was tired because I worked all day.</b> = Я устал, потому что работал весь день.",
          "Чтобы показать результат, бери <b>so</b> (поэтому, так что): результат идёт ПОСЛЕ него. <b>I was tired, so I went to bed.</b> = Я устал, поэтому пошёл спать.",
          "Разница простая: <b>because</b> + причина, <b>so</b> + результат. Одно событие, два взгляда: …<b>because</b> it was late vs It was late, <b>so</b>…"
        ],
        "audio": "Чтобы объяснить причину, бери because, потому что: причина идёт после него. I was tired because I worked all day. Чтобы показать результат, бери so, поэтому: результат идёт после него. I was tired, so I went to bed. Разница простая: because плюс причина, so плюс результат.",
        "table": {
          "rows": [
            [
              "because",
              "потому что (+ причина)"
            ],
            [
              "so",
              "поэтому, так что (+ результат)"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я остался дома, потому что шёл дождь.",
            "en": "I stayed home <b>because</b> it was raining.",
            "gloss": "because + причина",
            "say": "I stayed home because it was raining."
          },
          {
            "ru": "Шёл дождь, поэтому я остался дома.",
            "en": "It was raining, <b>so</b> I stayed home.",
            "gloss": "so + результат",
            "say": "It was raining, so I stayed home."
          },
          {
            "ru": "Я был голоден, поэтому сделал бутерброд.",
            "en": "I was hungry, <b>so</b> I made a sandwich.",
            "gloss": "so + результат",
            "say": "I was hungry, so I made a sandwich."
          },
          {
            "ru": "Она опоздала, потому что проспала.",
            "en": "She was late <b>because</b> she overslept.",
            "gloss": "because + причина",
            "say": "She was late because she overslept."
          }
        ],
        "mistakes": [
          {
            "wrong": "It was raining because I stayed home",
            "right": "It was raining, <b>so</b> I stayed home",
            "why": "результат «остался дома» → so, а не because"
          }
        ],
        "mnemonic": "🔁 because = причина, so = результат.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери связку результата.",
            "q": "Выбери: «I was tired, ___ I went to bed.»",
            "opts": [
              "because",
              "so",
              "before"
            ],
            "answer": 1,
            "explain": "результат «пошёл спать» → <b>so</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери связку причины.",
            "q": "Выбери: «I was happy ___ I passed the test.»",
            "opts": [
              "so",
              "because",
              "then"
            ],
            "answer": 1,
            "explain": "причина «сдал тест» → <b>because</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение с so.",
            "q": "Собери: «Я был голоден, поэтому поел»",
            "want": "I was hungry so I ate",
            "answer": "I was hungry so I ate"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Сколько назад — <em>ago</em> стоит ПОСЛЕ срока",
        "paras": [
          "<b>ago</b> значит «(тому) назад»: сколько времени прошло до сейчас. Но ловушка: в английском <b>ago</b> стоит ПОСЛЕ срока, а не перед. По-русски «ДВА дня назад», по-английски тоже сначала срок: <b>two days ago</b>.",
          "<b>I saw him two days ago.</b> = Я видел его два дня назад. <b>We met a week ago.</b> = Мы познакомились неделю назад. Сначала «сколько», потом ago.",
          "Не путай <b>ago</b> и <b>before</b>! <b>ago</b> = назад от сейчас (two days ago). <b>before</b> = до чего-то другого (before the film). С ago всегда идёт прошедшее время."
        ],
        "audio": "ago значит тому назад: сколько времени прошло до сейчас. Ловушка: в английском ago стоит после срока, а не перед. По-русски два дня назад, по-английски тоже сначала срок: two days ago. I saw him two days ago. We met a week ago. Сначала сколько, потом ago. Не путай ago и before: ago — назад от сейчас, before — до чего-то другого.",
        "table": {
          "rows": [
            [
              "two days ago",
              "два дня назад"
            ],
            [
              "a week ago",
              "неделю назад"
            ],
            [
              "an hour ago",
              "час назад"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я видел его два дня назад.",
            "en": "I saw him two days <b>ago</b>.",
            "gloss": "срок + ago",
            "say": "I saw him two days ago."
          },
          {
            "ru": "Мы познакомились год назад.",
            "en": "We met a year <b>ago</b>.",
            "gloss": "срок + ago",
            "say": "We met a year ago."
          },
          {
            "ru": "Она звонила час назад.",
            "en": "She called an hour <b>ago</b>.",
            "gloss": "срок + ago",
            "say": "She called an hour ago."
          },
          {
            "ru": "Я был там давно.",
            "en": "I was there a long time <b>ago</b>.",
            "gloss": "срок + ago",
            "say": "I was there a long time ago."
          }
        ],
        "mistakes": [
          {
            "wrong": "ago two days",
            "right": "two days <b>ago</b>",
            "why": "ago стоит ПОСЛЕ срока, не перед"
          },
          {
            "wrong": "I saw him before two days",
            "right": "I saw him two days <b>ago</b>",
            "why": "«назад от сейчас» — ago, не before"
          }
        ],
        "mnemonic": "⏪ Сначала срок, потом ago: two days ago.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный порядок.",
            "q": "Как сказать «два дня назад»?",
            "opts": [
              "ago two days",
              "two days ago",
              "before two days"
            ],
            "answer": 1,
            "explain": "срок + <b>ago</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. ago стоит после срока.",
            "q": "Я видел её неделю назад.",
            "accept": [
              "i saw her a week ago"
            ],
            "placeholder": "I saw her a week ..."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. срок + ago.",
            "q": "Собери: «Мы познакомились год назад»",
            "want": "We met a year ago",
            "answer": "We met a year ago"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · собираем",
        "title": "Всё вместе: гладкий рассказ",
        "paras": [
          "Теперь соберём историю из связок. Порядок (<b>then, after</b>) + причина/результат (<b>because, so</b>) + когда (<b>ago</b>) — и речь льётся.",
          "<b>Two days ago I had a bad day. First I missed the bus, so I was late. Then it started to rain, and I got wet because I had no umbrella. After work I went home and slept.</b>",
          "Секрет хорошего рассказа: каждое предложение — полное, со своим глаголом в прошедшем. Связки только соединяют, но не отменяют глагол."
        ],
        "audio": "Теперь соберём историю из связок. Порядок — then, after, плюс причина и результат — because, so, плюс когда — ago. Two days ago I had a bad day. First I missed the bus, so I was late. Then it started to rain. After work I went home and slept. Секрет хорошего рассказа: каждое предложение полное, со своим глаголом в прошедшем.",
        "table": {
          "rows": [
            [
              "two days ago",
              "когда (срок + ago)"
            ],
            [
              "so / because",
              "результат / причина"
            ],
            [
              "then / after",
              "порядок"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я опоздал, поэтому побежал.",
            "en": "I was late, <b>so</b> I ran.",
            "gloss": "so + результат",
            "say": "I was late, so I ran."
          },
          {
            "ru": "После ужина мы посмотрели фильм.",
            "en": "<b>After</b> dinner, we watched a film.",
            "gloss": "after + порядок",
            "say": "After dinner, we watched a film."
          },
          {
            "ru": "Неделю назад я начал новую работу.",
            "en": "A week <b>ago</b> I started a new job.",
            "gloss": "срок + ago",
            "say": "A week ago I started a new job."
          },
          {
            "ru": "Я устал, потому что много работал, поэтому рано лёг.",
            "en": "I was tired <b>because</b> I worked a lot, <b>so</b> I went to bed early.",
            "gloss": "because + so",
            "say": "I was tired because I worked a lot, so I went to bed early."
          }
        ],
        "mistakes": [
          {
            "wrong": "Then to the park",
            "right": "<b>Then</b> we <b>went</b> to the park",
            "why": "после связки всё равно нужен глагол"
          }
        ],
        "mnemonic": "🧵 Связки соединяют, но глагол в каждом предложении обязателен.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери связку результата.",
            "q": "Выбери: «It was cold, ___ I closed the window.»",
            "opts": [
              "because",
              "so",
              "ago"
            ],
            "answer": 1,
            "explain": "результат «закрыл окно» → <b>so</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. срок + ago.",
            "q": "Собери: «Неделю назад я начал новую работу»",
            "want": "A week ago I started a new job",
            "answer": "A week ago I started a new job"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. after + порядок, then + полное предложение.",
            "q": "После работы я пошёл домой и поспал.",
            "accept": [
              "after work i went home and slept"
            ],
            "placeholder": "After work I went home and ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Том рассказывает Ане историю про прошлые выходные. Слушай связки: then, so, because, ago.",
      "lines": [
        {
          "who": "A",
          "en": "What did you do at the weekend?",
          "ru": "Что ты делал на выходных?"
        },
        {
          "who": "B",
          "en": "Two days ago I went hiking, then we had a picnic.",
          "ru": "Два дня назад я ходил в поход, потом мы устроили пикник."
        },
        {
          "who": "A",
          "en": "Sounds great! Did it rain?",
          "ru": "Звучит отлично! Дождь был?"
        },
        {
          "who": "B",
          "en": "Yes, so we went home early. But it was fun because we laughed a lot.",
          "ru": "Да, поэтому мы рано ушли домой. Но было весело, потому что мы много смеялись."
        },
        {
          "who": "A",
          "en": "I'm happy you had a good time!",
          "ru": "Рада, что ты хорошо провёл время!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — связки для рассказа. Повтори вслух.",
      "items": [
        {
          "en": "then",
          "ru": "потом",
          "ex": "Then I went home."
        },
        {
          "en": "after",
          "ru": "после",
          "ex": "After lunch, I worked."
        },
        {
          "en": "before",
          "ru": "до, перед",
          "ex": "Before bed, I read."
        },
        {
          "en": "so",
          "ru": "поэтому, так что",
          "ex": "I was tired, so I slept."
        },
        {
          "en": "because",
          "ru": "потому что",
          "ex": "I left because it was late."
        },
        {
          "en": "ago",
          "ru": "(тому) назад",
          "ex": "two days ago"
        },
        {
          "en": "first",
          "ru": "сначала",
          "ex": "First I got up."
        },
        {
          "en": "a week ago",
          "ru": "неделю назад",
          "ex": "I started a week ago."
        },
        {
          "en": "story",
          "ru": "история, рассказ",
          "ex": "Tell me a story."
        }
      ]
    },
    "drag": {
      "intro": "Соедини связку с переводом.",
      "pairs": [
        [
          "then",
          "потом"
        ],
        [
          "because",
          "потому что"
        ],
        [
          "so",
          "поэтому"
        ],
        [
          "two days ago",
          "два дня назад"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса, и первая неделя почти позади. Помни: ago — после срока.",
      "items": [
        {
          "q": "Как сказать «два дня назад»?",
          "opts": [
            "ago two days",
            "two days ago",
            "before two days"
          ],
          "answer": 1,
          "explain": "срок + <b>ago</b>."
        },
        {
          "q": "Выбери: «I was tired, ___ I went to bed.»",
          "opts": [
            "because",
            "so",
            "before"
          ],
          "answer": 1,
          "explain": "результат → <b>so</b>."
        },
        {
          "q": "Выбери: «I stayed home ___ it was raining.»",
          "opts": [
            "so",
            "because",
            "then"
          ],
          "answer": 1,
          "explain": "причина → <b>because</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай связную историю. Найди связки then, after, so, because и «… ago».",
      "title": "A day to remember",
      "sentences": [
        "A month ago I had a special day.",
        "First, I got up very early.",
        "Then I took a train to the city.",
        "I was excited because it was my birthday.",
        "I met my best friend at the station.",
        "After that, we went to a museum.",
        "We were hungry, so we had lunch in a café.",
        "Before dinner, we walked in the park.",
        "It started to rain, but we didn't care.",
        "It was a perfect day, and I will never forget it."
      ],
      "translation": "Месяц назад у меня был особенный день. Сначала я встал очень рано. Потом я сел на поезд до города. Я был взволнован, потому что это был мой день рождения. Я встретил лучшего друга на вокзале. После этого мы пошли в музей. Мы проголодались, поэтому пообедали в кафе. Перед ужином мы погуляли в парке. Начался дождь, но нам было всё равно. Это был идеальный день, и я никогда его не забуду."
    },
    "essay": {
      "intro": "Расскажи свою маленькую историю из прошлого — с порядком, причиной и «когда».",
      "prompt": "Напиши 4–5 предложений: расскажи про день из прошлого. Используй связки then/after/because/so и «… ago».",
      "hint": "Структуры: A week ago… ; First… ; Then… ; …, so… ; …, because… (каждое предложение со своим глаголом).",
      "example": "Two days ago I had a great day. First I met my friends. Then we went to a café because we were hungry. It was sunny, so we walked in the park. After that, I went home happy."
    },
    "picture": {
      "intro": "Опиши по картинке историю одного дня по порядку.",
      "emoji": "📖🚂☔",
      "prompt": "Опиши историю одного дня по порядку. Используй then, so, because, ago.",
      "hint": "Используй: A week ago…; First…; Then…; …, so…; …, because…",
      "example": "A week ago I went to the city. First I took a train. Then it started to rain, so I bought an umbrella. I was happy because I saw my friend.",
      "img": "img/a2/day-05.jpg",
      "credit": "Фото: President Of Ukraine · CC0 · <a href=\"https://www.flickr.com/photos/165930373@N06/51998415977\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "6": {
    "day": 6,
    "week": "01",
    "level": "A2",
    "themeRu": "Мои выходные",
    "themeEn": "My weekend",
    "intro": "Чем закончились твои последние выходные? Сегодня научимся рассказывать об этом по-английски — и заодно подведём итог учебной части первой недели. Тяжёлой новой грамматики не будет, можно выдохнуть. Зато ты уверенно расставишь время: <b>last night</b> (вчера вечером), <b>yesterday</b> (вчера), <b>in 2010</b>, <b>on Monday</b>, <b>at the weekend</b>. Коварство одно — предлоги: где-то они нужны, а где-то их быть не должно. Разложим по полочкам.",
    "introAudio": "Чем закончились твои последние выходные? Сегодня научимся рассказывать об этом по-английски — и заодно подведём итог учебной части первой недели. Тяжёлой новой грамматики не будет, можно выдохнуть. Зато ты уверенно расставишь время: last night, вчера вечером, yesterday, вчера, in 2010, on Monday, at the weekend. Коварство одно — предлоги: где-то они нужны, а где-то их быть не должно. Разложим по полочкам.",
    "goals": [
      "уверенно рассказать про выходные в прошедшем времени",
      "правильно ставить предлоги времени: in 2010, on Monday, at the weekend",
      "запомнить, что last night и yesterday идут БЕЗ предлога",
      "к концу дня собрать рассказ из 4–5 предложений с разными указателями времени"
    ],
    "learned": [
      "Уверенно рассказал(а) про выходные в прошедшем времени",
      "Правильно расставил(а) предлоги времени: in 2010, on Monday, at the weekend",
      "Запомнил(а), что last night и yesterday идут БЕЗ предлога",
      "К концу дня собрал(а) рассказ из 4–5 предложений с разными указателями времени"
    ],
    "review": {
      "intro": "Вчера мы учились рассказывать историю по порядку: связки then, after, before, so, because и слово ago. Быстро вспомним — это сегодня очень пригодится.",
      "introAudio": "Вчера мы учились рассказывать историю по порядку: связки then, after, before, so, because и слово ago. Быстро вспомним — это сегодня очень пригодится.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери верный порядок. Вспомни, где стоит ago.",
          "q": "Как сказать «два дня назад»?",
          "opts": [
            "ago two days",
            "two days ago",
            "two ago days"
          ],
          "answer": 1,
          "explain": "ago стоит ПОСЛЕ срока: two days <b>ago</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу со связкой because.",
          "q": "Собери: «Я остался дома, потому что устал»",
          "want": "I stayed home because I was tired",
          "answer": "I stayed home because I was tired"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · без предлога",
        "title": "<em>last night</em>, <em>yesterday</em> — без предлога",
        "paras": [
          "Самая частая ошибка русскоязычных — лишний предлог. Со словами <b>yesterday</b> (вчера), <b>last</b> (прошлый) и <b>this</b> (этот) предлог НЕ нужен — совсем.",
          "<b>last night</b> (вчера вечером/ночью), <b>last week</b> (на прошлой неделе), <b>last year</b> (в прошлом году), <b>yesterday</b> (вчера), <b>this morning</b> (сегодня утром). Видишь? Никаких in / on / at перед ними.",
          "По-русски мы говорим «НА прошлой неделе», «В прошлом году» — и рука тянется поставить предлог. В английском здесь его быть не должно: просто <b>last week</b>, <b>last year</b>."
        ],
        "audio": "Самая частая ошибка — лишний предлог. Со словами yesterday, last и this предлог не нужен совсем. last night, вчера вечером. last week, на прошлой неделе. last year, в прошлом году. yesterday, вчера. this morning, сегодня утром. Никаких in, on, at перед ними.",
        "table": {
          "rows": [
            [
              "last night",
              "вчера вечером / ночью"
            ],
            [
              "last week / last year",
              "на прошлой неделе / в прошлом году"
            ],
            [
              "yesterday",
              "вчера"
            ],
            [
              "this morning",
              "сегодня утром"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Вчера вечером я смотрел фильм.",
            "en": "<b>Last night</b> I watched a film.",
            "gloss": "last night — без предлога",
            "say": "Last night I watched a film."
          },
          {
            "ru": "На прошлой неделе я был занят.",
            "en": "I was busy <b>last week</b>.",
            "gloss": "last week — без предлога",
            "say": "I was busy last week."
          },
          {
            "ru": "Вчера я встретил Тома.",
            "en": "I met Tom <b>yesterday</b>.",
            "gloss": "yesterday",
            "say": "I met Tom yesterday."
          },
          {
            "ru": "Сегодня утром я встал рано.",
            "en": "<b>This morning</b> I got up early.",
            "gloss": "this morning",
            "say": "This morning I got up early."
          }
        ],
        "mistakes": [
          {
            "wrong": "in last week",
            "right": "<b>last week</b>",
            "why": "со словом last предлог не нужен"
          },
          {
            "wrong": "at yesterday",
            "right": "<b>yesterday</b>",
            "why": "yesterday — само по себе, без предлога"
          }
        ],
        "mnemonic": "🚫 last / yesterday / this — без in/on/at.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери вариант без лишнего предлога.",
            "q": "Как сказать «вчера вечером»?",
            "opts": [
              "in last night",
              "last night",
              "at last night"
            ],
            "answer": 1,
            "explain": "last night — без предлога."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Я смотрел фильм вчера вечером»",
            "want": "I watched a film last night",
            "answer": "I watched a film last night"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. busy = занят.",
            "q": "На прошлой неделе я был занят.",
            "accept": [
              "i was busy last week"
            ],
            "placeholder": "I was busy ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · in — большое время",
        "title": "<em>in</em> — год, месяц, сезон",
        "paras": [
          "Предлог <b>in</b> ставим перед «большими» отрезками времени: <b>in 2010</b> (в 2010 году), <b>in May</b> (в мае), <b>in summer</b> (летом), <b>in the morning</b> (утром — как часть дня вообще).",
          "Логика простая: in — это «внутри» большого промежутка. Внутри года, внутри месяца, внутри сезона.",
          "Год говорим без слова «year»: просто <b>in 2010</b>. И читаем как «twenty ten» — двумя парами."
        ],
        "audio": "Предлог in ставим перед большими отрезками времени. in 2010, в 2010 году. in May, в мае. in summer, летом. in the morning, утром как часть дня вообще. Логика: in — это внутри большого промежутка. Год говорим без слова year: просто in 2010.",
        "table": {
          "rows": [
            [
              "in 2010",
              "в 2010 году"
            ],
            [
              "in May / in July",
              "в мае / в июле"
            ],
            [
              "in summer / in winter",
              "летом / зимой"
            ],
            [
              "in the morning / evening",
              "утром / вечером"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я родился в 1995 году.",
            "en": "I was born <b>in</b> 1995.",
            "gloss": "in + год",
            "say": "I was born in 1995."
          },
          {
            "ru": "Мы поженились в мае.",
            "en": "We got married <b>in</b> May.",
            "gloss": "in + месяц",
            "say": "We got married in May."
          },
          {
            "ru": "Летом мы ездили к морю.",
            "en": "<b>In</b> summer we went to the sea.",
            "gloss": "in + сезон",
            "say": "In summer we went to the sea."
          },
          {
            "ru": "Утром я пью кофе.",
            "en": "<b>In</b> the morning I drink coffee.",
            "gloss": "in the morning",
            "say": "In the morning I drink coffee."
          }
        ],
        "mistakes": [
          {
            "wrong": "on 2010",
            "right": "<b>in</b> 2010",
            "why": "год → in, не on"
          },
          {
            "wrong": "in this morning",
            "right": "<b>this morning</b>",
            "why": "this morning — без предлога; in только для «части дня вообще» (in the morning)"
          }
        ],
        "mnemonic": "📅 in — год, месяц, сезон: in 2010, in May, in summer.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери предлог для года.",
            "q": "«Я родился в 2000 году» —",
            "opts": [
              "I was born on 2000",
              "I was born in 2000",
              "I was born at 2000"
            ],
            "answer": 1,
            "explain": "год → <b>in</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери предлог для сезона.",
            "q": "«___ summer we travelled» (летом)",
            "opts": [
              "on",
              "at",
              "in"
            ],
            "answer": 2,
            "explain": "сезон → <b>in summer</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. get married = пожениться.",
            "q": "Мы поженились в мае.",
            "accept": [
              "we got married in may"
            ],
            "placeholder": "We got married ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · on — день и дата",
        "title": "<em>on</em> — день недели и дата",
        "paras": [
          "Перед конкретным днём ставим <b>on</b>: <b>on Monday</b> (в понедельник), <b>on Saturday</b> (в субботу), <b>on Friday night</b> (в пятницу вечером), <b>on 3 March</b> (3 марта).",
          "Сюда же — особые дни: <b>on my birthday</b> (в мой день рождения), <b>on New Year's Day</b> (в Новый год).",
          "По-русски «в понедельник» — и снова хочется сказать «in Monday». Нет: день недели всегда с <b>on</b>."
        ],
        "audio": "Перед конкретным днём ставим on. on Monday, в понедельник. on Saturday, в субботу. on Friday night, в пятницу вечером. on 3 March, третьего марта. Особые дни тоже: on my birthday, в мой день рождения. День недели всегда с on, не in.",
        "table": {
          "rows": [
            [
              "on Monday",
              "в понедельник"
            ],
            [
              "on Saturday",
              "в субботу"
            ],
            [
              "on Friday night",
              "в пятницу вечером"
            ],
            [
              "on my birthday",
              "в мой день рождения"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "В понедельник я начал новую работу.",
            "en": "<b>On</b> Monday I started a new job.",
            "gloss": "on + день",
            "say": "On Monday I started a new job."
          },
          {
            "ru": "В субботу мы ходили в гости.",
            "en": "<b>On</b> Saturday we visited friends.",
            "gloss": "on Saturday",
            "say": "On Saturday we visited friends."
          },
          {
            "ru": "В пятницу вечером я остался дома.",
            "en": "I stayed home <b>on</b> Friday night.",
            "gloss": "on Friday night",
            "say": "I stayed home on Friday night."
          },
          {
            "ru": "В мой день рождения шёл дождь.",
            "en": "It rained <b>on</b> my birthday.",
            "gloss": "on + особый день",
            "say": "It rained on my birthday."
          }
        ],
        "mistakes": [
          {
            "wrong": "in Monday",
            "right": "<b>on</b> Monday",
            "why": "день недели → on, не in"
          },
          {
            "wrong": "at Saturday",
            "right": "<b>on</b> Saturday",
            "why": "конкретный день → on"
          }
        ],
        "mnemonic": "🗓️ on — день недели и дата: on Monday, on 3 March.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери предлог для дня недели.",
            "q": "«В субботу мы гуляли» —",
            "opts": [
              "In Saturday we walked",
              "On Saturday we walked",
              "At Saturday we walked"
            ],
            "answer": 1,
            "explain": "день недели → <b>on</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «В понедельник я начал новую работу»",
            "want": "On Monday I started a new job",
            "answer": "On Monday I started a new job"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод с on.",
            "q": "В пятницу я был дома.",
            "accept": [
              "on friday i was at home",
              "i was at home on friday"
            ],
            "placeholder": "On Friday ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · at — выходные и время",
        "title": "<em>at the weekend</em> и собираем рассказ",
        "paras": [
          "Три коротких случая с <b>at</b>: <b>at the weekend</b> (на выходных), <b>at night</b> (ночью), <b>at six o'clock</b> (в шесть часов). По-русски «на выходных» — но в английском это <b>at the weekend</b>, не «in».",
          "Теперь соберём выходные вместе: <b>At the weekend I got up late. On Saturday I met friends, and on Sunday I stayed home.</b> = На выходных я вставал поздно. В субботу встретил друзей, а в воскресенье остался дома.",
          "Один рассказ — и сразу несколько указателей времени: at the weekend, on Saturday, on Sunday. Глаголы, конечно, в прошедшем: got, met, stayed."
        ],
        "audio": "Три коротких случая с at. at the weekend, на выходных. at night, ночью. at six o'clock, в шесть часов. Соберём выходные вместе: At the weekend I got up late. On Saturday I met friends, and on Sunday I stayed home. Один рассказ — и сразу несколько указателей времени.",
        "table": {
          "rows": [
            [
              "at the weekend",
              "на выходных"
            ],
            [
              "at night",
              "ночью"
            ],
            [
              "at six (o'clock)",
              "в шесть (часов)"
            ],
            [
              "at the weekend ≠ in",
              "на выходных — только at"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "На выходных я отдыхал.",
            "en": "I relaxed <b>at the weekend</b>.",
            "gloss": "at the weekend",
            "say": "I relaxed at the weekend."
          },
          {
            "ru": "Ночью шёл дождь.",
            "en": "It rained <b>at night</b>.",
            "gloss": "at night",
            "say": "It rained at night."
          },
          {
            "ru": "Я встал в восемь.",
            "en": "I got up <b>at</b> eight.",
            "gloss": "at + время",
            "say": "I got up at eight."
          },
          {
            "ru": "В субботу мы ходили в кино, а в воскресенье отдыхали.",
            "en": "<b>On Saturday</b> we went to the cinema, and <b>on Sunday</b> we relaxed.",
            "gloss": "несколько указателей",
            "say": "On Saturday we went to the cinema, and on Sunday we relaxed."
          }
        ],
        "mistakes": [
          {
            "wrong": "in the weekend",
            "right": "<b>at</b> the weekend",
            "why": "выходные → at, не in"
          },
          {
            "wrong": "on the night",
            "right": "<b>at</b> night",
            "why": "ночью → at night (без the)"
          }
        ],
        "mnemonic": "🎉 at — выходные, ночь, время: at the weekend, at night, at six.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери предлог для выходных.",
            "q": "«На выходных я отдыхал» —",
            "opts": [
              "In the weekend I relaxed",
              "At the weekend I relaxed",
              "On weekend I relaxed"
            ],
            "answer": 1,
            "explain": "выходные → <b>at the weekend</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение про выходные.",
            "q": "Собери: «На выходных я вставал поздно»",
            "want": "At the weekend I got up late",
            "answer": "At the weekend I got up late"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод с on Saturday.",
            "q": "В субботу я встретил друзей.",
            "accept": [
              "on saturday i met friends",
              "i met friends on saturday"
            ],
            "placeholder": "On Saturday ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Понедельник, утро. Аня рассказывает Тому, как прошли её выходные. Лови указатели времени: at the weekend, on Saturday, on Sunday.",
      "lines": [
        {
          "who": "A",
          "en": "How was your weekend?",
          "ru": "Как прошли выходные?"
        },
        {
          "who": "B",
          "en": "Great! On Saturday I went to the mountains.",
          "ru": "Отлично! В субботу я ездила в горы."
        },
        {
          "who": "A",
          "en": "Nice! What did you do on Sunday?",
          "ru": "Здорово! А что делала в воскресенье?"
        },
        {
          "who": "B",
          "en": "On Sunday I stayed home. Last night I watched a film.",
          "ru": "В воскресенье осталась дома. А вчера вечером смотрела фильм."
        },
        {
          "who": "A",
          "en": "I love a lazy weekend!",
          "ru": "Обожаю ленивые выходные!"
        }
      ]
    },
    "vocab": {
      "intro": "Главные слова дня — указатели времени и слова про выходные. Повтори вслух с правильным предлогом.",
      "items": [
        {
          "en": "at the weekend",
          "ru": "на выходных",
          "ex": "I rest at the weekend."
        },
        {
          "en": "last night",
          "ru": "вчера вечером / ночью",
          "ex": "Last night I slept well."
        },
        {
          "en": "last week",
          "ru": "на прошлой неделе",
          "ex": "I was busy last week."
        },
        {
          "en": "this morning",
          "ru": "сегодня утром",
          "ex": "This morning I got up late."
        },
        {
          "en": "on Monday",
          "ru": "в понедельник",
          "ex": "On Monday I work."
        },
        {
          "en": "in 2010",
          "ru": "в 2010 году",
          "ex": "I moved here in 2010."
        },
        {
          "en": "in summer",
          "ru": "летом",
          "ex": "In summer we travel."
        },
        {
          "en": "at night",
          "ru": "ночью",
          "ex": "It rained at night."
        },
        {
          "en": "weekend",
          "ru": "выходные",
          "ex": "Have a nice weekend!"
        }
      ]
    },
    "drag": {
      "intro": "Соедини указатель времени с переводом — следи за предлогом.",
      "pairs": [
        [
          "at the weekend",
          "на выходных"
        ],
        [
          "on Monday",
          "в понедельник"
        ],
        [
          "in 2010",
          "в 2010 году"
        ],
        [
          "last night",
          "вчера вечером"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса на предлоги времени. Закрываем тему выходных!",
      "items": [
        {
          "q": "«В 2010 году» —",
          "opts": [
            "on 2010",
            "in 2010",
            "at 2010"
          ],
          "answer": 1,
          "explain": "год → <b>in</b>."
        },
        {
          "q": "«В понедельник» —",
          "opts": [
            "in Monday",
            "on Monday",
            "at Monday"
          ],
          "answer": 1,
          "explain": "день недели → <b>on</b>."
        },
        {
          "q": "«На выходных» —",
          "opts": [
            "in the weekend",
            "at the weekend",
            "on weekend"
          ],
          "answer": 1,
          "explain": "выходные → <b>at the weekend</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай рассказ про прошлые выходные. Лови указатели времени и глаголы в прошлом.",
      "title": "My weekend",
      "sentences": [
        "Last weekend was great.",
        "On Saturday I got up late.",
        "In the morning I had a big breakfast.",
        "Then I met my friends in the park.",
        "We played football and talked a lot.",
        "At night we watched a film together.",
        "On Sunday I stayed at home.",
        "I read a book and cooked dinner.",
        "Last night I went to bed early.",
        "This morning I felt happy and rested."
      ],
      "translation": "Прошлые выходные были отличными. В субботу я встал поздно. Утром я плотно позавтракал. Потом встретил друзей в парке. Мы играли в футбол и много болтали. Ночью вместе смотрели фильм. В воскресенье я остался дома. Читал книгу и готовил ужин. Вчера вечером лёг спать рано. Сегодня утром чувствовал себя счастливым и отдохнувшим."
    },
    "essay": {
      "intro": "Теперь твоя очередь — расскажи про свои прошлые выходные!",
      "prompt": "Напиши 4–5 предложений о прошлых выходных. Используй указатели времени: at the weekend, on Saturday, on Sunday, last night.",
      "hint": "Структуры: At the weekend I… ; On Saturday I went… ; On Sunday I… ; Last night I… (глаголы в прошедшем).",
      "example": "At the weekend I relaxed. On Saturday I met my friends. On Sunday I stayed home and cooked dinner. Last night I watched a film."
    },
    "picture": {
      "intro": "Опиши по картинке, как человек провёл выходные.",
      "emoji": "⚽🌳🎬",
      "prompt": "Опиши выходные по картинке. Используй at the weekend, on Saturday, last night.",
      "hint": "Используй: At the weekend I played football; On Saturday I met friends; Last night I watched a film.",
      "example": "At the weekend I played football. On Saturday I met my friends in the park. Last night I watched a film.",
      "img": "img/a2/day-06.jpg",
      "credit": "Фото: Andrew Scheer · CC0 · <a href=\"https://www.flickr.com/photos/150938310@N02/29698758597\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "7": {
    "day": 7,
    "week": "01",
    "level": "A2",
    "themeRu": "Повторение №1",
    "themeEn": "Review 1",
    "intro": "Первая неделя A2 позади — это уже целая глава за плечами. За шесть дней ты собрал(а) почти всё прошедшее время: неправильные глаголы, вопросы с <b>did</b>, <b>Past Continuous</b> и контраст «фон против факта». Сегодня новой грамматики нет. Мы спокойно сведём всё вместе, потренируем на свежих примерах и закончим мини-тестом по всей неделе. Без спешки — это твой день закрепления.",
    "introAudio": "Первая неделя A2 позади — это уже целая глава за плечами. За шесть дней ты собрал почти всё прошедшее время: неправильные глаголы, вопросы с did, Past Continuous и контраст «фон против факта». Сегодня новой грамматики нет. Мы спокойно сведём всё вместе, потренируем на свежих примерах и закончим мини-тестом по всей неделе. Без спешки — это твой день закрепления.",
    "goals": [
      "вспомнить и уверенно использовать неправильные глаголы в прошедшем",
      "правильно строить вопросы и отрицания с did + базовая форма",
      "различать Past Simple (факт) и Past Continuous (фон)",
      "к концу дня пройти мини-тест по всей неделе 1 без подсказок"
    ],
    "learned": [
      "Вспомнил(а) и уверенно использовал(а) неправильные глаголы в прошедшем",
      "Правильно построил(а) вопросы и отрицания с did + базовая форма",
      "Научился(лась) различать Past Simple (факт) и Past Continuous (фон)",
      "К концу дня прошёл(ла) мини-тест по всей неделе 1 без подсказок"
    ],
    "review": {
      "intro": "Сегодня всё повторение — это и есть наш день. Но начнём с быстрой разминки по самому важному за неделю: неправильные глаголы, did-вопрос и Past Continuous.",
      "introAudio": "Сегодня всё повторение — это и есть наш день. Но начнём с быстрой разминки по самому важному за неделю: неправильные глаголы, did-вопрос и Past Continuous.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери неправильную форму прошедшего.",
          "q": "«Я увидел друга» —",
          "opts": [
            "I seed a friend",
            "I saw a friend",
            "I see a friend"
          ],
          "answer": 1,
          "explain": "see → <b>saw</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни did-вопрос.",
          "q": "Как спросить «Что ты делал вчера?»",
          "opts": [
            "What you did yesterday?",
            "What did you do yesterday?",
            "What did you did yesterday?"
          ],
          "answer": 1,
          "explain": "did + <b>базовая</b> форма: did you <b>do</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери Past Continuous (was + -ing).",
          "q": "Собери: «Я смотрел телевизор»",
          "want": "I was watching TV",
          "answer": "I was watching TV"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Повторение 1 · неправильные глаголы",
        "title": "Прошлое без правил — <em>went, had, saw, did</em>",
        "paras": [
          "Главная боль недели — неправильные глаголы. Правила нет, форму просто помнишь. Освежим самые частые: <b>go→went</b>, <b>have→had</b>, <b>see→saw</b>, <b>do→did</b>, <b>make→made</b>, <b>take→took</b>, <b>come→came</b>, <b>get→got</b>, <b>eat→ate</b>.",
          "Эта форма одна для всех лиц: <b>I went</b>, <b>he went</b>, <b>we went</b> — никакого -s, как в настоящем. Прошедшее проще: одна форма на всех.",
          "Если глагол правильный — добавляем <b>-ed</b>: work→worked, play→played, watch→watched. Неправильные же учим парами вслух."
        ],
        "audio": "Главная боль недели — неправильные глаголы. Правила нет, форму просто помнишь. go превращается в went, have в had, see в saw, do в did, make в made, take в took, come в came, get в got, eat в ate. Эта форма одна для всех лиц: I went, he went, we went, никакого -s. Если глагол правильный, добавляем -ed.",
        "table": {
          "rows": [
            [
              "go→went · have→had",
              "идти→пошёл · иметь→был"
            ],
            [
              "see→saw · do→did",
              "видеть→увидел · делать→делал"
            ],
            [
              "make→made · take→took",
              "делать→сделал · брать→взял"
            ],
            [
              "come→came · get→got",
              "приходить→пришёл · получать→получил"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Вчера я пошёл на работу.",
            "en": "Yesterday I <b>went</b> to work.",
            "gloss": "go→went",
            "say": "Yesterday I went to work."
          },
          {
            "ru": "Она сделала ошибку.",
            "en": "She <b>made</b> a mistake.",
            "gloss": "make→made",
            "say": "She made a mistake."
          },
          {
            "ru": "Мы взяли такси.",
            "en": "We <b>took</b> a taxi.",
            "gloss": "take→took",
            "say": "We took a taxi."
          },
          {
            "ru": "Он получил письмо.",
            "en": "He <b>got</b> a letter.",
            "gloss": "get→got",
            "say": "He got a letter."
          },
          {
            "ru": "Я съел сэндвич.",
            "en": "I <b>ate</b> a sandwich.",
            "gloss": "eat→ate",
            "say": "I ate a sandwich."
          }
        ],
        "mistakes": [
          {
            "wrong": "I goed home",
            "right": "I <b>went</b> home",
            "why": "go — неправильный: went, не goed"
          },
          {
            "wrong": "He gotted a letter",
            "right": "He <b>got</b> a letter",
            "why": "get → got, без -ed"
          }
        ],
        "mnemonic": "🔁 Частые глаголы — неправильные: went, had, saw, did, made, took.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму прошедшего.",
            "q": "«Мы взяли автобус» —",
            "opts": [
              "We taked a bus",
              "We took a bus",
              "We take a bus"
            ],
            "answer": 1,
            "explain": "take → <b>took</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Вчера я съел пиццу»",
            "want": "Yesterday I ate pizza",
            "answer": "Yesterday I ate pizza"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши форму прошедшего. make → ?",
            "q": "Она сделала чай.",
            "accept": [
              "she made tea"
            ],
            "placeholder": "She ... tea"
          }
        ]
      },
      {
        "eyebrow": "Повторение 2 · did",
        "title": "Вопрос и «не» в прошлом — <em>did / didn't</em>",
        "paras": [
          "Чтобы задать вопрос в прошлом, берём помощника <b>did</b> — и ставим его вперёд: <b>Did you go?</b> <b>What did you do?</b> Сам глагол при этом возвращается в БАЗОВУЮ форму.",
          "Это главная ловушка недели: «Did you <b>went</b>?» — ошибка. Прошлое уже показано словом did, поэтому глагол — простой: <b>Did you go?</b> Did + базовая форма.",
          "Отрицание — то же самое с <b>didn't</b>: <b>I didn't go.</b> <b>She didn't see it.</b> Не «didn't went», а didn't + базовая форма."
        ],
        "audio": "Чтобы задать вопрос в прошлом, берём помощника did и ставим вперёд: Did you go? What did you do? Сам глагол возвращается в базовую форму. Главная ловушка: Did you went — ошибка. Прошлое уже показано словом did, поэтому глагол простой: Did you go. Отрицание то же с didn't: I didn't go.",
        "table": {
          "rows": [
            [
              "Did you go?",
              "Ты ходил?"
            ],
            [
              "What did you do?",
              "Что ты делал?"
            ],
            [
              "I didn't go.",
              "Я не ходил."
            ],
            [
              "did/didn't + базовая форма",
              "go, see, do — без изменений"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Ты вчера работал?",
            "en": "<b>Did</b> you <b>work</b> yesterday?",
            "gloss": "did + базовая",
            "say": "Did you work yesterday?"
          },
          {
            "ru": "Что ты ел на обед?",
            "en": "What <b>did</b> you <b>eat</b> for lunch?",
            "gloss": "did + eat (не ate)",
            "say": "What did you eat for lunch?"
          },
          {
            "ru": "Я не видел его.",
            "en": "I <b>didn't see</b> him.",
            "gloss": "didn't + базовая",
            "say": "I didn't see him."
          },
          {
            "ru": "Она не пошла на работу.",
            "en": "She <b>didn't go</b> to work.",
            "gloss": "didn't + go",
            "say": "She didn't go to work."
          }
        ],
        "mistakes": [
          {
            "wrong": "Did you went home?",
            "right": "<b>Did</b> you <b>go</b> home?",
            "why": "did + базовая форма: go, не went"
          },
          {
            "wrong": "I didn't saw it",
            "right": "I <b>didn't see</b> it",
            "why": "didn't + базовая: see, не saw"
          }
        ],
        "mnemonic": "❓ Вопрос/отрицание в прошлом: did/didn't + БАЗОВАЯ форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вопрос.",
            "q": "Как спросить «Ты видел фильм?»",
            "opts": [
              "Did you saw the film?",
              "Did you see the film?",
              "You saw the film?"
            ],
            "answer": 1,
            "explain": "did + <b>базовая</b>: see."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное отрицание.",
            "q": "«Я не пошёл домой» —",
            "opts": [
              "I didn't went home",
              "I didn't go home",
              "I don't go home"
            ],
            "answer": 1,
            "explain": "didn't + <b>базовая</b>: go."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши did-вопрос.",
            "q": "Что ты делал вчера?",
            "accept": [
              "what did you do yesterday"
            ],
            "placeholder": "What did you ...?"
          }
        ]
      },
      {
        "eyebrow": "Повторение 3 · Past Continuous",
        "title": "Что происходило — <em>was / were + -ing</em>",
        "paras": [
          "Past Continuous показывает действие В ПРОЦЕССЕ в какой-то момент прошлого: <b>I was reading.</b> = Я (в тот момент) читал. Форма: <b>was/were</b> + глагол с <b>-ing</b>.",
          "<b>was</b> — для I/he/she/it, <b>were</b> — для you/we/they. <b>I was working</b>, <b>they were sleeping</b>.",
          "Этого в русском нет: у нас «я читал» — и факт, и процесс одним словом. В английском процесс — это <b>was reading</b>."
        ],
        "audio": "Past Continuous показывает действие в процессе в какой-то момент прошлого: I was reading, я в тот момент читал. Форма: was или were плюс глагол с -ing. was для I, he, she, it. were для you, we, they. I was working, they were sleeping.",
        "table": {
          "rows": [
            [
              "I / he / she / it",
              "was + -ing (I was reading)"
            ],
            [
              "you / we / they",
              "were + -ing (we were eating)"
            ],
            [
              "At 8 pm I was working.",
              "В 8 вечера я работал."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "В семь я завтракал.",
            "en": "At seven I <b>was having</b> breakfast.",
            "gloss": "was + having",
            "say": "At seven I was having breakfast."
          },
          {
            "ru": "Они смотрели телевизор.",
            "en": "They <b>were watching</b> TV.",
            "gloss": "were + watching",
            "say": "They were watching TV."
          },
          {
            "ru": "Шёл дождь.",
            "en": "It <b>was raining</b>.",
            "gloss": "was + raining",
            "say": "It was raining."
          },
          {
            "ru": "Мы ждали автобус.",
            "en": "We <b>were waiting</b> for the bus.",
            "gloss": "were + waiting",
            "say": "We were waiting for the bus."
          }
        ],
        "mistakes": [
          {
            "wrong": "I was read",
            "right": "I <b>was reading</b>",
            "why": "Past Continuous: was + -ing (reading)"
          },
          {
            "wrong": "They was sleeping",
            "right": "They <b>were</b> sleeping",
            "why": "you/we/they → were"
          }
        ],
        "mnemonic": "⏳ В процессе в прошлом: was/were + -ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму процесса.",
            "q": "«Я смотрел телевизор» (в процессе) —",
            "opts": [
              "I watched TV",
              "I was watching TV",
              "I was watch TV"
            ],
            "answer": 1,
            "explain": "процесс → was + <b>watching</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери was или were.",
            "q": "They ___ playing football.",
            "opts": [
              "was",
              "were",
              "are"
            ],
            "answer": 1,
            "explain": "they → <b>were</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери Past Continuous.",
            "q": "Собери: «Шёл дождь»",
            "want": "It was raining",
            "answer": "It was raining"
          }
        ]
      },
      {
        "eyebrow": "Повторение 4 · фон и факт",
        "title": "<em>when / while</em> и связки рассказа",
        "paras": [
          "Главный контраст недели: длинный ФОН — Past Continuous, короткий ФАКТ внутри него — Past Simple. <b>I was sleeping when the phone rang.</b> = Я спал (фон), когда зазвонил телефон (факт).",
          "<b>while</b> — для длинного фона (while I was reading), <b>when</b> — для короткого факта (when he came). Связки рассказа из дня 5: <b>then</b> (потом), <b>after</b>, <b>before</b>, <b>so</b> (поэтому), <b>because</b> (потому что).",
          "И слово <b>ago</b> (назад) — оно стоит ПОСЛЕ срока: <b>two days ago</b>, <b>a week ago</b>. Не «ago two days»."
        ],
        "audio": "Главный контраст недели: длинный фон — Past Continuous, короткий факт внутри него — Past Simple. I was sleeping when the phone rang. Я спал, фон, когда зазвонил телефон, факт. while для длинного фона, when для короткого факта. Связки: then, after, before, so, because. И слово ago, назад, стоит после срока: two days ago.",
        "table": {
          "rows": [
            [
              "I was sleeping when he called.",
              "Я спал, когда он позвонил."
            ],
            [
              "while + фон (was -ing)",
              "while I was reading"
            ],
            [
              "when + факт (Past Simple)",
              "when he came"
            ],
            [
              "two days ago",
              "два дня назад (ago — после)"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Я готовил, когда ты позвонил.",
            "en": "I <b>was cooking when</b> you <b>called</b>.",
            "gloss": "фон + факт",
            "say": "I was cooking when you called."
          },
          {
            "ru": "Пока я спал, шёл дождь.",
            "en": "<b>While</b> I <b>was sleeping</b>, it rained.",
            "gloss": "while + фон",
            "say": "While I was sleeping, it rained."
          },
          {
            "ru": "Я устал, поэтому остался дома.",
            "en": "I was tired, <b>so</b> I stayed home.",
            "gloss": "so — поэтому",
            "say": "I was tired, so I stayed home."
          },
          {
            "ru": "Я опоздал, потому что проспал.",
            "en": "I was late <b>because</b> I overslept.",
            "gloss": "because — потому что",
            "say": "I was late because I overslept."
          },
          {
            "ru": "Три дня назад я видел Тома.",
            "en": "I saw Tom three days <b>ago</b>.",
            "gloss": "ago — после срока",
            "say": "I saw Tom three days ago."
          }
        ],
        "mistakes": [
          {
            "wrong": "I was sleeping when he was calling",
            "right": "I was sleeping when he <b>called</b>",
            "why": "короткий факт → Past Simple (called), не continuous"
          },
          {
            "wrong": "ago two days",
            "right": "two days <b>ago</b>",
            "why": "ago стоит ПОСЛЕ срока"
          }
        ],
        "mnemonic": "🎬 Фон (was -ing) + факт (did) + ago после срока.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери фон + факт.",
            "q": "«Я читал, когда он вошёл» —",
            "opts": [
              "I read when he was coming",
              "I was reading when he came",
              "I was reading when he was coming"
            ],
            "answer": 1,
            "explain": "фон was reading + факт <b>came</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> поставь ago на место.",
            "q": "Как сказать «неделю назад»?",
            "opts": [
              "ago a week",
              "a week ago",
              "in a week ago"
            ],
            "answer": 1,
            "explain": "ago — ПОСЛЕ срока: a week <b>ago</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери со связкой so.",
            "q": "Собери: «Я устал, поэтому остался дома»",
            "want": "I was tired so I stayed home",
            "answer": "I was tired so I stayed home"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Итог недели в одной сценке: Том расспрашивает Аню про прошлое. Здесь всё сразу — did-вопрос, неправильные глаголы и Past Continuous.",
      "lines": [
        {
          "who": "A",
          "en": "What did you do yesterday?",
          "ru": "Что ты делала вчера?"
        },
        {
          "who": "B",
          "en": "I went to the gym, then I met Sara.",
          "ru": "Я сходила в зал, потом встретила Сару."
        },
        {
          "who": "A",
          "en": "What were you doing at nine?",
          "ru": "А что ты делала в девять?"
        },
        {
          "who": "B",
          "en": "I was watching a film when you called!",
          "ru": "Я смотрела фильм, когда ты позвонил!"
        },
        {
          "who": "A",
          "en": "Sorry! I called because I was bored.",
          "ru": "Извини! Я звонил, потому что мне было скучно."
        }
      ]
    },
    "vocab": {
      "intro": "Ключевые формы и связки недели 1 — повтори вслух, это твой набор для рассказа.",
      "items": [
        {
          "en": "went",
          "ru": "пошёл (go)",
          "ex": "I went out."
        },
        {
          "en": "did",
          "ru": "делал (do) / помощник",
          "ex": "What did you do?"
        },
        {
          "en": "didn't",
          "ru": "не (в прошлом)",
          "ex": "I didn't go."
        },
        {
          "en": "was/were",
          "ru": "был / была / были",
          "ex": "We were busy."
        },
        {
          "en": "was reading",
          "ru": "читал (в процессе)",
          "ex": "I was reading."
        },
        {
          "en": "when",
          "ru": "когда (факт)",
          "ex": "when he came"
        },
        {
          "en": "while",
          "ru": "пока (фон)",
          "ex": "while I slept"
        },
        {
          "en": "so",
          "ru": "поэтому",
          "ex": "I was tired, so I left."
        },
        {
          "en": "ago",
          "ru": "(тому) назад",
          "ex": "two days ago"
        }
      ]
    },
    "drag": {
      "intro": "Соедини форму или связку недели 1 с переводом.",
      "pairs": [
        [
          "went",
          "пошёл"
        ],
        [
          "didn't see",
          "не видел"
        ],
        [
          "was reading",
          "читал (в процессе)"
        ],
        [
          "ago",
          "(тому) назад"
        ]
      ]
    },
    "quiz": {
      "intro": "Мини-тест по всей неделе 1 — три вопроса на главное. Покажи, что прошлое теперь твоё!",
      "items": [
        {
          "q": "«Вчера я увидел друга» —",
          "opts": [
            "Yesterday I see a friend",
            "Yesterday I saw a friend",
            "Yesterday I seen a friend"
          ],
          "answer": 1,
          "explain": "see → <b>saw</b> (Past Simple)."
        },
        {
          "q": "Как спросить «Ты ходил в кино?»",
          "opts": [
            "Did you went to the cinema?",
            "Did you go to the cinema?",
            "You go to the cinema?"
          ],
          "answer": 1,
          "explain": "did + <b>базовая</b>: go."
        },
        {
          "q": "«Я спал, когда он позвонил» —",
          "opts": [
            "I slept when he was calling",
            "I was sleeping when he called",
            "I was sleeping when he was calling"
          ],
          "answer": 1,
          "explain": "фон was sleeping + факт <b>called</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай историю про целую неделю. Здесь собрано всё прошедшее недели 1.",
      "title": "A busy week",
      "sentences": [
        "Last week was very busy.",
        "On Monday I started a new project at work.",
        "I didn't have much free time.",
        "On Wednesday I met an old friend.",
        "We had coffee and talked for an hour.",
        "While we were talking, it started to rain.",
        "So we stayed in the cafe a little longer.",
        "On Friday I finished all my work.",
        "At the weekend I finally rested.",
        "It was a hard week, but a good one."
      ],
      "translation": "Прошлая неделя была очень насыщенной. В понедельник я начал новый проект на работе. У меня было мало свободного времени. В среду я встретил старого друга. Мы выпили кофе и проговорили час. Пока мы разговаривали, пошёл дождь. Поэтому мы остались в кафе чуть подольше. В пятницу я закончил всю работу. На выходных я наконец отдохнул. Это была трудная неделя, но хорошая."
    },
    "essay": {
      "intro": "Закрепим всё разом — расскажи про свою прошлую неделю!",
      "prompt": "Напиши 4–6 предложений про прошлую неделю. Используй прошедшее, did/didn't, when/while и связки then, so, because.",
      "hint": "Структуры: On Monday I… ; I didn't… ; While I was…, … ; …, so I… ; …, because…",
      "example": "Last week was busy. On Monday I went to work early. I didn't have much time. On Wednesday I met a friend, and we had dinner. At the weekend I rested because I was tired."
    },
    "picture": {
      "intro": "Опиши по картинке, что человек делал на прошлой неделе.",
      "emoji": "📅💼☕",
      "prompt": "Опиши прошлую неделю по картинке. Используй Past Simple, did-вопросы и Past Continuous.",
      "hint": "Используй: On Monday I started work; I was busy; At the weekend I rested.",
      "example": "On Monday I started a new job. I was very busy all week. At the weekend I finally rested.",
      "img": "img/a2/day-07.jpg",
      "credit": "Фото: freestocks.org · CC0 · <a href=\"https://www.flickr.com/photos/135396164@N05/28123133694\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "8": {
    "day": 8,
    "week": "02",
    "level": "A2",
    "themeRu": "Я уже это делал",
    "themeEn": "Present Perfect",
    "intro": "Вот и она — тема, ради которой стоит идти на A2. Сегодня знакомимся со временем, которого в русском просто нет: <b>Present Perfect</b>. Не пугайся, мысль за ним простая — «у меня уже есть опыт»: я что-то сделал, и сейчас важен результат, а не когда именно это было. Я проведу тебя шаг за шагом, и к концу дня оно перестанет быть загадкой.",
    "introAudio": "Вот и она — тема, ради которой стоит идти на A2. Сегодня знакомимся со временем, которого в русском просто нет: Present Perfect. Не пугайся, мысль за ним простая — «у меня уже есть опыт»: я что-то сделал, и сейчас важен результат, а не когда именно это было. Я проведу тебя шаг за шагом, и к концу дня оно перестанет быть загадкой.",
    "goals": [
      "понять идею Present Perfect: «у меня есть опыт», результат важнее времени",
      "строить фразу <b>have/has + 3-я форма</b> глагола",
      "спрашивать и отвечать про опыт: Have you ever…? — I have never…",
      "понять, почему «I have been to Italy», а не «I was in Italy»"
    ],
    "learned": [
      "Понял(а) идею Present Perfect: «у меня есть опыт», результат важнее времени",
      "Построил(а) фразу <b>have/has + 3-я форма</b> глагола",
      "Спросил(а) и ответил(а) про опыт: Have you ever…? — I have never…",
      "Понял(а), почему «I have been to Italy», а не «I was in Italy»"
    ],
    "review": {
      "intro": "Вспомним неделю 1 — прошедшее время. Это сразу пригодится: сегодня у тех же глаголов появится ещё одна, третья форма.",
      "introAudio": "Вспомним неделю 1, прошедшее время. Это сразу пригодится: сегодня у тех же глаголов появится ещё одна, третья форма.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери форму прошедшего (Past Simple).",
          "q": "«Вчера я пошёл в кино» —",
          "opts": [
            "I go to the cinema",
            "I went to the cinema",
            "I gone to the cinema"
          ],
          "answer": 1,
          "explain": "Past Simple: go → <b>went</b>. (gone — это уже сегодняшняя, 3-я форма.)"
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу в прошедшем времени.",
          "q": "Собери: «Я видел этот фильм вчера»",
          "want": "I saw this film yesterday",
          "answer": "I saw this film yesterday"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · новое время",
        "title": "«У меня есть опыт» — <em>Present Perfect</em>",
        "paras": [
          "Present Perfect отвечает на вопрос «что у тебя уже ЕСТЬ за плечами?». Ты говоришь не КОГДА, а ЧТО успел: «я (уже) видел», «я (уже) был», «я (уже) сделал». Важен результат сейчас.",
          "Форма простая: <b>have</b> (или <b>has</b> для he/she/it) + <b>3-я форма</b> глагола. У правильных глаголов 3-я форма = та же -ed (worked). У неправильных её надо знать: be → <b>been</b>, see → <b>seen</b>, do → <b>done</b>, go → <b>gone</b>.",
          "<b>I have seen</b> this film. = Я (уже) видел этот фильм. <b>She has done</b> it. = Она (уже) сделала. Коротко часто говорят: I've, he's, she's."
        ],
        "audio": "Present Perfect отвечает на вопрос: что у тебя уже есть за плечами? Не когда, а что успел. Форма: have, или has для он-она-оно, плюс третья форма глагола. be превращается в been, see в seen, do в done, go в gone. I have seen this film — я уже видел этот фильм.",
        "table": {
          "rows": [
            [
              "I / you / we / they",
              "have + 3-я форма (I have seen)"
            ],
            [
              "he / she / it",
              "has + 3-я форма (she has seen)"
            ],
            [
              "сокращённо",
              "I've · you've · he's · she's"
            ],
            [
              "be→been · see→seen",
              "do→done · go→gone"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я видел этот фильм.",
            "en": "I <b>have seen</b> this film.",
            "gloss": "have + seen",
            "say": "I have seen this film."
          },
          {
            "ru": "Она сделала задание.",
            "en": "She <b>has done</b> the task.",
            "gloss": "has + done",
            "say": "She has done the task."
          },
          {
            "ru": "Мы бывали здесь раньше.",
            "en": "We <b>have been</b> here before.",
            "gloss": "have + been",
            "say": "We have been here before."
          },
          {
            "ru": "Они уехали.",
            "en": "They <b>have gone</b>.",
            "gloss": "have + gone",
            "say": "They have gone."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have see this film",
            "right": "I have <b>seen</b> this film",
            "why": "нужна 3-я форма: see → seen"
          },
          {
            "wrong": "She have done it",
            "right": "She <b>has</b> done it",
            "why": "he/she/it → has"
          }
        ],
        "mnemonic": "🎒 Present Perfect = опыт за плечами: have/has + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму.",
            "q": "«Я (уже) видел это» —",
            "opts": [
              "I have see it",
              "I have seen it",
              "I has seen it"
            ],
            "answer": 1,
            "explain": "have + 3-я форма: <b>seen</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери have или has.",
            "q": "She ___ done her homework.",
            "opts": [
              "have",
              "has",
              "is"
            ],
            "answer": 1,
            "explain": "he/she/it → <b>has</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу Present Perfect.",
            "q": "Собери: «Мы были здесь»",
            "want": "We have been here",
            "answer": "We have been here"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · опыт в жизни",
        "title": "<em>ever</em> и <em>never</em> — спрашиваем про опыт",
        "paras": [
          "Самое частое применение Present Perfect — спросить про опыт за всю жизнь. Для вопроса добавляем <b>ever</b> (когда-либо): <b>Have you ever been to London?</b> = Ты когда-нибудь был в Лондоне?",
          "Ответ «нет, ни разу» — <b>never</b> (никогда): <b>I have never been to London.</b> Важно: одно never, второго «не» не нужно (в русском мы говорим «никогда НЕ был» — здесь второго отрицания нет).",
          "ever и never стоят перед 3-й формой: Have you <b>ever</b> seen…? — I have <b>never</b> seen…"
        ],
        "audio": "Самое частое применение Present Perfect — спросить про опыт за всю жизнь. Для вопроса добавляем ever, когда-либо: Have you ever been to London? Ответ нет, ни разу — never, никогда: I have never been to London. Одно never, второго отрицания не нужно.",
        "table": {
          "rows": [
            [
              "Have you ever…?",
              "Ты когда-нибудь…?"
            ],
            [
              "Yes, I have. / No, I haven't.",
              "Да / Нет (короткий ответ)"
            ],
            [
              "I have never…",
              "Я никогда не…"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Ты когда-нибудь ел суши?",
            "en": "<b>Have</b> you <b>ever eaten</b> sushi?",
            "gloss": "eat → eaten",
            "say": "Have you ever eaten sushi?"
          },
          {
            "ru": "Да, ел.",
            "en": "Yes, I <b>have</b>.",
            "gloss": "короткий ответ",
            "say": "Yes, I have."
          },
          {
            "ru": "Я никогда не был в Париже.",
            "en": "I have <b>never been</b> to Paris.",
            "gloss": "never + been",
            "say": "I have never been to Paris."
          },
          {
            "ru": "Она никогда не видела снег.",
            "en": "She has <b>never seen</b> snow.",
            "say": "She has never seen snow."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have never not been there",
            "right": "I have <b>never</b> been there",
            "why": "одно never — второго отрицания не нужно"
          },
          {
            "wrong": "Did you ever been to London?",
            "right": "<b>Have</b> you ever <b>been</b> to London?",
            "why": "опыт → Present Perfect (have + been), а не did"
          }
        ],
        "mnemonic": "🌍 Опыт за жизнь: Have you ever…? — I have never…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери правильный вопрос про опыт.",
            "q": "Как спросить «Ты когда-нибудь был в Италии?»",
            "opts": [
              "Did you ever be in Italy?",
              "Have you ever been to Italy?",
              "Are you ever in Italy?"
            ],
            "answer": 1,
            "explain": "опыт → <b>Have you ever been to…</b>"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> напиши предложение с never. whale = кит.",
            "q": "Я никогда не видел кита.",
            "accept": [
              "i have never seen a whale"
            ],
            "placeholder": "I have never ..."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вопрос вслух.",
            "target": "Have you ever been to London?",
            "sub": "Ты когда-нибудь был в Лондоне?",
            "want": "ever"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Почему <em>I have been</em>, а не <em>I was</em>",
        "paras": [
          "Здесь русскоязычные ошибаются чаще всего — потому что в русском такого времени нет. «Я был в Италии» — по-русски одно прошедшее. По-английски это два разных смысла.",
          "Если важен ОПЫТ (был и вернулся, это часть моей биографии, неважно когда) → <b>I have been to Italy.</b> Если важен КОНКРЕТНЫЙ момент (в 2019, прошлым летом) → <b>I was in Italy in 2019.</b>",
          "Запомни связку: <b>have been to</b> (a place) — «бывал где-то». Не «have been in». Это устойчивый оборот про опыт-поездки."
        ],
        "audio": "Здесь русскоязычные ошибаются чаще всего, потому что в русском такого времени нет. Если важен опыт, был и вернулся, неважно когда — I have been to Italy. Если важен конкретный момент, в 2019 — I was in Italy in 2019. Запомни: have been TO a place.",
        "table": {
          "rows": [
            [
              "I have been to Italy.",
              "Я (бывал) в Италии — опыт"
            ],
            [
              "I was in Italy in 2019.",
              "Я был в Италии в 2019 — момент"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я бывал в Лондоне (есть такой опыт).",
            "en": "I <b>have been to</b> London.",
            "gloss": "опыт, неважно когда",
            "say": "I have been to London."
          },
          {
            "ru": "Я был в Лондоне в мае.",
            "en": "I <b>was in</b> London in May.",
            "gloss": "конкретный момент → Past",
            "say": "I was in London in May."
          },
          {
            "ru": "Ты когда-нибудь был в Японии?",
            "en": "Have you ever <b>been to</b> Japan?",
            "say": "Have you ever been to Japan?"
          }
        ],
        "mistakes": [
          {
            "wrong": "I was in Italy (про опыт вообще)",
            "right": "I <b>have been to</b> Italy",
            "why": "если важен опыт, а не дата — Present Perfect"
          },
          {
            "wrong": "I have been in Italy",
            "right": "I have been <b>to</b> Italy",
            "why": "опыт-поездка: have been TO"
          }
        ],
        "mnemonic": "✈️ Опыт-поездка: have been TO. Конкретная дата: was / were.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> опыт вообще, без даты.",
            "q": "«Я (когда-то) бывал в Париже» —",
            "opts": [
              "I was to Paris",
              "I have been to Paris",
              "I have been in Paris"
            ],
            "answer": 1,
            "explain": "опыт → <b>have been to</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> есть конкретное «когда».",
            "q": "«Я был в Париже прошлым летом» —",
            "opts": [
              "I have been to Paris last summer",
              "I was in Paris last summer"
            ],
            "answer": 1,
            "explain": "есть «last summer» → конкретный момент → <b>Past Simple</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вопрос про опыт.",
            "q": "Собери: «Ты когда-нибудь был в Японии?»",
            "want": "Have you ever been to Japan",
            "answer": "Have you ever been to Japan"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · отрицание и ответы",
        "title": "<em>haven't / hasn't</em> и короткие ответы",
        "paras": [
          "Отрицание — добавляем not к have/has: <b>haven't</b> (have not) и <b>hasn't</b> (has not). <b>I haven't seen</b> it. = Я этого не видел. <b>She hasn't finished.</b> = Она не закончила.",
          "Короткие ответы: <b>Yes, I have. / No, I haven't.</b> — повторяем только have/has, без основного глагола (точно как с to be на A1).",
          "Вопрос строим переносом have/has вперёд: <b>Have you finished?</b> <b>Has she called?</b>"
        ],
        "audio": "Отрицание — добавляем not к have или has: haven't и hasn't. I haven't seen it — я этого не видел. Короткие ответы: Yes, I have. No, I haven't. Повторяем только have или has. Вопрос: have или has вперёд — Have you finished?",
        "table": {
          "rows": [
            [
              "Have you finished?",
              "Ты закончил?"
            ],
            [
              "Yes, I have. / No, I haven't.",
              "Да / Нет"
            ],
            [
              "She hasn't called.",
              "Она не звонила."
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я ещё не видел этот фильм.",
            "en": "I <b>haven't seen</b> this film.",
            "gloss": "have not = haven't",
            "say": "I haven't seen this film."
          },
          {
            "ru": "Он не сделал задание.",
            "en": "He <b>hasn't done</b> the task.",
            "gloss": "has not = hasn't",
            "say": "He hasn't done the task."
          },
          {
            "ru": "— Ты звонил маме? — Нет.",
            "en": "— Have you called mum? — No, I <b>haven't</b>.",
            "say": "No, I haven't."
          }
        ],
        "mistakes": [
          {
            "wrong": "I don't have seen it",
            "right": "I <b>haven't</b> seen it",
            "why": "отрицание Present Perfect — haven't, не «don't have»"
          },
          {
            "wrong": "Yes, I have seen.",
            "right": "Yes, I <b>have</b>.",
            "why": "в коротком ответе только have/has"
          }
        ],
        "mnemonic": "🚫 Не сделал → haven't / hasn't + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери отрицание Present Perfect.",
            "q": "«Она не закончила» —",
            "opts": [
              "She doesn't finished",
              "She hasn't finished",
              "She isn't finished"
            ],
            "answer": 1,
            "explain": "Present Perfect отрицание: <b>hasn't</b> + 3-я форма."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> напиши отрицание. see → seen.",
            "q": "Я не видел его сегодня.",
            "accept": [
              "i haven't seen him today",
              "i have not seen him today"
            ],
            "placeholder": "I haven't ..."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери короткий ответ.",
            "q": "— Have you eaten? — ___",
            "opts": [
              "No, I don't.",
              "No, I haven't.",
              "No, I amn't."
            ],
            "answer": 1,
            "explain": "короткий ответ повторяет have: <b>No, I haven't.</b>"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Том и Аня говорят про опыт — кто где бывал. Слушай Present Perfect в действии.",
      "lines": [
        {
          "who": "A",
          "en": "Have you ever been to Spain?",
          "ru": "Ты когда-нибудь был в Испании?"
        },
        {
          "who": "B",
          "en": "Yes, I have! I've been to Madrid.",
          "ru": "Да! Я бывал в Мадриде."
        },
        {
          "who": "A",
          "en": "Lucky you. I have never been to Spain.",
          "ru": "Везёт. А я никогда не был в Испании."
        },
        {
          "who": "B",
          "en": "Have you eaten paella?",
          "ru": "А паэлью ел?"
        },
        {
          "who": "A",
          "en": "No, I haven't. But I want to try it!",
          "ru": "Нет. Но хочу попробовать!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова и формы дня — третьи формы частых глаголов плюс слова опыта. Повтори вслух.",
      "items": [
        {
          "en": "been",
          "ru": "был / бывал (be, 3-я форма)",
          "ex": "I have been to Rome."
        },
        {
          "en": "seen",
          "ru": "видел (see, 3-я форма)",
          "ex": "I have seen it."
        },
        {
          "en": "done",
          "ru": "сделал (do, 3-я форма)",
          "ex": "She has done it."
        },
        {
          "en": "gone",
          "ru": "ушёл / уехал (go, 3-я форма)",
          "ex": "They have gone."
        },
        {
          "en": "eaten",
          "ru": "съел (eat, 3-я форма)",
          "ex": "Have you eaten?"
        },
        {
          "en": "had",
          "ru": "имел / был (have, 3-я форма)",
          "ex": "I have had lunch."
        },
        {
          "en": "ever",
          "ru": "когда-либо",
          "ex": "Have you ever tried it?"
        },
        {
          "en": "never",
          "ru": "никогда (не)",
          "ex": "I have never been there."
        },
        {
          "en": "before",
          "ru": "раньше, прежде",
          "ex": "I have seen it before."
        }
      ]
    },
    "drag": {
      "intro": "Соедини 3-ю форму (для Present Perfect) с переводом.",
      "pairs": [
        [
          "been",
          "был / бывал"
        ],
        [
          "seen",
          "видел"
        ],
        [
          "done",
          "сделал"
        ],
        [
          "gone",
          "ушёл / уехал"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по самому важному дню A2. Три вопроса — и Present Perfect твой!",
      "items": [
        {
          "q": "Как сказать «Я (уже) видел этот фильм»?",
          "opts": [
            "I have see this film",
            "I have seen this film",
            "I am seen this film"
          ],
          "answer": 1,
          "explain": "have + 3-я форма: <b>seen</b>."
        },
        {
          "q": "«Я (вообще) бывал в Италии» —",
          "opts": [
            "I was in Italy",
            "I have been to Italy",
            "I have been in Italy"
          ],
          "answer": 1,
          "explain": "опыт → <b>have been to</b>."
        },
        {
          "q": "Короткий ответ: «— Have you finished? — …»",
          "opts": [
            "No, I don't.",
            "No, I haven't.",
            "No, I'm not."
          ],
          "answer": 1,
          "explain": "повторяем have: <b>No, I haven't.</b>"
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек рассказывает, что он повидал в жизни. Везде Present Perfect.",
      "title": "Things I have done",
      "sentences": [
        "I have travelled a lot.",
        "I have been to ten countries.",
        "I have seen the sea in Italy.",
        "I have eaten strange food.",
        "I have never been to Asia.",
        "I have made many friends.",
        "I have learned two languages.",
        "But I have never learned to swim!"
      ],
      "translation": "Я много путешествовал. Я был в десяти странах. Я видел море в Италии. Я ел странную еду. Я никогда не был в Азии. Я завёл много друзей. Я выучил два языка. Но я так и не научился плавать!"
    },
    "essay": {
      "intro": "Расскажи о СВОЁМ опыте — что ты успел(а) повидать и сделать в жизни.",
      "prompt": "Напиши 3–5 предложений про свой опыт. Используй Present Perfect: I have been to…, I have seen…, I have never…",
      "hint": "Структуры: I have been to… ; I have seen… ; I have eaten… ; I have never… (he/she → has).",
      "example": "I have been to three countries. I have seen the mountains. I have eaten Italian food. But I have never been to the sea."
    },
    "picture": {
      "intro": "Опиши опыт человека по картинке — где он бывал, что видел.",
      "emoji": "🌍✈️🗺️",
      "prompt": "Опиши, что человек уже сделал в жизни. Используй I have been to / I have seen.",
      "hint": "Используй: I have been to many places; I have seen the sea.",
      "example": "I have been to many places. I have seen the sea. I have never been to Asia.",
      "img": "img/a2/day-08.jpg",
      "credit": "Фото: GlacierNPS · Public Domain · <a href=\"https://www.flickr.com/photos/43288043@N04/4500346570\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "9": {
    "day": 9,
    "week": "02",
    "level": "A2",
    "themeRu": "Был и уехал",
    "themeEn": "been vs gone",
    "intro": "С <b>Present Perfect</b> — «have/has + 3-я форма» — ты уже знаком(а). Сегодня возьмём два слова, на которых спотыкаются почти все русскоязычные: <b>been</b> и <b>gone</b>. Оба про «ходил/уехал», но смысл у них разный. <b>I have been to the shop</b> — я был в магазине и уже вернулся. <b>He has gone to the shop</b> — он ушёл в магазин и всё ещё там. Одна форма — а за ней целая разница в жизни. Разберёмся.",
    "introAudio": "С Present Perfect — have или has плюс третья форма — ты уже знаком. Сегодня возьмём два слова, на которых спотыкаются почти все русскоязычные: been и gone. Оба про «ходил или уехал», но смысл у них разный. I have been to the shop — я был в магазине и уже вернулся. He has gone to the shop — он ушёл в магазин и всё ещё там. Одна форма — а за ней целая разница в жизни. Разберёмся.",
    "goals": [
      "понять разницу been (был и вернулся) и gone (уехал и ещё там)",
      "правильно выбирать has been или has gone по ситуации",
      "собрать банк третьих форм: been, gone, done, made, written, taken",
      "к концу дня отвечать на вопрос Where have you been?"
    ],
    "learned": [
      "Понял(а) разницу been (был и вернулся) и gone (уехал и ещё там)",
      "Научился(лась) правильно выбирать has been или has gone по ситуации",
      "Собрал(а) банк третьих форм: been, gone, done, made, written, taken",
      "К концу дня ответил(а) на вопрос Where have you been?"
    ],
    "review": {
      "intro": "Вчерашний Present Perfect нам сегодня нужен целиком. Быстро вспомним форму have/has + 3-я форма.",
      "introAudio": "Вчерашний Present Perfect нам сегодня нужен целиком. Быстро вспомним форму: have или has плюс третья форма.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери верную форму Present Perfect.",
          "q": "«Я (уже) видел это» —",
          "opts": [
            "I have see it",
            "I have seen it",
            "I has seen it"
          ],
          "answer": 1,
          "explain": "have + 3-я форма: <b>seen</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери Present Perfect с has.",
          "q": "Собери: «Она сделала задание»",
          "want": "She has done the task",
          "answer": "She has done the task"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · русская ловушка",
        "title": "<em>been</em> — вернулся, <em>gone</em> — ещё там",
        "paras": [
          "Оба — третьи формы: <b>be → been</b>, <b>go → gone</b>. Но они рассказывают разные истории. <b>been</b> — «был и УЖЕ ВЕРНУЛСЯ». <b>gone</b> — «ушёл/уехал и ВСЁ ЕЩЁ ТАМ».",
          "<b>I have been to the shop.</b> = Я ходил в магазин (и вот я снова дома, с покупками). <b>He has gone to the shop.</b> = Он ушёл в магазин (его сейчас нет, он там).",
          "По-русски и то, и другое — «ходил/пошёл», поэтому мы путаем. Подсказка: если человек уже здесь — <b>been</b>; если его нет, он уехал — <b>gone</b>."
        ],
        "audio": "Оба — третьи формы: be превращается в been, go в gone. Но истории разные. been — был и уже вернулся. gone — ушёл или уехал и всё ещё там. I have been to the shop — я ходил в магазин и снова дома. He has gone to the shop — он ушёл в магазин, его сейчас нет. Подсказка: человек уже здесь — been, его нет, уехал — gone.",
        "table": {
          "rows": [
            [
              "I have been to the shop.",
              "Ходил и вернулся (я здесь)"
            ],
            [
              "He has gone to the shop.",
              "Ушёл и ещё там (его нет)"
            ],
            [
              "been = вернулся",
              "gone = ещё там"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Я был в банке (уже вернулся).",
            "en": "I <b>have been</b> to the bank.",
            "gloss": "been — вернулся",
            "say": "I have been to the bank."
          },
          {
            "ru": "Мама ушла на работу (её нет).",
            "en": "Mum <b>has gone</b> to work.",
            "gloss": "gone — ещё там",
            "say": "Mum has gone to work."
          },
          {
            "ru": "Мы были в Париже (опыт, мы дома).",
            "en": "We <b>have been</b> to Paris.",
            "gloss": "been — опыт",
            "say": "We have been to Paris."
          },
          {
            "ru": "Они уехали в отпуск (их нет).",
            "en": "They <b>have gone</b> on holiday.",
            "gloss": "gone — ещё там",
            "say": "They have gone on holiday."
          }
        ],
        "mistakes": [
          {
            "wrong": "He has been to the shop (а его нет дома)",
            "right": "He has <b>gone</b> to the shop",
            "why": "его сейчас нет → gone (ещё там)"
          },
          {
            "wrong": "I have gone to Italy (рассказываю про опыт)",
            "right": "I have <b>been</b> to Italy",
            "why": "я уже дома, это опыт → been"
          }
        ],
        "mnemonic": "🏠 been — дома (вернулся). ✈️ gone — в пути (ещё там).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> его сейчас нет дома.",
            "q": "Он ушёл в магазин, его нет: «He has ___ to the shop»",
            "opts": [
              "been",
              "gone",
              "go"
            ],
            "answer": 1,
            "explain": "его нет, он там → <b>gone</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> ты уже вернулся.",
            "q": "Я вернулся из банка: «I have ___ to the bank»",
            "opts": [
              "been",
              "gone",
              "went"
            ],
            "answer": 0,
            "explain": "я уже здесь → <b>been</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> их сейчас нет — собери с gone.",
            "q": "Собери: «Они уехали в отпуск»",
            "want": "They have gone on holiday",
            "answer": "They have gone on holiday"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · gone",
        "title": "<em>has gone</em> — человека сейчас нет",
        "paras": [
          "<b>gone</b> используем, когда человек ушёл/уехал и ЕГО ЗДЕСЬ НЕТ. Часто так объясняют, почему кого-то не видно: <b>She has gone home.</b> = Она ушла домой (её нет). <b>They have gone to bed.</b> = Они легли спать.",
          "Коротко: <b>he's gone</b>, <b>she's gone</b>, <b>they've gone</b>. Помни — <b>he's gone</b> = he HAS gone (а не he is).",
          "С местом — предлог <b>to</b>: <b>gone to work</b>, <b>gone to school</b>, <b>gone to the shops</b>. С «домой» — без to: <b>gone home</b>."
        ],
        "audio": "gone используем, когда человек ушёл или уехал и его здесь нет. Так часто объясняют, почему кого-то не видно: She has gone home — она ушла домой, её нет. They have gone to bed — они легли спать. Коротко: he's gone, she's gone, they've gone. С местом предлог to: gone to work. С домой без to: gone home.",
        "table": {
          "rows": [
            [
              "He has gone to work.",
              "Он ушёл на работу (его нет)"
            ],
            [
              "She's gone home.",
              "Она ушла домой"
            ],
            [
              "They've gone to bed.",
              "Они легли спать"
            ],
            [
              "gone home (без to)",
              "gone TO work (с to)"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Папа ушёл на работу.",
            "en": "Dad <b>has gone</b> to work.",
            "gloss": "gone to work",
            "say": "Dad has gone to work."
          },
          {
            "ru": "Анны нет — она ушла домой.",
            "en": "Anna isn't here — she <b>has gone</b> home.",
            "gloss": "gone home (без to)",
            "say": "Anna has gone home."
          },
          {
            "ru": "Дети легли спать.",
            "en": "The kids <b>have gone</b> to bed.",
            "gloss": "gone to bed",
            "say": "The kids have gone to bed."
          },
          {
            "ru": "Он уехал в Лондон (его нет).",
            "en": "He <b>has gone</b> to London.",
            "gloss": "gone to + место",
            "say": "He has gone to London."
          }
        ],
        "mistakes": [
          {
            "wrong": "She has gone to home",
            "right": "She has gone <b>home</b>",
            "why": "с home предлог to не нужен"
          },
          {
            "wrong": "He is gone to work",
            "right": "He's gone (he <b>has</b> gone)",
            "why": "he's gone = he HAS gone, не he is"
          }
        ],
        "mnemonic": "🚪 gone — человека нет: he's gone, she's gone, they've gone.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вариант про «домой».",
            "q": "«Она ушла домой» —",
            "opts": [
              "She has gone to home",
              "She has gone home",
              "She has been home"
            ],
            "answer": 1,
            "explain": "gone <b>home</b> — без to, её сейчас нет."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> их сейчас нет (они в кровати).",
            "q": "Дети спят: «They have ___ to bed»",
            "opts": [
              "been",
              "gone",
              "go"
            ],
            "answer": 1,
            "explain": "их нет (они в кровати) → <b>gone</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши фразу с gone to.",
            "q": "Папа ушёл на работу.",
            "accept": [
              "dad has gone to work"
            ],
            "placeholder": "Dad has gone ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · been",
        "title": "<em>have been</em> — был и вернулся",
        "paras": [
          "<b>been</b> — про опыт и про «уже вернулся». Самый частый вопрос: <b>Where have you been?</b> = Где ты был? (тебя не было, а теперь ты здесь).",
          "Ответ — тоже с <b>been</b>: <b>I have been to the doctor.</b> = Я был у врача (и вернулся). С местом снова предлог <b>to</b>: <b>been to London</b>, <b>been to the gym</b>.",
          "И опыт за всю жизнь — тоже <b>been</b>: <b>Have you ever been to Japan?</b> Помни связку из дня 8: <b>have been TO a place</b>, не «been in»."
        ],
        "audio": "been — про опыт и про уже вернулся. Самый частый вопрос: Where have you been? Где ты был? Тебя не было, а теперь ты здесь. Ответ тоже с been: I have been to the doctor, я был у врача и вернулся. С местом предлог to: been to London. Опыт за жизнь тоже been: Have you ever been to Japan? Помни: have been TO a place.",
        "table": {
          "rows": [
            [
              "Where have you been?",
              "Где ты был? (а теперь здесь)"
            ],
            [
              "I have been to the gym.",
              "Я был в зале (и вернулся)"
            ],
            [
              "Have you ever been to Japan?",
              "Ты бывал в Японии? (опыт)"
            ],
            [
              "been TO (a place)",
              "не «been in»"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Где ты был?",
            "en": "<b>Where have you been?</b>",
            "gloss": "ты вернулся",
            "say": "Where have you been?"
          },
          {
            "ru": "Я был в спортзале.",
            "en": "I <b>have been to</b> the gym.",
            "gloss": "been to + место",
            "say": "I have been to the gym."
          },
          {
            "ru": "Она была у врача (и вернулась).",
            "en": "She <b>has been to</b> the doctor.",
            "gloss": "been to",
            "say": "She has been to the doctor."
          },
          {
            "ru": "Ты когда-нибудь был в Лондоне?",
            "en": "Have you ever <b>been to</b> London?",
            "gloss": "опыт → been",
            "say": "Have you ever been to London?"
          }
        ],
        "mistakes": [
          {
            "wrong": "Where have you gone? (а ты уже тут)",
            "right": "Where have you <b>been</b>?",
            "why": "ты уже вернулся → been"
          },
          {
            "wrong": "I have been in the gym",
            "right": "I have been <b>to</b> the gym",
            "why": "поездка/визит: been TO"
          }
        ],
        "mnemonic": "↩️ been — был и вернулся: Where have you been? — I've been to…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> человек уже вернулся.",
            "q": "Друг вернулся, ты спрашиваешь: «Where have you ___?»",
            "opts": [
              "gone",
              "been",
              "go"
            ],
            "answer": 1,
            "explain": "он уже здесь → <b>been</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери с been to.",
            "q": "Собери: «Я был в зале»",
            "want": "I have been to the gym",
            "answer": "I have been to the gym"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вопрос вслух.",
            "target": "Where have you been?",
            "sub": "Где ты был?",
            "want": "been"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · третьи формы",
        "title": "Банк 3-х форм: <em>done, made, written, taken</em>",
        "paras": [
          "Present Perfect живёт на третьих формах. Соберём банк самых частых неправильных: <b>be→been</b>, <b>go→gone</b>, <b>do→done</b>, <b>make→made</b>, <b>write→written</b>, <b>take→taken</b>.",
          "Заметь две группы. Иногда 2-я и 3-я форма совпадают: <b>make→made→made</b>, <b>have→had→had</b>. А иногда 3-я форма особая, часто на <b>-en</b>: <b>write→wrote→written</b>, <b>take→took→taken</b>, <b>eat→ate→eaten</b>, <b>see→saw→seen</b>.",
          "Учи тройками вслух: <b>do–did–done</b>, <b>take–took–taken</b>, <b>write–wrote–written</b>. Третья форма — та, что идёт после have/has."
        ],
        "audio": "Present Perfect живёт на третьих формах. Соберём банк: be превращается в been, go в gone, do в done, make в made, write в written, take в taken. Иногда вторая и третья формы совпадают: make, made, made. А иногда третья особая, часто на -en: write, wrote, written. take, took, taken. eat, ate, eaten. Учи тройками вслух.",
        "table": {
          "rows": [
            [
              "do → did → done",
              "делать → сделал"
            ],
            [
              "make → made → made",
              "делать → сделал"
            ],
            [
              "write → wrote → written",
              "писать → написал"
            ],
            [
              "take → took → taken",
              "брать → взял"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я сделал свою работу.",
            "en": "I have <b>done</b> my work.",
            "gloss": "do → done",
            "say": "I have done my work."
          },
          {
            "ru": "Она написала письмо.",
            "en": "She has <b>written</b> a letter.",
            "gloss": "write → written",
            "say": "She has written a letter."
          },
          {
            "ru": "Я сделал много фото.",
            "en": "I have <b>taken</b> many photos.",
            "gloss": "take → taken",
            "say": "I have taken many photos."
          },
          {
            "ru": "Мы приготовили ужин.",
            "en": "We have <b>made</b> dinner.",
            "gloss": "make → made",
            "say": "We have made dinner."
          },
          {
            "ru": "Ты съел весь торт!",
            "en": "You have <b>eaten</b> all the cake!",
            "gloss": "eat → eaten",
            "say": "You have eaten all the cake!"
          }
        ],
        "mistakes": [
          {
            "wrong": "I have wrote a letter",
            "right": "I have <b>written</b> a letter",
            "why": "3-я форма: write → written (не wrote)"
          },
          {
            "wrong": "I have took a photo",
            "right": "I have <b>taken</b> a photo",
            "why": "3-я форма: take → taken (не took)"
          }
        ],
        "mnemonic": "📚 Учи тройками: do–did–done, take–took–taken, write–wrote–written.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери 3-ю форму глагола write.",
            "q": "«Я написал письмо» —",
            "opts": [
              "I have wrote a letter",
              "I have written a letter",
              "I have write a letter"
            ],
            "answer": 1,
            "explain": "3-я форма: <b>written</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери 3-ю форму глагола take.",
            "q": "«Я сделал фото» —",
            "opts": [
              "I have took a photo",
              "I have taken a photo",
              "I have take a photo"
            ],
            "answer": 1,
            "explain": "take → <b>taken</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши с 3-й формой do. done = сделал.",
            "q": "Я сделал свою работу.",
            "accept": [
              "i have done my work",
              "i've done my work"
            ],
            "placeholder": "I have done ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня приходит домой, а там никого. Том объясняет, кто куда. Слушай been и gone в жизни.",
      "lines": [
        {
          "who": "A",
          "en": "Hi! Where is everyone?",
          "ru": "Привет! А где все?"
        },
        {
          "who": "B",
          "en": "Mum has gone to the shop. Dad has gone to work.",
          "ru": "Мама ушла в магазин. Папа ушёл на работу."
        },
        {
          "who": "A",
          "en": "And where have YOU been?",
          "ru": "А ты где был?"
        },
        {
          "who": "B",
          "en": "I have been to the gym. I'm back now.",
          "ru": "Я был в спортзале. Уже вернулся."
        },
        {
          "who": "A",
          "en": "Great. The kids have gone to bed already.",
          "ru": "Отлично. А дети уже легли спать."
        }
      ]
    },
    "vocab": {
      "intro": "Слова и формы дня — третьи формы плюс фразы с been и gone. Повтори вслух.",
      "items": [
        {
          "en": "been",
          "ru": "был и вернулся (be, 3-я форма)",
          "ex": "I have been to the bank."
        },
        {
          "en": "gone",
          "ru": "ушёл / уехал и ещё там (go, 3-я форма)",
          "ex": "She has gone home."
        },
        {
          "en": "done",
          "ru": "сделал (do, 3-я форма)",
          "ex": "I have done it."
        },
        {
          "en": "made",
          "ru": "сделал (make, 3-я форма)",
          "ex": "We have made tea."
        },
        {
          "en": "written",
          "ru": "написал (write, 3-я форма)",
          "ex": "He has written a book."
        },
        {
          "en": "taken",
          "ru": "взял / сделал [фото] (take, 3-я форма)",
          "ex": "I have taken a photo."
        },
        {
          "en": "eaten",
          "ru": "съел (eat, 3-я форма)",
          "ex": "She has eaten lunch."
        },
        {
          "en": "Where have you been?",
          "ru": "Где ты был?",
          "ex": "Where have you been all day?"
        },
        {
          "en": "gone home",
          "ru": "ушёл домой",
          "ex": "He has gone home."
        }
      ]
    },
    "drag": {
      "intro": "Соедини 3-ю форму с переводом — следи за been и gone.",
      "pairs": [
        [
          "been",
          "был и вернулся"
        ],
        [
          "gone",
          "уехал и ещё там"
        ],
        [
          "written",
          "написал"
        ],
        [
          "taken",
          "взял"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса на been, gone и третьи формы. Поехали!",
      "items": [
        {
          "q": "Он ушёл в магазин, его нет: «He has ___ to the shop»",
          "opts": [
            "been",
            "gone",
            "go"
          ],
          "answer": 1,
          "explain": "его нет, он там → <b>gone</b>."
        },
        {
          "q": "Ты вернулся, друг спрашивает: «Where have you ___?»",
          "opts": [
            "gone",
            "been",
            "go"
          ],
          "answer": 1,
          "explain": "ты уже здесь → <b>been</b>."
        },
        {
          "q": "«Я написал письмо» —",
          "opts": [
            "I have wrote a letter",
            "I have written a letter",
            "I have write a letter"
          ],
          "answer": 1,
          "explain": "3-я форма: <b>written</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек пришёл в пустой дом. Лови been и gone.",
      "title": "An empty house",
      "sentences": [
        "I came home, but the house was empty.",
        "Where has everyone gone?",
        "Mum has gone to the shops.",
        "Dad has gone to work.",
        "My sister has gone to her friend's house.",
        "Only the dog is still here.",
        "I have been to the gym, so I am tired.",
        "I have made some tea.",
        "I have written a note for Mum.",
        "Now I am waiting for everyone to come back."
      ],
      "translation": "Я пришёл домой, но дом был пуст. Куда все ушли? Мама ушла в магазин. Папа ушёл на работу. Сестра ушла к подруге. Только собака ещё здесь. Я был в спортзале, поэтому устал. Я заварил чай. Я написал записку для мамы. Теперь жду, когда все вернутся."
    },
    "essay": {
      "intro": "Расскажи, кто куда — используй been и gone.",
      "prompt": "Напиши 4–5 предложений: где ты был (been) и кто куда ушёл (gone). Используй Present Perfect.",
      "hint": "Структуры: I have been to… ; Mum has gone to… ; They have gone… ; Where have you been?",
      "example": "I have been to the gym. My mum has gone to the shop. My friends have gone home. But I am back now. Where have you been today?"
    },
    "picture": {
      "intro": "Опиши по картинке, кто куда ушёл и кто уже вернулся.",
      "emoji": "🏠🛒🏃",
      "prompt": "Опиши по картинке: используй has gone (ушёл и там) и have been (был и вернулся).",
      "hint": "Используй: Mum has gone to the shop; I have been to the gym.",
      "example": "Mum has gone to the shop. Dad has gone to work. I have been to the gym, and now I am home.",
      "img": "img/a2/day-09.jpg",
      "credit": "Фото: moonjazz · Public Domain · <a href=\"https://www.flickr.com/photos/8398907@N02/14763206447\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "10": {
    "day": 10,
    "week": "02",
    "level": "A2",
    "themeRu": "Только что",
    "themeEn": "just, already, yet",
    "intro": "Ты только что доел(а), уже сделал(а) дело, ещё не закончил(а) — эти оттенки в английском несут три коротких слова: <b>just</b> (только что), <b>already</b> (уже) и <b>yet</b> (ещё / уже). С ними фраза оживает: <b>I've just eaten</b>, <b>I've already done it</b>, <b>Have you finished yet?</b>. Present Perfect, been и gone у тебя уже есть — сегодня добавляем эти слова. Главное здесь — их место в предложении; покажу точно, где стоит каждое.",
    "introAudio": "Ты только что доел, уже сделал дело, ещё не закончил — эти оттенки в английском несут три коротких слова: just, только что, already, уже, и yet, ещё или уже. С ними фраза оживает: I've just eaten, I've already done it, Have you finished yet? Present Perfect, been и gone у тебя уже есть — сегодня добавляем эти слова. Главное здесь — их место в предложении; покажу точно, где стоит каждое.",
    "goals": [
      "ставить just и already в СЕРЕДИНУ: have just/already done",
      "ставить yet в КОНЕЦ и только в вопросах и отрицаниях",
      "понять разницу already (утверждение) и yet (вопрос/отрицание)",
      "к концу дня говорить I've just…, I've already…, … yet?"
    ],
    "learned": [
      "Поставил(а) just и already в СЕРЕДИНУ: have just/already done",
      "Поставил(а) yet в КОНЕЦ и только в вопросах и отрицаниях",
      "Понял(а) разницу already (утверждение) и yet (вопрос/отрицание)",
      "К концу дня сказал(а) I've just…, I've already…, … yet?"
    ],
    "review": {
      "intro": "Вчерашние been и gone сегодня вернутся внутри новых фраз. Быстрая разминка: вспомним, кто вернулся, а кто ещё там.",
      "introAudio": "Вчерашние been и gone сегодня вернутся внутри новых фраз. Быстрая разминка: вспомним, кто вернулся, а кто ещё там.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> его сейчас нет.",
          "q": "Он ушёл, его нет: «He has ___ to work»",
          "opts": [
            "been",
            "gone",
            "go"
          ],
          "answer": 1,
          "explain": "его нет → <b>gone</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> ты уже вернулся.",
          "q": "Ты вернулся: «I have ___ to the shop»",
          "opts": [
            "gone",
            "been",
            "went"
          ],
          "answer": 1,
          "explain": "ты уже здесь → <b>been</b>."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · just",
        "title": "<em>just</em> — «только что», в середине",
        "paras": [
          "<b>just</b> значит «только что», «прямо сейчас сделал». Ставим его в СЕРЕДИНУ — между <b>have/has</b> и 3-й формой: <b>I have just eaten.</b> = Я только что поел.",
          "Схема железная: <b>have/has + just + 3-я форма</b>. <b>She has just left.</b> = Она только что ушла. <b>We've just arrived.</b> = Мы только что приехали.",
          "По-русски «только что» мы ставим в начало или конец. В английском <b>just</b> прячется внутрь, сразу после have/has. Не «just I have eaten», а <b>I have just eaten</b>."
        ],
        "audio": "just значит только что, прямо сейчас сделал. Ставим его в середину, между have или has и третьей формой: I have just eaten — я только что поел. Схема: have или has, плюс just, плюс третья форма. She has just left — она только что ушла. В английском just прячется внутрь, сразу после have или has.",
        "table": {
          "rows": [
            [
              "I have just eaten.",
              "Я только что поел."
            ],
            [
              "She has just left.",
              "Она только что ушла."
            ],
            [
              "We've just arrived.",
              "Мы только что приехали."
            ],
            [
              "have/has + just + 3-я форма",
              "just — в середине"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Я только что поел.",
            "en": "I have <b>just eaten</b>.",
            "gloss": "just в середине",
            "say": "I have just eaten."
          },
          {
            "ru": "Он только что ушёл.",
            "en": "He has <b>just left</b>.",
            "gloss": "has just left",
            "say": "He has just left."
          },
          {
            "ru": "Мы только что приехали.",
            "en": "We have <b>just arrived</b>.",
            "gloss": "just arrived",
            "say": "We have just arrived."
          },
          {
            "ru": "Она только что позвонила.",
            "en": "She has <b>just called</b>.",
            "gloss": "just called",
            "say": "She has just called."
          }
        ],
        "mistakes": [
          {
            "wrong": "Just I have eaten",
            "right": "I have <b>just</b> eaten",
            "why": "just — в середину, после have/has"
          },
          {
            "wrong": "I have eaten just",
            "right": "I have <b>just</b> eaten",
            "why": "just не в конце, а перед 3-й формой"
          }
        ],
        "mnemonic": "⏱️ just — только что, в середине: have just done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> поставь just на верное место.",
            "q": "«Я только что поел» —",
            "opts": [
              "Just I have eaten",
              "I have just eaten",
              "I have eaten just"
            ],
            "answer": 1,
            "explain": "just — в середине: have <b>just</b> eaten."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери с just в середине.",
            "q": "Собери: «Она только что ушла»",
            "want": "She has just left",
            "answer": "She has just left"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши с just. arrive = приезжать.",
            "q": "Мы только что приехали.",
            "accept": [
              "we have just arrived",
              "we've just arrived"
            ],
            "placeholder": "We have just ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · already",
        "title": "<em>already</em> — «уже», тоже в середине",
        "paras": [
          "<b>already</b> значит «уже» — раньше, чем ждали. Место то же, что и у just — в СЕРЕДИНЕ: <b>have/has + already + 3-я форма</b>. <b>I have already done it.</b> = Я уже это сделал.",
          "Используем в утверждениях, часто с лёгким удивлением: <b>She has already finished!</b> = Она уже закончила! <b>They have already left.</b> = Они уже ушли.",
          "Запомни: <b>already</b> — для «уже» в утвердительных фразах. Для вопроса и отрицания «уже/ещё» будет другое слово — <b>yet</b> (следующее правило)."
        ],
        "audio": "already значит уже, раньше, чем ждали. Место то же, что у just — в середине: have или has, плюс already, плюс третья форма. I have already done it — я уже это сделал. She has already finished — она уже закончила, часто с лёгким удивлением. already — для уже в утвердительных фразах.",
        "table": {
          "rows": [
            [
              "I have already done it.",
              "Я уже это сделал."
            ],
            [
              "She has already finished.",
              "Она уже закончила."
            ],
            [
              "They've already left.",
              "Они уже ушли."
            ],
            [
              "have/has + already + 3-я форма",
              "already — в середине"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Я уже это сделал.",
            "en": "I have <b>already done</b> it.",
            "gloss": "already в середине",
            "say": "I have already done it."
          },
          {
            "ru": "Она уже закончила.",
            "en": "She has <b>already finished</b>.",
            "gloss": "already finished",
            "say": "She has already finished."
          },
          {
            "ru": "Они уже ушли.",
            "en": "They have <b>already left</b>.",
            "gloss": "already left",
            "say": "They have already left."
          },
          {
            "ru": "Я уже видел этот фильм.",
            "en": "I have <b>already seen</b> this film.",
            "gloss": "already seen",
            "say": "I have already seen this film."
          }
        ],
        "mistakes": [
          {
            "wrong": "Already I have finished",
            "right": "I have <b>already</b> finished",
            "why": "already — в середину, после have/has"
          },
          {
            "wrong": "I have finished yet (утверждение)",
            "right": "I have <b>already</b> finished",
            "why": "в утверждении — already, не yet"
          }
        ],
        "mnemonic": "✅ already — уже (утверждение), в середине: have already done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> поставь already на место.",
            "q": "«Я уже это сделал» —",
            "opts": [
              "Already I have done it",
              "I have already done it",
              "I have done it already"
            ],
            "answer": 1,
            "explain": "already — в середине: have <b>already</b> done."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери с already в середине.",
            "q": "Собери: «Они уже ушли»",
            "want": "They have already left",
            "answer": "They have already left"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный порядок.",
            "q": "She ___ finished the book.",
            "opts": [
              "has already",
              "already has",
              "has yet"
            ],
            "answer": 0,
            "explain": "have/has + <b>already</b> + 3-я форма."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · yet",
        "title": "<em>yet</em> — в КОНЦЕ, вопрос и отрицание",
        "paras": [
          "<b>yet</b> значит «уже?» в вопросе и «ещё (не)» в отрицании. Два отличия от just/already: <b>yet</b> стоит в КОНЦЕ и живёт только в вопросах и отрицаниях.",
          "Вопрос: <b>Have you finished yet?</b> = Ты уже закончил? Отрицание: <b>I haven't finished yet.</b> = Я ещё не закончил. Видишь — <b>yet</b> в самом конце.",
          "В утверждении <b>yet</b> не используем — там работает <b>already</b>. «Я уже сделал» (утверждение) = I've <b>already</b> done it. «Ты уже сделал?» (вопрос) = Have you done it <b>yet</b>?"
        ],
        "audio": "yet значит уже в вопросе и ещё не в отрицании. Два отличия от just и already: yet стоит в конце и только в вопросах и отрицаниях. Вопрос: Have you finished yet? Ты уже закончил? Отрицание: I haven't finished yet. Я ещё не закончил. В утверждении yet не используем — там работает already.",
        "table": {
          "rows": [
            [
              "Have you finished yet?",
              "Ты уже закончил?"
            ],
            [
              "I haven't finished yet.",
              "Я ещё не закончил."
            ],
            [
              "yet — в конце",
              "только вопрос / отрицание"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Ты уже поел?",
            "en": "Have you <b>eaten yet</b>?",
            "gloss": "yet в конце (вопрос)",
            "say": "Have you eaten yet?"
          },
          {
            "ru": "Я ещё не закончил.",
            "en": "I <b>haven't finished yet</b>.",
            "gloss": "yet в конце (отрицание)",
            "say": "I haven't finished yet."
          },
          {
            "ru": "Он ещё не пришёл.",
            "en": "He <b>hasn't arrived yet</b>.",
            "gloss": "hasn't … yet",
            "say": "He hasn't arrived yet."
          },
          {
            "ru": "Автобус ещё не пришёл?",
            "en": "Has the bus come <b>yet</b>?",
            "gloss": "вопрос + yet",
            "say": "Has the bus come yet?"
          }
        ],
        "mistakes": [
          {
            "wrong": "I have yet finished",
            "right": "I haven't finished <b>yet</b>",
            "why": "yet — в КОНЕЦ и только в отрицании/вопросе"
          },
          {
            "wrong": "I have finished yet",
            "right": "I have <b>already</b> finished",
            "why": "в утверждении — already, не yet"
          }
        ],
        "mnemonic": "🔚 yet — в конце, только вопрос/отрицание: …yet? / haven't …yet.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> поставь yet на место в вопросе.",
            "q": "«Ты уже закончил?» —",
            "opts": [
              "Have you yet finished?",
              "Have you finished yet?",
              "Have you already finished yet?"
            ],
            "answer": 1,
            "explain": "yet — в конце вопроса: finished <b>yet</b>?"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> поставь yet на место в отрицании.",
            "q": "«Я ещё не поел» —",
            "opts": [
              "I haven't eaten yet",
              "I haven't yet eaten",
              "I have eaten yet"
            ],
            "answer": 0,
            "explain": "yet — в самом конце: haven't eaten <b>yet</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши отрицание с yet в конце.",
            "q": "Он ещё не пришёл.",
            "accept": [
              "he hasn't arrived yet",
              "he has not arrived yet"
            ],
            "placeholder": "He hasn't ... yet"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · already vs yet",
        "title": "<em>already</em> или <em>yet</em>? Собираем вместе",
        "paras": [
          "Оба про «уже», но в разных предложениях. <b>already</b> — в УТВЕРЖДЕНИИ и в середине: <b>I've already eaten.</b> <b>yet</b> — в ВОПРОСЕ/ОТРИЦАНИИ и в конце: <b>Have you eaten yet?</b> / <b>I haven't eaten yet.</b>",
          "Маленький диалог сразу показывает оба: <b>— Have you done it yet? — Yes, I've already done it.</b> Вопрос — yet в конце, ответ — already в середине.",
          "А <b>just</b> — про «только что», тоже середина: <b>I've just done it.</b> Три слова, две позиции: just/already в середине, yet в конце."
        ],
        "audio": "Оба про уже, но в разных предложениях. already — в утверждении и в середине: I've already eaten. yet — в вопросе или отрицании и в конце: Have you eaten yet? Маленький диалог: Have you done it yet? — Yes, I've already done it. А just — про только что, тоже середина. Три слова, две позиции: just и already в середине, yet в конце.",
        "table": {
          "rows": [
            [
              "I've already eaten.",
              "уже (утверждение, середина)"
            ],
            [
              "Have you eaten yet?",
              "уже? (вопрос, конец)"
            ],
            [
              "I haven't eaten yet.",
              "ещё не (отрицание, конец)"
            ],
            [
              "I've just eaten.",
              "только что (середина)"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "— Ты уже сделал? — Да, уже сделал.",
            "en": "— Have you done it <b>yet</b>? — Yes, I've <b>already</b> done it.",
            "gloss": "yet (вопрос) / already (ответ)",
            "say": "Have you done it yet? Yes, I have already done it."
          },
          {
            "ru": "Я только что встал.",
            "en": "I have <b>just</b> got up.",
            "gloss": "just — только что",
            "say": "I have just got up."
          },
          {
            "ru": "Поезд ещё не пришёл.",
            "en": "The train hasn't come <b>yet</b>.",
            "gloss": "yet в отрицании",
            "say": "The train hasn't come yet."
          },
          {
            "ru": "Я уже видел его сегодня.",
            "en": "I have <b>already</b> seen him today.",
            "gloss": "already в утверждении",
            "say": "I have already seen him today."
          }
        ],
        "mistakes": [
          {
            "wrong": "Have you already eaten? (нейтральный вопрос)",
            "right": "Have you eaten <b>yet</b>?",
            "why": "обычный вопрос «уже?» → yet в конце"
          },
          {
            "wrong": "I haven't already eaten",
            "right": "I haven't eaten <b>yet</b>",
            "why": "в отрицании — yet, не already"
          }
        ],
        "mnemonic": "⚖️ already — утверждение (середина), yet — вопрос/отрицание (конец).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это утверждение — выбери слово.",
            "q": "«I've ___ finished, thanks.» (утверждение)",
            "opts": [
              "yet",
              "already",
              "yet already"
            ],
            "answer": 1,
            "explain": "утверждение → <b>already</b> в середине."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это вопрос — выбери слово.",
            "q": "«Have you finished ___?» (вопрос)",
            "opts": [
              "already",
              "yet",
              "just"
            ],
            "answer": 1,
            "explain": "вопрос «уже?» → <b>yet</b> в конце."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери отрицание с yet в конце.",
            "q": "Собери: «Я ещё не закончил»",
            "want": "I haven't finished yet",
            "answer": "I haven't finished yet"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня готовит ужин, Том заглядывает на кухню. Лови just, already и yet в живой речи.",
      "lines": [
        {
          "who": "A",
          "en": "Is dinner ready yet?",
          "ru": "Ужин уже готов?"
        },
        {
          "who": "B",
          "en": "Almost! I've just put it in the oven.",
          "ru": "Почти! Я только что поставила его в духовку."
        },
        {
          "who": "A",
          "en": "Have you made the salad yet?",
          "ru": "А салат уже сделала?"
        },
        {
          "who": "B",
          "en": "Yes, I've already made it.",
          "ru": "Да, уже сделала."
        },
        {
          "who": "A",
          "en": "Great. I haven't set the table yet.",
          "ru": "Отлично. А я ещё не накрыл на стол."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — три маленьких слова и их место. Повтори вслух, обращая внимание на позицию.",
      "items": [
        {
          "en": "just",
          "ru": "только что",
          "ex": "I've just woken up."
        },
        {
          "en": "already",
          "ru": "уже (утверждение)",
          "ex": "I've already eaten."
        },
        {
          "en": "yet",
          "ru": "уже? / ещё не",
          "ex": "Have you finished yet?"
        },
        {
          "en": "I've just eaten",
          "ru": "я только что поел",
          "ex": "No, thanks, I've just eaten."
        },
        {
          "en": "already done",
          "ru": "уже сделал",
          "ex": "I have already done it."
        },
        {
          "en": "not yet",
          "ru": "ещё нет",
          "ex": "Are you ready? Not yet."
        },
        {
          "en": "arrived",
          "ru": "приехал / пришёл (arrive)",
          "ex": "He has just arrived."
        },
        {
          "en": "finished",
          "ru": "закончил (finish)",
          "ex": "Have you finished yet?"
        },
        {
          "en": "left",
          "ru": "ушёл (leave)",
          "ex": "She has just left."
        }
      ]
    },
    "drag": {
      "intro": "Соедини слово с переводом — вспомни, где оно стоит в предложении.",
      "pairs": [
        [
          "just",
          "только что"
        ],
        [
          "already",
          "уже"
        ],
        [
          "yet",
          "ещё (не) / уже?"
        ],
        [
          "not yet",
          "ещё нет"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса на место just, already и yet. Поехали!",
      "items": [
        {
          "q": "«Я только что поел» —",
          "opts": [
            "I just have eaten",
            "I have just eaten",
            "I have eaten just"
          ],
          "answer": 1,
          "explain": "just — в середине: have <b>just</b> eaten."
        },
        {
          "q": "«Ты уже закончил?» —",
          "opts": [
            "Have you already finished?",
            "Have you finished yet?",
            "Have you yet finished?"
          ],
          "answer": 1,
          "explain": "вопрос «уже?» → <b>yet</b> в конце."
        },
        {
          "q": "«Я ещё не сделал это» —",
          "opts": [
            "I haven't done it yet",
            "I haven't yet done it",
            "I have done it yet"
          ],
          "answer": 0,
          "explain": "yet — в самом конце: haven't done it <b>yet</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: занятое утро. Лови just, already и yet на своих местах.",
      "title": "A busy morning",
      "sentences": [
        "It's only nine o'clock, but I've been busy.",
        "I have already had breakfast.",
        "I have just made a cup of coffee.",
        "I have already answered five emails.",
        "But I haven't called the office yet.",
        "My friend has just sent me a message.",
        "She has already finished her work!",
        "I haven't finished mine yet.",
        "Have you started your day yet?",
        "I have just begun, but I feel good."
      ],
      "translation": "Сейчас только девять, но я уже занят. Я уже позавтракал. Я только что сделал чашку кофе. Я уже ответил на пять писем. Но я ещё не позвонил в офис. Подруга только что прислала мне сообщение. Она уже закончила свою работу! А я свою ещё не закончил. Ты уже начал свой день? Я только начал, но чувствую себя хорошо."
    },
    "essay": {
      "intro": "Расскажи, что ты уже сделал сегодня, а что ещё нет.",
      "prompt": "Напиши 4–5 предложений про сегодняшнее утро. Используй just, already и yet.",
      "hint": "Структуры: I have just… ; I have already… ; I haven't … yet ; Have you … yet?",
      "example": "I have just got up. I have already had breakfast. I have already made coffee. But I haven't started work yet. Have you had breakfast yet?"
    },
    "picture": {
      "intro": "Опиши по картинке, что человек уже сделал, а что ещё нет.",
      "emoji": "☕📧✅",
      "prompt": "Опиши по картинке: используй I have just…, I have already… и I haven't … yet.",
      "hint": "Используй: I have just made coffee; I have already had breakfast; I haven't started work yet.",
      "example": "I have just made coffee. I have already had breakfast. But I haven't started work yet.",
      "img": "img/a2/day-10.jpg",
      "credit": "Фото: cogdogblog · CC0 · <a href=\"https://www.flickr.com/photos/37996646802@N01/265279980\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "11": {
    "day": 11,
    "week": "02",
    "level": "A2",
    "themeRu": "С каких пор",
    "themeEn": "for & since",
    "intro": "Как долго ты учишь английский — и с какого момента начал(а)? Один вопрос, а слова для ответа разные: <b>for</b> и <b>since</b>. <b>for</b> — это отрезок времени (пять лет, два часа), а <b>since</b> — точка, с которой всё пошло (с 2015 года, с понедельника). И важное: если ситуация всё ещё длится — «я живу здесь пять лет» — англичанин скажет <b>have lived</b>, в Present Perfect. Непривычно, но я всё разложу по полочкам.",
    "introAudio": "Как долго ты учишь английский — и с какого момента начал? Один вопрос, а слова для ответа разные: for и since. for — это отрезок времени: пять лет, два часа. А since — точка, с которой всё пошло: с 2015 года, с понедельника. И важное: если ситуация всё ещё длится — я живу здесь пять лет — англичанин скажет have lived, в Present Perfect. Непривычно, но я всё разложу по полочкам.",
    "goals": [
      "понять разницу: <b>for</b> — это отрезок времени, <b>since</b> — точка отсчёта",
      "отвечать на вопрос <b>How long…?</b> — как долго ты что-то делаешь",
      "не говорить «I live here for 5 years», а сказать <b>I have lived here for 5 years</b>",
      "рассказать, сколько времени ты живёшь, работаешь или знаешь кого-то"
    ],
    "learned": [
      "Понял(а) разницу: <b>for</b> — это отрезок времени, <b>since</b> — точка отсчёта",
      "Ответил(а) на вопрос <b>How long…?</b> — как долго ты что-то делаешь",
      "Научился(лась) не говорить «I live here for 5 years», а говорить <b>I have lived here for 5 years</b>",
      "Рассказал(а), сколько времени живёшь, работаешь или знаешь кого-то"
    ],
    "review": {
      "intro": "Сначала разомнёмся: вчерашние <b>just</b>, <b>already</b> и <b>yet</b>. Помнишь? just и already — в середине (после have/has), а yet — в конце, в вопросах и отрицаниях.",
      "introAudio": "Сначала разомнёмся: вчерашние just, already и yet. Помнишь? just и already — в середине, после have или has. А yet — в конце, в вопросах и отрицаниях.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери верный вариант. just — в середине.",
          "q": "«Я только что поел» —",
          "opts": [
            "I yet ate",
            "I have just eaten",
            "I have eaten yet"
          ],
          "answer": 1,
          "explain": "just — в середине, после have: I have <b>just</b> eaten."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери вопрос. yet — в конце.",
          "q": "Собери: «Ты уже закончил?»",
          "want": "Have you finished yet",
          "answer": "Have you finished yet"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · for",
        "title": "<em>for</em> — сколько времени длится",
        "paras": [
          "<b>for</b> отвечает на «как долго?» через ОТРЕЗОК времени. Сколько именно тянется действие: <b>for two hours</b> (два часа), <b>for five years</b> (пять лет), <b>for a long time</b> (долго).",
          "После <b>for</b> всегда стоит длительность — число с единицей времени или «a long time». <b>I have known her for ten years.</b> = Я знаю её десять лет (и до сих пор).",
          "Подсказка для памяти: <b>for</b> = «в течение». Подставь мысленно «в течение пяти лет» — если подходит, нужен for."
        ],
        "audio": "for отвечает на вопрос как долго через отрезок времени. for two hours — два часа, for five years — пять лет, for a long time — долго. После for всегда длительность. I have known her for ten years — я знаю её десять лет.",
        "table": {
          "rows": [
            [
              "for two hours",
              "два часа (отрезок)"
            ],
            [
              "for five years",
              "пять лет"
            ],
            [
              "for a long time",
              "долго"
            ],
            [
              "for a week",
              "неделю"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я живу здесь пять лет.",
            "en": "I have lived here <b>for</b> five years.",
            "gloss": "for + отрезок",
            "say": "I have lived here for five years."
          },
          {
            "ru": "Мы ждём два часа.",
            "en": "We have waited <b>for</b> two hours.",
            "gloss": "for + два часа",
            "say": "We have waited for two hours."
          },
          {
            "ru": "Я знаю Тома давно.",
            "en": "I have known Tom <b>for</b> a long time.",
            "gloss": "for + долго",
            "say": "I have known Tom for a long time."
          },
          {
            "ru": "Она учит английский год.",
            "en": "She has studied English <b>for</b> a year.",
            "gloss": "for + год",
            "say": "She has studied English for a year."
          }
        ],
        "mistakes": [
          {
            "wrong": "I live here for five years",
            "right": "I <b>have lived</b> here for five years",
            "why": "ситуация ещё длится → Present Perfect, не present simple"
          },
          {
            "wrong": "since two hours",
            "right": "<b>for</b> two hours",
            "why": "перед отрезком — только for, не since"
          }
        ],
        "mnemonic": "⏳ for = отрезок: for two hours, for five years, for a long time.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери, что ставить перед отрезком времени.",
            "q": "I have worked here ___ three years.",
            "opts": [
              "since",
              "for",
              "from"
            ],
            "answer": 1,
            "explain": "три года — это отрезок → <b>for</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу.",
            "q": "Собери: «Я знаю её десять лет»",
            "want": "I have known her for ten years",
            "answer": "I have known her for ten years"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. wait = ждать.",
            "q": "Мы ждём два часа.",
            "accept": [
              "we have waited for two hours"
            ],
            "placeholder": "We have waited ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · since",
        "title": "<em>since</em> — с какого момента",
        "paras": [
          "<b>since</b> отвечает на «с каких пор?» через ТОЧКУ во времени — момент, когда всё началось: <b>since 2015</b> (с 2015 года), <b>since Monday</b> (с понедельника), <b>since September</b> (с сентября).",
          "После <b>since</b> стоит конкретная точка — год, день, месяц или событие. <b>I have lived here since 2015.</b> = Я живу здесь с 2015 года (и сейчас тоже).",
          "Можно даже целое событие: <b>since I was a child</b> (с детства), <b>since we met</b> (с тех пор как познакомились)."
        ],
        "audio": "since отвечает на вопрос с каких пор через точку во времени — момент, когда всё началось. since 2015 — с 2015 года, since Monday — с понедельника, since September — с сентября. I have lived here since 2015 — я живу здесь с 2015 года.",
        "table": {
          "rows": [
            [
              "since 2015",
              "с 2015 года (точка)"
            ],
            [
              "since Monday",
              "с понедельника"
            ],
            [
              "since September",
              "с сентября"
            ],
            [
              "since I was a child",
              "с детства"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я живу здесь с 2015 года.",
            "en": "I have lived here <b>since</b> 2015.",
            "gloss": "since + точка",
            "say": "I have lived here since 2015."
          },
          {
            "ru": "Она в Лондоне с понедельника.",
            "en": "She has been in London <b>since</b> Monday.",
            "gloss": "since + понедельник",
            "say": "She has been in London since Monday."
          },
          {
            "ru": "Мы знакомы со школы.",
            "en": "We have known each other <b>since</b> school.",
            "gloss": "since + событие",
            "say": "We have known each other since school."
          },
          {
            "ru": "Я не видел его с сентября.",
            "en": "I haven't seen him <b>since</b> September.",
            "gloss": "since + сентябрь",
            "say": "I haven't seen him since September."
          }
        ],
        "mistakes": [
          {
            "wrong": "since five years",
            "right": "<b>for</b> five years",
            "why": "пять лет — это отрезок, а не точка → for"
          },
          {
            "wrong": "I am here since Monday",
            "right": "I <b>have been</b> here since Monday",
            "why": "ситуация длится до сих пор → Present Perfect"
          }
        ],
        "mnemonic": "📍 since = точка отсчёта: since 2015, since Monday, since I was a child.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери for или since.",
            "q": "I have known him ___ 2010.",
            "opts": [
              "for",
              "since",
              "from"
            ],
            "answer": 1,
            "explain": "2010 — это точка во времени → <b>since</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> for (отрезок) или since (точка)?",
            "q": "She has worked here ___ Monday.",
            "opts": [
              "for",
              "since"
            ],
            "answer": 1,
            "explain": "Monday — конкретная точка → <b>since</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. since = с (момента).",
            "q": "Я живу здесь с 2015 года.",
            "accept": [
              "i have lived here since 2015"
            ],
            "placeholder": "I have lived here ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · вопрос",
        "title": "<em>How long…?</em> — как долго?",
        "paras": [
          "Чтобы спросить «как долго / с каких пор?», англичанин ставит <b>How long</b> + Present Perfect: <b>How long have you lived here?</b> = Сколько (времени) ты здесь живёшь?",
          "Отвечают через <b>for</b> или <b>since</b>: <b>For five years.</b> или <b>Since 2015.</b> — короткий ответ, без лишних слов.",
          "Обрати внимание: вопрос про то, что длится до сих пор, — и поэтому именно Present Perfect (<b>have you lived</b>), а не present simple («do you live»)."
        ],
        "audio": "Чтобы спросить как долго, ставим How long плюс Present Perfect: How long have you lived here? Сколько ты здесь живёшь? Отвечают через for или since: For five years. Since 2015.",
        "table": {
          "rows": [
            [
              "How long have you been here?",
              "Сколько ты тут (находишься)?"
            ],
            [
              "— For two hours.",
              "— Два часа."
            ],
            [
              "— Since Monday.",
              "— С понедельника."
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Сколько ты учишь английский?",
            "en": "<b>How long have</b> you studied English?",
            "gloss": "How long + have",
            "say": "How long have you studied English?"
          },
          {
            "ru": "— Давно. Десять лет.",
            "en": "— For ten years.",
            "gloss": "ответ через for",
            "say": "For ten years."
          },
          {
            "ru": "Сколько они женаты?",
            "en": "<b>How long have</b> they been married?",
            "gloss": "How long + been",
            "say": "How long have they been married?"
          },
          {
            "ru": "— С 2018 года.",
            "en": "— Since 2018.",
            "gloss": "ответ через since",
            "say": "Since 2018."
          }
        ],
        "mistakes": [
          {
            "wrong": "How long do you live here?",
            "right": "How long <b>have you lived</b> here?",
            "why": "длится до сих пор → Present Perfect"
          }
        ],
        "mnemonic": "❓ How long + have + 3-я форма? — Ответ: For… / Since…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери правильный вопрос.",
            "q": "Как спросить «Сколько ты здесь живёшь?»",
            "opts": [
              "How long do you live here?",
              "How long have you lived here?",
              "How long you live here?"
            ],
            "answer": 1,
            "explain": "длится сейчас → <b>How long have you lived…?</b>"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вопрос.",
            "q": "Собери: «Сколько ты знаешь Тома?»",
            "want": "How long have you known Tom",
            "answer": "How long have you known Tom"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вопрос вслух.",
            "target": "How long have you lived here?",
            "sub": "Сколько ты здесь живёшь?",
            "want": "how long"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "Почему <em>I have lived</em>, а не <em>I live</em>",
        "paras": [
          "Здесь русскоязычные спотыкаются: по-русски мы говорим «я живу здесь пять лет» — настоящим временем. Кажется логичным сказать «I live here for five years». Но это ошибка.",
          "Если действие началось в прошлом и ТЯНЕТСЯ до сих пор, англичанин ставит Present Perfect: <b>I have lived here for five years.</b> Дословно «я прожил здесь пять лет — и продолжаю».",
          "Сигнал — слова <b>for</b> и <b>since</b> рядом с «как долго». Увидел for/since про длящееся — ставь <b>have/has + 3-я форма</b>, а не present simple."
        ],
        "audio": "Здесь русскоязычные спотыкаются: по-русски я живу здесь пять лет — настоящим временем. Кажется логичным сказать I live here for five years. Но это ошибка. Если действие началось в прошлом и тянется до сих пор — Present Perfect: I have lived here for five years. Сигнал — слова for и since.",
        "table": {
          "rows": [
            [
              "I have lived here for 5 years.",
              "Живу здесь 5 лет (и сейчас) ✅"
            ],
            [
              "I live here for 5 years.",
              "так нельзя ❌"
            ],
            [
              "I have worked here since May.",
              "Работаю тут с мая ✅"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я работаю здесь три года.",
            "en": "I <b>have worked</b> here for three years.",
            "gloss": "длится → Present Perfect",
            "say": "I have worked here for three years."
          },
          {
            "ru": "Мы женаты с 2018 года.",
            "en": "We <b>have been</b> married since 2018.",
            "gloss": "длится → have been",
            "say": "We have been married since 2018."
          },
          {
            "ru": "Она знает его много лет.",
            "en": "She <b>has known</b> him for many years.",
            "gloss": "длится → has known",
            "say": "She has known him for many years."
          },
          {
            "ru": "Ты давно здесь живёшь?",
            "en": "How long <b>have</b> you <b>lived</b> here?",
            "gloss": "длится → have lived",
            "say": "How long have you lived here?"
          }
        ],
        "mistakes": [
          {
            "wrong": "I work here for three years",
            "right": "I <b>have worked</b> here for three years",
            "why": "работа длится до сих пор → Present Perfect, не present simple"
          },
          {
            "wrong": "I am here since Monday",
            "right": "I <b>have been</b> here since Monday",
            "why": "с понедельника и сейчас → have been, не am"
          }
        ],
        "mnemonic": "🔑 for/since + длится сейчас → have/has + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вариант (ситуация длится сейчас).",
            "q": "«Я живу здесь пять лет» —",
            "opts": [
              "I live here for five years",
              "I have lived here for five years",
              "I am living here for five years"
            ],
            "answer": 1,
            "explain": "длится до сих пор → <b>I have lived here for five years</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. work = работать.",
            "q": "Я работаю здесь три года.",
            "accept": [
              "i have worked here for three years"
            ],
            "placeholder": "I have worked ..."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу.",
            "q": "Собери: «Мы женаты с 2018 года»",
            "want": "We have been married since 2018",
            "answer": "We have been married since 2018"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня знакомится с новым коллегой и расспрашивает про стаж. Слушай for, since и How long.",
      "lines": [
        {
          "who": "A",
          "en": "How long have you worked here?",
          "ru": "Сколько ты здесь работаешь?"
        },
        {
          "who": "B",
          "en": "For three years. And you?",
          "ru": "Три года. А ты?"
        },
        {
          "who": "A",
          "en": "Since January. I'm still new!",
          "ru": "С января. Я ещё новенькая!"
        },
        {
          "who": "B",
          "en": "Have you lived in this city for a long time?",
          "ru": "А в этом городе ты давно живёшь?"
        },
        {
          "who": "A",
          "en": "Since I was a child. All my life!",
          "ru": "С детства. Всю жизнь!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — про время и длительность. Повтори вслух.",
      "items": [
        {
          "en": "for",
          "ru": "в течение (отрезок)",
          "ex": "I have waited for an hour."
        },
        {
          "en": "since",
          "ru": "с (момента)",
          "ex": "I have been here since Monday."
        },
        {
          "en": "How long…?",
          "ru": "Как долго? / Сколько…?",
          "ex": "How long have you been here?"
        },
        {
          "en": "a long time",
          "ru": "долго, давно",
          "ex": "I have known him for a long time."
        },
        {
          "en": "a year",
          "ru": "год",
          "ex": "She has studied it for a year."
        },
        {
          "en": "married",
          "ru": "женат / замужем",
          "ex": "They have been married since 2018."
        },
        {
          "en": "to know",
          "ru": "знать",
          "ex": "I have known her for years."
        },
        {
          "en": "still",
          "ru": "всё ещё",
          "ex": "I still live here."
        },
        {
          "en": "all my life",
          "ru": "всю жизнь",
          "ex": "I have lived here all my life."
        }
      ]
    },
    "drag": {
      "intro": "Соедини выражение с тем, что оно показывает: отрезок или точку.",
      "pairs": [
        [
          "for two hours",
          "два часа — отрезок"
        ],
        [
          "since Monday",
          "с понедельника — точка"
        ],
        [
          "for five years",
          "пять лет — отрезок"
        ],
        [
          "since 2015",
          "с 2015 — точка"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по for и since. Три вопроса — и день закрыт!",
      "items": [
        {
          "q": "I have been here ___ two hours.",
          "opts": [
            "since",
            "for",
            "from"
          ],
          "answer": 1,
          "explain": "два часа — отрезок → <b>for</b>."
        },
        {
          "q": "I have lived here ___ 2015.",
          "opts": [
            "for",
            "since",
            "in"
          ],
          "answer": 1,
          "explain": "2015 — точка → <b>since</b>."
        },
        {
          "q": "«Я работаю здесь пять лет» —",
          "opts": [
            "I work here for five years",
            "I have worked here for five years"
          ],
          "answer": 1,
          "explain": "длится сейчас → Present Perfect: <b>have worked</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: Майя рассказывает, как давно у неё всё в жизни. Везде for и since.",
      "title": "How long?",
      "sentences": [
        "My name is Maya.",
        "I have lived in this city for ten years.",
        "I have worked at a school since 2019.",
        "I have known my best friend since school.",
        "We have been friends for twenty years.",
        "I have studied English for three years.",
        "I have had my cat since last summer.",
        "I haven't seen my brother for six months.",
        "He has lived in Canada since 2020.",
        "I miss him a lot!"
      ],
      "translation": "Меня зовут Майя. Я живу в этом городе десять лет. Я работаю в школе с 2019 года. Я знаю свою лучшую подругу со школы. Мы дружим двадцать лет. Я учу английский три года. Кот у меня с прошлого лета. Я не видела брата полгода. Он живёт в Канаде с 2020 года. Я очень по нему скучаю!"
    },
    "essay": {
      "intro": "Теперь ты — расскажи, как давно у тебя что-то в жизни.",
      "prompt": "Напиши 3–5 предложений про то, как долго ты что-то делаешь. Используй for и since: I have lived…, I have worked…, I have known…",
      "hint": "Структуры: I have lived in… for… ; I have worked… since… ; I have known… for… (for — отрезок, since — точка).",
      "example": "I have lived in Moscow for fifteen years. I have worked at my company since 2020. I have known my best friend for ten years. I have studied English since January."
    },
    "picture": {
      "intro": "Опиши по картинке, как давно человек живёт и работает в городе.",
      "emoji": "🏙️📅⏳",
      "prompt": "Опиши, как долго человек живёт и работает здесь. Используй for и since.",
      "hint": "Используй: I have lived here for ten years; I have worked here since 2019.",
      "example": "I have lived in this city for ten years. I have worked here since 2019. I have known my neighbours for a long time.",
      "img": "img/a2/day-11.jpg",
      "credit": "Фото: freestocks.org · CC0 · <a href=\"https://www.flickr.com/photos/135396164@N05/33572876081\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "12": {
    "day": 12,
    "week": "02",
    "level": "A2",
    "themeRu": "Уже или вчера",
    "themeEn": "Present Perfect vs Past Simple",
    "intro": "Сегодня — развилка всей недели. Ты уже знаешь <b>Present Perfect</b> («я видел» — опыт) и <b>Past Simple</b> («я увидел вчера» — конкретный момент). Осталось научиться <b>выбирать</b> между ними. Правило одно и железное: появилось конкретное «когда» — <b>yesterday</b>, <b>in 2019</b>, <b>last week</b> — это Past Simple. Нет «когда», важен опыт или результат сейчас — Present Perfect. Разберём так, что больше не перепутаешь.",
    "introAudio": "Сегодня — развилка всей недели. Ты уже знаешь Present Perfect — «я видел», опыт, и Past Simple — «я увидел вчера», конкретный момент. Осталось научиться выбирать между ними. Правило одно и железное: появилось конкретное «когда» — yesterday, in 2019, last week — это Past Simple. Нет «когда», важен опыт или результат сейчас — Present Perfect. Разберём так, что больше не перепутаешь.",
    "goals": [
      "выбирать между Present Perfect и Past Simple осознанно, а не наугад",
      "видеть слова-маркёры: yesterday, in 2019 → Past; ever, never, just → Present Perfect",
      "не говорить «Did you ever…?», а спрашивать <b>Have you ever…?</b>",
      "сразу переходить на Past Simple, как только назвал конкретное время"
    ],
    "learned": [
      "Научился(лась) осознанно выбирать между Present Perfect и Past Simple, а не наугад",
      "Научился(лась) видеть слова-маркёры: yesterday, in 2019 → Past; ever, never, just → Present Perfect",
      "Научился(лась) не говорить «Did you ever…?», а спрашивать <b>Have you ever…?</b>",
      "Научился(лась) сразу переходить на Past Simple, как только назвал конкретное время"
    ],
    "review": {
      "intro": "Разомнёмся вчерашним: <b>for</b> и <b>since</b>. Помнишь? for — отрезок (for five years), since — точка (since Monday).",
      "introAudio": "Разомнёмся вчерашним: for и since. Помнишь? for — отрезок, for five years. since — точка, since Monday.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> for (отрезок) или since (точка)?",
          "q": "I have worked here ___ 2018.",
          "opts": [
            "for",
            "since",
            "from"
          ],
          "answer": 1,
          "explain": "2018 — точка во времени → <b>since</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу.",
          "q": "Собери: «Я знаю её пять лет»",
          "want": "I have known her for five years",
          "answer": "I have known her for five years"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · выбор времени",
        "title": "Есть «когда» → <em>Past</em>. Опыт сейчас → <em>Perfect</em>",
        "paras": [
          "Два времени — две разные задачи. <b>Present Perfect</b> говорит про опыт или результат СЕЙЧАС, без точной даты: <b>I have seen this film.</b> (важно, что видел, неважно когда).",
          "<b>Past Simple</b> говорит про конкретный момент в прошлом, который закончился: <b>I saw this film yesterday.</b> (есть «когда» — вчера).",
          "Простое правило: если в предложении есть или подразумевается конкретное «когда» — ставь Past Simple. Если важен опыт или результат и «когда» неважно — Present Perfect."
        ],
        "audio": "Два времени — две задачи. Present Perfect — про опыт или результат сейчас, без даты: I have seen this film, важно что видел, неважно когда. Past Simple — про конкретный момент, который закончился: I saw this film yesterday, есть когда — вчера. Есть когда — ставь Past Simple.",
        "table": {
          "rows": [
            [
              "I have seen it. (опыт)",
              "Я (уже) видел — Present Perfect"
            ],
            [
              "I saw it yesterday.",
              "Я видел вчера — Past Simple"
            ],
            [
              "опыт / результат сейчас",
              "→ have/has + 3-я форма"
            ],
            [
              "конкретное «когда»",
              "→ Past Simple (2-я форма)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я был в Париже (когда-то).",
            "en": "I <b>have been</b> to Paris.",
            "gloss": "опыт → Perfect",
            "say": "I have been to Paris."
          },
          {
            "ru": "Я был в Париже в мае.",
            "en": "I <b>was</b> in Paris in May.",
            "gloss": "есть «в мае» → Past",
            "say": "I was in Paris in May."
          },
          {
            "ru": "Она сделала задание.",
            "en": "She <b>has done</b> the task.",
            "gloss": "результат сейчас → Perfect",
            "say": "She has done the task."
          },
          {
            "ru": "Она сделала задание вчера.",
            "en": "She <b>did</b> the task yesterday.",
            "gloss": "есть «вчера» → Past",
            "say": "She did the task yesterday."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have seen this film yesterday",
            "right": "I <b>saw</b> this film yesterday",
            "why": "есть «yesterday» → Past Simple, не Perfect"
          },
          {
            "wrong": "I went to Japan (про опыт вообще)",
            "right": "I <b>have been to</b> Japan",
            "why": "опыт без даты → Present Perfect"
          }
        ],
        "mnemonic": "⚖️ Есть «когда» → Past. Опыт/результат сейчас → Perfect.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери время. Есть конкретное «когда»?",
            "q": "I ___ my keys yesterday.",
            "opts": [
              "have lost",
              "lost",
              "have lose"
            ],
            "answer": 1,
            "explain": "есть «yesterday» → <b>Past Simple: lost</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> опыт без даты или конкретный момент?",
            "q": "___ this film. (опыт, неважно когда)",
            "opts": [
              "I saw",
              "I have seen",
              "I did see"
            ],
            "answer": 1,
            "explain": "опыт без даты → <b>Present Perfect: have seen</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу с «вчера».",
            "q": "Собери: «Я видел Тома вчера»",
            "want": "I saw Tom yesterday",
            "answer": "I saw Tom yesterday"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · слова-маркёры",
        "title": "Слова-подсказки: <em>yesterday</em> vs <em>ever / just</em>",
        "paras": [
          "Часто само предложение подсказывает время одним словом. Эти слова тянут в <b>Past Simple</b>: <b>yesterday</b>, <b>last week</b>, <b>in 2019</b>, <b>two days ago</b>, <b>when I was young</b> — всё это конкретные точки в прошлом.",
          "А эти тянут в <b>Present Perfect</b>: <b>ever</b>, <b>never</b>, <b>just</b>, <b>already</b>, <b>yet</b>, <b>for</b>, <b>since</b> — они про опыт или связь с настоящим.",
          "Натренируй глаз: заметил <b>yesterday / ago / in 2019</b> — рука сама пишет Past. Заметил <b>ever / never / just / yet</b> — Present Perfect."
        ],
        "audio": "Часто слово само подсказывает время. В Past Simple тянут: yesterday, last week, in 2019, two days ago, when I was young — конкретные точки в прошлом. В Present Perfect тянут: ever, never, just, already, yet, for, since. Заметил yesterday — пиши Past. Заметил ever или yet — Present Perfect.",
        "table": {
          "rows": [
            [
              "yesterday, last week, ago, in 2019",
              "→ Past Simple"
            ],
            [
              "ever, never, just, already, yet",
              "→ Present Perfect"
            ],
            [
              "for, since",
              "→ Present Perfect"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я закончил вчера.",
            "en": "I <b>finished</b> it yesterday.",
            "gloss": "yesterday → Past",
            "say": "I finished it yesterday."
          },
          {
            "ru": "Я только что закончил.",
            "en": "I <b>have</b> just <b>finished</b>.",
            "gloss": "just → Perfect",
            "say": "I have just finished."
          },
          {
            "ru": "Мы ездили туда в 2019.",
            "en": "We <b>went</b> there in 2019.",
            "gloss": "in 2019 → Past",
            "say": "We went there in 2019."
          },
          {
            "ru": "Мы никогда там не были.",
            "en": "We <b>have never been</b> there.",
            "gloss": "never → Perfect",
            "say": "We have never been there."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have finished it yesterday",
            "right": "I <b>finished</b> it yesterday",
            "why": "yesterday → Past Simple"
          },
          {
            "wrong": "I have seen him last week",
            "right": "I <b>saw</b> him last week",
            "why": "last week → конкретное время → Past Simple"
          }
        ],
        "mnemonic": "🔎 yesterday/ago/in 2019 → Past. ever/never/just/yet/for/since → Perfect.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> слово-маркёр подскажет время.",
            "q": "We ___ to Spain in 2018.",
            "opts": [
              "have been",
              "went",
              "have gone"
            ],
            "answer": 1,
            "explain": "in 2018 — конкретный год → <b>Past Simple: went</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди маркёр Present Perfect.",
            "q": "I ___ already finished.",
            "opts": [
              "have",
              "did",
              "was"
            ],
            "answer": 0,
            "explain": "already → Present Perfect: <b>have</b> finished."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши предложение. Есть «yesterday» → Past. see → saw.",
            "q": "Я видел его вчера.",
            "accept": [
              "i saw him yesterday"
            ],
            "placeholder": "I ... him yesterday"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "<em>Did you ever…?</em> → <em>Have you ever…?</em>",
        "paras": [
          "Главная ошибка русскоязычных: спросить про опыт через <b>did</b>. Хочется сказать «Did you ever be in London?» — ведь в русском «Ты когда-нибудь был?» это одно прошедшее. Но опыт за жизнь — это всегда Present Perfect.",
          "Правильно: <b>Have you ever been to London?</b> (have + ever + 3-я форма). Ответ: <b>Yes, I have.</b> / <b>No, I have never been.</b>",
          "И зеркально: как только в ответе появляется конкретное «когда», ты ОБЯЗАН переключиться на Past. «Yes, I went there in 2019.» — здесь уже Past, потому что назвал год."
        ],
        "audio": "Главная ошибка русскоязычных — спросить про опыт через did: Did you ever be in London? В русском Ты когда-нибудь был — одно прошедшее. Но опыт за жизнь — это Present Perfect: Have you ever been to London? А как только называешь конкретное когда — переключайся на Past: Yes, I went there in 2019.",
        "table": {
          "rows": [
            [
              "Have you ever been to London?",
              "Ты когда-нибудь был в Лондоне? ✅"
            ],
            [
              "Did you ever be in London?",
              "так нельзя ❌"
            ],
            [
              "— Yes, I went there in 2019.",
              "Да, я ездил в 2019 → Past"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Ты когда-нибудь пробовал суши?",
            "en": "<b>Have</b> you <b>ever tried</b> sushi?",
            "gloss": "опыт → Have you ever",
            "say": "Have you ever tried sushi?"
          },
          {
            "ru": "Да. Я попробовал в Токио в 2019.",
            "en": "Yes. I <b>tried</b> it in Tokyo in 2019.",
            "gloss": "есть «в 2019» → Past",
            "say": "Yes, I tried it in Tokyo in 2019."
          },
          {
            "ru": "Ты когда-нибудь был в Италии?",
            "en": "<b>Have</b> you <b>ever been</b> to Italy?",
            "gloss": "Have + ever + been",
            "say": "Have you ever been to Italy?"
          },
          {
            "ru": "Нет, я никогда там не был.",
            "en": "No, I <b>have never been</b> there.",
            "gloss": "опыт → Perfect",
            "say": "No, I have never been there."
          }
        ],
        "mistakes": [
          {
            "wrong": "Did you ever been to London?",
            "right": "<b>Have</b> you ever <b>been</b> to London?",
            "why": "опыт за жизнь → Present Perfect, не did"
          },
          {
            "wrong": "Have you seen him yesterday?",
            "right": "<b>Did</b> you <b>see</b> him yesterday?",
            "why": "есть «yesterday» → Past Simple (did)"
          }
        ],
        "mnemonic": "🗣️ Опыт → Have you ever…? Назвал дату → переходи на Past.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери вопрос про опыт.",
            "q": "Как спросить «Ты когда-нибудь был в Японии?»",
            "opts": [
              "Did you ever be in Japan?",
              "Have you ever been to Japan?",
              "Are you ever in Japan?"
            ],
            "answer": 1,
            "explain": "опыт → <b>Have you ever been to…</b>"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> в ответе названа дата — какое время?",
            "q": "— Yes, I ___ there in 2019.",
            "opts": [
              "have been",
              "went",
              "have gone"
            ],
            "answer": 1,
            "explain": "есть «in 2019» → <b>Past Simple: went</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вопрос про опыт.",
            "q": "Собери: «Ты когда-нибудь ел суши?»",
            "want": "Have you ever eaten sushi",
            "answer": "Have you ever eaten sushi"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · новость → детали",
        "title": "Новость в <em>Perfect</em>, детали — в <em>Past</em>",
        "paras": [
          "Очень частый живой приём: сначала сообщаешь НОВОСТЬ (результат сейчас) в Present Perfect, а потом добавляешь детали (когда, где) в Past Simple.",
          "<b>I have lost my keys!</b> (новость, результат — их нет сейчас). <b>I lost them this morning.</b> (деталь — когда). Видишь переключение have lost → lost?",
          "Так строится почти любой рассказ: «I have been to Italy. I went there last summer.» Первое — опыт, второе — конкретный момент."
        ],
        "audio": "Частый живой приём: сначала сообщаешь новость, результат сейчас, в Present Perfect, потом добавляешь детали в Past Simple. I have lost my keys — новость, их нет сейчас. I lost them this morning — деталь, когда. I have been to Italy. I went there last summer.",
        "table": {
          "rows": [
            [
              "I have lost my keys.",
              "Я потерял ключи (нет сейчас) — Perfect"
            ],
            [
              "I lost them this morning.",
              "Потерял утром (деталь) — Past"
            ],
            [
              "I have been to Rome. I went in May.",
              "новость + деталь"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я нашёл работу! Я начал в понедельник.",
            "en": "I <b>have found</b> a job! I <b>started</b> on Monday.",
            "gloss": "новость → Perfect, деталь → Past",
            "say": "I have found a job! I started on Monday."
          },
          {
            "ru": "Она приехала. Она прилетела вчера.",
            "en": "She <b>has arrived</b>. She <b>flew</b> in yesterday.",
            "gloss": "have arrived → flew",
            "say": "She has arrived. She flew in yesterday."
          },
          {
            "ru": "Я читал эту книгу. Я читал её в школе.",
            "en": "I <b>have read</b> this book. I <b>read</b> it at school.",
            "gloss": "read (Perfect) → read (Past)",
            "say": "I have read this book. I read it at school."
          },
          {
            "ru": "Я потерял телефон. Я потерял его утром.",
            "en": "I <b>have lost</b> my phone. I <b>lost</b> it this morning.",
            "gloss": "have lost → lost",
            "say": "I have lost my phone. I lost it this morning."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have found a job last week",
            "right": "I <b>found</b> a job last week",
            "why": "есть «last week» → Past Simple"
          },
          {
            "wrong": "I lost my keys (как свежая новость)",
            "right": "I <b>have lost</b> my keys",
            "why": "результат сейчас, без времени → Present Perfect"
          }
        ],
        "mnemonic": "📣 Сначала новость (Perfect), потом «когда» (Past).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это новость (результат сейчас) или деталь с «когда»?",
            "q": "I ___ my phone! I can't call you.",
            "opts": [
              "broke",
              "have broken",
              "break"
            ],
            "answer": 1,
            "explain": "результат сейчас, телефон не работает → <b>Present Perfect: have broken</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> добавляем деталь «когда».",
            "q": "I have found a job. I ___ on Monday.",
            "opts": [
              "have started",
              "started",
              "start"
            ],
            "answer": 1,
            "explain": "есть «on Monday» → <b>Past Simple: started</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши новость + деталь. lose → lost.",
            "q": "Я потерял ключи. Я потерял их утром.",
            "accept": [
              "i have lost my keys i lost them this morning",
              "i have lost my keys. i lost them this morning"
            ],
            "placeholder": "I have lost my keys. I ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Том вернулся из отпуска, Аня расспрашивает. Слушай, как Present Perfect переходит в Past, когда называют «когда».",
      "lines": [
        {
          "who": "A",
          "en": "Have you ever been to Greece?",
          "ru": "Ты когда-нибудь был в Греции?"
        },
        {
          "who": "B",
          "en": "Yes, I have! I went there last summer.",
          "ru": "Да! Я ездил туда прошлым летом."
        },
        {
          "who": "A",
          "en": "Lucky you! What did you do?",
          "ru": "Везёт! А что ты там делал?"
        },
        {
          "who": "B",
          "en": "I saw the islands and ate amazing food.",
          "ru": "Я видел острова и ел потрясающую еду."
        },
        {
          "who": "A",
          "en": "I have never been to Greece. Maybe next year!",
          "ru": "А я никогда не был в Греции. Может, в следующем году!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — маркёры времени. Они подсказывают: Past или Perfect. Повтори вслух.",
      "items": [
        {
          "en": "yesterday",
          "ru": "вчера (→ Past)",
          "ex": "I saw him yesterday."
        },
        {
          "en": "last week",
          "ru": "на прошлой неделе (→ Past)",
          "ex": "We met last week."
        },
        {
          "en": "in 2019",
          "ru": "в 2019 году (→ Past)",
          "ex": "I went there in 2019."
        },
        {
          "en": "ago",
          "ru": "(тому) назад (→ Past)",
          "ex": "I left two days ago."
        },
        {
          "en": "ever",
          "ru": "когда-либо (→ Perfect)",
          "ex": "Have you ever tried it?"
        },
        {
          "en": "never",
          "ru": "никогда (→ Perfect)",
          "ex": "I have never seen it."
        },
        {
          "en": "already",
          "ru": "уже (→ Perfect)",
          "ex": "I have already eaten."
        },
        {
          "en": "this morning",
          "ru": "сегодня утром",
          "ex": "I had coffee this morning."
        },
        {
          "en": "to lose / lost",
          "ru": "терять / потерял",
          "ex": "I have lost my keys."
        }
      ]
    },
    "drag": {
      "intro": "Соедини слово-маркёр с временем, в которое оно тянет.",
      "pairs": [
        [
          "yesterday",
          "конкретный момент → Past"
        ],
        [
          "ever",
          "опыт за жизнь → Perfect"
        ],
        [
          "in 2019",
          "конкретный год → Past"
        ],
        [
          "just",
          "связь с сейчас → Perfect"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по самому важному выбору недели. Три вопроса!",
      "items": [
        {
          "q": "I ___ this film last night.",
          "opts": [
            "have seen",
            "saw",
            "have see"
          ],
          "answer": 1,
          "explain": "есть «last night» → <b>Past Simple: saw</b>."
        },
        {
          "q": "Как спросить про опыт «Ты когда-нибудь был в Риме?»",
          "opts": [
            "Did you ever be in Rome?",
            "Have you ever been to Rome?"
          ],
          "answer": 1,
          "explain": "опыт → <b>Have you ever been to…</b>"
        },
        {
          "q": "___ to Italy. (опыт, без даты)",
          "opts": [
            "I was",
            "I have been",
            "I have been in"
          ],
          "answer": 1,
          "explain": "опыт без даты → <b>I have been to</b> Italy."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: Лена рассказывает про путешествия. Замечай, как опыт (Perfect) сменяется деталями (Past).",
      "title": "Travels",
      "sentences": [
        "I love travelling.",
        "I have been to many countries.",
        "I have been to Italy three times.",
        "I first went there in 2015.",
        "I have never been to Asia.",
        "But last year I went to Turkey.",
        "I have eaten a lot of strange food.",
        "In Turkey I tried a new dish.",
        "I have just booked a new trip.",
        "I leave on Monday!"
      ],
      "translation": "Я люблю путешествовать. Я была во многих странах. В Италии я была три раза. Впервые я поехала туда в 2015 году. Я никогда не была в Азии. Но в прошлом году я ездила в Турцию. Я съела много странной еды. В Турции я попробовала новое блюдо. Я только что забронировала новую поездку. Я уезжаю в понедельник!"
    },
    "essay": {
      "intro": "Расскажи про свои путешествия — что повидал(а) и когда именно.",
      "prompt": "Напиши 3–5 предложений. Сначала опыт (Present Perfect: I have been to…), потом деталь с «когда» (Past: I went in…).",
      "hint": "Структуры: I have been to… ; I went there in… ; I have never been to… ; Last year I visited…",
      "example": "I have been to four countries. I went to Italy in 2018. I have never been to America. But last year I visited France. I loved it!"
    },
    "picture": {
      "intro": "Опиши по картинке опыт путешественника и одну конкретную поездку.",
      "emoji": "✈️🗺️📸",
      "prompt": "Опиши, где человек бывал (Perfect) и куда ездил в конкретный год (Past).",
      "hint": "Используй: I have been to many places; I went to Spain in 2019.",
      "example": "I have been to many places. I have never been to Japan. I went to Spain in 2019. It was great.",
      "img": "img/a2/day-12.jpg",
      "credit": "Фото: John K Thorne · CC0 · <a href=\"https://www.flickr.com/photos/89918055@N05/33568939098\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "13": {
    "day": 13,
    "week": "02",
    "level": "A2",
    "themeRu": "Что я повидал",
    "themeEn": "Experiences",
    "intro": "Где ты успел(а) побывать, что попробовать, что повидать? Сегодня день удовольствия: собираем весь <b>Present Perfect</b> и учимся красиво рассказывать о своей жизни. <b>Have you ever…?</b>, <b>I have never…</b>, <b>How long…?</b> — всё это уже твоё, сегодня закрепляем и оживляем в разговоре. И держим в уме главную ловушку: назвал(а) конкретный момент — <b>yesterday</b>, <b>in 2019</b> — сразу переходи на Past.",
    "introAudio": "Где ты успел побывать, что попробовать, что повидать? Сегодня день удовольствия: собираем весь Present Perfect и учимся красиво рассказывать о своей жизни. Have you ever…?, I have never…, How long…? — всё это уже твоё, сегодня закрепляем и оживляем в разговоре. И держим в уме главную ловушку: назвал конкретный момент — yesterday, in 2019 — сразу переходи на Past.",
    "goals": [
      "свободно рассказывать о жизненном опыте в Present Perfect",
      "спрашивать и отвечать: Have you ever…? — Yes, I have / No, never",
      "говорить, сколько раз ты что-то делал: <b>once</b>, <b>twice</b>, <b>three times</b>",
      "не сбиваться: конкретный момент (yesterday, in 2019) → Past Simple"
    ],
    "learned": [
      "Свободно рассказал(а) о жизненном опыте в Present Perfect",
      "Спросил(а) и ответил(а): Have you ever…? — Yes, I have / No, never",
      "Сказал(а), сколько раз что-то делал(а): <b>once</b>, <b>twice</b>, <b>three times</b>",
      "Не сбился(лась): конкретный момент (yesterday, in 2019) перевёл(а) в Past Simple"
    ],
    "review": {
      "intro": "Разомнёмся вчерашним выбором: Present Perfect или Past Simple? Помни: есть конкретное «когда» → Past.",
      "introAudio": "Разомнёмся вчерашним выбором: Present Perfect или Past Simple? Помни: есть конкретное когда → Past.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> есть «когда»? тогда Past.",
          "q": "I ___ this film last week.",
          "opts": [
            "have seen",
            "saw",
            "have see"
          ],
          "answer": 1,
          "explain": "есть «last week» → <b>Past Simple: saw</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери вопрос про опыт.",
          "q": "Собери: «Ты когда-нибудь был в Риме?»",
          "want": "Have you ever been to Rome",
          "answer": "Have you ever been to Rome"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · опыт за жизнь",
        "title": "<em>Have you ever…?</em> — главный вопрос о жизни",
        "paras": [
          "Когда мы говорим о жизненном опыте «за все годы, неважно когда», работает Present Perfect. Вопрос — <b>Have you ever…?</b> (Ты когда-нибудь…?): <b>Have you ever ridden a horse?</b>",
          "Ответы: <b>Yes, I have.</b> / <b>No, I haven't.</b> / <b>No, I have never done that.</b> Можно добавить чувство: <b>I have always wanted to.</b> (всегда хотел).",
          "Это идеальный «светский» вопрос: им начинают разговор, знакомятся, узнают друг друга. Запомни связку <b>Have you ever + 3-я форма</b>."
        ],
        "audio": "Когда говорим о жизненном опыте, неважно когда, работает Present Perfect. Вопрос — Have you ever…? Ты когда-нибудь…? Have you ever ridden a horse? Ответы: Yes, I have. No, I haven't. No, I have never done that. Запомни связку: Have you ever плюс третья форма.",
        "table": {
          "rows": [
            [
              "Have you ever flown a plane?",
              "Ты когда-нибудь летал на самолёте?"
            ],
            [
              "Yes, I have. / No, I haven't.",
              "Да / Нет"
            ],
            [
              "I have never done that.",
              "Я никогда такого не делал."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Ты когда-нибудь катался на лошади?",
            "en": "<b>Have</b> you <b>ever ridden</b> a horse?",
            "gloss": "ride → ridden",
            "say": "Have you ever ridden a horse?"
          },
          {
            "ru": "Ты когда-нибудь выигрывал приз?",
            "en": "<b>Have</b> you <b>ever won</b> a prize?",
            "gloss": "win → won",
            "say": "Have you ever won a prize?"
          },
          {
            "ru": "Я никогда не пробовал устрицы.",
            "en": "I <b>have never tried</b> oysters.",
            "gloss": "never + tried",
            "say": "I have never tried oysters."
          },
          {
            "ru": "Я всегда хотел научиться плавать.",
            "en": "I <b>have always wanted</b> to learn to swim.",
            "gloss": "always + wanted",
            "say": "I have always wanted to learn to swim."
          }
        ],
        "mistakes": [
          {
            "wrong": "Have you ever rode a horse?",
            "right": "Have you ever <b>ridden</b> a horse?",
            "why": "нужна 3-я форма: ride → ridden (rode — это Past)"
          },
          {
            "wrong": "Did you ever win a prize?",
            "right": "<b>Have</b> you ever <b>won</b> a prize?",
            "why": "опыт за жизнь → Present Perfect"
          }
        ],
        "mnemonic": "🌟 Опыт жизни: Have you ever + 3-я форма? — Yes, I have / No, never.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вопрос про опыт.",
            "q": "«Ты когда-нибудь летал на самолёте?» —",
            "opts": [
              "Did you ever fly a plane?",
              "Have you ever flown a plane?",
              "Are you ever flying a plane?"
            ],
            "answer": 1,
            "explain": "опыт → <b>Have you ever flown…</b> (fly → flown)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши с never. try → tried.",
            "q": "Я никогда не пробовал устрицы.",
            "accept": [
              "i have never tried oysters"
            ],
            "placeholder": "I have never ..."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вопрос вслух.",
            "target": "Have you ever ridden a horse?",
            "sub": "Ты когда-нибудь катался на лошади?",
            "want": "ever"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · сколько раз",
        "title": "<em>once, twice, three times</em> — сколько раз",
        "paras": [
          "Раз опыт можно посчитать, добавим «сколько раз». <b>once</b> (один раз), <b>twice</b> (дважды), <b>three times</b> (три раза), <b>many times</b> (много раз).",
          "Эти слова живут в Present Perfect: <b>I have been to Italy twice.</b> = Я был в Италии дважды. <b>I have seen this film many times.</b>",
          "Если совсем ни разу — это уже <b>never</b>: <b>I have never been there.</b> А «впервые» — <b>It's the first time I have…</b>"
        ],
        "audio": "Раз опыт можно посчитать, добавим сколько раз. once — один раз, twice — дважды, three times — три раза, many times — много раз. I have been to Italy twice. I have seen this film many times. Ни разу — never: I have never been there.",
        "table": {
          "rows": [
            [
              "once",
              "один раз"
            ],
            [
              "twice",
              "дважды"
            ],
            [
              "three times",
              "три раза"
            ],
            [
              "many times",
              "много раз"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я был в Лондоне дважды.",
            "en": "I <b>have been</b> to London <b>twice</b>.",
            "gloss": "twice = 2 раза",
            "say": "I have been to London twice."
          },
          {
            "ru": "Я смотрел это много раз.",
            "en": "I <b>have seen</b> it <b>many times</b>.",
            "gloss": "many times",
            "say": "I have seen it many times."
          },
          {
            "ru": "Она была там один раз.",
            "en": "She <b>has been</b> there <b>once</b>.",
            "gloss": "once = 1 раз",
            "say": "She has been there once."
          },
          {
            "ru": "Это мой первый полёт.",
            "en": "It's the <b>first time</b> I <b>have flown</b>.",
            "gloss": "first time + have flown",
            "say": "It's the first time I have flown."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have been to Italy two times ago",
            "right": "I have been to Italy <b>twice</b>",
            "why": "дважды — twice; «ago» тут не нужно"
          },
          {
            "wrong": "I was there twice (про опыт вообще)",
            "right": "I <b>have been</b> there twice",
            "why": "опыт-счёт за жизнь → Present Perfect"
          }
        ],
        "mnemonic": "🔢 once · twice · three times — счёт опыта в Present Perfect.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери «дважды».",
            "q": "«Я был там дважды» —",
            "opts": [
              "I was there twice",
              "I have been there twice",
              "I have been there two"
            ],
            "answer": 1,
            "explain": "опыт-счёт → <b>have been there twice</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу.",
            "q": "Собери: «Я смотрел это много раз»",
            "want": "I have seen it many times",
            "answer": "I have seen it many times"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери слово «один раз».",
            "q": "I have met him ___.",
            "opts": [
              "once",
              "one time ago",
              "first"
            ],
            "answer": 0,
            "explain": "один раз — <b>once</b>."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Назвал момент — уходи в <em>Past</em>",
        "paras": [
          "Закрепляем главное предостережение недели. Present Perfect — пока «когда» неизвестно или неважно. Но стоит назвать конкретный момент — <b>yesterday</b>, <b>two days ago</b>, <b>in 2019</b>, <b>last summer</b> — и нужно Past Simple.",
          "Сравни: <b>I have seen that film.</b> (опыт) → <b>I saw that film two days ago.</b> (есть «два дня назад»). Одно и то же кино, но время другое.",
          "Мини-проверка: мысленно спроси «а когда?». Если в предложении есть точный ответ — это Past. Если ответа нет и он неважен — Present Perfect."
        ],
        "audio": "Закрепляем главное предостережение недели. Present Perfect — пока когда неизвестно или неважно. Но назвал конкретный момент — yesterday, two days ago, in 2019, last summer — нужно Past Simple. I have seen that film — опыт. I saw that film two days ago — есть два дня назад. Спроси себя: а когда? Есть точный ответ — это Past.",
        "table": {
          "rows": [
            [
              "I have seen that film.",
              "Я видел этот фильм (опыт) — Perfect"
            ],
            [
              "I saw it two days ago.",
              "Видел два дня назад — Past"
            ],
            [
              "есть точное «когда»?",
              "да → Past, нет → Perfect"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я был в Берлине.",
            "en": "I <b>have been</b> to Berlin.",
            "gloss": "опыт → Perfect",
            "say": "I have been to Berlin."
          },
          {
            "ru": "Я был в Берлине два года назад.",
            "en": "I <b>was</b> in Berlin two years ago.",
            "gloss": "«два года назад» → Past",
            "say": "I was in Berlin two years ago."
          },
          {
            "ru": "Ты когда-нибудь встречал звезду?",
            "en": "<b>Have</b> you ever <b>met</b> a star?",
            "gloss": "опыт → Perfect",
            "say": "Have you ever met a star?"
          },
          {
            "ru": "Я встретил его вчера.",
            "en": "I <b>met</b> him yesterday.",
            "gloss": "«вчера» → Past",
            "say": "I met him yesterday."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have met him two days ago",
            "right": "I <b>met</b> him two days ago",
            "why": "есть «two days ago» → Past Simple"
          },
          {
            "wrong": "I have been to Berlin in 2019",
            "right": "I <b>was</b> in Berlin in 2019",
            "why": "есть «in 2019» → Past Simple"
          }
        ],
        "mnemonic": "⏱️ Назвал точный момент (yesterday, in 2019) → Past Simple.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> есть «два дня назад» — какое время?",
            "q": "I ___ this film two days ago.",
            "opts": [
              "have seen",
              "saw",
              "have see"
            ],
            "answer": 1,
            "explain": "есть «two days ago» → <b>Past Simple: saw</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> опыт без даты — какое время?",
            "q": "___ to Berlin. (опыт, неважно когда)",
            "opts": [
              "I was",
              "I have been",
              "I did go"
            ],
            "answer": 1,
            "explain": "опыт без даты → <b>have been to</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. Есть «yesterday» → Past. meet → met.",
            "q": "Я встретил его вчера.",
            "accept": [
              "i met him yesterday"
            ],
            "placeholder": "I ... him yesterday"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · рассказ о себе",
        "title": "Собираем рассказ: <em>ever, never, How long</em>",
        "paras": [
          "Теперь соберём живой рассказ о себе. Опыт: <b>I have been to…</b>, <b>I have tried…</b>, <b>I have never…</b>. Длительность: <b>I have lived here for…</b>, <b>since…</b>.",
          "Хороший рассказ чередует: что повидал (Perfect) → одна конкретная история (Past). <b>I have been to Italy. I went there in 2018 and loved it.</b>",
          "Так звучит естественная речь о жизни: общий опыт в Present Perfect плюс пара ярких деталей в Past Simple."
        ],
        "audio": "Соберём живой рассказ о себе. Опыт: I have been to, I have tried, I have never. Длительность: I have lived here for, since. Хороший рассказ чередует: что повидал в Perfect, потом конкретная история в Past. I have been to Italy. I went there in 2018 and loved it.",
        "table": {
          "rows": [
            [
              "I have been to many places.",
              "Я бывал во многих местах — опыт"
            ],
            [
              "I have lived here for ten years.",
              "Живу тут десять лет — длительность"
            ],
            [
              "I went to Italy in 2018.",
              "Ездил в Италию в 2018 — деталь"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я много путешествовал.",
            "en": "I <b>have travelled</b> a lot.",
            "gloss": "опыт → Perfect",
            "say": "I have travelled a lot."
          },
          {
            "ru": "Я живу в этом городе пять лет.",
            "en": "I <b>have lived</b> in this city for five years.",
            "gloss": "длительность → for",
            "say": "I have lived in this city for five years."
          },
          {
            "ru": "Я никогда не был за границей.",
            "en": "I <b>have never been</b> abroad.",
            "gloss": "never → Perfect",
            "say": "I have never been abroad."
          },
          {
            "ru": "В прошлом году я попробовал сёрфинг.",
            "en": "Last year I <b>tried</b> surfing.",
            "gloss": "«last year» → Past",
            "say": "Last year I tried surfing."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have travelled a lot last year",
            "right": "I travelled a lot <b>last year</b>",
            "why": "есть «last year» → Past; без даты = have travelled"
          },
          {
            "wrong": "I live here for five years",
            "right": "I <b>have lived</b> here for five years",
            "why": "длится до сих пор → Present Perfect"
          }
        ],
        "mnemonic": "📖 Опыт (Perfect) + длительность (for/since) + деталь (Past) = рассказ о жизни.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> длится сейчас — какое время?",
            "q": "I ___ in this city for ten years.",
            "opts": [
              "live",
              "have lived",
              "am living"
            ],
            "answer": 1,
            "explain": "длится до сих пор → <b>have lived</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу про опыт.",
            "q": "Собери: «Я никогда не был за границей»",
            "want": "I have never been abroad",
            "answer": "I have never been abroad"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. Опыт без даты → Perfect. travel → travelled.",
            "q": "Я много путешествовал.",
            "accept": [
              "i have travelled a lot",
              "i have traveled a lot"
            ],
            "placeholder": "I have travelled ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том играют в «а ты когда-нибудь…?». Слушай опыт и переход в Past, когда называют момент.",
      "lines": [
        {
          "who": "A",
          "en": "Have you ever ridden a horse?",
          "ru": "Ты когда-нибудь катался на лошади?"
        },
        {
          "who": "B",
          "en": "Yes, I have! I rode one in 2019.",
          "ru": "Да! Я катался в 2019 году."
        },
        {
          "who": "A",
          "en": "Wow. I have never tried it.",
          "ru": "Ого. А я никогда не пробовала."
        },
        {
          "who": "B",
          "en": "Have you ever been abroad?",
          "ru": "А за границей ты бывала?"
        },
        {
          "who": "A",
          "en": "Yes, twice. I went to France last year.",
          "ru": "Да, дважды. В прошлом году ездила во Францию."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — про опыт и счёт. Повтори вслух.",
      "items": [
        {
          "en": "experience",
          "ru": "опыт",
          "ex": "It was a great experience."
        },
        {
          "en": "once",
          "ru": "один раз / однажды",
          "ex": "I have been there once."
        },
        {
          "en": "twice",
          "ru": "дважды",
          "ex": "I have seen it twice."
        },
        {
          "en": "three times",
          "ru": "три раза",
          "ex": "I have called three times."
        },
        {
          "en": "abroad",
          "ru": "за границу / за границей",
          "ex": "I have never been abroad."
        },
        {
          "en": "to try / tried",
          "ru": "пробовать / пробовал",
          "ex": "Have you ever tried it?"
        },
        {
          "en": "to win / won",
          "ru": "выигрывать / выиграл",
          "ex": "I have won a prize."
        },
        {
          "en": "to ride / ridden",
          "ru": "кататься (ride, 3-я форма)",
          "ex": "I have ridden a camel."
        },
        {
          "en": "always",
          "ru": "всегда",
          "ex": "I have always wanted to go."
        }
      ]
    },
    "drag": {
      "intro": "Соедини английскую форму с переводом.",
      "pairs": [
        [
          "twice",
          "дважды"
        ],
        [
          "abroad",
          "за границей"
        ],
        [
          "won",
          "выиграл"
        ],
        [
          "ridden",
          "катался (3-я форма)"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по опыту. Три вопроса — и предпоследний день недели закрыт!",
      "items": [
        {
          "q": "«Ты когда-нибудь выигрывал приз?» —",
          "opts": [
            "Did you ever win a prize?",
            "Have you ever won a prize?"
          ],
          "answer": 1,
          "explain": "опыт → <b>Have you ever won…</b>"
        },
        {
          "q": "«Я был там дважды» —",
          "opts": [
            "I was there twice",
            "I have been there twice"
          ],
          "answer": 1,
          "explain": "опыт-счёт → <b>have been there twice</b>."
        },
        {
          "q": "I ___ him two days ago.",
          "opts": [
            "have met",
            "met",
            "have meet"
          ],
          "answer": 1,
          "explain": "есть «two days ago» → <b>Past Simple: met</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: Денис рассказывает, что повидал в жизни. Замечай Perfect (опыт) и Past (детали).",
      "title": "Things I have done",
      "sentences": [
        "I have done a lot in my life.",
        "I have been abroad many times.",
        "I have ridden a horse and a camel.",
        "I once won a cooking prize.",
        "I have tried food from many countries.",
        "Last year I tried surfing for the first time.",
        "I have never been to South America.",
        "I have always wanted to see Brazil.",
        "I have lived in three different cities.",
        "My life has been full of adventures!"
      ],
      "translation": "Я многое успел в жизни. Я много раз был за границей. Я катался на лошади и на верблюде. Однажды я выиграл приз по кулинарии. Я пробовал еду из многих стран. В прошлом году я впервые попробовал сёрфинг. Я никогда не был в Южной Америке. Я всегда хотел увидеть Бразилию. Я жил в трёх разных городах. Моя жизнь была полна приключений!"
    },
    "essay": {
      "intro": "Расскажи, что ты повидал(а) в жизни — самое интересное.",
      "prompt": "Напиши 3–5 предложений про свой опыт. Используй: I have been to…, I have tried…, I have never…, и одну деталь в Past (I went… in…).",
      "hint": "Структуры: I have been to… ; I have tried… ; I have never… ; I have always wanted to… ; Last year I…",
      "example": "I have been abroad twice. I have tried Italian and Japanese food. I have never ridden a horse. But I have always wanted to. Last year I went to Spain and loved it."
    },
    "picture": {
      "intro": "Опиши по картинке, что человек повидал в жизни.",
      "emoji": "🐎🌍🏆",
      "prompt": "Опиши опыт человека. Используй I have ridden…, I have been to…, I have won…",
      "hint": "Используй: I have ridden a horse; I have been abroad; I have won a prize.",
      "example": "I have ridden a horse. I have been abroad many times. I have won a prize. But I have never tried surfing.",
      "img": "img/a2/day-13.jpg",
      "credit": "Фото: YellowstoneNPS · Public Domain · <a href=\"https://www.flickr.com/photos/80223459@N05/16165901343\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "14": {
    "day": 14,
    "week": "02",
    "level": "A2",
    "themeRu": "Повторение №2",
    "themeEn": "Review 2",
    "intro": "Самая трудная неделя A2 позади — а ты справился(ась). Шесть дней мы строили <b>Present Perfect</b>, время, которого в русском просто нет. Сегодня нового не берём: спокойно сводим всё в одну картину — форму <b>have/has + 3-я форма</b>, <b>ever/never</b>, <b>been/gone</b>, <b>just/already/yet</b>, <b>for/since</b> и главный выбор <b>Present Perfect vs Past Simple</b>. Много лёгкой практики, диалог и мини-тест. Ты большой(ая) молодец.",
    "introAudio": "Самая трудная неделя A2 позади — а ты справился. Шесть дней мы строили Present Perfect, время, которого в русском просто нет. Сегодня нового не берём: спокойно сводим всё в одну картину — форму have или has плюс третья форма, ever и never, been и gone, just, already, yet, for и since, и главный выбор Present Perfect или Past Simple. Много лёгкой практики, диалог и мини-тест. Ты молодец.",
    "goals": [
      "уверенно строить Present Perfect: have/has + 3-я форма",
      "не путать been (был и вернулся) и gone (уехал и ещё там)",
      "правильно ставить just/already/yet и выбирать for или since",
      "осознанно выбирать между Present Perfect и Past Simple"
    ],
    "learned": [
      "Уверенно построил(а) Present Perfect: have/has + 3-я форма",
      "Перестал(а) путать been (был и вернулся) и gone (уехал и ещё там)",
      "Правильно поставил(а) just/already/yet и выбрал(а) for или since",
      "Осознанно выбрал(а) между Present Perfect и Past Simple"
    ],
    "review": {
      "intro": "Сегодня всё занятие — повторение. Начнём с быстрой разминки по всей неделе: форма Present Perfect и опыт.",
      "introAudio": "Сегодня всё занятие — повторение. Начнём с быстрой разминки по всей неделе: форма Present Perfect и опыт.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери форму Present Perfect.",
          "q": "«Я (уже) видел это» —",
          "opts": [
            "I have see it",
            "I have seen it",
            "I has seen it"
          ],
          "answer": 1,
          "explain": "have + 3-я форма: <b>seen</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери вопрос про опыт.",
          "q": "Собери: «Ты когда-нибудь был в Лондоне?»",
          "want": "Have you ever been to London",
          "answer": "Have you ever been to London"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · форма и опыт",
        "title": "Сердце недели: <em>have/has + 3-я форма</em>",
        "paras": [
          "Главная конструкция всей недели: <b>have</b> (или <b>has</b> для he/she/it) + <b>3-я форма</b> глагола. <b>I have seen.</b> <b>She has done.</b> Правильные глаголы берут -ed, неправильные надо знать: be→been, see→seen, do→done, go→gone, eat→eaten.",
          "Опыт за жизнь: <b>Have you ever…?</b> — вопрос, <b>I have never…</b> — ответ «ни разу». Одно never, без второго отрицания.",
          "Отрицание — <b>haven't / hasn't</b>, короткий ответ — <b>Yes, I have. / No, I haven't.</b> (повторяем только have/has)."
        ],
        "audio": "Главная конструкция недели: have, или has для он-она-оно, плюс третья форма. I have seen. She has done. Неправильные надо знать: be been, see seen, do done, go gone, eat eaten. Опыт: Have you ever…? — I have never… Отрицание: haven't, hasn't.",
        "table": {
          "rows": [
            [
              "I/you/we/they",
              "have + 3-я форма"
            ],
            [
              "he/she/it",
              "has + 3-я форма"
            ],
            [
              "Have you ever…?",
              "Ты когда-нибудь…?"
            ],
            [
              "I have never…",
              "Я никогда не…"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я видел этот фильм.",
            "en": "I <b>have seen</b> this film.",
            "gloss": "have + seen",
            "say": "I have seen this film."
          },
          {
            "ru": "Она сделала задание.",
            "en": "She <b>has done</b> the task.",
            "gloss": "has + done",
            "say": "She has done the task."
          },
          {
            "ru": "Ты когда-нибудь ел суши?",
            "en": "<b>Have</b> you <b>ever eaten</b> sushi?",
            "gloss": "ever + eaten",
            "say": "Have you ever eaten sushi?"
          },
          {
            "ru": "Я никогда не был в Париже.",
            "en": "I <b>have never been</b> to Paris.",
            "gloss": "never + been",
            "say": "I have never been to Paris."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have see it",
            "right": "I have <b>seen</b> it",
            "why": "нужна 3-я форма: see → seen"
          },
          {
            "wrong": "She have done it",
            "right": "She <b>has</b> done it",
            "why": "he/she/it → has"
          }
        ],
        "mnemonic": "🎒 have/has + 3-я форма = опыт за плечами.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери have или has.",
            "q": "She ___ finished her work.",
            "opts": [
              "have",
              "has",
              "is"
            ],
            "answer": 1,
            "explain": "he/she/it → <b>has</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму.",
            "q": "«Я (уже) сделал это» —",
            "opts": [
              "I have did it",
              "I have done it",
              "I have do it"
            ],
            "answer": 1,
            "explain": "do → 3-я форма <b>done</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши вопрос про опыт. eat → eaten.",
            "q": "Ты когда-нибудь ел суши?",
            "accept": [
              "have you ever eaten sushi"
            ],
            "placeholder": "Have you ever ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · been/gone и спутники",
        "title": "<em>been ↔ gone</em> и <em>just / already / yet</em>",
        "paras": [
          "Не путай: <b>been</b> — был и вернулся (<b>I have been to Paris.</b> — я там бывал, я уже дома). <b>gone</b> — уехал и ещё там (<b>She has gone to Paris.</b> — её сейчас нет).",
          "Слова-спутники: <b>just</b> (только что) и <b>already</b> (уже) — в середине, после have/has. <b>I have just eaten.</b> <b>I have already seen it.</b>",
          "<b>yet</b> (ещё) — в конце, в вопросах и отрицаниях: <b>Have you finished yet?</b> <b>I haven't finished yet.</b>"
        ],
        "audio": "Не путай: been — был и вернулся, I have been to Paris, я уже дома. gone — уехал и ещё там, She has gone to Paris, её сейчас нет. Слова-спутники: just и already — в середине, после have. yet — в конце, в вопросах и отрицаниях: Have you finished yet?",
        "table": {
          "rows": [
            [
              "I have been to Paris.",
              "был и вернулся"
            ],
            [
              "She has gone to Paris.",
              "уехала, ещё там"
            ],
            [
              "I have just / already eaten.",
              "только что / уже (в середине)"
            ],
            [
              "Have you finished yet?",
              "ещё (в конце)"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я был в Риме (и вернулся).",
            "en": "I <b>have been</b> to Rome.",
            "gloss": "been = вернулся",
            "say": "I have been to Rome."
          },
          {
            "ru": "Он уехал в Рим (его нет).",
            "en": "He <b>has gone</b> to Rome.",
            "gloss": "gone = ещё там",
            "say": "He has gone to Rome."
          },
          {
            "ru": "Я только что пообедал.",
            "en": "I <b>have just</b> had lunch.",
            "gloss": "just — в середине",
            "say": "I have just had lunch."
          },
          {
            "ru": "Ты уже закончил?",
            "en": "<b>Have</b> you finished <b>yet</b>?",
            "gloss": "yet — в конце",
            "say": "Have you finished yet?"
          }
        ],
        "mistakes": [
          {
            "wrong": "She has been to Paris (а её сейчас нет дома)",
            "right": "She has <b>gone</b> to Paris",
            "why": "уехала и ещё там → gone, не been"
          },
          {
            "wrong": "Have you yet finished?",
            "right": "Have you finished <b>yet</b>?",
            "why": "yet — в конце предложения"
          }
        ],
        "mnemonic": "🔁 been = вернулся · gone = ещё там · yet — в конце вопроса.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> вернулся (been) или ещё там (gone)?",
            "q": "Тома нет — он уехал в Лондон. «He has ___ to London.»",
            "opts": [
              "been",
              "gone",
              "go"
            ],
            "answer": 1,
            "explain": "уехал и ещё там → <b>gone</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> куда поставить yet?",
            "q": "«Я ещё не закончил» —",
            "opts": [
              "I haven't yet finished",
              "I haven't finished yet",
              "I yet haven't finished"
            ],
            "answer": 1,
            "explain": "yet — в конце: <b>I haven't finished yet</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу с just.",
            "q": "Собери: «Я только что поел»",
            "want": "I have just eaten",
            "answer": "I have just eaten"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · for/since и выбор",
        "title": "<em>for / since</em> и <em>Perfect</em> vs <em>Past</em>",
        "paras": [
          "Как долго: <b>for</b> — отрезок (<b>for five years</b>), <b>since</b> — точка (<b>since 2015</b>). Если ситуация длится до сих пор — Present Perfect: <b>I have lived here for five years.</b>",
          "И главный выбор недели: есть конкретное «когда» (<b>yesterday</b>, <b>in 2019</b>, <b>last week</b>) → <b>Past Simple</b>. Опыт или результат сейчас → <b>Present Perfect</b>.",
          "Сравни: <b>I have been to Italy.</b> (опыт) и <b>I went to Italy in 2018.</b> (есть «в 2018»). Назвал момент — переходи на Past."
        ],
        "audio": "Как долго: for — отрезок, for five years. since — точка, since 2015. Если ситуация длится до сих пор — Present Perfect: I have lived here for five years. И главный выбор: есть конкретное когда, yesterday, in 2019 — Past Simple. Опыт или результат сейчас — Present Perfect. I have been to Italy — опыт. I went to Italy in 2018 — есть в 2018.",
        "table": {
          "rows": [
            [
              "for five years",
              "отрезок"
            ],
            [
              "since 2015",
              "точка"
            ],
            [
              "I have been to Italy.",
              "опыт → Perfect"
            ],
            [
              "I went there in 2018.",
              "есть «когда» → Past"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я живу здесь пять лет.",
            "en": "I <b>have lived</b> here for five years.",
            "gloss": "длится → Perfect + for",
            "say": "I have lived here for five years."
          },
          {
            "ru": "Я работаю тут с мая.",
            "en": "I <b>have worked</b> here since May.",
            "gloss": "since + точка",
            "say": "I have worked here since May."
          },
          {
            "ru": "Я был в Италии (опыт).",
            "en": "I <b>have been</b> to Italy.",
            "gloss": "опыт → Perfect",
            "say": "I have been to Italy."
          },
          {
            "ru": "Я ездил в Италию в 2018.",
            "en": "I <b>went</b> to Italy in 2018.",
            "gloss": "«в 2018» → Past",
            "say": "I went to Italy in 2018."
          }
        ],
        "mistakes": [
          {
            "wrong": "I live here for five years",
            "right": "I <b>have lived</b> here for five years",
            "why": "длится до сих пор → Present Perfect"
          },
          {
            "wrong": "I have seen him yesterday",
            "right": "I <b>saw</b> him yesterday",
            "why": "есть «yesterday» → Past Simple"
          }
        ],
        "mnemonic": "🔑 for/since + длится → Perfect. Назвал «когда» → Past.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> for (отрезок) или since (точка)?",
            "q": "I have worked here ___ three years.",
            "opts": [
              "since",
              "for",
              "from"
            ],
            "answer": 1,
            "explain": "три года — отрезок → <b>for</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> есть «когда»? тогда Past.",
            "q": "I ___ to Italy in 2018.",
            "opts": [
              "have been",
              "went",
              "have gone"
            ],
            "answer": 1,
            "explain": "есть «in 2018» → <b>Past Simple: went</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. Длится сейчас → Perfect. live → lived.",
            "q": "Я живу здесь пять лет.",
            "accept": [
              "i have lived here for five years"
            ],
            "placeholder": "I have lived ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том подводят итог недели — болтают про опыт, поездки и сроки. Здесь вся неделя сразу.",
      "lines": [
        {
          "who": "A",
          "en": "We have learned so much this week!",
          "ru": "Мы так много выучили на этой неделе!"
        },
        {
          "who": "B",
          "en": "I know! Have you ever spoken English like this before?",
          "ru": "И не говори! Ты раньше так говорил по-английски?"
        },
        {
          "who": "A",
          "en": "No, never! I have studied for only two weeks.",
          "ru": "Нет, никогда! Я учусь всего две недели."
        },
        {
          "who": "B",
          "en": "Tom has already gone home, but I have just finished.",
          "ru": "Том уже ушёл домой, а я только что закончила."
        },
        {
          "who": "A",
          "en": "Same here. We have done a great job!",
          "ru": "И я. Мы отлично поработали!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова и формы всей недели — повтори вслух, проверь себя.",
      "items": [
        {
          "en": "have/has been",
          "ru": "был / бывал (опыт)",
          "ex": "I have been to Rome."
        },
        {
          "en": "gone",
          "ru": "ушёл / уехал (ещё там)",
          "ex": "She has gone home."
        },
        {
          "en": "ever",
          "ru": "когда-либо",
          "ex": "Have you ever tried it?"
        },
        {
          "en": "never",
          "ru": "никогда (не)",
          "ex": "I have never been there."
        },
        {
          "en": "just",
          "ru": "только что",
          "ex": "I have just arrived."
        },
        {
          "en": "already",
          "ru": "уже",
          "ex": "I have already eaten."
        },
        {
          "en": "yet",
          "ru": "ещё (нет)",
          "ex": "I haven't finished yet."
        },
        {
          "en": "for",
          "ru": "в течение (отрезок)",
          "ex": "I have known her for five years."
        },
        {
          "en": "since",
          "ru": "с (точка)",
          "ex": "I have been here since 2015."
        }
      ]
    },
    "drag": {
      "intro": "Соедини слово недели с его значением.",
      "pairs": [
        [
          "been",
          "был и вернулся"
        ],
        [
          "gone",
          "уехал, ещё там"
        ],
        [
          "for",
          "отрезок времени"
        ],
        [
          "since",
          "точка во времени"
        ]
      ]
    },
    "quiz": {
      "intro": "Мини-тест по всей неделе Present Perfect — пять вопросов. Спокойно, ты всё это знаешь. Это была самая трудная неделя — и ты её прошёл(ла)!",
      "items": [
        {
          "q": "«Я (уже) видел этот фильм» —",
          "opts": [
            "I have see this film",
            "I have seen this film",
            "I has seen this film"
          ],
          "answer": 1,
          "explain": "have + 3-я форма: <b>seen</b>."
        },
        {
          "q": "Тома нет дома — он уехал в Париж. «He has ___ to Paris.»",
          "opts": [
            "been",
            "gone",
            "go"
          ],
          "answer": 1,
          "explain": "уехал и ещё там → <b>gone</b>."
        },
        {
          "q": "«Я ещё не закончил» —",
          "opts": [
            "I haven't finished yet",
            "I haven't yet finished",
            "I don't finished yet"
          ],
          "answer": 0,
          "explain": "yet — в конце: <b>I haven't finished yet</b>."
        },
        {
          "q": "I have lived here ___ 2015.",
          "opts": [
            "for",
            "since",
            "from"
          ],
          "answer": 1,
          "explain": "2015 — точка → <b>since</b>."
        },
        {
          "q": "I ___ him yesterday.",
          "opts": [
            "have seen",
            "saw",
            "have see"
          ],
          "answer": 1,
          "explain": "есть «yesterday» → <b>Past Simple: saw</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: итоговый рассказ Ани — вся неделя Present Perfect в одном тексте.",
      "title": "What I have done",
      "sentences": [
        "This week has been amazing.",
        "I have learned a new tense: Present Perfect.",
        "I have never studied so hard before.",
        "I have already done all the lessons.",
        "I have studied English for two weeks now.",
        "I have been to many lessons since the start.",
        "Yesterday I spoke English with a friend.",
        "I have just finished the hardest week.",
        "I haven't given up!",
        "I am very proud of myself."
      ],
      "translation": "Эта неделя была потрясающей. Я выучил новое время: Present Perfect. Я никогда раньше так усердно не учился. Я уже сделал все уроки. Я учу английский уже две недели. Я был на многих уроках с самого начала. Вчера я говорил по-английски с другом. Я только что закончил самую трудную неделю. Я не сдался! Я очень горжусь собой."
    },
    "essay": {
      "intro": "Подведи итог недели — расскажи, что ты успел(а) выучить и сделать.",
      "prompt": "Напиши 3–5 предложений про эту неделю. Используй Present Perfect (I have learned…, I have never…, I have just…) и одну деталь в Past (Yesterday I…).",
      "hint": "Структуры: I have learned… ; I have studied… for… ; I have never… ; I have just… ; Yesterday I…",
      "example": "I have learned Present Perfect this week. I have studied for two weeks now. I have never worked so hard. Yesterday I spoke English with a friend. I have just finished the hardest week!"
    },
    "picture": {
      "intro": "Опиши по картинке, чего человек добился за неделю учёбы.",
      "emoji": "📚✅🏆",
      "prompt": "Опиши, что человек уже сделал и выучил. Используй I have learned…, I have done…, I have just…",
      "hint": "Используй: I have learned a lot; I have done all the lessons; I have just finished the week.",
      "example": "I have learned a new tense. I have done all the lessons. I have studied for two weeks. I have just finished the hardest week!",
      "img": "img/a2/day-14.jpg",
      "credit": "Фото: Open Grid Scheduler / Grid Engine · CC0 · <a href=\"https://www.flickr.com/photos/29155878@N03/16915765068\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "15": {
    "day": 15,
    "week": "03",
    "level": "A2",
    "themeRu": "Я собираюсь",
    "themeEn": "be going to",
    "intro": "Привет! Открываем третью неделю — и разворачиваемся лицом к будущему. Начинаем с самого частого способа говорить о планах: <b>be going to</b>, то есть «я собираюсь», «я намерен». Ты уже мельком видел(а) его на A1 — теперь берём целиком. Мысль простая: я заранее решил что-то сделать и держу это в уме. Поехали.",
    "introAudio": "Привет! Открываем третью неделю — и разворачиваемся лицом к будущему. Начинаем с самого частого способа говорить о планах: be going to, то есть «я собираюсь», «я намерен». Ты уже мельком видел его на A1 — теперь берём целиком. Мысль простая: я заранее решил что-то сделать и держу это в уме. Поехали.",
    "goals": [
      "понять идею be going to: «я собираюсь», план, решённый заранее",
      "строить фразу <b>am/is/are + going to + базовая форма</b> глагола",
      "делать прогноз по фактам: Look at the clouds — it's going to rain",
      "спрашивать и отвечать про планы: Are you going to…? — I'm going to…"
    ],
    "learned": [
      "Понял(а) идею be going to: «я собираюсь», план, решённый заранее",
      "Построил(а) фразу <b>am/is/are + going to + базовая форма</b> глагола",
      "Сделал(а) прогноз по фактам: Look at the clouds — it's going to rain",
      "Спросил(а) и ответил(а) про планы: Are you going to…? — I'm going to…"
    ],
    "review": {
      "intro": "Сначала — короткая разминка из недели 2, Present Perfect. Это «опыт за плечами»: have/has + 3-я форма. Держим его в форме.",
      "introAudio": "Сначала короткая разминка из недели 2, Present Perfect. Это опыт за плечами: have или has плюс третья форма. Держим его в форме.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери форму Present Perfect.",
          "q": "«Я (уже) видел этот фильм» —",
          "opts": [
            "I have see this film",
            "I have seen this film",
            "I seen this film"
          ],
          "answer": 1,
          "explain": "have + 3-я форма: <b>seen</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери вопрос про опыт.",
          "q": "Собери: «Ты когда-нибудь был в Риме?»",
          "want": "Have you ever been to Rome",
          "answer": "Have you ever been to Rome"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · планы",
        "title": "«Я собираюсь» — <em>be going to</em>",
        "paras": [
          "Когда ты заранее решил что-то сделать, по-английски говорят <b>be going to</b> — «собираюсь». Это про планы и намерения: я уже решил, в голове есть план.",
          "Форма из трёх частей: <b>am/is/are</b> + <b>going to</b> + базовая форма глагола. <b>I am going to call</b> him. = Я собираюсь ему позвонить. <b>She is going to work</b> tonight. = Она будет (собирается) работать вечером.",
          "Коротко часто говорят: I'm going to, he's going to, they're going to. Главное — не менять сам глагол после going to: он всегда в базовой форме (call, work, buy)."
        ],
        "audio": "Когда ты заранее решил что-то сделать, говорят be going to — собираюсь. Форма из трёх частей: am, is или are, плюс going to, плюс базовая форма глагола. I am going to call him — я собираюсь ему позвонить. She is going to work tonight. Глагол после going to всегда в базовой форме.",
        "table": {
          "rows": [
            [
              "I",
              "am going to + базовая форма"
            ],
            [
              "he / she / it",
              "is going to + базовая форма"
            ],
            [
              "you / we / they",
              "are going to + базовая форма"
            ],
            [
              "сокращённо",
              "I'm · he's · we're going to"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я собираюсь купить машину.",
            "en": "I <b>am going to buy</b> a car.",
            "gloss": "am + going to + buy",
            "say": "I am going to buy a car."
          },
          {
            "ru": "Он собирается учить английский.",
            "en": "He <b>is going to learn</b> English.",
            "gloss": "is + going to + learn",
            "say": "He is going to learn English."
          },
          {
            "ru": "Мы собираемся пожениться.",
            "en": "We <b>are going to get</b> married.",
            "gloss": "are + going to + get",
            "say": "We are going to get married."
          },
          {
            "ru": "Они собираются переехать.",
            "en": "They <b>are going to move</b>.",
            "gloss": "are + going to + move",
            "say": "They are going to move."
          }
        ],
        "mistakes": [
          {
            "wrong": "I am going to buying a car",
            "right": "I am going to <b>buy</b> a car",
            "why": "после going to — базовая форма (buy), не buying"
          },
          {
            "wrong": "She going to work",
            "right": "She <b>is</b> going to work",
            "why": "нельзя без is/am/are: she is going to"
          }
        ],
        "mnemonic": "🎯 План на будущее: am/is/are + going to + базовая форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму.",
            "q": "«Я собираюсь позвонить ему» —",
            "opts": [
              "I going to call him",
              "I am going to call him",
              "I am going to calling him"
            ],
            "answer": 1,
            "explain": "am + going to + базовая форма: <b>I am going to call</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Она собирается купить телефон»",
            "want": "She is going to buy a phone",
            "answer": "She is going to buy a phone"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. move = переезжать.",
            "q": "Мы собираемся переехать.",
            "accept": [
              "we are going to move",
              "we're going to move"
            ],
            "placeholder": "We are going to ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · прогноз по фактам",
        "title": "Вижу — значит будет: <em>It's going to rain</em>",
        "paras": [
          "be going to нужен не только для планов. Им же делают прогноз, когда есть видимый знак прямо сейчас. Ты смотришь на небо и понимаешь: дождь близко.",
          "<b>Look at the clouds! It's going to rain.</b> = Посмотри на тучи! Сейчас пойдёт дождь. Доказательство перед глазами — поэтому going to, а не «will».",
          "Ещё знаки: машина едет слишком быстро → <b>They're going to crash.</b> Стакан на краю стола → <b>It's going to fall.</b> Видишь причину — говоришь going to."
        ],
        "audio": "be going to нужен не только для планов. Им делают прогноз, когда есть видимый знак прямо сейчас. Look at the clouds! It's going to rain — посмотри на тучи, сейчас пойдёт дождь. Доказательство перед глазами, поэтому going to.",
        "table": {
          "rows": [
            [
              "Look at the clouds!",
              "Тучи — знак перед глазами"
            ],
            [
              "It's going to rain.",
              "Сейчас пойдёт дождь — прогноз"
            ],
            [
              "They're going to crash!",
              "Они сейчас столкнутся"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Осторожно! Ты упадёшь.",
            "en": "Be careful! You <b>are going to fall</b>.",
            "gloss": "знак: стоишь неустойчиво",
            "say": "Be careful! You are going to fall."
          },
          {
            "ru": "Небо тёмное — будет гроза.",
            "en": "The sky is dark — it <b>is going to storm</b>.",
            "gloss": "знак: тёмное небо",
            "say": "The sky is dark, it is going to storm."
          },
          {
            "ru": "Машина едет слишком быстро!",
            "en": "The car is too fast — they <b>are going to crash</b>!",
            "say": "The car is too fast, they are going to crash!"
          },
          {
            "ru": "Осторожно — ты разольёшь это.",
            "en": "Be careful — you <b>are going to spill</b> it.",
            "gloss": "знак: чашка качается",
            "say": "Be careful, you are going to spill it."
          }
        ],
        "mistakes": [
          {
            "wrong": "Look! It will rain",
            "right": "Look! It <b>is going to</b> rain",
            "why": "есть знак перед глазами (тучи) → going to, не will"
          }
        ],
        "mnemonic": "👀 Вижу знак сейчас → going to: Look! It's going to rain.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> на небе тучи, выбери прогноз.",
            "q": "Тучи на небе. Как сказать «Будет дождь»?",
            "opts": [
              "It rains",
              "It is going to rain",
              "It rained"
            ],
            "answer": 1,
            "explain": "есть знак (тучи) → прогноз через <b>going to</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери прогноз.",
            "q": "Собери: «Сейчас пойдёт дождь»",
            "want": "It is going to rain",
            "answer": "It is going to rain"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Не <em>will going</em>, а going to + базовая форма",
        "paras": [
          "Здесь две частые ошибки русскоязычных. Первая: смешать will и going to в одно. <b>I will going</b> — так нельзя никогда. Либо <b>I will go</b>, либо <b>I am going to go</b>. Вместе — нет.",
          "Вторая: бояться сочетания <b>going to go</b>. Кажется, что два «go» — это лишнее. Но это норма! <b>I'm going to go</b> to the gym. = Я собираюсь пойти в зал. Первое going to — «собираюсь», второе go — сам глагол «идти».",
          "Запомни формулу: после <b>going to</b> всегда стоит базовая форма любого глагола — даже если этот глагол сам go. going to + go, going to + see, going to + buy."
        ],
        "audio": "Здесь две частые ошибки. Первая: смешать will и going to. I will going — так нельзя. Либо I will go, либо I am going to go. Вторая: бояться сочетания going to go. Но это норма! I'm going to go to the gym — я собираюсь пойти в зал. После going to всегда базовая форма, даже если глагол сам go.",
        "table": {
          "rows": [
            [
              "❌ I will going",
              "так нельзя никогда"
            ],
            [
              "✅ I am going to go",
              "я собираюсь пойти — норма"
            ],
            [
              "going to + go / see / buy",
              "после going to — базовая форма"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я собираюсь пойти в зал.",
            "en": "I'm <b>going to go</b> to the gym.",
            "gloss": "going to + go — норма",
            "say": "I'm going to go to the gym."
          },
          {
            "ru": "Мы собираемся посмотреть фильм.",
            "en": "We're <b>going to see</b> a film.",
            "gloss": "going to + see",
            "say": "We're going to see a film."
          },
          {
            "ru": "Она собирается лечь спать рано.",
            "en": "She's <b>going to go</b> to bed early.",
            "say": "She's going to go to bed early."
          },
          {
            "ru": "Я собираюсь поесть что-нибудь.",
            "en": "I'm <b>going to eat</b> something.",
            "say": "I'm going to eat something."
          }
        ],
        "mistakes": [
          {
            "wrong": "I will going to the party",
            "right": "I am <b>going to go</b> to the party",
            "why": "«will going» не существует; план → going to + базовая форма"
          },
          {
            "wrong": "I'm going to going to the gym",
            "right": "I'm <b>going to go</b> to the gym",
            "why": "после going to — базовая форма: go, не going"
          }
        ],
        "mnemonic": "🔁 going to + go — это норма. «will going» — никогда.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вариант.",
            "q": "Что верно?",
            "opts": [
              "I will going to call",
              "I am going to call",
              "I am going to calling"
            ],
            "answer": 1,
            "explain": "going to + базовая форма: <b>going to call</b>. «will going» не бывает."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «собираюсь пойти» — нужен глагол go.",
            "q": "«Я собираюсь пойти в зал» —",
            "opts": [
              "I will going to the gym",
              "I'm going to go to the gym",
              "I'm going to going to the gym"
            ],
            "answer": 1,
            "explain": "going to + базовая форма go: <b>going to go</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. see a film = посмотреть фильм.",
            "q": "Я собираюсь посмотреть фильм.",
            "accept": [
              "i am going to see a film",
              "i'm going to see a film",
              "i am going to watch a film",
              "i'm going to watch a film"
            ],
            "placeholder": "I'm going to ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · вопросы и время",
        "title": "<em>Are you going to…?</em> и слова будущего",
        "paras": [
          "Вопрос строим переносом am/is/are вперёд: <b>Are you going to come?</b> = Ты собираешься прийти? <b>What are you going to do?</b> = Что ты будешь делать?",
          "Отрицание — not после am/is/are: <b>I'm not going to wait.</b> = Я не собираюсь ждать. <b>He isn't going to come.</b> = Он не придёт.",
          "Будущее любит слова времени: <b>tomorrow</b> (завтра), <b>tonight</b> (сегодня вечером), <b>next week</b> (на следующей неделе), <b>this weekend</b> (в эти выходные). Они сразу показывают — речь про будущее."
        ],
        "audio": "Вопрос — переносим am, is или are вперёд: Are you going to come? Отрицание — not после am, is, are: I'm not going to wait. Будущее любит слова времени: tomorrow, tonight, next week, this weekend.",
        "table": {
          "rows": [
            [
              "Are you going to come?",
              "Ты собираешься прийти?"
            ],
            [
              "I'm not going to wait.",
              "Я не собираюсь ждать."
            ],
            [
              "tomorrow · tonight · next week",
              "завтра · вечером · на след. неделе"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Что ты собираешься делать завтра?",
            "en": "What <b>are you going to do</b> tomorrow?",
            "gloss": "вопрос: are you going to",
            "say": "What are you going to do tomorrow?"
          },
          {
            "ru": "Я собираюсь отдохнуть в выходные.",
            "en": "I'm <b>going to relax</b> this weekend.",
            "say": "I'm going to relax this weekend."
          },
          {
            "ru": "Он не собирается работать вечером.",
            "en": "He <b>isn't going to work</b> tonight.",
            "gloss": "отрицание: isn't going to",
            "say": "He isn't going to work tonight."
          },
          {
            "ru": "Ты собираешься позвонить ей?",
            "en": "<b>Are you going to call</b> her?",
            "say": "Are you going to call her?"
          }
        ],
        "mistakes": [
          {
            "wrong": "You are going to come?",
            "right": "<b>Are</b> you going to come?",
            "why": "в вопросе are идёт вперёд"
          },
          {
            "wrong": "I don't going to wait",
            "right": "I'm <b>not</b> going to wait",
            "why": "отрицание — not после am/is/are, не don't"
          }
        ],
        "mnemonic": "❓ Вопрос: Are you going to…? Отрицание: I'm not going to…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> собери вопрос правильно.",
            "q": "Как спросить «Ты собираешься прийти?»",
            "opts": [
              "You are going to come?",
              "Are you going to come?",
              "Do you going to come?"
            ],
            "answer": 1,
            "explain": "вопрос: <b>are</b> вперёд — Are you going to come?"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери отрицание.",
            "q": "Собери: «Я не собираюсь ждать»",
            "want": "I am not going to wait",
            "answer": "I am not going to wait"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши вопрос про завтра.",
            "q": "Что ты собираешься делать завтра?",
            "accept": [
              "what are you going to do tomorrow"
            ],
            "placeholder": "What are you going to ...?"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том строят планы на выходные. Слушай be going to — везде планы и намерения.",
      "lines": [
        {
          "who": "A",
          "en": "What are you going to do this weekend?",
          "ru": "Что ты собираешься делать в выходные?"
        },
        {
          "who": "B",
          "en": "I'm going to visit my parents. And you?",
          "ru": "Я собираюсь съездить к родителям. А ты?"
        },
        {
          "who": "A",
          "en": "I'm going to paint my room. Look at this wall — it's going to look great!",
          "ru": "Я собираюсь покрасить комнату. Посмотри на эту стену — будет отлично!"
        },
        {
          "who": "B",
          "en": "Nice! Are you going to buy new furniture too?",
          "ru": "Здорово! А новую мебель тоже собираешься купить?"
        },
        {
          "who": "A",
          "en": "Yes, I'm going to go to the shop on Saturday.",
          "ru": "Да, в субботу собираюсь сходить в магазин."
        }
      ]
    },
    "vocab": {
      "intro": "Главные слова дня — для планов и прогнозов. Повтори вслух.",
      "items": [
        {
          "en": "going to",
          "ru": "собираться (план)",
          "ex": "I'm going to rest."
        },
        {
          "en": "plan",
          "ru": "план",
          "ex": "What's the plan?"
        },
        {
          "en": "tomorrow",
          "ru": "завтра",
          "ex": "See you tomorrow."
        },
        {
          "en": "tonight",
          "ru": "сегодня вечером",
          "ex": "I'm going to read tonight."
        },
        {
          "en": "next week",
          "ru": "на следующей неделе",
          "ex": "We're going to travel next week."
        },
        {
          "en": "this weekend",
          "ru": "в эти выходные",
          "ex": "I'm going to relax this weekend."
        },
        {
          "en": "to move",
          "ru": "переезжать",
          "ex": "They're going to move."
        },
        {
          "en": "to rain",
          "ru": "идти (о дожде)",
          "ex": "It's going to rain."
        },
        {
          "en": "to visit",
          "ru": "навещать",
          "ex": "I'm going to visit Tom."
        }
      ]
    },
    "drag": {
      "intro": "Соедини английское слово с переводом.",
      "pairs": [
        [
          "going to",
          "собираться"
        ],
        [
          "tomorrow",
          "завтра"
        ],
        [
          "tonight",
          "сегодня вечером"
        ],
        [
          "next week",
          "на след. неделе"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса, и день о планах закрыт!",
      "items": [
        {
          "q": "«Я собираюсь купить машину» —",
          "opts": [
            "I going to buy a car",
            "I am going to buy a car",
            "I am going to buying a car"
          ],
          "answer": 1,
          "explain": "am + going to + базовая форма: <b>I am going to buy</b>."
        },
        {
          "q": "Тучи на небе. «Будет дождь» —",
          "opts": [
            "It will going to rain",
            "It is going to rain",
            "It rains"
          ],
          "answer": 1,
          "explain": "знак перед глазами → прогноз через <b>going to</b>."
        },
        {
          "q": "«Я собираюсь пойти в зал» —",
          "opts": [
            "I will going to the gym",
            "I'm going to go to the gym",
            "I'm going to going to the gym"
          ],
          "answer": 1,
          "explain": "going to + базовая форма go: <b>going to go</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай про планы на выходные. Везде be going to.",
      "title": "My weekend plan",
      "sentences": [
        "This weekend is going to be busy.",
        "On Saturday I'm going to clean the house.",
        "Then I'm going to go to the market.",
        "I'm going to buy fruit and bread.",
        "In the evening my friends are going to come.",
        "We're going to cook dinner together.",
        "On Sunday I'm going to rest.",
        "I'm going to read a new book.",
        "Look at the sky — it's going to rain!",
        "But that's okay. I'm going to stay home."
      ],
      "translation": "Эти выходные будут насыщенными. В субботу я собираюсь убрать дом. Потом собираюсь сходить на рынок. Куплю фрукты и хлеб. Вечером придут друзья. Мы вместе приготовим ужин. В воскресенье я собираюсь отдохнуть. Собираюсь почитать новую книгу. Посмотри на небо — будет дождь! Но это ничего. Я собираюсь остаться дома."
    },
    "essay": {
      "intro": "Теперь твои планы — расскажи, что ты собираешься делать!",
      "prompt": "Напиши 3–5 предложений о своих планах на выходные или на следующую неделю. Используй be going to: I'm going to…",
      "hint": "Структуры: I'm going to… ; On Saturday I'm going to… ; I'm not going to… ; We're going to…",
      "example": "This weekend I'm going to visit my family. On Saturday I'm going to go to the park. I'm going to cook a big dinner. I'm not going to work."
    },
    "picture": {
      "intro": "Опиши по картинке, что человек собирается делать.",
      "emoji": "🧳✈️🏖️",
      "prompt": "Опиши планы человека на отпуск. Используй I'm going to / He's going to.",
      "hint": "Используй: I'm going to travel; I'm going to go to the beach; I'm going to rest.",
      "example": "I'm going to travel next week. I'm going to go to the beach. I'm going to rest and read.",
      "img": "img/a2/day-15.jpg",
      "credit": "Фото: gnuckx · Public Domain · <a href=\"https://www.flickr.com/photos/34409164@N06/3203373999\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "16": {
    "day": 16,
    "week": "03",
    "level": "A2",
    "themeRu": "Решено!",
    "themeEn": "will",
    "intro": "Звонит телефон — и ты бросаешь: «I'll get it!» (я возьму). Никакого плана не было, решение родилось в эту секунду — вот в этом весь <b>will</b>. Вчера были планы, обдуманные заранее (be going to); сегодня — решение в момент речи. А ещё <b>will</b> — это обещания, предложения помощи и прогнозы. Разберёмся, когда will, а когда going to.",
    "introAudio": "Звонит телефон — и ты бросаешь: I'll get it, я возьму. Никакого плана не было, решение родилось в эту секунду — вот в этом весь will. Вчера были планы, обдуманные заранее, be going to; сегодня — решение в момент речи. А ещё will — это обещания, предложения помощи и прогнозы. Разберёмся, когда will, а когда going to.",
    "goals": [
      "понять will: решение в момент речи, обещание, предложение помощи",
      "строить фразу <b>will + базовая форма</b> (и won't для отрицания)",
      "делать прогноз-мнение: I think it will rain",
      "чувствовать разницу <b>will</b> (спонтанно) и <b>going to</b> (план заранее)"
    ],
    "learned": [
      "Понял(а) will: решение в момент речи, обещание, предложение помощи",
      "Построил(а) фразу <b>will + базовая форма</b> (и won't для отрицания)",
      "Сделал(а) прогноз-мнение: I think it will rain",
      "Почувствовал(а) разницу <b>will</b> (спонтанно) и <b>going to</b> (план заранее)"
    ],
    "review": {
      "intro": "Сначала вспомним вчерашнее — be going to для планов. Это «я собираюсь», решено заранее.",
      "introAudio": "Сначала вспомним вчерашнее, be going to для планов. Это «я собираюсь», решено заранее.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери форму плана.",
          "q": "«Я собираюсь купить машину» —",
          "opts": [
            "I going to buy a car",
            "I am going to buy a car",
            "I will buy a car now"
          ],
          "answer": 1,
          "explain": "план заранее: am + going to + базовая форма — <b>I am going to buy</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери вопрос про планы.",
          "q": "Собери: «Что ты собираешься делать завтра?»",
          "want": "What are you going to do tomorrow",
          "answer": "What are you going to do tomorrow"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · решение сейчас",
        "title": "Решил в эту секунду — <em>will</em>",
        "paras": [
          "Когда ты решаешь что-то прямо в момент речи — без подготовки, спонтанно — используй <b>will</b>. Телефон звонит: <b>I'll get it!</b> = Я возьму! Ты решил это сию секунду.",
          "Форма простая и одна для всех: <b>will + базовая форма</b> глагола. <b>I will help.</b> <b>She will come.</b> <b>They will wait.</b> Никаких -s для he/she — will не меняется.",
          "Почти всегда говорят коротко: <b>'ll</b>. I'll, he'll, we'll, it'll. <b>I'll call you.</b> = Я тебе позвоню."
        ],
        "audio": "Когда ты решаешь что-то прямо в момент речи, спонтанно, используй will. Телефон звонит: I'll get it — я возьму! Форма одна для всех: will плюс базовая форма глагола. I will help. She will come. Почти всегда говорят коротко: 'll. I'll call you — я тебе позвоню.",
        "table": {
          "rows": [
            [
              "I / you / he / she / we / they",
              "will + базовая форма"
            ],
            [
              "сокращённо",
              "I'll · he'll · we'll · it'll"
            ],
            [
              "The phone is ringing.",
              "I'll get it! (решил сейчас)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Я возьму (трубку)!",
            "en": "I'<b>ll get</b> it!",
            "gloss": "решение сейчас",
            "say": "I'll get it!"
          },
          {
            "ru": "Подожди, я помогу.",
            "en": "Wait, I'<b>ll help</b> you.",
            "gloss": "will + help",
            "say": "Wait, I'll help you."
          },
          {
            "ru": "Хорошо, я возьму это.",
            "en": "Okay, I'<b>ll take</b> it.",
            "gloss": "решил в магазине сейчас",
            "say": "Okay, I'll take it."
          },
          {
            "ru": "Не волнуйся, она придёт.",
            "en": "Don't worry, she'<b>ll come</b>.",
            "say": "Don't worry, she'll come."
          }
        ],
        "mistakes": [
          {
            "wrong": "I will to help you",
            "right": "I <b>will help</b> you",
            "why": "после will — базовая форма без to"
          },
          {
            "wrong": "She wills come",
            "right": "She <b>will come</b>",
            "why": "will не меняется, никаких -s"
          }
        ],
        "mnemonic": "⚡ Решил сейчас → will + базовая форма: I'll get it!",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> телефон звонит — решение в моменте.",
            "q": "Телефон звонит. Как сказать «Я возьму!»?",
            "opts": [
              "I get it!",
              "I'll get it!",
              "I'm going to get it!"
            ],
            "answer": 1,
            "explain": "решение в момент речи → <b>will</b>: I'll get it!"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Я тебе помогу»",
            "want": "I will help you",
            "answer": "I will help you"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. call = звонить.",
            "q": "Я тебе позвоню.",
            "accept": [
              "i will call you",
              "i'll call you"
            ],
            "placeholder": "I'll ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · обещания и помощь",
        "title": "Обещаю и предлагаю помощь: <em>I'll…</em>",
        "paras": [
          "will — это язык обещаний. <b>I'll call you tomorrow, I promise.</b> = Я позвоню тебе завтра, обещаю. Ты даёшь слово прямо сейчас.",
          "И язык предложений помощи. Видишь, что человеку тяжело: <b>I'll carry that for you.</b> = Я понесу это за тебя. <b>I'll open the door.</b> = Я открою дверь.",
          "Главное — это добрый порыв в моменте, поэтому will, а не going to. Решение помочь рождается прямо здесь и сейчас."
        ],
        "audio": "will — это язык обещаний. I'll call you tomorrow, I promise — я позвоню завтра, обещаю. И язык предложений помощи. Видишь, что человеку тяжело: I'll carry that for you — я понесу это за тебя. Это добрый порыв в моменте, поэтому will.",
        "table": {
          "rows": [
            [
              "I'll call you, I promise.",
              "Обещание"
            ],
            [
              "I'll help you with that.",
              "Предложение помощи"
            ],
            [
              "I'll open the door.",
              "Порыв в моменте"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я понесу твою сумку.",
            "en": "I'<b>ll carry</b> your bag.",
            "gloss": "помощь в моменте",
            "say": "I'll carry your bag."
          },
          {
            "ru": "Обещаю, я не опоздаю.",
            "en": "I <b>promise</b> I <b>won't be</b> late.",
            "gloss": "обещание",
            "say": "I promise I won't be late."
          },
          {
            "ru": "Я открою окно.",
            "en": "I'<b>ll open</b> the window.",
            "say": "I'll open the window."
          },
          {
            "ru": "Не беспокойся, я тебе помогу.",
            "en": "Don't worry, I'<b>ll help</b>.",
            "say": "Don't worry, I'll help."
          }
        ],
        "mistakes": [
          {
            "wrong": "I help you with that (предлагая сейчас)",
            "right": "I'<b>ll help</b> you with that",
            "why": "порыв помочь в моменте → will"
          }
        ],
        "mnemonic": "🤝 Обещание и помощь в моменте → I'll…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сосед несёт тяжёлое — предложи помощь.",
            "q": "Предложи помощь: «Я тебе помогу»",
            "opts": [
              "I help you",
              "I'll help you",
              "I helping you"
            ],
            "answer": 1,
            "explain": "предложение помощи в моменте → <b>I'll help you</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. open the door = открыть дверь.",
            "q": "Я открою дверь.",
            "accept": [
              "i will open the door",
              "i'll open the door"
            ],
            "placeholder": "I'll open ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · прогноз-мнение",
        "title": "Думаю, так будет: <em>I think it will…</em>",
        "paras": [
          "will делает прогноз, когда это твоё мнение или вера в будущее — без знака перед глазами. Часто рядом стоят <b>I think</b> (я думаю), <b>maybe</b> (может быть), <b>probably</b> (наверное).",
          "<b>I think it will rain tomorrow.</b> = Думаю, завтра будет дождь. Я не вижу туч сейчас — просто так считаю. (Сравни: вижу тучи прямо сейчас → it's going to rain.)",
          "Отрицание — <b>won't</b> (will not): <b>He won't pass the exam.</b> = Он не сдаст экзамен (моё мнение)."
        ],
        "audio": "will делает прогноз, когда это твоё мнение о будущем, без знака перед глазами. Часто рядом I think, maybe, probably. I think it will rain tomorrow — думаю, завтра будет дождь. Я не вижу туч сейчас, просто так считаю. Отрицание won't: He won't pass the exam.",
        "table": {
          "rows": [
            [
              "I think it will rain.",
              "Думаю, будет дождь (мнение)"
            ],
            [
              "Maybe she'll come.",
              "Может, она придёт"
            ],
            [
              "He won't pass.",
              "Он не сдаст (won't = will not)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Думаю, тебе понравится фильм.",
            "en": "I think you'<b>ll like</b> the film.",
            "gloss": "мнение → will",
            "say": "I think you'll like the film."
          },
          {
            "ru": "Наверное, завтра будет тепло.",
            "en": "It <b>will probably be</b> warm tomorrow.",
            "gloss": "probably + will",
            "say": "It will probably be warm tomorrow."
          },
          {
            "ru": "Он не сдаст экзамен.",
            "en": "He <b>won't pass</b> the exam.",
            "gloss": "won't = will not",
            "say": "He won't pass the exam."
          },
          {
            "ru": "Может, они опоздают.",
            "en": "Maybe they'<b>ll be</b> late.",
            "say": "Maybe they'll be late."
          }
        ],
        "mistakes": [
          {
            "wrong": "I think it going to rain (просто мнение)",
            "right": "I think it <b>will</b> rain",
            "why": "мнение о будущем без знака → will"
          },
          {
            "wrong": "He will not to pass",
            "right": "He <b>won't pass</b>",
            "why": "won't + базовая форма без to"
          }
        ],
        "mnemonic": "💭 Мнение о будущем: I think it will… / won't…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это твоё мнение о завтра.",
            "q": "«Думаю, завтра будет дождь» —",
            "opts": [
              "I think it will rain tomorrow",
              "I think it rains tomorrow",
              "I think it raining tomorrow"
            ],
            "answer": 0,
            "explain": "мнение о будущем → <b>will</b>: I think it will rain."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери отрицание с won't.",
            "q": "Отрицание: «Он не придёт» —",
            "opts": [
              "He don't come",
              "He won't come",
              "He not will come"
            ],
            "answer": 1,
            "explain": "won't = will not: <b>He won't come</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. like = нравиться.",
            "q": "Думаю, тебе понравится.",
            "accept": [
              "i think you will like it",
              "i think you'll like it"
            ],
            "placeholder": "I think you'll ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "<em>will</em> или <em>going to</em>? Сейчас vs заранее",
        "paras": [
          "Главный вопрос дня: когда will, а когда going to? Ключ — КОГДА ты принял решение. Решил прямо сейчас, в момент речи → <b>will</b>. Решил раньше, есть план → <b>going to</b>.",
          "Смотри: телефон зазвонил — <b>I'll answer it</b> (решил сейчас). Но если ты с утра запланировал: <b>I'm going to call the doctor today</b> (план был раньше).",
          "Классика: кто-то спрашивает «что будешь пить?» — <b>I'll have tea</b> (решил в секунду). А «какие планы на лето?» — <b>I'm going to travel</b> (план заранее)."
        ],
        "audio": "Главный вопрос дня: когда will, а когда going to? Ключ — когда ты принял решение. Решил прямо сейчас, в момент речи — will. Решил раньше, есть план — going to. Что будешь пить? I'll have tea — решил в секунду. Какие планы на лето? I'm going to travel — план заранее.",
        "table": {
          "rows": [
            [
              "Решил сейчас, спонтанно",
              "will: I'll have tea."
            ],
            [
              "План, решён заранее",
              "going to: I'm going to travel."
            ],
            [
              "Прогноз-мнение",
              "will: I think it'll rain."
            ],
            [
              "Прогноз по знаку сейчас",
              "going to: Look, it's going to rain!"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "— Что будешь пить? — Я выпью чай.",
            "en": "— What will you have? — I'<b>ll have</b> tea.",
            "gloss": "решил в секунду → will",
            "say": "I'll have tea."
          },
          {
            "ru": "Этим летом я собираюсь путешествовать.",
            "en": "This summer I'<b>m going to travel</b>.",
            "gloss": "план заранее → going to",
            "say": "This summer I'm going to travel."
          },
          {
            "ru": "Хорошо, я тебе помогу.",
            "en": "Okay, I'<b>ll help</b> you.",
            "gloss": "решил сейчас → will",
            "say": "Okay, I'll help you."
          },
          {
            "ru": "Мы собираемся пожениться в июне.",
            "en": "We'<b>re going to get</b> married in June.",
            "gloss": "план → going to",
            "say": "We're going to get married in June."
          }
        ],
        "mistakes": [
          {
            "wrong": "The phone is ringing. I'm going to answer it.",
            "right": "The phone is ringing. <b>I'll</b> answer it.",
            "why": "решил в момент звонка → will, не going to"
          },
          {
            "wrong": "I will travel this summer (давно решил)",
            "right": "I'<b>m going to travel</b> this summer",
            "why": "план был раньше → going to"
          }
        ],
        "mnemonic": "⚖️ Сейчас решил → will. Заранее план → going to.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> решение в момент звонка.",
            "q": "Телефон звонит. «Я отвечу» —",
            "opts": [
              "I'm going to answer it",
              "I'll answer it",
              "I answer it"
            ],
            "answer": 1,
            "explain": "решение в момент звонка → <b>will</b>: I'll answer it."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> ты давно запланировал поездку.",
            "q": "«Этим летом я путешествую» (план) —",
            "opts": [
              "I'll travel this summer",
              "I'm going to travel this summer",
              "I travel this summer"
            ],
            "answer": 1,
            "explain": "план решён заранее → <b>going to</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери решение в моменте.",
            "q": "Собери: «Я выпью чай» (решил сейчас)",
            "want": "I will have tea",
            "answer": "I will have tea"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том в кафе. Слушай, где решение в моменте (will), а где план (going to).",
      "lines": [
        {
          "who": "A",
          "en": "This bag is so heavy!",
          "ru": "Эта сумка такая тяжёлая!"
        },
        {
          "who": "B",
          "en": "Wait, I'll carry it for you.",
          "ru": "Подожди, я понесу её за тебя."
        },
        {
          "who": "A",
          "en": "Thank you! So, what are you going to do this summer?",
          "ru": "Спасибо! Так что ты собираешься делать летом?"
        },
        {
          "who": "B",
          "en": "I'm going to travel around Italy. And tonight? I'll just relax at home.",
          "ru": "Я собираюсь поездить по Италии. А сегодня вечером? Просто отдохну дома."
        },
        {
          "who": "A",
          "en": "Sounds nice. I think it'll be a great summer!",
          "ru": "Звучит здорово. Думаю, лето будет отличным!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — про решения, обещания и прогнозы. Повтори вслух.",
      "items": [
        {
          "en": "will / 'll",
          "ru": "будущее: решение сейчас",
          "ex": "I'll call you."
        },
        {
          "en": "won't",
          "ru": "не будет (will not)",
          "ex": "I won't be late."
        },
        {
          "en": "I promise",
          "ru": "обещаю",
          "ex": "I promise I'll help."
        },
        {
          "en": "I think",
          "ru": "я думаю / по-моему",
          "ex": "I think it will rain."
        },
        {
          "en": "maybe",
          "ru": "может быть",
          "ex": "Maybe she'll come."
        },
        {
          "en": "probably",
          "ru": "наверное",
          "ex": "He'll probably win."
        },
        {
          "en": "to get it",
          "ru": "взять / ответить (трубку, дверь)",
          "ex": "I'll get it!"
        },
        {
          "en": "to carry",
          "ru": "нести",
          "ex": "I'll carry the bag."
        },
        {
          "en": "to pass (an exam)",
          "ru": "сдать (экзамен)",
          "ex": "She'll pass the exam."
        }
      ]
    },
    "drag": {
      "intro": "Соедини английское слово с переводом.",
      "pairs": [
        [
          "will",
          "решение сейчас"
        ],
        [
          "won't",
          "не будет"
        ],
        [
          "I promise",
          "обещаю"
        ],
        [
          "maybe",
          "может быть"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса, и день о will закрыт!",
      "items": [
        {
          "q": "Телефон звонит. «Я возьму!» —",
          "opts": [
            "I get it!",
            "I'll get it!",
            "I'm going to get it!"
          ],
          "answer": 1,
          "explain": "решение в момент речи → <b>will</b>: I'll get it!"
        },
        {
          "q": "«Этим летом я собираюсь путешествовать» (план) —",
          "opts": [
            "I'll travel this summer",
            "I'm going to travel this summer",
            "I travel this summer"
          ],
          "answer": 1,
          "explain": "план решён заранее → <b>going to</b>."
        },
        {
          "q": "«Он не сдаст экзамен» —",
          "opts": [
            "He won't pass the exam",
            "He don't pass the exam",
            "He not will pass the exam"
          ],
          "answer": 0,
          "explain": "won't = will not + базовая форма: <b>He won't pass</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай. Найди will (решения, обещания, прогноз) и going to (планы).",
      "title": "A busy evening",
      "sentences": [
        "It is a busy evening.",
        "The doorbell rings, so Anna says she'll get it.",
        "It is her friend Tom.",
        "Anna offers to make some tea.",
        "Tom thinks it will rain tonight.",
        "Anna promises she'll drive him home later.",
        "They talk about their summer plans.",
        "Tom is going to travel to Spain.",
        "Anna is going to stay home and paint her room.",
        "They are sure they'll have a great summer."
      ],
      "translation": "Это насыщенный вечер. Звонит дверной звонок, и Аня говорит, что откроет. Это её друг Том. Аня предлагает сделать чай. Том думает, что вечером будет дождь. Аня обещает, что отвезёт его домой позже. Они говорят о планах на лето. Том собирается поехать в Испанию. Аня собирается остаться дома и покрасить комнату. Они уверены, что лето будет отличным."
    },
    "essay": {
      "intro": "Теперь ты — что решишь и что пообещаешь?",
      "prompt": "Напиши 3–5 предложений: одно спонтанное решение (I'll…), одно обещание (I promise I'll…) и один прогноз (I think… will…).",
      "hint": "Структуры: I'll… ; I promise I'll… ; I think it will… ; Maybe I'll…",
      "example": "It's cold, so I'll close the window. I promise I'll call my mum tonight. I think tomorrow will be sunny. Maybe I'll go for a walk."
    },
    "picture": {
      "intro": "Опиши по картинке, что человек решит сделать прямо сейчас.",
      "emoji": "📞☕🚪",
      "prompt": "Телефон звонит, чайник кипит. Что человек сделает? Используй I'll…",
      "hint": "Используй: I'll answer the phone; I'll make some tea; I'll open the door.",
      "example": "The phone is ringing, so I'll answer it. I'll make some tea. Then I'll open the door.",
      "img": "img/a2/day-16.jpg",
      "credit": "Фото: USDAgov · Public Domain · <a href=\"https://www.flickr.com/photos/41284017@N08/7891468066\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "17": {
    "day": 17,
    "week": "03",
    "level": "A2",
    "themeRu": "Завтра в пять",
    "themeEn": "Present Continuous for future",
    "intro": "У тебя уже есть present continuous — <b>am/is/are + глагол с -ing</b> — для того, что идёт прямо сейчас. А теперь неожиданное: этим же временем англичане говорят о <b>будущем</b> — о твёрдых договорённостях. <b>I'm meeting Tom at five tomorrow.</b> — Я встречаюсь с Томом завтра в пять: время и место уже условлены. Сегодня учимся узнавать это «запланированное будущее» и не путать его с настоящим.",
    "introAudio": "У тебя уже есть present continuous — am, is, are плюс глагол с -ing — для того, что идёт прямо сейчас. А теперь неожиданное: этим же временем говорят о будущем — о твёрдых договорённостях. I'm meeting Tom at five tomorrow — я встречаюсь с Томом завтра в пять: время и место уже условлены. Сегодня учимся узнавать это запланированное будущее и не путать его с настоящим.",
    "goals": [
      "понять present continuous для будущего: твёрдая договорённость, время назначено",
      "строить фразу <b>am/is/are + -ing</b> + слово будущего",
      "пользоваться словами времени: tomorrow, tonight, on Friday, next week",
      "не путать русское настоящее с английским: «I'm meeting», а не «I meet»"
    ],
    "learned": [
      "Понял(а) present continuous для будущего: твёрдая договорённость, время назначено",
      "Построил(а) фразу <b>am/is/are + -ing</b> + слово будущего",
      "Воспользовался(лась) словами времени: tomorrow, tonight, on Friday, next week",
      "Перестал(а) путать русское настоящее с английским: «I'm meeting», а не «I meet»"
    ],
    "review": {
      "intro": "Сначала вчерашнее — will. Решение в моменте, обещание, прогноз-мнение; will vs going to.",
      "introAudio": "Сначала вчерашнее, will. Решение в моменте, обещание, прогноз-мнение; will против going to.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> телефон звонит — решение в моменте.",
          "q": "Телефон звонит. «Я возьму!» —",
          "opts": [
            "I get it!",
            "I'll get it!",
            "I'm getting it!"
          ],
          "answer": 1,
          "explain": "решение в момент речи → <b>will</b>: I'll get it!"
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери прогноз-мнение.",
          "q": "Собери: «Думаю, завтра будет дождь»",
          "want": "I think it will rain tomorrow",
          "answer": "I think it will rain tomorrow"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · договорённость",
        "title": "Уже договорились — <em>I'm meeting Tom</em>",
        "paras": [
          "Знакомая форма <b>am/is/are + глагол-ing</b> работает не только про «сейчас». Если встреча уже назначена — время, место, человек известны — англичане говорят о ней в present continuous.",
          "<b>I'm meeting Tom at five tomorrow.</b> = Я встречаюсь с Томом завтра в пять. Мы созвонились, договорились — это твёрдый план, почти как запись в календаре.",
          "Так говорят про встречи, поездки, визиты: <b>She's flying to Rome on Monday.</b> = Она летит в Рим в понедельник (билет куплен). <b>We're having dinner with friends tonight.</b> = Мы ужинаем с друзьями сегодня вечером."
        ],
        "audio": "Форма am, is, are плюс глагол с -ing работает не только про сейчас. Если встреча уже назначена — время, место, человек известны — говорят в present continuous. I'm meeting Tom at five tomorrow — я встречаюсь с Томом завтра в пять. She's flying to Rome on Monday — она летит в Рим в понедельник, билет куплен.",
        "table": {
          "rows": [
            [
              "I'm meeting Tom at five.",
              "Встреча назначена"
            ],
            [
              "She's flying on Monday.",
              "Билет куплен"
            ],
            [
              "We're having dinner tonight.",
              "Уже договорились"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я встречаюсь с Томом завтра в пять.",
            "en": "I'<b>m meeting</b> Tom at five tomorrow.",
            "gloss": "договорённость → -ing",
            "say": "I'm meeting Tom at five tomorrow."
          },
          {
            "ru": "Она летит в Рим в понедельник.",
            "en": "She'<b>s flying</b> to Rome on Monday.",
            "gloss": "билет куплен",
            "say": "She's flying to Rome on Monday."
          },
          {
            "ru": "Мы ужинаем с друзьями вечером.",
            "en": "We'<b>re having</b> dinner with friends tonight.",
            "say": "We're having dinner with friends tonight."
          },
          {
            "ru": "Я иду к врачу в четверг.",
            "en": "I'<b>m seeing</b> the doctor on Thursday.",
            "gloss": "запись есть",
            "say": "I'm seeing the doctor on Thursday."
          }
        ],
        "mistakes": [
          {
            "wrong": "I meet Tom at five tomorrow",
            "right": "I'<b>m meeting</b> Tom at five tomorrow",
            "why": "назначенная встреча → am + meeting"
          },
          {
            "wrong": "She is fly to Rome",
            "right": "She is <b>flying</b> to Rome",
            "why": "нужна форма -ing: flying"
          }
        ],
        "mnemonic": "📅 Договорённость на будущее → am/is/are + -ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> встреча уже назначена.",
            "q": "«Я встречаюсь с Томом завтра» (договорились) —",
            "opts": [
              "I meet Tom tomorrow",
              "I'm meeting Tom tomorrow",
              "I will meeting Tom tomorrow"
            ],
            "answer": 1,
            "explain": "назначенная встреча → present continuous: <b>I'm meeting</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Она летит в Рим в понедельник»",
            "want": "She is flying to Rome on Monday",
            "answer": "She is flying to Rome on Monday"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. have dinner = ужинать.",
            "q": "Мы ужинаем с друзьями вечером.",
            "accept": [
              "we are having dinner with friends tonight",
              "we're having dinner with friends tonight"
            ],
            "placeholder": "We're having dinner ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · слова будущего",
        "title": "Когда именно: <em>tomorrow, on Friday, at five</em>",
        "paras": [
          "Чтобы было ясно, что речь о будущем (а не о «сейчас»), рядом ставят слово времени. Без него «I'm meeting Tom» можно понять как «встречаюсь прямо сейчас».",
          "Частые слова: <b>tomorrow</b> (завтра), <b>tonight</b> (сегодня вечером), <b>next week</b> (на следующей неделе), <b>on Friday</b> (в пятницу), <b>at five</b> (в пять).",
          "Запомни предлоги: <b>on</b> Monday/Friday (дни), <b>at</b> five/six (время), <b>next</b> week/month (без предлога). <b>I'm leaving on Friday at six.</b>"
        ],
        "audio": "Чтобы было ясно, что речь о будущем, рядом ставят слово времени. Без него I'm meeting Tom можно понять как встречаюсь прямо сейчас. Частые слова: tomorrow, tonight, next week, on Friday, at five. Предлоги: on Monday, at five, next week без предлога.",
        "table": {
          "rows": [
            [
              "tomorrow / tonight",
              "завтра / сегодня вечером"
            ],
            [
              "on Friday · at five",
              "в пятницу · в пять"
            ],
            [
              "next week / next month",
              "на след. неделе / в след. месяце"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я уезжаю завтра.",
            "en": "I'm leaving <b>tomorrow</b>.",
            "say": "I'm leaving tomorrow."
          },
          {
            "ru": "Мы играем в футбол в субботу.",
            "en": "We're playing football <b>on Saturday</b>.",
            "gloss": "on + день",
            "say": "We're playing football on Saturday."
          },
          {
            "ru": "Поезд отходит в шесть.",
            "en": "The train leaves <b>at six</b>.",
            "gloss": "at + время",
            "say": "The train leaves at six."
          },
          {
            "ru": "Она начинает новую работу на следующей неделе.",
            "en": "She's starting a new job <b>next week</b>.",
            "gloss": "next week без предлога",
            "say": "She's starting a new job next week."
          }
        ],
        "mistakes": [
          {
            "wrong": "I'm leaving in Friday",
            "right": "I'm leaving <b>on</b> Friday",
            "why": "дни недели — с on: on Friday"
          },
          {
            "wrong": "next the week",
            "right": "<b>next week</b>",
            "why": "next week — без артикля и без предлога"
          }
        ],
        "mnemonic": "🕔 on + день, at + время, next week (без предлога).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери предлог для дня недели.",
            "q": "Выбери предлог: We're playing football ___ Saturday.",
            "opts": [
              "in",
              "on",
              "at"
            ],
            "answer": 1,
            "explain": "дни недели → <b>on</b>: on Saturday."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. leave = уезжать.",
            "q": "Я уезжаю завтра.",
            "accept": [
              "i am leaving tomorrow",
              "i'm leaving tomorrow"
            ],
            "placeholder": "I'm leaving ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "По-русски «встречаюсь», по-английски <em>I'm meeting</em>",
        "paras": [
          "Главная ошибка русскоязычных тут вот в чём: в русском про будущее часто говорят настоящим временем. «Завтра я встречаюсь с Томом», «В пятницу мы летим в Рим» — глагол в настоящем.",
          "По-английски так нельзя. Простое настоящее (<b>I meet</b>, <b>we fly</b>) — это про привычку, про «вообще, всегда». Для назначенного будущего нужен continuous: <b>I'm meeting</b>, <b>we're flying</b>.",
          "Сравни: <b>I meet Tom every Friday.</b> = Я встречаюсь с Томом каждую пятницу (привычка). <b>I'm meeting Tom this Friday.</b> = Я встречаюсь с Томом в эту пятницу (одна назначенная встреча)."
        ],
        "audio": "Главная ошибка тут: в русском про будущее часто говорят настоящим временем. Завтра я встречаюсь с Томом — глагол в настоящем. По-английски так нельзя. Простое настоящее I meet — это про привычку, вообще. Для назначенного будущего нужен continuous: I'm meeting. I meet Tom every Friday — привычка. I'm meeting Tom this Friday — одна встреча.",
        "table": {
          "rows": [
            [
              "I meet Tom every Friday.",
              "привычка → Present Simple"
            ],
            [
              "I'm meeting Tom this Friday.",
              "одна встреча → Continuous"
            ],
            [
              "❌ I meet him tomorrow",
              "так нельзя про будущее"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я встречаюсь с ним завтра.",
            "en": "I'<b>m meeting</b> him tomorrow.",
            "gloss": "не «I meet»",
            "say": "I'm meeting him tomorrow."
          },
          {
            "ru": "Мы летим в Рим в пятницу.",
            "en": "We'<b>re flying</b> to Rome on Friday.",
            "gloss": "не «we fly»",
            "say": "We're flying to Rome on Friday."
          },
          {
            "ru": "Что ты делаешь сегодня вечером?",
            "en": "What <b>are you doing</b> tonight?",
            "gloss": "планы на вечер",
            "say": "What are you doing tonight?"
          },
          {
            "ru": "Они приезжают в гости в воскресенье.",
            "en": "They'<b>re coming</b> to visit on Sunday.",
            "gloss": "договорённость → -ing",
            "say": "They're coming to visit on Sunday."
          }
        ],
        "mistakes": [
          {
            "wrong": "I meet him tomorrow",
            "right": "I'<b>m meeting</b> him tomorrow",
            "why": "русское настоящее ≠ английское: будущая встреча → am meeting"
          },
          {
            "wrong": "We fly to Rome on Friday",
            "right": "We'<b>re flying</b> to Rome on Friday",
            "why": "назначенный рейс → are flying"
          }
        ],
        "mnemonic": "🇷🇺→🇬🇧 «встречаюсь завтра» = I'm meeting, не I meet.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> будущая встреча, не привычка.",
            "q": "«Я встречаюсь с ним завтра» —",
            "opts": [
              "I meet him tomorrow",
              "I'm meeting him tomorrow",
              "I will meeting him tomorrow"
            ],
            "answer": 1,
            "explain": "будущая договорённость → <b>I'm meeting</b>, не I meet."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> спрашиваем про планы на вечер.",
            "q": "«Что ты делаешь сегодня вечером?» (планы) —",
            "opts": [
              "What do you do tonight?",
              "What are you doing tonight?",
              "What you doing tonight?"
            ],
            "answer": 1,
            "explain": "планы на вечер → present continuous: <b>What are you doing</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. fly = лететь.",
            "q": "Мы летим в Рим в пятницу.",
            "accept": [
              "we are flying to rome on friday",
              "we're flying to rome on friday"
            ],
            "placeholder": "We're flying to Rome ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · три будущих вместе",
        "title": "<em>going to · will · -ing</em> — что когда",
        "paras": [
          "За три дня у тебя три способа сказать про будущее. Сложить их легко по «насколько твёрдо договорено».",
          "Назначенная встреча с временем и людьми (договорился с кем-то) → <b>present continuous</b>: I'm meeting Tom at five. План-намерение (решил сам, без точной записи) → <b>going to</b>: I'm going to learn French. Решение прямо сейчас → <b>will</b>: I'll call you.",
          "Часто несколько вариантов подходят — не бойся. Но «твёрдая встреча по часам» почти всегда идёт через -ing."
        ],
        "audio": "За три дня у тебя три способа сказать про будущее. Назначенная встреча с временем и людьми — present continuous: I'm meeting Tom at five. План-намерение — going to: I'm going to learn French. Решение прямо сейчас — will: I'll call you.",
        "table": {
          "rows": [
            [
              "Назначенная встреча",
              "-ing: I'm meeting Tom at five."
            ],
            [
              "План-намерение",
              "going to: I'm going to learn French."
            ],
            [
              "Решение сейчас",
              "will: I'll call you."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я встречаюсь с Анной в семь. (назначено)",
            "en": "I'<b>m meeting</b> Anna at seven.",
            "gloss": "договорённость",
            "say": "I'm meeting Anna at seven."
          },
          {
            "ru": "Я собираюсь начать бегать. (намерение)",
            "en": "I'<b>m going to start</b> running.",
            "gloss": "план-намерение",
            "say": "I'm going to start running."
          },
          {
            "ru": "Хорошо, я тебе помогу. (решил сейчас)",
            "en": "Okay, I'<b>ll help</b> you.",
            "gloss": "решение в моменте",
            "say": "Okay, I'll help you."
          },
          {
            "ru": "Мы летим в Лондон в субботу. (билеты есть)",
            "en": "We'<b>re flying</b> to London on Saturday.",
            "gloss": "договорённость → -ing",
            "say": "We're flying to London on Saturday."
          }
        ],
        "mistakes": [
          {
            "wrong": "I'm going to meet Tom at five (точная встреча)",
            "right": "I'<b>m meeting</b> Tom at five",
            "why": "твёрдая встреча по часам → present continuous"
          }
        ],
        "mnemonic": "🧭 Встреча по часам → -ing · намерение → going to · сейчас → will.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> твёрдая встреча по времени.",
            "q": "Назначенная встреча: «Я встречаюсь с Томом в пять» —",
            "opts": [
              "I'm meeting Tom at five",
              "I meet Tom at five",
              "I'll meet Tom at five"
            ],
            "answer": 0,
            "explain": "твёрдая договорённость по времени → <b>present continuous</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это намерение, план.",
            "q": "Намерение: «Я собираюсь выучить французский» —",
            "opts": [
              "I'm meeting to learn French",
              "I'm going to learn French",
              "I learn French"
            ],
            "answer": 1,
            "explain": "план-намерение → <b>going to</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери назначенную встречу.",
            "q": "Собери: «Я встречаюсь с Анной в семь»",
            "want": "I am meeting Anna at seven",
            "answer": "I am meeting Anna at seven"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том сверяют планы на неделю. Слушай present continuous для будущего.",
      "lines": [
        {
          "who": "A",
          "en": "What are you doing on Friday?",
          "ru": "Что ты делаешь в пятницу?"
        },
        {
          "who": "B",
          "en": "I'm meeting my sister at six. We're having dinner in town.",
          "ru": "Я встречаюсь с сестрой в шесть. Мы ужинаем в городе."
        },
        {
          "who": "A",
          "en": "Nice! I'm flying to London on Saturday.",
          "ru": "Здорово! А я лечу в Лондон в субботу."
        },
        {
          "who": "B",
          "en": "Really? When are you coming back?",
          "ru": "Правда? Когда возвращаешься?"
        },
        {
          "who": "A",
          "en": "Next Tuesday. I'm starting a new job there!",
          "ru": "В следующий вторник. Я начинаю там новую работу!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — для договорённостей и времени. Повтори вслух.",
      "items": [
        {
          "en": "I'm meeting",
          "ru": "я встречаюсь (договорился)",
          "ex": "I'm meeting Tom at five."
        },
        {
          "en": "tomorrow",
          "ru": "завтра",
          "ex": "I'm leaving tomorrow."
        },
        {
          "en": "tonight",
          "ru": "сегодня вечером",
          "ex": "We're eating out tonight."
        },
        {
          "en": "next week",
          "ru": "на следующей неделе",
          "ex": "She's starting next week."
        },
        {
          "en": "on Friday",
          "ru": "в пятницу",
          "ex": "I'm flying on Friday."
        },
        {
          "en": "to fly / flying",
          "ru": "лететь",
          "ex": "She's flying to Rome."
        },
        {
          "en": "to leave / leaving",
          "ru": "уезжать, уходить",
          "ex": "The train leaves at six."
        },
        {
          "en": "arrangement",
          "ru": "договорённость",
          "ex": "We have an arrangement."
        },
        {
          "en": "to come back",
          "ru": "вернуться",
          "ex": "I'm coming back on Tuesday."
        }
      ]
    },
    "drag": {
      "intro": "Соедини английское слово с переводом.",
      "pairs": [
        [
          "I'm meeting",
          "я встречаюсь"
        ],
        [
          "tomorrow",
          "завтра"
        ],
        [
          "on Friday",
          "в пятницу"
        ],
        [
          "tonight",
          "сегодня вечером"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса, и день о будущем-договорённости закрыт!",
      "items": [
        {
          "q": "«Я встречаюсь с Томом завтра» (договорились) —",
          "opts": [
            "I meet Tom tomorrow",
            "I'm meeting Tom tomorrow",
            "I will meeting Tom tomorrow"
          ],
          "answer": 1,
          "explain": "назначенная встреча → <b>I'm meeting</b>."
        },
        {
          "q": "Выбери предлог: We're playing football ___ Saturday.",
          "opts": [
            "in",
            "on",
            "at"
          ],
          "answer": 1,
          "explain": "дни недели → <b>on</b>: on Saturday."
        },
        {
          "q": "«Что ты делаешь сегодня вечером?» (планы) —",
          "opts": [
            "What do you do tonight?",
            "What are you doing tonight?",
            "What you do tonight?"
          ],
          "answer": 1,
          "explain": "планы → present continuous: <b>What are you doing</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай про насыщенную неделю. Везде present continuous для будущего.",
      "title": "My week",
      "sentences": [
        "I have a busy week.",
        "On Monday I'm seeing the doctor at nine.",
        "On Tuesday I'm meeting my old friend for coffee.",
        "We're having lunch in the city centre.",
        "On Wednesday I'm working from home.",
        "On Thursday I'm flying to Berlin for two days.",
        "My plane leaves at seven in the morning.",
        "I'm coming back on Saturday.",
        "On Sunday I'm not doing anything.",
        "I'm just staying home and resting!"
      ],
      "translation": "У меня насыщенная неделя. В понедельник я иду к врачу в девять. Во вторник я встречаюсь со старым другом за кофе. Мы обедаем в центре города. В среду я работаю из дома. В четверг я лечу в Берлин на два дня. Мой самолёт вылетает в семь утра. Я возвращаюсь в субботу. В воскресенье я ничего не делаю. Просто остаюсь дома и отдыхаю!"
    },
    "essay": {
      "intro": "Твоя неделя — что у тебя запланировано?",
      "prompt": "Напиши 3–5 предложений о твоих планах на эту неделю. Используй present continuous: I'm meeting…, I'm flying…, on Friday…",
      "hint": "Структуры: On Monday I'm… ; I'm meeting… at… ; We're having… tonight ; I'm leaving on…",
      "example": "On Tuesday I'm meeting my friend at six. On Thursday I'm flying to Paris. We're having dinner with my family on Sunday. I'm not working tomorrow."
    },
    "picture": {
      "intro": "Опиши по картинке-календарю, что человек делает на этой неделе.",
      "emoji": "📆🕔🤝",
      "prompt": "Это календарь на неделю. Расскажи про встречи. Используй I'm meeting…, on Friday…",
      "hint": "Используй: On Monday I'm meeting…; I'm having lunch at one; I'm leaving on Friday.",
      "example": "On Monday I'm meeting my boss at ten. On Wednesday I'm having lunch with Anna. I'm leaving on Friday.",
      "img": "img/a2/day-17.jpg",
      "credit": "Фото: whatsthatpicture · Public Domain · <a href=\"https://www.flickr.com/photos/24469639@N00/6241452257\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "18": {
    "day": 18,
    "week": "03",
    "level": "A2",
    "themeRu": "Больше и лучше",
    "themeEn": "Comparatives",
    "intro": "Что интереснее, что дешевле, где лучше — сравнивать приходится каждый день. Сегодня учимся делать это по-английски: <b>comparatives</b>, сравнительная степень. Коротким словам добавляют <b>-er</b> (old → older), длинным ставят впереди <b>more</b> (interesting → more interesting), а пара слов меняется целиком: good → <b>better</b>. И всегда рядом связка <b>than</b> — «чем». Идём сравнивать.",
    "introAudio": "Что интереснее, что дешевле, где лучше — сравнивать приходится каждый день. Сегодня учимся делать это по-английски: comparatives, сравнительная степень. Коротким словам добавляют -er: old превращается в older. Длинным ставят впереди more: interesting — more interesting. А пара слов меняется целиком: good превращается в better. И всегда рядом связка than — чем. Идём сравнивать.",
    "goals": [
      "строить сравнение коротких слов: old → <b>older</b>, big → <b>bigger</b>",
      "ставить <b>more</b> перед длинными словами: more interesting, more expensive",
      "знать важные исключения: good → <b>better</b>, bad → <b>worse</b>",
      "соединять сравнение словом <b>than</b> (чем) и не путать его с then"
    ],
    "learned": [
      "Построил(а) сравнение коротких слов: old → <b>older</b>, big → <b>bigger</b>",
      "Поставил(а) <b>more</b> перед длинными словами: more interesting, more expensive",
      "Запомнил(а) важные исключения: good → <b>better</b>, bad → <b>worse</b>",
      "Соединил(а) сравнение словом <b>than</b> (чем) и перестал(а) путать его с then"
    ],
    "review": {
      "intro": "Сначала вчерашнее — будущее. Назначенная встреча → -ing, план → going to, решение сейчас → will.",
      "introAudio": "Сначала вчерашнее, будущее. Назначенная встреча — -ing, план — going to, решение сейчас — will.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> встреча уже назначена.",
          "q": "«Я встречаюсь с Томом завтра» (договорились) —",
          "opts": [
            "I meet Tom tomorrow",
            "I'm meeting Tom tomorrow",
            "I will meeting Tom tomorrow"
          ],
          "answer": 1,
          "explain": "назначенная встреча → present continuous: <b>I'm meeting</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери план через going to.",
          "q": "Собери: «Этим летом я собираюсь путешествовать»",
          "want": "This summer I am going to travel",
          "answer": "This summer I am going to travel"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · короткие слова",
        "title": "Короткое слово + <em>-er</em>: older, bigger",
        "paras": [
          "Если прилагательное короткое (один слог), просто добавь <b>-er</b>: <b>old → older</b> (старше), <b>tall → taller</b> (выше), <b>cheap → cheaper</b> (дешевле), <b>fast → faster</b> (быстрее).",
          "Два правила написания. Если на конце одна гласная + согласная — согласную удваивают: <b>big → bigger</b>, <b>hot → hotter</b>. Если слово кончается на -y, она меняется на -i: <b>easy → easier</b>, <b>happy → happier</b>.",
          "Сравнение почти всегда идёт со словом <b>than</b> (чем): <b>My brother is taller than me.</b> = Мой брат выше меня."
        ],
        "audio": "Если прилагательное короткое, один слог, просто добавь -er. old превращается в older, tall в taller, cheap в cheaper. Два правила написания: гласная плюс согласная — согласную удваивают: big в bigger, hot в hotter. Слово на -y: easy в easier, happy в happier. Сравнение идёт со словом than, чем: My brother is taller than me.",
        "table": {
          "rows": [
            [
              "old → older",
              "старый → старше"
            ],
            [
              "big → bigger",
              "большой → больше (удвоение)"
            ],
            [
              "easy → easier",
              "лёгкий → легче (y → i)"
            ],
            [
              "fast → faster",
              "быстрый → быстрее"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Мой брат выше меня.",
            "en": "My brother is <b>taller than</b> me.",
            "gloss": "tall + er + than",
            "say": "My brother is taller than me."
          },
          {
            "ru": "Этот дом больше, чем твой.",
            "en": "This house is <b>bigger than</b> yours.",
            "gloss": "big → bigger (удвоение)",
            "say": "This house is bigger than yours."
          },
          {
            "ru": "Поезд быстрее автобуса.",
            "en": "The train is <b>faster than</b> the bus.",
            "say": "The train is faster than the bus."
          },
          {
            "ru": "Этот вопрос легче.",
            "en": "This question is <b>easier</b>.",
            "gloss": "easy → easier",
            "say": "This question is easier."
          }
        ],
        "mistakes": [
          {
            "wrong": "My brother is more tall",
            "right": "My brother is <b>taller</b>",
            "why": "короткое слово → -er, не more tall"
          },
          {
            "wrong": "This house is biger",
            "right": "This house is <b>bigger</b>",
            "why": "big → bigger, удвоить g"
          }
        ],
        "mnemonic": "➕ Короткое слово + -er + than: older than, bigger than.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> короткое слово — добавь -er.",
            "q": "«Мой брат выше меня» —",
            "opts": [
              "My brother is more tall than me",
              "My brother is taller than me",
              "My brother is tall than me"
            ],
            "answer": 1,
            "explain": "короткое слово → -er: <b>taller than</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери сравнение (удвой g в big).",
            "q": "Собери: «Этот дом больше, чем твой»",
            "want": "This house is bigger than yours",
            "answer": "This house is bigger than yours"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. fast → faster.",
            "q": "Поезд быстрее автобуса.",
            "accept": [
              "the train is faster than the bus"
            ],
            "placeholder": "The train is ... than the bus"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · длинные слова",
        "title": "Длинное слово → <em>more</em>: more interesting",
        "paras": [
          "Если прилагательное длинное (два слога и больше), -er не добавляют. Вместо этого ставят впереди <b>more</b> (более): <b>interesting → more interesting</b>, <b>expensive → more expensive</b>, <b>beautiful → more beautiful</b>.",
          "Само слово при этом не меняется — никаких окончаний. <b>This book is more interesting than that one.</b> = Эта книга интереснее той.",
          "Простой ориентир: длинное, «учёное» слово почти всегда любит more. comfortable → more comfortable, difficult → more difficult, important → more important."
        ],
        "audio": "Если прилагательное длинное, два слога и больше, -er не добавляют. Вместо этого ставят впереди more, более: interesting — more interesting, expensive — more expensive. Само слово не меняется. This book is more interesting than that one — эта книга интереснее той.",
        "table": {
          "rows": [
            [
              "interesting → more interesting",
              "интереснее"
            ],
            [
              "expensive → more expensive",
              "дороже"
            ],
            [
              "beautiful → more beautiful",
              "красивее"
            ],
            [
              "difficult → more difficult",
              "сложнее"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Эта книга интереснее той.",
            "en": "This book is <b>more interesting than</b> that one.",
            "gloss": "more + interesting",
            "say": "This book is more interesting than that one."
          },
          {
            "ru": "Машина дороже велосипеда.",
            "en": "A car is <b>more expensive than</b> a bike.",
            "gloss": "more + expensive",
            "say": "A car is more expensive than a bike."
          },
          {
            "ru": "Этот стул удобнее.",
            "en": "This chair is <b>more comfortable</b>.",
            "say": "This chair is more comfortable."
          },
          {
            "ru": "Английский важнее, чем ты думаешь.",
            "en": "English is <b>more important than</b> you think.",
            "say": "English is more important than you think."
          }
        ],
        "mistakes": [
          {
            "wrong": "This book is interestinger",
            "right": "This book is <b>more interesting</b>",
            "why": "длинное слово → more, не -er"
          },
          {
            "wrong": "It is more cheaper",
            "right": "It is <b>cheaper</b>",
            "why": "cheap короткое → cheaper, без more"
          }
        ],
        "mnemonic": "📏 Длинное слово → more + слово: more interesting, more expensive.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> длинное слово — ставь more.",
            "q": "«Эта книга интереснее» —",
            "opts": [
              "This book is interestinger",
              "This book is more interesting",
              "This book is more interestinger"
            ],
            "answer": 1,
            "explain": "длинное слово → <b>more interesting</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери сравнение через more.",
            "q": "Собери: «Машина дороже велосипеда»",
            "want": "A car is more expensive than a bike",
            "answer": "A car is more expensive than a bike"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. comfortable = удобный.",
            "q": "Этот стул удобнее.",
            "accept": [
              "this chair is more comfortable"
            ],
            "placeholder": "This chair is more ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "<em>better, worse</em> — и никогда «more better»",
        "paras": [
          "Пара важных слов сравнивается не по правилам — их просто запоминают: <b>good → better</b> (хороший → лучше), <b>bad → worse</b> (плохой → хуже), <b>far → further</b> (далёкий → дальше).",
          "Главная ошибка русскоязычных: двойное сравнение. <b>more better</b>, <b>more bigger</b> — так нельзя никогда! Либо -er, либо more — только одно. Правильно просто <b>better</b>, просто <b>bigger</b>.",
          "<b>This film is better than the book.</b> = Этот фильм лучше книги. <b>The weather is worse today.</b> = Погода сегодня хуже."
        ],
        "audio": "Пара важных слов сравнивается не по правилам, их просто запоминают: good превращается в better, bad в worse, far в further. Главная ошибка: двойное сравнение. more better, more bigger — так нельзя никогда! Либо -er, либо more, только одно. Правильно просто better, просто bigger. This film is better than the book — этот фильм лучше книги.",
        "table": {
          "rows": [
            [
              "good → better",
              "хороший → лучше"
            ],
            [
              "bad → worse",
              "плохой → хуже"
            ],
            [
              "far → further",
              "далёкий → дальше"
            ],
            [
              "❌ more better",
              "так нельзя — только better"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Этот фильм лучше книги.",
            "en": "This film is <b>better than</b> the book.",
            "gloss": "good → better",
            "say": "This film is better than the book."
          },
          {
            "ru": "Погода сегодня хуже.",
            "en": "The weather is <b>worse</b> today.",
            "gloss": "bad → worse",
            "say": "The weather is worse today."
          },
          {
            "ru": "Моя машина лучше твоей.",
            "en": "My car is <b>better than</b> yours.",
            "say": "My car is better than yours."
          },
          {
            "ru": "Его дом дальше от центра.",
            "en": "His house is <b>further</b> from the centre.",
            "gloss": "far → further",
            "say": "His house is further from the centre."
          }
        ],
        "mistakes": [
          {
            "wrong": "This is more better",
            "right": "This is <b>better</b>",
            "why": "двойное сравнение нельзя: либо -er/better, либо more"
          },
          {
            "wrong": "Today is more worse",
            "right": "Today is <b>worse</b>",
            "why": "worse уже сравнительная форма, more не нужно"
          }
        ],
        "mnemonic": "🚫 good→better, bad→worse. Никогда «more better»!",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> good превращается в better.",
            "q": "«Этот фильм лучше книги» —",
            "opts": [
              "This film is more good than the book",
              "This film is better than the book",
              "This film is more better than the book"
            ],
            "answer": 1,
            "explain": "good → <b>better</b>, без more."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди ошибку — двойное сравнение.",
            "q": "Что НЕправильно?",
            "opts": [
              "bigger",
              "more interesting",
              "more bigger"
            ],
            "answer": 2,
            "explain": "<b>more bigger</b> — двойное сравнение, так нельзя."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. bad → worse.",
            "q": "Погода сегодня хуже.",
            "accept": [
              "the weather is worse today",
              "the weather is worse"
            ],
            "placeholder": "The weather is ... today"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · than и then",
        "title": "<em>than</em> (чем) — это не <em>then</em> (потом)",
        "paras": [
          "В сравнении связка — <b>than</b> (чем): taller than, better than, more interesting than. Пиши через <b>-a-</b>: th<b>a</b>n.",
          "Не путай с похожим словом <b>then</b> (тогда, потом) — через <b>-e-</b>. Это совсем другое слово: <b>First we ate, then we left.</b> = Сначала поели, потом ушли.",
          "В сравнении всегда <b>than</b>: <b>She is older than me.</b> Сравнение спрашивают вопросом <b>Which is bigger?</b> (Что больше?) или <b>Who is taller?</b> (Кто выше?)."
        ],
        "audio": "В сравнении связка — than, чем: taller than, better than, more interesting than. Пиши через а. Не путай с похожим словом then — тогда, потом — через е. First we ate, then we left — сначала поели, потом ушли. В сравнении всегда than: She is older than me.",
        "table": {
          "rows": [
            [
              "than (через -a-)",
              "чем: older than me"
            ],
            [
              "then (через -e-)",
              "потом: then we left"
            ],
            [
              "Which is bigger?",
              "Что больше?"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Она старше меня.",
            "en": "She is <b>older than</b> me.",
            "gloss": "than = чем",
            "say": "She is older than me."
          },
          {
            "ru": "Москва больше Праги.",
            "en": "Moscow is <b>bigger than</b> Prague.",
            "say": "Moscow is bigger than Prague."
          },
          {
            "ru": "Сначала мы поели, потом ушли.",
            "en": "First we ate, <b>then</b> we left.",
            "gloss": "then = потом",
            "say": "First we ate, then we left."
          },
          {
            "ru": "Какой телефон лучше?",
            "en": "Which phone is <b>better</b>?",
            "gloss": "вопрос-сравнение",
            "say": "Which phone is better?"
          }
        ],
        "mistakes": [
          {
            "wrong": "She is older then me",
            "right": "She is older <b>than</b> me",
            "why": "сравнение → than (через a), не then"
          },
          {
            "wrong": "This is more cheap then that",
            "right": "This is <b>cheaper than</b> that",
            "why": "cheaper + than; then тут ни при чём"
          }
        ],
        "mnemonic": "🔤 Сравнение → thAn (чем). Потом → thEn.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сравнение — нужен than.",
            "q": "«Она старше меня» —",
            "opts": [
              "She is older then me",
              "She is older than me",
              "She is more old than me"
            ],
            "answer": 1,
            "explain": "сравнение → <b>than</b> (через a)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди, где «потом».",
            "q": "Где «потом»?",
            "opts": [
              "older than me",
              "first we ate, then we left",
              "bigger than that"
            ],
            "answer": 1,
            "explain": "<b>then</b> = потом; than = чем."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери сравнение с than.",
            "q": "Собери: «Москва больше Праги»",
            "want": "Moscow is bigger than Prague",
            "answer": "Moscow is bigger than Prague"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том выбирают телефон в магазине. Слушай сравнения: -er, more, better.",
      "lines": [
        {
          "who": "A",
          "en": "This phone is cheaper, but that one is better.",
          "ru": "Этот телефон дешевле, но тот лучше."
        },
        {
          "who": "B",
          "en": "Yes, but the second one is more expensive.",
          "ru": "Да, но второй дороже."
        },
        {
          "who": "A",
          "en": "True. Its camera is much better than this one.",
          "ru": "Верно. Его камера намного лучше этой."
        },
        {
          "who": "B",
          "en": "And the screen is bigger too.",
          "ru": "И экран тоже больше."
        },
        {
          "who": "A",
          "en": "Okay, let's take the better one. It's worth it!",
          "ru": "Ладно, берём который лучше. Оно того стоит!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — сравнительные формы. Повтори вслух.",
      "items": [
        {
          "en": "older",
          "ru": "старше (old)",
          "ex": "He is older than me."
        },
        {
          "en": "bigger",
          "ru": "больше (big)",
          "ex": "My car is bigger."
        },
        {
          "en": "cheaper",
          "ru": "дешевле (cheap)",
          "ex": "This shop is cheaper."
        },
        {
          "en": "more expensive",
          "ru": "дороже (expensive)",
          "ex": "Gold is more expensive."
        },
        {
          "en": "more interesting",
          "ru": "интереснее (interesting)",
          "ex": "This book is more interesting."
        },
        {
          "en": "better",
          "ru": "лучше (good)",
          "ex": "Tea is better than coffee."
        },
        {
          "en": "worse",
          "ru": "хуже (bad)",
          "ex": "The weather is worse."
        },
        {
          "en": "than",
          "ru": "чем",
          "ex": "She is taller than me."
        },
        {
          "en": "easier",
          "ru": "легче (easy)",
          "ex": "This is easier."
        }
      ]
    },
    "drag": {
      "intro": "Соедини сравнительную форму с переводом.",
      "pairs": [
        [
          "older",
          "старше"
        ],
        [
          "better",
          "лучше"
        ],
        [
          "worse",
          "хуже"
        ],
        [
          "more expensive",
          "дороже"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса, и день сравнений закрыт!",
      "items": [
        {
          "q": "«Мой брат выше меня» —",
          "opts": [
            "My brother is more tall than me",
            "My brother is taller than me",
            "My brother is taller then me"
          ],
          "answer": 1,
          "explain": "короткое слово → -er + than: <b>taller than</b>."
        },
        {
          "q": "«Эта книга интереснее» —",
          "opts": [
            "This book is interestinger",
            "This book is more interesting",
            "This book is more interestinger"
          ],
          "answer": 1,
          "explain": "длинное слово → <b>more interesting</b>."
        },
        {
          "q": "Что НЕправильно?",
          "opts": [
            "better",
            "worse",
            "more better"
          ],
          "answer": 2,
          "explain": "<b>more better</b> — двойное сравнение, так нельзя."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек сравнивает свой городок и большой город. Везде сравнения.",
      "title": "Two cities",
      "sentences": [
        "I live in a small town, but my sister lives in a big city.",
        "Her city is much bigger than my town.",
        "It is also more expensive.",
        "A flat there costs more than a house here.",
        "But life in the city is more interesting.",
        "There are more shops, cafes and cinemas.",
        "My town is quieter and cleaner.",
        "The air here is better than in the city.",
        "I think small towns are safer than big cities.",
        "But my sister says the city is more exciting!"
      ],
      "translation": "Я живу в маленьком городке, а моя сестра — в большом городе. Её город намного больше моего городка. Он ещё и дороже. Квартира там стоит больше, чем дом здесь. Но жизнь в городе интереснее. Там больше магазинов, кафе и кинотеатров. Мой городок тише и чище. Воздух здесь лучше, чем в городе. Я думаю, маленькие города безопаснее больших. Но моя сестра говорит, что в городе интереснее!"
    },
    "essay": {
      "intro": "Сравни две вещи — два города, двух людей, два телефона.",
      "prompt": "Напиши 3–5 предложений, сравнивая две вещи. Используй -er / more / better и than.",
      "hint": "Структуры: X is bigger than Y ; X is more expensive than Y ; X is better than Y.",
      "example": "My new phone is better than my old one. It is faster and the screen is bigger. But it is more expensive. My old phone was cheaper."
    },
    "picture": {
      "intro": "Сравни два предмета на картинке.",
      "emoji": "🐘🐭",
      "prompt": "Сравни слона и мышь. Используй bigger, smaller, than.",
      "hint": "Используй: The elephant is bigger than the mouse; The mouse is smaller.",
      "example": "The elephant is much bigger than the mouse. The mouse is smaller and faster. The elephant is heavier.",
      "img": "img/a2/day-18.jpg",
      "credit": "Фото: Bernard Spragg · CC0 · <a href=\"https://www.flickr.com/photos/88123769@N02/16225054215\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "19": {
    "day": 19,
    "week": "03",
    "level": "A2",
    "themeRu": "Самый-самый",
    "themeEn": "Superlatives",
    "intro": "Два предмета сравнивать ты уже умеешь: bigger, more interesting. Сегодня поднимемся на вершину и выделим один из всех — <b>самый-самый</b>. Это <b>превосходная степень</b>: the biggest (самый большой), the most interesting (самый интересный), the best (самый лучший). И вот что важно запомнить: перед «самым-самым» всегда стоит маленькое слово <b>the</b>. Поехали.",
    "introAudio": "Два предмета сравнивать ты уже умеешь: bigger, more interesting. Сегодня поднимемся на вершину и выделим один из всех — самый-самый. Это превосходная степень: the biggest, самый большой, the most interesting, самый интересный, the best, самый лучший. И вот что важно запомнить: перед самым-самым всегда стоит маленькое слово the. Поехали.",
    "goals": [
      "понять превосходную степень: the biggest, the most interesting, the best",
      "ставить обязательный артикль <b>the</b> перед «самым-самым»",
      "строить связку <b>the best … I've ever …</b> (+ Present Perfect)",
      "рассказать про «самое-самое» в своей жизни"
    ],
    "learned": [
      "Понял(а) превосходную степень: the biggest, the most interesting, the best",
      "Поставил(а) обязательный артикль <b>the</b> перед «самым-самым»",
      "Построил(а) связку <b>the best … I've ever …</b> (+ Present Perfect)",
      "Рассказал(а) про «самое-самое» в своей жизни"
    ],
    "review": {
      "intro": "Перед новым — разминка из вчерашнего дня. Вспомним сравнительную степень: bigger than, more interesting than. На этом фундаменте строим сегодня.",
      "introAudio": "Перед новым — разминка из вчерашнего дня. Вспомним сравнительную степень: bigger than, more interesting than. На этом фундаменте строим сегодня.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери сравнительную форму. interesting — длинное слово.",
          "q": "Как сказать «Эта книга интереснее»?",
          "opts": [
            "This book is interestinger",
            "This book is more interesting",
            "This book more interesting"
          ],
          "answer": 1,
          "explain": "Длинное прилагательное → <b>more interesting</b>, а не «interestinger»."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери сравнение с than.",
          "q": "Собери: «Сегодня теплее, чем вчера»",
          "want": "Today is warmer than yesterday",
          "answer": "Today is warmer than yesterday"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · короткие прилагательные",
        "title": "Самый-самый: <em>the + прил + -est</em>",
        "paras": [
          "Когда что-то «самое-самое», к короткому прилагательному добавляют <b>-est</b>, а перед ним обязательно ставят <b>the</b>: big → <b>the biggest</b> (самый большой), small → <b>the smallest</b>, fast → <b>the fastest</b>.",
          "Это превосходная степень — она выделяет один предмет из всех. Сравни: <b>bigger</b> (больше) — про два предмета; <b>the biggest</b> (самый большой) — про всех сразу.",
          "Маленькие правила написания: big → big<b>gest</b> (двойная согласная), happy → the happ<b>iest</b> (y → i), nice → the nic<b>est</b> (только -st)."
        ],
        "audio": "Когда что-то самое-самое, к короткому прилагательному добавляют -est, а перед ним обязательно the. big становится the biggest, small — the smallest, fast — the fastest. Это превосходная степень: она выделяет один предмет из всех.",
        "table": {
          "rows": [
            [
              "big → the biggest",
              "самый большой"
            ],
            [
              "small → the smallest",
              "самый маленький"
            ],
            [
              "fast → the fastest",
              "самый быстрый"
            ],
            [
              "happy → the happiest",
              "самый счастливый"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Это самая большая комната.",
            "en": "This is <b>the biggest</b> room.",
            "gloss": "big → the biggest",
            "say": "This is the biggest room."
          },
          {
            "ru": "Он самый высокий в классе.",
            "en": "He is <b>the tallest</b> in the class.",
            "gloss": "tall → the tallest",
            "say": "He is the tallest in the class."
          },
          {
            "ru": "Это самый дешёвый билет.",
            "en": "It's <b>the cheapest</b> ticket.",
            "gloss": "cheap → the cheapest",
            "say": "It's the cheapest ticket."
          },
          {
            "ru": "Сегодня самый счастливый день.",
            "en": "Today is <b>the happiest</b> day.",
            "gloss": "happy → the happiest",
            "say": "Today is the happiest day."
          }
        ],
        "mistakes": [
          {
            "wrong": "It is biggest room",
            "right": "It is <b>the</b> biggest room",
            "why": "перед превосходной степенью всегда the — это и есть главная ловушка"
          },
          {
            "wrong": "the bigest room",
            "right": "the <b>biggest</b> room",
            "why": "после короткой гласной согласная удваивается: big → biggest"
          }
        ],
        "mnemonic": "🏆 the + -est: the biggest, the smallest. Артикль the обязателен!",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную превосходную форму.",
            "q": "Как сказать «Это самая маленькая собака»?",
            "opts": [
              "It is smallest dog",
              "It is the smallest dog",
              "It is the most small dog"
            ],
            "answer": 1,
            "explain": "Короткое слово → the + -est: <b>the smallest</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Это самый быстрый поезд»",
            "want": "This is the fastest train",
            "answer": "This is the fastest train"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. tall → the tallest.",
            "q": "Он самый высокий в команде.",
            "accept": [
              "he is the tallest in the team",
              "he's the tallest in the team"
            ],
            "placeholder": "He is the ... in the team"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · длинные прилагательные",
        "title": "Длинные слова: <em>the most interesting</em>",
        "paras": [
          "У длинных прилагательных (2+ слога) не добавляют -est. Вместо этого ставят <b>the most</b> перед словом: interesting → <b>the most interesting</b> (самый интересный), beautiful → <b>the most beautiful</b>, expensive → <b>the most expensive</b>.",
          "Логика та же, что и со сравнением (more → most): <b>more interesting</b> (интереснее) → <b>the most interesting</b> (самый интересный).",
          "Главное — не лепить -est к длинному слову и не забывать the: не «interestingest», а <b>the most interesting</b>."
        ],
        "audio": "У длинных прилагательных не добавляют -est. Вместо этого ставят the most перед словом. interesting — the most interesting, beautiful — the most beautiful, expensive — the most expensive. Логика как со сравнением: more interesting, the most interesting.",
        "table": {
          "rows": [
            [
              "interesting → the most interesting",
              "самый интересный"
            ],
            [
              "beautiful → the most beautiful",
              "самый красивый"
            ],
            [
              "expensive → the most expensive",
              "самый дорогой"
            ],
            [
              "difficult → the most difficult",
              "самый трудный"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Это самый интересный фильм.",
            "en": "It's <b>the most interesting</b> film.",
            "gloss": "the most + interesting",
            "say": "It's the most interesting film."
          },
          {
            "ru": "Это самый красивый город.",
            "en": "It's <b>the most beautiful</b> city.",
            "gloss": "the most + beautiful",
            "say": "It's the most beautiful city."
          },
          {
            "ru": "Это самая дорогая машина здесь.",
            "en": "It's <b>the most expensive</b> car here.",
            "gloss": "the most + expensive",
            "say": "It's the most expensive car here."
          },
          {
            "ru": "Это самый трудный вопрос.",
            "en": "It's <b>the most difficult</b> question.",
            "gloss": "the most + difficult",
            "say": "It's the most difficult question."
          }
        ],
        "mistakes": [
          {
            "wrong": "the interestingest film",
            "right": "<b>the most interesting</b> film",
            "why": "длинное слово → the most, без -est"
          },
          {
            "wrong": "most beautiful city",
            "right": "<b>the</b> most beautiful city",
            "why": "перед most тоже нужен the"
          }
        ],
        "mnemonic": "📏 Длинное слово → the most: the most interesting, the most beautiful.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму. expensive — длинное слово.",
            "q": "Как сказать «Это самый дорогой ресторан»?",
            "opts": [
              "It is the expensivest restaurant",
              "It is the most expensive restaurant",
              "It is most expensive restaurant"
            ],
            "answer": 1,
            "explain": "Длинное слово → the most + the обязателен: <b>the most expensive</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Это самый красивый парк»",
            "want": "It is the most beautiful park",
            "answer": "It is the most beautiful park"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. interesting → the most interesting.",
            "q": "Это самый интересный урок.",
            "accept": [
              "it is the most interesting lesson",
              "it's the most interesting lesson"
            ],
            "placeholder": "It's the most ... lesson"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · исключения",
        "title": "Особые: <em>the best, the worst</em>",
        "paras": [
          "Три самых частых прилагательных меняются полностью. good → <b>the best</b> (самый лучший), bad → <b>the worst</b> (самый худший), far → <b>the furthest</b> (самый дальний).",
          "Их не надо складывать с -est или most — это готовые формы, как неправильные глаголы. Запомни цепочку из A2: good–better–<b>the best</b>, bad–worse–<b>the worst</b>.",
          "<b>the best</b> и <b>the worst</b> — самые частые слова в отзывах и разговоре: <b>the best coffee</b>, <b>the worst day</b>."
        ],
        "audio": "Три частых прилагательных меняются полностью. good становится the best, bad — the worst, far — the furthest. Их не складывают с -est или most, это готовые формы. the best и the worst — самые частые слова в отзывах.",
        "table": {
          "rows": [
            [
              "good → the best",
              "самый лучший"
            ],
            [
              "bad → the worst",
              "самый худший"
            ],
            [
              "far → the furthest",
              "самый дальний"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Это лучший кофе в городе.",
            "en": "It's <b>the best</b> coffee in town.",
            "gloss": "good → the best",
            "say": "It's the best coffee in town."
          },
          {
            "ru": "Это был худший день.",
            "en": "It was <b>the worst</b> day.",
            "gloss": "bad → the worst",
            "say": "It was the worst day."
          },
          {
            "ru": "Ты мой лучший друг.",
            "en": "You are my <b>best</b> friend.",
            "gloss": "the best",
            "say": "You are my best friend."
          },
          {
            "ru": "Это самый дальний город.",
            "en": "It's <b>the furthest</b> city.",
            "gloss": "far → the furthest",
            "say": "It's the furthest city."
          }
        ],
        "mistakes": [
          {
            "wrong": "the goodest day",
            "right": "<b>the best</b> day",
            "why": "good → the best, а не «goodest»"
          },
          {
            "wrong": "the most bad film",
            "right": "<b>the worst</b> film",
            "why": "bad → the worst, не «the most bad»"
          }
        ],
        "mnemonic": "⭐ good → the best, bad → the worst — учи как неправильные глаголы.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери особую форму.",
            "q": "Как сказать «Это лучший ресторан»?",
            "opts": [
              "It is the goodest restaurant",
              "It is the best restaurant",
              "It is the most good restaurant"
            ],
            "answer": 1,
            "explain": "good → <b>the best</b>, без -est и без most."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение в прошедшем.",
            "q": "Собери: «Это был худший фильм»",
            "want": "It was the worst film",
            "answer": "It was the worst film"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. good → the best.",
            "q": "Ты мой лучший друг.",
            "accept": [
              "you are my best friend",
              "you're my best friend"
            ],
            "placeholder": "You are my ... friend"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · самый-самый в жизни",
        "title": "Связка: <em>the best … I've ever …</em>",
        "paras": [
          "Очень частая и красивая связка: «самый лучший …, что я когда-либо …». По-английски — <b>the best … I've ever …</b> + 3-я форма глагола (это наш Present Perfect из недели 2!).",
          "<b>It's the best film I've ever seen.</b> = Это лучший фильм, что я когда-либо видел. <b>She's the kindest person I've ever met.</b> = Она самый добрый человек, которого я встречал.",
          "Схема: <b>the</b> + превосходная степень + существительное + <b>I've ever</b> + 3-я форма (seen, eaten, been, met)."
        ],
        "audio": "Очень частая связка: самый лучший, что я когда-либо. По-английски the best, плюс существительное, плюс I've ever, плюс третья форма глагола. It's the best film I've ever seen — это лучший фильм, что я видел.",
        "table": {
          "rows": [
            [
              "the best film I've ever seen",
              "лучший фильм, что я видел"
            ],
            [
              "the best food I've ever eaten",
              "лучшая еда, что я ел"
            ],
            [
              "the worst day I've ever had",
              "худший день в моей жизни"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Это лучший фильм, что я видел.",
            "en": "It's <b>the best film I've ever seen</b>.",
            "gloss": "+ Present Perfect",
            "say": "It's the best film I've ever seen."
          },
          {
            "ru": "Это самая вкусная еда, что я ел.",
            "en": "It's <b>the best food I've ever eaten</b>.",
            "gloss": "ever + eaten",
            "say": "It's the best food I've ever eaten."
          },
          {
            "ru": "Это самое красивое место, где я был.",
            "en": "It's <b>the most beautiful place I've ever been</b> to.",
            "gloss": "ever + been",
            "say": "It's the most beautiful place I've ever been to."
          },
          {
            "ru": "Он самый добрый человек, которого я встречал.",
            "en": "He's <b>the kindest person I've ever met</b>.",
            "gloss": "ever + met",
            "say": "He's the kindest person I've ever met."
          }
        ],
        "mistakes": [
          {
            "wrong": "the best film I ever saw",
            "right": "the best film I've <b>ever seen</b>",
            "why": "связка с опытом → Present Perfect: I've ever seen"
          },
          {
            "wrong": "the best film what I've seen",
            "right": "the best film <b>I've seen</b>",
            "why": "не нужно «what» — просто the best film I've seen"
          }
        ],
        "mnemonic": "🎬 the best … I've ever … + 3-я форма: the best film I've ever seen.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную связку с Present Perfect.",
            "q": "Как сказать «Это лучшая книга, что я читал»?",
            "opts": [
              "the best book I ever read",
              "the best book I've ever read",
              "the best book what I read"
            ],
            "answer": 1,
            "explain": "опыт → Present Perfect: <b>I've ever read</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери связку.",
            "q": "Собери: «Это лучший день, что у меня был»",
            "want": "It is the best day I've ever had",
            "answer": "It is the best day I've ever had"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух.",
            "target": "It's the best film I've ever seen.",
            "sub": "Это лучший фильм, что я видел.",
            "want": "best"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том говорят про любимое кино — превосходная степень в действии. Слушай the best и the most.",
      "lines": [
        {
          "who": "A",
          "en": "What's the best film you've ever seen?",
          "ru": "Какой лучший фильм ты когда-нибудь видел?"
        },
        {
          "who": "B",
          "en": "That's hard! Maybe the most beautiful one was 'Avatar'.",
          "ru": "Сложно! Наверное, самый красивый — «Аватар»."
        },
        {
          "who": "A",
          "en": "For me the best film is 'Titanic'. I've seen it ten times!",
          "ru": "А для меня лучший фильм — «Титаник». Я смотрела его десять раз!"
        },
        {
          "who": "B",
          "en": "Ten times? That's the most I've ever heard!",
          "ru": "Десять раз? Это самое большое, что я слышал!"
        },
        {
          "who": "A",
          "en": "It's the best love story ever.",
          "ru": "Это лучшая история любви на свете."
        }
      ]
    },
    "vocab": {
      "intro": "Главные слова дня — превосходная степень. Повтори вслух, обращай внимание на the.",
      "items": [
        {
          "en": "the biggest",
          "ru": "самый большой",
          "ex": "Russia is the biggest country."
        },
        {
          "en": "the smallest",
          "ru": "самый маленький",
          "ex": "This is the smallest box."
        },
        {
          "en": "the best",
          "ru": "самый лучший",
          "ex": "You are the best."
        },
        {
          "en": "the worst",
          "ru": "самый худший",
          "ex": "It was the worst day."
        },
        {
          "en": "the most expensive",
          "ru": "самый дорогой",
          "ex": "It's the most expensive car."
        },
        {
          "en": "the most beautiful",
          "ru": "самый красивый",
          "ex": "She is the most beautiful."
        },
        {
          "en": "the easiest",
          "ru": "самый лёгкий",
          "ex": "This is the easiest test."
        },
        {
          "en": "the tallest",
          "ru": "самый высокий",
          "ex": "He is the tallest boy."
        },
        {
          "en": "ever",
          "ru": "когда-либо",
          "ex": "The best book I've ever read."
        }
      ]
    },
    "drag": {
      "intro": "Соедини превосходную степень с её переводом.",
      "pairs": [
        [
          "the biggest",
          "самый большой"
        ],
        [
          "the best",
          "самый лучший"
        ],
        [
          "the worst",
          "самый худший"
        ],
        [
          "the most expensive",
          "самый дорогой"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса. Не забывай про обязательный the!",
      "items": [
        {
          "q": "«Это самый высокий дом» —",
          "opts": [
            "It is tallest house",
            "It is the tallest house",
            "It is the most tall house"
          ],
          "answer": 1,
          "explain": "Короткое слово → the + -est, артикль the обязателен."
        },
        {
          "q": "«Это самый интересный урок» —",
          "opts": [
            "It is the interestingest lesson",
            "It is the most interesting lesson",
            "It is most interesting lesson"
          ],
          "answer": 1,
          "explain": "Длинное слово → the most interesting."
        },
        {
          "q": "«Это лучший кофе, что я пил» —",
          "opts": [
            "the best coffee I ever drank",
            "the best coffee I've ever had",
            "the most good coffee"
          ],
          "answer": 1,
          "explain": "the best … I've ever … + Present Perfect."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай рассказ про лучший отпуск. Везде превосходная степень.",
      "title": "The best holiday",
      "sentences": [
        "Last summer I had the best holiday ever.",
        "We went to Italy, the most beautiful country I've ever seen.",
        "Rome is the biggest city there.",
        "We ate the best pizza in the world.",
        "The sea was the warmest water I've ever felt.",
        "Our hotel was the most expensive one, but it was great.",
        "Our guide was the kindest person.",
        "The food was the best part of the trip.",
        "It was the happiest week of my life.",
        "I want to go back — it's the best place ever!"
      ],
      "translation": "Прошлым летом у меня был лучший отпуск в жизни. Мы поехали в Италию — самую красивую страну, что я видел. Рим — самый большой город там. Мы ели лучшую пиццу в мире. Море было самой тёплой водой, что я чувствовал. Наш отель был самым дорогим, но классным. Наш гид был самым добрым человеком. Еда была лучшей частью поездки. Это была самая счастливая неделя в моей жизни. Хочу вернуться — это лучшее место на свете!"
    },
    "essay": {
      "intro": "Теперь твоя очередь — расскажи про своё «самое-самое»!",
      "prompt": "Напиши 3–5 предложений про самое-самое в твоей жизни. Используй the best, the most…, the biggest и связку the best … I've ever …",
      "hint": "Структуры: My best friend is… ; The best film I've ever seen is… ; The most beautiful place is…",
      "example": "My best friend is Anna. The best film I've ever seen is 'Titanic'. The most beautiful city I've ever visited is Prague. My happiest day was my wedding."
    },
    "picture": {
      "intro": "Опиши «самое-самое» по картинке.",
      "emoji": "🏆🥇🌟",
      "prompt": "Опиши, что здесь «самое-самое». Используй the best, the biggest, the most…",
      "hint": "Используй: It's the best…; It's the biggest…; the most beautiful…",
      "example": "This is the best team. They won the biggest prize. It's the happiest day for them.",
      "img": "img/a2/day-19.jpg",
      "credit": "Фото: Onasill - Bill Badzo - 149 Million Views - Thank Y · Public Domain · <a href=\"https://www.flickr.com/photos/7156765@N05/51461034500\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "20": {
    "day": 20,
    "week": "03",
    "level": "A2",
    "themeRu": "Так же, как",
    "themeEn": "as…as + adverbs",
    "intro": "Две вещи бывают разными, а бывают <b>одинаковыми</b> — и для этого есть удобное <b>as … as</b> (так же …, как). Это первый из двух сегодняшних инструментов. Второй — <b>наречия</b>: слова о том, <b>как</b> ты что-то делаешь (быстро, медленно, хорошо). И тут классическая ловушка: «он хорошо говорит» — это <b>speaks well</b>, а не «speaks good». Разберёмся.",
    "introAudio": "Две вещи бывают разными, а бывают одинаковыми — и для этого есть удобное as as, так же, как. Это первый из двух сегодняшних инструментов. Второй — наречия: слова о том, как ты что-то делаешь: быстро, медленно, хорошо. И тут классическая ловушка: он хорошо говорит — это speaks well, а не speaks good. Разберёмся.",
    "goals": [
      "сравнивать «так же, как»: <b>as fast as</b>, as big as",
      "говорить «не такой …, как»: <b>not as tall as</b>",
      "отличать наречие от прилагательного: quick → <b>quickly</b>",
      "запомнить good → <b>well</b>: «speaks English well», не «good»"
    ],
    "learned": [
      "Сравнил(а) «так же, как»: <b>as fast as</b>, as big as",
      "Сказал(а) «не такой …, как»: <b>not as tall as</b>",
      "Научился(лась) отличать наречие от прилагательного: quick → <b>quickly</b>",
      "Запомнил(а) good → <b>well</b>: «speaks English well», не «good»"
    ],
    "review": {
      "intro": "Перед новым — разминка из вчера. Вспомним превосходную степень: the biggest, the best. Не забывай про the!",
      "introAudio": "Перед новым — разминка из вчера. Вспомним превосходную степень: the biggest, the best. Не забывай про the!",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери превосходную форму. big — короткое слово.",
          "q": "Как сказать «Это самый большой дом»?",
          "opts": [
            "It is biggest house",
            "It is the biggest house",
            "It is the most big house"
          ],
          "answer": 1,
          "explain": "Короткое слово → the + -est: <b>the biggest</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери связку с Present Perfect.",
          "q": "Собери: «Это лучший фильм, что я видел»",
          "want": "It is the best film I've ever seen",
          "answer": "It is the best film I've ever seen"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · так же, как",
        "title": "Одинаково: <em>as … as</em>",
        "paras": [
          "Когда два предмета одинаковые, ставим прилагательное между двумя <b>as</b>: <b>as … as</b>. <b>Tom is as tall as Ben.</b> = Том такой же высокий, как Бен.",
          "Внутри — обычное прилагательное без изменений (не -er!): as <b>big</b> as, as <b>fast</b> as, as <b>good</b> as. Это значит «настолько же …, насколько».",
          "Частые устойчивые фразы: <b>as soon as possible</b> (как можно скорее), <b>as good as new</b> (как новый)."
        ],
        "audio": "Когда два предмета одинаковые, ставим прилагательное между двумя as. Tom is as tall as Ben — Том такой же высокий, как Бен. Внутри обычное прилагательное без -er: as big as, as fast as, as good as.",
        "table": {
          "rows": [
            [
              "as tall as",
              "такой же высокий, как"
            ],
            [
              "as big as",
              "такой же большой, как"
            ],
            [
              "as fast as",
              "такой же быстрый, как"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Том такой же высокий, как Бен.",
            "en": "Tom is <b>as tall as</b> Ben.",
            "gloss": "as + tall + as",
            "say": "Tom is as tall as Ben."
          },
          {
            "ru": "Эта сумка такая же большая, как моя.",
            "en": "This bag is <b>as big as</b> mine.",
            "gloss": "as + big + as",
            "say": "This bag is as big as mine."
          },
          {
            "ru": "Она бегает так же быстро, как я.",
            "en": "She runs <b>as fast as</b> me.",
            "gloss": "as + fast + as",
            "say": "She runs as fast as me."
          },
          {
            "ru": "Приходи как можно скорее.",
            "en": "Come <b>as soon as</b> possible.",
            "gloss": "устойчивая фраза",
            "say": "Come as soon as possible."
          }
        ],
        "mistakes": [
          {
            "wrong": "as taller as Ben",
            "right": "<b>as tall as</b> Ben",
            "why": "между as … as — простое прилагательное, без -er"
          },
          {
            "wrong": "so tall as Ben",
            "right": "<b>as</b> tall <b>as</b> Ben",
            "why": "равенство — это as … as, оба слова as"
          }
        ],
        "mnemonic": "🟰 as + прилагательное + as: as tall as, as fast as.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное равенство.",
            "q": "Как сказать «Анна такая же высокая, как Том»?",
            "opts": [
              "Anna is as tall as Tom",
              "Anna is as taller as Tom",
              "Anna is so tall as Tom"
            ],
            "answer": 0,
            "explain": "Равенство → as + tall + as, без -er."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Эта книга такая же хорошая, как та»",
            "want": "This book is as good as that one",
            "answer": "This book is as good as that one"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. fast не меняется.",
            "q": "Он бегает так же быстро, как я.",
            "accept": [
              "he runs as fast as me",
              "he runs as fast as i do"
            ],
            "placeholder": "He runs as ... as me"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · не такой, как",
        "title": "Меньше: <em>not as … as</em>",
        "paras": [
          "Чтобы сказать «не такой …, как», добавляем <b>not</b>: <b>not as … as</b>. <b>I'm not as tall as you.</b> = Я не такой высокий, как ты (= ты выше).",
          "Это мягкий способ сравнить: вместо «ты выше» (you are taller) можно сказать «я не такой высокий, как ты» (I'm not as tall as you). Смысл тот же.",
          "<b>Today is not as cold as yesterday.</b> = Сегодня не так холодно, как вчера."
        ],
        "audio": "Чтобы сказать не такой, как, добавляем not: not as as. I'm not as tall as you — я не такой высокий, как ты. Это мягкий способ сравнить: вместо ты выше можно сказать я не такой высокий, как ты.",
        "table": {
          "rows": [
            [
              "not as tall as",
              "не такой высокий, как"
            ],
            [
              "not as cold as",
              "не такой холодный, как"
            ],
            [
              "not as good as",
              "не такой хороший, как"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я не такой высокий, как ты.",
            "en": "I'm <b>not as tall as</b> you.",
            "gloss": "not as … as",
            "say": "I'm not as tall as you."
          },
          {
            "ru": "Сегодня не так холодно, как вчера.",
            "en": "Today is <b>not as cold as</b> yesterday.",
            "gloss": "not as cold as",
            "say": "Today is not as cold as yesterday."
          },
          {
            "ru": "Этот фильм не такой хороший, как книга.",
            "en": "This film is <b>not as good as</b> the book.",
            "gloss": "not as good as",
            "say": "This film is not as good as the book."
          },
          {
            "ru": "Мой телефон не такой дорогой, как твой.",
            "en": "My phone is <b>not as expensive as</b> yours.",
            "gloss": "not as … as",
            "say": "My phone is not as expensive as yours."
          }
        ],
        "mistakes": [
          {
            "wrong": "I am not so tall as you",
            "right": "I'm <b>not as tall as</b> you",
            "why": "стандартно — not as … as"
          },
          {
            "wrong": "I am not as taller as you",
            "right": "I'm not as <b>tall</b> as you",
            "why": "после as — простое прилагательное, без -er"
          }
        ],
        "mnemonic": "➖ not as … as = «не такой …, как»: not as cold as yesterday.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное отрицание.",
            "q": "Как сказать «Я не такой быстрый, как ты»?",
            "opts": [
              "I am not as fast as you",
              "I am not as faster as you",
              "I am not so fast than you"
            ],
            "answer": 0,
            "explain": "not as + fast + as, без -er и без than."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Этот фильм не такой хороший, как книга»",
            "want": "This film is not as good as the book",
            "answer": "This film is not as good as the book"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод.",
            "q": "Сегодня не так холодно, как вчера.",
            "accept": [
              "today is not as cold as yesterday",
              "today isn't as cold as yesterday"
            ],
            "placeholder": "Today is not as ... as yesterday"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · наречия",
        "title": "Как делаешь: <em>quick → quickly</em>",
        "paras": [
          "Прилагательное описывает предмет (a <b>quick</b> car — быстрая машина), а наречие описывает действие — КАК ты делаешь (drive <b>quickly</b> — ехать быстро).",
          "Чаще всего наречие = прилагательное + <b>-ly</b>: slow → <b>slowly</b>, careful → <b>carefully</b>, quiet → <b>quietly</b>, easy → <b>easily</b> (y → i).",
          "Наречие обычно стоит ПОСЛЕ глагола: She speaks <b>slowly</b>. He drives <b>carefully</b>."
        ],
        "audio": "Прилагательное описывает предмет: a quick car. Наречие описывает действие, как ты делаешь: drive quickly. Чаще всего наречие это прилагательное плюс -ly: slow — slowly, careful — carefully, easy — easily. Наречие обычно стоит после глагола.",
        "table": {
          "rows": [
            [
              "quick → quickly",
              "быстрый → быстро"
            ],
            [
              "slow → slowly",
              "медленный → медленно"
            ],
            [
              "careful → carefully",
              "осторожный → осторожно"
            ],
            [
              "easy → easily",
              "лёгкий → легко"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Она говорит медленно.",
            "en": "She speaks <b>slowly</b>.",
            "gloss": "slow → slowly",
            "say": "She speaks slowly."
          },
          {
            "ru": "Он водит осторожно.",
            "en": "He drives <b>carefully</b>.",
            "gloss": "careful → carefully",
            "say": "He drives carefully."
          },
          {
            "ru": "Пожалуйста, говори тихо.",
            "en": "Please speak <b>quietly</b>.",
            "gloss": "quiet → quietly",
            "say": "Please speak quietly."
          },
          {
            "ru": "Я легко это сделал.",
            "en": "I did it <b>easily</b>.",
            "gloss": "easy → easily",
            "say": "I did it easily."
          }
        ],
        "mistakes": [
          {
            "wrong": "She speaks slow",
            "right": "She speaks <b>slowly</b>",
            "why": "после глагола — наречие: speak slowly"
          },
          {
            "wrong": "He drives careful",
            "right": "He drives <b>carefully</b>",
            "why": "как водит → наречие carefully"
          }
        ],
        "mnemonic": "🏃 Как делаешь? → наречие на -ly: slowly, carefully, quietly.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери наречие после глагола.",
            "q": "Как сказать «Она говорит медленно»?",
            "opts": [
              "She speaks slow",
              "She speaks slowly",
              "She is speak slow"
            ],
            "answer": 1,
            "explain": "После глагола → наречие: <b>slowly</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Он водит осторожно»",
            "want": "He drives carefully",
            "answer": "He drives carefully"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши наречие. quiet → quietly.",
            "q": "Пожалуйста, говори тихо.",
            "accept": [
              "please speak quietly"
            ],
            "placeholder": "Please speak ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "<em>good → well</em>: «speaks English well»",
        "paras": [
          "Главная ловушка: у <b>good</b> наречие особое — <b>well</b> (не «goodly»). «Он хорошо говорит по-английски» — <b>He speaks English well</b>, а НЕ «speaks good English».",
          "Правило: <b>good</b> — это какой (good English — хороший английский), а <b>well</b> — это как (speak well — говорить хорошо). После глагола нужно well.",
          "Ещё пара особых: <b>fast → fast</b> (he runs fast), <b>hard → hard</b> (she works hard) — форма не меняется."
        ],
        "audio": "Главная ловушка: у good наречие особое — well, не goodly. Он хорошо говорит по-английски — He speaks English well, а не speaks good English. good это какой, well это как. Ещё fast и hard форму не меняют.",
        "table": {
          "rows": [
            [
              "good → well",
              "хороший → хорошо"
            ],
            [
              "fast → fast",
              "быстрый → быстро (не меняется)"
            ],
            [
              "hard → hard",
              "усердный → усердно (не меняется)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он хорошо говорит по-английски.",
            "en": "He speaks English <b>well</b>.",
            "gloss": "good → well",
            "say": "He speaks English well."
          },
          {
            "ru": "Она хорошо готовит.",
            "en": "She cooks <b>well</b>.",
            "gloss": "не «cooks good»",
            "say": "She cooks well."
          },
          {
            "ru": "Он бегает быстро.",
            "en": "He runs <b>fast</b>.",
            "gloss": "fast = fast",
            "say": "He runs fast."
          },
          {
            "ru": "Она усердно работает.",
            "en": "She works <b>hard</b>.",
            "gloss": "hard = hard",
            "say": "She works hard."
          }
        ],
        "mistakes": [
          {
            "wrong": "He speaks good English",
            "right": "He speaks English <b>well</b>",
            "why": "как говорит → наречие well, не good"
          },
          {
            "wrong": "She cooks good",
            "right": "She cooks <b>well</b>",
            "why": "после глагола — well"
          }
        ],
        "mnemonic": "👍 good → well: speak English WELL, не «good».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери наречие к глаголу speak.",
            "q": "Как сказать «Он хорошо говорит по-английски»?",
            "opts": [
              "He speaks good English",
              "He speaks English well",
              "He speaks English good"
            ],
            "answer": 1,
            "explain": "Как говорит → наречие <b>well</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Она хорошо готовит»",
            "want": "She cooks well",
            "answer": "She cooks well"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух. Не «good» — well!",
            "target": "He speaks English well.",
            "sub": "Он хорошо говорит по-английски.",
            "want": "well"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Том хвалит Аню — слушай наречия и as … as в живой речи.",
      "lines": [
        {
          "who": "A",
          "en": "You speak English really well!",
          "ru": "Ты очень хорошо говоришь по-английски!"
        },
        {
          "who": "B",
          "en": "Thanks! But I don't speak as fast as you.",
          "ru": "Спасибо! Но я говорю не так быстро, как ты."
        },
        {
          "who": "A",
          "en": "You drive well too. Very carefully.",
          "ru": "И водишь ты хорошо. Очень аккуратно."
        },
        {
          "who": "B",
          "en": "I try to drive slowly in the city.",
          "ru": "Я стараюсь ехать медленно по городу."
        },
        {
          "who": "A",
          "en": "That's good. Safe is better than fast.",
          "ru": "Это хорошо. Безопасно лучше, чем быстро."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — наречия и обороты сравнения. Повтори вслух.",
      "items": [
        {
          "en": "as … as",
          "ru": "так же …, как",
          "ex": "as tall as Tom"
        },
        {
          "en": "not as … as",
          "ru": "не такой …, как",
          "ex": "not as cold as yesterday"
        },
        {
          "en": "well",
          "ru": "хорошо (наречие)",
          "ex": "She sings well."
        },
        {
          "en": "quickly",
          "ru": "быстро",
          "ex": "He eats quickly."
        },
        {
          "en": "slowly",
          "ru": "медленно",
          "ex": "Speak slowly, please."
        },
        {
          "en": "carefully",
          "ru": "осторожно",
          "ex": "Drive carefully."
        },
        {
          "en": "quietly",
          "ru": "тихо",
          "ex": "Please talk quietly."
        },
        {
          "en": "hard",
          "ru": "усердно",
          "ex": "He works hard."
        },
        {
          "en": "fast",
          "ru": "быстро",
          "ex": "She runs fast."
        }
      ]
    },
    "drag": {
      "intro": "Соедини наречие с переводом.",
      "pairs": [
        [
          "well",
          "хорошо"
        ],
        [
          "quickly",
          "быстро"
        ],
        [
          "slowly",
          "медленно"
        ],
        [
          "carefully",
          "осторожно"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса. Помни: после глагола нужно наречие!",
      "items": [
        {
          "q": "«Том такой же высокий, как Бен» —",
          "opts": [
            "Tom is as tall as Ben",
            "Tom is as taller as Ben",
            "Tom is so tall as Ben"
          ],
          "answer": 0,
          "explain": "Равенство → as + прилагательное + as."
        },
        {
          "q": "«Он хорошо говорит по-английски» —",
          "opts": [
            "He speaks good English",
            "He speaks English well",
            "He speaks English good"
          ],
          "answer": 1,
          "explain": "Как говорит → наречие well."
        },
        {
          "q": "«Она водит осторожно» —",
          "opts": [
            "She drives careful",
            "She drives carefully",
            "She is careful drive"
          ],
          "answer": 1,
          "explain": "После глагола → наречие carefully."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай рассказ про брата. Обрати внимание на наречия и as … as.",
      "title": "My brother",
      "sentences": [
        "My brother and I are very different.",
        "He is as tall as me, but he is not as quiet as me.",
        "He speaks very quickly and very loudly.",
        "I speak slowly and quietly.",
        "He drives fast, but not very carefully.",
        "I drive slowly and carefully.",
        "He plays the guitar really well.",
        "I don't play as well as him.",
        "But I work harder at school.",
        "We are different, but we are good friends."
      ],
      "translation": "Мы с братом очень разные. Он такой же высокий, как я, но не такой тихий. Он говорит очень быстро и громко. Я говорю медленно и тихо. Он водит быстро, но не очень осторожно. Я вожу медленно и аккуратно. Он отлично играет на гитаре. Я играю не так хорошо, как он. Зато я усерднее учусь в школе. Мы разные, но хорошие друзья."
    },
    "essay": {
      "intro": "Сравни себя с кем-нибудь — кто как что делает.",
      "prompt": "Напиши 3–5 предложений: сравни себя с другом или родственником. Используй as … as, not as … as и наречия (well, quickly, slowly).",
      "hint": "Структуры: I am as tall as… ; He speaks faster than me ; She cooks well ; I am not as … as…",
      "example": "My sister is as tall as me. She speaks English very well. She works hard. But I don't drive as carefully as her."
    },
    "picture": {
      "intro": "Опиши, кто как что делает, по картинке.",
      "emoji": "🏃💨🐢",
      "prompt": "Опиши, как люди делают что-то. Используй наречия (quickly, slowly) и as … as.",
      "hint": "Используй: He runs quickly; She walks slowly; not as fast as…",
      "example": "The man runs quickly. The turtle moves slowly. The turtle is not as fast as the man.",
      "img": "img/a2/day-20.jpg",
      "credit": "Фото: comedy_nose · Public Domain · <a href=\"https://www.flickr.com/photos/23408922@N07/9320845849\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "21": {
    "day": 21,
    "week": "03",
    "level": "A2",
    "themeRu": "Повторение №3",
    "themeEn": "Review 3",
    "intro": "Третья неделя закрыта — ещё одна глава дописана. За эти дни ты научился(ась) говорить о будущем сразу тремя способами (<b>going to</b>, <b>will</b>, <b>I'm meeting</b>) и сравнивать всё на свете (<b>bigger</b>, <b>the biggest</b>, <b>as … as</b>). Сегодня без новой грамматики: сведём всё вместе, потренируемся и проверим себя мини-тестом. Вперёд.",
    "introAudio": "Третья неделя закрыта — ещё одна глава дописана. За эти дни ты научился говорить о будущем сразу тремя способами: going to, will, I'm meeting. И сравнивать всё на свете: bigger, the biggest, as as. Сегодня без новой грамматики: сведём всё вместе, потренируемся и проверим себя мини-тестом. Вперёд.",
    "goals": [
      "уверенно выбирать между <b>will</b> и <b>be going to</b>",
      "собрать всё будущее: going to, will, <b>present continuous</b>",
      "свободно сравнивать: comparatives, superlatives, <b>as … as</b>",
      "не путать прилагательное и наречие: <b>good</b> vs <b>well</b>"
    ],
    "learned": [
      "Уверенно выбрал(а) между <b>will</b> и <b>be going to</b>",
      "Собрал(а) воедино всё будущее: going to, will, <b>present continuous</b>",
      "Свободно сравнил(а): comparatives, superlatives, <b>as … as</b>",
      "Перестал(а) путать прилагательное и наречие: <b>good</b> vs <b>well</b>"
    ],
    "review": {
      "intro": "Сегодня — повторение всей недели 3! Начнём с быстрой разминки: будущее и сравнение. Потом соберём всё вместе.",
      "introAudio": "Сегодня повторение всей недели 3. Начнём с быстрой разминки: будущее и сравнение. Потом соберём всё вместе.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> спонтанное решение или план? Выбери форму.",
          "q": "«Решено, я тебе помогу!» (решил сейчас) —",
          "opts": [
            "I am going to help you",
            "I will help you",
            "I help you"
          ],
          "answer": 1,
          "explain": "Решение в момент речи → <b>will</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери превосходную степень.",
          "q": "Собери: «Это самый большой город»",
          "want": "It is the biggest city",
          "answer": "It is the biggest city"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Повторяем · будущее",
        "title": "<em>going to</em> или <em>will</em>?",
        "paras": [
          "Два способа говорить о будущем. <b>be going to</b> — это план, решённый ЗАРАНЕЕ: <b>I'm going to visit my mum on Sunday.</b> (уже решил раньше).",
          "<b>will</b> — это решение или прогноз ПРЯМО СЕЙЧАС: <b>It's cold. I'll close the window.</b> (решил в момент речи). Обещания тоже will: <b>I'll help you.</b>",
          "Запомни ловушку: спонтанно → <b>will</b>; план был раньше → <b>going to</b>. И никогда не «I will going»."
        ],
        "audio": "Два способа про будущее. be going to это план, решённый заранее: I'm going to visit my mum on Sunday. will это решение или прогноз прямо сейчас: It's cold, I'll close the window. Обещания тоже will. Спонтанно — will, план был раньше — going to.",
        "table": {
          "rows": [
            [
              "I'm going to (plan)",
              "план заранее"
            ],
            [
              "I'll (decision now)",
              "решение сейчас"
            ],
            [
              "I'll (promise)",
              "обещание"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я собираюсь купить машину (план).",
            "en": "I'm <b>going to</b> buy a car.",
            "gloss": "план заранее",
            "say": "I'm going to buy a car."
          },
          {
            "ru": "Холодно. Я закрою окно (решил сейчас).",
            "en": "It's cold. I'<b>ll</b> close the window.",
            "gloss": "решение сейчас → will",
            "say": "It's cold. I'll close the window."
          },
          {
            "ru": "Я тебе помогу (обещание).",
            "en": "I'<b>ll</b> help you.",
            "gloss": "обещание → will",
            "say": "I'll help you."
          },
          {
            "ru": "Думаю, завтра будет дождь.",
            "en": "I think it <b>will</b> rain tomorrow.",
            "gloss": "прогноз → will",
            "say": "I think it will rain tomorrow."
          }
        ],
        "mistakes": [
          {
            "wrong": "I will going to buy it",
            "right": "I'<b>m going to</b> buy it",
            "why": "либо will, либо going to — не вместе"
          },
          {
            "wrong": "Wait, I go to help you",
            "right": "Wait, I'<b>ll</b> help you",
            "why": "спонтанное решение → will"
          }
        ],
        "mnemonic": "🔮 План заранее → going to. Решил сейчас → will.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> телефон звонит — это решение в момент речи.",
            "q": "«Телефон звонит. Я отвечу.» —",
            "opts": [
              "I am going to answer it",
              "I'll answer it",
              "I answer it"
            ],
            "answer": 1,
            "explain": "Решил сейчас → <b>will</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> план был решён раньше.",
            "q": "«Я уже решил: в субботу навещу бабушку.» —",
            "opts": [
              "I'll visit my grandma",
              "I'm going to visit my grandma",
              "I visit my grandma"
            ],
            "answer": 1,
            "explain": "План заранее → <b>going to</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери прогноз с will.",
            "q": "Собери: «Я думаю, тебе понравится»",
            "want": "I think you will like it",
            "answer": "I think you will like it"
          }
        ]
      },
      {
        "eyebrow": "Повторяем · договорённости",
        "title": "Завтра в пять: <em>I'm meeting…</em>",
        "paras": [
          "Для договорённостей с другими людьми (встреча уже в календаре) англичане используют Present Continuous: <b>I'm meeting Tom at five.</b> = Я встречаюсь с Томом в пять.",
          "Это почти точно случится, время и место известны. Часто рядом стоит слово времени: <b>tomorrow, tonight, on Friday</b>.",
          "Ловушка из русского: «Завтра я встречаю его» → не «I meet», а <b>I'm meeting him tomorrow</b> (форма -ing)."
        ],
        "audio": "Для договорённостей с другими людьми англичане используют Present Continuous: I'm meeting Tom at five. Это почти точно случится, время и место известны. Рядом часто стоит tomorrow, tonight, on Friday. Не I meet, а I'm meeting him tomorrow.",
        "table": {
          "rows": [
            [
              "I'm meeting Tom at 5.",
              "встречаюсь (договорённость)"
            ],
            [
              "We're flying on Friday.",
              "летим в пятницу"
            ],
            [
              "She's coming tonight.",
              "она придёт вечером"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я встречаюсь с Анной завтра.",
            "en": "I'<b>m meeting</b> Anna tomorrow.",
            "gloss": "договорённость",
            "say": "I'm meeting Anna tomorrow."
          },
          {
            "ru": "Мы летим в Рим в пятницу.",
            "en": "We'<b>re flying</b> to Rome on Friday.",
            "gloss": "-ing для будущего",
            "say": "We're flying to Rome on Friday."
          },
          {
            "ru": "Она приходит вечером.",
            "en": "She'<b>s coming</b> tonight.",
            "gloss": "tonight + -ing",
            "say": "She's coming tonight."
          },
          {
            "ru": "Что ты делаешь в выходные?",
            "en": "What are you <b>doing</b> at the weekend?",
            "gloss": "планы → -ing",
            "say": "What are you doing at the weekend?"
          }
        ],
        "mistakes": [
          {
            "wrong": "I meet him tomorrow",
            "right": "I'<b>m meeting</b> him tomorrow",
            "why": "договорённость на будущее → форма -ing"
          }
        ],
        "mnemonic": "📅 Договорённость на будущее → I'm meeting, we're flying.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> договорённость с человеком на вечер.",
            "q": "«Я встречаюсь с другом сегодня вечером» —",
            "opts": [
              "I meet a friend tonight",
              "I'm meeting a friend tonight",
              "I will meeting a friend tonight"
            ],
            "answer": 1,
            "explain": "Договорённость → Present Continuous: <b>I'm meeting</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери договорённость.",
            "q": "Собери: «Мы летим в Рим в пятницу»",
            "want": "We are flying to Rome on Friday",
            "answer": "We are flying to Rome on Friday"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши вопрос про планы.",
            "q": "Что ты делаешь завтра?",
            "accept": [
              "what are you doing tomorrow"
            ],
            "placeholder": "What are you ... tomorrow?"
          }
        ]
      },
      {
        "eyebrow": "Повторяем · сравнение",
        "title": "<em>bigger</em> и <em>the biggest</em>",
        "paras": [
          "Сравнительная степень — про ДВА предмета: короткое слово + <b>-er</b> + than (bigger than), длинное — <b>more</b> + слово (more interesting than). Ловушка: than ≠ then, и никогда «more better».",
          "Превосходная — про ВСЕХ сразу, и обязательно с <b>the</b>: <b>the biggest</b>, <b>the most interesting</b>, <b>the best</b>. Артикль the забывать нельзя!",
          "Особые формы помни: good → better → <b>the best</b>; bad → worse → <b>the worst</b>."
        ],
        "audio": "Сравнительная степень про два предмета: короткое слово плюс -er плюс than, длинное — more плюс слово. Превосходная про всех сразу и обязательно с the: the biggest, the most interesting, the best. Помни особые: good, better, the best; bad, worse, the worst.",
        "table": {
          "rows": [
            [
              "big → bigger → the biggest",
              "сравн. и превосх."
            ],
            [
              "good → better → the best",
              "особая форма"
            ],
            [
              "interesting → more / the most",
              "длинное слово"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Москва больше Парижа.",
            "en": "Moscow is <b>bigger than</b> Paris.",
            "gloss": "-er + than",
            "say": "Moscow is bigger than Paris."
          },
          {
            "ru": "Это самый большой город в России.",
            "en": "It's <b>the biggest</b> city in Russia.",
            "gloss": "the + -est",
            "say": "It's the biggest city in Russia."
          },
          {
            "ru": "Эта книга интереснее.",
            "en": "This book is <b>more interesting</b>.",
            "gloss": "длинное → more",
            "say": "This book is more interesting."
          },
          {
            "ru": "Это лучший день в моей жизни.",
            "en": "It's <b>the best</b> day of my life.",
            "gloss": "good → the best",
            "say": "It's the best day of my life."
          }
        ],
        "mistakes": [
          {
            "wrong": "It is biggest city",
            "right": "It is <b>the</b> biggest city",
            "why": "превосходная степень всегда с the"
          },
          {
            "wrong": "more better",
            "right": "<b>better</b>",
            "why": "good → better, без more"
          }
        ],
        "mnemonic": "📊 Два → -er than. Все → the …-est / the most.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> easy — короткое слово, y → i.",
            "q": "«Английский легче китайского» —",
            "opts": [
              "English is easyer than Chinese",
              "English is easier than Chinese",
              "English is more easy than Chinese"
            ],
            "answer": 1,
            "explain": "easy → <b>easier</b> (y → i)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> expensive — длинное слово.",
            "q": "«Это самый дорогой ресторан» —",
            "opts": [
              "It is the expensivest restaurant",
              "It is the most expensive restaurant",
              "It is most expensive restaurant"
            ],
            "answer": 1,
            "explain": "Длинное слово → the most + the обязателен."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери связку с Present Perfect.",
            "q": "Собери: «Это был худший фильм, что я видел»",
            "want": "It was the worst film I've ever seen",
            "answer": "It was the worst film I've ever seen"
          }
        ]
      },
      {
        "eyebrow": "Повторяем · так же + наречия",
        "title": "<em>as … as</em> и <em>good → well</em>",
        "paras": [
          "«Так же …, как» — это <b>as … as</b> с простым прилагательным: as tall as, as fast as. «Не такой …, как» — <b>not as … as</b>.",
          "Не путай прилагательное (какой) и наречие (как): a <b>quick</b> car, но drive <b>quickly</b>. Наречие обычно с -ly и стоит после глагола.",
          "Главная ловушка: у good наречие — <b>well</b>. «Он хорошо говорит по-английски» = <b>He speaks English well</b>, не «good»."
        ],
        "audio": "Так же, как — это as as с простым прилагательным. Не такой, как — not as as. Не путай прилагательное и наречие: a quick car, но drive quickly. Главная ловушка: у good наречие well. He speaks English well, не good.",
        "table": {
          "rows": [
            [
              "as fast as",
              "так же быстро, как"
            ],
            [
              "not as tall as",
              "не такой высокий, как"
            ],
            [
              "good → well",
              "хорошо (наречие)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Она бегает так же быстро, как я.",
            "en": "She runs <b>as fast as</b> me.",
            "gloss": "as … as",
            "say": "She runs as fast as me."
          },
          {
            "ru": "Сегодня не так холодно, как вчера.",
            "en": "Today is <b>not as cold as</b> yesterday.",
            "gloss": "not as … as",
            "say": "Today is not as cold as yesterday."
          },
          {
            "ru": "Он хорошо говорит по-английски.",
            "en": "He speaks English <b>well</b>.",
            "gloss": "good → well",
            "say": "He speaks English well."
          },
          {
            "ru": "Пожалуйста, езжай осторожно.",
            "en": "Please drive <b>carefully</b>.",
            "gloss": "наречие -ly",
            "say": "Please drive carefully."
          }
        ],
        "mistakes": [
          {
            "wrong": "He speaks good English",
            "right": "He speaks English <b>well</b>",
            "why": "как говорит → наречие well"
          },
          {
            "wrong": "as taller as me",
            "right": "<b>as tall as</b> me",
            "why": "между as … as — простое прилагательное"
          }
        ],
        "mnemonic": "🟰 as … as; и good → well (speak well, не good).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери наречие после глагола cook.",
            "q": "«Он хорошо готовит» —",
            "opts": [
              "He cooks good",
              "He cooks well",
              "He is cook well"
            ],
            "answer": 1,
            "explain": "После глагола → наречие well."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное «не такой, как».",
            "q": "«Я не такой высокий, как ты» —",
            "opts": [
              "I am not as tall as you",
              "I am not as taller as you",
              "I am not so tall than you"
            ],
            "answer": 0,
            "explain": "not as + прилагательное + as."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши наречие. slow → slowly.",
            "q": "Она говорит медленно.",
            "accept": [
              "she speaks slowly"
            ],
            "placeholder": "She speaks ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том строят планы на выходные и сравнивают города. Слушай всю неделю 3 сразу.",
      "lines": [
        {
          "who": "A",
          "en": "What are you doing this weekend?",
          "ru": "Что делаешь в эти выходные?"
        },
        {
          "who": "B",
          "en": "I'm going to visit my parents. And you?",
          "ru": "Я собираюсь навестить родителей. А ты?"
        },
        {
          "who": "A",
          "en": "I'm not sure. Maybe I'll stay home.",
          "ru": "Не уверена. Может, останусь дома."
        },
        {
          "who": "B",
          "en": "My town is smaller than the city, but it's the most beautiful place I know.",
          "ru": "Мой городок меньше города, но это самое красивое место, что я знаю."
        },
        {
          "who": "A",
          "en": "Sounds great! You always describe it so well.",
          "ru": "Звучит здорово! Ты всегда так хорошо его описываешь."
        }
      ]
    },
    "vocab": {
      "intro": "Ключевые слова недели 3 — будущее и сравнение. Повтори вслух.",
      "items": [
        {
          "en": "going to",
          "ru": "собираться (план)",
          "ex": "I'm going to travel."
        },
        {
          "en": "will ('ll)",
          "ru": "буду / -у (решение)",
          "ex": "I'll call you."
        },
        {
          "en": "I'm meeting",
          "ru": "я встречаюсь (договорённость)",
          "ex": "I'm meeting Tom at five."
        },
        {
          "en": "bigger than",
          "ru": "больше, чем",
          "ex": "Moscow is bigger than Kyiv."
        },
        {
          "en": "the biggest",
          "ru": "самый большой",
          "ex": "It's the biggest city."
        },
        {
          "en": "the best",
          "ru": "самый лучший",
          "ex": "You are the best."
        },
        {
          "en": "as … as",
          "ru": "так же …, как",
          "ex": "as fast as me"
        },
        {
          "en": "well",
          "ru": "хорошо (наречие)",
          "ex": "She sings well."
        },
        {
          "en": "carefully",
          "ru": "осторожно",
          "ex": "Drive carefully."
        }
      ]
    },
    "drag": {
      "intro": "Соедни форму с её смыслом.",
      "pairs": [
        [
          "going to",
          "план заранее"
        ],
        [
          "will",
          "решение сейчас"
        ],
        [
          "the biggest",
          "самый большой"
        ],
        [
          "well",
          "хорошо"
        ]
      ]
    },
    "quiz": {
      "intro": "Мини-тест по всей неделе 3. Три вопроса — и неделя закрыта!",
      "items": [
        {
          "q": "«Телефон звонит. — Я отвечу.» —",
          "opts": [
            "I'm going to answer",
            "I'll answer it",
            "I answer it"
          ],
          "answer": 1,
          "explain": "Спонтанное решение → will."
        },
        {
          "q": "«Это самый интересный фильм, что я видел» —",
          "opts": [
            "the most interesting film I ever saw",
            "the most interesting film I've ever seen",
            "the interestingest film I've seen"
          ],
          "answer": 1,
          "explain": "the most + длинное слово, и Present Perfect: I've ever seen."
        },
        {
          "q": "«Он хорошо водит» —",
          "opts": [
            "He drives good",
            "He drives well",
            "He is good drive"
          ],
          "answer": 1,
          "explain": "После глагола → наречие well."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: планы на поездку и сравнения. Вся неделя 3 в одном тексте.",
      "title": "Big plans",
      "sentences": [
        "Next month is going to be busy.",
        "I'm flying to London on the first.",
        "London is bigger than my city.",
        "It's the most exciting place I've ever visited.",
        "I'm meeting my old friend Kate there.",
        "She speaks English better than me.",
        "We're going to see the best museums.",
        "I think the weather will be cold.",
        "But it won't be as cold as in Moscow.",
        "It will be the best trip of the year!"
      ],
      "translation": "Следующий месяц будет насыщенным. Первого числа я лечу в Лондон. Лондон больше моего города. Это самое захватывающее место, что я посещал. Там я встречаюсь со старой подругой Кейт. Она говорит по-английски лучше меня. Мы собираемся посмотреть лучшие музеи. Думаю, погода будет холодной. Но не такой холодной, как в Москве. Это будет лучшая поездка года!"
    },
    "essay": {
      "intro": "Собери всю неделю 3 в одном рассказе — планы и сравнения!",
      "prompt": "Напиши 4–6 предложений про свои планы и сравнения. Используй going to / will, present continuous для будущего, comparatives и superlatives.",
      "hint": "Структуры: I'm going to… ; I'm meeting… ; … is bigger than… ; the best… ; I think it will…",
      "example": "Next week I'm going to visit my friend. I'm meeting her on Saturday. Her city is bigger than mine. It's the most beautiful place I've ever seen. I think we will have a great time."
    },
    "picture": {
      "intro": "Опиши планы и сравнения по картинке.",
      "emoji": "✈️📅🌍",
      "prompt": "Опиши планы человека и сравни места. Используй going to, the biggest, as … as.",
      "hint": "Используй: She's going to travel; It's the most beautiful…; bigger than…",
      "example": "She is going to travel next week. She's flying on Monday. This city is the most beautiful place. It's bigger than her town.",
      "img": "img/a2/day-21.jpg",
      "credit": "Фото: thompsoe · Public Domain · <a href=\"https://www.flickr.com/photos/8158623@N05/2142754337\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "22": {
    "day": 22,
    "week": "04",
    "level": "A2",
    "themeRu": "Надо",
    "themeEn": "have to, must",
    "intro": "Впереди последняя неделя A2 — и начинаем её с <b>модальных глаголов</b>. Сегодня про необходимость: как сказать «мне надо» (<b>have to</b>), «не обязательно» (<b>don't have to</b>), «должен» (<b>must</b>) и «нельзя» (<b>mustn't</b>). Сразу подсвечу ловушку: <b>mustn't</b> (нельзя!) и <b>don't have to</b> (не обязан) — вещи совершенно разные, хоть и похожи на слух. Разберёмся по шагам.",
    "introAudio": "Впереди последняя неделя A2 — и начинаем её с модальных глаголов. Сегодня про необходимость: как сказать мне надо, have to, не обязательно, don't have to, должен, must, и нельзя, mustn't. Сразу подсвечу ловушку: mustn't, нельзя, и don't have to, не обязан, вещи совершенно разные, хоть и похожи на слух. Разберёмся по шагам.",
    "goals": [
      "говорить про необходимость: <b>I have to work</b>",
      "говорить, что НЕ обязательно: <b>you don't have to</b>",
      "использовать <b>must / mustn't</b> для правил и запретов",
      "не путать <b>mustn't</b> (нельзя) и <b>don't have to</b> (не обязан)"
    ],
    "learned": [
      "Сказал(а) про необходимость: <b>I have to work</b>",
      "Сказал(а), что НЕ обязательно: <b>you don't have to</b>",
      "Использовал(а) <b>must / mustn't</b> для правил и запретов",
      "Перестал(а) путать <b>mustn't</b> (нельзя) и <b>don't have to</b> (не обязан)"
    ],
    "review": {
      "intro": "Перед новым — разминка из недели 3. Вспомним превосходную степень и планы на будущее.",
      "introAudio": "Перед новым — разминка из недели 3. Вспомним превосходную степень и планы на будущее.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери превосходную форму. Не забудь the.",
          "q": "«Это самый большой город» —",
          "opts": [
            "It is biggest city",
            "It is the biggest city",
            "It is the most big city"
          ],
          "answer": 1,
          "explain": "Превосходная степень всегда с the: <b>the biggest</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери план с going to.",
          "q": "Собери: «Я собираюсь навестить друга»",
          "want": "I am going to visit a friend",
          "answer": "I am going to visit a friend"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · надо",
        "title": "Надо: <em>have to</em>",
        "paras": [
          "Чтобы сказать «мне надо / я должен» (есть необходимость — так требуют правила, работа, жизнь), используем <b>have to</b> + глагол: <b>I have to work tomorrow.</b> = Мне надо завтра работать.",
          "Для he/she/it — <b>has to</b>: <b>She has to get up early.</b> = Ей надо рано вставать (как обычное -s в present simple).",
          "В прошлом — <b>had to</b>: <b>I had to wait.</b> = Мне пришлось ждать. Вопрос — через do/does: <b>Do you have to go?</b>"
        ],
        "audio": "Чтобы сказать мне надо, я должен, используем have to плюс глагол. I have to work tomorrow — мне надо завтра работать. Для he, she, it — has to: She has to get up early. В прошлом had to: I had to wait. Вопрос через do или does.",
        "table": {
          "rows": [
            [
              "I / you / we / they have to",
              "мне / тебе надо"
            ],
            [
              "he / she / it has to",
              "ему / ей надо"
            ],
            [
              "had to (прошлое)",
              "пришлось"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Мне надо завтра работать.",
            "en": "I <b>have to</b> work tomorrow.",
            "gloss": "have to + глагол",
            "say": "I have to work tomorrow."
          },
          {
            "ru": "Ей надо рано вставать.",
            "en": "She <b>has to</b> get up early.",
            "gloss": "he/she → has to",
            "say": "She has to get up early."
          },
          {
            "ru": "Нам надо идти сейчас.",
            "en": "We <b>have to</b> go now.",
            "gloss": "have to go",
            "say": "We have to go now."
          },
          {
            "ru": "Мне пришлось ждать час.",
            "en": "I <b>had to</b> wait an hour.",
            "gloss": "прошлое → had to",
            "say": "I had to wait an hour."
          }
        ],
        "mistakes": [
          {
            "wrong": "She have to go",
            "right": "She <b>has to</b> go",
            "why": "he/she/it → has to"
          },
          {
            "wrong": "I have to working",
            "right": "I have to <b>work</b>",
            "why": "после have to — базовая форма глагола"
          }
        ],
        "mnemonic": "📌 Надо → have to / has to + базовый глагол.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму.",
            "q": "«Мне надо рано встать» —",
            "opts": [
              "I have to get up early",
              "I has to get up early",
              "I have to getting up early"
            ],
            "answer": 0,
            "explain": "have to + базовый глагол: <b>have to get up</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. he/she → has to.",
            "q": "Собери: «Ей надо работать в субботу»",
            "want": "She has to work on Saturday",
            "answer": "She has to work on Saturday"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод.",
            "q": "Нам надо идти сейчас.",
            "accept": [
              "we have to go now"
            ],
            "placeholder": "We have to ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · не обязательно",
        "title": "Не надо: <em>don't have to</em>",
        "paras": [
          "<b>don't have to</b> значит «не обязательно, можно и не делать» — нет необходимости, но если хочешь — пожалуйста. <b>You don't have to come.</b> = Тебе не обязательно приходить (но можешь).",
          "Для he/she/it — <b>doesn't have to</b>: <b>She doesn't have to work on Sunday.</b> = Ей не обязательно работать в воскресенье.",
          "Важно: это НЕ запрет! Это «свобода выбора»: хочешь — делай, не хочешь — не делай."
        ],
        "audio": "don't have to значит не обязательно, можно и не делать. You don't have to come — тебе не обязательно приходить. Для he, she, it — doesn't have to. Важно: это не запрет, а свобода выбора.",
        "table": {
          "rows": [
            [
              "I don't have to",
              "мне не обязательно"
            ],
            [
              "she doesn't have to",
              "ей не обязательно"
            ],
            [
              "= можно не делать",
              "свобода выбора"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Тебе не обязательно приходить.",
            "en": "You <b>don't have to</b> come.",
            "gloss": "нет необходимости",
            "say": "You don't have to come."
          },
          {
            "ru": "Ей не обязательно работать в воскресенье.",
            "en": "She <b>doesn't have to</b> work on Sunday.",
            "gloss": "doesn't have to",
            "say": "She doesn't have to work on Sunday."
          },
          {
            "ru": "Тебе не надо платить — это бесплатно.",
            "en": "You <b>don't have to</b> pay — it's free.",
            "gloss": "можно не делать",
            "say": "You don't have to pay, it's free."
          },
          {
            "ru": "Нам не обязательно спешить.",
            "en": "We <b>don't have to</b> hurry.",
            "gloss": "не обязаны",
            "say": "We don't have to hurry."
          }
        ],
        "mistakes": [
          {
            "wrong": "She don't have to work",
            "right": "She <b>doesn't</b> have to work",
            "why": "he/she/it → doesn't have to"
          }
        ],
        "mnemonic": "🆓 don't have to = можно не делать (не запрет!).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери «не обязательно».",
            "q": "«Тебе не обязательно платить» —",
            "opts": [
              "You don't have to pay",
              "You doesn't have to pay",
              "You have to not pay"
            ],
            "answer": 0,
            "explain": "Нет необходимости → <b>don't have to</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. she → doesn't.",
            "q": "Собери: «Ей не обязательно приходить рано»",
            "want": "She doesn't have to come early",
            "answer": "She doesn't have to come early"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод.",
            "q": "Нам не обязательно спешить.",
            "accept": [
              "we don't have to hurry",
              "we do not have to hurry"
            ],
            "placeholder": "We don't have to ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · правила и запреты",
        "title": "Правило <em>must</em> и запрет <em>mustn't</em>",
        "paras": [
          "<b>must</b> — сильное «должен» для правил и важных вещей: <b>You must wear a seatbelt.</b> = Ты должен пристегнуться. После must — базовый глагол без to (как с will): must <b>go</b>, must <b>stop</b>.",
          "<b>mustn't</b> (must not) — это ЗАПРЕТ, «нельзя»: <b>You mustn't smoke here.</b> = Здесь нельзя курить. Это твёрдое «не делай этого».",
          "must одинаков для всех: I must, he must, they must — никаких -s. И никакого to: не «must to go»."
        ],
        "audio": "must это сильное должен для правил: You must wear a seatbelt. После must базовый глагол без to. mustn't, must not, это запрет, нельзя: You mustn't smoke here. must одинаков для всех, без -s и без to.",
        "table": {
          "rows": [
            [
              "You must stop.",
              "ты должен остановиться"
            ],
            [
              "You mustn't smoke.",
              "тебе нельзя курить"
            ],
            [
              "must + базовый глагол",
              "без to, без -s"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Ты должен пристегнуться.",
            "en": "You <b>must</b> wear a seatbelt.",
            "gloss": "must + базовый глагол",
            "say": "You must wear a seatbelt."
          },
          {
            "ru": "Здесь нельзя курить.",
            "en": "You <b>mustn't</b> smoke here.",
            "gloss": "mustn't = запрет",
            "say": "You mustn't smoke here."
          },
          {
            "ru": "Ты должен быть осторожен.",
            "en": "You <b>must</b> be careful.",
            "gloss": "must be",
            "say": "You must be careful."
          },
          {
            "ru": "Детям нельзя играть на дороге.",
            "en": "Children <b>mustn't</b> play on the road.",
            "gloss": "нельзя → mustn't",
            "say": "Children mustn't play on the road."
          }
        ],
        "mistakes": [
          {
            "wrong": "You must to stop",
            "right": "You <b>must stop</b>",
            "why": "после must — базовый глагол без to"
          },
          {
            "wrong": "He musts go",
            "right": "He <b>must</b> go",
            "why": "must одинаков для всех, без -s"
          }
        ],
        "mnemonic": "🛑 must = должен; mustn't = нельзя. Без to, без -s.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это запрет.",
            "q": "«Здесь нельзя парковаться» —",
            "opts": [
              "You don't have to park here",
              "You mustn't park here",
              "You must park here"
            ],
            "answer": 1,
            "explain": "Запрет → <b>mustn't</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. must + базовый глагол.",
            "q": "Собери: «Ты должен быть осторожен»",
            "want": "You must be careful",
            "answer": "You must be careful"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши запрет.",
            "q": "Здесь нельзя курить.",
            "accept": [
              "you mustn't smoke here",
              "you must not smoke here"
            ],
            "placeholder": "You mustn't ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "<em>mustn't</em> ≠ <em>don't have to</em>",
        "paras": [
          "Самая частая ошибка на A2: и то, и другое звучит для нас как «не надо», но смысл РАЗНЫЙ. <b>mustn't</b> = нельзя, запрещено (ни в коем случае). <b>don't have to</b> = не обязан, можно и не делать (твоё дело).",
          "<b>You mustn't park here.</b> = Здесь парковаться НЕЛЬЗЯ (запрет). <b>You don't have to park here.</b> = Можешь не парковаться здесь (но если хочешь — можно).",
          "Проверь себя: если «запрещено» → <b>mustn't</b>. Если «не обязательно, по желанию» → <b>don't have to</b>."
        ],
        "audio": "Самая частая ошибка: и то, и другое звучит как не надо, но смысл разный. mustn't это нельзя, запрещено. don't have to это не обязан, можно и не делать. You mustn't park here — нельзя. You don't have to park here — можешь не парковаться.",
        "table": {
          "rows": [
            [
              "You mustn't smoke.",
              "нельзя курить (запрет)"
            ],
            [
              "You don't have to smoke.",
              "можешь не курить (выбор)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Тебе нельзя опаздывать (запрет).",
            "en": "You <b>mustn't</b> be late.",
            "gloss": "запрет",
            "say": "You mustn't be late."
          },
          {
            "ru": "Тебе не обязательно приходить рано (по желанию).",
            "en": "You <b>don't have to</b> come early.",
            "gloss": "не обязан",
            "say": "You don't have to come early."
          },
          {
            "ru": "Здесь нельзя пользоваться телефоном.",
            "en": "You <b>mustn't</b> use your phone here.",
            "gloss": "запрет",
            "say": "You mustn't use your phone here."
          },
          {
            "ru": "Тебе не обязательно платить наличными.",
            "en": "You <b>don't have to</b> pay in cash.",
            "gloss": "выбор",
            "say": "You don't have to pay in cash."
          }
        ],
        "mistakes": [
          {
            "wrong": "You mustn't pay — it's free",
            "right": "You <b>don't have to</b> pay — it's free",
            "why": "«не обязан» → don't have to; mustn't был бы запрет платить"
          },
          {
            "wrong": "You don't have to smoke here (про запрет)",
            "right": "You <b>mustn't</b> smoke here",
            "why": "«нельзя, запрещено» → mustn't"
          }
        ],
        "mnemonic": "⚠️ mustn't = НЕЛЬЗЯ. don't have to = НЕ ОБЯЗАН.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «не обязан» — это выбор, не запрет.",
            "q": "«Бесплатно — тебе не обязательно платить» —",
            "opts": [
              "You mustn't pay",
              "You don't have to pay",
              "You must pay"
            ],
            "answer": 1,
            "explain": "«Не обязан» → <b>don't have to</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «нельзя» — это запрет.",
            "q": "«Это секрет — никому нельзя говорить» —",
            "opts": [
              "You don't have to tell anyone",
              "You mustn't tell anyone",
              "You have to tell anyone"
            ],
            "answer": 1,
            "explain": "«Нельзя» → <b>mustn't</b>."
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси запрет вслух.",
            "target": "You mustn't be late.",
            "sub": "Тебе нельзя опаздывать.",
            "want": "mustn't"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Том рассказывает Ане про правила на новой работе. Слушай have to, must и mustn't.",
      "lines": [
        {
          "who": "A",
          "en": "I started a new job. There are a lot of rules!",
          "ru": "Я начал новую работу. Там много правил!"
        },
        {
          "who": "B",
          "en": "Really? What do you have to do?",
          "ru": "Правда? Что тебе надо делать?"
        },
        {
          "who": "A",
          "en": "I have to wear a uniform, and I mustn't use my phone.",
          "ru": "Я должен носить форму, и мне нельзя пользоваться телефоном."
        },
        {
          "who": "B",
          "en": "Do you have to work on weekends?",
          "ru": "А по выходным надо работать?"
        },
        {
          "who": "A",
          "en": "No, I don't have to. That part is great!",
          "ru": "Нет, не обязательно. Это здорово!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — модальные глаголы необходимости. Повтори вслух.",
      "items": [
        {
          "en": "have to",
          "ru": "надо, должен (необходимость)",
          "ex": "I have to work."
        },
        {
          "en": "has to",
          "ru": "надо (он/она)",
          "ex": "She has to study."
        },
        {
          "en": "had to",
          "ru": "пришлось",
          "ex": "I had to wait."
        },
        {
          "en": "don't have to",
          "ru": "не обязательно",
          "ex": "You don't have to come."
        },
        {
          "en": "must",
          "ru": "должен (правило)",
          "ex": "You must stop."
        },
        {
          "en": "mustn't",
          "ru": "нельзя (запрет)",
          "ex": "You mustn't smoke."
        },
        {
          "en": "a rule",
          "ru": "правило",
          "ex": "It's a rule."
        },
        {
          "en": "a uniform",
          "ru": "форма (одежда)",
          "ex": "I wear a uniform."
        },
        {
          "en": "on time",
          "ru": "вовремя",
          "ex": "Be on time."
        }
      ]
    },
    "drag": {
      "intro": "Соедини модальный глагол с его смыслом.",
      "pairs": [
        [
          "have to",
          "надо"
        ],
        [
          "don't have to",
          "не обязательно"
        ],
        [
          "must",
          "должен (правило)"
        ],
        [
          "mustn't",
          "нельзя"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса. Главное: mustn't ≠ don't have to!",
      "items": [
        {
          "q": "«Ей надо рано вставать» —",
          "opts": [
            "She have to get up early",
            "She has to get up early",
            "She must to get up early"
          ],
          "answer": 1,
          "explain": "he/she → has to + базовый глагол."
        },
        {
          "q": "«Здесь нельзя парковаться» —",
          "opts": [
            "You don't have to park here",
            "You mustn't park here",
            "You haven't to park here"
          ],
          "answer": 1,
          "explain": "Запрет → mustn't."
        },
        {
          "q": "«Бесплатно — тебе не обязательно платить» —",
          "opts": [
            "You mustn't pay",
            "You don't have to pay",
            "You must pay"
          ],
          "answer": 1,
          "explain": "«Не обязан» → don't have to (не запрет!)."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай про школьные правила. Везде have to, must и mustn't.",
      "title": "Rules at school",
      "sentences": [
        "My school has a lot of rules.",
        "We have to wear a uniform every day.",
        "We must be on time for class.",
        "We mustn't use our phones in lessons.",
        "We have to do our homework.",
        "But we don't have to stay after three o'clock.",
        "We mustn't run in the corridors.",
        "We don't have to bring lunch — there is a canteen.",
        "Teachers must help us when we have problems.",
        "I think good rules make a good school."
      ],
      "translation": "В моей школе много правил. Мы должны каждый день носить форму. Мы должны приходить на урок вовремя. Нам нельзя пользоваться телефонами на уроках. Мы должны делать домашнюю работу. Но мы не обязаны оставаться после трёх часов. Нам нельзя бегать по коридорам. Нам не обязательно приносить обед — есть столовая. Учителя должны помогать нам, когда у нас проблемы. Я думаю, хорошие правила создают хорошую школу."
    },
    "essay": {
      "intro": "Расскажи про правила у тебя на работе, учёбе или дома.",
      "prompt": "Напиши 3–5 предложений про правила. Используй have to, don't have to, must, mustn't.",
      "hint": "Структуры: I have to… ; I don't have to… ; We must… ; You mustn't…",
      "example": "At work I have to start at nine. I have to wear nice clothes. But I don't have to work on Sundays. We mustn't be late for meetings."
    },
    "picture": {
      "intro": "Опиши правила по знакам на картинке.",
      "emoji": "🚫📵🅿️",
      "prompt": "Опиши, что можно и что нельзя. Используй must, mustn't, have to.",
      "hint": "Используй: You mustn't…; You must…; You have to…",
      "example": "You mustn't use your phone here. You mustn't park here. You must be quiet.",
      "img": "img/a2/day-22.jpg",
      "credit": "Фото: Rawpixel Ltd · CC0 · <a href=\"https://www.flickr.com/photos/147875007@N03/32881037371\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "23": {
    "day": 23,
    "week": "04",
    "level": "A2",
    "themeRu": "Советую",
    "themeEn": "should + might",
    "intro": "Вчера было твёрдое «надо» — have to и must. Сегодня тон мягче: будем <b>советовать</b>. Когда хочешь по-доброму подсказать другу, как лучше, по-английски говорят <b>should</b>: <b>You should rest.</b> — Тебе стоит отдохнуть. А когда что-то возможно, но без гарантии — <b>might</b>: <b>It might rain.</b> — Может пойти дождь. Два коротких слова — и ты уже даёшь советы и говоришь о вероятности. Поехали.",
    "introAudio": "Вчера было твёрдое «надо» — have to и must. Сегодня тон мягче: будем советовать. Когда хочешь по-доброму подсказать другу, как лучше, по-английски говорят should: You should rest, тебе стоит отдохнуть. А когда что-то возможно, но без гарантии — might: It might rain, может пойти дождь. Два коротких слова — и ты уже даёшь советы и говоришь о вероятности. Поехали.",
    "goals": [
      "давать советы со <b>should</b> и <b>shouldn't</b>: You should rest",
      "говорить о возможности со <b>might</b>: It might rain",
      "спрашивать совет: <b>Should I…?</b> — What should I do?",
      "запомнить главное: после <b>should</b> идёт глагол <b>без to</b>"
    ],
    "learned": [
      "Дал(а) советы со <b>should</b> и <b>shouldn't</b>: You should rest",
      "Сказал(а) о возможности со <b>might</b>: It might rain",
      "Спросил(а) совет: <b>Should I…?</b> — What should I do?",
      "Запомнил(а) главное: после <b>should</b> идёт глагол <b>без to</b>"
    ],
    "review": {
      "intro": "Сначала — вчерашнее «надо». Вспомним <b>have to</b> (надо по обстоятельствам), <b>must</b> (надо обязательно) и <b>mustn't</b> (нельзя). Помни: <b>mustn't</b> (нельзя) — это не то же самое, что <b>don't have to</b> (не обязан).",
      "introAudio": "Сначала вчерашнее «надо». Вспомним have to, надо по обстоятельствам, must, надо обязательно, и mustn't, нельзя. Помни: mustn't, нельзя — это не то же самое, что don't have to, не обязан.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери верный вариант. Знак «стоп» — это запрет.",
          "q": "Знак: «Здесь нельзя парковаться». Как сказать?",
          "opts": [
            "You don't have to park here",
            "You mustn't park here",
            "You should park here"
          ],
          "answer": 1,
          "explain": "Запрет → <b>mustn't</b> (нельзя). don't have to = «не обязан» — это другое."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу. have to = надо (по обстоятельствам).",
          "q": "Собери: «Мне надо рано встать»",
          "want": "I have to get up early",
          "answer": "I have to get up early"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · совет",
        "title": "Совет — <em>should</em> и <em>shouldn't</em>",
        "paras": [
          "Хочешь по-доброму подсказать, как лучше? Бери <b>should</b> («стоит», «следует»). <b>You should rest.</b> = Тебе стоит отдохнуть. <b>You should drink water.</b> = Тебе стоит пить воду.",
          "Совет «не делай этого» — <b>shouldn't</b> (should not): <b>You shouldn't worry.</b> = Не стоит волноваться. <b>You shouldn't eat so late.</b> = Не стоит есть так поздно.",
          "Главное правило: после <b>should</b> сразу идёт глагол <b>без to</b>. Не «you should to go» — а просто <b>you should go</b>. Никакого to!"
        ],
        "audio": "Хочешь по-доброму подсказать, как лучше? Бери should, стоит, следует. You should rest, тебе стоит отдохнуть. Совет «не делай этого» — shouldn't: You shouldn't worry, не стоит волноваться. Главное: после should глагол идёт без to. Не «you should to go», а просто you should go.",
        "table": {
          "rows": [
            [
              "You should rest.",
              "Тебе стоит отдохнуть."
            ],
            [
              "You shouldn't worry.",
              "Не стоит волноваться."
            ],
            [
              "should + глагол (без to)",
              "should go, should rest"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Тебе стоит отдохнуть.",
            "en": "You <b>should rest</b>.",
            "gloss": "should + глагол",
            "say": "You should rest."
          },
          {
            "ru": "Тебе стоит сходить к врачу.",
            "en": "You <b>should</b> see a doctor.",
            "gloss": "see — без to",
            "say": "You should see a doctor."
          },
          {
            "ru": "Не стоит так много работать.",
            "en": "You <b>shouldn't</b> work so much.",
            "gloss": "shouldn't = should not",
            "say": "You shouldn't work so much."
          },
          {
            "ru": "Тебе стоит больше спать.",
            "en": "You <b>should</b> sleep more.",
            "say": "You should sleep more."
          },
          {
            "ru": "Не стоит ему сейчас звонить.",
            "en": "You <b>shouldn't</b> call him now.",
            "say": "You shouldn't call him now."
          }
        ],
        "mistakes": [
          {
            "wrong": "You should to go home",
            "right": "You <b>should go</b> home",
            "why": "после should — глагол без to: should go"
          },
          {
            "wrong": "You should to rest",
            "right": "You <b>should rest</b>",
            "why": "никакого to после should"
          }
        ],
        "mnemonic": "💡 should + глагол БЕЗ to: you should go, you should rest.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный совет.",
            "q": "«Тебе стоит отдохнуть» —",
            "opts": [
              "You should rest",
              "You should to rest",
              "You should resting"
            ],
            "answer": 0,
            "explain": "после should — глагол без to: <b>should rest</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери совет.",
            "q": "Собери: «Не стоит так много работать»",
            "want": "You shouldn't work so much",
            "answer": "You shouldn't work so much"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши совет. see a doctor = сходить к врачу.",
            "q": "Тебе стоит сходить к врачу.",
            "accept": [
              "you should see a doctor"
            ],
            "placeholder": "You should ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · возможность",
        "title": "Может быть — <em>might</em> и <em>might not</em>",
        "paras": [
          "Когда что-то <b>возможно</b>, но ты не уверен — это <b>might</b> («может быть», «возможно»). <b>It might rain.</b> = Может пойти дождь. <b>She might be late.</b> = Она, возможно, опоздает.",
          "«Возможно, нет» — <b>might not</b>: <b>I might not come.</b> = Я, возможно, не приду. Здесь might not в один слог не сокращают — так и говорят: might not.",
          "Как и should, <b>might</b> любит глагол <b>без to</b>: <b>It might rain</b> (не «might to rain»). И форма одна для всех: I might, he might, she might — никаких -s."
        ],
        "audio": "Когда что-то возможно, но ты не уверен — это might, может быть, возможно. It might rain, может пойти дождь. She might be late, она, возможно, опоздает. Возможно нет — might not: I might not come, я, возможно, не приду. Как и should, might любит глагол без to, и форма одна для всех: I might, he might, без -s.",
        "table": {
          "rows": [
            [
              "It might rain.",
              "Может пойти дождь."
            ],
            [
              "She might be late.",
              "Она, возможно, опоздает."
            ],
            [
              "I might not come.",
              "Я, возможно, не приду."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Может пойти дождь.",
            "en": "It <b>might rain</b>.",
            "gloss": "might + глагол",
            "say": "It might rain."
          },
          {
            "ru": "Она, возможно, опоздает.",
            "en": "She <b>might be</b> late.",
            "gloss": "одна форма для всех",
            "say": "She might be late."
          },
          {
            "ru": "Я, возможно, не приду.",
            "en": "I <b>might not</b> come.",
            "gloss": "might not = возможно нет",
            "say": "I might not come."
          },
          {
            "ru": "Мы, может быть, пойдём в кино.",
            "en": "We <b>might go</b> to the cinema.",
            "say": "We might go to the cinema."
          },
          {
            "ru": "Это, возможно, правда.",
            "en": "It <b>might be</b> true.",
            "say": "It might be true."
          }
        ],
        "mistakes": [
          {
            "wrong": "It might to rain",
            "right": "It <b>might rain</b>",
            "why": "после might — глагол без to"
          },
          {
            "wrong": "She mights be late",
            "right": "She <b>might</b> be late",
            "why": "might не меняется: без -s для he/she"
          }
        ],
        "mnemonic": "🌧️ might = возможно: It might rain. Глагол без to, без -s.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери фразу о возможности.",
            "q": "«Может пойти дождь» —",
            "opts": [
              "It might to rain",
              "It might rain",
              "It mights rain"
            ],
            "answer": 1,
            "explain": "might + глагол без to, без -s: <b>It might rain</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу.",
            "q": "Собери: «Я, возможно, не приду»",
            "want": "I might not come",
            "answer": "I might not come"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. be late = опоздать.",
            "q": "Она, возможно, опоздает.",
            "accept": [
              "she might be late"
            ],
            "placeholder": "She might ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · спросить совет",
        "title": "Спросить совет — <em>Should I…?</em>",
        "paras": [
          "Чтобы спросить совет, выноси <b>should</b> вперёд: <b>Should I call her?</b> = Мне (стоит) ей позвонить? <b>Should we wait?</b> = Нам подождать?",
          "Часто спрашивают с <b>What</b>: <b>What should I do?</b> = Что мне делать? <b>Where should I go?</b> = Куда мне пойти?",
          "Короткий ответ повторяет should: <b>Yes, you should. / No, you shouldn't.</b> — как и с другими «помощниками»."
        ],
        "audio": "Чтобы спросить совет, выноси should вперёд: Should I call her? Мне ей позвонить? Часто спрашивают с What: What should I do? Что мне делать? Короткий ответ повторяет should: Yes, you should. No, you shouldn't.",
        "table": {
          "rows": [
            [
              "Should I call her?",
              "Мне ей позвонить?"
            ],
            [
              "What should I do?",
              "Что мне делать?"
            ],
            [
              "Yes, you should. / No, you shouldn't.",
              "Да / Нет (короткий ответ)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Мне ей позвонить?",
            "en": "<b>Should I</b> call her?",
            "gloss": "should вперёд",
            "say": "Should I call her?"
          },
          {
            "ru": "Что мне делать?",
            "en": "<b>What should I do?</b>",
            "gloss": "What + should I",
            "say": "What should I do?"
          },
          {
            "ru": "Нам подождать?",
            "en": "<b>Should we</b> wait?",
            "say": "Should we wait?"
          },
          {
            "ru": "— Мне пойти? — Да, стоит.",
            "en": "— Should I go? — <b>Yes, you should.</b>",
            "say": "Yes, you should."
          }
        ],
        "mistakes": [
          {
            "wrong": "Do I should call her?",
            "right": "<b>Should I</b> call her?",
            "why": "вопрос — should вперёд, без do"
          },
          {
            "wrong": "What I should do?",
            "right": "What <b>should I</b> do?",
            "why": "после What сразу should I"
          }
        ],
        "mnemonic": "❓ Совет-вопрос: Should I…? What should I do?",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вопрос.",
            "q": "Как спросить «Мне ей позвонить?»",
            "opts": [
              "Do I should call her?",
              "Should I call her?",
              "I should call her?"
            ],
            "answer": 1,
            "explain": "вопрос-совет: <b>should</b> вперёд — Should I call her?"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вопрос.",
            "q": "Собери: «Что мне делать?»",
            "want": "What should I do",
            "answer": "What should I do"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери короткий ответ.",
            "q": "— Should I wait? — ___",
            "opts": [
              "Yes, I do.",
              "Yes, you should.",
              "Yes, you have."
            ],
            "answer": 1,
            "explain": "короткий ответ повторяет should: <b>Yes, you should.</b>"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · совет или возможность",
        "title": "<em>should</em> (совет) vs <em>might</em> (возможность)",
        "paras": [
          "Не путай: <b>should</b> — это <b>совет</b>, что лучше сделать. <b>might</b> — это <b>возможность</b>, что может случиться. <b>You should take an umbrella, it might rain.</b> = Возьми зонт — может пойти дождь.",
          "Совет можно смягчить словами <b>I think</b> (я думаю) и <b>maybe</b> (может быть): <b>I think you should rest.</b> = Думаю, тебе стоит отдохнуть.",
          "Оба слова работают одинаково: глагол после них — <b>без to</b> и без -s. <b>He should go. He might go.</b>"
        ],
        "audio": "Не путай: should — это совет, что лучше сделать. might — это возможность, что может случиться. You should take an umbrella, it might rain. Совет можно смягчить: I think you should rest, думаю, тебе стоит отдохнуть. После обоих слов глагол без to и без -s.",
        "table": {
          "rows": [
            [
              "You should rest.",
              "совет — тебе стоит"
            ],
            [
              "It might rain.",
              "возможность — может случиться"
            ],
            [
              "I think you should…",
              "мягкий совет"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Возьми зонт — может пойти дождь.",
            "en": "You <b>should</b> take an umbrella, it <b>might</b> rain.",
            "gloss": "совет + возможность",
            "say": "You should take an umbrella, it might rain."
          },
          {
            "ru": "Думаю, тебе стоит отдохнуть.",
            "en": "<b>I think</b> you <b>should</b> rest.",
            "gloss": "мягкий совет",
            "say": "I think you should rest."
          },
          {
            "ru": "Он, возможно, опоздает — позвони ему.",
            "en": "He <b>might</b> be late — you <b>should</b> call him.",
            "say": "He might be late, you should call him."
          },
          {
            "ru": "Может быть, тебе стоит больше спать.",
            "en": "<b>Maybe</b> you <b>should</b> sleep more.",
            "say": "Maybe you should sleep more."
          }
        ],
        "mistakes": [
          {
            "wrong": "You might rest (как совет)",
            "right": "You <b>should</b> rest",
            "why": "совет → should; might — это про возможность"
          }
        ],
        "mnemonic": "⚖️ should = совет (что лучше). might = возможность (что может быть).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> совет или возможность?",
            "q": "«Тебе стоит отдохнуть» (совет) —",
            "opts": [
              "You might rest",
              "You should rest",
              "You have rest"
            ],
            "answer": 1,
            "explain": "совет → <b>should</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери по смыслу.",
            "q": "«Может пойти дождь» (возможность) —",
            "opts": [
              "It should rain",
              "It might rain",
              "It must rain"
            ],
            "answer": 1,
            "explain": "возможность → <b>might</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши мягкий совет. I think… = я думаю…",
            "q": "Думаю, тебе стоит отдохнуть.",
            "accept": [
              "i think you should rest"
            ],
            "placeholder": "I think you ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня плохо себя чувствует, Том советует. Слушай should и might в живой речи.",
      "lines": [
        {
          "who": "A",
          "en": "I feel tired and I have a headache.",
          "ru": "Я устала, и у меня болит голова."
        },
        {
          "who": "B",
          "en": "You should rest. You shouldn't work today.",
          "ru": "Тебе стоит отдохнуть. Не стоит сегодня работать."
        },
        {
          "who": "A",
          "en": "Should I see a doctor?",
          "ru": "Мне сходить к врачу?"
        },
        {
          "who": "B",
          "en": "Maybe. And take an umbrella — it might rain later.",
          "ru": "Может быть. И возьми зонт — позже может пойти дождь."
        },
        {
          "who": "A",
          "en": "Thanks! I think you're right.",
          "ru": "Спасибо! Думаю, ты прав."
        }
      ]
    },
    "vocab": {
      "intro": "Главные слова дня — слова совета и возможности. Повтори вслух.",
      "items": [
        {
          "en": "should",
          "ru": "стоит / следует (совет)",
          "ex": "You should rest."
        },
        {
          "en": "shouldn't",
          "ru": "не стоит (совет)",
          "ex": "You shouldn't worry."
        },
        {
          "en": "might",
          "ru": "может быть, возможно",
          "ex": "It might rain."
        },
        {
          "en": "might not",
          "ru": "возможно, не…",
          "ex": "I might not come."
        },
        {
          "en": "rest",
          "ru": "отдыхать / отдых",
          "ex": "You should rest."
        },
        {
          "en": "umbrella",
          "ru": "зонт",
          "ex": "Take an umbrella."
        },
        {
          "en": "headache",
          "ru": "головная боль",
          "ex": "I have a headache."
        },
        {
          "en": "maybe",
          "ru": "может быть",
          "ex": "Maybe you should go."
        },
        {
          "en": "see a doctor",
          "ru": "сходить к врачу",
          "ex": "You should see a doctor."
        }
      ]
    },
    "drag": {
      "intro": "Соедини английское слово с переводом.",
      "pairs": [
        [
          "should",
          "стоит / следует"
        ],
        [
          "shouldn't",
          "не стоит"
        ],
        [
          "might",
          "возможно"
        ],
        [
          "maybe",
          "может быть"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса, и день про советы закрыт. Молодец!",
      "items": [
        {
          "q": "«Тебе стоит пойти к врачу» —",
          "opts": [
            "You should to see a doctor",
            "You should see a doctor",
            "You should seeing a doctor"
          ],
          "answer": 1,
          "explain": "после should — глагол без to: <b>should see</b>."
        },
        {
          "q": "«Может пойти дождь» —",
          "opts": [
            "It should rain",
            "It might rain",
            "It might to rain"
          ],
          "answer": 1,
          "explain": "возможность → <b>might</b> + глагол без to."
        },
        {
          "q": "Как спросить «Что мне делать?»",
          "opts": [
            "What should I do?",
            "What I should do?",
            "What do I should?"
          ],
          "answer": 0,
          "explain": "вопрос-совет: <b>What should I do?</b>"
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: подруга даёт советы перед поездкой. Везде should и might.",
      "title": "Good advice",
      "sentences": [
        "My friend is going to London next week.",
        "I think she should plan her trip.",
        "She should take warm clothes.",
        "It might be cold and rainy there.",
        "She shouldn't carry a lot of money.",
        "She might not need a car in the city.",
        "She should try the local food.",
        "She should visit a museum or two.",
        "It might rain, so she should take an umbrella.",
        "I think she will have a great time!"
      ],
      "translation": "Моя подруга едет в Лондон на следующей неделе. Думаю, ей стоит спланировать поездку. Ей стоит взять тёплую одежду. Там может быть холодно и дождливо. Не стоит брать с собой много денег. В городе ей, возможно, не понадобится машина. Ей стоит попробовать местную еду. Стоит сходить в музей-другой. Может пойти дождь, поэтому ей стоит взять зонт. Думаю, она отлично проведёт время!"
    },
    "essay": {
      "intro": "Теперь твоя очередь — дай совет другу.",
      "prompt": "Друг едет в твой город. Напиши 3–5 советов: что ему стоит и не стоит делать. Используй You should… / You shouldn't… / It might…",
      "hint": "Структуры: You should visit… ; You shouldn't… ; It might be cold/hot ; Maybe you should…",
      "example": "You should visit the old town. You should try our food. You shouldn't drive in the centre. It might be hot, so you should take water."
    },
    "picture": {
      "intro": "Человек заболел. Дай ему совет по картинке.",
      "emoji": "🤒🛌☕",
      "prompt": "Дай совет больному человеку. Используй You should… / You shouldn't…",
      "hint": "Используй: You should rest; You should drink tea; You shouldn't work.",
      "example": "You should rest. You should drink hot tea. You shouldn't go to work. You should see a doctor.",
      "img": "img/a2/day-23.jpg",
      "credit": "Фото: snelson951 · CC0 · <a href=\"https://www.flickr.com/photos/106274066@N07/55021423244\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "24": {
    "day": 24,
    "week": "04",
    "level": "A2",
    "themeRu": "Сколько",
    "themeEn": "Quantifiers",
    "intro": "Сколько у тебя времени, сколько денег, сколько яблок? Сегодня — про количество: много, мало, достаточно. И тут английский делает неожиданный ход: он делит всё на то, что можно <b>посчитать</b> (one apple, two apples), и то, что <b>нельзя</b> (water, money). Оттого и «много» у них два разных слова: <b>many</b> и <b>much</b>. Разложим по полочкам — и станет логично.",
    "introAudio": "Сколько у тебя времени, сколько денег, сколько яблок? Сегодня — про количество: много, мало, достаточно. И тут английский делает неожиданный ход: он делит всё на то, что можно посчитать, one apple, two apples, и то, что нельзя, water, money. Оттого и «много» у них два разных слова: many и much. Разложим по полочкам — и станет логично.",
    "goals": [
      "различать <b>счётные</b> (apples) и <b>несчётные</b> (water) существительные",
      "выбирать <b>many</b> (счёт) или <b>much</b> (несчёт), а проще — <b>a lot of</b>",
      "говорить «мало»: <b>a few</b> (счёт) и <b>a little</b> (несчёт)",
      "запомнить, что <b>money, advice, information, news</b> — несчётные"
    ],
    "learned": [
      "Научился(лась) различать <b>счётные</b> (apples) и <b>несчётные</b> (water) существительные",
      "Научился(лась) выбирать <b>many</b> (счёт) или <b>much</b> (несчёт), а проще — <b>a lot of</b>",
      "Сказал(а) «мало»: <b>a few</b> (счёт) и <b>a little</b> (несчёт)",
      "Запомнил(а), что <b>money, advice, information, news</b> — несчётные"
    ],
    "review": {
      "intro": "Сначала вчерашнее — советы и возможность. Вспомни: после <b>should</b> и <b>might</b> глагол идёт <b>без to</b>.",
      "introAudio": "Сначала вчерашнее — советы и возможность. Вспомни: после should и might глагол идёт без to.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери верный совет.",
          "q": "«Тебе стоит отдохнуть» —",
          "opts": [
            "You should to rest",
            "You should rest",
            "You should resting"
          ],
          "answer": 1,
          "explain": "после should — глагол без to: <b>should rest</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу о возможности.",
          "q": "Собери: «Может пойти дождь»",
          "want": "It might rain",
          "answer": "It might rain"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · что считаем",
        "title": "Счётное и несчётное — <em>apples</em> vs <em>water</em>",
        "paras": [
          "Английский делит существительные на два вида. <b>Счётные</b> можно посчитать поштучно: <b>one apple, two apples</b> — у них есть множественное число (-s). <b>Несчётные</b> посчитать нельзя: <b>water, milk, money, time</b> — у них нет «-s» и нет «two waters».",
          "С несчётными не ставят <b>a/an</b>: не «a water», а просто <b>water</b> или <b>some water</b>. Это масса или понятие целиком: вода, время, деньги.",
          "Подсказка из A1: <b>some</b> (немного) — в утверждениях, <b>any</b> — в вопросах и отрицаниях. <b>I have some money. Do you have any money?</b>"
        ],
        "audio": "Английский делит существительные на два вида. Счётные можно посчитать: one apple, two apples, у них есть множественное число. Несчётные посчитать нельзя: water, milk, money, time, у них нет -s. С несчётными не ставят a или an: не «a water», а просто water или some water. И помни из A1: some в утверждениях, any в вопросах и отрицаниях.",
        "table": {
          "rows": [
            [
              "счётные (можно посчитать)",
              "apple, friend, book → apples"
            ],
            [
              "несчётные (масса)",
              "water, money, time, milk"
            ],
            [
              "some / any",
              "some water · any money"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "У меня три яблока.",
            "en": "I have three <b>apples</b>.",
            "gloss": "счётное → -s",
            "say": "I have three apples."
          },
          {
            "ru": "У меня есть немного воды.",
            "en": "I have <b>some water</b>.",
            "gloss": "несчётное, без a",
            "say": "I have some water."
          },
          {
            "ru": "У тебя есть деньги?",
            "en": "Do you have <b>any money</b>?",
            "gloss": "money — несчётное",
            "say": "Do you have any money?"
          },
          {
            "ru": "У меня мало времени.",
            "en": "I don't have much <b>time</b>.",
            "gloss": "time — несчётное",
            "say": "I don't have much time."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have a water",
            "right": "I have <b>some water</b>",
            "why": "несчётное water — без a; «немного» = some"
          },
          {
            "wrong": "two informations",
            "right": "<b>some information</b>",
            "why": "несчётное — нет множественного числа"
          }
        ],
        "mnemonic": "🍎💧 Счётное: one apple, two apples. Несчётное: water, money — без -s, без a.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное.",
            "q": "Что сказать про воду?",
            "opts": [
              "a water",
              "some water",
              "two waters"
            ],
            "answer": 1,
            "explain": "water несчётное → <b>some water</b>, без a и без -s."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> some или any?",
            "q": "Do you have ___ money?",
            "opts": [
              "some",
              "any",
              "a"
            ],
            "answer": 1,
            "explain": "в вопросе → <b>any</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу.",
            "q": "Собери: «У меня три яблока»",
            "want": "I have three apples",
            "answer": "I have three apples"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · много",
        "title": "«Много» — <em>many, much, a lot of</em>",
        "paras": [
          "«Много» по-английски — два слова. <b>many</b> — для счётных: <b>many friends, many books</b>. <b>much</b> — для несчётных: <b>much water, much time</b>.",
          "Лёгкий лайфхак: <b>a lot of</b> (много) подходит и к тем, и к другим — <b>a lot of friends, a lot of money</b>. В обычной речи в утверждениях чаще говорят именно a lot of.",
          "А <b>much</b> и <b>many</b> особенно нужны в вопросах и отрицаниях: <b>I don't have much time. Do you have many friends?</b>"
        ],
        "audio": "«Много» по-английски — два слова. many для счётных: many friends, many books. much для несчётных: much water, much time. Лёгкий лайфхак: a lot of подходит к обоим — a lot of friends, a lot of money. А much и many особенно нужны в вопросах и отрицаниях: I don't have much time. Do you have many friends?",
        "table": {
          "rows": [
            [
              "many + счётное",
              "many friends, many books"
            ],
            [
              "much + несчётное",
              "much water, much time"
            ],
            [
              "a lot of + любое",
              "a lot of friends / money"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "У меня много друзей.",
            "en": "I have <b>many friends</b>.",
            "gloss": "many + счётное",
            "say": "I have many friends."
          },
          {
            "ru": "У меня мало времени (не много).",
            "en": "I don't have <b>much time</b>.",
            "gloss": "much + несчётное",
            "say": "I don't have much time."
          },
          {
            "ru": "У неё много денег.",
            "en": "She has <b>a lot of money</b>.",
            "gloss": "a lot of + любое",
            "say": "She has a lot of money."
          },
          {
            "ru": "У тебя много книг?",
            "en": "Do you have <b>many books</b>?",
            "say": "Do you have many books?"
          },
          {
            "ru": "У нас много работы.",
            "en": "We have <b>a lot of work</b>.",
            "say": "We have a lot of work."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have much friends",
            "right": "I have <b>many friends</b>",
            "why": "friends — счётное → many (или a lot of)"
          },
          {
            "wrong": "She has many money",
            "right": "She has <b>a lot of money</b>",
            "why": "money — несчётное → much / a lot of"
          }
        ],
        "mnemonic": "🔢 many = счётное (friends). much = несчётное (money). a lot of = оба.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> many или much?",
            "q": "I have ___ friends.",
            "opts": [
              "many",
              "much",
              "a"
            ],
            "answer": 0,
            "explain": "friends — счётное → <b>many</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери для денег.",
            "q": "She has ___ money.",
            "opts": [
              "many",
              "a lot of",
              "a many"
            ],
            "answer": 1,
            "explain": "money — несчётное → <b>a lot of</b> (или much)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. time — несчётное.",
            "q": "У меня мало времени. (= не много)",
            "accept": [
              "i don't have much time",
              "i do not have much time"
            ],
            "placeholder": "I don't have much ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · мало и слишком",
        "title": "Мало и слишком — <em>a few, a little, too much</em>",
        "paras": [
          "«Немного / мало» — снова два слова. <b>a few</b> — для счётных: <b>a few friends</b> (несколько друзей). <b>a little</b> — для несчётных: <b>a little water</b> (немного воды).",
          "«Слишком много» — <b>too many</b> (счёт) и <b>too much</b> (несчёт): <b>too many people, too much sugar</b>. <b>too</b> значит «слишком» — это чересчур.",
          "«Достаточно» — <b>enough</b> (ставится перед существительным): <b>enough money</b>. «Не хватает» — <b>not enough</b>: <b>I don't have enough time.</b>"
        ],
        "audio": "«Немного, мало» — снова два слова. a few для счётных: a few friends, несколько друзей. a little для несчётных: a little water, немного воды. «Слишком много» — too many для счётных и too much для несчётных: too many people, too much sugar. «Достаточно» — enough: enough money. «Не хватает» — not enough: I don't have enough time.",
        "table": {
          "rows": [
            [
              "a few + счётное",
              "a few friends — несколько"
            ],
            [
              "a little + несчётное",
              "a little water — немного"
            ],
            [
              "too many / too much",
              "слишком много"
            ],
            [
              "(not) enough",
              "(не) достаточно"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "У меня здесь несколько друзей.",
            "en": "I have <b>a few friends</b> here.",
            "gloss": "a few + счётное",
            "say": "I have a few friends here."
          },
          {
            "ru": "Дай немного воды.",
            "en": "Give me <b>a little water</b>.",
            "gloss": "a little + несчётное",
            "say": "Give me a little water."
          },
          {
            "ru": "Здесь слишком много людей.",
            "en": "There are <b>too many people</b> here.",
            "gloss": "too many + счётное",
            "say": "There are too many people here."
          },
          {
            "ru": "В чае слишком много сахара.",
            "en": "There is <b>too much sugar</b> in the tea.",
            "gloss": "too much + несчётное",
            "say": "There is too much sugar in the tea."
          },
          {
            "ru": "У меня недостаточно времени.",
            "en": "I don't have <b>enough time</b>.",
            "gloss": "enough + существительное",
            "say": "I don't have enough time."
          }
        ],
        "mistakes": [
          {
            "wrong": "a little friends",
            "right": "<b>a few friends</b>",
            "why": "friends — счётное → a few"
          },
          {
            "wrong": "too much people",
            "right": "<b>too many people</b>",
            "why": "people — счётное → too many"
          }
        ],
        "mnemonic": "📉 a few (счёт) · a little (несчёт). too much/many = слишком. not enough = не хватает.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> a few или a little?",
            "q": "I have ___ friends here.",
            "opts": [
              "a little",
              "a few",
              "much"
            ],
            "answer": 1,
            "explain": "friends — счётное → <b>a few</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> too much или too many?",
            "q": "There are ___ people here.",
            "opts": [
              "too much",
              "too many",
              "too little"
            ],
            "answer": 1,
            "explain": "people — счётное → <b>too many</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. enough = достаточно.",
            "q": "У меня недостаточно времени.",
            "accept": [
              "i don't have enough time",
              "i do not have enough time"
            ],
            "placeholder": "I don't have enough ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "<em>money, advice, news</em> — несчётные!",
        "paras": [
          "Главная ловушка. В русском «деньги», «новости», «знания» — множественное число. А в английском <b>money, advice, information, news</b> — <b>несчётные</b>: без -s, без «a» и с ними <b>much</b>, а не many.",
          "Поэтому: <b>much money</b> (не «many moneys»), <b>some advice</b> (не «an advice»), <b>good news</b> (news — несчётное, хоть и кончается на -s: <b>the news is good</b>).",
          "Вопрос «сколько?»: <b>How many</b> для счётных (<b>How many friends?</b>), <b>How much</b> для несчётных (<b>How much money?</b>)."
        ],
        "audio": "Главная ловушка. В русском «деньги», «новости» — множественное число. А в английском money, advice, information, news — несчётные: без -s, без a, и с ними much, а не many. Поэтому much money, не «many moneys». some advice, не «an advice». news несчётное, хоть и кончается на -s: the news is good. Вопрос сколько: How many для счётных, How much для несчётных.",
        "table": {
          "rows": [
            [
              "money, advice, information, news",
              "несчётные!"
            ],
            [
              "How many + счётное?",
              "How many friends?"
            ],
            [
              "How much + несчётное?",
              "How much money?"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Сколько у тебя денег?",
            "en": "<b>How much money</b> do you have?",
            "gloss": "money — несчётное → much",
            "say": "How much money do you have?"
          },
          {
            "ru": "Сколько у тебя друзей?",
            "en": "<b>How many friends</b> do you have?",
            "gloss": "friends — счётное → many",
            "say": "How many friends do you have?"
          },
          {
            "ru": "Дай мне совет.",
            "en": "Give me <b>some advice</b>.",
            "gloss": "advice — несчётное, без a",
            "say": "Give me some advice."
          },
          {
            "ru": "У меня хорошие новости.",
            "en": "I have <b>good news</b>.",
            "gloss": "news — несчётное",
            "say": "I have good news."
          },
          {
            "ru": "Мне нужно немного информации.",
            "en": "I need <b>a little information</b>.",
            "say": "I need a little information."
          }
        ],
        "mistakes": [
          {
            "wrong": "How many money do you have?",
            "right": "<b>How much money</b> do you have?",
            "why": "money несчётное → much"
          },
          {
            "wrong": "I have an advice",
            "right": "I have <b>some advice</b>",
            "why": "advice несчётное — без «an», нет «advices»"
          }
        ],
        "mnemonic": "💰 money · advice · information · news = несчётные → much, How much.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> How much или How many?",
            "q": "___ money do you have?",
            "opts": [
              "How much",
              "How many",
              "How a lot"
            ],
            "answer": 0,
            "explain": "money — несчётное → <b>How much</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное про совет.",
            "q": "«Дай мне совет» —",
            "opts": [
              "Give me an advice",
              "Give me some advice",
              "Give me advices"
            ],
            "answer": 1,
            "explain": "advice — несчётное: <b>some advice</b>, без a и без -s."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вопрос.",
            "q": "Собери: «Сколько у тебя друзей?»",
            "want": "How many friends do you have",
            "answer": "How many friends do you have"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том планируют вечеринку и считают, чего сколько. Слушай much, many, enough.",
      "lines": [
        {
          "who": "A",
          "en": "How many people are coming to the party?",
          "ru": "Сколько человек придёт на вечеринку?"
        },
        {
          "who": "B",
          "en": "About twenty. Do we have enough food?",
          "ru": "Около двадцати. Нам хватит еды?"
        },
        {
          "who": "A",
          "en": "We have a lot of pizza, but not much juice.",
          "ru": "Пиццы много, а сока мало."
        },
        {
          "who": "B",
          "en": "And we don't have much money for more.",
          "ru": "И денег на ещё нет."
        },
        {
          "who": "A",
          "en": "A few drinks are enough. Don't worry!",
          "ru": "Пары напитков хватит. Не волнуйся!"
        }
      ]
    },
    "vocab": {
      "intro": "Главные слова дня — про количество. Повтори вслух.",
      "items": [
        {
          "en": "many",
          "ru": "много (счётное)",
          "ex": "Many friends."
        },
        {
          "en": "much",
          "ru": "много (несчётное)",
          "ex": "Much time."
        },
        {
          "en": "a lot of",
          "ru": "много (любое)",
          "ex": "A lot of money."
        },
        {
          "en": "a few",
          "ru": "несколько (счётное)",
          "ex": "A few books."
        },
        {
          "en": "a little",
          "ru": "немного (несчётное)",
          "ex": "A little water."
        },
        {
          "en": "enough",
          "ru": "достаточно",
          "ex": "Enough time."
        },
        {
          "en": "too much",
          "ru": "слишком много",
          "ex": "Too much sugar."
        },
        {
          "en": "money",
          "ru": "деньги (несчётное!)",
          "ex": "How much money?"
        },
        {
          "en": "advice",
          "ru": "совет (несчётное!)",
          "ex": "Some advice."
        }
      ]
    },
    "drag": {
      "intro": "Соедини количество с переводом.",
      "pairs": [
        [
          "many",
          "много (счётное)"
        ],
        [
          "much",
          "много (несчётное)"
        ],
        [
          "a few",
          "несколько"
        ],
        [
          "enough",
          "достаточно"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса про количество. Вперёд!",
      "items": [
        {
          "q": "«У меня много друзей» —",
          "opts": [
            "I have much friends",
            "I have many friends",
            "I have a much friends"
          ],
          "answer": 1,
          "explain": "friends — счётное → <b>many</b>."
        },
        {
          "q": "«Сколько у тебя денег?» —",
          "opts": [
            "How many money?",
            "How much money?",
            "How a lot money?"
          ],
          "answer": 1,
          "explain": "money — несчётное → <b>How much</b>."
        },
        {
          "q": "«Дай мне совет» —",
          "opts": [
            "Give me some advice",
            "Give me an advice",
            "Give me advices"
          ],
          "answer": 0,
          "explain": "advice несчётное → <b>some advice</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: студент рассказывает о жизни в большом городе. Следи за much, many, enough.",
      "title": "Life in the big city",
      "sentences": [
        "I live in a big city with a lot of people.",
        "There are many shops and cafes near my house.",
        "But the city has too much traffic.",
        "I don't have much free time.",
        "And I don't have enough money for a big flat.",
        "I have only a few friends here, but they are great.",
        "I drink a little coffee every morning.",
        "There is too much noise at night.",
        "My mum gives me good advice on the phone.",
        "How much does life in your city cost?"
      ],
      "translation": "Я живу в большом городе, где много людей. Рядом с моим домом много магазинов и кафе. Но в городе слишком много машин. У меня мало свободного времени. И у меня недостаточно денег на большую квартиру. У меня здесь всего несколько друзей, но они классные. Каждое утро я пью немного кофе. Ночью слишком много шума. Мама даёт мне хорошие советы по телефону. Сколько стоит жизнь в твоём городе?"
    },
    "essay": {
      "intro": "Расскажи о своём городе через количество.",
      "prompt": "Напиши 3–5 предложений о своём городе: чего много, чего мало, чего хватает. Используй a lot of, many, much, not enough.",
      "hint": "Структуры: There are a lot of… ; There aren't many… ; There is too much… ; I don't have enough…",
      "example": "There are a lot of cafes in my city. There are too many cars. There isn't much green space. But I have a few good friends and that is enough."
    },
    "picture": {
      "intro": "На столе продукты. Опиши, чего сколько, по картинке.",
      "emoji": "🛒🍎🥛",
      "prompt": "Опиши покупки: чего много, чего мало. Используй a lot of / a few / a little / not much.",
      "hint": "Используй: a lot of apples; a little milk; not much bread; a few eggs.",
      "example": "There are a lot of apples. There is a little milk. There isn't much bread. We have a few eggs.",
      "img": "img/a2/day-24.jpg",
      "credit": "Фото: USDAgov · Public Domain · <a href=\"https://www.flickr.com/photos/41284017@N08/8425080523\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "25": {
    "day": 25,
    "week": "04",
    "level": "A2",
    "themeRu": "Люблю делать",
    "themeEn": "Gerund vs infinitive",
    "intro": "«Люблю <b>читать</b>», «хочу <b>пойти</b>» — сегодня учимся ставить два глагола подряд. В русском всё просто: второй глагол в начальной форме. А в английском у него два «костюма»: либо <b>to + глагол</b> (<b>want to go</b>), либо <b>глагол + -ing</b> (<b>enjoy reading</b>). Какой надеть — решает первый глагол. Я дам тебе списки-якоря, и всё встанет на места.",
    "introAudio": "«Люблю читать», «хочу пойти» — сегодня учимся ставить два глагола подряд. В русском всё просто: второй глагол в начальной форме. А в английском у него два костюма: либо to плюс глагол, want to go, либо глагол плюс -ing, enjoy reading. Какой надеть — решает первый глагол. Я дам тебе списки-якоря, и всё встанет на места.",
    "goals": [
      "соединять два глагола: <b>want to go, enjoy reading</b>",
      "запомнить глаголы с <b>to</b>: want, would like, need, decide",
      "запомнить глаголы с <b>-ing</b>: enjoy, like, love, hate, finish",
      "не говорить «enjoy <b>to</b> read» — после enjoy всегда <b>-ing</b>"
    ],
    "learned": [
      "Соединил(а) два глагола: <b>want to go, enjoy reading</b>",
      "Запомнил(а) глаголы с <b>to</b>: want, would like, need, decide",
      "Запомнил(а) глаголы с <b>-ing</b>: enjoy, like, love, hate, finish",
      "Перестал(а) говорить «enjoy <b>to</b> read» — запомнил(а), что после enjoy всегда <b>-ing</b>"
    ],
    "review": {
      "intro": "Сначала вчерашнее — количество. Вспомни: <b>many</b> для счётных, <b>much</b> для несчётных, и что <b>money</b> — несчётное.",
      "introAudio": "Сначала вчерашнее — количество. Вспомни: many для счётных, much для несчётных, и что money — несчётное.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> many или much?",
          "q": "How ___ money do you have?",
          "opts": [
            "many",
            "much",
            "a lot"
          ],
          "answer": 1,
          "explain": "money — несчётное → <b>much</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу.",
          "q": "Собери: «У меня много друзей»",
          "want": "I have many friends",
          "answer": "I have many friends"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · глагол + to",
        "title": "С <em>to</em>: <em>want, need, would like, decide</em>",
        "paras": [
          "Часть глаголов хотят после себя <b>to + глагол</b>. Самые частые: <b>want</b> (хотеть), <b>need</b> (нуждаться), <b>would like</b> (хотел бы, вежливо), <b>decide</b> (решить), <b>hope</b> (надеяться).",
          "<b>I want to go home.</b> = Я хочу пойти домой. <b>I need to sleep.</b> = Мне нужно поспать. <b>I'd like to help.</b> = Я хотел бы помочь.",
          "Запомни связку <b>want to</b> — она звучит очень часто. После неё глагол в начальной форме: want to <b>go</b>, want to <b>eat</b>."
        ],
        "audio": "Часть глаголов хотят после себя to плюс глагол. Самые частые: want, хотеть, need, нуждаться, would like, хотел бы, decide, решить. I want to go home, я хочу пойти домой. I need to sleep, мне нужно поспать. I'd like to help, я хотел бы помочь. Запомни связку want to.",
        "table": {
          "rows": [
            [
              "want to + глагол",
              "I want to go."
            ],
            [
              "need to + глагол",
              "I need to sleep."
            ],
            [
              "would like to + глагол",
              "I'd like to help."
            ],
            [
              "decide to + глагол",
              "I decided to stay."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я хочу пойти домой.",
            "en": "I <b>want to go</b> home.",
            "gloss": "want + to + глагол",
            "say": "I want to go home."
          },
          {
            "ru": "Мне нужно поспать.",
            "en": "I <b>need to sleep</b>.",
            "gloss": "need + to",
            "say": "I need to sleep."
          },
          {
            "ru": "Я хотел бы выпить кофе.",
            "en": "I'<b>d like to</b> drink coffee.",
            "gloss": "would like to",
            "say": "I'd like to drink coffee."
          },
          {
            "ru": "Мы решили остаться дома.",
            "en": "We <b>decided to stay</b> home.",
            "gloss": "decide + to",
            "say": "We decided to stay home."
          },
          {
            "ru": "Она надеется выиграть.",
            "en": "She <b>hopes to win</b>.",
            "say": "She hopes to win."
          }
        ],
        "mistakes": [
          {
            "wrong": "I want go home",
            "right": "I want <b>to go</b> home",
            "why": "после want нужен to: want to go"
          },
          {
            "wrong": "I want to going home",
            "right": "I want <b>to go</b> home",
            "why": "после to — начальная форма, не -ing"
          }
        ],
        "mnemonic": "🎯 want / need / would like / decide + TO + глагол.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное.",
            "q": "«Я хочу пойти домой» —",
            "opts": [
              "I want to go home",
              "I want go home",
              "I want going home"
            ],
            "answer": 0,
            "explain": "после want — <b>to + глагол</b>: want to go."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу.",
            "q": "Собери: «Мне нужно поспать»",
            "want": "I need to sleep",
            "answer": "I need to sleep"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. would like = хотел бы.",
            "q": "Я хотел бы помочь.",
            "accept": [
              "i would like to help",
              "i'd like to help"
            ],
            "placeholder": "I'd like to ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · глагол + -ing",
        "title": "С <em>-ing</em>: <em>enjoy, like, love, hate, finish</em>",
        "paras": [
          "Другая группа глаголов хочет после себя <b>глагол + -ing</b>. Главные: <b>enjoy</b> (получать удовольствие), <b>like</b> (нравиться), <b>love</b> (любить), <b>hate</b> (ненавидеть), <b>finish</b> (заканчивать).",
          "<b>I enjoy reading.</b> = Я люблю читать (получаю удовольствие). <b>I love cooking.</b> = Я обожаю готовить. <b>I finished working.</b> = Я закончил работать.",
          "Эта форма (<b>-ing</b>) называется герундий — глагол-«существительное»: reading = «чтение / читать». После этих глаголов всегда -ing, без to."
        ],
        "audio": "Другая группа глаголов хочет после себя глагол плюс -ing. Главные: enjoy, like, love, hate, finish. I enjoy reading, я люблю читать. I love cooking, я обожаю готовить. I finished working, я закончил работать. Эта форма называется герундий: reading — чтение. После этих глаголов всегда -ing, без to.",
        "table": {
          "rows": [
            [
              "enjoy + -ing",
              "I enjoy reading."
            ],
            [
              "love / like + -ing",
              "I love cooking."
            ],
            [
              "hate + -ing",
              "I hate waiting."
            ],
            [
              "finish + -ing",
              "I finished working."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я люблю читать (с удовольствием).",
            "en": "I <b>enjoy reading</b>.",
            "gloss": "enjoy + -ing",
            "say": "I enjoy reading."
          },
          {
            "ru": "Я обожаю готовить.",
            "en": "I <b>love cooking</b>.",
            "gloss": "love + -ing",
            "say": "I love cooking."
          },
          {
            "ru": "Я ненавижу ждать.",
            "en": "I <b>hate waiting</b>.",
            "gloss": "hate + -ing",
            "say": "I hate waiting."
          },
          {
            "ru": "Я закончил работать в шесть.",
            "en": "I <b>finished working</b> at six.",
            "gloss": "finish + -ing",
            "say": "I finished working at six."
          },
          {
            "ru": "Ей нравится плавать.",
            "en": "She <b>likes swimming</b>.",
            "say": "She likes swimming."
          }
        ],
        "mistakes": [
          {
            "wrong": "I enjoy to read",
            "right": "I <b>enjoy reading</b>",
            "why": "после enjoy — только -ing, не to"
          },
          {
            "wrong": "I finished to work",
            "right": "I <b>finished working</b>",
            "why": "finish + -ing"
          }
        ],
        "mnemonic": "🎵 enjoy / like / love / hate / finish + глагол + -ING.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное.",
            "q": "«Я люблю читать» (с удовольствием) —",
            "opts": [
              "I enjoy to read",
              "I enjoy reading",
              "I enjoy read"
            ],
            "answer": 1,
            "explain": "после enjoy — <b>-ing</b>: enjoy reading."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу.",
            "q": "Собери: «Я обожаю готовить»",
            "want": "I love cooking",
            "answer": "I love cooking"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. finish = заканчивать; work → working.",
            "q": "Я закончил работать.",
            "accept": [
              "i finished working"
            ],
            "placeholder": "I finished ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Почему <em>enjoy reading</em>, а не <em>enjoy to read</em>",
        "paras": [
          "Вот ловушка. По-русски «я люблю <b>читать</b>» и «я хочу <b>читать</b>» — второй глагол одинаковый. Кажется, что и в английском везде to read. Но нет!",
          "После <b>want</b> — <b>to</b>: I want <b>to read</b>. После <b>enjoy / like / love</b> — <b>-ing</b>: I enjoy <b>reading</b>. Сравни: <b>I want to read</b> ≠ <b>I enjoy reading</b>.",
          "Правило простое: «получаю удовольствие, занимаюсь этим» (enjoy, love, hate, finish) → <b>-ing</b>. «хочу / нужно / решил» (want, need, decide) → <b>to</b>."
        ],
        "audio": "Вот ловушка. По-русски «я люблю читать» и «я хочу читать» — второй глагол одинаковый. Кажется, что и в английском везде to read. Но нет. После want — to: I want to read. После enjoy, like, love — -ing: I enjoy reading. Получаю удовольствие, занимаюсь этим, enjoy, love, finish — это -ing. Хочу, нужно, решил, want, need, decide — это to.",
        "table": {
          "rows": [
            [
              "want / need / decide → to",
              "I want to read."
            ],
            [
              "enjoy / like / love → -ing",
              "I enjoy reading."
            ],
            [
              "❌ enjoy to read",
              "✅ enjoy reading"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Я хочу почитать книгу.",
            "en": "I <b>want to read</b> a book.",
            "gloss": "want → to",
            "say": "I want to read a book."
          },
          {
            "ru": "Я люблю читать книги.",
            "en": "I <b>enjoy reading</b> books.",
            "gloss": "enjoy → -ing",
            "say": "I enjoy reading books."
          },
          {
            "ru": "Мне нужно сегодня позаниматься.",
            "en": "I <b>need to study</b> today.",
            "gloss": "need → to",
            "say": "I need to study today."
          },
          {
            "ru": "Я обожаю учить языки.",
            "en": "I <b>love learning</b> languages.",
            "gloss": "love → -ing",
            "say": "I love learning languages."
          }
        ],
        "mistakes": [
          {
            "wrong": "I enjoy to read",
            "right": "I <b>enjoy reading</b>",
            "why": "enjoy → -ing, не to (главная русская ошибка)"
          },
          {
            "wrong": "I want reading a book",
            "right": "I <b>want to read</b> a book",
            "why": "want → to, не -ing"
          }
        ],
        "mnemonic": "🔑 enjoy/love/hate/finish → -ing. want/need/decide → to.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное после enjoy.",
            "q": "«Я люблю плавать» (с удовольствием) —",
            "opts": [
              "I enjoy to swim",
              "I enjoy swimming",
              "I enjoy swim"
            ],
            "answer": 1,
            "explain": "enjoy → <b>-ing</b>: enjoy swimming."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное после want.",
            "q": "«Я хочу поплавать» —",
            "opts": [
              "I want swimming",
              "I want to swim",
              "I want swim"
            ],
            "answer": 1,
            "explain": "want → <b>to</b>: want to swim."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши. learn → learning.",
            "q": "Я обожаю учить языки.",
            "accept": [
              "i love learning languages"
            ],
            "placeholder": "I love ... languages"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · о хобби",
        "title": "Рассказ о хобби: <em>like / love + -ing</em>",
        "paras": [
          "Эти формы — твой инструмент рассказать о хобби и свободном времени. <b>In my free time I like watching films and playing football.</b> = В свободное время я люблю смотреть фильмы и играть в футбол.",
          "Можно соединять цепочкой через <b>and</b>: <b>I enjoy cooking and listening to music.</b> Каждый глагол — со своим -ing.",
          "А планы и желания — через <b>want to / would like to</b>: <b>I want to learn the guitar.</b> = Я хочу научиться играть на гитаре. Так в одном рассказе живут обе формы."
        ],
        "audio": "Эти формы — твой инструмент рассказать о хобби. In my free time I like watching films and playing football. Можно соединять цепочкой через and: I enjoy cooking and listening to music. Каждый глагол со своим -ing. А планы и желания — через want to: I want to learn the guitar, я хочу научиться играть на гитаре.",
        "table": {
          "rows": [
            [
              "I like + -ing",
              "I like watching films."
            ],
            [
              "I enjoy …-ing and …-ing",
              "цепочка хобби"
            ],
            [
              "I want to + глагол",
              "I want to learn…"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "В свободное время я люблю смотреть фильмы.",
            "en": "In my free time I <b>like watching</b> films.",
            "gloss": "like + -ing",
            "say": "In my free time I like watching films."
          },
          {
            "ru": "Я люблю готовить и слушать музыку.",
            "en": "I <b>enjoy cooking and listening</b> to music.",
            "gloss": "цепочка -ing",
            "say": "I enjoy cooking and listening to music."
          },
          {
            "ru": "Я хочу научиться играть на гитаре.",
            "en": "I <b>want to learn</b> the guitar.",
            "gloss": "want to + глагол",
            "say": "I want to learn the guitar."
          },
          {
            "ru": "Я ненавижу рано вставать.",
            "en": "I <b>hate getting</b> up early.",
            "say": "I hate getting up early."
          }
        ],
        "mistakes": [
          {
            "wrong": "I like watch and play",
            "right": "I like <b>watching</b> and <b>playing</b>",
            "why": "после like каждый глагол с -ing"
          }
        ],
        "mnemonic": "🎸 Хобби → like/enjoy + -ing. Планы → want to + глагол.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное.",
            "q": "«Я люблю смотреть фильмы» —",
            "opts": [
              "I like watch films",
              "I like watching films",
              "I like to watching films"
            ],
            "answer": 1,
            "explain": "like → <b>-ing</b>: like watching."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу о желании.",
            "q": "Собери: «Я хочу научиться играть на гитаре»",
            "want": "I want to learn the guitar",
            "answer": "I want to learn the guitar"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух про себя.",
            "target": "I enjoy cooking and listening to music.",
            "sub": "Я люблю готовить и слушать музыку.",
            "want": "cooking"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Том и Аня говорят про выходные и хобби. Слушай, где -ing, а где to.",
      "lines": [
        {
          "who": "A",
          "en": "What do you like doing at the weekend?",
          "ru": "Что ты любишь делать на выходных?"
        },
        {
          "who": "B",
          "en": "I enjoy reading and playing tennis. And you?",
          "ru": "Я люблю читать и играть в теннис. А ты?"
        },
        {
          "who": "A",
          "en": "I love cooking, but I hate washing the dishes!",
          "ru": "Я обожаю готовить, но ненавижу мыть посуду!"
        },
        {
          "who": "B",
          "en": "Ha! Do you want to play tennis on Sunday?",
          "ru": "Ха! Хочешь сыграть в теннис в воскресенье?"
        },
        {
          "who": "A",
          "en": "Yes! I'd like to try it.",
          "ru": "Да! Я хотела бы попробовать."
        }
      ]
    },
    "vocab": {
      "intro": "Главные слова дня — глаголы и что идёт после них. Повтори вслух.",
      "items": [
        {
          "en": "want to",
          "ru": "хотеть (+ глагол)",
          "ex": "I want to go."
        },
        {
          "en": "need to",
          "ru": "нужно (+ глагол)",
          "ex": "I need to sleep."
        },
        {
          "en": "would like to",
          "ru": "хотел бы (вежливо)",
          "ex": "I'd like to help."
        },
        {
          "en": "decide to",
          "ru": "решить (+ глагол)",
          "ex": "I decided to stay."
        },
        {
          "en": "enjoy",
          "ru": "получать удовольствие (+ -ing)",
          "ex": "I enjoy reading."
        },
        {
          "en": "love",
          "ru": "обожать (+ -ing)",
          "ex": "I love cooking."
        },
        {
          "en": "hate",
          "ru": "ненавидеть (+ -ing)",
          "ex": "I hate waiting."
        },
        {
          "en": "finish",
          "ru": "заканчивать (+ -ing)",
          "ex": "I finished working."
        },
        {
          "en": "free time",
          "ru": "свободное время",
          "ex": "In my free time…"
        }
      ]
    },
    "drag": {
      "intro": "Соедини глагол с тем, что идёт после него.",
      "pairs": [
        [
          "want",
          "to + глагол"
        ],
        [
          "enjoy",
          "глагол + -ing"
        ],
        [
          "decide",
          "to + глагол"
        ],
        [
          "finish",
          "глагол + -ing"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса про два глагола подряд. Поехали!",
      "items": [
        {
          "q": "«Я люблю читать» (с удовольствием) —",
          "opts": [
            "I enjoy to read",
            "I enjoy reading",
            "I enjoy read"
          ],
          "answer": 1,
          "explain": "enjoy → <b>-ing</b>: enjoy reading."
        },
        {
          "q": "«Я хочу пойти домой» —",
          "opts": [
            "I want go home",
            "I want to go home",
            "I want going home"
          ],
          "answer": 1,
          "explain": "want → <b>to</b>: want to go."
        },
        {
          "q": "«Я закончил работать» —",
          "opts": [
            "I finished working",
            "I finished to work",
            "I finished work"
          ],
          "answer": 0,
          "explain": "finish → <b>-ing</b>: finished working."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: девушка рассказывает про свои хобби и планы. Следи за -ing и to.",
      "title": "My free time",
      "sentences": [
        "I love spending my free time at home.",
        "I enjoy reading books and watching films.",
        "On Saturdays I like cooking for my friends.",
        "I hate cleaning, but I have to do it.",
        "This year I want to learn Spanish.",
        "I also need to do more sport.",
        "I decided to start running in the morning.",
        "I finished reading a great book yesterday.",
        "I'd like to visit Spain one day.",
        "What do you enjoy doing?"
      ],
      "translation": "Я обожаю проводить свободное время дома. Я люблю читать книги и смотреть фильмы. По субботам я люблю готовить для друзей. Я ненавижу убираться, но приходится. В этом году я хочу выучить испанский. Ещё мне нужно больше заниматься спортом. Я решила начать бегать по утрам. Вчера я дочитала отличную книгу. Я хотела бы однажды съездить в Испанию. А что любишь делать ты?"
    },
    "essay": {
      "intro": "Расскажи о своих хобби и планах.",
      "prompt": "Напиши 3–5 предложений про свободное время. Что ты любишь делать (-ing) и что хочешь попробовать (want to)?",
      "hint": "Структуры: I enjoy… ; I love… ; I hate… ; I want to… ; I'd like to…",
      "example": "I enjoy reading and listening to music. I love cooking on Sundays. I hate getting up early. This year I want to learn the guitar. I'd like to travel more."
    },
    "picture": {
      "intro": "Человек занимается хобби. Опиши по картинке, что он любит делать.",
      "emoji": "🎨📚🎸",
      "prompt": "Опиши хобби человека. Используй He/She likes / enjoys / loves + -ing.",
      "hint": "Используй: She enjoys painting; She likes reading; She loves playing music.",
      "example": "She enjoys painting. She likes reading books. She loves playing the guitar. She wants to learn new things.",
      "img": "img/a2/day-25.jpg",
      "credit": "Фото: qubodup · CC0 · <a href=\"https://www.flickr.com/photos/21051491@N02/8152132635\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "26": {
    "day": 26,
    "week": "04",
    "level": "A2",
    "themeRu": "Если…",
    "themeEn": "First conditional",
    "intro": "Два глагола подряд ты уже ставишь. Сегодня — <b>условие</b>: «<b>если</b> … то …». Речь о будущем, которое зависит от обстоятельства: <b>If it rains, I'll stay home.</b> — Если пойдёт дождь, я останусь дома. Тут прячется камень, о который спотыкаются почти все русскоязычные, — и я сразу тебя от него уберегу. Правило простое: после <b>if</b> идёт <b>настоящее</b> время, даже если говорим о будущем. Поехали.",
    "introAudio": "Два глагола подряд ты уже ставишь. Сегодня — условие: «если … то …». Речь о будущем, которое зависит от обстоятельства: If it rains, I'll stay home, если пойдёт дождь, я останусь дома. Тут прячется камень, о который спотыкаются почти все русскоязычные, и я сразу тебя от него уберегу. Правило простое: после if идёт настоящее время, даже если говорим о будущем. Поехали.",
    "goals": [
      "строить условие: <b>If + present, … will + глагол</b>",
      "говорить о будущем с условием: <b>If it rains, I'll stay home</b>",
      "понять факты (zero conditional): <b>If you heat ice, it melts</b>",
      "запомнить: после <b>if</b> — настоящее, НЕ «if I will»"
    ],
    "learned": [
      "Построил(а) условие: <b>If + present, … will + глагол</b>",
      "Сказал(а) о будущем с условием: <b>If it rains, I'll stay home</b>",
      "Понял(а) факты (zero conditional): <b>If you heat ice, it melts</b>",
      "Запомнил(а): после <b>if</b> — настоящее, НЕ «if I will»"
    ],
    "review": {
      "intro": "Сначала вчерашнее — два глагола подряд. Вспомни: после <b>want</b> идёт <b>to</b>, а после <b>enjoy</b> — <b>-ing</b>.",
      "introAudio": "Сначала вчерашнее — два глагола подряд. Вспомни: после want идёт to, а после enjoy — -ing.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери верное.",
          "q": "«Я люблю читать» (с удовольствием) —",
          "opts": [
            "I enjoy to read",
            "I enjoy reading",
            "I enjoy read"
          ],
          "answer": 1,
          "explain": "enjoy → <b>-ing</b>: enjoy reading."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу.",
          "q": "Собери: «Я хочу пойти домой»",
          "want": "I want to go home",
          "answer": "I want to go home"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · если … то …",
        "title": "Условие: <em>If + present, … will + глагол</em>",
        "paras": [
          "Условие «если … то …» строится из двух частей. В части с <b>if</b> — <b>настоящее</b> время (present simple). В другой части — <b>will + глагол</b> (будущее).",
          "<b>If it rains, I will stay home.</b> = Если пойдёт дождь, я останусь дома. Заметь: «пойдёт дождь» — это будущее по смыслу, но в части с if стоит <b>rains</b> (настоящее).",
          "Части можно менять местами. Если if впереди — ставим запятую: <b>If you call me, I'll come.</b> Если if в конце — запятая не нужна: <b>I'll come if you call me.</b>"
        ],
        "audio": "Условие «если … то …» строится из двух частей. В части с if — настоящее время. В другой части — will плюс глагол. If it rains, I will stay home, если пойдёт дождь, я останусь дома. «Пойдёт дождь» — это будущее по смыслу, но в части с if стоит rains, настоящее. Части можно менять местами.",
        "table": {
          "rows": [
            [
              "If + present, … will + глагол",
              "условие → результат"
            ],
            [
              "If it rains, I'll stay home.",
              "Если пойдёт дождь, я останусь дома."
            ],
            [
              "I'll come if you call me.",
              "if может стоять и в конце"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Если пойдёт дождь, я останусь дома.",
            "en": "<b>If</b> it <b>rains</b>, I'<b>ll stay</b> home.",
            "gloss": "if + present, will + глагол",
            "say": "If it rains, I'll stay home."
          },
          {
            "ru": "Если ты позвонишь, я приду.",
            "en": "<b>If</b> you <b>call</b> me, I'<b>ll come</b>.",
            "gloss": "call (наст.) → will come",
            "say": "If you call me, I'll come."
          },
          {
            "ru": "Если ты поможешь, мы закончим быстро.",
            "en": "If you <b>help</b>, we'<b>ll finish</b> fast.",
            "gloss": "help → will finish",
            "say": "If you help, we'll finish fast."
          },
          {
            "ru": "Я приду, если ты позвонишь.",
            "en": "I'<b>ll come</b> if you <b>call</b> me.",
            "gloss": "if в конце — без запятой",
            "say": "I'll come if you call me."
          }
        ],
        "mistakes": [
          {
            "wrong": "If it will rain, I'll stay",
            "right": "<b>If it rains</b>, I'll stay",
            "why": "после if — настоящее (rains), не will"
          }
        ],
        "mnemonic": "🌦️ If + НАСТОЯЩЕЕ, … will + глагол.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму после if.",
            "q": "If it ___, I'll stay home.",
            "opts": [
              "rains",
              "will rain",
              "rained"
            ],
            "answer": 0,
            "explain": "после if — настоящее: <b>rains</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери условие.",
            "q": "Собери: «Если ты позвонишь, я приду»",
            "want": "If you call me, I'll come",
            "answer": "If you call me, I'll come"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши результат. stay home = остаться дома.",
            "q": "Если пойдёт дождь, я останусь дома.",
            "accept": [
              "if it rains, i'll stay home",
              "if it rains i'll stay home",
              "if it rains, i will stay home"
            ],
            "placeholder": "If it rains, I'll ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · русская ловушка",
        "title": "После <em>if</em> — настоящее, НЕ «if I will»",
        "paras": [
          "Вот та самая ловушка. По-русски мы говорим «если <b>пойдёт</b> дождь» — глагол в будущем. И рука сама тянется написать «if it <b>will</b> rain». Это ошибка!",
          "В английском будущее в части с if «прячется» в настоящее. Будущее (<b>will</b>) остаётся только во <b>второй</b> части: <b>If it rains</b> (наст.), <b>I'll stay</b> (буд.) home.",
          "Просто запомни: рядом с <b>if</b> слова <b>will</b> нет. <b>If you are</b> free, … <b>If she comes</b>, … — везде настоящее."
        ],
        "audio": "Вот та самая ловушка. По-русски мы говорим «если пойдёт дождь» — глагол в будущем. И рука сама тянется написать if it will rain. Это ошибка. В английском будущее в части с if прячется в настоящее. Will остаётся только во второй части: If it rains, I'll stay home. Рядом с if слова will нет.",
        "table": {
          "rows": [
            [
              "❌ If it will rain…",
              "✅ If it rains…"
            ],
            [
              "❌ If you will come…",
              "✅ If you come…"
            ],
            [
              "will — только во 2-й части",
              "…, I'll stay home."
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Если ты придёшь, мы посмотрим фильм.",
            "en": "If you <b>come</b>, we'll watch a film.",
            "gloss": "come — наст., не will come",
            "say": "If you come, we'll watch a film."
          },
          {
            "ru": "Если ты будешь свободен, позвони мне.",
            "en": "If you <b>are</b> free, call me.",
            "gloss": "are — наст.",
            "say": "If you are free, call me."
          },
          {
            "ru": "Если она опоздает, мы подождём.",
            "en": "If she <b>is</b> late, we'll wait.",
            "gloss": "is late — наст.",
            "say": "If she is late, we'll wait."
          },
          {
            "ru": "Если будет холодно, я останусь дома.",
            "en": "If it <b>is</b> cold, I'll stay home.",
            "gloss": "is cold — наст., не will be",
            "say": "If it is cold, I'll stay home."
          }
        ],
        "mistakes": [
          {
            "wrong": "If you will come, we'll watch a film",
            "right": "<b>If you come</b>, we'll watch a film",
            "why": "после if — настоящее (come), will нельзя"
          },
          {
            "wrong": "If it will be cold, I'll stay",
            "right": "<b>If it is</b> cold, I'll stay",
            "why": "после if — is, не will be"
          }
        ],
        "mnemonic": "🚫 Рядом с if НЕТ will. If you come, … (не «if you will come»).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди верную часть с if.",
            "q": "Как правильно?",
            "opts": [
              "If you will come, we'll watch a film",
              "If you come, we'll watch a film",
              "If you came, we'll watch a film"
            ],
            "answer": 1,
            "explain": "после if — настоящее: <b>come</b>, без will."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму.",
            "q": "If she ___ late, we'll wait.",
            "opts": [
              "will be",
              "is",
              "be"
            ],
            "answer": 1,
            "explain": "после if — настоящее: <b>is</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши часть с if. be free = быть свободным.",
            "q": "Если ты будешь свободен, позвони мне.",
            "accept": [
              "if you are free, call me",
              "if you are free call me"
            ],
            "placeholder": "If you are free, ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · факты",
        "title": "Факты и правила: <em>If you heat ice, it melts</em>",
        "paras": [
          "Иногда «если» — это не про конкретное будущее, а про то, что <b>всегда так бывает</b>: законы природы, правила, привычки. Тогда в <b>обеих</b> частях — настоящее время.",
          "<b>If you heat ice, it melts.</b> = Если нагреть лёд, он тает. <b>If you mix blue and yellow, you get green.</b> = Если смешать синий и жёлтый, получится зелёный. Это работает всегда, без will.",
          "Лёгкий ориентир: «если случится один раз в будущем» → <b>will</b> (If it rains, I'll stay). «Если так бывает всегда» → <b>оба настоящих</b> (If you heat ice, it melts)."
        ],
        "audio": "Иногда «если» — это не про конкретное будущее, а про то, что всегда так бывает: законы природы, правила. Тогда в обеих частях настоящее время. If you heat ice, it melts, если нагреть лёд, он тает. Если случится один раз в будущем — will. Если так бывает всегда — оба настоящих.",
        "table": {
          "rows": [
            [
              "If you heat ice, it melts.",
              "Если нагреть лёд, он тает."
            ],
            [
              "If + present, … present",
              "факты, всегда"
            ],
            [
              "If + present, … will",
              "один раз в будущем"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Если нагреть лёд, он тает.",
            "en": "If you <b>heat</b> ice, it <b>melts</b>.",
            "gloss": "оба настоящих — факт",
            "say": "If you heat ice, it melts."
          },
          {
            "ru": "Если смешать синий и жёлтый, получается зелёный.",
            "en": "If you <b>mix</b> blue and yellow, you <b>get</b> green.",
            "gloss": "правило",
            "say": "If you mix blue and yellow, you get green."
          },
          {
            "ru": "Если нажать кнопку, дверь открывается.",
            "en": "If you <b>press</b> the button, the door <b>opens</b>.",
            "say": "If you press the button, the door opens."
          },
          {
            "ru": "Если воду нагреть до 100 градусов, она кипит.",
            "en": "If you <b>heat</b> water to 100 degrees, it <b>boils</b>.",
            "gloss": "оба настоящих — факт",
            "say": "If you heat water to 100 degrees, it boils."
          }
        ],
        "mistakes": [
          {
            "wrong": "If you heat ice, it will melts",
            "right": "If you heat ice, it <b>melts</b>",
            "why": "факт → оба настоящих; и после will всегда базовая форма (melt), не melts"
          }
        ],
        "mnemonic": "🧊 Факт всегда: If + present, … present. (If you heat ice, it melts.)",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери для факта.",
            "q": "If you heat ice, it ___.",
            "opts": [
              "will melts",
              "melts",
              "melt"
            ],
            "answer": 1,
            "explain": "факт → настоящее: <b>melts</b> (it → -s)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери факт.",
            "q": "Собери: «Если нагреть лёд, он тает»",
            "want": "If you heat ice, it melts",
            "answer": "If you heat ice, it melts"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> факт или будущее?",
            "q": "«Если пойдёт дождь, я останусь дома» (один раз) —",
            "opts": [
              "If it rains, I stay home",
              "If it rains, I'll stay home",
              "If it will rain, I'll stay home"
            ],
            "answer": 1,
            "explain": "один раз в будущем → <b>will</b>: I'll stay home."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · собираем условие",
        "title": "Что после <em>will</em> — и связки <em>if / when</em>",
        "paras": [
          "После <b>will</b> всегда идёт <b>базовая форма</b> глагола — без -s и без to: <b>he'll go</b> (не «he'll goes»), <b>I'll be</b> happy. И сокращаем: I'll, you'll, he'll, we'll.",
          "Результат можно сказать мягче — через <b>might</b> из дня про возможность: <b>If you ask, she might help.</b> = Если попросишь, она, возможно, поможет.",
          "Рядом с <b>if</b> часто стоит <b>when</b> (когда) — и работает так же: после when тоже <b>настоящее</b>. <b>When I get home, I'll call you.</b> = Когда приду домой, позвоню тебе."
        ],
        "audio": "После will всегда базовая форма глагола — без -s и без to: he'll go, I'll be happy. Сокращаем: I'll, you'll, he'll. Результат можно сказать мягче через might: If you ask, she might help. Рядом с if часто стоит when, когда, и работает так же: после when тоже настоящее. When I get home, I'll call you.",
        "table": {
          "rows": [
            [
              "will + базовая форма",
              "he'll go, I'll be"
            ],
            [
              "If you ask, she might help.",
              "мягкий результат — might"
            ],
            [
              "When I get home, I'll call.",
              "после when — тоже настоящее"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Если ты опоздаешь, он уйдёт.",
            "en": "If you are late, he'<b>ll go</b>.",
            "gloss": "will + базовая форма",
            "say": "If you are late, he'll go."
          },
          {
            "ru": "Если попросишь, она, возможно, поможет.",
            "en": "If you ask, she <b>might help</b>.",
            "gloss": "результат с might",
            "say": "If you ask, she might help."
          },
          {
            "ru": "Когда приду домой, позвоню тебе.",
            "en": "<b>When</b> I <b>get</b> home, I'll call you.",
            "gloss": "when + настоящее",
            "say": "When I get home, I'll call you."
          },
          {
            "ru": "Если будешь заниматься, сдашь экзамен.",
            "en": "If you <b>study</b>, you'<b>ll pass</b> the exam.",
            "say": "If you study, you'll pass the exam."
          }
        ],
        "mistakes": [
          {
            "wrong": "If you are late, he'll goes",
            "right": "If you are late, he'<b>ll go</b>",
            "why": "после will — базовая форма: go, без -s"
          },
          {
            "wrong": "When I will get home, I'll call",
            "right": "<b>When I get</b> home, I'll call",
            "why": "после when — настоящее, как и после if"
          }
        ],
        "mnemonic": "✅ will + базовая форма. После if/when — настоящее.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму после will.",
            "q": "If you are late, he'll ___.",
            "opts": [
              "goes",
              "go",
              "going"
            ],
            "answer": 1,
            "explain": "после will — базовая форма: <b>go</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму после when.",
            "q": "When I ___ home, I'll call you.",
            "opts": [
              "will get",
              "get",
              "got"
            ],
            "answer": 1,
            "explain": "после when — настоящее: <b>get</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Если будешь заниматься, сдашь экзамен»",
            "want": "If you study, you'll pass the exam",
            "answer": "If you study, you'll pass the exam"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том договариваются про вечер, но погода непонятная. Слушай условия с if и will.",
      "lines": [
        {
          "who": "A",
          "en": "Do you want to go to the park tonight?",
          "ru": "Хочешь пойти в парк сегодня вечером?"
        },
        {
          "who": "B",
          "en": "If the weather is good, I'll come.",
          "ru": "Если погода будет хорошая, я приду."
        },
        {
          "who": "A",
          "en": "And if it rains?",
          "ru": "А если пойдёт дождь?"
        },
        {
          "who": "B",
          "en": "If it rains, we'll watch a film at home.",
          "ru": "Если пойдёт дождь, посмотрим фильм дома."
        },
        {
          "who": "A",
          "en": "Great. I'll call you when I finish work.",
          "ru": "Отлично. Я позвоню, когда закончу работу."
        }
      ]
    },
    "vocab": {
      "intro": "Главные слова дня — для условий. Повтори вслух.",
      "items": [
        {
          "en": "if",
          "ru": "если",
          "ex": "If it rains…"
        },
        {
          "en": "will ('ll)",
          "ru": "будущее (… сделаю)",
          "ex": "I'll stay home."
        },
        {
          "en": "stay home",
          "ru": "остаться дома",
          "ex": "I'll stay home."
        },
        {
          "en": "rain",
          "ru": "идти (о дожде) / дождь",
          "ex": "It might rain."
        },
        {
          "en": "weather",
          "ru": "погода",
          "ex": "If the weather is good…"
        },
        {
          "en": "melt",
          "ru": "таять",
          "ex": "Ice melts."
        },
        {
          "en": "heat",
          "ru": "нагревать",
          "ex": "If you heat ice…"
        },
        {
          "en": "pass an exam",
          "ru": "сдать экзамен",
          "ex": "You'll pass the exam."
        },
        {
          "en": "when",
          "ru": "когда",
          "ex": "When I get home…"
        }
      ]
    },
    "drag": {
      "intro": "Соедини английское слово с переводом.",
      "pairs": [
        [
          "if",
          "если"
        ],
        [
          "will",
          "будущее (сделаю)"
        ],
        [
          "weather",
          "погода"
        ],
        [
          "when",
          "когда"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса про «если». Последний рывок недели!",
      "items": [
        {
          "q": "«Если пойдёт дождь, я останусь дома» —",
          "opts": [
            "If it will rain, I'll stay home",
            "If it rains, I'll stay home",
            "If it rains, I stay home"
          ],
          "answer": 1,
          "explain": "после if — настоящее (rains), результат — <b>will</b>."
        },
        {
          "q": "Выбери форму: «If you ___ me, I'll come.»",
          "opts": [
            "call",
            "will call",
            "called"
          ],
          "answer": 0,
          "explain": "после if — настоящее: <b>call</b>."
        },
        {
          "q": "«Если нагреть лёд, он тает» (факт) —",
          "opts": [
            "If you heat ice, it will melt",
            "If you heat ice, it melts",
            "If you will heat ice, it melts"
          ],
          "answer": 1,
          "explain": "факт → оба настоящих: heat … <b>melts</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек строит планы на разные «если». Везде условия.",
      "title": "If…",
      "sentences": [
        "Tomorrow is Saturday and I have big plans.",
        "If the weather is nice, I'll go to the beach.",
        "If it rains, I'll stay home and read.",
        "If my friends are free, we'll have lunch together.",
        "If I have enough money, I'll buy a new book.",
        "If I feel tired, I'll go to bed early.",
        "I know one thing for sure:",
        "if you relax, you feel happy.",
        "And if you smile, people smile back.",
        "I hope it will be a great day!"
      ],
      "translation": "Завтра суббота, и у меня большие планы. Если погода будет хорошая, я пойду на пляж. Если пойдёт дождь, останусь дома и почитаю. Если друзья будут свободны, пообедаем вместе. Если хватит денег, куплю новую книгу. Если устану, лягу спать пораньше. Одно я знаю точно: если расслабишься — чувствуешь себя счастливым. И если ты улыбаешься, люди улыбаются в ответ. Надеюсь, это будет отличный день!"
    },
    "essay": {
      "intro": "Построй свои планы на «если».",
      "prompt": "Напиши 3–5 предложений про завтра с условиями. Используй If + present, … I'll…",
      "hint": "Структуры: If the weather is good, I'll… ; If I have time, I'll… ; If it rains, I'll…",
      "example": "If the weather is good, I'll go for a walk. If I have time, I'll call my friend. If it rains, I'll stay home and watch a film. If I finish early, I'll cook dinner."
    },
    "picture": {
      "intro": "На картинке — тучи и зонт. Опиши планы на случай разной погоды.",
      "emoji": "🌧️☀️☂️",
      "prompt": "Опиши планы по погоде. Используй If it rains, I'll… / If it's sunny, I'll…",
      "hint": "Используй: If it rains, I'll stay home; If it's sunny, I'll go out.",
      "example": "If it rains, I'll stay home. If it's sunny, I'll go to the park. If it's cold, I'll wear a coat. I'll take my umbrella too.",
      "img": "img/a2/day-26.jpg",
      "credit": "Фото: BioDivLibrary · Public Domain · <a href=\"https://www.flickr.com/photos/61021753@N02/7629993166\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "27": {
    "day": 27,
    "week": "04",
    "level": "A2",
    "themeRu": "Раньше я",
    "themeEn": "used to",
    "intro": "Каким ты был(а) раньше — где жил(а), чем увлекался(ась), что любил(а)? Сегодня тёплая, человеческая тема: как рассказать, что <b>раньше</b> всё было иначе. Для этого в английском есть отличный оборот — <b>used to</b>. «Раньше я играл в футбол», «Раньше я жил в другом городе», «Раньше я был стеснительным» — всё это про привычки и состояния, которых больше нет. Одна форма — и ты звучишь по-настоящему по-английски. Начнём.",
    "introAudio": "Каким ты был раньше — где жил, чем увлекался, что любил? Сегодня тёплая, человеческая тема: как рассказать, что раньше всё было иначе. Для этого в английском есть отличный оборот — used to. Раньше я играл в футбол, раньше я жил в другом городе, раньше я был стеснительным — всё это про привычки и состояния, которых больше нет. Одна форма — и ты звучишь по-настоящему по-английски. Начнём.",
    "goals": [
      "понять идею used to: привычка или состояние в прошлом, которого больше нет",
      "строить фразу <b>used to + базовая форма</b>: I used to play, I used to live",
      "задавать вопрос и отрицание: Did you use to…? / I didn't use to…",
      "рассказать, чем твоя жизнь раньше отличалась от сегодняшней"
    ],
    "learned": [
      "Понял(а) идею used to: привычка или состояние в прошлом, которого больше нет",
      "Построил(а) фразу <b>used to + базовая форма</b>: I used to play, I used to live",
      "Задал(а) вопрос и построил(а) отрицание: Did you use to…? / I didn't use to…",
      "Рассказал(а), чем твоя жизнь раньше отличалась от сегодняшней"
    ],
    "review": {
      "intro": "Вчера мы строили планы с условием — first conditional: <b>if + настоящее, … will + базовая форма</b>. Вспомним перед стартом.",
      "introAudio": "Вчера мы строили планы с условием — first conditional: if плюс настоящее, will плюс базовая форма. Вспомним перед стартом.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери форму после if. После if — настоящее время.",
          "q": "If it ___ tomorrow, I'll stay at home.",
          "opts": [
            "will rain",
            "rains",
            "rained"
          ],
          "answer": 1,
          "explain": "После <b>if</b> — настоящее время (rains), а will идёт в другой части."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери условие. will во второй части.",
          "q": "Собери: «Если ты придёшь, я приготовлю ужин»",
          "want": "If you come I will cook dinner",
          "answer": "If you come I will cook dinner"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · used to",
        "title": "«Раньше я…» — <em>used to + базовая форма</em>",
        "paras": [
          "Когда что-то было привычным РАНЬШЕ, но сейчас этого уже нет, англичане говорят <b>used to</b> + базовая форма глагола. <b>I used to play football.</b> = Раньше я (регулярно) играл в футбол — а теперь нет.",
          "Это идеальный оборот для контраста «тогда ↔ сейчас». Он сразу сообщает: эта привычка осталась в прошлом. Форма одна для всех лиц: <b>I / you / he / she used to</b>…",
          "Читается слитно — «юзд ту». И запомни главное: после used to всегда стоит <b>базовая</b> форма (play, live, go), без -ed и без -s."
        ],
        "audio": "Когда что-то было привычным раньше, но сейчас этого уже нет, англичане говорят used to плюс базовая форма глагола. I used to play football — раньше я регулярно играл в футбол, а теперь нет. Форма одна для всех лиц. После used to всегда базовая форма: play, live, go.",
        "table": {
          "rows": [
            [
              "I used to play",
              "раньше я играл (а теперь нет)"
            ],
            [
              "She used to live here",
              "раньше она жила здесь"
            ],
            [
              "We used to go there",
              "раньше мы туда ходили"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Раньше я играл в футбол.",
            "en": "I <b>used to play</b> football.",
            "gloss": "привычка в прошлом",
            "say": "I used to play football."
          },
          {
            "ru": "Раньше она жила в Москве.",
            "en": "She <b>used to live</b> in Moscow.",
            "gloss": "used to + live",
            "say": "She used to live in Moscow."
          },
          {
            "ru": "Раньше мы много гуляли.",
            "en": "We <b>used to walk</b> a lot.",
            "say": "We used to walk a lot."
          },
          {
            "ru": "Раньше он курил.",
            "en": "He <b>used to smoke</b>.",
            "gloss": "а теперь бросил",
            "say": "He used to smoke."
          }
        ],
        "mistakes": [
          {
            "wrong": "I used to lived here",
            "right": "I <b>used to live</b> here",
            "why": "после used to — базовая форма (live), без -ed"
          },
          {
            "wrong": "I used to played football",
            "right": "I <b>used to play</b> football",
            "why": "play, а не played: used to уже показывает прошлое"
          }
        ],
        "mnemonic": "⏪ used to + базовая форма: I used to PLAY (не played) — «раньше, а теперь нет».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму после used to.",
            "q": "«Раньше я жил в деревне» —",
            "opts": [
              "I used to lived in a village",
              "I used to live in a village",
              "I use to live in a village"
            ],
            "answer": 1,
            "explain": "used to + базовая форма: <b>live</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Раньше она играла на пианино»",
            "want": "She used to play the piano",
            "answer": "She used to play the piano"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. football = футбол.",
            "q": "Раньше я играл в футбол.",
            "accept": [
              "i used to play football"
            ],
            "placeholder": "I used to ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · состояния",
        "title": "Не только привычки: <em>used to be, used to have</em>",
        "paras": [
          "used to годится не только для действий, но и для <b>состояний</b> — того, каким ты был или что у тебя было. <b>I used to be shy.</b> = Раньше я был стеснительным (а теперь нет).",
          "Очень частые: <b>used to be</b> (раньше был), <b>used to have</b> (раньше был / имел), <b>used to like</b> (раньше нравилось). <b>I used to have long hair.</b> = Раньше у меня были длинные волосы.",
          "Идея та же: было — и прошло. Это удобно, когда описываешь, как ты изменился: характер, внешность, вкусы."
        ],
        "audio": "used to годится не только для действий, но и для состояний — того, каким ты был или что у тебя было. I used to be shy — раньше я был стеснительным, а теперь нет. Очень частые: used to be, used to have, used to like. I used to have long hair — раньше у меня были длинные волосы.",
        "table": {
          "rows": [
            [
              "I used to be shy",
              "раньше я был стеснительным"
            ],
            [
              "I used to have long hair",
              "раньше у меня были длинные волосы"
            ],
            [
              "I used to like sweets",
              "раньше я любил сладкое"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Раньше я был очень стеснительным.",
            "en": "I <b>used to be</b> very shy.",
            "gloss": "used to be",
            "say": "I used to be very shy."
          },
          {
            "ru": "Раньше у меня была собака.",
            "en": "I <b>used to have</b> a dog.",
            "gloss": "used to have",
            "say": "I used to have a dog."
          },
          {
            "ru": "Раньше ей нравился чай, а теперь кофе.",
            "en": "She <b>used to like</b> tea, now she likes coffee.",
            "say": "She used to like tea, now she likes coffee."
          },
          {
            "ru": "Раньше этот город был маленьким.",
            "en": "This city <b>used to be</b> small.",
            "say": "This city used to be small."
          }
        ],
        "mistakes": [
          {
            "wrong": "I used to was shy",
            "right": "I <b>used to be</b> shy",
            "why": "после used to — базовая форма be, не was"
          }
        ],
        "mnemonic": "🪞 used to be / used to have — как ты изменился: I used to be shy, now I'm not.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму.",
            "q": "«Раньше у меня были длинные волосы» —",
            "opts": [
              "I used to had long hair",
              "I used to have long hair",
              "I used to has long hair"
            ],
            "answer": 1,
            "explain": "used to + базовая форма: <b>have</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. shy = стеснительный.",
            "q": "Раньше я был стеснительным.",
            "accept": [
              "i used to be shy"
            ],
            "placeholder": "I used to be ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · вопрос и отрицание",
        "title": "Did you <em>use to</em>…? и didn't <em>use to</em>",
        "paras": [
          "В вопросе и отрицании появляется наш старый знакомый <b>did/didn't</b> — а значит, used возвращается к базовой форме <b>use</b> (без -d). Это как с обычным прошедшим: did + базовая форма.",
          "Вопрос: <b>Did you use to play football?</b> = Раньше ты играл в футбол? Отрицание: <b>I didn't use to like coffee.</b> = Раньше я не любил кофе.",
          "Лови ловушку правописания: в вопросе и отрицании — <b>use to</b> (без -d), потому что прошлое уже «забрал» did. Не «did you used to»."
        ],
        "audio": "В вопросе и отрицании появляется did или didn't, а значит used возвращается к базовой форме use, без -d. Did you use to play football? Раньше ты играл в футбол? I didn't use to like coffee. Раньше я не любил кофе. В вопросе и отрицании — use to, без -d.",
        "table": {
          "rows": [
            [
              "Did you use to…?",
              "Раньше ты…?"
            ],
            [
              "I didn't use to…",
              "Раньше я не…"
            ],
            [
              "NOT: did you used to",
              "did уже показал прошлое"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Раньше ты играл в футбол?",
            "en": "<b>Did</b> you <b>use to</b> play football?",
            "gloss": "did + use to",
            "say": "Did you use to play football?"
          },
          {
            "ru": "Раньше я не любил кофе.",
            "en": "I <b>didn't use to</b> like coffee.",
            "gloss": "didn't + use to",
            "say": "I didn't use to like coffee."
          },
          {
            "ru": "Раньше она жила здесь?",
            "en": "Did she <b>use to</b> live here?",
            "say": "Did she use to live here?"
          },
          {
            "ru": "Раньше мы не были знакомы.",
            "en": "We <b>didn't use to</b> know each other.",
            "say": "We didn't use to know each other."
          }
        ],
        "mistakes": [
          {
            "wrong": "Did you used to smoke?",
            "right": "Did you <b>use to</b> smoke?",
            "why": "после did — базовая форма use (без -d)"
          },
          {
            "wrong": "I didn't used to like it",
            "right": "I <b>didn't use to</b> like it",
            "why": "didn't + use to, без -d"
          }
        ],
        "mnemonic": "❓ С did/didn't — use to (без -d): Did you USE to…? I didn't USE to…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вопрос.",
            "q": "Как спросить «Раньше ты жил в Лондоне?»",
            "opts": [
              "Did you used to live in London?",
              "Did you use to live in London?",
              "Do you used to live in London?"
            ],
            "answer": 1,
            "explain": "did + <b>use to</b> + базовая форма."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери отрицание.",
            "q": "Собери: «Раньше я не любил кофе»",
            "want": "I didn't use to like coffee",
            "answer": "I didn't use to like coffee"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · тогда и сейчас",
        "title": "Собираем контраст: <em>used to … but now</em>",
        "paras": [
          "Сила used to — в контрасте. Свяжи прошлое и настоящее словом <b>but now</b> (но теперь): <b>I used to live in a village, but now I live in a city.</b>",
          "Слева — used to + базовая форма (что было), справа — обычное настоящее время (что сейчас). Это самая естественная схема рассказа о переменах.",
          "Так ты можешь описать целую жизнь в двух строчках: каким был — каким стал. Раньше… а теперь…"
        ],
        "audio": "Сила used to — в контрасте. Свяжи прошлое и настоящее словом but now, но теперь. I used to live in a village, but now I live in a city. Слева used to плюс базовая форма, справа обычное настоящее время.",
        "table": {
          "rows": [
            [
              "I used to live here, but now…",
              "раньше жил, а теперь…"
            ],
            [
              "used to + базовая (что было)",
              "обычное настоящее (что сейчас)"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Раньше я жил в деревне, а теперь в городе.",
            "en": "I <b>used to live</b> in a village, <b>but now</b> I live in a city.",
            "say": "I used to live in a village, but now I live in a city."
          },
          {
            "ru": "Раньше она много работала, а теперь отдыхает.",
            "en": "She <b>used to work</b> a lot, but now she relaxes.",
            "say": "She used to work a lot, but now she relaxes."
          },
          {
            "ru": "Раньше я не говорил по-английски, а теперь говорю!",
            "en": "I <b>didn't use to</b> speak English, but now I do!",
            "say": "I didn't use to speak English, but now I do!"
          },
          {
            "ru": "Раньше у нас не было машины, а теперь есть.",
            "en": "We <b>didn't use to</b> have a car, but now we do.",
            "say": "We didn't use to have a car, but now we do."
          }
        ],
        "mistakes": [
          {
            "wrong": "…but now I used to live in a city",
            "right": "…but now I <b>live</b> in a city",
            "why": "«сейчас» → обычное настоящее; used to только для прошлого"
          }
        ],
        "mnemonic": "↔️ used to … but now …: каким был — каким стал.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму для «сейчас».",
            "q": "I used to smoke, but now I ___.",
            "opts": [
              "used to stop",
              "don't smoke",
              "didn't smoke"
            ],
            "answer": 1,
            "explain": "«сейчас» → обычное настоящее: <b>don't smoke</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери контраст.",
            "q": "Собери: «Раньше я жил в деревне, а теперь в городе»",
            "want": "I used to live in a village but now I live in a city",
            "answer": "I used to live in a village but now I live in a city"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси про себя. used to = «юзд ту».",
            "target": "I used to play football, but now I don't.",
            "sub": "Раньше я играл в футбол, а теперь нет.",
            "want": "used to"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том вспоминают детство — кто каким был раньше. Слушай used to в живой речи.",
      "lines": [
        {
          "who": "A",
          "en": "Did you use to play sports as a child?",
          "ru": "Ты в детстве занимался спортом?"
        },
        {
          "who": "B",
          "en": "Yes! I used to play football every day.",
          "ru": "Да! Раньше я каждый день играл в футбол."
        },
        {
          "who": "A",
          "en": "Really? I used to be very shy. I didn't use to talk much.",
          "ru": "Правда? А я был очень стеснительным. Раньше я мало разговаривал."
        },
        {
          "who": "B",
          "en": "You? But now you talk all the time!",
          "ru": "Ты? Но теперь ты болтаешь без умолку!"
        },
        {
          "who": "A",
          "en": "I know — people change!",
          "ru": "Знаю — люди меняются!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — про прошлое и перемены. Повтори вслух.",
      "items": [
        {
          "en": "used to",
          "ru": "раньше (привычно)",
          "ex": "I used to live here."
        },
        {
          "en": "shy",
          "ru": "стеснительный",
          "ex": "I used to be shy."
        },
        {
          "en": "as a child",
          "ru": "в детстве",
          "ex": "As a child, I used to play outside."
        },
        {
          "en": "any more / anymore",
          "ru": "больше (не)",
          "ex": "I don't play any more."
        },
        {
          "en": "these days",
          "ru": "в наши дни, сейчас",
          "ex": "These days I work a lot."
        },
        {
          "en": "change",
          "ru": "меняться / перемена",
          "ex": "People change."
        },
        {
          "en": "the same",
          "ru": "тот же, такой же",
          "ex": "It's not the same."
        },
        {
          "en": "village",
          "ru": "деревня",
          "ex": "I used to live in a village."
        },
        {
          "en": "grow up → grew up",
          "ru": "расти → вырос",
          "ex": "I grew up in a small town."
        }
      ]
    },
    "drag": {
      "intro": "Соедини английскую фразу с переводом.",
      "pairs": [
        [
          "I used to play",
          "раньше я играл"
        ],
        [
          "used to be",
          "раньше был"
        ],
        [
          "Did you use to…?",
          "Раньше ты…?"
        ],
        [
          "but now",
          "но теперь"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по used to — три вопроса, и день закрыт!",
      "items": [
        {
          "q": "«Раньше я жил в Лондоне» —",
          "opts": [
            "I used to lived in London",
            "I used to live in London",
            "I use to live in London"
          ],
          "answer": 1,
          "explain": "used to + базовая форма: <b>live</b>."
        },
        {
          "q": "Как спросить «Раньше ты курил?»",
          "opts": [
            "Did you used to smoke?",
            "Did you use to smoke?",
            "Do you use to smoke?"
          ],
          "answer": 1,
          "explain": "did + <b>use to</b> (без -d) + базовая форма."
        },
        {
          "q": "Что значит «I used to be shy»?",
          "opts": [
            "Я обычно стеснительный",
            "Раньше я был стеснительным",
            "Я хочу быть стеснительным"
          ],
          "answer": 1,
          "explain": "used to be — раньше был (а теперь нет)."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек вспоминает, как было раньше. Везде used to.",
      "title": "When I was younger",
      "sentences": [
        "When I was younger, my life was very different.",
        "I used to live in a small village.",
        "I used to walk to school every day.",
        "I didn't use to like vegetables.",
        "I used to be quite shy.",
        "My family used to have a big garden.",
        "We used to grow our own food.",
        "I didn't use to speak any English.",
        "But now I live in a city and study every day.",
        "People really do change!"
      ],
      "translation": "Когда я был младше, моя жизнь была совсем другой. Раньше я жил в маленькой деревне. Раньше я каждый день ходил в школу пешком. Раньше я не любил овощи. Я был довольно стеснительным. У моей семьи был большой сад. Мы сами выращивали еду. Раньше я совсем не говорил по-английски. А теперь я живу в городе и каждый день учусь. Люди и правда меняются!"
    },
    "essay": {
      "intro": "Расскажи, чем твоя жизнь раньше отличалась от сегодняшней.",
      "prompt": "Напиши 3–5 предложений о том, как было РАНЬШЕ. Используй used to: I used to…, I used to be…, but now…",
      "hint": "Структуры: I used to live… ; I used to be… ; I didn't use to… ; but now I…",
      "example": "I used to live in a small town. I used to be very shy. I didn't use to like coffee. But now I live in a big city and I love coffee!"
    },
    "picture": {
      "intro": "Опиши по картинке, как человек жил раньше.",
      "emoji": "👶🏡⏪",
      "prompt": "Опиши, как было раньше. Используй I used to… / I used to be…",
      "hint": "Используй: I used to be a child; I used to live in a small house; I used to play outside.",
      "example": "I used to be a small child. I used to live in a little house. I used to play outside all day.",
      "img": "img/a2/day-27.jpg",
      "credit": "Фото: Lomomograph · Public Domain · <a href=\"https://www.flickr.com/photos/66023318@N06/23706398035\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "28": {
    "day": 28,
    "week": "04",
    "level": "A2",
    "themeRu": "Который",
    "themeEn": "Relative clauses",
    "intro": "Пора научиться связывать две мысли в одну и говорить точнее. Во-первых, слово <b>«который»</b>: человек, <b>который</b> помогает; вещь, <b>которая</b> работает; место, <b>где</b> мы встретились. По-английски это <b>who</b>, <b>which</b>, <b>where</b>. Во-вторых — удобная тройка <b>something / anything / nothing</b> («что-то», «что-нибудь», «ничего»). С ними твоя речь сразу становится взрослее. Идём разбираться.",
    "introAudio": "Пора научиться связывать две мысли в одну и говорить точнее. Во-первых, слово который: человек, который помогает; вещь, которая работает; место, где мы встретились. По-английски это who, which, where. Во-вторых — удобная тройка something, anything, nothing: что-то, что-нибудь, ничего. С ними твоя речь сразу становится взрослее. Идём разбираться.",
    "goals": [
      "соединять две мысли словом «который»: <b>who</b> (люди), <b>which</b> (вещи), <b>where</b> (места)",
      "понять разницу: who — про людей, which — про вещи",
      "пользоваться словами <b>something / anything / nothing / everything</b>",
      "запомнить: в вопросе и отрицании — any-, а не some-"
    ],
    "learned": [
      "Соединил(а) две мысли словом «который»: <b>who</b> (люди), <b>which</b> (вещи), <b>where</b> (места)",
      "Понял(а) разницу: who — про людей, which — про вещи",
      "Воспользовался(лась) словами <b>something / anything / nothing / everything</b>",
      "Запомнил(а): в вопросе и отрицании — any-, а не some-"
    ],
    "review": {
      "intro": "Вчера мы говорили про прошлые привычки с <b>used to</b>: каким ты был раньше — и каким стал. Быстрая разминка.",
      "introAudio": "Вчера мы говорили про прошлые привычки с used to: каким ты был раньше и каким стал. Быстрая разминка.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери форму после used to.",
          "q": "«В детстве я играл на улице» —",
          "opts": [
            "I use to play outside",
            "I used to play outside",
            "I used to played outside"
          ],
          "answer": 1,
          "explain": "used to + базовая форма: <b>play</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери предложение.",
          "q": "Собери: «Раньше у меня были длинные волосы»",
          "want": "I used to have long hair",
          "answer": "I used to have long hair"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · who и which",
        "title": "«Который»: <em>who</em> для людей, <em>which</em> для вещей",
        "paras": [
          "Чтобы добавить к слову описание («человек, КОТОРЫЙ…»), англичане берут <b>who</b> для людей и <b>which</b> для вещей. <b>A doctor is a person who helps you.</b> = Врач — это человек, который помогает тебе.",
          "<b>which</b> — для предметов, животных, идей: <b>This is the book which changed my life.</b> = Это книга, которая изменила мою жизнь.",
          "Главное правило простое: живой человек → <b>who</b>, неживая вещь → <b>which</b>. (В разговоре часто можно сказать <b>that</b> вместо обоих — но who/which точнее.)"
        ],
        "audio": "Чтобы добавить к слову описание — человек, который — англичане берут who для людей и which для вещей. A doctor is a person who helps you. Врач — человек, который помогает тебе. which — для предметов: This is the book which changed my life. Живой человек — who, неживая вещь — which.",
        "table": {
          "rows": [
            [
              "a person who…",
              "человек, который… (люди)"
            ],
            [
              "a thing which…",
              "вещь, которая… (предметы)"
            ],
            [
              "who / which → that",
              "в разговоре часто that"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Это человек, который мне помог.",
            "en": "This is the man <b>who</b> helped me.",
            "gloss": "who — про людей",
            "say": "This is the man who helped me."
          },
          {
            "ru": "У меня есть друг, который живёт в Риме.",
            "en": "I have a friend <b>who</b> lives in Rome.",
            "say": "I have a friend who lives in Rome."
          },
          {
            "ru": "Это телефон, который я купил вчера.",
            "en": "This is the phone <b>which</b> I bought yesterday.",
            "gloss": "which — про вещи",
            "say": "This is the phone which I bought yesterday."
          },
          {
            "ru": "Мне нравятся фильмы, которые заставляют думать.",
            "en": "I like films <b>which</b> make you think.",
            "say": "I like films which make you think."
          }
        ],
        "mistakes": [
          {
            "wrong": "a person which helps you",
            "right": "a person <b>who</b> helps you",
            "why": "про человека — who, не which"
          },
          {
            "wrong": "the book who I read",
            "right": "the book <b>which</b> I read",
            "why": "про вещь — which, не who"
          }
        ],
        "mnemonic": "👤 who = люди (who = «кто»). 📦 which = вещи.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери who или which.",
            "q": "A teacher is a person ___ helps you learn.",
            "opts": [
              "which",
              "who",
              "where"
            ],
            "answer": 1,
            "explain": "про человека → <b>who</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери who или which.",
            "q": "This is the car ___ I bought.",
            "opts": [
              "who",
              "which",
              "where"
            ],
            "answer": 1,
            "explain": "про вещь (машину) → <b>which</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «У меня есть друг, который живёт в Риме»",
            "want": "I have a friend who lives in Rome",
            "answer": "I have a friend who lives in Rome"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · where",
        "title": "Место, <em>где</em>: <em>where</em>",
        "paras": [
          "Для мест есть отдельное слово — <b>where</b> (где). <b>This is the café where we met.</b> = Это кафе, где мы познакомились.",
          "where соединяет место и то, что там происходит: a city <b>where</b> I lived, the room <b>where</b> I work, the country <b>where</b> she was born.",
          "Не путай: <b>who</b> — люди, <b>which</b> — вещи, <b>where</b> — места. Три слова — и ты опишешь почти всё."
        ],
        "audio": "Для мест есть отдельное слово — where, где. This is the café where we met. Это кафе, где мы познакомились. where соединяет место и то, что там происходит: a city where I lived, the room where I work. who — люди, which — вещи, where — места.",
        "table": {
          "rows": [
            [
              "a place where…",
              "место, где…"
            ],
            [
              "the city where I live",
              "город, где я живу"
            ],
            [
              "the room where I work",
              "комната, где я работаю"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Это дом, где я вырос.",
            "en": "This is the house <b>where</b> I grew up.",
            "gloss": "where — про места",
            "say": "This is the house where I grew up."
          },
          {
            "ru": "Мне нравится кафе, где подают хороший кофе.",
            "en": "I like the café <b>where</b> they make good coffee.",
            "say": "I like the café where they make good coffee."
          },
          {
            "ru": "Это город, где мы познакомились.",
            "en": "This is the city <b>where</b> we met.",
            "say": "This is the city where we met."
          },
          {
            "ru": "Я помню место, где это случилось.",
            "en": "I remember the place <b>where</b> it happened.",
            "say": "I remember the place where it happened."
          }
        ],
        "mistakes": [
          {
            "wrong": "the city which I live",
            "right": "the city <b>where</b> I live",
            "why": "про место — where, не which"
          }
        ],
        "mnemonic": "📍 where = места: the place WHERE it happened.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери who, which или where.",
            "q": "This is the town ___ I was born.",
            "opts": [
              "who",
              "which",
              "where"
            ],
            "answer": 2,
            "explain": "про место (town) → <b>where</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. café = кафе, meet → met.",
            "q": "Это кафе, где мы познакомились.",
            "accept": [
              "this is the café where we met",
              "this is the cafe where we met"
            ],
            "placeholder": "This is the café ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · -thing",
        "title": "<em>something, anything, nothing, everything</em>",
        "paras": [
          "Эти четыре слова закрывают почти любую ситуацию с «что-то». <b>something</b> = что-то (в утверждении): <b>I have something for you.</b> <b>everything</b> = всё: <b>Everything is fine.</b>",
          "<b>nothing</b> = ничего (само по себе уже отрицание): <b>Nothing happened.</b> = Ничего не случилось. <b>anything</b> = что-нибудь / ничего — в вопросах и отрицаниях: <b>Is there anything?</b>",
          "Маленькая система: <b>some-</b> в утверждении, <b>any-</b> в вопросе/отрицании, <b>no-</b> само себе отрицание, <b>every-</b> = всё/все. Те же some/any, что ты знаешь с A1, только с хвостиком -thing."
        ],
        "audio": "Эти четыре слова закрывают почти любую ситуацию с что-то. something — что-то, в утверждении: I have something for you. everything — всё: Everything is fine. nothing — ничего, само по себе отрицание: Nothing happened. anything — что-нибудь, в вопросах и отрицаниях: Is there anything? some в утверждении, any в вопросе и отрицании, no само отрицание, every — всё.",
        "table": {
          "rows": [
            [
              "something",
              "что-то (в утверждении)"
            ],
            [
              "anything",
              "что-нибудь (вопрос/отрицание)"
            ],
            [
              "nothing",
              "ничего (само отрицание)"
            ],
            [
              "everything",
              "всё"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "У меня есть кое-что для тебя.",
            "en": "I have <b>something</b> for you.",
            "gloss": "утверждение → some-",
            "say": "I have something for you."
          },
          {
            "ru": "Тут есть что-нибудь поесть?",
            "en": "Is there <b>anything</b> to eat?",
            "gloss": "вопрос → any-",
            "say": "Is there anything to eat?"
          },
          {
            "ru": "Ничего не случилось.",
            "en": "<b>Nothing</b> happened.",
            "gloss": "nothing = уже «не»",
            "say": "Nothing happened."
          },
          {
            "ru": "Всё готово.",
            "en": "<b>Everything</b> is ready.",
            "gloss": "every- = всё",
            "say": "Everything is ready."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have anything for you",
            "right": "I have <b>something</b> for you",
            "why": "в утверждении — some-, не any-"
          }
        ],
        "mnemonic": "🧩 some- (утверждение) · any- (вопрос/отрицание) · no- (само «не») · every- (всё).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери слово для утверждения.",
            "q": "I have ___ to tell you.",
            "opts": [
              "anything",
              "something",
              "nothing"
            ],
            "answer": 1,
            "explain": "утверждение → <b>something</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный вариант.",
            "q": "«Ничего не случилось» —",
            "opts": [
              "Nothing happened",
              "Anything happened",
              "Something didn't happen"
            ],
            "answer": 0,
            "explain": "<b>Nothing</b> само по себе отрицание: ничего не случилось."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "В вопросе и отрицании — <em>anything</em>, и одно «не»",
        "paras": [
          "Здесь русский мешает дважды. Первое: в вопросах и отрицаниях — <b>any-</b>, не some-. <b>Is there anything?</b> = Тут есть что-нибудь? <b>I don't have anything.</b> = У меня ничего нет.",
          "Второе — двойное отрицание. По-русски мы говорим «я НЕ знаю НИЧЕГО» — два «не». В английском так нельзя: либо <b>I don't know anything</b> (don't + anything), либо <b>I know nothing</b> (одно nothing). Два отрицания вместе — ошибка.",
          "Запомни пару: <b>don't … anything</b> = <b>… nothing</b>. Один смысл, но отрицание ровно одно."
        ],
        "audio": "Здесь русский мешает дважды. Первое: в вопросах и отрицаниях — any, не some. Is there anything? I don't have anything. Второе — двойное отрицание. По-русски мы говорим я не знаю ничего, два не. В английском так нельзя: либо I don't know anything, либо I know nothing. Два отрицания вместе — ошибка.",
        "table": {
          "rows": [
            [
              "I don't have anything.",
              "У меня ничего нет."
            ],
            [
              "I have nothing.",
              "У меня ничего нет. (то же)"
            ],
            [
              "Is there anything?",
              "Тут есть что-нибудь?"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "У меня ничего нет.",
            "en": "I <b>don't</b> have <b>anything</b>.",
            "gloss": "don't + anything",
            "say": "I don't have anything."
          },
          {
            "ru": "У меня ничего нет. (по-другому)",
            "en": "I have <b>nothing</b>.",
            "gloss": "одно nothing",
            "say": "I have nothing."
          },
          {
            "ru": "Ты что-нибудь видел?",
            "en": "Did you see <b>anything</b>?",
            "gloss": "вопрос → any-",
            "say": "Did you see anything?"
          },
          {
            "ru": "Я ничего не сказал.",
            "en": "I <b>didn't</b> say <b>anything</b>.",
            "say": "I didn't say anything."
          }
        ],
        "mistakes": [
          {
            "wrong": "I don't have nothing",
            "right": "I don't have <b>anything</b>",
            "why": "одно отрицание: don't + anything (не два «не»)"
          },
          {
            "wrong": "Is there something to eat? (нейтральный вопрос)",
            "right": "Is there <b>anything</b> to eat?",
            "why": "в обычном вопросе — any-, не some-"
          }
        ],
        "mnemonic": "🚫 Одно «не»: don't + anything = nothing. Вопрос → anything.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верное отрицание.",
            "q": "«У меня ничего нет» —",
            "opts": [
              "I don't have nothing",
              "I don't have anything",
              "I have not nothing"
            ],
            "answer": 1,
            "explain": "одно отрицание: <b>don't + anything</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. see → saw.",
            "q": "Ты что-нибудь видел?",
            "accept": [
              "did you see anything"
            ],
            "placeholder": "Did you see ...?"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси вслух.",
            "target": "I don't have anything.",
            "sub": "У меня ничего нет.",
            "want": "anything"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня показывает Тому фото и описывает людей и места. Слушай who, which, where.",
      "lines": [
        {
          "who": "A",
          "en": "Look, this is the friend who helped me move.",
          "ru": "Смотри, это друг, который помог мне переехать."
        },
        {
          "who": "B",
          "en": "Nice! And what's this — the house where you live?",
          "ru": "Здорово! А это что — дом, где ты живёшь?"
        },
        {
          "who": "A",
          "en": "Yes! And this is the café which makes the best coffee.",
          "ru": "Да! А это кафе, которое делает лучший кофе."
        },
        {
          "who": "B",
          "en": "Is there anything you don't like about the city?",
          "ru": "Есть что-нибудь, что тебе не нравится в городе?"
        },
        {
          "who": "A",
          "en": "No, nothing! I love everything here.",
          "ru": "Нет, ничего! Мне здесь нравится всё."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — «который» и слова с -thing. Повтори вслух.",
      "items": [
        {
          "en": "who",
          "ru": "который (про людей)",
          "ex": "the man who called"
        },
        {
          "en": "which",
          "ru": "который (про вещи)",
          "ex": "the book which I read"
        },
        {
          "en": "where",
          "ru": "где (про места)",
          "ex": "the city where I live"
        },
        {
          "en": "something",
          "ru": "что-то",
          "ex": "I have something."
        },
        {
          "en": "anything",
          "ru": "что-нибудь / ничего",
          "ex": "Is there anything?"
        },
        {
          "en": "nothing",
          "ru": "ничего",
          "ex": "Nothing happened."
        },
        {
          "en": "everything",
          "ru": "всё",
          "ex": "Everything is fine."
        },
        {
          "en": "someone",
          "ru": "кто-то",
          "ex": "Someone called you."
        },
        {
          "en": "person",
          "ru": "человек",
          "ex": "a person who helps"
        }
      ]
    },
    "drag": {
      "intro": "Соедини английское слово с переводом.",
      "pairs": [
        [
          "who",
          "который (люди)"
        ],
        [
          "which",
          "который (вещи)"
        ],
        [
          "where",
          "где (места)"
        ],
        [
          "nothing",
          "ничего"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса, и день закрыт!",
      "items": [
        {
          "q": "A friend is a person ___ helps you.",
          "opts": [
            "which",
            "who",
            "where"
          ],
          "answer": 1,
          "explain": "про человека → <b>who</b>."
        },
        {
          "q": "This is the town ___ I was born.",
          "opts": [
            "who",
            "which",
            "where"
          ],
          "answer": 2,
          "explain": "про место → <b>where</b>."
        },
        {
          "q": "«У меня ничего нет» —",
          "opts": [
            "I don't have nothing",
            "I don't have anything",
            "I have anything"
          ],
          "answer": 1,
          "explain": "одно отрицание: <b>don't + anything</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек описывает любимое место и людей. Лови who, which, where.",
      "title": "My favourite place",
      "sentences": [
        "I want to tell you about a special place.",
        "It is a small café which is near my house.",
        "It is the place where I meet my friends.",
        "The woman who works there is very kind.",
        "She always makes coffee which tastes amazing.",
        "There is always something nice to eat.",
        "On Sundays there is nothing better than this café.",
        "I have a friend who comes with me every week.",
        "We talk about everything.",
        "It is a place where I feel happy."
      ],
      "translation": "Хочу рассказать тебе об особенном месте. Это маленькое кафе, которое рядом с моим домом. Это место, где я встречаюсь с друзьями. Женщина, которая там работает, очень добрая. Она всегда делает кофе, который потрясающий на вкус. Там всегда есть что-нибудь вкусное. По воскресеньям нет ничего лучше этого кафе. У меня есть друг, который ходит со мной каждую неделю. Мы говорим обо всём. Это место, где я чувствую себя счастливым."
    },
    "essay": {
      "intro": "Расскажи о человеке, который важен для тебя.",
      "prompt": "Напиши 3–5 предложений о важном человеке или месте. Используй who, which, where.",
      "hint": "Структуры: I have a friend who… ; This is the place where… ; It's a thing which…",
      "example": "I have a friend who always helps me. She is a person who never says no. We often go to a café where we talk for hours. There is nothing better than a good friend."
    },
    "picture": {
      "intro": "Опиши людей и место по картинке.",
      "emoji": "👩‍🏫📚🏫",
      "prompt": "Опиши, кто это и где. Используй a person who… / a place where…",
      "hint": "Используй: This is a teacher who helps students; This is the school where I study.",
      "example": "This is a teacher who helps students. She works in a school where I study. There is everything you need to learn.",
      "img": "img/a2/day-28.jpg",
      "credit": "Фото: david_shankbone · Public Domain · <a href=\"https://www.flickr.com/photos/27865228@N06/6199771628\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "29": {
    "day": 29,
    "week": "04",
    "level": "A2",
    "themeRu": "Поэтому",
    "themeEn": "Connectors & phrasal verbs",
    "intro": "Сегодня твоя речь станет плавной и взрослой. Во-первых — слова-связки: <b>because</b> (потому что), <b>so</b> (поэтому), <b>but</b> (но), <b>although</b> (хотя): с ними две короткие мысли сливаются в одну живую фразу. Во-вторых — <b>фразовые глаголы</b>: get up, look for, turn on — английский их обожает. И по пути, как всегда, мягко повторим артикли и предлоги. Поехали.",
    "introAudio": "Сегодня твоя речь станет плавной и взрослой. Во-первых — слова-связки: because, потому что, so, поэтому, but, но, although, хотя: с ними две короткие мысли сливаются в одну живую фразу. Во-вторых — фразовые глаголы: get up, look for, turn on — английский их обожает. И по пути, как всегда, мягко повторим артикли и предлоги. Поехали.",
    "goals": [
      "связывать причину и результат: <b>because</b> (потому что) и <b>so</b> (поэтому)",
      "показывать контраст: <b>but</b> (но) и <b>although</b> (хотя)",
      "понимать и использовать частые <b>phrasal verbs</b>: get up, look for, turn on/off",
      "не потерять артикли a/the и предлоги в живой речи"
    ],
    "learned": [
      "Связал(а) причину и результат: <b>because</b> (потому что) и <b>so</b> (поэтому)",
      "Показал(а) контраст: <b>but</b> (но) и <b>although</b> (хотя)",
      "Понял(а) и использовал(а) частые <b>phrasal verbs</b>: get up, look for, turn on/off",
      "Не потерял(а) артикли a/the и предлоги в живой речи"
    ],
    "review": {
      "intro": "Это последняя разминка недели — и особая. Завтра ты напишешь «Мою историю», а сегодня мы закрываем главу: собираем всю неделю 4 на одной странице. <b>Надо</b> и <b>совет</b>, <b>сколько</b> и <b>люблю делать</b>, <b>если</b>, <b>раньше я</b> и <b>который</b> — пройдём по каждой теме, как по закладкам. Не спеши: это твой смотр перед финалом.",
      "introAudio": "Это последняя разминка недели — и особая. Завтра ты напишешь свою историю, а сегодня мы закрываем главу: собираем всю неделю 4 на одной странице. Надо и совет, сколько и люблю делать, если, раньше я и который — пройдём по каждой теме, как по закладкам. Не спеши: это твой смотр перед финалом.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери верный предлог. Устойчивая связка listen ___ music.",
          "q": "I love to listen ___ music.",
          "opts": [
            "—",
            "to",
            "at"
          ],
          "answer": 1,
          "explain": "устойчиво: listen <b>to</b> music."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери форму. «Надо по обстоятельствам» — это have to.",
          "q": "«Завтра рано на работу, так что мне надо рано встать» —",
          "opts": [
            "I have to get up early",
            "I don't have to get up early",
            "I mustn't get up early"
          ],
          "answer": 0,
          "explain": "надо по обстоятельствам → <b>have to</b>. don't have to — «не обязан», mustn't — «нельзя»."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери совет. should + базовая форма.",
          "q": "Собери: «Тебе стоит сходить к врачу»",
          "want": "You should see a doctor",
          "answer": "You should see a doctor"
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши по-английски. Время — несчётное, поэтому «мало» = <b>a little</b> (не a few).",
          "q": "«У меня мало времени» —",
          "accept": [
            "i have a little time",
            "i have little time",
            "i've got a little time",
            "i've got little time",
            "i have very little time"
          ],
          "placeholder": "I have ..."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери форму глагола. После enjoy — какой «костюм»?",
          "q": "I enjoy ___ books in the evening.",
          "opts": [
            "to read",
            "reading",
            "read"
          ],
          "answer": 1,
          "explain": "после <b>enjoy</b> всегда -ing → <b>reading</b> (не «enjoy to read»)."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши по-английски. После <b>if</b> — настоящее время, не «if it will».",
          "q": "«Если пойдёт дождь, я останусь дома» —",
          "accept": [
            "if it rains i'll stay home",
            "if it rains i will stay home",
            "if it rains then i'll stay home",
            "if it rains then i will stay home",
            "if it rains i'll stay at home",
            "if it rains i will stay at home"
          ],
          "placeholder": "If it rains, ..."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу про прошлое. used to + базовая форма.",
          "q": "Собери: «Раньше я играл в футбол»",
          "want": "I used to play football",
          "answer": "I used to play football"
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери «который». who — про людей, which — про вещи, where — про места.",
          "q": "The book ___ I'm reading is about London.",
          "opts": [
            "who",
            "which",
            "where"
          ],
          "answer": 1,
          "explain": "book — это вещь → <b>which</b> (who — про людей, where — про места)."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери фразу. Здесь сразу два правила: have to (надо) и finish + -ing.",
          "q": "Собери: «Мне надо закончить читать эту главу»",
          "want": "I have to finish reading this chapter",
          "answer": "I have to finish reading this chapter"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · because и so",
        "title": "Причина и результат: <em>because</em> и <em>so</em>",
        "paras": [
          "<b>because</b> = потому что — после него идёт ПРИЧИНА. <b>I stayed home because I was tired.</b> = Я остался дома, потому что устал.",
          "<b>so</b> = поэтому / так что — после него идёт РЕЗУЛЬТАТ. <b>I was tired, so I stayed home.</b> = Я устал, поэтому остался дома.",
          "Одна и та же мысль, разный порядок: because ставит причину после, so ставит результат после. Выбирай, что хочешь подчеркнуть."
        ],
        "audio": "because — потому что, после него идёт причина. I stayed home because I was tired. so — поэтому, после него идёт результат. I was tired, so I stayed home. Одна мысль, разный порядок: because ставит причину после, so ставит результат после.",
        "table": {
          "rows": [
            [
              "… because + причина",
              "…, потому что …"
            ],
            [
              "…, so + результат",
              "…, поэтому …"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я опоздал, потому что проспал.",
            "en": "I was late <b>because</b> I overslept.",
            "gloss": "because + причина",
            "say": "I was late because I overslept."
          },
          {
            "ru": "Шёл дождь, поэтому мы остались дома.",
            "en": "It was raining, <b>so</b> we stayed home.",
            "gloss": "so + результат",
            "say": "It was raining, so we stayed home."
          },
          {
            "ru": "Я учу английский, потому что хочу путешествовать.",
            "en": "I study English <b>because</b> I want to travel.",
            "say": "I study English because I want to travel."
          },
          {
            "ru": "Я был голоден, поэтому приготовил ужин.",
            "en": "I was hungry, <b>so</b> I made dinner.",
            "say": "I was hungry, so I made dinner."
          }
        ],
        "mistakes": [
          {
            "wrong": "I was tired, because I stayed home",
            "right": "I was tired, <b>so</b> I stayed home",
            "why": "результат → so; because вводит причину, а не результат"
          }
        ],
        "mnemonic": "🔗 because = причина (почему?). so = результат (и поэтому…).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери because или so.",
            "q": "I was hungry, ___ I made a sandwich.",
            "opts": [
              "because",
              "so",
              "but"
            ],
            "answer": 1,
            "explain": "после идёт результат → <b>so</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери because или so.",
            "q": "I stayed home ___ I was ill.",
            "opts": [
              "because",
              "so",
              "although"
            ],
            "answer": 0,
            "explain": "после идёт причина → <b>because</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Я устал, поэтому остался дома»",
            "want": "I was tired so I stayed home",
            "answer": "I was tired so I stayed home"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · but и although",
        "title": "Контраст: <em>but</em> и <em>although</em>",
        "paras": [
          "<b>but</b> = но — соединяет две части ВНУТРИ предложения: <b>I was tired, but I went out.</b> = Я устал, но (всё равно) пошёл гулять.",
          "<b>although</b> = хотя — обычно стоит В НАЧАЛЕ и вводит целую часть: <b>Although I was tired, I went out.</b> Тот же смысл, другая «упаковка».",
          "Ловушка позиции: but стоит в середине и соединяет, although чаще открывает фразу. Нельзя «Although I was tired BUT I went out» — выбери что-то одно."
        ],
        "audio": "but — но, соединяет две части внутри предложения: I was tired, but I went out. although — хотя, обычно стоит в начале и вводит целую часть: Although I was tired, I went out. Тот же смысл. but в середине, although чаще открывает фразу. Нельзя использовать оба сразу.",
        "table": {
          "rows": [
            [
              "…, but …",
              "…, но … (в середине)"
            ],
            [
              "Although …, …",
              "Хотя …, … (в начале)"
            ],
            [
              "NOT: Although …, but …",
              "не оба сразу!"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Было холодно, но мы гуляли.",
            "en": "It was cold, <b>but</b> we went for a walk.",
            "gloss": "but — в середине",
            "say": "It was cold, but we went for a walk."
          },
          {
            "ru": "Хотя было холодно, мы гуляли.",
            "en": "<b>Although</b> it was cold, we went for a walk.",
            "gloss": "although — в начале",
            "say": "Although it was cold, we went for a walk."
          },
          {
            "ru": "Он богатый, но несчастливый.",
            "en": "He is rich, <b>but</b> he is not happy.",
            "say": "He is rich, but he is not happy."
          },
          {
            "ru": "Хотя он богатый, он несчастливый.",
            "en": "<b>Although</b> he is rich, he is not happy.",
            "say": "Although he is rich, he is not happy."
          }
        ],
        "mistakes": [
          {
            "wrong": "Although it was cold, but we went out",
            "right": "<b>Although</b> it was cold, we went out",
            "why": "не оба сразу: либо although, либо but"
          },
          {
            "wrong": "Although tired, I went out",
            "right": "<b>Although I was</b> tired, I went out",
            "why": "после although нужна целая часть с подлежащим и глаголом"
          }
        ],
        "mnemonic": "↪️ although открывает фразу, but соединяет в середине. Не вместе!",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери but или although.",
            "q": "___ it was raining, we played football.",
            "opts": [
              "But",
              "Although",
              "So"
            ],
            "answer": 1,
            "explain": "в начале фразы → <b>Although</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери связку.",
            "q": "I was tired, ___ I finished the work.",
            "opts": [
              "although",
              "but",
              "because"
            ],
            "answer": 1,
            "explain": "контраст в середине → <b>but</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение.",
            "q": "Собери: «Хотя было холодно, мы гуляли»",
            "want": "Although it was cold we went for a walk",
            "answer": "Although it was cold we went for a walk"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · phrasal verbs",
        "title": "Фразовые глаголы: <em>get up, look for, turn on</em>",
        "paras": [
          "В английском глагол + маленькое слово часто = новый смысл. Это <b>фразовые глаголы</b>. <b>get up</b> = вставать, <b>look for</b> = искать, <b>turn on/off</b> = включать/выключать, <b>find out</b> = узнавать, <b>look after</b> = заботиться.",
          "Важно: учи их <b>целиком</b>, как одно слово, а не по частям. look for — это не «смотреть для», а именно «искать». Перевод по отдельным словам тут не работает.",
          "Часто между частями можно вставить дополнение: <b>turn the light on</b> = turn on the light. Оба варианта верны."
        ],
        "audio": "В английском глагол плюс маленькое слово часто даёт новый смысл. Это фразовые глаголы. get up — вставать, look for — искать, turn on и turn off — включать и выключать, find out — узнавать, look after — заботиться. Учи их целиком, как одно слово. look for — это не смотреть для, а искать.",
        "table": {
          "rows": [
            [
              "get up",
              "вставать"
            ],
            [
              "look for",
              "искать"
            ],
            [
              "turn on / off",
              "включить / выключить"
            ],
            [
              "find out",
              "узнать"
            ],
            [
              "look after",
              "заботиться о"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я встаю в семь.",
            "en": "I <b>get up</b> at seven.",
            "gloss": "get up = вставать",
            "say": "I get up at seven."
          },
          {
            "ru": "Я ищу ключи.",
            "en": "I'm <b>looking for</b> my keys.",
            "gloss": "look for = искать",
            "say": "I am looking for my keys."
          },
          {
            "ru": "Включи свет, пожалуйста.",
            "en": "Please <b>turn on</b> the light.",
            "gloss": "turn on = включить",
            "say": "Please turn on the light."
          },
          {
            "ru": "Я узнал правду.",
            "en": "I <b>found out</b> the truth.",
            "gloss": "find out → found out",
            "say": "I found out the truth."
          },
          {
            "ru": "Она заботится о детях.",
            "en": "She <b>looks after</b> the children.",
            "gloss": "look after = заботиться",
            "say": "She looks after the children."
          }
        ],
        "mistakes": [
          {
            "wrong": "I look my keys",
            "right": "I <b>look for</b> my keys",
            "why": "искать — это look FOR, целиком; без for смысл теряется"
          },
          {
            "wrong": "Switch the light",
            "right": "<b>Turn on</b> the light",
            "why": "у каждого фразового глагола свой смысл — учи целиком"
          }
        ],
        "mnemonic": "🧱 Фразовый глагол — одно слово из двух: look for = искать (не «смотреть для»).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери фразовый глагол.",
            "q": "«Я ищу свой телефон» —",
            "opts": [
              "I look my phone",
              "I look for my phone",
              "I see for my phone"
            ],
            "answer": 1,
            "explain": "искать → <b>look for</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери значение.",
            "q": "Что значит «get up»?",
            "opts": [
              "вставать",
              "сдаваться",
              "получать"
            ],
            "answer": 0,
            "explain": "<b>get up</b> = вставать (с постели)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. turn on = включить.",
            "q": "Включи телевизор.",
            "accept": [
              "turn on the tv",
              "turn on the television",
              "turn the tv on"
            ],
            "placeholder": "Turn on ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · артикли и предлоги",
        "title": "Всегда на связи: <em>a / the</em> и предлоги",
        "paras": [
          "Маленькое, но вечное повторение. Артикли: <b>a</b> — когда вещь новая / одна из многих, <b>the</b> — когда уже понятно, о чём речь. <b>I saw a dog. The dog was big.</b>",
          "Предлоги живут в устойчивых связках — их учат вместе с глаголом: <b>listen to</b> music, <b>look for</b> keys, <b>depend on</b> you, <b>been to</b> London.",
          "Эти мелочи русский часто роняет (в русском нет артиклей, а предлоги другие). Поэтому возвращаемся к ним снова и снова — пока не станут автоматом."
        ],
        "audio": "Маленькое, но вечное повторение. Артикли: a — когда вещь новая, одна из многих, the — когда уже понятно, о чём речь. I saw a dog. The dog was big. Предлоги живут в устойчивых связках: listen to music, look for keys, depend on you, been to London. Возвращаемся к ним снова и снова.",
        "table": {
          "rows": [
            [
              "a dog → the dog",
              "новое → уже известное"
            ],
            [
              "listen to",
              "слушать (что-то)"
            ],
            [
              "look for / depend on",
              "искать / зависеть от"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я увидел собаку. Собака была большая.",
            "en": "I saw <b>a</b> dog. <b>The</b> dog was big.",
            "gloss": "a → the",
            "say": "I saw a dog. The dog was big."
          },
          {
            "ru": "Я слушаю музыку.",
            "en": "I listen <b>to</b> music.",
            "gloss": "listen to",
            "say": "I listen to music."
          },
          {
            "ru": "Это зависит от тебя.",
            "en": "It depends <b>on</b> you.",
            "gloss": "depend on",
            "say": "It depends on you."
          },
          {
            "ru": "Я был в Лондоне.",
            "en": "I have been <b>to</b> London.",
            "gloss": "been to",
            "say": "I have been to London."
          }
        ],
        "mistakes": [
          {
            "wrong": "I listen music",
            "right": "I listen <b>to</b> music",
            "why": "устойчиво: listen TO (предлог обязателен)"
          },
          {
            "wrong": "I saw the dog (впервые упоминаешь)",
            "right": "I saw <b>a</b> dog",
            "why": "новое, впервые → a; the — когда уже известно"
          }
        ],
        "mnemonic": "🔁 a (новое) → the (уже известное). listen TO, look FOR, depend ON.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери артикли.",
            "q": "I have ___ idea. ___ idea is great!",
            "opts": [
              "an / The",
              "the / A",
              "the / The"
            ],
            "answer": 0,
            "explain": "сначала новое → <b>a</b>, потом уже известное → <b>the</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери предлог.",
            "q": "It depends ___ the weather.",
            "opts": [
              "of",
              "on",
              "from"
            ],
            "answer": 1,
            "explain": "устойчиво: depend <b>on</b>."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Аня и Том собираются утром. Слушай связки и фразовые глаголы в деле.",
      "lines": [
        {
          "who": "A",
          "en": "I'm looking for my keys, but I can't find them!",
          "ru": "Я ищу ключи, но не могу найти!"
        },
        {
          "who": "B",
          "en": "Did you turn off the lights? Maybe they're in the kitchen.",
          "ru": "Ты выключила свет? Может, они на кухне."
        },
        {
          "who": "A",
          "en": "Found them! I was late because I got up at nine.",
          "ru": "Нашла! Я опоздала, потому что встала в девять."
        },
        {
          "who": "B",
          "en": "Although we're late, we still have time for coffee.",
          "ru": "Хотя мы опаздываем, на кофе время ещё есть."
        },
        {
          "who": "A",
          "en": "Great, so let's go!",
          "ru": "Отлично, тогда пошли!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — связки и фразовые глаголы. Повтори вслух.",
      "items": [
        {
          "en": "because",
          "ru": "потому что",
          "ex": "I'm tired because I worked."
        },
        {
          "en": "so",
          "ru": "поэтому, так что",
          "ex": "I was tired, so I slept."
        },
        {
          "en": "but",
          "ru": "но",
          "ex": "I'm tired, but happy."
        },
        {
          "en": "although",
          "ru": "хотя",
          "ex": "Although it's late, I'm awake."
        },
        {
          "en": "get up",
          "ru": "вставать",
          "ex": "I get up early."
        },
        {
          "en": "look for",
          "ru": "искать",
          "ex": "I look for my phone."
        },
        {
          "en": "turn on / off",
          "ru": "включить / выключить",
          "ex": "Turn off the TV."
        },
        {
          "en": "find out",
          "ru": "узнать",
          "ex": "I want to find out."
        },
        {
          "en": "look after",
          "ru": "заботиться о",
          "ex": "She looks after her cat."
        }
      ]
    },
    "drag": {
      "intro": "Соедини фразовый глагол с переводом.",
      "pairs": [
        [
          "get up",
          "вставать"
        ],
        [
          "look for",
          "искать"
        ],
        [
          "turn on",
          "включить"
        ],
        [
          "look after",
          "заботиться о"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — три вопроса, и день закрыт!",
      "items": [
        {
          "q": "I stayed home ___ it was raining.",
          "opts": [
            "so",
            "because",
            "although"
          ],
          "answer": 1,
          "explain": "после идёт причина → <b>because</b>."
        },
        {
          "q": "___ it was cold, we went out.",
          "opts": [
            "But",
            "So",
            "Although"
          ],
          "answer": 2,
          "explain": "в начале фразы, контраст → <b>Although</b>."
        },
        {
          "q": "Что значит «look for»?",
          "opts": [
            "смотреть на",
            "искать",
            "заботиться"
          ],
          "answer": 1,
          "explain": "<b>look for</b> = искать."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай про обычное утро. Лови связки и фразовые глаголы.",
      "title": "A busy morning",
      "sentences": [
        "I usually get up at seven.",
        "This morning I got up late because my alarm didn't ring.",
        "I was in a hurry, so I didn't have breakfast.",
        "I couldn't find my keys, so I looked for them everywhere.",
        "I found out that they were in my coat.",
        "Although I was late, I stayed calm.",
        "I turned off the lights and left the house.",
        "I take the bus to work every day.",
        "My neighbour looks after my cat when I'm away.",
        "It was a busy morning, but a good one."
      ],
      "translation": "Обычно я встаю в семь. Сегодня утром я встал поздно, потому что будильник не зазвонил. Я спешил, поэтому не позавтракал. Я не мог найти ключи, поэтому искал их везде. Я выяснил, что они в моём пальто. Хотя я опаздывал, я оставался спокойным. Я выключил свет и вышел из дома. Я каждый день езжу на работу на автобусе. Мой сосед заботится о моём коте, когда я в отъезде. Утро было суматошным, но хорошим."
    },
    "essay": {
      "intro": "Расскажи про своё утро — со связками и фразовыми глаголами.",
      "prompt": "Напиши 3–5 предложений про обычное утро. Используй because/so/but/although и фразовые глаголы (get up, look for, turn on).",
      "hint": "Структуры: I get up at… ; I was late because… ; …, so I… ; Although…, I…",
      "example": "I get up at seven because I start work early. I turn on the radio and make coffee. Although I'm often tired, I feel happy. I sometimes look for my keys, but I always find them!"
    },
    "picture": {
      "intro": "Опиши утро человека по картинке.",
      "emoji": "⏰🔑☕",
      "prompt": "Опиши утро. Используй get up / look for / turn on и because/so.",
      "hint": "Используй: He gets up early; He looks for his keys; He turns on the light because it's dark.",
      "example": "He gets up at seven. He turns on the light because it's dark. He looks for his keys, so he is a bit late. But he is happy.",
      "img": "img/a2/day-29.jpg",
      "credit": "Фото: Eric Seneca Kim · Public Domain · <a href=\"https://www.flickr.com/photos/77356818@N00/33396200581\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "30": {
    "day": 30,
    "week": "04",
    "level": "A2",
    "themeRu": "Моя история",
    "themeEn": "Your story",
    "intro": "Последняя страница A2 — ты дошёл(дошла) до неё, и это большое дело. Сегодня новой грамматики нет: сегодня ты соединяешь <b>всё</b> сразу и рассказываешь свою историю — что было раньше (прошлое), что ты повидал(а) в жизни (опыт, <b>I have…</b>), что задумал(а) дальше (будущее) и что обо всём этом думаешь (мнение). Это твой финальный проект. А за ним открывается уровень <b>B1</b>, где речь станет ещё свободнее. Но сначала — твоя история. Поехали.",
    "introAudio": "Последняя страница A2 — ты дошёл до неё, и это большое дело. Сегодня новой грамматики нет: сегодня ты соединяешь всё сразу и рассказываешь свою историю — что было раньше, что ты повидал в жизни, что задумал дальше и что обо всём этом думаешь. Это твой финальный проект. А за ним открывается уровень B1, где речь станет ещё свободнее. Но сначала — твоя история. Поехали.",
    "goals": [
      "собрать рассказ о себе из всех времён A2: прошлое, опыт, будущее",
      "уверенно переключаться между Past Simple и Present Perfect",
      "добавлять планы (going to / will) и мнение (because / so, should)",
      "написать и рассказать свою историю — твой финальный проект"
    ],
    "learned": [
      "Собрал(а) рассказ о себе из всех времён A2: прошлое, опыт, будущее",
      "Уверенно переключился(лась) между Past Simple и Present Perfect",
      "Добавил(а) планы (going to / will) и мнение (because / so, should)",
      "Написал(а) и рассказал(а) свою историю — финальный проект"
    ],
    "review": {
      "intro": "Праздничная разминка — всё лучшее за A2 в двух вопросах. Покажи, как далеко ты зашёл(зашла)!",
      "introAudio": "Праздничная разминка — всё лучшее за A2 в двух вопросах. Покажи, как далеко ты зашёл!",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери время. Есть конкретное «когда»?",
          "q": "«Я был в Париже в 2019» —",
          "opts": [
            "I have been to Paris in 2019",
            "I was in Paris in 2019",
            "I am in Paris in 2019"
          ],
          "answer": 1,
          "explain": "есть дата (in 2019) → <b>Past Simple: was</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери план на будущее.",
          "q": "Собери: «Я собираюсь учить B1»",
          "want": "I am going to study B1",
          "answer": "I am going to study B1"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Шаг 1 · твоё прошлое",
        "title": "Начни с прошлого: <em>Past Simple / Continuous</em>",
        "paras": [
          "Любая история начинается с прошлого. Бери Past Simple для фактов (<b>I was born…, I grew up…, I studied…</b>) и Past Continuous для фона (<b>While I was studying…</b>).",
          "Можно добавить used to для давних привычек: <b>When I was a child, I used to…</b> Это сразу делает рассказ тёплым и личным.",
          "Образец: <b>I was born in a small town. I grew up there with my family. When I was a child, I used to play in the street all day.</b>"
        ],
        "audio": "Любая история начинается с прошлого. Бери Past Simple для фактов: I was born, I grew up, I studied. И Past Continuous для фона: while I was studying. Можно добавить used to для давних привычек: when I was a child, I used to. Образец: I was born in a small town. I grew up there with my family. When I was a child, I used to play in the street all day.",
        "table": {
          "rows": [
            [
              "I was born in…",
              "Я родился в…"
            ],
            [
              "I grew up in…",
              "Я вырос в…"
            ],
            [
              "When I was a child, I used to…",
              "В детстве я (обычно)…"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я родился в маленьком городе.",
            "en": "I <b>was born</b> in a small town.",
            "gloss": "Past Simple",
            "say": "I was born in a small town."
          },
          {
            "ru": "Я вырос с двумя братьями.",
            "en": "I <b>grew up</b> with two brothers.",
            "gloss": "grow up → grew up",
            "say": "I grew up with two brothers."
          },
          {
            "ru": "В детстве я часто играл на улице.",
            "en": "When I was a child, I <b>used to play</b> outside.",
            "say": "When I was a child, I used to play outside."
          },
          {
            "ru": "Пока я учился, я работал в кафе.",
            "en": "While I <b>was studying</b>, I worked in a café.",
            "gloss": "Past Continuous + Simple",
            "say": "While I was studying, I worked in a café."
          }
        ],
        "mistakes": [
          {
            "wrong": "I am born in 1990",
            "right": "I <b>was born</b> in 1990",
            "why": "родился — это прошлое: was born"
          }
        ],
        "mnemonic": "🌱 Начало истории — прошлое: I was born…, I grew up…, I used to…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму.",
            "q": "«Я родился в 1995» —",
            "opts": [
              "I am born in 1995",
              "I was born in 1995",
              "I have been born in 1995"
            ],
            "answer": 1,
            "explain": "родился → <b>was born</b> (Past Simple)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши начало своей истории. grow up → grew up.",
            "q": "Я вырос в маленьком городе.",
            "accept": [
              "i grew up in a small town"
            ],
            "placeholder": "I grew up in ..."
          }
        ]
      },
      {
        "eyebrow": "Шаг 2 · твой опыт",
        "title": "Что ты повидал(а): <em>I have…</em>",
        "paras": [
          "Теперь — опыт за всю жизнь, твоё «за плечами». Это Present Perfect: <b>I have been to…, I have seen…, I have learned…, I have never…</b> Здесь не важна дата — важен сам факт опыта.",
          "Мягкое напоминание (последнее за A2!): если называешь КОГДА (in 2019, last year) — это уже Past Simple. Без даты, про опыт вообще — Present Perfect. <b>I have been to Italy.</b> но <b>I was in Italy in 2019.</b>",
          "Образец: <b>I have learned a lot in my life. I have been to three countries. I have made good friends. But I have never given up.</b>"
        ],
        "audio": "Теперь — опыт за всю жизнь, твоё за плечами. Это Present Perfect: I have been to, I have seen, I have learned, I have never. Здесь не важна дата — важен сам факт опыта. Мягкое напоминание: если называешь когда, in 2019, last year — это уже Past Simple. Без даты, про опыт вообще — Present Perfect. I have been to Italy, но I was in Italy in 2019.",
        "table": {
          "rows": [
            [
              "I have been to…",
              "Я бывал в… (опыт)"
            ],
            [
              "I have learned…",
              "Я научился…"
            ],
            [
              "I was there in 2019",
              "Я был там в 2019 (дата → Past)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Я многому научился в жизни.",
            "en": "I <b>have learned</b> a lot in my life.",
            "gloss": "Present Perfect — опыт",
            "say": "I have learned a lot in my life."
          },
          {
            "ru": "Я бывал в трёх странах.",
            "en": "I <b>have been to</b> three countries.",
            "gloss": "опыт, без даты",
            "say": "I have been to three countries."
          },
          {
            "ru": "Я никогда не сдавался.",
            "en": "I <b>have never given up</b>.",
            "say": "I have never given up."
          },
          {
            "ru": "Я начал учить английский в прошлом году.",
            "en": "I <b>started</b> English last year.",
            "gloss": "есть дата → Past Simple",
            "say": "I started English last year."
          }
        ],
        "mistakes": [
          {
            "wrong": "I have started English last year",
            "right": "I <b>started</b> English last year",
            "why": "есть дата (last year) → Past Simple, не Present Perfect"
          }
        ],
        "mnemonic": "🎒 Опыт без даты → have… С датой → was/did. I have been to Italy / I was there in 2019.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> опыт без даты.",
            "q": "«Я (вообще) бывал в Японии» —",
            "opts": [
              "I was in Japan",
              "I have been to Japan",
              "I am in Japan"
            ],
            "answer": 1,
            "explain": "опыт без даты → <b>have been to</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> есть ли дата?",
            "q": "«Я начал учиться в 2020» —",
            "opts": [
              "I have started in 2020",
              "I started in 2020",
              "I start in 2020"
            ],
            "answer": 1,
            "explain": "есть дата (2020) → <b>Past Simple: started</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу про опыт.",
            "q": "Собери: «Я многому научился»",
            "want": "I have learned a lot",
            "answer": "I have learned a lot"
          }
        ]
      },
      {
        "eyebrow": "Шаг 3 · твои планы",
        "title": "Что дальше: <em>going to</em> и <em>will</em>",
        "paras": [
          "История смотрит вперёд. Планы, которые ты уже решил, — <b>be going to</b>: <b>I am going to learn B1.</b> Решения и обещания прямо сейчас — <b>will</b>: <b>I will keep going.</b>",
          "Обе формы берут <b>базовую</b> форму глагола: going to <b>learn</b>, will <b>keep</b> — без -s и без -ed.",
          "Образец: <b>Next, I am going to study B1. I am going to read more books in English. And one day I will speak fluently!</b>"
        ],
        "audio": "История смотрит вперёд. Планы, которые ты уже решил — be going to: I am going to learn B1. Решения и обещания прямо сейчас — will: I will keep going. Обе формы берут базовую форму глагола. Образец: Next, I am going to study B1. I am going to read more books in English. And one day I will speak fluently!",
        "table": {
          "rows": [
            [
              "I am going to…",
              "Я собираюсь… (план)"
            ],
            [
              "I will…",
              "Я буду / решу… (сейчас)"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я собираюсь учить B1.",
            "en": "I <b>am going to</b> study B1.",
            "gloss": "план → going to",
            "say": "I am going to study B1."
          },
          {
            "ru": "Я буду читать больше книг.",
            "en": "I <b>will</b> read more books.",
            "gloss": "обещание → will",
            "say": "I will read more books."
          },
          {
            "ru": "Я собираюсь больше путешествовать.",
            "en": "I <b>am going to</b> travel more.",
            "say": "I am going to travel more."
          },
          {
            "ru": "Однажды я буду говорить свободно!",
            "en": "One day I <b>will</b> speak fluently!",
            "say": "One day I will speak fluently!"
          }
        ],
        "mistakes": [
          {
            "wrong": "I will to study B1",
            "right": "I <b>will study</b> B1",
            "why": "will + базовая форма, без to"
          }
        ],
        "mnemonic": "🚀 План → going to. Решение сейчас → will. Оба + базовая форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму плана.",
            "q": "«Я собираюсь учить B1» —",
            "opts": [
              "I going to study B1",
              "I am going to study B1",
              "I will to study B1"
            ],
            "answer": 1,
            "explain": "be going to: <b>am going to study</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши своё обещание. will + базовая форма.",
            "q": "Я буду заниматься каждый день.",
            "accept": [
              "i will study every day",
              "i will practise every day",
              "i will practice every day"
            ],
            "placeholder": "I will ..."
          }
        ]
      },
      {
        "eyebrow": "Шаг 4 · твоё мнение",
        "title": "Что ты думаешь: <em>because / so, should</em>",
        "paras": [
          "Хорошая история не только рассказывает — она делится мнением. Скажи, что думаешь, и объясни почему: <b>I think English is useful because I can talk to people.</b>",
          "Свяжи мысли: <b>so</b> (поэтому) для результата, <b>should</b> для совета другим: <b>Learning a language is hard, so you should practise every day.</b>",
          "Образец: <b>I think this course was great. I have learned so much, so I feel proud. If you want to learn English, you should never give up!</b>"
        ],
        "audio": "Хорошая история не только рассказывает — она делится мнением. Скажи, что думаешь, и объясни почему: I think English is useful because I can talk to people. Свяжи мысли: so для результата, should для совета: Learning a language is hard, so you should practise every day. Образец: I think this course was great. I have learned so much, so I feel proud. If you want to learn English, you should never give up!",
        "table": {
          "rows": [
            [
              "I think… because…",
              "Я думаю… потому что…"
            ],
            [
              "…, so…",
              "…, поэтому…"
            ],
            [
              "You should…",
              "Тебе стоит…"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я думаю, английский полезен, потому что я могу путешествовать.",
            "en": "I <b>think</b> English is useful <b>because</b> I can travel.",
            "gloss": "мнение + причина",
            "say": "I think English is useful because I can travel."
          },
          {
            "ru": "Я много занимался, поэтому горжусь собой.",
            "en": "I studied a lot, <b>so</b> I'm proud of myself.",
            "gloss": "so — результат",
            "say": "I studied a lot, so I am proud of myself."
          },
          {
            "ru": "Тебе стоит заниматься каждый день.",
            "en": "You <b>should</b> practise every day.",
            "gloss": "should — совет",
            "say": "You should practise every day."
          },
          {
            "ru": "Никогда не сдавайся!",
            "en": "You <b>should</b> never give up!",
            "say": "You should never give up!"
          }
        ],
        "mistakes": [
          {
            "wrong": "You should to practise",
            "right": "You <b>should practise</b>",
            "why": "should + базовая форма, без to"
          }
        ],
        "mnemonic": "💭 Мнение: I think… because… So… You should… (совет без to).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери совет.",
            "q": "«Тебе стоит заниматься каждый день» —",
            "opts": [
              "You should to practise every day",
              "You should practise every day",
              "You should practising every day"
            ],
            "answer": 1,
            "explain": "should + базовая форма: <b>practise</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери мнение с причиной.",
            "q": "Собери: «Я думаю, английский полезен, потому что я могу путешествовать»",
            "want": "I think English is useful because I can travel",
            "answer": "I think English is useful because I can travel"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси с гордостью — это про тебя!",
            "target": "I have finished A2, and I will keep going!",
            "sub": "Я закончил A2 и буду продолжать!",
            "want": "finished"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Финальная сценка — Мира поздравляет тебя с концом A2. Слушай и улыбнись: это про тебя.",
      "lines": [
        {
          "who": "A",
          "en": "Congratulations! You have finished the whole A2 level!",
          "ru": "Поздравляю! Ты закончил весь уровень A2!"
        },
        {
          "who": "B",
          "en": "Thank you, Mira! I have learned so much.",
          "ru": "Спасибо, Мира! Я так многому научился."
        },
        {
          "who": "A",
          "en": "You used to know just a few words. Now you tell your story!",
          "ru": "Раньше ты знал лишь пару слов. А теперь рассказываешь свою историю!"
        },
        {
          "who": "B",
          "en": "I'm going to start B1 next. I won't stop here!",
          "ru": "Дальше я собираюсь начать B1. Я на этом не остановлюсь!"
        },
        {
          "who": "A",
          "en": "That's the spirit. I'm proud of you. See you at B1!",
          "ru": "Вот это настрой. Я горжусь тобой. Увидимся на B1!"
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — для рассказа о себе и о пути. Повтори вслух.",
      "items": [
        {
          "en": "I was born",
          "ru": "я родился",
          "ex": "I was born in 1990."
        },
        {
          "en": "grow up → grew up",
          "ru": "расти → вырос",
          "ex": "I grew up in a village."
        },
        {
          "en": "experience",
          "ru": "опыт",
          "ex": "I have a lot of experience."
        },
        {
          "en": "in the past",
          "ru": "в прошлом",
          "ex": "In the past, I was shy."
        },
        {
          "en": "these days",
          "ru": "в наши дни, сейчас",
          "ex": "These days I speak English."
        },
        {
          "en": "plan",
          "ru": "план / планировать",
          "ex": "I have a plan."
        },
        {
          "en": "dream",
          "ru": "мечта / мечтать",
          "ex": "My dream is to travel."
        },
        {
          "en": "proud",
          "ru": "гордый",
          "ex": "I'm proud of myself."
        },
        {
          "en": "keep going",
          "ru": "продолжать",
          "ex": "I will keep going."
        }
      ]
    },
    "drag": {
      "intro": "Соедини начало фразы с переводом — это кирпичики твоей истории.",
      "pairs": [
        [
          "I was born",
          "я родился"
        ],
        [
          "I have been to",
          "я бывал в"
        ],
        [
          "I am going to",
          "я собираюсь"
        ],
        [
          "I think",
          "я думаю"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка всего A2 — три вопроса, и уровень покорён! 🏆",
      "items": [
        {
          "q": "«Я бывал в Италии» (опыт, без даты) —",
          "opts": [
            "I was in Italy",
            "I have been to Italy",
            "I go to Italy"
          ],
          "answer": 1,
          "explain": "опыт без даты → <b>have been to</b> (Present Perfect)."
        },
        {
          "q": "«Я собираюсь учить B1» —",
          "opts": [
            "I going to study B1",
            "I am going to study B1",
            "I will to study B1"
          ],
          "answer": 1,
          "explain": "план → <b>am going to study</b>."
        },
        {
          "q": "«Тебе стоит заниматься каждый день» —",
          "opts": [
            "You should practise every day",
            "You should to practise every day",
            "You shoulding practise"
          ],
          "answer": 0,
          "explain": "should + базовая форма: <b>practise</b>."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай образец «моей истории» — все времена A2 вместе. Потом напишешь свою.",
      "title": "My story",
      "sentences": [
        "My name is Anna, and this is my story.",
        "I was born in a small town in Russia.",
        "When I was a child, I used to dream about other countries.",
        "I have studied English for two years.",
        "I have been to two countries, and I have made new friends.",
        "Last summer I travelled to Italy and saw the sea.",
        "These days I practise English every day.",
        "Next year I am going to study at the B1 level.",
        "I think languages are wonderful because they open the world.",
        "I have finished A2, and I will never stop learning!"
      ],
      "translation": "Меня зовут Анна, и это моя история. Я родилась в маленьком городе в России. В детстве я мечтала о других странах. Я учу английский уже два года. Я побывала в двух странах и завела новых друзей. Прошлым летом я съездила в Италию и увидела море. Сейчас я каждый день практикую английский. В следующем году я собираюсь учиться на уровне B1. Я думаю, языки — это прекрасно, потому что они открывают мир. Я закончила A2 и никогда не перестану учиться!"
    },
    "essay": {
      "intro": "Это главное задание курса — расскажи СВОЮ историю. Не торопись, это про тебя.",
      "prompt": "Напиши свою историю в 6–10 предложениях: прошлое (I was born…, I used to…), опыт (I have been to…, I have learned…), планы (I am going to…, I will…) и мнение (I think… because…). Это твой финальный проект A2!",
      "hint": "Структура по шагам: 1) кто ты и откуда (I was born…); 2) что было раньше (I used to…); 3) что повидал(а) (I have been to…, I have learned…); 4) планы (I am going to…); 5) мнение (I think… because…).",
      "example": "My name is Marina, and this is my story. I was born in a small town. When I was a child, I used to be very shy. I have studied English for a year, and I have learned a lot. I have been to Turkey, but I have never been to England. Next year I am going to travel more. I think English is important because it connects people. I have finished A2, so I am proud — and I will keep going!"
    },
    "picture": {
      "intro": "Финальная картинка — твой путь. Опиши его и расскажи свою историю.",
      "emoji": "🌍📖🏆🚀",
      "prompt": "Посмотри на путь: книга, мир, награда, ракета. Расскажи свою историю ученика — где начал(а), что повидал(а), куда идёшь. Используй все времена A2.",
      "hint": "Используй: I started with a book; I have learned a lot; I have been to new places; I am going to continue; I will reach B1!",
      "example": "I started this journey with one book. I have learned so much, and I have seen a new world of words. Although it was hard, I never gave up. Now I am going to start B1, and one day I will speak English freely!",
      "img": "img/a2/day-30.jpg",
      "credit": "Фото: USDAgov · Public Domain · <a href=\"https://www.flickr.com/photos/41284017@N08/32123431473\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  }
};
