/* English B2 — level config + 30-day plan (COURSE) + weekly exams (EXAMS).
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'B2',
  course:'en-b2',
  pkey:'langbook-b2-progress',
  preview:true,
  finalNote:'Это твоя победа 💛 Полный уровень English B2 — позади. Дальше открывается C1. Горжусь тобой!'
};

const COURSE = [
  {wn:"01", wt:"Прошлое профессионально: рассказ, дедукция, сожаление", days:[
    {n:1,t:"Рассказ во времени",p:"past simple + past continuous + past perfect как единая…"},
    {n:2,t:"Длилось до момента",p:"had been + -ing (длительность/процесс до точки в прошлом)."},
    {n:3,t:"Наверное, было",p:"must have / can't have / might (may/could) have + 3-я форма."},
    {n:4,t:"Надо было / зря",p:"should(n't) have / needn't have / could have + 3-я форма…"},
    {n:5,t:"Жаль, что так",p:"I wish / if only + past perfect (сожаление о прошлом); wish +…"},
    {n:6,t:"to do или doing",p:"remember / forget / stop / try / regret / go on / mean + -ing…"},
    {n:7,t:"Повторение №1",p:"повторение + тест."}
  ]},
  {wn:"02", wt:"Условия, будущее и нюансы смысла", days:[
    {n:8,t:"Если не / при условии",p:"обзор 0/1/2/3 conditional + unless / provided (that) / as…"},
    {n:9,t:"Прошлое влияет на сейчас",p:"смешанные условные: if + past perfect → would + base (now)…"},
    {n:10,t:"Лучше бы / лучше сделай",p:"would rather (+ bare inf / + past для др. лица); had better…"},
    {n:11,t:"Завтра буду делать",p:"will be + -ing (процесс в будущем; вежливый прогноз-вопрос)."},
    {n:12,t:"К сроку уже сделаю",p:"will have + 3-я форма (завершено к моменту в будущем); by /…"},
    {n:13,t:"Такой, что / слишком",p:"so + adj / such (a) + adj + noun … that; too + adj (to/for)…"},
    {n:14,t:"Повторение №2",p:"повторение + тест."}
  ]},
  {wn:"03", wt:"Залог, безличность и сложные обороты", days:[
    {n:15,t:"Пассив везде",p:"пассив во всех временах + модальный пассив."},
    {n:16,t:"Говорят, что…",p:"безличный репортинг: It is said / believed / thought /…"},
    {n:17,t:"Его считают…",p:"личный репортинг: He is said / believed to + inf / to have +…"},
    {n:18,t:"Сделал у мастера",p:"have / get + object + 3-я форма (услугу выполнил другой)…"},
    {n:19,t:"Сделав, …",p:"причастные обороты: -ing (active), -ed (passive), having done…"},
    {n:20,t:"Который / с которым",p:"non-defining (с запятыми) + предлог + which/whom."},
    {n:21,t:"Повторение №3",p:"повторение + тест."}
  ]},
  {wn:"04", wt:"Чужая речь, акцент и стиль (финиш B2)", days:[
    {n:22,t:"Чужие слова",p:"богатый набор reporting verbs…"},
    {n:23,t:"Именно это",p:"расщеплённые: It was X that/who…; What I need is…; The thing…"},
    {n:24,t:"Едва… как",p:"инверсия после отриц. наречий: Hardly had I… when…; No sooner…"},
    {n:25,t:"Не только…",p:"Not only … but also (+ инверсия); Little did I know; Only…"},
    {n:26,t:"Я же правда",p:"эмфатическое do / does / did + база (I do like it; She did call)."},
    {n:27,t:"Однако / тогда как",p:"nevertheless / however / whereas / while / on the other hand…"},
    {n:28,t:"Слова-друзья",p:"коллокации B2: make/do, take/have, heavy rain, make a…"},
    {n:29,t:"Фразовые B2",p:"B2 фразовые: put up with, look forward to, get on with, come…"},
    {n:30,t:"Моя позиция",p:"финальный проект."}
  ]}
];

/* ===== weekly checkpoint exams (content) ===== */
const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя B2 — про мастерское прошлое. Проверим всё сразу: narrative tenses (past simple + continuous + perfect), Past Perfect Continuous, дедукцию о прошлом (must have / can't have / might have), should & needn't have, wish + past perfect и wish + would, а ещё смену смысла -ing/to (remember, forget, stop, mean) и «мог бы» could have. Заданий стало больше — под проверку попал каждый день недели. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Рассказ: фон <b>was/were + -ing</b> · факт <b>past simple</b> · «раньше» <b>had + V3</b>",
      "<b>had been + -ing</b> — процесс длился ДО точки в прошлом",
      "Дедукция: <b>must have</b> (наверняка) · <b>can't have</b> (не может быть) · <b>might have</b> (возможно) + V3",
      "Сожаление: <b>should(n't) have</b> (надо было / зря) · <b>needn't have</b> (зря, но не страшно) + V3",
      "<b>I wish / if only + past perfect</b> — жаль о прошлом · <b>wish + would</b> — раздражение",
      "Смена смысла: <b>remember/stop/try + -ing</b> ≠ <b>+ to</b>",
      "<b>could have</b> — «мог бы» (нереализованная возможность/упрёк) · шкала: might/may/could → must → can't",
      "<b>mean + -ing</b> — «влечёт за собой» (не намерение) · <b>forget/remember + to</b> (вперёд) ≠ <b>+ -ing</b> (назад)"
    ],
    "q": [
      {
        "type": "choice",
        "q": "When I arrived at the station, the train ___ . <i style=\"opacity:.6\">(already / leave)</i>",
        "opts": [
          "had already left",
          "already left",
          "has already left",
          "was already leaving"
        ],
        "answer": "had already left",
        "why": "Поезд ушёл РАНЬШЕ моего прихода — самое раннее действие в прошлом ставим в Past Perfect: had + V3. 💛",
        "hint": "Два действия в прошлом: я пришёл и поезд ушёл. То, что случилось ещё раньше, берёт had + третью форму глагола. 🚆"
      },
      {
        "type": "choice",
        "q": "Her eyes were red because she ___ . <i style=\"opacity:.6\">(cry)</i>",
        "opts": [
          "had been crying",
          "had cried",
          "was crying",
          "cried"
        ],
        "answer": "had been crying",
        "why": "Виден СЛЕД длившегося процесса до момента в прошлом → Past Perfect Continuous: had been + -ing.",
        "hint": "Красные глаза — это результат процесса, который ТЯНУЛСЯ перед этим моментом. Для длительности до точки в прошлом нужен had been + …-ing. 😢"
      },
      {
        "type": "choice",
        "q": "He ___ taken my car — look, it's still in the garage!",
        "opts": [
          "can't have",
          "must have",
          "mustn't have",
          "couldn't be"
        ],
        "answer": "can't have",
        "why": "Машина на месте → ты УВЕРЕН, что он НЕ брал её. Уверенное «не может быть, что» = can't have + V3. («mustn't have» так не используют.)",
        "hint": "Есть улика (машина в гараже), и ты уверен, что этого НЕ было. Для уверенного отрицания о прошлом нужен can't have + третья форма. 🚗"
      },
      {
        "type": "gap",
        "q": "The ground is wet this morning. It ___ last night. <i style=\"opacity:.6\">(must / rain)</i>",
        "accept": [
          "must have rained",
          "mustve rained",
          "must've rained"
        ],
        "model": "must have rained",
        "why": "Уверенный вывод о прошлом по улике → must have + V3.",
        "hint": "Земля мокрая — ты почти уверен в причине. «Наверняка прошёл дождь» = must have + третья форма глагола rain. 🌧️"
      },
      {
        "type": "choice",
        "q": "We took an umbrella, but it didn't rain. We ___ taken it.",
        "opts": [
          "needn't have",
          "shouldn't have",
          "couldn't have",
          "mustn't have"
        ],
        "answer": "needn't have",
        "why": "Сделали зря, но без вреда — «не нужно было, оказалось лишним» = needn't have + V3. (shouldn't have = было ошибкой.)",
        "hint": "Зонт взяли, но он не понадобился — действие оказалось ЛИШНИМ, а не ошибочным. Для этого нужен needn't have + третья форма. ☂️"
      },
      {
        "type": "choice",
        "q": "You ___ told me earlier — now it's too late to help!",
        "opts": [
          "should have",
          "must have",
          "needn't have",
          "can't have"
        ],
        "answer": "should have",
        "why": "Упрёк и сожаление о НЕсделанном в прошлом → should have + V3.",
        "hint": "Упрёк «надо было, а ты не сделал» о прошлом строится через should have + третью форму. 🙂"
      },
      {
        "type": "gap",
        "q": "I wish I ___ harder for the exam — I failed it. <i style=\"opacity:.6\">(study)</i>",
        "accept": [
          "had studied",
          "'d studied",
          "had studied harder"
        ],
        "model": "had studied",
        "why": "Сожаление о прошлом → wish + past perfect: had + V3.",
        "hint": "Жаль о том, что УЖЕ случилось (точнее, не случилось). После wish о прошлом ставим had + третью форму. 📚"
      },
      {
        "type": "choice",
        "q": "I wish you ___ stop interrupting me all the time!",
        "opts": [
          "would",
          "had",
          "will",
          "did"
        ],
        "answer": "would",
        "why": "Раздражение чужой повторяющейся привычкой → wish + would + база.",
        "hint": "Тебя раздражает чужая привычка прямо сейчас. Для «да перестань же ты…» нужен wish + would. 😤"
      },
      {
        "type": "trRE",
        "ru": "Жаль, что я не позвонил ей вчера. <i style=\"opacity:.6\">(ловушка: рус. «не позвонил» → англ. утвердительное)</i>",
        "accept": [
          "i wish i had called her yesterday",
          "i wish id called her yesterday",
          "if only i had called her yesterday",
          "i wish i had phoned her yesterday",
          "i wish i had rung her yesterday"
        ],
        "model": "I wish I had called her yesterday.",
        "hint": "«Жаль, что я не…» о прошлом = I wish I had + третья форма. Ловушка: русское «не позвонил» превращается в УТВЕРДИТЕЛЬНОЕ had called. 📞"
      },
      {
        "type": "trER",
        "en": "She must have forgotten about the meeting.",
        "accept": [
          "должно быть она забыла о встрече",
          "должно быть, она забыла о встрече",
          "наверное она забыла о встрече",
          "наверное, она забыла о встрече",
          "видимо она забыла о встрече",
          "она наверное забыла о встрече",
          "она должно быть забыла о встрече"
        ],
        "model": "Должно быть, она забыла о встрече.",
        "hint": "«must have + V3» — это уверенная догадка о прошлом. Передай её словами «должно быть / наверное» плюс прошедшее время. 🙂"
      },
      {
        "type": "order",
        "answer": "by the time we arrived the film had started",
        "accept": [
          "by the time we arrived the film had started",
          "the film had started by the time we arrived"
        ],
        "hintRu": "Скажи по-английски: «К тому времени, когда мы пришли, фильм уже начался».",
        "hint": "«К тому времени, как…» = by the time + past simple (arrived), а более раннее действие (фильм начался) — в Past Perfect: had started. 🎬"
      },
      {
        "type": "choice",
        "q": "On the way home he stopped ___ a coffee. <i style=\"opacity:.6\">(с целью)</i>",
        "opts": [
          "to buy",
          "buying",
          "buy",
          "bought"
        ],
        "answer": "to buy",
        "why": "stop TO do = остановиться, ЧТОБЫ что-то сделать (цель). stop DOING = бросить занятие.",
        "hint": "Он остановился с ЦЕЛЬЮ купить кофе (а не «бросил покупать»). Для цели после stop нужен to + глагол. ☕"
      },
      {
        "type": "gap",
        "q": "I clearly remember ___ the door this morning — I'm sure I did. <i style=\"opacity:.6\">(lock)</i>",
        "accept": [
          "locking"
        ],
        "model": "locking",
        "why": "remember DOING = помнить, что УЖЕ сделал (воспоминание). remember TO do = не забыть сделать.",
        "hint": "Речь о воспоминании об уже сделанном утром действии. Для «помню, что запер» после remember идёт …-ing. 🔑"
      },
      {
        "type": "match",
        "q": "Соедини картинку с третьей формой (V3) — она нужна для had / must have + …",
        "pairs": [
          [
            "✍️",
            "written"
          ],
          [
            "🗣️",
            "spoken"
          ],
          [
            "💔",
            "broken"
          ],
          [
            "🥶",
            "frozen"
          ],
          [
            "🚗💨",
            "driven"
          ]
        ],
        "hint": "Все слова — третья форма (V3) неправильных глаголов: write→…, speak→…, break→…, freeze→…, drive→… 🙂"
      },
      {
        "type": "describe",
        "img": "img/b2/day-03.jpg",
        "prompt": "Что, по-твоему, здесь произошло? Сделай 2–3 предположения о прошлом, используя дедукцию: must have / can't have / might have + 3-я форма.",
        "keywords": [
          "must have",
          "can't have",
          "might have",
          "may have",
          "could have",
          "happened",
          "left",
          "been",
          "broken",
          "lost",
          "forgotten",
          "rained",
          "argued",
          "tired",
          "working"
        ],
        "minWords": 12,
        "model": "Something must have happened here. They might have had an argument, and someone can't have closed the window, because everything is wet. He looks tired, so he must have been working all night.",
        "hint": "Делай догадки о прошлом по уликам: уверенно — must have + V3, уверенно «нет» — can't have + V3, неуверенно — might have + V3. 🔍"
      },
      {
        "type": "choice",
        "q": "I'm not sure where my keys are. I ___ them at the café, or maybe in the car — who knows. <i style=\"opacity:.6\">(одна из версий)</i>",
        "opts": [
          "might have left",
          "must have left",
          "can't have left",
          "should have left"
        ],
        "answer": "might have left",
        "why": "Есть альтернатива («or maybe in the car») и прямая неуверенность → это ОДНА из версий о прошлом: might have + третья форма. must have значило бы «точно там» (но версий несколько), can't have — «точно не там».",
        "hint": "Вариантов несколько (кафе или машина), ты не уверен. Для одной из версий о прошлом нужен might have + третья форма. 🔑"
      },
      {
        "type": "choice",
        "q": "You ___ hurt yourself jumping off that wall — please be more careful next time!",
        "opts": [
          "could have",
          "must have",
          "needn't have",
          "can't have"
        ],
        "answer": "could have",
        "why": "Ты не поранился, но был близок к этому — нереализованная возможность в прошлом: could have + третья форма. must have (точно случилось) и can't have (точно нет) не про «мог бы».",
        "hint": "Ты не поранился, но был на волосок. «Мог бы…» о прошлом — это could have + третья форма. 🧱"
      },
      {
        "type": "choice",
        "q": "Don't forget ___ the back door before you go to bed tonight.",
        "opts": [
          "to lock",
          "locking",
          "lock",
          "locked"
        ],
        "answer": "to lock",
        "why": "forget + to do = «не забыть сделать» (дело впереди). forget + -ing значило бы «не помнить, что уже сделал» — но дверь запирать ещё только предстоит.",
        "hint": "Речь о будущем деле, которое важно не забыть выполнить. После forget в этом смысле идёт to + глагол. 🚪"
      },
      {
        "type": "gap",
        "q": "Taking this promotion means ___ to another city — are you ready for that? <i style=\"opacity:.6\">(move)</i>",
        "accept": [
          "moving"
        ],
        "model": "moving",
        "why": "Здесь mean = «влечёт за собой», а подлежащее — действие, а не человек, поэтому это не намерение (mean to do), а следствие: mean + -ing.",
        "hint": "mean тут значит «подразумевает, влечёт за собой»: повышение = переезд. После mean в этом смысле идёт …-ing. 🏙️"
      },
      {
        "type": "trRE",
        "ru": "Не нужно было готовить так много еды — почти всё осталось. <i style=\"opacity:.6\">(ловушка: еду ты всё-таки приготовил)</i>",
        "accept": [
          "you neednt have cooked so much food",
          "you neednt have made so much food",
          "you neednt have cooked so much",
          "you neednt have prepared so much food",
          "you neednt have cooked this much food"
        ],
        "model": "You needn't have cooked so much food.",
        "hint": "Еду ты всё-таки приготовил, но она оказалась ЛИШНЕЙ → needn't have + третья форма (не «didn't need to», ведь готовка состоялась). 🍲"
      },
      {
        "type": "trRE",
        "ru": "Когда я приехал, они уже поужинали.",
        "accept": [
          "when i arrived they had already had dinner",
          "when i got there they had already had dinner",
          "when i arrived they had already eaten",
          "when i got there they had already eaten",
          "by the time i arrived they had already had dinner",
          "when i came they had already had dinner",
          "when i arrived they had already finished dinner"
        ],
        "model": "When I arrived, they had already had dinner.",
        "hint": "Два слоя прошлого: я приехал (past simple), а ужин случился ЕЩЁ раньше → had already + третья форма. 🍽️"
      },
      {
        "type": "trER",
        "en": "I wish I hadn't said that. <i style=\"opacity:.6\">(ловушка: hadn't → рус. без «не»)</i>",
        "accept": [
          "жаль что я это сказал",
          "жаль что я это сказала",
          "жаль что я такое сказал",
          "жаль что я так сказал",
          "жаль что я это говорил",
          "лучше бы я этого не говорил",
          "лучше бы я это не говорил",
          "мне жаль что я это сказал"
        ],
        "model": "Жаль, что я это сказал.",
        "hint": "«I wish I hadn't + V3» — сожаление о прошлом. Утвердительное по-английски «hadn't said» по-русски превращается в «сказал» (я ведь сказал и жалею). 🙂"
      },
      {
        "type": "order",
        "answer": "she had been studying all night so she was exhausted",
        "accept": [
          "she had been studying all night so she was exhausted"
        ],
        "hintRu": "Скажи по-английски: «Она занималась всю ночь, поэтому была без сил».",
        "hint": "Процесс тянулся ДО момента в прошлом → had been + …-ing (had been studying), а результат — was exhausted. 🌙"
      },
      {
        "type": "match",
        "q": "Соедини модальную форму прошлого с её смыслом.",
        "pairs": [
          [
            "must have + V3",
            "наверняка было"
          ],
          [
            "can't have + V3",
            "быть не может"
          ],
          [
            "might have + V3",
            "возможно, было"
          ],
          [
            "should have + V3",
            "надо было, но не сделал"
          ],
          [
            "needn't have + V3",
            "зря сделал"
          ]
        ],
        "hint": "Шкала уверенности о прошлом: must have (уверен, что было), can't have (уверен, что нет), might have (возможно), should have (надо было), needn't have (зря). 🙂"
      },
      {
        "type": "describe",
        "img": "img/b2/day-01.jpg",
        "prompt": "Посмотри на снимок и расскажи небольшую историю в прошлом: что происходило вокруг (фон), что случилось (события) и что уже произошло до этого. Напиши 3–4 предложения, используя narrative tenses: was/were …-ing, past simple и had + третья форма.",
        "keywords": [
          "was",
          "were",
          "when",
          "suddenly",
          "had",
          "already",
          "before",
          "by the time",
          "been",
          "waiting",
          "arrived",
          "noticed",
          "realised",
          "realized",
          "happened",
          "earlier",
          "because"
        ],
        "minWords": 14,
        "model": "It was raining when we left the house. We had already missed the first bus, so we were standing at the stop for a long time. By the time the next one arrived, we had been waiting for almost half an hour.",
        "hint": "Собери рассказ из слоёв: фон (was/were …-ing), события (past simple), а что было ЕЩЁ раньше — had + третья форма. 🎞️"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Неделя 2 — условия и будущее с нюансами. Проверим: unless / provided / as long as / in case, смешанные условные (mixed conditionals), would rather / had better / it's time + past, Future Continuous и Future Perfect, а также so/such и too/enough, а ещё by / until. Заданий стало больше — под проверку попал каждый день недели. Нужно 80%, чтобы открыть Неделю 3. 💛",
    "review": [
      "<b>unless</b> = if not · <b>provided (that) / as long as</b> — при условии · <b>in case</b> — на случай",
      "Mixed: <b>if + past perfect → would + база</b> (прошлое → сейчас); <b>if + past simple → would have + V3</b> (сейчас → прошлое)",
      "<b>would rather you did…</b> (др. лицо → past) · <b>had better</b> + база · <b>it's time we went</b>",
      "<b>will be + -ing</b> — процесс в будущем · <b>will have + V3</b> — завершено к сроку",
      "<b>so</b> + прил. · <b>such (a)</b> + прил. + сущ. … that",
      "<b>too</b> + прил. (to/for) · (not) прил. <b>enough</b> (to)",
      "<b>by</b> (крайний срок) ≠ <b>until/till</b> (вплоть до) · <b>in case</b> — на случай (заранее)",
      "<b>will have + V3</b> — итог к сроку · <b>as long as</b> — при условии · <b>had better</b> — настоятельный совет"
    ],
    "q": [
      {
        "type": "choice",
        "q": "You won't pass the exam ___ you study harder.",
        "opts": [
          "unless",
          "if",
          "provided",
          "even if"
        ],
        "answer": "unless",
        "why": "unless = if not. «Не сдашь, ЕСЛИ НЕ будешь учиться» = unless you study. 💛",
        "hint": "«Если не» одним словом — условие-исключение. Подставь слово, которое уже содержит в себе отрицание. 🙂"
      },
      {
        "type": "choice",
        "q": "You can borrow my car ___ you bring it back by six.",
        "opts": [
          "provided that",
          "unless",
          "in case",
          "even if"
        ],
        "answer": "provided that",
        "why": "Условие-требование «при условии, что» → provided (that) / as long as.",
        "hint": "Ты ставишь УСЛОВИЕ-требование «но только если вернёшь к шести». Нужен оборот «при условии, что». 🚗"
      },
      {
        "type": "choice",
        "q": "If I ___ the train this morning, I would be at home now. <i style=\"opacity:.6\">(not miss)</i>",
        "opts": [
          "hadn't missed",
          "didn't miss",
          "wouldn't miss",
          "haven't missed"
        ],
        "answer": "hadn't missed",
        "why": "Смешанное условие: причина в прошлом (if + past perfect) → результат сейчас (would + база).",
        "hint": "Причина в прошлом (опоздал на поезд), а результат сейчас (был бы дома). В if-части нужен Past Perfect: had + третья форма. 🚉"
      },
      {
        "type": "gap",
        "q": "If she weren't so shy, she ___ him out long ago. <i style=\"opacity:.6\">(ask)</i>",
        "accept": [
          "would have asked",
          "wouldve asked",
          "would've asked"
        ],
        "model": "would have asked",
        "why": "Смешанное условие наоборот: свойство сейчас (if + past simple) → результат в прошлом (would have + V3).",
        "hint": "Свойство характера сейчас (она стеснительная), а результат — в прошлом (давно бы пригласила). В главной части нужен would have + третья форма. 🙂"
      },
      {
        "type": "choice",
        "q": "I'd rather you ___ smoke in here, if you don't mind.",
        "opts": [
          "didn't",
          "don't",
          "not",
          "wouldn't"
        ],
        "answer": "didn't",
        "why": "would rather + ДРУГОЕ лицо → прошедшее время: I'd rather you didn't.",
        "hint": "«Я бы предпочёл, чтобы ТЫ не…». Когда речь о другом человеке, после would rather идёт прошедшее время. 🚭"
      },
      {
        "type": "choice",
        "q": "You ___ see a doctor — that cough sounds really bad.",
        "opts": [
          "had better",
          "would rather",
          "would better",
          "had rather"
        ],
        "answer": "had better",
        "why": "Настоятельный совет с оттенком предупреждения → had better + база.",
        "hint": "Настоятельный совет «лучше бы тебе…» с лёгкой угрозой последствий — это устойчивое had better + чистый глагол. 🩺"
      },
      {
        "type": "gap",
        "q": "It's almost midnight. It's time we ___ home. <i style=\"opacity:.6\">(go)</i>",
        "accept": [
          "went"
        ],
        "model": "went",
        "why": "it's time + подлежащее → глагол в ПРОШЕДШЕМ (it's time we went), хотя смысл о настоящем.",
        "hint": "После «it's time + we» глагол ставится в ПРОШЕДШЕМ времени, хотя речь о том, что пора сделать прямо сейчас. ⏰"
      },
      {
        "type": "choice",
        "q": "This time tomorrow I ___ on a beach in Spain.",
        "opts": [
          "will be lying",
          "will lie",
          "am lying",
          "will have lain"
        ],
        "answer": "will be lying",
        "why": "Процесс В конкретный момент будущего → Future Continuous: will be + -ing.",
        "hint": "«В это же время завтра» — действие будет ИДТИ в определённый момент будущего. Для процесса нужен will be + …-ing. 🏖️"
      },
      {
        "type": "choice",
        "q": "By 2030 they ___ the new bridge across the river.",
        "opts": [
          "will have built",
          "will build",
          "will be building",
          "have built"
        ],
        "answer": "will have built",
        "why": "Завершено К моменту в будущем → Future Perfect: will have + V3.",
        "hint": "«К 2030 году» действие будет уже ЗАВЕРШЕНО. Для результата к сроку в будущем нужен will have + третья форма. 🌉"
      },
      {
        "type": "choice",
        "q": "It was ___ a boring film that we left after twenty minutes.",
        "opts": [
          "such",
          "so",
          "too",
          "very"
        ],
        "answer": "such",
        "why": "such (a) + прилагательное + СУЩЕСТВИТЕЛЬНОЕ: such a boring film. (so — только перед одним прилагательным.)",
        "hint": "Перед связкой «прилагательное + существительное» (boring film) ставится such (a), а so дружит только с одним прилагательным. 🎬"
      },
      {
        "type": "trRE",
        "ru": "Эта сумка слишком тяжёлая, чтобы её нести.",
        "accept": [
          "this bag is too heavy to carry",
          "the bag is too heavy to carry",
          "this bag is too heavy to lift",
          "this bag is too heavy for me to carry"
        ],
        "model": "This bag is too heavy to carry.",
        "hint": "«слишком … чтобы …» = too + прилагательное + to + глагол. Словечко too встаёт ПЕРЕД прилагательным. 🛍️"
      },
      {
        "type": "trER",
        "en": "Will you be using the car tonight?",
        "accept": [
          "ты будешь пользоваться машиной сегодня вечером",
          "ты будешь использовать машину сегодня вечером",
          "вы будете пользоваться машиной сегодня вечером",
          "ты будешь брать машину сегодня вечером",
          "будешь пользоваться машиной сегодня вечером",
          "ты будешь пользоваться машиной вечером"
        ],
        "model": "Ты будешь пользоваться машиной сегодня вечером?",
        "hint": "Future Continuous (will be + -ing) здесь — вежливый вопрос о планах. Переведи обычным будущим «будешь пользоваться…?». 🚙"
      },
      {
        "type": "order",
        "answer": "if i had saved money i would be rich now",
        "accept": [
          "if i had saved money i would be rich now",
          "i would be rich now if i had saved money"
        ],
        "hintRu": "Скажи по-английски: «Если бы я копил деньги, я был бы богат сейчас».",
        "hint": "Прошлая причина (if + had + третья форма) ведёт к результату СЕЙЧАС (would + чистый глагол + now). 💰"
      },
      {
        "type": "match",
        "q": "Соедини русскую подсказку с английским союзом условия.",
        "pairs": [
          [
            "если не…",
            "unless"
          ],
          [
            "при условии…",
            "provided"
          ],
          [
            "на случай…",
            "in case"
          ],
          [
            "пока / покуда…",
            "as long as"
          ],
          [
            "даже если…",
            "even if"
          ]
        ],
        "hint": "Соедини смысл с союзом: «если не» → …, «при условии» → …, «на случай» → …, «пока» → … 🙂"
      },
      {
        "type": "describe",
        "img": "img/b2/day-11.jpg",
        "prompt": "Представь своё завтра. Что ты будешь делать и что уже закончишь к вечеру? Напиши 2–3 предложения, используя Future Continuous (will be …-ing) и Future Perfect (will have + 3-я форма).",
        "keywords": [
          "will be",
          "will have",
          "tomorrow",
          "working",
          "studying",
          "by",
          "finished",
          "done",
          "morning",
          "evening",
          "this time",
          "meeting",
          "relaxing"
        ],
        "minWords": 12,
        "model": "This time tomorrow I will be working at my desk. By the evening I will have finished the report and answered all my emails. After that I will be relaxing at home.",
        "hint": "Опиши завтрашний день: процесс в моменте — will be + …-ing, а что закончишь к сроку — will have + третья форма. 🗓️"
      },
      {
        "type": "choice",
        "q": "He isn't experienced ___ to manage the whole team on his own.",
        "opts": [
          "enough",
          "too",
          "so",
          "such"
        ],
        "answer": "enough",
        "why": "enough стоит ПОСЛЕ прилагательного (experienced enough), а too — перед ним. «Недостаточно опытен, чтобы…» = isn't experienced enough to…",
        "hint": "После прилагательного (experienced) для значения «достаточно» идёт enough. Не хватает опыта → isn't … enough to. 🙂"
      },
      {
        "type": "choice",
        "q": "Don't worry — I'll definitely have sent you the report ___ Monday morning.",
        "opts": [
          "by",
          "until",
          "till",
          "for"
        ],
        "answer": "by",
        "why": "«К понедельнику» — это крайний СРОК для завершённого действия → by. until/till означают «вплоть до» (длительность), а не точку-дедлайн.",
        "hint": "Нужен предлог крайнего срока «к понедельнику», а не «вплоть до». Для дедлайна с Future Perfect берут by. 📅"
      },
      {
        "type": "gap",
        "q": "Relax — by the time you get here, I ___ everything, so you won't need to help. <i style=\"opacity:.6\">(finish)</i>",
        "accept": [
          "will have finished",
          "ill have finished",
          "will have finished everything"
        ],
        "model": "will have finished",
        "why": "К будущему моменту («by the time you get here») работа будет уже ЗАВЕРШЕНА (тебе не придётся помогать) → Future Perfect: will have + третья форма.",
        "hint": "К моменту твоего прихода дело будет уже сделано — поэтому помощь не нужна. Для завершённости к сроку берут will have + третья форма. ✅"
      },
      {
        "type": "gap",
        "q": "The music at the party was ___ loud that we couldn't hear each other. <i style=\"opacity:.6\">(so / such)</i>",
        "accept": [
          "so"
        ],
        "model": "so",
        "why": "Перед одиночным прилагательным (loud) в конструкции «…, что …» ставится so … that. such требует существительного (such loud music).",
        "hint": "Перед одним прилагательным (loud) для «такой …, что …» нужен so, а не such. 🔊"
      },
      {
        "type": "trRE",
        "ru": "Если бы я не потратил все деньги, я бы сейчас не сидел без гроша. <i style=\"opacity:.6\">(смешанное условие)</i>",
        "accept": [
          "if i hadnt spent all my money i wouldnt be broke now",
          "if i hadnt spent all my money i wouldnt be penniless now",
          "if i had not spent all my money i would not be broke now",
          "if i hadnt spent all my money i wouldnt be skint now",
          "if i hadnt wasted all my money i wouldnt be broke now",
          "if i hadnt spent all my money i wouldnt be broke right now"
        ],
        "model": "If I hadn't spent all my money, I wouldn't be broke now.",
        "hint": "Причина в прошлом (if + had + третья форма), а результат СЕЙЧАС (would + чистый глагол + now) — смешанное условие. 💸"
      },
      {
        "type": "trRE",
        "ru": "Тебе лучше извиниться, пока не поздно.",
        "accept": [
          "youd better apologise before its too late",
          "you had better apologise before its too late",
          "youd better apologize before its too late",
          "you had better apologize before its too late",
          "youd better say sorry before its too late",
          "you had better say sorry before its too late"
        ],
        "model": "You'd better apologise before it's too late.",
        "hint": "«Тебе лучше…» с оттенком предупреждения = had better + чистый глагол. 🙂"
      },
      {
        "type": "trER",
        "en": "By next summer they will have been married for twenty years.",
        "accept": [
          "к следующему лету они будут женаты двадцать лет",
          "к следующему лету они будут в браке двадцать лет",
          "они будут женаты двадцать лет к следующему лету",
          "к следующему лету они проживут в браке двадцать лет",
          "к следующему лету они будут женаты уже двадцать лет",
          "к следующему лету они будут в браке уже двадцать лет"
        ],
        "model": "К следующему лету они будут женаты двадцать лет.",
        "hint": "will have + третья форма — итог К будущему сроку. Переведи «к следующему лету … будут …». 💍"
      },
      {
        "type": "order",
        "answer": "you can stay out late as long as you call me",
        "accept": [
          "you can stay out late as long as you call me",
          "as long as you call me you can stay out late"
        ],
        "hintRu": "Скажи по-английски: «Можешь гулять допоздна, при условии что позвонишь мне».",
        "hint": "Условие-разрешение «при условии, что / пока» = as long as + придаточное. 🌆"
      },
      {
        "type": "match",
        "q": "Соедини пример с нужным словом: so / such / too / enough.",
        "pairs": [
          [
            "… tired that I fell asleep",
            "so"
          ],
          [
            "… a mess that we cleaned for hours",
            "such"
          ],
          [
            "… late to catch the train",
            "too"
          ],
          [
            "fast … to win the race",
            "enough"
          ]
        ],
        "hint": "so + одно прилагательное · such + (a) + существительное · too + прил. + to · прилагательное + enough + to. 🙂"
      },
      {
        "type": "describe",
        "img": "img/b2/day-10.jpg",
        "prompt": "Дай другу совет и поставь пару условий для этой ситуации. Напиши 3–4 предложения, используя unless, provided that / as long as, in case и had better.",
        "keywords": [
          "unless",
          "provided",
          "as long as",
          "in case",
          "had better",
          "you'd better",
          "youd better",
          "should",
          "if",
          "otherwise",
          "make sure",
          "as long"
        ],
        "minWords": 14,
        "model": "You'd better leave early unless you want to miss the train. You can borrow my umbrella, provided that you give it back. Take some cash in case the card machine isn't working. As long as you call me when you arrive, I won't worry.",
        "hint": "Смешай условия и совет: unless (если не), provided that / as long as (при условии), in case (на случай) и had better (лучше сделай). 🙂"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Неделя 3 — залог, безличность и сложные обороты. Проверим: продвинутый пассив (включая модальный и get-passive), безличный репортинг (It is said that…), личный репортинг (He is said to…), каузатив (have/get sth done), причастные обороты (в том числе свёрнутый пассив «Built in 1850, …») и относительные придаточные (в том числе «предлог + which»). Заданий стало больше — под проверку попал каждый день недели. Нужно 80%, чтобы открыть финальную Неделю 4. 💛",
    "review": [
      "Пассив везде: <b>be + V3</b> во всех временах · модальный <b>must be done / could have been done</b> · разговорный <b>get-passive</b>",
      "Безлично: <b>It is said / believed / thought that</b> + clause",
      "Лично: <b>He is said to be…</b> (сейчас) · <b>to have + V3</b> (раньше)",
      "Каузатив: <b>have / get + объект + V3</b> (услугу сделал другой)",
      "Причастия: <b>-ing</b> (active) · <b>-ed</b> (passive) · <b>having + V3</b> (раньше)",
      "Relative: non-defining (с запятыми) · <b>reduced</b> (the woman sitting there)",
      "Причастия: <b>Built in 1850, …</b> (свёрнутый пассив) · <b>Not knowing…, …</b> (отрицание)",
      "Формально: <b>предлог + which/whom</b> (the report from which…) · who (человек) · which (предмет)"
    ],
    "q": [
      {
        "type": "choice",
        "q": "The road ___ — look, it's perfectly smooth now. <i style=\"opacity:.6\">(repair)</i>",
        "opts": [
          "has been repaired",
          "has repaired",
          "is repairing",
          "was repair"
        ],
        "answer": "has been repaired",
        "why": "Действие над дорогой уже сделано к настоящему → пассив в Present Perfect: has been + V3. 💛",
        "hint": "Дорогу не сама себя починила, и результат виден сейчас. Пассив в Present Perfect строится как has been + третья форма. 🛣️"
      },
      {
        "type": "choice",
        "q": "This report ___ by Friday — no excuses. <i style=\"opacity:.6\">(must / finish)</i>",
        "opts": [
          "must be finished",
          "must finish",
          "must been finished",
          "must have finished"
        ],
        "answer": "must be finished",
        "why": "Модальный пассив: модал + be + V3 → must be finished.",
        "hint": "Отчёт не сам себя делает (пассив) плюс есть обязанность. Нужен модал + be + третья форма. 🗂️"
      },
      {
        "type": "choice",
        "q": "The window is broken — it ___ by the storm last night. <i style=\"opacity:.6\">(could / break)</i>",
        "opts": [
          "could have been broken",
          "could have broken",
          "could be broken",
          "could broken"
        ],
        "answer": "could have been broken",
        "why": "Предположение о прошлом + пассив (окно не само разбилось) → could have been + V3.",
        "hint": "Догадка о прошлом плюс пассив. Формула: модал + have been + третья форма. 🌬️"
      },
      {
        "type": "gap",
        "q": "I ___ yesterday, so let's celebrate tonight! <i style=\"opacity:.6\">(get / pay)</i>",
        "accept": [
          "got paid"
        ],
        "model": "got paid",
        "why": "Разговорный get-пассив: get + V3 → got paid (мне заплатили).",
        "hint": "В разговорном пассиве вместо was/were берут get. «Мне заплатили» = got + третья форма глагола pay. 💸"
      },
      {
        "type": "choice",
        "q": "It ___ that the company is losing a lot of money.",
        "opts": [
          "is said",
          "says",
          "is saying",
          "said"
        ],
        "answer": "is said",
        "why": "Безличный репортинг: It is said / believed / thought that + clause.",
        "hint": "Безличное «говорят, что…» начинается с It + пассив глагола say: It ___ that… 🙂"
      },
      {
        "type": "choice",
        "q": "He is said ___ one of the richest men in the country.",
        "opts": [
          "to be",
          "to being",
          "being",
          "that he is"
        ],
        "answer": "to be",
        "why": "Личный репортинг (одновременность): He is said TO + инфинитив.",
        "hint": "После «He is said» идёт инфинитив с to. Богат он СЕЙЧАС (одновременно), поэтому простой to be. 🙂"
      },
      {
        "type": "gap",
        "q": "She is believed ___ the country last year. <i style=\"opacity:.6\">(leave)</i>",
        "accept": [
          "to have left"
        ],
        "model": "to have left",
        "why": "Предшествование в личном репортинге: to have + V3 (уехала РАНЬШЕ, чем о ней говорят сейчас).",
        "hint": "Действие случилось РАНЬШЕ момента речи. После «is believed» для предшествования нужен to have + третья форма. ✈️"
      },
      {
        "type": "choice",
        "q": "My car was filthy, so I ___ at the garage yesterday. <i style=\"opacity:.6\">(мыли за тебя, в сервисе)</i>",
        "opts": [
          "had it washed",
          "washed it",
          "have washed it",
          "had washed it"
        ],
        "answer": "had it washed",
        "why": "Каузатив: услугу сделал ДРУГОЙ → have + объект + V3 (had it washed).",
        "hint": "Машину помыл не ты сам, а кто-то для тебя. Каузатив: had + объект (it) + третья форма. 🚗"
      },
      {
        "type": "trRE",
        "ru": "Мне нужно подстричься. <i style=\"opacity:.6\">(стрижёт парикмахер, не сам)</i>",
        "accept": [
          "i need to get my hair cut",
          "i need to have my hair cut",
          "i need to get a haircut",
          "i have to get my hair cut",
          "i need to have a haircut"
        ],
        "model": "I need to get my hair cut.",
        "hint": "Стрижёт тебя другой человек — это каузатив: get/have + my hair + cut (третья форма cut совпадает с базой). 💇"
      },
      {
        "type": "gap",
        "q": "___ his work, he switched off the computer and went home. <i style=\"opacity:.6\">(finish — причастный оборот)</i>",
        "accept": [
          "having finished"
        ],
        "model": "Having finished",
        "why": "Перфектный причастный оборот: having + V3 (действие раньше второго).",
        "hint": "Сначала закончил работу, ПОТОМ ушёл. Для более раннего действия в причастном обороте нужен having + третья форма. 🙂"
      },
      {
        "type": "choice",
        "q": "He passed the exam, ___ surprised absolutely everyone.",
        "opts": [
          "which",
          "that",
          "what",
          "who"
        ],
        "answer": "which",
        "why": "which комментирует ВСЁ предложение в non-defining (после запятой). that/what так нельзя.",
        "hint": "Запятая + относительное слово, комментирующее всю ситуацию (а не одно существительное). Здесь нельзя that — нужен … 🙂"
      },
      {
        "type": "trER",
        "en": "It is believed that he lives abroad.",
        "accept": [
          "считается что он живёт за границей",
          "считается, что он живёт за границей",
          "полагают что он живёт за границей",
          "полагают, что он живёт за границей",
          "думают что он живёт за границей"
        ],
        "model": "Считается, что он живёт за границей.",
        "hint": "«It is believed that…» — безличный оборот «считается / полагают, что…». Переведи безличным «считается, что он…». 🌍"
      },
      {
        "type": "order",
        "answer": "the woman sitting next to me was crying",
        "accept": [
          "the woman sitting next to me was crying"
        ],
        "hintRu": "Скажи по-английски: «Женщина, сидевшая рядом со мной, плакала».",
        "hint": "«Женщина, которая сидела…» сжимается до причастия: the woman + sitting (без who was) + остальное + сказуемое. 😢"
      },
      {
        "type": "match",
        "q": "Соедини картинку с 3-й формой (V3) — она нужна для пассива и каузатива.",
        "pairs": [
          [
            "✂️",
            "cut"
          ],
          [
            "🔨",
            "built"
          ],
          [
            "🎨",
            "painted"
          ],
          [
            "📷",
            "taken"
          ],
          [
            "✍️",
            "written"
          ]
        ],
        "hint": "Все слова — третья форма (V3): cut→…, build→…, paint→…, take→…, write→… Эти формы идут после be / have it … 🙂"
      },
      {
        "type": "describe",
        "img": "img/b2/day-18.jpg",
        "prompt": "Опиши, какие услуги человек заказывает у мастеров. Напиши 2–3 предложения, используя каузатив have / get + объект + 3-я форма (had her car repaired, getting her hair cut).",
        "keywords": [
          "had",
          "got",
          "have",
          "get",
          "getting",
          "done",
          "cut",
          "repaired",
          "fixed",
          "cleaned",
          "painted",
          "hair",
          "car",
          "checked",
          "delivered"
        ],
        "minWords": 12,
        "model": "She is getting her hair cut at the salon. Yesterday she had her car repaired and her windows cleaned. Next week she is going to have a new kitchen fitted.",
        "hint": "Опиши услуги, которые делают ДЛЯ человека другие: have/get + объект + третья форма (had her car repaired, getting her hair cut). 🛠️"
      },
      {
        "type": "choice",
        "q": "___ in 1850, the house is now one of the city's museums. <i style=\"opacity:.6\">(build — свёрнутый оборот)</i>",
        "opts": [
          "Built",
          "Building",
          "Having built",
          "Build"
        ],
        "answer": "Built",
        "why": "Дом построили (пассив), поэтому нужно причастие прошедшего времени: Built in 1850, the house… Активное -ing невозможно — дом не строит сам.",
        "hint": "Дом не строил сам — его построили. Для свёрнутого пассива берут причастие с -ed / третью форму: Built… 🏛️"
      },
      {
        "type": "choice",
        "q": "This is the old report ___ these figures were originally taken. <i style=\"opacity:.6\">(формальный relative)</i>",
        "opts": [
          "from which",
          "which from",
          "that from",
          "from that"
        ],
        "answer": "from which",
        "why": "В формальном relative предлог уезжает ВПЕРЁД перед which: the report from which… После предлога нельзя that — только which/whom.",
        "hint": "Предлог (from) встаёт ПЕРЕД относительным словом, а после предлога идёт только which (не that): … from which … 📄"
      },
      {
        "type": "choice",
        "q": "It is reported that the fire ___ by a lightning strike last night. <i style=\"opacity:.6\">(cause)</i>",
        "opts": [
          "was caused",
          "is caused",
          "has caused",
          "caused"
        ],
        "answer": "was caused",
        "why": "Пожар не сам себя вызвал (пассив) + прошлое («last night») → was caused by. Внутри «It is reported that…» придаточное живёт своим временем.",
        "hint": "Смотри на само событие: пожар ВЫЗВАЛИ (пассив) и это было ночью (прошлое) → was + третья форма. 🔥"
      },
      {
        "type": "gap",
        "q": "He is known ___ abroad for many years before returning home. <i style=\"opacity:.6\">(live)</i>",
        "accept": [
          "to have lived",
          "to have been living"
        ],
        "model": "to have lived",
        "why": "Действие было РАНЬШЕ момента речи («before returning») → после «is known» нужен перфектный инфинитив: to have + третья форма.",
        "hint": "Он жил там РАНЬШЕ, до возвращения. Для предшествования после is known берут to have + третью форму. 🌍"
      },
      {
        "type": "trRE",
        "ru": "Говорят, что новый закон вступит в силу в июне.",
        "accept": [
          "it is said that the new law will come into force in june",
          "it is said that the new law will take effect in june",
          "its said that the new law will come into force in june",
          "people say that the new law will come into force in june",
          "it is said the new law will come into force in june",
          "it is said that the new law comes into force in june"
        ],
        "model": "It is said that the new law will come into force in June.",
        "hint": "Безлично «говорят, что…» = It is said that… + придаточное со своим временем. ⚖️"
      },
      {
        "type": "trRE",
        "ru": "Не зная, что сказать, он промолчал. <i style=\"opacity:.6\">(причастный оборот)</i>",
        "accept": [
          "not knowing what to say he kept silent",
          "not knowing what to say he stayed silent",
          "not knowing what to say he said nothing",
          "not knowing what to say he remained silent",
          "not knowing what to say he was silent",
          "not knowing what to say he kept quiet"
        ],
        "model": "Not knowing what to say, he kept silent.",
        "hint": "Причастие вместо «так как не знал…»: Not knowing what to say, … Отрицание — Not перед причастием. 🤐"
      },
      {
        "type": "trER",
        "en": "He is believed to have left the country.",
        "accept": [
          "полагают что он покинул страну",
          "считается что он покинул страну",
          "полагают что он уехал из страны",
          "считается что он уехал из страны",
          "думают что он уехал из страны",
          "его считают покинувшим страну",
          "полагают что он уехал за границу"
        ],
        "model": "Полагают, что он покинул страну.",
        "hint": "Личный репортинг с предшествованием: to have + третья форма = действие РАНЬШЕ. Переведи «полагают, что он …». 🌍"
      },
      {
        "type": "order",
        "answer": "she is said to be the best lawyer in town",
        "accept": [
          "she is said to be the best lawyer in town"
        ],
        "hintRu": "Скажи по-английски: «Говорят, она лучший адвокат в городе».",
        "hint": "Личный репортинг: подлежащее + is said + to be… (о том, что верно СЕЙЧАС). ⚖️"
      },
      {
        "type": "match",
        "q": "Соедини относительное слово с его назначением.",
        "pairs": [
          [
            "who",
            "о человеке"
          ],
          [
            "which",
            "о предмете"
          ],
          [
            "whose",
            "чей — принадлежность"
          ],
          [
            "where",
            "о месте"
          ],
          [
            "when",
            "о времени"
          ]
        ],
        "hint": "who — о человеке, which — о предмете, whose — принадлежность, where — о месте, when — о времени. 🙂"
      },
      {
        "type": "describe",
        "img": "img/b2/day-16.jpg",
        "prompt": "Опиши эту сцену так, будто пишешь новостную заметку: что было сделано и что о происшествии говорят. Напиши 3–4 предложения, используя пассив (be + третья форма) и безличный репортинг (It is said / reported / believed that…).",
        "keywords": [
          "is said",
          "is reported",
          "is believed",
          "it is",
          "was",
          "were",
          "been",
          "by",
          "according to",
          "thought",
          "claimed",
          "damaged",
          "built",
          "found",
          "injured",
          "has been"
        ],
        "minWords": 14,
        "model": "The building was damaged in a fire last night. It is reported that the blaze was started by an electrical fault. No one was injured, and the area has been closed to the public. It is believed that repairs will take months.",
        "hint": "Пиши как в новостях: что СДЕЛАНО — пассив (be + третья форма), а что ГОВОРЯТ — It is said / reported / believed that… 📰"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен B2",
    "intro": "Это финал B2! 🏆 Последний экзамен — по Неделе 4 (reporting verbs, cleft sentences, инверсия hardly/no sooner, not only / little did I, эмфатическое do/did, discourse markers, коллокации и фразовые глаголы) И по всему уровню сразу: narrative tenses, Past Perfect Continuous, дедукцию о прошлом, conditionals, пассив и репортинг, каузатив, причастия и relative — материал всех тридцати дней уровня. Сдай — и ты официально на пороге C1. Вперёд! 💛",
    "review": [
      "Reporting verbs: <b>refuse/offer/promise + to do</b> · <b>admit/deny/suggest + -ing</b> · <b>warn sb (not) to do</b>",
      "Cleft: <b>It was X that/who…</b> · <b>What I need is…</b> · <b>All I want is…</b>",
      "Инверсия: <b>Hardly had I… when</b> · <b>No sooner had I… than</b> · <b>Little did I know</b> · <b>Not only was he…</b>",
      "Эмфаза: <b>I do like it</b> · <b>She did call</b>",
      "Discourse: <b>nevertheless / however / whereas / on the contrary</b>",
      "Коллокации: <b>make a decision · do research · pay attention</b> · Phrasal: <b>put up with · look forward to · run out of</b>",
      "Повторение уровня: narrative + <b>Past Perfect Continuous</b>, дедукция <b>must/can't/might have</b>, <b>mixed conditionals</b>, пассив и каузатив",
      "Репортинг: <b>It is said that…</b> / <b>He is believed to have + V3</b> · so/such/too/enough · <b>предлог + which</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "She suggested ___ a taxi instead of waiting for the bus.",
        "opts": [
          "taking",
          "to take",
          "take",
          "that taking"
        ],
        "answer": "taking",
        "why": "suggest + -ing (или suggest that we take). «suggest to do» в английском НЕ бывает. 💛",
        "hint": "После suggest нельзя «to do». Нужен либо …-ing, либо «that we…». Здесь выбери форму с -ing. 🚕"
      },
      {
        "type": "choice",
        "q": "He firmly refused ___ the document.",
        "opts": [
          "to sign",
          "signing",
          "sign",
          "signed"
        ],
        "answer": "to sign",
        "why": "refuse + TO do. (offer, promise, refuse, agree → to-infinitive.)",
        "hint": "refuse строится с инфинитивом: refuse + to + глагол. ✍️"
      },
      {
        "type": "gap",
        "q": "The sign warns people ___ in the lake. <i style=\"opacity:.6\">(not / swim)</i>",
        "accept": [
          "not to swim"
        ],
        "model": "not to swim",
        "why": "warn somebody (not) to do → warn people not to swim.",
        "hint": "warn + кого + (not) to do. Чтобы запретить, поставь not ПЕРЕД to: not to swim. 🏊"
      },
      {
        "type": "choice",
        "q": "___ John who broke the window, not me!",
        "opts": [
          "It was",
          "That was",
          "There was",
          "He was"
        ],
        "answer": "It was",
        "why": "Расщеплённое (cleft) предложение для акцента: It was John who/that… выделяет «именно Джон».",
        "hint": "Чтобы выделить «именно Джон», начни с It was + Джон + who… Ищи начало «It …». 🪟"
      },
      {
        "type": "choice",
        "q": "___ had I sat down when the phone rang.",
        "opts": [
          "Hardly",
          "No sooner",
          "Never",
          "Seldom"
        ],
        "answer": "Hardly",
        "why": "Hardly had I… WHEN… (а No sooner had I… THAN…). Хвост «when» → Hardly. После него инверсия had I.",
        "hint": "С хвостом «…when…» работает наречие Hardly (а No sooner требует than). После него идёт инверсия had I… ⏱️"
      },
      {
        "type": "gap",
        "q": "No sooner ___ than it started to pour with rain. <i style=\"opacity:.6\">(I / arrive)</i>",
        "accept": [
          "had i arrived"
        ],
        "model": "had I arrived",
        "why": "No sooner had + подлежащее + V3 + than… Инверсия: had встаёт перед I.",
        "hint": "После «No sooner» идёт инверсия: вспомогательный had ПЕРЕД подлежащим, глагол — в третьей форме: had I … 🌧️"
      },
      {
        "type": "choice",
        "q": "___ did I know that my whole life was about to change.",
        "opts": [
          "Little",
          "Few",
          "Small",
          "Less"
        ],
        "answer": "Little",
        "why": "Эмфатическая инверсия: Little did I know… = «я и не подозревал».",
        "hint": "Устойчивое «я и не подозревал» = Little did I know… Выбери слово, запускающее инверсию did I. 🙂"
      },
      {
        "type": "choice",
        "q": "Not only ___ late, but he also forgot the tickets.",
        "opts": [
          "was he",
          "he was",
          "did he",
          "he did"
        ],
        "answer": "was he",
        "why": "После Not only в начале — инверсия: Not only was he late, but he also…",
        "hint": "«Not only» в начале требует инверсии: глагол be встаёт ПЕРЕД подлежащим — was he… 🎟️"
      },
      {
        "type": "choice",
        "q": "I ___ tell you about the risk, but you didn't listen!",
        "opts": [
          "did",
          "do",
          "have",
          "was"
        ],
        "answer": "did",
        "why": "Эмфатическое did + база для усиления: I DID tell you (я ведь правда говорил).",
        "hint": "Чтобы подчеркнуть «я ВЕДЬ правда говорил» в прошлом, добавь усилитель did перед чистым глаголом. 🙂"
      },
      {
        "type": "choice",
        "q": "Tom is incredibly tidy, ___ his brother is really messy.",
        "opts": [
          "whereas",
          "nevertheless",
          "therefore",
          "in case"
        ],
        "answer": "whereas",
        "why": "whereas = тогда как (противопоставление двух фактов в одном предложении).",
        "hint": "Нужен союз противопоставления «тогда как / в то время как» для контраста двух людей. 🙂"
      },
      {
        "type": "choice",
        "q": "This bridge ___ in 1900. <i style=\"opacity:.6\">(повторение: пассив)</i>",
        "opts": [
          "was built",
          "built",
          "was build",
          "has built"
        ],
        "answer": "was built",
        "why": "Пассив в Past Simple: was/were + V3 → was built (мост построили).",
        "hint": "Мост не сам себя построил — нужен пассив в прошлом: was + третья форма глагола build. 🌉"
      },
      {
        "type": "choice",
        "q": "I need to ___ a decision before Friday.",
        "opts": [
          "make",
          "do",
          "give",
          "have"
        ],
        "answer": "make",
        "why": "Коллокация make a decision (НЕ «do a decision»).",
        "hint": "«Принять решение» по-английски — это коллокация с make, а не do. 🙂"
      },
      {
        "type": "choice",
        "q": "I can't ___ this noise any longer — it's driving me mad!",
        "opts": [
          "put up with",
          "put up",
          "put with",
          "look up with"
        ],
        "answer": "put up with",
        "why": "put up with = терпеть, мириться с (фразовый из трёх частей, неразделяемый).",
        "hint": "«Терпеть, мириться с» — фразовый глагол из трёх частей put … … with; дополнение идёт ПОСЛЕ всего оборота. 🙂"
      },
      {
        "type": "gap",
        "q": "I'm really looking forward ___ you next week. <i style=\"opacity:.6\">(meet)</i>",
        "accept": [
          "to meeting"
        ],
        "model": "to meeting",
        "why": "look forward TO + -ing: здесь to — это предлог, поэтому глагол в форме -ing.",
        "hint": "В «look forward to» частица to — это ПРЕДЛОГ, поэтому после неё глагол идёт в форме …-ing: to meeting. 🙂"
      },
      {
        "type": "trRE",
        "ru": "Именно её совет помог мне. <i style=\"opacity:.6\">(cleft)</i>",
        "accept": [
          "it was her advice that helped me",
          "it was her advice which helped me",
          "it was her advice that really helped me"
        ],
        "model": "It was her advice that helped me.",
        "hint": "Выделяем «именно её совет»: It was + her advice + that + helped me. 🙂"
      },
      {
        "type": "order",
        "answer": "no sooner had we left than it started to rain",
        "accept": [
          "no sooner had we left than it started to rain"
        ],
        "hintRu": "Скажи по-английски: «Не успели мы выйти, как начался дождь».",
        "hint": "«Не успели…, как…» = No sooner + инверсия had we left + than + второе действие. ⛈️"
      },
      {
        "type": "match",
        "q": "Соедини существительное с глаголом-партнёром (коллокации B2).",
        "pairs": [
          [
            "… a decision",
            "make"
          ],
          [
            "… research",
            "do"
          ],
          [
            "… a break",
            "take"
          ],
          [
            "… a shower",
            "have"
          ],
          [
            "… attention",
            "pay"
          ]
        ],
        "hint": "Подбери глагол-партнёр: decision → …, research → …, break → …, shower → …, attention → … 🙂"
      },
      {
        "type": "trER",
        "en": "I wish I had listened to you. <i style=\"opacity:.6\">(повторение: wish + past perfect)</i>",
        "accept": [
          "жаль что я тебя не послушал",
          "жаль, что я тебя не послушал",
          "жаль что я тебя не послушала",
          "жаль, что я тебя не послушала",
          "жаль что я вас не послушал",
          "жаль что я вас не послушала",
          "жаль что не послушал тебя",
          "жаль что я не послушал тебя"
        ],
        "model": "Жаль, что я тебя не послушал.",
        "hint": "«I wish I had + V3» — сожаление о прошлом. Ловушка: утвердительное had listened по-русски становится «не послушал». 🙂"
      },
      {
        "type": "choice",
        "q": "If I had taken that job, I ___ in London now. <i style=\"opacity:.6\">(повторение: mixed conditional)</i>",
        "opts": [
          "would be living",
          "would have lived",
          "will be living",
          "had been living"
        ],
        "answer": "would be living",
        "why": "Смешанное условие: причина в прошлом (if + past perfect) → результат СЕЙЧАС (would + база): would be living now.",
        "hint": "Причина в прошлом (взял бы работу), а результат сейчас (жил бы в Лондоне now). В главной части нужен would + чистый глагол. 🏙️"
      },
      {
        "type": "describe",
        "img": "img/b2/day-29.jpg",
        "prompt": "Расскажи о своей жизни сейчас и о планах, используя минимум 3 фразовых глагола B2 (look forward to, get on with, put up with, come up with, run out of). Напиши 3–4 предложения.",
        "keywords": [
          "look forward to",
          "looking forward",
          "get on with",
          "get on well",
          "put up with",
          "come up with",
          "run out of",
          "ideas",
          "plans",
          "colleagues",
          "future",
          "c1",
          "learning"
        ],
        "minWords": 14,
        "model": "I'm really looking forward to starting C1. I get on well with my classmates, and we often come up with new ideas together. Sometimes I have to put up with a noisy office, but I never run out of motivation to learn English.",
        "hint": "Вставь 3–4 фразовых глагола B2 в рассказ о себе: look forward to + …-ing, get on with, put up with, come up with, run out of. 🚀"
      },
      {
        "type": "choice",
        "q": "The office is empty and all the lights are off — everyone ___ home already. <i style=\"opacity:.6\">(дедукция)</i>",
        "opts": [
          "must have gone",
          "can't have gone",
          "should have gone",
          "must go"
        ],
        "answer": "must have gone",
        "why": "Пустой офис и погашенный свет — уверенный вывод о прошлом: must have + третья форма. can't have (уверен, что нет) и should have (упрёк) сюда не годятся.",
        "hint": "Улики налицо и ты почти уверен → must have + третья форма. 🏢"
      },
      {
        "type": "choice",
        "q": "I'll never forget ___ my daughter for the very first time.",
        "opts": [
          "holding",
          "to hold",
          "hold",
          "held"
        ],
        "answer": "holding",
        "why": "forget + -ing = яркое ВОСПОМИНАНИЕ («никогда не забуду, как держал»). forget + to do значило бы «не сделать» — но речь о первом разе в прошлом.",
        "hint": "Речь о незабываемом воспоминании из прошлого. После forget в этом смысле идёт …-ing. 👶"
      },
      {
        "type": "gap",
        "q": "I don't cut my own hair — I ___ at a salon every month. <i style=\"opacity:.6\">(have / it / cut)</i>",
        "accept": [
          "have it cut",
          "get it cut"
        ],
        "model": "have it cut",
        "why": "Услугу делает мастер, а не ты сам → каузатив: have/get + объект (it) + третья форма (cut). Форма cut совпадает с базой.",
        "hint": "Стрижёт тебя другой — это каузатив: have it + третья форма. 💇"
      },
      {
        "type": "gap",
        "q": "By the time you read this letter, I ___ the country. <i style=\"opacity:.6\">(leave)</i>",
        "accept": [
          "will have left",
          "ill have left"
        ],
        "model": "will have left",
        "why": "«К тому времени, когда ты прочитаешь» действие будет уже завершено → Future Perfect: will have + третья форма.",
        "hint": "К будущему моменту (когда прочитаешь) действие будет ЗАВЕРШЕНО → will have + третья форма. ✈️"
      },
      {
        "type": "trRE",
        "ru": "Тебе следовало сказать мне раньше. <i style=\"opacity:.6\">(упрёк о прошлом)</i>",
        "accept": [
          "you should have told me earlier",
          "you shouldve told me earlier",
          "you should have told me sooner",
          "you ought to have told me earlier",
          "you should have let me know earlier",
          "you should have told me about it earlier"
        ],
        "model": "You should have told me earlier.",
        "hint": "Упрёк «надо было…» о прошлом = should have + третья форма. ⏳"
      },
      {
        "type": "trRE",
        "ru": "В это же время завтра я буду сдавать экзамен.",
        "accept": [
          "this time tomorrow ill be taking the exam",
          "this time tomorrow i will be taking the exam",
          "this time tomorrow ill be sitting the exam",
          "this time tomorrow i will be sitting the exam",
          "this time tomorrow ill be doing the exam",
          "this time tomorrow ill be writing the exam"
        ],
        "model": "This time tomorrow I'll be taking the exam.",
        "hint": "«В это же время завтра» + процесс в моменте будущего = will be + …-ing. 📝"
      },
      {
        "type": "trRE",
        "ru": "Говорят, что эта картина стоит целое состояние.",
        "accept": [
          "it is said that this painting is worth a fortune",
          "its said that this painting is worth a fortune",
          "it is said this painting is worth a fortune",
          "people say that this painting is worth a fortune",
          "it is said that the painting is worth a fortune",
          "it is said that this picture is worth a fortune"
        ],
        "model": "It is said that this painting is worth a fortune.",
        "hint": "Безлично «говорят, что…» = It is said that… 🖼️"
      },
      {
        "type": "trER",
        "en": "Having read the instructions, she started the machine.",
        "accept": [
          "прочитав инструкцию она включила машину",
          "прочитав инструкции она включила машину",
          "прочитав инструкцию она запустила машину",
          "прочитав инструкцию она включила станок",
          "прочитав руководство она включила машину",
          "прочитав инструкцию она завела машину",
          "после того как прочитала инструкцию она включила машину"
        ],
        "model": "Прочитав инструкцию, она включила машину.",
        "hint": "Having + третья форма = действие РАНЬШЕ второго: «прочитав …, она …». 📖"
      },
      {
        "type": "trER",
        "en": "By the time we got home, the storm had already passed.",
        "accept": [
          "к тому времени когда мы добрались домой гроза уже прошла",
          "когда мы добрались домой гроза уже прошла",
          "к тому времени как мы добрались домой гроза уже прошла",
          "к тому времени когда мы пришли домой гроза уже прошла",
          "к тому времени когда мы вернулись домой гроза уже прошла",
          "к тому моменту когда мы добрались домой гроза уже прошла"
        ],
        "model": "К тому времени, когда мы добрались домой, гроза уже прошла.",
        "hint": "had already passed — «прошла ЕЩЁ раньше», до нашего прихода. Это Past Perfect в рассказе. ⛈️"
      },
      {
        "type": "order",
        "answer": "you won't get in unless you show your ticket",
        "accept": [
          "you won't get in unless you show your ticket",
          "unless you show your ticket you won't get in"
        ],
        "hintRu": "Скажи по-английски: «Ты не пройдёшь, если не покажешь билет».",
        "hint": "unless = «если не» одним словом (условие-исключение): you won't get in unless … 🎟️"
      },
      {
        "type": "order",
        "answer": "the man standing by the door is my boss",
        "accept": [
          "the man standing by the door is my boss"
        ],
        "hintRu": "Скажи по-английски: «Мужчина, стоящий у двери, — мой начальник».",
        "hint": "«который стоит» сворачивается в причастие: the man standing by the door … (без who is). 🚪"
      },
      {
        "type": "match",
        "q": "Соедини пример с нужным словом: so / such / too / enough.",
        "pairs": [
          [
            "… a strong smell that we left",
            "such"
          ],
          [
            "… cold that the lake froze",
            "so"
          ],
          [
            "… heavy for me to lift",
            "too"
          ],
          [
            "warm … to swim in",
            "enough"
          ]
        ],
        "hint": "such + (a) + существительное · so + одно прилагательное · too + прил. + to/for · прилагательное + enough + to. 🙂"
      },
      {
        "type": "describe",
        "img": "img/b2/day-30.jpg",
        "prompt": "Финал! Расскажи о своём пути в B2 и о том, что впереди: что уже освоил(а), что было труднее всего и чего ждёшь на C1. Задействуй разные структуры уровня — I have been learning…, It is said that…, if I had…, а совет будущему студенту дай через You'd better… Напиши 5–6 предложений.",
        "keywords": [
          "have been",
          "had been",
          "looking forward",
          "look forward to",
          "it is said",
          "if i had",
          "would have",
          "never forget",
          "you'd better",
          "youd better",
          "had better",
          "get on with",
          "run out of",
          "put up with",
          "come up with",
          "must have",
          "will have"
        ],
        "minWords": 18,
        "model": "I have been learning English for months, and B2 has been the toughest level so far. I'll never forget how nervous I was at the start. It is said that C1 is even harder, but I'm really looking forward to it. If I had given up earlier, I would have missed all this progress. You'd better be patient with yourself — you won't run out of motivation if you enjoy the journey.",
        "hint": "Собери всё вместе: I have been learning…, It is said that…, if I had…, You'd better…, плюс фразовые look forward to / put up with / run out of. 🏁"
      }
    ]
  }
};;

/* ===== helpers ===== */
