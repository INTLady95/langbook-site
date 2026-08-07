/* Spanish A1 — level config + 30-day plan (COURSE). EXAMS filled by next agent.
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'A1',
  course:'es-a1',
  pkey:'langbook-es-a1-progress',
  preview:false,
  finalNote:'Это твоя победа 💛 Полный уровень Español A1 — позади. Горжусь тобой!',
  speech:'es-ES',
  langPo:'по-испански',
  langNa:'испанский',
  langAdj:'испанское',
  phIn:'en español…'
};

const COURSE = [
  {wn:'01', wt:'Кто я: ser, род и артикли', days:[
    {n:1,t:'Знакомство',p:'¡Hola!'},
    {n:2,t:'Откуда ты',p:'¿De dónde eres?'},
    {n:3,t:'Род и артикли',p:'El o la'},
    {n:4,t:'Один и много',p:'Uno y muchos'},
    {n:5,t:'Числа и возраст',p:'Números y edad'},
    {n:6,t:'Это и то',p:'Este y ese'},
    {n:7,t:'Повторение недели 1',p:'Repaso 1'}
  ]},
  {wn:'02', wt:'Описываю мир: ser/estar, семья, обладание', days:[
    {n:8,t:'Ser или estar',p:'¿Ser o estar?'},
    {n:9,t:'Цвета и внешность',p:'Colores y descripción'},
    {n:10,t:'Моя семья',p:'Mi familia'},
    {n:11,t:'Где и что есть',p:'¿Dónde? + hay'},
    {n:12,t:'Профессии',p:'Profesiones'},
    {n:13,t:'Надо и хочу',p:'Tener y querer'},
    {n:14,t:'Повторение недели 2',p:'Repaso 2'}
  ]},
  {wn:'03', wt:'Настоящее время и мой день', days:[
    {n:15,t:'Настоящее: -ar',p:'El presente (-ar)'},
    {n:16,t:'Глаголы -er / -ir',p:'-er / -ir e irregulares'},
    {n:17,t:'Мой день',p:'Verbos reflexivos'},
    {n:18,t:'Как часто?',p:'¿Con qué frecuencia?'},
    {n:19,t:'Который час',p:'¿Qué hora es?'},
    {n:20,t:'Мне нравится',p:'Me gusta'},
    {n:21,t:'Повторение недели 3',p:'Repaso 3'}
  ]},
  {wn:'04', wt:'Места, планы и первый шаг в прошлое', days:[
    {n:22,t:'Мой дом',p:'Mi casa'},
    {n:23,t:'Где это?',p:'¿Dónde está?'},
    {n:24,t:'В городе',p:'En la ciudad'},
    {n:25,t:'В ресторане',p:'En el restaurante'},
    {n:26,t:'Одежда и покупки',p:'La ropa y las compras'},
    {n:27,t:'Планы',p:'Ir a + infinitivo'},
    {n:28,t:'Погода',p:'El tiempo'},
    {n:29,t:'Что я сделал сегодня',p:'¿Qué has hecho hoy?'},
    {n:30,t:'Рассказ о себе',p:'Hablo de mí'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя за плечами — проверим себя. 25 заданий по всему, что мы прошли: приветствия и знакомство, глагол ser, род и артикли el/la, множественное число, числа и tener, este/ese. Не торопись. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Приветствия: <b>¡Hola!</b> · Buenos días · Buenas tardes · Buenas noches · Adiós",
      "<b>ser:</b> yo soy · tú eres · él/ella/usted es · nosotros somos · ellos son",
      "Знакомство: ¿Cómo te llamas? — <b>Me llamo…</b> · ¿De dónde eres? — Soy de…",
      "Род и артикли: <b>el</b> libro / <b>la</b> casa · un / una · ловушка: <b>el</b> coche",
      "Множественное: гласная +<b>s</b>, согласная +<b>es</b> (ciudad → ciudades)",
      "Числа 0–31 и <b>tener</b>: Tengo veinte años (возраст — через tener, не ser)",
      "Указатели: <b>este/esta</b> (рядом) · <b>ese/esa</b> (подальше) · ¿Qué es esto?"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Yo ___ Ana.",
        "opts": [
          "soy",
          "eres",
          "es",
          "son"
        ],
        "answer": "soy",
        "why": "yo → soy: «я есть Ана».",
        "hint": "У ser для «я» своя особая форма — она не совпадает ни с «ты», ни с «он» 🙂"
      },
      {
        "type": "choice",
        "q": "Son las nueve de la mañana. ¿Cómo saludas? — ¡___!",
        "opts": [
          "Buenos días",
          "Buenas noches",
          "Adiós",
          "Hasta luego"
        ],
        "answer": "Buenos días",
        "why": "Утром здороваемся: Buenos días.",
        "hint": "Ещё утро — выбери приветствие для первой половины дня, а не для вечера или прощания ☀️"
      },
      {
        "type": "choice",
        "q": "Ana es de Rusia. Ana es ___.",
        "opts": [
          "rusa",
          "ruso",
          "rusos",
          "Rusia"
        ],
        "answer": "rusa",
        "why": "Ана — женщина: национальность на -a (rusa). Rusia — это страна.",
        "hint": "Национальность согласуется по роду: для женщины бери форму на -a, а не мужскую и не название страны 🙂"
      },
      {
        "type": "choice",
        "q": "¿De dónde ___ usted?",
        "opts": [
          "es",
          "eres",
          "soy",
          "son"
        ],
        "answer": "es",
        "why": "С usted глагол идёт в форме «он/она» → es.",
        "hint": "Usted вежливое, но глагол при нём берёт форму третьего лица, как для él/ella 🙂"
      },
      {
        "type": "choice",
        "q": "La ___ es de Ana. <i style='opacity:.6'>дом, ж. р., тот самый</i>",
        "opts": [
          "casa",
          "coche",
          "libro",
          "día"
        ],
        "answer": "casa",
        "why": "la → женский род: la casa.",
        "hint": "Артикль la подсказывает женский род — выбери слово, которое с ним дружит 🏠"
      },
      {
        "type": "choice",
        "q": "El ___ es de Ana. <i style='opacity:.6'>машина, м. р. по-испански</i>",
        "opts": [
          "coche",
          "casa",
          "mesa",
          "silla"
        ],
        "answer": "coche",
        "why": "coche — по-испански мужского рода: el coche (русская ловушка!).",
        "hint": "«Машина» по-русски женского, но по-испански это слово мужского рода — ищи то, что идёт с el 🚗"
      },
      {
        "type": "choice",
        "q": "un libro → dos ___",
        "opts": [
          "libros",
          "libroes",
          "libro",
          "libras"
        ],
        "answer": "libros",
        "why": "После гласной множественное — просто +s: libros.",
        "hint": "Слово кончается на гласную, значит во множественном добавляем только -s, без лишнего -es 📚"
      },
      {
        "type": "choice",
        "q": "¿Qué es esto? — ___ una mesa.",
        "opts": [
          "Es",
          "Son",
          "Eres",
          "Soy"
        ],
        "answer": "Es",
        "why": "Один предмет → Es (una mesa).",
        "hint": "Предмет один, поэтому нужна форма ser для «он/она/это» — единственное число 🙂"
      },
      {
        "type": "choice",
        "q": "___ veinte años. <i style='opacity:.6'>мне 20</i>",
        "opts": [
          "Tengo",
          "Soy",
          "Tienes",
          "Es"
        ],
        "answer": "Tengo",
        "why": "Возраст — через tener: Tengo veinte años (не Soy).",
        "hint": "По-испански возраст «имеют», а не «есть»: вспомни глагол tener для «я» 🎂"
      },
      {
        "type": "choice",
        "q": "___ libro. <i style='opacity:.6'>эта книга, рядом; libro — м. р.</i>",
        "opts": [
          "este",
          "esta",
          "ese",
          "esos"
        ],
        "answer": "este",
        "why": "Рядом + мужской род → este.",
        "hint": "Предмет рядом с тобой и мужского рода — бери указатель «этот» в мужской форме, не женскую и не «тот» 👉"
      },
      {
        "type": "gap",
        "q": "diez, once, doce, ___ <i style='opacity:.6'>13</i>",
        "accept": [
          "trece"
        ],
        "model": "trece",
        "hint": "После двенадцати идёт тринадцать — вспомни, как оно звучит по-испански 🔢"
      },
      {
        "type": "gap",
        "q": "una ciudad → dos ___",
        "accept": [
          "ciudades"
        ],
        "model": "ciudades",
        "hint": "Слово кончается на согласную, поэтому во множественном берём окончание подлиннее — -es ✨"
      },
      {
        "type": "gap",
        "q": "¿Cuántos años ___? <i style='opacity:.6'>ты</i>",
        "accept": [
          "tienes"
        ],
        "model": "tienes",
        "hint": "Возраст — через tener; поставь этот глагол в форму для «tú» 🙂"
      },
      {
        "type": "gap",
        "q": "Soy ___ España. <i style='opacity:.6'>я из Испании</i>",
        "accept": [
          "de"
        ],
        "model": "de",
        "hint": "«Я из…» — между soy и страной нужно короткое словечко-предлог, его легко потерять 🙂"
      },
      {
        "type": "trRE",
        "ru": "Меня зовут Ана.",
        "accept": [
          "me llamo ana",
          "yo me llamo ana"
        ],
        "model": "Me llamo Ana.",
        "hint": "«Меня зовут» — это возвратная конструкция me llamo… плюс твоё имя 🙂"
      },
      {
        "type": "trRE",
        "ru": "Мне двадцать лет.",
        "accept": [
          "tengo veinte años",
          "tengo veinte anos",
          "yo tengo veinte años",
          "yo tengo veinte anos"
        ],
        "model": "Tengo veinte años.",
        "hint": "Возраст «имеют»: глагол tener + число + слово años (не забудь его) 🎂"
      },
      {
        "type": "trRE",
        "ru": "Откуда ты?",
        "accept": [
          "¿de dónde eres?",
          "de dónde eres",
          "¿de donde eres?",
          "de donde eres",
          "¿de dónde eres",
          "de dónde eres?"
        ],
        "model": "¿De dónde eres?",
        "hint": "Вопрос про место рождения: de dónde + форма ser для «tú». И не забудь перевёрнутый ¿ в начале 🙂"
      },
      {
        "type": "trER",
        "en": "¿Quién es?",
        "accept": [
          "кто это",
          "кто это?",
          "кто он",
          "кто она"
        ],
        "model": "Кто это?",
        "hint": "Quién спрашивает про человека — начни перевод со слова «кто» 🙂"
      },
      {
        "type": "trER",
        "en": "Son libros.",
        "accept": [
          "это книги",
          "книги",
          "это несколько книг"
        ],
        "model": "Это книги.",
        "hint": "Son — множественное «есть/это»; libros — книги во множественном числе 📚"
      },
      {
        "type": "order",
        "answer": "este es tom",
        "accept": [
          "este es tom"
        ],
        "hintRu": "Собери: «Это Том.» (показываешь на человека рядом)",
        "hint": "Указатель este может стоять сам, как «этот/это»: este + форма ser + имя 🙂"
      },
      {
        "type": "order",
        "answer": "de dónde es usted",
        "accept": [
          "de dónde es usted",
          "de donde es usted"
        ],
        "hintRu": "Спроси вежливо: «Откуда Вы?»",
        "hint": "Вежливый вопрос: de dónde + форма ser для usted (как для «он») + само usted 🙂"
      },
      {
        "type": "match",
        "q": "Соедини число с цифрой.",
        "pairs": [
          [
            "cinco",
            "5"
          ],
          [
            "diez",
            "10"
          ],
          [
            "quince",
            "15"
          ],
          [
            "veinte",
            "20"
          ],
          [
            "treinta",
            "30"
          ]
        ],
        "hint": "Проговори каждое число вслух — знакомый корень подскажет цифру 🔢"
      },
      {
        "type": "match",
        "q": "Соедини приветствие с переводом.",
        "pairs": [
          [
            "¡Hola!",
            "привет"
          ],
          [
            "Buenos días",
            "доброе утро"
          ],
          [
            "Buenas tardes",
            "добрый день"
          ],
          [
            "Buenas noches",
            "добрый вечер"
          ],
          [
            "Adiós",
            "до свидания"
          ]
        ],
        "hint": "Вспомни, какое время суток стоит за каждым «buenos/buenas» — и подбери пару 🙂"
      },
      {
        "type": "describe",
        "prompt": "Представься по-испански (1–2 предложения): поздоровайся, скажи, как тебя зовут и откуда ты.",
        "keywords": [
          "hola",
          "me llamo",
          "soy",
          "soy de",
          "buenos días",
          "buenas",
          "de rusia",
          "de españa"
        ],
        "minWords": 6,
        "model": "¡Hola! Me llamo Ana. Soy de Rusia.",
        "hint": "Три коротких шага: приветствие → me llamo + имя → soy de + страна 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи (1–2 предложения): сколько тебе лет и покажи предмет рядом через este/esta.",
        "keywords": [
          "tengo",
          "años",
          "anos",
          "este",
          "esta",
          "es un",
          "es una",
          "libro",
          "mesa",
          "casa"
        ],
        "minWords": 6,
        "model": "Tengo veinte años. Este es un libro y esta es una mesa.",
        "hint": "Возраст через tengo… años, а предмет покажи указателем este/esta по роду слова 🙂"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя готова. 25 заданий: ser и estar, цвета и внешность, mi/tu/su и семья, hay и «где», профессии, а ещё tener que и querer. Наберёшь 80% — откроется Неделя 3. 💛",
    "review": [
      "<b>estar:</b> estoy · estás · está · estamos · están (состояние и место)",
      "ser — суть · estar — сейчас: <b>Soy</b> médico · <b>Estoy</b> cansado",
      "Прилагательное после слова и по роду: casa <b>blanca</b> · coche <b>rojo</b>",
      "Притяжательные: <b>mi/tu/su</b> · <b>mis/tus/sus</b> · nuestro / nuestra",
      "Семья: madre, padre, hermano, hija · ловушка: familia = семья (не фамилия)",
      "<b>hay</b> (есть, впервые) · <b>está</b> (находится, известный) · ¿Dónde está…?",
      "Профессия без артикля: <b>Soy</b> profesor · Tengo que… (надо) · Quiero… (хочу)"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Yo ___ en casa.",
        "opts": [
          "estoy",
          "soy",
          "estás",
          "es"
        ],
        "answer": "estoy",
        "why": "Место — через estar: estoy en casa.",
        "hint": "Где ты находишься — это estar, а не ser; поставь его в форму для «yo» 🏠"
      },
      {
        "type": "choice",
        "q": "___ cansada. <i style='opacity:.6'>я устала — прямо сейчас</i>",
        "opts": [
          "Estoy",
          "Soy",
          "Tengo",
          "Es"
        ],
        "answer": "Estoy",
        "why": "Состояние сейчас → estar: Estoy cansada (Soy cansada = «я занудная»).",
        "hint": "Усталость — временное состояние, а его передаёт estar; ser здесь поменяет смысл на характер 🙂"
      },
      {
        "type": "choice",
        "q": "una casa ___ <i style='opacity:.6'>белая</i>",
        "opts": [
          "blanca",
          "blanco",
          "blancas",
          "blancos"
        ],
        "answer": "blanca",
        "why": "casa — женский род, единственное число → blanca.",
        "hint": "Прилагательное подстраивается под слово: casa женского рода и одна — значит окончание -a 🎨"
      },
      {
        "type": "choice",
        "q": "un coche ___ <i style='opacity:.6'>красный</i>",
        "opts": [
          "rojo",
          "roja",
          "rojos",
          "rojas"
        ],
        "answer": "rojo",
        "why": "coche — мужской род, единственное → rojo, и цвет идёт после слова.",
        "hint": "coche мужского рода и один — цвет берёт мужское окончание -o и стоит после существительного 🚗"
      },
      {
        "type": "choice",
        "q": "___ hermanos <i style='opacity:.6'>мои братья</i>",
        "opts": [
          "mis",
          "mi",
          "mío",
          "tus"
        ],
        "answer": "mis",
        "why": "Много братьев → mis (mi во множественном).",
        "hint": "Братьев несколько, поэтому притяжательное «мой» тоже во множественном числе 🙂"
      },
      {
        "type": "choice",
        "q": "___ familia <i style='opacity:.6'>наша семья</i>",
        "opts": [
          "nuestra",
          "nuestro",
          "nuestras",
          "nuestros"
        ],
        "answer": "nuestra",
        "why": "familia — женский род, единственное → nuestra.",
        "hint": "«Наш» согласуется по роду и числу: familia женского рода и одна 👨‍👩‍👧"
      },
      {
        "type": "choice",
        "q": "En la cocina ___ una mesa. <i style='opacity:.6'>есть</i>",
        "opts": [
          "hay",
          "está",
          "es",
          "tiene"
        ],
        "answer": "hay",
        "why": "«Есть, имеется» (впервые, с un/una) → hay.",
        "hint": "Сообщаешь, что нечто существует (и рядом una) — для этого есть особое неизменяемое слово 🍽️"
      },
      {
        "type": "choice",
        "q": "Ella ___ médica.",
        "opts": [
          "es",
          "está",
          "tiene",
          "hay"
        ],
        "answer": "es",
        "why": "Профессия — это ser: es médica.",
        "hint": "Профессия — часть того, кто ты по сути, а это глагол ser, не estar 🩺"
      },
      {
        "type": "choice",
        "q": "Soy ___ profesor.",
        "opts": [
          "—",
          "un",
          "el",
          "uno"
        ],
        "answer": "—",
        "why": "Перед профессией артикль не нужен: Soy profesor.",
        "hint": "После soy профессия идёт голой, без артикля — «Soy un profesor» здесь лишнее 🙂"
      },
      {
        "type": "choice",
        "q": "Tengo ___ trabajar. <i style='opacity:.6'>мне надо работать</i>",
        "opts": [
          "que",
          "a",
          "de",
          "—"
        ],
        "answer": "que",
        "why": "«Надо» = tener + que + инфинитив.",
        "hint": "Между tener и вторым глаголом нужно связующее слово, которое и даёт смысл «надо» 🙂"
      },
      {
        "type": "gap",
        "q": "¿Cómo ___? — Estoy bien. <i style='opacity:.6'>ты</i>",
        "accept": [
          "estás",
          "estas"
        ],
        "model": "estás",
        "hint": "«Как ты?» — это estar в форме для «tú»; на письме над a стоит чёрточка 🙂"
      },
      {
        "type": "gap",
        "q": "¿Dónde ___ el baño? <i style='opacity:.6'>находится</i>",
        "accept": [
          "está",
          "esta"
        ],
        "model": "está",
        "hint": "Про местоположение уже известного предмета берём глагол estar (форма для «он/оно»), а не hay 🚪"
      },
      {
        "type": "gap",
        "q": "___ un café, por favor. <i style='opacity:.6'>я хочу</i>",
        "accept": [
          "quiero"
        ],
        "model": "quiero",
        "hint": "«Хочу» — глагол querer в форме для «yo»; корень чуть меняется (e→ie) ☕"
      },
      {
        "type": "gap",
        "q": "Es ___ hermana. <i style='opacity:.6'>его сестра</i>",
        "accept": [
          "su"
        ],
        "model": "su",
        "hint": "«Его/её» перед словом — это одна коротенькая форма, одинаковая для обоих 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я дома.",
        "accept": [
          "estoy en casa",
          "yo estoy en casa"
        ],
        "model": "Estoy en casa.",
        "hint": "«Я дома» — это про место, значит estar + en casa (без артикля) 🏠"
      },
      {
        "type": "trRE",
        "ru": "Мне надо работать.",
        "accept": [
          "tengo que trabajar",
          "yo tengo que trabajar"
        ],
        "model": "Tengo que trabajar.",
        "hint": "Формула «надо»: tener + que + глагол в начальной форме (trabajar, не trabajo) 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я врач.",
        "accept": [
          "soy médico",
          "soy medico",
          "soy médica",
          "soy medica"
        ],
        "model": "Soy médico.",
        "hint": "Профессия — через ser и без артикля; форма médico/médica зависит от рода 🩺"
      },
      {
        "type": "trER",
        "en": "Tiene los ojos azules.",
        "accept": [
          "у него синие глаза",
          "у неё синие глаза",
          "у него голубые глаза",
          "у неё голубые глаза",
          "синие глаза"
        ],
        "model": "У него синие глаза.",
        "hint": "Внешность по-испански «имеют»: tener + часть тела + цвет. ojos — глаза 👀"
      },
      {
        "type": "trER",
        "en": "Es mi familia.",
        "accept": [
          "это моя семья",
          "моя семья",
          "это мои родные"
        ],
        "model": "Это моя семья.",
        "hint": "Осторожно с ловушкой: familia — это «семья», а не «фамилия» 👨‍👩‍👧"
      },
      {
        "type": "order",
        "answer": "quiero a mi madre",
        "accept": [
          "quiero a mi madre"
        ],
        "hintRu": "Собери: «Я люблю маму.» (перед человеком — личное a)",
        "hint": "Когда любишь человека, между querer и «мамой» появляется маленькое личное a 💛"
      },
      {
        "type": "order",
        "answer": "trabajo en un hospital",
        "accept": [
          "trabajo en un hospital"
        ],
        "hintRu": "Скажи: «Я работаю в больнице.»",
        "hint": "Схема: глагол trabajo + en + место с артиклем (un hospital) 🏥"
      },
      {
        "type": "match",
        "q": "Соедини слово с переводом (семья).",
        "pairs": [
          [
            "madre",
            "мама"
          ],
          [
            "padre",
            "папа"
          ],
          [
            "hermano",
            "брат"
          ],
          [
            "hija",
            "дочь"
          ],
          [
            "abuelos",
            "бабушка и дедушка"
          ]
        ],
        "hint": "Держись знакомых корней: padre — «падре», hija — «дочь» 👨‍👩‍👧"
      },
      {
        "type": "match",
        "q": "Соедини цвет с переводом.",
        "pairs": [
          [
            "rojo",
            "красный"
          ],
          [
            "azul",
            "синий"
          ],
          [
            "verde",
            "зелёный"
          ],
          [
            "negro",
            "чёрный"
          ],
          [
            "blanco",
            "белый"
          ]
        ],
        "hint": "Вспомни цвета из карточек — rojo как «рубин», negro как «негатив» 🎨"
      },
      {
        "type": "describe",
        "prompt": "Опиши человека (1–2 предложения): цвет волос и глаз и рост. Используй tiene и es.",
        "keywords": [
          "tiene",
          "pelo",
          "ojos",
          "es alto",
          "es alta",
          "moreno",
          "guapo",
          "guapa",
          "negro",
          "azul",
          "azules"
        ],
        "minWords": 6,
        "model": "Tiene el pelo negro y los ojos azules. Es alta.",
        "hint": "Волосы и глаза «имеют» (tiene), а рост и красоту передаёт ser (es alto/guapa) 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи о себе сейчас (1–2 предложения): как ты, где ты и кем работаешь. Используй estoy и soy.",
        "keywords": [
          "estoy",
          "estoy en",
          "bien",
          "casa",
          "soy",
          "médico",
          "profesor",
          "profesora",
          "estudiante",
          "trabajo"
        ],
        "minWords": 6,
        "model": "Estoy bien. Estoy en casa. Soy profesora.",
        "hint": "Настроение и место — через estoy, а профессию назови через soy без артикля 🙂"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя позади. 25 заданий: настоящее время (-ar, -er, -ir и ir), возвратные глаголы, частота и дни недели, время на часах и «мне нравится». Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Настоящее: <b>-ar</b> hablo · <b>-er</b> como · <b>-ir</b> vivo (yo/tú/él: -o/-as/-a…)",
      "<b>ir</b>: voy · vas · va · vamos · van — Voy a casa",
      "Возвратные: <b>me</b> levanto · <b>te</b> levantas · <b>se</b> levanta (местоимение впереди)",
      "Частота: siempre · a veces · nunca · No como <b>nada</b> (двойное отрицание)",
      "Дни: lunes, martes… · <b>los lunes</b> = по понедельникам",
      "Время: <b>Es la una</b> · <b>Son las dos</b> · y media / y cuarto / menos cuarto",
      "<b>Me gusta</b> (одно) / <b>me gustan</b> (много) · me encanta · a mí también"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Yo ___ español.",
        "opts": [
          "hablo",
          "hablas",
          "habla",
          "hablar"
        ],
        "answer": "hablo",
        "why": "-ar, форма «yo» → hablo.",
        "hint": "Правильный глагол на -ar: для «yo» отбрось -ar и добавь -o 🙂"
      },
      {
        "type": "choice",
        "q": "Ana ___ inglés.",
        "opts": [
          "habla",
          "hablo",
          "hablas",
          "hablan"
        ],
        "answer": "habla",
        "why": "él/ella → habla.",
        "hint": "Ana — это «она», поэтому у глагола на -ar окончание -a 🙂"
      },
      {
        "type": "choice",
        "q": "Yo ___ en Madrid.",
        "opts": [
          "vivo",
          "vive",
          "vives",
          "vivir"
        ],
        "answer": "vivo",
        "why": "-ir, форма «yo» → vivo.",
        "hint": "Глагол на -ir для «yo» тоже кончается на -o: отбрось -ir, добавь -o 🏙️"
      },
      {
        "type": "choice",
        "q": "___ a casa. <i style='opacity:.6'>я иду</i>",
        "opts": [
          "Voy",
          "Vas",
          "Va",
          "Van"
        ],
        "answer": "Voy",
        "why": "ir, форма «yo» → voy.",
        "hint": "Глагол ir неправильный — форма для «я» звучит совсем не как инфинитив 🚶"
      },
      {
        "type": "choice",
        "q": "___ levanto a las siete. <i style='opacity:.6'>я встаю</i>",
        "opts": [
          "Me",
          "Te",
          "Se",
          "Nos"
        ],
        "answer": "Me",
        "why": "Возвратное «я» → me levanto.",
        "hint": "Действие возвращается к тебе самому — для «yo» это местоимение стоит впереди глагола 🙂"
      },
      {
        "type": "choice",
        "q": "___ tomo café. <i style='opacity:.6'>никогда не пью</i>",
        "opts": [
          "Nunca",
          "Siempre",
          "A veces",
          "Normalmente"
        ],
        "answer": "Nunca",
        "why": "«Никогда» → nunca.",
        "hint": "«Никогда не» по-испански передаёт одно слово частоты — противоположное «siempre» 🚫"
      },
      {
        "type": "choice",
        "q": "___ la una. <i style='opacity:.6'>сейчас час, 1:00</i>",
        "opts": [
          "Es",
          "Son",
          "Está",
          "Estás"
        ],
        "answer": "Es",
        "why": "Час — единственное число → Es la una.",
        "hint": "Один час — исключение: тут ser в единственном числе, а не «son» 🕐"
      },
      {
        "type": "choice",
        "q": "___ las dos y media. <i style='opacity:.6'>2:30</i>",
        "opts": [
          "Son",
          "Es",
          "Está",
          "Hay"
        ],
        "answer": "Son",
        "why": "Два часа и больше — множественное → Son las dos.",
        "hint": "Со второго часа и дальше время идёт во множественном числе 🕑"
      },
      {
        "type": "choice",
        "q": "Me ___ los libros.",
        "opts": [
          "gustan",
          "gusta",
          "gusto",
          "gustas"
        ],
        "answer": "gustan",
        "why": "Нравятся книги (много) → gustan.",
        "hint": "Здесь «нравятся» не тебе подстраивается, а под то, что нравится: книг много → gustan 📚"
      },
      {
        "type": "choice",
        "q": "Me ___ el café.",
        "opts": [
          "gusta",
          "gustan",
          "gusto",
          "gustamos"
        ],
        "answer": "gusta",
        "why": "Нравится одно (кофе) → gusta.",
        "hint": "Нравится один предмет, значит глагол в единственном числе — gusta ☕"
      },
      {
        "type": "gap",
        "q": "Yo ___ paella. <i style='opacity:.6'>ем</i>",
        "accept": [
          "como"
        ],
        "model": "como",
        "hint": "comer на -er: для «yo» отбрось -er и добавь -o 🍽️"
      },
      {
        "type": "gap",
        "q": "¿A qué hora ___ levantas? <i style='opacity:.6'>ты</i>",
        "accept": [
          "te"
        ],
        "model": "te",
        "hint": "Возвратное местоимение для «tú» стоит перед глаголом 🙂"
      },
      {
        "type": "gap",
        "q": "No como ___. <i style='opacity:.6'>ничего</i>",
        "accept": [
          "nada"
        ],
        "model": "nada",
        "hint": "По-испански двойное отрицание в норме: уже есть no, добавь слово «ничего» 🙂"
      },
      {
        "type": "gap",
        "q": "Como ___ las dos. <i style='opacity:.6'>в 2 часа</i>",
        "accept": [
          "a"
        ],
        "model": "a",
        "hint": "Перед указанием часа ставится маленький предлог времени 🕑"
      },
      {
        "type": "trRE",
        "ru": "Я говорю по-испански.",
        "accept": [
          "hablo español",
          "hablo espanol",
          "yo hablo español",
          "yo hablo espanol"
        ],
        "model": "Hablo español.",
        "hint": "Местоимение можно опустить: глагол hablo уже показывает, что это «я» 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я встаю рано.",
        "accept": [
          "me levanto temprano",
          "yo me levanto temprano"
        ],
        "model": "Me levanto temprano.",
        "hint": "«Встаю» — возвратный глагол: me + levanto, потом «рано» (temprano) 🌅"
      },
      {
        "type": "trRE",
        "ru": "Мне нравится кофе.",
        "accept": [
          "me gusta el café",
          "me gusta el cafe"
        ],
        "model": "Me gusta el café.",
        "hint": "Конструкция наоборот: me gusta + артикль el + café 🙂"
      },
      {
        "type": "trER",
        "en": "Voy a casa.",
        "accept": [
          "я иду домой",
          "иду домой",
          "я еду домой"
        ],
        "model": "Я иду домой.",
        "hint": "voy — форма ir для «я»; a casa — «домой» 🏠"
      },
      {
        "type": "trER",
        "en": "¿Qué hora es?",
        "accept": [
          "который час",
          "сколько времени",
          "который час?",
          "сколько сейчас времени"
        ],
        "model": "Который час?",
        "hint": "Это вопрос про время на часах — начни со слова «который» 🕐"
      },
      {
        "type": "order",
        "answer": "siempre tomo café",
        "accept": [
          "siempre tomo café",
          "siempre tomo cafe",
          "tomo café siempre",
          "tomo cafe siempre"
        ],
        "hintRu": "Собери: «Я всегда пью кофе.»",
        "hint": "Слово частоты siempre удобно поставить в начало, дальше — глагол и что пьёшь ☕"
      },
      {
        "type": "order",
        "answer": "me acuesto por la noche",
        "accept": [
          "me acuesto por la noche",
          "por la noche me acuesto"
        ],
        "hintRu": "Собери: «Вечером я ложусь спать.»",
        "hint": "Возвратный глагол me acuesto + когда (por la noche); порядок можно и поменять 🌙"
      },
      {
        "type": "match",
        "q": "Соедини день недели с переводом.",
        "pairs": [
          [
            "lunes",
            "понедельник"
          ],
          [
            "martes",
            "вторник"
          ],
          [
            "miércoles",
            "среда"
          ],
          [
            "viernes",
            "пятница"
          ],
          [
            "domingo",
            "воскресенье"
          ]
        ],
        "hint": "Начни с знакомых: lunes — начало недели, domingo — выходной 📅"
      },
      {
        "type": "match",
        "q": "Соедини глагол с переводом.",
        "pairs": [
          [
            "hablar",
            "говорить"
          ],
          [
            "comer",
            "есть"
          ],
          [
            "vivir",
            "жить"
          ],
          [
            "trabajar",
            "работать"
          ],
          [
            "escuchar",
            "слушать"
          ]
        ],
        "hint": "Опирайся на знакомое: comer — «есть», vivir — «жить» 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи про своё утро (1–2 предложения): во сколько встаёшь и что делаешь. Используй me levanto, me ducho…",
        "keywords": [
          "me levanto",
          "me ducho",
          "me visto",
          "a las",
          "temprano",
          "siete",
          "luego",
          "primero",
          "desayuno"
        ],
        "minWords": 6,
        "model": "Me levanto a las siete. Luego me ducho y me visto.",
        "hint": "Рутина — цепочка возвратных глаголов: me levanto → me ducho → me visto, время через a las… 🌅"
      },
      {
        "type": "describe",
        "prompt": "Напиши, что тебе нравится и как часто ты это делаешь (1–2 предложения). Используй me gusta и siempre/a veces.",
        "keywords": [
          "me gusta",
          "me gustan",
          "me encanta",
          "siempre",
          "a veces",
          "nunca",
          "café",
          "música",
          "leer",
          "todos los días"
        ],
        "minWords": 6,
        "model": "Me gusta el café. Siempre tomo café por la mañana.",
        "hint": "Сначала me gusta + что нравится, потом слово частоты (siempre, a veces) 🙂"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен A1",
    "intro": "Это финал! 33 задания по всему уровню A1: приветствия и ser/estar, род и множественное, числа и tener, семья и профессии, настоящее время и рутина, время и «нравится», а ещё вся Неделя 4 — дом, город, ресторан, покупки, планы, погода и лёгкое прошедшее. Соберись — и вперёд к грамоте A1! 🏆",
    "review": [
      "ser / estar · род и артикли · множественное (-s / -es)",
      "Числа и <b>tener</b>: Tengo… años · este / ese · ¿Qué es esto?",
      "Семья и <b>mi/tu/su</b> · профессии без артикля · tener que / querer",
      "Настоящее: hablo · como · vivo · <b>voy</b> · возвратные me levanto",
      "Частота и дни · время: Es la una / Son las dos · <b>me gusta / gustan</b>",
      "Дом и мебель · <b>hay</b> + предлоги · слияния <b>al</b> (a+el), <b>del</b> (de+el)",
      "Город и дорога: gira, sigue, cruza · ресторан: la carta, la cuenta",
      "Одежда и цена: ¿cuánto cuesta(n)? · планы <b>ir a</b> + инфинитив",
      "Погода через <b>hace</b> · лёгкое прошедшее: <b>he</b> hablado / comido / hecho"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Son las nueve de la mañana. ¡___!",
        "opts": [
          "Buenos días",
          "Buenas noches",
          "Buenas tardes",
          "Adiós"
        ],
        "answer": "Buenos días",
        "why": "Утро → Buenos días.",
        "hint": "Утро в разгаре — выбери приветствие для первой половины дня ☀️"
      },
      {
        "type": "choice",
        "q": "Ana es de España. Ana es ___.",
        "opts": [
          "española",
          "español",
          "españolas",
          "España"
        ],
        "answer": "española",
        "why": "Ана — женщина: española (España — это страна).",
        "hint": "Национальность для женщины берёт форму на -a; España с большой буквы — это страна 🇪🇸"
      },
      {
        "type": "choice",
        "q": "El ___ es difícil. <i style='opacity:.6'>проблема — исключение, м. р.</i>",
        "opts": [
          "problema",
          "casa",
          "mesa",
          "silla"
        ],
        "answer": "problema",
        "why": "problema на -a, но мужского рода: el problema.",
        "hint": "Некоторые слова на -ma — мужские: артикль el выдаёт исключение 🙂"
      },
      {
        "type": "choice",
        "q": "___ cansado hoy. <i style='opacity:.6'>устал сейчас</i>",
        "opts": [
          "Estoy",
          "Soy",
          "Tengo",
          "Es"
        ],
        "answer": "Estoy",
        "why": "Состояние сейчас → estar.",
        "hint": "Усталость — временна, её передаёт estar; ser сменил бы смысл на характер 🙂"
      },
      {
        "type": "choice",
        "q": "una camisa ___ <i style='opacity:.6'>красная</i>",
        "opts": [
          "roja",
          "rojo",
          "rojas",
          "rojos"
        ],
        "answer": "roja",
        "why": "camisa — женский род, единственное → roja.",
        "hint": "Цвет согласуется: camisa женского рода и одна — окончание -a 👚"
      },
      {
        "type": "choice",
        "q": "En la mesa ___ un libro. <i style='opacity:.6'>есть</i>",
        "opts": [
          "hay",
          "está",
          "es",
          "tiene"
        ],
        "answer": "hay",
        "why": "«Есть, имеется» (с un) → hay.",
        "hint": "Сообщаешь, что нечто есть (и рядом un) — это неизменяемое слово hay 📚"
      },
      {
        "type": "choice",
        "q": "Nosotros ___ español.",
        "opts": [
          "hablamos",
          "hablo",
          "habla",
          "hablan"
        ],
        "answer": "hablamos",
        "why": "nosotros → hablamos.",
        "hint": "Для «мы» у глаголов на -ar окончание -amos 🙂"
      },
      {
        "type": "choice",
        "q": "___ las cinco. <i style='opacity:.6'>5:00</i>",
        "opts": [
          "Son",
          "Es",
          "Está",
          "Hay"
        ],
        "answer": "Son",
        "why": "Пять часов — множественное → Son.",
        "hint": "Часов больше одного — время во множественном числе 🕔"
      },
      {
        "type": "choice",
        "q": "Me ___ las canciones.",
        "opts": [
          "gustan",
          "gusta",
          "gusto",
          "gustas"
        ],
        "answer": "gustan",
        "why": "Нравятся песни (много) → gustan.",
        "hint": "Глагол подстраивается под то, что нравится: песен много → gustan 🎵"
      },
      {
        "type": "choice",
        "q": "El ___ está en el salón. <i style='opacity:.6'>диван — м. р.</i>",
        "opts": [
          "sofá",
          "mesa",
          "silla",
          "cama"
        ],
        "answer": "sofá",
        "why": "sofá — мужского рода: el sofá.",
        "hint": "Артикль el подсказывает мужской род — из мебели это диван 🛋️"
      },
      {
        "type": "choice",
        "q": "Voy ___ baño. <i style='opacity:.6'>a + el</i>",
        "opts": [
          "al",
          "a el",
          "del",
          "a la"
        ],
        "answer": "al",
        "why": "a + el → al (обязательное слияние).",
        "hint": "Предлог a и артикль el обязательно сливаются в одно слово 🚪"
      },
      {
        "type": "choice",
        "q": "___ a la derecha. <i style='opacity:.6'>поверни</i>",
        "opts": [
          "Gira",
          "Giras",
          "Girar",
          "Giro"
        ],
        "answer": "Gira",
        "why": "Команда «ты» → Gira.",
        "hint": "Указание дороги — это команда на «ты»; глагол стоит в приказной форме 👉"
      },
      {
        "type": "choice",
        "q": "En el restaurante: ¿Me trae ___? <i style='opacity:.6'>меню — список блюд</i>",
        "opts": [
          "la carta",
          "el mapa",
          "la silla",
          "la cuenta"
        ],
        "answer": "la carta",
        "why": "Меню в ресторане — la carta (ложный друг: не «карта»).",
        "hint": "«Меню» по-испански — ложный друг, не «карта» в значении map и не счёт; это список блюд 🍽️"
      },
      {
        "type": "choice",
        "q": "Hoy ___ calor. <i style='opacity:.6'>жарко</i>",
        "opts": [
          "hace",
          "está",
          "es",
          "hay"
        ],
        "answer": "hace",
        "why": "Погода с calor/frío/sol — через hacer: hace calor.",
        "hint": "Про жару и холод испанский говорит глаголом hacer, а не ser/estar ☀️"
      },
      {
        "type": "gap",
        "q": "___ treinta años. <i style='opacity:.6'>мне 30</i>",
        "accept": [
          "tengo"
        ],
        "model": "tengo",
        "hint": "Возраст «имеют»: глагол tener в форме для «я» 🎂"
      },
      {
        "type": "gap",
        "q": "___ a casa. <i style='opacity:.6'>я иду</i>",
        "accept": [
          "voy"
        ],
        "model": "voy",
        "hint": "Глагол ir для «я» — короткая неправильная форма 🚶"
      },
      {
        "type": "gap",
        "q": "¿Cuánto ___ los zapatos? <i style='opacity:.6'>стоят</i>",
        "accept": [
          "cuestan"
        ],
        "model": "cuestan",
        "hint": "Туфель много, поэтому глагол «стоить» ставим во множественное число 👟"
      },
      {
        "type": "gap",
        "q": "Hoy ___ comido. <i style='opacity:.6'>я поел</i>",
        "accept": [
          "he"
        ],
        "model": "he",
        "hint": "Лёгкое прошедшее — вспомогательный глагол haber (форма для «я») + причастие comido 🙂"
      },
      {
        "type": "gap",
        "q": "No como ___. <i style='opacity:.6'>ничего</i>",
        "accept": [
          "nada"
        ],
        "model": "nada",
        "hint": "Двойное отрицание в норме: уже есть no — добавь «ничего» 🙂"
      },
      {
        "type": "trRE",
        "ru": "Что это?",
        "accept": [
          "¿qué es esto?",
          "qué es esto",
          "¿que es esto?",
          "que es esto",
          "¿qué es esto",
          "¿que es esto"
        ],
        "model": "¿Qué es esto?",
        "hint": "Про предмет неизвестного рода спрашивают средним esto; не забудь перевёрнутый ¿ 🙂"
      },
      {
        "type": "trRE",
        "ru": "Это моя семья.",
        "accept": [
          "es mi familia",
          "esta es mi familia"
        ],
        "model": "Es mi familia.",
        "hint": "«Семья» — familia (не фамилия!), «моя» — mi 👨‍👩‍👧"
      },
      {
        "type": "trRE",
        "ru": "Я хочу кофе.",
        "accept": [
          "quiero un café",
          "quiero un cafe"
        ],
        "model": "Quiero un café.",
        "hint": "«Хочу» — querer для «я» (quiero), и перед café нужен артикль un ☕"
      },
      {
        "type": "trRE",
        "ru": "Завтра я буду учиться.",
        "accept": [
          "mañana voy a estudiar",
          "manana voy a estudiar"
        ],
        "model": "Mañana voy a estudiar.",
        "hint": "Ближайшее будущее: voy a + инфинитив (estudiar); mañana — «завтра» 📅"
      },
      {
        "type": "trER",
        "en": "Me levanto temprano.",
        "accept": [
          "я встаю рано",
          "встаю рано",
          "я рано встаю"
        ],
        "model": "Я встаю рано.",
        "hint": "me levanto — возвратное «встаю», temprano — «рано» 🌅"
      },
      {
        "type": "trER",
        "en": "Soy profesora.",
        "accept": [
          "я преподавательница",
          "я учительница",
          "я преподаватель",
          "я учитель"
        ],
        "model": "Я преподавательница.",
        "hint": "profesora — женская форма профессии; по-русски подойдёт «преподавательница» 🙂"
      },
      {
        "type": "trER",
        "en": "¿Qué has hecho hoy?",
        "accept": [
          "что ты сделал сегодня",
          "что ты сделала сегодня",
          "что ты сегодня сделал",
          "что ты сегодня сделала",
          "что ты делал сегодня"
        ],
        "model": "Что ты сделал сегодня?",
        "hint": "has hecho — лёгкое прошедшее «сделал»; hoy — «сегодня» 🙂"
      },
      {
        "type": "order",
        "answer": "sigue todo recto",
        "accept": [
          "sigue todo recto"
        ],
        "hintRu": "Собери команду: «Иди прямо.»",
        "hint": "Команда на «ты»: глагол sigue + todo recto («всё прямо») ➡️"
      },
      {
        "type": "order",
        "answer": "cuánto cuesta esta camisa",
        "accept": [
          "cuánto cuesta esta camisa",
          "cuanto cuesta esta camisa"
        ],
        "hintRu": "Спроси: «Сколько стоит эта рубашка?»",
        "hint": "Один предмет → cuesta; дальше указатель esta + camisa 👚"
      },
      {
        "type": "order",
        "answer": "vamos a comer",
        "accept": [
          "vamos a comer"
        ],
        "hintRu": "Собери: «Давай поедим!» / «Мы поедим.»",
        "hint": "Форма nosotros от ir + a + инфинитив звучит как приглашение 🍽️"
      },
      {
        "type": "match",
        "q": "Соедини место с переводом.",
        "pairs": [
          [
            "la cocina",
            "кухня"
          ],
          [
            "el baño",
            "ванная"
          ],
          [
            "la calle",
            "улица"
          ],
          [
            "la tienda",
            "магазин"
          ],
          [
            "la estación",
            "вокзал"
          ]
        ],
        "hint": "Держись знакомых корней: estación — «станция», tienda — «лавка» 🏙️"
      },
      {
        "type": "match",
        "q": "Соедини с переводом (погода и сезоны).",
        "pairs": [
          [
            "hace sol",
            "солнечно"
          ],
          [
            "hace frío",
            "холодно"
          ],
          [
            "llueve",
            "идёт дождь"
          ],
          [
            "el verano",
            "лето"
          ],
          [
            "el invierno",
            "зима"
          ]
        ],
        "hint": "Погоду с hace вспоминай через ощущение, а сезоны — по картинке года ☀️"
      },
      {
        "type": "describe",
        "prompt": "Опиши свой дом (2–3 предложения): какие комнаты есть и что где стоит. Используй hay и предлоги места.",
        "keywords": [
          "hay",
          "cocina",
          "dormitorio",
          "baño",
          "salón",
          "mesa",
          "sofá",
          "cama",
          "en",
          "al lado de",
          "encima de"
        ],
        "minWords": 8,
        "model": "En mi casa hay una cocina y un salón. En el salón hay un sofá. La mesa está al lado de la ventana.",
        "hint": "Сначала hay + комнаты, потом что где: hay для наличия, está для места конкретного предмета 🏠"
      },
      {
        "type": "describe",
        "prompt": "Расскажи о себе (2–3 предложения): как тебя зовут, откуда ты, сколько тебе лет и что тебе нравится. Используй me llamo, soy de…, tengo… años, me gusta…",
        "keywords": [
          "me llamo",
          "soy de",
          "soy",
          "tengo",
          "años",
          "anos",
          "me gusta",
          "me encanta",
          "vivo",
          "trabajo"
        ],
        "minWords": 8,
        "model": "Me llamo Ana. Soy de Rusia. Tengo treinta años. Me gusta viajar.",
        "hint": "Собери всё вместе: имя (me llamo) → страна (soy de) → возраст (tengo… años) → вкусы (me gusta) 💛"
      }
    ]
  }
};

/* ===== helpers ===== */
