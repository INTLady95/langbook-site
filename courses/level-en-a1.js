/* English A1 — level config + 30-day plan (COURSE) + weekly exams (EXAMS).
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'A1',
  course:'en-a1',
  pkey:'langbook-a1-progress',
  preview:false,
  finalNote:'Это твоя победа 💛 Полный уровень English с нуля — позади. Горжусь тобой!'
};

const COURSE = [
  {wn:'01', wt:'Первые слова', days:[
    {n:1,t:'Знакомство',p:'Поздороваться, имя, глагол to be (am).'},
    {n:2,t:'Откуда ты',p:'you are / he-she is, страны.'},
    {n:3,t:'Один и много',p:'артикль a/an, множественное -s.'},
    {n:4,t:'Это и то',p:'this/that/these/those.'},
    {n:5,t:'Да-нет вопросы',p:'вопросы и отрицания с be.'},
    {n:6,t:'Числа и возраст',p:'числа 0–20, How old are you?'},
    {n:7,t:'Повторение №1',p:'закрепляем неделю 1 + тест.'}
  ]},
  {wn:'02', wt:'Люди и вещи', days:[
    {n:8,t:'Цвета и какой',p:'прилагательные + цвета.'},
    {n:9,t:'Моя семья',p:'my/your/his/her, семья.'},
    {n:10,t:'Кому и кого',p:"object pronouns, притяжательный 's."},
    {n:11,t:'У меня есть',p:'have got, What do you do?'},
    {n:12,t:'Профессии',p:'jobs, a/an с профессией.'},
    {n:13,t:'Я умею',p:"can / can't."},
    {n:14,t:'Повторение №2',p:'закрепляем неделю 2 + тест.'}
  ]},
  {wn:'03', wt:'Каждый день', days:[
    {n:15,t:'Распорядок дня',p:'Present Simple (I/you/we/they).'},
    {n:16,t:'Он и она',p:'Present Simple he/she + -s.'},
    {n:17,t:'Вопросы про день',p:"do/does, don't/doesn't."},
    {n:18,t:'Как часто',p:'частотность + повтор do/does.'},
    {n:19,t:'Который час',p:'время, at/on/in.'},
    {n:20,t:'Еда и кафе',p:'some/any, I\'d like, цены.'},
    {n:21,t:'Повторение №3',p:'закрепляем неделю 3 + тест.'}
  ]},
  {wn:'04', wt:'Мир вокруг', days:[
    {n:22,t:'Мой дом',p:'there is / there are.'},
    {n:23,t:'Где это',p:'предлоги места.'},
    {n:24,t:'В городе',p:'направления, imperative.'},
    {n:25,t:'Прямо сейчас',p:'Present Continuous.'},
    {n:26,t:'Сейчас или обычно',p:'Simple vs Continuous, хобби.'},
    {n:27,t:'Погода',p:'погода, сезоны.'},
    {n:28,t:'Вчера',p:'was / were.'},
    {n:29,t:'Что я делал',p:'Past Simple (правильные глаголы).'},
    {n:30,t:'Расскажи о себе',p:'финальный проект + итог A1.'}
  ]}
];

/* ===== weekly checkpoint exams (content) ===== */
const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя позади — проверим себя! 25 вопросов по всему, что мы учили: приветствия и знакомство, to be, a/an, множественное число, this/that, вопросы, числа и возраст. Не торопись. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Приветствия и знакомство: Good morning · Hello · What's your name?",
      "<b>am / is / are:</b> I am · he/she/it is · you/we/they are",
      "<b>a</b> + согласный звук, <b>an</b> + гласный звук (an apple)",
      "Множественное: +s; box→boxes; child→children",
      "<b>this</b> (это, близко) · <b>that</b> (то, далеко) · these · those",
      "Вопрос: <b>Are</b> you…? Отрицание: isn't / aren't · I'm not",
      "Считаем и спрашиваем: How many? · Возраст: I'm 15 (fifteen)"
    ],
    "q": [
      {
        "type": "choice",
        "q": "I ___ a student.",
        "opts": [
          "am",
          "is",
          "are",
          "be"
        ],
        "answer": "am",
        "why": "I → am.",
        "hint": "Вспомни: у местоимения «I» есть своя, только ему принадлежащая форма глагола to be 😊"
      },
      {
        "type": "choice",
        "q": "She ___ my sister.",
        "opts": [
          "am",
          "is",
          "are",
          "be"
        ],
        "answer": "is",
        "why": "he/she/it → is.",
        "hint": "Для he/she/it глагол to be берёт форму третьего лица единственного — подумай, какая она 🙂"
      },
      {
        "type": "gap",
        "q": "We ___ friends. <i style=\"opacity:.6\">(be)</i>",
        "accept": [
          "are",
          "we are"
        ],
        "model": "are",
        "hint": "С «we» (как и с you/they) у to be общая форма множественного — та же, что и для «они» ✨"
      },
      {
        "type": "match",
        "q": "Перетащи каждую картинку к её английскому слову.",
        "pairs": [
          [
            "🍎",
            "apple"
          ],
          [
            "🐶",
            "dog"
          ],
          [
            "🏠",
            "house"
          ],
          [
            "📕",
            "book"
          ],
          [
            "⭐",
            "star"
          ]
        ],
        "hint": "Произнеси каждое слово вслух и опирайся на знакомый образ — звук и первая буква подскажут пару 🍎"
      },
      {
        "type": "choice",
        "q": "It's ___ umbrella.",
        "opts": [
          "a",
          "an",
          "the",
          "—"
        ],
        "answer": "an",
        "why": "перед гласным звуком → an.",
        "hint": "Посмотри, с какого звука начинается следующее слово: гласный или согласный решает форму артикля 🙂"
      },
      {
        "type": "gap",
        "q": "one box → two ___",
        "accept": [
          "boxes"
        ],
        "model": "boxes",
        "hint": "Слова на -x (а ещё на -s, -ch, -sh) во множественном получают окончание подлиннее ✨"
      },
      {
        "type": "choice",
        "q": "I have three ___.",
        "opts": [
          "child",
          "childs",
          "children",
          "childrens"
        ],
        "answer": "children",
        "why": "child → children (исключение).",
        "hint": "У этого слова множественное число особенное — оно не подчиняется привычному правилу с «-s» 🙂"
      },
      {
        "type": "choice",
        "q": "___ book here is mine. <i style=\"opacity:.6\">(близко)</i>",
        "opts": [
          "This",
          "That",
          "These",
          "Those"
        ],
        "answer": "This",
        "why": "один + близко → this.",
        "hint": "Один предмет, который прямо рядом с тобой — выбери указатель «для близкого и единственного» 👉"
      },
      {
        "type": "trER",
        "en": "These are my friends.",
        "accept": [
          "это мои друзья",
          "эти люди мои друзья",
          "это все мои друзья",
          "это — мои друзья"
        ],
        "model": "Это мои друзья.",
        "hint": "Здесь настоящее время и указательное «эти» во множественном — начни перевод именно с указательного слова 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я студент.",
        "accept": [
          "i am a student",
          "im a student",
          "i am student",
          "i m a student"
        ],
        "model": "I am a student.",
        "hint": "После «я» обязателен глагол to be, а перед профессией — маленький артикль; не потеряй ни то, ни другое 😊"
      },
      {
        "type": "order",
        "answer": "are you from italy",
        "accept": [
          "are you from italy"
        ],
        "hintRu": "Спроси по-английски: «Ты из Италии?»",
        "hint": "В вопросе с to be глагол выходит вперёд — раньше того, о ком спрашиваешь 🙂"
      },
      {
        "type": "choice",
        "q": "___ you from Italy?",
        "opts": [
          "Is",
          "Am",
          "Are",
          "Do"
        ],
        "answer": "Are",
        "why": "you → Are you…?",
        "hint": "Подбери форму to be под «you» — ту же, что используется для множественного 🙂"
      },
      {
        "type": "trRE",
        "ru": "Это яблоко.",
        "accept": [
          "this is an apple",
          "it is an apple",
          "its an apple",
          "this is apple"
        ],
        "model": "This is an apple.",
        "hint": "Нужны указатель «это», глагол to be и артикль — а форму артикля подскажет первый звук слова 🍎"
      },
      {
        "type": "gap",
        "q": "He ___ a teacher. <i style=\"opacity:.6\">(отрицание, кратко)</i>",
        "accept": [
          "isn't",
          "is not",
          "isnt"
        ],
        "model": "isn't",
        "hint": "Возьми форму to be для «he» и приклей к ней краткое отрицание, слепив их в одно сокращение 🙂"
      },
      {
        "type": "trRE",
        "ru": "Мне пятнадцать лет.",
        "accept": [
          "i am fifteen",
          "im fifteen",
          "i am 15",
          "im 15",
          "i am fifteen years old",
          "i m fifteen"
        ],
        "model": "I'm fifteen.",
        "hint": "По-английски возраст называют через глагол to be — «я есть столько-то», и слово «лет» не нужно 😊"
      },
      {
        "type": "describe",
        "img": "img/day-01.jpg",
        "prompt": "Кто на картинке? Опиши простыми словами (1–2 предложения): сколько людей и что они делают.",
        "minWords": 6,
        "keywords": [
          "people",
          "two",
          "man",
          "woman",
          "hello",
          "hands",
          "meet",
          "shake",
          "friends",
          "business",
          "greeting"
        ],
        "model": "There are two people. They are saying hello and shaking hands.",
        "hint": "Сначала посчитай людей, потом скажи, что они делают прямо сейчас — простыми словами и в настоящем времени 🙂"
      },
      {
        "type": "choice",
        "q": "Сейчас 9 утра. Как поздороваться? — ___!",
        "opts": [
          "Good morning",
          "Good afternoon",
          "Good evening",
          "Good night"
        ],
        "answer": "Good morning",
        "why": "До полудня — утро → Good morning.",
        "hint": "До полудня у нас утро — выбери приветствие именно для утренних часов ☀️"
      },
      {
        "type": "choice",
        "q": "___ from Canada. <i style=\"opacity:.6\">(он)</i>",
        "opts": [
          "He's",
          "His",
          "Him",
          "He are"
        ],
        "answer": "He's",
        "why": "He's = He is: He's from Canada.",
        "hint": "«Он есть из Канады» — нужна короткая форма «he» + «is», слитно через апостроф 🇨🇦"
      },
      {
        "type": "choice",
        "q": "I ___ a doctor. <i style=\"opacity:.6\">(отрицание)</i>",
        "opts": [
          "am not",
          "not am",
          "isn't",
          "don't"
        ],
        "answer": "am not",
        "why": "С «I» отрицание to be — am not (I'm not).",
        "hint": "У «I» своя форма to be, а «нет» ставим сразу после неё 🙂"
      },
      {
        "type": "choice",
        "q": "___ apples are there?",
        "opts": [
          "How many",
          "How much",
          "How old",
          "How long"
        ],
        "answer": "How many",
        "why": "Яблоки можно посчитать → How many.",
        "hint": "Яблоки можно пересчитать поштучно — выбери вопрос про количество для исчисляемого 🍎"
      },
      {
        "type": "gap",
        "q": "eighteen, nineteen, ___ <i style=\"opacity:.6\">(20)</i>",
        "accept": [
          "twenty"
        ],
        "model": "twenty",
        "hint": "После девятнадцати идёт круглый десяток — двадцать; вспомни, как он пишется 🔢"
      },
      {
        "type": "trER",
        "en": "What is your name?",
        "accept": [
          "как тебя зовут",
          "как вас зовут",
          "как твоё имя",
          "как твое имя",
          "как ваше имя"
        ],
        "model": "Как тебя зовут?",
        "hint": "Это вопрос про имя при знакомстве — начни со слова «как» 🙂"
      },
      {
        "type": "order",
        "answer": "these are my books",
        "accept": [
          "these are my books"
        ],
        "hintRu": "Собери: «Это мои книги.» (рядом, много)",
        "hint": "«Эти» + форма to be для множественного + «мои» + предмет во множественном 📚"
      },
      {
        "type": "match",
        "q": "Соедини флаг со страной.",
        "pairs": [
          [
            "🇫🇷",
            "France"
          ],
          [
            "🇮🇹",
            "Italy"
          ],
          [
            "🇪🇸",
            "Spain"
          ],
          [
            "🇷🇺",
            "Russia"
          ],
          [
            "🇨🇦",
            "Canada"
          ]
        ],
        "hint": "Названия стран держи в уме с большой буквы; подбери флаг к стране 🌍"
      },
      {
        "type": "describe",
        "img": "img/day-04.jpg",
        "prompt": "Опиши картинку (1–2 предложения): что рядом, а что далеко. Используй this/these и that.",
        "keywords": [
          "apple",
          "apples",
          "this",
          "that",
          "these",
          "those",
          "red",
          "green",
          "near",
          "far",
          "it is",
          "they are"
        ],
        "minWords": 6,
        "model": "This is a red apple. Those are green apples.",
        "hint": "Для близких предметов бери this/these, для далёкого — that; не забудь форму to be 🍎"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя готова! 25 заданий: прилагательные и цвета, my/his/her, объектные местоимения, ’s, have got, профессии, can, а ещё and/but. Наберёшь 80% — и Неделя 3 откроется.",
    "review": [
      "Прилагательное не меняется: a <b>red</b> car · red cars",
      "<b>his</b> (его) · <b>her</b> (её) · <b>their</b> (их)",
      "Объектные: me · you · him · her · us · them",
      "Чей? <b>dog's</b> ball (мяч собаки)",
      "<b>have got</b> (I/you/we/they) · <b>has got</b> (he/she/it)",
      "a/an + профессия: a doctor, an engineer",
      "<b>can / can't</b> + глагол: I can swim · she can't drive"
    ],
    "q": [
      {
        "type": "choice",
        "q": "a ___ car <i style=\"opacity:.6\">(красная)</i>",
        "opts": [
          "red",
          "reds",
          "a red",
          "red a"
        ],
        "answer": "red",
        "why": "Прилагательное не меняется по числу: a red car, red cars. 💛",
        "hint": "Прилагательное-цвет ставим прямо перед существительным, и форму оно не меняет — артикль у нас уже есть. 🎨"
      },
      {
        "type": "choice",
        "q": "This is ___ name. <i style=\"opacity:.6\">(его)</i>",
        "opts": [
          "he",
          "his",
          "him",
          "her"
        ],
        "answer": "his",
        "why": "Его → his (перед существительным).",
        "hint": "Тут нужна притяжательная форма «чьё имя?» для парня — та, что отвечает на вопрос „чей?\", а не само слово „он\". 🙂"
      },
      {
        "type": "choice",
        "q": "___ name is Anna. <i style=\"opacity:.6\">(её)</i>",
        "opts": [
          "She",
          "Her",
          "Hers",
          "His"
        ],
        "answer": "Her",
        "why": "Её перед словом → her: her name.",
        "hint": "В начале тоже нужна притяжательная форма «чьё имя?» для девушки, а не местоимение „она\". 💛"
      },
      {
        "type": "choice",
        "q": "I love ___ . <i style=\"opacity:.6\">(их)</i>",
        "opts": [
          "they",
          "them",
          "their",
          "theirs"
        ],
        "answer": "them",
        "why": "После глагола нужна объектная форма → them.",
        "hint": "После глагола love идёт объектное местоимение (кого люблю?), а не притяжательное. 🙂"
      },
      {
        "type": "choice",
        "q": "He is ___ engineer.",
        "opts": [
          "a",
          "an",
          "the",
          "—"
        ],
        "answer": "an",
        "why": "Слово начинается с гласного звука → an engineer.",
        "hint": "Выбор a/an зависит от первого звука слова, а engineer начинается с гласного звука. 🔤"
      },
      {
        "type": "choice",
        "q": "She ___ blue eyes.",
        "opts": [
          "have got",
          "has got",
          "have",
          "haves"
        ],
        "answer": "has got",
        "why": "She/he/it → has got.",
        "hint": "С she/he/it форма have got чуть меняется — вспомни, как именно. 🙂"
      },
      {
        "type": "choice",
        "q": "I ___ swim very well.",
        "opts": [
          "can",
          "cans",
          "can to",
          "am can"
        ],
        "answer": "can",
        "why": "can + глагол без to и без -s: I can swim.",
        "hint": "После этого слова глагол идёт в простой форме без to, и само оно не получает никаких окончаний. 💪"
      },
      {
        "type": "choice",
        "q": "She ___ drive a car. <i style=\"opacity:.6\">(не умеет)</i>",
        "opts": [
          "can't",
          "don't can",
          "no can",
          "cannot to"
        ],
        "answer": "can't",
        "why": "Не умеет → can’t + глагол.",
        "hint": "Здесь нужна отрицательная форма — короткое слово с not. 🙂"
      },
      {
        "type": "gap",
        "q": "This is ___ family. <i style=\"opacity:.6\">(моя)</i>",
        "accept": [
          "my"
        ],
        "model": "my",
        "hint": "Нужна притяжательная форма «чья семья?» от слова „я\". 💛"
      },
      {
        "type": "order",
        "answer": "i have got a brother",
        "accept": [
          "i have got a brother"
        ],
        "hintRu": "Собери по-английски: «У меня есть брат.»",
        "hint": "Порядок такой: кто + have got + артикль + что; не забудь маленькое слово перед братом. 🙂"
      },
      {
        "type": "trER",
        "en": "He has got a black car.",
        "accept": [
          "у него чёрная машина",
          "у него черная машина",
          "у него есть чёрная машина",
          "у него есть черная машина",
          "у него чёрный автомобиль",
          "у него черный автомобиль",
          "у него есть чёрный автомобиль",
          "у него есть черный автомобиль"
        ],
        "model": "У него чёрная машина.",
        "hint": "has got — это про обладание (у кого-то что-то есть), а цвет-прилагательное стоит перед предметом. 🚗"
      },
      {
        "type": "trRE",
        "ru": "Кем ты работаешь?",
        "accept": [
          "what do you do",
          "what is your job",
          "whats your job",
          "what s your job",
          "what do you do for a living",
          "what do you do for work",
          "what is your work"
        ],
        "model": "What do you do?",
        "hint": "Это вопрос о профессии: строим его через вспомогательный do, вспомни порядок «вопросительное слово + do + you + …». 🙂"
      },
      {
        "type": "trRE",
        "ru": "Это сумка Анны.",
        "accept": [
          "this is annas bag",
          "this is anna’s bag",
          "this is anna's bag",
          "this is anna s bag",
          "it is annas bag",
          "it’s annas bag",
          "its annas bag",
          "annas bag",
          "anna’s bag",
          "anna's bag"
        ],
        "model": "This is Anna's bag.",
        "hint": "Принадлежность человеку показываем коротким 's после имени. 🙂"
      },
      {
        "type": "match",
        "pairs": [
          [
            "🚗",
            "car"
          ],
          [
            "👜",
            "bag"
          ],
          [
            "🐶",
            "dog"
          ],
          [
            "🌹",
            "flower"
          ],
          [
            "👀",
            "eyes"
          ]
        ],
        "hint": "Проговори каждое слово вслух и соотнеси картинку по первому звуку. 🐶"
      },
      {
        "type": "describe",
        "img": "img/day-14.jpg",
        "prompt": "Кто на картинке? Опиши простыми словами (1–2 предложения): сколько людей, что у них есть и какие они.",
        "minWords": 8,
        "keywords": [
          "people",
          "two",
          "girl",
          "girls",
          "woman",
          "women",
          "cat",
          "cats",
          "animal",
          "pet",
          "have",
          "has",
          "got",
          "happy",
          "smile",
          "holding",
          "together",
          "young"
        ],
        "model": "There are two girls. They have got a cat. The cat is small and grey.",
        "hint": "По структуре: скажи, сколько людей (one/two), что у них есть через have got и какие они — добавь прилагательное. 🙂"
      },
      {
        "type": "choice",
        "q": "The sky ___ blue. <i style=\"opacity:.6\">(описываем)</i>",
        "opts": [
          "is",
          "are",
          "a",
          "be"
        ],
        "answer": "is",
        "why": "Один предмет + цвет: The sky is blue.",
        "hint": "Один предмет «небо» + описание цветом — нужна форма to be для he/she/it 🌤️"
      },
      {
        "type": "choice",
        "q": "I have got a brother ___ a sister.",
        "opts": [
          "and",
          "but",
          "or",
          "so"
        ],
        "answer": "and",
        "why": "Перечисляем (и брат, и сестра) → and.",
        "hint": "У тебя есть и тот, и другой — нужен союз, который складывает, добавляет 👦👧"
      },
      {
        "type": "gap",
        "q": "___ you got a car? <i style=\"opacity:.6\">(вопрос)</i>",
        "accept": [
          "have",
          "have you"
        ],
        "model": "Have",
        "hint": "Вопрос с «have got» начинаем со вспомогательного «have» впереди 🚗"
      },
      {
        "type": "gap",
        "q": "She is ___ nurse. <i style=\"opacity:.6\">(артикль)</i>",
        "accept": [
          "a"
        ],
        "model": "a",
        "hint": "Перед профессией в единственном числе нужен маленький артикль; nurse начинается с согласного звука 🩺"
      },
      {
        "type": "gap",
        "q": "This is ___ house. <i style=\"opacity:.6\">(наш)</i>",
        "accept": [
          "our"
        ],
        "model": "our",
        "hint": "Притяжательное «наш» от слова «мы» — короткое слово из трёх букв 🏠"
      },
      {
        "type": "trRE",
        "ru": "Она умеет петь.",
        "accept": [
          "she can sing",
          "she can sing well"
        ],
        "model": "She can sing.",
        "hint": "«Умеет» — это про способность: подлежащее + can + глагол без окончания 🎤"
      },
      {
        "type": "trER",
        "en": "I work in a school.",
        "accept": [
          "я работаю в школе",
          "работаю в школе"
        ],
        "model": "Я работаю в школе.",
        "hint": "«work in a…» — рассказываешь, где работаешь; переведи место работы 🏫"
      },
      {
        "type": "order",
        "answer": "she loves him",
        "accept": [
          "she loves him"
        ],
        "hintRu": "Собери: «Она любит его.»",
        "hint": "Кто + глагол + объектное местоимение (кого?) — «его» как объект 💕"
      },
      {
        "type": "match",
        "q": "Соедини профессию с картинкой.",
        "pairs": [
          [
            "👨‍🏫",
            "teacher"
          ],
          [
            "👩‍⚕️",
            "doctor"
          ],
          [
            "👨‍🍳",
            "cook"
          ],
          [
            "🚕",
            "driver"
          ],
          [
            "👷",
            "engineer"
          ]
        ],
        "hint": "Посмотри, чем занят человечек, и подбери название профессии 👩‍⚕️"
      },
      {
        "type": "describe",
        "img": "img/day-08.jpg",
        "prompt": "Опиши картинку (1–2 предложения): что это и какого цвета. Используй a … apple или The apple is … .",
        "keywords": [
          "apple",
          "apples",
          "red",
          "green",
          "yellow",
          "colour",
          "color",
          "this is",
          "they are",
          "nice",
          "it is"
        ],
        "minWords": 6,
        "model": "This is a red apple. That is a green apple.",
        "hint": "Назови предмет и его цвет: цвет ставим прямо перед словом (a red apple) 🍎"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Present Simple, распорядок дня, время и кафе — это была Неделя 3. 25 заданий — и дальше. Нужно 80%, чтобы открыть Неделю 4.",
    "review": [
      "Present Simple: I/you/we/they <b>work</b> · he/she/it <b>works</b>",
      "study→studies · go→goes · watch→watches",
      "Вопрос: <b>Do</b> you…? · <b>Does</b> he…?",
      "Отрицание: <b>don't</b> · <b>doesn't</b>",
      "Частотность: always · often · sometimes · never",
      "Время: <b>at</b> 9 o'clock · <b>on</b> Monday · <b>in</b> the morning",
      "<b>some</b> (+) · <b>any</b> (− / ?) · I'd like…"
    ],
    "q": [
      {
        "type": "choice",
        "q": "I ___ coffee every morning.",
        "opts": [
          "drink",
          "drinks",
          "am drink",
          "drinking"
        ],
        "answer": "drink",
        "why": "I / you / we / they — глагол не меняется. Окончание -s добавляем только для he/she/it. Значит: I drink ☕",
        "hint": "Подумай: после «I» глагол стоит в простой форме — без -s и без «am» 😊"
      },
      {
        "type": "gap",
        "q": "She ___ English at school. <i style=\"opacity:.6\">(study)</i>",
        "accept": [
          "studies",
          "she studies"
        ],
        "model": "studies",
        "hint": "С she нужен Present Simple, а у глаголов на согласную + y окончание чуть меняется 🌸"
      },
      {
        "type": "choice",
        "q": "___ you like tea?",
        "opts": [
          "Do",
          "Does",
          "Are",
          "Is"
        ],
        "answer": "Do",
        "why": "Вопрос с you начинаем с Do: Do you like…?",
        "hint": "Это вопрос в Present Simple — вспомни вспомогательный глагол для you/we/they 😉"
      },
      {
        "type": "choice",
        "q": "___ she work here?",
        "opts": [
          "Do",
          "Does",
          "Is",
          "Are"
        ],
        "answer": "Does",
        "why": "he / she / it → вопрос с Does. И заметь: дальше work без -s — окончание уже «забрал» Does.",
        "hint": "Тоже вопрос Present Simple, но подлежащее she — какой вспомогательный нужен для he/she/it? 🌿"
      },
      {
        "type": "choice",
        "q": "They ___ like fish.",
        "opts": [
          "don't",
          "doesn't",
          "aren't",
          "isn't"
        ],
        "answer": "don't",
        "why": "they → отрицание don't: They don't like…",
        "hint": "Это отрицание в Present Simple, а с they берём короткую форму для множественного 🙂"
      },
      {
        "type": "gap",
        "q": "He ___ eat meat. <i style=\"opacity:.6\">(отрицание)</i>",
        "accept": [
          "doesn't",
          "does not",
          "doesnt",
          "he doesn't",
          "he does not"
        ],
        "model": "doesn't",
        "hint": "Отрицание с he — вспомни вспомогательный для he/she/it и добавь not 🌷"
      },
      {
        "type": "choice",
        "q": "How ___ do you exercise?",
        "opts": [
          "often",
          "always",
          "usually",
          "sometimes"
        ],
        "answer": "often",
        "why": "Спрашиваем «как часто?» → How often. Остальные слова сами по себе вопрос не образуют.",
        "hint": "Спрашиваем «как часто» — здесь нужно слово-вопрос, а не наречие частотности ⏰"
      },
      {
        "type": "order",
        "answer": "i always read in the morning",
        "accept": [
          "i always read in the morning",
          "in the morning i always read"
        ],
        "hintRu": "Собери предложение: «Я всегда читаю утром».",
        "hint": "Порядок такой: кто + наречие частоты + глагол, а «утром» уезжает в самый конец 🌅"
      },
      {
        "type": "choice",
        "q": "The class starts ___ 9 o'clock.",
        "opts": [
          "at",
          "on",
          "in",
          "to"
        ],
        "answer": "at",
        "why": "Точное время → at: at 9 o'clock.",
        "hint": "С точным временем по часам нужен свой особый предлог 🕘"
      },
      {
        "type": "choice",
        "q": "We have English ___ Monday.",
        "opts": [
          "at",
          "on",
          "in",
          "—"
        ],
        "answer": "on",
        "why": "День недели → on: on Monday.",
        "hint": "С днями недели идёт отдельный предлог — вспомни правило для Monday, Friday и т.д. 📅"
      },
      {
        "type": "choice",
        "q": "I don't have ___ milk for my coffee.",
        "opts": [
          "any",
          "some",
          "a",
          "an"
        ],
        "answer": "any",
        "why": "В отрицании используем any: I don't have any…",
        "hint": "Предложение отрицательное — вспомни, какое из слов (some/any) живёт в отрицаниях 🥛"
      },
      {
        "type": "trRE",
        "ru": "Я хотел бы немного чая.",
        "accept": [
          "i would like some tea",
          "i'd like some tea",
          "id like some tea",
          "i would like tea",
          "i'd like tea",
          "i'd like a tea",
          "can i have some tea",
          "can i have a tea"
        ],
        "model": "I'd like some tea.",
        "hint": "Вспомни вежливую формулу просьбы «I'd like…» и слово, которое подходит для неисчисляемого в утвердительной просьбе 🍵"
      },
      {
        "type": "trER",
        "en": "She watches TV in the evening.",
        "accept": [
          "она смотрит телевизор вечером",
          "она смотрит тв вечером",
          "она смотрит телевизор по вечерам",
          "вечером она смотрит телевизор",
          "она смотрит телевизор вечерами"
        ],
        "model": "Она смотрит телевизор вечером.",
        "hint": "Это Present Simple про привычку: she + глагол с -s, а «in the evening» подскажет время суток 📺"
      },
      {
        "type": "match",
        "pairs": [
          [
            "☕",
            "coffee"
          ],
          [
            "🍵",
            "tea"
          ],
          [
            "💧",
            "water"
          ],
          [
            "🍞",
            "bread"
          ],
          [
            "🥪",
            "sandwich"
          ]
        ],
        "hint": "Соединяй по смыслу: вспомни, какой напиток или какую еду показывает каждая картинка ☕"
      },
      {
        "type": "describe",
        "img": "img/day-20.jpg",
        "prompt": "Ты в кафе. Опиши, что видишь, и закажи что-нибудь (2–3 предложения). Используй I can see…, I'd like…, How much…?",
        "keywords": [
          "coffee",
          "tea",
          "cake",
          "food",
          "table",
          "cafe",
          "cup",
          "like",
          "some",
          "water",
          "sandwich",
          "bread",
          "please",
          "eat",
          "drink",
          "how much",
          "money"
        ],
        "minWords": 8,
        "model": "I can see some coffee and cake on the table. I'd like some cake, please. How much is it?",
        "hint": "Опиши 2–3 предложениями, опираясь на каркасы I can see…, I'd like…, How much…? 🗣️"
      },
      {
        "type": "choice",
        "q": "He ___ to school every day.",
        "opts": [
          "goes",
          "gos",
          "go",
          "going"
        ],
        "answer": "goes",
        "why": "go + he/she/it → goes (окончание -es).",
        "hint": "С «he» глагол получает окончание, а go — особый: берёт -es 🚸"
      },
      {
        "type": "choice",
        "q": "It's ___ past seven. <i style=\"opacity:.6\">(7:30)</i>",
        "opts": [
          "half",
          "quarter",
          "o'clock",
          "thirty"
        ],
        "answer": "half",
        "why": "30 минут → half past seven.",
        "hint": "Половина часа по-английски — это «___ past»; 30 минут = половина ⏰"
      },
      {
        "type": "gap",
        "q": "I have breakfast ___ the morning.",
        "accept": [
          "in"
        ],
        "model": "in",
        "hint": "С частями суток (утро, день, вечер) идёт особый предлог — не тот, что с точным временем 🌅"
      },
      {
        "type": "gap",
        "q": "I ___ up at seven o'clock. <i style=\"opacity:.6\">(get)</i>",
        "accept": [
          "get"
        ],
        "model": "get",
        "hint": "«Встаю/просыпаюсь» — это get up; с «I» глагол в простой форме, без окончания ⏰"
      },
      {
        "type": "trRE",
        "ru": "Сколько это стоит?",
        "accept": [
          "how much is it",
          "how much is this",
          "how much",
          "how much does it cost"
        ],
        "model": "How much is it?",
        "hint": "В кафе спрашиваем цену фразой «How much…?» 💰"
      },
      {
        "type": "trRE",
        "ru": "Я иногда пью кофе.",
        "accept": [
          "i sometimes drink coffee",
          "sometimes i drink coffee",
          "i drink coffee sometimes"
        ],
        "model": "I sometimes drink coffee.",
        "hint": "Наречие частоты «иногда» ставим перед основным глаголом ☕"
      },
      {
        "type": "trER",
        "en": "He gets up at six o'clock.",
        "accept": [
          "он встаёт в шесть часов",
          "он встает в шесть часов",
          "он встаёт в шесть",
          "он встает в шесть",
          "он просыпается в шесть часов"
        ],
        "model": "Он встаёт в шесть часов.",
        "hint": "Present Simple про привычку: he + глагол с -s; gets up — «встаёт» 🕕"
      },
      {
        "type": "order",
        "answer": "where do you live",
        "accept": [
          "where do you live"
        ],
        "hintRu": "Собери вопрос: «Где ты живёшь?»",
        "hint": "Схема: вопросительное слово + do + you + глагол 🏡"
      },
      {
        "type": "match",
        "q": "Соедини день недели с переводом.",
        "pairs": [
          [
            "Monday",
            "понедельник"
          ],
          [
            "Friday",
            "пятница"
          ],
          [
            "Saturday",
            "суббота"
          ],
          [
            "Sunday",
            "воскресенье"
          ]
        ],
        "hint": "Вспомни английские названия дней недели и подбери перевод 📅"
      },
      {
        "type": "describe",
        "img": "img/day-19.jpg",
        "prompt": "Посмотри на картинку: который час? Опиши (1–2 предложения) и скажи, что ты обычно делаешь в это время.",
        "keywords": [
          "o'clock",
          "oclock",
          "time",
          "clock",
          "eleven",
          "half",
          "past",
          "usually",
          "at",
          "morning",
          "drink",
          "it is"
        ],
        "minWords": 6,
        "model": "It is eleven o'clock. I usually read in the morning.",
        "hint": "Скажи время (It is … o'clock) и добавь привычку с usually 🕒"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен A1",
    "intro": "Это финал! 33 задания — по всей Неделе 4 и прошедшему времени, плюс всё важное с прошлых недель: there is/are, предлоги места, повелительное, Present Continuous, погода, was/were, Past Simple и рассказ о себе. Соберись — и вперёд к сертификату A1! 🏆",
    "review": [
      "<b>There is</b> (ед.) · <b>There are</b> (мн.) · Is/Are there…?",
      "Предлоги места: in · on · under · next to · behind",
      "Повелительное: <b>Turn</b> left! · <b>Don't</b> turn! · Go straight!",
      "Present Continuous: am/is/are + <b>V-ing</b> (сейчас)",
      "Обычно (Simple) ↔ сейчас (Continuous) · like/love + <b>V-ing</b>",
      "Погода: It's sunny / rainy / cold",
      "<b>was</b> (I/he/she/it) · <b>were</b> (you/we/they)",
      "Past Simple: глагол + <b>-ed</b> (watched, listened)",
      "О себе: My name is… · I am from… · I am … years old"
    ],
    "q": [
      {
        "type": "choice",
        "q": "___ a book on the table.",
        "opts": [
          "There is",
          "There are",
          "It is",
          "Have"
        ],
        "answer": "There is",
        "why": "Книга одна, единственное число → There is.",
        "hint": "Книга одна — подумай, какую форму «there...» мы берём для одного предмета в единственном числе 📚"
      },
      {
        "type": "choice",
        "q": "___ three chairs in the room.",
        "opts": [
          "There is",
          "There are",
          "It are",
          "Has"
        ],
        "answer": "There are",
        "why": "Стульев несколько, множественное → There are.",
        "hint": "Стульев целых три — вспомни, какая форма «there...» дружит со множественным числом 🪑"
      },
      {
        "type": "choice",
        "q": "The cat is ___ the box. <i style=\"opacity:.6\">(внутри)</i>",
        "opts": [
          "in",
          "on",
          "under",
          "at"
        ],
        "answer": "in",
        "why": "Внутри коробки → in.",
        "hint": "«Внутри» коробки — выбери предлог, который отвечает за нахождение в закрытом пространстве 🐱"
      },
      {
        "type": "gap",
        "q": "The ball is ___ the table. <i style=\"opacity:.6\">(под)</i>",
        "accept": [
          "under"
        ],
        "model": "under",
        "hint": "«Под» столом — это когда предмет находится ниже поверхности; вспомни нужный предлог места 🎈"
      },
      {
        "type": "choice",
        "q": "___ left at the corner!",
        "opts": [
          "Turn",
          "Turns",
          "To turn",
          "Turning"
        ],
        "answer": "Turn",
        "why": "Команда — просто глагол: Turn left!",
        "hint": "Это команда-указание, поэтому глагол ставим в самом начале и в простой начальной форме, без подлежащего ➡️"
      },
      {
        "type": "choice",
        "q": "Look! She ___ a book now.",
        "opts": [
          "reads",
          "is reading",
          "read",
          "reading"
        ],
        "answer": "is reading",
        "why": "Now — прямо сейчас → is + V-ing.",
        "hint": "«Look!» и «now» кричат, что действие прямо сейчас — нужна форма be + глагол с окончанием -ing 👀"
      },
      {
        "type": "gap",
        "q": "It ___ now. <i style=\"opacity:.6\">(rain)</i>",
        "accept": [
          "is raining",
          "it is raining",
          "its raining"
        ],
        "model": "is raining",
        "hint": "Словечко «now» говорит: дождь идёт прямо в этот момент; собери is + глагол с -ing 🌧️"
      },
      {
        "type": "choice",
        "q": "We ___ TV every evening.",
        "opts": [
          "watch",
          "are watching",
          "watches",
          "watching"
        ],
        "answer": "watch",
        "why": "Every evening — это привычка → Present Simple: we watch.",
        "hint": "«Every evening» — это привычка, регулярное действие, поэтому здесь работает Present Simple в простой форме 📺"
      },
      {
        "type": "choice",
        "q": "What's the weather like? — It's ___ .",
        "opts": [
          "sunny",
          "sun",
          "a sun",
          "sunno"
        ],
        "answer": "sunny",
        "why": "Погоду описываем прилагательным: sun → sunny.",
        "hint": "Погоду мы описываем прилагательным, а не существительным «солнце» — ищи слово-описание ☀️"
      },
      {
        "type": "choice",
        "q": "I ___ at home yesterday.",
        "opts": [
          "was",
          "were",
          "am",
          "is"
        ],
        "answer": "was",
        "why": "I в прошлом → was.",
        "hint": "«Yesterday» — это прошлое, а подлежащее «I»; вспомни форму глагола to be в прошедшем для «я» 🏠"
      },
      {
        "type": "choice",
        "q": "They ___ happy. <i style=\"opacity:.6\">(прошлое)</i>",
        "opts": [
          "was",
          "were",
          "are",
          "be"
        ],
        "answer": "were",
        "why": "they/we/you в прошлом → were.",
        "hint": "Действие в прошлом, а «they» — множественное число; подбери подходящую форму was/were 😊"
      },
      {
        "type": "gap",
        "q": "She ___ to music last night. <i style=\"opacity:.6\">(listen)</i>",
        "accept": [
          "listened",
          "she listened"
        ],
        "model": "listened",
        "hint": "«Last night» — это прошлое, и глагол правильный, значит он получает окончание -ed 🎶"
      },
      {
        "type": "order",
        "answer": "yesterday i watched tv",
        "accept": [
          "yesterday i watched tv",
          "i watched tv yesterday"
        ],
        "hintRu": "Скажи по-английски: «Вчера я смотрел телевизор.»",
        "hint": "Начни с «вчера», потом подлежащее, дальше глагол в прошедшем с -ed, и в конце — что именно смотрел 📺"
      },
      {
        "type": "trER",
        "en": "There are two books on the table.",
        "accept": [
          "на столе две книги",
          "на столе лежат две книги",
          "на столе есть две книги",
          "две книги на столе",
          "на столе — две книги"
        ],
        "model": "На столе две книги.",
        "hint": "«There is/are» — про наличие («есть/находятся»); сначала назови место, а потом — что и сколько там. 📚"
      },
      {
        "type": "match",
        "pairs": [
          [
            "☀️",
            "sunny"
          ],
          [
            "🌧️",
            "rainy"
          ],
          [
            "❄️",
            "snowy"
          ],
          [
            "☁️",
            "cloudy"
          ],
          [
            "🌬️",
            "windy"
          ]
        ],
        "hint": "Соотнеси каждое слово о погоде с его явлением по смыслу: солнце, дождь, снег, тучи и ветер 🌦️"
      },
      {
        "type": "describe",
        "img": "img/day-25.jpg",
        "prompt": "Что происходит на картинке? Опиши простыми словами (2–3 предложения): кто это, где она и что она делает прямо сейчас.",
        "keywords": [
          "woman",
          "girl",
          "she",
          "pink",
          "sweater",
          "writing",
          "write",
          "notebook",
          "book",
          "journal",
          "pen",
          "sitting",
          "table",
          "cafe",
          "window"
        ],
        "minWords": 7,
        "model": "This is a young woman in a pink sweater. She is sitting at a table near the window and writing in her notebook.",
        "hint": "Скажи по порядку: кто это, где она, и обязательно что делает прямо сейчас — для «сейчас» бери is + глагол с -ing ✍️"
      },
      {
        "type": "choice",
        "q": "My parents ___ doctors.",
        "opts": [
          "am",
          "is",
          "are",
          "be"
        ],
        "answer": "are",
        "why": "parents — это «они», they → are.",
        "hint": "«Parents» — их двое, это множественное число; подбери подходящую форму глагола to be 👨‍👩‍👧"
      },
      {
        "type": "choice",
        "q": "I have three ___.",
        "opts": [
          "child",
          "childs",
          "children",
          "childrens"
        ],
        "answer": "children",
        "why": "child → children — особое множественное число.",
        "hint": "У слова «ребёнок» особое, неправильное множественное число — оно образуется не простым -s 👶"
      },
      {
        "type": "trRE",
        "ru": "У меня есть собака.",
        "accept": [
          "i have got a dog",
          "i have a dog",
          "ive got a dog",
          "i have got dog",
          "i ve got a dog"
        ],
        "model": "I have got a dog.",
        "hint": "Для «у меня есть» в A1 мы используем конструкцию have got, и не забудь маленький артикль перед существительным 🐶"
      },
      {
        "type": "trRE",
        "ru": "Я умею плавать.",
        "accept": [
          "i can swim",
          "i can swim well"
        ],
        "model": "I can swim.",
        "hint": "«Умею» — это про способность, поэтому нужен модальный глагол can, а после него глагол без частицы to 🏊"
      },
      {
        "type": "choice",
        "q": "___ there any chairs in the kitchen?",
        "opts": [
          "Are",
          "Is",
          "Have",
          "Do"
        ],
        "answer": "Are",
        "why": "chairs — множественное → Are there…?",
        "hint": "Стульев может быть много (chairs) — выбери форму «there…» для множественного 🪑"
      },
      {
        "type": "choice",
        "q": "The lamp is ___ the bed. <i style=\"opacity:.6\">(рядом с)</i>",
        "opts": [
          "next to",
          "behind",
          "under",
          "in"
        ],
        "answer": "next to",
        "why": "«Рядом с» → next to.",
        "hint": "«Рядом с» кроватью — это сбоку, вплотную; выбери предлог соседства 🛏️"
      },
      {
        "type": "choice",
        "q": "She usually ___ tea, but now she is drinking coffee.",
        "opts": [
          "drinks",
          "is drinking",
          "drink",
          "drinking"
        ],
        "answer": "drinks",
        "why": "«usually» — привычка → Present Simple: she drinks.",
        "hint": "Слово «usually» кричит о привычке — нужна простая форма с -s, а не «сейчас» ☕"
      },
      {
        "type": "gap",
        "q": "___ turn left here! <i style=\"opacity:.6\">(«не», запрет)</i>",
        "accept": [
          "don't",
          "do not",
          "dont"
        ],
        "model": "Don't",
        "hint": "Запрет-команда «не делай» начинается с короткого Don't перед глаголом 🚫"
      },
      {
        "type": "gap",
        "q": "Look! The baby ___ . <i style=\"opacity:.6\">(sleep, сейчас)</i>",
        "accept": [
          "is sleeping",
          "the baby is sleeping"
        ],
        "model": "is sleeping",
        "hint": "«Look!» = прямо сейчас: собери is + глагол с окончанием -ing 😴"
      },
      {
        "type": "trRE",
        "ru": "Вчера я был дома.",
        "accept": [
          "yesterday i was at home",
          "i was at home yesterday",
          "yesterday i was home",
          "i was home yesterday"
        ],
        "model": "Yesterday I was at home.",
        "hint": "«Был» — это was для «I» в прошлом; «дома» — at home 🏠"
      },
      {
        "type": "trRE",
        "ru": "Сегодня идёт дождь.",
        "accept": [
          "it is raining today",
          "it's raining today",
          "its raining today",
          "today it is raining",
          "it is raining"
        ],
        "model": "It is raining today.",
        "hint": "«Идёт дождь» по-английски — It is raining (дождь идёт прямо сейчас) 🌧️"
      },
      {
        "type": "trER",
        "en": "Where is the bank?",
        "accept": [
          "где банк",
          "где находится банк",
          "где здесь банк"
        ],
        "model": "Где банк?",
        "hint": "Спрашиваем местоположение: «Where is…?» — «Где…?» 🏦"
      },
      {
        "type": "trER",
        "en": "Yesterday I watched a film.",
        "accept": [
          "вчера я смотрел фильм",
          "вчера я посмотрел фильм",
          "я смотрел фильм вчера",
          "вчера я смотрела фильм",
          "я вчера смотрел фильм"
        ],
        "model": "Вчера я смотрел фильм.",
        "hint": "Глагол с -ed — это прошлое: watched = «смотрел» 🎬"
      },
      {
        "type": "order",
        "answer": "i like playing football",
        "accept": [
          "i like playing football"
        ],
        "hintRu": "Собери: «Я люблю играть в футбол.»",
        "hint": "После like идёт действие с окончанием -ing: like playing ⚽"
      },
      {
        "type": "order",
        "answer": "she visited her friend",
        "accept": [
          "she visited her friend"
        ],
        "hintRu": "Собери: «Она навестила подругу.» (в прошлом)",
        "hint": "Правильный глагол в прошлом получает -ed: visit → visited 👭"
      },
      {
        "type": "match",
        "q": "Соедини слово про дом с картинкой.",
        "pairs": [
          [
            "🛏️",
            "bedroom"
          ],
          [
            "🍳",
            "kitchen"
          ],
          [
            "🛁",
            "bathroom"
          ],
          [
            "🛋️",
            "sofa"
          ],
          [
            "🪟",
            "window"
          ]
        ],
        "hint": "Вспомни английские слова про дом и подбери картинку 🏠"
      },
      {
        "type": "describe",
        "prompt": "Расскажи о себе (2–3 предложения): как тебя зовут, откуда ты и сколько тебе лет. Используй My name is…, I am from…, I am … years old.",
        "keywords": [
          "my name",
          "i am",
          "from",
          "years old",
          "name is",
          "hello",
          "hi",
          "have got",
          "like",
          "i live",
          "i'm"
        ],
        "minWords": 8,
        "model": "My name is Anna. I am from Poland. I am twenty years old. I have got a sister.",
        "hint": "Начни с имени, потом страна и возраст — короткими предложениями через I am / My name is 🙂"
      }
    ]
  }
};;

/* ===== helpers ===== */
