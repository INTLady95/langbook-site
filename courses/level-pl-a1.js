/* Polish A1 — level config, 30-day plan (COURSE) and 4 EXAMS. Complete.
   Data only: the shared renderer lives in engine.js. */
window.LEVEL = {
  code:'A1',
  course:'pl-a1',
  pkey:'langbook-pl-a1-progress',
  preview:false,
  finalNote:'Месяц назад ты учил(а) слово jestem — а сегодня рассказываешь о себе, о доме, о вчерашнем дне и о планах. Już mówisz po polsku! Polski A1 — за плечами. Горжусь тобой 💛',
  speech:'pl-PL',
  langPo:'по-польски',
  langNa:'польский',
  langAdj:'польское',
  phIn:'po polsku…'
};

const COURSE = [
  {wn:'01', wt:'Кто я: być, род, приветствия', days:[
    {n:1,t:'Знакомство',p:'Dzień dobry!'},
    {n:2,t:'Откуда ты',p:'Skąd jesteś?'},
    {n:3,t:'Он, она, оно',p:'On, ona, ono'},
    {n:4,t:'Этот, эта, это',p:'Ten, ta, to'},
    {n:5,t:'Числа и возраст',p:'Liczby i wiek'},
    {n:6,t:'Множественное число',p:'Liczba mnoga'},
    {n:7,t:'Повторение недели 1',p:'Powtórka 1'}
  ]},
  {wn:'02', wt:'Мир вокруг: mieć, семья, первые падежи', days:[
    {n:8,t:'У меня есть',p:'Mieć + biernik'},
    {n:9,t:'Моя семья',p:'Moja rodzina'},
    {n:10,t:'У меня нет',p:'Nie mam + dopełniacz'},
    {n:11,t:'Где?',p:'Gdzie? W / na'},
    {n:12,t:'Профессии',p:'Zawody'},
    {n:13,t:'Хочу и надо',p:'Chcieć, móc, musieć'},
    {n:14,t:'Повторение недели 2',p:'Powtórka 2'}
  ]},
  {wn:'03', wt:'Настоящее время и мой день', days:[
    {n:15,t:'Настоящее: -am/-asz',p:'Czasowniki I grupy'},
    {n:16,t:'-ę/-esz, -ę/-isz',p:'II i III grupa'},
    {n:17,t:'Мой день',p:'Mój dzień'},
    {n:18,t:'Как часто?',p:'Jak często?'},
    {n:19,t:'Который час',p:'Która godzina?'},
    {n:20,t:'Мне нравится',p:'Podobać się'},
    {n:21,t:'Повторение недели 3',p:'Powtórka 3'}
  ]},
  {wn:'04', wt:'Дом, город, планы и первый шаг в прошлое', days:[
    {n:22,t:'Мой дом',p:'Mój dom'},
    {n:23,t:'Где это находится',p:'Gdzie to jest?'},
    {n:24,t:'В городе',p:'W mieście'},
    {n:25,t:'В ресторане',p:'W restauracji'},
    {n:26,t:'Одежда и покупки',p:'Zakupy i ubrania'},
    {n:27,t:'Погода',p:'Pogoda'},
    {n:28,t:'Планы',p:'Plany na przyszłość'},
    {n:29,t:'Что я делал(а) вчера',p:'Co robiłem wczoraj'},
    {n:30,t:'Рассказ о себе',p:'Opowiadam o sobie'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя за плечами — проверим себя. 25 заданий по всему, что мы прошли: приветствия и знакомство, глагол być, три рода и ten/ta/to, числа и возраст, множественное число. Не торопись. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Приветствия: <b>Dzień dobry</b> · Dobry wieczór · <b>Dobranoc</b> — только на прощание · Cześć · Do widzenia",
      "<b>być:</b> ja jestem · ty jesteś · on/ona/ono jest · my jesteśmy · wy jesteście · oni/one są",
      "Знакомство: <b>Mam na imię…</b> · Skąd jesteś? — Jestem z… · вежливо: <b>Skąd pan/pani jest?</b>",
      "Род — по последней букве: <b>dom</b> (м.) · <b>kawa</b> (ж.!) · <b>okno</b> (ср.) · dobry / dobra / dobre",
      "Указатели: <b>ten / ta / to</b> · но <b>To jest…</b> не меняется никогда · Co to jest? · Kto to jest?",
      "Числа и возраст: <b>Mam dwadzieścia lat</b> · 1 rok · 2–4 lata · 5+ lat · ловушка: <b>21 lat</b>",
      "Множественное: dom → <b>domy</b> · książka → <b>książki</b> · okno → <b>okna</b> · dziecko → <b>dzieci</b> · To są…"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Ja ___ Anna.",
        "opts": [
          "jestem",
          "jesteś",
          "jest",
          "są"
        ],
        "answer": "jestem",
        "why": "ja → jestem: «я есть Анна». Связку по-польски не опускают.",
        "hint": "У być для «я» своя форма — она не совпадает ни с «ты», ни с «он» 🙂"
      },
      {
        "type": "choice",
        "q": "Вечер, ты заходишь в кафе. Как поздороваешься?",
        "opts": [
          "Dobry wieczór",
          "Dobranoc",
          "Dzień dobry",
          "Do widzenia"
        ],
        "answer": "Dobry wieczór",
        "why": "Вечером здороваются Dobry wieczór. Dobranoc — только на прощание, перед сном.",
        "hint": "Уже вечер: нужно вечернее приветствие, а не дневное и не прощание 🙂"
      },
      {
        "type": "choice",
        "q": "Anna jest z Polski. Anna jest ___.",
        "opts": [
          "Polką",
          "Polakiem",
          "Polka",
          "Polska"
        ],
        "answer": "Polką",
        "why": "После jest национальность меняет окончание, а Anna — женщина: Polką. Polska — это страна.",
        "hint": "Национальность после jest не остаётся словарной формой, и нужна женская 🙂"
      },
      {
        "type": "choice",
        "q": "Skąd pan ___? <i style='opacity:.6'>Откуда Вы? — к мужчине</i>",
        "opts": [
          "jest",
          "jesteś",
          "jesteście",
          "są"
        ],
        "answer": "jest",
        "why": "Pan — вежливое «Вы», но глагол при нём стоит в форме «он»: Skąd pan jest?",
        "hint": "Pan — слово третьего лица, поэтому глагол берёт форму как для on 🙂"
      },
      {
        "type": "choice",
        "q": "Kawa jest ___. <i style='opacity:.6'>кофе хороший</i>",
        "opts": [
          "dobra",
          "dobry",
          "dobre",
          "dobrze"
        ],
        "answer": "dobra",
        "why": "kawa по-польски женского рода → dobra (русская ловушка: у нас «кофе» мужской).",
        "hint": "Слово kawa кончается на -a, а прилагательное подстраивается под род ☕"
      },
      {
        "type": "choice",
        "q": "Gdzie jest okno? — ___ jest tam.",
        "opts": [
          "Ono",
          "On",
          "Ona",
          "Oni"
        ],
        "answer": "Ono",
        "why": "okno — средний род, значит ono.",
        "hint": "Слово кончается на -o, а у среднего рода своё местоимение 🪟"
      },
      {
        "type": "choice",
        "q": "___ dom jest duży. <i style='opacity:.6'>этот дом</i>",
        "opts": [
          "Ten",
          "Ta",
          "To",
          "Te"
        ],
        "answer": "Ten",
        "why": "dom — мужской род → ten dom.",
        "hint": "Указатель согласуется по роду, а dom кончается на согласную 🏠"
      },
      {
        "type": "choice",
        "q": "___ jest książka. <i style='opacity:.6'>это книга — просто называем предмет</i>",
        "opts": [
          "To",
          "Ta",
          "Ten",
          "Te"
        ],
        "answer": "To",
        "why": "Когда называем предмет, впереди всегда To jest — оно не меняется. Ta нужно в «Ta książka jest dobra».",
        "hint": "Тут мы называем предмет, а не показываем на конкретный — форма застывшая 🙂"
      },
      {
        "type": "choice",
        "q": "___ dwadzieścia lat. <i style='opacity:.6'>мне 20 лет</i>",
        "opts": [
          "Mam",
          "Jestem",
          "Masz",
          "Ma"
        ],
        "answer": "Mam",
        "why": "Возраст по-польски «имеют»: Mam dwadzieścia lat (а не Jestem).",
        "hint": "Про возраст поляки говорят глаголом «иметь», и нужна форма для «я» 🎂"
      },
      {
        "type": "choice",
        "q": "jedna książka → trzy ___",
        "opts": [
          "książki",
          "książky",
          "książka",
          "książkę"
        ],
        "answer": "książki",
        "why": "После k польский никогда не пишет y: książka → książki.",
        "hint": "Множественное от слова на -ka: смотри, какая гласная может стоять после k 📚"
      },
      {
        "type": "gap",
        "q": "dziesięć, jedenaście, dwanaście, ___ <i style='opacity:.6'>13</i>",
        "accept": [
          "trzynaście",
          "trzynascie"
        ],
        "model": "trzynaście",
        "hint": "После двенадцати — тринадцать; наше «-надцать» здесь звучит как -naście 🔢"
      },
      {
        "type": "gap",
        "q": "Mam dwadzieścia jeden ___. <i style='opacity:.6'>мне 21 год</i>",
        "accept": [
          "lat"
        ],
        "model": "lat",
        "hint": "Тут польский расходится с русским: после «двадцать один» идёт не rok 🎂"
      },
      {
        "type": "gap",
        "q": "Jestem ___ Rosji. <i style='opacity:.6'>я из России</i>",
        "accept": [
          "z"
        ],
        "model": "z",
        "hint": "Между jestem и страной нужен маленький предлог «из» — всего одна буква 🙂"
      },
      {
        "type": "gap",
        "q": "jedno okno → dwa ___",
        "accept": [
          "okna"
        ],
        "model": "okna",
        "hint": "У среднего рода множественное кончается на -a, а не на -y 🪟"
      },
      {
        "type": "trRE",
        "ru": "Меня зовут Анна.",
        "accept": [
          "mam na imię anna",
          "mam na imie anna",
          "nazywam się anna",
          "nazywam sie anna"
        ],
        "model": "Mam na imię Anna.",
        "hint": "Два способа: Mam na imię… или Nazywam się… — выбери любой 🙂"
      },
      {
        "type": "trRE",
        "ru": "Мне двадцать лет.",
        "accept": [
          "mam dwadzieścia lat",
          "mam dwadziescia lat"
        ],
        "model": "Mam dwadzieścia lat.",
        "hint": "Возраст «имеют»: mam + число + слово lat 🎂"
      },
      {
        "type": "trRE",
        "ru": "Откуда ты?",
        "accept": [
          "skąd jesteś",
          "skad jestes",
          "a skąd jesteś",
          "a skad jestes"
        ],
        "model": "Skąd jesteś?",
        "hint": "Всего два слова: «откуда» + форма być для «ты» 🙂"
      },
      {
        "type": "trER",
        "en": "Kto to jest?",
        "accept": [
          "кто это",
          "кто это?",
          "кто он",
          "кто она"
        ],
        "model": "Кто это?",
        "hint": "Kto спрашивает про человека — начни перевод со слова «кто» 🙂"
      },
      {
        "type": "trER",
        "en": "To są książki.",
        "accept": [
          "это книги",
          "книги",
          "это книжки"
        ],
        "model": "Это книги.",
        "hint": "To są — «это» о нескольких предметах, а książki — множественное 📚"
      },
      {
        "type": "order",
        "answer": "jestem z polski",
        "accept": [
          "jestem z polski"
        ],
        "hintRu": "Собери: «Я из Польши.»",
        "hint": "Три слова: связка jestem + предлог «из» + страна в форме z Polski 🙂"
      },
      {
        "type": "order",
        "answer": "ta książka jest dobra",
        "accept": [
          "ta książka jest dobra"
        ],
        "hintRu": "Собери: «Эта книга хорошая.»",
        "hint": "Указатель и прилагательное берут женский род, а jest стоит между ними 📚"
      },
      {
        "type": "match",
        "q": "Соедини число с цифрой.",
        "pairs": [
          [
            "pięć",
            "5"
          ],
          [
            "dziesięć",
            "10"
          ],
          [
            "dwanaście",
            "12"
          ],
          [
            "piętnaście",
            "15"
          ],
          [
            "dwadzieścia",
            "20"
          ]
        ],
        "hint": "Проговори каждое число вслух — знакомый корень подскажет цифру 🔢"
      },
      {
        "type": "match",
        "q": "Соедини приветствие с переводом.",
        "pairs": [
          [
            "Dzień dobry",
            "добрый день"
          ],
          [
            "Dobry wieczór",
            "добрый вечер"
          ],
          [
            "Dobranoc",
            "спокойной ночи"
          ],
          [
            "Cześć",
            "привет / пока"
          ],
          [
            "Do widzenia",
            "до свидания"
          ]
        ],
        "hint": "Помни: Dobranoc — не приветствие, а слова на прощание 🌙"
      },
      {
        "type": "describe",
        "prompt": "Представься по-польски (1–2 предложения): поздоровайся, скажи, как тебя зовут и откуда ты.",
        "keywords": [
          "dzień dobry",
          "dzien dobry",
          "cześć",
          "czesc",
          "mam na imię",
          "mam na imie",
          "nazywam się",
          "nazywam sie",
          "jestem z",
          "jestem"
        ],
        "minWords": 6,
        "model": "Dzień dobry! Mam na imię Anna. Jestem z Rosji.",
        "hint": "Три коротких шага: приветствие → Mam na imię + имя → Jestem z + страна 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи (1–2 предложения): сколько тебе лет и покажи на предмет рядом через to jest / ten / ta.",
        "keywords": [
          "mam",
          "lat",
          "lata",
          "to jest",
          "ten",
          "ta",
          "dom",
          "książka",
          "ksiazka",
          "okno"
        ],
        "minWords": 6,
        "model": "Mam dwadzieścia lat. To jest książka. Ta książka jest dobra.",
        "hint": "Сначала Mam… lat, потом назови предмет через To jest… и добавь ten/ta по роду 🙂"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя готова. 25 заданий: mieć и biernik, семья и притяжательные, nie mam с dopełniaczem, w и na, профессии в narzędniku, а ещё chcę, muszę, mogę. Наберёшь 80% — откроется Неделя 3. 💛",
    "review": [
      "<b>mieć:</b> mam · masz · ma · mamy · macie · mają",
      "Biernik после mam: kawa → <b>kawę</b> · brat → <b>brata</b> (живое) · dom → <b>dom</b> (неживое не меняется)",
      "Семья: <b>rodzina</b> = семья, а не родина · rodzice · rodzeństwo · córka · babcia / dziadek",
      "Притяжательные: <b>mój / moja / moje</b> · twój · nasz · <b>jego / jej / ich</b> — не меняются",
      "После nie — dopełniacz: <b>Nie mam kawy</b> · Nie mam czasu · <b>Nie ma chleba</b> · Nie ma za co",
      "Где: w domu · w szkole · w sklepie · ловушки: <b>w pracy</b> · <b>na uniwersytecie</b> · na poczcie",
      "Профессия — narzędnik: Jestem <b>lekarzem</b> / <b>lekarką</b> · Kim jesteś z zawodu? · chcę · muszę · mogę"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Mam ___. <i style='opacity:.6'>кофе</i>",
        "opts": [
          "kawę",
          "kawa",
          "kawy",
          "kawą"
        ],
        "answer": "kawę",
        "why": "После mam — biernik: kawa → kawę.",
        "hint": "У женских слов на -a после mam окончание становится носовым ☕"
      },
      {
        "type": "choice",
        "q": "Mam ___. <i style='opacity:.6'>брат</i>",
        "opts": [
          "brata",
          "brat",
          "bratem",
          "bracie"
        ],
        "answer": "brata",
        "why": "Живое мужского рода после mam прибавляет -a: Mam brata.",
        "hint": "Брат — живой, а живые в bierniku получают лишнюю букву 🙂"
      },
      {
        "type": "choice",
        "q": "Mam ___. <i style='opacity:.6'>машина</i>",
        "opts": [
          "samochód",
          "samochoda",
          "samochodu",
          "samochodem"
        ],
        "answer": "samochód",
        "why": "Неживое мужского рода после mam не меняется: Mam samochód.",
        "hint": "Машина неживая — форма остаётся такой же, как в словаре 🚗"
      },
      {
        "type": "choice",
        "q": "To jest ___ siostra. <i style='opacity:.6'>моя</i>",
        "opts": [
          "moja",
          "mój",
          "moje",
          "moi"
        ],
        "answer": "moja",
        "why": "siostra — женский род → moja siostra.",
        "hint": "«Мой» согласуется по роду, а siostra кончается на -a 🙂"
      },
      {
        "type": "choice",
        "q": "Anna ma brata. To jest ___ brat.",
        "opts": [
          "jej",
          "jego",
          "ich",
          "nasz"
        ],
        "answer": "jej",
        "why": "Брат Анны — значит «её»: jej. Эта форма никогда не меняется.",
        "hint": "Речь о брате Анны — нужна форма «её» 🙂"
      },
      {
        "type": "choice",
        "q": "Nie mam ___. <i style='opacity:.6'>кофе</i>",
        "opts": [
          "kawy",
          "kawę",
          "kawa",
          "kawą"
        ],
        "answer": "kawy",
        "why": "После nie — dopełniacz: Nie mam kawy.",
        "hint": "Отрицание тянет за собой другую форму, не ту, что после mam ☕"
      },
      {
        "type": "choice",
        "q": "Anna jest ___. <i style='opacity:.6'>на работе</i>",
        "opts": [
          "w pracy",
          "na pracy",
          "w praca",
          "na pracę"
        ],
        "answer": "w pracy",
        "why": "Русское «на работе» по-польски — w pracy: тут языки расходятся.",
        "hint": "Русское «на» здесь обманывает: поляки берут другой предлог 💼"
      },
      {
        "type": "choice",
        "q": "Tomek jest ___. <i style='opacity:.6'>в университете</i>",
        "opts": [
          "na uniwersytecie",
          "w uniwersytecie",
          "na uniwersytet",
          "w uniwersytet"
        ],
        "answer": "na uniwersytecie",
        "why": "Университет — обратный случай: по-русски «в», по-польски na.",
        "hint": "Здесь всё наоборот: русское «в» превращается в польское na 🎓"
      },
      {
        "type": "choice",
        "q": "Moja mama jest ___. <i style='opacity:.6'>врач</i>",
        "opts": [
          "lekarką",
          "lekarka",
          "lekarzem",
          "lekarz"
        ],
        "answer": "lekarką",
        "why": "Профессия после jest — narzędnik; для женщины lekarka → lekarką.",
        "hint": "Профессия после jest меняет окончание, и мама — женщина 🩺"
      },
      {
        "type": "choice",
        "q": "___ pracować. <i style='opacity:.6'>мне надо работать</i>",
        "opts": [
          "Muszę",
          "Chcę",
          "Mogę",
          "Musisz"
        ],
        "answer": "Muszę",
        "why": "«Надо» — это musieć, форма для «я»: muszę.",
        "hint": "Из трёх модальных возьми тот, что про необходимость, и в форме для «я» 🙂"
      },
      {
        "type": "gap",
        "q": "Czy ___ czas? <i style='opacity:.6'>у тебя есть время?</i>",
        "accept": [
          "masz"
        ],
        "model": "masz",
        "hint": "«У тебя есть» — это mieć в форме для «ты» ⏰"
      },
      {
        "type": "gap",
        "q": "Nie mam ___. <i style='opacity:.6'>сестра</i>",
        "accept": [
          "siostry"
        ],
        "model": "siostry",
        "hint": "После nie mam у женских слов на -a появляется -y 🙂"
      },
      {
        "type": "gap",
        "q": "Jestem w ___. <i style='opacity:.6'>дома</i>",
        "accept": [
          "domu"
        ],
        "model": "domu",
        "hint": "У слова dom здесь особая форма — её просто запоминают 🏠"
      },
      {
        "type": "gap",
        "q": "Czy ___ prosić o kawę? <i style='opacity:.6'>можно мне…</i>",
        "accept": [
          "mogę",
          "moge"
        ],
        "model": "mogę",
        "hint": "Вежливая просьба начинается с móc в форме для «я» ☕"
      },
      {
        "type": "trRE",
        "ru": "У меня есть брат и сестра.",
        "accept": [
          "mam brata i siostrę",
          "mam brata i siostre"
        ],
        "model": "Mam brata i siostrę.",
        "hint": "Оба слова после mam идут в bierniku: brat → brata, siostra → siostrę 🙂"
      },
      {
        "type": "trRE",
        "ru": "У меня нет времени.",
        "accept": [
          "nie mam czasu"
        ],
        "model": "Nie mam czasu.",
        "hint": "Отрицание плюс dopełniacz: czas превращается в czasu ⏰"
      },
      {
        "type": "trRE",
        "ru": "Я на работе.",
        "accept": [
          "jestem w pracy"
        ],
        "model": "Jestem w pracy.",
        "hint": "Связку не опускай, а «на работе» по-польски — с предлогом w 💼"
      },
      {
        "type": "trER",
        "en": "Nie ma za co.",
        "accept": [
          "не за что",
          "не за что!",
          "пожалуйста"
        ],
        "model": "Не за что.",
        "hint": "Так отвечают на dziękuję 🙂"
      },
      {
        "type": "trER",
        "en": "Kim jesteś z zawodu?",
        "accept": [
          "кто ты по профессии",
          "кто ты по профессии?",
          "кем ты работаешь",
          "кто ты по специальности"
        ],
        "model": "Кто ты по профессии?",
        "hint": "zawód — это профессия; вопрос про то, кем человек работает 🙂"
      },
      {
        "type": "order",
        "answer": "jestem lekarką w szpitalu",
        "accept": [
          "jestem lekarką w szpitalu"
        ],
        "hintRu": "Собери: «Я врач в больнице.» (говорит женщина)",
        "hint": "Профессия идёт в narzędniku, а место — с предлогом w 🏥"
      },
      {
        "type": "order",
        "answer": "nie chcę pić kawy",
        "accept": [
          "nie chcę pić kawy"
        ],
        "hintRu": "Собери: «Не хочу пить кофе.»",
        "hint": "Nie стоит перед chcę, а после отрицания kawa превращается в kawy ☕"
      },
      {
        "type": "match",
        "q": "Соедини слово о семье с переводом.",
        "pairs": [
          [
            "rodzina",
            "семья"
          ],
          [
            "córka",
            "дочь"
          ],
          [
            "dziadek",
            "дедушка"
          ],
          [
            "rodzice",
            "родители"
          ],
          [
            "rodzeństwo",
            "братья и сёстры"
          ]
        ],
        "hint": "Осторожно с rodzina — это не «родина» 👨‍👩‍👧"
      },
      {
        "type": "match",
        "q": "Соедини «где» с переводом.",
        "pairs": [
          [
            "w szkole",
            "в школе"
          ],
          [
            "w sklepie",
            "в магазине"
          ],
          [
            "w pracy",
            "на работе"
          ],
          [
            "na poczcie",
            "на почте"
          ],
          [
            "na uniwersytecie",
            "в университете"
          ]
        ],
        "hint": "Два места здесь расходятся с русским — вспомни, какие 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи о своей семье (1–2 предложения): кто у тебя есть и как их зовут. Используй mam и mój / moja.",
        "keywords": [
          "mam",
          "brata",
          "siostrę",
          "siostre",
          "moja",
          "mój",
          "moj",
          "ma na imię",
          "ma na imie",
          "dzieci",
          "rodzeństwo",
          "rodzenstwo"
        ],
        "minWords": 6,
        "model": "Mam brata i siostrę. Moja siostra ma na imię Ewa.",
        "hint": "После mam слова меняют окончание: brata, siostrę — а дальше mój / moja 🙂"
      },
      {
        "type": "describe",
        "prompt": "Напиши о себе (1–2 предложения): кто ты по профессии и где ты сейчас. Используй jestem + профессия и w / na.",
        "keywords": [
          "jestem",
          "studentem",
          "studentką",
          "studentka",
          "lekarzem",
          "lekarką",
          "nauczycielem",
          "nauczycielką",
          "w domu",
          "w pracy",
          "w szkole",
          "na uniwersytecie"
        ],
        "minWords": 6,
        "model": "Nazywam się Anna. Jestem nauczycielką. Jestem w szkole.",
        "hint": "Профессия после jestem берёт -em или -ą, а место — предлог w или na 🙂"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя позади. 25 заданий: три группы настоящего времени, się и мой день, частота и дни недели, часы и «мне нравится». Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Три группы: I <b>-am / -asz</b> (mieszkam, czytam) · II <b>-ę / -esz</b> (piszę, pracuję) · III <b>-ę / -isz</b> (robię, mówię)",
      "<b>iść</b> (idę, idziesz) — пешком · <b>jechać</b> (jadę, jedziesz) — на транспорте · ловушка: <b>słucham muzyki</b>",
      "<b>się</b> — отдельное слово: budzę się · myję się · <b>uczę się polskiego</b> · <b>Jak się nazywasz?</b> · но wstaję — без się",
      "Частота: zawsze · zwykle · często · czasem · rzadko · <b>nigdy nie…</b> — двойное отрицание тут норма",
      "Дни: w poniedziałek · <b>we wtorek</b> · w środę · w sobotę · w niedzielę · <b>tydzień</b> = неделя",
      "Часы: Jest <b>trzecia</b> · <b>o siódmej</b> · wpół do ósmej (7:30) · <b>dziesięć po trzeciej</b> = 3:10",
      "<b>Lubię kawę</b> (biernik) · <b>Nie lubię kawy</b> (dopełniacz) · Podoba mi się… / Podobają mi się…"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Ja ___ w Polsce. <i style='opacity:.6'>живу</i>",
        "opts": [
          "mieszkam",
          "mieszka",
          "mieszkasz",
          "mieszkać"
        ],
        "answer": "mieszkam",
        "why": "Первая группа, форма для «я»: mieszkam.",
        "hint": "У глаголов на -ać форма для «я» кончается на -am 🙂"
      },
      {
        "type": "choice",
        "q": "Słucham ___. <i style='opacity:.6'>музыку</i>",
        "opts": [
          "muzyki",
          "muzykę",
          "muzyka",
          "muzyką"
        ],
        "answer": "muzyki",
        "why": "słuchać требует dopełniacz: słucham muzyki — русское «слушаю музыку» тут обманывает.",
        "hint": "Этот глагол требует не ту форму, что просится по-русски 🎵"
      },
      {
        "type": "choice",
        "q": "Ja ___ list. <i style='opacity:.6'>пишу письмо</i>",
        "opts": [
          "piszę",
          "pisam",
          "pisze",
          "piszesz"
        ],
        "answer": "piszę",
        "why": "pisać — вторая группа: piszę, piszesz (никакого «pisam»).",
        "hint": "Этот глагол не из первой группы: у него форма для «я» на -ę, и корень меняется ✍️"
      },
      {
        "type": "choice",
        "q": "Co ___? <i style='opacity:.6'>что ты делаешь?</i>",
        "opts": [
          "robisz",
          "robiesz",
          "robię",
          "robić"
        ],
        "answer": "robisz",
        "why": "robić — третья группа: robię, robisz.",
        "hint": "У третьей группы для «ты» окончание -isz, а не -esz 🙂"
      },
      {
        "type": "choice",
        "q": "Jutro ___ do Warszawy. <i style='opacity:.6'>еду на поезде</i>",
        "opts": [
          "jadę",
          "idę",
          "jedę",
          "idziesz"
        ],
        "answer": "jadę",
        "why": "На транспорте — jechać: jadę. Idę означало бы «иду пешком».",
        "hint": "Пешком или на транспорте? Для транспорта у польского свой глагол 🚆"
      },
      {
        "type": "choice",
        "q": "Какой вариант верный?",
        "opts": [
          "Jak się nazywasz?",
          "Jak nazywasz się?",
          "Się jak nazywasz?",
          "Jak nazywasz sięsz?"
        ],
        "answer": "Jak się nazywasz?",
        "why": "После вопросительного слова się уходит вперёд: Jak się nazywasz?",
        "hint": "После вопросительного слова маленькое się перепрыгивает перед глаголом 🙂"
      },
      {
        "type": "choice",
        "q": "___ nie pracuję w niedzielę. <i style='opacity:.6'>никогда</i>",
        "opts": [
          "Nigdy",
          "Zawsze",
          "Czasem",
          "Rzadko"
        ],
        "answer": "Nigdy",
        "why": "«Никогда не» — nigdy nie…: двойное отрицание здесь норма, как в русском.",
        "hint": "Рядом уже стоит nie — значит нужно слово «никогда» 🚫"
      },
      {
        "type": "choice",
        "q": "___ wtorek uczę się polskiego. <i style='opacity:.6'>во вторник</i>",
        "opts": [
          "We",
          "W",
          "Na",
          "Do"
        ],
        "answer": "We",
        "why": "Перед wtorek предлог удлиняется: we wtorek — совсем как русское «во вторник».",
        "hint": "Перед этим днём предлог получает лишнюю гласную, как и по-русски 📅"
      },
      {
        "type": "choice",
        "q": "Jest ___. <i style='opacity:.6'>3:00</i>",
        "opts": [
          "trzecia",
          "trzy",
          "trzeci",
          "trzeciej"
        ],
        "answer": "trzecia",
        "why": "Часы называют порядковым словом в женском роде: Jest trzecia (godzina).",
        "hint": "Час называют не числом «три», а порядковым словом — и в женском роде 🕒"
      },
      {
        "type": "choice",
        "q": "___ mi się te książki. <i style='opacity:.6'>мне нравятся эти книги</i>",
        "opts": [
          "Podobają",
          "Podoba",
          "Podobam",
          "Lubię"
        ],
        "answer": "Podobają",
        "why": "Книг много → podobają mi się.",
        "hint": "Глагол подстраивается под то, что нравится: книг несколько 📚"
      },
      {
        "type": "gap",
        "q": "Budzę się o ___. <i style='opacity:.6'>в семь</i>",
        "accept": [
          "siódmej",
          "siodmej"
        ],
        "model": "siódmej",
        "hint": "После o название часа получает окончание -ej 🕖"
      },
      {
        "type": "gap",
        "q": "Nie lubię ___. <i style='opacity:.6'>кофе</i>",
        "accept": [
          "kawy"
        ],
        "model": "kawy",
        "hint": "Lubię kawę — а вот после nie нужна другая форма ☕"
      },
      {
        "type": "gap",
        "q": "Nigdy ___ pracuję w niedzielę. <i style='opacity:.6'>никогда не работаю</i>",
        "accept": [
          "nie"
        ],
        "model": "nie",
        "hint": "Даже со словом nigdy отрицание при глаголе остаётся — как в русском 🙂"
      },
      {
        "type": "gap",
        "q": "Uczę ___ polskiego. <i style='opacity:.6'>учу польский</i>",
        "accept": [
          "się",
          "sie"
        ],
        "model": "się",
        "hint": "Без этого словечка uczyć значит «учить кого-то другого» 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я говорю по-польски.",
        "accept": [
          "mówię po polsku",
          "mowie po polsku"
        ],
        "model": "Mówię po polsku.",
        "hint": "mówić — третья группа: для «я» окончание -ę 🙂"
      },
      {
        "type": "trRE",
        "ru": "Я встаю рано.",
        "accept": [
          "wstaję wcześnie",
          "wstaje wczesnie",
          "wstaję rano",
          "wstaje rano"
        ],
        "model": "Wstaję wcześnie.",
        "hint": "У глагола «вставать» się не нужно — в отличие от budzę się 🌅"
      },
      {
        "type": "trRE",
        "ru": "Мне нравится этот фильм.",
        "accept": [
          "podoba mi się ten film",
          "podoba mi sie ten film"
        ],
        "model": "Podoba mi się ten film.",
        "hint": "Порядок слово в слово как по-русски: podoba mi się + ten film 🎬"
      },
      {
        "type": "trER",
        "en": "Dziesięć po trzeciej.",
        "accept": [
          "десять минут четвёртого",
          "десять минут четвертого",
          "10 минут четвёртого",
          "10 минут четвертого",
          "3:10",
          "310",
          "три десять",
          "три часа десять минут"
        ],
        "model": "Десять минут четвёртого.",
        "hint": "Поляки называют час, который уже прошёл, а мы — тот, что идёт ⏰"
      },
      {
        "type": "trER",
        "en": "W niedzielę nigdy nie pracuję.",
        "accept": [
          "в воскресенье я никогда не работаю",
          "в воскресенье никогда не работаю",
          "я никогда не работаю в воскресенье",
          "никогда не работаю в воскресенье"
        ],
        "model": "В воскресенье я никогда не работаю.",
        "hint": "niedziela — это воскресенье, а не неделя; двойное отрицание переводится как есть 🙂"
      },
      {
        "type": "order",
        "answer": "rano zawsze piję kawę",
        "accept": [
          "rano zawsze piję kawę",
          "zawsze rano piję kawę"
        ],
        "hintRu": "Собери: «Утром я всегда пью кофе.»",
        "hint": "Сначала «когда», потом частота, потом глагол и кофе в bierniku ☕"
      },
      {
        "type": "order",
        "answer": "lubię herbatę ale nie lubię kawy",
        "accept": [
          "lubię herbatę ale nie lubię kawy"
        ],
        "hintRu": "Собери: «Я люблю чай, но не люблю кофе.»",
        "hint": "После lubię — biernik (herbatę), после nie lubię — dopełniacz (kawy) 🍵"
      },
      {
        "type": "match",
        "q": "Соедини день недели с переводом.",
        "pairs": [
          [
            "poniedziałek",
            "понедельник"
          ],
          [
            "środa",
            "среда"
          ],
          [
            "piątek",
            "пятница"
          ],
          [
            "sobota",
            "суббота"
          ],
          [
            "niedziela",
            "воскресенье"
          ]
        ],
        "hint": "Помни ловушку: niedziela — это воскресенье, а неделя — tydzień 📅"
      },
      {
        "type": "match",
        "q": "Соедини глагол с переводом.",
        "pairs": [
          [
            "mieszkać",
            "жить"
          ],
          [
            "pisać",
            "писать"
          ],
          [
            "robić",
            "делать"
          ],
          [
            "mówić",
            "говорить"
          ],
          [
            "słuchać",
            "слушать"
          ]
        ],
        "hint": "Опирайся на знакомые корни: mówić — как «молвить», pisać — «писать» 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи про своё утро (1–2 предложения): во сколько встаёшь и что делаешь. Используй budzę się, o… и najpierw / potem.",
        "keywords": [
          "budzę się",
          "budze sie",
          "wstaję",
          "wstaje",
          "o siódmej",
          "o siodmej",
          "myję się",
          "myje sie",
          "jem śniadanie",
          "najpierw",
          "potem",
          "rano"
        ],
        "minWords": 6,
        "model": "Rano budzę się o siódmej. Najpierw myję się, potem jem śniadanie.",
        "hint": "Цепочка утра: budzę się → wstaję → myję się → jem śniadanie, а время через o… 🌅"
      },
      {
        "type": "describe",
        "prompt": "Напиши, что ты любишь и как часто это делаешь (1–2 предложения). Используй lubię и zawsze / czasem / nigdy.",
        "keywords": [
          "lubię",
          "lubie",
          "nie lubię",
          "podoba mi się",
          "zawsze",
          "czasem",
          "często",
          "czesto",
          "nigdy",
          "codziennie",
          "kawę",
          "czytać"
        ],
        "minWords": 6,
        "model": "Lubię kawę. Rano zawsze piję kawę.",
        "hint": "Сначала Lubię + что (в bierniku), потом слово частоты 🙂"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен A1",
    "intro": "Это финал! 33 задания по всему уровню A1: być и mieć, род и множественное, формы после mam и nie mam, настоящее время и мой день, часы и вкусы, а ещё вся Неделя 4 — дом, город, ресторан, покупки, погода, планы и первое прошедшее. Соберись — и вперёд к грамоте A1! 🏆",
    "review": [
      "być и mieć · род и указатели <b>ten / ta / to</b> · множественное: domy · książki · okna · dzieci",
      "Числа и возраст: <b>Mam 21 lat</b> · 22 lata · jedna kawa · dwie książki",
      "Biernik: Mam <b>kawę</b>, <b>brata</b>, dom · после nie — dopełniacz: <b>Nie mam kawy</b>, Nie ma chleba",
      "Где: <b>w pracy</b>, w domu, <b>na uniwersytecie</b> · профессия: Jestem <b>lekarzem</b> / <b>lekarką</b>",
      "Три группы настоящего · <b>się</b> · частота и дни · часы: o siódmej, <b>dziesięć po trzeciej</b> = 3:10",
      "<b>Lubię kawę</b> / <b>Nie lubię kawy</b> · Podoba mi się… · Podobają mi się…",
      "Дом: W kuchni <b>jest</b> stół · W salonie <b>są</b> krzesła · W pokoju <b>nie ma</b> szafy · <b>przy stole</b>",
      "Город и ресторан: idź <b>prosto</b>, skręć w prawo · <b>Poproszę</b> zupę · chciałbym / chciałabym · цена: złoty / złote / <b>złotych</b>",
      "Погода: <b>Pada</b> deszcz · jest zimno · Планы: <b>będę</b> + инфинитив · Вчера: <b>byłem / byłam</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Вечер, ты заходишь в ресторан. Как поздороваешься?",
        "opts": [
          "Dobry wieczór",
          "Dobranoc",
          "Do widzenia",
          "Dzień dobry"
        ],
        "answer": "Dobry wieczór",
        "why": "Вечером — Dobry wieczór. Dobranoc говорят только на прощание, перед сном.",
        "hint": "Уже вечер: нужно вечернее приветствие, а не дневное и не прощание 🌆"
      },
      {
        "type": "choice",
        "q": "___ kawa jest dobra. <i style='opacity:.6'>этот кофе</i>",
        "opts": [
          "Ta",
          "Ten",
          "To",
          "Te"
        ],
        "answer": "Ta",
        "why": "kawa — женский род, и мы показываем на конкретный кофе → ta kawa.",
        "hint": "Слово kawa по-польски женского рода, а указатель согласуется с ним ☕"
      },
      {
        "type": "choice",
        "q": "Mam dwadzieścia jeden ___. <i style='opacity:.6'>мне 21 год</i>",
        "opts": [
          "lat",
          "rok",
          "lata",
          "roku"
        ],
        "answer": "lat",
        "why": "После «двадцать один» по-польски идёт lat — тут язык расходится с русским.",
        "hint": "По-русски «год», а по-польски после 21 — та же форма, что после пяти 🎂"
      },
      {
        "type": "choice",
        "q": "Mam ___. <i style='opacity:.6'>сестра</i>",
        "opts": [
          "siostrę",
          "siostra",
          "siostry",
          "siostrą"
        ],
        "answer": "siostrę",
        "why": "После mam — biernik: siostra → siostrę.",
        "hint": "После mam женские слова на -a получают носовое -ę 🙂"
      },
      {
        "type": "choice",
        "q": "Nie mam ___. <i style='opacity:.6'>время</i>",
        "opts": [
          "czasu",
          "czas",
          "czasy",
          "czasem"
        ],
        "answer": "czasu",
        "why": "После nie — dopełniacz: czas → czasu.",
        "hint": "Отрицание меняет форму слова: не czas, а другая ⏰"
      },
      {
        "type": "choice",
        "q": "Gdzie jest Anna? — ___. <i style='opacity:.6'>на работе</i>",
        "opts": [
          "W pracy",
          "Na pracy",
          "W pracę",
          "Na pracę"
        ],
        "answer": "W pracy",
        "why": "«На работе» по-польски — w pracy: русское «на» тут не годится.",
        "hint": "Русское «на» обманывает — поляки берут другой предлог 💼"
      },
      {
        "type": "choice",
        "q": "Mój brat jest ___. <i style='opacity:.6'>студент</i>",
        "opts": [
          "studentem",
          "student",
          "studentką",
          "studenta"
        ],
        "answer": "studentem",
        "why": "Профессия после jest — narzędnik; мужская форма student → studentem.",
        "hint": "После jest профессия меняет окончание, и брат — мужчина 🎓"
      },
      {
        "type": "choice",
        "q": "Anna w restauracji: ___ zupę. <i style='opacity:.6'>я хотела бы суп</i>",
        "opts": [
          "Chciałabym",
          "Chciałbym",
          "Chciałabyś",
          "Chciałbyś"
        ],
        "answer": "Chciałabym",
        "why": "Говорит женщина о себе → chciałabym (chciałbym — мужская форма, chciałabyś — «ты хотела бы»).",
        "hint": "Смотри на два признака сразу: кто говорит и о ком речь 🙂"
      },
      {
        "type": "choice",
        "q": "___ mi się te buty. <i style='opacity:.6'>мне нравятся эти ботинки</i>",
        "opts": [
          "Podobają",
          "Podoba",
          "Podobam",
          "Lubię"
        ],
        "answer": "Podobają",
        "why": "buty — множественное, значит podobają mi się.",
        "hint": "Ботинок много — глагол идёт во множественном 👟"
      },
      {
        "type": "choice",
        "q": "W kuchni ___ stołu. <i style='opacity:.6'>нет стола</i>",
        "opts": [
          "nie ma",
          "nie jest",
          "nie są",
          "nie mam"
        ],
        "answer": "nie ma",
        "why": "«Нет, отсутствует» — всегда nie ma + dopełniacz.",
        "hint": "Про отсутствие поляки говорят одной застывшей формой 🍽️"
      },
      {
        "type": "choice",
        "q": "Rodzina jest ___. <i style='opacity:.6'>за столом — сидят и едят</i>",
        "opts": [
          "przy stole",
          "za stołem",
          "pod stołem",
          "na stole"
        ],
        "answer": "przy stole",
        "why": "Русское «за столом» (сидим) — это przy stole. Za stołem значит «позади стола».",
        "hint": "Za stołem — про место позади мебели; для «сидим за столом» нужен другой предлог 🍽️"
      },
      {
        "type": "choice",
        "q": "Idź ___ i skręć w prawo. <i style='opacity:.6'>прямо</i>",
        "opts": [
          "prosto",
          "po prostu",
          "proste",
          "prosty"
        ],
        "answer": "prosto",
        "why": "prosto — «прямо». Po prostu значит «просто, всего лишь».",
        "hint": "Ложный друг: похожее слово значит «просто», а нам нужно направление ➡️"
      },
      {
        "type": "choice",
        "q": "To kosztuje pięć ___.",
        "opts": [
          "złotych",
          "złote",
          "złoty",
          "złotego"
        ],
        "answer": "złotych",
        "why": "После пяти и больше — złotych, ровно как русское «пять рублей».",
        "hint": "Работает та же математика, что с рублями: после пяти форма меняется 💰"
      },
      {
        "type": "choice",
        "q": "___ deszcz. <i style='opacity:.6'>идёт дождь</i>",
        "opts": [
          "Pada",
          "Idzie",
          "Chodzi",
          "Świeci"
        ],
        "answer": "Pada",
        "why": "По-польски дождь не «идёт», а «падает»: Pada deszcz.",
        "hint": "Дождь по-польски делает другое действие — не идёт 🌧️"
      },
      {
        "type": "gap",
        "q": "___ kawę. <i style='opacity:.6'>мне, пожалуйста, кофе</i>",
        "accept": [
          "poproszę",
          "poprosze"
        ],
        "model": "poproszę",
        "hint": "Главное слово в кафе — вежливое «попрошу» ☕"
      },
      {
        "type": "gap",
        "q": "Jutro ___ pracować. <i style='opacity:.6'>я буду работать</i>",
        "accept": [
          "będę",
          "bede"
        ],
        "model": "będę",
        "hint": "Будущее — форма być для «я» плюс глагол в начальной форме 📅"
      },
      {
        "type": "gap",
        "q": "Wczoraj ___ w domu. <i style='opacity:.6'>я была дома — говорит женщина</i>",
        "accept": [
          "byłam",
          "bylam"
        ],
        "model": "byłam",
        "hint": "Прошедшее показывает род говорящего: у женщины на конце -am 🏠"
      },
      {
        "type": "gap",
        "q": "Pracuję od dziewiątej do ___. <i style='opacity:.6'>до пяти</i>",
        "accept": [
          "piątej",
          "piatej"
        ],
        "model": "piątej",
        "hint": "После od и do название часа получает то же окончание -ej 🕔"
      },
      {
        "type": "gap",
        "q": "Nigdy ___ oglądam telewizji. <i style='opacity:.6'>никогда не смотрю</i>",
        "accept": [
          "nie"
        ],
        "model": "nie",
        "hint": "Двойное отрицание — норма: есть nigdy, и при глаголе ещё одно словечко 🙂"
      },
      {
        "type": "trRE",
        "ru": "Сколько тебе лет?",
        "accept": [
          "ile masz lat",
          "a ile masz lat"
        ],
        "model": "Ile masz lat?",
        "hint": "Вопрос про возраст строится на mieć: «сколько» + форма для «ты» + lat 🎂"
      },
      {
        "type": "trRE",
        "ru": "Мне тридцать лет.",
        "accept": [
          "mam trzydzieści lat",
          "mam trzydziesci lat"
        ],
        "model": "Mam trzydzieści lat.",
        "hint": "Возраст «имеют»: mam + число + lat 🎂"
      },
      {
        "type": "trRE",
        "ru": "Я живу в Варшаве.",
        "accept": [
          "mieszkam w warszawie"
        ],
        "model": "Mieszkam w Warszawie.",
        "hint": "Первая группа: mieszkam, а Warszawa после w меняется на Warszawie 🏙️"
      },
      {
        "type": "trRE",
        "ru": "Я не люблю кофе.",
        "accept": [
          "nie lubię kawy",
          "nie lubie kawy"
        ],
        "model": "Nie lubię kawy.",
        "hint": "После отрицания kawa превращается в kawy ☕"
      },
      {
        "type": "trER",
        "en": "Co robiłaś wczoraj?",
        "accept": [
          "что ты делала вчера",
          "что ты вчера делала",
          "что ты делала вчера?"
        ],
        "model": "Что ты делала вчера?",
        "hint": "Форма robiłaś обращена к женщине — переводи в женском роде 🙂"
      },
      {
        "type": "trER",
        "en": "Rachunek poproszę.",
        "accept": [
          "счёт пожалуйста",
          "счет пожалуйста",
          "мне пожалуйста счёт",
          "счёт",
          "счет"
        ],
        "model": "Счёт, пожалуйста.",
        "hint": "Так просят в конце ужина 🍽️"
      },
      {
        "type": "trER",
        "en": "W pokoju jest dywan.",
        "accept": [
          "в комнате есть ковёр",
          "в комнате ковёр",
          "в комнате есть ковер",
          "в комнате ковер"
        ],
        "model": "В комнате есть ковёр.",
        "hint": "dywan — ложный друг: это вовсе не диван 🧶"
      },
      {
        "type": "order",
        "answer": "codziennie uczę się polskiego",
        "accept": [
          "codziennie uczę się polskiego",
          "uczę się polskiego codziennie"
        ],
        "hintRu": "Собери: «Каждый день я учу польский.»",
        "hint": "У uczyć обязательно się, а «польский» после него — polskiego 📚"
      },
      {
        "type": "order",
        "answer": "wczoraj byłam w restauracji",
        "accept": [
          "wczoraj byłam w restauracji",
          "byłam wczoraj w restauracji"
        ],
        "hintRu": "Собери: «Вчера я была в ресторане.» (говорит женщина)",
        "hint": "Прошедшее у женщины — byłam, а место идёт с предлогом w 🍽️"
      },
      {
        "type": "order",
        "answer": "kot jest pod stołem",
        "accept": [
          "kot jest pod stołem"
        ],
        "hintRu": "Собери: «Кот под столом.»",
        "hint": "После pod слово меняет окончание: stół → stołem 🐈"
      },
      {
        "type": "match",
        "q": "Соедини польское слово с переводом — тут собрались главные ловушки уровня.",
        "pairs": [
          [
            "dywan",
            "ковёр"
          ],
          [
            "kanapa",
            "диван"
          ],
          [
            "pierogi",
            "вареники"
          ],
          [
            "miasto",
            "город"
          ],
          [
            "rodzina",
            "семья"
          ]
        ],
        "hint": "Все пять слов похожи на русские — и все пять значат не то, что кажется 🙃"
      },
      {
        "type": "match",
        "q": "Соедини с переводом (погода и время года).",
        "pairs": [
          [
            "pada śnieg",
            "идёт снег"
          ],
          [
            "świeci słońce",
            "светит солнце"
          ],
          [
            "jest gorąco",
            "жарко"
          ],
          [
            "zimą",
            "зимой"
          ],
          [
            "latem",
            "летом"
          ]
        ],
        "hint": "Погода по-польски безличная: jest… или pada… ☀️"
      },
      {
        "type": "describe",
        "prompt": "Опиши свой дом (2–3 предложения): какие комнаты есть и что где стоит. Используй jest / są / nie ma и предлоги места.",
        "keywords": [
          "w kuchni",
          "w salonie",
          "w pokoju",
          "jest",
          "są",
          "nie ma",
          "stół",
          "kanapa",
          "łóżko",
          "obok",
          "pod",
          "przy",
          "szafa"
        ],
        "minWords": 8,
        "model": "W moim mieszkaniu jest kuchnia i salon. W salonie jest kanapa, a obok jest lampa. W kuchni nie ma telewizora.",
        "hint": "Что есть — jest / są, чего нет — nie ma + dopełniacz, а где именно — obok, pod, przy 🏠"
      },
      {
        "type": "describe",
        "prompt": "Расскажи о себе (2–3 предложения): как тебя зовут, откуда ты, сколько тебе лет, что любишь и что будешь делать завтра.",
        "keywords": [
          "mam na imię",
          "mam na imie",
          "jestem z",
          "mieszkam",
          "mam",
          "lat",
          "lubię",
          "lubie",
          "podoba mi się",
          "jutro",
          "będę",
          "bede"
        ],
        "minWords": 8,
        "model": "Mam na imię Anna. Jestem z Rosji i mieszkam w Krakowie. Mam trzydzieści lat. Lubię pierogi. Jutro będę pracować.",
        "hint": "Собери всё вместе: Mam na imię… → Jestem z… → Mam… lat → Lubię… → Jutro będę… 💛"
      }
    ]
  }
};
