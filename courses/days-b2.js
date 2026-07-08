/* ЗЕРКАЛО · MIRROR — English B2 content (days 1–30, level B2).
   Same "Day" schema as A1/A2 (see docs/CONTENT-MODEL.md). Global object name `DAYS`
   so the B2 renderer (en-b2.html) reuses the shared engine unchanged.
   Built from COURSE-PLAN-B2.md by parallel authoring agents, then assembled + validated. */
const DAYS = {
  "1": {
    "day": 1,
    "week": "01",
    "level": "B2",
    "themeRu": "Рассказ во времени",
    "themeEn": "Narrative tenses",
    "intro": "Привет! Это первый день уровня <b>B2</b> — и всю неделю мы будем «закрывать прошлое профессионально». Начнём с того, что превращает набор отдельных фактов в настоящий рассказ. На A2 ты свободно говоришь <b>I went, I saw</b>, а на B1 уже умеешь отматывать «прошлое до прошлого» — <b>Past Perfect</b> (had done). Сегодня мы соберём три времени в одну систему: <b>Past Simple</b> ведёт сюжет вперёд (что случилось дальше), <b>Past Continuous</b> рисует фон (что в этот момент длилось), а <b>Past Perfect</b> уходит назад (что случилось ещё раньше). Русский вид — совершенный и несовершенный — кое в чём помогает, но это <u>не то же самое</u>, что английская система времён, и именно об эту разницу спотыкаются почти все. Давай разложим рассказ по слоям.",
    "introAudio": "Привет! Это первый день уровня B2, и всю неделю мы будем закрывать прошлое профессионально. Начнём с того, что превращает набор отдельных фактов в настоящий рассказ. На A2 ты свободно говоришь I went, I saw, а на B1 уже умеешь отматывать прошлое до прошлого — Past Perfect, had done. Сегодня мы соберём три времени в одну систему: Past Simple ведёт сюжет вперёд, Past Continuous рисует фон, а Past Perfect уходит назад, к тому, что случилось ещё раньше. Русский вид кое в чём помогает, но это не то же самое, что английская система времён. Давай разложим рассказ по слоям.",
    "goals": [
      "видеть рассказ как три слоя: события (Past Simple), фон (Past Continuous), предыстория (Past Perfect)",
      "выбирать was/were doing для фона и длящегося действия, а did — для законченного шага сюжета",
      "ставить более раннее событие в Past Perfect там, где по-русски всё в одном прошедшем",
      "не путать русский вид (совершенный/несовершенный) с английской системой времён"
    ],
    "learned": [
      "Увидел(а) рассказ как три слоя: события (Past Simple), фон (Past Continuous), предыстория (Past Perfect)",
      "Научился(лась) выбирать was/were doing для фона и длящегося действия, а did — для законченного шага сюжета",
      "Научился(лась) ставить более раннее событие в Past Perfect там, где по-русски всё в одном прошедшем",
      "Перестал(а) путать русский вид (совершенный/несовершенный) с английской системой времён"
    ],
    "review": {
      "intro": "Сначала — короткая разминка по самому полезному из B1 и по «вечным» вещам, которые мы прогреваем каждое утро: Past Perfect, неправильные глаголы и артикли. Всё это сегодня соберётся в один рассказ.",
      "introAudio": "Сначала короткая разминка по самому полезному из B1 и по вечным вещам, которые мы прогреваем каждое утро: Past Perfect, неправильные глаголы и артикли. Всё это сегодня соберётся в один рассказ.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни Past Perfect из B1 — что случилось РАНЬШЕ другого прошлого.",
          "q": "«Когда я добрался до вокзала, поезд уже ушёл» —",
          "opts": [
            "When I got to the station, the train already left",
            "When I got to the station, the train had already left",
            "When I got to the station, the train has already left"
          ],
          "answer": 1,
          "explain": "Поезд ушёл ДО моего прихода → раннее событие в Past Perfect: <b>had already left</b>."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши третью форму (past participle) неправильного глагола — она же нужна для Past Perfect.",
          "q": "Третья форма глагола break (ломать)?",
          "accept": [
            "broken"
          ],
          "placeholder": "break → broke → ..."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> артикли — наш «вечный» повтор. Первое упоминание vs уже известное.",
          "q": "A man came in. ___ man looked nervous.",
          "opts": [
            "A",
            "The",
            "—"
          ],
          "answer": 1,
          "explain": "Второй раз про того же человека → определённый артикль: <b>The man</b>."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · три слоя",
        "title": "Три времени — одна история",
        "paras": [
          "Любой устный или письменный рассказ о прошлом держится на трёх слоях. <b>Past Simple</b> (did) — это «скелет» сюжета: цепочка законченных событий, которые двигают историю вперёд. <b>I woke up, got dressed and left.</b>",
          "<b>Past Continuous</b> (was/were + -ing) — это фон, декорации: что уже длилось, когда случилось событие. <b>The sun was shining and birds were singing.</b> Длительное действие готовит сцену для законченного.",
          "<b>Past Perfect</b> (had + 3-я форма) — это предыстория: то, что произошло <u>ещё раньше</u> главных событий. <b>I was tired because I hadn't slept.</b> Три слоя вместе и дают объёмный, «взрослый» рассказ."
        ],
        "audio": "Любой рассказ о прошлом держится на трёх слоях. Past Simple, did, это скелет сюжета: цепочка законченных событий. I woke up, got dressed and left. Past Continuous, was или were плюс -ing, это фон: что уже длилось, когда случилось событие. The sun was shining and birds were singing. Past Perfect, had плюс третья форма, это предыстория: то, что произошло ещё раньше. I was tired because I hadn't slept.",
        "table": {
          "rows": [
            [
              "Past Simple — did",
              "событие, шаг сюжета (got, left, saw)"
            ],
            [
              "Past Continuous — was/were doing",
              "фон, длящееся действие (was raining)"
            ],
            [
              "Past Perfect — had done",
              "предыстория, что было ещё раньше (had left)"
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
            "ru": "Она была без сил, потому что проработала всю ночь.",
            "en": "She was exhausted because she <b>had worked</b> all night.",
            "gloss": "предыстория → Past Perfect",
            "say": "She was exhausted because she had worked all night."
          },
          {
            "ru": "Я готовил ужин, когда зазвонил телефон.",
            "en": "I <b>was cooking</b> dinner when the phone <b>rang</b>.",
            "gloss": "фон прерван событием",
            "say": "I was cooking dinner when the phone rang."
          }
        ],
        "mistakes": [
          {
            "wrong": "The sun shined and I left",
            "right": "The sun <b>was shining</b> when I left",
            "why": "фон, который уже длился, — Past Continuous, а не Past Simple"
          },
          {
            "wrong": "I was tired because I didn't sleep well, then I woke",
            "right": "I was tired because I <b>hadn't slept</b> well",
            "why": "причина-предыстория случилась раньше → Past Perfect"
          }
        ],
        "mnemonic": "🎬 Три слоя кино: фон (was doing) · событие (did) · флешбэк (had done).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> определи слой — что здесь фон, а что событие.",
            "q": "I ___ TV when the lights ___ out.",
            "opts": [
              "watched … were going",
              "was watching … went",
              "had watched … went"
            ],
            "answer": 1,
            "explain": "Просмотр уже длился (фон) → was watching; свет погас (событие) → went."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение с фоном и событием.",
            "q": "Собери: «Шёл снег, когда мы прибыли»",
            "want": "It was snowing when we arrived",
            "answer": "It was snowing when we arrived"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши Past Perfect-причину. sleep → slept.",
            "q": "Я был голоден, потому что ничего не ел весь день.",
            "accept": [
              "i was hungry because i hadn't eaten all day",
              "i was hungry because i had not eaten all day"
            ],
            "placeholder": "I was hungry because I ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · фон и событие",
        "title": "<em>was doing</em> рисует фон, <em>did</em> двигает сюжет",
        "paras": [
          "Главная пара рассказа — Past Continuous против Past Simple. Длительное действие (<b>was/were + -ing</b>) — это процесс, который уже шёл, когда в него «врезалось» короткое, законченное событие (<b>did</b>).",
          "Связки распределяют роли: после <b>while</b> обычно идёт длительное (<b>while I was reading</b>), после <b>when</b> — чаще короткое событие (<b>when she called</b>). «While I was cooking, the phone rang» = пока я готовил, зазвонил телефон.",
          "Если два длинных действия шли параллельно — оба в Past Continuous: <b>While she was studying, I was cooking.</b> А цепочка быстрых, сменяющих друг друга шагов — вся в Past Simple: he stood up, took his coat and left."
        ],
        "audio": "Главная пара рассказа — Past Continuous против Past Simple. Длительное действие, was или were плюс -ing, это процесс, который уже шёл, когда в него врезалось короткое законченное событие, did. После while обычно длительное: while I was reading. После when чаще короткое событие: when she called. Два длинных действия параллельно — оба в Past Continuous: while she was studying, I was cooking.",
        "table": {
          "rows": [
            [
              "while + was/were doing",
              "фон, который длился (while I was reading)"
            ],
            [
              "when + did",
              "короткое событие-вторжение (when she called)"
            ],
            [
              "was doing … was doing",
              "два параллельных процесса"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Пока я ехал на работу, я увидел аварию.",
            "en": "While I <b>was driving</b> to work, I <b>saw</b> an accident.",
            "gloss": "фон (was driving) + событие (saw)",
            "say": "While I was driving to work, I saw an accident."
          },
          {
            "ru": "Когда учитель вошёл, мы разговаривали.",
            "en": "When the teacher came in, we <b>were talking</b>.",
            "gloss": "событие прервало процесс",
            "say": "When the teacher came in, we were talking."
          },
          {
            "ru": "Он встал, взял пальто и вышел.",
            "en": "He <b>stood up</b>, <b>took</b> his coat and <b>left</b>.",
            "gloss": "цепочка событий → всё Past Simple",
            "say": "He stood up, took his coat and left."
          }
        ],
        "mistakes": [
          {
            "wrong": "When she phoned, I cooked dinner",
            "right": "When she phoned, I <b>was cooking</b> dinner",
            "why": "готовка уже шла в тот момент → фон в Past Continuous"
          },
          {
            "wrong": "While I was standing up, I was taking my coat and was leaving",
            "right": "I stood up, took my coat and left",
            "why": "быстрые сменяющиеся шаги — это цепочка событий, Past Simple"
          }
        ],
        "mnemonic": "⏳ Длинное + короткое: процесс (was doing) ↔ вторжение (did). Цепочка шагов — вся did.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> реши, что фон, а что событие.",
            "q": "While we ___ dinner, someone ___ on the door.",
            "opts": [
              "were having … knocked",
              "had … was knocking",
              "have … knocked"
            ],
            "answer": 0,
            "explain": "Ужин уже длился (фон) → were having; стук — короткое событие → knocked."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери «фон + событие».",
            "q": "Собери: «Когда она позвонила, я работал»",
            "want": "When she called I was working",
            "answer": "When she called I was working"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши два параллельных процесса.",
            "q": "Пока она училась, я готовил.",
            "accept": [
              "while she was studying i was cooking",
              "while she was studying, i was cooking"
            ],
            "placeholder": "While she was studying, I ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Русский вид — это не английские времена",
        "paras": [
          "Вот где русский мешает сильнее всего. У нас есть вид: «делал» (несов.) против «сделал» (сов.). Кажется, что несов. = Continuous, а сов. = Simple — но это <u>обманчивая</u> аналогия. Английская система отвечает не только на «закончено или нет», но и на «что раньше, что фоном».",
          "Сравни: «Когда я пришёл, он уже ушёл». Оба русских глагола — в простом прошедшем, и «уже ушёл» (сов.) формально ничем не отмечает, что это раньше. По-английски выбор обязателен: <b>When I arrived, he had already left</b> — он ушёл <u>до</u> моего прихода. Сказать просто <b>left</b> — значит «ушёл при мне, по очереди».",
          "Вывод: не переводи вид «по словарю». Спрашивай себя про каждое прошлое действие: это шаг сюжета (did), фон, который длился (was doing), или то, что случилось ещё раньше (had done)?"
        ],
        "audio": "Вот где русский мешает сильнее всего. У нас есть вид: делал против сделал. Кажется, что несовершенный это Continuous, а совершенный это Simple, но это обманчивая аналогия. Сравни: когда я пришёл, он уже ушёл. Оба русских глагола в простом прошедшем. По-английски выбор обязателен: When I arrived, he had already left — он ушёл до моего прихода. Сказать просто left — значит ушёл при мне, по очереди. Не переводи вид по словарю: спрашивай, это шаг сюжета, фон или то, что было ещё раньше.",
        "table": {
          "rows": [
            [
              "When I arrived, he left.",
              "Я пришёл — и потом он ушёл (по очереди)"
            ],
            [
              "When I arrived, he had left.",
              "К моему приходу его уже не было (раньше)"
            ],
            [
              "When I arrived, he was leaving.",
              "В момент прихода он как раз уходил (процесс)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Когда я вошёл, она читала (процесс).",
            "en": "When I came in, she <b>was reading</b>.",
            "gloss": "длилось в момент → Past Continuous",
            "say": "When I came in, she was reading."
          },
          {
            "ru": "Когда я вошёл, она дочитала книгу и встала (раньше/по очереди).",
            "en": "When I came in, she <b>had finished</b> the book and <b>stood up</b>.",
            "gloss": "дочитала раньше → had finished",
            "say": "When I came in, she had finished the book and stood up."
          },
          {
            "ru": "Я не узнал город — я никогда раньше тут не был.",
            "en": "I didn't recognise the city — I <b>had</b> never <b>been</b> there before.",
            "gloss": "опыт до момента → Past Perfect",
            "say": "I didn't recognise the city. I had never been there before."
          }
        ],
        "mistakes": [
          {
            "wrong": "When I came home, everybody went to bed",
            "right": "When I came home, everybody <b>had</b> gone to bed",
            "why": "все легли ДО моего прихода → раннее событие = had gone"
          },
          {
            "wrong": "I read the book, so I knew the ending (про предысторию)",
            "right": "I knew the ending because I <b>had read</b> the book",
            "why": "прочитал раньше, чем узнал → Past Perfect, а не просто сов. вид"
          }
        ],
        "mnemonic": "🪜 Один русский «прош.» — три английских вопроса: шаг? фон? или ДО?",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> к моему приходу его уже не было.",
            "q": "«Когда я приехал, гости уже разошлись» —",
            "opts": [
              "When I arrived, the guests left",
              "When I arrived, the guests had left",
              "When I arrived, the guests were leaving"
            ],
            "answer": 1,
            "explain": "Разошлись ДО приезда → <b>had left</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> в момент прихода действие как раз длилось.",
            "q": "«Когда я заглянул, он как раз обедал» —",
            "opts": [
              "When I looked in, he had lunch",
              "When I looked in, he had had lunch",
              "When I looked in, he was having lunch"
            ],
            "answer": 2,
            "explain": "Процесс в момент → Past Continuous: <b>was having lunch</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши предысторию. be → been.",
            "q": "Я не узнал улицу — я никогда раньше тут не был.",
            "accept": [
              "i didn't recognise the street because i had never been there before",
              "i didn't recognize the street because i had never been there before",
              "i didn't recognise the street i had never been there before"
            ],
            "placeholder": "I didn't recognise the street — I had never ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · собираем рассказ",
        "title": "Складываем слои: декорации → флешбэк → события",
        "paras": [
          "Теперь соберём всё вместе. Хороший рассказ часто начинается с <b>декораций</b> в Past Continuous (что длилось), даёт <b>событие</b> в Past Simple, а где нужно — вставляет <b>флешбэк</b> в Past Perfect.",
          "<b>It was getting dark and I was walking home. Suddenly a man stopped me. I had never seen him before.</b> = Темнело, я шёл домой. Вдруг меня остановил мужчина. Я никогда раньше его не видел.",
          "И не забывай про артикли — наш «вечный» повтор. Новый герой появляется с <b>a</b> (a man), а потом мы говорим про него <b>the</b> (the man). Это та же логика «первое упоминание → известное», что мы греем каждое утро."
        ],
        "audio": "Теперь соберём всё вместе. Хороший рассказ часто начинается с декораций в Past Continuous, даёт событие в Past Simple, а где нужно вставляет флешбэк в Past Perfect. It was getting dark and I was walking home. Suddenly a man stopped me. I had never seen him before. И не забывай про артикли: новый герой появляется с a, a man, а потом мы говорим про него the, the man.",
        "examples": [
          {
            "ru": "Темнело, и я шёл домой.",
            "en": "It <b>was getting</b> dark and I <b>was walking</b> home.",
            "gloss": "декорации → Past Continuous",
            "say": "It was getting dark and I was walking home."
          },
          {
            "ru": "Вдруг меня остановил какой-то мужчина.",
            "en": "Suddenly <b>a</b> man <b>stopped</b> me.",
            "gloss": "событие (Past Simple) + новый герой (a man)",
            "say": "Suddenly a man stopped me."
          },
          {
            "ru": "Этот мужчина показался знакомым, хотя я его раньше не встречал.",
            "en": "<b>The</b> man looked familiar, although I <b>had</b> never <b>met</b> him.",
            "gloss": "уже известный (the) + флешбэк (had met)",
            "say": "The man looked familiar, although I had never met him."
          }
        ],
        "mistakes": [
          {
            "wrong": "Suddenly the man stopped me (первое упоминание)",
            "right": "Suddenly <b>a</b> man stopped me",
            "why": "герой появляется впервые → неопределённый артикль a"
          },
          {
            "wrong": "I walked home and it got dark, and a man stopped me",
            "right": "I <b>was walking</b> home and it <b>was getting</b> dark when a man stopped me",
            "why": "декорации, которые длились, — Past Continuous; событие — Past Simple"
          }
        ],
        "mnemonic": "🧱 Декорации (was doing) → флешбэк (had done) → событие (did). Новый герой = a, знакомый = the.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери артикль для первого появления героя.",
            "q": "I was reading when ___ stranger sat down next to me.",
            "opts": [
              "the",
              "a",
              "—"
            ],
            "answer": 1,
            "explain": "Незнакомец появляется впервые → <b>a stranger</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери начало рассказа: декорации + событие.",
            "q": "Собери: «Шёл дождь, когда зазвонил телефон»",
            "want": "It was raining when the phone rang",
            "answer": "It was raining when the phone rang"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши предложение с тремя слоями. meet → met.",
            "q": "Этот мужчина показался знакомым, хотя я его раньше не встречал.",
            "accept": [
              "the man looked familiar although i had never met him",
              "the man looked familiar, although i had never met him"
            ],
            "placeholder": "The man looked familiar, although I had never ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Дина рассказывает Сэму, что случилось вчера вечером. Слушай, как три времени работают вместе: фон длится, событие врезается, флешбэк уходит назад. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Dina",
          "name": "Дина",
          "side": "left",
          "en": "You won't believe what happened. I was walking home when the power went out.",
          "ru": "Не поверишь, что случилось. Я шла домой, и тут отключился свет.",
          "words": [
            [
              "was walking",
              "шла (фон, Past Continuous)"
            ],
            [
              "went out",
              "отключился, погас (go out)"
            ]
          ]
        },
        {
          "who": "Sam",
          "name": "Сэм",
          "side": "right",
          "en": "The whole street? Had it ever happened before?",
          "ru": "На всей улице? Раньше такое случалось?",
          "words": [
            [
              "the whole street",
              "вся улица"
            ],
            [
              "had it happened",
              "случалось ли (Past Perfect, вопрос)"
            ]
          ]
        },
        {
          "who": "Dina",
          "name": "Дина",
          "side": "left",
          "en": "Never. People were standing in the dark because nobody had brought a torch.",
          "ru": "Никогда. Люди стояли в темноте, потому что никто не взял фонарик.",
          "words": [
            [
              "were standing",
              "стояли (фон)"
            ],
            [
              "had brought",
              "взял (раньше — Past Perfect)"
            ],
            [
              "torch",
              "фонарик (BrE)"
            ]
          ]
        },
        {
          "who": "Sam",
          "name": "Сэм",
          "side": "right",
          "en": "So what did you do?",
          "ru": "И что ты сделала?",
          "words": [
            [
              "did you do",
              "сделала (событие, Past Simple)"
            ]
          ]
        },
        {
          "who": "Dina",
          "name": "Дина",
          "side": "left",
          "en": "I used my phone light and found the door. By then the lights had come back on.",
          "ru": "Посветила телефоном и нашла дверь. К тому моменту свет уже включился.",
          "words": [
            [
              "found",
              "нашла (find → found)"
            ],
            [
              "had come back on",
              "уже включился (раньше)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Связки и формы рассказа — то, из чего строится повествование на B2. Повтори вслух и отметь, какой слой задаёт каждое слово.",
      "items": [
        {
          "en": "while",
          "ru": "пока, в то время как (часто + was doing)",
          "ex": "While I was reading, he called."
        },
        {
          "en": "as",
          "ru": "когда, по мере того как (одновременность)",
          "ex": "As I was leaving, it started to rain."
        },
        {
          "en": "by the time",
          "ru": "к тому времени, как (часто зовёт had)",
          "ex": "By the time we arrived, it had ended."
        },
        {
          "en": "suddenly",
          "ru": "вдруг, внезапно (вводит событие)",
          "ex": "Suddenly the door opened."
        },
        {
          "en": "had already done",
          "ru": "уже сделал (к тому моменту)",
          "ex": "She had already left."
        },
        {
          "en": "was getting dark",
          "ru": "темнело (фон-процесс)",
          "ex": "It was getting dark outside."
        },
        {
          "en": "background",
          "ru": "фон, задний план",
          "ex": "Music was playing in the background."
        },
        {
          "en": "go off",
          "ru": "сработать, зазвонить (об устройстве)",
          "ex": "The alarm went off at six."
        },
        {
          "en": "realise",
          "ru": "осознать, понять",
          "ex": "I realised I had forgotten my keys."
        },
        {
          "en": "recognise",
          "ru": "узнать (кого-то/что-то знакомое)",
          "ex": "I recognised her at once."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай короткую историю. Заметь, как декорации длятся (was/were doing), события идут цепочкой (did), а флешбэки отматывают время назад (had done).",
      "title": "The last train",
      "sentences": [
        "It was almost midnight, and the station was nearly empty.",
        "A few passengers were waiting on the cold platform.",
        "Marco was checking his phone when the announcement came.",
        "The last train had already left ten minutes earlier.",
        "He realised he had misread the timetable.",
        "While he was looking for a taxi, it started to rain.",
        "An old man, who had been watching him, offered him a lift.",
        "By the time Marco got home, the storm had passed."
      ],
      "translation": "Была почти полночь, и вокзал был почти пуст. Несколько пассажиров ждали на холодной платформе. Марко смотрел в телефон, когда раздалось объявление. Последний поезд ушёл ещё десять минут назад. Он понял, что неправильно прочитал расписание. Пока он искал такси, пошёл дождь. Пожилой мужчина, который всё это время за ним наблюдал, предложил подвезти. К тому времени, как Марко добрался домой, гроза прошла."
    },
    "drag": {
      "intro": "Соедини английскую форму с её ролью в рассказе (слоем).",
      "pairs": [
        [
          "was raining",
          "фон, который длился"
        ],
        [
          "stopped",
          "событие, шаг сюжета"
        ],
        [
          "had left",
          "то, что было ещё раньше"
        ],
        [
          "while",
          "связка для длительного фона"
        ],
        [
          "suddenly",
          "сигнал внезапного события"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка первого дня B2. Пять вопросов — и система рассказа твоя.",
      "items": [
        {
          "q": "«Шёл дождь, когда я вышел» —",
          "opts": [
            "It rained when I left",
            "It was raining when I left",
            "It had rained when I left"
          ],
          "answer": 1,
          "explain": "Дождь уже шёл (фон) → Past Continuous: <b>was raining</b>; left — событие."
        },
        {
          "q": "«Когда я пришёл, он уже ушёл (раньше)» —",
          "opts": [
            "When I arrived, he left",
            "When I arrived, he had left",
            "When I arrived, he was leaving"
          ],
          "answer": 1,
          "explain": "Ушёл ДО прихода → Past Perfect: <b>had left</b>."
        },
        {
          "q": "While we ___ dinner, the phone ___.",
          "opts": [
            "were having … rang",
            "had … was ringing",
            "have … rang"
          ],
          "answer": 0,
          "explain": "Ужин длился (фон) → were having; звонок — событие → rang."
        },
        {
          "q": "Какое время для предыстории (что случилось ещё раньше)?",
          "opts": [
            "Past Continuous (was doing)",
            "Past Perfect (had done)",
            "Past Simple (did)"
          ],
          "answer": 1,
          "explain": "Более раннее событие → <b>Past Perfect</b>, had + 3-я форма."
        },
        {
          "q": "Новый герой появляется впервые: «Suddenly ___ dog ran out.»",
          "opts": [
            "the",
            "a"
          ],
          "answer": 1,
          "explain": "Первое упоминание → неопределённый артикль: <b>a dog</b>."
        }
      ]
    },
    "essay": {
      "intro": "Твоя очередь — расскажи маленькую историю в трёх слоях.",
      "prompt": "Напиши 5–6 предложений о случае из прошлого. Задай декорации (was/were doing), дай события (did) и хотя бы один флешбэк (had done). Можно начать с «It was… and I was…».",
      "hint": "Структуры: It was getting dark and I was … ; Suddenly … ; I realised that I had … ; By the time …, … had … ; While I was …, … .",
      "example": "It was a cold evening and I was waiting for the bus. While I was standing there, I noticed that the street was empty. Suddenly I realised that I had left my wallet at home. The last bus had already gone, so I started to walk. By the time I got home, it had begun to rain."
    },
    "picture": {
      "intro": "Опиши сцену: что длилось на заднем плане и какое событие вдруг произошло.",
      "emoji": "🌧️🚉🕛",
      "prompt": "Опиши картинку в трёх слоях: что длилось (was/were doing), что случилось (did), что произошло ещё раньше (had done).",
      "hint": "Используй: It was raining and people were waiting; the last train had already left; suddenly a man arrived.",
      "example": "It was late and rain was falling on the empty platform. A few people were waiting under the roof. The last train had already left, so they looked tired and annoyed. Suddenly a taxi stopped and one man got in.",
      "img": "img/b2/day-01.jpg",
      "credit": "Фото: ralexander_photos · CC0 · <a href=\"https://www.flickr.com/photos/154290190@N07/42344051821\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "2": {
    "day": 2,
    "week": "01",
    "level": "B2",
    "themeRu": "Длилось до момента",
    "themeEn": "Past Perfect Continuous",
    "intro": "Вчера ты собрал(а) рассказ из трёх слоёв — а у хорошей сцены есть ещё и глубина кадра. Сегодня добавляем четвёртый, очень «киношный» инструмент — <b>Past Perfect Continuous</b>: <b>had been + -ing</b>. Если Past Perfect (had done) показывает <u>результат</u>, который уже был к моменту в прошлом («к шести я закончил»), то had been doing показывает <u>процесс</u>, который тянулся ДО этого момента: «я работал там пять лет, прежде чем уволился». Отдельной перфектно-длительной формы в русском нет, поэтому мы по привычке говорим то «I worked», то «I was working» — и оба раза мимо. Сегодня научишься слышать длительность <u>до точки</u> в прошлом и отличать «делал процесс» от «сделал результат». Поехали.",
    "introAudio": "Вчера ты собрал рассказ из трёх слоёв, а у хорошей сцены есть ещё и глубина кадра. Сегодня добавляем четвёртый, очень киношный инструмент — Past Perfect Continuous: had been плюс -ing. Если Past Perfect, had done, показывает результат, который уже был к моменту в прошлом, то had been doing показывает процесс, который тянулся до этого момента: я работал там пять лет, прежде чем уволился. Отдельной перфектно-длительной формы в русском нет, поэтому мы по привычке говорим то I worked, то I was working, и оба раза мимо. Сегодня научишься слышать длительность до точки в прошлом и отличать процесс от результата.",
    "goals": [
      "строить Past Perfect Continuous: had been + -ing (для всех лиц одинаково)",
      "показывать длительность процесса ДО момента в прошлом: how long? before that?",
      "отличать процесс (had been doing) от результата (had done)",
      "ловить русскую ловушку: «I was working there 5 years before…» → had been working"
    ],
    "learned": [
      "Научился(лась) строить Past Perfect Continuous: had been + -ing (для всех лиц одинаково)",
      "Научился(лась) показывать длительность процесса ДО момента в прошлом: how long? before that?",
      "Научился(лась) отличать процесс (had been doing) от результата (had done)",
      "Поймал(а) русскую ловушку: «I was working there 5 years before…» → had been working"
    ],
    "review": {
      "intro": "Сначала прогреем вчерашнюю систему рассказа и два «вечных» соседа сегодняшней темы: сам Past Perfect (had done) и связки длительности for / since. Они нам понадобятся через минуту.",
      "introAudio": "Сначала прогреем вчерашнюю систему рассказа и два вечных соседа сегодняшней темы: сам Past Perfect, had done, и связки длительности for и since. Они нам понадобятся через минуту.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни вчерашнее — фон, событие и предысторию.",
          "q": "«Я готовил, когда погас свет, потому что я забыл оплатить счёт» —",
          "opts": [
            "I cooked when the lights went out because I forgot to pay",
            "I was cooking when the lights went out because I had forgotten to pay",
            "I was cooking when the lights had gone out because I forgot to pay"
          ],
          "answer": 1,
          "explain": "Фон (was cooking) + событие (went out) + предыстория-причина (had forgotten)."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> for или since? Период vs точка отсчёта.",
          "q": "We had known each other ___ 2010.",
          "opts": [
            "for",
            "since",
            "during"
          ],
          "answer": 1,
          "explain": "2010 — точка начала → <b>since</b>. (for + период: for ten years.)"
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши Past Perfect (результат к моменту). finish → finished.",
          "q": "К шести я уже закончил отчёт.",
          "accept": [
            "by six i had finished the report",
            "by six i had already finished the report",
            "i had finished the report by six"
          ],
          "placeholder": "By six I had ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · форма и идея",
        "title": "Процесс ДО момента — <em>had been + -ing</em>",
        "paras": [
          "Past Perfect Continuous подчёркивает <b>длительность процесса</b>, который шёл какое-то время и <u>довёл</u> до момента в прошлом. Форма одна на всех лиц: <b>had been + глагол-ing</b>. I <b>had been waiting</b>, she <b>had been working</b>, they <b>had been running</b>.",
          "Сравни с обычным Past Perfect. <b>had done</b> = результат к моменту (закончено): «к шести я <u>написал</u> отчёт». <b>had been doing</b> = процесс к моменту (сколько длилось): «к шести я <u>писал</u> отчёт уже три часа».",
          "В речи had been сильно редуцируется: /həd bɪn/ → почти «эд-бин». На письме часто сокращают had до 'd: <b>I'd been waiting for an hour.</b>"
        ],
        "audio": "Past Perfect Continuous подчёркивает длительность процесса, который шёл какое-то время и довёл до момента в прошлом. Форма одна на всех: had been плюс глагол с -ing. I had been waiting, she had been working. Сравни: had done — результат к моменту, закончено. had been doing — процесс к моменту, сколько длилось. В речи had been редуцируется, звучит почти эд-бин, а had сжимается до 'd: I'd been waiting for an hour.",
        "table": {
          "rows": [
            [
              "форма (все лица)",
              "had been + -ing (I had been waiting)"
            ],
            [
              "had done",
              "результат к моменту (had written it)"
            ],
            [
              "had been doing",
              "процесс/длительность к моменту (had been writing)"
            ],
            [
              "в речи",
              "'d been + -ing · /həd bɪn/"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Я прождал уже час, когда она наконец пришла.",
            "en": "I <b>had been waiting</b> for an hour when she finally arrived.",
            "gloss": "процесс до момента → had been waiting",
            "say": "I had been waiting for an hour when she finally arrived."
          },
          {
            "ru": "Он запыхался, потому что бежал.",
            "en": "He was out of breath because he <b>had been running</b>.",
            "gloss": "длительность объясняет состояние",
            "say": "He was out of breath because he had been running."
          },
          {
            "ru": "К полудню они копали уже четыре часа.",
            "en": "By noon they <b>had been digging</b> for four hours.",
            "gloss": "сколько длилось к моменту",
            "say": "By noon they had been digging for four hours."
          }
        ],
        "mistakes": [
          {
            "wrong": "I had waited for an hour when she came",
            "right": "I <b>had been waiting</b> for an hour when she came",
            "why": "важна длительность процесса → had been + -ing"
          },
          {
            "wrong": "He had been ran a lot",
            "right": "He <b>had been running</b> a lot",
            "why": "после had been — форма с -ing, а не 3-я форма"
          }
        ],
        "mnemonic": "⏱️ had been + -ing = «сколько уже длилось» к точке в прошлом.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> подчеркни длительность процесса до момента.",
            "q": "When the teacher came in, the students ___ for twenty minutes.",
            "opts": [
              "had talked",
              "had been talking",
              "were talking"
            ],
            "answer": 1,
            "explain": "Важно «сколько уже длилось» (twenty minutes) → <b>had been talking</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери Past Perfect Continuous.",
            "q": "Собери: «Я ждал автобус полчаса»",
            "want": "I had been waiting for the bus for half an hour",
            "answer": "I had been waiting for the bus for half an hour"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши причину-процесс. run → running.",
            "q": "Она запыхалась, потому что бежала.",
            "accept": [
              "she was out of breath because she had been running",
              "she was out of breath because she'd been running"
            ],
            "placeholder": "She was out of breath because she had been ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · процесс vs результат",
        "title": "<em>had been doing</em> (процесс) против <em>had done</em> (результат)",
        "paras": [
          "Это сердце темы. Обе формы смотрят из прошлого назад, но разными глазами. <b>had been doing</b> смотрит на <u>сам процесс</u>: как долго, чем была занята картинка. <b>had done</b> смотрит на <u>результат</u>: что в итоге готово, сколько штук завершено.",
          "Сравни: <b>I had been painting the kitchen</b> (был в процессе, руки в краске — может, ещё не закончил) против <b>I had painted the kitchen</b> (готово, можно вешать полки). Первое — про «чем занимался», второе — про «что сделал».",
          "Поэтому «следы процесса» (устал, вспотел, грязные руки, красные глаза) почти всегда тянут <b>had been doing</b>, а «итог» с числом (написал 3 письма, прочитал книгу) — <b>had done</b>. С глаголами-состояниями (know, be, have) Continuous обычно не используют: <b>had known</b>, не «had been knowing»."
        ],
        "audio": "Это сердце темы. Обе формы смотрят из прошлого назад, но разными глазами. had been doing смотрит на сам процесс: как долго, чем была занята картинка. had done смотрит на результат: что готово, сколько завершено. I had been painting the kitchen — был в процессе, руки в краске. I had painted the kitchen — готово. Следы процесса — устал, грязные руки — тянут had been doing. Итог с числом тянет had done. С глаголами-состояниями know, be, have Continuous не используют: had known, а не had been knowing.",
        "table": {
          "rows": [
            [
              "had been doing",
              "процесс: как долго, чем занимался"
            ],
            [
              "had done",
              "результат: что готово, сколько сделано"
            ],
            [
              "следы (устал, грязный, мокрый)",
              "→ had been doing"
            ],
            [
              "итог с числом (read the book)",
              "→ had done"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Земля была мокрая — шёл дождь.",
            "en": "The ground was wet — it <b>had been raining</b>.",
            "gloss": "след процесса → had been raining",
            "say": "The ground was wet because it had been raining."
          },
          {
            "ru": "Дождь прекратился, и вышло солнце.",
            "en": "It <b>had</b> finally <b>stopped</b> raining, and the sun came out.",
            "gloss": "результат → had stopped",
            "say": "It had finally stopped raining, and the sun came out."
          },
          {
            "ru": "К обеду она написала уже три письма.",
            "en": "By lunchtime she <b>had written</b> three emails.",
            "gloss": "итог с числом → had written",
            "say": "By lunchtime she had written three emails."
          },
          {
            "ru": "Глаза у неё были красные — она плакала.",
            "en": "Her eyes were red because she <b>had been crying</b>.",
            "gloss": "след процесса → had been crying",
            "say": "Her eyes were red because she had been crying."
          }
        ],
        "mistakes": [
          {
            "wrong": "Her eyes were red because she had cried",
            "right": "Her eyes were red because she <b>had been crying</b>",
            "why": "видимый след процесса → длительная форма"
          },
          {
            "wrong": "By noon she had been writing three emails",
            "right": "By noon she <b>had written</b> three emails",
            "why": "конкретный итог с числом → результат, had done"
          },
          {
            "wrong": "I had been knowing him for years",
            "right": "I <b>had known</b> him for years",
            "why": "know — глагол-состояние, без Continuous"
          }
        ],
        "mnemonic": "🎨 Руки в краске (процесс) → had been doing. Кухня покрашена (итог) → had done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> здесь важен видимый след процесса.",
            "q": "The ground was wet because it ___.",
            "opts": [
              "had rained",
              "had been raining",
              "was raining"
            ],
            "answer": 1,
            "explain": "Мокрая земля — след длившегося процесса → <b>had been raining</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> здесь важен конкретный итог.",
            "q": "By the end of the day he ___ ten chapters.",
            "opts": [
              "had read",
              "had been reading"
            ],
            "answer": 0,
            "explain": "Итог с числом (ten chapters) → результат: <b>had read</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши состояние без Continuous. know.",
            "q": "Я знал его много лет до того случая.",
            "accept": [
              "i had known him for years before that",
              "i had known him for many years before that"
            ],
            "placeholder": "I had known him for ... before that"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Почему «I was working there 5 years» — ошибка",
        "paras": [
          "В русском нет перфектно-длительной формы, поэтому мы тянемся к двум знакомым: либо «I worked there for 5 years», либо «I was working there for 5 years». Но если речь о длительности <u>до момента в прошлом</u> («…прежде чем меня повысили»), правильно третье — <b>had been working</b>.",
          "Смотри логику: «Я проработал там пять лет, прежде чем меня повысили». Повышение — точка отсчёта в прошлом; пять лет работы тянулись <u>до</u> неё → <b>I had been working there for five years before I was promoted.</b> «I was working» здесь не годится: оно про один момент-фон, а не про измеренную длительность до точки.",
          "Правило-маяк: если в русском есть «уже … лет/часов» + «прежде чем / к тому времени, как» в прошлом — это почти всегда <b>had been doing</b>. Не «was doing» и не «worked»."
        ],
        "audio": "В русском нет перфектно-длительной формы, поэтому мы тянемся к двум знакомым: либо I worked there for 5 years, либо I was working there for 5 years. Но если речь о длительности до момента в прошлом, прежде чем меня повысили, правильно третье: had been working. Повышение — точка отсчёта; пять лет тянулись до неё. I had been working there for five years before I was promoted. Маяк: если есть уже сколько-то лет или часов плюс прежде чем или к тому времени в прошлом — это почти всегда had been doing.",
        "table": {
          "rows": [
            [
              "I worked there for 5 years.",
              "просто факт прошлого (без точки-ориентира)"
            ],
            [
              "I was working there in 2018.",
              "фон/один момент в прошлом"
            ],
            [
              "I had been working there for 5 years before…",
              "длительность ДО момента в прошлом ✓"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Я учил английский два года, прежде чем поехал в Лондон.",
            "en": "I <b>had been learning</b> English for two years before I went to London.",
            "gloss": "длительность до точки → had been learning",
            "say": "I had been learning English for two years before I went to London."
          },
          {
            "ru": "К тому времени, как они поженились, они встречались уже семь лет.",
            "en": "By the time they got married, they <b>had been dating</b> for seven years.",
            "gloss": "сколько длилось к моменту",
            "say": "By the time they got married, they had been dating for seven years."
          },
          {
            "ru": "Она долго копила, прежде чем купила машину.",
            "en": "She <b>had been saving</b> for a long time before she bought the car.",
            "gloss": "процесс до покупки",
            "say": "She had been saving for a long time before she bought the car."
          }
        ],
        "mistakes": [
          {
            "wrong": "I was working there 5 years before they promoted me",
            "right": "I <b>had been working</b> there for 5 years before they promoted me",
            "why": "измеренная длительность до точки в прошлом → had been working"
          },
          {
            "wrong": "They had been dating seven years when married",
            "right": "They <b>had been dating</b> for seven years when they got married",
            "why": "нужен for перед периодом и полное событие в Past Simple"
          }
        ],
        "mnemonic": "📏 «Уже N лет … прежде чем (в прошлом)» → had been doing, не was doing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> длительность до момента в прошлом.",
            "q": "I ___ at the company for ten years before it closed.",
            "opts": [
              "was working",
              "had been working",
              "worked"
            ],
            "answer": 1,
            "explain": "Десять лет тянулись ДО закрытия → <b>had been working</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери длительность до точки.",
            "q": "Собери: «Они встречались уже семь лет, когда поженились»",
            "want": "They had been dating for seven years when they got married",
            "answer": "They had been dating for seven years when they got married"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши процесс до события. learn → learning.",
            "q": "Я учил английский два года, прежде чем поехал в Лондон.",
            "accept": [
              "i had been learning english for two years before i went to london",
              "i'd been learning english for two years before i went to london"
            ],
            "placeholder": "I had been learning English for two years before I ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · вопрос и отрицание",
        "title": "<em>Had you been …?</em> и <em>hadn't been doing</em>",
        "paras": [
          "Вопрос строим переносом первого вспомогательного — had — вперёд, остальное (been + -ing) стоит за подлежащим: <b>Had you been waiting long?</b> = Ты долго ждал? Очень частый вопрос про длительность: <b>How long had they been living there?</b>",
          "Отрицание — not к had: <b>hadn't been</b> (had not been). <b>She hadn't been sleeping well.</b> = Она плохо спала (процесс не шёл нормально). Короткий ответ повторяет только had: <b>Yes, I had. / No, I hadn't.</b>",
          "Запомни порядок слов: <b>had</b> (двигается) + <b>been</b> (стоит) + <b>-ing</b>. Did тут не нужен вообще — это перфект, а не Past Simple."
        ],
        "audio": "Вопрос строим переносом первого вспомогательного, had, вперёд, остальное, been плюс -ing, стоит за подлежащим: Had you been waiting long? Частый вопрос про длительность: How long had they been living there? Отрицание: not к had — hadn't been. She hadn't been sleeping well. Короткий ответ повторяет только had: Yes, I had. No, I hadn't. Порядок: had двигается, been стоит, плюс -ing. Did тут не нужен.",
        "table": {
          "rows": [
            [
              "Had you been waiting long?",
              "Ты долго ждал?"
            ],
            [
              "How long had they been living here?",
              "Как давно они тут жили?"
            ],
            [
              "Yes, I had. / No, I hadn't.",
              "Да / Нет (короткий ответ)"
            ],
            [
              "She hadn't been sleeping well.",
              "Она плохо спала (процесс)."
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Как давно ты учил французский, когда переехал?",
            "en": "How long <b>had</b> you <b>been learning</b> French when you moved?",
            "gloss": "вопрос о длительности",
            "say": "How long had you been learning French when you moved?"
          },
          {
            "ru": "Они не тренировались как следует, поэтому проиграли.",
            "en": "They <b>hadn't been training</b> properly, so they lost.",
            "gloss": "отрицание процесса",
            "say": "They hadn't been training properly, so they lost."
          },
          {
            "ru": "— Ты долго ждал? — Да.",
            "en": "— <b>Had</b> you been waiting long? — Yes, I <b>had</b>.",
            "gloss": "короткий ответ повторяет had",
            "say": "Had you been waiting long? Yes, I had."
          }
        ],
        "mistakes": [
          {
            "wrong": "Did you been waiting long?",
            "right": "<b>Had</b> you been waiting long?",
            "why": "это перфект → вперёд выносим had, did не нужен"
          },
          {
            "wrong": "She wasn't been sleeping well",
            "right": "She <b>hadn't been</b> sleeping well",
            "why": "отрицание Past Perfect Continuous: hadn't been + -ing"
          }
        ],
        "mnemonic": "❓ Had + подлеж. + been + -ing? Отрицание: hadn't been + -ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери вопрос о длительности.",
            "q": "«Как давно вы там жили, когда продали дом?» —",
            "opts": [
              "How long did you live there when you sold the house?",
              "How long had you been living there when you sold the house?",
              "How long were you living there when you sold the house?"
            ],
            "answer": 1,
            "explain": "Длительность до момента продажи → <b>had you been living</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери отрицание-причину.",
            "q": "Собери: «Они плохо подготовились, поэтому проиграли»",
            "want": "They hadn't been preparing well so they lost",
            "answer": "They hadn't been preparing well so they lost"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши короткий ответ.",
            "q": "— Had you been waiting long? — (Да.)",
            "accept": [
              "yes i had",
              "yes, i had"
            ],
            "placeholder": "Yes, I ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Лена объясняет коллеге, почему она вымоталась к концу проекта. Слушай, как длительность процесса (had been doing) объясняет результат-состояние.",
      "lines": [
        {
          "who": "A",
          "en": "You looked exhausted at the launch. What had happened?",
          "ru": "На запуске ты выглядела вымотанной. Что случилось?"
        },
        {
          "who": "B",
          "en": "I had been working on that project for six months without a break.",
          "ru": "Я работала над тем проектом полгода без перерыва."
        },
        {
          "who": "A",
          "en": "Six months! Had you been sleeping at all?",
          "ru": "Полгода! Ты вообще спала?"
        },
        {
          "who": "B",
          "en": "Barely. By launch day I had already written the whole report twice.",
          "ru": "Едва-едва. К дню запуска я уже дважды переписала весь отчёт."
        },
        {
          "who": "A",
          "en": "No wonder you were tired — you had been pushing yourself too hard.",
          "ru": "Неудивительно, что ты устала — ты слишком себя загоняла."
        }
      ]
    },
    "vocab": {
      "intro": "Связки длительности и формы дня. Отметь, что почти каждая ведёт к «процессу до момента» (had been doing). Повтори вслух.",
      "items": [
        {
          "en": "had been waiting",
          "ru": "ждал (процесс до момента, wait)",
          "ex": "I had been waiting for ages."
        },
        {
          "en": "had been working",
          "ru": "работал (процесс до момента, work)",
          "ex": "She had been working all night."
        },
        {
          "en": "for",
          "ru": "в течение (+ период: for two hours)",
          "ex": "He had been driving for hours."
        },
        {
          "en": "since",
          "ru": "с (+ точка отсчёта: since morning)",
          "ex": "I had been waiting since noon."
        },
        {
          "en": "before",
          "ru": "прежде чем; до того, как",
          "ex": "We had been dating before we married."
        },
        {
          "en": "by the time",
          "ru": "к тому времени, как",
          "ex": "By the time he arrived, I had been waiting an hour."
        },
        {
          "en": "out of breath",
          "ru": "запыхавшийся, без дыхания",
          "ex": "He was out of breath from running."
        },
        {
          "en": "exhausted",
          "ru": "измотанный, без сил",
          "ex": "She felt exhausted after the trip."
        },
        {
          "en": "no wonder",
          "ru": "неудивительно (что)",
          "ex": "No wonder you're tired."
        },
        {
          "en": "non-stop",
          "ru": "без остановки, безостановочно",
          "ex": "It had been raining non-stop."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай. Заметь разницу: процессы, которые длились (had been doing), и их результаты или итоги (had done).",
      "title": "The marathon",
      "sentences": [
        "When Sofia crossed the finish line, she could barely stand.",
        "She had been running for almost four hours.",
        "Her legs were shaking because she had been pushing too hard.",
        "She had trained for this race for over a year.",
        "By the final mile she had already passed thirty runners.",
        "The crowd had been cheering since the early morning.",
        "Sofia hadn't been sleeping well in the days before the race.",
        "But by the end she had achieved exactly what she had dreamed of."
      ],
      "translation": "Когда София пересекла финишную черту, она едва стояла на ногах. Она бежала почти четыре часа. Ноги дрожали, потому что она слишком выкладывалась. Она готовилась к этому забегу больше года. К последней миле она уже обогнала тридцать бегунов. Толпа болела с самого раннего утра. В дни перед забегом София плохо спала. Но к финишу она добилась ровно того, о чём мечтала."
    },
    "drag": {
      "intro": "Соедини форму с тем, что она подчёркивает: процесс (длительность) или результат (итог).",
      "pairs": [
        [
          "had been waiting",
          "процесс: как долго ждал"
        ],
        [
          "had written three emails",
          "результат: сколько готово"
        ],
        [
          "had been raining",
          "процесс: мокрая земля как след"
        ],
        [
          "had finished the report",
          "результат: отчёт готов"
        ],
        [
          "had known him for years",
          "состояние: без -ing"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка. Пять вопросов на «процесс до момента» — и Past Perfect Continuous твой.",
      "items": [
        {
          "q": "«Я ждал час, когда она пришла» —",
          "opts": [
            "I waited for an hour when she came",
            "I had been waiting for an hour when she came",
            "I was waiting for an hour when she came"
          ],
          "answer": 1,
          "explain": "Длительность до момента → <b>had been waiting</b>."
        },
        {
          "q": "Мокрая земля как след процесса: «The streets were wet because it ___.»",
          "opts": [
            "had been raining",
            "had rained",
            "rained"
          ],
          "answer": 0,
          "explain": "Видимый след длившегося процесса → <b>had been raining</b>."
        },
        {
          "q": "Итог с числом: «By noon she ___ five reports.»",
          "opts": [
            "had been writing",
            "had written"
          ],
          "answer": 1,
          "explain": "Конкретный итог (five reports) → результат: <b>had written</b>."
        },
        {
          "q": "«Я работал там 5 лет, прежде чем меня повысили» —",
          "opts": [
            "I was working there for 5 years before I was promoted",
            "I had been working there for 5 years before I was promoted"
          ],
          "answer": 1,
          "explain": "Измеренная длительность до точки в прошлом → <b>had been working</b>."
        },
        {
          "q": "Какой глагол НЕ ставят в had been + -ing?",
          "opts": [
            "wait",
            "know",
            "run"
          ],
          "answer": 1,
          "explain": "know — глагол-состояние: <b>had known</b>, не «had been knowing»."
        }
      ]
    },
    "essay": {
      "intro": "Расскажи о моменте, к которому что-то уже долго длилось.",
      "prompt": "Напиши 5–6 предложений о ситуации в прошлом, где важна длительность. Используй had been doing для процесса (как долго, какие следы) и хотя бы раз had done для итога.",
      "hint": "Структуры: I had been … for … when … ; By the time …, … had been … ; … was tired/wet because … had been … ; By then … had already done … .",
      "example": "By the time the concert started, we had been queuing for three hours. Our feet hurt because we had been standing on cold pavement. The people next to us had been chatting since the early afternoon. We were exhausted, but we had already taken hundreds of photos. When the band finally came out, we forgot how long we had been waiting.",
      "model": "By the time the concert started, we had been queuing for three hours."
    },
    "picture": {
      "intro": "Опиши человека, по которому видно, что он чем-то долго занимался.",
      "emoji": "🏃‍♀️💦⏱️",
      "prompt": "Опиши картинку: что человек делал долго (had been doing) и какой у этого видимый результат-след. Добавь один итог (had done).",
      "hint": "Используй: She was out of breath because she had been running; she had already run twenty kilometres.",
      "example": "The runner looked exhausted at the finish. She was out of breath and her shirt was soaked because she had been running for hours. Her legs were shaking from the effort. By that point she had already passed dozens of other runners.",
      "img": "img/b2/day-02.jpg",
      "credit": "Фото: Image Catalog · CC0 · <a href=\"https://www.flickr.com/photos/132795455@N08/20939937720\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "3": {
    "day": 3,
    "week": "01",
    "level": "B2",
    "themeRu": "Наверное, было",
    "themeEn": "Past deduction",
    "intro": "Свет в окнах не горит, машины у подъезда нет — и ты уже строишь версию о том, что случилось. Вчера мы измеряли длительность процессов в прошлом; сегодня навык другой — <b>догадки о прошлом</b>. На B1 ты уже рассуждаешь о настоящем: «он, наверное, дома» = <b>He must be at home</b>, «не может быть, что он спит» = <b>He can't be asleep</b>. Сдвигаем эти же догадки в прошлое — и появляется фирменная B2-формула: <b>модальный глагол + have + 3-я форма</b>. <b>must have been</b> (наверняка было), <b>can't have been</b> (быть не может), <b>might / may / could have been</b> (возможно, было). Русское «наверное», «должно быть», «не может быть» + прошедшее — всё сюда. И сразу про главную ошибку: не «must <u>was</u>», а <b>must have been</b>. Разберём по уверенности.",
    "introAudio": "Свет в окнах не горит, машины у подъезда нет, и ты уже строишь версию о том, что случилось. Вчера мы измеряли длительность процессов в прошлом; сегодня навык другой — догадки о прошлом. На B1 ты уже рассуждаешь о настоящем: он, наверное, дома — He must be at home; не может быть, что он спит — He can't be asleep. Сдвигаем эти же догадки в прошлое, и появляется фирменная формула B2: модальный глагол плюс have плюс третья форма. must have been — наверняка было. can't have been — быть не может. might, may или could have been — возможно, было. И сразу про главную ошибку: не must was, а must have been.",
    "goals": [
      "строить догадку о прошлом: must / can't / might (may, could) + have + 3-я форма",
      "выбирать степень уверенности: наверняка (must have) vs исключено (can't have) vs возможно (might have)",
      "не говорить «must was» — после модального всегда have + 3-я форма",
      "понимать, что can't have done = уверен, что этого НЕ было (а не «не смог»)"
    ],
    "learned": [
      "Научился(лась) строить догадку о прошлом: must / can't / might (may, could) + have + 3-я форма",
      "Научился(лась) выбирать степень уверенности: наверняка (must have) vs исключено (can't have) vs возможно (might have)",
      "Перестал(а) говорить «must was» — после модального всегда have + 3-я форма",
      "Понял(а), что can't have done = уверен, что этого НЕ было (а не «не смог»)"
    ],
    "review": {
      "intro": "Прогреем фундамент сегодняшней темы: дедукцию о настоящем с B1 (must be / can't be / might be) и саму 3-ю форму, без которой формула не соберётся. Плюс короткий «вечный» повтор.",
      "introAudio": "Прогреем фундамент сегодняшней темы: дедукцию о настоящем с B1 — must be, can't be, might be — и саму третью форму, без которой формула не соберётся. Плюс короткий вечный повтор.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни B1 — догадка о настоящем, высокая уверенность.",
          "q": "Свет горит, машина у дома. «Он, наверное, дома» —",
          "opts": [
            "He can be at home",
            "He must be at home",
            "He might not be at home"
          ],
          "answer": 1,
          "explain": "Почти уверен по уликам → <b>must be</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> исключаешь вариант (это невозможно).",
          "q": "«Не может быть, что она голодна — она только что поела» —",
          "opts": [
            "She mustn't be hungry",
            "She can't be hungry",
            "She couldn't to be hungry"
          ],
          "answer": 1,
          "explain": "Для «исключено» в настоящем → <b>can't be</b> (не mustn't)."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши 3-ю форму — она пойдёт в формулу дня. take.",
          "q": "Третья форма глагола take (брать)?",
          "accept": [
            "taken"
          ],
          "placeholder": "take → took → ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · почти уверен",
        "title": "Наверняка было — <em>must have + 3-я форма</em>",
        "paras": [
          "Когда по уликам ты <u>почти уверен</u>, что что-то произошло в прошлом, бери <b>must have + 3-я форма</b>. Это прошлая версия твоего B1-шного must be. «Дорога мокрая — ночью, наверное, шёл дождь» → <b>It must have rained.</b>",
          "Идея: ты не видел сам момент, но логика и следы не оставляют сомнений. <b>You must have been tired.</b> = Ты, должно быть, устал. <b>She must have forgotten.</b> = Она наверняка забыла.",
          "В беглой речи have после must сжимается в /əv/ — звучит как «musta»: <b>must've been</b>. Это просто разговорная редукция, на письме — must have."
        ],
        "audio": "Когда по уликам ты почти уверен, что что-то произошло в прошлом, бери must have плюс третья форма. Это прошлая версия твоего must be. Дорога мокрая — ночью, наверное, шёл дождь: It must have rained. Ты не видел сам момент, но следы не оставляют сомнений. You must have been tired. She must have forgotten. В беглой речи have сжимается в /əv/, звучит как musta: must've been.",
        "table": {
          "rows": [
            [
              "must have + 3-я форма",
              "почти уверен, что было (логичный вывод)"
            ],
            [
              "He must have left.",
              "Он, должно быть, ушёл."
            ],
            [
              "в речи",
              "must've /ˈmʌstəv/ — «musta»"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Дорога мокрая — наверное, ночью шёл дождь.",
            "en": "The road is wet — it <b>must have rained</b> last night.",
            "gloss": "вывод по следу → must have rained",
            "say": "The road is wet, it must have rained last night."
          },
          {
            "ru": "Ты, должно быть, устал после такого дня.",
            "en": "You <b>must have been</b> tired after such a day.",
            "gloss": "must have been (be → been)",
            "say": "You must have been tired after such a day."
          },
          {
            "ru": "Она наверняка забыла про встречу.",
            "en": "She <b>must have forgotten</b> about the meeting.",
            "gloss": "forget → forgotten",
            "say": "She must have forgotten about the meeting."
          }
        ],
        "mistakes": [
          {
            "wrong": "It must rained last night",
            "right": "It <b>must have rained</b> last night",
            "why": "догадка о прошлом → must + have + 3-я форма"
          },
          {
            "wrong": "You must was tired",
            "right": "You <b>must have been</b> tired",
            "why": "после must не бывает was; только have been"
          }
        ],
        "mnemonic": "🔎 Уверен по уликам → must have done. Звучит «musta».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери уверенную догадку о прошлом.",
            "q": "His coat is gone. «Он, должно быть, ушёл» —",
            "opts": [
              "He must leave",
              "He must have left",
              "He must was leaving"
            ],
            "answer": 1,
            "explain": "Уверенный вывод о прошлом → <b>must have left</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери must have + 3-я форма.",
            "q": "Собери: «Она наверняка забыла»",
            "want": "She must have forgotten",
            "answer": "She must have forgotten"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши вывод по следу. rain → rained.",
            "q": "Земля мокрая — наверное, шёл дождь.",
            "accept": [
              "the ground is wet it must have rained",
              "the ground is wet, it must have rained",
              "it must have rained"
            ],
            "placeholder": "The ground is wet — it must have ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · исключено",
        "title": "Быть не может — <em>can't have / couldn't have + 3-я форма</em>",
        "paras": [
          "Противоположная уверенность: ты <u>исключаешь</u>, что что-то было. Здесь — <b>can't have + 3-я форма</b> (или чуть мягче <b>couldn't have</b>). «Не может быть, что она это сказала» → <b>She can't have said that.</b>",
          "Важно: это НЕ про «не смог». <b>can't have done</b> = «исключено, что это произошло» (вывод), а <b>couldn't do</b> = «не сумел сделать» (способность). Не путай: <b>He can't have finished so fast</b> (не верю, что закончил) против <b>He couldn't finish in time</b> (не успел физически).",
          "Запомни пару с Правилом 1: для «исключено в прошлом» отрицание must — это <b>can't have</b>, а не «mustn't have». Mustn't have в этом значении носители не используют."
        ],
        "audio": "Противоположная уверенность: ты исключаешь, что что-то было. Здесь can't have плюс третья форма, или мягче couldn't have. Не может быть, что она это сказала: She can't have said that. Важно: это не про не смог. can't have done — исключено, что произошло. couldn't do — не сумел сделать. He can't have finished so fast — не верю. He couldn't finish in time — не успел. Для исключено в прошлом отрицание must — это can't have, а не mustn't have.",
        "table": {
          "rows": [
            [
              "can't have + 3-я форма",
              "исключено, что это было (вывод)"
            ],
            [
              "couldn't have + 3-я форма",
              "то же, чуть мягче"
            ],
            [
              "≠ couldn't do",
              "не сумел (способность), другое!"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Не может быть, что он это сказал — он бы так не поступил.",
            "en": "He <b>can't have said</b> that — it's not like him.",
            "gloss": "исключаю → can't have said",
            "say": "He can't have said that, it's not like him."
          },
          {
            "ru": "Быть не может, что они уже приехали — слишком рано.",
            "en": "They <b>can't have arrived</b> yet — it's too early.",
            "gloss": "исключаю по логике",
            "say": "They can't have arrived yet, it's too early."
          },
          {
            "ru": "Она не могла этого видеть — её там не было.",
            "en": "She <b>couldn't have seen</b> it — she wasn't there.",
            "gloss": "мягкое исключение",
            "say": "She couldn't have seen it, she wasn't there."
          }
        ],
        "mistakes": [
          {
            "wrong": "He mustn't have said that",
            "right": "He <b>can't have said</b> that",
            "why": "«исключено в прошлом» → can't have, не mustn't have"
          },
          {
            "wrong": "She can't have seen it (имея в виду «не сумела увидеть»)",
            "right": "She <b>couldn't see</b> it (не сумела)",
            "why": "способность «не смог» → couldn't do, не can't have done"
          }
        ],
        "mnemonic": "🚫 Исключаю прошлое → can't / couldn't have done. «Не смог» — это другое: couldn't do.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> ты исключаешь, что это произошло.",
            "q": "«Быть не может, что они уже закончили» —",
            "opts": [
              "They mustn't have finished",
              "They can't have finished",
              "They couldn't finish"
            ],
            "answer": 1,
            "explain": "Исключаю прошлое → <b>can't have finished</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> различи «исключено» и «не сумел».",
            "q": "Её там не было. «Она не могла этого видеть» (исключено) —",
            "opts": [
              "She can't have seen it",
              "She couldn't see well"
            ],
            "answer": 0,
            "explain": "Логически исключаю → <b>can't have seen</b> (не про способность)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши исключение. say → said.",
            "q": "Не может быть, что он это сказал.",
            "accept": [
              "he can't have said that",
              "he cannot have said that",
              "he can't have said it"
            ],
            "placeholder": "He can't have ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · возможно",
        "title": "Возможно, было — <em>might / may / could have + 3-я форма</em>",
        "paras": [
          "Между «наверняка» и «исключено» есть середина — <u>неуверенная</u> догадка: «возможно», «может быть». Здесь <b>might have</b>, <b>may have</b> или <b>could have</b> + 3-я форма. Все три про одно: «вероятно, было, но я не уверен».",
          "<b>She might have missed the train.</b> = Возможно, она опоздала на поезд. <b>They may have got lost.</b> = Может быть, они заблудились. <b>He could have forgotten.</b> = Он мог забыть.",
          "Отрицание мягкой догадки — <b>might not have</b> / <b>may not have</b> (возможно, НЕ было): <b>She might not have seen your message.</b> Не путай с can't have (полное исключение): might not = «может, и не было», can't = «точно не было»."
        ],
        "audio": "Между наверняка и исключено есть середина — неуверенная догадка. Здесь might have, may have или could have плюс третья форма. Все три про одно: вероятно было, но я не уверен. She might have missed the train. They may have got lost. He could have forgotten. Отрицание мягкой догадки — might not have или may not have: возможно, не было. Не путай: might not — может, и не было; can't — точно не было.",
        "table": {
          "rows": [
            [
              "might / may / could have + 3-я форма",
              "возможно, было (не уверен)"
            ],
            [
              "might not / may not have done",
              "возможно, НЕ было"
            ],
            [
              "can't have done",
              "точно НЕ было (сильнее!)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Возможно, она опоздала на поезд.",
            "en": "She <b>might have missed</b> the train.",
            "gloss": "неуверенно → might have missed",
            "say": "She might have missed the train."
          },
          {
            "ru": "Может быть, они заблудились по дороге.",
            "en": "They <b>may have got</b> lost on the way.",
            "gloss": "may have got",
            "say": "They may have got lost on the way."
          },
          {
            "ru": "Возможно, он не видел твоё сообщение.",
            "en": "He <b>might not have seen</b> your message.",
            "gloss": "мягкое отрицание",
            "say": "He might not have seen your message."
          }
        ],
        "mistakes": [
          {
            "wrong": "She might missed the train",
            "right": "She <b>might have missed</b> the train",
            "why": "после might — тоже have + 3-я форма"
          },
          {
            "wrong": "He can't have forgotten (имея в виду «возможно, забыл»)",
            "right": "He <b>might have forgotten</b>",
            "why": "неуверенная догадка → might/may/could have, а не can't (исключение)"
          }
        ],
        "mnemonic": "🤔 Серединка «возможно» → might / may / could have done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> неуверенная догадка о прошлом.",
            "q": "Никто не отвечает. «Возможно, они уже ушли» —",
            "opts": [
              "They might have left already",
              "They must have left already",
              "They can't have left already"
            ],
            "answer": 0,
            "explain": "Не уверен, просто версия → <b>might have left</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери мягкую догадку.",
            "q": "Собери: «Может быть, она забыла пароль»",
            "want": "She may have forgotten the password",
            "answer": "She may have forgotten the password"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши мягкое отрицание. see → seen.",
            "q": "Возможно, он не видел твоё сообщение.",
            "accept": [
              "he might not have seen your message",
              "he may not have seen your message"
            ],
            "placeholder": "He might not have ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка и шкала",
        "title": "От «наверное» к форме: вся шкала уверенности",
        "paras": [
          "Соберём шкалу в одну картину. Русское «наверное / должно быть» + прошлое → <b>must have done</b>. «Возможно / может быть» → <b>might / may / could have done</b>. «Быть не может / точно нет» → <b>can't have done</b>. Одно русское «наверное» прячет всю английскую шкалу — выбирай по уверенности.",
          "Главная ловушка русскоязычных — пропустить <b>have</b>. После любого модального тут идёт <b>have + 3-я форма</b>, и менять его на was/did нельзя. <u>must was</u> ✗, <u>might forgot</u> ✗, <u>can't said</u> ✗ — всегда <b>must have been</b>, <b>might have forgotten</b>, <b>can't have said</b>.",
          "И помни про <b>can't have</b>: это «уверен, что НЕ было» — то есть сильное отрицание, не «не смог». А «не смог» — это couldn't do из недавнего мира способностей."
        ],
        "audio": "Соберём шкалу. Русское наверное или должно быть плюс прошлое — must have done. Возможно или может быть — might, may или could have done. Быть не может или точно нет — can't have done. Одно русское наверное прячет всю английскую шкалу. Главная ловушка — пропустить have. После любого модального идёт have плюс третья форма: must was — нет, might forgot — нет, всегда must have been, might have forgotten. И can't have — это уверен, что не было, а не не смог.",
        "table": {
          "rows": [
            [
              "наверняка было",
              "must have done"
            ],
            [
              "возможно, было",
              "might / may / could have done"
            ],
            [
              "возможно, не было",
              "might not / may not have done"
            ],
            [
              "точно НЕ было",
              "can't / couldn't have done"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Свет погас — наверное, перегорела пробка.",
            "en": "The lights went off — a fuse <b>must have blown</b>.",
            "gloss": "наверняка → must have blown",
            "say": "The lights went off, a fuse must have blown."
          },
          {
            "ru": "Возможно, забыл предупредить нас.",
            "en": "He <b>might have forgotten</b> to warn us.",
            "gloss": "возможно → might have",
            "say": "He might have forgotten to warn us."
          },
          {
            "ru": "Точно не он разбил окно — он был на работе.",
            "en": "He <b>can't have broken</b> the window — he was at work.",
            "gloss": "исключаю → can't have broken",
            "say": "He can't have broken the window, he was at work."
          }
        ],
        "mistakes": [
          {
            "wrong": "must was / might forgot / can't said",
            "right": "<b>must have been</b> / <b>might have forgotten</b> / <b>can't have said</b>",
            "why": "после модального всегда have + 3-я форма, без was/did"
          },
          {
            "wrong": "He can't have called (имея в виду «не сумел дозвониться»)",
            "right": "He <b>couldn't get through</b>",
            "why": "«не смог» — это способность (couldn't do), не отрицание-вывод"
          }
        ],
        "mnemonic": "📊 Шкала: must have (90%) · might/may/could have (50%) · can't have (0%). Всегда + have + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> почини формулу — вставь have.",
            "q": "Выбери правильную форму: «Он, должно быть, устал».",
            "opts": [
              "He must was tired",
              "He must have been tired",
              "He must be tired"
            ],
            "answer": 1,
            "explain": "Догадка о прошлом → <b>must have been</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> подбери уровень уверенности по смыслу.",
            "q": "Он был на работе весь день. «Точно не он сделал это» —",
            "opts": [
              "He must have done it",
              "He might have done it",
              "He can't have done it"
            ],
            "answer": 2,
            "explain": "Полностью исключаю → <b>can't have done</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери уверенный вывод о прошлом.",
            "q": "Собери: «Наверное, перегорела пробка»",
            "want": "A fuse must have blown",
            "answer": "A fuse must have blown"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Two colleagues guess why the boss didn't show up. Слушай, как меняется уверенность: от «возможно» к «наверняка» и «быть не может». Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Nina",
          "name": "Нина",
          "side": "left",
          "en": "The boss never came to the meeting. What do you think happened?",
          "ru": "Шеф так и не пришёл на встречу. Как думаешь, что случилось?",
          "words": [
            [
              "never came",
              "так и не пришёл"
            ],
            [
              "happened",
              "случилось (happen)"
            ]
          ]
        },
        {
          "who": "Raj",
          "name": "Радж",
          "side": "right",
          "en": "He might have got stuck in traffic. It was raining hard.",
          "ru": "Возможно, застрял в пробке. Шёл сильный дождь.",
          "words": [
            [
              "might have got",
              "возможно, попал (неуверенно)"
            ],
            [
              "stuck in traffic",
              "застрял в пробке"
            ]
          ]
        },
        {
          "who": "Nina",
          "name": "Нина",
          "side": "left",
          "en": "He can't have forgotten — he scheduled it himself.",
          "ru": "Забыть он не мог — он сам её и назначил.",
          "words": [
            [
              "can't have forgotten",
              "не мог забыть (исключаю)"
            ],
            [
              "scheduled",
              "назначил (schedule)"
            ]
          ]
        },
        {
          "who": "Raj",
          "name": "Радж",
          "side": "right",
          "en": "True. Then something serious must have come up.",
          "ru": "Верно. Тогда наверняка что-то серьёзное произошло.",
          "words": [
            [
              "must have come up",
              "наверняка возникло (come up)"
            ],
            [
              "serious",
              "серьёзное"
            ]
          ]
        },
        {
          "who": "Nina",
          "name": "Нина",
          "side": "left",
          "en": "He may not have charged his phone either — it's off.",
          "ru": "И телефон он, возможно, не зарядил — он выключен.",
          "words": [
            [
              "may not have charged",
              "возможно, не зарядил"
            ],
            [
              "off",
              "выключен"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Формулы дедукции и слова-улики. Отметь степень уверенности у каждой формы. Повтори вслух.",
      "items": [
        {
          "en": "must have been",
          "ru": "наверняка было / должно быть, был",
          "ex": "You must have been exhausted."
        },
        {
          "en": "can't have been",
          "ru": "быть не может, чтобы было",
          "ex": "It can't have been him."
        },
        {
          "en": "might have done",
          "ru": "возможно, сделал",
          "ex": "She might have left early."
        },
        {
          "en": "may have done",
          "ru": "может быть, сделал",
          "ex": "They may have missed it."
        },
        {
          "en": "could have done",
          "ru": "мог сделать (одна из версий)",
          "ex": "He could have taken the wrong bus."
        },
        {
          "en": "evidence",
          "ru": "улики, доказательства",
          "ex": "The evidence points to a leak."
        },
        {
          "en": "come up",
          "ru": "возникнуть, подвернуться (о деле)",
          "ex": "Something urgent came up."
        },
        {
          "en": "get stuck",
          "ru": "застрять",
          "ex": "We got stuck in traffic."
        },
        {
          "en": "it's not like him",
          "ru": "это на него не похоже",
          "ex": "Being late? It's not like him."
        },
        {
          "en": "presumably",
          "ru": "по-видимому, предположительно",
          "ex": "Presumably they got lost."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай мини-детектив. Заметь, как формы дедукции выстраивают версии о прошлом — от «возможно» до «исключено».",
      "title": "The empty office",
      "sentences": [
        "When Mark walked in, the office was dark and silent.",
        "His colleague's coat was gone, so she must have left early.",
        "A coffee cup was still warm — someone must have been there minutes ago.",
        "The back door was locked, so the visitor can't have escaped that way.",
        "They might have used the side entrance instead.",
        "The computer was off, but the screen could have been switched off by mistake.",
        "Nothing was missing, so it can't have been a real break-in.",
        "Mark decided the cleaner must have come earlier than usual."
      ],
      "translation": "Когда Марк вошёл, офис был тёмным и тихим. Пальто коллеги не было на месте, значит, она наверняка ушла рано. Чашка кофе была ещё тёплой — кто-то, должно быть, был тут пару минут назад. Задняя дверь была заперта, так что через неё посетитель уйти не мог. Возможно, они воспользовались боковым входом. Компьютер был выключен, но экран могли отключить случайно. Ничего не пропало, так что настоящего взлома быть не могло. Марк решил, что уборщик, должно быть, пришёл раньше обычного."
    },
    "drag": {
      "intro": "Соедини формулу с её уровнем уверенности о прошлом.",
      "pairs": [
        [
          "must have done",
          "наверняка было (90%)"
        ],
        [
          "might have done",
          "возможно, было (50%)"
        ],
        [
          "can't have done",
          "точно НЕ было (0%)"
        ],
        [
          "may not have done",
          "возможно, не было"
        ],
        [
          "couldn't do",
          "не сумел (способность — другое!)"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка дедукции о прошлом. Пять вопросов — и шкала уверенности твоя.",
      "items": [
        {
          "q": "Дорога мокрая. «Наверное, шёл дождь» —",
          "opts": [
            "It must rained",
            "It must have rained",
            "It might rain"
          ],
          "answer": 1,
          "explain": "Уверенный вывод о прошлом → <b>must have rained</b>."
        },
        {
          "q": "«Быть не может, что она это сказала» —",
          "opts": [
            "She mustn't have said that",
            "She can't have said that"
          ],
          "answer": 1,
          "explain": "«Исключено в прошлом» → <b>can't have said</b>."
        },
        {
          "q": "«Возможно, они заблудились» —",
          "opts": [
            "They must have got lost",
            "They might have got lost",
            "They can't have got lost"
          ],
          "answer": 1,
          "explain": "Неуверенная версия → <b>might have got lost</b>."
        },
        {
          "q": "Что значит «He can't have finished so fast»?",
          "opts": [
            "Он не сумел закончить быстро",
            "Не верю, что он так быстро закончил"
          ],
          "answer": 1,
          "explain": "can't have done = исключаю, что это было (вывод), не «не смог»."
        },
        {
          "q": "Почини формулу: «Ты, должно быть, устал».",
          "opts": [
            "You must was tired",
            "You must have been tired",
            "You must be tired"
          ],
          "answer": 1,
          "explain": "После must — have + 3-я форма: <b>must have been</b>."
        }
      ]
    },
    "essay": {
      "intro": "Сыграй в детектива — построй версии о том, что произошло.",
      "prompt": "Опиши загадочную ситуацию из прошлого (друг не пришёл, пропала вещь, странный звук) и выскажи 4–5 версий. Используй must have, might/may/could have и can't have + 3-я форма.",
      "hint": "Структуры: He must have … ; She might have … ; They can't have … because … ; It could have been … ; Presumably … had … .",
      "example": "My friend didn't show up last night, and I still don't know why. He can't have forgotten, because he texted me in the afternoon. He might have fallen asleep, since he had been working long hours all week. Or his phone may have died on the way. It can't have been anything serious, or someone would have called me. In the end I decided he must have been simply too exhausted to come.",
      "model": "He can't have forgotten, because he texted me in the afternoon."
    },
    "picture": {
      "intro": "Опиши сцену и догадайся, что здесь произошло до этого момента.",
      "emoji": "🕵️☕🚪",
      "prompt": "Опиши картинку и выскажи догадки о прошлом: что наверняка случилось (must have), что возможно (might/may/could have), что исключено (can't have).",
      "hint": "Используй: Someone must have been here recently; they might have left in a hurry; it can't have been a stranger.",
      "example": "The room is empty, but a cup of coffee is still steaming on the desk. Someone must have been here only minutes ago. They might have stepped out to take a call. The door is locked from inside, so a stranger can't have come in. Whoever it was must have left in a hurry.",
      "img": "img/b2/day-03.jpg",
      "credit": "Фото: Tim Evanson · Public Domain · <a href=\"https://www.flickr.com/photos/23165290@N00/17135781680\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "4": {
    "day": 4,
    "week": "01",
    "level": "B2",
    "themeRu": "Надо было / зря",
    "themeEn": "should & needn't have",
    "intro": "Догадка о прошлом холодна, как работа следователя; сегодняшнее чувство — горячее. Вчера мы строили версии, а сегодня берём близкий по форме, но другой по температуре инструмент — <b>сожаление и критику</b> о прошлом. На B1 ты советуешь на будущее: «тебе стоит отдохнуть» = <b>You should rest</b>. Развернём совет назад во времени: «надо было отдохнуть (а ты не отдохнул)» = <b>You should have rested</b>. Формула та же, что вчера — <b>should / needn't / could + have + 3-я форма</b>. Три оттенка: <b>should have done</b> (надо было, но не сделал) · <b>shouldn't have done</b> (зря сделал) · <b>needn't have done</b> (сделал, но было незачем). И две ловушки: <b>needn't have done</b> ≠ <b>didn't need to do</b>, и не «should have <u>went</u>», а <b>should have gone</b>. Разберём по полочкам.",
    "introAudio": "Догадка о прошлом холодна, как работа следователя; сегодняшнее чувство горячее. Вчера мы строили версии, а сегодня берём близкий по форме, но другой по температуре инструмент — сожаление и критику о прошлом. На B1 ты советуешь на будущее: тебе стоит отдохнуть — You should rest. Развернём совет назад во времени: надо было отдохнуть, а ты не отдохнул — You should have rested. Формула та же, что вчера: should, needn't или could плюс have плюс третья форма. Три оттенка: should have done — надо было, но не сделал. shouldn't have done — зря сделал. needn't have done — сделал, но было незачем. И две ловушки: needn't have done не равно didn't need to do, и не should have went, а should have gone.",
    "goals": [
      "выражать сожаление и критику о прошлом: should(n't) / needn't / could + have + 3-я форма",
      "отличать should have done (надо было) от shouldn't have done (зря сделал)",
      "ловить ключевую разницу: needn't have done (сделал зря) ≠ didn't need to do (не делал — было незачем)",
      "не говорить «should have went» — после have всегда правильная 3-я форма (gone)"
    ],
    "learned": [
      "Научился(лась) выражать сожаление и критику о прошлом: should(n't) / needn't / could + have + 3-я форма",
      "Научился(лась) отличать should have done (надо было) от shouldn't have done (зря сделал)",
      "Поймал(а) ключевую разницу: needn't have done (сделал зря) ≠ didn't need to do (не делал — было незачем)",
      "Перестал(а) говорить «should have went» — после have всегда правильная 3-я форма (gone)"
    ],
    "review": {
      "intro": "Прогреем то, на чём стоит сегодняшняя тема: вчерашнюю дедукцию о прошлом (must/can't/might have done) и B1-шный совет should. Сегодня они встретятся в одной формуле «модальный + have + 3-я форма».",
      "introAudio": "Прогреем то, на чём стоит сегодняшняя тема: вчерашнюю дедукцию о прошлом — must, can't, might have done — и совет should с B1. Сегодня они встретятся в одной формуле: модальный плюс have плюс третья форма.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни вчера — уверенная догадка о прошлом.",
          "q": "Свет погас. «Наверное, перегорела пробка» —",
          "opts": [
            "A fuse must blow",
            "A fuse must have blown",
            "A fuse can't have blown"
          ],
          "answer": 1,
          "explain": "Уверенный вывод о прошлом → <b>must have blown</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни B1 — совет на будущее.",
          "q": "Ты устал. «Тебе стоит отдохнуть» —",
          "opts": [
            "You should rest",
            "You must rest",
            "You should resting"
          ],
          "answer": 0,
          "explain": "Совет на сейчас/будущее → <b>should + базовая форма</b>: should rest."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши правильную 3-ю форму — она пойдёт в формулу дня. go.",
          "q": "Третья форма глагола go (идти)?",
          "accept": [
            "gone"
          ],
          "placeholder": "go → went → ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · надо было",
        "title": "Надо было, но не сделал — <em>should have + 3-я форма</em>",
        "paras": [
          "<b>should have + 3-я форма</b> — это сожаление или мягкий упрёк: правильное действие было нужно, но его НЕ сделали. «Надо было позвонить (а я не позвонил)» → <b>I should have called.</b>",
          "Зеркальная форма — <b>shouldn't have + 3-я форма</b>: действие сделали, и зря, лучше бы не делали. «Не надо было это говорить (а я сказал)» → <b>I shouldn't have said that.</b>",
          "Логика проста: <b>should have done</b> = «не сделал, а жаль» · <b>shouldn't have done</b> = «сделал, а жаль». В беглой речи have сжимается: <b>should've</b> /ˈʃʊdəv/, <b>shouldn't've</b>."
        ],
        "audio": "should have плюс третья форма — это сожаление или мягкий упрёк: правильное действие было нужно, но его не сделали. Надо было позвонить, а я не позвонил: I should have called. Зеркальная форма — shouldn't have: действие сделали, и зря. Не надо было это говорить, а я сказал: I shouldn't have said that. should have done — не сделал, а жаль. shouldn't have done — сделал, а жаль. В речи have сжимается: should've, shouldn't've.",
        "table": {
          "rows": [
            [
              "should have + 3-я форма",
              "надо было сделать (но НЕ сделал)"
            ],
            [
              "shouldn't have + 3-я форма",
              "не надо было (а сделал) — зря"
            ],
            [
              "в речи",
              "should've /ˈʃʊdəv/"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Надо было забронировать столик заранее.",
            "en": "We <b>should have booked</b> a table in advance.",
            "gloss": "не сделали, а жаль → should have booked",
            "say": "We should have booked a table in advance."
          },
          {
            "ru": "Не надо было ему доверять.",
            "en": "I <b>shouldn't have trusted</b> him.",
            "gloss": "сделал, а зря → shouldn't have trusted",
            "say": "I shouldn't have trusted him."
          },
          {
            "ru": "Тебе следовало сказать мне раньше.",
            "en": "You <b>should have told</b> me earlier.",
            "gloss": "tell → told",
            "say": "You should have told me earlier."
          }
        ],
        "mistakes": [
          {
            "wrong": "I should called you",
            "right": "I <b>should have called</b> you",
            "why": "сожаление о прошлом → should + have + 3-я форма"
          },
          {
            "wrong": "You shouldn't said that",
            "right": "You <b>shouldn't have said</b> that",
            "why": "после shouldn't — тоже have + 3-я форма"
          }
        ],
        "mnemonic": "😔 should have done = не сделал, а жаль. shouldn't have done = сделал, а жаль.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> правильного действия не сделали.",
            "q": "Опоздали из-за пробки. «Надо было выехать раньше» —",
            "opts": [
              "We should leave earlier",
              "We should have left earlier",
              "We shouldn't have left earlier"
            ],
            "answer": 1,
            "explain": "Сожаление: не выехали раньше → <b>should have left</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери критику-сожаление (сделал зря).",
            "q": "Собери: «Не надо было ему доверять»",
            "want": "I shouldn't have trusted him",
            "answer": "I shouldn't have trusted him"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши сожаление. tell → told.",
            "q": "Тебе следовало сказать мне раньше.",
            "accept": [
              "you should have told me earlier",
              "you should've told me earlier"
            ],
            "placeholder": "You should have ... me earlier"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · сделал зря",
        "title": "Сделал, а было незачем — <em>needn't have + 3-я форма</em>",
        "paras": [
          "<b>needn't have + 3-я форма</b> — особый оттенок: действие <u>сделали</u>, но в этом не было необходимости. Зря потраченные силы. «Зря я купил билеты — вход был свободный» → <b>I needn't have bought the tickets.</b>",
          "Главное отличие от should: <b>shouldn't have done</b> — действие было <u>ошибкой</u> (плохо, что сделал). <b>needn't have done</b> — действие не вредное, просто <u>лишнее</u> (можно было не делать). «Ты зря готовил так много» (еды хватало) → <b>You needn't have cooked so much.</b>",
          "Запомни: needn't have done всегда значит, что человек это <u>сделал</u>. Если он НЕ делал, потому что было не нужно, — это уже другая форма (см. Правило 3)."
        ],
        "audio": "needn't have плюс третья форма — особый оттенок: действие сделали, но в этом не было необходимости. Зря потраченные силы. Зря я купил билеты, вход был свободный: I needn't have bought the tickets. Отличие от should: shouldn't have done — действие было ошибкой. needn't have done — действие не вредное, просто лишнее. Ты зря готовил так много: You needn't have cooked so much. needn't have done всегда значит, что человек это сделал.",
        "table": {
          "rows": [
            [
              "needn't have + 3-я форма",
              "сделал, но было незачем (зря)"
            ],
            [
              "shouldn't have + 3-я форма",
              "сделал, и это было ошибкой/плохо"
            ],
            [
              "общее",
              "оба: действие БЫЛО сделано"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Зря я купил билеты — вход был бесплатным.",
            "en": "I <b>needn't have bought</b> the tickets — entry was free.",
            "gloss": "купил, но зря → needn't have bought",
            "say": "I needn't have bought the tickets, entry was free."
          },
          {
            "ru": "Ты зря готовил так много — мы не были голодны.",
            "en": "You <b>needn't have cooked</b> so much — we weren't hungry.",
            "gloss": "приготовил лишнее",
            "say": "You needn't have cooked so much. We weren't hungry."
          },
          {
            "ru": "Зря мы так спешили — поезд опоздал.",
            "en": "We <b>needn't have hurried</b> — the train was late.",
            "gloss": "поспешили напрасно",
            "say": "We needn't have hurried, the train was late."
          }
        ],
        "mistakes": [
          {
            "wrong": "I needn't bought the tickets",
            "right": "I <b>needn't have bought</b> the tickets",
            "why": "нужна полная форма: needn't + have + 3-я форма"
          }
        ],
        "mnemonic": "💸 needn't have done = сделал, но зря (силы/деньги на ветер).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> действие сделали, но оно было лишним.",
            "q": "Поезд опоздал. «Зря мы так спешили» —",
            "opts": [
              "We shouldn't have hurried",
              "We needn't have hurried",
              "We didn't need to hurry"
            ],
            "answer": 1,
            "explain": "Поспешили, но напрасно (не ошибка, а лишнее) → <b>needn't have hurried</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери «сделал зря».",
            "q": "Собери: «Ты зря готовил так много»",
            "want": "You needn't have cooked so much",
            "answer": "You needn't have cooked so much"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши «сделал напрасно». buy → bought.",
            "q": "Зря я купил билеты — вход был свободным.",
            "accept": [
              "i needn't have bought the tickets entry was free",
              "i needn't have bought the tickets",
              "i needn't have bought the tickets, entry was free"
            ],
            "placeholder": "I needn't have bought the tickets — entry was ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "<em>needn't have done</em> ≠ <em>didn't need to do</em>",
        "paras": [
          "Вот самая коварная пара уровня. Обе фразы про «не было необходимости» — но они говорят о <u>разном поведении</u> в прошлом.",
          "<b>needn't have done</b> = человек <u>сделал</u> действие, хотя было незачем (зря потратился). <b>didn't need to do</b> = необходимости не было, и человек обычно <u>не делал</u> (не тратился). «I needn't have cooked» — наготовил зря, еда осталась. «I didn't need to cook» — готовить было не нужно, я и не готовил.",
          "По-русски и то и другое можно сказать как «не нужно было готовить» — поэтому русскоязычные их путают. Спрашивай себя: <u>сделал он это или нет?</u> Сделал зря → needn't have done. Не делал, потому что незачем → didn't need to do."
        ],
        "audio": "Вот самая коварная пара уровня. Обе фразы про не было необходимости, но говорят о разном поведении в прошлом. needn't have done — человек сделал действие, хотя было незачем, зря потратился. didn't need to do — необходимости не было, и человек обычно не делал. I needn't have cooked — наготовил зря, еда осталась. I didn't need to cook — готовить было не нужно, я и не готовил. По-русски оба можно сказать как не нужно было готовить, поэтому их путают. Спрашивай: сделал он это или нет?",
        "table": {
          "rows": [
            [
              "I needn't have cooked.",
              "Я готовил — и зря (еда осталась)"
            ],
            [
              "I didn't need to cook.",
              "Готовить было незачем — я и не готовил"
            ],
            [
              "вопрос-маяк",
              "СДЕЛАЛ он это или НЕТ?"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Я зря помыл машину — сразу пошёл дождь (помыл).",
            "en": "I <b>needn't have washed</b> the car — it rained right after.",
            "gloss": "помыл, но зря",
            "say": "I needn't have washed the car, it rained right after."
          },
          {
            "ru": "Мне не нужно было мыть машину — её помыл брат (я не мыл).",
            "en": "I <b>didn't need to wash</b> the car — my brother had already done it.",
            "gloss": "не мыл, не было нужно",
            "say": "I didn't need to wash the car, my brother had already done it."
          },
          {
            "ru": "Ты зря волновался — всё прошло хорошо (волновался).",
            "en": "You <b>needn't have worried</b> — everything went fine.",
            "gloss": "волновался напрасно",
            "say": "You needn't have worried, everything went fine."
          }
        ],
        "mistakes": [
          {
            "wrong": "I didn't need to cook (имея в виду «наготовил зря»)",
            "right": "I <b>needn't have cooked</b>",
            "why": "если действие БЫЛО сделано напрасно → needn't have done"
          },
          {
            "wrong": "I needn't have washed the car (имея в виду «не мыл — не пришлось»)",
            "right": "I <b>didn't need to wash</b> the car",
            "why": "если НЕ делал, потому что было не нужно → didn't need to do"
          }
        ],
        "mnemonic": "🔀 needn't have done = сделал зря. didn't need to do = не делал — было незачем.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> действие БЫЛО сделано — и оказалось напрасным.",
            "q": "Помыл машину, и тут же дождь. «Зря я её помыл» —",
            "opts": [
              "I didn't need to wash the car",
              "I needn't have washed the car",
              "I mustn't have washed the car"
            ],
            "answer": 1,
            "explain": "Помыл, но напрасно → <b>needn't have washed</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> действие НЕ делали, потому что было незачем.",
            "q": "Брат уже помыл машину. «Мне не пришлось её мыть» —",
            "opts": [
              "I needn't have washed the car",
              "I didn't need to wash the car"
            ],
            "answer": 1,
            "explain": "Не мыл, не было нужно → <b>didn't need to wash</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши «волновался напрасно». worry → worried.",
            "q": "Ты зря волновался — всё прошло хорошо.",
            "accept": [
              "you needn't have worried everything went fine",
              "you needn't have worried",
              "you needn't have worried, everything went fine"
            ],
            "placeholder": "You needn't have ... — everything went fine"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · упущенная возможность",
        "title": "Мог бы — <em>could have + 3-я форма</em> (и форма без ошибок)",
        "paras": [
          "<b>could have + 3-я форма</b> — про упущенную возможность или альтернативу в прошлом: «мог бы (но не сделал)». «Ты мог бы мне помочь» (а не помог) → <b>You could have helped me.</b> Часто звучит как мягкий упрёк или «было и другое решение».",
          "Сравни весь набор дня на одном примере. Опоздал на самолёт: <b>I should have checked the time</b> (надо было — моя вина) · <b>I could have taken an earlier flight</b> (был и другой вариант) · <b>I shouldn't have stopped for coffee</b> (зря задержался) · <b>I needn't have rushed at the end</b> (под конец спешил зря).",
          "И главная техническая ловушка: после <b>have</b> идёт <u>правильная</u> 3-я форма. <b>should have gone</b> (не «went»), <b>could have done</b> (не «did»), <b>shouldn't have eaten</b> (не «ate»). «should have went» — типичная ошибка даже у носителей, но это ошибка."
        ],
        "audio": "could have плюс третья форма — про упущенную возможность или альтернативу в прошлом: мог бы, но не сделал. Ты мог бы мне помочь, а не помог: You could have helped me. Сравни весь набор на примере опоздания на самолёт. I should have checked the time — надо было, моя вина. I could have taken an earlier flight — был другой вариант. I shouldn't have stopped for coffee — зря задержался. I needn't have rushed at the end — спешил зря. И ловушка: после have идёт правильная третья форма. should have gone, не went. could have done, не did.",
        "table": {
          "rows": [
            [
              "could have + 3-я форма",
              "мог бы / был другой вариант (но не сделал)"
            ],
            [
              "should have gone ✓",
              "не «should have went» ✗"
            ],
            [
              "couldn't have done better",
              "лучше было невозможно (без вины)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Ты мог бы мне помочь (а не помог).",
            "en": "You <b>could have helped</b> me.",
            "gloss": "упущенная возможность",
            "say": "You could have helped me."
          },
          {
            "ru": "Мы могли бы поехать на более раннем поезде.",
            "en": "We <b>could have taken</b> an earlier train.",
            "gloss": "была альтернатива, take → taken",
            "say": "We could have taken an earlier train."
          },
          {
            "ru": "Надо было пойти на ту встречу.",
            "en": "I <b>should have gone</b> to that meeting.",
            "gloss": "правильно gone, не «went»",
            "say": "I should have gone to that meeting."
          }
        ],
        "mistakes": [
          {
            "wrong": "I should have went there",
            "right": "I <b>should have gone</b> there",
            "why": "после have — правильная 3-я форма: go → gone"
          },
          {
            "wrong": "You could have ate before we left",
            "right": "You <b>could have eaten</b> before we left",
            "why": "eat → eaten, не «ate», после have"
          }
        ],
        "mnemonic": "🪜 could have done = был и другой путь. И всегда правильная 3-я форма: gone, eaten, taken.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> упущенная альтернатива в прошлом.",
            "q": "«Мы могли бы поехать на более раннем поезде» —",
            "opts": [
              "We could take an earlier train",
              "We could have taken an earlier train",
              "We should take an earlier train"
            ],
            "answer": 1,
            "explain": "Был другой вариант → <b>could have taken</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> почини 3-ю форму после have.",
            "q": "Выбери верное: «Надо было туда пойти».",
            "opts": [
              "I should have went there",
              "I should have gone there"
            ],
            "answer": 1,
            "explain": "go → <b>gone</b> после have, не «went»."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери мягкий упрёк (мог бы помочь).",
            "q": "Собери: «Ты мог бы мне помочь»",
            "want": "You could have helped me",
            "answer": "You could have helped me"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Двое разбирают неудавшийся вечер. Слушай оттенки: что надо было сделать, что зря сделали и что было лишним.",
      "lines": [
        {
          "who": "A",
          "en": "The restaurant was fully booked. We should have reserved a table.",
          "ru": "Ресторан был забит. Надо было забронировать столик."
        },
        {
          "who": "B",
          "en": "I know. And I shouldn't have left it until the last minute.",
          "ru": "Знаю. И зря я тянул до последнего."
        },
        {
          "who": "A",
          "en": "Well, you needn't have apologised so much — it wasn't only your fault.",
          "ru": "Ну, ты зря так извинялся — это не только твоя вина."
        },
        {
          "who": "B",
          "en": "We could have just cooked at home, honestly.",
          "ru": "Честно говоря, мы могли бы просто приготовить дома."
        },
        {
          "who": "A",
          "en": "Next time we will. We shouldn't have made such a big plan.",
          "ru": "В следующий раз так и сделаем. Не надо было строить такие грандиозные планы."
        }
      ]
    },
    "vocab": {
      "intro": "Формы сожаления и критики плюс слова-спутники. Отметь оттенок каждой формы. Повтори вслух.",
      "items": [
        {
          "en": "should have done",
          "ru": "надо было сделать (но не сделал)",
          "ex": "I should have called you."
        },
        {
          "en": "shouldn't have done",
          "ru": "не надо было (а сделал) — зря",
          "ex": "You shouldn't have said that."
        },
        {
          "en": "needn't have done",
          "ru": "сделал, но было незачем",
          "ex": "We needn't have hurried."
        },
        {
          "en": "could have done",
          "ru": "мог бы (но не сделал)",
          "ex": "You could have helped."
        },
        {
          "en": "didn't need to do",
          "ru": "не было нужно (и не делал)",
          "ex": "I didn't need to pay."
        },
        {
          "en": "in advance",
          "ru": "заранее",
          "ex": "Book a table in advance."
        },
        {
          "en": "fault",
          "ru": "вина",
          "ex": "It wasn't your fault."
        },
        {
          "en": "regret",
          "ru": "сожаление; сожалеть",
          "ex": "My only regret is leaving early."
        },
        {
          "en": "after all",
          "ru": "в конце концов; как оказалось",
          "ex": "It was free after all."
        },
        {
          "en": "leave it until the last minute",
          "ru": "тянуть до последнего",
          "ex": "Don't leave it until the last minute."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай. Заметь оттенки сожаления: что надо было, что зря сделал, что было лишним и что было другой возможностью.",
      "title": "A regretful morning",
      "sentences": [
        "I should have set two alarms, but I only set one.",
        "I shouldn't have stayed up so late watching films.",
        "When I finally woke up, I rushed — but I needn't have hurried.",
        "The meeting had been moved, so I didn't need to come early at all.",
        "I could have checked my email before leaving the house.",
        "I shouldn't have skipped breakfast either; I felt weak by noon.",
        "I needn't have bought a coffee on the way, since the office had a machine.",
        "Next time I should plan the evening before more carefully."
      ],
      "translation": "Надо было поставить два будильника, а я поставил только один. Не надо было так поздно засиживаться за фильмами. Когда я наконец проснулся, я заторопился — хотя спешить было незачем. Встречу перенесли, так что приходить рано вообще не требовалось. Я мог бы проверить почту перед выходом из дома. И завтрак пропускать тоже не стоило: к обеду я ослаб. Зря я ещё и кофе купил по дороге — в офисе была кофемашина. В следующий раз надо тщательнее планировать вечер накануне."
    },
    "drag": {
      "intro": "Соедини форму с её точным смыслом о прошлом.",
      "pairs": [
        [
          "should have done",
          "надо было — но не сделал"
        ],
        [
          "shouldn't have done",
          "сделал — и это ошибка"
        ],
        [
          "needn't have done",
          "сделал — но было незачем"
        ],
        [
          "didn't need to do",
          "не делал — было незачем"
        ],
        [
          "could have done",
          "мог бы — был другой вариант"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка. Пять вопросов на сожаление и критику — и середина первой недели B2 позади.",
      "items": [
        {
          "q": "«Надо было выехать раньше» (но не выехали) —",
          "opts": [
            "We should leave earlier",
            "We should have left earlier",
            "We needn't have left earlier"
          ],
          "answer": 1,
          "explain": "Сожаление: правильного не сделали → <b>should have left</b>."
        },
        {
          "q": "Поезд опоздал. «Зря мы спешили» (спешили) —",
          "opts": [
            "We shouldn't have hurried",
            "We needn't have hurried",
            "We didn't need to hurry"
          ],
          "answer": 1,
          "explain": "Спешили, но напрасно → <b>needn't have hurried</b>."
        },
        {
          "q": "Что значит «I didn't need to pay»?",
          "opts": [
            "Я заплатил, хотя было незачем",
            "Платить было не нужно — и я не платил"
          ],
          "answer": 1,
          "explain": "didn't need to do = необходимости не было, действие обычно НЕ выполнено."
        },
        {
          "q": "Почини 3-ю форму: «Надо было туда пойти».",
          "opts": [
            "I should have went there",
            "I should have gone there"
          ],
          "answer": 1,
          "explain": "После have — правильная 3-я форма: go → <b>gone</b>."
        },
        {
          "q": "«Ты мог бы мне помочь» (а не помог) —",
          "opts": [
            "You could help me",
            "You could have helped me",
            "You should help me"
          ],
          "answer": 1,
          "explain": "Упущенная возможность → <b>could have helped</b>."
        }
      ]
    },
    "essay": {
      "intro": "Оглянись назад — и разбери день, который пошёл не так.",
      "prompt": "Напиши 5–6 предложений о ситуации в прошлом, о которой ты сожалеешь. Используй should(n't) have, needn't have, could have + 3-я форма. Хотя бы раз противопоставь needn't have done и didn't need to do.",
      "hint": "Структуры: I should have … ; I shouldn't have … ; I needn't have …, because … ; I didn't need to … ; I could have … instead.",
      "example": "Last weekend I should have started my project earlier instead of leaving it until Sunday night. I shouldn't have spent the whole Saturday scrolling on my phone. By the evening I panicked and rushed, but I needn't have worried so much, because the deadline was actually Monday. In fact I didn't need to submit anything on Sunday at all. I could have asked my colleague for help, and the work would have been much easier.",
      "model": "I needn't have worried so much, because the deadline was actually Monday."
    },
    "picture": {
      "intro": "Опиши сцену сожаления и скажи, что человеку надо было или не надо было делать.",
      "emoji": "🌧️🚗🪣",
      "prompt": "Опиши картинку и вырази сожаление/критику о прошлом: should have, shouldn't have, needn't have, could have + 3-я форма.",
      "hint": "Используй: He shouldn't have washed the car; he needn't have hurried; he should have checked the weather.",
      "example": "The man has just finished washing his car, and now it is pouring with rain. He should have checked the weather forecast first. He needn't have spent an hour cleaning it, because it is already covered in mud again. He could have waited until the weekend instead. Now he probably regrets the whole idea.",
      "img": "img/b2/day-04.jpg",
      "credit": "Фото: NOAASatellites · Public Domain · <a href=\"https://www.flickr.com/photos/125201706@N06/47023845154\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "5": {
    "day": 5,
    "week": "01",
    "level": "B2",
    "themeRu": "Жаль, что так",
    "themeEn": "wish + past perfect",
    "intro": "Есть чувство, для которого в русском хватает одного слова — «жаль». Вчера мы разбирали, что <b>надо было</b> сделать (should have, needn't have); сегодня — соседнее с ним, но чистое: <b>сожаление о прошлом</b>. По-английски оно живёт в обороте <b>I wish</b> и его эмоциональном близнеце <b>if only</b>. Поворот маленький, но коварный: чтобы пожалеть о <b>прошлом</b>, английский уводит глагол на шаг назад — в <b>past perfect</b> (had done). А ещё ты научишься выражать раздражение от чужого упрямства: <b>I wish you would…</b> — «ну сколько можно». Поехали.",
    "introAudio": "Есть чувство, для которого в русском хватает одного слова — жаль. Вчера мы разбирали, что надо было сделать: should have, needn't have. Сегодня соседнее с ним, но чистое — сожаление о прошлом. По-английски оно живёт в обороте I wish и его эмоциональном близнеце if only. Поворот маленький, но коварный: чтобы пожалеть о прошлом, английский уводит глагол на шаг назад, в past perfect, had done. А ещё ты научишься выражать раздражение от чужого упрямства: I wish you would, ну сколько можно. Поехали.",
    "goals": [
      "выражать сожаление о прошлом: I wish I had… / If only I had…",
      "видеть, почему «жаль, что вчера не знал» — это <b>had known</b>, а не knew",
      "жаловаться на чужое раздражающее поведение: I wish you would…",
      "не ставить лишнее «не»: «жаль, что я не позвонил» → I wish I <b>had</b> called"
    ],
    "learned": [
      "Научился(лась) выражать сожаление о прошлом: I wish I had… / If only I had…",
      "Увидел(а), почему «жаль, что вчера не знал» — это <b>had known</b>, а не knew",
      "Научился(лась) жаловаться на чужое раздражающее поведение: I wish you would…",
      "Перестал(а) ставить лишнее «не»: «жаль, что я не позвонил» → I wish I <b>had</b> called"
    ],
    "review": {
      "intro": "Сначала разомнём фундамент. Вчера были past modals; а ещё раньше, на B1, ты встречал(а) <b>wish + past simple</b> (нереальное настоящее) и <b>третий conditional</b>. Именно на них сегодня всё и встанет.",
      "introAudio": "Сначала разомнём фундамент. Вчера были past modals; а ещё раньше, на B1, ты встречал wish плюс past simple — нереальное настоящее — и третий conditional. Именно на них сегодня всё и встанет.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> сожаление о настоящем (сейчас не знаю) — какой вариант?",
          "q": "«Жаль, что я не знаю её адрес» (прямо сейчас) —",
          "opts": [
            "I wish I know her address",
            "I wish I knew her address",
            "I wish I had known her address"
          ],
          "answer": 1,
          "explain": "Нереальное <b>настоящее</b> → wish + past simple: <b>knew</b>. (had known — это уже про прошлое.)"
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> собери третий conditional (но в реальности я не знал).",
          "q": "Собери: «Если бы я знал, я бы помог»",
          "want": "If I had known I would have helped",
          "answer": "If I had known I would have helped"
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши третий conditional. come → had come.",
          "q": "Если бы ты пришёл раньше, ты бы её увидел.",
          "accept": [
            "if you had come earlier you would have seen her"
          ],
          "placeholder": "If you had come earlier ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · сожаление о прошлом",
        "title": "«Жаль, что так вышло» — <em>I wish + had done</em>",
        "paras": [
          "Вчерашнее «жаль» (should have done) звучало как упрёк себе. Сегодняшнее <b>I wish</b> — чище и личнее: просто «как жаль, что в прошлом было так, а не иначе».",
          "Правило одного шага назад: о <b>настоящем</b> жалеют через past simple (I wish I <b>knew</b> — жаль, что не знаю сейчас); о <b>прошлом</b> — на шаг глубже, через <b>past perfect</b>: <b>I wish I had known</b> — жаль, что тогда не знал.",
          "<b>I wish I had studied</b> medicine. = Жаль, что я не пошёл в медицину. <b>She wishes she hadn't sold</b> the flat. = Она жалеет, что продала квартиру. Это родная сестра третьего conditional: <i>If I had studied medicine, I would have a different life now.</i>"
        ],
        "audio": "Вчерашнее «жаль», should have done, звучало как упрёк себе. Сегодняшнее I wish чище и личнее. Правило одного шага назад: о настоящем жалеют через past simple — I wish I knew, жаль, что не знаю сейчас; о прошлом на шаг глубже, через past perfect — I wish I had known, жаль, что тогда не знал.",
        "table": {
          "rows": [
            [
              "о настоящем",
              "I wish I knew (past simple)"
            ],
            [
              "о прошлом",
              "I wish I had known (past perfect)"
            ],
            [
              "сокращённо",
              "I wish I'd known · she'd gone"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Жаль, что я не сохранил тот файл.",
            "en": "I <b>wish</b> I <b>had saved</b> that file.",
            "gloss": "had + saved",
            "say": "I wish I had saved that file."
          },
          {
            "ru": "Жаль, что мы не выехали раньше.",
            "en": "I wish we <b>had left</b> earlier.",
            "gloss": "had + left",
            "say": "I wish we had left earlier."
          },
          {
            "ru": "Он жалеет, что бросил университет.",
            "en": "He wishes he <b>hadn't dropped out</b> of university.",
            "gloss": "hadn't + dropped out",
            "say": "He wishes he hadn't dropped out of university."
          }
        ],
        "mistakes": [
          {
            "wrong": "I wish I knew that yesterday",
            "right": "I wish I <b>had known</b> that yesterday",
            "why": "есть «yesterday» → прошлое → past perfect, не past simple"
          },
          {
            "wrong": "I wish I would have studied harder",
            "right": "I wish I <b>had studied</b> harder",
            "why": "после wish о прошлом — had done, без would have"
          }
        ],
        "mnemonic": "🕰️ О прошлом жалеешь — уходи на шаг назад: wish + had done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сожаление о прошлом утре.",
            "q": "«Жаль, что я не взял зонт» (утром, в прошлом) —",
            "opts": [
              "I wish I take an umbrella",
              "I wish I took an umbrella",
              "I wish I had taken an umbrella"
            ],
            "answer": 2,
            "explain": "Сожаление о прошлом → wish + past perfect: <b>had taken</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери сожаление о прошлом.",
            "q": "Собери: «Жаль, что мы не забронировали столик»",
            "want": "I wish we had booked a table",
            "answer": "I wish we had booked a table"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши сожаление. В реальности машину продал.",
            "q": "Жаль, что я продал машину.",
            "accept": [
              "i wish i hadn't sold my car",
              "i wish i had not sold my car"
            ],
            "placeholder": "I wish I ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · сильнее, чем wish",
        "title": "<em>If only</em> — то же чувство, но громче",
        "paras": [
          "<b>If only</b> — тот же оборот сожаления, что и <b>I wish</b>, но эмоционально сильнее: «ах, если бы только…». Конструкция один в один: <b>if only + past perfect</b> для прошлого.",
          "<b>If only I had listened</b> to you! = Ах, если бы я только тебя послушал! Часто стоит отдельным восклицанием, без второй части — само сожаление и есть мысль.",
          "Для настоящего работает как wish: <b>If only I had</b> more time (сейчас) — past simple; <b>If only I had had</b> more time (тогда) — past perfect. Да, <b>had had</b> — это нормально и грамотно."
        ],
        "audio": "If only — тот же оборот сожаления, что и I wish, но эмоционально сильнее: ах, если бы только. Конструкция один в один: if only плюс past perfect для прошлого. If only I had listened to you! Часто стоит отдельным восклицанием, без второй части.",
        "table": {
          "rows": [
            [
              "If only + past simple",
              "сожаление о настоящем"
            ],
            [
              "If only + past perfect",
              "сожаление о прошлом"
            ],
            [
              "восклицание",
              "If only I'd known!"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Ах, если бы я только сделал резервную копию!",
            "en": "<b>If only</b> I <b>had made</b> a backup!",
            "gloss": "if only + had made",
            "say": "If only I had made a backup!"
          },
          {
            "ru": "Если бы мы только выехали вовремя.",
            "en": "If only we <b>had left</b> on time.",
            "say": "If only we had left on time."
          },
          {
            "ru": "Если бы у меня тогда было больше опыта.",
            "en": "If only I <b>had had</b> more experience back then.",
            "gloss": "had had — это норма",
            "say": "If only I had had more experience back then."
          }
        ],
        "mistakes": [
          {
            "wrong": "If only I would have known",
            "right": "If only I <b>had</b> known",
            "why": "после if only — had done, не would have"
          },
          {
            "wrong": "If only I knew that last week",
            "right": "If only I <b>had known</b> that last week",
            "why": "«last week» = прошлое → past perfect"
          }
        ],
        "mnemonic": "💔 If only = wish с восклицательным знаком: if only + had done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> самое эмоциональное сожаление о прошлом.",
            "q": "«Ах, если бы я только спросил!» —",
            "opts": [
              "If only I asked!",
              "If only I had asked!",
              "If only I would ask!"
            ],
            "answer": 1,
            "explain": "Сожаление о прошлом → if only + past perfect: <b>had asked</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери восклицание сожаления.",
            "q": "Собери: «Если бы мы только знали раньше»",
            "want": "If only we had known sooner",
            "answer": "If only we had known sooner"
          },
          {
            "type": "speak",
            "howto": "<b>Что делать:</b> произнеси с чувством. I'd = I had.",
            "target": "If only I had listened to you.",
            "sub": "Ах, если бы я только тебя послушал.",
            "want": "had listened"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "«Жаль, что НЕ…» — куда девается «не»",
        "paras": [
          "Здесь русский ставит подножку. По-русски сожаление почти всегда звучит с «не»: «жаль, что я <b>не</b> позвонил», «жаль, что я <b>не</b> остался». Дословный перевод тянет добавить <b>not</b> — и это ошибка.",
          "Логика английского: <b>wish</b> переворачивает реальность. Реальность «я не позвонил» (didn't call) → желание «вот бы я позвонил» → <b>I wish I had called</b> (без not!). И наоборот: реальность «я сказал это» → сожаление → <b>I wish I hadn't said it</b>.",
          "Проверка: что было на самом деле? Если действия <b>не было</b> → в wish оно <b>появляется</b> (had done). Если действие <b>было</b> и ты жалеешь → добавляешь <b>hadn't</b>."
        ],
        "audio": "Здесь русский ставит подножку. По-русски сожаление почти всегда звучит с «не»: жаль, что я не позвонил. Дословный перевод тянет добавить not — и это ошибка. wish переворачивает реальность. Реальность: я не позвонил, didn't call. Желание: I wish I had called, без not. И наоборот: реальность я сказал это, сожаление I wish I hadn't said it.",
        "table": {
          "rows": [
            [
              "реальность: не позвонил",
              "I wish I had called (жаль, что не позвонил)"
            ],
            [
              "реальность: сказал это",
              "I wish I hadn't said it (жаль, что сказал)"
            ],
            [
              "правило",
              "wish переворачивает полярность"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Жаль, что я не остался подольше. (в реальности — уехал)",
            "en": "I wish I <b>had stayed</b> longer.",
            "gloss": "не остался → had stayed",
            "say": "I wish I had stayed longer."
          },
          {
            "ru": "Жаль, что я согласился. (в реальности — согласился)",
            "en": "I wish I <b>hadn't agreed</b>.",
            "gloss": "согласился → hadn't agreed",
            "say": "I wish I hadn't agreed."
          },
          {
            "ru": "Жаль, что я не подал заявку. (не подал)",
            "en": "I wish I <b>had applied</b>.",
            "gloss": "не подал → had applied",
            "say": "I wish I had applied."
          }
        ],
        "mistakes": [
          {
            "wrong": "I wish I had not called her (имея в виду «жаль, что не позвонил»)",
            "right": "I wish I <b>had called</b> her",
            "why": "русское «не» уже учтено переворотом — второго not не нужно"
          },
          {
            "wrong": "I wish I didn't say that",
            "right": "I wish I <b>hadn't said</b> that",
            "why": "о прошлом — hadn't done, не didn't"
          }
        ],
        "mnemonic": "🔄 «Жаль, что не сделал» → I wish I HAD done (без второго «не»).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> в реальности работу НЕ сохранил.",
            "q": "«Жаль, что я не сохранил работу» —",
            "opts": [
              "I wish I hadn't saved my work",
              "I wish I had saved my work",
              "I wish I didn't save my work"
            ],
            "answer": 1,
            "explain": "Не сохранил → в wish действие появляется: <b>had saved</b> (без «не»)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> в реальности письмо отправил — и жалеешь.",
            "q": "«Жаль, что я отправил то письмо» —",
            "opts": [
              "I wish I had sent that email",
              "I wish I hadn't sent that email"
            ],
            "answer": 1,
            "explain": "Отправил и жалеешь → <b>hadn't sent</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> в реальности французский не выучил. learn → learned/learnt.",
            "q": "Жаль, что я не выучил французский.",
            "accept": [
              "i wish i had learned french",
              "i wish i had learnt french"
            ],
            "placeholder": "I wish I had ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · раздражение",
        "title": "<em>I wish you would…</em> — «ну сколько можно»",
        "paras": [
          "Есть особый wish — не о прошлом и не совсем о настоящем, а о раздражающем <b>поведении</b>, которое человек упрямо повторяет и <b>мог бы</b> изменить. Формула: <b>wish + кто-то + would + базовый глагол</b>.",
          "<b>I wish you would stop</b> interrupting me. = Сколько можно меня перебивать. <b>I wish it would stop</b> raining. = Ну когда же кончится этот дождь. Это жалоба-с-надеждой: «хоть бы ты или оно изменилось».",
          "Главное ограничение: <b>would не про себя</b>. Нельзя «I wish I would…» — своё поведение ты и так контролируешь. О себе используй <b>could</b> (I wish I could focus) или past perfect — для прошлого."
        ],
        "audio": "Есть особый wish — о раздражающем поведении, которое человек упрямо повторяет и мог бы изменить. Формула: wish плюс кто-то плюс would плюс базовый глагол. I wish you would stop interrupting me, сколько можно меня перебивать. Главное ограничение: would не про себя. О себе используй could: I wish I could focus.",
        "table": {
          "rows": [
            [
              "о чужом поведении",
              "I wish you would call back"
            ],
            [
              "о ситуации",
              "I wish it would stop raining"
            ],
            [
              "о себе — НЕ would",
              "I wish I could… (не: I wish I would)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Хоть бы ты перестал опаздывать.",
            "en": "I wish you <b>would stop</b> being late.",
            "gloss": "would + stop",
            "say": "I wish you would stop being late."
          },
          {
            "ru": "Ну когда же сосед сделает потише.",
            "en": "I wish my neighbour <b>would turn</b> the music down.",
            "say": "I wish my neighbour would turn the music down."
          },
          {
            "ru": "Жаль, что я не могу сосредоточиться. (о себе — could)",
            "en": "I wish I <b>could</b> concentrate.",
            "gloss": "о себе → could, не would",
            "say": "I wish I could concentrate."
          }
        ],
        "mistakes": [
          {
            "wrong": "I wish I would be more organised",
            "right": "I wish I <b>could be</b> more organised",
            "why": "would не про себя; о себе — could"
          },
          {
            "wrong": "I wish you would have called",
            "right": "I wish you <b>would call</b> (сейчас) / I wish you <b>had called</b> (прошлое)",
            "why": "would + база — про повторяющееся поведение, не про прошлый случай"
          }
        ],
        "mnemonic": "😤 Раздражает чужое поведение → I wish you would… (но о себе — could).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> раздражает поведение собеседника.",
            "q": "«Хоть бы ты перестал жаловаться» —",
            "opts": [
              "I wish I would stop complaining",
              "I wish you would stop complaining",
              "I wish you had stopped complaining"
            ],
            "answer": 1,
            "explain": "Раздражение от чужого поведения → I wish you <b>would</b>…"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это про себя — значит не would.",
            "q": "О себе «жаль, что не могу водить» —",
            "opts": [
              "I wish I would drive",
              "I wish I could drive"
            ],
            "answer": 1,
            "explain": "О себе — <b>could</b>, не would."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери жалобу на ситуацию.",
            "q": "Собери: «Ну когда же кончится дождь»",
            "want": "I wish it would stop raining",
            "answer": "I wish it would stop raining"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Марк и Лена разбирают вчерашний провал на работе — слушай, как сожаление о прошлом звучит вживую. Тапни по словам с подсказками.",
      "lines": [
        {
          "who": "Mark",
          "name": "Марк",
          "side": "left",
          "en": "I wish I had double-checked the figures before the meeting.",
          "ru": "Жаль, что я не перепроверил цифры перед встречей.",
          "words": [
            [
              "double-checked",
              "перепроверил"
            ],
            [
              "figures",
              "цифры, показатели"
            ]
          ]
        },
        {
          "who": "Lena",
          "name": "Лена",
          "side": "right",
          "en": "Don't be so hard on yourself. If only the client had warned us earlier.",
          "ru": "Не кори себя так. Если бы только клиент предупредил нас раньше.",
          "words": [
            [
              "hard on yourself",
              "строг к себе"
            ],
            [
              "warned",
              "предупредил"
            ]
          ]
        },
        {
          "who": "Mark",
          "name": "Марк",
          "side": "left",
          "en": "True. And honestly, I wish you would stop apologising for my mistakes!",
          "ru": "Верно. И, честно, хватит уже извиняться за мои ошибки!",
          "words": [
            [
              "apologising",
              "извиняться"
            ]
          ]
        },
        {
          "who": "Lena",
          "name": "Лена",
          "side": "right",
          "en": "Fair enough. Still, I just wish we had prepared better together.",
          "ru": "Справедливо. И всё же жаль, что мы не подготовились лучше вместе.",
          "words": [
            [
              "prepared",
              "подготовились"
            ]
          ]
        },
        {
          "who": "Mark",
          "name": "Марк",
          "side": "left",
          "en": "Agreed. If only we had time to rehearse it now.",
          "ru": "Согласен. Если бы только сейчас было время отрепетировать.",
          "words": [
            [
              "rehearse",
              "репетировать"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Лексика сожаления и упрёка — слова, с которыми wish звучит по-взрослому. Повтори вслух.",
      "items": [
        {
          "en": "to regret",
          "ru": "сожалеть; сожаление",
          "ex": "I deeply regret not taking that job."
        },
        {
          "en": "if only",
          "ru": "если бы только",
          "ex": "If only I had known sooner."
        },
        {
          "en": "in hindsight",
          "ru": "задним умом, оглядываясь назад",
          "ex": "In hindsight, I should have stayed."
        },
        {
          "en": "to double-check",
          "ru": "перепроверить",
          "ex": "I wish I had double-checked it."
        },
        {
          "en": "opportunity",
          "ru": "возможность, шанс",
          "ex": "I wish I hadn't missed that opportunity."
        },
        {
          "en": "to turn down",
          "ru": "отклонить, отказаться от",
          "ex": "I regret turning down the offer."
        },
        {
          "en": "to apologise",
          "ru": "извиняться",
          "ex": "I wish you would stop apologising."
        },
        {
          "en": "to rehearse",
          "ru": "репетировать",
          "ex": "If only we had rehearsed more."
        },
        {
          "en": "reckless",
          "ru": "безрассудный, опрометчивый",
          "ex": "I wish I hadn't been so reckless."
        },
        {
          "en": "to back up",
          "ru": "делать резервную копию",
          "ex": "I wish I had backed up my files."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай — человек оглядывается на год и жалеет о паре решений. Везде сожаление о прошлом.",
      "title": "Things I'd do differently",
      "sentences": [
        "Looking back on this year, I have a few regrets.",
        "I wish I had spoken up in that first meeting.",
        "If only I had taken the promotion when it was offered.",
        "I wish I hadn't turned it down out of fear.",
        "I also wish I had spent more time with my family.",
        "And I really wish my phone would stop distracting me!",
        "Still, in hindsight, every mistake taught me something.",
        "Next year, I won't wait for the perfect moment."
      ],
      "translation": "Оглядываясь на этот год, я о паре вещей жалею. Жаль, что я не высказался на той первой встрече. Если бы только я принял повышение, когда его предлагали. Жаль, что я отказался от него из страха. Ещё жаль, что я не провёл больше времени с семьёй. И как же я хочу, чтобы телефон перестал меня отвлекать! И всё же, задним умом, каждая ошибка чему-то меня научила. В следующем году я не буду ждать идеального момента."
    },
    "drag": {
      "intro": "Соедини английский оборот сожаления с переводом.",
      "pairs": [
        [
          "I wish I had known",
          "жаль, что не знал"
        ],
        [
          "If only I had stayed",
          "если бы только я остался"
        ],
        [
          "I wish I hadn't said it",
          "жаль, что я это сказал"
        ],
        [
          "I wish you would listen",
          "хоть бы ты слушал"
        ]
      ]
    },
    "quiz": {
      "intro": "Проверка дня: сожаление о прошлом, полярность «не» и wish + would.",
      "items": [
        {
          "q": "«Жаль, что я не сделал резервную копию» —",
          "opts": [
            "I wish I saved a backup",
            "I wish I had saved a backup",
            "I wish I would save a backup"
          ],
          "answer": 1,
          "explain": "Сожаление о прошлом → wish + past perfect: <b>had saved</b>."
        },
        {
          "q": "«Ах, если бы я только спросил!» —",
          "opts": [
            "If only I asked!",
            "If only I had asked!",
            "If only I would ask!"
          ],
          "answer": 1,
          "explain": "if only + past perfect: <b>had asked</b>."
        },
        {
          "q": "«Хоть бы сосед сделал потише» (раздражает) —",
          "opts": [
            "I wish the neighbour turned it down",
            "I wish the neighbour would turn it down",
            "I wish the neighbour had turned it down"
          ],
          "answer": 1,
          "explain": "Раздражение от чужого поведения → I wish … <b>would</b>…"
        },
        {
          "q": "О себе: «жаль, что не могу плавать» —",
          "opts": [
            "I wish I would swim",
            "I wish I could swim",
            "I wish I had swum"
          ],
          "answer": 1,
          "explain": "О себе и о настоящем — <b>could</b>, не would."
        },
        {
          "q": "«I wish I knew that yesterday» — что не так?",
          "opts": [
            "всё верно",
            "нужно had known — это про прошлое",
            "нужно would know"
          ],
          "answer": 1,
          "explain": "«yesterday» = прошлое → I wish I <b>had known</b>."
        }
      ]
    },
    "picture": {
      "intro": "Опиши по картинке, о чём человек жалеет.",
      "emoji": "🌧️☂️😔",
      "prompt": "Человек попал под ливень без зонта. Опиши его сожаление в 2–3 предложениях. Используй I wish I had… / If only… / I wish it would…",
      "hint": "Структуры: I wish I had taken an umbrella; If only I had checked the forecast; I wish it would stop raining.",
      "example": "He is soaked to the skin. He wishes he had taken an umbrella this morning. If only he had checked the forecast before leaving! And right now he just wishes it would stop raining.",
      "img": "img/b2/day-05.jpg",
      "credit": "Фото: cogdogblog · CC0 · <a href=\"https://www.flickr.com/photos/37996646802@N01/3046554894\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Твоя очередь оглянуться назад.",
      "prompt": "Напиши 4–6 предложений о решении из прошлого, о котором ты жалеешь (или наоборот, рад(а), что поступил так). Используй I wish + past perfect, if only и хотя бы один I wish … would.",
      "hint": "Структуры: I wish I had… ; If only I had… ; I wish I hadn't… ; I wish (кто-то) would… ; In hindsight, …",
      "example": "A few years ago I turned down a place at a university abroad. In hindsight, it was a mistake. I wish I had been braver and accepted it. If only I hadn't listened to everyone who told me it was too risky. I don't blame them, but I do wish they would stop bringing it up now. Still, I have learned one thing: the next opportunity is mine to take."
    }
  },
  "6": {
    "day": 6,
    "week": "01",
    "level": "B2",
    "themeRu": "to do или doing",
    "themeEn": "Meaning shift: -ing/to",
    "intro": "<b>stop smoking</b> — бросить курить. <b>stop to smoke</b> — остановиться, чтобы покурить. Одна форма разницы — целая жизнь разницы. Прошлое и сожаление позади; сегодня — изящный фокус английского. Есть горстка глаголов, после которых <b>-ing</b> и <b>to-инфинитив</b> — это не стилистика, а <b>разные смыслы</b>. Сегодня разложим семь таких глаголов по полочкам и поймаем общий принцип, который их объединяет. Поехали.",
    "introAudio": "stop smoking — бросить курить. stop to smoke — остановиться, чтобы покурить. Одна форма разницы — целая жизнь разницы. Прошлое и сожаление позади; сегодня изящный фокус английского. Есть горстка глаголов, после которых -ing и to-инфинитив — это не стилистика, а разные смыслы. Сегодня разложим семь таких глаголов по полочкам и поймаем общий принцип, который их объединяет. Поехали.",
    "goals": [
      "видеть разницу смысла: stop doing ≠ stop to do, remember doing ≠ remember to do",
      "освоить один принцип: <b>-ing</b> смотрит НАЗАД (реальное), <b>to</b> — ВПЕРЁД (цель)",
      "уверенно употреблять remember / forget / stop / try / regret / go on / mean в обоих смыслах",
      "не путать «остановился покурить» с «бросил курить»"
    ],
    "learned": [
      "Увидел(а) разницу смысла: stop doing ≠ stop to do, remember doing ≠ remember to do",
      "Освоил(а) один принцип: <b>-ing</b> смотрит НАЗАД (реальное), <b>to</b> — ВПЕРЁД (цель)",
      "Научился(лась) уверенно употреблять remember / forget / stop / try / regret / go on / mean в обоих смыслах",
      "Перестал(а) путать «остановился покурить» с «бросил курить»"
    ],
    "review": {
      "intro": "Сначала вспомним фундамент с B1: какие глаголы любят <b>-ing</b>, а какие — <b>to</b>. И заодно одним глазком глянем на reporting verbs — они вернутся на неделе 4.",
      "introAudio": "Сначала вспомним фундамент с B1: какие глаголы любят -ing, а какие to. И заодно одним глазком глянем на reporting verbs — они вернутся на неделе 4.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> enjoy любит -ing.",
          "q": "«Я люблю готовить» —",
          "opts": [
            "I enjoy to cook",
            "I enjoy cooking",
            "I enjoy cook"
          ],
          "answer": 1,
          "explain": "enjoy + <b>-ing</b>: enjoy cooking."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> decide любит to-инфинитив.",
          "q": "«Я решил остаться» —",
          "opts": [
            "I decided staying",
            "I decided to stay",
            "I decided stay"
          ],
          "answer": 1,
          "explain": "decide + <b>to</b>: decided to stay."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> hope любит to-инфинитив.",
          "q": "Собери: «Она надеется получить работу»",
          "want": "She hopes to get the job",
          "answer": "She hopes to get the job"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · принцип",
        "title": "<em>-ing</em> смотрит назад, <em>to</em> — вперёд",
        "paras": [
          "Прежде чем зубрить семь глаголов, поймай один образ — и половина запомнится сама. <b>-ing</b> почти всегда показывает на <b>реальное действие</b>: то, что уже происходит, происходило или вспоминается. <b>to-инфинитив</b> смотрит <b>вперёд</b>: на цель, намерение, на то, что ещё предстоит.",
          "Сравни: <b>I remember locking</b> the door (помню сам факт — он позади) против <b>I remembered to lock</b> the door (не забыл сделать — это была задача впереди).",
          "Этот же образ объясняет stop, try, regret, go on, mean. Держи в голове ось: <b>-ing = назад/реально</b>, <b>to = вперёд/цель</b>."
        ],
        "audio": "Прежде чем зубрить семь глаголов, поймай один образ. -ing почти всегда показывает на реальное действие: то, что уже происходит, происходило или вспоминается. to-инфинитив смотрит вперёд: на цель, намерение. I remember locking the door — помню сам факт, он позади. I remembered to lock the door — не забыл сделать, это была задача впереди.",
        "table": {
          "rows": [
            [
              "-ing",
              "реальное, уже происходит / в памяти (назад)"
            ],
            [
              "to-инфинитив",
              "цель, намерение, ещё впереди (вперёд)"
            ],
            [
              "remember doing",
              "помню сам факт (позади)"
            ],
            [
              "remember to do",
              "не забыл сделать (впереди)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я помню, как закрывал дверь.",
            "en": "I remember <b>locking</b> the door.",
            "gloss": "-ing = факт позади",
            "say": "I remember locking the door."
          },
          {
            "ru": "Я не забыл закрыть дверь.",
            "en": "I remembered <b>to lock</b> the door.",
            "gloss": "to = задача впереди",
            "say": "I remembered to lock the door."
          }
        ],
        "mistakes": [
          {
            "wrong": "I remember to meet him last year",
            "right": "I remember <b>meeting</b> him last year",
            "why": "воспоминание о прошлом → -ing"
          }
        ],
        "mnemonic": "🧭 -ing назад (реально), to вперёд (цель).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это воспоминание (позади).",
            "q": "«Я помню, как впервые увидел море» —",
            "opts": [
              "I remember to see the sea",
              "I remember seeing the sea"
            ],
            "answer": 1,
            "explain": "Воспоминание → -ing: remember <b>seeing</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это задача на будущее.",
            "q": "«Не забудь выключить плиту» —",
            "opts": [
              "Remember turning off the cooker",
              "Remember to turn off the cooker"
            ],
            "answer": 1,
            "explain": "Задача впереди → to: remember <b>to turn off</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> не забыл сделать (задача). call → to call.",
            "q": "Я не забыл позвонить ей.",
            "accept": [
              "i remembered to call her",
              "i remembered to phone her"
            ],
            "placeholder": "I remembered ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · память и обязанность",
        "title": "<em>remember / forget</em> — память против обязанности",
        "paras": [
          "<b>remember/forget + -ing</b> — про <b>память о факте</b>: действие реально было. <b>I'll never forget meeting</b> her. = Никогда не забуду, как познакомился с ней.",
          "<b>remember/forget + to do</b> — про <b>обязанность</b>: вспомнить или не вспомнить сделать то, что нужно. <b>Don't forget to call</b> the bank. = Не забудь позвонить в банк. <b>He forgot to lock</b> up. = Он забыл закрыть (и не закрыл).",
          "Разница ощутимая: <i>I forgot meeting him</i> (забыл сам факт встречи — но она была) ≠ <i>I forgot to meet him</i> (забыл прийти на встречу — её не было)."
        ],
        "audio": "remember и forget плюс -ing — про память о факте: действие реально было. I'll never forget meeting her. remember и forget плюс to do — про обязанность: вспомнить или не вспомнить сделать нужное. Don't forget to call the bank. He forgot to lock up — забыл закрыть и не закрыл.",
        "table": {
          "rows": [
            [
              "remember doing",
              "помню, что сделал (было)"
            ],
            [
              "remember to do",
              "не забыл сделать (задача)"
            ],
            [
              "forget doing",
              "забыл, что делал (но было)"
            ],
            [
              "forget to do",
              "забыл сделать (не сделал)"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я отчётливо помню, как отправлял отчёт.",
            "en": "I clearly remember <b>sending</b> the report.",
            "gloss": "-ing = факт был",
            "say": "I clearly remember sending the report."
          },
          {
            "ru": "Не забудь забронировать столик.",
            "en": "Don't forget <b>to book</b> a table.",
            "gloss": "to = задача",
            "say": "Don't forget to book a table."
          },
          {
            "ru": "Она забыла приложить файл.",
            "en": "She forgot <b>to attach</b> the file.",
            "gloss": "не приложила",
            "say": "She forgot to attach the file."
          }
        ],
        "mistakes": [
          {
            "wrong": "Don't forget calling the bank (= не забудь позвонить)",
            "right": "Don't forget <b>to call</b> the bank",
            "why": "будущая задача → to do, не -ing"
          },
          {
            "wrong": "I'll never forget to see the ocean (= не забуду, как увидел)",
            "right": "I'll never forget <b>seeing</b> the ocean",
            "why": "воспоминание → -ing"
          }
        ],
        "mnemonic": "🧠 Память назад → -ing; задача вперёд → to.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это задача на будущее.",
            "q": "«Не забудь сохранить файл» —",
            "opts": [
              "Don't forget saving the file",
              "Don't forget to save the file"
            ],
            "answer": 1,
            "explain": "Задача → to: don't forget <b>to save</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> это воспоминание о факте.",
            "q": "«Я помню, как сдавал этот экзамен» —",
            "opts": [
              "I remember taking this exam",
              "I remember to take this exam"
            ],
            "answer": 0,
            "explain": "Воспоминание → -ing: remember <b>taking</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> забыла сделать (не сделала). call back = перезвонить.",
            "q": "Она забыла мне перезвонить.",
            "accept": [
              "she forgot to call me back",
              "she forgot to phone me back"
            ],
            "placeholder": "She forgot ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · ловушка stop",
        "title": "<em>stop / go on / mean</em> — самая опасная тройка",
        "paras": [
          "<b>stop + -ing</b> = <b>прекратить</b> само действие: <b>stop smoking</b> — бросить курить. <b>stop + to do</b> = прервать одно дело, чтобы заняться другим: <b>stop to smoke</b> — остановиться, чтобы покурить. Русскому это режет ухо — следи внимательно, разница огромная.",
          "<b>go on + -ing</b> = продолжать <b>то же самое</b>: <i>He went on talking for an hour.</i> <b>go on + to do</b> = перейти к <b>следующему, новому</b>: <i>She went on to become a director.</i>",
          "<b>mean + -ing</b> = <b>влечь за собой</b> (this means working late). <b>mean + to do</b> = <b>намереваться</b> (I meant to call you). Сравни: <i>This job means travelling a lot</i> против <i>I didn't mean to upset you.</i>"
        ],
        "audio": "stop плюс -ing — прекратить само действие: stop smoking, бросить курить. stop плюс to do — прервать одно дело, чтобы заняться другим: stop to smoke, остановиться, чтобы покурить. go on doing — продолжать то же. go on to do — перейти к новому. mean doing — влечь за собой. mean to do — намереваться.",
        "table": {
          "rows": [
            [
              "stop doing",
              "бросить (прекратить)"
            ],
            [
              "stop to do",
              "остановиться, чтобы (цель)"
            ],
            [
              "go on doing",
              "продолжать то же"
            ],
            [
              "go on to do",
              "перейти к новому"
            ],
            [
              "mean doing",
              "влечь за собой"
            ],
            [
              "mean to do",
              "намереваться"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он бросил курить в прошлом году.",
            "en": "He <b>stopped smoking</b> last year.",
            "gloss": "бросил",
            "say": "He stopped smoking last year."
          },
          {
            "ru": "По дороге мы остановились, чтобы выпить кофе.",
            "en": "On the way we <b>stopped to have</b> a coffee.",
            "gloss": "остановились ради",
            "say": "On the way we stopped to have a coffee."
          },
          {
            "ru": "Она потом стала директором.",
            "en": "She <b>went on to become</b> a director.",
            "gloss": "перешла к новому",
            "say": "She went on to become a director."
          },
          {
            "ru": "Я не хотел тебя обидеть.",
            "en": "I didn't <b>mean to upset</b> you.",
            "gloss": "намерение",
            "say": "I didn't mean to upset you."
          }
        ],
        "mistakes": [
          {
            "wrong": "He stopped to smoke last year (= бросил)",
            "right": "He <b>stopped smoking</b> last year",
            "why": "бросить привычку → stop + -ing"
          },
          {
            "wrong": "This job means to travel a lot",
            "right": "This job <b>means travelling</b> a lot",
            "why": "«влечёт за собой» → mean + -ing"
          }
        ],
        "mnemonic": "🚭 Бросил → stop doing. Остановился ради → stop to do.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> бросил привычку.",
            "q": "«Он бросил пить кофе» —",
            "opts": [
              "He stopped to drink coffee",
              "He stopped drinking coffee"
            ],
            "answer": 1,
            "explain": "Бросить → stop + -ing: stopped <b>drinking</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> прервались ради цели.",
            "q": "«Мы остановились, чтобы сфотографировать» —",
            "opts": [
              "We stopped taking photos",
              "We stopped to take photos"
            ],
            "answer": 1,
            "explain": "Цель прерывания → stop + to: stopped <b>to take</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «означает / влечёт за собой».",
            "q": "«Эта работа означает частые переезды» —",
            "opts": [
              "This job means moving often",
              "This job means to move often"
            ],
            "answer": 0,
            "explain": "Влечёт за собой → mean + -ing: means <b>moving</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> «намеревался» → mean to do.",
            "q": "Собери: «Я не хотел тебя обидеть»",
            "want": "I didn't mean to upset you",
            "answer": "I didn't mean to upset you"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · попытка и сожаление",
        "title": "<em>try / regret</em> — эксперимент и плохая новость",
        "paras": [
          "<b>try + to do</b> = <b>стараться</b>, приложить усилие к трудному: <i>I tried to open the jar, but I couldn't.</i> <b>try + -ing</b> = <b>попробовать как эксперимент</b> (а вдруг сработает): <i>Try restarting the laptop.</i>",
          "<b>regret + -ing</b> = <b>сожалеть о сделанном</b> (действие в прошлом): <i>I regret telling him the truth.</i> <b>regret + to do</b> = формальное <b>«с сожалением сообщаю»</b> (плохая новость впереди): <i>We regret to inform you that…</i>",
          "Запомни регистр: <b>regret to inform / announce / say</b> — язык официальных писем; <b>regret + -ing</b> — живое сожаление о том, что уже произошло."
        ],
        "audio": "try плюс to do — стараться, приложить усилие к трудному: I tried to open the jar, but I couldn't. try плюс -ing — попробовать как эксперимент: Try restarting the laptop. regret плюс -ing — сожалеть о сделанном: I regret telling him the truth. regret плюс to do — формальное «с сожалением сообщаю»: We regret to inform you that.",
        "table": {
          "rows": [
            [
              "try to do",
              "стараться (усилие)"
            ],
            [
              "try doing",
              "попробовать (эксперимент)"
            ],
            [
              "regret doing",
              "сожалеть о сделанном"
            ],
            [
              "regret to say / inform",
              "с сожалением сообщать"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я старался её убедить, но не вышло.",
            "en": "I <b>tried to convince</b> her, but it didn't work.",
            "gloss": "усилие",
            "say": "I tried to convince her, but it didn't work."
          },
          {
            "ru": "Попробуй перезагрузить роутер.",
            "en": "<b>Try restarting</b> the router.",
            "gloss": "эксперимент",
            "say": "Try restarting the router."
          },
          {
            "ru": "Я жалею, что сказал ему правду.",
            "en": "I <b>regret telling</b> him the truth.",
            "gloss": "о сделанном",
            "say": "I regret telling him the truth."
          },
          {
            "ru": "С сожалением сообщаем, что ваша заявка отклонена.",
            "en": "We <b>regret to inform</b> you that your application was unsuccessful.",
            "gloss": "формальное",
            "say": "We regret to inform you that your application was unsuccessful."
          }
        ],
        "mistakes": [
          {
            "wrong": "I regret to tell him the truth (= жалею, что сказал)",
            "right": "I <b>regret telling</b> him the truth",
            "why": "сожаление о прошлом → regret + -ing"
          },
          {
            "wrong": "Try to restart it — maybe it helps (= просто попробуй)",
            "right": "<b>Try restarting</b> it",
            "why": "эксперимент «а вдруг» → try + -ing"
          }
        ],
        "mnemonic": "🧪 try doing = эксперимент; try to do = усилие. regret doing = уже жалею.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> прилагал усилие к трудному.",
            "q": "«Я старался открыть банку» —",
            "opts": [
              "I tried opening the jar",
              "I tried to open the jar"
            ],
            "answer": 1,
            "explain": "Усилие → try + to: tried <b>to open</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> эксперимент «а вдруг поможет».",
            "q": "«Попробуй добавить соли» —",
            "opts": [
              "Try adding some salt",
              "Try to add some salt"
            ],
            "answer": 0,
            "explain": "Эксперимент → try + -ing: try <b>adding</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сожаление о прошлом действии.",
            "q": "«Жалею, что доверял ему» —",
            "opts": [
              "I regret to trust him",
              "I regret trusting him"
            ],
            "answer": 1,
            "explain": "Сожаление о сделанном → regret + -ing: regret <b>trusting</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> сожаление о сделанном. quit → quitting.",
            "q": "Я жалею, что бросил уроки музыки.",
            "accept": [
              "i regret quitting music lessons",
              "i regret quitting my music lessons"
            ],
            "placeholder": "I regret ..."
          }
        ]
      }
    ],
    "scene": {
      "intro": "Сценка в офисе: у Дэна завис ноутбук, и он зовёт айтишника. Лови смену смысла -ing/to в живой речи.",
      "lines": [
        {
          "who": "A",
          "en": "My laptop keeps freezing. I've tried to fix it all morning.",
          "ru": "Ноут постоянно зависает. Я всё утро пытался его починить."
        },
        {
          "who": "B",
          "en": "Have you tried restarting it? Sometimes that's all it takes.",
          "ru": "А перезагрузить пробовал? Иногда этого достаточно."
        },
        {
          "who": "A",
          "en": "Of course. At least I remembered to back up my files this time.",
          "ru": "Конечно. По крайней мере, в этот раз я не забыл сделать резервную копию."
        },
        {
          "who": "B",
          "en": "Stop panicking for a second. Let's stop to think before we reinstall anything.",
          "ru": "Перестань паниковать на секунду. Давай остановимся и подумаем, прежде чем что-то переустанавливать."
        },
        {
          "who": "A",
          "en": "Fair point. I really regret not buying a new one last year.",
          "ru": "Справедливо. Очень жалею, что не купил новый в прошлом году."
        }
      ]
    },
    "vocab": {
      "intro": "Глаголы дня и их спутники. Обрати внимание на пример — он подсказывает -ing или to.",
      "items": [
        {
          "en": "to quit",
          "ru": "бросить, прекратить",
          "ex": "He quit smoking last year."
        },
        {
          "en": "to convince",
          "ru": "убедить",
          "ex": "I tried to convince her."
        },
        {
          "en": "to back up",
          "ru": "сделать резервную копию",
          "ex": "Remember to back up your files."
        },
        {
          "en": "to reinstall",
          "ru": "переустановить",
          "ex": "We stopped to think before reinstalling."
        },
        {
          "en": "to attach",
          "ru": "приложить (файл)",
          "ex": "She forgot to attach the document."
        },
        {
          "en": "to inform",
          "ru": "сообщать, информировать",
          "ex": "We regret to inform you of the delay."
        },
        {
          "en": "to involve",
          "ru": "влечь за собой, включать",
          "ex": "This role involves travelling a lot."
        },
        {
          "en": "meanwhile",
          "ru": "тем временем",
          "ex": "Meanwhile, try restarting the app."
        },
        {
          "en": "on purpose",
          "ru": "намеренно, нарочно",
          "ex": "I didn't do it on purpose; I didn't mean to."
        },
        {
          "en": "deadline",
          "ru": "крайний срок",
          "ex": "Don't forget to meet the deadline."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: короткая история о двух привычках. Следи за -ing и to.",
      "title": "The two habits",
      "sentences": [
        "Last January I decided to change two things.",
        "First, I stopped checking my phone in bed.",
        "I still remember scrolling until 2 a.m. — it was exhausting.",
        "Now I always remember to leave it in the kitchen.",
        "Second, I tried meditating for ten minutes a day.",
        "At first I meant to do it every morning, but I often forgot.",
        "I don't regret starting, though — I went on to sleep much better.",
        "If a habit is hard, try changing just one small thing."
      ],
      "translation": "В прошлом январе я решил изменить две вещи. Во-первых, я перестал проверять телефон в кровати. До сих пор помню, как листал ленту до двух ночи — это выматывало. Теперь я не забываю оставлять его на кухне. Во-вторых, я попробовал медитировать по десять минут в день. Сначала я собирался делать это каждое утро, но часто забывал. И всё же не жалею, что начал — в итоге я стал спать гораздо лучше. Если привычка даётся тяжело, попробуй изменить всего одну мелочь."
    },
    "drag": {
      "intro": "Соедини конструкцию с её смыслом.",
      "pairs": [
        [
          "stop smoking",
          "бросить курить"
        ],
        [
          "stop to smoke",
          "остановиться покурить"
        ],
        [
          "remember to call",
          "не забыть позвонить"
        ],
        [
          "remember calling",
          "помнить сам звонок"
        ]
      ]
    },
    "quiz": {
      "intro": "Проверка смыслового сдвига -ing/to. Пять вопросов.",
      "items": [
        {
          "q": "«Он бросил курить» —",
          "opts": [
            "He stopped to smoke",
            "He stopped smoking"
          ],
          "answer": 1,
          "explain": "Бросить → stop + -ing: stopped <b>smoking</b>."
        },
        {
          "q": "«Не забудь отправить отчёт» —",
          "opts": [
            "Don't forget sending the report",
            "Don't forget to send the report"
          ],
          "answer": 1,
          "explain": "Задача → to: don't forget <b>to send</b>."
        },
        {
          "q": "«Попробуй перезагрузить» (эксперимент) —",
          "opts": [
            "Try to restart it",
            "Try restarting it"
          ],
          "answer": 1,
          "explain": "Эксперимент → try + -ing: try <b>restarting</b>."
        },
        {
          "q": "«Я жалею, что сказал это» —",
          "opts": [
            "I regret saying that",
            "I regret to say that"
          ],
          "answer": 0,
          "explain": "Сожаление о прошлом → regret + -ing: regret <b>saying</b>."
        },
        {
          "q": "«Она потом стала врачом» —",
          "opts": [
            "She went on talking",
            "She went on to become a doctor"
          ],
          "answer": 1,
          "explain": "Перейти к новому → go on + to: went on <b>to become</b>."
        }
      ]
    },
    "picture": {
      "intro": "Опиши по картинке, кто что делает — и не перепутай -ing/to.",
      "emoji": "🏃‍♀️☕🚶",
      "prompt": "Бегунья остановилась у кофейни. Опиши сцену в 2–3 предложениях, используя stop to do и go on doing.",
      "hint": "Структуры: She stopped to buy a coffee; she went on running; remember to…",
      "example": "She has been running all morning. Halfway through, she stopped to buy a coffee. She didn't mean to take a long break, so after a few minutes she went on running. Next time she'll remember to bring a water bottle.",
      "img": "img/b2/day-06.jpg",
      "credit": "Фото: blizzy63 · Public Domain · <a href=\"https://www.flickr.com/photos/45379817@N08/7518893500\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Расскажи о своей привычке — и используй сегодняшние глаголы по смыслу.",
      "prompt": "Напиши 4–6 предложений о привычке, которую ты бросил(а) или хочешь завести. Используй stop + -ing, try + -ing/to, remember to и regret + -ing.",
      "hint": "Структуры: I stopped… ; I tried… ; I always try to… ; I don't regret… ; Remember to…",
      "example": "Two years ago I stopped drinking coffee after lunch, and I don't regret doing it at all. At first I tried switching to green tea, which helped a little. I still have to remember to go to bed before midnight, though. I once tried to force myself to wake up at five, but I gave up after a week. Now I just try going to bed earlier instead — small changes work better for me."
    }
  },
  "7": {
    "day": 7,
    "week": "01",
    "level": "B2",
    "themeRu": "Повторение №1",
    "themeEn": "Review 1",
    "intro": "Первая глава B2 дочитана — и какая плотная. Ты собрал(а) систему рассказа (narrative tenses), длительность до точки (Past Perfect Continuous), прошлую дедукцию (must / can't / might have), сожаление и упрёк (should / needn't have, wish) и тонкий сдвиг смысла -ing/to. Сегодня ничего нового не зубрим — сводим всё вместе, тренируем извлечение из памяти и закрываем неделю мини-экзаменом. Главная развилка дня: <b>must have</b> vs <b>should have</b> vs <b>needn't have</b> — их легко перепутать. Поехали.",
    "introAudio": "Первая глава B2 дочитана, и какая плотная. Ты собрал систему рассказа, длительность до точки, прошлую дедукцию, сожаление и упрёк, и тонкий сдвиг смысла -ing/to. Сегодня ничего нового не зубрим — сводим всё вместе, тренируем извлечение из памяти и закрываем неделю мини-экзаменом. Главная развилка дня: must have против should have против needn't have — их легко перепутать. Поехали.",
    "goals": [
      "уверенно переключаться между narrative tenses и Past Perfect Continuous в рассказе",
      "не путать <b>must have</b> (дедукция), <b>should have</b> (упрёк) и <b>needn't have</b> (зря сделал)",
      "соединять сожаление: wish + past perfect, if only, третий conditional",
      "пройти мини-экзамен недели 1 и увидеть свои слабые места"
    ],
    "learned": [
      "Научился(лась) уверенно переключаться между narrative tenses и Past Perfect Continuous в рассказе",
      "Перестал(а) путать <b>must have</b> (дедукция), <b>should have</b> (упрёк) и <b>needn't have</b> (зря сделал)",
      "Научился(лась) соединять сожаление: wish + past perfect, if only, третий conditional",
      "Прошёл(шла) мини-экзамен недели 1 и увидел(а) свои слабые места"
    ],
    "review": {
      "intro": "Это день повторения — поэтому утренняя разминка длиннее обычного. Пробежимся по всем шести двигателям недели: рассказ, длительность, дедукция, упрёк, сожаление и -ing/to.",
      "introAudio": "Это день повторения — поэтому утренняя разминка длиннее обычного. Пробежимся по всем шести двигателям недели: рассказ, длительность, дедукция, упрёк, сожаление и -ing/to.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> рассказ (Д1). Что было раньше другого прошлого?",
          "q": "«Когда я пришёл, поезд уже ушёл» —",
          "opts": [
            "When I arrived, the train already left",
            "When I arrived, the train had already left",
            "When I had arrived, the train left"
          ],
          "answer": 1,
          "explain": "Более раннее прошлое → past perfect: the train <b>had</b> already <b>left</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> длительность до точки (Д2).",
          "q": "«К моменту увольнения я проработал там уже пять лет» —",
          "opts": [
            "By the time I quit, I worked there for five years",
            "By the time I quit, I had been working there for five years",
            "By the time I quit, I have been working there for five years"
          ],
          "answer": 1,
          "explain": "Процесс длился до точки в прошлом → past perfect continuous: <b>had been working</b>."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> сожаление о прошлом (Д5).",
          "q": "Собери: «Жаль, что мы не выехали раньше»",
          "want": "I wish we had left earlier",
          "answer": "I wish we had left earlier"
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> смысловой сдвиг (Д6). Бросил привычку.",
          "q": "«Он бросил курить» —",
          "opts": [
            "He stopped to smoke",
            "He stopped smoking"
          ],
          "answer": 1,
          "explain": "Бросить → stop + -ing: stopped <b>smoking</b>."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> третий conditional (Д5). know → had known.",
          "q": "Если бы я знал, я бы тебе сказал.",
          "accept": [
            "if i had known i would have told you",
            "if i'd known i would have told you",
            "if i'd known i'd have told you",
            "if i had known i'd have told you",
            "if i had known i would've told you",
            "if i'd known i would've told you"
          ],
          "placeholder": "If I had known ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Сборка 1 · система рассказа",
        "title": "Рассказ во времени: четыре передачи (Д1–Д2)",
        "paras": [
          "В хорошем рассказе о прошлом работают четыре «передачи». <b>Past Simple</b> двигает сюжет (I arrived). <b>Past Continuous</b> рисует фон (it was raining). <b>Past Perfect</b> отступает в более раннее прошлое (the train had left). <b>Past Perfect Continuous</b> показывает длительность до точки (I had been waiting for an hour).",
          "Русский вид (сов./несов.) эту систему жёстко не передаёт — поэтому держи правило: то, что случилось <b>раньше</b> другого прошлого, уходит в <b>had done</b>; а если важна <b>длительность</b> того раннего действия — в <b>had been doing</b>.",
          "<i>I was tired because I had been running.</i> (процесс) против <i>I was happy because I had run a marathon.</i> (результат) — почувствуй разницу."
        ],
        "audio": "В хорошем рассказе о прошлом работают четыре передачи. Past Simple двигает сюжет — I arrived. Past Continuous рисует фон — it was raining. Past Perfect отступает в более раннее прошлое — the train had left. Past Perfect Continuous показывает длительность до точки — I had been waiting for an hour.",
        "table": {
          "rows": [
            [
              "Past Simple",
              "сюжет: I arrived"
            ],
            [
              "Past Continuous",
              "фон: it was raining"
            ],
            [
              "Past Perfect",
              "раньше (результат): had left"
            ],
            [
              "Past Perfect Continuous",
              "раньше (процесс): had been waiting"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Когда мы приехали, вечеринка уже закончилась.",
            "en": "When we arrived, the party <b>had</b> already <b>finished</b>.",
            "gloss": "раньше → had done",
            "say": "When we arrived, the party had already finished."
          },
          {
            "ru": "Шёл дождь, и я промок, потому что бежал.",
            "en": "It <b>was raining</b>, and I was wet because I <b>had been running</b>.",
            "gloss": "фон + процесс до точки",
            "say": "It was raining, and I was wet because I had been running."
          }
        ],
        "mistakes": [
          {
            "wrong": "When I came, he already went home",
            "right": "When I came, he <b>had</b> already <b>gone</b> home",
            "why": "более раннее прошлое → past perfect"
          }
        ],
        "mnemonic": "🎞️ Сюжет → simple; фон → continuous; раньше → had done / had been doing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> длинный фон, на котором случилось короткое действие.",
            "q": "«Я готовил, когда зазвонил телефон» —",
            "opts": [
              "I cooked when the phone rang",
              "I was cooking when the phone rang"
            ],
            "answer": 1,
            "explain": "Фон → past continuous: <b>was cooking</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> процесс длился до точки в прошлом.",
            "q": "Собери: «Я устал, потому что бегал»",
            "want": "I was tired because I had been running",
            "answer": "I was tired because I had been running"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> длительность к моменту в прошлом.",
            "q": "«К полудню она печатала уже три часа» —",
            "opts": [
              "By noon she was typing for three hours",
              "By noon she had been typing for three hours"
            ],
            "answer": 1,
            "explain": "Длительность к точке → past perfect continuous: <b>had been typing</b>."
          }
        ]
      },
      {
        "eyebrow": "Сборка 2 · ловушка недели",
        "title": "<em>must have</em> vs <em>should have</em> vs <em>needn't have</em>",
        "paras": [
          "Три оборота с похожим хвостом <b>have + 3-я форма</b>, но смыслы разные — вот ось дня. <b>must have done</b> = <b>дедукция</b>: уверен, что так было («наверняка он забыл»). <b>should have done</b> = <b>упрёк или сожаление</b>: правильно было сделать, но не сделали («надо было позвонить»).",
          "<b>needn't have done</b> = сделал, <b>но зря</b> (это было не нужно): <i>You needn't have cooked — we ate on the way.</i> Не путай с <b>didn't need to do</b> (не нужно было — и, как правило, не делал).",
          "И зеркало дедукции: <b>can't have done</b> = уверен, что этого <b>не</b> было («не может быть, что он это сказал»); <b>might / could have done</b> = возможно, было."
        ],
        "audio": "Три оборота с похожим хвостом have плюс третья форма, но смыслы разные. must have done — дедукция: уверен, что так было. should have done — упрёк или сожаление: надо было сделать, но не сделали. needn't have done — сделал, но зря. can't have done — уверен, что этого не было. might have done — возможно, было.",
        "table": {
          "rows": [
            [
              "must have done",
              "наверняка было (дедукция)"
            ],
            [
              "can't have done",
              "точно не было (дедукция)"
            ],
            [
              "should have done",
              "надо было (упрёк)"
            ],
            [
              "needn't have done",
              "сделал зря (было не нужно)"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Наверняка ты вымотался после такого дня.",
            "en": "You <b>must have been</b> exhausted after a day like that.",
            "gloss": "дедукция",
            "say": "You must have been exhausted after a day like that."
          },
          {
            "ru": "Надо было сделать резервную копию.",
            "en": "I <b>should have made</b> a backup.",
            "gloss": "упрёк себе",
            "say": "I should have made a backup."
          },
          {
            "ru": "Зря ты покупал билеты — у меня уже были.",
            "en": "You <b>needn't have bought</b> the tickets — I already had some.",
            "gloss": "сделал зря",
            "say": "You needn't have bought the tickets — I already had some."
          },
          {
            "ru": "Не может быть, что она забыла.",
            "en": "She <b>can't have forgotten</b>.",
            "gloss": "уверен, что нет",
            "say": "She can't have forgotten."
          }
        ],
        "mistakes": [
          {
            "wrong": "You shouldn't have called me (= зря позвонил)",
            "right": "You <b>needn't have</b> called me",
            "why": "«сделал зря» → needn't have done"
          },
          {
            "wrong": "He must have went home",
            "right": "He must have <b>gone</b> home",
            "why": "после have — 3-я форма (gone), не went"
          }
        ],
        "mnemonic": "⚖️ must have = наверняка; should have = надо было; needn't have = зря сделал.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> уверенный вывод о прошлом.",
            "q": "«Наверняка он пропустил автобус» —",
            "opts": [
              "He should have missed the bus",
              "He must have missed the bus",
              "He needn't have missed the bus"
            ],
            "answer": 1,
            "explain": "Дедукция → <b>must have</b> missed."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сделал, но это было не нужно.",
            "q": "«Зря я волновался — всё прошло гладко» —",
            "opts": [
              "I shouldn't have worried",
              "I needn't have worried",
              "I can't have worried"
            ],
            "answer": 1,
            "explain": "Волновался, а нужды не было → <b>needn't have</b> worried."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> упрёк себе — правильно было сделать.",
            "q": "«Надо было тебя предупредить» —",
            "opts": [
              "I must have warned you",
              "I should have warned you",
              "I needn't have warned you"
            ],
            "answer": 1,
            "explain": "Упрёк/сожаление → <b>should have</b> warned."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> уверен, что НЕ было. say → said.",
            "q": "Не может быть, что она это сказала.",
            "accept": [
              "she can't have said that",
              "she cannot have said that"
            ],
            "placeholder": "She can't have ..."
          }
        ]
      },
      {
        "eyebrow": "Сборка 3 · нереальное прошлое",
        "title": "Сожаление в трёх формах: wish · if only · 3rd conditional",
        "paras": [
          "Сожаление о прошлом носит три «костюма», но тело одно — <b>past perfect</b>. <b>I wish I had done</b> it. <b>If only I had done</b> it. <b>If I had done it, things would have been different.</b>",
          "Помни про русскую полярность: «жаль, что я <b>не</b> сделал» → <b>I wish I had done</b> (без второго «не»). А раздражение от чужого поведения — особый wish: <b>I wish you would…</b> (но не про себя)."
        ],
        "audio": "Сожаление о прошлом носит три костюма, но тело одно — past perfect. I wish I had done it. If only I had done it. If I had done it, things would have been different. Помни про русскую полярность: жаль, что я не сделал — I wish I had done, без второго «не».",
        "table": {
          "rows": [
            [
              "I wish I had done",
              "жаль, что (не) сделал"
            ],
            [
              "If only I had done",
              "если бы только сделал"
            ],
            [
              "If I had…, I would have…",
              "третий conditional"
            ],
            [
              "I wish you would…",
              "раздражение (чужое поведение)"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Жаль, что я не принял то предложение.",
            "en": "I <b>wish</b> I <b>had accepted</b> that offer.",
            "gloss": "не принял → had accepted",
            "say": "I wish I had accepted that offer."
          },
          {
            "ru": "Если бы я тогда послушал, я бы не потерял деньги.",
            "en": "<b>If</b> I <b>had listened</b>, I <b>wouldn't have lost</b> the money.",
            "gloss": "3rd conditional",
            "say": "If I had listened, I wouldn't have lost the money."
          }
        ],
        "mistakes": [
          {
            "wrong": "I wish I had not called her (= жаль, что не позвонил)",
            "right": "I wish I <b>had called</b> her",
            "why": "полярность: русское «не» уже учтено"
          }
        ],
        "mnemonic": "💭 Прошлое-сожаление = past perfect в трёх костюмах.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сожаление о прошлом (в реальности не сохранил).",
            "q": "«Жаль, что я не сохранил черновик» —",
            "opts": [
              "I wish I saved the draft",
              "I wish I had saved the draft",
              "I wish I would save the draft"
            ],
            "answer": 1,
            "explain": "Сожаление о прошлом → wish + past perfect: <b>had saved</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери третий conditional.",
            "q": "Собери: «Если бы ты спросил, я бы помог»",
            "want": "If you had asked I would have helped",
            "answer": "If you had asked I would have helped"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> раздражение от чужого поведения.",
            "q": "«Хоть бы ты перестал опаздывать» —",
            "opts": [
              "I wish I would stop being late",
              "I wish you would stop being late",
              "I wish you had stopped being late"
            ],
            "answer": 1,
            "explain": "Раздражение → I wish you <b>would</b>…"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Сценка-разбор: коллеги выясняют, что вчера пошло не так на онлайн-презентации. Считай, сколько грамматики недели 1 ты узнаешь.",
      "lines": [
        {
          "who": "A",
          "en": "By the time I joined the call, the client had already left.",
          "ru": "К тому моменту, как я подключился, клиент уже вышел."
        },
        {
          "who": "B",
          "en": "He must have been annoyed. We should have started on time.",
          "ru": "Он наверняка был раздражён. Надо было начать вовремя."
        },
        {
          "who": "A",
          "en": "And I'd been preparing those slides all night, too.",
          "ru": "А я ведь готовил эти слайды всю ночь."
        },
        {
          "who": "B",
          "en": "You needn't have stayed up — the old version was perfectly fine.",
          "ru": "Зря ты не спал — старая версия была вполне нормальной."
        },
        {
          "who": "A",
          "en": "I know. I wish I had just gone to bed.",
          "ru": "Знаю. Жаль, что я просто не лёг спать."
        },
        {
          "who": "B",
          "en": "Next time, let's remember to send the link earlier.",
          "ru": "В следующий раз давай не забудем отправить ссылку пораньше."
        }
      ]
    },
    "vocab": {
      "intro": "Ключевые формы и обороты недели — повтори вслух перед тестом.",
      "items": [
        {
          "en": "had already left",
          "ru": "уже ушёл (past perfect)",
          "ex": "The train had already left."
        },
        {
          "en": "had been waiting",
          "ru": "уже ждал (некоторое время)",
          "ex": "I had been waiting for an hour."
        },
        {
          "en": "must have been",
          "ru": "наверняка был (дедукция)",
          "ex": "You must have been tired."
        },
        {
          "en": "can't have",
          "ru": "не может быть, что (дедукция)",
          "ex": "She can't have forgotten."
        },
        {
          "en": "should have",
          "ru": "надо было (упрёк)",
          "ex": "I should have called."
        },
        {
          "en": "needn't have",
          "ru": "зря (сделал)",
          "ex": "You needn't have worried."
        },
        {
          "en": "I wish I had",
          "ru": "жаль, что (не) …",
          "ex": "I wish I had known."
        },
        {
          "en": "if only",
          "ru": "если бы только",
          "ex": "If only I had listened."
        },
        {
          "en": "to stay up",
          "ru": "не ложиться спать допоздна",
          "ex": "You needn't have stayed up."
        },
        {
          "en": "in hindsight",
          "ru": "задним умом, оглядываясь назад",
          "ex": "In hindsight, it was a mistake."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек подводит итог трудной недели. Здесь собрана вся грамматика дней 1–6.",
      "title": "What a week",
      "sentences": [
        "By Friday I was exhausted, and I had been working late every night.",
        "On Monday the system crashed; someone must have deleted the backup.",
        "I should have checked it earlier, but I didn't.",
        "I needn't have panicked, though — the IT team recovered everything.",
        "I wish I had asked for help sooner instead of trying to fix it alone.",
        "If only I had remembered to save my own work too!",
        "Still, I stopped blaming myself and went on to finish the report.",
        "Next week I'll try delegating more."
      ],
      "translation": "К пятнице я был вымотан и всю неделю работал допоздна. В понедельник система рухнула; кто-то наверняка удалил резервную копию. Надо было проверить её раньше, но я не проверил. Хотя зря я паниковал — айтишники всё восстановили. Жаль, что я не попросил помощи раньше, вместо того чтобы чинить всё в одиночку. Если бы только я ещё и не забыл сохранить свою работу! И всё же я перестал себя винить и в итоге дописал отчёт. На следующей неделе попробую больше делегировать."
    },
    "drag": {
      "intro": "Соедини оборот с его смыслом — это ядро недели.",
      "pairs": [
        [
          "must have done",
          "наверняка было"
        ],
        [
          "should have done",
          "надо было"
        ],
        [
          "needn't have done",
          "сделал зря"
        ],
        [
          "had been doing",
          "длилось до момента"
        ]
      ]
    },
    "quiz": {
      "intro": "Мини-экзамен недели 1. Шесть вопросов на всё: рассказ, длительность, дедукция, упрёк, сожаление и -ing/to.",
      "items": [
        {
          "q": "«Когда я пришёл, все уже ушли» —",
          "opts": [
            "When I arrived, everyone already left",
            "When I arrived, everyone had already left",
            "When I had arrived, everyone left"
          ],
          "answer": 1,
          "explain": "Более раннее прошлое → past perfect: <b>had</b> already <b>left</b>."
        },
        {
          "q": "«Я ждал уже час, когда она наконец позвонила» —",
          "opts": [
            "I waited for an hour when she finally called",
            "I had been waiting for an hour when she finally called",
            "I have been waiting for an hour when she finally called"
          ],
          "answer": 1,
          "explain": "Длительность до точки в прошлом → <b>had been waiting</b>."
        },
        {
          "q": "«Зря ты готовил — мы поели по дороге» —",
          "opts": [
            "You shouldn't have cooked",
            "You needn't have cooked",
            "You can't have cooked"
          ],
          "answer": 1,
          "explain": "Сделал, а нужды не было → <b>needn't have</b> cooked."
        },
        {
          "q": "«Наверняка она пропустила сообщение» —",
          "opts": [
            "She should have missed the message",
            "She must have missed the message",
            "She needn't have missed the message"
          ],
          "answer": 1,
          "explain": "Дедукция → <b>must have</b> missed."
        },
        {
          "q": "«Жаль, что я не взял отпуск» —",
          "opts": [
            "I wish I took a holiday",
            "I wish I had taken a holiday",
            "I wish I would take a holiday"
          ],
          "answer": 1,
          "explain": "Сожаление о прошлом → wish + past perfect: <b>had taken</b>."
        },
        {
          "q": "«Он остановился, чтобы выпить воды» —",
          "opts": [
            "He stopped drinking water",
            "He stopped to drink some water"
          ],
          "answer": 1,
          "explain": "Цель прерывания → stop + to: stopped <b>to drink</b>."
        }
      ]
    },
    "picture": {
      "intro": "Заверши неделю свободной речью: разбери ситуацию на картинке.",
      "emoji": "💻😫🌙",
      "prompt": "Человек до ночи работал за ноутбуком и теперь жалеет об этом. Опиши ситуацию в 3–4 предложениях, используя had been doing, must have, should have / needn't have и I wish.",
      "hint": "Структуры: He had been working… ; he must have been exhausted ; he should have… ; he needn't have… ; he wishes he had…",
      "example": "He had been working at his laptop until the early hours. He must have been completely exhausted by midnight. In hindsight, he needn't have stayed up so late, because the deadline was on Friday. He should have asked a colleague for help, and now he wishes he had gone to bed earlier.",
      "img": "img/b2/day-07.jpg",
      "credit": "Фото: Liam McKay · CC0 · <a href=\"https://stocksnap.io/photo/laptop-desk-T2VQ2QPA3R\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Итоговое письмо недели — собери в нём всю грамматику дней 1–6.",
      "prompt": "Напиши 5–7 предложений о неделе (реальной или придуманной), которая пошла не по плану. Используй narrative tenses, хотя бы один must / should / needn't have и одно сожаление (I wish / if only / 3rd conditional).",
      "hint": "Структуры: By Friday I had… ; I had been …ing ; I must have… ; I should have… ; I needn't have… ; I wish I had… ; If only…",
      "example": "Last week did not go as planned. By Wednesday I had already missed two deadlines, because I had been spending too much time on tiny details. My manager must have noticed, although she didn't say anything. In hindsight, I should have asked for help on Monday, and I certainly needn't have stayed at the office until ten every night. I wish I had been more honest about how much work there was. If only I had learned to delegate earlier! Still, I finished everything in the end, and next week I will try planning more carefully."
    }
  },
  "8": {
    "day": 8,
    "week": "02",
    "level": "B2",
    "themeRu": "Если не / при условии",
    "themeEn": "unless / provided",
    "intro": "Открываешь вторую главу B2 — неделю условий, будущего и тонких смыслов. Все четыре типа условных ты уже встречал(а), поэтому сегодня я не учу их заново, а свожу в одну ясную карту — и добавляю инструменты, которые делают речь по-настоящему точной: <b>unless</b> («если не»), <b>provided (that)</b> и <b>as long as</b> («при условии, что»), а ещё коварное <b>in case</b> («на всякий случай»). Главная засада дня в том, что русское «если» не различает «если не» и «на всякий случай» — а в английском это разные слова и разная логика. Разберёмся.",
    "introAudio": "Открываешь вторую главу B2 — неделю условий, будущего и тонких смыслов. Все четыре типа условных ты уже встречал, поэтому сегодня я не учу их заново, а свожу в одну ясную карту, и добавляю инструменты, которые делают речь по-настоящему точной: unless — если не; provided that и as long as — при условии, что; а ещё коварное in case — на всякий случай. Главная засада дня в том, что русское если не различает если не и на всякий случай, а в английском это разные слова и разная логика. Разберёмся.",
    "goals": [
      "держать в голове карту всех условных: 0 / 1 / 2 / 3 и узнавать тип по форме",
      "свободно заменять <b>if … not</b> на <b>unless</b> — без двойного отрицания",
      "ставить условие через <b>provided (that)</b> и <b>as long as</b> — «только при условии что»",
      "не путать <b>in case</b> (на всякий случай) с <b>if</b> (если)"
    ],
    "learned": [
      "Удержал(а) в голове карту всех условных: 0 / 1 / 2 / 3 и научился(лась) узнавать тип по форме",
      "Научился(лась) свободно заменять <b>if … not</b> на <b>unless</b> — без двойного отрицания",
      "Научился(лась) ставить условие через <b>provided (that)</b> и <b>as long as</b> — «только при условии что»",
      "Перестал(а) путать <b>in case</b> (на всякий случай) с <b>if</b> (если)"
    ],
    "review": {
      "intro": "Тёплая разминка по нашему always-on фундаменту — все типы условных и сожаление о прошлом (<b>wish + past perfect</b>, Д5). Сегодня мы будем достраивать именно эту систему, поэтому важно, чтобы база не плыла.",
      "introAudio": "Тёплая разминка по нашему always-on фундаменту — все типы условных и сожаление о прошлом: wish плюс past perfect из дня пять. Сегодня мы будем достраивать именно эту систему, поэтому важно, чтобы база не плыла.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> реальное условие будущего (1st conditional). Что идёт после if?",
          "q": "If the weather ___ fine, we'll set off early.",
          "opts": [
            "will be",
            "is",
            "would be"
          ],
          "answer": 1,
          "explain": "После if в реальном условии — настоящее: <b>is</b>; will живёт только в главной части."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> нереальное прошлое (3rd conditional). Выбери целую форму главной части.",
          "q": "If I had checked the forecast, I ___ an umbrella.",
          "opts": [
            "would bring",
            "would have brought",
            "had brought"
          ],
          "answer": 1,
          "explain": "3rd conditional: if + past perfect, would <b>have</b> + 3-я форма (would have brought)."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> сожаление о прошлом — wish + past perfect. take → taken.",
          "q": "Жаль, что я не взял зонт. (I wish …)",
          "accept": [
            "i wish i had taken an umbrella",
            "i wish i'd taken an umbrella"
          ],
          "placeholder": "I wish I had ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · карта условных",
        "title": "Четыре условных на одной карте",
        "paras": [
          "Прежде чем добавлять новое, соберём знакомое в систему. Все условные строятся по паре «условие (if-часть) + результат». Меняется только время — и вместе с ним смысл: от вечной истины до несбывшегося прошлого.",
          "<b>Zero</b> (if + present, … present) — всегда так, закон: <b>If you heat ice, it melts.</b> <b>First</b> (if + present, … will) — реальное будущее: <b>If it rains, we'll stay in.</b> <b>Second</b> (if + past, … would + база) — нереальное настоящее: <b>If I had time, I'd help.</b> <b>Third</b> (if + past perfect, … would have + 3-я) — нереальное прошлое: <b>If I had known, I'd have come.</b>",
          "Железное правило для всех реальных условных: <b>после if не ставим will</b> — будущее в if-части выражается настоящим. Русское «если пойдёт дождь» соблазняет сказать «if it will rain» — это ошибка."
        ],
        "audio": "Соберём знакомое в систему. Zero: if плюс present, present — закон природы. If you heat ice, it melts. First: if плюс present, will — реальное будущее. If it rains, we'll stay in. Second: if плюс past, would плюс база — нереальное настоящее. If I had time, I'd help. Third: if плюс past perfect, would have плюс третья форма — нереальное прошлое. Главное правило: после if не ставим will.",
        "table": {
          "rows": [
            [
              "0 · if + present, present",
              "вечная истина: If you heat ice, it melts."
            ],
            [
              "1 · if + present, will",
              "реальное будущее: If it rains, we'll stay in."
            ],
            [
              "2 · if + past, would + база",
              "нереальное настоящее: If I had time, I'd help."
            ],
            [
              "3 · if + past perfect, would have + 3-я",
              "нереальное прошлое: If I'd known, I'd have come."
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Если нагреть воду до 100°, она кипит.",
            "en": "If you heat water to 100°, it <b>boils</b>.",
            "gloss": "0 — закон природы",
            "say": "If you heat water to 100 degrees, it boils."
          },
          {
            "ru": "Если завтра будет ясно, мы выедем рано.",
            "en": "If it <b>is</b> clear tomorrow, we<b>'ll set</b> off early.",
            "gloss": "1 — реальное будущее (после if — present!)",
            "say": "If it is clear tomorrow, we'll set off early."
          },
          {
            "ru": "Если бы я знал об этом раньше, я бы пришёл.",
            "en": "If I <b>had known</b> earlier, I <b>would have come</b>.",
            "gloss": "3 — нереальное прошлое",
            "say": "If I had known earlier, I would have come."
          }
        ],
        "mistakes": [
          {
            "wrong": "If it will rain, we'll stay in.",
            "right": "If it <b>rains</b>, we'll stay in.",
            "why": "после if в реальном условии — present, а не will"
          },
          {
            "wrong": "If I would have time, I'd help.",
            "right": "If I <b>had</b> time, I'd help.",
            "why": "would не переходит границу if — после if только прошедшее"
          }
        ],
        "mnemonic": "🗺️ 0 закон · 1 реальное будущее · 2 нереальное сейчас · 3 нереальное вчера. После if — никогда will.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> определи тип. «Если бы у меня были деньги, я бы купил» — что это?",
            "q": "If I had the money, I would buy it. — Какой это тип?",
            "opts": [
              "First (реальное будущее)",
              "Second (нереальное настоящее)",
              "Third (нереальное прошлое)"
            ],
            "answer": 1,
            "explain": "if + past (had) + would + база → <b>Second</b>: нереальное настоящее."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери реальное условие будущего (1st). После if — present.",
            "q": "Собери: «Если ты опоздаешь, мы начнём без тебя»",
            "want": "If you are late we will start without you",
            "answer": "If you are late we will start without you"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди ОШИБКУ с will после if.",
            "q": "Где русская ловушка «if I will…»?",
            "opts": [
              "If she calls, I'll answer.",
              "If she will call, I'll answer.",
              "If she called, I'd answer."
            ],
            "answer": 1,
            "explain": "После if не ставят will: правильно <b>If she calls…</b>"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · если не",
        "title": "<em>unless</em> = if … not",
        "paras": [
          "<b>unless</b> — это компактное «если не» / «кроме случая, когда». Оно само несёт отрицание, поэтому глагол после него остаётся <b>положительным</b>: <b>You won't pass unless you study.</b> = Ты не сдашь, <b>если не</b> будешь заниматься (= if you don't study).",
          "Здесь главная ошибка русскоязычных — двойное отрицание. По-русски «если не будешь» содержит «не», и рука тянется добавить «not» ещё и после unless. Нельзя: <b>unless</b> уже = «if not». «Unless you don't study» означало бы наоборот «если не НЕ занимаешься».",
          "unless удобно для условий-исключений и предупреждений: <b>Unless you hurry, you'll miss the train.</b> — единственное, что спасёт, это поторопиться."
        ],
        "audio": "unless — это компактное «если не», кроме случая когда. Оно само несёт отрицание, поэтому глагол после него положительный. You won't pass unless you study — ты не сдашь, если не будешь заниматься. Главная ошибка — двойное отрицание: unless уже равно if not, второго «not» не нужно. Unless you hurry, you'll miss the train.",
        "table": {
          "rows": [
            [
              "unless = if … not",
              "если не / кроме случая, когда"
            ],
            [
              "глагол после unless — положительный",
              "unless you study (не «unless you don't study»)"
            ],
            [
              "You won't pass unless you study.",
              "Не сдашь, если не будешь заниматься."
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я не приду, если ты меня не пригласишь.",
            "en": "I won't come <b>unless</b> you invite me.",
            "gloss": "unless = if you don't",
            "say": "I won't come unless you invite me."
          },
          {
            "ru": "Мы не успеем на поезд, если не поторопимся.",
            "en": "We'll miss the train <b>unless</b> we hurry.",
            "gloss": "одно отрицание",
            "say": "We'll miss the train unless we hurry."
          },
          {
            "ru": "Не звони мне, если это не срочно.",
            "en": "Don't call me <b>unless</b> it's urgent.",
            "gloss": "= if it isn't urgent",
            "say": "Don't call me unless it's urgent."
          }
        ],
        "mistakes": [
          {
            "wrong": "Unless you don't hurry, you'll be late.",
            "right": "<b>Unless</b> you hurry, you'll be late.",
            "why": "unless уже = «если не»; второе «not» — двойное отрицание"
          },
          {
            "wrong": "I won't help you unless you will ask.",
            "right": "I won't help you <b>unless</b> you ask.",
            "why": "после unless, как и после if, — present, не will"
          }
        ],
        "mnemonic": "🚪 unless = «if not» в одном слове. Глагол после него — без «not».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> перепиши «if you don't» через unless. Без второго отрицания.",
            "q": "«You'll fail if you don't practise» = …",
            "opts": [
              "You'll fail unless you don't practise.",
              "You'll fail unless you practise.",
              "You'll fail unless you will practise."
            ],
            "answer": 1,
            "explain": "unless = if not → глагол положительный: <b>unless you practise</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение с unless.",
            "q": "Собери: «Я не подпишу, если не прочитаю это»",
            "want": "I won't sign it unless I read it",
            "answer": "I won't sign it unless I read it"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод через unless. urgent = срочно.",
            "q": "Не беспокой меня, если это не срочно.",
            "accept": [
              "don't disturb me unless it's urgent",
              "do not disturb me unless it is urgent",
              "don't disturb me unless it is urgent"
            ],
            "placeholder": "Don't disturb me unless ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · только при условии",
        "title": "<em>provided (that)</em> · <em>as long as</em> — строгое условие",
        "paras": [
          "Когда условие жёсткое — «только при чётком условии, и никак иначе» — англичане берут более «договорные» союзы: <b>provided (that)</b>, <b>providing (that)</b>, <b>as long as</b>, <b>on condition that</b>. Все они = «при условии, что» / «только если».",
          "<b>You can borrow my car provided (that) you drive carefully.</b> = Можешь взять мою машину при условии, что будешь аккуратно водить. <b>As long as you pay on time, there's no problem.</b> = Пока ты платишь вовремя — проблем нет.",
          "Как и после if, здесь идёт <b>настоящее время</b> для будущего смысла: provided you <b>arrive</b> (не «will arrive»). Звучат эти союзы чуть формальнее и настойчивее, чем простое if — поэтому они частые в правилах, договорах и обещаниях."
        ],
        "audio": "Когда условие жёсткое — только при чётком условии — англичане берут более договорные союзы: provided that, providing, as long as, on condition that. Все значат «при условии что», «только если». You can borrow my car provided that you drive carefully. As long as you pay on time, there's no problem. И здесь после союза — настоящее время для будущего смысла, не will.",
        "table": {
          "rows": [
            [
              "provided (that) / providing (that)",
              "при условии, что"
            ],
            [
              "as long as",
              "пока / при условии, что"
            ],
            [
              "on condition that",
              "при (строгом) условии, что"
            ],
            [
              "+ present для будущего",
              "provided you arrive (не «will arrive»)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я одолжу тебе денег при условии, что вернёшь к пятнице.",
            "en": "I'll lend you the money <b>provided that</b> you pay it back by Friday.",
            "gloss": "строгое условие",
            "say": "I'll lend you the money provided that you pay it back by Friday."
          },
          {
            "ru": "Можешь остаться, пока ведёшь себя тихо.",
            "en": "You can stay <b>as long as</b> you keep quiet.",
            "gloss": "as long as = пока / при условии",
            "say": "You can stay as long as you keep quiet."
          },
          {
            "ru": "Они согласились помочь при условии, что мы оплатим расходы.",
            "en": "They agreed to help <b>on condition that</b> we covered the costs.",
            "say": "They agreed to help on condition that we covered the costs."
          }
        ],
        "mistakes": [
          {
            "wrong": "Provided that you will come, we'll start.",
            "right": "<b>Provided that</b> you come, we'll start.",
            "why": "после provided — present, не will (как после if)"
          },
          {
            "wrong": "You can use it as long you are careful.",
            "right": "You can use it <b>as long as</b> you are careful.",
            "why": "оборот целиком — as long as, нельзя терять «as»"
          }
        ],
        "mnemonic": "🤝 provided / as long as = «только при условии что». После них — present.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму после provided that.",
            "q": "You can take the day off provided that you ___ your work first.",
            "opts": [
              "will finish",
              "finish",
              "would finish"
            ],
            "answer": 1,
            "explain": "После provided that — present: <b>finish</b> (не will finish)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери условие через as long as.",
            "q": "Собери: «Можешь остаться, пока ты помогаешь»",
            "want": "You can stay as long as you help",
            "answer": "You can stay as long as you help"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. provided that = при условии, что.",
            "q": "Я приду при условии, что меня пригласят.",
            "accept": [
              "i'll come provided that i'm invited",
              "i will come provided that i am invited",
              "i'll come provided i'm invited"
            ],
            "placeholder": "I'll come provided that ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "<em>in case</em> ≠ <em>if</em> — на всякий случай",
        "paras": [
          "Вот главная засада дня. Русское «если» соблазняет переводить <b>in case</b> как «если» — но это разные вещи. <b>in case</b> = «на всякий случай»: действие совершают <b>заранее</b>, как предосторожность, ещё ДО того, как что-то случится (и часто оно так и не случается).",
          "Сравни. <b>Take an umbrella in case it rains.</b> = Возьми зонт <b>на всякий случай</b> — берёшь его сейчас, заранее, потому что дождь возможен. А <b>I'll open the umbrella if it rains.</b> = Раскрою зонт, <b>только когда</b> реально пойдёт дождь. <b>if</b> — реакция в момент события; <b>in case</b> — подготовка до события.",
          "И как после if, тут <b>present</b>, а не will: <b>in case it rains</b> (не «in case it will rain»). Запомни: «I took my keys <b>in case</b> I came home late» — взял ключи заранее, на случай позднего возвращения."
        ],
        "audio": "Главная засада дня. Русское «если» соблазняет переводить in case как «если», но это разные вещи. in case — на всякий случай: действие делают заранее, как предосторожность, ещё до того как что-то случится. Take an umbrella in case it rains — берёшь зонт сейчас, заранее. А I'll open the umbrella if it rains — раскрою, только когда реально пойдёт дождь. if — реакция в момент; in case — подготовка до. И тут present, не will.",
        "table": {
          "rows": [
            [
              "in case it rains",
              "на всякий случай (заранее, до дождя)"
            ],
            [
              "if it rains",
              "если/когда пойдёт дождь (реакция в момент)"
            ],
            [
              "Take an umbrella in case it rains.",
              "Возьми зонт на всякий случай."
            ],
            [
              "+ present, не will",
              "in case I'm late (не «in case I will be late»)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Запиши мой номер на всякий случай.",
            "en": "Write down my number <b>in case</b> you need it.",
            "gloss": "заранее, как предосторожность",
            "say": "Write down my number in case you need it."
          },
          {
            "ru": "Я взял с собой плащ на случай, если похолодает.",
            "en": "I took a coat <b>in case</b> it got cold.",
            "gloss": "in case + past (рассказ о прошлом)",
            "say": "I took a coat in case it got cold."
          },
          {
            "ru": "Позвоню тебе, если опоздаю. (только тогда)",
            "en": "I'll call you <b>if</b> I'm late.",
            "gloss": "if — реакция в момент события",
            "say": "I'll call you if I'm late."
          }
        ],
        "mistakes": [
          {
            "wrong": "I'll take an umbrella if it rains. (= собираюсь брать только во время дождя)",
            "right": "I'll take an umbrella <b>in case</b> it rains.",
            "why": "«на всякий случай», заранее → in case, а не if"
          },
          {
            "wrong": "Take your passport in case you will need it.",
            "right": "Take your passport <b>in case</b> you need it.",
            "why": "после in case — present, не will"
          }
        ],
        "mnemonic": "☂️ in case = заранее, «на всякий случай». if = в момент, «если/когда».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «на всякий случай», как предосторожность заранее — что выбрать?",
            "q": "Save your work often ___ the computer crashes.",
            "opts": [
              "if",
              "in case",
              "unless"
            ],
            "answer": 1,
            "explain": "Сохраняешь заранее, как предосторожность → <b>in case</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> реакция в момент события, только тогда — что выбрать?",
            "q": "Call an ambulance ___ she faints.",
            "opts": [
              "if",
              "in case"
            ],
            "answer": 0,
            "explain": "Звонишь, только когда это случится → <b>if</b> (реакция в момент)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. «на всякий случай» → in case; после него — present.",
            "q": "Возьми немного денег на всякий случай.",
            "accept": [
              "take some money in case you need it",
              "take some money just in case"
            ],
            "placeholder": "Take some money in case ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Живой диалог: двое собираются в поход и обсуждают условия и предосторожности. Тапни строку для перевода, нажми на подсвеченное слово — слушай, как unless, provided и in case звучат в речи.",
      "lines": [
        {
          "who": "A",
          "name": "Dan",
          "side": "left",
          "en": "We'll set off at six, unless the storm gets worse overnight.",
          "ru": "Выйдем в шесть, если ночью буря не разыграется сильнее.",
          "words": [
            [
              "unless",
              "если не / кроме случая, когда"
            ],
            [
              "set off",
              "отправляться в путь"
            ]
          ]
        },
        {
          "who": "K",
          "name": "Kira",
          "side": "right",
          "en": "Fine, provided that you check the forecast first.",
          "ru": "Хорошо, при условии, что ты сначала проверишь прогноз.",
          "words": [
            [
              "provided that",
              "при условии, что"
            ],
            [
              "forecast",
              "прогноз погоды"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Dan",
          "side": "left",
          "en": "Done. I'll pack a spare jacket in case it gets cold up there.",
          "ru": "Сделано. Возьму запасную куртку на случай, если наверху похолодает.",
          "words": [
            [
              "in case",
              "на всякий случай"
            ],
            [
              "spare",
              "запасной"
            ]
          ]
        },
        {
          "who": "K",
          "name": "Kira",
          "side": "right",
          "en": "Good thinking. As long as we stick together, we'll be fine.",
          "ru": "Молодец. Пока держимся вместе — всё будет хорошо.",
          "words": [
            [
              "as long as",
              "пока / при условии что"
            ],
            [
              "stick together",
              "держаться вместе"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Dan",
          "side": "left",
          "en": "Agreed. And take your phone in case we lose each other.",
          "ru": "Согласен. И возьми телефон на случай, если потеряемся.",
          "words": [
            [
              "lose each other",
              "потерять друг друга"
            ]
          ]
        }
      ]
    },
    "scene": {
      "intro": "Короткая сценка: менеджер ставит условия стажёру. Слушай, как provided и unless звучат в деловой речи.",
      "lines": [
        {
          "who": "A",
          "en": "You can leave early today, provided that the report is finished.",
          "ru": "Можешь уйти сегодня пораньше при условии, что отчёт готов."
        },
        {
          "who": "B",
          "en": "It's almost done. Unless something urgent comes up, I'll send it by four.",
          "ru": "Почти готов. Если не случится ничего срочного, отправлю к четырём."
        },
        {
          "who": "A",
          "en": "Perfect. Leave me a note in case I miss the email.",
          "ru": "Отлично. Оставь мне записку на случай, если я пропущу письмо."
        },
        {
          "who": "B",
          "en": "Will do. As long as you check your messages, you won't.",
          "ru": "Сделаю. Пока ты проверяешь сообщения, не пропустишь."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — лексика условий, предосторожности и планов (B2). Повтори вслух с примерами.",
      "items": [
        {
          "en": "unless",
          "ru": "если не / кроме случая, когда",
          "ex": "We'll go unless it rains."
        },
        {
          "en": "provided (that)",
          "ru": "при условии, что",
          "ex": "I'll help provided you ask politely."
        },
        {
          "en": "as long as",
          "ru": "пока / при условии что",
          "ex": "Stay as long as you're quiet."
        },
        {
          "en": "in case",
          "ru": "на всякий случай",
          "ex": "Bring cash in case the card fails."
        },
        {
          "en": "precaution",
          "ru": "мера предосторожности",
          "ex": "We took every precaution."
        },
        {
          "en": "forecast",
          "ru": "прогноз (погоды)",
          "ex": "The forecast looks grim."
        },
        {
          "en": "set off",
          "ru": "отправляться в путь",
          "ex": "We set off at dawn."
        },
        {
          "en": "back-up plan",
          "ru": "запасной план",
          "ex": "Always have a back-up plan."
        },
        {
          "en": "spare",
          "ru": "запасной",
          "ex": "Keep a spare key outside."
        },
        {
          "en": "urgent",
          "ru": "срочный",
          "ex": "Don't call unless it's urgent."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: опытный путешественник делится правилами на дорогу. Замечай unless, provided, as long as и in case.",
      "title": "Rules for the road",
      "sentences": [
        "I never set off on a trip without a back-up plan.",
        "Unless the forecast is truly awful, I usually go anyway.",
        "I always pack a spare charger in case my phone dies.",
        "You can travel light, provided that you plan carefully.",
        "As long as you keep your documents safe, small problems won't ruin the trip.",
        "I carry a little cash in case a card machine fails.",
        "I won't change my route unless there's a real emergency.",
        "Take precautions early, and the journey takes care of itself."
      ],
      "translation": "Я никогда не отправляюсь в поездку без запасного плана. Если прогноз не совсем ужасный, я обычно всё равно еду. Я всегда беру запасную зарядку на случай, если телефон разрядится. Можно путешествовать налегке при условии, что тщательно всё спланируешь. Пока документы в сохранности, мелкие проблемы не испортят поездку. Я ношу немного наличных на случай, если терминал для карт не сработает. Я не поменяю маршрут, если только не случится настоящая чрезвычайная ситуация. Прими меры заранее — и поездка позаботится о себе сама."
    },
    "drag": {
      "intro": "Соедини половинки. Подумай о смысле каждого союза: условие, исключение, предосторожность.",
      "howto": "Перетащи английское начало к подходящему продолжению.",
      "pairs": [
        [
          "We'll miss the train",
          "unless we hurry."
        ],
        [
          "You can borrow it",
          "provided that you return it."
        ],
        [
          "Take an umbrella",
          "in case it rains."
        ],
        [
          "You can stay",
          "as long as you stay quiet."
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по союзам условия. Пять вопросов — и тонкая разница «если / если не / на всякий случай» твоя.",
      "items": [
        {
          "q": "«Ты не сдашь, если не будешь заниматься» —",
          "opts": [
            "You won't pass unless you don't study.",
            "You won't pass unless you study.",
            "You won't pass if you study."
          ],
          "answer": 1,
          "explain": "unless = if not; глагол после него положительный: <b>unless you study</b>."
        },
        {
          "q": "«Возьми зонт на всякий случай» —",
          "opts": [
            "Take an umbrella if it rains.",
            "Take an umbrella in case it rains.",
            "Take an umbrella unless it rains."
          ],
          "answer": 1,
          "explain": "Заранее, как предосторожность → <b>in case</b>."
        },
        {
          "q": "Выбери верную форму: I'll help you provided that you ___ on time.",
          "opts": [
            "will arrive",
            "arrive",
            "would arrive"
          ],
          "answer": 1,
          "explain": "После provided that — present: <b>arrive</b>, не will arrive."
        },
        {
          "q": "Где русская ловушка «if I will…»?",
          "opts": [
            "If the price drops, I'll buy it.",
            "If the price will drop, I'll buy it.",
            "If the price dropped, I'd buy it."
          ],
          "answer": 1,
          "explain": "После if не ставят will: правильно <b>If the price drops…</b>"
        },
        {
          "q": "«Оставайся, пока ведёшь себя тихо» —",
          "opts": [
            "Stay in case you are quiet.",
            "Stay as long as you are quiet.",
            "Stay unless you are quiet."
          ],
          "answer": 1,
          "explain": "«пока / при условии что» → <b>as long as</b>."
        }
      ]
    },
    "picture": {
      "intro": "Опиши, как человек собирается в дорогу и принимает меры предосторожности.",
      "emoji": "🎒☂️🗺️",
      "prompt": "Человек складывает рюкзак перед поездкой. Опиши 3–4 фразами, что он берёт и почему. Используй in case, unless, provided that, as long as.",
      "hint": "Структуры: She is packing a spare … in case … ; She won't leave unless … ; Provided that …, she'll …",
      "example": "She is packing carefully before the trip. She takes a spare charger in case her phone dies. She won't set off unless the forecast improves. Provided that the roads are clear, she'll reach the coast by evening. As long as she stays calm, the journey will go smoothly.",
      "img": "img/b2/day-08.jpg",
      "credit": "Фото: Rawpixel Ltd · CC0 · <a href=\"https://www.flickr.com/photos/147875007@N03/34006154775\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Теперь твоя очередь поставить условия и подстраховаться на английском.",
      "prompt": "Напиши 4–6 предложений о плане с условиями: при каком условии ты что-то сделаешь, чего точно не сделаешь без выполнения условия и что возьмёшь на всякий случай. Используй unless, provided (that), as long as, in case.",
      "hint": "Структуры: I'll … provided that … ; I won't … unless … ; As long as …, … ; I'll take … in case … (после этих союзов — present, не will).",
      "example": "I'm planning a weekend hike with friends. We'll set off early provided that the weather forecast is good. I won't go unless everyone brings proper boots. As long as we stay together, the trail is safe. I'll pack a first-aid kit and some extra water in case someone gets tired. And I'll keep my phone charged in case we lose the path."
    }
  },
  "9": {
    "day": 9,
    "week": "02",
    "level": "B2",
    "themeRu": "Прошлое влияет на сейчас",
    "themeEn": "Mixed conditionals",
    "intro": "«Если бы я выучился на врача тогда, я был бы врачом сейчас». Одно решение в прошлом — и вся сегодняшняя жизнь другая. Это и есть сегодняшняя тема: <b>смешанные условные</b> — очень «нерусская» вещь. Жизнь редко делится аккуратно на «прошлое отдельно, настоящее отдельно»; чаще одно вытекает из другого. В английском прошлое-условие и настоящее-результат стоят в разных временах одновременно — и именно здесь русскоязычные сбиваются, потому что в русском один способ «бы» на все случаи. Разложим по полочкам.",
    "introAudio": "Если бы я выучился на врача тогда, я был бы врачом сейчас. Одно решение в прошлом — и вся сегодняшняя жизнь другая. Это и есть сегодняшняя тема: смешанные условные, очень нерусская вещь. Жизнь редко делится аккуратно на прошлое отдельно, настоящее отдельно; чаще одно вытекает из другого. В английском прошлое-условие и настоящее-результат стоят в разных временах одновременно, и именно здесь русскоязычные сбиваются, потому что в русском один способ бы на все случаи. Разложим по полочкам.",
    "goals": [
      "видеть, что условие и результат могут лежать в разном времени",
      "строить тип «прошлое → сейчас»: <b>if + past perfect, … would + база</b>",
      "строить тип «всегда так → прошлый результат»: <b>if + past simple, … would have + 3-я</b>",
      "отличать смешанный от чистого 3rd: <b>would be now</b> ≠ <b>would have been</b>"
    ],
    "learned": [
      "Увидел(а), что условие и результат могут лежать в разном времени",
      "Научился(лась) строить тип «прошлое → сейчас»: <b>if + past perfect, … would + база</b>",
      "Научился(лась) строить тип «всегда так → прошлый результат»: <b>if + past simple, … would have + 3-я</b>",
      "Научился(лась) отличать смешанный от чистого 3rd: <b>would be now</b> ≠ <b>would have been</b>"
    ],
    "review": {
      "intro": "Сначала вернём опору — наши always-on условные. Нужны <b>2nd</b> (нереальное настоящее) и <b>3rd</b> (нереальное прошлое) из B1, плюс <b>wish + past perfect</b> (Д5). Из этих двух «чистых» кирпичей мы и сложим смешанные.",
      "introAudio": "Сначала вернём опору — наши always-on условные. Нужны второй, нереальное настоящее, и третий, нереальное прошлое, из B1, плюс wish плюс past perfect из дня пять. Из этих двух чистых кирпичей мы и сложим смешанные.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> чистый 2nd conditional — нереальное настоящее. Выбери главную часть.",
          "q": "If I knew her number, I ___ her right now.",
          "opts": [
            "would call",
            "would have called",
            "will call"
          ],
          "answer": 0,
          "explain": "2nd: if + past (knew), главная — would + база: <b>would call</b> (сейчас)."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> чистый 3rd conditional — нереальное прошлое. Выбери главную часть.",
          "q": "If we had left earlier, we ___ the flight.",
          "opts": [
            "would catch",
            "would have caught",
            "had caught"
          ],
          "answer": 1,
          "explain": "3rd: if + past perfect, главная — would <b>have</b> + 3-я: would have caught."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> сожаление о прошлом — wish + past perfect. study → studied.",
          "q": "Жаль, что я не учился усерднее. (I wish …)",
          "accept": [
            "i wish i had studied harder",
            "i wish i'd studied harder"
          ],
          "placeholder": "I wish I had ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · прошлое → сейчас",
        "title": "Тип 1: <em>if + past perfect, … would + база</em>",
        "paras": [
          "Самый частый смешанный условный: <b>причина в прошлом → результат в настоящем</b>. Что-то не сложилось когда-то — и сегодня поэтому всё иначе. «Если бы я выучился на врача (тогда) — я был бы врачом (сейчас)».",
          "Условие берём из 3rd (нереальное прошлое): <b>if + past perfect</b>. А результат — из 2nd (нереальное настоящее): <b>would + базовая форма</b>. Получается: <b>If I had studied medicine, I would be a doctor now.</b> Слова <b>now / today / still</b> в главной части — верный признак этого типа.",
          "Логика проста: «had + 3-я форма» = несбывшееся прошлое, «would + база» = его теперешнее последствие. Прошлое тянет ниточку в сегодня."
        ],
        "audio": "Самый частый смешанный условный: причина в прошлом, результат в настоящем. Если бы я выучился на врача тогда — я был бы врачом сейчас. Условие берём из третьего: if плюс past perfect. Результат — из второго: would плюс база. If I had studied medicine, I would be a doctor now. Слова now, today, still в главной части — признак этого типа.",
        "table": {
          "rows": [
            [
              "if-часть (прошлое)",
              "past perfect: if I had studied"
            ],
            [
              "главная (сейчас)",
              "would + база: I would be a doctor"
            ],
            [
              "маркеры",
              "now / today / still"
            ],
            [
              "смысл",
              "прошлая причина → теперешний результат"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Если бы я не пропустил тот рейс, я был бы сейчас дома.",
            "en": "If I <b>hadn't missed</b> that flight, I <b>would be</b> home now.",
            "gloss": "had missed (прошлое) → would be (сейчас)",
            "say": "If I hadn't missed that flight, I would be home now."
          },
          {
            "ru": "Если бы она приняла ту работу, она жила бы сейчас в Берлине.",
            "en": "If she <b>had taken</b> that job, she <b>would live</b> in Berlin now.",
            "gloss": "had taken → would live now",
            "say": "If she had taken that job, she would live in Berlin now."
          },
          {
            "ru": "Если бы мы накопили денег, мы не были бы сейчас в долгах.",
            "en": "If we <b>had saved</b> money, we <b>wouldn't be</b> in debt now.",
            "say": "If we had saved money, we wouldn't be in debt now."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I had studied medicine, I would have been a doctor now.",
            "right": "If I had studied medicine, I <b>would be</b> a doctor now.",
            "why": "результат — про СЕЙЧАС (now) → would + база, без have"
          },
          {
            "wrong": "If I had saved money, I will be richer now.",
            "right": "If I had saved money, I <b>would be</b> richer now.",
            "why": "нереальный результат → would, не will"
          }
        ],
        "mnemonic": "⏪➡️ Прошлая причина → теперешний результат: if had done, would be now.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> причина в прошлом, результат сейчас (есть now). Выбери главную часть.",
            "q": "If I had learned to drive, I ___ my own car now.",
            "opts": [
              "would have",
              "would have had",
              "will have"
            ],
            "answer": 0,
            "explain": "Результат про сейчас → would + база: <b>would have</b> (a car now)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери смешанный «прошлое → сейчас».",
            "q": "Собери: «Если бы она вышла раньше, она была бы уже здесь»",
            "want": "If she had left earlier she would be here now",
            "answer": "If she had left earlier she would be here now"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. take → taken; результат про сейчас.",
            "q": "Если бы я принял то предложение, я был бы счастливее сейчас.",
            "accept": [
              "if i had taken that offer i would be happier now",
              "if i'd taken that offer i would be happier now",
              "if i had taken that offer, i would be happier now"
            ],
            "placeholder": "If I had taken that offer, I would ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · всегда так → прошлый результат",
        "title": "Тип 2: <em>if + past simple, … would have + 3-я</em>",
        "paras": [
          "Второй смешанный тип — зеркальный: <b>постоянное свойство настоящего → результат в прошлом</b>. Какой ты есть вообще (всегда, и сейчас тоже) объясняет, что произошло когда-то. «Если бы я не был таким застенчивым (я такой по жизни), я бы тогда пригласил её».",
          "Условие — из 2nd (нереальное/постоянное настоящее): <b>if + past simple</b>. Результат — из 3rd (прошлое): <b>would have + 3-я форма</b>. <b>If I weren't so shy, I would have asked her out.</b> = Если бы я не был таким застенчивым, я бы тогда её пригласил.",
          "Ключ к выбору — устойчивое свойство в if-части: <b>didn't have to work</b>, <b>spoke French</b>, <b>weren't afraid</b> — это про человека «вообще». А результат уже случился, поэтому would <b>have</b> + 3-я форма."
        ],
        "audio": "Второй смешанный тип — зеркальный: постоянное свойство настоящего, результат в прошлом. Какой ты вообще объясняет, что произошло когда-то. Если бы я не был таким застенчивым по жизни, я бы тогда её пригласил. Условие — из второго: if плюс past simple. Результат — из третьего: would have плюс третья форма. If I weren't so shy, I would have asked her out.",
        "table": {
          "rows": [
            [
              "if-часть (всегда / сейчас)",
              "past simple: if I weren't so shy"
            ],
            [
              "главная (прошлое)",
              "would have + 3-я: I would have asked"
            ],
            [
              "маркеры в if",
              "устойчивое свойство: speak, be, have, like"
            ],
            [
              "смысл",
              "какой я вообще → что случилось тогда"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Если бы я говорил по-французски, я бы понял ту лекцию.",
            "en": "If I <b>spoke</b> French, I <b>would have understood</b> that lecture.",
            "gloss": "spoke (вообще) → would have understood (тогда)",
            "say": "If I spoke French, I would have understood that lecture."
          },
          {
            "ru": "Если бы он не был таким гордым, он бы тогда извинился.",
            "en": "If he <b>weren't</b> so proud, he <b>would have apologised</b>.",
            "gloss": "weren't (свойство) → would have apologised",
            "say": "If he weren't so proud, he would have apologised."
          },
          {
            "ru": "Если бы она не боялась высоты, она бы прыгнула.",
            "en": "If she <b>weren't</b> afraid of heights, she <b>would have jumped</b>.",
            "say": "If she weren't afraid of heights, she would have jumped."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I spoke French, I would understand that lecture yesterday.",
            "right": "If I spoke French, I <b>would have understood</b> that lecture yesterday.",
            "why": "результат уже случился (вчера) → would have + 3-я"
          },
          {
            "wrong": "If I weren't so shy, I had asked her out.",
            "right": "If I weren't so shy, I <b>would have asked</b> her out.",
            "why": "в главной части нужен would have, не просто past perfect"
          }
        ],
        "mnemonic": "🔁 Какой я вообще → что случилось тогда: if did, would have done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> устойчивое свойство в if, результат в прошлом. Выбери главную часть.",
            "q": "If I were more organised, I ___ the deadline last week.",
            "opts": [
              "wouldn't miss",
              "wouldn't have missed",
              "won't miss"
            ],
            "answer": 1,
            "explain": "Свойство «вообще» + прошлый результат → would <b>have</b> + 3-я: wouldn't have missed."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери смешанный «всегда так → прошлый результат».",
            "q": "Собери: «Если бы он был внимательнее, он бы заметил ошибку»",
            "want": "If he were more careful he would have noticed the mistake",
            "answer": "If he were more careful he would have noticed the mistake"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. like → liked (свойство), результат — в прошлом.",
            "q": "Если бы я любил спорт, я бы пошёл на тот матч.",
            "accept": [
              "if i liked sport i would have gone to that match",
              "if i liked sports i would have gone to that match",
              "if i liked sport, i would have gone to that match"
            ],
            "placeholder": "If I liked sport, I would have ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "<em>would be now</em> ≠ <em>would have been</em>",
        "paras": [
          "Вот главная засада, и она именно русская. В русском «бы» одинаковое для прошлого и настоящего, поэтому «я был бы врачом» звучит так же, как «я бы стал врачом тогда» — и студент по привычке везде лепит <b>would have been</b>. В английском надо смотреть на <b>время результата</b>.",
          "Если результат — <b>сейчас</b> (есть now / today / still): <b>would + база</b> → <b>I would be a doctor now.</b> Если результат — <b>в прошлом</b> (тогда, в тот момент): <b>would have + 3-я</b> → <b>I would have become a doctor.</b> Само условие (if I had studied) одинаковое — а вот хвост разный.",
          "Тест на 1 секунду: спроси себя «последствие СЕЙЧАС или ТОГДА?». Сейчас → would be. Тогда → would have been. Слово now спасает от 90% ошибок."
        ],
        "audio": "Главная засада, и она русская. В русском «бы» одинаковое для прошлого и настоящего, поэтому студент везде лепит would have been. В английском смотри на время результата. Если результат сейчас, есть now — would плюс база: I would be a doctor now. Если результат в прошлом, тогда — would have плюс третья форма: I would have become a doctor. Условие одинаковое, хвост разный. Спроси: последствие сейчас или тогда?",
        "table": {
          "rows": [
            [
              "результат СЕЙЧАС (now)",
              "would be: I would be a doctor now."
            ],
            [
              "результат ТОГДА (прошлое)",
              "would have been: I would have been at the party."
            ],
            [
              "русское «бы»",
              "одно на оба — а в английском два хвоста"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Если бы я выучился на врача, я был бы врачом сейчас.",
            "en": "If I had studied medicine, I <b>would be</b> a doctor now.",
            "gloss": "сейчас → would be",
            "say": "If I had studied medicine, I would be a doctor now."
          },
          {
            "ru": "Если бы я выучился на врача, я бы помог тогда.",
            "en": "If I had studied medicine, I <b>would have helped</b> back then.",
            "gloss": "тогда → would have helped",
            "say": "If I had studied medicine, I would have helped back then."
          },
          {
            "ru": "Если бы мы купили тот дом, мы были бы богаче сейчас.",
            "en": "If we had bought that house, we <b>would be</b> richer now.",
            "say": "If we had bought that house, we would be richer now."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I had studied medicine, I would have been a doctor now.",
            "right": "If I had studied medicine, I <b>would be</b> a doctor now.",
            "why": "есть now → результат сейчас → would be, не would have been"
          },
          {
            "wrong": "If she had trained harder, she would be a champion last year.",
            "right": "If she had trained harder, she <b>would have been</b> a champion last year.",
            "why": "last year → результат в прошлом → would have been"
          }
        ],
        "mnemonic": "🕐 Спроси: последствие СЕЙЧАС или ТОГДА? Сейчас → would be · Тогда → would have been.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> смотри на маркер времени результата (now).",
            "q": "If I had saved more, I ___ on holiday right now.",
            "opts": [
              "would have been",
              "would be",
              "will be"
            ],
            "answer": 1,
            "explain": "right now → результат сейчас → <b>would be</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> смотри на маркер времени результата (then).",
            "q": "If I had saved more, I ___ that car back then.",
            "opts": [
              "would buy",
              "would have bought",
              "would be buying"
            ],
            "answer": 1,
            "explain": "back then → результат в прошлом → <b>would have bought</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. Есть «сейчас» → would + база.",
            "q": "Если бы я выучил китайский, у меня было бы больше возможностей сейчас.",
            "accept": [
              "if i had learned chinese i would have more opportunities now",
              "if i'd learned chinese i would have more opportunities now",
              "if i had learnt chinese i would have more opportunities now"
            ],
            "placeholder": "If I had learned Chinese, I would ... now"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · как выбрать",
        "title": "Алгоритм: две независимые проверки",
        "paras": [
          "Чтобы не путаться, разведи две части и проверь каждую отдельно. <b>Шаг 1 — условие:</b> оно про прошлое или про «вообще/сейчас»? Прошлое → <b>if + past perfect</b> (if I had known). Сейчас/всегда → <b>if + past simple</b> (if I knew / if I were).",
          "<b>Шаг 2 — результат:</b> он про настоящее или про прошлое? Настоящее → <b>would + база</b> (would be). Прошлое → <b>would have + 3-я</b> (would have been). Части собираются независимо — отсюда четыре комбинации, и две из них «смешанные».",
          "Помни: <b>would никогда не заходит в if-часть</b> — там только past или past perfect. И will/won't в нереальных условиях не появляется вообще. Эти два запрета убирают большинство ошибок ещё до выбора типа."
        ],
        "audio": "Чтобы не путаться, разведи две части и проверь каждую отдельно. Шаг один, условие: про прошлое или про вообще-сейчас? Прошлое — if плюс past perfect. Сейчас или всегда — if плюс past simple. Шаг два, результат: про настоящее или про прошлое? Настоящее — would плюс база. Прошлое — would have плюс третья форма. Would никогда не заходит в if-часть, и will в нереальных условиях не появляется.",
        "table": {
          "rows": [
            [
              "условие — прошлое",
              "if + past perfect (if I had known)"
            ],
            [
              "условие — сейчас/всегда",
              "if + past simple (if I knew / were)"
            ],
            [
              "результат — сейчас",
              "would + база (would be)"
            ],
            [
              "результат — прошлое",
              "would have + 3-я (would have been)"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Прошлое → сейчас: если бы я лёг спать раньше, я бы не был сейчас таким уставшим.",
            "en": "If I <b>had gone</b> to bed earlier, I <b>wouldn't be</b> so tired now.",
            "gloss": "past perfect + would + база",
            "say": "If I had gone to bed earlier, I wouldn't be so tired now."
          },
          {
            "ru": "Сейчас → прошлое: если бы я был организованнее, я бы не забыл ключи.",
            "en": "If I <b>were</b> more organised, I <b>wouldn't have forgotten</b> the keys.",
            "gloss": "past simple + would have + 3-я",
            "say": "If I were more organised, I wouldn't have forgotten the keys."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I would have known, I would be there now.",
            "right": "If I <b>had known</b>, I would be there now.",
            "why": "would не заходит в if-часть — там past perfect (had known)"
          }
        ],
        "mnemonic": "🧭 Проверь две части ОТДЕЛЬНО: время условия + время результата. Would — только справа.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> разбери по шагам. Условие — прошлое, результат — сейчас.",
            "q": "If they ___ the rules, the project wouldn't be a mess now.",
            "opts": [
              "followed",
              "had followed",
              "would follow"
            ],
            "answer": 1,
            "explain": "Условие про прошлое → past perfect: <b>had followed</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери «сейчас → прошлое». Свойство + прошлый результат.",
            "q": "Собери: «Если бы я был смелее, я бы тогда сказал правду»",
            "want": "If I were braver I would have told the truth",
            "answer": "If I were braver I would have told the truth"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши перевод. «прошлое → сейчас», есть «сейчас».",
            "q": "Если бы я не бросил пианино, я бы хорошо играл сейчас.",
            "accept": [
              "if i hadn't quit the piano i would play well now",
              "if i had not quit the piano i would play well now",
              "if i hadn't quit piano i would play well now"
            ],
            "placeholder": "If I hadn't quit the piano, I would ... now"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Живой диалог: двое старых друзей встречаются и размышляют, как ранние решения изменили их сегодняшнюю жизнь. Тапни строку для перевода — слушай смешанные условные в речи.",
      "lines": [
        {
          "who": "A",
          "name": "Sam",
          "side": "left",
          "en": "If I had accepted that job in London, I'd probably be living there now.",
          "ru": "Если бы я согласился на ту работу в Лондоне, я бы, наверное, жил там сейчас.",
          "words": [
            [
              "had accepted",
              "согласился (бы тогда)"
            ],
            [
              "I'd be living",
              "я бы жил (сейчас)"
            ]
          ]
        },
        {
          "who": "N",
          "name": "Nia",
          "side": "right",
          "en": "Maybe. But if you weren't such a homebody, you would have moved years ago.",
          "ru": "Возможно. Но если бы ты не был таким домоседом, ты бы переехал ещё годы назад.",
          "words": [
            [
              "homebody",
              "домосед"
            ],
            [
              "would have moved",
              "переехал бы (тогда)"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Sam",
          "side": "left",
          "en": "True. And if I'd saved more back then, I wouldn't be renting now.",
          "ru": "Верно. И если бы я тогда больше копил, я бы не снимал сейчас.",
          "words": [
            [
              "had saved",
              "копил (бы тогда)"
            ],
            [
              "wouldn't be renting",
              "не снимал бы (сейчас)"
            ]
          ]
        },
        {
          "who": "N",
          "name": "Nia",
          "side": "right",
          "en": "Don't be hard on yourself. If you cared less, you wouldn't have built all this.",
          "ru": "Не кори себя. Если бы тебе было всё равно, ты бы не построил всё это.",
          "words": [
            [
              "cared less",
              "было бы всё равно"
            ],
            [
              "wouldn't have built",
              "не построил бы"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Sam",
          "side": "left",
          "en": "You're right. The past pulls a thread straight into today.",
          "ru": "Ты права. Прошлое тянет ниточку прямо в сегодня.",
          "words": [
            [
              "pulls a thread",
              "тянет ниточку"
            ]
          ]
        }
      ]
    },
    "scene": {
      "intro": "Короткая сценка: коллеги разбирают, почему проект пошёл не так. Слушай смешанные условные в деловом разборе.",
      "lines": [
        {
          "who": "A",
          "en": "If we had tested it properly, we wouldn't be fixing bugs now.",
          "ru": "Если бы мы как следует протестировали, мы бы сейчас не правили баги."
        },
        {
          "who": "B",
          "en": "And if the team were bigger, we would have caught this in time.",
          "ru": "А если бы команда была больше, мы бы поймали это вовремя."
        },
        {
          "who": "A",
          "en": "Exactly. If I had hired one more developer, we'd be ahead of schedule.",
          "ru": "Именно. Если бы я нанял ещё одного разработчика, мы были бы впереди графика."
        },
        {
          "who": "B",
          "en": "Well, if you weren't so cautious, you would have done it months ago.",
          "ru": "Ну, если бы ты не был таким осторожным, ты бы сделал это ещё месяцы назад."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — лексика выбора, последствий и сожаления (B2). Повтори вслух с примерами.",
      "items": [
        {
          "en": "consequence",
          "ru": "последствие",
          "ex": "Every choice has a consequence."
        },
        {
          "en": "regret",
          "ru": "сожалеть / сожаление",
          "ex": "I regret nothing."
        },
        {
          "en": "turn down (an offer)",
          "ru": "отклонить (предложение)",
          "ex": "She turned down the job."
        },
        {
          "en": "end up",
          "ru": "в итоге оказаться",
          "ex": "We ended up staying home."
        },
        {
          "en": "in hindsight",
          "ru": "задним числом, оглядываясь назад",
          "ex": "In hindsight, it was a mistake."
        },
        {
          "en": "settle (somewhere)",
          "ru": "осесть, обосноваться",
          "ex": "They settled in Spain."
        },
        {
          "en": "cautious",
          "ru": "осторожный",
          "ex": "He's too cautious to gamble."
        },
        {
          "en": "homebody",
          "ru": "домосед",
          "ex": "I'm a homebody at heart."
        },
        {
          "en": "be in debt",
          "ru": "быть в долгах",
          "ex": "They're still in debt."
        },
        {
          "en": "thread",
          "ru": "нить, ниточка",
          "ex": "The past pulls a thread into now."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек оглядывается на одно решение и видит, как оно дотянулось до сегодня. Замечай смешанные условные.",
      "title": "One decision",
      "sentences": [
        "Years ago I turned down a place at a music school.",
        "If I had accepted it, my life would look completely different now.",
        "I would probably be playing in an orchestra today.",
        "But if I weren't so practical, I would never have chosen a safe career instead.",
        "In hindsight, both paths had their price.",
        "If I had kept practising, I wouldn't feel this small regret now.",
        "Still, if I were a different person, I would have made a different choice.",
        "The past quietly shapes the person I am today."
      ],
      "translation": "Много лет назад я отказался от места в музыкальной школе. Если бы я согласился, моя жизнь выглядела бы сейчас совершенно иначе. Я бы, наверное, играл сегодня в оркестре. Но если бы я не был таким практичным, я бы никогда не выбрал вместо этого надёжную профессию. Если оглянуться назад, у обоих путей была своя цена. Если бы я продолжал заниматься, я бы не чувствовал сейчас этого лёгкого сожаления. И всё же, будь я другим человеком, я бы сделал другой выбор. Прошлое тихо формирует того, кем я являюсь сегодня."
    },
    "drag": {
      "intro": "Соедини половинки. Смотри на маркеры времени: now тянет за would + база, прошлое — за would have + 3-я.",
      "howto": "Перетащи английское начало к подходящему продолжению.",
      "pairs": [
        [
          "If I had taken that job,",
          "I would live abroad now."
        ],
        [
          "If she weren't so shy,",
          "she would have spoken up then."
        ],
        [
          "If we had left earlier,",
          "we wouldn't be stuck in traffic now."
        ],
        [
          "If I spoke German,",
          "I would have understood the meeting."
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по смешанным условным. Пять вопросов — и «прошлое → сейчас» больше не путается с чистым третьим.",
      "items": [
        {
          "q": "«Если бы я выучился на врача, я был бы врачом сейчас» —",
          "opts": [
            "If I had studied medicine, I would have been a doctor now.",
            "If I had studied medicine, I would be a doctor now.",
            "If I studied medicine, I will be a doctor now."
          ],
          "answer": 1,
          "explain": "Результат про сейчас (now) → <b>would be</b>, не would have been."
        },
        {
          "q": "Выбери главную часть: If I were more careful, I ___ the keys yesterday.",
          "opts": [
            "wouldn't lose",
            "wouldn't have lost",
            "won't lose"
          ],
          "answer": 1,
          "explain": "Свойство «вообще» + прошлый результат (yesterday) → <b>wouldn't have lost</b>."
        },
        {
          "q": "Выбери if-часть: If I ___ to bed earlier, I wouldn't be tired now.",
          "opts": [
            "went",
            "had gone",
            "would go"
          ],
          "answer": 1,
          "explain": "Условие про прошлое → past perfect: <b>had gone</b>."
        },
        {
          "q": "Где would стоит НЕ на своём месте?",
          "opts": [
            "If I had known, I would be there now.",
            "If I would have known, I would be there now.",
            "If I knew, I would have helped."
          ],
          "answer": 1,
          "explain": "would не заходит в if-часть: правильно <b>If I had known…</b>"
        },
        {
          "q": "«Если бы мы накопили денег, мы не были бы сейчас в долгах» —",
          "opts": [
            "If we saved money, we wouldn't be in debt now.",
            "If we had saved money, we wouldn't be in debt now.",
            "If we had saved money, we wouldn't have been in debt now."
          ],
          "answer": 1,
          "explain": "Прошлое-причина (had saved) → теперешний результат (now) → <b>wouldn't be</b>."
        }
      ]
    },
    "picture": {
      "intro": "Опиши размышления человека о том, как прошлый выбор отразился на его сегодняшней жизни.",
      "emoji": "🛤️💭⏳",
      "prompt": "Человек смотрит на старую фотографию и думает о развилке в прошлом. Опиши 3–4 фразами: что было бы сейчас, если бы тогда он решил иначе. Используй смешанные условные.",
      "hint": "Структуры: If he had …, he would … now ; If he weren't …, he would have … ; In hindsight, …",
      "example": "He is looking at an old photo and thinking about a choice he made years ago. If he had moved to the city back then, he would have a very different life now. If he weren't so cautious, he would have taken more risks. In hindsight, that one decision still shapes who he is today.",
      "img": "img/b2/day-09.jpg",
      "credit": "Фото: Fæ · Public Domain · <a href=\"https://www.flickr.com/photos/50398299@N08/16057142254\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Теперь твоя очередь связать прошлое и настоящее на английском.",
      "prompt": "Напиши 4–6 предложений про одно решение в прошлом и его след в твоей сегодняшней жизни. Используй смешанные условные обоих типов: if + past perfect, … would + база (now); и if + past simple, … would have + 3-я.",
      "hint": "Структуры: If I had …, I would … now ; If I weren't / didn't …, I would have … ; In hindsight, … (помни: would — только в главной части).",
      "example": "A few years ago I decided to stay in my home town instead of moving abroad. If I had left back then, I would probably speak another language fluently now. But if I weren't such a homebody, I would have taken that risk without thinking twice. In hindsight, the choice gave me a quieter life. If I had been braver, my world would be wider today — but I'm not sure I would be happier."
    }
  },
  "10": {
    "day": 10,
    "week": "02",
    "level": "B2",
    "themeRu": "Лучше бы / лучше сделай",
    "themeEn": "would rather, had better",
    "intro": "Сегодня — три очень «носительских» оборота, и все три с характером: <b>would rather</b> («(я) лучше…», предпочёл бы), <b>had better</b> («лучше сделай», настойчивый совет) и <b>it's time</b> («пора…»). Они сразу делают речь живой и точной, но капризны в грамматике: после одних идёт голый инфинитив, после других — внезапно прошедшее время, хотя речь о настоящем и будущем. Русскому уху это контринтуитивно, поэтому разберём каждый по отдельности и поймаем типичные ошибки за хвост.",
    "introAudio": "Сегодня три очень носительских оборота, и все три с характером: would rather — я лучше, предпочёл бы; had better — лучше сделай, настойчивый совет; и it's time — пора. Они сразу делают речь живой и точной, но капризны в грамматике: после одних идёт голый инфинитив, после других внезапно прошедшее время, хотя речь о настоящем и будущем. Русскому уху это контринтуитивно, поэтому разберём каждый по отдельности и поймаем типичные ошибки за хвост.",
    "goals": [
      "говорить о предпочтении: <b>I'd rather + голый инфинитив</b> (I'd rather stay)",
      "переносить предпочтение на другого: <b>I'd rather you + past</b> (I'd rather you went)",
      "давать настойчивый совет про сейчас/будущее: <b>had better + голый инфинитив</b>",
      "подгонять: <b>it's (high) time + past</b> (it's time we left)"
    ],
    "learned": [
      "Научился(лась) говорить о предпочтении: <b>I'd rather + голый инфинитив</b> (I'd rather stay)",
      "Научился(лась) переносить предпочтение на другого: <b>I'd rather you + past</b> (I'd rather you went)",
      "Научился(лась) давать настойчивый совет про сейчас/будущее: <b>had better + голый инфинитив</b>",
      "Научился(лась) подгонять: <b>it's (high) time + past</b> (it's time we left)"
    ],
    "review": {
      "intro": "Сначала разминка. Возвращаем нереальное прошлое (смешанные условные, Д9) — оно объясняет, почему «прошедшее» в этих оборотах не про прошлое, — и обычный совет через <b>should</b>, чтобы потом почувствовать, насколько жёстче звучит had better.",
      "introAudio": "Сначала разминка. Возвращаем нереальное прошлое — смешанные условные из дня девять, оно объясняет, почему прошедшее в этих оборотах не про прошлое, — и обычный совет через should, чтобы потом почувствовать, насколько жёстче звучит had better.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> смешанный условный «прошлое → сейчас». Выбери главную часть.",
          "q": "If I had booked earlier, I ___ a seat now.",
          "opts": [
            "would have",
            "would have had",
            "will have"
          ],
          "answer": 0,
          "explain": "Результат про сейчас (now) → would + база: <b>would have</b> a seat."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> обычный мягкий совет через should.",
          "q": "You look exhausted. You ___ take a break.",
          "opts": [
            "should",
            "should to",
            "would rather"
          ],
          "answer": 0,
          "explain": "Совет → <b>should</b> + голый инфинитив (take), без to."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши мягкий совет другу. see → see a doctor.",
          "q": "Тебе стоит сходить к врачу.",
          "accept": [
            "you should see a doctor",
            "you should go to a doctor"
          ],
          "placeholder": "You should ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · предпочтение",
        "title": "<em>would rather</em> + голый инфинитив",
        "paras": [
          "<b>would rather</b> (часто сокращают до <b>'d rather</b>) = «я лучше…», «предпочёл бы». Это про твой собственный выбор прямо сейчас: <b>I'd rather stay home tonight.</b> = Я лучше останусь сегодня дома.",
          "Грамматика капризная: после would rather идёт <b>голый инфинитив</b> — глагол без <b>to</b>. Не «I'd rather to stay», а просто <b>I'd rather stay</b>. Отрицание — <b>I'd rather not</b> + глагол: <b>I'd rather not talk about it.</b>",
          "Чтобы сравнить два варианта, ставим <b>than</b> (а не «that»): <b>I'd rather walk than wait for a bus.</b> = Я лучше пройдусь пешком, чем буду ждать автобус. После than — тоже голый инфинитив."
        ],
        "audio": "would rather, часто 'd rather, значит «я лучше», предпочёл бы. Это про твой собственный выбор прямо сейчас. I'd rather stay home tonight. После would rather идёт голый инфинитив — глагол без to. Не I'd rather to stay, а I'd rather stay. Отрицание: I'd rather not talk about it. Сравнение через than: I'd rather walk than wait for a bus.",
        "table": {
          "rows": [
            [
              "I'd rather + база",
              "I'd rather stay (без to!)"
            ],
            [
              "отрицание",
              "I'd rather not go"
            ],
            [
              "сравнение",
              "I'd rather walk than drive (than, не that)"
            ],
            [
              "вопрос",
              "Would you rather stay or go?"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я лучше выпью чаю, чем кофе.",
            "en": "I'd <b>rather have</b> tea than coffee.",
            "gloss": "rather + have (база), than для сравнения",
            "say": "I'd rather have tea than coffee."
          },
          {
            "ru": "Я лучше не буду об этом говорить.",
            "en": "I'd <b>rather not talk</b> about it.",
            "gloss": "отрицание: rather not + база",
            "say": "I'd rather not talk about it."
          },
          {
            "ru": "Ты бы предпочла остаться или пойти?",
            "en": "<b>Would</b> you <b>rather stay</b> or go?",
            "say": "Would you rather stay or go?"
          }
        ],
        "mistakes": [
          {
            "wrong": "I'd rather to go home.",
            "right": "I'd <b>rather go</b> home.",
            "why": "после would rather — голый инфинитив, без to"
          },
          {
            "wrong": "I'd rather stay that go out.",
            "right": "I'd rather stay <b>than</b> go out.",
            "why": "сравнение через than, а не that"
          }
        ],
        "mnemonic": "🤔 I'd rather + глагол БЕЗ to. Сравниваешь — than.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму после would rather.",
            "q": "It's freezing — I'd rather ___ in tonight.",
            "opts": [
              "to stay",
              "stay",
              "staying"
            ],
            "answer": 1,
            "explain": "После would rather — голый инфинитив: <b>stay</b>, без to."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предпочтение со сравнением.",
            "q": "Собери: «Я лучше пройдусь пешком, чем поеду на машине»",
            "want": "I'd rather walk than drive",
            "answer": "I'd rather walk than drive"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши отрицательное предпочтение.",
            "q": "Я лучше не буду сейчас отвечать.",
            "accept": [
              "i'd rather not answer now",
              "i would rather not answer now",
              "i'd rather not reply now"
            ],
            "placeholder": "I'd rather not ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · предпочтение про другого",
        "title": "<em>I'd rather you</em> + прошедшее",
        "paras": [
          "А вот сюрприз. Когда предпочтение касается <b>другого человека</b> («я хочу, чтобы ТЫ сделал…»), would rather строится иначе: <b>I'd rather + лицо + прошедшее время</b>. <b>I'd rather you went now.</b> = Я предпочёл бы, чтобы ты ушёл сейчас.",
          "Это прошедшее — <b>нереальное</b>, как в условных: оно не про вчера, а сигнал «это пока не так, я лишь хочу». Поэтому, хотя смысл про настоящее или будущее, форма прошедшая: <b>I'd rather you didn't smoke here.</b> = Я бы предпочёл, чтобы ты тут не курил.",
          "Сравни два мира: про СЕБЯ — голый инфинитив (<b>I'd rather stay</b>); про ДРУГОГО — прошедшее (<b>I'd rather you stayed</b>). Перепутать легко — и это классическая ошибка."
        ],
        "audio": "Сюрприз. Когда предпочтение касается другого человека — я хочу, чтобы ТЫ сделал — would rather строится иначе: I'd rather плюс лицо плюс прошедшее время. I'd rather you went now. Это прошедшее нереальное, как в условных: не про вчера, а сигнал «это пока не так». I'd rather you didn't smoke here. Про себя — голый инфинитив; про другого — прошедшее.",
        "table": {
          "rows": [
            [
              "про СЕБЯ",
              "I'd rather stay (голый инфинитив)"
            ],
            [
              "про ДРУГОГО",
              "I'd rather you stayed (прошедшее)"
            ],
            [
              "отрицание про другого",
              "I'd rather you didn't go"
            ],
            [
              "смысл прошедшего",
              "нереальное «пока не так» — про сейчас/будущее"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я предпочёл бы, чтобы ты ушёл сейчас.",
            "en": "I'd rather you <b>went</b> now.",
            "gloss": "другой человек → прошедшее (went)",
            "say": "I'd rather you went now."
          },
          {
            "ru": "Я бы предпочёл, чтобы ты тут не курил.",
            "en": "I'd rather you <b>didn't smoke</b> here.",
            "gloss": "отрицание: you didn't smoke",
            "say": "I'd rather you didn't smoke here."
          },
          {
            "ru": "Я предпочла бы, чтобы они сказали мне правду.",
            "en": "I'd rather they <b>told</b> me the truth.",
            "say": "I'd rather they told me the truth."
          }
        ],
        "mistakes": [
          {
            "wrong": "I'd rather you go now.",
            "right": "I'd rather you <b>went</b> now.",
            "why": "предпочтение про другого → прошедшее (went), не база"
          },
          {
            "wrong": "I'd rather you don't smoke here.",
            "right": "I'd rather you <b>didn't smoke</b> here.",
            "why": "отрицание тоже в прошедшем: you didn't smoke"
          }
        ],
        "mnemonic": "👥 Про себя → база (I'd rather go). Про другого → прошедшее (I'd rather you went).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> предпочтение касается другого человека — какая форма?",
            "q": "I'd rather you ___ me before deciding.",
            "opts": [
              "ask",
              "asked",
              "to ask"
            ],
            "answer": 1,
            "explain": "Про другого человека → прошедшее: <b>asked</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предпочтение про другого с отрицанием.",
            "q": "Собери: «Я бы предпочёл, чтобы ты не опаздывал»",
            "want": "I'd rather you didn't arrive late",
            "answer": "I'd rather you didn't arrive late"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши предпочтение про другого. tell → told.",
            "q": "Я предпочёл бы, чтобы ты сказал мне сейчас.",
            "accept": [
              "i'd rather you told me now",
              "i would rather you told me now"
            ],
            "placeholder": "I'd rather you ... me now"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · настойчивый совет",
        "title": "<em>had better</em> + голый инфинитив — лучше сделай",
        "paras": [
          "<b>had better</b> (в речи почти всегда <b>'d better</b>) — это <b>настойчивый совет или предупреждение</b>: «лучше сделай, иначе будут проблемы». Сильнее, чем should. <b>You'd better see a doctor.</b> = Тебе лучше сходить к врачу (это серьёзно).",
          "После had better — <b>голый инфинитив</b>, без to: <b>You'd better leave now.</b> Отрицание — <b>had better not</b> + глагол: <b>You'd better not be late.</b> = Лучше тебе не опаздывать.",
          "Главная русская ловушка — слово <b>had</b>. Оно тут <b>не про прошлое!</b> «You'd better» = «лучше тебе СЕЙЧАС / в ближайшем будущем». Это совет на текущую ситуацию, часто с оттенком угрозы последствий. И ещё: had better ≠ would rather. had better — про то, что <b>надо</b> сделать; would rather — про то, что <b>хочется</b>."
        ],
        "audio": "had better, в речи почти всегда 'd better — это настойчивый совет или предупреждение: лучше сделай, иначе будут проблемы. Сильнее, чем should. You'd better see a doctor. После had better — голый инфинитив, без to. Отрицание: You'd better not be late. Главная ловушка — слово had: оно тут не про прошлое, а про сейчас и ближайшее будущее.",
        "table": {
          "rows": [
            [
              "had better + база",
              "You'd better leave (без to)"
            ],
            [
              "отрицание",
              "You'd better not be late"
            ],
            [
              "смысл",
              "настойчивый совет / предупреждение СЕЙЧАС"
            ],
            [
              "сила",
              "had better > should (жёстче)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Тебе лучше сходить к врачу — это серьёзно.",
            "en": "You'd <b>better see</b> a doctor.",
            "gloss": "настойчивый совет, база без to",
            "say": "You'd better see a doctor."
          },
          {
            "ru": "Нам лучше поторопиться, иначе опоздаем.",
            "en": "We'd <b>better hurry</b>, or we'll be late.",
            "gloss": "предупреждение о последствии",
            "say": "We'd better hurry, or we'll be late."
          },
          {
            "ru": "Тебе лучше не говорить ей об этом.",
            "en": "You'd <b>better not tell</b> her.",
            "gloss": "отрицание: better not + база",
            "say": "You'd better not tell her."
          }
        ],
        "mistakes": [
          {
            "wrong": "You'd better to call him.",
            "right": "You'd <b>better call</b> him.",
            "why": "после had better — голый инфинитив, без to"
          },
          {
            "wrong": "Yesterday you had better stay home.",
            "right": "You'd <b>better stay</b> home tonight.",
            "why": "had better — про сейчас/будущее, не про прошлое"
          }
        ],
        "mnemonic": "⚠️ had better = «лучше сделай (а то…)» про СЕЙЧАС. + голый инфинитив.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму после had better.",
            "q": "It's getting late — we'd better ___ now.",
            "opts": [
              "to leave",
              "leave",
              "leaving"
            ],
            "answer": 1,
            "explain": "После had better — голый инфинитив: <b>leave</b>, без to."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери настойчивый совет (сильнее, чем простое should).",
            "q": "«Лучше тебе не опаздывать на собеседование» —",
            "opts": [
              "You'd better not be late for the interview.",
              "You'd better not to be late for the interview.",
              "You had better were not late for the interview."
            ],
            "answer": 0,
            "explain": "had better not + голый инфинитив: <b>better not be</b> late."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши настойчивый совет. hurry = торопиться.",
            "q": "Нам лучше поторопиться.",
            "accept": [
              "we'd better hurry",
              "we had better hurry",
              "we'd better hurry up"
            ],
            "placeholder": "We'd better ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · пора",
        "title": "<em>it's (high) time</em> + прошедшее",
        "paras": [
          "Последний оборот дня — <b>it's time</b> = «пора». Если просто «пора что-то делать вообще», берём инфинитив: <b>It's time to go.</b> Но когда хочешь сказать с лёгким упрёком «давно пора, а всё ещё не…», англичане ставят <b>прошедшее</b>: <b>It's time we left.</b> = Нам пора уходить (мы засиделись).",
          "Это снова <b>нереальное прошедшее</b>, как в would rather you: форма прошлая, а смысл — «сейчас уже надо». Усилитель — <b>high</b>: <b>It's high time you found a job.</b> = Тебе давно пора найти работу.",
          "Сравни: <b>It's time to leave</b> (нейтрально, инфинитив) vs <b>It's time we left</b> (с нажимом «уже давно пора», прошедшее + подлежащее). Второй вариант — очень носительский, и его легко узнать по прошедшему глаголу после подлежащего."
        ],
        "audio": "Последний оборот дня — it's time, «пора». Если просто «пора что-то делать вообще» — инфинитив: It's time to go. Но когда хочешь сказать с лёгким упрёком «давно пора, а всё ещё не», англичане ставят прошедшее: It's time we left. Это снова нереальное прошедшее: форма прошлая, смысл «сейчас уже надо». Усилитель high: It's high time you found a job.",
        "table": {
          "rows": [
            [
              "It's time to + база",
              "пора (нейтрально): It's time to go."
            ],
            [
              "It's time + лицо + прошедшее",
              "давно пора: It's time we left."
            ],
            [
              "It's high time …",
              "усиление упрёка: It's high time you found a job."
            ],
            [
              "форма прошлая, смысл — про сейчас",
              "нереальное прошедшее"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Нам пора уходить (мы засиделись).",
            "en": "It's time we <b>left</b>.",
            "gloss": "прошедшее = «уже давно пора»",
            "say": "It's time we left."
          },
          {
            "ru": "Тебе давно пора найти работу.",
            "en": "It's <b>high time</b> you <b>found</b> a job.",
            "gloss": "high time + прошедшее = упрёк",
            "say": "It's high time you found a job."
          },
          {
            "ru": "Пора идти. (нейтрально)",
            "en": "It's <b>time to go</b>.",
            "gloss": "нейтрально → инфинитив",
            "say": "It's time to go."
          }
        ],
        "mistakes": [
          {
            "wrong": "It's time we leave.",
            "right": "It's time we <b>left</b>.",
            "why": "после «it's time + подлежащее» — прошедшее (left), не база"
          },
          {
            "wrong": "It's high time you find a job.",
            "right": "It's high time you <b>found</b> a job.",
            "why": "high time + подлежащее → прошедшее: found"
          }
        ],
        "mnemonic": "⏰ It's (high) time + подлежащее + ПРОШЕДШЕЕ: It's time we left.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «it's time + подлежащее» с нажимом — какая форма?",
            "q": "It's time you ___ the truth.",
            "opts": [
              "know",
              "knew",
              "to know"
            ],
            "answer": 1,
            "explain": "После «it's time + подлежащее» — прошедшее: <b>knew</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери «давно пора» с усилителем high.",
            "q": "Собери: «Тебе давно пора повзрослеть»",
            "want": "It's high time you grew up",
            "answer": "It's high time you grew up"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши «нам пора уходить» с нажимом. leave → left.",
            "q": "Нам уже давно пора уходить.",
            "accept": [
              "it's high time we left",
              "it is high time we left",
              "it's time we left"
            ],
            "placeholder": "It's high time we ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Живой диалог: пара решает, как провести вечер, и слегка подталкивает друг друга. Тапни строку для перевода — слушай would rather, had better и it's time в действии.",
      "lines": [
        {
          "who": "A",
          "name": "Mark",
          "side": "left",
          "en": "Shall we go out, or would you rather stay in tonight?",
          "ru": "Пойдём куда-нибудь или ты лучше останешься дома сегодня?",
          "words": [
            [
              "would you rather",
              "ты бы предпочла"
            ],
            [
              "stay in",
              "остаться дома"
            ]
          ]
        },
        {
          "who": "L",
          "name": "Lara",
          "side": "right",
          "en": "I'd rather stay in. But I'd rather you didn't order another pizza.",
          "ru": "Я лучше останусь. Но я бы предпочла, чтобы ты не заказывал ещё одну пиццу.",
          "words": [
            [
              "I'd rather stay",
              "я лучше останусь"
            ],
            [
              "I'd rather you didn't",
              "я бы предпочла, чтобы ты не…"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Mark",
          "side": "left",
          "en": "Fair enough. We'd better cook something, then — the fridge is almost empty.",
          "ru": "Справедливо. Тогда нам лучше что-нибудь приготовить — холодильник почти пустой.",
          "words": [
            [
              "we'd better",
              "нам лучше (а то…)"
            ],
            [
              "almost empty",
              "почти пустой"
            ]
          ]
        },
        {
          "who": "L",
          "name": "Lara",
          "side": "right",
          "en": "Agreed. Honestly, it's high time we learned to plan our meals.",
          "ru": "Согласна. Честно, нам давно пора научиться планировать еду.",
          "words": [
            [
              "it's high time",
              "давно пора"
            ],
            [
              "plan our meals",
              "планировать питание"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Mark",
          "side": "left",
          "en": "You're right. I'd rather we started tonight than kept ordering takeaways.",
          "ru": "Ты права. Я бы предпочёл, чтобы мы начали сегодня, чем заказывать дальше на вынос.",
          "words": [
            [
              "I'd rather we started",
              "я бы предпочёл, чтобы мы начали"
            ],
            [
              "takeaways",
              "еда на вынос"
            ]
          ]
        }
      ]
    },
    "scene": {
      "intro": "Короткая сценка: коллега подгоняет другого перед дедлайном. Слушай had better и it's time как мягкое давление.",
      "lines": [
        {
          "who": "A",
          "en": "The report is due at nine. We'd better not leave it till the last minute.",
          "ru": "Отчёт сдавать в девять. Лучше нам не тянуть до последней минуты."
        },
        {
          "who": "B",
          "en": "Agreed. Honestly, it's time we changed how we work.",
          "ru": "Согласен. Честно, нам пора поменять то, как мы работаем."
        },
        {
          "who": "A",
          "en": "I'd rather finish early than rush at the end again.",
          "ru": "Я лучше закончу раньше, чем снова буду спешить в конце."
        },
        {
          "who": "B",
          "en": "Then we'd better start now. I'd rather you took the first section.",
          "ru": "Тогда нам лучше начать сейчас. Я бы предпочёл, чтобы ты взял первый раздел."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — лексика предпочтения, совета и давления (B2). Повтори вслух с примерами.",
      "items": [
        {
          "en": "would rather",
          "ru": "(я) лучше / предпочёл бы",
          "ex": "I'd rather walk."
        },
        {
          "en": "had better",
          "ru": "лучше сделай (а то…)",
          "ex": "You'd better hurry."
        },
        {
          "en": "it's high time",
          "ru": "давно пора",
          "ex": "It's high time you decided."
        },
        {
          "en": "stay in",
          "ru": "остаться дома",
          "ex": "Let's stay in tonight."
        },
        {
          "en": "put off",
          "ru": "откладывать",
          "ex": "Don't put it off again."
        },
        {
          "en": "rush",
          "ru": "спешить, делать в спешке",
          "ex": "Don't rush the decision."
        },
        {
          "en": "warn",
          "ru": "предупреждать",
          "ex": "I'm warning you, be careful."
        },
        {
          "en": "reluctant",
          "ru": "неохотный",
          "ex": "He's reluctant to commit."
        },
        {
          "en": "make up your mind",
          "ru": "определиться, решить",
          "ex": "Make up your mind soon."
        },
        {
          "en": "takeaway",
          "ru": "еда на вынос",
          "ex": "We ordered a takeaway."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек уговаривает себя начать новую привычку. Замечай would rather, had better и it's time.",
      "title": "A nudge to myself",
      "sentences": [
        "It's high time I got my life in order.",
        "I'd rather start small than promise myself a giant change.",
        "Honestly, I'd rather not make another list I'll ignore.",
        "I'd better set just one clear goal for this week.",
        "I'd rather my evenings were calm than packed with screens.",
        "So I'd better put my phone away after nine.",
        "It's time I stopped putting things off until Monday.",
        "If a friend asked for advice, I'd rather they did the same."
      ],
      "translation": "Мне давно пора привести жизнь в порядок. Я лучше начну с малого, чем буду обещать себе гигантскую перемену. Честно, я бы предпочёл не составлять ещё один список, который проигнорирую. Лучше я поставлю всего одну ясную цель на эту неделю. Я бы предпочёл, чтобы мои вечера были спокойными, а не забитыми экранами. Так что лучше мне убирать телефон после девяти. Пора мне перестать откладывать всё до понедельника. Если бы друг попросил совета, я бы предпочёл, чтобы он сделал то же самое."
    },
    "drag": {
      "intro": "Соедини половинки. Следи за формой: после would rather (про себя) и had better — база; после «it's time» и «I'd rather you» — прошедшее.",
      "howto": "Перетащи английское начало к подходящему продолжению.",
      "pairs": [
        [
          "I'd rather",
          "walk than wait."
        ],
        [
          "I'd rather you",
          "didn't smoke here."
        ],
        [
          "You'd better",
          "see a doctor."
        ],
        [
          "It's high time we",
          "left this place."
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по would rather, had better и it's time. Пять вопросов — и капризные формы под контролем.",
      "items": [
        {
          "q": "«Я лучше пройдусь пешком» —",
          "opts": [
            "I'd rather to walk.",
            "I'd rather walk.",
            "I'd rather walking."
          ],
          "answer": 1,
          "explain": "После would rather — голый инфинитив: <b>walk</b>, без to."
        },
        {
          "q": "Предпочтение про другого: I'd rather you ___ now.",
          "opts": [
            "go",
            "went",
            "to go"
          ],
          "answer": 1,
          "explain": "I'd rather + другой человек → прошедшее: <b>went</b>."
        },
        {
          "q": "«Тебе лучше сходить к врачу» (настойчивый совет) —",
          "opts": [
            "You'd better to see a doctor.",
            "You'd better see a doctor.",
            "You had better seeing a doctor."
          ],
          "answer": 1,
          "explain": "had better + голый инфинитив: <b>better see</b>."
        },
        {
          "q": "«Тебе давно пора определиться» —",
          "opts": [
            "It's high time you decide.",
            "It's high time you decided.",
            "It's high time you to decide."
          ],
          "answer": 1,
          "explain": "It's (high) time + подлежащее → прошедшее: <b>decided</b>."
        },
        {
          "q": "Где had better использован неверно?",
          "opts": [
            "We'd better not be late.",
            "Yesterday we had better stay home.",
            "You'd better call her now."
          ],
          "answer": 1,
          "explain": "had better — про сейчас/будущее, не про прошлое (yesterday)."
        }
      ]
    },
    "picture": {
      "intro": "Опиши, как человек подгоняет себя или другого к решению.",
      "emoji": "⏰☕🚪",
      "prompt": "На картинке кто-то медлит с решением, а часы тикают. Опиши 3–4 фразами совет и предпочтение. Используй would rather, had better, it's (high) time.",
      "hint": "Структуры: He'd better … now ; I'd rather he … ; It's high time he … ; I'd rather … than …",
      "example": "He keeps hesitating while the clock ticks. He'd better make up his mind soon, or he'll miss his chance. Honestly, it's high time he decided. I'd rather he took a small risk than stayed stuck forever. I'd rather act and fail than wait and wonder.",
      "img": "img/b2/day-10.jpg",
      "credit": "Фото: Wonderlane · CC0 · <a href=\"https://www.flickr.com/photos/71401718@N00/4810839332\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Теперь твоя очередь дать себе или другу честный толчок на английском.",
      "prompt": "Напиши 4–6 предложений: что ты предпочёл(а) бы делать, что давно пора изменить и какой настойчивый совет ты дал(а) бы себе. Используй would rather (+ база и + you/we + прошедшее), had better, it's (high) time + прошедшее.",
      "hint": "Структуры: I'd rather … than … ; I'd rather you/we … ; You'd better … ; It's high time I … (помни: после had better и would rather про себя — база; после it's time и would rather you — прошедшее).",
      "example": "It's high time I changed my morning routine. I'd rather wake up calmly than rush out of the door every day. Honestly, I'd rather not check my phone before breakfast. So I'd better leave it in another room at night. I'd rather my mornings felt slow and clear. If a friend struggled with the same thing, I'd rather they started tonight than waited for the new year."
    }
  },
  "11": {
    "day": 11,
    "week": "02",
    "level": "B2",
    "themeRu": "Завтра буду делать",
    "themeEn": "Future Continuous",
    "intro": "<b>This time tomorrow I'll be flying to Rome.</b> Завтра в это время самолёт уже будет в воздухе, а действие — в самом разгаре. Сегодня — изящное будущее, которое русскому уху не очевидно: <b>Future Continuous</b>, <b>will be + -ing</b>. Русское «буду делать» не различает «сделаю» и «буду в процессе», а английский различает чётко. Плюс этот же оборот делает вопросы вежливее и мягче. Разберём, где он включается и почему «will flying» без be — это ошибка.",
    "introAudio": "This time tomorrow I'll be flying to Rome. Завтра в это время самолёт уже будет в воздухе, а действие — в самом разгаре. Сегодня изящное будущее, которое русскому уху не очевидно: Future Continuous, will be плюс -ing. Русское буду делать не различает сделаю и буду в процессе, а английский различает чётко. Плюс этот же оборот делает вопросы вежливее и мягче. Разберём, где он включается и почему will flying без be — это ошибка.",
    "goals": [
      "строить <b>will be + -ing</b> и видеть в нём «процесс в точке будущего»",
      "ловить маркеры <b>this time tomorrow / at 8 / all day</b>",
      "не ронять <b>be</b>: «will flying» ✗ → <b>will be flying</b>",
      "задавать вежливый вопрос <b>Will you be using…?</b> вместо настойчивого"
    ],
    "learned": [
      "Научился(лась) строить <b>will be + -ing</b> и увидел(а) в нём «процесс в точке будущего»",
      "Научился(лась) ловить маркеры <b>this time tomorrow / at 8 / all day</b>",
      "Перестал(а) ронять <b>be</b>: «will flying» ✗ → <b>will be flying</b>",
      "Научился(лась) задавать вежливый вопрос <b>Will you be using…?</b> вместо настойчивого"
    ],
    "review": {
      "intro": "Сначала вернём три способа будущего из A2 — <b>will</b>, <b>going to</b> и <b>present continuous</b> для планов. Сегодняшний Future Continuous встаёт рядом с ними и добавляет новый смысл — «в процессе», — поэтому важно сначала освежить базу.",
      "introAudio": "Сначала вернём три способа будущего из A2 — will, going to и present continuous для планов. Сегодняшний Future Continuous встаёт рядом с ними и добавляет новый смысл — «в процессе», — поэтому важно сначала освежить базу.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> мгновенное решение в момент речи — какой способ будущего?",
          "q": "The phone's ringing. — OK, I ___ it.",
          "opts": [
            "will get",
            "am getting",
            "get"
          ],
          "answer": 0,
          "explain": "Решение прямо сейчас, спонтанно → <b>will</b> + база (will get)."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> заранее договорённый план с конкретным временем — какой способ?",
          "q": "I ___ Tom at six tomorrow — we arranged it last week.",
          "opts": [
            "will meet",
            "am meeting",
            "meet"
          ],
          "answer": 1,
          "explain": "Договорённый план → present continuous: <b>am meeting</b>."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> намерение/план, который виден сейчас. be going to + база.",
          "q": "Посмотри на тучи — будет дождь. (It …)",
          "accept": [
            "it's going to rain",
            "it is going to rain"
          ],
          "placeholder": "It's going to ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · процесс в будущем",
        "title": "<em>will be + -ing</em> — в самом разгаре",
        "paras": [
          "Future Continuous показывает <b>действие в процессе в конкретной точке будущего</b>. Не «начну/закончу», а «буду в середине дела». Представь стрелку будущего и точку на ней: в этой точке действие уже идёт. <b>This time tomorrow I'll be flying to Rome.</b> = Завтра в это время я буду лететь (в воздухе, в процессе).",
          "Форма простая и неизменная: <b>will be + глагол-ing</b>. Для всех лиц одинаково: I'll be working, she'll be working, they'll be working. Отрицание — <b>won't be + -ing</b>: <b>I won't be working on Sunday.</b>",
          "Сигналы этого времени — точные «когда»: <b>this time tomorrow</b>, <b>at 8 o'clock</b>, <b>at midnight</b>, <b>all day</b>, <b>this time next week</b>. Они задают ту самую точку, в которой действие застаём в разгаре."
        ],
        "audio": "Future Continuous показывает действие в процессе в конкретной точке будущего. Не «начну или закончу», а «буду в середине дела». This time tomorrow I'll be flying to Rome — завтра в это время я буду лететь. Форма: will be плюс глагол с инг. Для всех лиц одинаково. Отрицание: won't be плюс инг. Сигналы — точные «когда»: this time tomorrow, at eight o'clock, all day.",
        "table": {
          "rows": [
            [
              "форма",
              "will be + -ing (will be flying)"
            ],
            [
              "для всех лиц",
              "I/you/he/we/they will be working"
            ],
            [
              "отрицание",
              "won't be + -ing (won't be working)"
            ],
            [
              "маркеры",
              "this time tomorrow, at 8, all day"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Завтра в это время я буду лететь в Рим.",
            "en": "This time tomorrow I<b>'ll be flying</b> to Rome.",
            "gloss": "точка будущего + процесс",
            "say": "This time tomorrow I'll be flying to Rome."
          },
          {
            "ru": "В восемь вечера мы будем ужинать.",
            "en": "At eight we<b>'ll be having</b> dinner.",
            "gloss": "at 8 — точка, действие в разгаре",
            "say": "At eight we'll be having dinner."
          },
          {
            "ru": "В воскресенье я не буду работать.",
            "en": "I <b>won't be working</b> on Sunday.",
            "gloss": "отрицание: won't be + -ing",
            "say": "I won't be working on Sunday."
          }
        ],
        "mistakes": [
          {
            "wrong": "This time tomorrow I will fly to Rome.",
            "right": "This time tomorrow I <b>will be flying</b> to Rome.",
            "why": "в точке будущего действие в разгаре → will be + -ing"
          },
          {
            "wrong": "At eight we will having dinner.",
            "right": "At eight we will <b>be having</b> dinner.",
            "why": "нельзя ронять be: will be having"
          }
        ],
        "mnemonic": "🎯 Точка будущего + действие в разгаре = will be + -ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> есть точка «this time tomorrow» и процесс — выбери форму.",
            "q": "This time tomorrow we ___ on the beach.",
            "opts": [
              "will lie",
              "will be lying",
              "lie"
            ],
            "answer": 1,
            "explain": "Действие в разгаре в точке будущего → <b>will be lying</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери процесс в точке будущего.",
            "q": "Собери: «В девять я буду готовить ужин»",
            "want": "At nine I will be cooking dinner",
            "answer": "At nine I will be cooking dinner"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши отрицание в Future Continuous. work → working.",
            "q": "В воскресенье я не буду работать.",
            "accept": [
              "i won't be working on sunday",
              "i will not be working on sunday"
            ],
            "placeholder": "I won't be ... on Sunday"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · русская ловушка",
        "title": "Русское «буду делать» — два разных будущих",
        "paras": [
          "Вот сердце дня. По-русски «буду делать» одно — и оно не различает «сделаю к концу» и «буду в процессе». Английский различает строго. <b>I'll finish the report by 8.</b> = закончу (результат к точке). <b>At 8 I'll be writing the report.</b> = в восемь буду в процессе написания.",
          "Из-за этого русскоязычные роняют <b>be</b> и говорят «will flying», «will working» — будто -ing цепляется прямо к will. Нельзя. Конструкция жёсткая: <b>will + be + -ing</b>. Три кирпича, средний (be) не выкидывается никогда.",
          "Памятка-вопрос: «я застаю действие В РАЗГАРЕ в эту минуту будущего?» Если да — <b>will be + -ing</b>. Если важен только итог/факт — простое <b>will + база</b>. Это разделение и есть то, чего нет в русском."
        ],
        "audio": "Сердце дня. По-русски «буду делать» одно, оно не различает «сделаю к концу» и «буду в процессе». Английский различает строго. I'll finish the report by eight — закончу. At eight I'll be writing the report — в восемь буду в процессе. Из-за этого русскоязычные роняют be и говорят will flying. Нельзя. Конструкция жёсткая: will плюс be плюс инг. Средний кирпич be не выкидывается никогда.",
        "table": {
          "rows": [
            [
              "результат/факт",
              "will + база: I'll finish it by 8."
            ],
            [
              "процесс в точке",
              "will be + -ing: At 8 I'll be writing."
            ],
            [
              "❌ will flying",
              "✅ will BE flying (be не теряем)"
            ],
            [
              "русское «буду делать»",
              "одно — а в английском два смысла"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я закончу к восьми. (итог)",
            "en": "I<b>'ll finish</b> it by eight.",
            "gloss": "результат → will + база",
            "say": "I'll finish it by eight."
          },
          {
            "ru": "В восемь я буду писать отчёт. (процесс)",
            "en": "At eight I<b>'ll be writing</b> the report.",
            "gloss": "процесс → will be + -ing",
            "say": "At eight I'll be writing the report."
          },
          {
            "ru": "Не звони в семь — я буду вести машину.",
            "en": "Don't call at seven — I<b>'ll be driving</b>.",
            "gloss": "застаём в разгаре",
            "say": "Don't call at seven, I'll be driving."
          }
        ],
        "mistakes": [
          {
            "wrong": "At seven I will driving home.",
            "right": "At seven I will <b>be driving</b> home.",
            "why": "потеряли be: всегда will + be + -ing"
          },
          {
            "wrong": "This time next week she will lying on a beach.",
            "right": "This time next week she will <b>be lying</b> on a beach.",
            "why": "три кирпича: will be lying"
          }
        ],
        "mnemonic": "🧱 Три кирпича: will + BE + -ing. Средний (be) не выкидывай.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> важен итог к сроку (by 6), не процесс. Выбери форму.",
            "q": "Don't worry — I ___ the work by six.",
            "opts": [
              "will be finishing",
              "will finish",
              "will finishing"
            ],
            "answer": 1,
            "explain": "Важен результат к сроку → простое <b>will finish</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди ошибку с потерянным be.",
            "q": "Где русская ловушка «will + -ing» без be?",
            "opts": [
              "At noon they'll be travelling.",
              "At noon they will travelling.",
              "At noon they'll be having lunch."
            ],
            "answer": 1,
            "explain": "Пропущен be: правильно <b>will be travelling</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши процесс в точке будущего. drive → driving.",
            "q": "Не звони в семь — я буду за рулём.",
            "accept": [
              "don't call at seven i'll be driving",
              "don't call at seven, i'll be driving",
              "do not call at seven i will be driving"
            ],
            "placeholder": "Don't call at seven, I'll be ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · вежливый вопрос",
        "title": "<em>Will you be using…?</em> — мягкий вопрос",
        "paras": [
          "У Future Continuous есть второе, очень полезное применение — <b>вежливый, ненавязчивый вопрос</b> о чьих-то планах. Сравни: <b>Are you going to use the car tonight?</b> звучит как «ты собираешься? (мне нужно знать твои намерения)». А <b>Will you be using the car tonight?</b> — мягче: «так уж сложится, что машина будет занята?» — без нажима на собеседника.",
          "Почему вежливее? Потому что этот вопрос спрашивает не про <b>намерение/желание</b> человека, а про <b>естественный ход событий</b>. Ты как бы не давишь на чужой выбор, а интересуешься, как само сложится. Поэтому официанты, коллеги и продавцы любят эту форму.",
          "<b>Will you be paying by card?</b> = Вы будете платить картой? (вежливо). <b>Will you be joining us for dinner?</b> = Вы к нам присоединитесь за ужином? Форма та же: <b>will + лицо + be + -ing</b>."
        ],
        "audio": "У Future Continuous есть второе применение — вежливый, ненавязчивый вопрос о планах. Are you going to use the car tonight звучит как «ты собираешься?». А Will you be using the car tonight мягче — без нажима. Этот вопрос спрашивает не про намерение человека, а про естественный ход событий. Will you be paying by card? Will you be joining us for dinner? Форма: will плюс лицо плюс be плюс инг.",
        "table": {
          "rows": [
            [
              "Are you going to…?",
              "про намерение (есть лёгкий нажим)"
            ],
            [
              "Will you be …-ing?",
              "про естественный ход (мягко, вежливо)"
            ],
            [
              "Will you be paying by card?",
              "Вы будете платить картой?"
            ],
            [
              "форма",
              "will + you + be + -ing"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Ты будешь пользоваться машиной сегодня вечером?",
            "en": "<b>Will you be using</b> the car tonight?",
            "gloss": "мягко, без нажима",
            "say": "Will you be using the car tonight?"
          },
          {
            "ru": "Вы будете платить картой?",
            "en": "<b>Will you be paying</b> by card?",
            "gloss": "вежливый сервисный вопрос",
            "say": "Will you be paying by card?"
          },
          {
            "ru": "Вы присоединитесь к нам за ужином?",
            "en": "<b>Will you be joining</b> us for dinner?",
            "say": "Will you be joining us for dinner?"
          }
        ],
        "mistakes": [
          {
            "wrong": "Will you using the car tonight?",
            "right": "Will you <b>be using</b> the car tonight?",
            "why": "be обязателен и в вопросе: will you be using"
          },
          {
            "wrong": "Do you be working late?",
            "right": "<b>Will you be working</b> late?",
            "why": "вопрос Future Continuous строится через will, не do"
          }
        ],
        "mnemonic": "🙂 Вежливо о планах: Will you be …-ing? — про ход событий, не про нажим.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери вежливый вопрос о планах.",
            "q": "Официант хочет вежливо спросить про оплату:",
            "opts": [
              "Will you be paying by card?",
              "Do you pay by card?",
              "Will you paying by card?"
            ],
            "answer": 0,
            "explain": "Вежливый вопрос → <b>Will you be paying…?</b> (will + be + -ing)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вежливый вопрос о машине.",
            "q": "Собери: «Ты будешь пользоваться машиной сегодня вечером?»",
            "want": "Will you be using the car tonight",
            "answer": "Will you be using the car tonight"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши вежливый вопрос. join → joining.",
            "q": "Вы присоединитесь к нам за ужином?",
            "accept": [
              "will you be joining us for dinner",
              "will you be joining us for dinner?"
            ],
            "placeholder": "Will you be ... us for dinner?"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · ход событий и догадка",
        "title": "Само собой и «он наверняка сейчас…»",
        "paras": [
          "Future Continuous хорош ещё для двух тонких смыслов. Первый — <b>действие случится само, как часть привычного хода</b>, без специального решения: <b>I'll be seeing Tom tomorrow</b> (мы и так пересекаемся — занесу ему книгу). Это снимает оттенок «я специально это запланировал».",
          "Второй — <b>догадка о том, что происходит прямо сейчас или скоро по расписанию</b>: <b>Don't phone now — they'll be having dinner.</b> = Не звони сейчас, они наверняка ужинают. Здесь will be + -ing = «по всей видимости, в процессе».",
          "Сравни оттенки одной фразы: <b>I'm seeing Tom</b> (специально договорились) vs <b>I'll be seeing Tom anyway</b> (и так увидимся, между делом). Future Continuous звучит легче, без обязательства и нажима — поэтому он так любим в вежливой и непринуждённой речи."
        ],
        "audio": "Future Continuous хорош ещё для двух смыслов. Первый — действие случится само, как часть привычного хода, без специального решения: I'll be seeing Tom tomorrow, мы и так пересекаемся. Второй — догадка о том, что происходит сейчас по расписанию: Don't phone now, they'll be having dinner — наверняка ужинают. I'm seeing Tom — специально договорились; I'll be seeing Tom anyway — и так увидимся, между делом.",
        "table": {
          "rows": [
            [
              "часть обычного хода",
              "I'll be seeing Tom anyway (без спец. плана)"
            ],
            [
              "догадка про сейчас",
              "They'll be having dinner now."
            ],
            [
              "лёгкий, без нажима тон",
              "звучит непринуждённо и вежливо"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я завтра и так увижусь с Томом — передам ему.",
            "en": "I<b>'ll be seeing</b> Tom tomorrow anyway.",
            "gloss": "само, между делом",
            "say": "I'll be seeing Tom tomorrow anyway."
          },
          {
            "ru": "Не звони сейчас — они наверняка ужинают.",
            "en": "Don't call now — they<b>'ll be having</b> dinner.",
            "gloss": "догадка про текущий момент",
            "say": "Don't call now, they'll be having dinner."
          },
          {
            "ru": "Не переживай — я всё равно буду проезжать мимо банка.",
            "en": "Don't worry — I<b>'ll be passing</b> the bank anyway.",
            "say": "Don't worry, I'll be passing the bank anyway."
          }
        ],
        "mistakes": [
          {
            "wrong": "Don't call now — they will have dinner.",
            "right": "Don't call now — they<b>'ll be having</b> dinner.",
            "why": "догадка про процесс сейчас → will be + -ing"
          }
        ],
        "mnemonic": "🌊 Само собой / «наверняка сейчас в процессе» → will be + -ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> догадка о том, что происходит прямо сейчас. Выбери форму.",
            "q": "It's midnight — the kids ___ now.",
            "opts": [
              "will sleep",
              "will be sleeping",
              "sleep"
            ],
            "answer": 1,
            "explain": "Догадка про текущий процесс → <b>will be sleeping</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери «и так увидимся, между делом».",
            "q": "Собери: «Я завтра и так буду видеться с Анной»",
            "want": "I will be seeing Anna tomorrow anyway",
            "answer": "I will be seeing Anna tomorrow anyway"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши догадку про сейчас. have dinner → having dinner.",
            "q": "Не звони сейчас — они наверняка ужинают.",
            "accept": [
              "don't call now they'll be having dinner",
              "don't call now, they'll be having dinner",
              "do not call now they will be having dinner"
            ],
            "placeholder": "Don't call now, they'll be ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Живой диалог: коллеги согласуют планы на завтра и вежливо уточняют детали. Тапни строку для перевода — слушай Future Continuous и его мягкие вопросы.",
      "lines": [
        {
          "who": "A",
          "name": "Ben",
          "side": "left",
          "en": "This time tomorrow I'll be flying to the conference in Madrid.",
          "ru": "Завтра в это время я буду лететь на конференцию в Мадрид.",
          "words": [
            [
              "this time tomorrow",
              "завтра в это время"
            ],
            [
              "I'll be flying",
              "я буду лететь"
            ]
          ]
        },
        {
          "who": "T",
          "name": "Tess",
          "side": "right",
          "en": "Nice. Will you be taking the early flight or the afternoon one?",
          "ru": "Здорово. Ты полетишь ранним рейсом или дневным?",
          "words": [
            [
              "Will you be taking",
              "ты будешь лететь / полетишь (вежливо)"
            ],
            [
              "the early flight",
              "ранний рейс"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Ben",
          "side": "left",
          "en": "The early one. So at nine I'll be sitting in a taxi to the airport.",
          "ru": "Ранним. Так что в девять я уже буду ехать в такси в аэропорт.",
          "words": [
            [
              "I'll be sitting",
              "я буду ехать/сидеть"
            ],
            [
              "to the airport",
              "в аэропорт"
            ]
          ]
        },
        {
          "who": "T",
          "name": "Tess",
          "side": "right",
          "en": "Then I won't call before ten — you'll be checking in.",
          "ru": "Тогда я не буду звонить до десяти — ты будешь проходить регистрацию.",
          "words": [
            [
              "won't call",
              "не буду звонить"
            ],
            [
              "checking in",
              "регистрироваться на рейс"
            ]
          ]
        },
        {
          "who": "A",
          "name": "Ben",
          "side": "left",
          "en": "Perfect. I'll be seeing the whole team there anyway, so I'll pass on your message.",
          "ru": "Отлично. Я там и так увижу всю команду, так что передам твоё сообщение.",
          "words": [
            [
              "I'll be seeing",
              "я и так увижусь"
            ],
            [
              "pass on",
              "передать"
            ]
          ]
        }
      ]
    },
    "scene": {
      "intro": "Короткая сценка: администратор отеля вежливо уточняет планы гостя. Слушай вежливые вопросы Future Continuous.",
      "lines": [
        {
          "who": "A",
          "en": "Welcome back. Will you be staying with us the whole week?",
          "ru": "С возвращением. Вы будете гостить у нас всю неделю?"
        },
        {
          "who": "B",
          "en": "Yes. This time tomorrow I'll be exploring the old town.",
          "ru": "Да. Завтра в это время я буду гулять по старому городу."
        },
        {
          "who": "A",
          "en": "Lovely. Will you be needing breakfast in your room?",
          "ru": "Прекрасно. Вам будет нужен завтрак в номер?"
        },
        {
          "who": "B",
          "en": "No, thanks. At eight I'll be having coffee on the terrace.",
          "ru": "Нет, спасибо. В восемь я буду пить кофе на террасе."
        }
      ]
    },
    "vocab": {
      "intro": "Слова дня — лексика планов, путешествий и времени (B2). Повтори вслух с примерами.",
      "items": [
        {
          "en": "this time tomorrow",
          "ru": "завтра в это время",
          "ex": "This time tomorrow I'll be home."
        },
        {
          "en": "check in",
          "ru": "регистрироваться (на рейс/в отель)",
          "ex": "We check in at noon."
        },
        {
          "en": "depart",
          "ru": "отправляться, вылетать",
          "ex": "The train departs at six."
        },
        {
          "en": "in the meantime",
          "ru": "тем временем",
          "ex": "In the meantime, relax."
        },
        {
          "en": "pass on (a message)",
          "ru": "передать (сообщение)",
          "ex": "I'll pass it on."
        },
        {
          "en": "be on one's way",
          "ru": "быть в пути",
          "ex": "She's on her way now."
        },
        {
          "en": "explore",
          "ru": "исследовать, гулять-осматривать",
          "ex": "We'll explore the old town."
        },
        {
          "en": "stopover",
          "ru": "пересадка, остановка в пути",
          "ex": "We have a stopover in Paris."
        },
        {
          "en": "schedule",
          "ru": "расписание, график",
          "ex": "It's not on the schedule."
        },
        {
          "en": "run errands",
          "ru": "заниматься делами/поручениями",
          "ex": "I'll be running errands all morning."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек представляет завтрашний день по часам. Везде действие застаём в разгаре — Future Continuous.",
      "title": "Tomorrow, hour by hour",
      "sentences": [
        "This time tomorrow I'll be sitting on a train to the coast.",
        "At nine I'll be drinking coffee and watching the fields go by.",
        "By noon I won't be working — I'll be walking along the harbour.",
        "My friends will be waiting for me at the little café.",
        "We'll be catching up on everything we've missed.",
        "In the afternoon we'll be exploring the old streets together.",
        "Don't call me around eight — we'll be having dinner by the sea.",
        "It feels strange that, while you read this, I'll already be packing."
      ],
      "translation": "Завтра в это время я буду сидеть в поезде к побережью. В девять я буду пить кофе и смотреть, как проносятся поля. К полудню я уже не буду работать — я буду гулять вдоль гавани. Друзья будут ждать меня в маленьком кафе. Мы будем навёрстывать всё, что пропустили. Днём мы будем вместе бродить по старым улочкам. Не звони мне около восьми — мы будем ужинать у моря. Странно, что, пока ты читаешь это, я уже буду собирать чемодан."
    },
    "drag": {
      "intro": "Соедини половинки. Следи за конструкцией will be + -ing и за вежливыми вопросами.",
      "howto": "Перетащи английское начало к подходящему продолжению.",
      "pairs": [
        [
          "This time tomorrow",
          "I'll be flying to Rome."
        ],
        [
          "Will you be using",
          "the car tonight?"
        ],
        [
          "Don't call at seven —",
          "I'll be driving home."
        ],
        [
          "At midnight the kids",
          "will be sleeping."
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по Future Continuous. Пять вопросов — и «буду в процессе» больше не сливается с «сделаю».",
      "items": [
        {
          "q": "«Завтра в это время я буду лететь в Рим» —",
          "opts": [
            "This time tomorrow I will fly to Rome.",
            "This time tomorrow I'll be flying to Rome.",
            "This time tomorrow I will flying to Rome."
          ],
          "answer": 1,
          "explain": "Процесс в точке будущего → <b>will be flying</b>."
        },
        {
          "q": "Где русская ловушка (потерян be)?",
          "opts": [
            "At eight we'll be having dinner.",
            "At eight we will having dinner.",
            "At eight we'll be watching a film."
          ],
          "answer": 1,
          "explain": "Пропущен be: правильно <b>will be having</b>."
        },
        {
          "q": "Вежливый вопрос про оплату:",
          "opts": [
            "Will you be paying by card?",
            "Will you paying by card?",
            "Do you be paying by card?"
          ],
          "answer": 0,
          "explain": "Future Continuous: <b>Will you be paying…?</b> (will + be + -ing)."
        },
        {
          "q": "Важен только итог к сроку: «Я закончу к шести».",
          "opts": [
            "I'll be finishing it by six.",
            "I'll finish it by six.",
            "I finish it by six."
          ],
          "answer": 1,
          "explain": "Результат к сроку → простое <b>will finish</b>, не процесс."
        },
        {
          "q": "Догадка про сейчас: «Не звони — они наверняка ужинают».",
          "opts": [
            "Don't call — they will have dinner.",
            "Don't call — they'll be having dinner.",
            "Don't call — they having dinner."
          ],
          "answer": 1,
          "explain": "Догадка про текущий процесс → <b>will be having</b> dinner."
        }
      ]
    },
    "picture": {
      "intro": "Опиши, чем человек будет занят завтра в конкретный момент.",
      "emoji": "✈️🕘🏖️",
      "prompt": "Человек смотрит на билет и воображает завтрашний день. Опиши 3–4 фразами, чем он будет занят в разные моменты завтра. Используй will be + -ing и маркеры this time tomorrow / at 8.",
      "hint": "Структуры: This time tomorrow he'll be … ; At eight he'll be … ; He won't be … ; By noon he'll be …",
      "example": "He is holding his ticket and imagining tomorrow. This time tomorrow he'll be flying over the sea. At eight he'll be having breakfast above the clouds. He won't be working — he'll be reading a book instead. By the afternoon he'll be walking along a sunny beach.",
      "img": "img/b2/day-11.jpg",
      "credit": "Фото: D Coetzee · CC0 · <a href=\"https://www.flickr.com/photos/29507259@N02/3527948344\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Теперь твоя очередь спланировать завтрашний день по моментам на английском.",
      "prompt": "Напиши 4–6 предложений о том, чем ты будешь занят(а) завтра в конкретные моменты. Используй Future Continuous (will be + -ing), хотя бы один вежливый вопрос (Will you be …-ing?) и маркеры времени.",
      "hint": "Структуры: This time tomorrow I'll be … ; At nine I'll be … ; I won't be … ; Will you be …-ing? (не теряй be: will + be + -ing).",
      "example": "Tomorrow is going to be busy. This time tomorrow I'll be sitting in a long meeting at work. At one I'll be having lunch with a client near the office. I won't be answering my phone in the afternoon, because I'll be travelling to another branch. By the evening I'll be relaxing at home with a film. Will you be joining me for coffee at some point?"
    }
  },
  "12": {
    "day": 12,
    "week": "02",
    "level": "B2",
    "themeRu": "К сроку уже сделаю",
    "themeEn": "Future Perfect",
    "intro": "Описывать процесс в будущем ты уже умеешь — <b>this time tomorrow I'll be flying</b>. Сегодня — следующий шаг: дело, которое <b>будет уже завершено</b> к какому-то моменту впереди. Представь дедлайн в пятницу: «к пятнице я сдам отчёт» — не просто «сдам», а «к сроку уже будет готово». Это <b>Future Perfect</b>: <b>will have + 3-я форма</b>. Заодно разберём коварную пару <b>by</b> (к) и <b>until</b> (до), на которой спотыкается почти каждый русскоязычный. Спокойно — поехали.",
    "introAudio": "Описывать процесс в будущем ты уже умеешь — this time tomorrow I'll be flying. Сегодня следующий шаг: дело, которое будет уже завершено к какому-то моменту впереди. Представь дедлайн в пятницу: к пятнице я сдам отчёт — не просто сдам, а к сроку уже будет готово. Это Future Perfect: will have плюс третья форма. Заодно разберём коварную пару by, к, и until, до, на которой спотыкается почти каждый русскоязычный. Спокойно — поехали.",
    "goals": [
      "строить Future Perfect: <b>will have + 3-я форма</b> — «к сроку уже сделаю»",
      "ставить дедлайн через <b>by</b> и придаточное <b>by the time</b> + настоящее время",
      "не путать <b>by</b> (к какому-то моменту) и <b>until</b> (вплоть до момента)",
      "слышать разницу: <b>will be doing</b> (процесс) vs <b>will have done</b> (результат к сроку)"
    ],
    "learned": [
      "Научился(лась) строить Future Perfect: <b>will have + 3-я форма</b> — «к сроку уже сделаю»",
      "Научился(лась) ставить дедлайн через <b>by</b> и придаточное <b>by the time</b> + настоящее время",
      "Перестал(а) путать <b>by</b> (к какому-то моменту) и <b>until</b> (вплоть до момента)",
      "Научился(лась) слышать разницу: <b>will be doing</b> (процесс) vs <b>will have done</b> (результат к сроку)"
    ],
    "review": {
      "intro": "Утренняя разминка перед новым. Возвращаем вчерашнее будущее-в-процессе, present perfect и предлоги в управлении — это фундамент под сегодняшний Future Perfect.",
      "introAudio": "Утренняя разминка перед новым. Возвращаем вчерашнее будущее-в-процессе, present perfect и предлоги в управлении — это фундамент под сегодняшний Future Perfect.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> Future Continuous (Д11) — процесс в момент будущего.",
          "q": "«Завтра в это время я буду лететь в Рим» —",
          "opts": [
            "This time tomorrow I will fly to Rome",
            "This time tomorrow I'll be flying to Rome",
            "This time tomorrow I am flying to Rome"
          ],
          "answer": 1,
          "explain": "в момент будущего = процесс → will be + -ing (will be flying)."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> Present Perfect — спроси про результат. finish → finished.",
          "q": "Ты уже закончил?",
          "accept": [
            "have you finished yet",
            "have you finished",
            "have you finished it yet"
          ],
          "placeholder": "Have you ... yet?"
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> предлог в управлении (always-on). depend + ?",
          "q": "«Всё зависит от погоды» — It all depends ___ the weather.",
          "opts": [
            "of",
            "on",
            "from"
          ],
          "answer": 1,
          "explain": "управление: depend <b>on</b> — «зависеть от»."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · новое время",
        "title": "«К сроку уже сделаю» — <em>Future Perfect</em>",
        "paras": [
          "Future Perfect отвечает на вопрос «что будет УЖЕ ГОТОВО к какому-то моменту в будущем?». Ты словно встаёшь в точку в будущем и смотришь назад: к пятнице, к твоему приходу, к концу года — дело уже завершено.",
          "Форма одна для всех лиц: <b>will have + 3-я форма</b> глагола. <b>By Friday I will have finished the report.</b> = К пятнице я уже закончу отчёт. Сокращённо — <b>I'll have done</b>; в беглой речи это звучит слитно, почти «айл-əв-дан».",
          "Русская ловушка: мы говорим «к тому времени я сделаю» обычным будущим. По-английски здесь нужен именно перфект завершённости: «к тому времени сделаю» → <b>I will have done it by then</b>, не «I will do»."
        ],
        "audio": "Future Perfect отвечает на вопрос: что будет уже готово к какому-то моменту в будущем? Ты встаёшь в точку в будущем и смотришь назад. Форма одна для всех лиц: will have плюс третья форма. By Friday I will have finished the report — к пятнице я уже закончу отчёт. Русская ловушка: мы говорим к тому времени я сделаю обычным будущим, а по-английски нужен перфект: I will have done it by then, не I will do.",
        "table": {
          "rows": [
            [
              "I / you / we / they / he / she",
              "will have + 3-я форма (will have done)"
            ],
            [
              "сокращённо",
              "I'll have · she'll have · we'll have"
            ],
            [
              "вопрос",
              "Will you have finished by then?"
            ],
            [
              "отрицание",
              "won't have finished"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "К полуночи я уже закончу.",
            "en": "By midnight I <b>will have finished</b>.",
            "gloss": "will have + finished",
            "say": "By midnight I will have finished."
          },
          {
            "ru": "К июню они уже построят мост.",
            "en": "By June they <b>will have built</b> the bridge.",
            "gloss": "build → built",
            "say": "By June they will have built the bridge."
          },
          {
            "ru": "К твоему приходу я всё уберу.",
            "en": "I <b>will have cleaned</b> everything by the time you arrive.",
            "gloss": "результат к моменту",
            "say": "I will have cleaned everything by the time you arrive."
          },
          {
            "ru": "К сорока он накопит достаточно.",
            "en": "He <b>will have saved</b> enough by forty.",
            "say": "He will have saved enough by forty."
          }
        ],
        "mistakes": [
          {
            "wrong": "By the time you arrive I will cook dinner",
            "right": "By the time you arrive I <b>will have cooked</b> dinner",
            "why": "к моменту в будущем уже готово → will have + 3-я форма"
          },
          {
            "wrong": "I will have finish it",
            "right": "I will have <b>finished</b> it",
            "why": "после have — 3-я форма (finished), не базовая"
          }
        ],
        "mnemonic": "⏳ Взгляд из будущего назад: к сроку — will have + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> к сроку «уже завершено».",
            "q": "«К следующему понедельнику я уже сдам проект» —",
            "opts": [
              "By next Monday I will submit the project",
              "By next Monday I will have submitted the project",
              "By next Monday I am submitting the project"
            ],
            "answer": 1,
            "explain": "к сроку завершено → will have + 3-я форма (submitted)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери Future Perfect. leave → left.",
            "q": "Собери: «К полудню они уже уедут»",
            "want": "By noon they will have left",
            "answer": "By noon they will have left"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши Future Perfect. save → saved.",
            "q": "К концу года я накоплю достаточно.",
            "accept": [
              "by the end of the year i will have saved enough",
              "by the end of the year i'll have saved enough"
            ],
            "placeholder": "By the end of the year I ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · дедлайн",
        "title": "<em>by</em> и <em>by the time</em> — точка-дедлайн",
        "paras": [
          "Future Perfect почти всегда живёт рядом со словом <b>by</b> — «к (какому-то моменту)»: <b>by Friday</b> (к пятнице), <b>by 6 o'clock</b> (к шести), <b>by the end of the month</b> (к концу месяца), <b>by then</b> (к тому времени).",
          "Если дедлайн — это целое событие, бери придаточное <b>by the time</b> (к тому времени, как…). И тут вторая ловушка: после <b>by the time</b> идёт <b>настоящее</b> время, а не will: <b>By the time you arrive, I will have cooked dinner.</b> Не «by the time you will arrive».",
          "Логика та же, что в придаточных времени (when / after): будущее в них передаётся настоящим. Will остаётся только в главной части — там, где сам Future Perfect."
        ],
        "audio": "Future Perfect почти всегда живёт рядом со словом by, к какому-то моменту: by Friday, by six o'clock, by the end of the month, by then. Если дедлайн это целое событие, бери придаточное by the time, к тому времени как. И вот ловушка: после by the time идёт настоящее время, не will. By the time you arrive, I will have cooked dinner. Не by the time you will arrive. Will остаётся только в главной части.",
        "table": {
          "rows": [
            [
              "by + момент",
              "к сроку: by Friday · by 6 · by then"
            ],
            [
              "by the time + настоящее",
              "к тому времени, как: by the time you arrive"
            ],
            [
              "главная часть",
              "will have + 3-я форма"
            ],
            [
              "❌ запрет",
              "не «by the time you will arrive»"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "К тому времени, как ты вернёшься, я закончу.",
            "en": "<b>By the time</b> you <b>get</b> back, I'll have finished.",
            "gloss": "by the time + get (настоящее)",
            "say": "By the time you get back, I'll have finished."
          },
          {
            "ru": "К следующему лету мы проживём здесь уже два года.",
            "en": "<b>By</b> next summer we'll have lived here for two years.",
            "say": "By next summer we'll have lived here for two years."
          },
          {
            "ru": "К тому времени, как начнётся фильм, мы займём места.",
            "en": "By the time the film <b>starts</b>, we'll have taken our seats.",
            "gloss": "starts, не will start",
            "say": "By the time the film starts, we'll have taken our seats."
          }
        ],
        "mistakes": [
          {
            "wrong": "By the time you will come, I will have left",
            "right": "By the time you <b>come</b>, I will have left",
            "why": "после by the time — настоящее, не will"
          },
          {
            "wrong": "I'll have finished until Friday",
            "right": "I'll have finished <b>by</b> Friday",
            "why": "дедлайн → by, не until (об этом — дальше)"
          }
        ],
        "mnemonic": "🎯 by = дедлайн. После by the time — настоящее, will только в главной.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> после by the time — настоящее.",
            "q": "«К тому времени, как ты позвонишь, я уже уйду» —",
            "opts": [
              "By the time you will call, I will have left",
              "By the time you call, I will have left",
              "By the time you called, I will have left"
            ],
            "answer": 1,
            "explain": "by the time + настоящее (call); will have left — в главной."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери предлог дедлайна.",
            "q": "«Сдай работу к пятнице» —",
            "opts": [
              "Hand it in until Friday",
              "Hand it in by Friday",
              "Hand it in on Friday"
            ],
            "answer": 1,
            "explain": "дедлайн «к» → by Friday."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. stop → stopped.",
            "q": "Собери: «К тому времени, как мы доберёмся, дождь закончится»",
            "want": "By the time we get there the rain will have stopped",
            "answer": "By the time we get there the rain will have stopped"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "<em>by</em> (к) ≠ <em>until</em> (до)",
        "paras": [
          "Самая частая ошибка дня. По-русски и «к пятнице», и «до пятницы» — про будущий срок, и легко перепутать. По-английски это разные слова с разной логикой.",
          "<b>by</b> — это <b>крайний срок, дедлайн</b>: действие случится не позже этого момента, один раз. <b>Finish it by 6.</b> = Закончи к шести (в любой момент до шести, но не позже). <b>until / till</b> — это <b>длительность вплоть до момента</b>: ситуация тянется всё это время. <b>Wait until 6.</b> = Жди до шести (все эти часы).",
          "Проверка: «сделать к сроку» → <b>by</b>; «продолжать / ждать до момента» → <b>until</b>. <b>I'll have read it by Monday</b> (дедлайн) vs <b>I'll keep reading until Monday</b> (всё это время)."
        ],
        "audio": "Самая частая ошибка дня. По-русски и к пятнице, и до пятницы про будущий срок, легко перепутать. By это крайний срок, дедлайн: действие случится не позже этого момента, один раз. Finish it by six, закончи к шести. Until или till это длительность вплоть до момента: ситуация тянется всё это время. Wait until six, жди до шести. Сделать к сроку — by, продолжать до момента — until.",
        "table": {
          "rows": [
            [
              "by + момент",
              "ДЕДЛАЙН: не позже. Be back by 10."
            ],
            [
              "until / till + момент",
              "ДЛИТЕЛЬНОСТЬ: вплоть до. Stay until 10."
            ],
            [
              "проверка",
              "к сроку? → by. всё время до? → until"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Я доделаю это к завтрашнему дню.",
            "en": "I'll have done it <b>by</b> tomorrow.",
            "gloss": "дедлайн",
            "say": "I'll have done it by tomorrow."
          },
          {
            "ru": "Я работал до полуночи.",
            "en": "I worked <b>until</b> midnight.",
            "gloss": "длительность",
            "say": "I worked until midnight."
          },
          {
            "ru": "Магазин открыт до девяти.",
            "en": "The shop is open <b>until</b> nine.",
            "say": "The shop is open until nine."
          },
          {
            "ru": "Пришли его к понедельнику.",
            "en": "Send it <b>by</b> Monday.",
            "say": "Send it by Monday."
          }
        ],
        "mistakes": [
          {
            "wrong": "Please reply until Friday",
            "right": "Please reply <b>by</b> Friday",
            "why": "один раз, к сроку → by, не until"
          },
          {
            "wrong": "I'll wait for you by 8",
            "right": "I'll wait for you <b>until</b> 8",
            "why": "ждать = длиться до момента → until"
          }
        ],
        "mnemonic": "⏰ by = дедлайн (точка). until = всё время до точки (линия).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> один раз, к сроку.",
            "q": "«Отправь отчёт к понедельнику» —",
            "opts": [
              "Send the report until Monday",
              "Send the report by Monday"
            ],
            "answer": 1,
            "explain": "дедлайн → by."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> длится всё время до момента.",
            "q": "«Магазин работает до восьми» —",
            "opts": [
              "The shop is open by eight",
              "The shop is open until eight"
            ],
            "answer": 1,
            "explain": "длительность вплоть до → until."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> ждать = длиться до момента.",
            "q": "Я подожду до шести.",
            "accept": [
              "i will wait until six",
              "i'll wait until six",
              "i will wait till six",
              "i'll wait till six"
            ],
            "placeholder": "I'll wait ... six"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> дедлайн-событие.",
            "q": "«К твоему возвращению я всё доделаю» —",
            "opts": [
              "I'll have finished everything until you get back",
              "I'll have finished everything by the time you get back"
            ],
            "answer": 1,
            "explain": "дедлайн-событие → by the time + настоящее; until здесь нельзя."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · два будущих рядом",
        "title": "<em>will be doing</em> (процесс) vs <em>will have done</em> (результат)",
        "paras": [
          "Сравни вчерашнее и сегодняшнее. <b>Future Continuous</b> рисует процесс в моменте: <b>At 8 p.m. I'll be cooking.</b> = В восемь я буду готовить (в процессе). <b>Future Perfect</b> рисует результат к сроку: <b>By 8 p.m. I'll have cooked.</b> = К восьми я уже приготовлю (готово).",
          "Подсказывают предлоги: <b>at / this time</b> + момент → процесс (will be doing); <b>by</b> + момент → завершённость (will have done).",
          "Бонус B2: если хочешь подчеркнуть, СКОЛЬКО времени процесс будет длиться к сроку, есть <b>Future Perfect Continuous</b>: <b>By May I'll have been working here for ten years.</b> = К маю я проработаю здесь уже десять лет. Форма — <b>will have been + -ing</b>; нужна нечасто, но узнавать её полезно."
        ],
        "audio": "Сравни вчерашнее и сегодняшнее. Future Continuous рисует процесс в моменте: at eight I'll be cooking, в восемь я буду готовить. Future Perfect рисует результат к сроку: by eight I'll have cooked, к восьми уже приготовлю. Подсказывают предлоги: at или this time плюс момент — процесс; by плюс момент — завершённость. Бонус: чтобы подчеркнуть длительность к сроку, есть Future Perfect Continuous: by May I'll have been working here for ten years. Форма will have been плюс -ing.",
        "table": {
          "rows": [
            [
              "at 8 / this time tomorrow",
              "процесс → will be doing"
            ],
            [
              "by 8 / by then",
              "результат → will have done"
            ],
            [
              "длительность к сроку",
              "will have been doing (for …)"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "В полночь я ещё буду ехать.",
            "en": "At midnight I'<b>ll be driving</b>.",
            "gloss": "процесс",
            "say": "At midnight I'll be driving."
          },
          {
            "ru": "К полуночи я уже доеду.",
            "en": "By midnight I'<b>ll have arrived</b>.",
            "gloss": "результат",
            "say": "By midnight I'll have arrived."
          },
          {
            "ru": "К концу года я проработаю здесь пять лет.",
            "en": "By the end of the year I'll <b>have been working</b> here for five years.",
            "gloss": "длительность к сроку",
            "say": "By the end of the year I'll have been working here for five years."
          }
        ],
        "mistakes": [
          {
            "wrong": "By 8 I will be cooked dinner",
            "right": "By 8 I will <b>have</b> cooked dinner",
            "why": "к сроку «готово» → will have done, не will be"
          },
          {
            "wrong": "At this time tomorrow I will have flown",
            "right": "At this time tomorrow I'll <b>be flying</b>",
            "why": "в момент = процесс → will be doing"
          }
        ],
        "mnemonic": "🎬 at / this time → процесс (be doing). by → готово (have done).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> в момент = процесс.",
            "q": "«В это время завтра я буду сдавать экзамен» —",
            "opts": [
              "This time tomorrow I'll have taken the exam",
              "This time tomorrow I'll be taking the exam"
            ],
            "answer": 1,
            "explain": "в момент = процесс → will be taking."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> к сроку = готово.",
            "q": "«К полудню я уже сдам экзамен» —",
            "opts": [
              "By noon I'll be taking the exam",
              "By noon I'll have taken the exam"
            ],
            "answer": 1,
            "explain": "к сроку готово → will have taken."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> подчеркни длительность к сроку.",
            "q": "Собери: «К маю я проработаю здесь два года»",
            "want": "By May I will have been working here for two years",
            "answer": "By May I will have been working here for two years"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Лена торопит коллегу перед дедлайном. Слушай Future Perfect и пару by / by the time в живой речи.",
      "lines": [
        {
          "who": "A",
          "en": "Will you have finished the slides by the meeting?",
          "ru": "Ты успеешь доделать слайды к совещанию?"
        },
        {
          "who": "B",
          "en": "Almost. By the time it starts, I'll have sent them to you.",
          "ru": "Почти. К тому времени, как оно начнётся, я уже пришлю их тебе."
        },
        {
          "who": "A",
          "en": "Great. I'll be reviewing the budget until then.",
          "ru": "Отлично. А я до тех пор буду проверять бюджет."
        },
        {
          "who": "B",
          "en": "Don't worry — everything will have been finished by noon.",
          "ru": "Не волнуйся — к полудню всё будет готово."
        },
        {
          "who": "A",
          "en": "Perfect. By Friday we'll have closed the whole project.",
          "ru": "Идеально. К пятнице мы закроем весь проект."
        }
      ]
    },
    "dialogue": {
      "intro": "Разговор о переезде: что будет сделано к какому сроку. Жми на подсвеченные обороты.",
      "lines": [
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "We're moving on the 1st. Will the painters have finished by then?",
          "ru": "Мы переезжаем первого. Маляры успеют закончить к этому сроку?",
          "words": [
            [
              "will … have finished",
              "успеют закончить (Future Perfect)"
            ],
            [
              "by then",
              "к тому времени"
            ]
          ]
        },
        {
          "who": "Contractor",
          "name": "Подрядчик",
          "side": "right",
          "en": "Yes. By the time you hand over the keys, every room will have been painted.",
          "ru": "Да. К тому времени, как вы отдадите ключи, каждая комната будет покрашена.",
          "words": [
            [
              "by the time",
              "к тому времени, как"
            ],
            [
              "will have been painted",
              "будет покрашена (пассив)"
            ]
          ]
        },
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "And the floor? You can't walk on it until it dries.",
          "ru": "А пол? По нему нельзя ходить, пока он не высохнет.",
          "words": [
            [
              "until it dries",
              "пока не высохнет"
            ]
          ]
        },
        {
          "who": "Contractor",
          "name": "Подрядчик",
          "side": "right",
          "en": "By Saturday it will have dried completely. You can move in by the weekend.",
          "ru": "К субботе он полностью высохнет. Вы сможете заехать к выходным.",
          "words": [
            [
              "will have dried",
              "высохнет (к сроку)"
            ],
            [
              "by the weekend",
              "к выходным"
            ]
          ]
        },
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "Wonderful. So by next month we'll have settled in for good.",
          "ru": "Чудесно. Значит, к следующему месяцу мы окончательно обустроимся.",
          "words": [
            [
              "we'll have settled in",
              "мы обустроимся"
            ],
            [
              "for good",
              "окончательно, насовсем"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова и обороты дня — дедлайны, завершённость и связки времени. Повтори вслух.",
      "items": [
        {
          "en": "by then",
          "ru": "к тому времени",
          "ex": "By then I'll have left."
        },
        {
          "en": "by the time",
          "ru": "к тому времени, как",
          "ex": "By the time you call, I'll be gone."
        },
        {
          "en": "deadline",
          "ru": "крайний срок, дедлайн",
          "ex": "The deadline is Friday."
        },
        {
          "en": "by the end of …",
          "ru": "к концу (чего-л.)",
          "ex": "by the end of the month"
        },
        {
          "en": "submit / hand in",
          "ru": "сдать (работу)",
          "ex": "Submit it by Monday."
        },
        {
          "en": "meet a deadline",
          "ru": "уложиться в срок",
          "ex": "We met the deadline."
        },
        {
          "en": "until / till",
          "ru": "(вплоть) до",
          "ex": "Wait until six."
        },
        {
          "en": "settle in",
          "ru": "обустроиться, освоиться",
          "ex": "We've settled in nicely."
        },
        {
          "en": "for good",
          "ru": "насовсем, окончательно",
          "ex": "He left for good."
        },
        {
          "en": "in advance",
          "ru": "заранее",
          "ex": "Book in advance."
        },
        {
          "en": "hand over",
          "ru": "передать, отдать",
          "ex": "Hand over the keys."
        },
        {
          "en": "so far",
          "ru": "пока что, на данный момент",
          "ex": "So far, so good."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: менеджер расписывает, что будет готово к запуску. Везде Future Perfect и дедлайны.",
      "title": "Before the launch",
      "sentences": [
        "In three weeks we'll launch the new app.",
        "By Monday the design team will have finished the final screens.",
        "By the time the testers arrive, we'll have fixed the worst bugs.",
        "The servers will have been upgraded by Wednesday.",
        "We can't go live until the security check is done.",
        "By Friday I'll have written the press release.",
        "By launch day we'll have been working on this for a whole year.",
        "Honestly, by then we'll all have earned a long holiday!"
      ],
      "translation": "Через три недели мы запускаем новое приложение. К понедельнику команда дизайна закончит финальные экраны. К тому времени, как придут тестировщики, мы исправим худшие баги. Серверы обновят к среде. Мы не можем запуститься, пока не пройдёт проверка безопасности. К пятнице я напишу пресс-релиз. Ко дню запуска мы будем работать над этим уже целый год. Честно, к тому моменту мы все заслужим долгий отпуск!"
    },
    "drag": {
      "intro": "Соедини английский оборот дня с переводом.",
      "pairs": [
        [
          "I'll have finished by Friday",
          "Я закончу к пятнице"
        ],
        [
          "by the time you arrive",
          "к тому времени, как ты приедешь"
        ],
        [
          "wait until six",
          "ждать до шести"
        ],
        [
          "hand it in by Monday",
          "сдать это к понедельнику"
        ]
      ]
    },
    "quiz": {
      "intro": "Тест по Future Perfect и паре by / until. Шесть вопросов — и день закрыт.",
      "items": [
        {
          "q": "«К пятнице я уже закончу отчёт» —",
          "opts": [
            "By Friday I will finish the report",
            "By Friday I will have finished the report",
            "By Friday I am finishing the report"
          ],
          "answer": 1,
          "explain": "к сроку завершено → will have finished."
        },
        {
          "q": "«К тому времени, как ты вернёшься, я уйду» —",
          "opts": [
            "By the time you will return, I'll have left",
            "By the time you return, I'll have left"
          ],
          "answer": 1,
          "explain": "после by the time — настоящее (return)."
        },
        {
          "q": "«Сдай работу к понедельнику» —",
          "opts": [
            "Hand it in until Monday",
            "Hand it in by Monday"
          ],
          "answer": 1,
          "explain": "дедлайн → by."
        },
        {
          "q": "«Я буду ждать до восьми» —",
          "opts": [
            "I'll wait by eight",
            "I'll wait until eight"
          ],
          "answer": 1,
          "explain": "длительность вплоть до → until."
        },
        {
          "q": "«В это время завтра я буду лететь» —",
          "opts": [
            "This time tomorrow I'll have flown",
            "This time tomorrow I'll be flying"
          ],
          "answer": 1,
          "explain": "в момент = процесс → will be flying."
        },
        {
          "q": "«К концу года я проработаю тут три года» —",
          "opts": [
            "By the end of the year I'll have worked here for three years",
            "By the end of the year I work here for three years"
          ],
          "answer": 0,
          "explain": "длительность к сроку → will have worked (been working)."
        }
      ]
    },
    "picture": {
      "intro": "Опиши, что будет готово к дедлайну, по картинке (доска задач, календарь).",
      "emoji": "📅✅⏳",
      "prompt": "Опиши, что команда сделает к сроку. Используй Future Perfect и by: By Friday they will have…; by the time…",
      "hint": "Структуры: By Monday we will have finished…; By the time the client arrives, we'll have…; everything will have been done by…",
      "example": "By the end of the week the team will have completed almost everything. By Wednesday the website will have been tested, and by Thursday the report will have been written. By the time the client arrives on Friday, we'll have prepared the whole presentation. Honestly, by then we'll all have earned a break.",
      "img": "img/b2/day-12.jpg",
      "credit": "Фото: U.S. Dept. of Housing and Urban Development (HUD) · Public Domain · <a href=\"https://www.flickr.com/photos/41555360@N03/43437673730\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Загляни в своё будущее — что ты успеешь к важной дате?",
      "prompt": "Напиши 5–7 предложений про дедлайн или важную дату. Используй Future Perfect (will have done), by / by the time и until.",
      "hint": "Структуры: By next month I will have …; By the time …, I'll have …; I'll keep … until …; By then I'll have been …ing for …",
      "example": "By the end of this year I will have finished my English course. By the time summer comes, I will have saved enough for a trip abroad. I'll keep studying every evening until I feel confident. If everything goes to plan, by next December I will have been learning English for three years. By then I'll have passed the B2 exam — and I'll have earned a real celebration."
    }
  },
  "13": {
    "day": 13,
    "week": "02",
    "level": "B2",
    "themeRu": "Такой, что / слишком",
    "themeEn": "so/such; too/enough",
    "intro": "Как сказать «такой хороший, что…», «слишком дорогой», «достаточно взрослый»? Сегодня — про степень и её последствия: английский раскладывает то, что русский передаёт одним «такой» и «слишком». Главная ловушка: <b>so</b> и <b>such</b> — оба «такой», но <b>so</b> любит прилагательное в одиночку (<b>so good</b>), а <b>such</b> — целую группу с существительным (<b>such a good film</b>). Плюс разведём <b>too</b> (слишком — это перебор) и <b>enough</b> (достаточно — это норма). Поехали.",
    "introAudio": "Как сказать такой хороший, что; слишком дорогой; достаточно взрослый? Сегодня про степень и её последствия: английский раскладывает то, что русский передаёт одним такой и слишком. Главная ловушка: so и such оба значат такой, но so любит прилагательное в одиночку, so good, а such целую группу с существительным, such a good film. Плюс разведём too, слишком, это перебор, и enough, достаточно, это норма. Поехали.",
    "goals": [
      "усиливать через <b>so</b> + прилагательное и <b>such (a)</b> + прилагательное + существительное",
      "достраивать следствие: <b>so / such … that …</b> — «такой …, что …»",
      "говорить про избыток: <b>too</b> + прилагательное (+ to / for) — «слишком …, чтобы …»",
      "не путать <b>too</b> и <b>enough</b> и ставить enough верно: после прилагательного, но перед существительным"
    ],
    "learned": [
      "Научился(лась) усиливать через <b>so</b> + прилагательное и <b>such (a)</b> + прилагательное + существительное",
      "Научился(лась) достраивать следствие: <b>so / such … that …</b> — «такой …, что …»",
      "Научился(лась) говорить про избыток: <b>too</b> + прилагательное (+ to / for) — «слишком …, чтобы …»",
      "Перестал(а) путать <b>too</b> и <b>enough</b> и научился(лась) ставить enough верно: после прилагательного, но перед существительным"
    ],
    "review": {
      "intro": "Утренняя разминка: сравнение и усилители из прошлых уровней плюс мостик к предложениям следствия — фундамент под сегодняшние so/such и too/enough.",
      "introAudio": "Утренняя разминка: сравнение и усилители из прошлых уровней плюс мостик к предложениям следствия — фундамент под сегодняшние so/such и too/enough.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> усилитель + сравнительная степень (A2).",
          "q": "«Эта задача намного сложнее» —",
          "opts": [
            "This task is more harder",
            "This task is much harder",
            "This task is much more hard"
          ],
          "answer": 1,
          "explain": "much + сравнительная: <b>much harder</b> (не «more harder»)."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> -ing или -ed прилагательное. Вещь какая?",
          "q": "«Фильм был очень скучный» —",
          "opts": [
            "The film was very boring",
            "The film was very bored"
          ],
          "answer": 0,
          "explain": "вещь, что вызывает скуку → <b>boring</b>; человек, кому скучно → bored."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> мостик в тему дня — какая связка верна?",
          "q": "«Было так поздно, что мы взяли такси» —",
          "opts": [
            "It was so late that we took a taxi",
            "It was such late that we took a taxi"
          ],
          "answer": 0,
          "explain": "so + прилагательное (late); such дружит с существительным. Сегодня разберём подробно."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · усиление",
        "title": "<em>so</em> + прилагательное vs <em>such (a)</em> + … + существительное",
        "paras": [
          "Оба слова значат «такой / настолько», но дружат с разными конструкциями. <b>so</b> ставится перед <b>прилагательным или наречием в одиночку</b>: <b>so good, so tired, so quickly</b>. <b>such</b> ставится перед <b>группой с существительным</b>: <b>such a good film, such nice people</b>.",
          "Вот она, главная ловушка дня. «Такой хороший фильм» — это существительное (фильм), значит <b>such</b>: «so good film» ❌ → <b>such a good film</b> ✅. А «фильм был такой хороший» — прилагательное в одиночку: <b>The film was so good.</b>",
          "Не забывай артикль <b>a / an</b> после such с исчисляемым в единственном числе: <b>such a</b> long day, <b>such an</b> old house. Во множественном и с неисчисляемым — без артикля: <b>such</b> nice people, <b>such</b> bad weather. А для количества бери <b>so much / so many</b>: so much time, so many people."
        ],
        "audio": "Оба слова значат такой или настолько, но дружат с разными конструкциями. so ставится перед прилагательным или наречием в одиночку: so good, so tired, so quickly. such ставится перед группой с существительным: such a good film, such nice people. Ловушка: такой хороший фильм это существительное, значит such, such a good film, не so good film. После such не забывай артикль a или an в единственном числе: such a long day. Во множественном без артикля: such nice people. Для количества бери so much или so many.",
        "table": {
          "rows": [
            [
              "so + прилаг. / наречие",
              "so good · so tired · so fast"
            ],
            [
              "such (a/an) + (прил.) + сущ.",
              "such a good film · such nice people"
            ],
            [
              "количество",
              "so much time · so many people"
            ],
            [
              "❌ запрет",
              "не «so good film» → such a good film"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Ты такая добрая.",
            "en": "You're <b>so</b> kind.",
            "gloss": "so + прилагательное",
            "say": "You're so kind."
          },
          {
            "ru": "Это был такой хороший фильм.",
            "en": "It was <b>such a</b> good film.",
            "gloss": "such a + прил. + сущ.",
            "say": "It was such a good film."
          },
          {
            "ru": "Они такие приятные люди.",
            "en": "They're <b>such</b> nice people.",
            "gloss": "мн. ч. — без a",
            "say": "They're such nice people."
          },
          {
            "ru": "У меня так мало времени.",
            "en": "I have <b>so</b> little time.",
            "gloss": "so + much / little",
            "say": "I have so little time."
          }
        ],
        "mistakes": [
          {
            "wrong": "It was a so good film",
            "right": "It was <b>such a</b> good film",
            "why": "перед группой с сущ. — such (a), не so"
          },
          {
            "wrong": "She has such a beautiful eyes",
            "right": "She has <b>such</b> beautiful eyes",
            "why": "мн. ч. → such без a"
          }
        ],
        "mnemonic": "🪞 so — голое прилагательное; such — с существительным (such a …).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> перед существительным.",
            "q": "«Это был такой длинный день» —",
            "opts": [
              "It was so long day",
              "It was such a long day",
              "It was such long day"
            ],
            "answer": 1,
            "explain": "перед сущ. → such a + прил. + сущ."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> прилагательное в одиночку.",
            "q": "«Погода была такая хорошая» —",
            "opts": [
              "The weather was such good",
              "The weather was so good"
            ],
            "answer": 1,
            "explain": "прилагательное в одиночку → so good."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери с such (мн. ч., без a).",
            "q": "Собери: «Они такие интересные люди»",
            "want": "They are such interesting people",
            "answer": "They are such interesting people"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> прилагательное в одиночку → so.",
            "q": "Здесь так шумно.",
            "accept": [
              "it's so noisy here",
              "it is so noisy here",
              "it's so noisy"
            ],
            "placeholder": "It's so ... here"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · следствие",
        "title": "<em>so / such … that</em> — «такой …, что …»",
        "paras": [
          "Дальше так и тянет назвать <b>следствие</b>: настолько …, ЧТО случилось вот это. Английский ставит <b>that</b>: <b>so</b> + прилагательное + <b>that</b> …; <b>such (a)</b> + … + существительное + <b>that</b> …",
          "<b>The box was so heavy that I couldn't lift it.</b> = Коробка была такой тяжёлой, что я не смог её поднять. <b>It was such a boring lecture that half the room left.</b> = Лекция была такой скучной, что половина зала ушла.",
          "В разговорной речи <b>that</b> часто опускают: <b>I was so tired I fell asleep.</b> Смысл тот же. А для количества — <b>so much / so many … that</b>: <b>so many people that we couldn't move.</b>"
        ],
        "audio": "Дальше тянет назвать следствие: настолько, что случилось вот это. Английский ставит that: so плюс прилагательное плюс that; such, a, плюс существительное плюс that. The box was so heavy that I couldn't lift it. It was such a boring lecture that half the room left. В разговорной речи that часто опускают: I was so tired I fell asleep. Для количества so much или so many плюс that.",
        "table": {
          "rows": [
            [
              "so + прилаг. + that",
              "so cold that we left"
            ],
            [
              "such (a) + … + сущ. + that",
              "such a mess that I cleaned up"
            ],
            [
              "so much / many + сущ. + that",
              "so much noise that …"
            ],
            [
              "that",
              "часто опускается в речи"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Кофе был такой горячий, что я обжёг язык.",
            "en": "The coffee was <b>so hot that</b> I burnt my tongue.",
            "gloss": "so + прил. + that",
            "say": "The coffee was so hot that I burnt my tongue."
          },
          {
            "ru": "Это была такая длинная встреча, что все устали.",
            "en": "It was <b>such a long meeting that</b> everyone got tired.",
            "gloss": "such a + сущ. + that",
            "say": "It was such a long meeting that everyone got tired."
          },
          {
            "ru": "Было столько народу, что мы не сели.",
            "en": "There were <b>so many people that</b> we couldn't sit down.",
            "say": "There were so many people that we couldn't sit down."
          }
        ],
        "mistakes": [
          {
            "wrong": "It was so a good film that I cried",
            "right": "It was <b>such a</b> good film that I cried",
            "why": "с сущ. → such a … that"
          },
          {
            "wrong": "It was such cold that we left",
            "right": "It was <b>so cold</b> that we left",
            "why": "прилагательное в одиночку → so … that"
          }
        ],
        "mnemonic": "➡️ настолько …, ЧТО → so / such … that (that можно опустить).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> прилагательное в одиночку + that.",
            "q": "«Сумка была такой тяжёлой, что я не смог её нести» —",
            "opts": [
              "The bag was such heavy that I couldn't carry it",
              "The bag was so heavy that I couldn't carry it"
            ],
            "answer": 1,
            "explain": "прилагательное → so heavy that."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> с существительным + that.",
            "q": "«Это была такая хорошая идея, что все согласились» —",
            "opts": [
              "It was such a good idea that everyone agreed",
              "It was so good idea that everyone agreed"
            ],
            "answer": 0,
            "explain": "с сущ. → such a good idea that."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери so … that. freeze → froze.",
            "q": "Собери: «Было так холодно, что озеро замёрзло»",
            "want": "It was so cold that the lake froze",
            "answer": "It was so cold that the lake froze"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> количество → so much … that.",
            "q": "Было столько шума, что я не мог думать.",
            "accept": [
              "there was so much noise that i couldn't think",
              "there was so much noise i couldn't think",
              "there was so much noise that i could not think"
            ],
            "placeholder": "There was so much noise ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · слишком",
        "title": "<em>too</em> + прилагательное — «слишком» (это перебор)",
        "paras": [
          "<b>too</b> — это «слишком», и всегда с оттенком «это проблема, перебор»: чего-то СВЕРХ нужного. <b>too expensive</b> (слишком дорого), <b>too late</b> (слишком поздно), <b>too tired</b> (слишком уставший).",
          "Часто продолжают, ЧТОБЫ что-то: <b>too</b> + прилагательное + <b>to</b>-инфинитив: <b>too tired to walk</b> (слишком устал, чтобы идти). Или для кого: <b>too</b> + прилагательное + <b>for</b> + кто-то: <b>too difficult for me</b>.",
          "Не путай <b>too</b> с нейтральным <b>very</b>. <b>very hot</b> = очень горячий (просто факт). <b>too hot</b> = слишком горячий (нельзя пить). «Я очень устал» = I'm <b>very</b> tired; «слишком устал, чтобы идти» = I'm <b>too</b> tired to go."
        ],
        "audio": "too это слишком, и всегда с оттенком это перебор, чего-то сверх нужного. too expensive, too late, too tired. Часто продолжают, чтобы что-то: too плюс прилагательное плюс to плюс глагол: too tired to walk. Или для кого: too плюс прилагательное плюс for плюс кто-то: too difficult for me. Не путай too с нейтральным very. very hot это очень горячий, просто факт. too hot это слишком горячий, нельзя пить.",
        "table": {
          "rows": [
            [
              "too + прилаг.",
              "перебор: too expensive"
            ],
            [
              "too + прил. + to-инф.",
              "too tired to walk"
            ],
            [
              "too + прил. + for + кто",
              "too hard for me"
            ],
            [
              "very ≠ too",
              "very hot (факт) vs too hot (нельзя)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Кофе слишком горячий, чтобы пить.",
            "en": "The coffee is <b>too hot to</b> drink.",
            "gloss": "too + прил. + to",
            "say": "The coffee is too hot to drink."
          },
          {
            "ru": "Эта машина слишком дорогая для меня.",
            "en": "This car is <b>too</b> expensive <b>for</b> me.",
            "gloss": "too … for + кто",
            "say": "This car is too expensive for me."
          },
          {
            "ru": "Уже слишком поздно звонить ей.",
            "en": "It's <b>too late to</b> call her.",
            "say": "It's too late to call her."
          }
        ],
        "mistakes": [
          {
            "wrong": "I'm too tired for walk",
            "right": "I'm too tired <b>to walk</b>",
            "why": "перед действием — to + глагол, не for"
          },
          {
            "wrong": "I'm too happy today",
            "right": "I'm <b>very</b> happy today",
            "why": "too = перебор (плохо); тут похвала → very"
          }
        ],
        "mnemonic": "⚠️ too = перебор (плохо). very = просто очень (нейтрально).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> too + прил. + to + глагол.",
            "q": "«Я слишком устал, чтобы готовить» —",
            "opts": [
              "I'm too tired for cooking",
              "I'm too tired to cook"
            ],
            "answer": 1,
            "explain": "too + прил. + to + глагол."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> нейтральный факт или перебор?",
            "q": "«Чай очень сладкий» (просто факт) —",
            "opts": [
              "The tea is too sweet",
              "The tea is very sweet"
            ],
            "answer": 1,
            "explain": "нейтральный факт → very; too = перебор."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери too … for + кто.",
            "q": "Собери: «Эти туфли слишком малы для меня»",
            "want": "These shoes are too small for me",
            "answer": "These shoes are too small for me"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> too + прил. + to + глагол.",
            "q": "Уже слишком поздно что-то менять.",
            "accept": [
              "it's too late to change anything",
              "it is too late to change anything",
              "it's too late to change something"
            ],
            "placeholder": "It's too late to ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · достаточно + ловушка позиции",
        "title": "<em>enough</em>: после прилагательного, но перед существительным",
        "paras": [
          "<b>enough</b> — «достаточно», нужного хватает (в отличие от too — перебор). И тут главная ловушка позиции: с <b>прилагательным</b> enough идёт <b>ПОСЛЕ</b> него, а с <b>существительным</b> — <b>ПЕРЕД</b> ним.",
          "Прилагательное: <b>good enough</b> (достаточно хороший), <b>old enough</b> (достаточно взрослый) — enough справа: «enough good» ❌ → <b>good enough</b> ✅. Существительное: <b>enough money</b> (достаточно денег), <b>enough time</b> — enough слева.",
          "Часто с <b>to</b>-инфинитивом: <b>old enough to drive</b> (достаточно взрослый, чтобы водить), <b>enough money to buy it</b>. И запомни контраст: <b>too</b> + прил. = слишком (перебор), а <b>(not) … enough</b> = (не) достаточно: <b>too short</b> ↔ <b>not tall enough</b>."
        ],
        "audio": "enough это достаточно, нужного хватает, в отличие от too, перебор. Ловушка позиции: с прилагательным enough идёт после него, а с существительным перед ним. Прилагательное: good enough, old enough, enough справа, не enough good. Существительное: enough money, enough time, enough слева. Часто с to плюс глагол: old enough to drive. И контраст: too плюс прилагательное это слишком, а not плюс прилагательное плюс enough это недостаточно. too short против not tall enough.",
        "table": {
          "rows": [
            [
              "прилаг. + enough",
              "good enough · old enough (enough СПРАВА)"
            ],
            [
              "enough + сущ.",
              "enough money · enough time (enough СЛЕВА)"
            ],
            [
              "+ to-инфинитив",
              "old enough to drive"
            ],
            [
              "контраст",
              "too short ↔ not tall enough"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Он достаточно взрослый, чтобы водить.",
            "en": "He's <b>old enough to</b> drive.",
            "gloss": "прил. + enough + to",
            "say": "He's old enough to drive."
          },
          {
            "ru": "У нас достаточно времени.",
            "en": "We have <b>enough time</b>.",
            "gloss": "enough + сущ.",
            "say": "We have enough time."
          },
          {
            "ru": "Эта комната недостаточно большая.",
            "en": "This room isn't <b>big enough</b>.",
            "gloss": "not + прил. + enough",
            "say": "This room isn't big enough."
          },
          {
            "ru": "У меня не хватает денег, чтобы купить это.",
            "en": "I don't have <b>enough money to</b> buy it.",
            "say": "I don't have enough money to buy it."
          }
        ],
        "mistakes": [
          {
            "wrong": "She is enough old to drive",
            "right": "She is <b>old enough</b> to drive",
            "why": "с прилагательным enough идёт ПОСЛЕ"
          },
          {
            "wrong": "We don't have time enough",
            "right": "We don't have <b>enough time</b>",
            "why": "с существительным enough идёт ПЕРЕД"
          }
        ],
        "mnemonic": "📏 enough: прил. + enough (good enough); enough + сущ. (enough time).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> с прилагательным — enough после.",
            "q": "«Эта коробка достаточно большая» —",
            "opts": [
              "This box is enough big",
              "This box is big enough"
            ],
            "answer": 1,
            "explain": "с прилагательным enough идёт после: big enough."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> с существительным — enough перед.",
            "q": "«У меня недостаточно денег» —",
            "opts": [
              "I don't have money enough",
              "I don't have enough money"
            ],
            "answer": 1,
            "explain": "с существительным enough идёт перед: enough money."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери enough + сущ. + to.",
            "q": "Собери: «У нас недостаточно времени, чтобы закончить»",
            "want": "We don't have enough time to finish",
            "answer": "We don't have enough time to finish"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> not + прил. + enough + for.",
            "q": "Этот свитер мне маловат (недостаточно большой).",
            "accept": [
              "this sweater isn't big enough for me",
              "this sweater is not big enough for me",
              "the sweater isn't big enough for me"
            ],
            "placeholder": "This sweater isn't ... for me"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Двое выбирают квартиру. Слушай so/such, too и enough в живом разговоре.",
      "lines": [
        {
          "who": "A",
          "en": "Wow, it's such a bright flat!",
          "ru": "Ого, какая светлая квартира!"
        },
        {
          "who": "B",
          "en": "It is. But it's a bit too small for three of us.",
          "ru": "Да. Но она немного мала для троих."
        },
        {
          "who": "A",
          "en": "The kitchen isn't big enough, that's true.",
          "ru": "Кухня недостаточно большая, это правда."
        },
        {
          "who": "B",
          "en": "And the rent is so high that we'd have no savings left.",
          "ru": "И аренда такая высокая, что у нас не осталось бы сбережений."
        },
        {
          "who": "A",
          "en": "You're right. It's a lovely place, just not practical enough.",
          "ru": "Ты прав. Местечко чудесное, просто недостаточно практичное."
        }
      ]
    },
    "dialogue": {
      "intro": "Отзыв о ресторане: усиление, следствие, «слишком» и «достаточно». Жми на обороты.",
      "lines": [
        {
          "who": "Reviewer",
          "name": "Критик",
          "side": "left",
          "en": "Honestly, it was such a memorable dinner that I've already booked again.",
          "ru": "Честно, ужин был такой запоминающийся, что я уже забронировал снова.",
          "words": [
            [
              "such a … that",
              "такой …, что"
            ],
            [
              "memorable",
              "запоминающийся"
            ]
          ]
        },
        {
          "who": "Friend",
          "name": "Друг",
          "side": "right",
          "en": "Really? I heard the place was too expensive to be worth it.",
          "ru": "Правда? Я слышал, место слишком дорогое, чтобы того стоить.",
          "words": [
            [
              "too … to",
              "слишком …, чтобы"
            ],
            [
              "worth it",
              "того стоит"
            ]
          ]
        },
        {
          "who": "Reviewer",
          "name": "Критик",
          "side": "left",
          "en": "Not at all. The portions were big enough, and the service was so warm.",
          "ru": "Вовсе нет. Порции были достаточно большими, а обслуживание таким душевным.",
          "words": [
            [
              "big enough",
              "достаточно большой"
            ],
            [
              "so warm",
              "такой тёплый / душевный"
            ]
          ]
        },
        {
          "who": "Friend",
          "name": "Друг",
          "side": "right",
          "en": "Maybe I judged too quickly. Is it quiet enough to talk?",
          "ru": "Может, я слишком быстро осудил. Там достаточно тихо, чтобы поговорить?",
          "words": [
            [
              "too quickly",
              "слишком быстро"
            ],
            [
              "quiet enough to",
              "достаточно тихо, чтобы"
            ]
          ]
        },
        {
          "who": "Reviewer",
          "name": "Критик",
          "side": "left",
          "en": "Perfectly. It's such a calm spot that you forget the city outside.",
          "ru": "Идеально. Это такое спокойное место, что забываешь о городе снаружи.",
          "words": [
            [
              "such a … that",
              "такое …, что"
            ],
            [
              "calm spot",
              "спокойное место"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова и обороты дня — усиление, следствие и мера. Повтори вслух.",
      "items": [
        {
          "en": "such a … that",
          "ru": "такой …, что",
          "ex": "such a long day that I slept"
        },
        {
          "en": "so … that",
          "ru": "настолько …, что",
          "ex": "so tired that I left"
        },
        {
          "en": "too … to",
          "ru": "слишком …, чтобы",
          "ex": "too tired to walk"
        },
        {
          "en": "… enough to",
          "ru": "достаточно …, чтобы",
          "ex": "old enough to drive"
        },
        {
          "en": "enough money / time",
          "ru": "достаточно денег / времени",
          "ex": "enough time to rest"
        },
        {
          "en": "memorable",
          "ru": "запоминающийся",
          "ex": "a memorable trip"
        },
        {
          "en": "worth it",
          "ru": "стоит того",
          "ex": "It's worth it."
        },
        {
          "en": "practical",
          "ru": "практичный",
          "ex": "a practical choice"
        },
        {
          "en": "savings",
          "ru": "сбережения",
          "ex": "We have no savings."
        },
        {
          "en": "barely",
          "ru": "едва, еле-еле",
          "ex": "barely big enough"
        },
        {
          "en": "a bit",
          "ru": "немного, чуть-чуть",
          "ex": "a bit too small"
        },
        {
          "en": "intense",
          "ru": "интенсивный, насыщенный",
          "ex": "such an intense week"
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай отзыв о концерте. Найди so/such, too и enough.",
      "title": "Such a night",
      "sentences": [
        "Last night's concert was such an amazing experience.",
        "The band was so good that the crowd refused to leave.",
        "At first the hall seemed too small for everyone.",
        "But somehow there was just enough room to dance.",
        "The sound was loud enough to feel in your chest.",
        "Some songs were so emotional that people cried.",
        "It was almost too perfect to be real.",
        "I only wish it had been long enough to hear more."
      ],
      "translation": "Вчерашний концерт был таким потрясающим событием. Группа играла так хорошо, что толпа отказывалась уходить. Сначала зал казался слишком маленьким для всех. Но как-то места хватило, чтобы танцевать. Звук был достаточно громким, чтобы чувствовать его в груди. Некоторые песни были такими трогательными, что люди плакали. Это было почти слишком идеально, чтобы быть правдой. Жаль только, что концерт не был достаточно длинным, чтобы услышать больше."
    },
    "drag": {
      "intro": "Соедини английский оборот с переводом.",
      "pairs": [
        [
          "such a good film",
          "такой хороший фильм"
        ],
        [
          "so tired that I left",
          "так устал, что ушёл"
        ],
        [
          "too expensive to buy",
          "слишком дорого, чтобы купить"
        ],
        [
          "old enough to drive",
          "достаточно взрослый, чтобы водить"
        ]
      ]
    },
    "quiz": {
      "intro": "Тест по so/such и too/enough. Шесть вопросов — и день закрыт.",
      "items": [
        {
          "q": "«Это был такой хороший фильм» —",
          "opts": [
            "It was so good film",
            "It was such a good film",
            "It was such good film"
          ],
          "answer": 1,
          "explain": "с сущ. → such a good film."
        },
        {
          "q": "«Погода была такая тёплая» —",
          "opts": [
            "The weather was such warm",
            "The weather was so warm"
          ],
          "answer": 1,
          "explain": "прилагательное в одиночку → so warm."
        },
        {
          "q": "«Было так холодно, что река замёрзла» —",
          "opts": [
            "It was such cold that the river froze",
            "It was so cold that the river froze"
          ],
          "answer": 1,
          "explain": "so + прил. + that."
        },
        {
          "q": "«Я слишком устал, чтобы выйти» —",
          "opts": [
            "I'm too tired to go out",
            "I'm too tired for go out",
            "I'm enough tired to go out"
          ],
          "answer": 0,
          "explain": "too + прил. + to + глагол."
        },
        {
          "q": "«У нас недостаточно времени» —",
          "opts": [
            "We don't have time enough",
            "We don't have enough time"
          ],
          "answer": 1,
          "explain": "с сущ. enough идёт перед: enough time."
        },
        {
          "q": "«Она достаточно взрослая, чтобы водить» —",
          "opts": [
            "She is enough old to drive",
            "She is old enough to drive"
          ],
          "answer": 1,
          "explain": "с прилагательным enough идёт после: old enough."
        }
      ]
    },
    "picture": {
      "intro": "Опиши место или вещь по картинке через so/such, too, enough.",
      "emoji": "🏠✨📏",
      "prompt": "Опиши комнату или вещь. Используй: It's such a …; It's so … that …; It's too … to …; It's (not) … enough to …",
      "hint": "Структуры: It's such a cosy room that …; The window is so big that …; It might be too small for …; It isn't bright enough to …",
      "example": "It's such a cosy little flat that you feel at home at once. The living room is so bright that you hardly need a lamp. The only problem is the kitchen — it's a bit too small for a big family, and the cupboards aren't wide enough to store much. Still, for two people it's more than good enough.",
      "img": "img/b2/day-13.jpg",
      "credit": "Фото: Foto Miki Digital · Public Domain · <a href=\"https://www.flickr.com/photos/96511847@N04/10798143964\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Расскажи о чём-то, что произвело на тебя сильное впечатление — хорошее или «слишком».",
      "prompt": "Напиши 5–7 предложений про фильм, поездку, концерт или покупку. Используй so / such … that, too … to, … enough to.",
      "hint": "Структуры: It was such a … that …; It was so … that …; It was too … to …; It wasn't … enough to …",
      "example": "Last summer I visited Rome, and it was such an unforgettable trip that I still dream about it. The city was so beautiful that I took hundreds of photos. Of course, in August it was almost too hot to walk around at noon. Some museums were so crowded that we couldn't see much. Still, three days were just enough to fall in love with the place — though not long enough to see everything."
    }
  },
  "14": {
    "day": 14,
    "week": "02",
    "level": "B2",
    "themeRu": "Повторение №2",
    "themeEn": "Review 2",
    "intro": "Ты дошёл(дошла) до конца второй главы — а неделя была плотная: условные всех мастей (включая смешанные), «лучше бы / лучше сделай», два новых будущих и связки степени so/such/too/enough. Сегодня ничего нового — сводим всё вместе и проверяем себя в деле. Два маяка недели: <b>в смешанном условном «бы» из прошлого и «бы» из настоящего встречаются в одном предложении</b>, и <b>so дружит с прилагательным, а such — с существительным</b>. Спокойно и с удовольствием — поехали.",
    "introAudio": "Ты дошёл до конца второй главы, а неделя была плотная: условные всех мастей, включая смешанные, лучше бы и лучше сделай, два новых будущих и связки степени so, such, too, enough. Сегодня ничего нового, сводим всё вместе и проверяем себя в деле. Два маяка недели: в смешанном условном бы из прошлого и бы из настоящего встречаются в одном предложении, и so дружит с прилагательным, а such с существительным. Спокойно и с удовольствием — поехали.",
    "goals": [
      "уверенно выбирать тип условного — обычный или <b>смешанный</b> (прошлое ↔ настоящее)",
      "не путать <b>had better</b> (совет) и <b>would rather</b> (предпочтение)",
      "ставить <b>will be doing</b> (процесс) и <b>will have done</b> (к сроку) — и предлоги by / until на места",
      "разводить <b>so</b> (+ прилагательное) и <b>such</b> (+ существительное), плюс too / enough"
    ],
    "learned": [
      "Научился(лась) уверенно выбирать тип условного — обычный или <b>смешанный</b> (прошлое ↔ настоящее)",
      "Перестал(а) путать <b>had better</b> (совет) и <b>would rather</b> (предпочтение)",
      "Научился(лась) ставить <b>will be doing</b> (процесс) и <b>will have done</b> (к сроку) — и предлоги by / until на места",
      "Научился(лась) разводить <b>so</b> (+ прилагательное) и <b>such</b> (+ существительное), плюс too / enough"
    ],
    "review": {
      "intro": "Большая утренняя разминка по всей неделе 2. Идём по темам: все условные и смешанные, would rather / had better, два будущих, so/such/too/enough — плюс «всегда-на-связи» предлоги. Не спеши: это репетиция перед тестом.",
      "introAudio": "Большая утренняя разминка по всей неделе 2. Идём по темам: все условные и смешанные, would rather и had better, два будущих, so, such, too, enough, плюс всегда-на-связи предлоги. Не спеши: это репетиция перед тестом.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> смешанный условный — прошлое влияет на сейчас.",
          "q": "«Если бы я выучил испанский, я бы сейчас работал в Мадриде» —",
          "opts": [
            "If I had learned Spanish, I would work in Madrid now",
            "If I learned Spanish, I would have worked in Madrid now",
            "If I would learn Spanish, I would work in Madrid now"
          ],
          "answer": 0,
          "explain": "смешанный: if + Past Perfect (прошлое) → would + база (сейчас)."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> смешанный наоборот — свойство сейчас → прошлый результат.",
          "q": "«Будь я организованнее, я бы не пропустил вчера рейс» —",
          "opts": [
            "If I were more organised, I wouldn't have missed the flight yesterday",
            "If I had been more organised, I wouldn't miss the flight yesterday"
          ],
          "answer": 0,
          "explain": "постоянное свойство сейчас → if + Past; прошлый результат → would have + 3-я форма."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> «на всякий случай» или «если не»?",
          "q": "«Возьми зонт на всякий случай (вдруг дождь)» —",
          "opts": [
            "Take an umbrella unless it rains",
            "Take an umbrella in case it rains"
          ],
          "answer": 1,
          "explain": "«на всякий случай» → in case; unless = «если не»."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> настойчивый совет vs предпочтение.",
          "q": "«Тебе лучше выехать сейчас, а то опоздаешь» —",
          "opts": [
            "You'd rather leave now",
            "You'd better leave now"
          ],
          "answer": 1,
          "explain": "настойчивый совет → had better."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> к сроку = результат.",
          "q": "«К полуночи я уже допишу эссе» —",
          "opts": [
            "By midnight I'll be writing the essay",
            "By midnight I'll have written the essay"
          ],
          "answer": 1,
          "explain": "к сроку готово → will have written."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> so или such? Перед существительным.",
          "q": "Это была такая длинная неделя.",
          "accept": [
            "it was such a long week",
            "it has been such a long week",
            "it's been such a long week"
          ],
          "placeholder": "It was such ... week"
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> предлог в управлении (always-on).",
          "q": "«Жду не дождусь выходных» —",
          "opts": [
            "I'm looking forward to the weekend",
            "I'm looking forward the weekend"
          ],
          "answer": 0,
          "explain": "look forward <b>to</b> + сущ. / -ing."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Сборка 1 · условные",
        "title": "Обычный или <em>смешанный</em> conditional",
        "paras": [
          "Главная ловушка недели. В обычных условных обе части в «одном времени мысли»: <b>2nd</b> — нереальное настоящее (If I had time, I would help), <b>3rd</b> — нереальное прошлое (If I had had time, I would have helped). А <b>смешанный</b> сшивает прошлое и настоящее в одном предложении.",
          "Прошлое → настоящее: <b>If I had saved money, I would be rich now.</b> = Если бы я (тогда) копил, я был бы богат сейчас. Форма: <b>if + Past Perfect → would + база</b>. Свойство-сейчас → прошлый результат: <b>If I were more careful, I wouldn't have lost it.</b> = Будь я аккуратнее (вообще), я бы не потерял это (тогда). Форма: <b>if + Past → would have + 3-я форма</b>.",
          "И помни связки из Д8: <b>unless</b> = «если не», <b>provided / as long as</b> = «при условии что», <b>in case</b> = «на всякий случай» (а не «если»!). После них — никакого will: будущее здесь передаёт настоящее."
        ],
        "audio": "Главная ловушка недели. В обычных условных обе части в одном времени мысли: второй это нереальное настоящее, третий это нереальное прошлое. А смешанный сшивает прошлое и настоящее в одном предложении. Прошлое влияет на сейчас: if плюс Past Perfect, would плюс база. If I had saved money, I would be rich now. Свойство сейчас влияет на прошлый результат: if плюс Past, would have плюс третья форма. И помни: unless это если не, provided и as long as это при условии что, in case это на всякий случай, а не если. После них никакого will.",
        "table": {
          "rows": [
            [
              "2nd (сейчас, нереал.)",
              "if + Past → would + база"
            ],
            [
              "3rd (прошлое, нереал.)",
              "if + Past Perfect → would have done"
            ],
            [
              "mixed: прошлое → сейчас",
              "if + Past Perfect → would + база (now)"
            ],
            [
              "mixed: свойство → прошлое",
              "if + Past → would have done"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Если бы я лёг раньше, я бы не устал сейчас.",
            "en": "If I <b>had gone</b> to bed earlier, I <b>wouldn't be</b> tired now.",
            "gloss": "прошлое → сейчас",
            "say": "If I had gone to bed earlier, I wouldn't be tired now."
          },
          {
            "ru": "Если бы она знала французский, она бы получила ту работу (тогда).",
            "en": "If she <b>knew</b> French, she <b>would have got</b> that job.",
            "gloss": "свойство → прошлое",
            "say": "If she knew French, she would have got that job."
          },
          {
            "ru": "Не опоздаем, если выедем сейчас.",
            "en": "We won't be late <b>as long as</b> we leave now.",
            "gloss": "as long as = при условии",
            "say": "We won't be late as long as we leave now."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I had saved money, I would have been rich now",
            "right": "If I had saved money, I <b>would be</b> rich now",
            "why": "результат сейчас → would + база, не would have"
          },
          {
            "wrong": "Take a coat in case it will rain",
            "right": "Take a coat in case it <b>rains</b>",
            "why": "после in case — настоящее, не will"
          }
        ],
        "mnemonic": "🔀 mixed: одно «бы» в прошлом, другое — в настоящем.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> прошлое → результат сейчас.",
            "q": "«Если бы я не потратил все деньги, я бы купил это сейчас» —",
            "opts": [
              "If I hadn't spent all my money, I would buy it now",
              "If I didn't spend all my money, I would have bought it now"
            ],
            "answer": 0,
            "explain": "прошлое → сейчас: if + Past Perfect → would + база."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> свойство сейчас → прошлый результат.",
            "q": "«Будь я выше, я бы вошёл в команду (тогда)» —",
            "opts": [
              "If I were taller, I would have made the team",
              "If I had been taller, I would make the team"
            ],
            "answer": 0,
            "explain": "свойство сейчас → прошлый результат: if + Past → would have made."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери смешанный (прошлое → сейчас). apologise → apologised.",
            "q": "Собери: «Если бы он извинился, я бы не злился сейчас»",
            "want": "If he had apologised I wouldn't be angry now",
            "answer": "If he had apologised I wouldn't be angry now"
          }
        ]
      },
      {
        "eyebrow": "Сборка 2 · совет и выбор",
        "title": "<em>'d better</em> (совет) vs <em>'d rather</em> (выбор)",
        "paras": [
          "<b>'d better</b> = had better — настойчивый совет на сейчас: «лучше сделай, а то будет плохо». <b>'d rather</b> = would rather — предпочтение: «я бы лучше…». Оба — <b>+ база без to</b>.",
          "Отрицание — not сразу после better / rather, без don't: <b>had better not</b>, <b>would rather not</b>. И сравнение через <b>than</b>: <b>I'd rather walk than wait.</b>",
          "Особый случай: чужое действие после would rather → <b>прошедшее</b> время: <b>I'd rather you came tomorrow.</b> = Я бы предпочёл, чтобы ты пришёл завтра. И <b>it's time + Past</b>: <b>It's time we left.</b> = Нам пора уходить."
        ],
        "audio": "'d better это had better, настойчивый совет на сейчас: лучше сделай, а то будет плохо. 'd rather это would rather, предпочтение: я бы лучше. Оба плюс база без to. Отрицание: not сразу после better или rather, без don't. Сравнение через than: I'd rather walk than wait. Особый случай: чужое действие после would rather уходит в прошедшее: I'd rather you came tomorrow. И it's time плюс Past: It's time we left.",
        "table": {
          "rows": [
            [
              "'d better + база",
              "совет: You'd better hurry."
            ],
            [
              "'d rather + база (… than)",
              "выбор: I'd rather stay than go."
            ],
            [
              "'d rather + you + Past",
              "I'd rather you came later."
            ],
            [
              "it's time + Past",
              "It's time we left."
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Тебе лучше показаться врачу.",
            "en": "You<b>'d better see</b> a doctor.",
            "gloss": "совет",
            "say": "You'd better see a doctor."
          },
          {
            "ru": "Я бы лучше остался, чем шёл под дождём.",
            "en": "I<b>'d rather stay than</b> walk in the rain.",
            "gloss": "выбор",
            "say": "I'd rather stay than walk in the rain."
          },
          {
            "ru": "Я бы предпочёл, чтобы ты сел за руль.",
            "en": "I'd rather <b>you drove</b>.",
            "gloss": "чужое действие → Past",
            "say": "I'd rather you drove."
          }
        ],
        "mistakes": [
          {
            "wrong": "You'd better to call him",
            "right": "You'd better <b>call</b> him",
            "why": "после better — база без to"
          },
          {
            "wrong": "I'd rather you come tomorrow",
            "right": "I'd rather you <b>came</b> tomorrow",
            "why": "чужое действие после would rather → Past"
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
            "howto": "<b>Что делать:</b> чужое действие → Past.",
            "q": "«Я бы предпочёл, чтобы ты подождал» —",
            "opts": [
              "I'd rather you wait",
              "I'd rather you waited"
            ],
            "answer": 1,
            "explain": "чужое действие после would rather → Past: you waited."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери совет.",
            "q": "Собери: «Нам лучше выйти сейчас»",
            "want": "We'd better leave now",
            "answer": "We'd better leave now"
          }
        ]
      },
      {
        "eyebrow": "Сборка 3 · два будущих",
        "title": "<em>will be doing</em> · <em>will have done</em> · by / until",
        "paras": [
          "Два будущих рядом. <b>Future Continuous</b> — процесс в моменте: <b>This time tomorrow I'll be flying.</b> <b>Future Perfect</b> — результат к сроку: <b>By Friday I'll have finished.</b> Подсказка в предлоге: <b>at / this time</b> + момент → процесс; <b>by</b> + момент → готово.",
          "После <b>by the time</b> — настоящее, не will: <b>By the time you arrive, I'll have left.</b> Will живёт только в главной части.",
          "И пара предлогов: <b>by</b> = крайний срок, дедлайн (один раз, не позже); <b>until / till</b> = длительность вплоть до момента. <b>Finish it by 6</b> (дедлайн) vs <b>wait until 6</b> (всё это время)."
        ],
        "audio": "Два будущих рядом. Future Continuous это процесс в моменте: this time tomorrow I'll be flying. Future Perfect это результат к сроку: by Friday I'll have finished. Подсказка в предлоге: at или this time плюс момент это процесс; by плюс момент это готово. После by the time идёт настоящее, не will. Will живёт только в главной части. И пара предлогов: by это дедлайн, один раз, не позже; until или till это длительность вплоть до момента. Finish it by six против wait until six.",
        "table": {
          "rows": [
            [
              "at / this time + момент",
              "процесс → will be doing"
            ],
            [
              "by + момент",
              "результат → will have done"
            ],
            [
              "by the time + настоящее",
              "by the time you arrive…"
            ],
            [
              "by ≠ until",
              "by = дедлайн · until = вплоть до"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "В это время завтра я буду сдавать экзамен.",
            "en": "This time tomorrow I'll <b>be taking</b> the exam.",
            "gloss": "процесс",
            "say": "This time tomorrow I'll be taking the exam."
          },
          {
            "ru": "К пятнице я уже сдам все экзамены.",
            "en": "<b>By</b> Friday I'll <b>have taken</b> all my exams.",
            "gloss": "результат к сроку",
            "say": "By Friday I'll have taken all my exams."
          },
          {
            "ru": "Я буду ждать до восьми.",
            "en": "I'll wait <b>until</b> eight.",
            "gloss": "длительность",
            "say": "I'll wait until eight."
          }
        ],
        "mistakes": [
          {
            "wrong": "By the time you will come, dinner will be cold",
            "right": "By the time you <b>come</b>, dinner will be cold",
            "why": "после by the time — настоящее"
          },
          {
            "wrong": "Send it until Monday",
            "right": "Send it <b>by</b> Monday",
            "why": "дедлайн → by, не until"
          }
        ],
        "mnemonic": "🎯 by = дедлайн (точка) · until = всё время до (линия).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> в момент = процесс.",
            "q": "«В это время завтра я буду ехать на работу» —",
            "opts": [
              "This time tomorrow I'll have driven to work",
              "This time tomorrow I'll be driving to work"
            ],
            "answer": 1,
            "explain": "в момент = процесс → will be driving."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> дедлайн.",
            "q": "«Сдай эссе к понедельнику» —",
            "opts": [
              "Hand in the essay until Monday",
              "Hand in the essay by Monday"
            ],
            "answer": 1,
            "explain": "дедлайн → by."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> by the time + настоящее, will have done в главной.",
            "q": "К тому времени, как ты вернёшься, я закончу.",
            "accept": [
              "by the time you get back i'll have finished",
              "by the time you come back i'll have finished",
              "by the time you get back i will have finished",
              "by the time you come back i will have finished"
            ],
            "placeholder": "By the time you get back, I ..."
          }
        ]
      },
      {
        "eyebrow": "Сборка 4 · степень",
        "title": "<em>so / such</em> · <em>too / enough</em>",
        "paras": [
          "Вторая ловушка недели: <b>so</b> любит голое прилагательное (<b>so good</b>), а <b>such</b> — группу с существительным (<b>such a good film</b>). Следствие достраиваем через <b>that</b>: <b>so cold that we left</b>; <b>such a mess that I cleaned up.</b>",
          "<b>too</b> = слишком (перебор, это проблема): <b>too tired to walk.</b> <b>enough</b> = достаточно, и позиция разная: после прилагательного (<b>good enough</b>), но перед существительным (<b>enough time</b>).",
          "Контраст: <b>too short</b> (слишком короткий) ↔ <b>not long enough</b> (недостаточно длинный) — про одно и то же с разных сторон."
        ],
        "audio": "Вторая ловушка недели: so любит голое прилагательное, so good, а such группу с существительным, such a good film. Следствие достраиваем через that: so cold that we left; such a mess that I cleaned up. too это слишком, перебор: too tired to walk. enough это достаточно, и позиция разная: после прилагательного, good enough, но перед существительным, enough time. Контраст: too short против not long enough, про одно и то же с разных сторон.",
        "table": {
          "rows": [
            [
              "so + прилаг.",
              "so good · so tired"
            ],
            [
              "such (a) + … + сущ.",
              "such a good film"
            ],
            [
              "too + прил. (+ to)",
              "too tired to walk"
            ],
            [
              "прил. + enough / enough + сущ.",
              "good enough · enough time"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Это был такой скучный фильм, что я уснул.",
            "en": "It was <b>such a</b> boring film <b>that</b> I fell asleep.",
            "gloss": "such a … that",
            "say": "It was such a boring film that I fell asleep."
          },
          {
            "ru": "Кофе слишком горячий, чтобы пить.",
            "en": "The coffee is <b>too hot to</b> drink.",
            "gloss": "too … to",
            "say": "The coffee is too hot to drink."
          },
          {
            "ru": "Эта комната недостаточно большая.",
            "en": "This room isn't <b>big enough</b>.",
            "gloss": "прил. + enough",
            "say": "This room isn't big enough."
          }
        ],
        "mistakes": [
          {
            "wrong": "It was so a good film",
            "right": "It was <b>such a</b> good film",
            "why": "с сущ. → such a, не so"
          },
          {
            "wrong": "She isn't enough old to drive",
            "right": "She isn't <b>old enough</b> to drive",
            "why": "с прилагательным enough идёт после"
          }
        ],
        "mnemonic": "🪞 so + прилаг. · such + сущ. · too = перебор · enough = в меру.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> с существительным.",
            "q": "«Это была такая хорошая идея, что все согласились» —",
            "opts": [
              "It was so good idea that everyone agreed",
              "It was such a good idea that everyone agreed"
            ],
            "answer": 1,
            "explain": "с сущ. → such a … that."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> too + прил. + to + глагол.",
            "q": "«Я слишком устал, чтобы готовить» —",
            "opts": [
              "I'm too tired to cook",
              "I'm too tired for cook"
            ],
            "answer": 0,
            "explain": "too + прил. + to + глагол."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> с существительным enough идёт перед.",
            "q": "«У нас недостаточно времени» —",
            "opts": [
              "We don't have time enough",
              "We don't have enough time"
            ],
            "answer": 1,
            "explain": "с сущ. enough идёт перед: enough time."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери so … that. freeze → froze.",
            "q": "Собери: «Было так холодно, что озеро замёрзло»",
            "want": "It was so cold that the lake froze",
            "answer": "It was so cold that the lake froze"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Сценка-повторение: двое перед сдачей проекта. Поймай условные, два будущих и so/such в живой речи.",
      "lines": [
        {
          "who": "A",
          "en": "If we'd started earlier, we'd be relaxing now instead of panicking.",
          "ru": "Если бы мы начали раньше, мы бы сейчас отдыхали, а не паниковали."
        },
        {
          "who": "B",
          "en": "True. But by midnight we'll have finished the main part.",
          "ru": "Верно. Но к полуночи мы доделаем основную часть."
        },
        {
          "who": "A",
          "en": "You'd better email the client before then.",
          "ru": "Тебе лучше написать клиенту до этого."
        },
        {
          "who": "B",
          "en": "Already done. It's such a big report that I split it in two.",
          "ru": "Уже сделал. Это такой большой отчёт, что я разбил его надвое."
        },
        {
          "who": "A",
          "en": "Smart. I'd rather send it early than rush at nine.",
          "ru": "Умно. Я бы лучше отправил пораньше, чем спешить в девять."
        }
      ]
    },
    "dialogue": {
      "intro": "Длинный диалог-повторение: планёрка перед запуском. Все темы недели 2 в одном разговоре — слушай и замечай.",
      "lines": [
        {
          "who": "Lead",
          "name": "Руководитель",
          "side": "left",
          "en": "By Friday we'll have tested everything — provided nothing breaks today.",
          "ru": "К пятнице мы всё протестируем — при условии, что сегодня ничего не сломается.",
          "words": [
            [
              "we'll have tested",
              "мы протестируем (к сроку)"
            ],
            [
              "provided",
              "при условии что"
            ]
          ]
        },
        {
          "who": "Dev",
          "name": "Разработчик",
          "side": "right",
          "en": "If I'd known about the bug earlier, we wouldn't be behind now.",
          "ru": "Если бы я узнал о баге раньше, мы бы сейчас не отставали.",
          "words": [
            [
              "if I'd known … wouldn't be",
              "смешанный: прошлое → сейчас"
            ],
            [
              "behind",
              "в отставании, позади графика"
            ]
          ]
        },
        {
          "who": "Lead",
          "name": "Руководитель",
          "side": "left",
          "en": "It's such a small fix that it won't take long. You'd better focus on it first.",
          "ru": "Это такая мелкая правка, что много времени не займёт. Лучше займись ею в первую очередь.",
          "words": [
            [
              "such a … that",
              "такой …, что"
            ],
            [
              "you'd better",
              "тебе лучше"
            ]
          ]
        },
        {
          "who": "Dev",
          "name": "Разработчик",
          "side": "right",
          "en": "Agreed. By the time the demo starts, it'll be working.",
          "ru": "Согласен. К тому времени, как начнётся демо, всё заработает.",
          "words": [
            [
              "by the time … starts",
              "к тому времени, как начнётся"
            ],
            [
              "it'll be working",
              "будет работать"
            ]
          ]
        },
        {
          "who": "Lead",
          "name": "Руководитель",
          "side": "left",
          "en": "Perfect. I'd rather launch a day late than ship something too rough to use.",
          "ru": "Идеально. Я бы лучше запустил на день позже, чем выпустил что-то слишком сырое.",
          "words": [
            [
              "I'd rather … than",
              "лучше …, чем"
            ],
            [
              "too rough to use",
              "слишком сырое, чтобы пользоваться"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Ключевые обороты недели 2 — собраны вместе. Повтори вслух и проверь, что узнаёшь каждый.",
      "items": [
        {
          "en": "if I had known … I would be",
          "ru": "если бы я знал … я был бы (mixed)",
          "ex": "If I'd known, I'd be there now."
        },
        {
          "en": "unless",
          "ru": "если не",
          "ex": "Unless we hurry, we'll miss it."
        },
        {
          "en": "in case",
          "ru": "на всякий случай",
          "ex": "Take cash in case."
        },
        {
          "en": "provided / as long as",
          "ru": "при условии что",
          "ex": "as long as you pay"
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
          "en": "will be doing",
          "ru": "буду делать (процесс)",
          "ex": "I'll be working at 9."
        },
        {
          "en": "will have done",
          "ru": "уже сделаю (к сроку)",
          "ex": "I'll have left by then."
        },
        {
          "en": "by the time",
          "ru": "к тому времени, как",
          "ex": "By the time you call…"
        },
        {
          "en": "such a … that",
          "ru": "такой …, что",
          "ex": "such a day that I slept"
        },
        {
          "en": "too … to",
          "ru": "слишком …, чтобы",
          "ex": "too late to call"
        },
        {
          "en": "… enough to",
          "ru": "достаточно …, чтобы",
          "ex": "old enough to vote"
        }
      ]
    },
    "reading": {
      "intro": "Итог недели 2 в одном тексте — мысли студента перед экзаменами. Найди условные, два будущих и so/such/too/enough.",
      "title": "The week before exams",
      "sentences": [
        "If I had started revising earlier, I wouldn't be so stressed now.",
        "By Friday I'll have taken three of my five exams.",
        "This time next week I'll be lying on a beach, hopefully.",
        "It's such a heavy schedule that I barely sleep.",
        "I'd rather study a little every day than cram all night.",
        "My notes are too messy to read, so I'm rewriting them.",
        "As long as I stay calm, I'll be fine.",
        "By the time the results come out, I'll have almost forgotten the stress."
      ],
      "translation": "Если бы я начал повторять раньше, я бы сейчас так не нервничал. К пятнице я сдам три из пяти экзаменов. В это время на следующей неделе я, надеюсь, буду валяться на пляже. Расписание такое плотное, что я почти не сплю. Я лучше буду заниматься понемногу каждый день, чем зубрить всю ночь. Мои конспекты слишком неразборчивые, чтобы их читать, поэтому я переписываю их. Пока я сохраняю спокойствие, всё будет хорошо. К тому времени, как выйдут результаты, я почти забуду про стресс."
    },
    "drag": {
      "intro": "Соедини английскую фразу недели 2 с её переводом.",
      "pairs": [
        [
          "If I'd known, I'd be there now",
          "Если бы я знал, я был бы там сейчас"
        ],
        [
          "You'd better hurry",
          "Тебе лучше поторопиться"
        ],
        [
          "I'll have finished by Friday",
          "Я закончу к пятнице"
        ],
        [
          "such a long day that I slept",
          "такой длинный день, что я уснул"
        ]
      ]
    },
    "quiz": {
      "intro": "Тест по всей неделе 2 — шесть вопросов на условные, советы, два будущих и so/such. Покажи, что смешанные условные и so/such больше не путаются!",
      "items": [
        {
          "q": "«Если бы я выучил код, я бы сейчас работал в IT» —",
          "opts": [
            "If I learned to code, I would work in IT now",
            "If I had learned to code, I would work in IT now",
            "If I would learn to code, I work in IT now"
          ],
          "answer": 1,
          "explain": "смешанный: if + Past Perfect → would + база (сейчас)."
        },
        {
          "q": "«Возьми зонт на всякий случай» —",
          "opts": [
            "Take an umbrella unless it rains",
            "Take an umbrella in case it rains"
          ],
          "answer": 1,
          "explain": "«на всякий случай» → in case."
        },
        {
          "q": "«Тебе лучше выехать сейчас» —",
          "opts": [
            "You'd rather leave now",
            "You'd better leave now"
          ],
          "answer": 1,
          "explain": "настойчивый совет → had better."
        },
        {
          "q": "«К полудню я уже допишу отчёт» —",
          "opts": [
            "By noon I'll be writing the report",
            "By noon I'll have written the report"
          ],
          "answer": 1,
          "explain": "к сроку готово → will have written."
        },
        {
          "q": "«Это был такой хороший концерт» —",
          "opts": [
            "It was so good concert",
            "It was such a good concert"
          ],
          "answer": 1,
          "explain": "с сущ. → such a good concert."
        },
        {
          "q": "«Я слишком устал, чтобы выйти» —",
          "opts": [
            "I'm enough tired to go out",
            "I'm too tired to go out"
          ],
          "answer": 1,
          "explain": "too + прил. + to + глагол."
        }
      ]
    },
    "picture": {
      "intro": "Опиши неделю по картинке — собери всю неделю 2 (планы, дедлайны, оценки).",
      "emoji": "📚⏰🎯",
      "prompt": "Опиши планы и дедлайны на картинке. Используй: By Friday I'll have…; If I had…, I'd…; You'd better…; It's such a… that…",
      "hint": "Структуры: By the end of the week I'll have finished…; If I'd started earlier, I wouldn't be…; I'd rather… than…; It's too… to…",
      "example": "It's such a busy week that the desk is covered in lists. By Friday I'll have finished almost every task, provided nothing goes wrong. If I had planned better, I wouldn't be working so late now. Honestly, I'd rather work a little each day than leave everything until the deadline. By the time the weekend comes, I'll have earned a proper rest.",
      "img": "img/b2/day-14.jpg",
      "credit": "Фото: neil conway · Public Domain · <a href=\"https://www.flickr.com/photos/30934989@N06/5625707813\" target=\"_blank\" rel=\"noopener\">источник</a>"
    },
    "essay": {
      "intro": "Финал недели 2 — расскажи о решении или плане, где есть «если бы», дедлайн и оценка степени.",
      "prompt": "Напиши 5–7 предложений, используя темы недели: смешанный условный, would rather / had better, will have done / will be doing, so/such/too/enough.",
      "hint": "Структуры: If I had …, I would … now; I'd rather … than …; By … I'll have …; It was such a … that …; too … to …",
      "example": "Last month I decided to change jobs, and it was such a big step that I barely slept for a week. If I had stayed at my old company, I would be bored now, so I don't regret it. By the end of this year I'll have learned a completely new set of skills. Of course, the first weeks were almost too intense to enjoy. Still, I'd rather feel challenged than comfortable — and by next summer I'll have settled in completely."
    }
  },
  "15": {
    "day": 15,
    "week": "03",
    "level": "B2",
    "themeRu": "Пассив везде",
    "themeEn": "Advanced passive",
    "intro": "Открываешь третью главу B2 — неделю залога, безличности и сложных оборотов. Начинаем с <b>пассива на полную мощность</b>. На B1 ты уже умеешь сказать <b>English is spoken here</b> и <b>The house was built in 1900</b>. Теперь раскатаем эту идею на <u>все</u> времена (от <b>is being done</b> до <b>will have been done</b>), добавим <b>модальный пассив</b> (must be done, could have been done) и живой разговорный <b>get</b>-пассив (got stolen, got fired). И, конечно, обезвредим главную русскую ловушку: «работу надо сделать» — это не «the work must do», а <b>the work must be done</b>, а «случилось» — вообще не пассив. Поехали по слоям.",
    "introAudio": "Открываешь третью главу B2 — неделю залога, безличности и сложных оборотов. Начинаем с пассива на полную мощность. На B1 ты уже умеешь сказать English is spoken here и The house was built in 1900. Теперь раскатаем эту идею на все времена, от is being done до will have been done, добавим модальный пассив, must be done, could have been done, и живой разговорный get-пассив, got stolen, got fired. И, конечно, обезвредим главную русскую ловушку: работу надо сделать — это не the work must do, а the work must be done, а случилось — вообще не пассив. Поехали по слоям.",
    "goals": [
      "строить пассив в любом времени: is/was done, is being done, has been done, will have been done",
      "соединять пассив с модальными: must be done сейчас и could have been done в прошлом",
      "не превращать в пассив непереходные глаголы (happen, arrive, die) — у них пассива нет",
      "слышать разницу регистров: формальное be done и разговорное get done (got stolen)"
    ],
    "learned": [
      "Научился(лась) строить пассив в любом времени: is/was done, is being done, has been done, will have been done",
      "Научился(лась) соединять пассив с модальными: must be done сейчас и could have been done в прошлом",
      "Перестал(а) превращать в пассив непереходные глаголы (happen, arrive, die) — у них пассива нет",
      "Научился(лась) слышать разницу регистров: формальное be done и разговорное get done (got stolen)"
    ],
    "review": {
      "intro": "Сначала прогреем фундамент — базовый пассив с B1 и третью форму глагола. Это «вечный» повтор: на нём сегодня держится всё, от модального пассива до репортинга на следующих днях.",
      "introAudio": "Сначала прогреем фундамент — базовый пассив с B1 и третью форму глагола. Это вечный повтор: на нём сегодня держится всё, от модального пассива до репортинга на следующих днях.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни базовый пассив настоящего времени с B1.",
          "q": "«Здесь говорят по-английски» —",
          "opts": [
            "English speaks here",
            "English is spoken here",
            "English is speak here"
          ],
          "answer": 1,
          "explain": "Базовый пассив: is + 3-я форма (speak → <b>spoken</b>)."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши третью форму (past participle) — она нужна для любого пассива.",
          "q": "Третья форма глагола write (писать)?",
          "accept": [
            "written"
          ],
          "placeholder": "write → wrote → ..."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> базовый пассив прошедшего времени.",
          "q": "«Этот мост построили в 1900 году» —",
          "opts": [
            "This bridge built in 1900",
            "This bridge was built in 1900",
            "This bridge was build in 1900"
          ],
          "answer": 1,
          "explain": "Прошедший пассив: was + 3-я форма (build → <b>built</b>)."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · пассив во всех временах",
        "title": "Пассив в любом времени — <em>be + 3-я форма</em>",
        "paras": [
          "Идея пассива знакома с B1: подлежащее не делает действие, а испытывает его. Формула одна на все времена — нужная форма <b>be</b> + <b>3-я форма</b> глагола (past participle). Меняется только be; 3-я форма стоит неподвижно.",
          "Present Simple — <b>is/are done</b>. Past Simple — <b>was/were done</b>. Present Perfect — <b>has/have been done</b>. Past Perfect — <b>had been done</b>. Future — <b>will be done</b>. А процесс прямо сейчас — Continuous: <b>is being done</b>, <b>was being done</b>.",
          "Кто исполнитель — добавляем через <b>by</b>, но только если это важно: <b>The bridge was built by Roman engineers.</b> Чаще исполнитель не нужен — в этом и смысл пассива: на сцене действие, а не тот, кто его совершил."
        ],
        "audio": "Идея пассива знакома с B1: подлежащее не делает действие, а испытывает его. Формула одна на все времена: нужная форма be плюс третья форма глагола. Меняется только be. Present Simple is или are done. Past Simple was или were done. Present Perfect has или have been done. Future will be done. А процесс прямо сейчас, Continuous, is being done. Кто исполнитель — добавляем через by, но только если это важно.",
        "table": {
          "rows": [
            [
              "Present Simple — is/are done",
              "The reports are checked daily."
            ],
            [
              "Past Simple — was/were done",
              "The letter was sent yesterday."
            ],
            [
              "Present Perfect — has/have been done",
              "The road has been closed."
            ],
            [
              "Continuous — is/was being done",
              "The house is being painted."
            ],
            [
              "Future / Past Perfect — will be / had been done",
              "It will be finished by Friday."
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Этот мост построили в 1890 году.",
            "en": "The bridge <b>was built</b> in 1890.",
            "gloss": "Past Simple пассив",
            "say": "The bridge was built in 1890."
          },
          {
            "ru": "Дорогу как раз ремонтируют.",
            "en": "The road <b>is being repaired</b>.",
            "gloss": "процесс сейчас → is being + 3-я форма",
            "say": "The road is being repaired."
          },
          {
            "ru": "Письма уже отправили.",
            "en": "The letters <b>have been sent</b>.",
            "gloss": "Present Perfect пассив",
            "say": "The letters have been sent."
          },
          {
            "ru": "Отчёт закончат к пятнице.",
            "en": "The report <b>will be finished</b> by Friday.",
            "gloss": "Future пассив",
            "say": "The report will be finished by Friday."
          }
        ],
        "mistakes": [
          {
            "wrong": "The house is build now",
            "right": "The house <b>is being built</b> now",
            "why": "процесс сейчас → is being + 3-я форма (built)"
          },
          {
            "wrong": "The letters have sent",
            "right": "The letters <b>have been sent</b>",
            "why": "пассив-перфект: have BEEN + 3-я форма"
          }
        ],
        "mnemonic": "🔁 Пассив = be (в нужном времени) + 3-я форма. Двигается только be.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери будущий пассив.",
            "q": "The new bridge ___ next year.",
            "opts": [
              "will build",
              "will be built",
              "is built"
            ],
            "answer": 1,
            "explain": "Будущий пассив: will be + 3-я форма → <b>will be built</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери пассив-процесс (сейчас).",
            "q": "Собери: «Дом как раз красят»",
            "want": "The house is being painted",
            "answer": "The house is being painted"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши Present Perfect пассив. repair → repaired.",
            "q": "Дорогу уже отремонтировали.",
            "accept": [
              "the road has been repaired",
              "the road has already been repaired"
            ],
            "placeholder": "The road has been ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · модальный пассив",
        "title": "Модальный пассив — <em>must be done, could have been done</em>",
        "paras": [
          "К пассиву часто добавляют модальный глагол: «это нужно сделать», «это можно увидеть», «это могли бы заметить». Формула для настоящего и будущего проста: <b>модальный + be + 3-я форма</b>. <b>The work must be done</b> today. <b>Mistakes can be corrected.</b>",
          "Для прошлого — упущенной возможности или предположения о том, что было, — берём <b>модальный + have been + 3-я форма</b>: <b>The letter could have been lost</b> (письмо могли потерять), <b>The decision should have been made</b> earlier (решение надо было принять раньше).",
          "Это сборка из двух знакомых кирпичей: модальная дедукция о прошлом (must have, could have с недели 1) плюс пассив. Между модальным и 3-й формой всегда вставляется <b>be</b> (сейчас) или <b>have been</b> (раньше)."
        ],
        "audio": "К пассиву часто добавляют модальный глагол. Формула для настоящего и будущего: модальный плюс be плюс третья форма. The work must be done today. Mistakes can be corrected. Для прошлого берём модальный плюс have been плюс третья форма. The letter could have been lost. The decision should have been made earlier. Между модальным и третьей формой всегда be, сейчас, или have been, раньше.",
        "table": {
          "rows": [
            [
              "must be done",
              "это нужно сделать"
            ],
            [
              "can / could be done",
              "это можно / можно было бы сделать"
            ],
            [
              "should be done",
              "это следует сделать"
            ],
            [
              "must have been done",
              "наверное, это сделали (прош.)"
            ],
            [
              "could / should have been done",
              "могли бы / следовало сделать (прош.)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Заявку нужно подать до пятницы.",
            "en": "The form <b>must be submitted</b> by Friday.",
            "gloss": "modal + be + 3-я форма",
            "say": "The form must be submitted by Friday."
          },
          {
            "ru": "Эту ошибку могли бы заметить раньше.",
            "en": "This mistake <b>could have been spotted</b> earlier.",
            "gloss": "прошлое → modal + have been + 3-я форма",
            "say": "This mistake could have been spotted earlier."
          },
          {
            "ru": "Деньги наверняка украли.",
            "en": "The money <b>must have been stolen</b>.",
            "gloss": "дедукция о прошлом в пассиве",
            "say": "The money must have been stolen."
          },
          {
            "ru": "Письмо следовало отправить вчера.",
            "en": "The letter <b>should have been sent</b> yesterday.",
            "gloss": "упрёк, прошлый пассив",
            "say": "The letter should have been sent yesterday."
          }
        ],
        "mistakes": [
          {
            "wrong": "The work must do today",
            "right": "The work <b>must be done</b> today",
            "why": "рус. «надо сделать» безлично → must BE DONE, работа сама себя не делает"
          },
          {
            "wrong": "It must have stolen",
            "right": "It <b>must have been stolen</b>",
            "why": "пассив-прошлое с модальным: have BEEN + 3-я форма"
          }
        ],
        "mnemonic": "🔧 Сейчас: modal + be + 3-я форма. Прошлое: modal + have been + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> модальный пассив настоящего.",
            "q": "«Заявку нужно подать сегодня» —",
            "opts": [
              "The form must submit today",
              "The form must be submitted today",
              "The form must been submitted today"
            ],
            "answer": 1,
            "explain": "must + be + 3-я форма → <b>must be submitted</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> модальный пассив прошлого.",
            "q": "«Эту проблему можно было решить» —",
            "opts": [
              "This problem could solve",
              "This problem could have been solved",
              "This problem could been solved"
            ],
            "answer": 1,
            "explain": "could + have been + 3-я форма → <b>could have been solved</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши модальный пассив. correct → corrected.",
            "q": "Эту ошибку нужно исправить.",
            "accept": [
              "this mistake must be corrected",
              "the mistake must be corrected"
            ],
            "placeholder": "This mistake must be ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "«Надо сделать» и «случилось» — две ловушки",
        "paras": [
          "Первая ловушка — русская безличность и возвратность. «Работу нужно сделать», «дом строится», «книгу читают» — исполнителя нет или он спрятан. По-английски здесь почти всегда нужен пассив: <b>be + 3-я форма</b>. «The work must <u>do</u>» невозможно — работа сама себя не делает → <b>must be done</b>. «Дом строится» → <b>The house is being built</b>, а не «is building».",
          "Вторая ловушка — непереходные глаголы. У пассива должно быть «что-то, над чем совершают действие» (дополнение). Глаголы <b>happen, occur, arrive, appear, die, fall, rise</b> дополнения не имеют — у них <u>нет</u> пассива вообще. «It <u>was happened</u>» ✗: happen уже само значит «случилось» → просто <b>It happened.</b>",
          "Проверь себя двумя вопросами. (1) Есть над чем-то действие, а исполнитель неважен? → ставь <b>be + 3-я форма</b>. (2) Можно ли задать к глаголу «кого/что?» Если нельзя (happen, arrive, die) — пассива не существует, оставляй активную форму."
        ],
        "audio": "Первая ловушка — русская безличность. Работу нужно сделать, дом строится, книгу читают — исполнителя нет. По-английски здесь почти всегда пассив: be плюс третья форма. The work must be done. The house is being built, а не is building. Вторая ловушка — непереходные глаголы. У happen, occur, arrive, die, fall дополнения нет, и пассива нет вообще. It was happened — ошибка: просто It happened.",
        "table": {
          "rows": [
            [
              "The house is being built.",
              "Дом строится (пассив, не «is building»)"
            ],
            [
              "The work must be done.",
              "Работу надо сделать (не «must do»)"
            ],
            [
              "It happened yesterday.",
              "Это случилось вчера (НЕ «was happened»)"
            ],
            [
              "We arrived late.",
              "Мы приехали поздно (НЕ «were arrived»)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Этот вопрос обсуждают на каждом собрании.",
            "en": "This issue <b>is discussed</b> at every meeting.",
            "gloss": "безличное «обсуждают» → пассив",
            "say": "This issue is discussed at every meeting."
          },
          {
            "ru": "Авария случилась в полночь.",
            "en": "The accident <b>happened</b> at midnight.",
            "gloss": "happen — без пассива",
            "say": "The accident happened at midnight."
          },
          {
            "ru": "Меня пригласили на собеседование.",
            "en": "I <b>was invited</b> to an interview.",
            "gloss": "«меня пригласили» → was + 3-я форма",
            "say": "I was invited to an interview."
          }
        ],
        "mistakes": [
          {
            "wrong": "The accident was happened at night",
            "right": "The accident <b>happened</b> at night",
            "why": "happen непереходный — пассива нет"
          },
          {
            "wrong": "A problem was appeared",
            "right": "A problem <b>appeared</b>",
            "why": "appear не имеет дополнения → без be"
          },
          {
            "wrong": "The houses are building now",
            "right": "The houses <b>are being built</b> now",
            "why": "«строятся» — это пассив-процесс, не активная -ing"
          }
        ],
        "mnemonic": "🚫 happen / arrive / die — НИКОГДА не пассив. «надо сделать / строится» — ВСЕГДА be + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> happen непереходный — у него нет пассива.",
            "q": "«Это случилось вчера» —",
            "opts": [
              "It was happened yesterday",
              "It happened yesterday"
            ],
            "answer": 1,
            "explain": "happen уже значит «случилось» → активная форма <b>happened</b>, без be."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «ремонтируют» — безличное, нужен пассив-процесс.",
            "q": "«Дорогу сейчас ремонтируют» —",
            "opts": [
              "The road is repairing now",
              "The road is being repaired now",
              "The road repairs now"
            ],
            "answer": 1,
            "explain": "процесс над дорогой → <b>is being repaired</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пассив. invite → invited.",
            "q": "Меня пригласили на собеседование.",
            "accept": [
              "i was invited to an interview",
              "i was invited for an interview",
              "i was invited to a job interview"
            ],
            "placeholder": "I was invited ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · get-пассив",
        "title": "Разговорный пассив — <em>get + 3-я форма</em>",
        "paras": [
          "В живой, неформальной речи вместо be часто звучит <b>get</b> + 3-я форма. Смысл тот же — пассив, но с оттенком: что-то <u>случилось</u>, изменилось, часто внезапно или не по плану. <b>My phone got stolen.</b> = У меня украли телефон. <b>He got fired.</b> = Его уволили.",
          "Get-пассив любит «происшествия» и перемены состояния: <b>get broken, get lost, get hurt, get caught, get paid, get promoted</b>. И есть устойчивые обороты: <b>get married</b> (пожениться), <b>get dressed</b> (одеться), <b>get changed</b> (переодеться), <b>get used to</b> (привыкнуть).",
          "Регистр решает всё. Get-пассив — разговорный. В отчёте, статье, формальном письме оставляй <b>be</b>: «The phone <u>was</u> stolen». В чате с другом естественнее «My phone <u>got</u> stolen». Одна мысль — два регистра."
        ],
        "audio": "В живой неформальной речи вместо be часто звучит get плюс третья форма. Смысл тот же — пассив, но с оттенком: что-то случилось, изменилось, часто внезапно. My phone got stolen. He got fired. Get-пассив любит происшествия и перемены: get broken, get lost, get promoted. И устойчивые обороты: get married, get dressed, get used to. В формальном тексте оставляй be, в разговоре естественнее get.",
        "table": {
          "rows": [
            [
              "get + 3-я форма",
              "разговорный пассив (got stolen)"
            ],
            [
              "be + 3-я форма",
              "нейтральный / формальный (was stolen)"
            ],
            [
              "get married / dressed / lost",
              "устойчивые обороты"
            ],
            [
              "happened / arrived",
              "без пассива вовсе"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Его повысили в прошлом месяце.",
            "en": "He <b>got promoted</b> last month.",
            "gloss": "разговорный пассив",
            "say": "He got promoted last month."
          },
          {
            "ru": "Не потеряйся в новом городе.",
            "en": "Don't <b>get lost</b> in the new city.",
            "gloss": "get lost — устойчивое",
            "say": "Don't get lost in the new city."
          },
          {
            "ru": "Они поженились прошлым летом.",
            "en": "They <b>got married</b> last summer.",
            "gloss": "get married",
            "say": "They got married last summer."
          },
          {
            "ru": "Мою машину поцарапали на парковке.",
            "en": "My car <b>got scratched</b> in the car park.",
            "gloss": "происшествие → get + 3-я форма",
            "say": "My car got scratched in the car park."
          }
        ],
        "mistakes": [
          {
            "wrong": "They married get last year",
            "right": "They <b>got married</b> last year",
            "why": "порядок: get + 3-я форма (got married)"
          },
          {
            "wrong": "The report got written by the team (формальный отчёт)",
            "right": "The report <b>was written</b> by the team",
            "why": "в формальном тексте — be, не get"
          }
        ],
        "mnemonic": "💥 Происшествие / перемена в разговоре → get + 3-я форма (got broken, got fired). Формально → be.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> разговорный пассив.",
            "q": "«Его уволили на прошлой неделе» (разговорно) —",
            "opts": [
              "He was fire last week",
              "He got fired last week",
              "He get fired last week"
            ],
            "answer": 1,
            "explain": "get + 3-я форма: <b>got fired</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери устойчивый оборот.",
            "q": "Собери: «Они поженились прошлым летом»",
            "want": "They got married last summer",
            "answer": "They got married last summer"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пассив про кражу. steal → stolen.",
            "q": "У меня украли телефон.",
            "accept": [
              "my phone got stolen",
              "my phone was stolen"
            ],
            "placeholder": "My phone got ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Оля рассказывает Максу про потоп в квартире. Слушай, как пассив работает во всех временах: что испорчено, что ремонтируют сейчас, что надо было сделать раньше. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Olia",
          "name": "Оля",
          "side": "left",
          "en": "You won't believe it — my flat got flooded last night while I was asleep.",
          "ru": "Не поверишь — мою квартиру вчера затопило, пока я спала.",
          "words": [
            [
              "got flooded",
              "затопило (get-пассив)"
            ],
            [
              "while I was asleep",
              "пока я спала"
            ]
          ]
        },
        {
          "who": "Max",
          "name": "Макс",
          "side": "right",
          "en": "Oh no. Has anything been damaged?",
          "ru": "О нет. Что-нибудь пострадало?",
          "words": [
            [
              "has anything been damaged",
              "пострадало ли (Present Perfect пассив)"
            ]
          ]
        },
        {
          "who": "Olia",
          "name": "Оля",
          "side": "left",
          "en": "The wooden floor was ruined, and the ceiling has to be repainted.",
          "ru": "Деревянный пол испорчен, а потолок придётся перекрасить.",
          "words": [
            [
              "was ruined",
              "испорчен (was + 3-я форма)"
            ],
            [
              "has to be repainted",
              "придётся перекрасить (модальный пассив)"
            ]
          ]
        },
        {
          "who": "Max",
          "name": "Макс",
          "side": "right",
          "en": "Could it have been prevented?",
          "ru": "А это можно было предотвратить?",
          "words": [
            [
              "could it have been prevented",
              "можно ли было предотвратить (прош. модальный пассив)"
            ]
          ]
        },
        {
          "who": "Olia",
          "name": "Оля",
          "side": "left",
          "en": "Probably. The old pipes should have been replaced years ago.",
          "ru": "Наверное. Старые трубы надо было заменить ещё годы назад.",
          "words": [
            [
              "should have been replaced",
              "надо было заменить (прош. модальный пассив)"
            ]
          ]
        },
        {
          "who": "Max",
          "name": "Макс",
          "side": "right",
          "en": "Well, at least the damage is being fixed now.",
          "ru": "Ну, хотя бы ущерб сейчас устраняют.",
          "words": [
            [
              "is being fixed",
              "устраняют сейчас (пассив-процесс)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Глаголы и обороты, которые на B2 живут в основном в пассиве. Повтори вслух и заметь, какое время несёт be.",
      "items": [
        {
          "en": "be built",
          "ru": "быть построенным",
          "ex": "The stadium was built in 2018."
        },
        {
          "en": "be damaged",
          "ru": "быть повреждённым",
          "ex": "Several cars were damaged in the storm."
        },
        {
          "en": "be repaired",
          "ru": "быть отремонтированным",
          "ex": "The road is being repaired."
        },
        {
          "en": "carry out",
          "ru": "проводить, выполнять (работу/исследование)",
          "ex": "The tests were carried out last week."
        },
        {
          "en": "be replaced",
          "ru": "быть заменённым",
          "ex": "The pipes should have been replaced."
        },
        {
          "en": "get stolen",
          "ru": "быть украденным (разг.)",
          "ex": "My bike got stolen yesterday."
        },
        {
          "en": "get promoted",
          "ru": "получить повышение",
          "ex": "She got promoted in May."
        },
        {
          "en": "be delayed",
          "ru": "быть задержанным / отложенным",
          "ex": "The flight was delayed by fog."
        },
        {
          "en": "be held",
          "ru": "проводиться (о событии)",
          "ex": "The meeting will be held online."
        },
        {
          "en": "prevent",
          "ru": "предотвращать",
          "ex": "The accident could have been prevented."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай историю старой фабрики. Заметь, как пассив работает во всех временах — от was built до will have been completed — а непереходный fell apart остаётся активным.",
      "title": "The old factory",
      "sentences": [
        "The old factory on the river was built more than a hundred years ago.",
        "For decades, cloth was produced there and sold all over the country.",
        "When the business closed, the building was left empty and slowly fell apart.",
        "Recently it was bought by the city council.",
        "Now the whole site is being turned into a museum.",
        "The roof has already been repaired and new windows have been fitted.",
        "By next spring, the work will have been completed.",
        "It is hoped that thousands of visitors will be attracted every year."
      ],
      "translation": "Старая фабрика у реки была построена больше ста лет назад. Десятилетиями там производили ткань и продавали по всей стране. Когда дело закрылось, здание оставили пустым, и оно медленно разрушалось. Недавно его купил городской совет. Сейчас всю территорию превращают в музей. Крышу уже починили, и поставили новые окна. К следующей весне работы будут завершены. Есть надежда, что каждый год это будет привлекать тысячи посетителей."
    },
    "drag": {
      "intro": "Соедини форму пассива с её значением и временем.",
      "pairs": [
        [
          "is being repaired",
          "ремонтируют сейчас (процесс)"
        ],
        [
          "was built",
          "построили (прошлое)"
        ],
        [
          "has been sent",
          "уже отправили"
        ],
        [
          "must be done",
          "надо сделать (модальный)"
        ],
        [
          "got stolen",
          "украли (разговорно)"
        ],
        [
          "happened",
          "случилось (без пассива)"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка дня. Пять вопросов — и пассив во всех временах твой.",
      "items": [
        {
          "q": "«Дом сейчас строят» —",
          "opts": [
            "The house builds now",
            "The house is being built now",
            "The house is build now"
          ],
          "answer": 1,
          "explain": "процесс сейчас → <b>is being built</b>."
        },
        {
          "q": "«Работу нужно закончить сегодня» —",
          "opts": [
            "The work must finish today",
            "The work must be finished today",
            "The work must been finished today"
          ],
          "answer": 1,
          "explain": "модальный пассив: must + be + 3-я форма → <b>must be finished</b>."
        },
        {
          "q": "«Письмо могли потерять» —",
          "opts": [
            "The letter could lost",
            "The letter could have been lost",
            "The letter could been lost"
          ],
          "answer": 1,
          "explain": "прошлый модальный пассив: could + have been + 3-я форма."
        },
        {
          "q": "Какой глагол НЕ бывает в пассиве?",
          "opts": [
            "build",
            "send",
            "happen"
          ],
          "answer": 2,
          "explain": "happen непереходный — у него нет дополнения, значит нет и пассива."
        },
        {
          "q": "«Его уволили» (разговорно) —",
          "opts": [
            "He got fired",
            "He was fire",
            "He get fired"
          ],
          "answer": 0,
          "explain": "get-пассив: <b>got fired</b>."
        }
      ]
    },
    "essay": {
      "intro": "Твоя очередь — опиши процесс или правила в пассиве.",
      "prompt": "Опиши, как что-то делается, ремонтируется или какие правила где-то действуют. 5–6 предложений. Используй разные времена пассива (is done, is being done, was done, has been done, will be done) и хотя бы один модальный пассив (must be done).",
      "hint": "Структуры: First, the … is checked ; The building is being … ; The old part was … ; Everything has been … ; The work must be done by … ; It will be finished by … .",
      "example": "In our office, the rules are followed strictly. Every morning, the reports are checked and the data is updated. At the moment, the old computers are being replaced with new ones. Last year, the whole network was rebuilt, and since then nothing has been lost. All passwords must be changed every month. By the end of the year, the system will have been fully upgraded."
    },
    "picture": {
      "intro": "Опиши стройку или ремонт: что строится, что уже сделано, что ещё надо доделать.",
      "emoji": "🏗️🧱🚧",
      "prompt": "Опиши сцену в пассиве: что строится сейчас (is being built), что уже сделано (has been done), что нужно сделать (must be done).",
      "hint": "Используй: A new building is being built; the walls have already been painted; the roof must still be finished.",
      "example": "A new block of flats is being built in the city centre. The walls have already been put up, and most of the windows have been fitted. Right now the roof is being completed. The road outside must still be repaired before people move in. Everything will be finished by the autumn.",
      "img": "img/b2/day-15.jpg",
      "credit": "Фото: Amsterdam free photos &amp; pictures of the Dutch city · CC0 · <a href=\"https://www.flickr.com/photos/104736837@N03/10572479975\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "16": {
    "day": 16,
    "week": "03",
    "level": "B2",
    "themeRu": "Говорят, что…",
    "themeEn": "It is said that…",
    "intro": "Вчера мы раскатали пассив на все времена — а сегодня заставим его передавать <b>чужие слова и общие мнения</b>. Как по-английски сказать «<b>говорят, что…</b>», «<b>считается, что…</b>», «<b>сообщают, что…</b>», когда не хочешь называть источник? Для этого есть аккуратная безличная конструкция с пустым <b>It</b>: <b>It is said that…</b>, <b>It is believed that…</b>, <b>It is reported that…</b>. Это язык новостей, науки и вежливой осторожности. И сразу обезвредим русскую ловушку: «говорят, что» — это <u>не</u> «They say me…» (глагол say вообще не берёт человека). Разберёмся по слоям.",
    "introAudio": "Вчера мы раскатали пассив на все времена, а сегодня заставим его передавать чужие слова и общие мнения. Как по-английски сказать говорят, что; считается, что; сообщают, что, когда не хочешь называть источник? Для этого есть аккуратная безличная конструкция с пустым It: It is said that, It is believed that, It is reported that. Это язык новостей, науки и вежливой осторожности. И сразу обезвредим русскую ловушку: говорят, что — это не They say me, глагол say вообще не берёт человека. Разберёмся по слоям.",
    "goals": [
      "строить безличный репортинг: It is said / believed / thought / reported that + предложение",
      "управлять временем внутри придаточного: he lives / he lived / he has lived",
      "не говорить «They say me…» — для общего слуха брать It is said that…",
      "переключать регистр: формальное It is widely believed that… vs разговорное Apparently…"
    ],
    "learned": [
      "Научился(лась) строить безличный репортинг: It is said / believed / thought / reported that + предложение",
      "Научился(лась) управлять временем внутри придаточного: he lives / he lived / he has lived",
      "Перестал(а) говорить «They say me…» — для общего слуха стал(а) брать It is said that…",
      "Научился(лась) переключать регистр: формальное It is widely believed that… vs разговорное Apparently…"
    ],
    "review": {
      "intro": "Сначала прогреем вчерашний пассив и «вечный» повтор основ косвенной речи (backshift, say vs tell). Именно на них сегодня вырастает безличный репортинг.",
      "introAudio": "Сначала прогреем вчерашний пассив и вечный повтор основ косвенной речи, backshift и say против tell. Именно на них сегодня вырастает безличный репортинг.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни вчерашний модальный пассив.",
          "q": "«Эту работу нужно сделать сегодня» —",
          "opts": [
            "The work must do today",
            "The work must be done today",
            "The work must been done today"
          ],
          "answer": 1,
          "explain": "модальный пассив: must + be + 3-я форма → <b>must be done</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> основы reported speech — согласование времён (backshift).",
          "q": "Direct: «I am tired». → He said that he ___ tired.",
          "opts": [
            "is",
            "was",
            "has been"
          ],
          "answer": 1,
          "explain": "После said настоящее сдвигается в прошлое: am → <b>was</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> say vs tell — кто берёт человека дополнением.",
          "q": "Он сказал МНЕ, что опоздает. — He ___ me he would be late.",
          "opts": [
            "said",
            "told",
            "spoke"
          ],
          "answer": 1,
          "explain": "С человеком-дополнением — <b>told</b> me (say me нельзя)."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · безличный репортинг",
        "title": "«Говорят / считают, что…» — <em>It is said that…</em>",
        "paras": [
          "Когда мы передаём <u>общее</u> мнение или слух — «говорят», «считается», «полагают» — и не хотим называть, кто именно это сказал, английский берёт пассив с пустым <b>It</b>: <b>It is said that…</b>, <b>It is believed that…</b>, <b>It is thought that…</b>. Дословно — «оно говорится, что…».",
          "Формула: <b>It + is/was + 3-я форма глагола сообщения + that + предложение</b>. После that идёт обычное полное предложение с подлежащим и сказуемым. <b>It is said that the company is in trouble.</b> = Говорят, что у компании проблемы.",
          "Это прямое продолжение вчерашнего пассива: <b>be + 3-я форма</b> (said, believed, thought, reported). Только теперь подлежащее — формальное <b>It</b>, а сама мысль прячется в придаточном после <b>that</b>."
        ],
        "audio": "Когда мы передаём общее мнение или слух, и не хотим называть, кто это сказал, английский берёт пассив с пустым It. It is said that, It is believed that, It is thought that. Формула: It плюс is или was плюс третья форма глагола сообщения плюс that плюс предложение. It is said that the company is in trouble. Это продолжение вчерашнего пассива: be плюс третья форма, только подлежащее — формальное It.",
        "table": {
          "rows": [
            [
              "It is said that…",
              "говорят, что…"
            ],
            [
              "It is believed that…",
              "считают / полагают, что…"
            ],
            [
              "It is thought that…",
              "думают, что…"
            ],
            [
              "It is reported that…",
              "сообщают, что…"
            ],
            [
              "It is known that…",
              "известно, что…"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Говорят, что эта вода полезна.",
            "en": "<b>It is said that</b> this water is healthy.",
            "gloss": "It is said that + предложение",
            "say": "It is said that this water is healthy."
          },
          {
            "ru": "Считается, что в замке водятся призраки.",
            "en": "<b>It is believed that</b> the castle is haunted.",
            "gloss": "believe → believed",
            "say": "It is believed that the castle is haunted."
          },
          {
            "ru": "Сообщают, что переговоры провалились.",
            "en": "<b>It is reported that</b> the talks have failed.",
            "gloss": "reported, перфект в придаточном",
            "say": "It is reported that the talks have failed."
          },
          {
            "ru": "Известно, что он живёт за границей.",
            "en": "<b>It is known that</b> he lives abroad.",
            "gloss": "known",
            "say": "It is known that he lives abroad."
          }
        ],
        "mistakes": [
          {
            "wrong": "They say me that it is healthy",
            "right": "<b>It is said that</b> it is healthy",
            "why": "«говорят» безлично → It is said that, без «me»"
          },
          {
            "wrong": "Is said that he is rich",
            "right": "<b>It</b> is said that he is rich",
            "why": "нужно формальное подлежащее It"
          }
        ],
        "mnemonic": "🗣️ «Говорят, что…» = It is said that… (be + 3-я форма + that + предложение).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери безличный репортинг.",
            "q": "«Считается, что он богат» —",
            "opts": [
              "They believe me he is rich",
              "It is believed that he is rich",
              "Is believed that he is rich"
            ],
            "answer": 1,
            "explain": "It + is + believed + that + предложение."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери безличный репортинг.",
            "q": "Собери: «Говорят, что вода полезна»",
            "want": "It is said that the water is healthy",
            "answer": "It is said that the water is healthy"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши конструкцию с reported. delay → delayed.",
            "q": "Сообщают, что рейс задержали.",
            "accept": [
              "it is reported that the flight has been delayed",
              "it is reported that the flight was delayed"
            ],
            "placeholder": "It is reported that the flight ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · время после that",
        "title": "Слух о сейчас или о прошлом: время в придаточном",
        "paras": [
          "Здесь два независимых «слоя времени». Первый — <b>когда сообщают</b>: сейчас (<b>It is said…</b>) или тогда (<b>It was said…</b>). Второй — <b>когда происходит само событие</b>, внутри that.",
          "Если событие одновременно с сообщением — обычное настоящее: <b>It is said that he <u>lives</u> in Paris.</b> Если событие <u>раньше</u> — прошедшее или перфект: <b>It is said that he <u>lived</u> / <u>has lived</u> there for years.</b>",
          "Когда главное в прошлом (<b>It was said…</b>), включается согласование времён (backshift) из косвенной речи: <b>It was believed that the earth <u>was</u> flat.</b> — present внутри сдвигается в past. Это та же логика, что мы грели в обзоре."
        ],
        "audio": "Здесь два слоя времени. Первый — когда сообщают: сейчас, It is said, или тогда, It was said. Второй — когда происходит само событие, внутри that. Если событие одновременно — обычное настоящее: It is said that he lives in Paris. Если раньше — прошедшее: It is said that he lived there for years. Когда главное в прошлом, It was said, включается согласование времён: It was believed that the earth was flat.",
        "table": {
          "rows": [
            [
              "It is said that he lives here.",
              "событие сейчас → present"
            ],
            [
              "It is said that he lived here.",
              "событие раньше → past"
            ],
            [
              "It was said that he lived here.",
              "прош. сообщение + backshift"
            ],
            [
              "It was believed that the earth was flat.",
              "согласование времён (is → was)"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Говорят, она прекрасно готовит.",
            "en": "It is said that she <b>cooks</b> beautifully.",
            "gloss": "одновременность → present",
            "say": "It is said that she cooks beautifully."
          },
          {
            "ru": "Говорят, он жил здесь в детстве.",
            "en": "It is said that he <b>lived</b> here as a child.",
            "gloss": "раньше → past",
            "say": "It is said that he lived here as a child."
          },
          {
            "ru": "Раньше считали, что солнце вращается вокруг земли.",
            "en": "It <b>was</b> believed that the sun <b>went</b> round the earth.",
            "gloss": "прош. сообщение + backshift",
            "say": "It was believed that the sun went round the earth."
          }
        ],
        "mistakes": [
          {
            "wrong": "It is said that he is living here ten years ago",
            "right": "It is said that he <b>lived</b> here ten years ago",
            "why": "есть «ten years ago» → событие в прошлом → past"
          },
          {
            "wrong": "It was said that the earth is flat",
            "right": "It was said that the earth <b>was</b> flat",
            "why": "главное в прошлом → согласование времён (is → was)"
          }
        ],
        "mnemonic": "🕰️ Два слоя: когда говорят (is/was said) и когда событие (lives / lived / has lived).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> событие одновременно с сообщением.",
            "q": "It is said that he ___ in London now.",
            "opts": [
              "lives",
              "lived",
              "has lived"
            ],
            "answer": 0,
            "explain": "«now», событие сейчас → present: <b>lives</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> прош. сообщение, а событие случилось ещё раньше.",
            "q": "It was reported that the team ___ the match.",
            "opts": [
              "wins",
              "has won",
              "had won"
            ],
            "answer": 2,
            "explain": "прош. репортинг + ещё более раннее событие → Past Perfect: <b>had won</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши безличный репортинг в настоящем.",
            "q": "Говорят, она живёт за границей.",
            "accept": [
              "it is said that she lives abroad"
            ],
            "placeholder": "It is said that she ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Не «They say me»: безличность по-английски",
        "paras": [
          "Главная ошибка русскоязычных — переносить «говорят» как <b>They say…</b> и, хуже того, добавлять лишнее местоимение: <b>«They say me that…»</b>. Глагол <b>say</b> не берёт человека прямым дополнением (вспомни say vs tell): «say me» невозможно. А для общего слуха правильнее всего — безличное <b>It is said that…</b>.",
          "«They say that…» в английском есть и звучит разговорно, но <b>It is said that…</b> нейтральнее и уместнее в письме, новостях, эссе. Сравни регистры: разговорно — «People say…», «Apparently…»; формально — «It is said / believed / reported that…».",
          "И вторая ловушка: после <b>It is said</b> в этой модели всегда идёт <b>that + предложение</b> либо инфинитивный оборот (to-инфинитив: to happen) — это завтра, Д17. Нельзя мешать в кашу: <b>«It is said to be happen»</b> ✗ — либо <i>It is said that it happens</i>, либо <i>It is said to happen</i>."
        ],
        "audio": "Главная ошибка — переносить говорят как They say, и добавлять лишнее местоимение: They say me that. Глагол say не берёт человека дополнением: say me невозможно. Для общего слуха правильно безличное It is said that. They say that тоже есть, но звучит разговорно. И вторая ловушка: после It is said всегда идёт that плюс предложение либо инфинитивный оборот с to. Нельзя It is said to be happen.",
        "table": {
          "rows": [
            [
              "✓ It is said that he is rich.",
              "формально, безлично"
            ],
            [
              "✓ They say (that) he is rich.",
              "разговорно"
            ],
            [
              "✗ They say me that…",
              "say не берёт «me»"
            ],
            [
              "✗ It is said to be happen",
              "смешение «that» и инфинитива"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Мне сказали, что офис закрыт.",
            "en": "<b>I was told that</b> the office was closed.",
            "gloss": "«мне сказали» → I was told (tell берёт лицо)",
            "say": "I was told that the office was closed."
          },
          {
            "ru": "Говорят, что цены вырастут.",
            "en": "<b>It is said that</b> prices will rise.",
            "gloss": "безлично, без «me»",
            "say": "It is said that prices will rise."
          },
          {
            "ru": "Сообщается, что никто не пострадал.",
            "en": "<b>It is reported that</b> no one was hurt.",
            "gloss": "reported",
            "say": "It is reported that no one was hurt."
          }
        ],
        "mistakes": [
          {
            "wrong": "They say me that prices will rise",
            "right": "<b>It is said that</b> prices will rise",
            "why": "say не берёт «me»; для слуха — It is said that"
          },
          {
            "wrong": "It is said to be happen tomorrow",
            "right": "It is said <b>that it will happen</b> tomorrow",
            "why": "либо that + предложение, либо инфинитивный оборот (to happen)"
          }
        ],
        "mnemonic": "⚠️ «Говорят, что» → It is said that… НЕ «They say me». И не мешай that с инфинитивом.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «мне сказали» — кто берёт лицо дополнением?",
            "q": "«Мне сказали, что встреча отменена» —",
            "opts": [
              "They said me the meeting is cancelled",
              "I was told that the meeting was cancelled",
              "It said me that the meeting was cancelled"
            ],
            "answer": 1,
            "explain": "tell берёт лицо → <b>I was told that…</b> (say me нельзя)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> не смешивай that и инфинитив.",
            "q": "Что правильно?",
            "opts": [
              "It is said to be happen tomorrow",
              "It is said that it will happen tomorrow",
              "It is said it happen tomorrow"
            ],
            "answer": 1,
            "explain": "either that + предложение, либо инфинитив — но не «to be happen»."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши безличный репортинг.",
            "q": "Говорят, что цены вырастут.",
            "accept": [
              "it is said that prices will rise",
              "it is said that prices will go up"
            ],
            "placeholder": "It is said that prices ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · регистр и альтернативы",
        "title": "Где это звучит: новости, наука, осторожность",
        "paras": [
          "Зачем эта конструкция? Она позволяет сообщить мысль, <u>не беря на себя ответственность</u> за неё и не называя источник. Поэтому это язык новостей, науки и вежливого хеджирования: <b>It is widely believed that…</b>, <b>It is generally agreed that…</b>, <b>It has been suggested that…</b>.",
          "Усиливай наречиями: <b>widely</b> (широко), <b>generally</b> (в целом), <b>commonly</b> (обычно), <b>often</b>. Наречие стоит <u>перед</u> 3-й формой: <b>It is widely thought that the climate is changing.</b>",
          "В разговоре те же мысли звучат проще: <b>Apparently…</b> (судя по всему), <b>People say…</b>, <b>I've heard that…</b>, <b>Supposedly…</b> (якобы). Выбор зависит от регистра: эссе — формально, чат — разговорно."
        ],
        "audio": "Зачем эта конструкция? Она позволяет сообщить мысль, не беря на себя ответственность и не называя источник. Это язык новостей, науки и вежливого хеджирования: It is widely believed that, It is generally agreed that, It has been suggested that. Усиливай наречиями: widely, generally, commonly — они стоят перед третьей формой. В разговоре проще: Apparently, People say, I've heard that, Supposedly.",
        "table": {
          "rows": [
            [
              "It is widely believed that…",
              "широко считается (формально)"
            ],
            [
              "It has been suggested that…",
              "было высказано предположение"
            ],
            [
              "Apparently…",
              "судя по всему (разговорно)"
            ],
            [
              "People say / I've heard that…",
              "разговорные варианты"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Широко считается, что упражнения улучшают сон.",
            "en": "<b>It is widely believed that</b> exercise improves sleep.",
            "gloss": "widely + believed",
            "say": "It is widely believed that exercise improves sleep."
          },
          {
            "ru": "Высказывалось предположение, что план провалится.",
            "en": "<b>It has been suggested that</b> the plan will fail.",
            "gloss": "has been suggested (перфект-пассив)",
            "say": "It has been suggested that the plan will fail."
          },
          {
            "ru": "Судя по всему, они расстались.",
            "en": "<b>Apparently</b>, they have split up.",
            "gloss": "разговорный эквивалент",
            "say": "Apparently, they have split up."
          }
        ],
        "mistakes": [
          {
            "wrong": "It is believe widely that…",
            "right": "It is <b>widely believed</b> that…",
            "why": "3-я форма (believed) + наречие перед ней"
          },
          {
            "wrong": "Apparently that they left",
            "right": "<b>Apparently</b>, they left",
            "why": "apparently — наречие, без that"
          }
        ],
        "mnemonic": "📰 Формально: It is widely believed that… · Разговорно: Apparently… / People say…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери формальный вариант.",
            "q": "Формальное «широко считается, что…»:",
            "opts": [
              "People say that",
              "It is widely believed that",
              "Apparently that"
            ],
            "answer": 1,
            "explain": "Формально и безлично → <b>It is widely believed that…</b>"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери конструкцию с suggested.",
            "q": "Собери: «Высказывалось предположение, что план провалится»",
            "want": "It has been suggested that the plan will fail",
            "answer": "It has been suggested that the plan will fail"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши разговорный эквивалент.",
            "q": "Судя по всему, они расстались.",
            "accept": [
              "apparently they have split up",
              "apparently, they have split up",
              "apparently they split up"
            ],
            "placeholder": "Apparently, they ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Лена и Том обсуждают слухи в компании. Слушай, как одна и та же мысль звучит формально (It is said) и разговорно (Apparently). Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Lena",
          "name": "Лена",
          "side": "left",
          "en": "Have you heard the news? It is said that the company is about to be sold.",
          "ru": "Слышал новости? Говорят, компанию вот-вот продадут.",
          "words": [
            [
              "it is said that",
              "говорят, что (безличный репортинг)"
            ],
            [
              "be sold",
              "продадут (пассив)"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Really? Who told you that?",
          "ru": "Правда? Кто тебе сказал?",
          "words": [
            [
              "who told you",
              "кто тебе сказал (tell + лицо)"
            ]
          ]
        },
        {
          "who": "Lena",
          "name": "Лена",
          "side": "left",
          "en": "Nobody in particular. It is widely believed that the owner wants to retire.",
          "ru": "Никто конкретно. Широко считается, что владелец хочет уйти на пенсию.",
          "words": [
            [
              "it is widely believed",
              "широко считается"
            ],
            [
              "retire",
              "уйти на пенсию"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Apparently, several jobs will be cut as well.",
          "ru": "Судя по всему, ещё и сократят несколько рабочих мест.",
          "words": [
            [
              "apparently",
              "судя по всему (разговорно)"
            ],
            [
              "be cut",
              "сократят (пассив)"
            ]
          ]
        },
        {
          "who": "Lena",
          "name": "Лена",
          "side": "left",
          "en": "It has been suggested that nothing will change this year, though.",
          "ru": "Хотя высказывалось мнение, что в этом году ничего не изменится.",
          "words": [
            [
              "it has been suggested",
              "высказывалось предположение"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Well, you can't believe everything that is said.",
          "ru": "Ну, нельзя верить всему, что говорят.",
          "words": [
            [
              "that is said",
              "что говорят (пассив в придаточном)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Глаголы сообщения и сигналы регистра. Повтори вслух и отметь, какие формальные, а какие разговорные.",
      "items": [
        {
          "en": "it is said that",
          "ru": "говорят, что",
          "ex": "It is said that he is very rich."
        },
        {
          "en": "it is believed that",
          "ru": "считают / полагают, что",
          "ex": "It is believed that the house is empty."
        },
        {
          "en": "it is reported that",
          "ru": "сообщают, что",
          "ex": "It is reported that no one was hurt."
        },
        {
          "en": "it is thought that",
          "ru": "думают, что",
          "ex": "It is thought that prices will fall."
        },
        {
          "en": "it is known that",
          "ru": "известно, что",
          "ex": "It is known that she speaks five languages."
        },
        {
          "en": "it is widely believed",
          "ru": "широко считается",
          "ex": "It is widely believed that sport reduces stress."
        },
        {
          "en": "it has been suggested",
          "ru": "высказывалось предположение",
          "ex": "It has been suggested that the law will change."
        },
        {
          "en": "apparently",
          "ru": "судя по всему, видимо",
          "ex": "Apparently, they left early."
        },
        {
          "en": "supposedly",
          "ru": "якобы, предположительно",
          "ex": "Supposedly, it is the best café in town."
        },
        {
          "en": "rumour",
          "ru": "слух",
          "ex": "There is a rumour that he will resign."
        },
        {
          "en": "claim",
          "ru": "утверждать; заявление",
          "ex": "It is claimed that the drug is safe."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай легенду, рассказанную безличным репортингом. Заметь, как меняется время внутри придаточного и как разговорное Apparently соседствует с формальным It is believed.",
      "title": "The lost city",
      "sentences": [
        "It is said that a great city once stood in this valley.",
        "According to old legends, it was ruled by a wise and wealthy queen.",
        "It is believed that the city was destroyed by a huge earthquake.",
        "For centuries, it was thought that the story was only a myth.",
        "Recently, however, ancient walls have been discovered under the sand.",
        "It is now reported that a team of scientists is exploring the site.",
        "It is widely believed that many treasures are still buried there.",
        "Apparently, the first findings will be shown in a museum next year."
      ],
      "translation": "Говорят, что когда-то в этой долине стоял великий город. По старым легендам, им правила мудрая и богатая королева. Считается, что город разрушило сильное землетрясение. Веками думали, что эта история — всего лишь миф. Однако недавно под песком обнаружили древние стены. Теперь сообщают, что команда учёных исследует это место. Широко считается, что многие сокровища всё ещё спрятаны там. Судя по всему, первые находки покажут в музее в следующем году."
    },
    "drag": {
      "intro": "Соедини английскую конструкцию с её русским значением.",
      "pairs": [
        [
          "It is said that",
          "говорят, что"
        ],
        [
          "It is believed that",
          "считается, что"
        ],
        [
          "It is reported that",
          "сообщают, что"
        ],
        [
          "Apparently",
          "судя по всему"
        ],
        [
          "I was told that",
          "мне сказали, что"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка дня. Пять вопросов — и безличный репортинг твой.",
      "items": [
        {
          "q": "«Говорят, что он богат» —",
          "opts": [
            "They say me he is rich",
            "It is said that he is rich",
            "Is said he is rich"
          ],
          "answer": 1,
          "explain": "безлично, с формальным It → <b>It is said that he is rich</b>."
        },
        {
          "q": "«Мне сказали, что офис закрыт» —",
          "opts": [
            "I was told that the office was closed",
            "They said me the office is closed",
            "It said me the office was closed"
          ],
          "answer": 0,
          "explain": "tell берёт лицо → <b>I was told that…</b>"
        },
        {
          "q": "It was believed that the earth ___ flat.",
          "opts": [
            "is",
            "was",
            "be"
          ],
          "answer": 1,
          "explain": "главное в прошлом → согласование времён: is → <b>was</b>."
        },
        {
          "q": "Что правильно?",
          "opts": [
            "It is said to be happen",
            "It is said that it happens",
            "It is said it happen"
          ],
          "answer": 1,
          "explain": "that + полное предложение → <b>It is said that it happens</b>."
        },
        {
          "q": "Разговорный эквивалент «it is said»:",
          "opts": [
            "Apparently / People say",
            "It is widely believed",
            "It has been suggested"
          ],
          "answer": 0,
          "explain": "В разговоре — <b>Apparently…</b> / People say…"
        }
      ]
    },
    "essay": {
      "intro": "Твоя очередь — перескажи слухи и общие мнения о своём городе, человеке или явлении.",
      "prompt": "Напиши 5–6 предложений о том, что «говорят», «считают» или «сообщают» про какое-то место, человека или тему. Используй It is said / believed / reported that… и хотя бы один разговорный вариант (Apparently…).",
      "hint": "Структуры: It is said that … ; It is widely believed that … ; It is reported that … ; It has been suggested that … ; Apparently, … .",
      "example": "My town is small, but a lot is said about it. It is believed that an old king once lived in the castle on the hill. It is said that a secret tunnel runs under the main square, although no one has ever found it. Recently it has been reported that the council wants to repair the old theatre. It is widely believed that this will bring more tourists. Apparently, the work will start next spring."
    },
    "picture": {
      "intro": "Опиши таинственное место (замок, развалины) через слухи и мнения.",
      "emoji": "🏰🌫️🗝️",
      "prompt": "Опиши картинку безличным репортингом: что говорят, во что верят, что сообщают про это место. Используй It is said / believed / reported that…",
      "hint": "Используй: It is said that the castle is very old; it is believed that a treasure is hidden inside; apparently nobody lives there now.",
      "example": "It is said that this old castle is over five hundred years old. It is believed that a powerful family once lived here. It is widely thought that a treasure is still hidden somewhere inside the walls. Apparently, strange lights are sometimes seen at night. It is reported that the town wants to turn it into a museum.",
      "img": "img/b2/day-16.jpg",
      "credit": "Фото: Oneterry AKA Terry Kearney · CC0 · <a href=\"https://www.flickr.com/photos/24490288@N04/54682114430\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "17": {
    "day": 17,
    "week": "03",
    "level": "B2",
    "themeRu": "Его считают…",
    "themeEn": "He is said to…",
    "intro": "Пустое <b>It</b> из вчерашнего дня («It is said that he is rich») прятало мысль в придаточном. Сегодня — вторая, более «английская» модель того же смысла: настоящего героя мы поднимаем в подлежащее. <b>It is said that he is rich</b> → <b>He is said to be rich.</b> Звучит компактнее и формальнее: «его считают богатым». Главный нюанс дня — <u>время</u>: <b>to be</b> для одновременности (богат сейчас) и <b>to have been</b> для предшествования (был богат раньше). И сразу обезвредим русскую ловушку: после «He is said» идёт <u>инфинитив</u>, а не «that he is». Разберёмся по слоям.",
    "introAudio": "Пустое It из вчерашнего дня, It is said that he is rich, прятало мысль в придаточном. Сегодня вторая, более английская модель того же смысла: настоящего героя мы поднимаем в подлежащее. It is said that he is rich превращается в He is said to be rich. Звучит компактнее и формальнее: его считают богатым. Главный нюанс дня — время: to be для одновременности, богат сейчас, и to have been для предшествования, был богат раньше. И сразу обезвредим русскую ловушку: после He is said идёт инфинитив, а не that he is. Разберёмся по слоям.",
    "goals": [
      "превращать It is said that he… в личную модель He is said to…",
      "выбирать to be / to do для одновременности и to have been / to have done для прошлого",
      "не ставить «that» после He is said — только инфинитив с to",
      "пользоваться is expected / supposed / known to для ожиданий, норм и фактов"
    ],
    "learned": [
      "Научился(лась) превращать It is said that he… в личную модель He is said to…",
      "Научился(лась) выбирать to be / to do для одновременности и to have been / to have done для прошлого",
      "Перестал(а) ставить «that» после He is said — только инфинитив с to",
      "Научился(лась) пользоваться is expected / supposed / known to для ожиданий, норм и фактов"
    ],
    "review": {
      "intro": "Сначала прогреем вчерашний безличный репортинг и перфектный инфинитив (to have done) — именно из них сегодня собирается личная модель. И не забудем «вечный» пассив.",
      "introAudio": "Сначала прогреем вчерашний безличный репортинг и перфектный инфинитив, to have done. Именно из них сегодня собирается личная модель. И не забудем вечный пассив.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни вчерашний безличный репортинг.",
          "q": "«Считается, что он богат» (с пустым It) —",
          "opts": [
            "They believe me he is rich",
            "It is believed that he is rich",
            "He is believed that rich"
          ],
          "answer": 1,
          "explain": "Безличная модель: <b>It is believed that he is rich</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> перфектный инфинитив — действие РАНЬШЕ момента речи.",
          "q": "«Кажется, он забыл» (раньше) — He seems ___.",
          "opts": [
            "to forget",
            "to have forgotten",
            "to forgetting"
          ],
          "answer": 1,
          "explain": "Действие раньше → перфектный инфинитив: <b>to have forgotten</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> «вечный» пассив с прошлого дня.",
          "q": "«Этот замок построили в 1500 году» —",
          "opts": [
            "This castle built in 1500",
            "This castle was built in 1500",
            "This castle is build in 1500"
          ],
          "answer": 1,
          "explain": "Прошедший пассив: was + 3-я форма → <b>was built</b>."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · личный репортинг",
        "title": "Из «It is said that he…» в «He is said to…»",
        "paras": [
          "Вчера мысль пряталась за пустым It. Сегодня — вторая модель того же смысла: настоящего героя мы поднимаем в подлежащее. <b>It is said that he is rich</b> → <b>He is said to be rich.</b> Смысл тот же, но звучит компактнее и формальнее: «его считают богатым».",
          "Механизм: подлежащее придаточного (<b>he</b>) становится подлежащим всего предложения; глагол сообщения остаётся в пассиве (<b>is said / is believed / is thought</b>); а сказуемое превращается в <b>инфинитив с to</b>: is → <b>to be</b>, lives → <b>to live</b>.",
          "Работает с теми же глаголами: <b>is said / believed / thought / known / reported / expected / supposed to…</b> <b>She is believed to live abroad.</b> = Считают, что она живёт за границей."
        ],
        "audio": "Вчера мысль пряталась за пустым It. Сегодня вторая модель того же смысла: настоящего героя поднимаем в подлежащее. It is said that he is rich превращается в He is said to be rich. Механизм: подлежащее придаточного, he, становится подлежащим всего предложения; глагол сообщения остаётся в пассиве, is said, is believed; а сказуемое превращается в инфинитив с to: is становится to be, lives становится to live.",
        "table": {
          "rows": [
            [
              "It is said that he is rich.",
              "→ He is said to be rich."
            ],
            [
              "It is believed that she lives here.",
              "→ She is believed to live here."
            ],
            [
              "It is thought that they are happy.",
              "→ They are thought to be happy."
            ],
            [
              "It is expected that he will win.",
              "→ He is expected to win."
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Считают, что он очень умён.",
            "en": "He <b>is believed to be</b> very clever.",
            "gloss": "is believed + to be",
            "say": "He is believed to be very clever."
          },
          {
            "ru": "Говорят, что она знает пять языков.",
            "en": "She <b>is said to know</b> five languages.",
            "gloss": "is said + to know",
            "say": "She is said to know five languages."
          },
          {
            "ru": "Ожидается, что цены вырастут.",
            "en": "Prices <b>are expected to rise</b>.",
            "gloss": "are expected + to rise",
            "say": "Prices are expected to rise."
          }
        ],
        "mistakes": [
          {
            "wrong": "He is said that he is rich",
            "right": "He is said <b>to be</b> rich",
            "why": "после He is said — инфинитив, НЕ «that he is»"
          },
          {
            "wrong": "She is believed lives abroad",
            "right": "She is believed <b>to live</b> abroad",
            "why": "нужен инфинитив с to, а не личная форма глагола"
          }
        ],
        "mnemonic": "🆙 Подними героя в начало: It is said that HE… → HE is said TO…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> личная модель с подлежащим He.",
            "q": "«Считают, что он богат» (личная модель) —",
            "opts": [
              "He is said that he is rich",
              "He is said to be rich",
              "He is said to is rich"
            ],
            "answer": 1,
            "explain": "He + is said + to be → <b>He is said to be rich</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери личный репортинг.",
            "q": "Собери: «Считают, что она живёт за границей»",
            "want": "She is believed to live abroad",
            "answer": "She is believed to live abroad"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши личную модель с expected.",
            "q": "Ожидается, что цены вырастут.",
            "accept": [
              "prices are expected to rise",
              "prices are expected to go up",
              "prices are expected to increase"
            ],
            "placeholder": "Prices are expected to ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · сейчас vs раньше",
        "title": "<em>to be</em> (сейчас) vs <em>to have been</em> (раньше)",
        "paras": [
          "Главный выбор темы — <u>когда</u> происходит событие относительно момента сообщения. Если одновременно («считают, что он богат <u>сейчас</u>») — простой инфинитив: <b>He is said <u>to be</u> rich.</b>",
          "Если событие <u>раньше</u>, чем о нём сообщают («считают, что он <u>был</u> богат / разбогател раньше») — перфектный инфинитив <b>to have + 3-я форма</b>: <b>He is said <u>to have been</u> rich.</b> Это тот самый перфектный инфинитив, что мы грели в обзоре.",
          "Сравни на одной паре: <b>She is thought to live in Rome</b> (живёт сейчас) ↔ <b>She is thought to have lived in Rome</b> (жила когда-то раньше). Один шаг назад во времени = <b>to have done</b>."
        ],
        "audio": "Главный выбор темы — когда происходит событие относительно момента сообщения. Если одновременно, считают, что он богат сейчас — простой инфинитив: He is said to be rich. Если событие раньше, чем о нём сообщают — перфектный инфинитив, to have плюс третья форма: He is said to have been rich. Сравни: She is thought to live in Rome, живёт сейчас, против She is thought to have lived in Rome, жила раньше.",
        "table": {
          "rows": [
            [
              "He is said to be rich.",
              "богат сейчас (одновременно)"
            ],
            [
              "He is said to have been rich.",
              "был богат раньше"
            ],
            [
              "She is believed to live there.",
              "живёт сейчас"
            ],
            [
              "She is believed to have lived there.",
              "жила раньше"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Считают, что он сейчас живёт в Лондоне.",
            "en": "He is believed <b>to live</b> in London.",
            "gloss": "одновременность → to + инфинитив",
            "say": "He is believed to live in London."
          },
          {
            "ru": "Считают, что он раньше жил в Лондоне.",
            "en": "He is believed <b>to have lived</b> in London.",
            "gloss": "раньше → to have + 3-я форма",
            "say": "He is believed to have lived in London."
          },
          {
            "ru": "Сообщают, что самолёт разбился в горах.",
            "en": "The plane is reported <b>to have crashed</b> in the mountains.",
            "gloss": "событие раньше сообщения",
            "say": "The plane is reported to have crashed in the mountains."
          }
        ],
        "mistakes": [
          {
            "wrong": "He is said to was rich",
            "right": "He is said <b>to have been</b> rich",
            "why": "прошлое в этой модели → to have + 3-я форма, не «to was»"
          },
          {
            "wrong": "She is thought to have live there now",
            "right": "She is thought <b>to live</b> there now",
            "why": "«сейчас» → простой инфинитив to live"
          }
        ],
        "mnemonic": "⏪ Сейчас → to be / to do. Раньше → to have been / to have done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> событие раньше момента речи.",
            "q": "«Считают, что он раньше был учителем» —",
            "opts": [
              "He is said to be a teacher",
              "He is said to have been a teacher",
              "He is said to was a teacher"
            ],
            "answer": 1,
            "explain": "прошлое → to have been: <b>He is said to have been a teacher</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> событие сейчас, одновременно.",
            "q": "«Считают, что она сейчас живёт в Париже» —",
            "opts": [
              "She is believed to live in Paris",
              "She is believed to have lived in Paris"
            ],
            "answer": 0,
            "explain": "одновременность → простой инфинитив: <b>to live</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши модель с перфектным инфинитивом. crash → crashed.",
            "q": "Сообщают, что самолёт разбился.",
            "accept": [
              "the plane is reported to have crashed",
              "the plane is said to have crashed"
            ],
            "placeholder": "The plane is reported to have ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "После «He is said» — инфинитив, не «that»",
        "paras": [
          "Самая частая ошибка — смешать вчерашнюю и сегодняшнюю модели. Если подлежащее <b>It</b>, дальше идёт <b>that + предложение</b> (It is said that he is rich). Если подлежащее — сам герой (<b>He</b>), дальше идёт <b>только инфинитив</b>: <b>He is said to be rich.</b> Нельзя «<b>He is said that he is rich</b>» ✗ — это склейка двух конструкций.",
          "Вторая половина ловушки — время. По-русски «о нём говорят, что он <u>был</u> знаменит» — прошлое прячется в придаточном. В личной модели придаточного нет, поэтому прошлое выражается <u>только</u> формой инфинитива: <b>to have been</b>. «He is said <u>to was</u>» ✗.",
          "Простой тест: видишь <b>He / She / They</b> в начале — ищи <b>to</b>, а не <b>that</b>. Прошлое — через <b>to have done</b>, а не через личную форму глагола."
        ],
        "audio": "Самая частая ошибка — смешать вчерашнюю и сегодняшнюю модели. Если подлежащее It, дальше that плюс предложение. Если подлежащее сам герой, He, дальше только инфинитив: He is said to be rich. Нельзя He is said that he is rich. Вторая половина ловушки — время: прошлое выражается только формой инфинитива, to have been. Тест: видишь He, She, They — ищи to, а не that.",
        "table": {
          "rows": [
            [
              "✓ It is said that he was rich.",
              "модель с It → that"
            ],
            [
              "✓ He is said to have been rich.",
              "модель с He → to have been"
            ],
            [
              "✗ He is said that he is rich.",
              "нельзя смешивать модели"
            ],
            [
              "✗ He is said to was rich.",
              "прошлое только через to have been"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Говорят, что он гений.",
            "en": "He <b>is said to be</b> a genius.",
            "gloss": "He → to be",
            "say": "He is said to be a genius."
          },
          {
            "ru": "Говорят, что он был гением.",
            "en": "He <b>is said to have been</b> a genius.",
            "gloss": "прошлое → to have been",
            "say": "He is said to have been a genius."
          },
          {
            "ru": "Считается, что они потеряли все деньги.",
            "en": "They <b>are believed to have lost</b> all their money.",
            "gloss": "to have lost",
            "say": "They are believed to have lost all their money."
          }
        ],
        "mistakes": [
          {
            "wrong": "He is believed that he lives abroad",
            "right": "He is believed <b>to live</b> abroad",
            "why": "с подлежащим He — инфинитив, не that"
          },
          {
            "wrong": "They are said to were happy",
            "right": "They are said <b>to have been</b> happy",
            "why": "прошлое → to have been, не «to were»"
          },
          {
            "wrong": "He is said to be rich in the past",
            "right": "He is said <b>to have been</b> rich in the past",
            "why": "«в прошлом» → перфектный инфинитив"
          }
        ],
        "mnemonic": "🚦 He / She / They → TO (+ have done для прошлого). It → THAT.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> после He is said — инфинитив или that?",
            "q": "Что правильно?",
            "opts": [
              "He is said that he is rich",
              "He is said to be rich"
            ],
            "answer": 1,
            "explain": "С подлежащим He — только инфинитив: <b>to be</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> прошлое в личной модели.",
            "q": "«Говорят, что он был знаменит» (модель с He) —",
            "opts": [
              "He is said to be famous",
              "He is said to have been famous",
              "He is said that he was famous"
            ],
            "answer": 1,
            "explain": "прошлое → to have been: <b>He is said to have been famous</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши модель с to have + 3-я форма. lose → lost.",
            "q": "Считается, что они потеряли все деньги.",
            "accept": [
              "they are believed to have lost all their money",
              "they are believed to have lost all the money"
            ],
            "placeholder": "They are believed to have ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · больше глаголов и форм",
        "title": "<em>expected, supposed, thought</em> + длительный инфинитив",
        "paras": [
          "Личная модель особенно живёт с глаголами ожидания и предположения: <b>is expected to</b> (ожидается, что), <b>is supposed to</b> (предполагается / должен по идее), <b>is thought to</b>, <b>is known to</b>. <b>The minister is expected to resign.</b> = Ожидается, что министр уйдёт в отставку.",
          "Чтобы показать <u>процесс</u>, бери длительный инфинитив <b>to be + -ing</b>: <b>He is thought to be hiding abroad.</b> = Считают, что он скрывается за границей прямо сейчас.",
          "Отдельно запомни <b>be supposed to</b> — у него два смысла: «по идее так и есть / говорят, что» (<i>The film is supposed to be brilliant</i>) и «полагается, ожидается по правилам» (<i>You are supposed to wear a helmet</i>)."
        ],
        "audio": "Личная модель особенно живёт с глаголами ожидания: is expected to, ожидается, что; is supposed to, по идее или полагается; is thought to; is known to. The minister is expected to resign. Чтобы показать процесс, бери длительный инфинитив, to be плюс -ing: He is thought to be hiding abroad. И запомни be supposed to: по идее так и есть, или полагается по правилам.",
        "table": {
          "rows": [
            [
              "is expected to + inf",
              "ожидается, что…"
            ],
            [
              "is supposed to + inf",
              "по идее / полагается…"
            ],
            [
              "is thought to be doing",
              "считают, что (процесс)…"
            ],
            [
              "is known to have done",
              "известно, что (раньше)…"
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Ожидается, что команда выиграет.",
            "en": "The team <b>is expected to win</b>.",
            "gloss": "is expected to",
            "say": "The team is expected to win."
          },
          {
            "ru": "Считают, что он скрывается за границей.",
            "en": "He <b>is thought to be hiding</b> abroad.",
            "gloss": "длительный инфинитив (процесс)",
            "say": "He is thought to be hiding abroad."
          },
          {
            "ru": "Этот ресторан, говорят, отличный.",
            "en": "This restaurant <b>is supposed to be</b> excellent.",
            "gloss": "be supposed to = по идее",
            "say": "This restaurant is supposed to be excellent."
          },
          {
            "ru": "Известно, что он помог многим.",
            "en": "He <b>is known to have helped</b> many people.",
            "gloss": "to have helped",
            "say": "He is known to have helped many people."
          }
        ],
        "mistakes": [
          {
            "wrong": "You are supposed wear a helmet",
            "right": "You are supposed <b>to</b> wear a helmet",
            "why": "be supposed TO + инфинитив"
          },
          {
            "wrong": "He is expected win",
            "right": "He is expected <b>to</b> win",
            "why": "нужен to перед инфинитивом"
          }
        ],
        "mnemonic": "🎯 Ожидание / норма: is expected / supposed TO… · процесс: to be doing · прошлое: to have done.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери модель с expected.",
            "q": "«Ожидается, что министр уйдёт в отставку» —",
            "opts": [
              "The minister is expected resign",
              "The minister is expected to resign",
              "The minister is expected that resigns"
            ],
            "answer": 1,
            "explain": "is expected + to + инфинитив → <b>to resign</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери модель с длительным инфинитивом.",
            "q": "Собери: «Считают, что он скрывается за границей»",
            "want": "He is thought to be hiding abroad",
            "answer": "He is thought to be hiding abroad"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши модель с supposed.",
            "q": "Этот фильм, говорят, отличный.",
            "accept": [
              "this film is supposed to be brilliant",
              "the film is supposed to be brilliant",
              "this film is supposed to be excellent"
            ],
            "placeholder": "This film is supposed to be ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Нина и Павел обсуждают нового директора. Слушай, как личная модель передаёт слухи: что он за человек сейчас, чем занимался раньше, чего от него ждут. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Nina",
          "name": "Нина",
          "side": "left",
          "en": "Have you heard about the new director? He is said to be incredibly strict.",
          "ru": "Слышал про нового директора? Говорят, он невероятно строгий.",
          "words": [
            [
              "he is said to be",
              "говорят, что он (личная модель)"
            ],
            [
              "strict",
              "строгий"
            ]
          ]
        },
        {
          "who": "Pavel",
          "name": "Павел",
          "side": "right",
          "en": "Really? He is also believed to have run three big companies before.",
          "ru": "Правда? А ещё считают, что он раньше руководил тремя крупными компаниями.",
          "words": [
            [
              "is believed to have run",
              "считают, что руководил (прошлое → to have done)"
            ]
          ]
        },
        {
          "who": "Nina",
          "name": "Нина",
          "side": "left",
          "en": "Apparently he is expected to make a lot of changes.",
          "ru": "Судя по всему, ожидается, что он многое изменит.",
          "words": [
            [
              "is expected to make",
              "ожидается, что сделает"
            ]
          ]
        },
        {
          "who": "Pavel",
          "name": "Павел",
          "side": "right",
          "en": "Some people are said to be looking for new jobs already.",
          "ru": "Говорят, некоторые уже ищут новую работу.",
          "words": [
            [
              "are said to be looking",
              "говорят, что ищут (процесс)"
            ]
          ]
        },
        {
          "who": "Nina",
          "name": "Нина",
          "side": "left",
          "en": "Well, he is supposed to be fair, at least.",
          "ru": "Ну, по идее он справедливый, по крайней мере.",
          "words": [
            [
              "is supposed to be",
              "по идее, должен быть"
            ]
          ]
        },
        {
          "who": "Pavel",
          "name": "Павел",
          "side": "right",
          "en": "Let's hope so. Nothing is known for certain yet.",
          "ru": "Будем надеяться. Пока ничего точно не известно.",
          "words": [
            [
              "is known",
              "известно (пассив)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Глаголы личного репортинга и формы инфинитива. Повтори вслух и отметь, где одновременность, а где прошлое.",
      "items": [
        {
          "en": "be said to",
          "ru": "про кого говорят, что",
          "ex": "He is said to be very rich."
        },
        {
          "en": "be believed to",
          "ru": "про кого считают, что",
          "ex": "She is believed to live abroad."
        },
        {
          "en": "be thought to",
          "ru": "про кого думают, что",
          "ex": "They are thought to be happy."
        },
        {
          "en": "be known to",
          "ru": "известно, что (кто-то)…",
          "ex": "He is known to have helped many people."
        },
        {
          "en": "be expected to",
          "ru": "ожидается, что",
          "ex": "Prices are expected to rise."
        },
        {
          "en": "be supposed to",
          "ru": "по идее / полагается",
          "ex": "You are supposed to wear a seatbelt."
        },
        {
          "en": "be reported to",
          "ru": "сообщается, что (кто-то)…",
          "ex": "The plane is reported to have crashed."
        },
        {
          "en": "to have been",
          "ru": "что был (раньше)",
          "ex": "He is said to have been a spy."
        },
        {
          "en": "resign",
          "ru": "уйти в отставку",
          "ex": "The minister is expected to resign."
        },
        {
          "en": "genius",
          "ru": "гений",
          "ex": "She is thought to be a genius."
        },
        {
          "en": "reputation",
          "ru": "репутация",
          "ex": "He has a reputation for honesty."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай рассказ о загадочном художнике. Заметь, как личная модель переключается между «сейчас» (to be) и «раньше» (to have been / to have done).",
      "title": "The mysterious painter",
      "sentences": [
        "Little is known about the painter Elias Vance.",
        "He is believed to have been born in a small village around 1700.",
        "He is said to have travelled across Europe for many years.",
        "His paintings are thought to be hidden in private collections.",
        "One work is reported to be worth millions today.",
        "Vance is also believed to have used a secret technique.",
        "He is supposed to have died young, but no record has ever been found.",
        "Even now, he is considered to be one of the great unsolved mysteries of art."
      ],
      "translation": "О художнике Элиасе Вэнсе известно мало. Считается, что он родился в маленькой деревне около 1700 года. Говорят, что он много лет странствовал по Европе. Полагают, что его картины спрятаны в частных коллекциях. Сообщают, что одна работа сегодня стоит миллионы. Также считается, что Вэнс использовал тайную технику. Предполагается, что он умер молодым, но никаких записей так и не нашли. Даже сейчас его считают одной из великих неразгаданных загадок искусства."
    },
    "drag": {
      "intro": "Соедини английскую модель с её значением и временем.",
      "pairs": [
        [
          "He is said to be rich.",
          "говорят, он богат (сейчас)"
        ],
        [
          "He is said to have been rich.",
          "говорят, он был богат (раньше)"
        ],
        [
          "She is expected to win.",
          "ожидается, что она выиграет"
        ],
        [
          "He is thought to be hiding.",
          "думают, он скрывается (процесс)"
        ],
        [
          "They are known to have left.",
          "известно, что они уехали"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка дня. Пять вопросов — и личный репортинг твой.",
      "items": [
        {
          "q": "«Считают, что он богат» —",
          "opts": [
            "He is said that he is rich",
            "He is said to be rich",
            "He is said to is rich"
          ],
          "answer": 1,
          "explain": "He + is said + to be → <b>He is said to be rich</b>."
        },
        {
          "q": "«Считают, что он раньше был учителем» —",
          "opts": [
            "He is believed to be a teacher",
            "He is believed to have been a teacher",
            "He is believed that he was a teacher"
          ],
          "answer": 1,
          "explain": "прошлое → to have been: <b>to have been a teacher</b>."
        },
        {
          "q": "«Ожидается, что она выиграет» —",
          "opts": [
            "She is expected to win",
            "She is expected win",
            "She is expected that wins"
          ],
          "answer": 0,
          "explain": "is expected + to + инфинитив → <b>to win</b>."
        },
        {
          "q": "«Думают, что он скрывается за границей (сейчас, процесс)» —",
          "opts": [
            "He is thought to hide abroad",
            "He is thought to be hiding abroad",
            "He is thought to have hidden abroad"
          ],
          "answer": 1,
          "explain": "процесс сейчас → длительный инфинитив: <b>to be hiding</b>."
        },
        {
          "q": "После «He is said» идёт…",
          "opts": [
            "that + предложение",
            "инфинитив с to",
            "-ing форма"
          ],
          "answer": 1,
          "explain": "С подлежащим-героем — только <b>инфинитив с to</b>."
        }
      ]
    },
    "essay": {
      "intro": "Твоя очередь — расскажи о знаменитом или загадочном человеке через личный репортинг.",
      "prompt": "Напиши 5–6 предложений о реальном или выдуманном человеке: что про него говорят, считают, ожидают. Используй He/She is said / believed / expected to… и хотя бы один раз прошлое (to have done).",
      "hint": "Структуры: He is said to be … ; She is believed to live … ; He is thought to have … ; They are expected to … ; He is known to have … .",
      "example": "There is an old man who lives at the end of our street, and everyone has a story about him. He is said to be over ninety, but he still walks for an hour every day. He is believed to have been a famous musician in his youth. He is also thought to have played in concert halls all over the world. He is also known to have given a lot of money to the local school. Apparently, he is expected to publish his memoirs next year."
    },
    "picture": {
      "intro": "Опиши загадочного человека на портрете через слухи и предположения.",
      "emoji": "🖼️🕵️🎩",
      "prompt": "Опиши человека на картинке через личный репортинг: что про него говорят и считают (сейчас и раньше). Используй He/She is said / believed / thought to…",
      "hint": "Используй: He is said to be very wealthy; he is believed to have travelled a lot; he is thought to be hiding a secret.",
      "example": "The man in the portrait is said to be a powerful merchant. He is believed to have travelled to many distant countries. He is also thought to have made a huge fortune in trade. He is also said to be hiding a dark family secret. Even today, he is considered to be one of the most mysterious figures of his time.",
      "img": "img/b2/day-17.jpg",
      "credit": "Фото: Finnish National Gallery · CC0 · <a href=\"https://www.flickr.com/photos/127104863@N05/29178835570\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "18": {
    "day": 18,
    "week": "03",
    "level": "B2",
    "themeRu": "Сделал у мастера",
    "themeEn": "Causative: have it done",
    "intro": "Тебя постриг парикмахер — а по-английски как это сказать? Сегодня — короткая, но устойчивейшая русская ловушка всего уровня. По-русски мы говорим активно — «я постригся», «мне постригли», «машину починили», — будто действие сделали мы сами. А по-английски есть специальная конструкция <b>каузатив</b>: <b>have / get + объект + 3-я форма</b>. <b>I had my hair cut.</b> = мне подстригли (я заказал услугу). Сравни: <b>I cut my hair</b> (сам, ножницами) ≠ <b>I had my hair cut</b> (в салоне). Сегодня закрепим это намертво. Поехали.",
    "introAudio": "Тебя постриг парикмахер — а по-английски как это сказать? Сегодня короткая, но устойчивейшая русская ловушка всего уровня. По-русски мы говорим активно — я постригся, мне постригли, машину починили, — будто действие сделали мы сами. А по-английски есть специальная конструкция каузатив: have или get плюс объект плюс третья форма. I had my hair cut — мне подстригли, я заказал услугу. Сравни: I cut my hair, сам, ножницами, против I had my hair cut, в салоне. Сегодня закрепим это намертво. Поехали.",
    "goals": [
      "строить каузатив: have / get + объект + 3-я форма (услугу выполнил другой)",
      "чувствовать разницу: I cut my hair (сам) vs I had my hair cut (в салоне)",
      "переводить русское «мне сделали X» как I had / got X done, без they / me",
      "пользоваться get-вариантом, «несчастным» каузативом (had my phone stolen) и get someone to do"
    ],
    "learned": [
      "Научился(лась) строить каузатив: have / get + объект + 3-я форма (услугу выполнил другой)",
      "Почувствовал(а) разницу: I cut my hair (сам) vs I had my hair cut (в салоне)",
      "Научился(лась) переводить русское «мне сделали X» как I had / got X done, без they / me",
      "Научился(лась) пользоваться get-вариантом, «несчастным» каузативом (had my phone stolen) и get someone to do"
    ],
    "review": {
      "intro": "Сначала прогреем «вечный» пассив (вчера и позавчера), третью форму и have в значении обладания — из этих кирпичей сегодня собирается каузатив.",
      "introAudio": "Сначала прогреем вечный пассив, третью форму и have в значении обладания — из этих кирпичей сегодня собирается каузатив.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни пассив с прошлых дней.",
          "q": "«Машину уже починили» —",
          "opts": [
            "The car already repaired",
            "The car has been repaired",
            "The car has repaired"
          ],
          "answer": 1,
          "explain": "Пассив-перфект: has been + 3-я форма → <b>has been repaired</b>."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши третью форму — она же стоит в каузативе.",
          "q": "Третья форма глагола cut (резать/стричь)?",
          "accept": [
            "cut"
          ],
          "placeholder": "cut → cut → ..."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> have в значении «иметь / обладать».",
          "q": "«У меня есть машина» —",
          "opts": [
            "I have a car",
            "I am a car",
            "I have got being a car"
          ],
          "answer": 0,
          "explain": "have / have got = обладание: <b>I have a car</b>."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · каузатив",
        "title": "Услугу сделал другой — <em>have + объект + 3-я форма</em>",
        "paras": [
          "Когда работу делаешь не ты сам, а кто-то для тебя (мастер, парикмахер, механик), английский берёт <b>каузатив</b>: <b>have + объект + 3-я форма</b> глагола. <b>I had my hair cut.</b> = Я подстригся (мне подстригли в салоне). <b>We had the house painted.</b> = Нам покрасили дом.",
          "Порядок жёсткий: сначала <u>что</u> (объект), потом <u>3-я форма</u> того, что с ним сделали: have → <b>my car</b> → <b>repaired</b>. Это тот же past participle, что в пассиве — смысл «объект обработали», но фокус на том, что <u>ты это организовал</u>.",
          "Время несёт <b>have</b>, а 3-я форма стоит неподвижно: <b>I have my car serviced</b> every year (регулярно), <b>I had it serviced</b> last week (прош.), <b>I'm having it serviced</b> now (сейчас), <b>I'll have it serviced</b> soon (будущее)."
        ],
        "audio": "Когда работу делаешь не ты сам, а кто-то для тебя — мастер, парикмахер, механик — английский берёт каузатив: have плюс объект плюс третья форма. I had my hair cut. We had the house painted. Порядок жёсткий: сначала объект, потом третья форма. Время несёт have: I have my car serviced every year, I had it serviced last week, I'm having it serviced now, I'll have it serviced soon.",
        "table": {
          "rows": [
            [
              "have + объект + 3-я форма",
              "заказать услугу у другого"
            ],
            [
              "I have my hair cut.",
              "мне стригут (регулярно)"
            ],
            [
              "I had my hair cut.",
              "мне подстригли (прош.)"
            ],
            [
              "I'm having my photo taken.",
              "мне делают фото (сейчас)"
            ],
            [
              "I'll have the car washed.",
              "машину помоют (будущее)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я покрасил волосы (в салоне).",
            "en": "I <b>had my hair dyed</b>.",
            "gloss": "have + hair + dyed",
            "say": "I had my hair dyed."
          },
          {
            "ru": "Нам ремонтируют крышу.",
            "en": "We <b>are having the roof repaired</b>.",
            "gloss": "процесс сейчас",
            "say": "We are having the roof repaired."
          },
          {
            "ru": "Я делаю техобслуживание машины каждый год.",
            "en": "I <b>have my car serviced</b> every year.",
            "gloss": "регулярно",
            "say": "I have my car serviced every year."
          },
          {
            "ru": "Завтра мне вырвут зуб.",
            "en": "I'll <b>have a tooth taken out</b> tomorrow.",
            "gloss": "будущее",
            "say": "I'll have a tooth taken out tomorrow."
          }
        ],
        "mistakes": [
          {
            "wrong": "I had cut my hair (в салоне)",
            "right": "I <b>had my hair cut</b>",
            "why": "каузатив: have + ОБЪЕКТ + 3-я форма; объект стоит между ними"
          },
          {
            "wrong": "We had painted the house (нам покрасили)",
            "right": "We <b>had the house painted</b>",
            "why": "«had painted» = Past Perfect (сами); услуга → have + house + painted"
          }
        ],
        "mnemonic": "🛠️ Заказал услугу: have + ЧТО + 3-я форма. I had my hair cut.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> объект стоит между have и 3-й формой.",
            "q": "«Мне починили часы» —",
            "opts": [
              "I had repaired my watch",
              "I had my watch repaired",
              "I had my watch repair"
            ],
            "answer": 1,
            "explain": "have + объект (my watch) + 3-я форма (repaired)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери каузатив в прошедшем.",
            "q": "Собери: «Нам покрасили дом»",
            "want": "We had the house painted",
            "answer": "We had the house painted"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши каузатив (регулярно). service → serviced.",
            "q": "Я делаю техобслуживание машины каждый год.",
            "accept": [
              "i have my car serviced every year",
              "i have my car serviced each year"
            ],
            "placeholder": "I have my car ... every year"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · сам vs у мастера",
        "title": "<em>I cut my hair</em> (сам) vs <em>I had my hair cut</em> (салон)",
        "paras": [
          "Вот сердце темы. Сравни две фразы. <b>I cut my hair.</b> — я сам взял ножницы и подстригся. <b>I had my hair cut.</b> — я пришёл в салон, и меня подстригли. Глагол один (cut), а смысл противоположный по <u>исполнителю</u>.",
          "Простой глагол (<b>I painted the house</b>) означает «я сделал это <u>своими руками</u>». Каузатив (<b>I had the house painted</b>) означает «я <u>организовал</u>, чтобы это сделал кто-то другой». В быту услуги мы заказываем куда чаще, чем делаем сами, — поэтому каузатив на B2 звучит на каждом шагу.",
          "Спроси себя: <u>кто реально держал инструмент?</u> Я сам → обычный глагол (I fixed it). Кто-то для меня → <b>have it done</b> (I had it fixed)."
        ],
        "audio": "Вот сердце темы. I cut my hair — я сам взял ножницы и подстригся. I had my hair cut — я пришёл в салон, и меня подстригли. Глагол один, а смысл противоположный по исполнителю. Простой глагол — я сделал своими руками: I painted the house. Каузатив — я организовал, чтобы сделал другой: I had the house painted. Спроси себя: кто реально держал инструмент? Я сам — обычный глагол. Кто-то для меня — have it done.",
        "table": {
          "rows": [
            [
              "I cut my hair.",
              "я сам подстригся"
            ],
            [
              "I had my hair cut.",
              "меня подстригли (салон)"
            ],
            [
              "I repaired my car.",
              "я сам починил"
            ],
            [
              "I had my car repaired.",
              "мне починили"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я сам покрасил забор.",
            "en": "I <b>painted</b> the fence myself.",
            "gloss": "сам → обычный глагол",
            "say": "I painted the fence myself."
          },
          {
            "ru": "Мне покрасили забор.",
            "en": "I <b>had the fence painted</b>.",
            "gloss": "услуга → каузатив",
            "say": "I had the fence painted."
          },
          {
            "ru": "Она сама сшила платье.",
            "en": "She <b>made</b> the dress herself.",
            "gloss": "сама",
            "say": "She made the dress herself."
          },
          {
            "ru": "Ей сшили платье на заказ.",
            "en": "She <b>had the dress made</b>.",
            "gloss": "заказала пошив",
            "say": "She had the dress made."
          }
        ],
        "mistakes": [
          {
            "wrong": "I cut my hair yesterday (имея в виду салон)",
            "right": "I <b>had my hair cut</b> yesterday",
            "why": "в салоне стригут тебя → каузатив; иначе смысл «сам себя постриг»"
          },
          {
            "wrong": "I had my hair cut myself",
            "right": "I <b>cut</b> my hair myself",
            "why": "сам — обычный глагол, без have-конструкции"
          }
        ],
        "mnemonic": "✂️ Кто держал ножницы? Я сам → I cut it. Мастер → I had it cut.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> ты был в салоне, стриг мастер.",
            "q": "Ты был в салоне. Как сказать «я подстригся»?",
            "opts": [
              "I cut my hair",
              "I had my hair cut"
            ],
            "answer": 1,
            "explain": "Стриг мастер → каузатив: <b>I had my hair cut</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> ты сам взял инструмент.",
            "q": "Ты сам починил кран. Как сказать?",
            "opts": [
              "I fixed the tap",
              "I had the tap fixed"
            ],
            "answer": 0,
            "explain": "Сделал сам → обычный глагол: <b>I fixed the tap</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши каузатив. paint → painted.",
            "q": "Мне покрасили дом.",
            "accept": [
              "i had the house painted",
              "i had my house painted"
            ],
            "placeholder": "I had the house ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "«Мне постригли» — это сделал кто-то другой",
        "paras": [
          "По-русски про услугу мы говорим активно и безлично: «<u>мне</u> постригли», «<u>мне</u> вырвали зуб», «<u>машину</u> починили», «я постригся». Исполнителя нет, и легко машинально сказать по-английски «I cut my hair» или «they cut my hair». Англичанин же фиксирует, <u>что услугу заказал ты</u>: <b>I had my hair cut.</b>",
          "Поэтому русское «мне сделали X» почти всегда = <b>I had / got + X + 3-я форма</b>. «Мне вырвали зуб» → <b>I had a tooth taken out.</b> «Я проверил зрение (у врача)» → <b>I had my eyes tested.</b> Никаких «they» и «me» — только have/get + объект + 3-я форма.",
          "И помни: время показывает <b>have</b>, а 3-я форма стоит неподвижно: <i>I had it done</i> (вчера), <i>I have it done</i> (регулярно), <i>I'm having it done</i> (сейчас), <i>I'll have it done</i> (потом), <i>I've just had it done</i> (только что)."
        ],
        "audio": "По-русски про услугу мы говорим активно и безлично: мне постригли, мне вырвали зуб, машину починили, я постригся. Исполнителя нет, и легко сказать I cut my hair или they cut my hair. Англичанин же фиксирует, что услугу заказал ты: I had my hair cut. Русское мне сделали X почти всегда — I had или got X плюс третья форма. Мне вырвали зуб — I had a tooth taken out. Никаких they и me.",
        "table": {
          "rows": [
            [
              "Мне постригли",
              "I had my hair cut."
            ],
            [
              "Мне вырвали зуб",
              "I had a tooth taken out."
            ],
            [
              "Я проверил зрение (у врача)",
              "I had my eyes tested."
            ],
            [
              "Мне доставят диван",
              "I'll have the sofa delivered."
            ]
          ],
          "star": -1
        },
        "examples": [
          {
            "ru": "Мне вырвали зуб на прошлой неделе.",
            "en": "I <b>had a tooth taken out</b> last week.",
            "gloss": "«мне вырвали» → had + 3-я форма",
            "say": "I had a tooth taken out last week."
          },
          {
            "ru": "Мне как раз чинят машину (в сервисе).",
            "en": "I'm <b>having my car repaired</b>.",
            "gloss": "процесс сейчас",
            "say": "I'm having my car repaired."
          },
          {
            "ru": "Я только что проверил зрение.",
            "en": "I've <b>just had my eyes tested</b>.",
            "gloss": "перфект каузатива",
            "say": "I've just had my eyes tested."
          }
        ],
        "mistakes": [
          {
            "wrong": "They cut me my hair",
            "right": "I <b>had my hair cut</b>",
            "why": "рус. безличное «мне постригли» → каузатив, без they / me"
          },
          {
            "wrong": "I will cut my tooth tomorrow (у врача)",
            "right": "I'll <b>have a tooth taken out</b> tomorrow",
            "why": "услугу делает врач → have + 3-я форма"
          },
          {
            "wrong": "I have cut my hair yesterday",
            "right": "I <b>had my hair cut</b> yesterday",
            "why": "прошлая услуга → had (не «have cut»)"
          }
        ],
        "mnemonic": "💡 «Мне сделали X» = I had / got X + 3-я форма. Время несёт have, не 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> услугу сделал врач, не ты.",
            "q": "«Мне вырвали зуб» —",
            "opts": [
              "They pulled me a tooth",
              "I had a tooth taken out",
              "I taken out a tooth"
            ],
            "answer": 1,
            "explain": "каузатив: had + a tooth + taken out."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> процесс сейчас, в салоне.",
            "q": "«Мне как раз делают причёску (в салоне)» —",
            "opts": [
              "I cut my hair now",
              "I'm having my hair done",
              "I have cut my hair now"
            ],
            "answer": 1,
            "explain": "процесс сейчас → I'm having my hair done."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши каузатив. test → tested.",
            "q": "Я проверил зрение (у врача).",
            "accept": [
              "i had my eyes tested",
              "i got my eyes tested"
            ],
            "placeholder": "I had my eyes ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · get, неприятности и «уговорить»",
        "title": "<em>get it done</em>, «у меня украли» и «уговорить кого-то»",
        "paras": [
          "В разговорной речи вместо have звучит <b>get</b>: <b>I need to get my car fixed.</b> = Надо починить машину (отдать в сервис). Значение то же, тон неформальнее. Get особенно частит в просьбах и планах: <i>Get it checked!</i>, <i>I must get my hair cut.</i>",
          "У каузатива есть «несчастный» оттенок: то же <b>have / get + объект + 3-я форма</b> может означать неприятность, случившуюся <u>с тобой</u> не по твоей воле: <b>I had my phone stolen.</b> = У меня украли телефон. <b>She got her purse snatched.</b> = У неё вырвали сумочку. Контекст подскажет: заказал услугу или пострадал.",
          "Не путай с другой конструкцией: <b>get someone to do</b> (с инфинитивом) = уговорить / убедить человека что-то сделать. <b>I got my brother to help me.</b> = Я уговорил брата помочь. Здесь объект — человек, и идёт <b>to + инфинитив</b>, а не 3-я форма."
        ],
        "audio": "В разговорной речи вместо have звучит get: I need to get my car fixed. Значение то же, тон неформальнее. У каузатива есть несчастный оттенок: то же have или get плюс объект плюс третья форма может значить неприятность, случившуюся с тобой не по твоей воле: I had my phone stolen — у меня украли телефон. И не путай с другой конструкцией: get someone to do, с инфинитивом — уговорить человека: I got my brother to help me.",
        "table": {
          "rows": [
            [
              "get + объект + 3-я форма",
              "разг. «сделать (заказать)»: get the car fixed"
            ],
            [
              "have / get sth stolen, broken",
              "несчастье: «у меня украли / сломали»"
            ],
            [
              "get someone to do",
              "уговорить кого-то (to + инфинитив)"
            ],
            [
              "have someone do",
              "заставить / попросить (bare inf)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Мне надо отдать ноутбук в ремонт.",
            "en": "I need to <b>get my laptop fixed</b>.",
            "gloss": "get + 3-я форма (разговорно)",
            "say": "I need to get my laptop fixed."
          },
          {
            "ru": "У меня в поезде украли кошелёк.",
            "en": "I <b>had my wallet stolen</b> on the train.",
            "gloss": "несчастье, не по своей воле",
            "say": "I had my wallet stolen on the train."
          },
          {
            "ru": "Я уговорил друга подвезти меня.",
            "en": "I <b>got my friend to give</b> me a lift.",
            "gloss": "get sb to do (инфинитив)",
            "say": "I got my friend to give me a lift."
          },
          {
            "ru": "Учитель заставил нас переписать эссе.",
            "en": "The teacher <b>had us rewrite</b> the essay.",
            "gloss": "have sb do (bare inf)",
            "say": "The teacher had us rewrite the essay."
          }
        ],
        "mistakes": [
          {
            "wrong": "I got my brother help me",
            "right": "I got my brother <b>to help</b> me",
            "why": "get + человек + TO + инфинитив"
          },
          {
            "wrong": "Someone stole my phone, so I had stolen my phone",
            "right": "I <b>had my phone stolen</b>",
            "why": "несчастье: have + объект + 3-я форма; объект в середине"
          }
        ],
        "mnemonic": "🎭 get it done (заказал) · had it stolen (пострадал) · got him TO do it (уговорил).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> разговорный get + объект + 3-я форма.",
            "q": "«Мне надо починить машину (отдать в сервис)» —",
            "opts": [
              "I need to get my car fixed",
              "I need to get fixed my car",
              "I need to repair fixed my car"
            ],
            "answer": 0,
            "explain": "get + объект (my car) + 3-я форма (fixed)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «несчастный» каузатив.",
            "q": "«У меня украли телефон» —",
            "opts": [
              "I stole my phone",
              "I had my phone stolen",
              "I had stolen my phone"
            ],
            "answer": 1,
            "explain": "несчастье → have + объект + 3-я форма: <b>had my phone stolen</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши get someone to do.",
            "q": "Я уговорил брата помочь мне.",
            "accept": [
              "i got my brother to help me",
              "i got my brother to help"
            ],
            "placeholder": "I got my brother to ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Рита и Олег говорят про ремонт и мелкие неприятности. Слушай, как каузатив переключается между «заказал услугу» и «пострадал». Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Rita",
          "name": "Рита",
          "side": "left",
          "en": "Your flat looks amazing! Did you paint it yourself?",
          "ru": "Твоя квартира выглядит потрясающе! Сам красил?",
          "words": [
            [
              "paint it yourself",
              "сам красил"
            ]
          ]
        },
        {
          "who": "Oleg",
          "name": "Олег",
          "side": "right",
          "en": "No way. I had the whole place redecorated last month.",
          "ru": "Куда там. В прошлом месяце мне сделали ремонт во всей квартире.",
          "words": [
            [
              "had ... redecorated",
              "сделали ремонт (каузатив)"
            ]
          ]
        },
        {
          "who": "Rita",
          "name": "Рита",
          "side": "left",
          "en": "Nice. I really need to get my kitchen redone too.",
          "ru": "Здорово. Мне тоже срочно надо переделать кухню.",
          "words": [
            [
              "get ... redone",
              "переделать (заказать, разговорно)"
            ]
          ]
        },
        {
          "who": "Oleg",
          "name": "Олег",
          "side": "right",
          "en": "Do it. But check the bill — I nearly had my savings wiped out!",
          "ru": "Давай. Только следи за счётом — у меня чуть все сбережения не смело!",
          "words": [
            [
              "had ... wiped out",
              "смело, обнулило (несчастье)"
            ]
          ]
        },
        {
          "who": "Rita",
          "name": "Рита",
          "side": "left",
          "en": "Ha! By the way, I had my car scratched in their car park.",
          "ru": "Ха! Кстати, мне там на парковке поцарапали машину.",
          "words": [
            [
              "had my car scratched",
              "поцарапали машину (несчастье)"
            ]
          ]
        },
        {
          "who": "Oleg",
          "name": "Олег",
          "side": "right",
          "en": "Oh no. You should get that fixed before it rusts.",
          "ru": "О нет. Лучше отдай в ремонт, пока не заржавело.",
          "words": [
            [
              "get that fixed",
              "отдай в ремонт (get + 3-я форма)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Глаголы услуг и обороты каузатива. Повтори вслух и отметь, где «заказал», а где «пострадал».",
      "items": [
        {
          "en": "have something done",
          "ru": "заказать услугу (сделать у мастера)",
          "ex": "I had my hair cut."
        },
        {
          "en": "get something done",
          "ru": "сделать (разговорно)",
          "ex": "I need to get my car fixed."
        },
        {
          "en": "have your hair cut",
          "ru": "постричься (в салоне)",
          "ex": "She had her hair cut short."
        },
        {
          "en": "service a car",
          "ru": "обслуживать машину",
          "ex": "I have my car serviced yearly."
        },
        {
          "en": "redecorate",
          "ru": "делать ремонт, переделывать",
          "ex": "We had the flat redecorated."
        },
        {
          "en": "deliver",
          "ru": "доставлять",
          "ex": "We had the sofa delivered."
        },
        {
          "en": "repair",
          "ru": "чинить, ремонтировать",
          "ex": "I had my watch repaired."
        },
        {
          "en": "have something stolen",
          "ru": "стать жертвой кражи",
          "ex": "He had his bike stolen."
        },
        {
          "en": "take out a tooth",
          "ru": "удалять зуб",
          "ex": "I had a tooth taken out."
        },
        {
          "en": "get someone to do",
          "ru": "уговорить кого-то сделать",
          "ex": "I got him to help me."
        },
        {
          "en": "dry-clean",
          "ru": "чистить в химчистке",
          "ex": "I had my coat dry-cleaned."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай про насыщенную неделю дел. Заметь, как каузатив (had ... done, got ... done) описывает заказанные услуги, а в середине прячется «несчастный» вариант.",
      "title": "A busy week",
      "sentences": [
        "This week I finally got a few things done.",
        "On Monday I had my car serviced and the brakes checked.",
        "On Tuesday I had my eyes tested and ordered new glasses.",
        "I also had my suit dry-cleaned for the wedding.",
        "On Wednesday I got my laptop repaired at last.",
        "Then something annoying happened: I had my bike stolen outside the shop.",
        "So on Friday I had a new lock fitted on the door.",
        "By the weekend, everything had been sorted out."
      ],
      "translation": "На этой неделе я наконец кое-что переделал. В понедельник мне обслужили машину и проверили тормоза. Во вторник я проверил зрение и заказал новые очки. Ещё я отдал костюм в химчистку к свадьбе. В среду мне наконец починили ноутбук. Потом случилась досадная вещь: у меня украли велосипед у магазина. Поэтому в пятницу мне поставили новый замок на дверь. К выходным всё было улажено."
    },
    "drag": {
      "intro": "Соедини английскую фразу с её точным значением (кто сделал и как).",
      "pairs": [
        [
          "I had my hair cut.",
          "меня подстригли (салон)"
        ],
        [
          "I cut my hair.",
          "я сам подстригся"
        ],
        [
          "I had my phone stolen.",
          "у меня украли телефон"
        ],
        [
          "I got my brother to help.",
          "я уговорил брата помочь"
        ],
        [
          "We had the house painted.",
          "нам покрасили дом"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка дня. Пять вопросов — и каузатив твой.",
      "items": [
        {
          "q": "Ты был в салоне. «Я подстригся» —",
          "opts": [
            "I cut my hair",
            "I had my hair cut",
            "I had cut my hair"
          ],
          "answer": 1,
          "explain": "Стриг мастер → каузатив: <b>I had my hair cut</b>."
        },
        {
          "q": "«Нам покрасили дом» —",
          "opts": [
            "We painted the house",
            "We had the house painted",
            "We had painted the house"
          ],
          "answer": 1,
          "explain": "Услуга → have + объект + 3-я форма: <b>had the house painted</b>."
        },
        {
          "q": "«У меня украли телефон» —",
          "opts": [
            "I stole my phone",
            "I had my phone stolen",
            "I had stolen my phone"
          ],
          "answer": 1,
          "explain": "«несчастный» каузатив: <b>had my phone stolen</b>."
        },
        {
          "q": "«Я уговорил брата помочь» —",
          "opts": [
            "I got my brother help me",
            "I got my brother to help me",
            "I had my brother to help me"
          ],
          "answer": 1,
          "explain": "get + человек + TO + инфинитив: <b>got my brother to help me</b>."
        },
        {
          "q": "Каузатив строится как have + … + …?",
          "opts": [
            "объект + 3-я форма",
            "инфинитив + объект",
            "объект + -ing"
          ],
          "answer": 0,
          "explain": "have + объект + 3-я форма (past participle)."
        }
      ]
    },
    "essay": {
      "intro": "Твоя очередь — расскажи, что ты делал(а) не сам(а), а заказывал(а) у мастеров.",
      "prompt": "Напиши 5–6 предложений о том, что ты в последнее время сделал(а) у мастеров — или собираешься. Используй have / get + объект + 3-я форма, разные времена, и хотя бы один «несчастный» вариант (had something stolen/broken).",
      "hint": "Структуры: Last month I had my … repaired ; I usually get my hair cut at … ; Next week I'm having … done ; Once I had my … stolen ; I must get my … checked .",
      "example": "I am quite busy, so I have most things done for me. Every few weeks I get my hair cut at a small salon near my office. Last month I had my old flat completely redecorated, and it looks wonderful now. I also have my car serviced twice a year, so it never breaks down. Unfortunately, last winter I had my bike stolen outside the gym. Next week I'm finally having a new lock fitted on my door."
    },
    "picture": {
      "intro": "Опиши сцену в салоне или мастерской: какую услугу человеку оказывают.",
      "emoji": "💇✂️🔧",
      "prompt": "Опиши, что человеку делают (не сам). Используй каузатив: have / get + объект + 3-я форма.",
      "hint": "Используй: She is having her hair cut; he is getting his car repaired; they had the windows cleaned.",
      "example": "In the picture, a woman is having her hair cut and coloured at a busy salon. Next to her, a man is getting his beard trimmed. Through the window, you can see a car which is being repaired in the garage opposite. These people clearly prefer to have things done by professionals rather than do them at home.",
      "img": "img/b2/day-18.jpg",
      "credit": "Фото: Phan Văn Công · Public Domain · <a href=\"https://www.flickr.com/photos/139645204@N07/25977211961\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "19": {
    "day": 19,
    "week": "03",
    "level": "B2",
    "themeRu": "Сделав, …",
    "themeEn": "Participle clauses",
    "intro": "«I felt tired. I went to bed.» Два коротких предложения — и вдруг они сшиваются в одно изящное: <b>Feeling tired, I went to bed.</b> Сегодня большой шаг к по-настоящему «взрослой» английской речи — учимся сшивать предложения причастными оборотами. Это тот приём, который отличает беглого автора от человека, говорящего рублеными фразами. У нас три инструмента: <b>-ing</b> для активного действия (<i>opening, feeling</i>), <b>-ed / 3-я форма</b> для пассивного (<i>built, shocked</i>) и <b>having done</b> для того, что случилось <u>раньше</u>. А ещё нас ждёт коварная русская ловушка — «висячее» причастие, когда оборот случайно цепляется не к тому подлежащему. Разберёмся по шагам.",
    "introAudio": "I felt tired. I went to bed. Два коротких предложения — и вдруг они сшиваются в одно изящное: Feeling tired, I went to bed. Сегодня большой шаг к по-настоящему взрослой английской речи — учимся сшивать предложения причастными оборотами. Это тот приём, который отличает беглого автора от человека, говорящего рублеными фразами. У нас три инструмента: -ing для активного действия, opening, feeling; -ed или третья форма для пассивного, built, shocked; и having done для того, что случилось раньше. А ещё нас ждёт коварная русская ловушка — висячее причастие, когда оборот случайно цепляется не к тому подлежащему. Разберёмся по шагам.",
    "goals": [
      "соединять два предложения с одним подлежащим через -ing-причастие (Feeling tired, I left)",
      "сворачивать пассив в -ed-причастие (Built in 1850, the house…) — как продолжение Дня 15",
      "показывать предшествование через having done (Having finished, she left)",
      "ловить и чинить «висячее» причастие — следить, чтобы подлежащее выполняло причастие"
    ],
    "learned": [
      "Научился(лась) соединять два предложения с одним подлежащим через -ing-причастие (Feeling tired, I left)",
      "Научился(лась) сворачивать пассив в -ed-причастие (Built in 1850, the house…) — как продолжение Дня 15",
      "Научился(лась) показывать предшествование через having done (Having finished, she left)",
      "Научился(лась) ловить и чинить «висячее» причастие — следить, чтобы подлежащее выполняло причастие"
    ],
    "review": {
      "intro": "Утренний прогрев. Сегодняшние обороты вырастают прямо из того, что мы уже умеем: из пассива -ed (День 15) и из системы времён рассказа (День 1). Заодно я анонсирую идею «свёрнутого» придаточного — она и есть причастный оборот. Разомнёмся на трёх задачах.",
      "introAudio": "Утренний прогрев. Сегодняшние обороты вырастают прямо из того, что мы уже умеем: из пассива -ed, День 15, и из системы времён рассказа, День 1. Заодно я анонсирую идею свёрнутого придаточного — она и есть причастный оборот. Разомнёмся на трёх задачах.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни пассив из Дня 15 — be + 3-я форма.",
          "q": "«Этот мост был построен в 1900 году» —",
          "opts": [
            "This bridge built in 1900",
            "This bridge was built in 1900",
            "This bridge was build in 1900"
          ],
          "answer": 1,
          "explain": "Пассив = be + 3-я форма: <b>was built</b>. Запомни эту форму — через минуту мы свернём её в причастие «Built in 1900, …»."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни систему времён рассказа из Дня 1 — что случилось раньше.",
          "q": "«Закончив отчёт, она пошла домой (сначала закончила)» — что было раньше?",
          "opts": [
            "Уход домой",
            "Окончание отчёта",
            "Оба одновременно"
          ],
          "answer": 1,
          "explain": "Сначала закончила, потом ушла. Это предшествование — позже мы отметим его причастием <b>having finished</b>."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши -ing-форму глагола. Это «строительный материал» сегодняшнего дня.",
          "q": "Форма с -ing от глагола run (бежать)?",
          "accept": [
            "running"
          ],
          "placeholder": "run → ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · активное -ing",
        "title": "<em>Feeling tired, I left</em> — причастие вместо придаточного",
        "paras": [
          "Причастный оборот с <b>-ing</b> сворачивает целое придаточное (с <i>while, when, as, because, and</i>) в одно лёгкое причастие. <b>Feeling tired, I went to bed.</b> = Because I felt tired, I went to bed. Так связывают два действия, у которых <u>одно и то же подлежащее</u>.",
          "Оборот -ing передаёт либо <b>причину</b> (= because/as): <i>Not knowing the way, we asked a local.</i> Либо <b>одновременность / последовательность</b> (= while/when/and): <i>Opening the door, she saw a stranger.</i> Действие активное — подлежащее само его выполняет.",
          "Оборот ставят в начало (с запятой) или в конец предложения: <i>She sat by the fire, reading a book.</i> Это чисто «письменный», слегка литературный регистр — именно он нужен на B2 в эссе и рассказе."
        ],
        "audio": "Причастный оборот с -ing сворачивает целое придаточное в одно лёгкое причастие. Feeling tired, I went to bed — это то же, что Because I felt tired, I went to bed. Так связывают два действия с одним подлежащим. Оборот передаёт причину, как because, или одновременность, как while и when. Opening the door, she saw a stranger. Действие активное: подлежащее само его выполняет.",
        "table": {
          "rows": [
            [
              "Feeling tired, I went to bed.",
              "Так как устал… (причина = because)"
            ],
            [
              "Opening the door, she saw…",
              "Открыв / открывая дверь… (время = when)"
            ],
            [
              "He sat there, reading.",
              "…читая (одновременное действие)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Не зная дороги, мы спросили местного жителя.",
            "en": "<b>Not knowing</b> the way, we asked a local.",
            "gloss": "причина → -ing (= because we didn't know)",
            "say": "Not knowing the way, we asked a local."
          },
          {
            "ru": "Услышав шум, он обернулся.",
            "en": "<b>Hearing</b> a noise, he turned around.",
            "gloss": "одновременность/время → -ing",
            "say": "Hearing a noise, he turned around."
          },
          {
            "ru": "Она сидела у окна и пила чай.",
            "en": "She sat by the window, <b>drinking</b> tea.",
            "gloss": "оборот в конце предложения",
            "say": "She sat by the window, drinking tea."
          }
        ],
        "mistakes": [
          {
            "wrong": "Because feeling tired, I went to bed",
            "right": "<b>Feeling</b> tired, I went to bed",
            "why": "причастие уже несёт смысл «потому что» — лишний because не нужен"
          },
          {
            "wrong": "Opened the door, she saw a stranger",
            "right": "<b>Opening</b> the door, she saw a stranger",
            "why": "она сама открывает дверь → активное -ing, а не пассивное -ed"
          }
        ],
        "mnemonic": "🧵 -ing = подлежащее само делает действие. Одно подлежащее на оба глагола.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери причастие причины (= because).",
            "q": "___ what to say, she stayed silent.",
            "opts": [
              "Not know",
              "Not knowing",
              "Didn't know"
            ],
            "answer": 1,
            "explain": "«Не зная, что сказать…» — активное причастие причины: <b>Not knowing</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери оборот + главное предложение (без запятой в наборе).",
            "q": "Собери: «Услышав шум он обернулся»",
            "want": "Hearing a noise he turned around",
            "answer": "Hearing a noise he turned around"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> сверни «Because I felt nervous» в причастие. feel → feeling.",
            "q": "Нервничая, я говорил слишком быстро. (Feeling …, I spoke too fast.)",
            "accept": [
              "feeling nervous i spoke too fast",
              "feeling nervous, i spoke too fast"
            ],
            "placeholder": "Feeling nervous, I ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · пассивное -ed",
        "title": "<em>Built in 1850, the house…</em> — свёрнутый пассив",
        "paras": [
          "Если действие выполняет <u>кто-то другой</u>, а подлежащее его лишь испытывает, берём причастие прошедшего времени — <b>-ed</b> или 3-ю форму. Это прямое продолжение Дня 15: пассив <i>be + 3-я форма</i> просто теряет <i>be</i>. <b>Built in 1850, the house still stands.</b> = The house, which was built in 1850, still stands.",
          "<b>Shocked by the news, she sat down.</b> = Because she was shocked… Подлежащее (she) не шокирует — её шокировали. Сравни активное и пассивное: <i>the man <b>cooking</b> dinner</i> (тот, кто готовит) против <i>the dinner <b>cooked</b> by him</i> (то, что приготовили).",
          "Запомни контраст: <b>-ing</b> = подлежащее <u>делает</u>; <b>-ed</b> = над подлежащим <u>делают</u>. Это та же логика boring/bored, exciting/excited, которую ты уже встречал."
        ],
        "audio": "Если действие выполняет кто-то другой, а подлежащее его лишь испытывает, берём причастие прошедшего времени, -ed или третью форму. Это продолжение Дня 15: пассив be плюс третья форма просто теряет be. Built in 1850, the house still stands — то же, что The house, which was built in 1850, still stands. Shocked by the news, she sat down. Подлежащее не шокирует — её шокировали. Запомни: -ing подлежащее делает, -ed над подлежащим делают.",
        "table": {
          "rows": [
            [
              "-ing (активное)",
              "подлежащее ДЕЛАЕТ: the man cooking dinner"
            ],
            [
              "-ed (пассивное)",
              "над ним ДЕЛАЮТ: the dinner cooked by him"
            ],
            [
              "Built in 1850, the house…",
              "= which was built in 1850 (свёрнутый пассив)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Потрясённая новостью, она села.",
            "en": "<b>Shocked</b> by the news, she sat down.",
            "gloss": "= Because she was shocked",
            "say": "Shocked by the news, she sat down."
          },
          {
            "ru": "Написанное наспех, письмо было полно ошибок.",
            "en": "<b>Written</b> in haste, the letter was full of mistakes.",
            "gloss": "write → written (3-я форма)",
            "say": "Written in haste, the letter was full of mistakes."
          },
          {
            "ru": "Окружённый репортёрами, он отказался говорить.",
            "en": "<b>Surrounded</b> by reporters, he refused to speak.",
            "gloss": "= Because he was surrounded",
            "say": "Surrounded by reporters, he refused to speak."
          }
        ],
        "mistakes": [
          {
            "wrong": "Building in 1850, the house still stands",
            "right": "<b>Built</b> in 1850, the house still stands",
            "why": "дом не строит сам себя — над ним выполнили действие → пассивное -ed"
          },
          {
            "wrong": "Shocking by the news, she sat down",
            "right": "<b>Shocked</b> by the news, she sat down",
            "why": "её шокировали (пассив) → shocked, а не shocking"
          }
        ],
        "mnemonic": "🏚️ -ed = свёрнутый пассив: убери «which was» — останется причастие. Built (= which was built).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> над подлежащим выполняют действие → пассивное причастие.",
            "q": "___ in 1990, the bridge needs repairs now.",
            "opts": [
              "Building",
              "Built",
              "Build"
            ],
            "answer": 1,
            "explain": "Мост построили (пассив) → свёрнутое <b>Built</b> in 1990 (= which was built)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери активное или пассивное причастие по смыслу.",
            "q": "The film was so ___ that everyone felt ___.",
            "opts": [
              "bored … boring",
              "boring … bored",
              "bored … bored"
            ],
            "answer": 1,
            "explain": "Фильм <b>boring</b> (вызывает скуку, активно), зрители <b>bored</b> (им скучно, пассивно)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> сверни «which was written by a friend» в причастие. write → written.",
            "q": "Написанная другом, книга стала бестселлером. (___ by a friend, the book became a bestseller.)",
            "accept": [
              "written by a friend the book became a bestseller",
              "written by a friend, the book became a bestseller"
            ],
            "placeholder": "Written by a friend, the book ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · перфектное having done",
        "title": "<em>Having finished, she left</em> — сначала одно, потом другое",
        "paras": [
          "Когда одно действие явно завершилось <u>до</u> другого, берём перфектное причастие: <b>having + 3-я форма</b>. <b>Having finished the report, she went home.</b> = After she had finished the report… Сначала закончила — потом ушла. Это причастный близнец Past Perfect: он подчёркивает предшествование.",
          "Пассивная версия — <b>having been + 3-я форма</b>: <b>Having been warned, he drove carefully.</b> = After he had been warned… (его сначала предупредили, потом он поехал).",
          "Выбор простой: нужна последовательность «сначала это → потом то» — бери <b>having done</b>. Действия идут одновременно — хватает обычного <b>-ing</b>. <i>Finishing my coffee, I stood up</i> (допивая, встаю) vs <i>Having finished my coffee, I stood up</i> (допил — встал)."
        ],
        "audio": "Когда одно действие завершилось до другого, берём перфектное причастие: having плюс третья форма. Having finished the report, she went home — то же, что After she had finished the report, she went home. Сначала закончила, потом ушла. Пассивная версия — having been плюс третья форма: Having been warned, he drove carefully. Нужна последовательность сначала-потом — бери having done. Действия одновременны — хватает обычного -ing.",
        "table": {
          "rows": [
            [
              "Having finished, she left.",
              "Закончив… (сначала закончила, потом ушла)"
            ],
            [
              "Having been told, he understood.",
              "Когда ему сказали… (пассив, предшествование)"
            ],
            [
              "Finishing my coffee, I stood up.",
              "Допивая кофе… (одновременно)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Прожив там десять лет, она знала каждую улицу.",
            "en": "<b>Having lived</b> there for ten years, she knew every street.",
            "gloss": "предшествование → having + 3-я форма",
            "say": "Having lived there for ten years, she knew every street."
          },
          {
            "ru": "Сдав все экзамены, мы устроили вечеринку.",
            "en": "<b>Having passed</b> all our exams, we threw a party.",
            "gloss": "сначала сдали — потом отметили",
            "say": "Having passed all our exams, we threw a party."
          },
          {
            "ru": "Получив отказ дважды, он всё же подал заявку снова.",
            "en": "<b>Having been rejected</b> twice, he still applied again.",
            "gloss": "пассив: having been + 3-я форма",
            "say": "Having been rejected twice, he still applied again."
          }
        ],
        "mistakes": [
          {
            "wrong": "Having finish the work, she left",
            "right": "<b>Having finished</b> the work, she left",
            "why": "после having нужна 3-я форма: finished, не finish"
          },
          {
            "wrong": "Having warned, he was careful",
            "right": "<b>Having been warned</b>, he was careful",
            "why": "его предупредили (пассив) → having BEEN warned"
          }
        ],
        "mnemonic": "⏮️ having done = причастный Past Perfect: сначала это, потом то.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> подчеркни предшествование — сначала одно, потом другое.",
            "q": "___ the email, she immediately called him back.",
            "opts": [
              "Reading",
              "Having read",
              "Read"
            ],
            "answer": 1,
            "explain": "Сначала прочитала, потом позвонила → <b>Having read</b> (read → read, 3-я форма)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери перфектный оборот + главное предложение.",
            "q": "Собери: «Закончив работу мы пошли домой»",
            "want": "Having finished the work we went home",
            "answer": "Having finished the work we went home"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пассивный перфектный оборот. invite → invited.",
            "q": "Получив приглашение, она была в восторге. (___ to the party, she was thrilled.)",
            "accept": [
              "having been invited to the party she was thrilled",
              "having been invited to the party, she was thrilled"
            ],
            "placeholder": "Having been invited to the party, she ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка",
        "title": "«Висячее» причастие — <em>Walking home, the rain started</em> ✗",
        "paras": [
          "Вот главная ловушка дня. В английском подлежащее главного предложения <u>обязано</u> быть тем, кто выполняет причастие. <b>Walking home, the rain started.</b> ✗ — буквально выходит, что домой шёл <i>дождь</i>. Получается абсурд, и для англичанина это грубая ошибка.",
          "Чинить можно двумя способами. (1) Сменить подлежащее на правильное: <b>Walking home, I got caught in the rain.</b> (домой шёл я). (2) Развернуть оборот в полное придаточное: <b>While I was walking home, it started to rain.</b>",
          "Русское деепричастие («идя домой», «закончив работу») куда свободнее — мы по привычке цепляем его к чему угодно, и оттого «висячие» причастия рождаются массово. Спасение одно: всегда спрашивай себя — <b>кто</b> делает -ing? Ответ должен совпасть с подлежащим."
        ],
        "audio": "Главная ловушка дня. В английском подлежащее главного предложения обязано быть тем, кто выполняет причастие. Walking home, the rain started — буквально выходит, что домой шёл дождь. Это грубая ошибка. Чинить можно двумя способами. Первый: сменить подлежащее — Walking home, I got caught in the rain. Второй: развернуть в полное придаточное — While I was walking home, it started to rain. Русское деепричастие свободнее, и оттого висячие причастия рождаются массово. Всегда спрашивай: кто делает -ing? Это должно быть подлежащее.",
        "table": {
          "rows": [
            [
              "Walking home, the rain started. ✗",
              "выходит, что домой шёл дождь"
            ],
            [
              "Walking home, I got wet. ✓",
              "домой шёл я — подлежащее совпадает"
            ],
            [
              "While I walked home, it rained. ✓",
              "разворот в полное придаточное"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Глядя в окно, я увидел красивые горы.",
            "en": "Looking out of the window, <b>I</b> saw beautiful mountains.",
            "gloss": "в окно смотрю я → I — правильное подлежащее",
            "say": "Looking out of the window, I saw beautiful mountains."
          },
          {
            "ru": "Будучи студентом, я часто бывал в этом кафе.",
            "en": "<b>Being</b> a student, I often went to this café.",
            "gloss": "студентом был я → подлежащее совпадает",
            "say": "Being a student, I often went to this café."
          },
          {
            "ru": "Пока он говорил, зазвонил телефон. (нельзя свернуть — разные подлежащие)",
            "en": "<b>While he was talking</b>, the phone rang.",
            "gloss": "говорит он, звонит телефон → полное придаточное, не оборот",
            "say": "While he was talking, the phone rang."
          }
        ],
        "mistakes": [
          {
            "wrong": "Walking home, the rain started",
            "right": "Walking home, <b>I</b> got caught in the rain",
            "why": "подлежащее должно само идти домой; дождь домой не идёт"
          },
          {
            "wrong": "Looking out of the window, the mountains were beautiful",
            "right": "Looking out of the window, <b>I</b> saw the beautiful mountains",
            "why": "горы не смотрят в окно → нужно подлежащее, которое смотрит"
          }
        ],
        "mnemonic": "🔗 Кто делает -ing? Только подлежащее. Не совпало — причастие «висит».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери вариант без «висячего» причастия.",
            "q": "Какое предложение правильное?",
            "opts": [
              "Driving to work, the traffic was terrible.",
              "Driving to work, I got stuck in terrible traffic.",
              "Driving to work, my car broke and the traffic was bad."
            ],
            "answer": 1,
            "explain": "На работу еду <b>я</b> → подлежащее (I) совпадает с причастием. В варианте 1 «едет» пробка — это «висячее» причастие."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> подлежащие разные → причастие нельзя, нужен полный оборот.",
            "q": "«Пока я готовил, зазвонил телефон» —",
            "opts": [
              "Cooking dinner, the phone rang.",
              "While I was cooking dinner, the phone rang."
            ],
            "answer": 1,
            "explain": "Готовлю я, звонит телефон — подлежащие разные, поэтому свернуть в причастие нельзя: <b>While I was cooking…</b>"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> почини «висячее» причастие — подставь правильное подлежащее I.",
            "q": "Идя по улице, я нашёл кошелёк. (Walking down the street, … found a wallet.)",
            "accept": [
              "walking down the street i found a wallet",
              "walking down the street, i found a wallet"
            ],
            "placeholder": "Walking down the street, I ..."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Вера рассказывает Тому, как утром застряла без ключей. Слушай, как она сшивает события причастными оборотами: -ing для действий, -ed для пассива, having done для предшествования. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Vera",
          "name": "Вера",
          "side": "left",
          "en": "Leaving the house in a rush this morning, I forgot my keys on the table.",
          "ru": "Выходя утром в спешке, я забыла ключи на столе.",
          "words": [
            [
              "leaving",
              "выходя (активное -ing, одновременность)"
            ],
            [
              "in a rush",
              "в спешке"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Oh no. So you were locked out?",
          "ru": "О нет. То есть ты осталась за дверью?",
          "words": [
            [
              "locked out",
              "запертой снаружи, без возможности войти"
            ]
          ]
        },
        {
          "who": "Vera",
          "name": "Вера",
          "side": "left",
          "en": "Completely. Having tried every window, I finally called a locksmith.",
          "ru": "Полностью. Перепробовав все окна, я в итоге вызвала слесаря.",
          "words": [
            [
              "having tried",
              "перепробовав (предшествование — сначала это)"
            ],
            [
              "locksmith",
              "слесарь по замкам"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Sensible. Was the door hard to open?",
          "ru": "Разумно. Дверь сложно было открыть?",
          "words": [
            [
              "sensible",
              "разумный, благоразумный"
            ]
          ]
        },
        {
          "who": "Vera",
          "name": "Вера",
          "side": "left",
          "en": "Built decades ago, it had an old lock, so it took him a while.",
          "ru": "Дверь поставили десятилетия назад, замок в ней был старый, так что он провозился.",
          "words": [
            [
              "built decades ago",
              "построенная десятилетия назад (пассивное -ed)"
            ],
            [
              "took him a while",
              "заняло у него какое-то время"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Shaken but safe, then. Next time leave a spare key with me!",
          "ru": "Перепуганная, но в порядке. В следующий раз оставь запасной ключ мне!",
          "words": [
            [
              "shaken",
              "потрясённая (пассивное причастие от shake)"
            ],
            [
              "spare key",
              "запасной ключ"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Связки и причастные слова уровня B2 — то, чем сшивают сложные предложения. Повтори вслух и отметь, активное это причастие или пассивное.",
      "items": [
        {
          "en": "having said that",
          "ru": "при этом; тем не менее (вводный оборот)",
          "ex": "It's expensive. Having said that, the quality is excellent."
        },
        {
          "en": "given (that)",
          "ru": "учитывая (что)",
          "ex": "Given the time, we'd better hurry."
        },
        {
          "en": "considering",
          "ru": "принимая во внимание, учитывая",
          "ex": "Considering his age, he runs incredibly fast."
        },
        {
          "en": "weather permitting",
          "ru": "если позволит погода (устойчивый оборот)",
          "ex": "We'll have a picnic, weather permitting."
        },
        {
          "en": "exhausted",
          "ru": "измотанный, обессиленный (-ed, пассивное)",
          "ex": "Exhausted after the trip, she fell asleep at once."
        },
        {
          "en": "overwhelmed",
          "ru": "подавленный, заваленный (эмоциями/делами)",
          "ex": "Overwhelmed by messages, he switched off his phone."
        },
        {
          "en": "abandoned",
          "ru": "заброшенный, покинутый",
          "ex": "Abandoned years ago, the factory is now ruins."
        },
        {
          "en": "assuming",
          "ru": "предполагая, при условии что (-ing, активное)",
          "ex": "Assuming the train is on time, we'll arrive by six."
        },
        {
          "en": "to glance",
          "ru": "взглянуть мельком",
          "ex": "Glancing at the clock, she realised she was late."
        },
        {
          "en": "to clutch",
          "ru": "крепко сжимать, вцепиться",
          "ex": "Clutching her bag, she hurried through the crowd."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай короткую историю. Заметь, как причастные обороты сшивают действия: -ing (активное), -ed (пассивное) и having done (предшествование).",
      "title": "The wrong platform",
      "sentences": [
        "Arriving late at the station, Daniel rushed towards the nearest platform.",
        "Clutching his ticket, he jumped onto a train just before the doors closed.",
        "Settling into a seat, he finally caught his breath.",
        "Built in the Victorian era, the carriage looked charmingly old-fashioned.",
        "Having travelled for twenty minutes, he glanced at the map above the door.",
        "Shocked, he realised the train was heading in the opposite direction.",
        "Not wanting to panic, he asked a fellow passenger for help.",
        "Reassured by her calm directions, he got off and crossed to the right platform."
      ],
      "translation": "Опоздав на вокзал, Дэниел бросился к ближайшей платформе. Сжимая билет, он запрыгнул в поезд прямо перед закрытием дверей. Усевшись на место, он наконец перевёл дыхание. Построенный в викторианскую эпоху, вагон выглядел очаровательно старомодным. Проехав двадцать минут, он взглянул на карту над дверью. Потрясённый, он понял, что поезд идёт в противоположную сторону. Не желая паниковать, он попросил помощи у соседки-пассажирки. Успокоенный её спокойными указаниями, он вышел и перешёл на нужную платформу."
    },
    "drag": {
      "intro": "Соедини причастие с его типом и смыслом.",
      "pairs": [
        [
          "feeling tired",
          "активное -ing: подлежащее само делает"
        ],
        [
          "built in 1850",
          "пассивное -ed: над ним выполнили действие"
        ],
        [
          "having finished",
          "перфектное: сначала это, потом то"
        ],
        [
          "having been warned",
          "пассивное перфектное: его сначала предупредили"
        ],
        [
          "Walking home, the rain… ✗",
          "«висячее» причастие: подлежащее не совпало"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по причастным оборотам. Пять вопросов — и приём «сшивания» предложений твой.",
      "items": [
        {
          "q": "«Не зная дороги, мы спросили местного» —",
          "opts": [
            "Not knowing the way, we asked a local.",
            "Not known the way, we asked a local.",
            "Don't knowing the way, we asked a local."
          ],
          "answer": 0,
          "explain": "Активное причастие причины: <b>Not knowing</b> (= because we didn't know)."
        },
        {
          "q": "«Построенный в 1900, дом нуждается в ремонте» —",
          "opts": [
            "Building in 1900, the house needs repairs.",
            "Built in 1900, the house needs repairs.",
            "Build in 1900, the house needs repairs."
          ],
          "answer": 1,
          "explain": "Дом построили (пассив) → свёрнутое <b>Built</b> in 1900 (= which was built)."
        },
        {
          "q": "Подчеркни предшествование: «___ the report, she went home.»",
          "opts": [
            "Writing",
            "Having written",
            "Written"
          ],
          "answer": 1,
          "explain": "Сначала написала, потом ушла → <b>Having written</b> (перфектное причастие)."
        },
        {
          "q": "Где «висячее» причастие (ошибка)?",
          "opts": [
            "Opening the door, I saw a stranger.",
            "Opening the door, a stranger appeared.",
            "Opening the door, she found the room empty."
          ],
          "answer": 1,
          "explain": "Дверь открывает не stranger — подлежащее не совпадает с причастием. Это «висячее» причастие."
        },
        {
          "q": "Пассивное перфектное причастие — это…",
          "opts": [
            "having done",
            "having been done",
            "being done"
          ],
          "answer": 1,
          "explain": "«После того как над ним выполнили действие» → <b>having been done</b> (Having been warned…)."
        }
      ]
    },
    "essay": {
      "intro": "Твоя очередь — расскажи маленькую историю, сшивая предложения причастными оборотами.",
      "prompt": "Напиши 5–6 предложений о случае, когда что-то пошло не по плану. Используй минимум одно -ing-причастие, одно -ed-причастие и один оборот having done. Следи, чтобы причастие не «висело».",
      "hint": "Структуры: Arriving at…, I… ; Having forgotten…, I had to… ; Shocked by…, she… ; Not knowing what to do, … ; Built / Written / Surrounded …, the … .",
      "example": "Arriving at the airport two hours early, I felt relaxed for once. Having checked in, I went to find a coffee. Distracted by my phone, I didn't hear the boarding call. Suddenly realising the gate was closing, I ran through the terminal. Reaching the desk out of breath, I just made it. Shaken but relieved, I promised myself never to scroll at the gate again."
    },
    "picture": {
      "intro": "Опиши сцену причастными оборотами: что человек делает (-ing), что с ним происходит (-ed), что он уже сделал (having done).",
      "emoji": "🚉🎫🏃",
      "prompt": "Опиши картинку, сшивая действия причастными оборотами. Следи, чтобы подлежащее выполняло причастие.",
      "hint": "Используй: Clutching his ticket, he… ; Having missed the train, … ; Surrounded by crowds, … ; Built long ago, the station … .",
      "example": "Clutching his ticket, a young man hurries along the crowded platform. Having just missed one train, he is determined to catch the next. Surrounded by rushing commuters, he checks the board nervously. Built over a century ago, the grand old station towers above the bustle.",
      "img": "img/b2/day-19.jpg",
      "credit": "Фото: Amsterdam free photos &amp; pictures of the Dutch city · CC0 · <a href=\"https://www.flickr.com/photos/104736837@N03/27657675041\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "20": {
    "day": 20,
    "week": "03",
    "level": "B2",
    "themeRu": "Который / с которым",
    "themeEn": "Relative clauses",
    "intro": "Вчерашние причастия сшивали предложения; сегодня берём главный «клей» сложной фразы — относительные обороты с <b>who, which, that, whom, whose</b>. На B1 ты уже строил определяющие фразы: <i>the man <b>who</b> lives next door</i>. Добавим четыре по-настоящему B2-приёма: <b>non-defining</b> обороты с запятыми (добавочная, «между прочим» информация), <b>предлог + which/whom</b> (the house <b>in which</b> I grew up), <b>reduced relatives</b> (the woman <b>sitting</b> there — продолжение вчерашних причастий) и <b>whose</b> для принадлежности. И сразу про русскую ловушку: мы говорим «человек, с которым я говорил <u>с ним</u>» — и тащим в английский лишнее <i>him</i>. Запятые, кстати, умеют менять смысл предложения целиком. Поехали разбираться.",
    "introAudio": "Вчерашние причастия сшивали предложения; сегодня берём главный клей сложной фразы — относительные обороты с who, which, that, whom, whose. На B1 ты уже строил определяющие фразы: the man who lives next door. Добавим четыре по-настоящему B2-приёма: non-defining обороты с запятыми, добавочная, между прочим, информация; предлог плюс which или whom, the house in which I grew up; reduced relatives, свёрнутые обороты с причастием, the woman sitting there, продолжение вчерашних причастий; и whose для принадлежности. И сразу про русскую ловушку: мы говорим человек, с которым я говорил с ним, и тащим в английский лишнее him. Запятые, кстати, умеют менять смысл предложения целиком. Поехали разбираться.",
    "goals": [
      "различать defining (без запятых, сужает) и non-defining (с запятыми, добавляет) обороты",
      "строить «предлог + which/whom» в формальном регистре (the house in which…) и его разговорную версию",
      "сворачивать относительный оборот в причастие (the woman sitting there) — мостик из Дня 19",
      "убирать лишнее местоимение-дубль (the man who I spoke to, без «with him»)"
    ],
    "learned": [
      "Научился(лась) различать defining (без запятых, сужает) и non-defining (с запятыми, добавляет) обороты",
      "Научился(лась) строить «предлог + which/whom» в формальном регистре (the house in which…) и его разговорную версию",
      "Научился(лась) сворачивать относительный оборот в причастие (the woman sitting there) — мостик из Дня 19",
      "Научился(лась) убирать лишнее местоимение-дубль (the man who I spoke to, без «with him»)"
    ],
    "review": {
      "intro": "Утренний прогрев. Сегодняшняя тема стоит на двух опорах: на defining-оборотах из B1 (who/which/that) и на вчерашних причастиях из Дня 19 — из них вырастут «свёрнутые» относительные обороты. Три задачи для разгона.",
      "introAudio": "Утренний прогрев. Сегодняшняя тема стоит на двух опорах: на defining-оборотах из B1, who, which, that, и на вчерашних причастиях из Дня 19 — из них вырастут свёрнутые относительные обороты. Три задачи для разгона.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни defining-оборот из B1 — who для людей, which для вещей.",
          "q": "«Это книга, ___ изменила мою жизнь» —",
          "opts": [
            "the book who changed my life",
            "the book which changed my life",
            "the book what changed my life"
          ],
          "answer": 1,
          "explain": "Для предметов — <b>which</b> (или that). <b>who</b> — для людей, <b>what</b> в относительных оборотах не используется."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни День 19 — причастие вместо придаточного.",
          "q": "«the man who is waiting outside» можно свернуть в…",
          "opts": [
            "the man waited outside",
            "the man waiting outside",
            "the man to wait outside"
          ],
          "answer": 1,
          "explain": "who is waiting → активное причастие <b>waiting</b>. Сегодня мы разовьём это в reduced relatives."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши пропущенное относительное слово (для людей, подлежащее).",
          "q": "She's the doctor ___ saved my father's life. (который)",
          "accept": [
            "who",
            "that"
          ],
          "placeholder": "the doctor ... saved..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · запятые решают всё",
        "title": "Defining vs non-defining — <em>запятые меняют смысл</em>",
        "paras": [
          "Есть два типа относительных оборотов, и разница — в запятых. <b>Defining</b> (без запятых) <u>сужает</u>: он отвечает на «какой именно?» и его нельзя выкинуть без потери смысла. <i>The students who failed must retake the exam.</i> — только те, кто провалил.",
          "<b>Non-defining</b> (с запятыми) — это добавочная информация «между прочим»; убери её, и главное предложение всё равно останется полным. <i>The students, who failed, must retake the exam.</i> — все студенты (а они, кстати, провалили). Запятые буквально перевернули смысл.",
          "Два железных правила non-defining: (1) нельзя <b>that</b> — только who/which/whom/whose; (2) местоимение нельзя опустить. В речи запятые слышны как <u>паузы</u>, а на письме без них фраза читается совсем иначе."
        ],
        "audio": "Есть два типа относительных оборотов, и разница в запятых. Defining, без запятых, сужает: он отвечает на «какой именно?» и его нельзя выкинуть. The students who failed must retake the exam — только те, кто провалил. Non-defining, с запятыми, — добавочная информация между прочим; убери её, и предложение останется полным. The students, who failed, must retake the exam — все студенты, а они, кстати, провалили. Два правила non-defining: нельзя that, только who, which, whom, whose; и местоимение нельзя опустить. В речи запятые слышны как паузы.",
        "table": {
          "rows": [
            [
              "My brother who lives in Rome…",
              "тот из братьев, что в Риме (значит, есть и другие)"
            ],
            [
              "My brother, who lives in Rome,…",
              "мой (единственный) брат — и он, кстати, в Риме"
            ],
            [
              "non-defining: НЕ that",
              "…, who… / …, which… (не «, that…»)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Мой коллега, который говорит по-китайски, помог нам.",
            "en": "My colleague, <b>who</b> speaks Chinese, helped us.",
            "gloss": "non-defining: добавочная инфо, в запятых",
            "say": "My colleague, who speaks Chinese, helped us."
          },
          {
            "ru": "Дом, который мы купили в прошлом году, нуждается в ремонте.",
            "en": "The house, <b>which</b> we bought last year, needs work.",
            "gloss": "запятые → не that, можно which",
            "say": "The house, which we bought last year, needs work."
          },
          {
            "ru": "Он опоздал на поезд, что испортило ему весь день.",
            "en": "He missed the train, <b>which</b> ruined his whole day.",
            "gloss": "which относится ко всей фразе целиком",
            "say": "He missed the train, which ruined his whole day."
          }
        ],
        "mistakes": [
          {
            "wrong": "My father, that is a doctor, retired",
            "right": "My father, <b>who</b> is a doctor, retired",
            "why": "в non-defining (в запятых) that запрещён → who"
          },
          {
            "wrong": "Paris which is the capital of France is huge",
            "right": "Paris, <b>which</b> is the capital of France, is huge",
            "why": "добавочная инфо об уникальном объекте → нужны запятые"
          }
        ],
        "mnemonic": "🔪 Запятые = «между прочим» (можно выбросить, не ставь that). Без запятых = «какой именно».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> у тебя один-единственный начальник → добавочная инфо в запятых.",
            "q": "«Мой начальник, который очень добр, дал мне выходной» —",
            "opts": [
              "My boss who is very kind gave me a day off.",
              "My boss, who is very kind, gave me a day off.",
              "My boss, that is very kind, gave me a day off."
            ],
            "answer": 1,
            "explain": "Начальник один → добавочная инфо в запятых, с <b>who</b> (не that)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> определи смысл — выбери фразу, где провалили ВСЕ студенты.",
            "q": "Где речь обо ВСЕХ студентах?",
            "opts": [
              "The students who failed must retake it.",
              "The students, who failed, must retake it."
            ],
            "answer": 1,
            "explain": "Запятые = добавочная инфо «они, кстати, все провалили» → речь обо всех."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши относительное слово для non-defining (вещь, в запятых).",
            "q": "Venice, ___ I visited last year, is sinking slowly. (который)",
            "accept": [
              "which"
            ],
            "placeholder": "Venice, ... I visited..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · предлог + which/whom",
        "title": "<em>the house in which I grew up</em> — предлог уезжает вперёд",
        "paras": [
          "Когда в обороте есть предлог, у него два места. <b>Формально</b> предлог встаёт перед <b>which</b> (вещи) или <b>whom</b> (люди): <i>the house <b>in which</b> I grew up</i>, <i>the man <b>to whom</b> I spoke</i>. Это регистр эссе, деловых писем, докладов.",
          "<b>Разговорно</b> предлог остаётся в конце, а which/whom часто опускают: <i>the house <b>I grew up in</b></i>, <i>the man <b>I spoke to</b></i>. Оба варианта верны — выбирай по регистру.",
          "Важно: после предлога <u>только</u> whom, не who (<i>to whom</i>, не «to who»), и <u>только</u> which для вещей (не that): «the box <b>in which</b>…», нельзя «in that»."
        ],
        "audio": "Когда в обороте есть предлог, у него два места. Формально предлог встаёт перед which для вещей или whom для людей: the house in which I grew up, the man to whom I spoke. Это регистр эссе и деловых писем. Разговорно предлог остаётся в конце, а which или whom часто опускают: the house I grew up in, the man I spoke to. После предлога только whom, не who, и только which для вещей, не that.",
        "table": {
          "rows": [
            [
              "the man to whom I spoke",
              "формально: предлог + whom"
            ],
            [
              "the man (who) I spoke to",
              "разговорно: предлог в конце"
            ],
            [
              "the tool with which she fixed it",
              "формально: предлог + which (вещь)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Это коллега, с которым я работаю.",
            "en": "This is the colleague <b>with whom</b> I work.",
            "gloss": "формально: with + whom",
            "say": "This is the colleague with whom I work."
          },
          {
            "ru": "Это коллега, с которым я работаю. (разговорно)",
            "en": "This is the colleague <b>I work with</b>.",
            "gloss": "разговорно: предлог в конце, who опущен",
            "say": "This is the colleague I work with."
          },
          {
            "ru": "Компания, в которой она работает, расширяется.",
            "en": "The company <b>for which</b> she works is expanding.",
            "gloss": "for + which (вещь/организация)",
            "say": "The company for which she works is expanding."
          }
        ],
        "mistakes": [
          {
            "wrong": "the man to who I spoke",
            "right": "the man <b>to whom</b> I spoke",
            "why": "после предлога — только whom, не who"
          },
          {
            "wrong": "the house in that I grew up",
            "right": "the house <b>in which</b> I grew up",
            "why": "после предлога that невозможен → in which"
          }
        ],
        "mnemonic": "📐 Формально: предлог + which/whom впереди. Разговорно: предлог в хвосте.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> формальный регистр — предлог встаёт перед местоимением.",
            "q": "Формально: «учитель, у которого я учился» —",
            "opts": [
              "the teacher from who I learned",
              "the teacher from whom I learned",
              "the teacher from that I learned"
            ],
            "answer": 1,
            "explain": "Предлог + <b>whom</b> для людей: from whom."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери разговорный вариант (предлог в конце).",
            "q": "Собери: «the woman I was talking to»",
            "want": "the woman I was talking to",
            "answer": "the woman I was talking to"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши формальную версию с предлогом + which.",
            "q": "Дом, в котором я вырос. (the house ___ ___ I grew up — два слова)",
            "accept": [
              "in which",
              "the house in which i grew up"
            ],
            "placeholder": "the house ... ... I grew up"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · reduced relatives",
        "title": "<em>the woman sitting there</em> — оборот сворачивается в причастие",
        "paras": [
          "Прямой мостик из Дня 19. Относительный оборот часто можно <u>сжать</u> до причастия, выбросив who/which + be. Активный смысл → <b>-ing</b>: <i>the woman <b>who is sitting</b> there</i> → <i>the woman <b>sitting</b> there</i>. Пассивный смысл → <b>-ed / 3-я форма</b>: <i>the report <b>which was written</b> yesterday</i> → <i>the report <b>written</b> yesterday</i>.",
          "Это экономит слова и звучит зрело: <i>the people <b>waiting</b> outside</i>, <i>the parcel <b>delivered</b> this morning</i>, <i>the questions <b>asked</b> by students</i>.",
          "Свернуть можно не всегда: только когда внутри был глагол <b>be</b> (или длительное/пассивное действие). «The man who owns the shop» так просто не сжать — здесь нет be, и причастие <i>owning</i> звучит неуклюже."
        ],
        "audio": "Прямой мостик из Дня 19. Относительный оборот часто можно сжать до причастия, выбросив who или which плюс be. Активный смысл — -ing: the woman who is sitting there превращается в the woman sitting there. Пассивный смысл — -ed или третья форма: the report which was written yesterday становится the report written yesterday. Это экономит слова и звучит зрело. Свернуть можно, когда внутри был глагол be.",
        "table": {
          "rows": [
            [
              "who is sitting → sitting",
              "активное: the woman sitting there"
            ],
            [
              "which was written → written",
              "пассивное: the report written yesterday"
            ],
            [
              "who are waiting → waiting",
              "the people waiting outside"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Мужчина, стоящий у двери, — мой дядя.",
            "en": "The man <b>standing</b> by the door is my uncle.",
            "gloss": "who is standing → standing",
            "say": "The man standing by the door is my uncle."
          },
          {
            "ru": "Письмо, отправленное на прошлой неделе, потерялось.",
            "en": "The letter <b>sent</b> last week got lost.",
            "gloss": "which was sent → sent (пассив)",
            "say": "The letter sent last week got lost."
          },
          {
            "ru": "Большинство людей, приглашённых на свадьбу, пришли.",
            "en": "Most of the people <b>invited</b> to the wedding came.",
            "gloss": "who were invited → invited",
            "say": "Most of the people invited to the wedding came."
          }
        ],
        "mistakes": [
          {
            "wrong": "the report writing yesterday",
            "right": "the report <b>written</b> yesterday",
            "why": "отчёт написали (пассив) → -ed/3-я форма, не -ing"
          },
          {
            "wrong": "the people waited outside (про тех, кто ждёт сейчас)",
            "right": "the people <b>waiting</b> outside",
            "why": "они сами ждут (актив) → -ing, а не пассивное -ed"
          }
        ],
        "mnemonic": "✂️ Выкинь «who/which + be» → останется причастие: sitting / written.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сверни «which is parked» — пассив, машину припарковали → -ed/3-я форма.",
            "q": "«the car which is parked outside» в сжатом виде —",
            "opts": [
              "the car parking outside",
              "the car parked outside",
              "the car to park outside"
            ],
            "answer": 1,
            "explain": "Машину припарковали (пассив) → <b>parked</b> outside."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери сжатый оборот (активное -ing).",
            "q": "Собери: «the people waiting for the bus»",
            "want": "the people waiting for the bus",
            "answer": "the people waiting for the bus"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> сверни «the questions which were asked by students» в причастие. ask → asked.",
            "q": "Вопросы, заданные студентами. (the questions ___ by students)",
            "accept": [
              "asked",
              "the questions asked by students"
            ],
            "placeholder": "the questions ... by students"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка + whose",
        "title": "Лишнее <em>him</em>: «the man who I spoke with him» ✗",
        "paras": [
          "Главная русская ловушка. По-русски мы дублируем: «человек, с которым я говорил <u>с ним</u>», «книга, которую я её читал». Относительное слово <i>who/which</i> уже занимает место объекта, поэтому второе местоимение лишнее. <b>The man who I spoke to ✓</b> — без <i>him</i>. <b>The book which I read ✓</b> — без <i>it</i>.",
          "Ещё один кирпичик — <b>whose</b> (чей): он показывает принадлежность и для людей, и для вещей. <i>The writer <b>whose</b> book won the prize…</i> = писатель, чья книга… <i>A house <b>whose</b> roof is leaking…</i> = дом, крыша которого протекает.",
          "Собери все правила дня в один чек-лист: запятые меняют смысл; в non-defining не ставь <i>that</i>; местоимение-дубль (him/it) выбрасывай; предлог + <i>whom/which</i> формально; обороты с <i>be</i> сворачивай в причастие."
        ],
        "audio": "Главная русская ловушка. По-русски мы дублируем: человек, с которым я говорил с ним; книга, которую я её читал. Относительное слово who или which уже занимает место объекта, поэтому второе местоимение лишнее. The man who I spoke to — без him. The book which I read — без it. Ещё один кирпичик — whose, чей: принадлежность и для людей, и для вещей. The writer whose book won the prize. A house whose roof is leaking. Запомни чек-лист: запятые меняют смысл, в non-defining не ставь that, местоимение-дубль выбрасывай.",
        "table": {
          "rows": [
            [
              "the man who I spoke with him ✗",
              "лишнее him — who уже объект"
            ],
            [
              "the man who I spoke to ✓",
              "одно относительное слово, без дубля"
            ],
            [
              "the writer whose book won…",
              "whose = чей (принадлежность)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Девушка, которую я встретил, говорит на пяти языках.",
            "en": "The girl <b>who</b> I met speaks five languages.",
            "gloss": "без «her» — who уже объект",
            "say": "The girl who I met speaks five languages."
          },
          {
            "ru": "Это фильм, о котором все говорят.",
            "en": "This is the film <b>which</b> everyone is talking about.",
            "gloss": "предлог about — в конец, «it» не нужно",
            "say": "This is the film which everyone is talking about."
          },
          {
            "ru": "Это сосед, чья собака лает всю ночь.",
            "en": "He's the neighbour <b>whose</b> dog barks all night.",
            "gloss": "whose = чей (принадлежность)",
            "say": "He's the neighbour whose dog barks all night."
          }
        ],
        "mistakes": [
          {
            "wrong": "the man who I spoke with him",
            "right": "the man <b>who I spoke with</b>",
            "why": "who уже занимает место объекта → лишнее him убираем"
          },
          {
            "wrong": "the book which I read it was great",
            "right": "the book <b>which I read</b> was great",
            "why": "which уже объект → дубль it лишний"
          }
        ],
        "mnemonic": "🚫 Одно относительное слово — без дубля him/it. whose = чей.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> убери лишнее местоимение-дубль.",
            "q": "«Девушка, с которой я танцевал, ушла» —",
            "opts": [
              "The girl who I danced with her left.",
              "The girl who I danced with left.",
              "The girl who I danced with her, she left."
            ],
            "answer": 1,
            "explain": "who уже объект → лишнее <b>her</b> убираем."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> принадлежность — выбери whose.",
            "q": "«Это студент, чьё эссе победило» —",
            "opts": [
              "the student who essay won",
              "the student whose essay won",
              "the student which essay won"
            ],
            "answer": 1,
            "explain": "Принадлежность (чьё эссе) → <b>whose</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> напиши без дубля. Не добавляй «it» в конце.",
            "q": "Это книга, которую я искал. (This is the book ___ I was looking for.)",
            "accept": [
              "that",
              "which",
              "this is the book that i was looking for",
              "this is the book which i was looking for",
              "this is the book i was looking for"
            ],
            "placeholder": "This is the book ... I was looking for"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Лена показывает Максу фото со встречи выпускников. Слушай относительные обороты: defining без запятых, non-defining с паузами, whose и свёрнутые причастия. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Lena",
          "name": "Лена",
          "side": "left",
          "en": "That's Marta, who now runs a startup in Berlin.",
          "ru": "Это Марта, которая теперь руководит стартапом в Берлине.",
          "words": [
            [
              "who now runs",
              "которая теперь руководит (non-defining, добавочная инфо)"
            ],
            [
              "startup",
              "стартап"
            ]
          ]
        },
        {
          "who": "Max",
          "name": "Макс",
          "side": "right",
          "en": "And the man standing next to her?",
          "ru": "А мужчина, стоящий рядом с ней?",
          "words": [
            [
              "the man standing",
              "мужчина, стоящий (свёрнутый оборот = who is standing)"
            ]
          ]
        },
        {
          "who": "Lena",
          "name": "Лена",
          "side": "left",
          "en": "That's the teacher to whom we owe everything, honestly.",
          "ru": "Это учитель, которому мы всем обязаны, честно.",
          "words": [
            [
              "to whom we owe",
              "которому мы обязаны (формальный предлог + whom)"
            ]
          ]
        },
        {
          "who": "Max",
          "name": "Макс",
          "side": "right",
          "en": "Wasn't he the one whose lessons everyone loved?",
          "ru": "Это не тот, чьи уроки все обожали?",
          "words": [
            [
              "whose lessons",
              "чьи уроки (принадлежность)"
            ]
          ]
        },
        {
          "who": "Lena",
          "name": "Лена",
          "side": "left",
          "en": "Exactly. He retired last year, which made all of us a little sad.",
          "ru": "Именно. Он ушёл на пенсию в прошлом году, что нас всех немного расстроило.",
          "words": [
            [
              "which made us sad",
              "что нас расстроило (which о всей фразе)"
            ],
            [
              "retired",
              "ушёл на пенсию"
            ]
          ]
        },
        {
          "who": "Max",
          "name": "Макс",
          "side": "right",
          "en": "Send me the photo you just showed me — I'd love a copy.",
          "ru": "Пришли мне фото, которое ты только что показала, — хочу копию.",
          "words": [
            [
              "the photo you showed",
              "фото, которое ты показала (опущенное which)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Относительные слова и связки уровня B2. Повтори вслух и отметь, defining это или non-defining по смыслу.",
      "items": [
        {
          "en": "whom",
          "ru": "которого/которому (формально, для людей)",
          "ex": "The candidate whom we hired starts on Monday."
        },
        {
          "en": "whose",
          "ru": "чей, которого (принадлежность)",
          "ex": "An author whose books I admire is visiting."
        },
        {
          "en": "..., which",
          "ru": "что (комментарий ко всей фразе)",
          "ex": "He arrived late, which annoyed everyone."
        },
        {
          "en": "in which",
          "ru": "в котором (формальный предлог + which)",
          "ex": "The era in which they lived was turbulent."
        },
        {
          "en": "the one who/that",
          "ru": "тот, который",
          "ex": "She's the one who suggested the idea."
        },
        {
          "en": "non-defining clause",
          "ru": "добавочный оборот (в запятых)",
          "ex": "My laptop, which is new, keeps crashing."
        },
        {
          "en": "to run (a company)",
          "ru": "руководить, управлять (компанией)",
          "ex": "The woman who runs the firm is only thirty."
        },
        {
          "en": "to owe",
          "ru": "быть обязанным; быть должным",
          "ex": "The mentor to whom I owe my career retired."
        },
        {
          "en": "turbulent",
          "ru": "бурный, неспокойный",
          "ex": "It was a turbulent period, which changed everything."
        },
        {
          "en": "to admire",
          "ru": "восхищаться, ценить",
          "ex": "An artist whose work I admire lives nearby."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай. Заметь, как обороты сужают (defining), добавляют «между прочим» (non-defining), сворачиваются в причастия и используют whose.",
      "title": "The house on the hill",
      "sentences": [
        "The house, which had stood empty for years, finally had new owners.",
        "The couple who bought it were architects from the city.",
        "They loved the old staircase, the wood of which had darkened with age.",
        "Most of the rooms, painted in dull greys, needed a complete makeover.",
        "Their neighbour, whose family had lived there for generations, told them its history.",
        "The man to whom the land once belonged had planted the garden himself.",
        "The trees standing along the path were over a century old.",
        "Restoring the house, which took two long years, became the project of their lives."
      ],
      "translation": "Дом, который годами стоял пустым, наконец обрёл новых хозяев. Пара, купившая его, — архитекторы из города. Им полюбилась старая лестница, дерево которой потемнело от времени. Большинство комнат, выкрашенных в тусклые серые тона, требовали полной переделки. Их сосед, чья семья жила там поколениями, рассказал им его историю. Человек, которому когда-то принадлежала эта земля, сам разбил сад. Деревья, стоящие вдоль тропинки, были старше века. Реставрация дома, занявшая два долгих года, стала проектом всей их жизни."
    },
    "drag": {
      "intro": "Соедини относительное слово/приём с его ролью.",
      "pairs": [
        [
          "who / that",
          "люди в defining-обороте"
        ],
        [
          ", which ,",
          "добавочная инфо (non-defining, в запятых)"
        ],
        [
          "to whom",
          "формально: предлог + whom"
        ],
        [
          "whose",
          "принадлежность: чей"
        ],
        [
          "sitting / written",
          "свёрнутый оборот (reduced relative)"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по относительным оборотам. Шесть вопросов — и «который / с которым» под контролем.",
      "items": [
        {
          "q": "Где речь о единственном брате (добавочная инфо)?",
          "opts": [
            "My brother who lives in Rome is a chef.",
            "My brother, who lives in Rome, is a chef."
          ],
          "answer": 1,
          "explain": "Запятые = non-defining = «мой (единственный) брат, кстати, в Риме»."
        },
        {
          "q": "В non-defining обороте нельзя использовать…",
          "opts": [
            "who",
            "that",
            "which"
          ],
          "answer": 1,
          "explain": "В обороте с запятыми <b>that</b> запрещён — только who/which/whom/whose."
        },
        {
          "q": "Формально: «коллега, с которым я работаю» —",
          "opts": [
            "the colleague with who I work",
            "the colleague with whom I work",
            "the colleague with that I work"
          ],
          "answer": 1,
          "explain": "После предлога — только <b>whom</b>: with whom."
        },
        {
          "q": "Сверни «the report which was written yesterday»:",
          "opts": [
            "the report writing yesterday",
            "the report written yesterday",
            "the report wrote yesterday"
          ],
          "answer": 1,
          "explain": "Пассив → -ed/3-я форма: <b>written</b> yesterday."
        },
        {
          "q": "Убери лишнее: «the man who I spoke ___»",
          "opts": [
            "to him",
            "to",
            "with him to"
          ],
          "answer": 1,
          "explain": "who уже объект → дубль him лишний: «the man who I spoke to»."
        },
        {
          "q": "«Писатель, чья книга победила» —",
          "opts": [
            "the writer who book won",
            "the writer whose book won",
            "the writer which book won"
          ],
          "answer": 1,
          "explain": "Принадлежность (чья книга) → <b>whose</b>."
        }
      ]
    },
    "essay": {
      "intro": "Твоя очередь — опиши человека или место, нанизывая относительные обороты.",
      "prompt": "Напиши 5–6 предложений о человеке, который на тебя повлиял, или о важном для тебя месте. Используй хотя бы один non-defining оборот (в запятых), одно whose и один свёрнутый оборот (причастие).",
      "hint": "Структуры: …, who … , … ; the person whose … ; the place in which … ; the man standing / the book written … ; …, which made me … .",
      "example": "My grandmother, who grew up in a small village, shaped the way I see the world. She lived in a house whose garden was famous in the neighbourhood. The lessons she taught me, often shared while cooking, still guide me today. She rarely spoke about the hardships through which she had lived. The advice she gave me, which I once ignored, turned out to be priceless. People meeting her for the first time always remembered her warmth."
    },
    "picture": {
      "intro": "Опиши сцену, нанизывая относительные обороты: кто что делает, кому что принадлежит, что добавить «между прочим».",
      "emoji": "🏡🌳🔑",
      "prompt": "Опиши картинку с помощью относительных оборотов. Используй defining, non-defining (в запятых), whose и свёрнутый оборот.",
      "hint": "Используй: the house, which …, … ; the couple who … ; the man standing … ; a garden whose … ; the path leading … .",
      "example": "The old house on the hill, which had been empty for years, finally looks alive again. The couple who bought it are restoring every room themselves. The man standing on the ladder is fixing a window whose frame had rotted. The garden, which they replanted last spring, is already full of colour. It is clearly the project to which they have given their hearts.",
      "img": "img/b2/day-20.jpg",
      "credit": "Фото: USDAgov · Public Domain · <a href=\"https://www.flickr.com/photos/41284017@N08/26750023266\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "21": {
    "day": 21,
    "week": "03",
    "level": "B2",
    "themeRu": "Повторение №3",
    "themeEn": "Review 3",
    "intro": "Третья глава B2 закрывается, и сегодня почти всё — про вспоминание: сводим всю неделю в одну работающую систему. За эти дни ты прошёл серьёзный B2-арсенал: <b>продвинутый пассив</b> во всех временах и модальный (День 15), <b>безличные обороты</b> «It is said that…» (День 16) и <b>личные</b> «He is said to…» (День 17), <b>каузатив</b> «have it done» (День 18), <b>причастные обороты</b> (День 19) и <b>относительные обороты</b> (День 20). Сегодня мало нового — много вспоминаем. Два слабых места под особым прицелом: <b>have done</b> (сам сделал) против <b>have sth done</b> (тебе сделали) и <b>defining</b> против <b>non-defining</b> (запятые меняют смысл). В конце — большой тест и сценка. Поехали закреплять.",
    "introAudio": "Третья глава B2 закрывается, и сегодня почти всё про вспоминание: сводим всю неделю в одну работающую систему. За эти дни ты прошёл серьёзный B2-арсенал: продвинутый пассив во всех временах и модальный, День 15; безличные обороты It is said that, День 16, и личные He is said to, День 17; каузатив have it done, День 18; причастные обороты, День 19, и относительные обороты, День 20. Сегодня мало нового — много вспоминаем. Два слабых места под особым прицелом: have done, сам сделал, против have something done, тебе сделали; и defining против non-defining, где запятые меняют смысл. В конце — большой тест и сценка. Поехали закреплять.",
    "goals": [
      "уверенно строить пассив во всех временах + модальный (must be done, could have been done) и репортинг",
      "не путать have done (сделал сам) с have/get sth done (сделал кто-то для тебя)",
      "осознанно ставить или убирать запятые: defining сужает, non-defining добавляет",
      "связать всё в одном тексте: пассив + репортинг + каузатив + причастные и относительные обороты"
    ],
    "learned": [
      "Научился(лась) уверенно строить пассив во всех временах + модальный (must be done, could have been done) и репортинг",
      "Перестал(а) путать have done (сделал сам) с have/get sth done (сделал кто-то для тебя)",
      "Научился(лась) осознанно ставить или убирать запятые: defining сужает, non-defining добавляет",
      "Связал(а) всё в одном тексте: пассив + репортинг + каузатив + причастные и относительные обороты"
    ],
    "review": {
      "intro": "Сегодня повторение — это и есть главный «двигатель» дня, поэтому разминка большая: по задаче почти на каждую опору недели. Пройди их не спеша — это карта того, что мы закрепим ниже.",
      "introAudio": "Сегодня повторение — это и есть главный двигатель дня, поэтому разминка большая: по задаче почти на каждую опору недели. Пройди их не спеша — это карта того, что мы закрепим ниже.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> День 15 — модальный пассив (must + be + 3-я форма).",
          "q": "«Эту работу нужно закончить сегодня» —",
          "opts": [
            "The work must finish today.",
            "The work must be finished today.",
            "The work must been finished today."
          ],
          "answer": 1,
          "explain": "Модальный пассив: must + <b>be</b> + 3-я форма → must be finished. Работу заканчивают, а не она сама."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> День 16 — безличный репортинг.",
          "q": "«Говорят, что цены вырастут» —",
          "opts": [
            "They say me prices will rise.",
            "It is said that prices will rise.",
            "It says that prices will rise."
          ],
          "answer": 1,
          "explain": "Безличное «говорят, что» → <b>It is said that</b> + предложение."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> День 17 — личный репортинг с инфинитивом.",
          "q": "«Считается, что он очень богат» —",
          "opts": [
            "He is said that he is very rich.",
            "He is said to be very rich.",
            "He is said being very rich."
          ],
          "answer": 1,
          "explain": "Личный репортинг: He is said <b>to be</b> rich (не «that he is»)."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> День 18 — каузатив (услугу выполнил другой).",
          "q": "«Я постриглась (в салоне)» —",
          "opts": [
            "I cut my hair.",
            "I had my hair cut.",
            "I have cut my hair."
          ],
          "answer": 1,
          "explain": "Услугу сделал мастер → каузатив: <b>had my hair cut</b> (have + объект + 3-я форма)."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> День 19 — сверни «Because she felt tired» в причастие. feel → feeling.",
          "q": "Чувствуя усталость, она рано легла. (___ tired, she went to bed early.)",
          "accept": [
            "feeling tired she went to bed early",
            "feeling tired, she went to bed early"
          ],
          "placeholder": "Feeling tired, she ..."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Сводка 1 · пассив и репортинг",
        "title": "Пассив во всех временах + «говорят, что…»",
        "paras": [
          "Соберём дни 15–17. <b>Пассив</b> = форма глагола <i>be</i> в нужном времени + 3-я форма: <i>is done · was done · has been done · will be done · is being done</i>. Модальный пассив — модал + <i>be</i> + 3-я форма: <b>must be done, could have been done</b>. Разговорно вместо be часто <b>get</b>: <i>he got fired</i>.",
          "<b>Безличный репортинг</b> (День 16): «говорят/считают, что…» → <b>It is said / believed / thought that</b> + предложение. <b>Личный репортинг</b> (День 17): <b>He is said / believed to</b> + инфинитив (одновременность) или <b>to have + 3-я форма</b> (раньше).",
          "Две вечные ловушки: непереходные глаголы пассива не имеют — «it <s>was happened</s>» ✗ (просто <i>it happened</i>); и «говорят мне» — это не «<s>they say me</s>», а <b>I am told</b> / <b>It is said</b>."
        ],
        "audio": "Соберём дни 15–17. Пассив — это форма be в нужном времени плюс третья форма: is done, was done, has been done, will be done. Модальный пассив — модал плюс be плюс третья форма: must be done, could have been done. Разговорно вместо be часто get: he got fired. Безличный репортинг: It is said that плюс предложение. Личный: He is said to плюс инфинитив, или to have плюс третья форма для более раннего. Две ловушки: непереходные глаголы пассива не имеют, it was happened — ошибка; и говорят мне — это I am told, не they say me.",
        "table": {
          "rows": [
            [
              "has been done / will be done",
              "пассив в разных временах (be + 3-я форма)"
            ],
            [
              "must be / could have been done",
              "модальный пассив"
            ],
            [
              "It is said that he left.",
              "безличный репортинг (День 16)"
            ],
            [
              "He is said to have left.",
              "личный репортинг, предшествование (День 17)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Договор уже подписан.",
            "en": "The contract <b>has been signed</b>.",
            "gloss": "пассив present perfect",
            "say": "The contract has been signed."
          },
          {
            "ru": "Это могли сделать раньше.",
            "en": "It <b>could have been done</b> earlier.",
            "gloss": "модальный пассив прошлого",
            "say": "It could have been done earlier."
          },
          {
            "ru": "Считается, что она уже уехала из страны.",
            "en": "She <b>is believed to have left</b> the country.",
            "gloss": "личный репортинг + перфектный инфинитив",
            "say": "She is believed to have left the country."
          }
        ],
        "mistakes": [
          {
            "wrong": "The accident was happened at night",
            "right": "The accident <b>happened</b> at night",
            "why": "happen непереходный → пассива нет, просто happened"
          },
          {
            "wrong": "They say me that the shop is closed",
            "right": "<b>I am told</b> / <b>It is said</b> that the shop is closed",
            "why": "«говорят мне» → I am told, а не «they say me»"
          }
        ],
        "mnemonic": "🔁 be + 3-я форма везде. Говорят, что… = It is said that… ; считают X… = X is said to…",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> пассив present perfect (be в форме has been).",
            "q": "«Окно разбили (только что)» —",
            "opts": [
              "The window has broken.",
              "The window has been broken.",
              "The window was break."
            ],
            "answer": 1,
            "explain": "Пассив present perfect: has <b>been</b> + 3-я форма → has been broken."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери безличный репортинг (День 16).",
            "q": "Собери: «It is believed that the bridge is unsafe»",
            "want": "It is believed that the bridge is unsafe",
            "answer": "It is believed that the bridge is unsafe"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> переделай «It is said that he is a genius» в личный репортинг (День 17).",
            "q": "Личная версия: He ___ ___ ___ ___ a genius. (4 слова)",
            "accept": [
              "is said to be",
              "he is said to be a genius"
            ],
            "placeholder": "He ... ... ... ... a genius"
          }
        ]
      },
      {
        "eyebrow": "Сводка 2 · ловушка дня",
        "title": "<em>have done</em> vs <em>have sth done</em> — кто сделал?",
        "paras": [
          "Первая именная ловушка повторения. <b>I have cut my hair</b> — я сам(а) взял ножницы и постригся. <b>I have had my hair cut</b> — меня постригли в салоне, услугу выполнил мастер. Каузатив: <b>have / get + объект + 3-я форма</b>.",
          "Русский почти всегда говорит активно — «мне постригли», «я починил машину» (а на деле в сервисе), — поэтому have/get sth done постоянно теряется. Решающий вопрос один: <u>ты сделал это сам или для тебя это сделал другой?</u>",
          "Запомни: между <i>have</i> и причастием стоит <b>объект</b> (то, над чем поработали). <i>have the car repaired, get the documents translated, have a tooth taken out.</i> Без объекта между ними — это уже обычный перфект, не каузатив."
        ],
        "audio": "Первая именная ловушка повторения. I have cut my hair — я сам постригся. I have had my hair cut — меня постригли в салоне. Каузатив: have или get плюс объект плюс третья форма. Русский говорит активно: мне постригли, я починил машину, хотя на деле в сервисе. Решающий вопрос: ты сделал это сам или для тебя сделал другой? Между have и причастием всегда стоит объект: have the car repaired, get the documents translated.",
        "table": {
          "rows": [
            [
              "I cut my hair.",
              "сам взял ножницы (сделал сам)"
            ],
            [
              "I had my hair cut.",
              "меня постригли (услуга мастера)"
            ],
            [
              "I'm getting the car repaired.",
              "машину чинят для меня (get-каузатив)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Я перекрасил кухню (нанял маляров).",
            "en": "I <b>had the kitchen repainted</b>.",
            "gloss": "услугу выполнили → have + объект + 3-я форма",
            "say": "I had the kitchen repainted."
          },
          {
            "ru": "Тебе стоит проверить глаза (у врача).",
            "en": "You should <b>get your eyes tested</b>.",
            "gloss": "get-каузатив",
            "say": "You should get your eyes tested."
          },
          {
            "ru": "Нам взломали машину (это сделали с нами).",
            "en": "We <b>had our car broken into</b>.",
            "gloss": "каузатив о неприятности, случившейся с нами",
            "say": "We had our car broken into."
          }
        ],
        "mistakes": [
          {
            "wrong": "I repaired my watch (в мастерской)",
            "right": "I <b>had my watch repaired</b>",
            "why": "часы починил мастер → каузатив have sth done"
          },
          {
            "wrong": "I had cut my hair (имея в виду «в салоне»)",
            "right": "I <b>had my hair cut</b>",
            "why": "нужен объект между have и причастием: have + my hair + cut"
          }
        ],
        "mnemonic": "💇 Сам — have done. Тебе сделали — have/get + объект + 3-я форма.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> услугу выполнил другой → каузатив.",
            "q": "«Вчера мне вырвали зуб» —",
            "opts": [
              "Yesterday I pulled out a tooth.",
              "Yesterday I had a tooth pulled out.",
              "Yesterday I have pulled a tooth."
            ],
            "answer": 1,
            "explain": "Зуб вырвал стоматолог → каузатив: <b>had a tooth pulled out</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> различи «сам» и «для меня».",
            "q": "Где человек сделал это САМ?",
            "opts": [
              "She had her dress made.",
              "She made her dress.",
              "She got her dress made."
            ],
            "answer": 1,
            "explain": "«She made her dress» — сшила сама. Варианты 1 и 3 — каузатив (сшил кто-то для неё)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши каузатив. Дом красят маляры. paint → painted.",
            "q": "Мы покрасили дом (нанятыми малярами). (We had the house ___.)",
            "accept": [
              "painted",
              "we had the house painted"
            ],
            "placeholder": "We had the house ..."
          }
        ]
      },
      {
        "eyebrow": "Сводка 3 · ловушка дня",
        "title": "Запятые решают: <em>defining</em> vs <em>non-defining</em> + обороты",
        "paras": [
          "Вторая именная ловушка. <b>Defining</b> (без запятых) сужает — «какой именно»; <b>non-defining</b> (с запятыми) добавляет «между прочим» и может быть выброшен. <i>The students who failed…</i> (только провалившие) vs <i>The students, who failed,…</i> (все — и они, кстати, провалили). В non-defining нельзя <b>that</b> и нельзя опускать местоимение.",
          "Сюда же — <b>причастные обороты</b> (День 19): <i>-ing</i> активное (Feeling tired…), <i>-ed</i> пассивное (Built in 1850…), <i>having done</i> предшествование. И <b>свёрнутые относительные</b> (День 20): <i>the woman <b>sitting</b> there</i>, <i>the report <b>written</b> yesterday</i>.",
          "И не забывай: причастие не должно «висеть» — подлежащее главного предложения обязано выполнять причастие. <i>Walking home, the rain started</i> ✗ → <i>Walking home, I got wet</i> ✓."
        ],
        "audio": "Вторая именная ловушка. Defining без запятых сужает — какой именно; non-defining с запятыми добавляет между прочим и может быть выброшен. The students who failed — только провалившие; The students, who failed — все, и они кстати провалили. В non-defining нельзя that и нельзя опускать местоимение. Сюда же причастные обороты: -ing активное, -ed пассивное, having done для предшествования. И свёрнутые относительные: the woman sitting there, the report written yesterday. Причастие не должно висеть: подлежащее обязано его выполнять.",
        "table": {
          "rows": [
            [
              "The man who called…",
              "defining: сужает, без запятых, можно that"
            ],
            [
              "Tom, who called,…",
              "non-defining: добавочное, в запятых, без that"
            ],
            [
              "Built in 1850, the house…",
              "причастный оборот (День 19)"
            ],
            [
              "the woman sitting there",
              "свёрнутый относительный (День 20)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Моя сестра, которая живёт в Праге, — врач.",
            "en": "My sister, <b>who</b> lives in Prague, is a doctor.",
            "gloss": "non-defining (одна сестра) → запятые, who",
            "say": "My sister, who lives in Prague, is a doctor."
          },
          {
            "ru": "Закончив проект, команда отметила это.",
            "en": "<b>Having finished</b> the project, the team celebrated.",
            "gloss": "перфектное причастие (День 19)",
            "say": "Having finished the project, the team celebrated."
          },
          {
            "ru": "Документ, подписанный вчера, уже отправлен.",
            "en": "The document <b>signed</b> yesterday has been sent.",
            "gloss": "свёрнутый относительный + пассив",
            "say": "The document signed yesterday has been sent."
          }
        ],
        "mistakes": [
          {
            "wrong": "My mother, that is a teacher, is kind",
            "right": "My mother, <b>who</b> is a teacher, is kind",
            "why": "в non-defining (в запятых) that запрещён → who"
          },
          {
            "wrong": "Walking home, the rain started",
            "right": "Walking home, <b>I</b> got caught in the rain",
            "why": "«висячее» причастие: домой шёл я, а не дождь"
          }
        ],
        "mnemonic": "🔪 Запятые = «между прочим» (не ставь that). Кто делает -ing? Только подлежащее.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> у тебя одна машина → добавочная инфо в запятых.",
            "q": "«Моя машина, которая совсем новая, всё время ломается» —",
            "opts": [
              "My car which is brand new keeps breaking down.",
              "My car, which is brand new, keeps breaking down.",
              "My car, that is brand new, keeps breaking down."
            ],
            "answer": 1,
            "explain": "Машина одна → non-defining: запятые + <b>which</b> (не that)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> найди «висячее» причастие (ошибку).",
            "q": "Где ошибка?",
            "opts": [
              "Opening the box, she found a letter.",
              "Opening the box, a letter fell out.",
              "Opening the box, I saw the gift."
            ],
            "answer": 1,
            "explain": "Коробку открывает не letter → подлежащее не совпадает. Это «висячее» причастие."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> сверни «the email which was sent this morning» в причастие. send → sent.",
            "q": "Письмо, отправленное сегодня утром, потерялось. (The email ___ this morning got lost.)",
            "accept": [
              "sent",
              "the email sent this morning got lost"
            ],
            "placeholder": "The email ... this morning got lost"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Сценка-повторение: Кейт рассказывает Полу про ремонт квартиры. Здесь живьём вся неделя 3 — каузатив, пассив, репортинг и обороты. Слушай и лови знакомые конструкции.",
      "lines": [
        {
          "who": "A",
          "en": "We finally had the whole flat redecorated last month.",
          "ru": "Мы наконец сделали ремонт во всей квартире в прошлом месяце (нанятыми мастерами)."
        },
        {
          "who": "B",
          "en": "Nice! Did you do it yourselves?",
          "ru": "Здорово! Сами делали?"
        },
        {
          "who": "A",
          "en": "No, we got professionals in. The kitchen, which was a disaster, was completely rebuilt.",
          "ru": "Нет, мы наняли профессионалов. Кухню, которая была кошмаром, полностью переделали."
        },
        {
          "who": "B",
          "en": "It is said that good builders are impossible to find these days.",
          "ru": "Говорят, хороших строителей сейчас не найти."
        },
        {
          "who": "A",
          "en": "True. Ours, recommended by a friend, turned out to be brilliant.",
          "ru": "Верно. Наши, которых посоветовал друг, оказались великолепны."
        },
        {
          "who": "B",
          "en": "Having seen the photos, I'd say it was worth every penny.",
          "ru": "Посмотрев фото, я бы сказал, что оно того стоило."
        }
      ]
    },
    "vocab": {
      "intro": "Слова и конструкции-якоря всей недели 3. Повтори вслух и вспомни, из какого дня каждая.",
      "items": [
        {
          "en": "to have sth done",
          "ru": "сделать что-то (чужими руками) — каузатив",
          "ex": "I need to have my laptop fixed."
        },
        {
          "en": "to get sth done",
          "ru": "добиться, чтобы что-то сделали (разговорно)",
          "ex": "She got her passport renewed."
        },
        {
          "en": "It is said that…",
          "ru": "говорят, что… (безличный репортинг)",
          "ex": "It is said that the company is in trouble."
        },
        {
          "en": "to be believed to…",
          "ru": "считаться (личный репортинг)",
          "ex": "He is believed to be abroad."
        },
        {
          "en": "to be carried out",
          "ru": "выполняться, проводиться (пассив)",
          "ex": "The research was carried out in 2020."
        },
        {
          "en": "to redecorate",
          "ru": "делать ремонт, переделывать (интерьер)",
          "ex": "They had the office redecorated."
        },
        {
          "en": "non-defining",
          "ru": "добавочный (оборот в запятых)",
          "ex": "My boss, who is retiring, gave a speech."
        },
        {
          "en": "having done",
          "ru": "сделав (перфектное причастие)",
          "ex": "Having read the contract, she signed it."
        },
        {
          "en": "recommended by",
          "ru": "рекомендованный (свёрнутый пассив)",
          "ex": "A book recommended by a friend changed my mind."
        },
        {
          "en": "worth every penny",
          "ru": "стоит каждой копейки (идиома)",
          "ex": "The trip was expensive but worth every penny."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай. Текст специально набит конструкциями недели 3: найди пассив, репортинг, каузатив, причастные и относительные обороты.",
      "title": "The renovated museum",
      "sentences": [
        "The old city museum, which had been closed for years, reopened last week.",
        "It is said that the building was once a grain warehouse.",
        "Damaged by a fire in the 1980s, it had stood empty ever since.",
        "The council finally had the whole structure restored by local craftsmen.",
        "The roof, which was leaking badly, was completely replaced.",
        "Having secured a grant, the trustees were able to fund the work.",
        "The architect is believed to have donated much of her time for free.",
        "Visitors entering today admire the glass hall added to the original design."
      ],
      "translation": "Старый городской музей, который годами был закрыт, вновь открылся на прошлой неделе. Говорят, что здание когда-то было зернохранилищем. Повреждённое пожаром в 1980-х, оно с тех пор стояло пустым. Совет наконец отреставрировал всё здание силами местных мастеров. Крышу, которая сильно протекала, полностью заменили. Получив грант, попечители смогли профинансировать работы. Считается, что архитектор бесплатно отдала немало своего времени. Посетители, входящие сегодня, любуются стеклянным залом, добавленным к первоначальному проекту."
    },
    "drag": {
      "intro": "Соедини конструкцию недели 3 с тем, что она выражает.",
      "pairs": [
        [
          "must be done",
          "модальный пассив (День 15)"
        ],
        [
          "It is said that…",
          "безличный репортинг (День 16)"
        ],
        [
          "He is said to be…",
          "личный репортинг (День 17)"
        ],
        [
          "have it done",
          "каузатив: услугу выполнил другой (День 18)"
        ],
        [
          "Having finished, …",
          "причастный оборот, предшествование (День 19)"
        ],
        [
          ", which ,",
          "non-defining оборот (День 20)"
        ]
      ]
    },
    "quiz": {
      "intro": "Большой тест недели 3 — шесть вопросов на весь арсенал. Пройдёшь уверенно — неделя закрыта.",
      "items": [
        {
          "q": "«Это нужно было сделать вчера» (модальный пассив прошлого) —",
          "opts": [
            "It must do yesterday.",
            "It should have been done yesterday.",
            "It should have done yesterday."
          ],
          "answer": 1,
          "explain": "Модальный пассив прошлого: should have <b>been done</b>."
        },
        {
          "q": "«Считается, что он уже уехал» (личный репортинг, предшествование) —",
          "opts": [
            "He is said to leave already.",
            "He is said to have left already.",
            "He is said that he left already."
          ],
          "answer": 1,
          "explain": "Раньше момента речи → to <b>have left</b> (перфектный инфинитив)."
        },
        {
          "q": "Где человек постригся в салоне?",
          "opts": [
            "He cut his hair.",
            "He had his hair cut.",
            "He has cut his hair."
          ],
          "answer": 1,
          "explain": "Каузатив: <b>had his hair cut</b> — услугу выполнил мастер."
        },
        {
          "q": "Какое предложение про ВСЕ окна (добавочная инфо)?",
          "opts": [
            "The windows which were old were replaced.",
            "The windows, which were old, were replaced."
          ],
          "answer": 1,
          "explain": "Запятые = non-defining = «окна, кстати, все были старые» → все."
        },
        {
          "q": "Сверни «the man who is standing there»:",
          "opts": [
            "the man stood there",
            "the man standing there",
            "the man to stand there"
          ],
          "answer": 1,
          "explain": "who is standing → активное причастие <b>standing</b>."
        },
        {
          "q": "Где «висячее» причастие (ошибка)?",
          "opts": [
            "Having locked the door, she left.",
            "Having locked the door, the keys were lost.",
            "Having locked the door, he walked away."
          ],
          "answer": 1,
          "explain": "Дверь заперли не keys → подлежащее не выполняет причастие. Это «висячее» причастие."
        }
      ]
    },
    "essay": {
      "intro": "Финальное письмо недели — собери в одном тексте весь арсенал недели 3.",
      "prompt": "Напиши 6–7 предложений про какой-нибудь ремонт, проект или преображение (своё или вымышленное). Включи: один пассив, один репортинг (It is said / is believed), один каузатив (had/got sth done), один причастный и один относительный оборот.",
      "hint": "Структуры: …, which had been … ; It is said that … ; We had the … repaired/painted ; Having finished …, … ; the … built/written/added … ; X is believed to … .",
      "example": "Last spring we finally had our tiny flat completely redesigned. The living room, which had felt dark for years, was opened up into the kitchen. It is said that knocking down a wall adds real value, so we took the risk. Having saved for ages, we could finally afford a proper designer. The shelves built into the alcove are now my favourite feature. Our designer, recommended by a neighbour, is believed to be one of the best in the city. Walking in today, I still can't believe it's the same place."
    },
    "picture": {
      "intro": "Опиши преображённое здание, собрав конструкции недели 3: пассив, репортинг, каузатив, причастные и относительные обороты.",
      "emoji": "🏛️🛠️✨",
      "prompt": "Опиши картинку, используя весь арсенал недели: пассив, It is said that…, have sth done, причастный и относительный оборот.",
      "hint": "Используй: The building, which had been …, … ; It is said that … ; The owners had it restored ; Damaged by …, it … ; the hall added to … .",
      "example": "The old museum, which had stood empty for decades, has finally been restored. It is said that the building was once a busy warehouse. Damaged by fire long ago, it was almost demolished. Instead, the city had the whole structure rebuilt by skilled craftsmen. The bright glass hall added to the entrance is the part everyone photographs. Visitors walking in today would never guess how ruined it once was.",
      "img": "img/b2/day-21.jpg",
      "credit": "Фото: Onasill - Bill Badzo - 149 Million Views - Thank Y · Public Domain · <a href=\"https://www.flickr.com/photos/7156765@N05/51692689113\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "22": {
    "day": 22,
    "week": "04",
    "level": "B2",
    "themeRu": "Чужие слова",
    "themeEn": "Reporting verbs",
    "intro": "На B1 ты уже умел(а) пересказывать чужие слова через <b>say</b> и <b>tell</b> со сдвигом времён (backshift). Но всё время тянуть «he said that…» — скучно и неточно. Носитель скажет иначе: вместо «he said he would help» — <b>he promised to help</b>; вместо «she said no» — <b>she refused</b>; вместо «he said it was a good idea to leave» — <b>he suggested leaving</b>. Один глагол несёт сразу и слова, и их <u>функцию</u>: обещание, отказ, совет, признание. Подвох в том, что у <b>каждого</b> такого глагола свой грамматический хвост: один требует <b>to do</b>, другой — <b>-ing</b>, третий — <b>that</b>. Сегодня разложим этот набор по полочкам. Поехали.",
    "introAudio": "На B1 ты уже умел пересказывать чужие слова через say и tell со сдвигом времён, backshift. Но всё время тянуть he said that — скучно и неточно. Носитель скажет иначе: вместо he said he would help — he promised to help; вместо she said no — she refused; вместо he said it was a good idea to leave — he suggested leaving. Один глагол несёт сразу и слова, и их функцию: обещание, отказ, совет, признание. Подвох в том, что у каждого такого глагола свой грамматический хвост: один требует to do, другой -ing, третий that. Сегодня разложим этот набор по полочкам. Поехали.",
    "goals": [
      "пересказывать речь точными глаголами: promise, offer, refuse, advise, warn, suggest, admit, deny",
      "помнить, что у каждого глагола свой паттерн: + to do / + sb + to do / + -ing / + that",
      "ловить русские ловушки «suggest to go», «advised me go», «deny to do»",
      "встраивать backshift и различать say vs tell внутри живого пересказа"
    ],
    "learned": [
      "Научился(лась) пересказывать речь точными глаголами: promise, offer, refuse, advise, warn, suggest, admit, deny",
      "Запомнил(а), что у каждого глагола свой паттерн: + to do / + sb + to do / + -ing / + that",
      "Поймал(а) русские ловушки «suggest to go», «advised me go», «deny to do»",
      "Научился(лась) встраивать backshift и различать say vs tell внутри живого пересказа"
    ],
    "review": {
      "intro": "Сначала прогреем фундамент косвенной речи: сдвиг времён (backshift) и вечную пару say vs tell. На них сегодня всё и держится.",
      "introAudio": "Сначала прогреем фундамент косвенной речи: сдвиг времён, backshift, и вечную пару say vs tell. На них сегодня всё и держится.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> сдвинь время назад (backshift). Present → Past.",
          "q": "Прямая речь: «I am really busy», he said. Косвенная:",
          "opts": [
            "He said that he is really busy.",
            "He said that he was really busy.",
            "He said me that he was really busy."
          ],
          "answer": 1,
          "explain": "am → <b>was</b> (backshift). И после say нет прямого дополнения «me»."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> say или tell? Tell требует адресата (tell <u>somebody</u>).",
          "q": "She ___ me that she would call back.",
          "opts": [
            "said",
            "told",
            "said to"
          ],
          "answer": 1,
          "explain": "Есть адресат «me» → <b>told</b> me. (said не берёт прямое дополнение: said to me.)"
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> переведи в косвенную речь с backshift. will → would.",
          "q": "«I will help you», she said. → She said that…",
          "accept": [
            "she said that she would help me",
            "she said she would help me"
          ],
          "placeholder": "She said that she …"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · карта паттернов",
        "title": "У каждого глагола — <em>свой</em> хвост",
        "paras": [
          "Главная мысль дня: reporting verbs <u>не</u> взаимозаменяемы по конструкции. Нельзя выучить один шаблон и подставлять любой глагол. Есть четыре основных хвоста, и каждый глагол «прописан» к своему.",
          "<b>(1) V + to do</b>: promise, offer, refuse, agree, threaten. <b>(2) V + sb + to do</b>: advise, warn, remind, encourage, ask, tell. <b>(3) V + -ing</b>: suggest, admit, deny, recommend. <b>(4) V + (that) + clause</b>: admit, promise, warn, suggest, claim — почти все могут и так, с backshift.",
          "Русский тут сбивает, потому что мы по инерции ставим инфинитив после любого глагола («предложил пойти» → «suggest to go» ✗). Запомни: хвост диктует не смысл, а конкретный глагол. Дальше разберём группы по очереди."
        ],
        "audio": "Главная мысль дня: reporting verbs не взаимозаменяемы по конструкции. Есть четыре основных хвоста, и каждый глагол прописан к своему. Первый: V плюс to do — promise, offer, refuse, agree. Второй: V плюс somebody плюс to do — advise, warn, remind, ask, tell. Третий: V плюс -ing — suggest, admit, deny, recommend. Четвёртый: V плюс that плюс предложение — почти все, с backshift. Русский сбивает, потому что мы ставим инфинитив после любого глагола: предложил пойти — suggest to go, и это ошибка.",
        "table": {
          "rows": [
            [
              "+ to do",
              "promise / offer / refuse / agree / threaten"
            ],
            [
              "+ sb + to do",
              "advise / warn / remind / encourage / ask / tell"
            ],
            [
              "+ -ing",
              "suggest / admit / deny / recommend"
            ],
            [
              "+ (that) clause",
              "admit / promise / warn / suggest / claim"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Он пообещал помочь.",
            "en": "He <b>promised to help</b>.",
            "gloss": "promise + to do",
            "say": "He promised to help."
          },
          {
            "ru": "Она посоветовала мне подождать.",
            "en": "She <b>advised me to wait</b>.",
            "gloss": "advise + sb + to do",
            "say": "She advised me to wait."
          },
          {
            "ru": "Он предложил уйти пораньше.",
            "en": "He <b>suggested leaving</b> early.",
            "gloss": "suggest + -ing",
            "say": "He suggested leaving early."
          },
          {
            "ru": "Она призналась, что забыла.",
            "en": "She <b>admitted that</b> she had forgotten.",
            "gloss": "admit + that + backshift",
            "say": "She admitted that she had forgotten."
          }
        ],
        "mistakes": [
          {
            "wrong": "He suggested to go home.",
            "right": "He <b>suggested going</b> home.",
            "why": "suggest берёт -ing (или that), не «to do»"
          },
          {
            "wrong": "She advised me go.",
            "right": "She <b>advised me to go</b>.",
            "why": "advise + sb + to do — нужен to перед глаголом"
          },
          {
            "wrong": "He denied to take it.",
            "right": "He <b>denied taking</b> it.",
            "why": "deny берёт -ing, не инфинитив"
          }
        ],
        "mnemonic": "🗂️ Не смысл диктует хвост, а сам глагол: to do · sb+to do · -ing · that.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный хвост для suggest.",
            "q": "«Он предложил подождать» —",
            "opts": [
              "He suggested to wait.",
              "He suggested waiting.",
              "He suggested me to wait."
            ],
            "answer": 1,
            "explain": "suggest + <b>-ing</b>: suggested waiting. (Или: suggested that we wait.)"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> какой глагол требует «sb + to do»?",
            "q": "Какой паттерн верен?",
            "opts": [
              "He promised me to come. (advise-тип)",
              "He warned me to be careful.",
              "He suggested me to come."
            ],
            "answer": 1,
            "explain": "warn + sb + to do ✓. promise НЕ берёт «me to»; suggest не берёт «me to» вообще."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. deny + -ing.",
            "q": "Собери: «Он отрицал, что взял деньги»",
            "want": "He denied taking the money",
            "answer": "He denied taking the money"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · + (sb) + to do",
        "title": "<em>promise / offer / refuse</em> и <em>advise / warn sb</em> + to do",
        "paras": [
          "Первая группа — глаголы с инфинитивом. Без дополнения: <b>promise / offer / refuse / agree / threaten + to do</b>. «He <b>refused to answer</b>» = Он отказался отвечать. «She <b>offered to drive</b>» = Она предложила подвезти (предложила свою помощь — это offer, не suggest!).",
          "С дополнением-лицом: <b>advise / warn / remind / encourage / ask / tell + sb + to do</b>. Между глаголом и инфинитивом обязательно стоит, <u>кому</u>: «He <b>advised me to wait</b>», «They <b>warned us to leave</b>». Пропустить лицо или to — частая русская ошибка.",
          "Отрицание ставим как <b>not to do</b>: «The doctor advised her <b>not to lift</b> heavy things», «He warned me <b>not to be</b> late». Не «advised her don't lift»."
        ],
        "audio": "Первая группа — глаголы с инфинитивом. Без дополнения: promise, offer, refuse, agree, threaten плюс to do. He refused to answer — он отказался отвечать. She offered to drive — она предложила подвезти; это offer, не suggest. С дополнением-лицом: advise, warn, remind, encourage, ask, tell плюс somebody плюс to do. He advised me to wait. Отрицание: not to do. The doctor advised her not to lift heavy things. Не advised her don't lift.",
        "table": {
          "rows": [
            [
              "+ to do (без лица)",
              "promise / offer / refuse / agree / threaten"
            ],
            [
              "+ sb + to do",
              "advise / warn / remind / encourage / ask / tell"
            ],
            [
              "отрицание",
              "… (sb) not to do"
            ],
            [
              "ловушка",
              "offer (своя помощь) ≠ suggest (идея)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Он пообещал не опаздывать.",
            "en": "He <b>promised not to be</b> late.",
            "gloss": "promise + not to do",
            "say": "He promised not to be late."
          },
          {
            "ru": "Она отказалась подписывать.",
            "en": "She <b>refused to sign</b>.",
            "gloss": "refuse + to do",
            "say": "She refused to sign."
          },
          {
            "ru": "Они предупредили нас не плавать там.",
            "en": "They <b>warned us not to swim</b> there.",
            "gloss": "warn + sb + not to do",
            "say": "They warned us not to swim there."
          },
          {
            "ru": "Я напомнил ему запереть дверь.",
            "en": "I <b>reminded him to lock</b> the door.",
            "gloss": "remind + sb + to do",
            "say": "I reminded him to lock the door."
          }
        ],
        "mistakes": [
          {
            "wrong": "She advised me go to the doctor.",
            "right": "She <b>advised me to go</b> to the doctor.",
            "why": "advise + sb + to do — to обязательно"
          },
          {
            "wrong": "He warned me don't touch it.",
            "right": "He <b>warned me not to touch</b> it.",
            "why": "отрицание инфинитива: not to do, не «don't»"
          },
          {
            "wrong": "He suggested me to drive.",
            "right": "He <b>offered to drive</b>.",
            "why": "своя помощь → offer + to do; suggest вообще не берёт «me to»"
          }
        ],
        "mnemonic": "➡️ Кому → что сделать: advise/warn/remind + sb + to do. Отрицание: not to do.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму отрицательного инфинитива.",
            "q": "The guide warned us ___ off the path.",
            "opts": [
              "don't go",
              "not to go",
              "to don't go"
            ],
            "answer": 1,
            "explain": "warn + sb + <b>not to do</b>: warned us not to go."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пересказ. refuse + to do.",
            "q": "Прямая речь: «No, I won't apologise.» → He…",
            "accept": [
              "he refused to apologise",
              "he refused to apologize"
            ],
            "placeholder": "He refused to …"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. remind + sb + to do.",
            "q": "Собери: «Она напомнила мне позвонить врачу»",
            "want": "She reminded me to call the doctor",
            "answer": "She reminded me to call the doctor"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · + -ing (русская ловушка)",
        "title": "<em>suggest / admit / deny</em> + -ing",
        "paras": [
          "Вторая группа берёт <b>-ing</b>, и именно здесь русскоязычные ошибаются чаще всего, по инерции ставя инфинитив. <b>suggest / admit / deny / recommend + -ing</b>: «He <b>suggested meeting</b> at six», «She <b>admitted lying</b>», «He <b>denied stealing</b> it», «I'd <b>recommend booking</b> early».",
          "Сюда же примыкают глаголы с предлогом — а после любого предлога только <b>-ing</b>: <b>apologise for</b> doing, <b>insist on</b> doing, <b>accuse sb of</b> doing, <b>congratulate sb on</b> doing. «He <b>apologised for being</b> late», «She <b>insisted on paying</b>».",
          "Запомни три флага-ловушки: «suggest <s>to go</s>» → <b>suggest going</b>; «deny <s>to do</s>» → <b>deny doing</b>; «admit <s>to make</s> a mistake» → <b>admit making</b> a mistake. Если в русском «предложил / признал / отрицал» — англ. хвост это <b>-ing</b>."
        ],
        "audio": "Вторая группа берёт -ing, и именно здесь русскоязычные ошибаются чаще всего, по инерции ставя инфинитив. suggest, admit, deny, recommend плюс -ing. He suggested meeting at six. She admitted lying. He denied stealing it. Сюда же глаголы с предлогом — а после предлога только -ing: apologise for doing, insist on doing, accuse somebody of doing. Запомни флаги: suggest to go — ошибка, нужно suggest going; deny to do — ошибка, нужно deny doing.",
        "table": {
          "rows": [
            [
              "+ -ing",
              "suggest / admit / deny / recommend"
            ],
            [
              "+ предлог + -ing",
              "apologise for / insist on / accuse sb of"
            ],
            [
              "suggest to go ✗",
              "suggest going ✓ (или that we go)"
            ],
            [
              "deny to do ✗",
              "deny doing ✓"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Он предложил встретиться позже.",
            "en": "He <b>suggested meeting</b> later.",
            "gloss": "suggest + -ing",
            "say": "He suggested meeting later."
          },
          {
            "ru": "Она призналась, что разбила вазу.",
            "en": "She <b>admitted breaking</b> the vase.",
            "gloss": "admit + -ing",
            "say": "She admitted breaking the vase."
          },
          {
            "ru": "Он отрицал, что говорил это.",
            "en": "He <b>denied saying</b> that.",
            "gloss": "deny + -ing",
            "say": "He denied saying that."
          },
          {
            "ru": "Она извинилась за опоздание.",
            "en": "She <b>apologised for being</b> late.",
            "gloss": "apologise for + -ing",
            "say": "She apologised for being late."
          }
        ],
        "mistakes": [
          {
            "wrong": "He suggested to meet at six.",
            "right": "He <b>suggested meeting</b> at six.",
            "why": "suggest + -ing (или suggest that we meet)"
          },
          {
            "wrong": "She denied to take the keys.",
            "right": "She <b>denied taking</b> the keys.",
            "why": "deny + -ing, без инфинитива"
          },
          {
            "wrong": "He apologised for be late.",
            "right": "He <b>apologised for being</b> late.",
            "why": "после предлога for — только -ing"
          }
        ],
        "mnemonic": "🔄 suggest / admit / deny + -ing. После предлога (for/on/of) — тоже -ing.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный хвост.",
            "q": "The boss admitted ___ a mistake.",
            "opts": [
              "to make",
              "making",
              "make"
            ],
            "answer": 1,
            "explain": "admit + <b>-ing</b>: admitted making a mistake."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> после предлога on — какая форма?",
            "q": "She insisted ___ for everyone.",
            "opts": [
              "to pay",
              "on paying",
              "on to pay"
            ],
            "answer": 1,
            "explain": "insist <b>on</b> + -ing: insisted on paying."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пересказ. deny + -ing.",
            "q": "Прямая речь: «I didn't break it!» → He…",
            "accept": [
              "he denied breaking it",
              "he denied breaking it."
            ],
            "placeholder": "He denied …"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · + that-clause и выбор глагола",
        "title": "<em>… that …</em>, backshift и <em>suggest that (should)</em>",
        "paras": [
          "Почти все эти глаголы умеют и <b>that-clause</b> — с обычным сдвигом времён: «He <b>admitted that</b> he had lied», «She <b>promised that</b> she would call», «They <b>warned us that</b> the road was closed». Это удобно, когда хочется передать целую мысль, а не только действие.",
          "Особый случай — <b>suggest / recommend / insist + that + (should) + базовая форма</b>: «He <b>suggested that we (should) leave</b>», «I <b>recommend that he see</b> a doctor». Глагол после that не меняется по лицам и стоит в голой форме (это остаток сослагательного — заглянем в C1, но шаблон полезен уже сейчас).",
          "И главный навык дня — <u>выбрать</u> глагол под функцию. «OK, I'll do it» → He <b>agreed to</b> do it. «Don't touch that!» → He <b>warned</b> me <b>not to touch</b> it. «It was me, sorry» → He <b>admitted</b> it / <b>apologised for</b> it. Один точный глагол заменяет три слова «he said that»."
        ],
        "audio": "Почти все эти глаголы умеют и that-clause, с обычным сдвигом времён: He admitted that he had lied. She promised that she would call. Особый случай — suggest, recommend, insist плюс that плюс should плюс базовая форма: He suggested that we should leave. I recommend that he see a doctor — глагол в голой форме. И главный навык дня — выбрать глагол под функцию. OK, I'll do it — he agreed to do it. Don't touch that — he warned me not to touch it. Один точный глагол заменяет три слова he said that.",
        "table": {
          "rows": [
            [
              "admit / promise / warn + that",
              "+ backshift (… that he had lied)"
            ],
            [
              "suggest / recommend that",
              "+ (should) + база (that we should leave)"
            ],
            [
              "«I'll do it»",
              "→ agreed to do it"
            ],
            [
              "«Don't!»",
              "→ warned (sb) not to do"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Она пообещала, что вернёт книгу.",
            "en": "She <b>promised that</b> she would return the book.",
            "gloss": "promise + that + backshift",
            "say": "She promised that she would return the book."
          },
          {
            "ru": "Он предложил, чтобы мы подождали снаружи.",
            "en": "He <b>suggested that</b> we (should) wait outside.",
            "gloss": "suggest that + (should) + база",
            "say": "He suggested that we should wait outside."
          },
          {
            "ru": "Я бы посоветовал ему обратиться к врачу.",
            "en": "I'd <b>recommend that</b> he see a doctor.",
            "gloss": "recommend that + база (see, не sees)",
            "say": "I would recommend that he see a doctor."
          },
          {
            "ru": "Он признал, что ошибся.",
            "en": "He <b>admitted that</b> he had been wrong.",
            "gloss": "admit + that + backshift",
            "say": "He admitted that he had been wrong."
          }
        ],
        "mistakes": [
          {
            "wrong": "He suggested that we leaving.",
            "right": "He suggested that we <b>(should) leave</b>.",
            "why": "после suggest that — базовая форма (или should + база)"
          },
          {
            "wrong": "She promised that she will call.",
            "right": "She promised that she <b>would call</b>.",
            "why": "backshift: will → would"
          }
        ],
        "mnemonic": "🎯 Точный глагол > «he said that». suggest that + (should) + база.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери глагол под функцию реплики.",
            "q": "«All right, I'll come with you.» Лучше всего:",
            "opts": [
              "He refused to come.",
              "He agreed to come.",
              "He denied coming."
            ],
            "answer": 1,
            "explain": "Согласие → <b>agreed to come</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> форма глагола после suggest that.",
            "q": "She suggested that the team ___ the deadline.",
            "opts": [
              "extends",
              "extend",
              "to extend"
            ],
            "answer": 1,
            "explain": "suggest that + базовая форма: that the team <b>extend</b> (or should extend)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши пересказ. promise + that + backshift.",
            "q": "Прямая речь: «I will pay you back tomorrow.» → He promised that…",
            "accept": [
              "he promised that he would pay me back the next day",
              "he promised that he would pay me back the following day",
              "he promised that he would pay me back tomorrow"
            ],
            "placeholder": "He promised that he would …"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Майя пересказывает подруге, что было на совещании. Тапни по подсвеченным глаголам — это reporting verbs в работе, каждый со своим хвостом.",
      "lines": [
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "So at the meeting the manager suggested cutting the budget, and nobody was happy.",
          "ru": "В общем, на совещании менеджер предложил урезать бюджет, и никто не обрадовался.",
          "words": [
            [
              "suggested cutting",
              "предложил урезать (suggest + -ing)"
            ],
            [
              "budget",
              "бюджет"
            ]
          ]
        },
        {
          "who": "Lena",
          "name": "Лена",
          "side": "right",
          "en": "Did anyone object?",
          "ru": "Кто-нибудь возразил?",
          "words": [
            [
              "object",
              "возражать"
            ]
          ]
        },
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "Tom refused to accept it and warned us that the project would fail.",
          "ru": "Том отказался это принять и предупредил, что проект провалится.",
          "words": [
            [
              "refused to accept",
              "отказался принять (refuse + to do)"
            ],
            [
              "warned us that",
              "предупредил нас, что (warn sb + that)"
            ]
          ]
        },
        {
          "who": "Lena",
          "name": "Лена",
          "side": "right",
          "en": "And the manager?",
          "ru": "А менеджер?",
          "words": []
        },
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "She admitted being wrong and promised to find another solution.",
          "ru": "Она признала, что была неправа, и пообещала найти другое решение.",
          "words": [
            [
              "admitted being wrong",
              "признала, что неправа (admit + -ing)"
            ],
            [
              "promised to find",
              "пообещала найти (promise + to do)"
            ]
          ]
        },
        {
          "who": "Lena",
          "name": "Лена",
          "side": "right",
          "en": "Honestly, I'd recommend that you write all of this down.",
          "ru": "Честно, я бы посоветовала тебе всё это записать.",
          "words": [
            [
              "recommend that you write",
              "посоветовала бы записать (recommend that + база)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Глаголы пересказа — учи их вместе с хвостом, как одно целое. Повтори вслух «глагол + паттерн».",
      "items": [
        {
          "en": "promise (+ to do)",
          "ru": "обещать",
          "ex": "He promised to call back."
        },
        {
          "en": "offer (+ to do)",
          "ru": "предлагать (свою помощь)",
          "ex": "She offered to help me move."
        },
        {
          "en": "refuse (+ to do)",
          "ru": "отказываться",
          "ex": "They refused to lower the price."
        },
        {
          "en": "advise (+ sb + to do)",
          "ru": "советовать",
          "ex": "The doctor advised her to rest."
        },
        {
          "en": "warn (+ sb + (not) to do / that)",
          "ru": "предупреждать",
          "ex": "He warned us not to be late."
        },
        {
          "en": "remind (+ sb + to do)",
          "ru": "напоминать",
          "ex": "Remind me to buy milk."
        },
        {
          "en": "suggest (+ -ing / that)",
          "ru": "предлагать (идею)",
          "ex": "She suggested taking a break."
        },
        {
          "en": "admit (+ -ing / that)",
          "ru": "признавать(ся)",
          "ex": "He admitted forgetting the keys."
        },
        {
          "en": "deny (+ -ing)",
          "ru": "отрицать",
          "ex": "She denied touching the file."
        },
        {
          "en": "recommend (+ -ing / that)",
          "ru": "рекомендовать",
          "ex": "I recommend booking ahead."
        },
        {
          "en": "insist (on + -ing / that)",
          "ru": "настаивать",
          "ex": "He insisted on paying."
        },
        {
          "en": "apologise (for + -ing)",
          "ru": "извиняться",
          "ex": "She apologised for being late."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай короткий пересказ ссоры между соседями. Каждое предложение — другой reporting verb со своим хвостом.",
      "title": "The dispute",
      "sentences": [
        "Our neighbour complained that the music was too loud.",
        "He demanded that we turn it down after ten.",
        "My brother refused to apologise at first.",
        "Then he admitted playing the drums late at night.",
        "The neighbour warned us not to do it again.",
        "He also threatened to call the landlord.",
        "In the end, my brother promised to keep the noise down.",
        "I suggested inviting the neighbour over for coffee.",
        "Surprisingly, he agreed to come the next day.",
        "He even offered to lend us his old headphones."
      ],
      "translation": "Наш сосед пожаловался, что музыка слишком громкая. Он потребовал, чтобы мы убавляли её после десяти. Сначала мой брат отказался извиняться. Потом он признал, что играл на барабанах поздно ночью. Сосед предупредил нас больше так не делать. Ещё он пригрозил позвонить домовладельцу. В конце концов мой брат пообещал не шуметь. Я предложил пригласить соседа на кофе. Неожиданно он согласился прийти на следующий день. Он даже предложил одолжить нам свои старые наушники."
    },
    "drag": {
      "intro": "Соедини глагол с его паттерном — хвостом, который он требует.",
      "pairs": [
        [
          "refuse",
          "+ to do"
        ],
        [
          "advise",
          "+ sb + to do"
        ],
        [
          "deny",
          "+ -ing"
        ],
        [
          "insist",
          "+ on + -ing"
        ],
        [
          "suggest",
          "+ -ing / that + (should) база"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — пять вопросов на хвосты reporting verbs. Пройдёшь — и пересказ зазвучит точно.",
      "items": [
        {
          "q": "«Он предложил уйти раньше» —",
          "opts": [
            "He suggested to leave earlier.",
            "He suggested leaving earlier.",
            "He suggested me to leave earlier."
          ],
          "answer": 1,
          "explain": "suggest + <b>-ing</b>: suggested leaving."
        },
        {
          "q": "«Она посоветовала мне подождать» —",
          "opts": [
            "She advised me to wait.",
            "She advised me wait.",
            "She advised me waiting."
          ],
          "answer": 0,
          "explain": "advise + sb + <b>to do</b>: advised me to wait."
        },
        {
          "q": "«Он отрицал, что брал ключи» —",
          "opts": [
            "He denied to take the keys.",
            "He denied taking the keys.",
            "He refused taking the keys."
          ],
          "answer": 1,
          "explain": "deny + <b>-ing</b>: denied taking."
        },
        {
          "q": "После предлога — какая форма? «She apologised for ___ late.»",
          "opts": [
            "to be",
            "being",
            "be"
          ],
          "answer": 1,
          "explain": "после предлога for — только <b>-ing</b>: for being late."
        },
        {
          "q": "«OK, I'll do it.» Точнее всего:",
          "opts": [
            "He denied doing it.",
            "He agreed to do it.",
            "He warned to do it."
          ],
          "answer": 1,
          "explain": "согласие → <b>agreed to do</b> it."
        }
      ]
    },
    "essay": {
      "intro": "Перескажи реальный разговор — но без скучного «he said that» на каждой строчке.",
      "prompt": "Напиши 5–6 предложений: перескажи спор, переговоры или совет, который ты слышал(а). Используй минимум четыре разных reporting verb (suggest, refuse, admit, warn, promise, advise, offer, deny) — каждый со своим правильным хвостом.",
      "hint": "Структуры: He suggested -ing… ; She refused to… ; They warned me (not) to… ; He admitted -ing… ; In the end she promised to… .",
      "example": "Last week my colleague and I disagreed about the deadline. She suggested postponing the launch, but I refused to change the date. She warned me that the team was exhausted and admitted feeling stressed herself. In the end I apologised for being so stubborn and offered to take on extra work. She agreed to keep the original date, and we both promised to communicate better next time.",
      "model": "She suggested postponing the launch, but I refused to change the date."
    },
    "picture": {
      "intro": "Опиши, что происходит на картинке, через reporting verbs — как будто пересказываешь сцену кому-то.",
      "emoji": "🗣️💬🤝",
      "prompt": "Опиши спор или разговор на картинке. Перескажи реплики через reporting verbs: one person suggested…, the other refused…, finally they agreed…",
      "hint": "Используй: He suggested -ing… ; She refused to… ; They finally agreed to… ; He warned her (not) to… .",
      "example": "In the picture two colleagues are clearly arguing about something. One of them is suggesting a new plan, while the other keeps refusing to listen. After a while, the first person admits making a mistake and apologises for it. In the end they seem to agree to work together and shake hands.",
      "img": "img/b2/day-22.jpg",
      "credit": "Фото: Touchstones Nelson · Public Domain · <a href=\"https://www.flickr.com/photos/52262390@N07/39826142113\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "23": {
    "day": 23,
    "week": "04",
    "level": "B2",
    "themeRu": "Именно это",
    "themeEn": "Cleft sentences",
    "intro": "В русском, чтобы выделить главное, мы просто двигаем слова и давим интонацией: «<u>Именно Анна</u> разбила вазу», «Мне нужно <u>время</u>, а не деньги». В английском порядок слов жёсткий, и голосом много не выделишь — поэтому выделение делают <b>структурой</b>. Сегодня — <b>расщеплённые предложения</b> (cleft): берём обычную мысль «Anna broke the vase» и «раскалываем» её, чтобы свет упал на одну часть: «<b>It was Anna who</b> broke the vase» или «<b>What I need is</b> time». Звучит очень по-английски и очень по-B2. Главная ловушка — лишнее «it» в середине («What I need <s>it is</s>…») и согласование («It is you who <s>is</s>…»). Разберёмся аккуратно. Поехали.",
    "introAudio": "В русском, чтобы выделить главное, мы просто двигаем слова и давим интонацией: именно Анна разбила вазу; мне нужно время, а не деньги. В английском порядок слов жёсткий, и голосом много не выделишь — поэтому выделение делают структурой. Сегодня расщеплённые предложения, cleft: берём обычную мысль Anna broke the vase и раскалываем её, чтобы свет упал на одну часть: It was Anna who broke the vase, или What I need is time. Звучит очень по-английски и очень по-B2. Главная ловушка — лишнее it в середине и согласование: It is you who is. Разберёмся аккуратно. Поехали.",
    "goals": [
      "выделять главное структурой, а не интонацией: It was X that/who…",
      "строить wh-cleft: What I need is… / What he did was…",
      "пользоваться шаблонами The thing that… / All I want is… / The reason why…",
      "ловить ловушки: лишнее «it» (What I need it is ✗) и согласование (It is you who is ✗)"
    ],
    "learned": [
      "Научился(лась) выделять главное структурой, а не интонацией: It was X that/who…",
      "Научился(лась) строить wh-cleft: What I need is… / What he did was…",
      "Научился(лась) пользоваться шаблонами The thing that… / All I want is… / The reason why…",
      "Поймал(а) ловушки: лишнее «it» (What I need it is ✗) и согласование (It is you who is ✗)"
    ],
    "review": {
      "intro": "Сначала прогреем то, на чём cleft стоит: относительные придаточные (who/which/that, в т.ч. с предлогом) из Дня 20 и согласование подлежащего и сказуемого. Через минуту увидишь, как who внутри cleft работает точно так же.",
      "introAudio": "Сначала прогреем то, на чём cleft стоит: относительные придаточные, who, which, that, в том числе с предлогом, из Дня 20, и согласование подлежащего и сказуемого. Через минуту увидишь, как who внутри cleft работает точно так же.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни относительные местоимения — кого/что описываем.",
          "q": "The colleague ___ helped me has just resigned.",
          "opts": [
            "which",
            "who",
            "what"
          ],
          "answer": 1,
          "explain": "Человек → <b>who</b> (или that). which — для предметов; what здесь не относительное."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> согласуй сказуемое с реальным подлежащим.",
          "q": "The people who ___ in the office are tired.",
          "opts": [
            "works",
            "work",
            "is working"
          ],
          "answer": 1,
          "explain": "people — мн. число → <b>work</b>. who берёт число от того, к чему относится."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши относительное местоимение с предлогом. the house … I grew up.",
          "q": "That's the house ___ which I grew up. (предлог + which)",
          "accept": [
            "in"
          ],
          "placeholder": "the house … which I grew up"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · it-cleft",
        "title": "<em>It was X that/who…</em> — навести прожектор",
        "paras": [
          "It-cleft берёт одну часть предложения и ставит её под прожектор: <b>It + be + ВЫДЕЛЯЕМОЕ + that/who + остальное</b>. Сравни нейтральное «Anna broke the vase at the party» и три расщеплённых версии в зависимости от того, что важно:",
          "<b>It was Anna who</b> broke the vase. (не кто-то другой — именно Анна) · <b>It was the vase that</b> Anna broke. (именно вазу, а не что-то ещё) · <b>It was at the party that</b> Anna broke it. (именно на вечеринке). Для людей берём who или that, для всего остального — that.",
          "Часто рядом идёт контраст «не …, а …»: «<b>It wasn't me who</b> called you — <b>it was Tom</b>.» Время в «It is/was» подстраивается под ситуацию: про прошлое — <b>It was</b>, про настоящее/общее — <b>It is</b>."
        ],
        "audio": "It-cleft берёт одну часть предложения и ставит её под прожектор: It плюс be плюс выделяемое плюс that или who плюс остальное. Нейтральное: Anna broke the vase at the party. Расщеплённые: It was Anna who broke the vase — не кто-то другой, именно Анна. It was the vase that Anna broke — именно вазу. It was at the party that Anna broke it — именно на вечеринке. Для людей who или that, для остального that. Часто рядом контраст: It wasn't me who called you, it was Tom.",
        "table": {
          "rows": [
            [
              "нейтрально",
              "Anna broke the vase at the party."
            ],
            [
              "выделить деятеля",
              "It was Anna who broke the vase."
            ],
            [
              "выделить объект",
              "It was the vase that Anna broke."
            ],
            [
              "выделить обстоятельство",
              "It was at the party that it happened."
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Именно Том сломал принтер, а не я.",
            "en": "<b>It was Tom who</b> broke the printer, not me.",
            "gloss": "выделяем деятеля → who",
            "say": "It was Tom who broke the printer, not me."
          },
          {
            "ru": "Мне нужна была именно твоя помощь.",
            "en": "<b>It was your help that</b> I needed.",
            "gloss": "выделяем объект → that",
            "say": "It was your help that I needed."
          },
          {
            "ru": "Именно в Берлине мы и познакомились.",
            "en": "<b>It was in Berlin that</b> we first met.",
            "gloss": "выделяем место → that",
            "say": "It was in Berlin that we first met."
          },
          {
            "ru": "Именно вчера всё и изменилось.",
            "en": "<b>It was yesterday that</b> everything changed.",
            "gloss": "выделяем время → that",
            "say": "It was yesterday that everything changed."
          }
        ],
        "mistakes": [
          {
            "wrong": "It was Anna which broke the vase.",
            "right": "It was Anna <b>who</b> broke the vase.",
            "why": "человек → who (или that), не which"
          },
          {
            "wrong": "Is Tom who called you.",
            "right": "<b>It was</b> Tom who called you.",
            "why": "cleft начинается с пустого It + be — его нельзя опускать"
          },
          {
            "wrong": "It was on Monday when we met.",
            "right": "It was on Monday <b>that</b> we met.",
            "why": "после фокуса в it-cleft — that, даже про время"
          }
        ],
        "mnemonic": "🔦 It + be + ГЛАВНОЕ + that/who + остальное. Прожектор на одну часть.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выдели деятеля. Человек → who.",
            "q": "«Именно Сара предложила эту идею» —",
            "opts": [
              "It was Sara which suggested the idea.",
              "It was Sara who suggested the idea.",
              "Was Sara who suggested the idea."
            ],
            "answer": 1,
            "explain": "человек под прожектором → <b>It was Sara who</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> что под прожектором — место. Связка после фокуса?",
            "q": "It was in Paris ___ they got married.",
            "opts": [
              "when",
              "that",
              "which"
            ],
            "answer": 1,
            "explain": "в it-cleft после фокуса всегда <b>that</b> (даже для места/времени)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери it-cleft с контрастом.",
            "q": "Собери: «Именно Том разбил окно, а не я»",
            "want": "It was Tom who broke the window not me",
            "answer": "It was Tom who broke the window not me"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · wh-cleft (русская ловушка)",
        "title": "<em>What I need is…</em> — и никакого лишнего «it»",
        "paras": [
          "Второй тип расщепления начинается с <b>What…</b> и выносит главное в самый конец, под смысловое ударение: <b>What + подлежащее + глагол + is/was + ВЫДЕЛЯЕМОЕ</b>. «<b>What I need is</b> time», «<b>What he wants is</b> a holiday», «<b>What annoys me is</b> the noise».",
          "Можно выделять и целое действие — тогда справа стоит инфинитив или -ing: «<b>What he did was</b> (to) call the police», «<b>What we should do is</b> wait». А «What happened was that…» вводит целую историю.",
          "Здесь — главная русская ловушка. По-русски «То, что мне нужно, — это время» содержит «это», и рука сама дописывает второе «it»: «What I need <s>it is</s> time» ✗. В английском <b>What I need</b> уже и есть подлежащее — второго «it» не нужно: <b>What I need is</b> time. Один глагол be, и всё."
        ],
        "audio": "Второй тип расщепления начинается с What и выносит главное в конец, под смысловое ударение: What плюс подлежащее плюс глагол плюс is или was плюс выделяемое. What I need is time. What he wants is a holiday. Можно выделять и действие: What he did was call the police. А What happened was that вводит целую историю. Здесь главная русская ловушка: по-русски то, что мне нужно, это время — содержит это, и рука дописывает второе it: What I need it is time — ошибка. What I need уже и есть подлежащее, второго it не нужно: What I need is time.",
        "table": {
          "rows": [
            [
              "What I need is …",
              "То, что мне нужно, — это …"
            ],
            [
              "What he did was (to) …",
              "Что он сделал — это (то-то)"
            ],
            [
              "What happened was that …",
              "Что произошло — это что…"
            ],
            [
              "ловушка",
              "What I need IT is ✗ → What I need IS ✓"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Мне нужно именно время, а не деньги.",
            "en": "<b>What I need is</b> time, not money.",
            "gloss": "What … is + фокус (без второго it)",
            "say": "What I need is time, not money."
          },
          {
            "ru": "Что меня раздражает — так это шум.",
            "en": "<b>What annoys me is</b> the noise.",
            "gloss": "What + V + is + фокус",
            "say": "What annoys me is the noise."
          },
          {
            "ru": "Что он сделал — позвонил в полицию.",
            "en": "<b>What he did was</b> call the police.",
            "gloss": "действие → справа базовая форма",
            "say": "What he did was call the police."
          },
          {
            "ru": "Что нам стоит сделать — это подождать.",
            "en": "<b>What we should do is</b> wait.",
            "gloss": "What we should do is + база",
            "say": "What we should do is wait."
          }
        ],
        "mistakes": [
          {
            "wrong": "What I need it is more time.",
            "right": "<b>What I need is</b> more time.",
            "why": "лишнее «it» — What I need уже подлежащее"
          },
          {
            "wrong": "What I want is to relaxing.",
            "right": "What I want is <b>to relax</b>.",
            "why": "справа — чистый инфинитив или -ing, не смесь"
          },
          {
            "wrong": "That what I need is time.",
            "right": "<b>What I need is</b> time.",
            "why": "wh-cleft начинается прямо с What, без «that»"
          }
        ],
        "mnemonic": "🚫 What I need IS time. Никакого второго «it» в середине.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> убери лишнее «it».",
            "q": "«То, что мне нужно, — это отпуск» —",
            "opts": [
              "What I need it is a holiday.",
              "What I need is a holiday.",
              "What I need that is a holiday."
            ],
            "answer": 1,
            "explain": "никакого второго it: <b>What I need is</b> a holiday."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери wh-cleft.",
            "q": "Собери: «Что меня раздражает — так это шум»",
            "want": "What annoys me is the noise",
            "answer": "What annoys me is the noise"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши wh-cleft. Действие справа без to.",
            "q": "Что он сделал — выключил телефон. (turn off his phone)",
            "accept": [
              "what he did was turn off his phone",
              "what he did was to turn off his phone"
            ],
            "placeholder": "What he did was …"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · другие расщепления",
        "title": "<em>The thing that… / All I want is… / The reason why…</em>",
        "paras": [
          "Кроме What есть целое семейство «опорных» расщеплений — выбираешь существительное под смысл и продолжаешь относительным придаточным. <b>The thing (that)…</b> (вещь/мысль), <b>The person who…</b>, <b>The place where…</b>, <b>The reason (why)…</b>, <b>The day when…</b>.",
          "«<b>The thing that</b> worries me <b>is</b> the cost.» · «<b>The reason why</b> I called <b>is</b> simple.» · «<b>The place where</b> we met <b>was</b> a tiny café.» Это удобнее, чем What, когда хочешь явно назвать категорию (причина, человек, место).",
          "Очень частый разговорный вариант — <b>All (that)… is…</b> в значении «всё, что… — это только…», с оттенком «не так уж много»: «<b>All I want is</b> a quiet evening», «<b>All you have to do is</b> ask». Справа, как и в wh-cleft, может стоять базовая форма: All you have to do is <b>ask</b>."
        ],
        "audio": "Кроме What есть целое семейство опорных расщеплений — выбираешь существительное под смысл и продолжаешь относительным придаточным. The thing that — вещь или мысль. The person who. The place where. The reason why. The day when. The thing that worries me is the cost. The reason why I called is simple. Очень частый разговорный вариант — All that is, всё, что — это только, с оттенком не так уж много: All I want is a quiet evening. All you have to do is ask — справа базовая форма.",
        "table": {
          "rows": [
            [
              "The thing (that)… is…",
              "вещь/мысль: The thing that worries me is…"
            ],
            [
              "The reason (why)… is…",
              "причина: The reason why I left is…"
            ],
            [
              "The place where… was…",
              "место: The place where we met was…"
            ],
            [
              "All (that)… is…",
              "«всё, что — это только»: All I want is…"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Что меня беспокоит — так это цена.",
            "en": "<b>The thing that</b> worries me <b>is</b> the price.",
            "gloss": "The thing that … is …",
            "say": "The thing that worries me is the price."
          },
          {
            "ru": "Причина, по которой я ушёл, проста.",
            "en": "<b>The reason why</b> I left <b>is</b> simple.",
            "gloss": "The reason why … is …",
            "say": "The reason why I left is simple."
          },
          {
            "ru": "Всё, чего я хочу, — это тихий вечер.",
            "en": "<b>All I want is</b> a quiet evening.",
            "gloss": "All … is … (немного)",
            "say": "All I want is a quiet evening."
          },
          {
            "ru": "Всё, что тебе нужно сделать, — это спросить.",
            "en": "<b>All you have to do is</b> ask.",
            "gloss": "справа базовая форма: ask",
            "say": "All you have to do is ask."
          }
        ],
        "mistakes": [
          {
            "wrong": "The reason why I called is because I need help.",
            "right": "The reason (why) I called <b>is that</b> I need help.",
            "why": "после «The reason is» идёт that, а не «because» (двойная причина)"
          },
          {
            "wrong": "All what I want is rest.",
            "right": "<b>All (that)</b> I want is rest.",
            "why": "после All — that или ничего, не «what»"
          },
          {
            "wrong": "All you have to do is to asking.",
            "right": "All you have to do is <b>ask</b>.",
            "why": "справа базовая форма, не «to + -ing»"
          }
        ],
        "mnemonic": "🧩 Назови категорию: The thing/reason/place… is… · All I want is… (+ база).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> после «The reason … is» — какое слово?",
            "q": "The reason why I'm late is ___ the train was cancelled.",
            "opts": [
              "because",
              "that",
              "why"
            ],
            "answer": 1,
            "explain": "«The reason is <b>that</b>…» — не «because» (иначе причина названа дважды)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> что идёт справа в «All you have to do is …»?",
            "q": "All you have to do is ___ the button.",
            "opts": [
              "to pressing",
              "press",
              "pressing"
            ],
            "answer": 1,
            "explain": "справа базовая форма: <b>press</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери расщепление с The thing.",
            "q": "Собери: «Что меня беспокоит — так это цена»",
            "want": "The thing that worries me is the price",
            "answer": "The thing that worries me is the price"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · согласование (русская ловушка)",
        "title": "<em>It is you who ARE…</em> — следи за числом и лицом",
        "paras": [
          "Внутри cleft легко сбиться в согласовании, потому что появляется «двойное» подлежащее. В it-cleft глагол после who/that согласуется с <u>тем словом, что под прожектором</u>, а не с «It». «<b>It is you who are</b> responsible» (you → are), «<b>It is I who am</b> to blame» (формально), «<b>It is the children who make</b> the noise» (children → make).",
          "Сравни две версии: «It is <b>I</b> who <b>am</b> right» (очень формально) и обиходное «It's <b>me</b> who's right». В разговоре часто берут «It's me / It's him» и who's, но в нейтральном письме держи согласование честным: who <b>are</b> после you, who <b>make</b> после people.",
          "В wh-cleft глагол be согласуется с тем, что справа: если справа множественное — <b>are/were</b>. «What we need <b>is</b> a plan» (a plan — ед.), но «What we need <b>are</b> more volunteers» (volunteers — мн.). Русское «нам нужно» не подсказывает число — решает английское существительное справа."
        ],
        "audio": "Внутри cleft легко сбиться в согласовании, потому что появляется двойное подлежащее. В it-cleft глагол после who или that согласуется с тем словом, что под прожектором, а не с It. It is you who are responsible — you, are. It is the children who make the noise — children, make. В разговоре часто It's me who's right, но в нейтральном письме держи согласование честным. В wh-cleft глагол be согласуется с тем, что справа: What we need is a plan, единственное, но What we need are more volunteers, множественное. Русское нам нужно не подсказывает число — решает английское существительное справа.",
        "table": {
          "rows": [
            [
              "It is you who ARE…",
              "after you → are (не is)"
            ],
            [
              "It is the people who MAKE…",
              "after people → make"
            ],
            [
              "What we need IS a plan",
              "справа ед. → is"
            ],
            [
              "What we need ARE volunteers",
              "справа мн. → are"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Это ведь ты за это отвечаешь.",
            "en": "<b>It is you who are</b> responsible for this.",
            "gloss": "you → are",
            "say": "It is you who are responsible for this."
          },
          {
            "ru": "Именно дети поднимают весь шум.",
            "en": "<b>It is the children who make</b> all the noise.",
            "gloss": "children → make",
            "say": "It is the children who make all the noise."
          },
          {
            "ru": "Что нам нужно — это план.",
            "en": "<b>What we need is</b> a plan.",
            "gloss": "a plan (ед.) → is",
            "say": "What we need is a plan."
          },
          {
            "ru": "Что нам нужно — это больше добровольцев.",
            "en": "<b>What we need are</b> more volunteers.",
            "gloss": "volunteers (мн.) → are",
            "say": "What we need are more volunteers."
          }
        ],
        "mistakes": [
          {
            "wrong": "It is you who is responsible.",
            "right": "It is you who <b>are</b> responsible.",
            "why": "who относится к you → are"
          },
          {
            "wrong": "What we need are a new plan.",
            "right": "What we need <b>is</b> a new plan.",
            "why": "справа единственное (a plan) → is"
          },
          {
            "wrong": "What I miss are my family.",
            "right": "What I miss <b>is</b> my family.",
            "why": "family как единое целое → is"
          }
        ],
        "mnemonic": "🔗 it-cleft: глагол по слову под прожектором. wh-cleft: глагол по слову справа.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> согласуй who с «you».",
            "q": "It is you who ___ always late.",
            "opts": [
              "is",
              "are",
              "be"
            ],
            "answer": 1,
            "explain": "who относится к you → <b>are</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> согласуй be с тем, что справа.",
            "q": "What this team needs ___ a clear plan.",
            "opts": [
              "is",
              "are",
              "was"
            ],
            "answer": 0,
            "explain": "справа единственное (a clear plan) → <b>is</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши cleft с правильным согласованием.",
            "q": "Именно дети поднимают весь шум. (the children / make)",
            "accept": [
              "it is the children who make all the noise",
              "it's the children who make all the noise",
              "it is the children that make all the noise",
              "it's the children that make all the noise"
            ],
            "placeholder": "It is the children who … all the noise"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Дэн и Кейт выясняют, кто виноват в сорванном дедлайне. Слушай, как они выделяют главное через cleft — и держат согласование.",
      "lines": [
        {
          "who": "A",
          "en": "Don't blame me. It wasn't me who missed the deadline.",
          "ru": "Не вали на меня. Это не я сорвал дедлайн."
        },
        {
          "who": "B",
          "en": "Then who was it? It was your team that handled the report.",
          "ru": "А кто тогда? Именно твоя команда вела отчёт."
        },
        {
          "who": "A",
          "en": "What actually happened was that the client changed everything twice.",
          "ru": "Что на самом деле случилось — клиент дважды всё переделал."
        },
        {
          "who": "B",
          "en": "OK. The thing that worries me now is the new date.",
          "ru": "Ладно. Что меня сейчас беспокоит — это новая дата."
        },
        {
          "who": "A",
          "en": "All we have to do is talk to the client honestly.",
          "ru": "Всё, что нам нужно, — это честно поговорить с клиентом."
        }
      ]
    },
    "vocab": {
      "intro": "Опорные обороты расщепления — учи их как готовые «рамки» для выделения. Повтори вслух с разными концовками.",
      "items": [
        {
          "en": "It was … who/that …",
          "ru": "именно … (it-cleft)",
          "ex": "It was Tom who called."
        },
        {
          "en": "What I need is …",
          "ru": "то, что мне нужно, — это …",
          "ex": "What I need is time."
        },
        {
          "en": "What he did was …",
          "ru": "что он сделал — это …",
          "ex": "What he did was apologise."
        },
        {
          "en": "The thing that …",
          "ru": "то, что … (вещь/мысль)",
          "ex": "The thing that bothers me is the cost."
        },
        {
          "en": "The reason why …",
          "ru": "причина, по которой …",
          "ex": "The reason why I left is personal."
        },
        {
          "en": "The place where …",
          "ru": "место, где …",
          "ex": "The place where we met is gone."
        },
        {
          "en": "All I want is …",
          "ru": "всё, чего я хочу, — это …",
          "ex": "All I want is some peace."
        },
        {
          "en": "All you have to do is …",
          "ru": "всё, что тебе нужно, — это …",
          "ex": "All you have to do is ask."
        },
        {
          "en": "responsible (for)",
          "ru": "ответственный (за)",
          "ex": "You are responsible for this."
        },
        {
          "en": "to blame",
          "ru": "виноват(ый)",
          "ex": "It isn't you who are to blame."
        },
        {
          "en": "to point out",
          "ru": "указать, подчеркнуть",
          "ex": "What I'd point out is the risk."
        },
        {
          "en": "matter",
          "ru": "иметь значение",
          "ex": "What matters is the result."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай небольшую речь основателя на встрече команды. Заметь, как почти каждое сильное место — это cleft.",
      "title": "What really matters",
      "sentences": [
        "It wasn't luck that built this company; it was hard work.",
        "What kept us going was a very simple idea.",
        "The thing that I'm most proud of is our team.",
        "It is you who turned a rough plan into a real product.",
        "What we need now is focus, not more meetings.",
        "All I'm asking is that we stay honest with each other.",
        "The reason why I started this was to solve one real problem.",
        "And what happens next is entirely up to us."
      ],
      "translation": "Эту компанию построила не удача, а упорный труд. Что нас держало — очень простая идея. Чем я больше всего горжусь — это наша команда. Именно вы превратили черновой план в настоящий продукт. Что нам нужно сейчас — это фокус, а не новые совещания. Всё, о чём я прошу, — оставаться честными друг с другом. Причина, по которой я всё это начал, — решить одну реальную проблему. А что будет дальше — целиком зависит от нас."
    },
    "drag": {
      "intro": "Соедини «рамку» расщепления с тем, что она выделяет.",
      "pairs": [
        [
          "It was Anna who…",
          "именно деятель (человек)"
        ],
        [
          "What I need is…",
          "вынос объекта в конец"
        ],
        [
          "The reason why…",
          "причина"
        ],
        [
          "The place where…",
          "место"
        ],
        [
          "All I want is…",
          "«всего лишь / только»"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — пять вопросов на расщеплённые предложения. Главное: без лишнего «it» и с верным согласованием.",
      "items": [
        {
          "q": "«Именно Сара нашла ошибку» —",
          "opts": [
            "It was Sara which found the mistake.",
            "It was Sara who found the mistake.",
            "Was Sara who found the mistake."
          ],
          "answer": 1,
          "explain": "человек под прожектором → <b>It was Sara who</b>."
        },
        {
          "q": "«То, что мне нужно, — это совет» —",
          "opts": [
            "What I need it is some advice.",
            "What I need is some advice.",
            "That what I need is some advice."
          ],
          "answer": 1,
          "explain": "без второго «it»: <b>What I need is</b> some advice."
        },
        {
          "q": "It is you who ___ in charge here.",
          "opts": [
            "is",
            "are",
            "be"
          ],
          "answer": 1,
          "explain": "who относится к you → <b>are</b>."
        },
        {
          "q": "What this office needs ___ more chairs.",
          "opts": [
            "is",
            "are",
            "was"
          ],
          "answer": 1,
          "explain": "справа множественное (chairs) → <b>are</b>."
        },
        {
          "q": "«Всё, что тебе нужно сделать, — это спросить» —",
          "opts": [
            "All you have to do is to asking.",
            "All you have to do is ask.",
            "All what you have to do is ask."
          ],
          "answer": 1,
          "explain": "после All — that/ничего, справа базовая форма: <b>ask</b>."
        }
      ]
    },
    "essay": {
      "intro": "Сделай свою мысль звонкой — выдели в ней главное структурой, а не курсивом.",
      "prompt": "Напиши 5–6 предложений о том, что для тебя важнее всего в работе или жизни. Используй минимум три разных расщепления: It was/is … who/that…, What … is…, The thing/reason… is…, All I want is…",
      "hint": "Структуры: It is … who/that … ; What matters (to me) is … ; The thing that … is … ; The reason why … is … ; All I want is … .",
      "example": "When people ask me about my job, I always say the same thing. What I love most is the freedom to choose my own projects. It wasn't the salary that made me stay; it was the people around me. The thing that still surprises me is how much I learn every week. The reason why I keep going is simple: I get to solve real problems. In the end, all I want is to do work that actually matters.",
      "model": "It wasn't the salary that made me stay; it was the people around me."
    },
    "picture": {
      "intro": "Опиши картинку, выделяя в ней самое заметное — через расщеплённые предложения.",
      "emoji": "🎯💡🔦",
      "prompt": "Опиши, что главное на картинке, через cleft: It is … that catches your eye; What stands out is…; The thing that…",
      "hint": "Используй: It is the … that catches the eye ; What stands out is … ; The thing that makes this picture special is … .",
      "example": "What stands out in this picture is the bright light in the centre. It isn't the background that draws your attention; it is the single figure standing alone. The thing that makes the scene so powerful is the contrast between light and shadow. All you really notice at first is that one glowing spot.",
      "img": "img/b2/day-23.jpg",
      "credit": "Фото: cogdogblog · CC0 · <a href=\"https://www.flickr.com/photos/37996646802@N01/52284695535\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "24": {
    "day": 24,
    "week": "04",
    "level": "B2",
    "themeRu": "Едва… как",
    "themeEn": "Inversion: hardly / no sooner",
    "intro": "Сегодня научишься звучать так, будто пишешь роман. Тема — самая «нерусская» вещь всего уровня: <b>инверсия</b>. Когда предложение начинается с отрицательного или ограничивающего наречия (<b>hardly, no sooner, never, seldom, rarely</b>), английский переворачивает порядок слов — вспомогательный глагол прыгает <u>перед</u> подлежащим, ровно как в вопросе: «<b>Hardly had I</b> sat down <b>when</b> the phone rang». В русском мы говорим «Едва я сел, как зазвонил телефон» — и порядок слов нам ничего не стоит. Поэтому рука сама пишет «No sooner <s>I had</s>…» — и это ошибка. Сегодня поставим вспомогательный на правильное место, разведём пару-ловушку <b>than</b> (No sooner…than) и <b>when</b> (Hardly…when), и научимся звучать драматично и формально. Поехали.",
    "introAudio": "Сегодня научишься звучать так, будто пишешь роман. Тема — самая нерусская вещь всего уровня: инверсия. Когда предложение начинается с отрицательного или ограничивающего наречия — hardly, no sooner, never, seldom, rarely — английский переворачивает порядок слов: вспомогательный глагол прыгает перед подлежащим, ровно как в вопросе. Hardly had I sat down when the phone rang. В русском мы говорим едва я сел, как зазвонил телефон, и порядок слов нам ничего не стоит. Поэтому рука сама пишет No sooner I had, и это ошибка. Сегодня поставим вспомогательный на правильное место, разведём пару-ловушку than и when, и научимся звучать драматично и формально. Поехали.",
    "goals": [
      "понять механизм: отрицательное наречие в начале → вспомогательный перед подлежащим (как в вопросе)",
      "строить Hardly had I … when … и No sooner had I … than …",
      "ставить Never / Seldom / Rarely + вспомогательный + подлежащее",
      "не путать than (No sooner…than) и when (Hardly…when) и не писать «No sooner I had»"
    ],
    "learned": [
      "Понял(а) механизм: отрицательное наречие в начале → вспомогательный перед подлежащим (как в вопросе)",
      "Научился(лась) строить Hardly had I … when … и No sooner had I … than …",
      "Научился(лась) ставить Never / Seldom / Rarely + вспомогательный + подлежащее",
      "Перестал(а) путать than (No sooner…than) и when (Hardly…when) и писать «No sooner I had»"
    ],
    "review": {
      "intro": "Сегодняшняя инверсия живёт на двух старых опорах: системе рассказа из прошлого (особенно Past Perfect, had done — Дни 1–2) и порядке слов в вопросе. Прогреем обе — и инверсия ляжет ровно.",
      "introAudio": "Сегодняшняя инверсия живёт на двух старых опорах: системе рассказа из прошлого, особенно Past Perfect, had done, Дни 1 и 2, и порядке слов в вопросе. Прогреем обе — и инверсия ляжет ровно.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни предысторию в прошлом — что случилось раньше.",
          "q": "«Когда я добрался до вокзала, поезд уже ушёл» —",
          "opts": [
            "When I got to the station, the train already left.",
            "When I got to the station, the train had already left.",
            "When I had got to the station, the train already left."
          ],
          "answer": 1,
          "explain": "Поезд ушёл ДО прихода → Past Perfect: <b>had already left</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни порядок слов в вопросе — вспомогательный перед подлежащим.",
          "q": "Какой вопрос построен верно?",
          "opts": [
            "Where you had been before that?",
            "Where had you been before that?",
            "Where you were been before that?"
          ],
          "answer": 1,
          "explain": "В вопросе вспомогательный (had) идёт <b>перед</b> подлежащим: had you been. Эту же перестановку даст сегодня инверсия."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши Past Perfect для самого раннего события. leave → left.",
          "q": "By the time we arrived, the film ___ (already / start).",
          "accept": [
            "had already started",
            "had started"
          ],
          "placeholder": "the film had already …"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · механизм",
        "title": "Отрицательное наречие впереди → инверсия, как в вопросе",
        "paras": [
          "Правило-двигатель: если предложение <u>начинается</u> с отрицательного или ограничивающего наречия (never, rarely, seldom, hardly, no sooner, little, only then…), то сразу за ним порядок слов становится <b>вопросительным</b> — вспомогательный глагол выходит вперёд подлежащего.",
          "Сравни обычное и инвертированное: «I have <u>never</u> seen such chaos» → «<b>Never have I</b> seen such chaos». «She <u>rarely</u> complains» → «<b>Rarely does she</b> complain». Если своего вспомогательного нет (Present/Past Simple), появляется <b>do / does / did</b> — точно как в вопросе: Rarely <b>does</b> she complain, Seldom <b>did</b> he speak.",
          "Зачем это нужно: инверсия звучит <u>формально и эмфатично</u> — в речах, отзывах, рассказах. Это не «обязательная грамматика на каждый день», а инструмент акцента. Но строить его надо безошибочно, иначе эффект ломается."
        ],
        "audio": "Правило-двигатель: если предложение начинается с отрицательного или ограничивающего наречия — never, rarely, seldom, hardly, no sooner, little, only then — то сразу за ним порядок слов становится вопросительным: вспомогательный глагол выходит вперёд подлежащего. I have never seen such chaos превращается в Never have I seen such chaos. She rarely complains — Rarely does she complain. Если своего вспомогательного нет, появляется do, does или did, как в вопросе. Инверсия звучит формально и эмфатично — в речах, отзывах, рассказах.",
        "table": {
          "rows": [
            [
              "обычно",
              "I have never seen this."
            ],
            [
              "инверсия",
              "Never have I seen this."
            ],
            [
              "без своего aux",
              "Rarely DOES she complain."
            ],
            [
              "правило",
              "наречие + aux + подлежащее (как в вопросе)"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Никогда я не видел такого хаоса.",
            "en": "<b>Never have I</b> seen such chaos.",
            "gloss": "have прыгает вперёд I",
            "say": "Never have I seen such chaos."
          },
          {
            "ru": "Редко она жалуется.",
            "en": "<b>Rarely does she</b> complain.",
            "gloss": "нет своего aux → does",
            "say": "Rarely does she complain."
          },
          {
            "ru": "Нечасто он говорил на собраниях.",
            "en": "<b>Seldom did he</b> speak at meetings.",
            "gloss": "прошлое → did",
            "say": "Seldom did he speak at meetings."
          },
          {
            "ru": "Никогда раньше я не чувствовал себя таким живым.",
            "en": "<b>Never before had I</b> felt so alive.",
            "gloss": "Never before + had + I",
            "say": "Never before had I felt so alive."
          }
        ],
        "mistakes": [
          {
            "wrong": "Never I have seen such chaos.",
            "right": "<b>Never have I</b> seen such chaos.",
            "why": "после наречия впереди — вспомогательный перед подлежащим"
          },
          {
            "wrong": "Rarely she complains.",
            "right": "Rarely <b>does she</b> complain.",
            "why": "нет своего aux → добавляем does (как в вопросе)"
          },
          {
            "wrong": "Seldom he spoke.",
            "right": "Seldom <b>did he</b> speak.",
            "why": "прошлое без aux → did + база"
          }
        ],
        "mnemonic": "🙃 Наречие-минус впереди → aux + подлежащее. Нет aux? Бери do/does/did.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> переверни порядок после Never.",
            "q": "«Никогда я не видел ничего подобного» —",
            "opts": [
              "Never I have seen anything like it.",
              "Never have I seen anything like it.",
              "Never seen I have anything like it."
            ],
            "answer": 1,
            "explain": "Never + <b>have I</b> + seen (вспомогательный перед подлежащим)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> добавь нужный вспомогательный (своего нет).",
            "q": "Rarely ___ he admit his mistakes.",
            "opts": [
              "does",
              "is",
              "has"
            ],
            "answer": 0,
            "explain": "Present Simple без своего aux → <b>does</b>: Rarely does he admit."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери инверсию в прошлом.",
            "q": "Собери: «Редко он говорил на собраниях»",
            "want": "Seldom did he speak at meetings",
            "answer": "Seldom did he speak at meetings"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · Hardly … when",
        "title": "<em>Hardly had I … when …</em> — «едва…, как…»",
        "paras": [
          "Первый частый шаблон — про два события впритык: едва случилось первое, как тут же второе. Раннее событие идёт в <b>Past Perfect</b> и инвертируется, позднее — в <b>Past Simple</b>: <b>Hardly had I + 3-я форма … when + Past Simple</b>.",
          "«<b>Hardly had I</b> sat down <b>when</b> the phone rang» = Едва я сел, как зазвонил телефон. Синонимы hardly — <b>scarcely</b> и <b>barely</b>, работают так же: «<b>Scarcely had we</b> left <b>when</b> it started to rain».",
          "Запомни связку: после <b>Hardly / Scarcely / Barely</b> идёт <b>when</b> (а не «than»!). И обрати внимание на времена: первое, более раннее действие — <b>had + 3-я форма</b>, второе — простое прошедшее. Перепутаешь времена — рассыплется логика «едва… как…»."
        ],
        "audio": "Первый частый шаблон — про два события впритык: едва случилось первое, как тут же второе. Раннее событие в Past Perfect и инвертируется, позднее в Past Simple. Hardly had I плюс третья форма, when, плюс Past Simple. Hardly had I sat down when the phone rang — едва я сел, как зазвонил телефон. Синонимы hardly — scarcely и barely. После Hardly, Scarcely, Barely идёт when, а не than. И времена: раннее действие had плюс третья форма, второе простое прошедшее.",
        "table": {
          "rows": [
            [
              "схема",
              "Hardly had + S + V3 … when + Past Simple"
            ],
            [
              "пример",
              "Hardly had I left when it rained."
            ],
            [
              "синонимы hardly",
              "scarcely / barely (+ when)"
            ],
            [
              "связка",
              "Hardly … WHEN (не «than»)"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Едва я сел, как зазвонил телефон.",
            "en": "<b>Hardly had I</b> sat down <b>when</b> the phone rang.",
            "gloss": "had I sat … when … rang",
            "say": "Hardly had I sat down when the phone rang."
          },
          {
            "ru": "Едва мы вышли, как пошёл дождь.",
            "en": "<b>Scarcely had we</b> left <b>when</b> it started to rain.",
            "gloss": "scarcely = hardly",
            "say": "Scarcely had we left when it started to rain."
          },
          {
            "ru": "Едва она открыла дверь, как вбежала собака.",
            "en": "<b>Hardly had she</b> opened the door <b>when</b> the dog ran in.",
            "gloss": "раннее had opened, позднее ran",
            "say": "Hardly had she opened the door when the dog ran in."
          },
          {
            "ru": "Едва концерт начался, как отключили свет.",
            "en": "<b>Barely had the concert</b> begun <b>when</b> the lights went out.",
            "gloss": "barely = hardly",
            "say": "Barely had the concert begun when the lights went out."
          }
        ],
        "mistakes": [
          {
            "wrong": "Hardly I had sat down when the phone rang.",
            "right": "<b>Hardly had I</b> sat down when the phone rang.",
            "why": "после Hardly — инверсия: had перед I"
          },
          {
            "wrong": "Hardly had I sat down than the phone rang.",
            "right": "Hardly had I sat down <b>when</b> the phone rang.",
            "why": "с Hardly идёт when, не than"
          },
          {
            "wrong": "Hardly did I sit down when the phone rang.",
            "right": "Hardly <b>had I sat</b> down when the phone rang.",
            "why": "раннее действие → Past Perfect (had + V3), не did"
          }
        ],
        "mnemonic": "⏳ Hardly HAD I … WHEN … — едва (had+V3), как (Past Simple).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери связку после Hardly.",
            "q": "Hardly had we arrived ___ the meeting started.",
            "opts": [
              "than",
              "when",
              "then"
            ],
            "answer": 1,
            "explain": "Hardly / Scarcely / Barely … <b>when</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> поставь вспомогательный на место.",
            "q": "«Едва она ушла, как зазвонил её телефон» —",
            "opts": [
              "Hardly she had left when her phone rang.",
              "Hardly had she left when her phone rang.",
              "Hardly did she leave than her phone rang."
            ],
            "answer": 1,
            "explain": "Hardly + <b>had she</b> left + when (had перед подлежащим)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери шаблон Hardly … when.",
            "q": "Собери: «Едва я сел, как зазвонил телефон»",
            "want": "Hardly had I sat down when the phone rang",
            "answer": "Hardly had I sat down when the phone rang"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · No sooner … than (русская ловушка)",
        "title": "<em>No sooner had I … than …</em> — стереги <em>than</em>",
        "paras": [
          "Близнец предыдущего шаблона, тот же смысл «едва…, как…», но <u>другая</u> связка: <b>No sooner had I + 3-я форма … than + Past Simple</b>. «<b>No sooner had I</b> closed my eyes <b>than</b> the alarm went off» = Не успел я закрыть глаза, как зазвонил будильник.",
          "Две ловушки разом. Первая — порядок слов: по-русски «No sooner <s>I had</s>…» звучит нормально, но по-английски нужно <b>No sooner had I</b> (вспомогательный вперёд). Вторая — связка: после No sooner идёт <b>than</b> (потому что внутри сравнение: «не раньше, ЧЕМ»), а не «when» и не «then».",
          "Держи пару в голове: <b>Hardly / Scarcely / Barely … WHEN</b>, но <b>No sooner … THAN</b>. Перепутать than и when здесь — классическая B2-ошибка. Подсказка-логика: в «no sooner» спрятано «sooner than» — отсюда и than."
        ],
        "audio": "Близнец предыдущего шаблона, тот же смысл едва, как, но другая связка: No sooner had I плюс третья форма, than, плюс Past Simple. No sooner had I closed my eyes than the alarm went off — не успел я закрыть глаза, как зазвонил будильник. Две ловушки. Первая — порядок слов: по-русски No sooner I had звучит нормально, но по-английски нужно No sooner had I. Вторая — связка: после No sooner идёт than, потому что внутри сравнение, не раньше чем, а не when и не then. Держи пару: Hardly, Scarcely, Barely плюс when, но No sooner плюс than.",
        "table": {
          "rows": [
            [
              "схема",
              "No sooner had + S + V3 … than + Past Simple"
            ],
            [
              "пример",
              "No sooner had I left than it rained."
            ],
            [
              "ловушка порядка",
              "No sooner I had ✗ → No sooner HAD I ✓"
            ],
            [
              "ловушка связки",
              "No sooner … THAN (не when/then)"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Не успел я закрыть глаза, как зазвонил будильник.",
            "en": "<b>No sooner had I</b> closed my eyes <b>than</b> the alarm went off.",
            "gloss": "No sooner had I … than",
            "say": "No sooner had I closed my eyes than the alarm went off."
          },
          {
            "ru": "Не успели мы сесть, как принесли счёт.",
            "en": "<b>No sooner had we</b> sat down <b>than</b> the bill arrived.",
            "gloss": "than, не when",
            "say": "No sooner had we sat down than the bill arrived."
          },
          {
            "ru": "Не успел он войти, как все замолчали.",
            "en": "<b>No sooner had he</b> walked in <b>than</b> everyone went quiet.",
            "gloss": "had he … than",
            "say": "No sooner had he walked in than everyone went quiet."
          },
          {
            "ru": "Не успела она повесить трубку, как телефон зазвонил снова.",
            "en": "<b>No sooner had she</b> hung up <b>than</b> the phone rang again.",
            "gloss": "раннее had hung up, позднее rang",
            "say": "No sooner had she hung up than the phone rang again."
          }
        ],
        "mistakes": [
          {
            "wrong": "No sooner I had closed my eyes than the alarm went off.",
            "right": "<b>No sooner had I</b> closed my eyes than the alarm went off.",
            "why": "нужна инверсия: had перед I"
          },
          {
            "wrong": "No sooner had I left when it started to rain.",
            "right": "No sooner had I left <b>than</b> it started to rain.",
            "why": "с No sooner идёт than, не when"
          },
          {
            "wrong": "No sooner had he arrived then we ate.",
            "right": "No sooner had he arrived <b>than</b> we ate.",
            "why": "than (сравнение), а не then (потом)"
          }
        ],
        "mnemonic": "🔁 Hardly … WHEN · No sooner … THAN. («sooner than» — отсюда than.)",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери связку после No sooner.",
            "q": "No sooner had we paid ___ the waiter brought dessert.",
            "opts": [
              "when",
              "than",
              "then"
            ],
            "answer": 1,
            "explain": "No sooner … <b>than</b> (внутри сравнение «sooner than»)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> исправь порядок слов.",
            "q": "Какой вариант верный?",
            "opts": [
              "No sooner I had left than the storm began.",
              "No sooner had I left than the storm began.",
              "No sooner had I left when the storm began."
            ],
            "answer": 1,
            "explain": "инверсия (had I) + связка <b>than</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши инверсию. close → closed.",
            "q": "Не успел я закрыть глаза, как зазвонил будильник. (close my eyes / the alarm / go off)",
            "accept": [
              "no sooner had i closed my eyes than the alarm went off",
              "no sooner had i closed my eyes than the alarm rang"
            ],
            "placeholder": "No sooner had I … than …"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · собираем и шлифуем",
        "title": "Never / Seldom / Rarely и пара <em>when ↔ than</em>",
        "paras": [
          "Соберём всё вместе. Чисто «частотные» наречия <b>Never / Seldom / Rarely / Hardly ever / Little</b> в начале просто запускают инверсию без второй части: «<b>Seldom have I</b> been so moved», «<b>Rarely do we</b> get a chance like this», «<b>Never again will I</b> trust him».",
          "А «двусобытийные» шаблоны держи парой: <b>Hardly / Scarcely / Barely</b> ведут к <b>when</b>; <b>No sooner</b> ведёт к <b>than</b>. Один и тот же смысл «едва…, как…» — но связка зависит от первого слова. Это и есть главный экзаменационный капкан дня.",
          "Последняя проверка перед речью: (1) после наречия в начале стоит <u>вспомогательный</u> (have/had/do/does/did/will), а не подлежащее; (2) раннее из двух событий — <u>Past Perfect</u>; (3) связка правильная — when для Hardly, than для No sooner. Три галочки — и инверсия звучит безупречно."
        ],
        "audio": "Соберём всё вместе. Частотные наречия Never, Seldom, Rarely, Hardly ever, Little в начале просто запускают инверсию без второй части: Seldom have I been so moved. Rarely do we get a chance like this. Never again will I trust him. А двусобытийные шаблоны держи парой: Hardly, Scarcely, Barely ведут к when; No sooner ведёт к than. Перед речью проверь три вещи: после наречия стоит вспомогательный, а не подлежащее; раннее событие в Past Perfect; связка правильная — when для Hardly, than для No sooner.",
        "table": {
          "rows": [
            [
              "Never / Seldom / Rarely + aux + S",
              "Seldom have I seen…"
            ],
            [
              "Never again + will + S",
              "Never again will I trust him."
            ],
            [
              "Hardly / Scarcely / Barely",
              "→ when"
            ],
            [
              "No sooner",
              "→ than"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Редко мне выпадал такой шанс.",
            "en": "<b>Seldom have I</b> had such a chance.",
            "gloss": "частотное → инверсия без второй части",
            "say": "Seldom have I had such a chance."
          },
          {
            "ru": "Больше никогда я ему не поверю.",
            "en": "<b>Never again will I</b> trust him.",
            "gloss": "Never again + will + I",
            "say": "Never again will I trust him."
          },
          {
            "ru": "Едва погас свет, как зрители затихли.",
            "en": "<b>Hardly had the lights</b> gone out <b>when</b> the audience fell silent.",
            "gloss": "Hardly … when",
            "say": "Hardly had the lights gone out when the audience fell silent."
          },
          {
            "ru": "Не успел поезд тронуться, как пошёл дождь.",
            "en": "<b>No sooner had the train</b> moved <b>than</b> it began to rain.",
            "gloss": "No sooner … than",
            "say": "No sooner had the train moved than it began to rain."
          }
        ],
        "mistakes": [
          {
            "wrong": "Seldom I have seen such talent.",
            "right": "Seldom <b>have I</b> seen such talent.",
            "why": "после Seldom — инверсия (have перед I)"
          },
          {
            "wrong": "No sooner the film had started when the power went out.",
            "right": "No sooner <b>had the film</b> started <b>than</b> the power went out.",
            "why": "инверсия + связка than (а не порядок «the film had» и не when)"
          },
          {
            "wrong": "Never again I will lend him money.",
            "right": "Never again <b>will I</b> lend him money.",
            "why": "will выходит вперёд подлежащего"
          }
        ],
        "mnemonic": "✅ 3 галочки: aux впереди · раннее = had+V3 · Hardly→when / No sooner→than.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> запусти инверсию после Seldom.",
            "q": "«Редко мы видим такую самоотдачу» —",
            "opts": [
              "Seldom we do see such dedication.",
              "Seldom do we see such dedication.",
              "Seldom we see such dedication."
            ],
            "answer": 1,
            "explain": "Seldom + <b>do we</b> see (нет своего aux → do)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную связку под первое слово.",
            "q": "Scarcely had the game begun ___ it started to snow.",
            "opts": [
              "than",
              "when",
              "then"
            ],
            "answer": 1,
            "explain": "Scarcely (= Hardly) → <b>when</b>. (than было бы у No sooner.)"
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери инверсию с Never again.",
            "q": "Собери: «Больше никогда я ему не поверю»",
            "want": "Never again will I trust him",
            "answer": "Never again will I trust him"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Рита драматично пересказывает Сэму ужасное утро. Слушай инверсию в действии — и связки when ↔ than.",
      "lines": [
        {
          "who": "A",
          "en": "Honestly, what a morning. No sooner had I left the house than it started pouring.",
          "ru": "Честно, что за утро. Не успела я выйти из дома, как полил ливень."
        },
        {
          "who": "B",
          "en": "Oh no. And of course you had no umbrella.",
          "ru": "О нет. И зонта, конечно, не было."
        },
        {
          "who": "A",
          "en": "Worse. Hardly had I reached the bus stop when the bus drove straight past me.",
          "ru": "Хуже. Едва я добралась до остановки, как автобус проехал прямо мимо."
        },
        {
          "who": "B",
          "en": "Never have I seen you this unlucky.",
          "ru": "Никогда не видел тебя такой невезучей."
        },
        {
          "who": "A",
          "en": "Never again will I leave home without checking the weather.",
          "ru": "Больше никогда не выйду из дома, не проверив погоду."
        }
      ]
    },
    "vocab": {
      "intro": "Наречия-«пускатели» инверсии и слова дня. Запоминай вместе со связкой: Hardly→when, No sooner→than.",
      "items": [
        {
          "en": "hardly … when",
          "ru": "едва… как (+ инверсия)",
          "ex": "Hardly had I sat down when it rang."
        },
        {
          "en": "scarcely / barely",
          "ru": "едва (синонимы hardly)",
          "ex": "Barely had we left when it rained."
        },
        {
          "en": "no sooner … than",
          "ru": "не успел… как (+ инверсия)",
          "ex": "No sooner had I paid than it closed."
        },
        {
          "en": "never (again)",
          "ru": "никогда (больше)",
          "ex": "Never again will I do that."
        },
        {
          "en": "seldom",
          "ru": "редко (формально)",
          "ex": "Seldom does he complain."
        },
        {
          "en": "rarely",
          "ru": "редко",
          "ex": "Rarely have I been so tired."
        },
        {
          "en": "the alarm goes off",
          "ru": "будильник звонит / срабатывает",
          "ex": "The alarm went off at six."
        },
        {
          "en": "to pour (with rain)",
          "ru": "лить (о дожде)",
          "ex": "It started pouring outside."
        },
        {
          "en": "to fall silent",
          "ru": "затихнуть, замолчать",
          "ex": "The room fell silent at once."
        },
        {
          "en": "dedication",
          "ru": "самоотдача, преданность делу",
          "ex": "Seldom do we see such dedication."
        },
        {
          "en": "to go past",
          "ru": "проехать / пройти мимо",
          "ex": "The bus went straight past me."
        },
        {
          "en": "moved (deeply)",
          "ru": "тронутый, растроганный",
          "ex": "Never have I been so moved."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай драматичный рассказ об одном вечере. Замечай инверсию и держи в уме: Hardly…when, No sooner…than.",
      "title": "The night of the storm",
      "sentences": [
        "Rarely had the village seen a storm like that one.",
        "No sooner had the sun set than the wind grew violent.",
        "Hardly had we shut the windows when the power went out.",
        "Never before had I felt so completely cut off from the world.",
        "Seldom does the sea roar the way it did that night.",
        "No sooner had the storm passed than the neighbours came out to help.",
        "Scarcely had we stepped outside when we saw the fallen tree.",
        "Never again will I underestimate the weather on that coast."
      ],
      "translation": "Редко деревня видела такую бурю. Не успело сесть солнце, как ветер стал свирепым. Едва мы закрыли окна, как отключился свет. Никогда прежде я не чувствовал себя настолько отрезанным от мира. Редко море ревёт так, как в ту ночь. Не успела буря пройти, как соседи вышли помогать. Едва мы ступили наружу, как увидели упавшее дерево. Больше никогда я не буду недооценивать погоду на том побережье."
    },
    "drag": {
      "intro": "Соедини начало инверсии с правильной связкой или продолжением.",
      "pairs": [
        [
          "Hardly had I …",
          "… when …"
        ],
        [
          "No sooner had I …",
          "… than …"
        ],
        [
          "Seldom …",
          "+ aux + подлежащее"
        ],
        [
          "раннее из двух событий",
          "Past Perfect (had + V3)"
        ],
        [
          "Never again …",
          "will + I + база"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — пять вопросов на инверсию. Главное: aux впереди и не перепутать when ↔ than.",
      "items": [
        {
          "q": "«Едва я сел, как зазвонил телефон» —",
          "opts": [
            "Hardly I had sat down when the phone rang.",
            "Hardly had I sat down when the phone rang.",
            "Hardly had I sat down than the phone rang."
          ],
          "answer": 1,
          "explain": "инверсия (had I) + связка <b>when</b>."
        },
        {
          "q": "No sooner had we arrived ___ the rain stopped.",
          "opts": [
            "when",
            "than",
            "then"
          ],
          "answer": 1,
          "explain": "No sooner … <b>than</b>."
        },
        {
          "q": "Какой вариант верный?",
          "opts": [
            "Never I have seen such a mess.",
            "Never have I seen such a mess.",
            "Never seen I have such a mess."
          ],
          "answer": 1,
          "explain": "Never + <b>have I</b> + seen (вспомогательный перед подлежащим)."
        },
        {
          "q": "Rarely ___ such talent in one team.",
          "opts": [
            "we see",
            "do we see",
            "we do see"
          ],
          "answer": 1,
          "explain": "Present Simple без своего aux → <b>do we see</b>."
        },
        {
          "q": "Какое время у раннего из двух событий?",
          "opts": [
            "Past Simple (left)",
            "Past Perfect (had left)",
            "Present Perfect (have left)"
          ],
          "answer": 1,
          "explain": "раннее событие → <b>Past Perfect</b>: Hardly/No sooner had I left…"
        }
      ]
    },
    "essay": {
      "intro": "Расскажи историю драматично — пусть пара событий «едва…, как…» прозвучит через инверсию.",
      "prompt": "Напиши 5–6 предложений о вечере или дне, когда всё пошло наперекосяк. Используй минимум три инверсии: Hardly had I … when …, No sooner had I … than …, Never / Seldom / Rarely + aux…",
      "hint": "Структуры: No sooner had I … than … ; Hardly had I … when … ; Never have I … ; Rarely does … ; Never again will I … .",
      "example": "Last Friday started badly and only got worse. No sooner had I stepped out of the door than I realised I'd forgotten my keys. Hardly had I gone back inside when the phone started ringing with bad news from work. Rarely have I felt so unlucky in a single morning. Seldom does everything go wrong at once, but that day it truly did. Never again will I leave the house in such a rush.",
      "model": "No sooner had I stepped out of the door than I realised I'd forgotten my keys."
    },
    "picture": {
      "intro": "Опиши драматичную сцену на картинке через инверсию — как будто рассказываешь захватывающую историю.",
      "emoji": "⛈️🚪⏱️",
      "prompt": "Опиши, что происходит на картинке, в драматичном стиле с инверсией: No sooner had…, Hardly had…, Never have I…",
      "hint": "Используй: No sooner had … than … ; Hardly had … when … ; Never have I seen … .",
      "example": "The picture captures a moment of pure chaos. No sooner had the people stepped outside than the storm broke over them. Hardly had they opened their umbrellas when the wind tore them apart. Never have I seen a street empty so quickly. Rarely does an ordinary evening turn so dramatic.",
      "img": "img/b2/day-24.jpg",
      "credit": "Фото: dullhunk · Public Domain · <a href=\"https://www.flickr.com/photos/14829735@N00/52086229981\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "25": {
    "day": 25,
    "week": "04",
    "level": "B2",
    "themeRu": "Не только…",
    "themeEn": "Not only / little did I",
    "intro": "Вчера мы запустили инверсию после hardly и no sooner — сегодня её вторая, ещё более «литературная» половина: <b>Not only … but also</b> с инверсией, драматичное <b>Little did I know</b>, выделители <b>Only then / Only after … did …</b> и эмоциональное <b>So + прилагательное + aux</b>. Всё это — тот самый скачок B1→B2: ты не добавляешь новые факты, ты <u>управляешь акцентом</u>. По-русски «Он не только пришёл, но и принёс торт» мы строим легко, а по-английски «Not only <s>he came</s>» — ошибка: после Not only обязательно прыгает вспомогательный — <b>Not only did he come</b>. И «<s>Little I knew</s>» → <b>Little did I know</b>. Сегодня доведём эту перестановку до автоматизма. Поехали.",
    "introAudio": "Вчера мы запустили инверсию после hardly и no sooner — сегодня её вторая, ещё более литературная половина: Not only … but also с инверсией, драматичное Little did I know, выделители Only then и Only after … did …, и эмоциональное So плюс прилагательное плюс aux. Всё это тот самый скачок B1 на B2: ты не добавляешь новые факты, ты управляешь акцентом. По-русски он не только пришёл, но и принёс торт мы строим легко, а по-английски Not only he came — ошибка: после Not only обязательно прыгает вспомогательный, Not only did he come. И Little I knew превращается в Little did I know. Сегодня доведём эту перестановку до автоматизма. Поехали.",
    "goals": [
      "строить Not only … but also … с инверсией в первой части",
      "пользоваться драматичным Little did I know / realise",
      "выделять момент через Only then / Only after / Only when … + did …",
      "ловить ловушки «Not only he came» и «Little I knew»"
    ],
    "learned": [
      "Научился(лась) строить Not only … but also … с инверсией в первой части",
      "Научился(лась) пользоваться драматичным Little did I know / realise",
      "Научился(лась) выделять момент через Only then / Only after / Only when … + did …",
      "Поймал(а) ловушки «Not only he came» и «Little I knew»"
    ],
    "review": {
      "intro": "Сначала закрепим вчерашнюю инверсию (День 24): механизм «наречие впереди → вспомогательный перед подлежащим». Сегодня он работает точно так же, только с новыми словами-пускателями.",
      "introAudio": "Сначала закрепим вчерашнюю инверсию, День 24: механизм — наречие впереди, вспомогательный перед подлежащим. Сегодня он работает точно так же, только с новыми словами-пускателями.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни вчерашнее: после наречия — вспомогательный вперёд.",
          "q": "«Никогда я не видел такой толпы» —",
          "opts": [
            "Never I have seen such a crowd.",
            "Never have I seen such a crowd.",
            "Never seen I have such a crowd."
          ],
          "answer": 1,
          "explain": "Never + <b>have I</b> + seen (вспомогательный перед подлежащим)."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> выбери связку — это вчерашняя пара when ↔ than.",
          "q": "No sooner had the meeting ended ___ everyone rushed out.",
          "opts": [
            "when",
            "than",
            "then"
          ],
          "answer": 1,
          "explain": "No sooner … <b>than</b> (Hardly … when)."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши вспомогательный (своего нет → does).",
          "q": "Rarely ___ she ask for help. (does / do)",
          "accept": [
            "does"
          ],
          "placeholder": "Rarely … she ask for help"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · Not only … but also",
        "title": "<em>Not only did he … but he also …</em>",
        "paras": [
          "Когда хочешь сказать «не только X, но и Y» с нажимом, английский ставит <b>Not only</b> в начало — и тут же требует инверсию в первой части: <b>Not only + aux + подлежащее + …, but … also …</b>. «<b>Not only did he come</b>, but he <b>also</b> brought a cake.»",
          "Если в глаголе уже есть вспомогательный (be, have, will, can), вперёд выходит он: «<b>Not only is she</b> talented, but she's also kind», «<b>Not only have they</b> finished, but they've also tidied up». Если своего нет — берём do/does/did: «Not only <b>did he</b> come…».",
          "Вторая часть («but … also») — обычный порядок слов, инверсии там НЕ нужно. also обычно стоит внутри: «but he <b>also</b> brought…». Главная русская ловушка ровно в первой части: «Not only <s>he came</s>» → <b>Not only did he come</b>."
        ],
        "audio": "Когда хочешь сказать не только X, но и Y с нажимом, английский ставит Not only в начало — и тут же требует инверсию в первой части: Not only плюс aux плюс подлежащее, but also. Not only did he come, but he also brought a cake. Если в глаголе уже есть вспомогательный — be, have, will, can — вперёд выходит он: Not only is she talented, but she's also kind. Если своего нет — берём do, does, did. Вторая часть, but also, идёт обычным порядком слов, инверсии там не нужно. Главная ловушка в первой части: Not only he came — ошибка, нужно Not only did he come.",
        "table": {
          "rows": [
            [
              "схема",
              "Not only + aux + S …, but … also …"
            ],
            [
              "есть свой aux",
              "Not only IS she …, but she's also …"
            ],
            [
              "нет своего aux",
              "Not only DID he come, but he also …"
            ],
            [
              "ловушка",
              "Not only he came ✗ → Not only did he come ✓"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Он не только пришёл, но и принёс торт.",
            "en": "<b>Not only did he come</b>, but he <b>also</b> brought a cake.",
            "gloss": "нет своего aux → did + база",
            "say": "Not only did he come, but he also brought a cake."
          },
          {
            "ru": "Она не только талантлива, но и добра.",
            "en": "<b>Not only is she</b> talented, but she's <b>also</b> kind.",
            "gloss": "есть свой aux (is) → выходит вперёд",
            "say": "Not only is she talented, but she is also kind."
          },
          {
            "ru": "Они не только закончили, но и убрались.",
            "en": "<b>Not only have they</b> finished, but they've <b>also</b> tidied up.",
            "gloss": "have выходит вперёд",
            "say": "Not only have they finished, but they have also tidied up."
          },
          {
            "ru": "Этот план не только дешевле, но и быстрее.",
            "en": "<b>Not only is this plan</b> cheaper, but it's <b>also</b> faster.",
            "gloss": "is → вперёд",
            "say": "Not only is this plan cheaper, but it is also faster."
          }
        ],
        "mistakes": [
          {
            "wrong": "Not only he came, but he also brought a cake.",
            "right": "<b>Not only did he come</b>, but he also brought a cake.",
            "why": "после Not only — инверсия: did he come"
          },
          {
            "wrong": "Not only she is talented, but also kind.",
            "right": "<b>Not only is she</b> talented, but she's also kind.",
            "why": "свой aux (is) выходит вперёд подлежащего"
          },
          {
            "wrong": "Not only did he came, but he also called.",
            "right": "Not only did he <b>come</b>, but he also called.",
            "why": "после did — базовая форма (come), не «came»"
          }
        ],
        "mnemonic": "➕ Not only + aux + S …, but … also … (инверсия только в первой части).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> запусти инверсию после Not only.",
            "q": "«Он не только опоздал, но и забыл отчёт» —",
            "opts": [
              "Not only he was late, but he also forgot the report.",
              "Not only was he late, but he also forgot the report.",
              "Not only late he was, but he also forgot the report."
            ],
            "answer": 1,
            "explain": "свой aux (was) → вперёд: <b>Not only was he</b> late."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> какая форма после did?",
            "q": "Not only ___ the prize, but she also got a job offer.",
            "opts": [
              "did she won",
              "did she win",
              "she did win"
            ],
            "answer": 1,
            "explain": "did + <b>базовая форма</b>: did she win."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери первую часть с инверсией.",
            "q": "Собери: «Он не только пришёл, но и принёс торт»",
            "want": "Not only did he come but he also brought a cake",
            "answer": "Not only did he come but he also brought a cake"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · Little did I know (русская ловушка)",
        "title": "<em>Little did I know …</em> — драматичный поворот",
        "paras": [
          "<b>Little</b> в начале предложения — это «отрицательный» по смыслу пускатель инверсии («совсем не / мало»), и он даёт один из самых киношных оборотов английского: <b>Little did I know / realise / suspect (that) …</b> = «Знать бы я тогда…», «И не подозревал я, что…». Это рассказ с эффектом надвигающегося поворота.",
          "Механика та же, что вчера: после Little выходит вспомогательный. В прошлом обычно <b>did</b>: «<b>Little did I know</b> that everything was about to change», «<b>Little did she realise</b> how late it was». Глагол после did — в базовой форме (know, realise), без -ed.",
          "Русская рука пишет «<s>Little I knew</s>» — без перестановки, как «Мало я знал». По-английски обязательно <b>Little did I know</b>. Запомни этот оборот целым блоком — он почти всегда стоит в начале драматичного предложения о прошлом."
        ],
        "audio": "Little в начале предложения — это отрицательный по смыслу пускатель инверсии, мало или совсем не, и он даёт один из самых киношных оборотов английского: Little did I know, realise, suspect, что. Знать бы я тогда. И не подозревал я, что. Механика та же: после Little выходит вспомогательный, в прошлом обычно did. Little did I know that everything was about to change. Глагол после did в базовой форме, без -ed. Русская рука пишет Little I knew, без перестановки. По-английски обязательно Little did I know.",
        "table": {
          "rows": [
            [
              "Little did I know (that)…",
              "и не знал я, что…"
            ],
            [
              "Little did she realise…",
              "она и не подозревала…"
            ],
            [
              "после did",
              "базовая форма: know / realise"
            ],
            [
              "ловушка",
              "Little I knew ✗ → Little did I know ✓"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "И не знал я тогда, что всё вот-вот изменится.",
            "en": "<b>Little did I know</b> that everything was about to change.",
            "gloss": "Little did I know + clause",
            "say": "Little did I know that everything was about to change."
          },
          {
            "ru": "Она и не подозревала, как поздно уже было.",
            "en": "<b>Little did she realise</b> how late it was.",
            "gloss": "did she realise (база)",
            "say": "Little did she realise how late it was."
          },
          {
            "ru": "Мы и не догадывались, что за нами наблюдают.",
            "en": "<b>Little did we suspect</b> that we were being watched.",
            "gloss": "Little did we suspect",
            "say": "Little did we suspect that we were being watched."
          },
          {
            "ru": "И не думал он, что это их последняя встреча.",
            "en": "<b>Little did he think</b> it would be their last meeting.",
            "gloss": "Little did he think",
            "say": "Little did he think it would be their last meeting."
          }
        ],
        "mistakes": [
          {
            "wrong": "Little I knew that everything would change.",
            "right": "<b>Little did I know</b> that everything would change.",
            "why": "после Little — инверсия: did I know"
          },
          {
            "wrong": "Little did I knew about the plan.",
            "right": "Little did I <b>know</b> about the plan.",
            "why": "после did — базовая форма (know), без -ed"
          },
          {
            "wrong": "Little she realised how late it was.",
            "right": "Little <b>did she realise</b> how late it was.",
            "why": "нужен did перед подлежащим"
          }
        ],
        "mnemonic": "🎬 Little DID I know … — драматичный поворот; после did — база.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> поставь вспомогательный после Little.",
            "q": "«И не знал я, что меня ждёт сюрприз» —",
            "opts": [
              "Little I knew a surprise was waiting.",
              "Little did I know a surprise was waiting.",
              "Little knew I a surprise was waiting."
            ],
            "answer": 1,
            "explain": "Little + <b>did I know</b> (инверсия, база know)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> какая форма после did?",
            "q": "Little did she ___ how much it would cost.",
            "opts": [
              "realised",
              "realise",
              "realises"
            ],
            "answer": 1,
            "explain": "после did — базовая форма: <b>realise</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери драматичный оборот.",
            "q": "Собери: «И не знал я, что всё вот-вот изменится»",
            "want": "Little did I know that everything was about to change",
            "answer": "Little did I know that everything was about to change"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · Only then / Only after",
        "title": "<em>Only then did I … / Only after … did …</em>",
        "paras": [
          "Слово <b>Only</b> в начале (с указанием времени или условия) — ещё один пускатель инверсии. Оно выделяет момент, <u>только</u> после которого что-то случилось: <b>Only then did I understand …</b>, <b>Only after the meeting did she call …</b>, <b>Only when he left did we relax …</b>.",
          "Тонкость: инверсия идёт в <u>главной</u> части, а не сразу после Only. В «<b>Only after the meeting did she call me</b>» обстоятельство (after the meeting) стоит спокойно, а перестановка — в «did she call». В «<b>Only when he left did we relax</b>» придаточное (when he left) обычное, инверсия — в «did we relax».",
          "Сюда же — <b>Only by … / Only in this way …</b>: «<b>Only by working together can we</b> succeed». Везде логика одна: Only-фраза впереди → в главной части вспомогательный выходит перед подлежащим."
        ],
        "audio": "Слово Only в начале, с указанием времени или условия, — ещё один пускатель инверсии. Оно выделяет момент, только после которого что-то случилось: Only then did I understand. Only after the meeting did she call. Only when he left did we relax. Тонкость: инверсия идёт в главной части, а не сразу после Only. В Only after the meeting did she call me обстоятельство стоит спокойно, а перестановка в did she call. Сюда же Only by, Only in this way: Only by working together can we succeed.",
        "table": {
          "rows": [
            [
              "Only then did I …",
              "только тогда я …"
            ],
            [
              "Only after … did S …",
              "только после … (инверсия в главной)"
            ],
            [
              "Only when … did S …",
              "только когда … (инверсия в главной)"
            ],
            [
              "Only by … can S …",
              "только так / тем, что …"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Только тогда я понял свою ошибку.",
            "en": "<b>Only then did I</b> understand my mistake.",
            "gloss": "Only then + did I",
            "say": "Only then did I understand my mistake."
          },
          {
            "ru": "Только после собрания она мне позвонила.",
            "en": "<b>Only after the meeting did she</b> call me.",
            "gloss": "инверсия в главной части",
            "say": "Only after the meeting did she call me."
          },
          {
            "ru": "Только когда он ушёл, мы расслабились.",
            "en": "<b>Only when he left did we</b> relax.",
            "gloss": "придаточное обычное, инверсия в главной",
            "say": "Only when he left did we relax."
          },
          {
            "ru": "Только работая вместе, мы сможем добиться успеха.",
            "en": "<b>Only by working together can we</b> succeed.",
            "gloss": "Only by … + can we",
            "say": "Only by working together can we succeed."
          }
        ],
        "mistakes": [
          {
            "wrong": "Only then I understood my mistake.",
            "right": "<b>Only then did I</b> understand my mistake.",
            "why": "после Only-фразы — инверсия в главной части"
          },
          {
            "wrong": "Only after the meeting she did call me.",
            "right": "Only after the meeting <b>did she</b> call me.",
            "why": "вспомогательный выходит ПЕРЕД подлежащим: did she call"
          },
          {
            "wrong": "Only when did he leave we relaxed.",
            "right": "Only when he left <b>did we</b> relax.",
            "why": "инверсия в главной (did we), придаточное (when he left) обычное"
          }
        ],
        "mnemonic": "🕐 Only + время/условие впереди → в главной части aux + подлежащее.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> поставь инверсию после Only then.",
            "q": "«Только тогда я понял правду» —",
            "opts": [
              "Only then I understood the truth.",
              "Only then did I understand the truth.",
              "Only then understood I the truth."
            ],
            "answer": 1,
            "explain": "Only then + <b>did I</b> understand."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> где должна быть инверсия?",
            "q": "Only when the rain stopped ___ outside.",
            "opts": [
              "we went",
              "did we go",
              "we did go"
            ],
            "answer": 1,
            "explain": "инверсия в главной части: <b>did we go</b> (придаточное «when the rain stopped» обычное)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши инверсию. call — база.",
            "q": "Только после собрания она мне позвонила. (after the meeting / she / call me)",
            "accept": [
              "only after the meeting did she call me"
            ],
            "placeholder": "Only after the meeting did she …"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · So + adj + aux и общий капкан",
        "title": "<em>So tired was I that …</em> и финальная сверка",
        "paras": [
          "Последний шаблон дня — эмоциональное усиление через <b>So + прилагательное + aux + подлежащее + that …</b>. «<b>So tired was I that</b> I fell asleep at my desk», «<b>So loud was the music that</b> we couldn't talk». Прилагательное выносится вперёд под ударение, и за ним — инверсия. Родственный книжный вариант — <b>Such was the … that …</b>: «Such was the noise that nobody heard the bell».",
          "Собери всю неделю инверсии в одну проверку. Что бы ни стояло впереди — Not only, Little, Only then, So + adj, Never, No sooner — дальше идёт <u>вспомогательный перед подлежащим</u>, ровно как в вопросе. Нет своего вспомогательного → do/does/did + базовая форма.",
          "Главные капканы держи на виду: «Not only <s>he came</s>» → <b>Not only did he come</b>; «<s>Little I knew</s>» → <b>Little did I know</b>; «Only then <s>I understood</s>» → <b>Only then did I understand</b>. Инверсия — это эффект; сломанный порядок слов этот эффект убивает."
        ],
        "audio": "Последний шаблон дня — эмоциональное усиление через So плюс прилагательное плюс aux плюс подлежащее плюс that. So tired was I that I fell asleep at my desk. So loud was the music that we couldn't talk. Родственный книжный вариант — Such was the noise that nobody heard the bell. Собери всю неделю инверсии в одну проверку: что бы ни стояло впереди — Not only, Little, Only then, So plus adjective, Never, No sooner — дальше вспомогательный перед подлежащим, как в вопросе. Главные капканы: Not only he came, Little I knew, Only then I understood — все требуют did перед подлежащим.",
        "table": {
          "rows": [
            [
              "So + adj + aux + S + that…",
              "So tired was I that I slept."
            ],
            [
              "Such + be + … + that…",
              "Such was the noise that…"
            ],
            [
              "общий механизм",
              "пускатель + aux + подлежащее"
            ],
            [
              "нет своего aux",
              "→ do / does / did + база"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Я так устал, что заснул прямо за столом.",
            "en": "<b>So tired was I that</b> I fell asleep at my desk.",
            "gloss": "So + adj + was + I + that",
            "say": "So tired was I that I fell asleep at my desk."
          },
          {
            "ru": "Музыка была такой громкой, что мы не могли разговаривать.",
            "en": "<b>So loud was the music that</b> we couldn't talk.",
            "gloss": "So loud + was + the music",
            "say": "So loud was the music that we couldn't talk."
          },
          {
            "ru": "Шум был таким, что никто не услышал звонок.",
            "en": "<b>Such was the noise that</b> nobody heard the bell.",
            "gloss": "Such was the … that …",
            "say": "Such was the noise that nobody heard the bell."
          },
          {
            "ru": "Он не только извинился, но и всё исправил.",
            "en": "<b>Not only did he</b> apologise, but he <b>also</b> fixed it.",
            "gloss": "сводим с правилом 1",
            "say": "Not only did he apologise, but he also fixed it."
          }
        ],
        "mistakes": [
          {
            "wrong": "So tired I was that I fell asleep.",
            "right": "<b>So tired was I</b> that I fell asleep.",
            "why": "после So + adj — инверсия: was I"
          },
          {
            "wrong": "Only then I understood the joke.",
            "right": "Only then <b>did I</b> understand the joke.",
            "why": "Only-фраза впереди → did I understand"
          },
          {
            "wrong": "Not only she sings, but also dances.",
            "right": "<b>Not only does she</b> sing, but she also dances.",
            "why": "нет своего aux → does + база (sing)"
          }
        ],
        "mnemonic": "🎚️ So + adj + aux + S + that… Один механизм на всю неделю: пускатель → aux + S.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> построй усиление с So + adj.",
            "q": "«Я был так зол, что не мог говорить» —",
            "opts": [
              "So angry I was that I couldn't speak.",
              "So angry was I that I couldn't speak.",
              "So I was angry that I couldn't speak."
            ],
            "answer": 1,
            "explain": "So + adj + <b>was I</b> + that (инверсия)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> исправь главный капкан недели.",
            "q": "Какой вариант верный?",
            "opts": [
              "Not only he came, but also helped.",
              "Not only did he come, but he also helped.",
              "Not only came he, but also he helped."
            ],
            "answer": 1,
            "explain": "Not only + <b>did he come</b>, но вторая часть обычным порядком: but he also helped."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши усиление. So + adj + was I + that.",
            "q": "Я так устал, что заснул прямо за столом. (tired / fall asleep at my desk)",
            "accept": [
              "so tired was i that i fell asleep at my desk"
            ],
            "placeholder": "So tired was I that I …"
          }
        ]
      }
    ],
    "scene": {
      "intro": "Нина рассказывает Полу о неожиданном вечере. Слушай, как драматичная инверсия делает обычную историю яркой.",
      "lines": [
        {
          "who": "A",
          "en": "I only went out for milk. Little did I know how the evening would end.",
          "ru": "Я вышла всего лишь за молоком. И не подозревала, чем закончится вечер."
        },
        {
          "who": "B",
          "en": "Why? What happened?",
          "ru": "А что? Что случилось?"
        },
        {
          "who": "A",
          "en": "Not only did I meet my old boss, but he also offered me a new job.",
          "ru": "Я не только встретила бывшего начальника, но он ещё и предложил мне новую работу."
        },
        {
          "who": "B",
          "en": "In a shop? So strange was that evening that I can hardly believe it.",
          "ru": "В магазине? Настолько странный был вечер, что я с трудом верю."
        },
        {
          "who": "A",
          "en": "Only then did I realise that luck shows up when you least expect it.",
          "ru": "Только тогда я поняла, что удача приходит, когда меньше всего её ждёшь."
        }
      ]
    },
    "vocab": {
      "intro": "Пускатели эмфатической инверсии и слова дня. Запоминай блоками: «Not only did…», «Little did I…», «Only then did…».",
      "items": [
        {
          "en": "not only … but also",
          "ru": "не только… но и (+ инверсия)",
          "ex": "Not only did he come, but he also helped."
        },
        {
          "en": "Little did I know",
          "ru": "и не знал я (что)…",
          "ex": "Little did I know what awaited me."
        },
        {
          "en": "Little did I realise",
          "ru": "и не подозревал я…",
          "ex": "Little did I realise how late it was."
        },
        {
          "en": "Only then",
          "ru": "только тогда",
          "ex": "Only then did I understand."
        },
        {
          "en": "Only after",
          "ru": "только после",
          "ex": "Only after lunch did we start."
        },
        {
          "en": "Only when",
          "ru": "только когда",
          "ex": "Only when he left did we relax."
        },
        {
          "en": "So + adj + was/did …",
          "ru": "настолько… что (+ инверсия)",
          "ex": "So tired was I that I slept."
        },
        {
          "en": "Such was the …",
          "ru": "таким был… что",
          "ex": "Such was the noise that we left."
        },
        {
          "en": "to be about to",
          "ru": "вот-вот (сделать)",
          "ex": "Everything was about to change."
        },
        {
          "en": "to suspect",
          "ru": "подозревать, догадываться",
          "ex": "Little did we suspect the truth."
        },
        {
          "en": "to show up",
          "ru": "появиться, объявиться",
          "ex": "Luck shows up unexpectedly."
        },
        {
          "en": "unexpected",
          "ru": "неожиданный",
          "ex": "It was an unexpected offer."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай короткую историю с поворотом. Каждое сильное место — эмфатическая инверсия.",
      "title": "An ordinary Tuesday",
      "sentences": [
        "It looked like an ordinary Tuesday. Little did I know it would change my career.",
        "Not only did my train arrive late, but the lift was also broken.",
        "So frustrated was I that I almost turned around and went home.",
        "Only when I reached the office did I see the email about the meeting.",
        "Not only had the client arrived early, but they had also brought the whole team.",
        "Only after I started speaking did I realise how well prepared I was.",
        "Such was their reaction that they offered us the contract on the spot.",
        "Little did that grey morning suggest how brightly the day would end."
      ],
      "translation": "Это был обычный вторник на вид. И не подозревал я, что он изменит мою карьеру. Мой поезд не только опоздал, но и лифт был сломан. Я был так раздосадован, что чуть не развернулся и не уехал домой. Только когда я добрался до офиса, я увидел письмо о встрече. Клиент не только приехал рано, но и привёл всю команду. Только начав говорить, я понял, насколько хорошо подготовился. Их реакция была такой, что они предложили нам контракт на месте. Ничто в том сером утре не намекало, как ярко закончится день."
    },
    "drag": {
      "intro": "Соедини пускатель инверсии с его смыслом или продолжением.",
      "pairs": [
        [
          "Not only … but also",
          "не только… но и"
        ],
        [
          "Little did I know",
          "и не подозревал я…"
        ],
        [
          "Only then did I …",
          "только тогда я…"
        ],
        [
          "So + adj + was I + that",
          "настолько… что…"
        ],
        [
          "после Not only / Little",
          "aux + подлежащее (инверсия)"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — пять вопросов на эмфатическую инверсию. Не дай вспомогательному остаться позади подлежащего.",
      "items": [
        {
          "q": "«Он не только пришёл, но и принёс торт» —",
          "opts": [
            "Not only he came, but he also brought a cake.",
            "Not only did he come, but he also brought a cake.",
            "Not only came he, but he also brought a cake."
          ],
          "answer": 1,
          "explain": "Not only + <b>did he come</b>; вторая часть обычным порядком."
        },
        {
          "q": "«И не знал я, что всё изменится» —",
          "opts": [
            "Little I knew that everything would change.",
            "Little did I know that everything would change.",
            "Little knew I that everything would change."
          ],
          "answer": 1,
          "explain": "Little + <b>did I know</b> (инверсия, база know)."
        },
        {
          "q": "Only then ___ the real problem.",
          "opts": [
            "I saw",
            "did I see",
            "saw I"
          ],
          "answer": 1,
          "explain": "Only-фраза впереди → <b>did I see</b>."
        },
        {
          "q": "Какая форма после did? «Little did she ___.»",
          "opts": [
            "realised",
            "realise",
            "realises"
          ],
          "answer": 1,
          "explain": "после did — базовая форма: <b>realise</b>."
        },
        {
          "q": "«Я так устал, что заснул» —",
          "opts": [
            "So tired I was that I fell asleep.",
            "So tired was I that I fell asleep.",
            "So I was tired that I fell asleep."
          ],
          "answer": 1,
          "explain": "So + adj + <b>was I</b> + that (инверсия)."
        }
      ]
    },
    "essay": {
      "intro": "Расскажи историю с поворотом — и пусть инверсия подаст её эффектно.",
      "prompt": "Напиши 5–6 предложений о дне, который оказался совсем не таким, как ожидалось. Используй минимум три эмфатических оборота: Not only … but also …, Little did I know …, Only then / Only after … did …, So + adj + was I that …",
      "hint": "Структуры: Little did I know … ; Not only did … but … also … ; Only when … did … ; So … was … that … .",
      "example": "The day started like any other. Little did I know it would become one of the best of my life. Not only did I pass the exam, but I also won a small scholarship. So happy was I that I called everyone I knew. Only after the celebration did I realise how much work still lay ahead. Looking back, never have I been so glad that I didn't give up.",
      "model": "Little did I know it would become one of the best days of my life."
    },
    "picture": {
      "intro": "Опиши сцену на картинке так, будто это поворотный момент истории — с эмфатической инверсией.",
      "emoji": "🎁😮✨",
      "prompt": "Опиши картинку как драматичный поворот: Little did they know…, Not only … but also…, So + adj + was … that…",
      "hint": "Используй: Little did they know what was coming ; Not only … but … also … ; So surprised were they that … .",
      "example": "At first glance it looks like an ordinary celebration. Little did the guests know what a surprise was waiting for them. Not only had the host prepared a huge cake, but he had also invited a famous singer. So delighted were the children that they could hardly sit still. Only then did everyone understand why the evening had been kept secret.",
      "img": "img/b2/day-25.jpg",
      "credit": "Фото: Aussie~mobs · Public Domain · <a href=\"https://www.flickr.com/photos/70994841@N07/10132776506\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "26": {
    "day": 26,
    "week": "04",
    "level": "B2",
    "themeRu": "Я же правда",
    "themeEn": "Emphatic do/did",
    "intro": "Как надавить голосом на глагол, если хочется настоять? В русском мы усиливаем словечками: «я <b>же</b> говорил», «мне <b>правда</b> нравится», «он <b>всё-таки</b> пришёл». В английском таких частиц нет — зато есть элегантный ход: поставить перед глаголом ударный <b>do / does / did</b>. «I <b>do</b> like it» = «мне правда нравится». «He <b>did</b> call» = «он же / всё-таки позвонил». Это эмфатическое do — голосом ты давишь именно на него, и фраза начинает спорить, настаивать, убеждать. Есть и коварная мелочь: после do идёт <u>голая</u> форма глагола, поэтому «I do liked» — грубая ошибка. И работает приём только в утверждениях. Разберёмся по шагам.",
    "introAudio": "Как надавить голосом на глагол, если хочется настоять? В русском мы усиливаем словечками: я же говорил, мне правда нравится, он всё-таки пришёл. В английском таких частиц нет — зато есть элегантный ход: поставить перед глаголом ударный do, does или did. I do like it — мне правда нравится. He did call — он же, всё-таки позвонил. Это эмфатическое do: голосом ты давишь именно на него, и фраза начинает спорить, настаивать, убеждать. Есть и коварная мелочь: после do идёт голая форма глагола, поэтому I do liked — грубая ошибка. И работает приём только в утверждениях. Разберёмся по шагам.",
    "goals": [
      "усиливать утверждение через ударное do / does / did вместо русских частиц «же, ведь, всё-таки»",
      "правильно держать форму: do / does / did + голый глагол (I did call, не «did called»)",
      "понимать, что эмфатическое do живёт только в утверждениях, а не в вопросах и отрицаниях",
      "выбирать между эмфатическим do и расщеплённой фразой (cleft) из Дня 23 как двумя способами выделить главное"
    ],
    "learned": [
      "Научился(лась) усиливать утверждение через ударное do / does / did вместо русских частиц «же, ведь, всё-таки»",
      "Научился(лась) правильно держать форму: do / does / did + голый глагол (I did call, не «did called»)",
      "Понял(а), что эмфатическое do живёт только в утверждениях, а не в вопросах и отрицаниях",
      "Научился(лась) выбирать между эмфатическим do и расщеплённой фразой (cleft) из Дня 23 как двумя способами выделить главное"
    ],
    "review": {
      "intro": "Утренний прогрев. Эмфатическое do вырастает из самого простого — из present и past simple, где do / does / did ты уже знаешь как «помощника» для вопросов. А ещё вспомним cleft из Дня 23: сегодня это будет альтернативный способ выделить мысль. Три задачи на разгон.",
      "introAudio": "Утренний прогрев. Эмфатическое do вырастает из самого простого — из present и past simple, где do, does и did ты уже знаешь как помощника для вопросов. А ещё вспомним cleft из Дня 23: сегодня это будет альтернативный способ выделить мысль. Три задачи на разгон.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни present simple — у he/she/it глагол получает -s.",
          "q": "«Она пьёт кофе каждое утро» —",
          "opts": [
            "She drink coffee every morning",
            "She drinks coffee every morning",
            "She does drinks coffee every morning"
          ],
          "answer": 1,
          "explain": "Present simple, третье лицо: <b>drinks</b>. Запомни это -s — через минуту мы увидим, как оно «переезжает» на does в эмфазе: She <b>does</b> drink."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни cleft из Дня 23 — выделение через «It was … who …».",
          "q": "«Именно Анна разбила вазу» — какой вариант выделяет Анну?",
          "opts": [
            "Anna broke the vase, really.",
            "It was Anna who broke the vase.",
            "Anna she broke the vase."
          ],
          "answer": 1,
          "explain": "Cleft: <b>It was Anna who broke the vase</b>. Сегодня узнаем второй инструмент акцента — ударное did: «Anna <b>did</b> break it»."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши past simple. call → called.",
          "q": "Он позвонил вчера.",
          "accept": [
            "he called yesterday"
          ],
          "placeholder": "He ... yesterday"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · do / does для акцента",
        "title": "<em>I do like it</em> — ударный do вместо «правда / очень»",
        "paras": [
          "В русском глагол усиливают частицы: «мне <i>правда</i> нравится», «я <i>действительно</i> понимаю». В английском нет таких слов-усилителей при глаголе — вместо них перед глаголом ставят ударный вспомогательный <b>do</b> (или <b>does</b> для he/she/it). <b>I do like it.</b> = «Мне правда / очень нравится».",
          "Форма зеркалит вопрос, только без переноса: <b>do / does + голый глагол</b>. И тут важный нюанс — окончание -s «переезжает» на does: «She likes it» → эмфатически <b>She does like it</b> (не «does likes»). Глагол после does снова голый.",
          "Главное — интонация: голосом ты давишь именно на <b>do / does</b>, а не на сам глагол. Это звучит как возражение или горячее заверение: собеседник сомневался — ты настаиваешь."
        ],
        "audio": "В русском глагол усиливают частицы: мне правда нравится, я действительно понимаю. В английском таких слов нет — вместо них перед глаголом ставят ударный вспомогательный do, или does для he, she, it. I do like it — мне правда нравится. Форма зеркалит вопрос: do или does плюс голый глагол. Окончание -s переезжает на does: She likes it превращается в She does like it, не does likes. Голосом ты давишь именно на do и does.",
        "table": {
          "rows": [
            [
              "I / you / we / they do + база",
              "I do like it. — Мне правда нравится"
            ],
            [
              "he / she / it does + база",
              "She does care. — Она ведь правда заботится"
            ],
            [
              "-s уходит на does",
              "She likes → She does like (не «does likes»)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Мне правда нравится твоя идея.",
            "en": "I <b>do</b> like your idea.",
            "gloss": "ударный do = «правда / очень»",
            "say": "I do like your idea."
          },
          {
            "ru": "Она ведь действительно старается.",
            "en": "She <b>does</b> try hard.",
            "gloss": "does + голый try (не tries)",
            "say": "She does try hard."
          },
          {
            "ru": "Мы и вправду ценим твою помощь.",
            "en": "We <b>do</b> appreciate your help.",
            "gloss": "горячее заверение",
            "say": "We do appreciate your help."
          }
        ],
        "mistakes": [
          {
            "wrong": "She does likes it",
            "right": "She <b>does like</b> it",
            "why": "после does глагол голый: -s остаётся только на does"
          },
          {
            "wrong": "I am really like it",
            "right": "I <b>do</b> really like it",
            "why": "усиление глагола — это do, а не «am» с прилагательным-настроением"
          }
        ],
        "mnemonic": "🔊 Нет частицы «правда/же» — ставь ударный do/does: I DO like it.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> усиль глагол через do/does с голой формой.",
            "q": "«Она ведь правда тебя понимает» —",
            "opts": [
              "She does understands you",
              "She does understand you",
              "She is understand you"
            ],
            "answer": 1,
            "explain": "does + голый глагол: <b>does understand</b> (не «does understands»)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери фразу с ударным do.",
            "q": "Собери: «Мне правда нравится эта песня» (do)",
            "want": "I do like this song",
            "answer": "I do like this song"
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши усиление через does. care = заботиться.",
            "q": "Он ведь действительно заботится.",
            "accept": [
              "he does care",
              "he does really care"
            ],
            "placeholder": "He does ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · did — акцент в прошлом",
        "title": "<em>He did call</em> — и форменная ловушка «do + база»",
        "paras": [
          "В прошедшем времени усилитель один на всех — ударный <b>did</b>: <b>He did call.</b> = «Он же / всё-таки позвонил». Так настаивают на факте, в котором собеседник сомневается: «I did send it!» — «Да отправил я его!»",
          "Здесь и прячется главная форменная ошибка дня. После do / does / did глагол всегда <u>голый</u> — никаких -ed и третьих форм. «I did liked» ✗, «He did went» ✗. Прошедшее значение уже несёт сам <b>did</b>, поэтому глагол отдаёт ему всю «работу» и стоит в базе: <b>did like</b>, <b>did go</b>.",
          "Сравни обычное и эмфатическое: <i>He called.</i> — нейтральный факт. <i>He <b>did</b> call.</i> — «он действительно позвонил, вопреки твоим сомнениям». Один и тот же глагол, но did добавляет напор."
        ],
        "audio": "В прошедшем времени усилитель один на всех — ударный did. He did call — он всё-таки позвонил. Так настаивают на факте, в котором собеседник сомневается: I did send it — да отправил я его. Здесь прячется главная форменная ошибка: после do, does, did глагол всегда голый, никаких -ed и третьих форм. «I did liked» неверно, «He did went» неверно. Прошедшее уже несёт сам did, поэтому глагол стоит в базе: did like, did go.",
        "table": {
          "rows": [
            [
              "did + база (все лица)",
              "He did call. They did finish."
            ],
            [
              "нейтрально → эмфатически",
              "He called → He did call"
            ],
            [
              "после did — голый глагол",
              "did go ✓ / «did went» ✗"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Я же отправил письмо!",
            "en": "I <b>did send</b> the email!",
            "gloss": "did + голый send",
            "say": "I did send the email."
          },
          {
            "ru": "Он всё-таки пришёл на встречу.",
            "en": "He <b>did come</b> to the meeting.",
            "gloss": "come, а не came",
            "say": "He did come to the meeting."
          },
          {
            "ru": "Мы и вправду предупреждали тебя.",
            "en": "We <b>did warn</b> you.",
            "gloss": "did warn (не «did warned»)",
            "say": "We did warn you."
          }
        ],
        "mistakes": [
          {
            "wrong": "I did liked the film",
            "right": "I <b>did like</b> the film",
            "why": "после did — голый глагол; -ed убираем"
          },
          {
            "wrong": "He did went there",
            "right": "He <b>did go</b> there",
            "why": "прошедшее уже в did → глагол в базе: go, не went"
          }
        ],
        "mnemonic": "⏮️ did несёт прошлое — глагол голый: did call, did go, did like.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> усиль прошлое через did + голую форму.",
            "q": "«Я же тебе говорил!» —",
            "opts": [
              "I did told you",
              "I did tell you",
              "I did telled you"
            ],
            "answer": 1,
            "explain": "did + голый глагол: <b>did tell</b> (не «told» и не «telled»)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную форму после did.",
            "q": "She ___ apologise, but he didn't listen.",
            "opts": [
              "did apologised",
              "did apologise",
              "does apologised"
            ],
            "answer": 1,
            "explain": "После did глагол голый: <b>did apologise</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши эмфазу с did. finish = закончить.",
            "q": "Он всё-таки закончил отчёт.",
            "accept": [
              "he did finish the report"
            ],
            "placeholder": "He did ... the report"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "«Же / ведь / всё-таки» → <em>do</em>, и только в утверждениях",
        "paras": [
          "Вот сердце дня. Русские частицы <b>же, ведь, всё-таки, таки, да, действительно, правда</b> не переводятся словами — их роль берёт на себя один ударный <b>do / does / did</b>. «Я <i>же</i> говорил» → <b>I did tell you.</b> «Он <i>всё-таки</i> пришёл» → <b>He did come.</b> Не ищи отдельное английское слово для «же» — его нет.",
          "Второе правило: эмфатическое do живёт <u>только в утверждениях</u>. В вопросах и отрицаниях do / does / did уже стоит как обычный помощник — второй, «усилительный», туда не добавляют. Усиление в отрицании делает голос: «I <b>don't</b> like it» (давим на don't), а не «I do don't like».",
          "Особенно красиво do звучит в уступке-контрасте: <b>He doesn't earn much, but he does enjoy his job.</b> = «Зарабатывает немного, зато работу-то любит». Сначала минус — потом ударное do вытаскивает плюс."
        ],
        "audio": "Сердце дня. Русские частицы же, ведь, всё-таки, таки, действительно, правда не переводятся словами — их роль берёт на себя один ударный do, does или did. Я же говорил — I did tell you. Он всё-таки пришёл — He did come. Не ищи отдельное слово для «же», его нет. Второе правило: эмфатическое do живёт только в утверждениях. В вопросах и отрицаниях do уже стоит как обычный помощник, второй туда не добавляют. Усиление в отрицании делает голос: I don't like it, давим на don't. Красиво do звучит в уступке: He doesn't earn much, but he does enjoy his job.",
        "table": {
          "rows": [
            [
              "Я же говорил тебе.",
              "I did tell you."
            ],
            [
              "Он всё-таки пришёл.",
              "He did come."
            ],
            [
              "…зато работу-то любит.",
              "…but he does enjoy his job."
            ],
            [
              "вопрос / отрицание",
              "эмфатического do НЕТ — давим голосом"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Я ведь предупреждал тебя об этом.",
            "en": "I <b>did warn</b> you about it.",
            "gloss": "«ведь» = ударный did",
            "say": "I did warn you about it."
          },
          {
            "ru": "Дом маленький, зато сад-то большой.",
            "en": "The house is small, but it <b>does have</b> a big garden.",
            "gloss": "уступка: минус → ударное does",
            "say": "The house is small, but it does have a big garden."
          },
          {
            "ru": "Она и впрямь старается изо всех сил.",
            "en": "She <b>does do</b> her best.",
            "gloss": "does + смысловой do (делать всё возможное)",
            "say": "She does do her best."
          }
        ],
        "mistakes": [
          {
            "wrong": "I do don't like it",
            "right": "I <b>don't</b> like it",
            "why": "в отрицании эмфатического do нет — усиливай голосом на don't"
          },
          {
            "wrong": "Do you did see it? (как усиление)",
            "right": "<b>Did</b> you see it?",
            "why": "в вопросе do уже стоит помощником — второго не добавляют"
          }
        ],
        "mnemonic": "💬 «же / ведь / всё-таки» = do/does/did. Только в утверждениях!",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> переведи «же» ударным did, а не отдельным словом.",
            "q": "«Я же отдал тебе ключи!» —",
            "opts": [
              "I same gave you the keys",
              "I did give you the keys",
              "I do gave you the keys"
            ],
            "answer": 1,
            "explain": "«же» = ударный <b>did</b> + голый give. Отдельного слова для «же» нет."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> реши, где эмфатическое do уместно.",
            "q": "В каком предложении эмфатическое do НЕ нужно?",
            "opts": [
              "I do believe you.",
              "Did you do believe me?",
              "He does support the plan."
            ],
            "answer": 1,
            "explain": "Это вопрос — там уже есть did. Второго, усилительного do не ставят."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> собери уступку. earn = зарабатывать, enjoy = нравиться (о деле).",
            "q": "Он зарабатывает немного, зато работу-то любит.",
            "accept": [
              "he doesn't earn much but he does enjoy his job",
              "he doesn't earn much, but he does enjoy his job"
            ],
            "placeholder": "He doesn't earn much, but he does ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · do в просьбах + альтернатива cleft",
        "title": "<em>Do sit down</em> — и do против cleft (Д23)",
        "paras": [
          "Ударный do умеет ещё и согревать просьбу. Перед повелительной формой он звучит как тёплое, искреннее приглашение или мягкий нажим: <b>Do sit down.</b> = «Да садись же / прошу, садись». <b>Do be careful.</b> = «Будь, пожалуйста, осторожен». <b>Do come in.</b> Это вежливее и сердечнее, чем голый приказ «Sit down».",
          "А теперь свяжем с Днём 23. Выделить мысль можно двумя инструментами. Эмфатическое do давит на <u>действие</u>: <b>I did warn you.</b> Cleft давит на <u>участника или вещь</u>: <b>It was me who warned you.</b> / <b>What I did was warn you.</b> Оба — про акцент, но смещают фокус по-разному.",
          "Выбирай по тому, что споришь. Сомневаются, было ли действие вообще, — бери <b>do/did</b> («Ты не позвонил». — «I <b>did</b> call!»). Спорят, КТО или ЧТО именно, — бери cleft («It was <b>Tom</b> who called», «What I need is <b>time</b>»)."
        ],
        "audio": "Ударный do умеет согревать просьбу. Перед повелительной формой он звучит как тёплое приглашение: Do sit down — да садись же, прошу. Do be careful — будь, пожалуйста, осторожен. Это сердечнее, чем голый приказ. А теперь свяжем с Днём 23. Выделить мысль можно двумя инструментами. Эмфатическое do давит на действие: I did warn you. Cleft давит на участника или вещь: It was me who warned you. What I did was warn you. Сомневаются, было ли действие, — бери do или did. Спорят, кто или что именно, — бери cleft.",
        "table": {
          "rows": [
            [
              "Do sit down.",
              "Да садись же (тёплое приглашение)"
            ],
            [
              "Do be careful.",
              "Будь, пожалуйста, осторожен"
            ],
            [
              "I did warn you. (do-акцент)",
              "давим на действие: предупреждал"
            ],
            [
              "It was I who warned you. (cleft)",
              "давим на участника: именно я"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Прошу, проходите и располагайтесь.",
            "en": "<b>Do come in</b> and make yourself at home.",
            "gloss": "do + просьба = тёплое приглашение",
            "say": "Do come in and make yourself at home."
          },
          {
            "ru": "Да попробуй же — тебе понравится!",
            "en": "<b>Do try</b> it — you'll love it!",
            "gloss": "мягкий, сердечный нажим",
            "say": "Do try it, you'll love it!"
          },
          {
            "ru": "— Ты меня не предупредил. — Предупредил я!",
            "en": "— You didn't warn me. — I <b>did</b> warn you!",
            "gloss": "спор о действии → ударный did",
            "say": "You didn't warn me. I did warn you."
          }
        ],
        "mistakes": [
          {
            "wrong": "Please do to sit down",
            "right": "Please <b>do sit down</b>",
            "why": "после do — голая форма, без «to»"
          },
          {
            "wrong": "What I did was warned you",
            "right": "What I did was <b>warn</b> you",
            "why": "в cleft после «was» тоже голый глагол: warn"
          }
        ],
        "mnemonic": "🤝 do + просьба = тепло (Do sit down). Спор о КОМ/ЧЁМ → cleft.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сделай просьбу тёплой через do.",
            "q": "Как сердечно пригласить «Прошу, садитесь»?",
            "opts": [
              "Do to sit down.",
              "Do sit down.",
              "You do sit down."
            ],
            "answer": 1,
            "explain": "<b>Do sit down</b> — do + голый глагол: вежливое, тёплое приглашение."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> спорят, КТО именно → выбери cleft, а не do.",
            "q": "«Это именно Том всё организовал» —",
            "opts": [
              "Tom did organise it.",
              "It was Tom who organised everything.",
              "Tom does organise it."
            ],
            "answer": 1,
            "explain": "Акцент на участнике (КТО) → cleft: <b>It was Tom who…</b> Ударное did давило бы на действие."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери тёплую просьбу с do.",
            "q": "Собери: «Да попробуй же это» (do)",
            "want": "Do try it",
            "answer": "Do try it"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Лена сомневается, что Марк выполнил обещанное, а он горячо настаивает — и каждый раз тянется к ударному do / did. Слушай, как одно слово превращает фразу в возражение. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Lena",
          "name": "Лена",
          "side": "left",
          "en": "You promised to water the plants, and you completely forgot.",
          "ru": "Ты обещал полить цветы и совсем забыл.",
          "words": [
            [
              "promised",
              "обещал"
            ],
            [
              "water the plants",
              "полить растения"
            ]
          ]
        },
        {
          "who": "Mark",
          "name": "Марк",
          "side": "right",
          "en": "I did water them! I did it on Tuesday, I promise.",
          "ru": "Я же полил их! Полил во вторник, честное слово.",
          "words": [
            [
              "did water",
              "всё-таки полил (ударный did + голый water)"
            ],
            [
              "I promise",
              "честное слово"
            ]
          ]
        },
        {
          "who": "Lena",
          "name": "Лена",
          "side": "left",
          "en": "Hmm. And the rent? You always leave it to me.",
          "ru": "Хм. А аренда? Ты вечно перекладываешь её на меня.",
          "words": [
            [
              "the rent",
              "арендная плата"
            ],
            [
              "leave it to me",
              "оставляешь на меня"
            ]
          ]
        },
        {
          "who": "Mark",
          "name": "Марк",
          "side": "right",
          "en": "That's unfair. I do pay my share every month.",
          "ru": "Это несправедливо. Я ведь правда плачу свою долю каждый месяц.",
          "words": [
            [
              "do pay",
              "правда плачу (ударный do)"
            ],
            [
              "my share",
              "свою долю"
            ]
          ]
        },
        {
          "who": "Lena",
          "name": "Лена",
          "side": "left",
          "en": "Alright, alright. You do help a lot, I admit it.",
          "ru": "Ладно, ладно. Ты и вправду много помогаешь, признаю.",
          "words": [
            [
              "do help",
              "вправду помогаешь"
            ],
            [
              "I admit it",
              "признаю это"
            ]
          ]
        },
        {
          "who": "Mark",
          "name": "Марк",
          "side": "right",
          "en": "Thank you. Now do sit down — I've made dinner.",
          "ru": "Спасибо. А теперь садись же — я приготовил ужин.",
          "words": [
            [
              "do sit down",
              "садись же (тёплая просьба с do)"
            ],
            [
              "I've made dinner",
              "я приготовил ужин"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Слова уровня B2 вокруг настаивания и заверения — то, чем обрамляют эмфатическое do. Повтори вслух и обрати внимание на оттенок: спор, признание или подчёркивание.",
      "items": [
        {
          "en": "to insist",
          "ru": "настаивать",
          "ex": "She insisted that she had locked the door."
        },
        {
          "en": "to assure (sb)",
          "ru": "заверять (кого-то)",
          "ex": "I assure you, the report is finished."
        },
        {
          "en": "genuinely",
          "ru": "по-настоящему, искренне",
          "ex": "I'm genuinely sorry about the mix-up."
        },
        {
          "en": "admittedly",
          "ru": "надо признать, что",
          "ex": "Admittedly, I was a little late."
        },
        {
          "en": "after all",
          "ru": "в конце концов; всё-таки",
          "ex": "He did show up after all."
        },
        {
          "en": "to emphasise",
          "ru": "подчёркивать, акцентировать",
          "ex": "Let me emphasise how serious this is."
        },
        {
          "en": "indeed",
          "ru": "действительно, в самом деле",
          "ex": "It was, indeed, a brilliant idea."
        },
        {
          "en": "to mean it",
          "ru": "говорить всерьёз",
          "ex": "I do mean it — I'm not joking."
        },
        {
          "en": "to stand by sth",
          "ru": "твёрдо держаться сказанного",
          "ex": "I stand by every word I said."
        },
        {
          "en": "whatever you think",
          "ru": "что бы ты ни думал",
          "ex": "Whatever you think, I did try my best."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай: человек защищается от несправедливого упрёка. Заметь, как ударный do / did в каждом предложении превращает оправдание в твёрдое возражение.",
      "title": "I did try",
      "sentences": [
        "You say I never listen, but I do listen — closely, every time.",
        "I did read your message the moment it arrived.",
        "And I did reply, though perhaps too briefly.",
        "Admittedly, I do forget small things now and then.",
        "Still, I do care about this project more than anyone.",
        "I did warn the team about the deadline weeks ago.",
        "So whatever you may think, I did do my part.",
        "Now do give me a chance to explain the rest."
      ],
      "translation": "Ты говоришь, что я никогда не слушаю, — но я слушаю, внимательно, каждый раз. Я же прочитал твоё сообщение в ту же секунду, как оно пришло. И ответил — пусть и слишком коротко. Надо признать, я и впрямь забываю иногда мелочи. И всё же мне небезразличен этот проект — больше, чем кому бы то ни было. Я ведь предупреждал команду о сроке ещё несколько недель назад. Так что, что бы ты ни думал, свою часть я сделал. А теперь дай же мне объяснить остальное."
    },
    "drag": {
      "intro": "Соедини эмфатическую фразу с её русским смыслом — обрати внимание, какую частицу заменяет do / did.",
      "pairs": [
        [
          "I do like it.",
          "Мне правда нравится."
        ],
        [
          "He did call.",
          "Он же / всё-таки позвонил."
        ],
        [
          "She does care.",
          "Она ведь правда заботится."
        ],
        [
          "Do sit down.",
          "Да садись же (приглашение)."
        ],
        [
          "I did tell you!",
          "Я же тебе говорил!"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по эмфатическому do. Пять вопросов — и приём настаивать одним словом твой.",
      "items": [
        {
          "q": "«Мне правда нравится твой план» —",
          "opts": [
            "I am really like your plan.",
            "I do like your plan.",
            "I do liked your plan."
          ],
          "answer": 1,
          "explain": "Ударный do + голый глагол: <b>I do like</b>."
        },
        {
          "q": "«Я же отправил письмо!» —",
          "opts": [
            "I did sent the email!",
            "I did send the email!",
            "I do sent the email!"
          ],
          "answer": 1,
          "explain": "did + голая форма: <b>did send</b> (прошедшее уже в did)."
        },
        {
          "q": "Где эмфатическое do стоит НЕправильно?",
          "opts": [
            "She does enjoy her work.",
            "I do don't agree.",
            "He did come after all."
          ],
          "answer": 1,
          "explain": "В отрицании эмфатического do нет — «I do don't» невозможно; усиливают голосом на don't."
        },
        {
          "q": "Тёплое приглашение «Прошу, садитесь» —",
          "opts": [
            "Do sit down.",
            "Do to sit down.",
            "You do sit down."
          ],
          "answer": 0,
          "explain": "do + голый глагол: <b>Do sit down</b> — сердечная просьба."
        },
        {
          "q": "Спорят, КТО именно это сделал. Лучший инструмент —",
          "opts": [
            "ударное did (Tom did do it)",
            "cleft (It was Tom who did it)",
            "обычный past simple (Tom did it)"
          ],
          "answer": 1,
          "explain": "Акцент на участнике (КТО) → cleft. Ударный did давит на действие, а не на лицо."
        }
      ]
    },
    "essay": {
      "intro": "Твоя очередь — защити себя или убеди собеседника, опираясь на ударный do / did.",
      "prompt": "Представь, что тебя несправедливо упрекнули («ты не стараешься», «тебе всё равно»). Напиши 5–6 предложений-возражение. Используй минимум три раза эмфатическое do / does / did + голый глагол и хотя бы раз — приглашение «Do …».",
      "hint": "Структуры: I do care about… ; I did try / did finish / did warn… ; Admittedly, I do forget… ; …but I do …; Now do give me a chance to… . Помни: после do/did глагол голый.",
      "example": "You think I don't take this seriously, but I do care — deeply. I did read every email you sent, and I did reply to most of them the same day. Admittedly, I do forget the odd detail now and then. Still, I did meet every important deadline this month. Whatever you may believe, I did do my best with the time I had. Now do let me show you the finished plan."
    },
    "picture": {
      "intro": "Опиши сцену спора-заверения. Кто настаивает, в чём убеждает? Используй ударный do / did.",
      "emoji": "🙋‍♀️💬❗",
      "prompt": "Опиши картинку, представив, что человек горячо настаивает на своём. Используй минимум три эмфатических do / does / did + голый глагол.",
      "hint": "Используй: She does insist that… ; I did warn you… ; He does care… ; Do believe me… ; Admittedly, …, but I did … .",
      "example": "The woman leans forward, determined to be believed. \"I did send the file,\" she insists, \"and I do remember pressing the button.\" Her colleague looks doubtful, yet she stands her ground. \"Admittedly, the system is slow, but I did do everything on time. Do check your inbox again.\"",
      "img": "img/b2/day-26.jpg",
      "credit": "Фото: gnuckx · CC0 · <a href=\"https://www.flickr.com/photos/34409164@N06/4740115156\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "27": {
    "day": 27,
    "week": "04",
    "level": "B2",
    "themeRu": "Однако / тогда как",
    "themeEn": "Discourse markers",
    "intro": "Одно слово-связка — и текст перестаёт звучать по-школьному. Сегодня — про контраст на взрослом уровне. На B1 ты соединял мысли через <b>but</b>, <b>although</b> и уже встречал <b>however</b>. Теперь возьмём целый арсенал: <b>however</b> и <b>nevertheless</b> (однако, тем не менее), <b>whereas</b> и <b>while</b> (тогда как), <b>on the other hand</b> (с другой стороны), <b>on the contrary</b> (напротив, совсем наоборот) и <b>in contrast</b> (в противоположность). Они звучат похоже на «но», но ведут себя по-разному — у каждого своё место в предложении и своя пунктуация. Главные ловушки: <b>however</b> — это не <b>but</b> (другая позиция и запятые), <b>whereas</b> — контраст фактов, а <b>while</b> чаще про время, и <b>on the contrary</b> — это не <b>on the other hand</b>. Разложим по полочкам.",
    "introAudio": "Одно слово-связка — и текст перестаёт звучать по-школьному. Сегодня про контраст на взрослом уровне. На B1 ты соединял мысли через but, although и уже встречал however. Теперь возьмём целый арсенал: however и nevertheless — однако, тем не менее; whereas и while — тогда как; on the other hand — с другой стороны; on the contrary — напротив, совсем наоборот; и in contrast — в противоположность. Они звучат похоже на но, но ведут себя по-разному: у каждого своё место в предложении и своя пунктуация. Главные ловушки: however — это не but, другая позиция и запятые; whereas — контраст фактов, а while чаще про время; и on the contrary — это не on the other hand. Разложим по полочкам.",
    "goals": [
      "связывать контрастные мысли через however / nevertheless и ставить при них правильную пунктуацию",
      "противопоставлять два факта через whereas и не путать его с временным while",
      "различать on the other hand (вторая сторона) и on the contrary (опровержение)",
      "понимать, почему however ≠ but по позиции, подвижности и запятым"
    ],
    "learned": [
      "Научился(лась) связывать контрастные мысли через however / nevertheless и ставить при них правильную пунктуацию",
      "Научился(лась) противопоставлять два факта через whereas и перестал(а) путать его с временным while",
      "Научился(лась) различать on the other hand (вторая сторона) и on the contrary (опровержение)",
      "Понял(а), почему however ≠ but по позиции, подвижности и запятым"
    ],
    "review": {
      "intro": "Утренний прогрев. Сегодняшние маркеры вырастают из связок B1 — but, although, however. Заодно повторим пунктуацию: где запятая, где точка с запятой. Три задачи на разгон.",
      "introAudio": "Утренний прогрев. Сегодняшние маркеры вырастают из связок B1 — but, although, however. Заодно повторим пунктуацию: где запятая, где точка с запятой. Три задачи на разгон.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни although из B1 — союз уступки в начале придаточного.",
          "q": "«Хотя шёл дождь, мы вышли» —",
          "opts": [
            "Although it was raining, we went out.",
            "Although, it was raining we went out.",
            "It was raining although, we went out."
          ],
          "answer": 0,
          "explain": "<b>Although</b> + придаточное, запятая перед главной частью. Сегодня тот же контраст мы дадим маркерами however и nevertheless."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни but — союз внутри одного предложения.",
          "q": "Как соединить «It was cold» и «we enjoyed the walk» через but?",
          "opts": [
            "It was cold. But, we enjoyed the walk.",
            "It was cold, but we enjoyed the walk.",
            "It was cold but, we enjoyed the walk."
          ],
          "answer": 1,
          "explain": "<b>but</b> = союз: запятая ПЕРЕД ним, дальше без запятой. Через минуту увидим, что however ведёт себя иначе."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши маркер «однако» из B1. Начни предложение с него + запятая.",
          "q": "Это дорого. ___, оно того стоит. (одно слово на «однако»)",
          "accept": [
            "however"
          ],
          "placeholder": "..., it's worth it."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · however / nevertheless",
        "title": "<em>However</em> — «однако», и почему это не <em>but</em>",
        "paras": [
          "<b>However</b> (однако) и <b>nevertheless / nonetheless</b> (тем не менее, и всё же) — это наречия-связки, а не союзы. Они соединяют две <u>отдельные</u> мысли, показывая: вторая идёт вопреки первой. <b>The plan was risky. However, it worked.</b> — «План был рискованный. Однако сработал».",
          "Ключевая разница с <b>but</b>. <b>but</b> — союз: он сидит на стыке двух частей одного предложения, с запятой перед собой: <i>It was risky, but it worked.</i> А <b>however</b> подвижно: обычно стоит в начале нового предложения с запятой после («However, …»), но может вставать и в середину, тогда его с двух сторон выделяют запятыми: <i>It worked, however, far more slowly.</i>",
          "Пунктуация — главная мелочь. Если соединяешь два полных предложения одним however, перед ним нужна точка или <b>точка с запятой</b>, а не простая запятая: <b>It was risky; however, it worked.</b> Простая запятая тут — типичная ошибка (запятая-склейка)."
        ],
        "audio": "However — однако — и nevertheless, nonetheless — тем не менее — это наречия-связки, а не союзы. Они соединяют две отдельные мысли: вторая идёт вопреки первой. The plan was risky. However, it worked. Разница с but: but — союз, он сидит на стыке двух частей одного предложения, с запятой перед собой. It was risky, but it worked. А however подвижно: обычно в начале нового предложения с запятой после, но может встать в середину между запятыми. И пунктуация: если соединяешь два полных предложения одним however, перед ним точка или точка с запятой, а не простая запятая.",
        "table": {
          "rows": [
            [
              "but (союз)",
              "It was risky, but it worked."
            ],
            [
              "However, … (начало)",
              "It was risky. However, it worked."
            ],
            [
              "…, however, … (середина)",
              "It worked, however, very slowly."
            ],
            [
              "точка с запятой",
              "It was risky; however, it worked."
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Билеты дорогие. Однако концерт того стоил.",
            "en": "The tickets were expensive. <b>However</b>, the concert was worth it.",
            "gloss": "however в начале + запятая после",
            "say": "The tickets were expensive. However, the concert was worth it."
          },
          {
            "ru": "Он мало готовился; тем не менее, экзамен сдал.",
            "en": "He barely studied; <b>nevertheless</b>, he passed the exam.",
            "gloss": "точка с запятой перед маркером",
            "say": "He barely studied; nevertheless, he passed the exam."
          },
          {
            "ru": "Идея, однако, оказалась слишком дорогой.",
            "en": "The idea, <b>however</b>, turned out to be too expensive.",
            "gloss": "however в середине, между запятыми",
            "say": "The idea, however, turned out to be too expensive."
          }
        ],
        "mistakes": [
          {
            "wrong": "It was risky, however it worked",
            "right": "It was risky<b>;</b> however, it worked",
            "why": "два полных предложения → точка с запятой перед however, а не простая запятая"
          },
          {
            "wrong": "It was risky however it worked",
            "right": "The plan was risky. <b>However,</b> it worked",
            "why": "however не союз: нельзя ставить его как but на стыке двух предложений без точки/«;»"
          }
        ],
        "mnemonic": "🔁 however = наречие: точка/«;» перед, запятая после. but = союз: запятая перед.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верную пунктуацию при however между двумя предложениями.",
            "q": "Какой вариант оформлен правильно?",
            "opts": [
              "I was tired, however I kept working.",
              "I was tired; however, I kept working.",
              "I was tired however, I kept working."
            ],
            "answer": 1,
            "explain": "Два полных предложения → точка с запятой перед however и запятая после: <b>; however,</b>"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери союз or наречие по структуре фразы.",
            "q": "It was a long trip, ___ we arrived safely. (одно предложение, союз)",
            "opts": [
              "however",
              "but",
              "nevertheless"
            ],
            "answer": 1,
            "explain": "Внутри одного предложения с запятой нужен союз — <b>but</b>. however/nevertheless начали бы новое предложение."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши «тем не менее» (одно слово) с правильной пунктуацией после.",
            "q": "The route was dangerous. ___, they reached the summit. (= тем не менее)",
            "accept": [
              "nevertheless",
              "nonetheless"
            ],
            "placeholder": "..., they reached the summit."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · whereas / while",
        "title": "<em>Whereas</em> — «тогда как», контраст фактов (не путать с <em>while</em>)",
        "paras": [
          "<b>Whereas</b> (тогда как, в то время как) ставит рядом два <u>контрастных факта</u> в одном предложении: <b>He likes tea, whereas she prefers coffee.</b> Это союз — перед ним обычно запятая, и он не значит ничего временно́го. Whereas — чистый контраст, всегда.",
          "А вот <b>while</b> двулично. Его первое и главное значение — <u>время</u>: «пока, в то время как». <i>While I was cooking, the phone rang.</i> В формальном письме while умеет и контраст (= whereas), но в речи его чаще читают как «пока». Поэтому правило простое: нужен надёжный контраст фактов — бери <b>whereas</b>; нужно «пока» — бери <b>while</b>.",
          "Русская ловушка прямо здесь. По-русски «в то время как» одинаково звучит и про время, и про контраст, и хочется везде сказать <b>while</b>. Но <b>whereas</b> временем не бывает никогда — «Whereas I was cooking» в значении «пока» ✗. А для противопоставления фактов whereas надёжнее и яснее."
        ],
        "audio": "Whereas — тогда как, в то время как — ставит рядом два контрастных факта в одном предложении: He likes tea, whereas she prefers coffee. Это союз, перед ним обычно запятая, и он не значит ничего временного. Whereas — чистый контраст, всегда. А while двулично. Его главное значение — время: пока. While I was cooking, the phone rang. В формальном письме while умеет и контраст, но в речи его чаще читают как «пока». Правило: нужен контраст фактов — бери whereas; нужно «пока» — бери while. И whereas временем не бывает никогда.",
        "table": {
          "rows": [
            [
              "whereas (всегда контраст)",
              "He likes tea, whereas she likes coffee."
            ],
            [
              "while (время = «пока»)",
              "While I cooked, he set the table."
            ],
            [
              "while (контраст, формально)",
              "While prices rose, wages stayed flat."
            ],
            [
              "whereas про время ✗",
              "нельзя: «Whereas I cooked…» в значении «пока»"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Северный регион процветает, тогда как юг беднеет.",
            "en": "The north is thriving, <b>whereas</b> the south is struggling.",
            "gloss": "whereas = контраст двух фактов",
            "say": "The north is thriving, whereas the south is struggling."
          },
          {
            "ru": "Пока я отвечал на письма, она готовила презентацию.",
            "en": "<b>While</b> I answered emails, she prepared the slides.",
            "gloss": "while = время (одновременность)",
            "say": "While I answered emails, she prepared the slides."
          },
          {
            "ru": "Старая система была медленной, тогда как новая мгновенная.",
            "en": "The old system was slow, <b>whereas</b> the new one is instant.",
            "gloss": "контраст фактов → whereas",
            "say": "The old system was slow, whereas the new one is instant."
          }
        ],
        "mistakes": [
          {
            "wrong": "Whereas I was cooking, the phone rang",
            "right": "<b>While</b> I was cooking, the phone rang",
            "why": "тут значение «пока» (время) → while, не whereas"
          },
          {
            "wrong": "He saves money, while she spends it (если важен ясный контраст)",
            "right": "He saves money, <b>whereas</b> she spends it",
            "why": "для чёткого противопоставления фактов надёжнее whereas"
          }
        ],
        "mnemonic": "⚖️ whereas = только контраст. while = «пока» (время), контраст лишь в книжном стиле.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> противопоставь два факта — нужен надёжный контраст.",
            "q": "«Я предпочитаю лето, тогда как брат любит зиму» —",
            "opts": [
              "I prefer summer, whereas my brother loves winter.",
              "I prefer summer, during my brother loves winter.",
              "Whereas I prefer summer is my brother loves winter."
            ],
            "answer": 0,
            "explain": "Контраст двух фактов → <b>whereas</b>, перед ним запятая."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> значение «пока» (одновременное время) → выбери слово времени.",
            "q": "___ she was sleeping, I finished the report.",
            "opts": [
              "Whereas",
              "While",
              "In contrast"
            ],
            "answer": 1,
            "explain": "Тут «пока» (время) → <b>While</b>. whereas временем не бывает."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши союз контраста (тогда как).",
            "q": "Cats are independent, ___ dogs need company. (= тогда как)",
            "accept": [
              "whereas"
            ],
            "placeholder": "Cats are independent, ... dogs need company."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · the other hand / the contrary / contrast",
        "title": "<em>On the other hand</em> ≠ <em>on the contrary</em>",
        "paras": [
          "<b>On the one hand … on the other hand</b> взвешивает <u>две стороны одного вопроса</u> — оба соображения верны, ты их сопоставляешь: <b>On the one hand, the job pays well; on the other hand, the hours are long.</b> Часто «on the other hand» вводит второй аргумент, который ты тоже признаёшь.",
          "<b>On the contrary</b> — совсем про другое: это <u>опровержение</u>. Им ты отрицаешь только что сказанное (обычно отрицательное) и заявляешь обратное: <b>He isn't lazy. On the contrary, he works harder than anyone.</b> = «Вовсе нет — наоборот». Здесь нет «двух сторон», есть «не X, а ровно противоположное».",
          "<b>In contrast / by contrast</b> сравнивает два <u>разных</u> объекта бок о бок: <b>Sales rose in the north. In contrast, they fell in the south.</b> Запомни триаду: on the other hand — вторая сторона; on the contrary — «наоборот, нет»; in contrast — «а вот у другого иначе»."
        ],
        "audio": "On the one hand … on the other hand взвешивает две стороны одного вопроса — оба соображения верны. On the one hand, the job pays well; on the other hand, the hours are long. On the contrary — совсем другое: это опровержение. Им ты отрицаешь только что сказанное и заявляешь обратное. He isn't lazy. On the contrary, he works harder than anyone. Здесь нет двух сторон, есть «не X, а ровно противоположное». In contrast сравнивает два разных объекта бок о бок. Sales rose in the north. In contrast, they fell in the south.",
        "table": {
          "rows": [
            [
              "on the other hand",
              "вторая сторона того же вопроса (оба верны)"
            ],
            [
              "on the contrary",
              "опровержение: «вовсе нет, наоборот»"
            ],
            [
              "in contrast / by contrast",
              "сравнение двух разных вещей"
            ],
            [
              "ловушка",
              "«наоборот, нет» ≠ «с другой стороны»"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "С одной стороны, город удобен; с другой — слишком шумен.",
            "en": "<b>On the one hand</b>, the city is convenient; <b>on the other hand</b>, it's too noisy.",
            "gloss": "две стороны одного вопроса",
            "say": "On the one hand, the city is convenient; on the other hand, it's too noisy."
          },
          {
            "ru": "Скучно? Вовсе нет — напротив, это захватывающе.",
            "en": "Boring? <b>On the contrary</b>, it's thrilling.",
            "gloss": "опровержение: «совсем наоборот»",
            "say": "Boring? On the contrary, it's thrilling."
          },
          {
            "ru": "Наша команда выросла. Для сравнения, у соперников штат сократился.",
            "en": "Our team grew. <b>By contrast</b>, our rivals' staff shrank.",
            "gloss": "сравнение двух разных объектов",
            "say": "Our team grew. By contrast, our rivals' staff shrank."
          }
        ],
        "mistakes": [
          {
            "wrong": "He isn't lazy. On the other hand, he works hard.",
            "right": "He isn't lazy. <b>On the contrary</b>, he works hard.",
            "why": "это опровержение («наоборот»), а не вторая сторона → on the contrary"
          },
          {
            "wrong": "On the contrary, the job pays well; the hours are long.",
            "right": "<b>On the one hand</b>, the job pays well; <b>on the other hand</b>, the hours are long.",
            "why": "взвешиваешь два плюса-минуса одного вопроса → on the one/other hand"
          }
        ],
        "mnemonic": "✋ other hand = вторая сторона (оба верны). contrary = «нет, наоборот».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> опровергни сказанное — «вовсе нет, наоборот».",
            "q": "«Тебе не помешало? — Напротив, мне понравилось.» —",
            "opts": [
              "On the other hand, I enjoyed it.",
              "On the contrary, I enjoyed it.",
              "In contrast, I enjoyed it."
            ],
            "answer": 1,
            "explain": "Опровержение предыдущего отрицания → <b>On the contrary</b> («совсем наоборот»)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> взвесь второй аргумент того же вопроса.",
            "q": "Working from home saves time. ___, it can feel lonely.",
            "opts": [
              "On the contrary",
              "On the other hand",
              "Whereas"
            ],
            "answer": 1,
            "explain": "Второй аргумент, тоже верный, той же темы → <b>On the other hand</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери опровержение (4 слова + продолжение).",
            "q": "Собери: «Напротив, я согласен» (on the contrary)",
            "want": "On the contrary I agree",
            "answer": "On the contrary I agree"
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · русская ловушка + пунктуация",
        "title": "Собираем всё: позиция, запятые и три ловушки",
        "paras": [
          "Соберём систему. Маркеры-наречия (<b>however, nevertheless, on the other hand, on the contrary, in contrast</b>) живут в <u>начале</u> новой мысли: перед ними точка или точка с запятой, после — запятая. Союзы (<b>but, whereas, while</b>) сидят <u>внутри</u> одного предложения: запятая обычно перед ними, после — нет.",
          "Три ловушки русскоязычного держи в голове. (1) <b>however</b> ≠ <b>but</b>: however подвижно и требует точки/«;» и запятых; but жёстко стоит на стыке с одной запятой перед. (2) <b>whereas</b> ≠ <b>while</b>: whereas — только контраст, while — прежде всего «пока». (3) <b>on the contrary</b> ≠ <b>on the other hand</b>: первое опровергает («нет, наоборот»), второе добавляет вторую сторону.",
          "И помни регистр: эти маркеры — письменно-формальные. В живой речи чаще скажут просто <i>but</i> или <i>though</i> (в конце фразы: <i>It's expensive, though.</i>). На B2 в эссе и докладе они звучат уместно и солидно — но не сыпь по три в одно предложение."
        ],
        "audio": "Соберём систему. Маркеры-наречия — however, nevertheless, on the other hand, on the contrary, in contrast — живут в начале новой мысли: перед ними точка или точка с запятой, после — запятая. Союзы — but, whereas, while — сидят внутри одного предложения: запятая перед ними, после нет. Три ловушки. Первое: however не равно but. Второе: whereas не равно while — whereas только контраст, while прежде всего «пока». Третье: on the contrary не равно on the other hand — первое опровергает, второе добавляет вторую сторону. И регистр: эти маркеры письменно-формальные.",
        "table": {
          "rows": [
            [
              "наречие-маркер",
              "…; However, … / …; On the contrary, …"
            ],
            [
              "союз",
              "…, but … / …, whereas … / …, while …"
            ],
            [
              "however ≠ but",
              "позиция и пунктуация разные"
            ],
            [
              "contrary ≠ other hand",
              "опровержение ≠ вторая сторона"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Цена высокая; однако качество оправдывает её.",
            "en": "The price is high<b>;</b> <b>however,</b> the quality justifies it.",
            "gloss": "наречие: «;» перед, запятая после",
            "say": "The price is high; however, the quality justifies it."
          },
          {
            "ru": "Я люблю готовить, тогда как муж — мыть посуду.",
            "en": "I love cooking, <b>whereas</b> my husband prefers washing up.",
            "gloss": "союз: одна запятая перед",
            "say": "I love cooking, whereas my husband prefers washing up."
          },
          {
            "ru": "Это не провал. Напротив, мы многому научились.",
            "en": "It's not a failure. <b>On the contrary,</b> we learned a lot.",
            "gloss": "опровержение, не «вторая сторона»",
            "say": "It's not a failure. On the contrary, we learned a lot."
          }
        ],
        "mistakes": [
          {
            "wrong": "The price is high, however the quality is great",
            "right": "The price is high<b>;</b> however<b>,</b> the quality is great",
            "why": "наречие however между двумя предложениями требует «;» и запятой"
          },
          {
            "wrong": "On the contrary, the city is loud; on the contrary, it's fun",
            "right": "On the one hand, the city is loud; <b>on the other hand,</b> it's fun",
            "why": "две стороны вопроса → on the one / on the other hand, а не contrary"
          }
        ],
        "mnemonic": "📝 Наречие → «;» + запятая. Союз → запятая перед. Три «≠»: however/but, whereas/while, contrary/other hand.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> собери два предложения наречием-маркером с верной пунктуацией.",
            "q": "Правильно оформлено —",
            "opts": [
              "She trained hard, nevertheless she lost.",
              "She trained hard; nevertheless, she lost.",
              "She trained hard nevertheless, she lost."
            ],
            "answer": 1,
            "explain": "Наречие nevertheless между предложениями → точка с запятой перед, запятая после."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери маркер по смыслу — опровержение, контраст или вторая сторона.",
            "q": "«Город не скучный. ___, здесь всегда что-то происходит.»",
            "opts": [
              "On the other hand",
              "On the contrary",
              "Whereas"
            ],
            "answer": 1,
            "explain": "Опровергаем «скучный» → <b>On the contrary</b> («наоборот, тут всё кипит»)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши контрастный союз (тогда как) внутри предложения.",
            "q": "Teenagers love the app, ___ their parents find it confusing. (= тогда как)",
            "accept": [
              "whereas"
            ],
            "placeholder": "Teenagers love it, ... parents find it confusing."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Дина и Олег сравнивают два предложения о работе — в столице и в маленьком городе. Слушай, как они нанизывают контраст: however, whereas, on the other hand, on the contrary. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Dina",
          "name": "Дина",
          "side": "left",
          "en": "The city job pays more. However, the rent there is brutal.",
          "ru": "Работа в городе платит больше. Однако аренда там зверская.",
          "words": [
            [
              "however",
              "однако (наречие-маркер)"
            ],
            [
              "brutal",
              "жестокий, безжалостный"
            ]
          ]
        },
        {
          "who": "Oleg",
          "name": "Олег",
          "side": "right",
          "en": "True. The town offer is modest, whereas the city one is generous.",
          "ru": "Верно. Предложение в городке скромное, тогда как в столице — щедрое.",
          "words": [
            [
              "whereas",
              "тогда как (контраст фактов)"
            ],
            [
              "generous",
              "щедрый"
            ]
          ]
        },
        {
          "who": "Dina",
          "name": "Дина",
          "side": "left",
          "en": "On the other hand, life in the town is calmer and cheaper.",
          "ru": "С другой стороны, жизнь в городке спокойнее и дешевле.",
          "words": [
            [
              "on the other hand",
              "с другой стороны (вторая сторона)"
            ],
            [
              "calmer",
              "спокойнее"
            ]
          ]
        },
        {
          "who": "Oleg",
          "name": "Олег",
          "side": "right",
          "en": "So the town is dull? On the contrary, it has a lively arts scene.",
          "ru": "Значит, в городке скучно? Напротив, там бурная культурная жизнь.",
          "words": [
            [
              "on the contrary",
              "напротив (опровержение)"
            ],
            [
              "lively arts scene",
              "оживлённая культурная сцена"
            ]
          ]
        },
        {
          "who": "Dina",
          "name": "Дина",
          "side": "left",
          "en": "Fair point. In contrast, the city would swallow all my free time.",
          "ru": "Справедливо. Для сравнения, город сожрал бы всё моё свободное время.",
          "words": [
            [
              "in contrast",
              "в противоположность; для сравнения"
            ],
            [
              "swallow",
              "поглотить, проглотить"
            ]
          ]
        },
        {
          "who": "Oleg",
          "name": "Олег",
          "side": "right",
          "en": "Then the choice seems clear. Nevertheless, sleep on it first.",
          "ru": "Тогда выбор кажется очевидным. И всё же сперва переспи с этой мыслью.",
          "words": [
            [
              "nevertheless",
              "тем не менее, и всё же"
            ],
            [
              "sleep on it",
              "обдумать за ночь, не решать сгоряча"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Маркеры контраста и уступки уровня B2 — связки для эссе и доклада. Повтори вслух и запомни, наречие это (нужна «;») или союз (нужна запятая).",
      "items": [
        {
          "en": "however",
          "ru": "однако (наречие-маркер)",
          "ex": "It was late. However, we kept walking."
        },
        {
          "en": "nevertheless / nonetheless",
          "ru": "тем не менее, и всё же",
          "ex": "The odds were poor; nevertheless, she tried."
        },
        {
          "en": "whereas",
          "ru": "тогда как (контраст фактов)",
          "ex": "I'm an early bird, whereas he's a night owl."
        },
        {
          "en": "on the other hand",
          "ru": "с другой стороны (вторая сторона)",
          "ex": "It's risky. On the other hand, it could pay off."
        },
        {
          "en": "on the contrary",
          "ru": "напротив, совсем наоборот (опровержение)",
          "ex": "It wasn't dull. On the contrary, it gripped me."
        },
        {
          "en": "in contrast / by contrast",
          "ru": "в противоположность; для сравнения",
          "ex": "Sales rose here; by contrast, they fell abroad."
        },
        {
          "en": "conversely",
          "ru": "и наоборот, в обратном случае",
          "ex": "More freedom; conversely, more responsibility."
        },
        {
          "en": "albeit",
          "ru": "хотя и (формально)",
          "ex": "He agreed, albeit reluctantly."
        },
        {
          "en": "having said that",
          "ru": "при этом, тем не менее",
          "ex": "It's pricey. Having said that, it lasts for years."
        },
        {
          "en": "all the same",
          "ru": "и всё равно, как бы то ни было",
          "ex": "I was nervous; all the same, I went on stage."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай взвешенный текст-сравнение. Заметь, как маркеры контраста ведут читателя от факта к факту: однако, тогда как, с другой стороны, напротив.",
      "title": "City or countryside?",
      "sentences": [
        "City life offers endless opportunities; however, it comes at a price.",
        "Rents are high, whereas in the countryside the same money buys a garden.",
        "On the one hand, the city never sleeps and culture is everywhere.",
        "On the other hand, the constant noise can wear you down.",
        "Some say the countryside is boring. On the contrary, it can be deeply rewarding.",
        "City dwellers commute for hours; by contrast, villagers walk to the shop.",
        "Both options have real merits. Nevertheless, the right choice depends on you.",
        "Whatever you decide, weigh the trade-offs honestly."
      ],
      "translation": "Городская жизнь даёт бесконечные возможности; однако за них приходится платить. Аренда высокая, тогда как в деревне на те же деньги можно купить сад. С одной стороны, город никогда не спит, и культура повсюду. С другой стороны, постоянный шум способен измотать. Кто-то говорит, что в деревне скучно. Напротив, она может приносить глубокое удовлетворение. Горожане часами добираются на работу; для сравнения, сельские жители доходят до магазина пешком. У обоих вариантов есть реальные плюсы. Тем не менее, верный выбор зависит от тебя. Каким бы ни было твоё решение, честно взвесь все за и против."
    },
    "drag": {
      "intro": "Соедини маркер с его ролью в тексте.",
      "pairs": [
        [
          "however",
          "однако: контраст между двумя предложениями"
        ],
        [
          "whereas",
          "тогда как: противопоставление двух фактов (союз)"
        ],
        [
          "on the other hand",
          "с другой стороны: вторая сторона вопроса"
        ],
        [
          "on the contrary",
          "напротив: опровержение сказанного"
        ],
        [
          "in contrast",
          "для сравнения: два разных объекта рядом"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по маркерам контраста. Пять вопросов — и связки B2 в твоём распоряжении.",
      "items": [
        {
          "q": "Правильная пунктуация при however между двумя предложениями —",
          "opts": [
            "It rained, however we went out.",
            "It rained; however, we went out.",
            "It rained however, we went out."
          ],
          "answer": 1,
          "explain": "Наречие however → точка с запятой перед и запятая после."
        },
        {
          "q": "«Пока я спал, она работала» — нужное слово:",
          "opts": [
            "Whereas",
            "While",
            "On the contrary"
          ],
          "answer": 1,
          "explain": "Значение «пока» (время) → <b>While</b>. whereas временем не бывает."
        },
        {
          "q": "«Он не груб. ___, он очень вежлив.» —",
          "opts": [
            "On the other hand",
            "On the contrary",
            "Whereas"
          ],
          "answer": 1,
          "explain": "Опровержение предыдущего отрицания → <b>On the contrary</b>."
        },
        {
          "q": "Контраст двух фактов в одном предложении —",
          "opts": [
            "Dogs are loyal, whereas cats are independent.",
            "Dogs are loyal, however cats are independent.",
            "Dogs are loyal whereas, cats are independent."
          ],
          "answer": 0,
          "explain": "Союз whereas с запятой перед ним связывает два контрастных факта."
        },
        {
          "q": "Взвешиваешь вторую сторону того же вопроса —",
          "opts": [
            "on the contrary",
            "on the other hand",
            "in contrast to me"
          ],
          "answer": 1,
          "explain": "Вторая сторона, тоже верная → <b>on the other hand</b>."
        }
      ]
    },
    "essay": {
      "intro": "Твоя очередь — напиши взвешенное мнение, ведя читателя маркерами контраста.",
      "prompt": "Выбери тему-противопоставление (книги или фильмы, город или село, работа дома или в офисе). Напиши 6–7 предложений «за и против». Используй минимум четыре разных маркера: however / nevertheless, whereas, on the other hand, on the contrary или in contrast. Следи за пунктуацией.",
      "hint": "Структуры: X has clear benefits; however, … ; A is …, whereas B is … ; On the one hand, …; on the other hand, … ; Some think it's …. On the contrary, … . Помни: наречие → «;» + запятая; союз → запятая перед.",
      "example": "Reading novels and watching films both tell stories, yet they work very differently. A novel lets you imagine every face and voice; however, it demands time and patience. A novel makes you build every face and voice yourself, whereas a film hands you the world ready-made in two hours. On the one hand, books reward slow attention; on the other hand, films create instant emotion through music and image. Some claim that films are shallow. On the contrary, a great film can haunt you for years. In contrast, a forgettable book is simply put down. Nevertheless, the richest readers and viewers refuse to choose just one."
    },
    "picture": {
      "intro": "Опиши контраст на картинке: две стороны, два варианта, два настроения. Используй маркеры контраста.",
      "emoji": "🏙️↔️🌳",
      "prompt": "Опиши картинку как сравнение двух противоположностей. Используй минимум три разных маркера контраста с правильной пунктуацией.",
      "hint": "Используй: On the left …, whereas on the right … ; One side looks …; however, … ; On the other hand, … ; In contrast, … .",
      "example": "On the left rises a glass city, alive with light and motion; however, it also looks crowded and restless. On the right stretches quiet green countryside, whereas the city never pauses. One scene promises opportunity, in contrast to the calm the other offers. Some would call the village dull. On the contrary, it seems the more peaceful place to breathe.",
      "img": "img/b2/day-27.jpg",
      "credit": "Фото: Amsterdam free photos &amp; pictures of the Dutch city · CC0 · <a href=\"https://www.flickr.com/photos/104736837@N03/10904779616\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "28": {
    "day": 28,
    "week": "04",
    "level": "B2",
    "themeRu": "Слова-друзья",
    "themeEn": "Collocations",
    "intro": "Слова в английском ходят парами и слышат друг друга как музыку: говорят <i>take</i> a photo (не <i>make</i> a photo) и <i>make</i> a mistake (не <i>do</i> a mistake). Сегодня — про то, что делает речь «своей»: <b>коллокации</b>, слова-друзья. Мы возьмём четыре главных узла: <b>make / do</b> (make a decision, do research), <b>take / have</b> (take a photo, have a break), сцепки <b>прилагательное + существительное</b> (heavy rain, strong coffee) и устойчивые <b>глагол + существительное</b> (pay attention, meet a deadline). Главная ловушка дня — дословный перевод: «make a photo» вместо <b>take</b> a photo, «do a mistake» вместо <b>make</b> a mistake, «strong rain» вместо <b>heavy</b> rain. Эти пары не выводятся логикой — их узнают и запоминают. Поехали собирать твою коллекцию.",
    "introAudio": "Слова в английском ходят парами и слышат друг друга как музыку: говорят take a photo, не make a photo, и make a mistake, не do a mistake. Сегодня про то, что делает речь своей: коллокации, слова-друзья. Мы возьмём четыре главных узла: make и do — make a decision, do research; take и have — take a photo, have a break; сцепки прилагательное плюс существительное — heavy rain, strong coffee; и устойчивые глагол плюс существительное — pay attention, meet a deadline. Главная ловушка дня — дословный перевод: make a photo вместо take a photo, do a mistake вместо make a mistake, strong rain вместо heavy rain. Эти пары не выводятся логикой — их узнают и запоминают. Поехали собирать твою коллекцию.",
    "goals": [
      "выбирать make или do по смыслу: make = создавать результат, do = выполнять дело",
      "не путать take и have в бытовых сцепках: take a photo / a break, have a look / a rest",
      "собирать сцепки «прилагательное + существительное»: heavy rain, strong coffee, high speed",
      "ловить русскую ловушку дословного перевода, который рушит коллокацию (make a photo ✗)"
    ],
    "learned": [
      "Научился(лась) выбирать make или do по смыслу: make = создавать результат, do = выполнять дело",
      "Перестал(а) путать take и have в бытовых сцепках: take a photo / a break, have a look / a rest",
      "Собрал(а) сцепки «прилагательное + существительное»: heavy rain, strong coffee, high speed",
      "Поймал(а) русскую ловушку дословного перевода, который рушит коллокацию (make a photo ✗)"
    ],
    "review": {
      "intro": "Утренний прогрев. Коллокации опираются на две вещи, которые мы уже трогали: предлоги в управлении (always-on) и базовое make vs do из A2. Освежим их — и сразу нарастим до B2. Три задачи на разгон.",
      "introAudio": "Утренний прогрев. Коллокации опираются на две вещи, которые мы уже трогали: предлоги в управлении и базовое make против do из A2. Освежим их — и сразу нарастим до B2. Три задачи на разгон.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни предлог управления (always-on): depend ___.",
          "q": "«Это зависит от погоды» —",
          "opts": [
            "It depends of the weather",
            "It depends on the weather",
            "It depends from the weather"
          ],
          "answer": 1,
          "explain": "Управление: <b>depend on</b>. Предлог тоже часть коллокации — его не переводят дословно с русского «от»."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни make vs do из A2 — задание/дело берёт do.",
          "q": "«Сделай домашнее задание» —",
          "opts": [
            "Make your homework",
            "Do your homework",
            "Make a homework"
          ],
          "answer": 1,
          "explain": "Задание, рутина → <b>do</b> your homework. Сегодня разведём make и do на уровне B2."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> впиши предлог управления. interested ___ .",
          "q": "Я интересуюсь искусством. I'm interested ___ art.",
          "accept": [
            "in"
          ],
          "placeholder": "I'm interested ... art."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · make vs do",
        "title": "<em>make</em> создаёт результат, <em>do</em> выполняет дело",
        "paras": [
          "На A2 ты уже делил make и do грубо. На B2 закрепим тонкую логику. <b>make</b> — это «произвести, создать что-то новое»: результат, который раньше не существовал. <b>make a decision</b> (родить решение), <b>make a mistake</b>, <b>make progress</b>, <b>make an effort</b>, <b>make a difference</b>, <b>make a suggestion</b>.",
          "<b>do</b> — это «выполнять действие, задачу, работу»: процесс, обязанность, рутина. <b>do research</b>, <b>do homework</b>, <b>do business</b>, <b>do the dishes</b>, <b>do exercise</b>, <b>do your best</b>, <b>do a favour</b>. Грубый ориентир: make → появляется продукт; do → совершается процесс.",
          "Но граница неидеальна, поэтому частые пары просто заучивают как блоки. Услышал «make a decision» десять раз — рука сама пишет make. Логика помогает, память закрепляет."
        ],
        "audio": "На A2 ты делил make и do грубо. На B2 закрепим логику. make — произвести, создать что-то новое: результат, которого раньше не было. make a decision, make a mistake, make progress, make an effort, make a difference. do — выполнять действие, задачу, работу: процесс, обязанность, рутина. do research, do homework, do business, do the dishes, do your best, do a favour. Ориентир: make — появляется продукт; do — совершается процесс. Но граница неидеальна, поэтому частые пары заучивают как блоки.",
        "table": {
          "rows": [
            [
              "make (создать результат)",
              "make a decision, a mistake, progress, an effort"
            ],
            [
              "do (выполнить дело)",
              "do research, homework, business, the dishes"
            ],
            [
              "ориентир",
              "make → продукт; do → процесс"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Нам нужно принять решение сегодня.",
            "en": "We need to <b>make a decision</b> today.",
            "gloss": "решение «рождается» → make",
            "say": "We need to make a decision today."
          },
          {
            "ru": "Она проводит исследование изменения климата.",
            "en": "She is <b>doing research</b> on climate change.",
            "gloss": "исследование как процесс → do",
            "say": "She is doing research on climate change."
          },
          {
            "ru": "Ты сделал большие успехи в этом месяце.",
            "en": "You've <b>made</b> great <b>progress</b> this month.",
            "gloss": "progress появляется → make",
            "say": "You've made great progress this month."
          }
        ],
        "mistakes": [
          {
            "wrong": "I did a mistake",
            "right": "I <b>made</b> a mistake",
            "why": "ошибка «создаётся» → make a mistake, не do"
          },
          {
            "wrong": "Let's make some research",
            "right": "Let's <b>do</b> some research",
            "why": "исследование — процесс/работа → do research"
          }
        ],
        "mnemonic": "🛠️ make = появляется ПРОДУКТ (decision, mistake). do = идёт ПРОЦЕСС (research, homework).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> ошибка «создаётся» — выбери глагол.",
            "q": "«Я сделал ошибку в отчёте» —",
            "opts": [
              "I did a mistake in the report",
              "I made a mistake in the report",
              "I make a mistake in the report"
            ],
            "answer": 1,
            "explain": "Ошибка → результат → <b>make a mistake</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> исследование — это работа/процесс.",
            "q": "Scientists ___ research for many years.",
            "opts": [
              "make",
              "do",
              "take"
            ],
            "answer": 1,
            "explain": "Процесс, длительная работа → <b>do research</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши глагол коллокации. progress = успехи (создаётся).",
            "q": "Ты делаешь большие успехи. You're ___ great progress.",
            "accept": [
              "making"
            ],
            "placeholder": "You're ... great progress."
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · take vs have",
        "title": "<em>take a photo</em>, <em>have a break</em> — две бытовые сцепки",
        "paras": [
          "Второй узел — <b>take</b> и <b>have</b> в повседневных оборотах. С <b>take</b> идут: <b>take a photo</b> (сделать фото), <b>take a break</b> (сделать перерыв), <b>take a shower</b>, <b>take a risk</b>, <b>take notes</b>, <b>take a seat</b>, <b>take a look</b>. Часто это «короткое действие, которое совершают».",
          "С <b>have</b> идут «переживания опыта» и бытовые процессы: <b>have a look</b> (взглянуть), <b>have a rest / a break</b>, <b>have a shower</b> (британский вариант), <b>have breakfast / lunch</b>, <b>have fun</b>, <b>have a good time</b>, <b>have a chat</b>. Заметь: <i>break, look, shower</i> дружат и с take, и с have — оба варианта живые.",
          "Здесь и прячется русская ловушка: «сделать фото» так и тянет перевести как «make a photo». Но фото <u>не создают</u> в смысле make — его <b>take</b>. Так же «сделать перерыв» — не «do a break», а <b>take / have a break</b>."
        ],
        "audio": "Второй узел — take и have в повседневных оборотах. С take идут: take a photo — сделать фото, take a break — сделать перерыв, take a shower, take a risk, take notes, take a seat, take a look. Часто это короткое действие, которое совершают. С have идут переживания опыта и бытовые процессы: have a look — взглянуть, have a rest, have a break, have a shower по-британски, have breakfast, have fun, have a good time. break, look и shower дружат и с take, и с have. Ловушка: «сделать фото» тянет перевести как make a photo, но фото — take a photo. «Сделать перерыв» — take или have a break, не do a break.",
        "table": {
          "rows": [
            [
              "take + …",
              "take a photo, a break, a shower, a risk, notes"
            ],
            [
              "have + …",
              "have a look, a rest, breakfast, fun, a chat"
            ],
            [
              "и take, и have",
              "a break / a look / a shower — оба варианта"
            ],
            [
              "ловушка",
              "«make a photo» ✗ → take a photo"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Давай сделаем фото на память.",
            "en": "Let's <b>take a photo</b> to remember this.",
            "gloss": "фото → take, не make",
            "say": "Let's take a photo to remember this."
          },
          {
            "ru": "Давайте сделаем небольшой перерыв.",
            "en": "Let's <b>have a break</b> for a few minutes.",
            "gloss": "перерыв → have / take a break",
            "say": "Let's have a break for a few minutes."
          },
          {
            "ru": "Можно я взгляну на твой отчёт?",
            "en": "Can I <b>have a look</b> at your report?",
            "gloss": "взглянуть → have a look",
            "say": "Can I have a look at your report?"
          }
        ],
        "mistakes": [
          {
            "wrong": "I want to make a photo",
            "right": "I want to <b>take a photo</b>",
            "why": "фото снимают, а не «создают»: take a photo"
          },
          {
            "wrong": "Let's do a break",
            "right": "Let's <b>have</b> / <b>take a break</b>",
            "why": "перерыв → have/take a break, не do"
          }
        ],
        "mnemonic": "📸 take a photo / a break / a risk. have a look / a rest / fun. Никогда «make a photo».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> фото снимают — выбери глагол.",
            "q": "«Можешь сделать наше фото?» —",
            "opts": [
              "Can you make our photo?",
              "Can you take our photo?",
              "Can you do our photo?"
            ],
            "answer": 1,
            "explain": "Фото → <b>take a photo</b>. «make a photo» — калька с русского."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «взглянуть» — устойчивая сцепка с have.",
            "q": "Can I ___ a look at the menu?",
            "opts": [
              "make",
              "have",
              "do"
            ],
            "answer": 1,
            "explain": "Устойчивое <b>have a look</b> (= взглянуть)."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши глагол. перерыв = a break.",
            "q": "Давайте сделаем перерыв. Let's ___ a break.",
            "accept": [
              "have",
              "take"
            ],
            "placeholder": "Let's ... a break."
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · прилагательное + существительное",
        "title": "<em>heavy rain</em>, <em>strong coffee</em> — нужное прилагательное",
        "paras": [
          "Третий узел — сцепки «прилагательное + существительное». Для «сильный» английский выбирает разные слова в зависимости от существительного. Дождь, снег, движение, курильщик — <b>heavy</b>: <b>heavy rain</b>, <b>heavy snow</b>, <b>heavy traffic</b>, <b>a heavy smoker</b>. А кофе, чай, акцент, ветер, запах — <b>strong</b>: <b>strong coffee</b>, <b>a strong accent</b>, <b>a strong wind</b>, <b>a strong smell</b>.",
          "Есть и третий «сильный» — <b>high</b>: <b>high speed</b>, <b>high temperature</b>, <b>high pressure</b>, <b>a high price</b>. И отдельные блоки: <b>fast food</b>, <b>a fast train</b>, <b>bright sunshine</b>, <b>a deep sleep</b>. Прилагательное здесь приклеено к существительному намертво.",
          "Русская ловушка очевидна: по-русски «сильный дождь» — и рука пишет «strong rain». Но дождь по-английски <b>heavy</b>, а strong остаётся кофе и ветру. Логики «почему так» нет — просто запомни пару целиком, как одно слово."
        ],
        "audio": "Третий узел — сцепки прилагательное плюс существительное. Для «сильный» английский выбирает разные слова. Дождь, снег, движение, курильщик — heavy: heavy rain, heavy snow, heavy traffic, a heavy smoker. А кофе, чай, акцент, ветер, запах — strong: strong coffee, a strong accent, a strong wind, a strong smell. Есть и третий «сильный» — high: high speed, high temperature, a high price. И блоки fast food, a fast train, bright sunshine. Ловушка: «сильный дождь» тянет в «strong rain», но дождь — heavy, а strong остаётся кофе и ветру.",
        "table": {
          "rows": [
            [
              "heavy + …",
              "heavy rain, snow, traffic, a heavy smoker"
            ],
            [
              "strong + …",
              "strong coffee, accent, wind, smell"
            ],
            [
              "high + …",
              "high speed, temperature, pressure, price"
            ],
            [
              "ловушка",
              "«strong rain» ✗ → heavy rain"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Из-за сильного дождя мы остались дома.",
            "en": "We stayed in because of the <b>heavy rain</b>.",
            "gloss": "дождь → heavy, не strong",
            "say": "We stayed in because of the heavy rain."
          },
          {
            "ru": "Ему нужен крепкий кофе по утрам.",
            "en": "He needs <b>strong coffee</b> in the morning.",
            "gloss": "кофе → strong",
            "say": "He needs strong coffee in the morning."
          },
          {
            "ru": "Поезд мчится на высокой скорости.",
            "en": "The train runs at <b>high speed</b>.",
            "gloss": "скорость → high",
            "say": "The train runs at high speed."
          }
        ],
        "mistakes": [
          {
            "wrong": "There was strong rain all day",
            "right": "There was <b>heavy rain</b> all day",
            "why": "дождь по-английски heavy, а не strong"
          },
          {
            "wrong": "I'm stuck in strong traffic",
            "right": "I'm stuck in <b>heavy traffic</b>",
            "why": "пробка / плотное движение → heavy traffic"
          }
        ],
        "mnemonic": "🌧️ heavy: rain, snow, traffic. strong: coffee, accent, wind. high: speed, price.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> подбери прилагательное к дождю.",
            "q": "«Вчера был сильный дождь» —",
            "opts": [
              "There was strong rain yesterday",
              "There was heavy rain yesterday",
              "There was high rain yesterday"
            ],
            "answer": 1,
            "explain": "Дождь → <b>heavy rain</b>. «strong rain» — калька."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> подбери прилагательное к кофе.",
            "q": "I like my ___ coffee.",
            "opts": [
              "heavy",
              "strong",
              "high"
            ],
            "answer": 1,
            "explain": "Кофе → <b>strong coffee</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши прилагательное к traffic (пробки).",
            "q": "Я застрял в плотном потоке машин. I'm stuck in ___ traffic.",
            "accept": [
              "heavy"
            ],
            "placeholder": "I'm stuck in ... traffic."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · глагол + существительное + русская ловушка",
        "title": "<em>pay attention</em>, <em>meet a deadline</em> — и почему дословно нельзя",
        "paras": [
          "Четвёртый узел — устойчивые «глагол + существительное», где глагол неожиданный для русского. <b>pay attention</b> (обращать внимание — именно «платить», и без артикля), <b>meet a deadline</b> (уложиться в срок — «встретить»), <b>reach a conclusion</b> (прийти к выводу), <b>raise a question / an issue</b> (поднять вопрос), <b>keep a promise</b> (сдержать обещание), <b>break the law</b> (нарушить закон), <b>catch a cold</b> (простудиться).",
          "Главный вывод дня — <u>правило коллокаций</u>: дословный перевод глагола рушит пару. «Give attention» вместо <b>pay</b> attention, «do a mistake» вместо <b>make</b>, «make a photo» вместо <b>take</b>, «strong rain» вместо <b>heavy</b> — все эти ошибки рождаются, когда переводишь слово, а не запоминаешь сцепку. Учи блок целиком: глагол + существительное вместе.",
          "Практический приём: встретил коллокацию — запиши её парой и проговори вслух в маленьком предложении. <i>I always pay attention in class. We met the deadline. Don't break your promise.</i> Через повтор пара «слипается», и рука выбирает нужный глагол сама."
        ],
        "audio": "Четвёртый узел — устойчивые глагол плюс существительное, где глагол неожиданный для русского. pay attention — обращать внимание, именно «платить» и без артикля; meet a deadline — уложиться в срок; reach a conclusion — прийти к выводу; raise a question — поднять вопрос; keep a promise — сдержать обещание; break the law — нарушить закон; catch a cold — простудиться. Главный вывод: дословный перевод глагола рушит пару. «give attention» вместо pay attention, «do a mistake» вместо make, «make a photo» вместо take, «strong rain» вместо heavy. Учи блок целиком и проговаривай вслух в маленьком предложении.",
        "table": {
          "rows": [
            [
              "pay attention",
              "обращать внимание (без артикля)"
            ],
            [
              "meet a deadline",
              "уложиться в срок"
            ],
            [
              "reach a conclusion",
              "прийти к выводу"
            ],
            [
              "правило",
              "учи пару целиком — не переводи глагол дословно"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Пожалуйста, обрати внимание на детали.",
            "en": "Please <b>pay attention</b> to the details.",
            "gloss": "pay, не «give»; без артикля",
            "say": "Please pay attention to the details."
          },
          {
            "ru": "Команда уложилась в срок.",
            "en": "The team <b>met the deadline</b>.",
            "gloss": "meet a deadline = успеть в срок",
            "say": "The team met the deadline."
          },
          {
            "ru": "Он всегда держит своё слово.",
            "en": "He always <b>keeps his promise</b>.",
            "gloss": "keep a promise = сдержать обещание",
            "say": "He always keeps his promise."
          }
        ],
        "mistakes": [
          {
            "wrong": "Please give attention to this",
            "right": "Please <b>pay attention</b> to this",
            "why": "внимание «платят» → pay attention, без артикля"
          },
          {
            "wrong": "We did the deadline by working late (в значении «успели»)",
            "right": "We <b>met the deadline</b> by working late",
            "why": "уложиться в срок → meet a deadline"
          }
        ],
        "mnemonic": "🔗 Учи пару целиком: pay attention, meet a deadline, keep a promise. Не переводи глагол по слову.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «обращать внимание» — устойчивая пара.",
            "q": "«Обрати внимание на знаки» —",
            "opts": [
              "Give attention to the signs",
              "Pay attention to the signs",
              "Make attention to the signs"
            ],
            "answer": 1,
            "explain": "<b>Pay attention</b> — внимание «платят», без артикля."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «уложиться в срок» — выбери глагол.",
            "q": "We worked all night to ___ the deadline.",
            "opts": [
              "catch",
              "meet",
              "reach"
            ],
            "answer": 1,
            "explain": "<b>meet a deadline</b> = уложиться в срок."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши глагол. сдержать обещание = keep a promise.",
            "q": "Я всегда держу своё слово. I always ___ my promise.",
            "accept": [
              "keep"
            ],
            "placeholder": "I always ... my promise."
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Карина и Дэн готовят рабочую поездку и сыплют коллокациями: make a decision, do research, take a photo, meet a deadline. Слушай, какие глаголы держат пары. Нажимай на подсвеченные слова.",
      "lines": [
        {
          "who": "Karina",
          "name": "Карина",
          "side": "left",
          "en": "We need to make a decision about the venue by Friday.",
          "ru": "Нам нужно принять решение по площадке до пятницы.",
          "words": [
            [
              "make a decision",
              "принять решение"
            ],
            [
              "venue",
              "место проведения"
            ]
          ]
        },
        {
          "who": "Dan",
          "name": "Дэн",
          "side": "right",
          "en": "Agreed. I've done some research on three possible halls.",
          "ru": "Согласен. Я провёл небольшое исследование по трём возможным залам.",
          "words": [
            [
              "done research",
              "провёл исследование"
            ],
            [
              "halls",
              "залы"
            ]
          ]
        },
        {
          "who": "Karina",
          "name": "Карина",
          "side": "left",
          "en": "Great. Did you take any photos so we can compare?",
          "ru": "Отлично. Ты сделал фото, чтобы мы могли сравнить?",
          "words": [
            [
              "take photos",
              "сделать фотографии"
            ],
            [
              "compare",
              "сравнить"
            ]
          ]
        },
        {
          "who": "Dan",
          "name": "Дэн",
          "side": "right",
          "en": "Of course. But pay attention to the parking — one place has none.",
          "ru": "Конечно. Но обрати внимание на парковку — у одного места её нет.",
          "words": [
            [
              "pay attention",
              "обрати внимание"
            ],
            [
              "parking",
              "парковка"
            ]
          ]
        },
        {
          "who": "Karina",
          "name": "Карина",
          "side": "left",
          "en": "Noted. Let's have a quick break, then we'll reach a conclusion.",
          "ru": "Учту. Давай сделаем короткий перерыв, а потом придём к выводу.",
          "words": [
            [
              "have a break",
              "сделать перерыв"
            ],
            [
              "reach a conclusion",
              "прийти к выводу"
            ]
          ]
        },
        {
          "who": "Dan",
          "name": "Дэн",
          "side": "right",
          "en": "Perfect. As long as we meet the deadline, the boss will be happy.",
          "ru": "Идеально. Главное, чтобы уложились в срок — и шеф будет доволен.",
          "words": [
            [
              "meet the deadline",
              "уложиться в срок"
            ],
            [
              "the boss",
              "начальник"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Коллокации уровня B2 — слова-друзья, которые ходят парами. Повтори вслух блоками: глагол держит существительное, прилагательное держит существительное. Запоминай целиком.",
      "items": [
        {
          "en": "make a decision",
          "ru": "принять решение",
          "ex": "It's hard to make a decision under pressure."
        },
        {
          "en": "do research",
          "ru": "проводить исследование",
          "ex": "She does research at the university."
        },
        {
          "en": "take a photo",
          "ru": "сделать фото",
          "ex": "Can you take a photo of us?"
        },
        {
          "en": "have a break",
          "ru": "сделать перерыв",
          "ex": "Let's have a break and grab a coffee."
        },
        {
          "en": "pay attention",
          "ru": "обращать внимание (без артикля)",
          "ex": "Pay attention to the small print."
        },
        {
          "en": "meet a deadline",
          "ru": "уложиться в срок",
          "ex": "We just managed to meet the deadline."
        },
        {
          "en": "reach a conclusion",
          "ru": "прийти к выводу",
          "ex": "The jury reached a conclusion at last."
        },
        {
          "en": "make progress",
          "ru": "делать успехи",
          "ex": "He's making steady progress in English."
        },
        {
          "en": "keep a promise",
          "ru": "сдержать обещание",
          "ex": "A leader must keep their promises."
        },
        {
          "en": "heavy rain",
          "ru": "сильный дождь",
          "ex": "Heavy rain flooded the streets."
        },
        {
          "en": "strong coffee",
          "ru": "крепкий кофе",
          "ex": "One strong coffee and I'm awake."
        },
        {
          "en": "high speed",
          "ru": "высокая скорость",
          "ex": "The train travels at high speed."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай рассказ про напряжённый рабочий день. Заметь, как почти каждая мысль держится на коллокации: make a decision, do research, take a photo, heavy rain, meet the deadline.",
      "title": "A long working day",
      "sentences": [
        "On Monday I had to make an important decision about the launch.",
        "First, I did some research and took photos of every option.",
        "Heavy rain was falling, so the office felt quiet and focused.",
        "With a strong coffee in hand, I started to compare the data.",
        "My manager told me to pay attention to the budget figures.",
        "After a short break, the team reached a conclusion together.",
        "We worked at high speed to meet the deadline by six.",
        "I kept my promise to send the report before I left."
      ],
      "translation": "В понедельник мне нужно было принять важное решение о запуске. Сначала я провёл небольшое исследование и сфотографировал каждый вариант. Шёл сильный дождь, так что в офисе было тихо и сосредоточенно. С чашкой крепкого кофе в руке я начал сравнивать данные. Руководитель велел мне обратить внимание на цифры бюджета. После короткого перерыва команда вместе пришла к выводу. Мы работали на высокой скорости, чтобы уложиться в срок к шести. Я сдержал обещание отправить отчёт, прежде чем уйти."
    },
    "drag": {
      "intro": "Соедини глагол с его «другом» — существительным, с которым он образует устойчивую коллокацию.",
      "pairs": [
        [
          "make",
          "a decision"
        ],
        [
          "do",
          "research"
        ],
        [
          "take",
          "a photo"
        ],
        [
          "pay",
          "attention"
        ],
        [
          "meet",
          "a deadline"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка по коллокациям. Шесть вопросов — и слова-друзья B2 у тебя в кармане.",
      "items": [
        {
          "q": "«Я сделал ошибку» —",
          "opts": [
            "I did a mistake",
            "I made a mistake",
            "I took a mistake"
          ],
          "answer": 1,
          "explain": "Ошибка «создаётся» → <b>make a mistake</b>."
        },
        {
          "q": "«Сделай, пожалуйста, наше фото» —",
          "opts": [
            "Please make our photo",
            "Please take our photo",
            "Please do our photo"
          ],
          "answer": 1,
          "explain": "Фото снимают → <b>take a photo</b>."
        },
        {
          "q": "«Вчера был сильный дождь» —",
          "opts": [
            "There was strong rain",
            "There was heavy rain",
            "There was big rain"
          ],
          "answer": 1,
          "explain": "Дождь → <b>heavy rain</b>."
        },
        {
          "q": "«Обрати внимание на знак» —",
          "opts": [
            "Give attention to the sign",
            "Pay attention to the sign",
            "Make attention to the sign"
          ],
          "answer": 1,
          "explain": "<b>Pay attention</b> — без артикля, глагол pay."
        },
        {
          "q": "«Учёные проводят исследование» —",
          "opts": [
            "Scientists make research",
            "Scientists do research",
            "Scientists take research"
          ],
          "answer": 1,
          "explain": "Процесс, работа → <b>do research</b>."
        },
        {
          "q": "«Мы уложились в срок» —",
          "opts": [
            "We caught the deadline",
            "We met the deadline",
            "We did the deadline"
          ],
          "answer": 1,
          "explain": "Уложиться в срок → <b>meet a deadline</b>."
        }
      ]
    },
    "essay": {
      "intro": "Твоя очередь — расскажи о дне или проекте, нанизывая коллокации.",
      "prompt": "Опиши день, когда тебе пришлось принять важное решение или уложиться в срок. Напиши 6–7 предложений. Используй минимум пять коллокаций из урока: make a decision, do research, take a photo, pay attention, meet a deadline, have a break, heavy rain, strong coffee, keep a promise.",
      "hint": "Структуры: I had to make a decision about… ; First I did some research… ; I paid attention to… ; Despite the heavy rain… ; We met the deadline… ; I kept my promise to… . Учи пары целиком — не переводи глагол по слову.",
      "example": "Last Thursday I had to make a difficult decision about my thesis topic. To choose well, I did a lot of research and took photos of every source I found in the library. Outside there was heavy rain, so I stayed in with a strong coffee and kept reading. My supervisor told me to pay attention to the deadline, which was only two days away. After a short break, I finally reached a conclusion and felt calm. By working late, I met the deadline and kept my promise to submit early. Looking back, I made real progress that week."
    },
    "picture": {
      "intro": "Опиши сцену через коллокации: что человек делает, какая погода, что он держит. Используй слова-друзья из урока.",
      "emoji": "📸☕🌧️",
      "prompt": "Опиши картинку, нанизывая коллокации. Используй минимум четыре пары: take a photo, heavy rain, strong coffee, pay attention, make a decision.",
      "hint": "Используй: She is taking a photo of… ; Despite the heavy rain… ; holding a strong coffee… ; paying close attention to… ; trying to make a decision about… .",
      "example": "A young woman stands by the window taking a photo of the grey street outside. Heavy rain is falling, so she holds a strong coffee to stay warm and awake. She is paying close attention to the light, hoping for the perfect shot. In a moment she will make a decision: stay in and edit, or brave the storm for one more picture.",
      "img": "img/b2/day-28.jpg",
      "credit": "Фото: gnuckx · CC0 · <a href=\"https://www.flickr.com/photos/34409164@N06/5711263737\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "29": {
    "day": 29,
    "week": "04",
    "level": "B2",
    "themeRu": "Фразовые B2",
    "themeEn": "Phrasal verbs B2",
    "intro": "Вчера ты собирал(а) коллокации — слова, которые любят стоять вместе. Сегодня шаг ещё глубже в живой английский: <b>фразовые глаголы</b>. Это глагол + маленькая частица, и вместе они часто значат совсем не то, что по отдельности: <b>give up</b> — не «дать вверх», а «сдаться»; <b>come up with</b> — не «прийти вверх с», а «придумать». Носитель почти всегда выберет <b>put up with</b>, а не книжное tolerate. Возьмём пятёрку очень частых B2-глаголов — <b>put up with, look forward to, get on with, come up with, run out of</b> — и разберём три вещи, на которых русскоязычные спотыкаются: какие глаголы можно <u>разделять</u>, куда девать местоимение (it, them) и почему после <b>look forward to</b> идёт <b>-ing</b>, а не инфинитив. Поехали.",
    "introAudio": "Вчера ты собирал коллокации — слова, которые любят стоять вместе. Сегодня шаг ещё глубже в живой английский: фразовые глаголы. Это глагол плюс маленькая частица, и вместе они часто значат совсем не то, что по отдельности: give up — не дать вверх, а сдаться; come up with — не прийти вверх с, а придумать. Носитель почти всегда выберет put up with, а не книжное tolerate. Возьмём пятёрку очень частых B2-глаголов — put up with, look forward to, get on with, come up with, run out of — и разберём три вещи, на которых русскоязычные спотыкаются: какие глаголы можно разделять, куда девать местоимение, it, them, и почему после look forward to идёт -ing, а не инфинитив. Поехали.",
    "goals": [
      "свободно использовать B2-фразовые: put up with, look forward to, get on with, come up with, run out of",
      "различать разделяемые (turn it down) и неразделяемые (look forward to it) глаголы",
      "ставить местоимение в нужное место: «turn it down», но «put up with it»",
      "не путать предлог to с инфинитивом: look forward to meeting, а не «to meet»"
    ],
    "learned": [
      "Научился(лась) свободно использовать B2-фразовые: put up with, look forward to, get on with, come up with, run out of",
      "Научился(лась) различать разделяемые (turn it down) и неразделяемые (look forward to it) глаголы",
      "Научился(лась) ставить местоимение в нужное место: «turn it down», но «put up with it»",
      "Перестал(а) путать предлог to с инфинитивом: look forward to meeting, а не «to meet»"
    ],
    "review": {
      "intro": "Сначала прогреем фундамент, на котором стоит сегодняшний день: базовые фразовые глаголы из A2, управление предлогами и вчерашние коллокации. Три коротких подхода.",
      "introAudio": "Сначала прогреем фундамент, на котором стоит сегодняшний день: базовые фразовые глаголы из A2, управление предлогами и вчерашние коллокации. Три коротких подхода.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> вспомни базовый фразовый глагол из A2. «Выключи свет.»",
          "q": "«Выключи свет, пожалуйста» —",
          "opts": [
            "Close the light, please.",
            "Turn off the light, please.",
            "Switch the light, please."
          ],
          "answer": 1,
          "explain": "Свет «выключают» через <b>turn off</b>, не «close» (это калька с русского «закрой»)."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> управление предлогом (always-on). Какой предлог после depend?",
          "q": "It all depends ___ the weather.",
          "opts": [
            "of",
            "from",
            "on"
          ],
          "answer": 2,
          "explain": "<b>depend on</b> — фиксированное управление. Не «depend from» (калька) и не «of»."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> вспомни вчерашнюю коллокацию (Д28). «Можешь сделать фото?»",
          "q": "Переведи: «Можешь сделать фото?»",
          "accept": [
            "can you take a photo",
            "could you take a photo",
            "can you take a picture"
          ],
          "placeholder": "Can you ... a photo?"
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Правило 1 · что это",
        "title": "Частица меняет всё — <em>come up with</em> ≠ «прийти вверх с»",
        "paras": [
          "Фразовый глагол — это глагол + одна-две частицы (наречие и/или предлог), и вместе они образуют <u>новый</u> смысл, который из частей не складывается. <b>give up</b> = сдаться, <b>work out</b> = разобраться/выяснить, <b>turn down</b> = отклонить. Переводить частицу буквально — главная ошибка: смысл идиоматичен, его учат целиком.",
          "Вот пятёрка очень частых B2-глаголов: <b>put up with</b> (терпеть, мириться с), <b>look forward to</b> (с нетерпением ждать), <b>get on with</b> (ладить с кем-то / продолжать что-то), <b>come up with</b> (придумать, выдать идею), <b>run out of</b> (исчерпать запас, «закончиться»).",
          "Заметь: все пять — <u>трёхсловные</u> (глагол + наречие + предлог). Это сразу важно для следующего правила: такие глаголы дополнение к себе «не впускают» внутрь. А смысл — учим как одно слово: put up with = endure, come up with = invent."
        ],
        "audio": "Фразовый глагол — это глагол плюс одна-две частицы, и вместе они образуют новый смысл, который из частей не складывается. give up — сдаться, work out — разобраться, turn down — отклонить. Переводить частицу буквально — главная ошибка. Вот пятёрка частых B2-глаголов: put up with — терпеть; look forward to — с нетерпением ждать; get on with — ладить или продолжать; come up with — придумать; run out of — исчерпать запас. Все пять трёхсловные.",
        "table": {
          "rows": [
            [
              "put up with",
              "терпеть, мириться с (= tolerate)"
            ],
            [
              "look forward to",
              "с нетерпением ждать (= anticipate)"
            ],
            [
              "get on with",
              "ладить с / продолжать (= manage)"
            ],
            [
              "come up with",
              "придумать, выдать (= invent)"
            ],
            [
              "run out of",
              "исчерпать запас (= use up)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Я больше не могу терпеть этот шум.",
            "en": "I can't <b>put up with</b> this noise any longer.",
            "gloss": "put up with = терпеть",
            "say": "I can't put up with this noise any longer."
          },
          {
            "ru": "Она придумала блестящий план.",
            "en": "She <b>came up with</b> a brilliant plan.",
            "gloss": "come up with = придумать",
            "say": "She came up with a brilliant plan."
          },
          {
            "ru": "У нас закончился кофе.",
            "en": "We've <b>run out of</b> coffee.",
            "gloss": "run out of = исчерпать запас",
            "say": "We have run out of coffee."
          },
          {
            "ru": "Я хорошо лажу с коллегами.",
            "en": "I <b>get on</b> well <b>with</b> my colleagues.",
            "gloss": "get on with = ладить",
            "say": "I get on well with my colleagues."
          }
        ],
        "mistakes": [
          {
            "wrong": "She invented a plan very quickly.",
            "right": "She <b>came up with</b> a plan very quickly.",
            "why": "invent — про изобретения; идею «придумывают» через come up with"
          },
          {
            "wrong": "I can't tolerate with this noise.",
            "right": "I can't <b>put up with</b> this noise.",
            "why": "либо tolerate (без with), либо put up with — не смешивай"
          }
        ],
        "mnemonic": "🧩 Учи фразовый целиком: come up with = придумать, put up with = терпеть. Частица — не «вверх».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери фразовый глагол под смысл «придумать идею».",
            "q": "«Кто придумал этот план?» —",
            "opts": [
              "Who came up with this plan?",
              "Who came up this plan?",
              "Who invented up this plan?"
            ],
            "answer": 0,
            "explain": "<b>come up with</b> + идея/план. Полная частица «up with» обязательна."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> что значит «We've run out of milk»?",
            "q": "«We've run out of milk» значит:",
            "opts": [
              "Мы убежали за молоком.",
              "У нас закончилось молоко.",
              "Мы вылили молоко."
            ],
            "answer": 1,
            "explain": "<b>run out of</b> = исчерпать запас: молоко закончилось."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. put up with = терпеть.",
            "q": "Собери: «Я не могу больше терпеть это»",
            "want": "I can't put up with this any longer",
            "answer": "I can't put up with this any longer"
          }
        ]
      },
      {
        "eyebrow": "Правило 2 · разделяемость",
        "title": "Разделяемые и неразделяемые",
        "paras": [
          "Двухсловные переходные глаголы часто <b>разделяемые</b>: дополнение-существительное можно ставить с двух сторон частицы. <b>turn down the offer</b> = <b>turn the offer down</b>; <b>put off the meeting</b> = <b>put the meeting off</b>; <b>give up sugar</b> = <b>give sugar up</b>. Оба варианта верны.",
          "А наша сегодняшняя пятёрка — <u>трёхсловные</u>: <b>put up with, look forward to, get on with, come up with, run out of</b>. Они <b>неразделяемые</b>: дополнение всегда стоит после всей связки. «I can't <b>put up with the noise</b>» ✓, но не «put the noise up with» ✗. Частица «приклеена» к глаголу намертво.",
          "Сюда же — простые «предложные» глаголы (look at, listen to, depend on, deal with): они тоже неразделимы, дополнение идёт сразу после предлога. Правило-подсказка: <u>чем больше частиц, тем меньше можно разделять</u>."
        ],
        "audio": "Двухсловные переходные глаголы часто разделяемые: дополнение-существительное можно ставить с двух сторон частицы. turn down the offer равно turn the offer down. А наша пятёрка трёхсловная: put up with, look forward to, get on with, come up with, run out of — они неразделяемые, дополнение всегда после всей связки. I can't put up with the noise — верно, но put the noise up with — ошибка. Сюда же простые предложные глаголы: look at, listen to, depend on — тоже неразделимы. Чем больше частиц, тем меньше можно разделять.",
        "table": {
          "rows": [
            [
              "разделяемый (2 слова)",
              "turn down the offer = turn the offer down"
            ],
            [
              "неразделяемый (3 слова)",
              "put up with the noise (только так)"
            ],
            [
              "предложный (look at)",
              "look at the picture (только так)"
            ],
            [
              "подсказка",
              "больше частиц → меньше разделяешь"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Они отклонили предложение. (можно и так, и так)",
            "en": "They <b>turned down the offer</b> / <b>turned the offer down</b>.",
            "gloss": "разделяемый: оба варианта",
            "say": "They turned down the offer. They turned the offer down."
          },
          {
            "ru": "Я с нетерпением жду эту поездку.",
            "en": "I'm <b>looking forward to the trip</b>.",
            "gloss": "неразделяемый: дополнение в конце",
            "say": "I'm looking forward to the trip."
          },
          {
            "ru": "Давай продолжим работу.",
            "en": "Let's <b>get on with the work</b>.",
            "gloss": "неразделяемый: get on with + дело",
            "say": "Let's get on with the work."
          },
          {
            "ru": "Нам надо разобраться с этой проблемой.",
            "en": "We need to <b>deal with this problem</b>.",
            "gloss": "предложный: deal with + дополнение",
            "say": "We need to deal with this problem."
          }
        ],
        "mistakes": [
          {
            "wrong": "I'm looking the trip forward to.",
            "right": "I'm <b>looking forward to the trip</b>.",
            "why": "трёхсловный глагол неразделим — ничего внутрь не вставляем"
          },
          {
            "wrong": "Let's get the work on with.",
            "right": "Let's <b>get on with the work</b>.",
            "why": "get on with неразделим: дополнение после всей связки"
          }
        ],
        "mnemonic": "🔗 2 слова — можно разделить (turn the offer down). 3 слова — нельзя (put up with the noise).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери верный порядок для трёхсловного глагола.",
            "q": "«Я с нетерпением жду выходные» —",
            "opts": [
              "I'm looking the weekend forward to.",
              "I'm looking forward to the weekend.",
              "I'm looking forward the weekend to."
            ],
            "answer": 1,
            "explain": "look forward to неразделим: дополнение целиком в конце."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> какой глагол МОЖНО разделить?",
            "q": "Где оба порядка верны (разделяемый глагол)?",
            "opts": [
              "put up with the noise / put the noise up with",
              "turn down the job / turn the job down",
              "look forward to it / look it forward to"
            ],
            "answer": 1,
            "explain": "<b>turn down</b> — двухсловный разделяемый: оба порядка верны. Остальные трёхсловные, неразделимы."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. deal with неразделим.",
            "q": "Собери: «Нам нужно разобраться с этим вопросом»",
            "want": "We need to deal with this issue",
            "answer": "We need to deal with this issue"
          }
        ]
      },
      {
        "eyebrow": "Правило 3 · русская ловушка",
        "title": "Местоимение: <em>turn it down</em>, но <em>put up with it</em>",
        "paras": [
          "Самый частый прокол. Если глагол <b>разделяемый</b>, то местоимение (it, them, him) <u>обязано</u> стоять в середине: <b>turn it down</b> ✓, не «turn down it» ✗; <b>put it up</b> ✓ (повесь это / установи это), не «put up it» ✗; <b>give it up</b> ✓. Существительное может стоять с краю, а местоимение — только внутри.",
          "Если глагол <b>неразделяемый</b> (трёхсловный или предложный), местоимение идёт <u>в конце</u>, как обычное дополнение: <b>look forward to it</b> ✓ (не «look forward it to»); <b>put up with him</b> ✓; <b>come up with it</b> ✓; <b>depend on it</b> ✓.",
          "Сравни два «put up»: <b>put it up</b> (разделяемый put up = повесить/установить) против <b>put up with it</b> (неразделяемый put up with = терпеть это). Частица «with» тащит дополнение за собой — внутрь местоимение не пускает."
        ],
        "audio": "Самый частый прокол. Если глагол разделяемый, местоимение обязано стоять в середине: turn it down — верно, turn down it — ошибка; put it up — верно, put up it — ошибка. Существительное может стоять с краю, а местоимение только внутри. Если глагол неразделяемый, местоимение идёт в конце: look forward to it — не look forward it to; put up with him; come up with it; depend on it. Сравни два put up: put it up — повесить это, против put up with it — терпеть это.",
        "table": {
          "rows": [
            [
              "разделяемый + it",
              "turn it down · put it up · give it up (в середине)"
            ],
            [
              "разделяемый ✗",
              "turn down it · put up it (так нельзя)"
            ],
            [
              "неразделяемый + it",
              "look forward to it · put up with it · come up with it (в конце)"
            ],
            [
              "контраст",
              "put it up (повесить) vs put up with it (терпеть)"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Мне предложили работу, но я отказался от неё.",
            "en": "They offered me a job, but I <b>turned it down</b>.",
            "gloss": "разделяемый: it в середине",
            "say": "They offered me a job, but I turned it down."
          },
          {
            "ru": "Шум ужасный, но мне приходится его терпеть.",
            "en": "The noise is awful, but I have to <b>put up with it</b>.",
            "gloss": "неразделяемый: it в конце",
            "say": "The noise is awful, but I have to put up with it."
          },
          {
            "ru": "Это отличная идея — кто её придумал?",
            "en": "Great idea — who <b>came up with it</b>?",
            "gloss": "неразделяемый: came up with it",
            "say": "Great idea — who came up with it?"
          },
          {
            "ru": "Вот плакат — повесь его сюда.",
            "en": "Here's the poster — <b>put it up</b> here.",
            "gloss": "разделяемый put up: it в середине",
            "say": "Here's the poster — put it up here."
          }
        ],
        "mistakes": [
          {
            "wrong": "They offered me a job, but I turned down it.",
            "right": "… but I <b>turned it down</b>.",
            "why": "разделяемый глагол: местоимение it только в середине"
          },
          {
            "wrong": "The noise is bad, but I put up it with.",
            "right": "… but I <b>put up with it</b>.",
            "why": "put up with неразделим: it идёт в самый конец"
          },
          {
            "wrong": "I'm really looking forward it to.",
            "right": "I'm really <b>looking forward to it</b>.",
            "why": "look forward to неразделим: it после to, ничего не переставляем"
          }
        ],
        "mnemonic": "📍 Разделяемый: it в середину (turn it down). Неразделяемый: it в конец (put up with it).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> разделяемый глагол turn down + местоимение it.",
            "q": "«Мне предложили работу, но я отказался от неё» —",
            "opts": [
              "… but I turned down it.",
              "… but I turned it down.",
              "… but I turned it down with."
            ],
            "answer": 1,
            "explain": "turn down разделяемый → местоимение it в середине: <b>turned it down</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> неразделяемый look forward to + it.",
            "q": "«Я очень этого жду» —",
            "opts": [
              "I'm really looking forward it to.",
              "I'm really looking forward to it.",
              "I'm really looking it forward to."
            ],
            "answer": 1,
            "explain": "look forward to неразделим → местоимение it в конце: <b>looking forward to it</b>."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> впиши с местоимением. put up with him = терпеть его.",
            "q": "«Он грубый, но мне приходится его терпеть.» (… but I have to …)",
            "accept": [
              "he is rude but i have to put up with him",
              "he's rude but i have to put up with him",
              "but i have to put up with him"
            ],
            "placeholder": "He's rude, but I have to put up with ..."
          }
        ]
      },
      {
        "eyebrow": "Правило 4 · to — это предлог!",
        "title": "<em>look forward to</em> + <em>-ing</em>, а не инфинитив",
        "paras": [
          "Самая коварная ловушка дня. В <b>look forward to</b>, <b>get on with</b>, <b>put up with</b>, <b>get used to</b> маленькое <b>to</b> (и <b>with</b>) — это <u>предлог</u>, а не частица инфинитива. А после любого предлога глагол стоит в форме <b>-ing</b>: «I look forward to <b>meeting</b> you», не «to meet you».",
          "Классика делового письма: <b>I look forward to hearing from you.</b> Ещё: «He can't <b>get used to living</b> alone», «I can't <b>put up with being</b> ignored». Везде после to/with — герундий.",
          "Быстрая проверка: если на место дополнения можно подставить <b>it</b> (look forward to <u>it</u>), значит <b>to</b> — предлог, и перед глаголом ставь <b>-ing</b> (look forward to <u>doing</u> it). По-русски «жду <u>встретить</u>» сбивает на инфинитив — игнорируй это, доверяй правилу «предлог → -ing»."
        ],
        "audio": "Самая коварная ловушка дня. В look forward to, get on with, put up with, get used to маленькое to и with — это предлог, а не частица инфинитива. После любого предлога глагол стоит в форме -ing: I look forward to meeting you, не to meet you. Классика письма: I look forward to hearing from you. He can't get used to living alone. Быстрая проверка: если на место дополнения можно подставить it, значит to — предлог, и перед глаголом ставь -ing: look forward to doing it.",
        "table": {
          "rows": [
            [
              "look forward to + -ing",
              "I look forward to seeing you"
            ],
            [
              "get used to + -ing",
              "She got used to working nights"
            ],
            [
              "put up with + -ing",
              "I won't put up with being lied to"
            ],
            [
              "проверка",
              "влезает it? → to предлог → -ing"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Жду не дождусь встречи с тобой.",
            "en": "I'm <b>looking forward to seeing</b> you.",
            "gloss": "to = предлог → seeing",
            "say": "I'm looking forward to seeing you."
          },
          {
            "ru": "Буду рад вашему ответу. (конец письма)",
            "en": "I <b>look forward to hearing</b> from you.",
            "gloss": "to + hearing",
            "say": "I look forward to hearing from you."
          },
          {
            "ru": "Он не может привыкнуть жить один.",
            "en": "He can't <b>get used to living</b> alone.",
            "gloss": "get used to + living",
            "say": "He can't get used to living alone."
          },
          {
            "ru": "Я не потерплю, чтобы мне врали.",
            "en": "I won't <b>put up with being</b> lied to.",
            "gloss": "put up with + being",
            "say": "I won't put up with being lied to."
          }
        ],
        "mistakes": [
          {
            "wrong": "I look forward to meet you.",
            "right": "I look forward to <b>meeting</b> you.",
            "why": "to здесь предлог → после него -ing, не инфинитив"
          },
          {
            "wrong": "She can't get used to work nights.",
            "right": "She can't get used to <b>working</b> nights.",
            "why": "get used to + -ing (to = предлог)"
          },
          {
            "wrong": "I'm looking forward to see you soon.",
            "right": "I'm looking forward to <b>seeing</b> you soon.",
            "why": "проверка: look forward to it → to предлог → seeing"
          }
        ],
        "mnemonic": "✉️ to после look forward / get used / put up with = предлог → -ing. Hearing, не «to hear».",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери форму после look forward to.",
            "q": "I look forward to ___ from you.",
            "opts": [
              "hear",
              "hearing",
              "to hear"
            ],
            "answer": 1,
            "explain": "to — предлог → <b>hearing</b> (-ing форма)."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> get used to + какая форма?",
            "q": "She can't get used to ___ early.",
            "opts": [
              "getting up",
              "get up",
              "to get up"
            ],
            "answer": 0,
            "explain": "get used to + -ing: <b>getting up</b> (to = предлог)."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери предложение. look forward to + meeting.",
            "q": "Собери: «Жду не дождусь встречи с тобой»",
            "want": "I am looking forward to meeting you",
            "answer": "I am looking forward to meeting you"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Дэн жалуется Кейт на квартиру и работу. Тапни по подсвеченным глаголам — это сегодняшняя пятёрка в живой речи, с местоимениями и -ing.",
      "lines": [
        {
          "who": "Dan",
          "name": "Дэн",
          "side": "left",
          "en": "I really can't put up with my flatmate any longer — he plays drums at midnight.",
          "ru": "Я правда больше не могу терпеть соседа — он играет на барабанах в полночь.",
          "words": [
            [
              "put up with",
              "терпеть, мириться с"
            ],
            [
              "flatmate",
              "сосед по квартире"
            ]
          ]
        },
        {
          "who": "Kate",
          "name": "Кейт",
          "side": "right",
          "en": "Have you tried talking to him? You usually get on with everyone.",
          "ru": "А ты пробовал с ним поговорить? Ты обычно со всеми ладишь.",
          "words": [
            [
              "get on with",
              "ладить с"
            ]
          ]
        },
        {
          "who": "Dan",
          "name": "Дэн",
          "side": "left",
          "en": "I did, but we've run out of patience with each other. So I came up with a plan: I'm moving out.",
          "ru": "Пробовал, но мы исчерпали терпение друг к другу. Так что я придумал план: съезжаю.",
          "words": [
            [
              "run out of",
              "исчерпать запас"
            ],
            [
              "came up with",
              "придумал"
            ],
            [
              "move out",
              "съезжать"
            ]
          ]
        },
        {
          "who": "Kate",
          "name": "Кейт",
          "side": "right",
          "en": "Smart. So you're looking forward to it, then?",
          "ru": "Умно. То есть ты этого ждёшь не дождёшься?",
          "words": [
            [
              "looking forward to it",
              "с нетерпением ждать этого"
            ]
          ]
        },
        {
          "who": "Dan",
          "name": "Дэн",
          "side": "left",
          "en": "Absolutely. I'm looking forward to sleeping through the night again!",
          "ru": "Ещё бы. Жду не дождусь снова спать всю ночь!",
          "words": [
            [
              "looking forward to sleeping",
              "ждать (предлог to + -ing)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Фразовые глаголы дня — учи их вместе с частицей и смыслом, как одно слово. Повтори вслух «глагол + значение».",
      "items": [
        {
          "en": "put up with",
          "ru": "терпеть, мириться с",
          "ex": "I can't put up with the noise."
        },
        {
          "en": "look forward to (+ -ing)",
          "ru": "с нетерпением ждать",
          "ex": "I look forward to hearing from you."
        },
        {
          "en": "get on with",
          "ru": "ладить с / продолжать",
          "ex": "Let's get on with the meeting."
        },
        {
          "en": "come up with",
          "ru": "придумать, выдать (идею)",
          "ex": "She came up with a clever solution."
        },
        {
          "en": "run out of",
          "ru": "исчерпать запас, закончиться",
          "ex": "We've run out of time."
        },
        {
          "en": "turn down (sep.)",
          "ru": "отклонить / убавить",
          "ex": "He turned the offer down."
        },
        {
          "en": "put off (sep.)",
          "ru": "откладывать",
          "ex": "Don't put it off any longer."
        },
        {
          "en": "give up (sep.)",
          "ru": "бросить, сдаться",
          "ex": "She gave up smoking."
        },
        {
          "en": "work out (sep.)",
          "ru": "разобраться / выяснить",
          "ex": "I can't work it out."
        },
        {
          "en": "get used to (+ -ing)",
          "ru": "привыкать к",
          "ex": "He got used to living abroad."
        },
        {
          "en": "deal with",
          "ru": "иметь дело с, решать",
          "ex": "We'll deal with it tomorrow."
        },
        {
          "en": "sort out (sep.)",
          "ru": "уладить, разрулить",
          "ex": "I'll sort it out today."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай короткий рассказ про переезд. Почти в каждой строке — фразовый глагол. Замечай, где можно/нельзя разделить и где идёт -ing.",
      "title": "Moving out",
      "sentences": [
        "For months I had put up with a noisy flat above a bar.",
        "I finally ran out of patience and decided to move.",
        "My sister came up with the idea of a flat-share.",
        "At first I couldn't get used to living with strangers.",
        "But I get on really well with my new flatmates.",
        "We had to deal with a broken boiler in the first week.",
        "The landlord kept putting the repair off.",
        "In the end we sorted it out ourselves.",
        "Now I'm looking forward to my first quiet weekend.",
        "I should have moved out years ago — I won't put it off again."
      ],
      "translation": "Несколько месяцев я терпел шумную квартиру над баром. В конце концов терпение лопнуло, и я решил переехать. Сестра придумала идею совместной аренды. Сначала я не мог привыкнуть жить с незнакомцами. Но с новыми соседями я отлично лажу. В первую неделю нам пришлось разбираться со сломанным котлом. Хозяин всё откладывал ремонт. В итоге мы уладили это сами. Теперь жду не дождусь первых тихих выходных. Надо было съехать ещё годы назад — больше не буду это откладывать."
    },
    "drag": {
      "intro": "Соедини фразовый глагол с его значением.",
      "pairs": [
        [
          "put up with",
          "терпеть, мириться с"
        ],
        [
          "look forward to",
          "с нетерпением ждать"
        ],
        [
          "come up with",
          "придумать"
        ],
        [
          "run out of",
          "исчерпать запас"
        ],
        [
          "get on with",
          "ладить / продолжать"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка — пять вопросов на разделяемость, местоимение и -ing. Пройдёшь — и фразовые зазвучат естественно.",
      "items": [
        {
          "q": "«Я отказался от предложения» (с местоимением) —",
          "opts": [
            "I turned down it.",
            "I turned it down.",
            "I turned it down with."
          ],
          "answer": 1,
          "explain": "turn down разделяемый → местоимение it в середине: <b>turned it down</b>."
        },
        {
          "q": "«Я с нетерпением жду встречи с тобой» —",
          "opts": [
            "I look forward to meet you.",
            "I look forward to meeting you.",
            "I look forward meeting you."
          ],
          "answer": 1,
          "explain": "to — предлог → -ing: <b>meeting</b>. И to опускать нельзя."
        },
        {
          "q": "«Кто это придумал?» —",
          "opts": [
            "Who came up with it?",
            "Who came it up with?",
            "Who came up it with?"
          ],
          "answer": 0,
          "explain": "come up with неразделим → местоимение it в конце: <b>came up with it</b>."
        },
        {
          "q": "«У нас закончилось время» —",
          "opts": [
            "We've run out time.",
            "We've run out of time.",
            "We've run time out of."
          ],
          "answer": 1,
          "explain": "<b>run out of</b> + дополнение в конце, частицу «of» не выбрасываем."
        },
        {
          "q": "«Она не может привыкнуть рано вставать» —",
          "opts": [
            "She can't get used to get up early.",
            "She can't get used to getting up early.",
            "She can't used to get up early."
          ],
          "answer": 1,
          "explain": "get used to + -ing: <b>getting up</b> (to — предлог)."
        }
      ]
    },
    "essay": {
      "intro": "Расскажи о чём-то, что тебя бесит и чего ты ждёшь — естественно, через фразовые глаголы.",
      "prompt": "Напиши 5–6 предложений: что тебе приходится терпеть (put up with), что ты придумал(а) с этим сделать (come up with), и чего ты ждёшь (look forward to). Используй минимум четыре разных фразовых глагола — следи за местоимением и за -ing после to/with.",
      "hint": "Структуры: I have to put up with… ; I've finally come up with… ; I get on (well) with… ; I'm looking forward to + -ing… ; We've run out of… .",
      "example": "For a year I've had to put up with a long, miserable commute — two hours on a crowded train every day. I'd almost run out of patience when I finally came up with a plan: I asked to work from home twice a week. Luckily, I get on well with my manager, so she agreed at once. Now I'm really looking forward to having my mornings back. I should have brought it up months ago — I won't put it off again.",
      "model": "I've had to put up with a long commute, but I've finally come up with a plan."
    },
    "picture": {
      "intro": "Опиши сцену на картинке через фразовые глаголы — как будто рассказываешь, что происходит и что будет дальше.",
      "emoji": "📦🔑🏠",
      "prompt": "Опиши, что человек делает на картинке. Используй фразовые глаголы: he's getting on with…, he can't put up with…, he came up with…, he's looking forward to + -ing.",
      "hint": "Структуры: She is getting on with the packing… ; She has run out of boxes… ; She's looking forward to moving in… ; She finally sorted it out.",
      "example": "In the picture a young woman is getting on with packing her things into boxes. It looks like she has run out of tape and is trying to work out a solution. She has clearly put up with this cramped flat for too long. Now she's looking forward to moving into a brighter place, and you can see she can't wait to start over.",
      "img": "img/b2/day-29.jpg",
      "credit": "Фото: State Library of South Australia · Public Domain · <a href=\"https://www.flickr.com/photos/32600408@N06/18886647138\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  },
  "30": {
    "day": 30,
    "week": "04",
    "level": "B2",
    "themeRu": "Моя позиция",
    "themeEn": "Your case",
    "intro": "Последняя страница уровня B2 — тридцатый день. Сегодня <b>нет новой грамматики</b>: вместо этого мы собираем весь арсенал уровня в одну вещь — в <b>аргументированную позицию</b>, «твоё дело» (your case). Хороший B2-аргумент — это не набор мнений, а связная история с опорой. Ты <u>рассказываешь</u>, как пришёл(пришла) к мысли (narrative tenses), выдвигаешь <u>гипотезу и сожаление</u> (mixed conditional + wish), <u>ссылаешься</u> на чужие мнения (It is said that… / X is believed to…), <u>выделяешь</u> главное (cleft + эмфатическое do) и <u>связываешь контраст</u> (however, whereas, on the other hand). Сегодня соберём эти пять инструментов в один текст — и ты увидишь, что владеешь ими. Финальный проект ждёт внизу. Закрываешь книгу уровня — ты заслужил(а) этот день.",
    "introAudio": "Последняя страница уровня B2 — тридцатый день. Сегодня нет новой грамматики: вместо этого мы собираем весь арсенал уровня в одну вещь — в аргументированную позицию, твоё дело, your case. Хороший B2-аргумент — это не набор мнений, а связная история с опорой. Ты рассказываешь, как пришёл к мысли — narrative tenses; выдвигаешь гипотезу и сожаление — mixed conditional плюс wish; ссылаешься на чужие мнения — It is said that, X is believed to; выделяешь главное — cleft плюс эмфатическое do; и связываешь контраст — however, whereas, on the other hand. Сегодня соберём эти пять инструментов в один текст — и ты увидишь, что владеешь ими. Финальный проект ждёт внизу. Закрываешь книгу уровня — ты заслужил этот день.",
    "goals": [
      "собрать аргументированную позицию из всего арсенала B2 в один связный текст",
      "завязать рассказ (narrative tenses) и гипотезу-сожаление (mixed conditional + wish) в одну мысль",
      "ссылаться на чужое мнение через passive reporting: It is said that… / X is believed to…",
      "выделять главное (cleft + эмфатическое do) и связывать контраст (discourse markers), держа регистр"
    ],
    "learned": [
      "Собрал(а) аргументированную позицию из всего арсенала B2 в один связный текст",
      "Завязал(а) рассказ (narrative tenses) и гипотезу-сожаление (mixed conditional + wish) в одну мысль",
      "Научился(лась) ссылаться на чужое мнение через passive reporting: It is said that… / X is believed to…",
      "Научился(лась) выделять главное (cleft + эмфатическое do) и связывать контраст (discourse markers), держа регистр"
    ],
    "review": {
      "intro": "Сегодня повторение — это и есть половина урока. Прогоним все пять опор уровня по одному заходу на каждую: рассказ, нереальное прошлое, ссылку на мнения, выделение и связки. Это твой чек-лист перед финальным проектом.",
      "introAudio": "Сегодня повторение — это и есть половина урока. Прогоним все пять опор уровня по одному заходу на каждую: рассказ, нереальное прошлое, ссылку на мнения, выделение и связки. Это твой чек-лист перед финальным проектом.",
      "tasks": [
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> narrative tenses. Что было РАНЬШЕ другого прошлого → past perfect.",
          "q": "When the police arrived, the burglar ___.",
          "opts": [
            "already disappeared",
            "had already disappeared",
            "was already disappear"
          ],
          "answer": 1,
          "explain": "Действие до момента в прошлом → past perfect: <b>had already disappeared</b>."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> mixed conditional. Прошлое условие → результат СЕЙЧАС.",
          "q": "If I had accepted that job, I ___ in London now.",
          "opts": [
            "would have lived",
            "would live",
            "will live"
          ],
          "answer": 1,
          "explain": "Условие в прошлом, результат в настоящем → <b>would live</b> (не «would have lived»)."
        },
        {
          "type": "type",
          "howto": "<b>Что делать:</b> wish о прошлом → wish + past perfect. «Жаль, что я не сохранил файл.»",
          "q": "Переведи: «Жаль, что я не сохранил файл.»",
          "accept": [
            "i wish i had saved the file",
            "i wish i'd saved the file",
            "if only i had saved the file"
          ],
          "placeholder": "I wish I had ..."
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> passive reporting. «Говорят, что…» — безличный оборот.",
          "q": "«Говорят, что новый закон несправедлив» —",
          "opts": [
            "They say me the new law is unfair.",
            "It is said that the new law is unfair.",
            "It is said the new law to be unfair."
          ],
          "answer": 1,
          "explain": "Безличный репортинг: <b>It is said that</b> + предложение. «They say me» — калька."
        },
        {
          "type": "build",
          "howto": "<b>Что делать:</b> cleft — выдели подлежащее через «It was … that …».",
          "q": "Собери (выдели «её поддержку»): «Именно её поддержка всё изменила»",
          "want": "It was her support that changed everything",
          "answer": "It was her support that changed everything"
        },
        {
          "type": "choice",
          "howto": "<b>Что делать:</b> эмфатическое do — усиль утверждение в прошлом.",
          "q": "«Я ведь правда тебя предупреждал!» —",
          "opts": [
            "I did warn you!",
            "I do warned you!",
            "I was warn you!"
          ],
          "answer": 0,
          "explain": "Эмфаза в past simple: <b>did</b> + база (warn). Смысл несёт ударение на did."
        }
      ]
    },
    "rules": [
      {
        "eyebrow": "Проект · шаг 1 · каркас",
        "title": "Из чего собрать «свою позицию»",
        "paras": [
          "Сильный B2-аргумент — это не список «I think…», а маленькая <u>драматургия</u>. Возьми один тезис (твою позицию) и проведи читателя по пяти ходам, у каждого — свой грамматический инструмент уровня.",
          "<b>(1) Хук-рассказ</b> — как ты пришёл к мысли (narrative tenses). <b>(2) Гипотеза/сожаление</b> — «а если бы / жаль, что» (mixed conditional + wish). <b>(3) Опора на мнения</b> — «считается, что…» (passive reporting). <b>(4) Выделение</b> — что тут <u>главное</u> (cleft + эмфатическое do). <b>(5) Контраст и вывод</b> — «однако… в итоге…» (discourse markers).",
          "Не обязательно строго по порядку — но в хорошем тексте видны все пять. Дальше разберём их по парам и соберём в один абзац. Это и есть твой финальный проект."
        ],
        "audio": "Сильный B2-аргумент — это не список I think, а маленькая драматургия. Возьми один тезис и проведи читателя по пяти ходам, у каждого свой инструмент. Первый: хук-рассказ, как ты пришёл к мысли — narrative tenses. Второй: гипотеза или сожаление — mixed conditional плюс wish. Третий: опора на мнения — passive reporting, считается, что. Четвёртый: выделение, что тут главное — cleft плюс эмфатическое do. Пятый: контраст и вывод — discourse markers. В хорошем тексте видны все пять.",
        "table": {
          "rows": [
            [
              "1 · рассказ",
              "narrative tenses (past simple/cont./perfect)"
            ],
            [
              "2 · гипотеза/сожаление",
              "mixed conditional + wish"
            ],
            [
              "3 · опора на мнения",
              "It is said that… / X is believed to…"
            ],
            [
              "4 · выделение",
              "cleft (What… / It was…) + do/did"
            ],
            [
              "5 · связки и вывод",
              "however / whereas / all in all"
            ]
          ],
          "star": 0
        },
        "examples": [
          {
            "ru": "Три года назад я переехал в город, где никого не знал.",
            "en": "Three years ago I <b>moved</b> to a city where I <b>knew</b> no one.",
            "gloss": "ход 1: рассказ-хук",
            "say": "Three years ago I moved to a city where I knew no one."
          },
          {
            "ru": "Считается, что первый год за границей — самый тяжёлый.",
            "en": "It is <b>said that</b> the first year abroad is the hardest.",
            "gloss": "ход 3: опора на мнение",
            "say": "It is said that the first year abroad is the hardest."
          },
          {
            "ru": "Но главное, что меня держало, — одно решение.",
            "en": "But <b>what kept me going was</b> a single decision.",
            "gloss": "ход 4: выделение (cleft)",
            "say": "But what kept me going was a single decision."
          }
        ],
        "mistakes": [
          {
            "wrong": "I think it is good. Also it is bad. The end.",
            "right": "A claim, a story, a source, an emphasis, a contrast — then a conclusion.",
            "why": "B2-позиция — структура из пяти ходов, а не список мнений"
          }
        ],
        "mnemonic": "🏗️ Пять ходов: рассказ → гипотеза → опора → выделение → контраст-вывод.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> сопоставь ход и инструмент.",
            "q": "«Сослаться на чужое мнение» — это какой инструмент?",
            "opts": [
              "narrative tenses",
              "passive reporting (It is said that…)",
              "mixed conditional"
            ],
            "answer": 1,
            "explain": "Опора на мнения → <b>passive reporting</b>: It is said / believed that…"
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> какой инструмент ВЫДЕЛЯЕТ главное?",
            "q": "Чтобы подчеркнуть, что именно X важно, берём:",
            "opts": [
              "cleft (What matters is… / It was X that…)",
              "past perfect continuous",
              "reported speech backshift"
            ],
            "answer": 0,
            "explain": "Выделение → <b>cleft</b> и эмфатическое do."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери хук-рассказ в прошедшем.",
            "q": "Собери: «Пять лет назад я начал учить английский»",
            "want": "Five years ago I started learning English",
            "answer": "Five years ago I started learning English"
          }
        ]
      },
      {
        "eyebrow": "Проект · шаг 2 · рассказ + гипотеза",
        "title": "<em>Narrative tenses</em> + <em>mixed conditional</em> + <em>wish</em>",
        "paras": [
          "Открой позицию рассказом. Расставь времена как систему: фон — past continuous, цепочка событий — past simple, то, что было <u>раньше</u>, — past perfect. «When I <b>arrived</b>, I <b>had</b> already <b>spent</b> all my savings, and it <b>was raining</b>.»",
          "Дальше — самое «нерусское»: <b>mixed conditional</b> связывает прошлое условие с настоящим результатом. «If I <b>had stayed</b> at home, I <b>wouldn't be</b> the person I am today.» И <b>wish + past perfect</b> добавляет сожаление: «I <b>wish</b> I <b>had prepared</b> better.»",
          "Русская опора-ловушка: в русском один способ на все «бы», поэтому тянет сказать «would have been» там, где результат — СЕЙЧАС. Держи различие: прошлое условие + настоящий результат → <b>would + база</b> (would be), а не «would have been»."
        ],
        "audio": "Открой позицию рассказом. Расставь времена как систему: фон — past continuous, цепочка событий — past simple, то, что было раньше, — past perfect. When I arrived, I had already spent all my savings, and it was raining. Дальше самое нерусское: mixed conditional связывает прошлое условие с настоящим результатом. If I had stayed at home, I wouldn't be the person I am today. И wish плюс past perfect добавляет сожаление: I wish I had prepared better. Ловушка: прошлое условие плюс настоящий результат — would плюс база, would be, а не would have been.",
        "table": {
          "rows": [
            [
              "фон рассказа",
              "past continuous (it was raining)"
            ],
            [
              "цепочка событий",
              "past simple (I arrived, I decided)"
            ],
            [
              "что было раньше",
              "past perfect (I had spent)"
            ],
            [
              "прошлое → сейчас",
              "If I had …, I would (be) … now"
            ],
            [
              "сожаление",
              "I wish I had + 3-я форма"
            ]
          ],
          "star": 3
        },
        "examples": [
          {
            "ru": "Когда я приехал, я уже потратил все сбережения.",
            "en": "When I <b>arrived</b>, I <b>had</b> already <b>spent</b> all my savings.",
            "gloss": "past simple + past perfect",
            "say": "When I arrived, I had already spent all my savings."
          },
          {
            "ru": "Если бы я остался дома, я не был бы тем, кто я сейчас.",
            "en": "If I <b>had stayed</b> home, I <b>wouldn't be</b> who I am today.",
            "gloss": "mixed: прошлое → настоящее",
            "say": "If I had stayed home, I wouldn't be who I am today."
          },
          {
            "ru": "Жаль, что я не подготовился лучше.",
            "en": "I <b>wish</b> I <b>had prepared</b> better.",
            "gloss": "wish + past perfect",
            "say": "I wish I had prepared better."
          }
        ],
        "mistakes": [
          {
            "wrong": "If I had stayed home, I wouldn't have been who I am today.",
            "right": "… I <b>wouldn't be</b> who I am today.",
            "why": "результат СЕЙЧАС → would + база, не «would have been»"
          },
          {
            "wrong": "I wish I prepared better for that.",
            "right": "I wish I <b>had prepared</b> better.",
            "why": "сожаление о прошлом → wish + past perfect"
          },
          {
            "wrong": "When I arrived, the meeting already started.",
            "right": "… the meeting <b>had</b> already <b>started</b>.",
            "why": "раньше другого прошлого → past perfect"
          }
        ],
        "mnemonic": "⏳ Рассказ: had done < did < was doing. Прошлое→сейчас: would be (не would have been).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> mixed conditional, результат сейчас.",
            "q": "If I had learned to drive, I ___ a car now.",
            "opts": [
              "would have had",
              "would have",
              "will have"
            ],
            "answer": 1,
            "explain": "прошлое условие + настоящий результат → <b>would have</b> (a car) now."
          },
          {
            "type": "type",
            "howto": "<b>Что делать:</b> wish о прошлом. «Жаль, что я не начал раньше.»",
            "q": "Переведи: «Жаль, что я не начал раньше.»",
            "accept": [
              "i wish i had started earlier",
              "i wish i'd started earlier",
              "if only i had started earlier"
            ],
            "placeholder": "I wish I had ..."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери рассказ с past perfect.",
            "q": "Собери: «К тому времени я уже принял решение»",
            "want": "By then I had already made my decision",
            "answer": "By then I had already made my decision"
          }
        ]
      },
      {
        "eyebrow": "Проект · шаг 3 · опора + выделение",
        "title": "<em>Passive reporting</em> + <em>cleft</em> + эмфатическое <em>do</em>",
        "paras": [
          "Чтобы позиция звучала весомо, обопрись на мнения — но безлично. <b>It is said / believed / argued that…</b> + предложение: «It is <b>argued that</b> remote work harms teams.» Или личный вариант: <b>X is said / believed to…</b>: «Newcomers are <b>believed to give up</b> within a year» (одновременность); «He is <b>said to have left</b>» (раньше).",
          "Теперь выдели главное. <b>Cleft</b> поднимает одну часть в фокус: «<b>What</b> really matters <b>is</b> trust», «<b>It was</b> her support <b>that</b> changed everything», «<b>All</b> I wanted <b>was</b> a fair chance». А <b>эмфатическое do/does/did</b> усиливает сам глагол: «I <b>do</b> believe this», «She <b>did</b> warn us».",
          "Две русские опоры-ловушки. Согласование в cleft: «It is <u>you</u> who <b>are</b> right» (после who — по выделенному лицу). И do только в утверждении и с <u>базой</u>: «I <b>do</b> believe» ✓, не «I do believed» ✗."
        ],
        "audio": "Чтобы позиция звучала весомо, обопрись на мнения, но безлично. It is said, believed, argued that плюс предложение: It is argued that remote work harms teams. Или личный вариант: X is believed to: newcomers are believed to give up within a year; he is said to have left — раньше. Теперь выдели главное. Cleft поднимает одну часть в фокус: What really matters is trust; It was her support that changed everything; All I wanted was a fair chance. А эмфатическое do, does, did усиливает глагол: I do believe this; she did warn us. Ловушки: согласование в cleft, и do только в утверждении и с базой — I do believe, не I do believed.",
        "table": {
          "rows": [
            [
              "безличный репортинг",
              "It is said / argued / believed that…"
            ],
            [
              "личный репортинг",
              "X is believed to do / to have done"
            ],
            [
              "cleft (фокус)",
              "What… is… / It was X that… / All I want is…"
            ],
            [
              "эмфаза глагола",
              "I do believe · she did warn (do + база)"
            ]
          ],
          "star": 2
        },
        "examples": [
          {
            "ru": "Утверждают, что удалёнка вредит командам.",
            "en": "It is <b>argued that</b> remote work harms teams.",
            "gloss": "безличный репортинг",
            "say": "It is argued that remote work harms teams."
          },
          {
            "ru": "Считается, что новички сдаются за год.",
            "en": "Newcomers are <b>believed to give up</b> within a year.",
            "gloss": "личный репортинг (одновременность)",
            "say": "Newcomers are believed to give up within a year."
          },
          {
            "ru": "Главное, что меня держало, — одно решение.",
            "en": "<b>What kept me going was</b> a single decision.",
            "gloss": "cleft с What",
            "say": "What kept me going was a single decision."
          },
          {
            "ru": "Я правда верю, что это сработало.",
            "en": "I <b>do believe</b> it worked.",
            "gloss": "эмфатическое do + база",
            "say": "I do believe it worked."
          }
        ],
        "mistakes": [
          {
            "wrong": "They say me that remote work is bad.",
            "right": "It is <b>said that</b> remote work is bad.",
            "why": "безличный репортинг: It is said that…, без «say me»"
          },
          {
            "wrong": "It is you who is right.",
            "right": "It is <b>you who are</b> right.",
            "why": "глагол после who согласуется с выделенным словом: you → are"
          },
          {
            "wrong": "I do believed in this plan.",
            "right": "I <b>do believe</b> in this plan.",
            "why": "эмфатическое do + базовая форма (believe), не «believed»"
          }
        ],
        "mnemonic": "🔦 Опора: It is said that… · X is believed to… Фокус: What…is / It was…that + do/did.",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> безличный репортинг.",
            "q": "«Считается, что цены вырастут» —",
            "opts": [
              "It is believed that prices will rise.",
              "They believe me prices will rise.",
              "It believes that prices will rise."
            ],
            "answer": 0,
            "explain": "Безличный репортинг: <b>It is believed that</b> + предложение."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> эмфатическое do в прошедшем.",
            "q": "«Она ведь правда позвонила» —",
            "opts": [
              "She did called.",
              "She did call.",
              "She does call."
            ],
            "answer": 1,
            "explain": "did + базовая форма: <b>did call</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери cleft с «What».",
            "q": "Собери: «Главное — это доверие» (через What… is)",
            "want": "What really matters is trust",
            "answer": "What really matters is trust"
          }
        ]
      },
      {
        "eyebrow": "Проект · шаг 4 · связки + вывод",
        "title": "<em>Discourse markers</em> и сильный финал",
        "paras": [
          "Контраст делает аргумент честным: ты признаёшь другую сторону, а потом возвращаешься к своей. <b>However</b> / <b>Nevertheless</b> начинают предложение и отделяются запятой: «It was risky. <b>However,</b> it paid off.» <b>Whereas</b> и <b>while</b> противопоставляют два факта в одном предложении: «City life is fast, <b>whereas</b> village life is slow.»",
          "Для смены ракурса — <b>on the other hand</b> (другая сторона того же вопроса) и <b>in contrast</b> / <b>on the contrary</b> (а вот наоборот). Не путай: <b>on the contrary</b> = «нет, как раз наоборот» (опровержение), а <b>on the other hand</b> = «с другой стороны» (второй взгляд).",
          "Заверши выводом-обобщением: <b>All in all</b>, <b>On balance</b>, <b>In conclusion</b> + твоя позиция одной фразой. И держи регистр ровным: для аргумента — нейтрально-формальный, без сленга. Это финальный штрих B2."
        ],
        "audio": "Контраст делает аргумент честным: ты признаёшь другую сторону, а потом возвращаешься к своей. However и nevertheless начинают предложение и отделяются запятой: It was risky. However, it paid off. Whereas и while противопоставляют два факта в одном предложении: city life is fast, whereas village life is slow. Для смены ракурса — on the other hand и in contrast или on the contrary. Не путай: on the contrary — нет, как раз наоборот, опровержение; on the other hand — с другой стороны, второй взгляд. Заверши обобщением: all in all, on balance, in conclusion плюс твоя позиция. И держи регистр ровным, нейтрально-формальным.",
        "table": {
          "rows": [
            [
              "However, / Nevertheless,",
              "новое предложение + запятая"
            ],
            [
              "whereas / while",
              "два факта в одном предложении"
            ],
            [
              "on the other hand",
              "второй взгляд на тот же вопрос"
            ],
            [
              "on the contrary",
              "нет, как раз наоборот (опровержение)"
            ],
            [
              "All in all / On balance",
              "вывод-обобщение в финале"
            ]
          ],
          "star": 1
        },
        "examples": [
          {
            "ru": "Это было рискованно. Однако это окупилось.",
            "en": "It was risky. <b>However,</b> it paid off.",
            "gloss": "however + запятая, новое предложение",
            "say": "It was risky. However, it paid off."
          },
          {
            "ru": "Город быстрый, тогда как деревня медленная.",
            "en": "The city is fast, <b>whereas</b> the village is slow.",
            "gloss": "whereas: контраст фактов",
            "say": "The city is fast, whereas the village is slow."
          },
          {
            "ru": "С другой стороны, переезд многого мне стоил.",
            "en": "<b>On the other hand,</b> the move cost me a lot.",
            "gloss": "второй взгляд",
            "say": "On the other hand, the move cost me a lot."
          },
          {
            "ru": "В итоге это была лучшая ошибка в моей жизни.",
            "en": "<b>All in all,</b> it was the best mistake of my life.",
            "gloss": "вывод-обобщение",
            "say": "All in all, it was the best mistake of my life."
          }
        ],
        "mistakes": [
          {
            "wrong": "It was hard, however it paid off.",
            "right": "It was hard. <b>However,</b> it paid off.",
            "why": "however — новое предложение (или ; ), за ним запятая; не как «but»"
          },
          {
            "wrong": "He stayed calm, while I was angry — no, on the contrary.",
            "right": "He stayed calm; <b>on the other hand,</b> I was angry.",
            "why": "второй взгляд → on the other hand; on the contrary — это опровержение"
          },
          {
            "wrong": "City life is fast, while village life I mean the time.",
            "right": "City life is fast, <b>whereas</b> village life is slow.",
            "why": "контраст фактов → whereas; while больше про время"
          }
        ],
        "mnemonic": "🔀 However, (нов. предл.) · whereas (контраст фактов) · all in all (финал).",
        "tasks": [
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> выбери маркер контраста двух фактов в одном предложении.",
            "q": "Sales rose in the north, ___ they fell in the south.",
            "opts": [
              "however",
              "whereas",
              "on the contrary"
            ],
            "answer": 1,
            "explain": "Контраст двух фактов в одном предложении → <b>whereas</b>."
          },
          {
            "type": "choice",
            "howto": "<b>Что делать:</b> «нет, как раз наоборот» (опровержение).",
            "q": "It wasn't boring. ___, it was the best talk of the day.",
            "opts": [
              "On the contrary",
              "On the other hand",
              "Whereas"
            ],
            "answer": 0,
            "explain": "Опровержение предыдущего → <b>On the contrary</b>."
          },
          {
            "type": "build",
            "howto": "<b>Что делать:</b> собери вывод-обобщение.",
            "q": "Собери: «В итоге оно того стоило»",
            "want": "All in all it was worth it",
            "answer": "All in all it was worth it"
          }
        ]
      }
    ],
    "dialogue": {
      "intro": "Майя и Том спорят, стоило ли ей уезжать за границу. Тапни по подсветке — это весь арсенал B2 в живом споре: рассказ, mixed conditional, репортинг, cleft, эмфаза, связки.",
      "lines": [
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "When I left, I had never lived abroad, and everyone said I would regret it.",
          "ru": "Когда я уезжала, я никогда не жила за границей, и все говорили, что я пожалею.",
          "words": [
            [
              "had never lived",
              "никогда не жила (past perfect)"
            ],
            [
              "abroad",
              "за границей"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "It is often said that the first year breaks you. Don't you wish you had stayed?",
          "ru": "Часто говорят, что первый год ломает. Разве ты не жалеешь, что не осталась?",
          "words": [
            [
              "it is often said that",
              "часто говорят, что (passive reporting)"
            ],
            [
              "wish you had stayed",
              "жалеешь, что не осталась (wish + past perfect)"
            ]
          ]
        },
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "Not at all. If I had stayed, I wouldn't be doing the work I love now.",
          "ru": "Вовсе нет. Если бы я осталась, я бы сейчас не занималась любимым делом.",
          "words": [
            [
              "if I had stayed, I wouldn't be",
              "если бы осталась, не была бы (mixed conditional)"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "Fair. So what really changed everything?",
          "ru": "Справедливо. Так что же на самом деле всё изменило?",
          "words": [
            [
              "what really changed everything",
              "что на самом деле всё изменило (cleft-вопрос)"
            ]
          ]
        },
        {
          "who": "Maya",
          "name": "Майя",
          "side": "left",
          "en": "It was one local class that opened every door. I do believe that single choice made me.",
          "ru": "Именно один местный курс открыл все двери. Я правда верю, что этот выбор меня сформировал.",
          "words": [
            [
              "it was … that",
              "именно … (cleft)"
            ],
            [
              "I do believe",
              "я правда верю (эмфатическое do)"
            ]
          ]
        },
        {
          "who": "Tom",
          "name": "Том",
          "side": "right",
          "en": "However you look at it, you've clearly built a life. All in all, you were right.",
          "ru": "Как ни смотри, ты явно построила жизнь. В итоге ты была права.",
          "words": [
            [
              "however you look at it",
              "как ни смотри (связка)"
            ],
            [
              "all in all",
              "в итоге (вывод)"
            ]
          ]
        }
      ]
    },
    "vocab": {
      "intro": "Фразы-инструменты для аргумента — выучи их как готовые «детали», из которых собирается позиция. Повтори вслух.",
      "items": [
        {
          "en": "It is said / argued that…",
          "ru": "говорят / утверждают, что…",
          "ex": "It is argued that the policy failed."
        },
        {
          "en": "X is believed to…",
          "ru": "считается, что X…",
          "ex": "He is believed to have left the country."
        },
        {
          "en": "What matters is…",
          "ru": "главное — это…",
          "ex": "What matters is the result, not the speed."
        },
        {
          "en": "It was X that…",
          "ru": "именно X…",
          "ex": "It was her email that saved the deal."
        },
        {
          "en": "I do believe / it did happen",
          "ru": "я правда верю / это правда было",
          "ex": "I do believe we made the right call."
        },
        {
          "en": "If I had…, I would (be)… now",
          "ru": "если бы я…, я бы сейчас…",
          "ex": "If I had saved more, I would own a flat now."
        },
        {
          "en": "I wish I had…",
          "ru": "жаль, что я не…",
          "ex": "I wish I had spoken up sooner."
        },
        {
          "en": "However, / Nevertheless,",
          "ru": "однако, / тем не менее,",
          "ex": "It was hard. However, it was worth it."
        },
        {
          "en": "whereas",
          "ru": "тогда как (контраст фактов)",
          "ex": "I prefer tea, whereas she loves coffee."
        },
        {
          "en": "on the other hand",
          "ru": "с другой стороны",
          "ex": "On the other hand, it costs more."
        },
        {
          "en": "on the contrary",
          "ru": "напротив, как раз наоборот",
          "ex": "It wasn't dull; on the contrary, it was gripping."
        },
        {
          "en": "all in all / on balance",
          "ru": "в итоге / взвесив всё",
          "ex": "All in all, I'd do it again."
        }
      ]
    },
    "reading": {
      "intro": "Прочитай и послушай образец аргументированной позиции. Найди в нём все пять инструментов: рассказ, mixed conditional + wish, репортинг, cleft + do, связки.",
      "title": "The best mistake I ever made",
      "sentences": [
        "Three years ago I left home for a country whose language I barely spoke.",
        "I had never lived on my own, and by the time I found a flat, I had already run out of money.",
        "It is often said that the first months abroad break you, and newcomers are believed to give up within a year.",
        "If I had listened to that, I would probably be back home now.",
        "However, what kept me going was one small decision: I joined a local choir.",
        "I do believe that single choice changed the course of my life.",
        "I sometimes wish I had been braver from the start, whereas the cautious part of me insists the slow road was right.",
        "On the other hand, the friendships I made would never have happened if I had rushed.",
        "All in all, the move was the best mistake I have ever made."
      ],
      "translation": "Три года назад я уехал в страну, языка которой почти не знал. Я никогда не жил один, и к тому времени, как нашёл квартиру, уже потратил все деньги. Часто говорят, что первые месяцы за границей ломают, и считается, что новички сдаются за год. Если бы я тогда послушал это, я бы, наверное, уже был дома. Однако главное, что меня держало, — одно маленькое решение: я записался в местный хор. Я правда верю, что этот выбор изменил всю мою жизнь. Иногда я жалею, что не был смелее с самого начала, тогда как осторожная часть меня твердит, что медленный путь был верным. С другой стороны, моих друзей никогда бы не было, если бы я спешил. В итоге этот переезд — лучшая ошибка в моей жизни."
    },
    "drag": {
      "intro": "Соедини инструмент уровня с тем, ЧТО он делает в аргументе.",
      "pairs": [
        [
          "narrative tenses",
          "рассказать, как ты пришёл к мысли"
        ],
        [
          "mixed conditional + wish",
          "гипотеза и сожаление о прошлом"
        ],
        [
          "It is said that…",
          "сослаться на чужое мнение"
        ],
        [
          "cleft + эмфатическое do",
          "выделить главное"
        ],
        [
          "however / whereas",
          "связать контраст и вывод"
        ]
      ]
    },
    "quiz": {
      "intro": "Финальная проверка всего B2 — пять вопросов на пять опор уровня. Пройдёшь — и уровень закрыт. Поздравляю заранее!",
      "items": [
        {
          "q": "Narrative: «Когда я пришёл, он уже ушёл» —",
          "opts": [
            "When I came, he already left.",
            "When I came, he had already left.",
            "When I came, he has already left."
          ],
          "answer": 1,
          "explain": "Раньше другого прошлого → past perfect: <b>had already left</b>."
        },
        {
          "q": "Mixed conditional: «Если бы я выучил язык, у меня сейчас была бы та работа» —",
          "opts": [
            "If I had learned the language, I would have that job now.",
            "If I had learned the language, I would have had that job now.",
            "If I learned the language, I will have that job now."
          ],
          "answer": 0,
          "explain": "Прошлое условие + настоящий результат → <b>would have … now</b>."
        },
        {
          "q": "Passive reporting: «Считается, что он уехал» —",
          "opts": [
            "It is believed he leaving.",
            "He is believed to have left.",
            "They believe him to leaving."
          ],
          "answer": 1,
          "explain": "Личный репортинг, прошлое → <b>is believed to have left</b>."
        },
        {
          "q": "Выделение: «Именно её совет всё изменил» —",
          "opts": [
            "It was her advice that changed everything.",
            "It was her advice what changed everything.",
            "Her advice was that changed everything."
          ],
          "answer": 0,
          "explain": "Cleft подлежащего: <b>It was … that …</b> (не «what» после вещи)."
        },
        {
          "q": "Связка: «Север вырос, тогда как юг упал» —",
          "opts": [
            "The north grew, however the south fell.",
            "The north grew, whereas the south fell.",
            "The north grew, on the contrary the south fell."
          ],
          "answer": 1,
          "explain": "Контраст двух фактов в одном предложении → <b>whereas</b>."
        }
      ]
    },
    "essay": {
      "intro": "Это он — финальный проект B2. Собери СВОЮ позицию из всего арсенала уровня. Не торопись, перечитай, проверь по чек-листу из правил.",
      "prompt": "Напиши аргументированную позицию (8–10 предложений) на тему, которая тебе важна: выбор, который ты сделал(а); технология; переезд; изучение языка; спорный вопрос. Вплети все пять инструментов: (1) короткий рассказ (narrative tenses), (2) гипотезу/сожаление (mixed conditional + wish), (3) ссылку на мнение (It is said that… / X is believed to…), (4) выделение (cleft или эмфатическое do), (5) минимум два discourse markers (however / whereas / on the other hand) и вывод (all in all).",
      "hint": "Чек-лист: ① прошлое-фон + past perfect ② If I had…, I would (be)… now / I wish I had… ③ It is said/believed that… ④ What matters is… / It was X that… / I do believe… ⑤ However,… whereas… All in all,… . Держи нейтрально-формальный регистр.",
      "example": "Three years ago I left a safe office job to retrain as a developer, and almost everyone warned me against it. By the time I started the course, I had already spent most of my savings, and for months I barely slept. It is often said that career changes after thirty rarely work out, and people who switch fields are believed to earn less for years. If I had listened to that, I would still be sitting in that grey office now. However, what really changed everything was one stubborn decision to finish a project I hated. I do believe that single push proved I could do it. I sometimes wish I had started earlier, whereas another part of me knows the timing taught me patience. On the other hand, the doubts never fully disappear, and the pay was lower at first. All in all, though, it was the best risk I have ever taken, and I would make exactly the same case to anyone hesitating today.",
      "model": "It is often said that career changes after thirty rarely work out — however, what changed everything for me was one stubborn decision."
    },
    "picture": {
      "intro": "Опиши сцену и заодно займи позицию: что здесь происходит и на чьей ты стороне. Используй весь арсенал B2.",
      "emoji": "🗳️⚖️🎯",
      "prompt": "Опиши, что происходит на картинке, и аргументируй свою позицию (6–8 предложений). Вплети: рассказ-фон, mixed conditional или wish, ссылку (It is said that…), выделение (cleft / do) и связку (however / whereas).",
      "hint": "Структуры: They had been arguing for a while when… ; If they had listened earlier, they would… now ; It is said that… ; What really matters here is… ; However,… ; All in all,… .",
      "example": "In the picture a group of people are gathered for what looks like a heated public debate. They had clearly been arguing for a while before someone finally stood up to speak. It is often said that such meetings change nothing, and the loudest voices are believed to win. However, what really matters here is that ordinary people are being heard at all. If they had stayed silent, the decision would already be made without them. I do believe this kind of honest disagreement is healthy. All in all, whereas it looks like chaos, it is in fact democracy doing its job.",
      "img": "img/b2/day-30.jpg",
      "credit": "Фото: South Australian History Network · CC0 · <a href=\"https://www.flickr.com/photos/59809888@N06/7189494106\" target=\"_blank\" rel=\"noopener\">источник</a>"
    }
  }
};
