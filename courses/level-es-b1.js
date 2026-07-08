/* Spanish B1 — level config + 30-day plan (COURSE). EXAMS filled by next agent.
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'B1',
  course:'es-b1',
  pkey:'langbook-es-b1-progress',
  preview:false,
  finalNote:'Это твоя победа 💛 Полный уровень Español B1 — позади. Горжусь тобой!',
  speech:'es-ES',
  langPo:'по-испански',
  langNa:'испанский',
  langAdj:'испанское',
  phIn:'en español…'
};

const COURSE = [
  {wn:'01', wt:'Неделя 1 — Прошлое как рассказ: контраст времён и pluscuamperfecto', days:[
    {n:1,t:'Снова в пути',p:'De vuelta al camino'},
    {n:2,t:'Пока и вдруг',p:'Mientras y de repente'},
    {n:3,t:'Глаголы-хамелеоны',p:'Verbos que cambian de significado'},
    {n:4,t:'Что было ещё раньше',p:'El pretérito pluscuamperfecto'},
    {n:5,t:'Никогда раньше',p:'Nunca lo había hecho antes'},
    {n:6,t:'Расскажи, что случилось',p:'Contar una anécdota'},
    {n:7,t:'🔄 Повторение №1',p:'Repaso 1'}
  ]},
  {wn:'02', wt:'Неделя 2 — Будущее и гипотеза: futuro, condicional, вероятность', days:[
    {n:8,t:'Каким будет завтра',p:'El futuro y el porvenir'},
    {n:9,t:'Наверное, это…',p:'El futuro de probabilidad'},
    {n:10,t:'Мне бы хотелось',p:'El condicional simple'},
    {n:11,t:'Просьба и совет',p:'Cortesía y consejo'},
    {n:12,t:'Наверное, часа три',p:'Probabilidad en el pasado'},
    {n:13,t:'Если пойдёт дождь',p:'Si llueve, no saldré'},
    {n:14,t:'Повторение №2',p:'Repaso 2'}
  ]},
  {wn:'03', wt:'Неделя 3 — Субхунтив выходит на сцену: желания, эмоции, оценки', days:[
    {n:15,t:'Не делай так',p:'El imperativo negativo'},
    {n:16,t:'Хочу, чтобы ты…',p:'Ojalá y espero que'},
    {n:17,t:'Рад, что ты здесь',p:'Emociones con subjuntivo'},
    {n:18,t:'Важно, чтобы',p:'Es importante que'},
    {n:19,t:'Чтобы и когда',p:'Para que y cuando'},
    {n:20,t:'Не думаю, что',p:'No creo que'},
    {n:21,t:'Повторение №3',p:'Repaso 3'}
  ]},
  {wn:'04', wt:'Неделя 4 — Соединять и передавать: косвенная речь, por/para, perífrasis', days:[
    {n:22,t:'Он сказал, что...',p:'El estilo indirecto'},
    {n:23,t:'Он спросил, приду ли я',p:'Preguntas indirectas'},
    {n:24,t:'По и для до конца',p:'Por y para a fondo'},
    {n:25,t:'Продолжаю, бросил, снова',p:'Seguir, dejar de, volver a'},
    {n:26,t:'Говорят, что...',p:'El se impersonal'},
    {n:27,t:'Хотя и всё же',p:'Conectores del discurso'},
    {n:28,t:'Тот, который',p:'Los relativos'},
    {n:29,t:'Всё вместе',p:'Opinar, desear, contar'},
    {n:30,t:'Мой мир по-испански',p:'Mi mundo en español'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя B1 — про прошлое как рассказ. 25 заданий по всему, что мы разобрали: событие и фон (indefinido двигает сюжет, imperfecto рисует картинку), mientras и de repente, глаголы-хамелеоны (conocí ≠ conocía, supe ≠ sabía, pude ≠ podía), «прошлое до прошлого» — pluscuamperfecto (cuando llegué, ya se habían ido), «никогда раньше» (nunca había…) и живой рассказ с resulta que. Не торопись. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "<b>Событие и фон:</b> indefinido двигает сюжет (llegó, sonó, salí), imperfecto рисует фон (era, hacía, llovía)",
      "Не по русскому виду, а по роли; маркеры: <b>ayer, de repente</b> → indefinido; <b>antes, todos los días, mientras</b> → imperfecto",
      "Фон крупным планом: <b>estaba durmiendo</b> cuando <b>sonó</b> el despertador",
      "Глаголы-хамелеоны: <b>conocí</b> (познакомился) ≠ conocía (был знаком); <b>supe</b> (узнал) ≠ sabía (знал); <b>pude</b> (сумел) ≠ podía (мог)",
      "<b>Pluscuamperfecto:</b> había + причастие — «прошлое до прошлого»: cuando llegué, ya <b>se habían ido</b>",
      "había одна на все лица и не меняется по роду; <b>había</b> ≠ habría («бы»); nunca había…, era la primera vez que…",
      "Ниточка рассказа: <b>total que, resulta que, por suerte, ¡menos mal que!, ¡qué susto!</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Estaba oscuro y de repente ___ el teléfono. <i style='opacity:.6'>зазвонил</i>",
        "opts": [
          "sonó",
          "sonaba",
          "suena",
          "había sonado"
        ],
        "answer": "sonó",
        "why": "Резкое событие на фоне «было темно» — indefinido sonó. Sonaba (imperfecto) растянул бы звонок в фон, suena — настоящее «звонит», había sonado — «уже прозвенел раньше».",
        "hint": "«Вдруг» на неподвижном фоне — это точечное событие в прошедшем 📞"
      },
      {
        "type": "choice",
        "q": "El año pasado ___ de trabajo. <i style='opacity:.6'>я сменил</i>",
        "opts": [
          "cambié",
          "cambiaba",
          "he cambiado",
          "cambiaré"
        ],
        "answer": "cambié",
        "why": "«В прошлом году» + законченное событие → indefinido cambié. Cambiaba — фон/привычка «менял», he cambiado — перфект для «сегодня/в этом году», cambiaré — будущее.",
        "hint": "Закрытый отрезок «в прошлом году» просит точечное прошедшее 🙂"
      },
      {
        "type": "choice",
        "q": "Mientras yo ___, entró el camarero. <i style='opacity:.6'>ел — comer</i>",
        "opts": [
          "comía",
          "comí",
          "como",
          "había comido"
        ],
        "answer": "comía",
        "why": "Под mientras действие тянется как фон → imperfecto comía. Comí (indefinido) сделал бы это событием, como — настоящее, había comido — «уже поел раньше».",
        "hint": "mientras держит фон — окончание -ía 🍽️"
      },
      {
        "type": "choice",
        "q": "___ durmiendo cuando sonó el despertador. <i style='opacity:.6'>я спал</i>",
        "opts": [
          "Estaba",
          "Estuve",
          "Era",
          "Estoy"
        ],
        "answer": "Estaba",
        "why": "Длящийся фон в прошлом — estaba + герундий. Estuve — точечное «пробыл», era — «был» (ser, не строит герундий), estoy — настоящее.",
        "hint": "Действие шло в тот момент — прошлая форма estar для «я» ⏰"
      },
      {
        "type": "choice",
        "q": "Ayer ___ a tu hermana en la fiesta. <i style='opacity:.6'>познакомился</i>",
        "opts": [
          "conocí",
          "conocía",
          "conozco",
          "conoceré"
        ],
        "answer": "conocí",
        "why": "Момент знакомства — indefinido conocí. Conocía — «был знаком» (состояние-фон), conozco — «знаю» сейчас, conoceré — «познакомлюсь» (будущее).",
        "hint": "«Познакомился» — это точка встречи, а не долгое «был знаком» 🙂"
      },
      {
        "type": "choice",
        "q": "Yo ya ___ la respuesta, por eso no pregunté. <i style='opacity:.6'>знал</i>",
        "opts": [
          "sabía",
          "supe",
          "sé",
          "sabré"
        ],
        "answer": "sabía",
        "why": "«Уже знал» как тянущееся состояние-фон → imperfecto sabía (потому и не спросил). Supe — «узнал» (момент, тут противоречит смыслу), sé — «знаю» сейчас, sabré — «узнаю» (будущее).",
        "hint": "«Уже знал» — длящееся состояние, а не вспышка «узнал» 🙂"
      },
      {
        "type": "choice",
        "q": "Al final ___ entrar en la casa. <i style='opacity:.6'>я сумел</i>",
        "opts": [
          "pude",
          "podía",
          "puedo",
          "podré"
        ],
        "answer": "pude",
        "why": "«Сумел, получилось» — indefinido pude. Podía — «мог, был способен» (без итога), puedo — «могу» сейчас, podré — «смогу» (будущее).",
        "hint": "Есть результат «получилось войти» — точечное завершённое действие, а не тянущаяся способность 🔑"
      },
      {
        "type": "choice",
        "q": "Cuando llegué a la oficina, la reunión ya ___ empezado. <i style='opacity:.6'>началась</i>",
        "opts": [
          "había",
          "ha",
          "habrá",
          "habría"
        ],
        "answer": "había",
        "why": "Событие раньше прихода — pluscuamperfecto había empezado. Ha — перфект (для «сегодня»), habrá — «наверное, началась», habría — условное «началась бы».",
        "hint": "Собрание стартовало ДО твоего прихода — нужен «шаг назад» вспомогательным глаголом 🕒"
      },
      {
        "type": "choice",
        "q": "Antes de aquel día, nunca ___ visto el mar. <i style='opacity:.6'>реально: раньше не видел</i>",
        "opts": [
          "había",
          "habría",
          "habré",
          "he"
        ],
        "answer": "había",
        "why": "Реальный опыт до момента — había visto. Habría visto — «увидел бы» (гипотеза), habré visto — «наверное, увидел», he visto — перфект «(сегодня) видел».",
        "hint": "Речь о том, что реально было раньше, а не «бы» 🌊"
      },
      {
        "type": "choice",
        "q": "No encontraba las llaves… ___ estaban en mi bolsillo. <i style='opacity:.6'>оказывается</i>",
        "opts": [
          "Resulta que",
          "Menos mal que",
          "Por eso",
          "Aunque"
        ],
        "answer": "Resulta que",
        "why": "Развязку «оказывается» вводит resulta que. Menos mal que — «хорошо, что», por eso — «поэтому» (следствие), aunque — «хотя» (уступка).",
        "hint": "Неожиданная разгадка истории открывается через «оказывается» 🔑"
      },
      {
        "type": "gap",
        "q": "Cuando bajé a la cocina, mi familia ya ___ desayunado. <i style='opacity:.6'>había… — haber</i>",
        "accept": [
          "había",
          "habia"
        ],
        "model": "había",
        "why": "«Уже позавтракали до того, как я спустился» — pluscuamperfecto había desayunado. Форма había одна на все лица.",
        "hint": "Завтрак случился раньше — вспомогательный шаг назад 🙂"
      },
      {
        "type": "gap",
        "q": "Era de noche y ___ mucho frío. <i style='opacity:.6'>было (о погоде) — hacer</i>",
        "accept": [
          "hacía",
          "hacia"
        ],
        "model": "hacía",
        "why": "Погода-фон в прошлом — imperfecto hacía frío. Hizo (indefinido) сообщал бы это как событие, а тут описание сцены.",
        "hint": "Погода рисует фон — окончание -ía у hacer ❄️"
      },
      {
        "type": "gap",
        "q": "Aquel verano ___ a mi mejor amiga. <i style='opacity:.6'>познакомился — conocer</i>",
        "accept": [
          "conocí",
          "conoci"
        ],
        "model": "conocí",
        "why": "Момент знакомства — indefinido conocí. Conocía значило бы «был знаком» (состояние).",
        "hint": "Знакомство — точка на линии времени, форма «я» на -í 🙂"
      },
      {
        "type": "gap",
        "q": "En aquel momento ___ toda la verdad. <i style='opacity:.6'>узнал — saber</i>",
        "accept": [
          "supe"
        ],
        "model": "supe",
        "why": "«Узнал (в тот миг)» — indefinido supe. Sabía было бы «знал» вообще (фон).",
        "hint": "Правда дошла в один конкретный миг — это точечное «узнал», а не тянущееся «знал» 🙂"
      },
      {
        "type": "trRE",
        "ru": "Вчера я опоздал на поезд.",
        "accept": [
          "ayer perdí el tren",
          "ayer yo perdí el tren",
          "ayer perdi el tren",
          "ayer yo perdi el tren"
        ],
        "model": "Ayer perdí el tren.",
        "why": "«Опоздать на поезд» — perder el tren; закрытое «вчера» → indefinido perdí.",
        "hint": "«Вчера» + событие; «опоздать на поезд» = perder el tren 🚆"
      },
      {
        "type": "trRE",
        "ru": "Пока я спал, зазвонил телефон.",
        "accept": [
          "mientras dormía sonó el teléfono",
          "mientras yo dormía sonó el teléfono",
          "mientras dormia sono el telefono",
          "mientras yo dormia sono el telefono"
        ],
        "model": "Mientras dormía, sonó el teléfono.",
        "why": "Фон с mientras → imperfecto dormía; вторжение «зазвонил» → indefinido sonó.",
        "hint": "mientras + фон (-ía), потом резкое событие в прошедшем 📞"
      },
      {
        "type": "trRE",
        "ru": "Я уже поел, когда ты позвонил.",
        "accept": [
          "ya había comido cuando llamaste",
          "ya había comido cuando me llamaste",
          "ya habia comido cuando llamaste",
          "ya habia comido cuando me llamaste"
        ],
        "model": "Ya había comido cuando llamaste.",
        "why": "«Уже поел до звонка» — pluscuamperfecto había comido; «позвонил» — indefinido llamaste.",
        "hint": "Шаг назад: había comido, а звонок — точечное прошедшее 🙂"
      },
      {
        "type": "trER",
        "en": "No pude venir a tiempo.",
        "accept": [
          "я не смог прийти вовремя",
          "я не смогла прийти вовремя",
          "я не смог приехать вовремя",
          "я не смогла приехать вовремя",
          "я не успел прийти вовремя"
        ],
        "model": "Я не смог прийти вовремя.",
        "why": "pude — «смог» (сильное прошлое poder), venir — прийти, a tiempo — вовремя, no — не.",
        "hint": "no pude — сильное прошедшее от poder; a tiempo — устойчивое «вовремя» 🙂"
      },
      {
        "type": "trER",
        "en": "Nunca había visto el mar.",
        "accept": [
          "я никогда раньше не видел море",
          "я никогда раньше не видела море",
          "я никогда не видел море",
          "я никогда не видела море",
          "я раньше никогда не видел моря",
          "я никогда не видел моря"
        ],
        "model": "Я никогда раньше не видел море.",
        "why": "nunca había visto — «никогда (раньше) не видел» (pluscuamperfecto опыта до момента); el mar — море.",
        "hint": "había visto — про опыт до какого-то момента в прошлом 🌊"
      },
      {
        "type": "order",
        "answer": "cuando llegué todos ya se habían ido",
        "accept": [
          "cuando llegué todos ya se habían ido",
          "cuando llegue todos ya se habian ido"
        ],
        "hintRu": "Собери: «Когда я пришёл, все уже ушли.»",
        "model": "Cuando llegué, todos ya se habían ido.",
        "why": "Уход случился раньше прихода → pluscuamperfecto se habían ido; llegué — событие-точка.",
        "hint": "Сначала момент прихода (llegué), а уход был ещё раньше — se habían ido 🚪"
      },
      {
        "type": "order",
        "answer": "de repente se apagó la luz",
        "accept": [
          "de repente se apagó la luz",
          "de repente se apago la luz"
        ],
        "hintRu": "Собери: «Вдруг погас свет.»",
        "model": "De repente se apagó la luz.",
        "why": "После de repente — резкое событие → indefinido se apagó.",
        "hint": "«Вдруг» зовёт точечное прошедшее se apagó 💡"
      },
      {
        "type": "match",
        "q": "Соедини форму с её значением (глаголы-хамелеоны).",
        "pairs": [
          [
            "conocí",
            "познакомился"
          ],
          [
            "conocía",
            "был знаком"
          ],
          [
            "supe",
            "узнал (в тот миг)"
          ],
          [
            "sabía",
            "знал (раньше)"
          ],
          [
            "pude",
            "сумел, получилось"
          ]
        ],
        "why": "Indefinido даёт точку-событие (conocí, supe, pude), imperfecto — тянущееся состояние (conocía, sabía).",
        "hint": "Точка-событие против тянущегося состояния — вот и вся разница 🙂"
      },
      {
        "type": "match",
        "q": "Соедини коннектор рассказа с переводом.",
        "pairs": [
          [
            "primero",
            "сначала"
          ],
          [
            "luego",
            "потом"
          ],
          [
            "de repente",
            "вдруг"
          ],
          [
            "al final",
            "в итоге"
          ],
          [
            "resulta que",
            "оказывается"
          ]
        ],
        "why": "Это ниточки истории: primero/luego ведут порядок, de repente вносит поворот, al final подводит итог, resulta que открывает развязку.",
        "hint": "Слова, что ведут рассказ от начала к развязке 🧵"
      },
      {
        "type": "describe",
        "prompt": "Расскажи короткую историю из прошлого (2–3 предложения): сначала фон (какая была погода, где ты был), потом что вдруг случилось. Используй imperfecto (фон) и indefinido (событие).",
        "keywords": [
          "era",
          "estaba",
          "hacía",
          "llovía",
          "mientras",
          "de repente",
          "de pronto",
          "empezó",
          "sonó",
          "salí",
          "llegué",
          "al final"
        ],
        "minWords": 8,
        "model": "Era de noche y hacía frío. Mientras caminaba por la calle, de repente empezó a llover. Al final llegué a casa empapado.",
        "why": "Фон рисуем imperfecto (era, hacía, llovía), а события двигаем indefinido (empezó, llegué); связываем de repente, al final.",
        "hint": "Сначала фон на -aba/-ía, потом резкое событие в прошедшем 🌧️"
      },
      {
        "type": "describe",
        "prompt": "Расскажи о том, что ты сделал впервые, или о забавном случае (2–3 предложения). Используй pluscuamperfecto (nunca había…) и indefinido, добавь реакцию (¡qué susto!, resulta que…).",
        "keywords": [
          "nunca había",
          "por primera vez",
          "había",
          "aquel día",
          "me di cuenta",
          "resulta que",
          "total que",
          "al final",
          "de repente",
          "¡qué susto!"
        ],
        "minWords": 8,
        "model": "Aquel día hice algo que nunca había hecho antes: viajé sola. Al principio tenía miedo, pero de repente me di cuenta de que era fácil. Resulta que todo salió genial.",
        "why": "Опыт до момента — pluscuamperfecto (nunca había hecho), поворот — indefinido (viajé, me di cuenta), развязка — resulta que.",
        "hint": "«Никогда раньше не…» через había + причастие, потом сам поступок и развязка 🙂"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя — про будущее и предположения. 25 заданий: futuro simple и десять строптивых основ (tendré, haré, saldré), догадка о настоящем через будущее (¿Qué hora será? — Serán las tres), условное с «бы» (me gustaría, sería genial), вежливость и совет (¿Podrías…?, deberías, yo que tú), догадка о прошлом (Serían las tres, Habría cien personas) и реальное условие (Si llueve, no saldré). Наберёшь 80% — откроется Неделя 3. 💛",
    "review": [
      "<b>Futuro simple:</b> инфинитив + -é, -ás, -á, -emos, -éis, -án — hablaré, comeré",
      "Строптивые основы: <b>tendré, haré, podré, saldré, vendré, diré, querré, sabré, pondré, habrá</b>",
      "<b>Ir a</b> + инфинитив (ближний план, улика сейчас) против futuro (прогноз, обещание): va a llover ≠ lloverá",
      "Догадка о настоящем — <b>futuro</b>: ¿Qué hora será? Serán las tres; Tendrá unos 30 años; Estará durmiendo",
      "<b>Condicional:</b> основа futuro + -ía — me gustaría, sería genial, podría; вежливость ¿Podrías…?, deberías, yo que tú",
      "Догадка о прошлом — <b>condicional</b>: Serían las tres, Tendría 20 años, <b>Habría</b> cien personas (haber в ед.)",
      "Реальное условие: <b>si + настоящее</b>, следствие — futuro/императив; после si НИКОГДА не будущее (не «si lloverá»)"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Mañana te ___ sin falta. <i style='opacity:.6'>позвоню — llamar</i>",
        "opts": [
          "llamaré",
          "llamo",
          "llamaba",
          "llamaría"
        ],
        "answer": "llamaré",
        "why": "Будущее «позвоню» — futuro llamaré. Llamo — настоящее «звоню», llamaba — прошлый фон «звонил», llamaría — условное «позвонил бы».",
        "hint": "«Завтра» + обещание — простое будущее на -é 🙂"
      },
      {
        "type": "choice",
        "q": "Mañana yo ___ más tiempo libre. <i style='opacity:.6'>у меня будет — tener</i>",
        "opts": [
          "tendré",
          "teneré",
          "tenré",
          "tendría"
        ],
        "answer": "tendré",
        "why": "tener в будущем — основа tendr-: tendré. «teneré» регуляризирует основу, «tenré» — обломок без гласной, tendría — условное «было бы».",
        "hint": "У tener в будущем укороченная основа, а форма «я» несёт чёрточку 🙂"
      },
      {
        "type": "choice",
        "q": "¡Mira esas nubes! ___. <i style='opacity:.6'>вот-вот дождь</i>",
        "opts": [
          "Va a llover",
          "Lloverá",
          "Llueve",
          "Llovía"
        ],
        "answer": "Va a llover",
        "why": "Улика прямо сейчас, ближний план — va a llover. Lloverá — отвлечённый прогноз, llueve — «идёт уже сейчас», llovía — прошлое «шёл».",
        "hint": "Есть примета перед глазами — это ir a + инфинитив 🌧️"
      },
      {
        "type": "choice",
        "q": "—¿Qué hora es? —No sé, ___ las tres. <i style='opacity:.6'>наверное</i>",
        "opts": [
          "serán",
          "son",
          "serían",
          "van a ser"
        ],
        "answer": "serán",
        "why": "Догадка о том, что сейчас, — futuro serán. Son — точное «сейчас три», serían — догадка о ПРОШЛОМ, van a ser — «скоро будет три».",
        "hint": "Не знаешь точно, но прикидываешь про сейчас — будущее в роли догадки 🕒"
      },
      {
        "type": "choice",
        "q": "Ese chico ___ unos cuarenta años. <i style='opacity:.6'>ему, наверное — tener</i>",
        "opts": [
          "tendrá",
          "estará",
          "será",
          "tenía"
        ],
        "answer": "tendrá",
        "why": "Возраст-догадку строим через tener: tendrá. Estar и ser с años не сочетаются, tenía — «было» (факт/фон, а не догадка о сейчас).",
        "hint": "Возраст — всегда tener; догадка о настоящем — форма будущего 🙂"
      },
      {
        "type": "choice",
        "q": "___ con él, pero me da vergüenza. <i style='opacity:.6'>я бы поговорил — hablar</i>",
        "opts": [
          "Hablaría",
          "Hablaré",
          "Hablaba",
          "Hablo"
        ],
        "answer": "Hablaría",
        "why": "«Поговорил бы» — condicional hablaría. Hablaré — «поговорю» (реально), hablaba — «говорил» (прошлое), hablo — «говорю» (сейчас).",
        "hint": "Русское «бы» прячется в окончании -ía 🙂"
      },
      {
        "type": "choice",
        "q": "¿___ ayudarme, por favor? <i style='opacity:.6'>не мог бы</i>",
        "opts": [
          "Podrías",
          "Puedes",
          "Poderías",
          "Podrás"
        ],
        "answer": "Podrías",
        "why": "Вежливая просьба — condicional podrías. Puedes — прямее «можешь», poderías — неверная основа, podrás — «сможешь» (будущее).",
        "hint": "Мягкая просьба «не мог бы» — это условное от poder 🙂"
      },
      {
        "type": "choice",
        "q": "Sería mejor ___ un poco antes de decidir. <i style='opacity:.6'>отдохнуть — descansar</i>",
        "opts": [
          "descansar",
          "descansas",
          "descanses",
          "descansa"
        ],
        "answer": "descansar",
        "why": "После sería mejor — инфинитив: sería mejor descansar. Descansas — настоящее «отдыхаешь», descanses — субхунтив (нужен триггер), descansa — приказ «отдохни».",
        "hint": "«Было бы лучше …» тянет за собой голый инфинитив 🙂"
      },
      {
        "type": "choice",
        "q": "___ las tres cuando por fin llegó. <i style='opacity:.6'>было, наверное</i>",
        "opts": [
          "Serían",
          "Son",
          "Serán",
          "Fueron"
        ],
        "answer": "Serían",
        "why": "Догадка о прошлом — condicional serían. Son — «сейчас три», serán — догадка о настоящем «наверное, сейчас три», fueron — точный факт без догадки.",
        "hint": "Прикидка про прошлое зеркалит будущее: será → sería 🕒"
      },
      {
        "type": "choice",
        "q": "Si ___ sol, iremos a la playa. <i style='opacity:.6'>будет — hacer</i>",
        "opts": [
          "hace",
          "hará",
          "hizo",
          "haga"
        ],
        "answer": "hace",
        "why": "После si — настоящее hace, хоть по-русски «будет». Hará — запрещённое будущее после si, hizo — прошлое, haga — субхунтив (тут не тот случай).",
        "hint": "После si будущее нельзя — ставь настоящее ☀️"
      },
      {
        "type": "gap",
        "q": "Mañana yo ___ deporte por la mañana. <i style='opacity:.6'>буду заниматься — hacer</i>",
        "accept": [
          "haré",
          "hare"
        ],
        "model": "haré",
        "why": "hacer в будущем — основа har-: haré. Формы «haceré» не существует.",
        "hint": "hacer берёт короткую основу har- + окончание «я» с чёрточкой 🙂"
      },
      {
        "type": "gap",
        "q": "Me ___ vivir junto al mar algún día. <i style='opacity:.6'>мне бы хотелось — gustar</i>",
        "accept": [
          "gustaría",
          "gustaria"
        ],
        "model": "gustaría",
        "why": "Мягкое желание «мне бы хотелось» — condicional gustaría. Me gusta — «нравится» (факт), me gustará — «понравится».",
        "hint": "«Мне бы хотелось» — это gustar с окончанием -ía 🌊"
      },
      {
        "type": "gap",
        "q": "En la fiesta ___ unas cien personas. <i style='opacity:.6'>было, наверное — haber</i>",
        "accept": [
          "habría",
          "habria"
        ],
        "model": "habría",
        "why": "Прикидка о прошлом — condicional, и haber всегда в единственном: habría. «Habrían» — ошибка числа, había — «было» (факт, без догадки).",
        "hint": "Догадка о прошлом — это условное наклонение, и haber тут всегда в единственном числе 🙂"
      },
      {
        "type": "gap",
        "q": "Si tienes tiempo por la mañana, ___. <i style='opacity:.6'>позвони мне — llamar</i>",
        "accept": [
          "llámame",
          "llamame"
        ],
        "model": "llámame",
        "why": "Следствие-просьба — императив llámame. «Me llamarás» — будущее «позвонишь» (не просьба), «me llamas» — настоящее.",
        "hint": "Просьба после si — это команда «ты» с местоимением сзади 📞"
      },
      {
        "type": "trRE",
        "ru": "Завтра я поговорю с начальником.",
        "accept": [
          "mañana hablaré con el jefe",
          "mañana yo hablaré con el jefe",
          "manana hablare con el jefe",
          "manana yo hablare con el jefe"
        ],
        "model": "Mañana hablaré con el jefe.",
        "why": "«Поговорю» — futuro hablaré (инфинитив + é с чёрточкой).",
        "hint": "Futuro: к инфинитиву прилепи окончание «я» с чёрточкой 🙂"
      },
      {
        "type": "trRE",
        "ru": "Мне бы хотелось поехать в Испанию.",
        "accept": [
          "me gustaría ir a españa",
          "me gustaría viajar a españa",
          "me gustaria ir a espana",
          "me gustaria viajar a espana"
        ],
        "model": "Me gustaría ir a España.",
        "why": "Мягкое желание «мне бы хотелось» — condicional me gustaría; «поехать» — ir a.",
        "hint": "«Хотелось бы» — это gustar в условном + инфинитив 🇪🇸"
      },
      {
        "type": "trRE",
        "ru": "Если пойдёт дождь, я не выйду.",
        "accept": [
          "si llueve no saldré",
          "si llueve no voy a salir",
          "si llueve no saldre"
        ],
        "model": "Si llueve, no saldré.",
        "why": "После si — настоящее llueve, следствие — futuro saldré. После si будущее ставить нельзя.",
        "hint": "si + настоящее → следствие в будущем; никакого «si lloverá» 🌧️"
      },
      {
        "type": "trER",
        "en": "Deberías descansar más.",
        "accept": [
          "тебе стоило бы больше отдыхать",
          "тебе стоит больше отдыхать",
          "тебе следует больше отдыхать",
          "тебе надо больше отдыхать",
          "ты должен больше отдыхать",
          "ты должна больше отдыхать",
          "тебе бы стоило больше отдыхать"
        ],
        "model": "Тебе стоило бы больше отдыхать.",
        "why": "deberías — мягкий совет «тебе стоило бы» (condicional от deber); descansar — отдыхать.",
        "hint": "deberías — мягкий совет: deber в условном наклонении 🙂"
      },
      {
        "type": "trER",
        "en": "Estará durmiendo ahora.",
        "accept": [
          "он наверное сейчас спит",
          "она наверное сейчас спит",
          "наверное он сейчас спит",
          "наверное она сейчас спит",
          "он, наверное, сейчас спит",
          "наверное сейчас спит"
        ],
        "model": "Он, наверное, сейчас спит.",
        "why": "Futuro de probabilidad: estará durmiendo — «наверное, спит»; вероятность прячется в самой форме, отдельного «наверное» не нужно.",
        "hint": "estará + герундий — догадка «наверное, делает» 😴"
      },
      {
        "type": "order",
        "answer": "el año que viene me mudaré a la costa",
        "accept": [
          "el año que viene me mudaré a la costa",
          "el ano que viene me mudare a la costa"
        ],
        "hintRu": "Собери: «В следующем году я перееду на побережье.»",
        "model": "El año que viene me mudaré a la costa.",
        "why": "«В следующем году» — план на будущее → futuro me mudaré; el año que viene — маркер будущего.",
        "hint": "Маркер el año que viene зовёт форму будущего 🏖️"
      },
      {
        "type": "order",
        "answer": "serían las tres cuando llegó",
        "accept": [
          "serían las tres cuando llegó",
          "serian las tres cuando llego"
        ],
        "hintRu": "Собери: «Было, наверное, часа три, когда он пришёл.»",
        "model": "Serían las tres cuando llegó.",
        "why": "Догадка о прошлом — condicional serían; сам приход — событие indefinido llegó.",
        "hint": "Часы-догадка о прошлом — sería; приход — точечное прошедшее 🕒"
      },
      {
        "type": "match",
        "q": "Соедини инфинитив с формой «я» в будущем (futuro).",
        "pairs": [
          [
            "tener",
            "tendré"
          ],
          [
            "hacer",
            "haré"
          ],
          [
            "poder",
            "podré"
          ],
          [
            "decir",
            "diré"
          ],
          [
            "salir",
            "saldré"
          ]
        ],
        "why": "Неправильные основы будущего: tendr-, har-, podr-, dir-, saldr- + окончание -é. Те же основы работают и в условном (-ía).",
        "hint": "Строптивые основы будущего — их учат наизусть 🙂"
      },
      {
        "type": "match",
        "q": "Соедини форму-догадку с тем, о чём она гадает.",
        "pairs": [
          [
            "serán las tres",
            "наверное, сейчас три"
          ],
          [
            "serían las tres",
            "наверное, было три"
          ],
          [
            "tendrá treinta",
            "наверное, ему сейчас тридцать"
          ],
          [
            "tendría treinta",
            "наверное, тогда было тридцать"
          ],
          [
            "habría cien",
            "наверное, было около ста"
          ]
        ],
        "why": "Догадка о настоящем — futuro (será, tendrá), догадка о прошлом — condicional (sería, tendría, habría).",
        "hint": "Будущее гадает о сейчас, условное — о прошлом 🪞"
      },
      {
        "type": "describe",
        "prompt": "Расскажи о своих планах на следующий год (2–3 предложения): один прогноз и один план с условием. Используй futuro (haré, tendré…) и si + настоящее.",
        "keywords": [
          "el año que viene",
          "dentro de",
          "seguro que",
          "si",
          "haré",
          "tendré",
          "viajaré",
          "me mudaré",
          "empezaré",
          "será",
          "prometo",
          "aprenderé"
        ],
        "minWords": 8,
        "model": "El año que viene empezaré un curso nuevo y seguro que aprenderé mucho. Si tengo tiempo, viajaré a España en verano.",
        "why": "План и прогноз — futuro; реальное условие — si + настоящее, следствие в будущем.",
        "hint": "Будущее на -é для планов, а условие через si + настоящее 🙂"
      },
      {
        "type": "describe",
        "prompt": "Погадай о незнакомце (в кафе, в метро) или о старом фото (2–3 предложения): сколько ему лет, что он делает или делал. Используй futuro (será, tendrá) и condicional для прошлого (sería, tendría).",
        "keywords": [
          "tendrá",
          "será",
          "estará",
          "a lo mejor",
          "supongo que",
          "serían",
          "tendría",
          "habría",
          "seguramente",
          "unos"
        ],
        "minWords": 8,
        "model": "Esa mujer tendrá unos treinta años y estará esperando a alguien. En la foto antigua yo tendría diez años y serían las seis de la tarde.",
        "why": "Догадка о настоящем — futuro (será, tendrá, estará), догадка о прошлом — condicional (sería, tendría, habría).",
        "hint": "Гадай про сейчас будущим, про прошлое — условным 🔮"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя — субхунтив выходит на сцену. 25 заданий: отрицательный императив (no hables, no lo toques), настоящий субхунтив и его строптивые (sea, esté, vaya, sepa, dé, haya), желания (quiero que, ojalá), эмоции (me alegro de que), оценки (es importante que), цель и время (para que, cuando llegue) и мнение с его отрицанием (creo que ↔ no creo que). Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Отрицательный императив «ты»: <b>no hables, no comas, no vengas</b>; местоимение вперёд: dímelo → <b>no me lo digas</b>",
      "Настоящий субхунтив: -ar → -e (<b>hable</b>), -er/-ir → -a (<b>coma, viva</b>); строптивые <b>sea, esté, vaya, sepa, dé, haya</b>",
      "Желание: <b>quiero que, espero que, ojalá</b> + субхунтив; одно лицо → инфинитив (quiero venir), два → que + субхунтив (quiero que vengas)",
      "Эмоция: <b>me alegro de que, me molesta que, temo que</b> + субхунтив — даже о реальном факте",
      "Оценка: <b>es importante/necesario que, te aconsejo que</b> + субхунтив; но факт <b>es verdad que, está claro que</b> → индикатив",
      "Цель и время: <b>para que</b> + субхунтив (разные субъекты) ≠ para + инфинитив; <b>cuando llegue</b> (будущее), antes de que + субхунтив",
      "Мнение: <b>creo que</b> + индикатив, а <b>no creo que, dudo que</b> + субхунтив; один «no» меняет наклонение"
    ],
    "q": [
      {
        "type": "choice",
        "q": "No ___ tan alto, por favor. <i style='opacity:.6'>не говори — hablar</i>",
        "opts": [
          "hables",
          "hablas",
          "habla",
          "hablar"
        ],
        "answer": "hables",
        "why": "Запрет на «ты» от hablar — no hables (с -es). Hablas — настоящее «ты говоришь», habla — «он говорит» / приказ «говори», hablar — инфинитив.",
        "hint": "В запрете глагол «переворачивает» гласную: -ar → -es 🤫"
      },
      {
        "type": "choice",
        "q": "¿El botón rojo? No ___. <i style='opacity:.6'>не трогай его — tocar</i>",
        "opts": [
          "lo toques",
          "lo tocas",
          "tócalo",
          "toques lo"
        ],
        "answer": "lo toques",
        "why": "В запрете местоимение идёт впереди + субхунтив: no lo toques. Lo tocas — настоящее «ты его трогаешь», tócalo — утвердительная команда (клитик сзади), «toques lo» — неверный порядок.",
        "hint": "В отрицательной команде местоимение встаёт перед глаголом ⛔"
      },
      {
        "type": "choice",
        "q": "Quiero que ___ conmigo a la fiesta. <i style='opacity:.6'>чтобы ты пошёл — venir</i>",
        "opts": [
          "vengas",
          "vienes",
          "venir",
          "vendrás"
        ],
        "answer": "vengas",
        "why": "quiero que + другой субъект → субхунтив vengas. Vienes — индикатив «приходишь», venir — инфинитив (был бы при одном лице: quiero venir), vendrás — будущее.",
        "hint": "«Хочу, чтобы ТЫ…» — смена лица включает субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "Ojalá mañana ___ buen tiempo. <i style='opacity:.6'>была — hacer</i>",
        "opts": [
          "haga",
          "hace",
          "hará",
          "hizo"
        ],
        "answer": "haga",
        "why": "После ojalá всегда субхунтив: haga. Hace — настоящее, hará — будущее, hizo — прошлое; ojalá — это мечта, а не факт.",
        "hint": "ojalá — чистая мечта, а мечта зовёт субхунтив 🍀"
      },
      {
        "type": "choice",
        "q": "Me alegro de que ___ aquí. <i style='opacity:.6'>что ты здесь — estar</i>",
        "opts": [
          "estés",
          "estás",
          "estar",
          "estarás"
        ],
        "answer": "estés",
        "why": "Эмоция alegrarse de que → субхунтив estés. Estás — индикатив факта (sé que estás aquí), estar — инфинитив, estarás — будущее.",
        "hint": "Чувство о твоём присутствии — даже о реальном факте субхунтив 💛"
      },
      {
        "type": "choice",
        "q": "Es importante que ___ más. <i style='opacity:.6'>ты отдыхал — descansar</i>",
        "opts": [
          "descanses",
          "descansas",
          "descansar",
          "descansarás"
        ],
        "answer": "descanses",
        "why": "Оценка es importante que → субхунтив descanses. Descansas — индикатив, descansar — инфинитив (без que: es importante descansar), descansarás — будущее.",
        "hint": "«Важно, чтобы ТЫ…» — оценка + смена лица зовут субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "Es verdad que ___ mucho. <i style='opacity:.6'>ты работаешь — trabajar</i>",
        "opts": [
          "trabajas",
          "trabajes",
          "trabajar",
          "trabajarás"
        ],
        "answer": "trabajas",
        "why": "es verdad que сообщает факт → индикатив trabajas. Субхунтив trabajes включила бы оценка/эмоция (es una pena que trabajes), а тут констатация.",
        "hint": "«Правда, что…» — это факт, а факт берёт индикатив 🙂"
      },
      {
        "type": "choice",
        "q": "Te lo explico ___ lo entiendas. <i style='opacity:.6'>чтобы ты понял</i>",
        "opts": [
          "para que",
          "para",
          "porque",
          "por"
        ],
        "answer": "para que",
        "why": "Субъекта два (я объясняю, ты понимаешь) → para que + субхунтив. Para + инфинитив тут не встанет, porque — «потому что», por — «из-за».",
        "hint": "Два разных лица (я объясняю — ты понимаешь) требуют союза цели с субхунтивом 🎯"
      },
      {
        "type": "choice",
        "q": "Cuando ___ a casa, te llamo. <i style='opacity:.6'>приду — llegar</i>",
        "opts": [
          "llegue",
          "llego",
          "llegaré",
          "llegaba"
        ],
        "answer": "llegue",
        "why": "Один будущий приезд после cuando → субхунтив llegue. Llego — привычка «каждый раз», llegaré — futuro после cuando о будущем запрещён, llegaba — прошлое.",
        "hint": "cuando о будущем зовёт субхунтив, а не «cuando llegaré» 🙂"
      },
      {
        "type": "choice",
        "q": "No creo que ___ hoy. <i style='opacity:.6'>он придёт — venir</i>",
        "opts": [
          "venga",
          "viene",
          "vendrá",
          "vino"
        ],
        "answer": "venga",
        "why": "no creo que отрицает мнение → субхунтив venga. Viene — индикатив (защитим только без no: creo que viene), vendrá — будущее, vino — прошлое.",
        "hint": "Один «no» перед creo que переключает на субхунтив 🙂"
      },
      {
        "type": "gap",
        "q": "Espero que todo ___ bien. <i style='opacity:.6'>пройдёт — salir</i>",
        "accept": [
          "salga"
        ],
        "model": "salga",
        "why": "esperar que — желание → субхунтив salga. Sale — индикатив «выходит», saldrá — будущее.",
        "hint": "«Надеюсь, что…» — это желание, а желание зовёт субхунтив 🙂"
      },
      {
        "type": "gap",
        "q": "Hace falta que ___ un poco antes. <i style='opacity:.6'>ты пришёл — venir</i>",
        "accept": [
          "vengas"
        ],
        "model": "vengas",
        "why": "hace falta que → субхунтив vengas. Vienes — индикатив, venir — инфинитив (он идёт с безличным hay que: hay que venir).",
        "hint": "«Нужно, чтобы ТЫ…» — оценка + смена лица → субхунтив 🙂"
      },
      {
        "type": "gap",
        "q": "Salgamos antes de que ___ a llover. <i style='opacity:.6'>начнётся — empezar</i>",
        "accept": [
          "empiece"
        ],
        "model": "empiece",
        "why": "antes de que всегда с субхунтивом: empiece. Индикатив empieza и futuro empezará после antes de que не ставятся.",
        "hint": "antes de que — это союз, который всегда тянет субхунтив 🌧️"
      },
      {
        "type": "gap",
        "q": "Dudo que eso ___ verdad. <i style='opacity:.6'>это — ser</i>",
        "accept": [
          "sea"
        ],
        "model": "sea",
        "why": "dudo que — прямое сомнение → субхунтив sea. Es — индикатив, será — будущее.",
        "hint": "Сомнение dudo que переключает на субхунтив 🤔"
      },
      {
        "type": "trRE",
        "ru": "Не приходи так поздно.",
        "accept": [
          "no vengas tan tarde"
        ],
        "model": "No vengas tan tarde.",
        "why": "Запрет на «ты» от venir → no vengas (субхунтив). Индикатив no vienes — «ты не приходишь».",
        "hint": "Запрет на «ты» от venir строится субхунтивом, а не индикативом 🙂"
      },
      {
        "type": "trRE",
        "ru": "Хочу, чтобы ты мне помог.",
        "accept": [
          "quiero que me ayudes"
        ],
        "model": "Quiero que me ayudes.",
        "why": "querer que + другой субъект → субхунтив ayudes. Индикатив ayudas сюда не встанет.",
        "hint": "«Хочу, чтобы ТЫ…» — смена лица зовёт субхунтив 🙂"
      },
      {
        "type": "trRE",
        "ru": "Важно, чтобы ты отдыхал.",
        "accept": [
          "es importante que descanses"
        ],
        "model": "Es importante que descanses.",
        "why": "Оценка es importante que → субхунтив descanses.",
        "hint": "«Важно, чтобы…» + смена лица включает субхунтив 🙂"
      },
      {
        "type": "trER",
        "en": "Me da pena que te vayas.",
        "accept": [
          "мне жаль что ты уезжаешь",
          "жаль что ты уезжаешь",
          "мне грустно что ты уезжаешь",
          "мне жаль, что ты уезжаешь",
          "мне жаль что ты уходишь"
        ],
        "model": "Мне жаль, что ты уезжаешь.",
        "why": "dar pena — «огорчать»; субхунтив te vayas по-русски передаём настоящим «уезжаешь».",
        "hint": "me da pena que — эмоция сожаления + субхунтив; передай настоящим 😔"
      },
      {
        "type": "trER",
        "en": "No creo que sea difícil.",
        "accept": [
          "не думаю что это трудно",
          "не думаю что трудно",
          "я не думаю что это трудно",
          "не думаю, что это трудно",
          "не думаю что это сложно"
        ],
        "model": "Не думаю, что это трудно.",
        "why": "no creo que → субхунтив sea; по-русски «(что) это трудно».",
        "hint": "no creo que — отрицание мнения; субхунтив передай настоящим 🙂"
      },
      {
        "type": "order",
        "answer": "no me lo digas",
        "accept": [
          "no me lo digas"
        ],
        "hintRu": "Собери: «Не говори мне этого.»",
        "model": "No me lo digas.",
        "why": "В запрете клитики идут впереди глагола: no me lo digas (сначала «мне», потом «это»).",
        "hint": "В отрицательной команде местоимения встают перед глаголом 🙂"
      },
      {
        "type": "order",
        "answer": "te lo digo para que lo sepas",
        "accept": [
          "te lo digo para que lo sepas"
        ],
        "hintRu": "Собери: «Говорю тебе, чтобы ты знал.»",
        "model": "Te lo digo para que lo sepas.",
        "why": "Субъекта два (я говорю, ты знаешь) → para que + субхунтив sepas.",
        "hint": "Цель para que тянет субхунтив (sepas) 🙂"
      },
      {
        "type": "match",
        "q": "Соедини инфинитив с формой субхунтива (строптивые).",
        "pairs": [
          [
            "ser",
            "sea"
          ],
          [
            "estar",
            "esté"
          ],
          [
            "ir",
            "vaya"
          ],
          [
            "saber",
            "sepa"
          ],
          [
            "haber",
            "haya"
          ]
        ],
        "why": "Шесть строптивых субхунтива: sea, esté, vaya, sepa, dé, haya — их учат наизусть.",
        "hint": "Эти формы не по правилу — их запоминают 🙂"
      },
      {
        "type": "match",
        "q": "Соедини начало фразы с наклонением, которое оно требует.",
        "pairs": [
          [
            "creo que",
            "индикатив"
          ],
          [
            "no creo que",
            "субхунтив"
          ],
          [
            "es verdad que",
            "индикатив"
          ],
          [
            "espero que",
            "субхунтив"
          ],
          [
            "es importante que",
            "субхунтив"
          ]
        ],
        "why": "Факт и уверенность → индикатив; желание, отрицание мнения и оценка → субхунтив.",
        "hint": "Факт — индикатив; желание/оценка/сомнение — субхунтив 🙂"
      },
      {
        "type": "describe",
        "prompt": "Пожелай другу удачи перед важным днём (2–3 предложения): дай один запрет (no…) и одно пожелание. Используй императив и субхунтив (espero que, ojalá, ¡que…!).",
        "keywords": [
          "no te preocupes",
          "no te acuestes",
          "espero que",
          "ojalá",
          "que tengas",
          "que te vaya",
          "suerte",
          "no olvides",
          "descansa",
          "que salga"
        ],
        "minWords": 8,
        "model": "Mañana es tu examen, así que no te acuestes tarde. Espero que descanses y ojalá te vaya muy bien. ¡Que tengas mucha suerte!",
        "why": "Запрет — no + субхунтив; пожелание — espero que / ojalá / ¡que…! + субхунтив.",
        "hint": "Запрет no + субхунтив, пожелание — espero que / ojalá + субхунтив 🍀"
      },
      {
        "type": "describe",
        "prompt": "Дай другу совет и вырази мнение о его решении (2–3 предложения). Используй es importante que / te aconsejo que + субхунтив и creo que / no creo que.",
        "keywords": [
          "es importante que",
          "te aconsejo que",
          "te recomiendo que",
          "creo que",
          "no creo que",
          "dudo que",
          "deberías",
          "conviene que",
          "es mejor que"
        ],
        "minWords": 8,
        "model": "Creo que estás haciendo demasiado. Es importante que descanses y te aconsejo que duermas más. No creo que sea buena idea trabajar de noche.",
        "why": "Совет и оценка → субхунтив; утверждённое мнение creo que → индикатив, отрицание no creo que → субхунтив.",
        "hint": "Совет/оценка — субхунтив; creo que — индикатив, no creo que — субхунтив 🙂"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен B1",
    "intro": "Это финал B1! 33 задания по всему уровню: рассказ в прошлом (indefinido, imperfecto, pluscuamperfecto) и глаголы-хамелеоны; будущее и догадки (futuro, será/sería); условное и вежливость; реальное условие si; отрицательный императив; весь субхунтив (желание, эмоция, оценка, para que, cuando, no creo que); косвенная речь со сдвигом времён; por/para; перифразы (seguir/dejar de/volver a/llevar); безличное se; коннекторы и относительные местоимения. Соберись — и вперёд к грамоте B1! 🏆",
    "review": [
      "Прошлое-рассказ: <b>indefinido</b> (событие) / <b>imperfecto</b> (фон) / <b>pluscuamperfecto</b> (había — раньше); conocí ≠ conocía",
      "Будущее и догадки: futuro (<b>tendré, haré</b>); <b>será</b> — догадка о настоящем, <b>sería/habría</b> — о прошлом",
      "Условное и вежливость: me gustaría, <b>¿Podrías…?</b>, deberías; реальное условие <b>si + настоящее</b> → futuro (никогда si + будущее)",
      "Субхунтив: no hables; <b>quiero que, ojalá, me alegro de que, es importante que</b>; <b>para que</b>, cuando llegue; <b>no creo que</b> ≠ creo que",
      "Косвенная речь: dijo que + сдвиг (viene → <b>venía</b>, va a → <b>iba a</b>); preguntó <b>si</b>…",
      "<b>Por</b> (причина, обмен) / <b>para</b> (цель, срок, para mí); перифразы <b>seguir + gerundio, dejar de, volver a, llevar</b>",
      "Безличное <b>se</b> (se dice, se vende/venden); коннекторы <b>aunque, sin embargo, sino</b>; относительные <b>que, donde, lo que, con quien</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Estaba oscuro y de repente ___ el teléfono. <i style='opacity:.6'>зазвонил</i>",
        "opts": [
          "sonó",
          "sonaba",
          "suena",
          "ha sonado"
        ],
        "answer": "sonó",
        "why": "Резкое событие на фоне → indefinido sonó. Sonaba — растянутый фон, suena — настоящее, ha sonado — перфект «(сегодня) прозвенел».",
        "hint": "«Вдруг» на фоне — точечное прошедшее 📞"
      },
      {
        "type": "choice",
        "q": "Ayer ___ a tu hermana. <i style='opacity:.6'>познакомился</i>",
        "opts": [
          "conocí",
          "conocía",
          "conozco",
          "conoceré"
        ],
        "answer": "conocí",
        "why": "Момент знакомства — indefinido conocí. Conocía — «был знаком» (фон), conozco — «знаю» сейчас, conoceré — будущее.",
        "hint": "«Познакомился» — точка встречи, не долгое «был знаком» 🙂"
      },
      {
        "type": "choice",
        "q": "Cuando llegué, la fiesta ya ___ terminado. <i style='opacity:.6'>закончилась</i>",
        "opts": [
          "había",
          "ha",
          "habrá",
          "habría"
        ],
        "answer": "había",
        "why": "Событие раньше прихода → pluscuamperfecto había terminado. Ha — перфект (сегодня), habrá — «наверное, закончилась», habría — «закончилась бы».",
        "hint": "Праздник кончился ДО прихода — нужен «шаг назад» вспомогательным глаголом 🕒"
      },
      {
        "type": "choice",
        "q": "Mañana yo ___ más tiempo. <i style='opacity:.6'>у меня будет — tener</i>",
        "opts": [
          "tendré",
          "teneré",
          "tenré",
          "tendría"
        ],
        "answer": "tendré",
        "why": "tener в будущем — основа tendr-: tendré. «teneré/tenré» не бывают, tendría — условное «было бы».",
        "hint": "У tener в будущем короткая основа + чёрточка на «я» 🙂"
      },
      {
        "type": "choice",
        "q": "—¿Qué hora es? —No sé, ___ las tres. <i style='opacity:.6'>наверное</i>",
        "opts": [
          "serán",
          "son",
          "serían",
          "van a ser"
        ],
        "answer": "serán",
        "why": "Догадка о настоящем — futuro serán. Son — точное «сейчас три», serían — догадка о прошлом, van a ser — «скоро будет».",
        "hint": "Прикидка про сейчас — будущее в роли догадки 🕒"
      },
      {
        "type": "choice",
        "q": "Me ___ vivir junto al mar. <i style='opacity:.6'>мне бы хотелось — gustar</i>",
        "opts": [
          "gustaría",
          "gusta",
          "gustará",
          "gustaba"
        ],
        "answer": "gustaría",
        "why": "Мягкое желание «мне бы хотелось» — condicional gustaría. Me gusta — «нравится» (факт), me gustará — «понравится», me gustaba — «нравилось».",
        "hint": "«Хотелось бы» — gustar с окончанием -ía 🌊"
      },
      {
        "type": "choice",
        "q": "Si ___ sol, iremos a la playa. <i style='opacity:.6'>будет — hacer</i>",
        "opts": [
          "hace",
          "hará",
          "hizo",
          "haga"
        ],
        "answer": "hace",
        "why": "После si — настоящее hace, хоть по-русски «будет». Hará — запрещённое будущее после si, hizo — прошлое, haga — субхунтив (не тот случай).",
        "hint": "После si будущее нельзя — ставь настоящее ☀️"
      },
      {
        "type": "choice",
        "q": "No ___ eso, es peligroso. <i style='opacity:.6'>не делай — hacer</i>",
        "opts": [
          "hagas",
          "haces",
          "haz",
          "hacer"
        ],
        "answer": "hagas",
        "why": "Запрет на «ты» от hacer — no hagas (субхунтив). Haces — настоящее, haz — утвердительная команда «сделай», hacer — инфинитив.",
        "hint": "Запрет на «ты» строится через субхунтив, а не через повелительную форму ⛔"
      },
      {
        "type": "choice",
        "q": "Quiero que ___ conmigo. <i style='opacity:.6'>чтобы ты пошёл — venir</i>",
        "opts": [
          "vengas",
          "vienes",
          "venir",
          "vendrás"
        ],
        "answer": "vengas",
        "why": "quiero que + другой субъект → субхунтив vengas. Vienes — индикатив, venir — инфинитив (при одном лице), vendrás — будущее.",
        "hint": "«Хочу, чтобы ТЫ…» — смена лица зовёт субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "Es importante que ___ más. <i style='opacity:.6'>ты отдыхал — descansar</i>",
        "opts": [
          "descanses",
          "descansas",
          "descansar",
          "descansarás"
        ],
        "answer": "descanses",
        "why": "Оценка es importante que → субхунтив descanses. Descansas — индикатив, descansar — инфинитив (без que), descansarás — будущее.",
        "hint": "«Важно, чтобы ТЫ…» — оценка + смена лица → субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "No creo que ___ hoy. <i style='opacity:.6'>он придёт — venir</i>",
        "opts": [
          "venga",
          "viene",
          "vendrá",
          "vino"
        ],
        "answer": "venga",
        "why": "no creo que отрицает мнение → субхунтив venga. Viene — индикатив (без no: creo que viene), vendrá — будущее, vino — прошлое.",
        "hint": "Один «no» перед creo que включает субхунтив 🙂"
      },
      {
        "type": "choice",
        "q": "___, es un error. <i style='opacity:.6'>по-моему</i>",
        "opts": [
          "Para mí",
          "Por mí",
          "Por eso",
          "Para colmo"
        ],
        "answer": "Para mí",
        "why": "«По-моему / на мой взгляд» — para mí. Por mí — «по мне, ради меня», por eso — «поэтому», para colmo — «в довершение всего».",
        "hint": "«На мой взгляд» — это предлог мнения с местоимением, не por 🙂"
      },
      {
        "type": "choice",
        "q": "No es rojo, ___ azul. <i style='opacity:.6'>а</i>",
        "opts": [
          "sino",
          "pero",
          "y",
          "aunque"
        ],
        "answer": "sino",
        "why": "После отрицания «не X, а Y» — sino: no es rojo, sino azul. Pero — обычное «но», y — «и», aunque — «хотя».",
        "hint": "После отрицания «не X, а Y» нужен особый противопоставительный союз, не обычное «но» 🙂"
      },
      {
        "type": "choice",
        "q": "No entiendo ___ dices. <i style='opacity:.6'>то, что</i>",
        "opts": [
          "lo que",
          "que",
          "donde",
          "quien"
        ],
        "answer": "lo que",
        "why": "«То, что» о целой мысли — lo que. Голый que повисает, donde — о месте, quien — о человеке.",
        "hint": "«То, что» о мысли целиком — lo que 🙂"
      },
      {
        "type": "gap",
        "q": "Ana me dijo que ___ muy contenta. <i style='opacity:.6'>что она была — estar</i>",
        "accept": [
          "estaba"
        ],
        "model": "estaba",
        "why": "dijo que (прошлое) сдвигает настоящее (está) в imperfecto estaba. Está осталось бы при dice que, esté — субхунтив (тут не нужен).",
        "hint": "После dijo que настоящее шагает в -aba/-ía 🙂"
      },
      {
        "type": "gap",
        "q": "Cuando ___ a casa, te llamo. <i style='opacity:.6'>приду — llegar</i>",
        "accept": [
          "llegue"
        ],
        "model": "llegue",
        "why": "Один будущий приезд после cuando → субхунтив llegue. Llego — привычка, llegaré — futuro после cuando запрещён.",
        "hint": "cuando о будущем событии зовёт субхунтив, а не форму будущего 🙂"
      },
      {
        "type": "gap",
        "q": "En la foto ___ unas cien personas. <i style='opacity:.6'>было, наверное — haber</i>",
        "accept": [
          "habría",
          "habria"
        ],
        "model": "habría",
        "why": "Прикидка о прошлом — condicional, haber в единственном: habría. Había — «было» (факт), «habrían» — ошибка числа.",
        "hint": "Догадка о прошлом — условное наклонение, haber в единственном числе 🙂"
      },
      {
        "type": "gap",
        "q": "Cuando llegué, todos ya se ___ ido. <i style='opacity:.6'>ушли раньше — haber</i>",
        "accept": [
          "habían",
          "habian"
        ],
        "model": "habían",
        "why": "Уход раньше прихода → pluscuamperfecto se habían ido. Se fueron слил бы события, se iban — фон «уходили».",
        "hint": "Ушли ДО прихода — нужен «шаг назад» вспомогательным глаголом (мн. ч., «все») 🚪"
      },
      {
        "type": "gap",
        "q": "Mañana yo ___ deporte. <i style='opacity:.6'>буду заниматься — hacer</i>",
        "accept": [
          "haré",
          "hare"
        ],
        "model": "haré",
        "why": "hacer в будущем — основа har-: haré. Формы «haceré» нет.",
        "hint": "hacer берёт основу har- + окончание «я» с чёрточкой 🙂"
      },
      {
        "type": "trRE",
        "ru": "Ты не мог бы мне помочь?",
        "accept": [
          "podrías ayudarme",
          "me podrías ayudar",
          "¿podrías ayudarme?",
          "podrias ayudarme",
          "me podrias ayudar",
          "¿podrias ayudarme?"
        ],
        "model": "¿Podrías ayudarme?",
        "why": "Вежливая просьба — condicional podrías. Puedes звучало бы прямее.",
        "hint": "«Не мог бы» — это условное от poder 🙂"
      },
      {
        "type": "trRE",
        "ru": "Пока я спал, зазвонил телефон.",
        "accept": [
          "mientras dormía sonó el teléfono",
          "mientras yo dormía sonó el teléfono",
          "mientras dormia sono el telefono",
          "mientras yo dormia sono el telefono"
        ],
        "model": "Mientras dormía, sonó el teléfono.",
        "why": "Фон с mientras → imperfecto dormía; вторжение → indefinido sonó.",
        "hint": "mientras + фон (-ía), потом резкое событие 📞"
      },
      {
        "type": "trRE",
        "ru": "Она спросила, дома ли я.",
        "accept": [
          "me preguntó si estaba en casa",
          "preguntó si estaba en casa",
          "me pregunto si estaba en casa",
          "pregunto si estaba en casa"
        ],
        "model": "Me preguntó si estaba en casa.",
        "why": "Косвенный вопрос «ли» → si; в пересказе прошлого estoy сдвигается в estaba.",
        "hint": "«Ли» вводится союзом si; в пересказе прошлого настоящее делает шаг назад 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я никогда раньше этого не делал.",
        "accept": [
          "nunca había hecho esto antes",
          "nunca había hecho esto",
          "no había hecho esto antes",
          "nunca habia hecho esto antes",
          "nunca habia hecho esto",
          "no habia hecho esto antes"
        ],
        "model": "Nunca había hecho esto antes.",
        "why": "Опыт до момента → pluscuamperfecto había hecho; hecho — неправильное причастие.",
        "hint": "«Никогда раньше не…» — había + причастие 🙂"
      },
      {
        "type": "trER",
        "en": "Me alegro de que estés aquí.",
        "accept": [
          "рад что ты здесь",
          "рада что ты здесь",
          "я рад что ты здесь",
          "я рада что ты здесь",
          "рад, что ты здесь",
          "я рад, что ты здесь"
        ],
        "model": "Рад, что ты здесь.",
        "why": "alegrarse de que + субхунтив estés → «рад, что ты здесь».",
        "hint": "me alegro de que — «рад, что…» 💛"
      },
      {
        "type": "trER",
        "en": "Sigo estudiando español.",
        "accept": [
          "я продолжаю учить испанский",
          "продолжаю учить испанский",
          "я всё ещё учу испанский",
          "я продолжаю изучать испанский",
          "я всё еще учу испанский"
        ],
        "model": "Я продолжаю учить испанский.",
        "why": "seguir + герундий = «продолжать делать»: sigo estudiando.",
        "hint": "seguir + герундий — «продолжаю делать» 📚"
      },
      {
        "type": "trER",
        "en": "Se dice que hará frío.",
        "accept": [
          "говорят что будет холодно",
          "говорят, что будет холодно",
          "говорят будет холодно"
        ],
        "model": "Говорят, что будет холодно.",
        "why": "Безличное se dice que — «говорят, что»; hará — futuro «будет».",
        "hint": "se dice que — безличное «сообщают/полагают»; hará — будущее 🥶"
      },
      {
        "type": "order",
        "answer": "total que perdí el tren",
        "accept": [
          "total que perdí el tren",
          "total que perdi el tren"
        ],
        "hintRu": "Собери: «Короче, я опоздал на поезд.»",
        "model": "Total que perdí el tren.",
        "why": "Связка total que ведёт итог рассказа, а событие — indefinido perdí.",
        "hint": "«Короче» — total que, дальше событие в прошедшем 🚆"
      },
      {
        "type": "order",
        "answer": "si tengo tiempo iré a la playa",
        "accept": [
          "si tengo tiempo iré a la playa",
          "si tengo tiempo ire a la playa"
        ],
        "hintRu": "Собери: «Если у меня будет время, я пойду на пляж.»",
        "model": "Si tengo tiempo, iré a la playa.",
        "why": "Реальное условие: si + настоящее tengo, следствие — futuro iré (после si будущее нельзя).",
        "hint": "si + настоящее → следствие в будущем 🏖️"
      },
      {
        "type": "order",
        "answer": "me dijo que iba a mudarse",
        "accept": [
          "me dijo que iba a mudarse"
        ],
        "hintRu": "Собери: «Он сказал мне, что собирается переехать.»",
        "model": "Me dijo que iba a mudarse.",
        "why": "При dijo (прошлое) намерение va a сдвигается в iba a.",
        "hint": "Пересказ прошлого: va a → iba a 🙂"
      },
      {
        "type": "match",
        "q": "Соедини инфинитив с формой «я» в будущем (futuro).",
        "pairs": [
          [
            "tener",
            "tendré"
          ],
          [
            "hacer",
            "haré"
          ],
          [
            "poder",
            "podré"
          ],
          [
            "decir",
            "diré"
          ],
          [
            "salir",
            "saldré"
          ]
        ],
        "why": "Неправильные основы будущего: tendr-, har-, podr-, dir-, saldr- + окончание -é; те же основы у условного (-ía).",
        "hint": "Строптивые основы будущего учат наизусть 🙂"
      },
      {
        "type": "match",
        "q": "Соедини начало фразы с наклонением, которое оно требует.",
        "pairs": [
          [
            "creo que",
            "индикатив"
          ],
          [
            "no creo que",
            "субхунтив"
          ],
          [
            "ojalá",
            "субхунтив"
          ],
          [
            "es verdad que",
            "индикатив"
          ],
          [
            "es importante que",
            "субхунтив"
          ]
        ],
        "why": "Факт и уверенность → индикатив; желание, сомнение и оценка → субхунтив.",
        "hint": "Факт — индикатив; желание/оценка/сомнение — субхунтив 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи историю из прошлого (3–4 предложения): заведи фон (imperfecto), шагни назад (había…), толкни события (indefinido) и заверши развязкой (resulta que, al final). Добавь реакцию.",
        "keywords": [
          "era",
          "hacía",
          "estaba",
          "había",
          "nunca había",
          "de repente",
          "mientras",
          "conocí",
          "me di cuenta",
          "resulta que",
          "total que",
          "al final",
          "¡qué susto!"
        ],
        "minWords": 10,
        "model": "Era de noche y hacía frío. Yo había quedado con un amigo, pero me equivoqué de calle. De repente, alguien me llamó: resulta que era él. ¡Menos mal que nos reímos!",
        "why": "Фон — imperfecto, предшествование — había + причастие, события — indefinido, развязка — resulta que.",
        "hint": "Слои рассказа: фон (imperfecto), раньше (había), событие (indefinido) 🙂"
      },
      {
        "type": "describe",
        "prompt": "Напиши «Mi mundo en español» (5–6 предложений): как ты начинал (прошлое), что думаешь о языке сейчас (мнение), о чём мечтаешь и что планируешь (будущее) и совет новичку (субхунтив).",
        "keywords": [
          "al principio",
          "empecé",
          "había",
          "creo que",
          "no creo que",
          "me gustaría",
          "ojalá",
          "el año que viene",
          "seguiré",
          "viajaré",
          "te aconsejo que",
          "deberías",
          "valer la pena",
          "algún día",
          "sin miedo"
        ],
        "minWords": 12,
        "model": "Hace un mes casi no sabía nada. Al principio todo era difícil y me equivocaba mucho. Ahora creo que puedo defenderme en una conversación. El año que viene seguiré estudiando y me gustaría viajar a España. Ojalá algún día hable sin miedo. A quien empieza, le aconsejo que practique cada día.",
        "why": "Прошлое — система пасадов, мнение — creo que / no creo que, мечты и планы — futuro / condicional / ojalá + субхунтив, совет — te aconsejo que + субхунтив.",
        "hint": "Каждому времени и наклонению — своя работа; собери всё вместе 💛"
      }
    ]
  }
};
