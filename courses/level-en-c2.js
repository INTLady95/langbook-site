/* English C2 — level config + 30-day plan (COURSE) + weekly exams (EXAMS).
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'C2',
  course:'en-c2',
  pkey:'langbook-c2-progress',
  preview:true,
  finalNote:'Это твоя победа 💛 Полный уровень English C2 — позади. Дальше — свободное владение: практика, чтение и живой разговор. Горжусь тобой!'
};

const COURSE = [
  {wn:"01", wt:"Порядок слов как риторика (маркированный синтаксис и информационная структура)", days:[
    {n:1,t:"Драматичная инверсия",p:"инверсия после отрицательных/ограничительных наречий: Never…"},
    {n:2,t:"Если бы… без if / Were I, Had I, So…",p:"инверсия в условных без if."},
    {n:3,t:"Это именно он / it-cleft",p:"расщепление it-cleft: It was John (that/who)… / It is here that…"},
    {n:4,t:"То, что мне нужно / wh-cleft",p:"псевдорасщепление: What I need is…, All I want is…, The thing…"},
    {n:5,t:"Вынос и вес в конце",p:"фронтинг дополнения/обстоятельства для связности + принцип…"},
    {n:6,t:"Эмфаза: do и усиление",p:"эмфатическое do (I DID tell you), эмфатические повторы, the…"},
    {n:7,t:"🔄 Повторение №1",p:"повторение + тест."}
  ]},
  {wn:"02", wt:"Наклонение, модальность, гипотетичность (тонкая настройка смысла)", days:[
    {n:8,t:"Сослагательное в требованиях",p:"mandative subjunctive: I insist that he be…, It is essential…"},
    {n:9,t:"Застывшее сослагательное",p:"формульное сослагательное: be that as it may, come what may…"},
    {n:10,t:"Если бы только… / сожаление",p:"сверхудалённость и сожаление: wish + past perfect, if only……"},
    {n:11,t:"Смешанные условия",p:"смешанные условные через время: If I had studied (прошлое), I…"},
    {n:12,t:"Оттенки вероятности",p:"эпистемическая модальность и калибровка уверенности: may well…"},
    {n:13,t:"Смягчение и усиление",p:"хеджи и бустеры, степень приверженности: tend to, would seem…"},
    {n:14,t:"🔄 Повторение №2",p:"повторение + тест."}
  ]},
  {wn:"03", wt:"Точность слова, регистр, связность текста", days:[
    {n:15,t:"Синонимы и коннотация",p:"различение near-synonyms и semantic prosody…"},
    {n:16,t:"Коллокации и делексика",p:"коллокационная точность и делексические глаголы…"},
    {n:17,t:"Зависимые предлоги",p:"управление на родном уровне: oblivious to, averse to…"},
    {n:18,t:"Номинализация и сложные NP",p:"именной стиль и сложные именные группы: the failure to comply…"},
    {n:19,t:"Эллипсис и замена",p:"эллипсис, субституция, экономия: so/not."},
    {n:20,t:"Континуум регистра",p:"владение регистром: академический/юридический/литературный/раз…"},
    {n:21,t:"🔄 Повторение №3",p:"повторение + тест."}
  ]},
  {wn:"04", wt:"Прагматика, образность, финальная огранка (звучать как носитель)", days:[
    {n:22,t:"Импликатура и вежливость",p:"прагматика, импликатура, «лицо»: косвенность, максимы Грайса…"},
    {n:23,t:"Идиома и метафора",p:"идиоматика и концептуальная метафора: непрозрачные идиомы…"},
    {n:24,t:"Ирония и преуменьшение",p:"ирония, litotes, understatement: not bad at all, I can't say…"},
    {n:25,t:"Пословицы и аллюзии",p:"пословицы, аллюзии, культурный код: the proof of the pudding……"},
    {n:26,t:"Пунктуация как стиль",p:"продвинутая пунктуация как голос: точка с запятой vs…"},
    {n:27,t:"Артикль и вид: нюансы",p:"тонкая грань артикля/детерминатива и вида: нулевой vs the с…"},
    {n:28,t:"Снятие окаменелостей",p:"расфоссилизация near-native ошибок: ложные друзья на…"},
    {n:29,t:"Голос и стиль",p:"синтез: голос, тон-сдвиг, риторическая беглость."},
    {n:30,t:"🏆 Мастер-текст",p:"финальный проект."}
  ]}
];

/* ===== weekly checkpoint exams (content) ===== */
const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя C2 — самая «архитектурная»: мы учились двигать слова так, чтобы синтаксис сам становился риторикой. Проверю всё подробно — драматичную инверсию (Never have I…, Not only… but also…, Hardly… when…, No sooner… than…, Only then did I…, Under no circumstances…, Little did I know…), инверсию в условных без if (Were I…, Had I…, Should you…) и эмфатическую (So fierce was the storm that…, Into the room walked…), расщепление it-cleft (It was John who…) и wh-cleft (What I need is…, All I want is…), вынос темы вперёд с принципом конечного веса (This I cannot accept) и эмфатическое do (I did tell you). Заданий стало больше — под проверку попал каждый приём всех шести дней. Набери 80% — открою Неделю 2. 💛",
    "review": [
      "Инверсия после отрицательных/ограничительных наречий: <b>Never have I…</b>, <b>Not only did she…</b>, <b>Hardly had I… when…</b>, <b>No sooner… than…</b>, <b>Under no circumstances…</b>, <b>Little did I know…</b>",
      "Условие без <b>if</b>: <b>Were I you…</b>, <b>Had I known…</b>, <b>Should you need…</b>",
      "<b>So</b> + прил. + инверсия: <b>So loud was the noise that…</b>; локативная: <b>Into the room walked…</b>",
      "It-cleft — фокус на одном звене: <b>It was John who/that…</b>, <b>It was not until… that…</b>",
      "Wh-cleft (псевдорасщепление): <b>What I need is…</b>, <b>All I want is…</b>, <b>The thing is…</b>",
      "Вынос темы вперёд (топикализация) без инверсии: <b>This I cannot accept</b>; принцип конечного веса и экстрапозиция: <b>It surprised me that…</b> вместо тяжёлого подлежащего",
      "Эмфатическое <b>do</b>: I <b>did</b> tell you; усилитель <b>the very</b>; фокусные наречия <b>even, only, especially</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Never ___ such a breathtaking view as the one from that summit.",
        "opts": [
          "I have seen",
          "have I seen",
          "I had seen",
          "saw I"
        ],
        "answer": "have I seen",
        "why": "После начального Never включается инверсия: вспомогательный (have) встаёт ПЕРЕД подлежащим — как в вопросе. Never have I seen… ✨",
        "hint": "Отрицательное наречие в начале фразы переворачивает порядок: сначала вспомогательный глагол, потом «I» — представь, как звучит вопрос."
      },
      {
        "type": "choice",
        "q": "Not only ___ the deadline, but he also exceeded every target.",
        "opts": [
          "he met",
          "did he meet",
          "he did meet",
          "met he"
        ],
        "answer": "did he meet",
        "why": "Not only в начале требует инверсии: вспомогательный do/did + подлежащее + смысловой глагол в базовой форме. Not only did he meet…",
        "hint": "После «Not only» в начале нужен «вопросительный» порядок, а раз своего вспомогательного у глагола нет, его роль берёт на себя did."
      },
      {
        "type": "choice",
        "q": "Hardly ___ the door when the phone began to ring.",
        "opts": [
          "I had closed",
          "had I closed",
          "I closed",
          "did I close"
        ],
        "answer": "had I closed",
        "why": "Hardly … when = «едва … как» в прошлом: Past Perfect с инверсией. Hardly had I closed … when…",
        "hint": "Связка Hardly … when требует Past Perfect, а наречие в начале переворачивает had и подлежащее. ⏳"
      },
      {
        "type": "choice",
        "q": "___ I known you were coming, I would have baked a cake.",
        "opts": [
          "Had",
          "If",
          "Have",
          "Would"
        ],
        "answer": "Had",
        "why": "Условие без if строится инверсией: Had I known = If I had known. Вспомогательный had уходит вперёд.",
        "hint": "Это третий тип условия, но без «if»: на место союза встаёт вспомогательный глагол прошедшего совершенного."
      },
      {
        "type": "choice",
        "q": "So ___ that the whole audience fell silent.",
        "opts": [
          "moving was her speech",
          "her speech was moving",
          "was moving her speech",
          "moving her speech was"
        ],
        "answer": "moving was her speech",
        "why": "Конструкция So + прилагательное + инверсия: So moving was her speech that… Качество выносится вперёд, за ним was + подлежащее.",
        "hint": "После So идёт само качество (прилагательное), а затем перевёрнутый порядок: was + подлежащее. 🎭"
      },
      {
        "type": "choice",
        "q": "___ struck me most was how calm she remained.",
        "opts": [
          "What",
          "That",
          "Which",
          "The thing what"
        ],
        "answer": "What",
        "why": "Псевдорасщепление открывается словом What (= the thing that): What struck me most was… «That»/«which» так фразу не начинают.",
        "hint": "Псевдорасщепление открывается одним словом, которое значит «то, что». 🙂"
      },
      {
        "type": "gap",
        "q": "Only then ___ I realise how much the trip had changed me. <i style=\"opacity:.6\">(do — эмфатическая инверсия)</i>",
        "accept": [
          "did"
        ],
        "model": "did",
        "why": "Ограничительное Only then в начале запускает инверсию: did + подлежащее + базовый глагол. Only then did I realise…",
        "hint": "После «Only then» нужен «вопросительный» порядок; глагол стоит в прошлом, значит впереди — его вспомогательный."
      },
      {
        "type": "gap",
        "q": "No sooner had the train left the platform ___ she remembered her suitcase. <i style=\"opacity:.6\">(чем)</i>",
        "accept": [
          "than"
        ],
        "model": "than",
        "why": "Связка No sooner … than (не «when»!): «не успел …, как …» = No sooner had X than Y. Частая ловушка.",
        "hint": "Хитрая пара: No sooner идёт не с «when», а со словом сравнения — тем же, что после «sooner» по логике «раньше … чем». ⚠️"
      },
      {
        "type": "gap",
        "q": "I realise it sounds unlikely, but I ___ you about exactly this. <i style=\"opacity:.6\">(warn — эмфатическое do, прошлое)</i>",
        "accept": [
          "did warn"
        ],
        "model": "did warn",
        "why": "Эмфатическое do подчёркивает истинность: I did warn you = «я ведь предупреждал». В прошлом — did + базовая форма.",
        "hint": "Чтобы усилить «я ведь правда предупреждал», перед глаголом ставят ударное вспомогательное в прошедшем, а сам глагол — в начальной форме."
      },
      {
        "type": "trRE",
        "ru": "Только когда она ушла, я понял, как сильно по ней скучаю.",
        "accept": [
          "only when she left did i realise how much i miss her",
          "only when she left did i realize how much i miss her",
          "only when she had left did i realise how much i miss her",
          "only when she had left did i realize how much i miss her",
          "only when she had left did i realise how much i missed her",
          "only when she had left did i realize how much i missed her",
          "only when she left did i realise how much i missed her",
          "only when she left did i realize how much i missed her"
        ],
        "model": "Only when she left did I realise how much I missed her.",
        "hint": "Начни с «Only when …», а в главной части включи инверсию: did + I + глагол в базовой форме. 💔"
      },
      {
        "type": "trRE",
        "ru": "Будь я на твоём месте, я бы не спорил.",
        "accept": [
          "were i in your place i wouldnt argue",
          "were i in your place i would not argue",
          "were i you i wouldnt argue",
          "were i you i would not argue",
          "were i in your shoes i wouldnt argue",
          "were i in your shoes i would not argue"
        ],
        "model": "Were I in your place, I wouldn't argue.",
        "hint": "Условие без «if»: начни с перевёрнутого «Were I …», а во второй части — would + базовый глагол."
      },
      {
        "type": "trER",
        "en": "It was not until midnight that he finally called.",
        "accept": [
          "только в полночь он наконец позвонил",
          "он позвонил только в полночь",
          "лишь в полночь он наконец позвонил",
          "только к полуночи он наконец позвонил",
          "только в полночь он наконец-то позвонил",
          "и только в полночь он наконец позвонил"
        ],
        "model": "Только в полночь он наконец позвонил.",
        "hint": "Оборот It was not until X that … = «только в X (и не раньше) …». Передай этот фокус словом «только». 🌙"
      },
      {
        "type": "order",
        "answer": "into the room walked a tall stranger",
        "accept": [
          "into the room walked a tall stranger",
          "into the room there walked a tall stranger"
        ],
        "hintRu": "Скажи по-английски: «В комнату вошёл высокий незнакомец» (с выносом обстоятельства вперёд).",
        "hint": "Локативная инверсия: сначала обстоятельство места (Into the room), затем глагол, и только потом подлежащее. 🚪"
      },
      {
        "type": "match",
        "q": "Соедини русский эмфатический зачин с английским наречием/связкой, которые запускают инверсию.",
        "pairs": [
          [
            "Едва…, как",
            "Hardly … when"
          ],
          [
            "Не успел…, как",
            "No sooner … than"
          ],
          [
            "Только тогда",
            "Only then"
          ],
          [
            "Ни разу не",
            "Never"
          ],
          [
            "Мало того что",
            "Not only"
          ]
        ],
        "hint": "Все эти зачины в английском требуют перевёрнутого порядка — подбери английский эквивалент по смыслу. 🙂"
      },
      {
        "type": "choice",
        "q": "___ surprised everyone that she resigned so abruptly.",
        "opts": [
          "It",
          "That",
          "What",
          "There"
        ],
        "answer": "It",
        "why": "Тяжёлое подлежащее-придаточное уходит в конец, а на его место встаёт формальное it — экстрапозиция: It surprised everyone that… «That/What/There» так фразу не строят.",
        "hint": "Не ставь «то, что…» в начало: спереди — формальное it, груз (that-придаточное) — в конец. 🪤"
      },
      {
        "type": "choice",
        "q": "___ his relentless curiosity, not his talent, that made him a great scientist.",
        "opts": [
          "It was",
          "There was",
          "That was",
          "What was"
        ],
        "answer": "It was",
        "why": "It-cleft фокусирует одно звено: It was X (that/who)… — вперёд выносится то, на что падает акцент. «There/That/What was» так расщепление не открывают.",
        "hint": "Расщепление с фокусом на «именно это» открывается формальным подлежащим it + was. 🔍"
      },
      {
        "type": "choice",
        "q": "That clause, whatever the pressure, ___ accept.",
        "opts": [
          "I simply cannot",
          "cannot I",
          "can I simply not",
          "simply cannot I"
        ],
        "answer": "I simply cannot",
        "why": "Вынос дополнения вперёд (топикализация) НЕ переворачивает подлежащее: That clause I simply cannot accept. Инверсия нужна только после вынесенного отрицания, а не дополнения.",
        "hint": "Вперёд вынесено дополнение, а не отрицание — значит порядок «подлежащее + глагол» сохраняется, без переворота."
      },
      {
        "type": "choice",
        "q": "Under no circumstances ___ the door to strangers.",
        "opts": [
          "you should open",
          "should you open",
          "you open",
          "do you should open"
        ],
        "answer": "should you open",
        "why": "«Under no circumstances» — ограничительно-отрицательный зачин, он запускает инверсию: модальный should встаёт перед подлежащим. Under no circumstances should you…",
        "hint": "После «Under no circumstances» в начале идёт «вопросительный» порядок: модальный впереди подлежащего. 🚫"
      },
      {
        "type": "gap",
        "q": "Little ___ she know that her decision would echo for years. <i style=\"opacity:.6\">(do — инверсия)</i>",
        "accept": [
          "did"
        ],
        "model": "did",
        "why": "«Little» в начале — отрицательное по смыслу наречие, оно требует инверсии: did + подлежащее + базовый глагол. Little did she know…",
        "hint": "«Little» здесь значит «совсем не» и ведёт себя как отрицание: после него — «вопросительный» порядок, глагол в прошлом. 🕰️"
      },
      {
        "type": "trRE",
        "ru": "Всё, чего я хочу, — это спокойно закончить работу.",
        "accept": [
          "all i want is to finish the work in peace",
          "all i want is to finish my work in peace",
          "all i want is to finish the job in peace",
          "all i want is to get the work done in peace",
          "all i want is to finish the work quietly",
          "all i want is to finish the work undisturbed"
        ],
        "model": "All I want is to finish the work in peace.",
        "hint": "Зачин-псевдорасщепление «Всё, чего я хочу…» = All I want is + инфинитив. 🕊️"
      },
      {
        "type": "trER",
        "en": "I did lock the door — I distinctly remember doing it.",
        "accept": [
          "я точно закрыл дверь я отчётливо помню как делал это",
          "я ведь закрыл дверь я чётко помню как это делал",
          "дверь-то я закрыл я отчётливо помню это",
          "я действительно закрыл дверь я ясно помню что делал это",
          "я же закрыл дверь я отчётливо помню как запирал её",
          "я всё-таки закрыл дверь я отчётливо помню это"
        ],
        "model": "Я ведь закрыл дверь — я отчётливо помню, как запирал её.",
        "hint": "Эмфатическое did подчёркивает истинность действия — по-русски передай это через «ведь / точно / всё-таки». 🔑"
      },
      {
        "type": "order",
        "answer": "so fierce was the storm that we stayed indoors",
        "accept": [
          "so fierce was the storm that we stayed indoors"
        ],
        "hintRu": "Скажи по-английски: «Настолько яростным был шторм, что мы остались дома».",
        "hint": "Эмфатическая инверсия с So: сначала So + прилагательное, затем was + подлежащее, потом that… ⛈️"
      },
      {
        "type": "match",
        "q": "Соедини русский эмфатический зачин с английской конструкцией расщепления.",
        "pairs": [
          [
            "Именно она…",
            "It was she who…"
          ],
          [
            "Что мне нужно, так это…",
            "What I need is…"
          ],
          [
            "Всё, чего я хочу…",
            "All I want is…"
          ],
          [
            "Дело в том, что…",
            "The thing is…"
          ],
          [
            "Причина в том, что…",
            "The reason is…"
          ]
        ],
        "hint": "Раздели it-cleft (фокус на одном звене) и wh-cleft (что/всё/дело/причина) по смыслу зачина. 🔍"
      },
      {
        "type": "describe",
        "img": "img/c2/day-03.jpg",
        "prompt": "Опиши этот кадр как начало рассказа. Вплети минимум одно расщепление (It was … that…, What struck me was…) и одну инверсию (Never…, Only then…). 3–4 предложения.",
        "keywords": [
          "it",
          "what",
          "never",
          "only",
          "hardly",
          "so",
          "were",
          "into",
          "not",
          "there"
        ],
        "minWords": 25,
        "model": "It was the stillness that struck me first — never had a room felt so watchful. What I noticed next was the light, pooling on the floor like something spilt. Only then did I see the figure by the window, and not until it moved did I dare to breathe.",
        "hint": "Начни с расщепления («It was … that…»), а напряжение подними инверсией («Never had…», «Only then did…»). ✍️"
      },
      {
        "type": "describe",
        "img": "img/c2/day-05.jpg",
        "prompt": "Опиши сцену как художественный абзац. Используй хотя бы одну инверсию или расщепление (Never have I…, It was … that…, Into the room…). 3–4 предложения.",
        "keywords": [
          "never",
          "only",
          "what",
          "into",
          "there",
          "not",
          "hardly",
          "so",
          "were",
          "it"
        ],
        "minWords": 25,
        "model": "Never have I seen a place so still. It was the light, slanting through the window, that gave the room its calm. Into the silence drifted the distant hum of the street, and only then did the figure by the table look up.",
        "hint": "Начни с эффектной инверсии («Never have I…») и вставь хотя бы одно расщепление («It was … that…») — пусть синтаксис работает на образ. ✍️"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя была про тонкую настройку смысла — наклонение, модальность, гипотетичность. Проверю подробно: сослагательное в требованиях и его отрицание (I insist that he be…, the court ordered that he not leave…), застывшие формулы (be that as it may, come what may, so be it, had it not been for…), сверхудалённые желания и сожаление (wish + past perfect, if only…, it's high time you went, I'd rather you didn't…), смешанные условные через время (в том числе с инверсией Had I…), эпистемическую модальность (may well, must have, ought to have) и хеджи/бустеры (would seem, arguably ↔ undeniably, demonstrably). Заданий стало больше — под проверку попал каждый день недели. 80% — и откроется Неделя 3. ✨",
    "review": [
      "Сослагательное в требованиях: insist/demand/recommend/suggest <b>that + базовая форма</b> (he <b>be</b>, she <b>go</b>); отрицание — <b>that she not miss</b>",
      "Застывшие формулы: <b>be that as it may</b>, <b>come what may</b>, <b>so be it</b>, <b>were it not for</b> / <b>had it not been for</b>, <b>far be it from me</b>",
      "Сожаление и сверхудалённость: <b>wish + had done</b>, <b>if only…</b>, <b>it's high time you went</b>, <b>I'd rather you didn't…</b>",
      "Смешанные условные через время: <b>If I had studied… I would be…</b> (прошлое → настоящее) и наоборот; с инверсией — <b>Had I…, I would be…</b>",
      "Эпистемическая калибровка: <b>may well</b>, <b>might just</b>, <b>must surely</b>, <b>must have done</b>, <b>ought to have done</b>",
      "Хеджи ↔ бустеры: <b>would seem, tend to, arguably</b> ↔ <b>clearly, undeniably, beyond doubt</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "The committee insists that every member ___ present at the vote.",
        "opts": [
          "is",
          "be",
          "should is",
          "were"
        ],
        "answer": "be",
        "why": "После глаголов требования (insist, demand, recommend) идёт mandative subjunctive — базовая форма без -s: that he be, that she go. «is» здесь неверно.",
        "hint": "Сослагательное в требованиях ставит глагол в чистую базовую форму для любого лица — даже после he/she/it нет -s."
      },
      {
        "type": "choice",
        "q": "It is essential that she ___ the deadline under any circumstances.",
        "opts": [
          "not to miss",
          "not miss",
          "not misses",
          "mustn't miss"
        ],
        "answer": "not miss",
        "why": "Mandative subjunctive в отрицании: that she not miss (без do). Это формальный регистр требования.",
        "hint": "В сослагательном требовании отрицание строится без «do»: просто not + базовая форма."
      },
      {
        "type": "choice",
        "q": "I wish I ___ harder for that exam — I failed it.",
        "opts": [
          "studied",
          "had studied",
          "would study",
          "have studied"
        ],
        "answer": "had studied",
        "why": "Сожаление о прошлом: wish + Past Perfect. I wish I had studied = жаль, что не занимался. Past Simple дал бы сожаление о настоящем.",
        "hint": "Сожаление именно о прошлом действии требует после wish форму «had + 3-я форма». 😔"
      },
      {
        "type": "choice",
        "q": "It's high time you ___ a decision about your future.",
        "opts": [
          "make",
          "made",
          "have made",
          "will make"
        ],
        "answer": "made",
        "why": "После it's (high) time идёт Past Simple с настоящим/будущим смыслом: it's high time you made… Удалённое сослагательное.",
        "hint": "После «it's high time» глагол стоит в прошедшей форме, хотя речь о «пора уже сейчас»."
      },
      {
        "type": "choice",
        "q": "If I ___ that job last year, I would be living in Berlin now.",
        "opts": [
          "had taken",
          "took",
          "take",
          "would take"
        ],
        "answer": "had taken",
        "why": "Смешанное условие: условие в прошлом (Past Perfect), результат в настоящем (would + base). If I had taken … I would be living now.",
        "hint": "Условие относится к прошлому, а результат — к «сейчас»; для прошлого после if нужен Past Perfect."
      },
      {
        "type": "choice",
        "q": "She knows this city inside out, so she ___ well know a shortcut.",
        "opts": [
          "may",
          "can",
          "must have",
          "shall"
        ],
        "answer": "may",
        "why": "may well = «вполне может» — высокая, но не полная уверенность в предположении. Эпистемическая модальность.",
        "hint": "Нужна форма уверенного предположения «вполне может»; усилитель «well» дружит именно с этим модальным."
      },
      {
        "type": "gap",
        "q": "The lights are off; they ___ to have gone to bed by now. <i style=\"opacity:.6\">(ought — вывод о прошлом)</i>",
        "accept": [
          "ought"
        ],
        "model": "ought",
        "why": "ought to have + 3-я форма = логичный вывод о прошлом: «должно быть, уже легли». Эпистемическое ought.",
        "hint": "Модальный вывод «должно быть, уже …» строится формой ought, за которой идёт «to have + 3-я форма»."
      },
      {
        "type": "gap",
        "q": "I'll stand by you, come ___ may. <i style=\"opacity:.6\">(что бы ни случилось)</i>",
        "accept": [
          "what"
        ],
        "model": "what",
        "why": "Застывшая формула come what may = «будь что будет / что бы ни случилось». Слова и порядок фиксированы.",
        "hint": "Идиоматическая формула «будь что будет»: come ___ may — пропущено вопросительное слово «что». 🤝"
      },
      {
        "type": "gap",
        "q": "The data ___ seem to support the hypothesis, though more research is needed. <i style=\"opacity:.6\">(would — хедж)</i>",
        "accept": [
          "would"
        ],
        "model": "would",
        "why": "would seem — осторожный хедж: «по-видимому». Снижает категоричность утверждения.",
        "hint": "Чтобы смягчить «кажется» до осторожного «по-видимому», перед seem ставят модальный would."
      },
      {
        "type": "trRE",
        "ru": "Я настаиваю, чтобы он извинился.",
        "accept": [
          "i insist that he apologise",
          "i insist that he apologize",
          "i insist he apologise",
          "i insist he apologize",
          "i insist that he should apologise",
          "i insist that he should apologize"
        ],
        "model": "I insist that he apologise.",
        "hint": "Глагол требования + that + подлежащее + базовая форма (без -s). Допустим и вариант с should."
      },
      {
        "type": "trRE",
        "ru": "Если бы я был осторожнее, я бы не потерял ключи.",
        "accept": [
          "if i were more careful i wouldnt have lost my keys",
          "if i were more careful i would not have lost my keys",
          "were i more careful i wouldnt have lost my keys",
          "if i had been more careful i wouldnt have lost my keys",
          "if i had been more careful i would not have lost my keys",
          "had i been more careful i wouldnt have lost my keys"
        ],
        "model": "If I were more careful, I wouldn't have lost my keys.",
        "hint": "Смешанное условие: общее свойство «сейчас» (were) + результат в прошлом (would have + 3-я форма). 🔑"
      },
      {
        "type": "trER",
        "en": "Be that as it may, the decision stands.",
        "accept": [
          "как бы то ни было решение остаётся в силе",
          "как бы там ни было решение остаётся в силе",
          "как бы то ни было решение остается в силе",
          "как бы то ни было это решение остаётся в силе",
          "как бы то ни было решение остаётся неизменным"
        ],
        "model": "Как бы то ни было, решение остаётся в силе.",
        "hint": "Be that as it may — устойчивый зачин «как бы то ни было»; дальше идёт основная мысль."
      },
      {
        "type": "order",
        "answer": "if only i had listened to your advice",
        "accept": [
          "if only i had listened to your advice",
          "if only i had listened to you"
        ],
        "hintRu": "Скажи по-английски: «Если бы только я послушал твой совет» (сожаление о прошлом).",
        "hint": "Зачин сожаления «Если бы только …» = If only, а сожаление о прошлом требует «had + 3-я форма». 😔"
      },
      {
        "type": "match",
        "q": "Соедини английский модальный оборот со степенью уверенности по-русски.",
        "pairs": [
          [
            "may well",
            "вполне может"
          ],
          [
            "might just",
            "чего доброго / а вдруг"
          ],
          [
            "must surely",
            "наверняка"
          ],
          [
            "could conceivably",
            "теоретически мог бы"
          ],
          [
            "ought to have",
            "должно быть, уже"
          ]
        ],
        "hint": "Калибруем уверенность — от осторожного предположения к почти твёрдому выводу. 🎚️"
      },
      {
        "type": "choice",
        "q": "The court ordered that the defendant ___ the country pending trial.",
        "opts": [
          "not leave",
          "not leaves",
          "not left",
          "not to leave"
        ],
        "answer": "not leave",
        "why": "Сослагательное требования в отрицании: that + подлежащее + not + голая база, без do и без «to»: ordered that the defendant not leave.",
        "hint": "Отрицательное сослагательное строится без «do» и без «to»: просто not + базовая форма. ⚖️"
      },
      {
        "type": "choice",
        "q": "___ your timely warning, we would have walked straight into the trap.",
        "opts": [
          "Had it not been for",
          "If it wouldn't be for",
          "Weren't it for",
          "Have it not been for"
        ],
        "answer": "Had it not been for",
        "why": "Застывшая инверсия «если бы не»: Had it not been for X = If it had not been for X. Форма фиксирована — никакого would в условии.",
        "hint": "«Если бы не…» в книжном стиле — это перевёрнутое условие с had: Had it not been for… 🙏"
      },
      {
        "type": "choice",
        "q": "___ I listened to my mentor back then, I would be far better off today.",
        "opts": [
          "Had",
          "Have",
          "If had",
          "Would"
        ],
        "answer": "Had",
        "why": "Смешанное условие с инверсией: Had I listened (прошлое, вместо If I had listened) → I would be… (результат сейчас). Условие в прошлом, следствие в настоящем.",
        "hint": "Условие без «if» плюс смешение времён: перевёрнутое «Had I …» о прошлом, а результат — про «сегодня». ⏳"
      },
      {
        "type": "choice",
        "q": "The office is spotless and the files are gone — someone ___ tidied up overnight.",
        "opts": [
          "must have",
          "can't have",
          "might not have",
          "shouldn't have"
        ],
        "answer": "must have",
        "why": "Эпистемическое must have + 3-я форма = уверенный вывод о прошлом по уликам: «должно быть, убрали». can't have дал бы противоположный вывод, а shouldn't have — упрёк.",
        "hint": "Улики налицо — нужен уверенный вывод о прошлом «должно быть, …»: must + have + 3-я форма. 🔎"
      },
      {
        "type": "gap",
        "q": "The evidence is ___ conclusive; no serious scholar disputes it now. <i style=\"opacity:.6\">(бустер = «неоспоримо»)</i>",
        "accept": [
          "undeniably",
          "incontrovertibly",
          "indisputably",
          "unquestionably",
          "demonstrably"
        ],
        "model": "undeniably",
        "why": "Бустер усиливает приверженность утверждению: undeniably/incontrovertibly conclusive = «неоспоримо». Это противоположность хеджам вроде would seem.",
        "hint": "Нужен усилитель уверенности «неоспоримо / бесспорно» перед conclusive — бустер, а не смягчитель. 💪"
      },
      {
        "type": "trRE",
        "ru": "Я бы предпочёл, чтобы ты пока никому не рассказывал.",
        "accept": [
          "id rather you didnt tell anyone yet",
          "i would rather you didnt tell anyone yet",
          "id rather you did not tell anyone yet",
          "id rather you told no one yet",
          "i would rather you told no one for now",
          "id rather you didnt tell anybody yet",
          "id rather you didnt tell anyone for now"
        ],
        "model": "I'd rather you didn't tell anyone yet.",
        "hint": "«Я бы предпочёл, чтобы ты…» о другом человеке требует после would rather прошедшую форму: I'd rather you didn't… 🤫"
      },
      {
        "type": "trER",
        "en": "So be it — if they refuse to compromise, we walk away.",
        "accept": [
          "что ж пусть так если они отказываются идти на компромисс мы уходим",
          "пусть так если они не готовы к компромиссу мы уходим",
          "да будет так если они откажутся от компромисса мы уходим",
          "ну что ж если они не хотят компромисса мы уйдём",
          "пусть будет так если они не пойдут на компромисс мы уходим"
        ],
        "model": "Что ж, пусть так — если они отказываются идти на компромисс, мы уходим.",
        "hint": "Застывшая формула «So be it» = «пусть так / да будет так»; передай эту интонацию принятия. 🤷"
      },
      {
        "type": "order",
        "answer": "she may well have missed the last train",
        "accept": [
          "she may well have missed the last train"
        ],
        "hintRu": "Скажи по-английски: «Она вполне могла опоздать на последний поезд».",
        "hint": "Осторожный вывод о прошлом «вполне могла»: may well + have + 3-я форма. 🚆"
      },
      {
        "type": "match",
        "q": "Соедини английский маркер приверженности с точным русским переводом.",
        "pairs": [
          [
            "tend to",
            "склонен, обычно"
          ],
          [
            "arguably",
            "пожалуй, можно утверждать"
          ],
          [
            "would seem",
            "по-видимому"
          ],
          [
            "undeniably",
            "неоспоримо"
          ],
          [
            "demonstrably",
            "доказуемо"
          ]
        ],
        "hint": "Переведи каждый маркер точно: смягчители (tend to, would seem, arguably) и бустеры (undeniably, demonstrably). 🎚️"
      },
      {
        "type": "describe",
        "img": "img/c2/day-11.jpg",
        "prompt": "Вообрази, что человек на снимке о чём-то жалеет. Опиши сцену, используя сослагательное и сожаление (I wish…, if only…, would rather, it's high time) и хотя бы один смешанный кондиционал. 4–5 предложений.",
        "keywords": [
          "wish",
          "only",
          "would",
          "had",
          "were",
          "rather",
          "time",
          "should",
          "might",
          "have"
        ],
        "minWords": 25,
        "model": "You can almost hear him thinking that if only he had spoken sooner, everything would be different now. I suspect he wishes he had taken the other path — had he done so, he might be somewhere warmer tonight. It's high time he forgave himself, though. If I were him, I would rather look forward than back.",
        "hint": "Смешивай сожаление и гипотезу: «if only he had…», «he wishes…», «had he done so, he might be…». 😔"
      },
      {
        "type": "describe",
        "img": "img/c2/day-12.jpg",
        "prompt": "Что, по-твоему, происходит на снимке? Стройся осторожно: используй эпистемическую модальность и хеджи (may well, might, must surely, would seem, presumably). 3–4 предложения, без категоричности.",
        "keywords": [
          "may",
          "might",
          "must",
          "would",
          "seem",
          "presumably",
          "could",
          "perhaps",
          "likely",
          "ought"
        ],
        "minWords": 25,
        "model": "Judging by the light, it would seem to be early morning. The figure may well be waiting for someone, though it is hard to say. He must surely be cold, and presumably he has been standing there for quite a while.",
        "hint": "Каждое предложение калибруй по уверенности: would seem (осторожно) → may well → must surely (твёрже). Не утверждай прямо. 🌫️"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя — про ювелирную точность слова, регистр и связность. Проверю подробно: коннотацию и семантическую просодию (renowned ≠ notorious, bring about ≠ perpetrate, commit a crime), коллокации и делексические глаголы (do research, deep sleep, heavy rain, bitterly disappointed), зависимые предлоги (averse to, oblivious to, contingent on, conducive to, devoid of), номинализацию (the failure to comply, the government's handling of…), эллипсис и субституцию (I'm afraid not, do so, few if any) и владение регистром (ascertain ↔ find out, notwithstanding). Каждый из шести дней теперь под проверкой. Набери 80% — и Неделя 4, финишная, твоя. 💛",
    "review": [
      "Коннотация и семантическая просодия: <b>renowned</b> (+) ≠ <b>notorious</b> (−); <b>resolute</b> (+) ≠ <b>obstinate</b> (−); <b>bring about</b> ≠ <b>perpetrate</b>; <b>commit</b> a crime",
      "Коллокации: <b>do</b> research · <b>make</b> a decision · <b>deep</b> sleep · <b>heavy</b> rain · <b>bitterly</b> disappointed · <b>considerable</b> damage",
      "Зависимые предлоги: <b>averse to</b>, <b>oblivious to</b>, <b>contingent on</b>, <b>devoid of</b>, <b>conducive to</b>",
      "Номинализация: <b>the failure to comply</b>, <b>the government's handling of the crisis</b>, <b>such a move</b>",
      "Эллипсис и субституция: <b>I'm afraid not</b>, <b>I think so</b>, <b>do so</b>, <b>one(s)</b>, <b>if any</b>",
      "Регистр: латинизм ↔ фразовый (<b>ascertain</b> ↔ <b>find out</b>, <b>commence</b> ↔ <b>begin</b>, <b>notwithstanding</b> ↔ <b>in spite of</b>); именной ↔ глагольный стиль"
    ],
    "q": [
      {
        "type": "choice",
        "q": "The region is ___ for its world-class vineyards.",
        "opts": [
          "renowned",
          "notorious",
          "infamous",
          "guilty"
        ],
        "answer": "renowned",
        "why": "renowned — положительная окраска («знаменит чем-то хорошим»). notorious/infamous несут негативную семантическую просодию. Для виноделен нужен renowned.",
        "hint": "Слава бывает доброй и дурной: для похвалы виноградникам выбери слово с положительной окраской, а не «печально известный». 🍇"
      },
      {
        "type": "choice",
        "q": "Investigators believe the same gang ___ the robbery.",
        "opts": [
          "committed",
          "made",
          "did",
          "performed"
        ],
        "answer": "committed",
        "why": "commit collocates с преступлением: commit a crime/robbery. make/do/perform a robbery — неверная сочетаемость.",
        "hint": "Для преступления есть свой глагол сочетаемости — тот же, что в «commit a crime»."
      },
      {
        "type": "choice",
        "q": "Before deciding, let's ___ some research into the alternatives.",
        "opts": [
          "do",
          "make",
          "take",
          "give"
        ],
        "answer": "do",
        "why": "do research — фиксированная коллокация (как do homework, do business). «make research» — типичная ошибка.",
        "hint": "С «research» дружит делексический глагол do, а не make — вспомни do homework. 🔬"
      },
      {
        "type": "choice",
        "q": "After the hike we both fell into a ___ sleep.",
        "opts": [
          "deep",
          "strong",
          "heavy",
          "hard"
        ],
        "answer": "deep",
        "why": "deep sleep — устойчивая коллокация. heavy rain, strong coffee, deep sleep — у каждого свой усилитель.",
        "hint": "У сна свой прилагательный-усилитель: не «strong» и не «heavy», а тот, что значит «глубокий». 😴"
      },
      {
        "type": "choice",
        "q": "Many investors are averse ___ unnecessary risk.",
        "opts": [
          "to",
          "of",
          "from",
          "against"
        ],
        "answer": "to",
        "why": "averse to — фиксированное управление. Калька «averse of/from» — ошибка.",
        "hint": "Прилагательное averse требует предлога «to», как и его сосед «opposed to»."
      },
      {
        "type": "choice",
        "q": "— Will the talks resume next week? — I'm afraid ___ .",
        "opts": [
          "not",
          "no",
          "don't",
          "it isn't"
        ],
        "answer": "not",
        "why": "Субституция целого придаточного: I'm afraid not = «боюсь, что нет». I hope so / I think not — тот же приём экономии.",
        "hint": "Чтобы не повторять всё придаточное, после «I'm afraid» ставят одно слово-заместитель отрицания — пару к «so»."
      },
      {
        "type": "gap",
        "q": "Absorbed in his book, he was completely oblivious ___ the chaos around him. <i style=\"opacity:.6\">(предлог)</i>",
        "accept": [
          "to",
          "of"
        ],
        "model": "to",
        "why": "oblivious to = «не замечающий чего-то». Управление предлогом to (в современном узусе предпочтительнее «of»).",
        "hint": "«Не замечающий чего-то» — oblivious требует того же предлога, что и «blind to»."
      },
      {
        "type": "gap",
        "q": "If you wish to cancel the subscription, you may ___ so at any time. <i style=\"opacity:.6\">(глагол-заместитель)</i>",
        "accept": [
          "do"
        ],
        "model": "do",
        "why": "do so заменяет ранее названное действие (cancel the subscription) в формальном регистре — экономия и связность.",
        "hint": "Чтобы не повторять «cancel the subscription», в формальном стиле ставят глагол-заместитель + so."
      },
      {
        "type": "gap",
        "q": "We are writing to ___ whether the goods were ever dispatched. <i style=\"opacity:.6\">(латинизм = find out)</i>",
        "accept": [
          "ascertain"
        ],
        "model": "ascertain",
        "why": "ascertain — латинизированный, формальный эквивалент фразового find out. Выбор под официальный регистр письма.",
        "hint": "Нужен одно-словный латинизм со значением «выяснить» — формальная замена фразовому «find out». ✉️"
      },
      {
        "type": "trRE",
        "ru": "Правительство неумело справилось с кризисом.",
        "accept": [
          "the governments handling of the crisis was clumsy",
          "the government handled the crisis clumsily",
          "the governments handling of the crisis was inept",
          "the government handled the crisis badly",
          "the governments handling of the crisis was poor"
        ],
        "model": "The government's handling of the crisis was clumsy.",
        "hint": "Можно глаголом, но C2-стиль любит номинализацию: «the government's handling of the crisis was …». 🏛️"
      },
      {
        "type": "trRE",
        "ru": "Её аргумент совершенно лишён доказательств.",
        "accept": [
          "her argument is completely devoid of evidence",
          "her argument is entirely devoid of evidence",
          "her argument is utterly devoid of evidence",
          "her argument is wholly devoid of evidence",
          "her argument is devoid of any evidence"
        ],
        "model": "Her argument is completely devoid of evidence.",
        "hint": "«Лишённый чего-то» = devoid of; усилитель «совершенно» поставь перед прилагательным."
      },
      {
        "type": "trER",
        "en": "The scheme is, to all intents and purposes, a tax on the poor.",
        "accept": [
          "эта схема по сути дела налог на бедных",
          "по сути эта схема налог на бедных",
          "схема по сути дела является налогом на бедных",
          "эта схема фактически налог на бедных",
          "по существу эта схема налог на бедных"
        ],
        "model": "Эта схема, по сути дела, налог на бедных.",
        "hint": "Идиома to all intents and purposes = «по сути дела / фактически». Передай этот смягчённый, но твёрдый вывод."
      },
      {
        "type": "order",
        "answer": "such a move would be premature given the circumstances",
        "accept": [
          "such a move would be premature given the circumstances",
          "given the circumstances such a move would be premature"
        ],
        "hintRu": "Скажи по-английски: «Подобный шаг был бы преждевременным, учитывая обстоятельства».",
        "hint": "Используй сжатую отсылку «such a move» вместо длинного повтора и обстоятельственный оборот «given the circumstances»."
      },
      {
        "type": "match",
        "q": "Соедини делексический глагол с существительным, с которым он образует устойчивую коллокацию.",
        "pairs": [
          [
            "make",
            "a decision"
          ],
          [
            "do",
            "the dishes"
          ],
          [
            "take",
            "a risk"
          ],
          [
            "give",
            "a hand"
          ],
          [
            "have",
            "an effect"
          ]
        ],
        "hint": "Каждое существительное «выбирает» свой делексический глагол — здесь важна привычная сочетаемость, а не логика. 🔗"
      },
      {
        "type": "choice",
        "q": "Years of quiet diplomacy finally ___ a lasting peace.",
        "opts": [
          "brought about",
          "committed",
          "perpetrated",
          "inflicted"
        ],
        "answer": "brought about",
        "why": "У глаголов «вызвать» разная окраска: bring about нейтрально-положительно ведёт к результату, а commit/perpetrate/inflict несут отрицательную семантическую просодию (преступление, вред). Для мира нужен bring about.",
        "hint": "«Привести к» доброму результату — не тем же глаголом, что «совершить преступление» или «причинить вред». 🕊️"
      },
      {
        "type": "choice",
        "q": "The negotiations broke down, and both sides were ___ disappointed.",
        "opts": [
          "bitterly",
          "widely",
          "hardly",
          "broadly"
        ],
        "answer": "bitterly",
        "why": "Усилитель подбирается под слово: disappointed берёт bitterly (bitterly disappointed) — фиксированная коллокация. widely/broadly относятся к охвату, а не к силе чувства.",
        "hint": "У «disappointed» свой наречный усилитель — тот же, что в «bitterly cold»: сила чувства, а не охват. 😞"
      },
      {
        "type": "choice",
        "q": "The success of the merger is contingent ___ regulatory approval.",
        "opts": [
          "on",
          "of",
          "to",
          "with"
        ],
        "answer": "on",
        "why": "Управление фиксировано: contingent on = «зависящий от». Это лексика, а не логика — предлог заучивается со словом, как rely on.",
        "hint": "«Зависящий от» — у contingent тот же предлог, что у «depend on». 📋"
      },
      {
        "type": "choice",
        "q": "Some of the early drafts survived, but very few, ___ , were ever published.",
        "opts": [
          "if any",
          "if so",
          "if not",
          "if ever"
        ],
        "answer": "if any",
        "why": "Эллиптический хедж «few, if any» = «если вообще хоть сколько-то». С количеством идёт if any; if ever дружит с частотой (rarely, if ever), if so/if not — другие связки.",
        "hint": "Хедж при количестве «мало, если вообще были» — устойчивая связка с «any», не с «ever». 🔎"
      },
      {
        "type": "gap",
        "q": "The company's repeated ___ to meet safety standards led to the shutdown. <i style=\"opacity:.6\">(номинализация от «to fail»)</i>",
        "accept": [
          "failure",
          "failures"
        ],
        "model": "failure",
        "why": "Номинализация: he failed → the failure to… «The company's repeated failure to meet…» — глагол сворачивается в существительное, а инфинитив уточняет его.",
        "hint": "Преврати глагол «to fail» в существительное: «repeated ___ to meet…». 📄"
      },
      {
        "type": "trRE",
        "ru": "Тёплый свет и тишина располагают к глубокому сну.",
        "accept": [
          "warm light and quiet are conducive to deep sleep",
          "warm light and silence are conducive to deep sleep",
          "soft light and quiet are conducive to deep sleep",
          "warm light and quietness are conducive to deep sleep",
          "the warm light and quiet are conducive to deep sleep",
          "warm light and calm are conducive to deep sleep"
        ],
        "model": "Warm light and quiet are conducive to deep sleep.",
        "hint": "«Располагать к чему-то» = be conducive to; не забудь коллокацию «deep sleep». 😴"
      },
      {
        "type": "trER",
        "en": "Notwithstanding the committee's reservations, the proposal was approved.",
        "accept": [
          "несмотря на оговорки комитета предложение было одобрено",
          "невзирая на сомнения комитета предложение одобрили",
          "несмотря на возражения комитета предложение было принято",
          "вопреки оговоркам комитета предложение одобрили",
          "несмотря на оговорки комитета это предложение было одобрено"
        ],
        "model": "Несмотря на оговорки комитета, предложение было одобрено.",
        "hint": "Notwithstanding — книжно-формальный синоним «несмотря на»; передай сухой официальный тон. 📜"
      },
      {
        "type": "order",
        "answer": "the heavy rain did considerable damage to the crops",
        "accept": [
          "the heavy rain did considerable damage to the crops"
        ],
        "hintRu": "Скажи по-английски: «Сильный дождь нанёс значительный ущерб посевам».",
        "hint": "Собери коллокациями: «heavy rain» (не strong), «do damage», «considerable damage». 🌧️"
      },
      {
        "type": "match",
        "q": "Соедини слово с его оттенком — одобрительным или осуждающим.",
        "pairs": [
          [
            "renowned",
            "известен с хорошей стороны"
          ],
          [
            "notorious",
            "известен с дурной стороны"
          ],
          [
            "thrifty",
            "бережливый (похвала)"
          ],
          [
            "stingy",
            "скупой (упрёк)"
          ],
          [
            "determined",
            "целеустремлённый (похвала)"
          ]
        ],
        "hint": "У каждого слова свой «заряд»: подбери оттенок — одобрение или осуждение. ⚖️"
      },
      {
        "type": "describe",
        "img": "img/c2/day-16.jpg",
        "prompt": "Опиши сцену дважды: сначала нейтрально, затем в сухом деловом регистре. Покажи точные коллокации (make/do/heavy/deep) и хотя бы одну номинализацию или зависимый предлог. 3–4 предложения.",
        "keywords": [
          "make",
          "do",
          "heavy",
          "deep",
          "handling",
          "given",
          "conducive",
          "devoid",
          "such",
          "considerable"
        ],
        "minWords": 25,
        "model": "A few people are doing their shopping in the late afternoon light. In more formal terms, a handful of customers are making their final purchases before closing. The store's handling of the evening rush appears, on the whole, efficient; such orderly calm is not devoid of a certain charm.",
        "hint": "Скажи просто, потом «в костюме»: замени глаголы номинализациями, подбери точные коллокации и зависимый предлог. 🎩"
      },
      {
        "type": "describe",
        "img": "img/c2/day-18.jpg",
        "prompt": "Опиши сцену сначала одним нейтральным предложением, затем перефразируй её в подчёркнуто формальном, «латинизированном» регистре. Покажи точные коллокации и хотя бы одну номинализацию. 3–4 предложения.",
        "keywords": [
          "appears",
          "seem",
          "considerable",
          "commuters",
          "handling",
          "given",
          "such",
          "formal",
          "notable",
          "platform"
        ],
        "minWords": 25,
        "model": "At first glance, a crowd is waiting on the platform. In more formal terms, a considerable number of commuters appear to be awaiting the delayed service. The station's handling of the disruption seems, to all intents and purposes, inadequate; such a scene is, given the circumstances, all too familiar.",
        "hint": "Скажи просто, а потом «переоденься в костюм»: замени глаголы номинализациями и подбери точные коллокации. 🎩"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен C2",
    "intro": "Вот он — финал C2. Последняя неделя была про самое тонкое: прагматику и «лицо» (I don't suppose you could…, чтение подтекста), идиомы и метафору (let the cat out of the bag), иронию и британское преуменьшение (not exactly cheap), пословицы и аллюзии (a Pyrrhic victory, Catch-22), пунктуацию как голос, тонкую грань артикля и вида и расфоссилизацию ложных друзей. Но этот экзамен шире одной недели: он идёт по всему уровню сразу — инверсия и расщепление, сослагательное и смешанные условные, коннотация, коллокации, номинализация и регистр возвращаются здесь вместе. Заданий больше, чем на недельных чекпоинтах, — по инструменту из каждого дня пути. Пройдёшь — и впереди уже не «уровень», а свободное, носительское владение языком: ты звучишь как свой. Я очень тобой горжусь. 🏆",
    "review": [
      "Прагматика и «лицо»: косвенные смягчённые просьбы <b>I don't suppose you could…</b>, <b>I was wondering whether…</b>",
      "Ирония и litotes: <b>not exactly cheap</b>, <b>not bad at all</b>, <b>a touch optimistic</b>, <b>I can't say I'm thrilled</b>",
      "Идиомы, аллюзии и пословицы: <b>let the cat out of the bag</b>, <b>a Pyrrhic victory</b>, <b>Catch-22</b>, <b>the proof of the pudding is in the eating</b>",
      "Пунктуация-голос: двоеточие (раскрытие) vs точка с запятой (сочинение); тире, парентеза, Oxford comma",
      "Артикль и вид: <b>the</b> + прил. (the poor), нулевой артикль с абстракциями, present perfect ↔ past",
      "Ложные друзья: <b>actual</b> ≠ актуальный, <b>sympathetic</b> ≠ симпатичный, <b>sensible</b> = благоразумный (не «чувствительный» — это sensitive)",
      "Сквозной повтор C2: инверсия и расщепление, сослагательное и смешанные условные, эпистемическая модальность, коннотация, коллокации, номинализация, зависимые предлоги и континуум регистра"
    ],
    "q": [
      {
        "type": "choice",
        "q": "___ you could lend me a hand with this report?",
        "opts": [
          "I don't suppose",
          "I demand that",
          "I want that",
          "It is essential"
        ],
        "answer": "I don't suppose",
        "why": "Сверхвежливая косвенная просьба: I don't suppose you could… снижает давление на «лицо» собеседника. Прямое требование звучало бы грубо.",
        "hint": "Самая мягкая, «извиняющаяся» просьба начинается с отрицательного предположения «не думаю, что вы…». 🙏"
      },
      {
        "type": "choice",
        "q": "Eyeing the bill: «Well, that's ___ exactly cheap, is it?» (про дорогое вино)",
        "opts": [
          "not",
          "very",
          "so",
          "quite"
        ],
        "answer": "not",
        "why": "Литота / преуменьшение: not exactly cheap = «мягко говоря, дороговато». Отрицание + смягчение даёт ироничный недоговор.",
        "hint": "Британское преуменьшение прячет «очень дорого» за отрицанием: «не то чтобы … дёшево»."
      },
      {
        "type": "choice",
        "q": "Don't worry, it's a perfectly ___ reaction to stress. (обычная)",
        "opts": [
          "normal",
          "actual",
          "sympathetic",
          "sensible"
        ],
        "answer": "normal",
        "why": "normal = «обычный» — здесь верно по подсказке. Ловушки-ложные друзья: sensible = «разумный» (не «чувствительный» — это sensitive), sympathetic = «сочувствующий» (не «симпатичный»), actual = «фактический» (не «актуальный»).",
        "hint": "«Обычная реакция» — бери прямое слово; остальные варианты тут ложные друзья-ловушки."
      },
      {
        "type": "choice",
        "q": "Which sentence is punctuated correctly?",
        "opts": [
          "She had one rule: never look back.",
          "She had one rule; never look back.",
          "She had one rule, never look back.",
          "She had one rule never look back."
        ],
        "answer": "She had one rule: never look back.",
        "why": "Двоеточие вводит раскрытие/расшифровку («а именно»): one rule: never look back. Точка с запятой соединяла бы два равноправных предложения.",
        "hint": "Перед раскрытием/расшифровкой ставится двоеточие, а не точка с запятой."
      },
      {
        "type": "choice",
        "q": "Government policy should not ignore ___ poor.",
        "opts": [
          "the",
          "a",
          "an",
          "some"
        ],
        "answer": "the",
        "why": "the + прилагательное = группа людей в целом: the poor, the rich, the unemployed. Родовая референция.",
        "hint": "«Бедные как класс» — это the + прилагательное в собирательном смысле."
      },
      {
        "type": "choice",
        "q": "I can't find my glasses. — ___ you ___ in the car?",
        "opts": [
          "Have / looked",
          "Did / look",
          "Had / looked",
          "Were / looking"
        ],
        "answer": "Have / looked",
        "why": "Связь с настоящим (очки нужны сейчас, период не закрыт) → Present Perfect. Past Simple оторвал бы действие от «сейчас».",
        "hint": "Результат важен прямо сейчас (очки всё ещё нужны) — это просит Present Perfect, а не оторванное прошлое. 👓"
      },
      {
        "type": "choice",
        "q": "Not until she apologised ___ he agree to talk.",
        "opts": [
          "did",
          "he did",
          "that did",
          "had"
        ],
        "answer": "did",
        "why": "Ограничительное Not until … в начале запускает инверсию в главной части: Not until X did he agree. (Повтор Недели 1.)",
        "hint": "После выноса «Not until …» главная часть переворачивается: did + подлежащее + базовый глагол."
      },
      {
        "type": "choice",
        "q": "The doctor recommended that he ___ more rest.",
        "opts": [
          "get",
          "to get",
          "would get",
          "getting"
        ],
        "answer": "get",
        "why": "recommend that + базовая форма (mandative subjunctive): that he get more rest. (Повтор Недели 2.)",
        "hint": "После recommend that идёт чистая базовая форма глагола, даже при «he»."
      },
      {
        "type": "gap",
        "q": "The plan looks good on paper, but the proof of the pudding is in the ___ . <i style=\"opacity:.6\">(пословица)</i>",
        "accept": [
          "eating"
        ],
        "model": "eating",
        "why": "Пословица the proof of the pudding is in the eating = «всё проверяется на деле». Концовка фиксирована.",
        "hint": "Пословица о том, что судят по результату: «…is in the eating» — пропущено слово «проба на деле». 🍮"
      },
      {
        "type": "gap",
        "q": "I was ___ whether you might be free on Thursday. <i style=\"opacity:.6\">(wonder — мягкая просьба)</i>",
        "accept": [
          "wondering"
        ],
        "model": "wondering",
        "why": "I was wondering whether… — дистанцирующая прошедшая длительная форма как маркер вежливости (просьба «на цыпочках»).",
        "hint": "Сверхвежливый зачин просьбы ставит wonder в длительную прошедшую форму: «I was …-ing whether …»."
      },
      {
        "type": "gap",
        "q": "The success of the trip is largely dependent ___ the weather. <i style=\"opacity:.6\">(предлог)</i>",
        "accept": [
          "on",
          "upon"
        ],
        "model": "on",
        "why": "dependent on — фиксированное управление. (Повтор Недели 3: зависимые предлоги.)",
        "hint": "«Зависит от» — у dependent тот же предлог, что у «rely on»."
      },
      {
        "type": "trRE",
        "ru": "Не подскажете, как пройти к вокзалу?",
        "accept": [
          "i dont suppose you could tell me the way to the station",
          "i dont suppose you could tell me how to get to the station",
          "could you tell me the way to the station",
          "i was wondering if you could tell me the way to the station",
          "excuse me could you tell me the way to the station"
        ],
        "model": "I don't suppose you could tell me the way to the station?",
        "hint": "Косвенная вежливая просьба: начни со смягчителя «I don't suppose you could…» или «Could you…». 🚉"
      },
      {
        "type": "trRE",
        "ru": "Скажем так, я не в восторге.",
        "accept": [
          "lets just say im not exactly thrilled",
          "lets just say i cant say im thrilled",
          "lets just say im not overly thrilled",
          "im not exactly thrilled",
          "lets just say im less than thrilled"
        ],
        "model": "Let's just say I'm not exactly thrilled.",
        "hint": "Передай иронию преуменьшением: «не то чтобы в восторге» — отрицание + смягчитель «exactly/overly». 😏"
      },
      {
        "type": "trER",
        "en": "Resigning to keep his principles was a Pyrrhic victory.",
        "accept": [
          "уйти в отставку ради принципов было пирровой победой",
          "отставка ради принципов была пирровой победой",
          "сохранить принципы ценой отставки было пирровой победой",
          "это была пиррова победа",
          "уход в отставку ради принципов оказался пирровой победой"
        ],
        "model": "Уйти в отставку ради принципов было пирровой победой.",
        "hint": "Аллюзия «a Pyrrhic victory» — победа, обошедшаяся слишком дорого; по-русски это «пиррова победа»."
      },
      {
        "type": "trER",
        "en": "What we need now is a clear plan, not more talk.",
        "accept": [
          "что нам сейчас нужно так это чёткий план а не разговоры",
          "сейчас нам нужен чёткий план а не разговоры",
          "то что нам сейчас нужно это чёткий план а не лишние разговоры",
          "что нам нужно сейчас это ясный план а не болтовня",
          "нам сейчас нужен именно чёткий план а не разговоры"
        ],
        "model": "Что нам сейчас нужно — так это чёткий план, а не разговоры.",
        "hint": "Псевдорасщепление «What … is …» выносит мысль в фокус; по-русски это «Что … — так это …»."
      },
      {
        "type": "order",
        "answer": "never in my life have i been so insulted",
        "accept": [
          "never in my life have i been so insulted",
          "never have i been so insulted in my life"
        ],
        "hintRu": "Скажи по-английски: «Никогда в жизни меня так не оскорбляли» (с инверсией).",
        "hint": "Зачин-инверсия «Never in my life …» переворачивает have и подлежащее: have + I + 3-я форма. 😤"
      },
      {
        "type": "match",
        "q": "Соедини английское слово с его настоящим значением — это ложные друзья.",
        "pairs": [
          [
            "sympathetic",
            "сочувствующий"
          ],
          [
            "actual",
            "реальный, фактический"
          ],
          [
            "eventually",
            "в конце концов"
          ],
          [
            "sensible",
            "благоразумный"
          ],
          [
            "accurate",
            "точный"
          ]
        ],
        "hint": "Каждое слово легко перевести неверно «по созвучию» — выбирай реальное значение, а не русский двойник. ⚠️"
      },
      {
        "type": "choice",
        "q": "You need experience to get the job, but you can't get experience without the job — a real ___ .",
        "opts": [
          "Catch-22",
          "Big Brother",
          "wild goose",
          "red herring"
        ],
        "answer": "Catch-22",
        "why": "Аллюзия на роман Хеллера: Catch-22 = безвыходный замкнутый круг, парадоксальное правило. «red herring» — отвлекающий манёвр, другое.",
        "hint": "Замкнутый круг «чтобы получить A, нужно B, а B без A не получить» носит имя из знаменитого романа — в названии есть число."
      },
      {
        "type": "choice",
        "q": "___ the timing, rather than the message, that doomed the announcement.",
        "opts": [
          "It was",
          "There was",
          "What was",
          "That it was"
        ],
        "answer": "It was",
        "why": "It-cleft ставит фокус на одно звено: It was the timing that doomed it. Формальное it + was открывает расщепление; «There/What/That it» так не работают.",
        "hint": "Фокус на «именно это, а не то» открывается формальным it + was. 🎯"
      },
      {
        "type": "choice",
        "q": "His arrogance I could forgive; ___ I could not.",
        "opts": [
          "his dishonesty",
          "his dishonesty could",
          "could his dishonesty",
          "dishonesty his"
        ],
        "answer": "his dishonesty",
        "why": "Топикализация: дополнение выносится вперёд, а порядок «подлежащее + глагол» сохраняется — His dishonesty I could not (forgive). Это вынос темы для контраста, без инверсии.",
        "hint": "По образцу первой части вынеси дополнение вперёд, а «I could not» оставь как есть — контрастный параллелизм. ⚖️"
      },
      {
        "type": "choice",
        "q": "I know you doubt me, but I ___ send the invitation — check your spam folder.",
        "opts": [
          "did",
          "have did",
          "was",
          "do have"
        ],
        "answer": "did",
        "why": "Эмфатическое do в прошлом подчёркивает истинность: I did send it = «я ведь правда отправил». Ударный did + базовая форма.",
        "hint": "Чтобы настоять «я ведь правда отправил», перед глаголом — ударное did, а глагол в начальной форме. 📨"
      },
      {
        "type": "choice",
        "q": "The biographer was careful to call him ___, not merely stubborn.",
        "opts": [
          "resolute",
          "pig-headed",
          "obstinate",
          "intransigent"
        ],
        "answer": "resolute",
        "why": "Все слова значат «упорный», но заряд разный: resolute — одобрительно («решительный»), а pig-headed/obstinate/intransigent — осуждающе. Контекст «not merely stubborn» просит положительную окраску.",
        "hint": "«Упорный» бывает с похвалой и с упрёком; после «not merely stubborn» нужен вариант со знаком плюс. 👍"
      },
      {
        "type": "choice",
        "q": "— Do you think they'll accept the offer? — I ___ ; they seemed keen.",
        "opts": [
          "expect so",
          "expect that",
          "think yes",
          "suppose not"
        ],
        "answer": "expect so",
        "why": "Заместитель «so» подставляет целое придаточное: I expect so = «думаю, что да». «expect that…» требует продолжения, «think yes» не по-английски, а «suppose not» противоречит «keen».",
        "hint": "Чтобы не повторять «that they'll accept», после глагола мнения ставят слово-заместитель утверждения — пару к «not». ✅"
      },
      {
        "type": "gap",
        "q": "I'm ___ aware of the risks, thank you — you needn't remind me. <i style=\"opacity:.6\">(усилитель = «прекрасно/вполне»)</i>",
        "accept": [
          "perfectly",
          "fully",
          "well",
          "keenly",
          "acutely",
          "painfully",
          "only too"
        ],
        "model": "perfectly",
        "why": "Усилитель под слово: aware берёт perfectly/fully/acutely/well (perfectly aware = «прекрасно понимаю»). Это устойчивая коллокация усиления.",
        "hint": "«Прекрасно осведомлён» — у «aware» свой усилитель (perfectly/fully/well), а не «very much». 🧠"
      },
      {
        "type": "gap",
        "q": "Don't tell anyone yet — let's not let the cat out of the ___ . <i style=\"opacity:.6\">(идиома: «проболтаться»)</i>",
        "accept": [
          "bag"
        ],
        "model": "bag",
        "why": "Идиома — застывшее целое: let the cat out of the bag = «выдать секрет». Слово фиксировано, заменить нельзя.",
        "hint": "Застывшая идиома о выдаче секрета: «let the cat out of the ___» — не «box» и не «sack». 🐱"
      },
      {
        "type": "trRE",
        "ru": "Если бы я не потратил тогда все сбережения, сейчас я бы не был на мели.",
        "accept": [
          "if i hadnt spent all my savings back then i wouldnt be broke now",
          "if i had not spent all my savings then i wouldnt be broke now",
          "had i not spent all my savings back then i wouldnt be broke now",
          "if i hadnt blown all my savings then i wouldnt be broke now",
          "if i hadnt spent all my savings back then i would not be broke now",
          "had i not spent all my savings i wouldnt be so broke now"
        ],
        "model": "If I hadn't spent all my savings back then, I wouldn't be broke now.",
        "hint": "Смешанное условие: причина в прошлом (hadn't spent) → следствие сейчас (wouldn't be). Можно и с инверсией «Had I not…». 💸"
      },
      {
        "type": "trRE",
        "ru": "Пожалуй, это лучший роман десятилетия, хотя судить пока рано.",
        "accept": [
          "this is arguably the best novel of the decade though its too early to tell",
          "arguably this is the best novel of the decade though it is too early to judge",
          "this is arguably the best novel of the decade although its early to say",
          "its arguably the best novel of the decade though its too soon to tell",
          "this may well be the best novel of the decade though its too early to tell",
          "arguably its the best novel of the decade but its too early to tell"
        ],
        "model": "This is arguably the best novel of the decade, though it's too early to tell.",
        "hint": "Смягчи смелую оценку хеджем «arguably», а осторожность добавь оговоркой «though it's too early to tell». 📚"
      },
      {
        "type": "trER",
        "en": "Come what may, I'll see this through to the end.",
        "accept": [
          "будь что будет я доведу это до конца",
          "что бы ни случилось я доведу дело до конца",
          "будь что будет а я доведу это до конца",
          "чему быть того не миновать но я доведу это до конца",
          "что бы ни было я доведу это до конца",
          "будь что будет но я доведу это до конца"
        ],
        "model": "Будь что будет, я доведу это до конца.",
        "hint": "Застывшая формула «Come what may» = «будь что будет / что бы ни случилось». 💪"
      },
      {
        "type": "order",
        "answer": "had i known the truth i would have spoken up",
        "accept": [
          "had i known the truth i would have spoken up"
        ],
        "hintRu": "Скажи по-английски: «Знай я правду, я бы высказался» (условие без if, с инверсией).",
        "hint": "Условие без «if»: начни с перевёрнутого «Had I …», затем результат «I would have + 3-я форма». 🗣️"
      },
      {
        "type": "order",
        "answer": "she must have taken the earlier train",
        "accept": [
          "she must have taken the earlier train"
        ],
        "hintRu": "Скажи по-английски: «Должно быть, она села на более ранний поезд».",
        "hint": "Уверенный вывод о прошлом «должно быть, …»: must + have + 3-я форма. 🚉"
      },
      {
        "type": "match",
        "q": "Соедини книжно-латинский глагол с его нейтральным разговорным эквивалентом.",
        "pairs": [
          [
            "ascertain",
            "find out"
          ],
          [
            "endeavour",
            "try"
          ],
          [
            "commence",
            "begin"
          ],
          [
            "terminate",
            "end"
          ],
          [
            "utilise",
            "use"
          ]
        ],
        "hint": "Континуум регистра: у каждого «высокого» латинизма есть простой обиходный двойник. 📜"
      },
      {
        "type": "describe",
        "img": "img/c2/day-29.jpg",
        "prompt": "Финал C2. Опиши сцену как маленький мастер-текст: свой голос, смена тона, вес фразы в конце. Собери по инструменту из каждой недели — инверсию или расщепление, точную коллокацию или номинализацию, идиому или иронию-преуменьшение — и продуманную пунктуацию (тире, точку с запятой). 4–5 предложений.",
        "keywords": [
          "not",
          "only",
          "what",
          "never",
          "seem",
          "rather",
          "hardly",
          "frankly",
          "handling",
          "failure"
        ],
        "minWords": 30,
        "model": "It is not, perhaps, a remarkable street — and yet. Never have I passed it without slowing; there is something here that the eye alone cannot explain. The town's handling of its own quiet is, frankly, a kind of art: the light falls, the shutters sleep, and what lingers is not the scene but the mood. It's the sort of place you only notice once you've learned to look.",
        "hint": "Собери выпускной абзац из инструментов всех недель: инверсия, расщепление, номинализация («the town's handling of…»), litotes — и смена тона. ✍️"
      },
      {
        "type": "describe",
        "img": "img/c2/day-22.jpg",
        "prompt": "Финальный штрих C2: опиши сцену так, чтобы звучало по-носительски. Сознательно смешай регистры, добавь одну идиому или иронию-преуменьшение и продвинутую пунктуацию (тире, точку с запятой). 4–5 предложений.",
        "keywords": [
          "not",
          "exactly",
          "rather",
          "perhaps",
          "frankly",
          "seem",
          "arguably",
          "quite",
          "hardly",
          "honest"
        ],
        "minWords": 30,
        "model": "It's not exactly a postcard scene — but there's something honest about it. The light is fading; the streets, half-empty, seem to be holding their breath. Frankly, it would seem like an ordinary evening, and yet, to those who live here, it is anything but. Call it home, for want of a better word.",
        "hint": "Дай голосу свободу: смени регистр в середине, вставь litotes («not exactly…») и сыграй тире против точки с запятой. ✨"
      }
    ]
  }
};;

/* ===== helpers ===== */
