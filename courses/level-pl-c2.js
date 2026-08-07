/* Polish C2 — level config, 30-day plan (COURSE) and 4 EXAMS.
   Data only: the shared renderer lives in engine.js.
   Финал польской линии: pl-abc → A1 → A2 → B1 → B2 → C1 → C2.
   preview:false — released course. */
window.LEVEL = {
  code:'C2',
  course:'pl-c2',
  pkey:'langbook-pl-c2-progress',
  preview:false,
  finalNote:'Ты начинал(а) с того, что разбирал(а) польские буквы по одной. Сегодня ты слышишь литоту в чужой похвале, ловишь чужую пресуппозицию в каверзном вопросе и переводишь смысл, а не слова. Анна держит в руках книгу со своей фамилией на обложке — а у тебя за плечами вся линия, от алфавита до C2. Дальше польский тебе больше не задача, а инструмент. Спасибо, что дошёл(дошла) 💛',
  speech:'pl-PL',
  langPo:'по-польски',
  langNa:'польский',
  langAdj:'польское',
  phIn:'po polsku…'
};

const COURSE = [
  {wn:'01', wt:'Система языка целиком', days:[
    {n:1,t:'Котик и котище',p:'Zdrobnienia i zgrubienia'},
    {n:2,t:'Варшавяк и варшавянин',p:'Nazwy mieszkańców'},
    {n:3,t:'PKP, ZUS и лайкнуть',p:'Skrótowce i neologizmy'},
    {n:4,t:'Этот или эта',p:'Dwurodzajowość'},
    {n:5,t:'Лучше, наилучший',p:'Stopniowanie i porównania'},
    {n:6,t:'Предложение, от которого не отказываются',p:'Propozycja'},
    {n:7,t:'Повторение недели 1',p:'Powtórka 1'}
  ]},
  {wn:'02', wt:'Стилистика: приёмы, а не регистры', days:[
    {n:8,t:'Слово вместо слова',p:'Metafora i metonimia'},
    {n:9,t:'Преувеличить и приуменьшить',p:'Hiperbola i litota'},
    {n:10,t:'Как звучит фраза',p:'Rytm i brzmienie'},
    {n:11,t:'Не своим голосом',p:'Dialektyzmy w tekście'},
    {n:12,t:'Нарочно не тем голосом',p:'Stylizacja i parodia'},
    {n:13,t:'Идиома, которую сломали',p:'Modyfikacja frazeologizmów'},
    {n:14,t:'Повторение недели 2',p:'Powtórka 2'}
  ]},
  {wn:'03', wt:'Точность и подтекст на пределе', days:[
    {n:15,t:'Оттенок как значение',p:'Synonimia i nacechowanie'},
    {n:16,t:'Два смысла в одном',p:'Wieloznaczność i kalambur'},
    {n:17,t:'Сказано без слов',p:'Presupozycja i implikatura'},
    {n:18,t:'Язык, который прячет',p:'Eufemizm i poprawność'},
    {n:19,t:'Ошибки, которые делают поляки',p:'Kultura języka'},
    {n:20,t:'Запятая, тире и заглавная',p:'Interpunkcja'},
    {n:21,t:'Повторение недели 3',p:'Powtórka 3'}
  ]},
  {wn:'04', wt:'Читать и писать что угодно', days:[
    {n:22,t:'Проза без адаптации',p:'Tekst literacki'},
    {n:23,t:'Стихи по-польски',p:'Poezja'},
    {n:24,t:'Наука без скидок',p:'Tekst naukowy'},
    {n:25,t:'Договор и закон',p:'Tekst prawny'},
    {n:26,t:'Переводится смысл, а не слова',p:'Przekład'},
    {n:27,t:'Править чужое',p:'Redakcja i korekta'},
    {n:28,t:'Спорить при публике',p:'Debata i retoryka'},
    {n:29,t:'Большая история: премьера',p:'Premiera książki'},
    {n:30,t:'Свой голос',p:'Własny głos'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя C2 позади — и язык впервые разобран как система. 25 заданий: две ступени уменьшения и работа суффикса, названия жителей и прилагательные от них, аббревиатуры вслух и в склонении, трудный род и расширенные основы, степени сравнения и синтаксис niż и od, плюс словарь издательского дела. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Уменьшительное и его работа: <b>dom → domek → domeczek</b> · <b>chwila → chwilka → chwileczka</b> · <b>ptak → ptaszek</b>, <b>noga → nóżka</b>, <b>ręka → rączka</b> · нежность (<b>kotku</b>), вежливость (<b>Chwileczkę</b>, <b>Sekundkę</b>), ирония (<b>ładny domek</b> о вилле), снисхождение (<b>Poczekaj, chłopcze</b>) · <b>kanapka</b> — уже не диванчик, а бутерброд",
      "Увеличительное: <b>kot → kocisko</b>, <b>pies → psisko</b>, <b>dom → domisko</b> · согласуется как средний род: <b>To kocisko spało</b> · <b>Ale chłopisko!</b> — часто одобрение, <b>babsko</b> — только грубость · в официальном письме уменьшительных нет вовсе",
      "Жители и норма 2026 года: <b>Krakowianin · Krakowianka · Krakowianie</b> · <b>Gdańszczanin</b>, <b>Łodzianin</b> · родительный <b>pięciu Krakowian</b>, но <b>Amerykanów</b> · с 1 января 2026 названия жителей городов пишутся с заглавной (<b>Warszawiak</b>, <b>Ślązak</b>), а прилагательные остались со строчной (<b>gdański</b>, <b>łódzki</b>)",
      "Прилагательные и география: <b>Gdańsk → gdański</b> · <b>Katowice → katowicki</b> · <b>Łódź → łódzki</b> · <b>Lublin → lubelski</b> · <b>Białystok → białostocki</b> · <b>Zakopane → zakopiański</b> · <b>słodkawy, gorzkawy</b> — «слегка» · <b>w Zakopanem</b>, <b>do Katowic</b>, <b>w Białymstoku</b>, <b>w Tatrach</b>, <b>na Śląsku</b>, но <b>w Małopolsce</b>",
      "Аббревиатуры: <b>PKP</b> — pe-ka-pe, <b>MSZ</b> — em-es-zet · читается как слово — склоняется: <b>w ZUS-ie</b>, <b>do ZUS-u</b>, <b>bez VAT-u</b> · буквенные не склоняются: <b>w PKP</b>, <b>do MSZ</b> · <b>m.in.</b> = między innymi, <b>itd.</b> = i tak dalej, <b>itp.</b> = i tym podobne, <b>tzn.</b> ≠ <b>tzw.</b> · <b>dr</b> без точки, <b>ok.</b> и <b>ul.</b> с точкой",
      "Новые слова: <b>zdalnie</b>, <b>wideorozmowa</b>, <b>udostępniać</b> — уже нейтральная норма · <b>lajkować</b>, <b>hejt</b>, <b>ogarnąć</b> — разговорное и не для письма в учреждение",
      "Трудный род и расширенные основы: <b>ten temat, ten problem, ten cień, ten pomidor</b> · <b>ta pomarańcza, ta metoda, ta mysz, ta twarz</b> · всё на <b>-ość</b> женского рода · <b>człowiek → ludzie, ludźmi</b> · <b>brat → bracia, braćmi</b> · <b>ksiądz → księża</b> · <b>rok → lata, lat</b> · <b>ręka → ręce, rąk</b> · двуродовые: <b>ten gaduła</b> и <b>ta gaduła</b>, <b>pani sędzia → z panią sędzią</b>",
      "Степени и сравнение: <b>dobry → lepszy → najlepszy</b>, <b>zły → gorszy</b>, <b>duży → większy</b>, <b>mały → mniejszy</b>, <b>dobrze → lepiej</b>, <b>dużo → więcej</b> · причастия только описательно (<b>bardziej zmęczony</b>), а <b>bardziej lepszy</b> — ошибка · <b>wyższy niż Marek</b> — тот же падеж, <b>wyższy od Marka</b> — родительный · <b>starszy o dwa lata</b> · <b>coraz lepiej</b>, <b>im dłużej, tym gorzej</b>, <b>jak najszybciej</b> · <b>przynajmniej</b> = хотя бы ≠ <b>bynajmniej nie</b> = вовсе не",
      "Ремесло книги: <b>przekład</b> ≠ <b>tłumaczenie ustne</b> · <b>tłumacz przysięgły</b> — печати и документы · путь книги: <b>redakcja → korekta → skład → druk → nakład</b> · <b>dodruk</b> ≠ <b>wznowienie</b> · <b>umowa o dzieło</b>, <b>honorarium</b>, <b>termin oddania</b>, <b>kara umowna</b> · <b>zastanowić się nad</b> + твор., <b>zgodzić się na</b> + вин., <b>dotrzymać</b> + род."
    ],
    "q": [
      {
        "type": "choice",
        "q": "Dom → domek → ___ <i style='opacity:.6'>вторая ступень уменьшения</i>",
        "opts": ["domeczek", "domisko", "domostwo", "domuszek"],
        "answer": "domeczek",
        "why": "Вторая ступень делается суффиксом <b>-eczek</b>: dom → domek → <b>domeczek</b>, как chwila → chwilka → chwileczka. <b>Domisko</b> — увеличительное, <b>domostwo</b> значит «двор, жилище», а формы domuszek в языке нет.",
        "hint": "Уменьши то, что уже уменьшено, — суффикс тот же, что в chwileczka 🏠"
      },
      {
        "type": "choice",
        "q": "Anna mówi o willi z basenem: «Ładny domek». Co robi tutaj zdrobnienie?",
        "opts": ["kłuje ironią", "wyraża czułość", "podaje rozmiar domu", "prosi o cierpliwość"],
        "answer": "kłuje ironią",
        "why": "Форма спорит с предметом: слово уменьшено, а дом огромный — значит это укол, а не тепло. Нежность звучит о своём и маленьком, а просьба подождать — это <b>chwileczkę</b>.",
        "hint": "Сравни размер слова с размером дома 🏡"
      },
      {
        "type": "choice",
        "q": "___ leżało na maszynopisie i nie zamierzało wstać. <i style='opacity:.6'>котище</i>",
        "opts": ["To kocisko", "Ten kocisko", "Ta kocisko", "Ci kocisko"],
        "answer": "To kocisko",
        "why": "Увеличительные на <b>-isko</b> согласуются как средний род: to kocisko, to psisko, to domisko — даже когда речь о коте мужского пола.",
        "hint": "Смотри на суффикс, а не на пол животного 🐈"
      },
      {
        "type": "choice",
        "q": "Na rynku było pełno ___ . <i style='opacity:.6'>краковян</i>",
        "opts": ["Krakowian", "Krakowianów", "Krakowianinów", "Krakowiany"],
        "answer": "Krakowian",
        "why": "Во множественном числе <b>-in</b> исчезает, а родительный получается нулевым: Krakowianie → <b>Krakowian</b>, Gdańszczanie → Gdańszczan. Окончание -ów берёт только Amerykanin → Amerykanów.",
        "hint": "Сначала поставь слово во множественное — и посмотри, что осталось от -anin 🏰"
      },
      {
        "type": "choice",
        "q": "Jedziemy ___ na trzy dni. <i style='opacity:.6'>в Катовице</i>",
        "opts": ["do Katowic", "do Katowice", "do Katowicy", "do Katowica"],
        "answer": "do Katowic",
        "why": "<b>Katowice</b> — plurale tantum: единственного числа у слова нет, и родительный будет <b>do Katowic</b>, как do Kielc и do Suwałk.",
        "hint": "Название живёт только во множественном — падеж бери оттуда 🚆"
      },
      {
        "type": "choice",
        "q": "Zgodnie z normą obowiązującą od 2026 roku wielką literą pisze się —",
        "opts": ["nazwy mieszkańców miast: Warszawiak, Krakowianin", "nazwy języków: Polski, Angielski", "nazwy miesięcy: Styczeń, Luty", "przymiotniki od nazw miast: Gdański, Łódzki"],
        "answer": "nazwy mieszkańców miast: Warszawiak, Krakowianin",
        "why": "Реформа уравняла жителей городов с народами: с 1 января 2026 года <b>Warszawiak</b>, <b>Krakowianin</b>, <b>Gdańszczanka</b> — с заглавной. Языки (<b>polski</b>), месяцы (<b>styczeń</b>) и прилагательные от названий (<b>gdański</b>) остались со строчной.",
        "hint": "Изменилась ровно одна группа слов — та, что называет людей 🏙️"
      },
      {
        "type": "choice",
        "q": "Czekam na odpowiedź ___ . <i style='opacity:.6'>из ЗУСа</i>",
        "opts": ["z ZUS-u", "z ZUS", "z ZUSu", "ze ZUS-u"],
        "answer": "z ZUS-u",
        "why": "<b>ZUS</b> читается как слово, поэтому склоняется, а окончание пишется через дефис: z ZUS-u, w ZUS-ie. Предлог <b>ze</b> нужен только перед скоплением согласных (ze wzrostem), а голое «z ZUS» оставило бы аббревиатуру без падежа.",
        "hint": "Произнеси вслух: если это слово, а не набор букв, дай ему окончание 🏛️"
      },
      {
        "type": "choice",
        "q": "Skrót MSZ czytamy —",
        "opts": ["em-es-zet", "em-es-że", "em-es-zed", "mesz"],
        "answer": "em-es-zet",
        "why": "Буква <b>z</b> называется «zet», поэтому MSZ звучит как <b>em-es-zet</b>. У таких сокращений ударение падает на последний слог — единственный такой случай в языке.",
        "hint": "Назови по-польски каждую букву отдельно 📻"
      },
      {
        "type": "choice",
        "q": "Które słowo nadaje się do pisma do urzędu?",
        "opts": ["zdalnie", "ogarnąć", "hejt", "lajkować"],
        "answer": "zdalnie",
        "why": "<b>Zdalnie</b> и <b>wideorozmowa</b> уже нейтральная норма. <b>Ogarnąć</b>, <b>hejt</b> и <b>lajkować</b> закрепились, но остались разговорными: рядом с официальным адресатом они звучат как кроссовки под смокингом.",
        "hint": "Одно из четырёх слов ты спокойно напишешь в заявлении ✉️"
      },
      {
        "type": "choice",
        "q": "___ jest za kwaśna. <i style='opacity:.6'>апельсин</i>",
        "opts": ["Ta pomarańcza", "Ten pomarańcz", "Ten pomarańcza", "To pomarańcze"],
        "answer": "Ta pomarańcza",
        "why": "В польском <b>pomarańcza</b> женского рода, а мужской формы «pomarańcz» в языке нет вовсе. Та же ловушка в ta cytryna, ta czekolada, ta metoda.",
        "hint": "Русский род здесь не помощник — смотри на само польское слово 🍊"
      },
      {
        "type": "choice",
        "q": "Rozmawiałam o tym ___ , którzy tłumaczą od lat. <i style='opacity:.6'>с людьми</i>",
        "opts": ["z ludźmi", "z ludziami", "z ludami", "z człowiekami"],
        "answer": "z ludźmi",
        "why": "У слова <b>człowiek</b> множественное — <b>ludzie</b>, а творительный у этой группы на <b>-mi</b>: ludźmi, braćmi, księżmi. <b>Lud</b> — это народ, и форма ludami о людях не говорит.",
        "hint": "Та же модель, что в braćmi 🧑‍🤝‍🧑"
      },
      {
        "type": "choice",
        "q": "Ta wersja jest ___ od poprzedniej. <i style='opacity:.6'>намного лучше</i>",
        "opts": ["o wiele lepsza", "bardziej lepsza", "o wiele bardziej lepsza", "najbardziej lepsza"],
        "answer": "o wiele lepsza",
        "why": "Двойная степень невозможна: либо суффикс (<b>lepsza</b>), либо <b>bardziej</b>, но не оба сразу. Сравнительную усиливают словами <b>o wiele</b> и <b>znacznie</b>.",
        "hint": "Слово lepsza уже сравнительное — добавь к нему только усилитель ⚖️"
      },
      {
        "type": "choice",
        "q": "Marek jest wyższy ___ . <i style='opacity:.6'>выше Анны</i>",
        "opts": ["od Anny", "niż Anny", "od Anna", "jak Anna"],
        "answer": "od Anny",
        "why": "<b>Od</b> требует родительного падежа: wyższy od Anny, od Marka, ode mnie. С <b>niż</b> стоял бы именительный — wyższy niż Anna, а <b>jak</b> работает только при равенстве: tak samo wysoki jak Anna.",
        "hint": "Два способа сравнить — и у каждого свой падеж 📏"
      },
      {
        "type": "gap",
        "q": "Byliśmy ___ przez cały tydzień. <i style='opacity:.6'>в Закопане</i>",
        "accept": ["w Zakopanem", "Zakopanem"],
        "model": "w Zakopanem",
        "why": "<b>Zakopane</b> — название-прилагательное, поэтому предложный падеж у него особый: <b>w Zakopanem</b>, а родительный — do Zakopanego.",
        "hint": "Склоняй его не как город, а как прилагательное 🏔️"
      },
      {
        "type": "gap",
        "q": "Minęło pięć ___ od pierwszego przekładu. <i style='opacity:.6'>лет (rok)</i>",
        "accept": ["lat"],
        "model": "lat",
        "why": "Множественное от <b>rok</b> — <b>lata</b>, и во множественном это уже другое слово: dwa lata, pięć lat, wiele lat.",
        "hint": "После «пять» идёт родительный множественного 📆"
      },
      {
        "type": "gap",
        "q": "Im dłużej czekasz, ___ gorzej. <i style='opacity:.6'>чем дольше…, тем хуже</i>",
        "accept": ["tym"],
        "model": "tym",
        "why": "Пара <b>im… tym…</b> держится вместе: im dłużej, tym gorzej; im więcej, tym lepiej. Обе части идут со сравнительной степенью.",
        "hint": "Первое слово пары уже стоит — поставь второе 🔁"
      },
      {
        "type": "gap",
        "q": "___ zdążyliśmy na pociąg. <i style='opacity:.6'>хотя бы — впиши слово</i>",
        "accept": ["przynajmniej"],
        "model": "przynajmniej",
        "why": "«Хотя бы» — это <b>przynajmniej</b>. Похожее <b>bynajmniej</b> значит «вовсе не» и живёт только рядом с <b>nie</b>.",
        "hint": "Одна приставка отделяет два противоположных слова ⚠️"
      },
      {
        "type": "gap",
        "q": "Zgadzam się ___ te warunki, ale mam jedno pytanie. <i style='opacity:.6'>согласна на эти условия — впиши предлог</i>",
        "accept": ["na"],
        "model": "na",
        "why": "На условия соглашаются <b>na coś</b> с винительным: zgadzam się na te warunki, na termin. А <b>zgadzam się z kimś</b> значит «разделяю мнение».",
        "hint": "Форма te warunki уже подсказывает падеж — найди предлог 🤝"
      },
      {
        "type": "trRE",
        "ru": "Мы уложились в срок.",
        "accept": ["dotrzymaliśmy terminu", "dotrzymalismy terminu", "dotrzymaliśmy terminu.", "dotrzymalismy terminu.", "udało nam się dotrzymać terminu", "udalo nam sie dotrzymac terminu"],
        "model": "Dotrzymaliśmy terminu.",
        "why": "<b>Dotrzymać</b> идёт с родительным падежом: dotrzymać terminu, słowa, obietnicy. Это устойчивая пара из договорного словаря шестого дня.",
        "hint": "Глагол про сдержанное слово, а падеж у него родительный ⏳"
      },
      {
        "type": "trRE",
        "ru": "Минуточку, я сейчас проверю.",
        "accept": ["chwileczkę zaraz sprawdzę", "chwileczke zaraz sprawdze", "chwileczkę, zaraz sprawdzę", "chwileczke, zaraz sprawdze", "sekundkę zaraz sprawdzę", "sekundke zaraz sprawdze"],
        "model": "Chwileczkę, zaraz sprawdzę.",
        "why": "Уменьшительное здесь — стандартная вежливость, а не разговор о времени: <b>Chwileczkę</b> и <b>Sekundkę</b> смягчают просьбу подождать.",
        "hint": "Первое слово стоит в винительном падеже и начинается на chwil- ⏱️"
      },
      {
        "type": "trER",
        "en": "Bynajmniej nie było łatwiej.",
        "accept": ["легче вовсе не стало", "вовсе не стало легче", "легче вовсе не было", "совсем не стало легче", "отнюдь не стало легче"],
        "model": "Легче вовсе не стало.",
        "why": "<b>Bynajmniej</b> — усиленное отрицание, «отнюдь»: оно не смягчает фразу, а делает её твёрже. «По крайней мере» было бы <b>przynajmniej</b>.",
        "hint": "Ищи не «по крайней мере», а прямо противоположное 🚫"
      },
      {
        "type": "trER",
        "en": "To dla mnie zaszczyt, ale muszę się zastanowić.",
        "accept": ["для меня это честь но мне нужно подумать", "для меня это честь, но мне нужно подумать", "это для меня честь, но мне нужно подумать", "для меня это честь, но я должна подумать", "для меня это честь, но мне надо подумать"],
        "model": "Для меня это честь, но мне нужно подумать.",
        "why": "Формула вежливого «да, но не сразу»: сначала <b>To dla mnie zaszczyt</b>, потом <b>muszę się zastanowić</b> — и только затем разговор об условиях.",
        "hint": "Первая половина — благодарность, вторая — просьба о времени 💼"
      },
      {
        "type": "order",
        "answer": "Muszę się zastanowić nad tą propozycją",
        "accept": ["Muszę się zastanowić nad tą propozycją", "Nad tą propozycją muszę się zastanowić"],
        "hintRu": "Собери: «Мне нужно подумать над этим предложением.»",
        "why": "<b>Zastanowić się nad</b> идёт с творительным падежом, а короткое <b>się</b> встаёт сразу после первого слова, а не уходит в хвост фразы.",
        "hint": "Сначала «должна», потом коротышка się, и только потом предлог 🧠"
      },
      {
        "type": "match",
        "q": "Соедини название с прилагательным, которое от него образуется.",
        "pairs": [
          ["Gdańsk", "gdański"],
          ["Łódź", "łódzki"],
          ["Lublin", "lubelski"],
          ["Białystok", "białostocki"],
          ["Zakopane", "zakopiański"]
        ],
        "why": "Два случая ровные (<b>gdański</b>, <b>łódzki</b>), три из списка исключений: Lublin → <b>lubelski</b>, Białystok → <b>białostocki</b>, Zakopane → <b>zakopiański</b>. Все они пишутся со строчной — реформа 2026 года их не тронула.",
        "hint": "Три из пяти правило не выводит — их учат парами 🗺️"
      },
      {
        "type": "describe",
        "prompt": "Напиши 4–5 предложений по-польски о дне, в котором были и люди, и учреждение. Назови жителей своего города или края правильной формой и с заглавной буквы, поставь одно прилагательное от географического названия (оно останется со строчной), одно уменьшительное в функции вежливости (chwileczkę, sekundkę) и одну аббревиатуру — со склонением (w ZUS-ie, bez VAT-u) или без него (w PKP, do MSZ). Закончи сравнением с niż или od.",
        "keywords": ["chwileczkę", "sekundkę", "w ZUS-ie", "do ZUS-u", "bez VAT-u", "w PKP", "do MSZ", "niż", "Warszawiak", "Krakowianin", "Gdańszczanin", "krakowski", "gdański", "warszawski"],
        "minWords": 18,
        "model": "W poniedziałek załatwiałam sprawy w ZUS-ie, a potem wróciłam do biura pociągiem PKP. Pani w okienku poprosiła o chwileczkę i znalazła moje pismo w dwie minuty. Powiedziała, że Warszawiacy przychodzą zwykle wcześniej, więc kolejka o dziewiątej jest krótsza niż o dwunastej. Wieczorem czytałam krakowski przewodnik i pomyślałam, że wolę pociąg od samochodu.",
        "why": "Здесь сразу четыре опоры недели: название жителей по норме 2026 года, прилагательное от места со строчной, уменьшительное вежливости и аббревиатура в падеже.",
        "hint": "Каркас: Załatwiałam sprawy w… · Poprosiła o chwileczkę… · …przychodzą wcześniej… · …krótsza niż… 💛"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя научила не «узнавать стиль», а называть приём по имени. 25 заданий: метафора, сравнение, эпитет, метонимия и синекдоха, гипербола и литота, оксюморон и антитеза, ритм фразы и порядок слов, говор внутри литературы, стилизация с пастишем и пародией, сломанные устойчивые обороты. Наберёшь 80% — открою Неделю 3. 💛",
    "review": [
      "По сходству и по смежности: <b>porównanie</b> — со связкой (jak, niczym, jakby, niby) · <b>metafora</b> = <b>przenośnia</b> — без связки (morze problemów, gorzka prawda) · <b>uosobienie</b> (Miasto się budzi) · <b>ożywienie</b> (Silnik zakaszlał) · <b>metonimia</b> (Czytam Mickiewicza, Warszawa zdecydowała, wypił kieliszek, cała sala biła brawo) · <b>synekdocha</b> (Brakuje rąk do pracy)",
      "Определение и его работа: <b>epitet</b> даёт образ или оценку (ołowiane niebo, gorzki uśmiech, drżący głos), а zimna woda — просто факт · <b>epitet stały</b> — фольклорный (bystra woda) · три пустых определения подряд редактор вычёркивает",
      "Что уже не приём: <b>martwa metafora</b> (noga stołu, ząb czasu, ucho dzbanka) — образ стёрся до названия · <b>frazeologizm</b> (rzucać grochem o ścianę) закреплён целиком, а метафору автор перестраивает сам",
      "Больше и меньше: <b>hiperbola</b> (czekałem wieki, sto razy ci mówiłam, mam milion spraw, kopa lat) · <b>litota</b> — похвала через отрицание противоположного (<b>nieźle</b>, <b>niemały</b>, <b>nie najgorszy</b>, <b>nierzadko</b>), а сдержанное «сойдёт» — это <b>może być</b> · принимают литоту коротко: <b>Dziękuję</b>",
      "Несоединимое и вопрос без ответа: <b>oksymoron</b> (gorzka słodycz, żywy trup, głośna cisza) ≠ <b>antyteza</b> (Jedni mówią, inni milczą) · <b>pytanie retoryczne</b> (A któż by nie chciał?, Czyż nie o to chodzi?) · <b>ironia</b> играет, <b>sarkazm</b> ранит · <b>zimne ognie</b> — просто название, приёма там нет",
      "Как звучит фраза: <b>aliteracja</b> — повтор звука · <b>instrumentacja głoskowa</b> (W Szczebrzeszynie chrząszcz brzmi w trzcinie — Брехва; Stoi na stacji lokomotywa — Тувим) · <b>onomatopeja</b> · рубленая фраза даёт напряжение, <b>okres retoryczny</b> — размышление, и короткая фраза сильнее всего сразу после длинной",
      "Повтор и порядок: <b>anafora</b> — в начале, <b>epifora</b> — в конце, <b>paralelizm składniowy</b> — одинаковая конструкция, <b>trójka</b> — три элемента звучат законченно · <b>szyk przestawny</b> двигает акцент, не меняя слов (Wczoraj oddała tekst / Oddała tekst wczoraj) · <b>się</b> предложение не открывает",
      "Чужой голос: <b>dialekt</b> — территория, <b>gwara</b> — говор или язык среды, <b>regionalizm</b> — вариант нормы (na polu), <b>kolokwializm</b> — регистр · <b>mazurzenie</b>: cy → czy, cłowiek → człowiek · Подгале: <b>ka, hań, ino</b> · Силезия: <b>godać, kaj, ganc</b> · <b>baca, gazda, ciupaga</b> · говор работает на характер, колорит и дистанцию рассказчика — и держится последовательностью",
      "Нарочно не тем голосом: <b>stylizacja</b> и <b>archaizacja</b> (waćpan, tedy, azali, rzec) · <b>pastisz</b> — без насмешки, <b>parodia</b> — насмешка над образцом, <b>trawestacja</b> — высокий слог о мелочи, <b>groteska</b> — без мишени вовсе · механика комизма — <b>niezgodność stylu i tematu</b> · разбор кончается ответом «зачем»",
      "Сломанные обороты: <b>wymiana komponentu</b> (Bułka z problemem ← bułka z masłem; Trzymamy rękę na kursie ← trzymać rękę na pulsie) · <b>skrócenie</b> (Co ma piernik…) · <b>rozwinięcie</b> (Zaciskamy pasa — ostatnia dziurka) · <b>kontaminacja</b> (✗ odgrywać znaczenie) · <b>dosłowne odczytanie</b> · условие игры одно — <b>rozpoznawalność</b>",
      "Полный ответ на этом уровне звучит так: <b>To jest X, bo widać Y, i działa tak, że Z</b> — имя приёма, примета в тексте и эффект"
    ],
    "q": [
      {
        "type": "choice",
        "q": "«Stała niczym posąg» to —",
        "opts": ["porównanie", "metafora", "metonimia", "epitet"],
        "answer": "porównanie",
        "why": "Связка <b>niczym</b> — книжная родня jak — выдаёт сравнение: оба предмета названы прямо. У метафоры связки нет вовсе.",
        "hint": "Ищи слово, которое соединяет два образа 🗿"
      },
      {
        "type": "choice",
        "q": "«Lawina pytań spadła na tłumaczkę» to —",
        "opts": ["metafora", "porównanie", "synekdocha", "litota"],
        "answer": "metafora",
        "why": "Перенос по сходству без всякой связки — это <b>metafora</b>, она же <b>przenośnia</b>. Автор строит её сам, поэтому состав можно менять: lawina pytań, morze pytań.",
        "hint": "Слова jak во фразе нет — значит приём другой 🌊"
      },
      {
        "type": "choice",
        "q": "«Cała sala biła brawo» to —",
        "opts": ["metonimia", "porównanie", "epitet", "hiperbola"],
        "answer": "metonimia",
        "why": "Помещение названо вместо людей внутри — перенос по смежности. Так же работают <b>Warszawa zdecydowała</b> и <b>wypił kieliszek</b>.",
        "hint": "Хлопал не зал, а те, кто в нём 👏"
      },
      {
        "type": "choice",
        "q": "«Brakuje nam rąk do pracy» to —",
        "opts": ["synekdocha", "porównanie", "epitet", "oksymoron"],
        "answer": "synekdocha",
        "why": "Часть названа вместо целого: руки вместо людей — это <b>synekdocha</b>. Она родня метонимии, но смотрит именно на отношение «часть и целое».",
        "hint": "Посчитай, чего именно не хватает: рук или людей 🤝"
      },
      {
        "type": "choice",
        "q": "W którym połączeniu określenie daje obraz, a nie informację?",
        "opts": ["ołowiane niebo", "zimna woda", "drewniany stół", "biała ściana"],
        "answer": "ołowiane niebo",
        "why": "Небо не бывает свинцовым буквально — определение даёт образ и оценку, то есть <b>epitet</b>. Остальные три сообщают проверяемый факт.",
        "hint": "Проверь каждое определение на буквальность ☁️"
      },
      {
        "type": "choice",
        "q": "«Noga stołu» to dziś —",
        "opts": ["martwa metafora", "żywa metafora", "synekdocha", "frazeologizm"],
        "answer": "martwa metafora",
        "why": "Образ стёрся до простого названия части предмета — это <b>martwa metafora</b>, как ząb czasu и ucho dzbanka. Живую метафору автор строит заново, и её состав ещё можно менять.",
        "hint": "Спроси себя, слышит ли здесь кто-нибудь ещё образ 🪑"
      },
      {
        "type": "choice",
        "q": "Którego wyrażenia nie wolno przebudować własnymi słowami?",
        "opts": ["rzucać grochem o ścianę", "morze problemów", "gorzka prawda", "ołowiane niebo"],
        "answer": "rzucać grochem o ścianę",
        "why": "Фразеологизм закреплён целиком: заменишь слово — приём сломается или превратится в игру. Метафору автор перестраивает свободно: morze problemów, ocean problemów.",
        "hint": "Одно из четырёх выражений пришло готовым из языка 🫛"
      },
      {
        "type": "choice",
        "q": "Redaktorka mówi o twoim rozdziale: «Nieźle». To znaczy, że —",
        "opts": ["rozdział naprawdę jej się podobał", "rozdział jest ledwo poprawny", "rozdział trzeba napisać od nowa", "nie zdążyła go przeczytać"],
        "answer": "rozdział naprawdę jej się podobał",
        "why": "<b>Litota</b> хвалит через отрицание противоположного, и в польских устах <b>nieźle</b> звучит сильнее, чем кажется русскому уху. Сдержанное «сойдёт» — это <b>może być</b>.",
        "hint": "Чем сдержаннее форма похвалы, тем выше её цена 🎖️"
      },
      {
        "type": "choice",
        "q": "«Gorzka słodycz» to —",
        "opts": ["oksymoron", "antyteza", "hiperbola", "metonimia"],
        "answer": "oksymoron",
        "why": "Два несовместимых слова стоят в одной паре — это <b>oksymoron</b>: gorzka słodycz, żywy trup, głośna cisza.",
        "hint": "Противоречие живёт внутри одного сочетания 🕯️"
      },
      {
        "type": "choice",
        "q": "«Jedni mówią, inni milczą» to —",
        "opts": ["antyteza", "oksymoron", "hiperbola", "metonimia"],
        "answer": "antyteza",
        "why": "Противопоставлены две части фразы, а не два слова внутри одного сочетания: это <b>antyteza</b>. Оксюморон соединил бы несоединимое в одной паре.",
        "hint": "Посмотри, где проходит граница противопоставления ⚖️"
      },
      {
        "type": "choice",
        "q": "Powtórzenie tego samego dźwięku na początku sąsiednich wyrazów to —",
        "opts": ["aliteracja", "anafora", "epifora", "onomatopeja"],
        "answer": "aliteracja",
        "why": "<b>Aliteracja</b> — повтор звука; <b>anafora</b> — повтор слова в начале соседних фраз, <b>epifora</b> — в конце, <b>onomatopeja</b> — звукоподражание.",
        "hint": "Здесь повторяется звук, а не слово 🔔"
      },
      {
        "type": "choice",
        "q": "«Kto pyta… Kto milczy… Kto czeka…» to —",
        "opts": ["anafora", "epifora", "aliteracja", "instrumentacja głoskowa"],
        "answer": "anafora",
        "why": "Одинаковое начало соседних фраз — <b>anafora</b>. Если бы повторялся конец, это была бы <b>epifora</b>.",
        "hint": "Смотри, в каком месте фразы стоит повтор 🔁"
      },
      {
        "type": "choice",
        "q": "W zdaniu «Wczoraj oddała tekst» akcent pada na —",
        "opts": ["tekst", "wczoraj", "oddała", "wszystkie wyrazy równo"],
        "answer": "tekst",
        "why": "По умолчанию самое важное стоит в конце фразы. Переставь слова — <b>Oddała tekst wczoraj</b> — и акцент переедет на «вчера», хотя слова остались те же.",
        "hint": "Прочитай вслух и услышь, где падает голос 🎚️"
      },
      {
        "type": "choice",
        "q": "Krakowskie «na polu» w znaczeniu «na dworze» to —",
        "opts": ["regionalizm", "błąd", "archaizm", "onomatopeja"],
        "answer": "regionalizm",
        "why": "<b>Regionalizm</b> — вариант нормы в своём регионе, а не промах говорящего. Ошибкой была бы форма «na dworzu», которой нет нигде.",
        "hint": "Спроси не «правильно ли», а «где так говорят» 🌾"
      },
      {
        "type": "choice",
        "q": "Bohater mówi «cy» i «cłowiek». To —",
        "opts": ["mazurzenie", "archaizacja", "kolokwializm", "kontaminacja"],
        "answer": "mazurzenie",
        "why": "<b>Mazurzenie</b> — произношение cz, sz, ż как c, s, z. Чтобы понять слово, верни шипящие на место: cy → czy, cłowiek → człowiek.",
        "hint": "Одна замена звуков — и слово становится знакомым 🏔️"
      },
      {
        "type": "choice",
        "q": "Podniosły, epicki styl w opowieści o kłótni o miejsce parkingowe to —",
        "opts": ["trawestacja", "pastisz", "parodia", "aluzja"],
        "answer": "trawestacja",
        "why": "Высокий слог о мелком предмете — <b>trawestacja</b>: смеются над поводом. <b>Parodia</b> целилась бы в сам образец, а <b>pastisz</b> подражает без насмешки.",
        "hint": "Спроси, над кем смеются: над эпосом или над скандалом у парковки 🚗"
      },
      {
        "type": "choice",
        "q": "Naśladowanie cudzej maniery bez drwiny to —",
        "opts": ["pastisz", "parodia", "trawestacja", "groteska"],
        "answer": "pastisz",
        "why": "<b>Pastisz</b> — дань или игра, мишени у него нет. У <b>parodii</b> мишень — образец, у <b>trawestacji</b> — предмет, а <b>groteska</b> показывает деформированный мир и не целится ни в кого.",
        "hint": "Четыре родственника различаются направлением насмешки 🎭"
      },
      {
        "type": "gap",
        "q": "Nagłówek «Co ma nakład…» wraca do zwrotu: co ma piernik do ___ . <i style='opacity:.6'>впиши слово</i>",
        "accept": ["wiatraka"],
        "model": "wiatraka",
        "why": "Оборот <b>co ma piernik do wiatraka</b> значит «одно к другому не относится». Заголовок обрывает его на середине, читатель договаривает сам — и именно это делает игру.",
        "hint": "Пряник и то, что стоит в поле и машет крыльями 🌬️"
      },
      {
        "type": "gap",
        "q": "Nagłówek «Trzymamy rękę na kursie» przerabia zwrot: trzymać rękę na ___ . <i style='opacity:.6'>впиши слово</i>",
        "accept": ["pulsie"],
        "model": "pulsie",
        "why": "Исходный оборот — <b>trzymać rękę na pulsie</b>, «держать под контролем». Замена одного слова вносит тему текста, а сам оборот остаётся узнаваемым.",
        "hint": "Врач держит руку именно на этом 🩺"
      },
      {
        "type": "gap",
        "q": "— Nieźle to zrobiłaś. — ___ . <i style='opacity:.6'>как принимают похвалу-литоту</i>",
        "accept": ["dziękuję", "dziekuje"],
        "model": "Dziękuję.",
        "why": "Литоту-похвалу принимают коротко: <b>Dziękuję</b>. Спорить с ней («Ależ nie, to nic takiego») значит спорить с комплиментом.",
        "hint": "Одно слово, и оно самое обычное 🙏"
      },
      {
        "type": "trRE",
        "ru": "Я сто раз тебе говорила.",
        "accept": ["sto razy ci mówiłam", "sto razy ci mowilam", "sto razy ci mówiłem", "sto razy ci mowilem", "mówiłam ci sto razy", "mowilam ci sto razy"],
        "model": "Sto razy ci mówiłam.",
        "why": "Гипербола, о которой обе стороны знают, что это преувеличение. Короткое <b>ci</b> встаёт сразу после первой группы слов, а не уходит в конец фразы.",
        "hint": "Число здесь не считают — им нажимают 💯"
      },
      {
        "type": "trER",
        "en": "To niemały problem.",
        "accept": ["это довольно большая проблема", "проблема довольно большая", "это немаленькая проблема", "это серьёзная проблема", "проблема немаленькая"],
        "model": "Это довольно большая проблема.",
        "why": "<b>Litota</b> усиливает через отрицание противоположного: niemały — «немаленький», то есть изрядный. Прочитать её как «небольшой» значит понять фразу наоборот.",
        "hint": "Отрицание здесь не уменьшает, а прибавляет ⚖️"
      },
      {
        "type": "order",
        "answer": "Drukarnia oddychała ciepłem papieru",
        "accept": ["Drukarnia oddychała ciepłem papieru"],
        "hintRu": "Собери: «Типография дышала теплом бумаги.»",
        "why": "Метафора без связки: цех делается живым существом. Такой её частный случай называется <b>uosobienie</b> — приметой служит глагол, который бывает только у живого.",
        "hint": "Сначала кто, потом что делает, и только потом чем 🏭"
      },
      {
        "type": "match",
        "q": "Соедини приём с примером.",
        "pairs": [
          ["metafora", "Drukarnia oddychała ciepłem papieru"],
          ["porównanie", "Szła jak stary zegar"],
          ["litota", "Człowiek niemałego uporu"],
          ["metonimia", "Warszawa zamówiła trzy tysiące"],
          ["hiperbola", "Czekaliśmy wieki"]
        ],
        "why": "У каждого приёма своя примета: связка jak выдаёт сравнение, отрицание противоположного — литоту, место вместо учреждения — метонимию, слово мимо факта — гиперболу, а перенос без связки — метафору.",
        "hint": "Ищи примету, а не ощущение 🔍"
      },
      {
        "type": "describe",
        "prompt": "Напиши 5–6 предложений по-польски о вечере, когда работа долго не шла. Вставь одну метафору без связки, одно сравнение со связкой (jak или niczym), одну литоту (nieźle, niemały, nie najgorszy) и участок из трёх коротких предложений подряд. Последней строкой назови по-польски два своих приёма.",
        "keywords": ["niczym", "jak", "nieźle", "niemały", "nie najgorszy", "metafora", "porównanie", "litota", "hiperbola", "anafora"],
        "minWords": 22,
        "model": "Wieczór ciągnął się niczym korytarz bez końca, a tekst stał w miejscu. Zdania szły jak stary zegar: powoli i z hałasem. Potem ruszyło. Kawa. Cisza. Trzy strony. Efekt był niemały, choć na początku wyglądało to beznadziejnie. Użyłam tu porównania i litoty.",
        "why": "Три приёма и один ритмический ход в одном коротком тексте — ровно то, что экзамен просит увидеть в чужом абзаце, только теперь ты делаешь это сам(а).",
        "hint": "Каркас: …niczym… · …jak… · Потом три коротких. · …niemały… · Użyłem(am) tu… 💛"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя была про то, что стоит за словами. 25 заданий: оценка внутри слова и то, чем ещё красят текст, многозначность и омофоны, пресуппозиция и импликатура, эвфемизм и исчезнувший исполнитель, гиперкоррекция, настоящие ошибки носителей и знаки препинания. Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Оценка внутри слова: <b>oszczędny ↔ skąpy</b> · <b>pewny siebie ↔ zarozumiały</b> · <b>stanowczy ↔ uparty</b> · <b>dociekliwy ↔ ciekawski ↔ wścibski</b> · <b>ambitny ↔ wyrachowany</b> · <b>tani ↔ tandetny</b> · <b>mieszkanie ↔ klitka</b> · <b>ugrupowanie ↔ klika ↔ banda</b> · <b>zawód ↔ zajęcie</b> · оценка в суффиксе: <b>pisarzyna</b>, <b>doktorek</b>",
      "Красят не только слова: <b>dobór faktów</b> — что названо, а что опущено · после <b>ale</b> вес уходит второй части · <b>Podjęto decyzję</b> прячет виновника, <b>Dyrektor podjął decyzję</b> его называет · <b>co trzeci</b> и <b>tylko 33%</b> — одно число в двух костюмах · граница проходит там, где меняется проверяемый факт",
      "Два смысла в одном: <b>zamek</b> (крепость, замок в двери, молния), <b>para</b>, <b>rola</b>, <b>pokój</b>, <b>zdanie</b>, <b>korek</b>, <b>bal</b> · омофоны <b>morze / może</b>, <b>lód / lud</b>, <b>bród / brud</b>, <b>Bóg / Bug / buk</b>, <b>chart / hart</b> · омоформы <b>piła</b>, <b>mam</b>, <b>droga</b>, <b>wina</b> · <b>Dzieci lubią zwierzęta</b> читается в обе стороны · <b>kalambur</b>, <b>suchar</b>, <b>pointa</b>",
      "Пресуппозиция — то, что фраза принимает за данность: метки <b>nadal, wciąż, znowu, przestać, zacząć, dlaczego</b>, определённость (<b>ten twój problem z terminami</b>) · тест простой: то, что переживает отрицание, и есть допущение",
      "Импликатура — то, что выводится, но не сказано: <b>niektórzy</b> (не все), <b>Był Marek</b> (остальные неинтересны), <b>nawet</b> (от него не ждали), <b>dopiero / już</b>, <b>aż / tylko</b>, <b>kilka rozdziałów</b> · её можно снять продолжением, пресуппозицию — нет",
      "Выход из чужой рамки: <b>Chwileczkę</b> · <b>To pytanie zakłada, że…</b> · <b>Nie zgadzam się z założeniem tego pytania</b> · <b>Odpowiem, ale najpierw uporządkujmy fakty</b> · и сам спрашивай без подкладки: <b>Czy zdążysz z tekstem do piątku?</b>",
      "Язык, который прячет: <b>obszar do poprawy</b> = ошибки · <b>korekta cen</b> = подорожание · <b>optymalizacja zatrudnienia</b> и <b>podziękować za współpracę</b> = увольнения · <b>w stanie wskazującym</b> = пьяный · исполнитель исчезает через <b>-no</b> (zwolniono), <b>się</b> (ceny się zmieniły), номинализацию (nastąpiła redukcja) и страдательный залог",
      "Ошибка от старания: ❌ <b>w każdym bądź razie</b> → ✅ <b>w każdym razie</b> · ❌ <b>tylko i wyłącznie</b> → ✅ <b>wyłącznie</b> · ❌ <b>wrócić z powrotem</b> → ✅ <b>wrócić</b> · в обращении <b>proszę pani</b>, но <b>proszę panią o pomoc</b> · переспрос без обиды: <b>Czy mam to rozumieć jako odmowę?</b>, <b>bez ogródek</b> ≠ <b>owijać w bawełnę</b>",
      "Настоящие ошибки и живые споры: ✅ <b>wziąć</b>, <b>włączać</b>, <b>poszedłem / poszłam</b>, <b>przekonujący</b>, <b>na dworze</b> · <b>na polu</b> — регионализм юга · на письме только <b>tę książkę</b> · <b>półtora roku</b>, но <b>półtorej godziny</b> · <b>dwa tysiące dwudziesty szósty</b> · спорят о <b>póki co</b>, <b>w międzyczasie</b>, <b>Witam</b> — и это не повод поправлять носителей",
      "Знаки и заглавная: запятая обязательна перед <b>że, który, żeby, gdy, czy</b> и перед всей связкой <b>mimo że</b> · перед одиночными <b>i, lub, albo, ani</b> её нет, при повторе есть (<b>i chleb, i ser</b>) · <b>niż</b> без сказуемого — без запятой · <b>myślnik</b> с пробелами (Warszawa — stolica Polski), <b>łącznik</b> без (biało-czerwony) · кавычки <b>„ … ”</b> · <b>Polak</b>, но <b>polski</b>; <b>styczeń</b>, но <b>Boże Narodzenie</b>; с 2026 года <b>Warszawiak</b> и <b>Plac Zbawiciela</b>, а <b>ulica</b> осталась со строчной"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Ta sama cecha, ale z naganą: oszczędny → ___",
        "opts": ["skąpy", "zaradny", "hojny", "rozrzutny"],
        "answer": "skąpy",
        "why": "Поведение одно и то же, меняется оценка внутри слова: <b>oszczędny</b> хвалит, <b>skąpy</b> осуждает. <b>Hojny</b> и <b>rozrzutny</b> называют противоположное поведение.",
        "hint": "Факты не меняй — меняй только отношение 💰"
      },
      {
        "type": "choice",
        "q": "«Tandetny» różni się od «tani» tym, że —",
        "opts": ["ocenia jakość jako niską", "mówi tylko o cenie", "znaczy «drogi»", "jest słowem książkowym"],
        "answer": "ocenia jakość jako niską",
        "why": "<b>Tani</b> называет цену и ничего не обещает про качество, а <b>tandetny</b> выносит приговор: дёшево и низкопробно.",
        "hint": "Одно слово про ценник, другое про саму вещь 🏷️"
      },
      {
        "type": "choice",
        "q": "Zamiast «Dyrektor podjął decyzję» napisano «Podjęto decyzję». Co zniknęło z tekstu?",
        "opts": ["osoba odpowiedzialna", "sama decyzja", "czas zdarzenia", "miejsce zdarzenia"],
        "answer": "osoba odpowiedzialna",
        "why": "Безличная форма на <b>-no</b> сохраняет факт и снимает имя: решение есть, а того, кто его принял, в тексте больше нет.",
        "hint": "Спроси у фразы «кто?» — и увидишь, чего не хватает 🕵️"
      },
      {
        "type": "choice",
        "q": "«Świetny przekład, ale słaba okładka» zostawia wrażenie —",
        "opts": ["raczej negatywne", "raczej pozytywne", "całkiem neutralne", "entuzjastyczne"],
        "answer": "raczej negatywne",
        "why": "После <b>ale</b> вес уходит второй части, и последним читатель запоминает упрёк. Переставь половины местами — впечатление изменится, хотя факты останутся те же.",
        "hint": "Смотри, что стоит после «но» 📌"
      },
      {
        "type": "choice",
        "q": "«Zepsuł mi się zamek w kurtce» — mowa o —",
        "opts": ["suwaku", "twierdzy", "kluczu do drzwi", "korku"],
        "answer": "suwaku",
        "why": "Слово <b>kurtka</b> задаёт значение: в одежде zamek — это молния, <b>zamek błyskawiczny</b>. Многозначность снимает контекст, а не словарь.",
        "hint": "Три значения слова спорят, и выигрывает то, к которому подходит куртка 🧥"
      },
      {
        "type": "choice",
        "q": "Para morze i może to —",
        "opts": ["homofonia", "homonimia", "homoforma", "antyteza"],
        "answer": "homofonia",
        "why": "Звучат одинаково, а пишутся по-разному — это <b>homofonia</b>. У омонимов совпадает и написание (zamek), у омоформ — только одна форма (piła).",
        "hint": "Сравни не смысл, а звучание и написание 🌊"
      },
      {
        "type": "choice",
        "q": "«Dzieci lubią zwierzęta» można odczytać na dwa sposoby, bo —",
        "opts": ["mianownik brzmi tu tak samo jak biernik", "brakuje przecinka", "czasownik jest nieprzechodni", "zwierzęta to metafora"],
        "answer": "mianownik brzmi tu tak samo jak biernik",
        "why": "По форме не видно, кто подлежащее: и dzieci, и zwierzęta выглядят одинаково в именительном и винительном. Фраза честно читается в обе стороны.",
        "hint": "Найди подлежащее — и увидишь, что его тут двое 🐇"
      },
      {
        "type": "choice",
        "q": "«Czy nadal oddajesz teksty po terminie?» przyjmuje za pewnik, że —",
        "opts": ["kiedyś oddawałaś teksty po terminie", "teksty są dobre", "termin był nierealny", "pytający ci ufa"],
        "answer": "kiedyś oddawałaś teksty po terminie",
        "why": "Метка <b>nadal</b> вписывает прошлое прямо в вопрос. Это <b>presupozycja</b>: ответишь «tak» или «nie» — оба раза примешь её за правду.",
        "hint": "Одно слово внутри вопроса рассказывает целую историю 🔍"
      },
      {
        "type": "choice",
        "q": "Co zostaje prawdą i w «Marek przestał palić», i w «Marek nie przestał palić»?",
        "opts": ["że Marek palił", "że Marek pali dziś", "że Marek chce rzucić", "że Marek jest zdrowy"],
        "answer": "że Marek palił",
        "why": "Тест на отрицание: то, что переживает <b>nie</b>, и есть пресуппозиция. Глагол <b>przestać</b> всегда утверждает, что раньше было иначе.",
        "hint": "Поставь отрицание и посмотри, что уцелело 🚬"
      },
      {
        "type": "choice",
        "q": "Którą wypowiedź da się dopowiedzieć bez sprzeczności?",
        "opts": ["Przeczytałam kilka rozdziałów — właściwie wszystkie", "Marek przestał palić — nigdy nie palił", "Znowu się spóźniłaś — pierwszy raz w życiu", "Nadal mieszkasz w Krakowie — nigdy tam nie mieszkałaś"],
        "answer": "Przeczytałam kilka rozdziałów — właściwie wszystkie",
        "why": "Отменяется только импликатура: «kilka» намекало на «не все», и намёк снимается продолжением. Пресуппозиция при отмене разрушает фразу — именно этим они и различаются.",
        "hint": "Одно из четырёх продолжений звучит как уточнение, три — как противоречие 🧩"
      },
      {
        "type": "choice",
        "q": "Najlepsza odpowiedź na pytanie z podłożonym założeniem —",
        "opts": ["Nie zgadzam się z założeniem tego pytania", "Nie chcę o tym rozmawiać", "To nie pana sprawa", "Tak, ale to nie moja wina"],
        "answer": "Nie zgadzam się z założeniem tego pytania",
        "why": "Только этот ответ трогает само допущение. Отказ говорить и упрёк уводят разговор в сторону, а «tak, ale…» принимает чужую рамку целиком.",
        "hint": "Спорить надо не с вопросом, а с тем, что он принял за данность ✋"
      },
      {
        "type": "choice",
        "q": "«Nastąpiła korekta cen» znaczy, że ceny —",
        "opts": ["podniesiono", "obniżono", "sprawdzono", "zamrożono"],
        "answer": "podniesiono",
        "why": "Учёное слово вместо простого — обычный механизм эвфемизма: за «коррекцией» почти всегда стоит подорожание, а того, кто его решил, в фразе нет вовсе.",
        "hint": "Спроси, кому выгодно такое смягчение 🧾"
      },
      {
        "type": "choice",
        "q": "Normą jest —",
        "opts": ["w każdym razie", "w każdym bądź razie", "w każdym bądź wypadku", "bądź w każdym razie"],
        "answer": "w każdym razie",
        "why": "Гибрид двух правильных оборотов (<b>w każdym razie</b> и <b>bądź co bądź</b>) нормой не стал — это классическая гиперкоррекция, ошибка от старания.",
        "hint": "Лишнее слово внутри устойчивого оборота выдаёт себя сразу ✂️"
      },
      {
        "type": "choice",
        "q": "Przyszłam ___ . <i style='opacity:.6'>с этой книгой</i>",
        "opts": ["z tą książką", "z tę książką", "z ta książka", "z tej książki"],
        "answer": "z tą książką",
        "why": "После <b>z</b> идёт творительный: <b>z tą książką</b>. Форма <b>tę</b> живёт только в винительном — proszę podpisać tę umowę.",
        "hint": "Сначала определи падеж, и только потом выбирай tę или tą 📕"
      },
      {
        "type": "choice",
        "q": "Które formy są normatywne?",
        "opts": ["wziąć i włączać", "wziąść i włanczać", "wziąć i włanczać", "wziąść i włączać"],
        "answer": "wziąć i włączać",
        "why": "Норма — <b>wziąć</b> и <b>włączać</b> (а также wyłączać). Формы «wziąść» и «włanczać» очень частые в речи, но не признаны нигде.",
        "hint": "В прошедшем времени всё в порядке: wziąłem, wzięłam — сомнителен только инфинитив 🎒"
      },
      {
        "type": "choice",
        "q": "Co jest regionalizmem, a nie błędem?",
        "opts": ["na polu w znaczeniu «na dworze»", "na dworzu", "poszłem", "przekonywujący"],
        "answer": "na polu w znaczeniu «na dworze»",
        "why": "<b>Na polu</b> — живая норма Малопольши и Силезии. Остальные три формы не признаны нигде: норма — na dworze, poszedłem, przekonujący.",
        "hint": "Одна форма имеет свою территорию, три — только привычку 🗺️"
      },
      {
        "type": "choice",
        "q": "Który spójnik otwiera zdanie podrzędne i zawsze wymaga przecinka przed sobą?",
        "opts": ["że", "i", "niż", "oraz"],
        "answer": "że",
        "why": "Придаточное открывают <b>że</b>, <b>który</b>, <b>żeby</b>, <b>gdy</b>, <b>czy</b> — перед ними запятая обязательна. Перед одиночными <b>i</b> и <b>oraz</b> её нет, а перед <b>niż</b> она появляется только тогда, когда дальше идёт сказуемое: droższe, niż myślałam. Осторожно с составными связками: в <b>mimo że</b> запятая стоит перед всей связкой.",
        "hint": "Ищи слово, которое всегда открывает придаточное ✏️"
      },
      {
        "type": "gap",
        "q": "Oddał tekst, ___ że był chory. <i style='opacity:.6'>несмотря на то что — впиши слово</i>",
        "accept": ["mimo"],
        "model": "mimo",
        "why": "Связку <b>mimo że</b> запятая не разрывает: она ставится перед всей связкой целиком. Перед существительным работает голое <b>mimo</b> с родительным — mimo choroby.",
        "hint": "Два слова идут вместе, а запятая уже стоит перед ними 🤒"
      },
      {
        "type": "gap",
        "q": "Redaktor skreśla tu jedno słowo: wrócić z ___ . <i style='opacity:.6'>впиши лишнее слово</i>",
        "accept": ["powrotem"],
        "model": "powrotem",
        "why": "Возврат уже сидит в самом глаголе, поэтому <b>wrócić z powrotem</b> — это masło maślane. Из той же семьи: cofać się do tyłu, okres czasu, tylko i wyłącznie.",
        "hint": "Скажи глагол без хвоста — и смысл не изменится ✂️"
      },
      {
        "type": "gap",
        "q": "Czekaliśmy ___ godziny. <i style='opacity:.6'>полтора часа</i>",
        "accept": ["półtorej", "poltorej"],
        "model": "półtorej",
        "why": "<b>Godzina</b> женского рода, значит <b>półtorej godziny</b>. Мужской и средний род берут <b>półtora</b>: półtora roku, półtora jabłka.",
        "hint": "Форма зависит от рода слова, которое стоит рядом ⏰"
      },
      {
        "type": "trRE",
        "ru": "Скажи прямо, без обиняков.",
        "accept": ["powiedz wprost bez ogródek", "powiedz wprost, bez ogródek", "powiedz wprost bez ogrodek", "powiedz mi wprost bez ogródek", "powiedz mi to wprost bez ogrodek"],
        "model": "Powiedz wprost, bez ogródek.",
        "why": "<b>Bez ogródek</b> — «начистоту»; противоположное поведение — <b>owijać w bawełnę</b>, говорить обиняками. Такой просьбой снимают страх ранить.",
        "hint": "Второе слово — застывший оборот с ogród- внутри 🌿"
      },
      {
        "type": "trER",
        "en": "Zwolniono czterdzieści osób.",
        "accept": ["уволили сорок человек", "сорок человек уволили", "было уволено сорок человек", "уволено сорок человек"],
        "model": "Уволили сорок человек.",
        "why": "Форма на <b>-no</b> сохраняет действие и убирает исполнителя: кто именно уволил — не сказано. По-русски ей отвечает неопределённо-личное «уволили».",
        "hint": "Подлежащего в польской фразе нет — и в русской пусть тоже не будет 👤"
      },
      {
        "type": "order",
        "answer": "Nie zgadzam się z założeniem tego pytania",
        "accept": ["Nie zgadzam się z założeniem tego pytania"],
        "hintRu": "Собери: «Я не согласен(на) с посылкой этого вопроса.»",
        "why": "Вежливый выход из чужой рамки: сначала называешь допущение, потом отвечаешь по существу. После <b>z</b> здесь стоит творительный — z założeniem.",
        "hint": "Отрицание впереди, а падеж после z — творительный ✋"
      },
      {
        "type": "match",
        "q": "Соедини слово с тем, что за ним стоит на самом деле.",
        "pairs": [
          ["oszczędny", "pochwała tej samej cechy"],
          ["skąpy", "nagana tej samej cechy"],
          ["klitka", "mieszkanie nazwane z lekceważeniem"],
          ["optymalizacja zatrudnienia", "zwolnienia"],
          ["korekta cen", "podwyżka"]
        ],
        "why": "Первые три пары показывают оценку внутри слова, две последние — эвфемизм: факт остаётся, а его имя выбирают так, чтобы читатель почувствовал нужное.",
        "hint": "Спрашивай не «что это значит по словарю», а «что за этим стоит» 🎭"
      },
      {
        "type": "describe",
        "prompt": "Напиши 5–6 предложений по-польски: тебе задали неудобный вопрос о твоей работе или учёбе. Сначала откажись от чужого допущения (To pytanie zakłada, że…; Nie zgadzam się z założeniem tego pytania), потом ответь по существу и назови проверяемые факты. Замени одно оценочное слово на нейтральное и вставь одну похвалу через отрицание (nieźle, nie najgorszy).",
        "keywords": ["zakłada", "założeniem", "założenie", "nie zgadzam się", "chwileczkę", "nieźle", "nie najgorszy", "niemały"],
        "minWords": 22,
        "model": "Chwileczkę. To pytanie zakłada, że pracuję wolniej niż reszta zespołu, a tak nie jest. Nie zgadzam się z założeniem tego pytania i chętnie podam liczby. Trzy rozdziały oddałam w terminie, czwarty dzień po nim, bo czekałam na materiały od autora. Nie nazwałabym się uparta — jestem stanowcza i pilnuję jakości. Redaktorka napisała, że ten tom jest nie najgorszy, a w jej ustach to dużo.",
        "why": "Здесь сходятся три опоры недели: чужая пресуппозиция названа и отклонена, оценочное слово заменено на нейтральное, а похвала прочитана как литота.",
        "hint": "Каркас: To pytanie zakłada, że… · Nie zgadzam się… · Fakty są takie… · …nie najgorszy 💛"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен C2",
    "intro": "Это финал — и не только уровня. 33 задания по всему C2: уменьшительные и жители, аббревиатуры, трудный род и степени сравнения; метафора, метонимия, литота, ритм и сломанные обороты; оценка внутри слова, пресуппозиция и импликатура, эвфемизм, ошибки носителей и знаки препинания; и вся четвёртая неделя — проза без адаптации, стихи, научный и юридический текст, перевод, редактура, дебаты и послесловие переводчика. Соберись — и вперёд к грамоте C2! 🏆",
    "review": [
      "Суффикс как смысл: <b>dom → domek → domeczek</b> · <b>Chwileczkę</b> — вежливость, <b>ładny domek</b> о вилле — ирония · <b>to kocisko</b>, <b>ale chłopisko!</b>, но <b>babsko</b> — только грубость · <b>kanapka</b>, <b>kartka</b>, <b>kieliszek</b> — форма осталась, уменьшения нет",
      "Жители, места, аббревиатуры: <b>Krakowianin · Gdańszczanka · Warszawiak</b> — с 2026 года с заглавной, а <b>gdański</b>, <b>łódzki</b>, <b>lubelski</b>, <b>białostocki</b> — со строчной · <b>w Zakopanem</b>, <b>do Katowic</b>, <b>w Białymstoku</b>, <b>na Śląsku</b> · <b>w ZUS-ie</b>, <b>bez VAT-u</b>, но <b>w PKP</b>, <b>do MSZ</b> · <b>m.in.</b>, <b>tzn.</b> ≠ <b>tzw.</b>, <b>dr</b> без точки",
      "Род и сравнение: <b>ten temat, ten cień, ten pomidor</b> · <b>ta pomarańcza, ta mysz, ta metoda</b> · <b>ludzie, ludźmi</b> · <b>bracia, braćmi</b> · <b>księża</b> · <b>rok → lata, lat</b> · <b>lepszy, gorszy, większy, mniejszy, więcej, lepiej</b> · <b>wyższy niż Marek</b> / <b>wyższy od Marka</b> / <b>starszy ode mnie o dwa lata</b> · <b>coraz lepiej</b>, <b>im… tym…</b>, <b>jak najszybciej</b> · <b>przynajmniej</b> ≠ <b>bynajmniej nie</b>",
      "Книга и договор: <b>przekład</b>, <b>tłumacz przysięgły</b>, <b>utwór zależny</b> · <b>redakcja → korekta → skład → druk → nakład</b> · <b>dodruk</b> ≠ <b>wznowienie</b> · <b>umowa o dzieło</b>, <b>honorarium</b>, <b>termin oddania</b>, <b>kara umowna</b>, <b>pola eksploatacji</b> · <b>zwłoka</b> — по вине, <b>opóźnienie</b> — без вины · <b>wypowiedzenie</b> на будущее, <b>odstąpienie</b> — как будто договора не было · <b>pod rygorem nieważności</b>",
      "Приёмы по имени: <b>porównanie</b> со связкой · <b>metafora</b> без связки · <b>epitet</b> даёт образ · <b>metonimia</b> (Czytam Mickiewicza) и <b>synekdocha</b> (rąk do pracy) · <b>martwa metafora</b> (noga stołu) · <b>hiperbola</b>, <b>litota</b> (nieźle, niemały), <b>oksymoron</b> ≠ <b>antyteza</b>, <b>pytanie retoryczne</b>",
      "Звук, длина, повтор, порядок: <b>aliteracja</b> и <b>instrumentacja głoskowa</b> · рубленая фраза против <b>okresu retorycznego</b>, и короткая сильнее всего сразу после длинной · <b>anafora</b>, <b>epifora</b>, <b>paralelizm</b>, <b>trójka</b> · <b>szyk przestawny</b> двигает акцент, не меняя слов",
      "Чужой голос: <b>dialekt</b>, <b>gwara</b>, <b>regionalizm</b> (na polu), <b>kolokwializm</b> · <b>mazurzenie</b> · говор работает на характер, колорит и дистанцию рассказчика · <b>stylizacja</b> и <b>archaizacja</b> (waćpan, tedy) · <b>pastisz</b> — без насмешки, <b>parodia</b> — в образец, <b>trawestacja</b> — в предмет, <b>groteska</b> — ни в кого · <b>niezgodność stylu i tematu</b>",
      "Сломанные обороты: <b>bułka z masłem</b>, <b>co ma piernik do wiatraka</b>, <b>trzymać rękę na pulsie</b>, <b>gdzie diabeł mówi dobranoc</b>, <b>zaciskać pasa</b> · замена, усечение, дописанный хвост, сплав и буквализация — и всё держится на <b>rozpoznawalności</b>",
      "Оценка и подтекст: <b>oszczędny ↔ skąpy</b>, <b>stanowczy ↔ uparty</b>, <b>ugrupowanie ↔ banda</b>, <b>mieszkanie ↔ klitka</b> · <b>presupozycja</b> (nadal, znowu, przestać) переживает отрицание, <b>implikatura</b> (Był Marek, dopiero, kilka) снимается продолжением · <b>Nie zgadzam się z założeniem tego pytania</b> · эвфемизм и исчезнувший исполнитель: <b>zwolniono</b>, <b>korekta cen</b>, <b>podziękować za współpracę</b>",
      "Норма и знаки: ✅ <b>wziąć</b>, <b>włączać</b>, <b>poszedłem</b>, <b>przekonujący</b>, <b>na dworze</b>, <b>w każdym razie</b>, <b>tę książkę</b>, <b>półtorej godziny</b> · запятая перед <b>że</b> и перед всей связкой <b>mimo że</b>, но не перед одиночным <b>i</b> · <b>myślnik</b> с пробелами, <b>łącznik</b> без · <b>Polak</b>, но <b>polski</b>; <b>styczeń</b>, но <b>Boże Narodzenie</b>; <b>Plac Zbawiciela</b>, но <b>ulica</b> со строчной",
      "Читать что угодно: три прохода по неадаптированной прозе, скелет длинного периода и книжные <b>z wolna</b>, <b>tu i ówdzie</b>, <b>przeto</b>, <b>albowiem</b> · стих считает <b>sylaby</b>, <b>średniówka</b> 7 + 6 и 5 + 6, <b>rym żeński</b>, <b>przerzutnia</b>, <b>podmiot liryczny</b>, <b>puenta</b> · Szymborska, Miłosz, Herbert · наука: <b>założenie</b> без доказательства, <b>hipoteza</b> на проверку, <b>teza</b> на доказательство, <b>wniosek</b> в конце; <b>por.</b>, <b>tamże</b>, <b>cyt. za</b>, <b>przeł.</b> · закон: <b>art. → ust. → pkt → lit.</b>, <b>chyba że</b>, <b>w rozumieniu ustawy</b>",
      "Ремесло: перевод — <b>ekwiwalent</b>, а не <b>kalka</b> (<b>robić z igły widły</b>, <b>w cztery oczy</b>, <b>obejść się smakiem</b>), <b>kompensacja</b>, <b>przypis tłumacza</b>, ложные друзья (<b>pensja</b>, <b>zapamiętać</b>, <b>ważny</b> = действительный) · редактура: <b>dokonać zakupu → kupić</b>, <b>lanie wody</b>, <b>masło maślane</b>, <b>Do rozważenia</b>, <b>Gubię tu wątek</b> · спор: <b>teza — uzasadnienie — przykład — wniosek</b>, <b>ad personam</b>, <b>chochoł</b>, <b>fałszywa alternatywa</b>, <b>Proszę mi pozwolić dokończyć</b> · экзамен C2: письменная часть — четыре модуля, устная до 30 минут, сессия раз в год"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Które zdrobnienie stało się osobnym słowem i nie znaczy już «coś małego»?",
        "opts": ["kanapka", "kotek", "domek", "chwileczka"],
        "answer": "kanapka",
        "why": "<b>Kanapka</b> — бутерброд, а не диванчик; так же <b>kartka</b>, <b>kieliszek</b>, <b>łyżeczka</b>. Форма осталась уменьшительной, а смысла уменьшения в ней нет.",
        "hint": "Три слова ещё что-то уменьшают, одно давно живёт само по себе 🥪"
      },
      {
        "type": "choice",
        "q": "Mieszkanka Gdańska to —",
        "opts": ["Gdańszczanka", "Gdańskianka", "Gdaniczanka", "Gdańszczanina"],
        "answer": "Gdańszczanka",
        "why": "Основа перестраивается целиком: <b>Gdańszczanin</b>, <b>Gdańszczanka</b>, <b>Gdańszczanie</b>. С 2026 года такие названия пишутся с заглавной, а прилагательное <b>gdański</b> осталось со строчной.",
        "hint": "От названия города здесь остаётся меньше, чем кажется ⚓"
      },
      {
        "type": "choice",
        "q": "Złożyłam wniosek ___ . <i style='opacity:.6'>в ЗУСе</i>",
        "opts": ["w ZUS-ie", "w ZUSie", "w ZUS", "w ZUS-u"],
        "answer": "w ZUS-ie",
        "why": "Читается как слово — значит склоняется, и окончание пишется через дефис: <b>w ZUS-ie</b>, <b>do ZUS-u</b>. Форма на -u была бы родительным, а голое «w ZUS» оставило бы слово без падежа.",
        "hint": "Предложный падеж и дефис перед окончанием 🏛️"
      },
      {
        "type": "choice",
        "q": "Liczba mnoga od «ksiądz» —",
        "opts": ["księża", "księdzowie", "księże", "księdze"],
        "answer": "księża",
        "why": "Расширенная основа: <b>ksiądz → księża, księży, księżmi</b>. Та же перестройка в człowiek → ludzie и brat → bracia.",
        "hint": "Множественное здесь выглядит как совсем другое слово ⛪"
      },
      {
        "type": "choice",
        "q": "Redakcja zajmuje się —",
        "opts": ["sensem, strukturą i stylem", "literówkami i przecinkami", "łamaniem tekstu na strony", "wielkością nakładu"],
        "answer": "sensem, strukturą i stylem",
        "why": "<b>Redakcja</b> отвечает за смысл, структуру и стиль; <b>korekta</b> — за буквы и знаки, <b>skład</b> — за вёрстку, а <b>nakład</b> — это просто тираж.",
        "hint": "Одна работа думает, другая смотрит 📗"
      },
      {
        "type": "choice",
        "q": "«Czytam Mickiewicza» to —",
        "opts": ["metonimia", "porównanie", "litota", "hiperbola"],
        "answer": "metonimia",
        "why": "Автор назван вместо произведения — перенос по смежности. Тот же ход в <b>Warszawa zdecydowała</b> и <b>wypił kieliszek</b>.",
        "hint": "Читают всё-таки не человека 📚"
      },
      {
        "type": "choice",
        "q": "«Nie był to najłatwiejszy rok» to —",
        "opts": ["litota", "hiperbola", "oksymoron", "ironia"],
        "answer": "litota",
        "why": "Оценка через отрицание противоположного, без нажима: год был трудный. По-польски это обычная форма и похвалы, и жалобы.",
        "hint": "Сказано меньше, чем есть на самом деле ⚖️"
      },
      {
        "type": "choice",
        "q": "Nagle skrócone zdanie działa najmocniej —",
        "opts": ["zaraz po długim okresie", "na początku tekstu", "w tytule", "w środku wyliczenia"],
        "answer": "zaraz po długim okresie",
        "why": "Приём держится на перепаде: после длинного периода короткая фраза читается как захлопнувшаяся дверь. Без длинной фразы рядом останавливаться негде.",
        "hint": "Одна ручка ритма работает только вместе с другой 🚪"
      },
      {
        "type": "choice",
        "q": "Po co autor daje bohaterowi gwarę, a narratorowi język literacki?",
        "opts": ["żeby zbudować dystans między narratorem a bohaterem", "żeby pokazać, że bohater się myli", "żeby tekst był trudniejszy", "żeby uniknąć powtórzeń"],
        "answer": "żeby zbudować dystans między narratorem a bohaterem",
        "why": "Расстояние между языком рассказчика и языком героя и есть авторская позиция — вместе с характеристикой героя и местным колоритом это три работы говора в тексте.",
        "hint": "Говор в прозе всегда чей-то, а рассказчик стоит в стороне 🎚️"
      },
      {
        "type": "choice",
        "q": "Drwina wymierzona w sam wzorzec to —",
        "opts": ["parodia", "pastisz", "trawestacja", "groteska"],
        "answer": "parodia",
        "why": "У <b>parodii</b> мишень — сам образец. <b>Pastisz</b> подражает без насмешки, <b>trawestacja</b> смеётся над предметом, а <b>groteska</b> не целится ни в кого.",
        "hint": "Спроси, куда направлена насмешка 🎭"
      },
      {
        "type": "choice",
        "q": "Zamiana słowa «ugrupowanie» na «banda» zmienia —",
        "opts": ["ocenę, nie fakt", "fakt, nie ocenę", "liczbę osób", "czas zdarzenia"],
        "answer": "ocenę, nie fakt",
        "why": "Люди те же, фактов не прибавилось — прибавилось отношение. Пока каждое утверждение можно подтвердить, это окраска, а не ложь.",
        "hint": "Проверь, что именно изменилось: события или их имя 🏷️"
      },
      {
        "type": "choice",
        "q": "— Był tam ktoś ciekawy? — Był Marek. Co z tego wynika?",
        "opts": ["reszta gości była nieciekawa", "nikogo więcej nie było", "gospodarz nie zaprosił nikogo więcej", "Marek przyszedł pierwszy"],
        "answer": "reszta gości była nieciekawa",
        "why": "Сказано меньше, чем можно было: назвав одного, говорящий дал понять, что остальные упоминания не стоят. Это <b>implikatura</b> — её можно снять продолжением «Zresztą reszta też była ciekawa».",
        "hint": "Считай не сказанное, а то, чего человек не сказал 🤐"
      },
      {
        "type": "choice",
        "q": "«Podziękowaliśmy mu za współpracę» w języku firmy znaczy —",
        "opts": ["zwolniliśmy go", "daliśmy mu premię", "przedłużyliśmy umowę", "poleciliśmy go dalej"],
        "answer": "zwolniliśmy go",
        "why": "Перифраз — один из механизмов эвфемизма: вежливая формула закрывает неприятный факт. Из той же семьи <b>optymalizacja zatrudnienia</b> и <b>zmiany kadrowe</b>.",
        "hint": "Спроси, кому от этой формулировки легче 📄"
      },
      {
        "type": "choice",
        "q": "Który zapis jest poprawny?",
        "opts": ["biało-czerwony", "biało czerwony", "białoczerwony", "biało/czerwony"],
        "answer": "biało-czerwony",
        "why": "Это <b>łącznik</b> — дефис: он склеивает два равноправных слова и пробелов вокруг не имеет. <b>Myślnik</b> (тире) ставят с пробелами и совсем в другой роли: Warszawa — stolica Polski.",
        "hint": "Два знака похожи, но один длиннее и с воздухом по бокам 🇵🇱"
      },
      {
        "type": "choice",
        "q": "Książkowe «z wolna» znaczy —",
        "opts": ["powoli", "swobodnie", "z daleka", "dobrowolnie"],
        "answer": "powoli",
        "why": "<b>Z wolna</b> — книжный синоним <b>powoli</b>. Сходство с русским «вольно» здесь обманчиво: это слово на узнавание, а не на употребление.",
        "hint": "Слово из старой прозы, а не из разговора 🕯️"
      },
      {
        "type": "choice",
        "q": "«Nic dwa razy się nie zdarza» to wiersz —",
        "opts": ["Wisławy Szymborskiej", "Czesława Miłosza", "Zbigniewa Herberta", "Jana Kochanowskiego"],
        "answer": "Wisławy Szymborskiej",
        "why": "Одно из самых известных стихотворений <b>Шимборской</b> — простое слово о сложном. У Милоша есть строка «Nie bądź bezpieczny. Poeta pamięta», у Херберта — «Przesłanie Pana Cogito».",
        "hint": "Три голоса XX века и один поэт эпохи Возрождения 📜"
      },
      {
        "type": "choice",
        "q": "Co w tekście naukowym przyjmuje się bez dowodu?",
        "opts": ["założenie", "tezę", "wniosek", "hipotezę"],
        "answer": "założenie",
        "why": "<b>Założenie</b> — стартовая точка рассуждения. <b>Hipotezę</b> проверяют, <b>tezę</b> доказывают, а <b>wniosek</b> получают в конце разбора.",
        "hint": "Четыре слова стоят в цепочке — тебе нужно самое первое 🔬"
      },
      {
        "type": "choice",
        "q": "Odstąpienie od umowy różni się od wypowiedzenia tym, że —",
        "opts": ["umowę traktuje się tak, jakby jej nie było", "działa dopiero na przyszłość", "wymaga zgody sądu", "dotyczy tylko honorarium"],
        "answer": "umowę traktuje się tak, jakby jej nie było",
        "why": "<b>Wypowiedzenie</b> действует на будущее и обычно со сроком уведомления, а <b>odstąpienie</b> возвращает стороны в исходное положение.",
        "hint": "Одно расторжение смотрит вперёд, другое — назад ⚖️"
      },
      {
        "type": "choice",
        "q": "«Dokonaliśmy zakupu praw» po ludzku —",
        "opts": ["Kupiliśmy prawa", "Zakupu praw dokonano", "Nabyliśmy dokonania praw", "Prawa uległy zakupowi"],
        "answer": "Kupiliśmy prawa",
        "why": "Разворот номинализации обратно в глагол — самое сильное движение редактора: dokonać zakupu → <b>kupić</b>, podjąć decyzję → zdecydować, ulec zmianie → zmienić się.",
        "hint": "Верни действию глагол, а фразе — подлежащее ✂️"
      },
      {
        "type": "choice",
        "q": "Przypisano ci tezę, której nie stawiałaś, i obalono właśnie ją. To —",
        "opts": ["chochoł", "równia pochyła", "argument ad personam", "fałszywa alternatywa"],
        "answer": "chochoł",
        "why": "<b>Chochoł</b> — подмена чужого тезиса удобным (калька «słomiana kukła» вторична). Ответ один: спокойно повторить свой тезис дословно.",
        "hint": "Спорят не с тобой, а с удобной куклой вместо тебя 🌾"
      },
      {
        "type": "gap",
        "q": "Jest starszy ___ mnie o dwa lata. <i style='opacity:.6'>старше меня — впиши предлог</i>",
        "accept": ["ode"],
        "model": "ode",
        "why": "После <b>od</b> идёт родительный, а перед формой <b>mnie</b> предлог получает беглое e: <b>ode mnie</b>. Величину разницы передаёт <b>o</b> с винительным: o dwa lata.",
        "hint": "Тот же беглый гласный, что во «we Wrocławiu» ✍️"
      },
      {
        "type": "gap",
        "q": "Nagłówek «Bułka z problemem» przerabia zwrot: bułka z ___ . <i style='opacity:.6'>впиши слово</i>",
        "accept": ["masłem", "maslem"],
        "model": "masłem",
        "why": "<b>Bułka z masłem</b> значит «проще простого». Замена одного слова переворачивает смысл, но оборот остаётся узнаваемым — без узнавания игры бы не было.",
        "hint": "То, что мажут на булку, и творительный падеж 🥐"
      },
      {
        "type": "gap",
        "q": "Muszę ___ parasol. <i style='opacity:.6'>взять — впиши нормативную форму</i>",
        "accept": ["wziąć", "wziac"],
        "model": "wziąć",
        "why": "Норма — <b>wziąć</b>; форма «wziąść» очень частая в речи, но не признана нигде. В прошедшем времени всё в порядке: wziąłem, wzięłam, wziął.",
        "hint": "Один лишний звук — и слово выпадает из нормы ☂️"
      },
      {
        "type": "gap",
        "q": "W trzynastozgłoskowcu średniówka pada po ___ sylabie. <i style='opacity:.6'>впиши число словом</i>",
        "accept": ["siódmej", "siodmej"],
        "model": "siódmej",
        "why": "Схема тринадцатисложника — <b>7 + 6</b>: обязательный словораздел после седьмого слога. У одиннадцатисложника схема 5 + 6.",
        "hint": "Тринадцать делится не пополам — сначала идёт длинная половина 🎼"
      },
      {
        "type": "gap",
        "q": "Nazwisko tłumaczki stoi w ___ redakcyjnej. <i style='opacity:.6'>в выходных данных — впиши слово</i>",
        "accept": ["stopce"],
        "model": "stopce",
        "why": "<b>Stopka redakcyjna</b> — выходные данные на обороте титульного листа; именно там печатают имя переводчика. Предложный падеж от stopka — <b>w stopce</b>.",
        "hint": "Слово одно, а падеж подсказывает окончание -ce 📖"
      },
      {
        "type": "trRE",
        "ru": "Не делай из мухи слона.",
        "accept": ["nie rób z igły widły", "nie rob z igly widly", "nie rób z igły widły.", "nie rob z igly widly."],
        "model": "Nie rób z igły widły.",
        "why": "Идиому переводят эквивалентом, а не картинкой: по-польски преувеличивают не мухой и слоном, а иглой и вилами — <b>robić z igły widły</b>.",
        "hint": "Картинка другая, работа та же 🪡"
      },
      {
        "type": "trER",
        "en": "Bilet jest ważny do piątku.",
        "accept": ["билет действителен до пятницы", "билет действует до пятницы", "билет годен до пятницы", "билет действителен до пятницы."],
        "model": "Билет действителен до пятницы.",
        "why": "У <b>ważny</b> есть второе значение — «действительный». Знакомое слово опаснее незнакомого: именно на таких ложных друзьях спотыкается перевод.",
        "hint": "Билет вряд ли бывает важным — подумай, чем он бывает 🎫"
      },
      {
        "type": "trER",
        "en": "W tym pytaniu jest założenie, którego nie podzielam.",
        "accept": ["в этом вопросе есть посылка которую я не разделяю", "в этом вопросе есть посылка, которую я не разделяю", "в этом вопросе есть допущение, которого я не разделяю", "в этом вопросе есть допущение, которое я не разделяю"],
        "model": "В этом вопросе есть посылка, которую я не разделяю.",
        "why": "Так разбирают каверзный вопрос до ответа: не отклонённая посылка считается принятой. Сначала назови допущение, потом отвечай по существу.",
        "hint": "Ключевое слово — то, что вопрос принял за данность 🎤"
      },
      {
        "type": "order",
        "answer": "Proszę mi pozwolić dokończyć",
        "accept": ["Proszę mi pozwolić dokończyć", "Proszę pozwolić mi dokończyć"],
        "hintRu": "Собери: «Позвольте мне договорить.»",
        "why": "Вежливо и твёрдо, без повышения голоса: короткое <b>mi</b> встаёт сразу после первого слова. Дальше хорошо работает <b>Dokończę myśl i oddaję głos</b>.",
        "hint": "Начинается с proszę, а коротышка mi идёт сразу за ним 🎙️"
      },
      {
        "type": "match",
        "q": "Соедини многозначное слово со вторым значением, которое у него есть.",
        "pairs": [
          ["zamek", "suwak w kurtce"],
          ["para", "obłok nad czajnikiem"],
          ["rola", "ziemia pod uprawę"],
          ["zdanie", "opinia w dyskusji"],
          ["korek", "zator na drodze"]
        ],
        "why": "Многозначность снимается контекстом: <b>zamek</b> в куртке — молния, <b>para</b> над чайником — пар, <b>rola</b> в поле — пашня, <b>zdanie</b> в споре — мнение, <b>korek</b> на дороге — пробка.",
        "hint": "У каждого слова здесь есть школьное значение и бытовое 🔑"
      },
      {
        "type": "match",
        "q": "Соедини сокращение с тем, что оно значит.",
        "pairs": [
          ["por.", "porównaj z inną pracą"],
          ["tamże", "w tej samej pracy co wyżej"],
          ["cyt. za", "cytat z drugiej ręki"],
          ["przeł.", "przetłumaczył"],
          ["z późn. zm.", "z późniejszymi zmianami"]
        ],
        "why": "Ссылочный аппарат читается как отдельный язык: <b>por.</b> отсылает к другой работе, <b>tamże</b> — к той же самой, <b>cyt. za</b> честно признаётся, что цитата взята из вторых рук, <b>przeł.</b> называет переводчика, а <b>z późn. zm.</b> предупреждает, что закон правили.",
        "hint": "Четыре пометы из научной статьи и одна из вестника законов 📚"
      },
      {
        "type": "describe",
        "prompt": "Напиши 5–6 предложений по-польски: сначала свой аргумент по схеме teza — uzasadnienie — przykład — wniosek, потом воображаемый контрдовод оппонента и твой ответ на него. Признай его правоту в одном пункте и назови по-польски приём, если он спорит нечестно (ad personam, chochoł, fałszywa alternatywa).",
        "keywords": ["stawiam tezę", "teza", "uzasadnienie", "przykład", "wniosek", "ad personam", "chochoł", "fałszywa alternatywa", "zgadzam się", "natomiast", "meritum"],
        "minWords": 24,
        "model": "Stawiam tezę, że przekład literacki powinien mieć jednego tłumacza, a nie zespół. Uzasadnienie jest proste: rytm zdania buduje się przez całą książkę, nie w jednym rozdziale. Przykład: powieść, którą oddawało czterech tłumaczy, czyta się jak cztery różne książki. Wniosek jest taki, że jeden głos znaczy więcej niż tempo pracy. Zgadzam się co do terminów, natomiast zdanie, że chodzi mi wyłącznie o honorarium, to argument ad personam. Wróćmy do meritum.",
        "why": "Аргумент собран из четырёх частей, один пункт оппонента признан, а нечестный ход назван по имени — это и есть спор при публике, а не перепалка.",
        "hint": "Каркас: Stawiam tezę, że… · Uzasadnienie… · Przykład… · Wniosek… · Zgadzam się…, natomiast… 🗣️"
      },
      {
        "type": "describe",
        "prompt": "Финальное задание уровня. Напиши 8–10 предложений по-польски — фрагмент послесловия переводчика (posłowie): одна сцена работы над книгой, одно решение, за которое ты отвечаешь, и один вывод. Вставь метафору, литоту, одну изменённую устойчивую идиому, одно нарочито короткое предложение и один длинный период. Сюжет пересказывать не нужно.",
        "keywords": ["przekład", "tłumaczenie", "zdanie", "czytelnik", "oryginał", "nieźle", "niemały", "nie najłatwiejszy", "odpowiedzialność", "straciło", "posłowie"],
        "minWords": 30,
        "model": "Najdłużej pracowałam nad jednym zdaniem z siódmego rozdziału. Przekład jest szybą: im mniej go widać, tym lepiej widać książkę. Nie był to najłatwiejszy rok w mojej pracy. Kiedy autor każe bohaterce mówić gwarą, tłumacz staje przed wyborem, którego nie da się rozstrzygnąć raz na zawsze, bo każdy wariant coś zyskuje i coś traci, a decyzja i tak zapada nad jednym konkretnym zdaniem, przy którym siedzi się do nocy. Coś się przy tym straciło. Zamiast gwary zostawiłam składnię i rytm, nie fonetykę, i za ten wybór biorę odpowiedzialność. Nie taki oryginał straszny, jak go malują: trudniejsze okazało się polskie zdanie, nie rosyjskie. Czytelnik ma prawo nie zgodzić się z tym wyborem. Każde polskie zdanie w tej książce jest moje.",
        "why": "Весь уровень в одном тексте: приём поставлен ради работы, а не ради приёма, оценка дана литотой, идиома сломана осознанно, и после длинного периода стоит короткая фраза. Это и есть свой голос.",
        "hint": "Каркас: Najdłużej pracowałem(am) nad… · …jest szybą · Nie był to najłatwiejszy… · Coś się przy tym straciło. · Za ten wybór biorę odpowiedzialność 💛"
      }
    ]
  }
};
