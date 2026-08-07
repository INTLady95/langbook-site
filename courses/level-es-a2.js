/* Spanish A2 — level config + 30-day plan (COURSE). EXAMS filled by next agent.
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'A2',
  course:'es-a2',
  pkey:'langbook-es-a2-progress',
  preview:false,
  finalNote:'Это твоя победа 💛 Полный уровень Español A2 — позади. Горжусь тобой!',
  speech:'es-ES',
  langPo:'по-испански',
  langNa:'испанский',
  langAdj:'испанское',
  phIn:'en español…'
};

const COURSE = [
  {wn:'01', wt:'Неделя 1 — Прошлое рядом: pretérito perfecto', days:[
    {n:1,t:'Что я уже сделал',p:'El pretérito perfecto'},
    {n:2,t:'Особые причастия',p:'Los participios irregulares'},
    {n:3,t:'Уже или ещё нет',p:'Ya, todavía no, alguna vez'},
    {n:4,t:'Моё утро сегодня',p:'Reflexivos en perfecto'},
    {n:5,t:'Вчера: начинаю прошлое',p:'El indefinido regular (-ar)'},
    {n:6,t:'Что я ел и где жил',p:'El indefinido regular (-er/-ir)'},
    {n:7,t:'Повторение №1',p:'Repaso 1'}
  ]},
  {wn:'02', wt:'Неделя 2 — Что случилось: indefinido и imperfecto', days:[
    {n:8,t:'Сильное прошлое',p:'El indefinido irregular'},
    {n:9,t:'Сказал, пришёл, смог',p:'Más irregulares del indefinido'},
    {n:10,t:'Сегодня или вчера',p:'Perfecto vs indefinido'},
    {n:11,t:'Моя поездка',p:'Contar un viaje'},
    {n:12,t:'Раньше было так',p:'El imperfecto'},
    {n:13,t:'В детстве и по выходным',p:'Los usos del imperfecto'},
    {n:14,t:'Повторение №2',p:'Repaso 2: indefinido e imperfecto'}
  ]},
  {wn:'03', wt:'Неделя 3 — Рассказываю и описываю: местоимения и estar + gerundio', days:[
    {n:15,t:'Фон и событие',p:'Indefinido e imperfecto'},
    {n:16,t:'Не повторяй существительное',p:'Los pronombres de objeto directo'},
    {n:17,t:'Кому я пишу и дарю',p:'Los pronombres de objeto indirecto'},
    {n:18,t:'Дай мне это',p:'Los pronombres juntos: se lo doy'},
    {n:19,t:'Прямо сейчас',p:'Estar + gerundio'},
    {n:20,t:'Что я делал в тот момент',p:'Estaba + gerundio'},
    {n:21,t:'Повторение №3',p:'Repaso 3: pronombres y gerundio'}
  ]},
  {wn:'04', wt:'Неделя 4 — Сравниваю, планирую, советую: comparativos, futuro, imperativo', days:[
    {n:22,t:'Больше, меньше, так же',p:'Comparativos'},
    {n:23,t:'Самый-самый',p:'Los superlativos'},
    {n:24,t:'Мои планы',p:'El futuro próximo'},
    {n:25,t:'Что будет',p:'El futuro simple'},
    {n:26,t:'Сделай, скажи, приходи',p:'El imperativo afirmativo (tú)'},
    {n:27,t:'Надо и стоит',p:'Obligación y consejo'},
    {n:28,t:'Почему и зачем',p:'Por y para'},
    {n:29,t:'История моей жизни',p:'Los tres pasados juntos'},
    {n:30,t:'Рассказ обо мне',p:'Hablo de mi vida'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя A2 позади — и она была про прошлое. 25 заданий по всему, что мы разобрали: pretérito perfecto (he hablado), особые причастия (hecho, dicho, visto), ya и todavía no, возвратные в перфекте (me he levantado) и первое настоящее прошедшее — indefinido (hablé, comí). Не торопись. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "<b>Pretérito perfecto:</b> haber (he, has, ha, hemos, han) + причастие: he <b>hablado</b>, he <b>comido</b>",
      "Причастия: -ar → <b>-ado</b>, -er/-ir → <b>-ido</b>; особые: <b>hecho, dicho, visto, escrito, vuelto</b>",
      "Маркеры перфекта: <b>ya</b> (уже), <b>todavía no</b> (ещё нет), <b>alguna vez</b> (когда-нибудь) ≠ a veces (иногда)",
      "Возвратные в перфекте: клитик перед haber — <b>me he</b> levantado, <b>se ha</b> duchado",
      "Indefinido -ar: -é, -aste, -ó… — <b>hablé</b>, María <b>habló</b> (ударение решает: hablo ≠ habló)",
      "Indefinido -er/-ir: -í, -iste, -ió… — <b>comí</b>, <b>viví</b>; короткие <b>vi, di</b> без чёрточки",
      "Слова-спутники прошлого: <b>ayer, anoche, la semana pasada, el año pasado</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Yo ___ trabajado mucho hoy.",
        "opts": [
          "he",
          "has",
          "ha",
          "tengo"
        ],
        "answer": "he",
        "why": "Перфект строится через haber: для «yo» — he trabajado. Tengo — это «владею», а не «сделал».",
        "hint": "Вспомогательный тут — haber, и у «я» своя форма; tener сюда не подходит 🙂"
      },
      {
        "type": "choice",
        "q": "He ___ paella. <i style='opacity:.6'>поел</i>",
        "opts": [
          "comido",
          "comado",
          "comiendo",
          "comer"
        ],
        "answer": "comido",
        "why": "comer — глагол на -er, значит причастие на -ido: comido. Окончание -ado только у -ar.",
        "hint": "Это глагол на -er, а причастие герундием и инфинитивом не бывает 🍽️"
      },
      {
        "type": "choice",
        "q": "¿Qué has ___? <i style='opacity:.6'>сказал — decir</i>",
        "opts": [
          "dicho",
          "decido",
          "dicido",
          "diciendo"
        ],
        "answer": "dicho",
        "why": "decir — особое причастие dicho, его учим наизусть. «Decido/dicido» не существуют.",
        "hint": "У decir причастие не по правилу — это один из «упрямцев» 🙂"
      },
      {
        "type": "choice",
        "q": "He ___ la tarea. <i style='opacity:.6'>сделал — hacer</i>",
        "opts": [
          "hecho",
          "hacido",
          "haciendo",
          "hacer"
        ],
        "answer": "hecho",
        "why": "hacer → hecho, особое причастие. Формы «hacido» нет.",
        "hint": "hacer не берёт -ido: у него короткое особое причастие 🙂"
      },
      {
        "type": "choice",
        "q": "___ he desayunado, no tengo hambre. <i style='opacity:.6'>уже</i>",
        "opts": [
          "Ya",
          "Todavía no",
          "Nunca",
          "A veces"
        ],
        "answer": "Ya",
        "why": "«Уже» перед перфектом — ya. Todavía no — «ещё нет», nunca — «никогда», a veces — «иногда» (для настоящего).",
        "hint": "Раз есть готовый результат «не голоден», ищи маркер «уже» ☕"
      },
      {
        "type": "choice",
        "q": "¿Has estado ___ en México? <i style='opacity:.6'>когда-нибудь, за всю жизнь</i>",
        "opts": [
          "alguna vez",
          "a veces",
          "ya",
          "siempre"
        ],
        "answer": "alguna vez",
        "why": "Опыт всей жизни — alguna vez. A veces — «иногда» (настоящее), ya — «уже», siempre — «всегда».",
        "hint": "Спрашиваешь про опыт целиком; не путай с «иногда» (a veces) 🌎"
      },
      {
        "type": "choice",
        "q": "___ he levantado a las siete. <i style='opacity:.6'>я встал</i>",
        "opts": [
          "Me",
          "Te",
          "Se",
          "Nos"
        ],
        "answer": "Me",
        "why": "Возвратное «я» — me he levantado: клитик перед haber. Te — «ты», se — «он», nos — «мы».",
        "hint": "Действие возвращается к тебе самому, и местоимение идёт перед haber 🙂"
      },
      {
        "type": "choice",
        "q": "Ayer yo ___ con Ana. <i style='opacity:.6'>говорил</i>",
        "opts": [
          "hablé",
          "hablo",
          "habló",
          "hablas"
        ],
        "answer": "hablé",
        "why": "Прошлое «я» на -ar → hablé (с чёрточкой). Hablo — «говорю сейчас», habló — «он/она», hablas — «ты».",
        "hint": "«Ayer» просит прошлое, а форма «я» несёт чёрточку на конце 🙂"
      },
      {
        "type": "choice",
        "q": "Ayer María ___ paella. <i style='opacity:.6'>приготовила</i>",
        "opts": [
          "cocinó",
          "cocino",
          "cociné",
          "cocina"
        ],
        "answer": "cocinó",
        "why": "«Она приготовила» → cocinó (ó). Cocino — «я готовлю», cociné — «я приготовил», cocina — «она готовит сейчас».",
        "hint": "Речь про Марию (она) и про вчера — ударение на конец решает 🙂"
      },
      {
        "type": "choice",
        "q": "Ayer yo ___ paella. <i style='opacity:.6'>поел</i>",
        "opts": [
          "comí",
          "comé",
          "como",
          "comió"
        ],
        "answer": "comí",
        "why": "У -er «я» → comí (-í, не -é). Comé не бывает, como — настоящее, comió — «он/она».",
        "hint": "Хвостик -é живёт у -ar; у -er/-ir «я» берёт другой значок 🍽️"
      },
      {
        "type": "gap",
        "q": "___ he duchado esta mañana. <i style='opacity:.6'>я принял душ</i>",
        "accept": [
          "me"
        ],
        "model": "Me",
        "why": "Возвратный клитик «я» стоит перед haber: me he duchado.",
        "hint": "Коротенькое возвратное словечко для «я» — и сразу перед haber 🚿"
      },
      {
        "type": "gap",
        "q": "Anoche yo ___ en casa. <i style='opacity:.6'>ужинал — cenar</i>",
        "accept": [
          "cené",
          "cene"
        ],
        "model": "cené",
        "why": "Прошлое «я» на -ar → cené (с чёрточкой). Без неё «ceno» — это «ужинаю сейчас».",
        "hint": "cenar на -ar, форма «я» в прошлом кончается на ударную -é 🌙"
      },
      {
        "type": "gap",
        "q": "Ayer yo ___ a las ocho. <i style='opacity:.6'>вышел — salir</i>",
        "accept": [
          "salí",
          "sali"
        ],
        "model": "salí",
        "why": "У -ir «я» → salí (-í). Salgo — настоящее, salió — «он/она».",
        "hint": "salir на -ir; у «я» в прошлом хвостик -í с чёрточкой 🙂"
      },
      {
        "type": "gap",
        "q": "He ___ un correo. <i style='opacity:.6'>написал — escribir</i>",
        "accept": [
          "escrito"
        ],
        "model": "escrito",
        "why": "escribir → escrito, особое причастие. «Escribido» не существует.",
        "hint": "escribir — из «упрямцев»: причастие не по правилу ✍️"
      },
      {
        "type": "trRE",
        "ru": "Я уже поел.",
        "accept": [
          "ya he comido",
          "he comido ya",
          "ya he comido yo"
        ],
        "model": "Ya he comido.",
        "why": "«Уже» — ya, «поел» — перфект he comido (haber + причастие).",
        "hint": "Маркер «уже» + связка he + причастие от comer 🙂"
      },
      {
        "type": "trRE",
        "ru": "Вчера я работал.",
        "accept": [
          "ayer trabajé",
          "ayer trabaje",
          "ayer yo trabajé",
          "ayer yo trabaje"
        ],
        "model": "Ayer trabajé.",
        "why": "С «ayer» — indefinido: trabajé (форма «я» на -ar с чёрточкой).",
        "hint": "«Вчера» → прошедшее; форма «я» несёт ударную -é 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я встал в семь.",
        "accept": [
          "me he levantado a las siete",
          "me levanté a las siete",
          "me levante a las siete"
        ],
        "model": "Me he levantado a las siete.",
        "why": "«Встал» — возвратный глагол: me he levantado (или me levanté). Время — a las siete.",
        "hint": "Возвратное «встать» + время через a las…; клитик впереди 🌅"
      },
      {
        "type": "trER",
        "en": "He hecho la tarea.",
        "accept": [
          "я сделал задание",
          "я сделала задание",
          "я сделал домашнюю работу",
          "я сделала домашнюю работу",
          "я выполнил задание"
        ],
        "model": "Я сделал задание.",
        "why": "hecho — особое причастие «сделал»; tarea — задание.",
        "hint": "he hecho — «сделал»; вспомни, что такое tarea 🙂"
      },
      {
        "type": "trER",
        "en": "Ayer comí en un bar.",
        "accept": [
          "вчера я поел в баре",
          "вчера я ел в баре",
          "вчера я обедал в баре",
          "вчера поел в баре"
        ],
        "model": "Вчера я поел в баре.",
        "why": "comí — прошедшее «поел» (indefinido), ayer — вчера, en un bar — в баре.",
        "hint": "comí — форма «я» в прошлом; bar узнаётся легко 🙂"
      },
      {
        "type": "order",
        "answer": "todavía no he comido",
        "accept": [
          "todavía no he comido",
          "todavia no he comido"
        ],
        "hintRu": "Собери: «Я ещё не поел.»",
        "model": "Todavía no he comido.",
        "why": "«Ещё нет» — единый блок todavía no перед haber, разрывать нельзя.",
        "hint": "Блок «ещё нет» встаёт целиком перед he + причастие 🙂"
      },
      {
        "type": "order",
        "answer": "el año pasado viajé a españa",
        "accept": [
          "el año pasado viajé a españa",
          "el ano pasado viaje a espana"
        ],
        "hintRu": "Собери: «В прошлом году я ездил в Испанию.»",
        "model": "El año pasado viajé a España.",
        "why": "«В прошлом году» — закрытое прошлое → indefinido viajé; направление через a.",
        "hint": "Время в прошлом просит прошедшее; «в Испанию» — с предлогом a 🇪🇸"
      },
      {
        "type": "match",
        "q": "Соедини инфинитив с его особым причастием.",
        "pairs": [
          [
            "hacer",
            "hecho"
          ],
          [
            "decir",
            "dicho"
          ],
          [
            "ver",
            "visto"
          ],
          [
            "escribir",
            "escrito"
          ],
          [
            "volver",
            "vuelto"
          ]
        ],
        "why": "Это «девятка упрямцев»: их причастия не по правилу — их учат наизусть.",
        "hint": "Вспомни особые причастия — они короткие и без -ido 🙂"
      },
      {
        "type": "match",
        "q": "Соедини инфинитив с формой «я» в прошлом (indefinido).",
        "pairs": [
          [
            "hablar",
            "hablé"
          ],
          [
            "comer",
            "comí"
          ],
          [
            "vivir",
            "viví"
          ],
          [
            "cenar",
            "cené"
          ],
          [
            "salir",
            "salí"
          ]
        ],
        "why": "Форма «я»: у -ar хвостик -é (hablé), у -er/-ir хвостик -í (comí, viví).",
        "hint": "Раздели по спряжению: -ar даёт -é, а -er/-ir дают -í 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи, что ты уже сделал(а) сегодня утром (1–2 предложения). Используй pretérito perfecto: me he levantado, he desayunado…",
        "keywords": [
          "me he levantado",
          "he desayunado",
          "me he duchado",
          "he comido",
          "he hecho",
          "esta mañana",
          "hoy",
          "ya"
        ],
        "minWords": 6,
        "model": "Hoy me he levantado a las siete. He desayunado y me he duchado.",
        "why": "«Сегодня» — территория перфекта: haber + причастие, у возвратных клитик впереди.",
        "hint": "Цепочка перфекта: he / me he + причастие; добавь hoy или ya 🌅"
      },
      {
        "type": "describe",
        "prompt": "Расскажи, что ты делал(а) вчера (1–2 предложения). Используй прошедшее (indefinido): ayer, anoche…",
        "keywords": [
          "ayer",
          "anoche",
          "trabajé",
          "comí",
          "cené",
          "hablé",
          "salí",
          "estudié",
          "viví"
        ],
        "minWords": 6,
        "model": "Ayer trabajé mucho. Anoche cené en casa y hablé con mi familia.",
        "why": "События вчера — indefinido (-é у -ar, -í у -er/-ir), с маркерами ayer/anoche.",
        "hint": "Вчерашние события — прошедшее на -é / -í; закрепи словом ayer или anoche 🙂"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя — про то, что случилось. 25 заданий: сильное прошлое (fui, tuve, hice), группа на -j (dije, trajeron), выбор perfecto/indefinido по маркеру, рассказ о поездке, а ещё imperfecto — фон и привычки (antes vivía, los domingos iba). Наберёшь 80% — откроется Неделя 3. 💛",
    "review": [
      "<b>Indefinido сильный:</b> fui, estuve, tuve, hice (ударение на основу: <b>tuve</b>, не «tuvé»)",
      "Правописание: <b>hice</b> через c, <b>hizo</b> через z; <b>fui</b> — и «был», и «пошёл»",
      "Ещё сильные: pude, puse, vine, supe, quise; группа -j: <b>dije, traje</b> → <b>dijeron</b> (без i)",
      "Маркер решает: <b>hoy/ya/esta semana</b> → perfecto; <b>ayer/el lunes/en 2020</b> → indefinido",
      "Поездка: primero, luego, después, al final; <b>fui a</b> (ездил) ≠ <b>estuve en</b> (был)",
      "<b>Imperfecto:</b> -ar → -aba, -er/-ir → -ía; три исключения <b>era, iba, veía</b>",
      "Фон и привычки: <b>antes, de pequeño, los domingos</b>; <b>solía</b> + инфинитив; tenía… años"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Ella ___ la cena anoche. <i style='opacity:.6'>приготовила — hacer</i>",
        "opts": [
          "hizo",
          "hació",
          "hacía",
          "hiciste"
        ],
        "answer": "hizo",
        "why": "«Она сделала/приготовила» → hizo (перед o пишем z). Hació не бывает, hacía — imperfecto, hiciste — «ты».",
        "hint": "Сильная форма «он/она»; и помни правило z перед o 🙂"
      },
      {
        "type": "choice",
        "q": "Ayer yo ___ al cine. <i style='opacity:.6'>ходил</i>",
        "opts": [
          "fui",
          "fue",
          "iba",
          "voy"
        ],
        "answer": "fui",
        "why": "«Я сходил» (один раз, ayer) → fui. Fue — «он/она», iba — imperfecto (регулярно), voy — настоящее.",
        "hint": "Один поход вчера — сильная форма «я» от ir 🎬"
      },
      {
        "type": "choice",
        "q": "Ellos ___ la verdad. <i style='opacity:.6'>сказали — decir</i>",
        "opts": [
          "dijeron",
          "dijieron",
          "dieron",
          "decieron"
        ],
        "answer": "dijeron",
        "why": "Группа -j теряет i в «они»: dijeron (не «dijieron»). Dieron — от dar («дали»).",
        "hint": "У основы на -j «они» без лишней i; и это не глагол dar 🙂"
      },
      {
        "type": "choice",
        "q": "No ___ venir. <i style='opacity:.6'>я не смог — poder</i>",
        "opts": [
          "pude",
          "podí",
          "pudo",
          "puedo"
        ],
        "answer": "pude",
        "why": "poder в прошлом — сильный: pude (основа pud-, без ударного конца). Podí не бывает, pudo — «он», puedo — настоящее.",
        "hint": "Сильный глагол: ударение на основу, чёрточки нет 🙂"
      },
      {
        "type": "choice",
        "q": "Hoy ___ mucho. <i style='opacity:.6'>я работал</i>",
        "opts": [
          "he trabajado",
          "trabajé",
          "trabajaba",
          "trabajo"
        ],
        "answer": "he trabajado",
        "why": "Маркер hoy (отрезок ещё идёт) → perfecto: he trabajado. Trabajé — с ayer, trabajaba — фон, trabajo — настоящее.",
        "hint": "«Hoy» тянет перфект — haber + причастие, а не indefinido 🙂"
      },
      {
        "type": "choice",
        "q": "Ayer ___ a Madrid. <i style='opacity:.6'>я поехал</i>",
        "opts": [
          "fui",
          "he ido",
          "iba",
          "voy"
        ],
        "answer": "fui",
        "why": "Маркер ayer (закрытый день) → indefinido: fui. He ido — перфект (для hoy), iba — фон, voy — настоящее.",
        "hint": "«Ayer» закрывает день — нужно точечное прошедшее 🚆"
      },
      {
        "type": "choice",
        "q": "___ en Barcelona una semana. <i style='opacity:.6'>я пробыл, находился</i>",
        "opts": [
          "Estuve",
          "Fui",
          "Iba",
          "Estoy"
        ],
        "answer": "Estuve",
        "why": "«Пробыл где-то» — estar: estuve en. Fui без a невозможно («fui en» — ошибка), iba — фон, estoy — настоящее.",
        "hint": "«Быть/пробыть где-то» — это estar с en, а не глагол движения 🏖️"
      },
      {
        "type": "choice",
        "q": "Antes yo ___ en un pueblo. <i style='opacity:.6'>жил</i>",
        "opts": [
          "vivía",
          "viví",
          "vivo",
          "viviré"
        ],
        "answer": "vivía",
        "why": "«Раньше» (период, фон) → imperfecto: vivía. Viví — один раз, vivo — настоящее, viviré — будущее.",
        "hint": "«Раньше» рисует фон прошлого — это imperfecto 🏡"
      },
      {
        "type": "choice",
        "q": "Cuando era niño, ___ a la escuela a pie. <i style='opacity:.6'>я ходил</i>",
        "opts": [
          "iba",
          "fui",
          "iré",
          "voy"
        ],
        "answer": "iba",
        "why": "Привычка в детстве → imperfecto: iba (одно из трёх исключений). Fui — один раз, iré — будущее, voy — настоящее.",
        "hint": "«Когда был ребёнком» + регулярность — фон; у ir здесь особая форма 🙂"
      },
      {
        "type": "choice",
        "q": "Cuando ___ diez años, vivía en un pueblo. <i style='opacity:.6'>мне было — tener</i>",
        "opts": [
          "tenía",
          "tuve",
          "tengo",
          "tendré"
        ],
        "answer": "tenía",
        "why": "Возраст — это фон → imperfecto: tenía. Tuve — событие, tengo — настоящее, tendré — будущее.",
        "hint": "Возраст в прошлом — это описание-фон, не событие 🙂"
      },
      {
        "type": "gap",
        "q": "Ayer yo ___ suerte. <i style='opacity:.6'>мне повезло — tener</i>",
        "accept": [
          "tuve"
        ],
        "model": "tuve",
        "why": "tener в прошлом — сильный: основа tuv-, окончание -e без ударения → tuve.",
        "hint": "Сильная основа tuv-, ударение на неё, чёрточки нет 🍀"
      },
      {
        "type": "gap",
        "q": "Ayer yo ___ un regalo a mi madre. <i style='opacity:.6'>принёс — traer</i>",
        "accept": [
          "traje"
        ],
        "model": "traje",
        "why": "traer в прошлом — группа -j: основа traj- → traje (без ударного -é).",
        "hint": "Основа на -j; сильные не берут ударное -é 🎁"
      },
      {
        "type": "gap",
        "q": "De pequeño yo ___ mucho al fútbol. <i style='opacity:.6'>играл — jugar</i>",
        "accept": [
          "jugaba"
        ],
        "model": "jugaba",
        "why": "Привычка в детстве → imperfecto: jugaba (-ar → -aba).",
        "hint": "«В детстве много играл» — это привычка-фон, окончание -aba ⚽"
      },
      {
        "type": "gap",
        "q": "Fui a Italia ___ dos años. <i style='opacity:.6'>два года назад</i>",
        "accept": [
          "hace"
        ],
        "model": "hace",
        "why": "«Назад» с указанием срока — hace: hace dos años. «Atrás» лишнее.",
        "hint": "Одно слово перед сроком передаёт «назад» — без «atrás» 🙂"
      },
      {
        "type": "trRE",
        "ru": "Вчера я сделал задание.",
        "accept": [
          "ayer hice la tarea",
          "ayer yo hice la tarea"
        ],
        "model": "Ayer hice la tarea.",
        "why": "«Сделал» (ayer) — сильное прошлое hice; tarea — задание.",
        "hint": "«Вчера сделал» — сильная форма «я» от hacer 🙂"
      },
      {
        "type": "trRE",
        "ru": "Сегодня я много работал.",
        "accept": [
          "hoy he trabajado mucho",
          "hoy yo he trabajado mucho"
        ],
        "model": "Hoy he trabajado mucho.",
        "why": "Маркер hoy → perfecto: he trabajado.",
        "hint": "«Сегодня» — территория перфекта: haber + причастие 🙂"
      },
      {
        "type": "trRE",
        "ru": "Раньше я жил в деревне.",
        "accept": [
          "antes vivía en un pueblo",
          "antes yo vivía en un pueblo",
          "antes vivia en un pueblo"
        ],
        "model": "Antes vivía en un pueblo.",
        "why": "«Раньше жил» (период/фон) → imperfecto: vivía.",
        "hint": "«Раньше» рисует фон — окончание -ía 🏡"
      },
      {
        "type": "trER",
        "en": "No pude venir.",
        "accept": [
          "я не смог прийти",
          "я не смогла прийти",
          "я не смог приехать",
          "я не смогла приехать"
        ],
        "model": "Я не смог прийти.",
        "why": "pude — «смог» (сильный poder), venir — прийти; no — не.",
        "hint": "pude — прошлое от «мочь»; venir — прийти 🙂"
      },
      {
        "type": "trER",
        "en": "Los domingos iba al parque.",
        "accept": [
          "по воскресеньям я ходил в парк",
          "по воскресеньям я ходила в парк",
          "по воскресеньям ходил в парк",
          "по воскресеньям ходила в парк"
        ],
        "model": "По воскресеньям я ходил в парк.",
        "why": "iba — imperfecto «ходил (регулярно)»; los domingos — по воскресеньям.",
        "hint": "iba здесь — про привычку, «ходил» регулярно 🌳"
      },
      {
        "type": "order",
        "answer": "primero fui al aeropuerto",
        "accept": [
          "primero fui al aeropuerto"
        ],
        "hintRu": "Собери: «Сначала я поехал в аэропорт.»",
        "model": "Primero fui al aeropuerto.",
        "why": "Связка primero открывает цепочку событий в indefinido (fui).",
        "hint": "Начни со связки «сначала», дальше событие в прошлом ✈️"
      },
      {
        "type": "order",
        "answer": "eran las tres cuando llegué",
        "accept": [
          "eran las tres cuando llegué",
          "eran las tres cuando llegue"
        ],
        "hintRu": "Собери: «Было три часа, когда я приехал.»",
        "model": "Eran las tres cuando llegué.",
        "why": "Время суток — фон (eran), а приезд — событие (llegué).",
        "hint": "Часы на фоне — imperfecto; приезд — точечное прошедшее 🕒"
      },
      {
        "type": "match",
        "q": "Соедини инфинитив с формой «я» в прошлом (сильные).",
        "pairs": [
          [
            "ir",
            "fui"
          ],
          [
            "tener",
            "tuve"
          ],
          [
            "hacer",
            "hice"
          ],
          [
            "poder",
            "pude"
          ],
          [
            "decir",
            "dije"
          ]
        ],
        "why": "Сильные глаголы: ударение на основу, конец без чёрточки (fui, tuve, hice, pude, dije).",
        "hint": "Это сильное прошлое — основы меняются, а конец безударный 🙂"
      },
      {
        "type": "match",
        "q": "Соедини инфинитив с формой imperfecto.",
        "pairs": [
          [
            "ser",
            "era"
          ],
          [
            "ir",
            "iba"
          ],
          [
            "ver",
            "veía"
          ],
          [
            "hablar",
            "hablaba"
          ],
          [
            "comer",
            "comía"
          ]
        ],
        "why": "Imperfecto: -ar → -aba, -er/-ir → -ía; три исключения era, iba, veía.",
        "hint": "Три особых (era, iba, veía) и правило -aba/-ía для остальных 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи о поездке (2 предложения): куда ты ездил(а) и что делал(а). Используй indefinido и слова primero, luego…",
        "keywords": [
          "fui a",
          "el año pasado",
          "primero",
          "luego",
          "después",
          "al final",
          "visité",
          "comí",
          "estuve en",
          "viajé"
        ],
        "minWords": 6,
        "model": "El año pasado fui a España. Primero visité Madrid y luego fui a la playa.",
        "why": "Рассказ о поездке — цепочка событий в indefinido, связанная словами primero/luego.",
        "hint": "Веди события в прошедшем и свяжи их: primero, luego, al final ✈️"
      },
      {
        "type": "describe",
        "prompt": "Расскажи, каким было твоё детство (2 предложения): где ты жил(а) и что обычно делал(а). Используй imperfecto: antes, de pequeño…",
        "keywords": [
          "de pequeño",
          "de niño",
          "de niña",
          "antes",
          "vivía",
          "jugaba",
          "iba",
          "tenía",
          "era",
          "solía",
          "los domingos"
        ],
        "minWords": 6,
        "model": "De pequeño vivía en un pueblo. Los domingos iba al parque y jugaba al fútbol.",
        "why": "Детство и привычки — это фон прошлого → imperfecto (-aba/-ía).",
        "hint": "Описание и привычки прошлого — imperfecto; начни с de pequeño или antes 🙂"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя — учимся рассказывать плавно. 25 заданий: фон и событие (imperfecto ↔ indefinido), местоимения lo/la/le, два вместе (se lo doy), и настоящий/прошлый прогрессив (estoy comiendo, estaba durmiendo). Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Фон и событие: <b>imperfecto</b> держит фон, <b>indefinido</b> двигает сюжет; <b>de repente</b>, mientras",
      "Ловушки: <b>conocí</b> (познакомился) ≠ conocía (знал); supe/sabía; quise/quería",
      "Прямое дополнение: <b>lo, la, los, las</b> — перед глаголом: <b>la</b> veo, no <b>lo</b> he leído",
      "Косвенное: <b>me, te, le, nos, os, les</b>; <b>le</b> = ему/ей/Вам; удвоение <b>le</b>… a María",
      "Два клитика: сначала «кому», потом «что»; <b>le/les → se</b> перед lo/la: <b>se lo</b> doy",
      "Прогрессив сейчас: <b>estar</b> + герундий; -ando/-iendo; <b>leyendo, durmiendo</b>",
      "Прогрессив тогда: <b>estaba</b> + герундий; estaba durmiendo <b>cuando</b> sonó el teléfono"
    ],
    "q": [
      {
        "type": "choice",
        "q": "___ las ocho cuando sonó el teléfono. <i style='opacity:.6'>было</i>",
        "opts": [
          "Eran",
          "Fueron",
          "Son",
          "Están"
        ],
        "answer": "Eran",
        "why": "Время суток — фон → imperfecto: eran las ocho. Fueron (indefinido) для времени не годится, son — настоящее, están — estar.",
        "hint": "Часы как фон сцены — это imperfecto 🕗"
      },
      {
        "type": "choice",
        "q": "Ayer ___ a Ana. <i style='opacity:.6'>познакомился</i>",
        "opts": [
          "conocí",
          "conocía",
          "conozco",
          "conoceré"
        ],
        "answer": "conocí",
        "why": "«Познакомился» — момент → conocí. Conocía значило бы «(уже) знал», conozco — настоящее, conoceré — будущее.",
        "hint": "Момент знакомства — точечное прошедшее, не «знал» 🙂"
      },
      {
        "type": "choice",
        "q": "¿El libro? ___ tengo. <i style='opacity:.6'>он у меня</i>",
        "opts": [
          "Lo",
          "La",
          "Le",
          "Los"
        ],
        "answer": "Lo",
        "why": "libro — мужского рода, единственное → lo. La — женский, le — «кому», los — множественное.",
        "hint": "Замени «книгу» по её роду и числу — это прямое дополнение 📗"
      },
      {
        "type": "choice",
        "q": "¿La carta? ___ escribí. <i style='opacity:.6'>я её написал</i>",
        "opts": [
          "La",
          "Lo",
          "Le",
          "Las"
        ],
        "answer": "La",
        "why": "carta — женского рода, единственное → la escribí. Lo — мужской, le — «кому», las — множественное.",
        "hint": "«Письмо» по-испански женского рода — бери форму под него ✉️"
      },
      {
        "type": "choice",
        "q": "___ doy un regalo a María. <i style='opacity:.6'>ей</i>",
        "opts": [
          "Le",
          "La",
          "Lo",
          "Les"
        ],
        "answer": "Le",
        "why": "«Кому» в 3-м лице ед. — всегда le, даже про женщину. La/lo — это «что», les — множественное.",
        "hint": "Это адресат «кому», а не «что»; и María одна 🎁"
      },
      {
        "type": "choice",
        "q": "___ doy las llaves a mis padres. <i style='opacity:.6'>им</i>",
        "opts": [
          "Les",
          "Le",
          "Las",
          "Los"
        ],
        "answer": "Les",
        "why": "Адресатов много (a mis padres) → les. Le — единственное, las/los — «что» (прямое).",
        "hint": "Родителей несколько — адресат во множественном 🔑"
      },
      {
        "type": "choice",
        "q": "El libro, ___ doy a ella. <i style='opacity:.6'>ей его</i>",
        "opts": [
          "se lo",
          "le lo",
          "lo le",
          "se la"
        ],
        "answer": "se lo",
        "why": "«Ей» + «его» = le + lo → se lo (le перед lo меняется на se). «Le lo» запрещено, «lo le» — обратный порядок, «se la» — для женского предмета.",
        "hint": "Когда встречаются два клитика, „кому“-le меняет форму перед „что“ — вспомни как 🙂"
      },
      {
        "type": "choice",
        "q": "___ das el libro. <i style='opacity:.6'>ты мне его (даёшь)</i>",
        "opts": [
          "Me lo",
          "Lo me",
          "Me la",
          "Te lo"
        ],
        "answer": "Me lo",
        "why": "Порядок — «кому» (me), потом «что» (lo): me lo das. «Lo me» — обратный порядок, «me la» — для женского, «te lo» — «тебе».",
        "hint": "Сначала «кому», потом «что»; libro — мужского рода 📗"
      },
      {
        "type": "choice",
        "q": "Ahora ___ comiendo. <i style='opacity:.6'>я</i>",
        "opts": [
          "estoy",
          "soy",
          "estaba",
          "estar"
        ],
        "answer": "estoy",
        "why": "Прогрессив сейчас — estar в настоящем: estoy comiendo. Soy — ser, estaba — прошлое, estar — инфинитив.",
        "hint": "«Прямо сейчас» + герундий — нужна форма estar в настоящем 🙂"
      },
      {
        "type": "choice",
        "q": "___ durmiendo cuando sonó el teléfono. <i style='opacity:.6'>я спал</i>",
        "opts": [
          "Estaba",
          "Estoy",
          "Era",
          "Fui"
        ],
        "answer": "Estaba",
        "why": "Сцена в прошлом — estaba + герундий. Estoy — настоящее, era/fui — не вспомогательные для герундия.",
        "hint": "Момент в прошлом, действие шло — бери прошлую форму estar 📞"
      },
      {
        "type": "gap",
        "q": "Ella está ___ un libro. <i style='opacity:.6'>читает — leer</i>",
        "accept": [
          "leyendo"
        ],
        "model": "leyendo",
        "why": "leer пишет y между гласными: leyendo. «Leiendo» неверно.",
        "hint": "У leer в герундии между гласными появляется y 📖"
      },
      {
        "type": "gap",
        "q": "Mientras yo ___, entró el camarero. <i style='opacity:.6'>я ел — comer</i>",
        "accept": [
          "comía",
          "comia"
        ],
        "model": "comía",
        "why": "mientras держит фон → imperfecto: comía. А «вошёл» — событие (entró).",
        "hint": "Под mientras действие длится — это фон, окончание -ía 🍽️"
      },
      {
        "type": "gap",
        "q": "___ lo doy a ella. <i style='opacity:.6'>ей → перед lo</i>",
        "accept": [
          "se"
        ],
        "model": "se",
        "why": "Перед lo клитик le превращается в se: se lo doy.",
        "hint": "Перед „что“ (lo) адресат le не выживает — превращается в другое короткое словечко 🙂"
      },
      {
        "type": "gap",
        "q": "A las ocho yo ___ cenando. <i style='opacity:.6'>был/ужинал — estar</i>",
        "accept": [
          "estaba"
        ],
        "model": "estaba",
        "why": "Прошлый момент в развитии → estaba + герундий (estaba cenando).",
        "hint": "Прошлый момент, действие шло — прошлая форма estar для «я» 🌙"
      },
      {
        "type": "trRE",
        "ru": "Я его вижу каждый день.",
        "accept": [
          "lo veo cada día",
          "lo veo cada dia",
          "lo veo todos los días",
          "lo veo todos los dias"
        ],
        "model": "Lo veo cada día.",
        "why": "«Его» (о предмете м. р.) — lo, и клитик стоит перед глаголом: lo veo.",
        "hint": "Прямое дополнение «его» — перед глаголом, не после 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я пишу тебе письмо.",
        "accept": [
          "te escribo una carta",
          "yo te escribo una carta"
        ],
        "model": "Te escribo una carta.",
        "why": "«Тебе» — te, стоит перед глаголом: te escribo una carta.",
        "hint": "Адресат «тебе» встаёт перед глаголом ✉️"
      },
      {
        "type": "trRE",
        "ru": "Я сейчас готовлю.",
        "accept": [
          "ahora estoy cocinando",
          "estoy cocinando ahora",
          "ahora mismo estoy cocinando",
          "estoy cocinando"
        ],
        "model": "Ahora estoy cocinando.",
        "why": "«Прямо сейчас» → estar + герундий: estoy cocinando.",
        "hint": "«Сейчас» + процесс — estoy + герундий на -ando 🙂"
      },
      {
        "type": "trER",
        "en": "Se lo doy a ella.",
        "accept": [
          "я ей это даю",
          "я даю ей это",
          "я это ей даю",
          "я отдаю ей это"
        ],
        "model": "Я ей это даю.",
        "why": "se здесь = «ей» (перед lo), lo = «это», doy = «даю».",
        "hint": "se заменил «ей», lo — «это» 🙂"
      },
      {
        "type": "trER",
        "en": "Estaba durmiendo cuando llegaste.",
        "accept": [
          "я спал, когда ты пришёл",
          "я спала, когда ты пришла",
          "я спал когда ты пришёл",
          "я спала когда ты пришла",
          "я спал, когда ты пришла"
        ],
        "model": "Я спал, когда ты пришёл.",
        "why": "estaba durmiendo — «спал (в процессе)»; llegaste — «ты пришёл».",
        "hint": "estaba + durmiendo — действие шло; llegaste — ты пришёл 🙂"
      },
      {
        "type": "order",
        "answer": "no lo he leído todavía",
        "accept": [
          "no lo he leído todavía",
          "no lo he leido todavia"
        ],
        "hintRu": "Собери: «Я его ещё не читал.»",
        "model": "No lo he leído todavía.",
        "why": "Клитик lo стоит перед всей связкой haber + причастие: no lo he leído.",
        "hint": "Местоимение lo встаёт перед he + причастие, не внутри 📕"
      },
      {
        "type": "order",
        "answer": "de repente sonó el teléfono",
        "accept": [
          "de repente sonó el teléfono",
          "de repente sono el telefono"
        ],
        "hintRu": "Собери: «Вдруг зазвонил телефон.»",
        "model": "De repente sonó el teléfono.",
        "why": "После de repente — событие → indefinido: sonó.",
        "hint": "«Вдруг» просит точечное событие в прошедшем 📞"
      },
      {
        "type": "match",
        "q": "Соедини инфинитив с герундием.",
        "pairs": [
          [
            "hablar",
            "hablando"
          ],
          [
            "comer",
            "comiendo"
          ],
          [
            "leer",
            "leyendo"
          ],
          [
            "dormir",
            "durmiendo"
          ],
          [
            "escribir",
            "escribiendo"
          ]
        ],
        "why": "Герундий: -ar → -ando, -er/-ir → -iendo; неправильные leyendo (y), durmiendo (o→u).",
        "hint": "-ar даёт -ando, -er/-ir дают -iendo; leer и dormir с сюрпризом 🙂"
      },
      {
        "type": "match",
        "q": "Соедини местоимение «кому» с переводом.",
        "pairs": [
          [
            "me",
            "мне"
          ],
          [
            "te",
            "тебе"
          ],
          [
            "le",
            "ему/ей"
          ],
          [
            "nos",
            "нам"
          ],
          [
            "les",
            "им"
          ]
        ],
        "why": "Косвенные местоимения (кому): me, te, le, nos, os, les.",
        "hint": "Это адресаты «кому»; le сразу и «ему», и «ей» 🙂"
      },
      {
        "type": "describe",
        "prompt": "Опиши, что происходит прямо сейчас вокруг тебя (2 предложения). Используй estar + gerundio: estoy…, está…",
        "keywords": [
          "estoy",
          "está",
          "estamos",
          "están",
          "ahora",
          "ahora mismo",
          "comiendo",
          "leyendo",
          "escribiendo",
          "haciendo",
          "durmiendo"
        ],
        "minWords": 6,
        "model": "Ahora mismo estoy escribiendo en español. Mi hermano está leyendo un libro.",
        "why": "Момент «сейчас» — estar + герундий; форма estar меняется по лицу.",
        "hint": "Каждое действие — estar + герундий; закрепи словом ahora 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи, что ты делал(а) вчера в восемь вечера, когда что-то случилось (2 предложения). Используй estaba + gerundio и cuando.",
        "keywords": [
          "estaba",
          "estábamos",
          "cuando",
          "cenando",
          "durmiendo",
          "viendo",
          "leyendo",
          "sonó",
          "llegó",
          "a las ocho",
          "mientras"
        ],
        "minWords": 6,
        "model": "A las ocho estaba cenando cuando sonó el teléfono. Estaba viendo la tele cuando llegó Ana.",
        "why": "Фон в развитии (estaba + герундий) прерывает событие (indefinido) — их связывает cuando.",
        "hint": "Фон — estaba + герундий, врывается событие в прошедшем через cuando 📞"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен A2",
    "intro": "Это финал A2! 33 задания по всему уровню: три прошедших (perfecto, indefinido, imperfecto) и когда какое; местоимения lo/la/le и se lo; прогрессив estoy/estaba + gerundio; сравнения и превосходная (más… que, el mejor, -ísimo); будущее (voy a, hablaré); команды (haz, di, ven); надо и стоит (tener que, hay que); por и para. Соберись — и вперёд к грамоте A2! 🏆",
    "review": [
      "Три прошедших: <b>perfecto</b> (hoy he hecho), <b>indefinido</b> (ayer hice), <b>imperfecto</b> (antes hacía)",
      "Сильное прошлое и -j: fui, tuve, hice · <b>dijeron</b>; причастия hecho, dicho, visto",
      "Местоимения: <b>lo/la/le</b>, удвоение le… a María, два вместе <b>se lo</b> doy",
      "Прогрессив: <b>estoy</b> comiendo (сейчас) · <b>estaba</b> durmiendo (тогда)",
      "Сравнения: <b>más/menos… que</b>, <b>tan… como</b>, <b>mejor/peor/mayor/menor</b>, más <b>de</b> + число",
      "Превосходная: el/la más… <b>de</b>, <b>-ísimo</b> (carísimo), el <b>mejor</b>/peor",
      "Будущее: <b>ir a</b> + инфинитив и futuro (hablaré, <b>tendré, haré</b>, habrá)",
      "Команды на «ты»: habla, come · <b>haz, di, ven, ve, ten, pon, sal, sé</b>; hazlo, dímelo",
      "Надо и стоит: <b>tener que</b>, <b>hay que</b>, deber, poder; <b>por</b> (причина) / <b>para</b> (цель)"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Yo ___ comido bien hoy. <i style='opacity:.6'>перфект</i>",
        "opts": [
          "he",
          "has",
          "ha",
          "tengo"
        ],
        "answer": "he",
        "why": "Перфект «я» — he comido: haber, а не tener. Has — «ты», ha — «он/она».",
        "hint": "Вспомогательный — haber, для «я» своя форма; не tener 🙂"
      },
      {
        "type": "choice",
        "q": "He ___ la ventana. <i style='opacity:.6'>открыл — abrir</i>",
        "opts": [
          "abierto",
          "abrido",
          "abriendo",
          "abrió"
        ],
        "answer": "abierto",
        "why": "abrir → abierto, особое причастие. Abrido не бывает, abriendo — герундий, abrió — indefinido.",
        "hint": "У abrir причастие особое, не по правилу 🪟"
      },
      {
        "type": "choice",
        "q": "Ayer yo ___ con el jefe. <i style='opacity:.6'>говорил</i>",
        "opts": [
          "hablé",
          "hablo",
          "habló",
          "hablaba"
        ],
        "answer": "hablé",
        "why": "Один разговор вчера → indefinido «я»: hablé. Hablo — настоящее, habló — «он», hablaba — фон.",
        "hint": "«Вчера поговорил» — точечное прошедшее «я» на -é 🙂"
      },
      {
        "type": "choice",
        "q": "Ella ___ la cena anoche. <i style='opacity:.6'>приготовила — hacer</i>",
        "opts": [
          "hizo",
          "hació",
          "hacía",
          "hiciste"
        ],
        "answer": "hizo",
        "why": "«Она сделала» → hizo (z перед o). Hació не бывает, hacía — imperfecto, hiciste — «ты».",
        "hint": "Сильная форма «она» + правило z перед o 🙂"
      },
      {
        "type": "choice",
        "q": "Hoy ___ dos cartas. <i style='opacity:.6'>я написал</i>",
        "opts": [
          "he escrito",
          "escribí",
          "escribía",
          "escribo"
        ],
        "answer": "he escrito",
        "why": "Маркер hoy → perfecto: he escrito (escribir → escrito). Escribí — с ayer, escribía — фон, escribo — настоящее.",
        "hint": "«Hoy» тянет перфект, а у escribir причастие особое ✍️"
      },
      {
        "type": "choice",
        "q": "Antes yo ___ en un pueblo. <i style='opacity:.6'>жил</i>",
        "opts": [
          "vivía",
          "viví",
          "vivo",
          "viviré"
        ],
        "answer": "vivía",
        "why": "«Раньше» (фон/период) → imperfecto: vivía. Viví — один раз, vivo — настоящее, viviré — будущее.",
        "hint": "«Раньше» рисует фон прошлого — окончание -ía 🏡"
      },
      {
        "type": "choice",
        "q": "¿La película? ___ vi ayer. <i style='opacity:.6'>её</i>",
        "opts": [
          "La",
          "Lo",
          "Le",
          "Las"
        ],
        "answer": "La",
        "why": "película — женского рода, единственное → la vi. Lo — мужской, le — «кому», las — множественное.",
        "hint": "«Фильм» по-испански женского рода — форма под него 🎬"
      },
      {
        "type": "choice",
        "q": "___ doy un regalo a mi madre. <i style='opacity:.6'>ей</i>",
        "opts": [
          "Le",
          "La",
          "Lo",
          "Les"
        ],
        "answer": "Le",
        "why": "«Кому» в 3-м лице ед. — le, даже про женщину. La/lo — «что», les — множественное.",
        "hint": "Это адресат «кому», а не «что»; и мама одна 🎁"
      },
      {
        "type": "choice",
        "q": "Ahora ___ estudiando. <i style='opacity:.6'>я</i>",
        "opts": [
          "estoy",
          "soy",
          "estaba",
          "estar"
        ],
        "answer": "estoy",
        "why": "Прогрессив сейчас — estar в настоящем: estoy estudiando. Soy — ser, estaba — прошлое, estar — инфинитив.",
        "hint": "«Сейчас» + герундий — форма estar в настоящем 🙂"
      },
      {
        "type": "choice",
        "q": "Madrid es más grande ___ Toledo. <i style='opacity:.6'>чем</i>",
        "opts": [
          "que",
          "de",
          "como",
          "a"
        ],
        "answer": "que",
        "why": "«Чем» в сравнении — que. De — только перед числом, como — с tan, a — не подходит.",
        "hint": "Сравниваешь с городом, не с числом — нужно «чем» 🙂"
      },
      {
        "type": "choice",
        "q": "Es el mejor restaurante ___ la ciudad. <i style='opacity:.6'>в городе</i>",
        "opts": [
          "de",
          "en",
          "a",
          "por"
        ],
        "answer": "de",
        "why": "«Лучший в…» — это de: el mejor de la ciudad. En — про местоположение, а не «среди».",
        "hint": "В превосходной степени „в/из чего-то“ идёт особый предлог — не тот, что про место (en) 🍽️"
      },
      {
        "type": "choice",
        "q": "Esta noche voy ___ estudiar. <i style='opacity:.6'>ближайшее будущее</i>",
        "opts": [
          "a",
          "—",
          "de",
          "que"
        ],
        "answer": "a",
        "why": "Ближайшее будущее — ir a + инфинитив: voy a estudiar. Без a конструкция разваливается.",
        "hint": "Между voy и инфинитивом нужно маленькое связующее слово 🙂"
      },
      {
        "type": "choice",
        "q": "Mañana yo ___ tiempo. <i style='opacity:.6'>у меня будет — tener</i>",
        "opts": [
          "tendré",
          "teneré",
          "tenré",
          "tendrá"
        ],
        "answer": "tendré",
        "why": "tener в будущем — особая основа tendr-: tendré. Teneré/tenré не бывают, tendrá — «он/она».",
        "hint": "У tener в будущем укороченная основа, а форма «я» несёт чёрточку 🙂"
      },
      {
        "type": "choice",
        "q": "___ la tarea ahora. <i style='opacity:.6'>сделай — hacer, ты</i>",
        "opts": [
          "Haz",
          "Hace",
          "Haces",
          "Hacer"
        ],
        "answer": "Haz",
        "why": "Команда «ты» от hacer — haz (исключение). Hace — «он делает», haces — «ты делаешь», hacer — инфинитив.",
        "hint": "Это приказ «ты» от hacer — короткое исключение 🙂"
      },
      {
        "type": "gap",
        "q": "___ no he desayunado. <i style='opacity:.6'>ещё</i>",
        "accept": [
          "todavía",
          "todavia",
          "aún",
          "aun"
        ],
        "model": "Todavía",
        "why": "«Ещё не» — блок todavía no (или aún no) перед haber.",
        "hint": "Слово «ещё» встаёт перед no и haber единым блоком 🙂"
      },
      {
        "type": "gap",
        "q": "Ayer yo ___ paella. <i style='opacity:.6'>поел — comer</i>",
        "accept": [
          "comí",
          "comi"
        ],
        "model": "comí",
        "why": "У -er «я» в прошлом → comí (-í). Como — настоящее, comió — «он/она».",
        "hint": "comer на -er; у «я» в прошлом хвостик -í 🍽️"
      },
      {
        "type": "gap",
        "q": "Gracias ___ tu ayuda. <i style='opacity:.6'>за</i>",
        "accept": [
          "por"
        ],
        "model": "por",
        "why": "«Спасибо за» — устойчивый блок с por: gracias por.",
        "hint": "„Спасибо за …“ — устойчивое сочетание с предлогом причины/обмена, не para 🙂"
      },
      {
        "type": "gap",
        "q": "___ que beber agua. <i style='opacity:.6'>надо (вообще) — безлично</i>",
        "accept": [
          "hay"
        ],
        "model": "Hay",
        "why": "Безличное «надо» — hay que + инфинитив: hay que beber.",
        "hint": "Безличное „надо“ (без лица) — это форма от haber + que + инфинитив 💧"
      },
      {
        "type": "gap",
        "q": "Cuando yo ___ diez años, vivía en un pueblo. <i style='opacity:.6'>мне было — tener</i>",
        "accept": [
          "tenía",
          "tenia"
        ],
        "model": "tenía",
        "why": "Возраст — фон → imperfecto: tenía diez años.",
        "hint": "Возраст в прошлом — это фон, окончание -ía 🙂"
      },
      {
        "type": "trRE",
        "ru": "Вчера я не смог прийти.",
        "accept": [
          "ayer no pude venir",
          "ayer yo no pude venir"
        ],
        "model": "Ayer no pude venir.",
        "why": "«Не смог» — сильное прошлое pude; venir — прийти.",
        "hint": "«Смог» — сильная форма «я» от poder; дальше инфинитив 🙂"
      },
      {
        "type": "trRE",
        "ru": "Аня выше Тома.",
        "accept": [
          "ana es más alta que tom",
          "ana es mas alta que tom"
        ],
        "model": "Ana es más alta que Tom.",
        "why": "Сравнение: más + прилагательное (согласовано: alta) + que.",
        "hint": "Формула más + прилагательное + que; и согласуй прилагательное по роду 🙂"
      },
      {
        "type": "trRE",
        "ru": "Завтра я поговорю с начальником.",
        "accept": [
          "mañana hablaré con el jefe",
          "manana hablare con el jefe",
          "mañana yo hablaré con el jefe"
        ],
        "model": "Mañana hablaré con el jefe.",
        "why": "Будущее «я» — hablaré (инфинитив + é с чёрточкой).",
        "hint": "Futuro: к инфинитиву прилепи окончание «я» с чёрточкой 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я даю ей это.",
        "accept": [
          "se lo doy",
          "se lo doy a ella",
          "yo se lo doy"
        ],
        "model": "Se lo doy.",
        "why": "«Ей» + «это» = le + lo → se lo doy (le перед lo становится se).",
        "hint": "Когда встречаются два клитика, „кому“-le меняет форму перед „что“ — вспомни как 🙂"
      },
      {
        "type": "trER",
        "en": "Los domingos iba al parque.",
        "accept": [
          "по воскресеньям я ходил в парк",
          "по воскресеньям я ходила в парк",
          "по воскресеньям ходил в парк",
          "по воскресеньям ходила в парк"
        ],
        "model": "По воскресеньям я ходил в парк.",
        "why": "iba — imperfecto «ходил (регулярно)»; los domingos — по воскресеньям.",
        "hint": "iba здесь про привычку — «ходил» регулярно 🌳"
      },
      {
        "type": "trER",
        "en": "Tienes que descansar.",
        "accept": [
          "тебе надо отдохнуть",
          "ты должен отдохнуть",
          "ты должна отдохнуть",
          "тебе нужно отдохнуть",
          "тебе надо отдыхать"
        ],
        "model": "Тебе надо отдохнуть.",
        "why": "tener que + инфинитив — личная обязанность «надо»; descansar — отдыхать.",
        "hint": "tienes que — «тебе надо»; дальше сам глагол 🙂"
      },
      {
        "type": "trER",
        "en": "Estaba durmiendo cuando sonó el teléfono.",
        "accept": [
          "я спал, когда зазвонил телефон",
          "я спала, когда зазвонил телефон",
          "я спал когда зазвонил телефон",
          "я спала когда зазвонил телефон"
        ],
        "model": "Я спал, когда зазвонил телефон.",
        "why": "estaba durmiendo — «спал (в процессе)»; sonó — «зазвонил» (событие).",
        "hint": "Фон estaba durmiendo и врывается событие sonó 📞"
      },
      {
        "type": "order",
        "answer": "me he levantado a las siete",
        "accept": [
          "me he levantado a las siete"
        ],
        "hintRu": "Собери: «Я встал в семь.»",
        "model": "Me he levantado a las siete.",
        "why": "Возвратный клитик me идёт перед haber, потом причастие и время.",
        "hint": "Клитик me — впереди he + причастие, время через a las 🌅"
      },
      {
        "type": "order",
        "answer": "de repente sonó el teléfono",
        "accept": [
          "de repente sonó el teléfono",
          "de repente sono el telefono"
        ],
        "hintRu": "Собери: «Вдруг зазвонил телефон.»",
        "model": "De repente sonó el teléfono.",
        "why": "После de repente — событие → indefinido: sonó.",
        "hint": "«Вдруг» просит точечное событие в прошедшем 📞"
      },
      {
        "type": "order",
        "answer": "vamos a comer paella",
        "accept": [
          "vamos a comer paella"
        ],
        "hintRu": "Собери: «Мы будем есть паэлью.» / «Давай поедим паэлью.»",
        "model": "Vamos a comer paella.",
        "why": "Ближайшее будущее/приглашение: форма nosotros от ir + a + инфинитив.",
        "hint": "vamos + a + инфинитив звучит как план или приглашение 🥘"
      },
      {
        "type": "match",
        "q": "Соедини инфинитив с формой «я» в прошлом (сильные).",
        "pairs": [
          [
            "ir",
            "fui"
          ],
          [
            "tener",
            "tuve"
          ],
          [
            "hacer",
            "hice"
          ],
          [
            "poder",
            "pude"
          ],
          [
            "decir",
            "dije"
          ]
        ],
        "why": "Сильные глаголы: основа меняется, конец безударный (fui, tuve, hice, pude, dije).",
        "hint": "Сильное прошлое: новая основа и безударный конец 🙂"
      },
      {
        "type": "match",
        "q": "Соедини инфинитив с командой на «ты» (императив).",
        "pairs": [
          [
            "hacer",
            "haz"
          ],
          [
            "decir",
            "di"
          ],
          [
            "poner",
            "pon"
          ],
          [
            "venir",
            "ven"
          ],
          [
            "salir",
            "sal"
          ]
        ],
        "why": "Восьмёрка неправильных команд: haz, di, pon, ven, sal (и ve, ten, sé).",
        "hint": "Это особые короткие приказы «ты» — их учат наизусть 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи историю своей жизни (3–4 предложения): где ты родился(лась), каким(ой) был(а) в детстве, что уже сделал(а) и какие у тебя планы. Используй три прошедших и будущее.",
        "keywords": [
          "nací",
          "de niño",
          "de niña",
          "era",
          "vivía",
          "estudié",
          "he vivido",
          "he trabajado",
          "he encontrado",
          "voy a",
          "viviré",
          "trabajaré",
          "viajaré",
          "antes",
          "ahora",
          "el año que viene"
        ],
        "minWords": 10,
        "model": "Nací en Moscú. De niña era tímida y vivía en un pueblo. Estudié Medicina y este año he encontrado un trabajo nuevo. El año que viene viajaré a Japón.",
        "why": "Биография собирает всё: фон (imperfecto), события (indefinido/perfecto) и планы (futuro / voy a).",
        "hint": "Держи слои: фон — imperfecto, события — indefinido/perfecto, планы — futuro или voy a 💛"
      },
      {
        "type": "describe",
        "prompt": "Расскажи о поездке, которая тебе запомнилась (2–3 предложения): куда ездил(а), какая была погода и что делал(а). Используй indefinido и imperfecto.",
        "keywords": [
          "fui a",
          "el año pasado",
          "hacía",
          "era",
          "visité",
          "comí",
          "estuve en",
          "primero",
          "luego",
          "lo pasé genial",
          "mientras"
        ],
        "minWords": 8,
        "model": "El año pasado fui a Italia. Hacía muy buen tiempo. Visité museos, comí pizza y lo pasé genial.",
        "why": "События поездки — indefinido; погода и фон — imperfecto (hacía, era).",
        "hint": "События веди в indefinido, а погоду и фон — в imperfecto (hacía, era) ✈️"
      }
    ]
  }
};

/* ===== helpers ===== */
