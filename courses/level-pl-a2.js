/* Polish A2 — level config, 30-day plan (COURSE) and 4 EXAMS.
   Data only: the shared renderer lives in engine.js.
   Complete: 30 days + 4 exams. */
window.LEVEL = {
  code:'A2',
  course:'pl-a2',
  pkey:'langbook-pl-a2-progress',
  preview:false,
  finalNote:'Месяц назад ты знал(а) одно лёгкое прошедшее время — а сегодня рассказываешь по-польски свою историю: что было, что есть и что будет дальше. Даже rodzaj męskoosobowy сдался. Polski A2 — за плечами. Горжусь тобой 💛',
  speech:'pl-PL',
  langPo:'по-польски',
  langNa:'польский',
  langAdj:'польское',
  phIn:'po polsku…'
};

const COURSE = [
  {wn:'01', wt:'Прошедшее время целиком и вид глагола', days:[
    {n:1,t:'Снова вместе: что было летом',p:'Co robiłeś? Co robiłaś?'},
    {n:2,t:'Мы были, они были',p:'Byliśmy, byłyśmy'},
    {n:3,t:'Неправильное прошлое',p:'Szedłem, mogłem, jadłem'},
    {n:4,t:'Делать или сделать',p:'Aspekt: robić — zrobić'},
    {n:5,t:'Делал или сделал',p:'Aspekt w czasie przeszłym'},
    {n:6,t:'Мой вчерашний день',p:'Opowiadam o wczoraj'},
    {n:7,t:'Повторение недели 1',p:'Powtórka 1'}
  ]},
  {wn:'02', wt:'Будущее двумя способами и падежи вглубь', days:[
    {n:8,t:'Буду делать',p:'Czas przyszły złożony'},
    {n:9,t:'Сделаю',p:'Czas przyszły prosty'},
    {n:10,t:'Dopełniacz везде',p:'Dopełniacz jest wszędzie'},
    {n:11,t:'Кому? Чему?',p:'Celownik'},
    {n:12,t:'Мама! Аня!',p:'Wołacz i zwroty'},
    {n:13,t:'Какое сегодня число',p:'Który jest dzisiaj?'},
    {n:14,t:'Повторение недели 2',p:'Powtórka 2'}
  ]},
  {wn:'03', wt:'Сравниваю, двигаюсь, лечусь, приказываю', days:[
    {n:15,t:'Лучше и хуже',p:'Stopień wyższy'},
    {n:16,t:'Самый-самый',p:'Stopień najwyższy'},
    {n:17,t:'Иду или хожу',p:'Iść — chodzić'},
    {n:18,t:'У врача',p:'U lekarza'},
    {n:19,t:'Сделай! Не делай!',p:'Tryb rozkazujący'},
    {n:20,t:'Двое мужчин, две женщины',p:'Rodzaj męskoosobowy'},
    {n:21,t:'Повторение недели 3',p:'Powtórka 3'}
  ]},
  {wn:'04', wt:'Вежливость, мнения, работа и большой рассказ', days:[
    {n:22,t:'Я бы хотел',p:'Tryb przypuszczający'},
    {n:23,t:'Думаю, что…',p:'Wyrażanie opinii'},
    {n:24,t:'Учёба',p:'Edukacja'},
    {n:25,t:'Работа',p:'Praca'},
    {n:26,t:'Знаю или умею',p:'Znać, wiedzieć, umieć'},
    {n:27,t:'Путешествие',p:'Podróż'},
    {n:28,t:'Мои мечты и планы',p:'Marzenia i plany'},
    {n:29,t:'Большой рассказ',p:'Moja historia'},
    {n:30,t:'Кто я теперь',p:'Kim jestem teraz'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя A2 позади — и она была большая. 25 заданий: прошедшее время по родам и числам, byli и były, неправильные szedł · mógł · jadł, вид глагола и связный рассказ о вчерашнем дне. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Прошедшее ед. ч.: <b>byłem / byłam</b> · byłeś / byłaś · <b>był / była / było</b> · вежливо: <b>Co pan robił? Co pani robiła?</b>",
      "Мн. ч.: <b>byliśmy</b> (есть мужчина) / <b>byłyśmy</b> (только женщины) · byliście / byłyście · <b>oni byli / one były</b> · <b>dzieci były</b>",
      "Неправильные: iść → <b>szedłem / szłam</b> · móc → <b>mogłem</b>, но on <b>mógł</b> · jeść → jadłem, oni <b>jedli</b> · mieć → <b>mieli</b> · chcieć → <b>chcieli</b>",
      "Вид: <b>robić / zrobić</b> · pisać / <b>napisać</b> · czytać / <b>przeczytać</b> · kupować / <b>kupić</b> · у совершенного нет настоящего: <b>zrobię</b> = «сделаю»",
      "Вид в прошедшем: <b>cały dzień · długo · często</b> → pisałem · <b>już · w końcu · wreszcie</b> → napisałem",
      "Каркас дня: rano · po południu · wieczorem · <b>w nocy</b> · <b>najpierw → potem → później → w końcu</b>",
      "Причина и следствие: …, <b>bo</b>… · …, <b>dlatego</b>… · …, <b>więc</b>… · Nie było autobusu, <b>więc</b> szłam pieszo"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Anna o sobie: Latem ___ nad morzem. <i style='opacity:.6'>летом я была на море</i>",
        "opts": [
          "byłam",
          "byłem",
          "była",
          "byłaś"
        ],
        "answer": "byłam",
        "why": "Форма зависит от говорящего: Анна о себе — byłam. Byłem сказал бы мужчина, była — это «она была», byłaś — «ты была».",
        "hint": "Говорит женщина и говорит о себе — оба признака сразу 🌊"
      },
      {
        "type": "choice",
        "q": "Gdzie ___ latem? <i style='opacity:.6'>где ты был? — на «ты», к мужчине</i>",
        "opts": [
          "był",
          "byłaś",
          "byłeś",
          "byliście"
        ],
        "answer": "byłeś",
        "why": "«Ты» требует хвостика: мужчине — byłeś. Форма był значит «он был».",
        "hint": "У «ты» есть свой хвостик, и он мужской 🙂"
      },
      {
        "type": "choice",
        "q": "Co pani ___ wczoraj? <i style='opacity:.6'>что Вы делали вчера? — к женщине</i>",
        "opts": [
          "robiłaś",
          "robiła",
          "robił",
          "robiły"
        ],
        "answer": "robiła",
        "why": "Pan и pani берут форму третьего лица — ту же, что on и ona. К женщине: pani robiła.",
        "hint": "Вежливое «Вы» ведёт себя как «она», а не как «ты» 🙂"
      },
      {
        "type": "choice",
        "q": "Anna i Marek o sobie: ___ w Gdańsku. <i style='opacity:.6'>мы были в Гданьске</i>",
        "opts": [
          "Byłyśmy",
          "Byliście",
          "Były",
          "Byliśmy"
        ],
        "answer": "Byliśmy",
        "why": "В группе есть мужчина — значит ветка со слогом -li-: byliśmy. Byłyśmy сказали бы только женщины.",
        "hint": "Смотри на состав компании, а не на того, кто говорит вслух 👥"
      },
      {
        "type": "choice",
        "q": "Dzieci ___ w domu.",
        "opts": [
          "były",
          "byli",
          "byliśmy",
          "był"
        ],
        "answer": "były",
        "why": "Мужско-личная ветка — только про людей-мужчин. Слово dzieci всегда идёт с one były.",
        "hint": "Это слово выбирает вторую ветку, даже если речь о мальчиках 🧒"
      },
      {
        "type": "choice",
        "q": "Wczoraj nie ___ spać. <i style='opacity:.6'>я не мог — говорит мужчина</i>",
        "opts": [
          "mógłem",
          "mogłam",
          "mogłem",
          "mogli"
        ],
        "answer": "mogłem",
        "why": "Буква ó появляется только в форме mógł («он мог»). Во всех остальных — обычное o: mogłem.",
        "hint": "Одна форма этого глагола держит ó, но это не форма для «я» 😴"
      },
      {
        "type": "choice",
        "q": "Wczoraj chłopcy ___ pierogi.",
        "opts": [
          "jadły",
          "jedli",
          "jadli",
          "jedzą"
        ],
        "answer": "jedli",
        "why": "Chłopcy — мужчины, значит мужско-личная ветка, а перед -li гласная a переходит в e: jedli.",
        "hint": "Перед -li буква a становится e 🥟"
      },
      {
        "type": "choice",
        "q": "Anna o sobie: Wczoraj ___ do sklepu pieszo. <i style='opacity:.6'>я шла</i>",
        "opts": [
          "szedłam",
          "szła",
          "szedłem",
          "szłam"
        ],
        "answer": "szłam",
        "why": "У iść прошедшее берётся от другого корня, и женская форма короче: szłam, без -ed-.",
        "hint": "Русское «шёл / шла» тоже теряет слог в женском роде 🚶‍♀️"
      },
      {
        "type": "choice",
        "q": "Cały dzień ___ mieszkanie. <i style='opacity:.6'>весь день я убирала — говорит женщина</i>",
        "opts": [
          "sprzątałam",
          "posprzątałam",
          "sprzątałem",
          "posprzątałem"
        ],
        "answer": "sprzątałam",
        "why": "«Весь день» — про длительность, значит несовершенный вид; о себе говорит женщина: sprzątałam. По-русски тоже не скажешь «весь день убрала».",
        "hint": "Слова о длительности тянут за собой процесс, а не итог 🧹"
      },
      {
        "type": "choice",
        "q": "Już ___ zakupy i mogę odpocząć. <i style='opacity:.6'>я уже сделала покупки</i>",
        "opts": [
          "robiłam",
          "zrobiłam",
          "zrobię",
          "robię"
        ],
        "answer": "zrobiłam",
        "why": "«Уже» здесь про готовый результат — значит совершенный вид в прошедшем: zrobiłam.",
        "hint": "Раз можно отдыхать, дело закрыто — нужен итог 🛍️"
      },
      {
        "type": "gap",
        "q": "Wczoraj ___ list dwie godziny. <i style='opacity:.6'>я писал письмо — говорит мужчина</i>",
        "accept": [
          "pisałem",
          "pisalem"
        ],
        "model": "pisałem",
        "hint": "«Два часа» — это длительность, значит нужен процесс, а не итог ✍️"
      },
      {
        "type": "gap",
        "q": "Nie ___ przyjść, bo musiałem pracować. <i style='opacity:.6'>я не мог — говорит мужчина</i>",
        "accept": [
          "mogłem",
          "moglem"
        ],
        "model": "mogłem",
        "hint": "Форма для «я» от móc — без ó 🙂"
      },
      {
        "type": "gap",
        "q": "Najpierw zjadłam śniadanie, ___ poszłam do pracy. <i style='opacity:.6'>потом</i>",
        "accept": [
          "potem"
        ],
        "model": "potem",
        "hint": "Из четырёх коннекторов дня нужен второй по счёту ➡️"
      },
      {
        "type": "gap",
        "q": "Anna i Ewa ___ w górach. <i style='opacity:.6'>они были</i>",
        "accept": [
          "były",
          "byly"
        ],
        "model": "były",
        "hint": "В компании только женщины — значит ветка со слогом -ły- 👥"
      },
      {
        "type": "trRE",
        "ru": "Где ты была летом?",
        "accept": [
          "gdzie byłaś latem",
          "gdzie bylas latem",
          "gdzie byłas latem",
          "gdzie bylaś latem",
          "a gdzie byłaś latem"
        ],
        "model": "Gdzie byłaś latem?",
        "hint": "«Летом» — одно слово без предлога, а форма прошедшего обращена к женщине 🏖️"
      },
      {
        "type": "trRE",
        "ru": "Мы были в горах с братом.",
        "accept": [
          "byliśmy w górach z bratem",
          "bylismy w gorach z bratem",
          "byliśmy z bratem w górach",
          "bylismy z bratem w gorach"
        ],
        "model": "Byliśmy w górach z bratem.",
        "hint": "В компании есть мужчина, а после z слово идёт в творительном 🏔️"
      },
      {
        "type": "trRE",
        "ru": "Я уже написала письмо.",
        "accept": [
          "już napisałam list",
          "juz napisalam list",
          "już napisałam ten list",
          "napisałam już list"
        ],
        "model": "Już napisałam list.",
        "hint": "«Уже» просит совершенный вид, а говорит женщина ✉️"
      },
      {
        "type": "trER",
        "en": "Cały dzień sprzątałam mieszkanie.",
        "accept": [
          "весь день я убирала квартиру",
          "весь день убирала квартиру",
          "я весь день убирала квартиру",
          "целый день я убирала квартиру",
          "целый день убирала квартиру"
        ],
        "model": "Весь день я убирала квартиру.",
        "hint": "Форма sprzątałam — несовершенный вид: не «убрала», а… 🧹"
      },
      {
        "type": "trER",
        "en": "Dzieci były w parku.",
        "accept": [
          "дети были в парке",
          "ребята были в парке"
        ],
        "model": "Дети были в парке.",
        "hint": "Слово dzieci — это «дети» 🧒"
      },
      {
        "type": "order",
        "answer": "wczoraj wieczorem oglądaliśmy film",
        "accept": [
          "wczoraj wieczorem oglądaliśmy film",
          "oglądaliśmy film wczoraj wieczorem"
        ],
        "hintRu": "Собери: «Вчера вечером мы смотрели фильм.»",
        "hint": "Порядок слов как в русском, а «мы» — с хвостиком -śmy 🎬"
      },
      {
        "type": "order",
        "answer": "w końcu napisałam ten list",
        "accept": [
          "w końcu napisałam ten list"
        ],
        "hintRu": "Собери: «В конце концов я написала это письмо.»",
        "hint": "«В конце концов» — два слова, и после них идёт совершенный вид ✉️"
      },
      {
        "type": "match",
        "q": "Соедини коннектор с переводом.",
        "pairs": [
          [
            "najpierw",
            "сначала"
          ],
          [
            "potem",
            "потом"
          ],
          [
            "później",
            "позже"
          ],
          [
            "w końcu",
            "в конце концов"
          ],
          [
            "w nocy",
            "ночью"
          ]
        ],
        "hint": "Четыре стрелки рассказа плюс время суток, которому нужен предлог ➡️"
      },
      {
        "type": "match",
        "q": "Соедини польскую форму с точным переводом.",
        "pairs": [
          [
            "pisałem",
            "я писал"
          ],
          [
            "napisałem",
            "я написал"
          ],
          [
            "byliśmy",
            "мы были — есть мужчина"
          ],
          [
            "byłyśmy",
            "мы были — только женщины"
          ],
          [
            "szedłem",
            "я шёл"
          ]
        ],
        "hint": "Приставка меняет вид, а слог -li- или -ły- меняет состав компании 🙂"
      },
      {
        "type": "describe",
        "prompt": "Расскажи о лете (2–3 предложения): где ты был(а), с кем и что делал(а). Всё в прошедшем времени.",
        "keywords": [
          "latem",
          "byłem",
          "byłam",
          "byliśmy",
          "byłyśmy",
          "nad morzem",
          "w górach",
          "pracowałem",
          "pracowałam",
          "odpoczywałem",
          "odpoczywałam",
          "zwiedzałem",
          "zwiedzałam",
          "z siostrą",
          "z bratem"
        ],
        "minWords": 8,
        "model": "Latem byłam nad morzem z siostrą. Rano pływałyśmy, po południu zwiedzałyśmy miasto.",
        "hint": "Начни с latem byłem / byłam…, потом добавь, с кем и что вы делали 🏖️"
      },
      {
        "type": "describe",
        "prompt": "Расскажи о вчерашнем дне (2–3 предложения): что было сначала, что потом и что ты успел(а) сделать. Используй najpierw, potem и w końcu.",
        "keywords": [
          "najpierw",
          "potem",
          "później",
          "w końcu",
          "rano",
          "wieczorem",
          "wstałem",
          "wstałam",
          "zjadłem",
          "zjadłam",
          "poszedłem",
          "poszłam",
          "zrobiłem",
          "zrobiłam"
        ],
        "minWords": 10,
        "model": "Wczoraj rano wstałam o siódmej. Najpierw zjadłam śniadanie, potem poszłam do pracy. W końcu wieczorem posprzątałam kuchnię.",
        "hint": "Время суток держит нить, коннекторы вяжут узлы, а вид решает — фон это или событие 🧵"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя готова. 25 заданий: оба будущих времени, dopełniacz везде — количества, цены и глаголы szukać / uczyć się, дательный падеж, обращения и даты. Наберёшь 80% — откроется Неделя 3. 💛",
    "review": [
      "Будущее несов.: <b>będę · będziesz · będzie · będziemy · będziecie · będą</b> + инфинитив ИЛИ л-форма: <b>będę robić = będę robił / robiła</b> (без -m!)",
      "Будущее сов. — одна форма: <b>zrobię · napiszę · kupię · przeczytam · zadzwonię · przyjdę</b> · ❌ <b>będę zrobić</b>",
      "Dopełniacz везде: <b>dużo pracy</b> · mało czasu · kilka minut · <b>dwa złote</b> / <b>pięć złotych</b> · kilogram <b>jabłek</b>",
      "Глаголы с dopełniaczem: <b>szukam pracy</b> · potrzebuję pomocy · <b>uczę się polskiego</b> · słucham muzyki",
      "Celownik: mi · ci · mu · jej · <b>dziękuję ci</b> (не cię!) · pomagam <b>mamie</b> · kupię <b>bratu</b> · powiem <b>Markowi</b>",
      "Wołacz: <b>Mamo! · Aniu! · Marku! · Panie Marku! · Pani Ewo!</b> · открытка: <b>Kochana Mamo!</b> … Pozdrawiam serdecznie",
      "Даты: <b>we wrześniu</b> · Dziś jest <b>piąty maja</b> · Kiedy? — <b>piątego maja</b> · <b>Wszystkiego najlepszego!</b> · Życzę <b>ci</b>…"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Anna o sobie, л-формой: «Завтра я буду работать» —",
        "opts": [
          "Jutro będę pracowałam",
          "Jutro będę pracowała",
          "Jutro będę pracował",
          "Jutro będzie pracowała"
        ],
        "answer": "Jutro będę pracowała",
        "why": "Личное окончание уже живёт в będę — л-форма идёт голой: pracowała. Мужчина сказал бы będę pracował.",
        "hint": "Двух личных окончаний в одной фразе не бывает 🙂"
      },
      {
        "type": "choice",
        "q": "Какая фраза невозможна?",
        "opts": [
          "Będę robić zakupy",
          "Będę robiła zakupy",
          "Będę zrobić zakupy",
          "Zrobię zakupy"
        ],
        "answer": "Będę zrobić zakupy",
        "why": "С będę сочетается только несовершенный вид. Совершенный сам по себе уже будущее: zrobię zakupy — как русское «сделаю».",
        "hint": "По-русски «буду сделать» тоже не говорят 🛒"
      },
      {
        "type": "choice",
        "q": "Jutro ___ chleb. <i style='opacity:.6'>куплю</i>",
        "opts": [
          "kupię",
          "kupuję",
          "będę kupić",
          "kupiłem"
        ],
        "answer": "kupię",
        "why": "Kupuję — настоящее «покупаю». Про завтра нужен совершенный вид: kupię.",
        "hint": "Форма настоящего, смысл будущего — как русское «куплю» 🍞"
      },
      {
        "type": "choice",
        "q": "Mam dużo ___. <i style='opacity:.6'>работы</i>",
        "opts": [
          "praca",
          "pracę",
          "pracą",
          "pracy"
        ],
        "answer": "pracy",
        "why": "После слов количества (dużo, mało, trochę, kilka) — dopełniacz: dużo pracy, как русское «много работы».",
        "hint": "Русский родительный после «много» подсказывает форму 📦"
      },
      {
        "type": "choice",
        "q": "To kosztuje pięć ___.",
        "opts": [
          "złote",
          "złotych",
          "złoty",
          "złotego"
        ],
        "answer": "złotych",
        "why": "От пяти и выше — dopełniacz множественного: pięć złotych. Форма dwa złote остаётся для 2–4.",
        "hint": "Три полки: 1 · 2-3-4 · 5+, как русское «год / года / лет» 🪙"
      },
      {
        "type": "choice",
        "q": "Uczę się ___ już rok. <i style='opacity:.6'>польский</i>",
        "opts": [
          "polskiego",
          "polski",
          "polskim",
          "po polsku"
        ],
        "answer": "polskiego",
        "why": "Uczyć się требует dopełniacza: uczę się polskiego, historii, matematyki.",
        "hint": "Этот глагол тянет за собой родительный, хотя по-русски просится винительный 📚"
      },
      {
        "type": "choice",
        "q": "Dziękuję ___ za prezent. <i style='opacity:.6'>тебе</i>",
        "opts": [
          "cię",
          "ciebie",
          "ci",
          "ty"
        ],
        "answer": "ci",
        "why": "Dziękować идёт с дательным: dziękuję ci. Опирайся на «спасибо тебе», а не на «благодарю тебя».",
        "hint": "Русское «спасибо тебе» держит верный падеж 🙏"
      },
      {
        "type": "choice",
        "q": "Kupię ___ książkę. <i style='opacity:.6'>брату</i>",
        "opts": [
          "bratowi",
          "brata",
          "bratem",
          "bratu"
        ],
        "answer": "bratu",
        "why": "Brat входит в короткий список дательного на -u: bratu, ojcu, panu.",
        "hint": "Обычное мужское окончание -owi тут не работает — слово из списка исключений 📕"
      },
      {
        "type": "choice",
        "q": "___, masz chwilę? <i style='opacity:.6'>мама, у тебя есть минутка?</i>",
        "opts": [
          "Mamo",
          "Mama",
          "Mamie",
          "Mamą"
        ],
        "answer": "Mamo",
        "why": "Когда зовёшь — звательный падеж: Mamo. Форма mama остаётся для «мама пришла», mamie — это «маме».",
        "hint": "Русское «мам!» — след того же падежа 📣"
      },
      {
        "type": "choice",
        "q": "Wrócimy ___ września. <i style='opacity:.6'>первого сентября</i>",
        "opts": [
          "pierwszy",
          "pierwszego",
          "pierwsza",
          "pierwszym"
        ],
        "answer": "pierwszego",
        "why": "На вопрос «когда» и число, и месяц идут в родительном: pierwszego września — точь-в-точь «первого сентября».",
        "hint": "Русская дата подсказывает окончание 📅"
      },
      {
        "type": "gap",
        "q": "Jesienią ___ w Krakowie. <i style='opacity:.6'>мы будем</i>",
        "accept": [
          "będziemy",
          "bedziemy"
        ],
        "model": "będziemy",
        "hint": "Być в будущем для «мы» 🏙️"
      },
      {
        "type": "gap",
        "q": "Wieczorem ___ do ciebie. <i style='opacity:.6'>я позвоню</i>",
        "accept": [
          "zadzwonię",
          "zadzwonie"
        ],
        "model": "zadzwonię",
        "hint": "Совершенному виду вспомогательное będę не нужно 📞"
      },
      {
        "type": "gap",
        "q": "Poproszę kilogram ___. <i style='opacity:.6'>яблок</i>",
        "accept": [
          "jabłek",
          "jablek"
        ],
        "model": "jabłek",
        "hint": "Яблок много — родительный множественного 🍎"
      },
      {
        "type": "gap",
        "q": "___ wrześniu będę pracować w Krakowie. <i style='opacity:.6'>в сентябре</i>",
        "accept": [
          "we"
        ],
        "model": "we",
        "hint": "Перед скоплением согласных предлог удлиняется — так легче произнести 🍂"
      },
      {
        "type": "trRE",
        "ru": "Спасибо тебе за помощь.",
        "accept": [
          "dziękuję ci za pomoc",
          "dziekuje ci za pomoc",
          "dziękuje ci za pomoc",
          "dziękuję ci bardzo za pomoc"
        ],
        "model": "Dziękuję ci za pomoc.",
        "hint": "Спасибо кому — дательный, а за что — после za форма не меняется 🙏"
      },
      {
        "type": "trRE",
        "ru": "У меня мало времени.",
        "accept": [
          "mam mało czasu",
          "mam malo czasu"
        ],
        "model": "Mam mało czasu.",
        "hint": "После слова количества идёт родительный ⏰"
      },
      {
        "type": "trRE",
        "ru": "Желаю тебе всего наилучшего.",
        "accept": [
          "życzę ci wszystkiego najlepszego",
          "zycze ci wszystkiego najlepszego",
          "życze ci wszystkiego najlepszego",
          "zyczę ci wszystkiego najlepszego"
        ],
        "model": "Życzę ci wszystkiego najlepszego.",
        "hint": "Желают кому — дательный, а чего — родительный. Как в русском 🎂"
      },
      {
        "type": "trER",
        "en": "Szukam pracy.",
        "accept": [
          "я ищу работу",
          "ищу работу"
        ],
        "model": "Я ищу работу.",
        "hint": "Форма pracy тут родительный, но по-русски это обычное дополнение 🔎"
      },
      {
        "type": "trER",
        "en": "Mam urodziny piątego maja.",
        "accept": [
          "у меня день рождения пятого мая",
          "мой день рождения пятого мая",
          "день рождения пятого мая",
          "у меня день рождения 5 мая"
        ],
        "model": "У меня день рождения пятого мая.",
        "hint": "Urodziny — множественное, а maj — это месяц 🎉"
      },
      {
        "type": "order",
        "answer": "kupię bratu książkę",
        "accept": [
          "kupię bratu książkę",
          "bratu kupię książkę"
        ],
        "hintRu": "Собери: «Куплю брату книгу.»",
        "hint": "Кому — дательный (короткая форма на -u), что — винительный 📕"
      },
      {
        "type": "order",
        "answer": "w sobotę zrobię zakupy",
        "accept": [
          "w sobotę zrobię zakupy",
          "zrobię zakupy w sobotę"
        ],
        "hintRu": "Собери: «В субботу я сделаю покупки.»",
        "hint": "Результат — совершенный вид, и вспомогательное będę тут лишнее 🛒"
      },
      {
        "type": "match",
        "q": "Соедини месяц с переводом.",
        "pairs": [
          [
            "styczeń",
            "январь"
          ],
          [
            "kwiecień",
            "апрель"
          ],
          [
            "lipiec",
            "июль"
          ],
          [
            "wrzesień",
            "сентябрь"
          ],
          [
            "grudzień",
            "декабрь"
          ]
        ],
        "hint": "Три месяца тут совсем не похожи на русские — их просто берут наизусть 📅"
      },
      {
        "type": "match",
        "q": "Соедини форму с переводом.",
        "pairs": [
          [
            "mamie",
            "маме"
          ],
          [
            "bratu",
            "брату"
          ],
          [
            "Markowi",
            "Мареку"
          ],
          [
            "Aniu!",
            "Аня!"
          ],
          [
            "Panie Marku!",
            "пан Марек!"
          ]
        ],
        "hint": "Три формы отвечают на вопрос «кому», а две — это обращения 📣"
      },
      {
        "type": "describe",
        "prompt": "Напиши 2–3 предложения о планах: что ты будешь делать на следующей неделе и что точно сделаешь. Используй оба будущих.",
        "keywords": [
          "będę",
          "będziemy",
          "jutro",
          "w przyszłym tygodniu",
          "zrobię",
          "kupię",
          "napiszę",
          "zadzwonię",
          "przyjdę",
          "pójdę"
        ],
        "minWords": 8,
        "model": "W przyszłym tygodniu będę dużo pracować. W sobotę zrobię zakupy i zadzwonię do mamy.",
        "hint": "Процесс — będę + несовершенный, результат — одна форма совершенного ⏳"
      },
      {
        "type": "describe",
        "prompt": "Напиши 2–3 предложения: кому ты купишь подарок и что подаришь, а ещё — когда у тебя день рождения.",
        "keywords": [
          "kupię",
          "mamie",
          "bratu",
          "siostrze",
          "ewie",
          "markowi",
          "prezent",
          "kwiaty",
          "urodziny",
          "maja",
          "piątego",
          "w maju",
          "wszystkiego najlepszego"
        ],
        "minWords": 8,
        "model": "Mamie kupię kwiaty, a bratu książkę. Mam urodziny piątego maja.",
        "hint": "Кому — дательный, а дата на вопрос «когда» — в родительном 🎁"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя позади — самая насыщенная. 25 заданий: степени сравнения, глаголы движения, здоровье и врач, императив и мужско-личный род. Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Сравнение: nowy → <b>nowszy</b> · ładny → <b>ładniejszy</b> · четвёрка: <b>lepszy · gorszy · większy · mniejszy</b> · длинные слова: <b>bardziej</b>",
      "С чем сравниваем: <b>niż</b> + именительный (starszy niż Anna) · <b>od</b> + родительный (starszy od Anny)",
      "Превосходная: <b>naj-</b> + сравнительная · najlepszy <b>z klasy</b> · największe miasto <b>w Polsce</b> · наречия: <b>lepiej / najlepiej</b>",
      "Движение: <b>idę</b> (сейчас) / <b>chodzę</b> (вообще) · <b>jadę</b> / <b>jeżdżę</b> · ловушка: oni <b>jadą</b> ≠ oni <b>jedzą</b> · jadę <b>pociągiem</b>, <b>na rowerze</b>",
      "Здоровье: <b>Boli mnie</b> głowa · <b>Bolą mnie plecy</b> · mam katar / gorączkę · <b>Jestem chory / chora</b> · <b>Co panu dolega?</b> · <b>recepta</b> ≠ <b>przepis</b>",
      "Императив: on robi → <b>rób</b> · <b>Zrób to!</b>, но запрет — несов. вид: <b>Nie rób tego!</b> · weź · daj · powiedz · chodź · <b>Niech pan usiądzie</b>",
      "Мужско-личный род: <b>oni byli / one były</b> · <b>ci</b> studenci / <b>te</b> studentki · dobrzy / dobre · <b>dwaj</b> / <b>dwie</b> / <b>dwa</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Ta kawa jest ___ niż tamta. <i style='opacity:.6'>лучше</i>",
        "opts": [
          "lepszy",
          "lepiej",
          "lepsza",
          "najlepsza"
        ],
        "answer": "lepsza",
        "why": "Kawa женского рода, значит lepsza. Lepiej — наречие (нужно рядом с глаголом), najlepsza — превосходная степень.",
        "hint": "Слово описывает предмет женского рода, а сравниваем всего с одним другим ☕"
      },
      {
        "type": "choice",
        "q": "Marek jest starszy ___ Anny.",
        "opts": [
          "niż",
          "od",
          "z",
          "jak"
        ],
        "answer": "od",
        "why": "Anny — родительный падеж, а его требует od. После niż слово стояло бы в словарной форме: starszy niż Anna.",
        "hint": "Смотри на форму имени после пропуска — она и решает 🙂"
      },
      {
        "type": "choice",
        "q": "Warszawa to ___ miasto w Polsce. <i style='opacity:.6'>самый большой город</i>",
        "opts": [
          "największe",
          "największa",
          "najwięcej",
          "większe"
        ],
        "answer": "największe",
        "why": "Miasto среднего рода → największe. Największa была бы для женского, najwięcej — «больше всего» о количестве.",
        "hint": "Прилагательное согласуется со словом miasto 🏙️"
      },
      {
        "type": "choice",
        "q": "Teraz mówię po polsku ___. <i style='opacity:.6'>лучше</i>",
        "opts": [
          "lepszy",
          "najlepszy",
          "dobry",
          "lepiej"
        ],
        "answer": "lepiej",
        "why": "Рядом глагол — значит наречие: lepiej. Lepszy описывал бы предмет: lepszy telefon.",
        "hint": "Предмет — lepszy, действие — другое слово 🎚️"
      },
      {
        "type": "choice",
        "q": "Codziennie ___ do pracy pieszo.",
        "opts": [
          "idę",
          "chodzę",
          "jadę",
          "jeżdżę"
        ],
        "answer": "chodzę",
        "why": "Codziennie — про привычку, а pieszo — пешком: chodzę. Так же и по-русски: «каждый день хожу», а не «иду».",
        "hint": "Два слова в предложении задают и регулярность, и способ 🚶"
      },
      {
        "type": "choice",
        "q": "Oni ___ obiad. <i style='opacity:.6'>они едят обед</i>",
        "opts": [
          "jedzą",
          "jadą",
          "jeżdżą",
          "je"
        ],
        "answer": "jedzą",
        "why": "Обед едят: jedzą. Jadą — «едут», это про движение. Ловушка недели.",
        "hint": "Похожие формы, но одна про еду, а другая про дорогу 🍽️"
      },
      {
        "type": "choice",
        "q": "___ mnie plecy. <i style='opacity:.6'>у меня болит спина</i>",
        "opts": [
          "Boli",
          "Boleją",
          "Bolę",
          "Bolą"
        ],
        "answer": "Bolą",
        "why": "Plecy живёт только во множественном числе, значит bolą — дословно «болят спины».",
        "hint": "У этого слова нет единственного числа — как у русских «ножницы» 🦴"
      },
      {
        "type": "choice",
        "q": "Co ci jest? — ___. <i style='opacity:.6'>я больна</i>",
        "opts": [
          "Jestem chorą",
          "Jestem chorym",
          "Jestem chora",
          "Jestem chory"
        ],
        "answer": "Jestem chora",
        "why": "С прилагательным być берёт именительный: jestem chora. Творительный нужен существительным: jestem lekarką.",
        "hint": "Тут прилагательное, а не профессия — падеж будет другой 🤒"
      },
      {
        "type": "choice",
        "q": "___ tego! <i style='opacity:.6'>не делай этого!</i>",
        "opts": [
          "Nie rób",
          "Nie zrób",
          "Nie robić",
          "Nie robisz"
        ],
        "answer": "Nie rób",
        "why": "После nie приказ переходит в несовершенный вид — ровно как русское «не делай», а не «не сделай».",
        "hint": "Русский запрет соблюдает то же правило, просто мы его не замечаем 🚫"
      },
      {
        "type": "choice",
        "q": "___ studenci byli bardzo mili.",
        "opts": [
          "Te",
          "Ci",
          "Ta",
          "Ten"
        ],
        "answer": "Ci",
        "why": "Studenci — мужчины, значит мужско-личная ветка: ci studenci byli. Te остаётся женщинам, детям, животным и вещам.",
        "hint": "Слово «эти» тоже выбирает род 👨‍🎓"
      },
      {
        "type": "gap",
        "q": "Kraków jest mniejszy ___ Warszawa. <i style='opacity:.6'>чем</i>",
        "accept": [
          "niż",
          "niz"
        ],
        "model": "niż",
        "hint": "Слово после пропуска стоит в словарной форме — значит нужен союз, который её и требует ⚖️"
      },
      {
        "type": "gap",
        "q": "Raz w miesiącu ___ do Warszawy. <i style='opacity:.6'>езжу</i>",
        "accept": [
          "jeżdżę",
          "jezdze",
          "jeżdze",
          "jezdżę"
        ],
        "model": "jeżdżę",
        "hint": "«Раз в месяц» — регулярность, а не одна поездка 🚆"
      },
      {
        "type": "gap",
        "q": "Co panu ___? <i style='opacity:.6'>на что жалуетесь? — врач мужчине</i>",
        "accept": [
          "dolega"
        ],
        "model": "dolega",
        "hint": "Главный вопрос врача — и он просит дательный падеж 🩺"
      },
      {
        "type": "gap",
        "q": "___ lekarstwo i odpoczywaj. <i style='opacity:.6'>возьми</i>",
        "accept": [
          "weź",
          "wez"
        ],
        "model": "weź",
        "hint": "У wziąć короткая форма приказа — всего три буквы 💊"
      },
      {
        "type": "trRE",
        "ru": "У меня болит голова.",
        "accept": [
          "boli mnie głowa",
          "boli mnie glowa"
        ],
        "model": "Boli mnie głowa.",
        "hint": "«У меня» тут не переводится: человек встаёт в винительный падеж 🤕"
      },
      {
        "type": "trRE",
        "ru": "Я еду поездом.",
        "accept": [
          "jadę pociągiem",
          "jade pociagiem",
          "jadę pociagiem",
          "jade pociągiem"
        ],
        "model": "Jadę pociągiem.",
        "hint": "Чем едут — творительный падеж без предлога 🚆"
      },
      {
        "type": "trRE",
        "ru": "Это лучший кофе в городе.",
        "accept": [
          "to najlepsza kawa w mieście",
          "to najlepsza kawa w miescie",
          "najlepsza kawa w mieście",
          "to jest najlepsza kawa w mieście"
        ],
        "model": "To najlepsza kawa w mieście.",
        "hint": "Приставка naj- клеится к сравнительной степени, а место идёт с предлогом w ☕"
      },
      {
        "type": "trER",
        "en": "Anna i Ewa były w kinie.",
        "accept": [
          "анна и эва были в кино",
          "анна и ева были в кино"
        ],
        "model": "Анна и Эва были в кино.",
        "hint": "Форма były говорит, что мужчин в компании не было 🎬"
      },
      {
        "type": "trER",
        "en": "Mam gorączkę i katar.",
        "accept": [
          "у меня температура и насморк",
          "у меня жар и насморк",
          "температура и насморк"
        ],
        "model": "У меня температура и насморк.",
        "hint": "Два симптома, оба после mieć 🌡️"
      },
      {
        "type": "order",
        "answer": "dwaj studenci byli bardzo mili",
        "accept": [
          "dwaj studenci byli bardzo mili"
        ],
        "hintRu": "Собери: «Два студента были очень приятные.»",
        "hint": "О мужчинах — dwaj, и дальше всё согласуется: byli, mili 👨‍🎓"
      },
      {
        "type": "order",
        "answer": "jutro pójdę do lekarza",
        "accept": [
          "jutro pójdę do lekarza",
          "pójdę jutro do lekarza"
        ],
        "hintRu": "Собери: «Завтра я пойду к врачу.»",
        "hint": "Приставка po- даёт форму настоящего со смыслом будущего 🩺"
      },
      {
        "type": "match",
        "q": "Соедини слово с переводом.",
        "pairs": [
          [
            "plecy",
            "спина"
          ],
          [
            "gardło",
            "горло"
          ],
          [
            "brzuch",
            "живот"
          ],
          [
            "recepta",
            "рецепт от врача"
          ],
          [
            "przepis",
            "рецепт блюда"
          ]
        ],
        "hint": "Два последних слова легко перепутать: одно ведёт в аптеку, другое на кухню 💊"
      },
      {
        "type": "match",
        "q": "Соедини команду с переводом.",
        "pairs": [
          [
            "Zrób to!",
            "Сделай это!"
          ],
          [
            "Nie rób tego!",
            "Не делай этого!"
          ],
          [
            "Weź",
            "Возьми"
          ],
          [
            "Powiedz",
            "Скажи"
          ],
          [
            "Niech pan usiądzie",
            "Садитесь (вежливо)"
          ]
        ],
        "hint": "Приказ и запрет отличаются не только частицей nie, но и видом глагола 👉"
      },
      {
        "type": "describe",
        "prompt": "Сравни два города или две квартиры (2–3 предложения). Используй niż хотя бы раз и od + родительный хотя бы раз.",
        "keywords": [
          "niż",
          "od",
          "większy",
          "większa",
          "mniejszy",
          "mniejsza",
          "lepszy",
          "ładniejszy",
          "ładniejsza",
          "tańszy",
          "droższy",
          "droższa",
          "najlepszy",
          "największe"
        ],
        "minWords": 8,
        "model": "Kraków jest mniejszy niż Warszawa, ale ładniejszy. Warszawa jest większa i droższa od Krakowa.",
        "hint": "После niż слово в словарной форме, после od — в родительном ⚖️"
      },
      {
        "type": "describe",
        "prompt": "Ты у врача. Напиши 2–3 предложения: что болит, с каких пор и какие ещё симптомы.",
        "keywords": [
          "boli mnie",
          "bolą mnie",
          "głowa",
          "gardło",
          "brzuch",
          "plecy",
          "katar",
          "kaszel",
          "gorączkę",
          "jestem chory",
          "jestem chora",
          "od wczoraj",
          "od dwóch dni",
          "źle się czuję"
        ],
        "minWords": 8,
        "model": "Boli mnie gardło od dwóch dni. Mam też katar i gorączkę. Źle się czuję.",
        "hint": "Одно болит — boli, несколько — bolą; симптомы идут после mam 🤒"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен A2",
    "intro": "Это финал! 33 задания по всему уровню A2: прошедшее время и вид глагола, оба будущих, dopełniacz и celownik, обращения и даты, сравнение и движение, здоровье и приказы, мужско-личный род — и вся Неделя 4: вежливое «бы», мнения, учёба и работа, znać / wiedzieć, дорога, мечты и большой рассказ. Соберись — и вперёд к грамоте A2! 🏆",
    "review": [
      "Прошедшее целиком: byłem / byłam · <b>byliśmy / byłyśmy</b> · <b>oni byli / one były</b> · <b>dzieci były</b> · вежливо: Co pani robiła?",
      "Неправильные: <b>szedłem / szłam</b> · mogłem, но on <b>mógł</b> · jadłem, oni <b>jedli</b> · mieli · chcieli",
      "Вид: <b>cały dzień</b> → pisałem · <b>już, w końcu</b> → napisałem · <b>zrobię</b> = «сделаю» · ❌ będę zrobić",
      "Два будущих: <b>będę robić = będę robił / robiła</b> (без -m!) · <b>zrobię · kupię · napiszę · zadzwonię</b>",
      "Падежи: dużo <b>pracy</b> · pięć <b>złotych</b> · <b>szukam pracy</b> · <b>uczę się polskiego</b> · <b>dziękuję ci</b> · pomagam <b>mamie</b> · <b>Mamo! Panie Marku!</b> · <b>piątego maja</b>",
      "Сравнение и дорога: lepszy / najlepszy · <b>niż</b> + им. / <b>od</b> + род. · idę / <b>chodzę</b> · jadę / <b>jeżdżę</b> · jadę <b>pociągiem</b>",
      "Здоровье, приказ, мужско-личный: <b>Boli mnie</b> / <b>Bolą mnie</b> · <b>jestem chory</b> · <b>Nie rób tego!</b> · Niech pan usiądzie · <b>ci / te · dwaj / dwie / dwa</b>",
      "Вежливость и мнения: <b>chciałbym / chciałabym</b> · <b>Czy mógłby pan…?</b> · myślę<b>,</b> że… · moim zdaniem · zgadzam się <b>z Markiem</b> · <b>masz rację / nie masz racji</b>",
      "Учёба, работа, мир: uczę się <b>polskiego</b> / studiuję <b>prawo</b> · <b>zdawać / zdać</b> · pracuję <b>jako kelner</b> / jestem <b>kelnerem</b> · <b>znam Annę</b> / <b>wiem, że…</b> · oni <b>wiedzą</b> · bilet <b>do Gdańska</b> · <b>na Węgry</b> · <b>marzę o…</b> · pięć lat <b>temu</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Anna i Marek o sobie: ___ w górach. <i style='opacity:.6'>мы были</i>",
        "opts": [
          "Byliśmy",
          "Byłyśmy",
          "Byliście",
          "Były"
        ],
        "answer": "Byliśmy",
        "why": "В группе есть мужчина — ветка со слогом -li-: byliśmy. Byłyśmy сказали бы только женщины.",
        "hint": "Решает состав компании, а не голос рассказчика 👥"
      },
      {
        "type": "choice",
        "q": "Dzieci ___ w parku.",
        "opts": [
          "byli",
          "byliśmy",
          "były",
          "był"
        ],
        "answer": "były",
        "why": "Мужско-личная ветка — только про людей-мужчин; dzieci всегда идёт с формой były.",
        "hint": "Это слово выбирает вторую ветку независимо от того, мальчики это или девочки 🧒"
      },
      {
        "type": "choice",
        "q": "Cały dzień ___ raport. <i style='opacity:.6'>весь день я писала отчёт</i>",
        "opts": [
          "napisałam",
          "pisałam",
          "pisałem",
          "napisałem"
        ],
        "answer": "pisałam",
        "why": "«Весь день» — про длительность, значит несовершенный вид, а говорит женщина: pisałam.",
        "hint": "Смотри сразу на два признака: маркер длительности и род говорящего ✍️"
      },
      {
        "type": "choice",
        "q": "Какая фраза невозможна?",
        "opts": [
          "Będę pisać list",
          "Napiszę list",
          "Będę pisała list",
          "Będę napisać list"
        ],
        "answer": "Będę napisać list",
        "why": "С będę сочетается только несовершенный вид. Совершенный образует будущее сам: napiszę list.",
        "hint": "По-русски «буду написать» тоже невозможно ✉️"
      },
      {
        "type": "choice",
        "q": "Mam dużo ___ i mało czasu. <i style='opacity:.6'>работы</i>",
        "opts": [
          "pracy",
          "praca",
          "pracę",
          "pracą"
        ],
        "answer": "pracy",
        "why": "После слов количества — dopełniacz: dużo pracy, mało czasu.",
        "hint": "Русское «много работы» держит тот же падеж 📦"
      },
      {
        "type": "choice",
        "q": "Dziękuję ___ za pomoc. <i style='opacity:.6'>тебе</i>",
        "opts": [
          "cię",
          "ci",
          "ciebie",
          "ty"
        ],
        "answer": "ci",
        "why": "Dziękować идёт с дательным: dziękuję ci. Русское «благодарю тебя» тут обманывает.",
        "hint": "Опирайся на «спасибо тебе» 🙏"
      },
      {
        "type": "choice",
        "q": "Marek jest wyższy ___ Anny.",
        "opts": [
          "niż",
          "jak",
          "od",
          "z"
        ],
        "answer": "od",
        "why": "Anny — родительный, а его требует od. После niż имя стояло бы в словарной форме: niż Anna.",
        "hint": "Форма имени после пропуска и решает 📏"
      },
      {
        "type": "choice",
        "q": "Codziennie ___ do pracy pieszo.",
        "opts": [
          "idę",
          "jadę",
          "jeżdżę",
          "chodzę"
        ],
        "answer": "chodzę",
        "why": "Codziennie — регулярность, pieszo — пешком: chodzę. Idę означало бы одно движение прямо сейчас.",
        "hint": "«Каждый день хожу», а не «иду» — русская логика работает 🚶"
      },
      {
        "type": "choice",
        "q": "___ mnie zęby. <i style='opacity:.6'>у меня болят зубы</i>",
        "opts": [
          "Bolą",
          "Boli",
          "Bolę",
          "Boleją"
        ],
        "answer": "Bolą",
        "why": "Зубов много — значит bolą, как русское «болят». И человек стоит в винительном: mnie.",
        "hint": "Одно болит — boli, несколько — другая форма 🦷"
      },
      {
        "type": "choice",
        "q": "___ tego — za drogo. <i style='opacity:.6'>не покупай это</i>",
        "opts": [
          "Nie kup",
          "Nie kupuj",
          "Nie kupisz",
          "Nie kupować"
        ],
        "answer": "Nie kupuj",
        "why": "Запрет требует несовершенного вида: nie kupuj. Ровно как русское «не покупай», а не «не купи».",
        "hint": "После nie приказ всегда меняет вид 🚫"
      },
      {
        "type": "choice",
        "q": "Czy ___ pan powtórzyć? <i style='opacity:.6'>Вы не могли бы повторить?</i>",
        "opts": [
          "mógłbyś",
          "mogłaby",
          "mógłby",
          "mógł"
        ],
        "answer": "mógłby",
        "why": "С pan идёт форма третьего лица: mógłby pan. Mógłbyś — это «ты мог бы», mogłaby — женская форма.",
        "hint": "Вежливое «Вы» ведёт себя как «он» 🙏"
      },
      {
        "type": "choice",
        "q": "Masz ___. <i style='opacity:.6'>ты прав</i>",
        "opts": [
          "racji",
          "racja",
          "racją",
          "rację"
        ],
        "answer": "rację",
        "why": "«Быть правым» по-польски — mieć rację (винительный). Форма racji нужна в отрицании: nie masz racji.",
        "hint": "Это не «иметь рацию» — а фраза без отрицания берёт винительный 📻"
      },
      {
        "type": "choice",
        "q": "___, że Marek szuka pracy. <i style='opacity:.6'>я знаю</i>",
        "opts": [
          "Wiem",
          "Znam",
          "Umiem",
          "Poznaję"
        ],
        "answer": "Wiem",
        "why": "Всё, что идёт после «что», принадлежит глаголу wiedzieć: wiem, że… Znać работает только с существительным: znam Marka.",
        "hint": "Существительное — znam, целая мысль — другое слово 🧠"
      },
      {
        "type": "choice",
        "q": "Latem jadę ___ Węgry.",
        "opts": [
          "do",
          "na",
          "w",
          "za"
        ],
        "answer": "na",
        "why": "Венгрия входит в короткий список стран с na: na Węgry, na Słowację, na Ukrainę. Остальные страны — do + родительный.",
        "hint": "Соседи-исключения идут с другим предлогом 🗺️"
      },
      {
        "type": "gap",
        "q": "Anna o sobie: Jutro ___ pracowała cały dzień. <i style='opacity:.6'>я буду</i>",
        "accept": [
          "będę",
          "bede"
        ],
        "model": "będę",
        "hint": "Личное окончание живёт здесь, поэтому л-форма дальше идёт голой 📅"
      },
      {
        "type": "gap",
        "q": "Uczę się ___ już rok. <i style='opacity:.6'>польский</i>",
        "accept": [
          "polskiego"
        ],
        "model": "polskiego",
        "hint": "Этот глагол требует родительного 📚"
      },
      {
        "type": "gap",
        "q": "Pracuję ___ kelner w restauracji. <i style='opacity:.6'>официантом</i>",
        "accept": [
          "jako"
        ],
        "model": "jako",
        "hint": "После этого словечка профессия остаётся в словарной форме 🧑‍🍳"
      },
      {
        "type": "gap",
        "q": "Marzę ___ podróży do Włoch. <i style='opacity:.6'>о путешествии</i>",
        "accept": [
          "o"
        ],
        "model": "o",
        "hint": "Предлог и падеж тут совпадают с русским полностью ✨"
      },
      {
        "type": "gap",
        "q": "Pięć lat ___ przyjechałam do Polski. <i style='opacity:.6'>назад</i>",
        "accept": [
          "temu"
        ],
        "model": "temu",
        "hint": "Это слово стоит после отрезка времени, как русское «назад» ⏳"
      },
      {
        "type": "trRE",
        "ru": "Я не мог прийти.",
        "accept": [
          "nie mogłem przyjść",
          "nie moglem przyjsc",
          "nie mogłem przyjsc",
          "nie moglem przyjść"
        ],
        "model": "Nie mogłem przyjść.",
        "hint": "Говорит мужчина, и буква ó тут не нужна 🙂"
      },
      {
        "type": "trRE",
        "ru": "Спасибо тебе за подарок.",
        "accept": [
          "dziękuję ci za prezent",
          "dziekuje ci za prezent",
          "dziękuje ci za prezent",
          "dziękuję ci bardzo za prezent"
        ],
        "model": "Dziękuję ci za prezent.",
        "hint": "Спасибо кому — дательный, за что — после za форма не меняется 🎁"
      },
      {
        "type": "trRE",
        "ru": "Я ищу работу.",
        "accept": [
          "szukam pracy"
        ],
        "model": "Szukam pracy.",
        "hint": "Этот глагол требует родительного, хотя по-русски просится винительный 🔎"
      },
      {
        "type": "trRE",
        "ru": "Я хотела бы поговорить.",
        "accept": [
          "chciałabym porozmawiać",
          "chcialabym porozmawiac",
          "chciałabym porozmawiac",
          "chcialabym porozmawiać"
        ],
        "model": "Chciałabym porozmawiać.",
        "hint": "Частица by клеится к л-форме и забирает личное окончание себе 🙏"
      },
      {
        "type": "trER",
        "en": "Nie masz racji.",
        "accept": [
          "ты не прав",
          "ты не права",
          "ты неправ",
          "ты ошибаешься"
        ],
        "model": "Ты не прав.",
        "hint": "Racja — это правота, а не рация 📻"
      },
      {
        "type": "trER",
        "en": "Wczoraj zdawałam egzamin.",
        "accept": [
          "вчера я сдавала экзамен",
          "вчера сдавала экзамен",
          "я вчера сдавала экзамен"
        ],
        "model": "Вчера я сдавала экзамен.",
        "hint": "Вид тут работает как в русском: итог ещё не назван ✅"
      },
      {
        "type": "trER",
        "en": "Poproszę bilet do Gdańska.",
        "accept": [
          "билет до гданьска пожалуйста",
          "мне пожалуйста билет до гданьска",
          "пожалуйста билет до гданьска",
          "билет до гданьска",
          "мне билет до гданьска пожалуйста"
        ],
        "model": "Билет до Гданьска, пожалуйста.",
        "hint": "Poproszę — вежливое «мне, пожалуйста» 🎫"
      },
      {
        "type": "order",
        "answer": "ci studenci byli bardzo mili",
        "accept": [
          "ci studenci byli bardzo mili"
        ],
        "hintRu": "Собери: «Эти студенты были очень приятные.»",
        "hint": "О мужчинах согласуется всё сразу: ci · byli · mili 👨‍🎓"
      },
      {
        "type": "order",
        "answer": "w sobotę pojadę nad morze",
        "accept": [
          "w sobotę pojadę nad morze",
          "pojadę nad morze w sobotę"
        ],
        "hintRu": "Собери: «В субботу я поеду на море.»",
        "hint": "Приставка po- даёт будущее, а «куда» — nad morze 🌊"
      },
      {
        "type": "order",
        "answer": "nie zgadzam się z tobą",
        "accept": [
          "nie zgadzam się z tobą",
          "z tobą się nie zgadzam"
        ],
        "hintRu": "Собери: «Я с тобой не согласен.»",
        "hint": "Глагол возвратный, а после z идёт творительный 🤝"
      },
      {
        "type": "match",
        "q": "Соедини с переводом — тут собрались главные ловушки уровня.",
        "pairs": [
          [
            "mieć rację",
            "быть правым"
          ],
          [
            "recepta",
            "рецепт от врача"
          ],
          [
            "przepis",
            "рецепт блюда"
          ],
          [
            "plecy",
            "спина"
          ],
          [
            "urodziny",
            "день рождения"
          ]
        ],
        "hint": "Все пять похожи на русские слова — и все пять значат не совсем то, что кажется 🙃"
      },
      {
        "type": "match",
        "q": "Соедини выражение с переводом.",
        "pairs": [
          [
            "zdawać egzamin",
            "сдавать экзамен"
          ],
          [
            "zdać egzamin",
            "сдать экзамен"
          ],
          [
            "szukać pracy",
            "искать работу"
          ],
          [
            "znaleźć pracę",
            "найти работу"
          ],
          [
            "marzyć o czymś",
            "мечтать о чём-то"
          ]
        ],
        "hint": "Первые две пары различает только вид — как «сдавать» и «сдать» ✅"
      },
      {
        "type": "describe",
        "prompt": "Расскажи свою историю (3–4 предложения): кто ты сейчас, что было раньше и что будет дальше. Используй najpierw / potem и одно из слов bo · dlatego · ale.",
        "keywords": [
          "jestem",
          "mieszkam",
          "pracuję",
          "najpierw",
          "potem",
          "w końcu",
          "temu",
          "bo",
          "dlatego",
          "ale",
          "będę",
          "zrobię",
          "pojadę",
          "nauczyłem się",
          "nauczyłam się"
        ],
        "minWords": 12,
        "model": "Mam na imię Anna i mieszkam w Krakowie. Pięć lat temu przyjechałam tu na studia. Najpierw pracowałam w kawiarni, potem znalazłam pracę w szkole. W grudniu będę zdawać kolejny egzamin.",
        "hint": "Каркас: кто я → что было → что сейчас → что будет 🧱"
      },
      {
        "type": "describe",
        "prompt": "Напиши 3–4 предложения о будущем: о чём мечтаешь, что собираешься сделать и на что надеешься. Используй marzę o…, zamierzam… и mam nadzieję, że…",
        "keywords": [
          "marzę",
          "marzę o",
          "zamierzam",
          "planuję",
          "mam nadzieję",
          "chciałbym",
          "chciałabym",
          "będę",
          "pojadę",
          "kiedyś",
          "za rok",
          "w przyszłym roku"
        ],
        "minWords": 12,
        "model": "Marzę o podróży do Włoch. Zamierzam oszczędzać przez rok. W maju pojadę nad morze. Mam nadzieję, że kiedyś będę mieszkać bliżej morza.",
        "hint": "Три ступеньки будущего: мечта → намерение → конкретный план 🪜"
      }
    ]
  }
};
