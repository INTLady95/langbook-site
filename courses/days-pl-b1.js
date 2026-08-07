/* Polish B1 — 30 days of content. Data only: the shared renderer lives in engine.js.
   en/themeEn/say = POLISH (target language), ru = Russian explanations.
   Курс для всех, кто читает по-русски. */
const DAYS = {
"1": {
 "day":1,"week":"01",
 "themeRu":"Снова в путь",
 "themeEn":"Znowu w drogę",
 "intro":"Поезд из Италии пришёл в Краков в семь утра — Анна и Марек вышли на перрон с двумя чемоданами и загаром. Уровень B1 начинается с подарка, и я скажу о нём сразу: польские приставки — это почти целиком русские приставки. <b>przy-</b> = при-, <b>wy-</b> = вы-, <b>do-</b> = до-, <b>prze-</b> = пере-. Сегодня надеваем их на глагол <b>iść</b> и получаем из одного глагола семь.",
 "introAudio":"Поезд из Италии пришёл в Краков в семь утра — Анна и Марек вышли на перрон с двумя чемоданами и загаром. Уровень B1 начинается с подарка, и я скажу о нём сразу: польские приставки это почти целиком русские приставки. Przy- это при-, wy- это вы-, do- это до-, prze- это пере-. Сегодня надеваем их на глагол iść и получаем из одного глагола семь.",
 "goals":[
   "Собрать семью глаголов от <b>iść</b>: przyjść, wyjść, wejść, dojść, przejść, odejść",
   "Слышать в польской приставке русскую: <b>przy- = при-</b>, <b>wy- = вы-</b>, <b>do- = до-</b>",
   "Поставить их в прошедшее: <b>przyszedłem / przyszłam</b>, <b>wszedłem / weszłam</b>",
   "Различать <b>poszedł</b> («пошёл») и <b>przyszedł</b> («пришёл»)"
 ],
 "learned":[
   "Собрал(а) семью глаголов от iść: przyjść, wyjść, wejść, dojść, przejść, odejść",
   "Услышал(а) в польской приставке русскую: przy- = при-, wy- = вы-, do- = до-",
   "Поставил(а) их в прошедшее: przyszedłem / przyszłam, wszedłem / weszłam",
   "Различил(а) poszedł («пошёл») и przyszedł («пришёл»)"
 ],
 "review":{
   "intro":"Начнём с того, чем закончился A2: вид глагола, оба будущих и связный рассказ. Всё это остаётся с тобой на весь B1 — проверим, что оно на месте.",
   "introAudio":"Начнём с того, чем закончился уровень A2: вид глагола, оба будущих и связный рассказ. Всё это остаётся с тобой на весь B1 — проверим, что оно на месте.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> найди слово-маркер, оно решает вид.",
      "q":"«Весь вечер я собирала чемодан» —","opts":["Cały wieczór spakowałam walizkę","Cały wieczór pakowałam walizkę","Cały wieczór pakuję walizkę"],"answer":1,
      "explain":"<b>Cały wieczór</b> — длительность, значит несовершенный вид: pakowałam. Spakowałam значило бы «собрала, готово»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, какой вид дружит с będę.",
      "q":"«Завтра я целый день буду читать» —","opts":["Jutro będę czytać cały dzień","Jutro przeczytam cały dzień","Jutro będę przeczytać cały dzień"],"answer":0,
      "explain":"Процесс без границы — <b>będę czytać</b>. С будущим będę совершенный вид не сочетается, как и русское «буду прочитать»."},
     {"type":"choice","howto":"<b>Что делать:</b> одно действие с результатом — какой вид?",
      "q":"«Вечером я тебе позвоню» —","opts":["Wieczorem dzwonię do ciebie","Wieczorem zadzwonię do ciebie","Wieczorem będę dzwonić do ciebie"],"answer":1,
      "explain":"Один звонок и результат — <b>zadzwonię</b>. Będę dzwonić значит «буду звонить», это про процесс."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Вчера мы вернулись из Италии»</b>","answer":"Wczoraj wróciliśmy z Włoch"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · Подарок недели",
   "title":"Приставка — завод смыслов",
   "paras":[
     "Возьми русское «идти» и приставки: при-шёл, вы-шел, во-шёл, до-шёл, пере-шёл, ото-шёл, по-шёл. Один корень — семь разных действий, и ты никогда их не учил(а) списком: они собираются сами.",
     "Польский собирает точно так же и почти теми же кирпичами. <b>przyjść</b> — прийти, <b>wyjść</b> — выйти, <b>wejść</b> — войти, <b>dojść</b> — дойти, <b>przejść</b> — перейти, <b>odejść</b> — отойти, <b>pójść</b> — пойти. Приставки не «похожи» — это исторически те же самые приставки.",
     "Отсюда правило работы со словарём на весь уровень: увидев незнакомый польский глагол, отдели приставку и посмотри на корень. <b>do-</b> плюс корень почти всегда даст «до конца, до предела», <b>wy-</b> — «наружу», <b>prze-</b> — «через, насквозь, заново».",
     "И важное следствие, знакомое с A2: приставка делает глагол совершенным. Значит форма настоящего времени у него означает будущее — <b>przyjdę</b> это «приду», а не «прихожу». Ровно как в русском."
   ],
   "audio":"Возьми русское «идти» и приставки: пришёл, вышел, вошёл, дошёл, перешёл, отошёл, пошёл. Один корень — семь разных действий, и учить их списком никогда не приходилось: они собираются сами. Польский собирает точно так же и почти теми же кирпичами. Przyjść — прийти, wyjść — выйти, wejść — войти, dojść — дойти, przejść — перейти, odejść — отойти, pójść — пойти. Приставки не похожи — это исторически те же самые приставки. Отсюда правило работы со словарём на весь уровень: увидев незнакомый польский глагол, отдели приставку и посмотри на корень. Do- плюс корень почти всегда даст «до конца, до предела», wy- — наружу, prze- — через, насквозь, заново. И важное следствие, знакомое с уровня A2: приставка делает глагол совершенным. Значит форма настоящего времени у него означает будущее: przyjdę это «приду», а не «прихожу». Ровно как в русском.",
   "table":{"rows":[
     ["<b>przy-</b> = при- · przyjść <button class=\"play\" data-say=\"przyjść\">🔊</button>","прийти"],
     ["<b>wy-</b> = вы- · wyjść <button class=\"play\" data-say=\"wyjść\">🔊</button>","выйти"],
     ["<b>w(e)-</b> = в-, во- · wejść <button class=\"play\" data-say=\"wejść\">🔊</button>","войти"],
     ["<b>do-</b> = до- · dojść <button class=\"play\" data-say=\"dojść\">🔊</button>","дойти"],
     ["<b>prze-</b> = пере- · przejść <button class=\"play\" data-say=\"przejść\">🔊</button>","перейти"],
     ["<b>od-</b> = от-, ото- · odejść <button class=\"play\" data-say=\"odejść\">🔊</button>","отойти, уйти"],
     ["<b>po-</b> = по- · pójść <button class=\"play\" data-say=\"pójść\">🔊</button>","пойти"]
   ],"star":0},
   "examples":[
     {"ru":"Приди в семь.","en":"<b>Przyjdź</b> o siódmej.","gloss":"przyjdź — приди","say":"Przyjdź o siódmej."},
     {"ru":"Он вышел на минуту.","en":"<b>Wyszedł</b> na chwilę.","say":"Wyszedł na chwilę."},
     {"ru":"Войди, пожалуйста.","en":"<b>Wejdź</b>, proszę.","say":"Wejdź, proszę."},
     {"ru":"Перейди улицу здесь.","en":"<b>Przejdź</b> przez ulicę tutaj.","gloss":"przez ulicę — через улицу","say":"Przejdź przez ulicę tutaj."}
   ],
   "mistakes":[
     {"wrong":"Jutro będę przyjść.","right":"Jutro <b>przyjdę</b>.","why":"с приставкой глагол совершенный, а он сам по себе означает будущее — как русское «приду». «Буду прийти» невозможно и по-русски."}
   ],
   "mnemonic":"🧱 Один корень, семь приставок: przy- при- · wy- вы- · w- во- · do- до- · prze- пере- · od- ото- · po- по-.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> переведи приставку буквально.",
      "q":"«Войти» по-польски —","opts":["wyjść","wejść","dojść"],"answer":1,
      "explain":"<b>wejść</b> — приставка w(e)- это русское во-. Wyjść значит «выйти»."},
     {"type":"choice","howto":"<b>Что делать:</b> смотри на приставку do-.",
      "q":"«Мы дошли до вокзала» — глагол здесь —","opts":["przejść","dojść","odejść"],"answer":1,
      "explain":"До предела, до точки — <b>dojść</b>: Doszliśmy do dworca."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, какой вид даёт приставка.",
      "q":"Форма <b>przyjdę</b> означает —","opts":["прихожу","приду","пришёл"],"answer":1,
      "explain":"Глагол с приставкой — совершенный, у него нет настоящего: <b>przyjdę</b> = «приду»."}
   ]
  },
  {
   "eyebrow":"Правило 2 · Семь из одного",
   "title":"<em>idę</em> → <em>przyjdę, wyjdę, wejdę, dojdę</em>",
   "paras":[
     "Основа остаётся знакомой. Из <b>idę</b> при добавлении приставки уходит начальное i-, и остаётся кусочек <b>-jdę</b>: przy + jdę = <b>przyjdę</b>, wy + jdę = <b>wyjdę</b>, do + jdę = <b>dojdę</b>, prze + jdę = <b>przejdę</b>.",
     "Две приставки просят между собой беглое <b>e</b>, чтобы не столкнулись согласные: w + e + jdę = <b>wejdę</b>, od + e + jdę = <b>odejdę</b>. У po- меняется гласная: po + jdę = <b>pójdę</b>. Русский делает то же самое в тех же местах: «во-йду», «ото-йду».",
     "Дальше спряжение одно на всех, как у idę: <b>przyjdę, przyjdziesz, przyjdzie, przyjdziemy, przyjdziecie, przyjdą</b>. Меняешь приставку — меняется смысл, окончания стоят на месте.",
     "Повелительная форма тоже короткая и очень нужная: <b>Przyjdź!</b> (приди), <b>Wejdź!</b> (войди), <b>Wyjdź!</b> (выйди), <b>Przejdź!</b> (перейди)."
   ],
   "audio":"Основа остаётся знакомой. Из idę при добавлении приставки уходит начальное i, и остаётся кусочек jdę: przy плюс jdę даёт przyjdę, wy плюс jdę даёт wyjdę, do плюс jdę даёт dojdę, prze плюс jdę даёт przejdę. Две приставки просят между собой беглое э, чтобы не столкнулись согласные: wejdę и odejdę. У po- меняется гласная: pójdę. Русский делает то же самое в тех же местах: войду, отойду. Дальше спряжение одно на всех, как у idę: przyjdę, przyjdziesz, przyjdzie, przyjdziemy, przyjdziecie, przyjdą. Меняешь приставку — меняется смысл, окончания стоят на месте. Повелительная форма тоже короткая и очень нужная: przyjdź, приди; wejdź, войди; wyjdź, выйди; przejdź, перейди.",
   "table":{"rows":[
     ["przyjdę / przyjdziesz / przyjdzie <button class=\"play\" data-say=\"przyjdę, przyjdziesz, przyjdzie\">🔊</button>","приду / придёшь / придёт"],
     ["przyjdziemy / przyjdziecie / przyjdą <button class=\"play\" data-say=\"przyjdziemy, przyjdziecie, przyjdą\">🔊</button>","придём / придёте / придут"],
     ["wyjdę · wejdę · dojdę · przejdę <button class=\"play\" data-say=\"wyjdę, wejdę, dojdę, przejdę\">🔊</button>","выйду · войду · дойду · перейду"],
     ["odejdę · pójdę <button class=\"play\" data-say=\"odejdę, pójdę\">🔊</button>","отойду · пойду"],
     ["Przyjdź! · Wejdź! · Wyjdź! <button class=\"play\" data-say=\"Przyjdź! Wejdź! Wyjdź!\">🔊</button>","Приди! · Войди! · Выйди!"]
   ],"star":0},
   "examples":[
     {"ru":"Я приду в семь.","en":"<b>Przyjdę</b> o siódmej.","say":"Przyjdę o siódmej."},
     {"ru":"Мы выйдем через минуту.","en":"<b>Wyjdziemy</b> za chwilę.","gloss":"za chwilę — через минуту","say":"Wyjdziemy za chwilę."},
     {"ru":"Как мне дойти до вокзала?","en":"Jak <b>dojdę</b> do dworca?","say":"Jak dojdę do dworca?"},
     {"ru":"Они придут вечером.","en":"Oni <b>przyjdą</b> wieczorem.","say":"Oni przyjdą wieczorem."},
     {"ru":"Отойди от окна.","en":"<b>Odejdź</b> od okna.","say":"Odejdź od okna."}
   ],
   "mistakes":[
     {"wrong":"Przyidę o siódmej.","right":"<b>Przyjdę</b> o siódmej.","why":"после приставки от idę остаётся -jdę, через j: przyjdę, wyjdę, dojdę."},
     {"wrong":"Wjdę do pokoju.","right":"<b>Wejdę</b> do pokoju.","why":"между w и jdę появляется беглое e — иначе слово не выговорить. Так же и в русском «во-йду»."}
   ],
   "mnemonic":"➡️ przy-jdę · wy-jdę · do-jdę · prze-jdę · we-jdę · ode-jdę · pó-jdę. Приставка меняется, хвост один.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни про беглое e.",
      "q":"«Я войду в комнату» —","opts":["Wjdę do pokoju","Wejdę do pokoju","Wyjdę do pokoju"],"answer":1,
      "explain":"<b>Wejdę</b> — с беглым e. Wyjdę значит «выйду»."},
     {"type":"choice","howto":"<b>Что делать:</b> переведи приставку.",
      "q":"«Мы придём в восемь» —","opts":["Wyjdziemy o ósmej","Przyjdziemy o ósmej","Dojdziemy o ósmej"],"answer":1,
      "explain":"Прийти к кому-то — <b>przyjdziemy</b>."},
     {"type":"type","howto":"Напиши «Приду завтра». Диакритику можно не ставить.",
      "q":"«Приду завтра» (я)","accept":["przyjdę jutro","przyjde jutro","jutro przyjdę","jutro przyjde"],"placeholder":"Przyjdę…"}
   ]
  },
  {
   "eyebrow":"Правило 3 · Прошедшее",
   "title":"<em>przyszedłem</em> и <em>przyszłam</em>",
   "paras":[
     "Прошедшее строится на знакомой паре из A2: <b>szedł / szła</b> («шёл / шла»). Приставка просто садится перед ней и ничего в ней не ломает: <b>przyszedłem / przyszłam</b>, <b>wyszedłem / wyszłam</b>, <b>poszedłem / poszłam</b>, <b>doszedłem / doszłam</b>.",
     "Мужская ветка длинная и с кусочком <b>-szed-</b>, женская короткая: przyszedłem [пшышэ́ду̯эм] — przyszłam [пшы́шу̯ам]. Множественное: <b>przyszliśmy / przyszłyśmy</b>, <b>przyszli / przyszły</b> — мужско-личная ветка по правилам A2.",
     "И одна ловушка на всю неделю: две приставки на согласный — <b>w-</b> и <b>od-</b> — в прошедшем перебрасывают гласную. Мужчина скажет <b>wszedłem, wszedł</b> и <b>odszedłem, odszedł</b>, а женщина — <b>weszłam, weszła</b> и <b>odeszłam, odeszła</b>; во множественном <b>weszli / weszły</b>, <b>odeszli / odeszły</b>. Остальные приставки ведут себя смирно.",
     "Опорные фразы, которые понадобятся уже завтра: <b>Przyszedłem za późno.</b> <b>Wyszłam z domu o siódmej.</b> <b>Doszliśmy do dworca pieszo.</b> <b>Weszła do pokoju i usiadła.</b>"
   ],
   "audio":"Прошедшее строится на знакомой паре из уровня A2: szedł и szła, шёл и шла. Приставка просто садится перед ней и ничего в ней не ломает: przyszedłem и przyszłam, wyszedłem и wyszłam, poszedłem и poszłam, doszedłem и doszłam. Мужская ветка длинная и с кусочком szed-, женская короткая. Множественное: przyszliśmy, przyszłyśmy, przyszli, przyszły — мужско-личная ветка по правилам A2. И одна ловушка на всю неделю: две приставки на согласный, w- и od-, в прошедшем перебрасывают гласную. Мужчина скажет wszedłem, wszedł и odszedłem, odszedł, а женщина weszłam, weszła и odeszłam, odeszła; во множественном weszli, weszły, odeszli, odeszły. Остальные приставки ведут себя смирно. Опорные фразы, которые понадобятся уже завтра: przyszedłem za późno; wyszłam z domu o siódmej; doszliśmy do dworca pieszo; weszła do pokoju i usiadła.",
   "table":{"rows":[
     ["<b>przyszedłem / przyszłam</b> <button class=\"play\" data-say=\"przyszedłem, przyszłam\">🔊</button>","я пришёл / я пришла"],
     ["on <b>przyszedł</b> · ona <b>przyszła</b> <button class=\"play\" data-say=\"przyszedł, przyszła\">🔊</button>","он пришёл · она пришла"],
     ["<b>przyszliśmy / przyszłyśmy</b> · <b>przyszli / przyszły</b> <button class=\"play\" data-say=\"przyszliśmy, przyszłyśmy\">🔊</button>","мы пришли · они пришли"],
     ["<b>wyszedłem / wyszłam</b> · <b>doszedłem / doszłam</b> <button class=\"play\" data-say=\"wyszedłem, wyszłam, doszedłem, doszłam\">🔊</button>","вышел(шла) · дошёл(дошла)"],
     ["⚠️ <b>wszedłem</b> — <b>weszłam</b> · <b>odszedł</b> — <b>odeszła</b> <button class=\"play\" data-say=\"wszedłem, weszłam, odszedł, odeszła\">🔊</button>","вошёл — вошла · отошёл — отошла"]
   ],"star":4},
   "examples":[
     {"ru":"Я пришёл слишком поздно.","en":"<b>Przyszedłem</b> za późno.","gloss":"женщина скажет: przyszłam","say":"Przyszedłem za późno."},
     {"ru":"Я вышла из дома в семь.","en":"<b>Wyszłam</b> z domu o siódmej.","say":"Wyszłam z domu o siódmej."},
     {"ru":"Мы дошли до вокзала пешком.","en":"<b>Doszliśmy</b> do dworca pieszo.","say":"Doszliśmy do dworca pieszo."},
     {"ru":"Она вошла в комнату и села.","en":"<b>Weszła</b> do pokoju i usiadła.","say":"Weszła do pokoju i usiadła."},
     {"ru":"Пришло письмо из банка.","en":"<b>Przyszedł</b> list z banku.","gloss":"по-польски письмо «приходит» так же, как по-русски","say":"Przyszedł list z banku."}
   ],
   "mistakes":[
     {"wrong":"Weszedłem do pokoju.","right":"<b>Wszedłem</b> do pokoju.","why":"мужская форма — wszedłem, без e в начале. Женская, наоборот, с e: weszłam."},
     {"wrong":"Przyszedłam za późno.","right":"<b>Przyszłam</b> za późno.","why":"женская форма всегда короткая: przyszłam, wyszłam, poszłam. Кусочек -szed- живёт только в мужской."}
   ],
   "mnemonic":"👣 Мужская длинная: przy-szed-łem. Женская короткая: przy-szłam. И две капризные пары: wszedłem — weszłam, odszedł — odeszła.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто говорит.",
      "q":"Анна о себе: «Я вышла в семь» —","opts":["Wyszedłam o siódmej","Wyszłam o siódmej","Wyszła o siódmej"],"answer":1,
      "explain":"Женская форма короткая: <b>wyszłam</b>. Wyszła — «она вышла»."},
     {"type":"choice","howto":"<b>Что делать:</b> это та самая капризная приставка.",
      "q":"Марек о себе: «Я вошёл в кабинет» —","opts":["Weszłem do gabinetu","Wszedłem do gabinetu","Weszłam do gabinetu"],"answer":1,
      "explain":"Мужская форма — <b>wszedłem</b>; weszłam сказала бы женщина."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мы дошли до вокзала пешком»</b>","answer":"Doszliśmy do dworca pieszo"}
   ]
  },
  {
   "eyebrow":"Правило 4 · Ловушка дня",
   "title":"<em>poszedł</em> или <em>przyszedł</em>",
   "paras":[
     "Русский решает это не думая: «пошёл» — ушёл отсюда туда, «пришёл» — оказался здесь. Польский различает ровно так же, и путаница тут стоит дорого: <b>Marek poszedł do Anny</b> значит «ушёл к ней», а <b>Marek przyszedł do Anny</b> — «явился к ней, он уже там».",
     "Остальные три работают так же буквально: <b>wyszedł</b> — вышел (наружу, ненадолго): «Marka nie ma, wyszedł». <b>Wszedł</b> — вошёл внутрь. <b>Odszedł</b> — отошёл, ушёл насовсем: <b>Odszedł od stołu</b> — «отошёл от стола», <b>Odszedł z pracy</b> — «ушёл с работы», то есть уволился.",
     "И вторая половина системы: у каждого из них есть несовершенная пара — та самая, что и в русском. <b>przychodzić / przyjść</b> = приходить / прийти, <b>wychodzić / wyjść</b> = выходить / выйти, <b>wchodzić / wejść</b> = входить / войти, <b>dochodzić / dojść</b> = доходить / дойти. Основа берётся не от iść, а от chodzić — тоже как в русском, где «ходить» кормит все несовершенные формы.",
     "Отсюда обычные фразы на каждый день: <b>Zwykle wychodzę o ósmej</b> («обычно выхожу в восемь») и <b>Dziś wyszedłem o siódmej</b> («сегодня вышел в семь»). Выбор вида — тот же, что ты делал(а) весь A2."
   ],
   "audio":"Русский решает это не думая: «пошёл» это ушёл отсюда туда, «пришёл» это оказался здесь. Польский различает ровно так же, и путаница тут стоит дорого: Marek poszedł do Anny значит ушёл к ней, а Marek przyszedł do Anny значит явился к ней, он уже там. Остальные три работают так же буквально: wyszedł, вышел наружу ненадолго — Marka nie ma, wyszedł. Wszedł — вошёл внутрь. Odszedł — отошёл, ушёл насовсем: odszedł od stołu, отошёл от стола; odszedł z pracy, ушёл с работы, то есть уволился. И вторая половина системы: у каждого из них есть несовершенная пара, та самая, что и в русском. Przychodzić и przyjść это приходить и прийти, wychodzić и wyjść это выходить и выйти, wchodzić и wejść это входить и войти, dochodzić и dojść это доходить и дойти. Основа берётся не от iść, а от chodzić — тоже как в русском, где «ходить» кормит все несовершенные формы. Отсюда обычные фразы на каждый день: zwykle wychodzę o ósmej, обычно выхожу в восемь, и dziś wyszedłem o siódmej, сегодня вышел в семь. Выбор вида здесь тот же, что и весь уровень A2.",
   "table":{"rows":[
     ["<b>poszedł</b> do sklepu <button class=\"play\" data-say=\"poszedł do sklepu\">🔊</button>","пошёл в магазин (ушёл туда)"],
     ["<b>przyszedł</b> do domu <button class=\"play\" data-say=\"przyszedł do domu\">🔊</button>","пришёл домой (он здесь)"],
     ["<b>wyszedł</b> na chwilę <button class=\"play\" data-say=\"wyszedł na chwilę\">🔊</button>","вышел на минутку"],
     ["<b>odszedł</b> z pracy <button class=\"play\" data-say=\"odszedł z pracy\">🔊</button>","ушёл с работы (уволился)"],
     ["przychodzić / <b>przyjść</b> <button class=\"play\" data-say=\"przychodzić, przyjść\">🔊</button>","приходить / прийти"],
     ["wychodzić / <b>wyjść</b> <button class=\"play\" data-say=\"wychodzić, wyjść\">🔊</button>","выходить / выйти"]
   ],"star":1},
   "examples":[
     {"ru":"Марека нет, он вышел.","en":"Marka nie ma, <b>wyszedł</b>.","say":"Marka nie ma, wyszedł."},
     {"ru":"Анна пошла в аптеку.","en":"Anna <b>poszła</b> do apteki.","say":"Anna poszła do apteki."},
     {"ru":"Обычно я выхожу в восемь.","en":"Zwykle <b>wychodzę</b> o ósmej.","gloss":"привычка — несовершенный вид","say":"Zwykle wychodzę o ósmej."},
     {"ru":"Он приходит сюда каждую субботу.","en":"On <b>przychodzi</b> tu w każdą sobotę.","say":"On przychodzi tu w każdą sobotę."}
   ],
   "mistakes":[
     {"wrong":"Zwykle wyjdę o ósmej.","right":"Zwykle <b>wychodzę</b> o ósmej.","why":"«обычно» — про привычку, значит несовершенный вид. Wyjdę означает «выйду», один раз в будущем."},
     {"wrong":"Marek przyszedł do sklepu i kupił chleb.","right":"Marek <b>poszedł</b> do sklepu i kupił chleb.","why":"он ушёл отсюда в магазин — значит poszedł. Przyszedł означало бы, что он там появился, и рассказчик тоже там."}
   ],
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> спроси себя, где находится говорящий.",
      "q":"Анна дома, звонит Мареку: «Приди в семь» —","opts":["Pójdź o siódmej","Przyjdź o siódmej","Wyjdź o siódmej"],"answer":1,
      "explain":"Она зовёт к себе — <b>przyjdź</b>. Pójdź значило бы «отправляйся куда-то»."},
     {"type":"choice","howto":"<b>Что делать:</b> обрати внимание на слово zwykle.",
      "q":"«Обычно я прихожу в девять» —","opts":["Zwykle przyjdę o dziewiątej","Zwykle przychodzę o dziewiątej","Zwykle przyszedłem o dziewiątej"],"answer":1,
      "explain":"Привычка — несовершенный вид: <b>przychodzę</b>."},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — тут вся система в одной фразе.",
      "target":"Wyszedłem z domu, przeszedłem przez plac i przyszedłem do pracy.","sub":"вышел из дома, перешёл площадь и пришёл на работу","want":"Wyszedłem z domu, przeszedłem przez plac i przyszedłem do pracy."}
   ],
   "mnemonic":"🚪 poszedł — ушёл туда · przyszedł — пришёл сюда · wyszedł — вышел наружу · wszedł — вошёл внутрь."
  }
 ],
 "dialogue":{
   "intro":"Семь утра, краковский вокзал, две тяжёлые сумки и конец отпуска. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Nareszcie. Wyszliśmy z pociągu i od razu poczułam Kraków.","ru":"Наконец-то. Мы вышли из поезда — и я сразу почувствовала Краков.",
      "words":[["Wyszliśmy","мы вышли"],["od razu","сразу"]]},
     {"who":"M","name":"Marek","side":"right","en":"Ja czuję tylko walizkę. Dojdziemy do tramwaju czy bierzemy taksówkę?","ru":"Я чувствую только чемодан. Дойдём до трамвая или берём такси?",
      "words":[["Dojdziemy","дойдём"],["walizkę","чемодан"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dojdziemy. To sto metrów, przejdziemy przez plac.","ru":"Дойдём. Это сто метров, перейдём через площадь.",
      "words":[["przejdziemy","перейдём"],["plac","площадь"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dobrze. Ale najpierw wejdę do kiosku po bilety.","ru":"Хорошо. Но сначала я зайду в киоск за билетами.",
      "words":[["wejdę","войду, зайду"],["po bilety","за билетами"]]},
     {"who":"A","name":"Anna","side":"left","en":"Idź. Ja odejdę na bok, bo tu wszyscy biegną.","ru":"Иди. Я отойду в сторону, а то тут все бегут.",
      "words":[["odejdę","отойду"],["na bok","в сторону"]]},
     {"who":"M","name":"Marek","side":"right","en":"Wracam za minutę. Potem muszę jeszcze wejść do biura.","ru":"Вернусь через минуту. Потом мне надо ещё зайти в офис.",
      "words":[["Wracam","возвращаюсь"],["do biura","в офис"]]},
     {"who":"A","name":"Anna","side":"left","en":"W pierwszy dzień po urlopie? Wczoraj byliśmy w Rzymie.","ru":"В первый день после отпуска? Вчера мы были в Риме.",
      "words":[["po urlopie","после отпуска"],["w Rzymie","в Риме"]]},
     {"who":"M","name":"Marek","side":"right","en":"Wejdę na chwilę, oddam klucze i wyjdę. Naprawdę.","ru":"Зайду на минутку, отдам ключи и выйду. Правда.",
      "words":[["na chwilę","на минутку"],["oddam","отдам"]]},
     {"who":"A","name":"Anna","side":"left","en":"Znam twoje „na chwilę”. Wyjdziesz stamtąd o dziewiątej wieczorem.","ru":"Знаю твоё «на минутку». Выйдешь оттуда в девять вечера.",
      "words":[["Wyjdziesz","выйдешь"],["stamtąd","оттуда"]]},
     {"who":"M","name":"Marek","side":"right","en":"Nie tym razem. Dziś przyjdę do ciebie o siódmej. Mam nowinę.","ru":"Не в этот раз. Сегодня приду к тебе в семь. У меня новость.",
      "words":[["przyjdę","приду"],["nowinę","новость"]]}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — семья от одного корня и то, что вокруг неё.",
   "items":[
     {"en":"przyjść (przyjdę, przyszedłem / przyszłam)","ru":"прийти","ex":"Przyjdę o siódmej."},
     {"en":"wyjść (wyjdę, wyszedłem / wyszłam)","ru":"выйти","ex":"Wyszłam z domu o ósmej."},
     {"en":"wejść (wejdę, wszedłem / weszłam)","ru":"войти, зайти","ex":"Wszedłem do biura na chwilę."},
     {"en":"dojść (dojdę, doszedłem / doszłam)","ru":"дойти","ex":"Doszliśmy do dworca pieszo."},
     {"en":"przejść (przejdę)","ru":"перейти, пройти","ex":"Przejdź przez ulicę."},
     {"en":"odejść (odejdę)","ru":"отойти, уйти","ex":"Odszedł z pracy w maju."},
     {"en":"przychodzić / wychodzić","ru":"приходить / выходить","ex":"Zwykle wychodzę o ósmej."},
     {"en":"pociąg","ru":"поезд","ex":"Pociąg z Włoch przyszedł o siódmej."},
     {"en":"walizka","ru":"чемодан","ex":"Mam ciężką walizkę."},
     {"en":"dworzec","ru":"вокзал","ex":"Doszliśmy do dworca."},
     {"en":"za chwilę","ru":"через минуту","ex":"Wyjdziemy za chwilę."},
     {"en":"nowina","ru":"новость","ex":"Mam dla ciebie nowinę."}
   ]
 },
 "drag":{
   "intro":"Перетащи польский глагол к его русскому близнецу. Приставка подскажет сама.",
   "pairs":[["przyjść","прийти"],["wyjść","выйти"],["wejść","войти"],["dojść","дойти"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Анна описывает утро возвращения. Приставки тут в каждом предложении.",
   "title":"Powrót",
   "sentences":["Pociąg z Włoch przyszedł o siódmej rano.","Wyszliśmy na peron z dwiema walizkami.","Marek wszedł do kiosku po bilety.","Ja odeszłam na bok, bo wszyscy się spieszyli.","Potem przeszliśmy przez plac i doszliśmy do tramwaju.","W domu byłam po godzinie.","Weszłam do mieszkania i otworzyłam okna.","Marek poszedł jeszcze do biura na chwilę.","Wyszedł stamtąd dopiero o szóstej.","Wieczorem przyszedł do mnie z nowiną.","Ale o tym opowiem jutro."],
   "translation":"Поезд из Италии пришёл в семь утра. Мы вышли на перрон с двумя чемоданами. Марек зашёл в киоск за билетами. Я отошла в сторону, потому что все спешили. Потом мы перешли площадь и дошли до трамвая. Дома я была через час. Вошла в квартиру и открыла окна. Марек пошёл ещё в офис на минутку. Вышел оттуда только в шесть. Вечером пришёл ко мне с новостью. Но об этом расскажу завтра."
 },
 "quiz":{
   "intro":"Шесть вопросов — и первая система B1 встанет на место.",
   "items":[
     {"q":"1. «Я приду в семь» —","opts":["Będę przyjść o siódmej","Przyjdę o siódmej","Przychodzę o siódmej"],"answer":1,
      "explain":"Глагол с приставкой совершенный, он сам означает будущее: <b>przyjdę</b>."},
     {"q":"2. Анна о себе: «Я вошла в комнату» —","opts":["Wszedłam do pokoju","Weszłam do pokoju","Wyszłam do pokoju"],"answer":1,
      "explain":"Женская форма — <b>weszłam</b> (мужская: wszedłem)."},
     {"q":"3. «Мы дошли до вокзала» —","opts":["Przeszliśmy do dworca","Doszliśmy do dworca","Odeszliśmy do dworca"],"answer":1,
      "explain":"До точки, до предела — приставка do-: <b>doszliśmy</b>."},
     {"q":"4. «Марека нет, он вышел» —","opts":["Marka nie ma, wszedł","Marka nie ma, przyszedł","Marka nie ma, wyszedł"],"answer":2,
      "explain":"Наружу — <b>wyszedł</b>. Wszedł значит «вошёл», przyszedł — «пришёл»."},
     {"q":"5. «Обычно я выхожу в восемь» —","opts":["Zwykle wychodzę o ósmej","Zwykle wyjdę o ósmej","Zwykle wyszedłem o ósmej"],"answer":0,
      "explain":"Привычка — несовершенный вид: <b>wychodzę</b>."},
     {"q":"6. Какая приставка значит «пере-»?","opts":["od-","prze-","do-"],"answer":1,
      "explain":"<b>prze-</b> = пере-: przejść — перейти, przepisać — переписать."}
   ]
 },
 "essay":{
   "intro":"Первый текст уровня — короткий и очень конкретный: одно твоё утро, разобранное по приставкам.",
   "prompt":"Напиши 4–6 предложений о сегодняшнем или вчерашнем утре: когда ты вышел(шла) из дома, куда дошёл(дошла), куда зашёл(зашла), когда пришёл(пришла) на место.",
   "hint":"Каркас: Wyszedłem / Wyszłam z domu o… Potem przeszedłem / przeszłam przez… Wszedłem / Weszłam do… W końcu przyszedłem / przyszłam do… 💛",
   "example":"Wyszłam z domu o ósmej. Najpierw weszłam do sklepu po kawę. Potem przeszłam przez park, bo tak jest ładniej. Doszłam do przystanku w dziesięć minut. Do pracy przyszłam o wpół do dziewiątej. Wieczorem wyszłam wcześniej niż zwykle."
 }
},
"2": {
 "day":2,"week":"01",
 "themeRu":"Приехал, уехал",
 "themeEn":"Przyjechałem, wyjechałem",
 "intro":"Тот же завод приставок, только на колёсах. Вчерашняя семёрка садилась на <b>iść</b> — сегодня она садится на <b>jechać</b>, и получается <b>przyjechać, wyjechać, dojechać, wjechać, zjechać</b>. Бонусом идут существительные, которые ты уже знаешь по-русски: <b>przyjazd</b> — приезд, <b>wyjazd</b> — выезд, <b>odjazd</b> — отъезд. А вечером Марек всё-таки рассказал свою новость.",
 "introAudio":"Тот же завод приставок, только на колёсах. Вчерашняя семёрка садилась на iść — сегодня она садится на jechać, и получается przyjechać, wyjechać, dojechać, wjechać, zjechać. Бонусом идут существительные, которые ты уже знаешь по-русски: przyjazd это приезд, wyjazd это выезд, odjazd это отъезд. А вечером Марек всё-таки рассказал свою новость.",
 "goals":[
   "Собрать приставочные от <b>jechać</b>: przyjechać, wyjechać, dojechać, wjechać, zjechać",
   "Ставить их в прошедшее без единой неправильности: <b>przyjechałem / przyjechałam</b>",
   "Узнавать отглагольные существительные: <b>przyjazd, wyjazd, odjazd, dojazd</b>",
   "Обойти две ловушки: <b>zjechać</b> = съехать вниз, <b>przejechać</b> = проехать мимо"
 ],
 "learned":[
   "Собрал(а) приставочные от jechać: przyjechać, wyjechać, dojechać, wjechać, zjechać",
   "Поставил(а) их в прошедшее: przyjechałem / przyjechałam",
   "Узнал(а) отглагольные существительные: przyjazd, wyjazd, odjazd, dojazd",
   "Обошёл(шла) две ловушки: zjechać = съехать вниз, przejechać = проехать мимо"
 ],
 "review":{
   "intro":"Вчера мы разобрали семью от <b>iść</b>. Проверим прошедшее — там живут две капризные пары недели.",
   "introAudio":"Вчера мы разобрали семью от iść. Проверим прошедшее — там живут две капризные пары недели.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто говорит.",
      "q":"Анна о себе: «Я вошла в квартиру» —","opts":["Wszedłam do mieszkania","Weszłam do mieszkania","Weszła do mieszkania"],"answer":1,
      "explain":"Женская форма — <b>weszłam</b>. Wszedłem сказал бы мужчина."},
     {"type":"choice","howto":"<b>Что делать:</b> где находится говорящий?",
      "q":"Анна дома, зовёт Марека: «Приди в семь» —","opts":["Przyjdź o siódmej","Pójdź o siódmej","Odejdź o siódmej"],"answer":0,
      "explain":"К себе зовут через <b>przyjdź</b> — «приди»."},
     {"type":"choice","howto":"<b>Что делать:</b> найди слово о привычке.",
      "q":"«Обычно я выхожу в восемь» —","opts":["Zwykle wyjdę o ósmej","Zwykle wychodzę o ósmej","Zwykle wyszedłem o ósmej"],"answer":1,
      "explain":"Привычка — несовершенный вид: <b>wychodzę</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мы дошли до трамвая пешком»</b>","answer":"Doszliśmy do tramwaju pieszo"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · Те же приставки",
   "title":"<em>jechać</em> с приставкой",
   "paras":[
     "Вчерашний набор кирпичей никуда не делся, он просто переехал на другой корень. <b>przyjechać</b> — приехать, <b>wyjechać</b> — выехать и уехать, <b>pojechać</b> — поехать, <b>dojechać</b> — доехать, <b>przejechać</b> — проехать, <b>wjechać</b> — въехать, <b>zjechać</b> — съехать, <b>objechać</b> — объехать.",
     "Первое, что стоит закрепить сразу: <b>jechać</b> — это только про транспорт. Пешком приходят: <b>Przyszedłem pieszo</b>, но <b>Przyjechałem autobusem</b>. Русский делит так же, и ошибка звучит одинаково странно на обоих языках.",
     "Спряжение берётся у знакомого <b>jadę</b>: <b>przyjadę, przyjedziesz, przyjedzie, przyjedziemy, przyjedziecie, przyjadą</b>. Как и вчера, приставка делает глагол совершенным, поэтому <b>przyjadę</b> — это «приеду», будущее.",
     "Несовершенные пары строятся не от jechać, а от основы <b>-jeżdżać</b>: <b>przyjeżdżać / przyjechać</b> (приезжать / приехать), <b>wyjeżdżać / wyjechać</b>, <b>dojeżdżać / dojechać</b>. Сравни с русским «приезжать — приехать»: та же пара, тот же принцип."
   ],
   "audio":"Вчерашний набор кирпичей никуда не делся, он просто переехал на другой корень. Przyjechać — приехать, wyjechać — выехать и уехать, pojechać — поехать, dojechać — доехать, przejechać — проехать, wjechać — въехать, zjechać — съехать, objechać — объехать. Первое, что стоит закрепить сразу: jechać это только про транспорт. Пешком приходят: przyszedłem pieszo, но przyjechałem autobusem. Русский делит так же, и ошибка звучит одинаково странно на обоих языках. Спряжение берётся у знакомого jadę: przyjadę, przyjedziesz, przyjedzie, przyjedziemy, przyjedziecie, przyjadą. Как и вчера, приставка делает глагол совершенным, поэтому przyjadę это «приеду», будущее. Несовершенные пары строятся не от jechać, а от основы jeżdżać: przyjeżdżać и przyjechać, приезжать и приехать; wyjeżdżać и wyjechać; dojeżdżać и dojechać. Сравни с русским «приезжать — приехать»: та же пара, тот же принцип.",
   "table":{"rows":[
     ["<b>przyjechać</b> · przyjadę <button class=\"play\" data-say=\"przyjechać, przyjadę\">🔊</button>","приехать · приеду"],
     ["<b>wyjechać</b> · wyjadę <button class=\"play\" data-say=\"wyjechać, wyjadę\">🔊</button>","уехать, выехать · уеду"],
     ["<b>dojechać</b> · dojadę <button class=\"play\" data-say=\"dojechać, dojadę\">🔊</button>","доехать · доеду"],
     ["<b>wjechać</b> · wjadę <button class=\"play\" data-say=\"wjechać, wjadę\">🔊</button>","въехать · въеду"],
     ["<b>zjechać</b> · zjadę <button class=\"play\" data-say=\"zjechać, zjadę\">🔊</button>","съехать вниз · съеду"],
     ["przyjeżdżać / <b>przyjechać</b> <button class=\"play\" data-say=\"przyjeżdżać, przyjechać\">🔊</button>","приезжать / приехать"]
   ],"star":0},
   "examples":[
     {"ru":"Я приеду в пятницу.","en":"<b>Przyjadę</b> w piątek.","say":"Przyjadę w piątek."},
     {"ru":"Они уезжают в понедельник.","en":"Oni <b>wyjeżdżają</b> w poniedziałek.","say":"Oni wyjeżdżają w poniedziałek."},
     {"ru":"Как доехать до центра?","en":"Jak <b>dojechać</b> do centrum?","gloss":"самый нужный вопрос дня","say":"Jak dojechać do centrum?"},
     {"ru":"Машина въехала во двор.","en":"Samochód <b>wjechał</b> na podwórko.","say":"Samochód wjechał na podwórko."},
     {"ru":"Пешком я прихожу, автобусом приезжаю.","en":"Pieszo <b>przychodzę</b>, autobusem <b>przyjeżdżam</b>.","say":"Pieszo przychodzę, autobusem przyjeżdżam."}
   ],
   "mistakes":[
     {"wrong":"Przyjechałem do ciebie pieszo.","right":"<b>Przyszedłem</b> do ciebie pieszo.","why":"jechać — только про транспорт. Пешком приходят, как и по-русски."},
     {"wrong":"Będę przyjechać jutro.","right":"<b>Przyjadę</b> jutro.","why":"глагол с приставкой совершенный и сам означает будущее — «приеду»."}
   ],
   "mnemonic":"🚗 Те же кирпичи, другой корень: przy-jechać · wy-jechać · do-jechać · w-jechać · z-jechać.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> подумай, на чём человек передвигается.",
      "q":"«Я пришёл пешком» —","opts":["Przyjechałem pieszo","Przyszedłem pieszo","Wyszedłem pieszo"],"answer":1,
      "explain":"Пешком — <b>przyszedłem</b>. Przyjechałem значит «приехал»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни приставку do-.",
      "q":"«Как доехать до вокзала?» —","opts":["Jak przejechać do dworca?","Jak dojechać do dworca?","Jak wjechać do dworca?"],"answer":1,
      "explain":"До точки — <b>dojechać</b>. Это дежурный вопрос путешественника."},
     {"type":"type","howto":"Напиши «Приеду в пятницу». Диакритику можно не ставить.",
      "q":"«Приеду в пятницу» (я)","accept":["przyjadę w piątek","przyjade w piatek","w piątek przyjadę","w piatek przyjade"],"placeholder":"Przyjadę…"}
   ]
  },
  {
   "eyebrow":"Правило 2 · Прошедшее без сюрпризов",
   "title":"<em>przyjechałem</em>, <em>przyjechałam</em>",
   "paras":[
     "После вчерашних przyszedłem и weszłam это будет отдыхом: <b>jechać</b> в прошедшем абсолютно правильный. Основа <b>-jechał-</b> не меняется никогда, к ней просто клеятся знакомые хвостики.",
     "<b>przyjechałem / przyjechałam</b>, <b>przyjechałeś / przyjechałaś</b>, <b>przyjechał / przyjechała</b>. Множественное — по правилу мужско-личного рода: <b>przyjechaliśmy / przyjechałyśmy</b>, <b>przyjechali / przyjechały</b>.",
     "Так же ведут себя все остальные: <b>wyjechałem, dojechałam, wjechał, zjechali</b>. Ни одной беглой гласной, ни одного капризного ó.",
     "Три фразы, которые стоит уметь сказать не задумываясь: <b>Przyjechaliśmy wczoraj wieczorem.</b> <b>Wyjechała na tydzień.</b> <b>Dojechaliśmy bez problemów.</b>"
   ],
   "audio":"После вчерашних przyszedłem и weszłam это будет отдыхом: jechać в прошедшем абсолютно правильный. Основа jechał не меняется никогда, к ней просто клеятся знакомые хвостики. Przyjechałem, przyjechałam, przyjechałeś, przyjechałaś, przyjechał, przyjechała. Множественное по правилу мужско-личного рода: przyjechaliśmy, przyjechałyśmy, przyjechali, przyjechały. Так же ведут себя все остальные: wyjechałem, dojechałam, wjechał, zjechali. Ни одной беглой гласной, ни одного капризного ó. Три фразы, которые стоит уметь сказать не задумываясь: przyjechaliśmy wczoraj wieczorem; wyjechała na tydzień; dojechaliśmy bez problemów.",
   "table":{"rows":[
     ["<b>przyjechałem / przyjechałam</b> <button class=\"play\" data-say=\"przyjechałem, przyjechałam\">🔊</button>","я приехал / я приехала"],
     ["on <b>przyjechał</b> · ona <b>przyjechała</b> <button class=\"play\" data-say=\"przyjechał, przyjechała\">🔊</button>","он приехал · она приехала"],
     ["<b>przyjechaliśmy / przyjechałyśmy</b> <button class=\"play\" data-say=\"przyjechaliśmy, przyjechałyśmy\">🔊</button>","мы приехали"],
     ["<b>wyjechał / wyjechała</b> <button class=\"play\" data-say=\"wyjechał, wyjechała\">🔊</button>","уехал / уехала"],
     ["Dojechaliśmy bez problemów. <button class=\"play\" data-say=\"Dojechaliśmy bez problemów\">🔊</button>","Доехали без проблем."]
   ],"star":0},
   "examples":[
     {"ru":"Мы приехали вчера вечером.","en":"<b>Przyjechaliśmy</b> wczoraj wieczorem.","say":"Przyjechaliśmy wczoraj wieczorem."},
     {"ru":"Она уехала на неделю.","en":"<b>Wyjechała</b> na tydzień.","say":"Wyjechała na tydzień."},
     {"ru":"Я приехала поездом.","en":"<b>Przyjechałam</b> pociągiem.","say":"Przyjechałam pociągiem."},
     {"ru":"Мы доехали за три часа.","en":"<b>Dojechaliśmy</b> w trzy godziny.","say":"Dojechaliśmy w trzy godziny."}
   ],
   "mistakes":[
     {"wrong":"Przyjachałem wczoraj.","right":"<b>Przyjechałem</b> wczoraj.","why":"в прошедшем основа всегда -jechał-; гласная a живёт только в формах jadę, jadą."},
     {"wrong":"Ona przyjechał wczoraj.","right":"Ona <b>przyjechała</b> wczoraj.","why":"о женщине — форма на -a, как и в любом прошедшем времени."}
   ],
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на состав компании.",
      "q":"Анна и Марек: «Мы приехали вчера» —","opts":["Przyjechałyśmy wczoraj","Przyjechaliśmy wczoraj","Przyjechali wczoraj"],"answer":1,
      "explain":"В компании есть мужчина — мужско-личная форма: <b>przyjechaliśmy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни основу прошедшего.",
      "q":"«Она уехала в Варшаву» —","opts":["Wyjechała do Warszawy","Wyjachała do Warszawy","Wyjadła do Warszawy"],"answer":0,
      "explain":"Основа -jechał-: <b>wyjechała</b>. Wyjadła — от jeść, «съела»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мы доехали без проблем»</b>","answer":"Dojechaliśmy bez problemów"}
   ]
  },
  {
   "eyebrow":"Правило 3 · Слова с табло",
   "title":"<em>przyjazd, odjazd, wyjazd, dojazd</em>",
   "paras":[
     "Отрежь у глагола хвост — получится существительное, и оно тоже совпадёт с русским. <b>przyjazd</b> — приезд, прибытие. <b>odjazd</b> — отправление, отъезд. <b>wyjazd</b> — выезд, отъезд, поездка. <b>dojazd</b> — дорога до места. <b>wjazd</b> — въезд. <b>zjazd</b> — съезд.",
     "На вокзале и в аэропорту ты встретишь их первыми: <b>Przyjazdy</b> и <b>Odjazdy</b> на табло, <b>rozkład jazdy</b> — расписание, <b>peron</b> — платформа, <b>opóźnienie</b> — опоздание. Произносится przyjazd [пшы́яст]: конечное d оглушается, правило из pl-abc всё ещё работает.",
     "Два оттенка, которых нет в русском один в один. <b>Wyjazd</b> часто значит просто «поездка»: <b>wyjazd służbowy</b> — командировка, <b>wyjazd na weekend</b> — поездка на выходные. А <b>dojazd</b> — это «как туда добираться»: <b>Dojazd do centrum zajmuje pół godziny</b>, «дорога до центра занимает полчаса».",
     "И одно слово с двойной жизнью: <b>zjazd</b> — это и съезд с трассы, и съезд как собрание: <b>zjazd absolwentów</b> — встреча выпускников. Русское «съезд» умеет ровно то же самое."
   ],
   "audio":"Отрежь у глагола хвост — получится существительное, и оно тоже совпадёт с русским. Przyjazd — приезд, прибытие. Odjazd — отправление, отъезд. Wyjazd — выезд, отъезд, поездка. Dojazd — дорога до места. Wjazd — въезд. Zjazd — съезд. На вокзале и в аэропорту ты встретишь их первыми: przyjazdy и odjazdy на табло, rozkład jazdy — расписание, peron — платформа, opóźnienie — опоздание. Произносится przyjazd как пшыяст: конечное d оглушается, правило из курса pl-abc всё ещё работает. Два оттенка, которых нет в русском один в один. Wyjazd часто значит просто поездка: wyjazd służbowy — командировка, wyjazd na weekend — поездка на выходные. А dojazd это «как туда добираться»: dojazd do centrum zajmuje pół godziny, дорога до центра занимает полчаса. И одно слово с двойной жизнью: zjazd — это и съезд с трассы, и съезд как собрание: zjazd absolwentów, встреча выпускников. Русское «съезд» умеет ровно то же самое.",
   "table":{"rows":[
     ["<b>przyjazd</b> [пшы́яст] <button class=\"play\" data-say=\"przyjazd\">🔊</button>","приезд, прибытие"],
     ["<b>odjazd</b> <button class=\"play\" data-say=\"odjazd\">🔊</button>","отправление, отъезд"],
     ["<b>wyjazd</b> <button class=\"play\" data-say=\"wyjazd\">🔊</button>","отъезд · поездка (wyjazd służbowy)"],
     ["<b>dojazd</b> <button class=\"play\" data-say=\"dojazd\">🔊</button>","дорога до места"],
     ["<b>rozkład jazdy</b> <button class=\"play\" data-say=\"rozkład jazdy\">🔊</button>","расписание"],
     ["peron · opóźnienie <button class=\"play\" data-say=\"peron, opóźnienie\">🔊</button>","платформа · опоздание"]
   ],"star":3},
   "examples":[
     {"ru":"Отправление поезда в 14:20.","en":"<b>Odjazd</b> pociągu o czternastej dwadzieścia.","say":"Odjazd pociągu o czternastej dwadzieścia."},
     {"ru":"Дорога до центра занимает полчаса.","en":"<b>Dojazd</b> do centrum zajmuje pół godziny.","say":"Dojazd do centrum zajmuje pół godziny."},
     {"ru":"У него командировка в среду.","en":"Ma <b>wyjazd służbowy</b> w środę.","say":"Ma wyjazd służbowy w środę."},
     {"ru":"Поезд опаздывает на двадцать минут.","en":"Pociąg ma dwadzieścia minut <b>opóźnienia</b>.","say":"Pociąg ma dwadzieścia minut opóźnienia."}
   ],
   "mistakes":[
     {"wrong":"Rozkład jazda","right":"<b>Rozkład jazdy</b>","why":"второе слово стоит в родительном падеже — «расписание движения», как и в русском."}
   ],
   "mnemonic":"🚉 przyjazd приезд · odjazd отъезд · wyjazd выезд и поездка · dojazd дорога до места.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> ищи слово про дорогу до места.",
      "q":"«Дорога до работы занимает час» —","opts":["Wyjazd do pracy zajmuje godzinę","Dojazd do pracy zajmuje godzinę","Odjazd do pracy zajmuje godzinę"],"answer":1,
      "explain":"«Как я туда добираюсь» — <b>dojazd</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни табло на вокзале.",
      "q":"На табло написано «Odjazdy». Это —","opts":["прибытие","отправление","опоздание"],"answer":1,
      "explain":"<b>Odjazdy</b> — отправление; прибытие — przyjazdy."},
     {"type":"type","howto":"Напиши польское слово. Диакритику можно не ставить.",
      "q":"«Расписание» (движения транспорта)","accept":["rozkład jazdy","rozklad jazdy"],"placeholder":"Rozkład…"}
   ]
  },
  {
   "eyebrow":"Правило 4 · Две ловушки",
   "title":"<em>zjechać</em> вниз и <em>przejechać</em> мимо",
   "paras":[
     "Русская подсказка работает почти везде — но честно назовём места, где она обманывает. Первое: <b>zjechać</b> значит только «съехать вниз»: <b>zjechać z góry</b> (съехать с горы), <b>zjechać windą na dół</b> (спуститься на лифте). Русское «съехать с квартиры» так не переводится — для него есть <b>wyprowadzić się</b>.",
     "Второе: <b>przejechać</b> — это «проехать» мимо, насквозь, определённое расстояние: <b>Przejechaliśmy dwieście kilometrów.</b> <b>Przejechaliśmy nasz przystanek</b> — «мы проехали свою остановку». Но у этого же глагола есть тяжёлое значение: <b>przejechać kogoś</b> — сбить человека или животное. Слово с двойным дном, и лучше знать об этом заранее.",
     "Третья мелочь: <b>objechać</b> — объехать вокруг, <b>Objechaliśmy korek boczną ulicą</b>. А «объехать полмира» будет <b>objechać pół świata</b> — здесь русское значение совпадает целиком.",
     "И приятное напоследок: <b>wyjechać</b> покрывает и «выехать» (<b>Wyjechaliśmy o szóstej rano</b>), и «уехать надолго» (<b>Wyjechał do Anglii na rok</b>). Одно польское слово вместо двух русских."
   ],
   "audio":"Русская подсказка работает почти везде — но честно назовём места, где она обманывает. Первое: zjechać значит только «съехать вниз»: zjechać z góry, съехать с горы; zjechać windą na dół, спуститься на лифте. Русское «съехать с квартиры» так не переводится — для него есть wyprowadzić się. Второе: przejechać это «проехать» мимо, насквозь, определённое расстояние: przejechaliśmy dwieście kilometrów; przejechaliśmy nasz przystanek, мы проехали свою остановку. Но у этого же глагола есть тяжёлое значение: przejechać kogoś, то есть сбить человека или животное. Слово с двойным дном, и лучше знать об этом заранее. Третья мелочь: objechać — объехать вокруг, objechaliśmy korek boczną ulicą. А «объехать полмира» будет objechać pół świata, здесь русское значение совпадает целиком. И приятное напоследок: wyjechać покрывает и «выехать», wyjechaliśmy o szóstej rano, и «уехать надолго», wyjechał do Anglii na rok. Одно польское слово вместо двух русских.",
   "table":{"rows":[
     ["<b>zjechać</b> z góry <button class=\"play\" data-say=\"zjechać z góry\">🔊</button>","съехать с горы — только вниз"],
     ["<b>wyprowadzić się</b> z mieszkania <button class=\"play\" data-say=\"wyprowadzić się z mieszkania\">🔊</button>","съехать с квартиры"],
     ["<b>przejechać</b> przystanek <button class=\"play\" data-say=\"przejechać przystanek\">🔊</button>","проехать остановку"],
     ["⚠️ <b>przejechać</b> psa <button class=\"play\" data-say=\"przejechać psa\">🔊</button>","сбить собаку — второе значение"],
     ["<b>objechać</b> korek <button class=\"play\" data-say=\"objechać korek\">🔊</button>","объехать пробку"],
     ["<b>wyjechać</b> na rok <button class=\"play\" data-say=\"wyjechać na rok\">🔊</button>","уехать на год"]
   ],"star":1},
   "examples":[
     {"ru":"Мы спустились на лифте вниз.","en":"<b>Zjechaliśmy</b> windą na dół.","say":"Zjechaliśmy windą na dół."},
     {"ru":"Мы проехали свою остановку.","en":"<b>Przejechaliśmy</b> nasz przystanek.","say":"Przejechaliśmy nasz przystanek."},
     {"ru":"Он уехал в Англию на год.","en":"<b>Wyjechał</b> do Anglii na rok.","say":"Wyjechał do Anglii na rok."},
     {"ru":"Мы объехали пробку боковой улицей.","en":"<b>Objechaliśmy</b> korek boczną ulicą.","gloss":"korek — пробка","say":"Objechaliśmy korek boczną ulicą."}
   ],
   "mistakes":[
     {"wrong":"W sobotę zjeżdżam z mieszkania.","right":"W sobotę <b>wyprowadzam się</b> z mieszkania.","why":"zjechać — только движение вниз. Съехать с квартиры — wyprowadzić się."}
   ],
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, куда направлено движение.",
      "q":"«Мы спустились на лифте вниз» —","opts":["Wjechaliśmy windą na dół","Zjechaliśmy windą na dół","Przejechaliśmy windą na dół"],"answer":1,
      "explain":"Вниз — <b>zjechać</b>. Наверх сказали бы wjechać na górę."},
     {"type":"choice","howto":"<b>Что делать:</b> тут русская подсказка обманывает.",
      "q":"«В субботу я съезжаю с квартиры» —","opts":["W sobotę zjeżdżam z mieszkania","W sobotę wyprowadzam się z mieszkania","W sobotę przejeżdżam mieszkanie"],"answer":1,
      "explain":"Смена жилья — <b>wyprowadzać się</b>. Zjeżdżam значило бы «съезжаю вниз»."},
     {"type":"choice","howto":"<b>Что делать:</b> смотри, что стоит после глагола.",
      "q":"«Мы проехали свою остановку» —","opts":["Przejechaliśmy nasz przystanek","Wyjechaliśmy nasz przystanek","Dojechaliśmy nasz przystanek"],"answer":0,
      "explain":"Мимо, дальше нужного — <b>przejechać</b>."}
   ],
   "mnemonic":"⚠️ zjechać — только вниз · wyprowadzić się — съехать с квартиры · przejechać — проехать мимо."
  }
 ],
 "dialogue":{
   "intro":"Вечер того же дня. Марек приходит с обещанной новостью — и она большая. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Kupiłem mieszkanie. Naprawdę. Wziąłem kredyt.","ru":"Я купил квартиру. Правда. Взял кредит.",
      "words":[["mieszkanie","квартира"],["kredyt","кредит"]]},
     {"who":"A","name":"Anna","side":"left","en":"Marek! Oszczędzałeś dwa lata i nic nie mówiłeś?","ru":"Марек! Ты копил два года и ничего не говорил?",
      "words":[["Oszczędzałeś","ты копил"],["nic nie mówiłeś","ничего не говорил"]]},
     {"who":"M","name":"Marek","side":"right","en":"Bałem się, że nic z tego nie wyjdzie. W piątek podpisuję umowę.","ru":"Боялся, что ничего не выйдет. В пятницу подписываю договор.",
      "words":[["Bałem się","я боялся"],["umowę","договор"]]},
     {"who":"A","name":"Anna","side":"left","en":"Gdzie to jest? Blisko centrum?","ru":"Где это? Близко к центру?",
      "words":[["Gdzie","где"],["blisko","близко"]]},
     {"who":"M","name":"Marek","side":"right","en":"W Nowej Hucie. Dojazd do centrum to dwadzieścia minut tramwajem.","ru":"В Нова-Хуте. Дорога до центра — двадцать минут на трамвае.",
      "words":[["Dojazd","дорога до места"],["tramwajem","на трамвае"]]},
     {"who":"A","name":"Anna","side":"left","en":"To niedaleko. A jak dojadę do ciebie z dworca?","ru":"Это недалеко. А как я доеду до тебя с вокзала?",
      "words":[["niedaleko","недалеко"],["dojadę","доеду"]]},
     {"who":"M","name":"Marek","side":"right","en":"Wsiadasz w czwórkę i wysiadasz przy szkole. Nie przejedź przystanku.","ru":"Садишься на четвёрку и выходишь у школы. Не проезжай остановку.",
      "words":[["Wsiadasz","садишься"],["Nie przejedź","не проезжай"]]},
     {"who":"A","name":"Anna","side":"left","en":"Kiedy wyprowadzasz się ze starego mieszkania?","ru":"Когда съезжаешь со старой квартиры?",
      "words":[["wyprowadzasz się","съезжаешь"],["starego","старой"]]},
     {"who":"M","name":"Marek","side":"right","en":"Za tydzień. W sobotę przyjadą moi rodzice i brat.","ru":"Через неделю. В субботу приедут мои родители и брат.",
      "words":[["Za tydzień","через неделю"],["przyjadą","приедут"]]},
     {"who":"A","name":"Anna","side":"left","en":"Ja też przyjdę. Będę nosić pudła i mówić, gdzie postawić szafę.","ru":"Я тоже приду. Буду носить коробки и говорить, куда ставить шкаф.",
      "words":[["pudła","коробки"],["szafę","шкаф"]]}
   ]
 },
 "vocab":{
   "intro":"Слова дня — глаголы дороги и всё, что висит на вокзальном табло.",
   "items":[
     {"en":"przyjechać (przyjadę)","ru":"приехать","ex":"Przyjadę w piątek."},
     {"en":"wyjechać (wyjadę)","ru":"уехать, выехать","ex":"Wyjechał do Anglii na rok."},
     {"en":"dojechać (dojadę)","ru":"доехать","ex":"Jak dojechać do centrum?"},
     {"en":"wjechać / zjechać","ru":"въехать / съехать вниз","ex":"Zjechaliśmy windą na dół."},
     {"en":"przejechać","ru":"проехать (мимо, насквозь)","ex":"Przejechaliśmy nasz przystanek."},
     {"en":"wyprowadzić się","ru":"съехать с квартиры","ex":"Wyprowadzam się w sobotę."},
     {"en":"przyjazd / odjazd","ru":"приезд / отправление","ex":"Odjazd pociągu o czternastej."},
     {"en":"wyjazd / dojazd","ru":"поездка, отъезд / дорога до места","ex":"Dojazd zajmuje pół godziny."},
     {"en":"rozkład jazdy","ru":"расписание","ex":"Sprawdź rozkład jazdy."},
     {"en":"peron / opóźnienie","ru":"платформа / опоздание","ex":"Pociąg ma dziesięć minut opóźnienia."},
     {"en":"korek","ru":"пробка (на дороге)","ex":"Objechaliśmy korek boczną ulicą."},
     {"en":"umowa","ru":"договор","ex":"W piątek podpisuję umowę."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к переводу. Тут четыре существительных с одного корня.",
   "pairs":[["przyjazd","приезд"],["odjazd","отправление"],["wyjazd","поездка, отъезд"],["dojazd","дорога до места"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Марек рассказывает про новую квартиру и дорогу до неё.",
   "title":"Nowe mieszkanie",
   "sentences":["W piątek podpisuję umowę i mieszkanie jest moje.","Oszczędzałem dwa lata i w końcu wziąłem kredyt.","Mieszkanie jest w Nowej Hucie, na trzecim piętrze.","Dojazd do centrum zajmuje dwadzieścia minut.","Rano wyjeżdżam o wpół do ósmej i dojeżdżam bez korków.","Wieczorem wracam tramwajem i czasem przejeżdżam swój przystanek.","W sobotę przyjadą moi rodzice i brat.","Anna przyjdzie pieszo, bo mieszka blisko.","Za tydzień wyprowadzam się ze starego mieszkania.","Rok temu nie wierzyłem, że to się uda."],
   "translation":"В пятницу подписываю договор — и квартира моя. Я копил два года и в конце концов взял кредит. Квартира в Нова-Хуте, на третьем этаже. Дорога до центра занимает двадцать минут. Утром выезжаю в полвосьмого и доезжаю без пробок. Вечером возвращаюсь на трамвае и иногда проезжаю свою остановку. В субботу приедут мои родители и брат. Анна придёт пешком, потому что живёт близко. Через неделю съезжаю со старой квартиры. Год назад я не верил, что это получится."
 },
 "quiz":{
   "intro":"Шесть вопросов — и колёсная половина системы закреплена.",
   "items":[
     {"q":"1. «Я приеду в пятницу» —","opts":["Przyjdę w piątek","Przyjadę w piątek","Będę przyjechać w piątek"],"answer":1,
      "explain":"На транспорте — <b>przyjadę</b>. Przyjdę значит «приду пешком»."},
     {"q":"2. Анна о себе: «Я приехала поездом» —","opts":["Przyjechałem pociągiem","Przyjechała pociągiem","Przyjechałam pociągiem"],"answer":2,
      "explain":"Женщина о себе — <b>przyjechałam</b>."},
     {"q":"3. «Дорога до работы занимает час» —","opts":["Dojazd do pracy zajmuje godzinę","Odjazd do pracy zajmuje godzinę","Wjazd do pracy zajmuje godzinę"],"answer":0,
      "explain":"Как добираешься — <b>dojazd</b>."},
     {"q":"4. «Мы спустились вниз на лифте» —","opts":["Wjechaliśmy windą na dół","Zjechaliśmy windą na dół","Objechaliśmy windą na dół"],"answer":1,
      "explain":"Движение вниз — <b>zjechać</b>."},
     {"q":"5. «В субботу я съезжаю с квартиры» —","opts":["W sobotę zjeżdżam z mieszkania","W sobotę wyprowadzam się z mieszkania","W sobotę przejeżdżam mieszkanie"],"answer":1,
      "explain":"Сменить жильё — <b>wyprowadzać się</b>; zjeżdżam значило бы «съезжаю вниз»."},
     {"q":"6. На табло «Przyjazdy» — это —","opts":["прибытие","отправление","въезд"],"answer":0,
      "explain":"<b>Przyjazd</b> — приезд, прибытие; отправление — odjazd."}
   ]
 },
 "essay":{
   "intro":"Расскажи о своей дороге — той, которую проходишь чаще всего.",
   "prompt":"Напиши 4–6 предложений: во сколько ты выезжаешь, сколько занимает дорога, чем добираешься, куда уезжал(а) в последний раз и когда вернулся(лась).",
   "hint":"Каркас: Rano wyjeżdżam o… Dojazd zajmuje… Ostatnio wyjechałem / wyjechałam do… Przyjechałem / Przyjechałam w… 🚉",
   "example":"Rano wyjeżdżam z domu o wpół do ósmej. Dojazd do pracy zajmuje czterdzieści minut. Jadę tramwajem, bo samochodem stoję w korku. W maju wyjechałam na tydzień nad morze. Przyjechałam w niedzielę wieczorem, bardzo zmęczona. Następny wyjazd planuję we wrześniu."
 }
},
"3": {
 "day":3,"week":"01",
 "themeRu":"Приставка меняет всё",
 "themeEn":"Prefiks zmienia wszystko",
 "intro":"Возьми один корень — <b>pisać</b> — и надень на него те же кирпичи, что мы носили два дня. Получится <b>podpisać</b> (подписать), <b>zapisać</b> (записать), <b>przepisać</b> (переписать), <b>opisać</b> (описать), <b>dopisać</b> (дописать), <b>wypisać</b> (выписать). Шесть новых глаголов, ноль новой грамматики. А у Марека сегодня пятница — день, когда подписывают договор.",
 "introAudio":"Возьми один корень, pisać, и надень на него те же кирпичи, что мы носили два дня. Получится podpisać, подписать; zapisać, записать; przepisać, переписать; opisać, описать; dopisać, дописать; wypisać, выписать. Шесть новых глаголов, ноль новой грамматики. А у Марека сегодня пятница — день, когда подписывают договор.",
 "goals":[
   "Разбирать незнакомый глагол на приставку и корень — и угадывать смысл",
   "Собрать семью от <b>pisać</b>: podpisać, zapisać, przepisać, opisać, dopisać, wypisać",
   "Сделать то же с <b>czytać</b>: przeczytać, doczytać, poczytać, odczytać",
   "Не попасться: <b>odpisać</b> = ответить письменно, <b>przepis</b> = рецепт и правила"
 ],
 "learned":[
   "Разобрал(а) незнакомый глагол на приставку и корень",
   "Собрал(а) семью от pisać: podpisać, zapisać, przepisać, opisać, dopisać, wypisać",
   "Сделал(а) то же с czytać: przeczytać, doczytać, poczytać, odczytać",
   "Запомнил(а): odpisać = ответить письменно, przepis = рецепт и правила"
 ],
 "review":{
   "intro":"Вчерашние колёса — быстро и без подсказок. И один вопрос на позавчерашние ноги: система-то одна.",
   "introAudio":"Вчерашние колёса — быстро и без подсказок. И один вопрос на позавчерашние ноги: система-то одна.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> подумай, чем человек добирался.",
      "q":"«Я приехал автобусом» —","opts":["Przyszedłem autobusem","Przyjechałem autobusem","Wyjechałem autobusem"],"answer":1,
      "explain":"Транспорт — <b>przyjechałem</b>; пешком было бы przyszedłem."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни вокзальное табло.",
      "q":"«Дорога до центра занимает полчаса» —","opts":["Odjazd do centrum zajmuje pół godziny","Dojazd do centrum zajmuje pół godziny","Wyjazd do centrum zajmuje pół godziny"],"answer":1,
      "explain":"Как добираешься — <b>dojazd</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> движение вниз или наружу?",
      "q":"«Мы спустились на лифте» —","opts":["Zjechaliśmy windą","Wjechaliśmy windą","Wyjechaliśmy windą"],"answer":0,
      "explain":"Вниз — <b>zjechać</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит женщина.",
      "q":"Собери: <b>«Я приехала поездом в шесть»</b>","answer":"Przyjechałam pociągiem o szóstej"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · Словарная стратегия",
   "title":"Корень плюс приставка",
   "paras":[
     "Два дня мы возили приставки на глаголах движения. Но завод работает на любом корне — и это меняет твои отношения со словарём. Встретив незнакомый глагол, не лезь сразу в перевод: отдели приставку, посмотри на корень, сложи два знакомых смысла.",
     "Вот значения, которые приставки несут почти всегда. <b>do-</b> — до конца, до предела, добавить: dojechać, doczytać, dopisać. <b>prze-</b> — через, насквозь, заново: przejść, przeczytać, przepisać. <b>wy-</b> — наружу и до конца: wyjść, wypisać, wypić. <b>od-</b> — от, обратно, в ответ: odejść, odpisać. <b>pod-</b> — снизу, слегка: podpisać. <b>za-</b> — зафиксировать, начать: zapisać, zadzwonić. <b>o-</b> — вокруг, со всех сторон: opisać, obejść.",
     "Заметь, что этот список ты не учишь — ты его узнаёшь. Русские «до-», «пере-», «вы-», «от-», «под-», «за-», «о-» делают ровно то же и в тех же местах. Это единственная система такого масштаба, которая переносится из русского в польский почти без потерь.",
     "И честная оговорка: «почти». Пара глаголов на неделю выпадет из схемы — <b>odpisać</b> и <b>przepisać</b> мы разберём отдельно в конце дня. Но проверять догадку по словарю всё равно быстрее, чем учить слово с нуля."
   ],
   "audio":"Два дня мы возили приставки на глаголах движения. Но завод работает на любом корне — и это меняет твои отношения со словарём. Встретив незнакомый глагол, не лезь сразу в перевод: отдели приставку, посмотри на корень, сложи два знакомых смысла. Вот значения, которые приставки несут почти всегда. Do- — до конца, до предела, добавить: dojechać, doczytać, dopisać. Prze- — через, насквозь, заново: przejść, przeczytać, przepisać. Wy- — наружу и до конца: wyjść, wypisać, wypić. Od- — от, обратно, в ответ: odejść, odpisać. Pod- — снизу, слегка: podpisać. Za- — зафиксировать, начать: zapisać, zadzwonić. O- — вокруг, со всех сторон: opisać, obejść. Заметь, что этот список ты не учишь — ты его узнаёшь. Русские до-, пере-, вы-, от-, под-, за-, о- делают ровно то же и в тех же местах. И честная оговорка: почти. Пара глаголов на неделю выпадет из схемы: odpisać и przepisać мы разберём отдельно в конце дня. Но проверять догадку по словарю всё равно быстрее, чем учить слово с нуля.",
   "table":{"rows":[
     ["<b>do-</b> = до- <button class=\"play\" data-say=\"dojechać, doczytać\">🔊</button>","до конца, добавить: dojechać, doczytać"],
     ["<b>prze-</b> = пере-, про- <button class=\"play\" data-say=\"przejść, przeczytać\">🔊</button>","насквозь, заново: przejść, przepisać"],
     ["<b>wy-</b> = вы- <button class=\"play\" data-say=\"wyjść, wypisać\">🔊</button>","наружу, до конца: wyjść, wypisać"],
     ["<b>od-</b> = от-, ото- <button class=\"play\" data-say=\"odejść, odpisać\">🔊</button>","от, обратно, в ответ: odejść, odpisać"],
     ["<b>pod-</b> = под- <button class=\"play\" data-say=\"podpisać\">🔊</button>","снизу, слегка: podpisać"],
     ["<b>za-</b> = за- <button class=\"play\" data-say=\"zapisać, zadzwonić\">🔊</button>","зафиксировать, начать: zapisać"],
     ["<b>o-</b> = о-, об- <button class=\"play\" data-say=\"opisać\">🔊</button>","вокруг, со всех сторон: opisać"]
   ],"star":-1},
   "examples":[
     {"ru":"Я дочитал книгу вчера.","en":"<b>Doczytałem</b> książkę wczoraj.","say":"Doczytałem książkę wczoraj."},
     {"ru":"Подпиши здесь, пожалуйста.","en":"<b>Podpisz</b> tutaj, proszę.","say":"Podpisz tutaj, proszę."},
     {"ru":"Опиши мне эту квартиру.","en":"<b>Opisz</b> mi to mieszkanie.","say":"Opisz mi to mieszkanie."},
     {"ru":"Запиши мой номер.","en":"<b>Zapisz</b> mój numer.","say":"Zapisz mój numer."}
   ],
   "mnemonic":"🔧 Приставка + корень = новое слово. Разбирай, а не заучивай: do- до конца · prze- заново · wy- наружу · pod- под.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> сложи смысл приставки и корня.",
      "q":"Глагол <b>doczytać</b> скорее всего значит —","opts":["почитать немного","дочитать до конца","перечитать заново"],"answer":1,
      "explain":"Приставка do- — «до предела»: <b>doczytać</b> = дочитать."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, что делает приставка pod-.",
      "q":"«Подписать договор» —","opts":["zapisać umowę","podpisać umowę","dopisać umowę"],"answer":1,
      "explain":"Под текстом, снизу — <b>podpisać</b>, ровно как по-русски."},
     {"type":"choice","howto":"<b>Что делать:</b> какая приставка значит «вокруг, со всех сторон»?",
      "q":"«Описать комнату» —","opts":["opisać pokój","przepisać pokój","wypisać pokój"],"answer":0,
      "explain":"Приставка o- — вокруг, со всех сторон: <b>opisać</b>."}
   ]
  },
  {
   "eyebrow":"Правило 2 · Семья pisać",
   "title":"Шесть глаголов из одного",
   "paras":[
     "<b>podpisać</b> — подписать: <b>Podpisałem umowę.</b> Существительное — <b>podpis</b>, подпись. <b>zapisać</b> — записать: <b>Zapisz mój numer.</b> И очень частое возвратное: <b>zapisać się na kurs</b> — записаться на курс.",
     "<b>przepisać</b> — переписать (набело, заново): <b>Przepisałam cały tekst.</b> <b>opisać</b> — описать: <b>Opisz mi to mieszkanie.</b> <b>dopisać</b> — дописать, добавить в конце: <b>Dopisz mnie do listy.</b>",
     "<b>wypisać</b> — выписать наружу: выписать данные из документа, выписать рецепт (<b>wypisać receptę</b>), выписать пациента из больницы (<b>Wypisali go ze szpitala w piątek</b>). Возвратное <b>wypisać się</b> значит «отписаться, выйти из списка»: <b>wypisać się z newslettera</b>.",
     "Спряжение у всех одно и знакомое, от <b>pisać → piszę</b>: <b>podpiszę, zapiszę, przepiszę, opiszę, dopiszę, wypiszę</b>. Прошедшее правильное: <b>podpisałem / podpisałam</b>. Все шестеро — совершенного вида, а несовершенные пары идут на <b>-ywać</b>: <b>podpisywać, zapisywać, przepisywać, opisywać</b>."
   ],
   "audio":"Podpisać — подписать: podpisałem umowę. Существительное podpis, подпись. Zapisać — записать: zapisz mój numer. И очень частое возвратное: zapisać się na kurs, записаться на курс. Przepisać — переписать набело, заново: przepisałam cały tekst. Opisać — описать: opisz mi to mieszkanie. Dopisać — дописать, добавить в конце: dopisz mnie do listy. Wypisać — выписать наружу: выписать данные из документа, выписать рецепт, wypisać receptę; выписать пациента из больницы, wypisali go ze szpitala w piątek. Возвратное wypisać się значит отписаться, выйти из списка: wypisać się z newslettera. Спряжение у всех одно и знакомое, от pisać, piszę: podpiszę, zapiszę, przepiszę, opiszę, dopiszę, wypiszę. Прошедшее правильное: podpisałem, podpisałam. Все шестеро совершенного вида, а несовершенные пары идут на -ywać: podpisywać, zapisywać, przepisywać, opisywać.",
   "table":{"rows":[
     ["<b>podpisać</b> umowę <button class=\"play\" data-say=\"podpisać umowę\">🔊</button>","подписать договор · podpis — подпись"],
     ["<b>zapisać</b> numer <button class=\"play\" data-say=\"zapisać numer\">🔊</button>","записать номер"],
     ["<b>zapisać się</b> na kurs <button class=\"play\" data-say=\"zapisać się na kurs\">🔊</button>","записаться на курс"],
     ["<b>przepisać</b> tekst <button class=\"play\" data-say=\"przepisać tekst\">🔊</button>","переписать текст"],
     ["<b>opisać</b> mieszkanie <button class=\"play\" data-say=\"opisać mieszkanie\">🔊</button>","описать квартиру · opis — описание"],
     ["<b>dopisać</b> do listy <button class=\"play\" data-say=\"dopisać do listy\">🔊</button>","дописать в список"],
     ["<b>wypisać</b> receptę <button class=\"play\" data-say=\"wypisać receptę\">🔊</button>","выписать рецепт"]
   ],"star":0},
   "examples":[
     {"ru":"Вчера я подписал договор.","en":"Wczoraj <b>podpisałem</b> umowę.","gloss":"женщина скажет: podpisałam","say":"Wczoraj podpisałem umowę."},
     {"ru":"Я записалась на курс польского.","en":"<b>Zapisałam się</b> na kurs polskiego.","say":"Zapisałam się na kurs polskiego."},
     {"ru":"Допиши меня в список.","en":"<b>Dopisz</b> mnie do listy.","say":"Dopisz mnie do listy."},
     {"ru":"Врач выписал рецепт.","en":"Lekarz <b>wypisał</b> receptę.","say":"Lekarz wypisał receptę."},
     {"ru":"Опиши, как выглядит твоя квартира.","en":"<b>Opisz</b>, jak wygląda twoje mieszkanie.","say":"Opisz, jak wygląda twoje mieszkanie."}
   ],
   "mistakes":[
     {"wrong":"Zapisałem umowę.","right":"<b>Podpisałem</b> umowę.","why":"договор подписывают снизу — pod-. Zapisać значит «записать, зафиксировать»."},
     {"wrong":"Zapisałam na kurs.","right":"<b>Zapisałam się</b> na kurs.","why":"записаться самому — возвратное się, как и в русском «-ся»."}
   ],
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, какая приставка идёт под текстом.",
      "q":"«В пятницу я подпишу договор» —","opts":["W piątek zapiszę umowę","W piątek podpiszę umowę","W piątek przepiszę umowę"],"answer":1,
      "explain":"<b>Podpiszę</b> — поставлю подпись. Przepiszę значило бы «перепишу заново»."},
     {"type":"choice","howto":"<b>Что делать:</b> нужно ли тут się?",
      "q":"«Я записался на курс» —","opts":["Zapisałem na kurs","Zapisałem się na kurs","Wypisałem się na kurs"],"answer":1,
      "explain":"Себя записывают через <b>się</b>: zapisałem się."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«Запиши мой номер»","accept":["zapisz mój numer","zapisz moj numer"],"placeholder":"Zapisz…"}
   ]
  },
  {
   "eyebrow":"Правило 3 · То же с чтением",
   "title":"<em>przeczytać, doczytać, poczytać, odczytać</em>",
   "paras":[
     "Корень <b>czytać</b> ведёт себя как pisać, только приставок к нему прирастает меньше. <b>przeczytać</b> — прочитать (знакомо с A2): <b>Przeczytałem tę książkę w tydzień.</b>",
     "<b>doczytać</b> — дочитать до конца: <b>Nie doczytałam do końca, zasnęłam.</b> <b>poczytać</b> — почитать немного, без цели: <b>Poczytam pół godziny i pójdę spać.</b> Оттенок «немного» у приставки po- совпадает с русским полностью.",
     "<b>odczytać</b> — разобрать написанное или зачитать вслух: <b>Nie mogę odczytać tego podpisu</b> («не могу разобрать эту подпись»), <b>Odczytał list na głos.</b>",
     "И тот же приём работает дальше: <b>wypić</b> (выпить) и <b>dopić</b> (допить), <b>zjeść</b> (съесть) и <b>dojeść</b> (доесть), <b>zrobić</b> (сделать) и <b>przerobić</b> (переделать). Один раз поняв правило, ты собираешь такие пары сам(а)."
   ],
   "audio":"Корень czytać ведёт себя как pisać, только приставок к нему прирастает меньше. Przeczytać — прочитать, знакомо с уровня A2: przeczytałem tę książkę w tydzień. Doczytać — дочитать до конца: nie doczytałam do końca, zasnęłam. Poczytać — почитать немного, без цели: poczytam pół godziny i pójdę spać. Оттенок «немного» у приставки po- совпадает с русским полностью. Odczytać — разобрать написанное или зачитать вслух: nie mogę odczytać tego podpisu, не могу разобрать эту подпись; odczytał list na głos. И тот же приём работает дальше: wypić, выпить, и dopić, допить; zjeść, съесть, и dojeść, доесть; zrobić, сделать, и przerobić, переделать. Один раз поняв правило, ты собираешь такие пары сам.",
   "table":{"rows":[
     ["<b>przeczytać</b> książkę <button class=\"play\" data-say=\"przeczytać książkę\">🔊</button>","прочитать книгу"],
     ["<b>doczytać</b> do końca <button class=\"play\" data-say=\"doczytać do końca\">🔊</button>","дочитать до конца"],
     ["<b>poczytać</b> pół godziny <button class=\"play\" data-say=\"poczytać pół godziny\">🔊</button>","почитать полчаса"],
     ["<b>odczytać</b> podpis <button class=\"play\" data-say=\"odczytać podpis\">🔊</button>","разобрать подпись"],
     ["wypić / <b>dopić</b> kawę <button class=\"play\" data-say=\"wypić, dopić kawę\">🔊</button>","выпить / допить кофе"],
     ["zjeść / <b>dojeść</b> obiad <button class=\"play\" data-say=\"zjeść, dojeść obiad\">🔊</button>","съесть / доесть обед"]
   ],"star":1},
   "examples":[
     {"ru":"Я не дочитала до конца — уснула.","en":"Nie <b>doczytałam</b> do końca — zasnęłam.","say":"Nie doczytałam do końca, zasnęłam."},
     {"ru":"Почитаю полчаса и пойду спать.","en":"<b>Poczytam</b> pół godziny i pójdę spać.","say":"Poczytam pół godziny i pójdę spać."},
     {"ru":"Не могу разобрать эту подпись.","en":"Nie mogę <b>odczytać</b> tego podpisu.","say":"Nie mogę odczytać tego podpisu."},
     {"ru":"Допей кофе, нам пора.","en":"<b>Dopij</b> kawę, musimy iść.","say":"Dopij kawę, musimy iść."}
   ],
   "mistakes":[
     {"wrong":"Poczytałem całą książkę w tydzień.","right":"<b>Przeczytałem</b> całą książkę w tydzień.","why":"вся книга и результат — przeczytać. Poczytać значит «почитать немного», как и по-русски."}
   ],
   "mnemonic":"📖 przeczytać прочитать · doczytać дочитать · poczytać почитать · odczytać разобрать.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> смотри, есть ли результат.",
      "q":"«Я прочитал всю книгу» —","opts":["Poczytałem całą książkę","Przeczytałem całą książkę","Odczytałem całą książkę"],"answer":1,
      "explain":"Вся книга до конца — <b>przeczytałem</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> приставка po- даёт оттенок «немного».",
      "q":"«Почитаю полчаса перед сном» —","opts":["Przeczytam pół godziny","Poczytam pół godziny","Doczytam pół godziny"],"answer":1,
      "explain":"Немного, без цели дочитать — <b>poczytam</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Допей кофе, нам пора идти»</b>","answer":"Dopij kawę musimy iść"}
   ]
  },
  {
   "eyebrow":"Правило 4 · Где подсказка обманывает",
   "title":"<em>odpisać</em>, <em>przepisać</em>, <em>przepis</em>",
   "paras":[
     "Первое расхождение: <b>odpisać</b>. По-русски «отписать» звучит как канцелярит, а в польском это обычное слово со значением «ответить письменно»: <b>Napisałem do niej wczoraj, ale jeszcze nie odpisała</b> — «написал ей вчера, но она ещё не ответила». Второе, школьное значение — «списать у соседа»: <b>odpisać od kolegi</b>.",
     "Второе: <b>przepisać</b>. «Переписать» — да, но у врача это слово значит «прописать, назначить лекарство»: <b>Lekarz przepisał mi antybiotyk.</b> Русское «переписал антибиотик» звучало бы дико — а по-польски это норма.",
     "Третье, и самое частое в жизни: существительное <b>przepis</b>. Это <b>рецепт блюда</b> (<b>przepis na sernik</b> — рецепт чизкейка) и <b>правило, предписание</b> (<b>przepisy ruchu drogowego</b> — правила дорожного движения). А рецепт от врача — совсем другое слово: <b>recepta</b>.",
     "Больше расхождений в семье pisać нет. Остальные шесть глаголов ведут себя ровно так, как подсказывает русский, — и это очень хорошее соотношение."
   ],
   "audio":"Первое расхождение: odpisać. По-русски «отписать» звучит как канцелярит, а в польском это обычное слово со значением «ответить письменно»: napisałem do niej wczoraj, ale jeszcze nie odpisała — написал ей вчера, но она ещё не ответила. Второе, школьное значение — списать у соседа: odpisać od kolegi. Второе расхождение: przepisać. Переписать — да, но у врача это слово значит прописать, назначить лекарство: lekarz przepisał mi antybiotyk. Русское «переписал антибиотик» звучало бы дико, а по-польски это норма. Третье, и самое частое в жизни: существительное przepis. Это рецепт блюда, przepis na sernik, и правило или предписание, przepisy ruchu drogowego. А рецепт от врача — совсем другое слово: recepta. Больше расхождений в семье pisać нет. Остальные шесть глаголов ведут себя ровно так, как подсказывает русский, и это очень хорошее соотношение.",
   "table":{"rows":[
     ["<b>odpisać</b> na list <button class=\"play\" data-say=\"odpisać na list\">🔊</button>","ответить на письмо"],
     ["<b>odpisać</b> od kolegi <button class=\"play\" data-say=\"odpisać od kolegi\">🔊</button>","списать у одноклассника"],
     ["lekarz <b>przepisał</b> lek <button class=\"play\" data-say=\"lekarz przepisał lek\">🔊</button>","врач прописал лекарство"],
     ["<b>przepis</b> na sernik <button class=\"play\" data-say=\"przepis na sernik\">🔊</button>","рецепт чизкейка"],
     ["<b>przepisy</b> ruchu drogowego <button class=\"play\" data-say=\"przepisy ruchu drogowego\">🔊</button>","правила дорожного движения"],
     ["<b>recepta</b> od lekarza <button class=\"play\" data-say=\"recepta od lekarza\">🔊</button>","рецепт от врача"]
   ],"star":3},
   "examples":[
     {"ru":"Я написал ей вчера, но она ещё не ответила.","en":"Napisałem do niej wczoraj, ale jeszcze nie <b>odpisała</b>.","say":"Napisałem do niej wczoraj, ale jeszcze nie odpisała."},
     {"ru":"Ответь ей, пожалуйста, сегодня.","en":"<b>Odpisz</b> jej, proszę, dzisiaj.","say":"Odpisz jej, proszę, dzisiaj."},
     {"ru":"Врач прописал мне антибиотик.","en":"Lekarz <b>przepisał</b> mi antybiotyk.","say":"Lekarz przepisał mi antybiotyk."},
     {"ru":"Дай мне рецепт этого пирога.","en":"Daj mi <b>przepis</b> na to ciasto.","say":"Daj mi przepis na to ciasto."},
     {"ru":"Тут такие правила, ничего не поделаешь.","en":"Takie są <b>przepisy</b>, nic nie poradzę.","say":"Takie są przepisy, nic nie poradzę."}
   ],
   "mistakes":[
     {"wrong":"Jeszcze nie napisała mi z powrotem.","right":"Jeszcze nie <b>odpisała</b>.","why":"«ответить письменно» — одно слово odpisać; конструкция с «обратно» тут калька."},
     {"wrong":"Lekarz dał mi przepis na antybiotyk.","right":"Lekarz dał mi <b>receptę</b> na antybiotyk.","why":"рецепт от врача — recepta. Przepis — это рецепт блюда или правило."}
   ],
   "mnemonic":"⚠️ odpisać — ответить письменно · przepisać lek — прописать лекарство · przepis — рецепт блюда или правило · recepta — от врача.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> речь о письме, а не о бумаге.",
      "q":"«Она мне ещё не ответила (на сообщение)» —","opts":["Jeszcze mi nie odpisała","Jeszcze mi nie przepisała","Jeszcze mi nie dopisała"],"answer":0,
      "explain":"Ответить письменно — <b>odpisać</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, какое слово живёт на кухне.",
      "q":"«Рецепт чизкейка» —","opts":["recepta na sernik","przepis na sernik","podpis na sernik"],"answer":1,
      "explain":"Рецепт блюда — <b>przepis</b>; recepta бывает только от врача."},
     {"type":"choice","howto":"<b>Что делать:</b> кто и что делает с лекарством?",
      "q":"«Врач прописал мне лекарство» —","opts":["Lekarz opisał mi lek","Lekarz przepisał mi lek","Lekarz dopisał mi lek"],"answer":1,
      "explain":"У врача <b>przepisać</b> значит «назначить, прописать»."}
   ]
  }
 ],
 "dialogue":{
   "intro":"Пятница, банк, две подписи и кофе после. Анна поехала с Мареком — за компанию и за спокойствием.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Mam podpisać w trzech miejscach. Trzy razy to samo nazwisko.","ru":"Мне надо подписать в трёх местах. Три раза одна и та же фамилия.",
      "words":[["podpisać","подписать"],["nazwisko","фамилия"]]},
     {"who":"A","name":"Anna","side":"left","en":"Przeczytaj najpierw wszystko. Nie podpisuj w biegu.","ru":"Сначала всё прочитай. Не подписывай на бегу.",
      "words":[["Przeczytaj","прочитай"],["w biegu","на бегу"]]},
     {"who":"M","name":"Marek","side":"right","en":"Czytałem wczoraj wieczorem, ale nie doczytałem do końca.","ru":"Читал вчера вечером, но не дочитал до конца.",
      "words":[["nie doczytałem","не дочитал"],["do końca","до конца"]]},
     {"who":"A","name":"Anna","side":"left","en":"To poczytaj teraz. Ja zapiszę sobie numer umowy.","ru":"Тогда почитай сейчас. А я запишу себе номер договора.",
      "words":[["poczytaj","почитай"],["zapiszę","запишу"]]},
     {"who":"M","name":"Marek","side":"right","en":"Tu jest opis mieszkania. Metraż się zgadza.","ru":"Вот описание квартиры. Метраж сходится.",
      "words":[["opis","описание"],["się zgadza","сходится"]]},
     {"who":"A","name":"Anna","side":"left","en":"A ten podpis na dole? Nie mogę go odczytać.","ru":"А эта подпись внизу? Не могу её разобрать.",
      "words":[["podpis","подпись"],["odczytać","разобрать"]]},
     {"who":"M","name":"Marek","side":"right","en":"To pani z banku. Napisałem do niej w środę, odpisała po godzinie.","ru":"Это женщина из банка. Я написал ей в среду — ответила через час.",
      "words":[["odpisała","ответила письменно"],["po godzinie","через час"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dobrze. Podpisuj. I dopisz datę, bo o niej zapomniałeś.","ru":"Хорошо. Подписывай. И допиши дату — ты про неё забыл.",
      "words":[["dopisz","допиши"],["datę","дату"]]},
     {"who":"M","name":"Marek","side":"right","en":"Gotowe. Mieszkanie moje. Ręka mi drży.","ru":"Готово. Квартира моя. У меня рука дрожит.",
      "words":[["Gotowe","готово"],["drży","дрожит"]]},
     {"who":"A","name":"Anna","side":"left","en":"To teraz kawa. Ja stawiam.","ru":"Тогда теперь кофе. Я угощаю.",
      "words":[["kawa","кофе"],["Ja stawiam","я угощаю"]]}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — одна семья глаголов и три существительных, которые из неё выросли.",
   "items":[
     {"en":"podpisać / podpis","ru":"подписать / подпись","ex":"Podpisałem umowę."},
     {"en":"zapisać / zapisać się","ru":"записать / записаться","ex":"Zapisałam się na kurs polskiego."},
     {"en":"przepisać","ru":"переписать; прописать (о враче)","ex":"Lekarz przepisał mi antybiotyk."},
     {"en":"opisać / opis","ru":"описать / описание","ex":"Opisz mi to mieszkanie."},
     {"en":"dopisać","ru":"дописать, добавить","ex":"Dopisz mnie do listy."},
     {"en":"wypisać","ru":"выписать (рецепт, из больницы)","ex":"Wypisali go ze szpitala w piątek."},
     {"en":"odpisać","ru":"ответить письменно","ex":"Odpisała po godzinie."},
     {"en":"doczytać / poczytać","ru":"дочитать / почитать","ex":"Nie doczytałam do końca."},
     {"en":"odczytać","ru":"разобрать (написанное), зачитать","ex":"Nie mogę odczytać tego podpisu."},
     {"en":"przepis","ru":"рецепт блюда; правило","ex":"Przepis na sernik jest prosty."},
     {"en":"recepta","ru":"рецепт от врача","ex":"Mam receptę na antybiotyk."},
     {"en":"umowa","ru":"договор","ex":"Umowa jest na dwa lata."}
   ]
 },
 "drag":{
   "intro":"Перетащи глагол к его значению. Приставка расскажет почти всё.",
   "pairs":[["podpisać","подписать"],["zapisać","записать"],["przepisać","переписать"],["odpisać","ответить письменно"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Анна описывает эту пятницу. Обрати внимание, сколько раз тут появляется корень pisać.",
   "title":"Piątek w banku",
   "sentences":["W piątek pojechaliśmy z Markiem do banku.","Marek miał podpisać umowę na mieszkanie.","Najpierw przeczytał wszystko jeszcze raz.","Wieczorem czytał to w domu, ale nie doczytał do końca.","W umowie był dokładny opis mieszkania.","Ja zapisałam sobie numer umowy i adres.","Marek podpisał w trzech miejscach i dopisał datę.","Potem napisał do rodziców, a mama odpisała od razu.","Wyszliśmy z banku o wpół do drugiej.","Na kawę poszliśmy do małej kawiarni obok."],
   "translation":"В пятницу мы с Мареком поехали в банк. Мареку надо было подписать договор на квартиру. Сначала он ещё раз всё прочитал. Вечером читал это дома, но не дочитал до конца. В договоре было подробное описание квартиры. Я записала себе номер договора и адрес. Марек подписал в трёх местах и дописал дату. Потом написал родителям, а мама сразу ответила. Мы вышли из банка в половине второго. На кофе пошли в маленькую кофейню рядом."
 },
 "quiz":{
   "intro":"Шесть вопросов — проверим, слышишь ли ты приставку.",
   "items":[
     {"q":"1. «Я подписал договор» —","opts":["Zapisałem umowę","Podpisałem umowę","Przepisałem umowę"],"answer":1,
      "explain":"Подпись ставят снизу — <b>podpisać</b>."},
     {"q":"2. «Я записалась на курс» —","opts":["Zapisałam się na kurs","Zapisałam na kurs","Wypisałam się na kurs"],"answer":0,
      "explain":"Себя записывают через <b>się</b>: zapisałam się."},
     {"q":"3. «Она мне ещё не ответила на сообщение» —","opts":["Jeszcze mi nie opisała","Jeszcze mi nie odpisała","Jeszcze mi nie dopisała"],"answer":1,
      "explain":"Ответить письменно — <b>odpisać</b>."},
     {"q":"4. «Врач прописал мне лекарство» —","opts":["Lekarz przepisał mi lek","Lekarz opisał mi lek","Lekarz podpisał mi lek"],"answer":0,
      "explain":"У врача <b>przepisać</b> = назначить, прописать."},
     {"q":"5. «Рецепт чизкейка» —","opts":["recepta na sernik","podpis na sernik","przepis na sernik"],"answer":2,
      "explain":"Рецепт блюда — <b>przepis</b>; recepta бывает только от врача."},
     {"q":"6. Что значит <b>doczytać</b>?","opts":["почитать немного","дочитать до конца","прочитать вслух"],"answer":1,
      "explain":"Приставка do- — до предела: <b>doczytać</b> = дочитать."}
   ]
 },
 "essay":{
   "intro":"Сегодняшний текст — про бумаги, но с человеческой стороны.",
   "prompt":"Напиши 4–6 предложений: что ты в последний раз подписывал(а), что записываешь себе постоянно, куда записывался(лась) в этом году, дочитал(а) ли последнюю книгу.",
   "hint":"Каркас: Ostatnio podpisałem / podpisałam… Zawsze zapisuję… W tym roku zapisałem się / zapisałam się na… Ostatniej książki nie doczytałem / nie doczytałam… ✍️",
   "example":"Ostatnio podpisałam nową umowę w pracy. Zawsze zapisuję sobie terminy w telefonie, bo inaczej zapominam. W tym roku zapisałam się na kurs polskiego i na basen. Ostatnią książkę czytałam trzy tygodnie i nie doczytałam do końca. Wieczorem wolę poczytać coś krótkiego. Do siostry napisałam w środę, ale jeszcze nie odpisała."
 }
},
"4": {
 "day":4,"week":"01",
 "themeRu":"Бегу или бегаю",
 "themeEn":"Biec — biegać, lecieć — latać",
 "intro":"Бегу или бегаю? Лечу или летаю? Несу или ношу? Ты различаешь это на родном языке с детства, а на A2 уже проделал(а) то же самое с <b>idę / chodzę</b> и <b>jadę / jeżdżę</b>. Сегодня забираем оставшиеся пять пар целиком — и заодно узнаём, что по-польски время тоже «летит».",
 "introAudio":"Бегу или бегаю? Лечу или летаю? Несу или ношу? Ты различаешь это на родном языке с детства, а на уровне A2 та же работа уже была проделана с парами idę и chodzę, jadę и jeżdżę. Сегодня забираем оставшиеся пять пар целиком — и заодно узнаём, что по-польски время тоже летит.",
 "goals":[
   "Различать пары: <b>biec / biegać</b>, <b>lecieć / latać</b>, <b>płynąć / pływać</b>",
   "Пользоваться <b>nieść / nosić</b> и <b>wieźć / wozić</b> — «несу/ношу», «везу/вожу»",
   "Ставить их в прошедшее: <b>niosłem, niósł, niosła; wiozłem, wiózł</b>",
   "Понимать переносные значения: <b>czas leci</b>, <b>czas płynie</b>, <b>nosić okulary</b>"
 ],
 "learned":[
   "Различил(а) пары: biec / biegać, lecieć / latać, płynąć / pływać",
   "Воспользовался(лась) парами nieść / nosić и wieźć / wozić",
   "Поставил(а) их в прошедшее: niosłem, niósł, niosła; wiozłem, wiózł",
   "Понял(а) переносные значения: czas leci, czas płynie, nosić okulary"
 ],
 "review":{
   "intro":"Вчерашняя семья от <b>pisać</b> — и один вопрос про приставку на другом корне. Смотри на приставку, а не на слово целиком.",
   "introAudio":"Вчерашняя семья от pisać — и один вопрос про приставку на другом корне. Смотри на приставку, а не на слово целиком.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> где ставят подпись?",
      "q":"«Он подписал договор» —","opts":["Zapisał umowę","Podpisał umowę","Opisał umowę"],"answer":1,
      "explain":"Подпись идёт снизу — <b>podpisał</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> речь о письме, не о бумаге.",
      "q":"«Она ответила мне через час» —","opts":["Odpisała mi po godzinie","Przepisała mi po godzinie","Dopisała mi po godzinie"],"answer":0,
      "explain":"Ответить письменно — <b>odpisać</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни кухонное слово.",
      "q":"«У меня есть хороший рецепт супа» —","opts":["Mam dobrą receptę na zupę","Mam dobry przepis na zupę","Mam dobry podpis na zupę"],"answer":1,
      "explain":"Рецепт блюда — <b>przepis</b>; recepta бывает только от врача."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Запиши мой номер, пожалуйста»</b>","answer":"Zapisz mój numer proszę"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · Пять пар",
   "title":"«Бегу» и «бегаю» — знакомая развилка",
   "paras":[
     "На A2 ты выучил(а) две пары движения: <b>iść / chodzić</b> и <b>jechać / jeździć</b>. Логика была русская: одно направленное движение сейчас — или движение вообще, регулярное, туда-обратно. Оставшиеся пары устроены так же, и переводятся тоже парами.",
     "<b>biec / biegać</b> — бежать / бегать. <b>lecieć / latać</b> — лететь / летать. <b>płynąć / pływać</b> — плыть / плавать. <b>nieść / nosić</b> — нести / носить. <b>wieźć / wozić</b> — везти / возить.",
     "Русская подсказка тут работает целиком: где по-русски ты сказал(а) бы «бегу», по-польски будет <b>biegnę</b>; где «бегаю» — <b>biegam</b>. <b>Biegnę na autobus</b> — бегу на автобус (сейчас). <b>Biegam co rano</b> — бегаю каждое утро.",
     "И маркеры те же, что были с idę / chodzę: <b>teraz, właśnie, dziś</b> тянут первый глагол; <b>codziennie, co rano, zawsze, często</b> — второй."
   ],
   "audio":"На уровне A2 появились две пары движения: iść и chodzić, jechać и jeździć. Логика была русская: одно направленное движение сейчас — или движение вообще, регулярное, туда-обратно. Оставшиеся пары устроены так же, и переводятся тоже парами. Biec и biegać — бежать и бегать. Lecieć и latać — лететь и летать. Płynąć и pływać — плыть и плавать. Nieść и nosić — нести и носить. Wieźć и wozić — везти и возить. Русская подсказка тут работает целиком: где по-русски просится «бегу», по-польски будет biegnę; где «бегаю» — biegam. Biegnę na autobus, бегу на автобус сейчас. Biegam co rano, бегаю каждое утро. И маркеры те же, что были с idę и chodzę: teraz, właśnie, dziś тянут первый глагол; codziennie, co rano, zawsze, często — второй.",
   "table":{"rows":[
     ["<b>biec</b> / <b>biegać</b> <button class=\"play\" data-say=\"biec, biegać\">🔊</button>","бежать / бегать"],
     ["<b>lecieć</b> / <b>latać</b> <button class=\"play\" data-say=\"lecieć, latać\">🔊</button>","лететь / летать"],
     ["<b>płynąć</b> / <b>pływać</b> <button class=\"play\" data-say=\"płynąć, pływać\">🔊</button>","плыть / плавать"],
     ["<b>nieść</b> / <b>nosić</b> <button class=\"play\" data-say=\"nieść, nosić\">🔊</button>","нести / носить"],
     ["<b>wieźć</b> / <b>wozić</b> <button class=\"play\" data-say=\"wieźć, wozić\">🔊</button>","везти / возить"],
     ["Biegnę na autobus. · Biegam co rano. <button class=\"play\" data-say=\"Biegnę na autobus. Biegam co rano.\">🔊</button>","Бегу на автобус. · Бегаю каждое утро."]
   ],"star":0},
   "examples":[
     {"ru":"Я бегу на автобус.","en":"<b>Biegnę</b> na autobus.","say":"Biegnę na autobus."},
     {"ru":"Я бегаю каждое утро в парке.","en":"<b>Biegam</b> co rano w parku.","say":"Biegam co rano w parku."},
     {"ru":"Самолёт летит в Рим.","en":"Samolot <b>leci</b> do Rzymu.","say":"Samolot leci do Rzymu."},
     {"ru":"Я летаю два раза в год.","en":"<b>Latam</b> dwa razy w roku.","say":"Latam dwa razy w roku."},
     {"ru":"Она хорошо плавает.","en":"Ona dobrze <b>pływa</b>.","say":"Ona dobrze pływa."}
   ],
   "mistakes":[
     {"wrong":"Co rano biegnę w parku.","right":"Co rano <b>biegam</b> w parku.","why":"регулярность — biegać. Так же и по-русски: «каждое утро бегаю», а не «бегу»."},
     {"wrong":"Teraz latam do Warszawy.","right":"Teraz <b>lecę</b> do Warszawy.","why":"один конкретный рейс сейчас — lecieć. Latam значит «летаю вообще»."}
   ],
   "mnemonic":"🏃 Спроси себя по-русски: «бегу» или «бегаю»? Ответ и будет польским глаголом.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> ищи слово-маркер.",
      "q":"«Каждое утро я бегаю в парке» — Co rano ___ w parku.","opts":["biegnę","biegam","biegł"],"answer":1,
      "explain":"Регулярность — <b>biegam</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> один рейс или привычка?",
      "q":"«Завтра я лечу в Гданьск» — Jutro ___ do Gdańska.","opts":["latam","lecę","płynę"],"answer":1,
      "explain":"Один конкретный полёт — <b>lecę</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> сколько раз в год — это про привычку.",
      "q":"«Я летаю два раза в год» —","opts":["Lecę dwa razy w roku","Latam dwa razy w roku","Leciałem dwa razy w roku"],"answer":1,
      "explain":"Повторяющееся действие — <b>latam</b>."}
   ]
  },
  {
   "eyebrow":"Правило 2 · Формы",
   "title":"<em>biegnę, lecę, płynę</em> — и их прошедшее",
   "paras":[
     "Три «направленных» глагола нужно посмотреть в лицо, у них есть маленькие сюрпризы в основе. <b>biec</b>: biegnę, biegniesz, biegnie, biegniemy, biegniecie, biegną — в настоящем вырастает <b>-gn-</b>. Прошедшее ровное: <b>biegłem / biegłam</b>, <b>biegł / biegła</b>, <b>biegli / biegły</b>.",
     "<b>lecieć</b>: lecę, lecisz, leci, lecimy, lecicie, lecą — обычный глагол на -eć. Прошедшее по знакомому образцу: <b>leciałem / leciałam</b>, <b>leciał / leciała</b>, а перед -li гласная меняется: <b>lecieli / leciały</b>. Тот же фокус, что у miał — mieli.",
     "<b>płynąć</b>: płynę, płyniesz, płynie, płyną. Прошедшее с носовой гласной: <b>płynąłem / płynęłam</b>, <b>płynął / płynęła</b>, <b>płynęli / płynęły</b>.",
     "А их партнёры — самые обычные глаголы, каких много: <b>biegam, biegasz</b>; <b>latam, latasz</b>; <b>pływam, pływasz</b>. Прошедшее у них полностью правильное: biegałem, latałam, pływaliśmy."
   ],
   "audio":"Три направленных глагола нужно посмотреть в лицо, у них есть маленькие сюрпризы в основе. Biec: biegnę, biegniesz, biegnie, biegniemy, biegniecie, biegną — в настоящем вырастает gn. Прошедшее ровное: biegłem, biegłam, biegł, biegła, biegli, biegły. Lecieć: lecę, lecisz, leci, lecimy, lecicie, lecą — обычный глагол на -eć. Прошедшее по знакомому образцу: leciałem, leciałam, leciał, leciała, а перед -li гласная меняется: lecieli, leciały. Тот же фокус, что у miał и mieli. Płynąć: płynę, płyniesz, płynie, płyną. Прошедшее с носовой гласной: płynąłem, płynęłam, płynął, płynęła, płynęli, płynęły. А их партнёры — самые обычные глаголы: biegam, biegasz; latam, latasz; pływam, pływasz. Прошедшее у них полностью правильное: biegałem, latałam, pływaliśmy.",
   "table":{"rows":[
     ["<b>biegnę / biegniesz / biegnie</b> <button class=\"play\" data-say=\"biegnę, biegniesz, biegnie\">🔊</button>","бегу / бежишь / бежит"],
     ["<b>biegłem / biegłam</b> · on <b>biegł</b> <button class=\"play\" data-say=\"biegłem, biegłam, biegł\">🔊</button>","я бежал(а) · он бежал"],
     ["<b>lecę / lecisz / leci</b> <button class=\"play\" data-say=\"lecę, lecisz, leci\">🔊</button>","лечу / летишь / летит"],
     ["<b>leciałem</b> · oni <b>lecieli</b> <button class=\"play\" data-say=\"leciałem, lecieli\">🔊</button>","я летел · они летели"],
     ["<b>płynę / płyniesz / płynie</b> <button class=\"play\" data-say=\"płynę, płyniesz, płynie\">🔊</button>","плыву / плывёшь / плывёт"],
     ["<b>biegam · latam · pływam</b> <button class=\"play\" data-say=\"biegam, latam, pływam\">🔊</button>","бегаю · летаю · плаваю"]
   ],"star":0},
   "examples":[
     {"ru":"Я бежала до самой остановки.","en":"<b>Biegłam</b> aż do przystanku.","gloss":"aż do — до самого","say":"Biegłam aż do przystanku."},
     {"ru":"Мы летели три часа.","en":"<b>Lecieliśmy</b> trzy godziny.","say":"Lecieliśmy trzy godziny."},
     {"ru":"Лодка плыла медленно.","en":"Łódka <b>płynęła</b> powoli.","say":"Łódka płynęła powoli."},
     {"ru":"В детстве я много плавал.","en":"W dzieciństwie dużo <b>pływałem</b>.","say":"W dzieciństwie dużo pływałem."}
   ],
   "mistakes":[
     {"wrong":"Biegę na autobus.","right":"<b>Biegnę</b> na autobus.","why":"в настоящем времени у biec вырастает -gn-: biegnę, biegniesz."},
     {"wrong":"Oni leciali trzy godziny.","right":"Oni <b>lecieli</b> trzy godziny.","why":"перед -li гласная a переходит в e — как в mieli, chcieli."}
   ],
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, что вырастает в настоящем.",
      "q":"«Я бегу на трамвай» —","opts":["Biegę na tramwaj","Biegnę na tramwaj","Biegam na tramwaj"],"answer":1,
      "explain":"Настоящее время от biec — <b>biegnę</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на гласную перед -li.",
      "q":"«Они летели всю ночь» —","opts":["Leciali całą noc","Lecieli całą noc","Latali całą noc"],"answer":1,
      "explain":"Мужско-личная форма — <b>lecieli</b>; latali значило бы «летали вообще»."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«Я бегаю каждое утро»","accept":["biegam co rano","biegam każdego ranka","biegam kazdego ranka"],"placeholder":"Biegam…"}
   ]
  },
  {
   "eyebrow":"Правило 3 · Несу и везу",
   "title":"<em>nieść / nosić</em> · <em>wieźć / wozić</em>",
   "paras":[
     "Две последние пары — про то, что несут в руках и везут на колёсах. Разница та же: <b>Niosę ci kawę</b> («несу тебе кофе» — сейчас) и <b>Noszę okulary</b> («ношу очки» — вообще). <b>Wiozę mu meble</b> («везу ему мебель») и <b>Wożę dzieci do szkoły</b> («вожу детей в школу»).",
     "Формы стоит выучить целиком, они капризные. <b>nieść</b>: niosę, niesiesz, niesie, niesiemy, niesiecie, niosą. Прошедшее: <b>niosłem / niosłam</b>, но он — <b>niósł</b>, она — <b>niosła</b>. <b>wieźć</b>: wiozę, wieziesz, wiezie, wiozą; прошедшее <b>wiozłem / wiozłam</b>, он — <b>wiózł</b>, она — <b>wiozła</b>.",
     "Обрати внимание: <b>niósł</b> и <b>wiózł</b> с буквой ó — ровно как <b>mógł</b> из A2. Эта ó появляется только в мужской форме единственного числа, дальше везде обычное o.",
     "И родное значение бонусом: <b>nosić</b> — это ещё и «носить одежду». <b>Noszę okulary. Ona nosi krótkie włosy. Zimą noszę czapkę.</b> Русский использует то же слово в том же смысле."
   ],
   "audio":"Две последние пары — про то, что несут в руках и везут на колёсах. Разница та же: niosę ci kawę, несу тебе кофе сейчас, и noszę okulary, ношу очки вообще. Wiozę mu meble, везу ему мебель, и wożę dzieci do szkoły, вожу детей в школу. Формы стоит выучить целиком, они капризные. Nieść: niosę, niesiesz, niesie, niesiemy, niesiecie, niosą. Прошедшее: niosłem, niosłam, но он — niósł, она — niosła. Wieźć: wiozę, wieziesz, wiezie, wiozą; прошедшее wiozłem, wiozłam, он — wiózł, она — wiozła. Обрати внимание: niósł и wiózł с буквой ó, ровно как mógł с уровня A2. Эта ó появляется только в мужской форме единственного числа, дальше везде обычное o. И родное значение бонусом: nosić — это ещё и «носить одежду». Noszę okulary. Ona nosi krótkie włosy. Zimą noszę czapkę. Русский использует то же слово в том же смысле.",
   "table":{"rows":[
     ["<b>niosę / niesiesz / niesie</b> <button class=\"play\" data-say=\"niosę, niesiesz, niesie\">🔊</button>","несу / несёшь / несёт"],
     ["on <b>niósł</b> · ona <b>niosła</b> <button class=\"play\" data-say=\"niósł, niosła\">🔊</button>","он нёс · она несла"],
     ["<b>wiozę / wieziesz / wiezie</b> <button class=\"play\" data-say=\"wiozę, wieziesz, wiezie\">🔊</button>","везу / везёшь / везёт"],
     ["on <b>wiózł</b> · ona <b>wiozła</b> <button class=\"play\" data-say=\"wiózł, wiozła\">🔊</button>","он вёз · она везла"],
     ["<b>noszę</b> okulary <button class=\"play\" data-say=\"noszę okulary\">🔊</button>","ношу очки"],
     ["<b>wożę</b> dzieci do szkoły <button class=\"play\" data-say=\"wożę dzieci do szkoły\">🔊</button>","вожу детей в школу"]
   ],"star":1},
   "examples":[
     {"ru":"Несу тебе кофе.","en":"<b>Niosę</b> ci kawę.","say":"Niosę ci kawę."},
     {"ru":"Он нёс два тяжёлых чемодана.","en":"<b>Niósł</b> dwie ciężkie walizki.","say":"Niósł dwie ciężkie walizki."},
     {"ru":"Я вожу детей в школу на машине.","en":"<b>Wożę</b> dzieci do szkoły samochodem.","say":"Wożę dzieci do szkoły samochodem."},
     {"ru":"Зимой я ношу шапку.","en":"Zimą <b>noszę</b> czapkę.","say":"Zimą noszę czapkę."},
     {"ru":"Она везла мебель на новую квартиру.","en":"<b>Wiozła</b> meble do nowego mieszkania.","say":"Wiozła meble do nowego mieszkania."}
   ],
   "mistakes":[
     {"wrong":"Codziennie niosę okulary.","right":"Codziennie <b>noszę</b> okulary.","why":"постоянно, вообще — nosić. Niosę значит «несу прямо сейчас»."},
     {"wrong":"On nióssł walizkę.","right":"On <b>niósł</b> walizkę.","why":"мужская форма пишется niósł, с ó и одной ł."}
   ],
   "mnemonic":"🧳 niosę — несу · noszę — ношу · wiozę — везу · wożę — вожу. И ó только у niósł, wiózł.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> прямо сейчас или вообще?",
      "q":"«Я ношу очки» —","opts":["Niosę okulary","Noszę okulary","Niósł okulary"],"answer":1,
      "explain":"Постоянно — <b>noszę</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто говорит.",
      "q":"Марек о себе: «Я нёс коробки» —","opts":["Niosłem pudła","Niósł pudła","Niosłam pudła"],"answer":0,
      "explain":"Для «я» — <b>niosłem</b>; niósł означает «он нёс»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Я вожу детей в школу на машине»</b>","answer":"Wożę dzieci do szkoły samochodem"}
   ]
  },
  {
   "eyebrow":"Правило 4 · Переносно и с приставкой",
   "title":"<em>Czas leci</em> — и время, и приставки",
   "paras":[
     "Эти глаголы живут не только в буквальном смысле, и переносные значения совпадают с русскими до мелочей. <b>Czas leci</b> — «время летит». <b>Czas płynie powoli</b> — «время течёт медленно». <b>Rzeka płynie przez miasto</b> — «река течёт через город»; по-польски река именно «плывёт», и это та же картинка.",
     "Разговорное приветствие, которое ты услышишь в первый же день среди своих: <b>Jak leci?</b> — «Как оно?», «Как дела?» Ответ короткий: <b>Leci.</b> или <b>Nieźle.</b>",
     "И главное на завтра: на эти корни садятся те же приставки, что мы носим всю неделю. <b>przynieść</b> — принести (przyniosę, przyniosłem, on przyniósł), <b>zanieść</b> — отнести, <b>przywieźć</b> — привезти (przywiozę, przywiózł), <b>odwieźć</b> — отвезти, <b>przybiec</b> — прибежать, <b>przylecieć</b> — прилететь, <b>przypłynąć</b> — приплыть.",
     "Посмотри на этот ряд: przy- везде значит «при-», и слово собирается само. Три дня назад у тебя был один корень движения — сегодня их семь, и каждый умножается на приставки."
   ],
   "audio":"Эти глаголы живут не только в буквальном смысле, и переносные значения совпадают с русскими до мелочей. Czas leci — время летит. Czas płynie powoli — время течёт медленно. Rzeka płynie przez miasto — река течёт через город; по-польски река именно плывёт, и это та же картинка. Разговорное приветствие, которое ты услышишь в первый же день среди своих: jak leci? Как оно, как дела? Ответ короткий: leci. Или nieźle. И главное на завтра: на эти корни садятся те же приставки, что мы носим всю неделю. Przynieść — принести: przyniosę, przyniosłem, on przyniósł. Zanieść — отнести. Przywieźć — привезти: przywiozę, przywiózł. Odwieźć — отвезти. Przybiec — прибежать. Przylecieć — прилететь. Przypłynąć — приплыть. Посмотри на этот ряд: przy- везде значит при-, и слово собирается само. Три дня назад у тебя был один корень движения — сегодня их семь, и каждый умножается на приставки.",
   "table":{"rows":[
     ["<b>Czas leci.</b> <button class=\"play\" data-say=\"Czas leci\">🔊</button>","Время летит."],
     ["<b>Czas płynie powoli.</b> <button class=\"play\" data-say=\"Czas płynie powoli\">🔊</button>","Время течёт медленно."],
     ["<b>Jak leci?</b> — Nieźle. <button class=\"play\" data-say=\"Jak leci? Nieźle.\">🔊</button>","Как дела? — Неплохо. (разговорно)"],
     ["<b>przynieść</b> · przyniosę · on przyniósł <button class=\"play\" data-say=\"przynieść, przyniosę, przyniósł\">🔊</button>","принести"],
     ["<b>przywieźć</b> · przywiozę · on przywiózł <button class=\"play\" data-say=\"przywieźć, przywiozę, przywiózł\">🔊</button>","привезти"],
     ["<b>przybiec · przylecieć · przypłynąć</b> <button class=\"play\" data-say=\"przybiec, przylecieć, przypłynąć\">🔊</button>","прибежать · прилететь · приплыть"]
   ],"star":3},
   "examples":[
     {"ru":"Время летит, до переезда осталось три дня.","en":"<b>Czas leci</b> — do przeprowadzki zostały trzy dni.","gloss":"przeprowadzka — переезд","say":"Czas leci, do przeprowadzki zostały trzy dni."},
     {"ru":"Принеси мне, пожалуйста, воды.","en":"<b>Przynieś</b> mi, proszę, wody.","say":"Przynieś mi, proszę, wody."},
     {"ru":"Брат привёз коробки на машине.","en":"Brat <b>przywiózł</b> pudła samochodem.","say":"Brat przywiózł pudła samochodem."},
     {"ru":"Родители прилетят в субботу.","en":"Rodzice <b>przylecą</b> w sobotę.","say":"Rodzice przylecą w sobotę."}
   ],
   "mistakes":[
     {"wrong":"Czas biegnie szybko.","right":"<b>Czas leci</b> szybko.","why":"по-польски о времени говорят «летит», как и по-русски. Вариант с «бежит» тут не в ходу."}
   ],
   "mnemonic":"⏳ Czas leci · czas płynie · Jak leci? И те же приставки: przynieść, przywieźć, przybiec, przylecieć.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, что делает время в обоих языках.",
      "q":"«Время летит» —","opts":["Czas biegnie","Czas leci","Czas nosi"],"answer":1,
      "explain":"<b>Czas leci</b> — точная копия русского оборота."},
     {"type":"choice","howto":"<b>Что делать:</b> сложи приставку и корень.",
      "q":"«Принеси мне воды» —","opts":["Przynieś mi wody","Zanieś mi wody","Przywieź mi wody"],"answer":0,
      "explain":"Ко мне, в руках — <b>przynieś</b>. Przywieź значило бы «привези на машине»."},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — сегодняшняя фраза недели.",
      "target":"Czas leci, a ja jeszcze nic nie spakowałem.","sub":"время летит, а я ещё ничего не собрал — женский вариант: nie spakowałam","want":"Czas leci, a ja jeszcze nic nie spakowałem."}
   ]
  }
 ],
 "dialogue":{
   "intro":"За три дня до переезда. Анна вернулась с пробежки, Марек считает коробки. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Biegłam dziś nad rzeką. Woda płynie tak wolno, że aż zazdroszczę.","ru":"Сегодня бегала у реки. Вода течёт так медленно, что даже завидую.",
      "words":[["Biegłam","я бежала, бегала"],["płynie","течёт, плывёт"]]},
     {"who":"M","name":"Marek","side":"right","en":"A u mnie czas leci. Do przeprowadzki zostały trzy dni.","ru":"А у меня время летит. До переезда три дня.",
      "words":[["czas leci","время летит"],["przeprowadzki","переезда"]]},
     {"who":"A","name":"Anna","side":"left","en":"Ile masz pudeł?","ru":"Сколько у тебя коробок?",
      "words":[["Ile","сколько"],["pudeł","коробок"]]},
     {"who":"M","name":"Marek","side":"right","en":"Czternaście. Brat przywiezie jeszcze dziesięć w czwartek.","ru":"Четырнадцать. Брат привезёт ещё десять в четверг.",
      "words":[["przywiezie","привезёт"],["w czwartek","в четверг"]]},
     {"who":"A","name":"Anna","side":"left","en":"A rodzice? Jadą pociągiem?","ru":"А родители? Едут поездом?",
      "words":[["rodzice","родители"],["pociągiem","поездом"]]},
     {"who":"M","name":"Marek","side":"right","en":"Nie, przylecą z Gdańska. Mama nie lubi latać, ale tym razem się zgodziła.","ru":"Нет, прилетят из Гданьска. Мама не любит летать, но в этот раз согласилась.",
      "words":[["przylecą","прилетят"],["latać","летать"]]},
     {"who":"A","name":"Anna","side":"left","en":"To ja przyniosę coś do jedzenia. Nie będziesz gotować w sobotę.","ru":"Тогда я принесу что-нибудь поесть. Не будешь же ты готовить в субботу.",
      "words":[["przyniosę","принесу"],["do jedzenia","поесть"]]},
     {"who":"M","name":"Marek","side":"right","en":"Nosisz mi jedzenie od trzech lat. Kiedyś się odwdzięczę.","ru":"Ты носишь мне еду три года. Когда-нибудь отплачу тем же.",
      "words":[["Nosisz","носишь"],["się odwdzięczę","отплачу тем же"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zapamiętam. A teraz biegnę, bo mam lekcję o czwartej.","ru":"Запомню. А сейчас бегу — у меня урок в четыре.",
      "words":[["Zapamiętam","запомню"],["biegnę","бегу"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка на кухне — про «несу» и «ношу». Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Co niesiesz?","ru":"Что несёшь?"},
     {"who":"B","en":"Kawę dla ciebie. Jeszcze gorąca.","ru":"Кофе для тебя. Ещё горячий."},
     {"who":"A","en":"Dziękuję. Nosisz mi kawę codziennie.","ru":"Спасибо. Ты носишь мне кофе каждый день."},
     {"who":"B","en":"Bo codziennie zapominasz jej zrobić.","ru":"Потому что ты каждый день забываешь его сделать."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — пять пар и то, что они умеют переносно.",
   "items":[
     {"en":"biec (biegnę) / biegać (biegam)","ru":"бежать / бегать","ex":"Biegnę na autobus."},
     {"en":"lecieć (lecę) / latać (latam)","ru":"лететь / летать","ex":"Jutro lecę do Gdańska."},
     {"en":"płynąć (płynę) / pływać (pływam)","ru":"плыть / плавать","ex":"Rzeka płynie przez miasto."},
     {"en":"nieść (niosę, niósł) / nosić (noszę)","ru":"нести / носить","ex":"Niosę ci kawę."},
     {"en":"wieźć (wiozę, wiózł) / wozić (wożę)","ru":"везти / возить","ex":"Wożę dzieci do szkoły."},
     {"en":"przynieść (przyniosę)","ru":"принести","ex":"Przynieś mi wody."},
     {"en":"przywieźć (przywiozę)","ru":"привезти","ex":"Brat przywiózł pudła."},
     {"en":"przylecieć","ru":"прилететь","ex":"Rodzice przylecą w sobotę."},
     {"en":"czas leci","ru":"время летит","ex":"Czas leci, zostały trzy dni."},
     {"en":"Jak leci?","ru":"Как дела? (разговорно)","ex":"Jak leci? — Nieźle."},
     {"en":"pudło","ru":"коробка","ex":"Mam czternaście pudeł."},
     {"en":"okulary","ru":"очки (только мн. ч.)","ex":"Noszę okulary od dziecka."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу. Смотри на пару «сейчас — вообще».",
   "pairs":[["biegnę","бегу сейчас"],["biegam","бегаю вообще"],["niosę","несу сейчас"],["noszę","ношу вообще"]]
 },
 "reading":{
   "intro":"Прочитай и послушай утро Анны. Тут собраны все пять пар дня.",
   "title":"Rano nad rzeką",
   "sentences":["Biegam co rano, zwykle nad rzeką.","Dziś biegłam czterdzieści minut.","Woda płynie tam wolno i szeroko.","Latem dużo pływam, zimą tylko biegam.","W drodze powrotnej niosłam chleb i mleko.","Sąsiadka wiozła dzieci do szkoły i pomachała mi z auta.","Czas leci — za trzy dni Marek się przeprowadza.","Jego rodzice przylecą z Gdańska w sobotę rano.","Brat przywiezie resztę pudeł samochodem.","Ja przyniosę coś do jedzenia, bo nikt nie będzie gotować."],
   "translation":"Я бегаю каждое утро, обычно у реки. Сегодня бежала сорок минут. Вода там течёт медленно и широко. Летом много плаваю, зимой только бегаю. На обратном пути я несла хлеб и молоко. Соседка везла детей в школу и помахала мне из машины. Время летит — через три дня Марек переезжает. Его родители прилетят из Гданьска в субботу утром. Брат привезёт остальные коробки на машине. Я принесу что-нибудь поесть, потому что готовить никто не будет."
 },
 "quiz":{
   "intro":"Шесть вопросов — и последние пары движения на месте.",
   "items":[
     {"q":"1. «Каждое утро я бегаю» —","opts":["Co rano biegnę","Co rano biegam","Co rano biegłem"],"answer":1,
      "explain":"Регулярность — <b>biegam</b>."},
     {"q":"2. «Сейчас я бегу на трамвай» —","opts":["Teraz biegam na tramwaj","Teraz biegę na tramwaj","Teraz biegnę na tramwaj"],"answer":2,
      "explain":"Настоящее время от biec — <b>biegnę</b>."},
     {"q":"3. «Я ношу очки» —","opts":["Noszę okulary","Niosę okulary","Wożę okulary"],"answer":0,
      "explain":"Постоянно — <b>noszę</b>; niosę значит «несу сейчас»."},
     {"q":"4. «Он нёс два чемодана» —","opts":["Niosła dwie walizki","Niósł dwie walizki","Nosił dwie walizki"],"answer":1,
      "explain":"Один раз, в руках, о мужчине — <b>niósł</b>."},
     {"q":"5. «Брат привёз коробки» —","opts":["Brat przyniósł pudła","Brat przywiózł pudła","Brat przybiegł pudła"],"answer":1,
      "explain":"На машине — <b>przywiózł</b>; przyniósł значило бы «принёс в руках»."},
     {"q":"6. «Время летит» —","opts":["Czas leci","Czas lata","Czas biegnie"],"answer":0,
      "explain":"Оборот совпадает с русским: <b>czas leci</b>."}
   ]
 },
 "essay":{
   "intro":"Сегодня — про движение в твоей собственной неделе.",
   "prompt":"Напиши 4–6 предложений: бегаешь ли ты и как часто, плаваешь ли, часто ли летаешь, что носишь с собой каждый день и что нёс(ла) сегодня.",
   "hint":"Каркас: Biegam / Nie biegam… Pływam… Latam raz w roku… Codziennie noszę… Dziś niosłem / niosłam… 🏃",
   "example":"Biegam dwa razy w tygodniu, zwykle rano. Latem pływam w jeziorze, ale zimą nie. Latam rzadko, może raz w roku. Codziennie noszę okulary i plecak z komputerem. Dziś niosłam też torbę z książkami i było mi ciężko. Czas leci — wieczorem znowu pobiegnę."
 }
},
"5": {
 "day":5,"week":"01",
 "themeRu":"Начал, продолжаю, перестал",
 "themeEn":"Zaczynać, kończyć, przestawać",
 "intro":"Есть три глагола, которые управляют другими глаголами: <b>zacząć</b> (начать), <b>skończyć</b> (закончить), <b>przestać</b> (перестать). У них жёсткое условие — после них стоит только несовершенный инфинитив. И это как раз то, что ты соблюдаешь по-русски, не задумываясь: «начал делать», а не «начал сделать».",
 "introAudio":"Есть три глагола, которые управляют другими глаголами: zacząć, начать; skończyć, закончить; przestać, перестать. У них жёсткое условие — после них стоит только несовершенный инфинитив. И это как раз то, что ты соблюдаешь по-русски, не задумываясь: «начал делать», а не «начал сделать».",
 "goals":[
   "Пользоваться фазовыми глаголами: <b>zaczynać/zacząć, kończyć/skończyć, przestawać/przestać</b>",
   "Держать правило: после них — только <b>несовершенный</b> инфинитив",
   "Различать <b>skończyć palić</b> (докурить) и <b>przestać palić</b> (бросить курить)",
   "Сказать «всё ещё» и «больше не»: <b>nadal, wciąż, dalej, już nie</b>"
 ],
 "learned":[
   "Воспользовался(лась) фазовыми глаголами: zaczynać/zacząć, kończyć/skończyć, przestawać/przestać",
   "Удержал(а) правило: после них только несовершенный инфинитив",
   "Различил(а) skończyć palić (докурить) и przestać palić (бросить курить)",
   "Сказал(а) «всё ещё» и «больше не»: nadal, wciąż, dalej, już nie"
 ],
 "review":{
   "intro":"Вчерашние пары движения — и одно слово из позавчерашней семьи. Три вопроса, полторы минуты.",
   "introAudio":"Вчерашние пары движения — и одно слово из позавчерашней семьи. Три вопроса, полторы минуты.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> ищи маркер регулярности.",
      "q":"«Я летаю раз в год» —","opts":["Lecę raz w roku","Latam raz w roku","Leciałem raz w roku"],"answer":1,
      "explain":"Повтор — <b>latam</b>; lecę значит «лечу сейчас, этим рейсом»."},
     {"type":"choice","howto":"<b>Что делать:</b> прямо сейчас или вообще?",
      "q":"«Я ношу очки с детства» —","opts":["Niosę okulary od dziecka","Noszę okulary od dziecka","Wożę okulary od dziecka"],"answer":1,
      "explain":"Постоянно — <b>noszę</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> в руках или на машине?",
      "q":"«Брат привёз коробки» —","opts":["Brat przyniósł pudła","Brat przywiózł pudła","Brat przyleciał pudła"],"answer":1,
      "explain":"На машине — <b>przywiózł</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Время летит, осталось два дня»</b>","answer":"Czas leci zostały dwa dni"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · Три фазы",
   "title":"<em>zacząć</em>, <em>skończyć</em>, <em>przestać</em>",
   "paras":[
     "У любого действия есть начало, конец и обрыв на середине. Польский называет их тремя парами, и каждая пара — привычный вид: <b>zaczynać / zacząć</b> (начинать / начать), <b>kończyć / skończyć</b> (заканчивать / закончить), <b>przestawać / przestać</b> (переставать / перестать).",
     "Формы стоит посмотреть внимательно, у первой пары носовые гласные. <b>zacząć</b>: zacznę, zaczniesz, zacznie, zaczną; прошедшее <b>zacząłem / zaczęłam</b>, он <b>zaczął</b>, она <b>zaczęła</b>. <b>skończyć</b>: skończę, skończysz; прошедшее правильное — skończyłem / skończyłam. <b>przestać</b>: przestanę, przestaniesz; прошедшее przestałem / przestałam.",
     "Несовершенные партнёры простые: <b>zaczynam, zaczynasz</b>; <b>kończę, kończysz</b>; <b>przestaję, przestajesz</b>.",
     "И два оборота, без которых не обойтись: <b>zaczynać się</b> и <b>kończyć się</b> — о событиях, которые начинаются и кончаются сами. <b>Film zaczyna się o ósmej. Lekcja skończyła się wcześniej. Zaczęło padać</b> — «пошёл дождь», буквально «начало лить»."
   ],
   "audio":"У любого действия есть начало, конец и обрыв на середине. Польский называет их тремя парами, и каждая пара — привычный вид: zaczynać и zacząć, начинать и начать; kończyć и skończyć, заканчивать и закончить; przestawać и przestać, переставать и перестать. Формы стоит посмотреть внимательно, у первой пары носовые гласные. Zacząć: zacznę, zaczniesz, zacznie, zaczną; прошедшее zacząłem, zaczęłam, он zaczął, она zaczęła. Skończyć: skończę, skończysz; прошедшее правильное, skończyłem, skończyłam. Przestać: przestanę, przestaniesz; прошедшее przestałem, przestałam. Несовершенные партнёры простые: zaczynam, zaczynasz; kończę, kończysz; przestaję, przestajesz. И два оборота, без которых не обойтись: zaczynać się и kończyć się, о событиях, которые начинаются и кончаются сами. Film zaczyna się o ósmej. Lekcja skończyła się wcześniej. Zaczęło padać — пошёл дождь, буквально «начало лить».",
   "table":{"rows":[
     ["<b>zacząć</b>: zacznę · zacząłem / zaczęłam <button class=\"play\" data-say=\"zacząć, zacznę, zacząłem, zaczęłam\">🔊</button>","начать · я начал / начала"],
     ["<b>skończyć</b>: skończę · skończyłem <button class=\"play\" data-say=\"skończyć, skończę, skończyłem\">🔊</button>","закончить · я закончил"],
     ["<b>przestać</b>: przestanę · przestałem <button class=\"play\" data-say=\"przestać, przestanę, przestałem\">🔊</button>","перестать · я перестал"],
     ["<b>zaczynam · kończę · przestaję</b> <button class=\"play\" data-say=\"zaczynam, kończę, przestaję\">🔊</button>","начинаю · заканчиваю · перестаю"],
     ["Film <b>zaczyna się</b> o ósmej. <button class=\"play\" data-say=\"Film zaczyna się o ósmej\">🔊</button>","Фильм начинается в восемь."],
     ["<b>Zaczęło padać.</b> <button class=\"play\" data-say=\"Zaczęło padać\">🔊</button>","Пошёл дождь."]
   ],"star":0},
   "examples":[
     {"ru":"Я начал учить польский год назад.","en":"<b>Zacząłem</b> uczyć się polskiego rok temu.","gloss":"женщина скажет: zaczęłam","say":"Zacząłem uczyć się polskiego rok temu."},
     {"ru":"Я заканчиваю работу в шесть.","en":"<b>Kończę</b> pracę o szóstej.","say":"Kończę pracę o szóstej."},
     {"ru":"Урок закончился раньше.","en":"Lekcja <b>skończyła się</b> wcześniej.","say":"Lekcja skończyła się wcześniej."},
     {"ru":"Перестань, пожалуйста.","en":"<b>Przestań</b>, proszę.","say":"Przestań, proszę."},
     {"ru":"Начало темнеть.","en":"<b>Zaczęło</b> się ściemniać.","say":"Zaczęło się ściemniać."}
   ],
   "mistakes":[
     {"wrong":"Zacząłam pracę o ósmej i skończyła o szóstej.","right":"Zaczęłam pracę o ósmej i <b>skończyłam</b> o szóstej.","why":"о себе — форма на -am: zaczęłam, skończyłam. Skończyła — «она закончила»."}
   ],
   "mnemonic":"⏱️ zacząć начать · skończyć закончить · przestać перестать. И события сами: film zaczyna się, lekcja kończy się.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто говорит.",
      "q":"Анна о себе: «Я начала работать в восемь» —","opts":["Zacząłem pracować o ósmej","Zaczęłam pracować o ósmej","Zaczął pracować o ósmej"],"answer":1,
      "explain":"Женская форма — <b>zaczęłam</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> событие начинается само.",
      "q":"«Фильм начинается в восемь» —","opts":["Film zaczyna o ósmej","Film zaczyna się o ósmej","Film przestaje o ósmej"],"answer":1,
      "explain":"Сам по себе — с <b>się</b>: film zaczyna się."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«Я заканчиваю работу в шесть»","accept":["kończę pracę o szóstej","koncze prace o szostej"],"placeholder":"Kończę…"}
   ]
  },
  {
   "eyebrow":"Правило 2 · Железное условие",
   "title":"После фазового — только несовершенный вид",
   "paras":[
     "Скажи по-русски: «начал читать». А теперь попробуй «начал прочитать» — язык сопротивляется. Начало и конец действия несовместимы с идеей завершённости: то, что уже сделано целиком, нельзя начать.",
     "Польский держит то же правило, и держит строго. <b>Zacząłem czytać</b> ✔, но «zacząłem przeczytać» ✘. <b>Skończyłam pisać</b> ✔, «skończyłam napisać» ✘. <b>Przestał palić</b> ✔, «przestał zapalić» ✘.",
     "Значит, выбирая глагол после zacząć / skończyć / przestać, бери словарную форму несовершенного вида: <b>robić, pisać, czytać, jeść, pracować, uczyć się, palić, gotować</b>.",
     "Хорошая новость: проверять себя можно по-русски. Мысленно подставь «начал…» — если по-русски выходит «начал сделать», значит ты взял(а) не тот вид. Работает почти безотказно."
   ],
   "audio":"Скажи по-русски: «начал читать». А теперь попробуй «начал прочитать» — язык сопротивляется. Начало и конец действия несовместимы с идеей завершённости: то, что уже сделано целиком, нельзя начать. Польский держит то же правило, и держит строго. Zacząłem czytać — да, но zacząłem przeczytać — нет. Skończyłam pisać — да, skończyłam napisać — нет. Przestał palić — да, przestał zapalić — нет. Значит, выбирая глагол после zacząć, skończyć, przestać, бери словарную форму несовершенного вида: robić, pisać, czytać, jeść, pracować, uczyć się, palić, gotować. Хорошая новость: проверять себя можно по-русски. Мысленно подставь «начал», и если выходит «начал сделать», значит взят не тот вид. Работает почти безотказно.",
   "table":{"rows":[
     ["Zacząłem <b>czytać</b> ✔ · «zacząłem przeczytać» ✘ <button class=\"play\" data-say=\"Zacząłem czytać\">🔊</button>","начал читать ✔ · «начал прочитать» ✘"],
     ["Skończyłam <b>pisać</b> ✔ <button class=\"play\" data-say=\"Skończyłam pisać\">🔊</button>","закончила писать"],
     ["Przestał <b>palić</b> ✔ <button class=\"play\" data-say=\"Przestał palić\">🔊</button>","перестал курить"],
     ["Zaczynam <b>rozumieć</b>. <button class=\"play\" data-say=\"Zaczynam rozumieć\">🔊</button>","Начинаю понимать."],
     ["Kiedy skończysz <b>pakować</b>? <button class=\"play\" data-say=\"Kiedy skończysz pakować?\">🔊</button>","Когда закончишь упаковывать?"]
   ],"star":0},
   "examples":[
     {"ru":"Я начинаю понимать польские фильмы.","en":"<b>Zaczynam rozumieć</b> polskie filmy.","say":"Zaczynam rozumieć polskie filmy."},
     {"ru":"Когда ты закончишь собирать вещи?","en":"Kiedy <b>skończysz pakować</b> rzeczy?","say":"Kiedy skończysz pakować rzeczy?"},
     {"ru":"Он перестал курить в январе.","en":"<b>Przestał palić</b> w styczniu.","say":"Przestał palić w styczniu."},
     {"ru":"Перестань говорить об этом.","en":"<b>Przestań mówić</b> o tym.","say":"Przestań mówić o tym."},
     {"ru":"Я закончила готовить и села.","en":"<b>Skończyłam gotować</b> i usiadłam.","say":"Skończyłam gotować i usiadłam."}
   ],
   "mistakes":[
     {"wrong":"Zacząłem przeczytać książkę.","right":"<b>Zacząłem czytać</b> książkę.","why":"после zacząć — только несовершенный вид. По-русски «начал прочитать» тоже невозможно."},
     {"wrong":"Skończyłam napisać list.","right":"<b>Skończyłam pisać</b> list.","why":"то же правило: закончить можно только процесс."}
   ],
   "mnemonic":"🚦 zacząć / skończyć / przestać + несовершенный инфинитив. Проверка по-русски: «начал делать», а не «начал сделать».",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, какой вид идёт после zacząć.",
      "q":"«Я начал читать эту книгу» —","opts":["Zacząłem przeczytać tę książkę","Zacząłem czytać tę książkę","Zacząłem doczytać tę książkę"],"answer":1,
      "explain":"После фазового глагола — несовершенный вид: <b>czytać</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> проверь себя по-русски.",
      "q":"«Она закончила писать письмо» —","opts":["Skończyła napisać list","Skończyła pisać list","Skończyła dopisać list"],"answer":1,
      "explain":"Закончить можно только процесс: <b>pisać</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Я начинаю понимать польские фильмы»</b>","answer":"Zaczynam rozumieć polskie filmy"}
   ]
  },
  {
   "eyebrow":"Правило 3 · Тонкая разница",
   "title":"<em>skończyć palić</em> и <em>przestać palić</em>",
   "paras":[
     "Оба глагола говорят о конце, но о разном конце — и русский различает их так же. <b>Skończyć</b> — довести до конца, дойти до естественного финала: <b>Skończyłem palić papierosa i wróciłem</b> — «докурил сигарету и вернулся». <b>Skończyłam studia</b> — «я закончила учёбу».",
     "<b>Przestać</b> — оборвать, прекратить насовсем: <b>Przestał palić dwa lata temu</b> — «бросил курить два года назад». <b>Przestało padać</b> — «дождь перестал».",
     "Отсюда простая проверка: если по-русски просится «до конца, доделал» — это skończyć. Если «бросил, прекратил» — przestać.",
     "И ещё одна рамка, которую путают чаще всего: <b>kontynuować</b> («продолжать») не берёт инфинитив. Говорят <b>kontynuować naukę</b>, <b>kontynuować pracę</b> — с существительным. А «продолжаю читать» по-польски звучит иначе: <b>czytam dalej</b>, <b>nadal czytam</b>."
   ],
   "audio":"Оба глагола говорят о конце, но о разном конце — и русский различает их так же. Skończyć — довести до конца, дойти до естественного финала: skończyłem palić papierosa i wróciłem, докурил сигарету и вернулся. Skończyłam studia — я закончила учёбу. Przestać — оборвать, прекратить насовсем: przestał palić dwa lata temu, бросил курить два года назад. Przestało padać — дождь перестал. Отсюда простая проверка: если по-русски просится «до конца, доделал» — это skończyć. Если «бросил, прекратил» — przestać. И ещё одна рамка, которую путают чаще всего: kontynuować, продолжать, не берёт инфинитив. Говорят kontynuować naukę, kontynuować pracę — с существительным. А «продолжаю читать» по-польски звучит иначе: czytam dalej, nadal czytam.",
   "table":{"rows":[
     ["<b>skończyć</b> palić papierosa <button class=\"play\" data-say=\"skończyć palić papierosa\">🔊</button>","докурить сигарету"],
     ["<b>przestać</b> palić <button class=\"play\" data-say=\"przestać palić\">🔊</button>","бросить курить"],
     ["<b>Skończyłam studia.</b> <button class=\"play\" data-say=\"Skończyłam studia\">🔊</button>","Я закончила учёбу."],
     ["<b>Przestało padać.</b> <button class=\"play\" data-say=\"Przestało padać\">🔊</button>","Дождь перестал."],
     ["<b>kontynuować naukę</b> ✔ · «kontynuować uczyć się» ✘ <button class=\"play\" data-say=\"kontynuować naukę\">🔊</button>","продолжать учёбу"],
     ["<b>czytam dalej</b> · <b>nadal czytam</b> <button class=\"play\" data-say=\"czytam dalej, nadal czytam\">🔊</button>","продолжаю читать"]
   ],"star":1},
   "examples":[
     {"ru":"Он докурил и вернулся в кабинет.","en":"<b>Skończył palić</b> i wrócił do biura.","say":"Skończył palić i wrócił do biura."},
     {"ru":"Он бросил курить два года назад.","en":"<b>Przestał palić</b> dwa lata temu.","say":"Przestał palić dwa lata temu."},
     {"ru":"Дождь перестал, можно идти.","en":"<b>Przestało padać</b>, można iść.","say":"Przestało padać, można iść."},
     {"ru":"Я закончила учёбу в июне.","en":"<b>Skończyłam studia</b> w czerwcu.","say":"Skończyłam studia w czerwcu."}
   ],
   "mistakes":[
     {"wrong":"Kontynuuję czytać tę książkę.","right":"<b>Czytam dalej</b> tę książkę.","why":"kontynuować идёт с существительным (kontynuować naukę). «Продолжаю читать» передают через dalej или nadal."}
   ],
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> насовсем или до конца?",
      "q":"«Он бросил курить» —","opts":["Skończył palić","Przestał palić","Zaczął palić"],"answer":1,
      "explain":"Прекратил насовсем — <b>przestał palić</b>. Skończył palić значит «докурил»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни рамку глагола kontynuować.",
      "q":"«Я продолжаю читать эту книгу» —","opts":["Kontynuuję czytać tę książkę","Czytam dalej tę książkę","Kontynuuję przeczytać tę książkę"],"answer":1,
      "explain":"«Продолжаю делать» по-польски — <b>robię dalej</b> или nadal robię."},
     {"type":"choice","howto":"<b>Что делать:</b> событие кончилось само.",
      "q":"«Дождь перестал» —","opts":["Przestało padać","Skończyło padać","Deszcz przestało padać"],"answer":0,
      "explain":"Безличная форма среднего рода: <b>przestało padać</b>."}
   ],
   "mnemonic":"🚬 skończyć — довёл до конца · przestać — бросил. И «продолжаю делать» = robię dalej, а не kontynuować + инфинитив."
  },
  {
   "eyebrow":"Правило 4 · Всё ещё и больше не",
   "title":"<em>nadal, wciąż, dalej, już nie</em>",
   "paras":[
     "Раз есть начало и конец, нужны слова про середину. <b>nadal</b> и <b>wciąż</b> значат «всё ещё, до сих пор»: <b>Nadal mieszka w Krakowie. Wciąż nie rozumiem tego słowa.</b> Между ними разницы почти нет; wciąż чуть настойчивее.",
     "<b>dalej</b> — «дальше, продолжая»: <b>Mów dalej!</b> («Говори дальше!»), <b>Pracuję dalej</b> («работаю дальше»). Это же слово значит и «дальше» в пространстве: <b>Sklep jest dalej, za rogiem.</b>",
     "И противоположность: <b>już nie</b> — «больше не». <b>Już nie palę. Już tu nie mieszkam.</b> Порядок слов совпадает с русским, ставить их врозь не нужно.",
     "Собранная фраза уровня B1 выглядит так: <b>Zacząłem uczyć się polskiego dwa lata temu, nadal robię błędy, ale już nie boję się mówić.</b> Три времени, три фазы и одна честная мысль."
   ],
   "audio":"Раз есть начало и конец, нужны слова про середину. Nadal и wciąż значат «всё ещё, до сих пор»: nadal mieszka w Krakowie; wciąż nie rozumiem tego słowa. Между ними разницы почти нет; wciąż чуть настойчивее. Dalej — дальше, продолжая: mów dalej, говори дальше; pracuję dalej, работаю дальше. Это же слово значит и «дальше» в пространстве: sklep jest dalej, za rogiem. И противоположность: już nie, больше не. Już nie palę. Już tu nie mieszkam. Порядок слов совпадает с русским, ставить их врозь не нужно. Собранная фраза уровня B1 выглядит так: zacząłem uczyć się polskiego dwa lata temu, nadal robię błędy, ale już nie boję się mówić. Три времени, три фазы и одна честная мысль.",
   "table":{"rows":[
     ["<b>nadal</b> / <b>wciąż</b> <button class=\"play\" data-say=\"nadal, wciąż\">🔊</button>","всё ещё, до сих пор"],
     ["<b>dalej</b> <button class=\"play\" data-say=\"Mów dalej\">🔊</button>","дальше, продолжая"],
     ["<b>już nie</b> <button class=\"play\" data-say=\"Już nie palę\">🔊</button>","больше не"],
     ["Nadal mieszka w Krakowie. <button class=\"play\" data-say=\"Nadal mieszka w Krakowie\">🔊</button>","Всё ещё живёт в Кракове."],
     ["Już tu nie mieszkam. <button class=\"play\" data-say=\"Już tu nie mieszkam\">🔊</button>","Я здесь больше не живу."]
   ],"star":-1},
   "examples":[
     {"ru":"Я всё ещё делаю ошибки.","en":"<b>Nadal</b> robię błędy.","say":"Nadal robię błędy."},
     {"ru":"Я до сих пор не понимаю это слово.","en":"<b>Wciąż</b> nie rozumiem tego słowa.","say":"Wciąż nie rozumiem tego słowa."},
     {"ru":"Говори дальше, я слушаю.","en":"<b>Mów dalej</b>, słucham.","say":"Mów dalej, słucham."},
     {"ru":"Я больше здесь не живу.","en":"<b>Już tu nie mieszkam.</b>","say":"Już tu nie mieszkam."}
   ],
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> нужно слово «всё ещё».",
      "q":"«Он всё ещё живёт в Кракове» —","opts":["Dalej mieszka w Krakowie","Nadal mieszka w Krakowie","Już nie mieszka w Krakowie"],"answer":1,
      "explain":"«Всё ещё» — <b>nadal</b> (или wciąż). Третий вариант значит обратное: «больше не живёт»."},
     {"type":"choice","howto":"<b>Что делать:</b> действие прекратилось.",
      "q":"«Я больше не курю» —","opts":["Nadal nie palę","Już nie palę","Dalej nie palę"],"answer":1,
      "explain":"«Больше не» — <b>już nie</b>."},
     {"type":"speak","howto":"Нажми микрофон и скажи это о себе — фраза целиком твоя.",
      "target":"Zacząłem uczyć się polskiego, nadal robię błędy, ale już nie boję się mówić.","sub":"я начал учить польский, всё ещё делаю ошибки, но уже не боюсь говорить — женский вариант: zaczęłam","want":"Zacząłem uczyć się polskiego, nadal robię błędy, ale już nie boję się mówić."}
   ],
   "mnemonic":"🔁 nadal / wciąż — всё ещё · dalej — дальше · już nie — больше не."
  }
 ],
 "dialogue":{
   "intro":"Два дня до переезда. Марек упаковывает кухню, Анна пришла с коробками и вопросами.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"O której zacząłeś pakować?","ru":"Во сколько ты начал упаковывать?",
      "words":[["zacząłeś","ты начал"],["pakować","упаковывать"]]},
     {"who":"M","name":"Marek","side":"right","en":"O siódmej. Skończyłem kuchnię i zaczynam łazienkę.","ru":"В семь. Кухню закончил, начинаю ванную.",
      "words":[["Skończyłem","я закончил"],["łazienkę","ванную"]]},
     {"who":"A","name":"Anna","side":"left","en":"A książki? Nadal stoją na półkach.","ru":"А книги? Всё ещё стоят на полках.",
      "words":[["Nadal","всё ещё"],["półkach","полках"]]},
     {"who":"M","name":"Marek","side":"right","en":"Zacząłem je pakować wczoraj i przestałem po dwóch pudłach.","ru":"Начал их паковать вчера и перестал после двух коробок.",
      "words":[["Zacząłem pakować","начал упаковывать"],["przestałem","я перестал"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dlaczego?","ru":"Почему?",
      "words":[["Dlaczego","почему"]]},
     {"who":"M","name":"Marek","side":"right","en":"Zacząłem czytać jedną i skończyłem o pierwszej w nocy.","ru":"Начал читать одну и закончил в час ночи.",
      "words":[["czytać","читать"],["o pierwszej","в час"]]},
     {"who":"A","name":"Anna","side":"left","en":"Znam to. Dobrze, ja zacznę od książek, ty rób dalej łazienkę.","ru":"Знакомо. Хорошо, я начну с книг, а ты делай дальше ванную.",
      "words":[["zacznę od","начну с"],["rób dalej","делай дальше"]]},
     {"who":"M","name":"Marek","side":"right","en":"Umowa stoi. I jeszcze jedno: przestałem palić w styczniu.","ru":"Договорились. И ещё одно: я бросил курить в январе.",
      "words":[["przestałem palić","бросил курить"],["w styczniu","в январе"]]},
     {"who":"A","name":"Anna","side":"left","en":"Wiem, zauważyłam. Dziewięć miesięcy, Marek.","ru":"Знаю, я заметила. Девять месяцев, Марек.",
      "words":[["zauważyłam","я заметила"],["dziewięć miesięcy","девять месяцев"]]},
     {"who":"M","name":"Marek","side":"right","en":"Kredyt, mieszkanie, papierosy. Powoli staję się dorosły.","ru":"Кредит, квартира, сигареты. Потихоньку становлюсь взрослым.",
      "words":[["Powoli","потихоньку"],["staję się","становлюсь"]]}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — три фазы действия и слова о том, что между ними.",
   "items":[
     {"en":"zaczynać / zacząć (zacznę)","ru":"начинать / начать","ex":"Zacząłem czytać wczoraj."},
     {"en":"kończyć / skończyć (skończę)","ru":"заканчивать / закончить","ex":"Kończę pracę o szóstej."},
     {"en":"przestawać / przestać (przestanę)","ru":"переставать / перестать","ex":"Przestał palić w styczniu."},
     {"en":"zaczynać się / kończyć się","ru":"начинаться / кончаться","ex":"Film zaczyna się o ósmej."},
     {"en":"Zaczęło padać.","ru":"Пошёл дождь.","ex":"Zaczęło padać w nocy."},
     {"en":"nadal / wciąż","ru":"всё ещё, до сих пор","ex":"Nadal robię błędy."},
     {"en":"dalej","ru":"дальше, продолжая","ex":"Mów dalej, słucham."},
     {"en":"już nie","ru":"больше не","ex":"Już nie palę."},
     {"en":"kontynuować coś","ru":"продолжать что-то (учёбу, работу)","ex":"Kontynuuję naukę w Krakowie."},
     {"en":"pakować / spakować","ru":"упаковывать / упаковать","ex":"Zacząłem pakować kuchnię."},
     {"en":"papieros","ru":"сигарета","ex":"Skończył palić papierosa i wrócił."},
     {"en":"dorosły","ru":"взрослый","ex":"Powoli staję się dorosły."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу. Две пары похожи — не спеши.",
   "pairs":[["zacząć czytać","начать читать"],["skończyć palić","докурить"],["przestać palić","бросить курить"],["już nie palę","я больше не курю"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Марек подводит итог этого года. Фазовые глаголы держат весь текст.",
   "title":"Ten rok",
   "sentences":["W styczniu przestałem palić.","Nie było łatwo, ale po miesiącu zacząłem oddychać inaczej.","W lutym zacząłem oszczędzać na mieszkanie.","Skończyłem kurs angielskiego i dostałem lepszą pracę.","Latem przestałem myśleć, że to się nie uda.","We wrześniu podpisałem umowę.","Teraz zaczynam pakować kuchnię i nie mogę skończyć.","Książki nadal stoją na półkach.","Czas leci, a ja wciąż mam czternaście pudeł.","W sobotę zacznie się nowe życie — na trzecim piętrze."],
   "translation":"В январе я бросил курить. Было непросто, но через месяц я стал дышать иначе. В феврале начал копить на квартиру. Закончил курс английского и получил работу получше. Летом перестал думать, что ничего не выйдет. В сентябре подписал договор. Сейчас начинаю упаковывать кухню и не могу закончить. Книги всё ещё стоят на полках. Время летит, а у меня по-прежнему четырнадцать коробок. В субботу начнётся новая жизнь — на третьем этаже."
 },
 "quiz":{
   "intro":"Шесть вопросов — и три фазы действия под контролем.",
   "items":[
     {"q":"1. «Я начал читать эту книгу» —","opts":["Zacząłem przeczytać tę książkę","Zacząłem czytać tę książkę","Zacząłem doczytać tę książkę"],"answer":1,
      "explain":"После фазового глагола — только несовершенный вид: <b>czytać</b>."},
     {"q":"2. Анна о себе: «Я закончила работу в шесть» —","opts":["Skończyłem pracę o szóstej","Skończyła pracę o szóstej","Skończyłam pracę o szóstej"],"answer":2,
      "explain":"Женщина о себе — <b>skończyłam</b>."},
     {"q":"3. «Он бросил курить» —","opts":["Skończył palić","Przestał palić","Zaczął palić"],"answer":1,
      "explain":"Прекратил насовсем — <b>przestał palić</b>."},
     {"q":"4. «Фильм начинается в восемь» —","opts":["Film zaczyna o ósmej","Film zaczyna się o ósmej","Film przestaje o ósmej"],"answer":1,
      "explain":"Событие начинается само — с <b>się</b>."},
     {"q":"5. «Я всё ещё делаю ошибки» —","opts":["Już nie robię błędów","Nadal robię błędy","Dalej nie robię błędów"],"answer":1,
      "explain":"«Всё ещё» — <b>nadal</b> (или wciąż)."},
     {"q":"6. «Я продолжаю учить польский» —","opts":["Kontynuuję uczyć się polskiego","Uczę się polskiego dalej","Kontynuuję nauczyć się polskiego"],"answer":1,
      "explain":"Kontynuować берёт существительное; «продолжаю делать» — <b>robię dalej</b>."}
   ]
 },
 "essay":{
   "intro":"Сегодняшний текст — про твои собственные начала и концы.",
   "prompt":"Напиши 4–6 предложений: что ты начал(а) в этом году, что закончил(а), что перестал(а) делать, что всё ещё даётся трудно.",
   "hint":"Каркас: W tym roku zacząłem / zaczęłam… Skończyłem / Skończyłam… Przestałem / Przestałam… Nadal nie umiem… ⏱️",
   "example":"W styczniu zaczęłam uczyć się polskiego na kursie. W czerwcu skończyłam pierwszy poziom i zdałam test. Przestałam tłumaczyć każde słowo w głowie i mówię szybciej. Nadal robię błędy w końcówkach. Wciąż nie rozumiem szybkich rozmów w sklepie. Ale już nie boję się pytać."
 }
},
"6": {
 "day":6,"week":"01",
 "themeRu":"Переезд",
 "themeEn":"Przeprowadzka",
 "intro":"Сегодня суббота, восемь утра, у подъезда стоит фургон — и вся неделя выходит на работу разом. Коробки <b>выносят</b> (wynoszą), <b>перевозят</b> (przewożą), <b>вносят</b> (wnoszą) на третий этаж. Заодно разберём три похожих глагола, которые легко перепутать: <b>wprowadzić się</b>, <b>wyprowadzić się</b> и <b>przeprowadzić się</b>.",
 "introAudio":"Сегодня суббота, восемь утра, у подъезда стоит фургон — и вся неделя выходит на работу разом. Коробки выносят, перевозят, вносят на третий этаж. Заодно разберём три похожих глагола, которые легко перепутать: wprowadzić się, wyprowadzić się и przeprowadzić się.",
 "goals":[
   "Пользоваться глаголами переезда: <b>wnieść, wynieść, przenieść, przewieźć</b>",
   "Различать <b>wprowadzić się</b> (въехать), <b>wyprowadzić się</b> (съехать), <b>przeprowadzić się</b> (переехать)",
   "Предложить помощь по-польски: <b>pomagać komuś w czymś</b>",
   "Порадоваться правильным падежом: <b>cieszyć się z czegoś</b>"
 ],
 "learned":[
   "Воспользовался(лась) глаголами переезда: wnieść, wynieść, przenieść, przewieźć",
   "Различил(а) wprowadzić się, wyprowadzić się и przeprowadzić się",
   "Предложил(а) помощь: pomagać komuś w czymś",
   "Порадовался(лась) правильным падежом: cieszyć się z czegoś"
 ],
 "review":{
   "intro":"Вчерашние три фазы — и одно вчерашнее слово про середину. Потом идём носить коробки.",
   "introAudio":"Вчерашние три фазы — и одно вчерашнее слово про середину. Потом идём носить коробки.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни вид после фазового глагола.",
      "q":"«Я начала упаковывать кухню» —","opts":["Zaczęłam spakować kuchnię","Zaczęłam pakować kuchnię","Zaczęłam zapakować kuchnię"],"answer":1,
      "explain":"После zacząć — только несовершенный вид: <b>pakować</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> насовсем или до конца?",
      "q":"«Он бросил курить в январе» —","opts":["Skończył palić w styczniu","Przestał palić w styczniu","Zaczął palić w styczniu"],"answer":1,
      "explain":"Прекратил насовсем — <b>przestał palić</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> нужно слово «всё ещё».",
      "q":"«Книги всё ещё стоят на полках» —","opts":["Książki już nie stoją na półkach","Książki nadal stoją na półkach","Książki dalej nie stoją na półkach"],"answer":1,
      "explain":"«Всё ещё» — <b>nadal</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит мужчина.",
      "q":"Собери: <b>«Я закончил кухню и начинаю ванную»</b>","answer":"Skończyłem kuchnię i zaczynam łazienkę"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · День приставок",
   "title":"<em>wnieść, wynieść, przenieść, przewieźć</em>",
   "paras":[
     "Вчерашние <b>nieść</b> и <b>wieźć</b> сегодня надевают приставки — и получается словарь переезда, слово в слово русский. <b>wnieść</b> — внести, <b>wynieść</b> — вынести, <b>przenieść</b> — перенести, <b>przewieźć</b> — перевезти, <b>zanieść</b> — отнести, <b>odnieść</b> — отнести обратно, вернуть.",
     "Формы держат ту же капризность, что и корни. <b>wnieść</b>: wniosę, wniesiesz, wniosą; прошедшее <b>wniosłem / wniosłam</b>, он <b>wniósł</b>, она <b>wniosła</b>. <b>wynieść</b>: wyniosę; <b>wyniosłem / wyniosłam</b>, он <b>wyniósł</b>, она <b>wyniosła</b>. <b>przenieść</b>: przeniosę; <b>przeniósł / przeniosła</b>. <b>przewieźć</b>: przewiozę; <b>przewiózł / przewiozła</b>.",
     "Буква ó снова живёт только в мужской форме единственного числа: wniósł, wyniósł, przeniósł, przewiózł. Женская и множественная её теряют: wniosła, wynieśli, przeniosły.",
     "Разница между <b>przenieść</b> и <b>przewieźć</b> ровно русская: перенести — в руках, перевезти — на колёсах. <b>Przenieśliśmy szafę do drugiego pokoju</b> (в руках, внутри квартиры). <b>Przewieźliśmy meble furgonetką</b> (фургоном, через город)."
   ],
   "audio":"Вчерашние nieść и wieźć сегодня надевают приставки — и получается словарь переезда, слово в слово русский. Wnieść — внести, wynieść — вынести, przenieść — перенести, przewieźć — перевезти, zanieść — отнести, odnieść — отнести обратно, вернуть. Формы держат ту же капризность, что и корни. Wnieść: wniosę, wniesiesz, wniosą; прошедшее wniosłem, wniosłam, он wniósł, она wniosła. Wynieść: wyniosę; wyniosłem, wyniosłam, он wyniósł, она wyniosła. Przenieść: przeniosę; przeniósł, przeniosła. Przewieźć: przewiozę; przewiózł, przewiozła. Буква ó снова живёт только в мужской форме единственного числа. Женская и множественная её теряют: wniosła, wynieśli, przeniosły. Разница между przenieść и przewieźć ровно русская: перенести — в руках, перевезти — на колёсах. Przenieśliśmy szafę do drugiego pokoju — в руках, внутри квартиры. Przewieźliśmy meble furgonetką — фургоном, через город.",
   "table":{"rows":[
     ["<b>wnieść</b> · wniosę · on wniósł <button class=\"play\" data-say=\"wnieść, wniosę, wniósł\">🔊</button>","внести"],
     ["<b>wynieść</b> · wyniosę · on wyniósł <button class=\"play\" data-say=\"wynieść, wyniosę, wyniósł\">🔊</button>","вынести"],
     ["<b>przenieść</b> · przeniosę · on przeniósł <button class=\"play\" data-say=\"przenieść, przeniosę, przeniósł\">🔊</button>","перенести (в руках)"],
     ["<b>przewieźć</b> · przewiozę · on przewiózł <button class=\"play\" data-say=\"przewieźć, przewiozę, przewiózł\">🔊</button>","перевезти (на колёсах)"],
     ["<b>zanieść</b> · <b>odnieść</b> <button class=\"play\" data-say=\"zanieść, odnieść\">🔊</button>","отнести · вернуть, отнести обратно"],
     ["ona <b>wniosła</b> · oni <b>wnieśli</b> <button class=\"play\" data-say=\"wniosła, wnieśli\">🔊</button>","она внесла · они внесли"]
   ],"star":0},
   "examples":[
     {"ru":"Мы вынесли всё за два часа.","en":"<b>Wynieśliśmy</b> wszystko w dwie godziny.","say":"Wynieśliśmy wszystko w dwie godziny."},
     {"ru":"Брат внёс диван на третий этаж.","en":"Brat <b>wniósł</b> kanapę na trzecie piętro.","say":"Brat wniósł kanapę na trzecie piętro."},
     {"ru":"Перенеси эту коробку в кухню.","en":"<b>Przenieś</b> to pudło do kuchni.","say":"Przenieś to pudło do kuchni."},
     {"ru":"Мебель перевезли фургоном.","en":"Meble <b>przewieźli</b> furgonetką.","say":"Meble przewieźli furgonetką."},
     {"ru":"Отнеси ключи соседке.","en":"<b>Zanieś</b> klucze sąsiadce.","say":"Zanieś klucze sąsiadce."}
   ],
   "mistakes":[
     {"wrong":"Przewieźliśmy szafę do drugiego pokoju.","right":"<b>Przenieśliśmy</b> szafę do drugiego pokoju.","why":"внутри квартиры мебель переносят в руках — przenieść. Przewieźć — только на транспорте."},
     {"wrong":"On wynióssł pudła.","right":"On <b>wyniósł</b> pudła.","why":"мужская форма — wyniósł, с ó и одной ł, как niósł."}
   ],
   "mnemonic":"📦 wnieść внести · wynieść вынести · przenieść перенести в руках · przewieźć перевезти на колёсах.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> в руках или на машине?",
      "q":"«Мы перенесли шкаф в другую комнату» —","opts":["Przewieźliśmy szafę do drugiego pokoju","Przenieśliśmy szafę do drugiego pokoju","Wynieśliśmy szafę do drugiego pokoju"],"answer":1,
      "explain":"В руках, внутри квартиры — <b>przenieśliśmy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> наружу или внутрь?",
      "q":"«Они вынесли всё за два часа» —","opts":["Wnieśli wszystko w dwie godziny","Wynieśli wszystko w dwie godziny","Przenieśli wszystko w dwie godziny"],"answer":1,
      "explain":"Наружу — приставка wy-: <b>wynieśli</b>."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«Перенеси эту коробку в кухню»","accept":["przenieś to pudło do kuchni","przenies to pudlo do kuchni"],"placeholder":"Przenieś…"}
   ]
  },
  {
   "eyebrow":"Правило 2 · Три брата",
   "title":"<em>wprowadzić się</em>, <em>wyprowadzić się</em>, <em>przeprowadzić się</em>",
   "paras":[
     "Один корень <b>-prowadzić</b> («вести») и три приставки дают три разных дня жизни. <b>wprowadzić się</b> — въехать, вселиться: <b>Wprowadzam się w sobotę.</b> <b>wyprowadzić się</b> — съехать: <b>Wyprowadził się ze starego mieszkania.</b> <b>przeprowadzić się</b> — переехать (из одного жилья в другое): <b>Przeprowadziliśmy się do Krakowa dwa lata temu.</b>",
     "Ловушка тут одна, зато настоящая: без <b>się</b> эти глаголы значат совсем другое. <b>Przeprowadzić</b> — провести: <b>przeprowadzić remont</b> (провести ремонт), <b>przeprowadzić rozmowę</b> (провести разговор). <b>Wprowadzić</b> — ввести: <b>wprowadzić nowe zasady</b> (ввести новые правила). Одна маленькая частица меняет весь смысл.",
     "Существительное дня: <b>przeprowadzka</b> — переезд. <b>Mam przeprowadzkę w sobotę.</b> <b>Pomagam mu w przeprowadzce.</b>",
     "И слова, которые в этот день звучат каждые пять минут: <b>pudło</b> и <b>karton</b> (коробка), <b>meble</b> (мебель), <b>kanapa</b> (диван), <b>szafa</b> (шкаф), <b>lodówka</b> (холодильник), <b>winda</b> (лифт), <b>klatka schodowa</b> (подъезд, лестничная клетка), <b>piętro</b> (этаж), <b>klucze</b> (ключи)."
   ],
   "audio":"Один корень prowadzić, вести, и три приставки дают три разных дня жизни. Wprowadzić się — въехать, вселиться: wprowadzam się w sobotę. Wyprowadzić się — съехать: wyprowadził się ze starego mieszkania. Przeprowadzić się — переехать из одного жилья в другое: przeprowadziliśmy się do Krakowa dwa lata temu. Ловушка тут одна, зато настоящая: без się эти глаголы значат совсем другое. Przeprowadzić — провести: przeprowadzić remont, провести ремонт; przeprowadzić rozmowę, провести разговор. Wprowadzić — ввести: wprowadzić nowe zasady, ввести новые правила. Одна маленькая частица меняет весь смысл. Существительное дня: przeprowadzka, переезд. Mam przeprowadzkę w sobotę. Pomagam mu w przeprowadzce. И слова, которые в этот день звучат каждые пять минут: pudło и karton, коробка; meble, мебель; kanapa, диван; szafa, шкаф; lodówka, холодильник; winda, лифт; klatka schodowa, подъезд; piętro, этаж; klucze, ключи.",
   "table":{"rows":[
     ["<b>wprowadzić się</b> <button class=\"play\" data-say=\"wprowadzić się\">🔊</button>","въехать, вселиться"],
     ["<b>wyprowadzić się</b> <button class=\"play\" data-say=\"wyprowadzić się\">🔊</button>","съехать с квартиры"],
     ["<b>przeprowadzić się</b> <button class=\"play\" data-say=\"przeprowadzić się\">🔊</button>","переехать"],
     ["⚠️ <b>przeprowadzić remont</b> (без się) <button class=\"play\" data-say=\"przeprowadzić remont\">🔊</button>","провести ремонт"],
     ["<b>przeprowadzka</b> <button class=\"play\" data-say=\"przeprowadzka\">🔊</button>","переезд"],
     ["winda · klatka schodowa · piętro <button class=\"play\" data-say=\"winda, klatka schodowa, piętro\">🔊</button>","лифт · подъезд · этаж"]
   ],"star":2},
   "examples":[
     {"ru":"Я въезжаю в субботу.","en":"<b>Wprowadzam się</b> w sobotę.","say":"Wprowadzam się w sobotę."},
     {"ru":"Он съехал со старой квартиры в пятницу.","en":"<b>Wyprowadził się</b> ze starego mieszkania w piątek.","say":"Wyprowadził się ze starego mieszkania w piątek."},
     {"ru":"Мы переехали в Краков два года назад.","en":"<b>Przeprowadziliśmy się</b> do Krakowa dwa lata temu.","say":"Przeprowadziliśmy się do Krakowa dwa lata temu."},
     {"ru":"Летом мы сделали ремонт в кухне.","en":"Latem <b>przeprowadziliśmy remont</b> w kuchni.","gloss":"без się — «провести»","say":"Latem przeprowadziliśmy remont w kuchni."},
     {"ru":"У меня переезд в субботу.","en":"Mam <b>przeprowadzkę</b> w sobotę.","say":"Mam przeprowadzkę w sobotę."}
   ],
   "mistakes":[
     {"wrong":"W sobotę przeprowadzam remont do nowego mieszkania.","right":"W sobotę <b>przeprowadzam się</b> do nowego mieszkania.","why":"переезжаю сам — с się. Без się получается «провожу ремонт»."}
   ],
   "mnemonic":"🏠 w-prowadzić się въехать · wy-prowadzić się съехать · prze-prowadzić się переехать. Без się — «ввести» и «провести».",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> человек меняет квартиру.",
      "q":"«В субботу я переезжаю» —","opts":["W sobotę przeprowadzam remont","W sobotę przeprowadzam się","W sobotę wprowadzam nowe zasady"],"answer":1,
      "explain":"О себе и о жилье — <b>przeprowadzam się</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> куда направлено движение?",
      "q":"«Он съехал со старой квартиры» —","opts":["Wprowadził się ze starego mieszkania","Wyprowadził się ze starego mieszkania","Przeprowadził stare mieszkanie"],"answer":1,
      "explain":"Наружу, вон — <b>wyprowadził się</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> тут нет частицы się — значит смысл другой.",
      "q":"Что значит <b>przeprowadzić remont</b>?","opts":["переехать с ремонтом","провести ремонт","съехать после ремонта"],"answer":1,
      "explain":"Без się глагол значит «провести»: <b>przeprowadzić remont, rozmowę, badanie</b>."}
   ]
  },
  {
   "eyebrow":"Правило 3 · Помощь",
   "title":"<em>pomagać komuś w czymś</em>",
   "paras":[
     "Глагол <b>pomagać / pomóc</b> ты знаешь с A2: он требует дательного падежа, как русское «помогать кому». <b>Pomagam Markowi. Pomogłam mamie. Pomóż mi.</b>",
     "Новое сегодня — вторая половина рамки: помощь в чём? Ставится <b>w</b> плюс предложный падеж: <b>pomagać komuś <u>w</u> czymś</b>. <b>Pomagam Markowi w przeprowadzce. Pomagała mi w nauce. Pomóż mi w kuchni.</b> Русское «помочь в переезде» устроено точно так же.",
     "Второй способ, ещё более частый в живой речи: <b>pomóc</b> плюс инфинитив. <b>Pomogłam mu spakować książki</b> («помогла ему упаковать книги»), <b>Pomóż mi wnieść szafę</b> («помоги мне внести шкаф»).",
     "И три готовые фразы, которые стоит уметь сказать первыми: <b>Mogę ci jakoś pomóc?</b> («Могу тебе чем-нибудь помочь?»), <b>Dam radę sam / sama</b> («справлюсь сам(а)»), <b>Dzięki za pomoc</b> («спасибо за помощь»)."
   ],
   "audio":"Глагол pomagać и pomóc ты знаешь с уровня A2: он требует дательного падежа, как русское «помогать кому». Pomagam Markowi. Pomogłam mamie. Pomóż mi. Новое сегодня — вторая половина рамки: помощь в чём? Ставится w плюс предложный падеж: pomagać komuś w czymś. Pomagam Markowi w przeprowadzce. Pomagała mi w nauce. Pomóż mi w kuchni. Русское «помочь в переезде» устроено точно так же. Второй способ, ещё более частый в живой речи: pomóc плюс инфинитив. Pomogłam mu spakować książki, помогла ему упаковать книги. Pomóż mi wnieść szafę, помоги мне внести шкаф. И три готовые фразы, которые стоит уметь сказать первыми: mogę ci jakoś pomóc, могу тебе чем-нибудь помочь; dam radę sam или sama, справлюсь сам или сама; dzięki za pomoc, спасибо за помощь.",
   "table":{"rows":[
     ["<b>pomagać komuś</b> (кому) <button class=\"play\" data-say=\"Pomagam Markowi\">🔊</button>","помогать кому — дательный"],
     ["<b>w czymś</b> (в чём) <button class=\"play\" data-say=\"w przeprowadzce\">🔊</button>","в чём — w плюс предложный"],
     ["Pomagam Markowi <b>w przeprowadzce</b>. <button class=\"play\" data-say=\"Pomagam Markowi w przeprowadzce\">🔊</button>","Помогаю Мареку с переездом."],
     ["<b>Pomóż mi wnieść szafę.</b> <button class=\"play\" data-say=\"Pomóż mi wnieść szafę\">🔊</button>","Помоги мне внести шкаф."],
     ["<b>Mogę ci jakoś pomóc?</b> <button class=\"play\" data-say=\"Mogę ci jakoś pomóc?\">🔊</button>","Могу тебе чем-нибудь помочь?"],
     ["<b>Dam radę sam / sama.</b> <button class=\"play\" data-say=\"Dam radę sam, dam radę sama\">🔊</button>","Справлюсь сам / сама."]
   ],"star":2},
   "examples":[
     {"ru":"Я помогаю Мареку с переездом.","en":"<b>Pomagam Markowi w przeprowadzce</b>.","say":"Pomagam Markowi w przeprowadzce."},
     {"ru":"Она помогала мне с учёбой весь год.","en":"<b>Pomagała mi w nauce</b> cały rok.","say":"Pomagała mi w nauce cały rok."},
     {"ru":"Помоги мне упаковать книги.","en":"<b>Pomóż mi spakować</b> książki.","say":"Pomóż mi spakować książki."},
     {"ru":"Спасибо за помощь, без тебя я бы не справился.","en":"<b>Dzięki za pomoc</b>, bez ciebie bym nie dał rady.","say":"Dzięki za pomoc, bez ciebie bym nie dał rady."}
   ],
   "mistakes":[
     {"wrong":"Pomagam Marka w przeprowadzce.","right":"Pomagam <b>Markowi</b> w przeprowadzce.","why":"pomagać требует дательного падежа: Markowi, mamie, bratu — как русское «помогаю Мареку»."},
     {"wrong":"Pomagam mu z przeprowadzką.","right":"Pomagam mu <b>w przeprowadzce</b>.","why":"помощь «в чём» — предлог w плюс предложный падеж."}
   ],
   "mnemonic":"🤝 pomagam + komu (dativ) + w czym (предложный): Pomagam Markowi w przeprowadzce.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после pomagać.",
      "q":"«Я помогаю Мареку» —","opts":["Pomagam Marka","Pomagam Markowi","Pomagam z Markiem"],"answer":1,
      "explain":"Дательный падеж: <b>Markowi</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> помощь в чём — какой предлог?",
      "q":"«Она помогала мне с учёбой» —","opts":["Pomagała mi z nauką","Pomagała mi w nauce","Pomagała mnie w nauce"],"answer":1,
      "explain":"Рамка — <b>pomagać komuś w czymś</b>: mi w nauce."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Помоги мне внести шкаф»</b>","answer":"Pomóż mi wnieść szafę"}
   ]
  },
  {
   "eyebrow":"Правило 4 · Радость",
   "title":"<em>cieszyć się z czegoś</em>",
   "paras":[
     "Второй глагол с собственной рамкой, и здесь русская подсказка слегка сбивает. Радуются по-польски <b>z</b> плюс родительный падеж: <b>Cieszę się <u>z</u> nowego mieszkania.</b> <b>Cieszę się z twojego sukcesu.</b> Русское «радуюсь чему» тут не сработает — нужен предлог z.",
     "Если радость направлена вперёд, к будущему событию, ставят <b>na</b> плюс винительный: <b>Cieszę się na sobotę</b> — «жду субботу с радостью». Разница как между «рад квартире» и «предвкушаю субботу».",
     "А самая частая форма вообще без падежа: <b>Cieszę się, że…</b> — «рад, что…». <b>Cieszę się, że przyszłaś.</b> <b>Cieszę się, że wszystko się udało.</b>",
     "И маленькая культурная деталь на финал дня: вечеринка по случаю новоселья называется <b>parapetówka</b> — от слова <b>parapet</b> (подоконник). Пока мебели нет, гости сидят где придётся, а еда стоит на подоконнике. Отсюда и название."
   ],
   "audio":"Второй глагол с собственной рамкой, и здесь русская подсказка слегка сбивает. Радуются по-польски z плюс родительный падеж: cieszę się z nowego mieszkania; cieszę się z twojego sukcesu. Русское «радуюсь чему» тут не сработает — нужен предлог z. Если радость направлена вперёд, к будущему событию, ставят na плюс винительный: cieszę się na sobotę, жду субботу с радостью. Разница как между «рад квартире» и «предвкушаю субботу». А самая частая форма вообще без падежа: cieszę się, że. Cieszę się, że przyszłaś. Cieszę się, że wszystko się udało. И маленькая культурная деталь на финал дня: вечеринка по случаю новоселья называется parapetówka, от слова parapet, подоконник. Пока мебели нет, гости сидят где придётся, а еда стоит на подоконнике. Отсюда и название.",
   "table":{"rows":[
     ["<b>cieszyć się z</b> + родительный <button class=\"play\" data-say=\"Cieszę się z nowego mieszkania\">🔊</button>","радоваться чему (уже есть)"],
     ["<b>cieszyć się na</b> + винительный <button class=\"play\" data-say=\"Cieszę się na sobotę\">🔊</button>","ждать с радостью (впереди)"],
     ["<b>Cieszę się, że…</b> <button class=\"play\" data-say=\"Cieszę się, że przyszłaś\">🔊</button>","Рад(а), что…"],
     ["<b>parapetówka</b> <button class=\"play\" data-say=\"parapetówka\">🔊</button>","новоселье (от parapet — подоконник)"],
     ["<b>Gratulacje!</b> <button class=\"play\" data-say=\"Gratulacje!\">🔊</button>","Поздравляю!"]
   ],"star":0},
   "examples":[
     {"ru":"Я очень рад новой квартире.","en":"Bardzo <b>cieszę się z</b> nowego mieszkania.","say":"Bardzo cieszę się z nowego mieszkania."},
     {"ru":"Мы радуемся твоему успеху.","en":"<b>Cieszymy się z</b> twojego sukcesu.","say":"Cieszymy się z twojego sukcesu."},
     {"ru":"Жду субботу с радостью.","en":"<b>Cieszę się na</b> sobotę.","say":"Cieszę się na sobotę."},
     {"ru":"Рада, что ты пришла.","en":"<b>Cieszę się, że</b> przyszłaś.","say":"Cieszę się, że przyszłaś."},
     {"ru":"Новоселье в следующую субботу.","en":"<b>Parapetówka</b> w przyszłą sobotę.","say":"Parapetówka w przyszłą sobotę."}
   ],
   "mistakes":[
     {"wrong":"Cieszę się nowemu mieszkaniu.","right":"<b>Cieszę się z</b> nowego mieszkania.","why":"польский требует предлог z и родительный падеж; дательный тут не работает."}
   ],
   "mnemonic":"💛 cieszyć się Z czegoś (уже есть) · cieszyć się NA coś (впереди) · cieszę się, że… (проще всего).",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни предлог радости.",
      "q":"«Я рад новой квартире» —","opts":["Cieszę się nowemu mieszkaniu","Cieszę się z nowego mieszkania","Cieszę się na nowe mieszkanie"],"answer":1,
      "explain":"Радость о том, что уже есть, — <b>z</b> плюс родительный."},
     {"type":"choice","howto":"<b>Что делать:</b> здесь падеж не нужен вовсе.",
      "q":"«Рад, что ты пришёл» —","opts":["Cieszę się, że przyszedłeś","Cieszę się z tego przyszedłeś","Cieszę się na to, przyszedłeś"],"answer":0,
      "explain":"С придаточным — просто <b>Cieszę się, że…</b>"},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — фраза для чужого праздника.",
      "target":"Cieszę się z twojego nowego mieszkania. Gratulacje!","sub":"я рад твоей новой квартире, поздравляю","want":"Cieszę się z twojego nowego mieszkania. Gratulacje!"}
   ]
  }
 ],
 "dialogue":{
   "intro":"Суббота, восемь утра, фургон у подъезда. Марек, Анна, брат Марека и четырнадцать коробок.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Zaczynamy. Najpierw wynosimy pudła, potem meble.","ru":"Начинаем. Сначала выносим коробки, потом мебель.",
      "words":[["wynosimy","выносим"],["meble","мебель"]]},
     {"who":"A","name":"Anna","side":"left","en":"Mogę ci jakoś pomóc? Wezmę te lżejsze.","ru":"Могу тебе чем-нибудь помочь? Возьму те, что полегче.",
      "words":[["pomóc","помочь"],["lżejsze","полегче"]]},
     {"who":"M","name":"Marek","side":"right","en":"Weź kuchnię. Brat i ja przeniesiemy szafę.","ru":"Возьми кухню. Мы с братом перенесём шкаф.",
      "words":[["Weź","возьми"],["przeniesiemy","перенесём"]]},
     {"who":"A","name":"Anna","side":"left","en":"Czy w nowym bloku jest winda?","ru":"А в новом доме есть лифт?",
      "words":[["bloku","доме"],["winda","лифт"]]},
     {"who":"M","name":"Marek","side":"right","en":"Jest, ale mała. Kanapę wniesiemy klatką schodową.","ru":"Есть, но маленький. Диван внесём по лестнице.",
      "words":[["wniesiemy","внесём"],["klatką schodową","по лестнице, через подъезд"]]},
     {"who":"A","name":"Anna","side":"left","en":"Trzecie piętro z kanapą. Pięknie.","ru":"Третий этаж с диваном. Прекрасно.",
      "words":[["Trzecie piętro","третий этаж"],["Pięknie","прекрасно"]]},
     {"who":"M","name":"Marek","side":"right","en":"Furgonetka przewiezie resztę o jedenastej.","ru":"Фургон перевезёт остальное в одиннадцать.",
      "words":[["Furgonetka","фургон"],["przewiezie","перевезёт"]]},
     {"who":"A","name":"Anna","side":"left","en":"A klucze od starego mieszkania?","ru":"А ключи от старой квартиры?",
      "words":[["klucze","ключи"],["starego","старой"]]},
     {"who":"M","name":"Marek","side":"right","en":"Zaniosę je właścicielce w poniedziałek. Wyprowadzam się dziś ostatecznie.","ru":"Отнесу их хозяйке в понедельник. Сегодня съезжаю окончательно.",
      "words":[["Zaniosę","отнесу"],["Wyprowadzam się","съезжаю"]]},
     {"who":"A","name":"Anna","side":"left","en":"Cieszę się z tego mieszkania bardziej niż ty.","ru":"Я радуюсь этой квартире больше, чем ты.",
      "words":[["Cieszę się z","радуюсь чему"],["bardziej niż","больше, чем"]]},
     {"who":"M","name":"Marek","side":"right","en":"Ja się jeszcze boję. Ale w sobotę robimy parapetówkę.","ru":"Я пока боюсь. Но в субботу делаем новоселье.",
      "words":[["boję się","боюсь"],["parapetówkę","новоселье"]]}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — всё, что нужно, чтобы пережить переезд по-польски.",
   "items":[
     {"en":"przeprowadzka","ru":"переезд","ex":"Mam przeprowadzkę w sobotę."},
     {"en":"przeprowadzić się","ru":"переехать","ex":"Przeprowadziliśmy się do Krakowa."},
     {"en":"wprowadzić się / wyprowadzić się","ru":"въехать / съехать","ex":"Wprowadzam się w sobotę."},
     {"en":"wnieść / wynieść","ru":"внести / вынести","ex":"Wynieśliśmy wszystko w dwie godziny."},
     {"en":"przenieść / przewieźć","ru":"перенести / перевезти","ex":"Przenieś to pudło do kuchni."},
     {"en":"zanieść / odnieść","ru":"отнести / вернуть","ex":"Zaniosę klucze w poniedziałek."},
     {"en":"pudło / karton","ru":"коробка","ex":"Mam czternaście pudeł."},
     {"en":"meble / kanapa / szafa","ru":"мебель / диван / шкаф","ex":"Kanapę wniesiemy klatką schodową."},
     {"en":"winda / klatka schodowa","ru":"лифт / подъезд, лестница","ex":"Winda jest mała."},
     {"en":"piętro","ru":"этаж","ex":"Mieszkam na trzecim piętrze."},
     {"en":"pomagać komuś w czymś","ru":"помогать кому в чём","ex":"Pomagam Markowi w przeprowadzce."},
     {"en":"cieszyć się z czegoś","ru":"радоваться чему","ex":"Cieszę się z nowego mieszkania."}
   ]
 },
 "drag":{
   "intro":"Перетащи глагол к его значению. Три из них отличаются только приставкой.",
   "pairs":[["wnieść","внести"],["wynieść","вынести"],["przenieść","перенести"],["przewieźć","перевезти"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как прошла суббота. Это самый длинный текст недели — и почти каждый глагол в нём с приставкой.",
   "title":"Sobota, ósma rano",
   "sentences":["W sobotę o ósmej pod domem stała furgonetka.","Najpierw wynieśliśmy pudła, potem meble.","Brat Marka wniósł kanapę na trzecie piętro sam.","Winda była za mała, więc szliśmy klatką schodową.","Szafę przenieśliśmy w trzy osoby i to było najtrudniejsze.","Resztę rzeczy furgonetka przewiozła o jedenastej.","Ja pomagałam Markowi w kuchni — talerze, garnki, dwa czajniki.","O drugiej zaczęło padać, ale wszystko było już w środku.","Marek zaniósł klucze właścicielce w poniedziałek.","Wieczorem siedzieliśmy na podłodze i jedliśmy pizzę.","Cieszę się z tego mieszkania prawie tak samo jak on.","Parapetówka będzie w następną sobotę."],
   "translation":"В субботу в восемь у дома стоял фургон. Сначала мы вынесли коробки, потом мебель. Брат Марека внёс диван на третий этаж один. Лифт был слишком маленький, так что мы шли по лестнице. Шкаф мы переносили втроём — это было самое трудное. Остальные вещи фургон перевёз в одиннадцать. Я помогала Мареку на кухне: тарелки, кастрюли, два чайника. В два часа пошёл дождь, но всё уже было внутри. Ключи Марек отнёс хозяйке в понедельник. Вечером мы сидели на полу и ели пиццу. Я радуюсь этой квартире почти так же, как он. Новоселье будет в следующую субботу."
 },
 "quiz":{
   "intro":"Шесть вопросов — и сюжетный день закрыт. 💛",
   "items":[
     {"q":"1. «Мы вынесли всё за два часа» —","opts":["Wnieśliśmy wszystko w dwie godziny","Wynieśliśmy wszystko w dwie godziny","Przenieśliśmy wszystko w dwie godziny"],"answer":1,
      "explain":"Наружу — приставка wy-: <b>wynieśliśmy</b>."},
     {"q":"2. «Брат внёс диван на третий этаж» —","opts":["Brat wyniósł kanapę na trzecie piętro","Brat przewiózł kanapę na trzecie piętro","Brat wniósł kanapę na trzecie piętro"],"answer":2,
      "explain":"Внутрь и вверх, в руках — <b>wniósł</b>."},
     {"q":"3. «В субботу я переезжаю» —","opts":["W sobotę przeprowadzam się","W sobotę przeprowadzam remont","W sobotę wprowadzam zasady"],"answer":0,
      "explain":"О себе и о жилье — <b>przeprowadzam się</b>; без się глагол значит «провожу»."},
     {"q":"4. «Я помогаю Мареку с переездом» —","opts":["Pomagam Marka z przeprowadzką","Pomagam Markowi w przeprowadzce","Pomagam Markiem w przeprowadzce"],"answer":1,
      "explain":"Рамка: <b>pomagać komuś w czymś</b> — Markowi w przeprowadzce."},
     {"q":"5. «Я рада новой квартире» —","opts":["Cieszę się nowemu mieszkaniu","Cieszę się z nowego mieszkania","Cieszę się nowe mieszkanie"],"answer":1,
      "explain":"Радость о том, что есть, — <b>z</b> плюс родительный падеж."},
     {"q":"6. Что такое <b>parapetówka</b>?","opts":["переезд","новоселье","подоконник"],"answer":1,
      "explain":"Вечеринка по случаю новоселья; сам подоконник — <b>parapet</b>."}
   ]
 },
 "picture":{
   "intro":"Опиши эту картинку — день переезда во всех подробностях.",
   "emoji":"📦",
   "prompt":"Представь квартиру в день переезда: коробки на полу, шкаф у двери, кто-то несёт диван по лестнице. Напиши 5–7 предложений о том, что происходит и кто кому помогает.",
   "hint":"Опоры: Na podłodze stoją pudła… Ktoś wnosi / wynosi… Brat pomaga mu w… Wszyscy cieszą się z… 📦",
   "example":"Na podłodze stoi dziesięć pudeł i dwie walizki. Marek wynosi kartony na dół, a jego brat wnosi kanapę na trzecie piętro. Winda jest za mała, więc idą klatką schodową. Anna pomaga im w kuchni i pakuje talerze. Szafę przeniosą później, bo jest bardzo ciężka. Wszyscy są zmęczeni, ale cieszą się z nowego mieszkania. Wieczorem będą jeść pizzę na podłodze."
 }
},
"7": {
 "day":7,"week":"01",
 "themeRu":"Повторение недели 1",
 "themeEn":"Powtórzenie",
 "intro":"Неделя за плечами — и она была щедрой. Из одного корня <b>iść</b> у тебя выросло семь глаголов, из <b>jechać</b> ещё семь, из <b>pisać</b> шесть, плюс пять пар движения и три фазовых глагола. Ничего нового сегодня не будет: соберём картину, проверим себя и послушаем, как всё это звучит в живом разговоре.",
 "introAudio":"Неделя за плечами — и она была щедрой. Из одного корня iść у тебя выросло семь глаголов, из jechać ещё семь, из pisać шесть, плюс пять пар движения и три фазовых глагола. Ничего нового сегодня не будет: соберём картину, проверим себя и послушаем, как всё это звучит в живом разговоре.",
 "goals":[
   "Собрать систему приставок целиком и назвать русский эквивалент каждой",
   "Уверенно ставить в прошедшее: <b>przyszedłem / weszłam / przyjechaliśmy / niósł</b>",
   "Не путать ловушки недели: <b>odpisać, przepis, zjechać, przeprowadzić się</b>",
   "Рассказать связную историю с приставочными глаголами"
 ],
 "learned":[
   "Собрал(а) систему приставок целиком и назвал(а) русский эквивалент каждой",
   "Уверенно поставил(а) в прошедшее: przyszedłem / weszłam / przyjechaliśmy / niósł",
   "Не спутал(а) ловушки недели: odpisać, przepis, zjechać, przeprowadzić się",
   "Рассказал(а) связную историю с приставочными глаголами"
 ],
 "review":{
   "intro":"Разминка по всей неделе. Не подглядывай — просто вспоминай. Промах не страшен: нужное правило рядом.",
   "introAudio":"Разминка по всей неделе. Не подглядывай — просто вспоминай. Промах не страшен: нужное правило рядом.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни первый день недели.",
      "q":"Марек о себе: «Я вошёл в кабинет» —","opts":["Weszłem do gabinetu","Wszedłem do gabinetu","Weszłam do gabinetu"],"answer":1,
      "explain":"Мужская форма — <b>wszedłem</b>; weszłam сказала бы женщина."},
     {"type":"choice","howto":"<b>Что делать:</b> пешком или на транспорте?",
      "q":"«Я приехал автобусом» —","opts":["Przyszedłem autobusem","Przyjechałem autobusem","Wjechałem autobusem"],"answer":1,
      "explain":"Транспорт — <b>przyjechałem</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> ищи приставку под текстом.",
      "q":"«Он подписал договор» —","opts":["Podpisał umowę","Zapisał umowę","Dopisał umowę"],"answer":0,
      "explain":"Подпись ставят снизу — <b>podpisał</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> сейчас или вообще?",
      "q":"«Каждое утро я бегаю» —","opts":["Co rano biegnę","Co rano biegam","Co rano pobiegnę"],"answer":1,
      "explain":"Регулярность — <b>biegam</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни правило вида после фазового глагола.",
      "q":"«Я начал читать» —","opts":["Zacząłem przeczytać","Zacząłem czytać","Zacząłem doczytać"],"answer":1,
      "explain":"После zacząć — только несовершенный вид: <b>czytać</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Я помогаю Мареку с переездом»</b>","answer":"Pomagam Markowi w przeprowadzce"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Повторение 1 · Завод приставок",
   "title":"Восемь кирпичей и два корня движения",
   "paras":[
     "Главная мысль недели одной строкой: польская система приставок — это русская система приставок. <b>przy-</b> при-, <b>wy-</b> вы-, <b>w(e)-</b> во-, <b>do-</b> до-, <b>prze-</b> пере-, <b>od-</b> ото-, <b>po-</b> по-, <b>z-</b> с-, <b>ob-</b> об-. Ты не учишь их значения — ты их узнаёшь.",
     "На <b>iść</b> они дают: przyjść, wyjść, wejść, dojść, przejść, odejść, pójść. В настоящем времени приставка садится на -jdę: <b>przyjdę, wyjdę, wejdę, dojdę</b>, и все они означают будущее, потому что приставка делает глагол совершенным.",
     "В прошедшем работает знакомая пара szedł / szła: <b>przyszedłem / przyszłam</b>, <b>wyszedłem / wyszłam</b>, <b>doszliśmy / doszłyśmy</b>. Две пары перебрасывают гласную: <b>wszedłem — weszłam</b>, <b>odszedł — odeszła</b>.",
     "На <b>jechać</b> тот же набор даёт przyjechać, wyjechać, dojechać, przejechać, wjechać, zjechać, objechać — и здесь прошедшее абсолютно правильное: przyjechałem, przyjechała, przyjechaliśmy. Плюс существительные с табло: <b>przyjazd, odjazd, wyjazd, dojazd</b>."
   ],
   "audio":"Главная мысль недели одной строкой: польская система приставок это русская система приставок. Przy- при-, wy- вы-, we- во-, do- до-, prze- пере-, od- ото-, po- по-, z- с-, ob- об-. Ты не учишь их значения — ты их узнаёшь. На iść они дают: przyjść, wyjść, wejść, dojść, przejść, odejść, pójść. В настоящем времени приставка садится на jdę: przyjdę, wyjdę, wejdę, dojdę, и все они означают будущее, потому что приставка делает глагол совершенным. В прошедшем работает знакомая пара szedł и szła: przyszedłem, przyszłam, wyszedłem, wyszłam, doszliśmy, doszłyśmy. Две пары перебрасывают гласную: wszedłem и weszłam, odszedł и odeszła. На jechać тот же набор даёт przyjechać, wyjechać, dojechać, przejechać, wjechać, zjechać, objechać — и здесь прошедшее абсолютно правильное: przyjechałem, przyjechała, przyjechaliśmy. Плюс существительные с табло: przyjazd, odjazd, wyjazd, dojazd.",
   "table":{"rows":[
     ["przy- при- · wy- вы- · w(e)- во- <button class=\"play\" data-say=\"przyjść, wyjść, wejść\">🔊</button>","przyjść · wyjść · wejść"],
     ["do- до- · prze- пере- · od- ото- <button class=\"play\" data-say=\"dojść, przejść, odejść\">🔊</button>","dojść · przejść · odejść"],
     ["<b>przyjdę / wyjdę / wejdę</b> <button class=\"play\" data-say=\"przyjdę, wyjdę, wejdę\">🔊</button>","приду / выйду / войду — будущее"],
     ["<b>przyszedłem / przyszłam</b> <button class=\"play\" data-say=\"przyszedłem, przyszłam\">🔊</button>","я пришёл / я пришла"],
     ["⚠️ <b>wszedłem — weszłam</b> · <b>odszedł — odeszła</b> <button class=\"play\" data-say=\"wszedłem, weszłam, odszedł, odeszła\">🔊</button>","две капризные пары недели"],
     ["<b>przyjechałem</b> · przyjazd, odjazd <button class=\"play\" data-say=\"przyjechałem, przyjazd, odjazd\">🔊</button>","я приехал · приезд, отъезд"]
   ],"star":4},
   "examples":[
     {"ru":"Я вышел из дома, перешёл площадь и пришёл на работу.","en":"<b>Wyszedłem</b> z domu, <b>przeszedłem</b> przez plac i <b>przyszedłem</b> do pracy.","say":"Wyszedłem z domu, przeszedłem przez plac i przyszedłem do pracy."},
     {"ru":"Она вошла и села у окна.","en":"<b>Weszła</b> i usiadła przy oknie.","say":"Weszła i usiadła przy oknie."},
     {"ru":"Мы приехали вчера, доехали без проблем.","en":"<b>Przyjechaliśmy</b> wczoraj, <b>dojechaliśmy</b> bez problemów.","say":"Przyjechaliśmy wczoraj, dojechaliśmy bez problemów."},
     {"ru":"Отправление поезда в шесть, приезд в девять.","en":"<b>Odjazd</b> pociągu o szóstej, <b>przyjazd</b> o dziewiątej.","say":"Odjazd pociągu o szóstej, przyjazd o dziewiątej."}
   ],
   "mistakes":[
     {"wrong":"Weszłem do pokoju.","right":"<b>Wszedłem</b> do pokoju.","why":"мужская форма — wszedłem, женская — weszłam. Формы «weszłem» не существует."},
     {"wrong":"Przyjechałem do ciebie pieszo.","right":"<b>Przyszedłem</b> do ciebie pieszo.","why":"jechać — только про транспорт."}
   ],
   "mnemonic":"🧱 Один корень плюс восемь приставок = восемь глаголов. И так с каждым корнем.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> смотри на приставку.",
      "q":"«Мы дошли до вокзала» —","opts":["Przeszliśmy do dworca","Doszliśmy do dworca","Odeszliśmy do dworca"],"answer":1,
      "explain":"До точки — приставка do-: <b>doszliśmy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто говорит.",
      "q":"Анна о себе: «Я вышла в семь» —","opts":["Wyszedłam o siódmej","Wyszłam o siódmej","Wyszła o siódmej"],"answer":1,
      "explain":"Женская форма короткая: <b>wyszłam</b>."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«Приду завтра в семь» (я)","accept":["przyjdę jutro o siódmej","przyjde jutro o siodmej","jutro przyjdę o siódmej"],"placeholder":"Przyjdę…"}
   ]
  },
  {
   "eyebrow":"Повторение 2 · Приставка на любом корне",
   "title":"Семья <em>pisać</em> и четыре ловушки недели",
   "paras":[
     "Завод работает не только на движении. От <b>pisać</b>: <b>podpisać</b> (подписать), <b>zapisać</b> (записать), <b>przepisać</b> (переписать), <b>opisać</b> (описать), <b>dopisać</b> (дописать), <b>wypisać</b> (выписать), <b>odpisać</b> (ответить письменно). От <b>czytać</b>: przeczytać, doczytać, poczytać, odczytać.",
     "Стратегия та же: отдели приставку, посмотри на корень, проверь догадку. Она подтвердится в подавляющем большинстве случаев — но не во всех, и это честная часть системы.",
     "Четыре места, где подсказка обманывает, стоит держать в голове списком. <b>odpisać</b> — не «отписать», а «ответить письменно». <b>przepis</b> — рецепт блюда или правило (рецепт от врача — <b>recepta</b>). <b>zjechać</b> — только «съехать вниз»; съехать с квартиры — <b>wyprowadzić się</b>. <b>przeprowadzić się</b> — переехать, а без <b>się</b> тот же глагол значит «провести» (remont, rozmowę).",
     "Заметь пропорцию: около тридцати новых глаголов за неделю — и четыре расхождения. В большинстве языков это соотношение обратное."
   ],
   "audio":"Завод работает не только на движении. От pisać: podpisać, подписать; zapisać, записать; przepisać, переписать; opisać, описать; dopisać, дописать; wypisać, выписать; odpisać, ответить письменно. От czytać: przeczytać, doczytać, poczytać, odczytać. Стратегия та же: отдели приставку, посмотри на корень, проверь догадку. Она подтвердится в подавляющем большинстве случаев, но не во всех, и это честная часть системы. Четыре места, где подсказка обманывает, стоит держать в голове списком. Odpisać — не «отписать», а «ответить письменно». Przepis — рецепт блюда или правило; рецепт от врача это recepta. Zjechać — только «съехать вниз»; съехать с квартиры это wyprowadzić się. Przeprowadzić się — переехать, а без się тот же глагол значит «провести»: remont, rozmowę. Заметь пропорцию: около тридцати новых глаголов за неделю и четыре расхождения. В большинстве языков это соотношение обратное.",
   "table":{"rows":[
     ["<b>podpisać · zapisać · opisać</b> <button class=\"play\" data-say=\"podpisać, zapisać, opisać\">🔊</button>","подписать · записать · описать"],
     ["<b>dopisać · wypisać · przepisać</b> <button class=\"play\" data-say=\"dopisać, wypisać, przepisać\">🔊</button>","дописать · выписать · переписать"],
     ["⚠️ <b>odpisać</b> na list <button class=\"play\" data-say=\"odpisać na list\">🔊</button>","ответить на письмо"],
     ["⚠️ <b>przepis</b> · <b>recepta</b> <button class=\"play\" data-say=\"przepis, recepta\">🔊</button>","рецепт блюда · рецепт от врача"],
     ["⚠️ <b>zjechać</b> · <b>wyprowadzić się</b> <button class=\"play\" data-say=\"zjechać, wyprowadzić się\">🔊</button>","съехать вниз · съехать с квартиры"],
     ["⚠️ <b>przeprowadzić się</b> · <b>przeprowadzić remont</b> <button class=\"play\" data-say=\"przeprowadzić się, przeprowadzić remont\">🔊</button>","переехать · провести ремонт"]
   ],"star":2},
   "examples":[
     {"ru":"Я записалась на курс и подписала договор.","en":"<b>Zapisałam się</b> na kurs i <b>podpisałam</b> umowę.","say":"Zapisałam się na kurs i podpisałam umowę."},
     {"ru":"Он ответил мне через час.","en":"<b>Odpisał</b> mi po godzinie.","say":"Odpisał mi po godzinie."},
     {"ru":"Врач выписал рецепт на антибиотик.","en":"Lekarz <b>wypisał receptę</b> na antybiotyk.","say":"Lekarz wypisał receptę na antybiotyk."},
     {"ru":"У меня есть хороший рецепт супа.","en":"Mam dobry <b>przepis</b> na zupę.","say":"Mam dobry przepis na zupę."}
   ],
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> речь о сообщении, не о бумаге.",
      "q":"«Она мне ещё не ответила» —","opts":["Jeszcze mi nie opisała","Jeszcze mi nie odpisała","Jeszcze mi nie przepisała"],"answer":1,
      "explain":"Ответить письменно — <b>odpisać</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни кухонное слово.",
      "q":"«Дай мне рецепт этого пирога» —","opts":["Daj mi receptę na to ciasto","Daj mi przepis na to ciasto","Daj mi podpis na to ciasto"],"answer":1,
      "explain":"Рецепт блюда — <b>przepis</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> есть ли тут się?",
      "q":"«Летом мы сделали ремонт» —","opts":["Latem przeprowadziliśmy się remont","Latem przeprowadziliśmy remont","Latem wyprowadziliśmy remont"],"answer":1,
      "explain":"Без się — «провести»: <b>przeprowadzić remont</b>."}
   ],
   "mnemonic":"⚠️ Четыре ловушки недели: odpisać · przepis / recepta · zjechać / wyprowadzić się · przeprowadzić (się)."
  },
  {
   "eyebrow":"Повторение 3 · Пары движения",
   "title":"<em>biegnę / biegam · niosę / noszę · wiozę / wożę</em>",
   "paras":[
     "Пять пар, которые достроили систему из A2. <b>biec / biegać</b>, <b>lecieć / latać</b>, <b>płynąć / pływać</b>, <b>nieść / nosić</b>, <b>wieźć / wozić</b>. Первый глагол пары — одно направленное движение сейчас, второй — вообще, регулярно, туда-обратно. Ровно как «бегу / бегаю».",
     "Формы, которые стоит помнить наизусть: <b>biegnę</b> (не «biegę»), <b>lecę</b>, <b>płynę</b>, <b>niosę</b>, <b>wiozę</b>. В прошедшем — <b>biegłem</b>, <b>leciałem</b> (но oni <b>lecieli</b>), <b>płynąłem / płynęłam</b>, и две формы с ó: <b>niósł</b> и <b>wiózł</b>, только в мужском единственном числе.",
     "Переносные значения совпадают с русскими: <b>czas leci</b> («время летит»), <b>czas płynie</b>, <b>rzeka płynie</b>, <b>nosić okulary</b> («носить очки»). Разговорное <b>Jak leci?</b> — «как дела?».",
     "И самое полезное следствие: приставки садятся и сюда. <b>przynieść</b> (принести), <b>wnieść</b> (внести), <b>wynieść</b> (вынести), <b>przenieść</b> (перенести), <b>przywieźć</b> (привезти), <b>przewieźć</b> (перевезти), <b>zanieść</b> (отнести). Именно они держали весь вчерашний переезд."
   ],
   "audio":"Пять пар, которые достроили систему из уровня A2. Biec и biegać, lecieć и latać, płynąć и pływać, nieść и nosić, wieźć и wozić. Первый глагол пары — одно направленное движение сейчас, второй — вообще, регулярно, туда-обратно. Ровно как бегу и бегаю. Формы, которые стоит помнить наизусть: biegnę, не biegę; lecę, płynę, niosę, wiozę. В прошедшем biegłem, leciałem, но oni lecieli; płynąłem, płynęłam; и две формы с ó: niósł и wiózł, только в мужском единственном числе. Переносные значения совпадают с русскими: czas leci, время летит; czas płynie; rzeka płynie; nosić okulary, носить очки. Разговорное jak leci — как дела. И самое полезное следствие: приставки садятся и сюда. Przynieść, принести; wnieść, внести; wynieść, вынести; przenieść, перенести; przywieźć, привезти; przewieźć, перевезти; zanieść, отнести. Именно они держали весь вчерашний переезд.",
   "table":{"rows":[
     ["<b>biegnę</b> / <b>biegam</b> <button class=\"play\" data-say=\"biegnę, biegam\">🔊</button>","бегу / бегаю"],
     ["<b>lecę</b> / <b>latam</b> · <b>płynę</b> / <b>pływam</b> <button class=\"play\" data-say=\"lecę, latam, płynę, pływam\">🔊</button>","лечу / летаю · плыву / плаваю"],
     ["<b>niosę</b> / <b>noszę</b> · on <b>niósł</b> <button class=\"play\" data-say=\"niosę, noszę, niósł\">🔊</button>","несу / ношу · он нёс"],
     ["<b>wiozę</b> / <b>wożę</b> · on <b>wiózł</b> <button class=\"play\" data-say=\"wiozę, wożę, wiózł\">🔊</button>","везу / вожу · он вёз"],
     ["<b>Czas leci.</b> · <b>Jak leci?</b> <button class=\"play\" data-say=\"Czas leci. Jak leci?\">🔊</button>","Время летит. · Как дела?"],
     ["<b>przynieść · wnieść · wynieść · przenieść</b> <button class=\"play\" data-say=\"przynieść, wnieść, wynieść, przenieść\">🔊</button>","принести · внести · вынести · перенести"]
   ],"star":0},
   "examples":[
     {"ru":"Каждое утро бегаю, а сегодня бежала сорок минут.","en":"Co rano <b>biegam</b>, a dziś <b>biegłam</b> czterdzieści minut.","say":"Co rano biegam, a dziś biegłam czterdzieści minut."},
     {"ru":"Он нёс два чемодана и ничего не сказал.","en":"<b>Niósł</b> dwie walizki i nic nie powiedział.","say":"Niósł dwie walizki i nic nie powiedział."},
     {"ru":"Брат привёз коробки, а диван мы внесли сами.","en":"Brat <b>przywiózł</b> pudła, a kanapę <b>wnieśliśmy</b> sami.","say":"Brat przywiózł pudła, a kanapę wnieśliśmy sami."},
     {"ru":"Время летит, а я всё ещё не собрал(а) книги.","en":"<b>Czas leci</b>, a ja <b>nadal</b> nie spakowałam książek.","gloss":"мужчина скажет: nie spakowałem","say":"Czas leci, a ja nadal nie spakowałam książek."}
   ],
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни настоящее время от biec.",
      "q":"«Я бегу на трамвай» —","opts":["Biegę na tramwaj","Biegnę na tramwaj","Biegam na tramwaj"],"answer":1,
      "explain":"Настоящее от biec — <b>biegnę</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> в руках или на колёсах?",
      "q":"«Мы перенесли шкаф в другую комнату» —","opts":["Przewieźliśmy szafę do drugiego pokoju","Przenieśliśmy szafę do drugiego pokoju","Wynieśliśmy szafę do drugiego pokoju"],"answer":1,
      "explain":"В руках, внутри квартиры — <b>przenieśliśmy</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Брат привёз коробки на машине»</b>","answer":"Brat przywiózł pudła samochodem"}
   ],
   "mnemonic":"🏃 Спроси по-русски: «бегу» или «бегаю»? «несу» или «ношу»? Ответ и будет польским глаголом."
  },
  {
   "eyebrow":"Повторение 4 · Фазы и рамки",
   "title":"<em>zacząć · skończyć · przestać</em> и две рекции",
   "paras":[
     "Три фазовых глагола и одно железное условие: после них — только несовершенный инфинитив. <b>Zacząłem czytać. Skończyłam pisać. Przestał palić.</b> Проверка по-русски: «начал делать», а не «начал сделать».",
     "Тонкая разница на пару: <b>skończyć palić</b> — докурить, довести до конца; <b>przestać palić</b> — бросить курить. И отдельная рамка у <b>kontynuować</b>: она берёт существительное (kontynuować naukę), а «продолжаю делать» передают через <b>dalej</b> или <b>nadal</b>: <b>czytam dalej</b>, <b>nadal czytam</b>.",
     "Слова о середине пути: <b>nadal</b> и <b>wciąż</b> («всё ещё»), <b>dalej</b> («дальше»), <b>już nie</b> («больше не»).",
     "И две рекции из сюжетного дня, которые стоит помнить целиком: <b>pomagać komuś w czymś</b> — дательный плюс w с предложным (<b>Pomagam Markowi w przeprowadzce</b>) и <b>cieszyć się z czegoś</b> — предлог z с родительным (<b>Cieszę się z nowego mieszkania</b>). Второе — редкий случай, где русская интуиция подсказывает не тот падеж."
   ],
   "audio":"Три фазовых глагола и одно железное условие: после них только несовершенный инфинитив. Zacząłem czytać. Skończyłam pisać. Przestał palić. Проверка по-русски: «начал делать», а не «начал сделать». Тонкая разница на пару: skończyć palić — докурить, довести до конца; przestać palić — бросить курить. И отдельная рамка у kontynuować: она берёт существительное, kontynuować naukę, а «продолжаю делать» передают через dalej или nadal: czytam dalej, nadal czytam. Слова о середине пути: nadal и wciąż, всё ещё; dalej, дальше; już nie, больше не. И две рекции из сюжетного дня, которые стоит помнить целиком: pomagać komuś w czymś — дательный плюс w с предложным, pomagam Markowi w przeprowadzce; и cieszyć się z czegoś — предлог z с родительным, cieszę się z nowego mieszkania. Второе — редкий случай, где русская интуиция подсказывает не тот падеж.",
   "table":{"rows":[
     ["zacząć / skończyć / przestać + <b>несов. инф.</b> <button class=\"play\" data-say=\"Zacząłem czytać. Skończyłam pisać. Przestał palić.\">🔊</button>","начал читать · закончила писать · перестал курить"],
     ["<b>skończyć palić</b> · <b>przestać palić</b> <button class=\"play\" data-say=\"skończyć palić, przestać palić\">🔊</button>","докурить · бросить курить"],
     ["<b>nadal · wciąż · dalej · już nie</b> <button class=\"play\" data-say=\"nadal, wciąż, dalej, już nie\">🔊</button>","всё ещё · дальше · больше не"],
     ["<b>pomagać komuś w czymś</b> <button class=\"play\" data-say=\"Pomagam Markowi w przeprowadzce\">🔊</button>","помогать кому в чём"],
     ["<b>cieszyć się z czegoś</b> <button class=\"play\" data-say=\"Cieszę się z nowego mieszkania\">🔊</button>","радоваться чему — с предлогом z"],
     ["<b>przeprowadzka</b> · wprowadzić się · wyprowadzić się <button class=\"play\" data-say=\"przeprowadzka, wprowadzić się, wyprowadzić się\">🔊</button>","переезд · въехать · съехать"]
   ],"star":3},
   "examples":[
     {"ru":"Я начала упаковывать кухню в семь и закончила в час.","en":"<b>Zaczęłam pakować</b> kuchnię o siódmej i <b>skończyłam</b> o pierwszej.","say":"Zaczęłam pakować kuchnię o siódmej i skończyłam o pierwszej."},
     {"ru":"Он бросил курить в январе и всё ещё держится.","en":"<b>Przestał palić</b> w styczniu i <b>nadal</b> wytrzymuje.","say":"Przestał palić w styczniu i nadal wytrzymuje."},
     {"ru":"Я помогала ему с переездом и рада этой квартире.","en":"<b>Pomagałam mu w przeprowadzce</b> i <b>cieszę się z</b> tego mieszkania.","say":"Pomagałam mu w przeprowadzce i cieszę się z tego mieszkania."}
   ],
   "mistakes":[
     {"wrong":"Zacząłem przeczytać książkę.","right":"<b>Zacząłem czytać</b> książkę.","why":"после фазового глагола — только несовершенный вид."},
     {"wrong":"Cieszę się nowemu mieszkaniu.","right":"<b>Cieszę się z</b> nowego mieszkania.","why":"рамка cieszyć się z czegoś: предлог z и родительный падеж."}
   ],
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни вид после skończyć.",
      "q":"«Она закончила писать письмо» —","opts":["Skończyła napisać list","Skończyła pisać list","Skończyła dopisać list"],"answer":1,
      "explain":"Закончить можно только процесс: <b>pisać</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни предлог радости.",
      "q":"«Мы радуемся твоему успеху» —","opts":["Cieszymy się twojemu sukcesowi","Cieszymy się z twojego sukcesu","Cieszymy się na twój sukces"],"answer":1,
      "explain":"О том, что уже случилось, — <b>z</b> плюс родительный."},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — вся неделя в одном предложении.",
      "target":"Wyszedłem z domu, dojechałem tramwajem i pomogłem Markowi w przeprowadzce.","sub":"вышел из дома, доехал на трамвае и помог Мареку с переездом — женский вариант: wyszłam, dojechałam, pomogłam","want":"Wyszedłem z domu, dojechałem tramwajem i pomogłem Markowi w przeprowadzce."}
   ],
   "mnemonic":"🧩 Фаза + несовершенный инфинитив · pomagać komuś W czymś · cieszyć się Z czegoś."
  }
 ],
 "dialogue":{
   "intro":"Воскресенье, новая квартира, коробки ещё не разобраны. Вся неделя в одном разговоре — тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Przyszłam pieszo, bo tramwaj stał w korku.","ru":"Пришла пешком, потому что трамвай стоял в пробке.",
      "words":[["Przyszłam","я пришла"],["w korku","в пробке"]]},
     {"who":"M","name":"Marek","side":"right","en":"Wejdź, tylko uważaj na pudła przy drzwiach.","ru":"Заходи, только осторожно с коробками у двери.",
      "words":[["Wejdź","заходи"],["uważaj","осторожно"]]},
     {"who":"A","name":"Anna","side":"left","en":"Widzę, że wniosłeś szafę. Sam?","ru":"Вижу, ты внёс шкаф. Один?",
      "words":[["wniosłeś","ты внёс"],["Sam","один, сам"]]},
     {"who":"M","name":"Marek","side":"right","en":"Z bratem. Przywiózł jeszcze dwa krzesła od rodziców.","ru":"С братом. Он привёз ещё два стула от родителей.",
      "words":[["Przywiózł","привёз"],["krzesła","стулья"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zacząłeś już rozpakowywać?","ru":"Уже начал распаковывать?",
      "words":[["Zacząłeś","ты начал"],["rozpakowywać","распаковывать"]]},
     {"who":"M","name":"Marek","side":"right","en":"Zacząłem i przestałem. Znalazłem stare zdjęcia.","ru":"Начал и перестал. Нашёл старые фотографии.",
      "words":[["przestałem","я перестал"],["zdjęcia","фотографии"]]},
     {"who":"A","name":"Anna","side":"left","en":"Pokaż. A propos — odpisałeś siostrze?","ru":"Покажи. Кстати — ты ответил сестре?",
      "words":[["Pokaż","покажи"],["odpisałeś","ты ответил письменно"]]},
     {"who":"M","name":"Marek","side":"right","en":"Jeszcze nie. Napiszę wieczorem, jak wyniosę resztę kartonów.","ru":"Ещё нет. Напишу вечером, как вынесу остальные коробки.",
      "words":[["Napiszę","напишу"],["wyniosę","вынесу"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dojazd stąd do centrum jest naprawdę niezły.","ru":"Дорога отсюда до центра действительно неплохая.",
      "words":[["Dojazd","дорога до места"],["niezły","неплохой"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dwadzieścia minut. Rano wyjeżdżam o wpół do ósmej.","ru":"Двадцать минут. Утром выезжаю в полвосьмого.",
      "words":[["wyjeżdżam","выезжаю"],["o wpół do ósmej","в полвосьмого"]]},
     {"who":"A","name":"Anna","side":"left","en":"Cieszę się z tego mieszkania. Serio.","ru":"Я рада этой квартире. Серьёзно.",
      "words":[["Cieszę się z","радуюсь чему"],["Serio","серьёзно"]]},
     {"who":"M","name":"Marek","side":"right","en":"Ja też. Za tydzień parapetówka, przyjdź o siódmej.","ru":"Я тоже. Через неделю новоселье, приходи в семь.",
      "words":[["parapetówka","новоселье"],["przyjdź","приходи"]]}
   ]
 },
 "scene":{
   "intro":"И короткая сценка — та же квартира, пять минут спустя. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Gdzie postawić to pudło?","ru":"Куда поставить эту коробку?"},
     {"who":"B","en":"Przenieś je do kuchni, proszę.","ru":"Перенеси её в кухню, пожалуйста."},
     {"who":"A","en":"Ciężkie. Co tam jest?","ru":"Тяжёлая. Что там?"},
     {"who":"B","en":"Książki. Nie doczytałem ani jednej.","ru":"Книги. Ни одной не дочитал."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать опор недели — те, что понадобятся уже завтра.",
   "items":[
     {"en":"przyjść / wyjść / wejść","ru":"прийти / выйти / войти","ex":"Przyjdź o siódmej."},
     {"en":"przyszedłem / przyszłam","ru":"я пришёл / я пришла","ex":"Przyszłam za późno."},
     {"en":"wszedłem / weszłam","ru":"я вошёл / я вошла","ex":"Weszłam do pokoju."},
     {"en":"przyjechać / wyjechać / dojechać","ru":"приехать / уехать / доехать","ex":"Dojechaliśmy bez problemów."},
     {"en":"przyjazd / odjazd / dojazd","ru":"приезд / отправление / дорога до места","ex":"Dojazd zajmuje pół godziny."},
     {"en":"podpisać / zapisać się / odpisać","ru":"подписать / записаться / ответить письменно","ex":"Odpisała po godzinie."},
     {"en":"przepis / recepta","ru":"рецепт блюда / рецепт от врача","ex":"Mam dobry przepis na zupę."},
     {"en":"biegnę / biegam · niosę / noszę","ru":"бегу / бегаю · несу / ношу","ex":"Co rano biegam w parku."},
     {"en":"przynieść / wnieść / wynieść","ru":"принести / внести / вынести","ex":"Wynieśliśmy wszystko w dwie godziny."},
     {"en":"zacząć / skończyć / przestać","ru":"начать / закончить / перестать","ex":"Przestał palić w styczniu."},
     {"en":"pomagać komuś w czymś","ru":"помогать кому в чём","ex":"Pomagam Markowi w przeprowadzce."},
     {"en":"cieszyć się z czegoś","ru":"радоваться чему","ex":"Cieszę się z nowego mieszkania."}
   ]
 },
 "drag":{
   "intro":"Финальная игра недели: перетащи польскую форму к её значению.",
   "pairs":[["weszłam","я вошла"],["przyjechaliśmy","мы приехали"],["odpisał","он ответил письменно"],["przestał palić","он бросил курить"]]
 },
 "reading":{
   "intro":"Итоговый текст недели: Анна рассказывает всю неделю от возвращения до переезда. Почти каждый глагол здесь — с приставкой.",
   "title":"Tydzień",
   "sentences":["W poniedziałek rano przyjechaliśmy z Włoch.","Wyszliśmy na peron o siódmej i doszliśmy do tramwaju pieszo.","Wieczorem Marek przyszedł do mnie z nowiną: kupił mieszkanie.","We wtorek opowiadał mi o dojeździe do centrum — dwadzieścia minut tramwajem.","W piątek pojechaliśmy do banku i podpisał umowę.","Przeczytał wszystko dwa razy, a datę dopisał na końcu.","W czwartek jego brat przywiózł pudła, a rodzice przylecieli z Gdańska.","W sobotę o ósmej zaczęliśmy wynosić rzeczy.","Kanapę wnieśli klatką schodową, bo winda była za mała.","Ja pomagałam Markowi w kuchni i spakowałam wszystkie talerze.","O drugiej zaczęło padać, ale wszystko było już w środku.","Wieczorem siedzieliśmy na podłodze i cieszyliśmy się z tego mieszkania."],
   "translation":"В понедельник утром мы приехали из Италии. Вышли на перрон в семь и дошли до трамвая пешком. Вечером Марек пришёл ко мне с новостью: он купил квартиру. Во вторник рассказывал мне про дорогу до центра — двадцать минут на трамвае. В пятницу мы поехали в банк, и он подписал договор. Прочитал всё дважды, а дату дописал в конце. В четверг его брат привёз коробки, а родители прилетели из Гданьска. В субботу в восемь мы начали выносить вещи. Диван внесли по лестнице, потому что лифт был слишком маленький. Я помогала Мареку на кухне и упаковала все тарелки. В два часа пошёл дождь, но всё уже было внутри. Вечером мы сидели на полу и радовались этой квартире."
 },
 "quiz":{
   "intro":"Маленький экзамен недели — восемь вопросов. Порог мягкий, а правило всегда рядом. 💛",
   "items":[
     {"q":"1. Анна о себе: «Я вошла в комнату» —","opts":["Wszedłam do pokoju","Weszłam do pokoju","Wyszłam do pokoju"],"answer":1,
      "explain":"Женская форма — <b>weszłam</b>; мужская — wszedłem."},
     {"q":"2. «Мы дошли до вокзала пешком» —","opts":["Doszliśmy do dworca pieszo","Dojechaliśmy do dworca pieszo","Przeszliśmy do dworca pieszo"],"answer":0,
      "explain":"Пешком и до точки — <b>doszliśmy</b>."},
     {"q":"3. «Дорога до работы занимает час» —","opts":["Odjazd do pracy zajmuje godzinę","Dojazd do pracy zajmuje godzinę","Wyjazd do pracy zajmuje godzinę"],"answer":1,
      "explain":"Как добираешься — <b>dojazd</b>."},
     {"q":"4. «Она мне ещё не ответила на письмо» —","opts":["Jeszcze nie odpisała","Jeszcze nie opisała","Jeszcze nie przepisała"],"answer":0,
      "explain":"Ответить письменно — <b>odpisać</b>."},
     {"q":"5. «Каждое утро я бегаю» —","opts":["Co rano biegnę","Co rano biegam","Co rano pobiegnę"],"answer":1,
      "explain":"Регулярность — <b>biegam</b>."},
     {"q":"6. «Он нёс два чемодана» —","opts":["Nosił dwie walizki","Niósł dwie walizki","Niosła dwie walizki"],"answer":1,
      "explain":"Один раз, в руках, о мужчине — <b>niósł</b>."},
     {"q":"7. «Я начал читать эту книгу» —","opts":["Zacząłem czytać tę książkę","Zacząłem przeczytać tę książkę","Zacząłem doczytać tę książkę"],"answer":0,
      "explain":"После фазового глагола — несовершенный вид: <b>czytać</b>."},
     {"q":"8. «Я помогаю Мареку с переездом» —","opts":["Pomagam Marka w przeprowadzce","Pomagam Markowi z przeprowadzką","Pomagam Markowi w przeprowadzce"],"answer":2,
      "explain":"Рамка — <b>pomagać komuś w czymś</b>: Markowi w przeprowadzce."}
   ]
 },
 "essay":{
   "intro":"Финал недели: собери всё вместе — дорога, бумаги, помощь и один длинный день.",
   "prompt":"Напиши 6–8 предложений о неделе: куда ты ездил(а) или ходил(а), что подписывал(а) или записывал(а), кому помогал(а) и в чём, что начал(а) и не закончил(а).",
   "hint":"Каркас: W poniedziałek wyszedłem / wyszłam… Potem pojechałem / pojechałam… W piątek podpisałem / podpisałam… Pomagałem / Pomagałam… w… Zacząłem / Zaczęłam… ale nie skończyłem / skończyłam… 💛",
   "example":"W poniedziałek wyszłam z domu o siódmej i pojechałam do pracy tramwajem. Dojazd zajmuje mi czterdzieści minut. We wtorek zapisałam się na nowy kurs i podpisałam umowę. W środę napisałam do siostry, a ona odpisała dopiero w piątek. W sobotę pomagałam koleżance w przeprowadzce. Wynieśliśmy wszystkie pudła w trzy godziny. Wieczorem zaczęłam czytać nową książkę, ale nie doczytałam do końca. Nadal jestem zmęczona, ale cieszę się z tego tygodnia."
 }
},

"8": {
 "day":8,"week":"02",
 "themeRu":"Много чего",
 "themeEn":"Dopełniacz liczby mnogiej",
 "intro":"Квартира Марека пока звенит пустотой: ни стульев, ни ламп, ни занавесок. Зато это идеальный повод взять родительный падеж множественного числа — тот самый, что стоит в русском «нет стульев, много книг, пять окон». Механика родная целиком, а окончания свои: сегодня разложим их по трём полкам.",
 "introAudio":"Квартира Марека пока звенит пустотой: ни стульев, ни ламп, ни занавесок. Зато это идеальный повод взять родительный падеж множественного числа — тот самый, что стоит в русском «нет стульев, много книг, пять окон». Механика родная целиком, а окончания свои: сегодня разложим их по трём полкам.",
 "goals":[
   "Строить родительный мн. ч. мужского рода: <b>kotów, domów, stołów</b>, но <b>koni, kluczy</b>",
   "Строить родительный мн. ч. женского и среднего: <b>lamp, książek, okien, krzeseł</b>",
   "Помнить особые формы: <b>dzieci, ludzi, pieniędzy, przyjaciół, braci</b>",
   "Пользоваться падежом там, где он живёт: <b>pięć lamp, dużo mebli, nie ma zasłon</b>"
 ],
 "learned":[
   "Построил(а) родительный мн. ч. мужского рода: kotów, domów, stołów, но koni, kluczy",
   "Построил(а) родительный мн. ч. женского и среднего: lamp, książek, okien, krzeseł",
   "Запомнил(а) особые формы: dzieci, ludzi, pieniędzy, przyjaciół, braci",
   "Воспользовался(лась) падежом там, где он живёт: pięć lamp, dużo mebli, nie ma zasłon"
 ],
 "review":{
   "intro":"Начнём с приставок — ядра прошлой недели. И с вида: его я спрашиваю каждый день, так уж заведено.",
   "introAudio":"Начнём с приставок — ядра прошлой недели. И с вида: его я спрашиваю каждый день, так уж заведено.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> движение наружу.",
      "q":"«Марек вышел из дома» —","opts":["Marek wyszedł z domu","Marek wszedł do domu","Marek doszedł do domu"],"answer":0,
      "explain":"Приставка wy- = вы-: <b>wyszedł z domu</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> конечная точка достигнута.",
      "q":"«Мы доехали до Кракова» —","opts":["Wyjechaliśmy do Krakowa","Dojechaliśmy do Krakowa","Przejechaliśmy do Krakowa"],"answer":1,
      "explain":"do- = до-: <b>dojechaliśmy do Krakowa</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> после фазового глагола вид не свободен.",
      "q":"«Он перестал курить» —","opts":["Przestał palić","Przestał zapalić","Przestał zapali"],"answer":0,
      "explain":"После zaczynać, kończyć, przestawać идёт только несовершенный вид: <b>przestał palić</b> — как русское «перестал курить»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Марек переехал в новую квартиру»</b>","answer":"Marek przeprowadził się do nowego mieszkania"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Мужской род",
    "title":"<em>kotów, domów</em> — окончание -ów",
    "paras":[
      "Мужские слова с твёрдым концом берут во множественном родительном окончание <b>-ów</b>: kot → <b>kotów</b>, dom → <b>domów</b>, stół → <b>stołów</b>, obraz → <b>obrazów</b>, sklep → <b>sklepów</b>, sąsiad → <b>sąsiadów</b>, kubek → <b>kubków</b>.",
      "Русское «котов, домов, столов» стоит ровно там же и звучит почти так же — этот ряд ты уже носишь в голове, надо только доверить ему польский хвостик.",
      "А если слово кончается мягко или на шипящий (c, cz, rz, sz, ż, l, ń, ś, ć), окончание другое — <b>-i</b> или <b>-y</b>: koń → <b>koni</b>, gość → <b>gości</b>, nauczyciel → <b>nauczycieli</b>, mebel → <b>mebli</b>; talerz → <b>talerzy</b>, klucz → <b>kluczy</b>, lekarz → <b>lekarzy</b>, nóż → <b>noży</b>.",
      "Правило на слух простое: твёрдый конец зовёт -ów, мягкий и шипящий — -i / -y. Русский здесь совпадает наполовину: «коней» и koni идут рядом, а «ножей» и noży — уже каждый своим путём."
    ],
    "audio":"Мужские слова с твёрдым концом берут во множественном родительном окончание -ów: kot — kotów, dom — domów, stół — stołów, obraz — obrazów, sklep — sklepów, sąsiad — sąsiadów, kubek — kubków. Русское «котов, домов, столов» стоит ровно там же и звучит почти так же — этот ряд ты уже носишь в голове, надо только доверить ему польский хвостик. А если слово кончается мягко или на шипящий, окончание другое: -i или -y. Koń — koni, gość — gości, nauczyciel — nauczycieli, mebel — mebli; talerz — talerzy, klucz — kluczy, lekarz — lekarzy, nóż — noży. Правило на слух простое: твёрдый конец зовёт -ów, мягкий и шипящий — -i или -y. Русский здесь совпадает наполовину: «коней» и koni идут рядом, а «ножей» и noży — уже каждый своим путём.",
    "table":{"rows":[
      ["kot → kotów <button class=\"play\" data-say=\"kot, kotów\">🔊</button>","котов"],
      ["dom → domów · stół → stołów <button class=\"play\" data-say=\"dom, domów\">🔊</button>","домов · столов"],
      ["obraz → obrazów · sklep → sklepów","картин · магазинов"],
      ["koń → koni <button class=\"play\" data-say=\"koń, koni\">🔊</button>","коней — мягкий конец"],
      ["gość → gości · mebel → mebli","гостей · мебели"],
      ["talerz → talerzy · klucz → kluczy","тарелок · ключей — шипящие"]
    ],"star":3},
    "examples":[
      {"ru":"На стене нет картин.","en":"Na ścianie nie ma <b>obrazów</b>.","gloss":"obraz → obrazów","say":"Na ścianie nie ma obrazów."},
      {"ru":"У Марека много соседей.","en":"Marek ma <b>dużo sąsiadów</b>.","say":"Marek ma dużo sąsiadów."},
      {"ru":"Я ищу ключи.","en":"<b>Szukam kluczy.</b>","gloss":"szukać + родительный — с A2","say":"Szukam kluczy."},
      {"ru":"В квартире мало мебели.","en":"W mieszkaniu jest <b>mało mebli</b>.","gloss":"mebel → mebli","say":"W mieszkaniu jest mało mebli."},
      {"ru":"В субботу будет много гостей.","en":"W sobotę będzie <b>dużo gości</b>.","say":"W sobotę będzie dużo gości."}
    ],
    "mistakes":[
      {"wrong":"pięć koniów","right":"pięć <b>koni</b>","why":"Koń кончается мягко, значит -i, а не -ów."},
      {"wrong":"dużo mebelów","right":"dużo <b>mebli</b>","why":"Mebel идёт по мягкому ряду и заодно теряет беглое e: mebli."}
    ],
    "mnemonic":"🏠 Твёрдый конец — -ów (kotów, domów, stołów). Мягкий и шипящий — -i / -y (koni, kluczy).",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> stół кончается твёрдо.",
       "q":"«пять столов» —","opts":["pięć stołów","pięć stoły","pięć stołach"],"answer":0,
       "explain":"Твёрдый мужской род берёт -ów: <b>stołów</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> после dużo — родительный.",
       "q":"«много соседей» —","opts":["dużo sąsiedzi","dużo sąsiadów","dużo sąsiadach"],"answer":1,
       "explain":"Sąsiad → <b>sąsiadów</b>. Sąsiedzi — это именительный «соседи»."},
      {"type":"type","howto":"Напиши «Я ищу ключи». Диакритику можно не ставить.",
       "q":"Я ищу ключи.","accept":["szukam kluczy"],"placeholder":"Szukam…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Женский и средний род",
    "title":"<em>lamp, książek, okien</em> — окончание пустое",
    "paras":[
      "Женские и средние слова чаще всего остаются во множественном родительном вовсе без окончания — ровно как русские «ламп, книг, окон». lampa → <b>lamp</b>, szafa → <b>szaf</b>, kobieta → <b>kobiet</b>, zasłona → <b>zasłon</b>, okno → <b>okien</b>, miasto → <b>miast</b>.",
      "Если на конце сталкиваются трудные согласные, внутрь слова встаёт беглое <b>e</b> — тот же приём, что в русском «сестра → сестёр», «окно → окон». Отсюда: książka → <b>książek</b>, matka → <b>matek</b>, córka → <b>córek</b>, łyżka → <b>łyżek</b>, łóżko → <b>łóżek</b>, krzesło → <b>krzeseł</b>, okno → <b>okien</b>.",
      "И третья группа: женские слова, которые в словарной форме кончаются на согласный, берут <b>-i</b> или <b>-y</b>. noc → <b>nocy</b>, rzecz → <b>rzeczy</b>, mysz → <b>myszy</b>, część → <b>części</b>, kuchnia → <b>kuchni</b>.",
      "Смотри, как удобно: три группы — и почти вся масса слов покрыта. Дальше дело за ухом."
    ],
    "audio":"Женские и средние слова чаще всего остаются во множественном родительном вовсе без окончания — ровно как русские «ламп, книг, окон». Lampa — lamp, szafa — szaf, kobieta — kobiet, zasłona — zasłon, okno — okien, miasto — miast. Если на конце сталкиваются трудные согласные, внутрь слова встаёт беглое e — тот же приём, что в русском «сестра — сестёр», «окно — окон». Отсюда: książka — książek, matka — matek, córka — córek, łyżka — łyżek, łóżko — łóżek, krzesło — krzeseł, okno — okien. И третья группа: женские слова, которые в словарной форме кончаются на согласный, берут -i или -y. Noc — nocy, rzecz — rzeczy, mysz — myszy, część — części, kuchnia — kuchni. Смотри, как удобно: три группы — и почти вся масса слов покрыта. Дальше дело за ухом.",
    "table":{"rows":[
      ["lampa → lamp · szafa → szaf <button class=\"play\" data-say=\"lampa, lamp\">🔊</button>","ламп · шкафов"],
      ["kobieta → kobiet · zasłona → zasłon","женщин · занавесок"],
      ["książka → książek <button class=\"play\" data-say=\"książka, książek\">🔊</button>","книг — беглое e"],
      ["matka → matek · córka → córek","матерей · дочерей — беглое e"],
      ["okno → okien · krzesło → krzeseł <button class=\"play\" data-say=\"okno, okien\">🔊</button>","окон · стульев — беглое e"],
      ["noc → nocy · rzecz → rzeczy","ночей · вещей — на -y"]
    ],"star":2},
    "examples":[
      {"ru":"Мы купили шесть стульев.","en":"Kupiliśmy <b>sześć krzeseł</b>.","gloss":"krzesło → krzeseł","say":"Kupiliśmy sześć krzeseł."},
      {"ru":"В квартире много окон.","en":"W mieszkaniu jest <b>dużo okien</b>.","say":"W mieszkaniu jest dużo okien."},
      {"ru":"У Анны много книг.","en":"Anna ma <b>dużo książek</b>.","say":"Anna ma dużo książek."},
      {"ru":"Здесь нет занавесок.","en":"Nie ma tu <b>zasłon</b>.","say":"Nie ma tu zasłon."},
      {"ru":"У нас слишком много вещей.","en":"Mamy <b>za dużo rzeczy</b>.","gloss":"rzecz → rzeczy","say":"Mamy za dużo rzeczy."}
    ],
    "mistakes":[
      {"wrong":"pięć książk","right":"pięć <b>książek</b>","why":"Беглое e спасает слово от трёх согласных подряд — как русское «сестёр»."},
      {"wrong":"dużo oknów","right":"dużo <b>okien</b>","why":"Средний род идёт без окончания, а внутрь встаёт беглое e: okien."}
    ],
    "mnemonic":"🪟 Женский и средний — пусто на конце: lamp, kobiet, miast. Тесно согласным — впусти e: książek, okien, krzeseł.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> средний род, беглое e.",
       "q":"«пять окон» —","opts":["pięć oknów","pięć okien","pięć okna"],"answer":1,
       "explain":"Окончания нет, зато внутри появляется e: <b>okien</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни русское «много книг».",
       "q":"«много книг» —","opts":["dużo książek","dużo książk","dużo książki"],"answer":0,
       "explain":"Беглое e разводит согласные: <b>książek</b>."},
      {"type":"type","howto":"Напиши «шесть стульев». Диакритику можно не ставить.",
       "q":"шесть стульев","accept":["sześć krzeseł","szesc krzesel","sześć krzesel","szesc krzeseł"],"placeholder":"sześć…"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Особые формы",
    "title":"<em>dzieci, ludzi, pieniędzy</em> — короткий список",
    "paras":[
      "Есть слова, у которых родительный множественного просто выучивают. Хорошая новость: их мало, и все они из самой ходовой лексики.",
      "dziecko → <b>dzieci</b>, człowiek (мн. ludzie) → <b>ludzi</b>, pieniądze → <b>pieniędzy</b>, przyjaciel → <b>przyjaciół</b>, brat (мн. bracia) → <b>braci</b>, ręka → <b>rąk</b>, tydzień → <b>tygodni</b>, rok → <b>lat</b> — последнюю ты знаешь ещё с A1.",
      "Пара наблюдений, чтобы не путать. У <b>dzieci</b> именительный и родительный совпадают: «dzieci są w domu» и «dużo dzieci». А ludzie в родительном теряет -e: ludzie → <b>ludzi</b>, как русское «люди → людей» теряет своё.",
      "И минутка произношения: в <b>pieniędzy</b> носовое ę перед dz звучит как «эн», а ударение стоит на предпоследнем слоге — [пе-<b>нень</b>-дзы]. Слово живёт почти только во множественном: Nie mam pieniędzy."
    ],
    "audio":"Есть слова, у которых родительный множественного просто выучивают. Хорошая новость: их мало, и все они из самой ходовой лексики. Dziecko — dzieci, człowiek, во множественном ludzie — ludzi, pieniądze — pieniędzy, przyjaciel — przyjaciół, brat, во множественном bracia — braci, ręka — rąk, tydzień — tygodni, rok — lat; последнюю ты знаешь ещё с A1. Пара наблюдений, чтобы не путать. У dzieci именительный и родительный совпадают: dzieci są w domu и dużo dzieci. А ludzie в родительном теряет -e: ludzie — ludzi, как русское «люди — людей» теряет своё. И минутка произношения: в слове pieniędzy носовое ę перед dz звучит как эн, а ударение стоит на предпоследнем слоге: пенендзы. Слово живёт почти только во множественном: nie mam pieniędzy.",
    "table":{"rows":[
      ["dziecko → dzieci <button class=\"play\" data-say=\"dziecko, dzieci\">🔊</button>","детей"],
      ["ludzie → ludzi <button class=\"play\" data-say=\"ludzie, ludzi\">🔊</button>","людей"],
      ["pieniądze → pieniędzy <button class=\"play\" data-say=\"pieniądze, pieniędzy\">🔊</button>","денег [пенень-дзы]"],
      ["przyjaciel → przyjaciół","друзей"],
      ["bracia → braci · ręka → rąk","братьев · рук"],
      ["tydzień → tygodni · rok → lat","недель · лет"]
    ],"star":2},
    "examples":[
      {"ru":"У меня нет денег.","en":"Nie mam <b>pieniędzy</b>.","say":"Nie mam pieniędzy."},
      {"ru":"У нас много друзей в Кракове.","en":"Mamy <b>dużo przyjaciół</b> w Krakowie.","say":"Mamy dużo przyjaciół w Krakowie."},
      {"ru":"Здесь всегда много людей.","en":"Tu zawsze jest <b>dużo ludzi</b>.","say":"Tu zawsze jest dużo ludzi."},
      {"ru":"У Марека два брата.","en":"Marek ma <b>dwóch braci</b>.","gloss":"о мужчинах — dwóch braci, как в A2","say":"Marek ma dwóch braci."},
      {"ru":"Мы были в Италии пять недель.","en":"Byliśmy we Włoszech <b>pięć tygodni</b>.","say":"Byliśmy we Włoszech pięć tygodni."}
    ],
    "mistakes":[
      {"wrong":"dużo ludziów","right":"dużo <b>ludzi</b>","why":"У ludzie родительный короче именительного, окончания -ów тут нет."},
      {"wrong":"Nie mam pieniądzy.","right":"Nie mam <b>pieniędzy</b>.","why":"В родительном внутри слова носовое ę, а не ą."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> слово из короткого списка.",
       "q":"«много людей» —","opts":["dużo ludzie","dużo ludzi","dużo ludziów"],"answer":1,
       "explain":"Родительный множественного — <b>ludzi</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> после отрицания — родительный.",
       "q":"«У меня нет денег» —","opts":["Nie mam pieniądze","Nie mam pieniędzy","Nie mam pieniądzy"],"answer":1,
       "explain":"Отрицание тянет родительный, и форма особая: <b>pieniędzy</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«У нас много друзей»</b>","answer":"Mamy dużo przyjaciół"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Где он работает",
    "title":"<em>Pięć lamp, dużo mebli, nie ma zasłon</em>",
    "paras":[
      "Три адреса родительного, знакомые с A2, теперь открываются и во множественном. Числительные от пяти: <b>pięć lamp, dziesięć krzeseł, dwadzieścia obrazów</b>. Слова количества: <b>dużo mebli, kilka lamp, mało rzeczy, wiele książek</b>. И отрицание: <b>nie ma zasłon, nie mam pieniędzy, nie kupiliśmy krzeseł</b>.",
      "К ним добавляется четвёртый, очень польский адрес — глагол <b>brakować</b>: «не хватает». Кому — дательный, чего — родительный: <b>Brakuje mi krzeseł.</b> Русское «мне не хватает стульев» устроено абсолютно так же.",
      "И меры, знакомые по рынку из A2: <b>kilogram jabłek, para butów, pudełko zdjęć</b>.",
      "Минутка произношения. Конечное <b>-ów</b> звучит как «уф»: буква ó читается [у], а w в конце слова оглушается — kotów [<b>ко</b>-туф], obrazów [об-<b>ра</b>-зуф]. То же оглушение ты уже слышал(а) в już и chodź."
    ],
    "audio":"Три адреса родительного, знакомые с A2, теперь открываются и во множественном. Числительные от пяти: pięć lamp, dziesięć krzeseł, dwadzieścia obrazów. Слова количества: dużo mebli, kilka lamp, mało rzeczy, wiele książek. И отрицание: nie ma zasłon, nie mam pieniędzy, nie kupiliśmy krzeseł. К ним добавляется четвёртый, очень польский адрес — глагол brakować, не хватать. Кому — дательный, чего — родительный: brakuje mi krzeseł. Русское «мне не хватает стульев» устроено абсолютно так же. И меры, знакомые по рынку из A2: kilogram jabłek, para butów, pudełko zdjęć. Минутка произношения. Конечное -ów звучит как уф: буква ó читается у, а w в конце слова оглушается — котуф, образуф. То же оглушение уже слышно в już и chodź.",
    "table":{"rows":[
      ["pięć lamp · dziesięć krzeseł","числа от пяти"],
      ["dużo mebli · kilka lamp · wiele książek","количества"],
      ["Nie ma zasłon. · Nie mam pieniędzy.","отрицание"],
      ["Brakuje mi krzeseł. <button class=\"play\" data-say=\"Brakuje mi krzeseł.\">🔊</button>","мне не хватает стульев"],
      ["kilogram jabłek · para butów","меры"],
      ["kotów [ко-туф] · obrazów [об-ра-зуф]","-ów звучит как «уф»"]
    ],"star":3},
    "examples":[
      {"ru":"Нам не хватает стульев и ламп.","en":"<b>Brakuje nam</b> krzeseł i lamp.","say":"Brakuje nam krzeseł i lamp."},
      {"ru":"Мы купили десять тарелок.","en":"Kupiliśmy <b>dziesięć talerzy</b>.","say":"Kupiliśmy dziesięć talerzy."},
      {"ru":"В квартире ещё много пустых стен.","en":"W mieszkaniu jest jeszcze <b>dużo pustych ścian</b>.","gloss":"прилагательное тоже в родительном: pustych","say":"W mieszkaniu jest jeszcze dużo pustych ścian."},
      {"ru":"Мебель стоит много денег.","en":"Meble kosztują <b>dużo pieniędzy</b>.","say":"Meble kosztują dużo pieniędzy."}
    ],
    "mistakes":[
      {"wrong":"Brakuje mi krzesła.","right":"Brakuje mi <b>krzeseł</b>.","why":"Стульев не хватает нескольких — значит множественное: krzeseł."},
      {"wrong":"Nie ma tu zasłony.","right":"Nie ma tu <b>zasłon</b>.","why":"Речь обо всех занавесках сразу — родительный множественного."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> «не хватает» просит родительный.",
       "q":"«Мне не хватает ламп» —","opts":["Brakuje mi lamp","Brakuje mi lampy","Brakuję mi lamp"],"answer":0,
       "explain":"Brakuje mi + родительный множественного: <b>lamp</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> считаем от пяти.",
       "q":"«десять тарелок» —","opts":["dziesięć talerze","dziesięć talerzy","dziesięć talerzów"],"answer":1,
       "explain":"Talerz — шипящий конец, значит <b>talerzy</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Brakuje nam krzeseł.","sub":"нам не хватает стульев","want":"Brakuje nam krzeseł."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек в мебельном магазине. Тапни по строке, чтобы увидеть перевод, и нажми на подсвеченное слово.",
   "lines":[
     {"who":"M","name":"Marek","side":"left","en":"W mieszkaniu nie ma prawie nic. Brakuje mi krzeseł i lamp.","ru":"В квартире почти ничего нет. Мне не хватает стульев и ламп.",
      "words":[["Brakuje mi","мне не хватает"],["krzeseł","стульев"],["lamp","ламп"]]},
     {"who":"A","name":"Anna","side":"right","en":"To kupmy sześć krzeseł. I dwie lampy do salonu.","ru":"Тогда купим шесть стульев. И две лампы в гостиную.",
      "words":[["sześć krzeseł","шесть стульев"]]},
     {"who":"M","name":"Marek","side":"left","en":"A okna? Nie ma zasłon, sąsiedzi wszystko widzą.","ru":"А окна? Занавесок нет, соседи всё видят.",
      "words":[["zasłon","занавесок"],["sąsiedzi","соседи"]]},
     {"who":"A","name":"Anna","side":"right","en":"Zasłony też. Ile tu jest okien?","ru":"Занавески тоже. Сколько тут окон?",
      "words":[["okien","окон"]]},
     {"who":"M","name":"Marek","side":"left","en":"Cztery. I jeszcze potrzebuję talerzy i kubków.","ru":"Четыре. И ещё мне нужны тарелки и чашки.",
      "words":[["potrzebuję","мне нужно (+ родительный)"],["talerzy i kubków","тарелок и чашек"]]},
     {"who":"A","name":"Anna","side":"right","en":"Marku, to będzie kosztowało dużo pieniędzy.","ru":"Марек, это будет стоить много денег.",
      "words":[["dużo pieniędzy","много денег"]]},
     {"who":"M","name":"Marek","side":"left","en":"Wiem. Ale w sobotę przyjdzie dużo gości.","ru":"Знаю. Но в субботу придёт много гостей.",
      "words":[["dużo gości","много гостей"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — что уже есть в квартире, а чего нет.",
   "lines":[
     {"who":"A","en":"Ile masz krzeseł?","ru":"Сколько у тебя стульев?"},
     {"who":"B","en":"Dwa. Brakuje mi jeszcze czterech.","ru":"Два. Не хватает ещё четырёх."},
     {"who":"A","en":"A lamp?","ru":"А ламп?"},
     {"who":"B","en":"Lamp nie mam wcale.","ru":"Ламп нет вообще."},
     {"who":"A","en":"To jedziemy do sklepu. Masz pieniądze?","ru":"Тогда едем в магазин. Деньги есть?"},
     {"who":"B","en":"Mam, ale niedużo.","ru":"Есть, но немного."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — квартира, мебель и родительный множественного в готовых связках.",
   "items":[
     {"en":"meble (dużo mebli)","ru":"мебель (много мебели)","ex":"W mieszkaniu jest mało mebli."},
     {"en":"krzesło (pięć krzeseł)","ru":"стул (пять стульев)","ex":"Kupiliśmy sześć krzeseł."},
     {"en":"lampa (kilka lamp)","ru":"лампа (несколько ламп)","ex":"Potrzebujemy kilku lamp."},
     {"en":"zasłona (nie ma zasłon)","ru":"занавеска (занавесок нет)","ex":"W oknach nie ma zasłon."},
     {"en":"szafa (dwie szafy)","ru":"шкаф (два шкафа)","ex":"W sypialni stoją dwie szafy."},
     {"en":"łóżko (dwa łóżka)","ru":"кровать (две кровати)","ex":"Mamy dwa łóżka i jedno krzesło."},
     {"en":"obraz (dużo obrazów)","ru":"картина (много картин)","ex":"Na ścianie nie ma obrazów."},
     {"en":"talerz · kubek","ru":"тарелка · чашка","ex":"Kupiłem dziesięć talerzy i sześć kubków."},
     {"en":"pieniądze (dużo pieniędzy)","ru":"деньги (много денег)","ex":"Nie mam pieniędzy."},
     {"en":"ludzie (dużo ludzi)","ru":"люди (много людей)","ex":"Tu zawsze jest dużo ludzi."},
     {"en":"brakuje mi / nam","ru":"мне / нам не хватает","ex":"Brakuje nam krzeseł."},
     {"en":"sklep meblowy","ru":"мебельный магазин","ex":"Pojechaliśmy do sklepu meblowego."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу.",
   "pairs":[["pięć krzeseł","пять стульев"],["dużo pieniędzy","много денег"],["nie ma zasłon","занавесок нет"],["kilka lamp","несколько ламп"]]
 },
 "reading":{
   "intro":"Прочитай вслух — родительный множественного тут почти в каждой строке.",
   "title":"Puste mieszkanie",
   "sentences":["Marek przeprowadził się do nowego mieszkania.","Na razie nie ma tam prawie nic.","Nie ma krzeseł, lamp ani zasłon.","W kuchni są dwa talerze i pięć kubków.","Anna mówi, że trzeba kupić dużo rzeczy.","W sobotę pojechali do sklepu meblowego.","Kupili sześć krzeseł i dwie lampy.","Marek wybrał też kilka obrazów.","Anna szukała zasłon, ale nic nie znalazła.","Wszystko kosztowało dużo pieniędzy.","Wieczorem wnieśli wszystkie meble do mieszkania.","Teraz w mieszkaniu jest mniej pustych ścian."],
   "translation":"Марек переехал в новую квартиру. Пока там почти ничего нет. Нет ни стульев, ни ламп, ни занавесок. На кухне две тарелки и пять чашек. Анна говорит, что нужно купить много вещей. В субботу они поехали в мебельный магазин. Купили шесть стульев и две лампы. Марек выбрал ещё несколько картин. Анна искала занавески, но ничего не нашла. Всё стоило много денег. Вечером они внесли всю мебель в квартиру. Теперь в квартире меньше пустых стен."
 },
 "quiz":{
   "intro":"Пять вопросов — и родительный множественного у тебя в руках.",
   "items":[
     {"q":"1. «пять столов» —","opts":["pięć stoły","pięć stołów","pięć stołach"],"answer":1,
      "explain":"Твёрдый мужской род — окончание -ów: <b>stołów</b>."},
     {"q":"2. «много книг» —","opts":["dużo książek","dużo książki","dużo książk"],"answer":0,
      "explain":"Беглое e разводит согласные: <b>książek</b>."},
     {"q":"3. «пять окон» —","opts":["pięć oknów","pięć okna","pięć okien"],"answer":2,
      "explain":"Средний род без окончания, внутри беглое e: <b>okien</b>."},
     {"q":"4. «У меня нет денег» —","opts":["Nie mam pieniądze","Nie mam pieniędzy","Nie mam pieniądzy"],"answer":1,
      "explain":"Особая форма родительного: <b>pieniędzy</b>."},
     {"q":"5. «Мне не хватает стульев» —","opts":["Brakuje mi krzesła","Brakuje mi krzeseł","Brakuje mi krzesłów"],"answer":1,
      "explain":"Brakuje + родительный множественного: <b>krzeseł</b>."}
   ]
 },
 "essay":{
   "intro":"Опиши свою комнату так, как её видишь сейчас, — с количествами и с честным «чего не хватает».",
   "prompt":"Напиши 4–5 фраз: что в комнате есть и сколько, чего нет и чего тебе не хватает.",
   "hint":"Опора: W pokoju są… · Mam pięć… · Nie ma tu… · Brakuje mi… Проверь окончания: -ów, пусто, -i / -y. 💛",
   "example":"W moim pokoju jest dużo książek i pięć lamp. Mam dwa krzesła i jeden stół. Nie ma zasłon, więc rano jest bardzo jasno. Brakuje mi półek i jednej szafy. Na ścianie nie ma obrazów, ale to kwestia czasu."
 }
},

"9": {
 "day":9,"week":"02",
 "themeRu":"Всем, со всеми, обо всех",
 "themeEn":"-om, -ami, -ach",
 "intro":"В субботу у Марека новоселье — по-польски <b>parapetówka</b>. Значит, за вечер тебе понадобится сказать «гостям», «с друзьями», «о соседях»: три падежа множественного числа подряд. И вот тут родство языков подходит совсем близко: -ам / -ами / -ах ↔ <b>-om / -ami / -ach</b>.",
 "introAudio":"В субботу у Марека новоселье — по-польски parapetówka. Значит, за вечер тебе понадобится сказать «гостям», «с друзьями», «о соседях»: три падежа множественного числа подряд. И вот тут родство языков подходит совсем близко: -ам, -ами, -ах против -om, -ami, -ach.",
 "goals":[
   "Ставить дательный множественного: <b>dzieciom, gościom, rodzicom</b>",
   "Ставить творительный множественного: <b>z sąsiadami, z książkami</b>",
   "Помнить формы на -mi: <b>dziećmi, ludźmi, przyjaciółmi, braćmi, gośćmi</b>",
   "Ставить предложный множественного: <b>o sąsiadach, we Włoszech, na wakacjach</b>"
 ],
 "learned":[
   "Поставил(а) дательный множественного: dzieciom, gościom, rodzicom",
   "Поставил(а) творительный множественного: z sąsiadami, z książkami",
   "Запомнил(а) формы на -mi: dziećmi, ludźmi, przyjaciółmi, braćmi, gośćmi",
   "Поставил(а) предложный множественного: o sąsiadach, we Włoszech, na wakacjach"
 ],
 "review":{
   "intro":"Вчерашний родительный множественного — первым делом. И приставка из прошлой недели, чтобы не остывала.",
   "introAudio":"Вчерашний родительный множественного — первым делом. И приставка из прошлой недели, чтобы не остывала.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> твёрдый мужской конец.",
      "q":"«много картин» —","opts":["dużo obrazy","dużo obrazów","dużo obrazach"],"answer":1,
      "explain":"Мужской твёрдый — окончание -ów: <b>obrazów</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни беглое e.",
      "q":"«шесть стульев» —","opts":["sześć krzesłów","sześć krzeseł","sześć krzesła"],"answer":1,
      "explain":"Средний род без окончания, внутри e: <b>krzeseł</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> приставка «пере-».",
      "q":"«Мы перенесли стол в кухню» —","opts":["Przenieśliśmy stół do kuchni","Wnieśliśmy stół do kuchni","Wynieśliśmy stół do kuchni"],"answer":0,
      "explain":"prze- = пере-: <b>przenieśliśmy</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Здесь всегда много людей»</b>","answer":"Tu zawsze jest dużo ludzi"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Дательный",
    "title":"<em>-om</em> — одно окончание на весь язык",
    "paras":[
      "Начнём с самого лёгкого, что вообще есть в польской грамматике. Дательный падеж множественного числа — это <b>-om</b>. Всегда. Для всех родов, без исключений и без вариантов.",
      "kot → <b>kotom</b>, dom → <b>domom</b>, kobieta → <b>kobietom</b>, dziecko → <b>dzieciom</b>, gość → <b>gościom</b>, człowiek → <b>ludziom</b>, rodzice → <b>rodzicom</b>, brat → <b>braciom</b>.",
      "Русское -ам стоит на том же месте: «детям — dzieciom», «гостям — gościom», «родителям — rodzicom». Разница ровно в одной букве.",
      "Живёт он там же, где ты его учил(а) в единственном числе (день 11 уровня A2): <b>dziękować</b> (dziękuję gościom), <b>pomagać</b> (pomagam rodzicom), <b>dawać, kupować, mówić, życzyć</b> и знакомое <b>podobać się</b>: Dzieciom podoba się nowe mieszkanie."
    ],
    "audio":"Начнём с самого лёгкого, что вообще есть в польской грамматике. Дательный падеж множественного числа — это -om. Всегда. Для всех родов, без исключений и без вариантов. Kot — kotom, dom — domom, kobieta — kobietom, dziecko — dzieciom, gość — gościom, człowiek — ludziom, rodzice — rodzicom, brat — braciom. Русское -ам стоит на том же месте: детям — dzieciom, гостям — gościom, родителям — rodzicom. Разница ровно в одной букве. Живёт он там же, где ты учил его в единственном числе, в дне одиннадцатом уровня A2: dziękować — dziękuję gościom, pomagać — pomagam rodzicom, dawać, kupować, mówić, życzyć и знакомое podobać się: dzieciom podoba się nowe mieszkanie.",
    "table":{"rows":[
      ["kot → kotom · dom → domom","котам · домам"],
      ["kobieta → kobietom · książka → książkom","женщинам · книгам"],
      ["dziecko → dzieciom <button class=\"play\" data-say=\"dziecko, dzieciom\">🔊</button>","детям"],
      ["gość → gościom <button class=\"play\" data-say=\"gość, gościom\">🔊</button>","гостям"],
      ["ludzie → ludziom · rodzice → rodzicom","людям · родителям"],
      ["bracia → braciom · przyjaciele → przyjaciołom","братьям · друзьям"]
    ],"star":2},
    "examples":[
      {"ru":"Марек показывает квартиру гостям.","en":"Marek pokazuje mieszkanie <b>gościom</b>.","say":"Marek pokazuje mieszkanie gościom."},
      {"ru":"Спасибо всем за помощь.","en":"<b>Dziękuję wszystkim</b> za pomoc.","gloss":"wszyscy → wszystkim","say":"Dziękuję wszystkim za pomoc."},
      {"ru":"Я помогаю родителям.","en":"Pomagam <b>rodzicom</b>.","say":"Pomagam rodzicom."},
      {"ru":"Детям нравится новая квартира.","en":"<b>Dzieciom</b> podoba się nowe mieszkanie.","say":"Dzieciom podoba się nowe mieszkanie."},
      {"ru":"Мы купили соседям цветы.","en":"Kupiliśmy <b>sąsiadom</b> kwiaty.","say":"Kupiliśmy sąsiadom kwiaty."}
    ],
    "mistakes":[
      {"wrong":"Dziękuję gości.","right":"Dziękuję <b>gościom</b>.","why":"Dziękować идёт с дательным, а во множественном он всегда -om."},
      {"wrong":"Pomagam rodzicami.","right":"Pomagam <b>rodzicom</b>.","why":"Pomagać — кому, значит -om; -ami это творительный."}
    ],
    "mnemonic":"🎁 -ам → -om. Одно окончание на все роды: dzieciom, gościom, rodzicom.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> кому показываем?",
       "q":"«Марек показывает квартиру гостям» —","opts":["Marek pokazuje mieszkanie gości","Marek pokazuje mieszkanie gościom","Marek pokazuje mieszkanie gośćmi"],"answer":1,
       "explain":"Дательный множественного — <b>gościom</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> одно окончание на все роды.",
       "q":"«Я помогаю детям» —","opts":["Pomagam dzieciom","Pomagam dziećmi","Pomagam dzieci"],"answer":0,
       "explain":"Кому — <b>dzieciom</b>."},
      {"type":"type","howto":"Напиши «Спасибо соседям». Диакритику можно не ставить.",
       "q":"Спасибо соседям.","accept":["dziękuję sąsiadom","dziekuje sasiadom","dziękuje sasiadom"],"placeholder":"Dziękuję…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Творительный",
    "title":"<em>-ami</em> — и короткий список на <em>-mi</em>",
    "paras":[
      "Творительный множественного — <b>-ami</b>, и он тоже почти без исключений: kot → <b>kotami</b>, dom → <b>domami</b>, książka → <b>książkami</b>, okno → <b>oknami</b>, sąsiad → <b>sąsiadami</b>, rodzice → <b>rodzicami</b>, kolega → <b>kolegami</b>.",
      "Русское «-ами» и польское -ami — почти одно и то же слово: «книгами — książkami», «соседями — sąsiadami». Предлог тот же: <b>z</b> + творительный, «с кем».",
      "Теперь ловушка недели. Небольшая группа частотных слов берёт вместо -ami укороченное <b>-mi</b>: dzieci → <b>dziećmi</b>, ludzie → <b>ludźmi</b>, przyjaciele → <b>przyjaciółmi</b>, bracia → <b>braćmi</b>, goście → <b>gośćmi</b>, konie → <b>końmi</b>, pieniądze → <b>pieniędzmi</b>.",
      "Слушай, как это звучит: <b>dziećmi</b> [<b>дзе</b>-чьми], <b>ludźmi</b> [<b>лу</b>-дзьми], <b>przyjaciółmi</b> [пшы-я-<b>чуу̯</b>-ми]. Список короткий — выучи его как песенку, потому что именно эти слова ты будешь говорить чаще всего."
    ],
    "audio":"Творительный множественного — окончание -ami, и он тоже почти без исключений: kot — kotami, dom — domami, książka — książkami, okno — oknami, sąsiad — sąsiadami, rodzice — rodzicami, kolega — kolegami. Русское -ами и польское -ami — почти одно и то же слово: книгами — książkami, соседями — sąsiadami. Предлог тот же: z плюс творительный, с кем. Теперь ловушка недели. Небольшая группа частотных слов берёт вместо -ami укороченное -mi: dzieci — dziećmi, ludzie — ludźmi, przyjaciele — przyjaciółmi, bracia — braćmi, goście — gośćmi, konie — końmi, pieniądze — pieniędzmi. Слушай, как это звучит: дзечьми, лудзьми, пшыячуу̯ми. Список короткий — выучи его как песенку, потому что именно эти слова ты будешь говорить чаще всего.",
    "table":{"rows":[
      ["z sąsiadami · z kolegami","с соседями · с коллегами"],
      ["z książkami · nad oknami","с книгами · над окнами"],
      ["z dziećmi <button class=\"play\" data-say=\"z dziećmi\">🔊</button>","с детьми [з дзечьми]"],
      ["z ludźmi <button class=\"play\" data-say=\"z ludźmi\">🔊</button>","с людьми [з лудзьми]"],
      ["z przyjaciółmi <button class=\"play\" data-say=\"z przyjaciółmi\">🔊</button>","с друзьями [с пшыячуу̯ми]"],
      ["z braćmi · z gośćmi · pieniędzmi","с братьями · с гостями · деньгами"]
    ],"star":4},
    "examples":[
      {"ru":"Мы приехали с друзьями.","en":"Przyjechaliśmy <b>z przyjaciółmi</b>.","say":"Przyjechaliśmy z przyjaciółmi."},
      {"ru":"Сосед пришёл с детьми.","en":"Sąsiad przyszedł <b>z dziećmi</b>.","say":"Sąsiad przyszedł z dziećmi."},
      {"ru":"Анна любит разговаривать с людьми.","en":"Anna lubi rozmawiać <b>z ludźmi</b>.","say":"Anna lubi rozmawiać z ludźmi."},
      {"ru":"Он живёт с родителями и братьями.","en":"Mieszka <b>z rodzicami</b> i <b>braćmi</b>.","say":"Mieszka z rodzicami i braćmi."},
      {"ru":"Что ты сделал с деньгами?","en":"Co zrobiłeś <b>z pieniędzmi</b>?","say":"Co zrobiłeś z pieniędzmi?"}
    ],
    "mistakes":[
      {"wrong":"z dzieciami","right":"<b>z dziećmi</b>","why":"Dzieci — из короткого списка на -mi."},
      {"wrong":"z ludziami","right":"<b>z ludźmi</b>","why":"Ludzie тоже в списке: -mi, и д смягчается до ź."}
    ],
    "mnemonic":"🤝 -ами → -ami. Но шестеро идут особняком: dziećmi, ludźmi, przyjaciółmi, braćmi, gośćmi, końmi.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> слово из короткого списка.",
       "q":"«с детьми» —","opts":["z dzieciami","z dziećmi","z dzieciom"],"answer":1,
       "explain":"Особая форма на -mi: <b>z dziećmi</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> обычное правило.",
       "q":"«с соседями» —","opts":["z sąsiadmi","z sąsiadami","z sąsiadom"],"answer":1,
       "explain":"Sąsiad идёт по общему правилу: <b>z sąsiadami</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Мы приехали с друзьями»</b>","answer":"Przyjechaliśmy z przyjaciółmi"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Предложный",
    "title":"<em>-ach</em> — о ком и о чём говорят",
    "paras":[
      "Третье окончание — <b>-ach</b>, и оно опять одно на все роды: dom → <b>w domach</b>, książka → <b>o książkach</b>, dziecko → <b>o dzieciach</b>, sąsiad → <b>o sąsiadach</b>, wakacje → <b>na wakacjach</b>, miasto → <b>w miastach</b>, ludzie → <b>o ludziach</b>.",
      "Русское «-ах» лежит ровно там же: «о детях — o dzieciach», «в домах — w domach», «на каникулах — na wakacjach». Предлоги знакомые: <b>w, na, o, po, przy</b>.",
      "Одно исключение стоит знать в лицо, потому что оно про страны: <b>w Niemczech</b> (в Германии), <b>we Włoszech</b> (в Италии), <b>na Węgrzech</b> (в Венгрии). Тут вместо -ach стоит старинное -ech. Ты уже говорил(а) «we Włoszech» на прошлой неделе — вот откуда эта форма.",
      "И удобная мелочь: с этими же окончаниями работают знакомые обороты времени — <b>po wakacjach</b> (после каникул), <b>przy dzieciach</b> (при детях), <b>w tych sklepach</b> (в этих магазинах)."
    ],
    "audio":"Третье окончание — -ach, и оно опять одно на все роды: dom — w domach, książka — o książkach, dziecko — o dzieciach, sąsiad — o sąsiadach, wakacje — na wakacjach, miasto — w miastach, ludzie — o ludziach. Русское -ах лежит ровно там же: о детях — o dzieciach, в домах — w domach, на каникулах — na wakacjach. Предлоги знакомые: w, na, o, po, przy. Одно исключение стоит знать в лицо, потому что оно про страны: w Niemczech — в Германии, we Włoszech — в Италии, na Węgrzech — в Венгрии. Тут вместо -ach стоит старинное -ech. Форма we Włoszech уже звучала на прошлой неделе — вот откуда она. И удобная мелочь: с этими же окончаниями работают знакомые обороты времени: po wakacjach — после каникул, przy dzieciach — при детях, w tych sklepach — в этих магазинах.",
    "table":{"rows":[
      ["w domach · w miastach","в домах · в городах"],
      ["o dzieciach <button class=\"play\" data-say=\"o dzieciach\">🔊</button>","о детях"],
      ["o sąsiadach · o ludziach","о соседях · о людях"],
      ["na wakacjach · po wakacjach","на каникулах · после каникул"],
      ["we Włoszech · w Niemczech <button class=\"play\" data-say=\"we Włoszech\">🔊</button>","в Италии · в Германии — форма на -ech"],
      ["na Węgrzech","в Венгрии"]
    ],"star":4},
    "examples":[
      {"ru":"Мы говорили о соседях.","en":"Rozmawialiśmy <b>o sąsiadach</b>.","say":"Rozmawialiśmy o sąsiadach."},
      {"ru":"Он много рассказывает о детях.","en":"Dużo opowiada <b>o dzieciach</b>.","say":"Dużo opowiada o dzieciach."},
      {"ru":"Мы были в Италии в июне.","en":"Byliśmy <b>we Włoszech</b> w czerwcu.","gloss":"старая форма на -ech","say":"Byliśmy we Włoszech w czerwcu."},
      {"ru":"В этих магазинах дорого.","en":"<b>W tych sklepach</b> jest drogo.","say":"W tych sklepach jest drogo."},
      {"ru":"После каникул все вернулись к работе.","en":"<b>Po wakacjach</b> wszyscy wrócili do pracy.","say":"Po wakacjach wszyscy wrócili do pracy."}
    ],
    "mistakes":[
      {"wrong":"Rozmawialiśmy o sąsiadami.","right":"Rozmawialiśmy <b>o sąsiadach</b>.","why":"«О ком» — предложный, значит -ach; -ami это «с кем»."},
      {"wrong":"Byliśmy w Włochach.","right":"Byliśmy <b>we Włoszech</b>.","why":"Названия Włochy, Niemcy, Węgry берут старую форму на -ech."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> о ком говорим?",
       "q":"«Мы говорили о соседях» —","opts":["Rozmawialiśmy o sąsiadach","Rozmawialiśmy o sąsiadami","Rozmawialiśmy o sąsiadom"],"answer":0,
       "explain":"Предложный множественного — <b>o sąsiadach</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> страна с особой формой.",
       "q":"«в Италии» —","opts":["w Włochach","we Włoszech","w Włochy"],"answer":1,
       "explain":"Włochy даёт <b>we Włoszech</b> — старое окончание -ech."},
      {"type":"type","howto":"Напиши «о детях». Диакритику можно не ставить.",
       "q":"о детях","accept":["o dzieciach"],"placeholder":"o dziec…"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Три в одном",
    "title":"Новоселье: <em>gościom, z przyjaciółmi, o sąsiadach</em>",
    "paras":[
      "Теперь сложи всё вместе — три окончания рядом видно лучше всего: <b>-om</b> (кому), <b>-ami</b> (с кем), <b>-ach</b> (о ком). Dziękuję <b>gościom</b>. Siedzimy <b>z gośćmi</b>. Rozmawiamy <b>o gościach</b>.",
      "И заодно слова вечера. <b>Parapetówka</b> — новоселье; название идёт от parapet, подоконника: гостей когда-то сажали на подоконник, потому что мебели ещё нет. <b>Zapraszać kogoś</b> — приглашать, <b>witać gości</b> — встречать гостей, <b>Czuj się jak u siebie</b> — «чувствуй себя как дома».",
      "Обрати внимание на прилагательные и указательные: они тоже встают в падеж. <b>tym dzieciom</b>, <b>z nowymi sąsiadami</b>, <b>o starych przyjaciołach</b>. Окончания у них свои (-ym / -ymi / -ych), но логика та же — падеж один на всю группу слов.",
      "Кстати, о przyjaciel: в дательном и предложном ó выпрямляется в o — <b>przyjaciołom</b>, <b>o przyjaciołach</b>, — а в творительном остаётся: <b>z przyjaciółmi</b>. Мелочь, но заметная."
    ],
    "audio":"Теперь сложи всё вместе — три окончания рядом видно лучше всего: -om, кому; -ami, с кем; -ach, о ком. Dziękuję gościom. Siedzimy z gośćmi. Rozmawiamy o gościach. И заодно слова вечера. Parapetówka — новоселье; название идёт от parapet, подоконник: гостей когда-то сажали на подоконник, потому что мебели ещё нет. Zapraszać kogoś — приглашать, witać gości — встречать гостей, czuj się jak u siebie — чувствуй себя как дома. Обрати внимание на прилагательные и указательные: они тоже встают в падеж. Tym dzieciom, z nowymi sąsiadami, o starych przyjaciołach. Окончания у них свои, но логика та же — падеж один на всю группу слов. Кстати, о слове przyjaciel: в дательном и предложном ó выпрямляется в o — przyjaciołom, o przyjaciołach, — а в творительном остаётся: z przyjaciółmi. Мелочь, но заметная.",
    "table":{"rows":[
      ["Dziękuję gościom.","спасибо гостям — кому"],
      ["Siedzimy z gośćmi.","сидим с гостями — с кем"],
      ["Rozmawiamy o gościach.","говорим о гостях — о ком"],
      ["z nowymi sąsiadami","с новыми соседями"],
      ["o starych przyjaciołach","о старых друзьях"],
      ["parapetówka <button class=\"play\" data-say=\"parapetówka\">🔊</button>","новоселье"]
    ],"star":-1},
    "examples":[
      {"ru":"Марек пригласил на новоселье двадцать человек.","en":"Marek zaprosił na <b>parapetówkę</b> dwadzieścia osób.","say":"Marek zaprosił na parapetówkę dwadzieścia osób."},
      {"ru":"Анна встречает гостей у двери.","en":"Anna <b>wita gości</b> przy drzwiach.","say":"Anna wita gości przy drzwiach."},
      {"ru":"Мы весь вечер говорили о новых соседях.","en":"Cały wieczór rozmawialiśmy <b>o nowych sąsiadach</b>.","say":"Cały wieczór rozmawialiśmy o nowych sąsiadach."},
      {"ru":"Спасибо всем гостям за цветы.","en":"Dziękuję <b>wszystkim gościom</b> za kwiaty.","say":"Dziękuję wszystkim gościom za kwiaty."}
    ],
    "mistakes":[
      {"wrong":"z nowymi sąsiadach","right":"<b>z nowymi sąsiadami</b>","why":"«С кем» — творительный: и прилагательное, и существительное встают в него вместе."},
      {"wrong":"Dziękuję gośćmi.","right":"Dziękuję <b>gościom</b>.","why":"Dziękować — кому, значит -om, а не форма на -mi."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> смотри на предлог.",
       "q":"«с новыми соседями» —","opts":["z nowymi sąsiadami","z nowych sąsiadach","z nowym sąsiadom"],"answer":0,
       "explain":"Творительный на всю группу: <b>z nowymi sąsiadami</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> три окончания, три вопроса.",
       "q":"Какая пара верна?","opts":["кому — gośćmi","с кем — gościom","о ком — o gościach"],"answer":2,
       "explain":"Кому — gościom, с кем — z gośćmi, о ком — <b>o gościach</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Dziękuję wszystkim gościom.","sub":"спасибо всем гостям","want":"Dziękuję wszystkim gościom."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Новоселье в разгаре. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"A","name":"Anna","side":"right","en":"Marku, kto przyszedł?","ru":"Марек, кто пришёл?",
      "words":[["kto przyszedł","кто пришёл"]]},
     {"who":"M","name":"Marek","side":"left","en":"Wszyscy. Jestem z przyjaciółmi z pracy i z sąsiadami z dołu.","ru":"Все. Я с друзьями с работы и с соседями снизу.",
      "words":[["z przyjaciółmi","с друзьями"],["z sąsiadami","с соседями"]]},
     {"who":"A","name":"Anna","side":"right","en":"Sąsiad przyszedł z dziećmi?","ru":"Сосед пришёл с детьми?",
      "words":[["z dziećmi","с детьми"]]},
     {"who":"M","name":"Marek","side":"left","en":"Tak. Dzieciom bardzo podoba się balkon.","ru":"Да. Детям очень нравится балкон.",
      "words":[["Dzieciom","детям"]]},
     {"who":"A","name":"Anna","side":"right","en":"A o czym rozmawiacie?","ru":"А о чём вы разговариваете?",
      "words":[["o czym","о чём"]]},
     {"who":"M","name":"Marek","side":"left","en":"O sąsiadach, o remontach i o wakacjach we Włoszech.","ru":"О соседях, о ремонтах и о каникулах в Италии.",
      "words":[["o sąsiadach","о соседях"],["we Włoszech","в Италии"]]},
     {"who":"A","name":"Anna","side":"right","en":"To ja podziękuję gościom za kwiaty. Jest ich mnóstwo.","ru":"Тогда я поблагодарю гостей за цветы. Их тут море.",
      "words":[["podziękuję gościom","поблагодарю гостей"],["mnóstwo","масса, море"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — конец вечера.",
   "lines":[
     {"who":"A","en":"Dziękuję wszystkim gościom!","ru":"Спасибо всем гостям!"},
     {"who":"B","en":"To my dziękujemy. Fajnie było z wami.","ru":"Это мы благодарим. Было здорово с вами."},
     {"who":"A","en":"Następnym razem zapraszam z dziećmi.","ru":"В следующий раз приглашаю с детьми."},
     {"who":"B","en":"Chętnie. One ciągle pytają o twoje mieszkanie.","ru":"С удовольствием. Они всё время спрашивают о твоей квартире."},
     {"who":"A","en":"To opowiem im o wszystkich pokojach.","ru":"Тогда расскажу им обо всех комнатах."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — гости, соседи и три окончания множественного числа.",
   "items":[
     {"en":"parapetówka","ru":"новоселье","ex":"W sobotę robimy parapetówkę."},
     {"en":"gość → gościom / z gośćmi / o gościach","ru":"гость: гостям / с гостями / о гостях","ex":"Dziękuję gościom za kwiaty."},
     {"en":"dziecko → dzieciom / z dziećmi / o dzieciach","ru":"ребёнок: детям / с детьми / о детях","ex":"Sąsiad przyszedł z dziećmi."},
     {"en":"ludzie → ludziom / z ludźmi / o ludziach","ru":"люди: людям / с людьми / о людях","ex":"Lubię rozmawiać z ludźmi."},
     {"en":"przyjaciele → z przyjaciółmi","ru":"друзья: с друзьями","ex":"Przyjechaliśmy z przyjaciółmi."},
     {"en":"rodzice → rodzicom / z rodzicami","ru":"родители: родителям / с родителями","ex":"Pomagam rodzicom."},
     {"en":"sąsiedzi → z sąsiadami / o sąsiadach","ru":"соседи: с соседями / о соседях","ex":"Rozmawialiśmy o sąsiadach."},
     {"en":"we Włoszech · w Niemczech","ru":"в Италии · в Германии","ex":"Byliśmy we Włoszech w czerwcu."},
     {"en":"na wakacjach","ru":"на каникулах, в отпуске","ex":"Na wakacjach było gorąco."},
     {"en":"zapraszać / zaprosić","ru":"приглашать / пригласить","ex":"Marek zaprosił dwadzieścia osób."},
     {"en":"witać gości","ru":"встречать гостей","ex":"Anna wita gości przy drzwiach."},
     {"en":"Czuj się jak u siebie.","ru":"Чувствуй себя как дома.","ex":"Wejdź i czuj się jak u siebie."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу.",
   "pairs":[["gościom","гостям"],["z dziećmi","с детьми"],["o sąsiadach","о соседях"],["z przyjaciółmi","с друзьями"]]
 },
 "reading":{
   "intro":"Прочитай вслух — тут все три окончания сразу.",
   "title":"Parapetówka",
   "sentences":["W sobotę Marek zrobił parapetówkę.","Zaprosił dwadzieścia osób.","Przyszedł z przyjaciółmi z pracy.","Sąsiad z dołu przyszedł z dziećmi.","Dzieciom najbardziej podobał się balkon.","Anna witała gości przy drzwiach.","Goście przynieśli kwiaty i wino.","Marek podziękował wszystkim gościom.","Cały wieczór rozmawialiśmy o sąsiadach.","Potem o wakacjach we Włoszech.","W nowych mieszkaniach zawsze czegoś brakuje.","Ale z ludźmi jest po prostu weselej."],
   "translation":"В субботу Марек устроил новоселье. Он пригласил двадцать человек. Пришёл с друзьями с работы. Сосед снизу пришёл с детьми. Детям больше всего понравился балкон. Анна встречала гостей у двери. Гости принесли цветы и вино. Марек поблагодарил всех гостей. Весь вечер мы говорили о соседях. Потом — о каникулах в Италии. В новых квартирах всегда чего-нибудь не хватает. Но с людьми просто веселее."
 },
 "quiz":{
   "intro":"Пять вопросов — три окончания и короткий список на -mi.",
   "items":[
     {"q":"1. «Спасибо гостям» —","opts":["Dziękuję gości","Dziękuję gościom","Dziękuję gośćmi"],"answer":1,
      "explain":"Дательный множественного — всегда -om: <b>gościom</b>."},
     {"q":"2. «с детьми» —","opts":["z dzieciami","z dziećmi","z dzieciom"],"answer":1,
      "explain":"Dzieci — из короткого списка на -mi: <b>z dziećmi</b>."},
     {"q":"3. «с соседями» —","opts":["z sąsiadami","z sąsiadmi","z sąsiadach"],"answer":0,
      "explain":"Общее правило: <b>-ami</b>."},
     {"q":"4. «о людях» —","opts":["o ludziami","o ludziach","o ludziom"],"answer":1,
      "explain":"Предложный множественного — <b>-ach</b>."},
     {"q":"5. «Мы были в Италии» —","opts":["Byliśmy w Włochach","Byliśmy we Włoszech","Byliśmy w Włochy"],"answer":1,
      "explain":"Włochy берёт старую форму на -ech: <b>we Włoszech</b>."}
   ]
 },
 "essay":{
   "intro":"Расскажи о своём вечере с людьми — настоящем или выдуманном.",
   "prompt":"Напиши 4–5 фраз: кого ты пригласил(а), с кем был(а), о чём вы говорили и кому сказал(а) спасибо.",
   "hint":"Опора: Zaprosiłem / Zaprosiłam… · Byłem / Byłam z… · Rozmawialiśmy o… · Dziękuję… Проверь три окончания: -om, -ami, -ach. 💛",
   "example":"W piątek zaprosiłam przyjaciół do domu. Byłam z sąsiadami i z ich dziećmi. Dzieciom podobał się nasz kot. Rozmawialiśmy o pracy, o wakacjach i o starych czasach. Na koniec podziękowałam wszystkim gościom."
 }
},
"10": {
 "day":10,"week":"02",
 "themeRu":"Двое детей",
 "themeEn":"Liczebniki zbiorowe",
 "intro":"Соседа снизу зовут пан Ковальский, и на новоселье он пришёл не один: <b>ma dwoje dzieci</b>. Не «dwa dzieci» и не «dwie dzieci» — а вот такое третье слово. По-русски ты говоришь ровно так же: не «два детей», а «двое детей». Сегодня разберём эту маленькую, но очень заметную семью числительных.",
 "introAudio":"Соседа снизу зовут пан Ковальский, и на новоселье он пришёл не один: ma dwoje dzieci. Не dwa dzieci и не dwie dzieci, а вот такое третье слово. По-русски ты говоришь ровно так же: не «два детей», а «двое детей». Сегодня разберём эту маленькую, но очень заметную семью числительных.",
 "goals":[
   "Считать детей: <b>dwoje, troje, czworo, pięcioro dzieci</b>",
   "Выбирать между <b>dwaj / dwie / dwoje</b> по составу группы",
   "Согласовывать глагол: <b>Przyszło troje gości</b>",
   "Пользоваться словами <b>oboje, obaj, obie</b> и <b>rodzeństwo</b>"
 ],
 "learned":[
   "Посчитал(а) детей: dwoje, troje, czworo, pięcioro dzieci",
   "Выбрал(а) между dwaj / dwie / dwoje по составу группы",
   "Согласовал(а) глагол: Przyszło troje gości",
   "Воспользовался(лась) словами oboje, obaj, obie и rodzeństwo"
 ],
 "review":{
   "intro":"Сначала вчерашняя тройка окончаний. Потом — приставка недели 1, она нам сегодня ещё пригодится.",
   "introAudio":"Сначала вчерашняя тройка окончаний. Потом — приставка недели 1, она нам сегодня ещё пригодится.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> кому?",
      "q":"«Спасибо детям» —","opts":["Dziękuję dzieciom","Dziękuję dziećmi","Dziękuję dzieci"],"answer":0,
      "explain":"Дательный множественного — всегда -om: <b>dzieciom</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> с кем?",
      "q":"«с друзьями» —","opts":["z przyjaciołami","z przyjaciółmi","z przyjaciołach"],"answer":1,
      "explain":"Слово из короткого списка: <b>z przyjaciółmi</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> приставка «при-».",
      "q":"«Гости пришли в восемь» —","opts":["Goście weszli o ósmej","Goście przyszli o ósmej","Goście odeszli o ósmej"],"answer":1,
      "explain":"przy- = при-: <b>przyszli</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мы говорили о соседях»</b>","answer":"Rozmawialiśmy o sąsiadach"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Третий ряд чисел",
    "title":"<em>dwoje, troje, czworo, pięcioro</em>",
    "paras":[
      "Ты уже знаешь два ряда числительных. Первый — для вещей и женщин: <b>dwa koty, dwie lampy, pięć krzeseł</b>. Второй — мужско-личный из A2: <b>dwaj studenci</b> или <b>dwóch studentów</b>.",
      "А есть третий, собирательный: <b>dwoje, troje, czworo, pięcioro, sześcioro, siedmioro, ośmioro, dziewięcioro, dziesięcioro</b>. Начиная с пятёрки все они кончаются на <b>-oro</b> — ряд очень ровный.",
      "И всё это тебе давно знакомо: «двое, трое, четверо, пятеро» — та же самая категория, тот же самый смысл. Русский тут не подсказывает, а просто говорит на другом наречии одного языка.",
      "Главное правило одно: после собирательного числительного слово встаёт в <b>родительный множественного</b> — вчерашняя тема прямо в деле. <b>dwoje dzieci, troje dzieci, pięcioro dzieci</b>.",
      "Как звучит: <b>dwoje</b> [<b>дво</b>-е], <b>czworo</b> [<b>чфо</b>-ро] — w после cz оглушается, — <b>pięcioro</b> [пень-<b>чо</b>-ро]. Ударение везде на предпоследнем слоге."
    ],
    "audio":"Ты уже знаешь два ряда числительных. Первый — для вещей и женщин: dwa koty, dwie lampy, pięć krzeseł. Второй — мужско-личный из A2: dwaj studenci или dwóch studentów. А есть третий, собирательный: dwoje, troje, czworo, pięcioro, sześcioro, siedmioro, ośmioro, dziewięcioro, dziesięcioro. Начиная с пятёрки все они кончаются на -oro, ряд очень ровный. И всё это тебе давно знакомо: двое, трое, четверо, пятеро — та же самая категория, тот же самый смысл. Русский тут не подсказывает, а просто говорит на другом наречии одного языка. Главное правило одно: после собирательного числительного слово встаёт в родительный множественного — вчерашняя тема прямо в деле: dwoje dzieci, troje dzieci, pięcioro dzieci. Как звучит: двое, чфоро — w после cz оглушается — пеньчоро. Ударение везде на предпоследнем слоге.",
    "table":{"rows":[
      ["dwoje dzieci <button class=\"play\" data-say=\"dwoje dzieci\">🔊</button>","двое детей"],
      ["troje dzieci <button class=\"play\" data-say=\"troje dzieci\">🔊</button>","трое детей"],
      ["czworo dzieci [чфо-ро]","четверо детей"],
      ["pięcioro dzieci <button class=\"play\" data-say=\"pięcioro dzieci\">🔊</button>","пятеро детей"],
      ["sześcioro · siedmioro · ośmioro","шестеро · семеро · восьмеро"],
      ["dziesięcioro dzieci","десятеро детей"]
    ],"star":0},
    "examples":[
      {"ru":"У соседа двое детей.","en":"Sąsiad ma <b>dwoje dzieci</b>.","gloss":"dziecko → dzieci, родительный","say":"Sąsiad ma dwoje dzieci."},
      {"ru":"У них трое детей.","en":"Oni mają <b>troje dzieci</b>.","say":"Oni mają troje dzieci."},
      {"ru":"В садике пятеро детей.","en":"W przedszkolu jest <b>pięcioro dzieci</b>.","say":"W przedszkolu jest pięcioro dzieci."},
      {"ru":"У моей сестры четверо детей.","en":"Moja siostra ma <b>czworo dzieci</b>.","say":"Moja siostra ma czworo dzieci."}
    ],
    "mistakes":[
      {"wrong":"dwa dzieci","right":"<b>dwoje</b> dzieci","why":"У слова dziecko своё числительное, как и русское «двое», а не «два»."},
      {"wrong":"dwoje dziecka","right":"dwoje <b>dzieci</b>","why":"После собирательного идёт родительный множественного: dzieci."}
    ],
    "mnemonic":"👶 Дети считаются по-своему: двое, трое, четверо — dwoje, troje, czworo. И сразу родительный: dzieci.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни русское «двое детей».",
       "q":"«У соседа двое детей» —","opts":["Sąsiad ma dwa dzieci","Sąsiad ma dwoje dzieci","Sąsiad ma dwie dzieci"],"answer":1,
       "explain":"Собирательное числительное: <b>dwoje dzieci</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри на форму слова после числа.",
       "q":"«пятеро детей» —","opts":["pięcioro dzieci","pięcioro dziecka","pięć dzieci"],"answer":0,
       "explain":"Собирательное + родительный множественного: <b>pięcioro dzieci</b>."},
      {"type":"type","howto":"Напиши «трое детей». Диакритику можно не ставить.",
       "q":"трое детей","accept":["troje dzieci"],"placeholder":"troje…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Когда оно обязательно",
    "title":"Дети, смешанная компания и слова без единственного",
    "paras":[
      "Собирательное числительное не украшение — в трёх случаях без него нельзя.",
      "<b>Первый: dzieci.</b> Только dwoje / troje / pięcioro dzieci.",
      "<b>Второй: смешанная группа людей</b> — есть и мужчины, и женщины. Сравни весь набор: <b>dwaj studenci</b> (или dwóch studentów) — только парни; <b>dwie studentki</b> — только девушки; <b>dwoje studentów</b> — парень и девушка. Это прямое продолжение мужско-личного рода из A2: там ты учил(а) различать группы, здесь язык требует того же различия у числа.",
      "<b>Третий: слова, у которых нет единственного числа.</b> Дверь по-польски всегда <b>drzwi</b>, ножницы — <b>nożyczki</b>, скрипка — <b>skrzypce</b>. Посчитать их обычным числом нельзя, поэтому: <b>dwoje drzwi</b> (две двери), <b>dwoje nożyczek</b> (двое ножниц).",
      "Вот тут русский и польский расходятся в мелочах: русское «двое дверей» звучит странно, мы скажем «две двери», а поляк обязан сказать dwoje drzwi. Категория общая — набор слов свой."
    ],
    "audio":"Собирательное числительное не украшение — в трёх случаях без него нельзя. Первый: dzieci. Только dwoje, troje, pięcioro dzieci. Второй: смешанная группа людей, есть и мужчины, и женщины. Сравни весь набор: dwaj studenci или dwóch studentów — только парни; dwie studentki — только девушки; dwoje studentów — парень и девушка. Это прямое продолжение мужско-личного рода из A2: там ты учил различать группы, здесь язык требует того же различия у числа. Третий: слова, у которых нет единственного числа. Дверь по-польски всегда drzwi, ножницы — nożyczki, скрипка — skrzypce. Посчитать их обычным числом нельзя, поэтому dwoje drzwi, две двери, и dwoje nożyczek, двое ножниц. Вот тут русский и польский расходятся в мелочах: русское «двое дверей» звучит странно, мы скажем «две двери», а поляк обязан сказать dwoje drzwi. Категория общая, набор слов свой.",
    "table":{"rows":[
      ["dwaj studenci / dwóch studentów","только мужчины"],
      ["dwie studentki","только женщины"],
      ["dwoje studentów <button class=\"play\" data-say=\"dwoje studentów\">🔊</button>","он и она — смешанная группа"],
      ["troje przyjaciół","трое друзей (смешанно)"],
      ["dwoje drzwi <button class=\"play\" data-say=\"dwoje drzwi\">🔊</button>","две двери"],
      ["dwoje nożyczek · troje skrzypiec","двое ножниц · три скрипки"]
    ],"star":2},
    "examples":[
      {"ru":"На встречу пришли двое студентов — он и она.","en":"Na spotkanie przyszło <b>dwoje studentów</b> — on i ona.","say":"Na spotkanie przyszło dwoje studentów, on i ona."},
      {"ru":"В комнате две двери.","en":"W pokoju jest <b>dwoje drzwi</b>.","gloss":"drzwi — слово без единственного числа","say":"W pokoju jest dwoje drzwi."},
      {"ru":"Двое моих друзей живут в Гданьске.","en":"<b>Dwoje moich przyjaciół</b> mieszka w Gdańsku.","say":"Dwoje moich przyjaciół mieszka w Gdańsku."},
      {"ru":"Здесь были три студентки.","en":"Były tu <b>trzy studentki</b>.","gloss":"только женщины — обычное число","say":"Były tu trzy studentki."}
    ],
    "mistakes":[
      {"wrong":"dwie drzwi","right":"<b>dwoje drzwi</b>","why":"У drzwi нет единственного числа, поэтому считается собирательным."},
      {"wrong":"dwa studenci","right":"<b>dwaj studenci</b> / <b>dwóch studentów</b>","why":"О мужчинах — мужско-личная форма из A2; о смешанной группе — dwoje studentów."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> в группе он и она.",
       "q":"Пришли студент и студентка. Это —","opts":["dwaj studenci","dwie studentki","dwoje studentów"],"answer":2,
       "explain":"Смешанная группа берёт собирательное: <b>dwoje studentów</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> у слова нет единственного числа.",
       "q":"«две двери» —","opts":["dwie drzwi","dwoje drzwi","dwa drzwi"],"answer":1,
       "explain":"Drzwi считается только собирательным: <b>dwoje drzwi</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> в группе только женщины.",
       "q":"Три студентки —","opts":["trzy studentki","troje studentek","trzej studentki"],"answer":0,
       "explain":"Только женщины — обычное числительное: <b>trzy studentki</b>."}
    ]
   },
   {
    "eyebrow":"Правило 3 · Глагол и падежи",
    "title":"<em>Przyszło troje gości</em>",
    "paras":[
      "Собирательное числительное ведёт себя как «много»: глагол при нём стоит в единственном числе, а в прошедшем — в среднем роде. <b>Dwoje dzieci bawi się na podwórku. Przyszło troje gości. Na parapetówce było pięcioro dzieci.</b>",
      "Русский делает то же самое и так же незаметно: «пришло трое гостей», «было пятеро детей» — глагол в среднем роде, хотя гости были живые и шумные.",
      "Сами эти числительные тоже склоняются. В обиходе тебе нужнее всего родительный — <b>dwojga, trojga</b>: <b>matka dwojga dzieci</b> (мать двоих детей), <b>ojciec trojga dzieci</b>. Есть и остальные формы (dwojgu, dwojgiem), но их достаточно узнавать на письме — говорить ты будешь в основном dwoje и dwojga.",
      "Стоит запомнить готовые обороты: <b>rodzice dwojga dzieci</b>, <b>opieka nad dwojgiem dzieci</b>. Они часто встречаются в анкетах и объявлениях."
    ],
    "audio":"Собирательное числительное ведёт себя как «много»: глагол при нём стоит в единственном числе, а в прошедшем — в среднем роде. Dwoje dzieci bawi się na podwórku. Przyszło troje gości. Na parapetówce było pięcioro dzieci. Русский делает то же самое и так же незаметно: пришло трое гостей, было пятеро детей — глагол в среднем роде, хотя гости были живые и шумные. Сами эти числительные тоже склоняются. В обиходе тебе нужнее всего родительный: dwojga, trojga. Matka dwojga dzieci — мать двоих детей, ojciec trojga dzieci. Есть и остальные формы, dwojgu, dwojgiem, но их достаточно узнавать на письме: говорить ты будешь в основном dwoje и dwojga. Стоит запомнить готовые обороты: rodzice dwojga dzieci, opieka nad dwojgiem dzieci. Они часто встречаются в анкетах и объявлениях.",
    "table":{"rows":[
      ["Dwoje dzieci bawi się. <button class=\"play\" data-say=\"Dwoje dzieci bawi się.\">🔊</button>","глагол в единственном числе"],
      ["Przyszło troje gości. <button class=\"play\" data-say=\"Przyszło troje gości.\">🔊</button>","в прошедшем — средний род"],
      ["Było pięcioro dzieci.","было пятеро детей"],
      ["matka dwojga dzieci","мать двоих детей"],
      ["ojciec trojga dzieci","отец троих детей"],
      ["dwojgu · dwojgiem","остальные формы — узнавать"]
    ],"star":1},
    "examples":[
      {"ru":"Пришло трое гостей.","en":"<b>Przyszło troje gości.</b>","say":"Przyszło troje gości."},
      {"ru":"Двое детей играют во дворе.","en":"<b>Dwoje dzieci bawi się</b> na podwórku.","say":"Dwoje dzieci bawi się na podwórku."},
      {"ru":"Пани Ковальская — мать двоих детей.","en":"Pani Kowalska jest <b>matką dwojga dzieci</b>.","say":"Pani Kowalska jest matką dwojga dzieci."},
      {"ru":"На новоселье было пятеро детей.","en":"Na parapetówce <b>było pięcioro dzieci</b>.","say":"Na parapetówce było pięcioro dzieci."}
    ],
    "mistakes":[
      {"wrong":"Przyszli troje gości.","right":"<b>Przyszło</b> troje gości.","why":"При собирательном числительном глагол идёт в среднем роде единственного числа — как русское «пришло трое»."},
      {"wrong":"matka dwoje dzieci","right":"matka <b>dwojga</b> dzieci","why":"«Мать двоих» — родительный и у числительного: dwojga."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни русское «пришло трое».",
       "q":"«Пришло трое гостей» —","opts":["Przyszli troje gości","Przyszło troje gości","Przyszła troje gości"],"answer":1,
       "explain":"Глагол в среднем роде единственного числа: <b>przyszło</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> «мать двоих детей».",
       "q":"«мать двоих детей» —","opts":["matka dwoje dzieci","matka dwojga dzieci","matka dwojgiem dzieci"],"answer":1,
       "explain":"Родительный собирательного — <b>dwojga</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«На новоселье было пятеро детей»</b>","answer":"Na parapetówce było pięcioro dzieci"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Оба, обе, оба вместе",
    "title":"<em>obaj, obie, oboje</em> и слово <em>rodzeństwo</em>",
    "paras":[
      "Русское «оба / обе» в польском разошлось на три слова, и делятся они по знакомому признаку. <b>obaj</b> (или obydwaj) — два мужчины: obaj bracia. <b>obie</b> — две женщины или две вещи: obie siostry, obie lampy. <b>oboje</b> — он и она: <b>Anna i Marek — oboje pracują.</b>",
      "И одна форма, которую стоит просто запомнить: про маму с папой говорят <b>oboje rodzice</b> — после oboje тут стоит именительный, а не родительный. Форма «oboje rodziców» тоже встречается в живой речи, но традиционная норма — oboje rodzice.",
      "Рядом живёт слово, которого в русском нет вовсе: <b>rodzeństwo</b> — «братья и сёстры» одним словом. Оно среднего рода и единственного числа: <b>Masz rodzeństwo?</b> — «У тебя есть братья или сёстры?» <b>Mam rodzeństwo: brata i siostrę.</b>",
      "Ловушка для уха: rodzeństwo и rodzice — соседи по звучанию, но не по смыслу. rodzice — родители, rodzeństwo — братья и сёстры."
    ],
    "audio":"Русское «оба, обе» в польском разошлось на три слова, и делятся они по знакомому признаку. Obaj, или obydwaj, — два мужчины: obaj bracia. Obie — две женщины или две вещи: obie siostry, obie lampy. Oboje — он и она: Anna i Marek, oboje pracują. И одна форма, которую стоит просто запомнить: про маму с папой говорят oboje rodzice — после oboje тут стоит именительный, а не родительный. Форма oboje rodziców тоже встречается в живой речи, но традиционная норма — oboje rodzice. Рядом живёт слово, которого в русском нет вовсе: rodzeństwo, братья и сёстры одним словом. Оно среднего рода и единственного числа: masz rodzeństwo — у тебя есть братья или сёстры? Mam rodzeństwo: brata i siostrę. Ловушка для уха: rodzeństwo и rodzice — соседи по звучанию, но не по смыслу. Rodzice — родители, rodzeństwo — братья и сёстры.",
    "table":{"rows":[
      ["obaj bracia <button class=\"play\" data-say=\"obaj bracia\">🔊</button>","оба брата — мужчины"],
      ["obie siostry · obie lampy","обе сестры · обе лампы"],
      ["oboje — Anna i Marek <button class=\"play\" data-say=\"Anna i Marek, oboje\">🔊</button>","он и она"],
      ["oboje rodzice","оба родителя"],
      ["rodzeństwo <button class=\"play\" data-say=\"rodzeństwo\">🔊</button>","братья и сёстры (одно слово)"],
      ["Masz rodzeństwo?","у тебя есть братья или сёстры?"]
    ],"star":4},
    "examples":[
      {"ru":"Анна и Марек — оба работают в Кракове.","en":"Anna i Marek — <b>oboje</b> pracują w Krakowie.","say":"Anna i Marek, oboje pracują w Krakowie."},
      {"ru":"Оба брата живут в Гданьске.","en":"<b>Obaj bracia</b> mieszkają w Gdańsku.","say":"Obaj bracia mieszkają w Gdańsku."},
      {"ru":"Обе сестры были на новоселье.","en":"<b>Obie siostry</b> były na parapetówce.","say":"Obie siostry były na parapetówce."},
      {"ru":"У тебя есть братья или сёстры?","en":"<b>Masz rodzeństwo?</b>","say":"Masz rodzeństwo?"},
      {"ru":"Оба родителя ещё работают.","en":"<b>Oboje rodzice</b> jeszcze pracują.","say":"Oboje rodzice jeszcze pracują."}
    ],
    "mistakes":[
      {"wrong":"Anna i Marek — obaj","right":"Anna i Marek — <b>oboje</b>","why":"Obaj — только о мужчинах; он и она — oboje."},
      {"wrong":"Masz rodziców i siostry?","right":"<b>Masz rodzeństwo?</b>","why":"Rodzeństwo — готовое слово для «братьев и сестёр»; rodzice — это родители."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> в паре он и она.",
       "q":"Анна и Марек — это…","opts":["obaj","obie","oboje"],"answer":2,
       "explain":"Смешанная пара — <b>oboje</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> одно слово вместо двух.",
       "q":"«У тебя есть братья или сёстры?» —","opts":["Masz rodziców?","Masz rodzeństwo?","Masz dzieci?"],"answer":1,
       "explain":"<b>Rodzeństwo</b> — братья и сёстры одним словом."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Sąsiad ma dwoje dzieci.","sub":"у соседа двое детей","want":"Sąsiad ma dwoje dzieci."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна расспрашивает Марека о соседях. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"A","name":"Anna","side":"right","en":"Kto mieszka pod tobą?","ru":"Кто живёт под тобой?",
      "words":[["pod tobą","под тобой"]]},
     {"who":"M","name":"Marek","side":"left","en":"Państwo Kowalscy. Mają dwoje dzieci.","ru":"Ковальские. У них двое детей.",
      "words":[["dwoje dzieci","двое детей"]]},
     {"who":"A","name":"Anna","side":"right","en":"Chłopiec i dziewczynka?","ru":"Мальчик и девочка?",
      "words":[["dziewczynka","девочка"]]},
     {"who":"M","name":"Marek","side":"left","en":"Tak. Dlatego dwoje, a nie dwaj albo dwie.","ru":"Да. Поэтому dwoje, а не dwaj или dwie.",
      "words":[["dlatego","поэтому"]]},
     {"who":"A","name":"Anna","side":"right","en":"A oni oboje pracują?","ru":"А они оба работают?",
      "words":[["oboje","оба (он и она)"]]},
     {"who":"M","name":"Marek","side":"left","en":"Oboje. Pani Kowalska jest matką dwojga dzieci i jeszcze studiuje.","ru":"Оба. Пани Ковальская — мать двоих детей и ещё учится.",
      "words":[["matką dwojga dzieci","матерью двоих детей"]]},
     {"who":"A","name":"Anna","side":"right","en":"A ty masz rodzeństwo?","ru":"А у тебя есть братья или сёстры?",
      "words":[["rodzeństwo","братья и сёстры"]]},
     {"who":"M","name":"Marek","side":"left","en":"Mam dwóch braci. Obaj mieszkają w Gdańsku.","ru":"У меня два брата. Оба живут в Гданьске.",
      "words":[["dwóch braci","два брата"],["Obaj","оба"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — на детской площадке.",
   "lines":[
     {"who":"A","en":"Ile masz dzieci?","ru":"Сколько у тебя детей?"},
     {"who":"B","en":"Troje. Dwie córki i syn.","ru":"Трое. Две дочери и сын."},
     {"who":"A","en":"A rodzeństwo?","ru":"А братья и сёстры?"},
     {"who":"B","en":"Mam siostrę. Obie mieszkamy w Krakowie.","ru":"У меня сестра. Мы обе живём в Кракове."},
     {"who":"A","en":"Wczoraj przyszło do nas czworo dzieci sąsiadów.","ru":"Вчера к нам пришли четверо соседских детей."},
     {"who":"B","en":"I było głośno przez cały wieczór.","ru":"И весь вечер было шумно."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — счёт людей и семья.",
   "items":[
     {"en":"dwoje dzieci","ru":"двое детей","ex":"Sąsiad ma dwoje dzieci."},
     {"en":"troje / czworo / pięcioro","ru":"трое / четверо / пятеро","ex":"W przedszkolu jest pięcioro dzieci."},
     {"en":"dwoje studentów","ru":"двое студентов (он и она)","ex":"Przyszło dwoje studentów."},
     {"en":"dwoje drzwi","ru":"две двери","ex":"W pokoju jest dwoje drzwi."},
     {"en":"dwojga (matka dwojga dzieci)","ru":"двоих (мать двоих детей)","ex":"Jest matką dwojga dzieci."},
     {"en":"obaj / obie / oboje","ru":"оба (м.) / обе / оба (он и она)","ex":"Anna i Marek — oboje pracują."},
     {"en":"oboje rodzice","ru":"оба родителя","ex":"Oboje rodzice jeszcze pracują."},
     {"en":"rodzeństwo","ru":"братья и сёстры","ex":"Masz rodzeństwo?"},
     {"en":"chłopiec · dziewczynka","ru":"мальчик · девочка","ex":"Mają chłopca i dziewczynkę."},
     {"en":"podwórko","ru":"двор","ex":"Dzieci bawią się na podwórku."},
     {"en":"przedszkole","ru":"детский сад","ex":"Ich córka chodzi do przedszkola."},
     {"en":"państwo Kowalscy","ru":"Ковальские (супруги)","ex":"Pod nami mieszkają państwo Kowalscy."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу.",
   "pairs":[["dwoje dzieci","двое детей"],["oboje rodzice","оба родителя"],["rodzeństwo","братья и сёстры"],["dwoje drzwi","две двери"]]
 },
 "reading":{
   "intro":"Прочитай вслух — сегодня считаем людей.",
   "title":"Sąsiedzi z dołu",
   "sentences":["Pod Markiem mieszkają państwo Kowalscy.","Mają dwoje dzieci: chłopca i dziewczynkę.","Dlatego mówimy dwoje, a nie dwaj.","Oboje rodzice pracują w szkole.","Rano dzieci idą do przedszkola.","Po południu bawią się na podwórku.","Wczoraj przyszło do nich czworo kolegów.","Było głośno, ale wesoło.","Pani Kowalska jest matką dwojga dzieci.","Marek ma dwóch braci, obaj mieszkają w Gdańsku.","Anna ma tylko siostrę.","Oboje lubią duże rodziny."],
   "translation":"Под Мареком живут Ковальские. У них двое детей: мальчик и девочка. Поэтому мы говорим dwoje, а не dwaj. Оба родителя работают в школе. Утром дети идут в садик. После обеда играют во дворе. Вчера к ним пришли четверо приятелей. Было шумно, но весело. Пани Ковальская — мать двоих детей. У Марека два брата, оба живут в Гданьске. У Анны только сестра. Оба любят большие семьи."
 },
 "quiz":{
   "intro":"Пять вопросов — и собирательные числительные твои.",
   "items":[
     {"q":"1. «У соседа двое детей» —","opts":["Sąsiad ma dwa dzieci","Sąsiad ma dwoje dzieci","Sąsiad ma dwie dzieci"],"answer":1,
      "explain":"Дети считаются собирательным: <b>dwoje dzieci</b>."},
     {"q":"2. Пришли студент и студентка. Это —","opts":["dwaj studenci","dwoje studentów","dwie studentki"],"answer":1,
      "explain":"Смешанная группа — <b>dwoje studentów</b>."},
     {"q":"3. «две двери» —","opts":["dwoje drzwi","dwie drzwi","dwa drzwi"],"answer":0,
      "explain":"У drzwi нет единственного числа: <b>dwoje drzwi</b>."},
     {"q":"4. «Пришло трое гостей» —","opts":["Przyszli troje gości","Przyszło troje gości","Przyszła troje gości"],"answer":1,
      "explain":"Глагол в среднем роде единственного числа: <b>przyszło</b>."},
     {"q":"5. Анна и Марек — это…","opts":["obaj","oboje","obie"],"answer":1,
      "explain":"Он и она — <b>oboje</b>."}
   ]
 },
 "essay":{
   "intro":"Небольшой рассказ о семье — своей или соседской.",
   "prompt":"Напиши 4–5 фраз: сколько у кого детей, есть ли у тебя братья и сёстры, кто где живёт и работает.",
   "hint":"Опора: Mam rodzeństwo… · Moi sąsiedzi mają… dzieci · Oboje… · Obaj / Obie… Проверь: после dwoje / troje — родительный множественного. 💛",
   "example":"Moi sąsiedzi mają troje dzieci: dwie córki i syna. Oboje rodzice pracują, więc dzieci chodzą do przedszkola. Ja mam rodzeństwo — brata i siostrę. Oboje mieszkają w Gdańsku. U mnie w domu są tylko dwoje drzwi i jeden mały pokój."
 }
},

"11": {
 "day":11,"week":"02",
 "themeRu":"Который, с которым",
 "themeEn":"Który w przypadkach",
 "intro":"Одно короткое слово умеет склеить два предложения в одно: «сосед, <b>который</b> живёт внизу», «друзья, <b>с которыми</b> мы были в Италии». В польском это <b>który</b> — и склоняется оно точно так же, как русское «который». Сегодня редкий день, когда фразу можно строить слово в слово.",
 "introAudio":"Одно короткое слово умеет склеить два предложения в одно: сосед, который живёт внизу; друзья, с которыми мы были в Италии. В польском это słowo który — и склоняется оно точно так же, как русское «который». Сегодня редкий день, когда фразу можно строить слово в слово.",
 "goals":[
   "Присоединять придаточное: <b>sąsiad, który ma dwoje dzieci</b>",
   "Выбирать форму по роду и числу: <b>który, która, które, którzy</b>",
   "Ставить <b>którego, któremu, którym, której, którą</b> по роли в придаточном",
   "Строить обороты с предлогом: <b>z którym, o której, do którego, z którymi</b>"
 ],
 "learned":[
   "Присоединил(а) придаточное: sąsiad, który ma dwoje dzieci",
   "Выбрал(а) форму по роду и числу: który, która, które, którzy",
   "Поставил(а) którego, któremu, którym, której, którą по роли в придаточном",
   "Построил(а) обороты с предлогом: z którym, o której, do którego, z którymi"
 ],
 "review":{
   "intro":"Вчерашние «двое-трое» — и вид глагола, чтобы рука не забывала выбирать.",
   "introAudio":"Вчерашние «двое-трое» — и вид глагола, чтобы рука не забывала выбирать.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни русское «двое детей».",
      "q":"«У них трое детей» —","opts":["Mają trzy dzieci","Mają troje dzieci","Mają trzej dzieci"],"answer":1,
      "explain":"Дети считаются собирательным числительным: <b>troje dzieci</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> он и она.",
      "q":"Anna i Marek —","opts":["oboje","obaj","obie"],"answer":0,
      "explain":"Смешанная пара — <b>oboje</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> дело доведено до конца.",
      "q":"«Вчера я написал письмо» —","opts":["Wczoraj pisałem list","Wczoraj napisałem list","Wczoraj piszę list"],"answer":1,
      "explain":"Результат — совершенный вид: <b>napisałem</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«У соседа двое детей»</b>","answer":"Sąsiad ma dwoje dzieci"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Как это устроено",
    "title":"<em>Sąsiad, który mieszka pod nami</em>",
    "paras":[
      "Который смотрит в две стороны сразу — и это весь секрет. <b>Род и число</b> оно берёт от слова слева, к которому прицепилось. <b>Падеж</b> — от собственной работы внутри придаточного.",
      "Начнём с именительного, когда «который» — подлежащее своего куска: <b>który</b> (м. р.), <b>która</b> (ж. р.), <b>które</b> (ср. р.), <b>którzy</b> (мужчины или смешанная группа), <b>które</b> (все остальные во множественном).",
      "To jest sąsiad, <b>który</b> ma dwoje dzieci. To jest kobieta, <b>która</b> mieszka obok. To są ludzie, <b>którzy</b> nam pomogli. To są rzeczy, <b>które</b> kupiliśmy wczoraj.",
      "Обрати внимание на <b>którzy</b>: это мужско-личная форма из A2. Она стоит там же, где стояли studenci и byli — про людей, среди которых есть мужчина.",
      "И запятая. Перед który она в польском обязательна всегда — так же, как в русском перед «который». Тут даже привычка руки совпадает."
    ],
    "audio":"Который смотрит в две стороны сразу — и это весь секрет. Род и число оно берёт от слова слева, к которому прицепилось. Падеж — от собственной работы внутри придаточного. Начнём с именительного, когда «который» подлежащее своего куска: który для мужского рода, która для женского, które для среднего, którzy для мужчин или смешанной группы, które для всех остальных во множественном. To jest sąsiad, który ma dwoje dzieci. To jest kobieta, która mieszka obok. To są ludzie, którzy nam pomogli. To są rzeczy, które kupiliśmy wczoraj. Обрати внимание на którzy: это мужско-личная форма из A2. Она стоит там же, где стояли studenci и byli — про людей, среди которых есть мужчина. И запятая. Перед który она в польском обязательна всегда — так же, как в русском перед «который». Тут даже привычка руки совпадает.",
    "table":{"rows":[
      ["sąsiad, który… <button class=\"play\" data-say=\"sąsiad, który mieszka pod nami\">🔊</button>","мужской род"],
      ["kobieta, która… <button class=\"play\" data-say=\"kobieta, która mieszka obok\">🔊</button>","женский род"],
      ["dziecko, które…","средний род"],
      ["ludzie, którzy… <button class=\"play\" data-say=\"ludzie, którzy nam pomogli\">🔊</button>","мужчины и смешанные группы"],
      ["rzeczy, które…","всё остальное во множественном"],
      ["запятая перед który — всегда","как в русском"]
    ],"star":3},
    "examples":[
      {"ru":"Это сосед, который живёт под нами.","en":"To jest sąsiad, <b>który</b> mieszka pod nami.","say":"To jest sąsiad, który mieszka pod nami."},
      {"ru":"Это женщина, которая работает в школе.","en":"To jest kobieta, <b>która</b> pracuje w szkole.","say":"To jest kobieta, która pracuje w szkole."},
      {"ru":"Это люди, которые помогли нам с переездом.","en":"To są ludzie, <b>którzy</b> pomogli nam w przeprowadzce.","say":"To są ludzie, którzy pomogli nam w przeprowadzce."},
      {"ru":"Это вещи, которые мы купили вчера.","en":"To są rzeczy, <b>które</b> kupiliśmy wczoraj.","say":"To są rzeczy, które kupiliśmy wczoraj."}
    ],
    "mistakes":[
      {"wrong":"ludzie, które nam pomogli","right":"ludzie, <b>którzy</b> nam pomogli","why":"О людях, среди которых есть мужчина, — мужско-личная форма którzy."},
      {"wrong":"sąsiad który mieszka pod nami","right":"sąsiad<b>,</b> który mieszka pod nami","why":"Запятая перед który обязательна."}
    ],
    "mnemonic":"🔗 Слева берём род и число, внутри — падеж. Запятая — всегда.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> смотри на слово слева.",
       "q":"To jest kobieta, ___ mieszka obok.","opts":["który","która","które"],"answer":1,
       "explain":"Kobieta — женский род: <b>która</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни мужско-личный род из A2.",
       "q":"To są ludzie, ___ tu pracują.","opts":["które","którzy","którymi"],"answer":1,
       "explain":"О людях с мужчинами в группе — <b>którzy</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Это сосед, который живёт под нами»</b>","answer":"To jest sąsiad, który mieszka pod nami"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Падежи внутри придаточного",
    "title":"<em>którego, któremu, którą</em>",
    "paras":[
      "Теперь главное: падеж «который» получает не от слова слева, а от глагола или предлога в своём предложении. Ровно как в русском — «человек, <b>которого</b> я знаю», «сосед, <b>которому</b> мы помогли».",
      "Мужской и средний род: <b>którego</b> (родительный и винительный одушевлённый), <b>któremu</b> (дательный), <b>którym</b> (творительный и предложный). Женский: <b>której</b> (родительный, дательный, предложный), <b>którą</b> (винительный и творительный).",
      "Człowiek, <b>którego</b> znasz, był wczoraj u nas. Sąsiad, <b>któremu</b> pomogliśmy, przyniósł wino. Kobieta, <b>której</b> pomagam, ma troje dzieci. Książka, <b>którą</b> czytam, jest o Włoszech.",
      "Одна деталь, которая тоже совпадает с русским: в винительном мужского рода живое и неживое расходятся. <b>Pies, którego widziałem</b> — «пёс, которого я видел». <b>Film, który widziałem</b> — «фильм, который я видел». Проверяй тем же способом, что и в родном языке."
    ],
    "audio":"Теперь главное: падеж «который» получает не от слова слева, а от глагола или предлога в своём предложении. Ровно как в русском: человек, которого я знаю; сосед, которому мы помогли. Мужской и средний род: którego — родительный и винительный одушевлённый, któremu — дательный, którym — творительный и предложный. Женский: której — родительный, дательный, предложный; którą — винительный и творительный. Człowiek, którego znasz, był wczoraj u nas. Sąsiad, któremu pomogliśmy, przyniósł wino. Kobieta, której pomagam, ma troje dzieci. Książka, którą czytam, jest o Włoszech. Одна деталь, которая тоже совпадает с русским: в винительном мужского рода живое и неживое расходятся. Pies, którego widziałem — пёс, которого я видел. Film, który widziałem — фильм, который я видел. Проверяй тем же способом, что и в родном языке.",
    "table":{"rows":[
      ["człowiek, którego znasz","которого — вин. одушевлённый"],
      ["sąsiad, któremu pomogliśmy","которому — дательный"],
      ["kobieta, której pomagam","которой — дательный ж. р."],
      ["książka, którą czytam <button class=\"play\" data-say=\"książka, którą czytam\">🔊</button>","которую — винительный ж. р."],
      ["pies, którego widziałem","живое — którego"],
      ["film, który widziałem","неживое — который"]
    ],"star":1},
    "examples":[
      {"ru":"Человек, которого ты знаешь, был вчера у нас.","en":"Człowiek, <b>którego</b> znasz, był wczoraj u nas.","say":"Człowiek, którego znasz, był wczoraj u nas."},
      {"ru":"Сосед, которому мы помогли, принёс вино.","en":"Sąsiad, <b>któremu</b> pomogliśmy, przyniósł wino.","say":"Sąsiad, któremu pomogliśmy, przyniósł wino."},
      {"ru":"Женщина, которой я помогаю, — учительница.","en":"Kobieta, <b>której</b> pomagam, jest nauczycielką.","say":"Kobieta, której pomagam, jest nauczycielką."},
      {"ru":"Книга, которую я читаю, — об Италии.","en":"Książka, <b>którą</b> czytam, jest o Włoszech.","say":"Książka, którą czytam, jest o Włoszech."},
      {"ru":"Фильм, который мы смотрели, был длинный.","en":"Film, <b>który</b> oglądaliśmy, był długi.","say":"Film, który oglądaliśmy, był długi."}
    ],
    "mistakes":[
      {"wrong":"Sąsiad, który pomogliśmy","right":"Sąsiad, <b>któremu</b> pomogliśmy","why":"Pomagać — кому, значит дательный: któremu."},
      {"wrong":"Książka, który czytam","right":"Książka, <b>którą</b> czytam","why":"Książka женского рода, а читаю — что, винительный: którą."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> pomagać просит дательный.",
       "q":"Sąsiad, ___ pomogliśmy, przyniósł wino.","opts":["który","którego","któremu"],"answer":2,
       "explain":"Кому помогли — <b>któremu</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> читаю — что?",
       "q":"Książka, ___ czytam, jest ciekawa.","opts":["którą","która","której"],"answer":0,
       "explain":"Винительный женского рода — <b>którą</b>."},
      {"type":"type","howto":"Напиши «человек, которого ты знаешь». Диакритику можно не ставить.",
       "q":"человек, которого ты знаешь","accept":["człowiek, którego znasz","czlowiek, ktorego znasz","człowiek którego znasz","czlowiek ktorego znasz"],"placeholder":"człowiek, …"}
    ]
   },
   {
    "eyebrow":"Правило 3 · С предлогом",
    "title":"<em>z którym, o której, do którego</em>",
    "paras":[
      "Предлог не остаётся позади — он идёт вместе с «который» в начало придаточного, как и в русском: «девушка, <b>с которой</b> я разговаривал».",
      "Dziewczyna, <b>z którą</b> rozmawiałem, pracuje w szkole. Dom, <b>w którym</b> mieszkamy, jest stary. Sklep, <b>do którego</b> chodzimy, jest blisko. Przyjaciele, <b>z którymi</b> byliśmy we Włoszech, przyjdą jutro. Sąsiedzi, <b>o których</b> mówiłem, mają psa.",
      "Множественное — те же три окончания, что и вчера: <b>których</b> (родительный и предложный), <b>którym</b> (дательный), <b>którymi</b> (творительный). Ludzie, <b>którym</b> pomagamy. Rzeczy, <b>którymi</b> się interesuję.",
      "И приятная встреча: вопрос о времени <b>O której godzinie?</b> — это та же która, только в предложном. «В котором часу» — буквально так же."
    ],
    "audio":"Предлог не остаётся позади — он идёт вместе с «который» в начало придаточного, как и в русском: девушка, с которой я разговаривал. Dziewczyna, z którą rozmawiałem, pracuje w szkole. Dom, w którym mieszkamy, jest stary. Sklep, do którego chodzimy, jest blisko. Przyjaciele, z którymi byliśmy we Włoszech, przyjdą jutro. Sąsiedzi, o których mówiłem, mają psa. Множественное — те же три окончания, что и вчера: których — родительный и предложный, którym — дательный, którymi — творительный. Ludzie, którym pomagamy. Rzeczy, którymi się interesuję. И приятная встреча: вопрос о времени o której godzinie — это та же która, только в предложном. В котором часу — буквально так же.",
    "table":{"rows":[
      ["dziewczyna, z którą rozmawiałem <button class=\"play\" data-say=\"dziewczyna, z którą rozmawiałem\">🔊</button>","с которой"],
      ["dom, w którym mieszkamy <button class=\"play\" data-say=\"dom, w którym mieszkamy\">🔊</button>","в котором"],
      ["sklep, do którego chodzimy","в который (ходим)"],
      ["przyjaciele, z którymi byliśmy","с которыми"],
      ["sąsiedzi, o których mówiłem","о которых"],
      ["O której godzinie? <button class=\"play\" data-say=\"O której godzinie?\">🔊</button>","в котором часу?"]
    ],"star":3},
    "examples":[
      {"ru":"Девушка, с которой я разговаривал, работает в школе.","en":"Dziewczyna, <b>z którą</b> rozmawiałem, pracuje w szkole.","say":"Dziewczyna, z którą rozmawiałem, pracuje w szkole."},
      {"ru":"Дом, в котором мы живём, старый.","en":"Dom, <b>w którym</b> mieszkamy, jest stary.","say":"Dom, w którym mieszkamy, jest stary."},
      {"ru":"Друзья, с которыми мы были в Италии, придут завтра.","en":"Przyjaciele, <b>z którymi</b> byliśmy we Włoszech, przyjdą jutro.","say":"Przyjaciele, z którymi byliśmy we Włoszech, przyjdą jutro."},
      {"ru":"Соседи, о которых я говорил, держат собаку.","en":"Sąsiedzi, <b>o których</b> mówiłem, mają psa.","say":"Sąsiedzi, o których mówiłem, mają psa."},
      {"ru":"В котором часу ты придёшь?","en":"<b>O której</b> godzinie przyjdziesz?","say":"O której godzinie przyjdziesz?"}
    ],
    "mistakes":[
      {"wrong":"Dom, który mieszkamy w nim","right":"Dom, <b>w którym</b> mieszkamy","why":"Предлог встаёт перед który, а не остаётся в хвосте."},
      {"wrong":"Przyjaciele, z którymy byliśmy","right":"Przyjaciele, <b>z którymi</b> byliśmy","why":"Творительный множественного — którymi, с -mi на конце."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> предлог w просит предложный.",
       "q":"Dom, ___ mieszkamy, jest stary.","opts":["który","w którym","z którym"],"answer":1,
       "explain":"«В котором живём» — <b>w którym</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> с кем были?",
       "q":"Przyjaciele, ___ byliśmy we Włoszech —","opts":["z którymi","o których","którym"],"answer":0,
       "explain":"Творительный множественного: <b>z którymi</b>."},
      {"type":"type","howto":"Напиши «в котором часу?». Диакритику можно не ставить.",
       "q":"В котором часу?","accept":["o której godzinie","o ktorej godzinie","o której godzinie?","o ktorej godzinie?"],"placeholder":"O której…"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Соседние слова",
    "title":"<em>to, co</em> — и чем <em>który</em> не является",
    "paras":[
      "Который цепляется к существительному. Если же цепляться не к чему — к «всё», «то», «ничего», — берётся <b>co</b>, как и в русском «то, что».",
      "<b>Wszystko, co mam</b> — «всё, что у меня есть». <b>To, co powiedziałeś</b>, jest ważne — «то, что ты сказал, важно». <b>Nic, co widziałem</b>… — «ничего из того, что я видел…».",
      "Не путай также <b>który</b> с вопросительным <b>kto</b> и <b>co</b>: <b>Kto to jest?</b> — кто это? <b>Który z nich?</b> — который из них? В вопросе <b>który</b> значит «какой именно из ряда», и это ещё одно точное совпадение с русским.",
      "И полезное разговорное сокращение: вместо длинного «człowiek, o którym mówiłem» поляк часто скажет просто <b>ten, o którym mówiłem</b> — «тот, о котором я говорил». Конструкция та же, только опора короче."
    ],
    "audio":"Который цепляется к существительному. Если же цепляться не к чему — к словам «всё», «то», «ничего», — берётся co, как и в русском «то, что». Wszystko, co mam — всё, что у меня есть. To, co powiedziałeś, jest ważne — то, что ты сказал, важно. Nic, co widziałem — ничего из того, что я видел. Не путай также który с вопросительными kto и co: kto to jest — кто это; który z nich — который из них. В вопросе który значит «какой именно из ряда», и это ещё одно точное совпадение с русским. И полезное разговорное сокращение: вместо длинного człowiek, o którym mówiłem поляк часто скажет просто ten, o którym mówiłem — тот, о котором я говорил. Конструкция та же, только опора короче.",
    "table":{"rows":[
      ["wszystko, co mam <button class=\"play\" data-say=\"wszystko, co mam\">🔊</button>","всё, что у меня есть"],
      ["To, co powiedziałeś, jest ważne.","то, что ты сказал, важно"],
      ["ten, o którym mówiłem","тот, о котором я говорил"],
      ["Który z nich? <button class=\"play\" data-say=\"Który z nich?\">🔊</button>","который из них?"],
      ["Kto to jest?","кто это?"],
      ["Która godzina?","который час?"]
    ],"star":0},
    "examples":[
      {"ru":"Всё, что у меня есть, — в этой квартире.","en":"<b>Wszystko, co mam</b>, jest w tym mieszkaniu.","say":"Wszystko, co mam, jest w tym mieszkaniu."},
      {"ru":"То, что ты сказал, очень важно.","en":"<b>To, co powiedziałeś</b>, jest bardzo ważne.","say":"To, co powiedziałeś, jest bardzo ważne."},
      {"ru":"Тот сосед, о котором я говорил, — пан Ковальский.","en":"Ten sąsiad, <b>o którym</b> mówiłem, to pan Kowalski.","say":"Ten sąsiad, o którym mówiłem, to pan Kowalski."},
      {"ru":"Который из них твой брат?","en":"<b>Który z nich</b> jest twoim bratem?","say":"Który z nich jest twoim bratem?"}
    ],
    "mistakes":[
      {"wrong":"Wszystko, które mam","right":"Wszystko, <b>co</b> mam","why":"К словам «всё, то, ничего» цепляется co, а не который."},
      {"wrong":"To, który powiedziałeś","right":"To, <b>co</b> powiedziałeś","why":"«То, что» — to, co; в точности как в русском."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> опора — слово «всё».",
       "q":"«Всё, что у меня есть» —","opts":["Wszystko, które mam","Wszystko, co mam","Wszystko, którego mam"],"answer":1,
       "explain":"После wszystko идёт <b>co</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> выбираем из ряда.",
       "q":"«Который из них твой брат?» —","opts":["Kto z nich jest twoim bratem?","Który z nich jest twoim bratem?","Co z nich jest twoim bratem?"],"answer":1,
       "explain":"Выбор из ряда — <b>który z nich</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Dom, w którym mieszkamy, jest stary.","sub":"дом, в котором мы живём, старый","want":"Dom, w którym mieszkamy, jest stary."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна разглядывает фотографии с новоселья. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"A","name":"Anna","side":"right","en":"Kto to jest? Ten mężczyzna, który stoi przy oknie.","ru":"Кто это? Тот мужчина, который стоит у окна.",
      "words":[["który stoi","который стоит"]]},
     {"who":"M","name":"Marek","side":"left","en":"To kolega, z którym pracuję od dwóch lat.","ru":"Это коллега, с которым я работаю два года.",
      "words":[["z którym","с которым"]]},
     {"who":"A","name":"Anna","side":"right","en":"A kobieta, której pomagałeś w kuchni?","ru":"А женщина, которой ты помогал на кухне?",
      "words":[["której pomagałeś","которой помогал"]]},
     {"who":"M","name":"Marek","side":"left","en":"To pani Kowalska, ta z dwojgiem dzieci.","ru":"Это пани Ковальская, та, что с двумя детьми.",
      "words":[["z dwojgiem dzieci","с двумя детьми"]]},
     {"who":"A","name":"Anna","side":"right","en":"A ci ludzie, którzy siedzą na balkonie?","ru":"А те люди, которые сидят на балконе?",
      "words":[["którzy siedzą","которые сидят"]]},
     {"who":"M","name":"Marek","side":"left","en":"Przyjaciele, z którymi byliśmy we Włoszech.","ru":"Друзья, с которыми мы были в Италии.",
      "words":[["z którymi","с которыми"]]},
     {"who":"A","name":"Anna","side":"right","en":"To zdjęcie, które zrobiłeś wieczorem, jest najlepsze.","ru":"Та фотография, которую ты сделал вечером, — лучшая.",
      "words":[["które zrobiłeś","которую сделал"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — уточняем, о ком речь.",
   "lines":[
     {"who":"A","en":"Widziałeś sąsiada, który mieszka pod tobą?","ru":"Ты видел соседа, который живёт под тобой?"},
     {"who":"B","en":"Tego, o którym mówiłaś wczoraj?","ru":"Того, о котором ты вчера говорила?"},
     {"who":"A","en":"Tak. Tego, z którym rozmawiałeś na parapetówce.","ru":"Да. Того, с которым ты разговаривал на новоселье."},
     {"who":"B","en":"Widziałem. Idzie do sklepu, do którego my też chodzimy.","ru":"Видел. Идёт в магазин, в который мы тоже ходим."},
     {"who":"A","en":"To wszystko, co chciałam wiedzieć.","ru":"Это всё, что я хотела знать."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — готовые связки с «который».",
   "items":[
     {"en":"sąsiad, który…","ru":"сосед, который…","ex":"To sąsiad, który mieszka pod nami."},
     {"en":"kobieta, która…","ru":"женщина, которая…","ex":"To kobieta, która pracuje w szkole."},
     {"en":"ludzie, którzy…","ru":"люди, которые…","ex":"To ludzie, którzy nam pomogli."},
     {"en":"człowiek, którego znam","ru":"человек, которого я знаю","ex":"Człowiek, którego znasz, był u nas."},
     {"en":"sąsiad, któremu pomogliśmy","ru":"сосед, которому мы помогли","ex":"Sąsiad, któremu pomogliśmy, przyniósł wino."},
     {"en":"książka, którą czytam","ru":"книга, которую я читаю","ex":"Książka, którą czytam, jest o Włoszech."},
     {"en":"dom, w którym mieszkam","ru":"дом, в котором я живу","ex":"Dom, w którym mieszkamy, jest stary."},
     {"en":"z którym / z którą / z którymi","ru":"с которым / с которой / с которыми","ex":"Przyjaciele, z którymi byliśmy we Włoszech."},
     {"en":"o którym / o których","ru":"о котором / о которых","ex":"Sąsiedzi, o których mówiłem, mają psa."},
     {"en":"O której godzinie?","ru":"в котором часу?","ex":"O której godzinie przyjdziesz?"},
     {"en":"wszystko, co…","ru":"всё, что…","ex":"Wszystko, co mam, jest tutaj."},
     {"en":"Który z nich?","ru":"который из них?","ex":"Który z nich jest twoim bratem?"}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу.",
   "pairs":[["z którym","с которым"],["której","которой"],["o których","о которых"],["wszystko, co","всё, что"]]
 },
 "reading":{
   "intro":"Прочитай вслух — сегодня фразы длиннее, но каждая склеена одним словом.",
   "title":"Ludzie z parapetówki",
   "sentences":["To jest sąsiad, który mieszka pod Markiem.","Ma dwoje dzieci, które chodzą do przedszkola.","To kobieta, której Anna pomagała w kuchni.","A to kolega, z którym Marek pracuje od dwóch lat.","Ludzie, którzy siedzą na balkonie, to przyjaciele z Włoch.","Zdjęcie, które Marek zrobił wieczorem, jest najlepsze.","Dom, w którym teraz mieszka, jest stary, ale ciepły.","Sklep, do którego chodzą wszyscy sąsiedzi, jest za rogiem.","Film, który oglądaliśmy w nocy, był długi.","Wszystko, co mam, zmieściło się w jednym samochodzie.","O której godzinie przyszli ostatni goście?","O drugiej, i to był dobry wieczór."],
   "translation":"Это сосед, который живёт под Мареком. У него двое детей, которые ходят в садик. Это женщина, которой Анна помогала на кухне. А это коллега, с которым Марек работает два года. Люди, которые сидят на балконе, — друзья из Италии. Фотография, которую Марек сделал вечером, — лучшая. Дом, в котором он теперь живёт, старый, но тёплый. Магазин, в который ходят все соседи, за углом. Фильм, который мы смотрели ночью, был длинный. Всё, что у меня есть, поместилось в одну машину. В котором часу пришли последние гости? В два, и это был хороший вечер."
 },
 "quiz":{
   "intro":"Пять вопросов — и придаточные с «который» твои.",
   "items":[
     {"q":"1. To jest kobieta, ___ mieszka obok.","opts":["który","która","którzy"],"answer":1,
      "explain":"Kobieta — женский род: <b>która</b>."},
     {"q":"2. To są ludzie, ___ nam pomogli.","opts":["które","którzy","którymi"],"answer":1,
      "explain":"Мужско-личная форма: <b>którzy</b>."},
     {"q":"3. Sąsiad, ___ pomogliśmy, przyniósł wino.","opts":["któremu","którego","który"],"answer":0,
      "explain":"Pomagać — кому: <b>któremu</b>."},
     {"q":"4. Dom, ___ mieszkamy, jest stary.","opts":["który","w którym","z którym"],"answer":1,
      "explain":"Предлог идёт вместе с который: <b>w którym</b>."},
     {"q":"5. «Всё, что у меня есть» —","opts":["Wszystko, które mam","Wszystko, co mam","Wszystko, którego mam"],"answer":1,
      "explain":"К слову wszystko цепляется <b>co</b>."}
   ]
 },
 "essay":{
   "intro":"Опиши трёх людей вокруг себя — каждого одной длинной фразой.",
   "prompt":"Напиши 4–5 фраз о знакомых: используй «который» минимум трижды и хотя бы раз — с предлогом (z którym, o której, do którego).",
   "hint":"Опора: To jest… , który / która… · To ludzie, którzy… · …, z którym… Проверь: род слева, падеж внутри, запятая перед który. 💛",
   "example":"Mam sąsiadkę, która mieszka nade mną i ma dwoje dzieci. To kobieta, której czasem pomagam w zakupach. Mój kolega, z którym pracuję od trzech lat, mieszka w tym samym domu. Sklep, do którego chodzimy razem, jest tuż za rogiem. Wszystko, co jest mi potrzebne, mam blisko."
 }
},
"12": {
 "day":12,"week":"02",
 "themeRu":"Свой, тот же, другой",
 "themeEn":"Swój, ten sam, inny",
 "intro":"«Марек взял <b>свой</b> телефон» и «Марек взял <b>его</b> телефон» — по-русски это две разные истории, и ты слышишь разницу без всяких правил. Польский устроен так же: есть <b>swój</b>, и работает он ровно по родной логике. А заодно разберём «тот же» и «такой же» — вот там уже придётся быть внимательнее.",
 "introAudio":"Марек взял свой телефон и Марек взял его телефон — по-русски это две разные истории, и ты слышишь разницу без всяких правил. Польский устроен так же: есть слово swój, и работает оно ровно по родной логике. А заодно разберём «тот же» и «такой же» — вот там уже придётся быть внимательнее.",
 "goals":[
   "Различать <b>swój</b> и <b>jego / jej / ich</b>",
   "Склонять <b>swój</b>: swojego, swojemu, swoim, swoją, swoich",
   "Различать <b>ten sam</b> (тот же) и <b>taki sam</b> (такой же)",
   "Пользоваться <b>każdy, wszyscy, żaden, nikt</b> — с обязательным отрицанием"
 ],
 "learned":[
   "Различил(а) swój и jego / jej / ich",
   "Просклонял(а) swój: swojego, swojemu, swoim, swoją, swoich",
   "Различил(а) ten sam (тот же) и taki sam (такой же)",
   "Воспользовался(лась) словами każdy, wszyscy, żaden, nikt — с обязательным отрицанием"
 ],
 "review":{
   "intro":"Вчерашний «который» — первым делом, он теперь надолго с тобой. И приставка недели 1 на десерт.",
   "introAudio":"Вчерашний «который» — первым делом, он теперь надолго с тобой. И приставка недели 1 на десерт.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> смотри на слово слева.",
      "q":"To są ludzie, ___ nam pomogli.","opts":["które","którzy","którymi"],"answer":1,
      "explain":"О людях с мужчинами в группе — <b>którzy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> предлог идёт вместе с «который».",
      "q":"Dom, ___ mieszkamy, jest stary.","opts":["który","w którym","o którym"],"answer":1,
      "explain":"«В котором живём» — <b>w którym</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> приставка «вы-».",
      "q":"«Они выехали рано утром» —","opts":["Wyjechali wcześnie rano","Przyjechali wcześnie rano","Dojechali wcześnie rano"],"answer":0,
      "explain":"wy- = вы-: <b>wyjechali</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Книга, которую я читаю, об Италии»</b>","answer":"Książka, którą czytam, jest o Włoszech"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Свой",
    "title":"<em>swój telefon</em> или <em>jego telefon</em>",
    "paras":[
      "Правило одно и оно родное: <b>swój</b> берётся тогда, когда хозяин вещи — подлежащее того же предложения. Если хозяин кто-то другой, идут <b>jego, jej, ich</b>.",
      "<b>Marek zabrał swój telefon.</b> — Марек взял свой телефон. <b>Marek zabrał jego telefon.</b> — Марек взял его телефон, то есть чужой. Разница в польском ровно та же, что в русском, и путать её так же нельзя.",
      "Особенно ясно это в третьем лице: <b>Anna kocha swoją pracę</b> (свою) — <b>Anna zna jego pracę</b> (его, чужую). В первом и втором лице оба слова возможны: <b>Czytam swoją książkę</b> и <b>Czytam moją książkę</b> — обе фразы правильны, swój звучит чуть аккуратнее.",
      "И запомни направление проверки: смотри не на хозяина, а на подлежащее. Если они совпали — swój."
    ],
    "audio":"Правило одно и оно родное: swój берётся тогда, когда хозяин вещи — подлежащее того же предложения. Если хозяин кто-то другой, идут jego, jej, ich. Marek zabrał swój telefon — Марек взял свой телефон. Marek zabrał jego telefon — Марек взял его телефон, то есть чужой. Разница в польском ровно та же, что в русском, и путать её так же нельзя. Особенно ясно это в третьем лице: Anna kocha swoją pracę, свою, и Anna zna jego pracę, его, чужую. В первом и втором лице оба слова возможны: czytam swoją książkę и czytam moją książkę — обе фразы правильны, swój звучит чуть аккуратнее. И запомни направление проверки: смотри не на хозяина, а на подлежащее. Если они совпали — swój.",
    "table":{"rows":[
      ["Marek zabrał swój telefon. <button class=\"play\" data-say=\"Marek zabrał swój telefon.\">🔊</button>","свой — телефон Марека"],
      ["Marek zabrał jego telefon. <button class=\"play\" data-say=\"Marek zabrał jego telefon.\">🔊</button>","его — телефон другого"],
      ["Anna kocha swoją pracę.","свою работу"],
      ["Anna zna jego pracę.","его работу"],
      ["Czytam swoją / moją książkę.","в 1-м лице возможны обе"],
      ["Mają swoje mieszkanie.","у них своя квартира"]
    ],"star":1},
    "examples":[
      {"ru":"Марек наконец переехал в свою квартиру.","en":"Marek w końcu przeprowadził się do <b>swojego</b> mieszkania.","say":"Marek w końcu przeprowadził się do swojego mieszkania."},
      {"ru":"Сосед оставил свои ключи у нас.","en":"Sąsiad zostawił u nas <b>swoje</b> klucze.","say":"Sąsiad zostawił u nas swoje klucze."},
      {"ru":"Анна взяла его книгу — не свою.","en":"Anna wzięła <b>jego</b> książkę, nie <b>swoją</b>.","say":"Anna wzięła jego książkę, nie swoją."},
      {"ru":"Каждый рассказывал о своей работе.","en":"Każdy opowiadał o <b>swojej</b> pracy.","say":"Każdy opowiadał o swojej pracy."}
    ],
    "mistakes":[
      {"wrong":"Marek kocha jego pracę. (о собственной работе Марека)","right":"Marek kocha <b>swoją</b> pracę.","why":"Хозяин и подлежащее — один человек, значит swój."},
      {"wrong":"Anna zna swoją pracę. (о работе Марека)","right":"Anna zna <b>jego</b> pracę.","why":"Работа чужая, подлежащее — Анна: тут нужен jego."}
    ],
    "mnemonic":"🔑 Хозяин = подлежащее → swój. Хозяин кто-то другой → jego / jej / ich.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> чья работа?",
       "q":"«Марек любит свою работу» —","opts":["Marek kocha jego pracę","Marek kocha swoją pracę","Marek kocha ich pracę"],"answer":1,
       "explain":"Хозяин и подлежащее совпали: <b>swoją</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> телефон чужой.",
       "q":"«Анна взяла его телефон» (телефон Марека) —","opts":["Anna wzięła swój telefon","Anna wzięła jego telefon","Anna wzięła jej telefon"],"answer":1,
       "explain":"Хозяин — не подлежащее, значит <b>jego</b>."},
      {"type":"type","howto":"Напиши «Он взял свои ключи». Диакритику можно не ставить.",
       "q":"Он взял свои ключи.","accept":["wziął swoje klucze","wzial swoje klucze","on wziął swoje klucze","on wzial swoje klucze"],"placeholder":"Wziął…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Swój в падежах",
    "title":"<em>swojego, swojemu, swoim, swoją</em>",
    "paras":[
      "Склоняется swój точно как <b>mój</b> — образец ты знаешь с A1, менять ничего не надо. Мужской и средний род: <b>swojego, swojemu, swoim</b>. Женский: <b>swojej, swoją</b>. Множественное: <b>swoich, swoim, swoimi</b>, а о мужчинах в именительном — <b>swoi</b>.",
      "Собери с падежами этой недели: Pomagam <b>swoim</b> sąsiadom. Rozmawiam ze <b>swoimi</b> przyjaciółmi. Opowiadam o <b>swoich</b> dzieciach. Три вчерашних окончания — и swój идёт с ними в ногу.",
      "И три готовых оборота, которые стоит просто присвоить. <b>po swojemu</b> — по-своему: Robi wszystko po swojemu. <b>na swój sposób</b> — на свой лад. <b>u siebie</b> — у себя: Czuj się jak u siebie (это ты уже слышал(а) на новоселье).",
      "Есть даже поговорочное <b>Ja swoje wiem</b> — «я своё знаю», то есть «меня не переубедишь». Русское ухо понимает её без словаря."
    ],
    "audio":"Склоняется swój точно как mój — образец ты знаешь с A1, менять ничего не надо. Мужской и средний род: swojego, swojemu, swoim. Женский: swojej, swoją. Множественное: swoich, swoim, swoimi, а о мужчинах в именительном — swoi. Собери с падежами этой недели: pomagam swoim sąsiadom, rozmawiam ze swoimi przyjaciółmi, opowiadam o swoich dzieciach. Три вчерашних окончания — и swój идёт с ними в ногу. И три готовых оборота, которые стоит просто присвоить. Po swojemu — по-своему: robi wszystko po swojemu. Na swój sposób — на свой лад. U siebie — у себя: czuj się jak u siebie; это уже звучало на новоселье. Есть даже поговорочное ja swoje wiem — я своё знаю, то есть меня не переубедишь. Русское ухо понимает её без словаря.",
    "table":{"rows":[
      ["swój / swoja / swoje","он · она · оно"],
      ["swojego · swojemu · swoim","м. и ср. род в падежах"],
      ["swojej · swoją","женский род"],
      ["swoich · swoim · swoimi","множественное"],
      ["po swojemu <button class=\"play\" data-say=\"po swojemu\">🔊</button>","по-своему"],
      ["Ja swoje wiem. <button class=\"play\" data-say=\"Ja swoje wiem.\">🔊</button>","я своё знаю"]
    ],"star":3},
    "examples":[
      {"ru":"Я помогаю своим соседям.","en":"Pomagam <b>swoim</b> sąsiadom.","say":"Pomagam swoim sąsiadom."},
      {"ru":"Я разговариваю со своими друзьями.","en":"Rozmawiam ze <b>swoimi</b> przyjaciółmi.","say":"Rozmawiam ze swoimi przyjaciółmi."},
      {"ru":"Он рассказывает о своих детях.","en":"Opowiada o <b>swoich</b> dzieciach.","say":"Opowiada o swoich dzieciach."},
      {"ru":"Марек всё делает по-своему.","en":"Marek robi wszystko <b>po swojemu</b>.","say":"Marek robi wszystko po swojemu."}
    ],
    "mistakes":[
      {"wrong":"Pomagam swoich sąsiadom.","right":"Pomagam <b>swoim</b> sąsiadom.","why":"Дательный множественного — и у существительного, и у swój."},
      {"wrong":"Rozmawiam ze swoich przyjaciółmi.","right":"Rozmawiam ze <b>swoimi</b> przyjaciółmi.","why":"Творительный множественного — swoimi."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> кому помогаю?",
       "q":"«Я помогаю своим соседям» —","opts":["Pomagam swoim sąsiadom","Pomagam swoich sąsiadom","Pomagam swoimi sąsiadom"],"answer":0,
       "explain":"Дательный множественного: <b>swoim sąsiadom</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> о ком рассказываю?",
       "q":"«Он рассказывает о своих детях» —","opts":["Opowiada o swoim dzieciach","Opowiada o swoich dzieciach","Opowiada o swoimi dzieciach"],"answer":1,
       "explain":"Предложный множественного: <b>o swoich dzieciach</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Марек всё делает по-своему»</b>","answer":"Marek robi wszystko po swojemu"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Тот же и такой же",
    "title":"<em>ten sam</em> ≠ <em>taki sam</em>",
    "paras":[
      "Два похожих оборота, а смысл разный — и русский различает их так же точно. <b>ten sam</b> — «тот же самый», один и тот же предмет. <b>taki sam</b> — «такой же», другой предмет, но одинаковый.",
      "<b>Mieszkamy w tym samym domu.</b> — Мы живём в том же самом доме (дом один). <b>Mam taki sam stół.</b> — У меня такой же стол (стол другой, просто похожий).",
      "Склоняются оба слова целиком, обе части: ta sama, to samo, <b>tego samego</b>, <b>w tym samym</b>, <b>taką samą</b>. И часто рядом стоит <b>jak</b>: <b>Mam taką samą lampę jak ty.</b>",
      "Третье слово этой компании — <b>inny</b>, «другой»: <b>Wolę inny kolor. Chcę coś innego. Zapytaj kogoś innego.</b> Обрати внимание на пару: <b>coś innego</b> — «что-то другое», <b>ktoś inny</b> — «кто-то другой»."
    ],
    "audio":"Два похожих оборота, а смысл разный — и русский различает их так же точно. Ten sam — тот же самый, один и тот же предмет. Taki sam — такой же, другой предмет, но одинаковый. Mieszkamy w tym samym domu — мы живём в том же самом доме, дом один. Mam taki sam stół — у меня такой же стол, стол другой, просто похожий. Склоняются оба слова целиком, обе части: ta sama, to samo, tego samego, w tym samym, taką samą. И часто рядом стоит jak: mam taką samą lampę jak ty. Третье слово этой компании — inny, другой: wolę inny kolor, chcę coś innego, zapytaj kogoś innego. Обрати внимание на пару: coś innego — что-то другое, ktoś inny — кто-то другой.",
    "table":{"rows":[
      ["Mieszkamy w tym samym domu. <button class=\"play\" data-say=\"Mieszkamy w tym samym domu.\">🔊</button>","в том же самом доме"],
      ["Mam taki sam stół. <button class=\"play\" data-say=\"Mam taki sam stół.\">🔊</button>","такой же стол"],
      ["taka sama lampa jak ta","такая же лампа, как эта"],
      ["To ten sam człowiek.","это тот же человек"],
      ["Wolę inny kolor.","предпочитаю другой цвет"],
      ["coś innego · ktoś inny","что-то другое · кто-то другой"]
    ],"star":1},
    "examples":[
      {"ru":"Мы живём в том же доме, что и раньше.","en":"Mieszkamy w <b>tym samym</b> domu co wcześniej.","say":"Mieszkamy w tym samym domu co wcześniej."},
      {"ru":"У меня такая же лампа, как у тебя.","en":"Mam <b>taką samą</b> lampę jak ty.","say":"Mam taką samą lampę jak ty."},
      {"ru":"Это тот же самый сосед, о котором я говорил.","en":"To <b>ten sam</b> sąsiad, o którym mówiłem.","say":"To ten sam sąsiad, o którym mówiłem."},
      {"ru":"Хочу что-то другое.","en":"Chcę <b>czegoś innego</b>.","gloss":"chcieć + родительный","say":"Chcę czegoś innego."}
    ],
    "mistakes":[
      {"wrong":"Mam ten sam stół jak ty.","right":"Mam <b>taki sam</b> stół jak ty.","why":"Столы разные, просто одинаковые — значит taki sam."},
      {"wrong":"Mieszkamy w takim samym domu. (о том же доме)","right":"Mieszkamy w <b>tym samym</b> domu.","why":"Дом один и тот же — ten sam."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> дом один на двоих.",
       "q":"«Мы живём в том же доме» —","opts":["Mieszkamy w takim samym domu","Mieszkamy w tym samym domu","Mieszkamy w innym domu"],"answer":1,
       "explain":"Один и тот же дом — <b>w tym samym domu</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> лампы две, но одинаковые.",
       "q":"«У меня такая же лампа» —","opts":["Mam tę samą lampę","Mam taką samą lampę","Mam inną lampę"],"answer":1,
       "explain":"Разные предметы, одинаковые на вид: <b>taką samą</b>."},
      {"type":"type","howto":"Напиши «что-то другое». Диакритику можно не ставить.",
       "q":"что-то другое","accept":["coś innego","cos innego"],"placeholder":"coś…"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Каждый, все, ни один",
    "title":"<em>każdy, wszyscy, żaden</em> — и двойное отрицание",
    "paras":[
      "<b>każdy</b> — «каждый», всегда с единственным числом: <b>każdy dzień, każda książka, każdy z nas</b>. Ходовой оборот времени: <b>każdego dnia</b> — каждый день.",
      "<b>wszyscy</b> — «все» о людях (мужско-личная форма!), <b>wszystkie</b> — все остальные, <b>wszystko</b> — всё: <b>Wszyscy przyszli. Wszystkie lampy działają. Wszystko jest gotowe.</b>",
      "<b>żaden</b> — «ни один», и вот тут железное правило: рядом обязательно стоит <b>nie</b>. <b>Żaden z sąsiadów nie przyszedł. Nie mam żadnych pieniędzy. Żadna z nich nie wie.</b>",
      "То же с <b>nikt</b> (никто), <b>nic</b> (ничего), <b>nigdy</b> (никогда), <b>nigdzie</b> (нигде): <b>Nikt nie wie. Nic nie kupiłem. Nigdy tam nie byłem.</b> Двойное отрицание — родная механика, английский на этом месте ломается, а ты просто говоришь как дома."
    ],
    "audio":"Każdy — каждый, всегда с единственным числом: każdy dzień, każda książka, każdy z nas. Ходовой оборот времени: każdego dnia, каждый день. Wszyscy — все о людях, мужско-личная форма; wszystkie — все остальные; wszystko — всё. Wszyscy przyszli. Wszystkie lampy działają. Wszystko jest gotowe. Żaden — ни один, и вот тут железное правило: рядом обязательно стоит nie. Żaden z sąsiadów nie przyszedł. Nie mam żadnych pieniędzy. Żadna z nich nie wie. То же с nikt, никто; nic, ничего; nigdy, никогда; nigdzie, нигде. Nikt nie wie. Nic nie kupiłem. Nigdy tam nie byłem. Двойное отрицание — родная механика, английский на этом месте ломается, а ты просто говоришь как дома.",
    "table":{"rows":[
      ["każdy dzień · każdego dnia <button class=\"play\" data-say=\"każdego dnia\">🔊</button>","каждый день"],
      ["Wszyscy przyszli.","все пришли (о людях)"],
      ["Wszystkie lampy działają.","все лампы работают"],
      ["Żaden z sąsiadów nie przyszedł. <button class=\"play\" data-say=\"Żaden z sąsiadów nie przyszedł.\">🔊</button>","ни один сосед не пришёл"],
      ["Nikt nie wie. · Nic nie kupiłem.","никто не знает · ничего не купил"],
      ["Nigdy tam nie byłem.","я никогда там не был"]
    ],"star":3},
    "examples":[
      {"ru":"Каждый день он ходит в тот же магазин.","en":"<b>Każdego dnia</b> chodzi do tego samego sklepu.","say":"Każdego dnia chodzi do tego samego sklepu."},
      {"ru":"Все соседи уже знают Марека.","en":"<b>Wszyscy</b> sąsiedzi już znają Marka.","say":"Wszyscy sąsiedzi już znają Marka."},
      {"ru":"Ни один из них не пришёл.","en":"<b>Żaden</b> z nich <b>nie</b> przyszedł.","gloss":"żaden всегда с nie","say":"Żaden z nich nie przyszedł."},
      {"ru":"Никто ничего не сказал.","en":"<b>Nikt nic nie</b> powiedział.","say":"Nikt nic nie powiedział."}
    ],
    "mistakes":[
      {"wrong":"Żaden z nich przyszedł.","right":"Żaden z nich <b>nie</b> przyszedł.","why":"Żaden требует отрицания при глаголе — как русское «ни один не пришёл»."},
      {"wrong":"Wszystkie sąsiedzi","right":"<b>Wszyscy</b> sąsiedzi","why":"О людях с мужчинами в группе — мужско-личная форма wszyscy."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> смотри, есть ли nie.",
       "q":"«Ни один сосед не пришёл» —","opts":["Żaden sąsiad przyszedł","Żaden sąsiad nie przyszedł","Nie żaden sąsiad przyszedł"],"answer":1,
       "explain":"Żaden всегда работает вместе с <b>nie</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> речь о людях.",
       "q":"«Все соседи уже знают Марека» —","opts":["Wszystkie sąsiedzi już znają Marka","Wszyscy sąsiedzi już znają Marka","Wszystko sąsiedzi już znają Marka"],"answer":1,
       "explain":"Мужско-личная форма: <b>wszyscy</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Marek kocha swoje nowe mieszkanie.","sub":"Марек любит свою новую квартиру","want":"Marek kocha swoje nowe mieszkanie."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек разбирают коробки. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"A","name":"Anna","side":"right","en":"Czyj to telefon? Twój?","ru":"Чей это телефон? Твой?",
      "words":[["Czyj","чей"]]},
     {"who":"M","name":"Marek","side":"left","en":"Nie mój. To chyba jego — sąsiada z dołu.","ru":"Не мой. Это, кажется, его — соседа снизу.",
      "words":[["chyba","кажется, наверное"],["jego","его"]]},
     {"who":"A","name":"Anna","side":"right","en":"To zanieś mu go. On zawsze zostawia u nas swoje rzeczy.","ru":"Тогда отнеси ему. Он всегда оставляет у нас свои вещи.",
      "words":[["zanieś","отнеси"],["swoje rzeczy","свои вещи"]]},
     {"who":"M","name":"Marek","side":"left","en":"A ta lampa? Mamy taką samą w kuchni.","ru":"А эта лампа? У нас такая же на кухне.",
      "words":[["taką samą","такую же"]]},
     {"who":"A","name":"Anna","side":"right","en":"To nie taka sama, to ta sama. Przyniosłam ją wczoraj z kuchni.","ru":"Это не такая же, это та же самая. Я вчера принесла её с кухни.",
      "words":[["ta sama","та же самая"]]},
     {"who":"M","name":"Marek","side":"left","en":"Robisz wszystko po swojemu.","ru":"Ты всё делаешь по-своему.",
      "words":[["po swojemu","по-своему"]]},
     {"who":"A","name":"Anna","side":"right","en":"Żaden pokój nie wygląda jeszcze dobrze, więc pomagam jak umiem.","ru":"Ни одна комната пока не выглядит хорошо, так что помогаю как умею.",
      "words":[["Żaden… nie","ни один… не"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — чьё это и какое.",
   "lines":[
     {"who":"A","en":"Czy to twoja książka?","ru":"Это твоя книга?"},
     {"who":"B","en":"Nie, to jej. Ja swoją już oddałem.","ru":"Нет, это её. Свою я уже отдал."},
     {"who":"A","en":"Mam taką samą w domu.","ru":"У меня дома такая же."},
     {"who":"B","en":"Czytamy te same rzeczy.","ru":"Мы читаем одно и то же."},
     {"who":"A","en":"Nikt inny w tym domu tego nie czyta.","ru":"Никто другой в этом доме такое не читает."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — своё, чужое, то же и другое.",
   "items":[
     {"en":"swój / swoja / swoje","ru":"свой / своя / своё","ex":"Marek zabrał swój telefon."},
     {"en":"jego / jej / ich","ru":"его / её / их (чужое)","ex":"Anna wzięła jego książkę."},
     {"en":"swojego / swojemu / swoim","ru":"своего / своему / своим","ex":"Pomagam swoim sąsiadom."},
     {"en":"po swojemu","ru":"по-своему","ex":"Robi wszystko po swojemu."},
     {"en":"ten sam / ta sama","ru":"тот же самый / та же самая","ex":"Mieszkamy w tym samym domu."},
     {"en":"taki sam / taka sama","ru":"такой же / такая же","ex":"Mam taką samą lampę jak ty."},
     {"en":"inny · coś innego · ktoś inny","ru":"другой · что-то другое · кто-то другой","ex":"Wolę inny kolor."},
     {"en":"każdy · każdego dnia","ru":"каждый · каждый день","ex":"Każdego dnia chodzi do tego samego sklepu."},
     {"en":"wszyscy / wszystkie / wszystko","ru":"все (о людях) / все / всё","ex":"Wszyscy sąsiedzi już znają Marka."},
     {"en":"żaden… nie","ru":"ни один… не","ex":"Żaden z nich nie przyszedł."},
     {"en":"nikt · nic · nigdy","ru":"никто · ничего · никогда","ex":"Nikt nic nie powiedział."},
     {"en":"zostawić rzeczy","ru":"оставить вещи","ex":"Zostawił u nas swoje rzeczy."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу.",
   "pairs":[["swoją pracę","свою работу"],["jego pracę","его работу"],["ten sam dom","тот же дом"],["taki sam stół","такой же стол"]]
 },
 "reading":{
   "intro":"Прочитай вслух — сегодня всё про своё и чужое.",
   "title":"Czyje to jest?",
   "sentences":["Marek w końcu mieszka w swoim mieszkaniu.","Kocha swoją nową kuchnię.","Anna pomaga mu każdego dnia.","Wczoraj wzięła jego klucze i zgubiła swoje.","W kartonach są rzeczy, które nie są niczyje.","Jedna lampa jest ta sama co w kuchni.","Druga jest tylko taka sama.","Sąsiad zostawił u nich swoje narzędzia.","Żaden pokój nie jest jeszcze gotowy.","Ale wszyscy mówią, że mieszkanie jest ładne.","Marek robi wszystko po swojemu.","I nikt mu tego nie zabroni."],
   "translation":"Марек наконец живёт в своей квартире. Он любит свою новую кухню. Анна помогает ему каждый день. Вчера она взяла его ключи и потеряла свои. В коробках лежат вещи, которые ничьи. Одна лампа — та же самая, что на кухне. Вторая просто такая же. Сосед оставил у них свои инструменты. Ни одна комната ещё не готова. Но все говорят, что квартира красивая. Марек всё делает по-своему. И никто ему этого не запретит."
 },
 "quiz":{
   "intro":"Пять вопросов — своё, чужое и одинаковое.",
   "items":[
     {"q":"1. «Марек любит свою работу» —","opts":["Marek kocha jego pracę","Marek kocha swoją pracę","Marek kocha ich pracę"],"answer":1,
      "explain":"Хозяин и подлежащее совпали: <b>swoją</b>."},
     {"q":"2. «Анна взяла его телефон» (телефон Марека) —","opts":["Anna wzięła swój telefon","Anna wzięła jego telefon","Anna wzięła jej telefon"],"answer":1,
      "explain":"Телефон чужой — <b>jego</b>."},
     {"q":"3. «Я помогаю своим соседям» —","opts":["Pomagam swoim sąsiadom","Pomagam swoich sąsiadom","Pomagam swoimi sąsiadom"],"answer":0,
      "explain":"Дательный множественного: <b>swoim sąsiadom</b>."},
     {"q":"4. «У меня такая же лампа, как у тебя» —","opts":["Mam tę samą lampę jak ty","Mam taką samą lampę jak ty","Mam inną lampę jak ty"],"answer":1,
      "explain":"Лампы разные, но одинаковые: <b>taką samą</b>."},
     {"q":"5. «Ни один сосед не пришёл» —","opts":["Żaden sąsiad przyszedł","Żaden sąsiad nie przyszedł","Nie żaden sąsiad przyszedł"],"answer":1,
      "explain":"Żaden всегда с <b>nie</b>."}
   ]
 },
 "essay":{
   "intro":"Немного о своём — и о том, что у тебя такое же, как у других.",
   "prompt":"Напиши 4–5 фраз: что у тебя своё, что чужое, что такое же, как у знакомых, и чего у тебя нет вовсе.",
   "hint":"Опора: Mam swój / swoją… · To jest jego / jej… · Mam taki sam… jak… · Żaden… nie… Проверь: хозяин = подлежащее → swój. 💛",
   "example":"Mam swój mały pokój i swoje książki. Komputer nie jest mój — to jego, brata. Mam taką samą lampę jak moja siostra, ale w innym kolorze. Każdego dnia siedzę przy tym samym stole. Żaden mebel nie jest nowy, a mimo to lubię ten pokój."
 }
},

"13": {
 "day":13,"week":"02",
 "themeRu":"Чем дальше, тем лучше",
 "themeEn":"Im… tym…",
 "intro":"Чем дольше Марек живёт в новой квартире, тем меньше в ней коробок. Эту фразу польский строит теми же двумя опорами, что и русский: <b>im</b> — «чем», <b>tym</b> — «тем». Сегодня к ней добавим знакомое <b>coraz lepiej</b> и сравнения с <b>jak</b> — и неделя закончится на подъёме.",
 "introAudio":"Чем дольше Марек живёт в новой квартире, тем меньше в ней коробок. Эту фразу польский строит теми же двумя опорами, что и русский: im — чем, tym — тем. Сегодня к ней добавим знакомое coraz lepiej и сравнения с jak — и неделя закончится на подъёме.",
 "goals":[
   "Строить связку <b>im + сравнительная, tym + сравнительная</b>",
   "Пользоваться <b>coraz lepiej, coraz więcej, coraz trudniej</b>",
   "Сравнивать через <b>jak</b>: <b>zdrowy jak ryba, tak dobrze jak…</b>",
   "Не путать <b>im</b> («чем» в связке) и <b>niż</b> («чем» в сравнении)"
 ],
 "learned":[
   "Построил(а) связку im + сравнительная, tym + сравнительная",
   "Воспользовался(лась) оборотами coraz lepiej, coraz więcej, coraz trudniej",
   "Сравнил(а) через jak: zdrowy jak ryba, tak dobrze jak…",
   "Различил(а) im («чем» в связке) и niż («чем» в сравнении)"
 ],
 "review":{
   "intro":"Вчерашнее «своё и чужое» — и вид глагола, куда же без него.",
   "introAudio":"Вчерашнее «своё и чужое» — и вид глагола, куда же без него.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> чья квартира?",
      "q":"«Марек любит свою квартиру» —","opts":["Marek kocha jego mieszkanie","Marek kocha swoje mieszkanie","Marek kocha ich mieszkanie"],"answer":1,
      "explain":"Хозяин и подлежащее совпали: <b>swoje</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> предметы разные, но похожие.",
      "q":"«У меня такой же стол» —","opts":["Mam ten sam stół","Mam taki sam stół","Mam inny stół"],"answer":1,
      "explain":"Одинаковые, но разные предметы — <b>taki sam</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> смотри на маркер «весь вечер».",
      "q":"«Весь вечер мы разбирали коробки» —","opts":["Cały wieczór rozpakowywaliśmy kartony","Cały wieczór rozpakowaliśmy kartony","Cały wieczór rozpakujemy kartony"],"answer":0,
      "explain":"Длительность — несовершенный вид: <b>rozpakowywaliśmy</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Ни один сосед не пришёл»</b>","answer":"Żaden sąsiad nie przyszedł"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Чем… тем…",
    "title":"<em>Im więcej, tym lepiej</em>",
    "paras":[
      "Конструкция собирается из двух половин, и в каждой стоит сравнительная степень: <b>im</b> + сравнительная, запятая, <b>tym</b> + сравнительная.",
      "<b>Im więcej, tym lepiej.</b> — Чем больше, тем лучше. <b>Im dalej, tym lepiej.</b> — Чем дальше, тем лучше. <b>Im szybciej to zrobisz, tym lepiej.</b> — Чем быстрее ты это сделаешь, тем лучше.",
      "Порядок слов и запятая — как в русском. Обе половины могут быть длинными: <b>Im dłużej tu mieszkam, tym bardziej mi się podoba.</b> — Чем дольше я тут живу, тем больше мне нравится.",
      "Сравнительные наречия, которые тебе понадобятся, ты знаешь с A2: <b>lepiej</b> (лучше), <b>gorzej</b> (хуже), <b>więcej</b> (больше), <b>mniej</b> (меньше), <b>dłużej</b> (дольше), <b>szybciej</b> (быстрее), <b>dalej</b> (дальше), <b>trudniej</b> (труднее), <b>bardziej</b> (более).",
      "Прилагательные тоже годятся: <b>Im starszy dom, tym większe koszty.</b> — Чем старше дом, тем больше расходы."
    ],
    "audio":"Конструкция собирается из двух половин, и в каждой стоит сравнительная степень: im плюс сравнительная, запятая, tym плюс сравнительная. Im więcej, tym lepiej — чем больше, тем лучше. Im dalej, tym lepiej — чем дальше, тем лучше. Im szybciej to zrobisz, tym lepiej — чем быстрее ты это сделаешь, тем лучше. Порядок слов и запятая — как в русском. Обе половины могут быть длинными: im dłużej tu mieszkam, tym bardziej mi się podoba — чем дольше я тут живу, тем больше мне нравится. Сравнительные наречия, которые тебе понадобятся, знакомы с A2: lepiej — лучше, gorzej — хуже, więcej — больше, mniej — меньше, dłużej — дольше, szybciej — быстрее, dalej — дальше, trudniej — труднее, bardziej — более. Прилагательные тоже годятся: im starszy dom, tym większe koszty — чем старше дом, тем больше расходы.",
    "table":{"rows":[
      ["Im więcej, tym lepiej. <button class=\"play\" data-say=\"Im więcej, tym lepiej.\">🔊</button>","чем больше, тем лучше"],
      ["Im dalej, tym lepiej.","чем дальше, тем лучше"],
      ["Im szybciej, tym lepiej. <button class=\"play\" data-say=\"Im szybciej, tym lepiej.\">🔊</button>","чем быстрее, тем лучше"],
      ["Im dłużej tu mieszkam, tym bardziej mi się podoba.","чем дольше живу, тем больше нравится"],
      ["Im starszy dom, tym większe koszty.","чем старше дом, тем больше расходы"],
      ["lepiej · gorzej · więcej · mniej · dłużej","сравнительные наречия из A2"]
    ],"star":0},
    "examples":[
      {"ru":"Чем больше, тем лучше.","en":"<b>Im więcej, tym lepiej.</b>","say":"Im więcej, tym lepiej."},
      {"ru":"Чем дольше я тут живу, тем больше мне нравится.","en":"<b>Im dłużej</b> tu mieszkam, <b>tym bardziej</b> mi się podoba.","say":"Im dłużej tu mieszkam, tym bardziej mi się podoba."},
      {"ru":"Чем быстрее ты это сделаешь, тем лучше.","en":"<b>Im szybciej</b> to zrobisz, <b>tym lepiej</b>.","say":"Im szybciej to zrobisz, tym lepiej."},
      {"ru":"Чем меньше коробок, тем больше места.","en":"<b>Im mniej</b> kartonów, <b>tym więcej</b> miejsca.","gloss":"karton → kartonów — родительный этой недели","say":"Im mniej kartonów, tym więcej miejsca."}
    ],
    "mistakes":[
      {"wrong":"Im dużo, tym dobrze.","right":"<b>Im więcej, tym lepiej.</b>","why":"В обеих половинах нужна сравнительная степень, а не обычная форма."},
      {"wrong":"Niż więcej, tym lepiej.","right":"<b>Im</b> więcej, tym lepiej.","why":"Niż — это «чем» при сравнении двух вещей; в связке работает im."}
    ],
    "mnemonic":"📈 im = чем, tym = тем. По сравнительной в каждой половине — и запятая посередине.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> обе половины в сравнительной.",
       "q":"«Чем больше, тем лучше» —","opts":["Im dużo, tym dobrze","Im więcej, tym lepiej","Niż więcej, tym lepiej"],"answer":1,
       "explain":"Сравнительные в обеих половинах: <b>im więcej, tym lepiej</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> «чем быстрее».",
       "q":"«Чем быстрее, тем лучше» —","opts":["Im szybko, tym dobrze","Im szybciej, tym lepiej","Im szybciej, tym dobrze"],"answer":1,
       "explain":"Обе половины сравнительные: <b>szybciej … lepiej</b>."},
      {"type":"type","howto":"Напиши «Чем больше, тем лучше». Диакритику можно не ставить.",
       "q":"Чем больше, тем лучше.","accept":["im więcej tym lepiej","im wiecej tym lepiej","im więcej, tym lepiej","im wiecej, tym lepiej"],"placeholder":"Im więcej…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Всё лучше и лучше",
    "title":"<em>coraz lepiej</em>",
    "paras":[
      "Слово <b>coraz</b> ты встречал(а) ещё в A2 — оно значит «всё» в смысле нарастания: <b>coraz lepiej</b> (всё лучше), <b>coraz więcej</b> (всё больше), <b>coraz trudniej</b> (всё труднее), <b>coraz mniej</b> (всё меньше).",
      "Работает оно только со сравнительной степенью — сравни с русским: мы тоже говорим «всё лучше», а не «всё хорошо». <b>Mówię po polsku coraz lepiej.</b>",
      "С прилагательными — то же самое: <b>coraz lepszy</b> (всё лучше), <b>coraz większy</b> (всё больше), <b>coraz starszy</b>. <b>Dni są coraz krótsze.</b> — Дни всё короче.",
      "А если сравнительной степени у слова нет, помогает <b>coraz bardziej</b>: <b>coraz bardziej zmęczony</b> (всё более уставший), <b>coraz bardziej mi się podoba</b>."
    ],
    "audio":"Слово coraz встречалось ещё в A2 — оно значит «всё» в смысле нарастания: coraz lepiej — всё лучше, coraz więcej — всё больше, coraz trudniej — всё труднее, coraz mniej — всё меньше. Работает оно только со сравнительной степенью; сравни с русским: мы тоже говорим «всё лучше», а не «всё хорошо». Mówię po polsku coraz lepiej. С прилагательными то же самое: coraz lepszy — всё лучше, coraz większy — всё больше, coraz starszy. Dni są coraz krótsze — дни всё короче. А если сравнительной степени у слова нет, помогает coraz bardziej: coraz bardziej zmęczony — всё более уставший, coraz bardziej mi się podoba.",
    "table":{"rows":[
      ["coraz lepiej <button class=\"play\" data-say=\"coraz lepiej\">🔊</button>","всё лучше"],
      ["coraz więcej · coraz mniej","всё больше · всё меньше"],
      ["coraz trudniej · coraz łatwiej","всё труднее · всё легче"],
      ["coraz lepszy · coraz większy","всё лучший · всё больший"],
      ["Dni są coraz krótsze.","дни всё короче"],
      ["coraz bardziej <button class=\"play\" data-say=\"coraz bardziej\">🔊</button>","всё более"]
    ],"star":0},
    "examples":[
      {"ru":"Я говорю по-польски всё лучше.","en":"Mówię po polsku <b>coraz lepiej</b>.","say":"Mówię po polsku coraz lepiej."},
      {"ru":"В квартире всё меньше коробок.","en":"W mieszkaniu jest <b>coraz mniej</b> kartonów.","say":"W mieszkaniu jest coraz mniej kartonów."},
      {"ru":"Дни всё короче.","en":"Dni są <b>coraz krótsze</b>.","say":"Dni są coraz krótsze."},
      {"ru":"Мне тут всё больше нравится.","en":"<b>Coraz bardziej</b> mi się tu podoba.","say":"Coraz bardziej mi się tu podoba."}
    ],
    "mistakes":[
      {"wrong":"coraz dobrze","right":"<b>coraz lepiej</b>","why":"После coraz идёт только сравнительная степень — как русское «всё лучше»."},
      {"wrong":"coraz dużo kartonów","right":"<b>coraz mniej</b> kartonów","why":"Coraz нуждается в сравнительной форме: więcej, mniej, lepiej."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> после coraz — сравнительная.",
       "q":"«Я говорю всё лучше» —","opts":["Mówię coraz dobrze","Mówię coraz lepiej","Mówię coraz dobry"],"answer":1,
       "explain":"Coraz + сравнительная: <b>coraz lepiej</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> коробок становится меньше.",
       "q":"«всё меньше коробок» —","opts":["coraz mało kartonów","coraz mniej kartonów","coraz mniej kartony"],"answer":1,
       "explain":"Сравнительная плюс родительный множественного: <b>coraz mniej kartonów</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Дни всё короче»</b>","answer":"Dni są coraz krótsze"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Сравнение с jak",
    "title":"<em>zdrowy jak ryba</em>",
    "paras":[
      "Когда сравниваешь «как», в польском стоит <b>jak</b>: <b>biały jak śnieg</b> (белый как снег), <b>zdrowy jak ryba</b> (здоров как рыба — по-русски «как бык», набор образов свой), <b>głodny jak wilk</b> (голодный как волк), <b>zimny jak lód</b>.",
      "Для равенства служит пара <b>tak… jak</b>: <b>Jest tak wysoki jak Marek.</b> — Он такой же высокий, как Марек. И <b>taki… jak</b> с существительным: <b>Mam taką samą lampę jak ty</b> — вчерашняя связка.",
      "Отрицание работает буквально: <b>nie tak… jak</b> — <b>To nie jest tak trudne jak myślisz.</b> (Это не так трудно, как ты думаешь.)",
      "И очень польский оборот, который стоит забрать себе: <b>jak najszybciej</b> — «как можно быстрее», <b>jak najlepiej</b> — «как можно лучше», <b>jak najwięcej</b> — «как можно больше». Формула простая: jak + превосходная степень."
    ],
    "audio":"Когда сравниваешь «как», в польском стоит jak: biały jak śnieg — белый как снег, zdrowy jak ryba — здоров как рыба, по-русски мы говорим «как бык», набор образов свой; głodny jak wilk — голодный как волк; zimny jak lód. Для равенства служит пара tak и jak: jest tak wysoki jak Marek — он такой же высокий, как Марек. И taki и jak с существительным: mam taką samą lampę jak ty — вчерашняя связка. Отрицание работает буквально: nie tak, jak. To nie jest tak trudne jak myślisz — это не так трудно, как ты думаешь. И очень польский оборот, который стоит забрать себе: jak najszybciej — как можно быстрее, jak najlepiej — как можно лучше, jak najwięcej — как можно больше. Формула простая: jak плюс превосходная степень.",
    "table":{"rows":[
      ["biały jak śnieg <button class=\"play\" data-say=\"biały jak śnieg\">🔊</button>","белый как снег"],
      ["zdrowy jak ryba","здоров как рыба"],
      ["głodny jak wilk","голодный как волк"],
      ["tak wysoki jak Marek","такой же высокий, как Марек"],
      ["To nie jest tak trudne jak myślisz.","не так трудно, как ты думаешь"],
      ["jak najszybciej <button class=\"play\" data-say=\"jak najszybciej\">🔊</button>","как можно быстрее"]
    ],"star":5},
    "examples":[
      {"ru":"Стены белые как снег.","en":"Ściany są <b>białe jak śnieg</b>.","say":"Ściany są białe jak śnieg."},
      {"ru":"После переезда я был голодный как волк.","en":"Po przeprowadzce byłem <b>głodny jak wilk</b>.","say":"Po przeprowadzce byłem głodny jak wilk."},
      {"ru":"Эта комната такая же большая, как кухня.","en":"Ten pokój jest <b>tak duży jak</b> kuchnia.","say":"Ten pokój jest tak duży jak kuchnia."},
      {"ru":"Приходи как можно быстрее.","en":"Przyjdź <b>jak najszybciej</b>.","say":"Przyjdź jak najszybciej."}
    ],
    "mistakes":[
      {"wrong":"biały niż śnieg","right":"biały <b>jak</b> śnieg","why":"Niż сравнивает разное («белее, чем снег»), jak приравнивает («белый как снег»)."},
      {"wrong":"tak wysoki niż Marek","right":"<b>tak</b> wysoki <b>jak</b> Marek","why":"Пара для равенства — tak… jak."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> тут приравнивание, а не сравнение.",
       "q":"«белый как снег» —","opts":["biały niż śnieg","biały jak śnieg","biały jako śnieg"],"answer":1,
       "explain":"Равенство — через <b>jak</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> jak + превосходная.",
       "q":"«как можно быстрее» —","opts":["jak szybciej","jak najszybciej","im szybciej"],"answer":1,
       "explain":"Формула jak + превосходная: <b>jak najszybciej</b>."},
      {"type":"type","howto":"Напиши «голодный как волк». Диакритику можно не ставить.",
       "q":"голодный как волк","accept":["głodny jak wilk","glodny jak wilk"],"placeholder":"głodny…"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Три «чем» рядом",
    "title":"<em>niż</em>, <em>im</em>, <em>jak</em> — не перепутай",
    "paras":[
      "Русское «чем» умеет три работы, и польский раздаёт их трём разным словам. Разложим их в ряд, чтобы больше не путать.",
      "<b>niż</b> — сравнение двух вещей: <b>Dziś jest lepiej niż wczoraj.</b> (Сегодня лучше, чем вчера.) Рядом живёт знакомая из A2 замена: <b>od</b> + родительный — <b>Marek jest starszy od brata.</b>",
      "<b>im… tym…</b> — связка нарастания: <b>Im więcej pracuję, tym mniej mam czasu.</b>",
      "<b>jak</b> — приравнивание: <b>Jest tak zmęczony jak ja.</b>",
      "Проверка простая: если во второй половине стоит «тем» — бери im. Если сравниваешь две вещи и есть «более/лучше» — niż или od. Если приравниваешь — jak."
    ],
    "audio":"Русское «чем» умеет три работы, и польский раздаёт их трём разным словам. Разложим их в ряд, чтобы больше не путать. Niż — сравнение двух вещей: dziś jest lepiej niż wczoraj, сегодня лучше, чем вчера. Рядом живёт знакомая из A2 замена: od плюс родительный — Marek jest starszy od brata. Im и tym — связка нарастания: im więcej pracuję, tym mniej mam czasu. Jak — приравнивание: jest tak zmęczony jak ja. Проверка простая: если во второй половине стоит «тем» — бери im. Если сравниваешь две вещи и есть «лучше, больше» — niż или od. Если приравниваешь — jak.",
    "table":{"rows":[
      ["lepiej niż wczoraj <button class=\"play\" data-say=\"lepiej niż wczoraj\">🔊</button>","лучше, чем вчера"],
      ["starszy od brata","старше брата — A2"],
      ["Im więcej pracuję, tym mniej mam czasu.","чем больше… тем меньше…"],
      ["tak zmęczony jak ja","такой же уставший, как я"],
      ["«тем» во второй половине → im","подсказка"],
      ["сравнение двух вещей → niż / od","подсказка"]
    ],"star":-1},
    "examples":[
      {"ru":"Сегодня лучше, чем вчера.","en":"Dziś jest <b>lepiej niż</b> wczoraj.","say":"Dziś jest lepiej niż wczoraj."},
      {"ru":"Чем больше я работаю, тем меньше у меня времени.","en":"<b>Im więcej</b> pracuję, <b>tym mniej</b> mam czasu.","say":"Im więcej pracuję, tym mniej mam czasu."},
      {"ru":"Марек старше брата.","en":"Marek jest <b>starszy od brata</b>.","say":"Marek jest starszy od brata."},
      {"ru":"Он такой же уставший, как я.","en":"Jest <b>tak zmęczony jak</b> ja.","say":"Jest tak zmęczony jak ja."},
      {"ru":"С каждым днём становится всё лучше.","en":"Z każdym dniem jest <b>coraz lepiej</b>.","say":"Z każdym dniem jest coraz lepiej."}
    ],
    "mistakes":[
      {"wrong":"Dziś jest lepiej jak wczoraj.","right":"Dziś jest lepiej <b>niż</b> wczoraj.","why":"Тут сравниваются два дня — значит niż. В разговорной речи «jak» на этом месте слышно, но нормой считается niż."},
      {"wrong":"Im więcej pracuję, niż mniej mam czasu.","right":"Im więcej pracuję, <b>tym</b> mniej mam czasu.","why":"Вторая половина связки — только tym."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> сравниваем два дня.",
       "q":"«Сегодня лучше, чем вчера» —","opts":["Dziś jest lepiej im wczoraj","Dziś jest lepiej niż wczoraj","Dziś jest lepszy niż wczoraj"],"answer":1,
       "explain":"Сравнение двух вещей — <b>niż</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> во второй половине «тем».",
       "q":"«Чем больше работаю, тем меньше времени» —","opts":["Niż więcej pracuję, tym mniej mam czasu","Im więcej pracuję, tym mniej mam czasu","Jak więcej pracuję, tym mniej mam czasu"],"answer":1,
       "explain":"Связка нарастания — <b>im… tym…</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Im dłużej tu mieszkam, tym bardziej mi się podoba.","sub":"чем дольше я тут живу, тем больше мне нравится","want":"Im dłużej tu mieszkam, tym bardziej mi się podoba."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Через две недели после переезда. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"A","name":"Anna","side":"right","en":"I jak, lepiej niż na początku?","ru":"Ну как, лучше, чем в начале?",
      "words":[["niż","чем (при сравнении)"]]},
     {"who":"M","name":"Marek","side":"left","en":"Coraz lepiej. Kartonów jest coraz mniej.","ru":"Всё лучше. Коробок всё меньше.",
      "words":[["coraz lepiej","всё лучше"],["coraz mniej","всё меньше"]]},
     {"who":"A","name":"Anna","side":"right","en":"Widzisz? Im dłużej tu mieszkasz, tym bardziej to twoje miejsce.","ru":"Видишь? Чем дольше ты тут живёшь, тем больше это твоё место.",
      "words":[["Im dłużej… tym bardziej","чем дольше… тем больше"]]},
     {"who":"M","name":"Marek","side":"left","en":"Sąsiedzi też coraz milsi.","ru":"Соседи тоже всё приятнее.",
      "words":[["milsi","приятнее (о людях)"]]},
     {"who":"A","name":"Anna","side":"right","en":"A ściany? Białe jak śnieg.","ru":"А стены? Белые как снег.",
      "words":[["jak śnieg","как снег"]]},
     {"who":"M","name":"Marek","side":"left","en":"Chcę skończyć remont jak najszybciej.","ru":"Хочу закончить ремонт как можно быстрее.",
      "words":[["jak najszybciej","как можно быстрее"]]},
     {"who":"A","name":"Anna","side":"right","en":"Im mniej pośpiechu, tym lepszy efekt.","ru":"Чем меньше спешки, тем лучше результат.",
      "words":[["pośpiechu","спешки"],["efekt","результат"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — как идут дела.",
   "lines":[
     {"who":"A","en":"Jak ci idzie polski?","ru":"Как у тебя с польским?"},
     {"who":"B","en":"Coraz lepiej. Rozumiem coraz więcej.","ru":"Всё лучше. Понимаю всё больше."},
     {"who":"A","en":"Im więcej słuchasz, tym szybciej mówisz.","ru":"Чем больше слушаешь, тем быстрее говоришь."},
     {"who":"B","en":"Wiem. Chcę mówić tak dobrze jak ty.","ru":"Знаю. Хочу говорить так же хорошо, как ты."},
     {"who":"A","en":"To kwestia czasu. Im dalej, tym łatwiej.","ru":"Это вопрос времени. Чем дальше, тем легче."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — про рост, сравнение и «чем дальше, тем лучше».",
   "items":[
     {"en":"im… tym…","ru":"чем… тем…","ex":"Im więcej, tym lepiej."},
     {"en":"coraz lepiej","ru":"всё лучше","ex":"Mówię po polsku coraz lepiej."},
     {"en":"coraz więcej / coraz mniej","ru":"всё больше / всё меньше","ex":"Kartonów jest coraz mniej."},
     {"en":"coraz bardziej","ru":"всё более","ex":"Coraz bardziej mi się tu podoba."},
     {"en":"niż","ru":"чем (при сравнении)","ex":"Dziś jest lepiej niż wczoraj."},
     {"en":"tak… jak","ru":"такой же… как","ex":"Jest tak zmęczony jak ja."},
     {"en":"jak najszybciej","ru":"как можно быстрее","ex":"Przyjdź jak najszybciej."},
     {"en":"biały jak śnieg","ru":"белый как снег","ex":"Ściany są białe jak śnieg."},
     {"en":"głodny jak wilk","ru":"голодный как волк","ex":"Byłem głodny jak wilk."},
     {"en":"zdrowy jak ryba","ru":"здоров как рыба","ex":"Dziadek jest zdrowy jak ryba."},
     {"en":"pośpiech","ru":"спешка","ex":"Im mniej pośpiechu, tym lepszy efekt."},
     {"en":"kwestia czasu","ru":"вопрос времени","ex":"To tylko kwestia czasu."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["im więcej, tym lepiej","чем больше, тем лучше"],["coraz lepiej","всё лучше"],["jak najszybciej","как можно быстрее"],["lepiej niż wczoraj","лучше, чем вчера"]]
 },
 "reading":{
   "intro":"Прочитай вслух — неделя заканчивается на подъёме.",
   "title":"Coraz lepiej",
   "sentences":["Minęły dwa tygodnie od przeprowadzki.","W mieszkaniu jest coraz mniej kartonów.","Im dłużej Marek tu mieszka, tym bardziej mu się podoba.","Ściany są już białe jak śnieg.","Sąsiedzi są coraz milsi.","Dzieci z dołu mówią mu dzień dobry.","Marek chce skończyć remont jak najszybciej.","Ale Anna mówi: im mniej pośpiechu, tym lepszy efekt.","Dziś jest lepiej niż tydzień temu.","Marek śpi tak dobrze jak w domu rodziców.","Po polsku Anna mówi coraz swobodniej.","Im dalej, tym łatwiej — i to działa też z językiem."],
   "translation":"Прошло две недели после переезда. В квартире всё меньше коробок. Чем дольше Марек тут живёт, тем больше ему нравится. Стены уже белые как снег. Соседи всё приветливее. Дети снизу здороваются с ним. Марек хочет закончить ремонт как можно быстрее. Но Анна говорит: чем меньше спешки, тем лучше результат. Сегодня лучше, чем неделю назад. Марек спит так же хорошо, как в родительском доме. По-польски Анна говорит всё свободнее. Чем дальше, тем легче — и с языком это тоже работает."
 },
 "quiz":{
   "intro":"Пять вопросов — и неделя почти закрыта.",
   "items":[
     {"q":"1. «Чем больше, тем лучше» —","opts":["Im dużo, tym dobrze","Im więcej, tym lepiej","Niż więcej, tym lepiej"],"answer":1,
      "explain":"Сравнительные в обеих половинах: <b>im więcej, tym lepiej</b>."},
     {"q":"2. «Я говорю всё лучше» —","opts":["Mówię coraz dobrze","Mówię coraz lepiej","Mówię coraz dobry"],"answer":1,
      "explain":"Coraz требует сравнительной: <b>coraz lepiej</b>."},
     {"q":"3. «Сегодня лучше, чем вчера» —","opts":["Dziś jest lepiej niż wczoraj","Dziś jest lepiej im wczoraj","Dziś jest lepiej tym wczoraj"],"answer":0,
      "explain":"Сравнение двух вещей — <b>niż</b>."},
     {"q":"4. «белый как снег» —","opts":["biały niż śnieg","biały jak śnieg","biały jako śnieg"],"answer":1,
      "explain":"Приравнивание — через <b>jak</b>."},
     {"q":"5. «как можно быстрее» —","opts":["im szybciej","jak szybciej","jak najszybciej"],"answer":2,
      "explain":"Jak + превосходная степень: <b>jak najszybciej</b>."}
   ]
 },
 "essay":{
   "intro":"Расскажи, что у тебя идёт на подъём. Хоть немного — но честно.",
   "prompt":"Напиши 4–5 фраз: что у тебя получается всё лучше, что стало лучше, чем раньше, и одну связку «чем… тем…».",
   "hint":"Опора: Mówię / rozumiem coraz… · Dziś jest lepiej niż… · Im więcej…, tym… · jak najszybciej. 💛",
   "example":"Uczę się polskiego od pół roku i rozumiem coraz więcej. Dziś czytam lepiej niż miesiąc temu. Im więcej słucham, tym łatwiej mi mówić. Wciąż robię błędy, ale jest ich coraz mniej. Chcę mówić tak swobodnie jak moi znajomi — i to tylko kwestia czasu."
 }
},
"14": {
 "day":14,"week":"02",
 "themeRu":"Повторение недели 2",
 "themeEn":"Powtórka tygodnia 2",
 "intro":"Шесть дней, четыре падежа множественного числа, три ряда числительных и одно слово, которое склеивает предложения. Сегодня ничего нового: собираем неделю в одну картину и смотрим, сколько держится само. Квартира Марека за это время из пустой стала жилой — с нами примерно то же самое. 💛",
 "introAudio":"Шесть дней, четыре падежа множественного числа, три ряда числительных и одно слово, которое склеивает предложения. Сегодня ничего нового: собираем неделю в одну картину и смотрим, сколько держится само. Квартира Марека за это время из пустой стала жилой — с нами примерно то же самое.",
 "goals":[
   "Ставить множественное в любой падеж: <b>krzeseł, dzieciom, z gośćmi, o sąsiadach</b>",
   "Считать людей: <b>dwoje dzieci, troje gości, oboje rodzice</b>",
   "Строить придаточные с <b>który</b> и различать <b>swój / jego</b>",
   "Пользоваться связкой <b>im… tym…</b> и оборотом <b>coraz lepiej</b>"
 ],
 "learned":[
   "Поставил(а) множественное в любой падеж: krzeseł, dzieciom, z gośćmi, o sąsiadach",
   "Посчитал(а) людей: dwoje dzieci, troje gości, oboje rodzice",
   "Построил(а) придаточные с który и различил(а) swój / jego",
   "Воспользовался(лась) связкой im… tym… и оборотом coraz lepiej"
 ],
 "review":{
   "intro":"Большая разминка по всей неделе. Не спеши: если где-то запнёшься — это рабочий момент, правило всегда рядом, ниже на странице.",
   "introAudio":"Большая разминка по всей неделе. Не спеши: если где-то запнёшься — это рабочий момент, правило всегда рядом, ниже на странице.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> твёрдый мужской конец.",
      "q":"«пять столов» —","opts":["pięć stołów","pięć stoły","pięć stołach"],"answer":0,
      "explain":"Мужской твёрдый — окончание -ów: <b>stołów</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни беглое e.",
      "q":"«много книг» —","opts":["dużo książki","dużo książek","dużo książk"],"answer":1,
      "explain":"Беглое e разводит согласные: <b>książek</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> одно окончание на все роды.",
      "q":"«Спасибо гостям» —","opts":["Dziękuję gości","Dziękuję gościom","Dziękuję gośćmi"],"answer":1,
      "explain":"Дательный множественного — <b>-om</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> слово из короткого списка на -mi.",
      "q":"«с детьми» —","opts":["z dzieciami","z dziećmi","z dzieciom"],"answer":1,
      "explain":"Особая форма творительного: <b>z dziećmi</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни русское «двое детей».",
      "q":"«У них трое детей» —","opts":["Mają trzy dzieci","Mają troje dzieci","Mają trzej dzieci"],"answer":1,
      "explain":"Собирательное числительное: <b>troje dzieci</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> предлог идёт вместе с «который».",
      "q":"Dom, ___ mieszkamy, jest stary.","opts":["który","w którym","z którym"],"answer":1,
      "explain":"«В котором живём» — <b>w którym</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Марек любит свою новую квартиру»</b>","answer":"Marek kocha swoje nowe mieszkanie"},
     {"type":"type","howto":"Напиши «Чем больше, тем лучше». Диакритику можно не ставить.",
      "q":"Чем больше, тем лучше.","accept":["im więcej tym lepiej","im wiecej tym lepiej","im więcej, tym lepiej","im wiecej, tym lepiej"],"placeholder":"Im więcej…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Повторение · Дни 8–9",
    "title":"Множественное число во всех падежах",
    "paras":[
      "<b>Родительный.</b> Мужской твёрдый — <b>-ów</b>: kotów, domów, stołów, obrazów, sąsiadów. Мужской мягкий и шипящий — <b>-i / -y</b>: koni, gości, mebli, talerzy, kluczy. Женский и средний — пусто, при нужде с беглым e: lamp, szaf, kobiet, książek, matek, okien, krzeseł. Женский на согласный — <b>-i / -y</b>: nocy, rzeczy. Особые: dzieci, ludzi, pieniędzy, przyjaciół, braci, rąk, lat.",
      "Живёт он после чисел от пяти (<b>pięć lamp</b>), после количеств (<b>dużo mebli</b>), после отрицания (<b>nie ma zasłon</b>) и при <b>brakuje mi</b>.",
      "<b>Дательный — -om</b>, всегда и для всех: dzieciom, gościom, rodzicom, ludziom.",
      "<b>Творительный — -ami</b>: z sąsiadami, z książkami. И короткий список на <b>-mi</b>: dziećmi, ludźmi, przyjaciółmi, braćmi, gośćmi, końmi, pieniędzmi.",
      "<b>Предложный — -ach</b>: o dzieciach, o sąsiadach, w domach, na wakacjach. Плюс форма на -ech у стран: we Włoszech, w Niemczech, na Węgrzech."
    ],
    "audio":"Родительный. Мужской твёрдый — окончание -ów: kotów, domów, stołów, obrazów, sąsiadów. Мужской мягкий и шипящий — -i или -y: koni, gości, mebli, talerzy, kluczy. Женский и средний — пусто, при нужде с беглым e: lamp, szaf, kobiet, książek, matek, okien, krzeseł. Женский на согласный — -i или -y: nocy, rzeczy. Особые формы: dzieci, ludzi, pieniędzy, przyjaciół, braci, rąk, lat. Живёт он после чисел от пяти, pięć lamp; после количеств, dużo mebli; после отрицания, nie ma zasłon; и при brakuje mi. Дательный — -om, всегда и для всех: dzieciom, gościom, rodzicom, ludziom. Творительный — -ami: z sąsiadami, z książkami. И короткий список на -mi: dziećmi, ludźmi, przyjaciółmi, braćmi, gośćmi, końmi, pieniędzmi. Предложный — -ach: o dzieciach, o sąsiadach, w domach, na wakacjach. Плюс форма на -ech у стран: we Włoszech, w Niemczech, na Węgrzech.",
    "table":{"rows":[
      ["kotów · domów · stołów","родительный: -ów"],
      ["koni · gości · mebli · kluczy","родительный: -i / -y"],
      ["lamp · książek · okien · krzeseł","родительный: пусто (+ беглое e)"],
      ["dzieciom · gościom · rodzicom","дательный: -om"],
      ["z sąsiadami · z dziećmi · z ludźmi","творительный: -ami / -mi"],
      ["o dzieciach · we Włoszech","предложный: -ach / -ech"]
    ],"star":-1},
    "examples":[
      {"ru":"У нас нет ни стульев, ни ламп.","en":"Nie mamy ani <b>krzeseł</b>, ani <b>lamp</b>.","say":"Nie mamy ani krzeseł, ani lamp."},
      {"ru":"Спасибо гостям за цветы.","en":"Dziękuję <b>gościom</b> za kwiaty.","say":"Dziękuję gościom za kwiaty."},
      {"ru":"Мы приехали с друзьями и детьми.","en":"Przyjechaliśmy <b>z przyjaciółmi</b> i <b>z dziećmi</b>.","say":"Przyjechaliśmy z przyjaciółmi i z dziećmi."},
      {"ru":"Мы говорили о соседях и о каникулах в Италии.","en":"Rozmawialiśmy <b>o sąsiadach</b> i <b>o wakacjach we Włoszech</b>.","say":"Rozmawialiśmy o sąsiadach i o wakacjach we Włoszech."}
    ],
    "mistakes":[
      {"wrong":"dużo mebelów","right":"dużo <b>mebli</b>","why":"Mebel идёт по мягкому ряду: -i."},
      {"wrong":"z dzieciami","right":"<b>z dziećmi</b>","why":"Dzieci — из короткого списка на -mi."}
    ],
    "mnemonic":"🧭 -ов / -ам / -ами / -ах → -ów / -om / -ami / -ach. Четыре указателя, и почти все совпадают.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> средний род, беглое e.",
       "q":"«пять окон» —","opts":["pięć oknów","pięć okien","pięć okna"],"answer":1,
       "explain":"Без окончания, внутри e: <b>okien</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> о ком говорим?",
       "q":"«о людях» —","opts":["o ludziami","o ludziach","o ludziom"],"answer":1,
       "explain":"Предложный множественного — <b>-ach</b>."},
      {"type":"type","howto":"Напиши «Мне не хватает стульев». Диакритику можно не ставить.",
       "q":"Мне не хватает стульев.","accept":["brakuje mi krzeseł","brakuje mi krzesel"],"placeholder":"Brakuje mi…"}
    ]
   },
   {
    "eyebrow":"Повторение · День 10",
    "title":"<em>Dwoje dzieci</em> и вся семья",
    "paras":[
      "Собирательные числительные — <b>dwoje, troje, czworo, pięcioro</b> и дальше на -oro — берут после себя родительный множественного: <b>dwoje dzieci, troje gości, pięcioro dzieci</b>.",
      "Три случая, когда без них нельзя: слово <b>dzieci</b>; смешанная группа людей (<b>dwoje studentów</b> — он и она, против <b>dwaj studenci</b> и <b>dwie studentki</b>); слова без единственного числа (<b>dwoje drzwi</b>, dwoje nożyczek).",
      "Глагол при них — единственного числа, в прошедшем среднего рода: <b>Przyszło troje gości. Było pięcioro dzieci.</b> Родительный самого числительного: <b>matka dwojga dzieci</b>.",
      "И семейная тройка: <b>obaj</b> (два мужчины), <b>obie</b> (две женщины или вещи), <b>oboje</b> (он и она); <b>oboje rodzice</b> — оба родителя; <b>rodzeństwo</b> — братья и сёстры одним словом."
    ],
    "audio":"Собирательные числительные — dwoje, troje, czworo, pięcioro и дальше на -oro — берут после себя родительный множественного: dwoje dzieci, troje gości, pięcioro dzieci. Три случая, когда без них нельзя: слово dzieci; смешанная группа людей — dwoje studentów, он и она, против dwaj studenci и dwie studentki; слова без единственного числа — dwoje drzwi, dwoje nożyczek. Глагол при них единственного числа, в прошедшем среднего рода: przyszło troje gości, było pięcioro dzieci. Родительный самого числительного: matka dwojga dzieci. И семейная тройка: obaj — два мужчины, obie — две женщины или вещи, oboje — он и она; oboje rodzice — оба родителя; rodzeństwo — братья и сёстры одним словом.",
    "table":{"rows":[
      ["dwoje / troje / czworo / pięcioro dzieci","двое · трое · четверо · пятеро детей"],
      ["dwaj studenci · dwie studentki · dwoje studentów","мужчины · женщины · смешанно"],
      ["dwoje drzwi","две двери"],
      ["Przyszło troje gości.","глагол в среднем роде"],
      ["matka dwojga dzieci","мать двоих детей"],
      ["obaj · obie · oboje · rodzeństwo","оба · обе · оба (он и она) · братья и сёстры"]
    ],"star":1},
    "examples":[
      {"ru":"У соседа двое детей.","en":"Sąsiad ma <b>dwoje dzieci</b>.","say":"Sąsiad ma dwoje dzieci."},
      {"ru":"Пришло трое гостей.","en":"<b>Przyszło troje gości.</b>","say":"Przyszło troje gości."},
      {"ru":"Анна и Марек — оба работают.","en":"Anna i Marek — <b>oboje</b> pracują.","say":"Anna i Marek, oboje pracują."},
      {"ru":"У тебя есть братья или сёстры?","en":"<b>Masz rodzeństwo?</b>","say":"Masz rodzeństwo?"}
    ],
    "mistakes":[
      {"wrong":"Mają dwa dzieci.","right":"Mają <b>dwoje</b> dzieci.","why":"Дети считаются собирательным числительным."},
      {"wrong":"Przyszli troje gości.","right":"<b>Przyszło</b> troje gości.","why":"Глагол в среднем роде единственного числа — как «пришло трое»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> в группе он и она.",
       "q":"Студент и студентка — это…","opts":["dwaj studenci","dwoje studentów","dwie studentki"],"answer":1,
       "explain":"Смешанная группа — <b>dwoje studentów</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> глагол при собирательном.",
       "q":"«Пришло трое гостей» —","opts":["Przyszli troje gości","Przyszło troje gości","Przyszła troje gości"],"answer":1,
       "explain":"Средний род единственного числа: <b>przyszło</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«У соседа двое детей»</b>","answer":"Sąsiad ma dwoje dzieci"}
    ]
   },
   {
    "eyebrow":"Повторение · Дни 11–12",
    "title":"<em>Который</em> и <em>свой</em>",
    "paras":[
      "<b>Który</b> берёт род и число от слова слева, а падеж — от своей работы внутри придаточного: sąsiad, <b>który</b> mieszka obok; ludzie, <b>którzy</b> nam pomogli; człowiek, <b>którego</b> znasz; sąsiad, <b>któremu</b> pomogliśmy; książka, <b>którą</b> czytam.",
      "Предлог идёт вместе с ним: <b>z którym, z którą, z którymi, w którym, o których, do którego</b>. Запятая перед który — всегда. А к словам «всё, то, ничего» цепляется <b>co</b>: wszystko, <b>co</b> mam.",
      "<b>Swój</b> берётся тогда, когда хозяин — подлежащее: Marek zabrał <b>swój</b> telefon (свой) против Marek zabrał <b>jego</b> telefon (чужой). Склоняется как mój: swojego, swojemu, swoim, swojej, swoją, swoich, swoimi.",
      "И соседи по теме: <b>ten sam</b> (тот же самый предмет) против <b>taki sam</b> (такой же, но другой); <b>inny</b>; <b>każdy</b> с единственным числом; <b>wszyscy</b> о людях; <b>żaden</b> — только вместе с <b>nie</b>."
    ],
    "audio":"Który берёт род и число от слова слева, а падеж — от своей работы внутри придаточного: sąsiad, który mieszka obok; ludzie, którzy nam pomogli; człowiek, którego znasz; sąsiad, któremu pomogliśmy; książka, którą czytam. Предлог идёт вместе с ним: z którym, z którą, z którymi, w którym, o których, do którego. Запятая перед który — всегда. А к словам «всё, то, ничего» цепляется co: wszystko, co mam. Swój берётся тогда, когда хозяин — подлежащее: Marek zabrał swój telefon, свой, против Marek zabrał jego telefon, чужой. Склоняется как mój: swojego, swojemu, swoim, swojej, swoją, swoich, swoimi. И соседи по теме: ten sam — тот же самый предмет, против taki sam — такой же, но другой; inny; każdy с единственным числом; wszyscy о людях; żaden — только вместе с nie.",
    "table":{"rows":[
      ["sąsiad, który… · ludzie, którzy…","именительный"],
      ["człowiek, którego znasz","винительный одушевлённый"],
      ["sąsiad, któremu pomogliśmy","дательный"],
      ["dom, w którym mieszkam · z którymi","с предлогом"],
      ["swój telefon ≠ jego telefon","свой ≠ его"],
      ["ten sam ≠ taki sam · żaden… nie","тот же ≠ такой же · ни один… не"]
    ],"star":4},
    "examples":[
      {"ru":"Это сосед, который живёт под нами.","en":"To sąsiad, <b>który</b> mieszka pod nami.","say":"To sąsiad, który mieszka pod nami."},
      {"ru":"Друзья, с которыми мы были в Италии, придут завтра.","en":"Przyjaciele, <b>z którymi</b> byliśmy we Włoszech, przyjdą jutro.","say":"Przyjaciele, z którymi byliśmy we Włoszech, przyjdą jutro."},
      {"ru":"Марек любит свою новую квартиру.","en":"Marek kocha <b>swoje</b> nowe mieszkanie.","say":"Marek kocha swoje nowe mieszkanie."},
      {"ru":"У меня такая же лампа, как у тебя.","en":"Mam <b>taką samą</b> lampę jak ty.","say":"Mam taką samą lampę jak ty."},
      {"ru":"Ни один из соседей не пришёл.","en":"<b>Żaden</b> z sąsiadów <b>nie</b> przyszedł.","say":"Żaden z sąsiadów nie przyszedł."}
    ],
    "mistakes":[
      {"wrong":"ludzie, które nam pomogli","right":"ludzie, <b>którzy</b> nam pomogli","why":"О людях с мужчинами в группе — мужско-личная форма."},
      {"wrong":"Marek kocha jego mieszkanie. (о своём)","right":"Marek kocha <b>swoje</b> mieszkanie.","why":"Хозяин и подлежащее совпали — значит swój."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> pomagać просит дательный.",
       "q":"Sąsiad, ___ pomogliśmy, przyniósł wino.","opts":["który","którego","któremu"],"answer":2,
       "explain":"Кому помогли — <b>któremu</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> чья книга?",
       "q":"«Анна взяла его книгу» (книгу Марека) —","opts":["Anna wzięła swoją książkę","Anna wzięła jego książkę","Anna wzięła jej książkę"],"answer":1,
       "explain":"Книга чужая — <b>jego</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри, есть ли nie.",
       "q":"«Ни один сосед не пришёл» —","opts":["Żaden sąsiad przyszedł","Żaden sąsiad nie przyszedł","Nie żaden sąsiad przyszedł"],"answer":1,
       "explain":"Żaden всегда работает вместе с <b>nie</b>."}
    ]
   },
   {
    "eyebrow":"Повторение · День 13",
    "title":"<em>Im… tym…</em>, <em>coraz</em> и три «чем»",
    "paras":[
      "Связка нарастания: <b>im</b> + сравнительная, запятая, <b>tym</b> + сравнительная. <b>Im więcej, tym lepiej. Im dłużej tu mieszkam, tym bardziej mi się podoba.</b>",
      "<b>Coraz</b> + сравнительная = «всё…»: coraz lepiej, coraz więcej, coraz mniej, coraz trudniej, coraz lepszy, coraz bardziej.",
      "Три польских слова на месте русского «чем»: <b>niż</b> — сравнение двух вещей (lepiej niż wczoraj; или od + родительный: starszy od brata); <b>im… tym…</b> — связка; <b>jak</b> — приравнивание (biały jak śnieg, tak zmęczony jak ja).",
      "И бонусная формула: <b>jak</b> + превосходная = «как можно…»: jak najszybciej, jak najlepiej, jak najwięcej."
    ],
    "audio":"Связка нарастания: im плюс сравнительная, запятая, tym плюс сравнительная. Im więcej, tym lepiej. Im dłużej tu mieszkam, tym bardziej mi się podoba. Coraz плюс сравнительная равно «всё»: coraz lepiej, coraz więcej, coraz mniej, coraz trudniej, coraz lepszy, coraz bardziej. Три польских слова на месте русского «чем»: niż — сравнение двух вещей, lepiej niż wczoraj, или od плюс родительный, starszy od brata; im и tym — связка; jak — приравнивание, biały jak śnieg, tak zmęczony jak ja. И бонусная формула: jak плюс превосходная равно «как можно»: jak najszybciej, jak najlepiej, jak najwięcej.",
    "table":{"rows":[
      ["Im więcej, tym lepiej.","чем больше, тем лучше"],
      ["Im dalej, tym łatwiej.","чем дальше, тем легче"],
      ["coraz lepiej · coraz mniej","всё лучше · всё меньше"],
      ["lepiej niż wczoraj · starszy od brata","сравнение двух вещей"],
      ["biały jak śnieg · tak zmęczony jak ja","приравнивание"],
      ["jak najszybciej","как можно быстрее"]
    ],"star":-1},
    "examples":[
      {"ru":"Чем больше я слушаю, тем легче говорить.","en":"<b>Im więcej</b> słucham, <b>tym łatwiej</b> mówić.","say":"Im więcej słucham, tym łatwiej mówić."},
      {"ru":"Я говорю по-польски всё лучше.","en":"Mówię po polsku <b>coraz lepiej</b>.","say":"Mówię po polsku coraz lepiej."},
      {"ru":"Сегодня лучше, чем неделю назад.","en":"Dziś jest <b>lepiej niż</b> tydzień temu.","say":"Dziś jest lepiej niż tydzień temu."},
      {"ru":"Приходи как можно быстрее.","en":"Przyjdź <b>jak najszybciej</b>.","say":"Przyjdź jak najszybciej."}
    ],
    "mistakes":[
      {"wrong":"Im dużo, tym dobrze.","right":"<b>Im więcej, tym lepiej.</b>","why":"В обеих половинах нужна сравнительная степень."},
      {"wrong":"coraz dobrze","right":"<b>coraz lepiej</b>","why":"Coraz сочетается только со сравнительной."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> после coraz — сравнительная.",
       "q":"«всё меньше коробок» —","opts":["coraz mało kartonów","coraz mniej kartonów","coraz mniej kartony"],"answer":1,
       "explain":"Сравнительная плюс родительный множественного: <b>coraz mniej kartonów</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> сравниваются два дня.",
       "q":"«Сегодня лучше, чем вчера» —","opts":["Dziś jest lepiej im wczoraj","Dziś jest lepiej niż wczoraj","Dziś jest lepiej tym wczoraj"],"answer":1,
       "explain":"Сравнение двух вещей — <b>niż</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Im dalej, tym lepiej.","sub":"чем дальше, тем лучше","want":"Im dalej, tym lepiej."}
    ]
   }
 ],
 "scene":{
   "intro":"Сценка на всю неделю сразу — Анна и Марек через месяц после переезда.",
   "lines":[
     {"who":"A","en":"Ile masz teraz krzeseł?","ru":"Сколько у тебя теперь стульев?"},
     {"who":"B","en":"Sześć. Brakuje mi tylko lamp.","ru":"Шесть. Не хватает только ламп."},
     {"who":"A","en":"A sąsiedzi, o których mówiłeś?","ru":"А соседи, о которых ты говорил?"},
     {"who":"B","en":"Byli tu wczoraj z dziećmi. Mają dwoje.","ru":"Были тут вчера с детьми. У них двое."},
     {"who":"A","en":"Podziękowałeś im za pomoc?","ru":"Ты поблагодарил их за помощь?"},
     {"who":"B","en":"Oczywiście. Podziękowałem wszystkim sąsiadom.","ru":"Конечно. Поблагодарил всех соседей."},
     {"who":"A","en":"Widzisz? Im dłużej tu jesteś, tym lepiej.","ru":"Видишь? Чем дольше ты тут, тем лучше."}
   ]
 },
 "vocab":{
   "intro":"Не отдельные слова, а связки недели — то, что стоит говорить не задумываясь.",
   "items":[
     {"en":"pięć krzeseł · dużo mebli","ru":"пять стульев · много мебели","ex":"Kupiliśmy pięć krzeseł."},
     {"en":"nie ma zasłon · brakuje mi lamp","ru":"занавесок нет · мне не хватает ламп","ex":"W oknach nie ma zasłon."},
     {"en":"dużo ludzi · nie mam pieniędzy","ru":"много людей · у меня нет денег","ex":"Tu zawsze jest dużo ludzi."},
     {"en":"Dziękuję gościom.","ru":"спасибо гостям","ex":"Dziękuję gościom za kwiaty."},
     {"en":"z przyjaciółmi · z dziećmi","ru":"с друзьями · с детьми","ex":"Przyjechaliśmy z przyjaciółmi."},
     {"en":"o sąsiadach · we Włoszech","ru":"о соседях · в Италии","ex":"Rozmawialiśmy o sąsiadach."},
     {"en":"dwoje dzieci · troje gości","ru":"двое детей · трое гостей","ex":"Sąsiad ma dwoje dzieci."},
     {"en":"oboje rodzice · rodzeństwo","ru":"оба родителя · братья и сёстры","ex":"Masz rodzeństwo?"},
     {"en":"sąsiad, który… · z którymi…","ru":"сосед, который… · с которыми…","ex":"To sąsiad, który mieszka pod nami."},
     {"en":"swój ≠ jego","ru":"свой ≠ его","ex":"Marek zabrał swój telefon, nie jego."},
     {"en":"ten sam ≠ taki sam","ru":"тот же самый ≠ такой же","ex":"Mieszkamy w tym samym domu."},
     {"en":"Im więcej, tym lepiej. · coraz lepiej","ru":"чем больше, тем лучше · всё лучше","ex":"Mówię po polsku coraz lepiej."}
   ]
 },
 "drag":{
   "intro":"Последняя игра недели. Перетащи польскую форму к её переводу.",
   "pairs":[["z gośćmi","с гостями"],["dwoje dzieci","двое детей"],["z którymi","с которыми"],["coraz lepiej","всё лучше"]]
 },
 "reading":{
   "intro":"Текст на всю неделю: тут все падежи множественного, счёт людей, «который» и «чем… тем…». Прочитай вслух.",
   "title":"Miesiąc później",
   "sentences":["Minął miesiąc od przeprowadzki Marka.","W mieszkaniu jest już sześć krzeseł i pięć lamp.","Brakuje tylko zasłon w dwóch oknach.","Marek dziękuje wszystkim sąsiadom za pomoc.","Najbardziej państwu Kowalskim, którzy mają dwoje dzieci.","Dzieciom kupił czekoladę.","W sobotę znowu przyszli goście.","Byli przyjaciele, z którymi Marek pracuje od lat.","Rozmawiali o pracy, o sąsiadach i o wakacjach we Włoszech.","Anna wzięła swoje zdjęcia i pokazała je wszystkim.","Marek mówi, że dziś jest lepiej niż miesiąc temu.","Im dłużej tu mieszka, tym bardziej to jego dom.","Kartonów jest coraz mniej, a ludzi coraz więcej."],
   "translation":"Прошёл месяц с переезда Марека. В квартире уже шесть стульев и пять ламп. Не хватает только занавесок на двух окнах. Марек благодарит всех соседей за помощь. Больше всего — Ковальских, у которых двое детей. Детям он купил шоколад. В субботу снова пришли гости. Были друзья, с которыми Марек работает много лет. Говорили о работе, о соседях и о каникулах в Италии. Анна взяла свои фотографии и показала их всем. Марек говорит, что сегодня лучше, чем месяц назад. Чем дольше он тут живёт, тем больше это его дом. Коробок всё меньше, а людей всё больше."
 },
 "quiz":{
   "intro":"Проверка недели — тринадцать вопросов по всем шести дням. Спокойно, ты это уже умеешь.",
   "items":[
     {"q":"1. «пять столов» —","opts":["pięć stoły","pięć stołów","pięć stołach"],"answer":1,
      "explain":"Мужской твёрдый — окончание -ów: <b>stołów</b>."},
     {"q":"2. «шесть стульев» —","opts":["sześć krzesłów","sześć krzeseł","sześć krzesła"],"answer":1,
      "explain":"Средний род без окончания, внутри беглое e: <b>krzeseł</b>."},
     {"q":"3. «У меня нет денег» —","opts":["Nie mam pieniądze","Nie mam pieniędzy","Nie mam pieniądzy"],"answer":1,
      "explain":"Особая форма родительного: <b>pieniędzy</b>."},
     {"q":"4. «Спасибо детям» —","opts":["Dziękuję dzieci","Dziękuję dzieciom","Dziękuję dziećmi"],"answer":1,
      "explain":"Дательный множественного — всегда -om."},
     {"q":"5. «с друзьями» —","opts":["z przyjaciołami","z przyjaciółmi","z przyjaciołach"],"answer":1,
      "explain":"Слово из короткого списка на -mi: <b>z przyjaciółmi</b>."},
     {"q":"6. «Мы были в Италии» —","opts":["Byliśmy w Włochach","Byliśmy we Włoszech","Byliśmy w Włochy"],"answer":1,
      "explain":"Włochy берёт форму на -ech: <b>we Włoszech</b>."},
     {"q":"7. «У соседа двое детей» —","opts":["Sąsiad ma dwa dzieci","Sąsiad ma dwoje dzieci","Sąsiad ma dwie dzieci"],"answer":1,
      "explain":"Дети считаются собирательным числительным."},
     {"q":"8. Анна и Марек — это…","opts":["obaj","oboje","obie"],"answer":1,
      "explain":"Он и она — <b>oboje</b>."},
     {"q":"9. To są ludzie, ___ nam pomogli.","opts":["które","którzy","którymi"],"answer":1,
      "explain":"Мужско-личная форма: <b>którzy</b>."},
     {"q":"10. Dom, ___ mieszkamy, jest stary.","opts":["który","w którym","z którym"],"answer":1,
      "explain":"Предлог идёт вместе с который: <b>w którym</b>."},
     {"q":"11. «Марек любит свою работу» —","opts":["Marek kocha jego pracę","Marek kocha swoją pracę","Marek kocha ich pracę"],"answer":1,
      "explain":"Хозяин и подлежащее совпали: <b>swoją</b>."},
     {"q":"12. «У меня такая же лампа, как у тебя» —","opts":["Mam tę samą lampę jak ty","Mam taką samą lampę jak ty","Mam inną lampę jak ty"],"answer":1,
      "explain":"Разные предметы, одинаковые на вид: <b>taką samą</b>."},
     {"q":"13. «Чем больше, тем лучше» —","opts":["Im dużo, tym dobrze","Im więcej, tym lepiej","Niż więcej, tym lepiej"],"answer":1,
      "explain":"Сравнительные в обеих половинах: <b>im więcej, tym lepiej</b>."}
   ]
 },
 "essay":{
   "intro":"Финал недели — небольшой рассказ о людях вокруг тебя. Вся неделя уже у тебя в руках.",
   "prompt":"Напиши 6–7 фраз: кто твои соседи, сколько у кого детей, с кем ты общаешься, о чём вы говорите, что у тебя своё, и закончи связкой «чем… тем…».",
   "hint":"Опора: Moi sąsiedzi… · Mają … dzieci · Rozmawiam z… · Mówimy o… · To jest sąsiad, który… · Im…, tym… Проверь окончания: -ów / пусто, -om, -ami (-mi), -ach. 💛",
   "example":"Mieszkam w starym domu, w którym jest osiem mieszkań. Moi sąsiedzi to państwo Nowakowie — mają troje dzieci. Dzieciom czasem kupuję czekoladę, a rodzicom pomagam w zakupach. W soboty rozmawiam z sąsiadami o pracy i o wakacjach. Mam swój mały balkon i taką samą lampę jak sąsiadka z góry. Żaden dzień nie jest tu cichy, ale to mi nie przeszkadza. Im dłużej tu mieszkam, tym bardziej czuję się jak u siebie."
 }
},

"15": {
 "day":15,"week":"03",
 "themeRu":"Хочу, чтобы ты…",
 "themeEn":"Chcę, żebyś…",
 "intro":"Есть в польском союз, который делает половину работы за тебя: <b>żeby</b>. «Хочу, чтобы ты мне помог» строится слово в слово — вплоть до прошедшей формы после союза. Анна записалась на государственный сертификатный экзамен и просит Марека о помощи: у нас будет целый день просьб, советов и целей.",
 "introAudio":"Есть в польском союз, который делает половину работы за тебя: żeby. «Хочу, чтобы ты мне помог» строится слово в слово — вплоть до прошедшей формы после союза. Анна записалась на государственный сертификатный экзамен и просит Марека о помощи: у нас будет целый день просьб, советов и целей.",
 "goals":[
   "Строить придаточное с <b>żeby</b>: <b>Chcę, żebyś przyszedł</b>",
   "Спрягать союз: <b>żebym, żebyś, żeby, żebyśmy, żebyście</b>",
   "Отличать цель одного человека (<b>żeby</b> + инфинитив) от просьбы к другому",
   "Просить и советовать: <b>proszę, żebyś…</b> · <b>radzę ci, żebyś…</b> · <b>żeby nie…</b>"
 ],
 "learned":[
   "Построил(а) придаточное с żeby: Chcę, żebyś przyszedł",
   "Проспрягал(а) союз: żebym, żebyś, żeby, żebyśmy, żebyście",
   "Отличил(а) цель одного человека от просьбы к другому",
   "Попросил(а) и посоветовал(а): proszę, żebyś… · radzę ci, żebyś… · żeby nie…"
 ],
 "review":{
   "intro":"Сначала круг по второй неделе: падежи множественного числа, «который», im…tym. И два постоянных жильца курса — приставка и вид.",
   "introAudio":"Сначала круг по второй неделе: падежи множественного числа, «который», im, tym. И два постоянных жильца курса — приставка и вид.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> прочитай фразу и нажми правильный вариант.",
      "q":"W grupie nie ma ___. (студентов)","opts":["studenci","studentów","studentom"],"answer":1,
      "explain":"После <b>nie ma</b> — родительный падеж, во множественном числе это <b>studentów</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, какой предлог стоит перед пропуском.",
      "q":"To jest kolega, z ___ pracuję.","opts":["który","którym","którego"],"answer":1,
      "explain":"Предлог z требует творительного: <b>z którym</b> — точно как русское «с которым»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни двойную конструкцию из дня 13.",
      "q":"___ więcej czytasz, tym lepiej rozumiesz.","opts":["Im","Czym","Jak"],"answer":0,
      "explain":"«Чем больше — тем лучше» = <b>im</b> więcej, <b>tym</b> lepiej. Первая половина всегда im."},
     {"type":"choice","howto":"<b>Что делать:</b> приставка держит весь смысл.",
      "q":"«Он вышел из дома час назад» — Godzinę temu ___ z domu.","opts":["wszedł","wyszedł","przyszedł"],"answer":1,
      "explain":"wy- отвечает русскому вы-: <b>wyszedł</b>. Wszedł — вошёл, przyszedł — пришёл."},
     {"type":"choice","howto":"<b>Что делать:</b> ищи маркер результата.",
      "q":"Wczoraj ___ ten list w godzinę.","opts":["pisałem","napisałem","piszę"],"answer":1,
      "explain":"«За час» — законченный результат, значит совершенный вид: <b>napisałem</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Двое детей было дома»</b>","answer":"Dwoje dzieci było w domu"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Союз спрягается",
    "title":"<em>Chcę, żebyś przyszedł</em>",
    "paras":[
      "Русское «чтобы» одно на всех. Польское <b>żeby</b> ведёт себя как by из A2: забирает личное окончание себе. Получается шесть форм: <b>żebym</b> (я), <b>żebyś</b> (ты), <b>żeby</b> (он, она, оно), <b>żebyśmy</b> (мы), <b>żebyście</b> (вы), <b>żeby</b> (они).",
      "А дальше — главный подарок дня: после союза глагол стоит в прошедшей <b>л-форме</b>, ровно как в русском. «Хочу, чтобы ты пришёл» — <b>Chcę, żebyś przyszedł</b>. Женщине: <b>Chcę, żebyś przyszła</b>.",
      "Кто именно должен действовать — видно по окончанию союза, а не по глаголу: <b>Marek chce, żebym mu pomogła</b> — «Марек хочет, чтобы я ему помогла». Глагол при этом остаётся голой л-формой.",
      "Запятая перед żeby обязательна — как перед русским «чтобы». Ставим её всегда, даже если предложение короткое."
    ],
    "audio":"Русское «чтобы» одно на всех. Польское żeby ведёт себя как by из A2: забирает личное окончание себе. Получается шесть форм: żebym для «я», żebyś для «ты», żeby для «он, она, оно», żebyśmy для «мы», żebyście для «вы», żeby для «они». А дальше главный подарок дня: после союза глагол стоит в прошедшей л-форме, ровно как в русском. Хочу, чтобы ты пришёл — chcę, żebyś przyszedł. Женщине — chcę, żebyś przyszła. Кто именно должен действовать, видно по окончанию союза, а не по глаголу: Marek chce, żebym mu pomogła — Марек хочет, чтобы я ему помогла. Запятая перед żeby обязательна, как перед русским «чтобы».",
    "table":{"rows":[
      ["Chcę, <b>żebyś przyszedł</b>. <button class=\"play\" data-say=\"Chcę, żebyś przyszedł\">🔊</button>","Хочу, чтобы ты пришёл."],
      ["Chcę, <b>żebyś przyszła</b>. <button class=\"play\" data-say=\"Chcę, żebyś przyszła\">🔊</button>","Хочу, чтобы ты пришла."],
      ["Chcę, <b>żeby</b> Marek <b>przyszedł</b>. <button class=\"play\" data-say=\"Chcę, żeby Marek przyszedł\">🔊</button>","Хочу, чтобы Марек пришёл."],
      ["Chcemy, <b>żebyście przyszli</b>. <button class=\"play\" data-say=\"Chcemy, żebyście przyszli\">🔊</button>","Хотим, чтобы вы пришли."],
      ["Rodzice chcą, <b>żebyśmy zadzwonili</b>. <button class=\"play\" data-say=\"Rodzice chcą, żebyśmy zadzwonili\">🔊</button>","Родители хотят, чтобы мы позвонили."],
      ["Marek chce, <b>żebym</b> mu <b>pomogła</b>. <button class=\"play\" data-say=\"Marek chce, żebym mu pomogła\">🔊</button>","Марек хочет, чтобы я ему помогла."]
    ],"star":0},
    "examples":[
      {"ru":"Хочу, чтобы ты мне помог.","en":"Chcę, <b>żebyś</b> mi <b>pomógł</b>.","gloss":"pomóc в л-форме: pomógł / pomogła","say":"Chcę, żebyś mi pomógł."},
      {"ru":"Анна хочет, чтобы Марек проверил её текст.","en":"Anna chce, <b>żeby</b> Marek <b>sprawdził</b> jej tekst.","say":"Anna chce, żeby Marek sprawdził jej tekst."},
      {"ru":"Родители хотят, чтобы я училась в Кракове.","en":"Rodzice chcą, <b>żebym studiowała</b> w Krakowie.","gloss":"żebym — о себе, женская л-форма","say":"Rodzice chcą, żebym studiowała w Krakowie."},
      {"ru":"Я не хочу, чтобы кто-то мне мешал.","en":"Nie chcę, <b>żeby</b> ktoś mi <b>przeszkadzał</b>.","say":"Nie chcę, żeby ktoś mi przeszkadzał."}
    ],
    "mistakes":[
      {"wrong":"Chcę, żebyś przyjdziesz.","right":"Chcę, <b>żebyś przyszedł</b>.","why":"после żeby настоящее и будущее время невозможны — только прошедшая л-форма. В русском ровно то же: «чтобы ты пришёл», а не «чтобы ты придёшь»."},
      {"wrong":"Chcę, żeby przyszedłeś.","right":"Chcę, <b>żebyś przyszedł</b>.","why":"личное окончание -ś сидит на союзе, а не на глаголе. Двух окончаний в одной фразе не бывает."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, какая форма стоит после союза.",
       "q":"«Хочу, чтобы ты пришёл» —","opts":["Chcę, żebyś przyjdziesz","Chcę, żebyś przyszedł","Chcę, że przyjdziesz"],"answer":1,
       "explain":"После żeby идёт л-форма: <b>przyszedł</b>. Przyjdziesz — будущее время, там его быть не может; że вводит факт, а не желание."},
      {"type":"choice","howto":"<b>Что делать:</b> найди, где сидит личное окончание.",
       "q":"Анна: «Марек хочет, чтобы я ему помогла» —","opts":["Marek chce, żeby mu pomogłam","Marek chce, żebym mu pomogła","Marek chce, żebym mu pomogę"],"answer":1,
       "explain":"Окончание уходит к союзу: <b>żebym</b>, а глагол остаётся голым — pomogła."},
      {"type":"type","howto":"<b>Что делать:</b> напиши фразу с запятой. Диакритику можно не ставить.",
       "q":"«Хочу, чтобы ты мне помог(ла)»","accept":["chcę, żebyś mi pomógł","chce, zebys mi pomogl","chcę żebyś mi pomógł","chce zebys mi pomogl","chcę, żebyś mi pomogła","chce, zebys mi pomogla","chcę żebyś mi pomogła","chce zebys mi pomogla"],"placeholder":"Chcę, żebyś…"}
    ],
    "mnemonic":"🔗 Окончание — на союзе: żebym · żebyś · żebyśmy. Глагол — голая л-форма."
   },
   {
    "eyebrow":"Правило 2 · Один человек",
    "title":"<em>Uczę się, żeby zdać</em> — цель берёт инфинитив",
    "paras":[
      "Если оба глагола про одного и того же человека, придаточное не нужно. Цель делается коротко: <b>żeby</b> + инфинитив. <b>Uczę się, żeby zdać egzamin.</b> <b>Idę do sklepu, żeby kupić chleb.</b>",
      "Русский поступает точно так же: «учусь, чтобы сдать» — инфинитив; «хочу, чтобы ты сдал» — прошедшая форма. Развилка одна и та же в обоих языках, её достаточно один раз увидеть.",
      "Отдельно — глагол <b>chcieć</b>: когда речь о себе, он берёт голый инфинитив без всякого союза. <b>Chcę odpocząć.</b> Сказать «Chcę, żebym odpoczął» нельзя.",
      "Проверка в одну секунду: спроси себя, кто делает второе действие. Тот же человек — инфинитив. Другой — żeby с окончанием и л-форма."
    ],
    "audio":"Если оба глагола про одного и того же человека, придаточное не нужно. Цель делается коротко: żeby плюс инфинитив. Uczę się, żeby zdać egzamin. Idę do sklepu, żeby kupić chleb. Русский поступает точно так же: «учусь, чтобы сдать» — инфинитив; «хочу, чтобы ты сдал» — прошедшая форма. Отдельно глагол chcieć: когда речь о себе, он берёт голый инфинитив без всякого союза. Chcę odpocząć. Сказать «chcę, żebym odpoczął» нельзя. Проверка в одну секунду: спроси себя, кто делает второе действие. Тот же человек — инфинитив. Другой — żeby с окончанием и л-форма.",
    "table":{"rows":[
      ["Uczę się, <b>żeby zdać</b> egzamin. <button class=\"play\" data-say=\"Uczę się, żeby zdać egzamin\">🔊</button>","Учусь, чтобы сдать экзамен. (я и я)"],
      ["Chcę, <b>żebyś zdał</b> egzamin. <button class=\"play\" data-say=\"Chcę, żebyś zdał egzamin\">🔊</button>","Хочу, чтобы ты сдал экзамен. (я и ты)"],
      ["<b>Chcę odpocząć.</b> <button class=\"play\" data-say=\"Chcę odpocząć\">🔊</button>","Хочу отдохнуть. (без союза)"],
      ["Idę do sklepu, <b>żeby kupić</b> chleb. <button class=\"play\" data-say=\"Idę do sklepu, żeby kupić chleb\">🔊</button>","Иду в магазин, чтобы купить хлеб."],
      ["Dzwonię, <b>żeby zapytać</b> o termin. <button class=\"play\" data-say=\"Dzwonię, żeby zapytać o termin\">🔊</button>","Звоню, чтобы спросить о дате."]
    ],"star":0},
    "examples":[
      {"ru":"Повторяю грамматику, чтобы ничего не забыть.","en":"Powtarzam gramatykę, <b>żeby</b> niczego <b>nie zapomnieć</b>.","say":"Powtarzam gramatykę, żeby niczego nie zapomnieć."},
      {"ru":"Анна встала рано, чтобы успеть на экзамен.","en":"Anna wstała wcześnie, <b>żeby zdążyć</b> na egzamin.","gloss":"zdążyć na coś — успеть на что-то","say":"Anna wstała wcześnie, żeby zdążyć na egzamin."},
      {"ru":"Мы приехали пораньше, чтобы найти место.","en":"Przyjechaliśmy wcześniej, <b>żeby znaleźć</b> miejsce.","say":"Przyjechaliśmy wcześniej, żeby znaleźć miejsce."}
    ],
    "mistakes":[
      {"wrong":"Chcę, żebym odpoczął.","right":"<b>Chcę odpocząć.</b>","why":"один и тот же человек — придаточное не строим, идёт голый инфинитив."},
      {"wrong":"Uczę się, żebym zdał egzamin.","right":"Uczę się, <b>żeby zdać</b> egzamin.","why":"субъект тот же, поэтому после żeby стоит инфинитив, а не л-форма."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посчитай, сколько в предложении действующих лиц.",
       "q":"«Учусь, чтобы сдать экзамен» —","opts":["Uczę się, żebym zdał egzamin","Uczę się, żeby zdać egzamin","Uczę się, żeby zdam egzamin"],"answer":1,
       "explain":"Учусь я, сдавать буду тоже я — значит инфинитив: <b>żeby zdać</b>. Форма zdam после żeby невозможна вообще."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что делает chcieć, когда речь о себе.",
       "q":"«Хочу отдохнуть» —","opts":["Chcę, żebym odpoczął","Chcę odpocząć","Chcę, żeby odpocząć"],"answer":1,
       "explain":"Про себя chcieć берёт голый инфинитив: <b>Chcę odpocząć.</b>"},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Запятую перед żeby поставь мысленно.",
       "q":"Собери: <b>«Звоню, чтобы спросить о дате»</b>","answer":"Dzwonię żeby zapytać o termin"}
    ],
    "mnemonic":"🎯 Тот же человек → żeby + инфинитив. Другой человек → żebyś + л-форма."
   },
   {
    "eyebrow":"Правило 3 · Просьбы и советы",
    "title":"<em>Proszę, żebyś…</em> · <em>Radzę ci, żebyś…</em>",
    "paras":[
      "Союз живёт не только после chcieć. Он идёт после всех глаголов, которые чего-то добиваются от другого человека: <b>prosić</b> (просить), <b>radzić</b> (советовать), <b>woleć</b> (предпочитать), <b>powiedzieć</b> в смысле «велеть».",
      "<b>Proszę, żebyś przyszedł o piątej.</b> <b>Radzę ci, żebyś odpoczął.</b> <b>Wolę, żebyś został w domu.</b> Механика одна: окончание на союзе, глагол в л-форме.",
      "Русский совет часто идёт инфинитивом («советую тебе отдохнуть»), а польский любит развернуть его в придаточное: <b>Radzę ci, żebyś odpoczął</b>. Переводить дословно не надо — надо развернуть.",
      "И самая мягкая рамка: сегодняшний союз плюс вежливое «бы» из A2. <b>Chciałabym, żebyś mi pomógł</b> — «я хотела бы, чтобы ты мне помог». Так просят о серьёзном одолжении."
    ],
    "audio":"Союз живёт не только после chcieć. Он идёт после всех глаголов, которые чего-то добиваются от другого человека: prosić — просить, radzić — советовать, woleć — предпочитать, powiedzieć в смысле «велеть». Proszę, żebyś przyszedł o piątej. Radzę ci, żebyś odpoczął. Wolę, żebyś został w domu. Механика одна: окончание на союзе, глагол в л-форме. Русский совет часто идёт инфинитивом, а польский любит развернуть его в придаточное: radzę ci, żebyś odpoczął. И самая мягкая рамка: сегодняшний союз плюс вежливое «бы» из A2. Chciałabym, żebyś mi pomógł — я хотела бы, чтобы ты мне помог.",
    "table":{"rows":[
      ["<b>Proszę, żebyś</b> przyszedł o piątej. <button class=\"play\" data-say=\"Proszę, żebyś przyszedł o piątej\">🔊</button>","Прошу, чтобы ты пришёл в пять."],
      ["<b>Radzę ci, żebyś</b> odpoczął. <button class=\"play\" data-say=\"Radzę ci, żebyś odpoczął\">🔊</button>","Советую тебе отдохнуть."],
      ["<b>Wolę, żebyś</b> został w domu. <button class=\"play\" data-say=\"Wolę, żebyś został w domu\">🔊</button>","Я предпочитаю, чтобы ты остался дома."],
      ["Nauczycielka powiedziała, <b>żebyśmy</b> napisali esej. <button class=\"play\" data-say=\"Nauczycielka powiedziała, żebyśmy napisali esej\">🔊</button>","Учительница сказала, чтобы мы написали эссе."],
      ["<b>Chciałabym, żebyś</b> mi pomógł. <button class=\"play\" data-say=\"Chciałabym, żebyś mi pomógł\">🔊</button>","Я хотела бы, чтобы ты мне помог."]
    ],"star":1},
    "examples":[
      {"ru":"Прошу, чтобы вы позвонили завтра.","en":"Proszę, <b>żebyście zadzwonili</b> jutro.","say":"Proszę, żebyście zadzwonili jutro."},
      {"ru":"Врач посоветовал ей больше ходить пешком.","en":"Lekarz poradził jej, <b>żeby więcej chodziła</b> pieszo.","gloss":"польский разворачивает совет в придаточное","say":"Lekarz poradził jej, żeby więcej chodziła pieszo."},
      {"ru":"Марек предпочитает, чтобы мы приехали в субботу.","en":"Marek woli, <b>żebyśmy przyjechali</b> w sobotę.","say":"Marek woli, żebyśmy przyjechali w sobotę."}
    ],
    "mistakes":[
      {"wrong":"Radzę ci żebyś odpoczywałeś.","right":"Radzę ci, <b>żebyś odpoczął</b>.","why":"во-первых, запятая перед żeby обязательна; во-вторых, окончание уже на союзе, поэтому глагол — голая л-форма odpoczął."},
      {"wrong":"Proszę, że przyjdziesz o piątej.","right":"Proszę, <b>żebyś przyszedł</b> o piątej.","why":"że сообщает факт, żeby выражает волю. Просьба — всегда żeby."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь и союз, и форму глагола.",
       "q":"«Прошу, чтобы ты пришёл в пять» —","opts":["Proszę, że przyjdziesz o piątej","Proszę, żebyś przyszedł o piątej","Proszę, żeby przyszedłeś o piątej"],"answer":1,
       "explain":"Воля вводится союзом żeby, окончание -ś сидит на нём, а глагол стоит в л-форме: <b>Proszę, żebyś przyszedł</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> разверни русский совет в польское придаточное.",
       "q":"«Советую тебе отдохнуть» —","opts":["Radzę ci odpocząłeś","Radzę ci, żebyś odpoczął","Radzę ci, żeby odpoczywasz"],"answer":1,
       "explain":"Совет другому человеку идёт через <b>żebyś</b> плюс л-форма: Radzę ci, żebyś odpoczął."},
      {"type":"speak","howto":"Нажми микрофон и попроси вслух.",
       "target":"Chciałabym, żebyś mi pomógł.","sub":"я хотела бы, чтобы ты мне помог","want":"żebyś mi pomógł"}
    ],
    "mnemonic":"🙏 chcę · proszę · radzę · wolę — и дальше всегда żeby + л-форма."
   },
   {
    "eyebrow":"Правило 4 · Чтобы не",
    "title":"<em>żeby nie</em>, <em>po to, żeby</em> и книжное <em>aby</em>",
    "paras":[
      "Отрицательная цель делается так же, только с nie: <b>Ubierz się ciepło, żeby nie zmarznąć.</b> <b>Mów ciszej, żeby dzieci się nie obudziły.</b> Первое — один субъект, второе — разные; правило 2 работает и здесь.",
      "Когда цель хочется подчеркнуть, впереди ставят <b>po to</b>: <b>Mówię ci to po to, żebyś wiedział</b> — «говорю тебе это именно затем, чтобы ты знал».",
      "У союза есть книжный близнец <b>aby</b>: спрягается точно так же (<b>abym, abyś, abyśmy</b>) и значит то же самое. Ты встретишь его в объявлениях и текстах; в разговоре поляки говорят żeby.",
      "Микро-слот произношения: <b>ż</b> — это [ж], поэтому żeby звучит [же́бы]. Ударение, как всегда, на предпоследнем слоге, а кусочек -by- слогов не прибавляет — <b>żebyśmy</b> [же́быщмы], как chciałbym из A2."
    ],
    "audio":"Отрицательная цель делается так же, только с nie: ubierz się ciepło, żeby nie zmarznąć. Mów ciszej, żeby dzieci się nie obudziły. Первое — один субъект, второе — разные; правило два работает и здесь. Когда цель хочется подчеркнуть, впереди ставят po to: mówię ci to po to, żebyś wiedział — говорю тебе это именно затем, чтобы ты знал. У союза есть книжный близнец aby: спрягается точно так же — abym, abyś, abyśmy — и значит то же самое. Ты встретишь его в объявлениях и текстах; в разговоре поляки говорят żeby. И микро-слот произношения: ż — это ж, поэтому żeby звучит же́бы. Ударение, как всегда, на предпоследнем слоге, а кусочек by слогов не прибавляет: żebyśmy, как chciałbym из A2.",
    "table":{"rows":[
      ["Ubierz się ciepło, <b>żeby nie zmarznąć</b>. <button class=\"play\" data-say=\"Ubierz się ciepło, żeby nie zmarznąć\">🔊</button>","Оденься тепло, чтобы не замёрзнуть."],
      ["Mów ciszej, <b>żeby</b> dzieci się <b>nie obudziły</b>. <button class=\"play\" data-say=\"Mów ciszej, żeby dzieci się nie obudziły\">🔊</button>","Говори тише, чтобы дети не проснулись."],
      ["Mówię ci to <b>po to, żebyś wiedział</b>. <button class=\"play\" data-say=\"Mówię ci to po to, żebyś wiedział\">🔊</button>","Говорю тебе это затем, чтобы ты знал."],
      ["<b>aby</b> = <b>żeby</b> <button class=\"play\" data-say=\"abym, abyś, abyśmy\">🔊</button>","книжный близнец: abym, abyś, abyśmy"],
      ["żeby [же́бы] · żebyśmy [же́быщмы]","ż = [ж]; кусочек -by- слогов не прибавляет"]
    ],"star":0},
    "examples":[
      {"ru":"Выйди раньше, чтобы не опоздать.","en":"Wyjdź wcześniej, <b>żeby się nie spóźnić</b>.","gloss":"spóźnić się — опоздать","say":"Wyjdź wcześniej, żeby się nie spóźnić."},
      {"ru":"Я записываю всё, чтобы не забыть.","en":"Zapisuję wszystko, <b>żeby nie zapomnieć</b>.","gloss":"za- работает как русская приставка за-","say":"Zapisuję wszystko, żeby nie zapomnieć."},
      {"ru":"Он сказал это затем, чтобы мы не волновались.","en":"Powiedział to <b>po to, żebyśmy się nie martwili</b>.","say":"Powiedział to po to, żebyśmy się nie martwili."}
    ],
    "mistakes":[
      {"wrong":"Wyjdź wcześniej, żebyś nie spóźnisz się.","right":"Wyjdź wcześniej, <b>żeby się nie spóźnić</b>.","why":"выходишь ты и опоздать можешь тоже ты — один субъект, значит инфинитив. И формы настоящего или будущего времени после żeby не бывает никогда."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> сначала посчитай субъекты, потом смотри на форму.",
       "q":"«Оденься тепло, чтобы не замёрзнуть» —","opts":["Ubierz się ciepło, żeby nie zmarzniesz","Ubierz się ciepło, żeby nie zmarznąć","Ubierz się ciepło, żebyś nie zmarzniesz"],"answer":1,
       "explain":"Субъект один — идёт инфинитив: <b>żeby nie zmarznąć</b>. После żeby настоящего и будущего времени не бывает."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни книжного близнеца.",
       "q":"Что значит <b>abyś</b> в тексте объявления?","opts":["то же, что żebyś","то же, что jeśli","то же, что że"],"answer":0,
       "explain":"<b>aby</b> — книжный вариант żeby и спрягается так же: abym, abyś, abyśmy."},
      {"type":"type","howto":"<b>Что делать:</b> напиши цель одним куском. Диакритику можно не ставить.",
       "q":"«Повторяю грамматику, чтобы не забыть»","accept":["powtarzam gramatykę, żeby nie zapomnieć","powtarzam gramatyke, zeby nie zapomniec","powtarzam gramatykę żeby nie zapomnieć","powtarzam gramatyke zeby nie zapomniec"],"placeholder":"Powtarzam gramatykę, …"}
    ],
    "mnemonic":"🧣 żeby nie + инфинитив (сам) · żeby ktoś nie + л-форма (другой)."
   }
 ],
 "dialogue":{
   "intro":"Анна записалась на экзамен и подходит к Мареку с просьбой. Тапни по строке — услышишь фразу; сосчитай по дороге, сколько раз прозвучит żeby.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Marek, chcę cię o coś poprosić.","ru":"Марек, хочу тебя кое о чём попросить.",
      "words":[["chcę","хочу"],["poprosić","попросить"]]},
     {"who":"M","name":"Marek","side":"right","en":"Mów śmiało. Coś się stało?","ru":"Говори смело. Что-то случилось?",
      "words":[["śmiało","смело"],["Coś się stało?","что-то случилось?"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zapisałam się na egzamin certyfikatowy. Chcę, żebyś mi pomógł.","ru":"Я записалась на сертификатный экзамен. Хочу, чтобы ты мне помог.",
      "words":[["Zapisałam się","я записалась"],["żebyś mi pomógł","чтобы ты мне помог"]]},
     {"who":"M","name":"Marek","side":"right","en":"Jasne. Co mam robić?","ru":"Конечно. Что мне делать?",
      "words":[["Jasne","конечно"],["Co mam robić?","что мне делать?"]]},
     {"who":"A","name":"Anna","side":"left","en":"Proszę, żebyś czytał ze mną teksty po polsku.","ru":"Прошу, чтобы ты читал со мной тексты по-польски.",
      "words":[["Proszę, żebyś","прошу, чтобы ты"],["teksty","тексты"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dobrze. Radzę ci też, żebyś pisała krótkie eseje.","ru":"Хорошо. Ещё советую тебе писать короткие эссе.",
      "words":[["Radzę ci","советую тебе"],["eseje","эссе"]]},
     {"who":"A","name":"Anna","side":"left","en":"Powtarzam gramatykę codziennie, żeby niczego nie zapomnieć.","ru":"Повторяю грамматику каждый день, чтобы ничего не забыть.",
      "words":[["Powtarzam","повторяю"],["żeby nie zapomnieć","чтобы не забыть"]]},
     {"who":"M","name":"Marek","side":"right","en":"Wolę, żebyś odpoczywała w niedziele. Inaczej się zmęczysz.","ru":"Я предпочитаю, чтобы ты отдыхала по воскресеньям. Иначе устанешь.",
      "words":[["Wolę","предпочитаю"],["Inaczej","иначе"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zgoda. Chcę zdać za pierwszym razem.","ru":"Согласна. Хочу сдать с первого раза.",
      "words":[["Zgoda","согласна"],["za pierwszym razem","с первого раза"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка: звонок в экзаменационный центр. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Dzień dobry, dzwonię, żeby zapytać o egzamin.","ru":"Здравствуйте, звоню, чтобы спросить об экзамене."},
     {"who":"B","en":"Słucham, w czym mogę pomóc?","ru":"Слушаю, чем могу помочь?"},
     {"who":"A","en":"Chciałabym, żeby ktoś sprawdził moje zgłoszenie.","ru":"Я хотела бы, чтобы кто-нибудь проверил мою заявку."},
     {"who":"B","en":"Proszę, żeby pani podała mi numer zgłoszenia.","ru":"Прошу, чтобы вы назвали мне номер заявки."},
     {"who":"A","en":"Oczywiście. Chcę tylko, żeby wszystko było gotowe na czas.","ru":"Разумеется. Я просто хочу, чтобы всё было готово вовремя."},
     {"who":"B","en":"Wszystko się zgadza. Powodzenia na egzaminie!","ru":"Всё в порядке. Удачи на экзамене!"}
   ]
 },
 "vocab":{
   "intro":"Слова дня — просьбы, советы и всё, что связано с экзаменом.",
   "items":[
     {"en":"żeby / aby","ru":"чтобы (второе — книжное)","ex":"Chcę, żebyś przyszedł."},
     {"en":"chcę, żebyś…","ru":"хочу, чтобы ты…","ex":"Chcę, żebyś mi pomógł."},
     {"en":"proszę, żebyś…","ru":"прошу, чтобы ты…","ex":"Proszę, żebyś przyszedł o piątej."},
     {"en":"radzić komuś","ru":"советовать кому-то","ex":"Radzę ci, żebyś odpoczął."},
     {"en":"woleć","ru":"предпочитать","ex":"Wolę, żebyś został w domu."},
     {"en":"egzamin certyfikatowy","ru":"сертификатный экзамен","ex":"Zapisałam się na egzamin certyfikatowy."},
     {"en":"zdawać / zdać egzamin","ru":"сдавать / сдать экзамен","ex":"Zdaję egzamin w maju i chcę go zdać."},
     {"en":"powtarzać","ru":"повторять","ex":"Powtarzam gramatykę codziennie."},
     {"en":"zdążyć na coś","ru":"успеть на что-то","ex":"Wstałam wcześnie, żeby zdążyć na egzamin."},
     {"en":"esej","ru":"эссе","ex":"Napisałam krótki esej."},
     {"en":"po to, żeby","ru":"для того, чтобы","ex":"Mówię ci to po to, żebyś wiedział."},
     {"en":"zapomnieć","ru":"забыть","ex":"Zapisuję wszystko, żeby nie zapomnieć."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["Chcę, żebyś przyszedł","хочу, чтобы ты пришёл"],["żeby zdać egzamin","чтобы сдать экзамен"],["Radzę ci, żebyś odpoczął","советую тебе отдохнуть"],["żeby nie zapomnieć","чтобы не забыть"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Анна готовится к экзамену. Обрати внимание, где после żeby стоит инфинитив, а где л-форма.",
   "title":"Chcę zdać ten egzamin",
   "sentences":["W maju zdaję egzamin certyfikatowy.","Chcę, żeby wszystko poszło dobrze.","Poprosiłam Marka, żeby czytał ze mną teksty.","Marek radzi mi, żebym pisała krótkie eseje.","Codziennie powtarzam gramatykę, żeby niczego nie zapomnieć.","Wstaję wcześnie, żeby mieć spokojną godzinę rano.","Mama chce, żebym odpoczywała w weekendy.","Nie chcę, żeby ktoś mi wtedy przeszkadzał.","Uczę się po to, żeby czuć się pewnie.","Jeszcze miesiąc — i będzie po wszystkim."],
   "translation":"В мае я сдаю сертификатный экзамен. Хочу, чтобы всё прошло хорошо. Я попросила Марека, чтобы он читал со мной тексты. Марек советует мне писать короткие эссе. Каждый день повторяю грамматику, чтобы ничего не забыть. Встаю рано, чтобы у меня был спокойный час утром. Мама хочет, чтобы я отдыхала по выходным. Не хочу, чтобы кто-то мне тогда мешал. Я учусь для того, чтобы чувствовать себя уверенно. Ещё месяц — и всё будет позади."
 },
 "quiz":{
   "intro":"Пять вопросов — и сердце третьей недели у тебя в руках.",
   "items":[
     {"q":"1. «Хочу, чтобы ты пришла» —","opts":["Chcę, żebyś przyjdziesz","Chcę, żebyś przyszła","Chcę, że przyjdziesz"],"answer":1,
      "explain":"После żeby стоит только л-форма: <b>przyszła</b>. Будущее время туда не ставят никогда."},
     {"q":"2. «Учусь, чтобы сдать экзамен» —","opts":["Uczę się, żeby zdać egzamin","Uczę się, żebym zdał egzamin","Uczę się, żeby zdam egzamin"],"answer":0,
      "explain":"Субъект один — <b>żeby</b> плюс инфинитив."},
     {"q":"3. Где сидит личное окончание?","opts":["Marek chce, żeby pomogłem","Marek chce, żebym pomógł","Marek chce, żebym pomogę"],"answer":1,
      "explain":"Окончание уходит к союзу: <b>żebym</b>, глагол остаётся голой л-формой pomógł."},
     {"q":"4. «Советую тебе отдохнуть» —","opts":["Radzę ci, żebyś odpoczął","Radzę ci, że odpoczniesz","Radzę ci odpoczywałeś"],"answer":0,
      "explain":"Совет другому человеку разворачивается в придаточное: <b>Radzę ci, żebyś odpoczął</b>."},
     {"q":"5. Книжный близнец żeby —","opts":["aby","albo","ale"],"answer":0,
      "explain":"<b>aby</b> значит то же самое и спрягается так же: abym, abyś, abyśmy."}
   ]
 },
 "essay":{
   "intro":"Сегодня попробуй сказать не «сделай», а «хочу, чтобы ты сделал» — тон меняется полностью.",
   "prompt":"Напиши 4–5 предложений: чего ты хочешь от близкого человека, о чём его попросишь, что ему посоветуешь и ради какой цели ты сейчас учишься.",
   "hint":"Опора: Chcę, żebyś… · Proszę, żebyś… · Radzę ci, żebyś… · Uczę się, żeby… · żeby nie… 📚",
   "example":"Chcę, żebyś częściej do mnie dzwonił. Proszę, żebyś przyszedł w sobotę — mam dużo pracy w domu. Radzę ci, żebyś odpoczął w niedzielę, bo wyglądasz na zmęczonego. Ja uczę się codziennie, żeby zdać egzamin w maju. Powtarzam wszystko wieczorem, żeby niczego nie zapomnieć."
 }
},
"16": {
 "day":16,"week":"03",
 "themeRu":"Если бы да кабы",
 "themeEn":"Gdyby",
 "intro":"Анна мечтает вслух: «Если бы я сдала экзамен, я бы искала работу поинтереснее». Такое «если бы» собирается из того же кубика by, что и вчерашний żeby, — только союз здесь <b>gdyby</b>. А рядом живёт его трезвый сосед <b>jeśli</b>: реальное условие, без всяких «бы».",
 "introAudio":"Анна мечтает вслух: «Если бы я сдала экзамен, я бы искала работу поинтереснее». Такое «если бы» собирается из того же кубика by, что и вчерашний żeby, только союз здесь gdyby. А рядом живёт его трезвый сосед jeśli: реальное условие, без всяких «бы».",
 "goals":[
   "Строить ирреальное условие: <b>Gdybym miał czas, pojechałbym</b>",
   "Спрягать союз: <b>gdybym, gdybyś, gdyby, gdybyśmy, gdybyście</b>",
   "Отличать реальное условие (<b>jeśli będę mieć czas, pojadę</b>) от мечты",
   "Говорить о несбывшемся: <b>Gdyby nie ty…</b> · <b>Na twoim miejscu…</b>"
 ],
 "learned":[
   "Построил(а) ирреальное условие: Gdybym miał czas, pojechałbym",
   "Проспрягал(а) союз: gdybym, gdybyś, gdyby, gdybyśmy, gdybyście",
   "Отличил(а) реальное условие от мечты: jeśli будущее — gdyby с by",
   "Сказал(а) о несбывшемся: Gdyby nie ty… · Na twoim miejscu…"
 ],
 "review":{
   "intro":"Разминка по вчерашнему żeby — и, как всегда, по одному вопросу про приставку и про вид.",
   "introAudio":"Разминка по вчерашнему żeby — и, как всегда, по одному вопросу про приставку и про вид.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> проверь форму глагола после союза.",
      "q":"«Хочу, чтобы ты остался» —","opts":["Chcę, żebyś zostaniesz","Chcę, żebyś został","Chcę, że zostaniesz"],"answer":1,
      "explain":"После żeby идёт только л-форма: <b>został</b>. Будущее время туда не ставится."},
     {"type":"choice","howto":"<b>Что делать:</b> посчитай действующих лиц.",
      "q":"«Иду в магазин, чтобы купить хлеб» —","opts":["Idę do sklepu, żebym kupił chleb","Idę do sklepu, żeby kupić chleb","Idę do sklepu, żeby kupię chleb"],"answer":1,
      "explain":"Иду я и куплю я — один субъект, значит инфинитив: <b>żeby kupić</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> найди, где сидит личное окончание.",
      "q":"«Прошу, чтобы вы позвонили» —","opts":["Proszę, żebyście zadzwonili","Proszę, żeby zadzwoniliście","Proszę, żebyście zadzwonicie"],"answer":0,
      "explain":"Окончание -ście уходит к союзу: <b>żebyście</b>, глагол остаётся голым."},
     {"type":"choice","howto":"<b>Что делать:</b> приставка держит весь смысл.",
      "q":"«Мы доехали до Кракова в пять» — ___ do Krakowa o piątej.","opts":["Wyjechaliśmy","Dojechaliśmy","Przejechaliśmy"],"answer":1,
      "explain":"do- отвечает русскому до-: <b>dojechaliśmy</b>. Wyjechaliśmy — выехали, przejechaliśmy — проехали."},
     {"type":"choice","howto":"<b>Что делать:</b> смотри на маркер длительности.",
      "q":"Cały wieczór ___ ten tekst.","opts":["przeczytałam","czytałam","przeczytam"],"answer":1,
      "explain":"«Весь вечер» — процесс, значит несовершенный вид: <b>czytałam</b>."},
     {"type":"type","howto":"Напиши просьбу целиком. Диакритику можно не ставить.",
      "q":"«Прошу, чтобы ты пришёл в пять»","accept":["proszę, żebyś przyszedł o piątej","prosze, zebys przyszedl o piatej","proszę żebyś przyszedł o piątej","prosze zebys przyszedl o piatej"],"placeholder":"Proszę, żebyś…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Мечта",
    "title":"<em>Gdybym miał czas, pojechałbym…</em>",
    "paras":[
      "Ирреальное условие — «если бы» — вводится союзом <b>gdyby</b>, и он спрягается точно так же, как вчерашний żeby: <b>gdybym, gdybyś, gdyby, gdybyśmy, gdybyście, gdyby</b>.",
      "После союза — снова прошедшая <b>л-форма</b>: <b>Gdybym miał czas…</b> Как в русском «если бы у меня было время»: тоже прошедшая форма, тоже без «есть».",
      "Вторая половина фразы не остаётся в стороне: в ней тоже нужен by, приклеенный к глаголу, — <b>pojechałbym, pojechałabym, kupilibyśmy</b>. По-русски «я бы поехал»; по-польски то же самое, просто «бы» приросло.",
      "Запятая между частями обязательна. Порядок свободный: <b>Pojechałbym nad morze, gdybym miał czas</b> — смысл тот же, ударение чуть другое."
    ],
    "audio":"Ирреальное условие — «если бы» — вводится союзом gdyby, и он спрягается точно так же, как вчерашний żeby: gdybym, gdybyś, gdyby, gdybyśmy, gdybyście, gdyby. После союза снова прошедшая л-форма: gdybym miał czas. Как в русском «если бы у меня было время»: тоже прошедшая форма. Вторая половина фразы не остаётся в стороне: в ней тоже нужен by, приклеенный к глаголу — pojechałbym, pojechałabym, kupilibyśmy. По-русски «я бы поехал»; по-польски то же самое, просто «бы» приросло. Запятая между частями обязательна. Порядок свободный: pojechałbym nad morze, gdybym miał czas — смысл тот же.",
    "table":{"rows":[
      ["<b>Gdybym miał</b> czas, <b>pojechałbym</b> nad morze. <button class=\"play\" data-say=\"Gdybym miał czas, pojechałbym nad morze\">🔊</button>","Если бы у меня было время, я бы поехал к морю."],
      ["<b>Gdybym miała</b> czas, <b>pojechałabym</b> nad morze. <button class=\"play\" data-say=\"Gdybym miała czas, pojechałabym nad morze\">🔊</button>","то же самое, говорит женщина"],
      ["<b>Gdybyś</b> mnie <b>zapytał</b>, <b>powiedziałbym</b> prawdę. <button class=\"play\" data-say=\"Gdybyś mnie zapytał, powiedziałbym prawdę\">🔊</button>","Если бы ты меня спросил, я бы сказал правду."],
      ["<b>Gdyby</b> Marek <b>wiedział</b>, <b>pomógłby</b> nam. <button class=\"play\" data-say=\"Gdyby Marek wiedział, pomógłby nam\">🔊</button>","Если бы Марек знал, он бы нам помог."],
      ["<b>Gdybyśmy mieli</b> więcej pieniędzy, <b>kupilibyśmy</b> dom. <button class=\"play\" data-say=\"Gdybyśmy mieli więcej pieniędzy, kupilibyśmy dom\">🔊</button>","Если бы у нас было больше денег, мы бы купили дом."],
      ["<b>Pojechałbym</b> nad morze, <b>gdybym miał</b> czas.","обратный порядок — тот же смысл"]
    ],"star":0},
    "examples":[
      {"ru":"Если бы я сдала экзамен, я бы искала работу поинтереснее.","en":"<b>Gdybym zdała</b> egzamin, <b>szukałabym</b> ciekawszej pracy.","gloss":"zdać в л-форме: zdał / zdała","say":"Gdybym zdała egzamin, szukałabym ciekawszej pracy."},
      {"ru":"Если бы вы захотели, вы могли бы остаться до утра.","en":"<b>Gdybyście chcieli</b>, <b>moglibyście</b> zostać do rana.","say":"Gdybyście chcieli, moglibyście zostać do rana."},
      {"ru":"Что бы ты сделал, если бы выиграл миллион?","en":"Co <b>byś zrobił</b>, <b>gdybyś wygrał</b> milion?","gloss":"частица by умеет отходить влево — из A2","say":"Co byś zrobił, gdybyś wygrał milion?"}
    ],
    "mistakes":[
      {"wrong":"Gdybym będę miał czas, pojechałbym.","right":"<b>Gdybym miał</b> czas, pojechałbym.","why":"после gdyby стоит только л-форма — будущего времени там не бывает, как и после żeby."},
      {"wrong":"Gdybym miałbym czas, pojechałbym.","right":"<b>Gdybym miał</b> czas, pojechałbym.","why":"личное окончание уже сидит на союзе (gdybym), поэтому глагол остаётся голым. Двух окончаний подряд не бывает."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь форму после союза.",
       "q":"«Если бы у меня было время, я бы поехал к морю» —","opts":["Gdybym będę miał czas, pojechałbym nad morze","Gdybym miał czas, pojechałbym nad morze","Gdybym miałbym czas, pojadę nad morze"],"answer":1,
       "explain":"После gdyby — л-форма <b>miał</b>, а во второй части глагол с by: <b>pojechałbym</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри, кто говорит и о ком.",
       "q":"Анна: «Если бы я сдала экзамен, я была бы счастлива» —","opts":["Gdyby zdałam egzamin, byłabym szczęśliwa","Gdybym zdała egzamin, byłabym szczęśliwa","Gdybym zdam egzamin, będę szczęśliwa"],"answer":1,
       "explain":"Окончание -m уходит к союзу: <b>gdybym</b>, глагол — голая л-форма zdała."},
      {"type":"type","howto":"Напиши фразу целиком. Диакритику можно не ставить.",
       "q":"«Если бы у меня было время, я бы отдохнул(а)»","accept":["gdybym miał czas, odpocząłbym","gdybym mial czas, odpoczalbym","gdybym miała czas, odpoczęłabym","gdybym miala czas, odpoczelabym","gdybym miał czas odpocząłbym","gdybym miała czas odpoczęłabym"],"placeholder":"Gdybym miał(a) czas, …"}
    ],
    "mnemonic":"💭 gdyby + л-форма → и во второй части by: Gdybym miał, pojechałbym."
   },
   {
    "eyebrow":"Правило 2 · Реальное условие",
    "title":"<em>Jeśli będę mieć czas, pojadę</em>",
    "paras":[
      "Если условие вполне реальное, никакого «бы» не нужно вообще. Работает союз <b>jeśli</b> (или <b>jeżeli</b>, чуть более книжный) плюс обычное будущее время: <b>Jeśli będę mieć czas, pojadę nad morze.</b>",
      "Тут русский совпадает с польским целиком: «если будет время, поеду» — будущее в обеих частях. Английский в такой фразе ставит настоящее время, польский и русский — будущее. Ничего перестраивать не надо.",
      "Разница между союзами — это разница между «может быть» и «этого не будет». <b>Jeśli zdam, pójdę na studia</b> — экзамен впереди, шанс реальный. <b>Gdybym zdała, poszłabym na studia</b> — мечта или сожаление.",
      "Смешивать нельзя: <b>jeśli</b> идёт с обычным временем, <b>gdyby</b> — с by. Фразы вида «jeśli будущее + глагол с by» звучат сломанно."
    ],
    "audio":"Если условие вполне реальное, никакого «бы» не нужно вообще. Работает союз jeśli, или чуть более книжный jeżeli, плюс обычное будущее время: jeśli będę mieć czas, pojadę nad morze. Тут русский совпадает с польским целиком: «если будет время, поеду» — будущее в обеих частях. Английский в такой фразе ставит настоящее время, польский и русский — будущее. Разница между союзами — это разница между «может быть» и «этого не будет». Jeśli zdam, pójdę na studia — экзамен впереди, шанс реальный. Gdybym zdała, poszłabym na studia — мечта или сожаление. Смешивать нельзя: jeśli идёт с обычным временем, gdyby — с by.",
    "table":{"rows":[
      ["<b>Jeśli będę mieć</b> czas, <b>pojadę</b> nad morze. <button class=\"play\" data-say=\"Jeśli będę mieć czas, pojadę nad morze\">🔊</button>","Если будет время, поеду к морю. (реально)"],
      ["<b>Gdybym miał</b> czas, <b>pojechałbym</b> nad morze. <button class=\"play\" data-say=\"Gdybym miał czas, pojechałbym nad morze\">🔊</button>","Если бы было время… (мечта)"],
      ["<b>Jeśli zdam</b> egzamin, <b>pójdę</b> na studia. <button class=\"play\" data-say=\"Jeśli zdam egzamin, pójdę na studia\">🔊</button>","Если сдам экзамен, пойду учиться."],
      ["<b>Jeżeli</b> jutro <b>będzie</b> ładna pogoda, <b>pójdziemy</b> na spacer. <button class=\"play\" data-say=\"Jeżeli jutro będzie ładna pogoda, pójdziemy na spacer\">🔊</button>","Если завтра будет хорошая погода, пойдём гулять."],
      ["<b>Jeśli chcesz</b>, mogę ci pomóc. <button class=\"play\" data-say=\"Jeśli chcesz, mogę ci pomóc\">🔊</button>","Если хочешь, могу тебе помочь."]
    ],"star":0},
    "examples":[
      {"ru":"Если сдам, отпразднуем в субботу.","en":"<b>Jeśli zdam</b>, <b>będziemy świętować</b> w sobotę.","say":"Jeśli zdam, będziemy świętować w sobotę."},
      {"ru":"Если у тебя не будет времени, скажи сразу.","en":"<b>Jeśli nie będziesz mieć</b> czasu, powiedz od razu.","gloss":"отрицание переводит дополнение в родительный: czasu","say":"Jeśli nie będziesz mieć czasu, powiedz od razu."},
      {"ru":"Если бы у тебя не было времени, ты бы сказал сразу.","en":"<b>Gdybyś nie miał</b> czasu, <b>powiedziałbyś</b> od razu.","say":"Gdybyś nie miał czasu, powiedziałbyś od razu."}
    ],
    "mistakes":[
      {"wrong":"Gdyby będę mieć czas, pojadę.","right":"<b>Jeśli będę mieć</b> czas, pojadę.","why":"условие реальное — значит союз jeśli и обычное будущее время. Gdyby требует л-формы и by."},
      {"wrong":"Jeśli będę mieć czas, pojechałbym.","right":"<b>Jeśli będę mieć</b> czas, <b>pojadę</b>.","why":"половинки должны быть из одного мира: реальное условие — реальный результат, без by."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, реальное это условие или мечта.",
       "q":"«Если будет время, поеду к морю» —","opts":["Gdybym miał czas, pojechałbym nad morze","Jeśli będę mieć czas, pojadę nad morze","Jeśli będę mieć czas, pojechałbym nad morze"],"answer":1,
       "explain":"Время вполне может найтись — значит <b>jeśli</b> плюс будущее в обеих частях, как в русском."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на вторую половину фразы.",
       "q":"Какой вариант собран правильно?","opts":["Jeśli zdam, poszłabym na studia","Gdybym zdała, poszłabym na studia","Gdybym zdam, pójdę na studia"],"answer":1,
       "explain":"Обе половинки из мира мечты: <b>gdybym zdała</b> — <b>poszłabym</b>. Смешивать jeśli и by нельзя."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Запятую поставь мысленно.",
       "q":"Собери: <b>«Если сдам экзамен, пойду учиться»</b>","answer":"Jeśli zdam egzamin pójdę na studia"}
    ],
    "mnemonic":"🔀 jeśli + будущее (реально) · gdyby + л-форма + by (мечта). Мосты между мирами не строим."
   },
   {
    "eyebrow":"Правило 3 · Если бы не",
    "title":"<em>Gdyby nie ty…</em> и <em>Na twoim miejscu…</em>",
    "paras":[
      "Очень частый оборот благодарности: <b>Gdyby nie ty, nie zdałabym tego egzaminu</b> — «если бы не ты, я бы не сдала этот экзамен». После gdyby nie идёт просто существительное или местоимение, глагола там нет.",
      "Так же говорят и о причине неудачи: <b>Gdyby nie ten deszcz, poszlibyśmy na spacer.</b> Русская конструкция совпадает до слова.",
      "Совет через чужую шкуру: <b>Na twoim miejscu odpocząłbym</b> — «на твоём месте я бы отдохнул». Форма глагола — та же самая, с by; союз здесь не нужен вовсе.",
      "И очень вежливая просьба, которую ты услышишь в учреждении: <b>Gdyby pan mógł powtórzyć, byłbym wdzięczny</b> — «если бы вы могли повторить, я был бы признателен». Это верхний этаж вежливости после czy mógłby pan из A2."
    ],
    "audio":"Очень частый оборот благодарности: gdyby nie ty, nie zdałabym tego egzaminu — если бы не ты, я бы не сдала этот экзамен. После gdyby nie идёт просто существительное или местоимение, глагола там нет. Так же говорят о причине неудачи: gdyby nie ten deszcz, poszlibyśmy na spacer. Русская конструкция совпадает до слова. Совет через чужую шкуру: na twoim miejscu odpocząłbym — на твоём месте я бы отдохнул. Форма глагола та же самая, с by; союз здесь не нужен вовсе. И очень вежливая просьба, которую ты услышишь в учреждении: gdyby pan mógł powtórzyć, byłbym wdzięczny — если бы вы могли повторить, я был бы признателен.",
    "table":{"rows":[
      ["<b>Gdyby nie ty</b>, nie zdałabym. <button class=\"play\" data-say=\"Gdyby nie ty, nie zdałabym\">🔊</button>","Если бы не ты, я бы не сдала."],
      ["<b>Gdyby nie</b> ten deszcz, poszlibyśmy na spacer. <button class=\"play\" data-say=\"Gdyby nie ten deszcz, poszlibyśmy na spacer\">🔊</button>","Если бы не этот дождь, мы бы пошли гулять."],
      ["<b>Na twoim miejscu</b> odpocząłbym. <button class=\"play\" data-say=\"Na twoim miejscu odpocząłbym\">🔊</button>","На твоём месте я бы отдохнул."],
      ["<b>Na twoim miejscu</b> powtórzyłabym gramatykę. <button class=\"play\" data-say=\"Na twoim miejscu powtórzyłabym gramatykę\">🔊</button>","На твоём месте я бы повторила грамматику."],
      ["<b>Gdyby pan mógł</b> powtórzyć, byłbym wdzięczny. <button class=\"play\" data-say=\"Gdyby pan mógł powtórzyć, byłbym wdzięczny\">🔊</button>","Если бы вы могли повторить, я был бы признателен."]
    ],"star":2},
    "examples":[
      {"ru":"Если бы не Марек, я бы не начала готовиться вовремя.","en":"<b>Gdyby nie Marek</b>, nie <b>zaczęłabym</b> się uczyć na czas.","say":"Gdyby nie Marek, nie zaczęłabym się uczyć na czas."},
      {"ru":"На твоём месте я бы позвонила ещё раз.","en":"<b>Na twoim miejscu zadzwoniłabym</b> jeszcze raz.","say":"Na twoim miejscu zadzwoniłabym jeszcze raz."},
      {"ru":"Если бы не эта работа, мы бы жили в Кракове.","en":"<b>Gdyby nie</b> ta praca, <b>mieszkalibyśmy</b> w Krakowie.","say":"Gdyby nie ta praca, mieszkalibyśmy w Krakowie."}
    ],
    "mistakes":[
      {"wrong":"Gdyby nie byłeś ty, nie zdałabym.","right":"<b>Gdyby nie ty</b>, nie zdałabym.","why":"после gdyby nie глагол не нужен: сразу имя или местоимение."},
      {"wrong":"Na twoim miejscu odpocznę.","right":"Na twoim miejscu <b>odpocząłbym</b>.","why":"это не план, а совет-предположение — значит глагол с by."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что идёт сразу после gdyby nie.",
       "q":"«Если бы не ты, я бы не сдала» —","opts":["Gdyby nie byłeś ty, nie zdałabym","Gdyby nie ty, nie zdałabym","Jeśli nie ty, nie zdam"],"answer":1,
       "explain":"После <b>gdyby nie</b> идёт местоимение без глагола, а во второй части — форма с by."},
      {"type":"choice","howto":"<b>Что делать:</b> совет-предположение всегда идёт с by.",
       "q":"«На твоём месте я бы повторила грамматику» —","opts":["Na twoim miejscu powtórzę gramatykę","Na twoim miejscu powtórzyłabym gramatykę","Na twoim miejscu żebym powtórzyła gramatykę"],"answer":1,
       "explain":"Это предположение, а не план: <b>powtórzyłabym</b>. Союз здесь вообще не нужен."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Gdyby nie ty, nie zdałabym tego egzaminu.","sub":"если бы не ты, я бы не сдала этот экзамен","want":"Gdyby nie ty"}
    ],
    "mnemonic":"🙌 Gdyby nie ty… · Na twoim miejscu… — благодарность и совет одной формой."
   },
   {
    "eyebrow":"Правило 4 · Несбывшееся прошлое",
    "title":"<em>Gdybym wtedy wiedziała…</em>",
    "paras":[
      "Сожаление о прошлом строится теми же формами, что и мечта о будущем: <b>Gdybym wtedy wiedziała, nie poszłabym tam</b> — «если бы я тогда знала, я бы туда не пошла».",
      "Отдельного «прошлого сослагательного» учить не нужно: время подсказывают слова <b>wtedy, wczoraj, rok temu</b> и сам контекст. Русский делает ровно то же — «если бы я знала» годится и про вчера, и про завтра.",
      "Отсюда же — самый частый вопрос вечерних разговоров: <b>Co byś zrobił, gdybyś wygrał milion?</b> Частица by в вопросе охотно отходит влево, к вопросительному слову: <b>Co byś zrobiła…?</b> Это уже знакомо по A2.",
      "И маленькая ловушка порядка: если фраза начинается с главной части, союз просто переезжает в конец, а запятая остаётся: <b>Nie poszłabym tam, gdybym wtedy wiedziała.</b>"
    ],
    "audio":"Сожаление о прошлом строится теми же формами, что и мечта о будущем: gdybym wtedy wiedziała, nie poszłabym tam — если бы я тогда знала, я бы туда не пошла. Отдельного прошлого сослагательного учить не нужно: время подсказывают слова wtedy, wczoraj, rok temu и сам контекст. Русский делает ровно то же. Отсюда же самый частый вопрос вечерних разговоров: co byś zrobił, gdybyś wygrał milion? Частица by в вопросе охотно отходит влево, к вопросительному слову. И маленькая ловушка порядка: если фраза начинается с главной части, союз просто переезжает в конец, а запятая остаётся: nie poszłabym tam, gdybym wtedy wiedziała.",
    "table":{"rows":[
      ["<b>Gdybym wtedy wiedziała</b>, nie <b>poszłabym</b> tam. <button class=\"play\" data-say=\"Gdybym wtedy wiedziała, nie poszłabym tam\">🔊</button>","Если бы я тогда знала, я бы туда не пошла."],
      ["<b>Gdybyś wczoraj przyszedł</b>, <b>zobaczyłbyś</b> Marka. <button class=\"play\" data-say=\"Gdybyś wczoraj przyszedł, zobaczyłbyś Marka\">🔊</button>","Если бы ты вчера пришёл, ты бы увидел Марека."],
      ["<b>Co byś zrobił</b>, <b>gdybyś wygrał</b> milion? <button class=\"play\" data-say=\"Co byś zrobił, gdybyś wygrał milion?\">🔊</button>","Что бы ты сделал, если бы выиграл миллион?"],
      ["<b>Gdzie byś pojechała</b>, <b>gdybyś miała</b> miesiąc wolnego? <button class=\"play\" data-say=\"Gdzie byś pojechała, gdybyś miała miesiąc wolnego?\">🔊</button>","Куда бы ты поехала, если бы у тебя был свободный месяц?"],
      ["Nie <b>poszłabym</b> tam, <b>gdybym wtedy wiedziała</b>.","обратный порядок, запятая на месте"]
    ],"star":0},
    "examples":[
      {"ru":"Если бы я год назад начала учить польский, сейчас было бы легче.","en":"<b>Gdybym rok temu zaczęła</b> uczyć się polskiego, teraz <b>byłoby</b> łatwiej.","gloss":"uczyć się чего — родительный: polskiego","say":"Gdybym rok temu zaczęła uczyć się polskiego, teraz byłoby łatwiej."},
      {"ru":"Что бы ты сделала, если бы у тебя был свободный месяц?","en":"Co <b>byś zrobiła</b>, <b>gdybyś miała</b> wolny miesiąc?","say":"Co byś zrobiła, gdybyś miała wolny miesiąc?"},
      {"ru":"Мы бы не опоздали, если бы вышли раньше.","en":"Nie <b>spóźnilibyśmy się</b>, <b>gdybyśmy wyszli</b> wcześniej.","say":"Nie spóźnilibyśmy się, gdybyśmy wyszli wcześniej."}
    ],
    "mistakes":[
      {"wrong":"Co zrobisz, gdybyś wygrał milion?","right":"<b>Co byś zrobił</b>, gdybyś wygrał milion?","why":"вопрос о выдуманной ситуации тоже требует by: co byś zrobił."},
      {"wrong":"Gdybym wtedy wiedziałam, nie poszłam tam.","right":"Gdybym wtedy wiedziała, nie <b>poszłabym</b> tam.","why":"во второй части нужна форма с by; и после gdybym глагол стоит голым: wiedziała, а не wiedziałam."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь обе половинки.",
       "q":"«Если бы ты вчера пришёл, ты бы увидел Марека» —","opts":["Gdybyś wczoraj przyjdziesz, zobaczysz Marka","Gdybyś wczoraj przyszedł, zobaczyłbyś Marka","Gdybyś wczoraj przyszedłeś, zobaczyłbyś Marka"],"answer":1,
       "explain":"После gdybyś — голая л-форма <b>przyszedł</b>, а во второй части глагол с by: zobaczyłbyś."},
      {"type":"choice","howto":"<b>Что делать:</b> вопрос о выдуманном тоже просит by.",
       "q":"«Что бы ты сделал, если бы выиграл миллион?» —","opts":["Co zrobisz, gdybyś wygrał milion?","Co byś zrobił, gdybyś wygrał milion?","Co byś zrobiłbyś, gdyby wygrałeś milion?"],"answer":1,
       "explain":"<b>Co byś zrobił</b> — частица отходит к вопросительному слову, окончание уходит вместе с ней."},
      {"type":"type","howto":"Напиши мечту о прошлом. Диакритику можно не ставить.",
       "q":"«Если бы не ты, я бы не сдал(а)»","accept":["gdyby nie ty, nie zdałbym","gdyby nie ty, nie zdalbym","gdyby nie ty, nie zdałabym","gdyby nie ty, nie zdalabym","gdyby nie ty nie zdałbym","gdyby nie ty nie zdałabym"],"placeholder":"Gdyby nie ty, …"}
    ],
    "mnemonic":"⏳ Одна форма на два времени: gdybym wiedziała — и про вчера, и про завтра."
   }
 ],
 "dialogue":{
   "intro":"Вечер после занятий: Анна с Мареком мечтают вслух. Тапни по строке — и заметь, что мечты идут с gdyby, а планы с jeśli.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Gdybym zdała ten egzamin, byłoby mi o wiele łatwiej.","ru":"Если бы я сдала этот экзамен, мне было бы намного легче.",
      "words":[["Gdybym zdała","если бы я сдала"],["o wiele","намного"]]},
     {"who":"M","name":"Marek","side":"right","en":"Zdasz. A jeśli nie zdasz, spróbujesz jeszcze raz.","ru":"Сдашь. А если не сдашь, попробуешь ещё раз.",
      "words":[["jeśli","если"],["spróbujesz","попробуешь"]]},
     {"who":"A","name":"Anna","side":"left","en":"Gdybym miała więcej czasu, uczyłabym się spokojniej.","ru":"Если бы у меня было больше времени, я бы училась спокойнее.",
      "words":[["więcej czasu","больше времени"],["spokojniej","спокойнее"]]},
     {"who":"M","name":"Marek","side":"right","en":"Na twoim miejscu odpoczywałbym w soboty.","ru":"На твоём месте я бы отдыхал по субботам.",
      "words":[["Na twoim miejscu","на твоём месте"],["w soboty","по субботам"]]},
     {"who":"A","name":"Anna","side":"left","en":"Jeśli będę mieć wolny dzień, pojedziemy nad wodę.","ru":"Если у меня будет свободный день, поедем к воде.",
      "words":[["wolny dzień","свободный день"],["nad wodę","к воде"]]},
     {"who":"M","name":"Marek","side":"right","en":"Gdyby nie ten egzamin, byłabyś teraz na wakacjach.","ru":"Если бы не этот экзамен, ты была бы сейчас в отпуске.",
      "words":[["Gdyby nie","если бы не"],["na wakacjach","в отпуске"]]},
     {"who":"A","name":"Anna","side":"left","en":"Gdybyśmy mieli więcej pieniędzy, pojechalibyśmy znowu do Włoch.","ru":"Если бы у нас было больше денег, мы бы снова поехали в Италию.",
      "words":[["pieniędzy","денег"],["znowu","снова"]]},
     {"who":"M","name":"Marek","side":"right","en":"Kto wie. Co byś zrobiła, gdybyś wygrała milion?","ru":"Кто знает. Что бы ты сделала, если бы выиграла миллион?",
      "words":[["Kto wie","кто знает"],["wygrała","выиграла"]]},
     {"who":"A","name":"Anna","side":"left","en":"Kupiłabym mały dom pod Krakowem i uczyłabym się bez pośpiechu.","ru":"Купила бы маленький дом под Краковом и училась бы без спешки.",
      "words":[["Kupiłabym","я бы купила"],["bez pośpiechu","без спешки"]]}
   ]
 },
 "scene":{
   "intro":"Сценка на кухне: двое соседей и одна протечка. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Gdyby nie pani, mieszkanie byłoby pod wodą.","ru":"Если бы не вы, квартира была бы под водой."},
     {"who":"B","en":"Drobiazg. Na pani miejscu zadzwoniłabym do hydraulika.","ru":"Пустяки. На вашем месте я бы позвонила водопроводчику."},
     {"who":"A","en":"Jeśli przyjdzie dziś, zapłacę więcej.","ru":"Если он придёт сегодня, я заплачу больше."},
     {"who":"B","en":"Gdybym miała jego numer, dałabym go pani od razu.","ru":"Если бы у меня был его номер, я бы дала его вам сразу."},
     {"who":"A","en":"Znajdę w internecie. Dziękuję za pomoc!","ru":"Найду в интернете. Спасибо за помощь!"}
   ]
 },
 "vocab":{
   "intro":"Слова дня — мечты, условия и вежливые предположения.",
   "items":[
     {"en":"gdyby","ru":"если бы","ex":"Gdybym miał czas, pojechałbym."},
     {"en":"jeśli / jeżeli","ru":"если (реально)","ex":"Jeśli będę mieć czas, pojadę."},
     {"en":"gdyby nie…","ru":"если бы не…","ex":"Gdyby nie ty, nie zdałabym."},
     {"en":"na twoim miejscu","ru":"на твоём месте","ex":"Na twoim miejscu odpocząłbym."},
     {"en":"wygrać","ru":"выиграть","ex":"Co byś zrobił, gdybyś wygrał milion?"},
     {"en":"spróbować","ru":"попробовать","ex":"Spróbujesz jeszcze raz."},
     {"en":"wdzięczny","ru":"признательный, благодарный","ex":"Byłbym wdzięczny."},
     {"en":"o wiele","ru":"намного","ex":"Byłoby mi o wiele łatwiej."},
     {"en":"bez pośpiechu","ru":"без спешки","ex":"Uczyłabym się bez pośpiechu."},
     {"en":"wolny dzień","ru":"свободный день","ex":"Jeśli będę mieć wolny dzień, pojedziemy nad wodę."},
     {"en":"spóźnić się","ru":"опоздать","ex":"Nie spóźnilibyśmy się, gdybyśmy wyszli wcześniej."},
     {"en":"świętować","ru":"праздновать","ex":"Jeśli zdam, będziemy świętować."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["Gdybym miał czas","если бы у меня было время"],["Jeśli będę mieć czas","если у меня будет время"],["Gdyby nie ty","если бы не ты"],["Na twoim miejscu","на твоём месте"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, о чём мечтает Анна за две недели до экзамена. Замечай, где мечта, а где реальный план.",
   "title":"Gdybym miała więcej czasu",
   "sentences":["Do egzaminu zostały dwa tygodnie.","Gdybym miała więcej czasu, uczyłabym się spokojniej.","Gdyby nie praca, siedziałabym nad książkami cały dzień.","Jeśli zdam, poszukam nowej pracy.","Jeżeli nie zdam, spróbuję jeszcze raz jesienią.","Marek mówi, że na moim miejscu odpoczywałby w niedziele.","Może ma rację — gdybym nie odpoczywała, byłabym ciągle zmęczona.","Gdyby nie on, nie zaczęłabym się uczyć na czas.","Co byś zrobił, gdybyś miał wolny miesiąc?","Ja pojechałabym nad morze i wzięłabym ze sobą tylko jedną książkę."],
   "translation":"До экзамена осталось две недели. Если бы у меня было больше времени, я бы училась спокойнее. Если бы не работа, я бы сидела над книгами весь день. Если сдам, поищу новую работу. Если не сдам, попробую ещё раз осенью. Марек говорит, что на моём месте он бы отдыхал по воскресеньям. Может, он прав — если бы я не отдыхала, я была бы постоянно уставшей. Если бы не он, я бы не начала готовиться вовремя. Что бы ты сделал, если бы у тебя был свободный месяц? Я бы поехала к морю и взяла с собой только одну книгу."
 },
 "quiz":{
   "intro":"Пять вопросов — и «если бы» перестанет путаться с «если».",
   "items":[
     {"q":"1. «Если бы у меня было время, я бы поехал» —","opts":["Gdybym będę miał czas, pojechałbym","Gdybym miał czas, pojechałbym","Gdybym miałbym czas, pojadę"],"answer":1,
      "explain":"После gdyby — голая л-форма <b>miał</b>, а во второй части глагол с by."},
     {"q":"2. «Если будет время, поеду» —","opts":["Jeśli będę mieć czas, pojadę","Gdyby będę mieć czas, pojadę","Jeśli będę mieć czas, pojechałbym"],"answer":0,
      "explain":"Реальное условие — <b>jeśli</b> плюс будущее в обеих частях, ровно как в русском."},
     {"q":"3. «Если бы не ты…» —","opts":["Gdyby nie byłeś ty","Gdyby nie ty","Jeśli nie ty"],"answer":1,
      "explain":"После <b>gdyby nie</b> глагол не нужен — сразу имя или местоимение."},
     {"q":"4. «На твоём месте я бы отдохнул» —","opts":["Na twoim miejscu odpocznę","Na twoim miejscu odpocząłbym","Na twoim miejscu żebym odpoczął"],"answer":1,
      "explain":"Совет-предположение идёт с by: <b>odpocząłbym</b>."},
     {"q":"5. Где сидит личное окончание?","opts":["Gdyby miałem czas…","Gdybym miał czas…","Gdybym miałem czas…"],"answer":1,
      "explain":"Окончание -m уходит к союзу: <b>gdybym</b>, глагол остаётся голым."}
   ]
 },
 "essay":{
   "intro":"Помечтай сегодня письменно — заодно потренируешь обе половинки конструкции.",
   "prompt":"Напиши 4–5 предложений: что бы ты сделал(а), если бы у тебя был свободный месяц; чего бы не случилось, если бы не один важный человек; и один реальный план на эту неделю с jeśli.",
   "hint":"Опора: Gdybym miał(a)… , …-bym · Gdyby nie… · Na twoim miejscu… · Jeśli będę mieć…, … 🌅",
   "example":"Gdybym miała wolny miesiąc, pojechałabym nad morze. Wzięłabym ze sobą dwie książki i nie patrzyłabym na telefon. Gdyby nie Marek, nie zaczęłabym się uczyć na czas. Na jego miejscu odpoczywałabym częściej. Jeśli w sobotę będzie ładna pogoda, pójdziemy razem na długi spacer."
 }
},
"17": {
 "day":17,"week":"03",
 "themeRu":"Он сказал, что…",
 "themeEn":"Mowa zależna",
 "intro":"Вчера ты строил(а) миры, которых нет. Сегодня — самый практичный навык разговора: пересказ. «Он сказал, что придёт», «она спросила, приду ли я» — и здесь польский делает щедрый подарок: времена в пересказе <b>не сдвигаются</b>, ровно как в русском. Анне позвонили из экзаменационного центра, и весь день она будет это пересказывать.",
 "introAudio":"Вчера ты строил(а) миры, которых нет. Сегодня — самый практичный навык разговора: пересказ. «Он сказал, что придёт», «она спросила, приду ли я» — и здесь польский делает щедрый подарок: времена в пересказе не сдвигаются, ровно как в русском. Анне позвонили из экзаменационного центра, и весь день она будет это пересказывать.",
 "goals":[
   "Пересказывать чужие слова: <b>powiedział, że przyjdzie</b>",
   "Задавать косвенный вопрос: <b>spytał, czy…</b> (czy = «ли»)",
   "Передавать просьбу и распоряжение: <b>poprosił, żebym…</b> · <b>kazał mi…</b>",
   "Менять лицо и слова времени, не трогая само время глагола"
 ],
 "learned":[
   "Пересказал(а) чужие слова: powiedział, że przyjdzie",
   "Задал(а) косвенный вопрос: spytał, czy… (czy — это «ли»)",
   "Передал(а) просьбу и распоряжение: poprosił, żebym… · kazał mi…",
   "Поменял(а) лицо и слова времени, не трогая само время глагола"
 ],
 "review":{
   "intro":"Сначала вчерашние миры: gdyby против jeśli. И привычная пара вопросов — приставка и вид.",
   "introAudio":"Сначала вчерашние миры: gdyby против jeśli. И привычная пара вопросов — приставка и вид.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> проверь форму после союза.",
      "q":"«Если бы у меня было время, я бы позвонил» —","opts":["Gdybym będę miał czas, zadzwoniłbym","Gdybym miał czas, zadzwoniłbym","Gdybym miałbym czas, zadzwonię"],"answer":1,
      "explain":"После gdyby идёт голая л-форма <b>miał</b>, а во второй части глагол с by."},
     {"type":"choice","howto":"<b>Что делать:</b> реши, реальное это условие или мечта.",
      "q":"«Если завтра будет хорошая погода, пойдём гулять» —","opts":["Gdyby jutro była ładna pogoda, pójdziemy na spacer","Jeśli jutro będzie ładna pogoda, pójdziemy na spacer","Jeśli jutro będzie ładna pogoda, poszlibyśmy na spacer"],"answer":1,
      "explain":"Погода вполне может быть хорошей — реальное условие: <b>jeśli</b> плюс будущее в обеих частях."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни оборот благодарности.",
      "q":"«Если бы не ты, я бы не сдала» —","opts":["Gdyby nie ty, nie zdałabym","Gdyby nie byłeś ty, nie zdałabym","Jeśli nie ty, nie zdam"],"answer":0,
      "explain":"После <b>gdyby nie</b> глагол не нужен, а во второй части — форма с by."},
     {"type":"choice","howto":"<b>Что делать:</b> приставка держит весь смысл.",
      "q":"«Подпиши здесь, пожалуйста» — Proszę tu ___.","opts":["napisać","podpisać","przepisać"],"answer":1,
      "explain":"pod- работает как русское под-: <b>podpisać</b>. Przepisać — переписать."},
     {"type":"choice","howto":"<b>Что делать:</b> ищи маркер повторяемости.",
      "q":"Co wieczór ___ dziennik. (пишу дневник)","opts":["napiszę","piszę","napisałem"],"answer":1,
      "explain":"«Каждый вечер» — регулярность, значит несовершенный вид: <b>piszę</b>."},
     {"type":"type","howto":"Напиши реальное условие. Диакритику можно не ставить.",
      "q":"«Если будет время, поеду в Краков»","accept":["jeśli będę mieć czas, pojadę do krakowa","jesli bede miec czas, pojade do krakowa","jeśli będę miał czas, pojadę do krakowa","jeśli będę miała czas, pojadę do krakowa","jesli bede mial czas, pojade do krakowa","jesli bede miala czas, pojade do krakowa"],"placeholder":"Jeśli będę mieć czas, …"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Подарок недели",
    "title":"<em>Powiedział, że przyjdzie</em> — время не двигается",
    "paras":[
      "Пересказ строится просто: глагол речи, запятая, <b>że</b>, дальше обычное предложение. <b>Marek powiedział, że przyjdzie o piątej.</b>",
      "И вот подарок. Английский и испанский в такой фразе обязаны отодвинуть время назад («he said he would come»). Польский и русский этого не делают: как человек сказал — так и остаётся. <b>«Przyjdę o piątej»</b> → <b>Powiedział, że przyjdzie o piątej.</b> Будущее осталось будущим.",
      "Меняется только лицо — потому что говорит уже другой человек: его <b>przyjdę</b> становится <b>przyjdzie</b>, его <b>jestem zmęczony</b> — <b>że jest zmęczony</b>. Притяжательные тоже переезжают: <b>«mój laptop»</b> → <b>że jego laptop nie działa</b>.",
      "Запятая перед że обязательна, как в русском перед «что». А вот кавычек в пересказе нет — они остаются прямой речи."
    ],
    "audio":"Пересказ строится просто: глагол речи, запятая, że, дальше обычное предложение. Marek powiedział, że przyjdzie o piątej. И вот подарок. Английский и испанский в такой фразе обязаны отодвинуть время назад. Польский и русский этого не делают: как человек сказал, так и остаётся. Przyjdę o piątej — powiedział, że przyjdzie o piątej. Будущее осталось будущим. Меняется только лицо, потому что говорит уже другой человек: его przyjdę становится przyjdzie, его jestem zmęczony — że jest zmęczony. Притяжательные тоже переезжают: mój laptop — że jego laptop nie działa. Запятая перед że обязательна, как в русском перед «что».",
    "table":{"rows":[
      ["«Przyjdę o piątej» → <b>Powiedział, że przyjdzie</b> o piątej. <button class=\"play\" data-say=\"Powiedział, że przyjdzie o piątej\">🔊</button>","будущее осталось будущим"],
      ["«Jestem zmęczona» → <b>Powiedziała, że jest zmęczona</b>. <button class=\"play\" data-say=\"Powiedziała, że jest zmęczona\">🔊</button>","настоящее осталось настоящим"],
      ["«Byłem w Krakowie» → <b>Powiedział, że był</b> w Krakowie. <button class=\"play\" data-say=\"Powiedział, że był w Krakowie\">🔊</button>","прошедшее осталось прошедшим"],
      ["«Mój laptop nie działa» → <b>że jego laptop nie działa</b> <button class=\"play\" data-say=\"Powiedział, że jego laptop nie działa\">🔊</button>","переезжает только притяжательное"],
      ["<b>Powiedział mi, że…</b> <button class=\"play\" data-say=\"Powiedział mi, że nie może przyjść\">🔊</button>","«сказал мне» — дательный падеж: mi, ci, jej"]
    ],"star":0},
    "examples":[
      {"ru":"Марек сказал, что не сможет прийти.","en":"Marek <b>powiedział, że</b> nie <b>będzie mógł</b> przyjść.","gloss":"сложное будущее из A2","say":"Marek powiedział, że nie będzie mógł przyjść."},
      {"ru":"Она сказала мне, что уже написала эссе.","en":"<b>Powiedziała mi, że</b> już <b>napisała</b> esej.","say":"Powiedziała mi, że już napisała esej."},
      {"ru":"Он обещал, что позвонит вечером.","en":"<b>Obiecał, że zadzwoni</b> wieczorem.","say":"Obiecał, że zadzwoni wieczorem."},
      {"ru":"Они ответили, что экзамен будет в мае.","en":"<b>Odpowiedzieli, że</b> egzamin <b>będzie</b> w maju.","say":"Odpowiedzieli, że egzamin będzie w maju."}
    ],
    "mistakes":[
      {"wrong":"Powiedział, że przyjdziesz o piątej.","right":"Powiedział, że <b>przyjdzie</b> o piątej.","why":"пересказываешь ты, значит лицо меняется: его «przyjdę» превращается в przyjdzie."},
      {"wrong":"Powiedział że przyjdzie.","right":"Powiedział<b>,</b> że przyjdzie.","why":"запятая перед że обязательна — точно как перед русским «что»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь, не поехало ли время назад.",
       "q":"Марек: «Przyjdę o piątej». Пересказ —","opts":["Powiedział, że przyszedłby o piątej","Powiedział, że przyjdzie o piątej","Powiedział, że przyszedł o piątej"],"answer":1,
       "explain":"Время не сдвигается: было будущее — осталось будущее, <b>przyjdzie</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, чей ноутбук.",
       "q":"Марек: «Mój laptop nie działa». Пересказ —","opts":["Powiedział, że mój laptop nie działa","Powiedział, że jego laptop nie działa","Powiedział, że twój laptop nie działa"],"answer":1,
       "explain":"Ноутбук его — значит <b>jego</b>. Само время глагола при этом не трогаем."},
      {"type":"type","howto":"Напиши пересказ с запятой. Диакритику можно не ставить.",
       "q":"Анна: «Jestem zmęczona». Перескажи: «Она сказала, что устала»","accept":["powiedziała, że jest zmęczona","powiedziala, ze jest zmeczona","powiedziała że jest zmęczona","powiedziala ze jest zmeczona"],"placeholder":"Powiedziała, że …"}
    ],
    "mnemonic":"🎁 Как сказал — так и осталось. Меняется лицо, не время."
   },
   {
    "eyebrow":"Правило 2 · Косвенный вопрос",
    "title":"<em>Spytał, czy…</em> — czy это «ли»",
    "paras":[
      "Вопрос без вопросительного слова пересказывается через <b>czy</b>: <b>Spytał, czy mam czas</b> — «спросил, есть ли у меня время». Русское «ли» и польское czy — одно и то же место в предложении, только czy стоит в начале придаточного.",
      "Если в вопросе было вопросительное слово, оно и остаётся, а czy не нужно: <b>Spytała, gdzie mieszkam. Zapytał, kiedy wrócę. Nie wiem, co robić.</b>",
      "Ловушка, на которой спотыкаются почти все: <b>czy</b> — это «ли», а <b>jeśli</b> — «если». <b>Nie wiem, czy przyjdzie</b> значит «не знаю, придёт ли он». Сказать здесь jeśli нельзя — получится условие, а не вопрос.",
      "Два глагола вопроса живут рядом: <b>pytać / spytać</b> и <b>zapytać</b>. Спрашивают <b>kogoś o coś</b>: <b>Zapytał mnie o egzamin</b> — «спросил меня об экзамене»."
    ],
    "audio":"Вопрос без вопросительного слова пересказывается через czy: spytał, czy mam czas — спросил, есть ли у меня время. Русское «ли» и польское czy — одно и то же место в предложении, только czy стоит в начале придаточного. Если в вопросе было вопросительное слово, оно и остаётся, а czy не нужно: spytała, gdzie mieszkam; zapytał, kiedy wrócę; nie wiem, co robić. Ловушка, на которой спотыкаются почти все: czy — это «ли», а jeśli — «если». Nie wiem, czy przyjdzie значит «не знаю, придёт ли он». Сказать здесь jeśli нельзя. Два глагола вопроса живут рядом: pytać, spytać и zapytać. Спрашивают kogoś o coś: zapytał mnie o egzamin.",
    "table":{"rows":[
      ["«Masz czas?» → <b>Spytał, czy mam</b> czas. <button class=\"play\" data-say=\"Spytał, czy mam czas\">🔊</button>","Спросил, есть ли у меня время."],
      ["«Zdałaś?» → <b>Zapytała, czy zdałam</b>. <button class=\"play\" data-say=\"Zapytała, czy zdałam\">🔊</button>","Спросила, сдала ли я."],
      ["«Gdzie mieszkasz?» → <b>Spytała, gdzie mieszkam</b>. <button class=\"play\" data-say=\"Spytała, gdzie mieszkam\">🔊</button>","с вопросительным словом czy не нужно"],
      ["«Kiedy wrócisz?» → <b>Zapytał, kiedy wrócę</b>. <button class=\"play\" data-say=\"Zapytał, kiedy wrócę\">🔊</button>","Спросил, когда я вернусь."],
      ["<b>Nie wiem, czy</b> przyjdzie. <button class=\"play\" data-say=\"Nie wiem, czy przyjdzie\">🔊</button>","Не знаю, придёт ли он."],
      ["<b>zapytać kogoś o coś</b> <button class=\"play\" data-say=\"Zapytał mnie o egzamin\">🔊</button>","Zapytał mnie o egzamin."]
    ],"star":4},
    "examples":[
      {"ru":"Она спросила, готова ли я.","en":"<b>Spytała, czy</b> jestem gotowa.","say":"Spytała, czy jestem gotowa."},
      {"ru":"Я спросил, нужно ли приходить раньше.","en":"<b>Spytałem, czy</b> trzeba przyjść wcześniej.","gloss":"trzeba — безличное «нужно», это завтрашняя тема","say":"Spytałem, czy trzeba przyjść wcześniej."},
      {"ru":"Не знаю, придёт ли он сегодня.","en":"Nie wiem, <b>czy</b> dziś przyjdzie.","say":"Nie wiem, czy dziś przyjdzie."},
      {"ru":"Марек спросил, где будет экзамен.","en":"Marek <b>spytał, gdzie</b> będzie egzamin.","say":"Marek spytał, gdzie będzie egzamin."}
    ],
    "mistakes":[
      {"wrong":"Nie wiem, jeśli przyjdzie.","right":"Nie wiem, <b>czy</b> przyjdzie.","why":"«ли» — это czy. Jeśli значит «если» и вводит условие, а не вопрос."},
      {"wrong":"Spytał, czy gdzie mieszkam.","right":"Spytał, <b>gdzie</b> mieszkam.","why":"если в вопросе есть вопросительное слово, czy не ставят: одно из двух."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> найди русское «ли».",
       "q":"«Он спросил, есть ли у меня время» —","opts":["Spytał, jeśli mam czas","Spytał, czy mam czas","Spytał, że mam czas"],"answer":1,
       "explain":"«Ли» — это <b>czy</b>. Jeśli значит «если», że сообщает факт."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, есть ли в вопросе вопросительное слово.",
       "q":"«Она спросила, где я живу» —","opts":["Spytała, czy gdzie mieszkam","Spytała, gdzie mieszkam","Spytała, że gdzie mieszkam"],"answer":1,
       "explain":"Вопросительное слово уже есть — <b>gdzie</b>, значит czy не нужно."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Запятую поставь мысленно.",
       "q":"Собери: <b>«Не знаю, придёт ли он»</b>","answer":"Nie wiem czy przyjdzie"}
    ],
    "mnemonic":"❓ czy = «ли» · jeśli = «если». Одно спрашивает, другое ставит условие."
   },
   {
    "eyebrow":"Правило 3 · Чужая просьба",
    "title":"<em>Poprosił, żebym przyszedł</em>",
    "paras":[
      "Пересказ просьбы возвращает нас ко дню 15: чужая воля вводится союзом <b>żeby</b> с личным окончанием. <b>Poprosił, żebym przyszedł wcześniej.</b> <b>Powiedziała, żebyś się nie martwił.</b>",
      "Логика прозрачная: <b>że</b> передаёт информацию, <b>żeby</b> — волю. «Сказал, что придёт» — że; «сказал, чтобы я пришёл» — żeby. Русский делит эти два случая ровно так же.",
      "Распоряжение начальства или учителя чаще идёт через <b>kazać</b>, и вот тут придаточное не нужно: <b>kazać komuś</b> + инфинитив. <b>Szef kazał mi zostać dłużej.</b> <b>Nauczyciel kazał nam napisać esej.</b>",
      "Мягкая форма отказа в пересказе: <b>Poprosił, żebym nie dzwonił wieczorem</b> — «попросил, чтобы я не звонил вечером». Отрицание ставится перед глаголом, союз не меняется."
    ],
    "audio":"Пересказ просьбы возвращает нас ко дню пятнадцать: чужая воля вводится союзом żeby с личным окончанием. Poprosił, żebym przyszedł wcześniej. Powiedziała, żebyś się nie martwił. Логика прозрачная: że передаёт информацию, żeby — волю. «Сказал, что придёт» — że; «сказал, чтобы я пришёл» — żeby. Русский делит эти два случая ровно так же. Распоряжение начальства или учителя чаще идёт через kazać, и тут придаточное не нужно: kazać komuś плюс инфинитив. Szef kazał mi zostać dłużej. Nauczyciel kazał nam napisać esej. Мягкая форма отказа в пересказе: poprosił, żebym nie dzwonił wieczorem.",
    "table":{"rows":[
      ["<b>Poprosił, żebym przyszedł</b> wcześniej. <button class=\"play\" data-say=\"Poprosił, żebym przyszedł wcześniej\">🔊</button>","Попросил, чтобы я пришёл раньше."],
      ["<b>Powiedziała, żebyś</b> się <b>nie martwił</b>. <button class=\"play\" data-say=\"Powiedziała, żebyś się nie martwił\">🔊</button>","Сказала, чтобы ты не волновался."],
      ["<b>Powiedział, że</b> przyjdzie. <button class=\"play\" data-say=\"Powiedział, że przyjdzie\">🔊</button>","информация — że"],
      ["<b>Powiedział, żebym</b> przyszedł. <button class=\"play\" data-say=\"Powiedział, żebym przyszedł\">🔊</button>","воля — żeby"],
      ["<b>Szef kazał mi zostać</b> dłużej. <button class=\"play\" data-say=\"Szef kazał mi zostać dłużej\">🔊</button>","kazać komuś + инфинитив"]
    ],"star":2},
    "examples":[
      {"ru":"Они попросили, чтобы я взяла паспорт.","en":"<b>Poprosili, żebym wzięła</b> paszport.","gloss":"wziąć в л-форме: wziął / wzięła","say":"Poprosili, żebym wzięła paszport."},
      {"ru":"Мама сказала, чтобы мы позвонили вечером.","en":"Mama <b>powiedziała, żebyśmy zadzwonili</b> wieczorem.","say":"Mama powiedziała, żebyśmy zadzwonili wieczorem."},
      {"ru":"Учитель велел нам написать эссе.","en":"Nauczyciel <b>kazał nam napisać</b> esej.","say":"Nauczyciel kazał nam napisać esej."},
      {"ru":"Он попросил, чтобы я не звонил вечером.","en":"<b>Poprosił, żebym nie dzwonił</b> wieczorem.","say":"Poprosił, żebym nie dzwonił wieczorem."}
    ],
    "mistakes":[
      {"wrong":"Poprosił, żebym przyjdę wcześniej.","right":"Poprosił, <b>żebym przyszedł</b> wcześniej.","why":"после żeby стоит только л-форма — настоящее и будущее туда не ставят никогда."},
      {"wrong":"Powiedział, że przyszedłem wcześniej. (в смысле «велел прийти»)","right":"Powiedział, <b>żebym przyszedł</b> wcześniej.","why":"że передаёт факт, żeby передаёт волю. Просьбу вводит только żeby."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, это информация или воля.",
       "q":"«Он попросил, чтобы я пришёл раньше» —","opts":["Poprosił, że przyjdę wcześniej","Poprosił, żebym przyszedł wcześniej","Poprosił, żebym przyjdę wcześniej"],"answer":1,
       "explain":"Просьбу вводит <b>żeby</b>, а после него — л-форма przyszedł. Форма przyjdę там невозможна."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что kazać берёт после себя.",
       "q":"«Шеф велел мне остаться дольше» —","opts":["Szef kazał mi zostać dłużej","Szef kazał mi, że zostanę dłużej","Szef kazał mnie zostawać dłużej"],"answer":0,
       "explain":"<b>kazać komuś</b> плюс инфинитив: kazał mi zostać. Человек стоит в дательном — mi."},
      {"type":"speak","howto":"Нажми микрофон и перескажи вслух.",
       "target":"Poprosił, żebym przyszedł wcześniej.","sub":"он попросил, чтобы я пришёл раньше","want":"żebym przyszedł"}
    ],
    "mnemonic":"📣 że — информация. żeby — воля. kazać — инфинитив без союза."
   },
   {
    "eyebrow":"Правило 4 · Слова пересказа",
    "title":"<em>Twierdzi, dodał, odpowiedział</em> — и слова времени",
    "paras":[
      "Один <b>powiedział</b> быстро надоедает. Рядом живут: <b>mówi</b> (говорит), <b>opowiadał</b> (рассказывал), <b>odpowiedział</b> (ответил), <b>dodał</b> (добавил), <b>twierdzi</b> (утверждает), <b>obiecał</b> (обещал), <b>przyznał</b> (признал).",
      "Все они работают одинаково: запятая, <b>że</b> — и обычное предложение. <b>Dodał, że zadzwoni wieczorem. Twierdzi, że nic nie wiedział.</b>",
      "Время глагола мы не трогаем, а вот слова времени подстраиваются по смыслу — как и в русском. Если пересказываешь через неделю, чужое <b>«jutro»</b> становится <b>następnego dnia</b>, а <b>«dziś»</b> — <b>tego dnia</b>. Пересказываешь в тот же вечер — оставляешь как было.",
      "Кому сказали — дательный падеж: <b>powiedział mi, ci, jej, nam</b>. А спрашивают <b>kogoś</b> — винительный: <b>zapytał mnie, ciebie, ją</b>. Две разные рамки, обе знакомы с A2."
    ],
    "audio":"Один powiedział быстро надоедает. Рядом живут: mówi — говорит, opowiadał — рассказывал, odpowiedział — ответил, dodał — добавил, twierdzi — утверждает, obiecał — обещал, przyznał — признал. Все они работают одинаково: запятая, że, и обычное предложение. Dodał, że zadzwoni wieczorem. Twierdzi, że nic nie wiedział. Время глагола мы не трогаем, а слова времени подстраиваются по смыслу, как и в русском. Если пересказываешь через неделю, чужое jutro становится następnego dnia, а dziś — tego dnia. Пересказываешь в тот же вечер — оставляешь как было. Кому сказали — дательный падеж: powiedział mi, ci, jej, nam. А спрашивают kogoś, винительный: zapytał mnie, ciebie, ją.",
    "table":{"rows":[
      ["<b>Odpowiedział, że</b> nie wie. <button class=\"play\" data-say=\"Odpowiedział, że nie wie\">🔊</button>","Ответил, что не знает."],
      ["<b>Dodał, że</b> zadzwoni wieczorem. <button class=\"play\" data-say=\"Dodał, że zadzwoni wieczorem\">🔊</button>","Добавил, что позвонит вечером."],
      ["<b>Twierdzi, że</b> nic nie wiedział. <button class=\"play\" data-say=\"Twierdzi, że nic nie wiedział\">🔊</button>","Утверждает, что ничего не знал."],
      ["<b>Obiecał, że</b> pomoże. <button class=\"play\" data-say=\"Obiecał, że pomoże\">🔊</button>","Обещал, что поможет."],
      ["«jutro» → <b>następnego dnia</b> <button class=\"play\" data-say=\"Powiedział, że przyjdzie następnego dnia\">🔊</button>","слова времени подстраиваются по смыслу"],
      ["powiedział <b>mi</b> · zapytał <b>mnie</b> <button class=\"play\" data-say=\"Powiedział mi, zapytał mnie\">🔊</button>","дательный при powiedzieć, винительный при zapytać"]
    ],"star":5},
    "examples":[
      {"ru":"Она ответила, что экзамен будет двадцатого мая.","en":"<b>Odpowiedziała, że</b> egzamin <b>będzie</b> dwudziestego maja.","say":"Odpowiedziała, że egzamin będzie dwudziestego maja."},
      {"ru":"Он добавил, что нужно прийти на полчаса раньше.","en":"<b>Dodał, że</b> trzeba przyjść pół godziny wcześniej.","say":"Dodał, że trzeba przyjść pół godziny wcześniej."},
      {"ru":"Марек спросил меня об экзамене, а я ответила, что всё в порядке.","en":"Marek <b>zapytał mnie</b> o egzamin, a ja <b>odpowiedziałam, że</b> wszystko w porządku.","say":"Marek zapytał mnie o egzamin, a ja odpowiedziałam, że wszystko w porządku."}
    ],
    "mistakes":[
      {"wrong":"Zapytał mi o egzamin.","right":"<b>Zapytał mnie</b> o egzamin.","why":"zapytać спрашивает kogoś — винительный падеж. Дательный (mi) идёт при powiedzieć."},
      {"wrong":"Powiedział mnie, że przyjdzie.","right":"<b>Powiedział mi</b>, że przyjdzie.","why":"powiedzieć говорит komuś — дательный: mi, ci, jej, nam."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь падеж после глагола.",
       "q":"«Он спросил меня об экзамене» —","opts":["Zapytał mi o egzamin","Zapytał mnie o egzamin","Zapytał mnie za egzamin"],"answer":1,
       "explain":"<b>zapytać kogoś o coś</b>: винительный mnie плюс предлог o."},
      {"type":"choice","howto":"<b>Что делать:</b> подбери глагол по смыслу.",
       "q":"«Он добавил, что позвонит вечером» —","opts":["Dodał, że zadzwoni wieczorem","Dodał, żeby zadzwoni wieczorem","Dodał, czy zadzwoni wieczorem"],"answer":0,
       "explain":"Это информация, значит <b>że</b>. Żeby вводит волю, czy — вопрос."},
      {"type":"type","howto":"Напиши пересказ. Диакритику можно не ставить.",
       "q":"«Он ответил, что не знает»","accept":["odpowiedział, że nie wie","odpowiedzial, ze nie wie","odpowiedział że nie wie","odpowiedzial ze nie wie"],"placeholder":"Odpowiedział, że …"}
    ],
    "mnemonic":"🗞️ powiedział mi · zapytał mnie · dodał, że… — рамка меняется, время нет."
   }
 ],
 "dialogue":{
   "intro":"Анне позвонили из экзаменационного центра, и теперь она всё пересказывает Мареку. Тапни по строке — услышишь фразу.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Dzwonili z centrum egzaminacyjnego.","ru":"Звонили из экзаменационного центра.",
      "words":[["Dzwonili","звонили"],["centrum egzaminacyjne","экзаменационный центр"]]},
     {"who":"M","name":"Marek","side":"right","en":"I co powiedzieli?","ru":"И что сказали?",
      "words":[["co","что"],["powiedzieli","они сказали"]]},
     {"who":"A","name":"Anna","side":"left","en":"Powiedzieli, że egzamin będzie dwudziestego maja.","ru":"Сказали, что экзамен будет двадцатого мая.",
      "words":[["że","что"],["dwudziestego maja","двадцатого мая"]]},
     {"who":"M","name":"Marek","side":"right","en":"Spytałaś, czy trzeba przyjść wcześniej?","ru":"Ты спросила, нужно ли приходить раньше?",
      "words":[["Spytałaś","ты спросила"],["czy","ли"]]},
     {"who":"A","name":"Anna","side":"left","en":"Tak. Odpowiedzieli, że mam być pół godziny przed czasem.","ru":"Да. Ответили, что я должна быть за полчаса до начала.",
      "words":[["Odpowiedzieli","они ответили"],["pół godziny","полчаса"]]},
     {"who":"M","name":"Marek","side":"right","en":"A o dokumenty pytałaś?","ru":"А про документы спрашивала?",
      "words":[["o dokumenty","про документы"],["pytałaś","ты спрашивала"]]},
     {"who":"A","name":"Anna","side":"left","en":"Poprosili, żebym wzięła paszport i długopis.","ru":"Попросили, чтобы я взяла паспорт и ручку.",
      "words":[["Poprosili, żebym","попросили, чтобы я"],["długopis","ручка"]]},
     {"who":"M","name":"Marek","side":"right","en":"Kasia mówiła, że zdawała ten egzamin dwa lata temu.","ru":"Кася говорила, что сдавала этот экзамен два года назад.",
      "words":[["mówiła","говорила"],["dwa lata temu","два года назад"]]},
     {"who":"A","name":"Anna","side":"left","en":"Napisała mi wczoraj, żebym się nie martwiła.","ru":"Она написала мне вчера, чтобы я не волновалась.",
      "words":[["Napisała mi","написала мне"],["żebym się nie martwiła","чтобы я не волновалась"]]},
     {"who":"M","name":"Marek","side":"right","en":"Mądra rada. Zapytaj ją jeszcze, czy warto ćwiczyć słuchanie.","ru":"Мудрый совет. Спроси её ещё, стоит ли тренировать аудирование.",
      "words":[["Mądra rada","мудрый совет"],["ćwiczyć","тренировать"]]}
   ]
 },
 "scene":{
   "intro":"Сценка в коридоре офиса: одна короткая передача чужих слов. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Szef pytał o ciebie.","ru":"Шеф спрашивал о тебе."},
     {"who":"B","en":"I co mówił?","ru":"И что говорил?"},
     {"who":"A","en":"Powiedział, że spotkanie jest o trzeciej.","ru":"Сказал, что встреча в три."},
     {"who":"B","en":"Spytał, czy zdążę?","ru":"Спросил, успею ли я?"},
     {"who":"A","en":"Tak. I kazał mi przekazać, żebyś wziął umowę.","ru":"Да. И велел мне передать, чтобы ты взял договор."},
     {"who":"B","en":"Dobrze, że mi powiedziałaś.","ru":"Хорошо, что ты мне сказала."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — весь набор для пересказа чужих разговоров.",
   "items":[
     {"en":"powiedzieć komuś, że…","ru":"сказать кому-то, что…","ex":"Powiedział mi, że przyjdzie."},
     {"en":"spytać / zapytać kogoś","ru":"спросить кого-то","ex":"Zapytał mnie o egzamin."},
     {"en":"czy","ru":"ли","ex":"Spytał, czy mam czas."},
     {"en":"odpowiedzieć","ru":"ответить","ex":"Odpowiedział, że nie wie."},
     {"en":"dodać","ru":"добавить","ex":"Dodał, że zadzwoni wieczorem."},
     {"en":"twierdzić","ru":"утверждать","ex":"Twierdzi, że nic nie wiedział."},
     {"en":"obiecać","ru":"обещать","ex":"Obiecał, że pomoże."},
     {"en":"kazać komuś","ru":"велеть кому-то","ex":"Szef kazał mi zostać dłużej."},
     {"en":"przekazać","ru":"передать (слова)","ex":"Kazał mi przekazać wiadomość."},
     {"en":"umowa","ru":"договор","ex":"Weź umowę na spotkanie."},
     {"en":"paszport","ru":"паспорт","ex":"Poprosili, żebym wzięła paszport."},
     {"en":"następnego dnia","ru":"на следующий день","ex":"Powiedział, że przyjdzie następnego dnia."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["Powiedział, że przyjdzie","сказал, что придёт"],["Spytał, czy mam czas","спросил, есть ли у меня время"],["Poprosił, żebym przyszedł","попросил, чтобы я пришёл"],["Kazał mi zostać","велел мне остаться"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Анна пересказывает вчерашний звонок. Отмечай про себя: где że, где czy, а где żeby.",
   "title":"Co powiedzieli przez telefon",
   "sentences":["Wczoraj zadzwonili z centrum egzaminacyjnego.","Powiedzieli, że egzamin będzie dwudziestego maja.","Dodali, że trzeba przyjść pół godziny wcześniej.","Spytałam, czy mogę wziąć słownik.","Odpowiedzieli, że nie wolno.","Poprosili, żebym wzięła paszport.","Zapytali też, czy potrzebuję miejsca blisko okna.","Powiedziałam, że nie mam takiej potrzeby.","Kasia napisała mi wieczorem, żebym się nie martwiła.","Twierdzi, że ten egzamin jest łatwiejszy, niż wygląda."],
   "translation":"Вчера позвонили из экзаменационного центра. Сказали, что экзамен будет двадцатого мая. Добавили, что нужно прийти на полчаса раньше. Я спросила, могу ли я взять словарь. Ответили, что нельзя. Попросили, чтобы я взяла паспорт. Спросили ещё, нужно ли мне место у окна. Я сказала, что мне это не нужно. Кася написала мне вечером, чтобы я не волновалась. Она утверждает, что этот экзамен легче, чем выглядит."
 },
 "quiz":{
   "intro":"Пять вопросов — и чужие слова ты передашь без потерь.",
   "items":[
     {"q":"1. Марек: «Przyjdę o piątej». Пересказ —","opts":["Powiedział, że przyszedł o piątej","Powiedział, że przyjdzie o piątej","Powiedział, że przyszedłby o piątej"],"answer":1,
      "explain":"Времена в пересказе не сдвигаются: будущее осталось будущим — <b>przyjdzie</b>."},
     {"q":"2. «Он спросил, есть ли у меня время» —","opts":["Spytał, jeśli mam czas","Spytał, czy mam czas","Spytał, że mam czas"],"answer":1,
      "explain":"«Ли» — это <b>czy</b>; jeśli значит «если»."},
     {"q":"3. «Она попросила, чтобы я позвонил» —","opts":["Poprosiła, że zadzwonię","Poprosiła, żebym zadzwonił","Poprosiła, żebym zadzwonię"],"answer":1,
      "explain":"Воля вводится через <b>żeby</b>, дальше идёт л-форма zadzwonił."},
     {"q":"4. «Шеф велел мне остаться» —","opts":["Szef kazał mi zostać","Szef kazał mi, że zostanę","Szef kazał mnie zostać"],"answer":0,
      "explain":"<b>kazać komuś</b> плюс инфинитив, человек в дательном: kazał mi zostać."},
     {"q":"5. «Он сказал мне, что не знает» —","opts":["Powiedział mnie, że nie wie","Powiedział mi, że nie wie","Zapytał mi, że nie wie"],"answer":1,
      "explain":"powiedzieć говорит <b>komuś</b> — дательный: powiedział mi."}
   ]
 },
 "essay":{
   "intro":"Перескажи сегодня чей-нибудь разговор — хоть вчерашний звонок, хоть сообщение в мессенджере.",
   "prompt":"Напиши 4–5 предложений: что тебе кто-то сказал, о чём спросил, о чём попросил и что ты ответил(а).",
   "hint":"Опора: Powiedział(a), że… · Spytał(a), czy… · Poprosił(a), żebym… · Odpowiedziałem(am), że… 📞",
   "example":"Wczoraj zadzwoniła do mnie Kasia. Powiedziała, że w sobotę ma urodziny. Spytała, czy przyjdę z Markiem. Poprosiła, żebym przyniosła sałatkę. Odpowiedziałam, że przyjdziemy oboje i że zrobię coś dobrego."
 }
},
"18": {
 "day":18,"week":"03",
 "themeRu":"Можно, нужно, стоит",
 "themeEn":"Można, trzeba, warto",
 "intro":"На доске в подъезде у Марека висит список правил: что можно, что нужно и чего нельзя. Пять коротких слов — <b>można, trzeba, warto, wolno, nie wolno</b> — и ни одного подлежащего. Русская безличная фраза устроена так же, так что сегодня будет легко; вся ловушка спрятана в одном-единственном слове.",
 "introAudio":"На доске в подъезде у Марека висит список правил: что можно, что нужно и чего нельзя. Пять коротких слов — można, trzeba, warto, wolno, nie wolno — и ни одного подлежащего. Русская безличная фраза устроена так же, так что сегодня будет легко; вся ловушка спрятана в одном-единственном слове.",
 "goals":[
   "Говорить без подлежащего: <b>można</b>, <b>trzeba</b>, <b>warto</b> + инфинитив",
   "Разрешать и запрещать: <b>wolno</b> · <b>nie wolno</b> · таблички <b>zakaz palenia</b>",
   "Ставить безличную фразу в прошедшее и будущее: <b>trzeba było</b>, <b>można będzie</b>",
   "Пользоваться безличным <b>się</b>: <b>mówi się, że…</b>, <b>jak to się pisze?</b>"
 ],
 "learned":[
   "Сказал(а) без подлежащего: można, trzeba, warto плюс инфинитив",
   "Разрешил(а) и запретил(а): wolno · nie wolno · zakaz palenia",
   "Поставил(а) безличную фразу в прошедшее и будущее: trzeba było, można będzie",
   "Воспользовался(лась) безличным się: mówi się, że… · jak to się pisze?"
 ],
 "review":{
   "intro":"Начнём со вчерашнего пересказа: где że, где żeby, где czy. Плюс приставка и вид — они с нами каждый день.",
   "introAudio":"Начнём со вчерашнего пересказа: где że, где żeby, где czy. Плюс приставка и вид — они с нами каждый день.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> реши, это информация или воля.",
      "q":"«Он сказал, что придёт» —","opts":["Powiedział, żeby przyszedł","Powiedział, że przyjdzie","Powiedział, czy przyjdzie"],"answer":1,
      "explain":"Это информация — значит <b>że</b>. Żeby вводит волю, czy — вопрос."},
     {"type":"choice","howto":"<b>Что делать:</b> найди русское «ли».",
      "q":"«Не знаю, придёт ли он» —","opts":["Nie wiem, jeśli przyjdzie","Nie wiem, czy przyjdzie","Nie wiem, że przyjdzie"],"answer":1,
      "explain":"«Ли» — это <b>czy</b>. Jeśli значит «если» и вводит условие."},
     {"type":"choice","howto":"<b>Что делать:</b> проверь, не поехало ли время назад.",
      "q":"Анна: «Jestem gotowa». Пересказ —","opts":["Powiedziała, że była gotowa","Powiedziała, że jest gotowa","Powiedziała, żeby była gotowa"],"answer":1,
      "explain":"Время в пересказе не сдвигается: настоящее осталось настоящим — <b>jest gotowa</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> приставка держит весь смысл.",
      "q":"«Вынеси, пожалуйста, мусор» — ___ proszę śmieci.","opts":["Wnieś","Wynieś","Przynieś"],"answer":1,
      "explain":"wy- отвечает русскому вы-: <b>wynieś</b>. Wnieś — внеси, przynieś — принеси."},
     {"type":"choice","howto":"<b>Что делать:</b> ищи маркер результата.",
      "q":"W sobotę wreszcie ___ całe mieszkanie.","opts":["sprzątałam","posprzątałam","sprzątam"],"answer":1,
      "explain":"«Наконец» и весь результат — совершенный вид: <b>posprzątałam</b>."},
     {"type":"type","howto":"Напиши пересказ. Диакритику можно не ставить.",
      "q":"«Он попросил, чтобы я пришёл раньше»","accept":["poprosił, żebym przyszedł wcześniej","poprosil, zebym przyszedl wczesniej","poprosił żebym przyszedł wcześniej","poprosil zebym przyszedl wczesniej"],"placeholder":"Poprosił, żebym…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Без подлежащего",
    "title":"<em>Można</em>, <em>trzeba</em> + инфинитив",
    "paras":[
      "Эти слова не спрягаются и не имеют подлежащего вообще: за ними сразу идёт инфинитив. <b>Można tu parkować.</b> <b>Trzeba kupić bilet.</b> Русское «можно припарковаться», «нужно купить билет» устроено ровно так же.",
      "<b>Można</b> — «можно» (есть возможность или разрешение). <b>Nie można</b> — «нельзя, невозможно». <b>Trzeba</b> — «нужно, надо». <b>Nie trzeba</b> — «не нужно», то есть не обязательно, а вовсе не «запрещено».",
      "Рядом стоит личный глагол <b>musieć</b> из A1: <b>Muszę iść</b> — «я должен идти», про конкретного человека. <b>Trzeba iść</b> — «надо идти», про всех сразу. Выбор тот же, что между русскими «мне надо» и «надо».",
      "Одна деталь падежа: после nie дополнение уходит в родительный, как всегда. <b>Trzeba kupić bilet</b> → <b>Nie trzeba kupować biletu.</b>"
    ],
    "audio":"Эти слова не спрягаются и не имеют подлежащего вообще: за ними сразу идёт инфинитив. Można tu parkować. Trzeba kupić bilet. Русское «можно припарковаться», «нужно купить билет» устроено ровно так же. Można — можно, есть возможность или разрешение. Nie można — нельзя, невозможно. Trzeba — нужно, надо. Nie trzeba — не нужно, то есть не обязательно, а вовсе не запрещено. Рядом стоит личный глагол musieć из A1: muszę iść — я должен идти, про конкретного человека; trzeba iść — надо идти, про всех сразу. И одна деталь падежа: после nie дополнение уходит в родительный. Trzeba kupić bilet — nie trzeba kupować biletu.",
    "table":{"rows":[
      ["<b>Można</b> tu parkować. <button class=\"play\" data-say=\"Można tu parkować\">🔊</button>","Здесь можно парковаться."],
      ["<b>Nie można</b> tu palić. <button class=\"play\" data-say=\"Nie można tu palić\">🔊</button>","Здесь нельзя курить."],
      ["<b>Trzeba</b> kupić bilet. <button class=\"play\" data-say=\"Trzeba kupić bilet\">🔊</button>","Нужно купить билет."],
      ["<b>Nie trzeba</b> kupować biletu. <button class=\"play\" data-say=\"Nie trzeba kupować biletu\">🔊</button>","Билет покупать не нужно. (не обязательно)"],
      ["<b>Muszę</b> iść. / <b>Trzeba</b> iść. <button class=\"play\" data-say=\"Muszę iść. Trzeba iść.\">🔊</button>","Мне надо идти. / Надо идти."],
      ["<b>Czy można</b> zapytać? <button class=\"play\" data-say=\"Czy można zapytać?\">🔊</button>","Можно спросить?"]
    ],"star":0},
    "examples":[
      {"ru":"Здесь можно платить картой?","en":"Czy <b>można</b> tu <b>płacić</b> kartą?","gloss":"чем платим — творительный: kartą","say":"Czy można tu płacić kartą?"},
      {"ru":"Мусор нужно сортировать.","en":"Śmieci <b>trzeba segregować</b>.","say":"Śmieci trzeba segregować."},
      {"ru":"Приходить раньше не нужно.","en":"<b>Nie trzeba przychodzić</b> wcześniej.","say":"Nie trzeba przychodzić wcześniej."},
      {"ru":"Мне надо идти, а тебе надо отдохнуть.","en":"<b>Muszę</b> iść, a ty <b>musisz</b> odpocząć.","say":"Muszę iść, a ty musisz odpocząć."}
    ],
    "mistakes":[
      {"wrong":"Można parkuję tutaj.","right":"<b>Można</b> tu <b>parkować</b>.","why":"после można идёт только инфинитив: подлежащего у этой конструкции нет."},
      {"wrong":"Trzeba jestem iść.","right":"<b>Trzeba</b> iść. / <b>Muszę</b> iść.","why":"trzeba безлично и не сочетается с формой być. Про себя лично — muszę."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь, что стоит после безличного слова.",
       "q":"«Здесь можно парковаться» —","opts":["Można tu parkuję","Można tu parkować","Można tu parkuje się"],"answer":1,
       "explain":"После <b>można</b> идёт инфинитив: parkować."},
      {"type":"choice","howto":"<b>Что делать:</b> отличай «не обязательно» от «запрещено».",
       "q":"<b>Nie trzeba kupować biletu</b> значит —","opts":["билет покупать запрещено","билет покупать не обязательно","билет уже куплен"],"answer":1,
       "explain":"<b>Nie trzeba</b> — «не нужно, не обязательно». Запрет — это nie wolno, оно в правиле 2."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Мусор нужно сортировать»</b>","answer":"Śmieci trzeba segregować"}
    ],
    "mnemonic":"🧩 można · nie można · trzeba · nie trzeba — и сразу инфинитив, без подлежащего."
   },
   {
    "eyebrow":"Правило 2 · Разрешено и запрещено",
    "title":"<em>Warto</em>, <em>wolno</em>, <em>nie wolno</em>",
    "paras":[
      "<b>Warto</b> — «стоит», совет без нажима: <b>Warto zobaczyć Wawel.</b> <b>Warto poznać sąsiadów.</b> Русское «стоит посмотреть» — тот же оборот, та же интонация.",
      "<b>Wolno</b> — «можно, разрешено», чуть официальнее, чем można: <b>Czy tu wolno palić?</b> А главное — его отрицание: <b>nie wolno</b> значит «нельзя» в смысле запрета. <b>Nie wolno palić na balkonie.</b> Это самое строгое слово дня.",
      "Ловушка дня спрятана в самом слове: <b>wolno</b> — ещё и наречие «медленно» (от wolny — свободный и медленный). <b>Mów wolniej, proszę</b> — «говори помедленнее». Различает контекст: перед инфинитивом это разрешение, при глаголе речи или движения — скорость.",
      "На табличках запрет пишут без всяких слов-помощников: <b>Zakaz palenia</b> (запрет курения), <b>Nie deptać trawnika</b> (по газону не ходить), <b>Nie hałasować po 22:00</b>. Инфинитив на табличке — это приказ всем сразу."
    ],
    "audio":"Warto — стоит, совет без нажима: warto zobaczyć Wawel, warto poznać sąsiadów. Русское «стоит посмотреть» — тот же оборот. Wolno — можно, разрешено, чуть официальнее, чем można: czy tu wolno palić? А главное — его отрицание: nie wolno значит нельзя в смысле запрета. Nie wolno palić na balkonie. Ловушка дня спрятана в самом слове: wolno — ещё и наречие «медленно», от wolny — свободный и медленный. Mów wolniej, proszę — говори помедленнее. Различает контекст: перед инфинитивом это разрешение, при глаголе речи или движения — скорость. На табличках запрет пишут без слов-помощников: zakaz palenia, nie deptać trawnika, nie hałasować.",
    "table":{"rows":[
      ["<b>Warto</b> zobaczyć Wawel. <button class=\"play\" data-say=\"Warto zobaczyć Wawel\">🔊</button>","Стоит посмотреть Вавель."],
      ["Czy tu <b>wolno</b> palić? <button class=\"play\" data-say=\"Czy tu wolno palić?\">🔊</button>","Здесь разрешено курить?"],
      ["<b>Nie wolno</b> palić na balkonie. <button class=\"play\" data-say=\"Nie wolno palić na balkonie\">🔊</button>","На балконе курить нельзя. (запрет)"],
      ["Mów <b>wolniej</b>, proszę. <button class=\"play\" data-say=\"Mów wolniej, proszę\">🔊</button>","Говори помедленнее. (то же слово, другой смысл)"],
      ["<b>Zakaz palenia</b> <button class=\"play\" data-say=\"Zakaz palenia\">🔊</button>","Курение запрещено. (табличка)"],
      ["<b>Nie deptać trawnika</b> <button class=\"play\" data-say=\"Nie deptać trawnika\">🔊</button>","По газону не ходить. (табличка)"]
    ],"star":3},
    "examples":[
      {"ru":"Здесь нельзя парковаться — это запрещено.","en":"Tu <b>nie wolno parkować</b>.","say":"Tu nie wolno parkować."},
      {"ru":"Стоит познакомиться с соседями.","en":"<b>Warto poznać</b> sąsiadów.","say":"Warto poznać sąsiadów."},
      {"ru":"После десяти вечера шуметь нельзя.","en":"Po dwudziestej drugiej <b>nie wolno hałasować</b>.","gloss":"по-польски время часто называют по 24-часовым часам","say":"Po dwudziestej drugiej nie wolno hałasować."},
      {"ru":"Вы не могли бы говорить медленнее?","en":"Czy mogłaby pani mówić <b>wolniej</b>?","say":"Czy mogłaby pani mówić wolniej?"}
    ],
    "mistakes":[
      {"wrong":"Nie wolno kupować biletu. (в смысле «не обязательно»)","right":"<b>Nie trzeba</b> kupować biletu.","why":"nie wolno — это запрет: «покупать билет запрещено». «Не обязательно» — nie trzeba."},
      {"wrong":"Mów nie wolno.","right":"Mów <b>wolniej</b>.","why":"«медленнее» — наречие wolniej. Nie wolno — это запрет, а не скорость."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери силу запрета.",
       "q":"На двери подъезда: «На балконе курить нельзя» —","opts":["Nie trzeba palić na balkonie","Nie wolno palić na balkonie","Nie warto palić na balkonie"],"answer":1,
       "explain":"Запрет — это <b>nie wolno</b>. Nie trzeba значит «не обязательно», nie warto — «не стоит»."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, что стоит рядом со словом wolno.",
       "q":"Что значит <b>Mów wolniej</b>?","opts":["говори помедленнее","говорить запрещено","говори свободно"],"answer":0,
       "explain":"Здесь это наречие скорости: <b>wolniej</b> — «медленнее». Запрет выглядит иначе: nie wolno mówić."},
      {"type":"type","howto":"Напиши совет из путеводителя. Диакритику можно не ставить.",
       "q":"«Стоит посмотреть Вавель»","accept":["warto zobaczyć wawel","warto zobaczyc wawel"],"placeholder":"Warto…"}
    ],
    "mnemonic":"🚭 warto — стоит · wolno — разрешено · nie wolno — запрещено · wolniej — медленнее."
   },
   {
    "eyebrow":"Правило 3 · Время у безличных",
    "title":"<em>Trzeba było</em> · <em>Można będzie</em>",
    "paras":[
      "У этих слов нет спряжения, зато есть время. Прошедшее делается одним словом <b>było</b>: <b>trzeba było</b>, <b>można było</b>, <b>warto było</b>. Средний род тут навсегда — согласовывать не с чем.",
      "<b>Trzeba było powiedzieć wcześniej</b> — «надо было сказать раньше». Фраза с лёгким укором, ровно как русская. <b>Można było zapytać</b> — «можно было спросить».",
      "Будущее делается словом <b>będzie</b>: <b>trzeba będzie zapłacić</b>, <b>można będzie wejść o ósmej</b>, <b>warto będzie wrócić latem</b>. Порядок слов свободный: и <b>będzie trzeba</b> тоже говорят.",
      "У wolno своя рамка: прошедшее — <b>nie wolno było</b>, будущее — <b>nie będzie wolno</b>. <b>Nie wolno było wchodzić do parku po zmroku.</b>"
    ],
    "audio":"У этих слов нет спряжения, зато есть время. Прошедшее делается одним словом było: trzeba było, można było, warto było. Средний род тут навсегда — согласовывать не с чем. Trzeba było powiedzieć wcześniej — надо было сказать раньше, фраза с лёгким укором, ровно как русская. Można było zapytać — можно было спросить. Будущее делается словом będzie: trzeba będzie zapłacić, można będzie wejść o ósmej, warto będzie wrócić latem. Порядок слов свободный: и będzie trzeba тоже говорят. У wolno своя рамка: прошедшее — nie wolno było, будущее — nie będzie wolno.",
    "table":{"rows":[
      ["<b>Trzeba było</b> powiedzieć wcześniej. <button class=\"play\" data-say=\"Trzeba było powiedzieć wcześniej\">🔊</button>","Надо было сказать раньше."],
      ["<b>Można było</b> zapytać. <button class=\"play\" data-say=\"Można było zapytać\">🔊</button>","Можно было спросить."],
      ["<b>Warto było</b> przyjść. <button class=\"play\" data-say=\"Warto było przyjść\">🔊</button>","Стоило прийти."],
      ["<b>Trzeba będzie</b> zapłacić. <button class=\"play\" data-say=\"Trzeba będzie zapłacić\">🔊</button>","Надо будет заплатить."],
      ["<b>Można będzie</b> wejść o ósmej. <button class=\"play\" data-say=\"Można będzie wejść o ósmej\">🔊</button>","Можно будет войти в восемь."],
      ["<b>Nie wolno było</b> wchodzić. <button class=\"play\" data-say=\"Nie wolno było wchodzić\">🔊</button>","Входить было нельзя."]
    ],"star":0},
    "examples":[
      {"ru":"Надо было позвонить вчера.","en":"<b>Trzeba było zadzwonić</b> wczoraj.","say":"Trzeba było zadzwonić wczoraj."},
      {"ru":"Надо будет купить ковёр.","en":"<b>Trzeba będzie kupić</b> dywan.","say":"Trzeba będzie kupić dywan."},
      {"ru":"Стоило прийти раньше — было свободнее.","en":"<b>Warto było przyjść</b> wcześniej — było luźniej.","say":"Warto było przyjść wcześniej, było luźniej."},
      {"ru":"В парк после темноты входить было нельзя.","en":"Do parku po zmroku <b>nie wolno było wchodzić</b>.","say":"Do parku po zmroku nie wolno było wchodzić."}
    ],
    "mistakes":[
      {"wrong":"Trzeba był powiedzieć wcześniej.","right":"<b>Trzeba było</b> powiedzieć wcześniej.","why":"безличная фраза всегда берёт средний род: było. Подлежащего, с которым можно согласовать, тут просто нет."},
      {"wrong":"Trzeba będę zapłacić.","right":"<b>Trzeba będzie</b> zapłacić.","why":"личных форм у trzeba не бывает: только będzie, третье лицо среднего рода."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, какой род берут безличные слова.",
       "q":"«Надо было сказать раньше» —","opts":["Trzeba był powiedzieć wcześniej","Trzeba było powiedzieć wcześniej","Trzeba jest powiedzieć wcześniej"],"answer":1,
       "explain":"Прошедшее у безличных — всегда <b>było</b>: trzeba było."},
      {"type":"choice","howto":"<b>Что делать:</b> поставь фразу в будущее.",
       "q":"«Надо будет заплатить» —","opts":["Trzeba będę zapłacić","Trzeba będzie zapłacić","Trzeba zapłacić będzie się"],"answer":1,
       "explain":"Будущее делается словом <b>będzie</b>: trzeba będzie zapłacić."},
      {"type":"type","howto":"Напиши фразу с лёгким укором. Диакритику можно не ставить.",
       "q":"«Можно было спросить»","accept":["można było zapytać","mozna bylo zapytac","można było spytać","mozna bylo spytac"],"placeholder":"Można było…"}
    ],
    "mnemonic":"⏱️ было → <b>było</b> · будет → <b>będzie</b>. Trzeba było · trzeba będzie."
   },
   {
    "eyebrow":"Правило 4 · Безличное się",
    "title":"<em>Mówi się, że…</em>",
    "paras":[
      "Второй этаж безличности — знакомое «-ся». Ставим глагол в третье лицо единственного числа и добавляем <b>się</b>: <b>mówi się</b> (говорят), <b>robi się</b> (делают), <b>je się</b> (едят).",
      "<b>Mówi się, że w Krakowie jest najlepsza kawa w Polsce.</b> Русское «говорят, что…» — та же самая мысль, только по-русски используется форма «они», а по-польски — «-ся».",
      "Самый частый вопрос ученика построен ровно так: <b>Jak to się pisze?</b> (как это пишется?), <b>Jak to się mówi po polsku?</b> (как это говорится по-польски?).",
      "И вывески: <b>Tu się nie pali</b> — «здесь не курят». Мягче запрета, но смысл ясен. Заметь: подлежащего снова нет, а дополнение остаётся в винительном — <b>W tym sklepie sprzedaje się chleb i mleko.</b>"
    ],
    "audio":"Второй этаж безличности — знакомое «ся». Ставим глагол в третье лицо единственного числа и добавляем się: mówi się — говорят, robi się — делают, je się — едят. Mówi się, że w Krakowie jest najlepsza kawa w Polsce. Русское «говорят, что» — та же самая мысль, только по-русски используется форма «они», а по-польски «ся». Самый частый вопрос ученика построен ровно так: jak to się pisze, jak to się mówi po polsku. И вывески: tu się nie pali — здесь не курят. Мягче запрета, но смысл ясен. Подлежащего снова нет, а дополнение остаётся в винительном: w tym sklepie sprzedaje się chleb i mleko.",
    "table":{"rows":[
      ["<b>Mówi się, że</b>… <button class=\"play\" data-say=\"Mówi się, że to najlepsza kawa w mieście\">🔊</button>","Говорят, что…"],
      ["<b>Jak to się pisze?</b> <button class=\"play\" data-say=\"Jak to się pisze?\">🔊</button>","Как это пишется?"],
      ["<b>Jak to się mówi po polsku?</b> <button class=\"play\" data-say=\"Jak to się mówi po polsku?\">🔊</button>","Как это говорится по-польски?"],
      ["<b>Tu się nie pali.</b> <button class=\"play\" data-say=\"Tu się nie pali\">🔊</button>","Здесь не курят."],
      ["<b>Rowery trzyma się</b> w piwnicy. <button class=\"play\" data-say=\"Rowery trzyma się w piwnicy\">🔊</button>","Велосипеды держат в подвале."]
    ],"star":1},
    "examples":[
      {"ru":"Говорят, что этот экзамен легче, чем выглядит.","en":"<b>Mówi się, że</b> ten egzamin jest łatwiejszy, niż wygląda.","say":"Mówi się, że ten egzamin jest łatwiejszy, niż wygląda."},
      {"ru":"Как пишется это слово?","en":"Jak <b>się pisze</b> to słowo?","say":"Jak się pisze to słowo?"},
      {"ru":"В этом магазине продают хлеб и молоко.","en":"W tym sklepie <b>sprzedaje się</b> chleb i mleko.","gloss":"дополнение остаётся в винительном","say":"W tym sklepie sprzedaje się chleb i mleko."},
      {"ru":"Здесь не курят.","en":"Tu <b>się nie pali</b>.","say":"Tu się nie pali."}
    ],
    "mistakes":[
      {"wrong":"Mówią się, że…","right":"<b>Mówi się, że</b>…","why":"безличное się берёт третье лицо единственного числа: mówi się, а не mówią się."},
      {"wrong":"Jak to pisze?","right":"Jak to <b>się</b> pisze?","why":"без się получается «как он это пишет». Возвратная частица здесь обязательна."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь форму глагола.",
       "q":"«Говорят, что там дёшево» —","opts":["Mówią się, że tam jest tanio","Mówi się, że tam jest tanio","Mówi, że tam jest tanio"],"answer":1,
       "explain":"Безличное się идёт с третьим лицом единственного числа: <b>mówi się</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни самый частый вопрос ученика.",
       "q":"«Как это пишется?» —","opts":["Jak to pisze?","Jak to się pisze?","Jak się to pisać?"],"answer":1,
       "explain":"Нужна частица się: <b>Jak to się pisze?</b>"},
      {"type":"speak","howto":"Нажми микрофон и спроси вслух.",
       "target":"Czy tu można palić?","sub":"здесь можно курить?","want":"Czy tu można palić"}
    ],
    "mnemonic":"🌀 mówi się · robi się · pisze się — «-ся» вместо подлежащего, как в русском «говорят»."
   }
 ],
 "dialogue":{
   "intro":"Марек знакомится с соседкой — и заодно узнаёт все правила дома. Тапни по строке, чтобы услышать фразу.",
   "lines":[
     {"who":"Z","name":"Pani Zofia","side":"left","en":"Dzień dobry! Pan tu nowy, prawda?","ru":"Здравствуйте! Вы здесь новенький, правда?",
      "words":[["nowy","новый"],["prawda?","правда?"]]},
     {"who":"M","name":"Marek","side":"right","en":"Tak, wprowadziłem się w zeszłym tygodniu.","ru":"Да, я въехал на прошлой неделе.",
      "words":[["wprowadziłem się","я въехал"],["w zeszłym tygodniu","на прошлой неделе"]]},
     {"who":"Z","name":"Pani Zofia","side":"left","en":"To proszę pamiętać: śmieci trzeba segregować.","ru":"Тогда, пожалуйста, помните: мусор нужно сортировать.",
      "words":[["śmieci","мусор"],["trzeba segregować","нужно сортировать"]]},
     {"who":"M","name":"Marek","side":"right","en":"Jasne. A czy można parkować przed domem?","ru":"Конечно. А можно парковаться перед домом?",
      "words":[["czy można","можно ли"],["przed domem","перед домом"]]},
     {"who":"Z","name":"Pani Zofia","side":"left","en":"Można, ale tylko po prawej stronie.","ru":"Можно, но только с правой стороны.",
      "words":[["tylko","только"],["po prawej stronie","с правой стороны"]]},
     {"who":"M","name":"Marek","side":"right","en":"A rower? Wolno trzymać go na korytarzu?","ru":"А велосипед? Разрешено держать его в коридоре?",
      "words":[["rower","велосипед"],["wolno trzymać","разрешено держать"]]},
     {"who":"Z","name":"Pani Zofia","side":"left","en":"Niestety nie wolno. Rowery trzyma się w piwnicy.","ru":"К сожалению, нельзя. Велосипеды держат в подвале.",
      "words":[["nie wolno","нельзя"],["w piwnicy","в подвале"]]},
     {"who":"M","name":"Marek","side":"right","en":"Rozumiem. Widzę, że warto poznać sąsiadów.","ru":"Понимаю. Вижу, что стоит познакомиться с соседями.",
      "words":[["warto","стоит"],["sąsiadów","соседей"]]},
     {"who":"Z","name":"Pani Zofia","side":"left","en":"Warto. I jeszcze jedno: po dwudziestej drugiej nie wolno hałasować.","ru":"Стоит. И ещё одно: после десяти вечера нельзя шуметь.",
      "words":[["jeszcze jedno","ещё одно"],["hałasować","шуметь"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dziękuję. Trzeba będzie kupić dywan.","ru":"Спасибо. Надо будет купить ковёр.",
      "words":[["Trzeba będzie","надо будет"],["dywan","ковёр"]]}
   ]
 },
 "scene":{
   "intro":"Сценка у входа в музей — три вопроса и три правила. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Przepraszam, czy można wejść z plecakiem?","ru":"Извините, можно войти с рюкзаком?"},
     {"who":"B","en":"Niestety nie wolno. Trzeba zostawić go w szatni.","ru":"К сожалению, нельзя. Нужно оставить его в гардеробе."},
     {"who":"A","en":"A zdjęcia? Można robić zdjęcia?","ru":"А фотографии? Можно фотографировать?"},
     {"who":"B","en":"Można, ale bez lampy błyskowej.","ru":"Можно, но без вспышки."},
     {"who":"A","en":"Rozumiem. Warto zobaczyć wystawę na piętrze?","ru":"Понимаю. Стоит посмотреть выставку на втором этаже?"},
     {"who":"B","en":"Bardzo warto. Zamykamy o osiemnastej.","ru":"Очень стоит. Мы закрываем в шесть вечера."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — правила, разрешения и запреты.",
   "items":[
     {"en":"można / nie można","ru":"можно / нельзя (невозможно)","ex":"Można tu parkować."},
     {"en":"trzeba / nie trzeba","ru":"нужно / не обязательно","ex":"Trzeba kupić bilet."},
     {"en":"warto","ru":"стоит","ex":"Warto zobaczyć Wawel."},
     {"en":"wolno / nie wolno","ru":"разрешено / запрещено","ex":"Nie wolno palić na balkonie."},
     {"en":"wolniej","ru":"медленнее","ex":"Mów wolniej, proszę."},
     {"en":"zakaz palenia","ru":"курение запрещено","ex":"Na drzwiach wisi zakaz palenia."},
     {"en":"segregować śmieci","ru":"сортировать мусор","ex":"Śmieci trzeba segregować."},
     {"en":"hałasować","ru":"шуметь","ex":"Po dwudziestej drugiej nie wolno hałasować."},
     {"en":"piwnica","ru":"подвал","ex":"Rowery trzyma się w piwnicy."},
     {"en":"mówi się, że…","ru":"говорят, что…","ex":"Mówi się, że tam jest tanio."},
     {"en":"jak to się pisze?","ru":"как это пишется?","ex":"Jak to się pisze po polsku?"},
     {"en":"szatnia","ru":"гардероб","ex":"Plecak trzeba zostawić w szatni."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его переводу.",
   "pairs":[["trzeba","нужно"],["nie wolno","запрещено"],["warto","стоит"],["wolniej","медленнее"]]
 },
 "reading":{
   "intro":"Прочитай и послушай список правил, который висит в подъезде у Марека. Заметь, сколько тут безличных фраз.",
   "title":"Zasady w naszym domu",
   "sentences":["Śmieci trzeba segregować — pojemniki stoją przy bramie.","Parkować można tylko po prawej stronie.","Rowerów nie wolno trzymać na korytarzu.","Rowery trzyma się w piwnicy.","Po dwudziestej drugiej nie wolno hałasować.","Warto poznać sąsiadów — to zawsze pomaga.","W zeszłym roku trzeba było płacić za piwnicę osobno.","Od maja można będzie korzystać z podwórka do dwudziestej trzeciej.","Mówi się, że latem będzie remont klatki schodowej.","W razie problemu trzeba dzwonić do administracji."],
   "translation":"Мусор нужно сортировать — контейнеры стоят у ворот. Парковаться можно только с правой стороны. Велосипеды нельзя держать в коридоре. Велосипеды держат в подвале. После десяти вечера нельзя шуметь. Стоит познакомиться с соседями — это всегда помогает. В прошлом году за подвал надо было платить отдельно. С мая двором можно будет пользоваться до одиннадцати вечера. Говорят, что летом будет ремонт подъезда. В случае проблемы нужно звонить в администрацию."
 },
 "quiz":{
   "intro":"Пять вопросов — и любые правила ты прочитаешь и произнесёшь сам(а).",
   "items":[
     {"q":"1. «Здесь нужно купить билет» —","opts":["Tu trzeba kupić bilet","Tu trzeba kupuję bilet","Tu jest trzeba kupić bilet"],"answer":0,
      "explain":"После <b>trzeba</b> идёт инфинитив, подлежащего в этой фразе нет вовсе."},
     {"q":"2. «Курить здесь запрещено» —","opts":["Nie trzeba tu palić","Nie wolno tu palić","Nie warto tu palić"],"answer":1,
      "explain":"Запрет — это <b>nie wolno</b>. Nie trzeba значит «не обязательно»."},
     {"q":"3. «Надо было сказать раньше» —","opts":["Trzeba był powiedzieć wcześniej","Trzeba było powiedzieć wcześniej","Trzeba będzie powiedzieć wcześniej"],"answer":1,
      "explain":"Прошедшее у безличных слов — всегда <b>było</b>."},
     {"q":"4. Что значит <b>Mów wolniej</b>?","opts":["говорить нельзя","говори помедленнее","говори свободно"],"answer":1,
      "explain":"Здесь wolno работает как наречие скорости: <b>wolniej</b> — «медленнее»."},
     {"q":"5. «Говорят, что там красиво» —","opts":["Mówią się, że tam jest pięknie","Mówi się, że tam jest pięknie","Mówi, że tam jest pięknie"],"answer":1,
      "explain":"Безличное się идёт с третьим лицом единственного числа: <b>mówi się</b>."}
   ]
 },
 "essay":{
   "intro":"Опиши правила своего дома — как будто пишешь объявление для нового жильца.",
   "prompt":"Напиши 5–6 предложений: что в твоём доме нужно делать, что можно, чего нельзя, что стоит сделать новичку и что надо было сделать давно.",
   "hint":"Опора: Trzeba… · Można… · Nie wolno… · Warto… · Trzeba było… · Mówi się, że… 🏠",
   "example":"W naszym domu śmieci trzeba segregować. Parkować można tylko przed bramą. Po dwudziestej drugiej nie wolno hałasować. Warto poznać sąsiadów — pomogą przy każdej awarii. Trzeba było wcześniej kupić dywan, bo sąsiedzi z dołu wszystko słyszą. Mówi się, że latem będzie remont."
 }
},
"19": {
 "day":19,"week":"03",
 "themeRu":"Построили, открыто",
 "themeEn":"Zbudowano, otwarto",
 "intro":"Кто построил Сукеннице? По-польски на этот вопрос можно ответить, вообще не называя строителей: <b>Sukiennice zbudowano w XIV wieku</b>. Форма на -no/-to — единственное место недели, где русского двойника один в один нет. Знакомиться с ней будем там, где она живёт гуще всего: в истории Кракова и в городских объявлениях.",
 "introAudio":"Кто построил Сукеннице? По-польски на этот вопрос можно ответить, вообще не называя строителей: Sukiennice zbudowano w czternastym wieku. Форма на no и to — единственное место недели, где русского двойника один в один нет. Знакомиться с ней будем там, где она живёт гуще всего: в истории Кракова и в городских объявлениях.",
 "goals":[
   "Узнавать и строить формы на <b>-no/-to</b>: zbudowano, otwarto, zamknięto",
   "Помнить, что форма <b>не меняется</b> ни по роду, ни по числу",
   "Ставить дополнение правильно: <b>zbudowano szkołę</b> · <b>nie zbudowano szkoły</b>",
   "Читать исторические справки и городские объявления"
 ],
 "learned":[
   "Узнал(а) и построил(а) формы на -no/-to: zbudowano, otwarto, zamknięto",
   "Запомнил(а), что форма не меняется ни по роду, ни по числу",
   "Поставил(а) дополнение правильно: zbudowano szkołę · nie zbudowano szkoły",
   "Прочитал(а) исторические справки и городские объявления"
 ],
 "review":{
   "intro":"Вчерашние правила дома — на разминку. И два постоянных вопроса: приставка и вид.",
   "introAudio":"Вчерашние правила дома — на разминку. И два постоянных вопроса: приставка и вид.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> проверь, что стоит после безличного слова.",
      "q":"«Нужно купить билет» —","opts":["Trzeba kupuję bilet","Trzeba kupić bilet","Trzeba jest kupić bilet"],"answer":1,
      "explain":"После <b>trzeba</b> идёт инфинитив, подлежащего у этой фразы нет."},
     {"type":"choice","howto":"<b>Что делать:</b> выбери силу запрета.",
      "q":"«Здесь курить запрещено» —","opts":["Nie trzeba tu palić","Nie wolno tu palić","Nie warto tu palić"],"answer":1,
      "explain":"Запрет — <b>nie wolno</b>. Nie trzeba значит «не обязательно», nie warto — «не стоит»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, какой род берут безличные слова.",
      "q":"«Можно было спросить» —","opts":["Można był zapytać","Można było zapytać","Można będzie zapytać"],"answer":1,
      "explain":"Прошедшее у безличных — всегда <b>było</b>: można było."},
     {"type":"choice","howto":"<b>Что делать:</b> приставка держит весь смысл.",
      "q":"«Мы объехали центр стороной» — ___ centrum bokiem.","opts":["Przejechaliśmy","Objechaliśmy","Wjechaliśmy"],"answer":1,
      "explain":"ob- отвечает русскому об-: <b>objechaliśmy</b>. Przejechaliśmy — проехали, wjechaliśmy — въехали."},
     {"type":"choice","howto":"<b>Что делать:</b> ищи маркер длительности.",
      "q":"Ten most ___ trzy lata.","opts":["zbudowali","budowali","zbudują"],"answer":1,
      "explain":"«Три года» — процесс, значит несовершенный вид: <b>budowali</b>."},
     {"type":"type","howto":"Напиши совет из путеводителя. Диакритику можно не ставить.",
      "q":"«Стоит познакомиться с соседями»","accept":["warto poznać sąsiadów","warto poznac sasiadow","warto poznać sasiadow"],"placeholder":"Warto poznać…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Новая форма",
    "title":"<em>Zbudowano</em> — «построили», без «они»",
    "paras":[
      "Честно предупреждаю: это единственная тема недели, у которой нет русского двойника один в один. Русский в таких случаях берёт форму «они»: «музей построили в 1900 году». Польский строит отдельную форму — <b>zbudowano</b>, и она не принадлежит никому.",
      "Делается она от глагола совершенного вида: <b>zbudować → zbudowano</b>, <b>napisać → napisano</b>, <b>zrobić → zrobiono</b>, <b>powiedzieć → powiedziano</b>, <b>znaleźć → znaleziono</b>, <b>sprzedać → sprzedano</b>, <b>założyć → założono</b>.",
      "Небольшая группа берёт <b>-to</b> вместо -no: это глаголы на -ąć и -nąć — <b>zamknąć → zamknięto</b>, <b>zacząć → zaczęto</b>, <b>wziąć → wzięto</b>. Плюс одно частое исключение: <b>otworzyć → otwarto</b>.",
      "Завтра ты увидишь, что эти формы — близкая родня причастий (zbudowany, otwarty, zamknięty). Сегодня просто запомни пары: у -ny всегда -no, у -ty всегда -to. Ударение обычное, на предпоследнем слоге: <b>zbudowano</b> [збудова́но]."
    ],
    "audio":"Честно предупреждаю: это единственная тема недели, у которой нет русского двойника один в один. Русский в таких случаях берёт форму «они»: музей построили в тысяча девятисотом году. Польский строит отдельную форму, zbudowano, и она не принадлежит никому. Делается она от глагола совершенного вида: zbudować — zbudowano, napisać — napisano, zrobić — zrobiono, powiedzieć — powiedziano, znaleźć — znaleziono, sprzedać — sprzedano, założyć — założono. Небольшая группа берёт to вместо no: глаголы на ąć и nąć — zamknąć, zamknięto; zacząć, zaczęto; wziąć, wzięto. Плюс частое исключение: otworzyć, otwarto. Завтра ты увидишь, что эти формы — близкая родня причастий. Ударение обычное, на предпоследнем слоге: zbudowano.",
    "table":{"rows":[
      ["zbudować → <b>zbudowano</b> <button class=\"play\" data-say=\"zbudowano\">🔊</button>","построили"],
      ["napisać → <b>napisano</b> <button class=\"play\" data-say=\"napisano\">🔊</button>","написали"],
      ["zrobić → <b>zrobiono</b> <button class=\"play\" data-say=\"zrobiono\">🔊</button>","сделали"],
      ["znaleźć → <b>znaleziono</b> <button class=\"play\" data-say=\"znaleziono\">🔊</button>","нашли"],
      ["zamknąć → <b>zamknięto</b> <button class=\"play\" data-say=\"zamknięto\">🔊</button>","закрыли (глагол на -nąć → -to)"],
      ["otworzyć → <b>otwarto</b> <button class=\"play\" data-say=\"otwarto\">🔊</button>","открыли (исключение с -to)"]
    ],"star":0},
    "examples":[
      {"ru":"Музей построили в 1900 году.","en":"Muzeum <b>zbudowano</b> w tysiąc dziewięćsetnym roku.","gloss":"формы «они» в польской фразе нет вовсе","say":"Muzeum zbudowano w tysiąc dziewięćsetnym roku."},
      {"ru":"Магазин закрыли в мае.","en":"Sklep <b>zamknięto</b> w maju.","say":"Sklep zamknięto w maju."},
      {"ru":"Ключи нашли во дворе.","en":"Klucze <b>znaleziono</b> na podwórku.","say":"Klucze znaleziono na podwórku."},
      {"ru":"Об этом написали во всех газетах.","en":"<b>Napisano</b> o tym we wszystkich gazetach.","say":"Napisano o tym we wszystkich gazetach."}
    ],
    "mistakes":[
      {"wrong":"Muzeum zbudowano było w 1900 roku.","right":"Muzeum <b>zbudowano</b> w 1900 roku.","why":"форма уже прошедшая сама по себе — никакого było к ней не добавляют."},
      {"wrong":"Sklep otworzono w maju.","right":"Sklep <b>otwarto</b> w maju.","why":"у otworzyć форма исключительная: otwarto, а не otworzono."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, какая группа берёт -to.",
       "q":"Безличная форма от <b>zamknąć</b> —","opts":["zamknięto","zamknięno","zamkniono"],"answer":0,
       "explain":"Глаголы на -ąć и -nąć дают -to: <b>zamknięto</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> это то самое исключение.",
       "q":"Безличная форма от <b>otworzyć</b> —","opts":["otworzono","otwarto","otworzyto"],"answer":1,
       "explain":"У otworzyć форма <b>otwarto</b> — её просто запоминают, как и причастие otwarty."},
      {"type":"type","howto":"Напиши безличную форму от zbudować. Диакритику можно не ставить.",
       "q":"«Построили» (безлично, одним словом)","accept":["zbudowano"],"placeholder":"zbudow…"}
    ],
    "mnemonic":"🏗️ -ny → -no (zbudowany → zbudowano) · -ty → -to (otwarty → otwarto)."
   },
   {
    "eyebrow":"Правило 2 · Как она себя ведёт",
    "title":"Форма не меняется, подлежащего нет",
    "paras":[
      "Главное свойство: форма <b>неизменяема</b>. Ни рода, ни числа. <b>Zbudowano szkołę</b>, <b>zbudowano most</b>, <b>zbudowano muzeum</b>, <b>zbudowano dwa domy</b> — слово zbudowano везде одно и то же.",
      "Подлежащего в такой фразе нет вообще, поэтому вопроса «кто построил» она не задаёт и не отвечает. Именно это и нужно, когда исполнитель неважен или неизвестен.",
      "Дополнение стоит в <b>винительном</b> падеже, как при обычном глаголе: <b>Otwarto nową szkołę.</b> <b>Sprzedano wszystkie bilety.</b>",
      "А при отрицании включается знакомое правило: винительный меняется на родительный. <b>Nie zbudowano nowego mostu.</b> <b>Nie znaleziono kluczy.</b> Та же механика, что в nie mam czasu."
    ],
    "audio":"Главное свойство: форма неизменяема. Ни рода, ни числа. Zbudowano szkołę, zbudowano most, zbudowano muzeum, zbudowano dwa domy — слово zbudowano везде одно и то же. Подлежащего в такой фразе нет вообще, поэтому вопроса «кто построил» она не задаёт и не отвечает. Именно это и нужно, когда исполнитель неважен или неизвестен. Дополнение стоит в винительном падеже, как при обычном глаголе: otwarto nową szkołę, sprzedano wszystkie bilety. А при отрицании включается знакомое правило: винительный меняется на родительный. Nie zbudowano nowego mostu. Nie znaleziono kluczy.",
    "table":{"rows":[
      ["<b>Zbudowano</b> szkołę. <button class=\"play\" data-say=\"Zbudowano szkołę\">🔊</button>","Построили школу. (ж. р.)"],
      ["<b>Zbudowano</b> most. <button class=\"play\" data-say=\"Zbudowano most\">🔊</button>","Построили мост. (м. р. — форма та же)"],
      ["<b>Zbudowano</b> dwa domy. <button class=\"play\" data-say=\"Zbudowano dwa domy\">🔊</button>","Построили два дома. (мн. ч. — форма та же)"],
      ["<b>Sprzedano</b> wszystkie bilety. <button class=\"play\" data-say=\"Sprzedano wszystkie bilety\">🔊</button>","Продали все билеты."],
      ["<b>Nie zbudowano</b> nowego mostu. <button class=\"play\" data-say=\"Nie zbudowano nowego mostu\">🔊</button>","Новый мост не построили. (родительный)"]
    ],"star":0},
    "examples":[
      {"ru":"В центре открыли новую библиотеку.","en":"W centrum <b>otwarto</b> nową bibliotekę.","say":"W centrum otwarto nową bibliotekę."},
      {"ru":"Билеты продали за один день.","en":"Bilety <b>sprzedano</b> w jeden dzień.","say":"Bilety sprzedano w jeden dzień."},
      {"ru":"Ключей так и не нашли.","en":"Kluczy nigdy <b>nie znaleziono</b>.","gloss":"после отрицания — родительный: kluczy","say":"Kluczy nigdy nie znaleziono."},
      {"ru":"Об этом решении ничего не сказали.","en":"O tej decyzji nic <b>nie powiedziano</b>.","say":"O tej decyzji nic nie powiedziano."}
    ],
    "mistakes":[
      {"wrong":"Zbudowana szkołę w 1900 roku.","right":"<b>Zbudowano</b> szkołę w 1900 roku.","why":"форма не согласуется ни с чем: она всегда одна — zbudowano."},
      {"wrong":"Nie zbudowano nowy most.","right":"Nie zbudowano nowe<b>go</b> most<b>u</b>.","why":"отрицание переводит дополнение в родительный падеж — как в nie mam czasu."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь, меняется ли форма по роду.",
       "q":"«Школу построили в 1900 году» (безличной формой) —","opts":["Szkołę zbudowana w 1900 roku","Szkołę zbudowano w 1900 roku","Szkołę zbudowany w 1900 roku"],"answer":1,
       "explain":"Форма неизменяема: <b>zbudowano</b> и для школы, и для моста, и для двух домов."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что делает отрицание с падежом.",
       "q":"«Новый мост не построили» —","opts":["Nie zbudowano nowy most","Nie zbudowano nowego mostu","Nie zbudowana nowego mostu"],"answer":1,
       "explain":"После отрицания дополнение уходит в родительный: <b>nowego mostu</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«В центре открыли новую библиотеку»</b>","answer":"W centrum otwarto nową bibliotekę"}
    ],
    "mnemonic":"🧱 Одна форма на все роды и числа. Дополнение — винительный, при nie — родительный."
   },
   {
    "eyebrow":"Правило 3 · Когда её берут",
    "title":"<em>Zbudowano</em> или <em>zbudowali</em>?",
    "paras":[
      "Обе фразы правильные, но говорят они о разном. <b>Zbudowali nową szkołę</b> — «они построили», за действием стоят конкретные люди. <b>Zbudowano nową szkołę</b> — «школу построили», кто именно, неважно или неизвестно.",
      "Поэтому безличная форма — язык учебников истории, новостей, табличек и официальных бумаг. В живом разговоре чаще звучит обычная форма «они»: <b>Wczoraj zamknęli naszą ulicę.</b>",
      "Несовершенный вид тоже умеет так делать, и смысл получается «долго делали»: <b>Most budowano trzy lata.</b> <b>O tym mówiono w całym mieście.</b> Пара budowano / zbudowano работает как русская «строили / построили».",
      "И важное ограничение: эта форма бывает только в прошедшем времени. Для настоящего берут <b>się</b> из вчерашнего дня: <b>Tu buduje się nowy most</b> — «здесь строят новый мост»."
    ],
    "audio":"Обе фразы правильные, но говорят они о разном. Zbudowali nową szkołę — они построили, за действием стоят конкретные люди. Zbudowano nową szkołę — школу построили, кто именно, неважно или неизвестно. Поэтому безличная форма — язык учебников истории, новостей, табличек и официальных бумаг. В живом разговоре чаще звучит обычная форма «они»: wczoraj zamknęli naszą ulicę. Несовершенный вид тоже умеет так делать, и смысл получается «долго делали»: most budowano trzy lata; o tym mówiono w całym mieście. Пара budowano, zbudowano работает как русская «строили, построили». И важное ограничение: эта форма бывает только в прошедшем времени. Для настоящего берут się из вчерашнего дня: tu buduje się nowy most.",
    "table":{"rows":[
      ["<b>Zbudowali</b> nową szkołę. <button class=\"play\" data-say=\"Zbudowali nową szkołę\">🔊</button>","Они построили новую школу. (есть исполнители)"],
      ["<b>Zbudowano</b> nową szkołę. <button class=\"play\" data-say=\"Zbudowano nową szkołę\">🔊</button>","Новую школу построили. (кто — неважно)"],
      ["Most <b>budowano</b> trzy lata. <button class=\"play\" data-say=\"Most budowano trzy lata\">🔊</button>","Мост строили три года. (процесс)"],
      ["O tym <b>mówiono</b> w całym mieście. <button class=\"play\" data-say=\"O tym mówiono w całym mieście\">🔊</button>","Об этом говорили по всему городу."],
      ["Tu <b>buduje się</b> nowy most. <button class=\"play\" data-say=\"Tu buduje się nowy most\">🔊</button>","Здесь строят новый мост. (настоящее — только się)"]
    ],"star":1},
    "examples":[
      {"ru":"Мост строили три года и открыли только в мае.","en":"Most <b>budowano</b> trzy lata i <b>otwarto</b> dopiero w maju.","gloss":"процесс и результат рядом","say":"Most budowano trzy lata i otwarto dopiero w maju."},
      {"ru":"Здесь строят новую линию трамвая.","en":"Tu <b>buduje się</b> nową linię tramwajową.","say":"Tu buduje się nową linię tramwajową."},
      {"ru":"Вчера нашу улицу закрыли на ремонт.","en":"Wczoraj <b>zamknięto</b> naszą ulicę z powodu remontu.","say":"Wczoraj zamknięto naszą ulicę z powodu remontu."}
    ],
    "mistakes":[
      {"wrong":"Teraz buduje nowy most. (в смысле «сейчас строят»)","right":"Teraz <b>buduje się</b> nowy most.","why":"формы на -no/-to живут только в прошедшем. Настоящее безличное делается через się."},
      {"wrong":"Jutro otwarto nowy sklep.","right":"Jutro <b>zostanie otwarty</b> nowy sklep.","why":"это будущее, а форма otwarto — только прошедшее. Как сказать иначе, узнаем завтра."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на время.",
       "q":"«Здесь строят новый мост» (сейчас) —","opts":["Tu zbudowano nowy most","Tu buduje się nowy most","Tu budowano nowy most"],"answer":1,
       "explain":"Формы на -no/-to бывают только в прошедшем. Настоящее безличное — через <b>się</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри на слова длительности.",
       "q":"«Мост строили три года» —","opts":["Most zbudowano trzy lata","Most budowano trzy lata","Most buduje się trzy lata"],"answer":1,
       "explain":"«Три года» — процесс, значит несовершенный вид: <b>budowano</b>."},
      {"type":"type","howto":"Напиши городскую новость. Диакритику можно не ставить.",
       "q":"«Магазин закрыли в мае» (безличной формой)","accept":["sklep zamknięto w maju","sklep zamknieto w maju","zamknięto sklep w maju","zamknieto sklep w maju"],"placeholder":"Sklep zamkni…"}
    ],
    "mnemonic":"📰 Разговор — zbudowali. Учебник и новость — zbudowano. Сейчас — buduje się."
   },
   {
    "eyebrow":"Правило 4 · Краков в датах",
    "title":"Где эта форма живёт на самом деле",
    "paras":[
      "Открой любой путеводитель по Кракову — и увидишь её в каждом абзаце. <b>W 1364 roku założono Uniwersytet Jagielloński.</b> <b>Kościół Mariacki zbudowano w XIV wieku.</b> <b>Barbakan zbudowano pod koniec XV wieku.</b>",
      "<b>W 1596 roku dwór królewski przeniesiono do Warszawy</b> — «в 1596 году королевский двор перенесли в Варшаву». <b>Sukiennice odbudowano po pożarze w XVI wieku.</b> <b>Planty założono na początku XIX wieku.</b>",
      "Второй дом этой формы — городские объявления и новости: <b>Zamknięto ulicę Karmelicką.</b> <b>Otwarto nową linię tramwajową.</b> <b>Znaleziono portfel — proszę zgłosić się do ochrony.</b>",
      "Читать такие тексты — половина сертификатного экзамена. Хорошая новость: понимать эти формы проще, чем строить, а строить их нужно всего десяток самых частых."
    ],
    "audio":"Открой любой путеводитель по Кракову — и увидишь её в каждом абзаце. W tysiąc trzysta sześćdziesiątym czwartym roku założono Uniwersytet Jagielloński. Kościół Mariacki zbudowano w czternastym wieku. Barbakan zbudowano pod koniec piętnastego wieku. W tysiąc pięćset dziewięćdziesiątym szóstym roku dwór królewski przeniesiono do Warszawy. Sukiennice odbudowano po pożarze w szesnastym wieku. Planty założono na początku dziewiętnastego wieku. Второй дом этой формы — городские объявления и новости: zamknięto ulicę Karmelicką; otwarto nową linię tramwajową; znaleziono portfel. Читать такие тексты — половина сертификатного экзамена.",
    "table":{"rows":[
      ["W 1364 roku <b>założono</b> Uniwersytet Jagielloński. <button class=\"play\" data-say=\"W tysiąc trzysta sześćdziesiątym czwartym roku założono Uniwersytet Jagielloński\">🔊</button>","В 1364 году основали Ягеллонский университет."],
      ["Kościół Mariacki <b>zbudowano</b> w XIV wieku. <button class=\"play\" data-say=\"Kościół Mariacki zbudowano w czternastym wieku\">🔊</button>","Мариацкий костёл построили в XIV веке."],
      ["Dwór królewski <b>przeniesiono</b> do Warszawy. <button class=\"play\" data-say=\"Dwór królewski przeniesiono do Warszawy\">🔊</button>","Королевский двор перенесли в Варшаву."],
      ["Sukiennice <b>odbudowano</b> po pożarze. <button class=\"play\" data-say=\"Sukiennice odbudowano po pożarze\">🔊</button>","Сукеннице отстроили после пожара."],
      ["<b>Znaleziono</b> portfel. <button class=\"play\" data-say=\"Znaleziono portfel\">🔊</button>","Найден кошелёк. (объявление)"],
      ["<b>Zamknięto</b> ulicę Karmelicką. <button class=\"play\" data-say=\"Zamknięto ulicę Karmelicką\">🔊</button>","Улицу Кармелицкую закрыли."]
    ],"star":0},
    "examples":[
      {"ru":"Планты разбили в начале XIX века.","en":"Planty <b>założono</b> na początku XIX wieku.","gloss":"Planty — зелёное кольцо вокруг Старого города","say":"Planty założono na początku dziewiętnastego wieku."},
      {"ru":"Нову-Гуту построили после Второй мировой войны.","en":"Nową Hutę <b>zbudowano</b> po drugiej wojnie światowej.","say":"Nową Hutę zbudowano po drugiej wojnie światowej."},
      {"ru":"Открыли новую трамвайную линию.","en":"<b>Otwarto</b> nową linię tramwajową.","say":"Otwarto nową linię tramwajową."}
    ],
    "mistakes":[
      {"wrong":"W 1364 roku założyło Uniwersytet Jagielloński.","right":"W 1364 roku <b>założono</b> Uniwersytet Jagielloński.","why":"безличная форма кончается на -no и не меняется. Форма założyło требовала бы подлежащего среднего рода."},
      {"wrong":"Sukiennice odbudowany po pożarze.","right":"Sukiennice <b>odbudowano</b> po pożarze.","why":"причастие согласуется с существительным, а безличная форма — нет; здесь нужна именно она."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери безличную форму.",
       "q":"«В 1364 году основали Ягеллонский университет» —","opts":["W 1364 roku założona Uniwersytet Jagielloński","W 1364 roku założono Uniwersytet Jagielloński","W 1364 roku założonych Uniwersytet Jagielloński"],"answer":1,
       "explain":"Справочник говорит безличной формой: <b>założono</b>. Она не меняется и не требует подлежащего."},
      {"type":"choice","howto":"<b>Что делать:</b> это объявление о находке.",
       "q":"«Найден кошелёк» на доске объявлений —","opts":["Znajdowano portfel","Znaleziono portfel","Znaleziona portfel"],"answer":1,
       "explain":"Совершенный вид и безличная форма: <b>znaleziono</b>."},
      {"type":"speak","howto":"Нажми микрофон и прочитай справку вслух.",
       "target":"Kościół Mariacki zbudowano w XIV wieku.","sub":"Мариацкий костёл построили в XIV веке","want":"zbudowano"}
    ],
    "mnemonic":"🏛️ założono · zbudowano · przeniesiono · odbudowano — язык дат и городских табличек."
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек гуляют по Кракову с путеводителем в руках. Тапни по строке — услышишь фразу.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Posłuchaj, co tu piszą o Sukiennicach.","ru":"Послушай, что тут пишут о Сукеннице.",
      "words":[["Posłuchaj","послушай"],["piszą","пишут"]]},
     {"who":"M","name":"Marek","side":"right","en":"Czytaj, mam czas.","ru":"Читай, у меня есть время.",
      "words":[["Czytaj","читай"],["mam czas","у меня есть время"]]},
     {"who":"A","name":"Anna","side":"left","en":"Sukiennice zbudowano w XIV wieku, a potem odbudowano po pożarze.","ru":"Сукеннице построили в XIV веке, а потом отстроили после пожара.",
      "words":[["zbudowano","построили"],["odbudowano","отстроили"]]},
     {"who":"M","name":"Marek","side":"right","en":"A uniwersytet? Wiem, że jest bardzo stary.","ru":"А университет? Я знаю, что он очень старый.",
      "words":[["uniwersytet","университет"],["stary","старый"]]},
     {"who":"A","name":"Anna","side":"left","en":"Założono go w 1364 roku. To jeden z najstarszych w Europie.","ru":"Его основали в 1364 году. Это один из самых старых в Европе.",
      "words":[["Założono","основали"],["najstarszych","самых старых"]]},
     {"who":"M","name":"Marek","side":"right","en":"A dlaczego stolicę przeniesiono do Warszawy?","ru":"А почему столицу перенесли в Варшаву?",
      "words":[["dlaczego","почему"],["przeniesiono","перенесли"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dwór królewski przeniesiono w 1596 roku. Kraków został miastem uniwersyteckim.","ru":"Королевский двор перенесли в 1596 году. Краков стал университетским городом.",
      "words":[["dwór królewski","королевский двор"],["został","стал"]]},
     {"who":"M","name":"Marek","side":"right","en":"Ciekawe. A tu piszą, że wczoraj zamknięto ulicę Karmelicką.","ru":"Интересно. А тут пишут, что вчера закрыли улицу Кармелицкую.",
      "words":[["Ciekawe","интересно"],["zamknięto","закрыли"]]},
     {"who":"A","name":"Anna","side":"left","en":"To nie przewodnik, to wiadomości z miasta.","ru":"Это не путеводитель, это городские новости.",
      "words":[["przewodnik","путеводитель"],["wiadomości","новости"]]}
   ]
 },
 "scene":{
   "intro":"Сценка у входа в музей: объявление на двери. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Zamknięte? Przecież była dziesiąta.","ru":"Закрыто? Но ведь было десять."},
     {"who":"B","en":"Muzeum zamknięto na remont w zeszłym tygodniu.","ru":"Музей закрыли на ремонт на прошлой неделе."},
     {"who":"A","en":"A kiedy otwarto tę nową salę na dole?","ru":"А когда открыли этот новый зал внизу?"},
     {"who":"B","en":"W marcu. Ale teraz wszystko zamknięto.","ru":"В марте. Но сейчас всё закрыли."},
     {"who":"A","en":"Trudno. Trzeba będzie wrócić latem.","ru":"Ничего не поделаешь. Надо будет вернуться летом."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — история города и городские новости.",
   "items":[
     {"en":"zbudowano","ru":"построили (безлично)","ex":"Kościół zbudowano w XIV wieku."},
     {"en":"założono","ru":"основали (безлично)","ex":"Uniwersytet założono w 1364 roku."},
     {"en":"otwarto / zamknięto","ru":"открыли / закрыли (безлично)","ex":"Sklep zamknięto w maju."},
     {"en":"znaleziono","ru":"нашли (безлично)","ex":"Znaleziono portfel."},
     {"en":"przeniesiono","ru":"перенесли (безлично)","ex":"Dwór przeniesiono do Warszawy."},
     {"en":"odbudowano","ru":"отстроили заново","ex":"Sukiennice odbudowano po pożarze."},
     {"en":"wiek","ru":"век","ex":"W XIV wieku."},
     {"en":"pożar","ru":"пожар","ex":"Po pożarze wszystko odbudowano."},
     {"en":"przewodnik","ru":"путеводитель; экскурсовод","ex":"Kupiłam przewodnik po Krakowie."},
     {"en":"remont","ru":"ремонт","ex":"Muzeum zamknięto na remont."},
     {"en":"wiadomości","ru":"новости","ex":"Czytam wiadomości z miasta."},
     {"en":"linia tramwajowa","ru":"трамвайная линия","ex":"Otwarto nową linię tramwajową."}
   ]
 },
 "drag":{
   "intro":"Перетащи безличную форму к её переводу.",
   "pairs":[["zbudowano","построили"],["otwarto","открыли"],["zamknięto","закрыли"],["znaleziono","нашли"]]
 },
 "reading":{
   "intro":"Прочитай и послушай короткую справку о Кракове. Сосчитай, сколько форм на -no и -to ты встретишь.",
   "title":"Kraków w kilku datach",
   "sentences":["Kraków był stolicą Polski przez kilka wieków.","W 1364 roku założono tu uniwersytet.","Kościół Mariacki zbudowano w XIV wieku.","Sukiennice odbudowano po pożarze w XVI wieku.","Barbakan zbudowano pod koniec XV wieku.","W 1596 roku dwór królewski przeniesiono do Warszawy.","Planty założono na początku XIX wieku, na miejscu dawnych murów.","Nową Hutę zbudowano po drugiej wojnie światowej.","O historii miasta napisano setki książek.","Dziś mówi się, że Kraków to najpiękniejsze miasto w Polsce — i trudno się nie zgodzić."],
   "translation":"Краков был столицей Польши несколько веков. В 1364 году здесь основали университет. Мариацкий костёл построили в XIV веке. Сукеннице отстроили после пожара в XVI веке. Барбакан построили в конце XV века. В 1596 году королевский двор перенесли в Варшаву. Планты разбили в начале XIX века, на месте прежних стен. Нову-Гуту построили после Второй мировой войны. Об истории города написали сотни книг. Сегодня говорят, что Краков — самый красивый город Польши, и трудно не согласиться."
 },
 "quiz":{
   "intro":"Пять вопросов — и самая нерусская форма недели станет своей.",
   "items":[
     {"q":"1. «Школу построили в 1900 году» (безличной формой) —","opts":["Szkołę zbudowana w 1900 roku","Szkołę zbudowano w 1900 roku","Szkołę zbudowany w 1900 roku"],"answer":1,
      "explain":"Форма <b>zbudowano</b> не меняется ни по роду, ни по числу."},
     {"q":"2. Безличная форма от <b>otworzyć</b> —","opts":["otworzono","otwarto","otwarono"],"answer":1,
      "explain":"Исключение, которое просто запоминают: <b>otwarto</b>."},
     {"q":"3. «Новый мост не построили» —","opts":["Nie zbudowano nowy most","Nie zbudowano nowego mostu","Nie zbudowana nowego mostu"],"answer":1,
      "explain":"Отрицание переводит дополнение в родительный: <b>nowego mostu</b>."},
     {"q":"4. «Здесь строят новый дом» (сейчас) —","opts":["Tu zbudowano nowy dom","Tu buduje się nowy dom","Tu budowano nowy dom"],"answer":1,
      "explain":"Формы на -no/-to бывают только в прошедшем; настоящее — через <b>się</b>."},
     {"q":"5. «Мост строили три года» —","opts":["Most zbudowano trzy lata","Most budowano trzy lata","Most zamknięto trzy lata"],"answer":1,
      "explain":"Длительный процесс — несовершенный вид: <b>budowano</b>."}
   ]
 },
 "essay":{
   "intro":"Побудь сегодня автором путеводителя — по своему городу.",
   "prompt":"Напиши 4–5 предложений об истории места, где ты живёшь: что и когда построили, что открыли или закрыли, о чём написали в новостях. Используй формы на -no/-to.",
   "hint":"Опора: zbudowano · założono · otwarto · zamknięto · przeniesiono · napisano 🏛️",
   "example":"Nasze miasto założono bardzo dawno temu. Pierwszy most zbudowano w XIX wieku. W centrum otwarto niedawno nową bibliotekę. Stary dworzec zamknięto dwa lata temu i do dziś nic tam nie zrobiono. O tej sprawie napisano wiele w lokalnych wiadomościach."
 }
},
"20": {
 "day":20,"week":"03",
 "themeRu":"Сделан и сделанный",
 "themeEn":"Strona bierna",
 "intro":"Табличка <b>Zamknięte</b> на двери магазина — это уже страдательный залог, просто очень короткий. Сегодня развернём его целиком: <b>jest zamknięty</b> — состояние, <b>został zamknięty</b> — событие. И заметь заранее: причастия на -ny и -ty — это русские «-нный» и «-тый», так что узнавать их ты будешь мгновенно.",
 "introAudio":"Табличка Zamknięte на двери магазина — это уже страдательный залог, просто очень короткий. Сегодня развернём его целиком: jest zamknięty — состояние, został zamknięty — событие. И заметь заранее: причастия на ny и ty — это русские «нный» и «тый», так что узнавать их ты будешь мгновенно.",
 "goals":[
   "Строить причастия: <b>napisany, zrobiony, zamknięty, otwarty</b>",
   "Описывать состояние: <b>Sklep jest zamknięty</b> · <b>Drzwi są otwarte</b>",
   "Описывать событие: <b>Sklep został otwarty w maju</b>",
   "Называть исполнителя: <b>List został napisany przez Annę</b>"
 ],
 "learned":[
   "Построил(а) причастия: napisany, zrobiony, zamknięty, otwarty",
   "Описал(а) состояние: Sklep jest zamknięty · Drzwi są otwarte",
   "Описал(а) событие: Sklep został otwarty w maju",
   "Назвал(а) исполнителя: List został napisany przez Annę"
 ],
 "review":{
   "intro":"Вчерашние безличные формы — на разминку. И привычная пара: приставка и вид.",
   "introAudio":"Вчерашние безличные формы — на разминку. И привычная пара: приставка и вид.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> проверь, меняется ли форма по роду.",
      "q":"«Библиотеку открыли в марте» (безличной формой) —","opts":["Bibliotekę otwarta w marcu","Bibliotekę otwarto w marcu","Bibliotekę otworzono w marcu"],"answer":1,
      "explain":"Форма от otworzyć исключительная и неизменяемая: <b>otwarto</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, что делает отрицание с падежом.",
      "q":"«Ключей не нашли» —","opts":["Nie znaleziono klucze","Nie znaleziono kluczy","Nie znaleziona kluczy"],"answer":1,
      "explain":"После отрицания дополнение уходит в родительный: <b>kluczy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на время.",
      "q":"«Здесь строят новую школу» (сейчас) —","opts":["Tu zbudowano nową szkołę","Tu buduje się nową szkołę","Tu budowano nową szkołę"],"answer":1,
      "explain":"Формы на -no/-to — только прошедшее. Настоящее безличное делается через <b>się</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> приставка держит весь смысл.",
      "q":"«Он переписал весь текст заново» — ___ cały tekst od nowa.","opts":["Podpisał","Przepisał","Zapisał"],"answer":1,
      "explain":"prze- отвечает русскому пере-: <b>przepisał</b>. Podpisał — подписал, zapisał — записал."},
     {"type":"choice","howto":"<b>Что делать:</b> ищи маркер результата.",
      "q":"Wreszcie ___ ten esej i wysłałam go.","opts":["pisałam","napisałam","piszę"],"answer":1,
      "explain":"«Наконец» и готовый результат — совершенный вид: <b>napisałam</b>."},
     {"type":"type","howto":"Напиши городскую новость. Диакритику можно не ставить.",
      "q":"«Магазин закрыли в мае» (безличной формой)","accept":["sklep zamknięto w maju","sklep zamknieto w maju","zamknięto sklep w maju","zamknieto sklep w maju"],"placeholder":"Sklep zamkni…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Причастие",
    "title":"<em>-ny</em> и <em>-ty</em> — это «-нный» и «-тый»",
    "paras":[
      "Русское «написанный, сделанный, закрытый, открытый» существует и в польском, буква в букву по логике: <b>napisany, zrobiony, zamknięty, otwarty</b>. Категория родная, менять мышление не нужно — нужно выучить три хвоста.",
      "Глаголы на <b>-ać</b> дают <b>-any</b>: napisać → <b>napisany</b>, sprzedać → <b>sprzedany</b>, zbudować → <b>zbudowany</b>, przygotować → <b>przygotowany</b>.",
      "Глаголы на <b>-ić</b> дают <b>-ony</b>, часто с чередованием согласной: zrobić → <b>zrobiony</b>, kupić → <b>kupiony</b>, zaprosić → <b>zaproszony</b>.",
      "Глаголы на <b>-ąć</b>, <b>-nąć</b> и короткие на -yć дают <b>-ty</b>: zamknąć → <b>zamknięty</b>, zacząć → <b>zaczęty</b>, wziąć → <b>wzięty</b>, umyć → <b>umyty</b>. Плюс вчерашнее исключение: otworzyć → <b>otwarty</b>. Все они склоняются как обычные прилагательные: zamknięty sklep, zamknięta szkoła, zamknięte drzwi."
    ],
    "audio":"Русское «написанный, сделанный, закрытый, открытый» существует и в польском, буква в букву по логике: napisany, zrobiony, zamknięty, otwarty. Категория родная, менять мышление не нужно — нужно выучить три хвоста. Глаголы на ać дают any: napisać — napisany, sprzedać — sprzedany, zbudować — zbudowany, przygotować — przygotowany. Глаголы на ić дают ony, часто с чередованием согласной: zrobić — zrobiony, kupić — kupiony, zaprosić — zaproszony. Глаголы на ąć, nąć и короткие на yć дают ty: zamknąć — zamknięty, zacząć — zaczęty, wziąć — wzięty, umyć — umyty. Плюс вчерашнее исключение: otworzyć — otwarty. Все они склоняются как обычные прилагательные.",
    "table":{"rows":[
      ["napisać → <b>napisany</b> <button class=\"play\" data-say=\"napisany\">🔊</button>","написанный (-ać → -any)"],
      ["sprzedać → <b>sprzedany</b> <button class=\"play\" data-say=\"sprzedany\">🔊</button>","проданный"],
      ["zrobić → <b>zrobiony</b> <button class=\"play\" data-say=\"zrobiony\">🔊</button>","сделанный (-ić → -ony)"],
      ["zaprosić → <b>zaproszony</b> <button class=\"play\" data-say=\"zaproszony\">🔊</button>","приглашённый (с чередованием)"],
      ["zamknąć → <b>zamknięty</b> <button class=\"play\" data-say=\"zamknięty\">🔊</button>","закрытый (-ąć/-nąć → -ty)"],
      ["otworzyć → <b>otwarty</b> <button class=\"play\" data-say=\"otwarty\">🔊</button>","открытый (исключение)"]
    ],"star":0},
    "examples":[
      {"ru":"написанное письмо","en":"<b>napisany</b> list","gloss":"причастие ведёт себя как прилагательное","say":"napisany list"},
      {"ru":"закрытая школа","en":"<b>zamknięta</b> szkoła","say":"zamknięta szkoła"},
      {"ru":"открытые двери","en":"<b>otwarte</b> drzwi","gloss":"drzwi живут только во множественном числе","say":"otwarte drzwi"},
      {"ru":"приглашённые гости","en":"<b>zaproszeni</b> goście","gloss":"мужско-личная форма из A2","say":"zaproszeni goście"}
    ],
    "mistakes":[
      {"wrong":"zamkniony sklep","right":"<b>zamknięty</b> sklep","why":"у глаголов на -ąć и -nąć хвост -ty: zamknięty. Форма на -ony принадлежит глаголам на -ić."},
      {"wrong":"otworzony sklep","right":"<b>otwarty</b> sklep","why":"otworzyć даёт исключительное otwarty — то же самое, что вчерашнее otwarto."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, на что кончается глагол.",
       "q":"Причастие от <b>zamknąć</b> —","opts":["zamkniony","zamknięty","zamknany"],"answer":1,
       "explain":"Глаголы на -ąć и -nąć берут хвост -ty: <b>zamknięty</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни хвост для глаголов на -ić.",
       "q":"Причастие от <b>zrobić</b> —","opts":["zrobiany","zrobiony","zrobity"],"answer":1,
       "explain":"Глаголы на -ić дают -ony: <b>zrobiony</b>, как русское «сделанный»."},
      {"type":"type","howto":"Напиши два слова. Диакритику можно не ставить.",
       "q":"«закрытая школа»","accept":["zamknięta szkoła","zamknieta szkola","zamknięta szkola","zamknieta szkoła"],"placeholder":"zamknię… szkoła"}
    ],
    "mnemonic":"🔤 -ać → -any · -ić → -ony · -ąć → -ty. Русские «-нный» и «-тый» на месте."
   },
   {
    "eyebrow":"Правило 2 · Состояние",
    "title":"<em>Sklep jest zamknięty</em>",
    "paras":[
      "Первая половина залога — про состояние: <b>być</b> плюс причастие. <b>Sklep jest zamknięty.</b> <b>Drzwi są otwarte.</b> <b>Wszystko jest gotowe.</b> Мы описываем, как обстоят дела сейчас, а не кто это сделал.",
      "Причастие согласуется с подлежащим, как прилагательное: <b>sklep jest zamknięty</b>, <b>szkoła jest zamknięta</b>, <b>muzeum jest zamknięte</b>, <b>sklepy są zamknięte</b>.",
      "В прошедшем — <b>był / była / było / były</b>: <b>Sklep był zamknięty przez cały tydzień</b> — «магазин был закрыт всю неделю». Это по-прежнему состояние, длившееся во времени.",
      "И тонкость, которую стоит знать: с несовершенным причастием такая рамка означает процесс. <b>Dom jest budowany od roku</b> — «дом строится уже год». Русское «строится» тут точно на месте."
    ],
    "audio":"Первая половина залога — про состояние: być плюс причастие. Sklep jest zamknięty. Drzwi są otwarte. Wszystko jest gotowe. Мы описываем, как обстоят дела сейчас, а не кто это сделал. Причастие согласуется с подлежащим, как прилагательное: sklep jest zamknięty, szkoła jest zamknięta, muzeum jest zamknięte, sklepy są zamknięte. В прошедшем — był, była, było, były: sklep był zamknięty przez cały tydzień. Это по-прежнему состояние, длившееся во времени. И тонкость, которую стоит знать: с несовершенным причастием такая рамка означает процесс. Dom jest budowany od roku — дом строится уже год.",
    "table":{"rows":[
      ["Sklep <b>jest zamknięty</b>. <button class=\"play\" data-say=\"Sklep jest zamknięty\">🔊</button>","Магазин закрыт."],
      ["Szkoła <b>jest zamknięta</b>. <button class=\"play\" data-say=\"Szkoła jest zamknięta\">🔊</button>","Школа закрыта."],
      ["Drzwi <b>są otwarte</b>. <button class=\"play\" data-say=\"Drzwi są otwarte\">🔊</button>","Двери открыты."],
      ["Muzeum <b>jest nieczynne</b>. <button class=\"play\" data-say=\"Muzeum jest nieczynne\">🔊</button>","Музей не работает."],
      ["Sklep <b>był zamknięty</b> cały tydzień. <button class=\"play\" data-say=\"Sklep był zamknięty cały tydzień\">🔊</button>","Магазин был закрыт всю неделю."],
      ["Dom <b>jest budowany</b> od roku. <button class=\"play\" data-say=\"Dom jest budowany od roku\">🔊</button>","Дом строится уже год."]
    ],"star":0},
    "examples":[
      {"ru":"Магазин открыт с восьми до двадцати.","en":"Sklep <b>jest otwarty</b> od ósmej do dwudziestej.","say":"Sklep jest otwarty od ósmej do dwudziestej."},
      {"ru":"Всё готово, стол накрыт.","en":"Wszystko <b>jest gotowe</b>, stół <b>nakryty</b>.","say":"Wszystko jest gotowe, stół nakryty."},
      {"ru":"Билеты уже проданы.","en":"Bilety <b>są</b> już <b>sprzedane</b>.","say":"Bilety są już sprzedane."},
      {"ru":"Музей был закрыт на ремонт.","en":"Muzeum <b>było zamknięte</b> z powodu remontu.","say":"Muzeum było zamknięte z powodu remontu."}
    ],
    "mistakes":[
      {"wrong":"Sklep jest zamknięte.","right":"Sklep <b>jest zamknięty</b>.","why":"причастие согласуется с подлежащим: sklep мужского рода — zamknięty."},
      {"wrong":"Drzwi jest zamknięty.","right":"Drzwi <b>są zamknięte</b>.","why":"drzwi существуют только во множественном числе, значит są и zamknięte."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь род подлежащего.",
       "q":"«Школа закрыта» —","opts":["Szkoła jest zamknięty","Szkoła jest zamknięta","Szkoła jest zamknięte"],"answer":1,
       "explain":"Причастие согласуется как прилагательное: szkoła — <b>zamknięta</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, какое число у слова drzwi.",
       "q":"«Двери открыты» —","opts":["Drzwi jest otwarty","Drzwi są otwarte","Drzwi jest otwarte"],"answer":1,
       "explain":"Drzwi всегда множественное: <b>są otwarte</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Магазин открыт с восьми»</b>","answer":"Sklep jest otwarty od ósmej"}
    ],
    "mnemonic":"🚪 być + причастие = как обстоят дела: jest zamknięty · są otwarte."
   },
   {
    "eyebrow":"Правило 3 · Событие",
    "title":"<em>Sklep został otwarty w maju</em>",
    "paras":[
      "Вторая половина залога — про событие: <b>zostać</b> плюс причастие совершенного вида. <b>Sklep został otwarty w maju</b> — «магазин открыли в мае», в определённый момент что-то произошло.",
      "Сравни две фразы. <b>Sklep jest zamknięty</b> — сейчас он закрыт (состояние). <b>Sklep został zamknięty w maju</b> — в мае его закрыли (событие). Русский различает их словами «закрыт» и «закрыли», польский — глаголами być и zostać.",
      "Формы согласуются полностью: <b>został / została / zostało / zostali / zostały</b> плюс причастие того же рода: <b>Goście zostali zaproszeni. Bilety zostały sprzedane.</b>",
      "Исполнитель, если он важен, вводится предлогом <b>przez</b> плюс винительный падеж: <b>List został napisany przez Annę.</b> <b>Ta książka została napisana przez znanego pisarza.</b>"
    ],
    "audio":"Вторая половина залога — про событие: zostać плюс причастие совершенного вида. Sklep został otwarty w maju — магазин открыли в мае, в определённый момент что-то произошло. Сравни две фразы. Sklep jest zamknięty — сейчас он закрыт, состояние. Sklep został zamknięty w maju — в мае его закрыли, событие. Русский различает их словами «закрыт» и «закрыли», польский — глаголами być и zostać. Формы согласуются полностью: został, została, zostało, zostali, zostały плюс причастие того же рода: goście zostali zaproszeni, bilety zostały sprzedane. Исполнитель, если он важен, вводится предлогом przez плюс винительный падеж: list został napisany przez Annę.",
    "table":{"rows":[
      ["Sklep <b>został otwarty</b> w maju. <button class=\"play\" data-say=\"Sklep został otwarty w maju\">🔊</button>","Магазин открыли в мае. (событие)"],
      ["Sklep <b>jest otwarty</b> od ósmej. <button class=\"play\" data-say=\"Sklep jest otwarty od ósmej\">🔊</button>","Магазин открыт с восьми. (состояние)"],
      ["List <b>został napisany</b> przez Annę. <button class=\"play\" data-say=\"List został napisany przez Annę\">🔊</button>","Письмо было написано Анной."],
      ["Goście <b>zostali zaproszeni</b>. <button class=\"play\" data-say=\"Goście zostali zaproszeni\">🔊</button>","Гостей пригласили."],
      ["Bilety <b>zostały sprzedane</b>. <button class=\"play\" data-say=\"Bilety zostały sprzedane\">🔊</button>","Билеты были проданы."],
      ["Sklep <b>zostanie otwarty</b> w maju. <button class=\"play\" data-say=\"Sklep zostanie otwarty w maju\">🔊</button>","Магазин откроют в мае. (будущее)"]
    ],"star":1},
    "examples":[
      {"ru":"Договор подписали вчера.","en":"Umowa <b>została podpisana</b> wczoraj.","say":"Umowa została podpisana wczoraj."},
      {"ru":"Эта книга написана известным писателем.","en":"Ta książka <b>została napisana przez</b> znanego pisarza.","gloss":"после przez — винительный падеж","say":"Ta książka została napisana przez znanego pisarza."},
      {"ru":"Новую линию откроют осенью.","en":"Nowa linia <b>zostanie otwarta</b> jesienią.","say":"Nowa linia zostanie otwarta jesienią."},
      {"ru":"Все гости были приглашены заранее.","en":"Wszyscy goście <b>zostali zaproszeni</b> wcześniej.","say":"Wszyscy goście zostali zaproszeni wcześniej."}
    ],
    "mistakes":[
      {"wrong":"List został napisany od Anny.","right":"List został napisany <b>przez Annę</b>.","why":"исполнителя вводит предлог przez плюс винительный: przez Annę."},
      {"wrong":"Sklep został otwarty od ósmej do dwudziestej.","right":"Sklep <b>jest otwarty</b> od ósmej do dwudziestej.","why":"часы работы — это состояние, а не событие: тут нужна рамка с być."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, это состояние или событие.",
       "q":"«Магазин открыли в мае» —","opts":["Sklep jest otwarty w maju","Sklep został otwarty w maju","Sklep otwarty jest w maju"],"answer":1,
       "explain":"Одномоментное событие — рамка с <b>zostać</b>: został otwarty."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни предлог исполнителя.",
       "q":"«Письмо было написано Анной» —","opts":["List został napisany od Anny","List został napisany przez Annę","List został napisany z Anną"],"answer":1,
       "explain":"Исполнитель идёт с <b>przez</b> плюс винительный: przez Annę."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Sklep został otwarty w maju.","sub":"магазин открыли в мае","want":"został otwarty"}
    ],
    "mnemonic":"⚡ jest zamknięty — как есть. został zamknięty — что произошло. przez + винительный — кем."
   },
   {
    "eyebrow":"Правило 4 · Вывески",
    "title":"<em>Zamknięte</em>, <em>Nieczynne</em>, <em>Wstęp wzbroniony</em>",
    "paras":[
      "На дверях и стенах причастие часто стоит в одиночку, без глагола, — и всё равно всё понятно. <b>Otwarte</b> — открыто. <b>Zamknięte</b> — закрыто. <b>Nieczynne</b> — не работает. <b>Świeżo malowane</b> — осторожно, окрашено.",
      "Форма среднего рода тут работает как русское безличное «открыто, закрыто»: вывеска не говорит, что именно закрыто, — это и так ясно.",
      "Более официальные надписи: <b>Wstęp wzbroniony</b> (вход воспрещён), <b>Zamknięte z powodu remontu</b> (закрыто по причине ремонта), <b>Sklep czynny w niedziele</b> (магазин работает по воскресеньям).",
      "Полезная пара для повседневности: <b>czynny / nieczynny</b> — «работающий / не работающий» о заведении и об оборудовании. <b>Bankomat nieczynny</b> — банкомат не работает."
    ],
    "audio":"На дверях и стенах причастие часто стоит в одиночку, без глагола, и всё равно всё понятно. Otwarte — открыто. Zamknięte — закрыто. Nieczynne — не работает. Świeżo malowane — осторожно, окрашено. Форма среднего рода тут работает как русское безличное «открыто, закрыто». Более официальные надписи: wstęp wzbroniony — вход воспрещён; zamknięte z powodu remontu — закрыто по причине ремонта; sklep czynny w niedziele — магазин работает по воскресеньям. Полезная пара для повседневности: czynny и nieczynny — работающий и не работающий, о заведении и об оборудовании. Bankomat nieczynny — банкомат не работает.",
    "table":{"rows":[
      ["<b>Otwarte</b> · <b>Zamknięte</b> <button class=\"play\" data-say=\"Otwarte. Zamknięte.\">🔊</button>","Открыто. Закрыто."],
      ["<b>Nieczynne</b> <button class=\"play\" data-say=\"Nieczynne\">🔊</button>","Не работает."],
      ["<b>Świeżo malowane</b> <button class=\"play\" data-say=\"Świeżo malowane\">🔊</button>","Осторожно, окрашено."],
      ["<b>Wstęp wzbroniony</b> <button class=\"play\" data-say=\"Wstęp wzbroniony\">🔊</button>","Вход воспрещён."],
      ["<b>Zamknięte z powodu remontu</b> <button class=\"play\" data-say=\"Zamknięte z powodu remontu\">🔊</button>","Закрыто по причине ремонта."],
      ["<b>Bankomat nieczynny</b> <button class=\"play\" data-say=\"Bankomat nieczynny\">🔊</button>","Банкомат не работает."]
    ],"star":1},
    "examples":[
      {"ru":"Закрыто по причине ремонта — откроют в мае.","en":"<b>Zamknięte z powodu remontu</b> — sklep <b>zostanie otwarty</b> w maju.","say":"Zamknięte z powodu remontu. Sklep zostanie otwarty w maju."},
      {"ru":"Касса не работает, платите картой.","en":"Kasa <b>nieczynna</b>, proszę płacić kartą.","say":"Kasa nieczynna, proszę płacić kartą."},
      {"ru":"Магазин работает по воскресеньям.","en":"Sklep <b>czynny</b> w niedziele.","say":"Sklep czynny w niedziele."}
    ],
    "mistakes":[
      {"wrong":"Sklep jest nieczynne.","right":"Sklep <b>jest nieczynny</b>.","why":"с подлежащим форма согласуется: sklep — nieczynny. Средний род остаётся только вывеске без подлежащего."},
      {"wrong":"Zamknięty z powodu remontu. (надпись на двери)","right":"<b>Zamknięte</b> z powodu remontu.","why":"вывеска без подлежащего берёт средний род, как русское «закрыто»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, какой род берёт вывеска.",
       "q":"Надпись на двери магазина «Закрыто» —","opts":["Zamknięty","Zamknięte","Zamknięta"],"answer":1,
       "explain":"Вывеска без подлежащего идёт средним родом: <b>Zamknięte</b>, как русское «закрыто»."},
      {"type":"choice","howto":"<b>Что делать:</b> подбери надпись по смыслу.",
       "q":"Банкомат не работает —","opts":["Bankomat nieczynny","Bankomat niewolny","Bankomat zamknięty z powodu"],"answer":0,
       "explain":"Об оборудовании и заведениях говорят <b>czynny / nieczynny</b>."},
      {"type":"type","howto":"Напиши надпись с причиной. Диакритику можно не ставить.",
       "q":"«Закрыто по причине ремонта»","accept":["zamknięte z powodu remontu","zamkniete z powodu remontu"],"placeholder":"Zamknięte z powodu…"}
    ],
    "mnemonic":"🪧 Otwarte · Zamknięte · Nieczynne — средний род вывески. Czynny / nieczynny — про заведение."
   }
 ],
 "dialogue":{
   "intro":"Суббота, Анна с Мареком идут за подарком — и упираются в закрытую дверь. Тапни по строке, чтобы услышать фразу.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Sklep jest zamknięty? Przecież jest sobota.","ru":"Магазин закрыт? Но ведь суббота.",
      "words":[["jest zamknięty","закрыт"],["Przecież","ведь"]]},
     {"who":"A","name":"Anna","side":"left","en":"Na drzwiach wisi kartka: zamknięte z powodu remontu.","ru":"На двери висит записка: закрыто по причине ремонта.",
      "words":[["kartka","записка"],["z powodu remontu","по причине ремонта"]]},
     {"who":"M","name":"Marek","side":"right","en":"A jest napisane, kiedy otworzą?","ru":"А написано, когда откроют?",
      "words":[["jest napisane","написано"],["otworzą","откроют"]]},
     {"who":"A","name":"Anna","side":"left","en":"Tak. Sklep zostanie otwarty pierwszego maja.","ru":"Да. Магазин откроют первого мая.",
      "words":[["zostanie otwarty","будет открыт"],["pierwszego maja","первого мая"]]},
     {"who":"M","name":"Marek","side":"right","en":"Szkoda. Prezent miał być kupiony dzisiaj.","ru":"Жаль. Подарок должен был быть куплен сегодня.",
      "words":[["Szkoda","жаль"],["kupiony","купленный"]]},
     {"who":"A","name":"Anna","side":"left","en":"Spokojnie. Obok jest księgarnia i jest otwarta.","ru":"Спокойно. Рядом книжный, и он открыт.",
      "words":[["Obok","рядом"],["księgarnia","книжный магазин"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dobry pomysł. Kasia mówiła, że lubi kryminały.","ru":"Хорошая идея. Кася говорила, что любит детективы.",
      "words":[["pomysł","идея"],["kryminały","детективы"]]},
     {"who":"A","name":"Anna","side":"left","en":"Ta książka została napisana przez jej ulubioną autorkę.","ru":"Эта книга написана её любимой писательницей.",
      "words":[["została napisana","была написана"],["przez","кем"]]},
     {"who":"M","name":"Marek","side":"right","en":"Bierzemy. I niech będzie ładnie zapakowana.","ru":"Берём. И пусть будет красиво упакована.",
      "words":[["Bierzemy","берём"],["zapakowana","упакованная"]]}
   ]
 },
 "scene":{
   "intro":"Сценка у входа в бассейн — три вывески за полминуты. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Basen jest dziś czynny?","ru":"Бассейн сегодня работает?"},
     {"who":"B","en":"Do osiemnastej. Potem będzie zamknięty.","ru":"До шести вечера. Потом будет закрыт."},
     {"who":"A","en":"A szatnia? Widzę kartkę: nieczynna.","ru":"А раздевалка? Вижу записку: не работает."},
     {"who":"B","en":"Ta mała jest nieczynna, duża została otwarta wczoraj.","ru":"Та маленькая не работает, большую открыли вчера."},
     {"who":"A","en":"Świetnie. Dziękuję za informację.","ru":"Отлично. Спасибо за информацию."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — причастия и вывески, которые ты увидишь на каждой улице.",
   "items":[
     {"en":"napisany","ru":"написанный","ex":"List napisany po polsku."},
     {"en":"zrobiony","ru":"сделанный","ex":"Wszystko już zrobione."},
     {"en":"zamknięty / otwarty","ru":"закрытый / открытый","ex":"Sklep jest zamknięty."},
     {"en":"sprzedany","ru":"проданный","ex":"Bilety są sprzedane."},
     {"en":"zaproszony","ru":"приглашённый","ex":"Goście zostali zaproszeni."},
     {"en":"został napisany / została napisana","ru":"был написан / была написана","ex":"List został napisany przez Annę."},
     {"en":"przez kogoś","ru":"кем (в страдательной фразе; przez + вин.)","ex":"Napisana przez znaną autorkę."},
     {"en":"czynny / nieczynny","ru":"работает / не работает","ex":"Bankomat nieczynny."},
     {"en":"zamknięte z powodu remontu","ru":"закрыто по причине ремонта","ex":"Na drzwiach: zamknięte z powodu remontu."},
     {"en":"wstęp wzbroniony","ru":"вход воспрещён","ex":"Tu wstęp wzbroniony."},
     {"en":"świeżo malowane","ru":"осторожно, окрашено","ex":"Uwaga, świeżo malowane."},
     {"en":"zapakowany","ru":"упакованный","ex":"Prezent jest ładnie zapakowany."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его переводу.",
   "pairs":[["zamknięty","закрытый"],["napisany","написанный"],["nieczynny","не работает"],["został otwarty","был открыт"]]
 },
 "reading":{
   "intro":"Прочитай и послушай объявления с одной городской улицы. Замечай, где состояние, а где событие.",
   "title":"Kartki na drzwiach",
   "sentences":["Sklep jest otwarty od ósmej do dwudziestej.","W niedziele sklep jest nieczynny.","Piekarnia obok została otwarta w zeszłym miesiącu.","Bankomat nieczynny — najbliższy jest przy poczcie.","Uwaga, świeżo malowane.","Wstęp wzbroniony — trwa remont.","Muzeum jest zamknięte z powodu remontu.","Nowa sala zostanie otwarta jesienią.","Wszystkie bilety na koncert zostały sprzedane.","Ta wystawa została przygotowana przez studentów z Krakowa."],
   "translation":"Магазин открыт с восьми до двадцати. По воскресеньям магазин не работает. Пекарню рядом открыли в прошлом месяце. Банкомат не работает — ближайший у почты. Осторожно, окрашено. Вход воспрещён — идёт ремонт. Музей закрыт по причине ремонта. Новый зал откроют осенью. Все билеты на концерт проданы. Эту выставку подготовили студенты из Кракова."
 },
 "quiz":{
   "intro":"Пять вопросов — и вывески города перестанут быть загадкой.",
   "items":[
     {"q":"1. Причастие от <b>zamknąć</b> —","opts":["zamkniony","zamknięty","zamknany"],"answer":1,
      "explain":"Глаголы на -ąć и -nąć берут -ty: <b>zamknięty</b>."},
     {"q":"2. «Школа закрыта» —","opts":["Szkoła jest zamknięty","Szkoła jest zamknięta","Szkoła została zamknięty"],"answer":1,
      "explain":"Причастие согласуется с подлежащим: szkoła — <b>zamknięta</b>."},
     {"q":"3. «Магазин открыли в мае» —","opts":["Sklep jest otwarty w maju","Sklep został otwarty w maju","Sklep otwarto jest w maju"],"answer":1,
      "explain":"Событие в конкретный момент — рамка с <b>zostać</b>."},
     {"q":"4. «Письмо было написано Анной» —","opts":["List został napisany od Anny","List został napisany przez Annę","List jest napisany z Anną"],"answer":1,
      "explain":"Исполнитель вводится предлогом <b>przez</b> плюс винительный."},
     {"q":"5. Надпись на двери «Закрыто» —","opts":["Zamknięty","Zamknięte","Zamknięta"],"answer":1,
      "explain":"Вывеска без подлежащего идёт средним родом: <b>Zamknięte</b>."}
   ]
 },
 "essay":{
   "intro":"Осмотрись сегодня по дороге: сколько вывесок вокруг тебя — это причастия.",
   "prompt":"Напиши 4–5 предложений о магазинах и учреждениях рядом с тобой: что открыто, что закрыто, что открыли недавно и что откроют скоро.",
   "hint":"Опора: jest otwarty / zamknięty · został otwarty · zostanie otwarty · nieczynny · przez… 🪧",
   "example":"Sklep na rogu jest otwarty od siódmej do dwudziestej drugiej. W niedziele jest nieczynny. Piekarnia obok została otwarta w zeszłym roku i od razu stała się popularna. Stara apteka jest zamknięta z powodu remontu. Mówi się, że nowa zostanie otwarta jesienią."
 }
},
"21": {
 "day":21,"week":"03",
 "themeRu":"Повторение недели 3",
 "themeEn":"Powtórka 3",
 "intro":"Неделя вышла сильной: ты научился(лась) хотеть за других, мечтать о несбывшемся, пересказывать чужие слова, читать правила и объявления и понимать фразы, у которых вообще нет подлежащего. Сегодня ничего нового — складываем всё в одну картину. После этого дня половина текстов сертификатного экзамена перестанет быть загадкой.",
 "introAudio":"Неделя вышла сильной: ты научился или научилась хотеть за других, мечтать о несбывшемся, пересказывать чужие слова, читать правила и объявления и понимать фразы, у которых вообще нет подлежащего. Сегодня ничего нового — складываем всё в одну картину. После этого дня половина текстов сертификатного экзамена перестанет быть загадкой.",
 "goals":[
   "Уверенно строить <b>żeby</b>-придаточные и цели с инфинитивом",
   "Не путать <b>gdyby</b> (мечта) и <b>jeśli</b> (реальность)",
   "Пересказывать: <b>powiedział, że…</b> · <b>spytał, czy…</b> · <b>poprosił, żebym…</b>",
   "Читать правила: <b>można, trzeba, warto, nie wolno</b> и <b>mówi się</b>",
   "Понимать <b>zbudowano</b>, <b>otwarto</b> и <b>został otwarty</b>"
 ],
 "learned":[
   "Уверенно построил(а) żeby-придаточные и цели с инфинитивом",
   "Не спутал(а) gdyby и jeśli",
   "Пересказал(а): powiedział, że… · spytał, czy… · poprosił, żebym…",
   "Прочитал(а) правила: można, trzeba, warto, nie wolno и mówi się",
   "Понял(а) zbudowano, otwarto и został otwarty"
 ],
 "review":{
   "intro":"Разминка по всей неделе — понемногу от каждого дня. Не спеши: промах не страшен, любое правило можно освежить выше по курсу.",
   "introAudio":"Разминка по всей неделе — понемногу от каждого дня. Не спеши: промах не страшен, любое правило можно освежить выше по курсу.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 15.",
      "q":"«Хочу, чтобы ты остался» —","opts":["Chcę, żebyś zostaniesz","Chcę, żebyś został","Chcę, że zostaniesz"],"answer":1,
      "explain":"После żeby идёт только л-форма: <b>został</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 16.",
      "q":"«Если будет время, позвоню» —","opts":["Gdybym miał czas, zadzwoniłbym","Jeśli będę mieć czas, zadzwonię","Jeśli będę mieć czas, zadzwoniłbym"],"answer":1,
      "explain":"Реальное условие: <b>jeśli</b> плюс будущее в обеих частях."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 17.",
      "q":"«Она спросила, есть ли у меня время» —","opts":["Spytała, jeśli mam czas","Spytała, czy mam czas","Spytała, że mam czas"],"answer":1,
      "explain":"«Ли» — это <b>czy</b>; jeśli значит «если»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 18.",
      "q":"«Здесь курить запрещено» —","opts":["Nie trzeba tu palić","Nie wolno tu palić","Nie warto tu palić"],"answer":1,
      "explain":"Запрет — <b>nie wolno</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 19.",
      "q":"«Мост построили в прошлом году» (безличной формой) —","opts":["Most zbudowana w zeszłym roku","Most zbudowano w zeszłym roku","Most zbudowany w zeszłym roku"],"answer":1,
      "explain":"Безличная форма неизменяема: <b>zbudowano</b>."},
     {"type":"type","howto":"Напиши фразу с вывески (день 20). Диакритику можно не ставить.",
      "q":"«Магазин закрыт»","accept":["sklep jest zamknięty","sklep jest zamkniety","sklep zamknięty","sklep zamkniety"],"placeholder":"Sklep jest…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Повторение 1 · Чтобы",
    "title":"<em>żeby</em> + л-форма · <em>żeby</em> + инфинитив",
    "paras":[
      "Союз спрягается: <b>żebym, żebyś, żeby, żebyśmy, żebyście, żeby</b>. Личное окончание всегда сидит на нём, а глагол остаётся голой л-формой: <b>Chcę, żebyś przyszedł.</b>",
      "Развилка дня 15 в одну строку: разные субъекты — <b>żeby</b> плюс л-форма; один и тот же — <b>żeby</b> плюс инфинитив (<b>Uczę się, żeby zdać</b>), а после chcieć про себя вообще без союза (<b>Chcę odpocząć</b>).",
      "Тот же союз обслуживает просьбы, советы и запреты: <b>Proszę, żebyś…</b>, <b>Radzę ci, żebyś…</b>, <b>Wolę, żebyś…</b>, <b>żeby nie zapomnieć</b>. Книжный близнец — <b>aby</b>.",
      "И два правила письма: запятая перед żeby обязательна, а настоящего или будущего времени после него не бывает никогда."
    ],
    "audio":"Союз спрягается: żebym, żebyś, żeby, żebyśmy, żebyście, żeby. Личное окончание всегда сидит на нём, а глагол остаётся голой л-формой: chcę, żebyś przyszedł. Развилка дня пятнадцать в одну строку: разные субъекты — żeby плюс л-форма; один и тот же — żeby плюс инфинитив, uczę się, żeby zdać; а после chcieć про себя вообще без союза, chcę odpocząć. Тот же союз обслуживает просьбы, советы и запреты: proszę, żebyś; radzę ci, żebyś; wolę, żebyś; żeby nie zapomnieć. Книжный близнец — aby. И два правила письма: запятая перед żeby обязательна, а настоящего или будущего времени после него не бывает никогда.",
    "table":{"rows":[
      ["Chcę, <b>żebyś przyszedł</b>. <button class=\"play\" data-say=\"Chcę, żebyś przyszedł\">🔊</button>","Хочу, чтобы ты пришёл. (двое)"],
      ["Uczę się, <b>żeby zdać</b>. <button class=\"play\" data-say=\"Uczę się, żeby zdać\">🔊</button>","Учусь, чтобы сдать. (один)"],
      ["<b>Chcę odpocząć.</b> <button class=\"play\" data-say=\"Chcę odpocząć\">🔊</button>","Хочу отдохнуть. (без союза)"],
      ["Radzę ci, <b>żebyś odpoczął</b>. <button class=\"play\" data-say=\"Radzę ci, żebyś odpoczął\">🔊</button>","Советую тебе отдохнуть."],
      ["Zapisuję to, <b>żeby nie zapomnieć</b>. <button class=\"play\" data-say=\"Zapisuję to, żeby nie zapomnieć\">🔊</button>","Записываю, чтобы не забыть."]
    ],"star":0},
    "examples":[
      {"ru":"Родители хотят, чтобы мы позвонили вечером.","en":"Rodzice chcą, <b>żebyśmy zadzwonili</b> wieczorem.","say":"Rodzice chcą, żebyśmy zadzwonili wieczorem."},
      {"ru":"Я встала рано, чтобы успеть на экзамен.","en":"Wstałam wcześnie, <b>żeby zdążyć</b> na egzamin.","say":"Wstałam wcześnie, żeby zdążyć na egzamin."}
    ],
    "mistakes":[
      {"wrong":"Chcę, żebyś przyjdziesz.","right":"Chcę, <b>żebyś przyszedł</b>.","why":"после żeby — только л-форма, будущего времени там не бывает."}
    ],
    "mnemonic":"🔗 Двое → żebyś + л-форма. Один → żeby + инфинитив.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посчитай действующих лиц.",
       "q":"«Звоню, чтобы спросить о дате» —","opts":["Dzwonię, żebym zapytał o termin","Dzwonię, żeby zapytać o termin","Dzwonię, żeby zapytam o termin"],"answer":1,
       "explain":"Звоню я и спрошу я — один субъект, значит инфинитив."},
      {"type":"choice","howto":"<b>Что делать:</b> найди, где сидит окончание.",
       "q":"«Марек хочет, чтобы я ему помогла» —","opts":["Marek chce, żeby mu pomogłam","Marek chce, żebym mu pomogła","Marek chce, żebym mu pomogę"],"answer":1,
       "explain":"Окончание уходит к союзу: <b>żebym</b>, глагол остаётся голым."},
      {"type":"type","howto":"Напиши просьбу. Диакритику можно не ставить.",
       "q":"«Прошу, чтобы ты пришёл в пять»","accept":["proszę, żebyś przyszedł o piątej","prosze, zebys przyszedl o piatej","proszę żebyś przyszedł o piątej","prosze zebys przyszedl o piatej"],"placeholder":"Proszę, żebyś…"}
    ]
   },
   {
    "eyebrow":"Повторение 2 · Если бы",
    "title":"<em>gdyby</em> против <em>jeśli</em>",
    "paras":[
      "Мечта и сожаление: <b>gdyby</b> спрягается (gdybym, gdybyś, gdyby, gdybyśmy, gdybyście), после него идёт л-форма, а во второй части глагол берёт by: <b>Gdybym miał czas, pojechałbym nad morze.</b>",
      "Реальность: <b>jeśli</b> (или jeżeli) плюс обычное будущее в обеих частях — <b>Jeśli będę mieć czas, pojadę nad morze.</b> Русское «если будет время, поеду» устроено точно так же.",
      "Смешивать миры нельзя: ни <b>gdyby</b> с будущим, ни <b>jeśli</b> с by. Внутри одной части двух окончаний тоже не бывает: <b>gdybym miał</b>, а не «gdybym miałbym».",
      "Два готовых оборота недели: <b>Gdyby nie ty…</b> (если бы не ты) и <b>Na twoim miejscu…</b> (на твоём месте) — оба идут с формой на by."
    ],
    "audio":"Мечта и сожаление: gdyby спрягается — gdybym, gdybyś, gdyby, gdybyśmy, gdybyście — после него идёт л-форма, а во второй части глагол берёт by: gdybym miał czas, pojechałbym nad morze. Реальность: jeśli или jeżeli плюс обычное будущее в обеих частях: jeśli będę mieć czas, pojadę nad morze. Русское «если будет время, поеду» устроено точно так же. Смешивать миры нельзя: ни gdyby с будущим, ни jeśli с by. Внутри одной части двух окончаний тоже не бывает. Два готовых оборота недели: gdyby nie ty и na twoim miejscu — оба идут с формой на by.",
    "table":{"rows":[
      ["<b>Gdybym miał</b> czas, <b>pojechałbym</b>. <button class=\"play\" data-say=\"Gdybym miał czas, pojechałbym\">🔊</button>","Если бы было время, я бы поехал."],
      ["<b>Jeśli będę mieć</b> czas, <b>pojadę</b>. <button class=\"play\" data-say=\"Jeśli będę mieć czas, pojadę\">🔊</button>","Если будет время, поеду."],
      ["<b>Gdyby nie ty</b>, nie zdałabym. <button class=\"play\" data-say=\"Gdyby nie ty, nie zdałabym\">🔊</button>","Если бы не ты, я бы не сдала."],
      ["<b>Na twoim miejscu</b> odpocząłbym. <button class=\"play\" data-say=\"Na twoim miejscu odpocząłbym\">🔊</button>","На твоём месте я бы отдохнул."],
      ["<b>Co byś zrobił</b>, gdybyś wygrał milion? <button class=\"play\" data-say=\"Co byś zrobił, gdybyś wygrał milion?\">🔊</button>","Что бы ты сделал, если бы выиграл миллион?"]
    ],"star":1},
    "examples":[
      {"ru":"Если бы у нас было больше денег, мы бы купили дом.","en":"<b>Gdybyśmy mieli</b> więcej pieniędzy, <b>kupilibyśmy</b> dom.","say":"Gdybyśmy mieli więcej pieniędzy, kupilibyśmy dom."},
      {"ru":"Если сдам экзамен, поищу новую работу.","en":"<b>Jeśli zdam</b> egzamin, <b>poszukam</b> nowej pracy.","say":"Jeśli zdam egzamin, poszukam nowej pracy."}
    ],
    "mistakes":[
      {"wrong":"Jeśli będę mieć czas, pojechałbym.","right":"Jeśli będę mieć czas, <b>pojadę</b>.","why":"половинки должны быть из одного мира: реальное условие — реальный результат."}
    ],
    "mnemonic":"🔀 gdyby + л-форма + by (мечта) · jeśli + будущее (реальность).",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, мечта это или план.",
       "q":"«Если бы я знала, я бы сказала» —","opts":["Jeśli będę wiedzieć, powiem","Gdybym wiedziała, powiedziałabym","Gdybym będę wiedzieć, powiedziałabym"],"answer":1,
       "explain":"Мечта или сожаление: <b>gdybym wiedziała</b> — <b>powiedziałabym</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> проверь, где сидит окончание.",
       "q":"Какой вариант правильный?","opts":["Gdyby miałem czas…","Gdybym miał czas…","Gdybym miałbym czas…"],"answer":1,
       "explain":"Окончание -m уже на союзе: <b>gdybym</b>, глагол остаётся голым."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Запятую поставь мысленно.",
       "q":"Собери: <b>«Если сдам экзамен, пойду учиться»</b>","answer":"Jeśli zdam egzamin pójdę na studia"}
    ]
   },
   {
    "eyebrow":"Повторение 3 · Пересказ",
    "title":"<em>że</em> · <em>czy</em> · <em>żeby</em>",
    "paras":[
      "Три двери — три смысла. <b>że</b> передаёт информацию: <b>Powiedział, że przyjdzie.</b> <b>czy</b> передаёт вопрос: <b>Spytał, czy mam czas.</b> <b>żeby</b> передаёт волю: <b>Poprosił, żebym przyszedł.</b>",
      "Подарок недели: времена в пересказе не сдвигаются — как сказал человек, так и остаётся. Меняются только лицо и притяжательные: его «przyjdę» становится <b>przyjdzie</b>, его «mój laptop» — <b>jego laptop</b>.",
      "Если в вопросе было вопросительное слово, czy не нужно: <b>Spytała, gdzie mieszkam.</b> А распоряжение через <b>kazać</b> идёт с инфинитивом: <b>Szef kazał mi zostać.</b>",
      "И падежи: <b>powiedzieć komuś</b> — дательный (powiedział mi), <b>zapytać kogoś</b> — винительный (zapytał mnie)."
    ],
    "audio":"Три двери — три смысла. Że передаёт информацию: powiedział, że przyjdzie. Czy передаёт вопрос: spytał, czy mam czas. Żeby передаёт волю: poprosił, żebym przyszedł. Подарок недели: времена в пересказе не сдвигаются — как сказал человек, так и остаётся. Меняются только лицо и притяжательные. Если в вопросе было вопросительное слово, czy не нужно: spytała, gdzie mieszkam. А распоряжение через kazać идёт с инфинитивом: szef kazał mi zostać. И падежи: powiedzieć komuś — дательный, zapytać kogoś — винительный.",
    "table":{"rows":[
      ["<b>Powiedział, że</b> przyjdzie. <button class=\"play\" data-say=\"Powiedział, że przyjdzie\">🔊</button>","информация"],
      ["<b>Spytał, czy</b> mam czas. <button class=\"play\" data-say=\"Spytał, czy mam czas\">🔊</button>","вопрос («ли»)"],
      ["<b>Poprosił, żebym</b> przyszedł. <button class=\"play\" data-say=\"Poprosił, żebym przyszedł\">🔊</button>","воля"],
      ["<b>Spytała, gdzie</b> mieszkam. <button class=\"play\" data-say=\"Spytała, gdzie mieszkam\">🔊</button>","с вопросительным словом czy не нужно"],
      ["<b>Kazał mi zostać.</b> <button class=\"play\" data-say=\"Kazał mi zostać\">🔊</button>","kazać komuś + инфинитив"],
      ["powiedział <b>mi</b> · zapytał <b>mnie</b> <button class=\"play\" data-say=\"powiedział mi, zapytał mnie\">🔊</button>","дательный / винительный"]
    ],"star":0},
    "examples":[
      {"ru":"Они ответили, что экзамен будет в мае, и попросили, чтобы я взяла паспорт.","en":"<b>Odpowiedzieli, że</b> egzamin będzie w maju, i <b>poprosili, żebym wzięła</b> paszport.","say":"Odpowiedzieli, że egzamin będzie w maju, i poprosili, żebym wzięła paszport."},
      {"ru":"Не знаю, придёт ли он сегодня.","en":"Nie wiem, <b>czy</b> dziś przyjdzie.","say":"Nie wiem, czy dziś przyjdzie."}
    ],
    "mistakes":[
      {"wrong":"Nie wiem, jeśli przyjdzie.","right":"Nie wiem, <b>czy</b> przyjdzie.","why":"«ли» — это czy; jeśli вводит условие, а не вопрос."}
    ],
    "mnemonic":"📣 że — что · czy — ли · żeby — чтобы. Время при этом не двигается.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь, не поехало ли время назад.",
       "q":"Анна: «Przyjdę o siódmej». Пересказ —","opts":["Powiedziała, że przyszła o siódmej","Powiedziała, że przyjdzie o siódmej","Powiedziała, żeby przyszła o siódmej"],"answer":1,
       "explain":"Будущее осталось будущим: <b>przyjdzie</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> реши, информация это или воля.",
       "q":"«Она попросила, чтобы я позвонил» —","opts":["Poprosiła, że zadzwonię","Poprosiła, żebym zadzwonił","Poprosiła, czy zadzwonię"],"answer":1,
       "explain":"Волю вводит <b>żeby</b>, дальше идёт л-форма."},
      {"type":"type","howto":"Напиши пересказ. Диакритику можно не ставить.",
       "q":"«Он спросил, есть ли у меня время»","accept":["spytał, czy mam czas","spytal, czy mam czas","zapytał, czy mam czas","zapytal, czy mam czas","spytał czy mam czas","zapytał czy mam czas"],"placeholder":"Spytał, czy…"}
    ]
   },
   {
    "eyebrow":"Повторение 4 · Правила",
    "title":"<em>można · trzeba · warto · nie wolno</em> и <em>się</em>",
    "paras":[
      "Четыре слова без подлежащего и с инфинитивом после себя: <b>można</b> (можно), <b>trzeba</b> (нужно), <b>warto</b> (стоит), <b>wolno</b> (разрешено). Запрет — <b>nie wolno</b>, «не обязательно» — <b>nie trzeba</b>. Разницу между ними стоит проверять сознательно.",
      "Время им дают два слова: <b>było</b> для прошедшего (<b>trzeba było powiedzieć</b>) и <b>będzie</b> для будущего (<b>trzeba będzie zapłacić</b>). Средний род тут навсегда.",
      "Ловушка недели: <b>wolno</b> — это ещё и «медленно». <b>Mów wolniej</b> — «говори помедленнее», а <b>nie wolno mówić</b> — «говорить нельзя».",
      "Второй этаж безличности — <b>się</b>: <b>mówi się, że…</b>, <b>jak to się pisze?</b>, <b>tu się nie pali</b>. Всегда третье лицо единственного числа."
    ],
    "audio":"Четыре слова без подлежащего и с инфинитивом после себя: można — можно, trzeba — нужно, warto — стоит, wolno — разрешено. Запрет — nie wolno, «не обязательно» — nie trzeba. Время им дают два слова: było для прошедшего, trzeba było powiedzieć, и będzie для будущего, trzeba będzie zapłacić. Средний род тут навсегда. Ловушка недели: wolno — это ещё и «медленно». Mów wolniej — говори помедленнее, а nie wolno mówić — говорить нельзя. Второй этаж безличности — się: mówi się, że; jak to się pisze; tu się nie pali. Всегда третье лицо единственного числа.",
    "table":{"rows":[
      ["<b>Można</b> tu parkować. <button class=\"play\" data-say=\"Można tu parkować\">🔊</button>","Здесь можно парковаться."],
      ["<b>Trzeba</b> kupić bilet. <button class=\"play\" data-say=\"Trzeba kupić bilet\">🔊</button>","Нужно купить билет."],
      ["<b>Nie wolno</b> palić. / <b>Nie trzeba</b> płacić. <button class=\"play\" data-say=\"Nie wolno palić. Nie trzeba płacić.\">🔊</button>","Курить запрещено. / Платить не обязательно."],
      ["<b>Trzeba było</b> · <b>trzeba będzie</b> <button class=\"play\" data-say=\"Trzeba było, trzeba będzie\">🔊</button>","надо было · надо будет"],
      ["Mów <b>wolniej</b>. <button class=\"play\" data-say=\"Mów wolniej\">🔊</button>","Говори помедленнее. (ловушка)"],
      ["<b>Mówi się, że</b>… · <b>Jak to się pisze?</b> <button class=\"play\" data-say=\"Mówi się, że. Jak to się pisze?\">🔊</button>","говорят, что… · как это пишется?"]
    ],"star":2},
    "examples":[
      {"ru":"Мусор нужно сортировать, а шуметь после десяти нельзя.","en":"Śmieci <b>trzeba segregować</b>, a po dwudziestej drugiej <b>nie wolno hałasować</b>.","say":"Śmieci trzeba segregować, a po dwudziestej drugiej nie wolno hałasować."},
      {"ru":"Надо было спросить раньше.","en":"<b>Trzeba było</b> zapytać wcześniej.","say":"Trzeba było zapytać wcześniej."}
    ],
    "mistakes":[
      {"wrong":"Nie wolno kupować biletu. (в смысле «не обязательно»)","right":"<b>Nie trzeba</b> kupować biletu.","why":"nie wolno — это запрет, «не обязательно» — nie trzeba."}
    ],
    "mnemonic":"🚦 można · trzeba · warto · nie wolno + инфинитив. Прошлое — było, будущее — będzie.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> отличай запрет от «не обязательно».",
       "q":"<b>Nie trzeba przychodzić wcześniej</b> значит —","opts":["приходить раньше запрещено","приходить раньше не обязательно","приходить раньше стоит"],"answer":1,
       "explain":"<b>Nie trzeba</b> — «не обязательно». Запрет — nie wolno."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, какой род берут безличные слова.",
       "q":"«Надо будет заплатить» —","opts":["Trzeba będę zapłacić","Trzeba będzie zapłacić","Trzeba był zapłacić"],"answer":1,
       "explain":"Будущее делается словом <b>będzie</b>."},
      {"type":"speak","howto":"Нажми микрофон и спроси вслух.",
       "target":"Czy tu można parkować?","sub":"здесь можно парковаться?","want":"Czy tu można parkować"}
    ]
   },
   {
    "eyebrow":"Повторение 5 · Без исполнителя",
    "title":"<em>zbudowano</em> · <em>jest zamknięty</em> · <em>został otwarty</em>",
    "paras":[
      "Форма на <b>-no/-to</b> — самая нерусская за неделю: <b>zbudowano, otwarto, zamknięto, znaleziono, założono</b>. Она неизменяема, подлежащего у неё нет, дополнение стоит в винительном (<b>zbudowano szkołę</b>), а при отрицании — в родительном (<b>nie zbudowano szkoły</b>). Только прошедшее; для настоящего берут <b>się</b>.",
      "Причастия на <b>-ny/-ty</b> — наоборот, совсем родные: napisany, zrobiony, sprzedany, zamknięty, otwarty. Это русские «-нный» и «-тый», и склоняются они как прилагательные.",
      "Две рамки залога: <b>jest zamknięty</b> — состояние («закрыт»), <b>został zamknięty</b> — событие («закрыли»). Исполнитель, если нужен, идёт с <b>przez</b> плюс винительный: <b>List został napisany przez Annę.</b>",
      "И городская мелочь, которая экономит нервы: <b>Otwarte · Zamknięte · Nieczynne</b> — вывеска всегда в среднем роде, как русское «открыто, закрыто»."
    ],
    "audio":"Форма на no и to — самая нерусская за неделю: zbudowano, otwarto, zamknięto, znaleziono, założono. Она неизменяема, подлежащего у неё нет, дополнение стоит в винительном, а при отрицании — в родительном. Только прошедшее; для настоящего берут się. Причастия на ny и ty — наоборот, совсем родные: napisany, zrobiony, sprzedany, zamknięty, otwarty. Это русские нный и тый, и склоняются они как прилагательные. Две рамки залога: jest zamknięty — состояние, został zamknięty — событие. Исполнитель идёт с przez плюс винительный: list został napisany przez Annę. И городская мелочь: otwarte, zamknięte, nieczynne — вывеска всегда в среднем роде.",
    "table":{"rows":[
      ["<b>Zbudowano</b> szkołę. <button class=\"play\" data-say=\"Zbudowano szkołę\">🔊</button>","Школу построили. (форма не меняется)"],
      ["<b>Nie zbudowano</b> szkoły. <button class=\"play\" data-say=\"Nie zbudowano szkoły\">🔊</button>","Школу не построили. (родительный)"],
      ["Sklep <b>jest zamknięty</b>. <button class=\"play\" data-say=\"Sklep jest zamknięty\">🔊</button>","Магазин закрыт. (состояние)"],
      ["Sklep <b>został zamknięty</b> w maju. <button class=\"play\" data-say=\"Sklep został zamknięty w maju\">🔊</button>","Магазин закрыли в мае. (событие)"],
      ["List <b>został napisany przez Annę</b>. <button class=\"play\" data-say=\"List został napisany przez Annę\">🔊</button>","Письмо написано Анной."],
      ["<b>Otwarte · Zamknięte · Nieczynne</b> <button class=\"play\" data-say=\"Otwarte. Zamknięte. Nieczynne.\">🔊</button>","вывески в среднем роде"]
    ],"star":0},
    "examples":[
      {"ru":"Университет основали в 1364 году, а двор перенесли в Варшаву в 1596.","en":"Uniwersytet <b>założono</b> w 1364 roku, a dwór <b>przeniesiono</b> do Warszawy w 1596.","say":"Uniwersytet założono w tysiąc trzysta sześćdziesiątym czwartym roku, a dwór przeniesiono do Warszawy w tysiąc pięćset dziewięćdziesiątym szóstym."},
      {"ru":"Все билеты были проданы за один день.","en":"Wszystkie bilety <b>zostały sprzedane</b> w jeden dzień.","say":"Wszystkie bilety zostały sprzedane w jeden dzień."}
    ],
    "mistakes":[
      {"wrong":"Szkołę zbudowana w 1900 roku.","right":"Szkołę <b>zbudowano</b> w 1900 roku.","why":"безличная форма не согласуется ни с чем: она всегда одна."}
    ],
    "mnemonic":"🏗️ zbudowano — никто конкретно. jest zamknięty — как есть. został zamknięty — что произошло.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь, меняется ли форма по роду.",
       "q":"«Библиотеку открыли в марте» (безличной формой) —","opts":["Bibliotekę otwarta w marcu","Bibliotekę otwarto w marcu","Bibliotekę otworzono w marcu"],"answer":1,
       "explain":"У otworzyć форма исключительная и неизменяемая: <b>otwarto</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> реши, состояние это или событие.",
       "q":"«Магазин открыли в мае» —","opts":["Sklep jest otwarty w maju","Sklep został otwarty w maju","Sklep otwarte w maju"],"answer":1,
       "explain":"Событие — рамка с <b>zostać</b>: został otwarty."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Письмо было написано Анной»</b>","answer":"List został napisany przez Annę"}
    ]
   }
 ],
 "scene":{
   "intro":"Сценка в подъезде: вся неделя в семи репликах. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Sąsiadka prosiła, żebyśmy nie hałasowali po dziesiątej.","ru":"Соседка просила, чтобы мы не шумели после десяти."},
     {"who":"B","en":"Powiedziała też, kiedy będzie remont?","ru":"Она сказала ещё, когда будет ремонт?"},
     {"who":"A","en":"Mówi się, że latem. Ale nic nie zostało ogłoszone.","ru":"Говорят, что летом. Но ничего не объявили."},
     {"who":"B","en":"Spytałaś, czy trzeba będzie płacić więcej?","ru":"Ты спросила, надо ли будет платить больше?"},
     {"who":"A","en":"Tak. Odpowiedziała, że jeszcze nie wiadomo.","ru":"Да. Ответила, что пока неизвестно."},
     {"who":"B","en":"Gdybyśmy wiedzieli wcześniej, kupilibyśmy mieszkanie obok.","ru":"Если бы мы знали раньше, купили бы квартиру рядом."},
     {"who":"A","en":"Nie narzekaj. Windę wreszcie naprawiono.","ru":"Не жалуйся. Лифт наконец починили."}
   ]
 },
 "vocab":{
   "intro":"Главные слова недели 3 — вся сослагательность, весь пересказ и вся безличность.",
   "items":[
     {"en":"żeby / aby","ru":"чтобы","ex":"Chcę, żebyś przyszedł."},
     {"en":"żeby coś zrobić","ru":"чтобы (один субъект: żeby + инфинитив)","ex":"Uczę się, żeby zdać."},
     {"en":"gdyby","ru":"если бы","ex":"Gdybym miał czas, pojechałbym."},
     {"en":"jeśli / jeżeli","ru":"если (реально)","ex":"Jeśli będę mieć czas, pojadę."},
     {"en":"gdyby nie… / na twoim miejscu","ru":"если бы не… / на твоём месте","ex":"Gdyby nie ty, nie zdałabym."},
     {"en":"powiedział, że…","ru":"он сказал, что…","ex":"Powiedział, że przyjdzie."},
     {"en":"spytał, czy…","ru":"он спросил, …ли","ex":"Spytał, czy mam czas."},
     {"en":"poprosił, żebym…","ru":"он попросил, чтобы я…","ex":"Poprosił, żebym przyszedł."},
     {"en":"można / trzeba / warto","ru":"можно / нужно / стоит","ex":"Trzeba kupić bilet."},
     {"en":"nie wolno / nie trzeba","ru":"запрещено / не обязательно","ex":"Nie wolno tu palić."},
     {"en":"mówi się, że…","ru":"говорят, что…","ex":"Mówi się, że będzie remont."},
     {"en":"zbudowano / otwarto / zamknięto","ru":"построили / открыли / закрыли","ex":"Muzeum zamknięto na remont."},
     {"en":"jest zamknięty / został otwarty","ru":"закрыт / был открыт","ex":"Sklep został otwarty w maju."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское выражение к переводу — по одному от каждого дня недели.",
   "pairs":[["Chcę, żebyś przyszedł","хочу, чтобы ты пришёл"],["Gdyby nie ty","если бы не ты"],["Spytał, czy mam czas","спросил, есть ли у меня время"],["Nie wolno","запрещено"],["zbudowano","построили"]]
 },
 "reading":{
   "intro":"Прочитай и послушай рассказ Анны — здесь собрана вся неделя. Попробуй потом рассказать похожее о себе.",
   "title":"Tydzień przed egzaminem",
   "sentences":["Do egzaminu został tydzień.","Poprosiłam Marka, żeby czytał ze mną teksty.","Powiedział, że pomoże w każdy wieczór.","Spytał tylko, czy nie jestem zbyt zmęczona.","Gdybym miała więcej czasu, uczyłabym się spokojniej.","Jeśli zdam, poszukam nowej pracy.","W naszym domu trzeba teraz segregować śmieci — tak zdecydowano w marcu.","Na klatce wisi kartka: winda nieczynna.","Windę naprawiono dopiero wczoraj.","Mówi się, że latem zostanie otwarty nowy sklep obok."],
   "translation":"До экзамена осталась неделя. Я попросила Марека, чтобы он читал со мной тексты. Он сказал, что поможет каждый вечер. Спросил только, не слишком ли я устала. Если бы у меня было больше времени, я бы училась спокойнее. Если сдам, поищу новую работу. В нашем доме теперь нужно сортировать мусор — так решили в марте. В подъезде висит записка: лифт не работает. Лифт починили только вчера. Говорят, что летом рядом откроют новый магазин."
 },
 "quiz":{
   "intro":"А теперь проверка недели — восемь вопросов по всем дням. Порог мягкий, подсказки рядом. Пройдёшь — и третья неделя официально за плечами. 💛",
   "items":[
     {"q":"1. «Хочу, чтобы ты пришёл» —","opts":["Chcę, żebyś przyjdziesz","Chcę, żebyś przyszedł","Chcę, że przyjdziesz"],"answer":1,
      "explain":"После żeby стоит только л-форма: <b>przyszedł</b>."},
     {"q":"2. «Учусь, чтобы сдать экзамен» —","opts":["Uczę się, żebym zdał egzamin","Uczę się, żeby zdać egzamin","Uczę się, żeby zdam egzamin"],"answer":1,
      "explain":"Субъект один — значит инфинитив после żeby."},
     {"q":"3. «Если будет время, поеду» —","opts":["Gdyby będę mieć czas, pojadę","Jeśli będę mieć czas, pojadę","Jeśli będę mieć czas, pojechałbym"],"answer":1,
      "explain":"Реальное условие: <b>jeśli</b> плюс будущее в обеих частях."},
     {"q":"4. «Если бы у меня было время, я бы поехал» —","opts":["Gdybym miał czas, pojechałbym","Gdybym będę miał czas, pojechałbym","Jeśli miałbym czas, pojadę"],"answer":0,
      "explain":"После gdyby — л-форма, во второй части глагол с by."},
     {"q":"5. «Он спросил, есть ли у меня время» —","opts":["Spytał, jeśli mam czas","Spytał, czy mam czas","Spytał, że mam czas"],"answer":1,
      "explain":"«Ли» — это <b>czy</b>."},
     {"q":"6. «Курить здесь запрещено» —","opts":["Nie trzeba tu palić","Nie wolno tu palić","Nie warto tu palić"],"answer":1,
      "explain":"Запрет — <b>nie wolno</b>; nie trzeba значит «не обязательно»."},
     {"q":"7. «Школу построили в 1900 году» (безличной формой) —","opts":["Szkołę zbudowana w 1900 roku","Szkołę zbudowano w 1900 roku","Szkołę zbudowany w 1900 roku"],"answer":1,
      "explain":"Безличная форма неизменяема: <b>zbudowano</b>."},
     {"q":"8. «Письмо было написано Анной» —","opts":["List został napisany od Anny","List został napisany przez Annę","List jest napisany z Anną"],"answer":1,
      "explain":"Исполнитель идёт с <b>przez</b> плюс винительный: przez Annę."}
   ]
 },
 "essay":{
   "intro":"Последний шаг недели — собери её целиком в одном коротком тексте.",
   "prompt":"Напиши 6–7 предложений: чего ты хочешь от близкого человека, о чём тебя недавно попросили, что было бы, если бы у тебя было больше времени, какие правила действуют там, где ты живёшь, и что рядом с тобой недавно открыли или закрыли.",
   "hint":"Используй: Chcę, żebyś… · Poprosił(a), żebym… · Gdybym miał(a)… · Trzeba / nie wolno… · Otwarto / zamknięto… 📝",
   "example":"Chcę, żeby ten tydzień był spokojniejszy. Marek poprosił, żebym mniej pracowała wieczorami. Gdybym miała więcej czasu, czytałabym po polsku codziennie. W naszym domu trzeba segregować śmieci, a po dwudziestej drugiej nie wolno hałasować. Sąsiadka powiedziała, że latem będzie remont. Obok otwarto nową piekarnię — mówi się, że to najlepszy chleb w dzielnicy. Jeśli zdam egzamin, zaprosimy wszystkich sąsiadów na kawę."
 }
},

"22": {
 "day":22,"week":"04",
 "themeRu":"Читающий человек",
 "themeEn":"Imiesłów na -ący",
 "intro":"Объявление на двери языковой школы: <b>Szukamy osoby mówiącej po polsku i po angielsku.</b> Одно слово — <b>mówiącej</b> — а внутри целая конструкция, которую ты знаешь по-русски всю жизнь: «говорящей». Сегодня собираем польские причастия на <b>-ący</b>: как они делаются, как склоняются и почему их так любят объявления.",
 "introAudio":"Объявление на двери языковой школы: szukamy osoby mówiącej po polsku i po angielsku. Одно слово, mówiącej, а внутри целая конструкция, которую ты знаешь по-русски всю жизнь: «говорящей». Сегодня собираем польские причастия на -ący: как они делаются, как склоняются и почему их так любят объявления.",
 "goals":[
   "Сделать причастие от любого глагола: <b>czytają → czytający</b>",
   "Согласовать его с существительным: <b>czytający chłopiec, czytająca dziewczyna</b>",
   "Читать объявления с оборотами: <b>osoba mówiąca po angielsku</b>",
   "Разворачивать причастие в придаточное с <b>który</b> и обратно"
 ],
 "learned":[
   "Сделал(а) причастие от любого глагола: czytają и czytający",
   "Согласовал(а) его с существительным: czytający chłopiec, czytająca dziewczyna",
   "Прочитал(а) объявления с оборотами: osoba mówiąca po angielsku",
   "Развернул(а) причастие в придаточное с который и обратно"
 ],
 "review":{
   "intro":"Вчера ты закрыл(а) третью неделю. Три вопроса — по её ядру: безличное прошедшее, żeby и gdyby. И один по страдательному залогу, с которого мы сегодня стартуем.",
   "introAudio":"Вчера закрылась третья неделя. Три вопроса по её ядру: безличное прошедшее, żeby и gdyby. И один по страдательному залогу, с которого мы сегодня стартуем.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни форму без подлежащего.",
      "q":"«Музей построили в 1900 году» —","opts":["Muzeum zbudowano w 1900 roku","Muzeum było zbudowano w 1900 roku","Muzeum zbudowany w 1900 roku"],"answer":0,
      "explain":"Безличное прошедшее — <b>zbudowano</b>: форма не меняется ни по родам, ни по числам, и być рядом с ней не ставят."},
     {"type":"choice","howto":"<b>Что делать:</b> следи за формой глагола после союза.",
      "q":"«Я хочу, чтобы ты пришёл» —","opts":["Chcę, żebyś przyjdziesz","Chcę, żebyś przyszedł","Chcę, że przyjdziesz"],"answer":1,
      "explain":"После żeby идёт л-форма: <b>żebyś przyszedł</b> — ровно как русское «чтобы ты пришёл»."},
     {"type":"choice","howto":"<b>Что делать:</b> союз gdyby тоже спрягается.",
      "q":"«Если бы у меня было время, я бы поехал» —","opts":["Gdybym mam czas, pojechałbym","Gdybym miał czas, pojechałbym","Gdyby miałem czas, pojechałbym"],"answer":1,
      "explain":"Лицо живёт в союзе: <b>gdybym miał</b>. Форма gdyby miałem собирает окончание дважды."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Письмо было написано вчера»</b>","answer":"List został napisany wczoraj"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Как делается",
    "title":"От <em>oni czytają</em> — к <em>czytający</em>",
    "paras":[
      "Рецепт один на весь язык. Берёшь форму третьего лица множественного числа настоящего времени — ту самую, что говорит «они»: <b>czytają, piszą, pracują, mówią, śpią</b>. Отбрасываешь <b>-ą</b> и добавляешь <b>-ący</b>: <b>czytający, piszący, pracujący, mówiący, śpiący</b>.",
      "Русское соответствие лежит рядом и совпадает почти слог в слог: czytający — «читающий», piszący — «пишущий», śpiący — «спящий», mówiący — «говорящий». Это одна и та же старая славянская форма, только окончание своё.",
      "Работает и с возвратными глаголами — <b>się</b> остаётся при причастии: <b>uczą się → uczący się</b>, <b>bawią się → bawiący się</b>.",
      "Важное ограничение: причастие на -ący делается только от несовершенного вида. Действительного причастия прошедшего времени в польском вообще нет — русское «прочитавший» здесь передают придаточным: <b>ten, który przeczytał</b>."
    ],
    "audio":"Рецепт один на весь язык. Берёшь форму третьего лица множественного числа настоящего времени, ту самую, что говорит «они»: czytają, piszą, pracują, mówią, śpią. Отбрасываешь -ą и добавляешь -ący: czytający, piszący, pracujący, mówiący, śpiący. Русское соответствие лежит рядом и совпадает почти слог в слог: czytający — читающий, piszący — пишущий, śpiący — спящий. Работает и с возвратными глаголами, się остаётся при причастии: uczą się и uczący się, bawią się и bawiący się. Важное ограничение: причастие на -ący делается только от несовершенного вида. Действительного причастия прошедшего времени в польском вообще нет — русское «прочитавший» здесь передают придаточным: ten, który przeczytał.",
    "table":{"rows":[
      ["czytają → <b>czytający</b> <button class=\"play\" data-say=\"czytają, czytający\">🔊</button>","читают → читающий"],
      ["piszą → <b>piszący</b> <button class=\"play\" data-say=\"piszą, piszący\">🔊</button>","пишут → пишущий"],
      ["pracują → <b>pracujący</b> <button class=\"play\" data-say=\"pracują, pracujący\">🔊</button>","работают → работающий"],
      ["mówią → <b>mówiący</b> <button class=\"play\" data-say=\"mówią, mówiący\">🔊</button>","говорят → говорящий"],
      ["śpią → <b>śpiący</b> <button class=\"play\" data-say=\"śpią, śpiący\">🔊</button>","спят → спящий"],
      ["uczą się → <b>uczący się</b> <button class=\"play\" data-say=\"uczą się, uczący się\">🔊</button>","учатся → учащийся"]
    ],"star":0},
    "examples":[
      {"ru":"Спящий ребёнок","en":"<b>śpiące</b> dziecko","gloss":"śpią → śpiący, средний род — śpiące","say":"śpiące dziecko"},
      {"ru":"Работающая мама","en":"<b>pracująca</b> mama","say":"pracująca mama"},
      {"ru":"Люди, живущие здесь","en":"ludzie <b>mieszkający</b> tutaj","say":"ludzie mieszkający tutaj"},
      {"ru":"Студент, изучающий польский","en":"student <b>uczący się</b> polskiego","gloss":"się остаётся при причастии","say":"student uczący się polskiego"}
    ],
    "mistakes":[
      {"wrong":"czytujący","right":"<b>czytający</b>","why":"основа берётся из формы «они читают» — czytają. Меняем только -ą на -ący, больше ничего."},
      {"wrong":"przeczytający list","right":"<b>ten, który przeczytał</b> list","why":"от совершенного вида причастия на -ący не бывает. Русское «прочитавший» польский разворачивает в придаточное."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> возьми форму «они» и поменяй окончание.",
       "q":"pracują → «работающий» —","opts":["pracowający","pracujący","pracowny"],"answer":1,
       "explain":"pracują без -ą плюс -ący даёт <b>pracujący</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> проверь вид глагола.",
       "q":"«Человек, прочитавший книгу» по-польски —","opts":["człowiek przeczytający książkę","człowiek, który przeczytał książkę","człowiek czytający książkę"],"answer":1,
       "explain":"Действительного причастия прошедшего времени нет: нужен оборот <b>ten, który przeczytał</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши одно слово.",
       "q":"mówią → «говорящий»","accept":["mówiący","mowiacy","mówiacy","mowiący"],"placeholder":"mów…"}
    ],
    "mnemonic":"📖 oni czytają → czytający. Форма «они» минус -ą плюс -ący. Один рецепт на все глаголы."
   },
   {
    "eyebrow":"Правило 2 · Склонение",
    "title":"Причастие ведёт себя как прилагательное",
    "paras":[
      "Раз оно отвечает на вопрос «какой», то и склоняется как прилагательное — по родам, числам и падежам: <b>czytający chłopiec</b>, <b>czytająca dziewczyna</b>, <b>czytające dziecko</b>. Во множественном действует уже знакомое различие: <b>czytający studenci</b> (мужско-личная форма) — <b>czytające studentki</b>.",
      "В падежах — обычные окончания прилагательного, никаких особых правил: <b>Znam kobietę pracującą w banku.</b> (винительный) <b>Szukam osoby mówiącej po angielsku.</b> (родительный) <b>Rozmawiałem z człowiekiem czekającym na peronie.</b> (творительный)",
      "Порядок слов такой же, как в русском. Одиночное причастие стоит перед существительным: <b>śpiące dziecko</b>. Причастие с зависимыми словами — после: <b>osoba mówiąca po angielsku</b>, а не наоборот.",
      "И главный практический навык дня: любой такой оборот сворачивается из придаточного с <b>który</b> и разворачивается обратно. <b>Osoba, która mówi po angielsku</b> = <b>osoba mówiąca po angielsku</b>. Понял(а) одну форму — понял(а) обе."
    ],
    "audio":"Раз оно отвечает на вопрос «какой», то и склоняется как прилагательное: czytający chłopiec, czytająca dziewczyna, czytające dziecko. Во множественном действует знакомое различие: czytający studenci — мужско-личная форма, czytające studentki. В падежах обычные окончания прилагательного: znam kobietę pracującą w banku, винительный; szukam osoby mówiącej po angielsku, родительный; rozmawiałem z człowiekiem czekającym na peronie, творительный. Порядок слов такой же, как в русском. Одиночное причастие стоит перед существительным: śpiące dziecko. Причастие с зависимыми словами — после: osoba mówiąca po angielsku. И главный навык дня: любой оборот сворачивается из придаточного с который и разворачивается обратно. Osoba, która mówi po angielsku, это osoba mówiąca po angielsku.",
    "table":{"rows":[
      ["<b>czytający</b> chłopiec <button class=\"play\" data-say=\"czytający chłopiec\">🔊</button>","читающий мальчик"],
      ["<b>czytająca</b> dziewczyna <button class=\"play\" data-say=\"czytająca dziewczyna\">🔊</button>","читающая девушка"],
      ["<b>czytające</b> dziecko <button class=\"play\" data-say=\"czytające dziecko\">🔊</button>","читающий ребёнок"],
      ["<b>czytający</b> studenci <button class=\"play\" data-say=\"czytający studenci\">🔊</button>","читающие студенты"],
      ["<b>czytające</b> studentki <button class=\"play\" data-say=\"czytające studentki\">🔊</button>","читающие студентки"],
      ["Szukam osoby <b>mówiącej</b> po angielsku. <button class=\"play\" data-say=\"Szukam osoby mówiącej po angielsku\">🔊</button>","Ищу человека, говорящего по-английски."]
    ],"star":5},
    "examples":[
      {"ru":"Я знаю женщину, работающую в этом банке.","en":"Znam kobietę <b>pracującą</b> w tym banku.","gloss":"kobietę — винительный, значит и pracującą","say":"Znam kobietę pracującą w tym banku."},
      {"ru":"Мы поговорили с человеком, ждавшим на платформе.","en":"Rozmawialiśmy z człowiekiem <b>czekającym</b> na peronie.","say":"Rozmawialiśmy z człowiekiem czekającym na peronie."},
      {"ru":"Дети, играющие во дворе, — соседские.","en":"Dzieci <b>bawiące się</b> na podwórku to dzieci sąsiadów.","say":"Dzieci bawiące się na podwórku to dzieci sąsiadów."},
      {"ru":"Человек, который ждёт у двери, — это человек, ждущий у двери.","en":"Człowiek, <b>który czeka</b> przy drzwiach — człowiek <b>czekający</b> przy drzwiach.","gloss":"два способа сказать одно","say":"Człowiek, który czeka przy drzwiach — człowiek czekający przy drzwiach."}
    ],
    "mistakes":[
      {"wrong":"Znam kobietę pracująca w banku.","right":"Znam kobietę <b>pracującą</b> w banku.","why":"причастие согласуется с существительным в падеже: kobietę — винительный, поэтому pracującą."},
      {"wrong":"mówiąca po angielsku osoba","right":"osoba <b>mówiąca po angielsku</b>","why":"оборот с зависимыми словами идёт после существительного — как и в русском «человек, говорящий по-английски»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на падеж существительного.",
       "q":"Znam kobietę ___ w banku. (работающую)","opts":["pracująca","pracującą","pracującej"],"answer":1,
       "explain":"kobietę стоит в винительном — причастие идёт следом: <b>pracującą</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни мужско-личную форму.",
       "q":"«Студенты, изучающие польский» —","opts":["studenci uczące się polskiego","studenci uczący się polskiego","studentki uczący się polskiego"],"answer":1,
       "explain":"Studenci — мужско-личная форма, причастие тоже: <b>uczący się</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Ищу человека, говорящего по-английски»</b>","answer":"Szukam osoby mówiącej po angielsku"}
    ],
    "mnemonic":"🧩 Причастие = прилагательное. Одиночное — перед словом, с хвостом — после. И всегда в том же падеже."
   },
   {
    "eyebrow":"Правило 3 · Ловушка недели",
    "title":"<em>Interesujący</em> — причастие, ставшее прилагательным",
    "paras":[
      "Часть причастий язык давно присвоил и превратил в обычные прилагательные. <b>Interesujący</b> значит просто «интересный», <b>męczący</b> — «утомительный», <b>niepokojący</b> — «тревожный». Про глагол там уже никто не вспоминает: <b>To interesująca książka.</b>",
      "А теперь ловушка. Живое причастие от <b>interesować się</b> — это <b>interesujący się</b>, и оно тянет за собой всё, что требовал глагол: <b>się</b> и творительный падеж. <b>osoba interesująca się historią</b> — «человек, интересующийся историей».",
      "Разница видна в одной паре: <b>interesujący film</b> (интересный фильм) — <b>człowiek interesujący się filmem</b> (человек, интересующийся кино). Одна форма, два разных употребления, и <b>się</b> решает всё.",
      "Тот же принцип с другими управляемыми глаголами: <b>zajmować się</b> → <b>zajmujący się</b> + творительный, <b>bać się</b> → <b>bojący się</b> + родительный, <b>pomagać</b> → <b>pomagający</b> + дательный. Причастие никогда не меняет падежа, которого требовал глагол."
    ],
    "audio":"Часть причастий язык давно присвоил и превратил в обычные прилагательные. Interesujący значит просто «интересный», męczący — «утомительный», niepokojący — «тревожный». Про глагол там уже никто не вспоминает: to interesująca książka. А теперь ловушка. Живое причастие от interesować się — это interesujący się, и оно тянет за собой всё, что требовал глагол: się и творительный падеж. Osoba interesująca się historią — человек, интересующийся историей. Разница видна в одной паре: interesujący film, интересный фильм, и człowiek interesujący się filmem, человек, интересующийся кино. Тот же принцип с другими глаголами: zajmujący się плюс творительный, bojący się плюс родительный, pomagający плюс дательный. Причастие никогда не меняет падежа, которого требовал глагол.",
    "table":{"rows":[
      ["<b>interesujący</b> film <button class=\"play\" data-say=\"interesujący film\">🔊</button>","интересный фильм"],
      ["osoba <b>interesująca się</b> historią <button class=\"play\" data-say=\"osoba interesująca się historią\">🔊</button>","человек, интересующийся историей"],
      ["<b>męcząca</b> praca <button class=\"play\" data-say=\"męcząca praca\">🔊</button>","утомительная работа"],
      ["<b>niepokojąca</b> wiadomość <button class=\"play\" data-say=\"niepokojąca wiadomość\">🔊</button>","тревожная новость"],
      ["ludzie <b>zajmujący się</b> muzyką <button class=\"play\" data-say=\"ludzie zajmujący się muzyką\">🔊</button>","люди, занимающиеся музыкой"]
    ],"star":1},
    "examples":[
      {"ru":"Это очень интересная книга.","en":"To bardzo <b>interesująca</b> książka.","say":"To bardzo interesująca książka."},
      {"ru":"Я познакомился с человеком, интересующимся историей.","en":"Poznałem osobę <b>interesującą się</b> historią.","gloss":"osobę — винительный, historią — творительный","say":"Poznałem osobę interesującą się historią."},
      {"ru":"Это была утомительная неделя.","en":"To był <b>męczący</b> tydzień.","say":"To był męczący tydzień."},
      {"ru":"Ищем человека, занимающегося рекламой.","en":"Szukamy osoby <b>zajmującej się</b> reklamą.","say":"Szukamy osoby zajmującej się reklamą."}
    ],
    "mistakes":[
      {"wrong":"osoba interesująca historią","right":"osoba <b>interesująca się</b> historią","why":"без się получается «интересующая историю». Глагол interesować się требует и się, и творительного — причастие всё это сохраняет."},
      {"wrong":"osoba interesująca się historii","right":"osoba interesująca się <b>historią</b>","why":"падеж диктует глагол: interesować się идёт с творительным, а не с родительным."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, есть ли здесь глагол «интересоваться».",
       "q":"«Интересный фильм» —","opts":["interesujący się film","interesujący film","interesująca film"],"answer":1,
       "explain":"Здесь причастие давно стало прилагательным: <b>interesujący film</b>, без się."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после interesować się.",
       "q":"«Человек, интересующийся политикой» —","opts":["człowiek interesujący się polityki","człowiek interesujący się polityką","człowiek interesujący polityką"],"answer":1,
       "explain":"Творительный плюс się: <b>interesujący się polityką</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши два слова.",
       "q":"«утомительная работа»","accept":["męcząca praca","meczaca praca","męczaca praca"],"placeholder":"mę… praca"}
    ],
    "mnemonic":"🔍 interesujący film — прилагательное. interesujący SIĘ czymś — живое причастие. Разница в двух буквах."
   },
   {
    "eyebrow":"Правило 4 · Где это живёт",
    "title":"Объявления, вакансии и голос на вокзале",
    "paras":[
      "Именно ради экономии причастия и держат: оборот короче придаточного, а смысл тот же. Поэтому они гнездятся там, где текста должно быть мало, — в объявлениях, вакансиях и станционных сообщениях.",
      "Вакансия: <b>Szukamy osoby mówiącej po angielsku.</b> <b>Zatrudnimy kierowcę posiadającego prawo jazdy.</b> Объявление курса: <b>Osoby chcące zapisać się na kurs proszone są o kontakt.</b> Вокзал: <b>Pasażerowie jadący do Krakowa proszeni są o przejście na peron trzeci.</b>",
      "Заметь, как обороты дружат со страдательным залогом из дня 20: <b>proszone są</b>, <b>proszeni są</b>. Официальный польский почти всегда собирает их вместе.",
      "Стратегия чтения простая: увидел(а) слово на -ący, -ąca, -ące — мысленно поставь перед ним «который» и разверни. <b>Studenci uczący się polskiego</b> = <b>studenci, którzy uczą się polskiego</b>. Дальше фраза читается сама."
    ],
    "audio":"Именно ради экономии причастия и держат: оборот короче придаточного, а смысл тот же. Поэтому они гнездятся там, где текста должно быть мало, — в объявлениях, вакансиях и станционных сообщениях. Вакансия: szukamy osoby mówiącej po angielsku; zatrudnimy kierowcę posiadającego prawo jazdy. Объявление курса: osoby chcące zapisać się na kurs proszone są o kontakt. Вокзал: pasażerowie jadący do Krakowa proszeni są o przejście na peron trzeci. Заметь, как обороты дружат со страдательным залогом из дня двадцать: proszone są, proszeni są. Стратегия чтения простая: увидев слово на -ący, -ąca, -ące, мысленно поставь перед ним «который» и разверни. Studenci uczący się polskiego, это studenci, którzy uczą się polskiego.",
    "table":{"rows":[
      ["Szukamy osoby <b>mówiącej</b> po angielsku. <button class=\"play\" data-say=\"Szukamy osoby mówiącej po angielsku\">🔊</button>","Ищем человека, говорящего по-английски."],
      ["Zatrudnimy kierowcę <b>posiadającego</b> prawo jazdy. <button class=\"play\" data-say=\"Zatrudnimy kierowcę posiadającego prawo jazdy\">🔊</button>","Возьмём водителя с правами."],
      ["Osoby <b>chcące</b> zapisać się na kurs… <button class=\"play\" data-say=\"Osoby chcące zapisać się na kurs\">🔊</button>","Желающие записаться на курс…"],
      ["Pasażerowie <b>jadący</b> do Krakowa… <button class=\"play\" data-say=\"Pasażerowie jadący do Krakowa\">🔊</button>","Пассажиры, едущие в Краков…"],
      ["Studenci <b>uczący się</b> polskiego mają zniżkę. <button class=\"play\" data-say=\"Studenci uczący się polskiego mają zniżkę\">🔊</button>","У студентов, изучающих польский, есть скидка."]
    ],"star":-1},
    "examples":[
      {"ru":"Пассажиры, едущие в Гданьск, — на вторую платформу.","en":"Pasażerowie <b>jadący</b> do Gdańska — na peron drugi.","say":"Pasażerowie jadący do Gdańska — na peron drugi."},
      {"ru":"Люди, работающие ночью, платят меньше за проезд.","en":"Ludzie <b>pracujący</b> w nocy płacą mniej za przejazd.","say":"Ludzie pracujący w nocy płacą mniej za przejazd."},
      {"ru":"Студентов, изучающих польский, ждём в четверг.","en":"Studentów <b>uczących się</b> polskiego czekamy w czwartek.","gloss":"studentów — винительный мн., причастие следом","say":"Studentów uczących się polskiego czekamy w czwartek."},
      {"ru":"Это то же самое, что «студенты, которые изучают польский».","en":"To to samo, co «studenci, <b>którzy uczą się</b> polskiego».","say":"To to samo, co studenci, którzy uczą się polskiego."}
    ],
    "mistakes":[
      {"wrong":"Pasażerowie jadące do Krakowa","right":"Pasażerowie <b>jadący</b> do Krakowa","why":"pasażerowie — мужско-личная форма, причастие тоже: jadący."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> разверни оборот в придаточное.",
       "q":"<b>Osoby chcące zapisać się na kurs</b> значит —","opts":["люди, записавшиеся на курс","люди, желающие записаться на курс","люди, которых записали на курс"],"answer":1,
       "explain":"Chcące — от chcą, «желающие». Оборот равен: osoby, które chcą się zapisać."},
      {"type":"choice","howto":"<b>Что делать:</b> сверни придаточное в оборот.",
       "q":"«Osoba, która mówi po niemiecku» одним оборотом —","opts":["osoba mówiąca po niemiecku","osoba mówiona po niemiecku","osoba mówiąc po niemiecku"],"answer":0,
       "explain":"<b>Osoba mówiąca po niemiecku</b> — то же самое, только короче."},
      {"type":"speak","howto":"Нажми микрофон и прочитай объявление вслух.",
       "target":"Szukamy osoby mówiącej po angielsku.","sub":"ищем человека, говорящего по-английски","want":"Szukamy osoby mówiącej po angielsku."}
    ],
    "mnemonic":"📌 Видишь -ący, -ąca, -ące — подставь «который» и читай дальше. Оборот и придаточное — одно и то же."
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек стоят у доски объявлений в языковой школе. Считай про себя, сколько раз в разговоре появится форма на -ący.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Zobacz: szukają osoby mówiącej po polsku i po angielsku.","ru":"Смотри: ищут человека, говорящего по-польски и по-английски.",
      "words":[["szukają osoby","ищут человека"],["mówiącej","говорящего"]]},
     {"who":"M","name":"Marek","side":"right","en":"To znaczy: osoby, która mówi w dwóch językach. Czyli ciebie.","ru":"То есть человека, который говорит на двух языках. То есть тебя.",
      "words":[["To znaczy","то есть"],["w dwóch językach","на двух языках"]]},
     {"who":"A","name":"Anna","side":"left","en":"Jeszcze nie. Najpierw egzamin, potem takie ogłoszenia.","ru":"Ещё нет. Сначала экзамен, потом такие объявления.",
      "words":[["Najpierw","сначала"],["ogłoszenia","объявления"]]},
     {"who":"M","name":"Marek","side":"right","en":"A tu: kurs dla studentów uczących się polskiego. Zniżka pięćdziesiąt procent.","ru":"А тут: курс для студентов, изучающих польский. Скидка пятьдесят процентов.",
      "words":[["dla studentów","для студентов"],["uczących się","изучающих"]]},
     {"who":"A","name":"Anna","side":"left","en":"Ciekawe. A ta kartka niżej? Coś o osobach chcących zdawać egzamin.","ru":"Интересно. А тот листок ниже? Что-то о желающих сдавать экзамен.",
      "words":[["kartka","листок"],["chcących","желающих"]]},
     {"who":"M","name":"Marek","side":"right","en":"Spotkanie informacyjne w piątek. Dla osób zapisujących się w tym roku.","ru":"Информационная встреча в пятницу. Для тех, кто записывается в этом году.",
      "words":[["spotkanie informacyjne","информационная встреча"],["zapisujących się","записывающихся"]]},
     {"who":"A","name":"Anna","side":"left","en":"Idziemy. Człowiek prowadzący to spotkanie na pewno wie wszystko.","ru":"Идём. Человек, ведущий эту встречу, наверняка знает всё.",
      "words":[["prowadzący","ведущий"],["na pewno","наверняка"]]},
     {"who":"M","name":"Marek","side":"right","en":"Widzisz? Czytasz ogłoszenia bez słownika. Rok temu to było niemożliwe.","ru":"Видишь? Читаешь объявления без словаря. Год назад это было невозможно.",
      "words":[["bez słownika","без словаря"],["niemożliwe","невозможно"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — объявление на вокзале. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Pasażerowie jadący do Gdańska proszeni są o przejście na peron drugi.","ru":"Пассажиров, едущих в Гданьск, просим пройти на вторую платформу."},
     {"who":"B","en":"Co on powiedział? Za szybko.","ru":"Что он сказал? Слишком быстро."},
     {"who":"A","en":"Że ludzie jadący do Gdańska idą na peron drugi.","ru":"Что люди, едущие в Гданьск, идут на вторую платформу."},
     {"who":"B","en":"To my. Biegniemy.","ru":"Это мы. Бежим."},
     {"who":"A","en":"Spokojnie. Pociąg ma dziesięć minut opóźnienia.","ru":"Спокойно. Поезд опаздывает на десять минут."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — двенадцать причастий и их среда обитания.",
   "items":[
     {"en":"czytający","ru":"читающий","ex":"czytający chłopiec"},
     {"en":"piszący","ru":"пишущий","ex":"człowiek piszący list"},
     {"en":"pracujący","ru":"работающий","ex":"ludzie pracujący w nocy"},
     {"en":"mówiący","ru":"говорящий","ex":"osoba mówiąca po angielsku"},
     {"en":"śpiący","ru":"спящий","ex":"śpiące dziecko"},
     {"en":"jadący","ru":"едущий","ex":"pasażerowie jadący do Krakowa"},
     {"en":"uczący się","ru":"учащийся, изучающий","ex":"studenci uczący się polskiego"},
     {"en":"interesujący","ru":"интересный","ex":"To interesująca książka."},
     {"en":"interesujący się czymś","ru":"интересующийся чем-то (+ твор.)","ex":"osoba interesująca się historią"},
     {"en":"męczący","ru":"утомительный","ex":"To był męczący tydzień."},
     {"en":"ogłoszenie","ru":"объявление","ex":"Przeczytałam ogłoszenie."},
     {"en":"zniżka","ru":"скидка","ex":"Studenci mają zniżkę."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу.",
   "pairs":[["czytający","читающий"],["śpiące dziecko","спящий ребёнок"],["mówiąca po angielsku","говорящая по-английски"],["interesujący film","интересный фильм"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, что Анна нашла на доске объявлений. Каждый оборот с -ący попробуй мысленно развернуть через «который».",
   "title":"Tablica ogłoszeń",
   "sentences":["W szkole językowej wisi duża tablica ogłoszeń.","Anna czyta ją za każdym razem, czekając na lekcję.","Pierwsza kartka: szukamy osoby mówiącej po polsku i po angielsku.","Druga: kurs dla studentów uczących się polskiego, zniżka pięćdziesiąt procent.","Trzecia: osoby chcące zdawać egzamin proszone są o kontakt do końca miesiąca.","Rok temu Anna rozumiała z tego może połowę.","Teraz widzi, że to zwykłe zdania z który, tylko krótsze.","Człowiek prowadzący kurs stoi przy tablicy i pije kawę.","Anna pyta go o termin spotkania informacyjnego.","Odpowiada, że w piątek o osiemnastej, w sali numer cztery."],
   "translation":"В языковой школе висит большая доска объявлений. Анна читает её каждый раз, пока ждёт занятия. Первый листок: ищем человека, говорящего по-польски и по-английски. Второй: курс для студентов, изучающих польский, скидка пятьдесят процентов. Третий: желающих сдавать экзамен просим связаться с нами до конца месяца. Год назад Анна понимала из этого, может, половину. Теперь она видит, что это обычные предложения с «который», только короче. Человек, ведущий курс, стоит у доски и пьёт кофе. Анна спрашивает его о времени информационной встречи. Он отвечает, что в пятницу в шесть вечера, в аудитории номер четыре."
 },
 "quiz":{
   "intro":"Пять вопросов — и причастие на -ący твоё.",
   "items":[
     {"q":"1. pracują → «работающий» —","opts":["pracowający","pracujący","pracowny"],"answer":1,
      "explain":"Форма «они» минус -ą плюс -ący: <b>pracujący</b>."},
     {"q":"2. Znam kobietę ___ w banku. (работающую)","opts":["pracująca","pracującą","pracującej"],"answer":1,
      "explain":"Причастие идёт в падеже существительного: kobietę — винительный, значит <b>pracującą</b>."},
     {"q":"3. «Человек, интересующийся историей» —","opts":["człowiek interesujący historią","człowiek interesujący się historią","człowiek interesujący się historii"],"answer":1,
      "explain":"Глагол требует się и творительного: <b>interesujący się historią</b>."},
     {"q":"4. «Студенты, изучающие польский» —","opts":["studenci uczące się polskiego","studenci uczący się polskiego","studenci uczącym się polskiego"],"answer":1,
      "explain":"Studenci — мужско-личная форма: <b>uczący się</b>."},
     {"q":"5. «Человек, прочитавший книгу» по-польски —","opts":["człowiek przeczytający książkę","człowiek, który przeczytał książkę","człowiek czytany książkę"],"answer":1,
      "explain":"Причастий на -ący от совершенного вида нет — нужен оборот с <b>który</b>."}
   ]
 },
 "essay":{
   "intro":"Напиши три объявления — так, будто вешаешь их на настоящую доску.",
   "prompt":"Напиши 4–5 предложений: три коротких объявления с оборотом на -ący (вакансия, курс, встреча) и одно предложение о том, какое объявление ты сам(а) прочитал(а) бы с интересом.",
   "hint":"Опора: Szukamy osoby… плюс причастие · Kurs dla studentów uczących się… · Osoby chcące… proszone są o… 📌",
   "example":"Szukamy osoby mówiącej po polsku i po hiszpańsku. Zatrudnimy kierowcę posiadającego prawo jazdy. Kurs weekendowy dla studentów uczących się polskiego — zniżka dla osób zapisujących się w marcu. Osoby chcące wziąć udział proszone są o kontakt do piątku. Sam chętnie przeczytałbym ogłoszenie o pracy dla ludzi lubiących książki."
 }
},
"23": {
 "day":23,"week":"04",
 "themeRu":"Читая и сделав",
 "themeEn":"Imiesłowy na -ąc",
 "intro":"Читая объявление, Анна пила кофе — и в этой фразе спрятано сегодняшнее ядро. Вчерашнее <b>-ący</b> отвечало на вопрос «какой». Сегодняшнее <b>-ąc</b> отвечает на «как, когда, что при этом делая»: <b>czytając</b> — «читая». Это польское деепричастие, и оно повторяет русское почти буква в букву.",
 "introAudio":"Читая объявление, Анна пила кофе — и в этой фразе спрятано сегодняшнее ядро. Вчерашнее -ący отвечало на вопрос «какой». Сегодняшнее -ąc отвечает на «как, когда, что при этом делая»: czytając — читая. Это польское деепричастие, и оно повторяет русское почти буква в букву.",
 "goals":[
   "Сделать деепричастие от любого глагола: <b>czytają → czytając</b>",
   "Соблюдать правило одного подлежащего: <b>Wracając do domu, spotkałem Marka</b>",
   "Пользоваться готовыми оборотами: <b>mówiąc szczerze, biorąc pod uwagę</b>",
   "Узнавать книжное <b>-wszy</b>: <b>zrobiwszy, przyszedłszy</b>"
 ],
 "learned":[
   "Сделал(а) деепричастие от любого глагола: czytają и czytając",
   "Соблюл(а) правило одного подлежащего: Wracając do domu, spotkałem Marka",
   "Воспользовался(лась) оборотами: mówiąc szczerze, biorąc pod uwagę",
   "Узнал(а) книжное -wszy: zrobiwszy, przyszedłszy"
 ],
 "review":{
   "intro":"Вчерашние причастия — на разминку: форма, согласование и одна ловушка с się. Плюс приставки, которые с нами весь уровень.",
   "introAudio":"Вчерашние причастия — на разминку: форма, согласование и одна ловушка с się. Плюс приставки, которые с нами весь уровень.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни рецепт от формы «они».",
      "q":"mówią → «говорящий» —","opts":["mówiący","mowiący","mówiony"],"answer":0,
      "explain":"Форма «они» минус -ą плюс -ący даёт <b>mówiący</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> проверь падеж существительного.",
      "q":"Szukam osoby ___ po angielsku.","opts":["mówiąca","mówiącej","mówiącą"],"answer":1,
      "explain":"После szukać — родительный: osoby <b>mówiącej</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни приставки движения из первой недели.",
      "q":"«Он вышел из дома в восемь» —","opts":["Przyszedł z domu o ósmej","Wyszedł z domu o ósmej","Doszedł z domu o ósmej"],"answer":1,
      "explain":"Русское вы- отвечает польскому wy-: <b>wyszedł z domu</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Человек, интересующийся историей»</b>","answer":"Człowiek interesujący się historią"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Как делается",
    "title":"<em>Czytają → czytając</em>",
    "paras":[
      "Рецепт тот же, что вчера, только короче на хвост. Форма «они»: <b>czytają, idą, jedzą, śpią, myślą, wracają, robią, piszą, biorą</b>. Отбрасываешь <b>-ą</b>, добавляешь <b>-ąc</b>: <b>czytając, idąc, jedząc, śpiąc, myśląc, wracając, robiąc, pisząc, biorąc</b>.",
      "Проще всего запомнить так: вчерашнее <b>czytający</b> без адъективного окончания и есть <b>czytając</b>. Одна основа, две формы — одна отвечает на «какой», другая на «как».",
      "Форма неизменяемая. Ни рода, ни числа, ни падежа: <b>czytając</b> одинаково для мужчины, женщины и целой компании. Русское «читая» ведёт себя ровно так же.",
      "Один особый случай стоит запомнить сразу: от <b>być</b> получается <b>będąc</b> — «будучи». <b>Będąc dzieckiem, mieszkałam na wsi.</b>"
    ],
    "audio":"Рецепт тот же, что вчера, только короче на хвост. Форма «они»: czytają, idą, jedzą, śpią, myślą, wracają, robią, piszą, biorą. Отбрасываешь -ą, добавляешь -ąc: czytając, idąc, jedząc, śpiąc, myśląc, wracając, robiąc, pisząc, biorąc. Проще всего запомнить так: вчерашнее czytający без адъективного окончания и есть czytając. Одна основа, две формы: одна отвечает на «какой», другая на «как». Форма неизменяемая: ни рода, ни числа, ни падежа. Русское «читая» ведёт себя ровно так же. Один особый случай: от być получается będąc, будучи. Będąc dzieckiem, mieszkałam na wsi.",
    "table":{"rows":[
      ["czytają → <b>czytając</b> <button class=\"play\" data-say=\"czytają, czytając\">🔊</button>","читают → читая"],
      ["idą → <b>idąc</b> <button class=\"play\" data-say=\"idą, idąc\">🔊</button>","идут → идя"],
      ["jedzą → <b>jedząc</b> <button class=\"play\" data-say=\"jedzą, jedząc\">🔊</button>","едят → во время еды"],
      ["śpią → <b>śpiąc</b> <button class=\"play\" data-say=\"śpią, śpiąc\">🔊</button>","спят → во сне"],
      ["wracają → <b>wracając</b> <button class=\"play\" data-say=\"wracają, wracając\">🔊</button>","возвращаются → возвращаясь"],
      ["być → <b>będąc</b> <button class=\"play\" data-say=\"będąc\">🔊</button>","быть → будучи"]
    ],"star":0},
    "examples":[
      {"ru":"Читая газету, я пью кофе.","en":"<b>Czytając</b> gazetę, piję kawę.","say":"Czytając gazetę, piję kawę."},
      {"ru":"Ужиная, мы смотрим фильм.","en":"<b>Jedząc</b> kolację, oglądamy film.","say":"Jedząc kolację, oglądamy film."},
      {"ru":"Ничего не сказав, он вышел.","en":"Nic nie <b>mówiąc</b>, wyszedł.","gloss":"отрицание стоит перед деепричастием","say":"Nic nie mówiąc, wyszedł."},
      {"ru":"Будучи ребёнком, я жила в деревне.","en":"<b>Będąc</b> dzieckiem, mieszkałam na wsi.","say":"Będąc dzieckiem, mieszkałam na wsi."}
    ],
    "mistakes":[
      {"wrong":"czytajonc","right":"<b>czytając</b>","why":"пишется через носовую ą: czytając, idąc, jedząc. На письме это всегда ą, как бы ни звучало."},
      {"wrong":"Czytającym gazetę, piję kawę.","right":"<b>Czytając</b> gazetę, piję kawę.","why":"деепричастие не склоняется. Окончания есть только у вчерашней формы на -ący."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> возьми форму «они» и поменяй хвост.",
       "q":"wracają → «возвращаясь» —","opts":["wracając","wracający","wracająco"],"answer":0,
       "explain":"Минус -ą, плюс -ąc: <b>wracając</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, склоняется ли эта форма.",
       "q":"Какая форма правильная в «Идя домой, я думала о работе»?","opts":["Idąca do domu, myślałam o pracy","Idąc do domu, myślałam o pracy","Idącej do domu, myślałam o pracy"],"answer":1,
       "explain":"Деепричастие неизменяемо: <b>idąc</b> для любого рода и числа."},
      {"type":"type","howto":"<b>Что делать:</b> напиши одно слово.",
       "q":"piszą → «во время письма, пиша»","accept":["pisząc","piszac"],"placeholder":"pisz…"}
    ],
    "mnemonic":"✍️ czytający без хвоста = czytając. «Какой» → -ący, «как» → -ąc."
   },
   {
    "eyebrow":"Правило 2 · Правило одного подлежащего",
    "title":"Кто читает — тот и пьёт кофе",
    "paras":[
      "Деепричастие описывает второе действие того же самого человека, происходящее одновременно с главным. <b>Wracając do domu, spotkałem Marka.</b> — возвращался я, встретил тоже я. Оба действия мои, оба в одно время.",
      "Если подлежащие разные, оборот рассыпается — точно так же, как в русском. Фраза <b>Wracając do domu, zaczęło padać</b> звучит по-польски настолько же криво, как «Возвращаясь домой, начался дождь». Правильно: <b>Kiedy wracałem do domu, zaczęło padać.</b>",
      "Оборот делается только от несовершенного вида — это ведь одновременность, длящееся действие. От <b>przeczytać</b> формы на -ąc нет.",
      "Место в предложении свободное: <b>Czytając gazetę, piję kawę.</b> и <b>Piję kawę, czytając gazetę.</b> — обе фразы верны. Запятая ставится всегда: оборот отделяется от главной части, как и в русском."
    ],
    "audio":"Деепричастие описывает второе действие того же самого человека, происходящее одновременно с главным. Wracając do domu, spotkałem Marka: возвращался я, встретил тоже я. Если подлежащие разные, оборот рассыпается, точно так же, как в русском. Фраза wracając do domu, zaczęło padać звучит по-польски настолько же криво, как «возвращаясь домой, начался дождь». Правильно: kiedy wracałem do domu, zaczęło padać. Оборот делается только от несовершенного вида: это ведь одновременность. От przeczytać формы на -ąc нет. Место в предложении свободное: czytając gazetę, piję kawę, и piję kawę, czytając gazetę. Запятая ставится всегда.",
    "table":{"rows":[
      ["<b>Wracając</b> do domu, spotkałem Marka. <button class=\"play\" data-say=\"Wracając do domu, spotkałem Marka\">🔊</button>","Возвращаясь домой, я встретил Марека."],
      ["<b>Ucząc się</b>, słucham muzyki. <button class=\"play\" data-say=\"Ucząc się, słucham muzyki\">🔊</button>","Занимаясь, я слушаю музыку."],
      ["Piję kawę, <b>czytając</b> gazetę. <button class=\"play\" data-say=\"Piję kawę, czytając gazetę\">🔊</button>","Пью кофе, читая газету."],
      ["<b>Śpiąc</b>, nie słyszałam telefonu. <button class=\"play\" data-say=\"Śpiąc, nie słyszałam telefonu\">🔊</button>","Во сне я не слышала телефона."],
      ["Kiedy wracałem do domu, zaczęło padać. <button class=\"play\" data-say=\"Kiedy wracałem do domu, zaczęło padać\">🔊</button>","Разные подлежащие — только придаточное."]
    ],"star":4},
    "examples":[
      {"ru":"Готовя ужин, она разговаривает по телефону.","en":"<b>Robiąc</b> kolację, rozmawia przez telefon.","say":"Robiąc kolację, rozmawia przez telefon."},
      {"ru":"Занимаясь к экзамену, я слушаю польское радио.","en":"<b>Ucząc się</b> do egzaminu, słucham polskiego radia.","gloss":"się остаётся при деепричастии","say":"Ucząc się do egzaminu, słucham polskiego radia."},
      {"ru":"Не думая долго, она сказала «да».","en":"Nie <b>myśląc</b> długo, powiedziała «tak».","say":"Nie myśląc długo, powiedziała tak."},
      {"ru":"Когда я возвращался домой, пошёл дождь.","en":"<b>Kiedy wracałem</b> do domu, zaczęło padać.","gloss":"разные подлежащие — только придаточное","say":"Kiedy wracałem do domu, zaczęło padać."}
    ],
    "mistakes":[
      {"wrong":"Czytając gazetę, zadzwonił telefon.","right":"<b>Kiedy czytałem</b> gazetę, zadzwonił telefon.","why":"читал я, а звонил телефон — подлежащие разные, оборот не годится."},
      {"wrong":"Przeczytając gazetę, wyszedłem.","right":"<b>Po przeczytaniu</b> gazety wyszedłem.","why":"деепричастие на -ąc бывает только от несовершенного вида."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь, один ли человек делает оба действия.",
       "q":"Какая фраза правильная?","opts":["Idąc do sklepu, spotkałam sąsiadkę","Idąc do sklepu, padał deszcz","Idąc do sklepu, zamknięto sklep"],"answer":0,
       "explain":"В первой оба действия мои. В остальных подлежащие разные — нужен союз kiedy."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на вид глагола.",
       "q":"«Дочитав газету, я вышел» —","opts":["Przeczytając gazetę, wyszedłem","Po przeczytaniu gazety wyszedłem","Czytając gazetę, wyszedłem"],"answer":1,
       "explain":"От совершенного вида -ąc не образуется: <b>po przeczytaniu</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Возвращаясь домой, я встретил Марека»</b>","answer":"Wracając do domu spotkałem Marka"}
    ],
    "mnemonic":"👤 Один человек, два действия, одно время. Разные подлежащие — бери kiedy."
   },
   {
    "eyebrow":"Правило 3 · Готовые обороты",
    "title":"<em>Mówiąc szczerze</em> и компания",
    "paras":[
      "Часть деепричастий застыла во вводных оборотах — их учат целиком, как слова. Самый частый: <b>mówiąc szczerze</b> или <b>prawdę mówiąc</b> — «честно говоря», «по правде говоря».",
      "Дальше по частоте: <b>biorąc pod uwagę</b> (принимая во внимание), <b>nie licząc</b> (не считая), <b>zaczynając od</b> (начиная с), <b>patrząc na to</b> (глядя на это), <b>krótko mówiąc</b> (короче говоря).",
      "И один оборот, который пригодится уже послезавтра, когда мы возьмёмся за мнения: <b>podsumowując</b> — «подводя итог». Им закрывают текст, доклад и спор.",
      "Обрати внимание: русские двойники здесь тоже деепричастия. «Честно говоря», «принимая во внимание», «подводя итог» — те же обороты, слово в слово. Из всех подарков уровня этот стоит просто взять и пользоваться."
    ],
    "audio":"Часть деепричастий застыла во вводных оборотах — их учат целиком, как слова. Самый частый: mówiąc szczerze или prawdę mówiąc, честно говоря, по правде говоря. Дальше по частоте: biorąc pod uwagę — принимая во внимание, nie licząc — не считая, zaczynając od — начиная с, patrząc na to — глядя на это, krótko mówiąc — короче говоря. И один оборот, который пригодится послезавтра, когда мы возьмёмся за мнения: podsumowując, подводя итог. Им закрывают текст, доклад и спор. Обрати внимание: русские двойники здесь тоже деепричастия, слово в слово.",
    "table":{"rows":[
      ["<b>mówiąc szczerze</b> <button class=\"play\" data-say=\"mówiąc szczerze\">🔊</button>","честно говоря"],
      ["<b>prawdę mówiąc</b> <button class=\"play\" data-say=\"prawdę mówiąc\">🔊</button>","по правде говоря"],
      ["<b>krótko mówiąc</b> <button class=\"play\" data-say=\"krótko mówiąc\">🔊</button>","короче говоря"],
      ["<b>biorąc pod uwagę</b> pogodę <button class=\"play\" data-say=\"biorąc pod uwagę pogodę\">🔊</button>","принимая во внимание погоду"],
      ["<b>nie licząc</b> dzieci <button class=\"play\" data-say=\"nie licząc dzieci\">🔊</button>","не считая детей"],
      ["<b>podsumowując</b> <button class=\"play\" data-say=\"podsumowując\">🔊</button>","подводя итог"]
    ],"star":-1},
    "examples":[
      {"ru":"Честно говоря, я боюсь этого экзамена.","en":"<b>Mówiąc szczerze</b>, boję się tego egzaminu.","say":"Mówiąc szczerze, boję się tego egzaminu."},
      {"ru":"Принимая во внимание погоду, останемся дома.","en":"<b>Biorąc pod uwagę</b> pogodę, zostaniemy w domu.","say":"Biorąc pod uwagę pogodę, zostaniemy w domu."},
      {"ru":"Было нас шестеро, не считая детей.","en":"Było nas sześcioro, <b>nie licząc</b> dzieci.","gloss":"собирательное числительное из дня 10","say":"Było nas sześcioro, nie licząc dzieci."},
      {"ru":"Подводя итог: оно того стоило.","en":"<b>Podsumowując</b>: było warto.","say":"Podsumowując, było warto."}
    ],
    "mistakes":[
      {"wrong":"Szczerze mówić, boję się.","right":"<b>Mówiąc szczerze</b>, boję się.","why":"оборот застывший: в нём именно деепричастие mówiąc, а не инфинитив."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни самый частый вводный оборот.",
       "q":"«Честно говоря, у меня нет времени» —","opts":["Szczerze mówić, nie mam czasu","Mówiąc szczerze, nie mam czasu","Mówiący szczerze, nie mam czasu"],"answer":1,
       "explain":"<b>Mówiąc szczerze</b> — застывший оборот с деепричастием."},
      {"type":"choice","q":"<b>Biorąc pod uwagę</b> значит —",
       "opts":["беря в руки","принимая во внимание","подводя итог"],"answer":1,
       "explain":"<b>Biorąc pod uwagę</b> — принимая во внимание. Подводя итог — podsumowując."},
      {"type":"type","howto":"<b>Что делать:</b> напиши оборот из двух слов.",
       "q":"«честно говоря»","accept":["mówiąc szczerze","mowiac szczerze","prawdę mówiąc","prawde mowiac"],"placeholder":"mówiąc …"}
    ],
    "mnemonic":"💬 mówiąc szczerze · biorąc pod uwagę · podsumowując. Три оборота — и речь становится взрослой."
   },
   {
    "eyebrow":"Правило 4 · Только узнавать",
    "title":"Книжное <em>-wszy</em>: <em>zrobiwszy, przyszedłszy</em>",
    "paras":[
      "У деепричастия есть старший брат — форма на <b>-wszy</b> или <b>-łszy</b>. Она значит «сделав»: действие завершилось раньше главного. <b>Zrobiwszy zakupy, wróciła do domu.</b> — «Сделав покупки, она вернулась домой».",
      "Делается она от совершенного вида, от формы прошедшего времени мужского рода: <b>zrobił → zrobiwszy</b>, <b>wrócił → wróciwszy</b>, <b>napisał → napisawszy</b>. Если основа кончается согласной, добавляют <b>-łszy</b>: <b>przyszedł → przyszedłszy</b>, <b>zjadł → zjadłszy</b>.",
      "И честное предупреждение: в живой речи её почти не услышишь. Это форма книг, документов и торжественных текстов. Поляки в разговоре скажут проще: <b>Kiedy zrobiła zakupy, wróciła do domu.</b> или <b>Po zrobieniu zakupów wróciła do domu.</b>",
      "Поэтому задача на сегодня скромная: узнать форму в тексте и понять смысл. Производить её самому не нужно — а русское «сделав, придя» работает как готовый ключ к переводу."
    ],
    "audio":"У деепричастия есть старший брат — форма на -wszy или -łszy. Она значит «сделав»: действие завершилось раньше главного. Zrobiwszy zakupy, wróciła do domu: сделав покупки, она вернулась домой. Делается она от совершенного вида, от формы прошедшего времени мужского рода: zrobił и zrobiwszy, wrócił и wróciwszy, napisał и napisawszy. Если основа кончается согласной, добавляют -łszy: przyszedł и przyszedłszy, zjadł и zjadłszy. И честное предупреждение: в живой речи её почти не услышишь. Это форма книг, документов и торжественных текстов. В разговоре скажут проще: kiedy zrobiła zakupy, wróciła do domu, или po zrobieniu zakupów wróciła do domu. Задача на сегодня скромная: узнать форму в тексте и понять смысл.",
    "table":{"rows":[
      ["<b>zrobiwszy</b> <button class=\"play\" data-say=\"zrobiwszy\">🔊</button>","сделав"],
      ["<b>wróciwszy</b> <button class=\"play\" data-say=\"wróciwszy\">🔊</button>","вернувшись"],
      ["<b>napisawszy</b> <button class=\"play\" data-say=\"napisawszy\">🔊</button>","написав"],
      ["<b>przyszedłszy</b> <button class=\"play\" data-say=\"przyszedłszy\">🔊</button>","придя"],
      ["<b>zjadłszy</b> <button class=\"play\" data-say=\"zjadłszy\">🔊</button>","поев"],
      ["в разговоре: <b>Kiedy zrobiła zakupy…</b> <button class=\"play\" data-say=\"Kiedy zrobiła zakupy, wróciła do domu\">🔊</button>","живая замена книжной формы"]
    ],"star":5},
    "examples":[
      {"ru":"Сделав покупки, она вернулась домой.","en":"<b>Zrobiwszy</b> zakupy, wróciła do domu.","gloss":"книжный стиль","say":"Zrobiwszy zakupy, wróciła do domu."},
      {"ru":"То же самое обычной речью.","en":"<b>Kiedy zrobiła</b> zakupy, wróciła do domu.","say":"Kiedy zrobiła zakupy, wróciła do domu."},
      {"ru":"Придя домой, он сразу уснул.","en":"<b>Przyszedłszy</b> do domu, od razu zasnął.","say":"Przyszedłszy do domu, od razu zasnął."}
    ],
    "mistakes":[
      {"wrong":"Robiwszy zakupy, wróciła.","right":"<b>Zrobiwszy</b> zakupy, wróciła.","why":"форма на -wszy строится только от совершенного вида: zrobić, а не robić."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> переведи по русскому двойнику.",
       "q":"<b>Napisawszy list, poszedł na pocztę</b> значит —","opts":["Он писал письмо и шёл на почту","Написав письмо, он пошёл на почту","Он написал письмо на почте"],"answer":1,
       "explain":"Форма на -wszy передаёт предшествование: <b>написав</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери разговорный вариант.",
       "q":"Как то же самое сказать в обычном разговоре?","opts":["Zrobiwszy zakupy, wróciła","Kiedy zrobiła zakupy, wróciła","Robiąc zakupy, wróciła"],"answer":1,
       "explain":"В живой речи книжную форму заменяют придаточным с <b>kiedy</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи это вслух — с деепричастием на -ąc.",
       "target":"Mówiąc szczerze, boję się tego egzaminu.","sub":"честно говоря, я боюсь этого экзамена","want":"Mówiąc szczerze, boję się tego egzaminu."}
    ],
    "mnemonic":"📚 -ąc говорят каждый день. -wszy пишут в книгах. Первое производим, второе узнаём."
   }
 ],
 "dialogue":{
   "intro":"Анна занимается дома, Марек мешает — по-доброму. Считай деепричастия: их тут больше пяти.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Uczysz się, słuchając radia? Jak ty to robisz?","ru":"Занимаешься, слушая радио? Как ты это делаешь?",
      "words":[["słuchając","слушая"],["Jak ty to robisz?","как ты это делаешь?"]]},
     {"who":"A","name":"Anna","side":"left","en":"Mówiąc szczerze, sama nie wiem. Ale tak zapamiętuję więcej.","ru":"Честно говоря, сама не знаю. Но так я запоминаю больше.",
      "words":[["Mówiąc szczerze","честно говоря"],["zapamiętuję","запоминаю"]]},
     {"who":"M","name":"Marek","side":"right","en":"Ja czytając nie słyszę nic. Nawet telefonu.","ru":"Я, когда читаю, ничего не слышу. Даже телефона.",
      "words":[["czytając","читая"],["Nawet","даже"]]},
     {"who":"A","name":"Anna","side":"left","en":"Wracając wczoraj z pracy, powtarzałam czasowniki na przystanku.","ru":"Вчера, возвращаясь с работы, я повторяла глаголы на остановке.",
      "words":[["Wracając","возвращаясь"],["powtarzałam","я повторяла"]]},
     {"who":"M","name":"Marek","side":"right","en":"Ludzie stojący obok pewnie myśleli, że rozmawiasz przez telefon.","ru":"Люди, стоявшие рядом, наверное, думали, что ты говоришь по телефону.",
      "words":[["stojący obok","стоящие рядом"],["pewnie","наверное"]]},
     {"who":"A","name":"Anna","side":"left","en":"Jedna pani odpowiedziała mi po polsku. Biorąc pod uwagę mój akcent, to sukces.","ru":"Одна женщина ответила мне по-польски. Учитывая мой акцент, это успех.",
      "words":[["odpowiedziała","ответила"],["Biorąc pod uwagę","принимая во внимание"]]},
     {"who":"M","name":"Marek","side":"right","en":"Podsumowując: jesteś gotowa na ten egzamin.","ru":"Подводя итог: ты готова к этому экзамену.",
      "words":[["Podsumowując","подводя итог"],["gotowa","готова"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zobaczymy. Na razie uczę się, pijąc czwartą kawę dzisiaj.","ru":"Посмотрим. Пока что я занимаюсь, попивая четвёртый кофе за сегодня.",
      "words":[["Zobaczymy","посмотрим"],["pijąc","попивая"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — утро в спешке. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Jesz śniadanie, stojąc przy oknie?","ru":"Ты завтракаешь стоя у окна?"},
     {"who":"B","en":"Nie mam czasu siedzieć. Autobus za pięć minut.","ru":"Нет времени сидеть. Автобус через пять минут."},
     {"who":"A","en":"Biegnąc, nigdy nic nie zdążysz.","ru":"На бегу ты никогда ничего не успеешь."},
     {"who":"B","en":"Mówiąc szczerze, zdążam prawie zawsze.","ru":"Честно говоря, я успеваю почти всегда."},
     {"who":"A","en":"Prawie. Zapomniałeś kluczy.","ru":"Почти. Ты забыл ключи."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — деепричастия и обороты, которые держат текст.",
   "items":[
     {"en":"czytając","ru":"читая","ex":"Czytając gazetę, piję kawę."},
     {"en":"idąc","ru":"идя, по дороге","ex":"Idąc do pracy, słucham podcastu."},
     {"en":"wracając","ru":"возвращаясь","ex":"Wracając do domu, spotkałem Marka."},
     {"en":"jedząc","ru":"во время еды","ex":"Jedząc kolację, oglądamy film."},
     {"en":"śpiąc","ru":"во сне","ex":"Śpiąc, nie słyszałam telefonu."},
     {"en":"ucząc się","ru":"занимаясь, учась","ex":"Ucząc się, słucham muzyki."},
     {"en":"będąc","ru":"будучи","ex":"Będąc dzieckiem, mieszkałam na wsi."},
     {"en":"mówiąc szczerze","ru":"честно говоря","ex":"Mówiąc szczerze, boję się."},
     {"en":"prawdę mówiąc","ru":"по правде говоря","ex":"Prawdę mówiąc, nie mam czasu."},
     {"en":"biorąc pod uwagę","ru":"принимая во внимание","ex":"Biorąc pod uwagę pogodę, zostajemy."},
     {"en":"podsumowując","ru":"подводя итог","ex":"Podsumowując, było warto."},
     {"en":"zrobiwszy","ru":"сделав, книжная форма","ex":"Zrobiwszy zakupy, wróciła do domu."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу.",
   "pairs":[["czytając","читая"],["mówiąc szczerze","честно говоря"],["biorąc pod uwagę","принимая во внимание"],["przyszedłszy","придя"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как выглядит день Анны за три недели до экзамена. Деепричастия здесь несут почти всю нагрузку.",
   "title":"Ucząc się do egzaminu",
   "sentences":["Ucząc się do egzaminu, Anna zmieniła cały swój dzień.","Rano, jedząc śniadanie, słucha polskiego radia.","Idąc na przystanek, powtarza w głowie czasowniki.","W autobusie czyta ogłoszenia, licząc formy na -ący.","W pracy nie ma czasu, więc uczy się wracając do domu.","Wieczorem pisze krótkie teksty, nie używając słownika.","Mówiąc szczerze, czasem ma dosyć.","Ale biorąc pod uwagę, ile już umie, nie chce przerywać.","Marek pomaga jej, zadając pytania przy kolacji.","Podsumowując: trzy tygodnie do egzaminu i coraz mniej strachu."],
   "translation":"Готовясь к экзамену, Анна изменила весь свой день. Утром, за завтраком, она слушает польское радио. Идя на остановку, повторяет в голове глаголы. В автобусе читает объявления, считая формы на -ący. На работе времени нет, поэтому она занимается по дороге домой. Вечером пишет короткие тексты, не пользуясь словарём. Честно говоря, иногда ей надоедает. Но, принимая во внимание, сколько она уже умеет, бросать не хочет. Марек помогает ей, задавая вопросы за ужином. Подводя итог: три недели до экзамена и всё меньше страха."
 },
 "quiz":{
   "intro":"Пять вопросов — и деепричастие в кармане.",
   "items":[
     {"q":"1. wracają → «возвращаясь» —","opts":["wracając","wracający","wracająco"],"answer":0,
      "explain":"Форма «они» минус -ą плюс -ąc: <b>wracając</b>."},
     {"q":"2. Какая фраза правильная?","opts":["Idąc do sklepu, padał deszcz","Idąc do sklepu, spotkałam sąsiadkę","Idąc do sklepu, zadzwonił telefon"],"answer":1,
      "explain":"Оба действия должны быть одного человека: шла я — встретила я."},
     {"q":"3. «Честно говоря» —","opts":["szczerze mówić","mówiąc szczerze","mówiący szczerze"],"answer":1,
      "explain":"Застывший оборот с деепричастием: <b>mówiąc szczerze</b>."},
     {"q":"4. <b>Przyszedłszy do domu, zasnął</b> значит —","opts":["Идя домой, он засыпал","Придя домой, он уснул","Он уснул перед тем, как прийти домой"],"answer":1,
      "explain":"Форма на -łszy передаёт предшествование: <b>придя</b>."},
     {"q":"5. Какая форма НЕ существует?","opts":["czytając","przeczytając","będąc"],"answer":1,
      "explain":"Деепричастие на -ąc делается только от несовершенного вида, поэтому <b>przeczytając</b> невозможно."}
   ]
 },
 "essay":{
   "intro":"Опиши своё утро так, как оно есть на самом деле, — с двумя делами сразу.",
   "prompt":"Напиши 4–5 предложений о своём обычном дне, используя минимум три деепричастия на -ąc и один вводный оборот: mówiąc szczerze, biorąc pod uwagę или podsumowując.",
   "hint":"Опора: Rano, jedząc śniadanie… · Idąc do pracy… · Wracając do domu… · Mówiąc szczerze… ✍️",
   "example":"Rano, jedząc śniadanie, słucham wiadomości po polsku. Idąc na przystanek, powtarzam nowe słowa. W pracy nie mam czasu, więc uczę się wracając do domu. Mówiąc szczerze, wieczorem jestem już zmęczona. Ale biorąc pod uwagę, ile rozumiem teraz, nie chcę przerywać."
 }
},
"24": {
 "day":24,"week":"04",
 "themeRu":"Домик и котик",
 "themeEn":"Zdrobnienia",
 "intro":"В польском кафе тебе скажут не <b>kawa</b>, а <b>kawusia</b> — и это не сюсюканье, а обычная вежливость. Уменьшительные здесь работают шире, чем в русском: они смягчают просьбу, укорачивают ожидание и превращают дом в домик. Сегодня — как их делать, где они уместны и где их лучше не показывать.",
 "introAudio":"В польском кафе тебе скажут не kawa, а kawusia — и это не сюсюканье, а обычная вежливость. Уменьшительные здесь работают шире, чем в русском: они смягчают просьбу, укорачивают ожидание и превращают дом в домик. Сегодня — как их делать, где они уместны и где их лучше не показывать.",
 "goals":[
   "Делать уменьшительные по родам: <b>dom → domek, kawa → kawka, okno → okienko</b>",
   "Пользоваться вежливыми формами: <b>Chwileczkę! Poproszę kawusię.</b>",
   "Обращаться ласково: <b>Anusiu, mamusiu, kotku</b>",
   "Чувствовать границу: где уменьшительное уместно, а где нет"
 ],
 "learned":[
   "Сделал(а) уменьшительные по родам: dom и domek, kawa и kawka, okno и okienko",
   "Воспользовался(лась) вежливыми формами: Chwileczkę, Poproszę kawusię",
   "Обратился(лась) ласково: Anusiu, mamusiu, kotku",
   "Почувствовал(а) границу: где уменьшительное уместно, а где нет"
 ],
 "review":{
   "intro":"Вчерашние деепричастия — на разминку. Форма, правило одного подлежащего и один книжный гость. Плюс вид глагола, который держит весь уровень.",
   "introAudio":"Вчерашние деепричастия — на разминку. Форма, правило одного подлежащего и один книжный гость. Плюс вид глагола, который держит весь уровень.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни хвост деепричастия.",
      "q":"jedzą → «во время еды» —","opts":["jedzący","jedząc","jedzono"],"answer":1,
      "explain":"Деепричастие — <b>jedząc</b>. Jedzący отвечает на «какой»."},
     {"type":"choice","howto":"<b>Что делать:</b> проверь, один ли человек делает оба действия.",
      "q":"Какая фраза правильная?","opts":["Czytając list, zadzwonił telefon","Czytając list, płakała","Czytając list, było zimno"],"answer":1,
      "explain":"Читала она и плакала тоже она — подлежащее одно."},
     {"type":"choice","howto":"<b>Что делать:</b> ищи маркер результата.",
      "q":"Wczoraj wieczorem ___ całą książkę. (дочитала)","opts":["czytałam","przeczytałam","będę czytać"],"answer":1,
      "explain":"Результат — совершенный вид: <b>przeczytałam</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Честно говоря, у меня нет времени»</b>","answer":"Mówiąc szczerze nie mam czasu"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Три суффикса",
    "title":"<em>-ek</em>, <em>-ka</em>, <em>-ko</em> — по родам",
    "paras":[
      "Каждый род берёт свой суффикс. Мужской — <b>-ek</b>: <b>dom → domek</b>, <b>kot → kotek</b>, <b>pies → piesek</b>, <b>chleb → chlebek</b>, <b>syn → synek</b>, <b>ogród → ogródek</b>. Женский — <b>-ka</b>: <b>kawa → kawka</b>, <b>herbata → herbatka</b>, <b>ryba → rybka</b>. Средний — <b>-ko</b>: <b>okno → okienko</b>, <b>krzesło → krzesełko</b>, <b>miasto → miasteczko</b>.",
      "Русская система лежит рядом: домик, котик, рыбка, окошко. И суффиксы узнаваемые: -ek похоже на «-ик» и «-ок», -ka на «-ка», -ko на «-ко». Здесь родство языков работает почти без поправок.",
      "После некоторых согласных <b>-ek</b> превращается в <b>-ik</b>: <b>stół → stolik</b>, <b>koń → konik</b>. Гадать не надо — эти слова встречаются часто и запоминаются сами.",
      "Род при этом не меняется, а склоняются уменьшительные как обычные существительные — только с беглым <b>e</b>: <b>domek → w domku</b>, <b>kotek → nie ma kotka</b>, <b>piesek → z pieskiem</b>."
    ],
    "audio":"Каждый род берёт свой суффикс. Мужской — -ek: dom и domek, kot и kotek, pies и piesek, chleb и chlebek, syn и synek, ogród и ogródek. Женский — -ka: kawa и kawka, herbata и herbatka, ryba и rybka. Средний — -ko: okno и okienko, krzesło и krzesełko, miasto и miasteczko. Русская система лежит рядом: домик, котик, рыбка, окошко. После некоторых согласных -ek превращается в -ik: stół и stolik, koń и konik. Род при этом не меняется, а склоняются уменьшительные как обычные существительные, только с беглым e: domek и w domku, kotek и nie ma kotka, piesek и z pieskiem.",
    "table":{"rows":[
      ["dom → <b>domek</b> <button class=\"play\" data-say=\"dom, domek\">🔊</button>","дом → домик"],
      ["kot → <b>kotek</b> <button class=\"play\" data-say=\"kot, kotek\">🔊</button>","кот → котик"],
      ["kawa → <b>kawka</b> <button class=\"play\" data-say=\"kawa, kawka\">🔊</button>","кофе → кофеёк"],
      ["okno → <b>okienko</b> <button class=\"play\" data-say=\"okno, okienko\">🔊</button>","окно → окошко"],
      ["stół → <b>stolik</b> <button class=\"play\" data-say=\"stół, stolik\">🔊</button>","стол → столик"],
      ["w <b>domku</b>, nie ma <b>kotka</b> <button class=\"play\" data-say=\"w domku, nie ma kotka\">🔊</button>","беглое e при склонении"]
    ],"star":0},
    "examples":[
      {"ru":"У нас маленький домик под Краковом.","en":"Mamy mały <b>domek</b> pod Krakowem.","say":"Mamy mały domek pod Krakowem."},
      {"ru":"В окошке горит свет.","en":"W <b>okienku</b> pali się światło.","say":"W okienku pali się światło."},
      {"ru":"Столик у окна, пожалуйста.","en":"Poproszę <b>stolik</b> przy oknie.","say":"Poproszę stolik przy oknie."},
      {"ru":"Купила хлебушек и сырок.","en":"Kupiłam <b>chlebek</b> i <b>serek</b>.","gloss":"в магазине это обычная речь","say":"Kupiłam chlebek i serek."}
    ],
    "mistakes":[
      {"wrong":"w domeku","right":"w <b>domku</b>","why":"при склонении е выпадает: domek, но w domku. Так же kotek и kotka."},
      {"wrong":"okienek","right":"<b>okienko</b>","why":"средний род берёт -ko: okno → okienko, krzesło → krzesełko."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на род слова.",
       "q":"okno → «окошко» —","opts":["okienek","okienko","okienka"],"answer":1,
       "explain":"Средний род берёт -ko: <b>okienko</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни про беглое e.",
       "q":"«Мы живём в домике» —","opts":["Mieszkamy w domeku","Mieszkamy w domku","Mieszkamy w domek"],"answer":1,
       "explain":"При склонении e выпадает: <b>w domku</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши одно слово.",
       "q":"kot → «котик»","accept":["kotek"],"placeholder":"kot…"}
    ],
    "mnemonic":"🏠 -ek мужской · -ka женский · -ko средний. domek, kawka, okienko — и род на месте."
   },
   {
    "eyebrow":"Правило 2 · Второй этаж нежности",
    "title":"<em>Chwileczka</em> и <em>Anusia</em>",
    "paras":[
      "Уменьшение можно повторить. От <b>chwila</b> получается <b>chwilka</b>, а от неё — <b>chwileczka</b>. От <b>kawa</b> — <b>kawka</b>, а дальше <b>kawusia</b>. От <b>książka</b> — <b>książeczka</b>, от <b>córka</b> — <b>córeczka</b>, от <b>kotek</b> — <b>koteczek</b>.",
      "Второй этаж почти всегда означает не «ещё меньше», а «ещё теплее». <b>Chwileczkę!</b> — не полсекунды, а «одну минуточку, я рядом».",
      "Отдельная семья — ласковые формы на <b>-uś</b> и <b>-usia</b>: <b>mama → mamusia</b>, <b>tata → tatuś</b>, <b>Ania → Anusia</b>. Ими зовут родных и близких, и они прекрасно ложатся в звательный падеж из A2: <b>Mamusiu! Tatusiu! Anusiu! Kotku!</b>",
      "Русское ухо тут почти всё узнаёт: минуточка, книжечка, доченька, мамуся. Разница лишь в частоте — поляки пользуются вторым этажом чаще."
    ],
    "audio":"Уменьшение можно повторить. От chwila получается chwilka, а от неё chwileczka. От kawa — kawka, а дальше kawusia. От książka — książeczka, от córka — córeczka, от kotek — koteczek. Второй этаж почти всегда означает не «ещё меньше», а «ещё теплее». Chwileczkę — не полсекунды, а «одну минуточку, я рядом». Отдельная семья — ласковые формы на -uś и -usia: mama и mamusia, tata и tatuś, Ania и Anusia. Ими зовут родных и близких, и они прекрасно ложатся в звательный падеж из A2: mamusiu, tatusiu, Anusiu, kotku. Русское ухо тут почти всё узнаёт: минуточка, книжечка, доченька, мамуся.",
    "table":{"rows":[
      ["chwila → chwilka → <b>chwileczka</b> <button class=\"play\" data-say=\"chwila, chwilka, chwileczka\">🔊</button>","минута → минутка → минуточка"],
      ["kawa → kawka → <b>kawusia</b> <button class=\"play\" data-say=\"kawa, kawka, kawusia\">🔊</button>","кофе с растущей теплотой"],
      ["książka → <b>książeczka</b> <button class=\"play\" data-say=\"książka, książeczka\">🔊</button>","книга → книжечка"],
      ["mama → <b>mamusia</b>, tata → <b>tatuś</b> <button class=\"play\" data-say=\"mamusia, tatuś\">🔊</button>","мамуля, папуля"],
      ["Ania → <b>Anusia</b> → <b>Anusiu!</b> <button class=\"play\" data-say=\"Ania, Anusia, Anusiu\">🔊</button>","ласковое имя и обращение"],
      ["<b>Chwileczkę!</b> <button class=\"play\" data-say=\"Chwileczkę!\">🔊</button>","Минуточку!"]
    ],"star":5},
    "examples":[
      {"ru":"Минуточку, сейчас проверю.","en":"<b>Chwileczkę</b>, zaraz sprawdzę.","say":"Chwileczkę, zaraz sprawdzę."},
      {"ru":"Анюта, иди сюда!","en":"<b>Anusiu</b>, chodź tutaj!","gloss":"звательный падеж из A2","say":"Anusiu, chodź tutaj!"},
      {"ru":"Мамуля, я уже дома.","en":"<b>Mamusiu</b>, już jestem w domu.","say":"Mamusiu, już jestem w domu."},
      {"ru":"Сделаю тебе чайку.","en":"Zrobię ci <b>herbatki</b>.","gloss":"родительный частичного количества","say":"Zrobię ci herbatki."}
    ],
    "mistakes":[
      {"wrong":"Anusia, chodź tutaj!","right":"<b>Anusiu</b>, chodź tutaj!","why":"при обращении — звательный падеж: Anusia → Anusiu, mamusia → mamusiu."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни звательный падеж.",
       "q":"Обращение к Анусе —","opts":["Anusia!","Anusiu!","Anusię!"],"answer":1,
       "explain":"Звательный: <b>Anusiu!</b> Так же mamusiu, tatusiu."},
      {"type":"choice","q":"<b>Chwileczkę!</b> значит —",
       "opts":["навсегда","минуточку","никогда"],"answer":1,
       "explain":"<b>Chwileczkę</b> — минуточку, подождите чуть-чуть."},
      {"type":"type","howto":"<b>Что делать:</b> напиши одно слово.",
       "q":"mama → ласковое «мамуля»","accept":["mamusia"],"placeholder":"mam…"}
    ],
    "mnemonic":"💛 Второй этаж — не про размер, а про тепло: chwileczka, kawusia, Anusiu."
   },
   {
    "eyebrow":"Правило 3 · Зачем это нужно",
    "title":"<em>Poproszę kawusię</em> — вежливость, а не сюсюканье",
    "paras":[
      "Главная работа польских уменьшительных — смягчать. В кафе <b>Poproszę kawusię</b> звучит теплее, чем <b>Poproszę kawę</b>, и никакого детского оттенка в этом нет. Так говорят взрослые люди взрослым людям.",
      "Тем же способом уменьшают просьбу и ожидание: <b>Mam do ciebie małą prośbę.</b> <b>Sekundkę!</b> <b>Jeszcze herbatki?</b> Уменьшительное как бы говорит: «я прошу немного, тебе будет несложно».",
      "И в гостях: <b>Może kawusi?</b> <b>Zostań na chwilkę.</b> <b>Weź jeszcze ciastko.</b> Гостеприимство по-польски почти всегда идёт в уменьшительных.",
      "Граница простая. В учреждении, в официальном письме и в разговоре с чиновником уменьшительных не бывает — там язык, наоборот, надувается до <b>uprzejmie proszę</b>. Послезавтра мы туда как раз и пойдём."
    ],
    "audio":"Главная работа польских уменьшительных — смягчать. В кафе poproszę kawusię звучит теплее, чем poproszę kawę, и никакого детского оттенка в этом нет. Тем же способом уменьшают просьбу и ожидание: mam do ciebie małą prośbę; sekundkę; jeszcze herbatki. Уменьшительное как бы говорит: я прошу немного, тебе будет несложно. И в гостях: może kawusi, zostań na chwilkę, weź jeszcze ciastko. Граница простая. В учреждении, в официальном письме и в разговоре с чиновником уменьшительных не бывает — там язык, наоборот, надувается до uprzejmie proszę.",
    "table":{"rows":[
      ["<b>Poproszę kawusię.</b> <button class=\"play\" data-say=\"Poproszę kawusię\">🔊</button>","Мне, пожалуйста, кофе. Тепло."],
      ["<b>Może kawusi?</b> <button class=\"play\" data-say=\"Może kawusi?\">🔊</button>","Может, кофейку?"],
      ["<b>Sekundkę!</b> <button class=\"play\" data-say=\"Sekundkę!\">🔊</button>","Секундочку!"],
      ["Mam do ciebie <b>małą prośbę</b>. <button class=\"play\" data-say=\"Mam do ciebie małą prośbę\">🔊</button>","У меня к тебе небольшая просьба."],
      ["Zostań na <b>chwilkę</b>. <button class=\"play\" data-say=\"Zostań na chwilkę\">🔊</button>","Останься на минутку."],
      ["Weź jeszcze <b>ciastko</b>. <button class=\"play\" data-say=\"Weź jeszcze ciastko\">🔊</button>","Возьми ещё пирожное."]
    ],"star":0},
    "examples":[
      {"ru":"Может, кофейку и что-нибудь сладкое?","en":"<b>Może kawusi</b> i coś słodkiego?","say":"Może kawusi i coś słodkiego?"},
      {"ru":"Секундочку, я сейчас вернусь.","en":"<b>Sekundkę</b>, zaraz wracam.","say":"Sekundkę, zaraz wracam."},
      {"ru":"У меня к тебе небольшая просьба.","en":"Mam do ciebie <b>małą prośbę</b>.","say":"Mam do ciebie małą prośbę."},
      {"ru":"Останься ещё на минутку.","en":"Zostań jeszcze na <b>chwilkę</b>.","say":"Zostań jeszcze na chwilkę."}
    ],
    "mistakes":[
      {"wrong":"Uprzejmie proszę o wydanie zaświadczeńka.","right":"Uprzejmie proszę o wydanie <b>zaświadczenia</b>.","why":"в официальном тексте уменьшительных нет — они звучат несерьёзно."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> подумай, кто и где это говорит.",
       "q":"<b>Poproszę kawusię</b> в кафе звучит —","opts":["по-детски и неуместно","тепло и совершенно нормально","грубо"],"answer":1,
       "explain":"Это обычная вежливость: уменьшительное смягчает просьбу."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни границу стилей.",
       "q":"Где уменьшительные НЕ используют?","opts":["в кафе","в официальном письме","в разговоре с подругой"],"answer":1,
       "explain":"Официальный язык уменьшительных не терпит — там <b>uprzejmie proszę</b>."},
      {"type":"speak","howto":"Нажми микрофон и закажи кофе так, как заказывают в Кракове.",
       "target":"Poproszę kawusię i coś słodkiego.","sub":"мне, пожалуйста, кофе и что-нибудь сладкое","want":"Poproszę kawusię i coś słodkiego."}
    ],
    "mnemonic":"☕ Уменьшительное — смягчитель. Кафе, дом, просьба — да. Urząd — нет."
   },
   {
    "eyebrow":"Правило 4 · Честные оговорки",
    "title":"Не всё маленькое, что кончается на <em>-ek</em>",
    "paras":[
      "Часть слов на -ek и -ka никогда не была уменьшительной: <b>człowiek</b>, <b>chłopiec</b>, <b>rzeka</b>, <b>matka</b>. Суффикс похож, а истории за ним нет — просто такое слово.",
      "Другая часть когда-то была уменьшительной, а теперь живёт отдельной жизнью и переводится по-своему: <b>stolik</b> — столик в кафе, <b>ciastko</b> — пирожное, <b>łyżeczka</b> — чайная ложка, <b>torebka</b> — сумочка или пакетик, <b>miasteczko</b> — городок.",
      "Забавный случай — <b>kawka</b>: кроме «кофейку» это ещё и птица галка. Контекст всё решает; в кафе это точно про кофе.",
      "И зеркальная сторона: у польского есть увеличительные на <b>-isko</b> — <b>dom → domisko</b>, <b>pies → psisko</b>. Звучат грубовато и слегка насмешливо, встречаются редко. Знать полезно, употреблять не обязательно."
    ],
    "audio":"Часть слов на -ek и -ka никогда не была уменьшительной: człowiek, chłopiec, rzeka, matka. Суффикс похож, а истории за ним нет. Другая часть когда-то была уменьшительной, а теперь живёт отдельной жизнью: stolik — столик в кафе, ciastko — пирожное, łyżeczka — чайная ложка, torebka — сумочка или пакетик, miasteczko — городок. Забавный случай — kawka: кроме «кофейку» это ещё и птица галка. Контекст всё решает. И зеркальная сторона: у польского есть увеличительные на -isko: dom и domisko, pies и psisko. Звучат грубовато и слегка насмешливо, встречаются редко.",
    "table":{"rows":[
      ["<b>człowiek</b>, <b>chłopiec</b> <button class=\"play\" data-say=\"człowiek, chłopiec\">🔊</button>","не уменьшительные, просто слова"],
      ["<b>ciastko</b> <button class=\"play\" data-say=\"ciastko\">🔊</button>","пирожное"],
      ["<b>łyżeczka</b> <button class=\"play\" data-say=\"łyżeczka\">🔊</button>","чайная ложка"],
      ["<b>torebka</b> <button class=\"play\" data-say=\"torebka\">🔊</button>","сумочка, пакетик"],
      ["<b>miasteczko</b> <button class=\"play\" data-say=\"miasteczko\">🔊</button>","городок"],
      ["dom → <b>domisko</b> <button class=\"play\" data-say=\"dom, domisko\">🔊</button>","домина, увеличительное"]
    ],"star":-1},
    "examples":[
      {"ru":"Возьми ещё пирожное к чаю.","en":"Weź jeszcze <b>ciastko</b> do herbaty.","say":"Weź jeszcze ciastko do herbaty."},
      {"ru":"Насыпь сахар чайной ложкой.","en":"Nasyp cukier <b>łyżeczką</b>.","say":"Nasyp cukier łyżeczką."},
      {"ru":"Они живут в маленьком городке под Люблином.","en":"Mieszkają w małym <b>miasteczku</b> pod Lublinem.","say":"Mieszkają w małym miasteczku pod Lublinem."},
      {"ru":"Я забыла сумочку в кафе.","en":"Zostawiłam <b>torebkę</b> w kawiarni.","say":"Zostawiłam torebkę w kawiarni."}
    ],
    "mistakes":[
      {"wrong":"Poproszę małe ciasto.","right":"Poproszę <b>ciastko</b>.","why":"пирожное — это отдельное слово ciastko, а не «маленькое ciasto»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> подумай, что подают к кофе.",
       "q":"<b>ciastko</b> — это —","opts":["маленький кусок теста","пирожное","чайная ложка"],"answer":1,
       "explain":"<b>Ciastko</b> давно стало отдельным словом: пирожное, печенье."},
      {"type":"choice","q":"Какое слово НЕ уменьшительное?",
       "opts":["domek","kotek","człowiek"],"answer":2,
       "explain":"<b>Człowiek</b> просто кончается на -ek — уменьшительным он никогда не был."},
      {"type":"type","howto":"<b>Что делать:</b> напиши одно слово.",
       "q":"«чайная ложка»","accept":["łyżeczka","lyzeczka","łyzeczka"],"placeholder":"łyż…"}
    ],
    "mnemonic":"🥄 stolik, ciastko, łyżeczka, torebka — уже самостоятельные слова. Форма уменьшительная, смысл свой."
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек зашли в кафе после занятий. Посчитай уменьшительные — их тут больше, чем кажется.",
   "lines":[
     {"who":"K","name":"Kelnerka","side":"left","en":"Dzień dobry. Stolik przy oknie jest wolny.","ru":"Добрый день. Столик у окна свободен.",
      "words":[["stolik","столик"],["wolny","свободный"]]},
     {"who":"A","name":"Anna","side":"right","en":"Świetnie. Poproszę kawusię i szklankę wody.","ru":"Отлично. Мне, пожалуйста, кофе и стакан воды.",
      "words":[["kawusię","кофе, тепло"],["szklankę wody","стакан воды"]]},
     {"who":"K","name":"Kelnerka","side":"left","en":"A do tego może ciastko? Mamy świeży makowiec.","ru":"А к нему, может, пирожное? У нас свежий маковый рулет.",
      "words":[["ciastko","пирожное"],["świeży","свежий"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dla mnie herbatka z cytryną. I chwileczkę na decyzję.","ru":"Мне чай с лимоном. И минуточку на решение.",
      "words":[["herbatka","чай"],["chwileczkę","минуточку"]]},
     {"who":"K","name":"Kelnerka","side":"left","en":"Oczywiście. Sekundkę, przyniosę kartę.","ru":"Конечно. Секундочку, принесу меню.",
      "words":[["Sekundkę","секундочку"],["kartę","меню"]]},
     {"who":"A","name":"Anna","side":"right","en":"Zauważyłeś? Ona mówi samymi zdrobnieniami.","ru":"Заметил? Она говорит одними уменьшительными.",
      "words":[["Zauważyłeś?","заметил?"],["zdrobnieniami","уменьшительными"]]},
     {"who":"M","name":"Marek","side":"right","en":"Bo to grzecznie. W urzędzie usłyszysz zupełnie inny język.","ru":"Потому что это вежливо. В учреждении услышишь совсем другой язык.",
      "words":[["grzecznie","вежливо"],["zupełnie inny","совсем другой"]]},
     {"who":"A","name":"Anna","side":"right","en":"Wiem. W czwartek idę tam z wnioskiem. Bez kawusi.","ru":"Знаю. В четверг иду туда с заявлением. Без кофейка.",
      "words":[["z wnioskiem","с заявлением"],["Bez kawusi","без кофейка"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — гость на пороге. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Wejdź, wejdź. Zrobię ci herbatki.","ru":"Заходи, заходи. Сделаю тебе чайку."},
     {"who":"B","en":"Tylko na chwilkę, mam autobus.","ru":"Только на минутку, у меня автобус."},
     {"who":"A","en":"Chwileczka to u mnie zawsze godzina.","ru":"Минуточка у меня всегда час."},
     {"who":"B","en":"Wiem. Dlatego wezmę też ciastko.","ru":"Знаю. Поэтому возьму ещё и пирожное."},
     {"who":"A","en":"Siadaj przy oknie. Tam najlepszy stolik.","ru":"Садись у окна. Там лучший столик."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — двенадцать уменьшительных, которые слышишь каждый день.",
   "items":[
     {"en":"domek","ru":"домик","ex":"Mamy domek pod Krakowem."},
     {"en":"kotek / piesek","ru":"котик / собачка","ex":"Kotek śpi na krześle."},
     {"en":"kawka / kawusia","ru":"кофеёк","ex":"Może kawusi?"},
     {"en":"herbatka","ru":"чаёк","ex":"Zrobię ci herbatki."},
     {"en":"chwileczka","ru":"минуточка","ex":"Chwileczkę, zaraz sprawdzę."},
     {"en":"sekundka","ru":"секундочка","ex":"Sekundkę, już idę."},
     {"en":"stolik","ru":"столик","ex":"Poproszę stolik przy oknie."},
     {"en":"okienko","ru":"окошко","ex":"W okienku pali się światło."},
     {"en":"ciastko","ru":"пирожное","ex":"Weź jeszcze ciastko."},
     {"en":"łyżeczka","ru":"чайная ложка","ex":"Nasyp cukier łyżeczką."},
     {"en":"Anusia, mamusia, tatuś","ru":"Анюта, мамуля, папуля","ex":"Anusiu, chodź tutaj!"},
     {"en":"zdrobnienie","ru":"уменьшительная форма","ex":"To zdrobnienie od słowa dom."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его переводу.",
   "pairs":[["domek","домик"],["chwileczka","минуточка"],["okienko","окошко"],["ciastko","пирожное"]]
 },
 "reading":{
   "intro":"Прочитай и послушай короткий текст о кафе на углу. Отметь для себя каждое уменьшительное.",
   "title":"Kawusia na rogu",
   "sentences":["Na rogu ulicy stoi mała kawiarnia z trzema stolikami.","Anna siada zawsze przy oknie, na tym samym miejscu.","Kelnerka pyta: może kawusi i ciastko?","Anna prosi o kawę z mlekiem i łyżeczkę cukru.","Za oknem widać domki z czerwonymi dachami.","Na parapecie śpi rudy kotek.","Chwileczkę, mówi kelnerka i znika za drzwiami.","Wraca z filiżanką i małym makowcem na talerzyku.","W tym miejscu wszystko jest o jeden rozmiar mniejsze i o jeden ton cieplejsze.","Anna wyjmuje książeczkę z czasownikami i uczy się dalej."],
   "translation":"На углу улицы стоит маленькая кофейня с тремя столиками. Анна всегда садится у окна, на одно и то же место. Официантка спрашивает: может, кофейку и пирожное? Анна просит кофе с молоком и чайную ложку сахара. За окном видны домики с красными крышами. На подоконнике спит рыжий котик. «Минуточку», — говорит официантка и исчезает за дверью. Возвращается с чашкой и маленьким маковым рулетом на блюдце. В этом месте всё на один размер меньше и на один тон теплее. Анна достаёт книжечку с глаголами и занимается дальше."
 },
 "quiz":{
   "intro":"Пять вопросов — и уменьшительные больше не загадка.",
   "items":[
     {"q":"1. okno → «окошко» —","opts":["okienek","okienko","okienka"],"answer":1,
      "explain":"Средний род берёт -ko: <b>okienko</b>."},
     {"q":"2. «Мы живём в домике» —","opts":["Mieszkamy w domeku","Mieszkamy w domku","Mieszkamy w domek"],"answer":1,
      "explain":"Беглое e выпадает при склонении: <b>w domku</b>."},
     {"q":"3. Обращение к Анусе —","opts":["Anusia!","Anusiu!","Anusię!"],"answer":1,
      "explain":"Звательный падеж: <b>Anusiu!</b>"},
     {"q":"4. <b>Chwileczkę!</b> значит —","opts":["навсегда","минуточку","никогда"],"answer":1,
      "explain":"Это вежливая просьба подождать: <b>минуточку</b>."},
     {"q":"5. Где уменьшительные неуместны?","opts":["в кафе","в официальном письме","дома с родными"],"answer":1,
      "explain":"Официальный стиль их не терпит: там <b>uprzejmie proszę</b>, а не ласковые формы."}
   ]
 },
 "essay":{
   "intro":"Опиши место, где тебе тепло, — своими словами и с уменьшительными.",
   "prompt":"Напиши 4–5 предложений о любимом кафе или о доме: что там стоит, что ты обычно заказываешь, кто рядом. Используй минимум четыре уменьшительных.",
   "hint":"Опора: mały stolik · kawusia, herbatka · ciastko · okienko · kotek · Chwileczkę! ☕",
   "example":"Moja ulubiona kawiarnia jest mała, ma tylko cztery stoliki. Siadam zawsze przy oknie i proszę o kawusię z mlekiem. Do tego biorę ciastko, najczęściej makowiec. Za okienkiem widać domki i stary kościół. Na parapecie śpi kotek, który nikogo się nie boi."
 }
},
"25": {
 "day":25,"week":"04",
 "themeRu":"Чувства и характер",
 "themeEn":"Uczucia i charakter",
 "intro":"Экзамен через три недели — и Анна впервые говорит вслух, что боится. Сегодня о чувствах: чего боятся, о ком волнуются, чему радуются и в кого влюбляются. Половина конструкций совпадёт с русскими до падежа, а три не совпадут — вот их мы и запомним отдельно.",
 "introAudio":"Экзамен через три недели — и Анна впервые говорит вслух, что боится. Сегодня о чувствах: чего боятся, о ком волнуются, чему радуются и в кого влюбляются. Половина конструкций совпадёт с русскими до падежа, а три не совпадут — вот их мы и запомним отдельно.",
 "goals":[
   "Радоваться правильно: <b>cieszyć się z czegoś</b> и <b>cieszyć się na coś</b>",
   "Говорить о страхе и тревоге: <b>bać się</b> + род., <b>martwić się o</b> + вин.",
   "Признаваться в чувствах: <b>zakochać się w kimś</b>, <b>tęsknić za kimś</b>",
   "Описать характер: <b>uparty, szczery, odważny, leniwy</b>"
 ],
 "learned":[
   "Порадовался(лась) правильно: cieszyć się z czegoś и cieszyć się na coś",
   "Сказал(а) о страхе и тревоге: bać się плюс родительный, martwić się o плюс винительный",
   "Признался(лась) в чувствах: zakochać się w kimś, tęsknić za kimś",
   "Описал(а) характер: uparty, szczery, odważny, leniwy"
 ],
 "review":{
   "intro":"Вчерашние уменьшительные — на разминку: суффиксы, беглое e и граница стилей. Плюс одно żeby, чтобы форма после союза не забывалась.",
   "introAudio":"Вчерашние уменьшительные — на разминку: суффиксы, беглое e и граница стилей. Плюс одно żeby, чтобы форма после союза не забывалась.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на род слова.",
      "q":"krzesło → «стульчик» —","opts":["krzesełko","krzesełek","krzesełka"],"answer":0,
      "explain":"Средний род берёт -ko: <b>krzesełko</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни беглое e.",
      "q":"«У меня нет котика» —","opts":["Nie mam koteka","Nie mam kotka","Nie mam kotek"],"answer":1,
      "explain":"При склонении e выпадает: kotek → <b>kotka</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> следи за формой после союза.",
      "q":"«Она попросила, чтобы я пришла» —","opts":["Poprosiła, żebym przyszła","Poprosiła, żebym przyjdę","Poprosiła, że przyjdę"],"answer":0,
      "explain":"После żeby — л-форма: <b>żebym przyszła</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мне, пожалуйста, столик у окна»</b>","answer":"Poproszę stolik przy oknie"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Радость",
    "title":"<em>Cieszyć się z</em> и <em>cieszyć się na</em>",
    "paras":[
      "Радость по-польски смотрит либо назад, либо вперёд, и от этого зависит предлог. О том, что уже случилось, — <b>cieszyć się z czegoś</b> плюс родительный: <b>Cieszę się z twojego sukcesu.</b> <b>Cieszę się z prezentu.</b>",
      "О том, что ещё впереди, — <b>cieszyć się na coś</b> плюс винительный: <b>Cieszę się na wakacje.</b> <b>Cieszę się na spotkanie z tobą.</b> Русское «предвкушаю» здесь ближе всего по смыслу.",
      "И самая частая форма — с придаточным: <b>Cieszę się, że przyjechałaś.</b> <b>Cieszę się, że mogę pomóc.</b> Тут никаких предлогов, и она выручает всегда, когда сомневаешься.",
      "Ловушка для русского уха: мы радуемся <em>чему</em> — дательный. Польский требует либо <b>z</b> плюс родительный, либо <b>na</b> плюс винительный. Форма без предлога здесь не работает."
    ],
    "audio":"Радость по-польски смотрит либо назад, либо вперёд, и от этого зависит предлог. О том, что уже случилось, — cieszyć się z czegoś плюс родительный: cieszę się z twojego sukcesu, cieszę się z prezentu. О том, что ещё впереди, — cieszyć się na coś плюс винительный: cieszę się na wakacje, cieszę się na spotkanie z tobą. И самая частая форма — с придаточным: cieszę się, że przyjechałaś; cieszę się, że mogę pomóc. Тут никаких предлогов, и она выручает всегда, когда сомневаешься. Ловушка для русского уха: мы радуемся чему, дательный. Польский требует либо z плюс родительный, либо na плюс винительный.",
    "table":{"rows":[
      ["Cieszę się <b>z twojego sukcesu</b>. <button class=\"play\" data-say=\"Cieszę się z twojego sukcesu\">🔊</button>","Радуюсь твоему успеху. Уже случилось."],
      ["Cieszę się <b>z prezentu</b>. <button class=\"play\" data-say=\"Cieszę się z prezentu\">🔊</button>","Радуюсь подарку."],
      ["Cieszę się <b>na wakacje</b>. <button class=\"play\" data-say=\"Cieszę się na wakacje\">🔊</button>","Жду не дождусь каникул. Впереди."],
      ["Cieszę się <b>na spotkanie</b>. <button class=\"play\" data-say=\"Cieszę się na spotkanie\">🔊</button>","Жду встречи."],
      ["Cieszę się, <b>że</b> przyjechałaś. <button class=\"play\" data-say=\"Cieszę się, że przyjechałaś\">🔊</button>","Рада, что ты приехала."]
    ],"star":2},
    "examples":[
      {"ru":"Я очень рад твоему письму.","en":"Bardzo się cieszę <b>z twojego listu</b>.","say":"Bardzo się cieszę z twojego listu."},
      {"ru":"Мы уже предвкушаем поездку.","en":"Już się cieszymy <b>na wyjazd</b>.","gloss":"впереди — na плюс винительный","say":"Już się cieszymy na wyjazd."},
      {"ru":"Рада, что ты позвонил.","en":"Cieszę się, <b>że</b> zadzwoniłeś.","say":"Cieszę się, że zadzwoniłeś."},
      {"ru":"Марек радуется новой квартире.","en":"Marek cieszy się <b>z nowego mieszkania</b>.","say":"Marek cieszy się z nowego mieszkania."}
    ],
    "mistakes":[
      {"wrong":"Cieszę się twojemu sukcesowi.","right":"Cieszę się <b>z twojego sukcesu</b>.","why":"дательный, как в русском «радуюсь успеху», здесь не годится: нужен z плюс родительный."},
      {"wrong":"Cieszę się na twój sukces.","right":"Cieszę się <b>z twojego sukcesu</b>.","why":"успех уже состоялся — значит z. Na смотрит только вперёд."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, событие позади или впереди.",
       "q":"«Я рада твоему подарку» —","opts":["Cieszę się twojemu prezentowi","Cieszę się z twojego prezentu","Cieszę się na twój prezent"],"answer":1,
       "explain":"Подарок уже получен: <b>z twojego prezentu</b>, родительный."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри на время события.",
       "q":"«Жду не дождусь отпуска» —","opts":["Cieszę się z urlopu","Cieszę się na urlop","Cieszę się urlopowi"],"answer":1,
       "explain":"Отпуск впереди: <b>na urlop</b>, винительный."},
      {"type":"type","howto":"<b>Что делать:</b> напиши фразу с придаточным.",
       "q":"«Я рада, что ты приехал»","accept":["cieszę się, że przyjechałeś","ciesze sie ze przyjechales","cieszę się że przyjechałeś"],"placeholder":"Cieszę się, że …"}
    ],
    "mnemonic":"🎁 z + родительный — уже случилось. na + винительный — ещё впереди. że — всегда выручает."
   },
   {
    "eyebrow":"Правило 2 · Страх и тревога",
    "title":"<em>Bać się</em> + род. и <em>martwić się o</em> + вин.",
    "paras":[
      "Здесь тебя ждёт подарок. <b>Bać się</b> требует родительного — ровно как русское «бояться»: <b>Boję się egzaminu.</b> <b>Boję się psów.</b> <b>Boję się ciemności.</b> Падеж совпадает полностью, думать не надо.",
      "Рядом две удобные рамки: <b>Boję się, że nie zdam.</b> (боюсь, что не сдам) и <b>Boję się latać.</b> (боюсь летать, с инфинитивом). И ободряющее <b>Nie bój się!</b>",
      "А вот <b>martwić się</b> — «беспокоиться, волноваться» — ставит <b>o</b> плюс винительный: <b>Martwię się o ciebie.</b> <b>Martwię się o mamę.</b> Русское «беспокоюсь о тебе» идёт с предложным, польское — с винительным. Это расхождение стоит запомнить один раз.",
      "Ещё два соседа по теме: <b>denerwować się</b> — нервничать (<b>Denerwuję się przed egzaminem.</b>) и <b>złościć się na kogoś</b> — злиться на кого-то, с винительным, как в русском: <b>Złoszczę się na siebie.</b>"
    ],
    "audio":"Здесь тебя ждёт подарок. Bać się требует родительного, ровно как русское «бояться»: boję się egzaminu, boję się psów, boję się ciemności. Падеж совпадает полностью. Рядом две удобные рамки: boję się, że nie zdam, и boję się latać, с инфинитивом. И ободряющее nie bój się. А вот martwić się, беспокоиться, ставит o плюс винительный: martwię się o ciebie, martwię się o mamę. Русское «беспокоюсь о тебе» идёт с предложным, польское с винительным. Ещё два соседа по теме: denerwować się, нервничать — denerwuję się przed egzaminem; и złościć się na kogoś, злиться на кого-то, с винительным: złoszczę się na siebie.",
    "table":{"rows":[
      ["Boję się <b>egzaminu</b>. <button class=\"play\" data-say=\"Boję się egzaminu\">🔊</button>","Боюсь экзамена. Родительный, как в русском."],
      ["Boję się, <b>że</b> nie zdam. <button class=\"play\" data-say=\"Boję się, że nie zdam\">🔊</button>","Боюсь, что не сдам."],
      ["<b>Nie bój się!</b> <button class=\"play\" data-say=\"Nie bój się!\">🔊</button>","Не бойся!"],
      ["Martwię się <b>o ciebie</b>. <button class=\"play\" data-say=\"Martwię się o ciebie\">🔊</button>","Волнуюсь за тебя. o плюс винительный."],
      ["<b>Denerwuję się</b> przed egzaminem. <button class=\"play\" data-say=\"Denerwuję się przed egzaminem\">🔊</button>","Нервничаю перед экзаменом."],
      ["Złoszczę się <b>na siebie</b>. <button class=\"play\" data-say=\"Złoszczę się na siebie\">🔊</button>","Злюсь на себя."]
    ],"star":3},
    "examples":[
      {"ru":"Я боюсь собак с детства.","en":"<b>Boję się psów</b> od dziecka.","say":"Boję się psów od dziecka."},
      {"ru":"Не бойся, ты справишься.","en":"<b>Nie bój się</b>, dasz radę.","say":"Nie bój się, dasz radę."},
      {"ru":"Мама волнуется за меня.","en":"Mama <b>martwi się o mnie</b>.","gloss":"o плюс винительный","say":"Mama martwi się o mnie."},
      {"ru":"Я нервничаю перед каждым разговором.","en":"<b>Denerwuję się</b> przed każdą rozmową.","say":"Denerwuję się przed każdą rozmową."}
    ],
    "mistakes":[
      {"wrong":"Martwię się o tobie.","right":"Martwię się <b>o ciebie</b>.","why":"после martwić się идёт винительный, а не предложный: o ciebie, o mamę, o pracę."},
      {"wrong":"Boję się egzamin.","right":"Boję się <b>egzaminu</b>.","why":"bać się требует родительного — здесь польский и русский совпадают."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после bać się.",
       "q":"«Я боюсь экзамена» —","opts":["Boję się egzamin","Boję się egzaminu","Boję się o egzamin"],"answer":1,
       "explain":"Родительный, как в русском: <b>egzaminu</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> тут русское чутьё подводит.",
       "q":"«Я волнуюсь за тебя» —","opts":["Martwię się o tobie","Martwię się o ciebie","Martwię się tobą"],"answer":1,
       "explain":"После martwić się — o плюс винительный: <b>o ciebie</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Я боюсь, что не сдам экзамен»</b>","answer":"Boję się że nie zdam egzaminu"}
    ],
    "mnemonic":"😰 bać się + родительный — как в русском. martwić się O + винительный — не как в русском."
   },
   {
    "eyebrow":"Правило 3 · Тёплая сторона",
    "title":"<em>Zakochać się w</em>, <em>tęsknić za</em>, <em>interesować się</em>",
    "paras":[
      "Влюбляются по-польски <b>в ком-то</b>, но с предложным падежом: <b>zakochać się w kimś</b>. <b>Zakochałam się w nim.</b> <b>Zakochał się w Annie.</b> Русское «влюбиться в кого» ставит винительный — вот и главное расхождение дня.",
      "Состояние — <b>być zakochanym</b> или <b>być zakochaną</b> плюс <b>w</b>: <b>Jestem zakochana w tym mieście.</b> Так говорят и о городе, и о книге, и о человеке.",
      "Скучают <b>za</b> плюс творительный: <b>Tęsknię za domem.</b> <b>Tęsknię za tobą.</b> Русское «скучаю по дому» идёт с дательным, польское — со своим предлогом и творительным.",
      "И знакомая по дню 22 рекция: <b>interesować się</b> плюс творительный (<b>Interesuję się historią</b>), <b>zajmować się</b> плюс творительный (<b>Zajmuję się dziećmi</b>). Одна и та же логика: рядом с чувством всегда стоит свой падеж, и его учат вместе с глаголом."
    ],
    "audio":"Влюбляются по-польски в ком-то, но с предложным падежом: zakochać się w kimś. Zakochałam się w nim. Zakochał się w Annie. Русское «влюбиться в кого» ставит винительный — вот и главное расхождение дня. Состояние — być zakochanym или być zakochaną плюс w: jestem zakochana w tym mieście. Скучают za плюс творительный: tęsknię za domem, tęsknię za tobą. Русское «скучаю по дому» идёт с дательным, польское со своим предлогом и творительным. И знакомая по дню двадцать два рекция: interesować się плюс творительный, interesuję się historią; zajmować się плюс творительный, zajmuję się dziećmi. Рядом с чувством всегда стоит свой падеж, и его учат вместе с глаголом.",
    "table":{"rows":[
      ["Zakochałam się <b>w nim</b>. <button class=\"play\" data-say=\"Zakochałam się w nim\">🔊</button>","Я влюбилась в него. Предложный!"],
      ["Zakochał się <b>w Annie</b>. <button class=\"play\" data-say=\"Zakochał się w Annie\">🔊</button>","Он влюбился в Анну."],
      ["Jestem <b>zakochana w</b> tym mieście. <button class=\"play\" data-say=\"Jestem zakochana w tym mieście\">🔊</button>","Я влюблена в этот город."],
      ["Tęsknię <b>za domem</b>. <button class=\"play\" data-say=\"Tęsknię za domem\">🔊</button>","Я скучаю по дому. Творительный."],
      ["Interesuję się <b>historią</b>. <button class=\"play\" data-say=\"Interesuję się historią\">🔊</button>","Я интересуюсь историей."],
      ["Zajmuję się <b>dziećmi</b>. <button class=\"play\" data-say=\"Zajmuję się dziećmi\">🔊</button>","Я занимаюсь детьми."]
    ],"star":0},
    "examples":[
      {"ru":"Она влюбилась в него ещё в Италии.","en":"<b>Zakochała się w nim</b> jeszcze we Włoszech.","say":"Zakochała się w nim jeszcze we Włoszech."},
      {"ru":"Я скучаю по тебе больше, чем думала.","en":"<b>Tęsknię za tobą</b> bardziej, niż myślałam.","say":"Tęsknię za tobą bardziej, niż myślałam."},
      {"ru":"Мой брат интересуется музыкой.","en":"Mój brat <b>interesuje się muzyką</b>.","say":"Mój brat interesuje się muzyką."},
      {"ru":"Мы оба влюблены в этот город.","en":"Oboje jesteśmy <b>zakochani w</b> tym mieście.","gloss":"oboje — из дня 10","say":"Oboje jesteśmy zakochani w tym mieście."}
    ],
    "mistakes":[
      {"wrong":"Zakochałam się w niego.","right":"Zakochałam się <b>w nim</b>.","why":"после zakochać się w идёт предложный падеж, а не винительный, как в русском."},
      {"wrong":"Tęsknię domowi.","right":"Tęsknię <b>za domem</b>.","why":"тоска по чему-то передаётся через za плюс творительный."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> тут русский падеж не подходит.",
       "q":"«Я влюбилась в него» —","opts":["Zakochałam się w niego","Zakochałam się w nim","Zakochałam się go"],"answer":1,
       "explain":"После w — предложный: <b>w nim</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни предлог тоски.",
       "q":"«Я скучаю по дому» —","opts":["Tęsknię domowi","Tęsknię za domem","Tęsknię o domu"],"answer":1,
       "explain":"<b>Tęsknić za</b> плюс творительный: za domem."},
      {"type":"speak","howto":"Нажми микрофон и скажи это вслух.",
       "target":"Tęsknię za domem i za starymi przyjaciółmi.","sub":"я скучаю по дому и по старым друзьям","want":"Tęsknię za domem i za starymi przyjaciółmi."}
    ],
    "mnemonic":"💗 zakochać się W kimś — предложный · tęsknić ZA kimś — творительный · interesować się czymś — творительный."
   },
   {
    "eyebrow":"Правило 4 · Характер",
    "title":"<em>Jaki on jest?</em> — <em>Uparty, ale szczery</em>",
    "paras":[
      "Спрашивают о характере просто: <b>Jaki on jest?</b> <b>Jaka ona jest?</b> И отвечают прилагательными: <b>uparty</b> (упрямый), <b>szczery</b> (искренний), <b>odważny</b> (смелый), <b>leniwy</b> (ленивый), <b>miły</b> (милый, приятный), <b>otwarty</b> (открытый).",
      "Ещё пригодятся: <b>spokojny</b> (спокойный), <b>wesoły</b> (весёлый), <b>nieśmiały</b> (застенчивый), <b>pracowity</b> (трудолюбивый), <b>cierpliwy</b> (терпеливый), <b>zazdrosny</b> (ревнивый).",
      "Ложный друг дня: <b>szczery</b> — это «искренний», а вовсе не «щедрый». Щедрый по-польски <b>hojny</b>. Слова похожи на слух, а смысл разный — типичная славянская ловушка.",
      "Готовые рамки для оценки: <b>Ma dobry charakter.</b> <b>Można na nim polegać.</b> (на него можно положиться) <b>Jest bardzo uparty, ale w dobrym sensie.</b> Двумя фразами человек описан."
    ],
    "audio":"Спрашивают о характере просто: jaki on jest, jaka ona jest. И отвечают прилагательными: uparty — упрямый, szczery — искренний, odważny — смелый, leniwy — ленивый, miły — милый, otwarty — открытый. Ещё пригодятся: spokojny, wesoły, nieśmiały — застенчивый, pracowity — трудолюбивый, cierpliwy — терпеливый, zazdrosny — ревнивый. Ложный друг дня: szczery — это искренний, а вовсе не щедрый. Щедрый по-польски hojny. Готовые рамки для оценки: ma dobry charakter; można na nim polegać, на него можно положиться; jest bardzo uparty, ale w dobrym sensie.",
    "table":{"rows":[
      ["<b>uparty</b> <button class=\"play\" data-say=\"uparty\">🔊</button>","упрямый"],
      ["<b>szczery</b> <button class=\"play\" data-say=\"szczery\">🔊</button>","искренний, а не щедрый!"],
      ["<b>odważny</b> <button class=\"play\" data-say=\"odważny\">🔊</button>","смелый"],
      ["<b>leniwy</b> <button class=\"play\" data-say=\"leniwy\">🔊</button>","ленивый"],
      ["<b>nieśmiały</b> <button class=\"play\" data-say=\"nieśmiały\">🔊</button>","застенчивый"],
      ["Można <b>na nim polegać</b>. <button class=\"play\" data-say=\"Można na nim polegać\">🔊</button>","На него можно положиться."]
    ],"star":1},
    "examples":[
      {"ru":"Он упрямый, но искренний.","en":"Jest <b>uparty</b>, ale <b>szczery</b>.","say":"Jest uparty, ale szczery."},
      {"ru":"Она смелее, чем думает.","en":"Jest <b>odważniejsza</b>, niż myśli.","gloss":"сравнение из A2","say":"Jest odważniejsza, niż myśli."},
      {"ru":"Мой сосед очень щедрый человек.","en":"Mój sąsiad to bardzo <b>hojny</b> człowiek.","gloss":"щедрый — hojny, не szczery","say":"Mój sąsiad to bardzo hojny człowiek."},
      {"ru":"У неё хороший характер: спокойная и терпеливая.","en":"Ma dobry <b>charakter</b>: jest spokojna i cierpliwa.","say":"Ma dobry charakter: jest spokojna i cierpliwa."}
    ],
    "mistakes":[
      {"wrong":"Jest bardzo szczery — zawsze płaci za wszystkich.","right":"Jest bardzo <b>hojny</b> — zawsze płaci za wszystkich.","why":"szczery значит «искренний». Щедрый — hojny."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни ложного друга.",
       "q":"<b>szczery</b> значит —","opts":["щедрый","искренний","серьёзный"],"answer":1,
       "explain":"<b>Szczery</b> — искренний. Щедрый — hojny."},
      {"type":"choice","q":"«Она очень упрямая» —",
       "opts":["Jest bardzo uparta","Jest bardzo leniwa","Jest bardzo nieśmiała"],"answer":0,
       "explain":"Упрямая — <b>uparta</b>. Leniwa — ленивая, nieśmiała — застенчивая."},
      {"type":"type","howto":"<b>Что делать:</b> напиши вопрос о характере.",
       "q":"«Какой он?» (о характере)","accept":["jaki on jest","jaki on jest?"],"placeholder":"Jaki …"}
    ],
    "mnemonic":"🧭 uparty · szczery · odważny · leniwy · miły · otwarty. Шесть слов — и человек описан."
   }
 ],
 "dialogue":{
   "intro":"Вечер за три недели до экзамена. Анна впервые говорит вслух то, о чём думала месяц.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Siedzisz nad tym od godziny i nic nie mówisz.","ru":"Ты сидишь над этим час и ничего не говоришь.",
      "words":[["od godziny","уже час"],["nic nie mówisz","ничего не говоришь"]]},
     {"who":"A","name":"Anna","side":"left","en":"Mówiąc szczerze, boję się tego egzaminu.","ru":"Честно говоря, я боюсь этого экзамена.",
      "words":[["boję się","боюсь"],["tego egzaminu","этого экзамена"]]},
     {"who":"M","name":"Marek","side":"right","en":"Czego dokładnie? Części ustnej?","ru":"Чего именно? Устной части?",
      "words":[["Czego dokładnie?","чего именно?"],["części ustnej","устной части"]]},
     {"who":"A","name":"Anna","side":"left","en":"Tego, że zapomnę wszystkiego, kiedy ktoś na mnie patrzy.","ru":"Того, что забуду всё, когда на меня кто-то смотрит.",
      "words":[["zapomnę","забуду"],["kiedy ktoś patrzy","когда кто-то смотрит"]]},
     {"who":"M","name":"Marek","side":"right","en":"Martwię się o ciebie, ale nie o twój polski.","ru":"Я волнуюсь за тебя, но не за твой польский.",
      "words":[["Martwię się o ciebie","волнуюсь за тебя"],["nie o twój polski","не за твой польский"]]},
     {"who":"A","name":"Anna","side":"left","en":"Jesteś uparty. Zawsze mówisz to samo.","ru":"Ты упрямый. Всегда говоришь одно и то же.",
      "words":[["uparty","упрямый"],["to samo","то же самое"]]},
     {"who":"M","name":"Marek","side":"right","en":"Bo jestem szczery. Rok temu nie umiałaś zamówić kawy.","ru":"Потому что я искренний. Год назад ты не умела заказать кофе.",
      "words":[["szczery","искренний"],["zamówić","заказать"]]},
     {"who":"A","name":"Anna","side":"left","en":"Cieszę się, że jesteś obok. Naprawdę.","ru":"Я рада, что ты рядом. Правда.",
      "words":[["Cieszę się, że","рада, что"],["obok","рядом"]]},
     {"who":"M","name":"Marek","side":"right","en":"To po prostu wpisz to zdanie do zeszytu i idź spać.","ru":"Тогда просто впиши это предложение в тетрадь и иди спать.",
      "words":[["po prostu","просто"],["do zeszytu","в тетрадь"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — Анна и её подруга Кася. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Mówisz o nim trzeci raz w ciągu godziny.","ru":"Ты говоришь о нём третий раз за час."},
     {"who":"B","en":"Bo pomaga mi się uczyć. To wszystko.","ru":"Потому что он помогает мне заниматься. Вот и всё."},
     {"who":"A","en":"Chyba zakochałaś się w nim, Anusiu.","ru":"Ты, кажется, в него влюбилась, Анюта."},
     {"who":"B","en":"Może trochę. Ale najpierw egzamin.","ru":"Может, немножко. Но сначала экзамен."},
     {"who":"A","en":"Oczywiście. Najpierw egzamin.","ru":"Конечно. Сначала экзамен."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — чувства с их падежами и шесть слов о характере.",
   "items":[
     {"en":"cieszyć się z czegoś","ru":"радоваться случившемуся (z + род.)","ex":"Cieszę się z twojego sukcesu."},
     {"en":"cieszyć się na coś","ru":"предвкушать, ждать с радостью (na + вин.)","ex":"Cieszę się na wakacje."},
     {"en":"bać się czegoś","ru":"бояться чего-то (+ род.)","ex":"Boję się egzaminu."},
     {"en":"martwić się o kogoś","ru":"волноваться за кого-то (o + вин.)","ex":"Martwię się o ciebie."},
     {"en":"denerwować się","ru":"нервничать","ex":"Denerwuję się przed egzaminem."},
     {"en":"zakochać się w kimś","ru":"влюбиться в кого-то (w + предл.)","ex":"Zakochała się w nim."},
     {"en":"tęsknić za kimś","ru":"скучать по кому-то (za + твор.)","ex":"Tęsknię za domem."},
     {"en":"uparty","ru":"упрямый","ex":"Jest uparty jak dziecko."},
     {"en":"szczery","ru":"искренний","ex":"Powiem ci szczerze."},
     {"en":"odważny","ru":"смелый","ex":"Jesteś odważniejsza, niż myślisz."},
     {"en":"leniwy","ru":"ленивый","ex":"W niedzielę jestem leniwa."},
     {"en":"hojny","ru":"щедрый","ex":"To bardzo hojny człowiek."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую конструкцию к её переводу.",
   "pairs":[["boję się egzaminu","боюсь экзамена"],["martwię się o ciebie","волнуюсь за тебя"],["zakochała się w nim","влюбилась в него"],["tęsknię za domem","скучаю по дому"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, что Анна записала вечером в тетрадь. Следи за предлогами при чувствах.",
   "title":"Trzy tygodnie przed egzaminem",
   "sentences":["Do egzaminu zostały trzy tygodnie i boję się go bardziej, niż chcę przyznać.","Nie boję się gramatyki, boję się ciszy przed odpowiedzią.","Marek martwi się o mnie, ale mówi, że o mój polski się nie martwi.","Jest uparty i szczery — to dobra kombinacja, kiedy ktoś potrzebuje prawdy.","Cieszę się z każdego dnia, w którym rozumiem więcej niż wczoraj.","Cieszę się też na moment, kiedy wyjdę z sali i będzie po wszystkim.","Czasem tęsknię za czasem, gdy nie musiałam niczego udowadniać.","Ale wtedy nie umiałam powiedzieć nawet tego zdania.","Kasia twierdzi, że zakochałam się w tym mieście.","Może w mieście. O reszcie porozmawiamy po egzaminie."],
   "translation":"До экзамена осталось три недели, и я боюсь его сильнее, чем хочу признать. Я боюсь не грамматики, я боюсь тишины перед ответом. Марек волнуется за меня, но говорит, что за мой польский не волнуется. Он упрямый и искренний — хорошее сочетание, когда кому-то нужна правда. Я радуюсь каждому дню, в котором понимаю больше, чем вчера. И жду не дождусь момента, когда выйду из аудитории и всё будет позади. Иногда я скучаю по времени, когда ничего не нужно было доказывать. Но тогда я не умела сказать даже этого предложения. Кася утверждает, что я влюбилась в этот город. Может, в город. Об остальном поговорим после экзамена."
 },
 "quiz":{
   "intro":"Пять вопросов — и падежи чувств на месте.",
   "items":[
     {"q":"1. «Я рада твоему подарку» —","opts":["Cieszę się twojemu prezentowi","Cieszę się z twojego prezentu","Cieszę się na twój prezent"],"answer":1,
      "explain":"Событие позади: <b>z twojego prezentu</b>, родительный."},
     {"q":"2. «Я боюсь экзамена» —","opts":["Boję się egzamin","Boję się egzaminu","Boję się o egzamin"],"answer":1,
      "explain":"bać się требует родительного — как русское «бояться»."},
     {"q":"3. «Я волнуюсь за тебя» —","opts":["Martwię się o tobie","Martwię się o ciebie","Martwię się tobą"],"answer":1,
      "explain":"martwić się идёт с o плюс винительный: <b>o ciebie</b>."},
     {"q":"4. «Она влюбилась в него» —","opts":["Zakochała się w niego","Zakochała się w nim","Zakochała się go"],"answer":1,
      "explain":"После w — предложный падеж: <b>w nim</b>."},
     {"q":"5. <b>szczery</b> значит —","opts":["щедрый","искренний","упрямый"],"answer":1,
      "explain":"<b>Szczery</b> — искренний. Щедрый — hojny, упрямый — uparty."}
   ]
 },
 "essay":{
   "intro":"Напиши о том, что чувствуешь на самом деле, — коротко и честно.",
   "prompt":"Напиши 4–5 предложений: чего ты боишься, за кого волнуешься, чему рад(а), по чему скучаешь и какой у тебя характер. В каждом предложении следи за падежом при глаголе.",
   "hint":"Опора: Boję się… (род.) · Martwię się o… (вин.) · Cieszę się z… / na… · Tęsknię za… (твор.) · Jestem… 💗",
   "example":"Boję się egzaminów i ciszy przed odpowiedzią. Martwię się o rodzinę, która została daleko. Cieszę się z każdego dnia, w którym rozumiem więcej. Tęsknię za starymi przyjaciółmi i za miastem, w którym dorosłam. Jestem raczej nieśmiała, ale uparta — i to mi pomaga."
 }
},
"26": {
 "day":26,"week":"04",
 "themeRu":"В учреждении",
 "themeEn":"W urzędzie",
 "intro":"Очередь, номерок, окошко номер четыре и стопка бумаг. Анна идёт подавать документы на сертификатный экзамен — а заодно показывает нам язык, на котором говорят учреждения. Он любит существительные, страдательный залог и слово <b>uprzejmie</b>. Вчерашняя <b>kawusia</b> сюда не заходит.",
 "introAudio":"Очередь, номерок, окошко номер четыре и стопка бумаг. Анна идёт подавать документы на сертификатный экзамен — а заодно показывает нам язык, на котором говорят учреждения. Он любит существительные, страдательный залог и слово uprzejmie. Вчерашняя kawusia сюда не заходит.",
 "goals":[
   "Делать бумажные дела: <b>wypełnić formularz, złożyć wniosek, podpisać umowę</b>",
   "Понимать язык учреждения: <b>należy wypełnić, wniosek został przyjęty</b>",
   "Написать официальное письмо: <b>Szanowni Państwo… z poważaniem</b>",
   "Спросить в окошке то, что нужно спросить"
 ],
 "learned":[
   "Сделал(а) бумажные дела: wypełnić formularz, złożyć wniosek, podpisać umowę",
   "Понял(а) язык учреждения: należy wypełnić, wniosek został przyjęty",
   "Написал(а) официальное письмо: Szanowni Państwo и z poważaniem",
   "Спросил(а) в окошке то, что нужно спросить"
 ],
 "review":{
   "intro":"Вчерашние чувства — на разминку: три падежа, которые легко перепутать. И одно gdyby, чтобы форма не ржавела.",
   "introAudio":"Вчерашние чувства — на разминку: три падежа, которые легко перепутать. И одно gdyby, чтобы форма не ржавела.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни предлог при martwić się.",
      "q":"«Она волнуется за сына» —","opts":["Martwi się o synu","Martwi się o syna","Martwi się synem"],"answer":1,
      "explain":"martwić się идёт с o плюс винительный: <b>o syna</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> событие позади или впереди?",
      "q":"«Жду не дождусь поездки» —","opts":["Cieszę się z wyjazdu","Cieszę się na wyjazd","Cieszę się wyjazdowi"],"answer":1,
      "explain":"Поездка впереди: <b>na wyjazd</b>, винительный."},
     {"type":"choice","howto":"<b>Что делать:</b> лицо живёт в союзе.",
      "q":"«Если бы я знала, я бы сказала» —","opts":["Gdyby wiedziałam, powiedziałabym","Gdybym wiedziała, powiedziałabym","Gdybym wiedziałabym, powiedziała"],"answer":1,
      "explain":"Окончание лица стоит при союзе: <b>gdybym wiedziała</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Я скучаю по дому»</b>","answer":"Tęsknię za domem"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Бумажные глаголы",
    "title":"<em>Wypełnić, złożyć, podpisać</em>",
    "paras":[
      "Вся жизнь в учреждении держится на пяти-шести глаголах. <b>Wypełnić formularz</b> — заполнить бланк. <b>Złożyć wniosek</b> — подать заявление. <b>Podpisać umowę</b> — подписать договор. <b>Okazać dowód osobisty</b> — предъявить удостоверение личности. <b>Odebrać zaświadczenie</b> — забрать справку.",
      "Заметь приставки из первой недели — они работают и здесь: <b>pod</b>-pisać («под-писать»), <b>wy</b>-pełnić, <b>od</b>-ebrać. Русская логика приставок снова экономит время.",
      "Предметы вокруг: <b>wniosek</b> (заявление), <b>podanie</b> (заявление в свободной форме), <b>formularz</b> (бланк), <b>zaświadczenie</b> (справка), <b>dowód osobisty</b> (удостоверение личности), <b>opłata</b> (пошлина), <b>podpis</b> (подпись), <b>załącznik</b> (приложение), <b>termin</b> (срок).",
      "И место действия: <b>urząd</b>, <b>okienko numer cztery</b>, <b>kolejka</b> (очередь), <b>numerek</b> (талончик), <b>urzędnik</b> и <b>urzędniczka</b>. Плюс глагол на все случаи: <b>załatwić sprawę</b> — «уладить дело»."
    ],
    "audio":"Вся жизнь в учреждении держится на пяти-шести глаголах. Wypełnić formularz — заполнить бланк. Złożyć wniosek — подать заявление. Podpisać umowę — подписать договор. Okazać dowód osobisty — предъявить удостоверение личности. Odebrać zaświadczenie — забрать справку. Заметь приставки из первой недели: pod-pisać, wy-pełnić, od-ebrać. Предметы вокруг: wniosek — заявление, podanie — заявление в свободной форме, formularz — бланк, zaświadczenie — справка, dowód osobisty, opłata — пошлина, podpis, załącznik — приложение, termin — срок. И место действия: urząd, okienko numer cztery, kolejka — очередь, numerek — талончик, urzędnik и urzędniczka. Плюс глагол на все случаи: załatwić sprawę, уладить дело.",
    "table":{"rows":[
      ["<b>wypełnić formularz</b> <button class=\"play\" data-say=\"wypełnić formularz\">🔊</button>","заполнить бланк"],
      ["<b>złożyć wniosek</b> <button class=\"play\" data-say=\"złożyć wniosek\">🔊</button>","подать заявление"],
      ["<b>podpisać umowę</b> <button class=\"play\" data-say=\"podpisać umowę\">🔊</button>","подписать договор"],
      ["<b>okazać dowód osobisty</b> <button class=\"play\" data-say=\"okazać dowód osobisty\">🔊</button>","предъявить удостоверение личности"],
      ["<b>odebrać zaświadczenie</b> <button class=\"play\" data-say=\"odebrać zaświadczenie\">🔊</button>","забрать справку"],
      ["<b>załatwić sprawę</b> <button class=\"play\" data-say=\"załatwić sprawę\">🔊</button>","уладить дело"]
    ],"star":1},
    "examples":[
      {"ru":"Я подала заявление в понедельник.","en":"<b>Złożyłam wniosek</b> w poniedziałek.","say":"Złożyłam wniosek w poniedziałek."},
      {"ru":"Заполни бланк и подпиши внизу.","en":"<b>Wypełnij formularz</b> i podpisz na dole.","gloss":"императив из A2","say":"Wypełnij formularz i podpisz na dole."},
      {"ru":"Возьмите талончик и подождите своей очереди.","en":"Proszę wziąć <b>numerek</b> i poczekać na swoją kolej.","say":"Proszę wziąć numerek i poczekać na swoją kolej."},
      {"ru":"Справку можно забрать через две недели.","en":"<b>Zaświadczenie</b> można odebrać za dwa tygodnie.","gloss":"можно — из дня 18","say":"Zaświadczenie można odebrać za dwa tygodnie."}
    ],
    "mistakes":[
      {"wrong":"Zrobiłam wniosek.","right":"<b>Złożyłam wniosek.</b>","why":"заявление не «делают», а подают: złożyć wniosek. Это устойчивое сочетание."},
      {"wrong":"Napisałam formularz.","right":"<b>Wypełniłam formularz.</b>","why":"бланк заполняют — wypełnić, как и в русском."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни устойчивое сочетание.",
       "q":"«Я подала заявление» —","opts":["Zrobiłam wniosek","Złożyłam wniosek","Złożyłam wniosku"],"answer":1,
       "explain":"Заявление подают: <b>złożyć wniosek</b> — и после этого глагола идёт винительный падеж."},
      {"type":"choice","q":"<b>zaświadczenie</b> — это —",
       "opts":["договор","справка","очередь"],"answer":1,
       "explain":"<b>Zaświadczenie</b> — справка. Договор — umowa, очередь — kolejka."},
      {"type":"type","howto":"<b>Что делать:</b> напиши два слова.",
       "q":"«заполнить бланк»","accept":["wypełnić formularz","wypelnic formularz"],"placeholder":"wypełnić …"}
    ],
    "mnemonic":"📋 numerek → okienko → formularz → wniosek → podpis → zaświadczenie. Путь одной бумаги."
   },
   {
    "eyebrow":"Правило 2 · Язык учреждения",
    "title":"<em>Należy wypełnić</em>, <em>wniosek został przyjęty</em>",
    "paras":[
      "Учреждение говорит без людей. Вместо «вы должны заполнить» оно скажет <b>Formularz należy wypełnić drukowanymi literami.</b> Слово <b>należy</b> — родственник знакомых <b>trzeba</b> и <b>można</b> из дня 18: безличное «следует, нужно» плюс инфинитив.",
      "Второй приём — безличное <b>się</b> и страдательный залог из дней 19–20: <b>Wniosek składa się w okienku numer cztery.</b> <b>Wniosek został przyjęty.</b> <b>Opłatę należy wnieść do piętnastego marca.</b>",
      "Третий приём — отглагольные существительные вместо глаголов: не «подать заявление», а <b>złożenie wniosku</b>; не «заполнить бланк», а <b>wypełnienie formularza</b>; не «выдать справку», а <b>wydanie zaświadczenia</b>. Русский канцелярит устроен ровно так же: «подача заявления», «выдача справки».",
      "Практический вывод: не пугайся длинной фразы. Найди существительное на -anie или -enie, переведи его глаголом — и предложение раскроется."
    ],
    "audio":"Учреждение говорит без людей. Вместо «вы должны заполнить» оно скажет: formularz należy wypełnić drukowanymi literami. Слово należy — родственник знакомых trzeba и można из дня восемнадцать: безличное «следует, нужно» плюс инфинитив. Второй приём — безличное się и страдательный залог из дней девятнадцать и двадцать: wniosek składa się w okienku numer cztery; wniosek został przyjęty; opłatę należy wnieść do piętnastego marca. Третий приём — отглагольные существительные: złożenie wniosku, wypełnienie formularza, wydanie zaświadczenia. Русский канцелярит устроен ровно так же: подача заявления, выдача справки. Практический вывод: найди существительное на -anie или -enie, переведи его глаголом — и предложение раскроется.",
    "table":{"rows":[
      ["Formularz <b>należy wypełnić</b>. <button class=\"play\" data-say=\"Formularz należy wypełnić\">🔊</button>","Бланк следует заполнить."],
      ["<b>drukowanymi literami</b> <button class=\"play\" data-say=\"drukowanymi literami\">🔊</button>","печатными буквами"],
      ["Wniosek <b>składa się</b> w okienku numer cztery. <button class=\"play\" data-say=\"Wniosek składa się w okienku numer cztery\">🔊</button>","Заявление подаётся в окне номер четыре."],
      ["Wniosek <b>został przyjęty</b>. <button class=\"play\" data-say=\"Wniosek został przyjęty\">🔊</button>","Заявление принято."],
      ["<b>złożenie wniosku</b> <button class=\"play\" data-say=\"złożenie wniosku\">🔊</button>","подача заявления"],
      ["<b>wydanie zaświadczenia</b> <button class=\"play\" data-say=\"wydanie zaświadczenia\">🔊</button>","выдача справки"]
    ],"star":0},
    "examples":[
      {"ru":"Пошлину следует внести до пятнадцатого марта.","en":"Opłatę <b>należy wnieść</b> do piętnastego marca.","say":"Opłatę należy wnieść do piętnastego marca."},
      {"ru":"Заявление было принято без замечаний.","en":"Wniosek <b>został przyjęty</b> bez uwag.","gloss":"страдательный залог — день 20","say":"Wniosek został przyjęty bez uwag."},
      {"ru":"Документы принимают до конца месяца.","en":"Dokumenty <b>przyjmuje się</b> do końca miesiąca.","say":"Dokumenty przyjmuje się do końca miesiąca."},
      {"ru":"За подачу заявления платы нет.","en":"Za <b>złożenie wniosku</b> nie ma opłaty.","say":"Za złożenie wniosku nie ma opłaty."}
    ],
    "mistakes":[
      {"wrong":"Pan należy wypełnić formularz.","right":"Formularz <b>należy wypełnić</b>.","why":"należy — безличная форма: подлежащего при ней нет, как у trzeba и można."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни безличные формы из дня 18.",
       "q":"«Бланк следует заполнить печатными буквами» —","opts":["Pan należy wypełnić formularz","Formularz należy wypełnić drukowanymi literami","Formularz jest należy wypełnić"],"answer":1,
       "explain":"<b>Należy</b> идёт без подлежащего, сразу с инфинитивом."},
      {"type":"choice","howto":"<b>Что делать:</b> разверни существительное в глагол.",
       "q":"<b>wydanie zaświadczenia</b> значит —","opts":["выдача справки","поданная справка","справка выдана"],"answer":0,
       "explain":"Отглагольное существительное: <b>wydanie</b> — выдача."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Заявление было принято»</b>","answer":"Wniosek został przyjęty"}
    ],
    "mnemonic":"🏛️ należy + инфинитив · składa się · został przyjęty · złożenie wniosku. Четыре приёма канцелярского языка."
   },
   {
    "eyebrow":"Правило 3 · Официальное письмо",
    "title":"<em>Szanowni Państwo… z poważaniem</em>",
    "paras":[
      "У официального письма жёсткий каркас, и это хорошая новость: выучил один раз — пользуешься всегда. Начало — <b>Szanowni Państwo,</b> если адресат неизвестен, или <b>Szanowna Pani,</b> и <b>Szanowny Panie,</b> если известен.",
      "Тело письма держится на формуле <b>uprzejmie proszę o</b> плюс винительный: <b>Uprzejmie proszę o informację…</b> <b>Uprzejmie proszę o wydanie zaświadczenia…</b> Русское «убедительно прошу» стоит рядом по тону.",
      "Приложения: <b>W załączeniu przesyłam kopię dowodu osobistego.</b> И финал — <b>Z poważaniem</b>, а под ним имя и фамилия. В более тёплом письме допускается <b>Z wyrazami szacunku</b>.",
      "Чего в таком письме не бывает: <b>cześć</b>, восклицательных знаков, уменьшительных и смайликов. Вчерашняя <b>kawusia</b> здесь превращается обратно в <b>kawa</b> — а лучше вообще не появляется."
    ],
    "audio":"У официального письма жёсткий каркас, и это хорошая новость: выучил один раз — пользуешься всегда. Начало: Szanowni Państwo, если адресат неизвестен, или Szanowna Pani и Szanowny Panie, если известен. Тело письма держится на формуле uprzejmie proszę o плюс винительный: uprzejmie proszę o informację, uprzejmie proszę o wydanie zaświadczenia. Русское «убедительно прошу» стоит рядом по тону. Приложения: w załączeniu przesyłam kopię dowodu osobistego. И финал: z poważaniem, а под ним имя и фамилия. В более тёплом письме допускается z wyrazami szacunku. Чего в таком письме не бывает: cześć, восклицательных знаков, уменьшительных и смайликов.",
    "table":{"rows":[
      ["<b>Szanowni Państwo,</b> <button class=\"play\" data-say=\"Szanowni Państwo\">🔊</button>","Уважаемые господа, — адресат неизвестен"],
      ["<b>Szanowna Pani,</b> <button class=\"play\" data-say=\"Szanowna Pani\">🔊</button>","Уважаемая госпожа,"],
      ["<b>Uprzejmie proszę o</b> informację… <button class=\"play\" data-say=\"Uprzejmie proszę o informację\">🔊</button>","Убедительно прошу дать информацию…"],
      ["<b>W załączeniu przesyłam</b> kopię dowodu. <button class=\"play\" data-say=\"W załączeniu przesyłam kopię dowodu\">🔊</button>","В приложении высылаю копию удостоверения."],
      ["<b>Z poważaniem</b> <button class=\"play\" data-say=\"Z poważaniem\">🔊</button>","С уважением"],
      ["<b>Załącznik:</b> kopia dowodu osobistego <button class=\"play\" data-say=\"Załącznik: kopia dowodu osobistego\">🔊</button>","Приложение: копия удостоверения личности"]
    ],"star":2},
    "examples":[
      {"ru":"Убедительно прошу выдать справку о сдаче экзамена.","en":"<b>Uprzejmie proszę o wydanie</b> zaświadczenia o zdanym egzaminie.","say":"Uprzejmie proszę o wydanie zaświadczenia o zdanym egzaminie."},
      {"ru":"Убедительно прошу сообщить о сроке подачи документов.","en":"<b>Uprzejmie proszę o informację</b> o terminie składania dokumentów.","say":"Uprzejmie proszę o informację o terminie składania dokumentów."},
      {"ru":"В приложении высылаю подтверждение оплаты.","en":"<b>W załączeniu przesyłam</b> potwierdzenie wpłaty.","say":"W załączeniu przesyłam potwierdzenie wpłaty."},
      {"ru":"С уважением, Анна Ковальская","en":"<b>Z poważaniem</b>, Anna Kowalska","say":"Z poważaniem, Anna Kowalska"}
    ],
    "mistakes":[
      {"wrong":"Cześć! Proszę o zaświadczenie.","right":"<b>Szanowni Państwo,</b> uprzejmie proszę o wydanie zaświadczenia.","why":"официальное письмо начинается с формулы обращения, а просьба идёт с uprzejmie proszę o."},
      {"wrong":"Uprzejmie proszę o zaświadczeniu.","right":"Uprzejmie proszę o <b>zaświadczenie</b>.","why":"после proszę o идёт винительный падеж."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери начало официального письма.",
       "q":"Письмо в учреждение начинается —","opts":["Cześć!","Szanowni Państwo,","Droga Pani Aniu!"],"answer":1,
       "explain":"Стандартное официальное обращение — <b>Szanowni Państwo,</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после proszę o.",
       "q":"«Убедительно прошу выдать справку» —","opts":["Uprzejmie proszę o wydaniu zaświadczenia","Uprzejmie proszę o wydanie zaświadczenia","Uprzejmie proszę wydanie zaświadczenia"],"answer":1,
       "explain":"После proszę o — винительный: <b>o wydanie</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши подпись под официальным письмом.",
       "q":"«С уважением» в конце письма","accept":["z poważaniem","z powazaniem"],"placeholder":"Z pow…"}
    ],
    "mnemonic":"✉️ Szanowni Państwo → uprzejmie proszę o… → w załączeniu przesyłam… → Z poważaniem. Каркас из четырёх строк."
   },
   {
    "eyebrow":"Правило 4 · В окошке",
    "title":"Что спросить и что услышать",
    "paras":[
      "Разговор в окошке короткий, и половина фраз в нём предсказуема. Твои: <b>Czy to właściwe okienko?</b> (это то окно?) <b>Gdzie mam się podpisać?</b> (где мне расписаться?) <b>Czy potrzebne są jakieś załączniki?</b> (нужны ли приложения?) <b>Do kiedy mam czas?</b> (до какого числа у меня есть время?)",
      "Их: <b>Proszę wypełnić i podpisać na dole.</b> <b>Musi pani jeszcze wnieść opłatę.</b> <b>Proszę okazać dowód osobisty.</b> <b>Zaświadczenie będzie gotowe za dwa tygodnie.</b>",
      "Обрати внимание на вежливую рамку из A2: чиновник говорит <b>pan</b> и <b>pani</b> с формой третьего лица — <b>musi pani</b>, <b>proszę pana</b>. Никакого «ты» здесь не бывает ни с одной стороны.",
      "И одна фраза-выручалка, если совсем не понял(а): <b>Przepraszam, czy może pani powtórzyć wolniej?</b> Она работает в любом окошке и ни разу никого не обидела."
    ],
    "audio":"Разговор в окошке короткий, и половина фраз в нём предсказуема. Твои: czy to właściwe okienko; gdzie mam się podpisać; czy potrzebne są jakieś załączniki; do kiedy mam czas. Их: proszę wypełnić i podpisać na dole; musi pani jeszcze wnieść opłatę; proszę okazać dowód osobisty; zaświadczenie będzie gotowe za dwa tygodnie. Обрати внимание на вежливую рамку из A2: чиновник говорит pan и pani с формой третьего лица — musi pani, proszę pana. И одна фраза-выручалка, если совсем ничего не понятно: przepraszam, czy może pani powtórzyć wolniej. Она работает в любом окошке.",
    "table":{"rows":[
      ["<b>Czy to właściwe okienko?</b> <button class=\"play\" data-say=\"Czy to właściwe okienko?\">🔊</button>","Это то окно?"],
      ["<b>Gdzie mam się podpisać?</b> <button class=\"play\" data-say=\"Gdzie mam się podpisać?\">🔊</button>","Где мне расписаться?"],
      ["<b>Czy potrzebne są jakieś załączniki?</b> <button class=\"play\" data-say=\"Czy potrzebne są jakieś załączniki?\">🔊</button>","Нужны ли какие-то приложения?"],
      ["<b>Musi pani wnieść opłatę.</b> <button class=\"play\" data-say=\"Musi pani wnieść opłatę\">🔊</button>","Вам нужно внести пошлину."],
      ["<b>Proszę okazać dowód osobisty.</b> <button class=\"play\" data-say=\"Proszę okazać dowód osobisty\">🔊</button>","Предъявите удостоверение личности."],
      ["<b>Czy może pani powtórzyć wolniej?</b> <button class=\"play\" data-say=\"Czy może pani powtórzyć wolniej?\">🔊</button>","Вы не могли бы повторить медленнее?"]
    ],"star":5},
    "examples":[
      {"ru":"Извините, это то окно для заявлений?","en":"Przepraszam, czy to <b>właściwe okienko</b> na wnioski?","say":"Przepraszam, czy to właściwe okienko na wnioski?"},
      {"ru":"Где мне расписаться?","en":"<b>Gdzie mam się podpisać?</b>","say":"Gdzie mam się podpisać?"},
      {"ru":"Справка будет готова через две недели.","en":"Zaświadczenie <b>będzie gotowe</b> za dwa tygodnie.","say":"Zaświadczenie będzie gotowe za dwa tygodnie."},
      {"ru":"Вы не могли бы повторить помедленнее?","en":"Czy <b>może pani powtórzyć wolniej</b>?","gloss":"вежливая рамка из A2","say":"Czy może pani powtórzyć wolniej?"}
    ],
    "mistakes":[
      {"wrong":"Proszę okazywać dowód osobisty.","right":"Proszę <b>okazać</b> dowód osobisty.","why":"разовая просьба идёт с совершенным видом: okazać, wypełnić, podpisać. Несовершенный звучал бы как «предъявляйте каждый раз»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни вежливую рамку.",
       "q":"«Вам нужно внести пошлину» (к женщине) —","opts":["Musisz pani wnieść opłatę","Musi pani wnieść opłatę","Pani muszą wnieść opłatę"],"answer":1,
       "explain":"Pani идёт с формой третьего лица: <b>musi pani</b>."},
      {"type":"choice","q":"«Где мне расписаться?» —",
       "opts":["Gdzie mam się podpisać?","Gdzie podpisuję się?","Gdzie jest podpis?"],"answer":0,
       "explain":"Стандартный вопрос в окошке: <b>Gdzie mam się podpisać?</b>"},
      {"type":"speak","howto":"Нажми микрофон и спроси так, как спрашивают у окошка.",
       "target":"Przepraszam, czy potrzebne są jakieś załączniki?","sub":"извините, нужны ли какие-то приложения?","want":"Przepraszam, czy potrzebne są jakieś załączniki?"}
    ],
    "mnemonic":"🪟 Czy to właściwe okienko? · Gdzie mam się podpisać? · Czy może pani powtórzyć wolniej? Три фразы — и дело сделано."
   }
 ],
 "dialogue":{
   "intro":"Анна в окошке номер четыре. Обрати внимание: обе стороны говорят вежливо и ни разу не переходят на «ты».",
   "lines":[
     {"who":"A","name":"Anna","side":"right","en":"Dzień dobry. Czy to właściwe okienko na wnioski egzaminacyjne?","ru":"Добрый день. Это нужное окно для экзаменационных заявлений?",
      "words":[["właściwe okienko","нужное окно"],["wnioski","заявления"]]},
     {"who":"U","name":"Urzędniczka","side":"left","en":"Tak. Proszę wypełnić formularz drukowanymi literami.","ru":"Да. Заполните бланк печатными буквами.",
      "words":[["formularz","бланк"],["drukowanymi literami","печатными буквами"]]},
     {"who":"A","name":"Anna","side":"right","en":"Już mam wypełniony. Gdzie mam się podpisać?","ru":"У меня уже заполнен. Где мне расписаться?",
      "words":[["wypełniony","заполненный"],["podpisać się","расписаться"]]},
     {"who":"U","name":"Urzędniczka","side":"left","en":"Na dole, po prawej stronie. Proszę okazać dowód osobisty.","ru":"Внизу, справа. Предъявите удостоверение личности.",
      "words":[["Na dole","внизу"],["dowód osobisty","удостоверение личности"]]},
     {"who":"A","name":"Anna","side":"right","en":"Proszę bardzo. Czy potrzebne są jakieś załączniki?","ru":"Пожалуйста. Нужны ли какие-то приложения?",
      "words":[["Proszę bardzo","пожалуйста"],["załączniki","приложения"]]},
     {"who":"U","name":"Urzędniczka","side":"left","en":"Potwierdzenie wpłaty. Opłatę należy wnieść do piętnastego.","ru":"Подтверждение оплаты. Пошлину нужно внести до пятнадцатого.",
      "words":[["potwierdzenie wpłaty","подтверждение оплаты"],["należy wnieść","следует внести"]]},
     {"who":"A","name":"Anna","side":"right","en":"Wpłaciłam wczoraj. Mam wydruk z banku.","ru":"Я оплатила вчера. У меня есть распечатка из банка.",
      "words":[["Wpłaciłam","я оплатила"],["wydruk","распечатка"]]},
     {"who":"U","name":"Urzędniczka","side":"left","en":"W takim razie wniosek został przyjęty. Zaświadczenie za dwa tygodnie.","ru":"В таком случае заявление принято. Справка через две недели.",
      "words":[["W takim razie","в таком случае"],["został przyjęty","принято"]]},
     {"who":"A","name":"Anna","side":"right","en":"Dziękuję bardzo. Do widzenia.","ru":"Большое спасибо. До свидания.",
      "words":[["Dziękuję bardzo","большое спасибо"],["Do widzenia","до свидания"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — очередь у окошка. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Przepraszam, kto jest ostatni?","ru":"Извините, кто последний?"},
     {"who":"B","en":"Ja. Ale numerki są po lewej.","ru":"Я. Но талончики слева."},
     {"who":"A","en":"Trzeba wziąć numerek? Nie wiedziałam.","ru":"Нужно взять талончик? Я не знала."},
     {"who":"B","en":"Trzeba. Inaczej stoi się tu godzinę na darmo.","ru":"Нужно. Иначе стоишь здесь час впустую."},
     {"who":"A","en":"Dziękuję. Uratował mnie pan.","ru":"Спасибо. Вы меня спасли."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — весь путь одной бумаги от талончика до справки.",
   "items":[
     {"en":"urząd","ru":"учреждение, ведомство","ex":"Jutro idę do urzędu."},
     {"en":"okienko","ru":"окно приёма","ex":"Okienko numer cztery."},
     {"en":"numerek","ru":"талончик","ex":"Proszę wziąć numerek."},
     {"en":"formularz","ru":"бланк","ex":"Proszę wypełnić formularz."},
     {"en":"wniosek","ru":"заявление","ex":"Złożyłam wniosek w poniedziałek."},
     {"en":"zaświadczenie","ru":"справка","ex":"Zaświadczenie będzie za dwa tygodnie."},
     {"en":"dowód osobisty","ru":"удостоверение личности","ex":"Proszę okazać dowód osobisty."},
     {"en":"opłata","ru":"пошлина, плата","ex":"Opłatę należy wnieść do piętnastego."},
     {"en":"załącznik","ru":"приложение к документу","ex":"Załącznik: kopia dowodu."},
     {"en":"podpisać się","ru":"расписаться","ex":"Gdzie mam się podpisać?"},
     {"en":"należy coś zrobić","ru":"следует, нужно (należy + инфинитив)","ex":"Formularz należy wypełnić."},
     {"en":"z poważaniem","ru":"с уважением","ex":"Z poważaniem, Anna Kowalska"}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его переводу.",
   "pairs":[["wniosek","заявление"],["zaświadczenie","справка"],["opłata","пошлина"],["z poważaniem","с уважением"]]
 },
 "reading":{
   "intro":"Прочитай и послушай письмо Анны в экзаменационную комиссию. Это готовый образец официального письма.",
   "title":"Szanowni Państwo",
   "sentences":["Szanowni Państwo,","uprzejmie proszę o informację o terminie egzaminu certyfikatowego na poziomie B1.","W dniu piętnastego lutego złożyłam wniosek w Państwa biurze.","Wniosek został przyjęty przez urzędniczkę w okienku numer cztery.","Wniosłam również opłatę egzaminacyjną.","W załączeniu przesyłam potwierdzenie wpłaty oraz kopię dowodu osobistego.","Uprzejmie proszę o potwierdzenie, że dokumenty są kompletne.","Będę wdzięczna za odpowiedź do końca miesiąca.","Z poważaniem","Anna Kowalska"],
   "translation":"Уважаемые господа, убедительно прошу сообщить о дате сертификатного экзамена на уровне B1. Пятнадцатого февраля я подала заявление в вашем бюро. Заявление было принято сотрудницей в окне номер четыре. Я также внесла экзаменационную пошлину. В приложении высылаю подтверждение оплаты и копию удостоверения личности. Убедительно прошу подтвердить, что документы полные. Буду благодарна за ответ до конца месяца. С уважением, Анна Ковальская"
 },
 "quiz":{
   "intro":"Пять вопросов — и учреждение больше не пугает.",
   "items":[
     {"q":"1. «Я подала заявление» —","opts":["Zrobiłam wniosek","Złożyłam wniosek","Złożyłam wniosku"],"answer":1,
      "explain":"Устойчивое сочетание <b>złożyć wniosek</b> плюс винительный падеж."},
     {"q":"2. «Бланк следует заполнить» —","opts":["Formularz należy wypełnić","Pan należy wypełnić formularz","Formularz jest należy wypełnić"],"answer":0,
      "explain":"<b>Należy</b> — безличная форма плюс инфинитив, без подлежащего."},
     {"q":"3. Официальное письмо начинается —","opts":["Cześć!","Szanowni Państwo,","Droga Pani!"],"answer":1,
      "explain":"Стандартная формула — <b>Szanowni Państwo,</b>."},
     {"q":"4. «Убедительно прошу выдать справку» —","opts":["Uprzejmie proszę o wydaniu zaświadczenia","Uprzejmie proszę o wydanie zaświadczenia","Uprzejmie proszę wydanie zaświadczenia"],"answer":1,
      "explain":"После proszę o — винительный падеж: <b>o wydanie</b>."},
     {"q":"5. <b>zaświadczenie</b> — это —","opts":["договор","справка","очередь"],"answer":1,
      "explain":"<b>Zaświadczenie</b> — справка."}
   ]
 },
 "essay":{
   "intro":"Напиши официальное письмо — по каркасу, который сегодня разобрали.",
   "prompt":"Напиши письмо в 5–6 предложений: обращение, просьба с uprzejmie proszę o, одно предложение о том, что ты уже сделал(а), упоминание приложения и подпись.",
   "hint":"Каркас: Szanowni Państwo, · uprzejmie proszę o… · Złożyłem/złożyłam… · W załączeniu przesyłam… · Z poważaniem ✉️",
   "example":"Szanowni Państwo, uprzejmie proszę o informację o terminie kursu przygotowawczego. W ubiegłym tygodniu złożyłam wniosek o przyjęcie na kurs. Wniosek został przyjęty w okienku numer dwa. W załączeniu przesyłam potwierdzenie wpłaty. Uprzejmie proszę o odpowiedź do końca miesiąca. Z poważaniem, Anna Kowalska"
 }
},
"27": {
 "day":27,"week":"04",
 "themeRu":"Праздники",
 "themeEn":"Święta i tradycje",
 "intro":"Двадцать четвёртое декабря, за окном темнеет, и все ждут первую звезду. Анна впервые встречает Сочельник у семьи Марека — и узнаёт, что польская <b>Wigilia</b> начинается не с еды, а с облатки. Сегодня — праздники, традиции и пожелания, которые всегда стоят в родительном падеже.",
 "introAudio":"Двадцать четвёртое декабря, за окном темнеет, и все ждут первую звезду. Анна впервые встречает Сочельник у семьи Марека — и узнаёт, что польская Wigilia начинается не с еды, а с облатки. Сегодня — праздники, традиции и пожелания, которые всегда стоят в родительном падеже.",
 "goals":[
   "Назвать польские праздники: <b>Wigilia, Boże Narodzenie, Wielkanoc, Sylwester</b>",
   "Понимать традиции Сочельника: <b>opłatek, pierwsza gwiazdka, dwanaście potraw</b>",
   "Поздравлять в родительном: <b>Wesołych Świąt! Szczęśliwego Nowego Roku!</b>",
   "Знать, почему <b>imieniny</b> в Польше важнее дня рождения"
 ],
 "learned":[
   "Назвал(а) польские праздники: Wigilia, Boże Narodzenie, Wielkanoc, Sylwester",
   "Понял(а) традиции Сочельника: opłatek, pierwsza gwiazdka, dwanaście potraw",
   "Поздравил(а) в родительном: Wesołych Świąt, Szczęśliwego Nowego Roku",
   "Узнал(а), почему imieniny в Польше важнее дня рождения"
 ],
 "review":{
   "intro":"Вчерашнее учреждение — на разминку: два глагола, одна безличная форма и начало письма. Плюс приставка, чтобы рука не забывала.",
   "introAudio":"Вчерашнее учреждение — на разминку: два глагола, одна безличная форма и начало письма. Плюс приставка, чтобы рука не забывала.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни устойчивое сочетание.",
      "q":"«Он подал заявление вчера» —","opts":["Zrobił wniosek wczoraj","Złożył wniosek wczoraj","Złożył wniosku wczoraj"],"answer":1,
      "explain":"Заявление подают: <b>złożyć wniosek</b>, и после глагола идёт винительный падеж."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни безличную форму.",
      "q":"«Пошлину следует внести до пятницы» —","opts":["Opłatę należy wnieść do piątku","Pan należy wnieść opłatę","Opłata jest wniesiona do piątku"],"answer":0,
      "explain":"<b>Należy</b> плюс инфинитив, без подлежащего."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни приставки движения.",
      "q":"«Мы доехали до Гданьска за три часа» —","opts":["Przejechaliśmy do Gdańska w trzy godziny","Dojechaliśmy do Gdańska w trzy godziny","Wyjechaliśmy do Gdańska w trzy godziny"],"answer":1,
      "explain":"До- отвечает польскому do-: <b>dojechaliśmy</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Убедительно прошу выдать справку»</b>","answer":"Uprzejmie proszę o wydanie zaświadczenia"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Календарь",
    "title":"<em>Wigilia</em> — это сочельник",
    "paras":[
      "Главная поправка для русского уха: <b>Wigilia</b> — это не «вигилия», а сочельник, вечер 24 декабря. И именно он в Польше — главный вечер года, важнее самого <b>Bożego Narodzenia</b> 25 и 26 декабря.",
      "Дальше по календарю: <b>Sylwester</b> — 31 декабря, вечеринка; <b>Nowy Rok</b> — 1 января; <b>Trzech Króli</b> — 6 января, выходной день. Весной — <b>Wielkanoc</b> (Пасха) и <b>lany poniedziałek</b>, он же <b>śmigus-dyngus</b> — день, когда друг друга обливают водой.",
      "Осенью — <b>Wszystkich Świętych</b>, первое ноября: вся страна едет на кладбища и ставит свечи. Зрелище, которое запоминают все приезжие.",
      "И самое личное: <b>imieniny</b> — именины, день своего святого. У старшего поколения их отмечают серьёзнее, чем <b>urodziny</b>: день рождения знают все, а именины помнят по календарю."
    ],
    "audio":"Главная поправка для русского уха: Wigilia — это сочельник, вечер двадцать четвёртого декабря. И именно он в Польше главный вечер года, важнее самого Bożego Narodzenia двадцать пятого и двадцать шестого. Дальше по календарю: Sylwester — тридцать первое декабря, вечеринка; Nowy Rok — первое января; Trzech Króli — шестое января, выходной. Весной Wielkanoc, Пасха, и lany poniedziałek, он же śmigus-dyngus, день, когда друг друга обливают водой. Осенью Wszystkich Świętych, первое ноября: вся страна едет на кладбища и ставит свечи. И самое личное: imieniny, именины, день своего святого. У старшего поколения их отмечают серьёзнее, чем urodziny.",
    "table":{"rows":[
      ["<b>Wigilia</b> — 24 grudnia <button class=\"play\" data-say=\"Wigilia, dwudziestego czwartego grudnia\">🔊</button>","сочельник, главный вечер года"],
      ["<b>Boże Narodzenie</b> — 25 i 26 grudnia <button class=\"play\" data-say=\"Boże Narodzenie\">🔊</button>","Рождество"],
      ["<b>Sylwester</b> — 31 grudnia <button class=\"play\" data-say=\"Sylwester\">🔊</button>","новогодняя ночь"],
      ["<b>Wielkanoc</b> <button class=\"play\" data-say=\"Wielkanoc\">🔊</button>","Пасха"],
      ["<b>lany poniedziałek</b> <button class=\"play\" data-say=\"lany poniedziałek\">🔊</button>","обливной понедельник после Пасхи"],
      ["<b>imieniny</b> <button class=\"play\" data-say=\"imieniny\">🔊</button>","именины"]
    ],"star":0},
    "examples":[
      {"ru":"На Сочельник вся семья собирается вместе.","en":"Na <b>Wigilię</b> cała rodzina zbiera się razem.","say":"Na Wigilię cała rodzina zbiera się razem."},
      {"ru":"Новый год мы обычно встречаем у друзей.","en":"<b>Sylwestra</b> zwykle spędzamy u przyjaciół.","say":"Sylwestra zwykle spędzamy u przyjaciół."},
      {"ru":"На Пасху мы едем к бабушке.","en":"Na <b>Wielkanoc</b> jedziemy do babci.","say":"Na Wielkanoc jedziemy do babci."},
      {"ru":"Когда у тебя именины?","en":"Kiedy masz <b>imieniny</b>?","say":"Kiedy masz imieniny?"}
    ],
    "mistakes":[
      {"wrong":"Wigilia to dwudziesty piąty grudnia.","right":"<b>Wigilia</b> to wieczór dwudziestego czwartego grudnia.","why":"Wigilia — это сочельник, канун Рождества, а не сам праздник."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, какой это день.",
       "q":"<b>Wigilia</b> — это —","opts":["25 декабря, Рождество","вечер 24 декабря, сочельник","31 декабря"],"answer":1,
       "explain":"<b>Wigilia</b> — сочельник, вечер 24 декабря."},
      {"type":"choice","q":"<b>lany poniedziałek</b> — это —",
       "opts":["понедельник после Пасхи, когда обливают водой","первый рабочий день года","день всех святых"],"answer":0,
       "explain":"Он же <b>śmigus-dyngus</b> — обливной понедельник после Пасхи."},
      {"type":"type","howto":"<b>Что делать:</b> напиши одно слово.",
       "q":"«Пасха» по-польски","accept":["wielkanoc"],"placeholder":"Wielk…"}
    ],
    "mnemonic":"📅 Wigilia 24.12 · Boże Narodzenie 25–26.12 · Sylwester 31.12 · Wielkanoc весной · imieniny у каждого свои."
   },
   {
    "eyebrow":"Правило 2 · Вечер, которого ждут",
    "title":"<em>Opłatek</em>, первая звезда и двенадцать блюд",
    "paras":[
      "Сочельник начинается с неба: за стол садятся, когда на нём появляется <b>pierwsza gwiazdka</b> — первая звёздочка. До этого не едят.",
      "Первое, что происходит за столом, — не еда, а <b>opłatek</b>: тонкая белая пластинка, которую все делят между собой. <b>Dzielimy się opłatkiem</b> — каждый подходит к каждому, отламывает кусочек и говорит пожелания. Это самая тёплая и самая длинная часть вечера.",
      "На столе — <b>dwanaście potraw</b>, двенадцать блюд, и все без мяса: <b>barszcz z uszkami</b>, <b>karp</b>, <b>pierogi z kapustą i grzybami</b>, <b>kompot z suszu</b>, <b>makowiec</b>. И одно место остаётся пустым — <b>puste nakrycie</b> для неожиданного гостя.",
      "Потом <b>kolędy</b> (колядки), <b>prezenty pod choinką</b> и для многих — <b>pasterka</b>, ночная месса. Если тебя позвали на польскую Wigilię, помни главное правило вечера: пробовать нужно всё."
    ],
    "audio":"Сочельник начинается с неба: за стол садятся, когда появляется pierwsza gwiazdka, первая звёздочка. До этого не едят. Первое, что происходит за столом, — не еда, а opłatek: тонкая белая пластинка, которую все делят между собой. Dzielimy się opłatkiem: каждый подходит к каждому, отламывает кусочек и говорит пожелания. На столе dwanaście potraw, двенадцать блюд, и все без мяса: barszcz z uszkami, karp, pierogi z kapustą i grzybami, kompot z suszu, makowiec. И одно место остаётся пустым — puste nakrycie для неожиданного гостя. Потом kolędy, колядки, prezenty pod choinką и для многих pasterka, ночная месса. Главное правило вечера: пробовать нужно всё.",
    "table":{"rows":[
      ["<b>pierwsza gwiazdka</b> <button class=\"play\" data-say=\"pierwsza gwiazdka\">🔊</button>","первая звезда — сигнал садиться за стол"],
      ["<b>dzielić się opłatkiem</b> <button class=\"play\" data-say=\"dzielić się opłatkiem\">🔊</button>","делиться облаткой"],
      ["<b>dwanaście potraw</b> <button class=\"play\" data-say=\"dwanaście potraw\">🔊</button>","двенадцать блюд"],
      ["<b>barszcz z uszkami</b> <button class=\"play\" data-say=\"barszcz z uszkami\">🔊</button>","борщ с ушками"],
      ["<b>puste nakrycie</b> <button class=\"play\" data-say=\"puste nakrycie\">🔊</button>","пустой прибор для гостя"],
      ["<b>kolędy</b>, <b>pasterka</b> <button class=\"play\" data-say=\"kolędy, pasterka\">🔊</button>","колядки, ночная месса"]
    ],"star":1},
    "examples":[
      {"ru":"Садимся за стол, когда появится первая звезда.","en":"Siadamy do stołu, kiedy pojawi się <b>pierwsza gwiazdka</b>.","say":"Siadamy do stołu, kiedy pojawi się pierwsza gwiazdka."},
      {"ru":"Сначала мы делимся облаткой и говорим пожелания.","en":"Najpierw <b>dzielimy się opłatkiem</b> i składamy życzenia.","gloss":"dzielić się плюс творительный","say":"Najpierw dzielimy się opłatkiem i składamy życzenia."},
      {"ru":"На столе двенадцать блюд, и все без мяса.","en":"Na stole jest <b>dwanaście potraw</b> i wszystkie bez mięsa.","say":"Na stole jest dwanaście potraw i wszystkie bez mięsa."},
      {"ru":"Одно место всегда остаётся пустым.","en":"Jedno miejsce zawsze zostaje <b>puste</b>.","say":"Jedno miejsce zawsze zostaje puste."}
    ],
    "mistakes":[
      {"wrong":"Dzielimy się opłatek.","right":"Dzielimy się <b>opłatkiem</b>.","why":"dzielić się требует творительного падежа: opłatkiem, chlebem, radością."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж при dzielić się.",
       "q":"«Мы делимся облаткой» —","opts":["Dzielimy się opłatek","Dzielimy się opłatkiem","Dzielimy się opłatka"],"answer":1,
       "explain":"dzielić się идёт с творительным: <b>opłatkiem</b>."},
      {"type":"choice","q":"Когда садятся за стол в Сочельник?",
       "opts":["ровно в шесть вечера","когда появится первая звезда","после ночной мессы"],"answer":1,
       "explain":"Сигнал к началу — <b>pierwsza gwiazdka</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши два слова.",
       "q":"«двенадцать блюд»","accept":["dwanaście potraw","dwanascie potraw"],"placeholder":"dwanaście …"}
    ],
    "mnemonic":"⭐ pierwsza gwiazdka → opłatek → dwanaście potraw → kolędy → prezenty. Порядок вечера."
   },
   {
    "eyebrow":"Правило 3 · Пожелания",
    "title":"<em>Wesołych Świąt!</em> — почему родительный",
    "paras":[
      "Все польские пожелания стоят в родительном падеже, и объяснение простое: перед ними подразумевается <b>życzę</b> — «желаю». А глагол <b>życzyć</b> требует родительного. Отсюда <b>Wesołych Świąt!</b>, <b>Szczęśliwego Nowego Roku!</b>, <b>Wszystkiego najlepszego!</b>, <b>Zdrowia i szczęścia!</b>",
      "Русский делает ровно то же самое: «Счастливого Нового года!», «Всего наилучшего!», «Здоровья и счастья!» — тоже родительный и тоже с невысказанным «желаю». Конструкция переносится один в один.",
      "Полная форма — <b>życzyć komuś czegoś</b>: дательный человеку, родительный пожеланию. <b>Życzę Ci zdrowia.</b> <b>Życzę Państwu wesołych świąt.</b> А сам акт называется <b>składać życzenia</b> — «поздравлять», буквально «складывать пожелания».",
      "В том же родительном живут и повседневные пожелания: <b>Smacznego!</b> (приятного аппетита), <b>Miłego dnia!</b>, <b>Powodzenia!</b> (удачи), <b>Szerokiej drogi!</b> (счастливого пути). Заметил(а) закономерность? Тогда родительный тебе больше не страшен."
    ],
    "audio":"Все польские пожелания стоят в родительном падеже, и объяснение простое: перед ними подразумевается życzę, желаю. А глагол życzyć требует родительного. Отсюда wesołych świąt, szczęśliwego nowego roku, wszystkiego najlepszego, zdrowia i szczęścia. Русский делает ровно то же самое: счастливого Нового года, всего наилучшего, здоровья и счастья. Полная форма — życzyć komuś czegoś: дательный человеку, родительный пожеланию. Życzę ci zdrowia. Życzę państwu wesołych świąt. А сам акт называется składać życzenia, поздравлять. В том же родительном живут и повседневные пожелания: smacznego, miłego dnia, powodzenia, szerokiej drogi.",
    "table":{"rows":[
      ["<b>Wesołych Świąt!</b> <button class=\"play\" data-say=\"Wesołych Świąt!\">🔊</button>","С праздником! Весёлого Рождества!"],
      ["<b>Szczęśliwego Nowego Roku!</b> <button class=\"play\" data-say=\"Szczęśliwego Nowego Roku!\">🔊</button>","Счастливого Нового года!"],
      ["<b>Wszystkiego najlepszego!</b> <button class=\"play\" data-say=\"Wszystkiego najlepszego!\">🔊</button>","Всего наилучшего!"],
      ["<b>Zdrowia i szczęścia!</b> <button class=\"play\" data-say=\"Zdrowia i szczęścia!\">🔊</button>","Здоровья и счастья!"],
      ["<b>Smacznego! Powodzenia!</b> <button class=\"play\" data-say=\"Smacznego! Powodzenia!\">🔊</button>","Приятного аппетита! Удачи!"],
      ["<b>Życzę Ci zdrowia.</b> <button class=\"play\" data-say=\"Życzę Ci zdrowia\">🔊</button>","Желаю тебе здоровья. Дат. плюс род."]
    ],"star":5},
    "examples":[
      {"ru":"Весёлых праздников и счастливого Нового года!","en":"<b>Wesołych Świąt</b> i <b>Szczęśliwego Nowego Roku</b>!","say":"Wesołych Świąt i Szczęśliwego Nowego Roku!"},
      {"ru":"Желаю тебе здоровья и спокойных праздников.","en":"<b>Życzę Ci zdrowia</b> i spokojnych świąt.","say":"Życzę Ci zdrowia i spokojnych świąt."},
      {"ru":"Мы поздравили всю семью.","en":"<b>Złożyliśmy życzenia</b> całej rodzinie.","gloss":"składać życzenia komuś — дательный","say":"Złożyliśmy życzenia całej rodzinie."},
      {"ru":"Счастливого пути и удачи!","en":"<b>Szerokiej drogi</b> i <b>powodzenia</b>!","say":"Szerokiej drogi i powodzenia!"}
    ],
    "mistakes":[
      {"wrong":"Wesołe Święta!","right":"<b>Wesołych Świąt!</b>","why":"пожелание стоит в родительном: за ним стоит невысказанное życzę."},
      {"wrong":"Życzę Ci zdrowie.","right":"Życzę Ci <b>zdrowia</b>.","why":"życzyć требует родительного падежа для самого пожелания."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж пожеланий.",
       "q":"«Весёлого Рождества!» —","opts":["Wesołe Święta!","Wesołych Świąt!","Wesołym Świętom!"],"answer":1,
       "explain":"Пожелание — родительный: <b>Wesołych Świąt!</b>"},
      {"type":"choice","howto":"<b>Что делать:</b> проверь оба падежа.",
       "q":"«Желаю тебе здоровья» —","opts":["Życzę Ci zdrowie","Życzę Ci zdrowia","Życzę Cię zdrowia"],"answer":1,
       "explain":"Человеку — дательный (Ci), пожеланию — родительный (<b>zdrowia</b>)."},
      {"type":"type","howto":"<b>Что делать:</b> напиши поздравление из трёх слов.",
       "q":"«Счастливого Нового года!»","accept":["szczęśliwego nowego roku","szczesliwego nowego roku","szczęśliwego nowego roku!"],"placeholder":"Szczęśliwego …"}
    ],
    "mnemonic":"🎄 За каждым пожеланием стоит невысказанное życzę — потому и родительный. Как в русском."
   },
   {
    "eyebrow":"Правило 4 · Именины и остальной год",
    "title":"<em>Sto lat!</em> и другие поводы",
    "paras":[
      "<b>Imieniny</b> — день святого, чьё имя ты носишь. В календаре у каждого дня свои имена, и поздравляют без приглашения: коллеги, соседи, продавщица в знакомом магазине. Формула: <b>Z okazji imienin życzę Ci wszystkiego najlepszego.</b>",
      "На именинах и днях рождения поют <b>Sto lat!</b> — «Сто лет!». Это и песня, и тост, и универсальное поздравление. Виновник торжества называется <b>solenizant</b> или <b>solenizantka</b>.",
      "Пасха коротко: <b>święconka</b> — корзинка с едой, которую освящают в субботу; <b>pisanki</b> — крашеные яйца; <b>mazurek</b> — плоский праздничный пирог. И <b>Wesołego Alleluja!</b> — пасхальное пожелание, снова в родительном.",
      "И новогоднее: <b>Sylwestra</b> проводят с друзьями или на площади, а ровно в полночь говорят <b>Szczęśliwego Nowego Roku!</b> Год за годом — одни и те же слова, и в этом весь смысл традиции."
    ],
    "audio":"Imieniny — день святого, чьё имя ты носишь. В календаре у каждого дня свои имена, и поздравляют без приглашения: коллеги, соседи, продавщица в знакомом магазине. Формула: z okazji imienin życzę ci wszystkiego najlepszego. На именинах и днях рождения поют Sto lat, сто лет. Это и песня, и тост, и универсальное поздравление. Виновник торжества называется solenizant или solenizantka. Пасха коротко: święconka — корзинка с едой, которую освящают в субботу; pisanki — крашеные яйца; mazurek — плоский праздничный пирог. И Wesołego Alleluja, пасхальное пожелание, снова в родительном. А ровно в полночь на Сильвестра говорят: Szczęśliwego Nowego Roku.",
    "table":{"rows":[
      ["<b>Sto lat!</b> <button class=\"play\" data-say=\"Sto lat!\">🔊</button>","Сто лет! — песня и поздравление"],
      ["<b>solenizant / solenizantka</b> <button class=\"play\" data-say=\"solenizant, solenizantka\">🔊</button>","именинник, именинница"],
      ["<b>Z okazji imienin…</b> <button class=\"play\" data-say=\"Z okazji imienin\">🔊</button>","По случаю именин…"],
      ["<b>święconka</b>, <b>pisanki</b> <button class=\"play\" data-say=\"święconka, pisanki\">🔊</button>","пасхальная корзинка, крашеные яйца"],
      ["<b>mazurek</b> <button class=\"play\" data-say=\"mazurek\">🔊</button>","пасхальный пирог"],
      ["<b>Wesołego Alleluja!</b> <button class=\"play\" data-say=\"Wesołego Alleluja!\">🔊</button>","пасхальное поздравление"]
    ],"star":-1},
    "examples":[
      {"ru":"По случаю именин желаю тебе всего наилучшего.","en":"<b>Z okazji imienin</b> życzę Ci wszystkiego najlepszego.","say":"Z okazji imienin życzę Ci wszystkiego najlepszego."},
      {"ru":"У бабушки именины двадцать шестого июля.","en":"Babcia ma <b>imieniny</b> dwudziestego szóstego lipca.","say":"Babcia ma imieniny dwudziestego szóstego lipca."},
      {"ru":"В субботу мы освящаем пасхальную корзинку.","en":"W sobotę święcimy <b>święconkę</b>.","say":"W sobotę święcimy święconkę."},
      {"ru":"В полночь все говорят: счастливого Нового года!","en":"O północy wszyscy mówią: <b>Szczęśliwego Nowego Roku!</b>","say":"O północy wszyscy mówią: Szczęśliwego Nowego Roku!"}
    ],
    "mistakes":[
      {"wrong":"Z okazji imieniny życzę Ci…","right":"<b>Z okazji imienin</b> życzę Ci…","why":"после z okazji — родительный падеж: imienin, urodzin, świąt."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после z okazji.",
       "q":"«По случаю именин» —","opts":["Z okazji imieniny","Z okazji imienin","Z okazji imieninom"],"answer":1,
       "explain":"После z okazji — родительный: <b>imienin</b>."},
      {"type":"choice","q":"<b>solenizantka</b> — это —",
       "opts":["именинница","гостья","хозяйка дома"],"answer":0,
       "explain":"<b>Solenizantka</b> — та, у кого сегодня именины или день рождения."},
      {"type":"speak","howto":"Нажми микрофон и поздравь вслух — так, как поздравляют за столом.",
       "target":"Wesołych Świąt i szczęśliwego Nowego Roku!","sub":"весёлых праздников и счастливого Нового года!","want":"Wesołych Świąt i szczęśliwego Nowego Roku!"}
    ],
    "mnemonic":"🎉 Sto lat! · Z okazji imienin… · Wesołego Alleluja! · Szczęśliwego Nowego Roku! Четыре повода за год."
   }
 ],
 "dialogue":{
   "intro":"Сочельник у родителей Марека. Анна впервые за этим столом — и всё делает правильно.",
   "lines":[
     {"who":"B","name":"Barbara","side":"left","en":"Aniu, siadaj koło mnie. Czekamy na pierwszą gwiazdkę.","ru":"Аня, садись рядом со мной. Ждём первую звезду.",
      "words":[["Aniu","Аня, звательный"],["pierwszą gwiazdkę","первую звезду"]]},
     {"who":"A","name":"Anna","side":"right","en":"A to puste miejsce? Ktoś jeszcze przyjdzie?","ru":"А это пустое место? Кто-то ещё придёт?",
      "words":[["puste miejsce","пустое место"],["Ktoś","кто-то"]]},
     {"who":"B","name":"Barbara","side":"left","en":"To nakrycie dla niespodziewanego gościa. Taka tradycja.","ru":"Это прибор для неожиданного гостя. Такая традиция.",
      "words":[["nakrycie","прибор"],["niespodziewanego gościa","неожиданного гостя"]]},
     {"who":"M","name":"Marek","side":"right","en":"Najpierw dzielimy się opłatkiem, potem jemy. Nie odwrotnie.","ru":"Сначала делимся облаткой, потом едим. Не наоборот.",
      "words":[["dzielimy się opłatkiem","делимся облаткой"],["Nie odwrotnie","не наоборот"]]},
     {"who":"B","name":"Barbara","side":"left","en":"Aniu, życzę Ci zdrowia i spokoju. I żebyś zdała ten egzamin.","ru":"Аня, желаю тебе здоровья и покоя. И чтобы ты сдала этот экзамен.",
      "words":[["życzę Ci zdrowia","желаю тебе здоровья"],["żebyś zdała","чтобы ты сдала"]]},
     {"who":"A","name":"Anna","side":"right","en":"Dziękuję. Wesołych Świąt całej rodzinie.","ru":"Спасибо. Весёлых праздников всей семье.",
      "words":[["Wesołych Świąt","весёлых праздников"],["całej rodzinie","всей семье"]]},
     {"who":"M","name":"Marek","side":"right","en":"Na stole jest dwanaście potraw. Trzeba spróbować wszystkich.","ru":"На столе двенадцать блюд. Нужно попробовать все.",
      "words":[["dwanaście potraw","двенадцать блюд"],["spróbować","попробовать"]]},
     {"who":"A","name":"Anna","side":"right","en":"Wszystkich? Nawet karpia i kompotu z suszu?","ru":"Все? Даже карпа и компот из сухофруктов?",
      "words":[["karpia","карпа"],["kompotu z suszu","компота из сухофруктов"]]},
     {"who":"B","name":"Barbara","side":"left","en":"Wszystkich. Inaczej cały rok będzie chudy.","ru":"Все. Иначе весь год будет тощим.",
      "words":[["Inaczej","иначе"],["chudy","тощий"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — поздравление у лифта. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Pani Krystyno, dziś ma pani imieniny!","ru":"Пани Кристина, у вас сегодня именины!"},
     {"who":"B","en":"Pamiętał pan? Nikt już nie pamięta.","ru":"Вы помнили? Уже никто не помнит."},
     {"who":"A","en":"Wszystkiego najlepszego i dużo zdrowia.","ru":"Всего наилучшего и много здоровья."},
     {"who":"B","en":"Dziękuję. Proszę wpaść na kawę i ciasto.","ru":"Спасибо. Заходите на кофе с пирогом."},
     {"who":"A","en":"Z przyjemnością. Sto lat!","ru":"С удовольствием. Сто лет!"}
   ]
 },
 "vocab":{
   "intro":"Слова дня — праздники, традиции и пожелания в родительном.",
   "items":[
     {"en":"Wigilia","ru":"сочельник, вечер 24 декабря","ex":"Na Wigilię cała rodzina jest razem."},
     {"en":"Boże Narodzenie","ru":"Рождество","ex":"Boże Narodzenie to 25 grudnia."},
     {"en":"Wielkanoc","ru":"Пасха","ex":"Na Wielkanoc jedziemy do babci."},
     {"en":"Sylwester","ru":"новогодняя ночь","ex":"Sylwestra spędzamy u przyjaciół."},
     {"en":"imieniny","ru":"именины","ex":"Kiedy masz imieniny?"},
     {"en":"opłatek","ru":"облатка","ex":"Dzielimy się opłatkiem."},
     {"en":"pierwsza gwiazdka","ru":"первая звезда","ex":"Czekamy na pierwszą gwiazdkę."},
     {"en":"kolędy","ru":"колядки","ex":"Po kolacji śpiewamy kolędy."},
     {"en":"składać życzenia","ru":"поздравлять","ex":"Złożyliśmy życzenia całej rodzinie."},
     {"en":"Wesołych Świąt!","ru":"весёлых праздников!","ex":"Wesołych Świąt i wszystkiego dobrego!"},
     {"en":"Szczęśliwego Nowego Roku!","ru":"счастливого Нового года!","ex":"O północy: Szczęśliwego Nowego Roku!"},
     {"en":"Sto lat!","ru":"сто лет! — поздравление","ex":"Sto lat, solenizantko!"}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["Wigilia","сочельник"],["opłatek","облатка"],["Wesołych Świąt!","весёлых праздников!"],["imieniny","именины"]]
 },
 "reading":{
   "intro":"Прочитай и послушай рассказ Анны о её первом польском Сочельнике. Пожелания в тексте — все в родительном падеже.",
   "title":"Pierwsza Wigilia",
   "sentences":["W tym roku pierwszy raz byłam na polskiej Wigilii.","Rodzice Marka mieszkają w małym domku pod Krakowem.","Do stołu usiedliśmy dopiero wtedy, gdy na niebie pojawiła się pierwsza gwiazdka.","Jedno nakrycie zostało puste — dla niespodziewanego gościa.","Najpierw wszyscy dzielili się opłatkiem i składali sobie życzenia.","Mama Marka życzyła mi zdrowia, spokoju i zdanego egzaminu.","Potem była kolacja: dwanaście potraw i żadnego mięsa.","Spróbowałam wszystkiego, nawet kompotu z suszu.","Po kolacji śpiewaliśmy kolędy, a prezenty leżały pod choinką.","Wracając do domu, myślałam, że tęsknię za swoim domem trochę mniej niż rok temu."],
   "translation":"В этом году я впервые была на польском Сочельнике. Родители Марека живут в маленьком домике под Краковом. За стол мы сели только тогда, когда на небе появилась первая звезда. Один прибор остался пустым — для неожиданного гостя. Сначала все делились облаткой и говорили друг другу пожелания. Мама Марека пожелала мне здоровья, покоя и сданного экзамена. Потом был ужин: двенадцать блюд и никакого мяса. Я попробовала всё, даже компот из сухофруктов. После ужина мы пели колядки, а подарки лежали под ёлкой. Возвращаясь домой, я думала, что скучаю по своему дому чуть меньше, чем год назад."
 },
 "quiz":{
   "intro":"Пять вопросов — и польский праздничный календарь твой.",
   "items":[
     {"q":"1. <b>Wigilia</b> — это —","opts":["25 декабря, Рождество","вечер 24 декабря, сочельник","31 декабря"],"answer":1,
      "explain":"<b>Wigilia</b> — сочельник, главный вечер года."},
     {"q":"2. «Мы делимся облаткой» —","opts":["Dzielimy się opłatek","Dzielimy się opłatkiem","Dzielimy się opłatka"],"answer":1,
      "explain":"dzielić się требует творительного: <b>opłatkiem</b>."},
     {"q":"3. «Весёлого Рождества!» —","opts":["Wesołe Święta!","Wesołych Świąt!","Wesołym Świętom!"],"answer":1,
      "explain":"Пожелания стоят в родительном: <b>Wesołych Świąt!</b>"},
     {"q":"4. «Желаю тебе здоровья» —","opts":["Życzę Ci zdrowie","Życzę Ci zdrowia","Życzę Cię zdrowia"],"answer":1,
      "explain":"Человеку — дательный, пожеланию — родительный: <b>zdrowia</b>."},
     {"q":"5. «По случаю именин» —","opts":["Z okazji imieniny","Z okazji imienin","Z okazji imieninom"],"answer":1,
      "explain":"После z okazji — родительный: <b>imienin</b>."}
   ]
 },
 "essay":{
   "intro":"Расскажи о празднике, который для тебя важнее всех.",
   "prompt":"Напиши 5–6 предложений о своём любимом празднике: когда он, кто собирается, что стоит на столе, что вы делаете и какое пожелание в этот день говорят. Одно пожелание напиши по-польски, в родительном падеже.",
   "hint":"Опора: Najważniejsze święto to… · Zbieramy się… · Na stole jest… · Składamy sobie życzenia… · Wszystkiego najlepszego! 🎄",
   "example":"Najważniejsze święto w moim domu to Nowy Rok. Zbieramy się całą rodziną, czasem przyjeżdżają też sąsiedzi. Na stole jest zawsze za dużo jedzenia i zawsze ten sam sernik. O północy składamy sobie życzenia i mówimy: Szczęśliwego Nowego Roku! Potem wychodzimy na dwór i patrzymy na fajerwerki. Mówiąc szczerze, najbardziej lubię ten moment, kiedy wszyscy milkną przed dwunastą."
 }
},
"28": {
 "day":28,"week":"04",
 "themeRu":"Медиа и мнения",
 "themeEn":"Media i opinie",
 "intro":"Спор о том, откуда брать новости, в польской семье может длиться дольше самого ужина. Сегодня берём каркас взрослого мнения: во-первых, во-вторых, с одной стороны, с другой стороны, несмотря на это. Все эти скрепы почти дословно совпадают с русскими — и именно они превращают набор фраз в текст.",
 "introAudio":"Спор о том, откуда брать новости, в польской семье может длиться дольше самого ужина. Сегодня берём каркас взрослого мнения: во-первых, во-вторых, с одной стороны, с другой стороны, несмотря на это. Все эти скрепы почти дословно совпадают с русскими — и именно они превращают набор фраз в текст.",
 "goals":[
   "Выстраивать аргументы: <b>po pierwsze, po drugie, poza tym</b>",
   "Показывать две стороны: <b>z jednej strony… z drugiej strony… mimo to</b>",
   "Соглашаться и спорить точнее: <b>zgadzam się częściowo, mam wątpliwości</b>",
   "Говорить о медиа: <b>źródło, nagłówek, portal informacyjny</b>"
 ],
 "learned":[
   "Выстроил(а) аргументы: po pierwsze, po drugie, poza tym",
   "Показал(а) две стороны: z jednej strony, z drugiej strony, mimo to",
   "Согласился(лась) и поспорил(а) точнее: zgadzam się częściowo, mam wątpliwości",
   "Поговорил(а) о медиа: źródło, nagłówek, portal informacyjny"
 ],
 "review":{
   "intro":"Вчерашние праздники — на разминку: два падежа пожеланий и одна традиция. Плюс вид глагола, который решает всё.",
   "introAudio":"Вчерашние праздники — на разминку: два падежа пожеланий и одна традиция. Плюс вид глагола, который решает всё.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж пожеланий.",
      "q":"«Счастливого Нового года!» —","opts":["Szczęśliwy Nowy Rok!","Szczęśliwego Nowego Roku!","Szczęśliwemu Nowemu Roku!"],"answer":1,
      "explain":"Пожелание — родительный: <b>Szczęśliwego Nowego Roku!</b>"},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж при dzielić się.",
      "q":"«Они делятся облаткой» —","opts":["Dzielą się opłatek","Dzielą się opłatkiem","Dzielą się opłatka"],"answer":1,
      "explain":"dzielić się идёт с творительным: <b>opłatkiem</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> процесс или результат?",
      "q":"Wczoraj cały wieczór ___ artykuł. (читала весь вечер)","opts":["przeczytałam","czytałam","czytam"],"answer":1,
      "explain":"«Целый вечер» — процесс: <b>czytałam</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Желаю тебе здоровья и покоя»</b>","answer":"Życzę Ci zdrowia i spokoju"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Порядок аргументов",
    "title":"<em>Po pierwsze, po drugie…</em>",
    "paras":[
      "Мнение становится текстом, когда у него есть нумерация. <b>Po pierwsze…</b> <b>Po drugie…</b> <b>Po trzecie…</b> Русские «во-первых, во-вторых» устроены так же, и переносятся без единой поправки.",
      "Главный аргумент выносят вперёд словом <b>przede wszystkim</b> — «прежде всего». Дополнительный присоединяют через <b>poza tym</b> или <b>oprócz tego</b> — «кроме того».",
      "Закрывают текст двумя способами: <b>na koniec</b> («в конце») и знакомым со дня 23 деепричастием <b>podsumowując</b> («подводя итог»). Второй звучит взрослее и в письменном тексте выглядит лучше.",
      "Внутри аргумента работают уже знакомые связки: <b>dlatego</b> (поэтому), <b>ponieważ</b> и <b>bo</b> (потому что), <b>na przykład</b> (например). Три слова — и абзац держится."
    ],
    "audio":"Мнение становится текстом, когда у него есть нумерация. Po pierwsze, po drugie, po trzecie. Русские «во-первых, во-вторых» устроены так же и переносятся без единой поправки. Главный аргумент выносят вперёд словом przede wszystkim, прежде всего. Дополнительный присоединяют через poza tym или oprócz tego, кроме того. Закрывают текст двумя способами: na koniec, в конце, и знакомым со дня двадцать три деепричастием podsumowując, подводя итог. Внутри аргумента работают связки: dlatego — поэтому, ponieważ и bo — потому что, na przykład — например.",
    "table":{"rows":[
      ["<b>Po pierwsze…</b> <button class=\"play\" data-say=\"Po pierwsze\">🔊</button>","Во-первых…"],
      ["<b>Po drugie…</b> <button class=\"play\" data-say=\"Po drugie\">🔊</button>","Во-вторых…"],
      ["<b>Przede wszystkim…</b> <button class=\"play\" data-say=\"Przede wszystkim\">🔊</button>","Прежде всего…"],
      ["<b>Poza tym…</b> <button class=\"play\" data-say=\"Poza tym\">🔊</button>","Кроме того…"],
      ["<b>Na przykład…</b> <button class=\"play\" data-say=\"Na przykład\">🔊</button>","Например…"],
      ["<b>Podsumowując…</b> <button class=\"play\" data-say=\"Podsumowując\">🔊</button>","Подводя итог…"]
    ],"star":-1},
    "examples":[
      {"ru":"Во-первых, это дешевле. Во-вторых, быстрее.","en":"<b>Po pierwsze</b>, to tańsze. <b>Po drugie</b>, szybsze.","say":"Po pierwsze, to tańsze. Po drugie, szybsze."},
      {"ru":"Прежде всего, у меня нет на это времени.","en":"<b>Przede wszystkim</b> nie mam na to czasu.","say":"Przede wszystkim nie mam na to czasu."},
      {"ru":"Кроме того, там всегда очередь.","en":"<b>Poza tym</b> zawsze jest tam kolejka.","say":"Poza tym zawsze jest tam kolejka."},
      {"ru":"Подводя итог: я бы этого не делал.","en":"<b>Podsumowując</b>: nie zrobiłbym tego.","gloss":"деепричастие из дня 23","say":"Podsumowując, nie zrobiłbym tego."}
    ],
    "mistakes":[
      {"wrong":"Pierwszy, to tańsze.","right":"<b>Po pierwsze</b>, to tańsze.","why":"нумерация аргументов идёт с предлогом po: po pierwsze, po drugie."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни форму нумерации.",
       "q":"«Во-первых, это дешевле» —","opts":["Pierwszy, to tańsze","Po pierwsze, to tańsze","Za pierwsze, to tańsze"],"answer":1,
       "explain":"Только <b>po pierwsze</b> — как русское «во-первых»."},
      {"type":"choice","q":"<b>Poza tym</b> значит —",
       "opts":["кроме того","несмотря на это","прежде всего"],"answer":0,
       "explain":"<b>Poza tym</b> — кроме того. Несмотря на это — mimo to."},
      {"type":"type","howto":"<b>Что делать:</b> напиши два слова.",
       "q":"«Во-вторых…»","accept":["po drugie","po drugie,"],"placeholder":"Po …"}
    ],
    "mnemonic":"1️⃣ Po pierwsze · po drugie · poza tym · podsumowując. Каркас любого мнения."
   },
   {
    "eyebrow":"Правило 2 · Две стороны",
    "title":"<em>Z jednej strony… z drugiej strony…</em>",
    "paras":[
      "Взрослое мнение почти всегда двустороннее, и для этого есть готовая пара: <b>Z jednej strony</b> to wygodne, <b>z drugiej strony</b> niebezpieczne. Русское «с одной стороны… с другой стороны…» — та же конструкция целиком.",
      "Возражение самому себе делают словами <b>jednak</b> (однако), <b>natomiast</b> (зато, тогда как) и <b>mimo to</b> (несмотря на это). <b>Jest drogo, mimo to warto.</b>",
      "Здесь спрятана ловушка. <b>Mimo to</b> — «несмотря на это», после него идёт целое предложение. <b>Mimo że</b> — «хотя», и это уже союз придаточного: <b>Mimo że było drogo, kupiliśmy.</b> А <b>pomimo</b> берёт существительное в родительном: <b>pomimo trudności</b>.",
      "И самое частое противопоставление в текстах о медиа: <b>w przeciwieństwie do</b> плюс родительный — «в отличие от». <b>W przeciwieństwie do telewizji, internet daje wybór.</b>"
    ],
    "audio":"Взрослое мнение почти всегда двустороннее, и для этого есть готовая пара: z jednej strony to wygodne, z drugiej strony niebezpieczne. Русское «с одной стороны, с другой стороны» — та же конструкция целиком. Возражение самому себе делают словами jednak — однако, natomiast — зато, и mimo to — несмотря на это. Jest drogo, mimo to warto. Здесь спрятана ловушка. Mimo to значит «несмотря на это», после него идёт целое предложение. Mimo że значит «хотя», это союз придаточного: mimo że było drogo, kupiliśmy. А pomimo берёт существительное в родительном: pomimo trudności. И самое частое противопоставление в текстах о медиа: w przeciwieństwie do плюс родительный, в отличие от. W przeciwieństwie do telewizji, internet daje wybór.",
    "table":{"rows":[
      ["<b>Z jednej strony</b>… <button class=\"play\" data-say=\"Z jednej strony\">🔊</button>","С одной стороны…"],
      ["<b>Z drugiej strony</b>… <button class=\"play\" data-say=\"Z drugiej strony\">🔊</button>","С другой стороны…"],
      ["Jest drogo, <b>mimo to</b> warto. <button class=\"play\" data-say=\"Jest drogo, mimo to warto\">🔊</button>","Дорого, несмотря на это стоит того."],
      ["<b>Mimo że</b> było drogo, kupiliśmy. <button class=\"play\" data-say=\"Mimo że było drogo, kupiliśmy\">🔊</button>","Хотя было дорого, мы купили."],
      ["<b>W przeciwieństwie do</b> telewizji… <button class=\"play\" data-say=\"W przeciwieństwie do telewizji\">🔊</button>","В отличие от телевидения…"],
      ["<b>Natomiast</b> w internecie… <button class=\"play\" data-say=\"Natomiast w internecie\">🔊</button>","Зато в интернете…"]
    ],"star":4},
    "examples":[
      {"ru":"С одной стороны, это удобно, с другой — опасно.","en":"<b>Z jednej strony</b> to wygodne, <b>z drugiej strony</b> niebezpieczne.","say":"Z jednej strony to wygodne, z drugiej strony niebezpieczne."},
      {"ru":"Времени мало, несмотря на это я попробую.","en":"Mam mało czasu, <b>mimo to</b> spróbuję.","say":"Mam mało czasu, mimo to spróbuję."},
      {"ru":"Хотя у меня мало времени, я попробую.","en":"<b>Mimo że</b> mam mało czasu, spróbuję.","gloss":"mimo że вводит придаточное","say":"Mimo że mam mało czasu, spróbuję."},
      {"ru":"В отличие от газеты, портал обновляется каждый час.","en":"<b>W przeciwieństwie do gazety</b> portal zmienia się co godzinę.","gloss":"do плюс родительный","say":"W przeciwieństwie do gazety portal zmienia się co godzinę."}
    ],
    "mistakes":[
      {"wrong":"W przeciwieństwie do telewizja…","right":"W przeciwieństwie do <b>telewizji</b>…","why":"после do — родительный падеж, как всегда с этим предлогом."},
      {"wrong":"Mimo to mam mało czasu, spróbuję.","right":"<b>Mimo że</b> mam mało czasu, spróbuję.","why":"перед придаточным нужен союз mimo że. Mimo to стоит между двумя самостоятельными предложениями."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, что идёт после связки.",
       "q":"«Хотя было дорого, мы купили» —","opts":["Mimo to było drogo, kupiliśmy","Mimo że było drogo, kupiliśmy","Pomimo było drogo, kupiliśmy"],"answer":1,
       "explain":"Придаточное вводит <b>mimo że</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после do.",
       "q":"«В отличие от телевидения» —","opts":["W przeciwieństwie do telewizja","W przeciwieństwie do telewizji","W przeciwieństwie telewizji"],"answer":1,
       "explain":"После do — родительный: <b>telewizji</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«С одной стороны, это удобно»</b>","answer":"Z jednej strony to wygodne"}
    ],
    "mnemonic":"⚖️ Z jednej strony… z drugiej strony… mimo to. Mimo TO — предложение, mimo ŻE — придаточное."
   },
   {
    "eyebrow":"Правило 3 · Согласие с оттенками",
    "title":"<em>Zgadzam się częściowo</em>",
    "paras":[
      "Полное согласие ты умеешь с A2: <b>Masz rację.</b> <b>Zgadzam się z tobą.</b> Обрати внимание на падеж: <b>zgadzać się z</b> плюс творительный — <b>z tobą</b>, <b>z tym poglądem</b>.",
      "Частичное согласие — признак взрослого разговора: <b>Zgadzam się tylko częściowo.</b> <b>Masz rację, ale…</b> <b>To prawda, jednak…</b> Такая формулировка спасает почти любой спор.",
      "Осторожное мнение: <b>Wydaje mi się, że…</b> (мне кажется), <b>Mam wątpliwości.</b> (у меня сомнения), <b>Trudno powiedzieć.</b> (трудно сказать). И уверенное: <b>Jestem przekonany, że…</b> или <b>Jestem przekonana, że…</b>",
      "И глагол убеждения: <b>przekonywać kogoś do czegoś</b>. <b>Nie przekonasz mnie do tego.</b> — «Ты меня в этом не убедишь». Винительный человеку, <b>do</b> плюс родительный — предмету спора."
    ],
    "audio":"Полное согласие ты умеешь с A2: masz rację, zgadzam się z tobą. Обрати внимание на падеж: zgadzać się z плюс творительный — z tobą, z tym poglądem. Частичное согласие — признак взрослого разговора: zgadzam się tylko częściowo; masz rację, ale; to prawda, jednak. Осторожное мнение: wydaje mi się, że — мне кажется; mam wątpliwości — у меня сомнения; trudno powiedzieć. И уверенное: jestem przekonany, że, или jestem przekonana, że. И глагол убеждения: przekonywać kogoś do czegoś. Nie przekonasz mnie do tego — ты меня в этом не убедишь.",
    "table":{"rows":[
      ["<b>Zgadzam się z tobą.</b> <button class=\"play\" data-say=\"Zgadzam się z tobą\">🔊</button>","Я с тобой согласен. z плюс творительный"],
      ["<b>Zgadzam się częściowo.</b> <button class=\"play\" data-say=\"Zgadzam się częściowo\">🔊</button>","Согласен частично."],
      ["<b>Wydaje mi się, że…</b> <button class=\"play\" data-say=\"Wydaje mi się, że\">🔊</button>","Мне кажется, что…"],
      ["<b>Mam wątpliwości.</b> <button class=\"play\" data-say=\"Mam wątpliwości\">🔊</button>","У меня есть сомнения."],
      ["<b>Trudno powiedzieć.</b> <button class=\"play\" data-say=\"Trudno powiedzieć\">🔊</button>","Трудно сказать."],
      ["<b>Nie przekonasz mnie do tego.</b> <button class=\"play\" data-say=\"Nie przekonasz mnie do tego\">🔊</button>","Ты меня в этом не убедишь."]
    ],"star":1},
    "examples":[
      {"ru":"Я согласна с тобой, но только отчасти.","en":"<b>Zgadzam się z tobą</b>, ale tylko <b>częściowo</b>.","say":"Zgadzam się z tobą, ale tylko częściowo."},
      {"ru":"Мне кажется, что это преувеличение.","en":"<b>Wydaje mi się, że</b> to przesada.","say":"Wydaje mi się, że to przesada."},
      {"ru":"Я убеждена, что стоит проверять источники.","en":"<b>Jestem przekonana, że</b> warto sprawdzać źródła.","say":"Jestem przekonana, że warto sprawdzać źródła."},
      {"ru":"Ты меня в этом не убедишь.","en":"<b>Nie przekonasz mnie do tego.</b>","say":"Nie przekonasz mnie do tego."}
    ],
    "mistakes":[
      {"wrong":"Zgadzam się tobie.","right":"Zgadzam się <b>z tobą</b>.","why":"zgadzać się идёт с предлогом z и творительным падежом."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни предлог и падеж.",
       "q":"«Я с тобой согласен» —","opts":["Zgadzam się tobie","Zgadzam się z tobą","Zgadzam się o tobie"],"answer":1,
       "explain":"<b>Zgadzać się z</b> плюс творительный: z tobą."},
      {"type":"choice","q":"<b>Mam wątpliwości</b> значит —",
       "opts":["я уверен","у меня есть сомнения","я согласен полностью"],"answer":1,
       "explain":"<b>Wątpliwości</b> — сомнения."},
      {"type":"speak","howto":"Нажми микрофон и скажи это вслух — вежливое несогласие.",
       "target":"Zgadzam się tylko częściowo. Wydaje mi się, że to przesada.","sub":"я согласен только отчасти. Мне кажется, это преувеличение","want":"Zgadzam się tylko częściowo. Wydaje mi się, że to przesada."}
    ],
    "mnemonic":"🤝 Masz rację, ale… · Zgadzam się częściowo · Wydaje mi się, że… Три способа не поссориться."
   },
   {
    "eyebrow":"Правило 4 · Слова о медиа",
    "title":"<em>Źródło, nagłówek, portal</em>",
    "paras":[
      "Базовый словарь темы: <b>wiadomości</b> (новости), <b>artykuł</b> (статья), <b>nagłówek</b> (заголовок), <b>źródło</b> (источник), <b>portal informacyjny</b> (новостной портал), <b>dziennikarz</b> и <b>dziennikarka</b>, <b>reklama</b>, <b>media społecznościowe</b> (соцсети).",
      "Что с этим делают: <b>sprawdzać źródła</b> (проверять источники), <b>śledzić wiadomości</b> (следить за новостями), <b>udostępniać</b> (делиться, репостить), <b>komentować</b>. И то, чего стараются избегать: <b>fałszywe informacje</b> — ложные сообщения.",
      "Полезная лексика для оценки текста: <b>rzetelny</b> (добросовестный, надёжный), <b>stronniczy</b> (пристрастный), <b>przesada</b> (преувеличение), <b>sensacja</b>.",
      "И готовая рамка для целого абзаца: <b>Moim zdaniem</b> warto sprawdzać źródła. <b>Po pierwsze</b>, nagłówki często przesadzają. <b>Po drugie</b>, w mediach społecznościowych każdy jest dziennikarzem. <b>Podsumowując</b>: czytam, ale nie wierzę od razu. Четыре предложения — и мнение готово."
    ],
    "audio":"Базовый словарь темы: wiadomości — новости, artykuł — статья, nagłówek — заголовок, źródło — источник, portal informacyjny, dziennikarz и dziennikarka, reklama, media społecznościowe — соцсети. Что с этим делают: sprawdzać źródła — проверять источники, śledzić wiadomości — следить за новостями, udostępniać — делиться, komentować. И то, чего стараются избегать: fałszywe informacje. Полезная лексика для оценки: rzetelny — надёжный, stronniczy — пристрастный, przesada — преувеличение, sensacja. И готовая рамка для целого абзаца: moim zdaniem warto sprawdzać źródła. Po pierwsze, nagłówki często przesadzają. Po drugie, w mediach społecznościowych każdy jest dziennikarzem. Podsumowując: czytam, ale nie wierzę od razu.",
    "table":{"rows":[
      ["<b>wiadomości</b> <button class=\"play\" data-say=\"wiadomości\">🔊</button>","новости"],
      ["<b>nagłówek</b> <button class=\"play\" data-say=\"nagłówek\">🔊</button>","заголовок"],
      ["<b>źródło</b> <button class=\"play\" data-say=\"źródło\">🔊</button>","источник"],
      ["<b>sprawdzać źródła</b> <button class=\"play\" data-say=\"sprawdzać źródła\">🔊</button>","проверять источники"],
      ["<b>media społecznościowe</b> <button class=\"play\" data-say=\"media społecznościowe\">🔊</button>","социальные сети"],
      ["<b>fałszywe informacje</b> <button class=\"play\" data-say=\"fałszywe informacje\">🔊</button>","ложные сообщения"]
    ],"star":3},
    "examples":[
      {"ru":"Заголовок обещал больше, чем статья.","en":"<b>Nagłówek</b> obiecywał więcej niż <b>artykuł</b>.","say":"Nagłówek obiecywał więcej niż artykuł."},
      {"ru":"Стоит проверять источники, прежде чем делиться.","en":"Warto <b>sprawdzać źródła</b>, zanim się coś udostępni.","say":"Warto sprawdzać źródła, zanim się coś udostępni."},
      {"ru":"По-моему, эта статья слишком пристрастна.","en":"<b>Moim zdaniem</b> ten artykuł jest zbyt <b>stronniczy</b>.","say":"Moim zdaniem ten artykuł jest zbyt stronniczy."},
      {"ru":"В соцсетях каждый — журналист.","en":"W <b>mediach społecznościowych</b> każdy jest dziennikarzem.","gloss":"предложный мн. — день 9","say":"W mediach społecznościowych każdy jest dziennikarzem."}
    ],
    "mistakes":[
      {"wrong":"Sprawdzam źródło informację.","right":"Sprawdzam <b>źródło informacji</b>.","why":"«источник информации» — второе слово в родительном падеже."}
    ],
    "tasks":[
      {"type":"choice","q":"<b>nagłówek</b> — это —",
       "opts":["источник","заголовок","реклама"],"answer":1,
       "explain":"<b>Nagłówek</b> — заголовок статьи."},
      {"type":"choice","howto":"<b>Что делать:</b> собери каркас абзаца.",
       "q":"Чем лучше закончить письменное мнение?","opts":["Podsumowując, czytam, ale nie wierzę od razu","Po pierwsze, czytam wiadomości","Z drugiej strony nagłówki przesadzają"],"answer":0,
       "explain":"<b>Podsumowując</b> — стандартная финальная связка."},
      {"type":"type","howto":"<b>Что делать:</b> напиши два слова.",
       "q":"«проверять источники»","accept":["sprawdzać źródła","sprawdzac zrodla","sprawdzać zrodla"],"placeholder":"sprawdzać …"}
    ],
    "mnemonic":"📰 nagłówek → artykuł → źródło → sprawdzam. Четыре шага до собственного мнения."
   }
 ],
 "dialogue":{
   "intro":"Ужин у Марека. Спорят о новостях — вежливо, но всерьёз. Считай связки: их тут восемь.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Widziałaś ten nagłówek? Znowu sensacja bez źródła.","ru":"Ты видела этот заголовок? Опять сенсация без источника.",
      "words":[["nagłówek","заголовок"],["bez źródła","без источника"]]},
     {"who":"A","name":"Anna","side":"left","en":"Widziałam. Ale przeczytałam też sam artykuł.","ru":"Видела. Но я прочитала и саму статью.",
      "words":[["przeczytałam","прочитала"],["sam artykuł","саму статью"]]},
     {"who":"M","name":"Marek","side":"right","en":"I co? Moim zdaniem to czysta przesada.","ru":"И что? По-моему, это чистое преувеличение.",
      "words":[["Moim zdaniem","по-моему"],["przesada","преувеличение"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zgadzam się tylko częściowo. Po pierwsze, dane są prawdziwe.","ru":"Согласна только отчасти. Во-первых, данные настоящие.",
      "words":[["częściowo","отчасти"],["Po pierwsze","во-первых"]]},
     {"who":"M","name":"Marek","side":"right","en":"A po drugie?","ru":"А во-вторых?",
      "words":[["po drugie","во-вторых"]]},
     {"who":"A","name":"Anna","side":"left","en":"Po drugie, nagłówek jest zły, ale tekst rzetelny.","ru":"Во-вторых, заголовок плохой, но текст добросовестный.",
      "words":[["zły","плохой"],["rzetelny","добросовестный"]]},
     {"who":"M","name":"Marek","side":"right","en":"Z jednej strony masz rację. Z drugiej — kto czyta dalej niż nagłówek?","ru":"С одной стороны, ты права. С другой — кто читает дальше заголовка?",
      "words":[["Z jednej strony","с одной стороны"],["kto czyta","кто читает"]]},
     {"who":"A","name":"Anna","side":"left","en":"Ja. Mimo to zgadzam się, że warto sprawdzać źródła.","ru":"Я. Несмотря на это, согласна, что источники стоит проверять.",
      "words":[["Mimo to","несмотря на это"],["sprawdzać źródła","проверять источники"]]},
     {"who":"M","name":"Marek","side":"right","en":"Podsumowując: kłócimy się o coś, w czym się zgadzamy.","ru":"Подводя итог: мы спорим о том, в чём согласны.",
      "words":[["Podsumowując","подводя итог"],["kłócimy się","спорим"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — разговор в перерыве. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Skąd bierzesz wiadomości?","ru":"Откуда ты берёшь новости?"},
     {"who":"B","en":"Z dwóch portali. W przeciwieństwie do telewizji mogę wybrać.","ru":"С двух порталов. В отличие от телевидения, я могу выбирать."},
     {"who":"A","en":"Z jednej strony wybór, z drugiej — same nagłówki.","ru":"С одной стороны, выбор, с другой — одни заголовки."},
     {"who":"B","en":"Dlatego sprawdzam źródła. Zawsze.","ru":"Поэтому я проверяю источники. Всегда."},
     {"who":"A","en":"Zgadzam się. Choć rzadko mam na to czas.","ru":"Согласен. Хотя редко на это есть время."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — связки мнения и лексика медиа.",
   "items":[
     {"en":"po pierwsze / po drugie","ru":"во-первых / во-вторых","ex":"Po pierwsze, to tańsze."},
     {"en":"przede wszystkim","ru":"прежде всего","ex":"Przede wszystkim nie mam czasu."},
     {"en":"poza tym","ru":"кроме того","ex":"Poza tym zawsze jest kolejka."},
     {"en":"z jednej strony / z drugiej strony","ru":"с одной стороны / с другой стороны","ex":"Z jednej strony to wygodne."},
     {"en":"mimo to","ru":"несмотря на это","ex":"Jest drogo, mimo to warto."},
     {"en":"w przeciwieństwie do czegoś","ru":"в отличие от (do + род.)","ex":"W przeciwieństwie do telewizji…"},
     {"en":"zgadzam się z tobą","ru":"я согласен с тобой (z + твор.)","ex":"Zgadzam się z tobą."},
     {"en":"wydaje mi się, że…","ru":"мне кажется, что…","ex":"Wydaje mi się, że to przesada."},
     {"en":"mam wątpliwości","ru":"у меня есть сомнения","ex":"Mam wątpliwości co do tego."},
     {"en":"źródło","ru":"источник","ex":"Warto sprawdzać źródła."},
     {"en":"nagłówek","ru":"заголовок","ex":"Nagłówek obiecywał więcej."},
     {"en":"podsumowując","ru":"подводя итог","ex":"Podsumowując: czytam, ale nie wierzę od razu."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую связку к её переводу.",
   "pairs":[["po pierwsze","во-первых"],["z drugiej strony","с другой стороны"],["mimo to","несмотря на это"],["podsumowując","подводя итог"]]
 },
 "reading":{
   "intro":"Прочитай и послушай короткое мнение Анны — это готовый образец письменного текста на B1.",
   "title":"Skąd biorę wiadomości",
   "sentences":["Moim zdaniem sposób czytania wiadomości zmienił się w ciągu kilku lat.","Po pierwsze, prawie nikt nie kupuje już papierowej gazety.","Po drugie, nagłówki w internecie często obiecują więcej niż sam artykuł.","Z jednej strony mamy ogromny wybór źródeł.","Z drugiej strony trudniej sprawdzić, kto to napisał.","W przeciwieństwie do telewizji, w internecie mogę wybrać temat i czas.","Mimo to staram się czytać dwa różne portale.","Poza tym pytam ludzi, którzy znają się na sprawie lepiej ode mnie.","Wydaje mi się, że najważniejsze jest jedno pytanie: skąd to wiemy?","Podsumowując: czytam dużo, ale nie wierzę od razu."],
   "translation":"По-моему, способ чтения новостей изменился за несколько лет. Во-первых, почти никто уже не покупает бумажную газету. Во-вторых, заголовки в интернете часто обещают больше, чем сама статья. С одной стороны, у нас огромный выбор источников. С другой стороны, труднее проверить, кто это написал. В отличие от телевидения, в интернете я могу выбрать тему и время. Несмотря на это, я стараюсь читать два разных портала. Кроме того, спрашиваю людей, которые разбираются в теме лучше меня. Мне кажется, самый важный один вопрос: откуда мы это знаем? Подводя итог: читаю много, но не верю сразу."
 },
 "quiz":{
   "intro":"Пять вопросов — и каркас мнения собран.",
   "items":[
     {"q":"1. «Во-первых, это дешевле» —","opts":["Pierwszy, to tańsze","Po pierwsze, to tańsze","Za pierwsze, to tańsze"],"answer":1,
      "explain":"Нумерация аргументов — <b>po pierwsze</b>."},
     {"q":"2. «Хотя было дорого, мы купили» —","opts":["Mimo to było drogo, kupiliśmy","Mimo że było drogo, kupiliśmy","Poza tym było drogo, kupiliśmy"],"answer":1,
      "explain":"Придаточное вводит <b>mimo że</b>. Mimo to стоит между самостоятельными предложениями."},
     {"q":"3. «В отличие от телевидения» —","opts":["W przeciwieństwie do telewizja","W przeciwieństwie do telewizji","W przeciwieństwie telewizji"],"answer":1,
      "explain":"После do — родительный: <b>telewizji</b>."},
     {"q":"4. «Я с тобой согласен» —","opts":["Zgadzam się tobie","Zgadzam się z tobą","Zgadzam się o tobie"],"answer":1,
      "explain":"<b>Zgadzać się z</b> плюс творительный."},
     {"q":"5. <b>Podsumowując</b> значит —","opts":["во-первых","подводя итог","кроме того"],"answer":1,
      "explain":"<b>Podsumowując</b> — подводя итог; это деепричастие из дня 23."}
   ]
 },
 "essay":{
   "intro":"Твоё мнение — по каркасу, который сегодня собрали.",
   "prompt":"Напиши 6–7 предложений о том, откуда ты берёшь новости и доверяешь ли им. Используй po pierwsze, po drugie, z jednej strony, z drugiej strony, mimo to и закончи словом podsumowując.",
   "hint":"Каркас: Moim zdaniem… · Po pierwsze… · Po drugie… · Z jednej strony… z drugiej strony… · Mimo to… · Podsumowując… 📰",
   "example":"Moim zdaniem trudno dziś odróżnić informację od reklamy. Po pierwsze, nagłówki są pisane tak, żeby kliknąć. Po drugie, mało kto czyta cały tekst. Z jednej strony mamy więcej źródeł niż kiedykolwiek. Z drugiej strony rzadko sprawdzamy, kto za nimi stoi. Mimo to nie wracam do telewizji, bo tam nie mam wyboru. Podsumowując: czytam dwa portale, pytam ludzi i nie wierzę od razu."
 }
},
"29": {
 "day":29,"week":"04",
 "themeRu":"Большая история",
 "themeEn":"Wielka opowieść",
 "intro":"История — это не список событий, а порядок, в котором ты их выдаёшь. Сегодня собираем длинный рассказ: начало, поворот, чужие слова, одно «если бы» и пара причастий, чтобы текст зазвучал по-взрослому. Работаем на одной истории Анны — той, где она в первый раз пошла в urząd и всё пошло не так.",
 "introAudio":"История — это не список событий, а порядок, в котором ты их выдаёшь. Сегодня собираем длинный рассказ: начало, поворот, чужие слова, одно «если бы» и пара причастий, чтобы текст зазвучал по-взрослому. Работаем на одной истории Анны — той, где она в первый раз пошла в urząd и всё пошло не так.",
 "goals":[
   "Строить каркас рассказа: <b>najpierw, potem, nagle, w końcu, okazało się, że</b>",
   "Двигать героя приставками: <b>wyszłam, dojechałam, wróciłam, zdążyłam</b>",
   "Вставлять чужие слова и «если бы»: <b>powiedziała, że… gdybym…</b>",
   "Загущать текст причастиями и оценкой: <b>stojący przede mną, na szczęście</b>"
 ],
 "learned":[
   "Построил(а) каркас рассказа: najpierw, potem, nagle, w końcu, okazało się, że",
   "Подвигал(а) героя приставками: wyszłam, dojechałam, wróciłam, zdążyłam",
   "Вставил(а) чужие слова и «если бы»: powiedziała, że и gdybym",
   "Загустил(а) текст причастиями и оценкой: stojący przede mną, na szczęście"
 ],
 "review":{
   "intro":"Вчерашние связки — на разминку. Три вопроса о каркасе мнения и один о причастии: сегодня они встретятся в одном тексте.",
   "introAudio":"Вчерашние связки — на разминку. Три вопроса о каркасе мнения и один о причастии: сегодня они встретятся в одном тексте.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, что идёт после связки.",
      "q":"«Несмотря на это, я попробую» —","opts":["Mimo że spróbuję","Mimo to spróbuję","Poza tym spróbuję"],"answer":1,
      "explain":"Между самостоятельными предложениями — <b>mimo to</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после do.",
      "q":"«В отличие от газеты» —","opts":["W przeciwieństwie do gazeta","W przeciwieństwie do gazety","W przeciwieństwie gazecie"],"answer":1,
      "explain":"После do — родительный: <b>gazety</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни рецепт причастия.",
      "q":"«Человек, стоящий передо мной» —","opts":["człowiek stojąc przede mną","człowiek stojący przede mną","człowiek stanął przede mną"],"answer":1,
      "explain":"Форма на -ący отвечает на «какой»: <b>stojący</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Подводя итог, было хорошо»</b>","answer":"Podsumowując było dobrze"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Каркас",
    "title":"<em>Najpierw… potem… nagle… w końcu</em>",
    "paras":[
      "Любая история держится на четырёх словах: <b>najpierw</b> (сначала), <b>potem</b> или <b>następnie</b> (потом), <b>nagle</b> (вдруг), <b>w końcu</b> (в конце концов). Расставь их — и события выстроятся сами.",
      "Дальше идут повороты и оценки: <b>okazało się, że…</b> (оказалось, что), <b>na szczęście</b> (к счастью), <b>niestety</b> (к сожалению), <b>tymczasem</b> (тем временем), <b>tego samego dnia</b> (в тот же день).",
      "Вид глагола в рассказе работает как камера. Несовершенный держит фон: <b>Padał deszcz, ludzie czekali.</b> Совершенный даёт события: <b>Wyszłam, dojechałam, złożyłam.</b> Это ровно то же распределение, что в русском рассказе.",
      "И маленький приём, который делает текст живым: одно предложение в настоящем времени посреди прошедшего. <b>I nagle patrzę — dowodu nie ma.</b> Так рассказывают устно и по-польски, и по-русски."
    ],
    "audio":"Любая история держится на четырёх словах: najpierw — сначала, potem или następnie — потом, nagle — вдруг, w końcu — в конце концов. Расставь их, и события выстроятся сами. Дальше идут повороты и оценки: okazało się, że; na szczęście — к счастью; niestety — к сожалению; tymczasem — тем временем; tego samego dnia — в тот же день. Вид глагола в рассказе работает как камера. Несовершенный держит фон: padał deszcz, ludzie czekali. Совершенный даёт события: wyszłam, dojechałam, złożyłam. И маленький приём, который делает текст живым: одно предложение в настоящем времени посреди прошедшего. I nagle patrzę — dowodu nie ma.",
    "table":{"rows":[
      ["<b>Najpierw…</b> <button class=\"play\" data-say=\"Najpierw\">🔊</button>","Сначала…"],
      ["<b>Potem</b> / <b>następnie</b> <button class=\"play\" data-say=\"potem, następnie\">🔊</button>","Потом, затем"],
      ["<b>Nagle…</b> <button class=\"play\" data-say=\"Nagle\">🔊</button>","Вдруг…"],
      ["<b>Okazało się, że…</b> <button class=\"play\" data-say=\"Okazało się, że\">🔊</button>","Оказалось, что…"],
      ["<b>Na szczęście</b> / <b>niestety</b> <button class=\"play\" data-say=\"na szczęście, niestety\">🔊</button>","К счастью / к сожалению"],
      ["<b>W końcu…</b> <button class=\"play\" data-say=\"W końcu\">🔊</button>","В конце концов…"]
    ],"star":-1},
    "examples":[
      {"ru":"Сначала я думала, что это займёт полчаса.","en":"<b>Najpierw</b> myślałam, że to zajmie pół godziny.","say":"Najpierw myślałam, że to zajmie pół godziny."},
      {"ru":"Вдруг оказалось, что нужна ещё одна бумага.","en":"<b>Nagle okazało się, że</b> potrzebny jest jeszcze jeden papier.","say":"Nagle okazało się, że potrzebny jest jeszcze jeden papier."},
      {"ru":"К счастью, окно работало до пяти.","en":"<b>Na szczęście</b> okienko było czynne do piątej.","say":"Na szczęście okienko było czynne do piątej."},
      {"ru":"В конце концов я всё сдала в тот же день.","en":"<b>W końcu</b> złożyłam wszystko tego samego dnia.","say":"W końcu złożyłam wszystko tego samego dnia."}
    ],
    "mistakes":[
      {"wrong":"Najpierw wychodziłam z domu, potem dojeżdżałam.","right":"Najpierw <b>wyszłam</b> z domu, potem <b>dojechałam</b>.","why":"события рассказа идут совершенным видом. Несовершенный оставь для фона: padał deszcz."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> событие или фон?",
       "q":"«Сначала я вышла из дома» —","opts":["Najpierw wychodziłam z domu","Najpierw wyszłam z domu","Najpierw wyjdę z domu"],"answer":1,
       "explain":"Событие рассказа — совершенный вид: <b>wyszłam</b>."},
      {"type":"choice","q":"<b>Okazało się, że…</b> значит —",
       "opts":["оказалось, что…","показалось, будто…","решилось, что…"],"answer":0,
       "explain":"<b>Okazało się, że</b> — оказалось, что."},
      {"type":"type","howto":"<b>Что делать:</b> напиши одно слово.",
       "q":"«вдруг» по-польски","accept":["nagle"],"placeholder":"nag…"}
    ],
    "mnemonic":"🎬 Najpierw → potem → nagle → okazało się → w końcu. Пять слов — и история стоит на ногах."
   },
   {
    "eyebrow":"Правило 2 · Герой в движении",
    "title":"Приставки несут сюжет",
    "paras":[
      "Первая неделя уровня возвращается — в рассказе именно приставки двигают героя по карте. <b>Wyszłam</b> z domu, <b>dojechałam</b> na miejsce, <b>weszłam</b> do budynku, <b>wróciłam</b> po dokument, <b>przyszłam</b> jeszcze raz.",
      "Каждая приставка — как и в русском — говорит своё: <b>wy-</b> наружу, <b>do-</b> до цели, <b>w-</b> внутрь, <b>przy-</b> прибытие, <b>od-</b> прочь, <b>prze-</b> сквозь.",
      "Рядом два глагола, без которых не обходится ни одна история про сроки: <b>zdążyć</b> (успеть) и <b>spóźnić się</b> (опоздать). <b>Zdążyłam na ostatnią chwilę.</b> <b>Spóźniłam się o dziesięć minut.</b>",
      "И слова времени, которые связывают эпизоды: <b>po godzinie</b> (через час), <b>pół godziny później</b> (через полчаса), <b>tego samego dnia</b>, <b>następnego dnia</b> (на следующий день)."
    ],
    "audio":"Первая неделя уровня возвращается: в рассказе именно приставки двигают героя по карте. Wyszłam z domu, dojechałam na miejsce, weszłam do budynku, wróciłam po dokument, przyszłam jeszcze raz. Каждая приставка говорит своё: wy- наружу, do- до цели, w- внутрь, przy- прибытие, od- прочь, prze- сквозь. Рядом два глагола, без которых не обходится ни одна история про сроки: zdążyć — успеть и spóźnić się — опоздать. Zdążyłam na ostatnią chwilę. Spóźniłam się o dziesięć minut. И слова времени, которые связывают эпизоды: po godzinie — через час, pół godziny później, tego samego dnia, następnego dnia.",
    "table":{"rows":[
      ["<b>Wyszłam</b> z domu o ósmej. <button class=\"play\" data-say=\"Wyszłam z domu o ósmej\">🔊</button>","Я вышла из дома в восемь."],
      ["<b>Dojechałam</b> na miejsce po godzinie. <button class=\"play\" data-say=\"Dojechałam na miejsce po godzinie\">🔊</button>","Доехала на место через час."],
      ["<b>Weszłam</b> do budynku. <button class=\"play\" data-say=\"Weszłam do budynku\">🔊</button>","Я вошла в здание."],
      ["<b>Wróciłam</b> po dokument. <button class=\"play\" data-say=\"Wróciłam po dokument\">🔊</button>","Я вернулась за документом."],
      ["<b>Zdążyłam</b> na ostatnią chwilę. <button class=\"play\" data-say=\"Zdążyłam na ostatnią chwilę\">🔊</button>","Успела в последний момент."],
      ["<b>Spóźniłam się</b> o dziesięć minut. <button class=\"play\" data-say=\"Spóźniłam się o dziesięć minut\">🔊</button>","Опоздала на десять минут."]
    ],"star":4},
    "examples":[
      {"ru":"Я вышла раньше, но всё равно опоздала.","en":"<b>Wyszłam</b> wcześniej, ale i tak <b>się spóźniłam</b>.","say":"Wyszłam wcześniej, ale i tak się spóźniłam."},
      {"ru":"Пришлось вернуться домой за паспортом.","en":"Musiałam <b>wrócić</b> do domu <b>po paszport</b>.","gloss":"po плюс винительный — «за чем-то»","say":"Musiałam wrócić do domu po paszport."},
      {"ru":"Через полчаса я снова была в очереди.","en":"Pół godziny później znowu byłam w kolejce.","say":"Pół godziny później znowu byłam w kolejce."},
      {"ru":"В конце концов я успела до закрытия.","en":"W końcu <b>zdążyłam</b> przed zamknięciem.","say":"W końcu zdążyłam przed zamknięciem."}
    ],
    "mistakes":[
      {"wrong":"Wróciłam dla dokumentu.","right":"Wróciłam <b>po dokument</b>.","why":"«вернуться за чем-то» — po плюс винительный, а не dla."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни значение приставки.",
       "q":"«Я доехала на место через час» —","opts":["Przyjechałam na miejsce po godzinie","Dojechałam na miejsce po godzinie","Wyjechałam na miejsce po godzinie"],"answer":1,
       "explain":"До- отвечает польскому do-: <b>dojechałam</b>."},
      {"type":"choice","q":"«Я вернулась за документом» —",
       "opts":["Wróciłam dla dokumentu","Wróciłam po dokument","Wróciłam z dokumentem"],"answer":1,
       "explain":"«За чем-то» — <b>po</b> плюс винительный: po dokument."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Я успела в последний момент»</b>","answer":"Zdążyłam na ostatnią chwilę"}
    ],
    "mnemonic":"🚶 wy- → do- → w- → wróciłam → zdążyłam. Приставки ведут героя от двери до окошка."
   },
   {
    "eyebrow":"Правило 3 · Чужие слова и «если бы»",
    "title":"<em>Powiedziała, że…</em> и <em>gdybym…</em>",
    "paras":[
      "В хорошем рассказе кто-то обязательно говорит. Косвенная речь из дня 17 работает без сдвига времён — как в русском: <b>Powiedziała, że muszę wrócić.</b> <b>Spytała, czy mam dowód.</b> <b>Poprosiła, żebym wypełniła nowy formularz.</b>",
      "Обрати внимание на третью фразу: после <b>poprosiła, żeby</b> идёт л-форма — <b>żebym wypełniła</b>, не «żebym wypełnię». Это то самое место, где родное «чтобы я заполнила» подсказывает форму.",
      "«Если бы» из дня 16 в рассказе делает мораль: <b>Gdybym sprawdziła torbę rano, nie straciłabym dwóch godzin.</b> Одного такого предложения на историю достаточно — оно ставит точку лучше любого вывода.",
      "И третий слой — мысли героя: <b>Myślałam, że zdążę.</b> <b>Bałam się, że zamkną okienko.</b> <b>Miałam nadzieję, że to ostatni raz.</b> Внутренняя речь делает рассказ рассказом, а не протоколом."
    ],
    "audio":"В хорошем рассказе кто-то обязательно говорит. Косвенная речь из дня семнадцать работает без сдвига времён, как в русском: powiedziała, że muszę wrócić; spytała, czy mam dowód; poprosiła, żebym wypełniła nowy formularz. Обрати внимание на третью фразу: после poprosiła, żeby идёт л-форма — żebym wypełniła. Это то самое место, где родное «чтобы я заполнила» подсказывает форму. «Если бы» из дня шестнадцать в рассказе делает мораль: gdybym sprawdziła torbę rano, nie straciłabym dwóch godzin. Одного такого предложения на историю достаточно. И третий слой — мысли героя: myślałam, że zdążę; bałam się, że zamkną okienko; miałam nadzieję, że to ostatni raz.",
    "table":{"rows":[
      ["<b>Powiedziała, że</b> muszę wrócić. <button class=\"play\" data-say=\"Powiedziała, że muszę wrócić\">🔊</button>","Она сказала, что мне надо вернуться."],
      ["<b>Spytała, czy</b> mam dowód. <button class=\"play\" data-say=\"Spytała, czy mam dowód\">🔊</button>","Спросила, есть ли у меня документ."],
      ["<b>Poprosiła, żebym</b> wypełniła formularz. <button class=\"play\" data-say=\"Poprosiła, żebym wypełniła formularz\">🔊</button>","Попросила, чтобы я заполнила бланк."],
      ["<b>Myślałam, że</b> zdążę. <button class=\"play\" data-say=\"Myślałam, że zdążę\">🔊</button>","Я думала, что успею."],
      ["<b>Bałam się, że</b> zamkną okienko. <button class=\"play\" data-say=\"Bałam się, że zamkną okienko\">🔊</button>","Боялась, что закроют окно."],
      ["<b>Gdybym sprawdziła</b> torbę, nie straciłabym czasu. <button class=\"play\" data-say=\"Gdybym sprawdziła torbę, nie straciłabym czasu\">🔊</button>","Если бы я проверила сумку, не потеряла бы времени."]
    ],"star":5},
    "examples":[
      {"ru":"Она сказала, что придёт в три.","en":"<b>Powiedziała, że przyjdzie</b> o trzeciej.","gloss":"времена не сдвигаются","say":"Powiedziała, że przyjdzie o trzeciej."},
      {"ru":"Он спросил, всё ли у меня есть.","en":"<b>Spytał, czy</b> mam wszystko.","say":"Spytał, czy mam wszystko."},
      {"ru":"Она попросила, чтобы я пришла ещё раз.","en":"<b>Poprosiła, żebym</b> przyszła jeszcze raz.","say":"Poprosiła, żebym przyszła jeszcze raz."},
      {"ru":"Если бы я вышла раньше, успела бы.","en":"<b>Gdybym wyszła</b> wcześniej, <b>zdążyłabym</b>.","say":"Gdybym wyszła wcześniej, zdążyłabym."}
    ],
    "mistakes":[
      {"wrong":"Poprosiła, żebym wypełnię formularz.","right":"Poprosiła, <b>żebym wypełniła</b> formularz.","why":"после żeby всегда л-форма — как в русском «чтобы я заполнила»."},
      {"wrong":"Powiedziała, że musiałam wrócić.","right":"<b>Powiedziała, że muszę wrócić.</b>","why":"времена в польской косвенной речи не сдвигаются: сохраняем то, что человек сказал."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> следи за формой после żeby.",
       "q":"«Она попросила, чтобы я пришла» —","opts":["Poprosiła, żebym przyjdę","Poprosiła, żebym przyszła","Poprosiła, że przyjdę"],"answer":1,
       "explain":"После żeby — л-форма: <b>żebym przyszła</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> помни: сдвига времён нет.",
       "q":"«Он сказал, что придёт завтра» —","opts":["Powiedział, że przyszedł jutro","Powiedział, że przyjdzie jutro","Powiedział, że przychodziłby jutro"],"answer":1,
       "explain":"Времена не сдвигаются: <b>że przyjdzie</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Если бы я вышла раньше, я бы успела»</b>","answer":"Gdybym wyszła wcześniej zdążyłabym"}
    ],
    "mnemonic":"🗣️ powiedziała, że… · spytała, czy… · poprosiła, żebym… · gdybym…, …bym. Четыре голоса в одном рассказе."
   },
   {
    "eyebrow":"Правило 4 · Плотность текста",
    "title":"Причастия, деепричастия и одна оценка",
    "paras":[
      "То, что отличает B1 от A2, — не длина, а плотность. Там, где раньше стояли три коротких предложения, теперь помещается одно: <b>Człowiek stojący przede mną tłumaczył coś urzędniczce.</b>",
      "Деепричастие сшивает два действия: <b>Wychodząc z urzędu, zadzwoniłam do Marka.</b> <b>Czekając w kolejce, powtarzałam słówka.</b> Одно предложение вместо двух — и текст перестаёт спотыкаться.",
      "Оценка автора добавляет голос: <b>na szczęście</b>, <b>niestety</b>, <b>szczerze mówiąc</b>, <b>moim zdaniem</b>. Без них рассказ звучит как протокол, с ними — как человек.",
      "И финал. Хорошая история кончается не событием, а выводом: <b>Podsumowując: straciłam dwie godziny i nauczyłam się sprawdzać torbę.</b> Одна фраза — и весь текст получает смысл."
    ],
    "audio":"То, что отличает B1 от A2, — не длина, а плотность. Там, где раньше стояли три коротких предложения, теперь помещается одно: człowiek stojący przede mną tłumaczył coś urzędniczce. Деепричастие сшивает два действия: wychodząc z urzędu, zadzwoniłam do Marka; czekając w kolejce, powtarzałam słówka. Оценка автора добавляет голос: na szczęście, niestety, szczerze mówiąc, moim zdaniem. Без них рассказ звучит как протокол, с ними — как человек. И финал. Хорошая история кончается не событием, а выводом: podsumowując, straciłam dwie godziny i nauczyłam się sprawdzać torbę.",
    "table":{"rows":[
      ["człowiek <b>stojący</b> przede mną <button class=\"play\" data-say=\"człowiek stojący przede mną\">🔊</button>","человек, стоящий передо мной"],
      ["kobieta <b>pracująca</b> w okienku <button class=\"play\" data-say=\"kobieta pracująca w okienku\">🔊</button>","женщина, работающая в окне"],
      ["<b>Czekając</b> w kolejce, powtarzałam słówka. <button class=\"play\" data-say=\"Czekając w kolejce, powtarzałam słówka\">🔊</button>","Ожидая в очереди, я повторяла слова."],
      ["<b>Wychodząc</b> z urzędu, zadzwoniłam. <button class=\"play\" data-say=\"Wychodząc z urzędu, zadzwoniłam\">🔊</button>","Выходя из учреждения, я позвонила."],
      ["<b>Na szczęście</b> / <b>niestety</b> <button class=\"play\" data-say=\"na szczęście, niestety\">🔊</button>","К счастью / к сожалению"],
      ["<b>Podsumowując</b>… <button class=\"play\" data-say=\"Podsumowując\">🔊</button>","Подводя итог…"]
    ],"star":2},
    "examples":[
      {"ru":"Человек, стоявший передо мной, что-то объяснял сотруднице.","en":"Człowiek <b>stojący</b> przede mną tłumaczył coś urzędniczce.","say":"Człowiek stojący przede mną tłumaczył coś urzędniczce."},
      {"ru":"Ожидая в очереди, я повторяла слова.","en":"<b>Czekając</b> w kolejce, powtarzałam słówka.","say":"Czekając w kolejce, powtarzałam słówka."},
      {"ru":"К сожалению, в тот день окно закрылось раньше.","en":"<b>Niestety</b> tego dnia okienko zamknięto wcześniej.","gloss":"безличное -no из дня 19","say":"Niestety tego dnia okienko zamknięto wcześniej."},
      {"ru":"Подводя итог: я потеряла два часа и кое-чему научилась.","en":"<b>Podsumowując</b>: straciłam dwie godziny i czegoś się nauczyłam.","say":"Podsumowując, straciłam dwie godziny i czegoś się nauczyłam."}
    ],
    "mistakes":[
      {"wrong":"Czekając w kolejce, zadzwonił telefon.","right":"<b>Kiedy czekałam</b> w kolejce, zadzwonił telefon.","why":"ждала я, а звонил телефон: подлежащие разные, деепричастие не годится."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь подлежащее.",
       "q":"Какая фраза правильная?","opts":["Czekając w kolejce, powtarzałam słówka","Czekając w kolejce, zadzwonił telefon","Czekając w kolejce, było zimno"],"answer":0,
       "explain":"Ждала и повторяла — один человек. В остальных подлежащие разные."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери финал текста.",
       "q":"Чем лучше закончить рассказ?","opts":["Potem poszłam do domu","Podsumowując: straciłam dwie godziny i czegoś się nauczyłam","Nagle okazało się, że nie mam dowodu"],"answer":1,
       "explain":"История кончается выводом, а не последним событием."},
      {"type":"speak","howto":"Нажми микрофон и скажи это вслух — как рассказчик.",
       "target":"Czekając w kolejce, powtarzałam słówka i myślałam o egzaminie.","sub":"ожидая в очереди, я повторяла слова и думала об экзамене","want":"Czekając w kolejce, powtarzałam słówka i myślałam o egzaminie."}
    ],
    "mnemonic":"🧵 Причастие уплотняет, деепричастие сшивает, оценка добавляет голос, вывод ставит точку."
   }
 ],
 "dialogue":{
   "intro":"Анна рассказывает Мареку, как прошёл её первый поход в urząd. Обычный разговор — и почти весь уровень B1 внутри.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"No i jak było? Złożyłaś ten wniosek?","ru":"Ну и как прошло? Ты подала это заявление?",
      "words":[["No i jak było?","ну и как прошло?"],["Złożyłaś","ты подала"]]},
     {"who":"A","name":"Anna","side":"left","en":"Złożyłam. Ale za drugim razem.","ru":"Подала. Но со второго раза.",
      "words":[["za drugim razem","со второго раза"]]},
     {"who":"M","name":"Marek","side":"right","en":"Czyli co? Wyszłaś rano, dojechałaś, i…?","ru":"То есть? Вышла утром, доехала, и…?",
      "words":[["Czyli co?","то есть?"],["dojechałaś","ты доехала"]]},
     {"who":"A","name":"Anna","side":"left","en":"I nagle patrzę — dowodu nie ma. Został na stole w kuchni.","ru":"И вдруг смотрю — паспорта нет. Остался на столе на кухне.",
      "words":[["nagle","вдруг"],["Został","остался"]]},
     {"who":"M","name":"Marek","side":"right","en":"Wróciłaś po niego? Przecież to godzina w jedną stronę.","ru":"Вернулась за ним? Это же час в одну сторону.",
      "words":[["Wróciłaś po niego","вернулась за ним"],["w jedną stronę","в одну сторону"]]},
     {"who":"A","name":"Anna","side":"left","en":"Wróciłam. Urzędniczka powiedziała, że mogę przyjść do piątej.","ru":"Вернулась. Сотрудница сказала, что я могу прийти до пяти.",
      "words":[["powiedziała, że","сказала, что"],["do piątej","до пяти"]]},
     {"who":"M","name":"Marek","side":"right","en":"I zdążyłaś.","ru":"И ты успела.",
      "words":[["zdążyłaś","ты успела"]]},
     {"who":"A","name":"Anna","side":"left","en":"Na ostatnią chwilę. Gdybym sprawdziła torbę rano, nie straciłabym dwóch godzin.","ru":"В последний момент. Если бы я проверила сумку утром, не потеряла бы два часа.",
      "words":[["Na ostatnią chwilę","в последний момент"],["Gdybym sprawdziła","если бы я проверила"]]},
     {"who":"M","name":"Marek","side":"right","en":"Podsumowując: masz wniosek i historię na egzamin ustny.","ru":"Подводя итог: у тебя есть заявление и история для устного экзамена.",
      "words":[["Podsumowując","подводя итог"],["na egzamin ustny","для устного экзамена"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — та самая минута перед закрытием. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Przepraszam, zdążę jeszcze złożyć wniosek?","ru":"Извините, я ещё успею подать заявление?"},
     {"who":"B","en":"Za pięć piąta. Proszę szybko, mam już zamykać.","ru":"Без пяти пять. Побыстрее, мне уже пора закрывать."},
     {"who":"A","en":"Mam wszystko: formularz, dowód, potwierdzenie wpłaty.","ru":"У меня всё есть: бланк, паспорт, подтверждение оплаты."},
     {"who":"B","en":"Podpis na dole. O, i data.","ru":"Подпись внизу. О, и дата."},
     {"who":"A","en":"Gotowe. Bardzo dziękuję. Naprawdę.","ru":"Готово. Большое спасибо. Правда."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — скрепы рассказа: время, повороты, оценки.",
   "items":[
     {"en":"najpierw","ru":"сначала","ex":"Najpierw wyszłam z domu."},
     {"en":"potem / następnie","ru":"потом / затем","ex":"Potem dojechałam na miejsce."},
     {"en":"nagle","ru":"вдруг","ex":"Nagle okazało się, że nie mam dowodu."},
     {"en":"okazało się, że…","ru":"оказалось, что…","ex":"Okazało się, że okienko jest inne."},
     {"en":"na szczęście","ru":"к счастью","ex":"Na szczęście zdążyłam."},
     {"en":"niestety","ru":"к сожалению","ex":"Niestety straciłam dwie godziny."},
     {"en":"w końcu","ru":"в конце концов","ex":"W końcu wszystko się udało."},
     {"en":"zdążyć","ru":"успеть","ex":"Zdążyłam na ostatnią chwilę."},
     {"en":"spóźnić się","ru":"опоздать","ex":"Spóźniłam się o dziesięć minut."},
     {"en":"wrócić po coś","ru":"вернуться за чем-то","ex":"Wróciłam po dowód."},
     {"en":"tego samego dnia","ru":"в тот же день","ex":"Złożyłam wniosek tego samego dnia."},
     {"en":"podsumowując","ru":"подводя итог","ex":"Podsumowując: było warto."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую скрепу к её переводу.",
   "pairs":[["najpierw","сначала"],["nagle","вдруг"],["na szczęście","к счастью"],["w końcu","в конце концов"]]
 },
 "reading":{
   "intro":"Прочитай и послушай большую историю целиком. Здесь работает почти весь уровень: приставки, косвенная речь, gdyby, причастия и деепричастия.",
   "title":"Dzień, w którym wróciłam po dowód",
   "sentences":["Pierwszy raz szłam do urzędu we wrześniu i byłam pewna, że to zajmie pół godziny.","Wyszłam z domu o ósmej, bo bałam się kolejki.","Padał deszcz, a ludzie czekający przed wejściem stali pod parasolami.","Weszłam do środka, wzięłam numerek i usiadłam.","Czekając, powtarzałam w głowie zdanie: chciałabym złożyć wniosek.","Człowiek stojący przede mną tłumaczył coś urzędniczce przez dziesięć minut.","W końcu przyszła moja kolej — i nagle patrzę: dowodu nie ma.","Został na stole w kuchni, obok kubka z herbatą.","Urzędniczka powiedziała, że mogę wrócić do piątej, i poprosiła, żebym wzięła też potwierdzenie wpłaty.","Wróciłam do domu po dowód, zjadłam coś w pośpiechu i pojechałam z powrotem.","Tego samego dnia, za pięć piąta, złożyłam wniosek w okienku numer cztery.","Gdybym sprawdziła torbę rano, nie straciłabym dwóch godzin.","Wychodząc z urzędu, zadzwoniłam do Marka i śmiałam się z całej tej historii.","Podsumowując: straciłam pół dnia, ale mam wniosek i opowieść, którą umiem opowiedzieć po polsku."],
   "translation":"Первый раз я шла в учреждение в сентябре и была уверена, что это займёт полчаса. Я вышла из дома в восемь, потому что боялась очереди. Шёл дождь, и люди, ждавшие перед входом, стояли под зонтами. Я вошла внутрь, взяла талончик и села. Ожидая, повторяла в голове фразу: я хотела бы подать заявление. Человек, стоявший передо мной, что-то объяснял сотруднице десять минут. Наконец подошла моя очередь — и вдруг смотрю: паспорта нет. Он остался на столе на кухне, рядом с кружкой чая. Сотрудница сказала, что я могу вернуться до пяти, и попросила, чтобы я взяла ещё подтверждение оплаты. Я вернулась домой за паспортом, поела на бегу и поехала обратно. В тот же день, без пяти пять, я подала заявление в окне номер четыре. Если бы я проверила сумку утром, не потеряла бы двух часов. Выходя из учреждения, я позвонила Мареку и смеялась над всей этой историей. Подводя итог: я потеряла полдня, но у меня есть заявление и история, которую я умею рассказать по-польски."
 },
 "quiz":{
   "intro":"Пять вопросов — и рассказ держится сам.",
   "items":[
     {"q":"1. «Сначала я вышла из дома» —","opts":["Najpierw wychodziłam z domu","Najpierw wyszłam z domu","Najpierw wyjdę z domu"],"answer":1,
      "explain":"События рассказа — совершенный вид: <b>wyszłam</b>."},
     {"q":"2. «Я вернулась за документом» —","opts":["Wróciłam dla dokumentu","Wróciłam po dokument","Wróciłam z dokumentem"],"answer":1,
      "explain":"«За чем-то» — <b>po</b> плюс винительный."},
     {"q":"3. «Она попросила, чтобы я пришла» —","opts":["Poprosiła, żebym przyjdę","Poprosiła, żebym przyszła","Poprosiła, że przyjdę"],"answer":1,
      "explain":"После żeby — л-форма: <b>żebym przyszła</b>."},
     {"q":"4. «Если бы я вышла раньше, я бы успела» —","opts":["Gdyby wyszłam wcześniej, zdążyłabym","Gdybym wyszła wcześniej, zdążyłabym","Gdybym wyszłabym wcześniej, zdążyła"],"answer":1,
      "explain":"Лицо стоит при союзе: <b>gdybym wyszła</b>, дальше zdążyłabym."},
     {"q":"5. Какая фраза правильная?","opts":["Czekając w kolejce, zadzwonił telefon","Czekając w kolejce, powtarzałam słówka","Czekając w kolejce, było zimno"],"answer":1,
      "explain":"Деепричастие требует одного подлежащего: ждала и повторяла — один человек."}
   ]
 },
 "essay":{
   "intro":"Теперь твоя история. Не выдумывай сюжет — возьми день, который пошёл не по плану.",
   "prompt":"Напиши рассказ в 8–10 предложений о дне, когда что-то пошло не так: как начиналось, что случилось, что тебе сказали, как закончилось. Обязательно вставь одно причастие, одно деепричастие, одну косвенную речь и одно «если бы».",
   "hint":"Каркас: Najpierw… · Nagle okazało się, że… · Powiedziała, że… · Czekając…, … · Gdybym…, …bym · Podsumowując… 🧵",
   "example":"Najpierw wszystko szło dobrze: wyszedłem z domu wcześniej i dojechałem na czas. Ludzie czekający na przystanku mówili, że autobus ma opóźnienie. Nagle okazało się, że mój bilet stracił ważność poprzedniego dnia. Kontroler powiedział, że muszę zapłacić mandat, i poprosił, żebym pokazał dokument. Czekając na potwierdzenie, myślałem tylko o spotkaniu, na które się spóźniałem. Na szczęście koleżanka zadzwoniła i przełożyła spotkanie o godzinę. W końcu dotarłem na miejsce i nikt niczego nie zauważył. Gdybym sprawdził bilet w niedzielę, nie straciłbym stu złotych. Podsumowując: to był drogi, ale pouczający poniedziałek."
 }
},
"30": {
 "day":30,"week":"04",
 "themeRu":"Свободно о своём",
 "themeEn":"Swobodnie o swoim",
 "intro":"Тридцатый день. Месяц назад ты открыл(а) B1 с одной приставкой в руках — а сегодня у тебя система: приставки и вид, падежи множественного числа, <b>żeby</b> и <b>gdyby</b>, безличные формы, страдательный залог, причастия и деепричастия. Сегодня Анна сдаёт сертификатный экзамен, а ты пишешь свой финальный текст. Мы делаем это в один день — и это правильно.",
 "introAudio":"Тридцатый день. Месяц назад этот уровень начинался с одной приставки — а сегодня есть система: приставки и вид, падежи множественного числа, żeby и gdyby, безличные формы, страдательный залог, причастия и деепричастия. Сегодня Анна сдаёт сертификатный экзамен, а ты пишешь свой финальный текст. Мы делаем это в один день — и это правильно.",
 "goals":[
   "Понимать язык экзаменационного дня: <b>część pisemna, ustna, wynik</b>",
   "Собрать финальный текст из четырёх абзацев",
   "Подвести итог уровня: что теперь у тебя есть",
   "Увидеть мост к B2 — и закрыть <b>B1</b>"
 ],
 "learned":[
   "Понял(а) язык экзаменационного дня: część pisemna, ustna, wynik",
   "Собрал(а) финальный текст из четырёх абзацев",
   "Подвёл(а) итог уровня: что теперь есть в руках",
   "Увидел(а) мост к B2 — и закрыл(а) B1"
 ],
 "review":{
   "intro":"Последняя разминка уровня — по всему сразу: приставки, żeby, gdyby, безличное прошедшее и причастие. Через десять минут всё это соберётся в твой текст.",
   "introAudio":"Последняя разминка уровня — по всему сразу: приставки, żeby, gdyby, безличное прошедшее и причастие. Через десять минут всё это соберётся в твой текст.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни значение приставки.",
      "q":"«Мы доехали до Гданьска за три часа» —","opts":["Przejechaliśmy do Gdańska w trzy godziny","Dojechaliśmy do Gdańska w trzy godziny","Odjechaliśmy do Gdańska w trzy godziny"],"answer":1,
      "explain":"До- отвечает польскому do-: <b>dojechaliśmy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> следи за формой после союза.",
      "q":"«Я хочу, чтобы ты мне помог» —","opts":["Chcę, żebyś mi pomożesz","Chcę, żebyś mi pomógł","Chcę, że mi pomożesz"],"answer":1,
      "explain":"После żeby — л-форма: <b>żebyś mi pomógł</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни безличную форму.",
      "q":"«Магазин открыли в мае» —","opts":["Sklep otwarto w maju","Sklep był otwarto w maju","Sklep otwarty w maju"],"answer":0,
      "explain":"Безличное прошедшее: <b>otwarto</b>, форма неизменяемая."},
     {"type":"choice","howto":"<b>Что делать:</b> проверь падеж причастия.",
      "q":"Szukam nauczyciela ___ po polsku. (говорящего)","opts":["mówiący","mówiącego","mówiącym"],"answer":1,
      "explain":"После szukać — родительный: nauczyciela <b>mówiącego</b>."},
     {"type":"type","howto":"<b>Что делать:</b> напиши предложение с «если бы».",
      "q":"«Если бы у меня было время, я бы поехал» (мужчина)","accept":["gdybym miał czas, pojechałbym","gdybym mial czas, pojechalbym","gdybym miał czas pojechałbym"],"placeholder":"Gdybym miał …"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · День экзамена",
    "title":"<em>Egzamin certyfikatowy</em> изнутри",
    "paras":[
      "Государственный экзамен называется <b>egzamin certyfikatowy z języka polskiego jako obcego</b>. Он делится на <b>część pisemną</b> и <b>część ustną</b> — письменную и устную части.",
      "Письменная состоит из четырёх блоков: <b>rozumienie ze słuchu</b> (аудирование), <b>poprawność gramatyczna</b> (грамматика), <b>rozumienie tekstów pisanych</b> (чтение) и <b>pisanie</b> (письмо). Устная — это <b>mówienie</b>: разговор с комиссией.",
      "Слова вокруг: <b>arkusz</b> (бланк заданий), <b>termin</b> (дата), <b>wynik</b> (результат), <b>świadectwo</b> (свидетельство). Различай пару вида: <b>zdawać egzamin</b> — сдавать, процесс; <b>zdać egzamin</b> — сдать, результат.",
      "И то, что говорят перед дверью: <b>Powodzenia!</b> (удачи), <b>Dasz radę.</b> (справишься), <b>Trzymam za ciebie kciuki.</b> — буквально «держу за тебя большие пальцы». Русское «держу кулачки» о том же самом."
    ],
    "audio":"Государственный экзамен называется egzamin certyfikatowy z języka polskiego jako obcego. Он делится на część pisemną и część ustną, письменную и устную части. Письменная состоит из четырёх блоков: rozumienie ze słuchu — аудирование, poprawność gramatyczna — грамматика, rozumienie tekstów pisanych — чтение и pisanie — письмо. Устная — это mówienie, разговор с комиссией. Слова вокруг: arkusz — бланк заданий, termin — дата, wynik — результат, świadectwo — свидетельство. Различай пару вида: zdawać egzamin — сдавать, процесс; zdać egzamin — сдать, результат. И то, что говорят перед дверью: powodzenia, dasz radę, trzymam za ciebie kciuki.",
    "table":{"rows":[
      ["<b>egzamin certyfikatowy</b> <button class=\"play\" data-say=\"egzamin certyfikatowy\">🔊</button>","сертификатный экзамен"],
      ["<b>część pisemna</b> / <b>część ustna</b> <button class=\"play\" data-say=\"część pisemna, część ustna\">🔊</button>","письменная / устная часть"],
      ["<b>rozumienie ze słuchu</b> <button class=\"play\" data-say=\"rozumienie ze słuchu\">🔊</button>","аудирование"],
      ["<b>zdawać</b> — <b>zdać</b> <button class=\"play\" data-say=\"zdawać egzamin, zdać egzamin\">🔊</button>","сдавать — сдать"],
      ["<b>wynik</b>, <b>świadectwo</b> <button class=\"play\" data-say=\"wynik, świadectwo\">🔊</button>","результат, свидетельство"],
      ["<b>Trzymam za ciebie kciuki.</b> <button class=\"play\" data-say=\"Trzymam za ciebie kciuki\">🔊</button>","Держу за тебя кулачки."]
    ],"star":3},
    "examples":[
      {"ru":"В субботу я сдаю письменную часть.","en":"W sobotę <b>zdaję część pisemną</b>.","say":"W sobotę zdaję część pisemną."},
      {"ru":"Аудирование было легче, чем я думала.","en":"<b>Rozumienie ze słuchu</b> było łatwiejsze, niż myślałam.","say":"Rozumienie ze słuchu było łatwiejsze, niż myślałam."},
      {"ru":"Я сдала! Результат будет через месяц.","en":"<b>Zdałam!</b> <b>Wynik</b> będzie za miesiąc.","gloss":"zdałam — результат, совершенный вид","say":"Zdałam! Wynik będzie za miesiąc."},
      {"ru":"Удачи, ты справишься.","en":"<b>Powodzenia</b>, <b>dasz radę</b>.","say":"Powodzenia, dasz radę."}
    ],
    "mistakes":[
      {"wrong":"Wczoraj zdawałam egzamin i mam certyfikat.","right":"Wczoraj <b>zdałam</b> egzamin i mam certyfikat.","why":"результат — совершенный вид zdać. Zdawałam говорит только о процессе."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> итог известен или нет?",
       "q":"«Я сдала экзамен!» (успешно) —","opts":["Zdawałam egzamin!","Zdałam egzamin!","Będę zdawać egzamin!"],"answer":1,
       "explain":"Результат — совершенный вид: <b>zdałam</b>."},
      {"type":"choice","q":"<b>rozumienie ze słuchu</b> — это —",
       "opts":["чтение","аудирование","письмо"],"answer":1,
       "explain":"<b>Rozumienie ze słuchu</b> — понимание на слух."},
      {"type":"type","howto":"<b>Что делать:</b> напиши пожелание перед экзаменом.",
       "q":"«Удачи!» по-польски","accept":["powodzenia","powodzenia!"],"placeholder":"Powo…"}
    ],
    "mnemonic":"📝 słuchanie · gramatyka · czytanie · pisanie · mówienie. Пять дверей одного экзамена."
   },
   {
    "eyebrow":"Правило 2 · Твой финальный текст",
    "title":"Четыре абзаца, весь уровень",
    "paras":[
      "Финальный проект собирается из четырёх кусков, и каждый несёт свою грамматику. <b>Первый — откуда ты пришёл(шла):</b> прошедшее и приставки. <b>Rok temu przyjechałam do Polski i prawie nic nie rozumiałam.</b>",
      "<b>Второй — что изменилось:</b> сравнение и вид. <b>Teraz czytam ogłoszenia bez słownika i piszę listy, których nikt nie musi poprawiać.</b> Сюда же просится причастие: <b>ludzie mówiący szybko już mnie nie przerażają</b>.",
      "<b>Третий — мечта и «если бы»:</b> <b>Gdybym miała więcej czasu, czytałabym po polsku codziennie.</b> <b>Chciałabym kiedyś pracować po polsku.</b> Одно gdyby на текст — этого достаточно.",
      "<b>Четвёртый — мнение и пожелание:</b> <b>Moim zdaniem najtrudniejsze były formy bezosobowe.</b> И финал: <b>Życzę sobie cierpliwości — i jeszcze jednego poziomu.</b> Заметь, пожелание снова в родительном."
    ],
    "audio":"Финальный проект собирается из четырёх кусков, и каждый несёт свою грамматику. Первый — точка старта: прошедшее и приставки. Rok temu przyjechałam do Polski i prawie nic nie rozumiałam. Второй — что изменилось: сравнение и вид. Teraz czytam ogłoszenia bez słownika i piszę listy, których nikt nie musi poprawiać. Сюда же просится причастие: ludzie mówiący szybko już mnie nie przerażają. Третий — мечта и «если бы»: gdybym miała więcej czasu, czytałabym po polsku codziennie; chciałabym kiedyś pracować po polsku. Четвёртый — мнение и пожелание: moim zdaniem najtrudniejsze były formy bezosobowe. И финал: życzę sobie cierpliwości i jeszcze jednego poziomu. Заметь, пожелание снова в родительном.",
    "table":{"rows":[
      ["1. <b>Rok temu przyjechałam…</b> <button class=\"play\" data-say=\"Rok temu przyjechałam do Polski\">🔊</button>","откуда ты пришёл — прошедшее и приставки"],
      ["2. <b>Teraz czytam bez słownika…</b> <button class=\"play\" data-say=\"Teraz czytam ogłoszenia bez słownika\">🔊</button>","что изменилось — сравнение и вид"],
      ["2а. <b>ludzie mówiący szybko</b> <button class=\"play\" data-say=\"ludzie mówiący szybko\">🔊</button>","причастие для плотности"],
      ["3. <b>Gdybym miała więcej czasu…</b> <button class=\"play\" data-say=\"Gdybym miała więcej czasu, czytałabym codziennie\">🔊</button>","мечта — gdyby"],
      ["4. <b>Moim zdaniem…</b> <button class=\"play\" data-say=\"Moim zdaniem najtrudniejsze były formy bezosobowe\">🔊</button>","мнение — связки дня 28"],
      ["4а. <b>Życzę sobie cierpliwości.</b> <button class=\"play\" data-say=\"Życzę sobie cierpliwości\">🔊</button>","пожелание — родительный, день 27"]
    ],"star":-1},
    "examples":[
      {"ru":"Год назад я приехала в Польшу и почти ничего не понимала.","en":"<b>Rok temu przyjechałam</b> do Polski i prawie nic nie rozumiałam.","say":"Rok temu przyjechałam do Polski i prawie nic nie rozumiałam."},
      {"ru":"Теперь люди, говорящие быстро, меня уже не пугают.","en":"Teraz ludzie <b>mówiący</b> szybko już mnie nie przerażają.","gloss":"причастие из дня 22","say":"Teraz ludzie mówiący szybko już mnie nie przerażają."},
      {"ru":"Если бы у меня было больше времени, я читала бы каждый день.","en":"<b>Gdybym miała</b> więcej czasu, <b>czytałabym</b> codziennie.","say":"Gdybym miała więcej czasu, czytałabym codziennie."},
      {"ru":"Желаю себе терпения — и ещё одного уровня.","en":"<b>Życzę sobie cierpliwości</b> — i jeszcze jednego poziomu.","say":"Życzę sobie cierpliwości i jeszcze jednego poziomu."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни форму условного.",
       "q":"«Если бы у меня было больше времени, я читала бы каждый день» —","opts":["Gdyby miałam więcej czasu, czytałabym","Gdybym miała więcej czasu, czytałabym","Gdybym miałabym więcej czasu, czytała"],"answer":1,
       "explain":"Лицо стоит при союзе: <b>gdybym miała</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж пожеланий.",
       "q":"«Желаю себе терпения» —","opts":["Życzę sobie cierpliwość","Życzę sobie cierpliwości","Życzę siebie cierpliwości"],"answer":1,
       "explain":"Пожелание — родительный: <b>cierpliwości</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши первую строчку своего текста.",
       "q":"«Год назад я приехал(а) в Польшу» — начни как хочешь","accept":["rok temu przyjechałem do polski","rok temu przyjechałam do polski","rok temu przyjechalem do polski","rok temu przyjechalam do polski"],"placeholder":"Rok temu …"}
    ],
    "mnemonic":"🧱 Откуда → что изменилось → о чём мечтаю → что думаю и чего желаю. Четыре абзаца — весь B1."
   },
   {
    "eyebrow":"Правило 3 · Итог",
    "title":"Что теперь у тебя есть",
    "paras":[
      "<b>Приставки и глаголы движения.</b> przyjść, wyjść, dojechać, przejechać, biec и biegać, nieść и nosić — целая система, которая у русского и польского общая. Плюс фазовые глаголы: zacząć, skończyć, przestać.",
      "<b>Множественное число вглубь.</b> Родительный на -ów и с нулевым окончанием, суперрегулярные -om, -ami, -ach, собирательные dwoje и troje, склоняемое <b>który</b> и <b>swój</b>, конструкция <b>im… tym…</b>.",
      "<b>Сослагательность и безличность.</b> <b>żeby</b> с л-формой, <b>gdyby</b> для нереального, косвенная речь без сдвига времён, można, trzeba, warto, безличное -no и -to, страдательный залог с jest и został.",
      "<b>И эта неделя:</b> причастия на -ący, деепричастия на -ąc, уменьшительные, падежи чувств, официальный язык, праздники и каркас мнения. Посмотри на список ещё раз. Это не «немного больше слов» — это способность рассказать сложную историю и объяснить, что ты о ней думаешь."
    ],
    "audio":"Приставки и глаголы движения: przyjść, wyjść, dojechać, przejechać, biec и biegać, nieść и nosić — целая система, которая у русского и польского общая. Плюс фазовые глаголы: zacząć, skończyć, przestać. Множественное число вглубь: родительный на -ów и с нулевым окончанием, суперрегулярные -om, -ami, -ach, собирательные dwoje и troje, склоняемое który и swój, конструкция im, tym. Сослагательность и безличность: żeby с л-формой, gdyby для нереального, косвенная речь без сдвига времён, można, trzeba, warto, безличное -no и -to, страдательный залог с jest и został. И эта неделя: причастия на -ący, деепричастия на -ąc, уменьшительные, падежи чувств, официальный язык, праздники и каркас мнения. Это не «немного больше слов» — это способность рассказать сложную историю и объяснить, что ты о ней думаешь.",
    "table":{"rows":[
      ["<b>Prefiksy</b>: przyjść, wyjść, dojechać <button class=\"play\" data-say=\"przyjść, wyjść, dojechać\">🔊</button>","приставки — ядро недели 1"],
      ["<b>Liczba mnoga</b>: -ów, -om, -ami, -ach <button class=\"play\" data-say=\"kotów, kotom, kotami, kotach\">🔊</button>","падежи множественного числа"],
      ["<b>Który, swój</b>: z którym, swoją pracę <button class=\"play\" data-say=\"z którym, swoją pracę\">🔊</button>","полный параллелизм с русским"],
      ["<b>Żeby, gdyby</b>: żebyś przyszedł, gdybym miał <button class=\"play\" data-say=\"żebyś przyszedł, gdybym miał\">🔊</button>","сердце уровня"],
      ["<b>Formy bezosobowe</b>: zbudowano, można <button class=\"play\" data-say=\"zbudowano, można\">🔊</button>","безличность в три этажа"],
      ["<b>Imiesłowy</b>: czytający, czytając <button class=\"play\" data-say=\"czytający, czytając\">🔊</button>","причастие и деепричастие"]
    ],"star":3},
    "examples":[
      {"ru":"Я говорю по-польски о том, чего нет перед глазами.","en":"<b>Mówię po polsku</b> o tym, czego nie ma przed oczami.","say":"Mówię po polsku o tym, czego nie ma przed oczami."},
      {"ru":"Это был хороший месяц.","en":"To <b>był</b> dobry miesiąc.","say":"To był dobry miesiąc."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что было сердцем уровня.",
       "q":"Главная пара союзов B1, которая держит сложное предложение, —","opts":["ale и bo","żeby и gdyby","tylko и aż"],"answer":1,
       "explain":"<b>Żeby</b> и <b>gdyby</b> — сердце уровня: цель и нереальное условие, обе с л-формой."},
      {"type":"choice","q":"Какая форма НЕ меняется ни по родам, ни по числам?",
       "opts":["zbudowany","zbudowano","zbudowana"],"answer":1,
       "explain":"Безличное прошедшее <b>zbudowano</b> неизменяемо — в этом вся его суть."}
    ],
    "mnemonic":"🏁 Prefiksy · liczba mnoga · który i swój · żeby i gdyby · formy bezosobowe · imiesłowy. Это и есть B1."
   },
   {
    "eyebrow":"Правило 4 · Дальше",
    "title":"Мост к B2 — и одна тихая минута",
    "paras":[
      "Что ждёт на B2? Причастный оборот в письменной речи целиком, стилистика (когда <b>uprzejmie proszę</b>, а когда <b>daj znać</b>), фразеология и идиомы, длинный аргументированный текст, оттенки вида там, где сейчас хватает интуиции. Плюс беглость: не «успел собрать фразу», а «сказал».",
      "Всё это стоит на том, что уже собрано. B2 не начинает заново — он уплотняет. Приставки, żeby, gdyby, причастия остаются теми же, просто перестают требовать внимания.",
      "А теперь посмотри назад. Тридцать дней назад <b>przyszedłem</b> и <b>przyjechałem</b> были двумя незнакомыми словами. Сегодня ты читаешь объявление с причастным оборотом, пишешь письмо в учреждение и умеешь сказать, что думаешь, в четырёх связанных предложениях.",
      "Анна сегодня вышла из аудитории и позвонила Мареку: <b>Zdałam.</b> Ты сегодня закрываешь уровень. Разница между вами меньше, чем кажется. Спасибо за этот месяц — и до встречи на B2. 💛"
    ],
    "audio":"Что ждёт на B2? Причастный оборот в письменной речи целиком, стилистика — когда uprzejmie proszę, а когда daj znać, фразеология и идиомы, длинный аргументированный текст, оттенки вида там, где сейчас хватает интуиции. Плюс беглость: не «успел собрать фразу», а «сказал». Всё это стоит на том, что уже собрано. B2 не начинает заново, он уплотняет. А теперь посмотри назад. Тридцать дней назад przyszedłem и przyjechałem были двумя незнакомыми словами. Сегодня ты читаешь объявление с причастным оборотом, пишешь письмо в учреждение и умеешь сказать, что думаешь, в четырёх связанных предложениях. Анна сегодня вышла из аудитории и позвонила Мареку: zdałam. Ты сегодня закрываешь уровень. Разница между вами меньше, чем кажется. Спасибо за этот месяц — и до встречи на B2.",
    "table":{"rows":[
      ["<b>Zdałam.</b> <button class=\"play\" data-say=\"Zdałam\">🔊</button>","Я сдала."],
      ["<b>Poziom B1 za mną.</b> <button class=\"play\" data-say=\"Poziom B1 za mną\">🔊</button>","Уровень B1 за плечами."],
      ["<b>Idę dalej.</b> <button class=\"play\" data-say=\"Idę dalej\">🔊</button>","Иду дальше."],
      ["<b>Do zobaczenia na B2.</b> <button class=\"play\" data-say=\"Do zobaczenia na B2\">🔊</button>","До встречи на B2."]
    ],"star":0},
    "examples":[
      {"ru":"Уровень B1 за плечами — и я иду дальше.","en":"<b>Poziom B1 za mną</b> — i idę dalej.","say":"Poziom B1 za mną i idę dalej."},
      {"ru":"Год назад я бы в это не поверила.","en":"Rok temu <b>bym w to nie uwierzyła</b>.","say":"Rok temu bym w to nie uwierzyła."}
    ],
    "tasks":[
      {"type":"speak","howto":"Нажми микрофон и скажи это вслух. Ты имеешь полное право.",
       "target":"Mówię po polsku o tym, co myślę i co czuję.","sub":"я говорю по-польски о том, что думаю и что чувствую","want":"Mówię po polsku o tym, co myślę i co czuję."}
    ],
    "mnemonic":"💛 B1 — это когда язык перестаёт быть предметом и становится способом. Дальше только плотнее."
   }
 ],
 "dialogue":{
   "intro":"Последний диалог уровня. Анна выходит после устной части — и в её словах почти всё, что мы прошли за тридцать дней.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"No i? Wyszłaś pierwsza, więc chyba dobrze.","ru":"Ну и? Ты вышла первой, значит, наверное, хорошо.",
      "words":[["Wyszłaś pierwsza","ты вышла первой"],["chyba","наверное"]]},
     {"who":"A","name":"Anna","side":"left","en":"Trzymałeś kciuki? Bo część ustna była najłatwiejsza.","ru":"Ты держал кулачки? Потому что устная часть была самой лёгкой.",
      "words":[["Trzymałeś kciuki","держал кулачки"],["najłatwiejsza","самая лёгкая"]]},
     {"who":"M","name":"Marek","side":"right","en":"A słuchanie? Bałaś się go najbardziej.","ru":"А аудирование? Ты его боялась больше всего.",
      "words":[["słuchanie","аудирование"],["najbardziej","больше всего"]]},
     {"who":"A","name":"Anna","side":"left","en":"Okazało się, że mówili wolniej niż ludzie w urzędzie.","ru":"Оказалось, что говорили медленнее, чем люди в учреждении.",
      "words":[["Okazało się","оказалось"],["wolniej niż","медленнее, чем"]]},
     {"who":"M","name":"Marek","side":"right","en":"A pisanie? Miałaś napisać list, prawda?","ru":"А письмо? Нужно было написать письмо, да?",
      "words":[["pisanie","письмо"],["prawda?","да?"]]},
     {"who":"A","name":"Anna","side":"left","en":"List do urzędu. Szanowni Państwo, uprzejmie proszę o… i tak dalej.","ru":"Письмо в учреждение. Уважаемые господа, убедительно прошу… и так далее.",
      "words":[["Szanowni Państwo","уважаемые господа"],["i tak dalej","и так далее"]]},
     {"who":"M","name":"Marek","side":"right","en":"Czyli ćwiczyłaś to dokładnie wtedy, kiedy trzeba było.","ru":"То есть ты тренировала это ровно тогда, когда было нужно.",
      "words":[["ćwiczyłaś","ты тренировала"],["kiedy trzeba było","когда было нужно"]]},
     {"who":"A","name":"Anna","side":"left","en":"Gdybym rok temu usłyszała to pytanie, uciekłabym z sali.","ru":"Если бы я год назад услышала этот вопрос, я бы убежала из аудитории.",
      "words":[["Gdybym usłyszała","если бы я услышала"],["uciekłabym","я бы убежала"]]},
     {"who":"M","name":"Marek","side":"right","en":"A dziś stoisz tu i opowiadasz mi wszystko po polsku.","ru":"А сегодня стоишь тут и рассказываешь мне всё по-польски.",
      "words":[["stoisz","стоишь"],["opowiadasz","рассказываешь"]]},
     {"who":"A","name":"Anna","side":"left","en":"Podsumowując: zdałam. Chyba zdałam.","ru":"Подводя итог: я сдала. Кажется, сдала.",
      "words":[["Podsumowując","подводя итог"],["zdałam","я сдала"]]}
   ]
 },
 "scene":{
   "intro":"И последняя сценка уровня — короткое поздравление. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Skończyłaś poziom B1. Gratulacje!","ru":"Ты закончила уровень B1. Поздравляю!"},
     {"who":"B","en":"Miesiąc temu bałam się długich zdań.","ru":"Месяц назад я боялась длинных предложений."},
     {"who":"A","en":"A teraz piszesz listy do urzędu.","ru":"А теперь пишешь письма в учреждение."},
     {"who":"B","en":"I opowiadam całe historie. Nawet te nieudane.","ru":"И рассказываю целые истории. Даже неудачные."},
     {"who":"A","en":"Wszystkiego najlepszego. Do zobaczenia na B2!","ru":"Всего наилучшего. До встречи на B2!"}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов финального дня — те, на которых держится итог.",
   "items":[
     {"en":"egzamin certyfikatowy","ru":"сертификатный экзамен","ex":"W sobotę mam egzamin certyfikatowy."},
     {"en":"część pisemna / ustna","ru":"письменная / устная часть","ex":"Część ustna była najłatwiejsza."},
     {"en":"rozumienie ze słuchu","ru":"аудирование","ex":"Rozumienie ze słuchu było łatwiejsze."},
     {"en":"zdawać / zdać","ru":"сдавать / сдать","ex":"Zdałam egzamin!"},
     {"en":"wynik","ru":"результат","ex":"Wynik będzie za miesiąc."},
     {"en":"świadectwo","ru":"свидетельство","ex":"Świadectwo przyjdzie pocztą."},
     {"en":"Powodzenia!","ru":"Удачи!","ex":"Powodzenia na egzaminie!"},
     {"en":"Trzymam kciuki","ru":"держу кулачки","ex":"Trzymam za ciebie kciuki."},
     {"en":"dasz radę","ru":"у тебя получится","ex":"Nie bój się, dasz radę."},
     {"en":"poziom","ru":"уровень","ex":"Poziom B1 za mną."},
     {"en":"iść dalej","ru":"идти дальше","ex":"Skończyłam i idę dalej."},
     {"en":"do zobaczenia","ru":"до встречи","ex":"Do zobaczenia na B2!"}
   ]
 },
 "drag":{
   "intro":"Последняя игра уровня. Перетащи польскую фразу к её переводу.",
   "pairs":[["zdałam","я сдала"],["część ustna","устная часть"],["Trzymam kciuki","держу кулачки"],["Powodzenia!","Удачи!"]]
 },
 "reading":{
   "intro":"Прочитай и послушай финальный текст Анны — тот, который она написала вечером после экзамена. Это образец твоего проекта.",
   "title":"Rok później",
   "sentences":["Rok temu przyjechałam do Polski i prawie nic nie rozumiałam.","Pierwsze tygodnie były najtrudniejsze: ludzie mówiący szybko brzmieli jak jedno długie słowo.","Potem zaczęłam się uczyć codziennie, wracając z pracy i czekając w kolejkach.","Teraz czytam ogłoszenia bez słownika i piszę listy, których nikt nie musi poprawiać.","Dziś zdawałam egzamin certyfikatowy na poziomie B1.","Najbardziej bałam się słuchania, ale okazało się, że mówili wolniej niż ludzie w urzędzie.","W części pisemnej trzeba było napisać list do instytucji — akurat to ćwiczyłam w grudniu.","Gdybym rok temu zobaczyła ten arkusz, zamknęłabym go i wyszła.","Moim zdaniem najtrudniejsze w polskim są formy bezosobowe i te wszystkie końcówki liczby mnogiej.","Z drugiej strony przedrostki i zdania z żeby okazały się prawie darmowe.","Chciałabym kiedyś pracować po polsku i nie tłumaczyć w głowie każdego zdania.","Życzę sobie cierpliwości, dobrych rozmówców i jeszcze jednego poziomu.","Podsumowując: to był dobry rok.","A wynik i tak przyjdzie dopiero za miesiąc."],
   "translation":"Год назад я приехала в Польшу и почти ничего не понимала. Первые недели были самыми трудными: люди, говорящие быстро, звучали как одно длинное слово. Потом я начала заниматься каждый день, возвращаясь с работы и стоя в очередях. Теперь я читаю объявления без словаря и пишу письма, которые никому не нужно править. Сегодня я сдавала сертификатный экзамен на уровне B1. Больше всего я боялась аудирования, но оказалось, что говорили медленнее, чем люди в учреждении. В письменной части нужно было написать письмо в организацию — как раз это я тренировала в декабре. Если бы я год назад увидела этот бланк, я бы закрыла его и вышла. По-моему, самое трудное в польском — безличные формы и все эти окончания множественного числа. С другой стороны, приставки и предложения с żeby оказались почти бесплатными. Мне хотелось бы когда-нибудь работать по-польски и не переводить в голове каждое предложение. Желаю себе терпения, хороших собеседников и ещё одного уровня. Подводя итог: это был хороший год. А результат всё равно придёт только через месяц."
 },
 "quiz":{
   "intro":"Последние вопросы уровня — по всему, что было за тридцать дней. Ответишь — и B1 за плечами. Я тобой горжусь. 💛",
   "items":[
     {"q":"1. «Мы доехали до Гданьска за три часа» —","opts":["Przejechaliśmy do Gdańska w trzy godziny","Dojechaliśmy do Gdańska w trzy godziny","Odjechaliśmy do Gdańska w trzy godziny"],"answer":1,
      "explain":"До- отвечает польскому do-: <b>dojechaliśmy</b>."},
     {"q":"2. «Я хочу, чтобы ты пришёл» —","opts":["Chcę, żebyś przyjdziesz","Chcę, żebyś przyszedł","Chcę, że przyjdziesz"],"answer":1,
      "explain":"После żeby — л-форма: <b>żebyś przyszedł</b>."},
     {"q":"3. «Музей построили в 1900 году» —","opts":["Muzeum zbudowano w 1900 roku","Muzeum było zbudowano w 1900 roku","Muzeum zbudowany w 1900 roku"],"answer":0,
      "explain":"Безличное прошедшее <b>zbudowano</b> — форма неизменяемая."},
     {"q":"4. «Человек, интересующийся историей» —","opts":["człowiek interesujący historią","człowiek interesujący się historią","człowiek interesujący się historii"],"answer":1,
      "explain":"Причастие сохраняет и się, и творительный падеж глагола."},
     {"q":"5. Какая фраза правильная?","opts":["Wracając do domu, zaczęło padać","Wracając do domu, spotkałam Marka","Wracając do domu, było zimno"],"answer":1,
      "explain":"Деепричастие требует одного подлежащего для обоих действий."},
     {"q":"6. «Весёлого Рождества и счастливого Нового года!» —","opts":["Wesołe Święta i Szczęśliwy Nowy Rok!","Wesołych Świąt i Szczęśliwego Nowego Roku!","Wesołym Świętom i Szczęśliwemu Nowemu Rokowi!"],"answer":1,
      "explain":"Пожелания стоят в родительном падеже — за ними невысказанное życzę."}
   ]
 },
 "essay":{
   "intro":"Вот он — финальный проект уровня. Не спеши: это последняя страница B1, и она твоя. Пиши так, как говоришь, — своими словами, пусть и с ошибками.",
   "prompt":"Напиши текст в 10–12 предложений: откуда ты пришёл(шла) год назад, что изменилось, что до сих пор трудно, о чём мечтаешь и что думаешь о польском языке. Обязательно вставь одно причастие на -ący, одно деепричастие на -ąc, одно «если бы» с gdyby и одно пожелание в родительном.",
   "hint":"Каркас: Rok temu… · Teraz… · Ludzie mówiący… już mnie nie… · Ucząc się…, … · Gdybym…, …bym · Moim zdaniem… · Życzę sobie… 💛",
   "example":"Rok temu zacząłem uczyć się polskiego i rozumiałem tylko pojedyncze słowa. Ludzie mówiący szybko brzmieli dla mnie jak jedno długie zdanie. Uczyłem się wieczorami, wracając z pracy i czekając na autobus. Teraz czytam ogłoszenia bez słownika i potrafię napisać list do urzędu. Najtrudniejsze były formy bezosobowe i końcówki liczby mnogiej. Z drugiej strony przedrostki okazały się prawie darmowe, bo działają jak w moim języku. Nadal mylę cieszyć się z i cieszyć się na. Gdybym miał więcej czasu, czytałbym po polsku codziennie. Chciałbym kiedyś pracować po polsku i nie tłumaczyć w głowie każdego zdania. Moim zdaniem najważniejsze jest mówić, nawet z błędami. Życzę sobie cierpliwości i jeszcze jednego poziomu. Podsumowując: to był dobry rok."
 }
}
};
