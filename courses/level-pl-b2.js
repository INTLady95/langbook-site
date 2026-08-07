/* Polish B2 — level config, 30-day plan (COURSE) and 4 EXAMS.
   Data only: the shared renderer lives in engine.js.
   preview:false — released course. */
window.LEVEL = {
  code:'B2',
  course:'pl-b2',
  pkey:'langbook-pl-b2-progress',
  preview:false,
  finalNote:'Месяц назад ты учил(а) слова поштучно — а сегодня сам(а) их производишь, пишешь рекламацию и рецензию в один вечер и слышишь разницу между «uprzejmie informuję» и «słuchaj». Марек спросил — Анна сказала «tak». Polski B2 — за плечами. Горжусь тобой 💛',
  speech:'pl-PL',
  langPo:'по-польски',
  langNa:'польский',
  langAdj:'польское',
  phIn:'po polsku…'
};

const COURSE = [
  {wn:'01', wt:'Слово растёт из слова: словообразование и вид вглубь', days:[
    {n:1,t:'Чтение и ожидание',p:'Czytanie, czekanie, spotkanie'},
    {n:2,t:'Взять и говорить',p:'Brać — wziąć'},
    {n:3,t:'Приставка на любом глаголе',p:'Przerobić, posiedzieć'},
    {n:4,t:'Кто и где: фабрика слов',p:'Nauczyciel, kawiarnia'},
    {n:5,t:'Непослушные слова',p:'Muzeum, imię, drzwi'},
    {n:6,t:'Первый день на работе',p:'Pierwszy dzień w pracy'},
    {n:7,t:'Повторение недели 1',p:'Powtórka 1'}
  ]},
  {wn:'02', wt:'Числительные по падежам, фамилии и трудное управление', days:[
    {n:8,t:'Пять по всем падежам',p:'Odmiana liczebników'},
    {n:9,t:'Двое мужчин пришло',p:'Pięciu studentów przyszło'},
    {n:10,t:'Пан Новак и Закопане',p:'Odmiana nazwisk i nazw'},
    {n:11,t:'Зависит от, влияет на',p:'Trudna rekcja'},
    {n:12,t:'Предлоги с оттенками',p:'Przyimki w niuansach'},
    {n:13,t:'Мне нравится, мне удалось',p:'Podoba mi się, udało się'},
    {n:14,t:'Повторение недели 2',p:'Powtórka 2'}
  ]},
  {wn:'03', wt:'Сложное предложение: время, условие, чужие слова, безличность', days:[
    {n:15,t:'Прежде чем, пока не',p:'Zanim, dopóki, aż'},
    {n:16,t:'Разве что, хотя бы',p:'Chyba że, o ile'},
    {n:17,t:'Потому что по-взрослому',p:'Ponieważ, skoro, zatem'},
    {n:18,t:'Я бы попросил',p:'Tryb przypuszczający II'},
    {n:19,t:'Утверждает, будто',p:'Twierdzi, podobno, rzekomo'},
    {n:20,t:'Говорилось и будет говориться',p:'Bezosobowość w czasach'},
    {n:21,t:'Повторение недели 3',p:'Powtórka 3'}
  ]},
  {wn:'04', wt:'Взрослый мир: карьера, жанры, идиомы и большой финал', days:[
    {n:22,t:'Резюме и мотивация',p:'CV i list motywacyjny'},
    {n:23,t:'Здоровье всерьёз',p:'Zdrowie i badania'},
    {n:24,t:'Ремонт и рекламация',p:'Remont i reklamacja'},
    {n:25,t:'Экология и рассуждение',p:'Ekologia i rozprawka'},
    {n:26,t:'Идиомы и ложные друзья',p:'Frazeologia'},
    {n:27,t:'Рецензия',p:'Recenzja'},
    {n:28,t:'Официально и по-свойски',p:'Style i rejestry'},
    {n:29,t:'Большая история',p:'Wielka opowieść'},
    {n:30,t:'Уверенно о сложном',p:'Pewnie o trudnym'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя B2 позади — и польский перестал продавать слова поштучно. 25 заданий: отглагольные существительные и обороты с ними, пары brać/wziąć и znajdować/znaleźć, вид в приказе, приставки на любом глаголе, фабрика слов, непослушные muzeum и drzwi, первый день в офисе. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Отглагольные существительные: czyt<b>anie</b> · mówi<b>enie</b> · my<b>cie</b> · wyj<b>ście</b> · вид сохраняется: czytanie ≠ <b>przeczytanie</b> · исключение <b>otwarcie</b> (формы «otworzenie» в языке нет)",
      "Обороты: <b>po</b> przeczytani<b>u</b> (предл.) · <b>przed</b> wyjści<b>em</b> (твор.) · <b>podczas</b> czekani<b>a</b> (род.) · coś <b>do</b> jedzeni<b>a</b> · родительный мн. короткий: pięć <b>spotkań</b>, pięć <b>mieszkań</b>",
      "Супплетивные пары: brać/wziąć — <b>wezmę · weź · wziął · wzięła</b> · mówić/powiedzieć — <b>powiedzą · powiedz</b> · kłaść/położyć — <b>kładź · połóż</b> · znajdować/znaleźć — <b>znajduję</b> = нахожу, <b>znajdę</b> = найду",
      "Вид в приказе: разовая просьба — совершенный (<b>Weź! Połóż! Zdejmij!</b>) · отрицание — несовершенный (<b>Nie bierz! Nie kładź!</b>) · приглашение — несовершенный (<b>Siadaj. Wchodź. Częstuj się.</b>) · вежливо: <b>Proszę usiąść</b>",
      "Многократные: <b>bywać · jadać · miewać · widywać</b> — Bywam tam raz w miesiącu ≠ Jestem tam teraz · книжные pisywać, czytywać — только узнавать",
      "Приставки: <b>prze-</b> заново или чрезмерно · <b>po-</b> немного · <b>do-</b> до конца · <b>roz-</b> раз- · <b>za-</b> начало и фиксация · <b>wy-</b> до результата · <b>od-</b> обратно · <b>s-</b> перед глухими (spakować), <b>z-</b> перед звонкими (zjeść)",
      "Шесть ловушек недели: <b>przeczytać</b> = прочитать, перечитать — przeczytać jeszcze raz · <b>zapomnieć</b> = забыть, <b>zapamiętać</b> = запомнить · <b>zamieszkać</b> без się · <b>odpisać</b> = ответить письменно · <b>miłość</b> = любовь · <b>sklep</b> = магазин",
      "Фабрика слов: -arz (lekarz) · -acz (tłumacz) · -nik (pracownik) · -ciel (nauczyciel) · -ca — <b>kierowca, z kierowcą</b> · pracownik → <b>pracownica</b> · sprzedawca → <b>sprzedawczyni</b> · после <b>pani</b> должность не склоняется: <b>z panią dyrektor</b>",
      "Места и качества: kawi<b>arnia</b> · księg<b>arnia</b> · piek<b>arnia</b> · cuki<b>ernia</b> · pralnia · siłownia · родительный: do <b>księgarni</b>, z <b>kawiarni</b> · -ość: wolność, możliwość, <b>miłość</b>",
      "Непослушные слова: muzeum → <b>muzea, muzeów, muzeach</b> · imię → <b>imiona</b> · zwierzę → <b>zwierzęta</b> · ręce, <b>rąk</b> · oczy, <b>oczu</b> · przyjaciele, <b>przyjaciół, przyjaciółmi</b> · rok → <b>lata, lat</b> · <b>drzwi, spodnie, okulary</b> + <b>jedne</b>",
      "Офис: <b>panie Marku</b> (не panie Kowalski) · Dzień dobry… → <b>Pozdrawiam serdecznie</b> · umowa <b>o pracę</b> · na cały <b>etat</b> · <b>kadry</b> · <b>termin</b> = срок · <b>zajmować się</b> + твор. · <b>odpowiadać za</b> ≠ <b>odpowiadać na</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "___ wystawy odbędzie się w piątek o osiemnastej. <i style='opacity:.6'>открытие выставки</i>",
        "opts": ["Otwarcie", "Otworzenie", "Otwieranie", "Otwartość"],
        "answer": "Otwarcie",
        "why": "У otworzyć существительное неправильное: <b>otwarcie</b>. Формы «otworzenie» в языке нет, otwieranie — это процесс открывания, а otwartość — открытость характера.",
        "hint": "Одно из тех слов, которые надо знать в лицо: событие в календаре 🎟️"
      },
      {
        "type": "choice",
        "q": "Po ___ listu usiadła przy oknie. <i style='opacity:.6'>после прочтения письма</i>",
        "opts": ["przeczytaniu", "przeczytania", "przeczytanie", "przeczytaniem"],
        "answer": "przeczytaniu",
        "why": "После po — предложный падеж: po przeczytaniu, po spotkaniu, po wyjściu. Родительный идёт после podczas, творительный — после przed.",
        "hint": "Существительное на -anie склоняется как okno: po oknie — po przeczytaniu ✉️"
      },
      {
        "type": "choice",
        "q": "Marek: ___ parasol, na wszelki wypadek. <i style='opacity:.6'>возьму зонт</i>",
        "opts": ["Wezmę", "Wezmiem", "Weźmę", "Wziąłem"],
        "answer": "Wezmę",
        "why": "У wziąć в первом лице основа wezm-: <b>wezmę</b>, а ź появляется дальше — weźmiesz, weźmie. Формы «wezmiem» и «weźmę» не существует, wziąłem — это прошедшее.",
        "hint": "wezmę, ale weźmiesz — первая форма без ź ☔"
      },
      {
        "type": "choice",
        "q": "Zwykle ___ takie książki w internecie. <i style='opacity:.6'>обычно нахожу</i>",
        "opts": ["znajduję", "znajdę", "znalazłam", "znajdź"],
        "answer": "znajduję",
        "why": "Ловушка пары: <b>znajduję</b> = «нахожу» (несовершенный вид), а <b>znajdę</b> — это уже «найду», будущее. Znalazłam — «нашла», znajdź — «найди».",
        "hint": "Zwykle значит «обычно» — привычка, а не один раз 🔎"
      },
      {
        "type": "choice",
        "q": "___ tej dużej torby, weź mniejszą. <i style='opacity:.6'>не бери эту большую сумку</i>",
        "opts": ["Nie bierz", "Nie weź", "Nie wziąć", "Nie bierzesz"],
        "answer": "Nie bierz",
        "why": "В отрицательном приказе польский всегда берёт несовершенный вид: <b>Nie bierz. Nie kładź. Nie mów.</b> Совершенный остаётся для просьбы без «не»: Weź, Połóż.",
        "hint": "Weź! — но Nie bierz! Ровно как «возьми» и «не бери» 🎒"
      },
      {
        "type": "choice",
        "q": "«Я перечитал этот текст ещё раз» —",
        "opts": ["Przeczytałem ten tekst jeszcze raz", "Przeczytałem ten tekst", "Poczytałem ten tekst", "Doczytałem ten tekst"],
        "answer": "Przeczytałem ten tekst jeszcze raz",
        "why": "Главная ловушка приставок: <b>przeczytać</b> значит «прочитать до конца», а не «перечитать». «Перечитать» — это przeczytać <b>jeszcze raz</b>. Poczytać — почитать немного, doczytać — дочитать остаток.",
        "hint": "Приставка prze- совпадает с русским «пере-» далеко не всегда 📖"
      },
      {
        "type": "choice",
        "q": "___ to nazwisko, przyda się. <i style='opacity:.6'>запомни эту фамилию</i>",
        "opts": ["Zapamiętaj", "Zapomnij", "Zapominaj", "Przypomnij"],
        "answer": "Zapamiętaj",
        "why": "Тройка, которую надо развести: pamiętać — помнить, <b>zapamiętać</b> — запомнить, <b>zapomnieć</b> — забыть. Przypomnij значит «напомни».",
        "hint": "Похоже на «запомнить», но по-польски забыть — zapomnieć 🧠"
      },
      {
        "type": "choice",
        "q": "___ godzinę i odłożyłam książkę. <i style='opacity:.6'>почитала часок</i>",
        "opts": ["Poczytałam", "Przeczytałam", "Doczytałam", "Odczytałam"],
        "answer": "Poczytałam",
        "why": "Приставка po- значит «немного, некоторое время»: poczytać, posiedzieć, pospacerować. Przeczytałam — прочитала целиком, doczytałam — дочитала остаток.",
        "hint": "Час — это «немного», а не «до конца» 📚"
      },
      {
        "type": "choice",
        "q": "___ walizkę już wczoraj wieczorem. <i style='opacity:.6'>я упаковал чемодан</i>",
        "opts": ["Spakowałem", "Zpakowałem", "Rozpakowałem", "Wypakowałem"],
        "answer": "Spakowałem",
        "why": "Русское «с-» по-польски пишется <b>s-</b> перед глухими (spakować, sprawdzić, schować) и <b>z-</b> перед звонкими (zjeść, zrobić). Формы «zpakować» нет, rozpakować — распаковать.",
        "hint": "После приставки идёт глухая p — значит s- 🧳"
      },
      {
        "type": "choice",
        "q": "Rozmawiałam z ___ pół godziny. <i style='opacity:.6'>с водителем</i>",
        "opts": ["kierowcą", "kierowcem", "kierownikiem", "kierowcy"],
        "answer": "kierowcą",
        "why": "Слова на -ca мужского рода, но склоняются по женскому образцу: kierowca, kierowcy, kierowcę, <b>kierowcą</b>. Kierownik — это руководитель, а не водитель.",
        "hint": "Как kobieta: z kobietą — z kierowcą 🚕"
      },
      {
        "type": "choice",
        "q": "Rozmawiałem wczoraj z ___ o nowym dziale. <i style='opacity:.6'>с пани директором</i>",
        "opts": ["panią dyrektor", "panią dyrektorką", "panią dyrektorem", "pani dyrektor"],
        "answer": "panią dyrektor",
        "why": "После <b>pani</b> название должности не склоняется: z panią dyrektor, z panią doktor, z panią redaktor. Склоняется только само слово pani.",
        "hint": "Женская должность после pani застывает — двигается только pani 👔"
      },
      {
        "type": "gap",
        "q": "___ wyjściem zgaś światło. <i style='opacity:.6'>перед выходом — впиши предлог</i>",
        "accept": ["Przed", "przed"],
        "model": "Przed",
        "hint": "Здесь нужен предлог, а форма творительного уже стоит 💡"
      },
      {
        "type": "gap",
        "q": "Byliśmy w dwóch ___ w jeden dzień. <i style='opacity:.6'>в двух музеях (muzeum)</i>",
        "accept": ["muzeach"],
        "model": "muzeach",
        "hint": "В единственном числе слово не меняется, зато во множественном оживает: muzea, muzeów, muzeach 🏛️"
      },
      {
        "type": "gap",
        "q": "Poznałam jego ___ i zapamiętałam trzy imiona. <i style='opacity:.6'>его друзей (przyjaciel)</i>",
        "accept": ["przyjaciół", "przyjaciol"],
        "model": "przyjaciół",
        "hint": "Родительный и винительный множественного у этого слова с ó 👥"
      },
      {
        "type": "gap",
        "q": "Odpowiadam ___ promocję jednego tytułu. <i style='opacity:.6'>отвечаю за промоцию — впиши предлог</i>",
        "accept": ["za"],
        "model": "za",
        "hint": "«Отвечать за» и «отвечать на» — два разных предлога, и второй тут не подойдёт 📌"
      },
      {
        "type": "gap",
        "q": "Nasz dział zajmuje się ___ dla dzieci. <i style='opacity:.6'>книгами (książki)</i>",
        "accept": ["książkami", "ksiazkami"],
        "model": "książkami",
        "hint": "Zajmować się требует творительного падежа 📕"
      },
      {
        "type": "trRE",
        "ru": "Мы живём здесь уже три года.",
        "accept": ["mieszkamy tu od trzech lat", "mieszkamy tutaj od trzech lat", "mieszkamy tu od trzech lat.", "mieszkamy tutaj od trzech lat."],
        "model": "Mieszkamy tu od trzech lat.",
        "hint": "У rok во множественном другой корень, а «уже три года» просит предлог od 🏠"
      },
      {
        "type": "trRE",
        "ru": "Дверь открыта, входи.",
        "accept": ["drzwi są otwarte wchodź", "drzwi sa otwarte wchodz", "drzwi są otwarte, wchodź", "drzwi sa otwarte, wchodz", "drzwi są otwarte, wejdź", "drzwi sa otwarte, wejdz"],
        "model": "Drzwi są otwarte, wchodź.",
        "hint": "Единственного числа у этого слова нет, поэтому и глагол, и прилагательное во множественном 🚪"
      },
      {
        "type": "trRE",
        "ru": "Я иду в книжный магазин за словарём.",
        "accept": ["idę do księgarni po słownik", "ide do ksiegarni po slownik", "idę do księgarni po słownik.", "ide do ksiegarni po slownik."],
        "model": "Idę do księgarni po słownik.",
        "hint": "Книжный магазин — одно слово на -arnia, а «за чем-то» — это po с винительным 📗"
      },
      {
        "type": "trER",
        "en": "Bywam tam raz w miesiącu.",
        "accept": ["я бываю там раз в месяц", "бываю там раз в месяц", "я бываю там раз в месяц.", "я там бываю раз в месяц"],
        "model": "Я бываю там раз в месяц.",
        "hint": "Bywać — это не «быть сейчас», а «бывать время от времени» ☕"
      },
      {
        "type": "trER",
        "en": "Termin mija w piątek.",
        "accept": ["срок истекает в пятницу", "срок истекает в пятницу.", "срок заканчивается в пятницу", "срок выходит в пятницу"],
        "model": "Срок истекает в пятницу.",
        "hint": "Termin в офисе — это срок или назначенное время, а не «термин» ⏳"
      },
      {
        "type": "order",
        "answer": "Podczas spotkania nie patrz w telefon",
        "accept": ["Podczas spotkania nie patrz w telefon", "Nie patrz w telefon podczas spotkania"],
        "hintRu": "Собери: «Во время встречи не смотри в телефон.»",
        "hint": "После podczas — родительный падеж, а отрицательный приказ берёт несовершенный вид 📵"
      },
      {
        "type": "order",
        "answer": "Panie Marku ma pan chwilę",
        "accept": ["Panie Marku ma pan chwilę", "Ma pan chwilę panie Marku"],
        "hintRu": "Собери: «Пан Марек, есть у вас минутка?»",
        "hint": "К коллеге обращаются по имени в звательном, а глагол идёт в третьем лице 🖇️"
      },
      {
        "type": "match",
        "q": "Соедини название места с переводом.",
        "pairs": [
          ["kawiarnia", "кафе"],
          ["księgarnia", "книжный магазин"],
          ["piekarnia", "пекарня"],
          ["cukiernia", "кондитерская"],
          ["pralnia", "прачечная"]
        ],
        "hint": "Все пять сделаны из знакомых слов: kawa, książka, piec, cukier, prać 🥐"
      },
      {
        "type": "describe",
        "prompt": "Напиши 3–4 предложения по-польски о своём рабочем или учебном дне: что ты делаешь перед выходом из дома, что во время встречи или занятия, что после. Используй обороты przed / podczas / po с отглагольными существительными и скажи, чем ты занимаешься (zajmuję się…).",
        "keywords": ["przed", "podczas", "po", "wyjściem", "spotkaniu", "spotkania", "zebraniu", "zajmuję się", "odpowiadam za", "szkoleniu"],
        "minWords": 12,
        "model": "Przed wyjściem z domu sprawdzam listę rzeczy do zrobienia. Podczas zebrania notuję wszystko, a po spotkaniu piszę mail do autorki. Zajmuję się korektą i odpowiadam za jeden tytuł.",
        "hint": "Каркас: Przed wyjściem… Podczas zebrania… Po spotkaniu… Zajmuję się… 💛"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Неделя точности пройдена. 25 заданий: числительные по всем падежам, «пятеро пришло» в среднем роде, фамилии и города, трудное управление, предлоги с оттенками и дативные обороты с się. Наберёшь 80% — открою Неделю 3. 💛",
    "review": [
      "Числительные 2–4: род.+предл. <b>dwóch · trzech · czterech</b> · дат. <b>dwóm · trzem · czterem</b> · твор. <b>dwoma · trzema · czterema</b> — один набор на все роды",
      "От пяти всего две формы: <b>-u</b> (род., дат., предл.) и <b>-oma</b> (твор.): <b>pięciu · pięcioma</b>, <b>kilku · kilkoma</b>, <b>wielu · wieloma</b>, <b>ilu · iloma</b> · <b>od pięciu lat</b> · книжное <b>przed dwoma laty</b>",
      "Женская двойка только в творительном: z <b>dwiema</b> koleżankami, но z <b>dwoma</b> braćmi · оба: <b>obiema</b> rękami · <b>oboma</b> kolegami · в остальных падежах <b>obu</b>",
      "Годы: склоняется только хвост — <b>w dwa tysiące dwudziestym szóstym roku</b>, <b>od dwa tysiące dwudziestego roku</b>, <b>w tysiąc dziewięćset dziewięćdziesiątym roku</b>",
      "Мужско-личные: <b>dwaj studenci przyszli</b>, но <b>dwóch studentów przyszło</b> и <b>pięciu studentów przyszło</b> — глагол в единственном числе среднего рода",
      "Женщины и вещи: до четырёх обычное мн. ч. (<b>dwie koleżanki przyszły</b>), от пяти род. мн. + средний род (<b>pięć koleżanek przyszło</b>) · так же dużo, kilka, wiele · <b>wielu gości przyszło</b> · <b>większość gości wyszła</b>",
      "Фамилии: <b>pana Kowalskiego · z panią Kowalską · państwa Kowalskich</b> · <b>z panem Nowakiem</b>, но <b>z panią Nowak</b> (не склоняется) · <b>państwa Nowaków</b> · <b>ulica Kościuszki</b> · в обращении фамилия не гнётся: <b>Panie Nowak!</b>",
      "Города: <b>w Krakowie · we Wrocławiu · w Katowicach</b> · обе части: <b>w Białymstoku</b> · особая форма: <b>w Zakopanem</b> (не «w Zakopanym») · <b>nad morze / nad morzem</b>, <b>na Mazury / na Mazurach</b>",
      "Управление: <b>polegać na</b> + предл. · <b>przyzwyczaić się do</b> + род. · <b>korzystać z</b> + род. · <b>dążyć do</b> · <b>pytać / prosić / dbać / martwić się o</b> + вин. · <b>chodzi o</b> · род.-магнит: szukać, potrzebować, używać, słuchać · отрицание тянет родительный: <b>Nie mam czasu</b>",
      "Предлоги: <b>przez tydzień</b> (весь отрезок) ≠ <b>w ciągu tygodnia</b> (где-то внутри) · <b>za dwa dni</b> = через два дня · <b>krem dla dzieci</b> ≠ <b>krem do rąk</b> · <b>dzięki</b> + дат. (о хорошем) · <b>z powodu</b> + род. · <b>przez</b> + вин. (упрёк) · <b>z domu do pracy</b>",
      "Дативные обороты: <b>podoba mi się</b> / <b>podobają mi się</b> · <b>udało mi się</b> + инф. · <b>chce mi się</b> · <b>przyda mi się</b> · <b>brakuje / szkoda / przykro mi</b> · <b>zależy mi na</b> + предл. ≠ <b>zależeć od</b> + род. · <b>mi</b> перед <b>się</b>, в начале фразы — <b>mnie</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Pięciu studentów ___ na spotkanie. <i style='opacity:.6'>пятеро студентов пришло</i>",
        "opts": ["przyszło", "przyszli", "przyszła", "przyszły"],
        "answer": "przyszło",
        "why": "Главная ловушка недели: при формах dwóch, trzech, pięciu глагол встаёт в единственное число среднего рода — <b>przyszło, czekało, było</b>. Przyszli было бы только с dwaj studenci.",
        "hint": "Русское «пятеро студентов пришло» подсказывает форму 🎓"
      },
      {
        "type": "choice",
        "q": "Dwaj autorzy już ___ tekst. <i style='opacity:.6'>двое авторов прислали текст</i>",
        "opts": ["przysłali", "przysłało", "przysłał", "przysłały"],
        "answer": "przysłali",
        "why": "У формы <b>dwaj</b> оба слова в именительном, поэтому и глагол обычный, множественного числа: dwaj autorzy przysłali. Средний род появляется только при dwóch autorów.",
        "hint": "Dwaj — единственный случай, когда глагол ведёт себя «нормально» ✍️"
      },
      {
        "type": "choice",
        "q": "Marek przyjechał z ___. <i style='opacity:.6'>с двумя братьями</i>",
        "opts": ["dwoma braćmi", "dwiema braćmi", "dwóch braćmi", "dwa braćmi"],
        "answer": "dwoma braćmi",
        "why": "Творительный двойки — <b>dwoma</b>; форма <b>dwiema</b> существует только для женского рода (z dwiema koleżankami). Dwóch — родительный и предложный.",
        "hint": "Dwiema — только про женщин, а тут братья 👬"
      },
      {
        "type": "choice",
        "q": "Marek pracuje w tej firmie od ___ lat. <i style='opacity:.6'>уже пять лет</i>",
        "opts": ["pięciu", "pięć", "pięcioma", "pięciom"],
        "answer": "pięciu",
        "why": "Od требует родительного, а у числительных от пяти родительный — форма на -u: <b>od pięciu lat</b>. Pięcioma — творительный, pięciom формы нет.",
        "hint": "Od pięciu lat — устойчивая связка, её стоит запомнить целиком 📅"
      },
      {
        "type": "choice",
        "q": "Książka ukaże się ___ roku. <i style='opacity:.6'>в две тысячи двадцать шестом году</i>",
        "opts": ["w dwa tysiące dwudziestym szóstym", "w dwóch tysiącach dwudziestym szóstym", "w dwa tysiące dwadzieścia sześć", "w dwa tysiącu dwudziestym szóstym"],
        "answer": "w dwa tysiące dwudziestym szóstym",
        "why": "В годах склоняется только хвост — десятки и единицы: <b>w dwa tysiące dwudziestym szóstym roku</b>. Тысячи и сотни остаются неподвижными.",
        "hint": "Начало года стоит как вкопанное, работает только конец 📆"
      },
      {
        "type": "choice",
        "q": "Rozmawiałam ___ o remoncie. <i style='opacity:.6'>с пани Новак</i>",
        "opts": ["z panią Nowak", "z panią Nowakową", "z panią Nowaką", "z panią Nowakiem"],
        "answer": "z panią Nowak",
        "why": "Женская фамилия на согласный не склоняется вообще: pani Nowak, do pani Nowak, <b>z panią Nowak</b>. Падеж виден только по слову pani. Nowakowa — старая форма «жена Новака».",
        "hint": "Мужчина — z panem Nowakiem, женщина — фамилия застывает 🧾"
      },
      {
        "type": "choice",
        "q": "___ leży już śnieg. <i style='opacity:.6'>в Закопане</i>",
        "opts": ["W Zakopanem", "W Zakopanym", "W Zakopane", "W Zakopanego"],
        "answer": "W Zakopanem",
        "why": "Zakopane склоняется как прилагательное среднего рода, но в предложном сохраняет старое окончание: <b>w Zakopanem</b>. Do Zakopanego — родительный.",
        "hint": "Одна буква -em, и ты звучишь как местный 🏔️"
      },
      {
        "type": "choice",
        "q": "Trudno przyzwyczaić się ___ hałasu. <i style='opacity:.6'>привыкнуть к шуму — выбери предлог</i>",
        "opts": ["do", "na", "w", "z"],
        "answer": "do",
        "why": "Русский дательный здесь не работает: польский глагол требует <b>przyzwyczaić się do</b> + родительный. Так же przygotować się do, dążyć do.",
        "hint": "Привыкнуть «к» по-польски — привыкнуть «до» 🔊"
      },
      {
        "type": "choice",
        "q": "Sąsiedzi pytali ___. <i style='opacity:.6'>спрашивали о дате</i>",
        "opts": ["o datę", "o dacie", "datę", "o daty"],
        "answer": "o datę",
        "why": "Pytać o требует винительного, а не предложного: <b>pytać o datę, o termin</b>. Так же prosić o, dbać o, martwić się o.",
        "hint": "Русское «о чём» соблазняет на предложный — а тут винительный ❓"
      },
      {
        "type": "choice",
        "q": "Potrzebuję kremu ___. <i style='opacity:.6'>крем для рук</i>",
        "opts": ["do rąk", "dla rąk", "na rękach", "od rąk"],
        "answer": "do rąk",
        "why": "Dla — только про живого получателя (krem <b>dla</b> dzieci), а назначение вещи передаёт do: <b>krem do rąk</b>, pasta do zębów, płyn do naczyń.",
        "hint": "Для человека — dla, для предмета или части тела — do 🧴"
      },
      {
        "type": "choice",
        "q": "___ mi się te zdjęcia. <i style='opacity:.6'>мне нравятся эти фотографии</i>",
        "opts": ["Podobają", "Podoba", "Podobam", "Podobało"],
        "answer": "Podobają",
        "why": "Глагол согласуется не с тобой, а с тем, что нравится: podoba mi się <b>ta książka</b>, но <b>podobają</b> mi się te zdjęcia.",
        "hint": "Нравится не ты — нравится оно тебе 📷"
      },
      {
        "type": "gap",
        "q": "Zależy mi ___ tej pracy. <i style='opacity:.6'>мне важна эта работа — впиши предлог</i>",
        "accept": ["na"],
        "model": "na",
        "hint": "Zależy mi… и zależeć od… — разные обороты, и здесь не od 💼"
      },
      {
        "type": "gap",
        "q": "Nie przyszedł ___ deszczu. <i style='opacity:.6'>из-за дождя — впиши два слова</i>",
        "accept": ["z powodu"],
        "model": "z powodu",
        "hint": "Dzięki говорят только о хорошем, а дождь помешал ☔"
      },
      {
        "type": "gap",
        "q": "Na jubileusz przyszło ___ gości. <i style='opacity:.6'>много гостей — форма для мужской компании</i>",
        "accept": ["wielu"],
        "model": "wielu",
        "hint": "Wiele — про вещи и женщин, а про мужчин форма на -u 🎉"
      },
      {
        "type": "gap",
        "q": "Byliśmy u państwa ___ w sobotę. <i style='opacity:.6'>у пана и пани Ковальских (Kowalscy)</i>",
        "accept": ["Kowalskich", "kowalskich"],
        "model": "Kowalskich",
        "hint": "Фамилия на -ski ведёт себя как прилагательное, а у państwo здесь родительный 🏡"
      },
      {
        "type": "gap",
        "q": "Jej rodzice mieszkają w ___. <i style='opacity:.6'>в Белостоке (Białystok)</i>",
        "accept": ["Białymstoku", "Bialymstoku", "białymstoku", "bialymstoku"],
        "model": "Białymstoku",
        "hint": "В названии спрятаны «белый» и «склон» — склоняются обе половины 🏙️"
      },
      {
        "type": "trRE",
        "ru": "Мне удалось сдать текст вовремя.",
        "accept": ["udało mi się oddać tekst na czas", "udalo mi sie oddac tekst na czas", "udało mi się oddać tekst na czas.", "udalo mi sie oddac tekst na czas."],
        "model": "Udało mi się oddać tekst na czas.",
        "hint": "У этого оборота нет подлежащего, поэтому форма всегда среднего рода ⏱️"
      },
      {
        "type": "trRE",
        "ru": "Я пользуюсь этим словарём каждый день.",
        "accept": ["używam tego słownika codziennie", "uzywam tego slownika codziennie", "codziennie używam tego słownika", "codziennie uzywam tego slownika"],
        "model": "Używam tego słownika codziennie.",
        "hint": "Русский творительный тут не работает: używać — глагол-магнит родительного 📘"
      },
      {
        "type": "trRE",
        "ru": "Из дома до работы иду двадцать минут.",
        "accept": ["z domu do pracy idę dwadzieścia minut", "z domu do pracy ide dwadziescia minut", "z domu do pracy idę dwadzieścia minut.", "z domu do pracy ide dwadziescia minut."],
        "model": "Z domu do pracy idę dwadzieścia minut.",
        "hint": "Про расстояние говорят z… do…, а od… do… остаётся для времени и людей 🚶"
      },
      {
        "type": "trER",
        "en": "Bardzo mi się podoba nowa praca.",
        "accept": ["мне очень нравится новая работа", "мне очень нравится новая работа.", "новая работа мне очень нравится", "мне очень нравится эта новая работа"],
        "model": "Мне очень нравится новая работа.",
        "hint": "Короткие mi и się не любят начало фразы, поэтому вперёд вышло bardzo 💛"
      },
      {
        "type": "trER",
        "en": "Większość gości już wyszła.",
        "accept": ["большинство гостей уже ушло", "большинство гостей уже ушли", "большинство гостей уже ушло.", "большая часть гостей уже ушла"],
        "model": "Большинство гостей уже ушло.",
        "hint": "Większość — слово женского рода и единственного числа, отсюда и форма глагола 🚪"
      },
      {
        "type": "order",
        "answer": "Latem pojedziemy nad morze",
        "accept": ["Latem pojedziemy nad morze", "Pojedziemy latem nad morze"],
        "hintRu": "Собери: «Летом поедем на море.»",
        "hint": "Куда — винительный: nad morze, а «на море» в смысле «где» было бы nad morzem 🌊"
      },
      {
        "type": "order",
        "answer": "Znam dwóch redaktorów z tego wydawnictwa",
        "accept": ["Znam dwóch redaktorów z tego wydawnictwa"],
        "hintRu": "Собери: «Я знаю двух редакторов из этого издательства.»",
        "hint": "В косвенных падежах у мужской компании выбора нет — только dwóch 📚"
      },
      {
        "type": "match",
        "q": "Соедини глагол с тем, что он за собой тянет.",
        "pairs": [
          ["polegać", "na kimś"],
          ["przyzwyczaić się", "do czegoś"],
          ["korzystać", "z czegoś"],
          ["dbać", "o zdrowie"],
          ["zajmować się", "korektą"]
        ],
        "hint": "Три из пяти расходятся с русским — именно они и есть ловушки недели 🧲"
      },
      {
        "type": "describe",
        "prompt": "Напиши 3–4 предложения по-польски о своём городе и соседях: сколько лет ты там живёшь, скольких соседей знаешь, с кем разговариваешь и что тебе нравится в этом месте. Используй склонённое числительное и оборот с podoba mi się.",
        "keywords": ["od", "lat", "dwóch", "trzech", "pięciu", "dwoma", "podoba mi się", "podobają mi się", "zależy mi na", "korzystam z"],
        "minWords": 14,
        "model": "Mieszkam tu od pięciu lat i znam dwóch sąsiadów z mojego piętra. Z dwoma kolegami rozmawiam prawie codziennie. Bardzo podoba mi się ta okolica, bo wszystko mam blisko. Zależy mi na tym, żeby zostać tu dłużej.",
        "hint": "Каркас: Mieszkam tu od… lat. Znam dwóch… Podoba mi się… Zależy mi na… 💛"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя собрала сложное предложение целиком. 25 заданий: zanim и dopóki nie, chyba że и pod warunkiem że, регистры причины от bo до gdyż, полное by и вежливые формулы, чужое слово с podobno и rzekomo, безличность во всех временах. Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Время: <b>zanim</b> — прежде чем, <b>никогда без nie</b> · <b>dopóki</b> — пока · <b>dopóki nie</b> — пока не (единственный союз с nie) · <b>aż</b> — то же «пока не», но <b>без nie</b> и только после главной части · <b>jak tylko / gdy tylko</b> · <b>w chwili, gdy</b> · <b>podczas gdy</b> = в то время как",
      "Союз ↔ существительное: zanim wyjdziesz = <b>przed wyjściem</b> · kiedy skończymy = <b>po skończeniu</b> · dopóki trwa remont = <b>podczas remontu</b> · свернуть можно только при одном и том же действующем лице",
      "Условие: <b>chyba że</b> = разве что (без że — chyba «наверное») · <b>o ile</b> · <b>pod warunkiem że</b> · <b>jeśli tylko</b> · <b>w razie</b> + род. (w razie awarii) — перед существительным, а не перед глаголом",
      "Реально или воображаемо: <b>nawet jeśli będzie padać, pojedziemy</b> · <b>nawet gdyby padało, pojechalibyśmy</b> · <b>choćby</b> = хотя бы, пусть даже · миры смешивать нельзя",
      "Уступка: <b>mimo że · chociaż · choć</b> — одно и то же · перед существительным <b>mimo</b> + род. (mimo deszczu) · во второй части <b>a mimo to</b> · приправы: <b>przecież</b> (ведь), <b>zresztą</b> (впрочем)",
      "Причина по этажам: <b>bo</b> (разг., не открывает сложное предложение) → <b>ponieważ</b> (нейтр., может стоять первым) → <b>gdyż, bowiem</b> (книжн., bowiem — после первого слова) · <b>skoro</b> = раз уж, а не «скоро» (скоро = niedługo)",
      "Следствие и цель: <b>więc · dlatego · zatem · w związku z tym</b> · <b>dlatego</b> = поэтому ≠ <b>dlatego że</b> = потому что · <b>po to, żeby</b> · <b>w celu</b> + род. (w celu ustalenia terminu) · <b>z powodu</b> + род. · <b>dzięki</b> + дат.",
      "Сослагательное: <b>zrobiłbym / zrobiłabym</b> · by ровно одно на предложение: <b>Ja bym tego nie robił</b>, <b>Chętnie bym poszedł</b> · после <b>żeby</b> и <b>gdyby</b> второго by нет · безличные <b>warto by · można by · trzeba by</b> + инфинитив, без личных окончаний · книжное <b>należałoby</b>",
      "Вежливо: <b>Czy mógłbym prosić o</b> + вин. · <b>Chciałbym zapytać o…</b> · <b>Wolałbym…</b> · <b>Czy byłaby pani tak miła…</b> · <b>Na twoim miejscu bym…</b>",
      "Чужое слово: <b>twierdzić, że</b> · <b>przyznać się do</b> + род. · <b>zaprzeczać, że</b> · <b>obiecać, że</b> · <b>zapewniać, że</b> · <b>ostrzegać przed</b> + твор. (не «о»!) · маркеры <b>podobno</b> (нейтрально), <b>rzekomo</b> (с недоверием), <b>niby</b> (с иронией) · источник <b>według</b> + род., <b>jak podaje…</b>",
      "Безличность: <b>mówi się → mówiło się</b> (средний род!) <b>→ będzie się mówić</b> · порядок <b>można było · trzeba będzie · widać było</b> · <b>widać / słychać</b> + вин., <b>czuć</b> + твор. · <b>-no/-to</b> только о прошлом, при отрицании родительный: <b>nie pomalowano ścian</b> · <b>jest budowany</b> (процесс) ≠ <b>został zbudowany</b> (событие) · исполнитель через <b>przez</b> + вин."
    ],
    "q": [
      {
        "type": "choice",
        "q": "___ wyjdziesz, zgaś światło. <i style='opacity:.6'>прежде чем выйдешь</i>",
        "opts": ["Zanim", "Zanim nie", "Dopóki", "Aż"],
        "answer": "Zanim",
        "why": "После <b>zanim</b> частицы nie не бывает никогда — русское «пока не» здесь сбивает. Dopóki значило бы «пока», а aż не открывает предложение.",
        "hint": "Прежде чем — и сразу глагол, без всякого «не» 💡"
      },
      {
        "type": "choice",
        "q": "Poczekaj, ___ wrócę. <i style='opacity:.6'>подожди, пока я не вернусь</i>",
        "opts": ["aż", "aż nie", "zanim nie", "dopóki"],
        "answer": "aż",
        "why": "У <b>aż</b> смысл границы уже внутри слова, поэтому nie после него не нужно. Правильно было бы и «dopóki nie wrócę», но голое dopóki значит «пока» и здесь не подходит.",
        "hint": "Единственный союз недели, который берёт nie, — это dopóki nie ⏳"
      },
      {
        "type": "choice",
        "q": "Pójdziemy na spacer, ___ będzie padać. <i style='opacity:.6'>разве что пойдёт дождь</i>",
        "opts": ["chyba że", "chyba", "o ile", "mimo że"],
        "answer": "chyba że",
        "why": "Оговорку «разве что, если только не» даёт <b>chyba że</b>. Без że слово chyba значит «наверное». O ile здесь перевернуло бы смысл на «если пойдёт дождь, то пойдём гулять».",
        "hint": "Обещание плюс выход себе — и обязательно с że ☔"
      },
      {
        "type": "choice",
        "q": "W razie ___ proszę dzwonić do elektryka. <i style='opacity:.6'>в случае аварии (awaria)</i>",
        "opts": ["awarii", "awaria", "awarię", "awarią"],
        "answer": "awarii",
        "why": "<b>W razie</b> — предлог, он берёт родительный падеж и ставится только перед существительным: w razie potrzeby, w razie awarii, w razie deszczu.",
        "hint": "Если дальше идёт глагол — нужен союз; если одно существительное — этот предлог 🔌"
      },
      {
        "type": "choice",
        "q": "Nawet ___ będzie padać, pojedziemy. <i style='opacity:.6'>даже если пойдёт дождь</i>",
        "opts": ["jeśli", "gdyby", "gdybym", "choćby"],
        "answer": "jeśli",
        "why": "Обе части стоят в обычном будущем, значит мир реальный — <b>nawet jeśli</b>. Nawet gdyby живёт в воображаемом мире: nawet gdyby padało, pojechalibyśmy.",
        "hint": "Будущее время во второй части выдаёт реальный мир 🌧️"
      },
      {
        "type": "choice",
        "q": "Nie przyszedłem, ___ byłem chory. <i style='opacity:.6'>потому что я был болен</i>",
        "opts": ["dlatego że", "dlatego", "więc", "zatem"],
        "answer": "dlatego że",
        "why": "Одно словечко переворачивает предложение: <b>dlatego</b> — «поэтому» (следствие), <b>dlatego że</b> — «потому что» (причина). Więc и zatem тоже дают следствие.",
        "hint": "Дальше идёт причина, а не результат — значит нужно że 🤒"
      },
      {
        "type": "choice",
        "q": "___ już jesteś, pomóż mi. <i style='opacity:.6'>раз уж ты здесь</i>",
        "opts": ["Skoro", "Niedługo", "Dopóki", "Zanim"],
        "answer": "Skoro",
        "why": "<b>Skoro</b> значит «раз уж»: причина, которую собеседник и сам знает. С русским «скоро» оно не связано — «скоро» будет niedługo или wkrótce.",
        "hint": "Ложный друг наоборот: похоже на «скоро», а значит «раз уж» 🙂"
      },
      {
        "type": "choice",
        "q": "Какой вариант правильный? <i style='opacity:.6'>«Так как я был болен, я не пришёл»</i>",
        "opts": ["Ponieważ byłem chory, nie przyszedłem", "Bo byłem chory, nie przyszedłem", "Gdyż byłem chory, nie przyszedłem", "Bowiem byłem chory, nie przyszedłem"],
        "answer": "Ponieważ byłem chory, nie przyszedłem",
        "why": "Сложное предложение открывает только <b>ponieważ</b>. Bo и gdyż всегда идут после главной части, а bowiem вставляется после первого слова: «był bowiem chory».",
        "hint": "Из трёх этажей причины первым может встать только средний 🎚️"
      },
      {
        "type": "choice",
        "q": "Как правильно? <i style='opacity:.6'>«Я бы этого не делал»</i>",
        "opts": ["Ja bym tego nie robił", "Ja bym tego nie robiłbym", "Ja by tego nie robiłbym", "Ja bym tego nie robić"],
        "answer": "Ja bym tego nie robił",
        "why": "By в предложении ровно одно. Если оно уехало вперёд, глагол остаётся голой формой на -ł: <b>Ja bym tego nie robił</b>. Вариант «robiłbym» правилен сам по себе, но тогда bym впереди быть не должно.",
        "hint": "Уехало вперёд — значит на глаголе его больше нет 🧰"
      },
      {
        "type": "choice",
        "q": "Sąsiadka ostrzegła nas ___ tą ekipą. <i style='opacity:.6'>предупредила нас об этой бригаде</i>",
        "opts": ["przed", "o", "przez", "na"],
        "answer": "przed",
        "why": "С существительным ostrzegać идёт только с <b>przed</b> и творительным: ostrzegli nas przed tą ekipą. Русское «предупредить о» здесь не работает.",
        "hint": "Предупреждают «перед» опасностью, а не «о» ней ⚠️"
      },
      {
        "type": "choice",
        "q": "Kiedyś ___ się, że remont trwa wiecznie. <i style='opacity:.6'>раньше говорили</i>",
        "opts": ["mówiło", "mówił", "mówiła", "mówili"],
        "answer": "mówiło",
        "why": "У безличного оборота с się нет подлежащего, поэтому в прошедшем он всегда среднего рода: <b>mówiło się, robiło się, jadło się</b>.",
        "hint": "Некому быть «он» или «она» — остаётся средний род 🗣️"
      },
      {
        "type": "gap",
        "q": "Nie pomalowano ___. <i style='opacity:.6'>стены не покрасили (ściany)</i>",
        "accept": ["ścian", "scian"],
        "model": "ścian",
        "hint": "Формы на -no берут винительный, но отрицание переводит его в родительный 🎨"
      },
      {
        "type": "gap",
        "q": "Trzeba ___ zapłacić w piątek. <i style='opacity:.6'>надо будет заплатить в пятницу</i>",
        "accept": ["będzie", "bedzie"],
        "model": "będzie",
        "hint": "Помощник встаёт после безличного слова, а не перед ним 💳"
      },
      {
        "type": "gap",
        "q": "Stąd ___ Wawel. <i style='opacity:.6'>отсюда видно Вавель</i>",
        "accept": ["widać", "widac"],
        "model": "widać",
        "hint": "Это слово не спрягается, а имя за ним стоит в винительном 🏰"
      },
      {
        "type": "gap",
        "q": "Okna ___ wymienione wiosną. <i style='opacity:.6'>окна будут заменены весной — разовое событие</i>",
        "accept": ["zostaną", "zostana"],
        "model": "zostaną",
        "hint": "Событие с результатом берёт zostać, а będą wymieniane описывало бы процесс 🪟"
      },
      {
        "type": "gap",
        "q": "Warto ___ zapytać o gwarancję. <i style='opacity:.6'>стоило бы спросить про гарантию</i>",
        "accept": ["by"],
        "model": "by",
        "hint": "Личного окончания здесь быть не может — подлежащего нет 📄"
      },
      {
        "type": "trRE",
        "ru": "Говорят, эта бригада очень хорошая.",
        "accept": ["podobno ta ekipa jest bardzo dobra", "podobno ta ekipa jest bardzo dobra.", "podobno ta ekipa jest naprawdę dobra", "podobno ta ekipa jest naprawde dobra"],
        "model": "Podobno ta ekipa jest bardzo dobra.",
        "hint": "Слух без оценки передаёт нейтральный маркер, а не rzekomo 🛠️"
      },
      {
        "type": "trRE",
        "ru": "Он признался в ошибке.",
        "accept": ["przyznał się do błędu", "przyznal sie do bledu", "przyznał się do błędu.", "przyznal sie do bledu."],
        "model": "Przyznał się do błędu.",
        "hint": "Признаются «до» чего-то: przyznać się do + родительный 🙊"
      },
      {
        "type": "trRE",
        "ru": "Можно попросить счёт?",
        "accept": ["czy mógłbym prosić o rachunek", "czy moglbym prosic o rachunek", "czy mogłabym prosić o rachunek", "czy moglabym prosic o rachunek", "mógłbym prosić o rachunek", "moglbym prosic o rachunek"],
        "model": "Czy mógłbym prosić o rachunek?",
        "hint": "Готовая формула вежливости, а после prosić — предлог o с винительным 🧾"
      },
      {
        "type": "trER",
        "en": "Ściany zostały pomalowane przez ekipę.",
        "accept": ["стены были покрашены бригадой", "стены были покрашены бригадой.", "стены покрасила бригада", "стены были покрашены рабочими"],
        "model": "Стены были покрашены бригадой.",
        "hint": "Исполнитель в польском входит через przez с винительным 🖌️"
      },
      {
        "type": "trER",
        "en": "Skoro już tu jesteśmy, wpadnijmy na kawę.",
        "accept": ["раз уж мы уже здесь зайдём на кофе", "раз уж мы уже здесь, зайдём на кофе", "раз уж мы здесь, зайдём на кофе", "раз мы уже здесь, зайдём на кофе"],
        "model": "Раз уж мы уже здесь, зайдём на кофе.",
        "hint": "Skoro — это «раз уж», причина, которая всем очевидна ☕"
      },
      {
        "type": "order",
        "answer": "Zanim zapłacisz przeczytaj umowę",
        "accept": ["Zanim zapłacisz przeczytaj umowę", "Przeczytaj umowę zanim zapłacisz"],
        "hintRu": "Собери: «Прежде чем заплатишь, прочитай договор.»",
        "hint": "Обе половины можно менять местами, но nie после союза не появится 📑"
      },
      {
        "type": "order",
        "answer": "Dzwonię po to żeby ustalić termin",
        "accept": ["Dzwonię po to żeby ustalić termin"],
        "hintRu": "Собери: «Я звоню затем, чтобы договориться о сроке.»",
        "hint": "Лицо одно и то же, поэтому после żeby идёт инфинитив 📞"
      },
      {
        "type": "match",
        "q": "Соедини слово с его русским соответствием.",
        "pairs": [
          ["podobno", "говорят, по слухам"],
          ["rzekomo", "якобы, с недоверием"],
          ["skoro", "раз уж"],
          ["zresztą", "впрочем"],
          ["przecież", "ведь"]
        ],
        "hint": "Два первых — маркеры чужого слова, остальные три ведут мысль 🗞️"
      },
      {
        "type": "describe",
        "prompt": "Напиши 3–4 предложения по-польски о большом деле, которое ты откладываешь: что нужно сделать прежде чем начать (zanim), при каком условии ты начнёшь (chyba że или pod warunkiem że) и что стоило бы спросить заранее (warto by). Добавь одно предложение со слухом (podobno).",
        "keywords": ["zanim", "dopóki", "chyba że", "pod warunkiem że", "warto by", "można by", "trzeba by", "podobno", "ponieważ", "dlatego"],
        "minWords": 14,
        "model": "Zanim zacznę remont, muszę policzyć pieniądze. Nie zaczniemy malować, dopóki nie skończę pracy nad książką. Warto by zapytać o gwarancję, chyba że ekipa da wszystko na piśmie. Podobno na jesieni materiały będą droższe.",
        "hint": "Каркас: Zanim… Nie zacznę, dopóki nie… Warto by… chyba że… Podobno… 💛"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен B2",
    "intro": "Это финал! 33 задания по всему уровню B2: словообразование и приставки, числительные и фамилии, трудное управление и дативные обороты, союзы третьей недели, полное by и безличность — и вся Неделя 4: CV и мотивационное письмо, врач и анализы, рекламация, экология и rozprawka, идиомы и ложные друзья, рецензия, три регистра и Wielkanoc. Соберись — и вперёд к грамоте B2! 🏆",
    "review": [
      "Словообразование: czyt<b>anie</b> · mówi<b>enie</b> · my<b>cie</b> · <b>otwarcie</b> · обороты <b>po</b> zdani<b>u</b> · <b>przed</b> wyjści<b>em</b> · <b>podczas</b> czekani<b>a</b> · приставки prze-, po-, do-, roz-, za-, wy-, od-, <b>s-/z-</b> · <b>zapomnieć</b> ≠ <b>zapamiętać</b> · <b>przeczytać</b> = прочитать",
      "Слова и формы: -arz, -acz, -nik, -ciel, <b>-ca (z kierowcą)</b> · <b>pracownica · sprzedawczyni</b> · <b>z panią dyrektor</b> · kawiarnia, do <b>księgarni</b> · <b>miłość</b>, <b>sklep</b> · muzea, <b>muzeów</b> · imiona · zwierzęta · <b>rąk, oczu, przyjaciół</b> · rok → <b>lata, lat</b> · drzwi, spodnie, okulary + <b>jedne</b>",
      "Числительные и имена: <b>dwóch · dwóm · dwoma · dwiema</b> · <b>pięciu · pięcioma</b> · <b>od stu dwudziestu lat</b> · <b>Pięciu studentów przyszło</b> · <b>pięć koleżanek przyszło</b> · <b>w dwa tysiące dwudziestym szóstym roku</b> · <b>z panią Nowak</b> · państwa Kowalskich · <b>w Białymstoku · w Zakopanem</b>",
      "Управление и предлоги: <b>polegać na</b> · <b>przyzwyczaić się do</b> · <b>korzystać z</b> · <b>pytać / prosić / dbać o</b> + вин. · <b>krem dla dzieci ≠ krem do rąk</b> · <b>dzięki</b> + дат. / <b>z powodu</b> + род. · <b>podoba mi się / podobają mi się</b> · <b>udało mi się</b> · <b>zależy mi na</b> ≠ <b>zależeć od</b> · <b>mi</b> перед <b>się</b>",
      "Сложное предложение: <b>zanim</b> без nie · <b>dopóki nie</b> · <b>aż</b> без nie · <b>chyba że · o ile · pod warunkiem że · w razie</b> + род. · <b>mimo że / mimo</b> + род. · <b>bo → ponieważ → gdyż</b> · <b>skoro</b> = раз уж · <b>dlatego</b> ≠ <b>dlatego że</b> · by ровно одно · <b>warto by / trzeba by</b> + инф. · <b>ostrzegać przed</b> + твор. · <b>przyznać się do</b> + род.",
      "Безличность: <b>mówi się → mówiło się → będzie się mówić</b> · <b>można było · trzeba będzie · widać było</b> · <b>-no/-to</b> только о прошлом, при отрицании родительный (<b>nie pomalowano ścian</b>) · <b>jest budowany</b> ≠ <b>został zbudowany</b> · <b>przez</b> + вин.",
      "Работа: <b>wykształcenie · doświadczenie zawodowe · umiejętności</b> · обязанности существительными: <b>redagowanie tekstów</b> · <b>biegle / dobrze / komunikatywnie</b> · <b>pracować jako</b> + им. · <b>awansować na</b> + вин. · <b>W odpowiedzi na ogłoszenie zgłaszam swoją kandydaturę na stanowisko…</b> · <b>pensja</b> = зарплата, <b>emerytura</b> = пенсия · umowa na czas <b>nieokreślony</b> · rozmowa kwalifikacyjna",
      "Здоровье и рекламация: <b>skierowanie do specjalisty</b>, но <b>skierowanie na badania</b> · <b>na NFZ / prywatnie</b> · <b>Co pani dolega?</b> · <b>skarżyć się na</b> + вин. · <b>na czczo</b> · odebrać wyniki · <b>zwolnienie lekarskie</b> · <b>kręci mi się w głowie</b> · usterka / wada / awaria · <b>złożyć reklamację</b> · <b>żądam wymiany towaru na wolny od wad</b> · zwrot pieniędzy · <b>w terminie 14 dni</b>",
      "Экология и rozprawka: zmiany klimatu · segregacja: <b>żółty</b> — plastik, <b>zielony</b> — szkło, <b>niebieski</b> — papier · <b>teza → za → przeciw → wnioski</b> · <b>warto zauważyć, że</b> · <b>nie da się ukryć, że</b> (da się не меняется) · przede wszystkim · podsumowując",
      "Идиомы и ложные друзья: <b>bułka z masłem</b> · <b>robić z igły widły</b> · <b>rzucać grochem o ścianę</b> · <b>mieć dwie lewe ręce</b> · <b>piąte koło u wozu</b> · <b>spać jak suseł</b> · <b>nie mój cyrk, nie moje małpy</b> (разговорное) · <b>trzymać za ciebie kciuki</b> · <b>zawód</b> = профессия · <b>uroda</b> = красота · <b>dywan</b> = ковёр · <b>zakaz</b> = запрет (заказ — zamówienie) · <b>korzystny</b> = выгодный",
      "Рецензия, регистры, праздник: <b>fabuła · obsada · zwrot akcji</b> · <b>opowiadać o</b> + предл. · <b>Największą zaletą jest</b> + твор. · przereklamowany · wciągający · z napisami / z lektorem · <b>uprzejmie informuję ↔ dać znać ↔ słuchaj</b> · <b>no</b> = «ну», не «нет» · <b>zwracam się z prośbą o</b> + вин. · <b>zgodnie z</b> + твор. · <b>Może przejdziemy na ty? Mów mi Anna.</b> · <b>jak się później okazało</b> · święconka · <b>śmigus-dyngus</b> в понедельник · <b>Wesołych Świąt!</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Раздел CV, в котором пишут об образовании, называется —",
        "opts": ["wykształcenie", "doświadczenie zawodowe", "umiejętności", "dane osobowe"],
        "answer": "wykształcenie",
        "why": "Образование в польском резюме — это <b>wykształcenie</b>: «Wykształcenie: wyższe, Uniwersytet Jagielloński». Doświadczenie zawodowe — опыт работы, umiejętności — навыки.",
        "hint": "Слово растёт из kształcić — «обучать» 🎓"
      },
      {
        "type": "choice",
        "q": "Как правильно записать обязанности в CV?",
        "opts": ["Redagowanie tekstów i prowadzenie strony", "Redagowałam teksty i prowadziłam stronę", "Redagować teksty i prowadzić stronę", "Redaguję teksty i prowadzę stronę"],
        "answer": "Redagowanie tekstów i prowadzenie strony",
        "why": "В резюме обязанности называют отглагольными существительными на -anie/-enie: <b>redagowanie tekstów, prowadzenie strony, tłumaczenie umów</b>. Личные формы остаются для письма и разговора.",
        "hint": "Первая неделя уровня пригодилась ровно здесь 📄"
      },
      {
        "type": "choice",
        "q": "Awansowałam na ___ kierownika działu. <i style='opacity:.6'>на должность</i>",
        "opts": ["stanowisko", "stanowisku", "stanowiska", "stanowiskiem"],
        "answer": "stanowisko",
        "why": "Awansować na и zgłaszać kandydaturę na идут с винительным — это движение вверх: <b>awansować na stanowisko</b>, <b>na stanowisko redaktora</b>.",
        "hint": "Направление — значит винительный 📈"
      },
      {
        "type": "choice",
        "q": "Lekarz dał mi skierowanie ___ badania. <i style='opacity:.6'>направление на анализы</i>",
        "opts": ["na", "do", "po", "za"],
        "answer": "na",
        "why": "Предлог решает всё: <b>skierowanie do specjalisty</b>, но <b>skierowanie na badania</b>. Формы «skierowanie do badań» в этом смысле нет.",
        "hint": "К человеку — do, на процедуру — na 🩺"
      },
      {
        "type": "choice",
        "q": "Nie chcę naprawy, ___. <i style='opacity:.6'>требую замены товара</i>",
        "opts": ["żądam wymiany towaru", "żądam wymianę towaru", "żądam wymianą towaru", "żądam o wymianę towaru"],
        "answer": "żądam wymiany towaru",
        "why": "Żądać — глагол-магнит родительного падежа: <b>żądam wymiany towaru na wolny od wad</b>, żądam zwrotu pieniędzy.",
        "hint": "Как szukać и potrzebować — родительный без всякого предлога 📦"
      },
      {
        "type": "choice",
        "q": "Butelki i słoiki wrzucamy do pojemnika ___. <i style='opacity:.6'>стекло</i>",
        "opts": ["zielonego", "niebieskiego", "żółtego", "brązowego"],
        "answer": "zielonego",
        "why": "Цвета баков: <b>zielony</b> — szkło, <b>niebieski</b> — papier, <b>żółty</b> — metale i tworzywa sztuczne, <b>brązowy</b> — bio.",
        "hint": "Стекло и зелёная бутылка — цвет совпадает ♻️"
      },
      {
        "type": "choice",
        "q": "___ jest gra aktorska. <i style='opacity:.6'>самое большое достоинство — актёрская игра</i>",
        "opts": ["Największą zaletą", "Największa zaleta", "Największej zalety", "Największą zaletę"],
        "answer": "Największą zaletą",
        "why": "В рамке «X — это Y» с глаголом jest польский ставит творительный: <b>Największą zaletą jest gra aktorska</b>, Słabą stroną jest scenariusz.",
        "hint": "Тот же творительный, что в «Jestem tłumaczem» 🎬"
      },
      {
        "type": "choice",
        "q": "Что значит разговорное польское «no»?",
        "opts": ["«ну», «ага» — согласие", "«нет», отказ", "«но», противопоставление", "«ноль», ничего"],
        "answer": "«ну», «ага» — согласие",
        "why": "Польское <b>no</b> — это «ну, ага»: No dobra. No właśnie! На вопрос «Czy przyjdziesz? — No» собеседник придёт. Отказ передаёт nie.",
        "hint": "Ложный друг, который может сорвать целую договорённость 🙂"
      },
      {
        "type": "choice",
        "q": "Как поздравляют с праздником по-польски?",
        "opts": ["Wesołych Świąt!", "Wesołe Święta!", "Wesołym Świętom!", "Wesoła Świąt!"],
        "answer": "Wesołych Świąt!",
        "why": "За пожеланием стоит невысказанное życzę, а оно требует родительного: <b>Wesołych Świąt! Wszystkiego najlepszego! Zdrowia i spokoju!</b>",
        "hint": "Желают чего — родительный, как в Szczęśliwego Nowego Roku 🐣"
      },
      {
        "type": "choice",
        "q": "Na zebranie ___ pięciu redaktorów. <i style='opacity:.6'>пришло пятеро редакторов</i>",
        "opts": ["przyszło", "przyszli", "przyszła", "przyszły"],
        "answer": "przyszło",
        "why": "При формах dwóch, trzech, pięciu глагол стоит в единственном числе среднего рода: <b>Pięciu redaktorów przyszło</b>. Przyszli было бы только при dwaj redaktorzy.",
        "hint": "Русское «пятеро пришло» подсказывает форму 🧑‍💼"
      },
      {
        "type": "choice",
        "q": "Как правильно? <i style='opacity:.6'>«Прежде чем заплатишь, прочитай договор»</i>",
        "opts": ["Zanim zapłacisz, przeczytaj umowę", "Zanim nie zapłacisz, przeczytaj umowę", "Dopóki zapłacisz, przeczytaj umowę", "Aż zapłacisz, przeczytaj umowę"],
        "answer": "Zanim zapłacisz, przeczytaj umowę",
        "why": "После <b>zanim</b> частицы nie не бывает никогда. Dopóki без nie значит «пока», а aż не открывает предложение.",
        "hint": "Русское «пока не» здесь сбивает — держись za zanim 📑"
      },
      {
        "type": "choice",
        "q": "___ to nazwisko, przyda się. <i style='opacity:.6'>запомни эту фамилию</i>",
        "opts": ["Zapamiętaj", "Zapomnij", "Zapominaj", "Przypomnij"],
        "answer": "Zapamiętaj",
        "why": "Самая известная ловушка уровня: <b>zapamiętać</b> — запомнить, <b>zapomnieć</b> — забыть. Przypomnij значит «напомни».",
        "hint": "Похоже на «запомнить», но значит ровно наоборот 🧠"
      },
      {
        "type": "choice",
        "q": "W marcu byli ___. <i style='opacity:.6'>в Закопане</i>",
        "opts": ["w Zakopanem", "w Zakopanym", "w Zakopane", "w Zakopanego"],
        "answer": "w Zakopanem",
        "why": "Zakopane склоняется как прилагательное среднего рода, но в предложном держит старое окончание: <b>w Zakopanem</b>. Do Zakopanego — родительный.",
        "hint": "Одна буква -em отличает своего от чужого 🏔️"
      },
      {
        "type": "choice",
        "q": "Umowa ___ w marcu. <i style='opacity:.6'>договор был подписан в марте — разовое событие</i>",
        "opts": ["została podpisana", "była podpisana", "jest podpisana", "podpisała się"],
        "answer": "została podpisana",
        "why": "Разовое событие с результатом даёт <b>zostać</b>: umowa została podpisana. Jest podpisana описывало бы состояние, była podpisana звучит как незаконченный процесс.",
        "hint": "Событие — zostać, процесс и состояние — być ✒️"
      },
      {
        "type": "gap",
        "q": "Po ___ egzaminu poszliśmy do kawiarni. <i style='opacity:.6'>после сдачи (zdanie)</i>",
        "accept": ["zdaniu"],
        "model": "zdaniu",
        "hint": "После po — предложный падеж отглагольного существительного ☕"
      },
      {
        "type": "gap",
        "q": "Krew pobiera się ___ czczo. <i style='opacity:.6'>натощак — впиши предлог</i>",
        "accept": ["na"],
        "model": "na",
        "hint": "Устойчивое выражение из двух слов: ни еды, ни кофе — только вода 💉"
      },
      {
        "type": "gap",
        "q": "Proszę o rozpatrzenie reklamacji w ___ 14 dni. <i style='opacity:.6'>в срок четырнадцати дней</i>",
        "accept": ["terminie"],
        "model": "terminie",
        "hint": "То же слово, что «срок» в офисе, только в предложном падеже 📬"
      },
      {
        "type": "gap",
        "q": "Dom stoi tu od ___ dwudziestu lat. <i style='opacity:.6'>уже сто двадцать лет</i>",
        "accept": ["stu"],
        "model": "stu",
        "hint": "После od склоняются оба слова числительного 🏚️"
      },
      {
        "type": "gap",
        "q": "Sąsiadka ostrzegła nas ___ tą ekipą. <i style='opacity:.6'>предупредила об этой бригаде — впиши предлог</i>",
        "accept": ["przed"],
        "model": "przed",
        "hint": "Русское «о» здесь не подходит: предупреждают «перед» опасностью ⚠️"
      },
      {
        "type": "gap",
        "q": "Film opowiada o młodej ___. <i style='opacity:.6'>о переводчице (tłumaczka)</i>",
        "accept": ["tłumaczce", "tlumaczce"],
        "model": "tłumaczce",
        "hint": "Opowiadać o требует предложного падежа 🎥"
      },
      {
        "type": "trRE",
        "ru": "Подаю свою кандидатуру на должность редактора.",
        "accept": ["zgłaszam swoją kandydaturę na stanowisko redaktora", "zglaszam swoja kandydature na stanowisko redaktora", "zgłaszam swoją kandydaturę na stanowisko redaktora.", "zglaszam swoja kandydature na stanowisko redaktora."],
        "model": "Zgłaszam swoją kandydaturę na stanowisko redaktora.",
        "hint": "Готовая формула мотивационного письма, а после na — винительный 📨"
      },
      {
        "type": "trRE",
        "ru": "Врач выписал мне больничный на пять дней.",
        "accept": ["lekarz wystawił mi zwolnienie na pięć dni", "lekarz wystawil mi zwolnienie na piec dni", "lekarz wystawił mi zwolnienie lekarskie na pięć dni", "lekarz wystawil mi zwolnienie lekarskie na piec dni"],
        "model": "Lekarz wystawił mi zwolnienie na pięć dni.",
        "hint": "Больничный и увольнение по-польски одно слово — различает контекст 🤒"
      },
      {
        "type": "trRE",
        "ru": "У меня кружится голова.",
        "accept": ["kręci mi się w głowie", "kreci mi sie w glowie", "kręci mi się w głowie.", "kreci mi sie w glowie."],
        "model": "Kręci mi się w głowie.",
        "hint": "Оборот безличный, а короткое mi встаёт перед się 😵"
      },
      {
        "type": "trRE",
        "ru": "Мы живём здесь уже пять лет.",
        "accept": ["mieszkamy tu od pięciu lat", "mieszkamy tu od pieciu lat", "mieszkamy tutaj od pięciu lat", "mieszkamy tutaj od pieciu lat"],
        "model": "Mieszkamy tu od pięciu lat.",
        "hint": "После od числительное берёт форму на -u, а rok меняет корень 🏠"
      },
      {
        "type": "trER",
        "en": "Mam wreszcie umowę na czas nieokreślony.",
        "accept": ["у меня наконец бессрочный договор", "у меня наконец бессрочный договор.", "наконец у меня бессрочный договор", "у меня наконец-то бессрочный договор"],
        "model": "У меня наконец бессрочный договор.",
        "hint": "Определённый срок — określony, бессрочный — с nie, слитно 📝"
      },
      {
        "type": "trER",
        "en": "Nie mój cyrk, nie moje małpy.",
        "accept": ["это не моя забота", "не моя забота", "это не моя забота.", "это не мои проблемы"],
        "model": "Это не моя забота.",
        "hint": "Глосса идиомы — это её смысл, а не подстрочник; и говорят так только по-свойски 🎪"
      },
      {
        "type": "trER",
        "en": "Skoro zdałam B1, zdam i B2.",
        "accept": ["раз уж я сдала b1 сдам и b2", "раз уж я сдала b1, сдам и b2", "раз я сдала b1, сдам и b2", "раз уж сдала b1, сдам и b2"],
        "model": "Раз уж я сдала B1, сдам и B2.",
        "hint": "Skoro — «раз уж», а не «скоро» 🏅"
      },
      {
        "type": "order",
        "answer": "Warto zauważyć że transport publiczny jest tańszy",
        "accept": ["Warto zauważyć że transport publiczny jest tańszy"],
        "hintRu": "Собери: «Стоит отметить, что общественный транспорт дешевле.»",
        "hint": "Скрепа rozprawki идёт прямо к że, без всякого «об этом» 🚊"
      },
      {
        "type": "order",
        "answer": "Może przejdziemy na ty",
        "accept": ["Może przejdziemy na ty"],
        "hintRu": "Собери: «Может, перейдём на «ты»?»",
        "hint": "Формула застывшая: последнее слово не меняется 🤝"
      },
      {
        "type": "match",
        "q": "Соедини идиому с её смыслом.",
        "pairs": [
          ["bułka z masłem", "проще простого"],
          ["robić z igły widły", "раздувать из мелочи катастрофу"],
          ["rzucać grochem o ścianę", "говорить впустую"],
          ["mieć dwie lewe ręce", "быть неумехой"],
          ["spać jak suseł", "спать беспробудно"]
        ],
        "hint": "Смысл, а не подстрочник — так мы договорились с самого начала 🌰"
      },
      {
        "type": "match",
        "q": "Соедини ложного друга с настоящим значением.",
        "pairs": [
          ["zawód", "профессия"],
          ["pensja", "зарплата"],
          ["emerytura", "пенсия"],
          ["uroda", "красота"],
          ["dywan", "ковёр"]
        ],
        "hint": "Каждое слово кажется подозрительно родным — именно поэтому и подводит 🎭"
      },
      {
        "type": "describe",
        "prompt": "Напиши 4–5 предложений по-польски о своей работе или учёбе, как для CV: кем ты работаешь (pracować jako), за что отвечаешь (odpowiadać za), чем занимаешься (zajmować się) и как знаешь языки (biegle / dobrze / komunikatywnie). Обязанности назови существительными.",
        "keywords": ["biegle", "komunikatywnie", "zajmuję się", "odpowiadam za", "pracuję jako", "wykształcenie", "doświadczenie", "umiejętności", "redagowaniem", "prowadzeniem"],
        "minWords": 16,
        "model": "Pracuję jako korektorka w małym wydawnictwie. Odpowiadam za kontakt z autorami, a na co dzień zajmuję się redagowaniem tekstów i prowadzeniem strony internetowej. Angielski znam biegle, niemiecki komunikatywnie. Moje wykształcenie to filologia polska.",
        "hint": "Каркас: Pracuję jako… Odpowiadam za… Zajmuję się… Angielski biegle, niemiecki komunikatywnie 💼"
      },
      {
        "type": "describe",
        "prompt": "Финальное задание уровня. Напиши 5–6 предложений по-польски «Mój rok»: вставь отглагольное существительное с предлогом (po / przed / podczas), склонённое числительное, один союз третьей недели (zanim, skoro, chyba że, mimo że), ровно одну идиому и одно предложение в официальном регистре.",
        "keywords": ["po", "przed", "podczas", "od", "lat", "dwóch", "pięciu", "dwiema", "zanim", "skoro", "chyba że", "mimo że", "bułka z masłem", "uprzejmie informuję"],
        "minWords": 20,
        "model": "Po przeprowadzce do Krakowa wszystko zaczęło się od nowa. Mieszkam tu od dwóch lat i pracuję z dwiema koleżankami. Zanim zaczęłam kurs, bałam się mówić, a dziś rozmowa po polsku to prawie bułka z masłem. Skoro zdałam B1, zdam i B2, chyba że zabraknie mi czasu. Uprzejmie informuję, że ukończyłam kurs — i mówię to całkiem poważnie.",
        "hint": "Каркас: Po… Mieszkam tu od… lat. Zanim… Skoro…, chyba że… Uprzejmie informuję, że… 💛"
      }
    ]
  }
};
