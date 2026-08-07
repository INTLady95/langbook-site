/* Polish C1 — level config, 30-day plan (COURSE) and 4 EXAMS.
   Data only: the shared renderer lives in engine.js.
   preview:false — released course. */
window.LEVEL = {
  code:'C1',
  course:'pl-c1',
  pkey:'langbook-pl-c1-progress',
  preview:false,
  finalNote:'Год назад ты собирал(а) фразу из слов — а сегодня выбираешь между «popełnić» и «zrobić», слышишь иронию в «akurat» и читаешь польскую книгу, не открывая словарь. Анна и Марек поженились, а ты дошёл(дошла) до C1. Осталась одна ступень — виртуозность. Горжусь тобой 💛',
  speech:'pl-PL',
  langPo:'по-польски',
  langNa:'польский',
  langAdj:'польское',
  phIn:'po polsku…'
};

const COURSE = [
  {wn:'01', wt:'Точность: слово к слову', days:[
    {n:1,t:'Слова ходят парами',p:'Popełnić błąd, odnieść sukces'},
    {n:2,t:'Способен на, устойчив к',p:'Rekcja przymiotników'},
    {n:3,t:'Вид тонко',p:'Aspekt w niuansach'},
    {n:4,t:'Оборот вместо придаточного',p:'Imiesłowy czynnie'},
    {n:5,t:'Существительное вместо глагола',p:'Nominalizacja'},
    {n:6,t:'Порядок слов и ударение',p:'Szyk wyrazów'},
    {n:7,t:'Повторение недели 1',p:'Powtórka 1'}
  ]},
  {wn:'02', wt:'Пять голосов польского: регистры и стили', days:[
    {n:8,t:'Голос канцелярии',p:'Styl urzędowy'},
    {n:9,t:'Голос науки',p:'Styl naukowy'},
    {n:10,t:'Голос газеты',p:'Styl publicystyczny'},
    {n:11,t:'Голос улицы',p:'Styl potoczny'},
    {n:12,t:'Голос книги',p:'Styl artystyczny'},
    {n:13,t:'Оттенки уверенности',p:'Modalność i partykuły'},
    {n:14,t:'Повторение недели 2',p:'Powtórka 2'}
  ]},
  {wn:'03', wt:'Подтекст: фразеология, ирония, точное слово', days:[
    {n:15,t:'Фразеология I: человек и день',p:'Frazeologia: ciało i codzienność'},
    {n:16,t:'Фразеология II: работа и спор',p:'Frazeologia i przysłowia'},
    {n:17,t:'Сказать мягко и сказать колко',p:'Ironia i eufemizmy'},
    {n:18,t:'То самое слово',p:'Synonimy i odcienie'},
    {n:19,t:'Ложные друзья и кальки',p:'Fałszywi przyjaciele'},
    {n:20,t:'Как звучит настоящий поляк',p:'Wymowa i akcent'},
    {n:21,t:'Повторение недели 3',p:'Powtórka 3'}
  ]},
  {wn:'04', wt:'Жанры взрослого языка и большой финал', days:[
    {n:22,t:'Сжать до сути',p:'Streszczenie'},
    {n:23,t:'Эссе на C1',p:'Esej i rozprawka'},
    {n:24,t:'Не согласиться и не поссориться',p:'Negocjacje'},
    {n:25,t:'Сказать при всех',p:'Wystąpienie publiczne'},
    {n:26,t:'Что цитируют все',p:'Kultura, cytaty, aluzje'},
    {n:27,t:'Квартира, кредит, налоги',p:'Dorosłe sprawy'},
    {n:28,t:'Руководить по-польски',p:'Praca na wyższym poziomie'},
    {n:29,t:'Большая история: свадьба',p:'Wielka opowieść: wesele'},
    {n:30,t:'Свободно и по-своему',p:'Biegle i po swojemu'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя C1 позади — и грамматика впервые перестала быть главной. 25 заданий: коллокации popełnić i odnieść, управление прилагательных и существительных, тонкий вид zdawać и zdać, обороты вместо придаточных, номинализация и скрепы письменного стиля, порядок слов. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Совершить и добиться: <b>popełnić błąd</b> · <b>odnieść sukces</b>, zwycięstwo, obrażenia · <b>ponieść porażkę</b>, koszty, konsekwencje · odnieść — всё хорошее, ponieść — всё плохое, popełnić — то, за что стыдно",
      "Принять и заключить: <b>podjąć decyzję</b>, próbę, temat · <b>zawrzeć umowę</b>, znajomość · <b>wywrzeć wpływ na</b> kogoś · <b>przyjąć uchwałę</b>, но <b>podjąć decyzję</b> (не «przyjąć decyzję»)",
      "Впечатление и внимание: <b>zrobić wrażenie na kimś</b> — наружу · <b>odnieść wrażenie, że</b> — внутрь · <b>sprawiać wrażenie</b> — казаться · <b>zwrócić uwagę na</b> + вин.",
      "Брать, делать, соблюдать: <b>brać udział w</b> (не «przyjmować udziału») · <b>wyciągnąć wniosek</b> (не «zrobić wniosek») · <b>robić zakupy, pranie, zdjęcia</b> · <b>dotrzymać słowa, terminu</b> · <b>pełnić funkcję</b> · <b>sprawować kontrolę</b>",
      "Управление прилагательных: <b>zdolny do</b> + род. · <b>skłonny do</b> · <b>odporny na</b> + вин. · <b>wrażliwy na</b> · <b>uczulony na</b> · <b>podobny do</b> · <b>dumny z</b> + род. · <b>świadomy, pewien, pełen, ciekawy</b> + чистый род. · <b>wdzięczny za</b> + вин. · <b>zainteresowany, zajęty, zaskoczony</b> + твор.",
      "Управление существительных: <b>prawo do</b> urlopu · <b>dostęp do</b> danych · <b>wpływ na</b> + вин. · <b>odpowiedź na</b> · <b>zgoda na</b> · <b>zainteresowanie</b> + твор. без предлога · <b>powód do</b> dumy · <b>przyczyna</b> + род. · <b>walka z</b> = против, <b>walka o</b> = ради · <b>stosunek do</b> ≠ <b>stosunki z</b>",
      "Вид на волосок: <b>namawiałam, ale nie namówiłam</b> · <b>zdawać</b> = быть на экзамене, <b>zdać</b> = сдать · <b>musiałam robić</b> = приходилось, <b>musiałam zrobić</b> = пришлось · после <b>zacząć, przestać, skończyć</b> только несовершенный · <b>Czytałeś to?</b> вообще ≠ <b>Przeczytałeś?</b> то самое · <b>zawsze</b> тянет несов., <b>nagle, wreszcie</b> — сов.",
      "Пары-ловушки вида: <b>zapomnieć</b> = забыть ≠ <b>zapamiętać</b> = запомнить · <b>dowiadywać się</b> = наводить справки, <b>dowiedzieć się</b> = узнать · <b>nie zdążyłam przeczytać</b> · <b>nie udało mi się przekonać</b>",
      "Обороты вместо придаточных: mówią → <b>mówiący</b>, mieszkają → <b>mieszkający</b>, dotyczy → <b>dotycząca</b> — только несов. и только вместо подлежащего-«который» · страдательное: -ać → <b>-ny</b>, -ić/-eć → <b>-ony</b>, -ąć/-nąć → <b>-ty</b> · исполнитель через <b>przez</b> + вин. · причастия прошедшего времени в польском нет: <b>człowiek, który powiedział</b>",
      "Деепричастия: <b>-ąc</b> — одновременно (Czekając na tramwaj, czytała) · <b>-wszy/-łszy</b> — раньше и книжно (Skończywszy pracę, wyszła) · железное правило: <b>подлежащее одно на двоих</b>, иначе только придаточное · застывшие: <b>prawdę mówiąc, biorąc pod uwagę, szczerze mówiąc</b>",
      "Номинализация и скрепы: podjęto decyzję → <b>podjęcie decyzji</b> · ceny wzrosły → <b>wzrost cen</b> · <b>ulec zmianie</b> (дат.) · <b>przeprowadzić analizę</b>, <b>dokonać wyboru</b> · <b>w związku ze</b> + твор. · <b>w wyniku, na skutek, w celu, w przypadku, na podstawie, w ramach, pod względem</b> + род. · <b>ze względu na</b> + вин. · <b>zgodnie z</b> + твор. · <b>mimo</b> + род., без всякого na",
      "Порядок слов: известное впереди, новое в конец (<b>Ten reportaż napisała Kasia</b>) · тема вперёд: <b>Tego błędu nikt nie zauważył</b> · <b>się</b> не в хвосте и не в начале (<b>Nie mogę się doczekać</b>) · <b>mi, ci, go</b> перед się, после предлога только <b>do niego</b> · <b>by</b> подвижно, окончание при нём одно · фонарики: <b>właśnie, to, przecież, dopiero</b> (мало и поздно), <b>aż</b> (много), <b>nawet</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "W tym akapicie autor ___ trzy błędy. <i style='opacity:.6'>совершил три ошибки</i>",
        "opts": ["popełnił", "zrobił", "odniósł", "poniósł"],
        "answer": "popełnił",
        "why": "Błąd в польском только <b>popełnia się</b> — это первая коллокация уровня. Zrobić błąd — прямая калька с русского «сделать ошибку», а odnieść и ponieść с błąd не сочетаются вовсе.",
        "hint": "Ошибку по-польски не делают, а совершают — как преступление ✍️"
      },
      {
        "type": "choice",
        "q": "W piątek ___ decyzję o zmianie terminu. <i style='opacity:.6'>мы приняли решение</i>",
        "opts": ["podjęliśmy", "przyjęliśmy", "zrobiliśmy", "wzięliśmy"],
        "answer": "podjęliśmy",
        "why": "Decyzja сочетается только с <b>podjąć</b>. Przyjąć берёт себе uchwałę и zaproszenie, zrobić decyzję — калька, а wziąć decyzję не говорят.",
        "hint": "Русское «принять решение» совпадает по смыслу, но глагол польский выбирает свой 🗂️"
      },
      {
        "type": "choice",
        "q": "Marek jest zdolny ___ wszystkiego. <i style='opacity:.6'>способен на всё</i>",
        "opts": ["do", "na", "za", "w"],
        "answer": "do",
        "why": "Русское «способен на» тянет за собой na, но польское <b>zdolny do</b> идёт с родительным падежом — как и skłonny do, podobny do, przyzwyczajony do.",
        "hint": "Предлоги здесь меняются местами с русскими: «к» становится na, «на» становится do 🧭"
      },
      {
        "type": "choice",
        "q": "Jesteśmy ___ . <i style='opacity:.6'>мы заинтересованы в этом предложении</i>",
        "opts": ["zainteresowani tą ofertą", "zainteresowani w tej ofercie", "zainteresowani do tej oferty", "zainteresowani o tę ofertę"],
        "answer": "zainteresowani tą ofertą",
        "why": "У <b>zainteresowany</b> нет никакого предлога: он требует творительного падежа, как zajęty и zaskoczony. Русское «заинтересован в» приводит лишнее w.",
        "hint": "Тот же падеж, что в zajęty pracą и zaskoczony wynikiem 📨"
      },
      {
        "type": "choice",
        "q": "Egzamin ___ trzy godziny, a zdałam go dopiero za drugim razem. <i style='opacity:.6'>экзамен я сдавала три часа</i>",
        "opts": ["zdawałam", "zdałam", "zdaję", "zdam"],
        "answer": "zdawałam",
        "why": "Три часа длится процесс, а не результат: <b>zdawać</b> — быть на экзамене, <b>zdać</b> — получить оценку. Вторая половина фразы уже занята формой zdałam, поэтому первая обязана быть несовершенной.",
        "hint": "Ключевая пара уровня: одно слово про время, другое про результат ⏳"
      },
      {
        "type": "choice",
        "q": "___ już rozdział, który ci wysłałam? <i style='opacity:.6'>ты прочитал ту самую главу?</i>",
        "opts": ["Przeczytałeś", "Czytałeś", "Czytasz", "Poczytałeś"],
        "answer": "Przeczytałeś",
        "why": "Речь о конкретном тексте, который надо было дочитать, — значит совершенный вид: <b>Przeczytałeś?</b> Czytałeś to? спрашивает об опыте вообще, poczytałeś значит «почитал немного».",
        "hint": "Вопрос не «знаком ли ты с этим вообще», а «дочитал ли ты то самое» 📄"
      },
      {
        "type": "choice",
        "q": "Potrzebujemy redaktora ___ dwa języki. <i style='opacity:.6'>знающего два языка</i>",
        "opts": ["znającego", "znając", "znanego", "wiedzącego"],
        "answer": "znającego",
        "why": "К существительному идёт причастие на <b>-ący</b> и согласуется с ним в падеже: redaktora znającego. Форма на -ąc относится к глаголу, znany значит «известный», а wiedzieć с прямым дополнением не сочетается.",
        "hint": "Замени мысленно на «który zna» — и посмотри, какое слово встанет вместо него 🧩"
      },
      {
        "type": "choice",
        "q": "Какое предложение построено правильно?",
        "opts": ["Czekając na odpowiedź, straciliśmy tydzień", "Czekając na odpowiedź, minął tydzień", "Czekając na tramwaj, zaczęło padać", "Ludzie mieszkając w mieście częściej jeżdżą tramwajem"],
        "answer": "Czekając na odpowiedź, straciliśmy tydzień",
        "why": "У оборота на <b>-ąc</b> и у предложения должно быть одно подлежащее: ждали мы — и потеряли тоже мы. Во втором и третьем вариантах действующие лица разные, а в четвёртом нужна форма mieszkający, потому что слово относится к существительному.",
        "hint": "Спроси себя: кто ждал и кто сделал то, что дальше? Если это разные лица — оборот невозможен ⛓️"
      },
      {
        "type": "choice",
        "q": "Tekst ___ poszedł do druku w środę. <i style='opacity:.6'>текст, написанный Анной</i>",
        "opts": ["napisany przez Annę", "napisany od Anny", "napisany z Anną", "napisany Anną"],
        "answer": "napisany przez Annę",
        "why": "Исполнитель при страдательном причастии входит только через <b>przez</b> с винительным. Od Anny означало бы «от Анны» — источник передачи, z Anną — «вместе с Анной», а голый творительный тут невозможен.",
        "hint": "Тот же предлог, что в «książka wydana przez małe wydawnictwo» 🖨️"
      },
      {
        "type": "choice",
        "q": "___ biuro jest nieczynne do poniedziałku. <i style='opacity:.6'>ввиду ремонта</i>",
        "opts": ["Ze względu na remont", "Ze względu na remontu", "Ze względu remontu", "W związku z remont"],
        "answer": "Ze względu na remont",
        "why": "<b>Ze względu na</b> требует винительного падежа: ze względu na remont, na termin, na pogodę. Родительный идёт после w wyniku и na skutek, а w związku z берёт творительный (w związku z remontem).",
        "hint": "После na в этой скрепе стоит та же форма, что и после zwrócić uwagę na 🏢"
      },
      {
        "type": "choice",
        "q": "Mam ___ dwa gotowe rozdziały. <i style='opacity:.6'>у меня всего два готовых раздела</i>",
        "opts": ["dopiero", "aż", "już", "nawet"],
        "answer": "dopiero",
        "why": "<b>Dopiero</b> подсвечивает «мало и поздно», <b>aż</b> — наоборот, «целых, много». Już сказало бы «уже целых два», а nawet значит «даже».",
        "hint": "Два раздела здесь — это меньше, чем хотелось бы 🔦"
      },
      {
        "type": "gap",
        "q": "Z tego ___ prosty wniosek. <i style='opacity:.6'>я делаю простой вывод (wyciągać)</i>",
        "accept": ["wyciągam", "wyciagam"],
        "model": "wyciągam",
        "why": "Wniosek по-польски не делают, а <b>вытягивают</b>: wyciągnąć wnioski, wyciągam wniosek. Zrobić wniosek не говорят вовсе.",
        "hint": "Глагол уже дан в скобках — поставь его в первое лицо 🧲"
      },
      {
        "type": "gap",
        "q": "Każdy pracownik ma prawo ___ urlopu. <i style='opacity:.6'>право на отпуск — впиши предлог</i>",
        "accept": ["do"],
        "model": "do",
        "why": "Русское «право на» превращается в польское <b>prawo do</b> плюс родительный — как dostęp do, podejście do, powód do.",
        "hint": "Форма urlopu уже подсказывает падеж — осталось найти его предлог 📋"
      },
      {
        "type": "gap",
        "q": "Nie ___ przeczytać maszynopisu przed zebraniem. <i style='opacity:.6'>я не успела дочитать</i>",
        "accept": ["zdążyłam", "zdazylam", "zdążyłem", "zdazylem"],
        "model": "zdążyłam",
        "why": "Отрицание результата при законченном действии даёт связку <b>nie zdążyć</b> плюс инфинитив совершенного вида: nie zdążyłam przeczytać, nie zdążyliśmy oddać.",
        "hint": "Глагол про время: действие началось, а до конца не дошло ⏱️"
      },
      {
        "type": "gap",
        "q": "W związku ___ wzrostem cen zmieniamy cennik. <i style='opacity:.6'>в связи с ростом цен — впиши предлог</i>",
        "accept": ["ze"],
        "model": "ze",
        "why": "W związku z идёт с творительным, а перед сочетанием wz- предлог получает беглое e: <b>w związku ze wzrostem</b>. То же самое во «we Wrocławiu» и «ze mną».",
        "hint": "Перед двумя согласными подряд предлогу нужно немного воздуха 🔗"
      },
      {
        "type": "gap",
        "q": "Nie mogę ___ doczekać tej książki. <i style='opacity:.6'>не могу дождаться — впиши короткое слово</i>",
        "accept": ["się", "sie"],
        "model": "się",
        "why": "Короткое się тянется к началу группы и не остаётся в хвосте, когда впереди есть место: <b>Nie mogę się doczekać</b>, а не «doczekać się».",
        "hint": "То самое словечко, которое никогда не начинает фразу, но и в конце не задерживается 🧲"
      },
      {
        "type": "trRE",
        "ru": "Мне не удалось его убедить.",
        "accept": ["nie udało mi się go przekonać", "nie udalo mi sie go przekonac", "nie udało mi się go przekonać.", "nie udalo mi sie go przekonac.", "nie udało mi się przekonać go", "nie udalo mi sie przekonac go"],
        "model": "Nie udało mi się go przekonać.",
        "why": "У оборота нет подлежащего, поэтому глагол всегда среднего рода: <b>udało mi się</b>. Результат передаёт совершенный вид przekonać — попытка была бы przekonywać.",
        "hint": "Безличный оборот с дательным, а после него — инфинитив результата 🙊"
      },
      {
        "type": "trRE",
        "ru": "Несмотря на задержку, книга вышла в срок.",
        "accept": ["mimo opóźnienia książka ukazała się w terminie", "mimo opoznienia ksiazka ukazala sie w terminie", "mimo opóźnienia książka ukazała się w terminie.", "mimo opoznienia ksiazka ukazala sie w terminie.", "mimo opóźnienia książka wyszła w terminie", "mimo opoznienia ksiazka wyszla w terminie"],
        "model": "Mimo opóźnienia książka ukazała się w terminie.",
        "why": "Перед существительным стоит голое <b>mimo</b> с родительным — никакого na между ними. Mimo że открывает целое предложение с глаголом.",
        "hint": "Русское «несмотря на» приводит с собой лишний предлог — оставь его дома 📚"
      },
      {
        "type": "trRE",
        "ru": "Нам нужен редактор, знающий два языка.",
        "accept": ["potrzebujemy redaktora znającego dwa języki", "potrzebujemy redaktora znajacego dwa jezyki", "potrzebujemy redaktora znającego dwa języki.", "potrzebujemy redaktora znajacego dwa jezyki.", "potrzebny nam redaktor znający dwa języki", "potrzebny nam redaktor znajacy dwa jezyki"],
        "model": "Potrzebujemy redaktora znającego dwa języki.",
        "why": "Причастие на -ący согласуется с существительным, а potrzebować — глагол-магнит родительного: <b>redaktora znającego</b>.",
        "hint": "Сначала поставь «редактор» в падеж, которого требует глагол, — причастие поедет следом 🧩"
      },
      {
        "type": "trER",
        "en": "Odniosłam wrażenie, że mówimy o czymś innym.",
        "accept": ["у меня сложилось впечатление что мы говорим о разном", "у меня сложилось впечатление, что мы говорим о разном", "у меня сложилось впечатление, что мы говорим о разных вещах", "мне показалось, что мы говорим о разном"],
        "model": "У меня сложилось впечатление, что мы говорим о разном.",
        "why": "<b>Odnieść wrażenie, że</b> — это «у меня сложилось впечатление»: моя собственная догадка, а не то, как я выгляжу со стороны.",
        "hint": "Впечатление здесь не производят, а получают 🪞"
      },
      {
        "type": "trER",
        "en": "Tego błędu nikt nie zauważył.",
        "accept": ["этой ошибки никто не заметил", "этой ошибки никто не заметил.", "эту ошибку никто не заметил", "никто не заметил этой ошибки"],
        "model": "Этой ошибки никто не заметил.",
        "why": "Тема вынесена вперёд, а отрицание держит родительный падеж: <b>tego błędu nikt nie zauważył</b>. Перестановка ничего не ломает — она подсвечивает связь с предыдущей фразой.",
        "hint": "Первое слово тут не подлежащее, хотя очень на него похоже 🔍"
      },
      {
        "type": "order",
        "answer": "Czekając na tramwaj doczytała rozdział",
        "accept": ["Czekając na tramwaj doczytała rozdział", "Doczytała rozdział czekając na tramwaj"],
        "hintRu": "Собери: «Ожидая трамвай, она дочитала главу.»",
        "why": "Оборот на -ąc сворачивает «пока она ждала»; подлежащее у оборота и у предложения одно — она. На письме оборот отделяется запятой.",
        "hint": "Деепричастие делается из третьего лица множественного числа: czekają плюс -c 🚋"
      },
      {
        "type": "order",
        "answer": "Zwróć uwagę na ostatni akapit",
        "accept": ["Zwróć uwagę na ostatni akapit"],
        "hintRu": "Собери: «Обрати внимание на последний абзац.»",
        "why": "Внимание обращают <b>na</b> плюс винительный. Предлог o сюда приезжает из русского «замечание о» и в этой коллокации не работает.",
        "hint": "Готовая связка из первого дня недели — глагол, существительное и один предлог 👀"
      },
      {
        "type": "match",
        "q": "Соедини слово с формой, которой оно требует.",
        "pairs": [
          ["zdolny", "do wszystkiego"],
          ["odporny", "na stres"],
          ["dumny", "z córki"],
          ["zainteresowany", "nową ofertą"],
          ["wdzięczny", "za pomoc"]
        ],
        "why": "Три из пяти расходятся с русским: «способен на» → zdolny do, «устойчив к» → odporny na, «горжусь тобой» → dumny z. Zainteresowany идёт с чистым творительным, wdzięczny za совпадает с русским.",
        "hint": "Учи прилагательное вместе с его предлогом — это одна карточка, а не две 🔑"
      },
      {
        "type": "describe",
        "prompt": "Напиши 3–4 предложения по-польски о деле, за которое ты недавно взялся(взялась): какое решение ты принял(а) (podjąć decyzję), что получилось, а что нет (zdawać / zdać, namawiać / namówić), и какой вывод ты сделал(а) (wyciągnąć wniosek). Добавь одно прилагательное с его предлогом: zdolny do, odporny na или dumny z.",
        "keywords": ["podjęłam decyzję", "podjąłem decyzję", "podjęliśmy decyzję", "wyciągnęłam wniosek", "wyciągnąłem wniosek", "zdawałam", "zdałam", "odporny na", "odporna na", "dumny z", "dumna z", "zdolny do", "zdolna do"],
        "minWords": 14,
        "model": "W styczniu podjęłam decyzję o zmianie pracy i długo nie mogłam się na nią zdobyć. Namawiałam siebie cały miesiąc, ale namówiłam dopiero w lutym. Wyciągnęłam z tego prosty wniosek: jestem bardziej odporna na stres, niż myślałam. Jestem z siebie dumna.",
        "why": "Здесь работают сразу три опоры недели: коллокация (podjąć decyzję, wyciągnąć wniosek), тонкий вид (namawiałam, ale namówiłam) и прилагательное со своим предлогом.",
        "hint": "Каркас: Podjęłam decyzję o… Namawiałam…, ale… Wyciągnęłam wniosek… Jestem odporna na… 💛"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Пять голосов польского — и ты слышишь каждый. 25 заданий: канцелярия с её zaświadczenie и odwołanie od decyzji, научные скрепы и осторожные формулы, газетная метафорика и вопрос с готовым ответом, разговорные ogarnąć и lecieć, книжный голос с его застывшими оборотами, шкала уверенности и главная ловушка уровня — bynajmniej. Наберёшь 80% — открою Неделю 3. 💛",
    "review": [
      "Канцелярия: <b>niniejszym</b> · <b>zwracam się z uprzejmą prośbą o</b> + вин. · <b>uprzejmie proszę o wydanie</b> (не «o wydania») · <b>w załączeniu przesyłam</b> · <b>zgodnie z</b> + твор. · <b>w terminie 14 dni od dnia doręczenia</b> · просьба в документе — существительным, а не придаточным с żeby",
      "Персонажи документа: <b>zaświadczenie</b> выдаёт учреждение · <b>oświadczenie</b> подписываешь ты · <b>wniosek</b> на бланке, <b>podanie</b> свободным текстом · <b>odwołanie od decyzji</b> (только od) · <b>wnioskodawca, strona, organ</b> · <b>opłata skarbowa</b> · <b>uzupełnić braki formalne</b>",
      "Ведомство отвечает: <b>Wniosek rozpatrzono pozytywnie</b> · <b>Sprawę załatwiono odmownie</b> · <b>Wzywa się do uzupełnienia braków</b> · <b>pod rygorem pozostawienia bez rozpoznania</b> · <b>Decyzja jest ostateczna</b> · подпись — <b>Z poważaniem</b>, дальше <b>Załączniki:</b> списком",
      "Наука ведёт читателя: <b>Niniejszy artykuł dotyczy</b> + род. (без o!) · <b>Celem pracy jest</b> · <b>Przedmiotem badań jest</b> · <b>Należy zauważyć, że</b> · <b>Jak wykazano powyżej</b> · <b>Z powyższego wynika, że</b> · <b>postawić tezę</b>, <b>sformułować hipotezę</b>, <b>dokonać analizy</b>, <b>powołać się na</b> + вин. · <b>dane</b> только во множественном",
      "Осторожность вместо категоричности: <b>nie ulega wątpliwości</b> → <b>wszystko wskazuje na to, że</b> → <b>wydaje się, że</b> → <b>można przypuszczać</b> → <b>nie sposób jednoznacznie stwierdzić</b> · в статье <b>wydaje się</b>, в разговоре <b>wydaje mi się</b> · смягчители не складывают в стопку · «а именно» — <b>mianowicie</b>, а не konkretnie · «в данной работе» — <b>w niniejszej pracy</b>",
      "Газета: <b>ceny szybują</b> · <b>ceny lecą w dół</b> · <b>rząd tnie wydatki</b> · <b>fala krytyki</b> · <b>burza w sieci</b> · <b>walka o fotel</b> · <b>kulisy, przełom, gorący temat</b> · заголовок без глагола: <b>Nowe zasady od stycznia</b>, <b>Koniec z</b> + твор., <b>Ceny w górę</b>, <b>Kraków: rusza remont</b> · <b>lid</b> отвечает на кто, что, где, когда, почему",
      "Жанры и приёмы прессы: <b>wiadomość</b> — только факты · <b>reportaż</b> — сцены · <b>wywiad</b> · <b>komentarz</b> — открытая позиция · <b>felieton</b> — тон, а не цифры · <b>sonda</b> · оговорки <b>nieoficjalnie, jak się dowiedzieliśmy, źródła podają, rzekomo</b> · вопрос с готовым ответом (Dlaczego ukrywa…?) · <b>aż</b> и <b>tylko</b> красят одну и ту же цифру",
      "Улица (всё с пометой «разг.»): <b>ogarnąć coś</b> / <b>ogarnąć się</b> · <b>kumać</b> · <b>Muszę lecieć</b> · <b>wpaść do kogoś</b> · <b>zarwać noc</b> · <b>masakra</b> · <b>daj spokój</b> · <b>no weź</b> · <b>nie ma sprawy</b> · <b>mniejsza o to</b> · <b>ale jazda</b> · частицы <b>no</b> = ага, <b>-że</b> (powiedzże), <b>ależ</b>, <b>cóż</b> · <b>trza</b> — только узнавание",
      "Книга: <b>rzec</b> → powiedzieć · <b>ujrzeć</b> → zobaczyć · <b>wszelako, atoli, wszakże</b> → jednak · <b>niebawem</b> → wkrótce · <b>bowiem</b> и <b>zaś</b> стоят вторым словом, а не первым · инверсия <b>Piękna była ta jesień</b>, <b>Cicho było w domu</b> · сравнение <b>niczym</b> (книжн.) ≠ <b>jak</b> (нейтр.) ≠ <b>niby</b> (разг.) · застывшее <b>Nie masz to jak w domu</b>",
      "Шкала уверенности: <b>na pewno</b> 100 · <b>zapewne / pewnie</b> 85 · <b>chyba / raczej tak</b> 60 · <b>może</b> 50 · <b>raczej nie</b> 25 · <b>wykluczone</b> 0 · <b>bynajmniej</b> = отнюдь и всегда рядом с <b>nie</b> ≠ <b>przynajmniej</b> = хотя бы · <b>wcale nie, ani trochę, nic a nic, nic podobnego</b>",
      "Желание и ирония: <b>oby / obyś</b> + форма на -ł (Oby się udało, Obyś miał rację) · <b>żeby tylko</b> — опасение · <b>byle</b> — лишь бы, <b>byle jak</b> — кое-как · <b>choćby</b> — хотя бы · <b>rzeczywiście / faktycznie</b> подтверждают, <b>praktycznie</b> = «почти» · <b>Akurat</b> в середине — «как раз», <b>Akurat.</b> в одиночку — «как же» · <b>też mi coś</b>, <b>dobre sobie</b> — разг. ирония",
      "Главное правило недели: адрес → голос → и не менять до точки. <b>Niniejszym informuję, że spoko</b> и <b>Z powyższego wynika, że jest masa baboli</b> — сбой этажа, который слышнее любой ошибки"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Uprzejmie proszę o ___ zaświadczenia o zarobkach. <i style='opacity:.6'>о выдаче справки</i>",
        "opts": ["wydanie", "wydania", "wydaniu", "wydaniem"],
        "answer": "wydanie",
        "why": "После <b>proszę o</b> идёт винительный падеж: proszę o wydanie, o przedłużenie, o rozpatrzenie. Родительный wydania приезжает сюда из русского «о выдаче».",
        "hint": "Русское «о чём» просит предложного, а польское o в просьбе — винительного 🏛️"
      },
      {
        "type": "choice",
        "q": "Dokument, który wydaje urząd, to —",
        "opts": ["zaświadczenie", "oświadczenie", "podanie", "odwołanie"],
        "answer": "zaświadczenie",
        "why": "<b>ZAświadczenie</b> выдаёт учреждение, <b>oświadczenie</b> ты пишешь и подписываешь сам. Podanie — заявление свободным текстом, odwołanie — жалоба на решение.",
        "hint": "Одна буква в начале решает, кто автор бумаги 📄"
      },
      {
        "type": "choice",
        "q": "Złożyłem ___ w terminie czternastu dni. <i style='opacity:.6'>подал жалобу на решение</i>",
        "opts": ["odwołanie od decyzji", "odwołanie na decyzję", "odwołanie o decyzji", "odwołanie do decyzji"],
        "answer": "odwołanie od decyzji",
        "why": "По-польски обжалуют «от» решения: <b>odwołanie od decyzji</b>. Русское «на» сюда не переезжает, а do значило бы направление документа.",
        "hint": "Жалоба отталкивается от решения, а не идёт на него 📬"
      },
      {
        "type": "choice",
        "q": "Niniejszy artykuł dotyczy ___ . <i style='opacity:.6'>языка местной прессы</i>",
        "opts": ["języka prasy lokalnej", "o języku prasy lokalnej", "język prasy lokalnej", "językowi prasy lokalnej"],
        "answer": "języka prasy lokalnej",
        "why": "<b>Dotyczyć</b> идёт без предлога и с родительным падежом: dotyczy języka, dotyczy sprawy, dotyczy umowy. Предлог o сюда приезжает из русского «о языке».",
        "hint": "Глагол сам тянет падеж — никакого предлога между ними нет 🔬"
      },
      {
        "type": "choice",
        "q": "Какая формула уместна в научной статье?",
        "opts": ["Wydaje się, że wyniki wymagają weryfikacji", "Wydaje mi się, że wyniki wymagają weryfikacji", "Chyba wyniki wymagają weryfikacji", "No i wyniki wymagają weryfikacji"],
        "answer": "Wydaje się, że wyniki wymagają weryfikacji",
        "why": "В статье автор говорит о положении дел, а не о своём впечатлении: безличное <b>wydaje się, że</b>. Личное mi, разговорное chyba и связка no i опускают фразу на другой этаж.",
        "hint": "Убери из фразы себя — и она станет научной 🧪"
      },
      {
        "type": "choice",
        "q": "___ w centrum. <i style='opacity:.6'>конец бесплатной парковке — газетный заголовок</i>",
        "opts": ["Koniec z darmowym parkingiem", "Koniec z darmowego parkingu", "Koniec darmowym parkingiem", "Koniec z darmowy parking"],
        "answer": "Koniec z darmowym parkingiem",
        "why": "После <b>koniec z</b> идёт творительный падеж. Родительный возможен только без предлога: koniec darmowego parkingu. Смешивать две конструкции нельзя.",
        "hint": "Либо предлог и творительный, либо голый родительный — выбери одно 🗞️"
      },
      {
        "type": "choice",
        "q": "Какая фраза годится для нейтральной заметки?",
        "opts": ["Wydawnictwo nie podało nakładu", "Dlaczego wydawnictwo ukrywa nakład?", "Wydawnictwo rzekomo ukrywa nakład", "Ukrywanie nakładu to skandal"],
        "answer": "Wydawnictwo nie podało nakładu",
        "why": "В <b>wiadomości</b> пишут установленный факт. Вопрос со встроенным утверждением уже принял «ukrywa» за правду, rzekomo добавляет недоверие, а последняя фраза — открытая оценка, то есть жанр komentarza.",
        "hint": "Попробуй ответить «нет» на второй вариант — не на что 🔍"
      },
      {
        "type": "choice",
        "q": "Какая фраза уместна в письме в urząd?",
        "opts": ["Uzupełnię brakujące dokumenty w terminie", "Ogarnę te papiery do piątku", "Nie kumam pana wniosku", "Spoko, wszystko dosłę"],
        "answer": "Uzupełnię brakujące dokumenty w terminie",
        "why": "Ogarnąć, kumać и spoko помечены как разговорные — рядом с официальным адресатом они звучат как кроссовки под смокингом. Это не ошибка в грамматике, а сбой этажа.",
        "hint": "Регистр держится всем текстом сразу — одного словечка хватает, чтобы он рухнул 👔"
      },
      {
        "type": "choice",
        "q": "«Nie masz to jak w domu» znaczy —",
        "opts": ["Nigdzie nie jest tak dobrze jak w domu", "Nie masz własnego domu", "W domu nikt na ciebie nie czeka", "Dom nie należy już do ciebie"],
        "answer": "Nigdzie nie jest tak dobrze jak w domu",
        "why": "Внутри оборота <b>nie masz</b> — старая безличная форма, то же самое, что nie ma. Читать её как «ты не имеешь» — прямой путь к неверному пониманию всей фразы.",
        "hint": "Странная форма внутри устойчивого оборота — сначала проверь фразеологизм, а не грамматику 🗿"
      },
      {
        "type": "choice",
        "q": "Wybierz poprawne zdanie.",
        "opts": ["Bynajmniej nie jestem zadowolony", "Bynajmniej jestem zadowolony", "Bynajmniej zadzwonił, więc wiedzieliśmy", "Bynajmniej okładka jest już zatwierdzona"],
        "answer": "Bynajmniej nie jestem zadowolony",
        "why": "<b>Bynajmniej</b> — усилитель отрицания и без nie не работает вовсе. В третьем и четвёртом вариантах по смыслу нужно <b>przynajmniej</b> — «хотя бы».",
        "hint": "Главная ловушка недели: одна приставка — и два противоположных мира ⚠️"
      },
      {
        "type": "choice",
        "q": "— Zdążysz do piątku? — ___ <i style='opacity:.6'>кажется, да — но обещать не хочу</i>",
        "opts": ["Chyba tak", "Na pewno", "Wykluczone", "Bynajmniej"],
        "answer": "Chyba tak",
        "why": "Русское «наверное» ложится на <b>chyba</b>, а <b>na pewno</b> — это уже обещание. Wykluczone значит «исключено», bynajmniej — «отнюдь нет».",
        "hint": "Середина шкалы, а не её края 📊"
      },
      {
        "type": "gap",
        "q": "Chodzi o dwa zjawiska, a ___ o zapożyczenia i skróty. <i style='opacity:.6'>а именно — в научном тексте</i>",
        "accept": ["mianowicie"],
        "model": "mianowicie",
        "why": "Уточнение в статье вводит <b>mianowicie</b> или a dokładniej. Konkretnie — слово живого разговора, в научном тексте оно выдаёт чужой этаж.",
        "hint": "Похожее русское слово тут не подойдёт — оно осталось на конференции в буфете 🧪"
      },
      {
        "type": "gap",
        "q": "Zgodnie ___ obowiązującymi przepisami proszę o rozpatrzenie sprawy. <i style='opacity:.6'>согласно предписаниям — впиши предлог</i>",
        "accept": ["z"],
        "model": "z",
        "why": "<b>Zgodnie z</b> требует творительного падежа — всегда и без исключений: zgodnie z umową, zgodnie z przepisami, zgodnie z art. 5 ustawy.",
        "hint": "Форма przepisami уже стоит в нужном падеже — найди предлог, который её вызвал 🏛️"
      },
      {
        "type": "gap",
        "q": "___ się udało! <i style='opacity:.6'>хоть бы получилось</i>",
        "accept": ["Oby", "oby"],
        "model": "Oby",
        "why": "Надежду вводит <b>oby</b>, а глагол после него стоит в форме на -ł: oby się udało, oby zdążyli. С будущим временем этот оборот не сочетается.",
        "hint": "Три буквы, и вся фраза становится пожеланием 🤞"
      },
      {
        "type": "gap",
        "q": "___ wiadomo, że decyzja już zapadła. <i style='opacity:.6'>неофициально известно — одно слово</i>",
        "accept": ["Nieoficjalnie", "nieoficjalnie"],
        "model": "Nieoficjalnie",
        "why": "Этой оговоркой редакция снимает с себя ответственность за факт: <b>nieoficjalnie wiadomo, jak się dowiedzieliśmy, źródła podają</b>. Никто ничего не подтвердил, но звучит веско.",
        "hint": "Слово из газетной кухни: источник есть, имени нет 📰"
      },
      {
        "type": "gap",
        "q": "Muszę ___, mam spotkanie za dwadzieścia minut. <i style='opacity:.6'>мне пора бежать — разговорный глагол</i>",
        "accept": ["lecieć", "leciec"],
        "model": "lecieć",
        "why": "<b>Muszę lecieć</b> — разговорная формула прощания. Нейтральный двойник — muszę już iść, официальный — muszę się pożegnać.",
        "hint": "Глагол про полёт, а человек всего лишь торопится 🏃"
      },
      {
        "type": "trRE",
        "ru": "В приложении направляю свидетельство о рождении.",
        "accept": ["w załączeniu przesyłam odpis aktu urodzenia", "w zalaczeniu przesylam odpis aktu urodzenia", "w załączeniu przesyłam odpis aktu urodzenia.", "w zalaczeniu przesylam odpis aktu urodzenia.", "w załączeniu przesyłam akt urodzenia", "w zalaczeniu przesylam akt urodzenia"],
        "model": "W załączeniu przesyłam odpis aktu urodzenia.",
        "why": "Готовая формула документа: <b>w załączeniu przesyłam</b> плюс название приложения. В подании приложения перечисляют по пунктам после подписи.",
        "hint": "Первое слово — не «w dodatku» и не «w aneksie», а то самое канцелярское 📎"
      },
      {
        "type": "trRE",
        "ru": "По крайней мере он предупредил заранее.",
        "accept": ["przynajmniej uprzedził wcześniej", "przynajmniej uprzedzil wczesniej", "przynajmniej uprzedził wcześniej.", "przynajmniej uprzedzil wczesniej.", "przynajmniej uprzedził nas wcześniej", "przynajmniej uprzedzil nas wczesniej"],
        "model": "Przynajmniej uprzedził wcześniej.",
        "why": "«Хотя бы, по крайней мере» — это <b>przynajmniej</b>. Bynajmniej перевернуло бы фразу в отрицание и потребовало бы nie.",
        "hint": "Из двух похожих слов здесь нужно то, которое уступает, а не отрицает 🎚"
      },
      {
        "type": "trRE",
        "ru": "Из вышесказанного следует, что данные неполные.",
        "accept": ["z powyższego wynika że dane są niepełne", "z powyzszego wynika ze dane sa niepelne", "z powyższego wynika, że dane są niepełne", "z powyzszego wynika, ze dane sa niepelne", "z powyższego wynika, że dane są niepełne."],
        "model": "Z powyższego wynika, że dane są niepełne.",
        "why": "Скрепа, которой закрывают абзац научной работы: <b>z powyższego wynika, że</b>. Слово dane существует только во множественном числе, поэтому są niepełne.",
        "hint": "«Данные» по-польски множественного числа — глагол это чувствует 📐"
      },
      {
        "type": "trER",
        "en": "— Obiecał, że zdąży. — Akurat.",
        "accept": ["обещал, что успеет ага конечно", "— обещал, что успеет. — ага, конечно", "он обещал, что успеет. как же", "обещал успеть. как же", "обещал, что успеет. ну конечно"],
        "model": "— Он обещал, что успеет. — Ага, конечно.",
        "why": "Отдельной репликой <b>akurat</b> значит «как же, ни за что не поверю». В середине фразы то же слово нейтрально: akurat wtedy zadzwonił telefon — «как раз тогда».",
        "hint": "Тон решает всё: одно и то же слово здесь не «как раз», а насмешка 🎭"
      },
      {
        "type": "trER",
        "en": "Na wydawnictwo spadła fala krytyki.",
        "accept": ["на издательство обрушилась волна критики", "на издательство обрушилась волна критики.", "на издательство обрушился шквал критики", "издательство накрыла волна критики"],
        "model": "На издательство обрушилась волна критики.",
        "why": "Пресса берёт глагол из другой жизни: критика приходит волной, цены летают, бюджеты режут. В отчёте та же мысль звучала бы как «wpłynęło wiele uwag krytycznych».",
        "hint": "Образ, а не измерение: сколько именно критики, фраза не сообщает 🌊"
      },
      {
        "type": "order",
        "answer": "Wzywa się do uzupełnienia braków formalnych",
        "accept": ["Wzywa się do uzupełnienia braków formalnych"],
        "hintRu": "Собери: «Вас просят донести недостающие документы.» — языком ведомства",
        "why": "Безличное <b>wzywa się do</b> плюс родительный отглагольного существительного — типовая формула письма из учреждения. Человека в ней нет вовсе.",
        "hint": "Начни с безличной формы, а дальше — существительное вместо глагола 📋"
      },
      {
        "type": "order",
        "answer": "Należy zauważyć że zjawisko to nie jest nowe",
        "accept": ["Należy zauważyć że zjawisko to nie jest nowe"],
        "hintRu": "Собери: «Следует отметить, что явление это не новое.»",
        "why": "<b>Należy zauważyć, że</b> — скрепа, которой ведут читателя внутри научного текста: она вводит важное замечание, не называя автора.",
        "hint": "Начинается с безличного «следует» — и сразу к że 🔬"
      },
      {
        "type": "match",
        "q": "Соедини скрепу с голосом, которому она принадлежит.",
        "pairs": [
          ["w związku z powyższym", "urzędowy"],
          ["należy zauważyć", "naukowy"],
          ["jak się dowiedzieliśmy", "publicystyczny"],
          ["no i, wiesz co", "potoczny"],
          ["wymaga bowiem czasu", "książkowy"]
        ],
        "why": "Голос узнаётся за три секунды по трём приметам: лексика, синтаксис и скрепа. Скрепа выдаёт этаж быстрее всего.",
        "hint": "Пять скреп — пять адресов: учреждение, статья, газета, свои, книга 🎭"
      },
      {
        "type": "describe",
        "prompt": "Напиши 4–5 предложений по-польски об одной новости из своей жизни — сначала двумя официальными фразами (uprzejmie informuję, w związku z, zostanie / zostało), а потом теми же словами по-дружески (no i, daj spokój, ogarnąć, muszę lecieć). Добавь одну оценку вероятности со шкалы: chyba, pewnie, raczej nie или oby.",
        "keywords": ["uprzejmie informuję", "w związku z", "zostało", "zostanie", "no i", "daj spokój", "ogarn", "muszę lecieć", "chyba", "pewnie", "raczej nie", "oby", "przynajmniej"],
        "minWords": 16,
        "model": "Uprzejmie informuję, że termin spotkania uległ zmianie. W związku z powyższym nowy termin zostanie podany w przyszłym tygodniu. A teraz normalnie: no i przełożyli nam wszystko na środę. Daj spokój, ogarnę to w dwa dni, chyba nawet wcześniej. Oby tylko nikt znowu nic nie zmienił.",
        "why": "Один факт — два костюма. Официальная часть держится на скрепах и пассиве, разговорная — на коротких связках; смешивать их внутри одного абзаца нельзя, а вот поставить рядом как два текста — можно.",
        "hint": "Каркас: Uprzejmie informuję, że… W związku z powyższym… A teraz normalnie: no i… Chyba… Oby… 💛"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя научила слышать то, что не сказано вслух. 25 заданий: идиомы по смыслу, а не по словам, пословицы в живой речи, ирония и эвфемизм («что сказано и что имеется в виду»), синоним под регистр, ложные друзья и кальки, ударение-исключения. Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Тело как барометр: <b>mieć muchy w nosie</b> — быть не в духе (мухи всегда во множественном) · <b>ręce mi opadają</b> — руки опускаются (лицо в дательном) · <b>głowa do góry</b> — не унывай, глагола внутри нет · <b>wiercić komuś dziurę w brzuchu</b> — донимать просьбами · <b>na własną rękę</b> — самостоятельно, нейтральное",
      "Человек и его игра: <b>robić dobrą minę do złej gry</b> — держать лицо · <b>mieć węża w kieszeni</b> — быть скупым, колко · <b>spaść z księżyca</b> — быть не в курсе · <b>od siedmiu boleści</b> — никудышный, обидное · <b>wyjść na swoje</b> — остаться при своих",
      "Дело и время: <b>już po ptakach</b> — поздно, поезд ушёл · <b>gdzie diabeł mówi dobranoc</b> — у чёрта на куличках · <b>raz kozie śmierć</b> — была не была · <b>bez dwóch zdań</b> = несомненно (а «в двух словах» — <b>w dwóch słowach</b>) · <b>na dobrą sprawę</b> — по большому счёту",
      "Работа и деньги: <b>wziąć się do roboty</b> · <b>iść jak po grudzie</b> · <b>mieć urwanie głowy</b> · <b>robota pali się w rękach</b> · <b>rzucić kogoś na głęboką wodę</b> · <b>wiązać koniec z końcem</b> (единственное число!) · <b>odłożyć na czarną godzinę</b> (не «czarny dzień») · <b>zacisnąć pasa</b> · <b>płacić jak za zboże</b>",
      "Спор и пословицы: <b>postawić na swoim</b> · <b>wyjść z twarzą</b> · <b>przelać czarę goryczy</b> · <b>mieć komuś coś za złe</b> · <b>złapać kogoś za słowo</b> · <b>trzymać rękę na pulsie</b> · <b>Co nagle, to po diable</b> · <b>Gdzie kucharek sześć…</b> · <b>Nie ma tego złego, co by na dobre nie wyszło</b> · <b>Kto pyta, nie błądzi</b>",
      "Сказать мягко: <b>delikatnie mówiąc</b> (на деле хуже) · <b>mam pewne wątpliwości co do</b> + род. — вежливое «нет» · <b>to nie do końca tak</b> · <b>obawiam się, że</b> · <b>niekoniecznie</b> · <b>z całym szacunkiem</b> · <b>Zgadzam się co do…, natomiast…</b>",
      "Эвфемизм и литота: <b>odszedł</b> = умер · <b>optymalizacja zatrudnienia</b> = увольнения · <b>mijać się z prawdą</b> = врать · <b>niezły, niegłupi, nie najgorszy</b> — это похвала, а не «так себе»",
      "Ирония: <b>Akurat!</b> отдельной репликой = «как же», а <b>akurat wtedy</b> внутри фразы = «как раз» · <b>No pięknie</b> · <b>Świetnie się składa</b> · <b>Tego tylko brakowało</b> · <b>Też mi coś</b> · <b>Zastanowimy się</b> = скорее нет · <b>To wymaga jeszcze pracy</b> = так не пойдёт · в письме иронии нет — там смягчение",
      "То самое слово: <b>oświadczyć</b> со сцены · <b>powiedzieć</b> за столом · <b>mruknąć, bąknąć</b> себе под нос · <b>rzec</b> со страницы · <b>duży</b> меряют, <b>wielki</b> оценивают (wielki sukces) · <b>spory</b> разг., <b>niemały</b> книжн. · <b>kroczyć</b> книжн. — <b>iść</b> — <b>człapać</b> · <b>lokal</b> офиц. — <b>mieszkanie</b> — <b>chata</b> разг. · <b>poirytowany</b> — <b>zły</b> — <b>wkurzony</b> · <b>zatrudnienie</b> — <b>praca</b> — <b>robota</b>",
      "Ложные друзья: <b>sklep</b> = магазин (склеп — krypta) · <b>dywan</b> = ковёр (диван — kanapa) · <b>owoce</b> = фрукты (овощи — warzywa) · <b>krzesło</b> = стул, <b>fotel</b> = кресло · <b>zawód</b> = профессия · <b>pensja</b> = зарплата, <b>emerytura</b> = пенсия · <b>zakon</b> = орден, закон — <b>ustawa</b> · <b>ostatni</b> ≠ <b>ostateczny</b> · <b>zapomnieć</b> ≠ <b>zapamiętać</b> · <b>prosto</b> = прямо, «просто» — <b>po prostu</b>",
      "Кальки: <b>zadzwonić do kogoś</b> · <b>tęsknić za kimś</b> · <b>iść po chleb</b> · <b>przeprosić kogoś</b> · <b>gratulować komuś czegoś</b> · <b>wziąć udział w</b> + предл. (никогда «udziału») · «насчёт» — <b>co do</b>, <b>jeśli chodzi o</b> · «в общем» — <b>ogólnie rzecz biorąc</b> (а <b>w ogóle</b> = вообще, совсем) · «очень сильно» — просто <b>bardzo</b>",
      "Звучание: ударение вглубь слова у <b>ma-te-MA-ty-ka</b>, <b>FI-zy-ka</b>, <b>zro-BI-liśmy</b>, <b>zro-BIŁ-bym</b>, <b>SIE-dem-set</b> · конечное <b>ę</b> теряет носовой (idę), <b>ą</b> держит (idą) · <b>rz = ż</b>, <b>ó = u</b>, <b>ch = h</b> · вежливый переспрос — <b>Słucham?</b> · региональное <b>na polu</b> (Краков), <b>pyry</b> (Познань), <b>kaj</b> (Силезия) — слушаем, а не изображаем"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Ma dziś ___ w nosie — lepiej go nie zaczepiaj. <i style='opacity:.6'>он сегодня не в духе</i>",
        "opts": ["muchy", "muchę", "mrówki", "węża"],
        "answer": "muchy",
        "why": "Внутри оборота слова не редактируются: мухи там всегда во множественном числе — <b>mieć muchy w nosie</b>. Wąż живёт в другом обороте — mieć węża w kieszeni, «быть скупым».",
        "hint": "Оборот — камень, а не конструктор: ни числа, ни слова внутри не меняют 🪨"
      },
      {
        "type": "choice",
        "q": "Как сказать «у меня опускаются руки»?",
        "opts": ["Ręce mi opadają", "Opadam ręce", "Ręce opadają mi", "Mam opadające ręce"],
        "answer": "Ręce mi opadają",
        "why": "Оборот безличный: руки — подлежащее, а человек стоит в дательном. Короткое <b>mi</b> встаёт сразу после первого ударного слова, а не уезжает в хвост.",
        "hint": "Не ты опускаешь руки — руки опускаются у тебя 🫠"
      },
      {
        "type": "choice",
        "q": "«Bez dwóch zdań» znaczy —",
        "opts": ["niewątpliwie", "w dwóch słowach", "bez słowa", "w ciągu dwóch dni"],
        "answer": "niewątpliwie",
        "why": "<b>Bez dwóch zdań</b> — это «без сомнения»: To bez dwóch zdań najlepszy rozdział. А «в двух словах» по-польски — <b>w dwóch słowach</b> или krótko mówiąc.",
        "hint": "Оборот нейтральный, его спокойно берут даже в рецензию — и он про уверенность 👍"
      },
      {
        "type": "choice",
        "q": "«Отложить на чёрный день» по-польски —",
        "opts": ["odłożyć na czarną godzinę", "odłożyć na czarny dzień", "odłożyć na złą godzinę", "odłożyć na czarną chwilę"],
        "answer": "odłożyć na czarną godzinę",
        "why": "У поляка в этом обороте не день, а час: <b>odłożyć na czarną godzinę</b>. Дословный перевод русской версии в языке просто не существует.",
        "hint": "Глосса идиомы — смысл, а не подстрочник: слова внутри выбирает польский, а не русский 💰"
      },
      {
        "type": "choice",
        "q": "Ktoś każe oddać gotowy tekst za godzinę. Уместная пословица —",
        "opts": ["Co nagle, to po diable", "Kto pyta, nie błądzi", "Gdzie kucharek sześć, tam nie ma co jeść", "Nie ma tego złego, co by na dobre nie wyszło"],
        "answer": "Co nagle, to po diable",
        "why": "<b>Co nagle, to po diable</b> — про спешку, которая всё портит. Вторая пословица про вопросы, третья про лишних участников, четвёртая утешает после неудачи.",
        "hint": "Пословицу бросают репликой в ответ на ситуацию — а ситуация здесь про спешку ⏱️"
      },
      {
        "type": "choice",
        "q": "«Mam pewne wątpliwości co do tego tytułu» to —",
        "opts": ["uprzejme «nie»", "pełna zgoda", "zwykłe pytanie o tytuł", "pochwała tytułu"],
        "answer": "uprzejme «nie»",
        "why": "Формула сомнения — вежливый способ не согласиться. Рядом с ней в этой семье живут <b>obawiam się, że</b>, <b>to nie do końca tak</b> и <b>Zastanowimy się</b> — тоже «скорее нет».",
        "hint": "Спроси себя, чего собеседник хочет добиться этой фразой — согласия или отказа 🕊️"
      },
      {
        "type": "choice",
        "q": "«Twój tekst jest niezły» znaczy —",
        "opts": ["tekst jest naprawdę dobry", "tekst jest ledwie znośny", "tekst jest zły", "tekst jest niedokończony"],
        "answer": "tekst jest naprawdę dobry",
        "why": "Литота в польском хвалит, а не охлаждает: <b>niezły, niegłupi, nie najgorszy</b> ближе к «отличный», чем к «сойдёт». Прячут здесь хорошее, а не плохое.",
        "hint": "Отрицание минуса даёт плюс — и в польском этот плюс больше, чем кажется 🙂"
      },
      {
        "type": "choice",
        "q": "Rzecznik ___ na konferencji, że decyzja już zapadła. <i style='opacity:.6'>заявил публично</i>",
        "opts": ["oświadczył", "mruknął", "bąknął", "rzekł"],
        "answer": "oświadczył",
        "why": "Публичное заявление вводится официальным глаголом: <b>oświadczyć, oznajmić</b>. Mruknąć и bąknąć — это себе под нос, rzec — книжное слово со страницы романа.",
        "hint": "Сначала регистр, потом оттенок: человек говорит со сцены, а не в кухне 🗨️"
      },
      {
        "type": "choice",
        "q": "___ w konferencji w maju. <i style='opacity:.6'>мы приняли участие в конференции</i>",
        "opts": ["Wzięliśmy udział", "Przyjęliśmy udział", "Wzięliśmy udziału", "Braliśmy udziału"],
        "answer": "Wzięliśmy udział",
        "why": "С существительным udział работают только brać и wziąć, и стоит оно в винительном: <b>wziąć udział w</b> + предложный. Przyjąć и родительный udziału приезжают прямо из русского.",
        "hint": "Две русские привычки сразу: и глагол не тот, и падеж 🚧"
      },
      {
        "type": "choice",
        "q": "В каком слове ударение НЕ на предпоследнем слоге?",
        "opts": ["fizyka", "gazeta", "książka", "kolega"],
        "answer": "fizyka",
        "why": "У слов на -yka книжная норма ставит ударение на третий слог от конца: <b>FI-zy-ka, MU-zy-ka, ma-te-MA-ty-ka</b>. Остальные три слова живут по общему правилу.",
        "hint": "Ищи слово из школьного расписания — именно они выбиваются 🎯"
      },
      {
        "type": "gap",
        "q": "Mam dziś ___ głowy, oddzwonię po trzeciej. <i style='opacity:.6'>у меня запарка</i>",
        "accept": ["urwanie"],
        "model": "urwanie",
        "why": "<b>Mieć urwanie głowy</b> — быть в запарке. Внутри оборота застыл родительный głowy: форма «urwanie głowę» невозможна.",
        "hint": "Существительное от глагола urwać — и дальше падеж уже не трогаем 🔨"
      },
      {
        "type": "gap",
        "q": "— Zdąży na czas? — ___! <i style='opacity:.6'>как же, ни за что не поверю — одно слово</i>",
        "accept": ["Akurat", "akurat"],
        "model": "Akurat",
        "why": "Отдельной репликой это слово значит «как же, ни за что». Внутри предложения то же слово нейтрально: <b>akurat wtedy zadzwonił telefon</b> — «как раз тогда».",
        "hint": "Одно слово меняет смысл на противоположный в зависимости от того, стоит оно отдельно или внутри фразы 🙃"
      },
      {
        "type": "gap",
        "q": "Dziadek dostaje ___ i już nie pracuje. <i style='opacity:.6'>пенсию по возрасту</i>",
        "accept": ["emeryturę", "emeryture"],
        "model": "emeryturę",
        "why": "<b>Emerytura</b> — пенсия того, кто уже не работает, а <b>pensja</b> — зарплата работающего. Один из самых обидных ложных друзей уровня.",
        "hint": "Слово, похожее на «пенсию», занято совсем другим значением 🧓"
      },
      {
        "type": "gap",
        "q": "___ zapomniałam, przepraszam. <i style='opacity:.6'>я просто забыла — впиши два слова</i>",
        "accept": ["Po prostu", "po prostu"],
        "model": "Po prostu",
        "why": "<b>Prosto</b> значит «прямо» — о направлении (Proszę iść prosto). «Просто» в смысле «всего лишь» — только <b>po prostu</b>.",
        "hint": "Одно слово тут превратится в дорожное указание — нужен предлог перед ним 🧭"
      },
      {
        "type": "gap",
        "q": "W umowie najmu: ___ znajduje się na parterze. <i style='opacity:.6'>помещение — официальное слово</i>",
        "accept": ["Lokal", "lokal"],
        "model": "Lokal",
        "why": "В документе работает официальный ряд: <b>lokal</b> — mieszkanie — chata. Разговорное слово в договоре выглядит как ошибка регистра.",
        "hint": "Три полки: książkowe, neutralne, potoczne. Договор берёт с верхней 🗄️"
      },
      {
        "type": "trRE",
        "ru": "Не унывай, как-нибудь справимся.",
        "accept": ["głowa do góry jakoś to będzie", "glowa do gory jakos to bedzie", "głowa do góry, jakoś to będzie", "glowa do gory, jakos to bedzie", "głowa do góry, jakoś to będzie."],
        "model": "Głowa do góry, jakoś to będzie.",
        "why": "Оборот застыл целиком и глагола не принимает: <b>Głowa do góry!</b> — «Trzymaj głowę do góry» рассыпает фразу.",
        "hint": "Два слова про голову вверх — и ни одного глагола 🙂"
      },
      {
        "type": "trRE",
        "ru": "Он всё же настоял на своём.",
        "accept": ["jednak postawił na swoim", "jednak postawil na swoim", "jednak postawił na swoim.", "postawił jednak na swoim", "postawil jednak na swoim"],
        "model": "Jednak postawił na swoim.",
        "why": "В обороте застыл предложный падеж: <b>postawić na swoim</b>. Форма na swoje здесь не встречается.",
        "hint": "Глагол «ставить», а падеж после na — тот, что отвечает на «на чём» 🤝"
      },
      {
        "type": "trRE",
        "ru": "Я скучаю по Кракову.",
        "accept": ["tęsknię za Krakowem", "tesknie za Krakowem", "tęsknię za Krakowem.", "tesknie za krakowem", "tęsknię za krakowem"],
        "model": "Tęsknię za Krakowem.",
        "why": "Русское «скучаю по» тянет за собой предлог po, но польский тоскует <b>za</b> плюс творительный: tęsknię za tobą, za domem, za Krakowem.",
        "hint": "Предлог учится вместе с глаголом — и здесь он не тот, что в русском 🏰"
      },
      {
        "type": "trER",
        "en": "Drukarnia jest gdzie diabeł mówi dobranoc.",
        "accept": ["типография у чёрта на куличках", "типография у чёрта на куличках.", "типография находится у чёрта на куличках", "типография очень далеко"],
        "model": "Типография у чёрта на куличках.",
        "why": "Глосса идиомы — её смысл: «очень далеко, в глуши». Подстрочник про чёрта, который говорит «спокойной ночи», по-русски не значит ничего.",
        "hint": "Переводи оборот целиком, как одно длинное слово 🌍"
      },
      {
        "type": "trER",
        "en": "W firmie trwa optymalizacja zatrudnienia.",
        "accept": ["в фирме идут увольнения", "в фирме идут увольнения.", "в компании идут увольнения", "в фирме увольняют людей"],
        "model": "В фирме идут увольнения.",
        "why": "Корпоративный эвфемизм прячет неприятное: <b>optymalizacja zatrudnienia</b> означает сокращения. Так же <b>odszedł</b> = умер, <b>mijać się z prawdą</b> = врать.",
        "hint": "Спроси себя, что стоит за красивым словом — эвфемизм всегда что-то смягчает 📉"
      },
      {
        "type": "order",
        "answer": "Mam pewne wątpliwości co do tego tytułu",
        "accept": ["Mam pewne wątpliwości co do tego tytułu"],
        "hintRu": "Собери: «У меня есть сомнения насчёт этого названия.»",
        "why": "Оборот идёт с <b>co do</b> плюс родительный. Предлог o тянется сюда из русского «сомнения о» и в этой формуле не работает.",
        "hint": "Вежливое «нет» состоит из четырёх частей: у меня есть, некоторые, сомнения и «насчёт» 🕊️"
      },
      {
        "type": "order",
        "answer": "Nie ma tego złego co by na dobre nie wyszło",
        "accept": ["Nie ma tego złego co by na dobre nie wyszło"],
        "hintRu": "Собери пословицу: «Нет худа без добра.»",
        "why": "Внутри пословицы застыла частица <b>co by</b> — без неё фраза звучит как незаконченное предложение. Пословицы не редактируются.",
        "hint": "Дословно: нет того плохого, что бы на хорошее не вышло 🍀"
      },
      {
        "type": "match",
        "q": "Соедини идиому с её смыслом.",
        "pairs": [
          ["mieć węża w kieszeni", "быть скупым"],
          ["iść jak po grudzie", "идти со скрипом"],
          ["już po ptakach", "поздно, поезд ушёл"],
          ["przelać czarę goryczy", "стать последней каплей"],
          ["wyjść z twarzą", "выйти из ситуации достойно"]
        ],
        "why": "Смысл, а не подстрочник — так мы договорились с первого дня. Внутри оборота слова не считаются: считается вся фраза целиком.",
        "hint": "Пять оборотов про жадность, работу, время, терпение и достоинство 🧩"
      },
      {
        "type": "match",
        "q": "Соедини разговорное слово с его официальным двойником.",
        "pairs": [
          ["kasa", "środki"],
          ["chata", "lokal"],
          ["robota", "zatrudnienie"],
          ["wkurzony", "poirytowany"],
          ["fucha", "praca dodatkowa"]
        ],
        "why": "Каждая пара — один смысл на двух этажах. Сначала выбираешь регистр, потом оттенок: начал(а) официально — держи до точки.",
        "hint": "Слева то, что говорят своим, справа — то, что пишут в документе 🎚️"
      },
      {
        "type": "describe",
        "prompt": "Напиши 4–5 предложений по-польски о дне, когда всё шло не так: используй одну идиому недели (urwanie głowy, iść jak po grudzie, ręce mi opadają, po ptakach, głowa do góry), одну смягчающую формулу (delikatnie mówiąc, obawiam się, że, mam pewne wątpliwości co do) и закончи пословицей или спокойным выводом.",
        "keywords": ["urwanie głowy", "jak po grudzie", "ręce mi opadają", "po ptakach", "głowa do góry", "delikatnie mówiąc", "obawiam się", "wątpliwości co do", "na własną rękę", "wyjść z twarzą", "co nagle"],
        "minWords": 16,
        "model": "W poniedziałek miałam urwanie głowy: trzy sprawy i jeden termin. Wszystko szło jak po grudzie, a po południu ręce mi opadały. Delikatnie mówiąc, nie był to mój najlepszy dzień. Załatwiłam jednak dwie rzeczy na własną rękę i wyszłam z tego z twarzą. Głowa do góry — jutro zacznę spokojniej.",
        "why": "Идиома работает по одной на абзац, а смягчающая формула показывает оценку, не срываясь на резкость. Именно так звучит живой рассказ о трудном дне.",
        "hint": "Каркас: Miałam urwanie głowy… Wszystko szło jak po grudzie… Delikatnie mówiąc… Głowa do góry 💛"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен C1",
    "intro": "Это финал! 33 задания по всему уровню C1: коллокации и управление, тонкий вид и обороты-компрессия, номинализация и канцелярские скрепы, шкала уверенности с bynajmniej, идиомы, ирония и русские кальки — и вся Неделя 4: streszczenie, эссе, переговоры, публичная речь, культурные отсылки, кредит и налоги, работа и свадьба. Соберись — и вперёд к грамоте C1! 🏆",
    "review": [
      "Слова ходят парами: <b>popełnić błąd</b> · <b>odnieść sukces</b> · <b>ponieść porażkę</b> · <b>podjąć decyzję</b> · <b>zawrzeć umowę</b> · <b>wywrzeć wpływ</b> · <b>zwrócić uwagę na</b> · <b>wyciągnąć wniosek</b> · <b>brać udział w</b> · <b>dotrzymać terminu</b> · <b>odnieść wrażenie, że</b> ≠ <b>zrobić wrażenie na kimś</b>",
      "Управление: <b>zdolny do</b> · <b>odporny na</b> · <b>dumny z</b> · <b>świadomy</b> + род. · <b>zainteresowany, zajęty</b> + твор. · <b>wdzięczny za</b> · <b>prawo do</b> · <b>dostęp do</b> · <b>wpływ na</b> + вин. · <b>zainteresowanie</b> + твор. без предлога · <b>walka z</b> = против, <b>walka o</b> = ради",
      "Вид на волосок: <b>zdawać</b> ≠ <b>zdać</b> · <b>namawiałam, ale nie namówiłam</b> · <b>musiałam robić</b> = приходилось, <b>musiałam zrobić</b> = пришлось · после <b>zacząć, przestać</b> только несов. · <b>Czytałeś?</b> вообще ≠ <b>Przeczytałeś?</b> то самое · <b>nie zdążyłam przeczytać</b> · <b>zapomnieć</b> ≠ <b>zapamiętać</b>",
      "Компрессия: который mówi → <b>mówiący</b> · sprawa <b>dotycząca</b> umowy · tekst <b>napisany przez</b> Annę · <b>Czekając na tramwaj, czytała</b> — подлежащее одно на двоих · книжное <b>Skończywszy pracę, wyszła</b> · причастия прошедшего времени в польском нет",
      "Номинализация и скрепы: podjęto decyzję → <b>podjęcie decyzji</b> · ceny wzrosły → <b>wzrost cen</b> · <b>ulec zmianie</b> · <b>w związku ze</b> + твор. · <b>w wyniku, na skutek, w celu, w przypadku, na podstawie, w ramach</b> + род. · <b>ze względu na</b> + вин. · <b>zgodnie z</b> + твор. · <b>mimo</b> + род. без na",
      "Порядок слов: новое — в конец (<b>Ten reportaż napisała Kasia</b>) · тема вперёд (<b>Tego błędu nikt nie zauważył</b>) · <b>Nie mogę się doczekać</b> · <b>mi, ci</b> перед się · после предлога <b>do niego</b> · <b>dopiero</b> = мало и поздно, <b>aż</b> = много, <b>właśnie, przecież, nawet</b>",
      "Пять голосов: канцелярия — <b>zwracam się z uprzejmą prośbą o</b> + вин., <b>zaświadczenie</b> ≠ <b>oświadczenie</b>, <b>odwołanie od decyzji</b>, <b>w terminie 14 dni</b> · наука — <b>dotyczy</b> + род., <b>należy zauważyć</b>, <b>z powyższego wynika</b>, <b>wydaje się, że</b>, <b>mianowicie</b> · газета — <b>ceny szybują</b>, <b>fala krytyki</b>, <b>Koniec z</b> + твор., <b>nieoficjalnie</b> · улица — <b>ogarnąć, kumać, muszę lecieć, daj spokój</b> · книга — <b>rzec, ujrzeć, bowiem</b> вторым словом, инверсия",
      "Уверенность и ирония: <b>na pewno → pewnie → chyba → może → raczej nie → wykluczone</b> · <b>bynajmniej</b> = отнюдь и всегда с <b>nie</b> ≠ <b>przynajmniej</b> = хотя бы · <b>oby / obyś</b> + форма на -ł · <b>żeby tylko</b>, <b>byle</b>, <b>choćby</b> · <b>Akurat!</b> отдельно = «как же», внутри фразы = «как раз»",
      "Подтекст: <b>mieć muchy w nosie</b> · <b>ręce mi opadają</b> · <b>po ptakach</b> · <b>iść jak po grudzie</b> · <b>urwanie głowy</b> · <b>wiązać koniec z końcem</b> · <b>odłożyć na czarną godzinę</b> · <b>postawić na swoim</b> · <b>wyjść z twarzą</b> · <b>Co nagle, to po diable</b> · <b>delikatnie mówiąc</b> · <b>niezły</b> = очень хорош · <b>optymalizacja zatrudnienia</b> = увольнения",
      "Точное слово и ловушки: <b>oświadczyć — powiedzieć — mruknąć — rzec</b> · <b>lokal — mieszkanie — chata</b> · <b>poirytowany — zły — wkurzony</b> · <b>sklep</b> = магазин · <b>owoce</b> = фрукты · <b>pensja</b> = зарплата, <b>emerytura</b> = пенсия · <b>ustawa</b> = закон · <b>ostateczny</b> ≠ <b>ostatni</b> · <b>tęsknić za</b> · <b>zadzwonić do</b> · <b>wziąć udział w</b> · <b>po prostu</b> ≠ <b>prosto</b> · <b>ogólnie rzecz biorąc</b> ≠ <b>w ogóle</b>",
      "Жанры взрослого языка: streszczenie — <b>tekst dotyczy</b>, <b>autor twierdzi, że</b>, <b>autor dochodzi do wniosku</b>, без цитат, оценок и «я» · rozprawka — спорный тезис, <b>przyjęło się sądzić</b>, <b>wbrew pozorom</b>, <b>owszem…, ale…</b>, <b>natomiast</b>, <b>wszystko to prowadzi do wniosku, że</b> · переговоры — признать, ограничить, <b>предложить</b>, <b>Czy dobrze rozumiem, że…?</b>, <b>Państwo</b> + 3 л. мн., <b>pod warunkiem że</b>, <b>Podsumujmy ustalenia</b>",
      "Сцена, культура и взрослые дела: <b>Szanowni Państwo</b>, правило тройки, пуанта, <b>Chciałabym wznieść toast za…</b>, <b>Za młodą parę! Sto lat!</b> · <b>chocholi taniec</b>, <b>Nie mamy pana płaszcza</b>, <b>Jak nie urok, to przemarsz wojsk</b>, <b>przypisuje się Lemowi</b> · <b>zaciągnąć kredyt</b>, <b>zdolność kredytowa</b>, <b>wkład własny</b>, <b>zadatek</b> ≠ <b>zaliczka</b>, <b>wypowiedzieć umowę</b>, <b>rozliczyć się z urzędem skarbowym</b>, <b>faktura</b> · работа — <b>zacznijmy od</b>, <b>powierzyć komuś</b> + дат., <b>Doceniam…, natomiast warto…</b>, <b>zgodnie z ustaleniami</b> · свадьба — <b>wziąć ślub</b>, <b>ślub</b> ≠ <b>wesele</b>, <b>oczepiny</b>, <b>poprawiny</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "To ma duży ___ naszą decyzję. <i style='opacity:.6'>влияние на наше решение</i>",
        "opts": ["wpływ na", "wpływ do", "wpływ dla", "wpływ o"],
        "answer": "wpływ na",
        "why": "<b>Wpływ</b> ходит с na и винительным: wpływ na decyzję, na wynik, na ludzi. Предлог do идёт с другими словами — prawo do, dostęp do, podejście do.",
        "hint": "Здесь русский и польский совпадают — а вот в prawo do расходятся 🔑"
      },
      {
        "type": "choice",
        "q": "Egzamin ___ trzy razy, a zdałam dopiero za trzecim. <i style='opacity:.6'>экзамен я сдавала три раза</i>",
        "opts": ["zdawałam", "zdałam", "zdaję", "zdam"],
        "answer": "zdawałam",
        "why": "Ключевая пара уровня: <b>zdawać</b> — быть на экзамене, <b>zdać</b> — получить результат. Повтор попытки требует несовершенного вида, иначе фраза противоречит сама себе.",
        "hint": "Три раза можно только пробовать — получилось-то один раз ⏳"
      },
      {
        "type": "choice",
        "q": "Какое предложение построено правильно?",
        "opts": ["Czekając na tramwaj, czytałam wiadomości", "Czekając na tramwaj, zaczęło padać", "Czekając na odpowiedź, minął tydzień", "Ludzie mieszkając w mieście jeżdżą tramwajem"],
        "answer": "Czekając na tramwaj, czytałam wiadomości",
        "why": "У оборота на <b>-ąc</b> и у предложения одно подлежащее: ждала я — и читала тоже я. Во втором и третьем вариантах действующие лица разные, в четвёртом нужна форма mieszkający.",
        "hint": "Найди того, кто ждёт, и того, кто делает второе действие ⛓️"
      },
      {
        "type": "choice",
        "q": "Wybierz poprawne zdanie.",
        "opts": ["Bynajmniej nie było łatwo", "Bynajmniej było łatwo", "Bynajmniej zadzwonił, więc wiedzieliśmy", "Bynajmniej okładka jest już gotowa"],
        "answer": "Bynajmniej nie było łatwo",
        "why": "<b>Bynajmniej</b> — усилитель отрицания и живёт только рядом с nie. В третьем и четвёртом вариантах по смыслу нужно <b>przynajmniej</b> — «хотя бы».",
        "hint": "Главная ловушка второй недели: одна приставка — два противоположных слова ⚠️"
      },
      {
        "type": "choice",
        "q": "Uprzejmie proszę o ___ terminu o czternaście dni. <i style='opacity:.6'>о продлении срока</i>",
        "opts": ["przedłużenie", "przedłużenia", "przedłużeniu", "przedłużeniem"],
        "answer": "przedłużenie",
        "why": "После <b>proszę o</b> идёт винительный падеж: proszę o przedłużenie, o wydanie, o rozpatrzenie. Родительный приезжает сюда из русского «о продлении».",
        "hint": "В документе просьбу оформляют существительным — и падеж выбирает предлог o 🏛️"
      },
      {
        "type": "choice",
        "q": "«Ledwo wiążemy koniec z końcem» znaczy —",
        "opts": ["ledwo starcza nam pieniędzy", "kończymy pracę na czas", "jesteśmy bardzo zajęci", "mieszkamy bardzo daleko"],
        "answer": "ledwo starcza nam pieniędzy",
        "why": "Оборот про деньги: еле сводим концы с концами. Внутри него застыло единственное число — «końce z końcami» приезжает прямо из русского.",
        "hint": "Идиому переводим смыслом целиком, а этот смысл — про кошелёк 💰"
      },
      {
        "type": "choice",
        "q": "— Oddam jutro. — Akurat. Co znaczy ta odpowiedź?",
        "opts": ["nie wierzy w to", "zgadza się", "dziękuje", "pyta o dokładny termin"],
        "answer": "nie wierzy w to",
        "why": "Отдельной репликой <b>akurat</b> значит «как же, ни за что». Внутри предложения то же слово нейтрально: akurat wtedy zadzwonił telefon — «как раз тогда».",
        "hint": "Позиция слова решает всё: отдельно — насмешка, внутри фразы — «как раз» 🙃"
      },
      {
        "type": "choice",
        "q": "Какое предложение годится для streszczenia?",
        "opts": ["Powieść dotyczy trzech pokoleń jednej rodziny", "To bardzo ciekawa powieść o rodzinie", "Moim zdaniem autorka ma rację", "Autor słusznie zauważa, że wieś się wyludnia"],
        "answer": "Powieść dotyczy trzech pokoleń jednej rodziny",
        "why": "В streszczenie нет ни оценки, ни тебя: только то, о чём текст. Слова <b>ciekawa</b>, <b>moim zdaniem</b> и наречие <b>słusznie</b> — это уже рецензия.",
        "hint": "Три запрета жанра: цитата, оценка и «я» 📄"
      },
      {
        "type": "choice",
        "q": "Что здесь настоящий тезис для rozprawki?",
        "opts": ["Lektury obowiązkowe szkodzą czytelnictwu", "Czytanie jest ważne", "Książki są potrzebne człowiekowi", "Wiele osób lubi czytać"],
        "answer": "Lektury obowiązkowe szkodzą czytelnictwu",
        "why": "Тезис должен иметь противника: напиши обратное и проверь, звучит ли оно защитимо. С остальными тремя утверждениями никто не спорит — это komunały.",
        "hint": "Попробуй возразить каждому варианту: где возражение звучит осмысленно? ⚖️"
      },
      {
        "type": "choice",
        "q": "Wybierz dobre zakończenie rozprawki.",
        "opts": ["Wszystko to prowadzi do wniosku, że wybór jest częścią czytania", "A może po prostu nie umiemy czytać?", "Nie jestem ekspertem, ale tak mi się wydaje", "Warto też dodać, że nauczyciele są przemęczeni"],
        "answer": "Wszystko to prowadzi do wniosku, że wybór jest częścią czytania",
        "why": "Вывод — это тезис другими словами плюс один шаг вперёд. Вопрос без ответа обрывает текст, извинение перечёркивает его, а новый аргумент открывает тему, которую уже некуда развить.",
        "hint": "В финале не спрашивают, не извиняются и не начинают заново 🏁"
      },
      {
        "type": "choice",
        "q": "«Rozumiem pana punkt widzenia, ale termin jest dla nas kluczowy.» Czego tu brakuje?",
        "opts": ["propozycji rozwiązania", "przeprosin", "podziękowania", "tytułu grzecznościowego"],
        "answer": "propozycji rozwiązania",
        "why": "Формула переговоров состоит из трёх шагов: признать — ограничить — <b>предложить</b>. Без третьего шага это просто «нет», и разговор закрывается.",
        "hint": "Два шага уже сделаны. Чего ждёт собеседник дальше? 🤝"
      },
      {
        "type": "choice",
        "q": "«Я хотела бы поднять тост за автора» —",
        "opts": ["Chciałabym wznieść toast za autorkę", "Chciałabym zrobić toast za autorkę", "Chciałabym podnieść toast za autorkę", "Chciałabym postawić toast za autorkę"],
        "answer": "Chciałabym wznieść toast za autorkę",
        "why": "Тост в польском <b>wznosi się</b> — это такая же устойчивая пара, как popełnić błąd и podjąć decyzję. Zrobić, podnieść и postawić с ним не сочетаются.",
        "hint": "Ещё одна коллокация уровня: глагол у тоста свой 🥂"
      },
      {
        "type": "choice",
        "q": "«Chocholi taniec» znaczy —",
        "opts": ["ruch w kółko bez żadnego efektu", "taniec na weselu", "pierwszy taniec pary młodej", "taniec ludowy z Podhala"],
        "answer": "ruch w kółko bez żadnego efektu",
        "why": "Отсылка к «Weselu» Выспяньского: в финале все кружатся, и из этого ничего не выходит. В быту так говорят о совещаниях и планах, которые топчутся на месте.",
        "hint": "Буквально никто этот танец не танцует — это метафора 📖"
      },
      {
        "type": "choice",
        "q": "Co zwraca się w podwójnej wysokości, jeśli sprzedający się wycofa?",
        "opts": ["zadatek", "zaliczka", "kaucja", "prowizja"],
        "answer": "zadatek",
        "why": "<b>Zaliczka</b> просто возвращается, а <b>zadatek</b> работает как обеспечение сделки для обеих сторон: покупатель его теряет, продавец возвращает вдвое. Kaucja — залог при аренде.",
        "hint": "Два похожих слова, две разные суммы — и разница вылезает именно при срыве сделки 🏦"
      },
      {
        "type": "gap",
        "q": "Mimo ___ książka ukazała się w terminie. <i style='opacity:.6'>несмотря на задержку (opóźnienie)</i>",
        "accept": ["opóźnienia", "opoznienia"],
        "model": "opóźnienia",
        "why": "Перед существительным стоит голое <b>mimo</b> с родительным падежом — никакого na между ними. Mimo że открывает целое предложение с глаголом.",
        "hint": "Русское «несмотря на» приводит с собой лишний предлог, а падеж тут родительный 📚"
      },
      {
        "type": "gap",
        "q": "Zgodnie ___ ustaleniami przesyłam harmonogram. <i style='opacity:.6'>согласно договорённостям — впиши предлог</i>",
        "accept": ["z"],
        "model": "z",
        "why": "<b>Zgodnie z</b> всегда идёт с творительным падежом: zgodnie z ustaleniami, z umową, z przepisami. Этой формулой открывают письмо-итог после встречи.",
        "hint": "Форма ustaleniami уже стоит в нужном падеже — найди предлог, который её вызвал ✉️"
      },
      {
        "type": "gap",
        "q": "Tęsknię ___ Krakowem. <i style='opacity:.6'>скучаю по Кракову — впиши предлог</i>",
        "accept": ["za"],
        "model": "za",
        "why": "Русское «скучаю по» тянет предлог po, но польский тоскует <b>za</b> плюс творительный: tęsknię za tobą, za domem, za latem.",
        "hint": "Предлог учится вместе с глаголом — и здесь он расходится с русским 🏰"
      },
      {
        "type": "gap",
        "q": "To zdanie ___ się Lemowi, ale źródła nie znalazłam. <i style='opacity:.6'>приписывают Лему (przypisywać)</i>",
        "accept": ["przypisuje"],
        "model": "przypisuje",
        "why": "Если источник цитаты не проверен, безличная формула <b>przypisuje się komuś</b> спасает и точность, и репутацию — на C1 это отдельный навык.",
        "hint": "Безличная форма с się: не «он сказал», а «это ему приписывают» 🏅"
      },
      {
        "type": "gap",
        "q": "W kwietniu rozliczyłem ___ z urzędem skarbowym. <i style='opacity:.6'>отчитался перед налоговой — впиши короткое слово</i>",
        "accept": ["się", "sie"],
        "model": "się",
        "why": "Здесь глагол работает только с się: <b>rozliczyć się z urzędem skarbowym</b>. Без się получается «свести чей-то счёт» — совсем другое значение.",
        "hint": "Одно короткое слово превращает бухгалтерию в отчёт о себе 🧾"
      },
      {
        "type": "gap",
        "q": "Powierzyłam ___ cały rozdział i nie żałuję. <i style='opacity:.6'>доверила ей</i>",
        "accept": ["jej"],
        "model": "jej",
        "why": "<b>Powierzyć</b> управляет дательным падежом человека: powierzyć komu — jej, mu, Kasi. Винительный «powierzyłam ją» здесь невозможен.",
        "hint": "Доверяют кому, а не кого — падеж как в dać komuś 📌"
      },
      {
        "type": "trRE",
        "ru": "Текст, написанный Анной, ушёл в печать в среду.",
        "accept": ["tekst napisany przez Annę poszedł do druku w środę", "tekst napisany przez anne poszedl do druku w srode", "tekst napisany przez Annę poszedł do druku w środę.", "tekst napisany przez anne poszedl do druku w srode."],
        "model": "Tekst napisany przez Annę poszedł do druku w środę.",
        "why": "Исполнитель при страдательном причастии входит через <b>przez</b> с винительным. Od Anny означало бы «от Анны» — источник передачи, а не автора.",
        "hint": "Причастие от napisać, а дальше — предлог исполнителя 🖨️"
      },
      {
        "type": "trRE",
        "ru": "Правильно ли я понимаю, что весь тираж остановлен?",
        "accept": ["czy dobrze rozumiem że cały nakład jest wstrzymany", "czy dobrze rozumiem, że cały nakład jest wstrzymany", "czy dobrze rozumiem ze caly naklad jest wstrzymany", "czy dobrze rozumiem, ze caly naklad jest wstrzymany"],
        "model": "Czy dobrze rozumiem, że cały nakład jest wstrzymany?",
        "why": "Переспрос — главный инструмент переговоров: он уточняет условие и даёт тебе время подумать. Формула застывшая, её берут целиком.",
        "hint": "Начинается с czy, а дальше — «хорошо ли я понимаю, что…» 🔁"
      },
      {
        "type": "trRE",
        "ru": "Мы поженились в субботу в двенадцать.",
        "accept": ["wzięliśmy ślub w sobotę o dwunastej", "wzielismy slub w sobote o dwunastej", "wzięliśmy ślub w sobotę o dwunastej.", "wzielismy slub w sobote o dwunastej."],
        "model": "Wzięliśmy ślub w sobotę o dwunastej.",
        "why": "По-польски <b>ślub się bierze</b>: wziąć ślub. Zrobić ślub — калька; zrobić можно wesele, но не ślub. И помни: ślub — церемония, wesele — застолье после неё.",
        "hint": "Ещё одна пара «глагол плюс существительное», и глагол здесь тот же, что в brać udział 💍"
      },
      {
        "type": "trRE",
        "ru": "Во вложении высылаю итоговый график.",
        "accept": ["w załączeniu przesyłam ostateczny harmonogram", "w zalaczeniu przesylam ostateczny harmonogram", "w załączeniu przesyłam ostateczny harmonogram.", "w zalaczeniu przesylam ostateczny harmonogram."],
        "model": "W załączeniu przesyłam ostateczny harmonogram.",
        "why": "Формула делового письма: <b>w załączeniu przesyłam</b> плюс название документа. Ostateczny значит «окончательный», а ostatni — «последний по порядку».",
        "hint": "Первые два слова — застывшая канцелярская связка, а прилагательное здесь не «ostatni» 📎"
      },
      {
        "type": "trER",
        "en": "Ręce mi opadają.",
        "accept": ["у меня опускаются руки", "у меня опускаются руки.", "у меня руки опускаются", "руки опускаются"],
        "model": "У меня опускаются руки.",
        "why": "Оборот безличный: руки — подлежащее, а человек стоит в дательном падеже. Короткое <b>mi</b> встаёт сразу после первого слова, а не в конец фразы.",
        "hint": "Не ты что-то делаешь — это происходит с тобой 🫠"
      },
      {
        "type": "trER",
        "en": "Jak nie urok, to przemarsz wojsk.",
        "accept": ["не одно, так другое", "не одно так другое", "не одно, так другое.", "не то, так другое"],
        "model": "Не одно, так другое.",
        "why": "Киноцитата из «Misia», которую в быту говорят о череде неприятностей. Дословный перевод про сглаз и марш войск по-русски не значит ничего — переводим смысл.",
        "hint": "Смысл целиком, а не по словам: фраза про то, как беды идут одна за другой 🎬"
      },
      {
        "type": "trER",
        "en": "Zaciągnęliśmy kredyt hipoteczny na dwadzieścia pięć lat.",
        "accept": ["мы взяли ипотечный кредит на двадцать пять лет", "мы взяли ипотечный кредит на двадцать пять лет.", "мы взяли ипотеку на двадцать пять лет", "мы оформили ипотечный кредит на двадцать пять лет"],
        "model": "Мы взяли ипотечный кредит на двадцать пять лет.",
        "why": "Кредит по-польски <b>zaciąga się</b> (разговорно — bierze), а ratę spłaca się. «Zrobić kredyt» — калька, которую слышно сразу.",
        "hint": "Глагол у кредита свой, а по-русски мы говорим просто «взяли» 🏦"
      },
      {
        "type": "order",
        "answer": "Wróćmy do sedna potrzebujemy konkretnej daty",
        "accept": ["Wróćmy do sedna potrzebujemy konkretnej daty"],
        "hintRu": "Собери: «Вернёмся к сути: нам нужна конкретная дата.»",
        "why": "Возврат к сути — способ прекратить спор, не переходя на личности. Potrzebować — глагол-магнит родительного падежа: potrzebujemy daty.",
        "hint": "Сначала «вернёмся к сути», потом — чего именно вы хотите 🧭"
      },
      {
        "type": "order",
        "answer": "Wszystko to prowadzi do wniosku że wybór jest częścią czytania",
        "accept": ["Wszystko to prowadzi do wniosku że wybór jest częścią czytania"],
        "hintRu": "Собери: «Всё это приводит к выводу, что выбор — часть чтения.»",
        "why": "Нейтральная концовка rozprawki. В рамке «X — это Y» с глаголом jest польский ставит творительный: <b>jest częścią</b> czytania.",
        "hint": "Скрепа вывода, а после że — рамка с творительным падежом 🏁"
      },
      {
        "type": "match",
        "q": "Соедини формулу с жанром, в котором она работает.",
        "pairs": [
          ["Tekst dotyczy…", "streszczenie"],
          ["Wszystko to prowadzi do wniosku, że…", "rozprawka"],
          ["Czy dobrze rozumiem, że…?", "negocjacje"],
          ["Szanowni Państwo…", "wystąpienie publiczne"],
          ["W załączeniu przesyłam…", "pismo służbowe"]
        ],
        "why": "Каждый жанр четвёртой недели узнаётся по первой же формуле — именно она задаёт этаж и обещает читателю определённую структуру.",
        "hint": "Пять входов в пять разных текстов: пересказ, рассуждение, разговор, сцена, письмо 🎭"
      },
      {
        "type": "match",
        "q": "Соедини идиому с её смыслом.",
        "pairs": [
          ["chocholi taniec", "движение по кругу без результата"],
          ["już po ptakach", "поздно, поезд ушёл"],
          ["urwanie głowy", "запарка, дел невпроворот"],
          ["wyjść z twarzą", "выйти из положения достойно"],
          ["ręce opadają", "руки опускаются"]
        ],
        "why": "Глосса идиомы — её смысл, а не подстрочник. Так мы читали фразеологию всю третью неделю и так же читаем культурные отсылки.",
        "hint": "Ни в одном из пяти не считай слова по отдельности 🧩"
      },
      {
        "type": "describe",
        "prompt": "Напиши 4–5 предложений по-польски — письмо-итог после рабочего разговора: сошлись на договорённостях (zgodnie z ustaleniami), назови срок, приложи документ (w załączeniu przesyłam), попроси подтверждение и вежливо напомни о том, что уже просрочено (uprzejmie przypominam o).",
        "keywords": ["zgodnie z ustaleniami", "w załączeniu przesyłam", "proszę o potwierdzenie", "uprzejmie przypominam", "w nawiązaniu do", "terminie", "pozostaję do dyspozycji"],
        "minWords": 16,
        "model": "W nawiązaniu do naszej rozmowy potwierdzam ustalenia. Zgodnie z ustaleniami skład oddajemy osiemnastego marca. W załączeniu przesyłam ostateczny harmonogram i proszę o potwierdzenie do piątku. Uprzejmie przypominam o fakturze, której termin minął we wtorek. W razie pytań pozostaję do dyspozycji.",
        "why": "Письмо-итог закрывает половину будущих споров: договорённости названы, срок назван, документ приложен. Регистр — официальный от первого слова до последнего.",
        "hint": "Каркас: W nawiązaniu do… Zgodnie z ustaleniami… W załączeniu przesyłam… Uprzejmie przypominam o… ✉️"
      },
      {
        "type": "describe",
        "prompt": "Финальное задание уровня. Напиши 6–8 предложений по-польски «Rok, który mnie zmienił»: с чего ты начал(а) год, что изменилось, что оказалось самым трудным и к какому выводу ты пришёл(пришла). Вставь одну коллокацию (popełnić błąd, odnieść sukces, podjąć decyzję, wyciągnąć wniosek), один свёрнутый оборот (-ąc или причастие), одну номинализацию (w związku z, po zmianie, ze względu na), ровно одну идиому и одно предложение в чужом регистре — официальном или разговорном.",
        "keywords": ["podjęłam decyzję", "podjąłem decyzję", "odniosłam sukces", "odniosłem sukces", "popełniłam błąd", "wyciągnęłam wniosek", "w związku z", "po zmianie", "ze względu na", "czekając", "mieszkający", "jak po grudzie", "urwanie głowy", "ręce mi opadały", "z perspektywy czasu", "uprzejmie informuję", "delikatnie mówiąc"],
        "minWords": 24,
        "model": "Rok temu stałam na dworcu w Krakowie i nie rozumiałam połowy komunikatów z głośnika. W listopadzie podjęłam decyzję, że zmienię pracę, choć bałam się tego przez całe lato. Po zmianie stanowiska przestałam wykonywać zadania, a zaczęłam je rozdzielać. Najtrudniejsze okazało się milczenie wtedy, gdy wszystko szło jak po grudzie. Czekając na cudze odpowiedzi, nauczyłam się słuchać uważniej niż mówić. W lutym przyszło pismo, które zaczynało się od słów: w odpowiedzi na wniosek uprzejmie informujemy, że decyzja jest pozytywna. Przeczytałam je dwa razy — nie dlatego, że nie zrozumiałam, tylko dlatego, że zrozumiałam od razu. Z perspektywy czasu wyciągnęłam jeden wniosek: zmieniło się nie słownictwo, tylko słuch.",
        "why": "Это весь уровень в одном тексте: пара слов, свёрнутый оборот, номинализация, одна идиома и один чужой регистр в рамке. Финал — вывод, а не последнее событие.",
        "hint": "Каркас: Rok temu… Podjęłam decyzję… Po zmianie… Najtrudniejsze okazało się… Z perspektywy czasu… 💛"
      }
    ]
  }
};
