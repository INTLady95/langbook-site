/* Polish B1 — level config, 30-day plan (COURSE) and 4 EXAMS.
   Data only: the shared renderer lives in engine.js.
   preview:false — released course. */
window.LEVEL = {
  code:'B1',
  course:'pl-b1',
  pkey:'langbook-pl-b1-progress',
  preview:false,
  finalNote:'Месяц назад ты собирал(а) фразы по кирпичику — а сегодня пишешь письмо в urząd, рассказываешь длинную историю с причастиями и «если бы» и вежливо споришь о новостях. Анна сдала свой экзамен — и твой B1 тоже за плечами. Горжусь тобой 💛',
  speech:'pl-PL',
  langPo:'по-польски',
  langNa:'польский',
  langAdj:'польское',
  phIn:'po polsku…'
};

const COURSE = [
  {wn:'01', wt:'Приставка — завод смыслов: глаголы движения и не только', days:[
    {n:1,t:'Снова в путь',p:'Znowu w drogę'},
    {n:2,t:'Приехал, уехал',p:'Przyjechałem, wyjechałem'},
    {n:3,t:'Приставка меняет всё',p:'Prefiks zmienia wszystko'},
    {n:4,t:'Бегу или бегаю',p:'Biec — biegać, lecieć — latać'},
    {n:5,t:'Начал, продолжаю, заканчиваю',p:'Zaczynać, kończyć'},
    {n:6,t:'Переезд',p:'Przeprowadzka'},
    {n:7,t:'Повторение недели 1',p:'Powtórka 1'}
  ]},
  {wn:'02', wt:'Множественное число вглубь: падежи, числительные, «который»', days:[
    {n:8,t:'Много чего',p:'Dopełniacz liczby mnogiej'},
    {n:9,t:'Всем, со всеми, обо всех',p:'-om, -ami, -ach'},
    {n:10,t:'Двое детей',p:'Liczebniki zbiorowe'},
    {n:11,t:'Который, с которым',p:'Który w przypadkach'},
    {n:12,t:'Свой, тот же, другой',p:'Swój, ten sam, inny'},
    {n:13,t:'Чем дальше, тем лучше',p:'Im… tym…'},
    {n:14,t:'Повторение недели 2',p:'Powtórka 2'}
  ]},
  {wn:'03', wt:'Чтобы, если бы, говорят: сослагательность и безличность', days:[
    {n:15,t:'Хочу, чтобы ты…',p:'Chcę, żebyś…'},
    {n:16,t:'Если бы да кабы',p:'Gdyby'},
    {n:17,t:'Он сказал, что…',p:'Mowa zależna'},
    {n:18,t:'Можно, нужно, стоит',p:'Można, trzeba, warto'},
    {n:19,t:'Построили, открыто',p:'Zbudowano, otwarto'},
    {n:20,t:'Сделан и сделанный',p:'Strona bierna'},
    {n:21,t:'Повторение недели 3',p:'Powtórka 3'}
  ]},
  {wn:'04', wt:'Причастия, чувства, официальный мир и большой финал', days:[
    {n:22,t:'Читающий человек',p:'Imiesłów na -ący'},
    {n:23,t:'Читая и сделав',p:'Imiesłowy na -ąc'},
    {n:24,t:'Домик и котик',p:'Zdrobnienia'},
    {n:25,t:'Чувства и характер',p:'Uczucia i charakter'},
    {n:26,t:'В учреждении',p:'W urzędzie'},
    {n:27,t:'Праздники',p:'Święta i tradycje'},
    {n:28,t:'Медиа и мнения',p:'Media i opinie'},
    {n:29,t:'Большая история',p:'Wielka opowieść'},
    {n:30,t:'Свободно о своём',p:'Swobodnie o swoim'}
  ]}
];

const EXAMS = {
  "1": {
    "week": 1,
    "title": "Экзамен · Неделя 1",
    "intro": "Первая неделя B1 позади — и она подарила тебе целый завод смыслов. 25 заданий: приставки на iść и jechać, семья pisać, пары biec/biegać и nieść/nosić, фазовые глаголы и переезд. Наберёшь 80% — открою Неделю 2. 💛",
    "review": [
      "Приставки = русские приставки: <b>przy-</b> при- · <b>wy-</b> вы- · <b>w(e)-</b> во- · <b>do-</b> до- · <b>prze-</b> пере- · <b>od-</b> ото- · <b>po-</b> по-",
      "От iść: <b>przyjść · wyjść · wejść · dojść · przejść · odejść</b> · приставка делает вид совершенным: <b>przyjdę</b> = «приду», а не «прихожу»",
      "Прошедшее: <b>przyszedłem / przyszłam</b> · <b>wszedłem / weszłam</b> · <b>odszedł / odeszła</b> · doszliśmy / doszłyśmy",
      "От jechać (только транспорт!): przyjechać · wyjechać · dojechać · <b>zjechać</b> = съехать вниз · существительные с табло: <b>przyjazd · odjazd · wyjazd · dojazd</b>",
      "От pisać: podpisać · zapisać (się) · <b>przepisać</b> (у врача — «прописал») · opisać · dopisać · <b>odpisać</b> = ответить письменно · <b>przepis</b> = рецепт блюда, у врача — <b>recepta</b>",
      "Пары движения: <b>biec / biegać · lecieć / latać · płynąć / pływać · nieść / nosić · wieźć / wozić</b> · ó только в мужском ед. ч.: <b>niósł · wiózł</b>",
      "Фазовые: <b>zacząć · skończyć · przestać</b> + только <b>несовершенный</b> инфинитив: zacząłem <b>czytać</b> · skończyć palić (докурить) ≠ przestać palić (бросить)",
      "Переезд: przeprowadzka · przeprowadzić się · wnieść / wynieść / przenieść / przewieźć · рекции: <b>pomagać komuś w czymś</b> · <b>cieszyć się z czegoś</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Pociąg z Włoch ___ o siódmej rano. <i style='opacity:.6'>поезд из Италии пришёл в семь утра</i>",
        "opts": [
          "przyszedł",
          "poszedł",
          "wszedł",
          "odszedł"
        ],
        "answer": "przyszedł",
        "why": "Прибытие сюда — приставка przy-: przyszedł. Poszedł значит «ушёл туда», wszedł — «вошёл внутрь», odszedł — «отошёл».",
        "hint": "«При-» и «по-» различаются так же, как в русском: пришёл — сюда, пошёл — отсюда 🚆"
      },
      {
        "type": "choice",
        "q": "Anna o sobie: Wczoraj ___ do pokoju i otworzyłam okna. <i style='opacity:.6'>я вошла</i>",
        "opts": [
          "weszłam",
          "wszedłam",
          "wyszłam",
          "weszła"
        ],
        "answer": "weszłam",
        "why": "У приставки w- в прошедшем гласная перебрасывается: мужчина скажет wszedłem, женщина — weszłam. Wyszłam значит «вышла», weszła — «она вошла».",
        "hint": "Мужская форма длинная (wszedłem), женская короткая и с e впереди 🚪"
      },
      {
        "type": "choice",
        "q": "Marka nie ma, ___ na chwilę. <i style='opacity:.6'>его нет, он вышел на минутку</i>",
        "opts": [
          "wyszedł",
          "wszedł",
          "przyszedł",
          "doszedł"
        ],
        "answer": "wyszedł",
        "why": "Наружу и ненадолго — приставка wy-: wyszedł. Wszedł — «вошёл», przyszedł — «пришёл», doszedł — «дошёл до чего-то».",
        "hint": "Русское «вы-» и польское wy- значат одно и то же 🚶"
      },
      {
        "type": "choice",
        "q": "Marek o sobie: ___ pieszo, bo mieszkam blisko. <i style='opacity:.6'>я пришёл пешком</i>",
        "opts": [
          "Przyszedłem",
          "Przyjechałem",
          "Przyniosłem",
          "Przyleciałem"
        ],
        "answer": "Przyszedłem",
        "why": "Jechać — только про транспорт, поэтому пешком приходят: Przyszedłem pieszo. Przyjechałem значило бы «приехал» на чём-то.",
        "hint": "Пешком не «приезжают» ни по-русски, ни по-польски 👟"
      },
      {
        "type": "choice",
        "q": "Как по-польски «дорога до места, как туда добираться»?",
        "opts": [
          "dojazd",
          "odjazd",
          "przyjazd",
          "wyjazd"
        ],
        "answer": "dojazd",
        "why": "Dojazd do centrum zajmuje pół godziny — «дорога до центра занимает полчаса». Odjazd — отправление, przyjazd — приезд, wyjazd — отъезд или поездка.",
        "hint": "Приставка do- всегда про «до места, до предела» 🚌"
      },
      {
        "type": "choice",
        "q": "Lekarz ___ mi lek na gardło. <i style='opacity:.6'>врач прописал мне лекарство</i>",
        "opts": [
          "przepisał",
          "podpisał",
          "dopisał",
          "odpisał"
        ],
        "answer": "przepisał",
        "why": "У врача przepisać значит «прописать, назначить». Podpisał — «подписал», dopisał — «дописал», odpisał — «ответил письменно».",
        "hint": "Тот же глагол, что «переписать», у врача работает как русское «прописал» 💊"
      },
      {
        "type": "choice",
        "q": "Napisałem do niej wczoraj, ale jeszcze nie ___. <i style='opacity:.6'>она ещё не ответила</i>",
        "opts": [
          "odpisała",
          "opisała",
          "przepisała",
          "dopisała"
        ],
        "answer": "odpisała",
        "why": "Odpisać — «ответить письменно», это одна из четырёх ловушек недели. Opisać — «описать», przepisać — «переписать, прописать», dopisać — «дописать».",
        "hint": "Приставка od- часто значит «в ответ» ✉️"
      },
      {
        "type": "choice",
        "q": "Co rano ___ w parku. <i style='opacity:.6'>каждое утро я бегаю в парке</i>",
        "opts": [
          "biegam",
          "biegnę",
          "biegłam",
          "biegają"
        ],
        "answer": "biegam",
        "why": "Co rano — регулярность, значит второй глагол пары: biegam. Biegnę — «бегу сейчас», biegłam — «бежала», biegają — «они бегают».",
        "hint": "«Бегу» и «бегаю» делятся точно так же, как в русском 🏃"
      },
      {
        "type": "choice",
        "q": "On ___ dwie walizki. <i style='opacity:.6'>он нёс два чемодана</i>",
        "opts": [
          "niósł",
          "niosła",
          "niosłem",
          "nosiła"
        ],
        "answer": "niósł",
        "why": "Буква ó живёт только в мужской форме единственного числа: on niósł, но ona niosła. Niosłem — «я нёс», nosiła — «она носила».",
        "hint": "Та же ó, что в mógł, — и только в этой одной форме 🧳"
      },
      {
        "type": "choice",
        "q": "Zacząłem ___ tę książkę wczoraj. <i style='opacity:.6'>я начал читать эту книгу вчера</i>",
        "opts": [
          "czytać",
          "przeczytać",
          "czytam",
          "przeczytałem"
        ],
        "answer": "czytać",
        "why": "После фазового глагола идёт только несовершенный инфинитив — как в русском «начал читать», а не «начал прочитать».",
        "hint": "Проверь себя по-русски: «начал сделать» язык не выговаривает 📖"
      },
      {
        "type": "choice",
        "q": "«Он бросил курить два года назад» —",
        "opts": [
          "Przestał palić dwa lata temu",
          "Skończył palić dwa lata temu",
          "Zaczął palić dwa lata temu",
          "Przestał zapalić dwa lata temu"
        ],
        "answer": "Przestał palić dwa lata temu",
        "why": "Przestać — оборвать насовсем, «бросить». Skończył palić значит «докурил сигарету». А после фазового глагола совершенный вид невозможен.",
        "hint": "Один глагол про «до конца», другой про «прекратил насовсем» 🚭"
      },
      {
        "type": "gap",
        "q": "Anna o sobie: ___ z domu o ósmej. <i style='opacity:.6'>я вышла из дома в восемь</i>",
        "accept": [
          "wyszłam",
          "wyszlam"
        ],
        "model": "Wyszłam",
        "hint": "Наружу — приставка wy-, а форма женская и короткая 🏠"
      },
      {
        "type": "gap",
        "q": "Marek i Anna o sobie: Do dworca ___ pieszo. <i style='opacity:.6'>мы дошли до вокзала пешком</i>",
        "accept": [
          "doszliśmy",
          "doszlismy"
        ],
        "model": "doszliśmy",
        "hint": "До предела — do-, а в компании есть мужчина, значит ветка со слогом -li- 🚉"
      },
      {
        "type": "gap",
        "q": "Marek o sobie: Wczoraj ___ umowę w banku. <i style='opacity:.6'>я подписал договор</i>",
        "accept": [
          "podpisałem",
          "podpisalem"
        ],
        "model": "podpisałem",
        "hint": "Под-писать = pod-pisać, форма мужская 🖊️"
      },
      {
        "type": "gap",
        "q": "Film ___ się o ósmej. <i style='opacity:.6'>фильм начинается в восемь</i>",
        "accept": [
          "zaczyna"
        ],
        "model": "zaczyna",
        "hint": "События начинаются сами — фазовый глагол с się, несовершенный вид 🎬"
      },
      {
        "type": "gap",
        "q": "Cieszę się ___ nowego mieszkania. <i style='opacity:.6'>я рад(а) новой квартире — впиши предлог</i>",
        "accept": [
          "z"
        ],
        "model": "z",
        "hint": "Русское «радуюсь чему» здесь не работает: у польского глагола свой предлог и родительный падеж 🎉"
      },
      {
        "type": "trRE",
        "ru": "Я помогаю Мареку с переездом.",
        "accept": [
          "pomagam markowi w przeprowadzce",
          "pomagam markowi w przeprowadzce.",
          "pomagam markowi przy przeprowadzce"
        ],
        "model": "Pomagam Markowi w przeprowadzce.",
        "hint": "Помогают кому — дательный, а «в чём» — предлог w с предложным 📦"
      },
      {
        "type": "trRE",
        "ru": "Обычно я выхожу в восемь.",
        "accept": [
          "zwykle wychodzę o ósmej",
          "zwykle wychodze o osmej",
          "zwykle wychodzę o osmej",
          "zwykle wychodze o ósmej",
          "wychodzę zwykle o ósmej"
        ],
        "model": "Zwykle wychodzę o ósmej.",
        "hint": "Привычка — несовершенный вид, основа от chodzić ⏰"
      },
      {
        "type": "trRE",
        "ru": "Он бросил курить.",
        "accept": [
          "przestał palić",
          "przestal palic",
          "przestał palic",
          "przestal palić"
        ],
        "model": "Przestał palić.",
        "hint": "«Бросил» — это przestać, а после него только несовершенный инфинитив 🚭"
      },
      {
        "type": "trER",
        "en": "Brat przywiózł pudła.",
        "accept": [
          "брат привёз коробки",
          "брат привез коробки",
          "брат привёз коробки.",
          "мой брат привёз коробки"
        ],
        "model": "Брат привёз коробки.",
        "hint": "Приставка przy- плюс корень «везти» 📦"
      },
      {
        "type": "trER",
        "en": "Dojazd do centrum zajmuje pół godziny.",
        "accept": [
          "дорога до центра занимает полчаса",
          "дорога до центра занимает пол часа",
          "дорога до центра занимает полчаса.",
          "путь до центра занимает полчаса",
          "добираться до центра полчаса"
        ],
        "model": "Дорога до центра занимает полчаса.",
        "hint": "Dojazd — это не «доезд», а именно «как туда добираться» 🚋"
      },
      {
        "type": "order",
        "answer": "Wyszliśmy na peron z dwiema walizkami",
        "accept": [
          "Wyszliśmy na peron z dwiema walizkami"
        ],
        "hintRu": "Собери: «Мы вышли на перрон с двумя чемоданами.»",
        "hint": "Начни с формы «мы» (в компании есть мужчина), дальше — куда и с чем 🧳"
      },
      {
        "type": "order",
        "answer": "Zacząłem czytać tę książkę wczoraj",
        "accept": [
          "Zacząłem czytać tę książkę wczoraj",
          "Wczoraj zacząłem czytać tę książkę"
        ],
        "hintRu": "Собери: «Я начал читать эту книгу вчера.»",
        "hint": "После фазового глагола идёт несовершенный инфинитив 📚"
      },
      {
        "type": "match",
        "q": "Соедини польский глагол с его русским близнецом.",
        "pairs": [
          [
            "przyjść",
            "прийти"
          ],
          [
            "wyjść",
            "выйти"
          ],
          [
            "wejść",
            "войти"
          ],
          [
            "dojść",
            "дойти"
          ],
          [
            "odejść",
            "отойти"
          ]
        ],
        "hint": "Приставка подскажет сама: przy- при-, wy- вы-, w(e)- во-, do- до-, od- ото- 🧱"
      },
      {
        "type": "describe",
        "prompt": "Напиши 3–4 предложения по-польски о своём вчерашнем утре: когда ты вышел(шла) из дома, куда зашёл(зашла), куда дошёл(дошла) и когда пришёл(пришла) на место. Используй приставочные глаголы.",
        "keywords": [
          "wyszedłem",
          "wyszłam",
          "wszedłem",
          "weszłam",
          "doszedłem",
          "doszłam",
          "przyszedłem",
          "przyszłam",
          "przyjechałem",
          "przyjechałam",
          "najpierw",
          "potem"
        ],
        "minWords": 10,
        "model": "Wyszłam z domu o ósmej. Najpierw weszłam do sklepu po kawę. Potem przeszłam przez park i doszłam do przystanku. Do pracy przyszłam o wpół do dziewiątej.",
        "hint": "Каркас: Wyszedłem / Wyszłam z domu o… Potem weszłam do… W końcu przyszłam do… 💛"
      }
    ]
  },
  "2": {
    "week": 2,
    "title": "Экзамен · Неделя 2",
    "intro": "Вторая неделя была про множественное число вглубь. 25 заданий: родительный мн. ч., три суперрегулярных окончания -om / -ami / -ach, dwoje и troje, склоняемое «который», swój и связка im… tym… Наберёшь 80% — откроется Неделя 3. 💛",
    "review": [
      "Родительный мн.: <b>-ów</b> (kotów, domów, stołów) · мягкие и шипящие <b>-i / -y</b> (koni, gości, mebli, talerzy) · ж. и ср. род — пусто, с беглым e (lamp, kobiet, <b>książek</b>, <b>okien</b>, <b>krzeseł</b>)",
      "Особые формы: <b>dzieci · ludzi · pieniędzy · przyjaciół · braci · rąk · lat</b>",
      "Где он живёт: pięć lamp · dużo mebli · nie ma zasłon · <b>brakuje mi krzeseł</b>",
      "Три окончания подряд: <b>-om</b> (dzieciom, gościom) · <b>-ami</b> (z sąsiadami) · <b>-ach</b> (o dzieciach, na wakacjach)",
      "Короткий список на <b>-mi</b>: dziećmi · ludźmi · przyjaciółmi · braćmi · gośćmi · и страны на -ech: <b>we Włoszech · w Niemczech · na Węgrzech</b>",
      "Собирательные: <b>dwoje · troje · czworo · pięcioro</b> + родительный мн.: dwoje dzieci · <b>Przyszło troje gości</b> · obaj / obie / <b>oboje</b> · rodzeństwo",
      "Który: род и число — от слова слева, падеж — от своей работы: ludzie, <b>którzy</b>… · człowiek, <b>którego</b> znasz · sąsiad, <b>któremu</b> pomogliśmy · dom, <b>w którym</b> mieszkamy",
      "<b>Swój</b> — когда хозяин совпадает с подлежащим: Marek kocha <b>swoją</b> pracę ≠ <b>jego</b> pracę · ten sam ≠ taki sam · żaden… <b>nie</b>",
      "<b>Im</b> więcej, <b>tym</b> lepiej · <b>coraz</b> lepiej · niż / od — сравнение · jak — приравнивание (biały jak śnieg) · jak najszybciej"
    ],
    "q": [
      {
        "type": "choice",
        "q": "W kuchni nie ma ___. <i style='opacity:.6'>стульев нет</i>",
        "opts": [
          "krzeseł",
          "krzesła",
          "krzesłów",
          "krzesłach"
        ],
        "answer": "krzeseł",
        "why": "Средний род в родительном множественного остаётся без окончания, а внутрь встаёт беглое e: krzesło → krzeseł. Отрицание требует именно родительного.",
        "hint": "Как русское «стульев нет» — форма короткая, но с гласной внутри 🪑"
      },
      {
        "type": "choice",
        "q": "Nie mam ___. <i style='opacity:.6'>у меня нет денег</i>",
        "opts": [
          "pieniędzy",
          "pieniądzów",
          "pieniądze",
          "pieniądzach"
        ],
        "answer": "pieniędzy",
        "why": "Это слово из короткого списка особых форм: pieniądze → pieniędzy. После отрицания — родительный.",
        "hint": "Слово живёт почти только во множественном, и родительный у него свой [пе-нень-дзы] 💸"
      },
      {
        "type": "choice",
        "q": "Tu zawsze jest dużo ___. <i style='opacity:.6'>здесь всегда много людей</i>",
        "opts": [
          "ludzi",
          "ludzie",
          "ludziów",
          "ludziach"
        ],
        "answer": "ludzi",
        "why": "После dużo идёт родительный множественного, а у ludzie он теряет -e: ludzi. Точно как русское «людей».",
        "hint": "Слово количества всегда тянет за собой родительный 👥"
      },
      {
        "type": "choice",
        "q": "Lubię rozmawiać ___. <i style='opacity:.6'>с детьми</i>",
        "opts": [
          "z dziećmi",
          "z dzieciami",
          "z dziecami",
          "z dzieciach"
        ],
        "answer": "z dziećmi",
        "why": "Обычное окончание творительного — -ami, но небольшая группа частотных слов берёт укороченное -mi: dziećmi, ludźmi, przyjaciółmi, gośćmi.",
        "hint": "Это одно из тех слов, что говорят чаще всего, — и форма у него своя 🧒"
      },
      {
        "type": "choice",
        "q": "Byliśmy ___ w czerwcu. <i style='opacity:.6'>в Германии</i>",
        "opts": [
          "w Niemczech",
          "w Niemcach",
          "w Niemczach",
          "na Niemczech"
        ],
        "answer": "w Niemczech",
        "why": "У нескольких стран предложный множественного берёт старинное -ech: w Niemczech, we Włoszech, na Węgrzech.",
        "hint": "Ты уже говорил(а) we Włoszech — тут та же старинная форма 🇩🇪"
      },
      {
        "type": "choice",
        "q": "Dziękuję ___ za kwiaty. <i style='opacity:.6'>спасибо гостям</i>",
        "opts": [
          "gościom",
          "gości",
          "gośćmi",
          "gościach"
        ],
        "answer": "gościom",
        "why": "Dziękować требует дательного, а дательный множественного — всегда -om, без исключений. Русское «гостям» стоит ровно там же.",
        "hint": "Самое лёгкое окончание языка: одно на все роды 💐"
      },
      {
        "type": "choice",
        "q": "Sąsiad ma ___. <i style='opacity:.6'>у соседа двое детей</i>",
        "opts": [
          "dwoje dzieci",
          "dwa dzieci",
          "dwie dzieci",
          "dwoje dziecim"
        ],
        "answer": "dwoje dzieci",
        "why": "Со словом dzieci работает только собирательное числительное, и после него идёт родительный множественного: dwoje dzieci.",
        "hint": "«Двое детей» — та же самая категория, что в русском 👧👦"
      },
      {
        "type": "choice",
        "q": "To są studenci, ___ nam pomogli. <i style='opacity:.6'>студенты, которые нам помогли</i>",
        "opts": [
          "którzy",
          "które",
          "który",
          "którymi"
        ],
        "answer": "którzy",
        "why": "Studenci — мужско-личная форма, значит и «который» встаёт в мужско-личную: którzy. Które сказали бы о studentki или о вещах.",
        "hint": "Та же ветка, что oni byli и ci studenci 🎓"
      },
      {
        "type": "choice",
        "q": "Dom, ___ mieszkamy, jest stary. <i style='opacity:.6'>дом, в котором мы живём</i>",
        "opts": [
          "w którym",
          "który",
          "którego",
          "w której"
        ],
        "answer": "w którym",
        "why": "Падеж «который» получает от своей работы внутри придаточного: mieszkać w czymś — предлог w с предложным. Предлог идёт вместе с ним вперёд.",
        "hint": "Скажи фразу по-русски — предлог встанет на то же место 🏠"
      },
      {
        "type": "choice",
        "q": "Marek kocha ___ pracę. <i style='opacity:.6'>свою работу</i>",
        "opts": [
          "swoją",
          "jego",
          "jej",
          "swój"
        ],
        "answer": "swoją",
        "why": "Хозяин совпадает с подлежащим — значит swój, в винительном женского рода swoją. Jego pracę значило бы «чужую, его работу».",
        "hint": "Смотри не на хозяина, а на подлежащее — как в русском 💼"
      },
      {
        "type": "choice",
        "q": "___ więcej, tym lepiej. <i style='opacity:.6'>чем больше, тем лучше</i>",
        "opts": [
          "Im",
          "Niż",
          "Jak",
          "Coraz"
        ],
        "answer": "Im",
        "why": "В связке нарастания русское «чем» передаётся словом im, а «тем» — tym. Niż сравнивает две вещи, jak приравнивает, coraz значит «всё…».",
        "hint": "Если во второй половине стоит «тем» — первое слово только одно 📈"
      },
      {
        "type": "gap",
        "q": "Kupiliśmy pięć ___. <i style='opacity:.6'>пять стульев (krzesło)</i>",
        "accept": [
          "krzeseł",
          "krzesel"
        ],
        "model": "krzeseł",
        "hint": "После пяти — родительный множественного, а внутри слова просыпается беглое e 🪑"
      },
      {
        "type": "gap",
        "q": "Latem byliśmy we ___. <i style='opacity:.6'>в Италии</i>",
        "accept": [
          "włoszech",
          "wloszech"
        ],
        "model": "Włoszech",
        "hint": "У этой страны предложный множественного кончается на -ech 🇮🇹"
      },
      {
        "type": "gap",
        "q": "Przyjechaliśmy z ___. <i style='opacity:.6'>с друзьями (przyjaciele)</i>",
        "accept": [
          "przyjaciółmi",
          "przyjaciolmi",
          "przyjaciółmi."
        ],
        "model": "przyjaciółmi",
        "hint": "Это слово из короткого списка на -mi, и ó в творительном остаётся 👫"
      },
      {
        "type": "gap",
        "q": "Nie mam ___ pieniędzy. <i style='opacity:.6'>никаких денег (żaden)</i>",
        "accept": [
          "żadnych",
          "zadnych"
        ],
        "model": "żadnych",
        "hint": "Это слово всегда живёт рядом с nie, а форма — родительный множественного 🚫"
      },
      {
        "type": "gap",
        "q": "Mówię po polsku ___ lepiej. <i style='opacity:.6'>всё лучше</i>",
        "accept": [
          "coraz"
        ],
        "model": "coraz",
        "hint": "Одно слово, которое работает только со сравнительной степенью 📈"
      },
      {
        "type": "trRE",
        "ru": "У соседа двое детей.",
        "accept": [
          "sąsiad ma dwoje dzieci",
          "sasiad ma dwoje dzieci",
          "sąsiad ma dwoje dzieci."
        ],
        "model": "Sąsiad ma dwoje dzieci.",
        "hint": "Со словом dzieci только собирательное числительное, а после него — родительный 👨‍👩‍👧"
      },
      {
        "type": "trRE",
        "ru": "Чем больше, тем лучше.",
        "accept": [
          "im więcej tym lepiej",
          "im wiecej tym lepiej",
          "im więcej, tym lepiej"
        ],
        "model": "Im więcej, tym lepiej.",
        "hint": "Обе половины стоят в сравнительной степени 📊"
      },
      {
        "type": "trRE",
        "ru": "Дом, в котором мы живём, старый.",
        "accept": [
          "dom w którym mieszkamy jest stary",
          "dom w ktorym mieszkamy jest stary",
          "dom, w którym mieszkamy, jest stary"
        ],
        "model": "Dom, w którym mieszkamy, jest stary.",
        "hint": "Предлог идёт вместе с «который», и не забудь про jest 🏚️"
      },
      {
        "type": "trER",
        "en": "Mam taką samą lampę jak ty.",
        "accept": [
          "у меня такая же лампа как у тебя",
          "у меня такая же лампа, как у тебя",
          "у меня такая же лампа как и у тебя",
          "у меня такая же лампа как ты"
        ],
        "model": "У меня такая же лампа, как у тебя.",
        "hint": "Taki sam — «такой же», другой предмет, просто одинаковый 💡"
      },
      {
        "type": "trER",
        "en": "Brakuje mi krzeseł.",
        "accept": [
          "мне не хватает стульев",
          "мне не хватает стульев.",
          "у меня не хватает стульев",
          "мне недостаёт стульев"
        ],
        "model": "Мне не хватает стульев.",
        "hint": "Кому — дательный, чего — родительный: рамка совпадает с русской 🪑"
      },
      {
        "type": "order",
        "answer": "Przyjaciele z którymi byliśmy we Włoszech przyjdą jutro",
        "accept": [
          "Przyjaciele z którymi byliśmy we Włoszech przyjdą jutro"
        ],
        "hintRu": "Собери: «Друзья, с которыми мы были в Италии, придут завтра.»",
        "hint": "Предлог z встаёт перед «который», а страна берёт форму на -ech ✈️"
      },
      {
        "type": "order",
        "answer": "Przyszło troje gości",
        "accept": [
          "Przyszło troje gości",
          "Troje gości przyszło"
        ],
        "hintRu": "Собери: «Пришло трое гостей.»",
        "hint": "При собирательном числительном глагол в прошедшем берёт средний род 🎈"
      },
      {
        "type": "match",
        "q": "Соедини форму множественного числа с переводом.",
        "pairs": [
          [
            "z dziećmi",
            "с детьми"
          ],
          [
            "z ludźmi",
            "с людьми"
          ],
          [
            "gościom",
            "гостям"
          ],
          [
            "o sąsiadach",
            "о соседях"
          ],
          [
            "z przyjaciółmi",
            "с друзьями"
          ]
        ],
        "hint": "Три окончания подряд: -om кому, -ami (или -mi) с кем, -ach о ком 🔤"
      },
      {
        "type": "describe",
        "prompt": "Напиши 3–4 предложения по-польски о своих соседях или друзьях: сколько у них детей, с кем ты общаешься и о чём вы разговариваете. Используй dwoje / troje, падежи множественного числа и хотя бы одно «который».",
        "keywords": [
          "dwoje",
          "troje",
          "dzieci",
          "z dziećmi",
          "sąsiad",
          "sąsiedzi",
          "z sąsiadami",
          "o sąsiadach",
          "który",
          "która",
          "którzy",
          "z przyjaciółmi",
          "rodzeństwo"
        ],
        "minWords": 10,
        "model": "Pod nami mieszkają sąsiedzi, którzy mają dwoje dzieci. Często rozmawiam z ich dziećmi na podwórku. W sobotę byliśmy u nich z przyjaciółmi i mówiliśmy o wakacjach.",
        "hint": "Каркас: To są sąsiedzi, którzy… Mają dwoje dzieci. Rozmawiam z nimi o… 💛"
      }
    ]
  },
  "3": {
    "week": 3,
    "title": "Экзамен · Неделя 3",
    "intro": "Третья неделя — сердце уровня: «чтобы», «если бы», чужие слова и безличность. 25 заданий: żeby с л-формой, gdyby против jeśli, косвенная речь, można / trzeba / nie wolno, формы на -no/-to и страдательный залог. Наберёшь 80% — открою Неделю 4. 💛",
    "review": [
      "Союз спрягается: <b>żebym · żebyś · żeby · żebyśmy · żebyście</b>, а после него — <b>л-форма</b>: Chcę, żebyś <b>przyszedł</b> (никогда «przyjdziesz»)",
      "Один и тот же субъект — инфинитив: Uczę się, <b>żeby zdać</b> · а после chcieć о себе союз вообще не нужен: <b>Chcę odpocząć</b>",
      "Мечта: <b>Gdybym miał</b> czas, pojechał<b>bym</b> · реальность: <b>Jeśli będę mieć</b> czas, <b>pojadę</b> · миры не смешиваются",
      "Готовые обороты: <b>Gdyby nie ty…</b> · <b>Na twoim miejscu…</b> — оба с формой на by",
      "Три двери пересказа: <b>że</b> — информация (Powiedział, że przyjdzie) · <b>czy</b> = «ли» (Spytał, <b>czy</b> mam czas) · <b>żeby</b> — воля (Poprosił, żebym przyszedł) · распоряжение: kazał mi <b>zostać</b>",
      "Подарок недели: времена в пересказе <b>не сдвигаются</b> — меняются только лицо и притяжательные",
      "Безлично: <b>można · trzeba · warto · wolno</b> + инфинитив · <b>nie wolno</b> = запрет, <b>nie trzeba</b> = не обязательно · время: trzeba <b>było</b> · trzeba <b>będzie</b>",
      "Ловушка: <b>wolno</b> — ещё и «медленно» (Mów <b>wolniej</b>) · второй этаж безличности: <b>mówi się, że…</b>, jak to się pisze?",
      "-no / -to: <b>zbudowano · otwarto · zamknięto · znaleziono · założono</b> — неизменяемо, без «było», только прошедшее; при отрицании родительный: nie zbudowano <b>mostu</b>",
      "Залог: <b>jest zamknięty</b> (состояние) ≠ <b>został otwarty</b> (событие) · исполнитель — <b>przez</b> + винительный: napisany <b>przez Annę</b>"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Chcę, żebyś ___ o piątej. <i style='opacity:.6'>хочу, чтобы ты пришёл — к мужчине</i>",
        "opts": [
          "przyszedł",
          "przyjdziesz",
          "przyjść",
          "przyjdzie"
        ],
        "answer": "przyszedł",
        "why": "После żeby глагол стоит в прошедшей л-форме — как в русском «чтобы ты пришёЛ». Будущего времени после этого союза не бывает никогда.",
        "hint": "Личное окончание сидит на союзе, а глагол остаётся голой л-формой 🔑"
      },
      {
        "type": "choice",
        "q": "Uczę się, żeby ___ egzamin. <i style='opacity:.6'>учусь, чтобы сдать экзамен</i>",
        "opts": [
          "zdać",
          "zdał",
          "zdam",
          "zdałbym"
        ],
        "answer": "zdać",
        "why": "Оба действия делает один и тот же человек — значит цель делается коротко: żeby плюс инфинитив. Русский поступает точно так же.",
        "hint": "Спроси себя, кто делает второе действие: тот же человек — инфинитив 📚"
      },
      {
        "type": "choice",
        "q": "___ miał czas, pojechałbym nad morze. <i style='opacity:.6'>если бы у меня было время, я бы поехал на море</i>",
        "opts": [
          "Gdybym",
          "Gdyby",
          "Jeśli",
          "Jeślibym"
        ],
        "answer": "Gdybym",
        "why": "Личное окончание сидит на союзе: «я» — gdybym. Gdyby значило бы «если бы он», а jeśli вводит реальное условие и с формой на by не сочетается.",
        "hint": "Обе половины про меня — значит и союз должен сказать «я» 🌊"
      },
      {
        "type": "choice",
        "q": "«Если будет время, поеду на море» —",
        "opts": [
          "Jeśli będę mieć czas, pojadę nad morze",
          "Gdybym miał czas, pojadę nad morze",
          "Jeśli bym miał czas, pojadę nad morze",
          "Gdybym będę mieć czas, pojechałbym nad morze"
        ],
        "answer": "Jeśli będę mieć czas, pojadę nad morze",
        "why": "Условие реальное — значит jeśli и обычное будущее в обеих частях, ровно как в русском. Смешивать jeśli с by и gdyby с будущим нельзя.",
        "hint": "Тут нет никакого «бы» — ни в русской фразе, ни в польской ⛱️"
      },
      {
        "type": "choice",
        "q": "Spytał, ___ mam czas. <i style='opacity:.6'>спросил, есть ли у меня время</i>",
        "opts": [
          "czy",
          "jeśli",
          "że",
          "żeby"
        ],
        "answer": "czy",
        "why": "Русское «ли» — это czy. Jeśli значит «если» и вводит условие, а не вопрос; że передаёт информацию, żeby — волю.",
        "hint": "В вопросе без вопросительного слова работает только одна дверь ❓"
      },
      {
        "type": "choice",
        "q": "Marek powiedział, że ___ o piątej. <i style='opacity:.6'>сказал, что придёт в пять</i>",
        "opts": [
          "przyjdzie",
          "przyszedł",
          "przyjdę",
          "przychodził"
        ],
        "answer": "przyjdzie",
        "why": "Времена в пересказе не сдвигаются: его «przyjdę» осталось будущим, изменилось только лицо — przyjdzie.",
        "hint": "Как в русском «сказал, что придёт» — время трогать не надо ⏰"
      },
      {
        "type": "choice",
        "q": "Poprosiła, żebym ___ wcześniej. <i style='opacity:.6'>попросила, чтобы я пришёл раньше — говорит мужчина</i>",
        "opts": [
          "przyszedł",
          "przyjdę",
          "przyjść",
          "przyszedłem"
        ],
        "answer": "przyszedł",
        "why": "Волю передаёт żeby, и после него — голая л-форма. Окончание «я» уже сидит на союзе (żebym), поэтому на глаголе его быть не должно.",
        "hint": "Двух окончаний в одной части не бывает: żebym + przyszedł ✉️"
      },
      {
        "type": "choice",
        "q": "Tu ___ palić — na drzwiach wisi zakaz. <i style='opacity:.6'>здесь запрещено курить</i>",
        "opts": [
          "nie wolno",
          "nie trzeba",
          "nie warto",
          "wolno"
        ],
        "answer": "nie wolno",
        "why": "Запрет — это nie wolno. Nie trzeba значит «не обязательно», nie warto — «не стоит», а wolno без отрицания разрешало бы курить.",
        "hint": "Самое строгое слово недели стоит рядом с табличкой zakaz palenia 🚭"
      },
      {
        "type": "choice",
        "q": "«Надо будет заплатить» —",
        "opts": [
          "Trzeba będzie zapłacić",
          "Trzeba będę zapłacić",
          "Będę trzeba zapłacić",
          "Trzeba było zapłacić"
        ],
        "answer": "Trzeba będzie zapłacić",
        "why": "Безличные слова не спрягаются: будущее им даёт одно слово będzie, прошедшее — było. Trzeba było значило бы «надо было».",
        "hint": "Средний род тут навсегда — согласовывать не с чем 💳"
      },
      {
        "type": "choice",
        "q": "«Музей построили в 1900 году» — безличной формой:",
        "opts": [
          "Muzeum zbudowano w 1900 roku",
          "Muzeum było zbudowano w 1900 roku",
          "Muzeum zbudowany w 1900 roku",
          "Muzeum zbudowana w 1900 roku"
        ],
        "answer": "Muzeum zbudowano w 1900 roku",
        "why": "Форма на -no неизменяема и уже сама по себе прошедшее время: никакого было рядом не ставят и по родам её не меняют.",
        "hint": "У этой формы нет ни рода, ни числа, ни подлежащего 🏛️"
      },
      {
        "type": "choice",
        "q": "Sklep ___ w maju. <i style='opacity:.6'>магазин открыли в мае — это событие</i>",
        "opts": [
          "został otwarty",
          "jest otwarty",
          "był otwarty",
          "zostaje otwarty"
        ],
        "answer": "został otwarty",
        "why": "Событие в определённый момент передаёт zostać плюс причастие. Jest otwarty и był otwarty описывают состояние: «открыт», а не «открыли».",
        "hint": "Русское «закрыт» — это być, а «закрыли» — это zostać 🔓"
      },
      {
        "type": "gap",
        "q": "Radzę ci, żebyś ___. <i style='opacity:.6'>советую тебе отдохнуть — к мужчине, глагол odpocząć</i>",
        "accept": [
          "odpoczął",
          "odpoczal"
        ],
        "model": "odpoczął",
        "hint": "Русский совет идёт инфинитивом, а польский разворачивает его в л-форму 😴"
      },
      {
        "type": "gap",
        "q": "___ nie ty, nie zdałabym tego egzaminu. <i style='opacity:.6'>если бы не ты…</i>",
        "accept": [
          "gdyby"
        ],
        "model": "Gdyby",
        "hint": "После этого оборота глагола нет — сразу местоимение 💛"
      },
      {
        "type": "gap",
        "q": "Szef ___ mi zostać dłużej. <i style='opacity:.6'>шеф велел мне остаться</i>",
        "accept": [
          "kazał",
          "kazal"
        ],
        "model": "kazał",
        "hint": "Этот глагол распоряжения берёт дательный и инфинитив — придаточное ему не нужно 🧑‍💼"
      },
      {
        "type": "gap",
        "q": "___ się, że latem będzie remont. <i style='opacity:.6'>говорят, что летом будет ремонт</i>",
        "accept": [
          "mówi",
          "mowi"
        ],
        "model": "Mówi",
        "hint": "Второй этаж безличности: третье лицо единственного числа плюс się 🗣️"
      },
      {
        "type": "gap",
        "q": "Uniwersytet ___ w 1364 roku. <i style='opacity:.6'>университет основали — безличной формой от założyć</i>",
        "accept": [
          "założono",
          "zalozono"
        ],
        "model": "założono",
        "hint": "У глаголов с причастием на -ny безличная форма кончается на -no 🎓"
      },
      {
        "type": "trRE",
        "ru": "Он спросил, есть ли у меня время.",
        "accept": [
          "spytał czy mam czas",
          "spytal czy mam czas",
          "zapytał czy mam czas",
          "zapytal czy mam czas",
          "spytał, czy mam czas"
        ],
        "model": "Spytał, czy mam czas.",
        "hint": "«Ли» переводится одним коротким словом, и оно стоит в начале придаточного ❓"
      },
      {
        "type": "trRE",
        "ru": "Здесь нельзя курить.",
        "accept": [
          "nie wolno tu palić",
          "nie wolno tu palic",
          "tu nie wolno palić",
          "tu nie wolno palic",
          "nie wolno tutaj palić"
        ],
        "model": "Nie wolno tu palić.",
        "hint": "Запрет — это не «не нужно», а самое строгое слово недели 🚭"
      },
      {
        "type": "trRE",
        "ru": "Если бы у меня было время, я бы поехал на море.",
        "accept": [
          "gdybym miał czas pojechałbym nad morze",
          "gdybym mial czas pojechalbym nad morze",
          "gdybym miał czas, pojechałbym nad morze",
          "pojechałbym nad morze gdybym miał czas"
        ],
        "model": "Gdybym miał czas, pojechałbym nad morze.",
        "hint": "Окончание «я» — на союзе, а во второй половине «бы» прирастает к глаголу 🌊"
      },
      {
        "type": "trER",
        "en": "Trzeba było powiedzieć wcześniej.",
        "accept": [
          "надо было сказать раньше",
          "нужно было сказать раньше",
          "надо было сказать раньше.",
          "надо было сказать пораньше"
        ],
        "model": "Надо было сказать раньше.",
        "hint": "Прошедшее у безличных слов делается одним словом было ⏳"
      },
      {
        "type": "trER",
        "en": "Mów wolniej, proszę.",
        "accept": [
          "говори помедленнее пожалуйста",
          "говори помедленнее, пожалуйста",
          "говори медленнее пожалуйста",
          "говори медленнее, пожалуйста",
          "говорите помедленнее пожалуйста"
        ],
        "model": "Говори помедленнее, пожалуйста.",
        "hint": "Тут это слово не про разрешение, а про скорость 🐢"
      },
      {
        "type": "order",
        "answer": "Poprosił żebym przyszedł wcześniej",
        "accept": [
          "Poprosił żebym przyszedł wcześniej"
        ],
        "hintRu": "Собери: «Он попросил, чтобы я пришёл раньше.»",
        "hint": "Окончание «я» сидит на союзе, глагол остаётся л-формой ✉️"
      },
      {
        "type": "order",
        "answer": "List został napisany przez Annę",
        "accept": [
          "List został napisany przez Annę"
        ],
        "hintRu": "Собери: «Письмо было написано Анной.»",
        "hint": "Событие — это zostać плюс причастие, а исполнитель идёт с przez и винительным ✍️"
      },
      {
        "type": "match",
        "q": "Соедини безличную форму на -no/-to с переводом.",
        "pairs": [
          [
            "zbudowano",
            "построили"
          ],
          [
            "otwarto",
            "открыли"
          ],
          [
            "zamknięto",
            "закрыли"
          ],
          [
            "znaleziono",
            "нашли"
          ],
          [
            "założono",
            "основали"
          ]
        ],
        "hint": "Все пятеро — прошедшее без подлежащего, и ни одна форма не меняется 🏛️"
      },
      {
        "type": "describe",
        "prompt": "Напиши 3–4 предложения по-польски: чего ты хочешь от близкого человека (chcę, żebyś…), что было бы, если бы у тебя было больше времени (gdybym…), и одно правило твоего дома (można / trzeba / nie wolno).",
        "keywords": [
          "żebyś",
          "żebym",
          "żeby",
          "gdybym",
          "gdyby",
          "można",
          "trzeba",
          "nie wolno",
          "warto",
          "chcę",
          "proszę"
        ],
        "minWords": 12,
        "model": "Chcę, żebyś częściej do mnie pisał. Gdybym miała więcej czasu, uczyłabym się codziennie. U nas w domu nie wolno hałasować po dwudziestej drugiej, ale zawsze można zostać na kolację.",
        "hint": "Каркас: Chcę, żebyś… Gdybym miał(a)… U nas trzeba / nie wolno… 💛"
      }
    ]
  },
  "4": {
    "week": 4,
    "final": true,
    "title": "Финальный экзамен B1",
    "intro": "Это финал! 33 задания по всему уровню B1: приставки и пары движения, фазовые глаголы, множественное число во всех падежах, dwoje и troje, «который» и swój, żeby и gdyby, косвенная речь, można / trzeba / nie wolno, -no/-to и страдательный залог — и вся Неделя 4: причастия и деепричастия, уменьшительные, падежи чувств, учреждение, праздники, мнение и большой рассказ. Соберись — и вперёд к грамоте B1! 🏆",
    "review": [
      "Приставки: przyjść · wyjść · wejść · dojść · odejść · przyjechać · dojechać · <b>przyszedłem / weszłam / odszedł</b> · przyjazd · odjazd · <b>dojazd</b>",
      "Пары движения и фазовые: biegnę / biegam · niosę / noszę · <b>niósł · wiózł</b> · zacząć · skończyć · przestać + <b>несовершенный инфинитив</b>",
      "Множественное: pięć <b>krzeseł</b> · dużo <b>ludzi</b> · nie mam <b>pieniędzy</b> · dzieci<b>om</b> · z <b>dziećmi</b> · o sąsiad<b>ach</b> · we <b>Włoszech</b> · <b>dwoje dzieci</b> · oboje",
      "Который и свой: ludzie, <b>którzy</b>… · kobieta, <b>której</b> pomagam · dom, <b>w którym</b> mieszkam · <b>swoją</b> pracę ≠ <b>jego</b> pracę · <b>Im</b> więcej, <b>tym</b> lepiej",
      "Чтобы и если бы: Chcę, żebyś <b>przyszedł</b> · Uczę się, <b>żeby zdać</b> · <b>Gdybym miał</b>, pojechał<b>bym</b> · Jeśli <b>będę mieć</b>, pojadę",
      "Пересказ и безличность: Powiedział, <b>że</b> przyjdzie · Spytał, <b>czy</b>… · Poprosił, <b>żebym</b>… · <b>nie wolno</b> ≠ <b>nie trzeba</b> · <b>zbudowano</b> (без «было») · <b>jest zamknięty</b> ≠ <b>został otwarty</b> · przez + вин.",
      "Причастия и деепричастия: oni czytają → <b>czytający</b> (только несов. вид!) · osoba mówi<b>ąca</b> po angielsku · <b>czytając</b> — одно подлежащее: <b>Wracając do domu, spotkałem Marka</b> · mówiąc szczerze · biorąc pod uwagę · podsumowując",
      "Уменьшительные: dom → <b>domek</b> → w <b>domku</b> · kawka · okienko · chwileczka · <b>Anusiu! Mamusiu!</b> — но не в официальном письме",
      "Чувства: cieszyć się <b>z</b> + род. / <b>na</b> + вин. · bać się + род. (<b>boję się egzaminu</b>) · martwić się <b>o</b> + вин. · zakochać się <b>w</b> + предл. · tęsknić <b>za</b> + твор. · <b>szczery</b> = искренний, <b>hojny</b> = щедрый",
      "Учреждение и праздники: złożyć wniosek · <b>należy</b> wypełnić · wniosek <b>został przyjęty</b> · Szanowni Państwo → <b>z poważaniem</b> · <b>uprzejmie proszę o</b> + вин. · <b>Wigilia</b> = сочельник · dzielić się <b>opłatkiem</b> · <b>Wesołych Świąt! Szczęśliwego Nowego Roku!</b>",
      "Мнение и рассказ: po pierwsze · z jednej strony / z drugiej strony · <b>mimo to</b> ≠ <b>mimo że</b> · w przeciwieństwie do + род. · najpierw · nagle · <b>okazało się, że</b> · w końcu · zdążyć / spóźnić się"
    ],
    "q": [
      {
        "type": "choice",
        "q": "Marek ___ z pracy w maju. <i style='opacity:.6'>ушёл с работы, уволился</i>",
        "opts": [
          "odszedł",
          "wyszedł",
          "przyszedł",
          "doszedł"
        ],
        "answer": "odszedł",
        "why": "Odejść — уйти насовсем: odszedł z pracy = «уволился». Wyszedł значило бы «вышел ненадолго».",
        "hint": "Приставка od- — это русское «ото-, от-»: отошёл, ушёл прочь 🚪"
      },
      {
        "type": "choice",
        "q": "Przestała ___ dwa lata temu. <i style='opacity:.6'>она бросила курить</i>",
        "opts": [
          "palić",
          "zapalić",
          "paliła",
          "palenie"
        ],
        "answer": "palić",
        "why": "После фазового глагола идёт только несовершенный инфинитив — как в русском «перестала курить».",
        "hint": "Проверь по-русски: «перестала закурить» язык не выговаривает 🚭"
      },
      {
        "type": "choice",
        "q": "Sąsiad przyszedł ___. <i style='opacity:.6'>сосед пришёл с детьми</i>",
        "opts": [
          "z dziećmi",
          "z dzieciami",
          "z dziećami",
          "z dzieciach"
        ],
        "answer": "z dziećmi",
        "why": "Это слово из короткого списка на -mi: dziećmi, ludźmi, przyjaciółmi, gośćmi.",
        "hint": "Обычное -ami тут не работает — форма укороченная 🧒"
      },
      {
        "type": "choice",
        "q": "To kobieta, ___ Anna pomagała w kuchni. <i style='opacity:.6'>женщина, которой Анна помогала</i>",
        "opts": [
          "której",
          "którą",
          "która",
          "którym"
        ],
        "answer": "której",
        "why": "Pomagać требует дательного, а у женского рода дательный — której. Падеж «который» получает от своего глагола, а не от слова слева.",
        "hint": "Скажи по-русски «которой помогала» — падеж совпадёт 🍲"
      },
      {
        "type": "choice",
        "q": "Anna, chcę, żebyś ___ jutro. <i style='opacity:.6'>чтобы ты пришла</i>",
        "opts": [
          "przyszła",
          "przyjdziesz",
          "przyjdzie",
          "przyjść"
        ],
        "answer": "przyszła",
        "why": "После żeby — л-форма, и она согласуется с тем, к кому обращаются: к Анне — przyszła. Будущее после этого союза невозможно.",
        "hint": "Русское «чтобы ты пришлА» подсказывает и форму, и род 🌸"
      },
      {
        "type": "choice",
        "q": "___ kupować biletu, już mam. <i style='opacity:.6'>покупать билет не обязательно</i>",
        "opts": [
          "Nie trzeba",
          "Nie wolno",
          "Nie wolno było",
          "Nie warto"
        ],
        "answer": "Nie trzeba",
        "why": "Nie trzeba — «не нужно, не обязательно». Nie wolno значило бы запрет, а nie warto — «не стоит».",
        "hint": "Тут нет запрета — просто в этом нет необходимости 🎫"
      },
      {
        "type": "choice",
        "q": "Sklep ___ zamknięty od dwóch tygodni. <i style='opacity:.6'>магазин закрыт уже две недели — это состояние</i>",
        "opts": [
          "jest",
          "został",
          "zostaje",
          "zostanie"
        ],
        "answer": "jest",
        "why": "Состояние передаёт być: sklep jest zamknięty. Został zamknięty значило бы «его закрыли» в конкретный момент, а с «уже две недели» это не сочетается.",
        "hint": "Русское «закрыт» — состояние, «закрыли» — событие 🔒"
      },
      {
        "type": "choice",
        "q": "Szukam osoby ___ po angielsku. <i style='opacity:.6'>ищу человека, говорящего по-английски</i>",
        "opts": [
          "mówiącej",
          "mówiąca",
          "mówiącą",
          "mówiąc"
        ],
        "answer": "mówiącej",
        "why": "Причастие склоняется как прилагательное, а szukać требует родительного: osoby mówiącej. Mówiąc — это уже деепричастие.",
        "hint": "Szukam кого? — родительный, и причастие идёт следом 🔎"
      },
      {
        "type": "choice",
        "q": "Какой формы в польском НЕ существует?",
        "opts": [
          "przeczytający",
          "czytający",
          "piszący",
          "śpiący"
        ],
        "answer": "przeczytający",
        "why": "Причастие на -ący делается только от несовершенного вида. Русское «прочитавший» передают придаточным: ten, który przeczytał.",
        "hint": "Приставка сделала глагол совершенным — а такому причастие на -ący не полагается 📕"
      },
      {
        "type": "choice",
        "q": "Какая фраза правильная?",
        "opts": [
          "Wracając do domu, spotkałem Marka.",
          "Wracając do domu, zaczęło padać.",
          "Wracając do domu, deszcz był coraz mocniejszy.",
          "Przeczytając gazetę, piłem kawę."
        ],
        "answer": "Wracając do domu, spotkałem Marka.",
        "why": "У деепричастия и главного глагола должно быть одно подлежащее: возвращался я и встретил я. «Возвращаясь домой, начался дождь» звучит криво и по-русски. А от совершенного przeczytać формы на -ąc вообще нет.",
        "hint": "Спроси: кто возвращался и кто сделал второе действие? 🌧️"
      },
      {
        "type": "choice",
        "q": "Martwię się ___. <i style='opacity:.6'>я волнуюсь за тебя</i>",
        "opts": [
          "o ciebie",
          "o tobie",
          "za ciebie",
          "tobą"
        ],
        "answer": "o ciebie",
        "why": "Martwić się требует o плюс винительный. Русское «беспокоюсь о тебе» идёт с предложным — вот и всё расхождение.",
        "hint": "Предлог тот же, что в русском, а падеж — другой 💛"
      },
      {
        "type": "choice",
        "q": "Zakochała się ___. <i style='opacity:.6'>она влюбилась в него</i>",
        "opts": [
          "w nim",
          "w niego",
          "na nim",
          "do niego"
        ],
        "answer": "w nim",
        "why": "Zakochać się w kimś — предлог w с предложным падежом. Русское «влюбиться в кого» ставит винительный, и это главное расхождение темы.",
        "hint": "Влюбляются по-польски «в ком», а не «в кого» 💘"
      },
      {
        "type": "choice",
        "q": "«Весёлого Рождества!» —",
        "opts": [
          "Wesołych Świąt!",
          "Wesołe Święta!",
          "Wesoły Świąt!",
          "Wesołym Świętom!"
        ],
        "answer": "Wesołych Świąt!",
        "why": "Перед пожеланием подразумевается życzę, а этот глагол требует родительного. Как в русском «Счастливого Нового года!».",
        "hint": "Все польские пожелания стоят в родительном падеже 🎄"
      },
      {
        "type": "choice",
        "q": "Marek mówi: «Powiem ci szczerze…». Что значит szczery?",
        "opts": [
          "искренний",
          "щедрый",
          "строгий",
          "упрямый"
        ],
        "answer": "искренний",
        "why": "Szczery — «искренний». Щедрый по-польски hojny, упрямый — uparty. Слова похожи на слух, а смысл разный.",
        "hint": "Ложный друг дня: похоже на русское «щедрый», а значит другое 🫱"
      },
      {
        "type": "gap",
        "q": "Marek i Anna o sobie: ___ z Włoch w poniedziałek. <i style='opacity:.6'>мы приехали</i>",
        "accept": [
          "przyjechaliśmy",
          "przyjechalismy"
        ],
        "model": "Przyjechaliśmy",
        "hint": "Прошедшее у jechać абсолютно правильное, а в компании есть мужчина 🚆"
      },
      {
        "type": "gap",
        "q": "Nie mam ___. <i style='opacity:.6'>денег</i>",
        "accept": [
          "pieniędzy",
          "pieniedzy"
        ],
        "model": "pieniędzy",
        "hint": "Особая форма родительного множественного, ударение [пе-нень-дзы] 💸"
      },
      {
        "type": "gap",
        "q": "Muzeum ___ w 1900 roku. <i style='opacity:.6'>музей построили — безличной формой</i>",
        "accept": [
          "zbudowano",
          "wybudowano"
        ],
        "model": "zbudowano",
        "hint": "Форма неизменяемая, и слова было рядом с ней не бывает 🏛️"
      },
      {
        "type": "gap",
        "q": "Tęsknię ___ domem. <i style='opacity:.6'>скучаю по дому — впиши предлог</i>",
        "accept": [
          "za"
        ],
        "model": "za",
        "hint": "Русское «по дому» здесь не работает: свой предлог плюс творительный 🏡"
      },
      {
        "type": "gap",
        "q": "Boję się ___. <i style='opacity:.6'>боюсь экзамена (egzamin)</i>",
        "accept": [
          "egzaminu"
        ],
        "model": "egzaminu",
        "hint": "Тут подарок: падеж совпадает с русским «бояться чего» 😰"
      },
      {
        "type": "gap",
        "q": "Mamy mały domek pod Krakowem. Latem mieszkamy w ___. <i style='opacity:.6'>летом мы живём в домике</i>",
        "accept": [
          "domku"
        ],
        "model": "domku",
        "hint": "У уменьшительных при склонении выпадает беглое e 🏠"
      },
      {
        "type": "trRE",
        "ru": "Я подала заявление в понедельник.",
        "accept": [
          "złożyłam wniosek w poniedziałek",
          "zlozylam wniosek w poniedzialek",
          "złożyłam wniosek w poniedziałek.",
          "w poniedziałek złożyłam wniosek"
        ],
        "model": "Złożyłam wniosek w poniedziałek.",
        "hint": "В учреждении заявление именно «складывают» 📄"
      },
      {
        "type": "trRE",
        "ru": "Честно говоря, я боюсь.",
        "accept": [
          "mówiąc szczerze boję się",
          "mowiac szczerze boje sie",
          "mówiąc szczerze, boję się",
          "szczerze mówiąc boję się",
          "prawdę mówiąc boję się"
        ],
        "model": "Mówiąc szczerze, boję się.",
        "hint": "Готовый вводный оборот на -ąc, русский двойник тоже деепричастие 🙂"
      },
      {
        "type": "trRE",
        "ru": "Чем дольше я тут живу, тем больше мне нравится.",
        "accept": [
          "im dłużej tu mieszkam tym bardziej mi się podoba",
          "im dluzej tu mieszkam tym bardziej mi sie podoba",
          "im dłużej tu mieszkam, tym bardziej mi się podoba"
        ],
        "model": "Im dłużej tu mieszkam, tym bardziej mi się podoba.",
        "hint": "Обе половины — в сравнительной степени 📈"
      },
      {
        "type": "trRE",
        "ru": "Мы делимся облаткой.",
        "accept": [
          "dzielimy się opłatkiem",
          "dzielimy sie oplatkiem",
          "dzielimy się opłatkiem."
        ],
        "model": "Dzielimy się opłatkiem.",
        "hint": "Главный обычай Сочельника, а падеж — творительный 🕯️"
      },
      {
        "type": "trER",
        "en": "Wracając do domu, zadzwoniłam do Marka.",
        "accept": [
          "возвращаясь домой я позвонила мареку",
          "возвращаясь домой, я позвонила мареку",
          "возвращаясь домой позвонила мареку",
          "по дороге домой я позвонила мареку"
        ],
        "model": "Возвращаясь домой, я позвонила Мареку.",
        "hint": "Деепричастие на -ąc = русское «-я»: читая, возвращаясь 📞"
      },
      {
        "type": "trER",
        "en": "Wniosek został przyjęty.",
        "accept": [
          "заявление было принято",
          "заявление приняли",
          "заявление было принято.",
          "заявление принято"
        ],
        "model": "Заявление было принято.",
        "hint": "Zostać плюс причастие — это событие, а не состояние 📑"
      },
      {
        "type": "trER",
        "en": "Z jednej strony to wygodne, z drugiej strony niebezpieczne.",
        "accept": [
          "с одной стороны это удобно с другой стороны опасно",
          "с одной стороны, это удобно, с другой стороны — опасно",
          "с одной стороны это удобно, с другой опасно",
          "с одной стороны это удобно а с другой опасно"
        ],
        "model": "С одной стороны, это удобно, с другой стороны — опасно.",
        "hint": "Весь дискурсный каркас мнения калькируется 1:1 ⚖️"
      },
      {
        "type": "order",
        "answer": "Czytając gazetę piję kawę",
        "accept": [
          "Czytając gazetę piję kawę",
          "Piję kawę czytając gazetę"
        ],
        "hintRu": "Собери: «Читая газету, я пью кофе.»",
        "hint": "Одно подлежащее на оба действия — и деепричастие на -ąc ☕"
      },
      {
        "type": "order",
        "answer": "Uprzejmie proszę o wydanie zaświadczenia",
        "accept": [
          "Uprzejmie proszę o wydanie zaświadczenia"
        ],
        "hintRu": "Собери: «Убедительно прошу выдать справку.» (формула официального письма)",
        "hint": "Формула держится на o с винительным и отглагольном существительном 🏛️"
      },
      {
        "type": "match",
        "q": "Соедини готовый оборот с переводом.",
        "pairs": [
          [
            "mówiąc szczerze",
            "честно говоря"
          ],
          [
            "biorąc pod uwagę",
            "принимая во внимание"
          ],
          [
            "podsumowując",
            "подводя итог"
          ],
          [
            "w przeciwieństwie do",
            "в отличие от"
          ],
          [
            "mimo to",
            "несмотря на это"
          ]
        ],
        "hint": "Четыре оборота на -ąc и одна связка мнения 🧩"
      },
      {
        "type": "match",
        "q": "Соедини фразу о чувствах с переводом — следи за падежом.",
        "pairs": [
          [
            "boję się egzaminu",
            "боюсь экзамена"
          ],
          [
            "martwię się o ciebie",
            "волнуюсь за тебя"
          ],
          [
            "zakochała się w nim",
            "влюбилась в него"
          ],
          [
            "tęsknię za domem",
            "скучаю по дому"
          ],
          [
            "cieszę się z prezentu",
            "радуюсь подарку"
          ]
        ],
        "hint": "Каждое чувство носит свой падеж с собой 💛"
      },
      {
        "type": "describe",
        "prompt": "Напиши короткое официальное письмо (4–5 предложений) по-польски: обратись (Szanowni Państwo), вежливо попроси о чём-то (uprzejmie proszę o…), сообщи, что заявление уже подано, и закончи формулой (z poważaniem).",
        "keywords": [
          "Szanowni Państwo",
          "Szanowna Pani",
          "uprzejmie proszę",
          "wniosek",
          "złożyłam",
          "złożyłem",
          "zaświadczenie",
          "z poważaniem",
          "w załączeniu",
          "należy"
        ],
        "minWords": 15,
        "model": "Szanowni Państwo, uprzejmie proszę o informację o terminie egzaminu. Wniosek złożyłam piętnastego lutego w okienku numer cztery. W załączeniu przesyłam potwierdzenie wpłaty. Będę wdzięczna za odpowiedź do końca miesiąca. Z poważaniem, Anna Kowalska",
        "hint": "Никаких уменьшительных и смайликов: Szanowni Państwo… uprzejmie proszę o… z poważaniem 🏛️"
      },
      {
        "type": "describe",
        "prompt": "Расскажи по-польски историю в 4–6 предложениях: как ты куда-то шёл(шла) и что пошло не так. Возьми каркас najpierw… potem… nagle… okazało się, że… w końcu, добавь zdążyć или spóźnić się и одно предложение с gdyby.",
        "keywords": [
          "najpierw",
          "potem",
          "nagle",
          "okazało się",
          "w końcu",
          "gdybym",
          "zdążyłam",
          "zdążyłem",
          "spóźniłam się",
          "spóźniłem się",
          "na szczęście",
          "niestety",
          "wróciłam",
          "wróciłem"
        ],
        "minWords": 18,
        "model": "Najpierw wyszłam z domu o ósmej, bo bałam się kolejki. Potem dojechałam na miejsce i wzięłam numerek. Nagle okazało się, że nie mam dowodu. Wróciłam po niego do domu i w końcu zdążyłam przed piątą. Gdybym sprawdziła torbę rano, nie straciłabym dwóch godzin.",
        "hint": "Каркас: Najpierw… Potem… Nagle okazało się, że… W końcu… Gdybym…, …bym 💛"
      }
    ]
  }
};
